export function RemainderOperatorExemple() {
  return (
    <div className="grid grid-cols-9 text-center max-w-">
      <span className="col-span-4 bg-teal-300 rounded dark:text-accent">4</span>
      <span className="col-span-4 bg-teal-300 rounded dark:text-accent">4</span>
      <span className="bg-primary rounded text-accent">1</span>
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={`remainder-operator-exemple-${i + 1}`}
          className="border-l border-r text-muted-foreground"
        >
          {i + 1}
        </span>
      ))}
    </div>
  );
}
