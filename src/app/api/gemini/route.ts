import { GoogleGenAI } from "@google/genai"
import promptText from "./constants";
import "dotenv/config";

console.log(process.env.GEMINI_API_KEY)
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function GET(request: Request) {
  return new Response("Server Working");
}

export async function POST(request: Request) {
console.log(process.env.GEMINI_API_KEY)
  const { prompt } = await request.json();
  const response = await ai.models.generateContentStream({
    model: "gemini-2.5-flash-lite",
    contents: `Here is the word: ${JSON.parse(prompt).word}, ${promptText}`,
    config: {
      thinkingConfig: {
        thinkingBudget: 0,
      }
    }
  });

  const stream = new ReadableStream({
    async start(controller) {
        const encoder = new TextEncoder();
        for await (const chunk of response){
            if(chunk.text){
                const data = `0:${JSON.stringify(chunk.text)}\n`
                controller.enqueue(encoder.encode(data))
            }
        }
        controller.close()
    }
  })

  return new Response(stream, {
    headers: { 
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
    },
  });
}