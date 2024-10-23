import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center gap-3 border-b pb-3">
      <div className="rounded-lg bg-slate-100 p-2">
        <Image src="/LogoGemini.svg" alt="Logo" width={35} height={35} />
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold text-default">Gemini clone App</h2>
        <p className="text-xs text-slate-400 sm:text-sm">
          Es una réplica funcional de la aplicación original Gemini.
        </p>
      </div>
    </div>
  );
};

export default Header;
