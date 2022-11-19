import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import colors from 'src/styles/variables/colors';

import { List } from 'antd';
import Text from 'src/components/Custom/Text';
import AntdImage from 'src/components/Antd/Image';

export const ListItemStyled = styled(List.Item)`
  font-size: ${fonts.font_size_small};
  font-weight: ${fonts.font_weight_medium};
  cursor: pointer;
`;

export const IconStyled = styled(AntdImage)`
  width: 3rem !important;
  height: 3rem !important;
  border-radius: 1.5rem;
  border: 0.1rem solid;
`;

export const TitleItemStyled = styled(Text)`
  font-size: ${fonts.font_size_small};
  font-weight: ${fonts.font_weight_medium};
`;

export const TextGrayStyled = styled.span`
  font-size: ${fonts.font_size_small};
  font-weight: ${fonts.font_weight_normal};
  color: var(--color_grey_light);
`;

export const TextDarkStyled = styled(Text)`
  text-align: right;
`;

export const ListItemTextStyled = styled.span`
  font-size: ${fonts.font_size_small};
  font-weight: ${fonts.font_weight_normal};
`;

export const TextStyled = styled.span.attrs((props: any) => ({
  value: props.value,
}))`
  font-size: ${fonts.font_size_small};
  font-weight: ${fonts.font_weight_normal};

  color: ${(props) =>
    props.value < 0
      ? colors.color_red
      : props.value === 0
      ? colors.color_orange
      : colors.color_green};
`;
