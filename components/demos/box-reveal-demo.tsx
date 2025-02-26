"use client";

import BoxReveal from "@/components/magicui/box-reveal";
import Link from "next/link";

const BoxRevealDemo = () => {
  return (
    <div className="h-full w-full items-center justify-center ml-10 overflow-hidden pt-8 space-y-2">
      <BoxReveal boxColor={"#fabc3f"} duration={0.5}>
        <p className="text-3xl font-semibold text-white">1. Connect</p>
      </BoxReveal>

      <BoxReveal boxColor={"#fabc3f"} duration={0.5}>
        <h2 className="my-2 text-lg text-white">
          Connect with us via
          <Link href={"/meeting"} className="text-[#FFD700]">
            {" "}
            meeting{" "}
          </Link>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#fabc3f"} duration={0.5}>
        <p className="text-3xl font-semibold text-white">2. Collaborate</p>
      </BoxReveal>

      <BoxReveal boxColor={"#fabc3f"} duration={0.5}>
        <h2 className="my-2 text-lg text-white">
          Outline the scope of the project
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#fabc3f"} duration={0.5}>
        <p className="text-3xl font-semibold text-white">3. Create</p>
      </BoxReveal>

      <BoxReveal boxColor={"#fabc3f"} duration={0.5}>
        <h2 className="my-2 text-lg text-white">Leave the rest to us</h2>
      </BoxReveal>
    </div>
  );
};

export default BoxRevealDemo;
