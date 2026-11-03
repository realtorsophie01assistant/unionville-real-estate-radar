import { NextRequest, NextResponse } from "next/server";
import Parser from "rss-parser";
const parser = new Parser();
const FEEDS = [
 {name:"City of Markham News",url:"https://www.markham.ca/about-city-markham/news"},
 {name:"Bank of Canada",url:"https://www.bankofcanada.ca/feed/"}
];
export async function POST(req: NextRequest) {
 const secret=process.env.CRON_SECRET;
 if(secret && req.headers.get("authorization")!==`Bearer ${secret}`) return NextResponse.json({error:"Unauthorized"},{status:401});
 const results=await Promise.allSettled(FEEDS.filter(f=>f.url.endsWith(".xml")||f.url.endsWith("/feed/")).map(async feed=>{
  const parsed=await parser.parseURL(feed.url);
  return (parsed.items||[]).slice(0,20).map(item=>({title:item.title||"Untitled",link:item.link||"",date:item.isoDate||item.pubDate||null,source:feed.name,summary:(item.contentSnippet||item.content||"").slice(0,1200)}));
 }));
 const items=results.flatMap(r=>r.status==="fulfilled"?r.value:[]);
 return NextResponse.json({fetchedAt:new Date().toISOString(),count:items.length,items,note:"MVP ingestion endpoint. Persist, deduplicate, classify and score items before production use."});
}