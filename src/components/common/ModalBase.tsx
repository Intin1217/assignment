import * as Styled from '@styles/component/common/ModalBase.styled';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

/**
 * 모달 컴포넌트
 * @param {Object} props - 컴포넌트의 props
 * @param {boolean} props.isOpen - 모달 열려있는지 판별
 * @param {() => void} props.onClose - 모달을 닫는 함수
 * @param {string} props.title - 모달 제목
 * @param {string} props.description - 모달 설명
 * @param {React.ReactNode} props.children - 모달 내부에 렌더링될 요소들
 * @returns {JSX.Element} 모달 UI를 반환
 * **/

export default function ModalBase({
  isOpen,
  onClose,
  title,
  description,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <Styled.Overlay onClick={onClose}>
      <Styled.ModalContainer onClick={(e) => e.stopPropagation()}>
        <Styled.TitleBox>
          <h2>{title}</h2>
          <p>{description}</p>
        </Styled.TitleBox>
        {children}
      </Styled.ModalContainer>
    </Styled.Overlay>
  );
}
