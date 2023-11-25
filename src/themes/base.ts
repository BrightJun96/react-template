import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Pretendard';
      font-weight: 900;
      font-display: swap;
      src: local('Pretendard Black'), url('../fonts/Pretendard-Black.woff2') format('woff2'), url('../fonts/Pretendard-Black.woff') format('woff');
  }
  
  @font-face {
      font-family: 'Pretendard';
      font-weight: 800;
      font-display: swap;
      src: local('Pretendard ExtraBold'), url('../fonts/Pretendard-ExtraBold.woff2') format('woff2'), url('../fonts/Pretendard-ExtraBold.woff') format('woff');
  }
  
  @font-face {
      font-family: 'Pretendard';
      font-weight: 700;
      font-display: swap;
      src: local('Pretendard Bold'), url('../fonts/Pretendard-Bold.woff2') format('woff2'), url('../fonts/Pretendard-Bold.woff') format('woff');
  }
  
  @font-face {
      font-family: 'Pretendard';
      font-weight: 600;
      font-display: swap;
      src: local('Pretendard SemiBold'), url('../fonts/Pretendard-SemiBold.woff2') format('woff2'), url('../fonts/Pretendard-SemiBold.woff') format('woff');
  }
  
  @font-face {
      font-family: 'Pretendard';
      font-weight: 500;
      font-display: swap;
      src: local('Pretendard Medium'), url('../fonts/Pretendard-Medium.woff2') format('woff2'), url('../fonts/Pretendard-Medium.woff') format('woff');
  }
  
  @font-face {
      font-family: 'Pretendard';
      font-weight: 400;
      font-display: swap;
      src: local('Pretendard Regular'), url('../fonts/Pretendard-Regular.woff2') format('woff2'), url('../fonts/Pretendard-Regular.woff') format('woff');
  }
  
  @font-face {
      font-family: 'Pretendard';
      font-weight: 300;
      font-display: swap;
      src: local('Pretendard Light'), url('../fonts/Pretendard-Light.woff2') format('woff2'), url('../fonts/Pretendard-Light.woff') format('woff');
  }
  
  @font-face {
      font-family: 'Pretendard';
      font-weight: 200;
      font-display: swap;
      src: local('Pretendard ExtraLight'), url('../fonts/Pretendard-ExtraLight.woff2') format('woff2'), url('../fonts/Pretendard-ExtraLight.woff') format('woff');
  }
  
  @font-face {
      font-family: 'Pretendard';
      font-weight: 100;
      font-display: swap;
      src: local('Pretendard Thin'), url('../fonts/Pretendard-Thin.woff2') format('woff2'), url('../fonts/Pretendard-Thin.woff') format('woff');
  }

  // RESET CSS
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      font-family: 'Pretendard';
      font-weight:400;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  // CUSTOM RESET CSS
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
  html, body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      font: 1rem/1.5 'Noto Sans KR', sans-serif;
      font-weight: 400;
      color: #212121;
      letter-spacing: -0.5px;
  }
  a {
      text-decoration: none;
      color: #212121;
      cursor: pointer;
  }
  button {
      background-color: transparent;
      cursor: pointer;
      border: none;
  }
  input,
  textarea {
      border: 0;
  }
  button,
  input,
  textarea,
  input::placeholder,
  textarea::placeholder {
      font-family: 'Noto Sans KR', sans-serif;
  }
  input:focus,
  textarea:focus,
  input:active,
  textarea:active {
      outline: none;
  }
  strong {
      font-weight: 700;
  }
  ul, ol, li {
      list-style: none;
  }

`;

export default GlobalStyle;
