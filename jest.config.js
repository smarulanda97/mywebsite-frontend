const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/src/(.*)$": ["<rootDir>/src/$1"],
    "^@/components$": ["<rootDir>/src/components/index.ts"],
    "^@/adapters$": ["<rootDir>/src/adapters/index.ts"],
    "^@/contexts$": ["<rootDir>/src/contexts/index.ts"],
    "^@/hooks$": ["<rootDir>/src/hooks/index.ts"],
    "^@/interceptors$": ["<rootDir>/src/interceptors/index.ts"],
    "^@/mocks$": ["<rootDir>/src/mocks/index.ts"],
    "^@/models$": ["<rootDir>/src/models/index.ts"],
    "^@/pages$": ["<rootDir>/src/pages/index.ts"],
    "^@/redux$": ["<rootDir>/src/redux/index.ts"],
    "^@/services$": ["<rootDir>/src/services/index.ts"],
    "^@/styles$": ["<rootDir>/src/styles/index.ts"],
    "^@/lib$": ["<rootDir>/lib/index.ts"],
    "^@/utilities$": ["<rootDir>/src/utilities/index.ts"],
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
