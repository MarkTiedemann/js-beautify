import { html, css, js } from "./src/index.js";

const options = {
  indent_size: 1,
  indent_char: "\t"
};

export function formatHtml(code: string): string {
  return html(code, options);
}

export function formatCss(code: string): string {
  return css(code, options);
}

export function formatJs(code: string): string {
  return js(code, options);
}
