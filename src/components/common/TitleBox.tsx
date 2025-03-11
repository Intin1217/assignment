import styled from 'styled-components';

const Background = styled.div`
  background-color: #a899cf;
  position: absolute;
  top: 0;
  left: 60px;
  border-radius: 0 0 20px 20px;
  width: 400px;
  padding: 10px 0 10px 0;
`;

const Text = styled.h1`
  font-size: x-large;
  color: white;
  border-top: white dashed 2px;
  padding: 20px 0 10px 0;
  width: 100%;
  text-align: center;
`;

export default function TitleBox() {
  return (
    <Background>
      <Text>인공지능으로 바닷속 생물 꾸미기</Text>
    </Background>
  );
}
