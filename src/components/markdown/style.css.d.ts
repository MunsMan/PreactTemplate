declare namespace StyleCssNamespace {
    export interface IStyleScss {
      md: string
    }
}

declare const StyleCssModule: StyleCssModule.IStyleCss & {
    locals: StyleCssModule;
}

export = StyleCssModule;