import Link from "next/link";

const navItems = [
  { href: "/", label: "Terminal" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
  { href: "/curriculo", label: "Currículo" },
];

export function MainNav() {
  return (
    <nav className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-3">
      <ul className="flex flex-wrap gap-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-flex rounded-full border border-zinc-700 px-3 py-1.5 text-sm text-zinc-200 hover:border-emerald-400/40 hover:text-emerald-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
