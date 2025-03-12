import styled from 'styled-components';
import { COLORS } from '@utils/color.ts';

interface ImageSelectModalStyledProps {
  isSelected: boolean;
}

//모달 기본 베이스
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* 배경 투명도 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  min-height: 400px;
  max-height: 800px;
  max-width: 800px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    font-size: large;
  }
  p {
    line-height: 1.5;
  }
`;

// 이미지 컴포넌트
const BaseImageWrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GuideModalImageWrapper = styled(BaseImageWrapper)`
  background-color: ${COLORS.DISABLE_COLOR};
  width: 100%;
  height: 400px;
  border-radius: 20px;
`;

export const SubmitModalImageWrapper = styled(BaseImageWrapper)`
  flex-wrap: wrap;
  gap: 10px;
  width: auto;
`;

// 이미지 선택 모달
export const ImageContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isSelected'].includes(prop),
})<ImageSelectModalStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid black;
  outline: ${({ isSelected }) =>
    isSelected ? `4px solid ${COLORS.MAIN}` : 'none'};
  outline-offset: -2px;
  img {
    min-width: 256px;
    min-height: 256px;
    border-radius: 20px;
  }
`;
