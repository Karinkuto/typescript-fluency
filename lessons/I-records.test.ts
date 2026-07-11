type Environment = "development" | "production" | "staging";

// TODO: replace `unknown` with a Record type that restricts keys to Environment.
// Once correct, the `@ts-expect-error` below should be satisfied (no complaint).
type Configurations = Record<
  Environment,
  { apiBaseUrl: string; timeout: number }
>;

const configurations: Configurations = {
  development: { apiBaseUrl: "http://localhost:8080", timeout: 5000 },
  production: { apiBaseUrl: "https://api.example.com", timeout: 10000 },
  staging: { apiBaseUrl: "https://staging.example.com", timeout: 8000 },

  // @ts-expect-error notAllowed is not a valid Environment key
  notAllowed: { apiBaseUrl: "https://staging.example.com", timeout: 8000 },
};

export {};
