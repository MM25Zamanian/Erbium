import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators/custom-element.js';
import {property} from 'lit/decorators/property.js';
import {query} from 'lit/decorators/query.js';
import {state} from 'lit/decorators/state.js';

import {getSvgContent} from './requests';
import {getUrl} from './utilities';

import type {iconsaxCategories, iconsaxNames} from './utilities';
import type {TemplateResult, PropertyValues} from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'er-iconsax': erbiumIconSax;
  }
}

/**
 * A small and super fast package for iconsax web components
 * @example
 * ```html
 * <er-iconsax name="home"></er-iconsax>
 * ```
 */
@customElement('er-iconsax')
export class erbiumIconSax extends LitElement {
  @state() private svgContent?: string;

  @property({reflect: true}) name!: iconsaxNames;
  @property({reflect: true}) category: iconsaxCategories = 'linear';
  @property({reflect: true}) size?: 'sm' | 'lg';

  @query('div.icon-inner') private _iconInner!: HTMLDivElement;

  static override styles = [
    css`
      :host {
        display: inline-block;

        width: 1em;
        height: 1em;

        contain: strict;

        box-sizing: content-box !important;

        font-size: var(--er-iconsax-md-fs, 24px);
      }

      .icon-inner,
      svg {
        display: block;

        height: 100%;
        width: 100%;
      }

      :host([size='sm']) {
        font-size: var(--er-iconsax-sm-fs, 18px) !important;
      }

      :host([size='lg']) {
        font-size: var(--er-iconsax-lg-fs, 32px) !important;
      }
    `,
  ];

  override render(): TemplateResult {
    return html`<div class="icon-inner"></div> `;
  }

  protected override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('name') || changedProperties.has('category')) {
      this.loadIcon();
    }
    if (changedProperties.has('svgContent')) {
      this._iconInner.innerHTML = this.svgContent ?? '';
    }
  }

  protected loadIcon(): void {
    const url = getUrl(this.name, this.category);

    getSvgContent(url).then((svgContent) => {
      this.svgContent = svgContent;
    });
  }
}
