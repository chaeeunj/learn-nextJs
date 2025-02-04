import { NextRequest, NextResponse } from 'next/server';
import { resolve } from 'path';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request: NextRequest) {
  const randomDelay = Math.floor(Math.random() * 5000);
  console.log('random delay', randomDelay);

  await delay(randomDelay);

  return NextResponse.json({ data: `${randomDelay}만에 응답완료` });
}
