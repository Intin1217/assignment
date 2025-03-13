import styled from 'styled-components';

export const BaseContainer = styled.div`
  width: 95%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
//페이지 제목
export const QuestionBox = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  gap: 20px;
  h1 {
    font-size: 40px;
  }
`;
//메인 콘텐츠 영역
export const MainContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 100%;
`;
