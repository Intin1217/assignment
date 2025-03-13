import styled from 'styled-components';
import { COLORS } from '@utils/color.ts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 20px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: x-large;

  .fish {
    font-size: x-large;
    :hover {
      color: ${COLORS.MAIN};
    }

    animation: pulse 2s infinite ease-in-out;

    @keyframes pulse {
      50% {
        transform: scale(1.2);
      }
    }
  }
`;

export const ContentBox = styled.p`
  font-size: x-large;
  border: ${COLORS.MAIN} solid 1px;
  border-left: ${COLORS.MAIN} solid 6px;
  border-radius: 20px;
  padding: 20px;
  line-height: 2;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
`;
