# 0.0.1

basic framework

# 0.0.2

+ remove @types/immutable
+ add `typescript.definition` to `package.json`

# 0.0.3

+ adjust the way of writing universal d.ts

# 0.0.4

+ add `typings` to `package.json`

# 0.0.5

+ add utils immu-reselect
+ add utils validator

# 0.0.6

+ export type `HTMLManager`
+ change `BaseComponent.getInitDataActionImp` return type to any
+ export utils retina

# 0.0.7

+ fix init bug in `server/page/index.tsx`
+ fix `action === undefined` bug in `server/page/index.tsx`

# 0.0.8

+ inject `deviceVars` to component props & export `DeviceVars` interface for client-side injection

# 0.0.9

+ redefine `DeviceVars` interface
+ add `DeviceVars` interface to `BaseComponent.PropTypes`

# 0.0.10

+ split export file into server and client

# 0.0.11

+ add `BaseStateTypes` interface to `BaseComponent.StateTypes`
+ fix `getInitDataAction` calling condition bug
+ fix `html-manager` crashing on client side

# 0.0.12

+ add `interceptor` to `BaseComponent` to allow server side control inside components

# 0.0.13

+ add `finally` method to `Promise`
+ fix `storage` vanilla `set` and `get` bug

# 0.0.14

+ support `getInitDataAction` return multiple actions
+ add `interceptor` to server

# 0.1.0

+ change `expect.js` to `power-assert`
+ adjust page render sequence and add a test case

# 0.1.1

+ handle render process error and modify setUpPage datas

# 0.1.2

+ add auto detect data inited using reflection
+ make `setUpPage` only execute on server side

# 0.1.3

+ fix `request.get` `request.post` params optional bug

# 0.2.0

+ make `env-detect` isomorphic
+ add `entry`
+ split lib files to reduce bundle size

## Breaking Changes

+ change `import {} from 'razy/dist/lib'` to `import {} from 'razy/dist/lib/base-component'`, ie import file independently

# 0.2.1

+ add `render` method to `entry` to make entry start process more flexible

# 0.2.2

+ modify `storage` interface

# 0.2.3

+ change `http` deps to `request` module
+ add tests for `http`