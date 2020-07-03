import styled from "styled-components";

const NewPostWrapper = styled.div`
.newpost-header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}

.newpost-header h3:first-child {
  color: ${props => props.theme.red};
}

h3 {
  cursor: pointer;
}

.newpost-header h3:last-child {
  color: ${props => props.theme.blue};
}

textarea {
  height: 100%;
  width: 100%;
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  resize: none;
}

.modal-content {
  width: 700px;
}

@media screen and (max-width: 780px) {
  .modal-content {
    width: 90vw;
  }
}
`;

export default NewPostWrapper;