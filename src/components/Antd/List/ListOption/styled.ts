import styled from 'styled-components';
import colors from 'src/styles/variables/colors';

export const OptionStyled = styled.div`
  margin-bottom: 1.5rem;
`;

export const ActiveStyled = styled.div`
  .active {
    border-color: ${colors.color_main} !important;
    color: ${colors.color_main} !important;
  }
`;
