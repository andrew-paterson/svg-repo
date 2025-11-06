import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 252 62\"\n  class=\"single-colour icon-ellipsis\"\n  data-test-icon=\"icon-ellipsis\"\n  ...attributes\n>\n  <circle cx=\"31\" cy=\"31\" r=\"31\" class=\"first\" />\n  <circle cx=\"126\" cy=\"31\" r=\"31\" class=\"second\" />\n  <circle cx=\"221\" cy=\"31\" r=\"31\" class=\"third\" />\n</svg>");

class IconEllipsis extends SvgBase {}
setComponentTemplate(TEMPLATE, IconEllipsis);

export { IconEllipsis as default };
//# sourceMappingURL=icon-ellipsis.js.map
