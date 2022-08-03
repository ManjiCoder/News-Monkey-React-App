import React, { useState } from "react";

function ScrollToTopBtn() {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 700){
        setVisible(true)
      } 
      else if (scrolled <= 400){
        setVisible(false)
      }
    };
  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <div>
      <button onClick={scrollToTop} className="back-to-top lg:mb-8" style={{display:visible?"flex":"none"}}>
        &#8679;
      </button>
    </div>
  );
}

export default ScrollToTopBtn;
