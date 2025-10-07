import { css, type CSSProp } from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 576,
};

type MediaSizes = keyof typeof sizes;

export const media = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label as MediaSizes] = (first: TemplateStringsArray, ...args: any[]) =>
      css`
        @media (max-width: ${sizes[label as MediaSizes]}px) {
          ${css(first, ...args)}
        }
      `;
    return acc;
  },
  {} as Record<MediaSizes, (first: TemplateStringsArray, ...args: any[]) => CSSProp>
);
