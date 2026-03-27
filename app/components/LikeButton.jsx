"use client";
import { useState } from "react";

export default function LikeButton() {
  // react use state hook
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <button type="button" onClick={handleClick}>
      Likes {likes}
    </button>
  );
}
