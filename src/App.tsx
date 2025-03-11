import { Link } from 'react-router-dom';
import { ROUTE_LINK } from './routes/routes.tsx';

function App() {
  return (
    <>
      <p>과제</p>
      <Link to={ROUTE_LINK.TEST.link}>페이지 이동</Link>
    </>
  );
}

export default App;
