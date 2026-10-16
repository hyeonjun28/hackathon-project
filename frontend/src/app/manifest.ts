import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "자취생 하루 영양 채우기",
    short_name: "하루영양",
    description: "영수증 재료로 집 메뉴, 공강·동선으로 학교 메뉴",
    start_url: "/",
    display: "standalone",
    theme_color: "#fafafa",
    background_color: "#fafafa",
    lang: "ko",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
