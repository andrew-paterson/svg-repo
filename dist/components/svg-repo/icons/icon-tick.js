import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 38 28\"\n  class=\"single-colour icon-tick\"\n  data-test-icon=\"icon-tick\"\n  ...attributes\n><path\n    d=\"M13 28c-0.7 0-1.3-0.2-1.9-0.7l-10-8c-1.3-1-1.5-2.9-0.5-4.2 1-1.3 2.9-1.5 4.2-0.5l7.9 6.3L32.9 0.9c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-22 22C14.5 27.7 13.8 28 13 28z\"\n  /></svg>");

class IconTick extends SvgBase {}
setComponentTemplate(TEMPLATE, IconTick);

export { IconTick as default };
//# sourceMappingURL=icon-tick.js.map
