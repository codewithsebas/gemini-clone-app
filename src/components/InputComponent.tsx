import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { InputComponentProps } from "@/app/Interface/InputComponent";

const InputComponent: React.FC<InputComponentProps> = ({
  message,
  setMessage,
  handleSubmit,
}) => {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div className="relative flex w-full items-center justify-between gap-2">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Image
              src="/LogoGemini.svg"
              alt="Logo"
              className="absolute left-4 cursor-pointer"
              width={30}
              height={30}
            />
          </HoverCardTrigger>
          <HoverCardContent>
            Disfruta de este proyecto a tu disposición, <b>Gemini clone App</b>.
          </HoverCardContent>
        </HoverCard>
        <input
          placeholder="Pregunta a Gemini"
          className="w-full rounded-full border-none bg-slate-100 px-6 py-4 ps-14 outline-none"
          value={message}
          autoFocus
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (message.length > 1 && e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <div className="absolute bottom-0 right-3 top-0 flex items-center text-dark">
          <button
            disabled={message.length <= 1}
            className={`${message.length <= 1 ? "bg-default/50" : "group bg-default duration-200 hover:bg-default/80"} flex-1 rounded-full p-2 text-white`}
            onClick={handleSubmit}
          >
            <ArrowRight
              className="duration-200 group-hover:-rotate-45"
              size={20}
            />
          </button>
        </div>
      </div>
      <p className="text-xs text-slate-400 sm:text-sm">
        Es una réplica funcional de la aplicación original Gemini.
      </p>
    </div>
  );
};

export default InputComponent;
