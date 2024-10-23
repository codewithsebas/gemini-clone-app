import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useRef } from "react";
import { useChatLogic } from "@/app/hook/useChatLogic";
import Skeleton from "./Skeleton";
import { ResponseMessageProps } from "@/app/Interface/Messages";

const MessagesComponent: React.FC<ResponseMessageProps> = ({ loading }) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const { messages } = useChatLogic();

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  return (
    <div
      ref={messagesContainerRef}
      className="flex max-h-[45rem] min-h-[45rem] w-full flex-col items-center gap-3 overflow-y-auto"
    >
      {messages.length > 0 && (
        <div className="flex w-full flex-col gap-10">
          {messages.map((msg, index) => (
            <div key={index} className="flex w-full flex-col gap-5">
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="mt-2">{msg.question}</p>
              </div>
              <div className="flex items-start gap-3">
                <Image
                  src="/LogoGemini.svg"
                  alt="Cargando..."
                  width={35}
                  height={35}
                />
                <div className="w-full overflow-hidden">
                  <p className="mt-2">{msg.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {loading && (
        <div className="mt-10 flex w-full items-center justify-center gap-5">
          <Image
            src="/LogoGemini.svg"
            alt="Cargando..."
            width={45}
            height={45}
            className="animate-spin"
          />
          <Skeleton />
        </div>
      )}
    </div>
  );
};

export default MessagesComponent;
