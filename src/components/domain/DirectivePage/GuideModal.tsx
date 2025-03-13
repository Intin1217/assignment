import ModalBase from '@components/common/ModalBase.tsx';
import Whale from '@assets/Whale.svg';
import Button from '@components/common/Button.tsx';
import { COLORS } from '@utils/color.ts';
import * as Styled from '@styles/component/common/ModalBase.styled';
import { ModalPropsType } from '@/types/modalPropType.ts';

export default function GuideModal({ isOpen, onClose }: ModalPropsType) {
  const modalTitle = '실습 방법';
  const modalDescription =
    '아래와 같이 고래 이미지를 만들기 위해서는 어떻게 입력해야 할까요? 각 단어를 움직여서 고래 그림을 만들 수 있도록 지시어를 완성해보세요.';

  return (
    <>
      <ModalBase
        title={modalTitle}
        description={modalDescription}
        isOpen={isOpen}
        onClose={onClose}
      >
        <Styled.GuideModalImageWrapper>
          <img src={Whale} alt="보라색 고래 이미지" />
        </Styled.GuideModalImageWrapper>
        <Button
          width="100%"
          textColor="white"
          backgroundColor={`${COLORS.MAIN}`}
          onClick={onClose}
        >
          닫기
        </Button>
      </ModalBase>
    </>
  );
}
