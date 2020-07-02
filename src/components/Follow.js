import React, { useEffect, useState } from "react";
import Button from "../styles/Button";
import { client } from "../utils";
import { FiCornerDownRight, FiCornerDownLeft } from "react-icons/fi";

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
            <FiCornerDownLeft size={40} color={"#5931bf"} />
          </span>
        ) : (
          <Button onClick={() => handleFollow()}>Seguindo</Button>
        )}
      </>
    );
  } else {
    return (
      <>
        {nobtn ? (
          <span className="pointer" onClick={() => handleFollow()}>
            <FiCornerDownRight size={40} color={"#5931bf"} />
          </span>
        ) : (
          <Button onClick={() => handleFollow()}>Seguir</Button>
        )}
      </>
    );
  }
};

export default Follow;
