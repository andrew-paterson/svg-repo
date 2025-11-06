import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 60.8 42.9\"\n  class=\"single-colour icon-collapse-menu\"\n  data-test-icon=\"icon-collapse-menu\"\n  ...attributes\n>\n  <polygon points=\"31 0 16.4 0 0 21.5 16.4 42.9 31 42.9 14.6 21.5 31 0\" />\n  <polygon\n    points=\"60.8 0 46.3 0 29.8 21.5 46.3 42.9 60.8 42.9 44.4 21.5 60.8 0\"\n  /></svg>");

class IconCollapseMenu extends SvgBase {}
setComponentTemplate(TEMPLATE, IconCollapseMenu);

export { IconCollapseMenu as default };
//# sourceMappingURL=icon-collapse-menu.js.map
