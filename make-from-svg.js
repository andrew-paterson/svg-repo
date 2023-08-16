const path = require('path');
const fs = require('fs');
const sourcePath = process.argv[2];
const subDir = process.argv[3] || 'icons';
const subDirSingular = subDir.slice(0, -1);
const chalk = require('chalk');

if (!fs.existsSync(sourcePath)) {
  console.log(chalk.red(`${sourcePath} does not exist.`));
}
const componentName = `${subDirSingular}-${path.parse(sourcePath).name}`;
const templateFileAdditions = ` style={{style}} class="{{class}} single-colour ${componentName}" data-test-icon="${componentName}"`;
const sourceFileContents = fs.readFileSync(sourcePath, 'utf8');
const sourceAttrs = sourceFileContents.match(/<svg(.*?)>(.*)/);
const templateFileContents =
  `<svg ${sourceAttrs[1]} ${templateFileAdditions}>${sourceAttrs[2]}`.replace(
    /\s+/g,
    ' '
  );
const files = [
  {
    outPath: `./app/components/svg-repo/${subDir}/${componentName}.js`,
    contents: `export { default } from 'svg-repo/components/svg-repo/${subDir}/${componentName}';`,
  },
  {
    outPath: `./addon/components/svg-repo/${subDir}/${componentName}.js`,
    contents: `import SvgBase from 'svg-repo/components/svg-base';
import layout from '../../../templates/components/svg-repo/${subDir}/${componentName}';

export default SvgBase.extend({
  layout,
});`,
  },
  {
    outPath: `./addon/templates/components/svg-repo/${subDir}/${componentName}.hbs`,
    contents: templateFileContents,
  },
];

files.forEach((file) => {
  fs.writeFileSync(file.outPath, file.contents);
  console.log(chalk.green(`${file.outPath} was created.`));
});
