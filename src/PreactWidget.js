import { h, render } from 'preact';
import { Widget } from 'invictus-core';

export default class PreactWidget extends Widget {
  renderer() {
    return render(this.render(this.props), this.element);
  }
}
