import styled from "styled-components";

const ModalContentWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
padding-right: 2rem;
font-size: 0.9rem;
width: 350px;

img {
  width: 40px;
  object-fit: cover;
  height: 40px;
  border-radius: 20px;
  margin-right: 1rem;
}

.profile-info {
  display: flex;
}

span {
  color: ${(props) => props.theme.secondaryColor};
}

button {
  font-size: 0.9rem;
  position: relative;
  top: -10px;
}

@media screen and (max-width: 480px) {
  width: 340px;
}
`;

export default ModalContentWrapper;