import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 50 18\"\n  class=\"line-only stroke-rounded icon-arrow-down-stroke\"\n  data-test-icon=\"icon-arrow-down-stroke\"\n  ...attributes\n><polyline\n    points=\"6 2 25 16 44 2\"\n    vector-effect=\"{{this.computedVectorEffect}}\"\n  /></svg>");

class IconArrowDownStroke extends SvgBase {}
setComponentTemplate(TEMPLATE, IconArrowDownStroke);

export { IconArrowDownStroke as default };
//# sourceMappingURL=icon-arrow-down-stroke.js.map
