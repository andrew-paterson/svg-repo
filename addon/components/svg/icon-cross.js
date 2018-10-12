import Component from '@ember/component';
import layout from '../../templates/components/svg/icon-cross.js';

export default Component.extend({
  layout,
  classNames: ['svg', 'cross'],
  classNameBindings: ['class'],
});