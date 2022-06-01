import styled from 'styled-components';

export const ModalHead = styled.div`
  width: 450px;
  background-color: white;
  color: black;
  z-index: 11;
  padding: 35px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: -260px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Comment = styled.textarea`
  border: 2px solid #7510f7;
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 20px;
  font-size: 1em;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  &:focus-visible: {
    outline: none;
  }
  &:visited: {
    outline: none;
  }
`;

export const Title = styled.input`
  border: 2px solid #7510f7;
  border-radius: 20px;
  padding: 15px;
  font-size: 1em;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  &:focus-visible: {
    outline: none;
  }
  &:visited: {
    outline: none;
  }
`;

export const Pseudonym = styled.input`
  border: 2px solid #7510f7;
  border-radius: 20px;
  padding: 15px;
  font-size: 1em;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  &:focus-visible: {
    outline: none;
  }
  &:visited: {
    outline: none;
  }
`;
