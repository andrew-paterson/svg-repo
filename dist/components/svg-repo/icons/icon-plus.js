import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 252 252\"\n  class=\"single-colour icon-plus\"\n  data-test-icon=\"icon-plus\"\n  ...attributes\n><rect x=\"118\" width=\"16\" height=\"252\" /><rect\n    x=\"118\"\n    transform=\"matrix(4.479268e-11 -1 1 4.479268e-11 -5.285543e-9 252)\"\n    width=\"16\"\n    height=\"252\"\n  /></svg>");

class IconPlus extends SvgBase {}
setComponentTemplate(TEMPLATE, IconPlus);

export { IconPlus as default };
//# sourceMappingURL=icon-plus.js.map
