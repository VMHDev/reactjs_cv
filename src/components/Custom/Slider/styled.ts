import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';

import Text from 'src/components/Custom/Text';

export const HeaderStyled = styled(Text)`
  font-size: ${fonts.font_size_xxl};
  line-height: ${fonts.font_line_height_medium};
  font-weight: ${fonts.font_weight_medium};
  margin-top: 3.6rem;
  margin-bottom: 1.5rem;
`;

export const SliderStyled = styled.div`
  .sliderScroll {
    overflow: auto;
    float: auto;
    white-space: nowrap;
    vertical-align: top;
    padding-bottom: 2rem;
  }
  .sliderWrap {
    display: flex;
    flex-wrap: wrap;
  }
`;
