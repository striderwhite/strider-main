<script setup>
import { Head } from '@inertiajs/vue3';
import PublicLayout from '@/Layouts/PublicLayout.vue';
import SectionContainer from '@/Components/SectionContainer.vue';
import WorkCard from '@/Components/WorkCard.vue';
import CTAButton from '@/Components/CTAButton.vue';
</script>

<template>
  <PublicLayout>
    <Head title="Work - Case Studies & Projects" />

    <!-- Hero -->
    <div class="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8" data-aos="fade-up">
          Real Projects. Real Results.
        </h1>
        <p class="text-2xl md:text-3xl text-blue-100 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          See how custom software solves real business problems.
        </p>
      </div>
    </div>

    <!-- Case Studies -->
    <SectionContainer background="white">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Condo Doc Review -->
        <div data-aos="fade-up" data-aos-delay="0">
          <WorkCard
            title="Condo Doc Review AI"
            industry="Property Management"
            problem="Manual review of hundreds of legal and financial documents was time-consuming and inconsistent."
            solution="Built an AI-powered risk assessment platform using LLMs and OCR. Automatically analyzes documents, extracts data, flags risks, and generates reports."
            outcome="Reduced document review from hours to minutes. Consistent risk scoring across all properties. Now processing documents for a growing portfolio of clients."
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
          />
        </div>

        <!-- DSLLP Digital Minute Book -->
        <div data-aos="fade-up" data-aos-delay="100">
          <WorkCard
            title="DSLLP Digital Minute Book"
            industry="Legal Services"
            problem="Law firms needed to replace physical binders with secure, searchable digital corporate records."
            solution="Developed a full-stack legal platform for creating and maintaining digital corporate records. Includes document generation, version control, permissions, and audit trails."
            outcome="Streamlined document management for multiple law firms. Reduced physical storage and improved client access. Enhanced compliance and security."
            image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
          />
        </div>

        <!-- Warehouse Logistics -->
        <div data-aos="fade-up" data-aos-delay="200">
          <WorkCard
            title="Warehouse Logistics System"
            industry="Logistics & Distribution"
            problem="Manual tire storage and retrieval processes created inefficiencies, errors, and bottlenecks in warehouse operations."
            solution="Built a comprehensive warehouse management system with barcode scanning, inventory tracking, picking optimization, driver routing, and staff management. Integrated with mobile devices and existing systems."
            outcome="Streamlined operations for a major distribution network. Real-time inventory visibility, automated picking workflows, and efficient driver dispatch. Managing 2M+ tire records across multiple locations."
            image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
          />
        </div>
      </div>
    </SectionContainer>

    <!-- Technical Capabilities -->
    <SectionContainer background="gray">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center" data-aos="fade-up">
          Built with Modern Technology
        </h2>
        <p class="text-2xl text-slate-600 mb-12 text-center leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Enterprise-grade tools and best practices.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <h3 class="text-2xl font-bold text-slate-900 mb-6">Backend & Infrastructure</h3>
            <ul class="space-y-4 text-lg text-slate-700">
              <li><i class="fas fa-check text-accent mr-3"></i>Laravel (PHP) Framework</li>
              <li><i class="fas fa-check text-accent mr-3"></i>MySQL / PostgreSQL</li>
              <li><i class="fas fa-check text-accent mr-3"></i>RESTful APIs</li>
              <li><i class="fas fa-check text-accent mr-3"></i>Linux/Ubuntu Servers</li>
              <li><i class="fas fa-check text-accent mr-3"></i>CI/CD Automation</li>
            </ul>
          </div>

          <div data-aos="fade-left">
            <h3 class="text-2xl font-bold text-slate-900 mb-6">Frontend & AI</h3>
            <ul class="space-y-4 text-lg text-slate-700">
              <li><i class="fas fa-check text-accent mr-3"></i>Vue.js & Modern UI</li>
              <li><i class="fas fa-check text-accent mr-3"></i>Mobile-First Design</li>
              <li><i class="fas fa-check text-accent mr-3"></i>LLM Integration (OpenAI, Claude)</li>
              <li><i class="fas fa-check text-accent mr-3"></i>OCR & Document Processing</li>
              <li><i class="fas fa-check text-accent mr-3"></i>Single Sign-On (SSO)</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- CTA -->
    <SectionContainer background="white">
      <div class="bg-gradient-to-br from-primary to-primary-dark text-white rounded-3xl p-16 text-center shadow-2xl" data-aos="zoom-in">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Let's Talk About Your Project
        </h2>
        <p class="text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Tell me what you're building and how I can help.
        </p>
        <CTAButton href="/contact" variant="primary">
          Get a Free Proposal
        </CTAButton>
      </div>
    </SectionContainer>
  </PublicLayout>
</template>
