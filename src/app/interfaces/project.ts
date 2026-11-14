/**
 * A project shown in the portfolio section.
 */
export interface Project {
  /** Name of the project, shown as headline. */
  name: string;

  /** Technologies used in the project. */
  knowledge: string[];

  /** Translation key of the project description. */
  descriptionKey: string;

  /** File name of the preview image in `assets/img`. */
  imgSrc: string;

  /** Link to the live version of the project. */
  urlTest: string;

  /** Link to the GitHub repository. */
  urlGit: string;
}
