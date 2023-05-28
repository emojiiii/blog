import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "D:/project/blog/node_modules/.pnpm/nuxt@3.5.1_@types+node@18.15.12/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}