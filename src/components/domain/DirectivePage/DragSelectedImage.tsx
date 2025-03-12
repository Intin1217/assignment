import { useEffect, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import { useSelectedImageStore } from '@/store/selectImageStore.ts';
import * as Styled from '@styles/component/domain/DirectivePage/DragSelectedImage.styled';

/**
 * 선택된 이미지 드래그 및 리사이즈하는 컴포넌트
 *
 * 사용자가 이미지를 드래그하여 화면 내에서 위치를 변경이 가능, 이미지 사이즈 리사이즈 가능
 * `selectedImage`가 있을 경우 해당 이미지를 화면에 표시
 *
 */

export default function DragSelectedImage() {
  const { selectedImage } = useSelectedImageStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [defaultPos, setDefaultPos] = useState({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);
  const defaultSize = 256; // 초기 이미지 크기

  useEffect(() => {
    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      setDefaultPos({
        x: (clientWidth - defaultSize) / 2,
        y: (clientHeight - defaultSize) / 2,
      });
      setIsInitialized(true);
    }
  }, []);

  return (
    <Styled.Container ref={containerRef}>
      {isInitialized && (
        <Rnd
          default={{
            x: defaultPos.x,
            y: defaultPos.y,
            width: defaultSize,
            height: defaultSize,
          }}
          bounds="parent"
          dragHandleClassName="drag-handle"
        >
          <Styled.ImageBox className="drag-handle">
            <Styled.SelectedImage
              src={`data:image/png;base64,${selectedImage}`}
              alt="고래 이미지"
            />
          </Styled.ImageBox>
        </Rnd>
      )}
    </Styled.Container>
  );
}
