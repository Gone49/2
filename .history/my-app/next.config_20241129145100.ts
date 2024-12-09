module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'], // Add the allowed image hostname here
  },
  {
    "compilerOptions": {
      "sourceMap": true, // Ensure this is enabled
      "outDir": "./dist", // Ensure this points to the correct output directory
      "module": "ESNext", // Optional, but recommended for modern TypeScript code
      "target": "ESNext"  // Set to the appropriate target version
    }
  }
  
};
