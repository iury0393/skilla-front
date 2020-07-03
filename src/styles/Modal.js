import styled, { keyframes } from "styled-components";

const openModal = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`;

export const ModalWrapper = styled.div`
display: flex;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
z-index: 100;
overflow: hidden;
animation: ${openModal} 0.5s ease-in-out;

.modal-content {
  background: ${(props) => props.theme.white};
  border-radius: 4px;
  margin: auto;
  justify-self: center;
  width: 50%;
}

.modal-content div {
  margin-left: 25%;
}

.modal-content img.post-preview {
  width: 50%;
  height: 100%;
  object-fit: contain;
}
`;

export default ModalWrapper;