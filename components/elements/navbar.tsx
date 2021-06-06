import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import classNames from "classnames";

import MobileNavMenu from "./mobile-nav-menu";
import CustomLink from "../common/custom-link";
import Text from "../common/text";
import Button from "../common/button";
import Image from "../common/image";
import LangDropdown from "./langDropdown";

const Navbar = ({ navbar }) => {
  const [isScrolling, setIsScrolling] = useState(false);

  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const windowsScrollTop = window.pageYOffset;
      let offsetFromOtherElement = 0;
      if (document.getElementById("notification-banner")) {
        offsetFromOtherElement = document.getElementById(
          "notification-banner"
        ).clientHeight;
      }
      if (windowsScrollTop >= offsetFromOtherElement + 10) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
    return () => setIsScrolling(false);
  }, []);

  return (
    <>
      <nav
        className={classNames(
          "absolute top-8 md:top-0 left-0 w-full z-10 h-16 md:h-24 flex justify-between items-center p-2.5 border-b-0 border-solid border-transparent transition-colors duration-300",
          {
            sticky: isScrolling,
          }
        )}
      >
        <div className="container flex flex-row items-center justify-between">
          <div className="flex items-center justify-start">
            <CustomLink link={{ url: "/" }} style={{ width: 186, height: 58 }}>
              <Image img={navbar.logo} />
            </CustomLink>
          </div>
          <div className="flex flex-row items-center justify-end">
            <ul className="hidden list-none xl:flex flex-row gap-4 items-baseline ml-10">
              {navbar.links.map((navLink: any, index: number) => (
                <li key={navLink.id}>
                  <CustomLink link={navLink}>
                    <Text
                      className={classNames("px-2 py-1", {
                        underline: index === 0,
                      })}
                      type="div"
                    >
                      {navLink.text}
                    </Text>
                  </CustomLink>
                </li>
              ))}
            </ul>

            <LangDropdown />
            {/* Hamburger menu on small screens */}
            <button
              onClick={() => setMobileMenuIsShown(true)}
              className="p-1 block xl:hidden"
            >
              <MdMenu className="h-8 w-auto" color="#fff" />
            </button>

            {/* CTA button on large screens */}
            {navbar.button && (
              <div className="hidden xl:block">
                <Button button={navbar.button} isLink />
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileNavMenu
        navbar={navbar}
        closeSelf={() => setMobileMenuIsShown(false)}
        mobileMenuIsShown={mobileMenuIsShown}
      />
    </>
  );
};

export default Navbar;
