# SupplyMaven MCP Server

**The only MCP server for real-time supply chain risk intelligence.**

Track 31 commodities, 26 global ports, 8 US energy grid regions, and border crossings — with proprietary risk indices that replace enterprise platforms costing $100K+/year.

`https://supplymaven.com/api/mcp`

---

## Connect in 30 Seconds

### Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "supplymaven": {
      "type": "http",
      "url": "https://supplymaven.com/api/mcp"
    }
  }
}
```

### Cursor / VS Code

Add to your MCP settings:

```json
{
  "mcpServers": {
    "supplymaven": {
      "type": "http",
      "url": "https://supplymaven.com/api/mcp"
    }
  }
}
```

### Any MCP Client

**Endpoint:** `https://supplymaven.com/api/mcp`  
**Transport:** Streamable HTTP  
**Auth (free tier):** None required  

---

## What You Get

### Free Tier — No API key, no signup, start querying now

| Tool | Description |
|------|-------------|
| `get_supply_chain_risk` | **Global Disruption Index (GDI)** — A 0-100 composite score of supply chain risk combining Transportation (30%), Energy (25%), Materials (25%), and Macro (20%) signals |
| `get_commodity_prices` | Real-time prices for 5 key commodities across agriculture, metals, and energy |
| `get_disruption_alerts` | Supply chain disruption alerts from news intelligence (CRITICAL severity) |

### Paid Tier — $499/month · 10,000 queries/day

| Tool | Description |
|------|-------------|
| `get_manufacturing_index` | **Supply Maven Manufacturing Index (SMI)** — Patent-pending weather-adjusted electricity demand indicator that detects US manufacturing output changes up to 24 hours before government reports, across 8 power grid regions. Inverted scale: 0-35 = Strong, 36-50 = Normal, 51-65 = Below Trend, 66+ = Weak |
| `get_pillar_scores` | Individual GDI pillar scores for Energy, Materials, Transportation, and Macro |
| `get_port_congestion` | Vessel counts, congestion scores, and stationary vessel ratios for 26 major global ports |
| `get_commodity_prices` | Full access to all 31 tracked commodities |
| `get_disruption_alerts` | All severity levels (Critical, High, Medium, Low) |

---

## Example: Ask Claude About Supply Chain Risk

**You:** "What's the current global supply chain risk level?"

**Claude calls** `get_supply_chain_risk` **and responds with:**

```json
{
  "gdi_score": 42,
  "risk_level": "MODERATE",
  "pillars": {
    "transportation": 51,
    "energy": 38,
    "materials": 44,
    "macro": 29
  },
  "summary": "Elevated transportation risk driven by port congestion at Long Beach and Houston. Energy and materials within normal range. Macro indicators stable.",
  "updated_at": "2026-03-21T14:30:00Z"
}
```

**You:** "What are commodity prices doing right now?"

**Claude calls** `get_commodity_prices` **and responds with:**

```json
{
  "commodities": [
    { "name": "Crude Oil (WTI)", "price": 68.42, "unit": "USD/barrel", "change_24h": -1.2 },
    { "name": "Coffee (Arabica)", "price": 2.34, "unit": "USD/lb", "change_24h": 3.1 },
    { "name": "Copper", "price": 4.12, "unit": "USD/lb", "change_24h": 0.8 },
    { "name": "Wheat", "price": 5.67, "unit": "USD/bushel", "change_24h": -0.4 },
    { "name": "Natural Gas", "price": 2.89, "unit": "USD/MMBtu", "change_24h": 2.3 }
  ],
  "updated_at": "2026-03-21T14:30:00Z"
}
```

---

## Use Cases

**Procurement Copilots** — Give your AI agent real-time commodity price awareness and risk context for sourcing decisions

**Logistics Routing Agents** — Feed port congestion and border delay data into route optimization workflows

**Trading & Risk Systems** — Use the SMI as a leading indicator of manufacturing activity before government reports

**Supply Chain Dashboards** — Pull live GDI scores and disruption alerts into any AI-powered monitoring tool

**Consulting & Advisory** — Equip client-facing AI tools with real-time supply chain intelligence

---

## Data Coverage

**31 Commodities** — Agriculture (coffee, wheat, corn, soybeans, sugar, cocoa, cotton, rice), Metals (copper, aluminum, zinc, nickel, lead, tin, steel, gold, silver, platinum, palladium, iron ore, lithium, cobalt), Energy (crude oil WTI, crude oil Brent, natural gas, gasoline, heating oil)

**26 Global Ports** — Los Angeles, Long Beach, Houston, Savannah, New York/New Jersey, Charleston, Oakland, Seattle, Tacoma, Norfolk, and 16 international ports

**8 US Energy Grid Regions** — Real-time electricity demand from EIA-930 balancing authorities

**US Border Crossings** — Wait times at US-Mexico and US-Canada commercial crossings

**Macroeconomic Indicators** — PPI, FRED economic data, and Federal Reserve signals

---

## Proprietary Indices

### Global Disruption Index (GDI)
A 0-100 composite score quantifying overall supply chain disruption risk. Combines four weighted pillars — Transportation (30%), Energy (25%), Materials (25%), Macro (20%) — each scored individually and updated in near-real-time. Higher values indicate greater disruption risk.

### Supply Maven Manufacturing Index (SMI)
A **patent-pending** index that measures US manufacturing activity by analyzing weather-normalized electricity demand across 8 power grid regions. The SMI detects manufacturing output changes up to 24 hours before official government reports. Uses the formula NMS = RMD × (1 - ((CDD × α) + (HDD × β))) to remove weather noise from industrial energy consumption signals.

---

## Pricing

| Plan | Price | Queries/Day | Tools |
|------|-------|-------------|-------|
| Free | $0 | Unlimited | `get_supply_chain_risk`, `get_commodity_prices` (5), `get_disruption_alerts` (critical) |
| Professional | $499/month | 10,000 | All 6 tools, all commodities, all severity levels |

---

## Links

- **Dashboard:** [supplymaven.com](https://supplymaven.com)
- **About & Methodology:** [supplymaven.com/about](https://supplymaven.com/about)
- **MCP Endpoint:** `https://supplymaven.com/api/mcp`
- **Glama Listing:** [glama.ai/mcp/connectors/com.supplymaven](https://glama.ai/mcp/connectors/com.supplymaven/supply-maven-mcp-server)
- **MCP Marketplace:** [mcp-marketplace.io/server/supplymaven-mcp-server](https://mcp-marketplace.io/server/supplymaven-mcp-server)

---

## About

SupplyMaven is built by [Eos Group, LLC](https://supplymaven.com), a Washington State S-Corporation. The platform monitors over 200 data variables in real time, sourced from government agencies (EIA, USDA, CBP, BLS, Federal Reserve), commodity markets, port tracking systems (AIS), and news intelligence feeds.

**Contact:** [supplymaven.com](https://supplymaven.com)

---

*SupplyMaven — Enterprise-grade supply chain intelligence at startup speed.*
