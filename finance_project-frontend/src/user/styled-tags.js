import styled from "styled-components";

export const Button = styled.button`
  background: #191919;
  color: #cccccc;
  font-size: 1em;
  margin-left: 1em;
  // margin-top: 10px;
  padding: 0.25em 1em;
  border: 3px solid #262626;
  border-radius: 6px;
  &:hover {
    background: #cccccc;
    color: #191919;
  }
`;

export const Form = styled.form`
  display: block;
  margin-inline: 40vw;
  margin-top: 30px;
  background-color: #333333;
  border-radius: 6px;
  padding-block: 15px;
`;

export const Input = styled.input`
  width: 250px;
  background-color: #191919;
  margin-left: 1em;
  color: #cccccc;
  border: 3px solid #262626;
  border-radius: 6px;
  margin-bottom: 15px;
`;

export const P = styled.p`
  margin-left: 1em;
  margin-bottom: 5px;
  color: #cccccc;
`;
