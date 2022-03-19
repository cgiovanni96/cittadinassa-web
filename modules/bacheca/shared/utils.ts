export const formatFileName = (name: string) => {
  return name
    .replace(/\.[^/.]+$/, "") //remove extension .pdf, .docx, ecc
    .replace(/-/g, " ") // remove hyphens
    .replace(/_/g, " ") // remove lower dashes
    .toUpperCase(); // upper case the whole name to have consistent information
};

export const humanFileSize = (size: number): string => {
  var i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) +
    " " +
    ["B", "kB", "MB", "GB", "TB"][i]
  );
};
