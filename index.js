#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const API_URL = "https://supplymaven.com/api/mcp";
const API_KEY = process.env.SUPPLYMAVEN_API_KEY || "";

if (!API_KEY) {
  process.stderr.write(
    "Error: SUPPLYMAVEN_API_KEY environment variable is required.\n" +
    "Get a free key at https://supplymaven.com/developers\n"
  );
  process.exit(1);
}

// Fetch tool list from remote server
async function fetchTools() {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json, text/event-stream",
      "Authorization": `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({ jsonrpc: "2.0", method: "tools/list", id: 1 }),
  });
  const text = await response.text();
  const dataLine = text.split("\n").find(l => l.startsWith("data:"));
  if (!dataLine) return [];
  const json = JSON.parse(dataLine.replace("data:", "").trim());
  return json.result?.tools || [];
}

// Call a tool on remote server
async function callTool(name, args) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json, text/event-stream",
      "Authorization": `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "tools/call",
      params: { name, arguments: args },
      id: 2,
    }),
  });
  const text = await response.text();
  const dataLine = text.split("\n").find(l => l.startsWith("data:"));
  if (!dataLine) return { content: [{ type: "text", text: "No response" }] };
  const json = JSON.parse(dataLine.replace("data:", "").trim());
  return json.result || { content: [{ type: "text", text: "Error" }] };
}

const server = new Server(
  { name: "supplymaven", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  const tools = await fetchTools();
  return { tools };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const result = await callTool(request.params.name, request.params.arguments || {});
  return result;
});

const transport = new StdioServerTransport();
await server.connect(transport);
