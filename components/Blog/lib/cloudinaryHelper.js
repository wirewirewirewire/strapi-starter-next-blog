export default function urlGenerator(src) {
  const filetype = src.split(".").pop();
  const isVideo = filetype === "mov" || filetype === "mp4";
  const last = src.substring(src.lastIndexOf("/") + 1, src.length);
  const name = last.substring(0, last.lastIndexOf("."));
  const cloudName = src.split("/")[3];
  return { cloudName, filetype, name, isVideo };
}
