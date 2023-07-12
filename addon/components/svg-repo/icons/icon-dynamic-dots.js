import layout from '../../../templates/components/svg-repo/icons/icon-dynamic-dots';
import SvgBase from 'svg-repo/components/svg-base';
import { computed } from '@ember/object';

export default SvgBase.extend({
  layout,
  svgHeight: 100,
  svgWidth: 100,
  spacingfactor: 0.1, // Factor of the radius of a circle
  maxRows: 3,

  circles: computed(
    'rows',
    'svgHeight',
    'maxRows',
    'spacingfactor',
    function () {
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
  ),
});
