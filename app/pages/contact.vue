<template>
  <div class="contact-page">
    <div class="header">
      <h1>{{ $t("contactTitle") }}</h1>
      <p>{{ $t("contactFirst") }}</p>
      <p>{{ $t("contactSecond") }}</p>
    </div>
    <ContactCard />
    <div class="direct">
      <p>{{ $t("contactDirect") }}</p>
      <a href="mailto:dylangonzales.dev@gmail.com">
        dylangonzales.dev@gmail.com
      </a>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Contact",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with Dylan Gonzales — Fullstack Developer available for projects and collaboration.",
    },
  ],
});
</script>

<style scoped>
.contact-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 24px 80px;
}

.header {
  margin-bottom: 36px;
}

h1 {
  font-size: clamp(36px, 7vw, 56px);
  font-weight: 800;
  color: var(--color);
  margin-bottom: 12px;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--border-color)
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 5s ease-in-out infinite;
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

.header p {
  color: var(--color);
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.8;
}

.direct {
  margin-top: 32px;
  text-align: center;
}

.direct p {
  color: var(--color);
  opacity: 0.6;
  font-size: 14px;
  margin-bottom: 4px;
}

.direct a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: opacity 0.3s ease;
}

.direct a:hover {
  opacity: 0.7;
}

@media screen and (max-width: 500px) {
  .contact-page {
    padding: 0 16px 60px;
  }
}
</style>
