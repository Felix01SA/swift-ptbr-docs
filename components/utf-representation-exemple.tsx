import { cn } from "@/lib/utils";

export function UTF8RepresentationExemple() {
  return (
    <div className="flex bg-zinc-300 dark:bg-zinc-800 p-2 rounded-lg gap-2">
      <div className="grid gap-2">
        <span className="flex text-center justify-center items-center size-25 bg-emerald-500 rounded-tl-md">
          Caractere
        </span>
        <span className="flex text-center justify-center items-center size-25 bg-emerald-500">
          Código Unitário UTF-8
        </span>
        <span className="flex text-center justify-center items-center size-25 bg-emerald-500 rounded-bl-md">
          Posição
        </span>
      </div>
      <div className="grid grid-cols-10 gap-2 flex-1">
        <div className="text-center text-xs font-medium flex flex-col items-center justify-center text-zinc-950 bg-teal-300 h-25">
          <span>D</span>
          <span>U+0044</span>
        </div>
        <div className="text-center text-xs font-medium flex flex-col items-center justify-center text-zinc-950 bg-teal-300 h-25">
          <span>o</span>
          <span>U+006F</span>
        </div>
        <div className="text-center text-xs font-medium flex flex-col items-center justify-center text-zinc-950 bg-teal-300 h-25">
          <span>g</span>
          <span>U+0067</span>
        </div>
        <div className="text-center text-sm font-medium flex flex-col items-center justify-center text-zinc-950 bg-teal-300 h-25 col-span-3">
          <span>!!</span>
          <span>U+203C</span>
        </div>
        <div className="text-center text-sm rounded-tr-md font-medium flex flex-col items-center justify-center text-zinc-950 bg-teal-300 h-25 col-span-4">
          <span>🐶</span>
          <span>U+1F436</span>
        </div>
        {[68, 111, 103, 226, 128, 188, 240, 159, 144, 182].map((code) => (
          <span
            key={code}
            className="text-center flex items-center justify-center text-zinc-950 bg-zinc-400 h-25"
          >
            {code}
          </span>
        ))}
        {Array.from({ length: 10 }).map((_, i, array) => (
          <span
            key={`id-${i + 1}`}
            className={cn(
              "text-center flex items-center justify-center text-zinc-950 h-25 bg-teal-300",
              array.length === i + 1 ? "rounded-br-md" : null
            )}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

export function UTF16RepresentationExemple() {
  return (
    <div className="flex bg-zinc-300 dark:bg-zinc-800 p-2 rounded-lg gap-2">
      <div className="grid gap-2">
        <span className="flex text-center justify-center items-center size-25 bg-emerald-500 rounded-tl-md">
          Caractere
        </span>
        <span className="flex text-center justify-center items-center size-25 bg-emerald-500">
          Código Unitário UTF-16
        </span>
        <span className="flex text-center justify-center items-center size-25 bg-emerald-500 rounded-bl-md">
          Posição
        </span>
      </div>
      <div className="grid grid-cols-6 gap-2 flex-1">
        <div className="text-center text-sm font-medium flex flex-col items-center justify-center text-zinc-950 bg-teal-300 h-25">
          <span>D</span>
          <span>U+0044</span>
        </div>
        <div className="text-center text-sm font-medium flex flex-col items-center justify-center text-zinc-950 bg-teal-300 h-25">
          <span>o</span>
          <span>U+006F</span>
        </div>
        <div className="text-center text-sm font-medium flex flex-col items-center justify-center text-zinc-950 bg-teal-300 h-25">
          <span>g</span>
          <span>U+0067</span>
        </div>
        <div className="text-center text-sm font-medium flex flex-col items-center justify-center text-zinc-950 bg-teal-300 h-25">
          <span>!!</span>
          <span>U+203C</span>
        </div>
        <div className="text-center text-sm rounded-tr-md font-medium flex flex-col items-center justify-center text-zinc-950 bg-teal-300 h-25 col-span-2">
          <span>🐶</span>
          <span>U+1F436</span>
        </div>
        {[68, 111, 103, 8252, 55357, 56374].map((code) => (
          <span
            key={code}
            className="text-center flex items-center justify-center text-zinc-950 bg-zinc-400 h-25"
          >
            {code}
          </span>
        ))}
        {Array.from({ length: 6 }).map((_, i, array) => (
          <span
            key={`id-${i + 1}`}
            className={cn(
              "text-center flex items-center justify-center text-zinc-950 h-25 bg-teal-300",
              array.length === i + 1 ? "rounded-br-md" : null
            )}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

export function UnicodeScalarRepresentationExemple() {
  return (
    <div className="flex bg-zinc-300 dark:bg-zinc-800 p-2 rounded-lg gap-2">
      <div className="grid gap-2">
        <span className="flex text-center justify-center items-center size-25 bg-emerald-500 rounded-tl-md">
          Caractere
        </span>
        <span className="flex text-center text-sm justify-center items-center size-25 bg-emerald-500">
          Código Unitário Escalar Unicode
        </span>
        <span className="flex text-center justify-center items-center size-25 bg-emerald-500 rounded-bl-md">
          Posição
        </span>
      </div>
      <div className="grid grid-cols-5 gap-2 flex-1">
        <div className="text-center text-sm font-medium flex flex-col items-center justify-center text-zinc-950 bg-teal-300 h-25">
          <span>D</span>
          <span>U+0044</span>
        </div>
        <div className="text-center text-sm font-medium flex flex-col items-center justify-center text-zinc-950 bg-teal-300 h-25">
          <span>o</span>
          <span>U+006F</span>
        </div>
        <div className="text-center text-sm font-medium flex flex-col items-center justify-center text-zinc-950 bg-teal-300 h-25">
          <span>g</span>
          <span>U+0067</span>
        </div>
        <div className="text-center text-sm font-medium flex flex-col items-center justify-center text-zinc-950 bg-teal-300 h-25">
          <span>!!</span>
          <span>U+203C</span>
        </div>
        <div className="text-center text-sm rounded-tr-md font-medium flex flex-col items-center justify-center text-zinc-950 bg-teal-300 h-25">
          <span>🐶</span>
          <span>U+1F436</span>
        </div>
        {[68, 111, 103, 8252, 128054].map((code) => (
          <span
            key={code}
            className="text-center flex items-center justify-center text-zinc-950 bg-zinc-400 h-25"
          >
            {code}
          </span>
        ))}
        {Array.from({ length: 5 }).map((_, i, array) => (
          <span
            key={`id-${i + 1}`}
            className={cn(
              "text-center flex items-center justify-center text-zinc-950 h-25 bg-teal-300",
              array.length === i + 1 ? "rounded-br-md" : null
            )}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}
