const dev = process.env.WEBPACK_DEV_SERVER === "true";
const headers = {
  name: "RemoveAnnoyingPopups",
  author: "seekplum",
  description: "删除一些无效的弹窗",
  version: dev ? `[version]-build.[buildNo]` : `[version]`,
  downloadURL: "http://127.0.0.1:12345/remove_annoying_popups.js",
  match: [
    "http*://open.douyin.com/*",
    "http*://blog.csdn.net/*",
    "http*://tbgr.huanleguang.com/*",
  ],
  connect: ["blog.csdn.net", "open.douyin.com", "tbgr.huanleguang.com"],
  "run-at": "document-body",
  grant: ["unsafeWindow"],
};

module.exports = headers;
