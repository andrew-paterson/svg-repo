import Component from '@ember/component';
import layout from '../../templates/components/svg/icon-clock.js';

export default Component.extend({
  layout,
  classNames: ['svg', 'clock'],
  classNameBindings: ['class'],
});
