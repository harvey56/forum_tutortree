import React from 'react';
import { Comment, Pseudonym, ModalHead, Form, Title } from './styles';
import { Reply } from '../Button/styles';
import {
  addInput,
  resetForm,
  handleModalPost,
  handleModalReply,
} from '../../actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from '../../reducers/reducers';

interface Props {
  children?: React.ReactNode;
  className?: string;
  comment?: string;
  pseudonym?: string;
  btnName?: 'Reply' | 'Post';
  placeholderComment: string;
  placeholderPseudonym?: string;
  // handleSubmitForm: React.FormEventHandler<HTMLFormElement>;
}

export const ModalComponent: React.FC<Props> = ({
  className,
  children,
  btnName = 'Reply',
  placeholderComment,
  placeholderPseudonym,
}) => {
  const [comment, setComment] = React.useState('');
  const [pseudonym, setPseudonym] = React.useState('');
  const [title, setTitle] = React.useState('');
  const dispatch = useDispatch();
  const form = useSelector((state: Store) => state.formReducer);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // dispatch action with new comment inputs to the store
    dispatch(
      addInput({
        // id given to the comment follows the previous given id
        id: form.comments.length + 1, //Math.floor(Math.random() * 100),
        votes: 0,
        comment: comment,
        pseudonym: pseudonym,
        title: title,
        type: btnName,
      })
    );
    // close the modal
    btnName === 'Reply'
      ? dispatch(handleModalReply(false))
      : dispatch(handleModalPost(false));
  };

  return (
    <>
      <ModalHead>
        <Form onSubmit={handleSubmit}>
          {btnName === 'Post' && (
            <Title
              type="text"
              name="title"
              value={title}
              onChange={event => setTitle(event.target.value)}
              placeholder="insert post title here"
            />
          )}
          <Comment
            placeholder={placeholderComment}
            name="comment"
            value={comment}
            onChange={event => setComment(event.target.value)}
            rows={6}
          />
          <Pseudonym
            type="text"
            name="pseudonym"
            value={pseudonym}
            onChange={event => setPseudonym(event.target.value)}
            placeholder={placeholderPseudonym}
          />
          <Reply
            type="submit"
            alignSelf="flex-start"
            color="#ffffff"
            backgroundColor="#7510f7"
          >
            {btnName}
          </Reply>
        </Form>
      </ModalHead>
    </>
  );
};
