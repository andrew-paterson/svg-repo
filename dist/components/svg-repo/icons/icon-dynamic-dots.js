import SvgBase from '../../svg-base.js';
import { tracked } from '@glimmer/tracking';
import { precompileTemplate } from '@ember/template-compilation';
import { g, i } from 'decorator-transforms/runtime';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 {{this.svgWidth}} {{this.svgHeight}}\"\n  class=\"single-colour icon-three dots\"\n  data-test-icon=\"icon-ellipsis\"\n  ...attributes\n>\n  {{#each this.circles as |circleEl|}}\n    <circle cx=\"{{circleEl.cx}}\" cy=\"{{circleEl.cy}}\" r=\"{{circleEl.radius}}\" />\n  {{/each}}\n</svg>");

class IconDynamicDots extends SvgBase {
  static {
    g(this.prototype, "svgHeight", [tracked], function () {
      return this.args.svgHeight || 100;
    });
  }
  #svgHeight = (i(this, "svgHeight"), void 0);
  static {
    g(this.prototype, "svgWidth", [tracked], function () {
      return this.args.svgWidth || 100;
    });
  }
  #svgWidth = (i(this, "svgWidth"), void 0);
  static {
    g(this.prototype, "spacingfactor", [tracked], function () {
      return this.args.spacingfactor || 0.1;
    });
  }
  #spacingfactor = (i(this, "spacingfactor"), void 0);
  static {
    g(this.prototype, "maxRows", [tracked], function () {
      return this.args.maxRows || 3;
    });
  }
  #maxRows = (i(this, "maxRows"), void 0); // Factor of the radius of a circle
  get circles() {
    const circleDiameter = this.svgHeight / (this.maxRows + this.spacingfactor * (this.maxRows - 1));
    const circles = [];
    this.args.rows.forEach((row, rowIndex) => {
      for (var colIndex = 0; colIndex < row; colIndex++) {
        const circle = {
          radius: Math.floor(circleDiameter / 2)
        };
        circle.cx = Math.floor(circleDiameter / 2 + (circleDiameter * colIndex + colIndex * this.spacingfactor * circleDiameter));
        circle.cy = Math.floor(circleDiameter / 2 + (circleDiameter * rowIndex + rowIndex * this.spacingfactor * circleDiameter));
        circle.spacing = Math.floor(this.spacingfactor * circleDiameter);
        circles.push(circle);
      }
    });
    return circles;
  }
}
setComponentTemplate(TEMPLATE, IconDynamicDots);

export { IconDynamicDots as default };
//# sourceMappingURL=icon-dynamic-dots.js.map
