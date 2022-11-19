import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import colors from 'src/styles/variables/colors';
import devices from 'src/styles/variables/devices';

import { FiBarChart } from 'react-icons/fi';
import Text from 'src/components/Custom/Text';

import { STATUS_GROUP } from 'src/components/Antd/List/ListRenderItemTypeTwo';

export const TransactionListStyled = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex: 1;
  border-bottom: 1px solid var(--color_grey_light);
`;

export const InfoContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 2;
`;

export const InfoContentStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftColumnAboveStyled = styled.div`
  flex: 7;
`;

export const RightColumnAboveStyled = styled.div`
  flex: 3;
  text-align: right;
`;

export const LeftColumnBottomStyled = styled.div`
  flex: 3;
`;

export const RightColumnBottomStyled = styled.div`
  flex: 7;
  text-align: right;
`;

export const InfoDetailsStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const TitleTransStyled = styled(Text)`
  font-size: ${fonts.font_size_small};
  line-height: ${fonts.font_line_height_small};
  font-weight: ${fonts.font_weight_medium};
  padding-right: 0.5rem;
`;

export const TypeTransStyled = styled.div`
  font-size: ${fonts.font_size_small};
  line-height: ${fonts.font_line_height_small};
  font-weight: ${fonts.font_weight_normal};
  margin-left: 0.5rem;
  padding-top: 0.2rem;
`;

export const StatusStyled = styled.span.attrs((props: any) => ({
  statusGroup: props.statusGroup,
}))`
  font-size: ${fonts.font_size_small};
  color: ${colors.color_white};
  font-weight: ${fonts.font_weight_normal};

  border-radius: 0.2rem;
  margin-left: 0.5rem;
  padding: 0.3rem;

  background-color: ${(props) =>
    props.statusGroup === STATUS_GROUP.PENDING
      ? colors.color_orange
      : props.statusGroup === STATUS_GROUP.COMPLETED
      ? colors.color_green
      : colors.color_red};
`;

export const BarChartStyled = styled(FiBarChart)`
  width: 4rem;
  height: 2rem;
  align-self: center;
`;

export const CircleStyled = styled.div.attrs((props: any) => ({
  isNegative: props.isNegative,
}))`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 1.8rem;

  display: flex;
  align-items: 'center';
  justify-content: 'center';
  margin-right: 2rem;

  background-color: ${(props) =>
    props.isNegative ? colors.color_red_opacity : colors.color_green_opacity};
`;

export const CircleUpRedStyled = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 1.8rem;
  background-color: ${colors.color_red_opacity};
  display: flex;
  align-items: 'center';
  justify-content: 'center';
  margin-right: 2rem;
`;

export const TransferDateStyled = styled(Text)`
  font-size: ${fonts.font_size_small};
  line-height: ${fonts.font_line_height_small};
  font-weight: ${fonts.font_weight_small};
`;

export const AmountStyled = styled(Text).attrs((props: any) => ({
  isNegative: props.isNegative,
}))`
  font-size: ${fonts.font_size_small};
  line-height: ${fonts.font_line_height_small};
  font-weight: ${fonts.font_weight_normal};
  white-space: nowrap;

  color: ${(props) => (props.isNegative ? colors.color_red : colors.color_green)};

  @media ${devices.media_mobile} {
    font-size: ${fonts.font_size_small};
  }
`;
