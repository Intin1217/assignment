import { Navigate, useParams } from 'react-router-dom';
import QuestionPage from '@/pages/QuestionPage.tsx';
import DirectivePage from '@/pages/DirectivePage.tsx';
import Pagination from '@components/common/Pagination.tsx';
import ContentPage from '@/pages/ContentPage.tsx';

export default function Pages() {
  const { page } = useParams();
  const currentPage = page ? parseInt(page, 10) : 1;

  if (currentPage < 1 || currentPage > 3 || isNaN(currentPage)) {
    return <Navigate to="/page/1" />;
  }

  return (
    <>
      {currentPage === 1 && <ContentPage />}
      {currentPage === 2 && <QuestionPage />}
      {currentPage === 3 && <DirectivePage />}
      <Pagination />
    </>
  );
}
