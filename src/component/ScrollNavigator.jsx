// ScrollNavigator.js
import { useEffect, useState } from 'react';
import { router } from '../App'; // Import the router instance if it's exported from App

const ScrollNavigator = () => {
  const pages = ["/", "/about"]; // Add your page paths here
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0 && currentPageIndex < pages.length - 1) {
        // Scroll down to the next page
        setCurrentPageIndex((prevIndex) => prevIndex + 1);
      } else if (event.deltaY < 0 && currentPageIndex > 0) {
        // Scroll up to the previous page
        setCurrentPageIndex((prevIndex) => prevIndex - 1);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentPageIndex]);

  // Navigate when the page index changes
  useEffect(() => {
    router.navigate(pages[currentPageIndex]);
  }, [currentPageIndex]);

  return null;
};

export default ScrollNavigator;
