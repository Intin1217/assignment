import Question from '@components/common/Question.tsx';
import styled from 'styled-components';
import OceanImg from '@assets/Ocean.jpg';
import Word from '@components/domain/DirectivePage/Word.tsx';
import Answer from '@components/domain/DirectivePage/Answer.tsx';
import Button from '@components/common/Button.tsx';
import { COLORS } from '@utils/color.ts';
import React, { useEffect, useState } from 'react';
import SubmitModal from '@components/domain/DirectivePage/SubmitModal.tsx';
import { useSelectedImageStore } from '@/store/selectImageStore.ts';
import { useAnswerStore } from '@/store/answerStore.ts';

const ContentWapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImageField = styled.figure`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  img {
    width: 1620px;
    height: 560px;
    object-fit: cover;
    border-radius: 20px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: end;
`;

const SelectedImage = styled.img`
  position: absolute;
  max-width: 256px;
  max-height: 256px;
`;

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

const acceptWordOrder = [['보라'], ['웃는'], ['고래']];

export default function DirectivePage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [draggedWord, setDraggedWord] = useState<string>();
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const { answer } = useAnswerStore();
  const { selectedImage } = useSelectedImageStore();

  useEffect(() => {
    if (!isOpen && answer.length === 0 && selectedWords.length > 0) {
      setSelectedWords([]);
    }
  }, [answer]);

  const question =
    '아래의 단어로 지시어를 완성해서 방금 본 바다 생물을 만들어보세요.';

  const handleDragStart = (word: string) => {
    setDraggedWord(word);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop =
    (boxIndex: number) => (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      if (draggedWord) {
        const acceptWord = acceptWordOrder[boxIndex];
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
      <Question question={question}>
        <ContentWapper>
          <ImageField>
            <img src={OceanImg} alt="바다 내부 이미지" />
            <SelectedImage
              src={`data:image/png;base64,${selectedImage}`}
              alt="고래 이미지"
            />
          </ImageField>
          <ButtonArea selectedWords={selectedWords} setIsOpen={setIsOpen} />
        </ContentWapper>
      </Question>
    );
  }

  return (
    <Question question={question}>
      <ContentWapper>
        <ImageField>
          <img src={OceanImg} alt="바다 내부 이미지" />
          <Word
            contentDataList={initialContentDataList}
            onDragStart={handleDragStart}
          />
          <Answer
            selectedWords={selectedWords}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          />
        </ImageField>
        <ButtonArea selectedWords={selectedWords} setIsOpen={setIsOpen} />
      </ContentWapper>
      <SubmitModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
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
    <ButtonBox>
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
    </ButtonBox>
  );
}
