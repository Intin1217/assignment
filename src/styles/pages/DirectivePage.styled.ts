import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const ImageField = styled.figure`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 560px;
  object-fit: cover;
  border-radius: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: end;
`;

export const SelectedImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
