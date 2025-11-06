import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 512 512\"\n  class=\"brand google-drive\"\n><polygon\n    points=\"512 336.8 155.4 336.8 80.8 480.6 431.2 480.6 \"\n    fill=\"#3089F3\"\n  /><polygon\n    points=\"170.7 31.4 0 318.9 80.8 480.6 245.2 164.4 \"\n    fill=\"#00A76A\"\n  /><polygon\n    points=\"332.4 31.4 170.7 31.4 341.3 336.8 512 336.8 \"\n    fill=\"#FDD446\"\n  /></svg>");

class BrandGoogleDrive extends SvgBase {}
setComponentTemplate(TEMPLATE, BrandGoogleDrive);

export { BrandGoogleDrive as default };
//# sourceMappingURL=brand-google-drive.js.map
