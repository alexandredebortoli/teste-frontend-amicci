import Rollbar from "rollbar";

const VITE_ROLLBAR_ACCESS_TOKEN = import.meta.env.VITE_ROLLBAR_ACCESS_TOKEN;
const VITE_ROLLBAR_ENVIRONMENT = import.meta.env.VITE_ROLLBAR_ENVIRONMENT;

export const rollbarConfig: Rollbar.Configuration = {
  accessToken: VITE_ROLLBAR_ACCESS_TOKEN,
  environment: VITE_ROLLBAR_ENVIRONMENT || "testenv",
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    client: {
      javascript: {
        code_version: "1.0.0",
        source_map_enabled: true,
      },
    },
  },
};
