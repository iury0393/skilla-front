import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import PostPreview from "../components/PostPreview";
import ProfileHeader from "../components/ProfileHeader";
import Placeholder from "../components/Placeholder";
import Loader from "../components/Loader";
import { client } from "../utils";
import { FiArchive } from "react-icons/fi";

const Wrapper = styled.div`
  .profile-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.4rem 0;
  }

  .profile-tab div {
    display: flex;
    cursor: pointer;
    margin-right: 3rem;
  }

  .profile-tab span {
    padding-left: 0.3rem;
  }

  .profile-tab svg {
    height: 24px;
    width: 24px;
  }

  hr {
    border: 0.5px solid ${(props) => props.theme.borderColor};
  }
`;

const Profile = () => {
  const [tab, setTab] = useState("POSTS");

  const { username } = useParams();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [deadend, setDeadend] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    client(`/users/${username}`)
      .then((res) => {
        setLoading(false);
        setDeadend(false);
        setProfile(res.data);
      })
      .catch((err) => setDeadend(true));
  }, [username]);

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
      <ProfileHeader profile={profile} />
      <hr />

      <div className="profile-tab">
        <div
          style={{ fontWeight: tab === "POSTS" ? "500" : "" }}
          onClick={() => setTab("POSTS")}
        >
          <FiArchive size={25} color={"#5931bf"} />
          <span>Posts</span>
        </div>
      </div>

      {tab === "POSTS" && (
        <>
          {profile?.posts?.length === 0 ? (
            <Placeholder
              title="Posts"
              text="Quando fizer publicações, elas iram aparecer aqui"
              icon="post"
            />
          ) : (
            <PostPreview posts={profile?.posts} />
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Profile;
