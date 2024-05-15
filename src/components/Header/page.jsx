"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rounded from "../../common/RoundedButton";
import Magnetic from "../../common/Magnetic";
import { signOut, useSession } from "next-auth/react";

export default function Header({ show }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { status } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);
  const { data: session } = useSession();
  const userId = session?.user;
  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div className=" mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a href="/">
              <img
                loading="lazy"
                src="/images/Axis.png"
                width="175px"
                height="45px"
                alt="Axis Logo"
              />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex  font-bold items-center gap-10 text-base">
                <Magnetic>
                  <li>
                    <a
                      className="text-gray-800/75 transition hover:text-black"
                      href="/"
                    >
                      {" "}
                      Home{" "}
                    </a>
                  </li>
                </Magnetic>
                <Magnetic>
                  <li>
                    <a
                      className="text-gray-800/75 transition hover:text-black"
                      href="/Events"
                    >
                      {" "}
                      Events{" "}
                    </a>
                  </li>
                </Magnetic>
                <Magnetic>
                  <li>
                    <a
                      className="text-gray-800/75 transition hover:text-black"
                      href="https://ca.axisvnit.in/"
                    >
                      {" "}
                      CA Portal{" "}
                    </a>
                  </li>
                </Magnetic>

                <Magnetic>
                  <li>
                    <a
                      className="text-gray-800/75 transition hover:text-black"
                      href="/Sponsers"
                    >
                      {" "}
                      Sponsors{" "}
                    </a>
                  </li>
                </Magnetic>

                <li>
                  <div className="relative z-50">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="text-gray-800/75 z-50 transition hover:text-black flex items-center"
                    >
                      Workshop
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute z-50 ml-4 mt-5 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1 z-50"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <a
                            href="/Workshop"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            Workshops
                          </a>
                          <a
                            href="/Acco"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            Accomodation
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </li>

                <Magnetic>
                  <li>
                    <a
                      className="text-gray-800/75 transition hover:text-black"
                      href="/Team"
                    >
                      {" "}
                      Our Team!{" "}
                    </a>
                  </li>
                </Magnetic>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex">
                {userId ? (
                  !show ? (
                    <>
                      <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent ml-2 rounded-full"
                        onClick={() =>
                          status !== "loading"
                            ? setTimeout(signOut({ callbackUrl: "/" }), 2000)
                            : null
                        }
                      >
                        Sign out
                      </button>
                    </>
                  ) : (
                    <>
                      <Magnetic>
                        <a
                          className="group relative border-4 rounded-full inline-flex items-center overflow-hidden bg-white px-8 py-3 text-black focus:outline-none focus:ring active:bg-indigo-500"
                          href="/profile"
                        >
                          <span className="absolute -end-full transition-all group-hover:end-4">
                            <svg
                              className="h-5 w-5 rtl:rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>

                          <span className="text-sm font-semibold transition-all group-hover:me-4">
                            Dashboard
                          </span>
                        </a>
                      </Magnetic>
                      <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent ml-2 rounded-full"
                        onClick={() =>
                          status !== "loading"
                            ? setTimeout(signOut({ callbackUrl: "/" }), 2000)
                            : null
                        }
                      >
                        Sign out
                      </button>
                    </>
                  )
                ) : (
                  <>
                    <Magnetic>
                      <a
                        className="group relative border-4 rounded-full inline-flex items-center overflow-hidden bg-white px-8 py-3 text-black focus:outline-none focus:ring active:bg-indigo-500"
                        href="/sign-in"
                      >
                        <span className="absolute -end-full transition-all group-hover:end-4">
                          <svg
                            className="h-5 w-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>

                        <span className="text-sm font-semibold transition-all group-hover:me-4">
                          Login
                        </span>
                      </a>
                    </Magnetic>
                  </>
                )}
              </div>
            </div>

            <div className="block md:hidden">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isExpanded && (
          <div className="md:hidden text-gray-800 bg-gray-100 p-1 rounded-lg">
            <ul className="flex flex-col mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/Events" className="hover:text-blue-500">
                  Events
                </a>
              </li>
              <li>
                <a
                  href="https://ca.axisvnit.in/"
                  className="hover:text-blue-500"
                >
                  CA Portal
                </a>
              </li>
              <li>
                <a href="/Sponsers" className="hover:text-blue-500">
                  Sponsors
                </a>
              </li>
              <li>
                  <div className="relative z-50">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="text-gray-800/75 z-50 transition hover:text-black flex items-center"
                    >
                      Workshop
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute z-50 ml-28 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1 z-50"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <a
                            href="/Workshop"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            Workshops
                          </a>
                          <a
                            href="/Acco"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            Accomodation
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              <li>
                <a href="/Team" className="hover:text-blue-500">
                  Our Team!
                </a>
              </li>
            </ul>
            {userId ? (
              !show ? (
                <>
                  <button
                    onClick={() =>
                      status !== "loading"
                        ? setTimeout(signOut({ callbackUrl: "/" }), 2000)
                        : null
                    }
                    className="w-full py-1 mt-2 rounded-full transition-colors duration-300 bg-purple-700 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:bg-blue-900 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 text-white font-medium text-lg"
                  >
                    <div className="flex items-center justify-center">
                      <p className="mx-1 text-lg mt-3">Sign Out</p>
                    </div>
                  </button>
                </>
              ) : (
                <>
                  <Magnetic>
                    <a
                      className="group relative border-4 mt-2 rounded-full inline-flex items-center overflow-hidden bg-white px-8 py-2 text-black focus:outline-none focus:ring active:bg-indigo-500"
                      href="/profile"
                    >
                      <span className="absolute -end-full transition-all group-hover:end-4">
                        <svg
                          className="h-5 w-5 rtl:rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>

                      <span className="text-sm font-semibold transition-all group-hover:me-4">
                        Dashboard
                      </span>
                    </a>
                  </Magnetic>
                  <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent ml-2 rounded-full"
                    onClick={() =>
                      status !== "loading"
                        ? setTimeout(signOut({ callbackUrl: "/" }), 2000)
                        : null
                    }
                  >
                    Sign out
                  </button>
                </>
              )
            ) : (
              <>
                <Magnetic>
                  <a
                    className="group relative border-4 rounded-full inline-flex items-center overflow-hidden bg-white  mt-2 mr-2 px-8 py-3 text-black focus:outline-none focus:ring active:bg-indigo-500"
                    href="/sign-in"
                  >
                    <span className="absolute -end-full transition-all group-hover:end-4">
                      <svg
                        className="h-5 w-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>

                    <span className="text-sm font-semibold transition-all group-hover:me-4">
                      Login
                    </span>
                  </a>
                </Magnetic>
              </>
            )}
          </div>
        )}
      </div>

      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
