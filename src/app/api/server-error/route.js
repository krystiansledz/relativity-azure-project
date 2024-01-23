import { NextResponse } from 'next/server'

export async function GET() {
  const test = {}

  test.a.b; // throw 500 error
}