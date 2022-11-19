import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';

import Text from 'src/components/Custom/Text';

export const ContentStyled = styled.div`
  margin: 1.8rem 0;
`;

export const RowItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TitleStyled = styled(Text)`
  font-size: ${fonts.font_size_xxxl};
  line-height: ${fonts.font_line_height_xxl};
  font-weight: ${fonts.font_weight_medium};

  .disabled {
    opacity: 0.5;
  }
`;

export const CircleStyled = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  background-color: var(--color_black);
  color: var(--color_white);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .disabled {
    opacity: 0.5;
  }
`;
