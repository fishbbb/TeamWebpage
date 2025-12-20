
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
          systemInstruction: `You are an AI ambassador for NexusTech.
          CEO: Joshua (Liu Yikuan) - Visionary lead.
          CTO: Tessa (Liao Siyu) - Tech architect.
          Core Projects: 
          1. InsightTracker: Intelligent information tracking and retrieval.
          2. EFind: Intelligent business opportunity search project.
          Tone: Professional, tech-savvy, smooth, and futuristic.
          Language: Chinese (Mandarin).
          Keep responses concise and exciting.`,
          temperature: 0.7,
        },
      });
      return response.text || "抱歉，我现在无法回答这个问题。";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "连接Nexus智能中枢失败，请稍后再试。";
    }
  }
}

export const geminiService = new GeminiService();
