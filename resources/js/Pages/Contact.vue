<script setup>
import { Head } from '@inertiajs/vue3';
import PublicLayout from '@/Layouts/PublicLayout.vue';
import SectionContainer from '@/Components/SectionContainer.vue';
import ContactForm from '@/Components/ContactForm.vue';
</script>

<template>
  <PublicLayout>
    <Head title="Contact - Get in Touch" />

    <!-- Hero -->
    <div class="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Let's Talk About Your Project
        </h1>
        <p class="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
          Get a free proposal. No sales pitch—just an honest conversation about your needs and how I can help.
        </p>
      </div>
    </div>

    <!-- Contact Form & Info -->
    <SectionContainer background="white">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div>
          <h2 class="text-3xl font-bold text-slate-900 mb-6">
            Send a Message
          </h2>
          <p class="text-lg text-slate-600 mb-8">
            Fill out the form and I'll respond within 24 hours. Or email me directly at 
            <a href="mailto:strider@striderwhite.com" class="text-primary font-semibold hover:underline">
              strider@striderwhite.com
            </a>
          </p>
          <ContactForm />
        </div>

        <!-- Contact Info -->
        <div>
          <h2 class="text-3xl font-bold text-slate-900 mb-6">
            Get in Touch
          </h2>
          
          <div class="space-y-8">
            <!-- Email -->
            <div class="flex items-start">
              <div class="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                <i class="fas fa-envelope text-2xl text-primary"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-slate-900 mb-2">Email</h3>
                <a 
                  href="mailto:strider@striderwhite.com" 
                  class="text-lg text-primary hover:underline"
                >
                  strider@striderwhite.com
                </a>
                <p class="text-sm text-slate-600 mt-1">I'll respond within 24 hours</p>
              </div>
            </div>

            <!-- LinkedIn -->
            <div class="flex items-start">
              <div class="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                <i class="fab fa-linkedin-in text-2xl text-primary"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-slate-900 mb-2">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/striderwhite/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-lg text-primary hover:underline"
                >
                  linkedin.com/in/striderwhite
                </a>
                <p class="text-sm text-slate-600 mt-1">Connect professionally</p>
              </div>
            </div>

            <!-- GitHub -->
            <div class="flex items-start">
              <div class="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                <i class="fab fa-github text-2xl text-primary"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-slate-900 mb-2">GitHub</h3>
                <a 
                  href="https://github.com/striderwhite" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-lg text-primary hover:underline"
                >
                  github.com/striderwhite
                </a>
                <p class="text-sm text-slate-600 mt-1">View my code</p>
              </div>
            </div>
          </div>

          <!-- What to Expect -->
          <div class="mt-12 bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 class="text-xl font-bold text-slate-900 mb-4">
              What to Expect
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-accent text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Response within 24 hours</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-accent text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Free initial consultation</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-accent text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Honest assessment of scope and timeline</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-accent text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">No sales pressure—just real conversation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- FAQ -->
    <SectionContainer background="gray">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Common Questions
        </h2>

        <div class="space-y-6">
          <div class="bg-white rounded-xl p-6 shadow-md">
            <h3 class="text-xl font-bold text-slate-900 mb-3">
              How much does a project typically cost?
            </h3>
            <p class="text-slate-600">
              Every project is different. Scope, complexity, timeline, and integration requirements all factor in. After our initial conversation, I'll provide a transparent proposal with clear deliverables and pricing. No hidden fees.
            </p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-md">
            <h3 class="text-xl font-bold text-slate-900 mb-3">
              How long does it take to build custom software?
            </h3>
            <p class="text-slate-600">
              Small projects can be delivered in weeks. More complex systems may take months. During discovery, we'll map out a realistic timeline based on your priorities and requirements.
            </p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-md">
            <h3 class="text-xl font-bold text-slate-900 mb-3">
              Do you work with businesses outside your local area?
            </h3>
            <p class="text-slate-600">
              Yes. I work with clients across North America remotely. Most communication happens via video calls, email, and project management tools.
            </p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-md">
            <h3 class="text-xl font-bold text-slate-900 mb-3">
              What if I already have a development team?
            </h3>
            <p class="text-slate-600">
              I can work alongside your existing team as a technical consultant, architect, or specialist for AI automation and complex integrations.
            </p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-md">
            <h3 class="text-xl font-bold text-slate-900 mb-3">
              Do you provide ongoing support after launch?
            </h3>
            <p class="text-slate-600">
              Yes. I offer maintenance, hosting support, feature additions, and system enhancements. We can structure ongoing support as a retainer or project-based.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  </PublicLayout>
</template>
