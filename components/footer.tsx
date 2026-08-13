import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="text-muted">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
