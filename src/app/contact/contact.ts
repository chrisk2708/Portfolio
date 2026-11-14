import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../services/translation-service';

/** State of the contact form while sending a message. */
type SendStatus = 'idle' | 'sending' | 'success' | 'error';

/** Names of the controls in the contact form. */
type ContactField = 'name' | 'email' | 'message' | 'privacyPolicy';

/** Pattern for a valid email address with a top-level domain of at least two letters. */
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/** Time in milliseconds until the success or error message disappears again. */
const FEEDBACK_DURATION = 5000;

/**
 * Contact section with a short text and a contact form.
 *
 * The fields are validated when they lose focus. The form is sent as JSON to
 * `sendMail.php` on the web space, which forwards the message by email.
 */
@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  /** Provides the texts of this section in the active language. */
  protected readonly i18n = inject(TranslationService);

  /** Creates the reactive contact form. */
  private readonly fb = inject(FormBuilder);

  /** Sends the form data to the mail script. */
  private readonly http = inject(HttpClient);

  /** URL of the mail script, relative to the base URL of the page. */
  private readonly endpoint = 'sendMail.php';

  /** Current state of sending, used for the button text and the feedback message. */
  protected readonly status = signal<SendStatus>('idle');

  /** Contact form with name, email, message and the privacy policy checkbox. */
  protected readonly userForm = this.fb.nonNullable.group({
    name: ['', { validators: [Validators.required, Validators.minLength(2)], updateOn: 'blur' }],
    email: [
      '',
      { validators: [Validators.required, Validators.pattern(EMAIL_PATTERN)], updateOn: 'blur' },
    ],
    message: [
      '',
      { validators: [Validators.required, Validators.minLength(10)], updateOn: 'blur' },
    ],
    privacyPolicy: [false, Validators.requiredTrue],
  });

  /**
   * Checks whether the error message of a field should be visible.
   *
   * @param field - Name of the form control.
   * @returns `true` if the field is invalid and the user has already left it.
   */
  protected showError(field: ContactField): boolean {
    const control = this.userForm.controls[field];
    return control.invalid && control.touched;
  }

  /**
   * Checks whether a field should be marked as correctly filled in.
   *
   * @param field - Name of the form control.
   * @returns `true` if the field is valid and the user has already left it.
   */
  protected showValid(field: ContactField): boolean {
    const control = this.userForm.controls[field];
    return control.valid && control.touched;
  }

  /**
   * Checks whether the send button should look inactive.
   * The button is not really disabled: a click on it first leaves the last field,
   * which validates it, so the form can be sent with a single click.
   *
   * @returns `true` while the form is invalid or a message is being sent.
   */
  protected isSendDisabled(): boolean {
    return this.userForm.invalid || this.status() === 'sending';
  }

  /**
   * Sends the form if it is valid. Otherwise all error messages are shown.
   */
  protected formSubmit(): void {
    if (this.userForm.invalid || this.status() === 'sending') {
      this.userForm.markAllAsTouched();
      return;
    }
    const { name, email, message } = this.userForm.getRawValue();
    this.status.set('sending');
    this.http.post(this.endpoint, { name, email, message }, { responseType: 'text' }).subscribe({
      next: (response) => this.handleResponse(response),
      error: () => this.showFeedback('error'),
    });
  }

  /**
   * Scrolls smoothly back to the top of the page.
   */
  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Evaluates the answer of the mail script and resets the form after a successful send.
   *
   * @param response - Text returned by the mail script, `OK` on success.
   */
  private handleResponse(response: string): void {
    if (response.trim() !== 'OK') {
      this.showFeedback('error');
      return;
    }
    this.userForm.reset();
    this.showFeedback('success');
  }

  /**
   * Shows the success or error message and hides it again after a few seconds.
   *
   * @param result - Result of sending the form.
   */
  private showFeedback(result: 'success' | 'error'): void {
    this.status.set(result);
    setTimeout(() => this.status.set('idle'), FEEDBACK_DURATION);
  }
}
