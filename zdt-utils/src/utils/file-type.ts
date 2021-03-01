export enum FileType {
  Other = 'other',
  Image = 'image',
  Audio = 'audio',
  Video = 'video',
  Csb = 'csb',
  Plist = 'plist',
  Zip = 'zip',
  Json = 'json',
  Html = 'html',
  Atlas = 'atlas',
  Folder = 'folder',
}

export function getFileType(resourceUrl: string): FileType {
  if (resourceUrl.match(/\.(png|jpg|jpeg|svg)$/i)) {
    return FileType.Image;
  } else if (resourceUrl.match(/\.(mp3)$/i)) {
    return FileType.Audio;
  } else if (resourceUrl.match(/\.(mp4)$/i)) {
    return FileType.Video;
  } else if (resourceUrl.match(/\.(csb)$/i)) {
    return FileType.Csb;
  } else if (resourceUrl.match(/\.(plist)$/i)) {
    return FileType.Plist;
  } else if (resourceUrl.match(/\.(zip)$/i)) {
    return FileType.Zip;
  } else if (resourceUrl.match(/\.(json)$/i)) {
    return FileType.Json;
  } else if (resourceUrl.match(/\.(html)$/i)) {
    return FileType.Html;
  } else if (resourceUrl.match(/\.(atlas)$/i)) {
    return FileType.Atlas;
  } else {
    return FileType.Other;
  }
}