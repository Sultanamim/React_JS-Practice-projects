import styled from "styled-components";

export const Tag = styled.span`
  display: inline-block;
  color: #ffffff;
  background: ${(props) => props.color};
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 0.7rem;
`;
