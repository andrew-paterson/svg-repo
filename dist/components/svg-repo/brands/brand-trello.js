import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 404 404\"\n  class=\"brand trello\"\n><path\n    d=\"M354.8 0H49.2C22 0 0 22 0 49.2v305.5C0 382 22 404 49.2 404h305.5C382 404 404 382 404 354.8V49.2C404 22 382 0 354.8 0zM175.7 314.9c0 12.6-10.2 22.9-22.9 22.9H75.4c-12.6 0-22.9-10.2-22.9-22.9V78.8c0-12.6 10.2-22.9 22.9-22.9h77.5c12.6 0 22.9 10.2 22.9 22.9V314.9zM351.5 213.3c0 12.6-10.2 22.9-22.9 22.9h-77.5c-12.6 0-22.9-10.2-22.9-22.9V78.8c0-12.6 10.2-22.9 22.9-22.9h77.5c12.6 0 22.9 10.2 22.9 22.9V213.3z\"\n    fill=\"#518FE1\"\n  /></svg>");

class BrandTrello extends SvgBase {}
setComponentTemplate(TEMPLATE, BrandTrello);

export { BrandTrello as default };
//# sourceMappingURL=brand-trello.js.map
