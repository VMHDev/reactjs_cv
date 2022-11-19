import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import devices from 'src/styles/variables/devices';

import Text from 'src/components/Custom/Text';

export const ProgessHeaderStyled = styled.div`
  min-height: 12.6rem;
  @media ${devices.media_mobile} {
    min-height: 15.6rem;
    padding-top: 3rem;
  }
  @media ${devices.media_tablet} {
    padding-top: 4rem;
  }
  @media ${devices.media_desktop} {
    padding-top: 4.5rem;
  }
`;

export const ContentHeaderMobileStyled = styled.div`
  justify-content: space-between;
  @media ${devices.media_tablet} {
    display: none !important;
  }
  @media ${devices.media_desktop} {
    display: none !important;
  }
`;

export const ContentHeaderTitleStyled = styled.div`
  z-index: 2;
  position: relative;
  justify-content: space-between;
  @media ${devices.media_mobile} {
    padding-top: 3rem;
  }
`;

export const ViewTitleStyled = styled(Text)`
  font-size: ${fonts.font_size_extra};
  font-weight: ${fonts.font_weight_large};
  line-height: ${fonts.font_line_height_extra};
`;

export const StepViewTabletStyled = styled.div`
  justify-content: flex-end;
  @media ${devices.media_mobile} {
    display: none;
  }
  @media ${devices.media_tablet} {
    display: flex;
  }
  @media ${devices.media_desktop} {
    display: flex;
  }
`;
