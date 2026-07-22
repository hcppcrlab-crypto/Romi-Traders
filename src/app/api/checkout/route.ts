import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    return NextResponse.json({
      url: "https://checkout.stripe.com/pay/sample-session-id",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Payment checkout failed" },
      { status: 500 }
    );
  }
}
