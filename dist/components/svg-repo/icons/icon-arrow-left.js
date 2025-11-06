import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 19.9 50.9\"\n  class=\"single-colour icon-arrow-left\"\n  data-test-icon=\"icon-arrow-left\"\n  ...attributes\n><path\n    class=\"st0\"\n    d=\"M16.9 50.9c-1 0-2-0.5-2.6-1.4L0.4 27c-0.6-1-0.6-2.2 0-3.1L14.3 1.4c0.9-1.4 2.7-1.8 4.1-1 1.4 0.9 1.8 2.7 1 4.1L6.5 25.5l12.9 20.9c0.9 1.4 0.4 3.3-1 4.1C17.9 50.8 17.4 50.9 16.9 50.9z\"\n  /></svg>");

class IconArrowLeft extends SvgBase {}
setComponentTemplate(TEMPLATE, IconArrowLeft);

export { IconArrowLeft as default };
//# sourceMappingURL=icon-arrow-left.js.map
