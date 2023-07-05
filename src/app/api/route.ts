import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json({ data: Math.floor(Math.random()*1000) }, { status: 200 })
}