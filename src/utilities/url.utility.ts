/**
 * Returns true or false if the give url is absolute
 *
 * @param url
 */
export function isAbsoluteUrl(url: string): boolean {
  if (typeof url !== "string") {
    return false;
  }

  // Don't match Windows paths `c:\`
  if (/^[a-zA-Z]:\\/.test(url)) {
    return false;
  }

  return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url);
}

/**
 * Returns default attributes for links
 *
 * If link is absolute url returns attributes target->_blank and rel->noreferrer
 * @param url
 */
export function getDefaultLinkAttributes(url: string) {
  return isAbsoluteUrl(url) ? { target: "_blank", rel: "noreferrer" } : {};
}
