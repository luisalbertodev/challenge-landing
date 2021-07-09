import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
/*
*
* Import fonts Lato from Google Fonts
*
*/
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

body {
  font-family: 'Lato',  sans-serif ;
}

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

.wrapper_layout {
  width:100%;
  padding-right: 0px;
  padding-left: 0px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 576px) {
  .wrapper_layout {
    max-width: 1110px;
    padding-left: 16px;
    padding-right: 16px;
  }
}


// Overwrite Styles from components Material ui
.MuiButton-root{
  border-radius: 20px !important;
}
`;

export default globalStyle;
