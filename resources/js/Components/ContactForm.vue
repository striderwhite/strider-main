<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const loading = ref(false);
const success = ref(false);
const error = ref(false);

const submitForm = async () => {
  loading.value = true;
  error.value = false;
  success.value = false;

  try {
    await emailjs.send(
      'service_iksrkhk', // Service ID
      'template_default', // You'll need to create a template in EmailJS dashboard
      {
        user_name: form.value.name,
        user_email: form.value.email,
        message: form.value.message
      },
      'uTIfUyzUvtmbn-783' // Public key
    );

    success.value = true;
    form.value = { name: '', email: '', message: '' };
  } catch (err) {
    console.error('EmailJS error:', err);
    error.value = true;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-8">
    <form @submit.prevent="submitForm" class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-semibold text-slate-700 mb-2">
          Name
        </label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          placeholder="Your name"
        >
      </div>

      <div>
        <label for="email" class="block text-sm font-semibold text-slate-700 mb-2">
          Email
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          placeholder="you@example.com"
        >
      </div>

      <div>
        <label for="message" class="block text-sm font-semibold text-slate-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          v-model="form.message"
          required
          rows="5"
          class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          placeholder="Tell me about your project..."
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="loading"
        class="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="loading">
          <i class="fas fa-spinner fa-spin mr-2"></i>
          Sending...
        </span>
        <span v-else>Send Message</span>
      </button>

      <!-- Success Message -->
      <div v-if="success" class="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
        <i class="fas fa-check-circle mr-2"></i>
        Thanks! I'll respond within 24 hours.
      </div>

      <!-- Error Message -->
      <div v-if="error" class="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
        <i class="fas fa-exclamation-circle mr-2"></i>
        Something went wrong. Please try again or email me directly at 
        <a href="mailto:strider@striderwhite.com" class="underline font-semibold">
          strider@striderwhite.com
        </a>
      </div>
    </form>
  </div>
</template>
