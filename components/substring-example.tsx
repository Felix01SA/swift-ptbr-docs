"use client";

import { useRef } from "react";
import { AnimatedBeam } from "./animated-beam";

export function SubstringExemple() {
  const containerRef = useRef<HTMLDivElement>(null);
  const string1 = useRef<HTMLParagraphElement>(null);
  const string2 = useRef<HTMLParagraphElement>(null);
  const substringData = useRef<HTMLSpanElement>(null);
  const substring = useRef<HTMLParagraphElement>(null);
  const storage1 = useRef<HTMLDivElement>(null);
  const storage2 = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex items-center justify-center">
      <div
        className="flex w-full items-stretch justify-between"
        ref={containerRef}
      >
        <div className="text-center text-zinc-950 z-20">
          <p ref={string1} className="bg-teal-400 rounded-md py-2 px-4">
            String
          </p>
          <p ref={substring} className="bg-teal-200 rounded-md py-2 px-4">
            Substring
          </p>
          <div className="h-22" />
          <p ref={string2} className="bg-teal-400 rounded-md py-2 px-4">
            String
          </p>
        </div>

        <div className="flex flex-col gap-2 md:w-50 justify-between z-10">
          <div
            ref={storage1}
            className="bg-sky-400 flex flex-col border rounded-md md:size-40 text-accent items-center justify-center text-2xl"
          >
            <span className="text-base">Armazenamento</span>
            <p className="text-center">
              <span ref={substringData} className="bg-sky-300 p-1 rounded">
                Olá
              </span>
              , <br /> mundo!
            </p>
          </div>
          <div
            ref={storage2}
            className="bg-sky-400 flex flex-col rounded-md border md:size-40 text-accent items-center text-2xl justify-center"
          >
            <span className="text-base">Armazenamento</span>
            <p>Olá</p>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={string1}
          toRef={storage1}
          className="-z-0"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={substringData}
          toRef={substring}
          reverse
          className="z-10"
          startXOffset={-25}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={substring}
          toRef={string2}
          className="-z-0"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={string2}
          toRef={storage2}
          className="-z-0"
        />
      </div>
    </div>
  );
}
