import styled from "styled-components";

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

export default PostWrapper;