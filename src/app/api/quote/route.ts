import { NextResponse } from "next/server";

type QuoteBody = {
  company?: string;
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  interest?: string;
  start?: string;
  message?: string;
  consent?: boolean;
};

export async function POST(request: Request) {
  let body: QuoteBody;
  try {
    body = (await request.json()) as QuoteBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.company || !body.name || !body.email || !body.consent) {
    return NextResponse.json({ error: "Incomplete brief" }, { status: 400 });
  }

  const reference = `EST-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;
  return NextResponse.json({ ok: true, reference });
}
