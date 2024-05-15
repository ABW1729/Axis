"use client";
import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "./Di";

export default function Home() {
  const phrase =
    "I am elated to witness the diverse participation from universities and schools nationwide in AXIS from last 24 years.Year after year, AXIS continues to bridge the gap between technology and tech enthusiasts. The competitions held during AXIS showcased some of India's brightest minds, competing and surmounting challenges for the betterment of society.I sincerely hope that AXIS continues its upward trajectory, achieving new milestones with each passing year and bringing honor to VNIT. My best wishes go out to AXIS.";
    
  const director = "Director's Desk";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div>
      {" "}
      <div className="max-w-[65rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="md:grid md:grid-cols-2 space-x-4 md:items-center md:gap-10 xl:gap-24">
          <div>
            <img
              className="rounded-xl w-full"
              src="/images/padolesir.jpg"
              alt="Director"
            />
          </div>

          <div ref={description} className={styles.description}>
            <p>
              {director.split(" ").map((word, index) => {
                return (
                  <span key={index} className={styles.mask}>
                    <motion.span
                      variants={slideUp}
                      custom={index}
                      animate={isInView ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
            <div className={styles.body}>
              <p>
                {phrase.split(" ").map((word, index) => {
                  return (
                    <span key={index} className={styles.mask}>
                      <motion.span
                        variants={slideUp}
                        custom={index}
                        animate={isInView ? "open" : "closed"}
                        key={index}
                      >
                        {word}
                      </motion.span>
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
