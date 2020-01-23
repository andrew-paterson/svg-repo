import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | svg/icons/icon-time-per-sample', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{svg/icons/icon-time-per-sample class='test'}}`);
    assert.ok(this.element.querySelector('svg'), 'The SVG renders');
    assert.ok(this.element.querySelector('svg').classList.contains('test'), 'Dynamic class is added correctly.');

  });
});
