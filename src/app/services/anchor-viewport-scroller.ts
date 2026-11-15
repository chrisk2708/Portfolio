import { DOCUMENT, isPlatformBrowser, ViewportScroller } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

/**
 * Replacement for Angular's default `ViewportScroller`.
 *
 * Scrolls to anchors with `scrollIntoView()`, so the `scroll-margin-top` of the sections
 * keeps them below the fixed header and the smooth scrolling of the page is used.
 */
@Injectable()
export class AnchorViewportScroller implements ViewportScroller {
  /** Document of the page, used to find the anchor elements. */
  private readonly document = inject(DOCUMENT);

  /** Whether the code runs in the browser and not during server-side rendering. */
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /**
   * Not needed: the offset comes from the `scroll-margin-top` of the sections.
   */
  setOffset(): void {}

  /**
   * Returns the current scroll position.
   *
   * @returns The horizontal and vertical scroll position, `[0, 0]` on the server.
   */
  getScrollPosition(): [number, number] {
    return this.isBrowser ? [window.scrollX, window.scrollY] : [0, 0];
  }

  /**
   * Scrolls to a position on the page.
   *
   * @param position - Horizontal and vertical position in pixels.
   * @param options - Scroll options such as the scroll behavior.
   */
  scrollToPosition(position: [number, number], options?: ScrollOptions): void {
    if (this.isBrowser) {
      window.scrollTo({ left: position[0], top: position[1], ...options });
    }
  }

  /**
   * Scrolls to the element with the given id or name.
   *
   * @param anchor - Id or name of the target element.
   * @param options - Scroll options such as the scroll behavior.
   */
  scrollToAnchor(anchor: string, options?: ScrollOptions): void {
    if (!this.isBrowser) {
      return;
    }
    const target =
      this.document.getElementById(anchor) ?? this.document.getElementsByName(anchor)[0];
    target?.scrollIntoView({ block: 'start', ...options });
  }

  /**
   * Sets how the browser restores the scroll position when navigating back and forward.
   *
   * @param scrollRestoration - `auto` for the browser default, `manual` to leave it to the router.
   */
  setHistoryScrollRestoration(scrollRestoration: 'auto' | 'manual'): void {
    if (this.isBrowser) {
      history.scrollRestoration = scrollRestoration;
    }
  }
}
