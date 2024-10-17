// Next
import Link from "next/link";

// Components
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Social from "@/components/Social";

// Component
export default function Menu() {
  // Menu items
  const menuItems = [
    { text: "Introduction", link: "#introduction" },
    { text: "About Me", link: "#about" },
    { text: "Projects", link: "#projects" },
  ];

  // Return
  return (
    <ul className="w-full hidden lg:flex items-center justify-between">
      <li>
        <Link href="/" aria-label="Logo" title="Logo">
          <Logo width={48} height={48} />
        </Link>
      </li>

      <li>
        <ul className="flex items-center gap-8">
          <li>
            <ul className="gap-4 flex items-center">
              {menuItems.map((item, index) => (
                <li key={index} className="gap-4 flex items-center">
                  <a
                    href={`/${item.link}`}
                    className="font-fira font-normal text-sm transition-all duration-[200ms] ease-in-out text-gray hover:text-red"
                  >
                    {item.text}
                  </a>

                  <span className="text-red">-</span>
                </li>
              ))}

              <li className="gap-4 flex items-center">
                <Button
                  external
                  text="Resume"
                  link="/carlos-martinez-resume.pdf"
                />
              </li>
            </ul>
          </li>

          <li className="gap-4 flex items-center">
            <Social />
          </li>
        </ul>
      </li>
    </ul>
  );
}
