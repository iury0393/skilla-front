import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Follow from "./Follow";
import Modal from "./Modal";
import { UserContext } from "../context/UserContext";
import { FiLogOut, FiX, FiEdit } from "react-icons/fi";
import SkillBar from "react-skillbars";
import ModalContentWrapper from "../styles/ModalContentProfileHeader";
import MobileWrapper from "../styles/MobileHeader";
import Wrapper from "../styles/ProfileHeader";



const modalHeaderStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #DBDBDB",
  padding: "1rem",
};

const ModalContent = ({ loggedInUser, users, closeModal, title }) => {
  const history = useHistory();

  return (
		<div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <div style={modalHeaderStyle}>
        <h3>{title}</h3>
        <FiX size={30} color={"#5931bf"} onClick={closeModal} />
      </div>
      {users.map((user) => (
        <ModalContentWrapper key={user._id}>
          <div className="profile-info">
            <img
              className="pointer"
              onClick={() => {
                closeModal();
                history.push(`/${user.username}`);
              }}
              src={user.avatar}
              alt="avatar"
            />
            <div className="user-info">
              <h3
                className="pointer"
                onClick={() => {
                  closeModal();
                  history.push(`/${user.username}`);
                }}
              >
                {user.username}
              </h3>
              <span>{user.fullname}</span>
            </div>
          </div>
          <Follow isFollowing={user.isFollowing} userId={user._id} />
        </ModalContentWrapper>
      ))}
    </div>
  );
};

const ProfileHeader = ({ profile }) => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  const [showFollowersModal, setFollowersModal] = useState(false);
  const [showFollowingModal, setFollowingModal] = useState(false);
  const closeModal = () => {
    setFollowersModal(false);
    setFollowingModal(false);
  };

  const [followersState, setFollowers] = useState(0);
  const incFollowers = () => setFollowers(followersState + 1);
  const decFollowers = () => setFollowers(followersState - 1);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Você está deslogado");
  };

  useEffect(() => setFollowers(profile?.followersCount), [profile]);

  const skills = [
    {type: "Java", level: 85},
    {type: "Flutter", level: 74}
  ]

  return (
    <>
      <Wrapper>
        <div className="profile-info">
        <img className="avatar" src={profile?.avatar} alt="avatar" />
        <h2>{profile?.username}</h2>
          <div className="profile-meta">
            
            {profile?.isMe ? (
              <div className="options-user">
                <FiEdit size={30} color={"#5931bf"} onClick={() => history.push("/accounts/edit")} />
                <FiLogOut className="icon-logout" size={30} color={"#5931bf"} onClick={handleLogout} />
              </div>
            ) : (
              <Follow
                isFollowing={profile?.isFollowing}
                incFollowers={incFollowers}
                decFollowers={decFollowers}
                userId={profile?._id}
              />
            )}
          </div>

          <div className="profile-stats">
            <span>{profile?.postCount} Posts</span>

            <span className="pointer" onClick={() => setFollowersModal(true)}>
              {followersState} Seguidores
            </span>

            <span className="pointer" onClick={() => setFollowingModal(true)}>
              {profile?.followingCount} Seguindo
            </span>

            {showFollowersModal && profile?.followers.length > 0 && (
              <Modal>
                <ModalContent
                  loggedInUser={user}
                  users={profile?.followers}
                  title="Seguidores"
                  closeModal={closeModal}
                />
              </Modal>
            )}

            {showFollowingModal && profile?.following.length > 0 && (
              <Modal>
                <ModalContent
                  loggedInUser={user}
                  users={profile?.following}
                  title="Seguindo"
                  closeModal={closeModal}
                />
              </Modal>
            )}
          </div>

          <div className="bio">
            <span className="bold">{profile?.fullname}</span>
            <p>{profile?.bio}</p>
            <a
              href={profile?.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile?.website}
            </a>
            <SkillBar
              skills={skills} 
              colors={{bar: "#5931bf", title: {text: "#FFF", background: "#9510b7"}}}
              height={20}
            />
          </div>
        </div>
      </Wrapper>
      <MobileWrapper>
        <div className="mobile-profile-stats">
          <span>{profile?.postCount} Posts</span>

          <span className="pointer" onClick={() => setFollowersModal(true)}>
            {followersState} Seguidores
          </span>

          <span className="pointer" onClick={() => setFollowingModal(true)}>
            {profile?.followingCount} Seguindo
          </span>

          {showFollowersModal && profile?.followers.length > 0 && (
            <Modal>
              <ModalContent
                loggedInUser={user}
                users={profile?.followers}
                title="Seguidores"
                closeModal={closeModal}
              />
            </Modal>
          )}

          {showFollowingModal && profile?.following.length > 0 && (
            <Modal>
              <ModalContent
                loggedInUser={user}
                users={profile?.following}
                title="Seguindo"
                closeModal={closeModal}
              />
            </Modal>
          )}
        </div>
        <div className="mobile-bio">
          <span className="bold">{profile?.fullname}</span>
          <p>{profile?.bio}</p>
          <a href={profile?.website} target="_blank" rel="noopener noreferrer">
            {profile?.website}
          </a>
        </div>
      </MobileWrapper>
    </>
  );
};

export default ProfileHeader;
