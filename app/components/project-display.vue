<template>
  <article v-for="item in data" :key="item.title" class="projectCard">
    <div class="cardContent">
      <div class="textSide">
        <div class="textHeader">
          <h1>{{ item.title }}</h1>
          <div v-if="item.company" class="companyChip">
            <img
              v-if="item.company.logo"
              :src="item.company.logo"
              :alt="item.company.name"
              class="companyLogo"
            />
            <span>{{ item.company.name }}</span>
          </div>
        </div>
        <div class="techFlex">
          <div
            v-for="logo in item.stack"
            :key="logo + item.title"
            :class="'i-' + tech[logo] + ' text-2xl'"
          />
        </div>
        <p class="description">{{ $t(item.description) }}</p>
        <div class="buttonFlex">
          <LinkButton
            :link="item.repo"
            classProp="i-ant-design:github-filled text-2xl"
            content="Repo"
          />
          <LinkButton
            :link="item.live"
            classProp="i-fluent:live-20-regular text-2xl"
            content="Live"
          />
        </div>
      </div>
      <div class="imageSide">
        <nuxt-img :src="item.img" :alt="item.alt" class="image" loading="lazy" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import buCreativoLogo from "~/assets/images/bu-creativo.png";
import fulltimeforceLogo from "~/assets/images/fulltimeforce.jpeg";
import glupLogo from "~/assets/images/glup.jpeg";
import ispConsultingLogo from "~/assets/images/ispconsulting.jpeg";
import truoraLogo from "~/assets/images/truora.jpeg";

useScrollReveal(".projectCard", 0.2);

type AvailableTech =
  | "react"
  | "rtl"
  | "next"
  | "tailwind"
  | "jest"
  | "nuxt"
  | "laravel"
  | "vue";

interface Project {
  title: string;
  description: string;
  img: string;
  alt: string;
  stack: AvailableTech[];
  repo: string;
  live: string;
  company?: {
    name: string;
    logo: string;
  };
}

const tech: Record<AvailableTech, string> = {
  react: "akar-icons:react-fill",
  rtl: "simple-icons:testinglibrary",
  next: "akar-icons:nextjs-fill",
  tailwind: "bxl:tailwind-css",
  jest: "file-icons:jest",
  nuxt: "mdi:nuxt",
  laravel: "cib:laravel",
  vue: "akar-icons:vue-fill",
};

const data: Project[] = [
  {
    title: "Everything Money",
    description: "everythingMoneyDesc",
    img: "/everything-money.png",
    alt: "EverythingMoney financial news platform",
    company: {
      name: "FullTimeForce",
      logo: fulltimeforceLogo,
    },
    stack: ["react", "next", "tailwind"],
    repo: "",
    live: "https://everythingmoney.com/",
  },
  {
    title: "Foxbel Music",
    description: "foxbelDesc",
    img: "/foxbel.webp",
    alt: "Spotify-like web application",
    stack: ["vue", "tailwind"],
    repo: "https://github.com/Maginobion/foxbel-music",
    live: "https://shiny-bienenstitch-665b69.netlify.app/",
  },
  {
    title: "Truora",
    description: "truoraDesc",
    img: "/truora.png",
    alt: "Truora identity validation platform",
    company: {
      name: "Truora",
      logo: truoraLogo,
    },
    stack: ["react", "next"],
    repo: "",
    live: "https://www.truora.com/",
  },
  {
    title: "Falabella Logistics",
    description: "falabellaDesc",
    img: "/falabella.png",
    alt: "Falabella retail logistics platform",
    company: {
      name: "ISP Consulting",
      logo: ispConsultingLogo,
    },
    stack: ["react", "next"],
    repo: "",
    live: "https://www.falabella.com.pe/falabella-pe",
  },
  {
    title: "Valhalla (Zeia)",
    description: "zeiaDesc",
    img: "/zeia.webp",
    alt: "IoT air quality monitoring dashboard",
    company: {
      name: "Glup",
      logo: glupLogo,
    },
    stack: ["react", "tailwind"],
    repo: "",
    live: "",
  },
  {
    title: "Aguinaga's Lab",
    description: "aguinagaDesc",
    img: "/aguina.webp",
    alt: "Medical web platform",
    company: {
      name: "Bu Creativo",
      logo: buCreativoLogo,
    },
    stack: ["react", "next", "tailwind"],
    repo: "",
    live: "",
  },
  {
    title: "Pokemon CRUD",
    description: "pokemonDesc",
    img: "/poke.webp",
    alt: "Pokemon-creating web application",
    stack: ["react", "jest", "rtl", "tailwind"],
    repo: "https://github.com/Maginobion/pokemon-crud",
    live: "https://pokemon-crud-bice.vercel.app/",
  },
  {
    title: "Portafolio V2",
    description: "portfolioDesc",
    img: "/portfolio.webp",
    alt: "Medical web platform",
    stack: ["vue", "nuxt"],
    repo: "https://github.com/Maginobion/nuxt-portfolio",
    live: "https://nuxt-portfolio-xi.vercel.app/",
  },
  {
    title: "Portafolio V1",
    description: "portfolioDesc",
    img: "/portfolio.webp",
    alt: "Medical web platform",
    stack: ["vue", "laravel"],
    repo: "https://github.com/Maginobion/personal-portfolio",
    live: "",
  },
];
</script>

<style scoped>
.projectCard {
  opacity: 0;
  translate: -80% 0;
  filter: blur(4px);
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  width: 900px;
  overflow: hidden;
  transition: opacity 0.4s ease-in-out, filter 0.4s ease-in-out,
    translate 0.4s ease-in-out;
  background: var(--bg);
}
.projectCard.show {
  opacity: 1;
  filter: blur(0);
  translate: 0;
}

.cardContent {
  display: flex;
  min-height: 280px;
}

.textSide {
  flex: 1;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
}

.textHeader {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.textHeader h1 {
  margin: 0;
  font-size: 1.6em;
}

.companyChip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid var(--color-primary);
  font-size: 0.8em;
  opacity: 0.85;
  white-space: nowrap;
}

.companyLogo {
  width: 18px;
  height: 18px;
  object-fit: contain;
  border-radius: 4px;
  background: white;
  padding: 1px;
}

.techFlex {
  display: flex;
  gap: 16px;
}

.description {
  margin: 4px 0;
  line-height: 1.5;
}

.buttonFlex {
  display: flex;
  gap: 14px;
  margin-top: 4px;
}

.imageSide {
  flex: 0 0 380px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 900px) {
  .projectCard {
    width: 85vw;
  }
  .cardContent {
    flex-direction: column-reverse;
  }
  .imageSide {
    flex: none;
    max-height: 200px;
  }
  .textSide {
    padding: 20px;
  }
  .textHeader h1 {
    font-size: 1.3em;
  }
}

@media (prefers-reduced-motion) {
  .projectCard {
    transition: none;
  }
}
</style>
