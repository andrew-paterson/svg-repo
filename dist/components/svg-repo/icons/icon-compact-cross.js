import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 31.5 31.5\"\n  class=\"single-colour icon-compact-cross\"\n  data-test-icon=\"icon-compact-cross\"\n  ...attributes\n>\n  <path\n    class=\"st0\"\n    d=\"M30.6 26.4L20 15.8 30.6 5.1c1.1-1.2 1.1-2.9 0-4.1 -1.1-1.2-3-1.3-4.2-0.1L15.8 11.5 5.1 0.9C4-0.2 2.2-0.2 1 0.9c-1.2 1.1-1.3 3-0.1 4.2l10.6 10.6L0.9 26.4c-1.1 1.2-1.1 2.9 0 4.1 1.1 1.2 3 1.3 4.2 0.1L15.8 20l10.6 10.6c1.2 1.2 3.1 1.2 4.2 0 0.1 0 0.2 0 0.2-0.1C32 29.3 31.8 27.5 30.6 26.4z\"\n  />\n</svg>");

class IconCompactCross extends SvgBase {}
setComponentTemplate(TEMPLATE, IconCompactCross);

export { IconCompactCross as default };
//# sourceMappingURL=icon-compact-cross.js.map
