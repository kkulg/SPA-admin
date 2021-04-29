import { App, Directive } from 'vue';

type DirectiveType = {
  [propName: string]: Directive;
};

const directives: DirectiveType = {};

export const installGlobalDirective = (app: App) => {
  Object.keys(directives).forEach((directiveName: string) => {
    app.directive(directiveName, directives[directiveName]);
  });
};
