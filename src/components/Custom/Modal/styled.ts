import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import devices from 'src/styles/variables/devices';

export const OverlayStyled = styled.div.attrs((props: any) => ({
  isVisible: props.isVisible,
}))`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  z-index: 50000;

  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
`;

export const ContainerStyled = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 20rem;
  padding: 0rem 45rem;

  @media ${devices.media_tablet} {
    padding: 0rem 20rem;
  }

  @media ${devices.media_mobile} {
    padding: 0rem 2rem;
  }
`;

export const DataStyled = styled.div`
  margin: 10% auto;
  padding: 2rem;
  background: var(--color_white);
  border-radius: 0.5rem;
  position: relative;
  transition: all 5s ease-in-out;
  text-align: center;
`;

export const TitleStyled = styled.div`
  font-size: ${fonts.font_size_large};
  font-weight: ${fonts.font_weight_large};
  color: var(--color_black);
`;
