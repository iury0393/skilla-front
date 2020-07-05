import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
align-items: center;
font-size: 1.1rem;
margin-bottom: 2rem;

.profile-info {
  padding-left: 35%;
}

.avatar {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 90px;
  margin-left: 21%;
}

.profile-meta {
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;
  margin-left: 48%;
}

.profile-meta h2 {
  position: relative;
  top: 3px;
}

.profile-stats {
  display: flex;
  margin-bottom: 1rem;
}

.options svg {
  position: relative;
  top: 7px;
  margin-left: 1rem;
}

.options-user svg {
  position: relative;
  top: 7px;
  margin-left: 1rem;
}

.options-user {
  margin-left: -15%;
}

.bio {
  text-align: center;
}

span {
  padding-right: 1rem;
}

a {
  color: ${(props) => props.theme.blue};
}

h2 {
  text-align: center;
}
@media screen and (max-width: 645px) {
  font-size: 1rem;

  .bio,
  .profile-stats {
    display: none;
    text-align: center;
  }

  .avatar {
    width: 140px;
    height: 140px;
  }

  .profile-meta {
    flex-direction: column;
  }

  button {
    margin-left: 0;
  }

  .bio-mobile {
    margin: 1rem 0;
    display: block;
    text-align: center;
  }
}

@media screen and (max-width: 420px) {
  font-size: 0.9rem;

  .avatar {
    width: 100px;
    height: 100px;
  }
}
`;

export default Wrapper;