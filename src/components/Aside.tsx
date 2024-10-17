// Components
import Social from "@/components/Social";
import Button from "@/components/Button";

// Component
export default function Aside({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // Menu items
  const menuItems = [
    { text: "Introduction", link: "#introduction" },
    { text: "About Me", link: "#about" },
    { text: "Projects", link: "#projects" },
  ];

  // Return
  return (
    <>
      <aside
        className={`lg:hidden top-0 right-0 h-svh fixed w-full shadow-normal transition-all duration-[200ms] ease-in-out bg-dark ${
          openMenu ? "right-0 visible" : "-right-full invisible"
        }`}
      >
        <nav className="flex flex-col justify-center">
          <ul className="gap-6 flex p-8 items-end flex-col justify-center">
            {menuItems.map((item, index) => (
              <li key={index} className="gap-4 flex items-center">
                <span className="text-red">-</span>

                <a
                  href={`/${item.link}`}
                  className="font-normal text-gray transition-all duration-[200ms] ease-in-out text-sm hover:text-red"
                  onClick={() => setOpenMenu(false)}
                >
                  {item.text}
                </a>
              </li>
            ))}

            <li>
              <Button
                external
                text="Resume"
                link="/carlos-martinez-resume.pdf"
              />
            </li>

            <li>
              <Social />
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
