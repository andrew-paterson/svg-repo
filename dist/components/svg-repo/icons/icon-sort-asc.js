import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 107.9 70\"\n  class=\"single-colour icon-sort asc\"\n  data-test-icon=\"icon-sort asc\"\n  ...attributes\n><path\n    d=\"M27.5 56.2c0 0.3-0.1 0.6-0.4 0.9L14.7 69.6c-0.3 0.2-0.6 0.4-0.9 0.4 -0.3 0-0.6-0.1-0.9-0.4L0.4 57.1c-0.4-0.4-0.5-0.9-0.3-1.4C0.3 55.3 0.7 55 1.3 55h7.5V1.2c0-0.4 0.1-0.7 0.4-0.9S9.7 0 10 0h7.5c0.4 0 0.7 0.1 0.9 0.4s0.4 0.5 0.4 0.9V55h7.5c0.4 0 0.7 0.1 0.9 0.4S27.5 55.9 27.5 56.2z\"\n  /><rect x=\"31.5\" y=\"43.9\" width=\"76.4\" height=\"7.7\" /><rect\n    x=\"31.5\"\n    width=\"25.4\"\n    height=\"7.7\"\n  /><rect x=\"31.5\" y=\"21.9\" width=\"51.4\" height=\"7.7\" /></svg>");

class IconSortAsc extends SvgBase {}
setComponentTemplate(TEMPLATE, IconSortAsc);

export { IconSortAsc as default };
//# sourceMappingURL=icon-sort-asc.js.map
