import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 34.8 50.9\"\n  class=\"single-colour icon-arrow-right-double\"\n  data-test-icon=\"icon-arrow-right-double\"\n  ...attributes\n><path\n    d=\"M3.1 50.9c-0.5 0-1.1-0.1-1.6-0.4 -1.4-0.9-1.8-2.7-1-4.1l12.9-20.9L0.5 4.6c-0.9-1.4-0.4-3.3 1-4.1 1.4-0.9 3.3-0.4 4.1 1L19.4 24c0.6 1 0.6 2.2 0 3.1L5.7 49.5C5.1 50.4 4.1 50.9 3.1 50.9z\"\n  /><path\n    d=\"M18.1 50.9c-0.5 0-1.1-0.1-1.6-0.4 -1.4-0.9-1.8-2.7-1-4.1l12.9-20.9L15.5 4.6c-0.9-1.4-0.4-3.3 1-4.1 1.4-0.9 3.3-0.4 4.1 1L34.4 24c0.6 1 0.6 2.2 0 3.1L20.7 49.5C20.1 50.4 19.1 50.9 18.1 50.9z\"\n  /></svg>");

class IconArrowRightDouble extends SvgBase {}
setComponentTemplate(TEMPLATE, IconArrowRightDouble);

export { IconArrowRightDouble as default };
//# sourceMappingURL=icon-arrow-right-double.js.map
