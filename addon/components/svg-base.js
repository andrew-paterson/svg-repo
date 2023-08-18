import { layout as templateLayout, tagName } from '@ember-decorators/component';
import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/svg-base';

@templateLayout(layout)
@tagName('')
export default class SvgBase extends Component {
  @computed('vectorEffect')
  get computedVectorEffect() {
    return this.vectorEffect || 'non-scaling-stroke';
  }
}
