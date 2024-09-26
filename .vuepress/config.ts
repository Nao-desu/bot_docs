import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  title: "bot文档",
  description: "docs for koharu bot",
  bundler: viteBundler(),
  head: [['link', { rel: 'icon', href: '/Koharu_sign.png' }]],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "なお",
    primaryColor: '#b8d283',
    colorMode: 'dark', // dark, light, 默认 auto
    authorAvatar: "http://q1.qlogo.cn/g?b=qq&nk=2838596569&s=640",
    docsRepo: "https://github.com/Nao-desu/bot_docs",
    docsBranch: "main",
    docsDir: "",
    lastUpdatedText: "",
    commentConfig: {
      type: 'valine',
      options: {
        appId: '...', // your appId
        appKey: '...', // your appKey
      }
    },
    series: {
    },
    navbar: [
      { text: "主页", link: "/" },
      { text: "邀请入群", link: "https://bot.q.qq.com/s/fz7xxiuzu?id=102021217"},
      { text: "关于", link: "/docs/about.md" },
      { text: "反馈/联系作者", link: "/docs/feedback.md"},
      {
        text: "指令列表",
        children: [
          { text: "机器人管理", link: "/docs/manage/manage.md" },
          { text: "娱乐功能", link: "/docs/entertainment/entertainment.md" },
          { text: "实用工具", link: "/docs/tool/tool.md" },
          { text: "影之诗", link: "/docs/shadowverse/shadowverse.md" },
          { text: "学马仕", link: "/docs/gkmas/gkmas.md" },
        ],
      },
    ],
  }),
});
