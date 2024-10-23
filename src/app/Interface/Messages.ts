export interface Candidate {
  content: {
    parts: {
      text: string;
    }[];
    role: string;
  };
  finishReason: string;
  index: number;
  safetyRatings: Array<{ category: string; probability: string }>;
}

export interface ResponseData {
  candidates: Candidate[];
  usageMetadata: {
    promptTokenCount: number;
    candidatesTokenCount: number;
    totalTokenCount: number;
  };
  modelVersion: string;
}

export interface ResponseMessageProps {
  loading: boolean;
  isFirstRender: boolean;
}
