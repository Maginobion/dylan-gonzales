<template>
  <form>
    <div class="container">
      <div class="inputBlock">
        <input
          type="text"
          :placeholder="$t(`contactName`)"
          name="name"
          id="name"
          v-model="name"
        />
        <label for="name" v-t="'contactName'" />
      </div>
      <div class="inputBlock">
        <input
          type="text"
          pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{1,}[.]{1}[a-zA-Z0-9]{2,}"
          name="mail"
          :placeholder="$t(`contactEmail`)"
          id="mail"
          v-model="email"
        />
        <label for="mail" v-t="'contactEmail'" />
      </div>
      <div class="inputBlock">
        <input
          type="text"
          name="subject"
          :placeholder="$t(`contactSubject`)"
          id="subject"
          v-model="subject"
        />
        <label for="subject" v-t="'contactSubject'" />
      </div>
      <div class="inputBlock">
        <textarea
          type="text"
          name="message"
          :placeholder="$t(`contactMessage`)"
          id="message"
          v-model="message"
        />
        <label for="message" v-t="'contactMessage'" />
      </div>
      <button @click.prevent="send" v-t="'contactButton'" />
      <div class="status">
        <ul>
          <li class="errors" v-for="error in status" :key="error">
            {{ error }}
          </li>
          <li v-if="success" class="success">{{ success }}</li>
        </ul>
      </div>
    </div>
  </form>
</template>

<style scoped>
form {
  padding: 2rem 8rem;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2.5rem;
}

label {
  position: absolute;
  top: 0;
  transition: 0.2s all ease-in-out;
}

.inputBlock input,
.inputBlock textarea {
  position: relative;
  width: 100%;
  padding: 4px 10px;
  z-index: 1;
  resize: none;
}

.inputBlock {
  position: relative;
}
.inputBlock:focus-within input:placeholder-shown + label,
.inputBlock:focus-within textarea:placeholder-shown + label {
  color: var(--bg);
  background-color: var(--error-color);
  border-radius: 4px;
  font-size: 0.9rem;
  padding: 2px 6px;
  translate: 0 -26px;
}

input:not(:placeholder-shown):valid + label,
textarea:not(:placeholder-shown):valid + label {
  color: var(--bg);
  border-radius: 4px;
  font-size: 0.9rem;
  padding: 2px 7px;
  translate: 0 -26px;
  background-color: var(--color-primary);
}

input:not(:placeholder-shown):valid + label::after,
textarea:not(:placeholder-shown):valid + label::after {
  transition: all 1s ease-in-out;
  content: "✓";
  font-size: calc(1em - 1px);
  margin: 0 1px 0 10px;
}

input:not(:placeholder-shown):invalid + label,
textarea:not(:placeholder-shown):invalid + label {
  color: var(--bg);
  background-color: var(--error-color);
  border-radius: 4px;
  font-size: 0.9rem;
  padding: 2px 6px;
  translate: 0 -26px;
}

input::placeholder,
textarea::placeholder {
  --translating: 0 0;
  position: absolute;
  transition: 0.4s all ease-in-out;
  translate: var(--translating);
}

.inputBlock:focus-within input::placeholder,
.inputBlock:focus-within textarea::placeholder {
  --translating: 0 -26px;
  animation-name: hide;
  animation-duration: 1s;
  animation-direction: alternate;
}

button {
  width: min-content;
  padding: 6px 18px;
  margin: auto;
  color: var(--color);
  background-color: var(--color-primary);
  border: 0;
  border-radius: 2px;
}

textarea {
  font-family: Arial, Helvetica, sans-serif;
}
.errors {
  color: var(--error-color);
}
.success {
  color: var(--success-color);
}

@keyframes hide {
  0% {
    --translating: 0 0;
  }
  99% {
    --translating: 0 -26px;
  }
  100% {
    display: none;
  }
}

@media screen and (max-width: 800px) {
  form {
    padding: 2rem 0;
  }
  .container {
    padding: 0;
  }
}
</style>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
const status = ref<string[]>([]);
const success = ref("");

const { t, locale } = useI18n();

watch(locale, () => {
  status.value = [];
});
watch(name, () => {
  status.value = [];
});
watch(email, () => {
  status.value = [];
});
watch(subject, () => {
  status.value = [];
});
watch(message, () => {
  status.value = [];
});

const regexString = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{1,}[.]{1}[a-zA-Z0-9]{2,}";
const emailRegex = new RegExp(regexString, "g");

const send = async (): Promise<void> => {
  status.value = [];
  if (name.value === "") status.value.push(t("nameEmpty"));
  if (email.value === "") status.value.push(t("emailEmpty"));
  else if (!emailRegex.test(email.value)) status.value.push(t("emailError"));
  if (subject.value === "") status.value.push(t("subjectEmpty"));
  if (message.value === "") status.value.push(t("messageEmpty"));
  if (status.value.length === 0) {
    const result = await $fetch("/api/mailer", {
      method: "POST",
      body: {
        name: name.value,
        email: email.value,
        text: message.value,
        subject: subject.value,
      },
    }).catch((err) => console.log(err));
    const resultStatus =
      result?.accepted && result.accepted.length > 0
        ? t("sendingSuccess")
        : t("sendingError");
    success.value = resultStatus;
  }
};
</script>
