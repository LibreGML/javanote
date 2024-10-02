import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🍧 Oumu Cloud Notes 🍥",
  description: "a java,lua,termux blog write by tzgml",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  markdown: {
    //行号显示
    lineNumbers: true,
  },
  appearance:'dark', 
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: '云笔记主页', link: '/' },
       {
        text: 'java云笔记',
        items: [
          { text: '基础知识', link: '/java/base/javabase' },
          { text: '面向对象', link: '/java/object/javaobject' },
          { text: '集合笔记', link: '/java/collection/javajihe' },
          { text: '专题整理', link: '/java/special/javaapi' }
        ]
      },
      { text: 'arch个人配置', link: 'arch/index' }
    ],
    sidebar: {
      '/java/base/': [
        {
          text: 'java基础',
          items: [
            { text: '数据类型', link: '/java/base/javabase#基本数据类型 (四类八种)' },
            { text: '运算符', link: '/java/base/javabase#运算符' },
            { text: '输入', link: '/java/base/javabase#scanner' },
            { text: '流程控制', link: '/java/base/javabase#流程控制' },
            { text: '随机数', link: '/java/base/javabase#随机数' },
            { text: '数组', link: '/java/base/javabase#数组' },
            { text: '方法', link: '/java/base/javabase#方法' },
            { text: 'Lambda', link: '/java/base/javabase#lambda' },
            { text: '方法引用', link: '/java/base/javabase#方法引用' },
            { text: '异常', link: '/java/base/javabase#异常' },
            { text: '正则表达式', link: '/java/base/javabase#正则表达式' }
          ]
        },
        {
          text: '面向对象',
          items: [
            { text: '面向对象', link: '/java/object/javaobject' },
          ]
        }
      ],
        '/java/object/': [
        {
          text: '面向对象',
          items: [
            { text: '类', link: '/java/object/javaobject#类' },
            { text: '对象', link: '/java/object/javaobject#对象' },
            { text: '构造器', link: '/java/object/javaobject#构造器' },
            { text: '封装', link: '/java/object/javaobject#封装' },
            { text: 'JavaBean', link: '/java/object/javaobject#javabean' },
            { text: '成员变量和局部变量区别', link: '/java/object/javaobject#成员变量和局部变量区别' },
            { text: '包', link: '/java/object/javaobject#包' },
            { text: 'String类', link: '/java/object/javaobject#string' },
            { text: 'static关键字', link: '/java/object/javaobject#static' },
            { text: '代码块', link: '/java/object/javaobject#代码块' },
            { text: '继承', link: '/java/object/javaobject#继承' },
            { text: '权限修饰符', link: '/java/object/javaobject#权限修饰符' },
            { text: '方法重写', link: '/java/object/javaobject#方法重写' },
            { text: 'final关键字', link: '/java/object/javaobject#final' },
            { text: 'abstract抽象类', link: '/java/object/javaobject#抽象类'},
            { text: '接口interface', link: '/java/object/javaobject#接口'},
            { text: '内部类', link: '/java/object/javaobject#内部类'},
            { text: '枚举类', link: '/java/object/javaobject#枚举类'},
            { text: '泛型', link: '/java/object/javaobject#泛型'},
          ]
          },
          {
            text: '集合专题',
            items: [
              { text: '集合专题', link: '/java/collection/javajihe' },
            ]
        }
      ],
        '/java/collection/': [
        {
          text: 'java集合专题',
          items: [
            { text: '集合概念', link: '/java/collection/javajihe#集合' },
            { text: 'Collection', link: '/java/collection/javajihe#collection' },
            { text: 'List', link: '/java/collection/javajihe#list' },
            { text: 'ArrayList', link: '/java/collection/javajihe#arraylist' },
            { text: 'LinkedList', link: '/java/collection/javajihe#linkedlist' },
            { text: 'Set', link: '/java/collection/javajihe#set' },
            { text: 'HashSet', link: '/java/collection/javajihe#hashset' },
            { text: 'LinkedHashSet', link: '/java/collection/javajihe#linkedhashset' },
            { text: 'TreeSet', link: '/java/collection/javajihe#treeset' },
            { text: 'Collections', link: '/java/collection/javajihe#collections' },
            { text: '并发修改异常', link: '/java/collection/javajihe#并发修改异常' },
            { text: '可变参数', link: '/java/collection/javajihe#可变参数' },
            { text: 'Map', link: '/java/collection/javajihe#map' },
            { text: 'HashMap', link: '/java/collection/javajihe#hashmap' },
            { text: 'LinkedHashMap', link: '/java/collection/javajihe#linkedhashmap' },
            { text: 'TreeMap', link: '/java/collection/javajihe#treemap' },
            { text: 'Stream流', link: '/java/collection/javajihe#stream' }
          ]
        },
        {
          text: '专题精讲',
          items: [
            { text: '专题精讲', link: '/java/special/javaapi' },
          ]
        }
      ],
          '/java/special/': [
        {
          text: 'java 专题',
          items: [
            { text: '线程', link: '/java/special/javaapi#线程' },
            { text: 'Runnable', link: '/java/special/javaapi#Runnable' },
            { text: 'Callable', link: '/java/special/javaapi#Callable' },
            { text: '线程方法', link: '/java/special/javaapi#线程方法' },
            { text: '线程同步', link: '/java/special/javaapi#线程同步' },
            { text: '线程池', link: '/java/special/javaapi#线程池' },
            { text: '创建线程池', link: '/java/special/javaapi#创建线程池' },
            { text: '并发与并行', link: '/java/special/javaapi#并发与并行' },
            { text: '线程生命周期', link: '/java/special/javaapi#线程生命周期' },            
            { text: '文件IO', link: '/java/special/javaapi#文件处理' },
            { text: '创建文件对象', link: '/java/special/javaapi#创建文件对象' },
            { text: '文件信息API', link: '/java/special/javaapi#文件信息' },
            { text: '文件增删API', link: '/java/special/javaapi#文件增删' },
            { text: '文件夹遍历', link: '/java/special/javaapi#文件夹遍历' },
            { text: '批量更改文件夹名称', link: '/java/special/javaapi#批量更改文件夹名称' },
            { text: '搜索文件', link: '/java/special/javaapi#搜索文件' },
            { text: '删除非空文件夹', link: '/java/special/javaapi#删除非空文件夹' },
            { text: '字符集', link: '/java/special/javaapi#字符集' },
            { text: '编解码', link: '/java/special/javaapi#编解码' },
            { text: '输入输出流', link: '/java/special/javaapi#输入输出流' },
            { text: 'InputStream', link: '/java/special/javaapi#inputstream' },
            { text: 'OutputStream', link: '/java/special/javaapi#outputstream' },
            { text: 'FileReader', link: '/java/special/javaapi#filereader' },
            { text: 'FileWriter', link: '/java/special/javaapi#filewriter' },
            { text: '缓冲流', link: '/java/special/javaapi#缓冲流' },
            { text: '转换流', link: '/java/special/javaapi#转换流' },
            { text: '打印流', link: '/java/special/javaapi#打印流' },
            { text: '序列化流', link: '/java/special/javaapi#序列化流' },
            { text: 'IO 框架', link: '/java/special/javaapi#文件读写框架' },
            { text: '网络编程', link: '/java/special/javaapi#网络编程' },
            { text: 'InetAddress', link: '/java/special/javaapi#inetaddress' },
            { text: 'UDP', link: '/java/special/javaapi#udp' },
            { text: 'TCP', link: '/java/special/javaapi#tcp' },
            { text: 'B/S 架构通信', link: '/java/special/javaapi#浏览器服务器架构' },
          ]
        },
        {
          text: 'Arch笔记',
          items: [
            { text: 'Arch笔记', link: '/arch/index.md' },
          ]
        }
      ],
           '/arch/index.md': [
        {
          text: 'Arch教程',
          items: [
            { text: '启动盘', link: '/arch/index.md#制作启动盘' },
            { text: '基本系统安装', link: '/arch/index.md#基本系统安装' },
            { text: '系统初始化', link: '/arch/index.md#系统初始化' },
            { text: '配置代理', link: '/arch/index.md#配置代理' },
            { text: '更换内核', link: '/arch/index.md#更换内核' },
            { text: '输入法', link: '/arch/index.md#配置输入法' },
            { text: 'neovim', link: '/arch/index.md#nvim' },
            { text: 'Shell', link: '/arch/index.md#Shell' },
            { text: 'wine', link: '/arch/index.md#wine' },
            { text: 'MineCraft', link: '/arch/index.md#minecraft' },
            { text: '内存与存储', link: '/arch/index.md#内存与存储' }
          ]
        },
        {
          text: '学习Java',
          items: [
            { text: 'java基础', link: '/java/base/javabase' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TZGML' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.59.59 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>'
        },
        link: 'https://gitee.com/tzgml',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'gitee'
      },
       {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#1697f6" d="M65.3 34.414L40.84 76.79L64 116.926l30.672-53.13l30.66-53.128H79Zm0 0"/><path fill="#aeddff" d="m33.34 63.797l1.605 2.793l22.88-39.649l9.402-16.273H2.668Zm0 0"/><path fill="#1867c0" d="M79 10.668C90.594 48.82 64 116.926 64 116.926L40.84 76.789Zm0 0"/><path fill="#7bc6ff" d="M67.227 10.668c-48.844 0-32.282 55.922-32.282 55.922Zm0 0"/></svg>'
        },
        link: 'https://ougml.pages.dev',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'vuetify'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"/><path fill="#F16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"/></svg>'
        },
        link: 'https://tzgml.pages.dev',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'layUI'
      },
       {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="150.32" height="128" viewBox="0 0 256 218"><path fill="#00C9DB" d="M226.859 160.16h-86.308c-.97 0-2.91 0-3.88.969l-64.973 51.397q-1.455 1.455 0 2.91c0 .97.97.97 1.94.97h154.19c15.517 0 29.093-13.578 28.124-30.063c-.97-15.516-14.547-26.184-29.093-26.184"/><path fill="#0D55FF" d="M156.445 106.018c-.97-7.758-4.849-15.516-10.667-20.365L45.893 6.133c-12.607-9.698-30.062-7.758-39.76 4.849s-7.758 30.062 4.849 39.76l72.731 58.185l-72.731 58.185c-12.607 9.698-14.547 27.154-4.849 39.76c9.698 12.607 27.153 14.547 39.76 4.85l99.885-81.46c6.788-5.819 10.667-13.577 10.667-22.305z"/><path fill="#7000F2" d="M255.952 188.282c0 15.516-12.607 28.123-28.123 28.123s-28.123-12.607-28.123-28.123s12.607-28.123 28.123-28.123s28.123 12.607 28.123 28.123"/></svg>'
        },
        link: 'https://tzgemolin.pages.dev',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'layUI'
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-2025 GeMoLin'
    }
  }
})
