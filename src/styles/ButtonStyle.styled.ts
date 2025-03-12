import styled from 'styled-components';
import { ButtonProps } from '@/types/buttonStyleType.ts';

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'top',
      'bottom',
      'left',
      'right',
      'textColor',
      'backgroundColor',
      'border',
      'borderRadius',
      'width',
      'height',
      'padding',
      'fontSize',
      'position',
      'useTransition',
      'transitionDuration',
      'useHover',
      'hoverBackgroundColor',
      'hoverScale',
    ].includes(prop),
})<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ textColor }) => textColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};

  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: default;
  }

  ${({ useTransition, transitionDuration }) =>
    useTransition &&
    `
      transition: transform ${transitionDuration}s ease,
                  background-color ${transitionDuration}s ease;
    `}

  ${({ useHover, hoverBackgroundColor, hoverScale }) =>
    useHover &&
    `
      &:hover {
        background-color: ${hoverBackgroundColor};
        transform: scale(${hoverScale});
      }
    `}
`;
