import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import NewPostWrapper from "../styles/NewPost";
import Modal from "./Modal";
import useInput from "../hooks/useInput";
import { FeedContext } from "../context/FeedContext";
import { client, uploadImage } from "../utils";
import { FiPlusSquare } from 'react-icons/fi';



const NewPost = () => {
	const { feed, setFeed } = useContext(FeedContext);
	const [showModal, setShowModal] = useState(false);
	const caption = useInput("");
	const [preview, setPreview] = useState("");
	const [postImage, setPostImage] = useState("");

	const handleUploadImage = e => {
		if (e.target.files[0]) {
			const reader = new FileReader();

			reader.onload = e => {
				setPreview(e.target.result);
				setShowModal(true);
			};
			reader.readAsDataURL(e.target.files[0]);

			uploadImage(e.target.files[0]).then(res => {
				setPostImage(res.secure_url);
			});
		}
	};

	const handleSubmitPost = () => {
		if (!caption.value) {
			return toast.error("Por favor, escreva algo.");
		}

		setShowModal(false);

		const tags = caption.value
			.split(" ")
			.filter(caption => caption.startsWith("#"));

		const cleanedCaption = caption.value
			.split(" ")
			.filter(caption => !caption.startsWith("#"))
			.join(" ");

		caption.setValue("");

		const newPost = {
			caption: cleanedCaption,
			files: [postImage],
			tags
		};

		client(`/posts`, { body: newPost }).then(res => {
			const post = res.data;
			post.isLiked = false;
			post.isSaved = false;
			post.isMine = true;
			setFeed([post, ...feed]);
			window.scrollTo(0, 0);
			toast.success("Seu post foi submetido corretamente");
		});
	};

	return (
		<NewPostWrapper>
			<label htmlFor="upload-post">
				<FiPlusSquare size={25} color={"#5931bf"} />
			</label>
			<input
				id="upload-post"
				type="file"
				onChange={handleUploadImage}
				accept="image/*"
				style={{ display: "none" }}
			/>
			{showModal && (
				<Modal>
					<div className="modal-content">
						<div className="newpost-header">
							<h3 onClick={() => setShowModal(false)}>Cancelar</h3>
							<h3 onClick={handleSubmitPost}>Compartilhar</h3>
						</div>
						{preview && (
							<img className="post-preview" src={preview} alt="preview" />
						)}
						<div>
							<textarea
								placeholder="Adicione uma legenda"
								value={caption.value}
								onChange={caption.onChange}
							/>
						</div>
					</div>
				</Modal>
			)}
		</NewPostWrapper>
	);
};

export default NewPost;
