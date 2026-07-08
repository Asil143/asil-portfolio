import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  );
}
