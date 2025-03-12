import ModalBase from '@components/common/ModalBase.tsx';
import { ModalPropsType } from '@/types/modalPropType.ts';
import { COLORS } from '@utils/color.ts';
import Button from '@components/common/Button.tsx';
import { useEffect, useState } from 'react';
import { useAnswerStore } from '@/store/answerStore.ts';
import { fetchImageFromAPI } from '@utils/fetchImage.ts';
import { useSelectedImageStore } from '@/store/selectImageStore.ts';
import Loading from '@assets/Loading.gif';
import * as Styled from '@styles/component/common/ModalBase.styled';

/**
 * ImageSelectModal 컴포넌트
 *
 * 제출 후 이미지를 선택하는 컴포넌트
 *
 * @component
 * @param {Object} props - 컴포넌트 속성
 * @param {boolean} props.isOpen - 모달 열려있는지 판별
 * @param {() => void} props.onClose - 모달을 닫는 함수
 */

export default function ImageSelectModal({ isOpen, onClose }: ModalPropsType) {
  const [imageUrl, setImageUrl] = useState<string[] | null>([]);
  const [tempSelectedImage, setTempSelectedImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { setSelectedImage } = useSelectedImageStore();
  const { answerList } = useAnswerStore();

  const modalDescription = '네 개 이미지 중 하나를 고르세요.';

  useEffect(() => {
    const fetchData = async () => {
      if (isOpen && answerList.length === 3) {
        setIsLoading(true);
        const res = await fetchImageFromAPI(answerList);

        if (!res) return;
        setImageUrl(res.predictions);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [isOpen]);

  const handleCompleteSelectedImage = () => {
    setSelectedImage(tempSelectedImage);
  };

  if (!imageUrl) {
    return;
  }

  return (
    <ModalBase
      title=""
      description={modalDescription}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Styled.SubmitModalImageWrapper>
        {isLoading ? (
          <img src={Loading} alt="로딩 이미지" />
        ) : (
          imageUrl.map((item, index) => (
            <Styled.ImageContainer
              isSelected={item === tempSelectedImage}
              key={index}
            >
              <img
                onClick={() => setTempSelectedImage(item)}
                src={`data:image/png;base64,${item}`}
                alt={`이미지 ${index}`}
              />
            </Styled.ImageContainer>
          ))
        )}
      </Styled.SubmitModalImageWrapper>
      <Button
        width="100%"
        textColor="white"
        backgroundColor={`${COLORS.MAIN}`}
        onClick={() => {
          handleCompleteSelectedImage();
          onClose();
        }}
      >
        선택 완료
      </Button>
    </ModalBase>
  );
}
