import SvgBase from 'svg-repo/components/svg-base';
import { tracked } from '@glimmer/tracking';
export default class IconDynamicDots extends SvgBase {
  @tracked svgHeight = this.args.svgHeight || 100;
  @tracked svgWidth = this.args.svgWidth || 100;
  @tracked spacingfactor = this.args.spacingfactor || 0.1; // Factor of the radius of a circle
  @tracked maxRows = this.args.maxRows || 3;

  get circles() {
    const circleDiameter =
      this.svgHeight / (this.maxRows + this.spacingfactor * (this.maxRows - 1));
    const circles = [];
    this.args.rows.forEach((row, rowIndex) => {
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
