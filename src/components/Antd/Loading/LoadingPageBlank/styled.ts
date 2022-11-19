import styled from 'styled-components';
import colors from 'src/styles/variables/colors';

export const SpinnerOverlayStyled = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainerStyled = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 0.3rem solid ${colors.color_gray_one};
  border-radius: 50%;
  border-top-color: ${colors.color_gray_two};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
