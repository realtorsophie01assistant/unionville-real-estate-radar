export type Story={id:string;title:string;summary:string;category:string;area:string;source:string;url:string;publishedAt:string;score:number;impact:string;status:"verified"|"watch"|"sample"};
export const areas=["Unionville","Old Unionville","South Unionville","Upper Unionville","Downtown Markham","Berczy Village","Markville","Cachet","Buttonville","Angus Glen","Milliken Mills"];
export const stories:Story[]=[
 {id:"s1",title:"Unionville 特别政策区：洪泛风险与规划审批仍需逐址核查",summary:"万锦市已完成 Unionville Special Policy Area 边界更新。买家在评估河道、低洼地块或拟改建物业时，应核对具体地址的洪泛区图层、保险条件及规划限制。",category:"城市规划",area:"Unionville",source:"City of Markham",url:"https://www.markham.ca/economic-development-business/planning-development-services/planning-and-urban-design-initiatives/unionville-special-policy-area-boundary-review",publishedAt:"官方资料",score:94,impact:"买家 / 投资者",status:"verified"},
 {id:"s2",title:"TRREB 社区报告可用于建立 Unionville 房型基准",summary:"TRREB 按季度发布 Markham 社区市场报告，包含不同房型的成交量、价格、新挂牌量、售挂比和市场天数。应按季度及房型比较，避免把不同产品混成单一均价。",category:"市场数据",area:"Unionville",source:"TRREB",url:"https://trreb.ca/market-data/market-watch/",publishedAt:"持续更新",score:88,impact:"买家 / 卖家 / 投资者",status:"verified"},
 {id:"s3",title:"Union Village 新社区供应值得持续追踪",summary:"16th Avenue 与 Kennedy Road 一带有大型规划社区开发。跟踪新阶段推出、房型组合、交付时间和开发商披露；广告售价不等同于最终成交价。",category:"新盘开发",area:"Upper Unionville",source:"项目官网",url:"https://unionvillagemarkham.com/",publishedAt:"持续更新",score:76,impact:"买家 / 投资者",status:"watch"},
 {id:"s4",title:"社区价格不可只看单一中位数",summary:"Unionville 内部存在独立屋、镇屋、公寓及不同房龄产品。周报应按房型、社区和成交样本量拆分，并同时披露统计周期与来源。",category:"分析方法",area:"全区域",source:"Radar 编辑规则",url:"https://trreb.ca/",publishedAt:"编辑说明",score:71,impact:"所有读者",status:"sample"}
];
export const marketCards=[
 {label:"市场温度",value:"待数据接入",note:"不以模拟数字冒充实时行情"},
 {label:"本周有效情报",value:"4 条",note:"含官方资料与观察项"},
 {label:"覆盖社区",value:"11 个",note:"Unionville + 周边"},
 {label:"数据状态",value:"公开来源",note:"MLS 需授权接入"}
];