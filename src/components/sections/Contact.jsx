import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Section from '../layout/Section';
import { persona } from '../../data/content';
import { Mail, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };
    return (
        <Section id="contact" className="contact-editorial">
            <div className="contact-split">
                {/* Left: Info */}
                <div className="contact-info">
                    <h2 className="editorial-title">Get in Touch</h2>
                    <h3 className="editorial-subtitle">I'd like to hear from you!</h3>

                    <p className="editorial-text">
                        I am currently open to full-time opportunities. If you have any inquiries,
                        or just want to say hi, please use the contact form or reach out directly!
                    </p>

                    <div className="info-links">
                        <a href={`mailto:${persona.email}`} className="info-item">
                            <Mail size={18} />
                            <span>{persona.email}</span>
                        </a>
                    </div>

                    <div className="social-row">
                        <a href={persona.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href={persona.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={24} />
                        </a>
                    </div>
                </div>

                {/* Right: Form */}
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>

                    <button type="submit" className="editorial-submit-btn" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : 'Send'}
                    </button>

                    {status === 'success' && (
                        <p style={{ color: 'green', marginTop: '10px' }}>Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p style={{ color: 'red', marginTop: '10px' }}>Failed to send message. Please try again.</p>
                    )}
                </form>
            </div>
        </Section>
    );
};

export default Contact;
