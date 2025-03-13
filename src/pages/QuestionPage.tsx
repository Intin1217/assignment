import Whale from '@assets/Whale.svg';
import * as Styled from '@styles/pages/QuestionPage.styled.ts';

import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
} from 'react-icons/tb';
import Question from '@components/common/Question.tsx';

export default function QuestionPage() {
  const question =
    '이와 같은 바다 생물 그림을 그리려면 인공지능에게 어떤 지시어를 입력하면 좋을 지 생각해 봅시다.';

  return (
    <Question question={question}>
      <Styled.ImageWapper>
        <img src={Whale} alt="보라색 고래 이미지" />
      </Styled.ImageWapper>
      <Styled.ContentQuestionBox>
        <Styled.TextBox>
          <TbCircleNumber1Filled className="icon" />
          <p>어떤 바닷속 생물인가요?</p>
        </Styled.TextBox>
        <Styled.TextBox>
          <TbCircleNumber2Filled className="icon" /> <p>무슨 색인가요?</p>
        </Styled.TextBox>
        <Styled.TextBox>
          <TbCircleNumber3Filled className="icon" /> <p>무슨 표정인가요?</p>
        </Styled.TextBox>
      </Styled.ContentQuestionBox>
    </Question>
  );
}
