import styled from 'styled-components';

export const ProgressVisualFullStyled = styled.div`
  display: flex;
  background-color: var(--color_dark);
  /* Change the value if you want different thickness */
  height: 1.8rem;
  margin: 4rem 0;
  width: 100%;
  border-radius: 1rem;
`;

export const ProgressVisualPartStyled = styled.div`
  /* Number of the seconds for complete animation */
  transition: width 1s;
  border-radius: 1rem;
`;
