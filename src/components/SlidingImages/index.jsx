import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#e3e5e7",
        src: "Img1.jpg"
    },
    {
        color: "#d6d7dc",
        src: "Img2.jpg"
    },
    {
        color: "#e3e3e3",
        src: "Img3.jpg"
    },
    {
        color: "#21242b",
        src: "Img4.jpg"
    }
]

const slider2 = [
    {
        color: "#d4e3ec",
        src: "Img5.jpg"
    },
    {
        color: "#e5e0e1",
        src: "Img6.jpg"
    },
    {
        color: "#d7d4cf",
        src: "Img7.jpg"
    },
    {
        color: "#e1dad6",
        src: "Img8.jpg"
    }
]

export default function SlidingImages() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })


  const x1 = useTransform(scrollYProgress, [0, 1], [-150, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

    return (
        <div id="gallery" ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}
                                    sizes="(max-width: 600px) 100vw, 50vw" />
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>
    )
}
