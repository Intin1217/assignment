import styled from 'styled-components';
import { COLORS } from '@utils/color.ts';

interface AnswerDragBoxStyleProps {
  blink?: boolean;
}

export const AnswerField = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 50px;
  background-color: black;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  opacity: 70%;
`;

export const AnswerBox = styled.div`
  position: absolute;
  bottom: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: large;
    padding: 20px;
  }
`;

export const AnswerDragBox = styled.p.withConfig({
  shouldForwardProp: (prop) => !['blink'].includes(prop),
})<AnswerDragBoxStyleProps>`
  background-color: white;
  width: 100px;
  padding: 20px;
  border-radius: 10px;
  color: ${COLORS.MAIN};
  text-align: center;

  ${(props) => props.blink && `animation: blink-effect 1s step-end infinite`};

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
`;
