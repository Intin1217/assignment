import * as Styled from '@styles/component/common/Question.styled.ts';
import QMark from '@assets/Q Mark.svg';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Button from '@components/common/Button.tsx';
import GuideModal from '@components/domain/DirectivePage/GuideModal.tsx';

interface Props {
  question: string;
  children: React.ReactNode;
}

/**
 * Question 컴포넌트
 *
 * @component
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.question - 표시할 질문 텍스트
 * @param {React.ReactNode} props.children - 질문 아래에 렌더링될 콘텐츠
 */

export default function Question({ question, children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { page } = useParams();

  return (
    <Styled.BaseContainer>
      <Styled.QuestionBox>
        <img src={QMark} alt="QMark" />
        <h1>{question}</h1>
        {page === '3' && (
          <Button
            position="absolute"
            right="0"
            padding="10px"
            useHover={true}
            hoverScale={1.1}
            useTransition={true}
            transitionDuration={0.2}
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setIsOpen(true)}
          >
            실습 방법 확인하기
          </Button>
        )}
        <GuideModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </Styled.QuestionBox>
      <Styled.MainContentBox>{children}</Styled.MainContentBox>
    </Styled.BaseContainer>
  );
}
