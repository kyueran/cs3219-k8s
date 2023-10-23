require('dotenv').config();

const nextConfig = {
  env: {
    FRONTEND_SERVICE: process.env.FRONTEND_SERVICE,
    QUESTION_SERVICE: process.env.QUESTION_SERVICE,
    USER_SERVICE: process.env.USER_SERVICE,
    MATCHING_SERVICE: process.env.MATCHING_SERVICE,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/question/:path*",
  //       destination: "/",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
