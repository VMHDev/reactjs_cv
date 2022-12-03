import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import devices from 'src/styles/variables/devices';

import Text from 'src/components/Custom/Text';

export const ItemLayoutStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  padding: 1rem;

  @media ${devices.media_mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const ItemContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;

export const ItemTextStyled = styled(Text)`
  font-size: ${fonts.font_size_medium};
`;
