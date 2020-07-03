import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LikePost from "./LikePost";
import Comment from "./Comment";
import DeletePost from "./DeletePost";
import Modal from "./Modal";
import useInput from "../hooks/useInput";
import Avatar from "../styles/Avatar";
import { client } from "../utils";
import { timeSince } from "../utils";
import { FiMoreHorizontal, FiMessageSquare, FiSend } from "react-icons/fi"
import PostWrapper from "../styles/Post";
import ModalContentWrapper from "../styles/ModalContent";

export const ModalContent = ({ hideGotoPost, postId, closeModal }) => {
	const history = useHistory();

	const handleGoToPost = () => {
		closeModal();
		history.push(`/p/${postId}`);
	};

	return (
		<ModalContentWrapper>
			<span className="danger" onClick={closeModal}>
				Cancel
			</span>
			<DeletePost postId={postId} closeModal={closeModal} goToHome={true} />
			{!hideGotoPost && <span onClick={handleGoToPost}>Go to Post</span>}
		</ModalContentWrapper>
	);
};

const Post = ({ post }) => {
	const comment = useInput("");
	const history = useHistory();

	const [showModal, setShowModal] = useState(false);
	const closeModal = () => setShowModal(false);

	const [newComments, setNewComments] = useState([]);
	const [likesState, setLikes] = useState(post.likesCount);

	const incLikes = () => setLikes(likesState + 1);
	const decLikes = () => setLikes(likesState - 1);

	const handleAddComment = e => {
		if (e.keyCode === 13) {
			e.preventDefault();

			client(`/posts/${post._id}/comments`, {
				body: { text: comment.value }
			}).then(resp => setNewComments([...newComments, resp.data]));

			comment.setValue("");
		}
	};

	return (
		<PostWrapper>
			<div className="post-header-wrapper">
				<div className="post-header">
					<Avatar
						className="pointer"
						src={post.user?.avatar}
						alt="avatar"
						onClick={() => history.push(`/${post.user?.username}`)}
					/>
					<h3
						className="pointer"
						onClick={() => history.push(`/${post.user?.username}`)}
					>
						{post.user?.fullname}
					</h3>
				</div>

				{showModal && (
					<Modal>
						<ModalContent postId={post._id} closeModal={closeModal} />
					</Modal>
				)}
				{post.isMine && <FiMoreHorizontal size={25} color={"#5931bf"} onClick={() => setShowModal(true)} />}
			</div>

			<img
				className="post-img"
				src={post.files?.length && post.files[0]}
				alt="post-img"
			/>

			<div className="post-actions">
				<LikePost
					isLiked={post.isLiked}
					postId={post._id}
					incLikes={incLikes}
					decLikes={decLikes}
				/>
				<FiMessageSquare size={25} color={"#5931bf"} onClick={() => history.push(`/p/${post._id}`)} />
				<FiSend size={25} color={"#5931bf"} />
			</div>

			<div className="likes-caption-comments">
				{likesState !== 0 && (
					<span className="likes bold">
						{likesState} {likesState > 1 ? "likes" : "like"}
					</span>
				)}

				<p>
					<span
						onClick={() => history.push(`/${post.user?.username}`)}
						className="pointer username bold"
					>
						{post.user?.fullname}
					</span>
					{post.caption}
				</p>

				{post.commentsCount > 2 && (
					<span
						onClick={() => history.push(`/p/${post._id}`)}
						className="view-comments"
					>
						View all {post.commentsCount} comments
					</span>
				)}

				{post.comments?.slice(0, 2).map(comment => (
					<Comment key={comment._id} hideavatar={true} comment={comment} />
				))}

				{newComments.map(comment => (
					<Comment key={comment._id} hideavatar={true} comment={comment} />
				))}

				<span className="secondary">{timeSince(post?.createdAt)} atrás</span>
			</div>

			<div className="add-comment">
				<textarea
					columns="3"
					placeholder="Adicione um comentário"
					value={comment.value}
					onChange={comment.onChange}
					onKeyDown={handleAddComment}
				></textarea>
			</div>
		</PostWrapper>
	);
};

export default Post;