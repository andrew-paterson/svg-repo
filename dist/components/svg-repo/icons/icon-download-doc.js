import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 34 40\"\n  class=\"single-colour icon-download-doc\"\n  data-test-icon=\"icon-download-doc\"\n  ...attributes\n><polygon points=\"21 12 13 12 13 24 8 24 17 32.2 26 24 21 24 \" /><path\n    d=\"M32 8l-6-6 -2-2H0v40h34V10L32 8zM32 38H2V2h22v8h8V38z\"\n  /></svg>");

class IconDownloadDoc extends SvgBase {}
setComponentTemplate(TEMPLATE, IconDownloadDoc);

export { IconDownloadDoc as default };
//# sourceMappingURL=icon-download-doc.js.map
