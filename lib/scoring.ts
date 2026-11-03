export type ScoreInput={localImpact:number;priceImpact:number;reliability:number;timeliness:number;investorValue:number};
export function scoreStory(x:ScoreInput):number{
 const clamp=(n:number)=>Math.max(0,Math.min(100,n));
 return Math.round(clamp(x.localImpact)*.30+clamp(x.priceImpact)*.25+clamp(x.reliability)*.20+clamp(x.timeliness)*.15+clamp(x.investorValue)*.10);
}