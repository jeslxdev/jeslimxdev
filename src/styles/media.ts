import { css, type CSSProp } from 'styled-components';

const sizes = {
  mobileSmall: 320,
  mobile: 425,
  tablet: 768,
  laptop: 1024,
  laptopLarge: 1440,
  desktop: 1920,
  desktopLarge: 2560
};

type MediaSizes = keyof typeof sizes;

type CssArg = string | number | CSSProp;

// Media queries for max-width (mobile-first approach)
export const media = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label as MediaSizes] = (first: TemplateStringsArray, ...args: CssArg[]) =>
      css`
        @media (max-width: ${sizes[label as MediaSizes]}px) {
          ${css(first, ...args)}
        }
      `;
    return acc;
  },
  {} as Record<MediaSizes, (first: TemplateStringsArray, ...args: CssArg[]) => CSSProp>
);

// Media queries for min-width (desktop-first approach)
export const mediaMin = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label as MediaSizes] = (first: TemplateStringsArray, ...args: CssArg[]) =>
      css`
        @media (min-width: ${sizes[label as MediaSizes]}px) {
          ${css(first, ...args)}
        }
      `;
    return acc;
  },
  {} as Record<MediaSizes, (first: TemplateStringsArray, ...args: CssArg[]) => CSSProp>
);

// Helper for specific breakpoint ranges
export const mediaBetween = {
  mobileToTablet: (first: TemplateStringsArray, ...args: CssArg[]) =>
    css`
      @media (min-width: ${sizes.mobile}px) and (max-width: ${sizes.tablet}px) {
        ${css(first, ...args)}
      }
    `,
  tabletToLaptop: (first: TemplateStringsArray, ...args: CssArg[]) =>
    css`
      @media (min-width: ${sizes.tablet}px) and (max-width: ${sizes.laptop}px) {
        ${css(first, ...args)}
      }
    `,
  laptopToDesktop: (first: TemplateStringsArray, ...args: CssArg[]) =>
    css`
      @media (min-width: ${sizes.laptop}px) and (max-width: ${sizes.desktop}px) {
        ${css(first, ...args)}
      }
    `
};

// Touch and hover media queries
export const mediaTouch = (first: TemplateStringsArray, ...args: CssArg[]) =>
  css`
    @media (hover: none) and (pointer: coarse) {
      ${css(first, ...args)}
    }
  `;

export const mediaHover = (first: TemplateStringsArray, ...args: CssArg[]) =>
  css`
    @media (hover: hover) and (pointer: fine) {
      ${css(first, ...args)}
    }
  `;
