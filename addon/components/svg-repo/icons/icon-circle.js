import { layout as templateLayout, tagName } from '@ember-decorators/component';
import SvgBase from 'svg-repo/components/svg-base';
import layout from '../../../templates/components/svg-repo/icons/icon-circle';

@tagName('')
@templateLayout(layout)
export default class IconCircle extends SvgBase {}
