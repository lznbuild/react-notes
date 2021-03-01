export declare enum FileType {
    Other = "other",
    Image = "image",
    Audio = "audio",
    Video = "video",
    Csb = "csb",
    Plist = "plist",
    Zip = "zip",
    Json = "json",
    Html = "html",
    Atlas = "atlas",
    Folder = "folder"
}
export declare function getFileType(resourceUrl: string): FileType;
