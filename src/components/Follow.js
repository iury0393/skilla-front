import React, { useEffect, useState } from "react";
import { client } from "../utils";
import { FiSquare, FiCheckSquare } from "react-icons/fi";

const Follow = ({ nobtn, isFollowing, incFollowers, decFollowers, userId }) => {
  const [followingState, setFollowingState] = useState(isFollowing);

  useEffect(() => setFollowingState(isFollowing), [isFollowing]);

  const handleFollow = () => {
    if (followingState) {
      setFollowingState(false);
      if (decFollowers) {
        decFollowers();
      }
			client(`/users/${userId}/unfollow`)
    } else {
      setFollowingState(true);
      if (incFollowers) {
        incFollowers();
      }
			client(`/users/${userId}/follow`)
    }
  };

  if (followingState) {
    return (
      <>
        {nobtn ? (
          <span
            style={{ color: "#262626" }}
            className="pointer"
            onClick={() => handleFollow()}
          >
            <FiCheckSquare size={40} color={"#5931bf"} className="options" />
          </span>
        ) : (
          <FiCheckSquare size={40} color={"#5931bf"} className="options" onClick={() => handleFollow()} />
        )}
      </>
    );
  } else {
    return (
      <>
        {nobtn ? (
          <span className="pointer" onClick={() => handleFollow()}>
            <FiSquare size={40} color={"#5931bf"} className="options" />
          </span>
        ) : (
          <FiSquare size={40} color={"#5931bf"} className="options" onClick={() => handleFollow()} />
        )}
      </>
    );
  }
};

export default Follow;
