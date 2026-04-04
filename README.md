# SupplyMaven MCP Server

**Real-time supply chain risk intelligence for AI agents.** The only MCP server providing live supply chain disruption data, proprietary risk indices, and validated predictive signals.

Track 31 commodities, 26 global ports, 80+ border crossings, maritime chokepoints, air cargo hubs, and trade policy impacts — with proprietary indices that replace enterprise supply chain visibility platforms costing $100K+/year.

`https://supplymaven.com/api/mcp`

**Keywords:** supply chain risk management tools, agentic AI for supply chain, real-time supply chain visibility, supply chain disruption monitoring, supply chain risk intelligence, automated supply chain monitoring, supply chain visibility platform, supplier risk monitoring, SCM software, leading manufacturing indicator

---

## Connect in 30 Seconds

### Claude Desktop / Claude Code

Add to your MCP server configuration:

```json
{
  "mcpServers": {
    "supplymaven": {
      "url": "https://supplymaven.com/api/mcp",
      "headers": {
        "Authorization": "Bearer sm_free_your_key_here"
      }
    }
  }
}
```

### ChatGPT / OpenAI Agents

```
Endpoint: https://supplymaven.com/api/mcp
Transport: Streamable HTTP
Auth: Bearer sm_free_your_key_here
```

### Cursor / VS Code

```json
{
  "mcpServers": {
    "supplymaven": {
      "type": "http",
      "url": "https://supplymaven.com/api/mcp",
      "headers": {
        "Authorization": "Bearer sm_free_your_key_here"
      }
    }
  }
}
```

### Programmatic (Vercel AI SDK, LangChain, CrewAI)

```javascript
import { experimental_createMCPClient } from "ai";

const client = await experimental_createMCPClient({
  transport: {
    type: "sse",
    url: "https://supplymaven.com/api/mcp",
  }
});

const tools = await client.tools();
// 15 supply chain intelligence tools ready
```

### Any MCP Client

**Endpoint:** `https://supplymaven.com/api/mcp`
**Transport:** Streamable HTTP
**Auth:** Bearer token (`sm_free_*` or `sm_live_*`)
**Free tier:** Get a key instantly at [supplymaven.com/developers](https://supplymaven.com/developers)

---

## Available Tools (15)

### Free Tier — No credit card, get a key instantly

| Tool | Description |
|------|-------------|
| `supply_chain_risk_assessment` | **Global Disruption Index (GDI)** — 0-100 composite score of supply chain risk across Transportation (30%), Energy (25%), Materials (25%), and Macro (20%) pillars. Built from 200+ live data variables. |
| `commodity_price_monitor` | Real-time prices for 31 commodities across energy, metals, agriculture, industrial, and semiconductor materials. Free tier: 5 key commodities. |
| `supply_chain_disruption_alerts` | Real-time disruption alerts from global news intelligence — port closures, tariffs, sanctions, weather, labor strikes. Free tier: critical severity only. |

### Pro Tier — $499/month - 10,000 queries/day

| Tool | Description |
|------|-------------|
| `manufacturing_output_indicator` | **Supply Manufacturing Index (SMI)** — Patent-pending weather-adjusted electricity demand indicator. Detects US manufacturing output changes up to 24 hours before government reports across 8 power grid regions. Leading manufacturing indicator used by commodity traders and hedge funds. |
| `risk_pillar_breakdown` | Individual GDI pillar scores for Transportation, Energy, Materials, and Macro with weights and news boost breakdown. |
| `port_congestion_monitor` | Vessel counts, congestion scores, and port status at 26 major global ports across US, Asia, and Europe. |
| `get_action_signals` | **Validated predictive signals** — Granger-causal leading indicators (p<=0.01) evaluated against live data. ACTIVE/WATCH/CLEAR status with directional accuracy and lag times. |
| `get_border_delays` | Real-time US-Mexico and US-Canada commercial border crossing wait times. 80+ crossings updated every 30 minutes from CBP. |
| `get_chokepoint_traffic` | Maritime chokepoint vessel traffic — Suez Canal, Panama Canal, Strait of Malacca, Strait of Hormuz, and other strategic waterways. |
| `get_air_cargo_disruptions` | Air cargo disruption status at 39 US and international airports. FAA ground delays, ground stops, disruption scores, and traffic collapse detection. |
| `get_trade_policy_impacts` | Active tariffs, sanctions, export controls, and policy changes impacting supply chain risk. Persists beyond news cycle — shows ongoing GDI score impact. |
| `get_energy_breakdown` | Disaggregated US energy market data — crude oil, natural gas, retail fuel, refinery utilization, storage levels, and petroleum trade flows. |
| `get_rail_freight_status` | US freight rail performance — train speed, terminal dwell time, carloadings, intermodal units, and grain transport rates from STB/AAR/USDA. |
| `get_freight_transportation_index` | BTS Transportation Services Index, truck tonnage, rail carloadings, rail intermodal, waterborne freight, and inventory-to-sales ratio. |
| `get_economic_indicators` | FRED economic data, Producer Price Index, NY Fed Global Supply Chain Pressure Index, and EIA STEO energy forecasts. |

---

## Example Responses

### `supply_chain_risk_assessment`

```
Global Disruption Index: 58.4
Data quality: GOOD
Needs attention: true
Last updated: 2026-04-04T14:30:00.000Z

Data provided by SupplyMaven | supplymaven.com/validation
```

### `manufacturing_output_indicator`

```
Supply Maven Manufacturing Index (lower = stronger):
  National: 44.2 — NORMAL

Regional Breakdown:
  MISO: 41.3 (NORMAL)
  ERCO: 38.7 (NORMAL)
  PJM: 52.1 (BELOW TREND)
  SWPP: 40.5 (NORMAL)
  CISO: 46.8 (NORMAL)
  ISNE: 44.9 (NORMAL)
  NYIS: 48.2 (NORMAL)
  NW: 43.1 (NORMAL)

Data provided by SupplyMaven | supplymaven.com/validation
```

### `get_action_signals`

```
Action Signals — 3 ACTIVE, 4 WATCH (7 total triggered):

  [ACTIVE] Materials Stress -> WTI Crude Oil
    GDI:Materials -> WTI Crude Oil | 1 week lead | 57% directional accuracy | current: 71 index | threshold: 65

  [WATCH] Mid-Atlantic Manufacturing -> New Orders Lead
    SMI:PJM (deterioration trigger) -> Manufacturing New Orders | 3 month lead | 78% directional accuracy | current: 63 SMI score | threshold: 66

Signal statuses: ACTIVE = threshold crossed, act now. WATCH = approaching threshold, prepare.
All signals validated via Granger causality (p<=0.01) with directional accuracy >=55%.

Data provided by SupplyMaven | supplymaven.com/validation
```

### `get_border_delays`

```
Border Crossing Delays (81 crossings):
  Laredo (mexico): commercial delay=45 min
  El Paso (mexico): commercial delay=32 min
  Otay Mesa (mexico): commercial delay=28 min
  Detroit (canada): commercial delay=12 min
  Buffalo (canada): commercial delay=8 min

Avg delay: 22 min | High delay (>30min): 8 crossings | Critical (>60min): 2

Data provided by SupplyMaven | supplymaven.com/validation
```

### `get_chokepoint_traffic`

```
Maritime Chokepoint Traffic (8 chokepoints, aggregate score: 42.5):
  Suez Canal: score=62.4 level=ELEVATED vessels=47 slow=5 stationary=2 avg_speed=8.2kn
  Panama Canal: score=51.3 level=ELEVATED vessels=32 slow=3 stationary=1 avg_speed=6.8kn
  Strait of Malacca: score=45.1 level=NORMAL vessels=89 slow=8 stationary=3 avg_speed=10.4kn
  Strait of Hormuz: score=38.7 level=NORMAL vessels=41 slow=2 stationary=0 avg_speed=11.1kn

Data provided by SupplyMaven | supplymaven.com/validation
```

---

## Use Cases

**Procurement AI Copilots** — Your users ask "should we accelerate this copper order?" With SupplyMaven, your agent checks live materials stress, port congestion, validated commodity signals, and GDI pillar scores before answering with a defensible recommendation.

**Trading and Quant Models** — Government manufacturing reports come out monthly. The SMI updates hourly from EIA electricity demand data — the same physical signal that precedes manufacturing shifts by 6-24 hours. Commodity price signals with validated Granger lag times tell you which market to watch and when.

**Enterprise Risk Dashboards** — Embed live GDI scores, pillar breakdowns, and action signals in your internal tools. When the Transportation pillar spikes, the chatbot flags it before your logistics team sees the delay.

**Logistics Routing Agents** — Feed port congestion, border delays, chokepoint traffic, and air cargo disruption data into route optimization workflows.

---

## Data Coverage

- **31 Commodities** — Energy, metals, agriculture, industrial materials, semiconductor materials
- **26 Global Ports** — US (LA, Long Beach, Houston, Savannah, NY/NJ), Asia (Shanghai, Singapore, Busan), Europe (Rotterdam, Hamburg, Antwerp)
- **80+ Border Crossings** — US-Mexico and US-Canada commercial wait times from CBP
- **12 Maritime Chokepoints** — Suez, Panama, Malacca, Hormuz, Bab el-Mandeb, and more
- **39 Airports** — Major US and international cargo hubs with FAA status
- **8 US Energy Grid Regions** — Real-time electricity demand from EIA
- **Trade Policy Tracking** — Active tariffs, sanctions, and export controls
- **US Freight Rail** — Train speed, dwell time, carloadings, intermodal from STB/AAR
- **Freight Transportation Index** — BTS TSI, truck tonnage, waterborne freight
- **Energy Market Data** — Crude, natural gas, retail fuel, refinery, storage, trade flows
- **Macroeconomic Indicators** — FRED, PPI, Global Supply Chain Pressure Index, EIA STEO forecasts

---

## Proprietary Indices

### Global Disruption Index (GDI)
A 0-100 composite score quantifying overall supply chain disruption risk. Combines four weighted pillars — Transportation (30%), Energy (25%), Materials (25%), Macro (20%). Recalculates every 15 minutes. Higher = more risk.

### Supply Maven Manufacturing Index (SMI)
A **patent-pending** index that measures US manufacturing activity by analyzing weather-normalized electricity demand across 8 power grid regions. Detects manufacturing output changes up to 24 hours before official government reports. Formula: NMS = RMD x (1 - ((CDD x alpha) + (HDD x beta))). Validated against 9 FRED benchmarks with IPMAN correlation of +0.646.

### Validated Predictive Signals
36 Granger-causal signals tested at p<=0.01 with directional accuracy >=55%. Each signal has a known lag time (how far ahead it predicts) and is evaluated against live data every 15 minutes.

---

## Pricing

| Plan | Price | Queries/Day | Tools |
|------|-------|-------------|-------|
| Free | $0 | 100 | 3 tools (GDI, 5 commodities, critical alerts) |
| API Pro | $499/month | 10,000 | All 15 tools, all data, full resolution |
| Bundle | $699/month | 25,000 | All tools + Dashboard access |

Get a free API key instantly at [supplymaven.com/developers](https://supplymaven.com/developers)

---

## Links

- **Website:** [supplymaven.com](https://supplymaven.com)
- **Developer Portal:** [supplymaven.com/developers](https://supplymaven.com/developers)
- **API Documentation:** [supplymaven.com/developers/docs](https://supplymaven.com/developers/docs)
- **MCP Endpoint:** `https://supplymaven.com/api/mcp`
- **LLM Info:** [supplymaven.com/llms.txt](https://supplymaven.com/llms.txt)

---

## About

SupplyMaven is built by [Eos Group, LLC](https://supplymaven.com). The platform monitors over 200 data variables in real time, sourced from government agencies (EIA, USDA, CBP, BLS, Federal Reserve, FAA, NOAA), commodity markets, global vessel tracking (AIS/Datalastic), and news intelligence feeds.

*SupplyMaven — Enterprise-grade supply chain intelligence for AI agents.*
