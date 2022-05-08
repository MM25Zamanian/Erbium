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
    'mmzmk-iconsax': mmzmkIconSax;
  }
}

/**
 * A small and super fast package for iconsax web components
 * @example
 * ```html
 * <mmzmk-iconsax name="home"></mmzmk-iconsax>
 * ```
 */
@customElement('mmzmk-iconsax')
export class mmzmkIconSax extends LitElement {
  @state() private svgContent?: string;

  @property({reflect: true}) name!: iconsaxNames;
  @property({reflect: true}) category: iconsaxCategories = 'linear';
  @property() size?: 'sm' | 'lg';

  @query('div.icon-inner') private _iconInner!: HTMLDivElement;

  static override styles = [
    css`
      :host {
        display: inline-block;

        width: 1em;
        height: 1em;

        contain: strict;

        box-sizing: content-box !important;

        font-size: var(--mmzmk-iconsax-md-fs, 24px);
      }

      .icon-inner,
      svg {
        display: block;

        height: 100%;
        width: 100%;
      }

      :host([size='sm']) {
        font-size: var(--mmzmk-iconsax-sm-fs, 18px) !important;
      }

      :host([size='lg']) {
        font-size: var(--mmzmk-iconsax-lg-fs, 32px) !important;
      }
    `,
  ];

  protected override render(): TemplateResult {
    return html`<div class="icon-inner"></div> `;
  }

  protected override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('name') || changedProperties.has('category')) {
      this.loadIcon();
    }
  }

  protected override updated(): void {
    this._iconInner.innerHTML = this.svgContent ?? '';
  }

  protected loadIcon(): void {
    const url = getUrl(this.name, this.category);

    getSvgContent(url).then((svgContent) => {
      this.svgContent = svgContent;
    });
  }
}
