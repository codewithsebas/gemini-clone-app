import { useState } from "react";
import axios from "axios";
import { useChatStore } from "@/app/store/store";

export const useChatLogic = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const addMessage = useChatStore((state) => state.addMessage);
  const messages = useChatStore((state) => state.messages);

  const handleSubmit = async () => {
    if (!message) return;

    setLoading(true);
    setMessage("");
    try {
      const res = await axios.post("/api/gemini", { message });
      
      if (res.data.candidates && res.data.candidates.length > 0) {
        const candidate = res.data.candidates[0];

        if (candidate.finishReason === "SAFETY") {
          addMessage(
            message,
            "La respuesta ha sido filtrada por motivos de seguridad.",
          );
        } else if (
          candidate.content &&
          candidate.content.parts &&
          candidate.content.parts.length > 0
        ) {
          const answer = candidate.content.parts[0].text;
          addMessage(message, answer);
        } else {
          console.error("Respuesta inesperada de la API:", res.data);
          addMessage(message, "No se pudo obtener una respuesta válida.");
        }
      } else {
        console.error(
          "No se encontraron candidatos en la respuesta de la API:",
          res.data,
        );
        addMessage(message, "No se pudo obtener una respuesta válida.");
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      addMessage(message, "Error al obtener la respuesta");
    } finally {
      setLoading(false);
    }
  };

  return { message, setMessage, loading, handleSubmit, messages };
};
