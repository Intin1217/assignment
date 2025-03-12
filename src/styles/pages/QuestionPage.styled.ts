import styled from 'styled-components';
import { COLORS } from '@utils/color.ts';

export const ImageWapper = styled.figure`
  background-color: ${COLORS.DISABLE_COLOR};
  width: 500px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const ContentQuestionBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const TextBox = styled.p`
  border: ${COLORS.DISABLE_COLOR} 1px solid;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  font-size: large;
  display: flex;
  align-items: center;
  gap: 10px;
  .icon {
    font-size: xx-large;
    color: ${COLORS.MAIN};
  }
`;
