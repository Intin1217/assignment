import { Outlet, useParams } from 'react-router-dom';
import QuestionPage from '@/pages/QuestionPage.tsx';
import DirectivePage from '@/pages/DirectivePage.tsx';

export default function Pages() {
  const { page } = useParams();

  if (page === '2') {
    return (
      <>
        <QuestionPage />
        <Outlet />
      </>
    );
  }

  if (page === '3') {
    return (
      <>
        <DirectivePage />
        <Outlet />
      </>
    );
  }
}
