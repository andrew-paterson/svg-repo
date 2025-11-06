import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"1.25\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n  class=\"single-colour icon-flip-horizontally\"\n  data-test-icon=\"icon-flip-horizontally\"\n  ...attributes\n>\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" />\n  <path d=\"M3 12l18 0\" />\n  <path d=\"M7 16l10 0l-10 5l0 -5\" />\n  <path d=\"M7 8l10 0l-10 -5l0 5\" />\n</svg>");

class IconFlipHorizontal extends SvgBase {}
setComponentTemplate(TEMPLATE, IconFlipHorizontal);

export { IconFlipHorizontal as default };
//# sourceMappingURL=icon-flip-horizontal.js.map
