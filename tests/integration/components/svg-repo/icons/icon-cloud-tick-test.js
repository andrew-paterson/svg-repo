import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module(
  'Integration | Component | svg-repo/icons/icon-cloud-tick',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`{{svg-repo/icons/icon-cloud-tick}}`);

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await render(hbs`
      {{#svg-repo/icons/icon-cloud-tick}}
        template block text
      {{/svg-repo/icons/icon-cloud-tick}}
    `);

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  }
);
