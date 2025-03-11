import styled from 'styled-components';

const ContentBox = styled.p`
  font-size: x-large;
  border: black solid 1px;
  margin: 10px;
  line-height: 2;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
`;

function App() {
  return (
    <ContentBox>
      내가 원하는 대로 인공지능이 그림을 잘 그리기 위해서는 지시어를 자세하게
      입력해야 합니다. 어떤 바다 생물인지, 그리고 그 바다 생물의 색깔과 표정은
      어떠한지 구체적으로 지시어를 입력할수록 인공지능은 내가 원하는 그림을 잘
      만들어 낼 수 있습니다.
    </ContentBox>
  );
}

export default App;
