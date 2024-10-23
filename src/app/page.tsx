"use client";
import InputComponent from "@/components/InputComponent";
import { useChatLogic } from "./hook/useChatLogic";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import MessagesComponent from "@/components/MessagesComponent";

export default function Home() {
  const { message, setMessage, loading, handleSubmit, messages } =
    useChatLogic();
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleSubmitWrapper = () => {
    setIsFirstRender(false);
    handleSubmit();
  };

  useEffect(() => {
    if (messages.length > 0) {
      setIsFirstRender(false);
    }
  }, [messages]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex h-full min-h-screen w-full max-w-3xl flex-col justify-between gap-5 p-5 sm:py-5 sm:pt-8">
        <div className="flex flex-col gap-3">
          <Header />
          {!isFirstRender && (
            <MessagesComponent
              loading={loading}
              isFirstRender={isFirstRender}
            />
          )}
        </div>
        {isFirstRender && (
          <div className="flex items-center justify-center text-dark">
            <h1 className="text-2xl font-medium text-default">
              Hola, bienvenido
            </h1>
          </div>
        )}
        <InputComponent
          message={message}
          setMessage={setMessage}
          handleSubmit={handleSubmitWrapper}
          loading={loading}
        />
      </div>
    </div>
  );
}
