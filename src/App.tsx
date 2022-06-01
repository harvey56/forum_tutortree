import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Comment from './components/Comment';
import { ModalComponent } from './components/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from './reducers/reducers';
import { handleModalPost, handleModalReply } from './actions/actions';

function App() {
  const form = useSelector((state: Store) => state.formReducer);
  const msg = useSelector((state: Store) => state.messageBoardReducer);
  const dispatch = useDispatch();

  {
    console.log(
      'This is the list comments. It gets updated with each new comment and vote: ',
      form.comments
    );
  }

  // const handleSubmitPost = (e: any) => {
  // };

  const handleClickPost = (e: React.MouseEvent) => {
    dispatch(handleModalPost(true));
  };

  return (
    <>
      <Container>
        <BackgroundTop />
        <BackgroundBottom>
          <SubContainer>
            <TopFrame>
              <H3>Maths for 'em</H3>
              <NewPost onClick={handleClickPost}>New Post</NewPost>
            </TopFrame>
            <CommentSectionWrapper>
              {/* One hard-coded post for illustration purpose */}
              {/* <Comment
                votesDisabled={true}
                width="100%"
                title="Pythagors"
                votes={345}
                id={11}
                comment="TIL insert comment here"
              /> */}
              {/* series of comments added by the user below */}
              {form.comments.map(
                (
                  comment: {
                    id: number;
                    votes: number;
                    comment: string;
                    pseudonym: string;
                    title?: string;
                  },
                  idx: number
                ) => (
                  <Comment
                    votesDisabled={false}
                    key={comment.id}
                    width={comment.title ? '100%' : '80%'}
                    comment={comment.comment}
                    votes={comment.votes}
                    title={comment.title}
                    id={comment.id}
                  />
                )
              )}
            </CommentSectionWrapper>
          </SubContainer>
        </BackgroundBottom>
      </Container>
      {(msg.isOpenPost || msg.isOpenReply) && <DarkBG />}
      {/* modal below contains the form to fill a comment */}
      {msg.isOpenPost && (
        <ModalComponent
          btnName="Post"
          // handleSubmitForm={handleSubmitPost}
          comment="this is a comment"
          placeholderComment="write your post"
          placeholderPseudonym="enter your pseudonym"
        />
      )}
      {msg.isOpenReply && (
        <ModalComponent
          btnName="Reply"
          // handleSubmitForm={handleSubmitPost}
          comment="this is a comment"
          placeholderComment="enter your comment"
          placeholderPseudonym="enter your pseudonym"
        />
      )}
    </>
  );
}

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

// this component is a simple wrapper for the app, it's meant for styling
const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div
      style={{
        width: '80%',
        marginTop: '4em',
        border: '1px solid grey',
        zIndex: 1,
      }}
    >
      {children}
    </div>
  );
};

const BackgroundTop = styled.section`
  width: 100%;
  height: 100px;
  background-color: white;
`;

const BackgroundBottom = styled.section`
  background-color: #7510f7;
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
`;

const TopFrame = styled.section`
  background-color: #141c3a;
  height: 200px;
  margin: 20px auto;
  border-radius: 15px;
  z-index: 10;
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
`;

const H3 = styled.section`
  color: white;
  height: 200px;
  z-index: 10;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 3em;
  font-weight: bold;
`;

export const NewPost = styled.button`
  color: white;
  background-color: #141c3a;
  font-size: 1em;
  font-weight: bold;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #7510f7;
  border-radius: 50px;
  font-size: 3em;
  &:hover {
    color: white;
    background-color: #7510f7;
    cursor: pointer;
  }
`;

export const SubContainer = styled.div`
  position: relative;
  top: -70px;
  width: 80%;
`;

export const CommentSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0;
`;

export const DarkBG = styled.div`
  opacity: 1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 2;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default App;
