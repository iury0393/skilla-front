import React from "react";
import PostWrapper from "../styles/Post";
import Avatar from "../styles/Avatar";
import Google from "../assets/google.jpeg";
import GoogleDev from "../assets/googleDev.png";
import IBM from "../assets/ibm.jpeg";
import IBMDev from "../assets/ibmDev.png";
import { FiHeart, FiMessageSquare, FiSend } from "react-icons/fi"

const Opportunities = () => {
  return (
    <>
      <h1>Oportunidades</h1>
      <PostWrapper>
        <div className="post-header-wrapper">
          <div className="post-header">
            <Avatar
              className="pointer"
              src={Google}
              alt="avatar"
            />
            <h3 className="pointer">Google</h3>
          </div>
        </div>
        <img
          className="post-img"
          src={GoogleDev}
          alt="post-img"
        />
        <div className="post-actions">
          <FiHeart size={25} color={"#5931bf"}/>
          <FiMessageSquare size={25} color={"#5931bf"} />
          <FiSend size={25} color={"#5931bf"} />
			  </div>

        <div className="likes-caption-comments">

          <p>
            <span className="pointer username bold"> Google </span>
            Oportunidade para ser um desenvolvedor na Google<br/>
            Responda esse comentário para se inscrever.
          </p>

          <span className="secondary">2 dias atrás</span>
        </div>

        <div className="add-comment">
          <textarea
            columns="3"
            placeholder="Adicione um comentário"
          ></textarea>
			  </div>
      </PostWrapper>

      <PostWrapper>
        <div className="post-header-wrapper">
          <div className="post-header">
            <Avatar
              className="pointer"
              src={IBM}
              alt="avatar"
            />
            <h3 className="pointer">IBM</h3>
          </div>
        </div>
        <img
          className="post-img"
          src={IBMDev}
          alt="post-img"
        />
        <div className="post-actions">
          <FiHeart size={25} color={"#5931bf"}/>
          <FiMessageSquare size={25} color={"#5931bf"} />
          <FiSend size={25} color={"#5931bf"} />
			  </div>

        <div className="likes-caption-comments">

          <p>
            <span className="pointer username bold"> IBM </span>
            Seja um DevOpsSec na IBM! <br/>
            Responda esse comentário para se inscrever.
          </p>

          <span className="secondary">6 dias atrás</span>
        </div>

        <div className="add-comment">
          <textarea
            columns="3"
            placeholder="Adicione um comentário"
          ></textarea>
			  </div>
      </PostWrapper>
    </>
  );
};

export default Opportunities;