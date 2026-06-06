import React, { useState, useEffect } from "react";
import './typingtext.css'

function Typewriter() {
  const text = "Hi, I'm Tanishq";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 40 : 100; // delete faster

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
        }
      } else {
        // Deleting
        setDisplayText(text.slice(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, isDeleting, text]);

  return (
    <h1>
      {displayText}
      <span className="cursor">|</span>
    </h1>
  );
}

export default Typewriter;