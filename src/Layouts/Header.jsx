import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.jpg";
import Button from "../components/Buttons";
import CoursesMegaMenu from "../components/CoursesMegaMenu";
import { Menu, X, Plus, Minus } from "lucide-react";
import InquiryModal from "../components/InquiryModal";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const coursesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(!(currentScrollY > lastScrollY && currentScrollY > 80));
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileOpen) return;

    const handleClickOutside = (e) => {
      if (coursesRef.current && !coursesRef.current.contains(e.target)) {
        setCoursesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`
        w-full bg-white border-b border-gray-300 shadow
        sticky top-0 z-9999
        transition-transform duration-300 ease-in-out
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
      >
        <div className="max-w-360 mx-auto flex items-center justify-between px-6 py-2">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" width={80} className="rounded-xl" />
          </Link>

          <nav className="hidden md:flex gap-6 font-medium">
            {navLinks.map((item) =>
              item.name === "Courses" ? (
                <div
                  key={item.name}
                  ref={coursesRef}
                  onMouseEnter={() => setCoursesOpen(true)}
                  onMouseLeave={() => setCoursesOpen(false)}
                  className="relative"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative pb-2 ease-in duration-200
                    hover:text-(--primary)
                    after:content-['']
                    after:absolute after:left-0 after:bottom-0
                    after:h-0.5 after:w-full after:bg-(--primary)
                    after:scale-x-0 after:origin-left
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100
                    `
                    }
                  >
                    Courses
                  </NavLink>

                  {coursesOpen && (
                    <CoursesMegaMenu closeMenu={() => setCoursesOpen(false)} />
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative pb-2 ease-in duration-200
                  hover:text-(--primary)
                  after:content-['']
                  after:absolute after:left-0 after:bottom-0
                  after:h-0.5 after:w-full after:bg-(--primary)
                  after:scale-x-0 after:origin-left
                  after:transition-transform after:duration-300
                  hover:after:scale-x-100
                  ${isActive ? "text-(--primary) after:scale-x-100" : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
          </nav>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden text-gray-800"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden md:block">
            <Button icon={false} onClick={() => setInquiryOpen(true)}>
              Book a Demo
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t shadow-lg px-6 py-2">
            <nav className="flex flex-col gap-4 font-medium">
              {navLinks.map((item) =>
                item.name === "Courses" ? (
                  <div key={item.name} className="flex flex-col gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCoursesOpen((prev) => !prev);
                      }}
                      className="flex items-center justify-between w-full"
                    >
                      <span>Courses</span>
                      {coursesOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </button>

                    {coursesOpen && (
                      <CoursesMegaMenu
                        mobile
                        closeMenu={() => {
                          setCoursesOpen(false);
                          setMobileOpen(false);
                        }}
                      />
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                )
              )}

              <Button
                icon={false}
                onClick={() => {
                  setInquiryOpen(true);
                  setMobileOpen(false);
                }}
              >
                Book a Demo
              </Button>
            </nav>
          </div>
        )}
      </header>
      {inquiryOpen && (
        <InquiryModal
          open={inquiryOpen}
          onClose={() => setInquiryOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
