/** @type {import('next').NextConfig} */



const isProd = process.env.NODE_ENV === 'production';



const repoName = 'VIBEFIT'; 



const nextConfig = {

  output: 'export',



  basePath: isProd ? `/${repoName}` : '',

  assetPrefix: isProd ? `/${repoName}/` : '',



  images: {

    unoptimized: true,

    

    remotePatterns: [

      {

        protocol: "https",

        hostname: "m.media-amazon.com",

      }

    ]

  },

};



export default nextConfig;