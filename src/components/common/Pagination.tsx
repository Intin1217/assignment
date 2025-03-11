import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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
  padding: 0 20px 0 20px;
`;

const PageBox = styled.div`
  display: flex;
  gap: 5px;
`;

const Text = styled.p<Props>`
  color: ${(props) => props.color || `#6e55af`};
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
        <button
          disabled={currentPage === 1}
          onClick={() => gotoPage(Number(currentPage - 1))}
        >
          <Text color={`${currentPage === 1 ? '#D8D8E2' : ''}`}>
            <IoIosArrowBack />
            이전
          </Text>
        </button>
      </div>
      <PageBox>
        <Text>{currentPage}</Text>
        <Text color="#D8D8E2">/</Text>
        <Text color="#D8D8E2">3</Text>
      </PageBox>
      <div>
        <button
          disabled={currentPage === 3}
          onClick={() => gotoPage(Number(currentPage + 1))}
        >
          <Text color={`${currentPage === 3 ? '#D8D8E2' : ''}`}>
            다음 <IoIosArrowForward />
          </Text>
        </button>
      </div>
    </PaginationBox>
  );
}
