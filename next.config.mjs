import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
const baseConfig = {
  webpack: (config, { dev, isServer }) => {
    if (dev && isServer) {
      // Prevent stale server chunk caches from poisoning the dev runtime.
      config.cache = false;
    }
    return config;
  },
};

export default function nextConfig(phase) {
  return {
    ...baseConfig,
    // Keep dev artifacts isolated so build/start cannot corrupt active dev chunks.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
    // Production deploy target is static assets (`out/`) for Wrangler assets deploy.
    output: phase === PHASE_DEVELOPMENT_SERVER ? undefined : "export",
  };
}
