import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import DeletePost from "./DeletePost";
import Modal from "./Modal";
import Avatar from "../styles/Avatar";
import { timeSince } from "../utils";
import { MoreIcon, InboxIcon } from "./Icons";

const ModalContentWrapper = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column;
	text-align: center;

	span:last-child {
		border: none;
	}

	span {
		display: block;
		padding: 1rem 0;
		border-bottom: 1px solid ${props => props.theme.borderColor};
		cursor: pointer;
	}
`;

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

export const PostWrapper = styled.div`
	width: 615px;
	background: ${props => props.theme.white};
	border: 1px solid ${props => props.theme.borderColor};
	margin-bottom: 1.5rem;

	.post-header-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.post-header {
		display: flex;
		align-items: center;
		padding: 1rem;
	}

	.post-header h3 {
		cursor: pointer;
	}

	.post-img {
		width: 100%;
		height: 100%;
	}

	.post-actions {
		display: flex;
		align-items: center;
		padding: 0.5rem 1rem;
		padding-bottom: 0.2rem;
	}

	.post-actions svg:last-child {
		margin-left: auto;
	}

	svg {
		margin-right: 1rem;
	}

	.likes-caption-comments {
		padding: 1rem;
		padding-top: 0.3rem;
	}

	.username {
		padding-right: 0.3rem;
	}

	.view-comments {
		color: ${props => props.theme.secondaryColor};
		cursor: pointer;
	}

	textarea {
		height: 100%;
		width: 100%;
		border: none;
		border-top: 1px solid ${props => props.theme.borderColor};
		resize: none;
		padding: 1rem 0 0 1rem;
		font-size: 1rem;
		font-family: "Fira Sans", sans-serif;
	}

	@media screen and (max-width: 690px) {
		width: 99%;
	}
`;

const Post = ({ post }) => {
	const history = useHistory();

	const [showModal, setShowModal] = useState(false);
	const closeModal = () => setShowModal(false);


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
				{post.isMine && <MoreIcon onClick={() => setShowModal(true)} />}
			</div>

			<img
				className="post-img"
				src={post.files?.length && post.files[0]}
				alt="post-img"
			/>

			<div className="post-actions">
				<InboxIcon />
			</div>

			<div className="likes-caption-comments">
				<p>
					<span
						onClick={() => history.push(`/${post.user?.username}`)}
						className="pointer username bold"
					>
						{post.user?.fullname}
					</span>
					{post.caption}
				</p>

				<span className="secondary">{timeSince(post?.createdAt)} ago</span>
			</div>
		</PostWrapper>
	);
};

export default Post;
