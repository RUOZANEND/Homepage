const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "Colsro's Blog"; // 个人网站名字

const BLOG_URL = "https://blog.cols.ro"; // 个人网站链接（请填写完整链接）

const GITHUB = ""; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = ""; // 背景图片url，留空默认为必应每日图片

const SORT_DATA = [
  { sortId: 1, title: "Me" },
  { sortId: 2, title: "Links" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "Home",
    subtitle: "Colsro",
    url: "/",
    icon: "https://blog.cols.ro/icons/zrlab-acc.svg"
  },{
    pageId: 2,
    sortId: 1,
    title: "Blog",
    subtitle: "ZRLAB",
    url: "https://blog.cols.ro/",
    icon: "https://blog.cols.ro/icons/icon.jpg"
  },{
    pageId: 3,
    sortId: 1,
    title: "AS140506",
    subtitle: "实名上网",
    url: "https://zrglobal.network/",
    icon: "https://blog.cols.ro/icons/zrlab-abc.svg"
  },{
    pageId: 4,
    sortId: 1,
    title: "Z-API",
    subtitle: "没有api233",
    url: "https://api.cols.ro/",
    icon: "https://blog.cols.ro/icons/zrlab-abc.svg"
  },
  {
    pageId: 1,
    sortId: 2,
    title: "Dreamy.WJY",
    subtitle: "一条有理想的咸鱼",
    url: "https://wjy.me/",
    icon: "https://blog.cols.ro/imgs/avatar/wjy.png"
  },{
    pageId: 2,
    sortId: 2,
    title: "Akara's Blog",
    subtitle: "AS YYDS",
    url: "https://blog.akr.moe/",
    icon: "https://blog.cols.ro/imgs/avatar/akr.png"
  },{
    pageId: 3,
    sortId: 2,
    title: "Dejavu's Blog",
    subtitle: "Dejavu's Moe",
    url: "https://www.dejavu.moe/",
    icon: "https://blog.cols.ro/imgs/avatar/dejavu.png"
  },{
    pageId: 4,
    sortId: 2,
    title: "LamGC",
    subtitle: "永远保持热爱",
    url: "https://blog.lamgc.moe/",
    icon: "https://blog.cols.ro/imgs/avatar/lamgc.png"
  },{
    pageId: 5,
    sortId: 2,
    title: "186526's Blog",
    subtitle: "啥都不会的屑",
    url: "https://blog.186526.xyz/",
    icon: "https://blog.cols.ro/imgs/avatar/186526.png"
  },{
    pageId: 6,
    sortId: 2,
    title: "陈YF的博客",
    subtitle: "在互联网角落挣扎",
    url: "https://blog.cyfan.top/",
    icon: "https://blog.cols.ro/imgs/avatar/cyfan.png"
  },{
    pageId: 7,
    sortId: 2,
    title: "KUKU",
    subtitle: "一只咸鱼？？？",
    url: "https://www.kuku.me/",
    icon: "https://blog.cols.ro/imgs/avatar/kuku.png"
  },{
    pageId: 8,
    sortId: 2,
    title: "远方博客",
    subtitle: "因为喜欢，所以折腾！",
    url: "https://blog.ltyuanfang.cn/",
    icon: "https://blog.cols.ro/imgs/avatar/ltyuanfang.png"
  },{
    pageId: 9,
    sortId: 2,
    title: "杏铃の小本",
    subtitle: "分享教程&游戏",
    url: "https://杏铃.top/",
    icon: "https://blog.cols.ro/imgs/avatar/66ccff.png"
  },{
    pageId: 10,
    sortId: 2,
    title: "更多～",
    subtitle: "More...",
    url: "https://blog.cols.ro/links",
    icon: "https://blog.cols.ro/imgs/avatar.jpg"
  }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "嗨，别来无恙"
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
