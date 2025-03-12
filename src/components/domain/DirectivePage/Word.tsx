import styled from 'styled-components';
import { COLORS } from '@utils/color.ts';
import { ContentDataListType } from '@/types/contentDataListType.ts';

interface Props {
  contentDataList: ContentDataListType[];
  onDragStart: (word: string) => void;
}

interface WordStyleProps {
  id: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const Content = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['top', 'left', 'right', 'bottom', 'text', 'id'].includes(prop),
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
`;

export default function Word({ contentDataList, onDragStart }: Props) {
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
        >
          {item.text}
        </Content>
      ))}
    </>
  );
}
