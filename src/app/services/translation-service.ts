import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

/** Languages the page is available in. */
export type Lang = 'EN' | 'DE';

/** Texts of one language, stored by translation key. */
type Dictionary = Record<string, string>;

/** English texts. */
const EN: Dictionary = {
  'nav.about': 'About me',
  'nav.skills': 'Skills',
  'nav.mySkills': 'My skills',
  'nav.portfolio': 'Portfolio',
  'nav.contact': 'Contact',
  'nav.openMenu': 'Open menu',
  'nav.closeMenu': 'Close menu',

  'hero.iam': 'I am',
  'hero.role': 'FRONTEND DEVELOPER',
  'hero.cta': "Let's talk!",
  'hero.scroll': 'Scroll down',
  'hero.photoAlt': 'Portrait of Christian Sobotta',

  'about.title': 'About me',
  'about.intro':
    'I am a frontend developer who loves turning ideas into clean, responsive and user-friendly web applications. Seeing a design come to life in the browser motivates me every day, and I keep improving my skills through my own projects and feedback from others.',
  'about.location':
    'I am based in Germany and open to different ways of working, whether remote, hybrid or on-site.',
  'about.learning':
    'I am open-minded and enjoy learning new technologies. I continuously improve my skills and keep up with current frameworks and best practices.',
  'about.problem':
    'I approach problems analytically and step by step. Every challenge is a chance to learn something new while searching for the most efficient and elegant solution. I rely on creativity, persistence and a strong focus on teamwork.',
  'about.photoAlt': 'Photo of Christian Sobotta',

  'skills.title': 'My skills',
  'skills.text': 'I have used a wide range of front-end technologies in my projects.',
  'skills.lookingFor': 'Looking for',
  'skills.anotherSkill': 'another skill',
  'skills.learning':
    'I enjoy learning new technologies and frameworks, so feel free to contact me.',
  'skills.cta': 'Get in touch',
  'skills.interest': 'I have a special interest in learning',
  'skills.continuallyLearning': 'Continually learning',
  'skills.materialDesign': 'Material Design',

  'projects.title': 'Portfolio',
  'projects.intro':
    'Explore a selection of my work here - Interact with projects to see my skills in action.',
  'projects.live': 'Live test',
  'projects.github': 'Github',
  'projects.previewAlt': 'preview',
  'projects.epl.description':
    'Jump, run and throw game based on an object-oriented approach. Help Pepe find coins and tabasco salsa to fight against the crazy hen.',
  'projects.join.description':
    'Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.',

  'testimonials.prev': 'Previous reference',
  'testimonials.next': 'Next reference',
  'testimonials.photoAlt': 'Photo of',
  'testimonials.1.text':
    "Christian played an active role in the development and implementation of our Join project. When technical issues arose, he independently sought solutions and consulted with the team as needed. Our strong collaboration was particularly evident during the joint restructuring of the login and the forum.",
  'testimonials.1.role': 'Team Partner',
  'testimonials.2.text':
    'Christian was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.',
  'testimonials.2.role': 'Team Partner',
  'testimonials.3.text':
    'It was a great pleasure to work with Christian. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm.',
  'testimonials.3.role': 'Team Partner',

  'contact.title': 'Contact',
  'contact.subtitle': 'Got a problem to solve?',
  'contact.text':
    'Feel free to contact me if you are looking for a motivated frontend developer. I would love to support your team and add value to your projects through my work.',
  'contact.need': 'Need a Frontend developer?',
  'contact.me': 'Contact me!',
  'contact.name': 'Your name',
  'contact.email': 'Your email',
  'contact.message': 'Your message',
  'contact.nameError': 'Please enter your name (at least 2 characters).',
  'contact.emailError': 'Please enter a valid email address.',
  'contact.messageError': 'Please enter a message (at least 10 characters).',
  'contact.privacyBefore': "I've read the",
  'contact.privacyLink': 'privacy policy',
  'contact.privacyAfter': 'and agree to the processing of my data as outlined.',
  'contact.privacyError': 'Please accept the privacy policy.',
  'contact.send': 'Send message :)',
  'contact.sending': 'Sending...',
  'contact.success': 'Thank you! Your message has been sent successfully.',
  'contact.error': 'Sorry, your message could not be sent. Please try again later.',
  'contact.toTop': 'Back to top',

  'footer.legal': 'Legal Notice',
  'footer.privacy': 'Privacy Policy',
  'footer.github': 'Open GitHub profile',
  'footer.email': 'Write an email',
  'footer.linkedin': 'Open LinkedIn profile',

  'legal.back': 'Back to home',
};

/** German texts. */
const DE: Dictionary = {
  'nav.about': 'Über mich',
  'nav.skills': 'Skills',
  'nav.mySkills': 'Meine Skills',
  'nav.portfolio': 'Portfolio',
  'nav.contact': 'Kontakt',
  'nav.openMenu': 'Menü öffnen',
  'nav.closeMenu': 'Menü schließen',

  'hero.iam': 'Ich bin',
  'hero.role': 'FRONTEND ENTWICKLER',
  'hero.cta': 'Lass uns reden!',
  'hero.scroll': 'Nach unten',
  'hero.photoAlt': 'Porträt von Christian Sobotta',

  'about.title': 'Über mich',
  'about.intro':
    'Ich bin Frontend-Entwickler und verwandle Ideen gerne in saubere, responsive und benutzerfreundliche Webanwendungen. Zu sehen, wie ein Design im Browser lebendig wird, motiviert mich jeden Tag. Meine Fähigkeiten verbessere ich ständig durch eigene Projekte und das Feedback anderer.',
  'about.location':
    'Ich lebe in Deutschland und bin offen für verschiedene Arbeitsmodelle, egal ob remote, hybrid oder vor Ort.',
  'about.learning':
    'Ich bin offen für Neues und lerne gerne neue Technologien. Ich entwickle meine Fähigkeiten ständig weiter und halte mich über aktuelle Frameworks und Best Practices auf dem Laufenden.',
  'about.problem':
    'Ich gehe Probleme analytisch und Schritt für Schritt an. Jede Herausforderung ist für mich eine Chance, etwas Neues zu lernen und die effizienteste und eleganteste Lösung zu finden. Dabei setze ich auf Kreativität, Ausdauer und viel Teamgeist.',
  'about.photoAlt': 'Foto von Christian Sobotta',

  'skills.title': 'Meine Skills',
  'skills.text':
    'In meinen Projekten habe ich viele verschiedene Frontend-Technologien eingesetzt.',
  'skills.lookingFor': 'Suchst du',
  'skills.anotherSkill': 'einen anderen Skill',
  'skills.learning': 'Ich lerne gerne neue Technologien und Frameworks. Sprich mich einfach an.',
  'skills.cta': 'Kontakt aufnehmen',
  'skills.interest': 'Besonderes Interesse habe ich an',
  'skills.continuallyLearning': 'Ständiges Lernen',
  'skills.materialDesign': 'Material Design',

  'projects.title': 'Portfolio',
  'projects.intro':
    'Hier findest du eine Auswahl meiner Arbeiten. Probiere die Projekte aus und sieh meine Skills in Aktion.',
  'projects.live': 'Live-Test',
  'projects.github': 'Github',
  'projects.previewAlt': 'Vorschau',
  'projects.epl.description':
    'Jump-and-Run-Spiel mit objektorientiertem Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
  'projects.join.description':
    'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstelle und organisiere Aufgaben per Drag-and-Drop, weise Benutzer und Kategorien zu.',

  'testimonials.prev': 'Vorherige Referenz',
  'testimonials.next': 'Nächste Referenz',
  'testimonials.photoAlt': 'Foto von',
  'testimonials.1.text':
    'Christian hat sich aktiv an der Entwicklung und Umsetzung unseres Join-Projekts beteiligt. Bei technischen Problemen hat er eigenständig nach Lösungen gesucht und sich bei Bedarf mit dem Team abgestimmt. Besonders bei der gemeinsamen Umstrukturierung des Logins und des Boards hat sich die gute Zusammenarbeit gezeigt.',
  'testimonials.1.role': 'Teampartner',
  'testimonials.2.text':
    'Christian war ein super Teamkollege an der DA. Sein positiver Einsatz und seine Bereitschaft, Verantwortung zu übernehmen, haben maßgeblich dazu beigetragen, dass wir unsere Ziele erreicht haben.',
  'testimonials.2.role': 'Teampartner',
  'testimonials.3.text':
    'Es war eine große Freude, mit Christian zu arbeiten. Er weiß, wie er Teammitglieder motiviert, ihre beste Arbeit abzuliefern, und bringt immer neue Ideen ins Brainstorming ein.',
  'testimonials.3.role': 'Teampartner',

  'contact.title': 'Kontakt',
  'contact.subtitle': 'Hast du ein Problem zu lösen?',
  'contact.text':
    'Melde dich gerne, wenn du einen motivierten Frontend-Entwickler suchst. Ich unterstütze dein Team gerne und bringe deine Projekte mit meiner Arbeit voran.',
  'contact.need': 'Du brauchst einen Frontend-Entwickler?',
  'contact.me': 'Kontaktiere mich!',
  'contact.name': 'Dein Name',
  'contact.email': 'Deine E-Mail',
  'contact.message': 'Deine Nachricht',
  'contact.nameError': 'Bitte gib deinen Namen ein (mindestens 2 Zeichen).',
  'contact.emailError': 'Bitte gib eine gültige E-Mail-Adresse ein.',
  'contact.messageError': 'Bitte gib eine Nachricht ein (mindestens 10 Zeichen).',
  'contact.privacyBefore': 'Ich habe die',
  'contact.privacyLink': 'Datenschutzerklärung',
  'contact.privacyAfter': 'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
  'contact.privacyError': 'Bitte akzeptiere die Datenschutzerklärung.',
  'contact.send': 'Nachricht senden :)',
  'contact.sending': 'Wird gesendet...',
  'contact.success': 'Danke! Deine Nachricht wurde erfolgreich gesendet.',
  'contact.error':
    'Leider konnte deine Nachricht nicht gesendet werden. Bitte versuche es später erneut.',
  'contact.toTop': 'Nach oben',

  'footer.legal': 'Impressum',
  'footer.privacy': 'Datenschutz',
  'footer.github': 'GitHub-Profil öffnen',
  'footer.email': 'E-Mail schreiben',
  'footer.linkedin': 'LinkedIn-Profil öffnen',

  'legal.back': 'Zurück zur Startseite',
};

/** Key under which the chosen language is saved in the local storage. */
const STORAGE_KEY = 'portfolio-lang';

/**
 * Provides all texts of the page in German and English and switches between the languages.
 * The chosen language is saved in the local storage and restored on the next visit.
 */
@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  /** Document of the page, used to set the language attribute of the `html` element. */
  private readonly document = inject(DOCUMENT);

  /** Whether the code runs in the browser and not during server-side rendering. */
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /** Texts of all languages. */
  private readonly dictionaries: Record<Lang, Dictionary> = { EN, DE };

  /** Active language; every text in the templates updates when it changes. */
  readonly lang = signal<Lang>('EN');

  /**
   * Switches to the language saved on an earlier visit.
   * Called after the first render, so the prerendered page is hydrated in English first.
   */
  restoreSavedLanguage(): void {
    if (!this.isBrowser) {
      return;
    }
    const saved = this.readSavedLang();
    if (saved && saved !== this.lang()) {
      this.setLanguage(saved);
    }
  }

  /**
   * Switches the language of the page and saves it for the next visit.
   *
   * @param lang - Language to show.
   */
  setLanguage(lang: Lang): void {
    this.lang.set(lang);
    this.document.documentElement.lang = lang.toLowerCase();
    if (this.isBrowser) {
      this.saveLang(lang);
    }
  }

  /**
   * Returns the text for a translation key in the active language.
   *
   * @param key - Translation key, for example `nav.about`.
   * @returns The text in the active language, the English text if it is missing, or the key itself.
   */
  t(key: string): string {
    return this.dictionaries[this.lang()][key] ?? this.dictionaries.EN[key] ?? key;
  }

  /**
   * Saves the language in the local storage. Does nothing if the storage is blocked.
   *
   * @param lang - Language to save.
   */
  private saveLang(lang: Lang): void {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      return;
    }
  }

  /**
   * Reads the saved language from the local storage.
   *
   * @returns The saved language, or `null` if none is saved or the storage is blocked.
   */
  private readSavedLang(): Lang | null {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === 'DE' || value === 'EN' ? value : null;
    } catch {
      return null;
    }
  }
}
