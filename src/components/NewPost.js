import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import NewPostWrapper from "../styles/NewPost";
import { Modal, Button, Form } from 'react-bootstrap';
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
				<Modal show={setShowModal}>
					<Modal.Header>
						<Button variant="danger" onClick={() => setShowModal(false)}>
							Cancelar
						</Button>
						<Button variant="primary" className="modal-btn-post" onClick={handleSubmitPost}>
							Compartilhar
						</Button>
					</Modal.Header>
					<Modal.Body>
						{preview && (
							<img className="post-preview" style={{width: "100%"}} src={preview} alt="preview" />
						)}
					</Modal.Body>
					<Modal.Footer style={{display: "block"}}>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Control 
								as="textarea"
								rows="3"
								placeholder="Adicione uma legenda"
								value={caption.value}
								onChange={caption.onChange}
							/>
						</Form.Group>
					</Modal.Footer>
				</Modal>
			)}
		</NewPostWrapper>
	);
};

export default NewPost;
