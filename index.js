// fake-error-generator/index.js

const types = ["log", "warn", "error", "info"];

function fakeError({
  message = "Something went wrong!",
  type = "error",
  count = 1,
  delay = 0
} = {}) {
  if (!types.includes(type)) type = "error";

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      if (type === "log") console.log(`✅ ${message}`);
      if (type === "warn") console.warn(`⚠️ ${message}`);
      if (type === "error") console.error(`❌ ${message}`);
      if (type === "info") console.info(`ℹ️ ${message}`);
    }, delay * i);
  }
}

// Generate random fake errors
function randomFakeError({
  messages = ["Oops!", "Unexpected error!", "Failed to load data!"],
  count = 1,
  delay = 0
} = {}) {
  for (let i = 0; i < count; i++) {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    fakeError({ message: msg, type, count: 1, delay: delay * i });
  }
}

module.exports = {
  fakeError,
  randomFakeError
};
