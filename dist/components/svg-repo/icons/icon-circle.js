import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 2 2\"\n  class=\"single-colour icon-ellipsis\"\n  data-test-icon=\"icon-ellipsis\"\n  ...attributes\n>\n  <circle cx=\"1\" cy=\"1\" r=\"1\" />\n</svg>");

class IconCircle extends SvgBase {}
setComponentTemplate(TEMPLATE, IconCircle);

export { IconCircle as default };
//# sourceMappingURL=icon-circle.js.map
