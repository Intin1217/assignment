import * as Styled from '@styles/pages/ContentPage';
import { FaFish } from 'react-icons/fa';

export default function ContentPage() {
  return (
    <Styled.Container>
      <Styled.Title>
        <FaFish className="fish" />
        <p>인공지능 그림 그리기 가이드</p>
      </Styled.Title>
      <Styled.ContentBox>
        내가 원하는 대로 인공지능이 그림을 잘 그리기 위해서는 지시어를 자세하게
        입력해야 합니다. 어떤 바다 생물인지, 그리고 그 바다 생물의 색깔과 표정은
        어떠한지 구체적으로 지시어를 입력할수록 인공지능은 내가 원하는 그림을 잘
        만들어 낼 수 있습니다.
      </Styled.ContentBox>
    </Styled.Container>
  );
}
