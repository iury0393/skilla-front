import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../styles/Button";
import Avatar from "../styles/Avatar";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";
import { uploadImage } from "../utils";
import { client } from "../utils";
import { FiCheck } from "react-icons/fi";
import Wrapper from "../styles/ProfileForm";


const ProfileForm = () => {
	const history = useHistory();
	const { user, setUser } = useContext(UserContext);
	const [newAvatar, setNewAvatar] = useState("");

	const fullname = useInput(user.fullname);
	const username = useInput(user.username);
	const bio = useInput(user.bio);
	const website = useInput(user.website);

	const handleImageUpload = e => {
		if (e.target.files[0]) {
			uploadImage(e.target.files[0]).then(res => setNewAvatar(res.secure_url));
		}
	};

	const handleEditProfile = e => {
		e.preventDefault();

		if (!fullname.value) {
			return toast.error("O campo de nome não pode estar vazio");
		}

		if (!username.value) {
			return toast.error("O campo de usuário não pode estar vazio");
		}


		const body = {
			fullname: fullname.value,
			username: username.value,
			bio: bio.value,
			website: website.value,
			avatar: newAvatar || user.avatar
		};

		client("/users", { method: "PUT", body })
			.then(res => {
				setUser(res.data);
				localStorage.setItem("user", JSON.stringify(res.data));
				history.push(`/${body.username || user.username}`);
			})
			.catch(err => toast.error(err.message));
	};

	return (
		<Wrapper>
			<form onSubmit={handleEditProfile}>
				<div className="input-group change-avatar">
					<div>
						<label htmlFor="change-avatar">
							<Avatar
								lg
								src={newAvatar ? newAvatar : user.avatar}
								alt="avatar"
							/>
						</label>
						<input
							id="change-avatar"
							accept="image/*"
							type="file"
							onChange={handleImageUpload}
						/>
					</div>
					<div className="change-avatar-meta">
						<h2>{user.username}</h2>
						<label htmlFor="change-avatar-link">
							<span>Troque a imagem de profile</span>
						</label>
						<input
							id="change-avatar-link"
							accept="image/*"
							type="file"
							onChange={handleImageUpload}
						/>
					</div>
				</div>

				<div className="input-group">
					<label className="bold">Nome</label>
					<input
						type="text"
						value={fullname.value}
						onChange={fullname.onChange}
					/>
				</div>

				<div className="input-group">
					<label className="bold">Usuário</label>
					<input
						type="text"
						value={username.value}
						onChange={username.onChange}
					/>
				</div>

				<div className="input-group">
					<label className="bold">Website</label>
					<input
						type="text"
						value={website.value}
						onChange={website.onChange}
					/>
				</div>

				<div className="input-group textarea-group">
					<label className="bold">Bio</label>
					<textarea
						cols="10"
						value={bio.value}
						onChange={bio.onChange}
					></textarea>
				</div>

				<Button style={{backgroundColor: "#FFF", borderColor: "#5931bf"}}><FiCheck size={60} color={"#5931bf"} /></Button>
			</form>
		</Wrapper>
	);
};

export default ProfileForm;