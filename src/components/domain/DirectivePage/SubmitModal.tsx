import ModalBase from '@components/common/ModalBase.tsx';
import { ModalPropsType } from '@/types/modalPropType.ts';
import { COLORS } from '@utils/color.ts';
import Button from '@components/common/Button.tsx';
import { useEffect, useState } from 'react';
import { useAnswerStore } from '@/store/answerStore.ts';
import { fetchImageFromAPI } from '@utils/fetchImage.ts';
import styled from 'styled-components';
import { useSelectedImageStore } from '@/store/selectImageStore.ts';
import Loading from '@assets/Loading.gif';

interface StyledProps {
  isSelected: boolean;
}

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: auto;
`;

const ImageContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isSelected'].includes(prop),
})<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid black;
  outline: ${({ isSelected }) =>
    isSelected ? `4px solid ${COLORS.MAIN}` : 'none'};
  outline-offset: -2px; // 내부에 선 추가 효과
  img {
    min-width: 256px;
    min-height: 256px;
    border-radius: 20px;
  }
`;

export default function SubmitModal({ isOpen, onClose }: ModalPropsType) {
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
      <ImageWrapper>
        {isLoading ? (
          <img src={Loading} alt="로딩 이미지" />
        ) : (
          imageUrl.map((item, index) => (
            <ImageContainer isSelected={item === tempSelectedImage} key={index}>
              <img
                onClick={() => setTempSelectedImage(item)}
                src={`data:image/png;base64,${item}`}
                alt={`이미지 ${index}`}
              />
            </ImageContainer>
          ))
        )}
      </ImageWrapper>
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
