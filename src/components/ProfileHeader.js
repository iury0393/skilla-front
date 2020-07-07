import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Follow from "./Follow";
import ModalUse from "./Modal";
import { UserContext } from "../context/UserContext";
import { FiX, FiEdit } from "react-icons/fi";
import { Modal, Button } from 'react-bootstrap';
import SkillBar from "react-skillbars";
import PDF from './PDF';
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
  const { user } = useContext(UserContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const [showFollowersModal, setFollowersModal] = useState(false);
  const [showFollowingModal, setFollowingModal] = useState(false);
  const closeModal = () => {
    setFollowersModal(false);
    setFollowingModal(false);
  };

  const [followersState, setFollowers] = useState(0);
  const incFollowers = () => setFollowers(followersState + 1);
  const decFollowers = () => setFollowers(followersState - 1);

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
              <ModalUse>
                <ModalContent
                  loggedInUser={user}
                  users={profile?.followers}
                  title="Seguidores"
                  closeModal={closeModal}
                />
              </ModalUse>
            )}

            {showFollowingModal && profile?.following.length > 0 && (
              <ModalUse>
                <ModalContent
                  loggedInUser={user}
                  users={profile?.following}
                  title="Seguindo"
                  closeModal={closeModal}
                />
              </ModalUse>
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
            {/* <Modal show={isOpen} onHide={hideModal}>
              <Modal.Body><PDF /></Modal.Body>
            </Modal>
              <Button style={{backgroundColor: "#5931BF", marginBottom: 20}} onClick={showModal}>Currículo</Button>
            <SkillBar
              skills={skills} 
              colors={{bar: "#5931bf", title: {text: "#FFF", background: "#9510b7"}}}
              height={20}
            /> */}
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
            <ModalUse>
              <ModalContent
                loggedInUser={user}
                users={profile?.followers}
                title="Seguidores"
                closeModal={closeModal}
              />
            </ModalUse>
          )}

          {showFollowingModal && profile?.following.length > 0 && (
            <ModalUse>
              <ModalContent
                loggedInUser={user}
                users={profile?.following}
                title="Seguindo"
                closeModal={closeModal}
              />
            </ModalUse>
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
