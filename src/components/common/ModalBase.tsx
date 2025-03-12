import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const Overlay = styled.div`
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

const ModalContainer = styled.div`
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

const TitleBox = styled.div`
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

export default function ModalBase({
  isOpen,
  onClose,
  title,
  description,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <TitleBox>
          <h2>{title}</h2>
          <p>{description}</p>
        </TitleBox>
        {children}
      </ModalContainer>
    </Overlay>
  );
}
