import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';

import Text from 'src/components/Custom/Text';

export const ContentContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
  padding: 1rem;
`;

export const TitleStyled = styled(Text)`
  font-size: ${fonts.font_size_xxxl};
`;

export const DescStyled = styled(Text)`
  font-size: ${fonts.font_size_xl};
`;
