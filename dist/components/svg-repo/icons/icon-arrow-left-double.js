import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 34.8 50.9\"\n  class=\"single-colour icon-arrow-left-double\"\n  data-test-icon=\"icon-arrow-left-double\"\n  ...attributes\n><path\n    d=\"M31.8 0.1c0.5 0 1.1 0.1 1.6 0.4 1.4 0.9 1.8 2.7 1 4.1L21.5 25.5l12.9 20.9c0.9 1.4 0.4 3.3-1 4.1 -1.4 0.9-3.3 0.4-4.1-1L15.5 27c-0.6-1-0.6-2.2 0-3.1L29.1 1.5C29.8 0.6 30.8 0.1 31.8 0.1z\"\n  /><path\n    d=\"M16.8 0.1c0.5 0 1.1 0.1 1.6 0.4 1.4 0.9 1.8 2.7 1 4.1L6.5 25.5l12.9 20.9c0.9 1.4 0.4 3.3-1 4.1 -1.4 0.9-3.3 0.4-4.1-1L0.5 27c-0.6-1-0.6-2.2 0-3.1L14.1 1.5C14.8 0.6 15.8 0.1 16.8 0.1z\"\n  /></svg>");

class IconArrowLeftDouble extends SvgBase {}
setComponentTemplate(TEMPLATE, IconArrowLeftDouble);

export { IconArrowLeftDouble as default };
//# sourceMappingURL=icon-arrow-left-double.js.map
