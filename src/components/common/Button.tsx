import * as Styled from '@styles/component/common/Button.styled.ts';
import { ButtonProps } from '@/types/buttonStyleType.ts';
import { COLORS } from '@utils/color.ts';

/**
 * 공용 버튼 컴포넌트
 *
 * @component
 * @param {ButtonProps} props - 버튼 스타일 및 동작을 정의하는 props
 * @param {React.ReactNode} props.children - 버튼 내부 텍스트
 * @param {string} [props.textColor=COLORS.MAIN] - 버튼 글자 색상
 * @param {string} [props.backgroundColor='none'] - 버튼 배경 색상
 * @param {string} [props.border=`1px solid ${COLORS.MAIN}`] - 버튼 테두리 스타일
 * @param {string} [props.borderRadius='10px'] - 버튼 테두리 라운드
 * @param {string} [props.width='auto'] - 버튼 너비
 * @param {string} [props.height='auto'] - 버튼 높이
 * @param {string} [props.padding='5px'] - 버튼 내부 여백
 * @param {string} [props.fontSize='16px'] - 버튼 폰트 크기
 * @param {string} [props.position='static'] - 버튼 위치 속성
 * @param {string} [props.top] - 버튼 `top` 위치값
 * @param {string} [props.bottom] - 버튼 `bottom` 위치값
 * @param {string} [props.left] - 버튼 `left` 위치값
 * @param {string} [props.right] - 버튼 `right` 위치값
 * @param {boolean} [props.useHover=false] - 호버 효과 사용 여부
 * @param {string} [props.hoverBackgroundColor] - 호버 시 변경될 배경 색상
 * @param {number} [props.hoverScale=1] - 호버 시 크기 조정 비율
 * @param {boolean} [props.useTransition=false] - 트랜지션 사용 여부
 * @param {number} [props.transitionDuration=1] - 트랜지션 지속 시간(초)
 * @param {() => void} [props.onMouseEnter] - 마우스가 버튼에 들어올 때 실행되는 함수
 */

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
