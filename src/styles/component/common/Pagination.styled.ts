import styled from 'styled-components';
import { COLORS } from '@utils/color.ts';

interface PaginationStyleProps {
  color?: string;
}

export const PaginationBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 25px;
  left: 0;
  padding: 0 20px 0 20px;
`;

export const PageBox = styled.div`
  display: flex;
  gap: 5px;
`;

export const Text = styled.p<PaginationStyleProps>`
  color: ${(props) => props.color || `${COLORS.MAIN}`};
  font-weight: bold;
  font-size: large;
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 4px;
`;
