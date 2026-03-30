<template>
  <div>
    <NuxtLayout>
      <NuxtPage
        :transition="{
          name: 'page',
          mode: 'out-in',
          onBeforeEnter,
        }"
      />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const t = useI18n();

const onBeforeEnter = async () => {
  await t.finalizePendingLocaleChange();
};

const config = useAppConfig();

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Dylan Gonzales",
        jobTitle: "Fullstack Developer",
        url: "https://dylan-gonzales.vercel.app",
        email: "dylangonzales.dev@gmail.com",
        sameAs: [
          "https://www.linkedin.com/in/conexiondirecta/",
          "https://github.com/Maginobion",
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "National Technological University",
        },
        knowsLanguage: ["English", "Spanish", "Japanese"],
      }),
    },
  ],
});

const theme = computed(() => (config.theme.dark ? "dark-mode" : ""));

const siteUrl = "https://dylan-gonzales.vercel.app";

useHead({
  titleTemplate: (title) => (title ? `Maginobion - ${title}` : "Maginobion"),
  htmlAttrs: [
    {
      lang: t.locale,
    },
  ],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  charset: "utf-8",
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  bodyAttrs: {
    class: theme,
  },
  meta: [
    { name: "description", content: "Dylan Gonzales — Fullstack Developer from Peru. Portfolio showcasing projects in React, Vue, Next.js, AWS, and Google Cloud." },
    { name: "author", content: "Dylan Gonzales" },
    { name: "theme-color", content: "#158876" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Dylan Gonzales Portfolio" },
    { property: "og:title", content: "Dylan Gonzales — Fullstack Developer" },
    { property: "og:description", content: "Portfolio showcasing projects in React, Vue, Next.js, AWS, and Google Cloud." },
    { property: "og:url", content: siteUrl },
    { property: "og:image", content: `${siteUrl}/Dylan Gonzales.webp` },
    { property: "og:locale", content: "en_US" },
    { property: "og:locale:alternate", content: "es_ES" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Dylan Gonzales — Fullstack Developer" },
    { name: "twitter:description", content: "Portfolio showcasing projects in React, Vue, Next.js, AWS, and Google Cloud." },
    { name: "twitter:image", content: `${siteUrl}/Dylan Gonzales.webp` },
  ],
});
</script>

<style scoped>
:global(body) {
  color: var(--color);
  background-color: var(--bg);
  font-family: "OpenSans";
  transition: 0.6s all;
}
</style>
