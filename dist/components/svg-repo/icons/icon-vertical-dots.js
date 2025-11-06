import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 56 216\"\n  class=\"single-colour icon-vertical-dots\"\n  data-test-icon=\"icon-vertical-dots\"\n  ...attributes\n><circle cx=\"28\" cy=\"28\" r=\"28\" /><circle cx=\"28\" cy=\"108\" r=\"28\" /><circle\n    cx=\"28\"\n    cy=\"188\"\n    r=\"28\"\n  /></svg>");

class IconVerticalDots extends SvgBase {}
setComponentTemplate(TEMPLATE, IconVerticalDots);

export { IconVerticalDots as default };
//# sourceMappingURL=icon-vertical-dots.js.map
