import { NextResponse } from "next/server";
import { stories } from "@/lib/data";
export async function GET() {
 return NextResponse.json({generatedAt:new Date().toISOString(),dataMode:"seed",disclaimer:"当前为产品演示种子数据；接入真实数据源后才展示实时市场指标。",stories});
}