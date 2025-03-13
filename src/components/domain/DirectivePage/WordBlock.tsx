import * as Styled from '@styles/component/domain/DirectivePage/Word.styled.ts';
import { ContentDataListType } from '@/types/contentDataListType.ts';
import { useEffect } from 'react';
import { userAfkStore } from '@/store/userAfkStore.ts';
import { useAnswerStore } from '@/store/answerStore.ts';

interface Props {
  contentDataList: ContentDataListType[];
  onDragStart: (word: string) => void;
  selectedWords: string[];
}

export default function WordBlock({
  contentDataList,
  onDragStart,
  selectedWords,
}: Props) {
  const { isAfk, setIsAfk } = userAfkStore();
  const { answer, answerList } = useAnswerStore();

  useEffect(() => {
    setIsAfk(false);
    const timer = setTimeout(() => {
      setIsAfk(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [selectedWords]);

  const handleDragStart = (word: string) => () => {
    onDragStart(word);
  };

  return (
    <>
      {contentDataList.map((item, index) => {
        const isBlink =
          isAfk &&
          answer.some((word) => item.text.includes(word)) &&
          !answerList.includes(item.text);

        return (
          <Styled.Content
            key={index}
            {...item}
            draggable
            onDragStart={handleDragStart(item.text)}
            blink={isBlink}
          >
            {item.text}
          </Styled.Content>
        );
      })}
    </>
  );
}
