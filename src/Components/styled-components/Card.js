import React from "react";
import Button from "./Button";
import nerdImage from "./styles/assets/bear-cartoon.png";
import { CardContainer, ContentContainer } from "./styles/Container.styles";
import { Tag } from "./styles/Elements.style";

export default function Card() {
  return (
    <CardContainer>
      <ContentContainer>
        <Tag color="#4361ee">EXCLUSIVE</Tag>
        <h1>React styled Components</h1>
        <p>
          Exclusive React Js tutorial on "Styled Components" where you will
          learn why we need this{"&"} how to use it
        </p>
        <Button
          link="https://www.linkedin.com/in/humaira-sultana-230b60226/"
          text="LinkedIn"
        />
        <Button
          link="https://github.com/Sultanamim/full-ecommerce-website"
          text="Github repo"
        />
      </ContentContainer>
      <img src={nerdImage} alt="cartoon" width="300px" />
    </CardContainer>
  );
}
