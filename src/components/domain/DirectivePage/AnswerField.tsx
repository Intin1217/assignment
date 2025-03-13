import React, { useEffect } from 'react';
import { useAnswerStore } from '@/store/answerStore.ts';
import { userAfkStore } from '@/store/userAfkStore.ts';
import * as Styled from '@styles/component/domain/DirectivePage/Answer.styled.ts';

interface AnswerProps {
  selectedWords: string[];
  onDrop: (index: number) => (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
}

/**
 * 정답 영역 컴포넌트
 *  @param {Object} props - 컴포넌트의 속성
 *  @param {string[]} props.selectedWords - 사용자가 선택한 단어 목록
 *  @param {(index: number) => (e: React.DragEvent<HTMLDivElement>) => void} props.onDrop - 드롭 이벤트 핸들러
 *  @param {(e: React.DragEvent<HTMLDivElement>) => void} props.onDragOver - 드래그 오버 이벤트 핸들러
 * **/

export default function AnswerField({
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
      <Styled.AnswerField />
      <Styled.AnswerBox>
        <Styled.AnswerDragBox
          onDrop={onDrop(0)}
          onDragOver={onDragOver}
          blink={isAfk && selectedWords[0] !== answer[0]}
        >
          {selectedWords[0] || ''}
        </Styled.AnswerDragBox>
        <p>색의</p>
        <Styled.AnswerDragBox
          onDrop={onDrop(1)}
          onDragOver={onDragOver}
          blink={isAfk && selectedWords[1] !== answer[1]}
        >
          {selectedWords[1] || ''}
        </Styled.AnswerDragBox>
        <p>표정을 하고 있는</p>
        <Styled.AnswerDragBox
          onDrop={onDrop(2)}
          onDragOver={onDragOver}
          blink={isAfk && selectedWords[2] !== answer[2]}
        >
          {selectedWords[2] || ''}
        </Styled.AnswerDragBox>
        <p>그림을 그려줘</p>
      </Styled.AnswerBox>
    </>
  );
}
