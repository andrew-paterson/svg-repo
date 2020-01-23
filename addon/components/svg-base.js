import Component from '@ember/component';
import layout from '../templates/components/svg-base';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: '',

  computedVectorEffect: computed('vectorEffect', function() {
    return this.get('vectorEffect') || 'non-scaling-stroke';
  }),
});
