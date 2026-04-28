import { NextResponse } from "next/server";
import { getPortfolioData } from "@/lib/services/portfolio-service";

export async function GET() {
  const data = await getPortfolioData();
  return NextResponse.json(data);
}
