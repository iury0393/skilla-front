import React, { useEffect, useState } from "react";
import { client } from "../utils";
import { FiHeart } from "react-icons/fi";
import { MdFavorite } from "react-icons/md";

const LikePost = ({ isLiked, postId, incLikes, decLikes }) => {
  const [likedState, setLiked] = useState(isLiked);

  useEffect(() => {
    setLiked(isLiked);
  }, [isLiked]);

  const handleToggleLike = () => {
    if (likedState) {
      setLiked(false);
      decLikes();
			client(`/posts/${postId}/toggleLike`)
    } else {
      setLiked(true);
      incLikes();
			client(`/posts/${postId}/toggleLike`)
    }
  };

  if (likedState) {
    return <MdFavorite size={25} color={"#5931bf"} onClick={handleToggleLike} />;
  }

  if (!likedState) {
    return <FiHeart size={25} color={"#5931bf"} onClick={handleToggleLike} />;
  }
};

export default LikePost;
