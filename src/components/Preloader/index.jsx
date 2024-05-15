'use client';
import styles from './style.module.scss';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { slideUp } from './anim';

export default function Index() {
    const videoRef = useRef(null);

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>/

             <video
        ref={videoRef}
        autoPlay
        
        muted
        playsInline
        style={{ objectFit: 'cover', width: 'full', height: 'full' }}
      >
        <source src="https://res.cloudinary.com/dx9oqxlix/video/upload/f_auto:video,q_auto/sxzgyyaw6cgia2e0bp8h#start-offset=0" type="video/mp4" />
        Your browser does not support the video tag.
      </video>     
        </motion.div>
    )
}
