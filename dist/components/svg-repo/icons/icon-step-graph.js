import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 17.4 13\"\n  class=\"single-colour icon-step-graph\"\n  data-test-icon=\"icon-step-graph\"\n  ...attributes\n><style type=\"text/css\">\n  </style><path\n    class=\"st0\"\n    d=\"M17.4 11.9V13H0V0h1.1v12L17.4 11.9 17.4 11.9zM16.3 1.3V5c0 0.1-0.1 0.2-0.2 0.3 -0.1 0-0.2 0-0.3-0.1l-1-1L9.4 9.6C9.3 9.7 9.3 9.7 9.2 9.7c-0.1 0-0.1 0-0.2-0.1l-2-2 -3.5 3.5L1.9 9.5l5-5C7 4.4 7 4.4 7.1 4.4s0.1 0 0.2 0.1l2 2 3.9-3.9 -1-1c-0.1-0.1-0.1-0.2-0.1-0.3 0-0.1 0.1-0.2 0.3-0.2H16C16.1 1.1 16.1 1.1 16.3 1.3 16.3 1.1 16.3 1.2 16.3 1.3z\"\n  /></svg>");

class IconStepGraph extends SvgBase {}
setComponentTemplate(TEMPLATE, IconStepGraph);

export { IconStepGraph as default };
//# sourceMappingURL=icon-step-graph.js.map
