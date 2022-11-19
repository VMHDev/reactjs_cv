import styled from 'styled-components';
import devices from 'src/styles/variables/devices';

export const BackgroundImageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  height: 100%;
  width: 100%;

  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('../../../assets/images/background/backgroundDesktop.png');

  @media ${devices.media_tablet} {
    background-image: url('../../../assets/images/background/backgroundTablet.png');
  }

  @media ${devices.media_mobile} {
    background-image: url('../../../assets/images/background/backgroundMobile.png');
  }
`;
