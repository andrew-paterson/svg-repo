import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 10 10\"\n  class=\"line-only stroke-rounded icon-cross-stroke\"\n  data-test-icon=\"icon-cross-stroke\"\n  ...attributes\n><line\n    x1=\"2\"\n    y1=\"2\"\n    x2=\"8\"\n    y2=\"8\"\n    vector-effect=\"{{this.computedVectorEffect}}\"\n  /><line\n    x1=\"2\"\n    y1=\"8\"\n    x2=\"8\"\n    y2=\"2\"\n    vector-effect=\"{{this.computedVectorEffect}}\"\n  /></svg>\n\n<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 10 10\"\n  fill=\"none\"\n  stroke=\"{$stroke-color}\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n  stroke-width=\"#{$stroke-width}\"\n  ...attributes\n><line x1=\"2\" y1=\"2\" x2=\"8\" y2=\"8\" vector-effect=\"non-scaling-stroke\" /><line\n    x1=\"2\"\n    y1=\"8\"\n    x2=\"8\"\n    y2=\"2\"\n    vector-effect=\"non-scaling-stroke\"\n  /></svg>");

class IconCrossStroke extends SvgBase {}
setComponentTemplate(TEMPLATE, IconCrossStroke);

export { IconCrossStroke as default };
//# sourceMappingURL=icon-cross-stroke.js.map
