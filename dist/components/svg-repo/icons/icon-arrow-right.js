import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 19.9 50.9\"\n  class=\"single-colour icon-arrow-right\"\n  data-test-icon=\"icon-arrow-right\"\n  ...attributes\n><path\n    d=\"M3 50.9c-0.5 0-1.1-0.1-1.6-0.4 -1.4-0.9-1.8-2.7-1-4.1l12.9-20.9L0.4 4.6c-0.9-1.4-0.4-3.3 1-4.1 1.4-0.9 3.3-0.4 4.1 1l13.8 22.5c0.6 1 0.6 2.2 0 3.1L5.6 49.5C5 50.4 4 50.9 3 50.9z\"\n  /></svg>");

class IconArrowRight extends SvgBase {}
setComponentTemplate(TEMPLATE, IconArrowRight);

export { IconArrowRight as default };
//# sourceMappingURL=icon-arrow-right.js.map
