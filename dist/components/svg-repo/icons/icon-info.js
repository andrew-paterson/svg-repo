import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 28 68.1\"\n  class=\"single-colour icon-info\"\n  data-test-icon=\"icon-info\"\n  ...attributes\n><path\n    class=\"st0\"\n    d=\"M13.4 18.3c5 0 9.1-4.1 9.1-9.1 0 0 0 0 0 0 0-5-4.1-9.1-9.1-9.1 -5 0-9.1 4.1-9.1 9.1S8.4 18.3 13.4 18.3z\"\n  /><polygon\n    class=\"st0\"\n    points=\"23 59.1 23 27.1 9 27.1 4 27.1 0 27.1 0 36.1 4 36.1 4 59.1 0 59.1 0 68.1 4 68.1 9 68.1 19 68.1 23 68.1 28 68.1 28 59.1 \"\n  /></svg>");

class IconInfo extends SvgBase {}
setComponentTemplate(TEMPLATE, IconInfo);

export { IconInfo as default };
//# sourceMappingURL=icon-info.js.map
