<template>
  <div>
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="sr-only">Dylan Gonzales - Fullstack Developer</h1>
          <NuxtImg
            src="/myName.svg"
            :width="260"
            :height="64"
            preload
            :placeholder="[260, 64]"
            alt="Dylan Gonzales Logotype"
            class="logo"
            aria-hidden="true"
          />
          <p class="role">Fullstack Developer</p>
          <p class="description">{{ $t("description") }}</p>
          <div class="hero-actions">
            <a class="download-btn" :href="url" download>
              <div class="i-ant-design:cloud-download-outlined text-xl" />
              <span>{{ $t("download") }}</span>
            </a>
            <div class="socials">
              <a
                href="https://www.linkedin.com/in/conexiondirecta/"
                aria-label="LinkedIn"
                class="social-link"
              >
                <div class="i-mdi:linkedin text-2xl" />
              </a>
              <a
                href="https://github.com/Maginobion"
                aria-label="GitHub"
                class="social-link"
              >
                <div class="i-mdi:github text-2xl" />
              </a>
              <NuxtLinkLocale
                to="/contact"
                aria-label="Contact"
                class="social-link"
              >
                <div class="i-mdi:email-outline text-2xl" />
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
        <div class="hero-photo">
          <div class="photo-ring">
            <NuxtImg
              src="/Dylan Gonzales.webp"
              :width="260"
              :height="260"
              alt="Dylan Gonzales Portrait"
              class="selfie"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <h4 class="headTitle">{{ $t("techSubtitle") }}</h4>
      <TechDisplay />
    </section>
    <section>
      <h4 class="headTitle">{{ $t("projectSubtitle") }}</h4>
      <div class="projectFlex">
        <ProjectDisplay />
      </div>
    </section>
    <div class="nuxtlogo">
      <span>{{ $t("madeWith") }}</span>
      <a href="https://v3.nuxtjs.org/" class="linkCont">
        <span>Nuxt 3</span>
        <img
          class="nuxt-icon"
          alt="Nuxt Framework Icon"
          style="height: 20px; width: 20px"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: `Time to showcase my skills. Let's start.`,
    },
  ],
});

const url = computed(() =>
  locale.value === "en"
    ? "/[English] Dylan Gonzales Resume.pdf"
    : "/[Spanish] Dylan Gonzales CV.pdf"
);
</script>

<style scoped>
/* ── Hero section ── */
.hero {
  padding: 40px 24px 60px;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  max-width: 900px;
  margin: 0 auto;
}

.hero-text {
  display: flex;
  flex-direction: column;
  max-width: 440px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.logo {
  margin-bottom: 8px;
  filter: var(--logo-filter);
  transition: filter 0.3s ease;
}

.role {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-primary);
  margin: 0 0 16px;
  letter-spacing: 0.5px;
}

.description {
  color: var(--color);
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.8;
  margin: 0 0 24px;
}

/* ── Actions row ── */
.hero-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: var(--color-primary);
  color: var(--bg);
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.download-btn:hover {
  opacity: 0.85;
  transform: translateY(-1px);
}

.socials {
  display: flex;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  color: var(--color);
  opacity: 0.5;
  text-decoration: none;
  transition: opacity 0.3s ease, color 0.3s ease, background-color 0.3s ease;
}

.social-link:hover {
  opacity: 1;
  color: var(--color-primary);
  background-color: rgba(21, 136, 118, 0.1);
}

/* ── Photo ── */
.hero-photo {
  flex-shrink: 0;
}

.photo-ring {
  position: relative;
  width: 260px;
  height: 260px;
  border-radius: 16px;
  padding: 3px;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--border-color)
  );
}

.selfie {
  width: 100%;
  height: 100%;
  border-radius: 13px;
  object-fit: cover;
  display: block;
}

/* ── Rest of page ── */
p {
  color: var(--color);
}

.nuxt-icon {
  content: var(--source);
  transition: 1s all;
}

.nuxtlogo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0 16px 0;
  gap: 4px;
}

.linkCont {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #00c58e;
}

a {
  text-decoration: none;
}

.headTitle {
  text-align: center;
  padding: 12px 0;
}

section {
  min-height: 42vh;
  padding: 20px 24px;
}

.projectFlex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

/* ── Responsive ── */
@media screen and (max-width: 800px) {
  .hero-content {
    flex-direction: column-reverse;
    gap: 32px;
    text-align: center;
  }

  .hero-text {
    align-items: center;
  }

  .hero-actions {
    flex-direction: column;
    gap: 16px;
  }

  .photo-ring {
    width: 200px;
    height: 200px;
  }
}

@media screen and (max-width: 500px) {
  .hero {
    padding: 20px 16px 40px;
  }

  .photo-ring {
    width: 160px;
    height: 160px;
  }
}
</style>
