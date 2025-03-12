import styled from 'styled-components';
import { COLORS } from '@utils/color.ts';

interface WordStyleProps {
  id: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  blink?: boolean;
}

export const Content = styled.div.withConfig({
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
