const { fakeError, randomFakeError } = require("./index");

// Single custom error
fakeError({ message: "This is a test error!", type: "error" });

// Multiple warnings with delay
fakeError({ message: "Watch out!", type: "warn", count: 3, delay: 500 });

// Random fake errors
randomFakeError({ messages: ["Fail!", "Crash!", "404 Not Found!"], count: 5, delay: 300 });
