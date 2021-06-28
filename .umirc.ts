/*
 * @Author: your name
 * @Date: 2021-06-27 17:27:19
 * @LastEditTime: 2021-06-28 07:37:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pomelo-design/.umirc.ts
 */
import { defineConfig } from 'dumi';

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
});
