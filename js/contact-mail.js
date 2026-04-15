'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('contact-status');
  const form = document.getElementById('contactForm');
  const iframe = document.getElementById('contact-mail-frame');
  const btn = document.querySelector('.btn-submit');

  if (iframe && form) {
    let hasSubmitted = false;

    iframe.addEventListener('load', () => {
      if (!hasSubmitted) return;

      if (status) {
        status.textContent = 'Message sent. Please check ayusharbindkumar@gmail.com and confirm FormSubmit activation if needed.';
        status.style.color = '#00ff88';
      }
      if (btn) {
        btn.textContent = '✅ Message Sent';
        btn.style.background = 'linear-gradient(135deg, #00ff88, #00cc66)';
        btn.disabled = false;
      }

      form.reset();

      setTimeout(() => {
        if (btn) {
          btn.textContent = '⚡ Send Message';
          btn.style.background = '';
        }
      }, 4000);
    });

    form.dataset.ready = 'true';
    form.dataset.submitted = 'false';
    form.addEventListener('submit', () => {
      hasSubmitted = true;
      form.dataset.submitted = 'true';
    });
  }
});

function handleSubmit(event) {
  const form = document.getElementById('contactForm');
  const btn = document.querySelector('.btn-submit');
  const status = document.getElementById('contact-status');
  const name = document.getElementById('name')?.value.trim() || '';
  const email = document.getElementById('email')?.value.trim() || '';
  const message = document.getElementById('message')?.value.trim() || '';

  if (!form || !btn) return false;
  if (!name) {
    alert('Please fill in your full name.');
    return false;
  }
  if (!email) {
    alert('Please fill in your email address.');
    return false;
  }
  if (!document.getElementById('service')?.value) {
    alert('Please select a service.');
    return false;
  }
  if (!message) {
    alert('Please enter your message.');
    return false;
  }

  btn.disabled = true;
  btn.textContent = '⏳ Sending...';
  if (status) {
    status.textContent = 'Sending your message...';
    status.style.color = 'var(--text-muted)';
  }

  return true;
}
