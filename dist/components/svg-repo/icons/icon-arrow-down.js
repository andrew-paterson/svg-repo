import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\'http://www.w3.org/2000/svg\'\n  viewBox=\'0 0 50.9 19.9\'\n  class=\'single-colour icon-arrow-down\'\n  data-test-icon=\'icon-arrow-down\'\n  ...attributes\n><path\n    d=\'M50.9 3c0 1-0.5 2-1.4 2.6L27 19.5c-1 0.6-2.2 0.6-3.1 0L1.4 5.6C0 4.7-0.4 2.9 0.4 1.5c0.9-1.4 2.7-1.8 4.1-1l21 12.9L46.4 0.5c1.4-0.9 3.3-0.4 4.1 1C50.8 2 50.9 2.5 50.9 3z\'\n  /></svg>");

class IconArrowDown extends SvgBase {}
setComponentTemplate(TEMPLATE, IconArrowDown);

export { IconArrowDown as default };
//# sourceMappingURL=icon-arrow-down.js.map
