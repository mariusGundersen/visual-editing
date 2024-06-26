/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

interface ImportMetaEnv {
  readonly SANITY_VISUAL_EDITING_ENABLED: string
  readonly SANITY_API_READ_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
