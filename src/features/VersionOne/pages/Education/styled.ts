import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import { Steps } from 'antd';

import Text from 'src/components/Custom/Text';
import IconCustom from 'src/components/Custom/Icon';

export const StepsStyled = styled(Steps)`
  .ant-steps-item-title {
    width: 100%;
  }
`;

export const TitleContentStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderStyled = styled(Text)`
  font-size: ${fonts.font_size_xxxl};
`;

export const IconCustomStyled = styled(IconCustom)`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  border: 0.1rem solid var(--color_white);
  border-radius: 50%;
  margin-left: -0.2rem;
  background-color: var(--color_main);
`;
