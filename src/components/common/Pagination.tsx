import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Button from '@components/common/Button.tsx';
import { COLORS } from '@utils/color.ts';

interface Props {
  color?: string;
}

const PaginationBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 25px;
  left: 0;
  padding: 0 20px 0 20px;
`;

const PageBox = styled.div`
  display: flex;
  gap: 5px;
`;

const Text = styled.p<Props>`
  color: ${(props) => props.color || `${COLORS.MAIN}`};
  font-weight: bold;
  font-size: large;
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 4px;
`;

export default function Pagination() {
  const navigate = useNavigate();
  const { page } = useParams();
  const currentPage = page ? Number(page) : 1;

  const gotoPage = (pageNumber: number) => {
    navigate(`/page/${String(pageNumber)}`);
  };

  return (
    <PaginationBox>
      <div>
        <Button
          border="none"
          disabled={currentPage === 1}
          onClick={() => gotoPage(Number(currentPage - 1))}
        >
          <Text color={`${currentPage === 1 ? `${COLORS.DISABLE_COLOR}` : ''}`}>
            <IoIosArrowBack />
            이전
          </Text>
        </Button>
      </div>
      <PageBox>
        <Text>{currentPage}</Text>
        <Text color={`${COLORS.DISABLE_COLOR}`}>/</Text>
        <Text color={`${COLORS.DISABLE_COLOR}`}>3</Text>
      </PageBox>
      <div>
        <Button
          border="none"
          disabled={currentPage === 3}
          onClick={() => gotoPage(Number(currentPage + 1))}
        >
          <Text color={`${currentPage === 3 ? `${COLORS.DISABLE_COLOR}` : ''}`}>
            다음 <IoIosArrowForward />
          </Text>
        </Button>
      </div>
    </PaginationBox>
  );
}
