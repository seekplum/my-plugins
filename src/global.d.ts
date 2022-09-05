declare const __MOCK__: boolean; /* eslint-disable-line no-unused-vars */
declare const __PROJECT_NAME__: string; /* eslint-disable-line no-unused-vars */

declare type StyleSheetModule = { [key: string]: string };

declare module "*.scss" {
  const exports: StyleSheetModule;
  export default exports;
}

