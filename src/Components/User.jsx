import React from "react";
import defaultUser from "../Assets/Images/defaultUser.png";
import styled from "styled-components";

const User = (props) => {
  const sayHi = () => {
    console.log("Hi, I'm " + props.name);
  };

  return (
    <UserContainer>
      <UserImage
        src={props.image ? props.image : defaultUser}
        alt="userImage"
        className="user-image"
      />
      <UserName>{props.name}</UserName>
      <p
        className="bio"
        style={{ fontSize: "1.2rem", textAlign: "center", color: "#4e4d4d" }}
      >
        {props.bio}
      </p>
      <UserButton onClick={() => sayHi()}>Click me</UserButton>
    </UserContainer>
  );
};

const UserContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  border-radius: 2rem;
  margin: 2rem 0;
  padding: 1rem 0;
`;

const UserName = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: #2f2f2f;
  font-family: "Courier New", Courier, monospace;
  margin: 1.5rem 0;
`;

const UserImage = styled.img`
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
`;

const UserButton = styled.button`
  width: 6rem;
  height: 2.5rem;
  border-radius: 1rem;
  outline: none;
  border: none;
  background-color: #292828;
  color: #fff;
  cursor: pointer;
  margin-top: 1rem;
`;

export default User;
