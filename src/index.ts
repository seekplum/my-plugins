let intervalId = 0;
let removeResult = false;
let maxRetry = 150;
let retry = 0;

function removeModalByOpenDouYin(): boolean {
  const elem = document.querySelector(".semi-portal");
  if (!elem) {
    return false;
  }
  elem.remove();
  return true;
}

function removeModalByHLG(): boolean {
  const maskElem = document.querySelector(".hlg-mask");
  const modalElem = document.querySelector(".hlg-dialog__wrapper.vip-pay");
  if (!maskElem || !modalElem) {
    return false;
  }
  maskElem.remove();
  modalElem.remove();
  return true;
}

function removeModalByCSDN(): boolean {
  const maskElem = document.querySelector(".hide-article-box");
  const contentElem = document.getElementById("article_content");
  if (!maskElem || !contentElem) {
    return false;
  }
  maskElem.remove();
  contentElem.removeAttribute("style");
  return true;
}

function removeModalByAliyun(): boolean {
  const maskElem = document.querySelector(".ace-overlay-wrapper.opened");
  if (!maskElem) {
    return false;
  }
  maskElem.remove();
  return true;
}

interface Rule {
  host?: string;
  prefix?: string;
  suffix?: string;
  test?: RegExp;
  use: () => boolean;
}

function parseRemoveFunc(hostname: string): Function {
  const rules: Array<Rule> = [
    {
      host: "open.douyin.com",
      use: removeModalByOpenDouYin,
    },
    {
      suffix: "huanleguang.com",
      use: removeModalByHLG,
    },
    {
      host: "blog.csdn.net",
      use: removeModalByCSDN,
    },
    {
      host: "developer.aliyun.com",
      use: removeModalByAliyun,
    },
  ];

  let removeFunc: Function = () => {};
  for (const rule of rules) {
    if (
      (rule.host && rule.host === hostname) ||
      (rule.prefix && hostname.startsWith(rule.prefix)) ||
      (rule.suffix && hostname.endsWith(rule.suffix)) ||
      (rule.test && rule.test.test(hostname))
    ) {
      removeFunc = rule.use;
      break;
    }
  }
  return removeFunc;
}

function main(): void {
  if (intervalId || retry > 0) {
    return;
  }
  /* eslint-disable-next-line no-undef */
  const hostname = unsafeWindow.location.hostname;
  const removeFunc = parseRemoveFunc(hostname);

  retry = 0;

  /* eslint-disable-next-line no-undef */
  intervalId = unsafeWindow.setInterval(() => {
    removeResult = removeFunc();
    if (removeResult || retry > maxRetry) {
      /* eslint-disable-next-line no-undef */
      unsafeWindow.clearInterval(intervalId);
    }
    retry += 1;
  }, 20);
}

(function () {
  "use strict";
  main();
})();
