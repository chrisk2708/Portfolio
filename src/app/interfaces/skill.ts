/**
 * A technology or ability shown in the skills section.
 */
export interface Skill {
  /** Name of the skill, used to identify it in the list. */
  name: string;

  /** Text below the logo; `\n` marks a line break. */
  label: string;

  /** Path to the logo. */
  icon: string;

  /** Highlights the skill and shows the speech bubble on hover. */
  highlight?: boolean;
}
