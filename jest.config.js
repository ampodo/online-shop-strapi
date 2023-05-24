module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
    // Add any additional Jest configuration options as needed
     // Add this configuration option to support ES modules
    transformIgnorePatterns: [
    "/node_modules/(?!(axios)/)",
         ],
   setupFilesAfterEnv: ['./src/setupTests.js'],
  };

  