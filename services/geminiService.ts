
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: API_KEY || "" });
  }

  async askAboutTeam(query: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
          systemInstruction: `You are an AI ambassador for EFIND.
          Team Mission: Building "Enterprise External Intelligence Agents" to help companies move from passive search to continuous perception.
          Core Product: EFIND - An agent that auto-discovers external signals, maps them to internal knowledge, and provides auditable insights.
          CEO: Joshua (Liu Yikuan) - Visionary lead in AI-driven enterprise transformation.
          CTO: Tessa (Liao Siyu) - Tech architect expert in distributed systems and knowledge graphs.
          Key Differentiators: Continuous monitoring, evidence-based AI (auditable), and internal-external data fusion.
          Tone: Professional, high-tech, precise, and visionary.
          Language: Chinese (Mandarin).
          Keep responses concise and centered on "Enterprise Intelligence".`,
          temperature: 0.7,
        },
      });
      return response.text || "抱歉，我现在无法回答这个问题。";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "连接 EFIND 智能中枢失败，请稍后再试。";
    }
  }
}

export const geminiService = new GeminiService();
