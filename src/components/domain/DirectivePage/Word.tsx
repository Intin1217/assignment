import styled from 'styled-components';
import { COLORS } from '@utils/color.ts';
import { ContentDataListType } from '@/types/contentDataListType.ts';
import { useEffect } from 'react';
import { userAfkStore } from '@/store/userAfkStore.ts';
import { useAnswerStore } from '@/store/answerStore.ts';

interface Props {
  contentDataList: ContentDataListType[];
  onDragStart: (word: string) => void;
  selectedWords: string[];
}

interface WordStyleProps {
  id: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  blink?: boolean;
}

const Content = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['top', 'left', 'right', 'bottom', 'text', 'id', 'blink'].includes(prop),
})<WordStyleProps>`
  cursor: pointer;
  background-color: white;
  color: ${COLORS.MAIN};
  position: absolute;
  padding: 20px;
  border-radius: 20px;
  top: ${(props) => props.top || null}px;
  left: ${(props) => props.left || null}px;
  right: ${(props) => props.right || null}px;
  bottom: ${(props) => props.bottom || null}px;

  ${(props) => props.blink && `animation: blink-effect 1s step-end infinite`};

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
`;

export default function Word({
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
      {contentDataList.map((item, index) => (
        <Content
          key={index}
          {...item}
          draggable
          onDragStart={handleDragStart(item.text)}
          blink={
            isAfk &&
            answer.some((word) => item.text.includes(word)) &&
            !answerList.includes(item.text)
          }
        >
          {item.text}
        </Content>
      ))}
    </>
  );
}
