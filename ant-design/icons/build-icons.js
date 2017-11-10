const { icons } = require('./index.js');
const fs = require('fs');
const path = require('path');

// CSS
const now = (new Date()).toLocaleString();
const FONT_PATH = path.relative(__dirname, './fonts/');
const FILE_PATH = `${FONT_PATH}/photon-icons`;

output = `
/* Automated build - ${now} */

@font-face {
  font-family: "photon-icons";
  src:  url('${FILE_PATH}.eot');
  src:  url('${FILE_PATH}.eot#iefix') format('embedded-opentype'),
    url('${FILE_PATH}.ttf') format('truetype'),
    url('${FILE_PATH}.woff') format('woff'),
    url('${FILE_PATH}.svg#photon-icons') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="photon-icon-"]::before, [class*="photon-icon-"]::before {
  font-family: "photon-icons" !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

${
  Object.keys(icons).map(iconName =>
    `.photon-icon-${iconName}::before { content: "${icons[iconName]}"; }`
  ).join('\n')
}
`

try {
  fs.writeFileSync('./index.css', output);
} catch(err) {
  throw err;
}

console.log("CSS file was saved!");

