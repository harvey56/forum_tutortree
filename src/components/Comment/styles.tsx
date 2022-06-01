import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  width: 90%;
  margin: 10px 0;
  justify-content: flex-end;
`;

export const Container = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  color: black;
  background-color: white;
  padding: 0.3em;
  width: ${props => props.width};
  padding: 15px;
`;

export const Title = styled.p`
  color: black;
  font-size: 2em;
  margin: 0;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 1em;
  margin-right: 1em;
  padding: 0.5em 0.1em;
  @media (max-width: 850px) {
    display: none;
  }
`;
