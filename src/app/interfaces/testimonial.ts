/**
 * A reference from a former team member, shown in the testimonial slider.
 */
export interface Testimonial {
  /** Name of the author. */
  name: string;

  /** Translation key of the reference text. */
  textKey: string;

  /** Translation key of the author's role. */
  roleKey: string;

  /** File name of the author's photo in `assets/img`. */
  img: string;
}
