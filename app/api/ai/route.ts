import { NextRequest, NextResponse } from "next/server";

const AI_MODEL = "deepseek-ai/DeepSeek-V3";

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}

export async function POST(req: NextRequest) {
  try {
    const { prompt, messages } = await req.json().catch(() => ({}));

    let msgs;
    if (Array.isArray(messages) && messages.length > 0) {
      msgs = messages;
    } else if (prompt && typeof prompt === "string") {
      msgs = [{ role: "user", content: prompt }];
    } else {
      return NextResponse.json({ error: "缺少 prompt 或 messages 参数" }, { status: 400 });
    }

    const apiKey = process.env.SILICONFLOW_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "服务器未配置 API Key（请在 Vercel 项目设置里添加环境变量 SILICONFLOW_API_KEY）" },
        { status: 500 }
      );
    }

    const upstream = await fetch("https://api.siliconflow.cn/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: AI_MODEL,
        max_tokens: 1000,
        messages: msgs
      })
    });

    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      return NextResponse.json(
        { error: data.error?.message || data.message || `上游 API 错误 ${upstream.status}` },
        { status: upstream.status }
      );
    }

    return NextResponse.json({ text: data.choices?.[0]?.message?.content || "" });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "服务器内部错误" },
      { status: 500 }
    );
  }
}
