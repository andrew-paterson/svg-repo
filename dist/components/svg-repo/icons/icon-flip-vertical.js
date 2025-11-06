import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"1.25\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n  class=\"single-colour icon-flip-vertically\"\n  data-test-icon=\"icon-flip-vertically\"\n  ...attributes\n>\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" />\n  <path d=\"M12 3l0 18\" />\n  <path d=\"M16 7l0 10l5 0l-5 -10\" />\n  <path d=\"M8 7l0 10l-5 0l5 -10\" />\n</svg>");

class SvgRepoIconsIconFlipVerticalComponent extends Component {}
setComponentTemplate(TEMPLATE, SvgRepoIconsIconFlipVerticalComponent);

export { SvgRepoIconsIconFlipVerticalComponent as default };
//# sourceMappingURL=icon-flip-vertical.js.map
