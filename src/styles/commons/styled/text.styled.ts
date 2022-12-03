import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';

import Text from 'src/components/Custom/Text';

export const TitleStyled = styled(Text)`
  font-size: ${fonts.font_size_xxxl};
  font-weight: ${fonts.font_weight_medium};
`;

export const DescStyled = styled(Text)`
  font-size: ${fonts.font_size_xl};
`;
