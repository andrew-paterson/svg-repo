import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 20 5\"\n  class=\"single-colour icon-dash\"\n  data-test-icon=\"icon-dash\"\n  ...attributes\n>\n  <rect width=\"20\" height=\"2\" /></svg>");

class IconDash extends SvgBase {}
setComponentTemplate(TEMPLATE, IconDash);

export { IconDash as default };
//# sourceMappingURL=icon-dash.js.map
