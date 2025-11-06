import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 512 512\"\n  class=\"single-colour icon-folder\"\n  data-test-icon=\"icon-folder\"\n  ...attributes\n><path\n    d=\"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z\"\n  /></svg>");

class IconFolder extends SvgBase {}
setComponentTemplate(TEMPLATE, IconFolder);

export { IconFolder as default };
//# sourceMappingURL=icon-folder.js.map
