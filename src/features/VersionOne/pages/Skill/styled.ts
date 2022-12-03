import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import devices from 'src/styles/variables/devices';

import Text from 'src/components/Custom/Text';
import IconCustom from 'src/components/Custom/Icon';

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

export const ItemHorizontaltyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 2rem;
  column-gap: 1rem;
`;

export const ItemVerticalStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ItemTextStyled = styled(Text)`
  font-size: ${fonts.font_size_medium};
`;

export const IconCustomStyled = styled(IconCustom)`
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  margin-left: -0.2rem;
`;
