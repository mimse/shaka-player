/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


goog.provide('shaka.ui.AdCounter');

goog.require('shaka.ui.Element');
goog.require('shaka.ui.Localization');
goog.require('shaka.util.Dom');


/**
 * @extends {shaka.ui.Element}
 * @final
 * @export
 */
shaka.ui.AdCounter = class extends shaka.ui.Element {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent, controls) {
    super(parent, controls);

    /** @private {!HTMLElement} */
    this.container_ = shaka.util.Dom.createHTMLElement('div');
    this.container_.classList.add('shaka-ad-counter');
    this.parent.appendChild(this.container_);

    /** @private {!HTMLElement} */
    this.span_ = shaka.util.Dom.createHTMLElement('span');
    // FIXME: placeholder
    // TODO: localize the 'Ad' part
    this.span_.textContent = 'Ad 0:10';
    this.container_.appendChild(this.span_);
    this.updateAriaLabel_();

    this.eventManager.listen(
        this.localization, shaka.ui.Localization.LOCALE_UPDATED, () => {
          this.updateAriaLabel_();
        });

    this.eventManager.listen(
        this.localization, shaka.ui.Localization.LOCALE_CHANGED, () => {
          this.updateAriaLabel_();
        });
  }

  /**
   * @private
   */
  updateAriaLabel_() {
    // TODO
  }
};

