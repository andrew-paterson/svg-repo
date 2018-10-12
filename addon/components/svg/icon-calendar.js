import Component from '@ember/component';
import layout from '../../templates/components/svg/icon-calendar';

export default Component.extend({
  layout,
  classNames: ['svg', 'calendar'],
  classNameBindings: ['class'],
});
