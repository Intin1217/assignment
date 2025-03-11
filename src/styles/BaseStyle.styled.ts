import styled from 'styled-components';

export const Base = styled.div`
  background: #1e1e1e;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const BackGroundContainer = styled.div`
  background-color: #9bcaff;
  height: 100%;
  margin-left: 50px;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
  background-size: 20px 20px; /* 3x3 격자 */
  background-position: center;
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.main`
    position: relative;
  background-color: white;
  margin: 20px 50px 20px 50px;
  height: 100%;
  border: black solid 1px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
    align-items: center;
    justify-content: center;
  padding: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
`;

export const Footer = styled.div`
  background: #2e2e3c;
  width: 100%;
  height: 50px;
`;
