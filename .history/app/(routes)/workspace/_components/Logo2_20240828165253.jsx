import React from "react";
import Image from "next/image";

function Logo2() {
  return (
    <div className="flex items-center gap-1 px-0.20rem">
      <Image src={"/logo.svg"} alt="Logo" width={40} height={40} />
      <h2
        className={`${dancing_script.className} font-semibold text-2xl gradient-text4`}
      >
        {/* empty for now */}
        synnex
      </h2>
    </div>
  );
}

export default Logo2;
