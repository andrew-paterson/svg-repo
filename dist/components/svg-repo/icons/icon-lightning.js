import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 52 104.2\"\n  class=\"single-colour icon-link\"\n  data-test-icon=\"icon-link\"\n  ...attributes\n><polygon\n    points=\"16.7 0 0 51.5 19.1 52.1 2.7 104.2 52 36.5 29.8 36.1 50 0 \"\n  /></svg>");

class IconLightning extends SvgBase {}
setComponentTemplate(TEMPLATE, IconLightning);

export { IconLightning as default };
//# sourceMappingURL=icon-lightning.js.map
