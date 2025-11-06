import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 53 58.9\"\n  class=\"icon-new-doc\"\n  data-test-icon=\"icon-new-doc\"\n  ...attributes\n><rect y=\"16.3\" width=\"34.7\" height=\"42.6\" /><circle\n    cx=\"34.7\"\n    cy=\"18.3\"\n    r=\"18.3\"\n  /><path\n    class=\"cross\"\n    d=\"M45.9 21H37.7v8.5h-6V21H23.5V15.4h8.2V7h6V15.4h8.2Z\"\n  /></svg>");

class IconNewDoc extends SvgBase {}
setComponentTemplate(TEMPLATE, IconNewDoc);

export { IconNewDoc as default };
//# sourceMappingURL=icon-new-doc.js.map
