import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    colorMode: "dark",
    colorModeSwitch: true,
    home: "/",
  }),

  title: "T的网络日志",
  description: "网络安全、渗透测试、编程语言、Writeup，随便写写，记录一些东西",
  base: "/Blog-vuepress/", // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    nav: [
      // 导航栏配置
      // { text: "前端基础", link: "/accumulate/" },
      // { text: "算法题库", link: "/algorithm/" },
      // { text: "微博", link: "https://baidu.com" },
    ],
    sidebar: "auto", // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
});
