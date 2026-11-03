import { NextRequest, NextResponse } from "next/server";
import { stories } from "@/lib/data";
async function buildReport(req: NextRequest) {
 const secret=process.env.CRON_SECRET;
 if(secret && req.headers.get("authorization")!==`Bearer ${secret}`) return NextResponse.json({error:"Unauthorized"},{status:401});
 const verified=stories.filter(s=>s.status==="verified");
 return NextResponse.json({
  title:"渔人村地产周报",period:"本周",generatedAt:new Date().toISOString(),
  executiveSummary:"本期重点是规划风险核查、社区市场数据口径，以及周边新盘供应跟踪。当前数据集尚未接入实时 MLS，因此不发布未经核验的房价涨跌结论。",
  sections:[
   {heading:"本周重点",items:verified.map(s=>({title:s.title,summary:s.summary,source:s.source,url:s.url}))},
   {heading:"买家观察",items:["对目标物业逐址核查规划、洪泛区及保险条件。","比较同社区、同房型、相近房龄的近期成交，而非只看挂牌价。"]},
   {heading:"卖家观察",items:["定价应以同类近期成交、竞争挂牌和市场天数为基础。","披露房屋状况与重要限制，减少交易后争议。"]},
   {heading:"投资者观察",items:["把租金、空置、融资、税费、维修和交易成本纳入现金流。","新盘广告价与交付后转售市场需分开评估。"]}
  ],
  disclaimer:"仅供一般信息参考，不构成估价、法律、税务、贷款或投资建议。"
 });
}
export async function GET(req:NextRequest){return buildReport(req)}
export async function POST(req:NextRequest){return buildReport(req)}