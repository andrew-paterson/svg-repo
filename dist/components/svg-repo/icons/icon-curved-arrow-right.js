import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 35.3 31.4\"\n  class=\"single-colour icon-curved-arrow-right\"\n  data-test-icon=\"icon-curved-arrow-right\"\n  data-test-id=\"svg-icon-curved-arrow-right\"\n  ...attributes\n>\n  <path\n    d=\"M35.3 22.8l-14.9-8.6v6.5H11c-3.9 0-7-3.1-7-7V0H0v13.7c0 6.1 4.9 11 11 11h9.5v6.7L35.3 22.8z\"\n  /></svg>");

class IconCurvedArrowRight extends SvgBase {}
setComponentTemplate(TEMPLATE, IconCurvedArrowRight);

export { IconCurvedArrowRight as default };
//# sourceMappingURL=icon-curved-arrow-right.js.map
