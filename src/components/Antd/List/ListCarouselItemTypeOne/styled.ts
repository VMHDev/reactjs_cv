import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import colors from 'src/styles/variables/colors';
import devices from 'src/styles/variables/devices';

import Text from 'src/components/Custom/Text';

export const ContainerPageStyled = styled.div`
  padding-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0.2rem;
`;

export const TransactionListStyled = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex: 1;
  border-bottom: 1px solid var(--color_grey_light);
  align-items: center;
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
  text-align: left;
`;

export const RightColumnAboveStyled = styled.div`
  flex: 3;
  text-align: right;
  align-self: center;
`;

export const LeftColumnBottomStyled = styled.div`
  flex: 3;
  text-align: left;
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

  @media ${devices.media_mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const TitleTransStyled = styled(Text)`
  font-size: ${fonts.font_size_small};
  line-height: ${fonts.font_line_height_small};
  font-weight: ${fonts.font_weight_medium};
  padding-right: 0.5rem;
`;

export const TypeTransStyled = styled(Text)`
  font-size: ${fonts.font_size_small};
  line-height: ${fonts.font_line_height_small};
  font-weight: ${fonts.font_weight_normal};
  margin-left: 0.5rem;
  padding-top: 0.2rem;
`;

export const TransferDateStyled = styled(Text)`
  font-size: ${fonts.font_size_small};
  line-height: ${fonts.font_line_height_small};
  font-weight: ${fonts.font_weight_small};

  @media ${devices.media_mobile} {
    font-size: ${fonts.font_size_tiny};
    line-height: ${fonts.font_line_height_small};
    font-weight: ${fonts.font_weight_small};
  }
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

export const StatusPendingStyled = styled.span`
  font-size: ${fonts.font_size_small};
  color: ${colors.color_white};
  font-weight: ${fonts.font_weight_normal};
  background-color: ${colors.color_orange};
  border-radius: 0.2rem;
  margin-left: 0.5rem;
  padding: 0.3rem;
`;

export const BtnCancelStyled = styled(Text)`
  margin-left: 5rem;
  color: ${colors.color_green};
  align-self: center;
  cursor: pointer;

  @media ${devices.media_mobile} {
    font-size: ${fonts.font_size_small};
    margin-left: 1rem;
    color: ${colors.color_green};
    align-self: center;
    cursor: pointer;
  }
`;
