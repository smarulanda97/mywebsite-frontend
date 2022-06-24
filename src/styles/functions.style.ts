import { theme } from "./theme.style";

/**
 * Returns a generic css styles for separator between blocks
 */
export const separator = () => {
  return (content: TemplateStringsArray | string) => `
    position: relative;
    
    &:before {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 95%;
      height: 1px;
      content: "";
      background: ${theme.colors.light};
    }
  `;
};
