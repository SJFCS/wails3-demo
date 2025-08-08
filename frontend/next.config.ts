import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",

    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    trailingSlash: true,
  
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,

    // Optional: Change the output directory `out` -> `dist`
    distDir: "dist",

    compress: false,
    
    // 关闭内置图片优化，以确保静态导出时不会尝试调用优化服务
    images: {
        unoptimized: true,  
    },    

};

export default nextConfig;



