import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 85.1 85.1\"\n  class=\"single-colour icon-tick-circle\"\n  data-test-icon=\"icon-tick-circle\"\n  ...attributes\n><circle cx=\"42.5\" cy=\"42.5\" r=\"42.5\" /><path\n    class=\"foreground-graphic\"\n    d=\"M34.7 60.9c-0.9 0-1.7-0.3-2.5-0.9L19.1 49.5c-1.7-1.3-2-3.8-0.6-5.5s3.8-2 5.5-0.6l10.3 8.3 26.5-26.2c1.6-1.6 4.1-1.6 5.5 0 1.6 1.6 1.6 4.1 0 5.5L37.5 59.7C36.7 60.5 35.7 60.9 34.7 60.9z\"\n  /></svg>");

class IconTickCircle extends SvgBase {}
setComponentTemplate(TEMPLATE, IconTickCircle);

export { IconTickCircle as default };
//# sourceMappingURL=icon-tick-circle.js.map
