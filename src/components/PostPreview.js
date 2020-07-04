import React from "react";
import { useHistory } from "react-router-dom";
import { FiHeart, FiMessageSquare } from "react-icons/fi";
import Wrapper from "../styles/PostPreview";

const ProfilePreview = ({ posts }) => {
  const history = useHistory();

  return (
    <Wrapper>
      {posts?.map((post) => (
        <div
          key={post._id}
          className="container-overlay"
          onClick={() => history.push(`/p/${post._id}`)}
        >
          <img src={post.files[0]} alt="post" />
          <div className="overlay">
            <div className="overlay-content">
              <span>
                <FiHeart size={25} color={"#5931bf"} /> {post.likesCount}
              </span>
              <span>
                <FiMessageSquare size={25} color={"#5931bf"} /> {post.commentsCount}
              </span>
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default ProfilePreview;