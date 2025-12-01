<script setup>
import { Head } from '@inertiajs/vue3';
import PublicLayout from '@/Layouts/PublicLayout.vue';
import SectionContainer from '@/Components/SectionContainer.vue';
import ServiceCard from '@/Components/ServiceCard.vue';
import CTAButton from '@/Components/CTAButton.vue';
</script>

<template>
  <PublicLayout>
    <Head title="Services - Custom Software Development & AI Automation" />

    <!-- Hero -->
    <div class="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Services Built for Operations
        </h1>
        <p class="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
          Turn operational bottlenecks into competitive advantages with software that actually fits your business.
        </p>
      </div>
    </div>

    <!-- Services -->
    <SectionContainer background="white">
      <div class="space-y-16">
        <!-- Custom Software Development -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
              <i class="fas fa-code text-3xl text-primary"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Custom Software Development
            </h2>
            <p class="text-lg text-slate-600 mb-6">
              Stop forcing your business into off-the-shelf software. Get tools built specifically for your workflows, your data, and your operations.
            </p>
            
            <h3 class="text-xl font-bold text-slate-900 mb-3">Problems I Solve:</h3>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <i class="fas fa-times-circle text-red-500 text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Spreadsheets that break at scale</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times-circle text-red-500 text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Manual data entry eating your time</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times-circle text-red-500 text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Disconnected tools causing errors</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times-circle text-red-500 text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Can't scale without hiring more people</span>
              </li>
            </ul>

            <h3 class="text-xl font-bold text-slate-900 mb-3">What You Get:</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-accent text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Full-stack web applications (Laravel, Vue, databases)</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-accent text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Mobile-responsive interfaces your team will actually use</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-accent text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Built to scale - from startup to enterprise load</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-accent text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Clean, maintainable code you can extend later</span>
              </li>
            </ul>
          </div>
          <div class="bg-slate-100 rounded-xl p-8">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" 
              alt="Custom Software Development" 
              class="w-full rounded-lg shadow-lg object-cover h-80"
            >
          </div>
        </div>

        <hr class="border-slate-200">

        <!-- AI Automation -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1 bg-slate-100 rounded-xl p-8">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop" 
              alt="AI Automation" 
              class="w-full rounded-lg shadow-lg object-cover h-80"
            >
          </div>
          <div class="order-1 md:order-2">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6">
              <i class="fas fa-brain text-3xl text-accent"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              AI Automation
            </h2>
            <p class="text-lg text-slate-600 mb-6">
              Turn hours of manual document review, data extraction, and repetitive analysis into seconds of automated accuracy using AI.
            </p>
            
            <h3 class="text-xl font-bold text-slate-900 mb-3">Problems I Solve:</h3>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <i class="fas fa-times-circle text-red-500 text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Manual document processing bottlenecks</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times-circle text-red-500 text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Inconsistent risk assessment across teams</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times-circle text-red-500 text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Data extraction from PDFs and documents</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times-circle text-red-500 text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Can't keep up with document volume</span>
              </li>
            </ul>

            <h3 class="text-xl font-bold text-slate-900 mb-3">What You Get:</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-accent text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">LLM-powered document analysis & classification</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-accent text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">OCR and intelligent data extraction pipelines</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-accent text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Custom risk scoring and pattern detection</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-accent text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Embeddings and semantic search for large document sets</span>
              </li>
            </ul>
          </div>
        </div>

        <hr class="border-slate-200">

        <!-- Systems Integration -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
              <i class="fas fa-network-wired text-3xl text-primary"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Systems Integration
            </h2>
            <p class="text-lg text-slate-600 mb-6">
              Make your disconnected tools work together. Consolidate data, automate workflows, and eliminate duplicate entry across platforms.
            </p>
            
            <h3 class="text-xl font-bold text-slate-900 mb-3">Problems I Solve:</h3>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <i class="fas fa-times-circle text-red-500 text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Data scattered across multiple platforms</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times-circle text-red-500 text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Manual data syncing between systems</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times-circle text-red-500 text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">No single source of truth for critical data</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times-circle text-red-500 text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Complex authentication across multiple tools</span>
              </li>
            </ul>

            <h3 class="text-xl font-bold text-slate-900 mb-3">What You Get:</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-accent text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">RESTful API development and integration</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-accent text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Single Sign-On (SAML2, OAuth, Okta, Azure AD)</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-accent text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Data synchronization and workflow automation</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-accent text-xl mr-3 mt-1"></i>
                <span class="text-slate-700">Third-party service integration (Stripe, Twilio, etc.)</span>
              </li>
            </ul>
          </div>
          <div class="bg-slate-100 rounded-xl p-8">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop" 
              alt="Systems Integration" 
              class="w-full rounded-lg shadow-lg object-cover h-80"
            >
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- Pricing Philosophy -->
    <SectionContainer background="gray">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          No Boutique Agency Markup
        </h2>
        <p class="text-xl text-slate-600 mb-8">
          You get the same quality and expertise as a top-tier agency without paying for their overhead, sales teams, and profit margins. Direct access to a senior engineer who leads teams and builds production systems.
        </p>
        <p class="text-lg text-slate-600 mb-8">
          Every project starts with discovery. No cookie-cutter pricing. No hidden fees. Just honest conversations about scope, timeline, and budget.
        </p>
        <CTAButton href="/contact" variant="primary">
          <span class="text-primary">Discuss Your Project</span>
        </CTAButton>
      </div>
    </SectionContainer>
  </PublicLayout>
</template>
