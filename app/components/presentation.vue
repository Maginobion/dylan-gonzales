<template>
  <div class="container" ref="revealContainer">
    <!-- About Section -->
    <div class="about-section">
      <h1 class="title">{{ $t("aboutMe") }}</h1>
      <div class="paragraphs">
        <p
          v-for="(key, i) in aboutKeys"
          :key="key"
          class="fade-paragraph"
          :style="{ animationDelay: `${i * 0.18}s` }"
        >
          {{ $t(key) }}
        </p>
      </div>
    </div>

    <!-- Stats -->
    <div class="stats">
      <div
        v-for="(stat, i) in stats"
        :key="stat.label"
        class="stat-card reveal"
        :style="{ transitionDelay: `${i * 0.12}s` }"
      >
        <span class="stat-number">{{ stat.value }}</span>
        <span class="stat-label">{{ $t(stat.label) }}</span>
      </div>
    </div>

    <!-- Experience Timeline -->
    <h2 class="section-title reveal">{{ $t("experienceTitle") }}</h2>
    <div class="timeline">
      <div
        v-for="(job, i) in experience"
        :key="job.company"
        class="timeline-item reveal"
        :style="{ transitionDelay: `${i * 0.1}s` }"
      >
        <div class="timeline-dot" />
        <div class="timeline-content">
          <div class="timeline-header">
            <strong>{{ job.role }}</strong>
            <span class="timeline-date">{{ job.dates }}</span>
          </div>
          <div class="timeline-company">
            {{ job.company }} &middot; {{ job.location }}
          </div>
        </div>
      </div>
    </div>

    <!-- Education -->
    <h2 class="section-title reveal">{{ $t("educationTitle") }}</h2>
    <div class="education-card reveal">
      <div class="education-degree">B.S. Computer Engineering</div>
      <div class="education-school">
        National Technological University &middot; Lima, Peru
      </div>
      <div class="timeline-date">2019 - 2023</div>
    </div>

    <!-- CTA -->
    <NuxtLink to="/contact" class="cta reveal">
      <span>{{ $t("aboutMeButton") }}</span>
      <span class="cta-arrow">&rarr;</span>
    </NuxtLink>
  </div>
</template>

<script setup>
const aboutKeys = [
  "aboutMeFirst",
  "aboutMeSecond",
  "aboutMeThird",
  "aboutMeFourth",
];

const stats = [
  { value: "5+", label: "statYears" },
  { value: "5", label: "statCompanies" },
  { value: "3", label: "statCountries" },
];

const experience = [
  {
    role: "Software Engineer",
    company: "FullTimeForce",
    location: "Ohio, US",
    dates: "2023 - Present",
  },
  {
    role: "Software Analyst",
    company: "ISP Consulting",
    location: "Lima, Peru",
    dates: "2023",
  },
  {
    role: "Software Engineer",
    company: "Truora",
    location: "Cali, Colombia",
    dates: "2022 - 2023",
  },
  {
    role: "Software Engineer",
    company: "Glup",
    location: "Lima, Peru",
    dates: "2022",
  },
  {
    role: "Software Engineer",
    company: "Bu Creativo",
    location: "Lima, Peru",
    dates: "2021 - 2022",
  },
];

useScrollReveal(".reveal", 0.2);
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 680px;
  padding: 0 24px 80px;
}

/* ── Title with animated gradient ── */
.title {
  font-size: clamp(42px, 8vw, 70px);
  font-weight: 800;
  margin-bottom: 24px;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--border-color),
    var(--glow),
    var(--color-primary)
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 6s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* ── Paragraph stagger entrance ── */
.paragraphs {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.fade-paragraph {
  color: var(--color);
  font-size: 17px;
  line-height: 1.7;
  opacity: 0;
  transform: translateY(12px);
  animation: fade-up 0.5s ease forwards;
}

@keyframes fade-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Stats cards ── */
.stats {
  display: flex;
  gap: 16px;
  margin: 48px 0 40px;
}

.stat-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px;
  border-radius: 12px;
  border: 1px solid rgba(21, 136, 118, 0.25);
  background-color: rgba(21, 136, 118, 0.06);
  transition: border-color 0.4s ease, background-color 0.4s ease;
}

.stat-card:hover {
  border-color: var(--color-primary);
  background-color: rgba(21, 136, 118, 0.14);
}

.stat-card:hover .stat-number {
  color: var(--border-color);
}

.stat-card:hover .stat-label {
  color: var(--color-primary);
  opacity: 1;
}

.stat-number {
  font-size: 32px;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
  transition: color 0.4s ease;
}

.stat-label {
  font-size: 13px;
  color: var(--color);
  opacity: 0.7;
  margin-top: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.4s ease, opacity 0.4s ease;
}

/* ── Section titles ── */
.section-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--color);
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid
    color-mix(in srgb, var(--color-primary) 30%, transparent);
}

/* ── Experience timeline ── */
.timeline {
  position: relative;
  padding-left: 24px;
  margin-bottom: 48px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 7px;
  top: 4px;
  bottom: 4px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--color-primary),
    var(--border-color)
  );
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  padding-bottom: 24px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  top: 6px;
  left: -23px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-primary);
  border: 2px solid var(--bg);
  box-shadow: 0 0 0 2px var(--color-primary);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.3);
  box-shadow: 0 0 0 3px var(--border-color);
}

.timeline-content {
  padding: 12px 16px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--color-primary) 4%, var(--bg));
  border: 1px solid color-mix(in srgb, var(--color-primary) 12%, transparent);
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.timeline-item:hover .timeline-content {
  border-color: color-mix(in srgb, var(--color-primary) 35%, transparent);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}

.timeline-header strong {
  color: var(--color);
  font-size: 16px;
}

.timeline-date {
  font-size: 13px;
  color: var(--color-primary);
  font-weight: 600;
  white-space: nowrap;
}

.timeline-company {
  font-size: 14px;
  color: var(--color);
  opacity: 0.65;
  margin-top: 2px;
}

/* ── Education ── */
.education-card {
  padding: 16px 20px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--color-primary) 4%, var(--bg));
  border: 1px solid color-mix(in srgb, var(--color-primary) 12%, transparent);
  margin-bottom: 48px;
  transition: border-color 0.3s ease;
}

.education-card:hover {
  border-color: color-mix(in srgb, var(--color-primary) 35%, transparent);
}

.education-degree {
  font-size: 16px;
  font-weight: 700;
  color: var(--color);
}

.education-school {
  font-size: 14px;
  color: var(--color);
  opacity: 0.65;
  margin-top: 2px;
}

/* ── CTA button ── */
.cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 10px;
  background-color: var(--color-primary);
  color: var(--bg);
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px
    color-mix(in srgb, var(--color-primary) 40%, transparent);
}

.cta-arrow {
  display: inline-block;
  transition: transform 0.3s ease;
  font-size: 20px;
}

.cta:hover .cta-arrow {
  transform: translateX(4px);
}

/* ── Scroll reveal ── */
.reveal {
  opacity: 0;
  translate: 0 20px;
  transition: opacity 0.5s ease, translate 0.5s ease;
}

.reveal.show {
  opacity: 1;
  translate: 0;
}

/* ── Responsive ── */
@media screen and (max-width: 500px) {
  .container {
    padding: 0 16px 60px;
  }

  .stats {
    gap: 10px;
    margin: 32px 0 28px;
  }

  .stat-card {
    padding: 14px 8px;
  }

  .stat-number {
    font-size: 26px;
  }

  .timeline-header {
    flex-direction: column;
    gap: 2px;
  }
}
</style>
