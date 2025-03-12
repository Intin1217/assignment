import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Button from '@components/common/Button.tsx';
import { COLORS } from '@utils/color.ts';
import * as Styled from '@styles/component/common/Pagination.styled';

interface Props {
  currentPage: number;
  gotoPage: (page: number) => void;
}

// 페이지 네이션 컴포넌트
export default function Pagination() {
  const navigate = useNavigate();
  const { page } = useParams();
  const currentPage = page ? Number(page) : 1;

  const gotoPage = (pageNumber: number) => {
    navigate(`/page/${String(pageNumber)}`);
  };

  return (
    <Styled.PaginationBox>
      <PrevButton currentPage={currentPage} gotoPage={gotoPage} />
      <PageNumber currentPage={currentPage} />
      <NextButton currentPage={currentPage} gotoPage={gotoPage} />
    </Styled.PaginationBox>
  );
}

// 이전 버튼
function PrevButton({ currentPage, gotoPage }: Props) {
  return (
    <div>
      <Button
        border="none"
        disabled={currentPage === 1}
        onClick={() => gotoPage(Number(currentPage - 1))}
      >
        <Styled.Text
          color={`${currentPage === 1 ? `${COLORS.DISABLE_COLOR}` : ''}`}
        >
          <IoIosArrowBack />
          이전
        </Styled.Text>
      </Button>
    </div>
  );
}

// 페이지 넘버
function PageNumber({ currentPage }: { currentPage: number }) {
  return (
    <Styled.PageBox>
      <Styled.Text>{currentPage}</Styled.Text>
      <Styled.Text color={`${COLORS.DISABLE_COLOR}`}>/</Styled.Text>
      <Styled.Text color={`${COLORS.DISABLE_COLOR}`}>3</Styled.Text>
    </Styled.PageBox>
  );
}

// 다음 버튼
function NextButton({ currentPage, gotoPage }: Props) {
  return (
    <div>
      <Button
        border="none"
        disabled={currentPage === 3}
        onClick={() => gotoPage(Number(currentPage + 1))}
      >
        <Styled.Text
          color={`${currentPage === 3 ? `${COLORS.DISABLE_COLOR}` : ''}`}
        >
          다음 <IoIosArrowForward />
        </Styled.Text>
      </Button>
    </div>
  );
}
