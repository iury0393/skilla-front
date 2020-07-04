import React from "react";
import { FiArchive } from "react-icons/fi";
import Wrapper from "../styles/Placeholder";

const Placeholder = ({ icon, title, text }) => {
  return (
    <Wrapper>
      {icon === "post" && <FiArchive size={25} color={"#5931bf"} />}
      <h2>{title}</h2>
      <p>{text}</p>
    </Wrapper>
  );
};

export default Placeholder;
