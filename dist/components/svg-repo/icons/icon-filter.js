import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 47.2 47.1\"\n  class=\"single-colour icon-filter\"\n  data-test-icon=\"icon-filter\"\n  ...attributes\n><path\n    d=\"M47 1.3c0.4 0.9 0.2 1.7-0.5 2.3L30 20.2V45c0 0.9-0.4 1.6-1.3 2 -0.3 0.1-0.6 0.2-0.8 0.2 -0.6 0-1.1-0.2-1.5-0.6l-8.6-8.6c-0.4-0.4-0.6-0.9-0.6-1.5V20.2L0.7 3.6C0 3-0.2 2.2 0.2 1.3c0.4-0.9 1-1.3 2-1.3H45C46 0 46.6 0.4 47 1.3z\"\n  /></svg>");

class IconFilter extends SvgBase {}
setComponentTemplate(TEMPLATE, IconFilter);

export { IconFilter as default };
//# sourceMappingURL=icon-filter.js.map
