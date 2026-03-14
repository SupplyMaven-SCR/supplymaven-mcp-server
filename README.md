# SupplyMaven MCP Server

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server providing real-time supply chain intelligence data. Connect any MCP-compatible AI client (Claude Desktop, Cursor, Windsurf, etc.) to access global supply chain risk scores, manufacturing indexes, commodity prices, port congestion, and disruption alerts.

## Available Tools

| Tool | Description | Free Tier | Paid Tier |
|------|-------------|-----------|-----------|
| `get_supply_chain_risk` | Global Disruption Index (GDI) — composite 0-100 supply chain risk score | Rounded, 24h delayed | Real-time, precise |
| `get_pillar_scores` | Breakdown by Energy (25%), Materials (25%), Transportation (30%), Macro (20%) | — | Full detail + news boosts |
| `get_manufacturing_index` | Supply Maven Manufacturing Index (SMI) — weather-adjusted electricity demand indicator | Rounded, national only | Precise + 8 regional scores |
| `get_commodity_prices` | Latest commodity prices with change percentages | 5 key commodities | All tracked commodities |
| `get_port_congestion` | Port congestion scores, vessel counts, and stationary ratios for 30+ global ports | — | Full access |
| `get_disruption_alerts` | AI-enriched supply chain news alerts with risk scoring | CRITICAL only | All severities |

## Quick Start

### 1. Get an API Key

Get a free API key instantly (no credit card required):

**[supplymaven.com/developers](https://supplymaven.com/developers)**

### 2. Configure Your MCP Client

Add the following to your MCP client configuration:

#### Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "supplymaven": {
      "url": "https://supplymaven.com/api/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}
```

#### Cursor / Windsurf / Other MCP Clients

Use the Streamable HTTP transport:

- **URL:** `https://supplymaven.com/api/mcp`
- **Method:** POST
- **Header:** `Authorization: Bearer YOUR_API_KEY`

### 3. Start Using It

Once connected, your AI assistant can call any of the tools above. Example prompts:

- *"What's the current supply chain risk level?"*
- *"Show me commodity prices"*
- *"Are there any disruption alerts I should know about?"*
- *"What's the manufacturing index showing?"*
- *"How congested are major ports right now?"*

## API Tiers

| Tier | Rate Limit | Access | Price |
|------|-----------|--------|-------|
| **Free** | 100 requests/day | Limited data (rounded, delayed, subset) | Free |
| **API Pro** | 10,000 requests/day | Full real-time data, all tools | $499/mo |
| **Bundle** | 25,000 requests/day | Full data + dashboard access | $699/mo |

Get your key at [supplymaven.com/developers](https://supplymaven.com/developers)

## Data Sources

SupplyMaven aggregates data from:

- **Energy:** EIA electricity demand, crude oil, natural gas, refining margins
- **Materials:** 25+ commodity prices (metals, semiconductors, chemicals, agricultural)
- **Transportation:** 30+ major port vessel scans, border wait times, freight indexes
- **Macro:** FRED economic indicators (VIX, PPI, employment, production)
- **Manufacturing:** Proprietary weather-adjusted electricity demand analysis across 8 US grid regions
- **News:** AI-enriched supply chain news from global sources

## About SupplyMaven

SupplyMaven provides real-time supply chain risk intelligence for procurement teams, supply chain managers, and financial analysts. Our proprietary Global Disruption Index (GDI) and Supply Maven Manufacturing Index (SMI) offer early-warning signals for supply chain disruptions.

- **Website:** [supplymaven.com](https://supplymaven.com)
- **Dashboard:** [supplymaven.com/dashboard](https://supplymaven.com/dashboard)
- **API Docs:** [supplymaven.com/developers](https://supplymaven.com/developers)
- **Contact:** support@supplymaven.com

## License

This MCP server configuration and documentation is provided under the [MIT License](LICENSE). The SupplyMaven API and data are subject to [SupplyMaven Terms of Service](https://supplymaven.com/terms).
