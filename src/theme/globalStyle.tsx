import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
/*
*
* Import fonts Lato from Google Fonts
*
*/
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');


.p0 {
  padding: 0px !important;
}

.m0 {
  margin: 0px !important;
}

.h-40{
  height: 40px;
}

.min-h-320 {
  min-height: 320px;
}

.max-h-520 {
  max-height: 520px;
}

.h-12-icon {
  height: 1.2em;
}

`;

export default globalStyle;
