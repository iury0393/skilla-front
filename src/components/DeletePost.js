import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { FeedContext } from "../context/FeedContext";
import { client } from "../utils";

const DeletePost = ({ postId, closeModal, goToHome }) => {
  const { feed, setFeed } = useContext(FeedContext);
  const history = useHistory();

  const handleDeletePost = () => {
    closeModal();

    if (goToHome) {
      history.push(`/`);
    }

    setFeed(feed.filter((post) => post._id !== postId));
    toast.success("Seu post foi deletado");
		client(`/posts/${postId}`, { method: 'DELETE' })
  };

  return (
    <span className="danger" onClick={handleDeletePost}>
      Deletar Post
    </span>
  );
};

export default DeletePost;
