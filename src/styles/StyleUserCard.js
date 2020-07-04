import styled from "styled-components";

const StyledUserCard = styled.div`
display: flex;
align-items: center;
margin-bottom: 1rem;

span {
  color: ${(props) => props.theme.secondaryColor};
}
`;

export default StyledUserCard;