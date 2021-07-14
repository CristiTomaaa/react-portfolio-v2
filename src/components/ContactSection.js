import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { db } from "../components/Firebase";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  // send form to firebase
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has beem submitted !");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <label>Name </label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Message </label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button
          type="submit"
          style={{ background: loader ? "#ccc" : "#f54f33" }}
        >
          SUBMIT
        </button>
      </StyledForm>
    </StyledContainer>
  );
};

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vh;
  input,
  textarea {
    padding: 20px;
    border-radius: 3px;
    box-shadow: 0px 0px 5px #dadada;
    margin-bottom: 20px;
    border: 1px solid lightgray;
    border: none;
    background: #fff;
    font-size: 16px;
    color: rgb(0, 0, 32);
    outline: none;
    font-family: "Inter", sans-serif;
    border-radius: 3rem;
  }
  input:focus,
  textarea:focus {
    border: 1px solid #fd846f;
  }
  textarea {
    min-height: 250px;
  }
  label {
    padding-bottom: 10px;
    color: rgb(0, 0, 32);
    font-weight: bold;
  }
  button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 4rem;
    border: 2px solid #f54f33;
    background: transparent;
    background-color: #ffffff;
    color: #ffffff;
    transition: all 0.3s ease;
    border-radius: 4rem;
    font-family: "Inter", sans-serif;
    &:hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      background-color: #f54f33;
      color: white;
    }
  }
  @media (max-width: 1300px) {
    max-width: 40vh;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  margin: 5rem auto;
`;

export default ContactSection;
