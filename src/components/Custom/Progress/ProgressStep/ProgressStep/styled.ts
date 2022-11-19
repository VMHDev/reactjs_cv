import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';

export const StepViewStyled = styled.div`
  background-color: var(--color_grey_dark);
  border-radius: 1.8rem;
  padding: 0rem 0rem 0rem 1.2rem;
  height: 2.9rem;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
  cursor: pointer;
`;

export const StepTextStyled = styled.div`
  color: var(--color_white);
  font-size: ${fonts.font_size_small};
  font-weight: normal;
  line-height: ${fonts.font_line_height_small};
  margin-right: 1.2rem;
`;
