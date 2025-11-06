import SvgBase from '../../svg-base.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 512 512\"\n  class=\"brand google-calendar\"\n><style>.google-calendar .a{fill:#FFF;}</style><path\n    d=\"M455.6 10.8H56.4c-12.4 0-22.5 10.1-22.5 22.5v74.9h444.3V33.4C478.1 20.9 468.1 10.8 455.6 10.8zM148.2 55.9c-6 0-10.8-4.8-10.8-10.8s4.8-10.8 10.8-10.8c6 0 10.8 4.8 10.8 10.8S154.1 55.9 148.2 55.9zM366.7 55.9c-6 0-10.8-4.8-10.8-10.8s4.8-10.8 10.8-10.8 10.8 4.8 10.8 10.8S372.6 55.9 366.7 55.9z\"\n    fill=\"#E6E6E6\"\n  /><path\n    d=\"M511.5 113.5l-34.1 177.7 13.9 184.8c1 13.6-9.7 25.1-23.3 25.1H44c-13.6 0-24.3-11.6-23.3-25.1l13.9-184.8L0.5 113.5C-2.7 96.8 10.1 81.3 27.1 81.3h457.7C501.9 81.3 514.7 96.8 511.5 113.5z\"\n    fill=\"#3A5BBC\"\n  /><path\n    d=\"M468 501.2H44c-13.6 0-24.3-11.6-23.3-25.1l13.9-184.8h244.4 198.4l13.9 184.8C492.4 489.6 481.6 501.2 468 501.2z\"\n    fill=\"#518EF8\"\n  /><path\n    d=\"M247.4 244.9c0-34.7-29-62.9-64.7-62.9s-64.7 28.2-64.7 62.9h21.6c0-22.8 19.4-41.3 43.1-41.3s43.1 18.5 43.1 41.3 -19.4 41.3-43.1 41.3h-20.1v21.6h20.1c23.8 0 43.1 18.5 43.1 41.3 0 22.8-19.4 41.3-43.1 41.3s-43.1-18.5-43.1-41.3h-21.6c0 34.7 29 62.9 64.7 62.9s64.7-28.2 64.7-62.9c0-21.7-11.3-40.8-28.5-52.1C236.1 285.7 247.4 266.5 247.4 244.9z\"\n    class=\"a\"\n  /><polygon\n    points=\"289.3 218.7 300.4 237.2 343 211.7 343 401.2 364.6 401.2 364.6 173.7 \"\n    class=\"a\"\n  /></svg>");

class BrandGoogleCalendar extends SvgBase {}
setComponentTemplate(TEMPLATE, BrandGoogleCalendar);

export { BrandGoogleCalendar as default };
//# sourceMappingURL=brand-google-calendar.js.map
