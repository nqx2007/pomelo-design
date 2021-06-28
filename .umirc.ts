/*
 * @Author: your name
 * @Date: 2021-06-27 17:27:19
 * @LastEditTime: 2021-06-29 07:03:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pomelo-design/.umirc.ts
 */
import { defineConfig } from 'dumi';

let BaseUrl = '/pomelo-design'; // 仓库的路径
export default defineConfig({
  title: 'pomelo-design',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
       ],
  ],
  //打包路径配置
  base: BaseUrl,
  publicPath: BaseUrl + '/', // 打包文件时，引入地址生成 publicPath/xxx.js
  exportStatic: {}, // 对每隔路由输出html
  dynamicImport: {}, // 动态导入

  hash: true, //加hash配置，清除缓存
  manifest: {
    // 内部发布系统规定必须配置
    fileName: 'manifest.json',
  },
});
