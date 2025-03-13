import * as Styled from '@styles/pages/DirectivePage.styled';
import WordBlock from '@components/domain/DirectivePage/WordBlock.tsx';
import AnswerField from '@components/domain/DirectivePage/AnswerField.tsx';
import React, { useEffect, useState } from 'react';
import ImageSelectModal from '@components/domain/DirectivePage/ImageSelectModal.tsx';
import { useSelectedImageStore } from '@/store/selectImageStore.ts';
import { useAnswerStore } from '@/store/answerStore.ts';
import DragSelectedImage from '@components/domain/DirectivePage/DragSelectedImage.tsx';
import ContentWrapper from '@components/domain/DirectivePage/ContentWrapper.tsx';

const initialContentDataList = [
  { id: 1, top: '100', left: '100', text: '보라' },
  { id: 2, top: '80', left: '300', text: '물고기' },
  { id: 3, top: '80', right: '500', text: '노란' },
  { id: 4, top: '100', right: '200', text: '초록' },
  { id: 5, top: '200', left: '350', text: '빨간' },
  { id: 6, top: '120', right: '700', text: '우는' },
  { id: 7, top: '180', right: '300', text: '조개' },
  { id: 8, bottom: '180', left: '180', text: '웃는' },
  { id: 9, bottom: '200', left: '480', text: '파란' },
  { id: 10, bottom: '180', right: '480', text: '고래' },
  { id: 11, bottom: '210', right: '180', text: '불가사리' },
];

export default function DirectivePage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [draggedWord, setDraggedWord] = useState<string>(); //현재 드래그 중인 단어 저장
  const [selectedWords, setSelectedWords] = useState<string[]>([]); //선택한 단어 리스트
  const { answer, answerList } = useAnswerStore();
  const { selectedImage } = useSelectedImageStore();

  useEffect(() => {
    if (!isOpen && answerList.length === 0 && selectedWords.length > 0) {
      setSelectedWords([]);
    }
  }, [answerList]);

  const question =
    '아래의 단어로 지시어를 완성해서 방금 본 바다 생물을 만들어보세요.';

  //드래그 시작 시 실행
  const handleDragStart = (word: string) => {
    setDraggedWord(word);
  };

  // 드래그 유지 허용
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // 드랍 시 실행
  const handleDrop =
    (boxIndex: number) => (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      if (draggedWord) {
        const acceptWord = answer[boxIndex];
        if (acceptWord.includes(draggedWord)) {
          const newSelectedWords = [...selectedWords];
          newSelectedWords[boxIndex] = draggedWord;
          setSelectedWords(newSelectedWords);
          setDraggedWord('');
        }
      }
    };

  if (selectedImage) {
    return (
      <ContentWrapper
        question={question}
        selectedWords={selectedWords}
        setIsOpen={setIsOpen}
      >
        <Styled.SelectedImageContainer>
          <DragSelectedImage />
        </Styled.SelectedImageContainer>
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper
      question={question}
      selectedWords={selectedWords}
      setIsOpen={setIsOpen}
    >
      <WordBlock
        contentDataList={initialContentDataList}
        onDragStart={handleDragStart}
        selectedWords={selectedWords}
      />
      <AnswerField
        selectedWords={selectedWords}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      />
      <ImageSelectModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ContentWrapper>
  );
}
