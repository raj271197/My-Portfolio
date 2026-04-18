import { useRef, useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import emailjs, { emailjsConfig, isEmailjsConfigured } from '../../config/emailjs';
import Section from '../layout/Section';
import { persona } from '../../data/content';
import './Contact.css';

const initialFormState = {
  from_name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const formRef = useRef(null);
  const [formValues, setFormValues] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const validate = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.from_name.trim()) {
      nextErrors.from_name = 'Please enter your name.';
    }

    if (!formValues.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!emailPattern.test(formValues.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formValues.message.trim()) {
      nextErrors.message = 'Please enter a message.';
    } else if (formValues.message.trim().length < 20) {
      nextErrors.message = 'Please add a little more detail so I can respond properly.';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('error');
      setSubmitMessage('Please fix the highlighted fields and try again.');
      return;
    }

    if (!isEmailjsConfigured) {
      setStatus('error');
      setSubmitMessage(
        'The contact form is not configured yet. Add the EmailJS Vite environment variables before deploying.',
      );
      return;
    }

    try {
      setStatus('sending');
      setSubmitMessage('');

      await emailjs.sendForm(emailjsConfig.serviceId, emailjsConfig.templateId, formRef.current, {
        publicKey: emailjsConfig.publicKey,
      });

      setStatus('success');
      setSubmitMessage('Message sent successfully. I will get back to you soon.');
      setFormValues(initialFormState);
      formRef.current?.reset();
    } catch {
      setStatus('error');
      setSubmitMessage('Something went wrong while sending your message. Please try again in a moment.');
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Send a quick message."
      description="Reach out for full-time roles, freelance work, or product collaborations."
      className="contact-section"
    >
      <div className="contact-grid">
        <article className="glass-panel contact-card" data-animate="fade-up">
          <h3>Contact details</h3>
          <p>
            I am interested in full-time roles, freelance opportunities, and collaborative product work where strong UI
            and dependable engineering both matter.
          </p>

          <div className="contact-list">
            <a href={`mailto:${persona.email}`}>
              <Mail size={18} />
              <span>{persona.email}</span>
            </a>
            <a href={`tel:${persona.phone}`}>
              <Phone size={18} />
              <span>{persona.phone}</span>
            </a>
            <a href={persona.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a href={persona.github} target="_blank" rel="noreferrer">
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="contact-availability">
            <span className="availability-dot" aria-hidden="true" />
            <span>{persona.availability}</span>
          </div>
        </article>

        <form ref={formRef} className="glass-panel contact-form-card" onSubmit={handleSubmit} noValidate data-animate="fade-up">
          <h3>Send a message</h3>
          <p className="contact-form-intro">Share the role, project, or opportunity and I will get back to you soon.</p>

          <div className="field-row">
            <label htmlFor="from_name">Name</label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              placeholder="Your name"
              value={formValues.from_name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.from_name)}
            />
            {errors.from_name ? <span className="field-error">{errors.from_name}</span> : null}
          </div>

          <div className="field-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formValues.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? <span className="field-error">{errors.email}</span> : null}
          </div>

          <div className="field-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about the role, project, or opportunity."
              value={formValues.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message ? <span className="field-error">{errors.message}</span> : null}
          </div>

          {submitMessage ? (
            <p className={`form-feedback ${status === 'success' ? 'is-success' : 'is-error'}`}>{submitMessage}</p>
          ) : null}

          <button
            type="submit"
            className="button button-primary contact-submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
