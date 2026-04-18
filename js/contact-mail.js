'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const btn = document.querySelector('.btn-submit');
  const status = document.getElementById('contact-status');

  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const service = document.getElementById('service')?.value || '';
    const message = document.getElementById('message')?.value.trim() || '';

    // ✅ Validation
    if (!name) {
      alert('Please fill in your full name.');
      return;
    }
    if (!email) {
      alert('Please fill in your email address.');
      return;
    }
    if (!phone) {
      alert('Please fill in your phone number.');
      return;
    }
    if (!service) {
      alert('Please select a service.');
      return;
    }
    if (!message) {
      alert('Please enter your message.');
      return;
    }

    // ✅ UI Loading State
    btn.disabled = true;
    btn.textContent = '⏳ Sending...';
    if (status) {
      status.textContent = 'Sending your message...';
      status.style.color = 'var(--text-muted)';
    }

    // ✅ Send using EmailJS
    emailjs.sendForm(
      "service_19jpgfl",        // your service ID
      "template_unrsc1c",       // your template ID
      this
    )
    .then(() => {
      if (status) {
        status.textContent = '✅ Message sent successfully!';
        status.style.color = '#00ff88';
      }

      btn.textContent = '✅ Message Sent';
      btn.style.background = 'linear-gradient(135deg, #00ff88, #00cc66)';

      form.reset();

      setTimeout(() => {
        btn.textContent = '⚡ Send Message';
        btn.style.background = '';
        btn.disabled = false;
      }, 4000);
    })
    .catch((error) => {
      console.error(error);

      if (status) {
        status.textContent = '❌ Failed to send. Try again later.';
        status.style.color = 'red';
      }

      btn.textContent = '❌ Failed';
      btn.disabled = false;
    });
  });
});