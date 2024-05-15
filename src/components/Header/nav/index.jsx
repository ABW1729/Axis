import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../animation";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./Footer/index";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Events",
    href: "/Events",
  },
  {
    title: "CA Portal",
    href: "https://ca.axisvnit.in/",
  },
  {
    title: "Sponsors",
    href: "/Sponsers",
  },
  {
    title: "Workshop",
    href: "/Workshop",
  },
  {
    title: "Our Team!",
    href: "/Team",
  },
  {
    title: "Accomodation",
    href: "/Acco",
  },
];

export default function Nav() {
  const { status } = useSession();
  const { data: session } = useSession();
  const router = useRouter();
  const userId = session?.user;
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const [show, setShow] = useState(true);
  const currentRoute = router.pathname;
  if (currentRoute == "/profile") {
    setShow(false);
  }
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}

          {userId ? (
            !show ? (
              <>
                <button
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
                <a
                  className="inline-block text-center rounded bg-indigo-600 mt-2 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                  href="/profile"
                >
                  Dashboard
                </a>

                <button
                  className=" inline-block text-center rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
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
              <a
                className="inline-block text-center rounded bg-indigo-600 mt-2 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                href="/sign-in"
              >
                Login
              </a>
            </>
          )}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
