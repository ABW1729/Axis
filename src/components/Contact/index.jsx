import styles from "./style.module.scss";
import Rounded from "../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Magnetic from "../../common/Magnetic";

export default function Contact() {
  const handleClick = () => {
    window.location.href = "tel:8329671303";
  };
  
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    
    <div id='contact'>
      <motion.div style={{ y }} ref={container} className={styles.contact}>
        <div className={styles.body}>
          <div className={styles.title}>
            <span>
              <h2>Lets work together</h2>
            </span>
            <motion.div style={{ x }} className={styles.buttonContainer} onClick={handleClick} >
              <Rounded backgroundColor={'#334BD3'} className={styles.button}>
                <p>Get in touch</p>
              </Rounded>
            </motion.div>
            {/* <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg> */}
          </div>
          <div className={styles.nav}>
            <Rounded>
            <a href="mailto:admin@axisvnit.in"><p>admin@axisvnit.in</p></a>
            </Rounded>
            <Rounded>
  <a
    href="https://maps.app.goo.gl/52AL5LAzGBMymm3j6"
    target="_blank"
    rel="noopener noreferrer"
  >
    <p>
      Student Activity Centre, Near Auditorium, VNIT, Nagpur-440010
    </p>
  </a>
</Rounded>
          </div>
          <div className={styles.info}>
            <div>
              <span>
                <h3>Follow us on </h3>
                <a href='https://www.instagram.com/axis_vnit?igsh=MTg0MDRjcmphZmVmZg=='>
                  <Magnetic>
                    <p>Instagram</p>
                  </Magnetic>
                </a>
              </span>
              <a href='https://youtube.com/@AXISVNIT?si=7s08iKfbI65In2Xl'>
                <Magnetic>
                  <p>Youtube</p>
                </Magnetic>
              </a>

              <Magnetic>
                <p></p>
              </Magnetic>
              <a href='https://www.linkedin.com/company/axis-vnit-nagpur/'>
                <Magnetic>
                  <p>LinkedIN</p>
                </Magnetic>
              </a>
              <Magnetic>
                <p></p>
              </Magnetic>
              <a href='https://x.com/axisvnit?t=grPC8q7slHdcM0E2vQ6hug&s=09'>
                <Magnetic>
                  <p>X</p>
                </Magnetic>
              </a>
              <Magnetic>
                <p></p>
              </Magnetic>
              <a href='https://www.facebook.com/axisvnit?sfnsn=wiwspwa&mibextid=2JQ9oc'>
                <Magnetic>
                  <p>Facebook</p>
                </Magnetic>
              </a>
            </div>
            <div>
              <span>
                <h3>Version</h3>
                <p>Copyright 2024. All Rights Reserved.</p>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
