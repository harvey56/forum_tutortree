import React from 'react';
import { VotesWrapper, VotesCount } from './styles';
import {
  StyledKeyboardArrowUp,
  StyledKeyboardArrowDown,
} from '../../icons/styles';

interface Props {
  children?: React.ReactNode;
  handleOnClickUpvote?: React.MouseEventHandler<any>;
  handleOnClickDownvote?: React.MouseEventHandler<any>;
  className?: string;
}

export const Votes: React.FC<Props> = ({
  className,
  children,
  handleOnClickUpvote,
  handleOnClickDownvote,
}) => {
  return (
    <VotesWrapper className={className}>
      <StyledKeyboardArrowUp onClick={handleOnClickUpvote} />
      <VotesCount>{children}</VotesCount>
      <StyledKeyboardArrowDown onClick={handleOnClickDownvote} />
    </VotesWrapper>
  );
};
