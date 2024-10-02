import {
  useDebounceFn,
  useEventListener,
  useNow,
  useScriptTag,
  useStorage,
  useStyleTag
} from "./chunk-UPBWUEJK.js";
import {
  Fragment,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  h,
  inject,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  ref,
  renderList,
  resolveComponent,
  toDisplayString,
  vModelDynamic,
  vModelText,
  vShow,
  watch,
  watchEffect,
  withDirectives
} from "./chunk-KV7T6ZSY.js";
import {
  __commonJS,
  __privateAdd,
  __privateMethod,
  __publicField,
  __toESM
} from "./chunk-I2LLTMMF.js";

// node_modules/recaptcha-v3/dist/ReCaptchaInstance.js
var require_ReCaptchaInstance = __commonJS({
  "node_modules/recaptcha-v3/dist/ReCaptchaInstance.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e2) {
            reject(e2);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e2) {
            reject(e2);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t2[0] & 1) throw t2[1];
        return t2[1];
      }, trys: [], ops: [] }, f2, y2, t2, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n2) {
        return function(v2) {
          return step([n2, v2]);
        };
      }
      function step(op) {
        if (f2) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done) return t2;
          if (y2 = 0, t2) op = [op[0] & 2, t2.value];
          switch (op[0]) {
            case 0:
            case 1:
              t2 = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y2 = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t2[1]) {
                _.label = t2[1];
                t2 = op;
                break;
              }
              if (t2 && _.label < t2[2]) {
                _.label = t2[2];
                _.ops.push(op);
                break;
              }
              if (t2[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e2) {
          op = [6, e2];
          y2 = 0;
        } finally {
          f2 = t2 = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReCaptchaInstance = void 0;
    var ReCaptchaInstance = function() {
      function ReCaptchaInstance2(siteKey, recaptchaID, recaptcha) {
        this.siteKey = siteKey;
        this.recaptchaID = recaptchaID;
        this.recaptcha = recaptcha;
        this.styleContainer = null;
      }
      ReCaptchaInstance2.prototype.execute = function(action) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, this.recaptcha.enterprise ? this.recaptcha.enterprise.execute(this.recaptchaID, { action }) : this.recaptcha.execute(this.recaptchaID, { action })];
          });
        });
      };
      ReCaptchaInstance2.prototype.getSiteKey = function() {
        return this.siteKey;
      };
      ReCaptchaInstance2.prototype.hideBadge = function() {
        if (this.styleContainer !== null) {
          return;
        }
        this.styleContainer = document.createElement("style");
        this.styleContainer.innerHTML = ".grecaptcha-badge{visibility:hidden !important;}";
        document.head.appendChild(this.styleContainer);
      };
      ReCaptchaInstance2.prototype.showBadge = function() {
        if (this.styleContainer === null) {
          return;
        }
        document.head.removeChild(this.styleContainer);
        this.styleContainer = null;
      };
      return ReCaptchaInstance2;
    }();
    exports.ReCaptchaInstance = ReCaptchaInstance;
  }
});

// node_modules/recaptcha-v3/dist/ReCaptchaLoader.js
var require_ReCaptchaLoader = __commonJS({
  "node_modules/recaptcha-v3/dist/ReCaptchaLoader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getInstance = exports.load = void 0;
    var ReCaptchaInstance_1 = require_ReCaptchaInstance();
    var ELoadingState;
    (function(ELoadingState2) {
      ELoadingState2[ELoadingState2["NOT_LOADED"] = 0] = "NOT_LOADED";
      ELoadingState2[ELoadingState2["LOADING"] = 1] = "LOADING";
      ELoadingState2[ELoadingState2["LOADED"] = 2] = "LOADED";
    })(ELoadingState || (ELoadingState = {}));
    var ReCaptchaLoader = function() {
      function ReCaptchaLoader2() {
      }
      ReCaptchaLoader2.load = function(siteKey, options2) {
        if (options2 === void 0) {
          options2 = {};
        }
        if (typeof document === "undefined") {
          return Promise.reject(new Error("This is a library for the browser!"));
        }
        if (ReCaptchaLoader2.getLoadingState() === ELoadingState.LOADED) {
          if (ReCaptchaLoader2.instance.getSiteKey() === siteKey) {
            return Promise.resolve(ReCaptchaLoader2.instance);
          } else {
            return Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));
          }
        }
        if (ReCaptchaLoader2.getLoadingState() === ELoadingState.LOADING) {
          if (siteKey !== ReCaptchaLoader2.instanceSiteKey) {
            return Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));
          }
          return new Promise(function(resolve, reject) {
            ReCaptchaLoader2.successfulLoadingConsumers.push(function(instance) {
              return resolve(instance);
            });
            ReCaptchaLoader2.errorLoadingRunnable.push(function(reason) {
              return reject(reason);
            });
          });
        }
        ReCaptchaLoader2.instanceSiteKey = siteKey;
        ReCaptchaLoader2.setLoadingState(ELoadingState.LOADING);
        var loader = new ReCaptchaLoader2();
        return new Promise(function(resolve, reject) {
          loader.loadScript(siteKey, options2.useRecaptchaNet || false, options2.useEnterprise || false, options2.renderParameters ? options2.renderParameters : {}, options2.customUrl).then(function() {
            ReCaptchaLoader2.setLoadingState(ELoadingState.LOADED);
            var widgetID = loader.doExplicitRender(grecaptcha, siteKey, options2.explicitRenderParameters ? options2.explicitRenderParameters : {}, options2.useEnterprise || false);
            var instance = new ReCaptchaInstance_1.ReCaptchaInstance(siteKey, widgetID, grecaptcha);
            ReCaptchaLoader2.successfulLoadingConsumers.forEach(function(v2) {
              return v2(instance);
            });
            ReCaptchaLoader2.successfulLoadingConsumers = [];
            if (options2.autoHideBadge) {
              instance.hideBadge();
            }
            ReCaptchaLoader2.instance = instance;
            resolve(instance);
          }).catch(function(error) {
            ReCaptchaLoader2.errorLoadingRunnable.forEach(function(v2) {
              return v2(error);
            });
            ReCaptchaLoader2.errorLoadingRunnable = [];
            reject(error);
          });
        });
      };
      ReCaptchaLoader2.getInstance = function() {
        return ReCaptchaLoader2.instance;
      };
      ReCaptchaLoader2.setLoadingState = function(state) {
        ReCaptchaLoader2.loadingState = state;
      };
      ReCaptchaLoader2.getLoadingState = function() {
        if (ReCaptchaLoader2.loadingState === null) {
          return ELoadingState.NOT_LOADED;
        } else {
          return ReCaptchaLoader2.loadingState;
        }
      };
      ReCaptchaLoader2.prototype.loadScript = function(siteKey, useRecaptchaNet, useEnterprise, renderParameters, customUrl) {
        var _this = this;
        if (useRecaptchaNet === void 0) {
          useRecaptchaNet = false;
        }
        if (useEnterprise === void 0) {
          useEnterprise = false;
        }
        if (renderParameters === void 0) {
          renderParameters = {};
        }
        if (customUrl === void 0) {
          customUrl = "";
        }
        var scriptElement = document.createElement("script");
        scriptElement.setAttribute("recaptcha-v3-script", "");
        var scriptBase = "https://www.google.com/recaptcha/api.js";
        if (useRecaptchaNet) {
          if (useEnterprise) {
            scriptBase = "https://recaptcha.net/recaptcha/enterprise.js";
          } else {
            scriptBase = "https://recaptcha.net/recaptcha/api.js";
          }
        }
        if (useEnterprise) {
          scriptBase = "https://www.google.com/recaptcha/enterprise.js";
        }
        if (customUrl) {
          scriptBase = customUrl;
        }
        if (renderParameters.render) {
          renderParameters.render = void 0;
        }
        var parametersQuery = this.buildQueryString(renderParameters);
        scriptElement.src = scriptBase + "?render=explicit" + parametersQuery;
        return new Promise(function(resolve, reject) {
          scriptElement.addEventListener("load", _this.waitForScriptToLoad(function() {
            resolve(scriptElement);
          }, useEnterprise), false);
          scriptElement.onerror = function(error) {
            ReCaptchaLoader2.setLoadingState(ELoadingState.NOT_LOADED);
            reject(error);
          };
          document.head.appendChild(scriptElement);
        });
      };
      ReCaptchaLoader2.prototype.buildQueryString = function(parameters) {
        var parameterKeys = Object.keys(parameters);
        if (parameterKeys.length < 1) {
          return "";
        }
        return "&" + Object.keys(parameters).filter(function(parameterKey) {
          return !!parameters[parameterKey];
        }).map(function(parameterKey) {
          return parameterKey + "=" + parameters[parameterKey];
        }).join("&");
      };
      ReCaptchaLoader2.prototype.waitForScriptToLoad = function(callback, useEnterprise) {
        var _this = this;
        return function() {
          if (window.grecaptcha === void 0) {
            setTimeout(function() {
              _this.waitForScriptToLoad(callback, useEnterprise);
            }, ReCaptchaLoader2.SCRIPT_LOAD_DELAY);
          } else {
            if (useEnterprise) {
              window.grecaptcha.enterprise.ready(function() {
                callback();
              });
            } else {
              window.grecaptcha.ready(function() {
                callback();
              });
            }
          }
        };
      };
      ReCaptchaLoader2.prototype.doExplicitRender = function(grecaptcha2, siteKey, parameters, isEnterprise) {
        var augmentedParameters = {
          sitekey: siteKey,
          badge: parameters.badge,
          size: parameters.size,
          tabindex: parameters.tabindex
        };
        if (parameters.container) {
          if (isEnterprise) {
            return grecaptcha2.enterprise.render(parameters.container, augmentedParameters);
          } else {
            return grecaptcha2.render(parameters.container, augmentedParameters);
          }
        } else {
          if (isEnterprise) {
            return grecaptcha2.enterprise.render(augmentedParameters);
          } else {
            return grecaptcha2.render(augmentedParameters);
          }
        }
      };
      ReCaptchaLoader2.loadingState = null;
      ReCaptchaLoader2.instance = null;
      ReCaptchaLoader2.instanceSiteKey = null;
      ReCaptchaLoader2.successfulLoadingConsumers = [];
      ReCaptchaLoader2.errorLoadingRunnable = [];
      ReCaptchaLoader2.SCRIPT_LOAD_DELAY = 25;
      return ReCaptchaLoader2;
    }();
    exports.load = ReCaptchaLoader.load;
    exports.getInstance = ReCaptchaLoader.getInstance;
  }
});

// node_modules/recaptcha-v3/dist/ReCaptcha.js
var require_ReCaptcha = __commonJS({
  "node_modules/recaptcha-v3/dist/ReCaptcha.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReCaptchaInstance = exports.getInstance = exports.load = void 0;
    var ReCaptchaLoader_1 = require_ReCaptchaLoader();
    Object.defineProperty(exports, "load", { enumerable: true, get: function() {
      return ReCaptchaLoader_1.load;
    } });
    Object.defineProperty(exports, "getInstance", { enumerable: true, get: function() {
      return ReCaptchaLoader_1.getInstance;
    } });
    var ReCaptchaInstance_1 = require_ReCaptchaInstance();
    Object.defineProperty(exports, "ReCaptchaInstance", { enumerable: true, get: function() {
      return ReCaptchaInstance_1.ReCaptchaInstance;
    } });
  }
});

// node_modules/vitepress-theme-website/dist/waline/index.mjs
import { useRoute } from "vitepress";

// node_modules/@waline/api/dist/api.js
var m = { "Content-Type": "application/json" };
var s = (e2) => `${e2.replace(/\/?$/, "/")}api/`;
var c = (e2, n2 = "") => {
  if (typeof e2 == "object" && e2.errno) throw new TypeError(`${n2} failed with ${e2.errno}: ${e2.errmsg}`);
  return e2;
};
var p = ({ serverURL: e2, lang: n2, paths: o2, type: a, signal: t2 }) => fetch(`${s(e2)}article?path=${encodeURIComponent(o2.join(","))}&type=${encodeURIComponent(a.join(","))}&lang=${n2}`, { signal: t2 }).then((r2) => r2.json()).then((r2) => c(r2, "Get counter").data);
var d = ({ serverURL: e2, lang: n2, path: o2, type: a, action: t2 }) => fetch(`${s(e2)}article?lang=${n2}`, { method: "POST", headers: m, body: JSON.stringify({ path: o2, type: a, action: t2 }) }).then((r2) => r2.json()).then((r2) => c(r2, "Update counter").data);
var $ = ({ serverURL: e2, lang: n2, path: o2, page: a, pageSize: t2, sortBy: r2, signal: h2, token: i }) => {
  const l = {};
  return i && (l.Authorization = `Bearer ${i}`), fetch(`${s(e2)}comment?path=${encodeURIComponent(o2)}&pageSize=${t2}&page=${a}&lang=${n2}&sortBy=${r2}`, { signal: h2, headers: l }).then((g) => g.json()).then((g) => c(g, "Get comment data").data);
};
var u = ({ serverURL: e2, lang: n2, token: o2, comment: a }) => {
  const t2 = { "Content-Type": "application/json" };
  return o2 && (t2.Authorization = `Bearer ${o2}`), fetch(`${s(e2)}comment?lang=${n2}`, { method: "POST", headers: t2, body: JSON.stringify(a) }).then((r2) => r2.json());
};
var y = ({ serverURL: e2, lang: n2, token: o2, objectId: a }) => fetch(`${s(e2)}comment/${a}?lang=${n2}`, { method: "DELETE", headers: { Authorization: `Bearer ${o2}` } }).then((t2) => t2.json()).then((t2) => c(t2, "Delete comment"));
var U = ({ serverURL: e2, lang: n2, token: o2, objectId: a, comment: t2 }) => fetch(`${s(e2)}comment/${a}?lang=${n2}`, { method: "PUT", headers: { ...m, Authorization: `Bearer ${o2}` }, body: JSON.stringify(t2) }).then((r2) => r2.json()).then((r2) => c(r2, "Update comment"));
var f = ({ serverURL: e2, lang: n2, paths: o2, signal: a }) => fetch(`${s(e2)}comment?type=count&url=${encodeURIComponent(o2.join(","))}&lang=${n2}`, { signal: a }).then((t2) => t2.json()).then((t2) => c(t2, "Get comment count").data);
var R = ({ lang: e2, serverURL: n2 }) => {
  const o2 = (window.innerWidth - 450) / 2, a = (window.innerHeight - 450) / 2, t2 = window.open(`${n2.replace(/\/$/, "")}/ui/login?lng=${encodeURIComponent(e2)}`, "_blank", `width=450,height=450,left=${o2},top=${a},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);
  return t2 == null ? void 0 : t2.postMessage({ type: "TOKEN", data: null }, "*"), new Promise((r2) => {
    const h2 = ({ data: i }) => {
      !i || typeof i != "object" || i.type !== "userInfo" || i.data.token && (t2 == null ? void 0 : t2.close(), window.removeEventListener("message", h2), r2(i.data));
    };
    window.addEventListener("message", h2);
  });
};
var j = ({ serverURL: e2, lang: n2, paths: o2, signal: a }) => p({ serverURL: e2, lang: n2, paths: o2, type: ["time"], signal: a });
var v = (e2) => d({ ...e2, type: "time", action: "inc" });

// node_modules/autosize/dist/autosize.esm.js
var e = /* @__PURE__ */ new Map();
function t(t2) {
  var o2 = e.get(t2);
  o2 && o2.destroy();
}
function o(t2) {
  var o2 = e.get(t2);
  o2 && o2.update();
}
var r = null;
"undefined" == typeof window ? ((r = function(e2) {
  return e2;
}).destroy = function(e2) {
  return e2;
}, r.update = function(e2) {
  return e2;
}) : ((r = function(t2, o2) {
  return t2 && Array.prototype.forEach.call(t2.length ? t2 : [t2], function(t3) {
    return function(t4) {
      if (t4 && t4.nodeName && "TEXTAREA" === t4.nodeName && !e.has(t4)) {
        var o3, r2 = null, n2 = window.getComputedStyle(t4), i = (o3 = t4.value, function() {
          a({ testForHeightReduction: "" === o3 || !t4.value.startsWith(o3), restoreTextAlign: null }), o3 = t4.value;
        }), l = (function(o4) {
          t4.removeEventListener("autosize:destroy", l), t4.removeEventListener("autosize:update", s2), t4.removeEventListener("input", i), window.removeEventListener("resize", s2), Object.keys(o4).forEach(function(e2) {
            return t4.style[e2] = o4[e2];
          }), e.delete(t4);
        }).bind(t4, { height: t4.style.height, resize: t4.style.resize, textAlign: t4.style.textAlign, overflowY: t4.style.overflowY, overflowX: t4.style.overflowX, wordWrap: t4.style.wordWrap });
        t4.addEventListener("autosize:destroy", l), t4.addEventListener("autosize:update", s2), t4.addEventListener("input", i), window.addEventListener("resize", s2), t4.style.overflowX = "hidden", t4.style.wordWrap = "break-word", e.set(t4, { destroy: l, update: s2 }), s2();
      }
      function a(e2) {
        var o4, i2, l2 = e2.restoreTextAlign, s3 = void 0 === l2 ? null : l2, d2 = e2.testForHeightReduction, u2 = void 0 === d2 || d2, c2 = n2.overflowY;
        if (0 !== t4.scrollHeight && ("vertical" === n2.resize ? t4.style.resize = "none" : "both" === n2.resize && (t4.style.resize = "horizontal"), u2 && (o4 = function(e3) {
          for (var t5 = []; e3 && e3.parentNode && e3.parentNode instanceof Element; ) e3.parentNode.scrollTop && t5.push([e3.parentNode, e3.parentNode.scrollTop]), e3 = e3.parentNode;
          return function() {
            return t5.forEach(function(e4) {
              var t6 = e4[0], o5 = e4[1];
              t6.style.scrollBehavior = "auto", t6.scrollTop = o5, t6.style.scrollBehavior = null;
            });
          };
        }(t4), t4.style.height = ""), i2 = "content-box" === n2.boxSizing ? t4.scrollHeight - (parseFloat(n2.paddingTop) + parseFloat(n2.paddingBottom)) : t4.scrollHeight + parseFloat(n2.borderTopWidth) + parseFloat(n2.borderBottomWidth), "none" !== n2.maxHeight && i2 > parseFloat(n2.maxHeight) ? ("hidden" === n2.overflowY && (t4.style.overflow = "scroll"), i2 = parseFloat(n2.maxHeight)) : "hidden" !== n2.overflowY && (t4.style.overflow = "hidden"), t4.style.height = i2 + "px", s3 && (t4.style.textAlign = s3), o4 && o4(), r2 !== i2 && (t4.dispatchEvent(new Event("autosize:resized", { bubbles: true })), r2 = i2), c2 !== n2.overflow && !s3)) {
          var v2 = n2.textAlign;
          "hidden" === n2.overflow && (t4.style.textAlign = "start" === v2 ? "end" : "start"), a({ restoreTextAlign: v2, testForHeightReduction: true });
        }
      }
      function s2() {
        a({ testForHeightReduction: true, restoreTextAlign: null });
      }
    }(t3);
  }), t2;
}).destroy = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], t), e2;
}, r.update = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], o), e2;
});
var n = r;
var autosize_esm_default = n;

// node_modules/marked/lib/marked.esm.js
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
var _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, "g");
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape$1(html2, encode) {
  if (encode) {
    if (escapeTest.test(html2)) {
      return html2.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html2)) {
      return html2.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html2) {
  return html2.replace(unescapeTest, (_, n2) => {
    n2 = n2.toLowerCase();
    if (n2 === "colon")
      return ":";
    if (n2.charAt(0) === "#") {
      return n2.charAt(1) === "x" ? String.fromCharCode(parseInt(n2.substring(2), 16)) : String.fromCharCode(+n2.substring(1));
    }
    return "";
  });
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  let source = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      let valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: () => {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e2) {
    return null;
  }
  return href;
}
var noopTest = { exec: () => null };
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false;
    let curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count)
        cells.push("");
    }
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c2, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c2 && !invert) {
      suffLen++;
    } else if (currChar !== c2 && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  let level = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function outputLink(cap, link2, raw, lexer2) {
  const href = link2.href;
  const title = link2.title ? escape$1(link2.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer2.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer2.inlineTokens(text)
    };
    lexer2.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape$1(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var _Tokenizer = class {
  // set by the lexer
  constructor(options2) {
    __publicField(this, "options");
    __publicField(this, "rules");
    // set by the lexer
    __publicField(this, "lexer");
    this.options = options2 || _defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      let text = cap[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, "\n    $1");
      text = rtrim(text.replace(/^ *>[ \t]?/gm, ""), "\n");
      const top = this.lexer.state.top;
      this.lexer.state.top = true;
      const tokens = this.lexer.blockTokens(text);
      this.lexer.state.top = top;
      return {
        type: "blockquote",
        raw: cap[0],
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let raw = "";
      let itemContents = "";
      let endsWithBlankLine = false;
      while (src) {
        let endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        let line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t2) => " ".repeat(3 * t2.length));
        let nextLine = src.split("\n", 1)[0];
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        let blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          while (src) {
            const rawLine = src.split("\n", 1)[0];
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(src)) {
              break;
            }
            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLine.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.search(/[^ ]/) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLine.slice(indent);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents,
          tokens: []
        });
        list2.raw += raw;
      }
      list2.items[list2.items.length - 1].raw = raw.trimEnd();
      list2.items[list2.items.length - 1].text = itemContents.trimEnd();
      list2.raw = list2.raw.trimEnd();
      for (let i = 0; i < list2.items.length; i++) {
        this.lexer.state.top = false;
        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
        if (!list2.loose) {
          const spacers = list2.items[i].tokens.filter((t2) => t2.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t2) => /\n.*\n/.test(t2.raw));
          list2.loose = hasMultipleLineBreaks;
        }
      }
      if (list2.loose) {
        for (let i = 0; i < list2.items.length; i++) {
          list2.items[i].loose = true;
        }
      }
      return list2;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0]
      };
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag2 = cap[1].toLowerCase().replace(/\s+/g, " ");
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (!cap) {
      return;
    }
    if (!/[:|]/.test(cap[2])) {
      return;
    }
    const headers = splitCells(cap[1]);
    const aligns = cap[2].replace(/^\||\| *$/g, "").split("|");
    const rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : [];
    const item = {
      type: "table",
      raw: cap[0],
      header: [],
      align: [],
      rows: []
    };
    if (headers.length !== aligns.length) {
      return;
    }
    for (const align of aligns) {
      if (/^ *-+: *$/.test(align)) {
        item.align.push("right");
      } else if (/^ *:-+: *$/.test(align)) {
        item.align.push("center");
      } else if (/^ *:-+ *$/.test(align)) {
        item.align.push("left");
      } else {
        item.align.push(null);
      }
    }
    for (const header of headers) {
      item.header.push({
        text: header,
        tokens: this.lexer.inline(header)
      });
    }
    for (const row of rows) {
      item.rows.push(splitCells(row, item.header.length).map((cell) => {
        return {
          text: cell,
          tokens: this.lexer.inline(cell)
        };
      }));
    }
    return item;
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape$1(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link2) {
          href = link2[1];
          title = link2[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
        title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      const linkString = (cap[2] || cap[1]).replace(/\s+/g, " ");
      const link2 = links[linkString.toLowerCase()];
      if (!link2) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrongLDelim.exec(src);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = [...match[0]].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = [...rDelim].length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const lastCharLength = [...match[0]][0].length;
        const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape$1(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$1(cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape$1(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src) {
    var _a;
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$1(cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = ((_a = this.rules.inline._backpedal.exec(cap[0])) == null ? void 0 : _a[0]) ?? "";
        } while (prevCapZero !== cap[0]);
        text = escape$1(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = cap[0];
      } else {
        text = escape$1(cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
};
var newline = /^(?: *(?:\n|$))+/;
var blockCode = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/;
var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex();
var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
var blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
};
var gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockGfm = {
  ...blockNormal,
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
};
var blockPedantic = {
  ...blockNormal,
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
};
var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var br = /^( {2,}|\\)\n(?!\s*$)/;
var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _punctuation = "\\p{P}\\p{S}";
var punctuation = edit(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, _punctuation).getRegex();
var blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimAst = edit("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, _punctuation).getRegex();
var anyPunctuation = edit(/\\([punct])/, "gu").replace(/punct/g, _punctuation).getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
var tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
var reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
var inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
};
var inlinePedantic = {
  ...inlineNormal,
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
};
var inlineGfm = {
  ...inlineNormal,
  escape: edit(escape).replace("])", "~|])").getRegex(),
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
var inlineBreaks = {
  ...inlineGfm,
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
var block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
var inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};
var _Lexer = class __Lexer {
  constructor(options2) {
    __publicField(this, "tokens");
    __publicField(this, "options");
    __publicField(this, "state");
    __publicField(this, "tokenizer");
    __publicField(this, "inlineQueue");
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options2 || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      const next = this.inlineQueue[i];
      this.inlineTokens(next.src, next.tokens);
    }
    this.inlineQueue = [];
    return this.tokens;
  }
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token;
    let lastToken;
    let cutSrc;
    let lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
var _Renderer = class {
  constructor(options2) {
    __publicField(this, "options");
    this.options = options2 || _defaults;
  }
  code(code, infostring, escaped) {
    var _a;
    const lang = (_a = (infostring || "").match(/^\S*/)) == null ? void 0 : _a[0];
    code = code.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="language-' + escape$1(lang) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
  }
  blockquote(quote) {
    return `<blockquote>
${quote}</blockquote>
`;
  }
  html(html2, block2) {
    return html2;
  }
  heading(text, level, raw) {
    return `<h${level}>${text}</h${level}>
`;
  }
  hr() {
    return "<hr>\n";
  }
  list(body, ordered, start) {
    const type = ordered ? "ol" : "ul";
    const startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  }
  listitem(text, task, checked) {
    return `<li>${text}</li>
`;
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(text) {
    return `<p>${text}</p>
`;
  }
  table(header, body) {
    if (body)
      body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow(content) {
    return `<tr>
${content}</tr>
`;
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag2 = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return tag2 + content + `</${type}>
`;
  }
  /**
   * span level renderer
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }
  em(text) {
    return `<em>${text}</em>`;
  }
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return "<br>";
  }
  del(text) {
    return `<del>${text}</del>`;
  }
  link(href, title, text) {
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image(href, title, text) {
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += ">";
    return out;
  }
  text(text) {
    return text;
  }
};
var _TextRenderer = class {
  // no need for block level renderers
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
};
var _Parser = class __Parser {
  constructor(options2) {
    __publicField(this, "options");
    __publicField(this, "renderer");
    __publicField(this, "textRenderer");
    this.options = options2 || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        const genericToken = token;
        const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space": {
          continue;
        }
        case "hr": {
          out += this.renderer.hr();
          continue;
        }
        case "heading": {
          const headingToken = token;
          out += this.renderer.heading(this.parseInline(headingToken.tokens), headingToken.depth, unescape(this.parseInline(headingToken.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const codeToken = token;
          out += this.renderer.code(codeToken.text, codeToken.lang, !!codeToken.escaped);
          continue;
        }
        case "table": {
          const tableToken = token;
          let header = "";
          let cell = "";
          for (let j2 = 0; j2 < tableToken.header.length; j2++) {
            cell += this.renderer.tablecell(this.parseInline(tableToken.header[j2].tokens), { header: true, align: tableToken.align[j2] });
          }
          header += this.renderer.tablerow(cell);
          let body = "";
          for (let j2 = 0; j2 < tableToken.rows.length; j2++) {
            const row = tableToken.rows[j2];
            cell = "";
            for (let k = 0; k < row.length; k++) {
              cell += this.renderer.tablecell(this.parseInline(row[k].tokens), { header: false, align: tableToken.align[k] });
            }
            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case "blockquote": {
          const blockquoteToken = token;
          const body = this.parse(blockquoteToken.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case "list": {
          const listToken = token;
          const ordered = listToken.ordered;
          const start = listToken.start;
          const loose = listToken.loose;
          let body = "";
          for (let j2 = 0; j2 < listToken.items.length; j2++) {
            const item = listToken.items[j2];
            const checked = item.checked;
            const task = item.task;
            let itemBody = "";
            if (item.task) {
              const checkbox = this.renderer.checkbox(!!checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                  item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                    item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: "text",
                    text: checkbox + " "
                  });
                }
              } else {
                itemBody += checkbox + " ";
              }
            }
            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, !!checked);
          }
          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case "html": {
          const htmlToken = token;
          out += this.renderer.html(htmlToken.text, htmlToken.block);
          continue;
        }
        case "paragraph": {
          const paragraphToken = token;
          out += this.renderer.paragraph(this.parseInline(paragraphToken.tokens));
          continue;
        }
        case "text": {
          let textToken = token;
          let body = textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text;
          while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
            textToken = tokens[++i];
            body += "\n" + (textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        const ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape": {
          const escapeToken = token;
          out += renderer.text(escapeToken.text);
          break;
        }
        case "html": {
          const tagToken = token;
          out += renderer.html(tagToken.text);
          break;
        }
        case "link": {
          const linkToken = token;
          out += renderer.link(linkToken.href, linkToken.title, this.parseInline(linkToken.tokens, renderer));
          break;
        }
        case "image": {
          const imageToken = token;
          out += renderer.image(imageToken.href, imageToken.title, imageToken.text);
          break;
        }
        case "strong": {
          const strongToken = token;
          out += renderer.strong(this.parseInline(strongToken.tokens, renderer));
          break;
        }
        case "em": {
          const emToken = token;
          out += renderer.em(this.parseInline(emToken.tokens, renderer));
          break;
        }
        case "codespan": {
          const codespanToken = token;
          out += renderer.codespan(codespanToken.text);
          break;
        }
        case "br": {
          out += renderer.br();
          break;
        }
        case "del": {
          const delToken = token;
          out += renderer.del(this.parseInline(delToken.tokens, renderer));
          break;
        }
        case "text": {
          const textToken = token;
          out += renderer.text(textToken.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
};
var _Hooks = class {
  constructor(options2) {
    __publicField(this, "options");
    this.options = options2 || _defaults;
  }
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html2) {
    return html2;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(tokens) {
    return tokens;
  }
};
__publicField(_Hooks, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var _Marked_instances, parseMarkdown_fn, onError_fn;
var Marked = class {
  constructor(...args) {
    __privateAdd(this, _Marked_instances);
    __publicField(this, "defaults", _getDefaults());
    __publicField(this, "options", this.setOptions);
    __publicField(this, "parse", __privateMethod(this, _Marked_instances, parseMarkdown_fn).call(this, _Lexer.lex, _Parser.parse));
    __publicField(this, "parseInline", __privateMethod(this, _Marked_instances, parseMarkdown_fn).call(this, _Lexer.lexInline, _Parser.parseInline));
    __publicField(this, "Parser", _Parser);
    __publicField(this, "Renderer", _Renderer);
    __publicField(this, "TextRenderer", _TextRenderer);
    __publicField(this, "Lexer", _Lexer);
    __publicField(this, "Tokenizer", _Tokenizer);
    __publicField(this, "Hooks", _Hooks);
    this.use(...args);
  }
  /**
   * Run callback for every token
   */
  walkTokens(tokens, callback) {
    var _a, _b;
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table": {
          const tableToken = token;
          for (const cell of tableToken.header) {
            values = values.concat(this.walkTokens(cell.tokens, callback));
          }
          for (const row of tableToken.rows) {
            for (const cell of row) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          const listToken = token;
          values = values.concat(this.walkTokens(listToken.items, callback));
          break;
        }
        default: {
          const genericToken = token;
          if ((_b = (_a = this.defaults.extensions) == null ? void 0 : _a.childTokens) == null ? void 0 : _b[genericToken.type]) {
            this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
              const tokens2 = genericToken[childTokens].flat(Infinity);
              values = values.concat(this.walkTokens(tokens2, callback));
            });
          } else if (genericToken.tokens) {
            values = values.concat(this.walkTokens(genericToken.tokens, callback));
          }
        }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
    args.forEach((pack) => {
      const opts = { ...pack };
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if ("renderer" in ext) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if ("tokenizer" in ext) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            const extLevel = extensions[ext.level];
            if (extLevel) {
              extLevel.unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if ("childTokens" in ext && ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new _Renderer(this.defaults);
        for (const prop in pack.renderer) {
          if (!(prop in renderer)) {
            throw new Error(`renderer '${prop}' does not exist`);
          }
          if (prop === "options") {
            continue;
          }
          const rendererProp = prop;
          const rendererFunc = pack.renderer[rendererProp];
          const prevRenderer = renderer[rendererProp];
          renderer[rendererProp] = (...args2) => {
            let ret = rendererFunc.apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret || "";
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          if (!(prop in tokenizer)) {
            throw new Error(`tokenizer '${prop}' does not exist`);
          }
          if (["options", "rules", "lexer"].includes(prop)) {
            continue;
          }
          const tokenizerProp = prop;
          const tokenizerFunc = pack.tokenizer[tokenizerProp];
          const prevTokenizer = tokenizer[tokenizerProp];
          tokenizer[tokenizerProp] = (...args2) => {
            let ret = tokenizerFunc.apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new _Hooks();
        for (const prop in pack.hooks) {
          if (!(prop in hooks)) {
            throw new Error(`hook '${prop}' does not exist`);
          }
          if (prop === "options") {
            continue;
          }
          const hooksProp = prop;
          const hooksFunc = pack.hooks[hooksProp];
          const prevHook = hooks[hooksProp];
          if (_Hooks.passThroughHooks.has(prop)) {
            hooks[hooksProp] = (arg) => {
              if (this.defaults.async) {
                return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = hooksFunc.call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[hooksProp] = (...args2) => {
              let ret = hooksFunc.apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens2 = this.defaults.walkTokens;
        const packWalktokens = pack.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(packWalktokens.call(this, token));
          if (walkTokens2) {
            values = values.concat(walkTokens2.call(this, token));
          }
          return values;
        };
      }
      this.defaults = { ...this.defaults, ...opts };
    });
    return this;
  }
  setOptions(opt) {
    this.defaults = { ...this.defaults, ...opt };
    return this;
  }
  lexer(src, options2) {
    return _Lexer.lex(src, options2 ?? this.defaults);
  }
  parser(tokens, options2) {
    return _Parser.parse(tokens, options2 ?? this.defaults);
  }
};
_Marked_instances = new WeakSet();
parseMarkdown_fn = function(lexer2, parser2) {
  return (src, options2) => {
    const origOpt = { ...options2 };
    const opt = { ...this.defaults, ...origOpt };
    if (this.defaults.async === true && origOpt.async === false) {
      if (!opt.silent) {
        console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.");
      }
      opt.async = true;
    }
    const throwError = __privateMethod(this, _Marked_instances, onError_fn).call(this, !!opt.silent, !!opt.async);
    if (typeof src === "undefined" || src === null) {
      return throwError(new Error("marked(): input parameter is undefined or null"));
    }
    if (typeof src !== "string") {
      return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
    }
    if (opt.hooks) {
      opt.hooks.options = opt;
    }
    if (opt.async) {
      return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer2(src2, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html2) => opt.hooks ? opt.hooks.postprocess(html2) : html2).catch(throwError);
    }
    try {
      if (opt.hooks) {
        src = opt.hooks.preprocess(src);
      }
      let tokens = lexer2(src, opt);
      if (opt.hooks) {
        tokens = opt.hooks.processAllTokens(tokens);
      }
      if (opt.walkTokens) {
        this.walkTokens(tokens, opt.walkTokens);
      }
      let html2 = parser2(tokens, opt);
      if (opt.hooks) {
        html2 = opt.hooks.postprocess(html2);
      }
      return html2;
    } catch (e2) {
      return throwError(e2);
    }
  };
};
onError_fn = function(silent, async) {
  return (e2) => {
    e2.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (silent) {
      const msg = "<p>An error occurred:</p><pre>" + escape$1(e2.message + "", true) + "</pre>";
      if (async) {
        return Promise.resolve(msg);
      }
      return msg;
    }
    if (async) {
      return Promise.reject(e2);
    }
    throw e2;
  };
};
var markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
marked.options = marked.setOptions = function(options2) {
  markedInstance.setOptions(options2);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function(...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function(tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
var options = marked.options;
var setOptions = marked.setOptions;
var use = marked.use;
var walkTokens = marked.walkTokens;
var parseInline = marked.parseInline;
var parser = _Parser.parse;
var lexer = _Lexer.lex;

// node_modules/marked-highlight/src/index.js
function markedHighlight(options2) {
  if (typeof options2 === "function") {
    options2 = {
      highlight: options2
    };
  }
  if (!options2 || typeof options2.highlight !== "function") {
    throw new Error("Must provide highlight function");
  }
  if (typeof options2.langPrefix !== "string") {
    options2.langPrefix = "language-";
  }
  return {
    async: !!options2.async,
    walkTokens(token) {
      if (token.type !== "code") {
        return;
      }
      const lang = getLang(token.lang);
      if (options2.async) {
        return Promise.resolve(options2.highlight(token.text, lang, token.lang || "")).then(updateToken(token));
      }
      const code = options2.highlight(token.text, lang, token.lang || "");
      if (code instanceof Promise) {
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      }
      updateToken(token)(code);
    },
    useNewRenderer: true,
    renderer: {
      code(code, infoString, escaped) {
        if (typeof code === "object") {
          escaped = code.escaped;
          infoString = code.lang;
          code = code.text;
        }
        const lang = getLang(infoString);
        const classAttr = lang ? ` class="${options2.langPrefix}${escape2(lang)}"` : "";
        code = code.replace(/\n$/, "");
        return `<pre><code${classAttr}>${escaped ? code : escape2(code, true)}
</code></pre>`;
      }
    }
  };
}
function getLang(lang) {
  return (lang || "").match(/\S*/)[0];
}
function updateToken(token) {
  return (code) => {
    if (typeof code === "string" && code !== token.text) {
      token.escaped = true;
      token.text = code;
    }
  };
}
var escapeTest2 = /[&<>"']/;
var escapeReplace2 = new RegExp(escapeTest2.source, "g");
var escapeTestNoEncode2 = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode2 = new RegExp(escapeTestNoEncode2.source, "g");
var escapeReplacements2 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement2 = (ch) => escapeReplacements2[ch];
function escape2(html2, encode) {
  if (encode) {
    if (escapeTest2.test(html2)) {
      return html2.replace(escapeReplace2, getEscapeReplacement2);
    }
  } else {
    if (escapeTestNoEncode2.test(html2)) {
      return html2.replace(escapeReplaceNoEncode2, getEscapeReplacement2);
    }
  }
  return html2;
}

// node_modules/@waline/client/dist/slim.js
var import_recaptcha_v3 = __toESM(require_ReCaptcha());
var Jt = ["nick", "mail", "link"];
var Xe = (n2) => n2.filter((o2) => Jt.includes(o2));
var Ye = ["//unpkg.com/@waline/emojis@1.1.0/weibo"];
var Qt = ["//unpkg.com/@waline/emojis/tieba/tieba_agree.png", "//unpkg.com/@waline/emojis/tieba/tieba_look_down.png", "//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png", "//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png", "//unpkg.com/@waline/emojis/tieba/tieba_awkward.png", "//unpkg.com/@waline/emojis/tieba/tieba_sleep.png"];
var $t = (n2) => new Promise((o2, t2) => {
  if (n2.size > 128e3) return t2(new Error("File too large! File size limit 128KB"));
  const e2 = new FileReader();
  e2.readAsDataURL(n2), e2.onload = () => {
    var i;
    return o2(((i = e2.result) == null ? void 0 : i.toString()) ?? "");
  }, e2.onerror = t2;
});
var en = (n2) => n2 === true ? '<p class="wl-tex">TeX is not available in preview</p>' : '<span class="wl-tex">TeX is not available in preview</span>';
var tn = (n2) => {
  const o2 = async (t2, e2 = {}) => fetch(`https://api.giphy.com/v1/gifs/${t2}?${new URLSearchParams({ lang: n2, limit: "20", rating: "g", api_key: "6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp", ...e2 }).toString()}`).then((i) => i.json()).then(({ data: i }) => i.map((s2) => ({ title: s2.title, src: s2.images.downsized_medium.url })));
  return { search: (t2) => o2("search", { q: t2, offset: "0" }), default: () => o2("trending", {}), more: (t2, e2 = 0) => o2("search", { q: t2, offset: e2.toString() }) };
};
var nn = /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/;
var on = /</;
var ln = /(?:^|\s)\/\/(.+?)$/gm;
var an = /\/\*([\S\s]*?)\*\//gm;
var rn = new RegExp(`(${nn.source}|${on.source})|((?:${ln.source})|(?:${an.source}))`, "gmi");
var Je = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B"];
var Se = {};
var sn = (n2) => {
  let o2 = 0;
  return n2.replace(rn, (t2, e2, i) => {
    if (i) return `<span style="color: slategray">${i}</span>`;
    if (e2 === "<") return "&lt;";
    let s2;
    Se[e2] ? s2 = Se[e2] : (s2 = Je[o2], Se[e2] = s2);
    const r2 = `<span style="color: #${s2}">${e2}</span>`;
    return o2 = ++o2 % Je.length, r2;
  });
};
var cn = ["nick", "nickError", "mail", "mailError", "link", "optional", "placeholder", "sofa", "submit", "like", "cancelLike", "reply", "cancelReply", "comment", "refresh", "more", "preview", "emoji", "uploadImage", "seconds", "minutes", "hours", "days", "now", "uploading", "login", "logout", "admin", "sticky", "word", "wordHint", "anonymous", "level0", "level1", "level2", "level3", "level4", "level5", "gif", "gifSearchPlaceholder", "profile", "approved", "waiting", "spam", "unsticky", "oldest", "latest", "hottest", "reactionTitle"];
var Z = (n2) => Object.fromEntries(n2.map((o2, t2) => [cn[t2], o2]));
var Qe = Z(["NickName", "NickName cannot be less than 3 bytes.", "E-Mail", "Please confirm your email address.", "Website", "Optional", "Comment here...", "No comment yet.", "Submit", "Like", "Cancel like", "Reply", "Cancel reply", "Comments", "Refresh", "Load More...", "Preview", "Emoji", "Upload Image", "seconds ago", "minutes ago", "hours ago", "days ago", "just now", "Uploading", "Login", "logout", "Admin", "Sticky", "Words", `Please input comments between $0 and $1 words!
 Current word number: $2`, "Anonymous", "Dwarves", "Hobbits", "Ents", "Wizards", "Elves", "Maiar", "GIF", "Search GIF", "Profile", "Approved", "Waiting", "Spam", "Unsticky", "Oldest", "Latest", "Hottest", "What do you think?"]);
var $e = Z(["Pseudo", "Le pseudo ne peut pas faire moins de 3 octets.", "E-mail", "Veuillez confirmer votre adresse e-mail.", "Site Web", "Optionnel", "Commentez ici...", "Aucun commentaire pour l'instant.", "Envoyer", "J'aime", "Annuler le j'aime", "Répondre", "Annuler la réponse", "Commentaires", "Actualiser", "Charger plus...", "Aperçu", "Emoji", "Télécharger une image", "Il y a quelques secondes", "Il y a quelques minutes", "Il y a quelques heures", "Il y a quelques jours", "À l'instant", "Téléchargement en cours", "Connexion", "Déconnexion", "Admin", "Épinglé", "Mots", `Veuillez saisir des commentaires entre $0 et $1 mots !
 Nombre actuel de mots : $2`, "Anonyme", "Nains", "Hobbits", "Ents", "Mages", "Elfes", "Maïar", "GIF", "Rechercher un GIF", "Profil", "Approuvé", "En attente", "Indésirable", "Détacher", "Le plus ancien", "Dernier", "Le plus populaire", "Qu'en pensez-vous ?"]);
var et = Z(["ニックネーム", "3バイト以上のニックネームをご入力ください.", "メールアドレス", "メールアドレスをご確認ください.", "サイト", "オプション", "ここにコメント", "コメントしましょう~", "提出する", "Like", "Cancel like", "返信する", "キャンセル", "コメント", "更新", "さらに読み込む", "プレビュー", "絵文字", "画像をアップロード", "秒前", "分前", "時間前", "日前", "たっだ今", "アップロード", "ログインする", "ログアウト", "管理者", "トップに置く", "ワード", `コメントは $0 から $1 ワードの間でなければなりません!
 現在の単語番号: $2`, "匿名", "うえにん", "なかにん", "しもおし", "特にしもおし", "かげ", "なぬし", "GIF", "探す GIF", "個人情報", "承認済み", "待っている", "スパム", "べたつかない", "逆順", "正順", "人気順", "どう思いますか？"]);
var un = Z(["Apelido", "Apelido não pode ser menor que 3 bytes.", "E-Mail", "Por favor, confirme seu endereço de e-mail.", "Website", "Opcional", "Comente aqui...", "Nenhum comentário, ainda.", "Enviar", "Like", "Cancel like", "Responder", "Cancelar resposta", "Comentários", "Refrescar", "Carregar Mais...", "Visualizar", "Emoji", "Enviar Imagem", "segundos atrás", "minutos atrás", "horas atrás", "dias atrás", "agora mesmo", "Enviando", "Entrar", "Sair", "Admin", "Sticky", "Palavras", `Favor enviar comentário com $0 a $1 palavras!
 Número de palavras atuais: $2`, "Anônimo", "Dwarves", "Hobbits", "Ents", "Wizards", "Elves", "Maiar", "GIF", "Pesquisar GIF", "informação pessoal", "Aprovado", "Espera", "Spam", "Unsticky", "Mais velho", "Mais recentes", "Mais quente", "O que você acha?"]);
var tt = Z(["Псевдоним", "Никнейм не может быть меньше 3 байт.", "Эл. адрес", "Пожалуйста, подтвердите адрес вашей электронной почты.", "Веб-сайт", "Необязательный", "Комментарий здесь...", "Пока нет комментариев.", "Отправить", "Like", "Cancel like", "Отвечать", "Отменить ответ", "Комментарии", "Обновить", "Загрузи больше...", "Превью", "эмодзи", "Загрузить изображение", "секунд назад", "несколько минут назад", "несколько часов назад", "дней назад", "прямо сейчас", "Загрузка", "Авторизоваться", "Выход из системы", "Админ", "Липкий", "Слова", `Пожалуйста, введите комментарии от $0 до $1 слов!
Номер текущего слова: $2`, "Анонимный", "Dwarves", "Hobbits", "Ents", "Wizards", "Elves", "Maiar", "GIF", "Поиск GIF", "Персональные данные", "Одобренный", "Ожидающий", "Спам", "Нелипкий", "самый старый", "последний", "самый горячий", "Что вы думаете?"]);
var nt = Z(["Tên", "Tên không được nhỏ hơn 3 ký tự.", "E-Mail", "Vui lòng xác nhập địa chỉ email của bạn.", "Website", "Tùy chọn", "Hãy bình luận có văn hoá!", "Chưa có bình luận", "Gửi", "Thích", "Bỏ thích", "Trả lời", "Hủy bỏ", "bình luận", "Làm mới", "Tải thêm...", "Xem trước", "Emoji", "Tải lên hình ảnh", "giây trước", "phút trước", "giờ trước", "ngày trước", "Vừa xong", "Đang tải lên", "Đăng nhập", "đăng xuất", "Quản trị viên", "Dính", "từ", `Bình luận phải có độ dài giữa $0 và $1 từ!
 Số từ hiện tại: $2`, "Vô danh", "Người lùn", "Người tí hon", "Thần rừng", "Pháp sư", "Tiên tộc", "Maiar", "Ảnh GIF", "Tìm kiếm ảnh GIF", "thông tin cá nhân", "Đã được phê duyệt", "Đang chờ đợi", "Thư rác", "Không dính", "lâu đời nhất", "muộn nhất", "nóng nhất", "What do you think?"]);
var ot = Z(["昵称", "昵称不能少于3个字符", "邮箱", "请填写正确的邮件地址", "网址", "可选", "欢迎评论", "来发评论吧~", "提交", "喜欢", "取消喜欢", "回复", "取消回复", "评论", "刷新", "加载更多...", "预览", "表情", "上传图片", "秒前", "分钟前", "小时前", "天前", "刚刚", "正在上传", "登录", "退出", "博主", "置顶", "字", `评论字数应在 $0 到 $1 字之间！
当前字数：$2`, "匿名", "潜水", "冒泡", "吐槽", "活跃", "话痨", "传说", "表情包", "搜索表情包", "个人资料", "通过", "待审核", "垃圾", "取消置顶", "按倒序", "按正序", "按热度", "你认为这篇文章怎么样？"]);
var mn = Z(["暱稱", "暱稱不能少於3個字元", "郵箱", "請填寫正確的郵件地址", "網址", "可選", "歡迎留言", "來發留言吧~", "送出", "喜歡", "取消喜歡", "回覆", "取消回覆", "留言", "重整", "載入更多...", "預覽", "表情", "上傳圖片", "秒前", "分鐘前", "小時前", "天前", "剛剛", "正在上傳", "登入", "登出", "管理者", "置頂", "字", `留言字數應在 $0 到 $1 字之間！
目前字數：$2`, "匿名", "潛水", "冒泡", "吐槽", "活躍", "多話", "傳說", "表情包", "搜尋表情包", "個人資料", "通過", "待審核", "垃圾", "取消置頂", "最早", "最新", "熱門", "你認為這篇文章怎麼樣？"]);
var dn = Z(["Benutzername", "Der Benutzername darf nicht weniger als 3 Bytes umfassen.", "E-Mail", "Bitte bestätigen Sie Ihre E-Mail-Adresse.", "Webseite", "Optional", "Kommentieren Sie hier...", "Noch keine Kommentare.", "Senden", "Gefällt mir", "Gefällt mir nicht mehr", "Antworten", "Antwort abbrechen", "Kommentare", "Aktualisieren", "Mehr laden...", "Vorschau", "Emoji", "Ein Bild hochladen", "Vor einigen Sekunden", "Vor einigen Minuten", "Vor einigen Stunden", "Vor einigen Tagen", "Gerade eben", "Hochladen läuft", "Anmelden", "Abmelden", "Admin", "Angeheftet", "Wörter", "Bitte geben Sie Kommentare zwischen $0 und $1 Wörtern ein! Aktuelle Anzahl der Wörter: $2", "Anonym", "Zwerge", "Hobbits", "Ents", "Magier", "Elfen", "Maïar", "GIF", "Nach einem GIF suchen", "Profil", "Genehmigt", "Ausstehend", "Spam", "Lösen", "Älteste", "Neueste", "Am beliebtesten", "Was denken Sie?"]);
var lt = "en-US";
var be = { zh: ot, "zh-cn": ot, "zh-tw": mn, en: Qe, "en-us": Qe, fr: $e, "fr-fr": $e, jp: et, "jp-jp": et, "pt-br": un, ru: tt, "ru-ru": tt, vi: nt, "vi-vn": nt, de: dn };
var at = (n2) => be[n2.toLowerCase()] || be[lt.toLowerCase()];
var it = (n2) => Object.keys(be).includes(n2.toLowerCase()) ? n2 : lt;
var rt = (n2) => {
  try {
    n2 = decodeURI(n2);
  } catch {
  }
  return n2;
};
var st = (n2 = "") => n2.replace(/\/$/u, "");
var ct = (n2) => /^(https?:)?\/\//.test(n2);
var ke = (n2) => {
  const o2 = st(n2);
  return ct(o2) ? o2 : `https://${o2}`;
};
var vn = (n2) => Array.isArray(n2) ? n2 : n2 ? [0, n2] : false;
var xe = (n2, o2) => typeof n2 == "function" ? n2 : n2 === false ? false : o2;
var gn = ({ serverURL: n2, path: o2 = location.pathname, lang: t2 = typeof navigator > "u" ? "en-US" : navigator.language, locale: e2, emoji: i = Ye, meta: s2 = ["nick", "mail", "link"], requiredMeta: r2 = [], dark: u2 = false, pageSize: l = 10, wordLimit: a, imageUploader: g, highlighter: b, texRenderer: A, copyright: f2 = true, login: S = "enable", search: E, reaction: _, recaptchaV3Key: L = "", turnstileKey: M = "", commentSorting: x = "latest", ...G }) => ({ serverURL: ke(n2), path: rt(o2), lang: it(t2), locale: { ...at(it(t2)), ...typeof e2 == "object" ? e2 : {} }, wordLimit: vn(a), meta: Xe(s2), requiredMeta: Xe(r2), imageUploader: xe(g, $t), highlighter: xe(b, sn), texRenderer: xe(A, en), dark: u2, emoji: typeof i == "boolean" ? i ? Ye : [] : i, pageSize: l, login: S, copyright: f2, search: E === false ? false : typeof E == "object" ? E : tn(t2), recaptchaV3Key: L, turnstileKey: M, reaction: Array.isArray(_) ? _ : _ === true ? Qt : [], commentSorting: x, ...G });
var re = (n2) => typeof n2 == "string";
var Ae = "{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bg-color:#1e1e1e;--waline-bg-color-light:#272727;--waline-bg-color-hover: #444;--waline-border-color:#333;--waline-disable-bg-color:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bg-color:#272727;--waline-info-color:#666}";
var hn = (n2) => re(n2) ? n2 === "auto" ? `@media(prefers-color-scheme:dark){body${Ae}}` : `${n2}${Ae}` : n2 === true ? `:root${Ae}` : "";
var Me = (n2, o2) => {
  let t2 = n2.toString();
  for (; t2.length < o2; ) t2 = "0" + t2;
  return t2;
};
var fn = (n2) => {
  const o2 = Me(n2.getDate(), 2), t2 = Me(n2.getMonth() + 1, 2);
  return `${Me(n2.getFullYear(), 2)}-${t2}-${o2}`;
};
var wn = (n2, o2, t2) => {
  if (!n2) return "";
  const e2 = re(n2) ? new Date(n2.indexOf(" ") !== -1 ? n2.replace(/-/g, "/") : n2) : n2, i = o2.getTime() - e2.getTime(), s2 = Math.floor(i / (24 * 3600 * 1e3));
  if (s2 === 0) {
    const r2 = i % 864e5, u2 = Math.floor(r2 / (3600 * 1e3));
    if (u2 === 0) {
      const l = r2 % 36e5, a = Math.floor(l / (60 * 1e3));
      if (a === 0) {
        const g = l % 6e4;
        return `${Math.round(g / 1e3)} ${t2.seconds}`;
      }
      return `${a} ${t2.minutes}`;
    }
    return `${u2} ${t2.hours}`;
  }
  return s2 < 0 ? t2.now : s2 < 8 ? `${s2} ${t2.days}` : fn(e2);
};
var yn = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var bn = (n2) => yn.test(n2);
var kn = (n2) => !!/@[0-9]+\.[0-9]+\.[0-9]+/.test(n2);
var pn = (n2) => {
  const o2 = useStorage("WALINE_EMOJI", {}), t2 = kn(n2);
  if (t2) {
    const e2 = o2.value[n2];
    if (e2) return Promise.resolve(e2);
  }
  return fetch(`${n2}/info.json`).then((e2) => e2.json()).then((e2) => {
    const i = { folder: n2, ...e2 };
    return t2 && (o2.value[n2] = i), i;
  });
};
var ut = (n2, o2 = "", t2 = "", e2 = "") => `${o2 ? `${o2}/` : ""}${t2}${n2}${e2 ? `.${e2}` : ""}`;
var _n = (n2) => Promise.all(n2.map((o2) => re(o2) ? pn(st(o2)) : Promise.resolve(o2))).then((o2) => {
  const t2 = { tabs: [], map: {} };
  return o2.forEach((e2) => {
    const { name: i, folder: s2, icon: r2, prefix: u2 = "", type: l, items: a } = e2;
    t2.tabs.push({ name: i, icon: ut(r2, s2, u2, l), items: a.map((g) => {
      const b = `${u2}${g}`;
      return t2.map[b] = ut(g, s2, u2, l), b;
    }) });
  }), t2;
});
var mt = (n2) => {
  n2.name !== "AbortError" && console.error(n2.message);
};
var je = (n2) => n2 instanceof HTMLElement ? n2 : re(n2) ? document.querySelector(n2) : null;
var Cn = (n2) => n2.type.includes("image");
var dt = (n2) => {
  const o2 = Array.from(n2).find(Cn);
  return o2 ? o2.getAsFile() : null;
};
var In = /\$.*?\$/;
var Ln = /^\$(.*?)\$/;
var En = /^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/;
var Rn = (n2) => [{ name: "blockMath", level: "block", tokenizer(o2) {
  const t2 = En.exec(o2);
  if (t2 !== null) return { type: "html", raw: t2[0], text: n2(true, t2[1]) };
} }, { name: "inlineMath", level: "inline", start(o2) {
  const t2 = o2.search(In);
  return t2 !== -1 ? t2 : o2.length;
}, tokenizer(o2) {
  const t2 = Ln.exec(o2);
  if (t2 !== null) return { type: "html", raw: t2[0], text: n2(false, t2[1]) };
} }];
var vt = (n2 = "", o2 = {}) => n2.replace(/:(.+?):/g, (t2, e2) => o2[e2] ? `<img class="wl-emoji" src="${o2[e2]}" alt="${e2}">` : t2);
var Sn = (n2, { emojiMap: o2, highlighter: t2, texRenderer: e2 }) => {
  const i = new Marked();
  if (i.setOptions({ breaks: true }), t2 && i.use(markedHighlight({ highlight: t2 })), e2) {
    const s2 = Rn(e2);
    i.use({ extensions: s2 });
  }
  return i.parse(vt(n2, o2));
};
var Ue = (n2) => {
  const { path: o2 } = n2.dataset;
  return o2 != null && o2.length ? o2 : null;
};
var xn = (n2) => n2.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu);
var An = (n2) => n2.match(/[\u4E00-\u9FD5]/gu);
var Mn = (n2) => {
  var o2, t2;
  return (((o2 = xn(n2)) == null ? void 0 : o2.reduce((e2, i) => e2 + (["", ",", "."].includes(i.trim()) ? 0 : i.trim().split(/\s+/u).length), 0)) ?? 0) + (((t2 = An(n2)) == null ? void 0 : t2.length) ?? 0);
};
var jn = async () => {
  if (!navigator) return "";
  const { userAgentData: n2 } = navigator;
  let o2 = navigator.userAgent;
  if (!n2 || n2.platform !== "Windows") return o2;
  const { platformVersion: t2 } = await n2.getHighEntropyValues(["platformVersion"]);
  return t2 && parseInt(t2.split(".")[0]) >= 13 && (o2 = o2.replace("Windows NT 10.0", "Windows NT 11.0")), o2;
};
var gt = ({ serverURL: n2, path: o2 = window.location.pathname, selector: t2 = ".waline-comment-count", lang: e2 = navigator.language }) => {
  const i = new AbortController(), s2 = document.querySelectorAll(t2);
  return s2.length && f({ serverURL: ke(n2), paths: Array.from(s2).map((r2) => rt(Ue(r2) ?? o2)), lang: e2, signal: i.signal }).then((r2) => {
    s2.forEach((u2, l) => {
      u2.innerText = r2[l].toString();
    });
  }).catch(mt), i.abort.bind(i);
};
var Un = ({ size: n2 }) => h("svg", { class: "wl-close-icon", viewBox: "0 0 1024 1024", width: n2, height: n2 }, [h("path", { d: "M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z", fill: "currentColor" }), h("path", { d: "m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z", fill: "#888" })]);
var zn = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, h("path", { d: "m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z", fill: "red" }));
var Vn = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, h("path", { d: "M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z", fill: "currentColor" }));
var Tn = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [h("path", { d: "M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z", fill: "currentColor" }), h("path", { d: "M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z", fill: "currentColor" })]);
var Hn = ({ active: n2 = false }) => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [h("path", { d: `M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z${n2 ? "" : "M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"}`, fill: n2 ? "red" : "currentColor" })]);
var Pn = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [h("path", { d: "M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0", fill: "currentColor" }), h("path", { d: "M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0", fill: "currentColor" })]);
var Nn = () => h("svg", { width: "16", height: "16", ariaHidden: "true" }, h("path", { d: "M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z", fill: "currentColor" }));
var Wn = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, h("path", { d: "M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z", fill: "currentColor" }));
var Bn = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, h("path", { d: "M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z", fill: "currentColor" }));
var Dn = () => h("svg", { class: "verified-icon", viewBox: "0 0 1024 1024", width: "14", height: "14" }, h("path", { d: "m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z", fill: "#27ae60" }));
var pe = ({ size: n2 = 100 }) => h("svg", { width: n2, height: n2, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, h("circle", { cx: 50, cy: 50, fill: "none", stroke: "currentColor", strokeWidth: "4", r: "40", "stroke-dasharray": "85 30" }, h("animateTransform", { attributeName: "transform", type: "rotate", repeatCount: "indefinite", dur: "1s", values: "0 50 50;360 50 50", keyTimes: "0;1" })));
var Fn = () => h("svg", { width: 24, height: 24, fill: "currentcolor", viewBox: "0 0 24 24" }, [h("path", { style: "transform: translateY(0.5px)", d: "M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z" }), h("path", { d: "M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z" })]);
var On = () => useStorage("WALINE_USER_META", { nick: "", mail: "", link: "" });
var Gn = () => useStorage("WALINE_COMMENT_BOX_EDITOR", "");
var qn = "WALINE_LIKE";
var ht = null;
var ft = () => ht ?? (ht = useStorage(qn, []));
var Kn = "WALINE_REACTION";
var wt = null;
var Zn = () => wt ?? (wt = useStorage(Kn, {}));
var yt = {};
var Xn = (n2) => {
  const o2 = yt[n2] ?? (yt[n2] = (0, import_recaptcha_v3.load)(n2, { useRecaptchaNet: true, autoHideBadge: true }));
  return { execute: (t2) => o2.then((e2) => e2.execute(t2)) };
};
var Yn = (n2) => ({ execute: async (o2) => {
  const { load: t2 } = useScriptTag("https://challenges.cloudflare.com/turnstile/v0/api.js", void 0, { async: false });
  await t2();
  const e2 = window == null ? void 0 : window.turnstile;
  return new Promise((i) => {
    e2 == null || e2.ready(() => {
      e2 == null || e2.render(".wl-captcha-container", { sitekey: n2, action: o2, size: "compact", callback: i });
    });
  });
} });
var Jn = "WALINE_USER";
var bt = null;
var _e = () => bt ?? (bt = useStorage(Jn, {}));
var Qn = defineComponent({ __name: "ArticleReaction", setup(n2, { expose: o2 }) {
  o2();
  const t2 = Zn(), e2 = inject("config"), i = ref(-1), s2 = ref([]), r2 = computed(() => e2.value.locale), u2 = computed(() => e2.value.reaction.length > 0), l = computed(() => {
    const { reaction: f2, path: S } = e2.value;
    return f2.map((E, _) => ({ icon: E, desc: r2.value[`reaction${_}`], active: t2.value[S] === _ }));
  });
  let a;
  const g = async () => {
    if (!u2.value) return;
    const { serverURL: f2, lang: S, path: E, reaction: _ } = e2.value, L = new AbortController();
    a = L.abort.bind(L);
    const M = await p({ serverURL: f2, lang: S, paths: [E], type: _.map((x, G) => `reaction${G}`), signal: L.signal });
    s2.value = _.map((x, G) => M[0][`reaction${G}`]);
  }, b = async (f2) => {
    if (i.value === -1) {
      const { serverURL: S, lang: E, path: _ } = e2.value, L = t2.value[_];
      i.value = f2, L !== void 0 && (await d({ serverURL: S, lang: E, path: _, type: `reaction${L}`, action: "desc" }), s2.value[L] = Math.max(s2.value[L] - 1, 0)), L !== f2 && (await d({ serverURL: S, lang: E, path: _, type: `reaction${f2}` }), s2.value[f2] = (s2.value[f2] || 0) + 1), L === f2 ? delete t2.value[_] : t2.value[_] = f2, i.value = -1;
    }
  };
  onMounted(() => {
    watch(() => [e2.value.serverURL, e2.value.path], () => {
      g();
    }, { immediate: true });
  }), onUnmounted(() => a == null ? void 0 : a());
  const A = { reactionStorage: t2, config: e2, votingIndex: i, voteNumbers: s2, locale: r2, isReactionEnabled: u2, reactionsInfo: l, get abort() {
    return a;
  }, set abort(f2) {
    a = f2;
  }, fetchReaction: g, vote: b, get LoadingIcon() {
    return pe;
  } };
  return Object.defineProperty(A, "__isScriptSetup", { enumerable: false, value: true }), A;
} });
var ve = (n2, o2) => {
  const t2 = n2.__vccOpts || n2;
  for (const [e2, i] of o2) t2[e2] = i;
  return t2;
};
var $n = { key: 0, class: "wl-reaction" };
var eo = ["textContent"];
var to = { class: "wl-reaction-list" };
var no = ["onClick"];
var oo = { class: "wl-reaction-img" };
var lo = ["src", "alt"];
var ao = ["textContent"];
var io = ["textContent"];
function ro(n2, o2, t2, e2, i, s2) {
  return e2.reactionsInfo.length ? (openBlock(), createElementBlock("div", $n, [createBaseVNode("div", { class: "wl-reaction-title", textContent: toDisplayString(e2.locale.reactionTitle) }, null, 8, eo), createBaseVNode("ul", to, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.reactionsInfo, ({ active: r2, icon: u2, desc: l }, a) => (openBlock(), createElementBlock("li", { key: a, class: normalizeClass(["wl-reaction-item", { active: r2 }]), onClick: (g) => e2.vote(a) }, [createBaseVNode("div", oo, [createBaseVNode("img", { src: u2, alt: l }, null, 8, lo), e2.votingIndex === a ? (openBlock(), createBlock(e2.LoadingIcon, { key: 0, class: "wl-reaction-loading" })) : (openBlock(), createElementBlock("div", { key: 1, class: "wl-reaction-votes", textContent: toDisplayString(e2.voteNumbers[a] || 0) }, null, 8, ao))]), createBaseVNode("div", { class: "wl-reaction-text", textContent: toDisplayString(l) }, null, 8, io)], 10, no))), 128))])])) : createCommentVNode("v-if", true);
}
var so = ve(Qn, [["render", ro], ["__file", "ArticleReaction.vue"]]);
var co = defineComponent({ __name: "ImageWall", props: { items: { default: () => [] }, columnWidth: { default: 300 }, gap: { default: 0 } }, emits: ["insert"], setup(n2, { expose: o2 }) {
  const t2 = n2;
  o2();
  let e2 = null;
  const i = ref(null), s2 = ref({}), r2 = ref([]), u2 = () => {
    const f2 = Math.floor((i.value.getBoundingClientRect().width + t2.gap) / (t2.columnWidth + t2.gap));
    return f2 > 0 ? f2 : 1;
  }, l = (f2) => new Array(f2).fill(null).map(() => []), a = async (f2) => {
    var S;
    if (f2 >= t2.items.length) return;
    await nextTick();
    const E = Array.from(((S = i.value) == null ? void 0 : S.children) ?? []).reduce((_, L) => L.getBoundingClientRect().height < _.getBoundingClientRect().height ? L : _);
    r2.value[Number(E.dataset.index)].push(f2), await a(f2 + 1);
  }, g = async (f2 = false) => {
    if (r2.value.length === u2() && !f2) return;
    r2.value = l(u2());
    const S = window.scrollY;
    await a(0), window.scrollTo({ top: S });
  }, b = (f2) => {
    s2.value[f2.target.src] = true;
  };
  onMounted(() => {
    g(true), e2 = new ResizeObserver(() => {
      g();
    }), e2.observe(i.value), watch(() => [t2.items], () => {
      s2.value = {}, g(true);
    }), watch(() => [t2.columnWidth, t2.gap], () => {
      g();
    });
  }), onBeforeUnmount(() => e2.unobserve(i.value));
  const A = { props: t2, get resizeObserver() {
    return e2;
  }, set resizeObserver(f2) {
    e2 = f2;
  }, wall: i, state: s2, columns: r2, getColumnCount: u2, createColumns: l, fillColumns: a, redraw: g, imageLoad: b, get LoadingIcon() {
    return pe;
  } };
  return Object.defineProperty(A, "__isScriptSetup", { enumerable: false, value: true }), A;
} });
var uo = ["data-index"];
var mo = ["src", "title", "onClick"];
function vo(n2, o2, t2, e2, i, s2) {
  return openBlock(), createElementBlock("div", { ref: "wall", class: "wl-gallery", style: normalizeStyle({ gap: `${t2.gap}px` }) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.columns, (r2, u2) => (openBlock(), createElementBlock("div", { key: u2, class: "wl-gallery-column", "data-index": u2, style: normalizeStyle({ gap: `${t2.gap}px` }) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(r2, (l) => (openBlock(), createElementBlock(Fragment, { key: l }, [e2.state[t2.items[l].src] ? createCommentVNode("v-if", true) : (openBlock(), createBlock(e2.LoadingIcon, { key: 0, size: 36, style: { margin: "20px auto" } })), createBaseVNode("img", { class: "wl-gallery-item", src: t2.items[l].src, title: t2.items[l].title, loading: "lazy", onLoad: e2.imageLoad, onClick: (a) => n2.$emit("insert", `![](${t2.items[l].src})`) }, null, 40, mo)], 64))), 128))], 12, uo))), 128))], 4);
}
var go = ve(co, [["render", vo], ["__file", "ImageWall.vue"]]);
var ho = defineComponent({ __name: "CommentBox", props: { edit: { default: null }, rootId: { default: "" }, replyId: { default: "" }, replyUser: { default: "" } }, emits: ["log", "cancelEdit", "cancelReply", "submit"], setup(n2, { expose: o2, emit: t2 }) {
  o2();
  const e2 = n2, i = t2, s2 = inject("config"), r2 = Gn(), u2 = On(), l = _e(), a = ref({}), g = ref(null), b = ref(null), A = ref(null), f2 = ref(null), S = ref(null), E = ref(null), _ = ref(null), L = ref({ tabs: [], map: {} }), M = ref(0), x = ref(false), G = ref(false), se = ref(false), ce = ref(""), oe = ref(0), H = reactive({ loading: true, list: [] }), ne = ref(0), X = ref(false), ue = ref(""), Y = ref(false), le = ref(false), J = computed(() => s2.value.locale), y2 = computed(() => {
    var v2;
    return !!((v2 = l.value) != null && v2.token);
  }), R2 = computed(() => s2.value.imageUploader !== false), N = (v2) => {
    const h2 = g.value, w2 = h2.selectionStart, j2 = h2.selectionEnd || 0, F = h2.scrollTop;
    r2.value = h2.value.substring(0, w2) + v2 + h2.value.substring(j2, h2.value.length), h2.focus(), h2.selectionStart = w2 + v2.length, h2.selectionEnd = w2 + v2.length, h2.scrollTop = F;
  }, q = (v2) => {
    const h2 = v2.key;
    (v2.ctrlKey || v2.metaKey) && h2 === "Enter" && Ce();
  }, z = (v2) => {
    const h2 = `![${s2.value.locale.uploading} ${v2.name}]()`;
    return N(h2), Y.value = true, Promise.resolve().then(() => s2.value.imageUploader(v2)).then((w2) => {
      r2.value = r2.value.replace(h2, `\r
![${v2.name}](${w2})`);
    }).catch((w2) => {
      alert(w2.message), r2.value = r2.value.replace(h2, "");
    }).then(() => {
      Y.value = false;
    });
  }, D = (v2) => {
    var h2;
    if ((h2 = v2.dataTransfer) != null && h2.items) {
      const w2 = dt(v2.dataTransfer.items);
      w2 && R2.value && (z(w2), v2.preventDefault());
    }
  }, B = (v2) => {
    if (v2.clipboardData) {
      const h2 = dt(v2.clipboardData.items);
      h2 && R2.value && z(h2);
    }
  }, me = () => {
    const v2 = b.value;
    v2.files && R2.value && z(v2.files[0]).then(() => {
      v2.value = "";
    });
  }, Ce = async () => {
    var v2, h2, w2, j2, F, ae;
    const { serverURL: K, lang: Q, login: ge, wordLimit: He, requiredMeta: Pe, recaptchaV3Key: Ne, turnstileKey: We } = s2.value, Rt = await jn(), U2 = { comment: ue.value, nick: u2.value.nick, mail: u2.value.mail, link: u2.value.link, url: s2.value.path, ua: Rt };
    if (!e2.edit) if ((v2 = l.value) != null && v2.token) U2.nick = l.value.display_name, U2.mail = l.value.email, U2.link = l.value.url;
    else {
      if (ge === "force") return;
      if (Pe.indexOf("nick") > -1 && !U2.nick) return (h2 = a.value.nick) == null || h2.focus(), alert(J.value.nickError);
      if (Pe.indexOf("mail") > -1 && !U2.mail || U2.mail && !bn(U2.mail)) return (w2 = a.value.mail) == null || w2.focus(), alert(J.value.mailError);
      U2.nick || (U2.nick = J.value.anonymous);
    }
    if (!U2.comment) {
      (j2 = g.value) == null || j2.focus();
      return;
    }
    if (!X.value) return alert(J.value.wordHint.replace("$0", He[0].toString()).replace("$1", He[1].toString()).replace("$2", oe.value.toString()));
    U2.comment = vt(U2.comment, L.value.map), e2.replyId && e2.rootId && (U2.pid = e2.replyId, U2.rid = e2.rootId, U2.at = e2.replyUser), Y.value = true;
    try {
      Ne && (U2.recaptchaV3 = await Xn(Ne).execute("social")), We && (U2.turnstile = await Yn(We).execute("social"));
      const he = { serverURL: K, lang: Q, token: (F = l.value) == null ? void 0 : F.token, comment: U2 }, Le = await (e2.edit ? U({ objectId: e2.edit.objectId, ...he }) : u(he));
      if (Y.value = false, Le.errmsg) return alert(Le.errmsg);
      i("submit", Le.data), r2.value = "", ce.value = "", await nextTick(), e2.replyId && i("cancelReply"), (ae = e2.edit) != null && ae.objectId && i("cancelEdit");
    } catch (he) {
      Y.value = false, alert(he.message);
    }
  }, Ie = (v2) => {
    v2.preventDefault();
    const { lang: h2, serverURL: w2 } = s2.value;
    R({ serverURL: w2, lang: h2 }).then((j2) => {
      l.value = j2, (j2.remember ? localStorage : sessionStorage).setItem("WALINE_USER", JSON.stringify(j2)), i("log");
    });
  }, It = () => {
    l.value = {}, localStorage.setItem("WALINE_USER", "null"), sessionStorage.setItem("WALINE_USER", "null"), i("log");
  }, Lt = (v2) => {
    v2.preventDefault();
    const { lang: h2, serverURL: w2 } = s2.value, j2 = 800, F = 800, ae = (window.innerWidth - j2) / 2, K = (window.innerHeight - F) / 2, Q = new URLSearchParams({ lng: h2, token: l.value.token }), ge = window.open(`${w2}/ui/profile?${Q.toString()}`, "_blank", `width=${j2},height=${F},left=${ae},top=${K},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);
    ge == null || ge.postMessage({ type: "TOKEN", data: l.value.token }, "*");
  }, ze = (v2) => {
    var h2, w2, j2, F;
    !((h2 = A.value) != null && h2.contains(v2.target)) && !((w2 = f2.value) != null && w2.contains(v2.target)) && (x.value = false), !((j2 = S.value) != null && j2.contains(v2.target)) && !((F = E.value) != null && F.contains(v2.target)) && (G.value = false);
  }, Ve = async (v2) => {
    var h2;
    const { scrollTop: w2, clientHeight: j2, scrollHeight: F } = v2.target, ae = (j2 + w2) / F, K = s2.value.search, Q = ((h2 = _.value) == null ? void 0 : h2.value) ?? "";
    ae < 0.9 || H.loading || le.value || (H.loading = true, (K.more && H.list.length ? await K.more(Q, H.list.length) : await K.search(Q)).length ? H.list = [...H.list, ...K.more && H.list.length ? await K.more(Q, H.list.length) : await K.search(Q)] : le.value = true, H.loading = false, setTimeout(() => {
      v2.target.scrollTop = w2;
    }, 50));
  }, Et = useDebounceFn((v2) => {
    H.list = [], le.value = false, Ve(v2);
  }, 300);
  watch([s2, oe], ([v2, h2]) => {
    const { wordLimit: w2 } = v2;
    w2 ? h2 < w2[0] && w2[0] !== 0 ? (ne.value = w2[0], X.value = false) : h2 > w2[1] ? (ne.value = w2[1], X.value = false) : (ne.value = w2[1], X.value = true) : (ne.value = 0, X.value = true);
  }, { immediate: true }), useEventListener("click", ze), useEventListener("message", ({ data: v2 }) => {
    !v2 || v2.type !== "profile" || (l.value = { ...l.value, ...v2.data }, [localStorage, sessionStorage].filter((h2) => h2.getItem("WALINE_USER")).forEach((h2) => h2.setItem("WALINE_USER", JSON.stringify(l))));
  }), watch(G, async (v2) => {
    var h2;
    if (!v2) return;
    const w2 = s2.value.search;
    _.value && (_.value.value = ""), H.loading = true, H.list = await (((h2 = w2.default) == null ? void 0 : h2.call(w2)) ?? w2.search("")), H.loading = false;
  }), onMounted(() => {
    var v2;
    (v2 = e2.edit) != null && v2.objectId && (r2.value = e2.edit.orig), watch(() => r2.value, (h2) => {
      const { highlighter: w2, texRenderer: j2 } = s2.value;
      ue.value = h2, ce.value = Sn(h2, { emojiMap: L.value.map, highlighter: w2, texRenderer: j2 }), oe.value = Mn(h2), h2 ? autosize_esm_default(g.value) : autosize_esm_default.destroy(g.value);
    }, { immediate: true }), watch(() => s2.value.emoji, (h2) => _n(h2).then((w2) => {
      L.value = w2;
    }), { immediate: true });
  });
  const Te = { props: e2, emit: i, config: s2, editor: r2, userMeta: u2, userInfo: l, inputRefs: a, editorRef: g, imageUploadRef: b, emojiButtonRef: A, emojiPopupRef: f2, gifButtonRef: S, gifPopupRef: E, gifSearchInputRef: _, emoji: L, emojiTabIndex: M, showEmoji: x, showGif: G, showPreview: se, previewText: ce, wordNumber: oe, searchResults: H, wordLimit: ne, isWordNumberLegal: X, content: ue, isSubmitting: Y, isImageListEnd: le, locale: J, isLogin: y2, canUploadImage: R2, insert: N, onKeyDown: q, uploadImage: z, onDrop: D, onPaste: B, onChange: me, submitComment: Ce, onLogin: Ie, onLogout: It, onProfile: Lt, popupHandler: ze, onImageWallScroll: Ve, onGifSearch: Et, get CloseIcon() {
    return Un;
  }, get EmojiIcon() {
    return Vn;
  }, get GifIcon() {
    return Fn;
  }, get ImageIcon() {
    return Tn;
  }, get LoadingIcon() {
    return pe;
  }, get MarkdownIcon() {
    return Nn;
  }, get PreviewIcon() {
    return Pn;
  }, ImageWall: go };
  return Object.defineProperty(Te, "__isScriptSetup", { enumerable: false, value: true }), Te;
} });
var fo = { key: 0, class: "wl-login-info" };
var wo = { class: "wl-avatar" };
var yo = ["title"];
var bo = ["title"];
var ko = ["src"];
var po = ["title", "textContent"];
var _o = { class: "wl-panel" };
var Co = ["for", "textContent"];
var Io = ["id", "onUpdate:modelValue", "name", "type"];
var Lo = ["placeholder"];
var Eo = { class: "wl-preview" };
var Ro = createBaseVNode("hr", null, null, -1);
var So = ["innerHTML"];
var xo = { class: "wl-footer" };
var Ao = { class: "wl-actions" };
var Mo = { href: "https://guides.github.com/features/mastering-markdown/", title: "Markdown Guide", "aria-label": "Markdown is supported", class: "wl-action", target: "_blank", rel: "noopener noreferrer" };
var jo = ["title"];
var Uo = ["title"];
var zo = ["title"];
var Vo = ["title"];
var To = { class: "wl-info" };
var Ho = createBaseVNode("div", { class: "wl-captcha-container" }, null, -1);
var Po = { class: "wl-text-number" };
var No = { key: 0 };
var Wo = ["textContent"];
var Bo = ["textContent"];
var Do = ["disabled"];
var Fo = ["placeholder"];
var Oo = { key: 1, class: "wl-loading" };
var Go = { key: 0, class: "wl-tab-wrapper" };
var qo = ["title", "onClick"];
var Ko = ["src", "alt"];
var Zo = { key: 0, class: "wl-tabs" };
var Xo = ["onClick"];
var Yo = ["src", "alt", "title"];
var Jo = ["title"];
function Qo(n2, o2, t2, e2, i, s2) {
  var r2, u2;
  return openBlock(), createElementBlock("div", { key: e2.userInfo.token, class: "wl-comment" }, [e2.config.login !== "disable" && e2.isLogin && !((r2 = t2.edit) != null && r2.objectId) ? (openBlock(), createElementBlock("div", fo, [createBaseVNode("div", wo, [createBaseVNode("button", { type: "submit", class: "wl-logout-btn", title: e2.locale.logout, onClick: e2.onLogout }, [createVNode(e2.CloseIcon, { size: 14 })], 8, yo), createBaseVNode("a", { href: "#", class: "wl-login-nick", "aria-label": "Profile", title: e2.locale.profile, onClick: e2.onProfile }, [createBaseVNode("img", { src: e2.userInfo.avatar, alt: "avatar" }, null, 8, ko)], 8, bo)]), createBaseVNode("a", { href: "#", class: "wl-login-nick", "aria-label": "Profile", title: e2.locale.profile, onClick: e2.onProfile, textContent: toDisplayString(e2.userInfo.display_name) }, null, 8, po)])) : createCommentVNode("v-if", true), createBaseVNode("div", _o, [e2.config.login !== "force" && e2.config.meta.length && !e2.isLogin ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(["wl-header", `item${e2.config.meta.length}`]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.config.meta, (l) => (openBlock(), createElementBlock("div", { key: l, class: "wl-header-item" }, [createBaseVNode("label", { for: `wl-${l}`, textContent: toDisplayString(e2.locale[l] + (e2.config.requiredMeta.includes(l) || !e2.config.requiredMeta.length ? "" : `(${e2.locale.optional})`)) }, null, 8, Co), withDirectives(createBaseVNode("input", { id: `wl-${l}`, ref_for: true, ref: (a) => {
    a && (e2.inputRefs[l] = a);
  }, "onUpdate:modelValue": (a) => e2.userMeta[l] = a, class: normalizeClass(["wl-input", `wl-${l}`]), name: l, type: l === "mail" ? "email" : "text" }, null, 10, Io), [[vModelDynamic, e2.userMeta[l]]])]))), 128))], 2)) : createCommentVNode("v-if", true), withDirectives(createBaseVNode("textarea", { id: "wl-edit", ref: "editorRef", "onUpdate:modelValue": o2[0] || (o2[0] = (l) => e2.editor = l), class: "wl-editor", placeholder: t2.replyUser ? `@${t2.replyUser}` : e2.locale.placeholder, onKeydown: e2.onKeyDown, onDrop: e2.onDrop, onPaste: e2.onPaste }, null, 40, Lo), [[vModelText, e2.editor]]), withDirectives(createBaseVNode("div", Eo, [Ro, createBaseVNode("h4", null, toDisplayString(e2.locale.preview) + ":", 1), createBaseVNode("div", { class: "wl-content", innerHTML: e2.previewText }, null, 8, So)], 512), [[vShow, e2.showPreview]]), createBaseVNode("div", xo, [createBaseVNode("div", Ao, [createBaseVNode("a", Mo, [createVNode(e2.MarkdownIcon)]), withDirectives(createBaseVNode("button", { ref: "emojiButtonRef", type: "button", class: normalizeClass(["wl-action", { active: e2.showEmoji }]), title: e2.locale.emoji, onClick: o2[1] || (o2[1] = (l) => e2.showEmoji = !e2.showEmoji) }, [createVNode(e2.EmojiIcon)], 10, jo), [[vShow, e2.emoji.tabs.length]]), e2.config.search ? (openBlock(), createElementBlock("button", { key: 0, ref: "gifButtonRef", type: "button", class: normalizeClass(["wl-action", { active: e2.showGif }]), title: e2.locale.gif, onClick: o2[2] || (o2[2] = (l) => e2.showGif = !e2.showGif) }, [createVNode(e2.GifIcon)], 10, Uo)) : createCommentVNode("v-if", true), createBaseVNode("input", { id: "wl-image-upload", ref: "imageUploadRef", class: "upload", type: "file", accept: ".png,.jpg,.jpeg,.webp,.bmp,.gif", onChange: e2.onChange }, null, 544), e2.canUploadImage ? (openBlock(), createElementBlock("label", { key: 1, for: "wl-image-upload", class: "wl-action", title: e2.locale.uploadImage }, [createVNode(e2.ImageIcon)], 8, zo)) : createCommentVNode("v-if", true), createBaseVNode("button", { type: "button", class: normalizeClass(["wl-action", { active: e2.showPreview }]), title: e2.locale.preview, onClick: o2[3] || (o2[3] = (l) => e2.showPreview = !e2.showPreview) }, [createVNode(e2.PreviewIcon)], 10, Vo)]), createBaseVNode("div", To, [Ho, createBaseVNode("div", Po, [createTextVNode(toDisplayString(e2.wordNumber) + " ", 1), e2.config.wordLimit ? (openBlock(), createElementBlock("span", No, [createTextVNode("  /  "), createBaseVNode("span", { class: normalizeClass({ illegal: !e2.isWordNumberLegal }), textContent: toDisplayString(e2.wordLimit) }, null, 10, Wo)])) : createCommentVNode("v-if", true), createTextVNode("  " + toDisplayString(e2.locale.word), 1)]), e2.config.login !== "disable" && !e2.isLogin ? (openBlock(), createElementBlock("button", { key: 0, type: "button", class: "wl-btn", onClick: e2.onLogin, textContent: toDisplayString(e2.locale.login) }, null, 8, Bo)) : createCommentVNode("v-if", true), e2.config.login !== "force" || e2.isLogin ? (openBlock(), createElementBlock("button", { key: 1, type: "submit", class: "primary wl-btn", title: "Cmd|Ctrl + Enter", disabled: e2.isSubmitting, onClick: e2.submitComment }, [e2.isSubmitting ? (openBlock(), createBlock(e2.LoadingIcon, { key: 0, size: 16 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(e2.locale.submit), 1)], 64))], 8, Do)) : createCommentVNode("v-if", true)]), createBaseVNode("div", { ref: "gifPopupRef", class: normalizeClass(["wl-gif-popup", { display: e2.showGif }]) }, [createBaseVNode("input", { ref: "gifSearchInputRef", type: "text", placeholder: e2.locale.gifSearchPlaceholder, onInput: o2[4] || (o2[4] = (...l) => e2.onGifSearch && e2.onGifSearch(...l)) }, null, 40, Fo), e2.searchResults.list.length ? (openBlock(), createBlock(e2.ImageWall, { key: 0, items: e2.searchResults.list, "column-width": 200, gap: 6, onInsert: o2[5] || (o2[5] = (l) => e2.insert(l)), onScroll: e2.onImageWallScroll }, null, 8, ["items"])) : createCommentVNode("v-if", true), e2.searchResults.loading ? (openBlock(), createElementBlock("div", Oo, [createVNode(e2.LoadingIcon, { size: 30 })])) : createCommentVNode("v-if", true)], 2), createBaseVNode("div", { ref: "emojiPopupRef", class: normalizeClass(["wl-emoji-popup", { display: e2.showEmoji }]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.emoji.tabs, (l, a) => (openBlock(), createElementBlock(Fragment, { key: l.name }, [a === e2.emojiTabIndex ? (openBlock(), createElementBlock("div", Go, [(openBlock(true), createElementBlock(Fragment, null, renderList(l.items, (g) => (openBlock(), createElementBlock("button", { key: g, type: "button", title: g, onClick: (b) => e2.insert(`:${g}:`) }, [e2.showEmoji ? (openBlock(), createElementBlock("img", { key: 0, class: "wl-emoji", src: e2.emoji.map[g], alt: g, loading: "lazy", referrerPolicy: "no-referrer" }, null, 8, Ko)) : createCommentVNode("v-if", true)], 8, qo))), 128))])) : createCommentVNode("v-if", true)], 64))), 128)), e2.emoji.tabs.length > 1 ? (openBlock(), createElementBlock("div", Zo, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.emoji.tabs, (l, a) => (openBlock(), createElementBlock("button", { key: l.name, type: "button", class: normalizeClass(["wl-tab", { active: e2.emojiTabIndex === a }]), onClick: (g) => e2.emojiTabIndex = a }, [createBaseVNode("img", { class: "wl-emoji", src: l.icon, alt: l.name, title: l.name, loading: "lazy", referrerPolicy: "no-referrer" }, null, 8, Yo)], 10, Xo))), 128))])) : createCommentVNode("v-if", true)], 2)])]), t2.replyId || (u2 = t2.edit) != null && u2.objectId ? (openBlock(), createElementBlock("button", { key: 1, type: "button", class: "wl-close", title: e2.locale.cancelReply, onClick: o2[6] || (o2[6] = (l) => t2.replyId ? e2.emit("cancelReply") : e2.emit("cancelEdit")) }, [createVNode(e2.CloseIcon, { size: 24 })], 8, Jo)) : createCommentVNode("v-if", true)]);
}
var kt = ve(ho, [["render", Qo], ["__file", "CommentBox.vue"]]);
var $o = defineComponent({ __name: "CommentCard", props: { comment: {}, edit: { default: null }, rootId: {}, reply: { default: null } }, emits: ["log", "submit", "delete", "edit", "like", "status", "sticky", "reply"], setup(n2, { expose: o2, emit: t2 }) {
  o2();
  const e2 = n2, i = t2, s2 = ["approved", "waiting", "spam"], r2 = inject("config"), u2 = ft(), l = useNow(), a = _e(), g = computed(() => r2.value.locale), b = computed(() => {
    const { link: x } = e2.comment;
    return x ? ct(x) ? x : `https://${x}` : "";
  }), A = computed(() => u2.value.includes(e2.comment.objectId)), f2 = computed(() => wn(new Date(e2.comment.time), l.value, g.value)), S = computed(() => a.value.type === "administrator"), E = computed(() => e2.comment.user_id && a.value.objectId === e2.comment.user_id), _ = computed(() => {
    var x;
    return e2.comment.objectId === ((x = e2.reply) == null ? void 0 : x.objectId);
  }), L = computed(() => {
    var x;
    return e2.comment.objectId === ((x = e2.edit) == null ? void 0 : x.objectId);
  }), M = { props: e2, emit: i, commentStatus: s2, config: r2, likes: u2, now: l, userInfo: a, locale: g, link: b, like: A, time: f2, isAdmin: S, isOwner: E, isReplyingCurrent: _, isEditingCurrent: L, CommentBox: kt, get DeleteIcon() {
    return zn;
  }, get EditIcon() {
    return Bn;
  }, get LikeIcon() {
    return Hn;
  }, get ReplyIcon() {
    return Wn;
  }, get VerifiedIcon() {
    return Dn;
  } };
  return Object.defineProperty(M, "__isScriptSetup", { enumerable: false, value: true }), M;
} });
var el = ["id"];
var tl = { class: "wl-user", "aria-hidden": "true" };
var nl = ["src"];
var ol = { class: "wl-card" };
var ll = { class: "wl-head" };
var al = ["href"];
var il = { key: 1, class: "wl-nick" };
var rl = ["textContent"];
var sl = ["textContent"];
var cl = ["textContent"];
var ul = ["textContent"];
var ml = ["textContent"];
var dl = { class: "wl-comment-actions" };
var vl = ["title"];
var gl = ["title"];
var hl = { class: "wl-meta", "aria-hidden": "true" };
var fl = ["data-value", "textContent"];
var wl = { key: 0, class: "wl-content" };
var yl = { key: 0 };
var bl = ["href"];
var kl = createBaseVNode("span", null, ": ", -1);
var pl = ["innerHTML"];
var _l = { key: 1, class: "wl-admin-actions" };
var Cl = { class: "wl-comment-status" };
var Il = ["disabled", "onClick", "textContent"];
var Ll = { key: 3, class: "wl-quote" };
function El(n2, o2, t2, e2, i, s2) {
  var u2;
  const r2 = resolveComponent("CommentCard", true);
  return openBlock(), createElementBlock("div", { id: t2.comment.objectId, class: "wl-card-item" }, [createBaseVNode("div", tl, [t2.comment.avatar ? (openBlock(), createElementBlock("img", { key: 0, class: "wl-user-avatar", src: t2.comment.avatar }, null, 8, nl)) : createCommentVNode("v-if", true), t2.comment.type ? (openBlock(), createBlock(e2.VerifiedIcon, { key: 1 })) : createCommentVNode("v-if", true)]), createBaseVNode("div", ol, [createBaseVNode("div", ll, [e2.link ? (openBlock(), createElementBlock("a", { key: 0, class: "wl-nick", href: e2.link, target: "_blank", rel: "nofollow noopener noreferrer" }, toDisplayString(t2.comment.nick), 9, al)) : (openBlock(), createElementBlock("span", il, toDisplayString(t2.comment.nick), 1)), t2.comment.type === "administrator" ? (openBlock(), createElementBlock("span", { key: 2, class: "wl-badge", textContent: toDisplayString(e2.locale.admin) }, null, 8, rl)) : createCommentVNode("v-if", true), t2.comment.label ? (openBlock(), createElementBlock("span", { key: 3, class: "wl-badge", textContent: toDisplayString(t2.comment.label) }, null, 8, sl)) : createCommentVNode("v-if", true), t2.comment.sticky ? (openBlock(), createElementBlock("span", { key: 4, class: "wl-badge", textContent: toDisplayString(e2.locale.sticky) }, null, 8, cl)) : createCommentVNode("v-if", true), typeof t2.comment.level == "number" ? (openBlock(), createElementBlock("span", { key: 5, class: normalizeClass(`wl-badge level${t2.comment.level}`), textContent: toDisplayString(e2.locale[`level${t2.comment.level}`] || `Level ${t2.comment.level}`) }, null, 10, ul)) : createCommentVNode("v-if", true), createBaseVNode("span", { class: "wl-time", textContent: toDisplayString(e2.time) }, null, 8, ml), createBaseVNode("div", dl, [e2.isAdmin || e2.isOwner ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("button", { type: "button", class: "wl-edit", onClick: o2[0] || (o2[0] = (l) => e2.emit("edit", t2.comment)) }, [createVNode(e2.EditIcon)]), createBaseVNode("button", { type: "button", class: "wl-delete", onClick: o2[1] || (o2[1] = (l) => e2.emit("delete", t2.comment)) }, [createVNode(e2.DeleteIcon)])], 64)) : createCommentVNode("v-if", true), createBaseVNode("button", { type: "button", class: "wl-like", title: e2.like ? e2.locale.cancelLike : e2.locale.like, onClick: o2[2] || (o2[2] = (l) => e2.emit("like", t2.comment)) }, [createVNode(e2.LikeIcon, { active: e2.like }, null, 8, ["active"]), createTextVNode(" " + toDisplayString("like" in t2.comment ? t2.comment.like : ""), 1)], 8, vl), createBaseVNode("button", { type: "button", class: normalizeClass(["wl-reply", { active: e2.isReplyingCurrent }]), title: e2.isReplyingCurrent ? e2.locale.cancelReply : e2.locale.reply, onClick: o2[3] || (o2[3] = (l) => e2.emit("reply", e2.isReplyingCurrent ? null : t2.comment)) }, [createVNode(e2.ReplyIcon)], 10, gl)])]), createBaseVNode("div", hl, [(openBlock(), createElementBlock(Fragment, null, renderList(["addr", "browser", "os"], (l) => (openBlock(), createElementBlock(Fragment, null, [t2.comment[l] ? (openBlock(), createElementBlock("span", { key: l, class: normalizeClass(`wl-${l}`), "data-value": t2.comment[l], textContent: toDisplayString(t2.comment[l]) }, null, 10, fl)) : createCommentVNode("v-if", true)], 64))), 64))]), e2.isEditingCurrent ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock("div", wl, [t2.comment.reply_user ? (openBlock(), createElementBlock("p", yl, [createBaseVNode("a", { href: "#" + t2.comment.pid }, "@" + toDisplayString(t2.comment.reply_user.nick), 9, bl), kl])) : createCommentVNode("v-if", true), createBaseVNode("div", { innerHTML: t2.comment.comment }, null, 8, pl)])), e2.isAdmin && !e2.isEditingCurrent ? (openBlock(), createElementBlock("div", _l, [createBaseVNode("span", Cl, [(openBlock(), createElementBlock(Fragment, null, renderList(e2.commentStatus, (l) => createBaseVNode("button", { key: l, type: "submit", class: normalizeClass(`wl-btn wl-${l}`), disabled: t2.comment.status === l, onClick: (a) => e2.emit("status", { status: l, comment: t2.comment }), textContent: toDisplayString(e2.locale[l]) }, null, 10, Il)), 64))]), e2.isAdmin && !("rid" in t2.comment) ? (openBlock(), createElementBlock("button", { key: 0, type: "submit", class: "wl-btn wl-sticky", onClick: o2[4] || (o2[4] = (l) => e2.emit("sticky", t2.comment)) }, toDisplayString(t2.comment.sticky ? e2.locale.unsticky : e2.locale.sticky), 1)) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), e2.isReplyingCurrent || e2.isEditingCurrent ? (openBlock(), createElementBlock("div", { key: 2, class: normalizeClass({ "wl-reply-wrapper": e2.isReplyingCurrent, "wl-edit-wrapper": e2.isEditingCurrent }) }, [createVNode(e2.CommentBox, { edit: t2.edit, "reply-id": (u2 = t2.reply) == null ? void 0 : u2.objectId, "reply-user": t2.comment.nick, "root-id": t2.rootId, onLog: o2[5] || (o2[5] = (l) => e2.emit("log")), onCancelReply: o2[6] || (o2[6] = (l) => e2.emit("reply", null)), onCancelEdit: o2[7] || (o2[7] = (l) => e2.emit("edit", null)), onSubmit: o2[8] || (o2[8] = (l) => e2.emit("submit", l)) }, null, 8, ["edit", "reply-id", "reply-user", "root-id"])], 2)) : createCommentVNode("v-if", true), "children" in t2.comment ? (openBlock(), createElementBlock("div", Ll, [(openBlock(true), createElementBlock(Fragment, null, renderList(t2.comment.children, (l) => (openBlock(), createBlock(r2, { key: l.objectId, comment: l, reply: t2.reply, edit: t2.edit, "root-id": t2.rootId, onLog: o2[9] || (o2[9] = (a) => e2.emit("log")), onDelete: o2[10] || (o2[10] = (a) => e2.emit("delete", a)), onEdit: o2[11] || (o2[11] = (a) => e2.emit("edit", a)), onLike: o2[12] || (o2[12] = (a) => e2.emit("like", a)), onReply: o2[13] || (o2[13] = (a) => e2.emit("reply", a)), onStatus: o2[14] || (o2[14] = (a) => e2.emit("status", a)), onSticky: o2[15] || (o2[15] = (a) => e2.emit("sticky", a)), onSubmit: o2[16] || (o2[16] = (a) => e2.emit("submit", a)) }, null, 8, ["comment", "reply", "edit", "root-id"]))), 128))])) : createCommentVNode("v-if", true)])], 8, el);
}
var Rl = ve($o, [["render", El], ["__file", "CommentCard.vue"]]);
var pt = "3.3.0";
var Sl = defineComponent({ __name: "WalineComment", props: ["serverURL", "path", "meta", "requiredMeta", "dark", "commentSorting", "lang", "locale", "pageSize", "wordLimit", "emoji", "login", "highlighter", "texRenderer", "imageUploader", "search", "copyright", "recaptchaV3Key", "turnstileKey", "reaction"], setup(n2, { expose: o2 }) {
  o2();
  const t2 = n2, e2 = { latest: "insertedAt_desc", oldest: "insertedAt_asc", hottest: "like_desc" }, i = Object.keys(e2), s2 = _e(), r2 = ft(), u2 = ref("loading"), l = ref(0), a = ref(1), g = ref(0), b = computed(() => gn(t2)), A = ref(b.value.commentSorting), f2 = ref([]), S = ref(null), E = ref(null), _ = computed(() => hn(b.value.dark)), L = computed(() => b.value.locale);
  useStyleTag(_, { id: "waline-darkmode" });
  let M;
  const x = (y2) => {
    var R2;
    const { serverURL: N, path: q, pageSize: z } = b.value, D = new AbortController();
    u2.value = "loading", M == null || M(), $({ serverURL: N, lang: b.value.lang, path: q, pageSize: z, sortBy: e2[A.value], page: y2, signal: D.signal, token: (R2 = s2.value) == null ? void 0 : R2.token }).then((B) => {
      u2.value = "success", l.value = B.count, f2.value.push(...B.data), a.value = y2, g.value = B.totalPages;
    }).catch((B) => {
      B.name !== "AbortError" && (console.error(B.message), u2.value = "error");
    }), M = D.abort.bind(D);
  }, G = () => x(a.value + 1), se = () => {
    l.value = 0, f2.value = [], x(1);
  }, ce = (y2) => {
    A.value !== y2 && (A.value = y2, se());
  }, oe = (y2) => {
    S.value = y2;
  }, H = (y2) => {
    E.value = y2;
  }, ne = (y2) => {
    if (E.value) E.value.comment = y2.comment, E.value.orig = y2.orig;
    else if ("rid" in y2) {
      const R2 = f2.value.find(({ objectId: N }) => N === y2.rid);
      if (!R2) return;
      Array.isArray(R2.children) || (R2.children = []), R2.children.push(y2);
    } else f2.value.unshift(y2), l.value += 1;
  }, X = async ({ comment: y2, status: R2 }) => {
    var N;
    if (y2.status === R2) return;
    const { serverURL: q, lang: z } = b.value;
    await U({ serverURL: q, lang: z, token: (N = s2.value) == null ? void 0 : N.token, objectId: y2.objectId, comment: { status: R2 } }), y2.status = R2;
  }, ue = async (y2) => {
    var R2;
    if ("rid" in y2) return;
    const { serverURL: N, lang: q } = b.value;
    await U({ serverURL: N, lang: q, token: (R2 = s2.value) == null ? void 0 : R2.token, objectId: y2.objectId, comment: { sticky: y2.sticky ? 0 : 1 } }), y2.sticky = !y2.sticky;
  }, Y = async ({ objectId: y2 }) => {
    var R2;
    if (!confirm("Are you sure you want to delete this comment?")) return;
    const { serverURL: N, lang: q } = b.value;
    await y({ serverURL: N, lang: q, token: (R2 = s2.value) == null ? void 0 : R2.token, objectId: y2 }), f2.value.some((z, D) => z.objectId === y2 ? (f2.value = f2.value.filter((B, me) => me !== D), true) : z.children.some((B, me) => B.objectId === y2 ? (f2.value[D].children = z.children.filter((Ce, Ie) => Ie !== me), true) : false));
  }, le = async (y2) => {
    var R2;
    const { serverURL: N, lang: q } = b.value, { objectId: z } = y2, D = r2.value.includes(z);
    await U({ serverURL: N, lang: q, objectId: z, token: (R2 = s2.value) == null ? void 0 : R2.token, comment: { like: !D } }), D ? r2.value = r2.value.filter((B) => B !== z) : (r2.value = [...r2.value, z], r2.value.length > 50 && (r2.value = r2.value.slice(-50))), y2.like = (y2.like || 0) + (D ? -1 : 1);
  };
  provide("config", b), onMounted(() => {
    watch(() => [t2.serverURL, t2.path], () => se(), { immediate: true });
  }), onUnmounted(() => M == null ? void 0 : M());
  const J = { props: t2, sortKeyMap: e2, sortingMethods: i, userInfo: s2, likeStorage: r2, status: u2, count: l, page: a, totalPages: g, config: b, commentSortingRef: A, data: f2, reply: S, edit: E, darkmodeStyle: _, i18n: L, get abort() {
    return M;
  }, set abort(y2) {
    M = y2;
  }, getCommentData: x, loadMore: G, refresh: se, onSortByChange: ce, onReply: oe, onEdit: H, onSubmit: ne, onStatusChange: X, onSticky: ue, onDelete: Y, onLike: le, Reaction: so, CommentBox: kt, CommentCard: Rl, get LoadingIcon() {
    return pe;
  }, get version() {
    return pt;
  } };
  return Object.defineProperty(J, "__isScriptSetup", { enumerable: false, value: true }), J;
} });
var xl = { "data-waline": "" };
var Al = { class: "wl-meta-head" };
var Ml = { class: "wl-count" };
var jl = ["textContent"];
var Ul = { class: "wl-sort" };
var zl = ["onClick"];
var Vl = { class: "wl-cards" };
var Tl = { key: 1, class: "wl-operation" };
var Hl = ["textContent"];
var Pl = { key: 2, class: "wl-loading" };
var Nl = ["textContent"];
var Wl = { key: 4, class: "wl-operation" };
var Bl = ["textContent"];
var Dl = { key: 5, class: "wl-power" };
var Fl = createBaseVNode("a", { href: "https://github.com/walinejs/waline", target: "_blank", rel: "noopener noreferrer" }, " Waline ", -1);
function Ol(n2, o2, t2, e2, i, s2) {
  return openBlock(), createElementBlock("div", xl, [createVNode(e2.Reaction), !e2.reply && !e2.edit ? (openBlock(), createBlock(e2.CommentBox, { key: 0, onLog: e2.refresh, onSubmit: e2.onSubmit })) : createCommentVNode("v-if", true), createBaseVNode("div", Al, [createBaseVNode("div", Ml, [e2.count ? (openBlock(), createElementBlock("span", { key: 0, class: "wl-num", textContent: toDisplayString(e2.count) }, null, 8, jl)) : createCommentVNode("v-if", true), createTextVNode(" " + toDisplayString(e2.i18n.comment), 1)]), createBaseVNode("ul", Ul, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.sortingMethods, (r2) => (openBlock(), createElementBlock("li", { key: r2, class: normalizeClass([r2 === e2.commentSortingRef ? "active" : ""]), onClick: (u2) => e2.onSortByChange(r2) }, toDisplayString(e2.i18n[r2]), 11, zl))), 128))])]), createBaseVNode("div", Vl, [(openBlock(true), createElementBlock(Fragment, null, renderList(e2.data, (r2) => (openBlock(), createBlock(e2.CommentCard, { key: r2.objectId, "root-id": r2.objectId, comment: r2, reply: e2.reply, edit: e2.edit, onLog: e2.refresh, onReply: e2.onReply, onEdit: e2.onEdit, onSubmit: e2.onSubmit, onStatus: e2.onStatusChange, onDelete: e2.onDelete, onSticky: e2.onSticky, onLike: e2.onLike }, null, 8, ["root-id", "comment", "reply", "edit"]))), 128))]), e2.status === "error" ? (openBlock(), createElementBlock("div", Tl, [createBaseVNode("button", { type: "button", class: "wl-btn", onClick: e2.refresh, textContent: toDisplayString(e2.i18n.refresh) }, null, 8, Hl)])) : e2.status === "loading" ? (openBlock(), createElementBlock("div", Pl, [createVNode(e2.LoadingIcon, { size: 30 })])) : e2.data.length ? e2.page < e2.totalPages ? (openBlock(), createElementBlock("div", Wl, [createBaseVNode("button", { type: "button", class: "wl-btn", onClick: e2.loadMore, textContent: toDisplayString(e2.i18n.more) }, null, 8, Bl)])) : createCommentVNode("v-if", true) : (openBlock(), createElementBlock("div", { key: 3, class: "wl-empty", textContent: toDisplayString(e2.i18n.sofa) }, null, 8, Nl)), e2.config.copyright ? (openBlock(), createElementBlock("div", Dl, [createTextVNode(" Powered by "), Fl, createTextVNode(" v" + toDisplayString(e2.version), 1)])) : createCommentVNode("v-if", true)]);
}
var Gl = ve(Sl, [["render", Ol], ["__file", "WalineComment.vue"]]);
var _t = (n2, o2) => {
  o2.forEach((t2, e2) => {
    const i = n2[e2].time;
    typeof i == "number" && (t2.innerText = i.toString());
  });
};
var Ct = ({ serverURL: n2, path: o2 = window.location.pathname, selector: t2 = ".waline-pageview-count", update: e2 = true, lang: i = navigator.language }) => {
  const s2 = new AbortController(), r2 = Array.from(document.querySelectorAll(t2)), u2 = (a) => {
    const g = Ue(a);
    return g !== null && o2 !== g;
  }, l = (a) => j({ serverURL: ke(n2), paths: a.map((g) => Ue(g) ?? o2), lang: i, signal: s2.signal }).then((g) => _t(g, a)).catch(mt);
  if (e2) {
    const a = r2.filter((b) => !u2(b)), g = r2.filter(u2);
    v({ serverURL: ke(n2), path: o2, lang: i }).then((b) => _t(b, a)), g.length && l(g);
  } else l(r2);
  return s2.abort.bind(s2);
};
var ql = ({ el: n2 = "#waline", path: o2 = window.location.pathname, comment: t2 = false, pageview: e2 = false, ...i }) => {
  const s2 = n2 ? je(n2) : null;
  if (n2 && !s2) throw new Error("Option 'el' do not match any domElement!");
  if (!i.serverURL) throw new Error("Option 'serverURL' is missing!");
  const r2 = reactive({ ...i }), u2 = reactive({ comment: t2, pageview: e2, path: o2 }), l = () => {
    u2.comment && gt({ serverURL: r2.serverURL, path: u2.path, ...re(u2.comment) ? { selector: u2.comment } : {} });
  }, a = () => {
    u2.pageview && Ct({ serverURL: r2.serverURL, path: u2.path, ...re(u2.pageview) ? { selector: u2.pageview } : {} });
  }, g = s2 ? createApp(() => h(Gl, { path: u2.path, ...r2 })) : null;
  g && g.mount(s2);
  const b = watchEffect(l), A = watchEffect(a);
  return { el: s2, update: ({ comment: f2, pageview: S, path: E = window.location.pathname, ..._ } = {}) => {
    Object.entries(_).forEach(([L, M]) => {
      r2[L] = M;
    }), u2.path = E, f2 !== void 0 && (u2.comment = f2), S !== void 0 && (u2.pageview = S);
  }, destroy: () => {
    g == null || g.unmount(), b(), A();
  } };
};

// node_modules/vitepress-theme-website/dist/waline/components/Waline.mjs
import "/home/tzgml/viteblog/node_modules/@waline/client/dist/waline.css";
var WalineComponent = defineComponent({
  name: "WalineComment",
  props: {
    walineOptions: { type: Object, default: () => ({}) }
  },
  setup(props) {
    const walineRef = ref();
    onMounted(() => {
      ql({
        el: "#waline",
        serverURL: props.walineOptions.serverURL,
        login: props.walineOptions.login || "force"
      });
    });
    return () => h("div", { id: "waline", ref: (el2) => walineRef.value = el2 });
  }
});
WalineComponent.newInstance = (props) => {
  const { selector = ".VPDoc .content-container" } = props.walineOptions;
  const container = document.createElement("div");
  container.classList.add("waline-wrap");
  container.style.paddingTop = "48px";
  const parent = document.querySelector(selector);
  if (!parent)
    return;
  parent.appendChild(container);
  const app = createApp({
    render() {
      return h(WalineComponent, {
        ...props
      });
    }
  });
  app.mount(container);
  return {
    destroy() {
      app.unmount();
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }
  };
};
var Waline_default = WalineComponent;

// node_modules/vitepress-theme-website/dist/waline/index.mjs
var useWaline = (walineOptions) => {
  let waline;
  const route = useRoute();
  onMounted(() => {
    updateWaline();
  });
  onBeforeUnmount(() => waline == null ? void 0 : waline.destroy());
  function updateWaline() {
    if (waline) {
      waline == null ? void 0 : waline.destroy();
    }
    setTimeout(() => {
      if (!document)
        return;
      waline = Waline_default.newInstance({ walineOptions });
    }, 500);
  }
  watch(() => route.path, updateWaline);
};

// node_modules/vitepress-theme-website/dist/live2d/components/live2d.mjs
import Live2d from "/home/tzgml/viteblog/node_modules/vitepress-theme-website/dist/live2d/components/Live2dComponent.vue";
Live2d.init = (props) => {
  const container = document.createElement("div");
  container.classList.add("live2d-wrap");
  const parent = document.querySelector("#app");
  if (!parent)
    return;
  parent.appendChild(container);
  const app = createApp({
    render() {
      return h(Live2d, {
        ...props
      });
    }
  });
  app.mount(container);
  return {
    destroy() {
      app.unmount();
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }
  };
};
var live2d_default = Live2d;

// node_modules/vitepress-theme-website/dist/live2d/index.mjs
import { useRoute as useRoute2 } from "vitepress";
var defaultLive2dOptions = {
  enable: true,
  model: {
    url: "https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hibiki/hibiki.model.json"
  },
  display: {
    position: "right",
    width: "135px",
    height: "300px",
    xOffset: "35px",
    yOffset: "5px"
  },
  mobile: {
    show: true
  },
  react: {
    opacity: 0.8
  }
};
var useLive2d = (live2dOptions = {}) => {
  let live2d;
  const route = useRoute2();
  onMounted(() => {
    init();
  });
  onBeforeUnmount(() => live2d == null ? void 0 : live2d.destroy());
  function init() {
    if (live2d)
      return;
    setTimeout(() => {
      if (!document)
        return;
      live2d = live2d_default.init({ live2dOptions: { ...defaultLive2dOptions, ...live2dOptions } });
    }, 500);
  }
  watch(() => route.path, init);
};
export {
  useLive2d,
  useWaline
};
//# sourceMappingURL=vitepress-theme-website.js.map
