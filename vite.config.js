import { defineConfig } from 'vite';

// Sandbox URLs change between sessions. Keep host checks enabled while
// allowing the domains used by the temporary public preview gateways.
const allowedHosts = ['.sandbox.novita.ai', '.e2b.dev'];

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts,
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts,
  },
});
