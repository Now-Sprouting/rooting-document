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
h1 {
  font-size: 32px;
  font-weight: 700;
}
h2 {
  font-size: 20px;
  font-weight: bold;
}

body {
  font-size: 16px;
  color: ${prpos => prpos.theme === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#FFFFFF'};
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${prpos => prpos.theme === 'light' ? '#FFFFFF' : '#212121'};
}
a {
  color: ${prpos => prpos.theme === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#FFFFFF'};
}
body::-webkit-scrollbar {
    width: 12px;
}
body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: ${prpos => prpos.theme === 'light' ? '#c1c1c1' : 'rgba(51,51,51,0.8)'};
}
body::-webkit-scrollbar-track {
  border-radius: 0;
  background: #F1F1F1;
}

.sideContent::-webkit-scrollbar {
    width: 12px;
}
.sideContent::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: ${prpos => prpos.theme === 'light' ? '#c1c1c1' : 'rgba(51,51,51,0.8)'};
}
.sideContent::-webkit-scrollbar-track {
  border-radius: 0;
  background: #F1F1F1;
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