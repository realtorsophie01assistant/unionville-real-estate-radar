# 渔人村地产周报 · Unionville Real Estate Radar

面向买家、卖家、投资者的中文本地房地产情报 MVP。技术栈：Next.js 14、React、TypeScript。

## 当前包含
- 响应式中文首页和市场雷达
- Unionville + 周边 11 个社区覆盖
- 情报评分函数（本地影响 30%、价格影响 25%、可靠性 20%、时效性 15%、投资价值 10%）
- `/api/stories` 种子情报 API
- `/api/ingest` RSS 采集 API（基础示例）
- `/api/weekly-report` 周报 JSON 生成 API
- 明确区分 verified / watch / sample，避免把示例数据伪装成实时数据

## 本地运行
需要 Node.js 20+。
```bash
npm install
cp .env.example .env.local
npm run dev
```
打开 http://localhost:3000

## API
- `GET /api/stories`
- `POST /api/ingest`：可选 `Authorization: Bearer $CRON_SECRET`
- `POST /api/weekly-report`：可选 `Authorization: Bearer $CRON_SECRET`

## 上线前必须完成
1. **真实地产数据**：通过 TRREB/MLS 授权经纪或数据供应商接入；禁止抓取受限制的 MLS 页面或把挂牌价当成交价。
2. **持久化**：将采集结果写入 PostgreSQL；增加 canonical URL、标题指纹和时间窗口去重。
3. **采集源适配器**：逐一验证 RSS/Atom、政府开放数据接口；当前 `/api/ingest` 是演示骨架，不保证每个站点都提供 RSS。
4. **AI 摘要与分类**：接入模型 API，要求引用原文、保留原始链接、标记不确定性；对事实和推断分栏。
5. **定时任务**：配置安全的 Cron（每小时采集、周一生成周报），保护 CRON_SECRET。
6. **邮件订阅与用户关注**：加入身份验证、订阅偏好、退订机制。
7. **合规**：遵守网站条款、版权、隐私法规、CASL 邮件规则及地产广告规范。

## 评分口径
雷达分数是编辑优先级，不是房价预测或投资回报评级。可靠性应根据一手来源、发布日期、交叉验证和数据完整性打分。

## 重要数据源起点
- City of Markham: https://www.markham.ca/
- Unionville Special Policy Area: https://www.markham.ca/economic-development-business/planning-development-services/planning-and-urban-design-initiatives/unionville-special-policy-area-boundary-review
- TRREB Market Data: https://trreb.ca/market-data/market-watch/
- Union Village: https://unionvillagemarkham.com/

## 部署建议
Vercel + PostgreSQL（Neon/Supabase）+ Cron。上线前补充数据库迁移、错误监控、速率限制、来源审计与自动化测试。
