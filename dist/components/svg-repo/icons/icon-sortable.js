import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 32.86 69.95\"\n  class=\"icon-sortable\"\n  data-test-icon=\"icon-sortable\"\n  ...attributes\n><polygon points=\"16.43 0 32.86 28.46 0 28.46 16.43 0\" /><polygon\n    points=\"16.43 69.95 32.86 41.49 0 41.49 16.43 69.95\"\n  /></svg>");

class IconSortable extends SvgBase {}
setComponentTemplate(TEMPLATE, IconSortable);

export { IconSortable as default };
//# sourceMappingURL=icon-sortable.js.map
