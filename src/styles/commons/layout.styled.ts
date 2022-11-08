import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';

export const LayoutHorizontalStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;
`;

export const ConatainerPageError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    width: 80rem;
    max-width: 80%;
  }
  .errorMessage {
    font-size: ${fonts.font_size_medium};
    padding-bottom: 1rem;
  }
  .button {
    width: 20rem;
  }
  .link {
    width: 20rem;
  }
`;
