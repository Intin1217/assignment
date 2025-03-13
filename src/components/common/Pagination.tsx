import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Button from '@components/common/Button.tsx';
import { COLORS } from '@utils/color.ts';
import * as Styled from '@styles/component/common/Pagination.styled';

interface Props {
  currentPage: number;
  gotoPage: (page: number) => void;
}

const TOTAL_PAGES = 3;

// 페이지 네이션 컴포넌트
export default function Pagination() {
  const navigate = useNavigate();
  const { page } = useParams();
  const currentPage = page ? Number(page) : 1;

  const gotoPage = (pageNumber: number) => {
    navigate(`/page/${pageNumber}`);
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
  const isDisabled = currentPage === 1;
  return (
    <div>
      <Button
        border="none"
        disabled={isDisabled}
        onClick={() => gotoPage(currentPage - 1)}
      >
        <Styled.Text color={`${isDisabled ? `${COLORS.DISABLE_COLOR}` : ''}`}>
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
      <Styled.Text color={COLORS.DISABLE_COLOR}>/</Styled.Text>
      <Styled.Text color={COLORS.DISABLE_COLOR}>{TOTAL_PAGES}</Styled.Text>
    </Styled.PageBox>
  );
}

// 다음 버튼
function NextButton({ currentPage, gotoPage }: Props) {
  const isDisabled = currentPage === TOTAL_PAGES;
  return (
    <div>
      <Button
        border="none"
        disabled={isDisabled}
        onClick={() => gotoPage(currentPage + 1)}
      >
        <Styled.Text color={`${isDisabled ? `${COLORS.DISABLE_COLOR}` : ''}`}>
          다음 <IoIosArrowForward />
        </Styled.Text>
      </Button>
    </div>
  );
}
