<script setup>
import { Head } from '@inertiajs/vue3';
import PublicLayout from '@/Layouts/PublicLayout.vue';
import SectionContainer from '@/Components/SectionContainer.vue';
import CTAButton from '@/Components/CTAButton.vue';
</script>

<template>
  <PublicLayout>
    <Head title="About - Strider White" />

    <!-- Hero -->
    <div class="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          I Don't Just Build Software, I Run Businesses With It
        </h1>
        <p class="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
          Nearly a decade building production systems. Business owner. Technical lead. Senior architect.
        </p>
      </div>
    </div>

    <!-- Main Story -->
    <SectionContainer background="white">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="/storage/images/headshot.jpg" 
            alt="Strider White" 
            class="w-full rounded-3xl shadow-2xl"
          >
        </div>
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Operations AND Engineering
          </h2>
          <p class="text-lg text-slate-600 mb-4">
            I understand both sides of the equation because I live them daily. I own and operate a condominium management company—and I built the proprietary AI-powered software that runs it.
          </p>
          <p class="text-lg text-slate-600 mb-4">
            That's not theoretical knowledge. It's building systems, deploying them, using them every day, and iterating based on real operational feedback.
          </p>
          <p class="text-lg text-slate-600 mb-6">
            When you work with me, you're not getting a developer who codes to spec and moves on. You're getting someone who thinks like a business owner and builds like a senior engineer.
          </p>
        </div>
      </div>
    </SectionContainer>

    <!-- Experience Timeline -->
    <SectionContainer background="gray">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Experience
        </h2>

        <div class="space-y-8">
          <div class="border-l-4 border-primary pl-6">
            <div class="text-sm font-semibold text-accent mb-1">Current</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Independent Software Architect</h3>
            <p class="text-slate-600 mb-2">
              Building custom software solutions for businesses seeking AI automation, operational efficiency, and scalable systems.
            </p>
          </div>

          <div class="border-l-4 border-accent pl-6">
            <div class="text-sm font-semibold text-accent mb-1">Current</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Business Owner - Upskill Condo Management</h3>
            <p class="text-slate-600 mb-3">
              Own and operate <a href="https://www.upskillcondo.ca/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-semibold">Upskill Condo Management</a>, a condominium management company powered by proprietary AI software for automated risk assessment, document processing, and operational efficiency.
            </p>
            <p class="text-slate-600">
              Also founded <a href="https://www.condodocreview.com/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-semibold">Condo Doc Review</a>, a specialized document review service for condominium corporations.
            </p>
          </div>

          <div class="border-l-4 border-slate-300 pl-6">
            <div class="text-sm font-semibold text-slate-600 mb-1">Sep 2023 - Sep 2025</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Developer Team Lead - Fabled Solutions</h3>
            <p class="text-slate-600 mb-2">
              Managed development projects, reviewed code, and supported developers in delivering high-quality products. Led teams building custom web applications for clients across multiple industries.
            </p>
          </div>

          <div class="border-l-4 border-slate-300 pl-6">
            <div class="text-sm font-semibold text-slate-600 mb-1">Nov 2019 - Oct 2023</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Fullstack Application Developer - Fabled Solutions</h3>
            <p class="text-slate-600 mb-2">
              Designed and developed full-stack web applications ranging from simple tools to complex integrated SaaS products. Specialized in Laravel, Vue.js, and MySQL, architecting systems serving hundreds of businesses and millions of database records.
            </p>
          </div>

          <div class="border-l-4 border-slate-300 pl-6">
            <div class="text-sm font-semibold text-slate-600 mb-1">Background</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Computer Engineering</h3>
            <p class="text-slate-600">
              Technical foundation in computer engineering with nearly a decade of hands-on production experience in full-stack development, databases, APIs, and system architecture.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- Credentials -->
    <SectionContainer background="white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Credentials & Certifications
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-slate-50 rounded-xl p-8 border-2 border-primary">
            <i class="fas fa-certificate text-4xl text-primary mb-4"></i>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Laravel Certified</h3>
            <p class="text-slate-600">
              Official Laravel certification demonstrating expert-level proficiency in the framework powering modern web applications.
            </p>
          </div>

          <div class="bg-slate-50 rounded-xl p-8 border-2 border-accent">
            <i class="fas fa-shield-alt text-4xl text-accent mb-4"></i>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Google Cybersecurity Certified</h3>
            <p class="text-slate-600">
              Google Cybersecurity Professional Certificate covering security best practices, threat detection, and secure system design.
            </p>
          </div>
        </div>

        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div class="text-3xl font-bold text-primary mb-1">9+</div>
            <div class="text-slate-600 text-sm">Years Experience</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-primary mb-1">100+</div>
            <div class="text-slate-600 text-sm">Dealerships Served</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-primary mb-1">2M+</div>
            <div class="text-slate-600 text-sm">Database Records</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-primary mb-1">Teams</div>
            <div class="text-slate-600 text-sm">Led & Mentored</div>
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- Approach -->
    <SectionContainer background="gray">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
          How I Work
        </h2>

        <div class="space-y-6">
          <div class="bg-white rounded-xl p-6 shadow-md">
            <h3 class="text-xl font-bold text-slate-900 mb-3">
              <i class="fas fa-comments text-primary mr-3"></i>
              Discovery First
            </h3>
            <p class="text-slate-600">
              Every engagement starts with understanding your business, operations, and actual pain points—not jumping straight to code.
            </p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-md">
            <h3 class="text-xl font-bold text-slate-900 mb-3">
              <i class="fas fa-cogs text-primary mr-3"></i>
              Built to Scale
            </h3>
            <p class="text-slate-600">
              I build systems that grow with you. Clean architecture, maintainable code, and performance optimization from day one.
            </p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-md">
            <h3 class="text-xl font-bold text-slate-900 mb-3">
              <i class="fas fa-handshake text-primary mr-3"></i>
              Direct Communication
            </h3>
            <p class="text-slate-600">
              No account managers or layers of bureaucracy. You work directly with the engineer building your system.
            </p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-md">
            <h3 class="text-xl font-bold text-slate-900 mb-3">
              <i class="fas fa-dollar-sign text-primary mr-3"></i>
              Competitive Rates
            </h3>
            <p class="text-slate-600">
              Enterprise-quality work without boutique agency pricing. You pay for expertise, not overhead.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- Beyond Code -->
    <SectionContainer background="white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Beyond Code
        </h2>
        <p class="text-lg text-slate-600 mb-8">
          I approach problems systematically—whether I'm debugging production systems, mixing and mastering music, soldering electronics, or reverse engineering software. It's all about understanding how things work and making them better.
        </p>
        <p class="text-lg text-slate-600 mb-8">
          That same systematic thinking applies to your business challenges. I don't just write code—I solve operational problems.
        </p>
      </div>
    </SectionContainer>

    <!-- CTA -->
    <SectionContainer background="gray">
      <div class="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-12 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Let's Build Something
        </h2>
        <p class="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
          If you're looking for a technical partner who understands operations and delivers enterprise-quality systems at competitive rates, let's talk.
        </p>
        <CTAButton href="/contact" variant="primary">
          Start a Conversation
        </CTAButton>
      </div>
    </SectionContainer>
  </PublicLayout>
</template>
