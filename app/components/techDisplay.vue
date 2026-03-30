<template>
  <div class="projects" ref="revealContainer">
    <div
      class="centered"
      v-for="tech in techStack"
      :key="tech.label"
    >
      <div :class="tech.class + ' text-4xl icon'" />
      <p>{{ tech.label }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const techStack = [
  {
    class: "i-bxl:typescript",
    label: "Typescript",
  },
  {
    class: "i-bxl:tailwind-css",
    label: "Tailwind CSS",
  },
  {
    class: "i-file-icons:nestjs",
    label: "Nest JS",
  },
  {
    class: "i-akar-icons:node-fill",
    label: "Node JS",
  },
  {
    class: "i-simple-icons:mongodb",
    label: "MongoDB",
  },
  {
    class: "i-akar-icons:react-fill",
    label: "React",
  },
  {
    class: "i-file-icons:jest",
    label: "Jest",
  },
  {
    class: "i-simple-icons:testinglibrary",
    label: "RTL",
  },
  {
    class: "i-akar-icons:vue-fill",
    label: "Vue 3",
  },
  {
    class: "i-mdi:nuxt",
    label: "Nuxt",
  },
  {
    class: "i-akar-icons:nextjs-fill",
    label: "Next.js",
  },
  {
    class: "i-mdi:docker",
    label: "Docker",
  },
  {
    class: "i-mdi:google-cloud",
    label: "Google Cloud",
  },
  {
    class: "i-mdi:aws",
    label: "AWS",
  },
  {
    class: "i-simple-icons:datadog",
    label: "Datadog",
  },
  {
    class: "i-simple-icons:stripe",
    label: "Stripe",
  },
  {
    class: "i-simple-icons:openai",
    label: "OpenAI",
  },
  {
    class: "i-simple-icons:pnpm",
    label: "pnpm",
  },
];

useScrollReveal('.centered', 0.4);
</script>

<style scoped>
.projects {
  width: 100%;
  display: grid;
  justify-self: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 10px;
}
.centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  filter: blur(4px);
  translate: -40% 0;
  transition: opacity 0.4s ease-in-out, filter 0.4s ease-in-out,
    translate 0.4s ease-in-out;
  animation: out 2.4s ease-in-out both;
}
.centered.show {
  opacity: 1;
  filter: blur(0);
  translate: 0;
}
.centered:hover {
  animation: in 0.1s ease-in-out both;
}

@keyframes out {
  from {
    color: var(--slider-1);
  }
  to {
    color: inherit;
  }
}

@keyframes in {
  from {
    color: inherit;
  }
  to {
    color: var(--slider-1);
  }
}
</style>
