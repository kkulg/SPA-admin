import { App } from 'vue';

type DirectiveType = {
  [propName: string]: any;
};

const directives: DirectiveType = {};

export const installGlobalDirective = (app: App) => {
  Object.keys(directives).forEach((directiveName: string) => {
    app.directive(directiveName, directives[directiveName]);
  });
};
