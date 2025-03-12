import * as Styled from '@styles/ButtonStyle.styled.ts';
import { ButtonProps } from '@/types/buttonStyleType.ts';
import { COLORS } from '@utils/color.ts';

const Button = ({
  children,
  textColor = COLORS.MAIN,
  backgroundColor = 'none',
  border = `1px solid ${COLORS.MAIN}`,
  borderRadius = '10px',
  width = 'auto',
  height = 'auto',
  padding = '5px',
  fontSize = '16px',
  position = 'static',
  top,
  bottom,
  left,
  right,
  useHover = false,
  hoverBackgroundColor,
  hoverScale = 1,
  useTransition = false,
  transitionDuration = 1,
  onMouseEnter,
  ...rest
}: ButtonProps) => {
  return (
    <Styled.Button
      textColor={textColor}
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      width={width}
      height={height}
      padding={padding}
      fontSize={fontSize}
      position={position}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      useHover={useHover}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverScale={hoverScale}
      useTransition={useTransition}
      transitionDuration={transitionDuration}
      onMouseEnter={onMouseEnter}
      {...rest}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
