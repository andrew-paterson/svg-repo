import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 34.3 34.3\"\n  class=\"single-colour icon-cross\"\n  data-test-icon=\"icon-cross\"\n  ...attributes\n><path\n    class=\"st0\"\n    d=\"M21.4 17.1l12-12c1.2-1.2 1.2-3.1 0-4.2 -1.2-1.2-3.1-1.2-4.2 0l-12 12 -12-12C4-0.3 2-0.3 0.9 0.9c-1.2 1.2-1.2 3.1 0 4.2l12 12 -12 12c-1.2 1.2-1.2 3.1 0 4.2C1.5 34 2.2 34.3 3 34.3s1.5-0.3 2.1-0.9l12-12 12 12c0.6 0.6 1.4 0.9 2.1 0.9s1.5-0.3 2.1-0.9c1.2-1.2 1.2-3.1 0-4.2L21.4 17.1z\"\n  /></svg>");

class IconCross extends SvgBase {}
setComponentTemplate(TEMPLATE, IconCross);

export { IconCross as default };
//# sourceMappingURL=icon-cross.js.map
