# Changelog

## 1.19.1 (2025-09-09)

Full Changelog: [v1.19.0...v1.19.1](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.19.0...v1.19.1)

### Bug Fixes

* coerce nullable values to undefined ([f94a764](https://github.com/terminaldotshop/terminal-sdk-js/commit/f94a764b272b054e69f5f071ebd1c0b4aebe081e))

## 1.19.0 (2025-09-06)

Full Changelog: [v1.18.2...v1.19.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.18.2...v1.19.0)

### Features

* **mcp:** add code execution tool ([f6b3d81](https://github.com/terminaldotshop/terminal-sdk-js/commit/f6b3d8118938f950429d00c9ba186b690d2e20f3))
* **mcp:** add option to infer mcp client ([496e98b](https://github.com/terminaldotshop/terminal-sdk-js/commit/496e98bfa286b055acc3d31d5a8dfe0539a7454c))
* **mcp:** allow setting logging level ([b3e657c](https://github.com/terminaldotshop/terminal-sdk-js/commit/b3e657ce405828af793d17980ad1a1fc53be5b2e))
* **mcp:** expose client options in `streamableHTTPApp` ([7a0b2e6](https://github.com/terminaldotshop/terminal-sdk-js/commit/7a0b2e6762a52a8a30117bef3f0b3a21b50540c0))
* **mcp:** parse query string as mcp client options in mcp server ([5af6022](https://github.com/terminaldotshop/terminal-sdk-js/commit/5af602246b949f4838f73dc29e7335c15359fdf6))


### Bug Fixes

* **mcp:** fix query options parsing ([4502375](https://github.com/terminaldotshop/terminal-sdk-js/commit/4502375e383ac13d42a9ec7e1ba8b19dbdf403a0))


### Chores

* ci build action ([12705ec](https://github.com/terminaldotshop/terminal-sdk-js/commit/12705ec34a4711581d6123e9e19332ff60170e61))
* **deps:** update dependency node-fetch to v2.6.13 ([e3d170c](https://github.com/terminaldotshop/terminal-sdk-js/commit/e3d170c6015b7f699ea1b09b92098e274ebecdc6))
* **internal:** codegen related update ([a068897](https://github.com/terminaldotshop/terminal-sdk-js/commit/a0688977cfa60891beed29127e1764faa4c5ccc7))
* **internal:** codegen related update ([d8a41e5](https://github.com/terminaldotshop/terminal-sdk-js/commit/d8a41e57ea408214a55a6cfebcb7d9f5ef2098c0))
* **internal:** codegen related update ([b551f54](https://github.com/terminaldotshop/terminal-sdk-js/commit/b551f549ff940265b80ed65e4435fa3c29d21794))
* **internal:** codegen related update ([b84d4f4](https://github.com/terminaldotshop/terminal-sdk-js/commit/b84d4f4c43b75d2ee3355cae901bf9ca66667fd3))
* **internal:** formatting change ([ae095d7](https://github.com/terminaldotshop/terminal-sdk-js/commit/ae095d774c68c21d3962406755f59f72320fe2d0))
* **internal:** make mcp-server publishing public by defaut ([7bdd2b3](https://github.com/terminaldotshop/terminal-sdk-js/commit/7bdd2b3f08a276e4a3a751e1ea4a374fc9906d5d))
* **internal:** refactor array check ([768423b](https://github.com/terminaldotshop/terminal-sdk-js/commit/768423b460180a8461db9570bfa0b5ab2d8c69f4))
* **mcp:** add cors to oauth metadata route ([e75affd](https://github.com/terminaldotshop/terminal-sdk-js/commit/e75affd4a666f9b4d4b05dc248351d05ebd95e82))
* **mcp:** document remote server in README.md ([3c60755](https://github.com/terminaldotshop/terminal-sdk-js/commit/3c607558255a700a8e16235c50816e5f65f80923))
* **mcp:** update package.json ([c53cbfc](https://github.com/terminaldotshop/terminal-sdk-js/commit/c53cbfc9c31ef43cbad6338b43b5f47c7b7230b1))
* **mcp:** update README ([691d97a](https://github.com/terminaldotshop/terminal-sdk-js/commit/691d97a15feeda2dcc1c860c7b69cdd3774cd814))
* **mcp:** update types ([532c63c](https://github.com/terminaldotshop/terminal-sdk-js/commit/532c63cbf2ba8ce937e63b6500f9b74ce2329d3d))
* update CI script ([8e5dc26](https://github.com/terminaldotshop/terminal-sdk-js/commit/8e5dc2698ed4d40f76b90245e29f2492fe03a771))

## 1.18.2 (2025-08-15)

Full Changelog: [v1.18.1...v1.18.2](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.18.1...v1.18.2)

### Features

* **mcp:** add unix socket option for remote MCP ([507fc99](https://github.com/terminaldotshop/terminal-sdk-js/commit/507fc99631ebbf197ab73dfe5b8ac8ac3928375d))


### Bug Fixes

* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([3b1d322](https://github.com/terminaldotshop/terminal-sdk-js/commit/3b1d322db9436cd25257ea5e6f56512d0ce82855))


### Chores

* **internal:** codegen related update ([922a386](https://github.com/terminaldotshop/terminal-sdk-js/commit/922a386dbf2aaa0109de1e8db09c6a4b928177a5))
* **internal:** move publish config ([7f8c2fd](https://github.com/terminaldotshop/terminal-sdk-js/commit/7f8c2fd7c8eb678fc1d2994e8e25d0556f696e9c))
* **internal:** update comment in script ([a163fbb](https://github.com/terminaldotshop/terminal-sdk-js/commit/a163fbb5b77685f15e0792624b47631b42401cdd))
* **mcp:** minor cleanup of types and package.json ([82e7df4](https://github.com/terminaldotshop/terminal-sdk-js/commit/82e7df498cc705c0ae3a0244a41943474f123793))
* **mcp:** refactor streamable http transport ([7f17cbc](https://github.com/terminaldotshop/terminal-sdk-js/commit/7f17cbc4967f34b9cbc526c3fbe268d8337590ba))
* update @stainless-api/prism-cli to v5.15.0 ([1fc5282](https://github.com/terminaldotshop/terminal-sdk-js/commit/1fc52825897204db6d52a4cd537434c41c8e0015))

## 1.18.1 (2025-08-06)

Full Changelog: [v1.18.0...v1.18.1](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.18.0...v1.18.1)

### Features

* **mcp:** remote server with passthru auth ([c731dbb](https://github.com/terminaldotshop/terminal-sdk-js/commit/c731dbb608e7a24707d617aecd2d53a805d92b90))


### Bug Fixes

* **mcp:** fix bug in header handling ([fa098cb](https://github.com/terminaldotshop/terminal-sdk-js/commit/fa098cb8c42908d2fdd4c28978116c992acd0a2d))


### Chores

* **internal:** codegen related update ([4fa35d9](https://github.com/terminaldotshop/terminal-sdk-js/commit/4fa35d9dde8c606f4ab479891176bce0c2eef891))

## 1.18.0 (2025-08-05)

Full Changelog: [v1.17.3...v1.18.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.17.3...v1.18.0)

### Features

* **api:** manual updates ([dfba1f4](https://github.com/terminaldotshop/terminal-sdk-js/commit/dfba1f43316eefc8d2e5112d66166c09b36d8734))

## 1.17.3 (2025-08-01)

Full Changelog: [v1.17.2...v1.17.3](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.17.2...v1.17.3)

### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([74901c8](https://github.com/terminaldotshop/terminal-sdk-js/commit/74901c8386eeb7b672c62ea93a8238de7d32a5f8))
* **mcp:** reverse validJson capability option and limit scope ([8621727](https://github.com/terminaldotshop/terminal-sdk-js/commit/8621727225975ce08a7cf84d3d26466bd434c17a))

## 1.17.2 (2025-07-31)

Full Changelog: [v1.17.1...v1.17.2](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.17.1...v1.17.2)

### Bug Fixes

* **mcp:** fix tool description of jq_filter ([bfc7ab2](https://github.com/terminaldotshop/terminal-sdk-js/commit/bfc7ab2f5348aff530df807c321294d9e90cc0b0))


### Chores

* **internal:** codegen related update ([ec3d000](https://github.com/terminaldotshop/terminal-sdk-js/commit/ec3d000ba4495abb8a18127f529764f9d71c6f83))
* **internal:** remove redundant imports config ([de58290](https://github.com/terminaldotshop/terminal-sdk-js/commit/de58290e9dc1f04fa5e515dba7eda58ff23ce5bd))

## 1.17.1 (2025-07-18)

Full Changelog: [v1.17.0...v1.17.1](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.17.0...v1.17.1)

### Bug Fixes

* **mcp:** include required section for top-level properties and support naming transformations ([0c2f51d](https://github.com/terminaldotshop/terminal-sdk-js/commit/0c2f51d1eead4a15faa25d1a645261bc953509e4))


### Chores

* **mcp:** formatting ([a93e66f](https://github.com/terminaldotshop/terminal-sdk-js/commit/a93e66f62914706dc6489d8fad19c95cdabfd949))
* **mcp:** rework imports in tools ([4535a21](https://github.com/terminaldotshop/terminal-sdk-js/commit/4535a2105abb5c8c7e75c16438d0acddabc43aac))

## 1.17.0 (2025-07-16)

Full Changelog: [v1.16.0...v1.17.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.16.0...v1.17.0)

### Features

* clean up environment call outs ([cb796c9](https://github.com/terminaldotshop/terminal-sdk-js/commit/cb796c9f8659b4a134e28bfdadaac08c3808a93e))


### Bug Fixes

* **mcp:** support jq filtering on cloudflare workers ([a920dd1](https://github.com/terminaldotshop/terminal-sdk-js/commit/a920dd1230140f2bff18239a21b2904f5a2771c0))

## 1.16.0 (2025-07-11)

Full Changelog: [v1.15.2...v1.16.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.15.2...v1.16.0)

### Features

* **mcp:** support filtering tool results by a jq expression ([ed1b1b6](https://github.com/terminaldotshop/terminal-sdk-js/commit/ed1b1b6f09eaa36bd975394db80a0136c8b1ed32))


### Bug Fixes

* **mcp:** relax input type for asTextContextResult ([e5e1cff](https://github.com/terminaldotshop/terminal-sdk-js/commit/e5e1cff008344c04358a0998b8b8d3dcf3bfa72f))


### Chores

* make some internal functions async ([98c77c6](https://github.com/terminaldotshop/terminal-sdk-js/commit/98c77c6d91cf7f076e2d66be629211a6907b6cd5))

## 1.15.2 (2025-07-04)

Full Changelog: [v1.15.1...v1.15.2](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.15.1...v1.15.2)

### Bug Fixes

* **build:** bump node version in CI build to 20 to be compatible with MCP package ([b3ce137](https://github.com/terminaldotshop/terminal-sdk-js/commit/b3ce137c5343a783a40d8c59dfc05b1652441cc6))
* **client:** don't send `Content-Type` for bodyless methods ([5d84adc](https://github.com/terminaldotshop/terminal-sdk-js/commit/5d84adcd4937ba03866b8b8ecd87a88910f107e5))


### Chores

* **ci:** only run for pushes and fork pull requests ([5d2961c](https://github.com/terminaldotshop/terminal-sdk-js/commit/5d2961ca1b33fe4548d079db560a43a8d0a88c96))
* mention unit type in timeout docs ([0b981d6](https://github.com/terminaldotshop/terminal-sdk-js/commit/0b981d6214a70ae3e8336c8e91e655ee3962dc7f))

## 1.15.1 (2025-06-27)

Full Changelog: [v1.15.0...v1.15.1](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.15.0...v1.15.1)

### Bug Fixes

* **ci:** release-doctor — report correct token name ([f8bb7b8](https://github.com/terminaldotshop/terminal-sdk-js/commit/f8bb7b81d562fd4959247d95db6cfbc0876e1ab0))


### Refactors

* **types:** replace Record with mapped types ([a94b792](https://github.com/terminaldotshop/terminal-sdk-js/commit/a94b7927d3413f4650dd9dd8e59a495b4bddc2ca))

## 1.15.0 (2025-06-17)

Full Changelog: [v1.14.1...v1.15.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.14.1...v1.15.0)

### Features

* **client:** add support for endpoint-specific base URLs ([52c7167](https://github.com/terminaldotshop/terminal-sdk-js/commit/52c7167eda4e1119144deb4014ec483e75d2f8ee))
* **mcp:** implement support for binary responses ([9affb11](https://github.com/terminaldotshop/terminal-sdk-js/commit/9affb118098adc41f51ad21083c2049094988453))
* **mcp:** include http information in tools ([0a58323](https://github.com/terminaldotshop/terminal-sdk-js/commit/0a58323ffc49ac70eb8c952962d7bcbc68a76636))
* **mcp:** set X-Stainless-MCP header ([41a3596](https://github.com/terminaldotshop/terminal-sdk-js/commit/41a3596f65b4f01a06a2552b22042cf0f8b1e363))


### Bug Fixes

* publish script — handle NPM errors correctly ([b2d663b](https://github.com/terminaldotshop/terminal-sdk-js/commit/b2d663bc3b5a709d3d320a1490776ccbcce037be))


### Chores

* **ci:** enable for pull requests ([fdbc293](https://github.com/terminaldotshop/terminal-sdk-js/commit/fdbc29357728339d7356551b9359b200dc273b7a))
* **docs:** use top-level-await in example snippets ([3c973ca](https://github.com/terminaldotshop/terminal-sdk-js/commit/3c973ca6c79d0266a32d26ea2d22a7ef0e50d893))
* improve publish-npm script --latest tag logic ([a7e84ec](https://github.com/terminaldotshop/terminal-sdk-js/commit/a7e84ecfb86469ba2456ae1a5963d996cabd344f))
* **internal:** make base APIResource abstract ([6fc67ff](https://github.com/terminaldotshop/terminal-sdk-js/commit/6fc67ff16fdad22536d043456340480a67172335))
* **mcp:** provides high-level initMcpServer function and exports known clients ([147186b](https://github.com/terminaldotshop/terminal-sdk-js/commit/147186b67ddf2501b781693863901be5fa630aa6))
* **mcp:** remove duplicate assignment ([25fa9b7](https://github.com/terminaldotshop/terminal-sdk-js/commit/25fa9b7d696a8111abfd37acacb988afa4b90889))

## 1.14.1 (2025-05-28)

Full Changelog: [v1.14.0...v1.14.1](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.14.0...v1.14.1)

### Bug Fixes

* **mcp:** include description in dynamic tool search ([9bd6ff4](https://github.com/terminaldotshop/terminal-sdk-js/commit/9bd6ff4618d5114f888d87f4cbbd18f6d76d39da))

## 1.14.0 (2025-05-24)

Full Changelog: [v1.13.0...v1.14.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.13.0...v1.14.0)

### Features

* **mcp:** support initializing the server with an "environment" ([8352096](https://github.com/terminaldotshop/terminal-sdk-js/commit/83520967133f648af43452bfa323e7b7441861e0))


### Bug Fixes

* **mcp:** fix cursor schema transformation issue with recursive references ([0352c0a](https://github.com/terminaldotshop/terminal-sdk-js/commit/0352c0ad4f128192ea44b5cb1d36650880ede853))


### Chores

* **docs:** grammar improvements ([7a97711](https://github.com/terminaldotshop/terminal-sdk-js/commit/7a977115b6d2ad546d80a5bf2f164341d6e0f587))

## 1.13.0 (2025-05-13)

Full Changelog: [v1.12.1...v1.13.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.12.1...v1.13.0)

### Features

* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([374e31f](https://github.com/terminaldotshop/terminal-sdk-js/commit/374e31f25f0c90f412a365d5926906311ea15621))


### Bug Fixes

* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([5ec3a3c](https://github.com/terminaldotshop/terminal-sdk-js/commit/5ec3a3c5c67813bbee5ccddf74ee8deb2cc4710f))


### Chores

* **build:** automatically build subpackages if present ([dd82a47](https://github.com/terminaldotshop/terminal-sdk-js/commit/dd82a474bd5745d18ba60be4bc661363b25e6c28))
* **internal:** codegen related update ([2056104](https://github.com/terminaldotshop/terminal-sdk-js/commit/20561047ea078d9038df9cf065698a5da8c18ff0))
* **tests:** use node 22 for CI tests ([a25bc44](https://github.com/terminaldotshop/terminal-sdk-js/commit/a25bc4450b56ba11a4f7a8c506bcbb242e725c34))


### Documentation

* add examples to tsdocs ([5a9231e](https://github.com/terminaldotshop/terminal-sdk-js/commit/5a9231e7ed4825872162bf7cb795923b2f74827a))

## 1.12.1 (2025-05-06)

Full Changelog: [v1.12.0...v1.12.1](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.12.0...v1.12.1)

### Bug Fixes

* **mcp:** remove ajv dependency so MCP servers are more compatible with Cloudflare Workers ([cc3736b](https://github.com/terminaldotshop/terminal-sdk-js/commit/cc3736b422bb6578491fec51e49e45e499df582d))


### Chores

* **ci:** bump node version for release workflows ([cb7361f](https://github.com/terminaldotshop/terminal-sdk-js/commit/cb7361f6f755f19f258f6f98c8eb1f9af43fa21f))
* **internal:** update dependency ([9629926](https://github.com/terminaldotshop/terminal-sdk-js/commit/96299261091c86d82fea03972dbf3373c1a1e4e4))


### Documentation

* **readme:** fix typo ([eb37b28](https://github.com/terminaldotshop/terminal-sdk-js/commit/eb37b28542a8c3d909fdc4923a64fc8af118520e))

## 1.12.0 (2025-05-01)

Full Changelog: [v1.11.0...v1.12.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.11.0...v1.12.0)

### Features

* more gracefully handle $refs and work around schema limitations ([83f97dd](https://github.com/terminaldotshop/terminal-sdk-js/commit/83f97dd32a71948801126f1366a3db99b817d199))


### Bug Fixes

* **mcp:** normalize tool name casing to snake case ([347a026](https://github.com/terminaldotshop/terminal-sdk-js/commit/347a026afee7fd8d214c810d61f28f564d6d42bd))

## 1.11.0 (2025-04-24)

Full Changelog: [v1.10.0...v1.11.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.10.0...v1.11.0)

### Features

* **api:** global region, typed tracking status, variant tags ([149d721](https://github.com/terminaldotshop/terminal-sdk-js/commit/149d7214ef7883f269c64d727a889e2456fa5afd))
* **api:** product variant descriptions ([89fb5db](https://github.com/terminaldotshop/terminal-sdk-js/commit/89fb5db2fcd091cda1e02c723962d85568438b45))


### Chores

* **ci:** only use depot for staging repos ([ef8174a](https://github.com/terminaldotshop/terminal-sdk-js/commit/ef8174a9dcf8eae0fed6e0cf8dd068da07df6766))
* **internal:** codegen related update ([6a2d08f](https://github.com/terminaldotshop/terminal-sdk-js/commit/6a2d08fa3c5a99cc189088a48217c6c52c15929b))

## 1.10.0 (2025-04-23)

Full Changelog: [v1.9.0...v1.10.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.9.0...v1.10.0)

### Features

* **api:** include price on subscriptions ([ae6ee1b](https://github.com/terminaldotshop/terminal-sdk-js/commit/ae6ee1b8963e995f50e73faaa3ed4d6d19b3a3c9))


### Chores

* **ci:** add timeout thresholds for CI jobs ([21a2230](https://github.com/terminaldotshop/terminal-sdk-js/commit/21a2230439af60542adb77ddf8af866761efdbd0))

## 1.9.0 (2025-04-18)

Full Changelog: [v1.8.0...v1.9.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.8.0...v1.9.0)

### Features

* **api:** update subscription route ([9978037](https://github.com/terminaldotshop/terminal-sdk-js/commit/9978037d60274f7063d7b6d374b6229dbb2ebf1f))

## 1.8.0 (2025-04-15)

Full Changelog: [v1.7.1...v1.8.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.7.1...v1.8.0)

### Features

* **api:** include created timestamps ([963b764](https://github.com/terminaldotshop/terminal-sdk-js/commit/963b76486dda4d409811db34b45948a320d562ff))


### Chores

* **client:** minor internal fixes ([4285926](https://github.com/terminaldotshop/terminal-sdk-js/commit/428592695ec9ca1689abf9b6f470aa93ee13cbe5))

## 1.7.1 (2025-04-13)

Full Changelog: [v1.7.0...v1.7.1](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.7.0...v1.7.1)

### Chores

* configure new SDK language ([ca77de5](https://github.com/terminaldotshop/terminal-sdk-js/commit/ca77de54e92195de2b83f874b3b7ebbe8948b999))
* **internal:** reduce CI branch coverage ([b450bf9](https://github.com/terminaldotshop/terminal-sdk-js/commit/b450bf94c4c622b7acb8679627faaf60595851db))
* **internal:** upload builds and expand CI branch coverage ([6845ab1](https://github.com/terminaldotshop/terminal-sdk-js/commit/6845ab1eba2038601d2c1ccf4c503c303d54a88f))
* **mcp:** update package name ([329aa46](https://github.com/terminaldotshop/terminal-sdk-js/commit/329aa46bb78d20935b63720fda0e450ec008dc48))

## 1.7.0 (2025-04-09)

Full Changelog: [v1.6.7...v1.7.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.6.7...v1.7.0)

### Features

* **api:** include shipment tracking info on order ([#213](https://github.com/terminaldotshop/terminal-sdk-js/issues/213)) ([f9f67ea](https://github.com/terminaldotshop/terminal-sdk-js/commit/f9f67ea8e124559dc757f4415cd21a1f42772a67))

## 1.6.7 (2025-04-05)

Full Changelog: [v1.6.6...v1.6.7](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.6.6...v1.6.7)

### Bug Fixes

* **mcp:** remove unused tools.ts ([#210](https://github.com/terminaldotshop/terminal-sdk-js/issues/210)) ([f81bf94](https://github.com/terminaldotshop/terminal-sdk-js/commit/f81bf94b63bbfc14babc8b7b21c433633ae72c13))

## 1.6.6 (2025-04-04)

Full Changelog: [v1.6.5...v1.6.6](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.6.5...v1.6.6)

### Bug Fixes

* **api:** improve type resolution when importing as a package ([#208](https://github.com/terminaldotshop/terminal-sdk-js/issues/208)) ([821366e](https://github.com/terminaldotshop/terminal-sdk-js/commit/821366ea19134086805bc68467b46016aad65d8b))


### Chores

* **internal:** add aliases for Record and Array ([#206](https://github.com/terminaldotshop/terminal-sdk-js/issues/206)) ([c96b422](https://github.com/terminaldotshop/terminal-sdk-js/commit/c96b422c35d979a999391eba5f159dc2da3cba04))

## 1.6.5 (2025-04-03)

Full Changelog: [v1.6.4...v1.6.5](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.6.4...v1.6.5)

### Bug Fixes

* **client:** send `X-Stainless-Timeout` in seconds ([#203](https://github.com/terminaldotshop/terminal-sdk-js/issues/203)) ([9882f7a](https://github.com/terminaldotshop/terminal-sdk-js/commit/9882f7a8eb073a9614ea4794c494105c088e2184))

## 1.6.4 (2025-04-02)

Full Changelog: [v1.6.3...v1.6.4](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.6.3...v1.6.4)

### Bug Fixes

* pluralize `list` response variables ([#200](https://github.com/terminaldotshop/terminal-sdk-js/issues/200)) ([7c6f5fb](https://github.com/terminaldotshop/terminal-sdk-js/commit/7c6f5fb1b1dcb26f467bc8e479c3d04624f3acf0))

## 1.6.3 (2025-04-01)

Full Changelog: [v1.6.2...v1.6.3](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.6.2...v1.6.3)

### Bug Fixes

* remove trailing / for environments ([#197](https://github.com/terminaldotshop/terminal-sdk-js/issues/197)) ([1c68e14](https://github.com/terminaldotshop/terminal-sdk-js/commit/1c68e14c17464dd3a299fb3ed20a0bdd6e47e160))

## 1.6.2 (2025-03-28)

Full Changelog: [v1.6.1...v1.6.2](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.6.1...v1.6.2)

### Bug Fixes

* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#194](https://github.com/terminaldotshop/terminal-sdk-js/issues/194)) ([caab92b](https://github.com/terminaldotshop/terminal-sdk-js/commit/caab92bcbf7959cfc5feef615cc85c0bc3765dd0))

## 1.6.1 (2025-03-22)

Full Changelog: [v1.6.0...v1.6.1](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.6.0...v1.6.1)

### Bug Fixes

* avoid type error in certain environments ([#192](https://github.com/terminaldotshop/terminal-sdk-js/issues/192)) ([2ce1349](https://github.com/terminaldotshop/terminal-sdk-js/commit/2ce1349d7b8e4da9302448d31f62f75182caf1f8))


### Chores

* **exports:** cleaner resource index imports ([#189](https://github.com/terminaldotshop/terminal-sdk-js/issues/189)) ([dda672d](https://github.com/terminaldotshop/terminal-sdk-js/commit/dda672dddd59dfc01e3d35ad86a499b7fcbb306d))
* **exports:** stop using path fallbacks ([#190](https://github.com/terminaldotshop/terminal-sdk-js/issues/190)) ([3f3d651](https://github.com/terminaldotshop/terminal-sdk-js/commit/3f3d6519eede083390a7f663db65b4dda609dd25))
* **internal:** remove extra empty newlines ([#187](https://github.com/terminaldotshop/terminal-sdk-js/issues/187)) ([ee14dbd](https://github.com/terminaldotshop/terminal-sdk-js/commit/ee14dbd3deff188132e1529c55b4ff2142ca7578))

## 1.6.0 (2025-03-13)

Full Changelog: [v1.5.0...v1.6.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.5.0...v1.6.0)

### Features

* **api:** region model ([#184](https://github.com/terminaldotshop/terminal-sdk-js/issues/184)) ([6871a2c](https://github.com/terminaldotshop/terminal-sdk-js/commit/6871a2c0ed896f608bf7a5d67624a2c7d48c47ea))

## 1.5.0 (2025-03-13)

Full Changelog: [v1.4.0...v1.5.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.4.0...v1.5.0)

### Features

* **api:** region type ([#181](https://github.com/terminaldotshop/terminal-sdk-js/issues/181)) ([0fbf893](https://github.com/terminaldotshop/terminal-sdk-js/commit/0fbf89347b04fa08f4d6eb7a4bc870b3736bf507))

## 1.4.0 (2025-03-13)

Full Changelog: [v1.3.0...v1.4.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.3.0...v1.4.0)

### Features

* **api:** add region to `GET /view/init` ([#178](https://github.com/terminaldotshop/terminal-sdk-js/issues/178)) ([c0388e6](https://github.com/terminaldotshop/terminal-sdk-js/commit/c0388e6fed8ab750c2575880ce6167ff867522bb))

## 1.3.0 (2025-03-13)

Full Changelog: [v1.2.0...v1.3.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.2.0...v1.3.0)

### Features

* **api:** remove gift cards ([#175](https://github.com/terminaldotshop/terminal-sdk-js/issues/175)) ([35afcc7](https://github.com/terminaldotshop/terminal-sdk-js/commit/35afcc76e5a53dc97f52dd9d56395419d3ce7b9a))

## 1.2.0 (2025-03-13)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.1.0...v1.2.0)

### Features

* **api:** clear cart api ([#172](https://github.com/terminaldotshop/terminal-sdk-js/issues/172)) ([854938c](https://github.com/terminaldotshop/terminal-sdk-js/commit/854938c1a1cd3cf0ec7203b89b4157bebc48eb0f))

## 1.1.0 (2025-03-11)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v1.0.0...v1.1.0)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#167](https://github.com/terminaldotshop/terminal-sdk-js/issues/167)) ([6879940](https://github.com/terminaldotshop/terminal-sdk-js/commit/6879940badcc3e2701ad32a572e57883462b0bf9))
* **api:** gift cards ([#170](https://github.com/terminaldotshop/terminal-sdk-js/issues/170)) ([79f3fbc](https://github.com/terminaldotshop/terminal-sdk-js/commit/79f3fbc33e5aebe3cba6388f68392c3d6941d71a))
* **client:** accept RFC6838 JSON content types ([#169](https://github.com/terminaldotshop/terminal-sdk-js/issues/169)) ([9a0ce48](https://github.com/terminaldotshop/terminal-sdk-js/commit/9a0ce48b87c4d96871b915d5e7a71a000f9c69f0))

## 1.0.0 (2025-03-07)

Full Changelog: [v0.15.0-alpha...v1.0.0](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.15.0-alpha...v1.0.0)

### Features

* **api:** manual updates ([#164](https://github.com/terminaldotshop/terminal-sdk-js/issues/164)) ([6dc3ff9](https://github.com/terminaldotshop/terminal-sdk-js/commit/6dc3ff942416133d50c77997f2995cf6c5f0dff0))

## 0.15.0-alpha (2025-02-28)

Full Changelog: [v0.14.0-alpha...v0.15.0-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.14.0-alpha...v0.15.0-alpha)

### Features

* **api:** manual updates ([#161](https://github.com/terminaldotshop/terminal-sdk-js/issues/161)) ([c67e5a0](https://github.com/terminaldotshop/terminal-sdk-js/commit/c67e5a0541e5e8ee6e1fe9086a8a0ccac50df494))

## 0.14.0-alpha (2025-02-28)

Full Changelog: [v0.13.0-alpha...v0.14.0-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.13.0-alpha...v0.14.0-alpha)

### Features

* **api:** manual updates ([#159](https://github.com/terminaldotshop/terminal-sdk-js/issues/159)) ([7ffe202](https://github.com/terminaldotshop/terminal-sdk-js/commit/7ffe20259ac6a691d41719e21d9262ce5c9d3f67))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#157](https://github.com/terminaldotshop/terminal-sdk-js/issues/157)) ([1de28d3](https://github.com/terminaldotshop/terminal-sdk-js/commit/1de28d338462e4dc94b7a72f52f0a2ab7af0c3df))

## 0.13.0-alpha (2025-02-26)

Full Changelog: [v0.12.0-alpha...v0.13.0-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.12.0-alpha...v0.13.0-alpha)

### Features

* **api:** manual updates ([#154](https://github.com/terminaldotshop/terminal-sdk-js/issues/154)) ([819943e](https://github.com/terminaldotshop/terminal-sdk-js/commit/819943ee564da2873e2d4375873ec95bf0305d90))

## 0.12.0-alpha (2025-02-26)

Full Changelog: [v0.11.0-alpha...v0.12.0-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.11.0-alpha...v0.12.0-alpha)

### Features

* **api:** manual updates ([#151](https://github.com/terminaldotshop/terminal-sdk-js/issues/151)) ([e5fd4c5](https://github.com/terminaldotshop/terminal-sdk-js/commit/e5fd4c584609b98835c982ce3a2a4264047922ea))

## 0.11.0-alpha (2025-02-25)

Full Changelog: [v0.10.0-alpha...v0.11.0-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.10.0-alpha...v0.11.0-alpha)

### Features

* **api:** manual updates ([#149](https://github.com/terminaldotshop/terminal-sdk-js/issues/149)) ([1753531](https://github.com/terminaldotshop/terminal-sdk-js/commit/1753531be1acffc50d85ea077bc6daa2db02f070))


### Chores

* **internal:** fix devcontainers setup ([#147](https://github.com/terminaldotshop/terminal-sdk-js/issues/147)) ([0ed71a0](https://github.com/terminaldotshop/terminal-sdk-js/commit/0ed71a0f21aa38dbab975bad708b879a2a7b03b6))

## 0.10.0-alpha (2025-02-17)

Full Changelog: [v0.9.0-alpha...v0.10.0-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.9.0-alpha...v0.10.0-alpha)

### Features

* **api:** manual updates ([#144](https://github.com/terminaldotshop/terminal-sdk-js/issues/144)) ([beb3548](https://github.com/terminaldotshop/terminal-sdk-js/commit/beb3548144ddd5c3ea79151f2d6a1dab89e09ab9))

## 0.9.0-alpha (2025-02-16)

Full Changelog: [v0.8.0-alpha...v0.9.0-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.8.0-alpha...v0.9.0-alpha)

### Features

* **api:** manual updates ([#141](https://github.com/terminaldotshop/terminal-sdk-js/issues/141)) ([209e807](https://github.com/terminaldotshop/terminal-sdk-js/commit/209e807d147f8e877b01e7322543e840ace54ab5))

## 0.8.0-alpha (2025-02-16)

Full Changelog: [v0.7.0-alpha...v0.8.0-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.7.0-alpha...v0.8.0-alpha)

### Features

* **api:** manual updates ([#138](https://github.com/terminaldotshop/terminal-sdk-js/issues/138)) ([015a3d1](https://github.com/terminaldotshop/terminal-sdk-js/commit/015a3d13d3c0131f02ba15bbd57c6019d919d8c6))

## 0.7.0-alpha (2025-02-16)

Full Changelog: [v0.6.1-alpha...v0.7.0-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.6.1-alpha...v0.7.0-alpha)

### Features

* **api:** manual updates ([#135](https://github.com/terminaldotshop/terminal-sdk-js/issues/135)) ([a2391a0](https://github.com/terminaldotshop/terminal-sdk-js/commit/a2391a01f3be5aa4dddb6e51a9cd3a2284b24d04))

## 0.6.1-alpha (2025-02-14)

Full Changelog: [v0.6.0-alpha...v0.6.1-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.6.0-alpha...v0.6.1-alpha)

### Bug Fixes

* **client:** fix export map for index exports ([#132](https://github.com/terminaldotshop/terminal-sdk-js/issues/132)) ([0c1b9ec](https://github.com/terminaldotshop/terminal-sdk-js/commit/0c1b9ecff9c807787927171bb3c69a3c3092fa7c))

## 0.6.0-alpha (2025-02-06)

Full Changelog: [v0.5.0-alpha...v0.6.0-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.5.0-alpha...v0.6.0-alpha)

### Features

* **api:** manual updates ([#130](https://github.com/terminaldotshop/terminal-sdk-js/issues/130)) ([65456ce](https://github.com/terminaldotshop/terminal-sdk-js/commit/65456ce13d90faa490e47e3d3e0b10de7c8d120a))
* **client:** send `X-Stainless-Timeout` header ([#129](https://github.com/terminaldotshop/terminal-sdk-js/issues/129)) ([6edd10d](https://github.com/terminaldotshop/terminal-sdk-js/commit/6edd10ddd539df74c11ff21f1c13d8c82e9cdf4b))


### Chores

* **internal:** codegen related update ([#127](https://github.com/terminaldotshop/terminal-sdk-js/issues/127)) ([3044236](https://github.com/terminaldotshop/terminal-sdk-js/commit/3044236dce4264fca3e1a8382b784a57f93275c8))

## 0.5.0-alpha (2025-01-18)

Full Changelog: [v0.4.1-alpha...v0.5.0-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.4.1-alpha...v0.5.0-alpha)

### Features

* **api:** manual updates ([#119](https://github.com/terminaldotshop/terminal-sdk-js/issues/119)) ([3f971d9](https://github.com/terminaldotshop/terminal-sdk-js/commit/3f971d9ccdfec6990a2ec4f6f9a91a810b446268))


### Bug Fixes

* **client:** normalize method ([#121](https://github.com/terminaldotshop/terminal-sdk-js/issues/121)) ([6bfd51f](https://github.com/terminaldotshop/terminal-sdk-js/commit/6bfd51fae44531fc56dd94c3aaf37fdd8e173f5e))


### Chores

* **internal:** codegen related update ([#123](https://github.com/terminaldotshop/terminal-sdk-js/issues/123)) ([0c56db2](https://github.com/terminaldotshop/terminal-sdk-js/commit/0c56db2c28a214ddf03a2f22fc3d951a3f58c7b9))
* **internal:** codegen related update ([#124](https://github.com/terminaldotshop/terminal-sdk-js/issues/124)) ([fb5b055](https://github.com/terminaldotshop/terminal-sdk-js/commit/fb5b055b2e7605eec3c672ff4703463691010c2d))
* **internal:** codegen related update ([#125](https://github.com/terminaldotshop/terminal-sdk-js/issues/125)) ([0ef2ea1](https://github.com/terminaldotshop/terminal-sdk-js/commit/0ef2ea18017d565d4a31f569b7f2d7aaa7f0e4c1))


### Documentation

* minor formatting changes ([#122](https://github.com/terminaldotshop/terminal-sdk-js/issues/122)) ([8957ff1](https://github.com/terminaldotshop/terminal-sdk-js/commit/8957ff1c0f5031190002071bb5a2426b92d2c044))

## 0.4.1-alpha (2024-12-17)

Full Changelog: [v0.4.0-alpha...v0.4.1-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.4.0-alpha...v0.4.1-alpha)

### Chores

* **internal:** fix some typos ([#108](https://github.com/terminaldotshop/terminal-sdk-js/issues/108)) ([e5e17b6](https://github.com/terminaldotshop/terminal-sdk-js/commit/e5e17b61b32331b4a4f2abaade1daaba42781077))

## 0.4.0-alpha (2024-12-17)

Full Changelog: [v0.3.0-alpha...v0.4.0-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.3.0-alpha...v0.4.0-alpha)

### Features

* **api:** manual updates ([#105](https://github.com/terminaldotshop/terminal-sdk-js/issues/105)) ([e018d6c](https://github.com/terminaldotshop/terminal-sdk-js/commit/e018d6c950ac7e07246300939e78559f04a207d5))

## 0.3.0-alpha (2024-12-17)

Full Changelog: [v0.2.0-alpha...v0.3.0-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.2.0-alpha...v0.3.0-alpha)

### Features

* **api:** manual updates ([#100](https://github.com/terminaldotshop/terminal-sdk-js/issues/100)) ([86376a1](https://github.com/terminaldotshop/terminal-sdk-js/commit/86376a1968d6653be611be6abe21a2f8a0704a69))
* **api:** manual updates ([#101](https://github.com/terminaldotshop/terminal-sdk-js/issues/101)) ([7a3d605](https://github.com/terminaldotshop/terminal-sdk-js/commit/7a3d60527c88930bda7d5a26c001534c79b49f39))
* **api:** manual updates ([#102](https://github.com/terminaldotshop/terminal-sdk-js/issues/102)) ([c3eea49](https://github.com/terminaldotshop/terminal-sdk-js/commit/c3eea49d21688e37527ed9914da4c9510bc73781))
* **api:** manual updates ([#103](https://github.com/terminaldotshop/terminal-sdk-js/issues/103)) ([6829bed](https://github.com/terminaldotshop/terminal-sdk-js/commit/6829bed501f0a6e2795770f8375f9b4055b4ffcb))


### Chores

* update SDK settings ([#98](https://github.com/terminaldotshop/terminal-sdk-js/issues/98)) ([5200638](https://github.com/terminaldotshop/terminal-sdk-js/commit/520063828130731183c594e7d0de3049bbd6b6e6))

## 0.2.0-alpha (2024-12-16)

Full Changelog: [v0.1.0-alpha...v0.2.0-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.1.0-alpha...v0.2.0-alpha)

### Features

* **api:** manual updates ([#95](https://github.com/terminaldotshop/terminal-sdk-js/issues/95)) ([706d6bf](https://github.com/terminaldotshop/terminal-sdk-js/commit/706d6bf5d14cd3964308890dad2d3623f59ab2a6))

## 0.1.0-alpha (2024-12-13)

Full Changelog: [v0.0.1-alpha...v0.1.0-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.0.1-alpha...v0.1.0-alpha)

### Features

* **api:** update via SDK Studio ([#89](https://github.com/terminaldotshop/terminal-sdk-js/issues/89)) ([b032acf](https://github.com/terminaldotshop/terminal-sdk-js/commit/b032acf42b0e3c881011b8555da68579dd0ab594))
* **api:** update via SDK Studio ([#91](https://github.com/terminaldotshop/terminal-sdk-js/issues/91)) ([3b5ca67](https://github.com/terminaldotshop/terminal-sdk-js/commit/3b5ca670f6ee952d4b919ce97b3b66885eaf0746))
* **api:** update via SDK Studio ([#92](https://github.com/terminaldotshop/terminal-sdk-js/issues/92)) ([9168c1d](https://github.com/terminaldotshop/terminal-sdk-js/commit/9168c1dcdce2d3996ef71575e8b0f04a28143306))
* **api:** update via SDK Studio ([#93](https://github.com/terminaldotshop/terminal-sdk-js/issues/93)) ([53b8922](https://github.com/terminaldotshop/terminal-sdk-js/commit/53b89225790bf24d05a93e9afa747e8662aec723))

## 0.0.1-alpha (2024-12-13)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha](https://github.com/terminaldotshop/terminal-sdk-js/compare/v0.0.1-alpha.0...v0.0.1-alpha)

### Features

* **api:** api update ([#53](https://github.com/terminaldotshop/terminal-sdk-js/issues/53)) ([fca33fa](https://github.com/terminaldotshop/terminal-sdk-js/commit/fca33fa1f7b2a220bcafce4d6e83c4b8e3e9f27c))
* **api:** api update ([#54](https://github.com/terminaldotshop/terminal-sdk-js/issues/54)) ([0c883d1](https://github.com/terminaldotshop/terminal-sdk-js/commit/0c883d18e9e5759ab8c4aae6ec070d7830fe72f8))
* **api:** api update ([#55](https://github.com/terminaldotshop/terminal-sdk-js/issues/55)) ([ac2d3c2](https://github.com/terminaldotshop/terminal-sdk-js/commit/ac2d3c2e31036421e41587ee7a1041cac1dd1d2f))
* **api:** api update ([#56](https://github.com/terminaldotshop/terminal-sdk-js/issues/56)) ([6fd053f](https://github.com/terminaldotshop/terminal-sdk-js/commit/6fd053f4c44f867627f6939b774739215bcf7919))
* **api:** api update ([#60](https://github.com/terminaldotshop/terminal-sdk-js/issues/60)) ([66418c3](https://github.com/terminaldotshop/terminal-sdk-js/commit/66418c3cb59c3c427197563c24d6fe8203316c63))
* **api:** api update ([#69](https://github.com/terminaldotshop/terminal-sdk-js/issues/69)) ([3c3985d](https://github.com/terminaldotshop/terminal-sdk-js/commit/3c3985db8ba22992fde2685b5868d77b99835a27))
* **api:** api update ([#71](https://github.com/terminaldotshop/terminal-sdk-js/issues/71)) ([f4952f2](https://github.com/terminaldotshop/terminal-sdk-js/commit/f4952f23c17374706d2229ece131755d7b55aac8))
* **api:** api update ([#73](https://github.com/terminaldotshop/terminal-sdk-js/issues/73)) ([dc29fa4](https://github.com/terminaldotshop/terminal-sdk-js/commit/dc29fa4a7f4d2ddbd5d278937d0b8a9c4d35768d))
* **api:** api update ([#76](https://github.com/terminaldotshop/terminal-sdk-js/issues/76)) ([d716d31](https://github.com/terminaldotshop/terminal-sdk-js/commit/d716d31519807881f0dc77f4809d3bbfe195a325))
* **api:** api update ([#77](https://github.com/terminaldotshop/terminal-sdk-js/issues/77)) ([cad5792](https://github.com/terminaldotshop/terminal-sdk-js/commit/cad579297e507dda3b6e70944a7e32f0cf426e8f))
* **api:** api update ([#83](https://github.com/terminaldotshop/terminal-sdk-js/issues/83)) ([17b96e0](https://github.com/terminaldotshop/terminal-sdk-js/commit/17b96e0ad211dc46ef58f51cd3ab02ef6772a0d5))
* **api:** api update ([#84](https://github.com/terminaldotshop/terminal-sdk-js/issues/84)) ([2f5273b](https://github.com/terminaldotshop/terminal-sdk-js/commit/2f5273b72c1a496ac20610833b535bad1a5cab13))
* **api:** OpenAPI spec update via Stainless API ([e17731b](https://github.com/terminaldotshop/terminal-sdk-js/commit/e17731b5c3eb30dee28e824639adf574bfae7293))
* **api:** OpenAPI spec update via Stainless API ([#11](https://github.com/terminaldotshop/terminal-sdk-js/issues/11)) ([e7f622c](https://github.com/terminaldotshop/terminal-sdk-js/commit/e7f622cf2c939938af5b090ea9a1b5d3458c76b2))
* **api:** OpenAPI spec update via Stainless API ([#13](https://github.com/terminaldotshop/terminal-sdk-js/issues/13)) ([d531200](https://github.com/terminaldotshop/terminal-sdk-js/commit/d531200cf80b2316cd113b3bb1ab5b90f7e97763))
* **api:** OpenAPI spec update via Stainless API ([#15](https://github.com/terminaldotshop/terminal-sdk-js/issues/15)) ([06a06cd](https://github.com/terminaldotshop/terminal-sdk-js/commit/06a06cd7db26feb5109cf8e9f8fc812740616f25))
* **api:** OpenAPI spec update via Stainless API ([#16](https://github.com/terminaldotshop/terminal-sdk-js/issues/16)) ([f801474](https://github.com/terminaldotshop/terminal-sdk-js/commit/f8014743d486212654ef91dcee9ff36d1cb2baac))
* **api:** OpenAPI spec update via Stainless API ([#19](https://github.com/terminaldotshop/terminal-sdk-js/issues/19)) ([75f2027](https://github.com/terminaldotshop/terminal-sdk-js/commit/75f202790eebb7eb0e7a41c1e17d35203c164a5f))
* **api:** OpenAPI spec update via Stainless API ([#22](https://github.com/terminaldotshop/terminal-sdk-js/issues/22)) ([707a78b](https://github.com/terminaldotshop/terminal-sdk-js/commit/707a78b39e1c00e332fd43ff0479e385899d22e4))
* **api:** OpenAPI spec update via Stainless API ([#24](https://github.com/terminaldotshop/terminal-sdk-js/issues/24)) ([04a3b48](https://github.com/terminaldotshop/terminal-sdk-js/commit/04a3b48bff6fac151a33b981c368766bb5b689c9))
* **api:** OpenAPI spec update via Stainless API ([#27](https://github.com/terminaldotshop/terminal-sdk-js/issues/27)) ([6b45733](https://github.com/terminaldotshop/terminal-sdk-js/commit/6b457335fa8e94830030f6fca6bb637d56ad3881))
* **api:** OpenAPI spec update via Stainless API ([#28](https://github.com/terminaldotshop/terminal-sdk-js/issues/28)) ([49a262f](https://github.com/terminaldotshop/terminal-sdk-js/commit/49a262f6e332b3d40c86f040cd66b3dee9963ea9))
* **api:** OpenAPI spec update via Stainless API ([#29](https://github.com/terminaldotshop/terminal-sdk-js/issues/29)) ([08ff177](https://github.com/terminaldotshop/terminal-sdk-js/commit/08ff1770ca3aafe5e53d8e40d52860ef0cc8ac17))
* **api:** OpenAPI spec update via Stainless API ([#31](https://github.com/terminaldotshop/terminal-sdk-js/issues/31)) ([27154bc](https://github.com/terminaldotshop/terminal-sdk-js/commit/27154bcb46081d04cdc719a1896f2ae1c012813d))
* **api:** OpenAPI spec update via Stainless API ([#33](https://github.com/terminaldotshop/terminal-sdk-js/issues/33)) ([bb0e679](https://github.com/terminaldotshop/terminal-sdk-js/commit/bb0e6791dafba05c5fa164a5d7a0b57a12ac82dd))
* **api:** OpenAPI spec update via Stainless API ([#35](https://github.com/terminaldotshop/terminal-sdk-js/issues/35)) ([ec55a49](https://github.com/terminaldotshop/terminal-sdk-js/commit/ec55a49c550f63246f6ac2d2070837b5c60e6eaf))
* **api:** OpenAPI spec update via Stainless API ([#37](https://github.com/terminaldotshop/terminal-sdk-js/issues/37)) ([8b12d5f](https://github.com/terminaldotshop/terminal-sdk-js/commit/8b12d5fe85e66d253c4f0efa68bc285ca96c818f))
* **api:** OpenAPI spec update via Stainless API ([#38](https://github.com/terminaldotshop/terminal-sdk-js/issues/38)) ([fc7b002](https://github.com/terminaldotshop/terminal-sdk-js/commit/fc7b002641f7705100f6025c451398b0c0cb0ac8))
* **api:** OpenAPI spec update via Stainless API ([#4](https://github.com/terminaldotshop/terminal-sdk-js/issues/4)) ([7df6ec1](https://github.com/terminaldotshop/terminal-sdk-js/commit/7df6ec1df5d746ee3989e84875bc6751cb8a7a3d))
* **api:** OpenAPI spec update via Stainless API ([#40](https://github.com/terminaldotshop/terminal-sdk-js/issues/40)) ([42f30e3](https://github.com/terminaldotshop/terminal-sdk-js/commit/42f30e3571c4afa8d749a88e8ea3ed67fa5c5f1b))
* **api:** OpenAPI spec update via Stainless API ([#41](https://github.com/terminaldotshop/terminal-sdk-js/issues/41)) ([5c38df7](https://github.com/terminaldotshop/terminal-sdk-js/commit/5c38df7e8bfef7285a9fe71ce9ce90e2dc3b2766))
* **api:** OpenAPI spec update via Stainless API ([#43](https://github.com/terminaldotshop/terminal-sdk-js/issues/43)) ([2333949](https://github.com/terminaldotshop/terminal-sdk-js/commit/2333949539fcd9bc7bf18e909b66339c3ecb1f1b))
* **api:** OpenAPI spec update via Stainless API ([#45](https://github.com/terminaldotshop/terminal-sdk-js/issues/45)) ([e89be75](https://github.com/terminaldotshop/terminal-sdk-js/commit/e89be75086e1a540a7c148b1e60e3ca84a198d9d))
* **api:** OpenAPI spec update via Stainless API ([#47](https://github.com/terminaldotshop/terminal-sdk-js/issues/47)) ([d33445d](https://github.com/terminaldotshop/terminal-sdk-js/commit/d33445dcb8daebf8b2ebb3fa4f64ceed40cdff0f))
* **api:** OpenAPI spec update via Stainless API ([#48](https://github.com/terminaldotshop/terminal-sdk-js/issues/48)) ([7e44c8f](https://github.com/terminaldotshop/terminal-sdk-js/commit/7e44c8f61df9d459b54e224d7f6b5860161c9718))
* **api:** OpenAPI spec update via Stainless API ([#49](https://github.com/terminaldotshop/terminal-sdk-js/issues/49)) ([f1408ea](https://github.com/terminaldotshop/terminal-sdk-js/commit/f1408eab05cc8a9eadf429092833f79353894797))
* **api:** OpenAPI spec update via Stainless API ([#5](https://github.com/terminaldotshop/terminal-sdk-js/issues/5)) ([f596fe6](https://github.com/terminaldotshop/terminal-sdk-js/commit/f596fe64b2935e141758c250bdbf1c3014e10e92))
* **api:** OpenAPI spec update via Stainless API ([#50](https://github.com/terminaldotshop/terminal-sdk-js/issues/50)) ([4bfb74d](https://github.com/terminaldotshop/terminal-sdk-js/commit/4bfb74d396cac58f815a847167f1408b3fb85a29))
* **api:** OpenAPI spec update via Stainless API ([#51](https://github.com/terminaldotshop/terminal-sdk-js/issues/51)) ([9c1c1a1](https://github.com/terminaldotshop/terminal-sdk-js/commit/9c1c1a1b5d5097a711adb70552021a2be218c7d2))
* **api:** OpenAPI spec update via Stainless API ([#52](https://github.com/terminaldotshop/terminal-sdk-js/issues/52)) ([83c768f](https://github.com/terminaldotshop/terminal-sdk-js/commit/83c768fff3e427b8830185d51478a6c0f8b4cbce))
* **api:** OpenAPI spec update via Stainless API ([#6](https://github.com/terminaldotshop/terminal-sdk-js/issues/6)) ([cf6fcb6](https://github.com/terminaldotshop/terminal-sdk-js/commit/cf6fcb633f9e2e09269dadc8b4c2025dd55617e1))
* **api:** OpenAPI spec update via Stainless API ([#7](https://github.com/terminaldotshop/terminal-sdk-js/issues/7)) ([be94023](https://github.com/terminaldotshop/terminal-sdk-js/commit/be94023b38b9dcdcefb56e724c28f1d91d95abd2))
* **api:** OpenAPI spec update via Stainless API ([#8](https://github.com/terminaldotshop/terminal-sdk-js/issues/8)) ([72ab7aa](https://github.com/terminaldotshop/terminal-sdk-js/commit/72ab7aad2bc1015aa49c2af9c4d0d43552d35980))
* **api:** OpenAPI spec update via Stainless API ([#9](https://github.com/terminaldotshop/terminal-sdk-js/issues/9)) ([2429c25](https://github.com/terminaldotshop/terminal-sdk-js/commit/2429c259f471af1fe698461673bc4d4cd783a858))
* **api:** update via SDK Studio ([adb8927](https://github.com/terminaldotshop/terminal-sdk-js/commit/adb8927f8f77acece412e82290503eb3b4d1738a))
* **api:** update via SDK Studio ([38ca16c](https://github.com/terminaldotshop/terminal-sdk-js/commit/38ca16c17d51e02d85bf88e2775a299ba22a31a8))
* **api:** update via SDK Studio ([dfbfdd4](https://github.com/terminaldotshop/terminal-sdk-js/commit/dfbfdd44963c1ef598bc3f2f3cfd1783f699fe05))
* **api:** update via SDK Studio ([#10](https://github.com/terminaldotshop/terminal-sdk-js/issues/10)) ([45231a7](https://github.com/terminaldotshop/terminal-sdk-js/commit/45231a720d7528c9c2dd725eb6f2619d55963bf3))
* **api:** update via SDK Studio ([#12](https://github.com/terminaldotshop/terminal-sdk-js/issues/12)) ([51038a1](https://github.com/terminaldotshop/terminal-sdk-js/commit/51038a1d83fa6a046717c9b915967ac3f51c24b0))
* **api:** update via SDK Studio ([#14](https://github.com/terminaldotshop/terminal-sdk-js/issues/14)) ([507a049](https://github.com/terminaldotshop/terminal-sdk-js/commit/507a049fa0d4f858421cf113f48c08710528fd5f))
* **api:** update via SDK Studio ([#17](https://github.com/terminaldotshop/terminal-sdk-js/issues/17)) ([99c4143](https://github.com/terminaldotshop/terminal-sdk-js/commit/99c41432640faeb65861c9648585e6c7d4aa021b))
* **api:** update via SDK Studio ([#18](https://github.com/terminaldotshop/terminal-sdk-js/issues/18)) ([fe713a5](https://github.com/terminaldotshop/terminal-sdk-js/commit/fe713a5fa56c2f262627d1360397bea257106a6f))
* **api:** update via SDK Studio ([#20](https://github.com/terminaldotshop/terminal-sdk-js/issues/20)) ([a308b80](https://github.com/terminaldotshop/terminal-sdk-js/commit/a308b8073c7d5277344ab3e538c846ce635b9a14))
* **api:** update via SDK Studio ([#21](https://github.com/terminaldotshop/terminal-sdk-js/issues/21)) ([c441f6e](https://github.com/terminaldotshop/terminal-sdk-js/commit/c441f6e22ad5ead2e432a4bf47b1cb2ee512efa6))
* **api:** update via SDK Studio ([#23](https://github.com/terminaldotshop/terminal-sdk-js/issues/23)) ([4280949](https://github.com/terminaldotshop/terminal-sdk-js/commit/42809493444fcf4afb7b0809754e835ca8384c1c))
* **api:** update via SDK Studio ([#25](https://github.com/terminaldotshop/terminal-sdk-js/issues/25)) ([86e0fdc](https://github.com/terminaldotshop/terminal-sdk-js/commit/86e0fdc3996355e3354d519d567151bc944c9d0f))
* **api:** update via SDK Studio ([#26](https://github.com/terminaldotshop/terminal-sdk-js/issues/26)) ([9abd642](https://github.com/terminaldotshop/terminal-sdk-js/commit/9abd642e1dc378096253071e14e4da35427b540d))
* **api:** update via SDK Studio ([#3](https://github.com/terminaldotshop/terminal-sdk-js/issues/3)) ([341c9f5](https://github.com/terminaldotshop/terminal-sdk-js/commit/341c9f59035e01497e8d7398ce66a3c049b1a466))
* **api:** update via SDK Studio ([#30](https://github.com/terminaldotshop/terminal-sdk-js/issues/30)) ([3bcd54b](https://github.com/terminaldotshop/terminal-sdk-js/commit/3bcd54b5eb8d678955a759f16efeb6027ff03feb))
* **api:** update via SDK Studio ([#32](https://github.com/terminaldotshop/terminal-sdk-js/issues/32)) ([7b97a4e](https://github.com/terminaldotshop/terminal-sdk-js/commit/7b97a4ee1baf4e7ebc627e245a528ba6973e7a35))
* **api:** update via SDK Studio ([#34](https://github.com/terminaldotshop/terminal-sdk-js/issues/34)) ([0e1029e](https://github.com/terminaldotshop/terminal-sdk-js/commit/0e1029e9c63add1a7f8921b0aebc551198c984da))
* **api:** update via SDK Studio ([#36](https://github.com/terminaldotshop/terminal-sdk-js/issues/36)) ([46f635c](https://github.com/terminaldotshop/terminal-sdk-js/commit/46f635c19916910c1a2a2c3c89e20fabdca91659))
* **api:** update via SDK Studio ([#39](https://github.com/terminaldotshop/terminal-sdk-js/issues/39)) ([42ba0ae](https://github.com/terminaldotshop/terminal-sdk-js/commit/42ba0aea2bf4bd29434ad5cb77c77eaa687059b9))
* **api:** update via SDK Studio ([#42](https://github.com/terminaldotshop/terminal-sdk-js/issues/42)) ([5082b14](https://github.com/terminaldotshop/terminal-sdk-js/commit/5082b14d61b460cb19dff33fb4cb39f1554a561b))
* **api:** update via SDK Studio ([#44](https://github.com/terminaldotshop/terminal-sdk-js/issues/44)) ([96c18d4](https://github.com/terminaldotshop/terminal-sdk-js/commit/96c18d4ae7e7761821f5a5e1d0b4a2cf038a5338))
* **api:** update via SDK Studio ([#46](https://github.com/terminaldotshop/terminal-sdk-js/issues/46)) ([dbf276c](https://github.com/terminaldotshop/terminal-sdk-js/commit/dbf276c51bbee77711018a453c3ea7b567e230f8))
* **api:** update via SDK Studio ([#65](https://github.com/terminaldotshop/terminal-sdk-js/issues/65)) ([7aeb2c9](https://github.com/terminaldotshop/terminal-sdk-js/commit/7aeb2c911209a59f6aa50d370d2599b6f6767a29))
* **api:** update via SDK Studio ([#68](https://github.com/terminaldotshop/terminal-sdk-js/issues/68)) ([1b34427](https://github.com/terminaldotshop/terminal-sdk-js/commit/1b34427487fb150638b533bb8b38a57149de9060))
* **api:** update via SDK Studio ([#70](https://github.com/terminaldotshop/terminal-sdk-js/issues/70)) ([534e43b](https://github.com/terminaldotshop/terminal-sdk-js/commit/534e43b55115fe97118d207978f560d16542d09b))
* **api:** update via SDK Studio ([#72](https://github.com/terminaldotshop/terminal-sdk-js/issues/72)) ([5e2b489](https://github.com/terminaldotshop/terminal-sdk-js/commit/5e2b48983675ad743f42db531402fc749c57e0c9))
* **api:** update via SDK Studio ([#74](https://github.com/terminaldotshop/terminal-sdk-js/issues/74)) ([757148c](https://github.com/terminaldotshop/terminal-sdk-js/commit/757148c549c34f94392eb362d7cf4435d03da1e3))
* **api:** update via SDK Studio ([#75](https://github.com/terminaldotshop/terminal-sdk-js/issues/75)) ([86cc25d](https://github.com/terminaldotshop/terminal-sdk-js/commit/86cc25d742f512b5ed0641b86240193bf4103ca9))
* **api:** update via SDK Studio ([#78](https://github.com/terminaldotshop/terminal-sdk-js/issues/78)) ([6856b5f](https://github.com/terminaldotshop/terminal-sdk-js/commit/6856b5fa1a9c330225bbc5bc54f0e0e029e261dc))
* **api:** update via SDK Studio ([#82](https://github.com/terminaldotshop/terminal-sdk-js/issues/82)) ([967945f](https://github.com/terminaldotshop/terminal-sdk-js/commit/967945fe7aaefaf6fb8fc7dfff0221ea57d340e0))
* **api:** update via SDK Studio ([#85](https://github.com/terminaldotshop/terminal-sdk-js/issues/85)) ([0eff143](https://github.com/terminaldotshop/terminal-sdk-js/commit/0eff143e98d6dec89c11a432a5dc9922f8939324))
* **api:** update via SDK Studio ([#86](https://github.com/terminaldotshop/terminal-sdk-js/issues/86)) ([1d3bf40](https://github.com/terminaldotshop/terminal-sdk-js/commit/1d3bf40baf085a41fcdcbb53fa3627b6b113cbf2))
* **api:** update via SDK Studio ([#87](https://github.com/terminaldotshop/terminal-sdk-js/issues/87)) ([ff3b1af](https://github.com/terminaldotshop/terminal-sdk-js/commit/ff3b1aff29fcf71a80408c3458d4a0051a3f3a13))
* **internal:** make git install file structure match npm ([#81](https://github.com/terminaldotshop/terminal-sdk-js/issues/81)) ([c22e9af](https://github.com/terminaldotshop/terminal-sdk-js/commit/c22e9af870524ee68f13479d5e5d64d1013cf178))


### Chores

* configure new SDK language ([2f0d660](https://github.com/terminaldotshop/terminal-sdk-js/commit/2f0d6602f643ee29be791b63c0ce0c3bf7cea017))
* go live ([#1](https://github.com/terminaldotshop/terminal-sdk-js/issues/1)) ([2f6daec](https://github.com/terminaldotshop/terminal-sdk-js/commit/2f6daec0a7ba13ff58038fb1a26521eb687a6623))
* rebuild project due to codegen change ([#57](https://github.com/terminaldotshop/terminal-sdk-js/issues/57)) ([57f2be0](https://github.com/terminaldotshop/terminal-sdk-js/commit/57f2be0ce1525511ed9127664fe6a060a831c77e))
* rebuild project due to codegen change ([#58](https://github.com/terminaldotshop/terminal-sdk-js/issues/58)) ([a3c973a](https://github.com/terminaldotshop/terminal-sdk-js/commit/a3c973a8c47861bbcce7bf267889c8fd14e7dd5b))
* rebuild project due to codegen change ([#59](https://github.com/terminaldotshop/terminal-sdk-js/issues/59)) ([52a998c](https://github.com/terminaldotshop/terminal-sdk-js/commit/52a998ca71991d9c02f40af34c94a87e41ee1ce2))
* rebuild project due to codegen change ([#61](https://github.com/terminaldotshop/terminal-sdk-js/issues/61)) ([9e4f10c](https://github.com/terminaldotshop/terminal-sdk-js/commit/9e4f10c2946afc78a5e73477a7fb45d59e91a66a))
* rebuild project due to codegen change ([#62](https://github.com/terminaldotshop/terminal-sdk-js/issues/62)) ([92b52b9](https://github.com/terminaldotshop/terminal-sdk-js/commit/92b52b96800ab36488fb565c9240d89742a6dcdf))
* rebuild project due to codegen change ([#63](https://github.com/terminaldotshop/terminal-sdk-js/issues/63)) ([d92443a](https://github.com/terminaldotshop/terminal-sdk-js/commit/d92443a0e5cef71001b706575243e224e3c4039d))
* rebuild project due to codegen change ([#64](https://github.com/terminaldotshop/terminal-sdk-js/issues/64)) ([98cfdd5](https://github.com/terminaldotshop/terminal-sdk-js/commit/98cfdd5ff44ef5a916853d3c6bf1d2ac98d690c2))
* rebuild project due to codegen change ([#66](https://github.com/terminaldotshop/terminal-sdk-js/issues/66)) ([1f02f5f](https://github.com/terminaldotshop/terminal-sdk-js/commit/1f02f5f9ba2f42d8b39dc2ffa98cbf455a8b0e24))
* rebuild project due to codegen change ([#67](https://github.com/terminaldotshop/terminal-sdk-js/issues/67)) ([0b084e6](https://github.com/terminaldotshop/terminal-sdk-js/commit/0b084e6cc62b863002342137cc18a2e9b0906c20))
* remove redundant word in comment ([#80](https://github.com/terminaldotshop/terminal-sdk-js/issues/80)) ([a92d928](https://github.com/terminaldotshop/terminal-sdk-js/commit/a92d9286ccad262912f83ec66b6bca9a83433344))
* update SDK settings ([9adeef5](https://github.com/terminaldotshop/terminal-sdk-js/commit/9adeef57297a53e4dda71d13757725189ccf6aca))


### Documentation

* remove suggestion to use `npm` call out ([#79](https://github.com/terminaldotshop/terminal-sdk-js/issues/79)) ([bf8a6e4](https://github.com/terminaldotshop/terminal-sdk-js/commit/bf8a6e4fb641e2071479d80a84d2507eb750795f))
