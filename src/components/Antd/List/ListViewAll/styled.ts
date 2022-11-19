import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import devices from 'src/styles/variables/devices';

import ButtonPrimary from 'src/components/Antd/Button/ButtonPrimary';
import Text from 'src/components/Custom/Text';

export const ContainerStyled = styled.div`
  .container {
    height: calc(100vh - 25rem);
    overflow: auto;
    padding: 0.5rem;

    @media ${devices.media_mobile} {
      height: calc(100vh - 20rem);
    }

    ::-webkit-scrollbar {
      width: 0em;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 1px transparent;
      padding-left: 1rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: transparent;
      outline: none;
    }

    :global {
      .ant-empty {
        color: var(--color_white);
      }
      .ant-list-empty-text {
        display: none;
      }
    }
  }
`;

export const TitleStyled = styled(Text)`
  font-size: ${fonts.font_size_xl};
  font-weight: ${fonts.font_weight_medium};
`;

export const BtnViewAllStyled = styled(ButtonPrimary)`
  margin-top: 2rem;
`;
