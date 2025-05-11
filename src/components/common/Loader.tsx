'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/Loader.module.css';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and then hide the loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Enable scrolling once loaded
    if (!isLoading) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'visible';
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className={`loader ${isLoading ? '' : 'hidden'}`}>
      <div className="loader-content">
        <div className="loader-spinner"></div>
        <p>PREPARANDO SUA PRÓXIMA AVENTURA</p>
      </div>
    </div>
  );
}