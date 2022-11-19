import styled from 'styled-components';
import { Collapse } from 'antd';

export const ContainerStyled = styled.div`
  min-width: 20rem;
  min-height: 15.9rem;
  background-color: var(--color_black);
  border: 1px;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;

  :global {
    .ant-collapse-content > .ant-collapse-content-box {
      padding: 0rem 0rem;
    }

    .ant-collapse {
      background-color: var(--color_black);
    }
  }
`;

export const CollapseStyled = styled(Collapse)`
  border-radius: 0.7rem;
`;
