/*
==================================================
ROMI TRADERS
Enterprise Logger
==================================================
*/

export enum LogLevel {
  INFO = "INFO",
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  ERROR = "ERROR",
  SECURITY = "SECURITY"
}

interface LogData {
  message: string;
  source?: string;
  userId?: string;
  ip?: string;
  metadata?: unknown;
}

class Logger {
  private write(level: LogLevel, data: LogData) {
    const log = {
      timestamp: new Date().toISOString(),
      level,
      message: data.message,
      source: data.source ?? "SYSTEM",
      userId: data.userId ?? null,
      ip: data.ip ?? null,
      metadata: data.metadata ?? null
    };

    if (process.env.NODE_ENV === "development") {
      console.log(log);
    } else {
      console.log(JSON.stringify(log));
    }
  }

  info(message: string, source?: string) {
    this.write(LogLevel.INFO, {
      message,
      source
    });
  }

  success(message: string, source?: string) {
    this.write(LogLevel.SUCCESS, {
      message,
      source
    });
  }

  warning(message: string, source?: string) {
    this.write(LogLevel.WARNING, {
      message,
      source
    });
  }

  error(
    message: string,
    error?: unknown,
    source?: string
  ) {
    this.write(LogLevel.ERROR, {
      message,
      source,
      metadata: error
    });
  }

  security(
    message: string,
    userId?: string,
    ip?: string
  ) {
    this.write(LogLevel.SECURITY, {
      message,
      source: "SECURITY",
      userId,
      ip
    });
  }

  auth(
    message: string,
    userId?: string
  ) {
    this.info(message, `AUTH (${userId ?? "Guest"})`);
  }

  api(
    method: string,
    endpoint: string,
    status: number
  ) {
    this.info(
      `${method} ${endpoint} → ${status}`,
      "API"
    );
  }

  order(
    orderNumber: string,
    message: string
  ) {
    this.info(
      `${orderNumber}: ${message}`,
      "ORDER"
    );
  }

  payment(
    transactionId: string,
    message: string
  ) {
    this.info(
      `${transactionId}: ${message}`,
      "PAYMENT"
    );
  }
}

const logger = new Logger();

export default logger;
