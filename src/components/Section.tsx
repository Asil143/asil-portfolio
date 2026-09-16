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
    <section id={id} className="mx-auto max-w-4xl scroll-mt-24 px-6 py-16 sm:py-20">
      <Reveal>
        <div className="mb-10 grid grid-cols-[minmax(2rem,1fr)_auto_minmax(2rem,1fr)] items-center gap-4 sm:gap-6">
          <div className="h-[2px] bg-accent/55" />
          <h2 className="text-center text-2xl font-bold tracking-tight">
            {title}
          </h2>
          <div className="h-[2px] bg-accent/55" />
        </div>
      </Reveal>
      {children}
    </section>
  );
}
