import React from 'react';
import { PURPLE, WHITE, ColorType } from '../Constant';

interface ReplyProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  alignSelf: 'flex-start' | 'flex-end';
  color: ColorType;
  backgroundColor: ColorType;
}

export const ReplyComponent: React.FC<ReplyProps> = ({
  children,
  alignSelf = 'flex-end',
  color = PURPLE,
  backgroundColor = WHITE,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};
