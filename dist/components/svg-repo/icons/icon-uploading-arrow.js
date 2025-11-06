import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 26.5 29.7\"\n  class=\"single-colour icon-uploading-arrow\"\n  data-test-icon=\"icon-uploading-arrow\"\n  ...attributes\n><polygon\n    points=\"7.4 12.1 7.4 29.7 19.1 29.7 19.1 12.1 26.5 12.1 13.2 0 0 12.1 7.4 12.1\"\n  /></svg>");

class IconUploadingArrow extends SvgBase {}
setComponentTemplate(TEMPLATE, IconUploadingArrow);

export { IconUploadingArrow as default };
//# sourceMappingURL=icon-uploading-arrow.js.map
