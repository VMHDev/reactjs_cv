import styled from 'styled-components';
import colors from 'src/styles/variables/colors';

export const NumberFormatStyled = styled.div`
  .numberInput {
    width: 100%;
    height: 4.8rem;
    border-radius: 0.4rem;
    border: 0.1rem solid ${colors.color_gray_light};
    padding-left: 1rem;
    font-size: 1.6rem;
    box-shadow: none;
    outline: none;

    &:focus {
      border: 0.1rem solid ${colors.color_green};
    }
    &:disabled {
      cursor: not-allowed;
    }

    ::placeholder {
      color: ${colors.color_gray_light};
    }
  }

  .error {
    width: 100%;
    height: 4.8rem;
    border-radius: 0.4rem;
    border: 0.1rem solid ${colors.color_red};
    padding-left: 1rem;
    font-size: 1.6rem;
    box-shadow: none;
    outline: none;

    ::placeholder {
      color: ${colors.color_gray_light};
    }
  }
`;
