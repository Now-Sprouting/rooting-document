import { createGlobalStyle } from 'styled-components';

export const GlobalWrapper = createGlobalStyle`
body,
html,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
dl,
dt,
dd,
header,
menu,
section,
p,
input,
td,
th,
ins {
  padding: 0;
  margin: 0;
}

body {
  font-size: 16px;
  color: ${prpos => prpos.theme === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#FFFFFF'};
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${prpos => prpos.theme === 'light' ? '#FFFFFF' : '#212121'};
}
/* 字体图标 */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
`