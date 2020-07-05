import styled from "styled-components";

const Wrapper = styled.div`
width: 280px;
margin-top: 1rem;

.suggestions {
  margin-top: 1.8rem;
}

.suggestions div {
  width: 230px;
}

.suggestions > h3 {
  margin-bottom: 0.5rem;
}

.suggestions-usercard {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.suggestions img {
  width: 44px;
  height: 44px;
  border-radius: 22px;
}

.follow {
  position: relative;
  top: -0.3rem;
}

.user-name {
  font-size: 20px;
}

span {
  color: ${(props) => props.theme.blue};
  font-weight: 500;
}

@media screen and (max-width: 1095px) {
  left: 67%;
}

@media screen and (max-width: 1040px) {
  display: none;
}
`;

export default Wrapper;