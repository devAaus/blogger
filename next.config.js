/** @type {import("next").NextConfig} */
const config = {
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'utfs.io',
         }
      ]
   },
};

export default config;
