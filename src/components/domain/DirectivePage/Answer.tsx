import styled from 'styled-components';
import React, { useEffect } from 'react';
import { COLORS } from '@utils/color.ts';
import { useAnswerStore } from '@/store/answerStore.ts';

interface AnswerProps {
  selectedWords: string[];
  onDrop: (index: number) => (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
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

const AnswerDragBox = styled.p`
  background-color: white;
  width: 100px;
  padding: 20px;
  border-radius: 10px;
  color: ${COLORS.MAIN};
  text-align: center;
`;

export default function Answer({
  selectedWords,
  onDrop,
  onDragOver,
}: AnswerProps) {
  const { setAnswer } = useAnswerStore();

  useEffect(() => {
    setAnswer(selectedWords);
  }, [selectedWords]);

  return (
    <>
      <AnswerField />
      <AnswerBox>
        <AnswerDragBox onDrop={onDrop(0)} onDragOver={onDragOver}>
          {selectedWords[0] || ''}
        </AnswerDragBox>
        <p>색의</p>
        <AnswerDragBox onDrop={onDrop(1)} onDragOver={onDragOver}>
          {selectedWords[1] || ''}
        </AnswerDragBox>
        <p>표정을 하고 있는</p>
        <AnswerDragBox onDrop={onDrop(2)} onDragOver={onDragOver}>
          {selectedWords[2] || ''}
        </AnswerDragBox>
        <p>그림을 그려줘</p>
      </AnswerBox>
    </>
  );
}
