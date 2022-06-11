/**
 * Defines breakpoints used for media queries
 */
const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

/**
 * Reusable media query response
 *
 * Equivalent to @media (min-width: (sm|md|lg|xl|xxl) px)
 *
 * @param breakpoint
 */
export const respondAbove = (breakpoint: keyof typeof breakpoints) => {
  return (content: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[breakpoint]}px) { 
      ${content}
    }`;
};

/**
 * Reusable media query response
 *
 * Equivalent to @media (max-width: [(sm|md|lg|xl|xxl) - 1]px)
 *
 * @param breakpoint
 */
export const respondBelow = (breakpoint: keyof typeof breakpoints) => {
  return (content: TemplateStringsArray | String) =>
    `@media (max-width: ${breakpoints[breakpoint] - 1}px) { 
      ${content}
    }`;
};

/**
 * Reusable media query response
 *
 * Equivalent to @media (mix-width: (sm|md|lg|xl|xxl)px) and (max-width: [(sm|md|lg|xl|xxl) - 1]px)
 *
 * @param minBreakpoint
 * @param maxBreakpoint
 */
export const respondBetween = (
  minBreakpoint: keyof typeof breakpoints,
  maxBreakpoint: keyof typeof breakpoints
) => {
  return (content: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[minBreakpoint]}px) and (max-width: ${breakpoints[maxBreakpoint]}px) { 
      ${content}
    }`;
};
