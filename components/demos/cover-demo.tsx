import React from "react"; 
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div className="bg-black py-10"> {/* الخلفية سوداء */}
      <h1 className="text-3xl md:text-6xl 
       font-semibold
        max-w-7xl 
        mx-auto 
        md:text-center 
        relative
         z-20 text-white">  {/* النص الأبيض العادي */}
        Elevate your club with <br />   
        <Cover> 
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          <span style={{ color: "#fabc3f" }}>Crossbar</span>  Marketing Services
          </span>
        </Cover>
      </h1>
    </div>
  );
}
