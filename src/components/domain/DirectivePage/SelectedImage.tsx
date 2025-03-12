import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Rnd } from 'react-rnd';
import { useSelectedImageStore } from '@/store/selectImageStore.ts';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default function SelectedImage() {
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
    <Container ref={containerRef}>
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
          <div
            className="drag-handle"
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <img
              src={`data:image/png;base64,${selectedImage}`}
              alt="고래 이미지"
              style={{
                width: '100%',
                height: '100%',
                pointerEvents: 'none', // 내부 요소에서 드래그 이벤트 방해 방지
              }}
            />
          </div>
        </Rnd>
      )}
    </Container>
  );
}
