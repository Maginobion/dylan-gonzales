<template>
  <form @submit.prevent="send">
    <div class="form-grid">
      <div class="input-group">
        <input
          id="name"
          type="text"
          name="name"
          v-model="name"
          placeholder=" "
        />
        <label for="name">{{ $t("contactName") }}</label>
      </div>
      <div class="input-group">
        <input
          id="mail"
          type="text"
          name="mail"
          pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{1,}[.]{1}[a-zA-Z0-9]{2,}"
          v-model="email"
          placeholder=" "
        />
        <label for="mail">{{ $t("contactEmail") }}</label>
      </div>
      <div class="input-group full-width">
        <input
          id="subject"
          type="text"
          name="subject"
          v-model="subject"
          placeholder=" "
        />
        <label for="subject">{{ $t("contactSubject") }}</label>
      </div>
      <div class="input-group full-width">
        <textarea
          id="message"
          name="message"
          v-model="message"
          rows="5"
          placeholder=" "
        />
        <label for="message">{{ $t("contactMessage") }}</label>
      </div>
    </div>

    <div v-if="status.length || success" class="feedback">
      <p v-for="error in status" :key="error" class="error-msg">{{ error }}</p>
      <p v-if="success" class="success-msg">{{ success }}</p>
    </div>

    <button type="submit" class="submit-btn">
      <span>{{ $t("contactButton") }}</span>
      <div class="i-mdi:send text-lg" />
    </button>
  </form>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
const status = ref<string[]>([]);
const success = ref("");

const { t, locale } = useI18n();

watch([locale, name, email, subject, message], () => {
  status.value = [];
});

const regexString = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{1,}[.]{1}[a-zA-Z0-9]{2,}";
const emailRegex = new RegExp(regexString, "g");

const send = async (): Promise<void> => {
  status.value = [];
  success.value = "";
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

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.full-width {
  grid-column: 1 / -1;
}

/* ── Floating label inputs ── */
.input-group {
  position: relative;
}

.input-group input,
.input-group textarea {
  box-sizing: border-box;
  width: 100%;
  padding: 14px 16px;
  font-size: 15px;
  font-family: inherit;
  color: var(--color);
  background: transparent;
  border: 1px solid rgba(21, 136, 118, 0.25);
  border-radius: 8px;
  outline: none;
  resize: none;
  transition: border-color 0.3s ease;
}

.input-group input:focus,
.input-group textarea:focus {
  border-color: var(--color-primary);
}

.input-group label {
  position: absolute;
  top: 14px;
  left: 14px;
  font-size: 15px;
  color: var(--color);
  opacity: 0.5;
  pointer-events: none;
  background: var(--bg);
  padding: 0 4px;
  transition: all 0.2s ease;
}

.input-group input:focus + label,
.input-group input:not(:placeholder-shown) + label,
.input-group textarea:focus + label,
.input-group textarea:not(:placeholder-shown) + label {
  top: -8px;
  left: 12px;
  font-size: 12px;
  opacity: 1;
  color: var(--color-primary);
}

/* Validation states */
.input-group input:not(:placeholder-shown):invalid + label {
  color: var(--error-color);
}

.input-group input:not(:placeholder-shown):invalid {
  border-color: var(--error-color);
}

/* ── Submit button ── */
.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  align-self: center;
  padding: 12px 32px;
  font-size: 15px;
  font-weight: 600;
  color: var(--bg);
  background-color: var(--color-primary);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.submit-btn:hover {
  opacity: 0.85;
  transform: translateY(-1px);
}

.submit-btn:active {
  transform: translateY(0);
}

/* ── Feedback messages ── */
.feedback {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.error-msg {
  color: var(--error-color);
  font-size: 14px;
  margin: 0;
}

.success-msg {
  color: var(--success-color);
  font-size: 14px;
  margin: 0;
}

/* ── Responsive ── */
@media screen and (max-width: 500px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
