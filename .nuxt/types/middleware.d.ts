import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "D:/project/blog/node_modules/.pnpm/nuxt@3.5.1_@types+node@18.15.12/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}