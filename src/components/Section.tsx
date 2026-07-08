import { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Reveal>
        <div className="mb-10 flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
      </Reveal>
      {children}
    </section>
  );
}
