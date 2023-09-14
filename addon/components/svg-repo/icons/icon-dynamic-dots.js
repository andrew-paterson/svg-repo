import { layout as templateLayout } from '@ember-decorators/component';
import { computed } from '@ember/object';
import SvgBase from 'svg-repo/components/svg-base';

export default class IconDynamicDots extends SvgBase {
  svgHeight = 100;
  svgWidth = 100;
  spacingfactor = 0.1; // Factor of the radius of a circle
  maxRows = 3;

  @computed('rows', 'svgHeight', 'maxRows', 'spacingfactor')
  get circles() {
    const circleDiameter =
      this.svgHeight /
      (this.maxRows + this.spacingfactor * (this.maxRows - 1));
    const circles = [];
    this.rows.forEach((row, rowIndex) => {
      for (var colIndex = 0; colIndex < row; colIndex++) {
        const circle = { radius: Math.floor(circleDiameter / 2) };
        circle.cx = Math.floor(
          circleDiameter / 2 +
            (circleDiameter * colIndex +
              colIndex * this.spacingfactor * circleDiameter)
        );
        circle.cy = Math.floor(
          circleDiameter / 2 +
            (circleDiameter * rowIndex +
              rowIndex * this.spacingfactor * circleDiameter)
        );
        circle.spacing = Math.floor(this.spacingfactor * circleDiameter);
        circles.push(circle);
      }
    });
    return circles;
  }
}
