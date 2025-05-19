import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/pages/e0t00nk/GSpoWorld/' : '/', // 仅生产环境添加 base
  // ...其他配置
}));