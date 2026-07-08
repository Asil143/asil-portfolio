import { education } from "@/data/profile";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-col gap-8">
        {education.map((edu) => (
          <div key={edu.school} className="flex flex-col gap-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">{edu.school}</h3>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {edu.startYear} – {edu.endYear}
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {edu.degree}, {edu.field}
              {edu.gpa ? ` · GPA: ${edu.gpa}` : ""}
            </p>
            {edu.details && edu.details.length > 0 && (
              <ul className="mt-2 list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                {edu.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
