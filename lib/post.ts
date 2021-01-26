const encodePathIdFromPath = (path: string) => path.replace(/\//gi, '-');
const decodePathFromPathId = (pathId: string) => pathId.replace(/-/gi, '/');

export {
  encodePathIdFromPath,
  decodePathFromPathId,
};
