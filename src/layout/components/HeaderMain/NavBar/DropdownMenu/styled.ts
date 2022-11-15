import styled, { css } from 'styled-components';
import colors from 'src/styles/variables/colors';
import devices from 'src/styles/variables/devices';
import Icon from 'src/components/Custom/Icon';

export const DropDownStyled = styled.div`
  position: absolute;
  top: 6rem;
  margin-left: 6rem;
  width: 24.2rem;
  transform: translateX(-45%);
  background-color: ${colors.color_white};
  border: 0.1rem solid ${colors.color_gray_light};
  border-radius: 0.8rem;
  overflow: hidden;
  z-index: 1000;
  padding: 1.3rem 1.2rem;

  @media ${devices.media_tablet} {
    top: 4rem;
  }
`;

export const PrimaryMenuEnterActiveStyled = css`
  position: absolute;
  transform: translateX(-110%);
`;
export const PrimaryMenuEnterDoneStyled = css`
  transform: translateX(0%);
  transition: all 500ms ease;
`;
export const PrimaryMenuExitStyled = css`
  position: absolute;
`;
export const PrimaryMenuExitActiveStyled = css`
  transform: translateX(-110%);
  transition: all 500ms ease;
`;

export const SecondaryMenuEnterActiveStyled = css`
  transform: translateX(110%);
`;
export const SecondaryMenuEnterDoneStyled = css`
  transform: translateX(0%);
  transition: all 500ms ease;
`;
export const SecondaryMenuExitActiveStyled = css`
  transform: translateX(110%);
  transition: all 500ms ease;
`;

export const MenuStyled = styled.div`
  width: 100%;
`;

export const RightIconStyled = styled(Icon)`
  position: absolute;
  right: 2rem;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
`;

export const BackArrowStyled = styled(Icon)`
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 0.8rem;
  cursor: pointer;
`;
