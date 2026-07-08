import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-8 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  );
}
