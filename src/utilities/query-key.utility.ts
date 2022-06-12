export function getQueryKeyNode(path: string, isFromContext: boolean = false): string[] {
  return path.split("/").slice(isFromContext ? 3 : 1);
}

export function getQueryKeyMenu(name: string): string[] {
  return ["menu", name];
}
