import Whale from '@assets/Whale.svg';
import styled from 'styled-components';
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
} from 'react-icons/tb';
import Question from '@components/common/Question.tsx';
import { COLORS } from '@utils/color.ts';

const ImageWapper = styled.figure`
  background-color: ${COLORS.DISABLE_COLOR};
  width: 500px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const ContentQuestionBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const TextBox = styled.p`
  border: ${COLORS.DISABLE_COLOR} 1px solid;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  font-size: large;
  display: flex;
  align-items: center;
  gap: 10px;
  .icon {
    font-size: xx-large;
    color: ${COLORS.MAIN};
  }
`;

export default function QuestionPage() {
  const question =
    '이와 같은 바다 생물 그림을 그리려면 인공지능에게 어떤 지시어를 입력하면 좋을 지 생각해 봅시다.';

  return (
    <Question question={question}>
      <ImageWapper>
        <img src={Whale} alt="보라색 고래 이미지" />
      </ImageWapper>
      <ContentQuestionBox>
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
      </ContentQuestionBox>
    </Question>
  );
}
