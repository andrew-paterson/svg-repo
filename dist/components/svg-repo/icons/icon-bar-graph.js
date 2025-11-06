import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 56 60\"\n  class=\"icon-bar-graph\"\n  data-test-icon=\"icon-bar-graph\"\n  ...attributes\n><rect class=\"left\" y=\"30\" width=\"12\" height=\"30\" /><rect\n    class=\"middle\"\n    x=\"20\"\n    width=\"14\"\n    height=\"60\"\n  /><rect class=\"right\" x=\"42\" y=\"18\" width=\"14\" height=\"42\" /></svg>");

class IconBarGraph extends SvgBase {}
setComponentTemplate(TEMPLATE, IconBarGraph);

export { IconBarGraph as default };
//# sourceMappingURL=icon-bar-graph.js.map
