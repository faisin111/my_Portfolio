import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, updateDoc, increment, onSnapshot, setDoc, getDoc } from "firebase/firestore";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const statsRef = doc(db, "portfolio", "stats");

  useEffect(() => {
    // 1. Check if user has already liked locally
    const hasLiked = localStorage.getItem('has_liked') === 'true';
    setIsLiked(hasLiked);

    // 2. Listen for real-time updates from Firebase
    const unsubscribe = onSnapshot(statsRef, (docSnap) => {
      if (docSnap.exists()) {
        const count = docSnap.data().likes || 0;
        setLikes(count < 0 ? 0 : count);
      } else {
        setLikes(0);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLike = async () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    
    // Update Firebase
    try {
      if (!newLikedState && likes <= 0) {
        localStorage.setItem('has_liked', 'false');
        setTimeout(() => setIsAnimating(false), 1000);
        return;
      }

      await setDoc(statsRef, {
        likes: increment(newLikedState ? 1 : -1)
      }, { merge: true });
      localStorage.setItem('has_liked', newLikedState.toString());
    } catch (error) {
      console.error("Error updating likes:", error);
    }

    // Animation timeout
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="like-button-container">
      <button 
        className={`like-button ${isLiked ? 'liked' : ''} ${isAnimating ? 'animating' : ''}`}
        onClick={handleLike}
        aria-label="Like this portfolio"
      >
        <div className="heart-wrapper">
          <svg viewBox="0 0 24 24" className="heart-icon">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="particles">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="particle" style={{ '--i': i }}></span>
            ))}
          </div>
        </div>
        <span className="like-count">{likes}</span>
      </button>
    </div>
  );
}
