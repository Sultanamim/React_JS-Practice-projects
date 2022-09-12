import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Cookies;
  background: #262626;
  width: 100%;
  height: 100vh;
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: #1e1e1e;
  width: 550px;
  height: 350px;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  width: 215px;
  position: absolute;
  left: 20px;
  z-index: 3;
`;
