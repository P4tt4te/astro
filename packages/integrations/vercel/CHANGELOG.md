# @astrojs/vercel

## 8.2.4

### Patch Changes

- Updated dependencies [[`f4e8889`](https://github.com/withastro/astro/commit/f4e8889c10c25aeb7650b389c35a70780d5ed172)]:
  - @astrojs/internal-helpers@0.7.0

## 8.2.3

### Patch Changes

- [#14077](https://github.com/withastro/astro/pull/14077) [`42ef004`](https://github.com/withastro/astro/commit/42ef00442cc685dd7452de13b476e42bffde9df3) Thanks [@jat001](https://github.com/jat001)! - Changes the default Node.js version of Vercel functions to 22

## 8.2.2

### Patch Changes

- [#14063](https://github.com/withastro/astro/pull/14063) [`de5a253`](https://github.com/withastro/astro/commit/de5a253aa85400c6b4c76379f4ab60707326cde5) Thanks [@RobbieTheWagner](https://github.com/RobbieTheWagner)! - Allow setting `domains` to `undefined` in `imagesConfig` so that `remotePatterns` can be better utilized for images from a variety of domains.

## 8.2.1

### Patch Changes

- [#13972](https://github.com/withastro/astro/pull/13972) [`db8f8be`](https://github.com/withastro/astro/commit/db8f8becc9508fa4f292d45c14af92ba59c414d1) Thanks [@ematipico](https://github.com/ematipico)! - Fixes the internal implementation of the new feature `experimentalStaticHeaders`, where dynamic routes
  were mapped to use always the same header.

## 8.2.0

### Minor Changes

- [#13965](https://github.com/withastro/astro/pull/13965) [`95ece06`](https://github.com/withastro/astro/commit/95ece0663ed160687ef21101f84b2adec0bffd01) Thanks [@ematipico](https://github.com/ematipico)! - Adds support for the [experimental static headers Astro feature](https://docs.astro.build/en/reference/adapter-reference/#experimentalstaticheaders).

  When the feature is enabled via option `experimentalStaticHeaders`, and [experimental Content Security Policy](https://docs.astro.build/en/reference/experimental-flags/csp/) is enabled, the adapter will generate `Response` headers for static pages, which allows support for CSP directives that are not supported inside a `<meta>` tag (e.g. `frame-ancestors`).

  ```js
  import { defineConfig } from 'astro/config';
  import vercel from '@astrojs/vercel';

  export default defineConfig({
    adapter: vercel({
      experimentalStaticHeaders: true,
    }),
    experimental: {
      cps: true,
    },
  });
  ```

### Patch Changes

- [#13917](https://github.com/withastro/astro/pull/13917) [`e615216`](https://github.com/withastro/astro/commit/e615216c55bca5d61b8c5c1b49d62671f0238509) Thanks [@ascorbic](https://github.com/ascorbic)! - The responsive images feature introduced behind a flag in [v5.0.0](https://github.com/withastro/astro/blob/main/packages/astro/CHANGELOG.md#500) is no longer experimental and is available for general use.

  The new responsive images feature in Astro automatically generates optimized images for different screen sizes and resolutions, and applies the correct attributes to ensure that images are displayed correctly on all devices.

  Enable the `image.responsiveStyles` option in your Astro config. Then, set a `layout` attribute on any <Image /> or <Picture /> component, or configure a default `image.layout`, for instantly responsive images with automatically generated `srcset` and `sizes` attributes based on the image's dimensions and the layout type.

  Displaying images correctly on the web can be challenging, and is one of the most common performance issues seen in sites. This new feature simplifies the most challenging part of the process: serving your site visitor an image optimized for their viewing experience, and for your website's performance.

  For full details, see the updated [Image guide](https://docs.astro.build/en/guides/images/#responsive-image-behavior).

  #### Migration from Experimental Responsive Images

  The `experimental.responsiveImages` flag has been removed, and all experimental image configuration options have been renamed to their final names.

  If you were using the experimental responsive images feature, you'll need to update your configuration:

  ##### Remove the experimental flag

  ```diff
  export default defineConfig({
     experimental: {
  -    responsiveImages: true,
     },
  });
  ```

  ##### Update image configuration options

  During the experimental phase, default styles were applied automatically to responsive images. Now, you need to explicitly set the `responsiveStyles` option to `true` if you want these styles applied.

  ```diff
  export default defineConfig({
    image: {
  +    responsiveStyles: true,
    },
  });
  ```

  The experimental image configuration options have been renamed:

  **Before:**

  ```js
  export default defineConfig({
    image: {
      experimentalLayout: 'constrained',
      experimentalObjectFit: 'cover',
      experimentalObjectPosition: 'center',
      experimentalBreakpoints: [640, 750, 828, 1080, 1280],
      experimentalDefaultStyles: true,
    },
    experimental: {
      responsiveImages: true,
    },
  });
  ```

  **After:**

  ```js
  export default defineConfig({
    image: {
      layout: 'constrained',
      objectFit: 'cover',
      objectPosition: 'center',
      breakpoints: [640, 750, 828, 1080, 1280],
      responsiveStyles: true, // This is now *false* by default
    },
  });
  ```

  ##### Component usage remains the same

  The `layout`, `fit`, and `position` props on `<Image>` and `<Picture>` components work exactly the same as before:

  ```astro
  <Image
    src={myImage}
    alt="A responsive image"
    layout="constrained"
    fit="cover"
    position="center"
  />
  ```

  If you weren't using the experimental responsive images feature, no changes are required.

  Please see the [Image guide](https://docs.astro.build/en/guides/images/#responsive-image-behavior) for more information on using responsive images in Astro.

- Updated dependencies []:
  - @astrojs/underscore-redirects@1.0.0

## 8.1.5

### Patch Changes

- [#13679](https://github.com/withastro/astro/pull/13679) [`4a8f193`](https://github.com/withastro/astro/commit/4a8f193c444c30d154f868fc444a153a26124347) Thanks [@moonclavedev](https://github.com/moonclavedev)! - Handle SVG images correctly in build image service

## 8.1.4

### Patch Changes

- [#13591](https://github.com/withastro/astro/pull/13591) [`5dd2d3f`](https://github.com/withastro/astro/commit/5dd2d3fde8a138ed611dedf39ffa5dfeeed315f8) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Removes unused code

## 8.1.3

### Patch Changes

- [#13480](https://github.com/withastro/astro/pull/13480) [`12cc4d8`](https://github.com/withastro/astro/commit/12cc4d88f216ba3f684ddffb33d117baa7197726) Thanks [@ascorbic](https://github.com/ascorbic)! - Fixes a bug that caused external redirects to fail

## 8.1.2

### Patch Changes

- Updated dependencies [[`042d1de`](https://github.com/withastro/astro/commit/042d1de901fd9aa66157ce078b28bcd9786e1373)]:
  - @astrojs/internal-helpers@0.6.1

## 8.1.1

### Patch Changes

- [#13351](https://github.com/withastro/astro/pull/13351) [`fac32ad`](https://github.com/withastro/astro/commit/fac32ad98d66b73382f35d26a69352e566cd94d9) Thanks [@ascorbic](https://github.com/ascorbic)! - Ensures `srcset` for responsive images only contains allowed sizes

## 8.1.0

### Minor Changes

- [#13211](https://github.com/withastro/astro/pull/13211) [`7ea0aba`](https://github.com/withastro/astro/commit/7ea0aba053a70cc572c59cef2adc7cd07becfcd2) Thanks [@slawekkolodziej](https://github.com/slawekkolodziej)! - Adds support for regular expressions in ISR exclude list

  Previously, excluding a page from ISR required explicitly listing it in `isr.exclude`. As websites grew larger, maintaining this list became increasingly difficult, especially for multiple API routes and pages that needed server-side rendering.

  To address this, ISR exclusions now support regular expressions, allowing for more flexible and scalable configurations.

  ```js
  // astro.config.mjs
  import vercel from '@astrojs/vercel/serverless';

  export default defineConfig({
    output: 'server',
    adapter: vercel({
      isr: {
        exclude: [
          '/preview', // Excludes a specific route (e.g., pages/preview.astro)
          '/auth/[page]', // Excludes a dynamic route (e.g., pages/auth/[page].astro)
          /^\/api\/.+/, // Excludes all routes starting with /api/
        ],
      },
    }),
  });
  ```

### Patch Changes

- [#13323](https://github.com/withastro/astro/pull/13323) [`80926fa`](https://github.com/withastro/astro/commit/80926fadc06492fcae55f105582b9dc8279da6b3) Thanks [@ematipico](https://github.com/ematipico)! - Updates `esbuild` and `vite` to the latest to avoid false positives audits warnings caused by `esbuild`.

- Updated dependencies [[`1e11f5e`](https://github.com/withastro/astro/commit/1e11f5e8b722b179e382f3c792cd961b2b51f61b)]:
  - @astrojs/internal-helpers@0.6.0

## 8.0.8

### Patch Changes

- [#13304](https://github.com/withastro/astro/pull/13304) [`6efd57d`](https://github.com/withastro/astro/commit/6efd57d1747052e9a61d8867dd5941d0bf65ff22) Thanks [@ematipico](https://github.com/ematipico)! - Fixes a small issue where the package was pulling an outdated version of its internal dependencies.

- [#13299](https://github.com/withastro/astro/pull/13299) [`2e1321e`](https://github.com/withastro/astro/commit/2e1321e9d5b27da3e86bc4021e4136661a8055aa) Thanks [@bluwy](https://github.com/bluwy)! - Uses `tinyglobby` for globbing files

## 8.0.7

### Patch Changes

- [#13224](https://github.com/withastro/astro/pull/13224) [`8e5b89c`](https://github.com/withastro/astro/commit/8e5b89c5eb3e68585c0ab84c2c516d75adcf2997) Thanks [@ascorbic](https://github.com/ascorbic)! - Unpins `@vercel/routing-utils` dependency as bug has been fixed

## 8.0.6

### Patch Changes

- [#528](https://github.com/withastro/adapters/pull/528) [`5c2ea1f`](https://github.com/withastro/adapters/commit/5c2ea1f3972934a8de03ddffaaf01f15f58968f3) Thanks [@ascorbic](https://github.com/ascorbic)! - Pins `@vercel/routing-utils` to avoid broken version

## 8.0.5

### Patch Changes

- [#519](https://github.com/withastro/adapters/pull/519) [`641d7d5`](https://github.com/withastro/adapters/commit/641d7d588d2d77f519201e583f0275db4260575c) Thanks [@ascorbic](https://github.com/ascorbic)! - Updates edge middleware to support esnext syntax

- [#525](https://github.com/withastro/adapters/pull/525) [`6ef9a6f`](https://github.com/withastro/adapters/commit/6ef9a6f958b089ac2890f94a015c978e0b254bda) Thanks [@ascorbic](https://github.com/ascorbic)! - Fixes a bug that caused redirect loops when trailingSlash was set

## 8.0.4

### Patch Changes

- [#516](https://github.com/withastro/adapters/pull/516) [`3fe04eb`](https://github.com/withastro/adapters/commit/3fe04ebec19d1d2f490df373a102cbd265a1c658) Thanks [@ascorbic](https://github.com/ascorbic)! - Fixes a bug that prevented integration-generated static assets from being deployed with non-static sites

## 8.0.3

### Patch Changes

- [#508](https://github.com/withastro/adapters/pull/508) [`af69a12`](https://github.com/withastro/adapters/commit/af69a12cf38bc5a0653b1f03f2600ec8a451ceec) Thanks [@ascorbic](https://github.com/ascorbic)! - Fixes a bug that prevented static assets generated by integrations from being deployed

## 8.0.2

### Patch Changes

- [#454](https://github.com/withastro/adapters/pull/454) [`83cedad`](https://github.com/withastro/adapters/commit/83cedad780bf7a23ae9f6ca0c44a7b7f1c1767e1) Thanks [@alexanderniebuhr](https://github.com/alexanderniebuhr)! - Improves Astro 5 support

- [#501](https://github.com/withastro/adapters/pull/501) [`012b31d`](https://github.com/withastro/adapters/commit/012b31d98ce87c1199eb38b7aba2a28b7c1cf8cc) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Refactor of the redirects logic

## 8.0.1

### Patch Changes

- [#472](https://github.com/withastro/adapters/pull/472) [`d9eed7e`](https://github.com/withastro/adapters/commit/d9eed7e73b0d27d62043c58c2459d00fd8e98303) Thanks [@bluwy](https://github.com/bluwy)! - Add back support for Node 22 on Vercel serverless that was fixed in v7 but lost in v8

## 8.0.0

### Major Changes

- [#375](https://github.com/withastro/adapters/pull/375) [`e7881f7`](https://github.com/withastro/adapters/commit/e7881f7928c6ca62d43c763033f9ed065a907f3b) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updates internal code to works with Astro 5 changes to hybrid rendering. No changes are necessary to your project, apart from using Astro 5

- [#397](https://github.com/withastro/adapters/pull/397) [`776a266`](https://github.com/withastro/adapters/commit/776a26670cf483e37ec0e6eba27a0bde09db0146) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Welcome to the Astro 5 beta! This release has no changes from the latest alpha of this package, but it does bring us one step closer to the final, stable release.

  Starting from this release, no breaking changes will be introduced unless absolutely necessary.

  To learn how to upgrade, check out the [Astro v5.0 upgrade guide in our beta docs site](https://5-0-0-beta.docs.astro.build/en/guides/upgrade-to/v5/).

- [#377](https://github.com/withastro/adapters/pull/377) [`b77f99c`](https://github.com/withastro/adapters/commit/b77f99c92dae715033ebcee2af25f0f1054572b8) Thanks [@alexanderniebuhr](https://github.com/alexanderniebuhr)! - Updates the adapter to use new `IntegrationRouteData` type

- [#451](https://github.com/withastro/adapters/pull/451) [`f248546`](https://github.com/withastro/adapters/commit/f24854669a2a3da79d8bf1e89b0b54063df0668c) Thanks [@ematipico](https://github.com/ematipico)! - Updates esbuild dependency to v0.24.0

- [#384](https://github.com/withastro/adapters/pull/384) [`7d83f60`](https://github.com/withastro/adapters/commit/7d83f601b8fbe5b4787ec640c0d6e46199f0ff95) Thanks [@bluwy](https://github.com/bluwy)! - Removes deprecated `speedInsights` option in favor of Vercel's direct support: https://vercel.com/docs/speed-insights/quickstart

- [#392](https://github.com/withastro/adapters/pull/392) [`3a49eb7`](https://github.com/withastro/adapters/commit/3a49eb7802c44212ccfab06034b7dc5f2b060e94) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updates internal code for Astro 5 changes. No changes is required to your project, apart from using Astro 5

### Minor Changes

- [#424](https://github.com/withastro/adapters/pull/424) [`3351348`](https://github.com/withastro/adapters/commit/33513484d21f79b6e01cf9cdb790df7f63a53aec) Thanks [@ematipico](https://github.com/ematipico)! - Deprecates the entrypoints `@astrojs/vercel/serverless` and `@astrojs/vercel/static`. These will continue to work but are no longer documented and will be removed in a future version. We recommend updating to the `@astrojs/vercel` entrypoint as soon as you are able:

  ```diff
  -import vercel from "@astrojs/vercel/static"
  +import vercel from "@astrojs/vercel"
  ```

  ```diff
  -import vercel from "@astrojs/vercel/serverless"
  +import vercel from "@astrojs/vercel"
  ```

- [#447](https://github.com/withastro/adapters/pull/447) [`7d9835f`](https://github.com/withastro/adapters/commit/7d9835fa8d460ec3fd0a1af42aad4e185a8d1636) Thanks [@laymonage](https://github.com/laymonage)! - Add support for Node 22 on Vercel serverless

- [#385](https://github.com/withastro/adapters/pull/385) [`bb725b7`](https://github.com/withastro/adapters/commit/bb725b7a430a01a3cd197e3e84381be4fa0c945c) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Cleans up `astro:env` support

### Patch Changes

- [#437](https://github.com/withastro/adapters/pull/437) [`b725b49`](https://github.com/withastro/adapters/commit/b725b4962e2ca10c8c7e3b7f59581cef64a1dfa0) Thanks [@ematipico](https://github.com/ematipico)! - Fixes a regression where the `@astrojs/vercel` single entry point for the adapter was causing some regressions in users projects.

## 8.0.0-beta.4

### Patch Changes

- [#437](https://github.com/withastro/adapters/pull/437) [`b725b49`](https://github.com/withastro/adapters/commit/b725b4962e2ca10c8c7e3b7f59581cef64a1dfa0) Thanks [@ematipico](https://github.com/ematipico)! - Fixes a regression where the `@astrojs/vercel` single entry point for the adapter was causing some regressions in users projects.

## 8.0.0-beta.3

### Major Changes

- [`f248546`](https://github.com/withastro/adapters/commit/f24854669a2a3da79d8bf1e89b0b54063df0668c) Thanks [@bluwy](https://github.com/bluwy)! - Updates esbuild dependency to v0.24.0

- [#384](https://github.com/withastro/adapters/pull/384) [`7d83f60`](https://github.com/withastro/adapters/commit/7d83f601b8fbe5b4787ec640c0d6e46199f0ff95) Thanks [@bluwy](https://github.com/bluwy)! - Removes deprecated `speedInsights` option in favor of Vercel's direct support: https://vercel.com/docs/speed-insights/quickstart

### Minor Changes

- [#424](https://github.com/withastro/adapters/pull/424) [`3351348`](https://github.com/withastro/adapters/commit/33513484d21f79b6e01cf9cdb790df7f63a53aec) Thanks [@ematipico](https://github.com/ematipico)! - Deprecates the entrypoints `@astrojs/vercel/serverless` and `@astrojs/vercel/static`. These will continue to work but are no longer documented and will be removed in a future version. We recommend updating to the `@astrojs/vercel` entrypoint as soon as you are able:

  ```diff
  -import vercel from "@astrojs/vercel/static"
  +import vercel from "@astrojs/vercel"
  ```

  ```diff
  -import vercel from "@astrojs/vercel/serverless"
  +import vercel from "@astrojs/vercel"
  ```

## 8.0.0-beta.2

### Major Changes

- [#375](https://github.com/withastro/adapters/pull/375) [`e7881f7`](https://github.com/withastro/adapters/commit/e7881f7928c6ca62d43c763033f9ed065a907f3b) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updates internal code to works with Astro 5 changes to hybrid rendering. No changes are necessary to your project, apart from using Astro 5

- [#397](https://github.com/withastro/adapters/pull/397) [`776a266`](https://github.com/withastro/adapters/commit/776a26670cf483e37ec0e6eba27a0bde09db0146) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Welcome to the Astro 5 beta! This release has no changes from the latest alpha of this package, but it does bring us one step closer to the final, stable release.

  Starting from this release, no breaking changes will be introduced unless absolutely necessary.

  To learn how to upgrade, check out the [Astro v5.0 upgrade guide in our beta docs site](https://5-0-0-beta.docs.astro.build/en/guides/upgrade-to/v5/).

- [#377](https://github.com/withastro/adapters/pull/377) [`b77f99c`](https://github.com/withastro/adapters/commit/b77f99c92dae715033ebcee2af25f0f1054572b8) Thanks [@alexanderniebuhr](https://github.com/alexanderniebuhr)! - Updates the adapter to use new `IntegrationRouteData` type

- [#392](https://github.com/withastro/adapters/pull/392) [`3a49eb7`](https://github.com/withastro/adapters/commit/3a49eb7802c44212ccfab06034b7dc5f2b060e94) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updates internal code for Astro 5 changes. No changes is required to your project, apart from using Astro 5

### Minor Changes

- [#385](https://github.com/withastro/adapters/pull/385) [`bb725b7`](https://github.com/withastro/adapters/commit/bb725b7a430a01a3cd197e3e84381be4fa0c945c) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Cleans up `astro:env` support

## 7.8.2

### Patch Changes

- [#373](https://github.com/withastro/adapters/pull/373) [`5b802a4`](https://github.com/withastro/adapters/commit/5b802a4099743c86418747872171bbe224caaa6d) Thanks [@hrabiel](https://github.com/hrabiel)! - Fix excluding routes with rest parameters from ISR

## 7.8.1

### Patch Changes

- [#381](https://github.com/withastro/adapters/pull/381) [`46fbb26`](https://github.com/withastro/adapters/commit/46fbb26175ab09d12f95dba63cfe76bdcc25ef59) Thanks [@matthewp](https://github.com/matthewp)! - Prevent crawling for dependencies outside of the workspace root

## 8.0.0-alpha.1

### Major Changes

- [#11679](https://github.com/withastro/astro/pull/11679) [`ea71b90`](https://github.com/withastro/astro/commit/ea71b90c9c08ddd1d3397c78e2e273fb799f7dbd) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Adds stable support for `astro:env`

- [#11770](https://github.com/withastro/astro/pull/11770) [`cfa6a47`](https://github.com/withastro/astro/commit/cfa6a47ac7a541f99fdad46a68d0cca6e5816cd5) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Removed support for the Squoosh image service. As the underlying library `libsquoosh` is no longer maintained, and the image service sees very little usage we have decided to remove it from Astro.

  Our recommendation is to use the base Sharp image service, which is more powerful, faster, and more actively maintained.

  ```diff
  - import { squooshImageService } from "astro/config";
  import { defineConfig } from "astro/config";

  export default defineConfig({
  -  image: {
  -    service: squooshImageService()
  -  }
  });
  ```

  If you are using this service, and cannot migrate to the base Sharp image service, a third-party extraction of the previous service is available here: https://github.com/Princesseuh/astro-image-service-squoosh

### Patch Changes

- [#11783](https://github.com/withastro/astro/pull/11783) [`fc81b01`](https://github.com/withastro/astro/commit/fc81b01bcdd43646bcc615b16bf0400a646445c8) Thanks [@matthewp](https://github.com/matthewp)! - Prevent race condition with Node 18

  Using Node 18 there can be a race condition where polyfill for the `crypto` global is not applied in time. This change ensures the polyfills run first.

## 8.0.0-alpha.0

### Major Changes

- [#11714](https://github.com/withastro/astro/pull/11714) [`8a53517`](https://github.com/withastro/astro/commit/8a5351737d6a14fc55f1dafad8f3b04079e81af6) Thanks [@matthewp](https://github.com/matthewp)! - Remove support for functionPerRoute

  This change removes support for the `functionPerRoute` option both in Astro and `@astrojs/vercel`.

  This option made it so that each route got built as separate entrypoints so that they could be loaded as separate functions. The hope was that by doing this it would decrease the size of each function. However in practice routes use most of the same code, and increases in function size limitations made the potential upsides less important.

  Additionally there are downsides to functionPerRoute, such as hitting limits on the number of functions per project. The feature also never worked with some Astro features like i18n domains and request rewriting.

  Given this, the feature has been removed from Astro.

### Patch Changes

- Updated dependencies [[`b6fbdaa`](https://github.com/withastro/astro/commit/b6fbdaa94a9ecec706a99e1938fbf5cd028c72e0), [`89bab1e`](https://github.com/withastro/astro/commit/89bab1e70786123fbe933a9d7a1b80c9334dcc5f), [`d74617c`](https://github.com/withastro/astro/commit/d74617cbd3278feba05909ec83db2d73d57a153e), [`e90f559`](https://github.com/withastro/astro/commit/e90f5593d23043579611452a84b9e18ad2407ef9), [`2df49a6`](https://github.com/withastro/astro/commit/2df49a6fb4f6d92fe45f7429430abe63defeacd6), [`8a53517`](https://github.com/withastro/astro/commit/8a5351737d6a14fc55f1dafad8f3b04079e81af6)]:
  - astro@5.0.0-alpha.0

## 7.8.0

### Minor Changes

- [#11728](https://github.com/withastro/astro/pull/11728) [`5ea02b1`](https://github.com/withastro/astro/commit/5ea02b12fdb9b8ca45b1229bb9d04bc3d1270e0f) Thanks [@matthewp](https://github.com/matthewp)! - Deprecates the `functionPerRoute` option

  This option is now deprecated, and will be removed entirely in Astro v5.0. We suggest removing this option from your configuration as soon as you are able to:

  ```diff
  import { defineConfig } from 'astro/config';
  import vercel from '@astrojs/vercel/serverless';

  export default defineConfig({
    // ...
    output: 'server',
    adapter: vercel({
  -     functionPerRoute: true,
    }),
  });
  ```

### Patch Changes

- [#11783](https://github.com/withastro/astro/pull/11783) [`fc81b01`](https://github.com/withastro/astro/commit/fc81b01bcdd43646bcc615b16bf0400a646445c8) Thanks [@matthewp](https://github.com/matthewp)! - Prevent race condition with Node 18

  Using Node 18 there can be a race condition where polyfill for the `crypto` global is not applied in time. This change ensures the polyfills run first.

## 7.7.2

### Patch Changes

- [#11323](https://github.com/withastro/astro/pull/11323) [`41064ce`](https://github.com/withastro/astro/commit/41064cee78c1cccd428f710a24c483aeb275fd95) Thanks [@ascorbic](https://github.com/ascorbic)! - Extracts fs helpers into shared internal-helpers module

- [#11296](https://github.com/withastro/astro/pull/11296) [`5848d97`](https://github.com/withastro/astro/commit/5848d9786768d1290de982670bcc7773280ef08d) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Fixes `astro:env` getSecret compatibility

- Updated dependencies [[`41064ce`](https://github.com/withastro/astro/commit/41064cee78c1cccd428f710a24c483aeb275fd95)]:
  - @astrojs/internal-helpers@0.4.1

## 7.7.1

### Patch Changes

- [#11261](https://github.com/withastro/astro/pull/11261) [`f5f8ed2`](https://github.com/withastro/astro/commit/f5f8ed275b76adfb11b7c3c1e800753a25416498) Thanks [@matthewp](https://github.com/matthewp)! - Fix backwards compat with Astro <= 4.9

- [#11227](https://github.com/withastro/astro/pull/11227) [`24ce898`](https://github.com/withastro/astro/commit/24ce8983e1e1b3c8ebebf2ac4de7bbf21a586e2e) Thanks [@matthewp](https://github.com/matthewp)! - In Vercel Edge, include cookies set by Astro.cookies.set

## 7.7.0

### Minor Changes

- [#11199](https://github.com/withastro/astro/pull/11199) [`2bdca27`](https://github.com/withastro/astro/commit/2bdca27ff4002efd330667b0b4ca3e00d5b7a2db) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Adds support for experimental `astro:env` released in Astro 4.10

## 7.6.0

### Minor Changes

- [#10761](https://github.com/withastro/astro/pull/10761) [`f0acd30`](https://github.com/withastro/astro/commit/f0acd30a12c380830884108f7cad67a31d879339) Thanks [@ematipico](https://github.com/ematipico)! - Implements the vercel skew protection

## 7.5.4

### Patch Changes

- [#10833](https://github.com/withastro/astro/pull/10833) [`8d5f3e8`](https://github.com/withastro/astro/commit/8d5f3e8656027023f9fda51c66b0213ffe16d3a5) Thanks [@renovate](https://github.com/apps/renovate)! - Updates `esbuild` dependency to v0.20. This should not affect projects in most cases.

## 7.5.3

### Patch Changes

- [#10756](https://github.com/withastro/astro/pull/10756) [`c75ededdb401cfa55e1ad2682d5e95494f49604e`](https://github.com/withastro/astro/commit/c75ededdb401cfa55e1ad2682d5e95494f49604e) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fixes `widths` and `densities` not working when using Vercel's Image Optimization.

  Note that you still need to make sure that the widths you're outputting are enabled in [the `imageConfig` property of the Vercel adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/#imagesconfig) in order for these properties to work.

## 7.5.2

### Patch Changes

- [#10611](https://github.com/withastro/astro/pull/10611) [`a9a3694a98060be9a33045bb0fcf92ccf1acff6f`](https://github.com/withastro/astro/commit/a9a3694a98060be9a33045bb0fcf92ccf1acff6f) Thanks [@jacobdalamb](https://github.com/jacobdalamb)! - Updates the supported version of Node.js

## 7.5.1

### Patch Changes

- [#10609](https://github.com/withastro/astro/pull/10609) [`31590d44ef8b7c96a757e9b835144d57d767383c`](https://github.com/withastro/astro/commit/31590d44ef8b7c96a757e9b835144d57d767383c) Thanks [@matthewp](https://github.com/matthewp)! - Move nft warnings behind verbose logging

## 7.5.0

### Minor Changes

- [#10513](https://github.com/withastro/astro/pull/10513) [`a573cc199a00d35410197ba4117c97764a984dc0`](https://github.com/withastro/astro/commit/a573cc199a00d35410197ba4117c97764a984dc0) Thanks [@tk04](https://github.com/tk04)! - The `isr.exclude` configuration can now include routes with dynamic and spread parameters.
  ```ts
  export default defineConfig({
      adapter: vercel({
          isr: {
              exclude: [
                  "/blog/[title]"
                  "/api/[...slug]",
              ]
          }
      })
  })
  ```

## 7.4.1

### Patch Changes

- Updated dependencies [[`20463a6c1e1271d8dc3cb0ab3419ee5c72abd218`](https://github.com/withastro/astro/commit/20463a6c1e1271d8dc3cb0ab3419ee5c72abd218)]:
  - @astrojs/internal-helpers@0.4.0

## 7.4.0

### Minor Changes

- [#10476](https://github.com/withastro/astro/pull/10476) [`cfbaa8a767b8794c2dcd8e164672195378be396a`](https://github.com/withastro/astro/commit/cfbaa8a767b8794c2dcd8e164672195378be396a) Thanks [@lilnasy](https://github.com/lilnasy)! - The special-case handling of `src/vercel-edge-middleware.js` file is now deprecated. This file allowed you to access the edge runtime's `RequestContext` object, and create the middleware `locals` from its fields. However, this object includes only one field - the `waitUntil()` function - which is now available directly as `ctx.locals.vercel.edge.waitUntil()`.

## 7.3.6

### Patch Changes

- Updated dependencies [[`1ea0a25b94125e4f6f2ac82b42f638e22d7bdffd`](https://github.com/withastro/astro/commit/1ea0a25b94125e4f6f2ac82b42f638e22d7bdffd)]:
  - @astrojs/internal-helpers@0.3.0

## 7.3.5

### Patch Changes

- [#10336](https://github.com/withastro/astro/pull/10336) [`f2e60a96754ed1d86001fe4d5d3a0c0ef657408d`](https://github.com/withastro/astro/commit/f2e60a96754ed1d86001fe4d5d3a0c0ef657408d) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Fixes an issue that was preventing the use of `sharp` in some cases and causing a runtime error

## 7.3.4

### Patch Changes

- [#10231](https://github.com/withastro/astro/pull/10231) [`ae2a10e1a768e31d243194694222932ffafb54cc`](https://github.com/withastro/astro/commit/ae2a10e1a768e31d243194694222932ffafb54cc) Thanks [@mingjunlu](https://github.com/mingjunlu)! - Fixes an issue where functions were also created for prerendered routes with `functionPerRoute` enabled.

## 7.3.3

### Patch Changes

- [#10215](https://github.com/withastro/astro/pull/10215) [`a013182d322a3969e39d647aad75ec10f8bd1ed7`](https://github.com/withastro/astro/commit/a013182d322a3969e39d647aad75ec10f8bd1ed7) Thanks [@matthewp](https://github.com/matthewp)! - Fixes edge middleware calling nested routes

## 7.3.2

### Patch Changes

- [#10194](https://github.com/withastro/astro/pull/10194) [`3cc20109277813ccb9578ca87a8b0d680a73c35c`](https://github.com/withastro/astro/commit/3cc20109277813ccb9578ca87a8b0d680a73c35c) Thanks [@matthewp](https://github.com/matthewp)! - Fix loading client-scripts in dev with ISR

## 7.3.1

### Patch Changes

- [#10082](https://github.com/withastro/astro/pull/10082) [`2ffc5721bc22631c44d90ac43ec27fdb0b5b2d1b`](https://github.com/withastro/astro/commit/2ffc5721bc22631c44d90ac43ec27fdb0b5b2d1b) Thanks [@florian-lefebvre](https://github.com/florian-lefebvre)! - Prevents infinite redirects when Astro `trailingSlash` configuration is set to `"always"` and "vercel.json" `trailingSlash` configuration is set to `true`

## 7.3.0

### Minor Changes

- [#9987](https://github.com/withastro/astro/pull/9987) [`0699f34d5c4481c027c4d29d73944f79f97008df`](https://github.com/withastro/astro/commit/0699f34d5c4481c027c4d29d73944f79f97008df) Thanks [@lilnasy](https://github.com/lilnasy)! - Implements verification for edge middleware. This is a security measure to ensure that your serverless functions are only ever called by your edge middleware and not a third party.

  When `edgeMiddleware` is enabled, the serverless function will now respond with `403 Forbidden` for requests that are not verified to have come from the generated edge middleware. No user action is necessary.

## 7.2.0

### Minor Changes

- [#9714](https://github.com/withastro/astro/pull/9714) [`e2fe51c828dc7ea8204788e59e3953fe36c97836`](https://github.com/withastro/astro/commit/e2fe51c828dc7ea8204788e59e3953fe36c97836) Thanks [@lilnasy](https://github.com/lilnasy)! - Introduces a new config option, `isr`, that allows you to deploy your project as an ISR function. [ISR (Incremental Static Regeneration)](https://vercel.com/docs/incremental-static-regeneration) caches your on-demand rendered pages in the same way as prerendered pages after first request.

  To enable this feature, set `isr` to true in your Vercel adapter configuration in `astro.config.mjs`:

  ```js
  export default defineConfig({
    output: 'server',
    adapter: vercel({ isr: true }),
  });
  ```

  ## Cache invalidation options

  By default, ISR responses are cached for the duration of your deployment. You can further control caching by setting an `expiration` time or prevent caching entirely for certain routes.

  ### Time-based invalidation

  You can change the length of time to cache routes this by configuring an `expiration` value in seconds:

  ```js
  export default defineConfig({
    output: 'server',
    adapter: vercel({
      isr: {
        // caches all pages on first request and saves for 1 day
        expiration: 60 * 60 * 24,
      },
    }),
  });
  ```

  ### Manual invalidation

  To implement Vercel's [Draft mode](https://vercel.com/docs/build-output-api/v3/features#draft-mode), or [On-Demand Incremental Static Regeneration (ISR)](https://vercel.com/docs/build-output-api/v3/features#on-demand-incremental-static-regeneration-isr), you can create a bypass token and provide it to the `isr` config along with the paths to exclude from caching:

  ```js
  export default defineConfig({
    output: 'server',
    adapter: vercel({
      isr: {
        // A secret random string that you create.
        bypassToken: '005556d774a8',
        // Paths that will always be served fresh.
        exclude: ['/api/invalidate'],
      },
    }),
  });
  ```

## 7.1.1

### Patch Changes

- [#9955](https://github.com/withastro/astro/pull/9955) [`bc1742df9423ba66e33dcbf65fbebf67a236175d`](https://github.com/withastro/astro/commit/bc1742df9423ba66e33dcbf65fbebf67a236175d) Thanks [@matthewp](https://github.com/matthewp)! - Fix regression with bundling of @libsql/client

## 7.1.0

### Minor Changes

- [#9143](https://github.com/withastro/astro/pull/9143) [`041fdd5c89920f7ccf944b095f29e451f78b0e28`](https://github.com/withastro/astro/commit/041fdd5c89920f7ccf944b095f29e451f78b0e28) Thanks [@ematipico](https://github.com/ematipico)! - Adds experimental support for internationalization domains

### Patch Changes

- [#9885](https://github.com/withastro/astro/pull/9885) [`49e0c24d7f90d00e986533fcf546665967540ce7`](https://github.com/withastro/astro/commit/49e0c24d7f90d00e986533fcf546665967540ce7) Thanks [@matthewp](https://github.com/matthewp)! - Better ignores for Vercel file-tracer

  The Vercel adapter has a file-tracer it uses to detect which files should be moved over to the `dist/` folder. When it's done, it prints warnings for things that it detected that maybe should be moved.

  This change expands how we do ignores so that:
  - Ignores happen within dot folders like `.pnpm`.
  - `@libsql/client` is ignored, a package we know is not bundled.

## 7.0.2

### Patch Changes

- [#9809](https://github.com/withastro/astro/pull/9809) [`3435b7f1e1ca38fdee8f3b89e2d2667f125d01b5`](https://github.com/withastro/astro/commit/3435b7f1e1ca38fdee8f3b89e2d2667f125d01b5) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where the serverless function ignored cookies added using Astro.cookies.

## 7.0.1

### Patch Changes

- [#9585](https://github.com/withastro/astro/pull/9585) [`05adaaa2d217a3ecb34244d9b40603f35cef4a37`](https://github.com/withastro/astro/commit/05adaaa2d217a3ecb34244d9b40603f35cef4a37) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where edge middleware did not work.

## 7.0.0

### Major Changes

- [#9661](https://github.com/withastro/astro/pull/9661) [`d6edc7540864cf5d294d7b881eb886a3804f6d05`](https://github.com/withastro/astro/commit/d6edc7540864cf5d294d7b881eb886a3804f6d05) Thanks [@ematipico](https://github.com/ematipico)! - **Breaking**: Minimum required Astro version is now 4.2.0.
  Reorganizes internals to be more maintainable.
  ***

## 6.1.4

### Patch Changes

- [#9648](https://github.com/withastro/astro/pull/9648) [`d7f1903cded3e864b392d1dd7502672d37936f11`](https://github.com/withastro/astro/commit/d7f1903cded3e864b392d1dd7502672d37936f11) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where the serverless function could not respond with a prerendered 404 page.

## 6.1.3

### Patch Changes

- [#9591](https://github.com/withastro/astro/pull/9591) [`22a5405b4a4b7948458ad170b0a7bde6954058c1`](https://github.com/withastro/astro/commit/22a5405b4a4b7948458ad170b0a7bde6954058c1) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where 404.astro was not used in static mode.

- [#9598](https://github.com/withastro/astro/pull/9598) [`bd8fa7acd23ba6e7afa2c435807bd5fd6b24f505`](https://github.com/withastro/astro/commit/bd8fa7acd23ba6e7afa2c435807bd5fd6b24f505) Thanks [@lilnasy](https://github.com/lilnasy)! - Marks the `speedInsights` configuration as deprecated. Vercel has migrated features of the Speed Insights API into a framework-agnostic library with `@vercel/speed-insights`. See [Vercel Speed Insights Quickstart](https://vercel.com/docs/speed-insights/quickstart) for instructions on how to use the library instead.

## 6.1.2

### Patch Changes

- [#9550](https://github.com/withastro/astro/pull/9550) [`7b586a6e23e25653814db9adea9674ec3a9bd535`](https://github.com/withastro/astro/commit/7b586a6e23e25653814db9adea9674ec3a9bd535) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where a build could not complete on Node 21.

## 6.1.1

### Patch Changes

- [#9479](https://github.com/withastro/astro/pull/9479) [`1baf0b0d3cbd0564954c2366a7278794fad6726e`](https://github.com/withastro/astro/commit/1baf0b0d3cbd0564954c2366a7278794fad6726e) Thanks [@sarah11918](https://github.com/sarah11918)! - Updates README

## 6.1.0

### Minor Changes

- [#9413](https://github.com/withastro/astro/pull/9413) [`836ab6214`](https://github.com/withastro/astro/commit/836ab6214e5ef778ef2db2c079f49e87ce70d711) Thanks [@jacobdalamb](https://github.com/jacobdalamb)! - Adds support for Node 20 (currently in `beta` on Vercel).

### Patch Changes

- [#9289](https://github.com/withastro/astro/pull/9289) [`8aeb0b579`](https://github.com/withastro/astro/commit/8aeb0b5797853c2eee7630b572d6abc503d59c6f) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where dots in redirects were incorrectly handled.

## 6.0.2

### Patch Changes

- [#9287](https://github.com/withastro/astro/pull/9287) [`1e342e34e`](https://github.com/withastro/astro/commit/1e342e34eb9cef465b838654cea7bb4b0d24e602) Thanks [@lilnasy](https://github.com/lilnasy)! - Fixes an issue where redirects did not work with the static adapter.

- [#9383](https://github.com/withastro/astro/pull/9383) [`bebf5cf22`](https://github.com/withastro/astro/commit/bebf5cf22d0d842670825aa961529e8b342e2b26) Thanks [@sarah11918](https://github.com/sarah11918)! - Fixes some incorrect code examples in the README documentation.

- [#9334](https://github.com/withastro/astro/pull/9334) [`dfbc70790`](https://github.com/withastro/astro/commit/dfbc7079081d3346713cb536358a3854362a2c95) Thanks [@Geo25rey](https://github.com/Geo25rey)! - Allows the edge middleware to be an async function.

## 6.0.1

### Patch Changes

- [#9348](https://github.com/withastro/astro/pull/9348) [`1685cc42b`](https://github.com/withastro/astro/commit/1685cc42b51603eb98b5ba3e072cf2d3953339f2) Thanks [@matthewp](https://github.com/matthewp)! - Uses the latest astro as the peerDependency

## 6.0.0

### Major Changes

- [#9199](https://github.com/withastro/astro/pull/9199) [`49aa215a0`](https://github.com/withastro/astro/commit/49aa215a01ee1c4805316c85bb0aea6cfbc25a31) Thanks [@lilnasy](https://github.com/lilnasy)! - The internals of the integration have been updated to support Astro 4.0. Make sure to upgrade your Astro version as Astro 3.0 is no longer supported.

- [#9184](https://github.com/withastro/astro/pull/9184) [`a145ac07e`](https://github.com/withastro/astro/commit/a145ac07e75927e13af62e28d13bc8217a362b8e) Thanks [@bluwy](https://github.com/bluwy)! - Removes deprecated `analytics` option. Use the `webAnalytics` option instead.

- [#9263](https://github.com/withastro/astro/pull/9263) [`3cbd8ea75`](https://github.com/withastro/astro/commit/3cbd8ea7534910e3beae396dcfa93ce87dcdd91f) Thanks [@bluwy](https://github.com/bluwy)! - Removes the deprecated `@astrojs/vercel/edge` export. You should use `@astrojs/vercel/serverless` instead with the `edgeMiddleware` option.

## 6.0.0-beta.2

### Major Changes

- [#9263](https://github.com/withastro/astro/pull/9263) [`3cbd8ea75`](https://github.com/withastro/astro/commit/3cbd8ea7534910e3beae396dcfa93ce87dcdd91f) Thanks [@bluwy](https://github.com/bluwy)! - Removes the deprecated `@astrojs/vercel/edge` export. You should use `@astrojs/vercel/serverless` instead with the `edgeMiddleware` option.

## 6.0.0-beta.1

### Major Changes

- [#9199](https://github.com/withastro/astro/pull/9199) [`49aa215a0`](https://github.com/withastro/astro/commit/49aa215a01ee1c4805316c85bb0aea6cfbc25a31) Thanks [@lilnasy](https://github.com/lilnasy)! - The internals of the integration have been updated to support Astro 4.0. Make sure to upgrade your Astro version as Astro 3.0 is no longer supported.

## 6.0.0-beta.0

### Major Changes

- [#9184](https://github.com/withastro/astro/pull/9184) [`a145ac07e`](https://github.com/withastro/astro/commit/a145ac07e75927e13af62e28d13bc8217a362b8e) Thanks [@bluwy](https://github.com/bluwy)! - Removes deprecated `analytics` option. Use the `webAnalytics` option instead.

### Patch Changes

- Updated dependencies [[`abf601233`](https://github.com/withastro/astro/commit/abf601233f8188d118a8cb063c777478d8d9f1a3), [`6201bbe96`](https://github.com/withastro/astro/commit/6201bbe96c2a083fb201e4a43a9bd88499821a3e), [`cdabf6ef0`](https://github.com/withastro/astro/commit/cdabf6ef02be7220fd2b6bdcef924ceca089381e), [`1c48ed286`](https://github.com/withastro/astro/commit/1c48ed286538ab9e354eca4e4dcd7c6385c96721), [`37697a2c5`](https://github.com/withastro/astro/commit/37697a2c5511572dc29c0a4ea46f90c2f62be8e6), [`bd0c2e9ae`](https://github.com/withastro/astro/commit/bd0c2e9ae3389a9d3085050c1e8134ae98dff299), [`0fe3a7ed5`](https://github.com/withastro/astro/commit/0fe3a7ed5d7bb1a9fce1623e84ba14104b51223c), [`710be505c`](https://github.com/withastro/astro/commit/710be505c9ddf416e77a75343d8cae9c497d72c6), [`153a5abb9`](https://github.com/withastro/astro/commit/153a5abb905042ac68b712514dc9ec387d3e6b17)]:
  - astro@4.0.0-beta.0

## 5.2.0

### Minor Changes

- [#8879](https://github.com/withastro/astro/pull/8879) [`754e4fd31`](https://github.com/withastro/astro/commit/754e4fd31ce49eadb2cf4951e941a48d11d10e73) Thanks [@lilnasy](https://github.com/lilnasy)! - The Vercel adapter now streams responses!

  This brings better performance to your visitors by showing them content as it is rendered. The browser can also start loading the required stylesheets and scripts much sooner, which ultimately results in faster full page loads.

## 5.1.0

### Minor Changes

- [#8867](https://github.com/withastro/astro/pull/8867) [`b209e5335`](https://github.com/withastro/astro/commit/b209e533584521c55f88b929f28ea9d5189045f9) Thanks [@lilnasy](https://github.com/lilnasy)! - You can now configure how long your functions can run before timing out.

  ```diff
  export default defineConfig({
      output: "server",
      adapter: vercel({
  +       maxDuration: 60
      }),
  });
  ```

### Patch Changes

- [#8896](https://github.com/withastro/astro/pull/8896) [`5dd1ed50b`](https://github.com/withastro/astro/commit/5dd1ed50b2f9428946b0b273e0ce8f13c19aa3b5) Thanks [@bluwy](https://github.com/bluwy)! - Prevents the Vercel serverless adapter from generating static redirect pages in hybrid mode

- Updated dependencies [[`26b77b8fe`](https://github.com/withastro/astro/commit/26b77b8fef0e03bfc5550aecaa1f56a4fc1cd297)]:
  - astro@3.3.4

## 5.0.2

### Patch Changes

- [#8737](https://github.com/withastro/astro/pull/8737) [`6f60da805`](https://github.com/withastro/astro/commit/6f60da805e0014bc50dd07bef972e91c73560c3c) Thanks [@ematipico](https://github.com/ematipico)! - Add provenance statement when publishing the library from CI

- Updated dependencies [[`6f60da805`](https://github.com/withastro/astro/commit/6f60da805e0014bc50dd07bef972e91c73560c3c), [`d78806dfe`](https://github.com/withastro/astro/commit/d78806dfe0301ea7ffe6c7c1f783bd415ac7cda9), [`d1c75fe15`](https://github.com/withastro/astro/commit/d1c75fe158839699c59728cf3a83888e8c72a459), [`aa265d730`](https://github.com/withastro/astro/commit/aa265d73024422967c1b1c68ad268c419c6c798f), [`78adbc443`](https://github.com/withastro/astro/commit/78adbc4433208458291e36713909762e148e1e5d), [`21e0757ea`](https://github.com/withastro/astro/commit/21e0757ea22a57d344c934045ca19db93b684436), [`357270f2a`](https://github.com/withastro/astro/commit/357270f2a3d0bf2aa634ba7e52e9d17618eff4a7)]:
  - @astrojs/internal-helpers@0.2.1
  - astro@3.2.3

## 5.0.1

### Patch Changes

- [#8581](https://github.com/withastro/astro/pull/8581) [`d0e513f21`](https://github.com/withastro/astro/commit/d0e513f214fe3cb30bab6d98936cda796477f2f8) Thanks [@rishi-raj-jain](https://github.com/rishi-raj-jain)! - log only once in serverless adapter

- Updated dependencies [[`8d361169b`](https://github.com/withastro/astro/commit/8d361169b8e487933d671ce347f0ce74922c80cc), [`95b5f6280`](https://github.com/withastro/astro/commit/95b5f6280d124f8d6f866dc3286406c272ee91bf), [`0586e20e8`](https://github.com/withastro/astro/commit/0586e20e8338e077b8eb1a3a96bdd19f5950c22f)]:
  - astro@3.1.1

## 5.0.0

### Major Changes

- [#8445](https://github.com/withastro/astro/pull/8445) [`91380378c`](https://github.com/withastro/astro/commit/91380378cef545656d2c085117fc5f38c9ce4589) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Adds a configuration option `devImageService` to choose which of the built-in image services to use in development. Defaults to `sharp`.

- [#8546](https://github.com/withastro/astro/pull/8546) [`b79e11f3c`](https://github.com/withastro/astro/commit/b79e11f3c480e8e165d5b102adb1f2f8a089f29d) Thanks [@matthewp](https://github.com/matthewp)! - Turn off `functionPerRoute` by default

  In the previous version of `@astrojs/vercel`, the default for `functionPerRoute` was changed to `true`. While this option has several advantages, if you're a free tier user you are likely to run into the limit of 12 functions per deployment. This will result in an error when you attempt to deploy.

  For this reason, the `functionPerRoute` option is now back to defaulting to `false`. It's still a useful option if you have a paid plan and have previously run into issues with your single function exceeding the size limits.

### Minor Changes

- [#8021](https://github.com/withastro/astro/pull/8021) [`2e8726fee`](https://github.com/withastro/astro/commit/2e8726feec2e0d6ba8bd4db941009986e8e34141) Thanks [@chriswdmr](https://github.com/chriswdmr)! - Enable Vercel Speed Insights and Vercel Web Analytics individually.
  Deprecates the `analytics` property in `astro.config.mjs` in favor of `speedInsights` and `webAnalytics`.

  If you're using the `analytics` property, you'll need to update your config to use the new properties:

  ```diff
  // astro.config.mjs
  export default defineConfig({
  	adapter: vercel({
  -		analytics: true,
  +		webAnalytics: {
  +			enabled: true
  +		},
  +		speedInsights: {
  +			enabled: true
  +		}
  	})
  });
  ```

  Allow configuration of Web Analytics with all available configuration options.
  Bumps @vercel/analytics package to the latest version.

### Patch Changes

- Updated dependencies [[`7522bb491`](https://github.com/withastro/astro/commit/7522bb4914f2f9e8b8f3c743bc9c941fd3aca644), [`ecc65abbf`](https://github.com/withastro/astro/commit/ecc65abbf9e086c5bbd1973cd4a820082b4e0dc5), [`2c4fc878b`](https://github.com/withastro/astro/commit/2c4fc878bece36b7fcf1470419c7ce6f1e1e95d0), [`c92e0acd7`](https://github.com/withastro/astro/commit/c92e0acd715171b3f4c3294099780e21576648c8), [`f95febf96`](https://github.com/withastro/astro/commit/f95febf96bb97babb28d78994332f5e47f5f637d), [`b85c8a78a`](https://github.com/withastro/astro/commit/b85c8a78a116dbbddc901438bc0b7a1917dc0238), [`45364c345`](https://github.com/withastro/astro/commit/45364c345267429e400baecd1fbc290503f8b13a)]:
  - astro@3.1.0

## 4.0.5

### Patch Changes

- [#8452](https://github.com/withastro/astro/pull/8452) [`7ea32c7fb`](https://github.com/withastro/astro/commit/7ea32c7fbf4fc74a3c0fa7319561243c4e262e99) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix Astro's `domains` and `remotePatterns` not being used by Vercel when using Vercel Image Optimization

- Updated dependencies [[`f66053a1e`](https://github.com/withastro/astro/commit/f66053a1ea0a4e3bdb0b0df12bb1bf56e1ea2618), [`0fa483283`](https://github.com/withastro/astro/commit/0fa483283e54c94f173838cd558dc0dbdd11e699)]:
  - astro@3.0.11

## 4.0.4

### Patch Changes

- [#8408](https://github.com/withastro/astro/pull/8408) [`9ffa1a84e`](https://github.com/withastro/astro/commit/9ffa1a84e81f52d55ffe07826b8b1f10fc023ee9) Thanks [@slawekkolodziej](https://github.com/slawekkolodziej)! - Fix serverless function naming conflicts for routes with identical filenames but different directory structures

- Updated dependencies [[`7d95bd9ba`](https://github.com/withastro/astro/commit/7d95bd9baaf755239fd7d35e4813861b2dbccf42), [`1947ef7a9`](https://github.com/withastro/astro/commit/1947ef7a99ce3d1d6ea797842edd31d5edffa5de), [`61ad70fdc`](https://github.com/withastro/astro/commit/61ad70fdc52035964c43ecdb4cf7468f6c2b61e7), [`d2f2a11cd`](https://github.com/withastro/astro/commit/d2f2a11cdb42b0de79be21c798eda8e7e7b2a277), [`5126c6a40`](https://github.com/withastro/astro/commit/5126c6a40f88bff66ee5d3c3a21eea8c4a44ce7a), [`48ff7855b`](https://github.com/withastro/astro/commit/48ff7855b238536a3df17cb29335c90029fc41a4), [`923a443cb`](https://github.com/withastro/astro/commit/923a443cb060a0e936a0e1cc87c0360232f77914), [`8935b3b46`](https://github.com/withastro/astro/commit/8935b3b4672d6c54c7b79e6c4575298f75eeb9f4)]:
  - astro@3.0.9

## 4.0.3

### Patch Changes

- [#8348](https://github.com/withastro/astro/pull/8348) [`5f2c55bb5`](https://github.com/withastro/astro/commit/5f2c55bb54bb66693d278b7cd705c198aecc0331) Thanks [@ematipico](https://github.com/ematipico)! - - Cache result during bundling, to speed up the process of multiple functions;
  - Avoid creating multiple symbolic links of the dependencies when building the project with `functionPerRoute` enabled;

- [#8354](https://github.com/withastro/astro/pull/8354) [`0eb09dbab`](https://github.com/withastro/astro/commit/0eb09dbab1674a57d23ac97950a527d2e5a9c9fb) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix unnecessary warning about Sharp showing while building

- Updated dependencies [[`d3a6f9f83`](https://github.com/withastro/astro/commit/d3a6f9f836e35932a950e40ba69eff63d7db7eed), [`f21599671`](https://github.com/withastro/astro/commit/f21599671a90c3327307eb6d2f4d5c02e9137207)]:
  - astro@3.0.6

## 4.0.2

### Patch Changes

- [#8318](https://github.com/withastro/astro/pull/8318) [`c58472756`](https://github.com/withastro/astro/commit/c58472756ea30d2496592b2bde390cf858c1876f) Thanks [@ematipico](https://github.com/ematipico)! - Add astro feature map and adapter features to the static adapter. This will remove the warning emitted by Astro.

- Updated dependencies [[`5f3a44aee`](https://github.com/withastro/astro/commit/5f3a44aeeff3c5f31a8063b6005abb90343a817e), [`b21038c19`](https://github.com/withastro/astro/commit/b21038c193fd30351235a1b241a4a0aaf4e692f2), [`7a894eec3`](https://github.com/withastro/astro/commit/7a894eec3e6d2670632ca8cdb592cf5649a22d3e), [`af41b03d0`](https://github.com/withastro/astro/commit/af41b03d05f8a561990de42ccc93663343da2c0d)]:
  - astro@3.0.5

## 4.0.1

### Patch Changes

- [#8328](https://github.com/withastro/astro/pull/8328) [`8fff0e9ae`](https://github.com/withastro/astro/commit/8fff0e9aebec5ff8c2516ed6dbcccb307c20ce45) Thanks [@matthewp](https://github.com/matthewp)! - Update verbiage of Vercel warning

- [#8319](https://github.com/withastro/astro/pull/8319) [`dc29e0f79`](https://github.com/withastro/astro/commit/dc29e0f797398678d16a3a7154443e0f2dd48077) Thanks [@ematipico](https://github.com/ematipico)! - Add warning when `functionPerRoute` is set to `true`

- Updated dependencies [[`0752cf368`](https://github.com/withastro/astro/commit/0752cf3688eaac535ceda1ebcd22ccaf20b2171f)]:
  - astro@3.0.4

## 4.0.0

### Major Changes

- [#8188](https://github.com/withastro/astro/pull/8188) [`d0679a666`](https://github.com/withastro/astro/commit/d0679a666f37da0fca396d42b9b32bbb25d29312) Thanks [@ematipico](https://github.com/ematipico)! - Remove support for Node 16. The lowest supported version by Astro and all integrations is now v18.14.1. As a reminder, Node 16 will be deprecated on the 11th September 2023.

- [#8179](https://github.com/withastro/astro/pull/8179) [`6011d52d3`](https://github.com/withastro/astro/commit/6011d52d38e43c3e3d52bc3bc41a60e36061b7b7) Thanks [@matthewp](https://github.com/matthewp)! - Astro 3.0 Release Candidate

- [#8188](https://github.com/withastro/astro/pull/8188) [`7511a4980`](https://github.com/withastro/astro/commit/7511a4980fd36536464c317de33a5190427f430a) Thanks [@ematipico](https://github.com/ematipico)! - When using an adapter that supports neither Squoosh or Sharp, Astro will now automatically use an image service that does not support processing, but still provides the other benefits of `astro:assets` such as enforcing `alt`, no CLS etc to users

- [#8015](https://github.com/withastro/astro/pull/8015) [`9cc4e48e6`](https://github.com/withastro/astro/commit/9cc4e48e6a858d3a12e6373a5e287b32d24a1c5a) Thanks [@matthewp](https://github.com/matthewp)! - Remove the Vercel Edge adapter

  `@astrojs/vercel/serverless` now supports Edge middleware, so a separate adapter for Edge itself (deploying your entire app to the edge) is no longer necessary. Please update your Astro config to reflect this change:

  ```diff
  // astro.config.mjs
  import { defineConfig } from 'astro/config';
  - import vercel from '@astrojs/vercel/edge';
  + import vercel from '@astrojs/vercel/serverless';

  export default defineConfig({
   output: 'server',
   adapter: vercel({
  +    edgeMiddleware: true
   }),
  });
  ```

  This adapter had several known limitations and compatibility issues that prevented many people from using it in production. To reduce maintenance costs and because we have a better story with Serveless + Edge Middleware, we are removing the Edge adapter.

- [#8239](https://github.com/withastro/astro/pull/8239) [`52f0837bd`](https://github.com/withastro/astro/commit/52f0837bdeca0b54e07cbf76a7570bd042b98922) Thanks [@matthewp](https://github.com/matthewp)! - Vercel adapter now defaults to `functionPerRoute`.

  With this change, `@astrojs/vercel/serverless` now splits each route into its own function. By doing this, the size of each function is reduced and startup time is faster.

  You can disable this option, which will cause the code to be bundled into a single function, by setting `functionPerRoute` to `false`.

- [#8188](https://github.com/withastro/astro/pull/8188) [`148e61d24`](https://github.com/withastro/astro/commit/148e61d2492456811f8a3c8daaab1c3429a2ffdc) Thanks [@ematipico](https://github.com/ematipico)! - Reduced the amount of polyfills provided by Astro. Astro will no longer provide (no-op) polyfills for several web apis such as HTMLElement, Image or Document. If you need access to those APIs on the server, we recommend using more proper polyfills available on npm.

### Minor Changes

- [#8188](https://github.com/withastro/astro/pull/8188) [`cd2d7e769`](https://github.com/withastro/astro/commit/cd2d7e76981ef9b9013453aa2629838e1e9fd422) Thanks [@ematipico](https://github.com/ematipico)! - Introduced the concept of feature map. A feature map is a list of features that are built-in in Astro, and an Adapter
  can tell Astro if it can support it.

  ```ts
  import { AstroIntegration } from './astro';

  function myIntegration(): AstroIntegration {
    return {
      name: 'astro-awesome-list',
      // new feature map
      supportedAstroFeatures: {
        hybridOutput: 'experimental',
        staticOutput: 'stable',
        serverOutput: 'stable',
        assets: {
          supportKind: 'stable',
          isSharpCompatible: false,
          isSquooshCompatible: false,
        },
      },
    };
  }
  ```

- [#8188](https://github.com/withastro/astro/pull/8188) [`80f1494cd`](https://github.com/withastro/astro/commit/80f1494cdaf72e58a420adb4f7c712d4089e1923) Thanks [@ematipico](https://github.com/ematipico)! - The `build.split` and `build.excludeMiddleware` configuration options are deprecated and have been replaced by options in the adapter config.

  If your config includes the `build.excludeMiddleware` option, replace it with `edgeMiddleware` in your adapter options:

  ```diff
  import { defineConfig } from "astro/config";
  import vercel from "@astrojs/vercel/serverless";

  export default defineConfig({
       build: {
  -        excludeMiddleware: true
       },
       adapter: vercel({
  +        edgeMiddleware: true
       }),
  });
  ```

  If your config includes the `build.split` option, replace it with `functionPerRoute` in your adapter options:

  ```diff
  import { defineConfig } from "astro/config";
  import vercel from "@astrojs/vercel/serverless";

  export default defineConfig({
       build: {
  -        split: true
       },
       adapter: vercel({
  +        functionPerRoute: true
       }),
  });
  ```

### Patch Changes

- Updated dependencies [[`d0679a666`](https://github.com/withastro/astro/commit/d0679a666f37da0fca396d42b9b32bbb25d29312), [`db39206cb`](https://github.com/withastro/astro/commit/db39206cbb85b034859ac416179f141184bb2bff), [`2aa6d8ace`](https://github.com/withastro/astro/commit/2aa6d8ace398a41c2dec5473521d758816b08191), [`adf9fccfd`](https://github.com/withastro/astro/commit/adf9fccfdda107c2224558f1c2e6a77847ac0a8a), [`0c7b42dc6`](https://github.com/withastro/astro/commit/0c7b42dc6780e687e416137539f55a3a427d1d10), [`46c4c0e05`](https://github.com/withastro/astro/commit/46c4c0e053f830585b9ef229ce1c259df00a80f8), [`364d861bd`](https://github.com/withastro/astro/commit/364d861bd527b8511968e2837728148f090bedef), [`2484dc408`](https://github.com/withastro/astro/commit/2484dc4080e5cd84b9a53648a1de426d7c907be2), [`81545197a`](https://github.com/withastro/astro/commit/81545197a32fd015d763fc386c8b67e0e08b7393), [`6011d52d3`](https://github.com/withastro/astro/commit/6011d52d38e43c3e3d52bc3bc41a60e36061b7b7), [`c2c71d90c`](https://github.com/withastro/astro/commit/c2c71d90c264a2524f99e0373ab59015f23ad4b1), [`cd2d7e769`](https://github.com/withastro/astro/commit/cd2d7e76981ef9b9013453aa2629838e1e9fd422), [`80f1494cd`](https://github.com/withastro/astro/commit/80f1494cdaf72e58a420adb4f7c712d4089e1923), [`e45f30293`](https://github.com/withastro/astro/commit/e45f3029340db718b6ed7e91b5d14f5cf14cd71d), [`c0de7a7b0`](https://github.com/withastro/astro/commit/c0de7a7b0f042cd49cbea4f4ac1b2ab6f9fef644), [`65c354969`](https://github.com/withastro/astro/commit/65c354969e6fe0ef6d622e8f4c545e2f717ce8c6), [`3c3100851`](https://github.com/withastro/astro/commit/3c31008519ce68b5b1b1cb23b71fbe0a2d506882), [`34cb20021`](https://github.com/withastro/astro/commit/34cb2002161ba88df6bcb72fecfd12ed867c134b), [`a824863ab`](https://github.com/withastro/astro/commit/a824863ab1c451f4068eac54f28dd240573e1cba), [`44f7a2872`](https://github.com/withastro/astro/commit/44f7a28728c56c04ac377b6e917329f324874043), [`1048aca55`](https://github.com/withastro/astro/commit/1048aca550769415e528016e42b358ffbfd44b61), [`be6bbd2c8`](https://github.com/withastro/astro/commit/be6bbd2c86b9bf5268e765bb937dda00ff15781a), [`9e021a91c`](https://github.com/withastro/astro/commit/9e021a91c57d10809f588dd47968fc0e7f8b4d5c), [`7511a4980`](https://github.com/withastro/astro/commit/7511a4980fd36536464c317de33a5190427f430a), [`c37632a20`](https://github.com/withastro/astro/commit/c37632a20d06164fb97a4c2fc48df6d960398832), [`acf652fc1`](https://github.com/withastro/astro/commit/acf652fc1d5db166231e87e22d0d50444f5556d8), [`42785c7b7`](https://github.com/withastro/astro/commit/42785c7b784b151e6d582570e5d74482129e8eb8), [`8450379db`](https://github.com/withastro/astro/commit/8450379db854fb1eaa9f38f21d65db240bc616cd), [`dbc97b121`](https://github.com/withastro/astro/commit/dbc97b121f42583728f1cdfdbf14575fda943f5b), [`7d2f311d4`](https://github.com/withastro/astro/commit/7d2f311d428e3d1c8c13b9bf2a708d6435713fc2), [`2540feedb`](https://github.com/withastro/astro/commit/2540feedb06785d5a20eecc3668849f147d778d4), [`ea7ff5177`](https://github.com/withastro/astro/commit/ea7ff5177dbcd7b2508cb1eef1b22b8ee1f47079), [`68efd4a8b`](https://github.com/withastro/astro/commit/68efd4a8b29f248397667801465b3152dc98e9a7), [`7bd1b86f8`](https://github.com/withastro/astro/commit/7bd1b86f85c06fdde0a1ed9146d01bac69990671), [`036388f66`](https://github.com/withastro/astro/commit/036388f66dab68ad54b895ed86f9176958dd83c8), [`519a1c4e8`](https://github.com/withastro/astro/commit/519a1c4e8407c7abcb8d879b67a9f4b960652cae), [`1f58a7a1b`](https://github.com/withastro/astro/commit/1f58a7a1bea6888868b689dac94801d554319b02), [`2ae9d37f0`](https://github.com/withastro/astro/commit/2ae9d37f0a9cb21ab288d3c30aecb6d84db87788), [`a8f35777e`](https://github.com/withastro/astro/commit/a8f35777e7e322068a4e2f520c2c9e43ade19e58), [`70f34f5a3`](https://github.com/withastro/astro/commit/70f34f5a355f42526ee9e5355f3de8e510002ea2), [`5208a3c8f`](https://github.com/withastro/astro/commit/5208a3c8fefcec7694857fb344af351f4631fc34), [`84af8ed9d`](https://github.com/withastro/astro/commit/84af8ed9d1e6401c6ebc9c60fe8cddb44d5044b0), [`f003e7364`](https://github.com/withastro/astro/commit/f003e7364317cafdb8589913b26b28e928dd07c9), [`ffc9e2d3d`](https://github.com/withastro/astro/commit/ffc9e2d3de46049bf3d82140ef018f524fb03187), [`732111cdc`](https://github.com/withastro/astro/commit/732111cdce441639db31f40f621df48442d00969), [`0f637c71e`](https://github.com/withastro/astro/commit/0f637c71e511cb4c51712128d217a26c8eee4d40), [`33b8910cf`](https://github.com/withastro/astro/commit/33b8910cfdce5713891c50a84a0a8fe926311710), [`8a5b0c1f3`](https://github.com/withastro/astro/commit/8a5b0c1f3a4be6bb62db66ec70144109ff5b4c59), [`148e61d24`](https://github.com/withastro/astro/commit/148e61d2492456811f8a3c8daaab1c3429a2ffdc), [`e79e3779d`](https://github.com/withastro/astro/commit/e79e3779df0ad35253abcdb931d622847d9adb12), [`632579dc2`](https://github.com/withastro/astro/commit/632579dc2094cc342929261c89e689f0dd358284), [`3674584e0`](https://github.com/withastro/astro/commit/3674584e02b161a698b429ceb66723918fdc56ac), [`1db4e92c1`](https://github.com/withastro/astro/commit/1db4e92c12ed73681217f5cefd39f2f47542f961), [`e7f872e91`](https://github.com/withastro/astro/commit/e7f872e91e852b901cf221a5151077dec64305bf), [`16f09dfff`](https://github.com/withastro/astro/commit/16f09dfff7722fda99dd0412e3006a7a39c80829), [`4477bb41c`](https://github.com/withastro/astro/commit/4477bb41c8ed688785c545731ef5b184b629f4e5), [`55c10d1d5`](https://github.com/withastro/astro/commit/55c10d1d564e805efc3c1a7c48e0d9a1cdf0c7ed), [`3e834293d`](https://github.com/withastro/astro/commit/3e834293d47ab2761a7aa013916e8371871efb7f), [`96beb883a`](https://github.com/withastro/astro/commit/96beb883ad87f8bbf5b2f57e14a743763d2a6f58), [`997a0db8a`](https://github.com/withastro/astro/commit/997a0db8a4e3851edd69384cf5eadbb969e1d547), [`80f1494cd`](https://github.com/withastro/astro/commit/80f1494cdaf72e58a420adb4f7c712d4089e1923), [`0f0625504`](https://github.com/withastro/astro/commit/0f0625504145f18cba7dc6cf20291cb2abddc5a9), [`e1ae56e72`](https://github.com/withastro/astro/commit/e1ae56e724d0f83db1230359e06cd6bc26f5fa26), [`f32d093a2`](https://github.com/withastro/astro/commit/f32d093a280faafff024228c12bb438156ec34d7), [`f01eb585e`](https://github.com/withastro/astro/commit/f01eb585e7c972d940761309b1595f682b6922d2), [`b76c166bd`](https://github.com/withastro/astro/commit/b76c166bdd8e28683f62806aef968d1e0c3b06d9), [`a87cbe400`](https://github.com/withastro/astro/commit/a87cbe400314341d5f72abf86ea264e6b47c091f), [`866ed4098`](https://github.com/withastro/astro/commit/866ed4098edffb052239cdb26e076cf8db61b1d9), [`767eb6866`](https://github.com/withastro/astro/commit/767eb68666eb777965baa0d6ade20bbafecf95bf), [`32669cd47`](https://github.com/withastro/astro/commit/32669cd47555e9c7433c3998a2b6e624dfb2d8e9)]:
  - astro@3.0.0
  - @astrojs/internal-helpers@0.2.0

## 4.0.0-rc.5

### Major Changes

- [#8239](https://github.com/withastro/astro/pull/8239) [`52f0837bd`](https://github.com/withastro/astro/commit/52f0837bdeca0b54e07cbf76a7570bd042b98922) Thanks [@matthewp](https://github.com/matthewp)! - Vercel adapter now defaults to `functionPerRoute`.

  With this change, `@astrojs/vercel/serverless` now splits each route into its own function. By doing this, the size of each function is reduced and startup time is faster.

  You can disable this option, which will cause the code to be bundled into a single function, by setting `functionPerRoute` to `false`.

### Patch Changes

- Updated dependencies [[`46c4c0e05`](https://github.com/withastro/astro/commit/46c4c0e053f830585b9ef229ce1c259df00a80f8), [`1048aca55`](https://github.com/withastro/astro/commit/1048aca550769415e528016e42b358ffbfd44b61), [`ffc9e2d3d`](https://github.com/withastro/astro/commit/ffc9e2d3de46049bf3d82140ef018f524fb03187), [`3674584e0`](https://github.com/withastro/astro/commit/3674584e02b161a698b429ceb66723918fdc56ac)]:
  - astro@3.0.0-rc.8

## 4.0.0-rc.4

### Major Changes

- [#8179](https://github.com/withastro/astro/pull/8179) [`6011d52d3`](https://github.com/withastro/astro/commit/6011d52d38e43c3e3d52bc3bc41a60e36061b7b7) Thanks [@matthewp](https://github.com/matthewp)! - Astro 3.0 Release Candidate

### Patch Changes

- Updated dependencies [[`adf9fccfd`](https://github.com/withastro/astro/commit/adf9fccfdda107c2224558f1c2e6a77847ac0a8a), [`582132328`](https://github.com/withastro/astro/commit/5821323285646aee7ff9194a505f708028e4db57), [`81545197a`](https://github.com/withastro/astro/commit/81545197a32fd015d763fc386c8b67e0e08b7393), [`6011d52d3`](https://github.com/withastro/astro/commit/6011d52d38e43c3e3d52bc3bc41a60e36061b7b7), [`be6bbd2c8`](https://github.com/withastro/astro/commit/be6bbd2c86b9bf5268e765bb937dda00ff15781a), [`42785c7b7`](https://github.com/withastro/astro/commit/42785c7b784b151e6d582570e5d74482129e8eb8), [`95120efbe`](https://github.com/withastro/astro/commit/95120efbe817163663492181cbeb225849354493), [`2ae9d37f0`](https://github.com/withastro/astro/commit/2ae9d37f0a9cb21ab288d3c30aecb6d84db87788), [`f003e7364`](https://github.com/withastro/astro/commit/f003e7364317cafdb8589913b26b28e928dd07c9), [`732111cdc`](https://github.com/withastro/astro/commit/732111cdce441639db31f40f621df48442d00969), [`33b8910cf`](https://github.com/withastro/astro/commit/33b8910cfdce5713891c50a84a0a8fe926311710), [`e79e3779d`](https://github.com/withastro/astro/commit/e79e3779df0ad35253abcdb931d622847d9adb12), [`179796405`](https://github.com/withastro/astro/commit/179796405e053b559d83f84507e5a465861a029a), [`a87cbe400`](https://github.com/withastro/astro/commit/a87cbe400314341d5f72abf86ea264e6b47c091f), [`767eb6866`](https://github.com/withastro/astro/commit/767eb68666eb777965baa0d6ade20bbafecf95bf)]:
  - astro@3.0.0-rc.5
  - @astrojs/internal-helpers@0.2.0-rc.2

## 4.0.0-beta.3

### Patch Changes

- [#7778](https://github.com/withastro/astro/pull/7778) [`d6b494376`](https://github.com/withastro/astro/commit/d6b4943764989c0e89df2d6875cd19691566dfb3) Thanks [@y-nk](https://github.com/y-nk)! - Update image support to work with latest version of Astro

- Updated dependencies [[`2484dc408`](https://github.com/withastro/astro/commit/2484dc4080e5cd84b9a53648a1de426d7c907be2), [`c2c71d90c`](https://github.com/withastro/astro/commit/c2c71d90c264a2524f99e0373ab59015f23ad4b1), [`7177f7579`](https://github.com/withastro/astro/commit/7177f7579b6e866f0fd895b3fd079d8ba330b1a9), [`097a8e4e9`](https://github.com/withastro/astro/commit/097a8e4e916c7df18eafdaa6c8d6ce2991c17ab6), [`dbc97b121`](https://github.com/withastro/astro/commit/dbc97b121f42583728f1cdfdbf14575fda943f5b), [`2540feedb`](https://github.com/withastro/astro/commit/2540feedb06785d5a20eecc3668849f147d778d4), [`ea7ff5177`](https://github.com/withastro/astro/commit/ea7ff5177dbcd7b2508cb1eef1b22b8ee1f47079), [`68efd4a8b`](https://github.com/withastro/astro/commit/68efd4a8b29f248397667801465b3152dc98e9a7), [`0e0fa605d`](https://github.com/withastro/astro/commit/0e0fa605d109cc91e08a1ae1cc560ea240fe631b), [`5208a3c8f`](https://github.com/withastro/astro/commit/5208a3c8fefcec7694857fb344af351f4631fc34), [`8a5b0c1f3`](https://github.com/withastro/astro/commit/8a5b0c1f3a4be6bb62db66ec70144109ff5b4c59), [`d6b494376`](https://github.com/withastro/astro/commit/d6b4943764989c0e89df2d6875cd19691566dfb3), [`4477bb41c`](https://github.com/withastro/astro/commit/4477bb41c8ed688785c545731ef5b184b629f4e5), [`3e834293d`](https://github.com/withastro/astro/commit/3e834293d47ab2761a7aa013916e8371871efb7f), [`b76c166bd`](https://github.com/withastro/astro/commit/b76c166bdd8e28683f62806aef968d1e0c3b06d9)]:
  - astro@3.0.0-beta.3

## 4.0.0-beta.2

### Patch Changes

- Updated dependencies [[`2aa6d8ace`](https://github.com/withastro/astro/commit/2aa6d8ace398a41c2dec5473521d758816b08191)]:
  - @astrojs/internal-helpers@0.2.0-beta.1
  - astro@3.0.0-beta.2

## 4.0.0-beta.1

### Major Changes

- [#8015](https://github.com/withastro/astro/pull/8015) [`9cc4e48e6`](https://github.com/withastro/astro/commit/9cc4e48e6a858d3a12e6373a5e287b32d24a1c5a) Thanks [@matthewp](https://github.com/matthewp)! - Remove the Vercel Edge adapter

  `@astrojs/vercel/serverless` now supports Edge middleware, so a separate adapter for Edge itself (deploying your entire app to the edge) is no longer necessary. Please update your Astro config to reflect this change:

  ```diff
  // astro.config.mjs
  import { defineConfig } from 'astro/config';
  - import vercel from '@astrojs/vercel/edge';
  + import vercel from '@astrojs/vercel/serverless';

  export default defineConfig({
   output: 'server',
   adapter: vercel({
  +    edgeMiddleware: true
   }),
  });
  ```

  This adapter had several known limitations and compatibility issues that prevented many people from using it in production. To reduce maintenance costs and because we have a better story with Serveless + Edge Middleware, we are removing the Edge adapter.

### Patch Changes

- Updated dependencies [[`65c354969`](https://github.com/withastro/astro/commit/65c354969e6fe0ef6d622e8f4c545e2f717ce8c6), [`3c3100851`](https://github.com/withastro/astro/commit/3c31008519ce68b5b1b1cb23b71fbe0a2d506882), [`34cb20021`](https://github.com/withastro/astro/commit/34cb2002161ba88df6bcb72fecfd12ed867c134b), [`7bd1b86f8`](https://github.com/withastro/astro/commit/7bd1b86f85c06fdde0a1ed9146d01bac69990671), [`519a1c4e8`](https://github.com/withastro/astro/commit/519a1c4e8407c7abcb8d879b67a9f4b960652cae), [`70f34f5a3`](https://github.com/withastro/astro/commit/70f34f5a355f42526ee9e5355f3de8e510002ea2), [`0f637c71e`](https://github.com/withastro/astro/commit/0f637c71e511cb4c51712128d217a26c8eee4d40), [`866ed4098`](https://github.com/withastro/astro/commit/866ed4098edffb052239cdb26e076cf8db61b1d9), [`5b1e39ef6`](https://github.com/withastro/astro/commit/5b1e39ef6ec6dcebea96584f95d9530bd9aa715d)]:
  - astro@3.0.0-beta.1

## 4.0.0-beta.0

### Major Changes

- [`1eae2e3f7`](https://github.com/withastro/astro/commit/1eae2e3f7d693c9dfe91c8ccfbe606d32bf2fb81) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Remove support for Node 16. The lowest supported version by Astro and all integrations is now v18.14.1. As a reminder, Node 16 will be deprecated on the 11th September 2023.

- [`c022a4217`](https://github.com/withastro/astro/commit/c022a4217a805d223c1494e9eda4e48bbf810388) Thanks [@Princesseuh](https://github.com/Princesseuh)! - When using an adapter that supports neither Squoosh or Sharp, Astro will now automatically use an image service that does not support processing, but still provides the other benefits of `astro:assets` such as enforcing `alt`, no CLS etc to users

- [`3dc1ca2fa`](https://github.com/withastro/astro/commit/3dc1ca2fac8d9965cc5085a5d09e72ed87b4281a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Reduced the amount of polyfills provided by Astro. Astro will no longer provide (no-op) polyfills for several web apis such as HTMLElement, Image or Document. If you need access to those APIs on the server, we recommend using more proper polyfills available on npm.

### Minor Changes

- [`9b4f70a62`](https://github.com/withastro/astro/commit/9b4f70a629f55e461759ba46f68af7097a2e9215) Thanks [@ematipico](https://github.com/ematipico)! - Introduced the concept of feature map. A feature map is a list of features that are built-in in Astro, and an Adapter
  can tell Astro if it can support it.

  ```ts
  import { AstroIntegration } from './astro';

  function myIntegration(): AstroIntegration {
    return {
      name: 'astro-awesome-list',
      // new feature map
      supportedAstroFeatures: {
        hybridOutput: 'experimental',
        staticOutput: 'stable',
        serverOutput: 'stable',
        assets: {
          supportKind: 'stable',
          isSharpCompatible: false,
          isSquooshCompatible: false,
        },
      },
    };
  }
  ```

- [`3fdf509b2`](https://github.com/withastro/astro/commit/3fdf509b2731a9b2f972d89291e57cf78d62c769) Thanks [@ematipico](https://github.com/ematipico)! - The `build.split` and `build.excludeMiddleware` configuration options are deprecated and have been replaced by options in the adapter config.

  If your config includes the `build.excludeMiddleware` option, replace it with `edgeMiddleware` in your adapter options:

  ```diff
  import { defineConfig } from "astro/config";
  import vercel from "@astrojs/vercel/serverless";

  export default defineConfig({
       build: {
  -        excludeMiddleware: true
       },
       adapter: vercel({
  +        edgeMiddleware: true
       }),
  });
  ```

  If your config includes the `build.split` option, replace it with `functionPerRoute` in your adapter options:

  ```diff
  import { defineConfig } from "astro/config";
  import vercel from "@astrojs/vercel/serverless";

  export default defineConfig({
       build: {
  -        split: true
       },
       adapter: vercel({
  +        functionPerRoute: true
       }),
  });
  ```

### Patch Changes

- Updated dependencies [[`1eae2e3f7`](https://github.com/withastro/astro/commit/1eae2e3f7d693c9dfe91c8ccfbe606d32bf2fb81), [`76ddef19c`](https://github.com/withastro/astro/commit/76ddef19ccab6e5f7d3a5740cd41acf10e334b38), [`9b4f70a62`](https://github.com/withastro/astro/commit/9b4f70a629f55e461759ba46f68af7097a2e9215), [`3fdf509b2`](https://github.com/withastro/astro/commit/3fdf509b2731a9b2f972d89291e57cf78d62c769), [`2f951cd40`](https://github.com/withastro/astro/commit/2f951cd403dfcc2c3ca6aae618ae3e1409516e32), [`c022a4217`](https://github.com/withastro/astro/commit/c022a4217a805d223c1494e9eda4e48bbf810388), [`67becaa58`](https://github.com/withastro/astro/commit/67becaa580b8f787df58de66b7008b7098f1209c), [`bc37331d8`](https://github.com/withastro/astro/commit/bc37331d8154e3e95a8df9131e4e014e78a7a9e7), [`dfc2d93e3`](https://github.com/withastro/astro/commit/dfc2d93e3c645995379358fabbdfa9aab99f43d8), [`3dc1ca2fa`](https://github.com/withastro/astro/commit/3dc1ca2fac8d9965cc5085a5d09e72ed87b4281a), [`1be84dfee`](https://github.com/withastro/astro/commit/1be84dfee3ce8e6f5cc624f99aec4e980f6fde37), [`35f01df79`](https://github.com/withastro/astro/commit/35f01df797d23315f2bee2fc3fd795adb0559c58), [`3fdf509b2`](https://github.com/withastro/astro/commit/3fdf509b2731a9b2f972d89291e57cf78d62c769), [`78de801f2`](https://github.com/withastro/astro/commit/78de801f21fd4ca1653950027d953bf08614566b), [`59d6e569f`](https://github.com/withastro/astro/commit/59d6e569f63e175c97e82e94aa7974febfb76f7c), [`7723c4cc9`](https://github.com/withastro/astro/commit/7723c4cc93298c2e6530e55da7afda048f22cf81), [`fb5cd6b56`](https://github.com/withastro/astro/commit/fb5cd6b56dc27a71366ed5e1ab8bfe9b8f96bac5), [`631b9c410`](https://github.com/withastro/astro/commit/631b9c410d5d66fa384674027ba95d69ebb5063f)]:
  - astro@3.0.0-beta.0
  - @astrojs/internal-helpers@0.2.0-beta.0

## 3.8.2

### Patch Changes

- [#7778](https://github.com/withastro/astro/pull/7778) [`d6b494376`](https://github.com/withastro/astro/commit/d6b4943764989c0e89df2d6875cd19691566dfb3) Thanks [@y-nk](https://github.com/y-nk)! - Update image support to work with latest version of Astro

- Updated dependencies [[`b12c8471f`](https://github.com/withastro/astro/commit/b12c8471f413c0291de4a9c444bfe3079a192034), [`7177f7579`](https://github.com/withastro/astro/commit/7177f7579b6e866f0fd895b3fd079d8ba330b1a9), [`fa6b68a77`](https://github.com/withastro/astro/commit/fa6b68a776c5b3cc8167fc042b7d305234ebcff9), [`097a8e4e9`](https://github.com/withastro/astro/commit/097a8e4e916c7df18eafdaa6c8d6ce2991c17ab6), [`1f6497c33`](https://github.com/withastro/astro/commit/1f6497c3341231ee76fc4538cfe7624cf4721d56), [`0e0fa605d`](https://github.com/withastro/astro/commit/0e0fa605d109cc91e08a1ae1cc560ea240fe631b), [`b290f0a99`](https://github.com/withastro/astro/commit/b290f0a99778a9b9c1045f3cd06b6aee934d7c03), [`d6b494376`](https://github.com/withastro/astro/commit/d6b4943764989c0e89df2d6875cd19691566dfb3), [`da6e3da1c`](https://github.com/withastro/astro/commit/da6e3da1ce00bed625fc568cfe4693713448e93f)]:
  - astro@2.10.10

## 3.8.1

### Patch Changes

- [#8039](https://github.com/withastro/astro/pull/8039) [`6b57628d1`](https://github.com/withastro/astro/commit/6b57628d128779290db3344bbb6de7282196fb97) Thanks [@matthewp](https://github.com/matthewp)! - Prevent Vercel NFT from scanning /dev

- Updated dependencies [[`1b8d30209`](https://github.com/withastro/astro/commit/1b8d3020990130dabfaaf753db73a32c6e0c896a), [`405913cdf`](https://github.com/withastro/astro/commit/405913cdf20b26407aa351c090f0a0859a4e6f54), [`87d4b1843`](https://github.com/withastro/astro/commit/87d4b18437c7565c48cad4bea81831c2a244ebb8), [`c23377caa`](https://github.com/withastro/astro/commit/c23377caafbc75deb91c33b9678c1b6868ad40ea), [`86bee2812`](https://github.com/withastro/astro/commit/86bee2812185df6e14025e5962a335f51853587b)]:
  - astro@2.10.6

## 3.8.0

### Minor Changes

- [#7729](https://github.com/withastro/astro/pull/7729) [`560d0dab1`](https://github.com/withastro/astro/commit/560d0dab1cc7510e5d01f38955c13b329ebf66ff) Thanks [@soilSpoon](https://github.com/soilSpoon)! - Add cache headers to assets in Vercel adapter

### Patch Changes

- Updated dependencies [[`41afb8405`](https://github.com/withastro/astro/commit/41afb84057f606b0e7f9a73c1e40487068e43948), [`c00b6f0c4`](https://github.com/withastro/astro/commit/c00b6f0c49027125ea3026e89b21fef84380d187), [`1f0ee494a`](https://github.com/withastro/astro/commit/1f0ee494a5190356d130282f1f51ba2a5e6ea63f), [`00cb28f49`](https://github.com/withastro/astro/commit/00cb28f4964a60bc609770108d491acc277997b9), [`c264be349`](https://github.com/withastro/astro/commit/c264be3497db4aa8b3bcce0d2f79a26e35b8e91e), [`e1e958a75`](https://github.com/withastro/astro/commit/e1e958a75860292688569e82b4617fc141056202)]:
  - astro@2.10.0

## 3.7.5

### Patch Changes

- [#7754](https://github.com/withastro/astro/pull/7754) [`298dbb89f`](https://github.com/withastro/astro/commit/298dbb89f2963a547370b6e65cafd2650fdb1b27) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Improve `404` behavior for `serverless` and `edge`

- Updated dependencies [[`298dbb89f`](https://github.com/withastro/astro/commit/298dbb89f2963a547370b6e65cafd2650fdb1b27), [`9e2203847`](https://github.com/withastro/astro/commit/9e22038472c8be05ed7a72620534b88324dce793), [`5c5da8d2f`](https://github.com/withastro/astro/commit/5c5da8d2fbb37830f3ee81830d4c9afcd2c1a3e3), [`0b8375fe8`](https://github.com/withastro/astro/commit/0b8375fe82a15bfff3f517f98de6454adb2779f1), [`89d015db6`](https://github.com/withastro/astro/commit/89d015db6ce4d15b5b1140f0eb6bfbef187d6ad7), [`ebf7ebbf7`](https://github.com/withastro/astro/commit/ebf7ebbf7ae767625d736fad327954cfb853837e)]:
  - astro@2.9.7

## 3.7.4

### Patch Changes

- [#7718](https://github.com/withastro/astro/pull/7718) [`35a0b6c8a`](https://github.com/withastro/astro/commit/35a0b6c8a909623d802523006cb3c65e4e70c88f) Thanks [@lilnasy](https://github.com/lilnasy)! - The vercel adapter now Warns when using a deprecated version of Node, and switches to 18 when using an unsupported version.

- Updated dependencies [[`274e67532`](https://github.com/withastro/astro/commit/274e6753281edde72fcb4af1cf8a9f892ee46127), [`e52852628`](https://github.com/withastro/astro/commit/e528526289dd9fba98e254743ded47a5c6d418a8), [`c2d6cfd0c`](https://github.com/withastro/astro/commit/c2d6cfd0c26f4ebb81c715389347de1c3bf5f3e6), [`201d32dcf`](https://github.com/withastro/astro/commit/201d32dcfc58ca82468ac9be43b07cdc60abad88)]:
  - astro@2.9.1

## 3.7.3

### Patch Changes

- [#7677](https://github.com/withastro/astro/pull/7677) [`1f0d0b586`](https://github.com/withastro/astro/commit/1f0d0b5863750104fc93cbbbd54ebae9c65143f7) Thanks [@bluwy](https://github.com/bluwy)! - Fix build error when passing `includeFiles`

- Updated dependencies [[`cc8e9de88`](https://github.com/withastro/astro/commit/cc8e9de88179d2ed4b70980c60b41448db393429), [`1a6f833c4`](https://github.com/withastro/astro/commit/1a6f833c404ba2e64e3497929b64c863b5a348c8), [`cc0f81c04`](https://github.com/withastro/astro/commit/cc0f81c040e912cff0c09e89327ef1655f96b67d)]:
  - astro@2.8.4

## 3.7.2

### Patch Changes

- [#7659](https://github.com/withastro/astro/pull/7659) [`57a5eff5c`](https://github.com/withastro/astro/commit/57a5eff5cee9852dca1e328e233949581edc5fb9) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Fix critical build regression. `@vercel/nft` is excluded from the bundle automatically.

## 3.7.1

### Patch Changes

- [#7621](https://github.com/withastro/astro/pull/7621) [`2ddf34262`](https://github.com/withastro/astro/commit/2ddf3426268847d87c24ba1dc0adff20d3046035) Thanks [@ematipico](https://github.com/ematipico)! - Improve file detection of the middleware file handler

- Updated dependencies [[`86e19c7cf`](https://github.com/withastro/astro/commit/86e19c7cf8696e065c1ccdc2eb841ad0a2b61ede)]:
  - astro@2.8.2

## 3.7.0

### Minor Changes

- [#7532](https://github.com/withastro/astro/pull/7532) [`9e5fafa2b`](https://github.com/withastro/astro/commit/9e5fafa2b25b5128084c7072aa282642fcfbb14b) Thanks [@ematipico](https://github.com/ematipico)! - Support for Vercel Edge Middleware via Astro middleware.

  When a project uses the new option Astro `build.excludeMiddleware`, the
  `@astrojs/vercel/serverless` adapter will automatically create a Vercel Edge Middleware
  that will automatically communicate with the Astro Middleware.

  Check the [documentation](https://github.com/withastro/astro/blob/main/packages/integrations/vercel/README.md##vercel-edge-middleware-with-astro-middleware) for more details.

### Patch Changes

- Updated dependencies [[`9e5fafa2b`](https://github.com/withastro/astro/commit/9e5fafa2b25b5128084c7072aa282642fcfbb14b), [`9e5fafa2b`](https://github.com/withastro/astro/commit/9e5fafa2b25b5128084c7072aa282642fcfbb14b), [`9e5fafa2b`](https://github.com/withastro/astro/commit/9e5fafa2b25b5128084c7072aa282642fcfbb14b), [`6e9c29579`](https://github.com/withastro/astro/commit/6e9c295799cb6524841adbcbec21ff628d8d19c8), [`9e5fafa2b`](https://github.com/withastro/astro/commit/9e5fafa2b25b5128084c7072aa282642fcfbb14b), [`9e5fafa2b`](https://github.com/withastro/astro/commit/9e5fafa2b25b5128084c7072aa282642fcfbb14b)]:
  - astro@2.8.0

## 3.6.0

### Minor Changes

- [#7514](https://github.com/withastro/astro/pull/7514) [`154af8f5e`](https://github.com/withastro/astro/commit/154af8f5ead25b3cf100cfd445329bd1d3fe876a) Thanks [@matthewp](https://github.com/matthewp)! - Split support in Vercel Serverless

  The Vercel adapter builds to a single function by default. Astro 2.7 added support for splitting your build into separate entry points per page. If you use this configuration the Vercel adapter will generate a separate function for each page. This can help reduce the size of each function so they are only bundling code used on that page.

  ```js
  // astro.config.mjs
  import { defineConfig } from 'astro/config';
  import vercel from '@astrojs/vercel/serverless';

  export default defineConfig({
    output: 'server',
    adapter: vercel(),
    build: {
      split: true,
    },
  });
  ```

### Patch Changes

- Updated dependencies [[`9e2426f75`](https://github.com/withastro/astro/commit/9e2426f75637a6318961f483de90b635f3fdadeb), [`cdc28326c`](https://github.com/withastro/astro/commit/cdc28326cf21f305924363e9c8c02ce54b6ff895), [`19c2d43ea`](https://github.com/withastro/astro/commit/19c2d43ea41efdd8741007de0774e7e394f174b0), [`2172dd4f0`](https://github.com/withastro/astro/commit/2172dd4f0dd8f87d1adbc5ae90f44724e66eb964), [`1170877b5`](https://github.com/withastro/astro/commit/1170877b51aaa13203e8c488dcf4e39d1b5553ee)]:
  - astro@2.7.3

## 3.5.1

### Patch Changes

- [#7447](https://github.com/withastro/astro/pull/7447) [`32bde967f`](https://github.com/withastro/astro/commit/32bde967f4b21648b1e11dbfa7964bf7f348f7b9) Thanks [@bluwy](https://github.com/bluwy)! - Fix redirects for root page when using `trailingSlash: "always"`

- Updated dependencies [[`601403744`](https://github.com/withastro/astro/commit/60140374418ff0ee80899615be8e718ae57f791a), [`869197aaf`](https://github.com/withastro/astro/commit/869197aafd9802d059dd8db1ef23794fdd938a91), [`2b7539952`](https://github.com/withastro/astro/commit/2b75399520bebfc537cca8204e483f0df3373904), [`478cd9d8f`](https://github.com/withastro/astro/commit/478cd9d8fa9452466a73e0981863ef6e82f87238), [`57e603038`](https://github.com/withastro/astro/commit/57e603038fa51f5cf023c086705e2ced67434b38), [`2b7539952`](https://github.com/withastro/astro/commit/2b75399520bebfc537cca8204e483f0df3373904), [`f359d77b1`](https://github.com/withastro/astro/commit/f359d77b1844335ceeb103b9d3753eb2f440ed5f)]:
  - astro@2.7.1
  - @astrojs/internal-helpers@0.1.1

## 3.5.0

### Minor Changes

- [#7067](https://github.com/withastro/astro/pull/7067) [`57f8d14c0`](https://github.com/withastro/astro/commit/57f8d14c027c30919363e12c664ccff4ed64d0fc) Thanks [@matthewp](https://github.com/matthewp)! - Support for experimental redirects

  This adds support for the redirects RFC in the Vercel adapter. No changes are necessary, simply use configured redirects and the adapter will output the vercel.json file with the configuration values.

### Patch Changes

- [#7260](https://github.com/withastro/astro/pull/7260) [`39403c32f`](https://github.com/withastro/astro/commit/39403c32faea58399c61d3344b770f195be60d5b) Thanks [@natemoo-re](https://github.com/natemoo-re)! - Unflags support for `output: 'hybrid'` mode, which enables pre-rendering by default. The additional `experimental.hybridOutput` flag can be safely removed from your configuration.

- Updated dependencies [[`57f8d14c0`](https://github.com/withastro/astro/commit/57f8d14c027c30919363e12c664ccff4ed64d0fc), [`414eb19d2`](https://github.com/withastro/astro/commit/414eb19d2fcb55758f9d053076773b11b62f4c97), [`a7e2b37ff`](https://github.com/withastro/astro/commit/a7e2b37ff73871c46895c615846a86a539f45330), [`dd1a6b6c9`](https://github.com/withastro/astro/commit/dd1a6b6c941aeb7af934bd12db22412af262f5a1), [`d72cfa7ca`](https://github.com/withastro/astro/commit/d72cfa7cad758192163712ceb269405659fd14bc), [`144813f73`](https://github.com/withastro/astro/commit/144813f7308dcb9de64ebe3f0f2c6cba9ad81eb1), [`b5213654b`](https://github.com/withastro/astro/commit/b5213654b1b7f3ba573a48d3be688b2bdde7870f), [`e3b8c6296`](https://github.com/withastro/astro/commit/e3b8c62969d680d1915a122c610d281d6711aa63), [`890a2bc98`](https://github.com/withastro/astro/commit/890a2bc9891a2449ab99b01b65468f6dddba6b12), [`39403c32f`](https://github.com/withastro/astro/commit/39403c32faea58399c61d3344b770f195be60d5b), [`101f03209`](https://github.com/withastro/astro/commit/101f032098148b3daaac8d46ff1e535b79232e43)]:
  - astro@2.6.0

## 3.4.1

### Patch Changes

- [#7208](https://github.com/withastro/astro/pull/7208) [`f5a8cffac`](https://github.com/withastro/astro/commit/f5a8cffac22c9e33fad6f47f7d166b55c86ad87b) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Fix `imagesConfig` being wrongly spelt as `imageConfig` in the README

- Updated dependencies [[`8b041bf57`](https://github.com/withastro/astro/commit/8b041bf57c76830c4070330270521e05d8e58474), [`6c7df28ab`](https://github.com/withastro/astro/commit/6c7df28ab34b756b8426443bf6976e24d4611a62), [`bf63f615f`](https://github.com/withastro/astro/commit/bf63f615fc1b97d6fb84db55f7639084e3ada5af), [`ee2aca80a`](https://github.com/withastro/astro/commit/ee2aca80a71afe843af943b11966fcf77f556cfb), [`7851f9258`](https://github.com/withastro/astro/commit/7851f9258fae2f54795470253df9ce4bcd5f9cb0), [`bef3a75db`](https://github.com/withastro/astro/commit/bef3a75dbc48d584daff9f7f3d5a8937b0356170), [`52af9ad18`](https://github.com/withastro/astro/commit/52af9ad18840ffa4e2996386c82cbe34d9fd076a), [`f5063d0a0`](https://github.com/withastro/astro/commit/f5063d0a01e3179da902fdc0a2b22f88cb3c95c7), [`cf621340b`](https://github.com/withastro/astro/commit/cf621340b00fda441f4ef43196c0363d09eae70c), [`2bda7fb0b`](https://github.com/withastro/astro/commit/2bda7fb0bce346f7725086980e1648e2636bbefb), [`af3c5a2e2`](https://github.com/withastro/astro/commit/af3c5a2e25bd3e7b2a3f7f08e41ee457093c8cb1), [`f2f18b440`](https://github.com/withastro/astro/commit/f2f18b44055c6334a39d6379de88fe41e518aa1e)]:
  - astro@2.5.6
  - @astrojs/webapi@2.2.0

## 3.4.0

### Minor Changes

- [#7103](https://github.com/withastro/astro/pull/7103) [`c91e837e9`](https://github.com/withastro/astro/commit/c91e837e961043e92253148f0f4291856653b993) Thanks [@bluwy](https://github.com/bluwy)! - Add `edge-light` and `worker` import condition for worker bundling

### Patch Changes

- [#6876](https://github.com/withastro/astro/pull/6876) [`06ca3702f`](https://github.com/withastro/astro/commit/06ca3702f88ed18a063d2abbbb231615f9f97154) Thanks [@nblackburn](https://github.com/nblackburn)! - Correctly handle analytics id where present

- [#6991](https://github.com/withastro/astro/pull/6991) [`719002ca5`](https://github.com/withastro/astro/commit/719002ca5b128744fb4316d4a52c5dcd46a42759) Thanks [@MoustaphaDev](https://github.com/MoustaphaDev)! - Enable experimental support for hybrid SSR with pre-rendering enabled by default

  **astro.config.mjs**

  ```js
  import { defineConfig } from 'astro/config';
  export default defineConfig({
    output: 'hybrid',
    experimental: {
      hybridOutput: true,
    },
  });
  ```

  Then add `export const prerender =  false` to any page or endpoint you want to opt-out of pre-rendering.

  **src/pages/contact.astro**

  ```astro
  ---
  export const prerender = false;

  if (Astro.request.method === 'POST') {
    // handle form submission
  }
  ---

  <form method="POST">
    <input type="text" name="name" />
    <input type="email" name="email" />
    <button type="submit">Submit</button>
  </form>
  ```

- [#7101](https://github.com/withastro/astro/pull/7101) [`2994bc52d`](https://github.com/withastro/astro/commit/2994bc52d360bf7ca3681c5f6976e64577cf5209) Thanks [@bluwy](https://github.com/bluwy)! - Add missing esbuild dependency

- [#7101](https://github.com/withastro/astro/pull/7101) [`2994bc52d`](https://github.com/withastro/astro/commit/2994bc52d360bf7ca3681c5f6976e64577cf5209) Thanks [@bluwy](https://github.com/bluwy)! - Always build edge/worker runtime with Vite `webworker` SSR target

- [#7104](https://github.com/withastro/astro/pull/7104) [`826e02890`](https://github.com/withastro/astro/commit/826e0289005f645b902375b98d5549c6a95ccafa) Thanks [@bluwy](https://github.com/bluwy)! - Specify `"files"` field to only publish necessary files

- Updated dependencies [[`4516d7b22`](https://github.com/withastro/astro/commit/4516d7b22c5979cde4537f196b53ae2826ba9561), [`e186ecc5e`](https://github.com/withastro/astro/commit/e186ecc5e292de8c6a2c441a2d588512c0813068), [`c6d7ebefd`](https://github.com/withastro/astro/commit/c6d7ebefdd554a9ef29cfeb426ac55cab80d6473), [`914c439bc`](https://github.com/withastro/astro/commit/914c439bccee9fec002c6d92beaa501c398e62ac), [`e9fc2c221`](https://github.com/withastro/astro/commit/e9fc2c2213036d47cd30a47a6cdad5633481a0f8), [`075eee08f`](https://github.com/withastro/astro/commit/075eee08f2e2b0baea008b97f3523f2cb937ee44), [`719002ca5`](https://github.com/withastro/astro/commit/719002ca5b128744fb4316d4a52c5dcd46a42759), [`fc52681ba`](https://github.com/withastro/astro/commit/fc52681ba2f8fe8bcd92eeedf3c6a52fd86a390e), [`fb84622af`](https://github.com/withastro/astro/commit/fb84622af04f795de8d17f24192de105f70fe910), [`cada10a46`](https://github.com/withastro/astro/commit/cada10a466f81f8edb0aa664f9cffdb6b5b8f307), [`cd410c5eb`](https://github.com/withastro/astro/commit/cd410c5eb71f825259279c27c4c39d0ad282c3f0), [`73ec6f6c1`](https://github.com/withastro/astro/commit/73ec6f6c16cadb71dafe9f664f0debde072c3173), [`410428672`](https://github.com/withastro/astro/commit/410428672ed97bba7ca0b3352c1a7ee564921462), [`763ff2d1e`](https://github.com/withastro/astro/commit/763ff2d1e44f54b899d7c65386f1b4b877c95737), [`c1669c001`](https://github.com/withastro/astro/commit/c1669c0011eecfe65a459d727848c18c189a54ca), [`3d525efc9`](https://github.com/withastro/astro/commit/3d525efc95cfb2deb5d9e04856d02965d66901c9)]:
  - astro@2.5.0

## 3.3.0

### Minor Changes

- [#6845](https://github.com/withastro/astro/pull/6845) [`6063f5657`](https://github.com/withastro/astro/commit/6063f5657392a74b6ffc4d5e0de5463c217a8563) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Add support for using the Vercel Image Optimization API through `astro:assets`

### Patch Changes

- Updated dependencies [[`a8a319aef`](https://github.com/withastro/astro/commit/a8a319aef744a64647ee16c7d558d74de6864c6c), [`a695e44ae`](https://github.com/withastro/astro/commit/a695e44aed6e2f5d32cb950d4237be6e5657ba98), [`367e61776`](https://github.com/withastro/astro/commit/367e61776196a17d61c28daa4dfbabb6244e040c), [`77270cc2c`](https://github.com/withastro/astro/commit/77270cc2cd06c942d7abf1d882e36d9163edafa5), [`895fa07d8`](https://github.com/withastro/astro/commit/895fa07d8b4b8359984e048daca5437e40f44390), [`72c6bf01f`](https://github.com/withastro/astro/commit/72c6bf01fe49b331ca8ad9206a7506b15caf5b8d), [`e5bd084c0`](https://github.com/withastro/astro/commit/e5bd084c01e4f60a157969b50c05ce002f7b63d2)]:
  - astro@2.3.4

## 3.2.5

### Patch Changes

- [#6874](https://github.com/withastro/astro/pull/6874) [`43230b2ca`](https://github.com/withastro/astro/commit/43230b2cac6c28e0412b77d32f06db416fca8560) Thanks [@nblackburn](https://github.com/nblackburn)! - Refactor static adapter to use updateConfig method

- Updated dependencies [[`4c7ba4da0`](https://github.com/withastro/astro/commit/4c7ba4da084d7508df91cbac03c2b099a8301e2b), [`b6154d2d5`](https://github.com/withastro/astro/commit/b6154d2d57bfb77767a3ccf9e91c1ae4051c81bc), [`1f2699461`](https://github.com/withastro/astro/commit/1f2699461d4cdcc8007ae47ebff74ace62eee058), [`edabf01b4`](https://github.com/withastro/astro/commit/edabf01b44d8c99da160973cd0f779e0a0b93cd7), [`0afff3274`](https://github.com/withastro/astro/commit/0afff32741247bc4c6709a30fc83787f58ec02b7)]:
  - astro@2.3.1

## 3.2.4

### Patch Changes

- [#6841](https://github.com/withastro/astro/pull/6841) [`2e3125e18`](https://github.com/withastro/astro/commit/2e3125e18063dd23080d380c93c1b709bb59e413) Thanks [@bluwy](https://github.com/bluwy)! - Fix vercel edge private environment variables usage

- [#6840](https://github.com/withastro/astro/pull/6840) [`00a2e1d7c`](https://github.com/withastro/astro/commit/00a2e1d7c74cf253dcad729624246dd59138eb7c) Thanks [@delucis](https://github.com/delucis)! - Fix warning syntax in README

## 3.2.3

### Patch Changes

- [#6776](https://github.com/withastro/astro/pull/6776) [`84a464888`](https://github.com/withastro/astro/commit/84a46488846604596378b6640af6428e24d1e526) Thanks [@nblackburn](https://github.com/nblackburn)! - Revert change to environment variable

## 3.2.2

### Patch Changes

- [#6751](https://github.com/withastro/astro/pull/6751) [`26daba8d9`](https://github.com/withastro/astro/commit/26daba8d9fd2e7cac8e506a2a36cd6f40ab25f16) Thanks [@nblackburn](https://github.com/nblackburn)! - Fix vercel analytics id not being set

- Updated dependencies [[`489dd8d69`](https://github.com/withastro/astro/commit/489dd8d69cdd9d7c243cf8bec96051a914984b9c), [`a1a4f45b5`](https://github.com/withastro/astro/commit/a1a4f45b51a80215fa7598da83bd0d9c5acd20d2), [`a1108e037`](https://github.com/withastro/astro/commit/a1108e037115cdb67d03505286c7d3a4fc2a1ff5), [`8b88e4cf1`](https://github.com/withastro/astro/commit/8b88e4cf15c8bea7942b3985380164e0edf7250b), [`d54cbe413`](https://github.com/withastro/astro/commit/d54cbe41349e55f8544212ad9320705f07325920), [`4c347ab51`](https://github.com/withastro/astro/commit/4c347ab51e46f2319d614f8577fe502e3dc816e2), [`ff0430786`](https://github.com/withastro/astro/commit/ff043078630e678348ae4f4757b3015b3b862c16), [`2f2e572e9`](https://github.com/withastro/astro/commit/2f2e572e937fd25451bbc78a05d55b7caa1ca3ec), [`7116c021a`](https://github.com/withastro/astro/commit/7116c021a39eac15a6e1264dfbd11bef0f5d618a)]:
  - astro@2.2.0

## 3.2.1

### Patch Changes

- [#6484](https://github.com/withastro/astro/pull/6484) [`700a55549`](https://github.com/withastro/astro/commit/700a55549925e2a0ef2da378a20a2a5d35c53b93) Thanks [@matthewp](https://github.com/matthewp)! - Add back support for Astro.clientAddress

- Updated dependencies [[`acf78c5e2`](https://github.com/withastro/astro/commit/acf78c5e271ec3d4f589782078e2a2044cc1c391), [`04e624d06`](https://github.com/withastro/astro/commit/04e624d062c6ce385f6293afba26f3942c2290c6), [`cc90d7219`](https://github.com/withastro/astro/commit/cc90d72197e1139195e9545105b9a1d339f38e1b), [`a9a6ae298`](https://github.com/withastro/astro/commit/a9a6ae29812339ea00f3b9afd3de09bd9d3733a9), [`6a7cf0712`](https://github.com/withastro/astro/commit/6a7cf0712da23e2c095f4bc4f2512e618bceb38e), [`bfd67ea74`](https://github.com/withastro/astro/commit/bfd67ea749dbc6ffa7c9a671fcc48bea6c04a075), [`f6eddffa0`](https://github.com/withastro/astro/commit/f6eddffa0414d54767e9f9e1ee5a936b8a20146b), [`c63874090`](https://github.com/withastro/astro/commit/c6387409062f1d7c2afc93319748ad57086837c5), [`d637d1ea5`](https://github.com/withastro/astro/commit/d637d1ea5b347b9c724adc895c9006c696ac8fc8), [`637f9bc72`](https://github.com/withastro/astro/commit/637f9bc728ea7d56fc82a862d761385f0dcd9528), [`77a046e88`](https://github.com/withastro/astro/commit/77a046e886c370b737208574b6934f5a1cf2b177)]:
  - astro@2.1.3

## 3.2.0

### Minor Changes

- [#6213](https://github.com/withastro/astro/pull/6213) [`afbbc4d5b`](https://github.com/withastro/astro/commit/afbbc4d5bfafc1779bac00b41c2a1cb1c90f2808) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Updated compilation settings to disable downlevelling for Node 14

### Patch Changes

- Updated dependencies [[`fec583909`](https://github.com/withastro/astro/commit/fec583909ab62829dc0c1600e2387979365f2b94), [`b087b83fe`](https://github.com/withastro/astro/commit/b087b83fe266c431fe34a07d5c2293cc4ab011c6), [`694918a56`](https://github.com/withastro/astro/commit/694918a56b01104831296be0c25456135a63c784), [`a20610609`](https://github.com/withastro/astro/commit/a20610609863ae3b48afe96819b8f11ae4f414d5), [`a4a74ab70`](https://github.com/withastro/astro/commit/a4a74ab70cd2aa0d812a1f6b202c4e240a8913bf), [`75921b3cd`](https://github.com/withastro/astro/commit/75921b3cd916d439f6392c487c21532fde35ed13), [`afbbc4d5b`](https://github.com/withastro/astro/commit/afbbc4d5bfafc1779bac00b41c2a1cb1c90f2808)]:
  - astro@2.1.0
  - @astrojs/webapi@2.1.0

## 3.1.4

### Patch Changes

- [#6380](https://github.com/withastro/astro/pull/6380) [`0e378c3b8`](https://github.com/withastro/astro/commit/0e378c3b87627ca2764872a426dfba0a1606f991) Thanks [@JuanM04](https://github.com/JuanM04)! - Fixed undici-related bug

- Updated dependencies [[`45501c531`](https://github.com/withastro/astro/commit/45501c531bf75f60063e1f8b7ac50f5d8d93eb6f), [`ee8b2a067`](https://github.com/withastro/astro/commit/ee8b2a067201f94c6b06fbfc094288e068116c60), [`02a7266e3`](https://github.com/withastro/astro/commit/02a7266e3c32c196fe733a5d3480f9e308cb62ee), [`95164bfdd`](https://github.com/withastro/astro/commit/95164bfdd2c1cbe5f1fafeab9e998ee4c85df3e3)]:
  - astro@2.0.17

## 3.1.3

### Patch Changes

- [#6317](https://github.com/withastro/astro/pull/6317) [`2eb73cb9d`](https://github.com/withastro/astro/commit/2eb73cb9d1c982df5f8788ddacd634645643c5c6) Thanks [@bluwy](https://github.com/bluwy)! - Use .mjs extension when building to support CJS environments

- Updated dependencies [[`5e26bc891`](https://github.com/withastro/astro/commit/5e26bc891cbebb3598acfa760c135a25c548d624), [`a156ecbb7`](https://github.com/withastro/astro/commit/a156ecbb7f4df6a46124a9a12eb712f9163db2ed), [`ccd72e6bb`](https://github.com/withastro/astro/commit/ccd72e6bb41e570d42b1b158e8124c8e04a1943d), [`504c7bacb`](https://github.com/withastro/astro/commit/504c7bacb8c1f2308a31e6c412825ba34983ba33), [`63dda6ded`](https://github.com/withastro/astro/commit/63dda6dedd4c6ea1d5ce72e9cf3fe5f88339a927), [`f91a7f376`](https://github.com/withastro/astro/commit/f91a7f376c223f18b4d8fbed81f95f6bea1cef8d)]:
  - astro@2.0.15

## 3.1.2

### Patch Changes

- [#6258](https://github.com/withastro/astro/pull/6258) [`0fe74b664`](https://github.com/withastro/astro/commit/0fe74b6648fe79951da5443b73208cdc6742442e) Thanks [@delucis](https://github.com/delucis)! - Don’t inject analytics script in dev

- Updated dependencies [[`ef5cea4dc`](https://github.com/withastro/astro/commit/ef5cea4dc5c4ffa33bd57ea0886e6912afb24fec), [`2fec47848`](https://github.com/withastro/astro/commit/2fec4784871f2b06fd780eb4cb0bb69866c6b065)]:
  - astro@2.0.13

## 3.1.1

### Patch Changes

- [#6191](https://github.com/withastro/astro/pull/6191) [`11e1fa988`](https://github.com/withastro/astro/commit/11e1fa9883ff94e81865e0db631efa1a2b18688c) Thanks [@delucis](https://github.com/delucis)! - Fix and improve Vercel adapter README

- Updated dependencies [[`436bd0934`](https://github.com/withastro/astro/commit/436bd09341693fc705f2a55d460eed3afa413432), [`a9bdd9cc4`](https://github.com/withastro/astro/commit/a9bdd9cc4e41512fbe723620c995e6a110032ebf), [`938ad514c`](https://github.com/withastro/astro/commit/938ad514cd75c09756cd24223346159172f5fd60), [`c75d319ee`](https://github.com/withastro/astro/commit/c75d319ee6b657402b902b1b46b9d3f2d0e5370b), [`6fa6025b3`](https://github.com/withastro/astro/commit/6fa6025b34b9447e142c4788c0cdc2dfe03f334f), [`3390cb844`](https://github.com/withastro/astro/commit/3390cb84443a43eb997f3efeb5ca298a8477aaf0)]:
  - astro@2.0.10

## 3.1.0

### Minor Changes

- [#6148](https://github.com/withastro/astro/pull/6148) [`23c60cfa4`](https://github.com/withastro/astro/commit/23c60cfa45d0c01c2a710de9c6a644cd91d1b3f3) Thanks [@jsun969](https://github.com/jsun969)! - Add vercel analytics support

### Patch Changes

- Updated dependencies [[`8bbdcf17d`](https://github.com/withastro/astro/commit/8bbdcf17dd6c9142c18bc1551ee4854a60bc58cb), [`ec2f2a31d`](https://github.com/withastro/astro/commit/ec2f2a31dec78e5749cdea524ae926a19df300e3)]:
  - astro@2.0.9

## 3.0.1

### Patch Changes

- [#6085](https://github.com/withastro/astro/pull/6085) [`b236b5cc8`](https://github.com/withastro/astro/commit/b236b5cc8eb9e078758d9c6cb77d88c39bb1fc3d) Thanks [@AirBorne04](https://github.com/AirBorne04)! - Added second build step through esbuild, to allow framework defined build (vite build) and target defined bundling (esbuilt step)

- Updated dependencies [[`9bec6bc41`](https://github.com/withastro/astro/commit/9bec6bc410f324a41c67e5d185fa86f78d7625f2)]:
  - astro@2.0.6

## 3.0.0

### Major Changes

- [#5782](https://github.com/withastro/astro/pull/5782) [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Remove support for Node 14. Minimum supported Node version is now >=16.12.0

- [#5707](https://github.com/withastro/astro/pull/5707) [`5eba34fcc`](https://github.com/withastro/astro/commit/5eba34fcc663def20bdf6e0daad02a6a5472776b) Thanks [@bluwy](https://github.com/bluwy)! - Remove `astro:build:start` backwards compatibility code

- [#5806](https://github.com/withastro/astro/pull/5806) [`7572f7402`](https://github.com/withastro/astro/commit/7572f7402238da37de748be58d678fedaf863b53) Thanks [@matthewp](https://github.com/matthewp)! - Make astro a `peerDependency` of integrations

  This marks `astro` as a `peerDependency` of several packages that are already getting `major` version bumps. This is so we can more properly track the dependency between them and what version of Astro they are being used with.

### Patch Changes

- Updated dependencies [[`93e633922`](https://github.com/withastro/astro/commit/93e633922c2e449df3bb2357b3683af1d3c0e07b), [`16dc36a87`](https://github.com/withastro/astro/commit/16dc36a870df47a4151a8ed2d91d0bd1bb812458), [`01f3f463b`](https://github.com/withastro/astro/commit/01f3f463bf2918b310d130a9fabbf3ee21d14029), [`e2019be6f`](https://github.com/withastro/astro/commit/e2019be6ffa46fa33d92cfd346f9ecbe51bb7144), [`05caf445d`](https://github.com/withastro/astro/commit/05caf445d4d2728f1010aeb2179a9e756c2fd17d), [`49ab4f231`](https://github.com/withastro/astro/commit/49ab4f231c23b34891c3ee86f4b92bf8d6d267a3), [`a342a486c`](https://github.com/withastro/astro/commit/a342a486c2831461e24e6c2f1ca8a9d3e15477b6), [`8fb28648f`](https://github.com/withastro/astro/commit/8fb28648f66629741cb976bfe34ccd9d8f55661e), [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a), [`c2180746b`](https://github.com/withastro/astro/commit/c2180746b4f6d9ef1b6f86924f21f52cc6ab4e63), [`ae8a012a7`](https://github.com/withastro/astro/commit/ae8a012a7b6884a03c50494332ee37b4505c2c3b), [`cf2de5422`](https://github.com/withastro/astro/commit/cf2de5422c26bfdea4c75f76e57b57299ded3e3a), [`ce5c5dbd4`](https://github.com/withastro/astro/commit/ce5c5dbd46afbe738b03600758bf5c35113de522), [`ec09bb664`](https://github.com/withastro/astro/commit/ec09bb6642064dbd7d2f3369afb090363ae18de2), [`665a2c222`](https://github.com/withastro/astro/commit/665a2c2225e42881f5a9550599e8f3fc1deea0b4), [`259a539d7`](https://github.com/withastro/astro/commit/259a539d7d70c783330c797794b15716921629cf), [`f7aa1ec25`](https://github.com/withastro/astro/commit/f7aa1ec25d1584f7abd421903fbef66b1c050e2a), [`4987d6f44`](https://github.com/withastro/astro/commit/4987d6f44cfd0d81d88f21f5c380503403dc1e6a), [`304823811`](https://github.com/withastro/astro/commit/304823811eddd8e72aa1d8e2d39b40ab5cda3565), [`302e0ef8f`](https://github.com/withastro/astro/commit/302e0ef8f5d5232e3348afe680e599f3e537b5c5), [`55cea0a9d`](https://github.com/withastro/astro/commit/55cea0a9d8c8df91a46590fc04a9ac28089b3432), [`dd56c1941`](https://github.com/withastro/astro/commit/dd56c19411b126439b8bc42d681b6fa8c06e8c61), [`9963c6e4d`](https://github.com/withastro/astro/commit/9963c6e4d50c392c3d1ac4492237020f15ccb1de), [`46ecd5de3`](https://github.com/withastro/astro/commit/46ecd5de34df619e2ee73ccea39a57acd37bc0b8), [`be901dc98`](https://github.com/withastro/astro/commit/be901dc98c4a7f6b5536540aa8f7ba5108e939a0), [`f6cf92b48`](https://github.com/withastro/astro/commit/f6cf92b48317a19a3840ad781b77d6d3cae143bb), [`e818cc046`](https://github.com/withastro/astro/commit/e818cc0466a942919ea3c41585e231c8c80cb3d0), [`8c100a6fe`](https://github.com/withastro/astro/commit/8c100a6fe6cc652c3799d1622e12c2c969f30510), [`116d8835c`](https://github.com/withastro/astro/commit/116d8835ca9e78f8b5e477ee5a3d737b69f80706), [`840412128`](https://github.com/withastro/astro/commit/840412128b00a04515156e92c314a929d6b94f6d), [`1f49cddf9`](https://github.com/withastro/astro/commit/1f49cddf9e9ffc651efc171b2cbde9fbe9e8709d), [`7325df412`](https://github.com/withastro/astro/commit/7325df412107fc0e65cd45c1b568fb686708f723), [`16c7d0bfd`](https://github.com/withastro/astro/commit/16c7d0bfd49d2b9bfae45385f506bcd642f9444a), [`c55fbcb8e`](https://github.com/withastro/astro/commit/c55fbcb8edca1fe118a44f68c9f9436a4719d171), [`a9c292026`](https://github.com/withastro/astro/commit/a9c2920264e36cc5dc05f4adc1912187979edb0d), [`2a5786419`](https://github.com/withastro/astro/commit/2a5786419599b8674473c699300172b9aacbae2e), [`4a1cabfe6`](https://github.com/withastro/astro/commit/4a1cabfe6b9ef8a6fbbcc0727a0dc6fa300cedaa), [`a8d3e7924`](https://github.com/withastro/astro/commit/a8d3e79246605d252dcddad159e358e2d79bd624), [`fa8c131f8`](https://github.com/withastro/astro/commit/fa8c131f88ef67d14c62f1c00c97ed74d43a80ac), [`64b8082e7`](https://github.com/withastro/astro/commit/64b8082e776b832f1433ed288e6f7888adb626d0), [`c4b0cb8bf`](https://github.com/withastro/astro/commit/c4b0cb8bf2b41887d9106440bb2e70d421a5f481), [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a), [`23dc9ea96`](https://github.com/withastro/astro/commit/23dc9ea96a10343852d965efd41fe6665294f1fb), [`63a6ceb38`](https://github.com/withastro/astro/commit/63a6ceb38d88331451dca64d0034c7c58e3d26f1), [`a3a7fc929`](https://github.com/withastro/astro/commit/a3a7fc9298e6d88abb4b7bee1e58f05fa9558cf1), [`52209ca2a`](https://github.com/withastro/astro/commit/52209ca2ad72a30854947dcb3a90ab4db0ac0a6f), [`5fd9208d4`](https://github.com/withastro/astro/commit/5fd9208d447f5ab8909a2188b6c2491a0debd49d), [`5eba34fcc`](https://github.com/withastro/astro/commit/5eba34fcc663def20bdf6e0daad02a6a5472776b), [`899214298`](https://github.com/withastro/astro/commit/899214298cee5f0c975c7245e623c649e1842d73), [`3a00ecb3e`](https://github.com/withastro/astro/commit/3a00ecb3eb4bc44be758c064f2bde6e247e8a593), [`5eba34fcc`](https://github.com/withastro/astro/commit/5eba34fcc663def20bdf6e0daad02a6a5472776b), [`2303f9514`](https://github.com/withastro/astro/commit/2303f95142aa740c99213a098f82b99dd37d74a0), [`1ca81c16b`](https://github.com/withastro/astro/commit/1ca81c16b8b66236e092e6eb6ec3f73f5668421c), [`b66d7195c`](https://github.com/withastro/astro/commit/b66d7195c17a55ea0931bc3744888bd4f5f01ce6)]:
  - astro@2.0.0
  - @astrojs/webapi@2.0.0

## 3.0.0-beta.1

<details>
<summary>See changes in 3.0.0-beta.1</summary>

### Major Changes

- [#5782](https://github.com/withastro/astro/pull/5782) [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a) Thanks [@Princesseuh](https://github.com/Princesseuh)! - Remove support for Node 14. Minimum supported Node version is now >=16.12.0

- [#5806](https://github.com/withastro/astro/pull/5806) [`7572f7402`](https://github.com/withastro/astro/commit/7572f7402238da37de748be58d678fedaf863b53) Thanks [@matthewp](https://github.com/matthewp)! - Make astro a `peerDependency` of integrations

  This marks `astro` as a `peerDependency` of several packages that are already getting `major` version bumps. This is so we can more properly track the dependency between them and what version of Astro they are being used with.

### Patch Changes

- Updated dependencies [[`01f3f463b`](https://github.com/withastro/astro/commit/01f3f463bf2918b310d130a9fabbf3ee21d14029), [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a), [`c2180746b`](https://github.com/withastro/astro/commit/c2180746b4f6d9ef1b6f86924f21f52cc6ab4e63), [`ae8a012a7`](https://github.com/withastro/astro/commit/ae8a012a7b6884a03c50494332ee37b4505c2c3b), [`cf2de5422`](https://github.com/withastro/astro/commit/cf2de5422c26bfdea4c75f76e57b57299ded3e3a), [`ec09bb664`](https://github.com/withastro/astro/commit/ec09bb6642064dbd7d2f3369afb090363ae18de2), [`665a2c222`](https://github.com/withastro/astro/commit/665a2c2225e42881f5a9550599e8f3fc1deea0b4), [`f7aa1ec25`](https://github.com/withastro/astro/commit/f7aa1ec25d1584f7abd421903fbef66b1c050e2a), [`302e0ef8f`](https://github.com/withastro/astro/commit/302e0ef8f5d5232e3348afe680e599f3e537b5c5), [`840412128`](https://github.com/withastro/astro/commit/840412128b00a04515156e92c314a929d6b94f6d), [`1f49cddf9`](https://github.com/withastro/astro/commit/1f49cddf9e9ffc651efc171b2cbde9fbe9e8709d), [`c55fbcb8e`](https://github.com/withastro/astro/commit/c55fbcb8edca1fe118a44f68c9f9436a4719d171), [`4a1cabfe6`](https://github.com/withastro/astro/commit/4a1cabfe6b9ef8a6fbbcc0727a0dc6fa300cedaa), [`c4b0cb8bf`](https://github.com/withastro/astro/commit/c4b0cb8bf2b41887d9106440bb2e70d421a5f481), [`1f92d64ea`](https://github.com/withastro/astro/commit/1f92d64ea35c03fec43aff64eaf704dc5a9eb30a), [`23dc9ea96`](https://github.com/withastro/astro/commit/23dc9ea96a10343852d965efd41fe6665294f1fb), [`63a6ceb38`](https://github.com/withastro/astro/commit/63a6ceb38d88331451dca64d0034c7c58e3d26f1), [`52209ca2a`](https://github.com/withastro/astro/commit/52209ca2ad72a30854947dcb3a90ab4db0ac0a6f), [`2303f9514`](https://github.com/withastro/astro/commit/2303f95142aa740c99213a098f82b99dd37d74a0)]:
  - astro@2.0.0-beta.2
  - @astrojs/webapi@2.0.0-beta.0

</details>

## 3.0.0-beta.0

<details>
<summary>See changes in 3.0.0-beta.0</summary>

### Major Changes

- [#5707](https://github.com/withastro/astro/pull/5707) [`5eba34fcc`](https://github.com/withastro/astro/commit/5eba34fcc663def20bdf6e0daad02a6a5472776b) Thanks [@bluwy](https://github.com/bluwy)! - Remove `astro:build:start` backwards compatibility code

</details>

## 2.4.0

### Minor Changes

- [#5638](https://github.com/withastro/astro/pull/5638) [`a467139e1`](https://github.com/withastro/astro/commit/a467139e169ad2eb7931e03004f1d658f7362e59) Thanks [@andreademasi](https://github.com/andreademasi)! - Ignore warnings when traced file fails to parse

## 2.3.6

### Patch Changes

- [#5587](https://github.com/withastro/astro/pull/5587) [`4d9ef23b6`](https://github.com/withastro/astro/commit/4d9ef23b6745b28a92ca985a6a1d86b45c894f3c) Thanks [@JuanM04](https://github.com/JuanM04)! - Support node-fetch and Node 18 fetch

## 2.3.5

### Patch Changes

- [#5514](https://github.com/withastro/astro/pull/5514) [`a1885ea2f`](https://github.com/withastro/astro/commit/a1885ea2f59f26cbdae10c298e1e0d1063d9dca1) Thanks [@JuanM04](https://github.com/JuanM04)! - Updated request-transform methods

## 2.3.4

### Patch Changes

- [#5361](https://github.com/withastro/astro/pull/5361) [`ee750087c`](https://github.com/withastro/astro/commit/ee750087ce360c54d349f160d84bbdafb0ec83b4) Thanks [@matthewp](https://github.com/matthewp)! - Allows @astrojs/image to be used in Vercel SSR

## 2.3.3

### Patch Changes

- [#5241](https://github.com/withastro/astro/pull/5241) [`070da6a79`](https://github.com/withastro/astro/commit/070da6a7926892917f9a3077cd644bd3a1b87e76) Thanks [@matthewp](https://github.com/matthewp)! - Fixes unknown error when using vercel/static

- Updated dependencies [[`b6a478f37`](https://github.com/withastro/astro/commit/b6a478f37648491321077750bfca7bddf3cafadd)]:
  - @astrojs/webapi@1.1.1

## 2.3.2

### Patch Changes

- [#5175](https://github.com/withastro/astro/pull/5175) [`abf41da77`](https://github.com/withastro/astro/commit/abf41da774516395a49aca30693dccdc4f8d7114) Thanks [@JuanM04](https://github.com/JuanM04)! - Edge adapter includes all the generated files (all files inside `dist/`) instead of only `entry.mjs`

## 2.3.1

### Patch Changes

- [#5127](https://github.com/withastro/astro/pull/5127) [`fad25aef2`](https://github.com/withastro/astro/commit/fad25aef2f9b51324cd7aa20701042e9574706a9) Thanks [@JuanM04](https://github.com/JuanM04)! - Fixed #5120

## 2.3.0

### Minor Changes

- [#5086](https://github.com/withastro/astro/pull/5086) [`f8198d250`](https://github.com/withastro/astro/commit/f8198d2502bbf7f7daf5854e7e12317e39a66fcc) Thanks [@JuanM04](https://github.com/JuanM04)! - Minify Edge Function output to save space

- [#5085](https://github.com/withastro/astro/pull/5085) [`cd25abae5`](https://github.com/withastro/astro/commit/cd25abae594f9c42d3766753dfeee4f476311f1e) Thanks [@JuanM04](https://github.com/JuanM04)! - Added `includeFiles` and `excludeFiles` options

## 2.2.0

### Minor Changes

- [#5056](https://github.com/withastro/astro/pull/5056) [`e55af8a23`](https://github.com/withastro/astro/commit/e55af8a23233b6335f45b7a04b9d026990fb616c) Thanks [@matthewp](https://github.com/matthewp)! - # New build configuration

  The ability to customize SSR build configuration more granularly is now available in Astro. You can now customize the output folder for `server` (the server code for SSR), `client` (your client-side JavaScript and assets), and `serverEntry` (the name of the entrypoint server module). Here are the defaults:

  ```js
  import { defineConfig } from 'astro/config';

  export default defineConfig({
    output: 'server',
    build: {
      server: './dist/server/',
      client: './dist/client/',
      serverEntry: 'entry.mjs',
    },
  });
  ```

  These new configuration options are only supported in SSR mode and are ignored when building to SSG (a static site).

  ## Integration hook change

  The integration hook `astro:build:start` includes a param `buildConfig` which includes all of these same options. You can continue to use this param in Astro 1.x, but it is deprecated in favor of the new `build.config` options. All of the built-in adapters have been updated to the new format. If you have an integration that depends on this param we suggest upgrading to do this instead:

  ```js
  export default function myIntegration() {
    return {
      name: 'my-integration',
      hooks: {
        'astro:config:setup': ({ updateConfig }) => {
          updateConfig({
            build: {
              server: '...',
            },
          });
        },
      },
    };
  }
  ```

## 2.1.1

### Patch Changes

- [#5033](https://github.com/withastro/astro/pull/5033) [`c1f991408`](https://github.com/withastro/astro/commit/c1f991408b817217dbd4035dcc4ac0a2fecd08b8) Thanks [@JuanM04](https://github.com/JuanM04)! - - Upgraded @vercel/nft to 0.22.1
  - Fix monorepos (#5020)

## 2.1.0

### Minor Changes

- [#4876](https://github.com/withastro/astro/pull/4876) [`d3091f89e`](https://github.com/withastro/astro/commit/d3091f89e92fcfe1ad48daca74055d54b1c853a3) Thanks [@matthewp](https://github.com/matthewp)! - Adds the Astro.cookies API

  `Astro.cookies` is a new API for manipulating cookies in Astro components and API routes.

  In Astro components, the new `Astro.cookies` object is a map-like object that allows you to get, set, delete, and check for a cookie's existence (`has`):

  ```astro
  ---
  type Prefs = {
    darkMode: boolean;
  };

  Astro.cookies.set<Prefs>(
    'prefs',
    { darkMode: true },
    {
      expires: '1 month',
    },
  );

  const prefs = Astro.cookies.get<Prefs>('prefs').json();
  ---

  <body data-theme={prefs.darkMode ? 'dark' : 'light'}></body>
  ```

  Once you've set a cookie with Astro.cookies it will automatically be included in the outgoing response.

  This API is also available with the same functionality in API routes:

  ```js
  export function post({ cookies }) {
    cookies.set('loggedIn', false);

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/login',
      },
    });
  }
  ```

  See [the RFC](https://github.com/withastro/rfcs/blob/main/proposals/0025-cookie-management.md) to learn more.

## 2.0.1

### Patch Changes

- [#4884](https://github.com/withastro/astro/pull/4884) [`fb91d04a5`](https://github.com/withastro/astro/commit/fb91d04a5cb8f84f5b1be0a4e0c6cd61ec514736) Thanks [@bluwy](https://github.com/bluwy)! - Set SSR target webworker

- Updated dependencies [[`5e4c5252b`](https://github.com/withastro/astro/commit/5e4c5252bd80cbaf6a7ee4d4503ece007664410f)]:
  - @astrojs/webapi@1.1.0

## 2.0.0

### Major Changes

- [#4713](https://github.com/withastro/astro/pull/4713) [`16113c3ae`](https://github.com/withastro/astro/commit/16113c3ae2ebff96136ebd31958fc5eb4369ee0d) Thanks [@JuanM04](https://github.com/JuanM04)! - Use Edge Functions instead of Edge Middlewares

## 1.0.2

### Patch Changes

- [#4558](https://github.com/withastro/astro/pull/4558) [`742966456`](https://github.com/withastro/astro/commit/7429664566f05ecebf6d57906f950627e62e690c) Thanks [@tony-sull](https://github.com/tony-sull)! - Adding the `withastro` keyword to include the adapters on the [Integrations Catalog](https://astro.build/integrations)

## 1.0.1

### Patch Changes

- [#4421](https://github.com/withastro/astro/pull/4421) [`7820096e1`](https://github.com/withastro/astro/commit/7820096e1ba29ecc58aa7e13311a255acd2fe977) Thanks [@bholmesdev](https://github.com/bholmesdev)! - Fix react-dom on Vercel edge

## 1.0.0

### Major Changes

- [`04ad44563`](https://github.com/withastro/astro/commit/04ad445632c67bdd60c1704e1e0dcbcaa27b9308) - > Astro v1.0 is out! Read the [official announcement post](https://astro.build/blog/astro-1/).

  **No breaking changes**. This package is now officially stable and compatible with `astro@1.0.0`!

### Patch Changes

- Updated dependencies [[`04ad44563`](https://github.com/withastro/astro/commit/04ad445632c67bdd60c1704e1e0dcbcaa27b9308)]:
  - @astrojs/webapi@1.0.0

## 0.4.0

### Minor Changes

- [#4068](https://github.com/withastro/astro/pull/4068) [`54b33d50f`](https://github.com/withastro/astro/commit/54b33d50fdb995ac056461be7e2128d911624f2d) Thanks [@matthewp](https://github.com/matthewp)! - Add explicit errors when omitting output config

## 0.3.0

### Minor Changes

- [#4015](https://github.com/withastro/astro/pull/4015) [`6fd161d76`](https://github.com/withastro/astro/commit/6fd161d7691cbf9d3ffa4646e46059dfd0940010) Thanks [@matthewp](https://github.com/matthewp)! - New `output` configuration option

  This change introduces a new "output target" configuration option (`output`). Setting the output target lets you decide the format of your final build, either:
  - `"static"` (default): A static site. Your final build will be a collection of static assets (HTML, CSS, JS) that you can deploy to any static site host.
  - `"server"`: A dynamic server application. Your final build will be an application that will run in a hosted server environment, generating HTML dynamically for different requests.

  If `output` is omitted from your config, the default value `"static"` will be used.

  When using the `"server"` output target, you must also include a runtime adapter via the `adapter` configuration. An adapter will _adapt_ your final build to run on the deployed platform of your choice (Netlify, Vercel, Node.js, Deno, etc).

  To migrate: No action is required for most users. If you currently define an `adapter`, you will need to also add `output: 'server'` to your config file to make it explicit that you are building a server. Here is an example of what that change would look like for someone deploying to Netlify:

  ```diff
  import { defineConfig } from 'astro/config';
  import netlify from '@astrojs/netlify/functions';

  export default defineConfig({
    adapter: netlify(),
  + output: 'server',
  });
  ```

* [#4018](https://github.com/withastro/astro/pull/4018) [`0cc6ede36`](https://github.com/withastro/astro/commit/0cc6ede362996b9faba57481a790d6eb7fba2045) Thanks [@okikio](https://github.com/okikio)! - Support for 404 and 500 pages in SSR

- [#3973](https://github.com/withastro/astro/pull/3973) [`5a23483ef`](https://github.com/withastro/astro/commit/5a23483efb3ba614b05a00064f84415620605204) Thanks [@matthewp](https://github.com/matthewp)! - Adds support for Astro.clientAddress

  The new `Astro.clientAddress` property allows you to get the IP address of the requested user.

  ```astro

  ```

  This property is only available when building for SSR, and only if the adapter you are using supports providing the IP address. If you attempt to access the property in a SSG app it will throw an error.

* [#4020](https://github.com/withastro/astro/pull/4020) [`1666fdb4c`](https://github.com/withastro/astro/commit/1666fdb4c508bed1f41aea16196aa127b64cb506) Thanks [@JuanM04](https://github.com/JuanM04)! - Removed requirement for `ENABLE_VC_BUILD=1`, since Build Output v3 is now stable. [Learn more](https://vercel.com/blog/build-output-api).

## 0.2.6

### Patch Changes

- [#3885](https://github.com/withastro/astro/pull/3885) [`bf5d1cc1e`](https://github.com/withastro/astro/commit/bf5d1cc1e71da38a14658c615e9481f2145cc6e7) Thanks [@delucis](https://github.com/delucis)! - Integration README fixes

## 0.2.5

### Patch Changes

- [#3865](https://github.com/withastro/astro/pull/3865) [`1f9e4857`](https://github.com/withastro/astro/commit/1f9e4857ff2b2cb7db89d619618cdf546cd3b3dc) Thanks [@delucis](https://github.com/delucis)! - Small README fixes

* [#3854](https://github.com/withastro/astro/pull/3854) [`b012ee55`](https://github.com/withastro/astro/commit/b012ee55b107dea0730286263b27d83e530fad5d) Thanks [@bholmesdev](https://github.com/bholmesdev)! - [astro add] Support adapters and third party packages

## 0.2.4

### Patch Changes

- [#3677](https://github.com/withastro/astro/pull/3677) [`8045c8ad`](https://github.com/withastro/astro/commit/8045c8ade16fe4306448b7f98a4560ef0557d378) Thanks [@Jutanium](https://github.com/Jutanium)! - Update READMEs

## 0.2.3

### Patch Changes

- Updated dependencies [[`4de53ecc`](https://github.com/withastro/astro/commit/4de53eccef346bed843b491b7ab93987d7d85655)]:
  - @astrojs/webapi@0.12.0

## 0.2.2

### Patch Changes

- [#3368](https://github.com/withastro/astro/pull/3368) [`9d01f93b`](https://github.com/withastro/astro/commit/9d01f93b1c7db5d4afc4041e6ee73fb52f24d2d1) Thanks [@JuanM04](https://github.com/JuanM04)! - Remove `nodeVersion` option for `serverless` target. Now it is inferred from Vercel

## 0.2.1

### Patch Changes

- [#3355](https://github.com/withastro/astro/pull/3355) [`945f5c68`](https://github.com/withastro/astro/commit/945f5c68e892f6f17e59e41d0dfa2a7841f96bbf) Thanks [@JuanM04](https://github.com/JuanM04)! - Added typescript definitions

## 0.2.0

### Minor Changes

- [#3216](https://github.com/withastro/astro/pull/3216) [`114bf63e`](https://github.com/withastro/astro/commit/114bf63e11f28299b13178ef1a412eed37ab7909) Thanks [@JuanM04](https://github.com/JuanM04)! - **[BREAKING]** Now with Build Output API (v3)! [See the README to get started](https://github.com/withastro/astro/tree/main/packages/integrations/vercel#readme).
  - `trailingSlash` redirects works without a `vercel.json` file: just configure them inside your `astro.config.mjs`
  - Multiple deploy targets: `edge`, `serverless` and `static`!
  - When building to `serverless`, your code isn't transpiled to CJS anymore.

  **Migrate from v0.1**
  1. Change the import inside `astro.config.mjs`:
     ```diff
     - import vercel from '@astrojs/vercel';
     + import vercel from '@astrojs/vercel/serverless';
     ```
  2. Rename the `ENABLE_FILE_SYSTEM_API` environment variable to `ENABLE_VC_BUILD`, as Vercel changed it.
  3. The output folder changed from `.output` to `.vercel/output` — you may need to update your `.gitignore`.

## 0.1.4

### Patch Changes

- [`cafd36ef`](https://github.com/withastro/astro/commit/cafd36ef774755b8efbe9e526a0b5ce7a47095f2) Thanks [@FredKSchott](https://github.com/FredKSchott)! - Update README

* [#3185](https://github.com/withastro/astro/pull/3185) [`eaad1769`](https://github.com/withastro/astro/commit/eaad17694f2120ddbd083bb1754e4418b8ea6aa9) Thanks [@JuanM04](https://github.com/JuanM04)! - Fixed `trailingSlash` for non-HTML pages

- [#3176](https://github.com/withastro/astro/pull/3176) [`725c44a7`](https://github.com/withastro/astro/commit/725c44a762dbc2f45a1d47ffa31b7e6e0b22ff95) Thanks [@JuanM04](https://github.com/JuanM04)! - Support trailingSlash

## 0.1.3

### Patch Changes

- [#3051](https://github.com/withastro/astro/pull/3051) [`b0ba22c5`](https://github.com/withastro/astro/commit/b0ba22c5ffab6575706ae904d0ad8cadc3f48d43) Thanks [@JuanM04](https://github.com/JuanM04)! - Fixed issues when converting from ESM to CJS

* [#3139](https://github.com/withastro/astro/pull/3139) [`4ac37973`](https://github.com/withastro/astro/commit/4ac3797344943df4124abd4043deda624440f035) Thanks [@JuanM04](https://github.com/JuanM04)! - Added warning when `ENABLE_FILE_SYSTEM_API` is not found

## 0.1.2

### Patch Changes

- [#3081](https://github.com/withastro/astro/pull/3081) [`f665d1a2`](https://github.com/withastro/astro/commit/f665d1a250ef34a9d1cbced9e4441c7e2dc246b8) Thanks [@JuanM04](https://github.com/JuanM04)! - Support dynamic paths

## 0.1.1

### Patch Changes

- [`815d62f1`](https://github.com/withastro/astro/commit/815d62f151a36fef7d09590d4962ca71bda61b32) Thanks [@FredKSchott](https://github.com/FredKSchott)! - no changes.

## 0.1.0

### Patch Changes

- [#3028](https://github.com/withastro/astro/pull/3028) [`982f64f6`](https://github.com/withastro/astro/commit/982f64f69a82d3c5f99b326a2ddcd368435d9b4a) Thanks [@JuanM04](https://github.com/JuanM04)! - Updated esbuild

* [#3008](https://github.com/withastro/astro/pull/3008) [`8bd49c95`](https://github.com/withastro/astro/commit/8bd49c95365f7bbce41e19b7e8658ad639c22f31) Thanks [@JuanM04](https://github.com/JuanM04)! - Updated integrations' `astro:build:done` hook: now it matches the client dist when using SSR

- [#3022](https://github.com/withastro/astro/pull/3022) [`8c04ff1f`](https://github.com/withastro/astro/commit/8c04ff1f0bea42d033832ce5047076e315cb38a3) Thanks [@matthewp](https://github.com/matthewp)! - Allows adapters to export default

* [#3000](https://github.com/withastro/astro/pull/3000) [`b5ed099e`](https://github.com/withastro/astro/commit/b5ed099eaf92b61faf2fb66ebd7179d3e8223ae5) Thanks [@JuanM04](https://github.com/JuanM04)! - Fixed build directory and clean-up

## 0.0.3-beta.1

### Patch Changes

- [#3022](https://github.com/withastro/astro/pull/3022) [`8c04ff1f`](https://github.com/withastro/astro/commit/8c04ff1f0bea42d033832ce5047076e315cb38a3) Thanks [@matthewp](https://github.com/matthewp)! - Allows adapters to export default

## 0.0.3-beta.0

### Patch Changes

- [#3008](https://github.com/withastro/astro/pull/3008) [`8bd49c95`](https://github.com/withastro/astro/commit/8bd49c95365f7bbce41e19b7e8658ad639c22f31) Thanks [@JuanM04](https://github.com/JuanM04)! - Updated integrations' `astro:build:done` hook: now it matches the client dist when using SSR

* [#3000](https://github.com/withastro/astro/pull/3000) [`b5ed099e`](https://github.com/withastro/astro/commit/b5ed099eaf92b61faf2fb66ebd7179d3e8223ae5) Thanks [@JuanM04](https://github.com/JuanM04)! - Fixed build directory and clean-up

## 0.0.2

### Patch Changes

- [#2915](https://github.com/withastro/astro/pull/2915) [`e30aa4df`](https://github.com/withastro/astro/commit/e30aa4dfef2bbe874e2fe7f07232bf8a3c092317) Thanks [@JuanM04](https://github.com/JuanM04)! - Add a Vercel adapter for SSR
