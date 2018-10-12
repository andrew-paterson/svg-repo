import Component from '@ember/component';
import layout from '../../templates/components/svg/icon-cog';

export default Component.extend({
  layout,
  classNames: ['svg', 'cog'],
  classNameBindings: ['class'],
});