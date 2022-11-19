import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import colors from 'src/styles/variables/colors';
import devices from 'src/styles/variables/devices';

import { Image } from 'antd';
import Text from 'src/components/Custom/Text';

export const ContainerStyled = styled.div`
  width: calc((100vw - 20rem - 10rem) / 4);
  display: inline-block;
  vertical-align: top;
  border-style: solid;
  background-color: var(--color_white);
  border-color: ${colors.color_white_mid};
  border-radius: 3%;
  margin-right: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;

  @media ${devices.media_tablet} {
    width: 31.4rem;
  }

  @media ${devices.media_mobile} {
    width: 30.4rem;
  }

  @media only screen and (min-width: 1440px) {
    width: 27.4rem;
  }
`;

export const ContentStyled = styled.div`
  display: flex;
  height: 9.5rem;
  justify-content: center;
  align-items: center;
`;

export const TitleStyled = styled(Text)`
  font-size: ${fonts.font_size_large};
  line-height: ${fonts.font_line_height_large};
  font-weight: ${fonts.font_weight_medium};
  color: var(--color_black);
  vertical-align: top;
  white-space: normal;
  display: inline-block;
  width: 80%;
  padding-left: 1rem;
`;

export const IconStyled = styled(Image)`
  width: 3.4rem;
  height: 3.4rem;
  vertical-align: top;
  margin-right: 1rem;
  display: inline-block;
`;
