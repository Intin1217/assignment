import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@routes/routes.tsx';
import { Globalstyles } from '@styles/Globalstyles.ts';
import * as Styled from '@styles/BaseStyle.styled.ts';
import TitleBox from '@components/common/TitleBox.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Globalstyles />
    <Styled.Base>
      <Styled.BackGroundContainer>
        <Styled.MainContainer>
          <TitleBox />
          <RouterProvider router={router} />
        </Styled.MainContainer>
      </Styled.BackGroundContainer>
      <Styled.Footer />
    </Styled.Base>
  </StrictMode>,
);
