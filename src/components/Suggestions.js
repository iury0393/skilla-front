import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Follow from "./Follow";
import Avatar from "../styles/Avatar";
import { client } from "../utils";
import Wrapper from "../styles/Suggestions";
import StyledUserCard from "../styles/StyleUserCard";

export const UserCard = ({ user }) => {
  const history = useHistory();

  return (
    <StyledUserCard>
      <Avatar
        className="pointer"
        onClick={() => history.push(`/${user.username}`)}
        lg
        src={user.avatar}
        alt="avatar"
      />

      <div className="user-info">
        <h3
          className="pointer user-name"
          onClick={() => history.push(`/${user.username}`)}
        >
          {user.fullname}
        </h3>
        <span>{user.username}</span>
      </div>
    </StyledUserCard>
  );
};

const Suggestions = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    client('/users').then((response) => {
      setUsers(response.data.filter((user) => !user.isFollowing));
    });
  }, []);

  return (
    <Wrapper>
      <div className="suggestions">
        {users.slice(0, 4).map((user) => (
          <div key={user.username} className="suggestions-usercard">
            <UserCard user={user} />
            <Follow nobtn isFollowing={user.isFollowing} userId={user._id} />
          </div>
        ))}
        {users.length === 0 && <p>Agora, não tem sugestões para você.</p>}
      </div>
    </Wrapper>
  );
};

export default Suggestions;
