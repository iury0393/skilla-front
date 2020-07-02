import React from "react";
import { FiLoader } from "react-icons/fi";
import Wrapper from "../styles/Loader";

const Loader = () => {
  return (
    <Wrapper>
      <FiLoader size={25} color={"#5931bf"} />
    </Wrapper>
  );
};

export default Loader;
