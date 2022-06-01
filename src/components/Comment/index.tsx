import React from 'react';
import { Container, Wrapper, Title, Text } from './styles';
import { Votes } from './Votes';
import { handleModalReply, upvote, downvote } from '../../actions/actions';
import { Reply } from '../Button/styles';
import { useDispatch } from 'react-redux';

interface Props {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  comment?: string;
  votes: number;
  id: number;
  width: string;
  votesDisabled: boolean;
}

const Comment: React.FC<Props> = ({
  title,
  className,
  comment,
  votes,
  id,
  width,
  votesDisabled,
}) => {
  const dispatch = useDispatch();

  const handleUpvote = (e: React.MouseEvent, id: number) => {
    dispatch(upvote(id));
  };

  const handleDownvote = (e: React.MouseEvent, id: number) => {
    dispatch(downvote(id));
  };

  function handleClickReply(e: React.MouseEvent, id: number) {
    dispatch(handleModalReply(true));
  }

  return (
    <Wrapper>
      {votesDisabled ? (
        <Votes>{votes}</Votes>
      ) : (
        <Votes
          handleOnClickUpvote={e => handleUpvote(e, id)}
          handleOnClickDownvote={e => handleDownvote(e, id)}
        >
          {votes}
        </Votes>
      )}
      <Container width={width}>
        <Title>{title}</Title>
        <Text>{comment}</Text>
        <Reply
          onClick={e => handleClickReply(e, id)}
          alignSelf="flex-end"
          color="#7510f7"
          backgroundColor="#ffffff"
        >
          Reply
        </Reply>
      </Container>
    </Wrapper>
  );
};

export default Comment;
