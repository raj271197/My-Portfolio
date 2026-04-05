import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Section from '../layout/Section';
import { persona } from '../../data/content';
import { Mail, Phone, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

// ============================================
// SETUP INSTRUCTIONS FOR EMAILJS:
// 1. Go to https://www.emailjs.com/
// 2. Sign up for a free account
// 3. Get your PUBLIC KEY from Account > API Keys
// 4. Create an Email Service (Gmail, Outlook, etc.)
// 5. Create Email Template with variables: {{from_name}}, {{email}}, {{subject}}, {{message}}
// 6. Replace the values below:
const EMAILJS_SERVICE_ID = 'service_xxxxxxxxxxxx'; // Get from EmailJS
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxxxxxxx'; // Get from EmailJS
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxx'; // Get from EmailJS Account > API Keys
// ============================================

// Initialize EmailJS on component mount
if (EMAILJS_PUBLIC_KEY !== 'xxxxxxxxxxxxxxxxxxxxxxxx') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // 'idle', 'sending', 'success', 'error'
    const [errors, setErrors] = useState({});
    const [honeypot, setHoneypot] = useState(''); // Spam protection

    const validateForm = (formData) => {
        const newErrors = {};

        // Name validation
        if (!formData.get('from_name')?.trim()) {
            newErrors.from_name = 'Name is required';
        }

        // Email validation
        const email = formData.get('email')?.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Please enter a valid email';
        }

        // Subject validation
        if (!formData.get('subject')?.trim()) {
            newErrors.subject = 'Subject is required';
        }

        // Message validation
        const message = formData.get('message')?.trim();
        if (!message) {
            newErrors.message = 'Message is required';
        } else if (message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        return newErrors;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Honeypot field check (spam protection)
        if (honeypot) {
            console.log('Spam detected');
            return;
        }

        const formData = new FormData(form.current);
        const newErrors = validateForm(formData);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setStatus('sending');
        setErrors({});

        // Check if EmailJS is properly configured
        if (EMAILJS_SERVICE_ID === 'service_xxxxxxxxxxxx') {
            setStatus('error');
            setErrors({ submit: 'EmailJS is not configured. Please check your credentials.' });
            return;
        }

        emailjs
            .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
            .then(
                (result) => {
                    console.log('Email sent:', result.text);
                    setStatus('success');
                    form.current.reset();
                    // Reset success message after 5 seconds
                    setTimeout(() => setStatus(''), 5000);
                },
                (error) => {
                    console.error('Email error:', error.text);
                    setStatus('error');
                    setErrors({ submit: 'Failed to send message. Please try again later.' });
                }
            );
    };

    return (
        <Section id="contact" className="contact-section">
            <div className="contact-container">
                {/* Header */}
                <div className="contact-header animate-fade-in-up">
                    <h2>Get In Touch</h2>
                    <p>I'm always interested in hearing about new projects and opportunities.</p>
                </div>

                <div className="contact-content">
                    {/* Left: Contact Info */}
                    <div className="contact-info glass-card">
                        <h3>Contact Information</h3>

                        <div className="info-item animate-fade-in-left delay-100">
                            <Mail className="icon" />
                            <div>
                                <p className="label">Email</p>
                                <a href={`mailto:${persona.email}`}>{persona.email}</a>
                            </div>
                        </div>

                        <div className="info-item animate-fade-in-left delay-200">
                            <Phone className="icon" />
                            <div>
                                <p className="label">Phone</p>
                                <a href={`tel:${persona.phone}`}>{persona.phone}</a>
                            </div>
                        </div>

                        <div className="info-item animate-fade-in-left delay-300">
                            <Linkedin className="icon" />
                            <div>
                                <p className="label">LinkedIn</p>
                                <a href={persona.linkedin} target="_blank" rel="noopener noreferrer">
                                    Connect with me
                                </a>
                            </div>
                        </div>

                        <div className="info-item animate-fade-in-left delay-300">
                            <Github className="icon" />
                            <div>
                                <p className="label">GitHub</p>
                                <a href={persona.github} target="_blank" rel="noopener noreferrer">
                                    View my projects
                                </a>
                            </div>
                        </div>

                        <p className="availability-status">
                            <span className="status-dot"></span>
                            {persona.availability}
                        </p>
                    </div>

                    {/* Right: Contact Form */}
                    <form ref={form} onSubmit={sendEmail} className="contact-form glass-card animate-fade-in-right">
                        <h3>Send Me a Message</h3>

                        {/* Honeypot field (hidden) - spam protection */}
                        <input
                            type="text"
                            name="website"
                            style={{ display: 'none' }}
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                            tabIndex="-1"
                            autoComplete="off"
                        />

                        {/* Name Field */}
                        <div className="form-group">
                            <label htmlFor="from_name">Full Name *</label>
                            <input
                                type="text"
                                id="from_name"
                                name="from_name"
                                placeholder="John Doe"
                                className={errors.from_name ? 'input-error' : ''}
                            />
                            {errors.from_name && (
                                <span className="error-message">{errors.from_name}</span>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                className={errors.email ? 'input-error' : ''}
                            />
                            {errors.email && (
                                <span className="error-message">{errors.email}</span>
                            )}
                        </div>

                        {/* Subject Field */}
                        <div className="form-group">
                            <label htmlFor="subject">Subject *</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Project Inquiry"
                                className={errors.subject ? 'input-error' : ''}
                            />
                            {errors.subject && (
                                <span className="error-message">{errors.subject}</span>
                            )}
                        </div>

                        {/* Message Field */}
                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Tell me about your project..."
                                className={errors.message ? 'input-error' : ''}
                            ></textarea>
                            {errors.message && (
                                <span className="error-message">{errors.message}</span>
                            )}
                        </div>

                        {/* Global Error */}
                        {errors.submit && (
                            <div className="alert alert-error">
                                <AlertCircle size={18} />
                                <span>{errors.submit}</span>
                            </div>
                        )}

                        {/* Success Message */}
                        {status === 'success' && (
                            <div className="alert alert-success animate-scale-in">
                                <CheckCircle size={18} />
                                <span>Message sent successfully! I'll get back to you soon.</span>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={`btn btn-primary btn-lg contact-submit-btn ${
                                status === 'sending' ? 'is-loading' : ''
                            }`}
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? (
                                <>
                                    <span className="spinner"></span>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>

                        <p className="form-note">* Required fields</p>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
