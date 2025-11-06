import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { g, i } from 'decorator-transforms/runtime';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{yield}}");

class SvgBase extends Component {
  static {
    g(this.prototype, "vectorEffect", [tracked]);
  }
  #vectorEffect = (i(this, "vectorEffect"), void 0);
  get computedVectorEffect() {
    return this.args.vectorEffect || 'non-scaling-stroke';
  }
}
setComponentTemplate(TEMPLATE, SvgBase);

export { SvgBase as default };
//# sourceMappingURL=svg-base.js.map
