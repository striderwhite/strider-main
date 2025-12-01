<script setup>
import { Head } from '@inertiajs/vue3';
import PublicLayout from '@/Layouts/PublicLayout.vue';
import Hero from '@/Components/Hero.vue';
import CTAButton from '@/Components/CTAButton.vue';
import SectionContainer from '@/Components/SectionContainer.vue';
import ServiceCard from '@/Components/ServiceCard.vue';
import TestimonialPlaceholder from '@/Components/TestimonialPlaceholder.vue';
import ParallaxSection from '@/Components/ParallaxSection.vue';
</script>

<template>
  <PublicLayout>
    <Head title="Home - Custom Software Development" />

    <!-- Hero Section -->
    <Hero>
      <template #cta>
        <CTAButton href="/contact" variant="primary">
          Get a Free Proposal
        </CTAButton>
        <CTAButton href="/work" variant="secondary">
          View My Work
        </CTAButton>
      </template>
    </Hero>

    <!-- Intro with Headshot - Build Trust -->
    <SectionContainer background="white">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div data-aos="fade-right" data-aos-duration="1000">
          <img 
            src="/storage/images/headshot.jpg" 
            alt="Strider White - Senior Software Developer" 
            class="w-full rounded-3xl shadow-2xl"
          >
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Hi, I'm Strider
          </h2>
          <p class="text-2xl text-slate-700 mb-6 leading-relaxed">
            I help businesses scale by automating manual processes and building custom software that saves time and money.
          </p>
          <p class="text-xl text-slate-600 mb-8 leading-relaxed">
            Nearly a decade turning operational bottlenecks into automated workflows. Enterprise quality at competitive rates, no agency markup.
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center text-lg text-slate-700">
              <i class="fas fa-check-circle text-accent text-2xl mr-3"></i>
              Laravel Certified
            </div>
            <div class="flex items-center text-lg text-slate-700">
              <i class="fas fa-check-circle text-accent text-2xl mr-3"></i>
              Google Cybersecurity Certified
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- Parallax Banner -->
    <ParallaxSection imageSrc="/storage/images/1.jpg" height="400px">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-aos="fade-up" data-aos-duration="1000">
          I Don't Just Build Software, I Run Businesses With It
        </h2>
        <p class="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          Nearly a decade building production systems. Business owner. Technical lead. Senior architect.
        </p>
      </div>
    </ParallaxSection>

    <!-- Services Preview -->
    <SectionContainer background="white">
      <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          How I Help Businesses Save Time and Money
        </h2>
        <p class="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Automate manual processes, eliminate operational bottlenecks, and scale without adding headcount.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
          <ServiceCard
            icon="fas fa-code"
            title="Custom Software"
            description="Automate workflows that currently require hours of manual work. Modern, scalable systems built exactly to your needs."
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
          <ServiceCard
            icon="fas fa-brain"
            title="AI Automation"
            description="Free your team to focus on revenue-generating activities. Let AI handle repetitive tasks automatically."
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          <ServiceCard
            icon="fas fa-network-wired"
            title="Systems Integration"
            description="Eliminate data entry errors and save hours daily. Connect your existing tools into one seamless workflow."
          />
        </div>
      </div>

      <div class="text-center mt-14" data-aos="fade-up" data-aos-duration="800">
        <CTAButton href="/services" variant="primary">
          <span class="text-primary text-lg">Learn More About Services</span>
        </CTAButton>
      </div>
    </SectionContainer>

    <!-- Testimonials Placeholder -->
    <SectionContainer background="gray">
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Trusted by Businesses
        </h2>
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <TestimonialPlaceholder />
      </div>
    </SectionContainer>

    <!-- CTA Section with Parallax -->
    <ParallaxSection imageSrc="/storage/images/2.jpg" height="400px">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-aos="fade-up" data-aos-duration="1000">
          Ready to Automate and Scale?
        </h2>
        <p class="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          Let's discuss how custom software can save your business time and money. No sales pressure, just practical solutions.
        </p>
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <CTAButton href="/contact" variant="primary">
            Get Your Free Consultation
          </CTAButton>
        </div>
      </div>
    </ParallaxSection>
  </PublicLayout>
</template>
