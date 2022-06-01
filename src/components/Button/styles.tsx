import styled from 'styled-components';
import { ReplyComponent } from './';
import { PURPLE, WHITE } from '../Constant';

export const Reply = styled(ReplyComponent)`
  font-size: 1em;
  font-weight: bold;
  margin: 1em 0;
  padding: 0.25em 1em;
  border: 2px solid #7510f7;
  border-radius: 50px;
  display: flex;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  align-self: ${(props) => props.alignSelf};
  &:hover {
    cursor: pointer;
    color: ${(props) => (props.color === WHITE ? PURPLE : WHITE)};
    background-color: ${(props) =>
      props.backgroundColor === PURPLE ? WHITE : PURPLE};
  }
`;
