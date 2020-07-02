import styled from "styled-components";

const ModalContentWrapper = styled.div`
width: 300px;
display: flex;
flex-direction: column;
text-align: center;

span:last-child {
  border: none;
}

span {
  display: block;
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  cursor: pointer;
}
`;

export default ModalContentWrapper;