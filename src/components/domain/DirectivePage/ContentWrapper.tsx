import * as Styled from '@styles/pages/DirectivePage.styled.ts';
import OceanImg from '@assets/Ocean.jpg';
import Question from '@components/common/Question.tsx';
import React from 'react';
import { useSelectedImageStore } from '@/store/selectImageStore.ts';
import { useAnswerStore } from '@/store/answerStore.ts';
import Button from '@components/common/Button.tsx';
import { COLORS } from '@utils/color.ts';

interface Props {
  children: React.ReactNode;
  question: string;
  selectedWords: string[];
  setIsOpen: (isOpen: boolean) => void;
}

export default function ContentWrapper({
  question,
  selectedWords,
  setIsOpen,
  children,
}: Props) {
  return (
    <Question question={question}>
      <Styled.ContentWrapper>
        <Styled.ImageField>
          <Styled.ImageWrapper>
            <Styled.BackgroundImage src={OceanImg} alt="바다 내부 이미지" />
          </Styled.ImageWrapper>
          {children}
        </Styled.ImageField>
        <ButtonArea selectedWords={selectedWords} setIsOpen={setIsOpen} />
      </Styled.ContentWrapper>
    </Question>
  );
}

function ButtonArea({
  selectedWords,
  setIsOpen,
}: {
  selectedWords: string[];
  setIsOpen: (isOpen: boolean) => void;
}) {
  const { selectedImage, resetSelectedImage } = useSelectedImageStore();
  const { resetAnswer } = useAnswerStore();

  return (
    <Styled.ButtonBox>
      {selectedImage && (
        <Button
          disabled={!selectedImage}
          padding="8px 20px 8px 20px"
          onClick={() => {
            resetAnswer();
            resetSelectedImage();
          }}
        >
          다시하기
        </Button>
      )}
      {!selectedImage && (
        <Button
          disabled={selectedWords.length < 3}
          backgroundColor={
            selectedWords.length < 3 ? COLORS.DISABLE_COLOR : COLORS.MAIN
          }
          border={selectedWords.length < 3 ? 'none' : ''}
          textColor="white"
          padding="8px 20px 8px 20px"
          onClick={() => setIsOpen(true)}
        >
          제출
        </Button>
      )}
    </Styled.ButtonBox>
  );
}
