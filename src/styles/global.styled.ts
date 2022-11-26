import { createGlobalStyle } from 'styled-components';
interface ThemProps {
  color: { [key: string]: string };
  font: { [key: string]: string };
}

const GlobalStyled = createGlobalStyle<ThemProps>`  
  html {
    --color_main: ${(props) => props.color.color_main};
    --color_green: ${(props) => props.color.color_green};
    --color_red: ${(props) => props.color.color_red};
    --color_yellow: ${(props) => props.color.color_yellow};
    --color_black: ${(props) => props.color.color_black};
    --color_dark: ${(props) => props.color.color_dark};
    --color_grey_dark: ${(props) => props.color.color_dark_mid};
    --color_grey_light: ${(props) => props.color.color_light_mid};
    --color_light: ${(props) => props.color.color_light};
    --color_white: ${(props) => props.color.color_white};

    --font_family_main: ${(props) => props.font.font_family_main};
    --font_family_second: ${(props) => props.font.font_family_second};
    --font_size_tiny: ${(props) => props.font.font_size_tiny};
    --font_size_small: ${(props) => props.font.font_size_small};
    --font_size_normal: ${(props) => props.font.font_size_normal};
    --font_size_medium: ${(props) => props.font.font_size_medium};
    --font_size_large: ${(props) => props.font.font_size_large};
    --font_size_xl: ${(props) => props.font.font_size_xl};
    --font_size_xxl: ${(props) => props.font.font_size_xxl};
    --font_size_xxxl: ${(props) => props.font.font_size_xxxl};
    --font_size_extra: ${(props) => props.font.font_size_extra};
    --font_weight_small: ${(props) => props.font.font_weight_small};
    --font_weight_normal: ${(props) => props.font.font_weight_normal};
    --font_weight_medium: ${(props) => props.font.font_weight_medium};
    --font_weight_large: ${(props) => props.font.font_weight_large};
    --font_line_height_small: ${(props) => props.font.font_line_height_small};
    --font_line_height_normal: ${(props) => props.font.font_line_height_normal};
    --font_line_height_medium: ${(props) => props.font.font_line_height_medium};
    --font_line_height_large: ${(props) => props.font.font_line_height_large};
    --font_line_height_xl: ${(props) => props.font.font_line_height_xl};
    --font_line_height_xxl: ${(props) => props.font.font_line_height_xxl};
    --font_line_height_extra: ${(props) => props.font.font_line_height_extra};
  }
`;

export default GlobalStyled;
