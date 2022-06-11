export function getQueryKeyNode(path: string, isFromContext: boolean = false): string[] {
  return path.split("/").slice(isFromContext ? 3 : 1);
}
