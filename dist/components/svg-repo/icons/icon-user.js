import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 15 16.8\"\n  class=\"single-colour icon-user\"\n  data-test-icon=\"icon-user\"\n  ...attributes\n><path\n    d=\"M10.7 1.3C11.6 2.2 12 3.3 12 4.5s-0.4 2.3-1.3 3.2S8.7 9 7.5 9 5.2 8.6 4.3 7.7 3 5.7 3 4.5s0.4-2.3 1.3-3.2S6.3 0 7.5 0 9.8 0.4 10.7 1.3z\"\n  /><path\n    d=\"M15 16.8c0-1 0-0.5 0-0.6 0-0.7 0-1.4-0.1-2s-0.2-1.2-0.4-1.8 -0.4-1.1-0.7-1.6 -0.6-0.8-1.1-1.1 -1-0.4-1.6-0.4c-1 1-2.2 1.5-3.7 1.5s-2.6-0.5-3.7-1.5c-0.6 0-1.1 0.1-1.6 0.4s-0.8 0.6-1.1 1 -0.5 0.9-0.7 1.5S0.2 13.4 0.1 14 0 15.5 0 16.1c0 0.1 0-0.4 0 0.6H15z\"\n  /></svg>");

class IconUser extends SvgBase {}
setComponentTemplate(TEMPLATE, IconUser);

export { IconUser as default };
//# sourceMappingURL=icon-user.js.map
