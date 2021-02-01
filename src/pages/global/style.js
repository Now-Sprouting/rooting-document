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

/* 侧边栏滚动条 */
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
/* 代码补充 */
code {
    font-size: 14px;
    color: ${prpos => prpos.theme === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#FFFFFF'};
    display: inline-block;
    padding: 0 3px;
    margin: 0 6px;
    line-height: 1.4;
    border-radius: 2px;
    background-color: rgba(255, 229, 100, 0.2);
}
code.language-jsx {
  background-color: #272C34
}
pre {
  margin: 1rem 0 2rem 0;
}


/* 字体图标 */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
/* 第三方库代码修改 */
.MuiSnackbarContent-root {
    background-color: #4caf50!important;
    min-width:115px!important;
    justify-content: center!important;
}
`


// 代码块主题
// export default {
//   "hljs": {
//     "display": "block",
//     "overflowX": "auto",
//     "padding": "0.5em",
//     "background": "#272C34",
//     "fontWeight": "normal",
//     "color": "#e3dfff",
//     "border-radius": "10px"
//   },
//   "hljs-title": {
//     "color": "#fad000",
//     "fontWeight": "normal"
//   },
//   "hljs-name": {
//     "color": "#a1feff",
//     "fontWeight": "normal"
//   },
//   "hljs-tag": {
//     "color": "#ffffff"
//   },
//   "hljs-attr": {
//     "color": "#f8d000",
//     "fontStyle": "italic"
//   },
//   "hljs-built_in": {
//     "color": "#fb9e00"
//   },
//   "hljs-selector-tag": {
//     "color": "#fb9e00",
//     "fontWeight": "normal"
//   },
//   "hljs-section": {
//     "color": "#fb9e00"
//   },
//   "hljs-keyword": {
//     "color": "#fb9e00",
//     "fontWeight": "normal"
//   },
//   "hljs-subst": {
//     "color": "#e3dfff"
//   },
//   "hljs-string": {
//     "color": "#e6db74"
//   },
//   "hljs-attribute": {
//     "color": "#a6e22e"
//   },
//   "hljs-symbol": {
//     "color": "#4cd213"
//   },
//   "hljs-bullet": {
//     "color": "#4cd213"
//   },
//   "hljs-addition": {
//     "color": "#4cd213"
//   },
//   "hljs-code": {
//     "color": "#4cd213"
//   },
//   "hljs-regexp": {
//     "color": "#4cd213"
//   },
//   "hljs-selector-class": {
//     "color": "#4cd213"
//   },
//   "hljs-selector-attr": {
//     "color": "#4cd213"
//   },
//   "hljs-selector-pseudo": {
//     "color": "#4cd213"
//   },
//   "hljs-template-tag": {
//     "color": "#4cd213"
//   },
//   "hljs-quote": {
//     "color": "#4cd213"
//   },
//   "hljs-deletion": {
//     "color": "#4cd213"
//   },
//   "hljs-meta": {
//     "color": "#fb9e00"
//   },
//   "hljs-meta-string": {
//     "color": "#fb9e00"
//   },
//   "hljs-comment": {
//     "color": "#ac65ff"
//   },
//   "hljs-literal": {
//     "fontWeight": "normal",
//     "color": "#fa658d"
//   },
//   "hljs-strong": {
//     "fontWeight": "bold"
//   },
//   "hljs-number": {
//     "color": "#fa658d"
//   },
//   "hljs-emphasis": {
//     "fontStyle": "italic"
//   }
// };