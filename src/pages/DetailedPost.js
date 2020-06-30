import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import Placeholder from "../components/Placeholder";
import Avatar from "../styles/Avatar";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import { ModalContent } from "../components/Post";
import { client } from "../utils";
import { timeSince } from "../utils";
import { MoreIcon, InboxIcon } from "../components/Icons";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;

  .post-info {
    border: 1px solid ${(props) => props.theme.borderColor};
  }

  .post-header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }

  .post-header {
    display: flex;
    align-items: center;
  }

  .post-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .post-actions-stats {
    padding: 1rem;
    padding-bottom: 0.1rem;
  }

  .post-actions {
    display: flex;
    align-items: center;
    padding-bottom: 0.5rem;
  }

  .post-actions svg:last-child {
    margin-left: auto;
  }

  .comments {
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    padding: 1rem;
    height: 300px;
    overflow-y: scroll;
    scrollbar-width: none;
  }

  .comments::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  svg {
    margin-right: 1rem;
  }

  textarea {
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.bg};
    border: none;
    border-top: 1px solid ${(props) => props.theme.borderColor};
    resize: none;
    padding: 1rem 0 0 1rem;
    font-size: 1rem;
    font-family: "Fira Sans", sans-serif;
  }

  @media screen and (max-width: 840px) {
    display: flex;
    flex-direction: column;

    .comments {
      height: 100%;
    }
  }
`;

const DetailedPost = () => {
  const history = useHistory();
  const { postId } = useParams();

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  const [loading, setLoading] = useState(true);
  const [deadend, setDeadend] = useState(false);
  const [post, setPost] = useState({});


  useEffect(() => {
    window.scrollTo(0, 0);
    client(`/posts/${postId}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
        setDeadend(false);
      })
      .catch((err) => setDeadend(true));
  }, [postId]);

  if (!deadend && loading) {
    return <Loader />;
  }

  if (deadend) {
    return (
      <Placeholder
        title="Desculpe, essa página não esta disponível"
        text="O link que você usou pode estar quebrado, ou a página pode ter sido removida."
      />
    );
  }

  return (
    <Wrapper>
      <img
        className="post-img"
        src={post.files?.length && post.files[0]}
        alt="post"
      />

      <div className="post-info">
        <div className="post-header-wrapper">
          <div className="post-header">
            <Avatar
              onClick={() => history.push(`/${post.user?.username}`)}
              className="pointer avatar"
              src={post.user?.avatar}
              alt="avatar"
            />

            <h3
              className="pointer"
              onClick={() => history.push(`/${post.user?.username}`)}
            >
              {post.user?.username}
            </h3>
          </div>
          {post.isMine && <MoreIcon onClick={() => setShowModal(true)} />}

          {showModal && (
            <Modal>
              <ModalContent
                postId={post._id}
                hideGotoPost={true}
                closeModal={closeModal}
              />
            </Modal>
          )}
        </div>

        <div className="comments">

        </div>

        <div className="post-actions-stats">
          <div className="post-actions">
            <InboxIcon />
          </div>

        </div>

        <span
          style={{ display: "block", padding: "0 1rem", paddingBottom: "1rem" }}
          className="secondary"
        >
          {timeSince(post.createdAt)} ago
        </span>
      </div>
    </Wrapper>
  );
};

export default DetailedPost;
