import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

export default class SvgBase extends Component {
  @tracked vectorEffect;
  get computedVectorEffect() {
    return this.args.vectorEffect || 'non-scaling-stroke';
  }
}
