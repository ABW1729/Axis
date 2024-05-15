'use client';
import styles from './page.module.scss'
import { useEffect, useState ,useRef} from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';
import GoToTopButton from '../components/GoToTop/Go';
import Director from '../components/Director/Director';
import Count from '../components/Count/page';
import Line from '../components/Line/page';
import Speaker from '../components/Speakers/Speaker';
import Theme from '../components/Themevideo/page';
import Merch from "./Merch/page"

import { signOut, useSession } from "next-auth/react";
import { Suspense } from 'react';
export default function App(){
  const [isLoading, setIsLoading] = useState(true);
 const { data: session, status } = useSession();
  const userId = session?.user;
  const [firstTimeVisit, setFirstTimeVisit] = useState(false); 
  const landingRef = useRef(null);

  useEffect(() => {
    // Check if the user has visited the site before
    const visitedBefore = localStorage.getItem('visitedBefore');
    if (!visitedBefore) {
      setFirstTimeVisit(true);
      localStorage.setItem('visitedBefore', 'true');
     const timeout = setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 4000);
    }
    else{
      setIsLoading(false);
  
      if (landingRef.current) {
        landingRef.current.scrollIntoView({ behavior: 'instant' });
      }
    }
    
    // Stop loading indicator after 8 seconds
    
   
  }, []);
  return (
    <main className={styles.main} >
   
   {firstTimeVisit && (
        <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>
      )}
    {!isLoading && (
      <>
        
        <Landing  />
        
      
      <Count/>
      <Director/>
      <Line/>
      <Theme/>
      <Merch/>
      <Projects />
      <Speaker/>
      <SlidingImages />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <GoToTopButton/>
      <Contact />
      </>)}
      
  
    </main>
  )
}
