import Whale from '@assets/Whale.svg';
import * as Styled from '@styles/PageContentBaseStyle.styled';
import styled from 'styled-components';
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
} from 'react-icons/tb';

const ImageWapper = styled.figure`
  background-color: #d8d8e2;
  width: 500px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 60%;
`;

const QuestionBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const TextBox = styled.p`
  border: #d8d8e2 1px solid;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  font-size: large;
  display: flex;
  align-items: center;
  gap: 10px;
  .icon {
    font-size: xx-large;
    color: #6e55af;
  }
`;

export default function QuestionPage() {
  return (
    <Styled.BaseContainer>
      <Styled.TitleBox>
        <h1>
          이와 같은 바다 생물 그림을 그리려면 인공지능에게 어떤 지시어를
          입력하면 좋을 지 생각해 봅시다.
        </h1>
      </Styled.TitleBox>
      <ContentBox>
        <ImageWapper>
          <img src={Whale} alt="보라색 고래" />
        </ImageWapper>
        <QuestionBox>
          <TextBox>
            <TbCircleNumber1Filled className="icon" />
            <p>어떤 바닷속 생물인가요?</p>
          </TextBox>
          <TextBox>
            <TbCircleNumber2Filled className="icon" /> <p>무슨 색인가요?</p>
          </TextBox>
          <TextBox>
            <TbCircleNumber3Filled className="icon" /> <p>무슨 표정인가요?</p>
          </TextBox>
        </QuestionBox>
      </ContentBox>
    </Styled.BaseContainer>
  );
}
