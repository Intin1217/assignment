import styled from 'styled-components';
import React, { useEffect } from 'react';
import { COLORS } from '@utils/color.ts';
import { useAnswerStore } from '@/store/answerStore.ts';
import { userAfkStore } from '@/store/userAfkStore.ts';

interface AnswerProps {
  selectedWords: string[];
  onDrop: (index: number) => (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
}

interface AnswerDragBoxStyleProps {
  blink?: boolean;
}

const AnswerField = styled.div`
  position: absolute;
  bottom: 0;
  width: 1620px;
  padding: 50px;
  background-color: black;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  opacity: 70%;
`;

const AnswerBox = styled.div`
  position: absolute;
  bottom: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: large;
    padding: 20px;
  }
`;

const AnswerDragBox = styled.p.withConfig({
  shouldForwardProp: (prop) => !['blink'].includes(prop),
})<AnswerDragBoxStyleProps>`
  background-color: white;
  width: 100px;
  padding: 20px;
  border-radius: 10px;
  color: ${COLORS.MAIN};
  text-align: center;

  ${(props) => props.blink && `animation: blink-effect 1s step-end infinite`};

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
`;

export default function Answer({
  selectedWords,
  onDrop,
  onDragOver,
}: AnswerProps) {
  const { isAfk, setIsAfk } = userAfkStore();
  const { answer, setAnswer } = useAnswerStore();

  useEffect(() => {
    setIsAfk(false);
    const timer = setTimeout(() => {
      setIsAfk(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [selectedWords]);

  useEffect(() => {
    setAnswer(selectedWords);
  }, [selectedWords]);

  return (
    <>
      <AnswerField />
      <AnswerBox>
        <AnswerDragBox
          onDrop={onDrop(0)}
          onDragOver={onDragOver}
          blink={isAfk && selectedWords[0] !== answer[0]}
        >
          {selectedWords[0] || ''}
        </AnswerDragBox>
        <p>색의</p>
        <AnswerDragBox
          onDrop={onDrop(1)}
          onDragOver={onDragOver}
          blink={isAfk && selectedWords[1] !== answer[1]}
        >
          {selectedWords[1] || ''}
        </AnswerDragBox>
        <p>표정을 하고 있는</p>
        <AnswerDragBox
          onDrop={onDrop(2)}
          onDragOver={onDragOver}
          blink={isAfk && selectedWords[2] !== answer[2]}
        >
          {selectedWords[2] || ''}
        </AnswerDragBox>
        <p>그림을 그려줘</p>
      </AnswerBox>
    </>
  );
}
