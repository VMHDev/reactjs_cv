import styled from 'styled-components';
import devices from 'src/styles/variables/devices';

export const MainContainerStyled = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media ${devices.media_mobile} {
    padding-top: unset;
  }
`;

export const HeaderContainerStyled = styled.div`
  margin-top: 2%;
  padding: initial;
`;

export const BackIconStyled = styled.div`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  cursor: pointer;
`;

export default { MainContainerStyled, HeaderContainerStyled, BackIconStyled };
