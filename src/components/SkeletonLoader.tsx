import React from "react";
import Image from "next/image";

const SkeletonLoader: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Image
        src="/LogoGemini.svg"
        alt="Cargando..."
        width={45}
        height={45}
        className="animate-spin"
      />
      <div className="mt-4 w-full max-w-lg animate-pulse rounded-md bg-slate-100 p-4">
        <div className="mb-2 h-4 w-3/4 rounded bg-slate-300"></div>
        <div className="mb-2 h-4 w-full rounded bg-slate-300"></div>
        <div className="mb-2 h-4 w-5/6 rounded bg-slate-300"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
