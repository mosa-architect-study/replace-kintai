if (!process.env.BACKEND_SERVICE_BASE_URL) {
  throw new Error("BACKEND_SERVICE_BASE_URL is Missing");
}

export const BACKEND_SERVICE_BASE_URL = process.env.BACKEND_SERVICE_BASE_URL;
