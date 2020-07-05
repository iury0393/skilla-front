import React from "react";
import styled from "styled-components";
import Suggestions from "../components/Suggestions";

const Wrapper = styled.div`
	@media screen and (max-width: 1040px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}

  .suggestions-title {
    font-weight: bold;
    font-size: 27px;
    padding-bottom: 20px;
  }
`;

const SuggestionsPage = () => {
  return (
    <Wrapper>
      <h1 className="suggestions-title">Sugestões de usuários na plataforma</h1>
      <Suggestions />
    </Wrapper>
  );
};

export default SuggestionsPage;