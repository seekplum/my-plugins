const dev = process.env.WEBPACK_DEV_SERVER === "true";
const headers = {
  name: "RemoveAnnoyingPopups",
  author: "seekplum",
  description: "删除一些无效的弹窗",
  version: dev ? `[version]-build.[buildNo]` : `[version]`,
  downloadURL: "https://gist.github.com/seekplum/083ac706566eba7cf3af8302e1152a31/raw/adf5d81ccc2e15f71ec55fcbee60d52c54445e25/remove_annoying_popups.user.js",
  match: [
    "http*://open.douyin.com/*",
    "http*://blog.csdn.net/*",
    "http*://tbgr.huanleguang.com/*",
    "http*://developer.aliyun.com/article/*",
  ],
  connect: [
    "blog.csdn.net",
    "open.douyin.com",
    "tbgr.huanleguang.com",
    "developer.aliyun.com",
  ],
  "run-at": "document-body",
  grant: ["unsafeWindow"],
};

module.exports = headers;
