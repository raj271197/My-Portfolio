import emailjs from '@emailjs/browser';

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() || '',
};

export const isEmailjsConfigured = Boolean(
  emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey,
);

export const missingEmailjsConfig = Object.entries(emailjsConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (typeof window !== 'undefined' && isEmailjsConfigured) {
  emailjs.init({
    publicKey: emailjsConfig.publicKey,
  });
}

export default emailjs;
