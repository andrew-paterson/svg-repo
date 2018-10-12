import Component from '@ember/component';
import layout from '../../templates/components/svg/icon-ellipsis.js';

export default Component.extend({
  layout,
  classNames: ['svg', 'ellipsis'],
  classNameBindings: ['class'],
});