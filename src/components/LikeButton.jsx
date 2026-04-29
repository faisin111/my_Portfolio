import React, { useState, useEffect } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Load likes from localStorage (mocking a global state)
    const savedLikes = localStorage.getItem('portfolio_likes') || '124';
    const hasLiked = localStorage.getItem('has_liked') === 'true';
    setLikes(parseInt(savedLikes));
    setIsLiked(hasLiked);
  }, []);

  const handleLike = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    
    const newLikesCount = newLikedState ? likes + 1 : likes - 1;
    setLikes(newLikesCount);

    localStorage.setItem('portfolio_likes', newLikesCount.toString());
    localStorage.setItem('has_liked', newLikedState.toString());

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
