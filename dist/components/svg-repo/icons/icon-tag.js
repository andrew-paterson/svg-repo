import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 55.8 55.8\"\n  class=\"\"\n  data-test-icon=\"icon-tag\"\n  ...attributes\n><path\n    d=\"M0 5.2c0-1.4 0.5-2.7 1.5-3.7S3.8 0 5.2 0h22.2c1.5 0 2.7 0.5 3.7 1.5l23.1 23.1c1 1 1.5 2.3 1.5 3.7s-0.5 2.7-1.5 3.7L32 54.2c-1 1-2.2 1.5-3.7 1.5s-2.7-0.5-3.7-1.5L1.5 31.1C0.5 30.1 0 28.9 0 27.4V5.2zM8.5 8.5c-1 1-1.5 2.3-1.5 3.7s0.5 2.7 1.5 3.7 2.3 1.5 3.7 1.5 2.7-0.5 3.7-1.5 1.5-2.2 1.5-3.7 -0.5-2.7-1.5-3.7 -2.2-1.5-3.7-1.5S9.5 7.5 8.5 8.5z\"\n  /></svg>");

class IconTag extends SvgBase {}
setComponentTemplate(TEMPLATE, IconTag);

export { IconTag as default };
//# sourceMappingURL=icon-tag.js.map
