import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 53.8 49.5\"\n  class=\"single-colour icon-home\"\n  data-test-icon=\"icon-home\"\n  ...attributes\n><polygon\n    points=\"53.8 23.5 26.9 0 0 23.5 7 23.5 7 49.5 19 49.5 19 35.5 35 35.5 35 49.5 47 49.5 47 23.5 \"\n  /></svg>");

class IconHome extends SvgBase {}
setComponentTemplate(TEMPLATE, IconHome);

export { IconHome as default };
//# sourceMappingURL=icon-home.js.map
