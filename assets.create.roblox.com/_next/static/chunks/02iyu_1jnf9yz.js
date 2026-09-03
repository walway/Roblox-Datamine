!(function () {
  try {
    var e =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof window
              ? window
              : "undefined" != typeof self
                ? self
                : {},
      n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "4885e3ab-233f-ef63-8646-05a35ebca96a");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  993690,
  (t, e, i) => {
    var s;
    ((s = "u" < typeof window ? t.e : window),
      (s._Highcharts = (() => {
        "use strict";
        let t, e, i, s, o;
        var r,
          n,
          a,
          l,
          h,
          d,
          c,
          p,
          u,
          g,
          f,
          m,
          x,
          y,
          v,
          b,
          k,
          w,
          M,
          S,
          T,
          C,
          A,
          P,
          L,
          O,
          E,
          I,
          D,
          B,
          N,
          z,
          R,
          W,
          X,
          H = {};
        ((H.d = (t, e) => {
          for (var i in e)
            H.o(e, i) && !H.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        }),
          (H.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)));
        var F = {};
        (H.d(F, { default: () => h2 }),
          ((r = w || (w = {})).SVG_NS = "http://www.w3.org/2000/svg"),
          (r.product = "Highcharts"),
          (r.version = "12.2.0"),
          (r.win = "u" > typeof window ? window : {}),
          (r.doc = r.win.document),
          (r.svg = !!(null == (l = r.doc) ||
          null == (a = l.createElementNS) ||
          null == (n = a.call(l, r.SVG_NS, "svg"))
            ? void 0
            : n.createSVGRect)),
          (r.pageLang =
            null == (c = r.doc) ||
            null == (d = c.documentElement) ||
            null == (h = d.closest("[lang]"))
              ? void 0
              : h.lang),
          (r.userAgent = (null == (p = r.win.navigator) ? void 0 : p.userAgent) || ""),
          (r.isChrome = r.win.chrome),
          (r.isFirefox = -1 !== r.userAgent.indexOf("Firefox")),
          (r.isMS = /(edge|msie|trident)/i.test(r.userAgent) && !r.win.opera),
          (r.isSafari = !r.isChrome && -1 !== r.userAgent.indexOf("Safari")),
          (r.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(r.userAgent)),
          (r.isWebKit = -1 !== r.userAgent.indexOf("AppleWebKit")),
          (r.deg2rad = (2 * Math.PI) / 360),
          (r.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"]),
          (r.noop = function () {}),
          (r.supportsPassiveEvents = (function () {
            let t = !1;
            if (!r.isMS) {
              let e = Object.defineProperty({}, "passive", {
                get: function () {
                  t = !0;
                }
              });
              r.win.addEventListener &&
                r.win.removeEventListener &&
                (r.win.addEventListener("testPassive", r.noop, e),
                r.win.removeEventListener("testPassive", r.noop, e));
            }
            return t;
          })()),
          (r.charts = []),
          (r.composed = []),
          (r.dateFormats = {}),
          (r.seriesTypes = {}),
          (r.symbolSizes = {}),
          (r.chartCount = 0));
        let G = w,
          { charts: Y, doc: j, win: U } = G;
        function V(t, e, i, s) {
          let o = e ? "Highcharts error" : "Highcharts warning";
          32 === t && (t = "".concat(o, ": Deprecated member"));
          let r = Q(t),
            n = r
              ? "".concat(o, " #").concat(t, ": www.highcharts.com/errors/").concat(t, "/")
              : t.toString();
          if (void 0 !== s) {
            let t = "";
            (r && (n += "?"),
              th(s, function (e, i) {
                ((t += "\n - ".concat(i, ": ").concat(e)),
                  r && (n += encodeURI(i) + "=" + encodeURI(e)));
              }),
              (n += t));
          }
          (tc(G, "displayError", { chart: i, code: t, message: n, params: s }, function () {
            if (e) throw Error(n);
            U.console && -1 === V.messages.indexOf(n) && console.warn(n);
          }),
            V.messages.push(n));
        }
        function Z(t, e) {
          return parseInt(t, e || 10);
        }
        function q(t) {
          return "string" == typeof t;
        }
        function _(t) {
          let e = Object.prototype.toString.call(t);
          return "[object Array]" === e || "[object Array Iterator]" === e;
        }
        function K(t, e) {
          return !!t && "object" == typeof t && (!e || !_(t));
        }
        function $(t) {
          return K(t) && "number" == typeof t.nodeType;
        }
        function J(t) {
          let e = null == t ? void 0 : t.constructor;
          return !!(K(t, !0) && !$(t) && (null == e ? void 0 : e.name) && "Object" !== e.name);
        }
        function Q(t) {
          return "number" == typeof t && !isNaN(t) && t < 1 / 0 && t > -1 / 0;
        }
        function tt(t) {
          return null != t;
        }
        function te(t, e, i) {
          let s,
            o = q(e) && !tt(i),
            r = (e, i) => {
              tt(e)
                ? t.setAttribute(i, e)
                : o
                  ? (s = t.getAttribute(i)) || "class" !== i || (s = t.getAttribute(i + "Name"))
                  : t.removeAttribute(i);
            };
          return (q(e) ? r(i, e) : th(e, r), s);
        }
        function ti(t) {
          return _(t) ? t : [t];
        }
        function ts(t, e) {
          let i;
          for (i in (t || (t = {}), e)) t[i] = e[i];
          return t;
        }
        function to() {
          let t = arguments,
            e = t.length;
          for (let i = 0; i < e; i++) {
            let e = t[i];
            if (null != e) return e;
          }
        }
        function tr(t, e) {
          ts(t.style, e);
        }
        function tn(t) {
          return Math.pow(10, Math.floor(Math.log(t) / Math.LN10));
        }
        function ta(t, e) {
          return t > 1e14 ? t : parseFloat(t.toPrecision(e || 14));
        }
        (((V || (V = {})).messages = []),
          (Math.easeInOutSine = function (t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
          }));
        let tl = Array.prototype.find
          ? function (t, e) {
              return t.find(e);
            }
          : function (t, e) {
              let i,
                s = t.length;
              for (i = 0; i < s; i++) if (e(t[i], i)) return t[i];
            };
        function th(t, e, i) {
          for (let s in t) Object.hasOwnProperty.call(t, s) && e.call(i || t[s], t[s], s, t);
        }
        function td(t, e, i) {
          function s(e, i) {
            let s = t.removeEventListener;
            s && s.call(t, e, i, !1);
          }
          function o(i) {
            let o, r;
            t.nodeName &&
              (e ? ((o = {})[e] = !0) : (o = i),
              th(o, function (t, e) {
                if (i[e]) for (r = i[e].length; r--;) s(e, i[e][r].fn);
              }));
          }
          let r = ("function" == typeof t && t.prototype) || t;
          if (Object.hasOwnProperty.call(r, "hcEvents")) {
            let t = r.hcEvents;
            if (e) {
              let r = t[e] || [];
              i
                ? ((t[e] = r.filter(function (t) {
                    return i !== t.fn;
                  })),
                  s(e, i))
                : (o(t), (t[e] = []));
            } else (o(t), delete r.hcEvents);
          }
        }
        function tc(t, e, i, s) {
          if (
            ((i = i || {}),
            (null == j ? void 0 : j.createEvent) && (t.dispatchEvent || (t.fireEvent && t !== G)))
          ) {
            let s = j.createEvent("Events");
            (s.initEvent(e, !0, !0),
              (i = ts(s, i)),
              t.dispatchEvent ? t.dispatchEvent(i) : t.fireEvent(e, i));
          } else if (t.hcEvents) {
            i.target ||
              ts(i, {
                preventDefault: function () {
                  i.defaultPrevented = !0;
                },
                target: t,
                type: e
              });
            let s = [],
              o = t,
              r = !1;
            for (; o.hcEvents;)
              (Object.hasOwnProperty.call(o, "hcEvents") &&
                o.hcEvents[e] &&
                (s.length && (r = !0), s.unshift.apply(s, o.hcEvents[e])),
                (o = Object.getPrototypeOf(o)));
            (r && s.sort((t, e) => t.order - e.order),
              s.forEach((e) => {
                !1 === e.fn.call(t, i) && i.preventDefault();
              }));
          }
          s && !i.defaultPrevented && s.call(t, i);
        }
        let tp =
          ((i = Math.random().toString(36).substring(2, 9) + "-"),
          (s = 0),
          function () {
            return "highcharts-" + (t ? "" : i) + s++;
          });
        U.jQuery &&
          (U.jQuery.fn.highcharts = function () {
            let t = [].slice.call(arguments);
            if (this[0])
              return t[0]
                ? (new G[q(t[0]) ? t.shift() : "Chart"](this[0], t[0], t[1]), this)
                : Y[te(this[0], "data-highcharts-chart")];
          });
        let tu = {
            addEvent: function (t, e, i) {
              let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                o = ("function" == typeof t && t.prototype) || t;
              Object.hasOwnProperty.call(o, "hcEvents") || (o.hcEvents = {});
              let r = o.hcEvents;
              G.Point &&
                t instanceof G.Point &&
                t.series &&
                t.series.chart &&
                (t.series.chart.runTrackerClick = !0);
              let n = t.addEventListener;
              (n &&
                n.call(
                  t,
                  e,
                  i,
                  !!G.supportsPassiveEvents && {
                    passive: void 0 === s.passive ? -1 !== e.indexOf("touch") : s.passive,
                    capture: !1
                  }
                ),
                r[e] || (r[e] = []));
              let a = { fn: i, order: "number" == typeof s.order ? s.order : 1 / 0 };
              return (
                r[e].push(a),
                r[e].sort((t, e) => t.order - e.order),
                function () {
                  td(t, e, i);
                }
              );
            },
            arrayMax: function (t) {
              let e = t.length,
                i = t[0];
              for (; e--;) t[e] > i && (i = t[e]);
              return i;
            },
            arrayMin: function (t) {
              let e = t.length,
                i = t[0];
              for (; e--;) t[e] < i && (i = t[e]);
              return i;
            },
            attr: te,
            clamp: function (t, e, i) {
              return t > e ? (t < i ? t : i) : e;
            },
            clearTimeout: function (t) {
              tt(t) && clearTimeout(t);
            },
            correctFloat: ta,
            createElement: function (t, e, i, s, o) {
              let r = j.createElement(t);
              return (
                e && ts(r, e),
                o && tr(r, { padding: "0", border: "none", margin: "0" }),
                i && tr(r, i),
                s && s.appendChild(r),
                r
              );
            },
            crisp: function (t) {
              let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = arguments.length > 2 ? arguments[2] : void 0,
                s = (e % 2) / 2,
                o = i ? -1 : 1;
              return (Math.round(t * o - s) + s) * o;
            },
            css: tr,
            defined: tt,
            destroyObjectProperties: function (t, e, i) {
              th(t, function (s, o) {
                (s !== e && (null == s ? void 0 : s.destroy) && s.destroy(),
                  ((null == s ? void 0 : s.destroy) || !i) && delete t[o]);
              });
            },
            diffObjects: function (t, e, i, s) {
              let o = {};
              return (
                !(function t(e, o, r, n) {
                  let a = i ? o : e;
                  th(e, function (i, l) {
                    if (!n && s && s.indexOf(l) > -1 && o[l]) {
                      ((i = ti(i)), (r[l] = []));
                      for (let e = 0; e < Math.max(i.length, o[l].length); e++)
                        o[l][e] &&
                          (void 0 === i[e]
                            ? (r[l][e] = o[l][e])
                            : ((r[l][e] = {}), t(i[e], o[l][e], r[l][e], n + 1)));
                    } else
                      K(i, !0) && !i.nodeType
                        ? ((r[l] = _(i) ? [] : {}),
                          t(i, o[l] || {}, r[l], n + 1),
                          0 === Object.keys(r[l]).length &&
                            ("colorAxis" !== l || 0 !== n) &&
                            delete r[l])
                        : (e[l] !== o[l] || (l in e && !(l in o))) &&
                          "__proto__" !== l &&
                          "constructor" !== l &&
                          (r[l] = a[l]);
                  });
                })(t, e, o, 0),
                o
              );
            },
            discardElement: function (t) {
              var e;
              null == t || null == (e = t.parentElement) || e.removeChild(t);
            },
            erase: function (t, e) {
              let i = t.length;
              for (; i--;)
                if (t[i] === e) {
                  t.splice(i, 1);
                  break;
                }
            },
            error: V,
            extend: ts,
            extendClass: function (t, e) {
              let i = function () {};
              return ((i.prototype = new t()), ts(i.prototype, e), i);
            },
            find: tl,
            fireEvent: tc,
            getAlignFactor: function () {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
              return { center: 0.5, right: 1, middle: 0.5, bottom: 1 }[t] || 0;
            },
            getClosestDistance: function (t, e) {
              let i,
                s,
                o,
                r,
                n = !e;
              return (
                t.forEach((t) => {
                  if (t.length > 1)
                    for (r = s = t.length - 1; r > 0; r--)
                      (o = t[r] - t[r - 1]) < 0 && !n
                        ? (null == e || e(), (e = void 0))
                        : o && (void 0 === i || o < i) && (i = o);
                }),
                i
              );
            },
            getMagnitude: tn,
            getNestedProperty: function (t, e) {
              let i = t.split(".");
              for (; i.length && tt(e);) {
                let t = i.shift();
                if (void 0 === t || "__proto__" === t) return;
                if ("this" === t) {
                  let t;
                  return (K(e) && (t = e["@this"]), null != t ? t : e);
                }
                let s = e[t.replace(/[\\'"]/g, "")];
                if (!tt(s) || "function" == typeof s || "number" == typeof s.nodeType || s === U)
                  return;
                e = s;
              }
              return e;
            },
            getStyle: function t(e, i, s) {
              let o;
              if ("width" === i) {
                var r;
                let i = Math.min(e.offsetWidth, e.scrollWidth),
                  s = null == (r = e.getBoundingClientRect) ? void 0 : r.call(e).width;
                return (
                  s < i && s >= i - 1 && (i = Math.floor(s)),
                  Math.max(
                    0,
                    i - (t(e, "padding-left", !0) || 0) - (t(e, "padding-right", !0) || 0)
                  )
                );
              }
              if ("height" === i)
                return Math.max(
                  0,
                  Math.min(e.offsetHeight, e.scrollHeight) -
                    (t(e, "padding-top", !0) || 0) -
                    (t(e, "padding-bottom", !0) || 0)
                );
              let n = U.getComputedStyle(e, void 0);
              return (n && ((o = n.getPropertyValue(i)), to(s, "opacity" !== i) && (o = Z(o))), o);
            },
            insertItem: function (t, e) {
              let i,
                s = t.options.index,
                o = e.length;
              for (i = t.options.isInternal ? o : 0; i < o + 1; i++)
                if (
                  !e[i] ||
                  (Q(s) && s < to(e[i].options.index, e[i]._i)) ||
                  e[i].options.isInternal
                ) {
                  e.splice(i, 0, t);
                  break;
                }
              return i;
            },
            isArray: _,
            isClass: J,
            isDOMElement: $,
            isFunction: function (t) {
              return "function" == typeof t;
            },
            isNumber: Q,
            isObject: K,
            isString: q,
            merge: function (t) {
              for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
                i[s - 1] = arguments[s];
              let o,
                r = [t, ...i],
                n = {},
                a = function (t, e) {
                  return (
                    "object" != typeof t && (t = {}),
                    th(e, function (i, s) {
                      "__proto__" !== s &&
                        "constructor" !== s &&
                        (!K(i, !0) || J(i) || $(i) ? (t[s] = e[s]) : (t[s] = a(t[s] || {}, i)));
                    }),
                    t
                  );
                };
              !0 === t && ((n = r[1]), (r = Array.prototype.slice.call(r, 2)));
              let l = r.length;
              for (o = 0; o < l; o++) n = a(n, r[o]);
              return n;
            },
            normalizeTickInterval: function (t, e, i, s, o) {
              let r,
                n = t;
              i = to(i, tn(t));
              let a = t / i;
              for (
                !e &&
                  ((e = o ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10]),
                  !1 === s &&
                    (1 === i
                      ? (e = e.filter(function (t) {
                          return t % 1 == 0;
                        }))
                      : i <= 0.1 && (e = [1 / i]))),
                  r = 0;
                r < e.length &&
                ((n = e[r]),
                (!o || !(n * i >= t)) && (o || !(a <= (e[r] + (e[r + 1] || e[r])) / 2)));
                r++
              );
              return ta(n * i, -Math.round(Math.log(0.001) / Math.LN10));
            },
            objectEach: th,
            offset: function (t) {
              let e = j.documentElement,
                i =
                  t.parentElement || t.parentNode
                    ? t.getBoundingClientRect()
                    : { top: 0, left: 0, width: 0, height: 0 };
              return {
                top: i.top + (U.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (U.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
                width: i.width,
                height: i.height
              };
            },
            pad: function (t, e, i) {
              return Array((e || 2) + 1 - String(t).replace("-", "").length).join(i || "0") + t;
            },
            pick: to,
            pInt: Z,
            pushUnique: function (t, e) {
              return 0 > t.indexOf(e) && !!t.push(e);
            },
            relativeLength: function (t, e, i) {
              return /%$/.test(t) ? (e * parseFloat(t)) / 100 + (i || 0) : parseFloat(t);
            },
            removeEvent: td,
            replaceNested: function (t) {
              let e, i;
              for (var s = arguments.length, o = Array(s > 1 ? s - 1 : 0), r = 1; r < s; r++)
                o[r - 1] = arguments[r];
              do for (i of ((e = t), o)) t = t.replace(i[0], i[1]);
              while (t !== e);
              return t;
            },
            splat: ti,
            stableSort: function (t, e) {
              let i,
                s,
                o = t.length;
              for (s = 0; s < o; s++) t[s].safeI = s;
              for (
                t.sort(function (t, s) {
                  return 0 === (i = e(t, s)) ? t.safeI - s.safeI : i;
                }),
                  s = 0;
                s < o;
                s++
              )
                delete t[s].safeI;
            },
            syncTimeout: function (t, e, i) {
              return e > 0 ? setTimeout(t, e, i) : (t.call(0, i), -1);
            },
            timeUnits: {
              millisecond: 1,
              second: 1e3,
              minute: 6e4,
              hour: 36e5,
              day: 864e5,
              week: 6048e5,
              month: 24192e5,
              year: 314496e5
            },
            ucfirst: function (t) {
              return q(t) ? t.substring(0, 1).toUpperCase() + t.substring(1) : String(t);
            },
            uniqueKey: tp,
            useSerialIds: function (e) {
              return (t = to(e, t));
            },
            wrap: function (t, e, i) {
              let s = t[e];
              t[e] = function () {
                let t = arguments,
                  e = this;
                return i.apply(
                  this,
                  [
                    function () {
                      return s.apply(e, arguments.length ? arguments : t);
                    }
                  ].concat([].slice.call(arguments))
                );
              };
            }
          },
          { pageLang: tg, win: tf } = G,
          {
            defined: tm,
            error: tx,
            extend: ty,
            isNumber: tv,
            isObject: tb,
            isString: tk,
            merge: tw,
            objectEach: tM,
            pad: tS,
            splat: tT,
            timeUnits: tC,
            ucfirst: tA
          } = tu,
          tP = G.isSafari && tf.Intl && !tf.Intl.DateTimeFormat.prototype.formatRange,
          tL = class {
            update() {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              ((this.dTLCache = {}), (this.options = t = tw(!0, this.options, t)));
              let { timezoneOffset: e, useUTC: i } = t;
              this.Date = t.Date || tf.Date || Date;
              let s = t.timezone;
              (tm(i) && (s = i ? "UTC" : void 0),
                e && e % 60 == 0 && (s = "Etc/GMT" + (e > 0 ? "+" : "") + e / 60),
                (this.variableTimezone =
                  "UTC" !== s && (null == s ? void 0 : s.indexOf("Etc/GMT")) !== 0),
                (this.timezone = s),
                ["months", "shortMonths", "weekdays", "shortWeekdays"].forEach((t) => {
                  let e = /months/i.test(t),
                    i = /short/.test(t),
                    s = { timeZone: "UTC" };
                  ((s[e ? "month" : "weekday"] = i ? "short" : "long"),
                    (this[t] = (
                      e ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : [3, 4, 5, 6, 7, 8, 9]
                    ).map((t) => this.dateFormat(s, (e ? 31 : 1) * 24 * 36e5 * t))));
                }));
            }
            toParts(t) {
              let [e, i, s, o, r, n, a] = this.dateTimeFormat(
                {
                  weekday: "narrow",
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric"
                },
                t,
                "es"
              ).split(/(?:, | |\/|:)/g);
              return [
                o,
                s - 1,
                i,
                r,
                n,
                a,
                Math.floor(Number(t) || 0) % 1e3,
                "DLMXJVS".indexOf(e)
              ].map(Number);
            }
            dateTimeFormat(t, e) {
              let i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : this.options.locale || tg,
                s = JSON.stringify(t) + i;
              tk(t) && (t = this.str2dtf(t));
              let o = this.dTLCache[s];
              if (!o) {
                null != t.timeZone || (t.timeZone = this.timezone);
                try {
                  o = new Intl.DateTimeFormat(i, t);
                } catch (e) {
                  /Invalid time zone/i.test(e.message)
                    ? (tx(34), (t.timeZone = "UTC"), (o = new Intl.DateTimeFormat(i, t)))
                    : tx(e.message, !1);
                }
              }
              return ((this.dTLCache[s] = o), (null == o ? void 0 : o.format(e)) || "");
            }
            str2dtf(t) {
              let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = {
                  L: { fractionalSecondDigits: 3 },
                  S: { second: "2-digit" },
                  M: { minute: "numeric" },
                  H: { hour: "2-digit" },
                  k: { hour: "numeric" },
                  E: { weekday: "narrow" },
                  a: { weekday: "short" },
                  A: { weekday: "long" },
                  d: { day: "2-digit" },
                  e: { day: "numeric" },
                  b: { month: "short" },
                  B: { month: "long" },
                  m: { month: "2-digit" },
                  o: { month: "numeric" },
                  y: { year: "2-digit" },
                  Y: { year: "numeric" }
                };
              return (
                Object.keys(i).forEach((s) => {
                  -1 !== t.indexOf(s) && ty(e, i[s]);
                }),
                e
              );
            }
            makeTime(t, e) {
              let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                o = arguments.length > 4 ? arguments[4] : void 0,
                r = arguments.length > 5 ? arguments[5] : void 0,
                n = arguments.length > 6 ? arguments[6] : void 0,
                a = this.Date.UTC(t, e, i, s, o || 0, r || 0, n || 0);
              if ("UTC" !== this.timezone) {
                let t = this.getTimezoneOffset(a);
                if (((a += t), -1 !== [2, 3, 8, 9, 10, 11].indexOf(e) && (s < 5 || s > 20))) {
                  let e = this.getTimezoneOffset(a);
                  t !== e
                    ? (a += e - t)
                    : t - 36e5 !== this.getTimezoneOffset(a - 36e5) || tP || (a -= 36e5);
                }
              }
              return a;
            }
            parse(t) {
              if (!tk(t)) return null != t ? t : void 0;
              let e =
                  (t = t.replace(/\//g, "-").replace(/(GMT|UTC)/, "")).indexOf("Z") > -1 ||
                  /([+-][0-9]{2}):?[0-9]{2}$/.test(t),
                i = /^[0-9]{4}-[0-9]{2}(-[0-9]{2}|)$/.test(t);
              e || i || (t += "Z");
              let s = Date.parse(t);
              if (tv(s)) return s + (!e || i ? this.getTimezoneOffset(s) : 0);
            }
            getTimezoneOffset(t) {
              if ("UTC" !== this.timezone) {
                let [e, i, s, o, r = 0] = this.dateTimeFormat(
                    { timeZoneName: "shortOffset" },
                    t,
                    "en"
                  )
                    .split(/(GMT|:)/)
                    .map(Number),
                  n = -(36e5 * (s + r / 60));
                if (tv(n)) return n;
              }
              return 0;
            }
            dateFormat(t, e, i) {
              let s = this.lang;
              if (!tm(e) || isNaN(e)) return (null == s ? void 0 : s.invalidDate) || "";
              if (tk((t = null != t ? t : "%Y-%m-%d %H:%M:%S"))) {
                let i,
                  o = /%\[([a-zA-Z]+)\]/g;
                for (; (i = o.exec(t));)
                  t = t.replace(i[0], this.dateTimeFormat(i[1], e, null == s ? void 0 : s.locale));
              }
              if (tk(t) && -1 !== t.indexOf("%")) {
                var o;
                let i = this,
                  [r, n, a, l, h, d, c, p] = this.toParts(e),
                  u = (null == s ? void 0 : s.weekdays) || this.weekdays,
                  g = (null == s ? void 0 : s.shortWeekdays) || this.shortWeekdays,
                  f = (null == s ? void 0 : s.months) || this.months,
                  m = (null == s ? void 0 : s.shortMonths) || this.shortMonths;
                tM(
                  ty(
                    {
                      a: g ? g[p] : u[p].substr(0, 3),
                      A: u[p],
                      d: tS(a),
                      e: tS(a, 2, " "),
                      w: p,
                      v: null != (o = null == s ? void 0 : s.weekFrom) ? o : "",
                      b: m[n],
                      B: f[n],
                      m: tS(n + 1),
                      o: n + 1,
                      y: r.toString().substr(2, 2),
                      Y: r,
                      H: tS(l),
                      k: l,
                      I: tS(l % 12 || 12),
                      l: l % 12 || 12,
                      M: tS(h),
                      p: l < 12 ? "AM" : "PM",
                      P: l < 12 ? "am" : "pm",
                      S: tS(d),
                      L: tS(c, 3)
                    },
                    G.dateFormats
                  ),
                  function (s, o) {
                    if (tk(t))
                      for (; -1 !== t.indexOf("%" + o);)
                        t = t.replace("%" + o, "function" == typeof s ? s.call(i, e) : s);
                  }
                );
              } else if (tb(t)) {
                let i = (this.getTimezoneOffset(e) || 0) / 36e5,
                  s = this.timezone || "Etc/GMT" + (i >= 0 ? "+" : "") + i,
                  { prefix: o = "", suffix: r = "" } = t;
                t = o + this.dateTimeFormat(ty({ timeZone: s }, t), e) + r;
              }
              return i ? tA(t) : t;
            }
            resolveDTLFormat(t) {
              return tb(t, !0)
                ? tb(t, !0) && void 0 === t.main
                  ? { main: t }
                  : t
                : { main: (t = tT(t))[0], from: t[1], to: t[2] };
            }
            getDateFormat(t, e, i, s) {
              let o = this.dateFormat("%m-%d %H:%M:%S.%L", e),
                r = "01-01 00:00:00.000",
                n = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 },
                a = "millisecond",
                l = a;
              for (a in tC) {
                if (
                  t &&
                  t === tC.week &&
                  +this.dateFormat("%w", e) === i &&
                  o.substr(6) === r.substr(6)
                ) {
                  a = "week";
                  break;
                }
                if (t && tC[a] > t) {
                  a = l;
                  break;
                }
                if (n[a] && o.substr(n[a]) !== r.substr(n[a])) break;
                "week" !== a && (l = a);
              }
              return this.resolveDTLFormat(s[a]).main;
            }
            constructor(t, e) {
              ((this.options = { timezone: "UTC" }),
                (this.variableTimezone = !1),
                (this.Date = tf.Date),
                this.update(t),
                (this.lang = e));
            }
          },
          { defined: tO, extend: tE, timeUnits: tI } = tu,
          tD = class extends tL {
            getTimeTicks(t, e, i, s) {
              let o = this,
                r = [],
                n = {},
                { count: a = 1, unitRange: l } = t,
                [h, d, c, p, u, g] = o.toParts(e),
                f = (e || 0) % 1e3,
                m;
              if ((null != s || (s = 1), tO(e))) {
                if (
                  ((f = l >= tI.second ? 0 : a * Math.floor(f / a)),
                  l >= tI.second && (g = l >= tI.minute ? 0 : a * Math.floor(g / a)),
                  l >= tI.minute && (u = l >= tI.hour ? 0 : a * Math.floor(u / a)),
                  l >= tI.hour && (p = l >= tI.day ? 0 : a * Math.floor(p / a)),
                  l >= tI.day && (c = l >= tI.month ? 1 : Math.max(1, a * Math.floor(c / a))),
                  l >= tI.month && (d = l >= tI.year ? 0 : a * Math.floor(d / a)),
                  l >= tI.year && (h -= h % a),
                  l === tI.week)
                ) {
                  a && (e = o.makeTime(h, d, c, p, u, g, f));
                  let t = this.dateTimeFormat(
                      { timeZone: this.timezone, weekday: "narrow" },
                      e,
                      "es"
                    ),
                    i = "DLMXJVS".indexOf(t);
                  c += -i + s + (i < s ? -7 : 0);
                }
                ((e = o.makeTime(h, d, c, p, u, g, f)),
                  o.variableTimezone &&
                    tO(i) &&
                    (m =
                      i - e > 4 * tI.month || o.getTimezoneOffset(e) !== o.getTimezoneOffset(i)));
                let t = e,
                  x = 1;
                for (; t < i;)
                  (r.push(t),
                    l === tI.year
                      ? (t = o.makeTime(h + x * a, 0))
                      : l === tI.month
                        ? (t = o.makeTime(h, d + x * a))
                        : m && (l === tI.day || l === tI.week)
                          ? (t = o.makeTime(h, d, c + x * a * (l === tI.day ? 1 : 7)))
                          : m && l === tI.hour && a > 1
                            ? (t = o.makeTime(h, d, c, p + x * a))
                            : (t += l * a),
                    x++);
                (r.push(t),
                  l <= tI.hour &&
                    r.length < 1e4 &&
                    r.forEach((t) => {
                      t % 18e5 == 0 &&
                        "000000000" === o.dateFormat("%H%M%S%L", t) &&
                        (n[t] = "day");
                    }));
              }
              return ((r.info = tE(t, { higherRanks: n, totalRange: l * a })), r);
            }
          },
          { isTouchDevice: tB } = G,
          { fireEvent: tN, merge: tz } = tu,
          tR = {
            colors: [
              "#2caffe",
              "#544fc5",
              "#00e272",
              "#fe6a35",
              "#6b8abc",
              "#d568fb",
              "#2ee0ca",
              "#fa4b42",
              "#feb56a",
              "#91e8e1"
            ],
            symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
            lang: {
              weekFrom: "week from",
              chartTitle: "Chart title",
              locale: void 0,
              loading: "Loading...",
              months: void 0,
              seriesName: "Series {add index 1}",
              shortMonths: void 0,
              weekdays: void 0,
              numericSymbols: ["k", "M", "G", "T", "P", "E"],
              pieSliceName: "Slice",
              resetZoom: "Reset zoom",
              yAxisTitle: "Values",
              resetZoomTitle: "Reset zoom level 1:1"
            },
            global: {
              buttonTheme: {
                fill: "#f7f7f7",
                padding: 8,
                r: 2,
                stroke: "#cccccc",
                "stroke-width": 1,
                style: {
                  color: "#333333",
                  cursor: "pointer",
                  fontSize: "0.8em",
                  fontWeight: "normal"
                },
                states: {
                  hover: { fill: "#e6e6e6" },
                  select: { fill: "#e6e9ff", style: { color: "#000000", fontWeight: "bold" } },
                  disabled: { style: { color: "#cccccc" } }
                }
              }
            },
            time: { Date: void 0, timezone: "UTC", timezoneOffset: 0, useUTC: void 0 },
            chart: {
              alignThresholds: !1,
              panning: { enabled: !1, type: "x" },
              styledMode: !1,
              borderRadius: 0,
              colorCount: 10,
              allowMutatingData: !0,
              ignoreHiddenSeries: !0,
              spacing: [10, 10, 15, 10],
              resetZoomButton: { theme: {}, position: {} },
              reflow: !0,
              type: "line",
              zooming: {
                singleTouch: !1,
                resetButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } }
              },
              width: null,
              height: null,
              borderColor: "#334eff",
              backgroundColor: "#ffffff",
              plotBorderColor: "#cccccc"
            },
            title: {
              style: { color: "#333333", fontWeight: "bold" },
              text: "Chart title",
              margin: 15,
              minScale: 0.67
            },
            subtitle: { style: { color: "#666666", fontSize: "0.8em" }, text: "" },
            caption: {
              margin: 15,
              style: { color: "#666666", fontSize: "0.8em" },
              text: "",
              align: "left",
              verticalAlign: "bottom"
            },
            plotOptions: {},
            legend: {
              enabled: !0,
              align: "center",
              alignColumns: !0,
              className: "highcharts-no-tooltip",
              events: {},
              layout: "horizontal",
              itemMarginBottom: 2,
              itemMarginTop: 2,
              labelFormatter: function () {
                return this.name;
              },
              borderColor: "#999999",
              borderRadius: 0,
              navigation: {
                style: { fontSize: "0.8em" },
                activeColor: "#0022ff",
                inactiveColor: "#cccccc"
              },
              itemStyle: {
                color: "#333333",
                cursor: "pointer",
                fontSize: "0.8em",
                textDecoration: "none",
                textOverflow: "ellipsis"
              },
              itemHoverStyle: { color: "#000000" },
              itemHiddenStyle: { color: "#666666", textDecoration: "line-through" },
              shadow: !1,
              itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" },
              squareSymbol: !0,
              symbolPadding: 5,
              verticalAlign: "bottom",
              x: 0,
              y: 0,
              title: { style: { fontSize: "0.8em", fontWeight: "bold" } }
            },
            loading: {
              labelStyle: { fontWeight: "bold", position: "relative", top: "45%" },
              style: {
                position: "absolute",
                backgroundColor: "#ffffff",
                opacity: 0.5,
                textAlign: "center"
              }
            },
            tooltip: {
              enabled: !0,
              animation: { duration: 300, easing: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)) },
              borderRadius: 3,
              dateTimeLabelFormats: {
                millisecond: "%[AebHMSL]",
                second: "%[AebHMS]",
                minute: "%[AebHM]",
                hour: "%[AebHM]",
                day: "%[AebY]",
                week: "%v %[AebY]",
                month: "%[BY]",
                year: "%Y"
              },
              footerFormat: "",
              headerShape: "callout",
              hideDelay: 500,
              padding: 8,
              position: { x: 0, y: 3 },
              shared: !1,
              snap: tB ? 25 : 10,
              headerFormat: '<span style="font-size: 0.8em">{ucfirst point.key}</span><br/>',
              pointFormat:
                '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
              backgroundColor: "#ffffff",
              borderWidth: void 0,
              stickOnContact: !1,
              style: { color: "#333333", cursor: "default", fontSize: "0.8em" },
              useHTML: !1
            },
            credits: {
              enabled: !0,
              href: "https://www.highcharts.com?credits",
              position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 },
              style: { cursor: "pointer", color: "#999999", fontSize: "0.6em" },
              text: "Highcharts.com"
            }
          },
          tW = new tD(tR.time, tR.lang),
          tX = {
            defaultOptions: tR,
            defaultTime: tW,
            getOptions: function () {
              return tR;
            },
            setOptions: function (t) {
              var e;
              return (
                tN(G, "setOptions", { options: t }),
                tz(!0, tR, t),
                t.time && tW.update(tR.time),
                t.lang && "locale" in t.lang && tW.update({ locale: t.lang.locale }),
                (null == (e = t.lang) ? void 0 : e.chartTitle) &&
                  (tR.title = { ...tR.title, text: t.lang.chartTitle }),
                tR
              );
            }
          },
          { win: tH } = G,
          { isNumber: tF, isString: tG, merge: tY, pInt: tj, defined: tU } = tu,
          tV = (t, e, i) =>
            "color-mix(in srgb,"
              .concat(t, ",")
              .concat(e, " ")
              .concat(100 * i, "%)"),
          tZ = (t) => tG(t) && !!t && "none" !== t;
        class tq {
          static parse(t) {
            return t ? new tq(t) : tq.None;
          }
          get(t) {
            let e = this.input,
              i = this.rgba;
            if (this.output) return this.output;
            if ("object" == typeof e && void 0 !== this.stops) {
              let i = tY(e);
              return (
                (i.stops = [].slice.call(i.stops)),
                this.stops.forEach((e, s) => {
                  i.stops[s] = [i.stops[s][0], e.get(t)];
                }),
                i
              );
            }
            return i && tF(i[0])
              ? "rgb" !== t && (t || 1 !== i[3])
                ? "a" === t
                  ? "".concat(i[3])
                  : "rgba(" + i.join(",") + ")"
                : "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")"
              : e;
          }
          brighten(t) {
            let e = this.rgba;
            if (this.stops)
              this.stops.forEach(function (e) {
                e.brighten(t);
              });
            else if (tF(t) && 0 !== t)
              if (tF(e[0]))
                for (let i = 0; i < 3; i++)
                  ((e[i] += tj(255 * t)), e[i] < 0 && (e[i] = 0), e[i] > 255 && (e[i] = 255));
              else
                tq.useColorMix &&
                  tZ(this.input) &&
                  (this.output = tV(this.input, t > 0 ? "white" : "black", Math.abs(t)));
            return this;
          }
          setOpacity(t) {
            return ((this.rgba[3] = t), this);
          }
          tweenTo(t, e) {
            let i = this.rgba,
              s = t.rgba;
            if (!tF(i[0]) || !tF(s[0]))
              return tq.useColorMix && tZ(this.input) && tZ(t.input) && e < 0.99
                ? tV(this.input, t.input, e)
                : t.input || "none";
            let o = 1 !== s[3] || 1 !== i[3],
              r = (t, s) => t + (i[s] - t) * (1 - e),
              n = s.slice(0, 3).map(r).map(Math.round);
            return (o && n.push(r(s[3], 3)), (o ? "rgba(" : "rgb(") + n.join(",") + ")");
          }
          constructor(t) {
            let e, i, s, o;
            ((this.rgba = [NaN, NaN, NaN, NaN]), (this.input = t));
            let r = G.Color;
            if (r && r !== tq) return new r(t);
            if ("object" == typeof t && void 0 !== t.stops)
              this.stops = t.stops.map((t) => new tq(t[1]));
            else if ("string" == typeof t)
              for (
                this.input = t = tq.names[t.toLowerCase()] || t, s = tq.parsers.length;
                s-- && !i;
              )
                (e = (o = tq.parsers[s]).regex.exec(t)) && (i = o.parse(e));
            i && (this.rgba = i);
          }
        }
        ((tq.names = { white: "#ffffff", black: "#000000" }),
          (tq.parsers = [
            {
              regex:
                /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?(?:\.\d+)?)\s*\)/,
              parse: function (t) {
                return [tj(t[1]), tj(t[2]), tj(t[3]), parseFloat(t[4], 10)];
              }
            },
            {
              regex: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/,
              parse: function (t) {
                return [tj(t[1]), tj(t[2]), tj(t[3]), 1];
              }
            },
            {
              regex: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?$/i,
              parse: function (t) {
                return [
                  tj(t[1] + t[1], 16),
                  tj(t[2] + t[2], 16),
                  tj(t[3] + t[3], 16),
                  tU(t[4]) ? tj(t[4] + t[4], 16) / 255 : 1
                ];
              }
            },
            {
              regex: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?$/i,
              parse: function (t) {
                return [
                  tj(t[1], 16),
                  tj(t[2], 16),
                  tj(t[3], 16),
                  tU(t[4]) ? tj(t[4], 16) / 255 : 1
                ];
              }
            }
          ]),
          (tq.useColorMix =
            null == (k = tH.CSS) ? void 0 : k.supports("color", "color-mix(in srgb,red,blue 9%)")),
          (tq.None = new tq("")));
        let { parse: t_ } = tq,
          { win: tK } = G,
          { isNumber: t$, objectEach: tJ } = tu;
        class tQ {
          dSetter() {
            let t = this.paths,
              e = null == t ? void 0 : t[0],
              i = null == t ? void 0 : t[1],
              s = this.now || 0,
              o = [];
            if (1 !== s && e && i)
              if (e.length === i.length && s < 1)
                for (let t = 0; t < i.length; t++) {
                  let r = e[t],
                    n = i[t],
                    a = [];
                  for (let t = 0; t < n.length; t++) {
                    let e = r[t],
                      i = n[t];
                    t$(e) && t$(i) && ("A" !== n[0] || (4 !== t && 5 !== t))
                      ? (a[t] = e + s * (i - e))
                      : (a[t] = i);
                  }
                  o.push(a);
                }
              else o = i;
            else o = this.toD || [];
            this.elem.attr("d", o, void 0, !0);
          }
          update() {
            let t = this.elem,
              e = this.prop,
              i = this.now,
              s = this.options.step;
            (this[e + "Setter"]
              ? this[e + "Setter"]()
              : t.attr
                ? t.element && t.attr(e, i, null, !0)
                : (t.style[e] = i + this.unit),
              s && s.call(t, i, this));
          }
          run(t, e, i) {
            let s = this,
              o = s.options,
              r = function (t) {
                return !r.stopped && s.step(t);
              },
              n =
                tK.requestAnimationFrame ||
                function (t) {
                  setTimeout(t, 13);
                },
              a = function () {
                for (let t = 0; t < tQ.timers.length; t++)
                  tQ.timers[t]() || tQ.timers.splice(t--, 1);
                tQ.timers.length && n(a);
              };
            t !== e || this.elem["forceAnimate:" + this.prop]
              ? ((this.startTime = +new Date()),
                (this.start = t),
                (this.end = e),
                (this.unit = i),
                (this.now = this.start),
                (this.pos = 0),
                (r.elem = this.elem),
                (r.prop = this.prop),
                r() && 1 === tQ.timers.push(r) && n(a))
              : (delete o.curAnim[this.prop],
                o.complete && 0 === Object.keys(o.curAnim).length && o.complete.call(this.elem));
          }
          step(t) {
            let e,
              i,
              s = +new Date(),
              o = this.options,
              r = this.elem,
              n = o.complete,
              a = o.duration,
              l = o.curAnim;
            return (
              r.attr && !r.element
                ? (e = !1)
                : t || s >= a + this.startTime
                  ? ((this.now = this.end),
                    (this.pos = 1),
                    this.update(),
                    (l[this.prop] = !0),
                    (i = !0),
                    tJ(l, function (t) {
                      !0 !== t && (i = !1);
                    }),
                    i && n && n.call(r),
                    (e = !1))
                  : ((this.pos = o.easing((s - this.startTime) / a)),
                    (this.now = this.start + (this.end - this.start) * this.pos),
                    this.update(),
                    (e = !0)),
              e
            );
          }
          initPath(t, e, i) {
            let s = t.startX,
              o = t.endX,
              r = i.slice(),
              n = t.isArea,
              a = n ? 2 : 1,
              l = e && i.length > e.length && i.hasStackedCliffs,
              h,
              d,
              c,
              p,
              u = null == e ? void 0 : e.slice();
            if (!u || l) return [r, r];
            function g(t, e) {
              for (; t.length < d;) {
                let i = t[0],
                  s = e[d - t.length];
                if (
                  (s &&
                    "M" === i[0] &&
                    ("C" === s[0]
                      ? (t[0] = ["C", i[1], i[2], i[1], i[2], i[1], i[2]])
                      : (t[0] = ["L", i[1], i[2]])),
                  t.unshift(i),
                  n)
                ) {
                  let e = t.pop();
                  t.push(t[t.length - 1], e);
                }
              }
            }
            function f(t) {
              for (; t.length < d;) {
                let e = t[Math.floor(t.length / a) - 1].slice();
                if (("C" === e[0] && ((e[1] = e[5]), (e[2] = e[6])), n)) {
                  let i = t[Math.floor(t.length / a)].slice();
                  t.splice(t.length / 2, 0, e, i);
                } else t.push(e);
              }
            }
            if (s && o && o.length) {
              for (c = 0; c < s.length; c++) {
                if (s[c] === o[0]) {
                  h = c;
                  break;
                }
                if (s[0] === o[o.length - s.length + c]) {
                  ((h = c), (p = !0));
                  break;
                }
                if (s[s.length - 1] === o[o.length - s.length + c]) {
                  h = s.length - c;
                  break;
                }
              }
              void 0 === h && (u = []);
            }
            return (
              u.length && t$(h) && ((d = r.length + h * a), p ? (g(u, r), f(r)) : (g(r, u), f(u))),
              [u, r]
            );
          }
          fillSetter() {
            tQ.prototype.strokeSetter.apply(this, arguments);
          }
          strokeSetter() {
            this.elem.attr(this.prop, t_(this.start).tweenTo(t_(this.end), this.pos), void 0, !0);
          }
          constructor(t, e, i) {
            ((this.pos = NaN), (this.options = e), (this.elem = t), (this.prop = i));
          }
        }
        tQ.timers = [];
        let {
          defined: t0,
          getStyle: t1,
          isArray: t2,
          isNumber: t3,
          isObject: t5,
          merge: t6,
          objectEach: t9,
          pick: t4
        } = tu;
        function t8(t) {
          return t5(t) ? t6({ duration: 500, defer: 0 }, t) : { duration: 500 * !!t, defer: 0 };
        }
        function t7(t, e) {
          let i = tQ.timers.length;
          for (; i--;)
            tQ.timers[i].elem !== t ||
              (e && e !== tQ.timers[i].prop) ||
              (tQ.timers[i].stopped = !0);
        }
        let et = {
            animate: function (t, e, i) {
              let s,
                o = "",
                r,
                n,
                a;
              (t5(i) || ((a = arguments), (i = { duration: a[2], easing: a[3], complete: a[4] })),
                t3(i.duration) || (i.duration = 400),
                (i.easing =
                  "function" == typeof i.easing ? i.easing : Math[i.easing] || Math.easeInOutSine),
                (i.curAnim = t6(e)),
                t9(e, function (a, l) {
                  (t7(t, l),
                    (n = new tQ(t, i, l)),
                    (r = void 0),
                    "d" === l && t2(e.d)
                      ? ((n.paths = n.initPath(t, t.pathArray, e.d)),
                        (n.toD = e.d),
                        (s = 0),
                        (r = 1))
                      : t.attr
                        ? (s = t.attr(l))
                        : ((s = parseFloat(t1(t, l)) || 0), "opacity" !== l && (o = "px")),
                    r || (r = a),
                    "string" == typeof r && r.match("px") && (r = r.replace(/px/g, "")),
                    n.run(s, r, o));
                }));
            },
            animObject: t8,
            getDeferredAnimation: function (t, e, i) {
              let s = t8(e),
                o = i ? [i] : t.series,
                r = 0,
                n = 0;
              return (
                o.forEach((t) => {
                  let i = t8(t.options.animation);
                  ((r = t5(e) && t0(e.defer) ? s.defer : Math.max(r, i.duration + i.defer)),
                    (n = Math.min(s.duration, i.duration)));
                }),
                t.renderer.forExport && (r = 0),
                { defer: Math.max(0, r - n), duration: Math.min(r, n) }
              );
            },
            setAnimation: function (t, e) {
              e.renderer.globalAnimation = t4(t, e.options.chart.animation, !0);
            },
            stop: t7
          },
          { SVG_NS: ee, win: ei } = G,
          {
            attr: es,
            createElement: eo,
            css: er,
            error: en,
            isFunction: ea,
            isString: el,
            objectEach: eh,
            splat: ed
          } = tu,
          { trustedTypes: ec } = ei,
          ep = ec && ea(ec.createPolicy) && ec.createPolicy("highcharts", { createHTML: (t) => t }),
          eu = ep ? ep.createHTML("") : "";
        class eg {
          static filterUserAttributes(t) {
            return (
              eh(t, (e, i) => {
                let s = !0;
                (-1 === eg.allowedAttributes.indexOf(i) && (s = !1),
                  -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(i) &&
                    (s = el(e) && eg.allowedReferences.some((t) => 0 === e.indexOf(t))),
                  s ||
                    (en(33, !1, void 0, { "Invalid attribute in config": "".concat(i) }),
                    delete t[i]),
                  el(e) && t[i] && (t[i] = e.replace(/</g, "&lt;")));
              }),
              t
            );
          }
          static parseStyle(t) {
            return t.split(";").reduce((t, e) => {
              let i = e.split(":").map((t) => t.trim()),
                s = i.shift();
              return (
                s &&
                  i.length &&
                  (t[s.replace(/-([a-z])/g, (t) => t[1].toUpperCase())] = i.join(":")),
                t
              );
            }, {});
          }
          static setElementHTML(t, e) {
            ((t.innerHTML = eg.emptyHTML), e && new eg(e).addToDOM(t));
          }
          addToDOM(t) {
            return (function t(e, i) {
              let s;
              return (
                ed(e).forEach(function (e) {
                  let o,
                    r = e.tagName,
                    n = e.textContent ? G.doc.createTextNode(e.textContent) : void 0,
                    a = eg.bypassHTMLFiltering;
                  if (r)
                    if ("#text" === r) o = n;
                    else if (-1 !== eg.allowedTags.indexOf(r) || a) {
                      let s = "svg" === r ? ee : i.namespaceURI || ee,
                        l = G.doc.createElementNS(s, r),
                        h = e.attributes || {};
                      (eh(e, function (t, e) {
                        "tagName" !== e &&
                          "attributes" !== e &&
                          "children" !== e &&
                          "style" !== e &&
                          "textContent" !== e &&
                          (h[e] = t);
                      }),
                        es(l, a ? h : eg.filterUserAttributes(h)),
                        e.style && er(l, e.style),
                        n && l.appendChild(n),
                        t(e.children || [], l),
                        (o = l));
                    } else en(33, !1, void 0, { "Invalid tagName in config": r });
                  (o && i.appendChild(o), (s = o));
                }),
                s
              );
            })(this.nodes, t);
          }
          parseMarkup(t) {
            let e,
              i = [];
            t = t.trim().replace(/ style=(["'])/g, " data-style=$1");
            try {
              e = new DOMParser().parseFromString(ep ? ep.createHTML(t) : t, "text/html");
            } catch (t) {}
            if (!e) {
              let i = eo("div");
              ((i.innerHTML = t), (e = { body: i }));
            }
            let s = (t, e) => {
              let i = t.nodeName.toLowerCase(),
                o = { tagName: i };
              "#text" === i && (o.textContent = t.textContent || "");
              let r = t.attributes;
              if (r) {
                let t = {};
                ([].forEach.call(r, (e) => {
                  "data-style" === e.name
                    ? (o.style = eg.parseStyle(e.value))
                    : (t[e.name] = e.value);
                }),
                  (o.attributes = t));
              }
              if (t.childNodes.length) {
                let e = [];
                ([].forEach.call(t.childNodes, (t) => {
                  s(t, e);
                }),
                  e.length && (o.children = e));
              }
              e.push(o);
            };
            return ([].forEach.call(e.body.childNodes, (t) => s(t, i)), i);
          }
          constructor(t) {
            this.nodes = "string" == typeof t ? this.parseMarkup(t) : t;
          }
        }
        ((eg.allowedAttributes = [
          "alt",
          "aria-controls",
          "aria-describedby",
          "aria-expanded",
          "aria-haspopup",
          "aria-hidden",
          "aria-label",
          "aria-labelledby",
          "aria-live",
          "aria-pressed",
          "aria-readonly",
          "aria-roledescription",
          "aria-selected",
          "class",
          "clip-path",
          "color",
          "colspan",
          "cx",
          "cy",
          "d",
          "dx",
          "dy",
          "disabled",
          "fill",
          "filterUnits",
          "flood-color",
          "flood-opacity",
          "height",
          "href",
          "id",
          "in",
          "in2",
          "markerHeight",
          "markerWidth",
          "offset",
          "opacity",
          "operator",
          "orient",
          "padding",
          "paddingLeft",
          "paddingRight",
          "patternUnits",
          "r",
          "radius",
          "refX",
          "refY",
          "role",
          "scope",
          "slope",
          "src",
          "startOffset",
          "stdDeviation",
          "stroke",
          "stroke-linecap",
          "stroke-width",
          "style",
          "tableValues",
          "result",
          "rowspan",
          "summary",
          "target",
          "tabindex",
          "text-align",
          "text-anchor",
          "textAnchor",
          "textLength",
          "title",
          "type",
          "valign",
          "width",
          "x",
          "x1",
          "x2",
          "xlink:href",
          "y",
          "y1",
          "y2",
          "zIndex"
        ]),
          (eg.allowedReferences = ["https://", "http://", "mailto:", "/", "../", "./", "#"]),
          (eg.allowedTags = [
            "a",
            "abbr",
            "b",
            "br",
            "button",
            "caption",
            "circle",
            "clipPath",
            "code",
            "dd",
            "defs",
            "div",
            "dl",
            "dt",
            "em",
            "feComponentTransfer",
            "feComposite",
            "feDropShadow",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feMorphology",
            "feOffset",
            "feMerge",
            "feMergeNode",
            "filter",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "hr",
            "i",
            "img",
            "li",
            "linearGradient",
            "marker",
            "ol",
            "p",
            "path",
            "pattern",
            "pre",
            "rect",
            "small",
            "span",
            "stop",
            "strong",
            "style",
            "sub",
            "sup",
            "svg",
            "table",
            "text",
            "textPath",
            "thead",
            "title",
            "tbody",
            "tspan",
            "td",
            "th",
            "tr",
            "u",
            "ul",
            "#text"
          ]),
          (eg.emptyHTML = eu),
          (eg.bypassHTMLFiltering = !1));
        let { defaultOptions: ef, defaultTime: em } = tX,
          { pageLang: ex } = G,
          {
            extend: ey,
            getNestedProperty: ev,
            isArray: eb,
            isNumber: ek,
            isObject: ew,
            isString: eM,
            pick: eS,
            ucfirst: eT
          } = tu,
          eC = {
            add: (t, e) => t + e,
            divide: (t, e) => (0 !== e ? t / e : ""),
            eq: (t, e) => t == e,
            each: function (t) {
              let e = arguments[arguments.length - 1];
              return (
                !!eb(t) &&
                t
                  .map((i, s) =>
                    eP(
                      e.body,
                      ey(ew(i) ? i : { "@this": i }, {
                        "@index": s,
                        "@first": 0 === s,
                        "@last": s === t.length - 1
                      })
                    )
                  )
                  .join("")
              );
            },
            ge: (t, e) => t >= e,
            gt: (t, e) => t > e,
            if: (t) => !!t,
            le: (t, e) => t <= e,
            lt: (t, e) => t < e,
            multiply: (t, e) => t * e,
            ne: (t, e) => t != e,
            subtract: (t, e) => t - e,
            ucfirst: eT,
            unless: (t) => !t
          },
          eA = {};
        function eP() {
          var t;
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            i = arguments.length > 1 ? arguments[1] : void 0,
            s = arguments.length > 2 ? arguments[2] : void 0,
            o = /\{([a-zA-Z\u00C0-\u017F\d:\.,;\-\/<>\[\]%_@+"'’= #\(\)]+)\}/g,
            r = /\(([a-zA-Z\u00C0-\u017F\d:\.,;\-\/<>\[\]%_@+"'= ]+)\)/g,
            n = [],
            a = /f$/,
            l = /\.(\d)/,
            h = (null == s || null == (t = s.options) ? void 0 : t.lang) || ef.lang,
            d = (null == s ? void 0 : s.time) || em,
            c = (null == s ? void 0 : s.numberFormatter) || eL,
            p = function () {
              let t,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
              return (
                "true" === e ||
                ("false" !== e &&
                  ((t = Number(e)).toString() === e
                    ? t
                    : /^["'].+["']$/.test(e)
                      ? e.slice(1, -1)
                      : ev(e, i)))
              );
            },
            u,
            g,
            f = 0,
            m;
          for (; null !== (u = o.exec(e));) {
            let t = u,
              s = r.exec(u[1]);
            (s && ((u = s), (m = !0)),
              (null == g ? void 0 : g.isBlock) ||
                (g = {
                  ctx: i,
                  expression: u[1],
                  find: u[0],
                  isBlock: "#" === u[1].charAt(0),
                  start: u.index,
                  startInner: u.index + u[0].length,
                  length: u[0].length
                }));
            let o = (g.isBlock ? t : u)[1].split(" ")[0].replace("#", "");
            eC[o] && (g.isBlock && o === g.fn && f++, g.fn || (g.fn = o));
            let a = "else" === u[1];
            if (g.isBlock && g.fn && (u[1] === "/".concat(g.fn) || a))
              if (f) !a && f--;
              else {
                let t = g.startInner,
                  i = e.substr(t, u.index - t);
                (void 0 === g.body
                  ? ((g.body = i), (g.startInner = u.index + u[0].length))
                  : (g.elseBody = i),
                  (g.find += i + u[0]),
                  a || (n.push(g), (g = void 0)));
              }
            else g.isBlock || n.push(g);
            if (s && !(null == g ? void 0 : g.isBlock)) break;
          }
          return (
            n.forEach((t) => {
              let o,
                n,
                { body: u, elseBody: g, expression: f, fn: m } = t;
              if (m) {
                let e = [t],
                  r = [],
                  a = f.length,
                  l = 0,
                  h;
                for (n = 0; n <= a; n++) {
                  let t = f.charAt(n);
                  (h || ('"' !== t && "'" !== t) ? h === t && (h = "") : (h = t),
                    h || (" " !== t && n !== a) || (r.push(f.substr(l, n - l)), (l = n + 1)));
                }
                for (n = eC[m].length; n--;) e.unshift(p(r[n + 1]));
                ((o = eC[m].apply(i, e)),
                  t.isBlock && "boolean" == typeof o && (o = eP(o ? u : g, i, s)));
              } else {
                let e = /^["'].+["']$/.test(f) ? [f] : f.split(":");
                if (((o = p(e.shift() || "")), e.length && "number" == typeof o)) {
                  let t = e.join(":");
                  if (a.test(t)) {
                    let e = parseInt((t.match(l) || ["", "-1"])[1], 10);
                    null !== o &&
                      (o = c(o, e, h.decimalPoint, t.indexOf(",") > -1 ? h.thousandsSep : ""));
                  } else o = d.dateFormat(t, o);
                }
                ((r.lastIndex = 0), r.test(t.find) && eM(o) && (o = '"'.concat(o, '"')));
              }
              e = e.replace(t.find, eS(o, ""));
            }),
            m ? eP(e, i, s) : e
          );
        }
        function eL(t, e, i, s) {
          var o, r;
          e *= 1;
          let n,
            a,
            [l, h] = (t = +t || 0).toString().split("e").map(Number),
            d =
              (null === this || void 0 === this || null == (r = this.options) ? void 0 : r.lang) ||
              ef.lang,
            c = (t.toString().split(".")[1] || "").split("e")[0].length,
            p = e,
            u = {};
          (null != i || (i = d.decimalPoint),
            null != s || (s = d.thousandsSep),
            -1 === e
              ? (e = Math.min(c, 20))
              : ek(e)
                ? e &&
                  h < 0 &&
                  ((a = e + h) >= 0
                    ? ((l = +l.toExponential(a).split("e")[0]), (e = a))
                    : ((l = Math.floor(l)),
                      (t = e < 20 ? +(l * Math.pow(10, h)).toFixed(e) : 0),
                      (h = 0)))
                : (e = 2),
            h && (null != e || (e = 2), (t = l)),
            ek(e) && e >= 0 && ((u.minimumFractionDigits = e), (u.maximumFractionDigits = e)),
            "" === s && (u.useGrouping = !1));
          let g = s || i,
            f = g
              ? "en"
              : (null === this || void 0 === this ? void 0 : this.locale) || d.locale || ex,
            m = JSON.stringify(u) + f;
          return (
            (n = (null != (o = eA[m]) ? o : (eA[m] = new Intl.NumberFormat(f, u))).format(t)),
            g &&
              (n = n
                .replace(/([,\.])/g, "_$1")
                .replace(/_\,/g, null != s ? s : ",")
                .replace("_.", null != i ? i : ".")),
            ((e || 0 != +n) && (!(h < 0) || p)) || (n = "0"),
            h && 0 != +n && (n += "e" + (h < 0 ? "" : "+") + h),
            n
          );
        }
        let eO = {
          dateFormat: function (t, e, i) {
            return em.dateFormat(t, e, i);
          },
          format: eP,
          helpers: eC,
          numberFormat: eL
        };
        (((u = M || (M = {})).rendererTypes = {}),
          (u.getRendererType = function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
            return u.rendererTypes[t] || u.rendererTypes[o];
          }),
          (u.registerRendererType = function (t, e, i) {
            ((u.rendererTypes[t] = e), (!o || i) && ((o = t), (G.Renderer = e)));
          }));
        let eE = M,
          { clamp: eI, pick: eD, pushUnique: eB, stableSort: eN } = tu;
        (S || (S = {})).distribute = function t(e, i, s) {
          let o = e,
            r = o.reducedLen || i,
            n = (t, e) => t.target - e.target,
            a = [],
            l = e.length,
            h = [],
            d = a.push,
            c,
            p,
            u,
            g = !0,
            f,
            m,
            x = 0,
            y;
          for (c = l; c--;) x += e[c].size;
          if (x > r) {
            for (
              eN(e, (t, e) => (e.rank || 0) - (t.rank || 0)),
                u = (y = e[0].rank === e[e.length - 1].rank) ? l / 2 : -1,
                p = y ? u : l - 1;
              u && x > r;
            )
              ((f = e[(c = Math.floor(p))]),
                eB(h, c) && (x -= f.size),
                (p += u),
                y && p >= e.length && ((u /= 2), (p = u)));
            h.sort((t, e) => e - t).forEach((t) => d.apply(a, e.splice(t, 1)));
          }
          for (
            eN(e, n),
              e = e.map((t) => ({ size: t.size, targets: [t.target], align: eD(t.align, 0.5) }));
            g;
          ) {
            for (c = e.length; c--;)
              ((f = e[c]),
                (m = (Math.min.apply(0, f.targets) + Math.max.apply(0, f.targets)) / 2),
                (f.pos = eI(m - f.size * f.align, 0, i - f.size)));
            for (c = e.length, g = !1; c--;)
              c > 0 &&
                e[c - 1].pos + e[c - 1].size > e[c].pos &&
                ((e[c - 1].size += e[c].size),
                (e[c - 1].targets = e[c - 1].targets.concat(e[c].targets)),
                (e[c - 1].align = 0.5),
                e[c - 1].pos + e[c - 1].size > i && (e[c - 1].pos = i - e[c - 1].size),
                e.splice(c, 1),
                (g = !0));
          }
          return (
            d.apply(o, a),
            (c = 0),
            e.some((e) => {
              let r = 0;
              return (e.targets || []).some(() =>
                ((o[c].pos = e.pos + r), void 0 !== s && Math.abs(o[c].pos - o[c].target) > s)
                  ? (o.slice(0, c + 1).forEach((t) => delete t.pos),
                    (o.reducedLen = (o.reducedLen || i) - 0.1 * i),
                    o.reducedLen > 0.1 * i && t(o, i, s),
                    !0)
                  : ((r += o[c].size), c++, !1)
              );
            }),
            eN(o, n),
            o
          );
        };
        let ez = S,
          { animate: eR, animObject: eW, stop: eX } = et,
          { deg2rad: eH, doc: eF, svg: eG, SVG_NS: eY, win: ej, isFirefox: eU } = G,
          {
            addEvent: eV,
            attr: eZ,
            createElement: eq,
            crisp: e_,
            css: eK,
            defined: e$,
            erase: eJ,
            extend: eQ,
            fireEvent: e0,
            getAlignFactor: e1,
            isArray: e2,
            isFunction: e3,
            isNumber: e5,
            isObject: e6,
            isString: e9,
            merge: e4,
            objectEach: e8,
            pick: e7,
            pInt: it,
            pushUnique: ie,
            replaceNested: ii,
            syncTimeout: is,
            uniqueKey: io
          } = tu;
        class ir {
          _defaultGetter(t) {
            let e = e7(
              this[t + "Value"],
              this[t],
              this.element ? this.element.getAttribute(t) : null,
              0
            );
            return (/^-?[\d\.]+$/.test(e) && (e = parseFloat(e)), e);
          }
          _defaultSetter(t, e, i) {
            i.setAttribute(e, t);
          }
          add(t) {
            let e,
              i = this.renderer,
              s = this.element;
            return (
              t && (this.parentGroup = t),
              void 0 !== this.textStr && "text" === this.element.nodeName && i.buildText(this),
              (this.added = !0),
              (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()),
              e || (t ? t.element : i.box).appendChild(s),
              this.onAdd && this.onAdd(),
              this
            );
          }
          addClass(t, e) {
            let i = e ? "" : this.attr("class") || "";
            return (
              (t = (t || "")
                .split(/ /g)
                .reduce(
                  function (t, e) {
                    return (-1 === i.indexOf(e) && t.push(e), t);
                  },
                  i ? [i] : []
                )
                .join(" ")) !== i && this.attr("class", t),
              this
            );
          }
          afterSetters() {
            this.doTransform && (this.updateTransform(), (this.doTransform = !1));
          }
          align(t, e, i) {
            let s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
              o = this.renderer,
              r = o.alignedObjects,
              n = !!t;
            t
              ? ((this.alignOptions = t), (this.alignByTranslate = e), (this.alignTo = i))
              : ((t = this.alignOptions || {}), (e = this.alignByTranslate), (i = this.alignTo));
            let a = !i || e9(i) ? i || "renderer" : void 0;
            a && (n && ie(r, this), (i = void 0));
            let l = e7(i, o[a], o),
              h = (l.x || 0) + (t.x || 0) + ((l.width || 0) - (t.width || 0)) * e1(t.align),
              d =
                (l.y || 0) + (t.y || 0) + ((l.height || 0) - (t.height || 0)) * e1(t.verticalAlign),
              c = { "text-align": null == t ? void 0 : t.align };
            return (
              (c[e ? "translateX" : "x"] = Math.round(h)),
              (c[e ? "translateY" : "y"] = Math.round(d)),
              s && (this[this.placed ? "animate" : "attr"](c), (this.placed = !0)),
              (this.alignAttr = c),
              this
            );
          }
          alignSetter(t) {
            let e = { left: "start", center: "middle", right: "end" };
            e[t] && ((this.alignValue = t), this.element.setAttribute("text-anchor", e[t]));
          }
          animate(t, e, i) {
            let s = eW(e7(e, this.renderer.globalAnimation, !0)),
              o = s.defer;
            return (
              eF.hidden && (s.duration = 0),
              0 !== s.duration
                ? (i && (s.complete = i),
                  is(() => {
                    this.element && eR(this, t, s);
                  }, o))
                : (this.attr(t, void 0, i || s.complete),
                  e8(
                    t,
                    function (t, e) {
                      s.step && s.step.call(this, t, { prop: e, pos: 1, elem: this });
                    },
                    this
                  )),
              this
            );
          }
          applyTextOutline(t) {
            let e = this.element;
            -1 !== t.indexOf("contrast") &&
              (t = t.replace(/contrast/g, this.renderer.getContrast(e.style.fill)));
            let i = t.indexOf(" "),
              s = t.substring(i + 1),
              o = t.substring(0, i);
            if (o && "none" !== o && G.svg) {
              ((this.fakeTS = !0),
                (o = o.replace(/(^[\d\.]+)(.*?)$/g, function (t, e, i) {
                  return 2 * Number(e) + i;
                })),
                this.removeTextOutline());
              let t = eF.createElementNS(eY, "tspan");
              eZ(t, {
                class: "highcharts-text-outline",
                fill: s,
                stroke: s,
                "stroke-width": o,
                "stroke-linejoin": "round"
              });
              let i = e.querySelector("textPath") || e;
              [].forEach.call(i.childNodes, (e) => {
                let i = e.cloneNode(!0);
                (i.removeAttribute &&
                  ["fill", "stroke", "stroke-width", "stroke"].forEach((t) => i.removeAttribute(t)),
                  t.appendChild(i));
              });
              let r = 0;
              [].forEach.call(i.querySelectorAll("text tspan"), (t) => {
                r += Number(t.getAttribute("dy"));
              });
              let n = eF.createElementNS(eY, "tspan");
              ((n.textContent = "​"),
                eZ(n, { x: Number(e.getAttribute("x")), dy: -r }),
                t.appendChild(n),
                i.insertBefore(t, i.firstChild));
            }
          }
          attr(t, e, i, s) {
            let { element: o } = this,
              r = ir.symbolCustomAttribs,
              n,
              a,
              l = this,
              h;
            return (
              "string" == typeof t && void 0 !== e && ((n = t), ((t = {})[n] = e)),
              "string" == typeof t
                ? (l = (this[t + "Getter"] || this._defaultGetter).call(this, t, o))
                : (e8(
                    t,
                    function (e, i) {
                      ((h = !1),
                        s || eX(this, i),
                        this.symbolName &&
                          -1 !== r.indexOf(i) &&
                          (a || (this.symbolAttr(t), (a = !0)), (h = !0)),
                        this.rotation && ("x" === i || "y" === i) && (this.doTransform = !0),
                        h || (this[i + "Setter"] || this._defaultSetter).call(this, e, i, o));
                    },
                    this
                  ),
                  this.afterSetters()),
              i && i.call(this),
              l
            );
          }
          clip(t) {
            if (t && !t.clipPath) {
              let e = io() + "-",
                i = this.renderer.createElement("clipPath").attr({ id: e }).add(this.renderer.defs);
              (eQ(t, { clipPath: i, id: e, count: 0 }), t.add(i));
            }
            return this.attr(
              "clip-path",
              t ? "url(".concat(this.renderer.url, "#").concat(t.id, ")") : "none"
            );
          }
          crisp(t, e) {
            e = Math.round(e || t.strokeWidth || 0);
            let i = t.x || this.x || 0,
              s = t.y || this.y || 0,
              o = (t.width || this.width || 0) + i,
              r = (t.height || this.height || 0) + s,
              n = e_(i, e),
              a = e_(s, e);
            return (
              eQ(t, { x: n, y: a, width: e_(o, e) - n, height: e_(r, e) - a }),
              e$(t.strokeWidth) && (t.strokeWidth = e),
              t
            );
          }
          complexColor(t, e, i) {
            let s = this.renderer,
              o,
              r,
              n,
              a,
              l,
              h,
              d,
              c,
              p,
              u,
              g = [],
              f;
            e0(this.renderer, "complexColor", { args: arguments }, function () {
              if (
                (t.radialGradient
                  ? (r = "radialGradient")
                  : t.linearGradient && (r = "linearGradient"),
                r)
              ) {
                if (
                  ((n = t[r]),
                  (l = s.gradients),
                  (h = t.stops),
                  (p = i.radialReference),
                  e2(n) &&
                    (t[r] = n =
                      { x1: n[0], y1: n[1], x2: n[2], y2: n[3], gradientUnits: "userSpaceOnUse" }),
                  "radialGradient" === r &&
                    p &&
                    !e$(n.gradientUnits) &&
                    ((a = n),
                    (n = e4(n, s.getRadialAttr(p, a), { gradientUnits: "userSpaceOnUse" }))),
                  e8(n, function (t, e) {
                    "id" !== e && g.push(e, t);
                  }),
                  e8(h, function (t) {
                    g.push(t);
                  }),
                  l[(g = g.join(","))])
                )
                  u = l[g].attr("id");
                else {
                  n.id = u = io();
                  let t = (l[g] = s.createElement(r).attr(n).add(s.defs));
                  ((t.radAttr = a),
                    (t.stops = []),
                    h.forEach(function (e) {
                      0 === e[1].indexOf("rgba")
                        ? ((d = (o = tq.parse(e[1])).get("rgb")), (c = o.get("a")))
                        : ((d = e[1]), (c = 1));
                      let i = s
                        .createElement("stop")
                        .attr({ offset: e[0], "stop-color": d, "stop-opacity": c })
                        .add(t);
                      t.stops.push(i);
                    }));
                }
                ((f = "url(" + s.url + "#" + u + ")"),
                  i.setAttribute(e, f),
                  (i.gradient = g),
                  (t.toString = function () {
                    return f;
                  }));
              }
            });
          }
          css(t) {
            let e = this.styles,
              i = {},
              s = this.element,
              o,
              r = !e;
            if (
              (e &&
                e8(t, function (t, s) {
                  e && e[s] !== t && ((i[s] = t), (r = !0));
                }),
              r)
            ) {
              (e && (t = eQ(e, i)),
                null === t.width || "auto" === t.width
                  ? delete this.textWidth
                  : "text" === s.nodeName.toLowerCase() &&
                    t.width &&
                    (o = this.textWidth = it(t.width)),
                eQ(this.styles, t),
                o && !eG && this.renderer.forExport && delete t.width);
              let r = (eU && t.fontSize) || null;
              r && (e5(r) || /^\d+$/.test(r)) && (t.fontSize += "px");
              let n = e4(t);
              (s.namespaceURI === this.SVG_NS &&
                (["textOutline", "textOverflow", "whiteSpace", "width"].forEach(
                  (t) => n && delete n[t]
                ),
                n.color && ((n.fill = n.color), delete n.color)),
                eK(s, n));
            }
            return (
              this.added &&
                ("text" === this.element.nodeName && this.renderer.buildText(this),
                t.textOutline && this.applyTextOutline(t.textOutline)),
              this
            );
          }
          dashstyleSetter(t) {
            let e,
              i = this["stroke-width"];
            if (("inherit" === i && (i = 1), t)) {
              let s = (t = t.toLowerCase())
                .replace("shortdashdotdot", "3,1,1,1,1,1,")
                .replace("shortdashdot", "3,1,1,1")
                .replace("shortdot", "1,1,")
                .replace("shortdash", "3,1,")
                .replace("longdash", "8,3,")
                .replace(/dot/g, "1,3,")
                .replace("dash", "4,3,")
                .replace(/,$/, "")
                .split(",");
              for (e = s.length; e--;) s[e] = "" + it(s[e]) * e7(i, NaN);
              ((t = s.join(",").replace(/NaN/g, "none")),
                this.element.setAttribute("stroke-dasharray", t));
            }
          }
          destroy() {
            let t = this,
              e = t.element || {},
              i = t.renderer,
              s = e.ownerSVGElement,
              o = ("SPAN" === e.nodeName && t.parentGroup) || void 0,
              r,
              n;
            if (
              ((e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null),
              eX(t),
              t.clipPath && s)
            ) {
              let e = t.clipPath;
              ([].forEach.call(s.querySelectorAll("[clip-path],[CLIP-PATH]"), function (t) {
                t.getAttribute("clip-path").indexOf(e.element.id) > -1 &&
                  t.removeAttribute("clip-path");
              }),
                (t.clipPath = e.destroy()));
            }
            if (t.stops) {
              for (n = 0; n < t.stops.length; n++) t.stops[n].destroy();
              ((t.stops.length = 0), (t.stops = void 0));
            }
            for (
              t.safeRemoveChild(e);
              (null == o ? void 0 : o.div) && 0 === o.div.childNodes.length;
            )
              ((r = o.parentGroup), t.safeRemoveChild(o.div), delete o.div, (o = r));
            (t.alignOptions && eJ(i.alignedObjects, t),
              e8(t, (e, i) => {
                var s, o, r;
                (((null == (s = t[i]) ? void 0 : s.parentGroup) === t ||
                  -1 !== ["connector", "foreignObject"].indexOf(i)) &&
                  (null == (r = t[i]) || null == (o = r.destroy) || o.call(r)),
                  delete t[i]);
              }));
          }
          dSetter(t, e, i) {
            (e2(t) &&
              ("string" == typeof t[0] && (t = this.renderer.pathToSegments(t)),
              (this.pathArray = t),
              (t = t.reduce(
                (t, e, i) =>
                  (null == e ? void 0 : e.join)
                    ? (i ? t + " " : "") + e.join(" ")
                    : (e || "").toString(),
                ""
              ))),
              /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"),
              this[e] !== t && (i.setAttribute(e, t), (this[e] = t)));
          }
          fillSetter(t, e, i) {
            "string" == typeof t ? i.setAttribute(e, t) : t && this.complexColor(t, e, i);
          }
          hrefSetter(t, e, i) {
            i.setAttributeNS("http://www.w3.org/1999/xlink", e, t);
          }
          getBBox(t, e) {
            let i,
              s,
              o,
              r,
              { alignValue: n, element: a, renderer: l, styles: h, textStr: d } = this,
              { cache: c, cacheKeys: p } = l,
              u = a.namespaceURI === this.SVG_NS,
              g = e7(e, this.rotation, 0),
              f = l.styledMode ? a && ir.prototype.getStyle.call(a, "font-size") : h.fontSize;
            if (
              (e$(d) &&
                (-1 === (r = d.toString()).indexOf("<") && (r = r.replace(/\d/g, "0")),
                (r += [
                  "",
                  l.rootFontSize,
                  f,
                  g,
                  this.textWidth,
                  n,
                  h.lineClamp,
                  h.textOverflow,
                  h.fontWeight
                ].join(","))),
              r && !t && (i = c[r]),
              !i || i.polygon)
            ) {
              if (u || l.forExport) {
                try {
                  ((o =
                    this.fakeTS &&
                    function (t) {
                      let e = a.querySelector(".highcharts-text-outline");
                      e && eK(e, { display: t });
                    }),
                    e3(o) && o("none"),
                    (i = a.getBBox
                      ? eQ({}, a.getBBox())
                      : { width: a.offsetWidth, height: a.offsetHeight, x: 0, y: 0 }),
                    e3(o) && o(""));
                } catch (t) {}
                (!i || i.width < 0) && (i = { x: 0, y: 0, width: 0, height: 0 });
              } else i = this.htmlGetBBox();
              ((s = i.height),
                u &&
                  (i.height = s =
                    { "11px,17": 14, "13px,20": 16 }[
                      "".concat(f || "", ",").concat(Math.round(s))
                    ] || s),
                g && (i = this.getRotatedBox(i, g)));
              let t = { bBox: i };
              (e0(this, "afterGetBBox", t), (i = t.bBox));
            }
            if (r && ("" === d || i.height > 0)) {
              for (; p.length > 250;) delete c[p.shift()];
              (c[r] || p.push(r), (c[r] = i));
            }
            return i;
          }
          getRotatedBox(t, e) {
            let { x: i, y: s, width: o, height: r } = t,
              {
                alignValue: n,
                translateY: a,
                rotationOriginX: l = 0,
                rotationOriginY: h = 0
              } = this,
              d = e1(n),
              c = Number(this.element.getAttribute("y") || 0) - (a ? 0 : s),
              p = e * eH,
              u = (e - 90) * eH,
              g = Math.cos(p),
              f = Math.sin(p),
              m = o * g,
              x = o * f,
              y = Math.cos(u),
              v = Math.sin(u),
              [[b, k], [w, M]] = [l, h].map((t) => [t - t * g, t * f]),
              S = i + d * (o - m) + b + M + c * y,
              T = S + m,
              C = T - r * y,
              A = C - m,
              P = s + c - d * x - k + w + c * v,
              L = P + x,
              O = L - r * v,
              E = O - x,
              I = Math.min(S, T, C, A),
              D = Math.min(P, L, O, E),
              B = Math.max(S, T, C, A) - I,
              N = Math.max(P, L, O, E) - D;
            return {
              x: I,
              y: D,
              width: B,
              height: N,
              polygon: [
                [S, P],
                [T, L],
                [C, O],
                [A, E]
              ]
            };
          }
          getStyle(t) {
            return ej.getComputedStyle(this.element || this, "").getPropertyValue(t);
          }
          hasClass(t) {
            return -1 !== ("" + this.attr("class")).split(" ").indexOf(t);
          }
          hide() {
            return this.attr({ visibility: "hidden" });
          }
          htmlGetBBox() {
            return { height: 0, width: 0, x: 0, y: 0 };
          }
          on(t, e) {
            let { onEvents: i } = this;
            return (i[t] && i[t](), (i[t] = eV(this.element, t, e)), this);
          }
          opacitySetter(t, e, i) {
            let s = Number(Number(t).toFixed(3));
            ((this.opacity = s), i.setAttribute(e, s));
          }
          reAlign() {
            var t;
            (null == (t = this.alignOptions) ? void 0 : t.width) &&
              "left" !== this.alignOptions.align &&
              ((this.alignOptions.width = this.getBBox().width), (this.placed = !1), this.align());
          }
          removeClass(t) {
            return this.attr(
              "class",
              ("" + this.attr("class"))
                .replace(e9(t) ? RegExp("(^| )".concat(t, "( |$)")) : t, " ")
                .replace(/ +/g, " ")
                .trim()
            );
          }
          removeTextOutline() {
            let t = this.element.querySelector("tspan.highcharts-text-outline");
            t && this.safeRemoveChild(t);
          }
          safeRemoveChild(t) {
            let e = t.parentNode;
            e && e.removeChild(t);
          }
          setRadialReference(t) {
            let e =
              (this.element.gradient && this.renderer.gradients[this.element.gradient]) || void 0;
            return (
              (this.element.radialReference = t),
              (null == e ? void 0 : e.radAttr) &&
                e.animate(this.renderer.getRadialAttr(t, e.radAttr)),
              this
            );
          }
          shadow(t) {
            var e;
            let { renderer: i } = this,
              s = e4(
                (null == (e = this.parentGroup) ? void 0 : e.rotation) === 90
                  ? { offsetX: -1, offsetY: -1 }
                  : {},
                e6(t) ? t : {}
              ),
              o = i.shadowDefinition(s);
            return this.attr({ filter: t ? "url(".concat(i.url, "#").concat(o, ")") : "none" });
          }
          show() {
            let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return this.attr({ visibility: t ? "inherit" : "visible" });
          }
          "stroke-widthSetter"(t, e, i) {
            ((this[e] = t), i.setAttribute(e, t));
          }
          strokeWidth() {
            if (!this.renderer.styledMode) return this["stroke-width"] || 0;
            let t = this.getStyle("stroke-width"),
              e = 0,
              i;
            return (
              /px$/.test(t)
                ? (e = it(t))
                : "" !== t &&
                  (eZ((i = eF.createElementNS(eY, "rect")), { width: t, "stroke-width": 0 }),
                  this.element.parentNode.appendChild(i),
                  (e = i.getBBox().width),
                  i.parentNode.removeChild(i)),
              e
            );
          }
          symbolAttr(t) {
            let e = this;
            (ir.symbolCustomAttribs.forEach(function (i) {
              e[i] = e7(t[i], e[i]);
            }),
              e.attr({ d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e) }));
          }
          textSetter(t) {
            t !== this.textStr &&
              (delete this.textPxLength,
              (this.textStr = t),
              this.added && this.renderer.buildText(this),
              this.reAlign());
          }
          titleSetter(t) {
            let e = this.element,
              i = e.getElementsByTagName("title")[0] || eF.createElementNS(this.SVG_NS, "title");
            (e.insertBefore ? e.insertBefore(i, e.firstChild) : e.appendChild(i),
              (i.textContent = ii(e7(t, ""), [/<[^>]*>/g, ""])
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")));
          }
          toFront() {
            let t = this.element;
            return (t.parentNode.appendChild(t), this);
          }
          translate(t, e) {
            return this.attr({ translateX: t, translateY: e });
          }
          updateTransform() {
            var t, e, i, s;
            let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform",
              {
                element: r,
                foreignObject: n,
                matrix: a,
                padding: l,
                rotation: h = 0,
                rotationOriginX: d,
                rotationOriginY: c,
                scaleX: p,
                scaleY: u,
                text: g,
                translateX: f = 0,
                translateY: m = 0
              } = this,
              x = ["translate(" + f + "," + m + ")"];
            (e$(a) && x.push("matrix(" + a.join(",") + ")"),
              h &&
                (x.push(
                  "rotate(" +
                    h +
                    " " +
                    (null != (t = null != (e = null != d ? d : r.getAttribute("x")) ? e : this.x)
                      ? t
                      : 0) +
                    " " +
                    (null != (i = null != (s = null != c ? c : r.getAttribute("y")) ? s : this.y)
                      ? i
                      : 0) +
                    ")"
                ),
                (null == g ? void 0 : g.element.tagName) !== "SPAN" ||
                  (null == g ? void 0 : g.foreignObject) ||
                  g.attr({
                    rotation: h,
                    rotationOriginX: (d || 0) - l,
                    rotationOriginY: (c || 0) - l
                  })),
              (e$(p) || e$(u)) && x.push("scale(" + e7(p, 1) + " " + e7(u, 1) + ")"),
              x.length &&
                !(g || this).textPath &&
                ((null == n ? void 0 : n.element) || r).setAttribute(o, x.join(" ")));
          }
          visibilitySetter(t, e, i) {
            ("inherit" === t ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t),
              (this[e] = t));
          }
          xGetter(t) {
            return (
              "circle" === this.element.nodeName &&
                ("x" === t ? (t = "cx") : "y" === t && (t = "cy")),
              this._defaultGetter(t)
            );
          }
          zIndexSetter(t, e) {
            let i = this.renderer,
              s = this.parentGroup,
              o = (s || i).element || i.box,
              r = this.element,
              n = o === i.box,
              a,
              l,
              h,
              d = !1,
              c,
              p = this.added,
              u;
            if (
              (e$(t)
                ? (r.setAttribute("data-z-index", t), (t *= 1), this[e] === t && (p = !1))
                : e$(this[e]) && r.removeAttribute("data-z-index"),
              (this[e] = t),
              p)
            ) {
              for (
                (t = this.zIndex) && s && (s.handleZ = !0), u = (a = o.childNodes).length - 1;
                u >= 0 && !d;
                u--
              )
                ((c = !e$((h = (l = a[u]).getAttribute("data-z-index")))),
                  l !== r &&
                    (t < 0 && c && !n && !u
                      ? (o.insertBefore(r, a[u]), (d = !0))
                      : (it(h) <= t || (c && (!e$(t) || t >= 0))) &&
                        (o.insertBefore(r, a[u + 1]), (d = !0))));
              d || (o.insertBefore(r, a[3 * !!n]), (d = !0));
            }
            return d;
          }
          constructor(t, e) {
            ((this.onEvents = {}),
              (this.opacity = 1),
              (this.SVG_NS = eY),
              (this.element =
                "span" === e || "body" === e ? eq(e) : eF.createElementNS(this.SVG_NS, e)),
              (this.renderer = t),
              (this.styles = {}),
              e0(this, "afterInit"));
          }
        }
        ((ir.symbolCustomAttribs = [
          "anchorX",
          "anchorY",
          "clockwise",
          "end",
          "height",
          "innerR",
          "r",
          "start",
          "width",
          "x",
          "y"
        ]),
          (ir.prototype.strokeSetter = ir.prototype.fillSetter),
          (ir.prototype.yGetter = ir.prototype.xGetter),
          (ir.prototype.matrixSetter =
            ir.prototype.rotationOriginXSetter =
            ir.prototype.rotationOriginYSetter =
            ir.prototype.rotationSetter =
            ir.prototype.scaleXSetter =
            ir.prototype.scaleYSetter =
            ir.prototype.translateXSetter =
            ir.prototype.translateYSetter =
            ir.prototype.verticalAlignSetter =
              function (t, e) {
                ((this[e] = t), (this.doTransform = !0));
              }));
        let ia = ir,
          {
            defined: il,
            extend: ih,
            getAlignFactor: id,
            isNumber: ic,
            merge: ip,
            pick: iu,
            removeEvent: ig
          } = tu;
        class im extends ia {
          alignSetter(t) {
            let e = id(t);
            ((this.textAlign = t),
              e !== this.alignFactor &&
                ((this.alignFactor = e),
                this.bBox && ic(this.xSetting) && this.attr({ x: this.xSetting })));
          }
          anchorXSetter(t, e) {
            ((this.anchorX = t),
              this.boxAttr(e, Math.round(t) - this.getCrispAdjust() - this.xSetting));
          }
          anchorYSetter(t, e) {
            ((this.anchorY = t), this.boxAttr(e, t - this.ySetting));
          }
          boxAttr(t, e) {
            this.box ? this.box.attr(t, e) : (this.deferredAttr[t] = e);
          }
          css(t) {
            if (t) {
              let e = {};
              ((t = ip(t)),
                im.textProps.forEach((i) => {
                  void 0 !== t[i] && ((e[i] = t[i]), delete t[i]);
                }),
                this.text.css(e),
                "fontSize" in e || "fontWeight" in e
                  ? this.updateTextPadding()
                  : ("width" in e || "textOverflow" in e) && this.updateBoxSize());
            }
            return ia.prototype.css.call(this, t);
          }
          destroy() {
            (ig(this.element, "mouseenter"),
              ig(this.element, "mouseleave"),
              this.text && this.text.destroy(),
              this.box && (this.box = this.box.destroy()),
              ia.prototype.destroy.call(this));
          }
          fillSetter(t, e) {
            (t && (this.needsBox = !0), (this.fill = t), this.boxAttr(e, t));
          }
          getBBox(t, e) {
            this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize();
            let {
                padding: i,
                height: s = 0,
                translateX: o = 0,
                translateY: r = 0,
                width: n = 0
              } = this,
              a = iu(this.paddingLeft, i),
              l = null != e ? e : this.rotation || 0,
              h = {
                width: n,
                height: s,
                x: o + this.bBox.x - a,
                y: r + this.bBox.y - i + this.baselineOffset
              };
            return (l && (h = this.getRotatedBox(h, l)), h);
          }
          getCrispAdjust() {
            return (
              ((this.renderer.styledMode && this.box
                ? this.box.strokeWidth()
                : this["stroke-width"]
                  ? parseInt(this["stroke-width"], 10)
                  : 0) %
                2) /
              2
            );
          }
          heightSetter(t) {
            ((this.heightSetting = t), (this.doUpdate = !0));
          }
          afterSetters() {
            (super.afterSetters(), this.doUpdate && (this.updateBoxSize(), (this.doUpdate = !1)));
          }
          onAdd() {
            (this.text.add(this),
              this.attr({ text: iu(this.textStr, ""), x: this.x || 0, y: this.y || 0 }),
              this.box &&
                il(this.anchorX) &&
                this.attr({ anchorX: this.anchorX, anchorY: this.anchorY }));
          }
          paddingSetter(t, e) {
            ic(t) ? t !== this[e] && ((this[e] = t), this.updateTextPadding()) : (this[e] = void 0);
          }
          rSetter(t, e) {
            this.boxAttr(e, t);
          }
          strokeSetter(t, e) {
            ((this.stroke = t), this.boxAttr(e, t));
          }
          "stroke-widthSetter"(t, e) {
            (t && (this.needsBox = !0), (this["stroke-width"] = t), this.boxAttr(e, t));
          }
          "text-alignSetter"(t) {
            ((this.textAlign = this["text-align"] = t), this.updateTextPadding());
          }
          textSetter(t) {
            (void 0 !== t && this.text.attr({ text: t }), this.updateTextPadding(), this.reAlign());
          }
          updateBoxSize() {
            let t,
              e = this.text,
              i = {},
              s = this.padding,
              o = (this.bBox =
                (!ic(this.widthSetting) || !ic(this.heightSetting) || this.textAlign) &&
                il(e.textStr)
                  ? e.getBBox(void 0, 0)
                  : im.emptyBBox);
            ((this.width = this.getPaddedWidth()),
              (this.height = (this.heightSetting || o.height || 0) + 2 * s));
            let r = this.renderer.fontMetrics(e);
            if (
              ((this.baselineOffset =
                s + Math.min((this.text.firstLineMetrics || r).b, o.height || 1 / 0)),
              this.heightSetting && (this.baselineOffset += (this.heightSetting - r.h) / 2),
              this.needsBox && !e.textPath)
            ) {
              if (!this.box) {
                let t = (this.box = this.symbolKey
                  ? this.renderer.symbol(this.symbolKey)
                  : this.renderer.rect());
                (t.addClass(
                  ("button" === this.className ? "" : "highcharts-label-box") +
                    (this.className ? " highcharts-" + this.className + "-box" : "")
                ),
                  t.add(this));
              }
              ((i.x = t = this.getCrispAdjust()),
                (i.y = (this.baseline ? -this.baselineOffset : 0) + t),
                (i.width = Math.round(this.width)),
                (i.height = Math.round(this.height)),
                this.box.attr(ih(i, this.deferredAttr)),
                (this.deferredAttr = {}));
            }
          }
          updateTextPadding() {
            let t = this.text,
              e = t.styles.textAlign || this.textAlign;
            if (!t.textPath) {
              var i, s;
              this.updateBoxSize();
              let o = this.baseline ? 0 : this.baselineOffset,
                r =
                  (null != (i = this.paddingLeft) ? i : this.padding) +
                  id(e) * (null != (s = this.widthSetting) ? s : this.bBox.width);
              ((r !== t.x || o !== t.y) &&
                (t.attr({ align: e, x: r }), void 0 !== o && t.attr("y", o)),
                (t.x = r),
                (t.y = o));
            }
          }
          widthSetter(t) {
            ((this.widthSetting = ic(t) ? t : void 0), (this.doUpdate = !0));
          }
          getPaddedWidth() {
            let t = this.padding,
              e = iu(this.paddingLeft, t),
              i = iu(this.paddingRight, t);
            return (this.widthSetting || this.bBox.width || 0) + e + i;
          }
          xSetter(t) {
            ((this.x = t),
              this.alignFactor &&
                ((t -= this.alignFactor * this.getPaddedWidth()), (this["forceAnimate:x"] = !0)),
              (this.xSetting = Math.round(t)),
              this.attr("translateX", this.xSetting));
          }
          ySetter(t) {
            ((this.ySetting = this.y = Math.round(t)), this.attr("translateY", this.ySetting));
          }
          constructor(t, e, i, s, o, r, n, a, l, h) {
            let d;
            (super(t, "g"),
              (this.paddingLeftSetter = this.paddingSetter),
              (this.paddingRightSetter = this.paddingSetter),
              (this.doUpdate = !1),
              (this.textStr = e),
              (this.x = i),
              (this.y = s),
              (this.anchorX = r),
              (this.anchorY = n),
              (this.baseline = l),
              (this.className = h),
              this.addClass("button" === h ? "highcharts-no-tooltip" : "highcharts-label"),
              h && this.addClass("highcharts-" + h),
              (this.text = t.text(void 0, 0, 0, a).attr({ zIndex: 1 })),
              "string" == typeof o &&
                ((d = /^url\((.*?)\)$/.test(o)) || this.renderer.symbols[o]) &&
                (this.symbolKey = o),
              (this.bBox = im.emptyBBox),
              (this.padding = 3),
              (this.baselineOffset = 0),
              (this.needsBox = t.styledMode || d),
              (this.deferredAttr = {}),
              (this.alignFactor = 0));
          }
        }
        ((im.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }),
          (im.textProps = [
            "color",
            "direction",
            "fontFamily",
            "fontSize",
            "fontStyle",
            "fontWeight",
            "lineClamp",
            "lineHeight",
            "textAlign",
            "textDecoration",
            "textOutline",
            "textOverflow",
            "whiteSpace",
            "width"
          ]));
        let { defined: ix, isNumber: iy, pick: iv } = tu;
        function ib(t, e, i, s, o) {
          let r = [];
          if (o) {
            let n = o.start || 0,
              a = o.end || 0,
              l = iv(o.r, i),
              h = iv(o.r, s || i),
              d = 2e-4 / (o.borderRadius ? 1 : Math.max(l, 1)),
              c = Math.abs(a - n - 2 * Math.PI) < d;
            c && ((n = Math.PI / 2), (a = 2.5 * Math.PI - d));
            let p = o.innerR,
              u = iv(o.open, c),
              g = Math.cos(n),
              f = Math.sin(n),
              m = Math.cos(a),
              x = Math.sin(a),
              y = iv(o.longArc, a - n - Math.PI < d ? 0 : 1),
              v = ["A", l, h, 0, y, iv(o.clockwise, 1), t + l * m, e + h * x];
            ((v.params = { start: n, end: a, cx: t, cy: e }),
              r.push(["M", t + l * g, e + h * f], v),
              ix(p) &&
                (((v = [
                  "A",
                  p,
                  p,
                  0,
                  y,
                  ix(o.clockwise) ? 1 - o.clockwise : 0,
                  t + p * g,
                  e + p * f
                ]).params = { start: a, end: n, cx: t, cy: e }),
                r.push(u ? ["M", t + p * m, e + p * x] : ["L", t + p * m, e + p * x], v)),
              u || r.push(["Z"]));
          }
          return r;
        }
        function ik(t, e, i, s, o) {
          return (null == o ? void 0 : o.r)
            ? iw(t, e, i, s, o)
            : [["M", t, e], ["L", t + i, e], ["L", t + i, e + s], ["L", t, e + s], ["Z"]];
        }
        function iw(t, e, i, s, o) {
          let r = (null == o ? void 0 : o.r) || 0;
          return [
            ["M", t + r, e],
            ["L", t + i - r, e],
            ["A", r, r, 0, 0, 1, t + i, e + r],
            ["L", t + i, e + s - r],
            ["A", r, r, 0, 0, 1, t + i - r, e + s],
            ["L", t + r, e + s],
            ["A", r, r, 0, 0, 1, t, e + s - r],
            ["L", t, e + r],
            ["A", r, r, 0, 0, 1, t + r, e],
            ["Z"]
          ];
        }
        let iM = {
            arc: ib,
            callout: function (t, e, i, s, o) {
              let r = Math.min((null == o ? void 0 : o.r) || 0, i, s),
                n = r + 6,
                a = null == o ? void 0 : o.anchorX,
                l = (null == o ? void 0 : o.anchorY) || 0,
                h = iw(t, e, i, s, { r });
              if (!iy(a) || (a < i && a > 0 && l < s && l > 0)) return h;
              if (t + a > i - n)
                if (l > e + n && l < e + s - n)
                  h.splice(
                    3,
                    1,
                    ["L", t + i, l - 6],
                    ["L", t + i + 6, l],
                    ["L", t + i, l + 6],
                    ["L", t + i, e + s - r]
                  );
                else if (a < i) {
                  let o = l < e + n,
                    d = o ? e : e + s;
                  h.splice(o ? 2 : 5, 0, ["L", a, l], ["L", t + i - r, d]);
                } else
                  h.splice(
                    3,
                    1,
                    ["L", t + i, s / 2],
                    ["L", a, l],
                    ["L", t + i, s / 2],
                    ["L", t + i, e + s - r]
                  );
              else if (t + a < n)
                if (l > e + n && l < e + s - n)
                  h.splice(
                    7,
                    1,
                    ["L", t, l + 6],
                    ["L", t - 6, l],
                    ["L", t, l - 6],
                    ["L", t, e + r]
                  );
                else if (a > 0) {
                  let i = l < e + n,
                    o = i ? e : e + s;
                  h.splice(i ? 1 : 6, 0, ["L", a, l], ["L", t + r, o]);
                } else
                  h.splice(7, 1, ["L", t, s / 2], ["L", a, l], ["L", t, s / 2], ["L", t, e + r]);
              else
                l > s && a < i - n
                  ? h.splice(
                      5,
                      1,
                      ["L", a + 6, e + s],
                      ["L", a, e + s + 6],
                      ["L", a - 6, e + s],
                      ["L", t + r, e + s]
                    )
                  : l < 0 &&
                    a > n &&
                    h.splice(
                      1,
                      1,
                      ["L", a - 6, e],
                      ["L", a, e - 6],
                      ["L", a + 6, e],
                      ["L", i - r, e]
                    );
              return h;
            },
            circle: function (t, e, i, s) {
              return ib(t + i / 2, e + s / 2, i / 2, s / 2, {
                start: 0.5 * Math.PI,
                end: 2.5 * Math.PI,
                open: !1
              });
            },
            diamond: function (t, e, i, s) {
              return [
                ["M", t + i / 2, e],
                ["L", t + i, e + s / 2],
                ["L", t + i / 2, e + s],
                ["L", t, e + s / 2],
                ["Z"]
              ];
            },
            rect: ik,
            roundedRect: iw,
            square: ik,
            triangle: function (t, e, i, s) {
              return [["M", t + i / 2, e], ["L", t + i, e + s], ["L", t, e + s], ["Z"]];
            },
            "triangle-down": function (t, e, i, s) {
              return [["M", t, e], ["L", t + i, e], ["L", t + i / 2, e + s], ["Z"]];
            }
          },
          { doc: iS, SVG_NS: iT, win: iC } = G,
          { attr: iA, extend: iP, fireEvent: iL, isString: iO, objectEach: iE, pick: iI } = tu,
          iD = (t, e) => t.substring(0, e) + "…",
          iB = class {
            buildSVG() {
              let t = this.svgElement,
                e = t.element,
                i = t.renderer,
                s = iI(t.textStr, "").toString(),
                o = -1 !== s.indexOf("<"),
                r = e.childNodes,
                n = !t.added && i.box,
                a = [
                  s,
                  this.ellipsis,
                  this.noWrap,
                  this.textLineHeight,
                  this.textOutline,
                  t.getStyle("font-size"),
                  t.styles.lineClamp,
                  this.width
                ].join(",");
              if (a !== t.textCache) {
                ((t.textCache = a), delete t.actualWidth);
                for (let t = r.length; t--;) e.removeChild(r[t]);
                if (
                  o ||
                  this.ellipsis ||
                  this.width ||
                  t.textPath ||
                  (-1 !== s.indexOf(" ") && (!this.noWrap || /<br.*?>/g.test(s)))
                ) {
                  if ("" !== s) {
                    n && n.appendChild(e);
                    let i = new eg(s);
                    (this.modifyTree(i.nodes),
                      i.addToDOM(e),
                      this.modifyDOM(),
                      this.ellipsis &&
                        -1 !== (e.textContent || "").indexOf("…") &&
                        t.attr("title", this.unescapeEntities(t.textStr || "", ["&lt;", "&gt;"])),
                      n && n.removeChild(e));
                  }
                } else e.appendChild(iS.createTextNode(this.unescapeEntities(s)));
                iO(this.textOutline) && t.applyTextOutline && t.applyTextOutline(this.textOutline);
              }
            }
            modifyDOM() {
              let t,
                e = this.svgElement,
                i = iA(e.element, "x");
              for (e.firstLineMetrics = void 0; (t = e.element.firstChild);)
                if (/^[\s\u200B]*$/.test(t.textContent || " ")) e.element.removeChild(t);
                else break;
              [].forEach.call(e.element.querySelectorAll("tspan.highcharts-br"), (t, s) => {
                t.nextSibling &&
                  t.previousSibling &&
                  (0 === s &&
                    1 === t.previousSibling.nodeType &&
                    (e.firstLineMetrics = e.renderer.fontMetrics(t.previousSibling)),
                  iA(t, { dy: this.getLineHeight(t.nextSibling), x: i }));
              });
              let s = this.width || 0;
              if (!s) return;
              let o = (t, o) => {
                  let r = t.textContent || "",
                    n = r.replace(/([^\^])-/g, "$1- ").split(" "),
                    a = !this.noWrap && (n.length > 1 || e.element.childNodes.length > 1),
                    l = this.getLineHeight(o),
                    h = Math.max(0, s - 0.8 * l),
                    d = 0,
                    c = e.actualWidth;
                  if (a) {
                    let r = [],
                      a = [];
                    for (; o.firstChild && o.firstChild !== t;)
                      (a.push(o.firstChild), o.removeChild(o.firstChild));
                    for (; n.length;)
                      if (
                        (n.length &&
                          !this.noWrap &&
                          d > 0 &&
                          (r.push(t.textContent || ""),
                          (t.textContent = n.join(" ").replace(/- /g, "-"))),
                        this.truncate(t, void 0, n, (0 === d && c) || 0, s, h, (t, e) =>
                          n.slice(0, e).join(" ").replace(/- /g, "-")
                        ),
                        (c = e.actualWidth),
                        d++,
                        this.lineClamp && d >= this.lineClamp)
                      ) {
                        var p;
                        n.length &&
                          (this.truncate(t, t.textContent || "", void 0, 0, s, h, iD),
                          (t.textContent =
                            (null == (p = t.textContent) ? void 0 : p.replace("…", "")) + "…"));
                        break;
                      }
                    (a.forEach((e) => {
                      o.insertBefore(e, t);
                    }),
                      r.forEach((e) => {
                        o.insertBefore(iS.createTextNode(e), t);
                        let s = iS.createElementNS(iT, "tspan");
                        ((s.textContent = "​"), iA(s, { dy: l, x: i }), o.insertBefore(s, t));
                      }));
                  } else this.ellipsis && r && this.truncate(t, r, void 0, 0, s, h, iD);
                },
                r = (t) => {
                  [].slice.call(t.childNodes).forEach((i) => {
                    i.nodeType === iC.Node.TEXT_NODE
                      ? o(i, t)
                      : (-1 !== i.className.baseVal.indexOf("highcharts-br") && (e.actualWidth = 0),
                        r(i));
                  });
                };
              r(e.element);
            }
            getLineHeight(t) {
              let e = t.nodeType === iC.Node.TEXT_NODE ? t.parentElement : t;
              return this.textLineHeight
                ? parseInt(this.textLineHeight.toString(), 10)
                : this.renderer.fontMetrics(e || this.svgElement.element).h;
            }
            modifyTree(t) {
              let e = (i, s) => {
                let { attributes: o = {}, children: r, style: n = {}, tagName: a } = i,
                  l = this.renderer.styledMode;
                if (
                  ("b" === a || "strong" === a
                    ? l
                      ? (o.class = "highcharts-strong")
                      : (n.fontWeight = "bold")
                    : ("i" === a || "em" === a) &&
                      (l ? (o.class = "highcharts-emphasized") : (n.fontStyle = "italic")),
                  (null == n ? void 0 : n.color) && (n.fill = n.color),
                  "br" === a)
                ) {
                  ((o.class = "highcharts-br"), (i.textContent = "​"));
                  let e = t[s + 1];
                  (null == e ? void 0 : e.textContent) &&
                    (e.textContent = e.textContent.replace(/^ +/gm, ""));
                } else
                  "a" === a &&
                    r &&
                    r.some((t) => "#text" === t.tagName) &&
                    (i.children = [{ children: r, tagName: "tspan" }]);
                ("#text" !== a && "a" !== a && (i.tagName = "tspan"),
                  iP(i, { attributes: o, style: n }),
                  r && r.filter((t) => "#text" !== t.tagName).forEach(e));
              };
              (t.forEach(e), iL(this.svgElement, "afterModifyTree", { nodes: t }));
            }
            truncate(t, e, i, s, o, r, n) {
              let a,
                l,
                h = this.svgElement,
                { rotation: d } = h,
                c = [],
                p = i && !s ? 1 : 0,
                u = (e || i || "").length,
                g = u;
              i || (o = r);
              let f = function (e, o) {
                let r = o || e,
                  n = t.parentNode;
                if (n && void 0 === c[r] && n.getSubStringLength)
                  try {
                    c[r] = s + n.getSubStringLength(0, i ? r + 1 : r);
                  } catch (t) {}
                return c[r];
              };
              if (((h.rotation = 0), s + (l = f(t.textContent.length)) > o)) {
                for (; p <= u;)
                  ((g = Math.ceil((p + u) / 2)),
                    i && (a = n(i, g)),
                    (l = f(g, a && a.length - 1)),
                    p === u ? (p = u + 1) : l > o ? (u = g - 1) : (p = g));
                (0 === u
                  ? (t.textContent = "")
                  : (e && u === e.length - 1) || (t.textContent = a || n(e || i, g)),
                  this.ellipsis &&
                    l > o &&
                    this.truncate(t, t.textContent || "", void 0, 0, o, r, iD));
              }
              (i && i.splice(0, g), (h.actualWidth = l), (h.rotation = d));
            }
            unescapeEntities(t, e) {
              return (
                iE(this.renderer.escapes, function (i, s) {
                  (e && -1 !== e.indexOf(i)) || (t = t.toString().replace(RegExp(i, "g"), s));
                }),
                t
              );
            }
            constructor(t) {
              let e = t.styles;
              ((this.renderer = t.renderer),
                (this.svgElement = t),
                (this.width = t.textWidth),
                (this.textLineHeight = null == e ? void 0 : e.lineHeight),
                (this.textOutline = null == e ? void 0 : e.textOutline),
                (this.ellipsis = (null == e ? void 0 : e.textOverflow) === "ellipsis"),
                (this.lineClamp = null == e ? void 0 : e.lineClamp),
                (this.noWrap = (null == e ? void 0 : e.whiteSpace) === "nowrap"));
            }
          },
          { defaultOptions: iN } = tX,
          {
            charts: iz,
            deg2rad: iR,
            doc: iW,
            isFirefox: iX,
            isMS: iH,
            isWebKit: iF,
            noop: iG,
            SVG_NS: iY,
            symbolSizes: ij,
            win: iU
          } = G,
          {
            addEvent: iV,
            attr: iZ,
            createElement: iq,
            crisp: i_,
            css: iK,
            defined: i$,
            destroyObjectProperties: iJ,
            extend: iQ,
            isArray: i0,
            isNumber: i1,
            isObject: i2,
            isString: i3,
            merge: i5,
            pick: i6,
            pInt: i9,
            replaceNested: i4,
            uniqueKey: i8
          } = tu;
        class i7 {
          definition(t) {
            return new eg([t]).addToDOM(this.defs.element);
          }
          getReferenceURL() {
            if ((iX || iF) && iW.getElementsByTagName("base").length) {
              if (!i$(e)) {
                let t = i8(),
                  i = new eg([
                    {
                      tagName: "svg",
                      attributes: { width: 8, height: 8 },
                      children: [
                        {
                          tagName: "defs",
                          children: [
                            {
                              tagName: "clipPath",
                              attributes: { id: t },
                              children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }]
                            }
                          ]
                        },
                        {
                          tagName: "rect",
                          attributes: {
                            id: "hitme",
                            width: 8,
                            height: 8,
                            "clip-path": "url(#".concat(t, ")"),
                            fill: "rgba(0,0,0,0.001)"
                          }
                        }
                      ]
                    }
                  ]).addToDOM(iW.body);
                iK(i, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
                let s = iW.elementFromPoint(6, 6);
                ((e = (null == s ? void 0 : s.id) === "hitme"), iW.body.removeChild(i));
              }
              if (e)
                return i4(
                  iU.location.href.split("#")[0],
                  [/<[^>]*>/g, ""],
                  [/([\('\)])/g, "\\$1"],
                  [/ /g, "%20"]
                );
            }
            return "";
          }
          getStyle(t) {
            return (
              (this.style = iQ(
                {
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                  fontSize: "1rem"
                },
                t
              )),
              this.style
            );
          }
          setStyle(t) {
            this.boxWrapper.css(this.getStyle(t));
          }
          isHidden() {
            return !this.boxWrapper.getBBox().width;
          }
          destroy() {
            let t = this.defs;
            return (
              (this.box = null),
              (this.boxWrapper = this.boxWrapper.destroy()),
              iJ(this.gradients || {}),
              (this.gradients = null),
              (this.defs = t.destroy()),
              this.unSubPixelFix && this.unSubPixelFix(),
              (this.alignedObjects = null),
              null
            );
          }
          createElement(t) {
            return new this.Element(this, t);
          }
          getRadialAttr(t, e) {
            return {
              cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2],
              cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2],
              r: (e.r || 0) * t[2]
            };
          }
          shadowDefinition(t) {
            let e = [
                "highcharts-drop-shadow-".concat(this.chartIndex),
                ...Object.keys(t).map((e) => "".concat(e, "-").concat(t[e]))
              ]
                .join("-")
                .toLowerCase()
                .replace(/[^a-z\d\-]/g, ""),
              i = i5({ color: "#000000", offsetX: 1, offsetY: 1, opacity: 0.15, width: 5 }, t);
            return (
              this.defs.element.querySelector("#".concat(e)) ||
                this.definition({
                  tagName: "filter",
                  attributes: { id: e, filterUnits: i.filterUnits },
                  children: this.getShadowFilterContent(i)
                }),
              e
            );
          }
          getShadowFilterContent(t) {
            return [
              {
                tagName: "feDropShadow",
                attributes: {
                  dx: t.offsetX,
                  dy: t.offsetY,
                  "flood-color": t.color,
                  "flood-opacity": Math.min(5 * t.opacity, 1),
                  stdDeviation: t.width / 2
                }
              }
            ];
          }
          buildText(t) {
            new iB(t).buildSVG();
          }
          getContrast(t) {
            let e = tq.parse(t).rgba,
              i = " clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1)";
            if (i1(e[0]) || !tq.useColorMix) {
              let t = e.map((t) => {
                  let e = t / 255;
                  return e <= 0.04 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
                }),
                i = 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
              return 1.05 / (i + 0.05) > (i + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
            }
            return "color(from " + t + " srgb" + i + i + i + ")";
          }
          button(t, e, i, s) {
            let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
              r =
                (arguments.length > 5 && arguments[5],
                arguments.length > 6 && arguments[6],
                arguments.length > 7 && arguments[7],
                arguments.length > 8 ? arguments[8] : void 0),
              n = arguments.length > 9 ? arguments[9] : void 0,
              a = this.label(t, e, i, r, void 0, void 0, n, void 0, "button"),
              l = this.styledMode,
              h = arguments,
              d = 0;
            ((o = i5(iN.global.buttonTheme, o)),
              l && (delete o.fill, delete o.stroke, delete o["stroke-width"]));
            let c = o.states || {},
              p = o.style || {};
            (delete o.states, delete o.style);
            let u = [eg.filterUserAttributes(o)],
              g = [p];
            return (
              l ||
                ["hover", "select", "disabled"].forEach((t, e) => {
                  (u.push(i5(u[0], eg.filterUserAttributes(h[e + 5] || c[t] || {}))),
                    g.push(u[e + 1].style),
                    delete u[e + 1].style);
                }),
              iV(a.element, iH ? "mouseover" : "mouseenter", function () {
                3 !== d && a.setState(1);
              }),
              iV(a.element, iH ? "mouseout" : "mouseleave", function () {
                3 !== d && a.setState(d);
              }),
              (a.setState = function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (
                  (1 !== t && (a.state = d = t),
                  a
                    .removeClass(/highcharts-button-(normal|hover|pressed|disabled)/)
                    .addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t]),
                  !l)
                ) {
                  a.attr(u[t]);
                  let e = g[t];
                  i2(e) && a.css(e);
                }
              }),
              a.attr(u[0]),
              !l &&
                (a.css(iQ({ cursor: "default" }, p)), n && a.text.css({ pointerEvents: "none" })),
              a
                .on("touchstart", (t) => t.stopPropagation())
                .on("click", function (t) {
                  3 !== d && (null == s || s.call(a, t));
                })
            );
          }
          crispLine(t, e) {
            let [i, s] = t;
            return (
              i$(i[1]) && i[1] === s[1] && (i[1] = s[1] = i_(i[1], e)),
              i$(i[2]) && i[2] === s[2] && (i[2] = s[2] = i_(i[2], e)),
              t
            );
          }
          path(t) {
            let e = this.styledMode ? {} : { fill: "none" };
            return (i0(t) ? (e.d = t) : i2(t) && iQ(e, t), this.createElement("path").attr(e));
          }
          circle(t, e, i) {
            let s = i2(t) ? t : void 0 === t ? {} : { x: t, y: e, r: i },
              o = this.createElement("circle");
            return (
              (o.xSetter = o.ySetter =
                function (t, e, i) {
                  i.setAttribute("c" + e, t);
                }),
              o.attr(s)
            );
          }
          arc(t, e, i, s, o, r) {
            let n;
            i2(t)
              ? ((e = (n = t).y), (i = n.r), (s = n.innerR), (o = n.start), (r = n.end), (t = n.x))
              : (n = { innerR: s, start: o, end: r });
            let a = this.symbol("arc", t, e, i, i, n);
            return ((a.r = i), a);
          }
          rect(t, e, i, s, o, r) {
            let n = i2(t)
                ? t
                : void 0 === t
                  ? {}
                  : { x: t, y: e, r: o, width: Math.max(i || 0, 0), height: Math.max(s || 0, 0) },
              a = this.createElement("rect");
            return (
              this.styledMode ||
                (void 0 !== r && ((n["stroke-width"] = r), iQ(n, a.crisp(n))), (n.fill = "none")),
              (a.rSetter = function (t, e, i) {
                ((a.r = t), iZ(i, { rx: t, ry: t }));
              }),
              (a.rGetter = function () {
                return a.r || 0;
              }),
              a.attr(n)
            );
          }
          roundedRect(t) {
            return this.symbol("roundedRect").attr(t);
          }
          setSize(t, e, i) {
            ((this.width = t),
              (this.height = e),
              this.boxWrapper.animate(
                { width: t, height: e },
                {
                  step: function () {
                    this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
                  },
                  duration: i6(i, !0) ? void 0 : 0
                }
              ),
              this.alignElements());
          }
          g(t) {
            let e = this.createElement("g");
            return t ? e.attr({ class: "highcharts-" + t }) : e;
          }
          image(t, e, i, s, o, r) {
            let n = { preserveAspectRatio: "none" };
            (i1(e) && (n.x = e),
              i1(i) && (n.y = i),
              i1(s) && (n.width = s),
              i1(o) && (n.height = o));
            let a = this.createElement("image").attr(n),
              l = function (e) {
                (a.attr({ href: t }), r.call(a, e));
              };
            if (r) {
              a.attr({
                href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              });
              let e = new iU.Image();
              (iV(e, "load", l), (e.src = t), e.complete && l({}));
            } else a.attr({ href: t });
            return a;
          }
          symbol(t, e, i, s, o, r) {
            let n,
              a,
              l,
              h,
              d = this,
              c = /^url\((.*?)\)$/,
              p = c.test(t),
              u = !p && (this.symbols[t] ? t : "circle"),
              g = u && this.symbols[u];
            if (g)
              ("number" == typeof e &&
                (a = g.call(this.symbols, e || 0, i || 0, s || 0, o || 0, r)),
                (n = this.path(a)),
                d.styledMode || n.attr("fill", "none"),
                iQ(n, { symbolName: u || void 0, x: e, y: i, width: s, height: o }),
                r && iQ(n, r));
            else if (p) {
              var f, m;
              l = t.match(c)[1];
              let s = (n = this.image(l));
              ((s.imgwidth = i6(
                null == r ? void 0 : r.width,
                null == (f = ij[l]) ? void 0 : f.width
              )),
                (s.imgheight = i6(
                  null == r ? void 0 : r.height,
                  null == (m = ij[l]) ? void 0 : m.height
                )),
                (h = (t) => t.attr({ width: t.width, height: t.height })),
                ["width", "height"].forEach((t) => {
                  s["".concat(t, "Setter")] = function (t, e) {
                    this[e] = t;
                    let {
                        alignByTranslate: i,
                        element: s,
                        width: o,
                        height: n,
                        imgwidth: a,
                        imgheight: l
                      } = this,
                      h = "width" === e ? a : l,
                      d = 1;
                    (r && "within" === r.backgroundSize && o && n && a && l
                      ? ((d = Math.min(o / a, n / l)),
                        iZ(s, { width: Math.round(a * d), height: Math.round(l * d) }))
                      : s && h && s.setAttribute(e, h),
                      !i &&
                        a &&
                        l &&
                        this.translate(((o || 0) - a * d) / 2, ((n || 0) - l * d) / 2));
                  };
                }),
                i$(e) && s.attr({ x: e, y: i }),
                (s.isImg = !0),
                (s.symbolUrl = t),
                i$(s.imgwidth) && i$(s.imgheight)
                  ? h(s)
                  : (s.attr({ width: 0, height: 0 }),
                    iq("img", {
                      onload: function () {
                        let t = iz[d.chartIndex];
                        (0 === this.width &&
                          (iK(this, { position: "absolute", top: "-999em" }),
                          iW.body.appendChild(this)),
                          (ij[l] = { width: this.width, height: this.height }),
                          (s.imgwidth = this.width),
                          (s.imgheight = this.height),
                          s.element && h(s),
                          this.parentNode && this.parentNode.removeChild(this),
                          d.imgCount--,
                          d.imgCount || !t || t.hasLoaded || t.onload());
                      },
                      src: l
                    }),
                    this.imgCount++));
            }
            return n;
          }
          clipRect(t, e, i, s) {
            return this.rect(t, e, i, s, 0);
          }
          text(t, e, i, s) {
            let o = {};
            if (s && (this.allowHTML || !this.forExport)) return this.html(t, e, i);
            ((o.x = Math.round(e || 0)), i && (o.y = Math.round(i)), i$(t) && (o.text = t));
            let r = this.createElement("text").attr(o);
            return (
              (s && (!this.forExport || this.allowHTML)) ||
                (r.xSetter = function (t, e, i) {
                  let s = i.getElementsByTagName("tspan"),
                    o = i.getAttribute(e);
                  for (let i = 0, r; i < s.length; i++)
                    (r = s[i]).getAttribute(e) === o && r.setAttribute(e, t);
                  i.setAttribute(e, t);
                }),
              r
            );
          }
          fontMetrics(t) {
            let e = i9(ia.prototype.getStyle.call(t, "font-size") || 0),
              i = e < 24 ? e + 3 : Math.round(1.2 * e),
              s = Math.round(0.8 * i);
            return { h: i, b: s, f: e };
          }
          rotCorr(t, e, i) {
            let s = t;
            return (
              e && i && (s = Math.max(s * Math.cos(e * iR), 4)),
              { x: (-t / 3) * Math.sin(e * iR), y: s }
            );
          }
          pathToSegments(t) {
            let e = [],
              i = [],
              s = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 };
            for (let o = 0; o < t.length; o++)
              (i3(i[0]) &&
                i1(t[o]) &&
                i.length === s[i[0].toUpperCase()] &&
                t.splice(o, 0, i[0].replace("M", "L").replace("m", "l")),
                "string" == typeof t[o] && (i.length && e.push(i.slice(0)), (i.length = 0)),
                i.push(t[o]));
            return (e.push(i.slice(0)), e);
          }
          label(t, e, i, s, o, r, n, a, l) {
            return new im(this, t, e, i, s, o, r, n, a, l);
          }
          alignElements() {
            this.alignedObjects.forEach((t) => t.align());
          }
          constructor(t, e, i, s, o, r, n) {
            let a, l;
            ((this.x = 0), (this.y = 0));
            let h = this.createElement("svg").attr({ version: "1.1", class: "highcharts-root" }),
              d = h.element;
            (n || h.css(this.getStyle(s || {})),
              t.appendChild(d),
              iZ(t, "dir", "ltr"),
              -1 === t.innerHTML.indexOf("xmlns") && iZ(d, "xmlns", this.SVG_NS),
              (this.box = d),
              (this.boxWrapper = h),
              (this.alignedObjects = []),
              (this.url = this.getReferenceURL()),
              this.createElement("desc")
                .add()
                .element.appendChild(iW.createTextNode("Created with Highcharts 12.2.0")),
              (this.defs = this.createElement("defs").add()),
              (this.allowHTML = r),
              (this.forExport = o),
              (this.styledMode = n),
              (this.gradients = {}),
              (this.cache = {}),
              (this.cacheKeys = []),
              (this.imgCount = 0),
              (this.rootFontSize = h.getStyle("font-size")),
              this.setSize(e, i, !1),
              iX &&
                t.getBoundingClientRect &&
                ((a = function () {
                  (iK(t, { left: 0, top: 0 }),
                    (l = t.getBoundingClientRect()),
                    iK(t, {
                      left: Math.ceil(l.left) - l.left + "px",
                      top: Math.ceil(l.top) - l.top + "px"
                    }));
                })(),
                (this.unSubPixelFix = iV(iU, "resize", a))));
          }
        }
        (iQ(i7.prototype, {
          Element: ia,
          SVG_NS: iY,
          escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" },
          symbols: iM,
          draw: iG
        }),
          eE.registerRendererType("svg", i7, !0));
        let { composed: st, isFirefox: se } = G,
          {
            attr: si,
            css: ss,
            createElement: so,
            defined: sr,
            extend: sn,
            getAlignFactor: sa,
            isNumber: sl,
            pInt: sh,
            pushUnique: sd
          } = tu;
        function sc(t, e, i) {
          var s;
          let o = (null == (s = this.div) ? void 0 : s.style) || i.style;
          (ia.prototype["".concat(e, "Setter")].call(this, t, e, i), o && (o[e] = t));
        }
        let sp = (t, e) => {
          if (!t.div) {
            var i;
            let s = si(t.element, "class"),
              o = t.css,
              r = so(
                "div",
                s ? { className: s } : void 0,
                {
                  position: "absolute",
                  left: "".concat(t.translateX || 0, "px"),
                  top: "".concat(t.translateY || 0, "px"),
                  ...t.styles,
                  display: t.display,
                  opacity: t.opacity,
                  visibility: t.visibility
                },
                (null == (i = t.parentGroup) ? void 0 : i.div) || e
              );
            ((t.classSetter = (t, e, i) => {
              (i.setAttribute("class", t), (r.className = t));
            }),
              (t.translateXSetter = t.translateYSetter =
                (e, i) => {
                  ((t[i] = e),
                    (r.style["translateX" === i ? "left" : "top"] = "".concat(e, "px")),
                    (t.doTransform = !0));
                }),
              (t.opacitySetter = t.visibilitySetter = sc),
              (t.css = (e) => (
                o.call(t, e),
                e.cursor && (r.style.cursor = e.cursor),
                e.pointerEvents && (r.style.pointerEvents = e.pointerEvents),
                t
              )),
              (t.on = function () {
                return (ia.prototype.on.apply({ element: r, onEvents: t.onEvents }, arguments), t);
              }),
              (t.div = r));
          }
          return t.div;
        };
        class su extends ia {
          static compose(t) {
            sd(st, this.compose) &&
              (t.prototype.html = function (t, e, i) {
                return new su(this, "span").attr({ text: t, x: Math.round(e), y: Math.round(i) });
              });
          }
          getSpanCorrection(t, e, i) {
            ((this.xCorr = -t * i), (this.yCorr = -e));
          }
          css(t) {
            let e,
              { element: i } = this,
              s = "SPAN" === i.tagName && t && "width" in t,
              o = s && t.width;
            return (
              s && (delete t.width, (this.textWidth = sh(o) || void 0), (e = !0)),
              (null == t ? void 0 : t.textOverflow) === "ellipsis" &&
                ((t.overflow = "hidden"), (t.whiteSpace = "nowrap")),
              (null == t ? void 0 : t.lineClamp) &&
                ((t.display = "-webkit-box"),
                (t.WebkitLineClamp = t.lineClamp),
                (t.WebkitBoxOrient = "vertical"),
                (t.overflow = "hidden")),
              sl(Number(null == t ? void 0 : t.fontSize)) && (t.fontSize += "px"),
              sn(this.styles, t),
              ss(i, t),
              e && this.updateTransform(),
              this
            );
          }
          htmlGetBBox() {
            let { element: t } = this;
            return {
              x: t.offsetLeft,
              y: t.offsetTop,
              width: t.offsetWidth,
              height: t.offsetHeight
            };
          }
          updateTransform() {
            if (!this.added) {
              this.alignOnAdd = !0;
              return;
            }
            let {
              element: t,
              foreignObject: e,
              oldTextWidth: i,
              renderer: s,
              rotation: o,
              rotationOriginX: r,
              rotationOriginY: n,
              scaleX: a,
              scaleY: l,
              styles: { display: h = "inline-block", whiteSpace: d },
              textAlign: c = "left",
              textWidth: p,
              translateX: u = 0,
              translateY: g = 0,
              x: f = 0,
              y: m = 0
            } = this;
            if (
              (e || ss(t, { marginLeft: "".concat(u, "px"), marginTop: "".concat(g, "px") }),
              "SPAN" === t.tagName)
            ) {
              var x;
              let u,
                g = [o, c, t.innerHTML, p, this.textAlign].join(","),
                y = -((null == (x = this.parentGroup) ? void 0 : x.padding) * 1) || 0;
              if (p !== i) {
                let e = this.textPxLength
                    ? this.textPxLength
                    : (ss(t, { width: "", whiteSpace: d || "nowrap" }), t.offsetWidth),
                  s = p || 0,
                  r = "" === t.style.textOverflow && t.style.webkitLineClamp;
                (s > i || e > s || r) &&
                  (/[\-\s\u00AD]/.test(t.textContent || t.innerText) ||
                    "ellipsis" === t.style.textOverflow) &&
                  (ss(t, {
                    width: (o || a || e > s || r) && sl(p) ? p + "px" : "auto",
                    display: h,
                    whiteSpace: d || "normal"
                  }),
                  (this.oldTextWidth = p));
              }
              (e &&
                (ss(t, { display: "inline-block", verticalAlign: "top" }),
                e.attr({ width: s.width, height: s.height })),
                g !== this.cTT &&
                  ((u = s.fontMetrics(t).b),
                  sr(o) &&
                    !e &&
                    (o !== (this.oldRotation || 0) || c !== this.oldAlign) &&
                    ss(t, {
                      transform: "rotate(".concat(o, "deg)"),
                      transformOrigin: "".concat(y, "% ").concat(y, "px")
                    }),
                  this.getSpanCorrection(
                    (!sr(o) && !this.textWidth && this.textPxLength) || t.offsetWidth,
                    u,
                    sa(c)
                  )));
              let { xCorr: v = 0, yCorr: b = 0 } = this,
                k = {
                  left: "".concat(f + v, "px"),
                  top: "".concat(m + b, "px"),
                  textAlign: c,
                  transformOrigin: ""
                    .concat((null != r ? r : f) - v - f - y, "px ")
                    .concat((null != n ? n : m) - b - m - y, "px")
                };
              ((a || l) &&
                (k.transform = "scale("
                  .concat(null != a ? a : 1, ",")
                  .concat(null != l ? l : 1, ")")),
                e
                  ? (super.updateTransform(),
                    sl(f) && sl(m)
                      ? (e.attr({
                          x: f + v,
                          y: m + b,
                          width: t.offsetWidth + 3,
                          height: t.offsetHeight,
                          "transform-origin": t.getAttribute("transform-origin") || "0 0"
                        }),
                        ss(t, { display: h, textAlign: c }))
                      : se && e.attr({ width: 0, height: 0 }))
                  : ss(t, k),
                (this.cTT = g),
                (this.oldRotation = o),
                (this.oldAlign = c));
            }
          }
          add(t) {
            let { foreignObject: e, renderer: i } = this,
              s = i.box.parentNode,
              o = [];
            if (e)
              (e.add(t),
                super.add(
                  i
                    .createElement("body")
                    .attr({ xmlns: "http://www.w3.org/1999/xhtml" })
                    .css({ background: "transparent", margin: "0 3px 0 0" })
                    .add(e)
                ));
            else {
              let e;
              if (((this.parentGroup = t), t && !(e = t.div))) {
                let i = t;
                for (; i;) (o.push(i), (i = i.parentGroup));
                for (let t of o.reverse()) e = sp(t, s);
              }
              (e || s).appendChild(this.element);
            }
            return ((this.added = !0), this.alignOnAdd && this.updateTransform(), this);
          }
          textSetter(t) {
            t !== this.textStr &&
              (delete this.bBox,
              delete this.oldTextWidth,
              eg.setElementHTML(this.element, null != t ? t : ""),
              (this.textStr = t),
              (this.doTransform = !0));
          }
          alignSetter(t) {
            ((this.alignValue = this.textAlign = t), (this.doTransform = !0));
          }
          xSetter(t, e) {
            ((this[e] = t), (this.doTransform = !0));
          }
          constructor(t, e) {
            (super(t, e),
              su.useForeignObject
                ? (this.foreignObject = t.createElement("foreignObject").attr({ zIndex: 2 }))
                : this.css({
                    position: "absolute",
                    ...(t.styledMode
                      ? {}
                      : { fontFamily: t.style.fontFamily, fontSize: t.style.fontSize })
                  }),
              (this.element.style.whiteSpace = "nowrap"));
          }
        }
        let sg = su.prototype;
        ((sg.visibilitySetter = sg.opacitySetter = sc),
          (sg.ySetter =
            sg.rotationSetter =
            sg.rotationOriginXSetter =
            sg.rotationOriginYSetter =
              sg.xSetter),
          ((g = T || (T = {})).xAxis = {
            alignTicks: !0,
            allowDecimals: void 0,
            panningEnabled: !0,
            zIndex: 2,
            zoomEnabled: !0,
            dateTimeLabelFormats: {
              millisecond: { main: "%[HMSL]", range: !1 },
              second: { main: "%[HMS]", range: !1 },
              minute: { main: "%[HM]", range: !1 },
              hour: { main: "%[HM]", range: !1 },
              day: { main: "%[eb]" },
              week: { main: "%[eb]" },
              month: { main: "%[bY]" },
              year: { main: "%Y" }
            },
            endOnTick: !1,
            gridLineDashStyle: "Solid",
            gridZIndex: 1,
            labels: {
              autoRotationLimit: 80,
              distance: 15,
              enabled: !0,
              indentation: 10,
              overflow: "justify",
              reserveSpace: void 0,
              rotation: void 0,
              staggerLines: 0,
              step: 0,
              useHTML: !1,
              zIndex: 7,
              style: {
                color: "#333333",
                cursor: "default",
                fontSize: "0.8em",
                textOverflow: "ellipsis"
              }
            },
            maxPadding: 0.01,
            minorGridLineDashStyle: "Solid",
            minorTickLength: 2,
            minorTickPosition: "outside",
            minorTicksPerMajor: 5,
            minPadding: 0.01,
            offset: void 0,
            reversed: void 0,
            reversedStacks: !1,
            showEmpty: !0,
            showFirstLabel: !0,
            showLastLabel: !0,
            startOfWeek: 1,
            startOnTick: !1,
            tickLength: 10,
            tickPixelInterval: 100,
            tickmarkPlacement: "between",
            tickPosition: "outside",
            title: {
              align: "middle",
              useHTML: !1,
              x: 0,
              y: 0,
              style: { color: "#666666", fontSize: "0.8em" }
            },
            visible: !0,
            minorGridLineColor: "#f2f2f2",
            minorGridLineWidth: 1,
            minorTickColor: "#999999",
            lineColor: "#333333",
            lineWidth: 1,
            gridLineColor: "#e6e6e6",
            gridLineWidth: void 0,
            tickColor: "#333333"
          }),
          (g.yAxis = {
            reversedStacks: !0,
            endOnTick: !0,
            maxPadding: 0.05,
            minPadding: 0.05,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: { x: void 0 },
            startOnTick: !0,
            title: {},
            stackLabels: {
              animation: {},
              allowOverlap: !1,
              enabled: !1,
              crop: !0,
              overflow: "justify",
              formatter: function () {
                let { numberFormatter: t } = this.axis.chart;
                return t(this.total || 0, -1);
              },
              style: {
                color: "#000000",
                fontSize: "0.7em",
                fontWeight: "bold",
                textOutline: "1px contrast"
              }
            },
            gridLineWidth: 1,
            lineWidth: 0
          }));
        let sf = T,
          { addEvent: sm, isFunction: sx, objectEach: sy, removeEvent: sv } = tu;
        (C || (C = {})).registerEventOptions = function (t, e) {
          ((t.eventOptions = t.eventOptions || {}),
            sy(e.events, function (e, i) {
              t.eventOptions[i] !== e &&
                (t.eventOptions[i] && (sv(t, i, t.eventOptions[i]), delete t.eventOptions[i]),
                sx(e) && ((t.eventOptions[i] = e), sm(t, i, e, { order: 0 })));
            }));
        };
        let sb = C,
          { deg2rad: sk } = G,
          {
            clamp: sw,
            correctFloat: sM,
            defined: sS,
            destroyObjectProperties: sT,
            extend: sC,
            fireEvent: sA,
            getAlignFactor: sP,
            isNumber: sL,
            merge: sO,
            objectEach: sE,
            pick: sI
          } = tu,
          sD = class {
            addLabel() {
              var t;
              let e = this,
                i = e.axis,
                s = i.options,
                o = i.chart,
                r = i.categories,
                n = i.logarithmic,
                a = i.names,
                l = e.pos,
                h = sI(null == (t = e.options) ? void 0 : t.labels, s.labels),
                d = i.tickPositions,
                c = l === d[0],
                p = l === d[d.length - 1],
                u = (!h.step || 1 === h.step) && 1 === i.tickInterval,
                g = d.info,
                f = e.label,
                m,
                x,
                y,
                v = this.parameters.category || (r ? sI(r[l], a[l], l) : l);
              (n && sL(v) && (v = sM(n.lin2log(v))),
                i.dateTime &&
                  (g
                    ? (m = (x = o.time.resolveDTLFormat(
                        s.dateTimeLabelFormats[(!s.grid && g.higherRanks[l]) || g.unitName]
                      )).main)
                    : sL(v) && (m = i.dateTime.getXDateFormat(v, s.dateTimeLabelFormats || {}))),
                (e.isFirst = c),
                (e.isLast = p));
              let b = {
                axis: i,
                chart: o,
                dateTimeLabelFormat: m,
                isFirst: c,
                isLast: p,
                pos: l,
                tick: e,
                tickPositionInfo: g,
                value: v
              };
              sA(this, "labelFormat", b);
              let k = (t) =>
                  h.formatter
                    ? h.formatter.call(t, t)
                    : h.format
                      ? ((t.text = i.defaultLabelFormatter.call(t)), eO.format(h.format, t, o))
                      : i.defaultLabelFormatter.call(t),
                w = k.call(b, b),
                M = null == x ? void 0 : x.list;
              (M
                ? (e.shortenLabel = function () {
                    for (y = 0; y < M.length; y++)
                      if (
                        (sC(b, { dateTimeLabelFormat: M[y] }),
                        f.attr({ text: k.call(b, b) }),
                        f.getBBox().width < i.getSlotWidth(e) - 2 * (h.padding || 0))
                      )
                        return;
                    f.attr({ text: "" });
                  })
                : (e.shortenLabel = void 0),
                u && i._addedPlotLB && e.moveLabel(w, h),
                sS(f) || e.movedLabel
                  ? f &&
                    f.textStr !== w &&
                    !u &&
                    (!f.textWidth || h.style.width || f.styles.width || f.css({ width: null }),
                    f.attr({ text: w }),
                    (f.textPxLength = f.getBBox().width))
                  : ((e.label = f = e.createLabel(w, h)), (e.rotation = 0)));
            }
            createLabel(t, e, i) {
              let s = this.axis,
                { renderer: o, styledMode: r } = s.chart,
                n = e.style.whiteSpace,
                a =
                  sS(t) && e.enabled
                    ? o
                        .text(t, null == i ? void 0 : i.x, null == i ? void 0 : i.y, e.useHTML)
                        .add(s.labelGroup)
                    : void 0;
              return (
                a &&
                  (r || a.css(sO(e.style)),
                  (a.textPxLength = a.getBBox().width),
                  !r && n && a.css({ whiteSpace: n })),
                a
              );
            }
            destroy() {
              sT(this, this.axis);
            }
            getPosition(t, e, i, s) {
              let o = this.axis,
                r = o.chart,
                n = (s && r.oldChartHeight) || r.chartHeight,
                a = {
                  x: t
                    ? sM(o.translate(e + i, void 0, void 0, s) + o.transB)
                    : o.left +
                      o.offset +
                      (o.opposite
                        ? ((s && r.oldChartWidth) || r.chartWidth) - o.right - o.left
                        : 0),
                  y: t
                    ? n - o.bottom + o.offset - (o.opposite ? o.height : 0)
                    : sM(n - o.translate(e + i, void 0, void 0, s) - o.transB)
                };
              return ((a.y = sw(a.y, -1e9, 1e9)), sA(this, "afterGetPosition", { pos: a }), a);
            }
            getLabelPosition(t, e, i, s, o, r, n, a) {
              let l,
                h,
                d = this.axis,
                c = d.transA,
                p = d.isLinked && d.linkedParent ? d.linkedParent.reversed : d.reversed,
                u = d.staggerLines,
                g = d.tickRotCorr || { x: 0, y: 0 },
                f =
                  s || d.reserveSpaceDefault
                    ? 0
                    : -d.labelOffset * ("center" === d.labelAlign ? 0.5 : 1),
                m = o.distance,
                x = {};
              return (
                (l =
                  0 === d.side
                    ? i.rotation
                      ? -m
                      : -i.getBBox().height
                    : 2 === d.side
                      ? g.y + m
                      : Math.cos(i.rotation * sk) * (g.y - i.getBBox(!1, 0).height / 2)),
                sS(o.y) && (l = 0 === d.side && d.horiz ? o.y + l : o.y),
                (t =
                  t +
                  sI(o.x, [0, 1, 0, -1][d.side] * m) +
                  f +
                  g.x -
                  (r && s ? r * c * (p ? -1 : 1) : 0)),
                (e = e + l - (r && !s ? r * c * (p ? 1 : -1) : 0)),
                u &&
                  ((h = (n / (a || 1)) % u),
                  d.opposite && (h = u - h - 1),
                  (e += h * (d.labelOffset / u))),
                (x.x = t),
                (x.y = Math.round(e)),
                sA(this, "afterGetLabelPosition", { pos: x, tickmarkOffset: r, index: n }),
                x
              );
            }
            getLabelSize() {
              return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
            }
            getMarkPath(t, e, i, s) {
              let o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                r = arguments.length > 5 ? arguments[5] : void 0;
              return r.crispLine(
                [
                  ["M", t, e],
                  ["L", t + (o ? 0 : -i), e + (o ? i : 0)]
                ],
                s
              );
            }
            handleOverflow(t) {
              var e;
              let i = this.axis,
                s = i.options.labels,
                o = t.x,
                r = i.chart.chartWidth,
                n = i.chart.spacing,
                a = sI(i.labelLeft, Math.min(i.pos, n[3])),
                l = sI(i.labelRight, Math.max(i.isRadial ? 0 : i.pos + i.len, r - n[1])),
                h = this.label,
                d = this.rotation,
                c = sP(i.labelAlign || h.attr("align")),
                p = h.getBBox().width,
                u = i.getSlotWidth(this),
                g = u,
                f = 1,
                m;
              (d || "justify" !== s.overflow
                ? d < 0 && o - c * p < a
                  ? (m = Math.round(o / Math.cos(d * sk) - a))
                  : d > 0 && o + c * p > l && (m = Math.round((r - o) / Math.cos(d * sk)))
                : (o - c * p < a
                    ? (g = t.x + g * (1 - c) - a)
                    : o + (1 - c) * p > l && ((g = l - t.x + g * c), (f = -1)),
                  (g = Math.min(u, g)) < u &&
                    "center" === i.labelAlign &&
                    (t.x += f * (u - g - c * (u - Math.min(p, g)))),
                  (p > g ||
                    (i.autoRotation && (null == h || null == (e = h.styles) ? void 0 : e.width))) &&
                    (m = g)),
                m &&
                  h &&
                  (this.shortenLabel
                    ? this.shortenLabel()
                    : h.css(sC({}, { width: Math.floor(m) + "px", lineClamp: +!i.isRadial }))));
            }
            moveLabel(t, e) {
              let i = this,
                s = i.label,
                o = i.axis,
                r = !1,
                n;
              (s && s.textStr === t
                ? ((i.movedLabel = s), (r = !0), delete i.label)
                : sE(o.ticks, function (e) {
                    r ||
                      e.isNew ||
                      e === i ||
                      !e.label ||
                      e.label.textStr !== t ||
                      ((i.movedLabel = e.label),
                      (r = !0),
                      (e.labelPos = i.movedLabel.xy),
                      delete e.label);
                  }),
                !r &&
                  (i.labelPos || s) &&
                  ((n = i.labelPos || s.xy),
                  (i.movedLabel = i.createLabel(t, e, n)),
                  i.movedLabel && i.movedLabel.attr({ opacity: 0 })));
            }
            render(t, e, i) {
              var s;
              let o = this.axis,
                r = o.horiz,
                n = this.pos,
                a = sI(this.tickmarkOffset, o.tickmarkOffset),
                l = this.getPosition(r, n, a, e),
                h = l.x,
                d = l.y,
                c = o.pos,
                p = c + o.len,
                u = r ? h : d,
                g = sI(i, null == (s = this.label) ? void 0 : s.newOpacity, 1);
              (!o.chart.polar && (sM(u) < c || u > p) && (i = 0),
                null != i || (i = 1),
                (this.isActive = !0),
                this.renderGridLine(e, i),
                this.renderMark(l, i),
                this.renderLabel(l, e, g, t),
                (this.isNew = !1),
                sA(this, "afterRender"));
            }
            renderGridLine(t, e) {
              let i = this.axis,
                s = i.options,
                o = {},
                r = this.pos,
                n = this.type,
                a = sI(this.tickmarkOffset, i.tickmarkOffset),
                l = i.chart.renderer,
                h = this.gridLine,
                d,
                c = s.gridLineWidth,
                p = s.gridLineColor,
                u = s.gridLineDashStyle;
              ("minor" === this.type &&
                ((c = s.minorGridLineWidth),
                (p = s.minorGridLineColor),
                (u = s.minorGridLineDashStyle)),
                h ||
                  (i.chart.styledMode ||
                    ((o.stroke = p), (o["stroke-width"] = c || 0), (o.dashstyle = u)),
                  n || (o.zIndex = 1),
                  t && (e = 0),
                  (this.gridLine = h =
                    l
                      .path()
                      .attr(o)
                      .addClass("highcharts-" + (n ? n + "-" : "") + "grid-line")
                      .add(i.gridGroup))),
                h &&
                  (d = i.getPlotLinePath({
                    value: r + a,
                    lineWidth: h.strokeWidth(),
                    force: "pass",
                    old: t,
                    acrossPanes: !1
                  })) &&
                  h[t || this.isNew ? "attr" : "animate"]({ d: d, opacity: e }));
            }
            renderMark(t, e) {
              let i = this.axis,
                s = i.options,
                o = i.chart.renderer,
                r = this.type,
                n = i.tickSize(r ? r + "Tick" : "tick"),
                a = t.x,
                l = t.y,
                h = sI(s["minor" !== r ? "tickWidth" : "minorTickWidth"], !r && i.isXAxis ? 1 : 0),
                d = s["minor" !== r ? "tickColor" : "minorTickColor"],
                c = this.mark,
                p = !c;
              n &&
                (i.opposite && (n[0] = -n[0]),
                c ||
                  ((this.mark = c =
                    o
                      .path()
                      .addClass("highcharts-" + (r ? r + "-" : "") + "tick")
                      .add(i.axisGroup)),
                  i.chart.styledMode || c.attr({ stroke: d, "stroke-width": h })),
                c[p ? "attr" : "animate"]({
                  d: this.getMarkPath(a, l, n[0], c.strokeWidth(), i.horiz, o),
                  opacity: e
                }));
            }
            renderLabel(t, e, i, s) {
              let o = this.axis,
                r = o.horiz,
                n = o.options,
                a = this.label,
                l = n.labels,
                h = l.step,
                d = sI(this.tickmarkOffset, o.tickmarkOffset),
                c = t.x,
                p = t.y,
                u = !0;
              a &&
                sL(c) &&
                ((a.xy = t = this.getLabelPosition(c, p, a, r, l, d, s, h)),
                (!this.isFirst || this.isLast || n.showFirstLabel) &&
                (!this.isLast || this.isFirst || n.showLastLabel)
                  ? !r || l.step || l.rotation || e || 0 === i || this.handleOverflow(t)
                  : (u = !1),
                h && s % h && (u = !1),
                u && sL(t.y)
                  ? ((t.opacity = i),
                    a[this.isNewLabel ? "attr" : "animate"](t).show(!0),
                    (this.isNewLabel = !1))
                  : (a.hide(), (this.isNewLabel = !0)));
            }
            replaceMovedLabel() {
              let t = this.label,
                e = this.axis;
              (t &&
                !this.isNew &&
                (t.animate({ opacity: 0 }, void 0, t.destroy), delete this.label),
                (e.isDirty = !0),
                (this.label = this.movedLabel),
                delete this.movedLabel);
            }
            constructor(t, e, i, s, o) {
              ((this.isNew = !0),
                (this.isNewLabel = !0),
                (this.axis = t),
                (this.pos = e),
                (this.type = i || ""),
                (this.parameters = o || {}),
                (this.tickmarkOffset = this.parameters.tickmarkOffset),
                (this.options = this.parameters.options),
                sA(this, "init"),
                i || s || this.addLabel());
            }
          },
          { animObject: sB } = et,
          { xAxis: sN, yAxis: sz } = sf,
          { defaultOptions: sR } = tX,
          { registerEventOptions: sW } = sb,
          { deg2rad: sX } = G,
          {
            arrayMax: sH,
            arrayMin: sF,
            clamp: sG,
            correctFloat: sY,
            defined: sj,
            destroyObjectProperties: sU,
            erase: sV,
            error: sZ,
            extend: sq,
            fireEvent: s_,
            getClosestDistance: sK,
            insertItem: s$,
            isArray: sJ,
            isNumber: sQ,
            isString: s0,
            merge: s1,
            normalizeTickInterval: s2,
            objectEach: s3,
            pick: s5,
            relativeLength: s6,
            removeEvent: s9,
            splat: s4,
            syncTimeout: s8
          } = tu,
          s7 = (t, e) =>
            s2(
              e,
              void 0,
              void 0,
              s5(t.options.allowDecimals, e < 0.5 || void 0 !== t.tickAmount),
              !!t.tickAmount
            );
        sq(sR, { xAxis: sN, yAxis: s1(sN, sz) });
        class ot {
          init(t, e) {
            var i;
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.coll,
              o = "xAxis" === s,
              r = this.isZAxis || (t.inverted ? !o : o);
            ((this.chart = t),
              (this.horiz = r),
              (this.isXAxis = o),
              (this.coll = s),
              s_(this, "init", { userOptions: e }),
              (this.opposite = s5(e.opposite, this.opposite)),
              (this.side = s5(e.side, this.side, r ? 2 * !this.opposite : this.opposite ? 1 : 3)),
              this.setOptions(e));
            let n = this.options,
              a = n.labels;
            (null != this.type || (this.type = n.type || "linear"),
              null != this.uniqueNames || (this.uniqueNames = null == (i = n.uniqueNames) || i),
              s_(this, "afterSetType"),
              (this.userOptions = e),
              (this.minPixelPadding = 0),
              (this.reversed = s5(n.reversed, this.reversed)),
              (this.visible = n.visible),
              (this.zoomEnabled = n.zoomEnabled),
              (this.hasNames = "category" === this.type || !0 === n.categories),
              (this.categories =
                (sJ(n.categories) && n.categories) || (this.hasNames ? [] : void 0)),
              this.names || ((this.names = []), (this.names.keys = {})),
              (this.plotLinesAndBandsGroups = {}),
              (this.positiveValuesOnly = !!this.logarithmic),
              (this.isLinked = sj(n.linkedTo)),
              (this.ticks = {}),
              (this.labelEdge = []),
              (this.minorTicks = {}),
              (this.plotLinesAndBands = []),
              (this.alternateBands = {}),
              null != this.len || (this.len = 0),
              (this.minRange = this.userMinRange = n.minRange || n.maxZoom),
              (this.range = n.range),
              (this.offset = n.offset || 0),
              (this.max = void 0),
              (this.min = void 0));
            let l = s5(n.crosshair, s4(t.options.tooltip.crosshairs)[+!o]);
            ((this.crosshair = !0 === l ? {} : l),
              -1 === t.axes.indexOf(this) &&
                (o ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this),
                s$(this, t[this.coll])),
              t.orderItems(this.coll),
              (this.series = this.series || []),
              t.inverted && !this.isZAxis && o && !sj(this.reversed) && (this.reversed = !0),
              (this.labelRotation = sQ(a.rotation) ? a.rotation : void 0),
              sW(this, n),
              s_(this, "afterInit"));
          }
          setOptions(t) {
            let e = this.horiz
              ? { labels: { autoRotation: [-45], padding: 3 }, margin: 15 }
              : { labels: { padding: 1 }, title: { rotation: 90 * this.side } };
            ((this.options = s1(
              e,
              "yAxis" === this.coll ? { title: { text: this.chart.options.lang.yAxisTitle } } : {},
              sR[this.coll],
              t
            )),
              s_(this, "afterSetOptions", { userOptions: t }));
          }
          defaultLabelFormatter() {
            let t = this.axis,
              { numberFormatter: e } = this.chart,
              i = sQ(this.value) ? this.value : NaN,
              s = t.chart.time,
              o = t.categories,
              r = this.dateTimeLabelFormat,
              n = sR.lang,
              a = n.numericSymbols,
              l = n.numericSymbolMagnitude || 1e3,
              h = t.logarithmic ? Math.abs(i) : t.tickInterval,
              d = null == a ? void 0 : a.length,
              c,
              p;
            if (o) p = "".concat(this.value);
            else if (r) p = s.dateFormat(r, i, !0);
            else if (d && a && h >= 1e3)
              for (; d-- && void 0 === p;)
                h >= (c = Math.pow(l, d + 1)) &&
                  (10 * i) % c == 0 &&
                  null !== a[d] &&
                  0 !== i &&
                  (p = e(i / c, -1) + a[d]);
            return (void 0 === p && (p = Math.abs(i) >= 1e4 ? e(i, -1) : e(i, -1, void 0, "")), p);
          }
          getSeriesExtremes() {
            let t,
              e = this;
            (s_(this, "getSeriesExtremes", null, function () {
              ((e.hasVisibleSeries = !1),
                (e.dataMin = e.dataMax = e.threshold = void 0),
                (e.softThreshold = !e.isXAxis),
                e.series.forEach((i) => {
                  if (i.reserveSpace()) {
                    let s = i.options,
                      o,
                      r = s.threshold,
                      n,
                      a;
                    if (
                      ((e.hasVisibleSeries = !0),
                      e.positiveValuesOnly && 0 >= (r || 0) && (r = void 0),
                      e.isXAxis)
                    )
                      (o = i.getColumn("x")).length &&
                        ((o = e.logarithmic ? o.filter((t) => t > 0) : o),
                        (n = (t = i.getXExtremes(o)).min),
                        (a = t.max),
                        sQ(n) ||
                          n instanceof Date ||
                          ((o = o.filter(sQ)), (n = (t = i.getXExtremes(o)).min), (a = t.max)),
                        o.length &&
                          ((e.dataMin = Math.min(s5(e.dataMin, n), n)),
                          (e.dataMax = Math.max(s5(e.dataMax, a), a))));
                    else {
                      let t = i.applyExtremes();
                      (sQ(t.dataMin) &&
                        ((n = t.dataMin), (e.dataMin = Math.min(s5(e.dataMin, n), n))),
                        sQ(t.dataMax) &&
                          ((a = t.dataMax), (e.dataMax = Math.max(s5(e.dataMax, a), a))),
                        sj(r) && (e.threshold = r),
                        (!s.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1));
                    }
                  }
                }));
            }),
              s_(this, "afterGetSeriesExtremes"));
          }
          translate(t, e, i, s, o, r) {
            var n;
            let a = this.linkedParent || this,
              l = s && a.old ? a.old.min : a.min;
            if (!sQ(l)) return NaN;
            let h = a.minPixelPadding,
              d =
                (a.isOrdinal ||
                  (null == (n = a.brokenAxis) ? void 0 : n.hasBreaks) ||
                  (a.logarithmic && o)) &&
                a.lin2val,
              c = 1,
              p = 0,
              u = s && a.old ? a.old.transA : a.transA,
              g = 0;
            return (
              u || (u = a.transA),
              i && ((c *= -1), (p = a.len)),
              a.reversed && ((c *= -1), (p -= c * (a.sector || a.len))),
              e
                ? ((g = (t = t * c + p - h) / u + l), d && (g = a.lin2val(g)))
                : (d && (t = a.val2lin(t)),
                  (g = c * (t - l) * u + p + c * h + (sQ(r) ? u * r : 0)),
                  a.isRadial || (g = sY(g))),
              g
            );
          }
          toPixels(t, e) {
            var i, s;
            return (
              this.translate(
                null != (i = null == (s = this.chart) ? void 0 : s.time.parse(t)) ? i : NaN,
                !1,
                !this.horiz,
                void 0,
                !0
              ) + (e ? 0 : this.pos)
            );
          }
          toValue(t, e) {
            return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, void 0, !0);
          }
          getPlotLinePath(t) {
            let e = this,
              i = e.chart,
              s = e.left,
              o = e.top,
              r = t.old,
              n = t.value,
              a = t.lineWidth,
              l = (r && i.oldChartHeight) || i.chartHeight,
              h = (r && i.oldChartWidth) || i.chartWidth,
              d = e.transB,
              c = t.translatedValue,
              p = t.force,
              u,
              g,
              f,
              m,
              x;
            function y(t, e, i) {
              return ("pass" !== p && (t < e || t > i) && (p ? (t = sG(t, e, i)) : (x = !0)), t);
            }
            let v = {
              value: n,
              lineWidth: a,
              old: r,
              force: p,
              acrossPanes: t.acrossPanes,
              translatedValue: c
            };
            return (
              s_(this, "getPlotLinePath", v, function (t) {
                ((u = f = (c = sG((c = s5(c, e.translate(n, void 0, void 0, r))), -1e9, 1e9)) + d),
                  (g = m = l - c - d),
                  sQ(c)
                    ? e.horiz
                      ? ((g = o),
                        (m = l - e.bottom + (e.options.isInternal ? 0 : i.scrollablePixelsY || 0)),
                        (u = f = y(u, s, s + e.width)))
                      : ((u = s),
                        (f = h - e.right + (i.scrollablePixelsX || 0)),
                        (g = m = y(g, o, o + e.height)))
                    : ((x = !0), (p = !1)),
                  (t.path =
                    x && !p
                      ? void 0
                      : i.renderer.crispLine(
                          [
                            ["M", u, g],
                            ["L", f, m]
                          ],
                          a || 1
                        )));
              }),
              v.path
            );
          }
          getLinearTickPositions(t, e, i) {
            let s,
              o,
              r,
              n = sY(Math.floor(e / t) * t),
              a = sY(Math.ceil(i / t) * t),
              l = [];
            if ((sY(n + t) === n && (r = 20), this.single)) return [e];
            for (s = n; s <= a && (l.push(s), (s = sY(s + t, r)) !== o);) o = s;
            return l;
          }
          getMinorTickInterval() {
            let { minorTicks: t, minorTickInterval: e } = this.options;
            return !0 === t ? s5(e, "auto") : !1 !== t ? e : void 0;
          }
          getMinorTickPositions() {
            var t;
            let e = this.options,
              i = this.tickPositions,
              s = this.minorTickInterval,
              o = this.pointRangePadding || 0,
              r = (this.min || 0) - o,
              n = (this.max || 0) + o,
              a = (null == (t = this.brokenAxis) ? void 0 : t.hasBreaks)
                ? this.brokenAxis.unitLength
                : n - r,
              l = [],
              h;
            if (a && a / s < this.len / 3) {
              let t = this.logarithmic;
              if (t)
                this.paddedTicks.forEach(function (e, i, o) {
                  i && l.push.apply(l, t.getLogTickPositions(s, o[i - 1], o[i], !0));
                });
              else if (this.dateTime && "auto" === this.getMinorTickInterval())
                l = l.concat(
                  this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(s), r, n, e.startOfWeek)
                );
              else for (h = r + ((i[0] - r) % s); h <= n && h !== l[0]; h += s) l.push(h);
            }
            return (0 !== l.length && this.trimTicks(l), l);
          }
          adjustForMinRange() {
            var t, e, i;
            let s = this.options,
              o = this.logarithmic,
              r = this.chart.time,
              { max: n, min: a, minRange: l } = this,
              h,
              d,
              c,
              p;
            (this.isXAxis &&
              void 0 === l &&
              !o &&
              (l =
                sj(s.min) || sj(s.max) || sj(s.floor) || sj(s.ceiling)
                  ? null
                  : Math.min(
                      5 *
                        (sK(
                          this.series.map((t) => {
                            let e = t.getColumn("x");
                            return t.xIncrement ? e.slice(0, 2) : e;
                          })
                        ) || 0),
                      this.dataMax - this.dataMin
                    )),
              sQ(n) &&
                sQ(a) &&
                sQ(l) &&
                n - a < l &&
                ((d = this.dataMax - this.dataMin >= l),
                (h = (l - n + a) / 2),
                (c = [a - h, null != (t = r.parse(s.min)) ? t : a - h]),
                d && (c[2] = o ? o.log2lin(this.dataMin) : this.dataMin),
                (p = [(a = sH(c)) + l, null != (e = r.parse(s.max)) ? e : a + l]),
                d && (p[2] = o ? o.log2lin(this.dataMax) : this.dataMax),
                (n = sF(p)) - a < l &&
                  ((c[0] = n - l), (c[1] = null != (i = r.parse(s.min)) ? i : n - l), (a = sH(c)))),
              (this.minRange = l),
              (this.min = a),
              (this.max = n));
          }
          getClosest() {
            let t, e;
            if (this.categories) e = 1;
            else {
              let i = [];
              (this.series.forEach(function (t) {
                let s = t.closestPointRange,
                  o = t.getColumn("x");
                1 === o.length
                  ? i.push(o[0])
                  : t.sorted && sj(s) && t.reserveSpace() && (e = sj(e) ? Math.min(e, s) : s);
              }),
                i.length && (i.sort((t, e) => t - e), (t = sK([i]))));
            }
            return t && e ? Math.min(t, e) : t || e;
          }
          nameToX(t) {
            let e = sJ(this.options.categories),
              i = e ? this.categories : this.names,
              s = t.options.x,
              o;
            return (
              (t.series.requireSorting = !1),
              sj(s) ||
                (s =
                  this.uniqueNames && i
                    ? e
                      ? i.indexOf(t.name)
                      : s5(i.keys[t.name], -1)
                    : t.series.autoIncrement()),
              -1 === s ? !e && i && (o = i.length) : sQ(s) && (o = s),
              void 0 !== o
                ? ((this.names[o] = t.name), (this.names.keys[t.name] = o))
                : t.x && (o = t.x),
              o
            );
          }
          updateNames() {
            let t = this,
              e = this.names;
            e.length > 0 &&
              (Object.keys(e.keys).forEach(function (t) {
                delete e.keys[t];
              }),
              (e.length = 0),
              (this.minRange = this.userMinRange),
              (this.series || []).forEach((e) => {
                ((e.xIncrement = null),
                  (!e.points || e.isDirtyData) &&
                    ((t.max = Math.max(t.max || 0, e.dataTable.rowCount - 1)),
                    e.processData(),
                    e.generatePoints()));
                let i = e.getColumn("x").slice();
                (e.data.forEach((e, s) => {
                  let o = i[s];
                  (null == e ? void 0 : e.options) &&
                    void 0 !== e.name &&
                    void 0 !== (o = t.nameToX(e)) &&
                    o !== e.x &&
                    (i[s] = e.x = o);
                }),
                  e.dataTable.setColumn("x", i));
              }));
          }
          setAxisTranslation() {
            var t;
            let e = this,
              i = e.max - e.min,
              s = e.linkedParent,
              o = !!e.categories,
              r = e.isXAxis,
              n = e.axisPointRange || 0,
              a,
              l = 0,
              h = 0,
              d,
              c = e.transA;
            ((r || o || n) &&
              ((a = e.getClosest()),
              s
                ? ((l = s.minPointOffset), (h = s.pointRangePadding))
                : e.series.forEach(function (t) {
                    let i = o ? 1 : r ? s5(t.options.pointRange, a, 0) : e.axisPointRange || 0,
                      s = t.options.pointPlacement;
                    if (((n = Math.max(n, i)), !e.single || o)) {
                      let e = t.is("xrange") ? !r : r;
                      ((l = Math.max(l, e && s0(s) ? 0 : i / 2)),
                        (h = Math.max(h, e && "on" === s ? 0 : i)));
                    }
                  }),
              (d = (null == (t = e.ordinal) ? void 0 : t.slope) && a ? e.ordinal.slope / a : 1),
              (e.minPointOffset = l *= d),
              (e.pointRangePadding = h *= d),
              (e.pointRange = Math.min(n, e.single && o ? 1 : i)),
              r && (e.closestPointRange = a)),
              (e.translationSlope = e.transA = c = e.staticScale || e.len / (i + h || 1)),
              (e.transB = e.horiz ? e.left : e.bottom),
              (e.minPixelPadding = c * l),
              s_(this, "afterSetAxisTranslation"));
          }
          minFromRange() {
            let { max: t, min: e } = this;
            return (sQ(t) && sQ(e) && t - e) || void 0;
          }
          setTickInterval(t) {
            var e, i, s, o;
            let {
                categories: r,
                chart: n,
                dataMax: a,
                dataMin: l,
                dateTime: h,
                isXAxis: d,
                logarithmic: c,
                options: p,
                softThreshold: u
              } = this,
              g = n.time,
              f = sQ(this.threshold) ? this.threshold : void 0,
              m = this.minRange || 0,
              { ceiling: x, floor: y, linkedTo: v, softMax: b, softMin: k } = p,
              w = sQ(v) && (null == (e = n[this.coll]) ? void 0 : e[v]),
              M = p.tickPixelInterval,
              S = p.maxPadding,
              T = p.minPadding,
              C = 0,
              A,
              P = sQ(p.tickInterval) && p.tickInterval >= 0 ? p.tickInterval : void 0,
              L,
              O,
              E,
              I;
            if (
              (h || r || w || this.getTickAmount(),
              (E = s5(this.userMin, g.parse(p.min))),
              (I = s5(this.userMax, g.parse(p.max))),
              w
                ? ((this.linkedParent = w),
                  (A = w.getExtremes()),
                  (this.min = s5(A.min, A.dataMin)),
                  (this.max = s5(A.max, A.dataMax)),
                  this.type !== w.type && sZ(11, !0, n))
                : (u &&
                    sj(f) &&
                    sQ(a) &&
                    sQ(l) &&
                    (l >= f ? ((L = f), (T = 0)) : a <= f && ((O = f), (S = 0))),
                  (this.min = s5(E, L, l)),
                  (this.max = s5(I, O, a))),
              sQ(this.max) &&
                sQ(this.min) &&
                (c &&
                  (this.positiveValuesOnly &&
                    !t &&
                    0 >= Math.min(this.min, s5(l, this.min)) &&
                    sZ(10, !0, n),
                  (this.min = sY(c.log2lin(this.min), 16)),
                  (this.max = sY(c.log2lin(this.max), 16))),
                this.range &&
                  sQ(l) &&
                  ((this.userMin = this.min = E = Math.max(l, this.minFromRange() || 0)),
                  (this.userMax = I = this.max),
                  (this.range = void 0))),
              s_(this, "foundExtremes"),
              this.adjustForMinRange(),
              sQ(this.min) && sQ(this.max))
            ) {
              if (
                (!sQ(this.userMin) && sQ(k) && k < this.min && (this.min = E = k),
                !sQ(this.userMax) && sQ(b) && b > this.max && (this.max = I = b),
                r ||
                  this.axisPointRange ||
                  (null == (i = this.stacking) ? void 0 : i.usePercentage) ||
                  w ||
                  !(C = this.max - this.min) ||
                  (!sj(E) && T && (this.min -= C * T), sj(I) || !S || (this.max += C * S)),
                !sQ(this.userMin) && sQ(y) && (this.min = Math.max(this.min, y)),
                !sQ(this.userMax) && sQ(x) && (this.max = Math.min(this.max, x)),
                u && sQ(l) && sQ(a))
              ) {
                let t = f || 0;
                !sj(E) && this.min < t && l >= t
                  ? (this.min = p.minRange ? Math.min(t, this.max - m) : t)
                  : !sj(I) &&
                    this.max > t &&
                    a <= t &&
                    (this.max = p.minRange ? Math.max(t, this.min + m) : t);
              }
              (!n.polar &&
                this.min > this.max &&
                (sj(p.min) ? (this.max = this.min) : sj(p.max) && (this.min = this.max)),
                (C = this.max - this.min));
            }
            if (
              (this.min !== this.max && sQ(this.min) && sQ(this.max)
                ? w && !P && M === w.options.tickPixelInterval
                  ? (this.tickInterval = P = w.tickInterval)
                  : (this.tickInterval = s5(
                      P,
                      this.tickAmount ? C / Math.max(this.tickAmount - 1, 1) : void 0,
                      r ? 1 : (C * M) / Math.max(this.len, M)
                    ))
                : (this.tickInterval = 1),
              d && !t)
            ) {
              let t =
                this.min !== (null == (s = this.old) ? void 0 : s.min) ||
                this.max !== (null == (o = this.old) ? void 0 : o.max);
              (this.series.forEach(function (e) {
                var i;
                ((e.forceCrop = null == (i = e.forceCropping) ? void 0 : i.call(e)),
                  e.processData(t));
              }),
                s_(this, "postProcessData", { hasExtremesChanged: t }));
            }
            (this.setAxisTranslation(),
              s_(this, "initialAxisTranslation"),
              this.pointRange &&
                !P &&
                (this.tickInterval = Math.max(this.pointRange, this.tickInterval)));
            let D = s5(
              p.minTickInterval,
              h && !this.series.some((t) => !t.sorted) ? this.closestPointRange : 0
            );
            (!P && D && this.tickInterval < D && (this.tickInterval = D),
              h || c || P || (this.tickInterval = s7(this, this.tickInterval)),
              this.tickAmount || (this.tickInterval = this.unsquish()),
              this.setTickPositions());
          }
          setTickPositions() {
            let t = this.options,
              e = t.tickPositions,
              i = t.tickPositioner,
              s = this.getMinorTickInterval(),
              o = !this.isPanning,
              r = o && t.startOnTick,
              n = o && t.endOnTick,
              a = [],
              l;
            if (
              ((this.tickmarkOffset =
                this.categories && "between" === t.tickmarkPlacement && 1 === this.tickInterval
                  ? 0.5
                  : 0),
              (this.single =
                this.min === this.max &&
                sj(this.min) &&
                !this.tickAmount &&
                (this.min % 1 == 0 || !1 !== t.allowDecimals)),
              e)
            )
              a = e.slice();
            else if (sQ(this.min) && sQ(this.max)) {
              var h, d;
              if (
                !(null == (h = this.ordinal) ? void 0 : h.positions) &&
                (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)
              )
                ((a = [this.min, this.max]), sZ(19, !1, this.chart));
              else if (this.dateTime)
                a = this.getTimeTicks(
                  this.dateTime.normalizeTimeTickInterval(this.tickInterval, t.units),
                  this.min,
                  this.max,
                  t.startOfWeek,
                  null == (d = this.ordinal) ? void 0 : d.positions,
                  this.closestPointRange,
                  !0
                );
              else if (this.logarithmic)
                a = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
              else {
                let t = this.tickInterval,
                  e = t;
                for (; e <= 2 * t;)
                  if (
                    ((a = this.getLinearTickPositions(this.tickInterval, this.min, this.max)),
                    this.tickAmount && a.length > this.tickAmount)
                  )
                    this.tickInterval = s7(this, (e *= 1.1));
                  else break;
              }
              (a.length > this.len && (a = [a[0], a[a.length - 1]])[0] === a[1] && (a.length = 1),
                i &&
                  ((this.tickPositions = a), (l = i.apply(this, [this.min, this.max])) && (a = l)));
            }
            ((this.tickPositions = a),
              (this.minorTickInterval =
                "auto" === s && this.tickInterval ? this.tickInterval / t.minorTicksPerMajor : s),
              (this.paddedTicks = a.slice(0)),
              this.trimTicks(a, r, n),
              !this.isLinked &&
                sQ(this.min) &&
                sQ(this.max) &&
                (this.single &&
                  a.length < 2 &&
                  !this.categories &&
                  !this.series.some(
                    (t) => t.is("heatmap") && "between" === t.options.pointPlacement
                  ) &&
                  ((this.min -= 0.5), (this.max += 0.5)),
                e || l || this.adjustTickAmount()),
              s_(this, "afterSetTickPositions"));
          }
          trimTicks(t, e, i) {
            let s = t[0],
              o = t[t.length - 1],
              r = (!this.isOrdinal && this.minPointOffset) || 0;
            if ((s_(this, "trimTicks"), !this.isLinked || !this.grid)) {
              if (e && s !== -1 / 0) this.min = s;
              else for (; this.min - r > t[0];) t.shift();
              if (i) this.max = o;
              else for (; this.max + r < t[t.length - 1];) t.pop();
              0 === t.length && sj(s) && !this.options.tickPositions && t.push((o + s) / 2);
            }
          }
          alignToOthers() {
            let t,
              e = this,
              i = e.chart,
              s = [this],
              o = e.options,
              r = i.options.chart,
              n = "yAxis" === this.coll && r.alignThresholds,
              a = [];
            if (
              ((e.thresholdAlignment = void 0),
              ((!1 !== r.alignTicks && o.alignTicks) || n) &&
                !1 !== o.startOnTick &&
                !1 !== o.endOnTick &&
                !e.logarithmic)
            ) {
              let o = (t) => {
                  let { horiz: e, options: i } = t;
                  return [e ? i.left : i.top, i.width, i.height, i.pane].join(",");
                },
                r = o(this);
              i[this.coll].forEach(function (i) {
                let { series: n } = i;
                n.length &&
                  n.some((t) => t.visible) &&
                  i !== e &&
                  o(i) === r &&
                  ((t = !0), s.push(i));
              });
            }
            if (t && n) {
              s.forEach((t) => {
                let i = t.getThresholdAlignment(e);
                sQ(i) && a.push(i);
              });
              let t = a.length > 1 ? a.reduce((t, e) => (t += e), 0) / a.length : void 0;
              s.forEach((e) => {
                e.thresholdAlignment = t;
              });
            }
            return t;
          }
          getThresholdAlignment(t) {
            if (
              ((!sQ(this.dataMin) ||
                (this !== t && this.series.some((t) => t.isDirty || t.isDirtyData))) &&
                this.getSeriesExtremes(),
              sQ(this.threshold))
            ) {
              let t = sG(
                (this.threshold - (this.dataMin || 0)) /
                  ((this.dataMax || 0) - (this.dataMin || 0)),
                0,
                1
              );
              return (this.options.reversed && (t = 1 - t), t);
            }
          }
          getTickAmount() {
            let t = this.options,
              e = t.tickPixelInterval,
              i = t.tickAmount;
            (sj(t.tickInterval) ||
              i ||
              !(this.len < e) ||
              this.isRadial ||
              this.logarithmic ||
              !t.startOnTick ||
              !t.endOnTick ||
              (i = 2),
              !i && this.alignToOthers() && (i = Math.ceil(this.len / e) + 1),
              i < 4 && ((this.finalTickAmt = i), (i = 5)),
              (this.tickAmount = i));
          }
          adjustTickAmount() {
            let t = this,
              {
                finalTickAmt: e,
                max: i,
                min: s,
                options: o,
                tickPositions: r,
                tickAmount: n,
                thresholdAlignment: a
              } = t,
              l = null == r ? void 0 : r.length,
              h = s5(t.threshold, t.softThreshold ? 0 : null),
              d,
              c,
              p = t.tickInterval,
              u,
              g = () => r.push(sY(r[r.length - 1] + p)),
              f = () => r.unshift(sY(r[0] - p));
            if (
              (sQ(a) &&
                ((u = a < 0.5 ? Math.ceil(a * (n - 1)) : Math.floor(a * (n - 1))),
                o.reversed && (u = n - 1 - u)),
              t.hasData() && sQ(s) && sQ(i))
            ) {
              let a = () => {
                ((t.transA *= (l - 1) / (n - 1)),
                  (t.min = o.startOnTick ? r[0] : Math.min(s, r[0])),
                  (t.max = o.endOnTick ? r[r.length - 1] : Math.max(i, r[r.length - 1])));
              };
              if (sQ(u) && sQ(t.threshold)) {
                for (; r[u] !== h || r.length !== n || r[0] > s || r[r.length - 1] < i;) {
                  for (r.length = 0, r.push(t.threshold); r.length < n;)
                    void 0 === r[u] || r[u] > t.threshold ? f() : g();
                  if (p > 8 * t.tickInterval) break;
                  p *= 2;
                }
                a();
              } else if (l < n) {
                for (; r.length < n;) r.length % 2 || s === h ? g() : f();
                a();
              }
              if (sj(e)) {
                for (c = d = r.length; c--;)
                  ((3 === e && c % 2 == 1) || (e <= 2 && c > 0 && c < d - 1)) && r.splice(c, 1);
                t.finalTickAmt = void 0;
              }
            }
          }
          setScale() {
            var t, e, i, s, o;
            let { coll: r, stacking: n } = this,
              a = !1,
              l = !1;
            (this.series.forEach((t) => {
              var e;
              ((a = a || t.isDirtyData || t.isDirty),
                (l = l || (null == (e = t.xAxis) ? void 0 : e.isDirty) || !1));
            }),
              this.setAxisSize());
            let h = this.len !== (null == (t = this.old) ? void 0 : t.len);
            (h ||
            a ||
            l ||
            this.isLinked ||
            this.forceRedraw ||
            this.userMin !== (null == (e = this.old) ? void 0 : e.userMin) ||
            this.userMax !== (null == (i = this.old) ? void 0 : i.userMax) ||
            this.alignToOthers()
              ? (n && "yAxis" === r && n.buildStacks(),
                (this.forceRedraw = !1),
                this.userMinRange || (this.minRange = void 0),
                this.getSeriesExtremes(),
                this.setTickInterval(),
                n && "xAxis" === r && n.buildStacks(),
                this.isDirty ||
                  (this.isDirty =
                    h ||
                    this.min !== (null == (s = this.old) ? void 0 : s.min) ||
                    this.max !== (null == (o = this.old) ? void 0 : o.max)))
              : n && n.cleanStacks(),
              a && delete this.allExtremes,
              s_(this, "afterSetScale"));
          }
          setExtremes(t, e) {
            let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
              s = arguments.length > 3 ? arguments[3] : void 0,
              o = arguments.length > 4 ? arguments[4] : void 0,
              r = this.chart;
            (this.series.forEach((t) => {
              delete t.kdTree;
            }),
              (t = r.time.parse(t)),
              (e = r.time.parse(e)),
              s_(this, "setExtremes", (o = sq(o, { min: t, max: e })), (t) => {
                ((this.userMin = t.min),
                  (this.userMax = t.max),
                  (this.eventArgs = t),
                  i && r.redraw(s));
              }));
          }
          setAxisSize() {
            let t = this.chart,
              e = this.options,
              i = e.offsets || [0, 0, 0, 0],
              s = this.horiz,
              o = (this.width = Math.round(
                s6(s5(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)
              )),
              r = (this.height = Math.round(
                s6(s5(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)
              )),
              n = (this.top = Math.round(s6(s5(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop))),
              a = (this.left = Math.round(
                s6(s5(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft)
              ));
            ((this.bottom = t.chartHeight - r - n),
              (this.right = t.chartWidth - o - a),
              (this.len = Math.max(s ? o : r, 0)),
              (this.pos = s ? a : n));
          }
          getExtremes() {
            let t = this.logarithmic;
            return {
              min: t ? sY(t.lin2log(this.min)) : this.min,
              max: t ? sY(t.lin2log(this.max)) : this.max,
              dataMin: this.dataMin,
              dataMax: this.dataMax,
              userMin: this.userMin,
              userMax: this.userMax
            };
          }
          getThreshold(t) {
            let e = this.logarithmic,
              i = e ? e.lin2log(this.min) : this.min,
              s = e ? e.lin2log(this.max) : this.max;
            return (
              null === t || t === -1 / 0
                ? (t = i)
                : t === 1 / 0
                  ? (t = s)
                  : i > t
                    ? (t = i)
                    : s < t && (t = s),
              this.translate(t, 0, 1, 0, 1)
            );
          }
          autoLabelAlign(t) {
            let e = (s5(t, 0) - 90 * this.side + 720) % 360,
              i = { align: "center" };
            return (
              s_(this, "autoLabelAlign", i, function (t) {
                e > 15 && e < 165 ? (t.align = "right") : e > 195 && e < 345 && (t.align = "left");
              }),
              i.align
            );
          }
          tickSize(t) {
            let e = this.options,
              i = s5(
                e["tick" === t ? "tickWidth" : "minorTickWidth"],
                "tick" === t && this.isXAxis && !this.categories ? 1 : 0
              ),
              s = e["tick" === t ? "tickLength" : "minorTickLength"],
              o;
            i && s && ("inside" === e[t + "Position"] && (s = -s), (o = [s, i]));
            let r = { tickSize: o };
            return (s_(this, "afterTickSize", r), r.tickSize);
          }
          labelMetrics() {
            let t = this.chart.renderer,
              e = this.ticks,
              i = e[Object.keys(e)[0]] || {};
            return this.chart.renderer.fontMetrics(i.label || i.movedLabel || t.box);
          }
          unsquish() {
            let t = this.options.labels,
              e = t.padding || 0,
              i = this.horiz,
              s = this.tickInterval,
              o = this.len / ((+!!this.categories + this.max - this.min) / s),
              r = t.rotation,
              n = sY(0.8 * this.labelMetrics().h),
              a = Math.max(this.max - this.min, 0),
              l = function (t) {
                let i = (t + 2 * e) / (o || 1);
                return (
                  (i = i > 1 ? Math.ceil(i) : 1) * s > a &&
                    t !== 1 / 0 &&
                    o !== 1 / 0 &&
                    a &&
                    (i = Math.ceil(a / s)),
                  sY(i * s)
                );
              },
              h = s,
              d,
              c = Number.MAX_VALUE,
              p;
            if (i) {
              if (
                (!t.staggerLines &&
                  (sQ(r) ? (p = [r]) : o < t.autoRotationLimit && (p = t.autoRotation)),
                p)
              ) {
                let t, e;
                for (let i of p)
                  (i === r || (i && i >= -90 && i <= 90)) &&
                    (e = (t = l(Math.abs(n / Math.sin(sX * i)))) + Math.abs(i / 360)) < c &&
                    ((c = e), (d = i), (h = t));
              }
            } else h = l(0.75 * n);
            return (
              (this.autoRotation = p),
              (this.labelRotation = s5(d, sQ(r) ? r : 0)),
              t.step ? s : h
            );
          }
          getSlotWidth(t) {
            let e = this.chart,
              i = this.horiz,
              s = this.options.labels,
              o = Math.max(this.tickPositions.length - !this.categories, 1),
              r = e.margin[3];
            if (t && sQ(t.slotWidth)) return t.slotWidth;
            if (i && s.step < 2 && !this.isRadial)
              return s.rotation ? 0 : ((this.staggerLines || 1) * this.len) / o;
            if (!i) {
              let t = s.style.width;
              if (void 0 !== t) return parseInt(String(t), 10);
              if (r) return r - e.spacing[3];
            }
            return 0.33 * e.chartWidth;
          }
          renderUnsquish() {
            let t = this.chart,
              e = t.renderer,
              i = this.tickPositions,
              s = this.ticks,
              o = this.options.labels,
              r = o.style,
              n = this.horiz,
              a = this.getSlotWidth(),
              l = Math.max(1, Math.round(a - (n ? 2 * (o.padding || 0) : o.distance || 0))),
              h = {},
              d = this.labelMetrics(),
              c = r.lineClamp,
              p,
              u = null != c ? c : Math.floor(this.len / (i.length * d.h)) || 1,
              g = 0;
            (s0(o.rotation) || (h.rotation = o.rotation || 0),
              i.forEach(function (t) {
                var e;
                let i = s[t];
                i.movedLabel && i.replaceMovedLabel();
                let o = (null == (e = i.label) ? void 0 : e.textPxLength) || 0;
                o > g && (g = o);
              }),
              (this.maxLabelLength = g),
              this.autoRotation
                ? g > l && g > d.h
                  ? (h.rotation = this.labelRotation)
                  : (this.labelRotation = 0)
                : a && (p = l),
              h.rotation &&
                ((p = g > 0.5 * t.chartHeight ? 0.33 * t.chartHeight : g), c || (u = 1)),
              (this.labelAlign = o.align || this.autoLabelAlign(this.labelRotation)),
              this.labelAlign && (h.align = this.labelAlign),
              i.forEach(function (t) {
                let e = s[t],
                  i = null == e ? void 0 : e.label,
                  o = r.width,
                  n = {};
                i &&
                  (i.attr(h),
                  e.shortenLabel
                    ? e.shortenLabel()
                    : p &&
                        !o &&
                        "nowrap" !== r.whiteSpace &&
                        (p < (i.textPxLength || 0) || "SPAN" === i.element.tagName)
                      ? i.css(sq(n, { width: "".concat(p, "px"), lineClamp: u }))
                      : !i.styles.width || n.width || o || i.css({ width: "auto" }),
                  (e.rotation = h.rotation));
              }, this),
              (this.tickRotCorr = e.rotCorr(d.b, this.labelRotation || 0, 0 !== this.side)));
          }
          hasData() {
            return (
              this.series.some(function (t) {
                return t.hasData();
              }) ||
              (this.options.showEmpty && sj(this.min) && sj(this.max))
            );
          }
          addTitle(t) {
            let e,
              i = this.chart.renderer,
              s = this.horiz,
              o = this.opposite,
              r = this.options.title,
              n = this.chart.styledMode;
            (this.axisTitle ||
              ((e = r.textAlign) ||
                (e = (
                  s
                    ? { low: "left", middle: "center", high: "right" }
                    : { low: o ? "right" : "left", middle: "center", high: o ? "left" : "right" }
                )[r.align]),
              (this.axisTitle = i
                .text(r.text || "", 0, 0, r.useHTML)
                .attr({ zIndex: 7, rotation: r.rotation || 0, align: e })
                .addClass("highcharts-axis-title")),
              n || this.axisTitle.css(s1(r.style)),
              this.axisTitle.add(this.axisGroup),
              (this.axisTitle.isNew = !0)),
              n || r.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }),
              this.axisTitle[t ? "show" : "hide"](t));
          }
          generateTick(t) {
            let e = this.ticks;
            e[t] ? e[t].addLabel() : (e[t] = new sD(this, t));
          }
          createGroups() {
            let { axisParent: t, chart: e, coll: i, options: s } = this,
              o = e.renderer,
              r = (e, r, n) =>
                o
                  .g(e)
                  .attr({ zIndex: n })
                  .addClass(
                    "highcharts-".concat(i.toLowerCase()).concat(r, " ") +
                      (this.isRadial ? "highcharts-radial-axis".concat(r, " ") : "") +
                      (s.className || "")
                  )
                  .add(t);
            this.axisGroup ||
              ((this.gridGroup = r("grid", "-grid", s.gridZIndex)),
              (this.axisGroup = r("axis", "", s.zIndex)),
              (this.labelGroup = r("axis-labels", "-labels", s.labels.zIndex)));
          }
          getOffset() {
            let t = this,
              { chart: e, horiz: i, options: s, side: o, ticks: r, tickPositions: n, coll: a } = t,
              l = e.inverted && !t.isZAxis ? [1, 0, 3, 2][o] : o,
              h = t.hasData(),
              d = s.title,
              c = s.labels,
              p = sQ(s.crossing),
              u = e.axisOffset,
              g = e.clipOffset,
              f = [-1, 1, 1, -1][o],
              m,
              x = 0,
              y,
              v = 0,
              b = 0,
              k,
              w;
            if (
              ((t.showAxis = m = h || s.showEmpty),
              (t.staggerLines = (t.horiz && c.staggerLines) || void 0),
              t.createGroups(),
              h || t.isLinked
                ? (n.forEach(function (e) {
                    t.generateTick(e);
                  }),
                  t.renderUnsquish(),
                  (t.reserveSpaceDefault =
                    0 === o || 2 === o || { 1: "left", 3: "right" }[o] === t.labelAlign),
                  s5(
                    c.reserveSpace,
                    !p && null,
                    "center" === t.labelAlign || null,
                    t.reserveSpaceDefault
                  ) &&
                    n.forEach(function (t) {
                      b = Math.max(r[t].getLabelSize(), b);
                    }),
                  t.staggerLines && (b *= t.staggerLines),
                  (t.labelOffset = b * (t.opposite ? -1 : 1)))
                : s3(r, function (t, e) {
                    (t.destroy(), delete r[e]);
                  }),
              (null == d ? void 0 : d.text) &&
                !1 !== d.enabled &&
                (t.addTitle(m),
                m &&
                  !p &&
                  !1 !== d.reserveSpace &&
                  ((t.titleOffset = x = t.axisTitle.getBBox()[i ? "height" : "width"]),
                  (v = sj((y = d.offset)) ? 0 : s5(d.margin, i ? 5 : 10)))),
              t.renderLine(),
              (t.offset = f * s5(s.offset, u[o] ? u[o] + (s.margin || 0) : 0)),
              (t.tickRotCorr = t.tickRotCorr || { x: 0, y: 0 }),
              (w = 0 === o ? -t.labelMetrics().h : 2 === o ? t.tickRotCorr.y : 0),
              (k = Math.abs(b) + v),
              b &&
                ((k -= w),
                (k +=
                  f * (i ? s5(c.y, t.tickRotCorr.y + f * c.distance) : s5(c.x, f * c.distance)))),
              (t.axisTitleMargin = s5(y, k)),
              t.getMaxLabelDimensions && (t.maxLabelDimensions = t.getMaxLabelDimensions(r, n)),
              "colorAxis" !== a && g)
            ) {
              let e = this.tickSize("tick");
              u[o] = Math.max(
                u[o],
                (t.axisTitleMargin || 0) + x + f * t.offset,
                k,
                (null == n ? void 0 : n.length) && e ? e[0] + f * t.offset : 0
              );
              let i = !t.axisLine || s.offset ? 0 : t.axisLine.strokeWidth() / 2;
              g[l] = Math.max(g[l], i);
            }
            s_(this, "afterGetOffset");
          }
          getLinePath(t) {
            let e = this.chart,
              i = this.opposite,
              s = this.offset,
              o = this.horiz,
              r = this.left + (i ? this.width : 0) + s,
              n = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
            return (
              i && (t *= -1),
              e.renderer.crispLine(
                [
                  ["M", o ? this.left : r, o ? n : this.top],
                  ["L", o ? e.chartWidth - this.right : r, o ? n : e.chartHeight - this.bottom]
                ],
                t
              )
            );
          }
          renderLine() {
            this.axisLine ||
              ((this.axisLine = this.chart.renderer
                .path()
                .addClass("highcharts-axis-line")
                .add(this.axisGroup)),
              this.chart.styledMode ||
                this.axisLine.attr({
                  stroke: this.options.lineColor,
                  "stroke-width": this.options.lineWidth,
                  zIndex: 7
                }));
          }
          getTitlePosition(t) {
            let e = this.horiz,
              i = this.left,
              s = this.top,
              o = this.len,
              r = this.options.title,
              n = e ? i : s,
              a = this.opposite,
              l = this.offset,
              h = r.x,
              d = r.y,
              c = this.chart.renderer.fontMetrics(t),
              p = t ? Math.max(t.getBBox(!1, 0).height - c.h - 1, 0) : 0,
              u = { low: n + (e ? 0 : o), middle: n + o / 2, high: n + (e ? o : 0) }[r.align],
              g =
                (e ? s + this.height : i) +
                (e ? 1 : -1) * (a ? -1 : 1) * (this.axisTitleMargin || 0) +
                [-p, p, c.f, -p][this.side],
              f = {
                x: e ? u + h : g + (a ? this.width : 0) + l + h,
                y: e ? g + d - (a ? this.height : 0) + l : u + d
              };
            return (s_(this, "afterGetTitlePosition", { titlePosition: f }), f);
          }
          renderMinorTick(t, e) {
            let i = this.minorTicks;
            (i[t] || (i[t] = new sD(this, t, "minor")),
              e && i[t].isNew && i[t].render(null, !0),
              i[t].render(null, !1, 1));
          }
          renderTick(t, e, i) {
            var s;
            let o = this.isLinked,
              r = this.ticks;
            (!o ||
              (t >= this.min && t <= this.max) ||
              (null == (s = this.grid) ? void 0 : s.isColumn)) &&
              (r[t] || (r[t] = new sD(this, t)),
              i && r[t].isNew && r[t].render(e, !0, -1),
              r[t].render(e));
          }
          render() {
            let t,
              e,
              i = this,
              s = i.chart,
              o = i.logarithmic,
              r = s.renderer,
              n = i.options,
              a = i.isLinked,
              l = i.tickPositions,
              h = i.axisTitle,
              d = i.ticks,
              c = i.minorTicks,
              p = i.alternateBands,
              u = n.stackLabels,
              g = n.alternateGridColor,
              f = n.crossing,
              m = i.tickmarkOffset,
              x = i.axisLine,
              y = i.showAxis,
              v = sB(r.globalAnimation);
            if (
              ((i.labelEdge.length = 0),
              (i.overlap = !1),
              [d, c, p].forEach(function (t) {
                s3(t, function (t) {
                  t.isActive = !1;
                });
              }),
              sQ(f))
            ) {
              let t = this.isXAxis ? s.yAxis[0] : s.xAxis[0],
                e = [1, -1, -1, 1][this.side];
              if (t) {
                let s = t.toPixels(f, !0);
                (i.horiz && (s = t.len - s), (i.offset = e * s));
              }
            }
            if (i.hasData() || a) {
              let r = i.chart.hasRendered && i.old && sQ(i.old.min);
              (i.minorTickInterval &&
                !i.categories &&
                i.getMinorTickPositions().forEach(function (t) {
                  i.renderMinorTick(t, r);
                }),
                l.length &&
                  (l.forEach(function (t, e) {
                    i.renderTick(t, e, r);
                  }),
                  m &&
                    (0 === i.min || i.single) &&
                    (d[-1] || (d[-1] = new sD(i, -1, null, !0)), d[-1].render(-1))),
                g &&
                  l.forEach(function (r, n) {
                    ((e = void 0 !== l[n + 1] ? l[n + 1] + m : i.max - m),
                      n % 2 == 0 &&
                        r < i.max &&
                        e <= i.max + (s.polar ? -m : m) &&
                        (p[r] || (p[r] = new G.PlotLineOrBand(i, {})),
                        (t = r + m),
                        (p[r].options = {
                          from: o ? o.lin2log(t) : t,
                          to: o ? o.lin2log(e) : e,
                          color: g,
                          className: "highcharts-alternate-grid"
                        }),
                        p[r].render(),
                        (p[r].isActive = !0)));
                  }),
                i._addedPlotLB ||
                  ((i._addedPlotLB = !0),
                  (n.plotLines || []).concat(n.plotBands || []).forEach(function (t) {
                    i.addPlotBandOrLine(t);
                  })));
            }
            ([d, c, p].forEach(function (t) {
              let e = [],
                i = v.duration;
              (s3(t, function (t, i) {
                t.isActive || (t.render(i, !1, 0), (t.isActive = !1), e.push(i));
              }),
                s8(
                  function () {
                    let i = e.length;
                    for (; i--;)
                      t[e[i]] && !t[e[i]].isActive && (t[e[i]].destroy(), delete t[e[i]]);
                  },
                  t !== p && s.hasRendered && i ? i : 0
                ));
            }),
              x &&
                (x[x.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(x.strokeWidth()) }),
                (x.isPlaced = !0),
                x[y ? "show" : "hide"](y)),
              h && y && (h[h.isNew ? "attr" : "animate"](i.getTitlePosition(h)), (h.isNew = !1)),
              (null == u ? void 0 : u.enabled) && i.stacking && i.stacking.renderStackTotals(),
              (i.old = {
                len: i.len,
                max: i.max,
                min: i.min,
                transA: i.transA,
                userMax: i.userMax,
                userMin: i.userMin
              }),
              (i.isDirty = !1),
              s_(this, "afterRender"));
          }
          redraw() {
            (this.visible &&
              (this.render(),
              this.plotLinesAndBands.forEach(function (t) {
                t.render();
              })),
              this.series.forEach(function (t) {
                t.isDirty = !0;
              }));
          }
          getKeepProps() {
            return this.keepProps || ot.keepProps;
          }
          destroy(t) {
            let e = this,
              i = e.plotLinesAndBands,
              s = this.eventOptions;
            if (
              (s_(this, "destroy", { keepEvents: t }),
              t || s9(e),
              [e.ticks, e.minorTicks, e.alternateBands].forEach(function (t) {
                sU(t);
              }),
              i)
            ) {
              let t = i.length;
              for (; t--;) i[t].destroy();
            }
            for (let t in ([
              "axisLine",
              "axisTitle",
              "axisGroup",
              "gridGroup",
              "labelGroup",
              "cross",
              "scrollbar"
            ].forEach(function (t) {
              e[t] && (e[t] = e[t].destroy());
            }),
            e.plotLinesAndBandsGroups))
              e.plotLinesAndBandsGroups[t] = e.plotLinesAndBandsGroups[t].destroy();
            (s3(e, function (t, i) {
              -1 === e.getKeepProps().indexOf(i) && delete e[i];
            }),
              (this.eventOptions = s));
          }
          drawCrosshair(t, e) {
            var i, s;
            let o = this.crosshair,
              r = null == (i = null == o ? void 0 : o.snap) || i,
              n = this.chart,
              a,
              l,
              h,
              d = this.cross,
              c;
            if (
              (s_(this, "drawCrosshair", { e: t, point: e }),
              t || (t = null == (s = this.cross) ? void 0 : s.e),
              o && !1 !== (sj(e) || !r))
            ) {
              if (
                (r
                  ? sj(e) &&
                    (l = s5(
                      "colorAxis" !== this.coll ? e.crosshairPos : null,
                      this.isXAxis ? e.plotX : this.len - e.plotY
                    ))
                  : (l = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos)),
                sj(l) &&
                  ((c = {
                    value: e && (this.isXAxis ? e.x : s5(e.stackY, e.y)),
                    translatedValue: l
                  }),
                  n.polar &&
                    sq(c, {
                      isCrosshair: !0,
                      chartX: null == t ? void 0 : t.chartX,
                      chartY: null == t ? void 0 : t.chartY,
                      point: e
                    }),
                  (a = this.getPlotLinePath(c) || null)),
                !sj(a))
              )
                return void this.hideCrosshair();
              ((h = this.categories && !this.isRadial),
                d ||
                  ((this.cross = d =
                    n.renderer
                      .path()
                      .addClass(
                        "highcharts-crosshair highcharts-crosshair-" +
                          (h ? "category " : "thin ") +
                          (o.className || "")
                      )
                      .attr({ zIndex: s5(o.zIndex, 2) })
                      .add()),
                  !n.styledMode &&
                    (d
                      .attr({
                        stroke:
                          o.color || (h ? tq.parse("#ccd3ff").setOpacity(0.25).get() : "#cccccc"),
                        "stroke-width": s5(o.width, 1)
                      })
                      .css({ "pointer-events": "none" }),
                    o.dashStyle && d.attr({ dashstyle: o.dashStyle }))),
                d.show().attr({ d: a }),
                h && !o.width && d.attr({ "stroke-width": this.transA }),
                (this.cross.e = t));
            } else this.hideCrosshair();
            s_(this, "afterDrawCrosshair", { e: t, point: e });
          }
          hideCrosshair() {
            (this.cross && this.cross.hide(), s_(this, "afterHideCrosshair"));
          }
          update(t, e) {
            let i = this.chart;
            ((t = s1(this.userOptions, t)),
              this.destroy(!0),
              this.init(i, t),
              (i.isDirtyBox = !0),
              s5(e, !0) && i.redraw());
          }
          remove(t) {
            let e = this.chart,
              i = this.coll,
              s = this.series,
              o = s.length;
            for (; o--;) s[o] && s[o].remove(!1);
            (sV(e.axes, this),
              sV(e[i] || [], this),
              e.orderItems(i),
              this.destroy(),
              (e.isDirtyBox = !0),
              s5(t, !0) && e.redraw());
          }
          setTitle(t, e) {
            this.update({ title: t }, e);
          }
          setCategories(t, e) {
            this.update({ categories: t }, e);
          }
          constructor(t, e, i) {
            this.init(t, e, i);
          }
        }
        ot.keepProps = [
          "coll",
          "extKey",
          "hcEvents",
          "len",
          "names",
          "series",
          "userMax",
          "userMin"
        ];
        let { addEvent: oe, getMagnitude: oi, normalizeTickInterval: os, timeUnits: oo } = tu;
        !(function (t) {
          function e() {
            return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
          }
          function i() {
            if ("datetime" !== this.type) {
              this.dateTime = void 0;
              return;
            }
            this.dateTime || (this.dateTime = new s(this));
          }
          t.compose = function (t) {
            return (
              t.keepProps.includes("dateTime") ||
                (t.keepProps.push("dateTime"),
                (t.prototype.getTimeTicks = e),
                oe(t, "afterSetType", i)),
              t
            );
          };
          class s {
            normalizeTimeTickInterval(t, e) {
              let i = e || [
                  ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                  ["second", [1, 2, 5, 10, 15, 30]],
                  ["minute", [1, 2, 5, 10, 15, 30]],
                  ["hour", [1, 2, 3, 4, 6, 8, 12]],
                  ["day", [1, 2]],
                  ["week", [1, 2]],
                  ["month", [1, 2, 3, 4, 6]],
                  ["year", null]
                ],
                s = i[i.length - 1],
                o = oo[s[0]],
                r = s[1],
                n;
              for (
                n = 0;
                n < i.length &&
                ((o = oo[(s = i[n])[0]]),
                (r = s[1]),
                !i[n + 1] || !(t <= (o * r[r.length - 1] + oo[i[n + 1][0]]) / 2));
                n++
              );
              o === oo.year && t < 5 * o && (r = [1, 2, 5]);
              let a = os(t / o, r, "year" === s[0] ? Math.max(oi(t / o), 1) : 1);
              return { unitRange: o, count: a, unitName: s[0] };
            }
            getXDateFormat(t, e) {
              let { axis: i } = this,
                s = i.chart.time;
              return i.closestPointRange
                ? s.getDateFormat(i.closestPointRange, t, i.options.startOfWeek, e) ||
                    s.resolveDTLFormat(e.year).main
                : s.resolveDTLFormat(e.day).main;
            }
            constructor(t) {
              this.axis = t;
            }
          }
          t.Additions = s;
        })(A || (A = {}));
        let or = A,
          { addEvent: on, normalizeTickInterval: oa, pick: ol } = tu;
        !(function (t) {
          function e() {
            "logarithmic" !== this.type
              ? (this.logarithmic = void 0)
              : null != this.logarithmic || (this.logarithmic = new s(this));
          }
          function i() {
            let t = this.logarithmic;
            t &&
              ((this.lin2val = function (e) {
                return t.lin2log(e);
              }),
              (this.val2lin = function (e) {
                return t.log2lin(e);
              }));
          }
          t.compose = function (t) {
            return (
              t.keepProps.includes("logarithmic") ||
                (t.keepProps.push("logarithmic"), on(t, "afterSetType", e), on(t, "afterInit", i)),
              t
            );
          };
          class s {
            getLogTickPositions(t, e, i, s) {
              let o = this.axis,
                r = o.len,
                n = o.options,
                a = [];
              if ((s || (this.minorAutoInterval = void 0), t >= 0.5))
                ((t = Math.round(t)), (a = o.getLinearTickPositions(t, e, i)));
              else if (t >= 0.08) {
                let o,
                  r,
                  n,
                  l,
                  h,
                  d,
                  c,
                  p = Math.floor(e);
                for (
                  o =
                    t > 0.3 ? [1, 2, 4] : t > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    r = p;
                  r < i + 1 && !c;
                  r++
                )
                  for (n = 0, l = o.length; n < l && !c; n++)
                    ((h = this.log2lin(this.lin2log(r) * o[n])) > e &&
                      (!s || d <= i) &&
                      void 0 !== d &&
                      a.push(d),
                      d > i && (c = !0),
                      (d = h));
              } else {
                let l = this.lin2log(e),
                  h = this.lin2log(i),
                  d = s ? o.getMinorTickInterval() : n.tickInterval,
                  c = n.tickPixelInterval / (s ? 5 : 1),
                  p = s ? r / o.tickPositions.length : r;
                ((t = oa(
                  (t = ol(
                    "auto" === d ? null : d,
                    this.minorAutoInterval,
                    ((h - l) * c) / (p || 1)
                  ))
                )),
                  (a = o.getLinearTickPositions(t, l, h).map(this.log2lin)),
                  s || (this.minorAutoInterval = t / 5));
              }
              return (s || (o.tickInterval = t), a);
            }
            lin2log(t) {
              return Math.pow(10, t);
            }
            log2lin(t) {
              return Math.log(t) / Math.LN10;
            }
            constructor(t) {
              this.axis = t;
            }
          }
          t.Additions = s;
        })(P || (P = {}));
        let oh = P,
          { erase: od, extend: oc, isNumber: op } = tu;
        !(function (t) {
          let e;
          function i(t) {
            return this.addPlotBandOrLine(t, "plotBands");
          }
          function s(t, i) {
            let s = this.userOptions,
              o = new e(this, t);
            if ((this.visible && (o = o.render()), o)) {
              if (
                (this._addedPlotLB ||
                  ((this._addedPlotLB = !0),
                  (s.plotLines || []).concat(s.plotBands || []).forEach((t) => {
                    this.addPlotBandOrLine(t);
                  })),
                i)
              ) {
                let e = s[i] || [];
                (e.push(t), (s[i] = e));
              }
              this.plotLinesAndBands.push(o);
            }
            return o;
          }
          function o(t) {
            return this.addPlotBandOrLine(t, "plotLines");
          }
          function r(t, e, i) {
            i = i || this.options;
            let s = this.getPlotLinePath({ value: e, force: !0, acrossPanes: i.acrossPanes }),
              o = [],
              r = this.horiz,
              n =
                !op(this.min) ||
                !op(this.max) ||
                (t < this.min && e < this.min) ||
                (t > this.max && e > this.max),
              a = this.getPlotLinePath({ value: t, force: !0, acrossPanes: i.acrossPanes }),
              l,
              h = 1,
              d;
            if (a && s)
              for (
                n && ((d = a.toString() === s.toString()), (h = 0)), l = 0;
                l < a.length;
                l += 2
              ) {
                let t = a[l],
                  e = a[l + 1],
                  i = s[l],
                  n = s[l + 1];
                (("M" === t[0] || "L" === t[0]) &&
                  ("M" === e[0] || "L" === e[0]) &&
                  ("M" === i[0] || "L" === i[0]) &&
                  ("M" === n[0] || "L" === n[0]) &&
                  (r && i[1] === t[1]
                    ? ((i[1] += h), (n[1] += h))
                    : r || i[2] !== t[2] || ((i[2] += h), (n[2] += h)),
                  o.push(
                    ["M", t[1], t[2]],
                    ["L", e[1], e[2]],
                    ["L", n[1], n[2]],
                    ["L", i[1], i[2]],
                    ["Z"]
                  )),
                  (o.isFlat = d));
              }
            return o;
          }
          function n(t) {
            this.removePlotBandOrLine(t);
          }
          function a(t) {
            let e = this.plotLinesAndBands,
              i = this.options,
              s = this.userOptions;
            if (e) {
              let o = e.length;
              for (; o--;) e[o].id === t && e[o].destroy();
              [i.plotLines || [], s.plotLines || [], i.plotBands || [], s.plotBands || []].forEach(
                function (e) {
                  var i;
                  for (o = e.length; o--;)
                    (null == (i = e[o]) ? void 0 : i.id) === t && od(e, e[o]);
                }
              );
            }
          }
          function l(t) {
            this.removePlotBandOrLine(t);
          }
          t.compose = function (t, h) {
            let d = h.prototype;
            return (
              d.addPlotBand ||
                ((e = t),
                oc(d, {
                  addPlotBand: i,
                  addPlotLine: o,
                  addPlotBandOrLine: s,
                  getPlotBandPath: r,
                  removePlotBand: n,
                  removePlotLine: l,
                  removePlotBandOrLine: a
                })),
              h
            );
          };
        })(L || (L = {}));
        let ou = L,
          {
            addEvent: og,
            arrayMax: of,
            arrayMin: om,
            defined: ox,
            destroyObjectProperties: oy,
            erase: ov,
            fireEvent: ob,
            merge: ok,
            objectEach: ow,
            pick: oM
          } = tu;
        class oS {
          static compose(t, e) {
            return (
              og(t, "afterInit", function () {
                this.labelCollectors.push(() => {
                  var t;
                  let e = [];
                  for (let i of this.axes)
                    for (let { label: s, options: o } of i.plotLinesAndBands)
                      !s ||
                        (null == o || null == (t = o.label) ? void 0 : t.allowOverlap) ||
                        e.push(s);
                  return e;
                });
              }),
              ou.compose(oS, e)
            );
          }
          render() {
            var t, e, i;
            ob(this, "render");
            let { axis: s, options: o } = this,
              { horiz: r, logarithmic: n } = s,
              { color: a, events: l, zIndex: h = 0 } = o,
              { renderer: d, time: c } = s.chart,
              p = {},
              u = c.parse(o.to),
              g = c.parse(o.from),
              f = c.parse(o.value),
              m = o.borderWidth,
              x = o.label,
              { label: y, svgElem: v } = this,
              b = [],
              k,
              w = ox(g) && ox(u),
              M = ox(f),
              S = !v,
              T = { class: "highcharts-plot-" + (w ? "band " : "line ") + (o.className || "") },
              C = w ? "bands" : "lines";
            if (
              (!s.chart.styledMode &&
                (M
                  ? ((T.stroke = a || "#999999"),
                    (T["stroke-width"] = oM(o.width, 1)),
                    o.dashStyle && (T.dashstyle = o.dashStyle))
                  : w &&
                    ((T.fill = a || "#e6e9ff"),
                    m && ((T.stroke = o.borderColor), (T["stroke-width"] = m)))),
              (p.zIndex = h),
              (C += "-" + h),
              (k = s.plotLinesAndBandsGroups[C]) ||
                (s.plotLinesAndBandsGroups[C] = k =
                  d
                    .g("plot-" + C)
                    .attr(p)
                    .add()),
              v || (this.svgElem = v = d.path().attr(T).add(k)),
              ox(f))
            )
              b = s.getPlotLinePath({
                value: null != (t = null == n ? void 0 : n.log2lin(f)) ? t : f,
                lineWidth: v.strokeWidth(),
                acrossPanes: o.acrossPanes
              });
            else {
              if (!(ox(g) && ox(u))) return;
              b = s.getPlotBandPath(
                null != (e = null == n ? void 0 : n.log2lin(g)) ? e : g,
                null != (i = null == n ? void 0 : n.log2lin(u)) ? i : u,
                o
              );
            }
            return (
              !this.eventsAdded &&
                l &&
                (ow(l, (t, e) => {
                  null == v ||
                    v.on(e, (t) => {
                      l[e].apply(this, [t]);
                    });
                }),
                (this.eventsAdded = !0)),
              (S || !v.d) && (null == b ? void 0 : b.length)
                ? v.attr({ d: b })
                : v &&
                  (b
                    ? (v.show(), v.animate({ d: b }))
                    : v.d && (v.hide(), y && (this.label = y = y.destroy()))),
              x &&
              (ox(x.text) || ox(x.formatter)) &&
              (null == b ? void 0 : b.length) &&
              s.width > 0 &&
              s.height > 0 &&
              !b.isFlat
                ? ((x = ok(
                    {
                      align: r && w ? "center" : void 0,
                      x: r ? !w && 4 : 10,
                      verticalAlign: !r && w ? "middle" : void 0,
                      y: r ? (w ? 16 : 10) : w ? 6 : -4,
                      rotation: r && !w ? 90 : 0,
                      ...(w ? { inside: !0 } : {})
                    },
                    x
                  )),
                  this.renderLabel(x, b, w, h))
                : y && y.hide(),
              this
            );
          }
          renderLabel(t, e, i, s) {
            var o;
            let r = this.axis,
              n = r.chart.renderer,
              a = t.inside,
              l = this.label;
            l ||
              ((this.label = l =
                n.text(this.getLabelText(t), 0, 0, t.useHTML).attr({
                  align: t.textAlign || t.align,
                  rotation: t.rotation,
                  class:
                    "highcharts-plot-" + (i ? "band" : "line") + "-label " + (t.className || ""),
                  zIndex: s
                })),
              r.chart.styledMode ||
                l.css(ok({ fontSize: "0.8em", textOverflow: i && !a ? "" : "ellipsis" }, t.style)),
              l.add());
            let h = e.xBounds || [e[0][1], e[1][1], i ? e[2][1] : e[0][1]],
              d = e.yBounds || [e[0][2], e[1][2], i ? e[2][2] : e[0][2]],
              c = om(h),
              p = om(d),
              u = of(h) - c;
            (l.align(t, !1, { x: c, y: p, width: u, height: of(d) - p }),
              (l.alignAttr.y -= n.fontMetrics(l).b),
              (!l.alignValue || "left" === l.alignValue || ox(a)) &&
                l.css({
                  width:
                    ((null == (o = t.style) ? void 0 : o.width) ||
                      (i && a
                        ? u
                        : 90 === l.rotation
                          ? r.height - (l.alignAttr.y - r.top)
                          : (t.clip ? r.width : r.chart.chartWidth) - (l.alignAttr.x - r.left))) +
                    "px"
                }),
              l.show(!0));
          }
          getLabelText(t) {
            return ox(t.formatter) ? t.formatter.call(this) : t.text;
          }
          destroy() {
            (ov(this.axis.plotLinesAndBands, this), delete this.axis, oy(this));
          }
          constructor(t, e) {
            ((this.axis = t), (this.options = e), (this.id = e.id));
          }
        }
        let { animObject: oT } = et,
          { format: oC } = eO,
          { composed: oA, dateFormats: oP, doc: oL, isSafari: oO } = G,
          { distribute: oE } = ez,
          {
            addEvent: oI,
            clamp: oD,
            css: oB,
            discardElement: oN,
            extend: oz,
            fireEvent: oR,
            getAlignFactor: oW,
            isArray: oX,
            isNumber: oH,
            isObject: oF,
            isString: oG,
            merge: oY,
            pick: oj,
            pushUnique: oU,
            splat: oV,
            syncTimeout: oZ
          } = tu;
        class oq {
          bodyFormatter(t) {
            return t.map((t) => {
              let e = t.series.tooltipOptions,
                i = t.formatPrefix || "point";
              return (e[i + "Formatter"] || t.tooltipFormatter).call(t, e[i + "Format"] || "");
            });
          }
          cleanSplit(t) {
            this.chart.series.forEach(function (e) {
              let i = null == e ? void 0 : e.tt;
              i && (!i.isActive || t ? (e.tt = i.destroy()) : (i.isActive = !1));
            });
          }
          defaultFormatter(t) {
            let e,
              i = this.points || oV(this);
            return (
              (e = (e = [t.headerFooterFormatter(i[0])]).concat(t.bodyFormatter(i))).push(
                t.headerFooterFormatter(i[0], !0)
              ),
              e
            );
          }
          destroy() {
            (this.label && (this.label = this.label.destroy()),
              this.split && (this.cleanSplit(!0), this.tt && (this.tt = this.tt.destroy())),
              this.renderer && ((this.renderer = this.renderer.destroy()), oN(this.container)),
              tu.clearTimeout(this.hideTimer));
          }
          getAnchor(t, e) {
            var i;
            let s,
              { chart: o, pointer: r } = this,
              n = o.inverted,
              a = o.plotTop,
              l = o.plotLeft;
            if (
              ((null == (i = (t = oV(t))[0].series) ? void 0 : i.yAxis) &&
                !t[0].series.yAxis.options.reversedStacks &&
                (t = t.slice().reverse()),
              this.followPointer && e)
            )
              (void 0 === e.chartX && (e = r.normalize(e)), (s = [e.chartX - l, e.chartY - a]));
            else if (t[0].tooltipPos) s = t[0].tooltipPos;
            else {
              let i = 0,
                o = 0;
              (t.forEach(function (t) {
                let e = t.pos(!0);
                e && ((i += e[0]), (o += e[1]));
              }),
                (i /= t.length),
                (o /= t.length),
                this.shared && t.length > 1 && e && (n ? (i = e.chartX) : (o = e.chartY)),
                (s = [i - l, o - a]));
            }
            return s.map(Math.round);
          }
          getClassName(t, e, i) {
            let s = this.options,
              o = t.series,
              r = o.options;
            return [
              s.className,
              "highcharts-label",
              i && "highcharts-tooltip-header",
              e ? "highcharts-tooltip-box" : "highcharts-tooltip",
              !i && "highcharts-color-" + oj(t.colorIndex, o.colorIndex),
              null == r ? void 0 : r.className
            ]
              .filter(oG)
              .join(" ");
          }
          getLabel() {
            let { anchorX: t, anchorY: e } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { anchorX: 0, anchorY: 0 },
              i = this,
              s = this.chart.styledMode,
              o = this.options,
              r = this.split && this.allowShared,
              n = this.container,
              a = this.chart.renderer;
            if (this.label) {
              let t = !this.label.hasClass("highcharts-label");
              ((!r && t) || (r && !t)) && this.destroy();
            }
            if (!this.label) {
              var l;
              if (this.outside) {
                let t = this.chart,
                  e = t.options.chart.style,
                  i = eE.getRendererType();
                ((this.container = n = G.doc.createElement("div")),
                  (n.className =
                    "highcharts-tooltip-container " +
                    (t.renderTo.className.match(/(highcharts[a-zA-Z0-9-]+)\s?/gm) || "")),
                  oB(n, {
                    position: "absolute",
                    top: "1px",
                    pointerEvents: "none",
                    zIndex: Math.max(
                      this.options.style.zIndex || 0,
                      ((null == e ? void 0 : e.zIndex) || 0) + 3
                    )
                  }),
                  (this.renderer = a = new i(n, 0, 0, e, void 0, void 0, a.styledMode)));
              }
              if (
                (r
                  ? (this.label = a.g("tooltip"))
                  : ((this.label = a
                      .label(
                        "",
                        t,
                        e,
                        o.shape || "callout",
                        void 0,
                        void 0,
                        o.useHTML,
                        void 0,
                        "tooltip"
                      )
                      .attr({ padding: o.padding, r: o.borderRadius })),
                    s ||
                      this.label
                        .attr({ fill: o.backgroundColor, "stroke-width": o.borderWidth || 0 })
                        .css(o.style)
                        .css({
                          pointerEvents:
                            o.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none")
                        })),
                i.outside)
              ) {
                let t = this.label;
                [t.xSetter, t.ySetter].forEach((e, s) => {
                  t[s ? "ySetter" : "xSetter"] = (o) => {
                    (e.call(t, i.distance),
                      (t[s ? "y" : "x"] = o),
                      n && (n.style[s ? "top" : "left"] = "".concat(o, "px")));
                  };
                });
              }
              this.label
                .attr({ zIndex: 8 })
                .shadow(null != (l = o.shadow) ? l : !o.fixed)
                .add();
            }
            return (n && !n.parentElement && G.doc.body.appendChild(n), this.label);
          }
          getPlayingField() {
            let { body: t, documentElement: e } = oL,
              { chart: i, distance: s, outside: o } = this;
            return {
              width: o
                ? Math.max(
                    t.scrollWidth,
                    e.scrollWidth,
                    t.offsetWidth,
                    e.offsetWidth,
                    e.clientWidth
                  ) -
                  2 * s -
                  2
                : i.chartWidth,
              height: o
                ? Math.max(
                    t.scrollHeight,
                    e.scrollHeight,
                    t.offsetHeight,
                    e.offsetHeight,
                    e.clientHeight
                  )
                : i.chartHeight
            };
          }
          getPosition(t, e, i) {
            var s, o;
            let { distance: r, chart: n, outside: a, pointer: l } = this,
              { inverted: h, plotLeft: d, plotTop: c, polar: p } = n,
              { plotX: u = 0, plotY: g = 0 } = i,
              f = {},
              m = (h && i.h) || 0,
              { height: x, width: y } = this.getPlayingField(),
              v = l.getChartPosition(),
              b = (i) => {
                let s = "x" === i;
                return [i, s ? y : x, s ? t : e].concat(
                  a
                    ? [
                        s ? t * v.scaleX : e * v.scaleY,
                        s ? v.left - r + (u + d) * v.scaleX : v.top - r + (g + c) * v.scaleY,
                        0,
                        s ? y : x
                      ]
                    : [
                        s ? t : e,
                        s ? u + d : g + c,
                        s ? d : c,
                        s ? d + n.plotWidth : c + n.plotHeight
                      ]
                );
              },
              k = b("y"),
              w = b("x"),
              M,
              S = !!i.negative;
            !p &&
              (null == (o = n.hoverSeries) || null == (s = o.yAxis) ? void 0 : s.reversed) &&
              (S = !S);
            let T = !this.followPointer && oj(i.ttBelow, !p && !h === S),
              C = function (t, e, i, s, o, n, l) {
                let h = a ? ("y" === t ? r * v.scaleY : r * v.scaleX) : r,
                  d = (i - s) / 2,
                  c = s < o - r,
                  p = o + r + s < e,
                  u = o - h - i + d,
                  g = o + h - d;
                if (T && p) f[t] = g;
                else if (!T && c) f[t] = u;
                else if (c) f[t] = Math.min(l - s, u - m < 0 ? u : u - m);
                else {
                  if (!p) return ((f[t] = 0), !1);
                  f[t] = Math.max(n, g + m + i > e ? g : g + m);
                }
              },
              A = function (t, e, i, s, o) {
                if (o < r || o > e - r) return !1;
                o < i / 2 ? (f[t] = 1) : o > e - s / 2 ? (f[t] = e - s - 2) : (f[t] = o - i / 2);
              },
              P = function (t) {
                (([k, w] = [w, k]), (M = t));
              },
              L = () => {
                !1 !== C.apply(0, k)
                  ? !1 !== A.apply(0, w) || M || (P(!0), L())
                  : M
                    ? (f.x = f.y = 0)
                    : (P(!0), L());
              };
            return (((h && !p) || this.len > 1) && P(), L(), f);
          }
          getFixedPosition(t, e, i) {
            var s;
            let o = i.series,
              { chart: r, options: n, split: a } = this,
              l = n.position,
              h = l.relativeTo,
              d =
                n.shared ||
                ((null == o || null == (s = o.yAxis) ? void 0 : s.isRadial) && ("pane" === h || !h))
                  ? "plotBox"
                  : h,
              c = "chart" === d ? r.renderer : r[d] || r.getClipBox(o, !0);
            return {
              x: c.x + (c.width - t) * oW(l.align) + l.x,
              y: c.y + (c.height - e) * oW(l.verticalAlign) + ((!a && l.y) || 0)
            };
          }
          hide(t) {
            let e = this;
            (tu.clearTimeout(this.hideTimer),
              (t = oj(t, this.options.hideDelay)),
              this.isHidden ||
                (this.hideTimer = oZ(function () {
                  let i = e.getLabel();
                  (e.getLabel().animate(
                    { opacity: 0 },
                    {
                      duration: t ? 150 : t,
                      complete: () => {
                        (i.hide(), e.container && e.container.remove());
                      }
                    }
                  ),
                    (e.isHidden = !0));
                }, t)));
          }
          init(t, e) {
            ((this.chart = t),
              (this.options = e),
              (this.crosshairs = []),
              (this.isHidden = !0),
              (this.split = e.split && !t.inverted && !t.polar),
              (this.shared = e.shared || this.split),
              (this.outside = oj(e.outside, !!(t.scrollablePixelsX || t.scrollablePixelsY))));
          }
          shouldStickOnContact(t) {
            return !!(
              !this.followPointer &&
              this.options.stickOnContact &&
              (!t || this.pointer.inClass(t.target, "highcharts-tooltip"))
            );
          }
          move(t, e, i, s) {
            let { followPointer: o, options: r } = this,
              n = oT(!o && !this.isHidden && !r.fixed && r.animation),
              a = o || (this.len || 0) > 1,
              l = { x: t, y: e };
            (a ? (l.anchorX = l.anchorY = NaN) : ((l.anchorX = i), (l.anchorY = s)),
              (n.step = () => this.drawTracker()),
              this.getLabel().animate(l, n));
          }
          refresh(t, e) {
            let { chart: i, options: s, pointer: o, shared: r } = this,
              n = oV(t),
              a = n[0],
              l = s.format,
              h = s.formatter || this.defaultFormatter,
              d = i.styledMode,
              c = this.allowShared;
            if (!s.enabled || !a.series) return;
            (tu.clearTimeout(this.hideTimer),
              (this.allowShared = !(!oX(t) && t.series && t.series.noSharedTooltip)),
              (c = c && !this.allowShared),
              (this.followPointer = !this.split && a.series.tooltipOptions.followPointer));
            let p = this.getAnchor(t, e),
              u = p[0],
              g = p[1];
            (r &&
              this.allowShared &&
              (o.applyInactiveState(n), n.forEach((t) => t.setState("hover")), (a.points = n)),
              (this.len = n.length));
            let f = oG(l) ? oC(l, a, i) : h.call(a, this);
            a.points = void 0;
            let m = a.series;
            if (((this.distance = oj(m.tooltipOptions.distance, 16)), !1 === f)) this.hide();
            else {
              if (this.split && this.allowShared) this.renderSplit(f, n);
              else {
                let t = u,
                  r = g;
                if (
                  (e &&
                    o.isDirectTouch &&
                    ((t = e.chartX - i.plotLeft), (r = e.chartY - i.plotTop)),
                  !(
                    i.polar ||
                    !1 === m.options.clip ||
                    n.some((e) => o.isDirectTouch || e.series.shouldShowTooltip(t, r))
                  ))
                )
                  return void this.hide();
                {
                  let t = this.getLabel((c && this.tt) || {});
                  ((!s.style.width || d) &&
                    t.css({
                      width: (this.outside ? this.getPlayingField() : i.spacingBox).width + "px"
                    }),
                    t.attr({ class: this.getClassName(a), text: f && f.join ? f.join("") : f }),
                    this.outside &&
                      t.attr({
                        x: oD(t.x || 0, 0, this.getPlayingField().width - (t.width || 0) - 1)
                      }),
                    d || t.attr({ stroke: s.borderColor || a.color || m.color || "#666666" }),
                    this.updatePosition({
                      plotX: u,
                      plotY: g,
                      negative: a.negative,
                      ttBelow: a.ttBelow,
                      series: m,
                      h: p[2] || 0
                    }));
                }
              }
              (this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(),
                (this.isHidden = !1));
            }
            oR(this, "refresh");
          }
          renderSplit(t, e) {
            var i, s;
            let o = this,
              {
                chart: r,
                chart: {
                  chartWidth: n,
                  chartHeight: a,
                  plotHeight: l,
                  plotLeft: h,
                  plotTop: d,
                  scrollablePixelsY: c = 0,
                  scrollablePixelsX: p,
                  styledMode: u
                },
                distance: g,
                options: f,
                options: { fixed: m, position: x, positioner: y },
                pointer: v
              } = o,
              { scrollLeft: b = 0, scrollTop: k = 0 } =
                (null == (i = r.scrollablePlotArea) ? void 0 : i.scrollingContainer) || {},
              w =
                o.outside && "number" != typeof p
                  ? oL.documentElement.getBoundingClientRect()
                  : { left: b, right: b + n, top: k, bottom: k + a },
              M = o.getLabel(),
              S = this.renderer || r.renderer,
              T = !!(null == (s = r.xAxis[0]) ? void 0 : s.opposite),
              { left: C, top: A } = v.getChartPosition(),
              P = y || m,
              L = d + k,
              O = 0,
              E = l - c,
              I = function (t, e, i) {
                let s,
                  r,
                  n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [0, 0],
                  a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                if (i.isHeader)
                  ((r = T ? 0 : E),
                    (s = oD(n[0] - t / 2, w.left, w.right - t - (o.outside ? C : 0))));
                else if (m && i) {
                  let n = o.getFixedPosition(t, e, i);
                  ((s = n.x), (r = n.y - L));
                } else
                  ((r = n[1] - L),
                    (s = oD((s = a ? n[0] - t - g : n[0] + g), a ? s : w.left, w.right)));
                return { x: s, y: r };
              };
            oG(t) && (t = [!1, t]);
            let D = t.slice(0, e.length + 1).reduce(function (t, i, s) {
              if (!1 !== i && "" !== i) {
                let r = e[s - 1] || { isHeader: !0, plotX: e[0].plotX, plotY: l, series: {} },
                  n = r.isHeader,
                  a = n ? o : r.series,
                  c = (a.tt = (function (t, e, i) {
                    let s = t,
                      { isHeader: r, series: n } = e,
                      a = n.tooltipOptions || f;
                    if (!s) {
                      var l;
                      let t = { padding: a.padding, r: a.borderRadius };
                      (u ||
                        ((t.fill = a.backgroundColor),
                        (t["stroke-width"] = null != (l = a.borderWidth) ? l : m && !r ? 0 : 1)),
                        (s = S.label(
                          "",
                          0,
                          0,
                          a[r ? "headerShape" : "shape"] || (m && !r ? "rect" : "callout"),
                          void 0,
                          void 0,
                          a.useHTML
                        )
                          .addClass(o.getClassName(e, !0, r))
                          .attr(t)
                          .add(M)));
                    }
                    return (
                      (s.isActive = !0),
                      s.attr({ text: i }),
                      u ||
                        s
                          .css(a.style)
                          .attr({ stroke: a.borderColor || e.color || n.color || "#333333" }),
                      s
                    );
                  })(a.tt, r, i.toString())),
                  p = c.getBBox(),
                  x = p.width + c.strokeWidth();
                n && ((O = p.height), (E += O), T && (L -= O));
                let { anchorX: v, anchorY: b } = (function (t) {
                  let e,
                    i,
                    { isHeader: s, plotX: o = 0, plotY: r = 0, series: n } = t;
                  if (s) ((e = Math.max(h + o, h)), (i = d + l / 2));
                  else {
                    let { xAxis: t, yAxis: s } = n;
                    ((e = t.pos + oD(o, -g, t.len + g)),
                      n.shouldShowTooltip(0, s.pos - d + r, { ignoreX: !0 }) && (i = s.pos + r));
                  }
                  return { anchorX: (e = oD(e, w.left - g, w.right + g)), anchorY: i };
                })(r);
                if ("number" == typeof b) {
                  let e = p.height + 1,
                    i = (y || I).call(o, x, e, r, [v, b]);
                  t.push({
                    align: P ? 0 : void 0,
                    anchorX: v,
                    anchorY: b,
                    boxWidth: x,
                    point: r,
                    rank: oj(i.rank, +!!n),
                    size: e,
                    target: i.y,
                    tt: c,
                    x: i.x
                  });
                } else c.isActive = !1;
              }
              return t;
            }, []);
            (!P &&
              D.some((t) => {
                let { outside: e } = o,
                  i = (e ? C : 0) + t.anchorX;
                return (
                  (i < w.left && i + t.boxWidth < w.right) ||
                  (i < C - w.left + t.boxWidth && w.right - i > i)
                );
              }) &&
              (D = D.map((t) => {
                let { x: e, y: i } = I.call(
                  this,
                  t.boxWidth,
                  t.size,
                  t.point,
                  [t.anchorX, t.anchorY],
                  !1
                );
                return oz(t, { target: i, x: e });
              })),
              o.cleanSplit(),
              oE(D, E));
            let B = { left: C, right: C };
            (D.forEach(function (t) {
              let { x: e, boxWidth: i, isHeader: s } = t;
              !s &&
                (o.outside && C + e < B.left && (B.left = C + e),
                !s && o.outside && B.left + i > B.right && (B.right = C + e));
            }),
              D.forEach(function (t) {
                let {
                    x: e,
                    anchorX: i,
                    anchorY: s,
                    pos: r,
                    point: { isHeader: n }
                  } = t,
                  a = {
                    visibility: void 0 === r ? "hidden" : "inherit",
                    x: e,
                    y: (r || 0) + L + ((m && x.y) || 0),
                    anchorX: i,
                    anchorY: s
                  };
                if (o.outside && e < i) {
                  let t = C - B.left;
                  t > 0 &&
                    (n || ((a.x = e + t), (a.anchorX = i + t)),
                    n && ((a.x = (B.right - B.left) / 2), (a.anchorX = i + t)));
                }
                t.tt.attr(a);
              }));
            let { container: N, outside: z, renderer: R } = o;
            if (z && N && R) {
              let { width: t, height: e, x: i, y: s } = M.getBBox();
              (R.setSize(t + i, e + s, !1),
                (N.style.left = B.left + "px"),
                (N.style.top = A + "px"));
            }
            oO && M.attr({ opacity: 1 === M.opacity ? 0.999 : 1 });
          }
          drawTracker() {
            if (!this.shouldStickOnContact()) {
              this.tracker && (this.tracker = this.tracker.destroy());
              return;
            }
            let t = this.chart,
              e = this.label,
              i = this.shared ? t.hoverPoints : t.hoverPoint;
            if (!e || !i) return;
            let s = { x: 0, y: 0, width: 0, height: 0 },
              o = this.getAnchor(i),
              r = e.getBBox();
            ((o[0] += t.plotLeft - (e.translateX || 0)),
              (o[1] += t.plotTop - (e.translateY || 0)),
              (s.x = Math.min(0, o[0])),
              (s.y = Math.min(0, o[1])),
              (s.width =
                o[0] < 0
                  ? Math.max(Math.abs(o[0]), r.width - o[0])
                  : Math.max(Math.abs(o[0]), r.width)),
              (s.height =
                o[1] < 0
                  ? Math.max(Math.abs(o[1]), r.height - Math.abs(o[1]))
                  : Math.max(Math.abs(o[1]), r.height)),
              this.tracker
                ? this.tracker.attr(s)
                : ((this.tracker = e.renderer.rect(s).addClass("highcharts-tracker").add(e)),
                  t.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" })));
          }
          styledModeFormat(t) {
            return t
              .replace('style="font-size: 0.8em"', 'class="highcharts-header"')
              .replace(
                /style="color:{(point|series)\.color}"/g,
                'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"'
              );
          }
          headerFooterFormatter(t, e) {
            let i = t.series,
              s = i.tooltipOptions,
              o = i.xAxis,
              r = null == o ? void 0 : o.dateTime,
              n = { isFooter: e, point: t },
              a = s.xDateFormat || "",
              l = s[e ? "footerFormat" : "headerFormat"];
            return (
              oR(this, "headerFormatter", n, function (e) {
                if (
                  (r && !a && oH(t.key) && (a = r.getXDateFormat(t.key, s.dateTimeLabelFormats)),
                  r && a)
                ) {
                  if (oF(a)) {
                    let t = a;
                    ((oP[0] = (e) => i.chart.time.dateFormat(t, e)), (a = "%0"));
                  }
                  (t.tooltipDateKeys || ["key"]).forEach((t) => {
                    l = l.replace(
                      RegExp("point\\." + t + "([ \\)}])"),
                      "(point.".concat(t, ":").concat(a, ")$1")
                    );
                  });
                }
                (i.chart.styledMode && (l = this.styledModeFormat(l)),
                  (e.text = oC(l, t, this.chart)));
              }),
              n.text || ""
            );
          }
          update(t) {
            (this.destroy(), this.init(this.chart, oY(!0, this.options, t)));
          }
          updatePosition(t) {
            let { chart: e, container: i, distance: s, options: o, pointer: r, renderer: n } = this,
              { height: a = 0, width: l = 0 } = this.getLabel(),
              { fixed: h, positioner: d } = o,
              { left: c, top: p, scaleX: u, scaleY: g } = r.getChartPosition(),
              f = (d || (h && this.getFixedPosition) || this.getPosition).call(this, l, a, t),
              m = G.doc,
              x = (t.plotX || 0) + e.plotLeft,
              y = (t.plotY || 0) + e.plotTop,
              v;
            if (n && i) {
              if (d || h) {
                var b;
                let { scrollLeft: t = 0, scrollTop: i = 0 } =
                  (null == (b = e.scrollablePlotArea) ? void 0 : b.scrollingContainer) || {};
                ((f.x += t + c - s), (f.y += i + p - s));
              }
              ((v = (o.borderWidth || 0) + 2 * s + 2),
                n.setSize(oD(l + v, 0, m.documentElement.clientWidth) - 1, a + v, !1),
                (1 !== u || 1 !== g) &&
                  (oB(i, { transform: "scale(".concat(u, ", ").concat(g, ")") }),
                  (x *= u),
                  (y *= g)),
                (x += c - f.x),
                (y += p - f.y));
            }
            this.move(Math.round(f.x), Math.round(f.y || 0), x, y);
          }
          constructor(t, e, i) {
            ((this.allowShared = !0),
              (this.crosshairs = []),
              (this.distance = 0),
              (this.isHidden = !0),
              (this.isSticky = !1),
              (this.options = {}),
              (this.outside = !1),
              (this.chart = t),
              this.init(t, e),
              (this.pointer = i));
          }
        }
        (f = oq || (oq = {})).compose = function (t) {
          oU(oA, "Core.Tooltip") &&
            oI(t, "afterInit", function () {
              let t = this.chart;
              t.options.tooltip && (t.tooltip = new f(t, t.options.tooltip, this));
            });
        };
        let o_ = oq,
          { animObject: oK } = et,
          { defaultOptions: o$ } = tX,
          { format: oJ } = eO,
          {
            addEvent: oQ,
            crisp: o0,
            erase: o1,
            extend: o2,
            fireEvent: o3,
            getNestedProperty: o5,
            isArray: o6,
            isFunction: o9,
            isNumber: o4,
            isObject: o8,
            merge: o7,
            pick: rt,
            syncTimeout: re,
            removeEvent: ri,
            uniqueKey: rs
          } = tu;
        class ro {
          animateBeforeDestroy() {
            let t = this,
              e = { x: t.startXPos, opacity: 0 },
              i = t.getGraphicalProps();
            (i.singular.forEach(function (i) {
              t[i] = t[i].animate(
                "dataLabel" === i ? { x: t[i].startXPos, y: t[i].startYPos, opacity: 0 } : e
              );
            }),
              i.plural.forEach(function (e) {
                t[e].forEach(function (e) {
                  e.element &&
                    e.animate(
                      o2({ x: t.startXPos }, e.startYPos ? { x: e.startXPos, y: e.startYPos } : {})
                    );
                });
              }));
          }
          applyOptions(t, e) {
            let i = this.series,
              s = i.options.pointValKey || i.pointValKey;
            return (
              o2(this, (t = ro.prototype.optionsToObject.call(this, t))),
              (this.options = this.options ? o2(this.options, t) : t),
              t.group && delete this.group,
              t.dataLabels && delete this.dataLabels,
              s && (this.y = ro.prototype.getNestedProperty.call(this, s)),
              this.selected && (this.state = "select"),
              "name" in this &&
                void 0 === e &&
                i.xAxis &&
                i.xAxis.hasNames &&
                (this.x = i.xAxis.nameToX(this)),
              void 0 === this.x && i
                ? (this.x = null != e ? e : i.autoIncrement())
                : o4(t.x) && i.options.relativeXValue
                  ? (this.x = i.autoIncrement(t.x))
                  : "string" == typeof this.x &&
                    (null != e || (e = i.chart.time.parse(this.x)), o4(e) && (this.x = e)),
              (this.isNull = this.isValid && !this.isValid()),
              (this.formatPrefix = this.isNull ? "null" : "point"),
              this
            );
          }
          destroy() {
            if (!this.destroyed) {
              let t = this,
                e = t.series,
                i = e.chart,
                s = e.options.dataSorting,
                o = i.hoverPoints,
                r = oK(t.series.chart.renderer.globalAnimation),
                n = () => {
                  for (let e in ((t.graphic || t.graphics || t.dataLabel || t.dataLabels) &&
                    (ri(t), t.destroyElements()),
                  t))
                    delete t[e];
                };
              (t.legendItem && i.legend.destroyItem(t),
                o && (t.setState(), o1(o, t), o.length || (i.hoverPoints = null)),
                t === i.hoverPoint && t.onMouseOut(),
                (null == s ? void 0 : s.enabled)
                  ? (this.animateBeforeDestroy(), re(n, r.duration))
                  : n(),
                i.pointCount--);
            }
            this.destroyed = !0;
          }
          destroyElements(t) {
            let e = this,
              i = e.getGraphicalProps(t);
            (i.singular.forEach(function (t) {
              e[t] = e[t].destroy();
            }),
              i.plural.forEach(function (t) {
                (e[t].forEach(function (t) {
                  (null == t ? void 0 : t.element) && t.destroy();
                }),
                  delete e[t]);
              }));
          }
          firePointEvent(t, e, i) {
            let s = this,
              o = this.series.options;
            (s.manageEvent(t),
              "click" === t &&
                o.allowPointSelect &&
                (i = function (t) {
                  !s.destroyed && s.select && s.select(null, t.ctrlKey || t.metaKey || t.shiftKey);
                }),
              o3(s, t, e, i));
          }
          getClassName() {
            var t;
            return (
              "highcharts-point" +
              (this.selected ? " highcharts-point-select" : "") +
              (this.negative ? " highcharts-negative" : "") +
              (this.isNull ? " highcharts-null-point" : "") +
              (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") +
              (this.options.className ? " " + this.options.className : "") +
              ((null == (t = this.zone) ? void 0 : t.className)
                ? " " + this.zone.className.replace("highcharts-negative", "")
                : "")
            );
          }
          getGraphicalProps(t) {
            let e,
              i,
              s = this,
              o = [],
              r = { singular: [], plural: [] };
            for (
              (t = t || { graphic: 1, dataLabel: 1 }).graphic && o.push("graphic", "connector"),
                t.dataLabel && o.push("dataLabel", "dataLabelPath", "dataLabelUpper"),
                i = o.length;
              i--;
            )
              s[(e = o[i])] && r.singular.push(e);
            return (
              ["graphic", "dataLabel"].forEach(function (e) {
                let i = e + "s";
                t[e] && s[i] && r.plural.push(i);
              }),
              r
            );
          }
          getNestedProperty(t) {
            return t ? (0 === t.indexOf("custom.") ? o5(t, this.options) : this[t]) : void 0;
          }
          getZone() {
            let t = this.series,
              e = t.zones,
              i = t.zoneAxis || "y",
              s,
              o = 0;
            for (s = e[0]; this[i] >= s.value;) s = e[++o];
            return (
              this.nonZonedColor || (this.nonZonedColor = this.color),
              (null == s ? void 0 : s.color) && !this.options.color
                ? (this.color = s.color)
                : (this.color = this.nonZonedColor),
              s
            );
          }
          hasNewShapeType() {
            return (
              (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !==
              this.shapeType
            );
          }
          isValid() {
            return (o4(this.x) || this.x instanceof Date) && o4(this.y);
          }
          optionsToObject(t) {
            var e;
            let i = this.series,
              s = i.options.keys,
              o = s || i.pointArrayMap || ["y"],
              r = o.length,
              n = {},
              a,
              l = 0,
              h = 0;
            if (o4(t) || null === t) n[o[0]] = t;
            else if (o6(t))
              for (
                !s &&
                t.length > r &&
                ("string" == (a = typeof t[0])
                  ? (null == (e = i.xAxis) ? void 0 : e.dateTime)
                    ? (n.x = i.chart.time.parse(t[0]))
                    : (n.name = t[0])
                  : "number" === a && (n.x = t[0]),
                l++);
                h < r;
              )
                ((s && void 0 === t[l]) ||
                  (o[h].indexOf(".") > 0
                    ? ro.prototype.setNestedProperty(n, t[l], o[h])
                    : (n[o[h]] = t[l])),
                  l++,
                  h++);
            else
              "object" == typeof t &&
                ((n = t),
                t.dataLabels && (i.hasDataLabels = () => !0),
                t.marker && (i._hasPointMarkers = !0));
            return n;
          }
          pos(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.plotY;
            if (!this.destroyed) {
              let { plotX: i, series: s } = this,
                { chart: o, xAxis: r, yAxis: n } = s,
                a = 0,
                l = 0;
              if (o4(i) && o4(e))
                return (
                  t && ((a = r ? r.pos : o.plotLeft), (l = n ? n.pos : o.plotTop)),
                  o.inverted && r && n ? [n.len - e + l, r.len - i + a] : [i + a, e + l]
                );
            }
          }
          resolveColor() {
            let t = this.series,
              e = t.chart.options.chart,
              i = t.chart.styledMode,
              s,
              o,
              r = e.colorCount,
              n;
            (delete this.nonZonedColor,
              t.options.colorByPoint
                ? (i ||
                    ((s = (o = t.options.colors || t.chart.options.colors)[t.colorCounter]),
                    (r = o.length)),
                  (n = t.colorCounter),
                  t.colorCounter++,
                  t.colorCounter === r && (t.colorCounter = 0))
                : (i || (s = t.color), (n = t.colorIndex)),
              (this.colorIndex = rt(this.options.colorIndex, n)),
              (this.color = rt(this.options.color, s)));
          }
          setNestedProperty(t, e, i) {
            return (
              i.split(".").reduce(function (t, i, s, o) {
                let r = o.length - 1 === s;
                return ((t[i] = r ? e : o8(t[i], !0) ? t[i] : {}), t[i]);
              }, t),
              t
            );
          }
          shouldDraw() {
            return !this.isNull;
          }
          tooltipFormatter(t) {
            var e;
            let { chart: i, pointArrayMap: s = ["y"], tooltipOptions: o } = this.series,
              { valueDecimals: r = "", valuePrefix: n = "", valueSuffix: a = "" } = o;
            return (
              i.styledMode && (t = (null == (e = i.tooltip) ? void 0 : e.styledModeFormat(t)) || t),
              s.forEach((e) => {
                ((e = "{point." + e),
                  (n || a) && (t = t.replace(RegExp(e + "}", "g"), n + e + "}" + a)),
                  (t = t.replace(RegExp(e + "}", "g"), e + ":,." + r + "f}")));
              }),
              oJ(t, this, i)
            );
          }
          update(t, e, i, s) {
            let o,
              r = this,
              n = r.series,
              a = r.graphic,
              l = n.chart,
              h = n.options;
            function d() {
              r.applyOptions(t);
              let s = a && r.hasMockGraphic,
                d = null === r.y ? !s : s;
              (a && d && ((r.graphic = a.destroy()), delete r.hasMockGraphic),
                o8(t, !0) &&
                  ((null == a ? void 0 : a.element) &&
                    t &&
                    t.marker &&
                    void 0 !== t.marker.symbol &&
                    (r.graphic = a.destroy()),
                  (null == t ? void 0 : t.dataLabels) &&
                    r.dataLabel &&
                    (r.dataLabel = r.dataLabel.destroy())),
                (o = r.index));
              let c = {};
              for (let t of n.dataColumnKeys()) c[t] = r[t];
              (n.dataTable.setRow(c, o),
                (h.data[o] = o8(h.data[o], !0) || o8(t, !0) ? r.options : rt(t, h.data[o])),
                (n.isDirty = n.isDirtyData = !0),
                !n.fixedBox && n.hasCartesianSeries && (l.isDirtyBox = !0),
                "point" === h.legendType && (l.isDirtyLegend = !0),
                e && l.redraw(i));
            }
            ((e = rt(e, !0)), !1 === s ? d() : r.firePointEvent("update", { options: t }, d));
          }
          remove(t, e) {
            this.series.removePoint(this.series.data.indexOf(this), t, e);
          }
          select(t, e) {
            let i = this,
              s = i.series,
              o = s.chart;
            ((t = rt(t, !i.selected)),
              (this.selectedStaging = t),
              i.firePointEvent(t ? "select" : "unselect", { accumulate: e }, function () {
                ((i.selected = i.options.selected = t),
                  (s.options.data[s.data.indexOf(i)] = i.options),
                  i.setState(t && "select"),
                  e ||
                    o.getSelectedPoints().forEach(function (t) {
                      let e = t.series;
                      t.selected &&
                        t !== i &&
                        ((t.selected = t.options.selected = !1),
                        (e.options.data[e.data.indexOf(t)] = t.options),
                        t.setState(
                          o.hoverPoints && e.options.inactiveOtherPoints ? "inactive" : ""
                        ),
                        t.firePointEvent("unselect"));
                    }));
              }),
              delete this.selectedStaging);
          }
          onMouseOver(t) {
            let { inverted: e, pointer: i } = this.series.chart;
            i &&
              ((t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e)),
              i.runPointActions(t, this));
          }
          onMouseOut() {
            let t = this.series.chart;
            (this.firePointEvent("mouseOut"),
              this.series.options.inactiveOtherPoints ||
                (t.hoverPoints || []).forEach(function (t) {
                  t.setState();
                }),
              (t.hoverPoints = t.hoverPoint = null));
          }
          manageEvent(t) {
            var e, i, s, o, r, n, a;
            let l =
              null == (e = o7(this.series.options.point, this.options).events) ? void 0 : e[t];
            !o9(l) ||
            ((null == (i = this.hcEvents) ? void 0 : i[t]) &&
              (null == (o = this.hcEvents) || null == (s = o[t])
                ? void 0
                : s.map((t) => t.fn).indexOf(l)) !== -1)
              ? this.importedUserEvent &&
                !l &&
                (null == (n = this.hcEvents) ? void 0 : n[t]) &&
                (null == (a = this.hcEvents) ? void 0 : a[t].userEvent) &&
                (ri(this, t),
                delete this.hcEvents[t],
                Object.keys(this.hcEvents) || delete this.importedUserEvent)
              : (null == (r = this.importedUserEvent) || r.call(this),
                (this.importedUserEvent = oQ(this, t, l)),
                this.hcEvents && (this.hcEvents[t].userEvent = !0));
          }
          setState(t, e) {
            var i, s;
            let o = this.series,
              r = this.state,
              n = o.options.states[t || "normal"] || {},
              a = o$.plotOptions[o.type].marker && o.options.marker,
              l = a && !1 === a.enabled,
              h = (null == a || null == (i = a.states) ? void 0 : i[t || "normal"]) || {},
              d = !1 === h.enabled,
              c = this.marker || {},
              p = o.chart,
              u = a && o.markerAttribs,
              g = o.halo,
              f,
              m,
              x,
              y = o.stateMarkerGraphic,
              v;
            if (
              ((t = t || "") === this.state && !e) ||
              (this.selected && "select" !== t) ||
              !1 === n.enabled ||
              (t && (d || (l && !1 === h.enabled))) ||
              (t && c.states && c.states[t] && !1 === c.states[t].enabled)
            )
              return;
            if (
              ((this.state = t),
              u && (f = o.markerAttribs(this, t)),
              this.graphic && !this.hasMockGraphic)
            ) {
              if (
                (r && this.graphic.removeClass("highcharts-point-" + r),
                t && this.graphic.addClass("highcharts-point-" + t),
                !p.styledMode)
              ) {
                ((m = o.pointAttribs(this, t)), (x = rt(p.options.chart.animation, n.animation)));
                let e = m.opacity;
                (o.options.inactiveOtherPoints &&
                  o4(e) &&
                  (this.dataLabels || []).forEach(function (t) {
                    t &&
                      !t.hasClass("highcharts-data-label-hidden") &&
                      (t.animate({ opacity: e }, x),
                      t.connector && t.connector.animate({ opacity: e }, x));
                  }),
                  this.graphic.animate(m, x));
              }
              (f &&
                this.graphic.animate(f, rt(p.options.chart.animation, h.animation, a.animation)),
                y && y.hide());
            } else
              (t &&
                h &&
                ((v = c.symbol || o.symbol),
                y && y.currentSymbol !== v && (y = y.destroy()),
                f &&
                  (y
                    ? y[e ? "animate" : "attr"]({ x: f.x, y: f.y })
                    : v &&
                      ((o.stateMarkerGraphic = y =
                        p.renderer
                          .symbol(v, f.x, f.y, f.width, f.height, o7(a, h))
                          .add(o.markerGroup)),
                      (y.currentSymbol = v))),
                !p.styledMode && y && "inactive" !== this.state && y.attr(o.pointAttribs(this, t))),
                y &&
                  (y[t && this.isInside ? "show" : "hide"](),
                  (y.element.point = this),
                  y.addClass(this.getClassName(), !0)));
            let b = n.halo,
              k = this.graphic || y,
              w = (null == k ? void 0 : k.visibility) || "inherit";
            ((null == b ? void 0 : b.size) && k && "hidden" !== w && !this.isCluster
              ? (g || (o.halo = g = p.renderer.path().add(k.parentGroup)),
                g.show()[e ? "animate" : "attr"]({ d: this.haloPath(b.size) }),
                g.attr({
                  class:
                    "highcharts-halo highcharts-color-" +
                    rt(this.colorIndex, o.colorIndex) +
                    (this.className ? " " + this.className : ""),
                  visibility: w,
                  zIndex: -1
                }),
                (g.point = this),
                p.styledMode ||
                  g.attr(
                    o2(
                      { fill: this.color || o.color, "fill-opacity": b.opacity },
                      eg.filterUserAttributes(b.attributes || {})
                    )
                  ))
              : (null == g || null == (s = g.point) ? void 0 : s.haloPath) &&
                !g.point.destroyed &&
                g.animate({ d: g.point.haloPath(0) }, null, g.hide),
              o3(this, "afterSetState", { state: t }));
          }
          haloPath(t) {
            let e = this.pos();
            return e
              ? this.series.chart.renderer.symbols.circle(o0(e[0], 1) - t, e[1] - t, 2 * t, 2 * t)
              : [];
          }
          constructor(t, e, i) {
            ((this.formatPrefix = "point"),
              (this.visible = !0),
              (this.point = this),
              (this.series = t),
              this.applyOptions(e, i),
              null != this.id || (this.id = rs()),
              this.resolveColor(),
              null != this.dataLabelOnNull || (this.dataLabelOnNull = t.options.nullInteraction),
              t.chart.pointCount++,
              o3(this, "afterInit"));
          }
        }
        let rr = ro,
          { parse: rn } = tq,
          { charts: ra, composed: rl, isTouchDevice: rh } = G,
          {
            addEvent: rd,
            attr: rc,
            css: rp,
            extend: ru,
            find: rg,
            fireEvent: rf,
            isNumber: rm,
            isObject: rx,
            objectEach: ry,
            offset: rv,
            pick: rb,
            pushUnique: rk,
            splat: rw
          } = tu;
        class rM {
          applyInactiveState() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              e = [];
            (t.forEach((t) => {
              let i = t.series;
              (e.push(i),
                i.linkedParent && e.push(i.linkedParent),
                i.linkedSeries && e.push.apply(e, i.linkedSeries),
                i.navigatorSeries && e.push(i.navigatorSeries),
                i.boosted &&
                  i.markerGroup &&
                  e.push.apply(
                    e,
                    this.chart.series.filter((t) => t.markerGroup === i.markerGroup)
                  ));
            }),
              this.chart.series.forEach((t) => {
                -1 === e.indexOf(t)
                  ? t.setState("inactive", !0)
                  : t.options.inactiveOtherPoints && t.setAllPointsToState("inactive");
              }));
          }
          destroy() {
            let t = this;
            (this.eventsToUnbind.forEach((t) => t()),
              (this.eventsToUnbind = []),
              !G.chartCount &&
                (rM.unbindDocumentMouseUp.forEach((t) => t.unbind()),
                (rM.unbindDocumentMouseUp.length = 0),
                rM.unbindDocumentTouchEnd &&
                  (rM.unbindDocumentTouchEnd = rM.unbindDocumentTouchEnd())),
              clearInterval(t.tooltipTimeout),
              ry(t, function (e, i) {
                t[i] = void 0;
              }));
          }
          getSelectionMarkerAttrs(t, e) {
            let i = { args: { chartX: t, chartY: e }, attrs: {}, shapeType: "rect" };
            return (
              rf(this, "getSelectionMarkerAttrs", i, (i) => {
                let s,
                  { chart: o, zoomHor: r, zoomVert: n } = this,
                  { mouseDownX: a = 0, mouseDownY: l = 0 } = o,
                  h = i.attrs;
                ((h.x = o.plotLeft),
                  (h.y = o.plotTop),
                  (h.width = r ? 1 : o.plotWidth),
                  (h.height = n ? 1 : o.plotHeight),
                  r &&
                    ((h.width = Math.max(1, Math.abs((s = t - a)))), (h.x = (s > 0 ? 0 : s) + a)),
                  n &&
                    ((h.height = Math.max(1, Math.abs((s = e - l)))), (h.y = (s > 0 ? 0 : s) + l)));
              }),
              i
            );
          }
          drag(t) {
            let { chart: e } = this,
              { mouseDownX: i = 0, mouseDownY: s = 0 } = e,
              { panning: o, panKey: r, selectionMarkerFill: n } = e.options.chart,
              a = e.plotLeft,
              l = e.plotTop,
              h = e.plotWidth,
              d = e.plotHeight,
              c = rx(o) ? o.enabled : o,
              p = r && t["".concat(r, "Key")],
              u = t.chartX,
              g = t.chartY,
              f,
              m = this.selectionMarker;
            if (
              (!m || !m.touch) &&
              (u < a ? (u = a) : u > a + h && (u = a + h),
              g < l ? (g = l) : g > l + d && (g = l + d),
              (this.hasDragged = Math.sqrt(Math.pow(i - u, 2) + Math.pow(s - g, 2))),
              this.hasDragged > 10)
            ) {
              f = e.isInsidePlot(i - a, s - l, { visiblePlotOnly: !0 });
              let { shapeType: r, attrs: h } = this.getSelectionMarkerAttrs(u, g);
              ((e.hasCartesianSeries || e.mapView) &&
                this.hasZoom &&
                f &&
                !p &&
                !m &&
                ((this.selectionMarker = m = e.renderer[r]()),
                m.attr({ class: "highcharts-selection-marker", zIndex: 7 }).add(),
                e.styledMode || m.attr({ fill: n || rn("#334eff").setOpacity(0.25).get() })),
                m && m.attr(h),
                f && !m && c && e.pan(t, o));
            }
          }
          dragStart(t) {
            let e = this.chart;
            ((e.mouseIsDown = t.type),
              (e.cancelClick = !1),
              (e.mouseDownX = t.chartX),
              (e.mouseDownY = t.chartY));
          }
          getSelectionBox(t) {
            let e = { args: { marker: t }, result: t.getBBox() };
            return (rf(this, "getSelectionBox", e), e.result);
          }
          drop(t) {
            let e,
              { chart: i, selectionMarker: s } = this;
            for (let t of i.axes)
              t.isPanning &&
                ((t.isPanning = !1),
                (t.options.startOnTick || t.options.endOnTick || t.series.some((t) => t.boosted)) &&
                  ((t.forceRedraw = !0), t.setExtremes(t.userMin, t.userMax, !1), (e = !0)));
            if ((e && i.redraw(), s && t)) {
              if (this.hasDragged) {
                let e = this.getSelectionBox(s);
                i.transform({
                  axes: i.axes.filter(
                    (t) =>
                      t.zoomEnabled &&
                      (("xAxis" === t.coll && this.zoomX) || ("yAxis" === t.coll && this.zoomY))
                  ),
                  selection: { originalEvent: t, xAxis: [], yAxis: [], ...e },
                  from: e
                });
              }
              rm(i.index) && (this.selectionMarker = s.destroy());
            }
            i &&
              rm(i.index) &&
              (rp(i.container, { cursor: i._cursor }),
              (i.cancelClick = this.hasDragged > 10),
              (i.mouseIsDown = !1),
              (this.hasDragged = 0),
              (this.pinchDown = []));
          }
          findNearestKDPoint(t, e, i) {
            let s;
            return (
              t.forEach(function (t) {
                var o, r, n;
                let a,
                  l,
                  h,
                  d = !(t.noSharedTooltip && e) && 0 > t.options.findNearestPointBy.indexOf("y"),
                  c = t.searchPoint(i, d);
                rx(c, !0) &&
                  c.series &&
                  (!rx(s, !0) ||
                    ((a = (o = s).distX - c.distX),
                    (l = o.dist - c.dist),
                    (h =
                      (null == (r = c.series.group) ? void 0 : r.zIndex) -
                      (null == (n = o.series.group) ? void 0 : n.zIndex)),
                    (0 !== a && e
                      ? a
                      : 0 !== l
                        ? l
                        : 0 !== h
                          ? h
                          : o.series.index > c.series.index
                            ? -1
                            : 1) > 0)) &&
                  (s = c);
              }),
              s
            );
          }
          getChartCoordinatesFromPoint(t, e) {
            let { xAxis: i, yAxis: s } = t.series,
              o = t.shapeArgs;
            if (i && s) {
              var r, n;
              let a = null != (r = null != (n = t.clientX) ? n : t.plotX) ? r : 0,
                l = t.plotY || 0;
              return (
                t.isNode && o && rm(o.x) && rm(o.y) && ((a = o.x), (l = o.y)),
                e
                  ? { chartX: s.len + s.pos - l, chartY: i.len + i.pos - a }
                  : { chartX: a + i.pos, chartY: l + s.pos }
              );
            }
            if ((null == o ? void 0 : o.x) && o.y) return { chartX: o.x, chartY: o.y };
          }
          getChartPosition() {
            if (this.chartPosition) return this.chartPosition;
            let { container: t } = this.chart,
              e = rv(t);
            this.chartPosition = { left: e.left, top: e.top, scaleX: 1, scaleY: 1 };
            let { offsetHeight: i, offsetWidth: s } = t;
            return (
              s > 2 &&
                i > 2 &&
                ((this.chartPosition.scaleX = e.width / s),
                (this.chartPosition.scaleY = e.height / i)),
              this.chartPosition
            );
          }
          getCoordinates(t) {
            let e = { xAxis: [], yAxis: [] };
            for (let i of this.chart.axes)
              e[i.isXAxis ? "xAxis" : "yAxis"].push({
                axis: i,
                value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
              });
            return e;
          }
          getHoverData(t, e, i, s, o, r) {
            let n = [],
              a = function (t) {
                return t.visible && !(!o && t.directTouch) && rb(t.options.enableMouseTracking, !0);
              },
              l = e,
              h,
              d = { chartX: r ? r.chartX : void 0, chartY: r ? r.chartY : void 0, shared: o };
            (rf(this, "beforeGetHoverData", d),
              (h =
                l && !l.stickyTracking
                  ? [l]
                  : i.filter((t) => t.stickyTracking && (d.filter || a)(t))));
            let c = (s && t) || !r ? t : this.findNearestKDPoint(h, o, r);
            return (
              (l = null == c ? void 0 : c.series),
              c &&
                (o && !l.noSharedTooltip
                  ? (h = i.filter(function (t) {
                      return d.filter ? d.filter(t) : a(t) && !t.noSharedTooltip;
                    })).forEach(function (t) {
                      var e;
                      let i = null == (e = t.options) ? void 0 : e.nullInteraction,
                        s = rg(t.points, function (t) {
                          return t.x === c.x && (!t.isNull || !!i);
                        });
                      rx(s) && (t.boosted && t.boost && (s = t.boost.getPoint(s)), n.push(s));
                    })
                  : n.push(c)),
              rf(this, "afterGetHoverData", (d = { hoverPoint: c })),
              { hoverPoint: d.hoverPoint, hoverSeries: l, hoverPoints: n }
            );
          }
          getPointFromEvent(t) {
            let e = t.target,
              i;
            for (; e && !i;) ((i = e.point), (e = e.parentNode));
            return i;
          }
          onTrackerMouseOut(t) {
            let e = this.chart,
              i = t.relatedTarget,
              s = e.hoverSeries;
            ((this.isDirectTouch = !1),
              !s ||
                !i ||
                s.stickyTracking ||
                this.inClass(i, "highcharts-tooltip") ||
                (this.inClass(i, "highcharts-series-" + s.index) &&
                  this.inClass(i, "highcharts-tracker")) ||
                s.onMouseOut());
          }
          inClass(t, e) {
            let i = t,
              s;
            for (; i;) {
              if ((s = rc(i, "class"))) {
                if (-1 !== s.indexOf(e)) return !0;
                if (-1 !== s.indexOf("highcharts-container")) return !1;
              }
              i = i.parentElement;
            }
          }
          normalize(t, e) {
            let i = t.touches,
              s = i ? (i.length ? i.item(0) : rb(i.changedTouches, t.changedTouches)[0]) : t;
            e || (e = this.getChartPosition());
            let o = s.pageX - e.left,
              r = s.pageY - e.top;
            return ru(t, {
              chartX: Math.round((o /= e.scaleX)),
              chartY: Math.round((r /= e.scaleY))
            });
          }
          onContainerClick(t) {
            let e = this.chart,
              i = e.hoverPoint,
              s = this.normalize(t),
              o = e.plotLeft,
              r = e.plotTop;
            !e.cancelClick &&
              (i && this.inClass(s.target, "highcharts-tracker")
                ? (rf(i.series, "click", ru(s, { point: i })),
                  e.hoverPoint && i.firePointEvent("click", s))
                : (ru(s, this.getCoordinates(s)),
                  e.isInsidePlot(s.chartX - o, s.chartY - r, { visiblePlotOnly: !0 }) &&
                    rf(e, "click", s)));
          }
          onContainerMouseDown(t) {
            var e;
            let i = (1 & (t.buttons || t.button)) == 1;
            ((t = this.normalize(t)),
              G.isFirefox && 0 !== t.button && this.onContainerMouseMove(t),
              (void 0 === t.button || i) &&
                (this.zoomOption(t),
                i && (null == (e = t.preventDefault) || e.call(t)),
                this.dragStart(t)));
          }
          onContainerMouseLeave(t) {
            let { pointer: e } = ra[rb(rM.hoverChartIndex, -1)] || {};
            ((t = this.normalize(t)),
              this.onContainerMouseMove(t),
              e &&
                !this.inClass(t.relatedTarget, "highcharts-tooltip") &&
                (e.reset(), (e.chartPosition = void 0)));
          }
          onContainerMouseEnter() {
            delete this.chartPosition;
          }
          onContainerMouseMove(t) {
            let e = this.chart,
              i = e.tooltip,
              s = this.normalize(t);
            (this.setHoverChartIndex(t),
              ("mousedown" === e.mouseIsDown || this.touchSelect(s)) && this.drag(s),
              !e.openMenu &&
                (this.inClass(s.target, "highcharts-tracker") ||
                  e.isInsidePlot(s.chartX - e.plotLeft, s.chartY - e.plotTop, {
                    visiblePlotOnly: !0
                  })) &&
                !(null == i ? void 0 : i.shouldStickOnContact(s)) &&
                (this.inClass(s.target, "highcharts-no-tooltip")
                  ? this.reset(!1, 0)
                  : this.runPointActions(s)));
          }
          onDocumentTouchEnd(t) {
            this.onDocumentMouseUp(t);
          }
          onContainerTouchMove(t) {
            this.touchSelect(t) ? this.onContainerMouseMove(t) : this.touch(t);
          }
          onContainerTouchStart(t) {
            this.touchSelect(t)
              ? this.onContainerMouseDown(t)
              : (this.zoomOption(t), this.touch(t, !0));
          }
          onDocumentMouseMove(t) {
            let e = this.chart,
              i = e.tooltip,
              s = this.chartPosition,
              o = this.normalize(t, s);
            !s ||
              e.isInsidePlot(o.chartX - e.plotLeft, o.chartY - e.plotTop, {
                visiblePlotOnly: !0
              }) ||
              (null == i ? void 0 : i.shouldStickOnContact(o)) ||
              (o.target !== e.container.ownerDocument &&
                this.inClass(o.target, "highcharts-tracker")) ||
              this.reset();
          }
          onDocumentMouseUp(t) {
            var e, i;
            null == (i = ra[rb(rM.hoverChartIndex, -1)]) || null == (e = i.pointer) || e.drop(t);
          }
          pinch(t) {
            let e = this,
              { chart: i, hasZoom: s, lastTouches: o } = e,
              r = [].map.call(t.touches || [], (t) => e.normalize(t)),
              n = r.length,
              a =
                1 === n &&
                ((e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick) ||
                  e.runChartClick),
              l = i.tooltip,
              h = 1 === n && rb(null == l ? void 0 : l.options.followTouchMove, !0);
            (n > 1 ? (e.initiated = !0) : h && (e.initiated = !1),
              s && e.initiated && !a && !1 !== t.cancelable && t.preventDefault(),
              "touchstart" === t.type
                ? ((e.pinchDown = r), (e.res = !0), (i.mouseDownX = t.chartX))
                : h
                  ? this.runPointActions(e.normalize(t))
                  : o &&
                    (rf(i, "touchpan", { originalEvent: t, touches: r }, () => {
                      let e = (t) => {
                        let e = t[0],
                          i = t[1] || e;
                        return {
                          x: e.chartX,
                          y: e.chartY,
                          width: i.chartX - e.chartX,
                          height: i.chartY - e.chartY
                        };
                      };
                      i.transform({
                        axes: i.axes.filter(
                          (t) =>
                            t.zoomEnabled &&
                            ((this.zoomHor && t.horiz) || (this.zoomVert && !t.horiz))
                        ),
                        to: e(r),
                        from: e(o),
                        trigger: t.type
                      });
                    }),
                    e.res && ((e.res = !1), this.reset(!1, 0))),
              (e.lastTouches = r));
          }
          reset(t, e) {
            let i = this.chart,
              s = i.hoverSeries,
              o = i.hoverPoint,
              r = i.hoverPoints,
              n = i.tooltip,
              a = (null == n ? void 0 : n.shared) ? r : o;
            (t &&
              a &&
              rw(a).forEach(function (e) {
                e.series.isCartesian && void 0 === e.plotX && (t = !1);
              }),
              t
                ? n &&
                  a &&
                  rw(a).length &&
                  (n.refresh(a),
                  n.shared && r
                    ? r.forEach(function (t) {
                        (t.setState(t.state, !0),
                          t.series.isCartesian &&
                            (t.series.xAxis.crosshair && t.series.xAxis.drawCrosshair(null, t),
                            t.series.yAxis.crosshair && t.series.yAxis.drawCrosshair(null, t)));
                      })
                    : o &&
                      (o.setState(o.state, !0),
                      i.axes.forEach(function (t) {
                        t.crosshair && o.series[t.coll] === t && t.drawCrosshair(null, o);
                      })))
                : (o && o.onMouseOut(),
                  r &&
                    r.forEach(function (t) {
                      t.setState();
                    }),
                  s && s.onMouseOut(),
                  n && n.hide(e),
                  this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()),
                  i.axes.forEach(function (t) {
                    t.hideCrosshair();
                  }),
                  (i.hoverPoints = i.hoverPoint = void 0)));
          }
          runPointActions(t, e, i) {
            var s;
            let o = this.chart,
              r = o.series,
              n = (null == (s = o.tooltip) ? void 0 : s.options.enabled) ? o.tooltip : void 0,
              a = !!n && n.shared,
              l = e || o.hoverPoint,
              h = (null == l ? void 0 : l.series) || o.hoverSeries,
              d =
                (!t || "touchmove" !== t.type) &&
                (!!e || ((null == h ? void 0 : h.directTouch) && this.isDirectTouch)),
              c = this.getHoverData(l, h, r, d, a, t);
            ((l = c.hoverPoint), (h = c.hoverSeries));
            let p = c.hoverPoints,
              u = (null == h ? void 0 : h.tooltipOptions.followPointer) && !h.tooltipOptions.split,
              g = a && h && !h.noSharedTooltip;
            if (l && (i || l !== o.hoverPoint || (null == n ? void 0 : n.isHidden))) {
              if (
                ((o.hoverPoints || []).forEach(function (t) {
                  -1 === p.indexOf(t) && t.setState();
                }),
                o.hoverSeries !== h && h.onMouseOver(),
                this.applyInactiveState(p),
                (p || []).forEach(function (t) {
                  t.setState("hover");
                }),
                o.hoverPoint && o.hoverPoint.firePointEvent("mouseOut"),
                !l.series)
              )
                return;
              ((o.hoverPoints = p),
                (o.hoverPoint = l),
                l.firePointEvent("mouseOver", void 0, () => {
                  n && l && n.refresh(g ? p : l, t);
                }));
            } else if (u && n && !n.isHidden) {
              let e = n.getAnchor([{}], t);
              o.isInsidePlot(e[0], e[1], { visiblePlotOnly: !0 }) &&
                n.updatePosition({ plotX: e[0], plotY: e[1] });
            }
            (this.unDocMouseMove ||
              ((this.unDocMouseMove = rd(o.container.ownerDocument, "mousemove", (t) => {
                var e, i, s;
                return null == (s = ra[null != (e = rM.hoverChartIndex) ? e : -1]) ||
                  null == (i = s.pointer)
                  ? void 0
                  : i.onDocumentMouseMove(t);
              })),
              this.eventsToUnbind.push(this.unDocMouseMove)),
              o.axes.forEach(function (e) {
                var i, s;
                let r,
                  n = null == (i = null == (s = e.crosshair) ? void 0 : s.snap) || i;
                (!n ||
                  ((r = o.hoverPoint) && r.series[e.coll] === e) ||
                  (r = rg(p, (t) => {
                    var i;
                    return (null == (i = t.series) ? void 0 : i[e.coll]) === e;
                  })),
                  r || !n ? e.drawCrosshair(t, r) : e.hideCrosshair());
              }));
          }
          setDOMEvents() {
            let t = this.chart.container,
              e = t.ownerDocument;
            ((t.onmousedown = this.onContainerMouseDown.bind(this)),
              (t.onmousemove = this.onContainerMouseMove.bind(this)),
              (t.onclick = this.onContainerClick.bind(this)),
              this.eventsToUnbind.push(
                rd(t, "mouseenter", this.onContainerMouseEnter.bind(this)),
                rd(t, "mouseleave", this.onContainerMouseLeave.bind(this))
              ),
              rM.unbindDocumentMouseUp.some((t) => t.doc === e) ||
                rM.unbindDocumentMouseUp.push({
                  doc: e,
                  unbind: rd(e, "mouseup", this.onDocumentMouseUp.bind(this))
                }));
            let i = this.chart.renderTo.parentElement;
            for (; i && "BODY" !== i.tagName;)
              (this.eventsToUnbind.push(
                rd(i, "scroll", () => {
                  delete this.chartPosition;
                })
              ),
                (i = i.parentElement));
            (this.eventsToUnbind.push(
              rd(t, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 }),
              rd(t, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })
            ),
              rM.unbindDocumentTouchEnd ||
                (rM.unbindDocumentTouchEnd = rd(e, "touchend", this.onDocumentTouchEnd.bind(this), {
                  passive: !1
                })),
              this.setPointerCapture(),
              rd(this.chart, "redraw", this.setPointerCapture.bind(this)));
          }
          setPointerCapture() {
            var t, e;
            if (!rh) return;
            let i = this.pointerCaptureEventsToUnbind,
              s = this.chart,
              o = s.container,
              r =
                rb(null == (t = s.options.tooltip) ? void 0 : t.followTouchMove, !0) &&
                s.series.some((t) => t.options.findNearestPointBy.indexOf("y") > -1);
            !this.hasPointerCapture && r
              ? (i.push(
                  rd(o, "pointerdown", (t) => {
                    var e, i;
                    (null == (e = t.target) ? void 0 : e.hasPointerCapture(t.pointerId)) &&
                      (null == (i = t.target) || i.releasePointerCapture(t.pointerId));
                  }),
                  rd(o, "pointermove", (t) => {
                    var e, i;
                    null == (i = s.pointer) ||
                      null == (e = i.getPointFromEvent(t)) ||
                      e.onMouseOver(t);
                  })
                ),
                s.styledMode || rp(o, { "touch-action": "none" }),
                (o.className += " highcharts-no-touch-action"),
                (this.hasPointerCapture = !0))
              : this.hasPointerCapture &&
                !r &&
                (i.forEach((t) => t()),
                (i.length = 0),
                s.styledMode ||
                  rp(o, {
                    "touch-action": rb(
                      null == (e = s.options.chart.style) ? void 0 : e["touch-action"],
                      "manipulation"
                    )
                  }),
                (o.className = o.className.replace(" highcharts-no-touch-action", "")),
                (this.hasPointerCapture = !1));
          }
          setHoverChartIndex(t) {
            let e = this.chart,
              i = G.charts[rb(rM.hoverChartIndex, -1)];
            if (i && i !== e) {
              var s;
              let o = { relatedTarget: e.container };
              (!t || (null == t ? void 0 : t.relatedTarget) || Object.assign({}, t, o),
                null == (s = i.pointer) || s.onContainerMouseLeave(t || o));
            }
            (null == i ? void 0 : i.mouseIsDown) || (rM.hoverChartIndex = e.index);
          }
          touch(t, e) {
            let i,
              { chart: s, pinchDown: o = [] } = this;
            (this.setHoverChartIndex(),
              1 === (t = this.normalize(t)).touches.length
                ? s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop, {
                    visiblePlotOnly: !0
                  }) && !s.openMenu
                  ? (e && this.runPointActions(t),
                    "touchmove" === t.type &&
                      (i =
                        !!o[0] &&
                        Math.pow(o[0].chartX - t.chartX, 2) + Math.pow(o[0].chartY - t.chartY, 2) >=
                          16),
                    rb(i, !0) && this.pinch(t))
                  : e && this.reset()
                : 2 === t.touches.length && this.pinch(t));
          }
          touchSelect(t) {
            return !!(this.chart.zooming.singleTouch && t.touches && 1 === t.touches.length);
          }
          zoomOption(t) {
            let e = this.chart,
              i = e.inverted,
              s = e.zooming.type || "",
              o,
              r;
            (/touch/.test(t.type) && (s = rb(e.zooming.pinchType, s)),
              (this.zoomX = o = /x/.test(s)),
              (this.zoomY = r = /y/.test(s)),
              (this.zoomHor = (o && !i) || (r && i)),
              (this.zoomVert = (r && !i) || (o && i)),
              (this.hasZoom = o || r));
          }
          constructor(t, e) {
            var i;
            ((this.hasDragged = 0),
              (this.pointerCaptureEventsToUnbind = []),
              (this.eventsToUnbind = []),
              (this.options = e),
              (this.chart = t),
              (this.runChartClick = !!(null == (i = e.chart.events) ? void 0 : i.click)),
              (this.pinchDown = []),
              this.setDOMEvents(),
              rf(this, "afterInit"));
          }
        }
        ((rM.unbindDocumentMouseUp = []),
          ((m = rM || (rM = {})).compose = function (t) {
            rk(rl, "Core.Pointer") &&
              rd(t, "beforeRender", function () {
                this.pointer = new m(this, this.options);
              });
          }));
        let rS = rM;
        (((x = O || (O = {})).setLength = function (t, e, i) {
          return Array.isArray(t) ? ((t.length = e), t) : t[i ? "subarray" : "slice"](0, e);
        }),
          (x.splice = function (t, e, i, s) {
            let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
            if (Array.isArray(t))
              return (
                Array.isArray(o) || (o = Array.from(o)),
                { removed: t.splice(e, i, ...o), array: t }
              );
            let r = Object.getPrototypeOf(t).constructor,
              n = t[s ? "subarray" : "slice"](e, e + i),
              a = new r(t.length - i + o.length);
            return (
              a.set(t.subarray(0, e), 0),
              a.set(o, e),
              a.set(t.subarray(e + i), e + o.length),
              { removed: n, array: a }
            );
          }));
        let { setLength: rT, splice: rC } = O,
          { fireEvent: rA, objectEach: rP, uniqueKey: rL } = tu,
          rO = class {
            applyRowCount(t) {
              ((this.rowCount = t),
                rP(this.columns, (e, i) => {
                  e.length !== t && (this.columns[i] = rT(e, t));
                }));
            }
            deleteRows(t) {
              let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
              if (e > 0 && t < this.rowCount) {
                let i = 0;
                (rP(this.columns, (s, o) => {
                  ((this.columns[o] = rC(s, t, e).array), (i = s.length));
                }),
                  (this.rowCount = i));
              }
              (rA(this, "afterDeleteRows", { rowIndex: t, rowCount: e }), (this.versionTag = rL()));
            }
            getColumn(t, e) {
              return this.columns[t];
            }
            getColumns(t, e) {
              return (t || Object.keys(this.columns)).reduce(
                (t, e) => ((t[e] = this.columns[e]), t),
                {}
              );
            }
            getRow(t, e) {
              return (e || Object.keys(this.columns)).map((e) => {
                var i;
                return null == (i = this.columns[e]) ? void 0 : i[t];
              });
            }
            setColumn(t) {
              let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                s = arguments.length > 3 ? arguments[3] : void 0;
              this.setColumns({ [t]: e }, i, s);
            }
            setColumns(t, e, i) {
              let s = this.rowCount;
              (rP(t, (t, e) => {
                ((this.columns[e] = t.slice()), (s = t.length));
              }),
                this.applyRowCount(s),
                (null == i ? void 0 : i.silent) ||
                  (rA(this, "afterSetColumns"), (this.versionTag = rL())));
            }
            setRow(t) {
              let e =
                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.rowCount,
                i = arguments.length > 2 ? arguments[2] : void 0,
                s = arguments.length > 3 ? arguments[3] : void 0,
                { columns: o } = this,
                r = i ? this.rowCount + 1 : e + 1;
              (rP(t, (t, n) => {
                let a = o[n] || ((null == s ? void 0 : s.addColumns) !== !1 && Array(r));
                a && (i ? (a = rC(a, e, 0, !0, [t]).array) : (a[e] = t), (o[n] = a));
              }),
                r > this.rowCount && this.applyRowCount(r),
                (null == s ? void 0 : s.silent) ||
                  (rA(this, "afterSetRows"), (this.versionTag = rL())));
            }
            constructor(t = {}) {
              ((this.autoId = !t.id),
                (this.columns = {}),
                (this.id = t.id || rL()),
                (this.modified = this),
                (this.rowCount = 0),
                (this.versionTag = rL()));
              let e = 0;
              (rP(t.columns || {}, (t, i) => {
                ((this.columns[i] = t.slice()), (e = Math.max(e, t.length)));
              }),
                this.applyRowCount(e));
            }
          },
          { extend: rE, merge: rI, pick: rD } = tu;
        var rB = E || (E = {});
        function rN(t, e, i) {
          var s, o;
          let r = (this.legendItem = this.legendItem || {}),
            { chart: n, options: a } = this,
            { baseline: l = 0, symbolWidth: h, symbolHeight: d } = t,
            c = this.symbol || "circle",
            p = d / 2,
            u = n.renderer,
            g = r.group,
            f =
              l - Math.round(((null == (s = t.fontMetrics) ? void 0 : s.b) || d) * (i ? 0.4 : 0.3)),
            m = {},
            x,
            y = a.marker,
            v = 0;
          if (
            (n.styledMode ||
              ((m["stroke-width"] = Math.min(a.lineWidth || 0, 24)),
              a.dashStyle
                ? (m.dashstyle = a.dashStyle)
                : "square" === a.linecap || (m["stroke-linecap"] = "round")),
            (r.line = u.path().addClass("highcharts-graph").attr(m).add(g)),
            i && (r.area = u.path().addClass("highcharts-area").add(g)),
            m["stroke-linecap"] && (v = Math.min(r.line.strokeWidth(), h) / 2),
            h)
          ) {
            let t = [
              ["M", v, f],
              ["L", h - v, f]
            ];
            (r.line.attr({ d: t }),
              null == (o = r.area) || o.attr({ d: [...t, ["L", h - v, l], ["L", v, l]] }));
          }
          if (y && !1 !== y.enabled && h) {
            let t = Math.min(rD(y.radius, p), p);
            (0 === c.indexOf("url") && ((y = rI(y, { width: d, height: d })), (t = 0)),
              (r.symbol = x =
                u
                  .symbol(c, h / 2 - t, f - t, 2 * t, 2 * t, rE({ context: "legend" }, y))
                  .addClass("highcharts-point")
                  .add(g)),
              (x.isMarker = !0));
          }
        }
        ((rB.areaMarker = function (t, e) {
          rN.call(this, t, e, !0);
        }),
          (rB.lineMarker = rN),
          (rB.rectangle = function (t, e) {
            let i = e.legendItem || {},
              s = t.options,
              o = t.symbolHeight,
              r = s.squareSymbol,
              n = r ? o : t.symbolWidth;
            i.symbol = this.chart.renderer
              .rect(
                r ? (t.symbolWidth - o) / 2 : 0,
                t.baseline - o + 1,
                n,
                o,
                rD(t.options.symbolRadius, o / 2)
              )
              .addClass("highcharts-point")
              .attr({ zIndex: 3 })
              .add(i.group);
          }));
        let rz = E,
          { defaultOptions: rR } = tX,
          { extend: rW, extendClass: rX, merge: rH } = tu;
        var rF = I || (I = {});
        function rG(t, e) {
          let i = rR.plotOptions || {},
            s = e.defaultOptions,
            o = e.prototype;
          return (
            (o.type = t),
            o.pointClass || (o.pointClass = rr),
            !rF.seriesTypes[t] && (s && (i[t] = s), (rF.seriesTypes[t] = e), !0)
          );
        }
        ((rF.seriesTypes = G.seriesTypes),
          (rF.registerSeriesType = rG),
          (rF.seriesType = function (t, e, i, s, o) {
            let r = rR.plotOptions || {};
            if (
              ((e = e || ""),
              (r[t] = rH(r[e], i)),
              delete rF.seriesTypes[t],
              rG(t, rX(rF.seriesTypes[e] || function () {}, s)),
              (rF.seriesTypes[t].prototype.type = t),
              o)
            ) {
              class e extends rr {}
              (rW(e.prototype, o), (rF.seriesTypes[t].prototype.pointClass = e));
            }
            return rF.seriesTypes[t];
          }));
        let rY = I,
          { animObject: rj, setAnimation: rU } = et,
          { defaultOptions: rV } = tX,
          { registerEventOptions: rZ } = sb,
          { svg: rq, win: r_ } = G,
          { seriesTypes: rK } = rY,
          { format: r$ } = eO,
          {
            arrayMax: rJ,
            arrayMin: rQ,
            clamp: r0,
            correctFloat: r1,
            crisp: r2,
            defined: r3,
            destroyObjectProperties: r5,
            diffObjects: r6,
            erase: r9,
            error: r4,
            extend: r8,
            find: r7,
            fireEvent: nt,
            getClosestDistance: ne,
            getNestedProperty: ni,
            insertItem: ns,
            isArray: no,
            isNumber: nr,
            isString: nn,
            merge: na,
            objectEach: nl,
            pick: nh,
            removeEvent: nd,
            syncTimeout: nc
          } = tu;
        class np {
          init(t, e) {
            var i, s, o;
            let r;
            (nt(this, "init", { options: e }),
              null != this.dataTable || (this.dataTable = new rO()));
            let n = t.series;
            ((this.eventsToUnbind = []), (this.chart = t), (this.options = this.setOptions(e)));
            let a = this.options,
              l = !1 !== a.visible;
            ((this.linkedSeries = []),
              this.bindAxes(),
              r8(this, { name: a.name, state: "", visible: l, selected: !0 === a.selected }),
              rZ(this, a));
            let h = a.events;
            (((null == h ? void 0 : h.click) ||
              (null == (s = a.point) || null == (i = s.events) ? void 0 : i.click) ||
              a.allowPointSelect) &&
              (t.runTrackerClick = !0),
              this.getColor(),
              this.getSymbol(),
              this.isCartesian && (t.hasCartesianSeries = !0),
              n.length && (r = n[n.length - 1]),
              (this._i = nh(null == r ? void 0 : r._i, -1) + 1),
              (this.opacity = this.options.opacity),
              t.orderItems("series", ns(this, n)),
              (null == (o = a.dataSorting) ? void 0 : o.enabled)
                ? this.setDataSortingOptions()
                : this.points || this.data || this.setData(a.data, !1),
              nt(this, "afterInit"));
          }
          is(t) {
            return rK[t] && this instanceof rK[t];
          }
          bindAxes() {
            let t,
              e = this,
              i = e.options,
              s = e.chart;
            (nt(this, "bindAxes", null, function () {
              (e.axisTypes || []).forEach(function (o) {
                ((s[o] || []).forEach(function (s) {
                  ((t = s.options),
                    (nh(i[o], 0) === s.index || (void 0 !== i[o] && i[o] === t.id)) &&
                      (ns(e, s.series), (e[o] = s), (s.isDirty = !0)));
                }),
                  e[o] || e.optionalAxis === o || r4(18, !0, s));
              });
            }),
              nt(this, "afterBindAxes"));
          }
          hasData() {
            return (
              (this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin) ||
              (this.visible && this.dataTable.rowCount > 0)
            );
          }
          hasMarkerChanged(t, e) {
            let i = t.marker,
              s = e.marker || {};
            return (
              i &&
              ((s.enabled && !i.enabled) ||
                s.symbol !== i.symbol ||
                s.height !== i.height ||
                s.width !== i.width)
            );
          }
          autoIncrement(t) {
            var e, i;
            let s,
              o = this.options,
              { pointIntervalUnit: r, relativeXValue: n } = this.options,
              a = this.chart.time,
              l = null != (e = null != (i = this.xIncrement) ? i : a.parse(o.pointStart)) ? e : 0;
            if (
              ((this.pointInterval = s = nh(this.pointInterval, o.pointInterval, 1)),
              n && nr(t) && (s *= t),
              r)
            ) {
              let t = a.toParts(l);
              ("day" === r
                ? (t[2] += s)
                : "month" === r
                  ? (t[1] += s)
                  : "year" === r && (t[0] += s),
                (s = a.makeTime.apply(a, t) - l));
            }
            return n && nr(t) ? l + s : ((this.xIncrement = l + s), l);
          }
          setDataSortingOptions() {
            let t = this.options;
            (r8(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 }),
              r3(t.pointRange) || (t.pointRange = 1));
          }
          setOptions(t) {
            var e, i;
            let s,
              o = this.chart,
              r = o.options.plotOptions,
              n = o.userOptions || {},
              a = na(t),
              l = o.styledMode,
              h = { plotOptions: r, userOptions: a };
            nt(this, "setOptions", h);
            let d = h.plotOptions[this.type],
              c = n.plotOptions || {},
              p = c.series || {},
              u = rV.plotOptions[this.type] || {},
              g = c[this.type] || {};
            ((d.dataLabels = this.mergeArrays(u.dataLabels, d.dataLabels)),
              (this.userOptions = h.userOptions));
            let f = na(d, r.series, g, a);
            ((this.tooltipOptions = na(
              rV.tooltip,
              null == (e = rV.plotOptions.series) ? void 0 : e.tooltip,
              null == u ? void 0 : u.tooltip,
              o.userOptions.tooltip,
              null == (i = c.series) ? void 0 : i.tooltip,
              g.tooltip,
              a.tooltip
            )),
              (this.stickyTracking = nh(
                a.stickyTracking,
                g.stickyTracking,
                p.stickyTracking,
                (!!this.tooltipOptions.shared && !this.noSharedTooltip) || f.stickyTracking
              )),
              null === d.marker && delete f.marker,
              (this.zoneAxis = f.zoneAxis || "y"));
            let m = (this.zones = (f.zones || []).map((t) => ({ ...t })));
            return (
              (f.negativeColor || f.negativeFillColor) &&
                !f.zones &&
                ((s = {
                  value: f[this.zoneAxis + "Threshold"] || f.threshold || 0,
                  className: "highcharts-negative"
                }),
                l || ((s.color = f.negativeColor), (s.fillColor = f.negativeFillColor)),
                m.push(s)),
              m.length &&
                r3(m[m.length - 1].value) &&
                m.push(l ? {} : { color: this.color, fillColor: this.fillColor }),
              nt(this, "afterSetOptions", { options: f }),
              f
            );
          }
          getName() {
            var t;
            return null != (t = this.options.name)
              ? t
              : r$(this.chart.options.lang.seriesName, this, this.chart);
          }
          getCyclic(t, e, i) {
            let s,
              o,
              r = this.chart,
              n = "".concat(t, "Index"),
              a = "".concat(t, "Counter"),
              l = (null == i ? void 0 : i.length) || r.options.chart.colorCount;
            (!e &&
              (r3((o = nh("color" === t ? this.options.colorIndex : void 0, this[n])))
                ? (s = o)
                : (r.series.length || (r[a] = 0), (s = r[a] % l), (r[a] += 1)),
              i && (e = i[s])),
              void 0 !== s && (this[n] = s),
              (this[t] = e));
          }
          getColor() {
            this.chart.styledMode
              ? this.getCyclic("color")
              : this.options.colorByPoint
                ? (this.color = "#cccccc")
                : this.getCyclic(
                    "color",
                    this.options.color || rV.plotOptions[this.type].color,
                    this.chart.options.colors
                  );
          }
          getPointsCollection() {
            return (this.hasGroupedData ? this.points : this.data) || [];
          }
          getSymbol() {
            let t = this.options.marker;
            this.getCyclic("symbol", t.symbol, this.chart.options.symbols);
          }
          getColumn(t, e) {
            return (e ? this.dataTable.modified : this.dataTable).getColumn(t, !0) || [];
          }
          findPointIndex(t, e) {
            var i;
            let s,
              o,
              r,
              { id: n, x: a } = t,
              l = this.points,
              h = this.options.dataSorting,
              d = this.cropStart || 0;
            if (n) {
              let t = this.chart.get(n);
              t instanceof rr && (s = t);
            } else if (
              this.linkedParent ||
              this.enabledDataSorting ||
              this.options.relativeXValue
            ) {
              let e = (e) => !e.touched && e.index === t.index;
              if (
                ((null == h ? void 0 : h.matchByName)
                  ? (e = (e) => !e.touched && e.name === t.name)
                  : this.options.relativeXValue && (e = (e) => !e.touched && e.options.x === t.x),
                !(s = r7(l, e)))
              )
                return;
            }
            return (
              s && void 0 !== (r = null == s ? void 0 : s.index) && (o = !0),
              void 0 === r && nr(a) && (r = this.getColumn("x").indexOf(a, e)),
              -1 !== r && void 0 !== r && this.cropped && (r = r >= d ? r - d : r),
              !o && nr(r) && (null == (i = l[r]) ? void 0 : i.touched) && (r = void 0),
              r
            );
          }
          updateData(t, e) {
            var i;
            let { options: s, requireSorting: o } = this,
              r = s.dataSorting,
              n = this.points,
              a = [],
              l = t.length === n.length,
              h,
              d,
              c,
              p,
              u = !0;
            if (
              ((this.xIncrement = null),
              t.forEach((t, e) => {
                var i;
                let d,
                  c =
                    (r3(t) &&
                      this.pointClass.prototype.optionsToObject.call({ series: this }, t)) ||
                    {},
                  { id: u, x: g } = c;
                u || nr(g)
                  ? (-1 === (d = this.findPointIndex(c, p)) || void 0 === d
                      ? a.push(t)
                      : n[d] && t !== (null == (i = s.data) ? void 0 : i[d])
                        ? (n[d].update(t, !1, void 0, !1), (n[d].touched = !0), o && (p = d + 1))
                        : n[d] && (n[d].touched = !0),
                    (!l || e !== d || (null == r ? void 0 : r.enabled) || this.hasDerivedData) &&
                      (h = !0))
                  : a.push(t);
              }, this),
              h)
            )
              for (d = n.length; d--;)
                (c = n[d]) && !c.touched && (null == (i = c.remove) || i.call(c, !1, e));
            else
              !l || (null == r ? void 0 : r.enabled)
                ? (u = !1)
                : (t.forEach((t, e) => {
                    t === n[e].y || n[e].destroyed || n[e].update(t, !1, void 0, !1);
                  }),
                  (a.length = 0));
            if (
              (n.forEach((t) => {
                t && (t.touched = !1);
              }),
              !u)
            )
              return !1;
            a.forEach((t) => {
              this.addPoint(t, !1, void 0, void 0, !1);
            }, this);
            let g = this.getColumn("x");
            return (
              null === this.xIncrement &&
                g.length &&
                ((this.xIncrement = rJ(g)), this.autoIncrement()),
              !0
            );
          }
          dataColumnKeys() {
            return ["x", ...(this.pointArrayMap || ["y"])];
          }
          setData(t) {
            let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
              i = arguments.length > 2 ? arguments[2] : void 0,
              s = arguments.length > 3 ? arguments[3] : void 0,
              o = this.points,
              r = (null == o ? void 0 : o.length) || 0,
              n = this.options,
              a = this.chart,
              l = n.dataSorting,
              h = this.xAxis,
              d = n.turboThreshold,
              c = this.dataTable,
              p = this.dataColumnKeys(),
              u = this.pointValKey || "y",
              g = (this.pointArrayMap || []).length,
              f = n.keys,
              m,
              x,
              y = 0,
              v = 1,
              b;
            a.options.chart.allowMutatingData ||
              (n.data && delete this.options.data,
              this.userOptions.data && delete this.userOptions.data,
              (b = na(!0, t)));
            let k = (t = b || t || []).length;
            if (
              ((null == l ? void 0 : l.enabled) && (t = this.sortData(t)),
              a.options.chart.allowMutatingData &&
                !1 !== s &&
                k &&
                r &&
                !this.cropped &&
                !this.hasGroupedData &&
                this.visible &&
                !this.boosted &&
                (x = this.updateData(t, i)),
              !x)
            ) {
              var w, M;
              ((this.xIncrement = null), (this.colorCounter = 0));
              let e = d && k > d;
              if (e) {
                let i = this.getFirstValidPoint(t),
                  s = this.getFirstValidPoint(t, k - 1, -1),
                  o = (t) => !!(no(t) && (f || nr(t[0])));
                if (nr(i) && nr(s)) {
                  let e = [],
                    i = [];
                  for (let s of t) (e.push(this.autoIncrement()), i.push(s));
                  c.setColumns({ x: e, [u]: i });
                } else if (o(i) && o(s))
                  if (g) {
                    let e = +(i.length === g),
                      s = Array(p.length)
                        .fill(0)
                        .map(() => []);
                    for (let i of t) {
                      e && s[0].push(this.autoIncrement());
                      for (let t = e; t <= g; t++) null == (M = s[t]) || M.push(i[t - e]);
                    }
                    c.setColumns(p.reduce((t, e, i) => ((t[e] = s[i]), t), {}));
                  } else {
                    (f &&
                      ((y = f.indexOf("x")),
                      (v = f.indexOf("y")),
                      (y = y >= 0 ? y : 0),
                      (v = v >= 0 ? v : 1)),
                      1 === i.length && (v = 0));
                    let e = [],
                      s = [];
                    if (y === v) for (let i of t) (e.push(this.autoIncrement()), s.push(i[v]));
                    else for (let i of t) (e.push(i[y]), s.push(i[v]));
                    c.setColumns({ x: e, [u]: s });
                  }
                else e = !1;
              }
              if (!e) {
                let e = p.reduce((t, e) => ((t[e] = []), t), {});
                for (m = 0; m < k; m++) {
                  let i = this.pointClass.prototype.applyOptions.apply({ series: this }, [t[m]]);
                  for (let t of p) e[t][m] = i[t];
                }
                c.setColumns(e);
              }
              for (
                nn(this.getColumn("y")[0]) && r4(14, !0, a),
                  this.data = [],
                  this.options.data = this.userOptions.data = t,
                  m = r;
                m--;
              )
                null == (w = o[m]) || w.destroy();
              (h && (h.minRange = h.userMinRange),
                (this.isDirty = a.isDirtyBox = !0),
                (this.isDirtyData = !!o),
                (i = !1));
            }
            ("point" === n.legendType && (this.processData(), this.generatePoints()),
              e && a.redraw(i));
          }
          sortData(t) {
            let e = this,
              i = e.options.dataSorting.sortKey || "y",
              s = function (t, e) {
                return (
                  (r3(e) && t.pointClass.prototype.optionsToObject.call({ series: t }, e)) || {}
                );
              };
            return (
              t.forEach(function (i, o) {
                ((t[o] = s(e, i)), (t[o].index = o));
              }, this),
              t
                .concat()
                .sort((t, e) => {
                  let s = ni(i, t),
                    o = ni(i, e);
                  return o < s ? -1 : +(o > s);
                })
                .forEach(function (t, e) {
                  t.x = e;
                }, this),
              e.linkedSeries &&
                e.linkedSeries.forEach(function (e) {
                  var i;
                  let o = e.options,
                    r = o.data;
                  (null == (i = o.dataSorting) ? void 0 : i.enabled) ||
                    !r ||
                    (r.forEach(function (i, o) {
                      ((r[o] = s(e, i)), t[o] && ((r[o].x = t[o].x), (r[o].index = o)));
                    }),
                    e.setData(r, !1));
                }),
              t
            );
          }
          getProcessedData(t) {
            let e = this,
              { dataTable: i, isCartesian: s, options: o, xAxis: r } = e,
              n = o.cropThreshold,
              a = t || e.getExtremesFromAll,
              l = null == r ? void 0 : r.logarithmic,
              h = i.rowCount,
              d,
              c,
              p = 0,
              u,
              g,
              f,
              m = e.getColumn("x"),
              x = i,
              y = !1;
            return (
              r &&
                ((g = (u = r.getExtremes()).min),
                (f = u.max),
                (y = !!(r.categories && !r.names.length)),
                s &&
                  e.sorted &&
                  !a &&
                  (!n || h > n || e.forceCrop) &&
                  (m[h - 1] < g || m[0] > f
                    ? (x = new rO())
                    : e.getColumn(e.pointValKey || "y").length &&
                      (m[0] < g || m[h - 1] > f) &&
                      ((x = (d = this.cropData(i, g, f)).modified), (p = d.start), (c = !0)))),
              (m = x.getColumn("x") || []),
              {
                modified: x,
                cropped: c,
                cropStart: p,
                closestPointRange: ne(
                  [l ? m.map(l.log2lin) : m],
                  () => e.requireSorting && !y && r4(15, !1, e.chart)
                )
              }
            );
          }
          processData(t) {
            let e = this.xAxis,
              i = this.dataTable;
            if (this.isCartesian && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !t)
              return !1;
            let s = this.getProcessedData();
            ((i.modified = s.modified),
              (this.cropped = s.cropped),
              (this.cropStart = s.cropStart),
              (this.closestPointRange = this.basePointRange = s.closestPointRange),
              nt(this, "afterProcessData"));
          }
          cropData(t, e, i) {
            let s = t.getColumn("x", !0) || [],
              o = s.length,
              r = {},
              n,
              a,
              l = 0,
              h = o;
            for (n = 0; n < o; n++)
              if (s[n] >= e) {
                l = Math.max(0, n - 1);
                break;
              }
            for (a = n; a < o; a++)
              if (s[a] > i) {
                h = a + 1;
                break;
              }
            for (let e of this.dataColumnKeys()) {
              let i = t.getColumn(e, !0);
              i && (r[e] = i.slice(l, h));
            }
            return { modified: new rO({ columns: r }), start: l, end: h };
          }
          generatePoints() {
            var t, e, i, s, o;
            let r = this.options,
              n = this.processedData || r.data,
              a = this.dataTable.modified,
              l = this.getColumn("x", !0),
              h = this.pointClass,
              d = a.rowCount,
              c = this.cropStart || 0,
              p = this.hasGroupedData,
              u = r.keys,
              g = [],
              f = (null == (i = r.dataGrouping) ? void 0 : i.groupAll) ? c : 0,
              m = null == (s = this.xAxis) ? void 0 : s.categories,
              x = this.pointArrayMap || ["y"],
              y = this.dataColumnKeys(),
              v,
              b,
              k,
              w,
              M = this.data,
              S;
            if (!M && !p) {
              let t = [];
              ((t.length = (null == n ? void 0 : n.length) || 0), (M = this.data = t));
            }
            for (u && p && (this.options.keys = !1), w = 0; w < d; w++)
              ((b = c + w),
                p
                  ? (((k = new h(this, a.getRow(w, y) || [])).dataGroup = this.groupMap[f + w]),
                    (null == (o = k.dataGroup) ? void 0 : o.options) &&
                      ((k.options = k.dataGroup.options),
                      r8(k, k.dataGroup.options),
                      delete k.dataLabels))
                  : ((k = M[b]),
                    (S = n ? n[b] : a.getRow(w, x)),
                    k || void 0 === S || (M[b] = k = new h(this, S, l[w]))),
                k &&
                  ((k.index = p ? f + w : b),
                  (g[w] = k),
                  (k.category = null != (t = null == m ? void 0 : m[k.x]) ? t : k.x),
                  (k.key = null != (e = k.name) ? e : k.category)));
            if (((this.options.keys = u), M && (d !== (v = M.length) || p)))
              for (w = 0; w < v; w++)
                (w !== c || p || (w += d), M[w] && (M[w].destroyElements(), (M[w].plotX = void 0)));
            ((this.data = M), (this.points = g), nt(this, "afterGeneratePoints"));
          }
          getXExtremes(t) {
            return { min: rQ(t), max: rJ(t) };
          }
          getExtremes(t, e) {
            var i;
            let { xAxis: s, yAxis: o } = this,
              r = e || this.getExtremesFromAll || this.options.getExtremesFromAll,
              n = r && this.cropped ? this.dataTable : this.dataTable.modified,
              a = n.rowCount,
              l = t || this.stackedYData,
              h = l
                ? [l]
                : (null == (i = this.keysAffectYAxis || this.pointArrayMap || ["y"])
                    ? void 0
                    : i.map((t) => n.getColumn(t, !0) || [])) || [],
              d = this.getColumn("x", !0),
              c = [],
              p = this.requireSorting && !this.is("column") ? 1 : 0,
              u = !!o && o.positiveValuesOnly,
              g = r || this.cropped || !s,
              f,
              m,
              x,
              y = 0,
              v = 0;
            for (s && ((y = (f = s.getExtremes()).min), (v = f.max)), x = 0; x < a; x++)
              if (((m = d[x]), g || ((d[x + p] || m) >= y && (d[x - p] || m) <= v)))
                for (let t of h) {
                  let e = t[x];
                  nr(e) && (e > 0 || !u) && c.push(e);
                }
            let b = { activeYData: c, dataMin: rQ(c), dataMax: rJ(c) };
            return (nt(this, "afterGetExtremes", { dataExtremes: b }), b);
          }
          applyExtremes() {
            let t = this.getExtremes();
            return ((this.dataMin = t.dataMin), (this.dataMax = t.dataMax), t);
          }
          getFirstValidPoint(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
              s = t.length,
              o = e;
            for (; o >= 0 && o < s;) {
              if (r3(t[o])) return t[o];
              o += i;
            }
          }
          translate() {
            this.generatePoints();
            let t = this.options,
              e = t.stacking,
              i = this.xAxis,
              s = this.enabledDataSorting,
              o = this.yAxis,
              r = this.points,
              n = r.length,
              a = this.pointPlacementToXValue(),
              l = !!a,
              h = t.threshold,
              d = t.startFromThreshold ? h : 0,
              c = (null == t ? void 0 : t.nullInteraction) && o.len,
              p,
              u,
              g,
              f,
              m = Number.MAX_VALUE;
            function x(t) {
              return r0(t, -1e9, 1e9);
            }
            for (p = 0; p < n; p++) {
              var y;
              let t,
                n = r[p],
                v = n.x,
                b,
                k,
                w = n.y,
                M = n.low,
                S =
                  e &&
                  (null == (y = o.stacking)
                    ? void 0
                    : y.stacks[(this.negStacks && w < (d ? 0 : h) ? "-" : "") + this.stackKey]);
              ((n.plotX = nr((u = i.translate(v, !1, !1, !1, !0, a))) ? r1(x(u)) : void 0),
                e &&
                  this.visible &&
                  S &&
                  S[v] &&
                  ((f = this.getStackIndicator(f, v, this.index)),
                  !n.isNull && f.key && (k = (b = S[v]).points[f.key]),
                  b &&
                    no(k) &&
                    ((M = k[0]),
                    (w = k[1]),
                    M === d && f.key === S[v].base && (M = nh(nr(h) ? h : o.min)),
                    o.positiveValuesOnly && r3(M) && M <= 0 && (M = void 0),
                    (n.total = n.stackTotal = nh(b.total)),
                    (n.percentage = r3(n.y) && b.total ? (n.y / b.total) * 100 : void 0),
                    (n.stackY = w),
                    this.irregularWidths ||
                      b.setOffset(
                        this.pointXOffset || 0,
                        this.barW || 0,
                        void 0,
                        void 0,
                        void 0,
                        this.xAxis
                      ))),
                (n.yBottom = r3(M) ? x(o.translate(M, !1, !0, !1, !0)) : void 0),
                this.dataModify && (w = this.dataModify.modifyValue(w, p)),
                nr(w) && void 0 !== n.plotX
                  ? (t = nr((t = o.translate(w, !1, !0, !1, !0))) ? x(t) : void 0)
                  : !nr(w) && c && (t = c),
                (n.plotY = t),
                (n.isInside = this.isPointInside(n)),
                (n.clientX = l ? r1(i.translate(v, !1, !1, !1, !0, a)) : u),
                (n.negative = (n.y || 0) < (h || 0)),
                n.isNull ||
                  !1 === n.visible ||
                  (void 0 !== g && (m = Math.min(m, Math.abs(u - g))), (g = u)),
                (n.zone = this.zones.length ? n.getZone() : void 0),
                !n.graphic && this.group && s && (n.isNew = !0));
            }
            ((this.closestPointRangePx = m), nt(this, "afterTranslate"));
          }
          getValidPoints(t, e, i) {
            let s = this.chart;
            return (t || this.points || []).filter(function (t) {
              let { plotX: o, plotY: r } = t;
              return (
                !!(
                  (i || (!t.isNull && nr(r))) &&
                  (!e || s.isInsidePlot(o, r, { inverted: s.inverted }))
                ) && !1 !== t.visible
              );
            });
          }
          getSharedClipKey() {
            return (
              (this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0)),
              this.sharedClipKey
            );
          }
          setClip() {
            let { chart: t, group: e, markerGroup: i } = this,
              s = t.sharedClips,
              o = t.renderer,
              r = t.getClipBox(this),
              n = this.getSharedClipKey(),
              a = s[n];
            (a ? a.animate(r) : (s[n] = a = o.clipRect(r)),
              e && e.clip(!1 === this.options.clip ? void 0 : a),
              i && i.clip());
          }
          animate(t) {
            let { chart: e, group: i, markerGroup: s } = this,
              o = e.inverted,
              r = rj(this.options.animation),
              n = [this.getSharedClipKey(), r.duration, r.easing, r.defer].join(","),
              a = e.sharedClips[n],
              l = e.sharedClips[n + "m"];
            if (t && i) {
              let t = e.getClipBox(this);
              if (a) a.attr("height", t.height);
              else {
                ((t.width = 0),
                  o && (t.x = e.plotHeight),
                  (a = e.renderer.clipRect(t)),
                  (e.sharedClips[n] = a));
                let i = {
                  x: -99,
                  y: -99,
                  width: o ? e.plotWidth + 199 : 99,
                  height: o ? 99 : e.plotHeight + 199
                };
                ((l = e.renderer.clipRect(i)), (e.sharedClips[n + "m"] = l));
              }
              (i.clip(a), null == s || s.clip(l));
            } else if (a && !a.hasClass("highcharts-animating")) {
              let t = e.getClipBox(this),
                i = r.step;
              (((null == s ? void 0 : s.element.childNodes.length) || e.series.length > 1) &&
                (r.step = function (t, e) {
                  (i && i.apply(e, arguments),
                    "width" === e.prop &&
                      (null == l ? void 0 : l.element) &&
                      l.attr(o ? "height" : "width", t + 99));
                }),
                a.addClass("highcharts-animating").animate(t, r));
            }
          }
          afterAnimate() {
            (this.setClip(),
              nl(this.chart.sharedClips, (t, e, i) => {
                t &&
                  !this.chart.container.querySelector('[clip-path="url(#'.concat(t.id, ')"]')) &&
                  (t.destroy(), delete i[e]);
              }),
              (this.finishedAnimating = !0),
              nt(this, "afterAnimate"));
          }
          drawPoints() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.points,
              e,
              i,
              s,
              o,
              r,
              n,
              a,
              l = this.chart,
              h = l.styledMode,
              { colorAxis: d, options: c } = this,
              p = c.marker,
              u = c.nullInteraction,
              g = this[this.specialGroup || "markerGroup"],
              f = this.xAxis,
              m = nh(
                p.enabled,
                !f || !!f.isRadial || null,
                this.closestPointRangePx >= p.enabledThreshold * p.radius
              );
            if (!1 !== p.enabled || this._hasPointMarkers)
              for (e = 0; e < t.length; e++) {
                ((o = (s = (i = t[e]).graphic) ? "animate" : "attr"),
                  (r = i.marker || {}),
                  (n = !!i.marker));
                let c = i.isNull;
                if (((m && !r3(r.enabled)) || r.enabled) && (!c || u) && !1 !== i.visible) {
                  let t = nh(r.symbol, this.symbol, "rect");
                  ((a = this.markerAttribs(i, i.selected && "select")),
                    this.enabledDataSorting &&
                      (i.startXPos = f.reversed ? -(a.width || 0) : f.width));
                  let e = !1 !== i.isInside;
                  if (
                    (!s &&
                      e &&
                      ((a.width || 0) > 0 || i.hasImage) &&
                      ((i.graphic = s =
                        l.renderer.symbol(t, a.x, a.y, a.width, a.height, n ? r : p).add(g)),
                      this.enabledDataSorting &&
                        l.hasRendered &&
                        (s.attr({ x: i.startXPos }), (o = "animate"))),
                    s && "animate" === o && s[e ? "show" : "hide"](e).animate(a),
                    s)
                  ) {
                    let t = this.pointAttribs(i, h || !i.selected ? void 0 : "select");
                    h ? d && s.css({ fill: t.fill }) : s[o](t);
                  }
                  s && s.addClass(i.getClassName(), !0);
                } else s && (i.graphic = s.destroy());
              }
          }
          markerAttribs(t, e) {
            let i = this.options,
              s = i.marker,
              o = t.marker || {},
              r = o.symbol || s.symbol,
              n = {},
              a,
              l,
              h = nh(o.radius, null == s ? void 0 : s.radius);
            (e &&
              ((a = s.states[e]),
              (h = nh(
                null == (l = o.states && o.states[e]) ? void 0 : l.radius,
                null == a ? void 0 : a.radius,
                h && h + ((null == a ? void 0 : a.radiusPlus) || 0)
              ))),
              (t.hasImage = r && 0 === r.indexOf("url")),
              t.hasImage && (h = 0));
            let d = t.pos();
            return (
              nr(h) &&
                d &&
                (i.crisp &&
                  (d[0] = r2(
                    d[0],
                    t.hasImage ? 0 : "rect" === r ? (null == s ? void 0 : s.lineWidth) || 0 : 1
                  )),
                (n.x = d[0] - h),
                (n.y = d[1] - h)),
              h && (n.width = n.height = 2 * h),
              n
            );
          }
          pointAttribs(t, e) {
            var i;
            let s = this.options,
              o = s.marker,
              r = null == t ? void 0 : t.options,
              n = (null == r ? void 0 : r.marker) || {},
              a = null == r ? void 0 : r.color,
              l = null == t ? void 0 : t.color,
              h = null == t || null == (i = t.zone) ? void 0 : i.color,
              d,
              c,
              p = this.color,
              u,
              g,
              f = nh(n.lineWidth, o.lineWidth),
              m = (null == t ? void 0 : t.isNull) && s.nullInteraction ? 0 : 1;
            return (
              (p = a || h || l || p),
              (u = n.fillColor || o.fillColor || p),
              (g = n.lineColor || o.lineColor || p),
              (e = e || "normal"),
              (d = o.states[e] || {}),
              (f = nh(
                (c = (n.states && n.states[e]) || {}).lineWidth,
                d.lineWidth,
                f + nh(c.lineWidthPlus, d.lineWidthPlus, 0)
              )),
              (u = c.fillColor || d.fillColor || u),
              {
                stroke: (g = c.lineColor || d.lineColor || g),
                "stroke-width": f,
                fill: u,
                opacity: (m = nh(c.opacity, d.opacity, m))
              }
            );
          }
          destroy(t) {
            var e, i;
            let s,
              o,
              r = this,
              n = r.chart,
              a = /AppleWebKit\/533/.test(r_.navigator.userAgent),
              l = r.data || [];
            for (
              nt(r, "destroy", { keepEventsForUpdate: t }),
                this.removeEvents(t),
                (r.axisTypes || []).forEach(function (t) {
                  (null == (o = r[t]) ? void 0 : o.series) &&
                    (r9(o.series, r), (o.isDirty = o.forceRedraw = !0));
                }),
                r.legendItem && r.chart.legend.destroyItem(r),
                s = l.length;
              s--;
            )
              null == (i = l[s]) || null == (e = i.destroy) || e.call(i);
            for (let t of r.zones) r5(t, void 0, !0);
            (tu.clearTimeout(r.animationTimeout),
              nl(r, function (t, e) {
                t instanceof ia && !t.survive && t[a && "group" === e ? "hide" : "destroy"]();
              }),
              n.hoverSeries === r && (n.hoverSeries = void 0),
              r9(n.series, r),
              n.orderItems("series"),
              nl(r, function (e, i) {
                (t && "hcEvents" === i) || delete r[i];
              }));
          }
          applyZones() {
            let {
                area: t,
                chart: e,
                graph: i,
                zones: s,
                points: o,
                xAxis: r,
                yAxis: n,
                zoneAxis: a
              } = this,
              { inverted: l, renderer: h } = e,
              d = this["".concat(a, "Axis")],
              { isXAxis: c, len: p = 0, minPointOffset: u = 0 } = d || {},
              g = ((null == i ? void 0 : i.strokeWidth()) || 0) / 2 + 1,
              f = function (t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                l && (i = p - i);
                let { translated: s = 0, lineClip: o } = t,
                  r = i - s;
                null == o || o.push(["L", e, Math.abs(r) < g ? i - g * (r <= 0 ? -1 : 1) : s]);
              };
            if (s.length && (i || t) && d && nr(d.min)) {
              let e = d.getExtremes().max + u,
                g = (t) => {
                  t.forEach((e, i) => {
                    ("M" === e[0] || "L" === e[0]) &&
                      (t[i] = [e[0], c ? p - e[1] : e[1], c ? e[2] : p - e[2]]);
                  });
                };
              if (
                (s.forEach((t) => {
                  ((t.lineClip = []),
                    (t.translated = r0(d.toPixels(nh(t.value, e), !0) || 0, 0, p)));
                }),
                i && !this.showLine && i.hide(),
                t && t.hide(),
                "y" === a && o.length < r.len)
              )
                for (let t of o) {
                  let { plotX: e, plotY: i, zone: o } = t,
                    r = o && s[s.indexOf(o) - 1];
                  (o && f(o, e, i), r && f(r, e, i));
                }
              let m = [],
                x = d.toPixels(d.getExtremes().min - u, !0);
              s.forEach((e) => {
                var s, o;
                let a = e.lineClip || [],
                  d = Math.round(e.translated || 0);
                r.reversed && a.reverse();
                let { clip: p, simpleClip: u } = e,
                  f = 0,
                  y = 0,
                  v = r.len,
                  b = n.len;
                c ? ((f = d), (v = x)) : ((y = d), (b = x));
                let k = [["M", f, y], ["L", v, y], ["L", v, b], ["L", f, b], ["Z"]],
                  w = [k[0], ...a, k[1], k[2], ...m, k[3], k[4]];
                ((m = a.reverse()),
                  (x = d),
                  l && (g(w), t && g(k)),
                  p
                    ? (p.animate({ d: w }), null == u || u.animate({ d: k }))
                    : ((p = e.clip = h.path(w)), t && (u = e.simpleClip = h.path(k))),
                  i && (null == (s = e.graph) || s.clip(p)),
                  t && (null == (o = e.area) || o.clip(u)));
              });
            } else this.visible && (i && i.show(), t && t.show());
          }
          plotGroup(t, e, i, s, o) {
            let r = this[t],
              n = !r,
              a = { visibility: i, zIndex: s || 0.1 };
            return (
              r3(this.opacity) &&
                !this.chart.styledMode &&
                "inactive" !== this.state &&
                (a.opacity = this.opacity),
              r || (this[t] = r = this.chart.renderer.g().add(o)),
              r.addClass(
                "highcharts-" +
                  e +
                  " highcharts-series-" +
                  this.index +
                  " highcharts-" +
                  this.type +
                  "-series " +
                  (r3(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") +
                  (this.options.className || "") +
                  (r.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""),
                !0
              ),
              r.attr(a)[n ? "attr" : "animate"](this.getPlotBox(e)),
              r
            );
          }
          getPlotBox(t) {
            let e = this.xAxis,
              i = this.yAxis,
              s = this.chart,
              o = s.inverted && !s.polar && e && this.invertible && "series" === t;
            return (
              s.inverted && ((e = i), (i = this.xAxis)),
              {
                translateX: e ? e.left : s.plotLeft,
                translateY: i ? i.top : s.plotTop,
                rotation: 90 * !!o,
                rotationOriginX: o ? (e.len - i.len) / 2 : 0,
                rotationOriginY: o ? (e.len + i.len) / 2 : 0,
                scaleX: o ? -1 : 1,
                scaleY: 1
              }
            );
          }
          removeEvents(t) {
            let { eventsToUnbind: e } = this;
            (t || nd(this),
              e.length &&
                (e.forEach((t) => {
                  t();
                }),
                (e.length = 0)));
          }
          render() {
            var t, e, i, s, o;
            let r = this,
              { chart: n, options: a, hasRendered: l } = r,
              h = rj(a.animation),
              d = r.visible ? "inherit" : "hidden",
              c = a.zIndex,
              p = n.seriesGroup,
              u = r.finishedAnimating ? 0 : h.duration;
            (nt(this, "render"),
              r.plotGroup("group", "series", d, c, p),
              (r.markerGroup = r.plotGroup("markerGroup", "markers", d, c, p)),
              !1 !== a.clip && r.setClip(),
              u && (null == (t = r.animate) || t.call(r, !0)),
              r.drawGraph && (r.drawGraph(), r.applyZones()),
              r.visible && r.drawPoints(),
              null == (e = r.drawDataLabels) || e.call(r),
              null == (i = r.redrawPoints) || i.call(r),
              a.enableMouseTracking && (null == (s = r.drawTracker) || s.call(r)),
              u && (null == (o = r.animate) || o.call(r)),
              l ||
                (u && h.defer && (u += h.defer),
                (r.animationTimeout = nc(() => {
                  r.afterAnimate();
                }, u || 0))),
              (r.isDirty = !1),
              (r.hasRendered = !0),
              nt(r, "afterRender"));
          }
          redraw() {
            let t = this.isDirty || this.isDirtyData;
            (this.translate(), this.render(), t && delete this.kdTree);
          }
          reserveSpace() {
            return this.visible || !this.chart.options.chart.ignoreHiddenSeries;
          }
          searchPoint(t, e) {
            let { xAxis: i, yAxis: s } = this,
              o = this.chart.inverted;
            return this.searchKDTree(
              {
                clientX: o ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                plotY: o ? s.len - t.chartX + s.pos : t.chartY - s.pos
              },
              e,
              t
            );
          }
          buildKDTree(t) {
            this.buildingKdTree = !0;
            let e = this,
              i = e.options,
              s = i.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
            (delete e.kdTree,
              nc(
                function () {
                  ((e.kdTree = (function t(i, s, o) {
                    let r,
                      n,
                      a = null == i ? void 0 : i.length;
                    if (a)
                      return (
                        (r = e.kdAxisArray[s % o]),
                        i.sort((t, e) => (t[r] || 0) - (e[r] || 0)),
                        {
                          point: i[(n = Math.floor(a / 2))],
                          left: t(i.slice(0, n), s + 1, o),
                          right: t(i.slice(n + 1), s + 1, o)
                        }
                      );
                  })(
                    e.getValidPoints(
                      void 0,
                      !e.directTouch,
                      null == i ? void 0 : i.nullInteraction
                    ),
                    s,
                    s
                  )),
                    (e.buildingKdTree = !1));
                },
                i.kdNow || (null == t ? void 0 : t.type) === "touchstart" ? 0 : 1
              ));
          }
          searchKDTree(t, e, i, s, o) {
            let r = this,
              [n, a] = this.kdAxisArray,
              l = e ? "distX" : "dist",
              h = (r.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1,
              d = !!r.isBubble,
              c =
                s ||
                ((t, e, i) => {
                  let s = t[i] || 0,
                    o = e[i] || 0;
                  return [(s === o && t.index > e.index) || s < o ? t : e, !1];
                }),
              p = o || ((t, e) => t < e);
            if ((this.kdTree || this.buildingKdTree || this.buildKDTree(i), this.kdTree))
              return (function t(e, i, s, o) {
                var h, u;
                let g,
                  f,
                  m,
                  x,
                  y,
                  v,
                  b,
                  k = i.point,
                  w = r.kdAxisArray[s % o],
                  M = k,
                  S = !1;
                ((g = e[n]),
                  (f = k[n]),
                  (m = r3(g) && r3(f) ? g - f : null),
                  (x = e[a]),
                  (y = k[a]),
                  (v = r3(x) && r3(y) ? x - y : 0),
                  (b = (d && (null == (u = k.marker) ? void 0 : u.radius)) || 0),
                  (k.dist = Math.sqrt(((m && m * m) || 0) + v * v) - b),
                  (k.distX = r3(m) ? Math.abs(m) - b : Number.MAX_VALUE));
                let T =
                    (e[w] || 0) -
                    (k[w] || 0) +
                    ((d && (null == (h = k.marker) ? void 0 : h.radius)) || 0),
                  C = T < 0 ? "left" : "right",
                  A = T < 0 ? "right" : "left";
                return (
                  i[C] && ([M, S] = c(k, t(e, i[C], s + 1, o), l)),
                  i[A] && p(Math.sqrt(T * T), M[l], S) && (M = c(M, t(e, i[A], s + 1, o), l)[0]),
                  M
                );
              })(t, this.kdTree, h, h);
          }
          pointPlacementToXValue() {
            let { options: t, xAxis: e } = this,
              i = t.pointPlacement;
            return (
              "between" === i && (i = e.reversed ? -0.5 : 0.5),
              nr(i) ? i * (t.pointRange || e.pointRange) : 0
            );
          }
          isPointInside(t) {
            let { chart: e, xAxis: i, yAxis: s } = this,
              { plotX: o = -1, plotY: r = -1 } = t;
            return (
              r >= 0 && r <= (s ? s.len : e.plotHeight) && o >= 0 && o <= (i ? i.len : e.plotWidth)
            );
          }
          drawTracker() {
            var t;
            let e = this,
              i = e.options,
              s = i.trackByArea,
              o = [].concat((s ? e.areaPath : e.graphPath) || []),
              r = e.chart,
              n = r.pointer,
              a = r.renderer,
              l = (null == (t = r.options.tooltip) ? void 0 : t.snap) || 0,
              h = () => {
                i.enableMouseTracking && r.hoverSeries !== e && e.onMouseOver();
              },
              d = "rgba(192,192,192," + (rq ? 1e-4 : 0.002) + ")",
              c = e.tracker;
            (c
              ? c.attr({ d: o })
              : e.graph &&
                ((e.tracker = c =
                  a
                    .path(o)
                    .attr({ visibility: e.visible ? "inherit" : "hidden", zIndex: 2 })
                    .addClass(s ? "highcharts-tracker-area" : "highcharts-tracker-line")
                    .add(e.group)),
                r.styledMode ||
                  c.attr({
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    stroke: d,
                    fill: s ? d : "none",
                    "stroke-width": e.graph.strokeWidth() + (s ? 0 : 2 * l)
                  }),
                [e.tracker, e.markerGroup, e.dataLabelsGroup].forEach((t) => {
                  t &&
                    (t
                      .addClass("highcharts-tracker")
                      .on("mouseover", h)
                      .on("mouseout", (t) => {
                        null == n || n.onTrackerMouseOut(t);
                      }),
                    i.cursor && !r.styledMode && t.css({ cursor: i.cursor }),
                    t.on("touchstart", h));
                })),
              nt(this, "afterDrawTracker"));
          }
          addPoint(t, e, i, s, o) {
            let r,
              n,
              a = this.options,
              { chart: l, data: h, dataTable: d, xAxis: c } = this,
              p = (null == c ? void 0 : c.hasNames) && c.names,
              u = a.data,
              g = this.getColumn("x");
            e = nh(e, !0);
            let f = { series: this };
            this.pointClass.prototype.applyOptions.apply(f, [t]);
            let m = f.x;
            if (((n = g.length), this.requireSorting && m < g[n - 1]))
              for (r = !0; n && g[n - 1] > m;) n--;
            (d.setRow(f, n, !0, { addColumns: !1 }),
              p && f.name && (p[m] = f.name),
              null == u || u.splice(n, 0, t),
              (r || this.processedData) && (this.data.splice(n, 0, null), this.processData()),
              "point" === a.legendType && this.generatePoints(),
              i &&
                (h[0] && h[0].remove
                  ? h[0].remove(!1)
                  : ([h, u].filter(r3).forEach((t) => {
                      t.shift();
                    }),
                    d.deleteRows(0))),
              !1 !== o && nt(this, "addPoint", { point: f }),
              (this.isDirty = !0),
              (this.isDirtyData = !0),
              e && l.redraw(s));
          }
          removePoint(t, e, i) {
            let s = this,
              { chart: o, data: r, points: n, dataTable: a } = s,
              l = r[t],
              h = function () {
                ([(null == n ? void 0 : n.length) === r.length ? n : void 0, r, s.options.data]
                  .filter(r3)
                  .forEach((e) => {
                    e.splice(t, 1);
                  }),
                  a.deleteRows(t),
                  null == l || l.destroy(),
                  (s.isDirty = !0),
                  (s.isDirtyData = !0),
                  e && o.redraw());
              };
            (rU(i, o), (e = nh(e, !0)), l ? l.firePointEvent("remove", null, h) : h());
          }
          remove(t, e, i, s) {
            let o = this,
              r = o.chart;
            function n() {
              (o.destroy(s),
                (r.isDirtyLegend = r.isDirtyBox = !0),
                r.linkSeries(s),
                nh(t, !0) && r.redraw(e));
            }
            !1 !== i ? nt(o, "remove", null, n) : n();
          }
          update(t, e) {
            var i, s, o, r;
            nt(this, "update", { options: (t = r6(t, this.userOptions)) });
            let n = this,
              a = n.chart,
              l = n.userOptions,
              h = n.initialType || n.type,
              d = a.options.plotOptions,
              c = rK[h].prototype,
              p = n.finishedAnimating && { animation: !1 },
              u = {},
              g,
              f,
              m = np.keepProps.slice(),
              x = t.type || l.type || a.options.chart.type,
              y = !(
                this.hasDerivedData ||
                (x && x !== this.type) ||
                void 0 !== t.keys ||
                void 0 !== t.pointStart ||
                void 0 !== t.pointInterval ||
                void 0 !== t.relativeXValue ||
                t.joinBy ||
                t.mapData ||
                ["dataGrouping", "pointStart", "pointInterval", "pointIntervalUnit", "keys"].some(
                  (t) => n.hasOptionChanged(t)
                )
              );
            ((x = x || h),
              y
                ? (m.push.apply(m, np.keepPropsForPoints),
                  !1 !== t.visible && m.push("area", "graph"),
                  n.parallelArrays.forEach(function (t) {
                    m.push(t + "Data");
                  }),
                  t.data &&
                    (t.dataSorting && r8(n.options.dataSorting, t.dataSorting),
                    this.setData(t.data, !1)))
                : (this.dataTable.modified = this.dataTable),
              (t = na(
                l,
                {
                  index: void 0 === l.index ? n.index : l.index,
                  pointStart:
                    null !=
                    (i =
                      null != (s = null == d || null == (o = d.series) ? void 0 : o.pointStart)
                        ? s
                        : l.pointStart)
                      ? i
                      : n.getColumn("x")[0]
                },
                !y && { data: n.options.data },
                t,
                p
              )),
              y && t.data && (t.data = n.options.data),
              (m = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(m)).forEach(
                function (t) {
                  ((m[t] = n[t]), delete n[t]);
                }
              ));
            let v = !1;
            if (rK[x]) {
              if (((v = x !== n.type), n.remove(!1, !1, !1, !0), v))
                if ((a.propFromSeries(), Object.setPrototypeOf))
                  Object.setPrototypeOf(n, rK[x].prototype);
                else {
                  let t = Object.hasOwnProperty.call(n, "hcEvents") && n.hcEvents;
                  for (f in c) n[f] = void 0;
                  (r8(n, rK[x].prototype), t ? (n.hcEvents = t) : delete n.hcEvents);
                }
            } else r4(17, !0, a, { missingModuleFor: x });
            if (
              (m.forEach(function (t) {
                n[t] = m[t];
              }),
              n.init(a, t),
              y && this.points)
            )
              for (let t of (!1 === (g = n.options).visible
                ? ((u.graphic = 1), (u.dataLabel = 1))
                : (this.hasMarkerChanged(g, l) && (u.graphic = 1),
                  (null == (r = n.hasDataLabels) ? void 0 : r.call(n)) || (u.dataLabel = 1)),
              this.points))
                (null == t ? void 0 : t.series) &&
                  (t.resolveColor(),
                  Object.keys(u).length && t.destroyElements(u),
                  !1 === g.showInLegend && t.legendItem && a.legend.destroyItem(t));
            ((n.initialType = h),
              a.linkSeries(),
              a.setSortedData(),
              v && n.linkedSeries.length && (n.isDirtyData = !0),
              nt(this, "afterUpdate"),
              nh(e, !0) && a.redraw(!!y && void 0));
          }
          setName(t) {
            ((this.name = this.options.name = this.userOptions.name = t),
              (this.chart.isDirtyLegend = !0));
          }
          hasOptionChanged(t) {
            var e, i;
            let s = this.chart,
              o = this.options[t],
              r = s.options.plotOptions,
              n = this.userOptions[t],
              a = nh(
                null == r || null == (e = r[this.type]) ? void 0 : e[t],
                null == r || null == (i = r.series) ? void 0 : i[t]
              );
            return n && !r3(a) ? o !== n : o !== nh(a, o);
          }
          onMouseOver() {
            let t = this.chart,
              e = t.hoverSeries,
              i = t.pointer;
            (null == i || i.setHoverChartIndex(),
              e && e !== this && e.onMouseOut(),
              this.options.events.mouseOver && nt(this, "mouseOver"),
              this.setState("hover"),
              (t.hoverSeries = this));
          }
          onMouseOut() {
            let t = this.options,
              e = this.chart,
              i = e.tooltip,
              s = e.hoverPoint;
            ((e.hoverSeries = null),
              s && s.onMouseOut(),
              this && t.events.mouseOut && nt(this, "mouseOut"),
              i && !this.stickyTracking && (!i.shared || this.noSharedTooltip) && i.hide(),
              e.series.forEach(function (t) {
                t.setState("", !0);
              }));
          }
          setState(t, e) {
            let i = this,
              s = i.options,
              o = i.graph,
              r = s.inactiveOtherPoints,
              n = s.states,
              a = nh(
                n[t || "normal"] && n[t || "normal"].animation,
                i.chart.options.chart.animation
              ),
              l = s.lineWidth,
              h = s.opacity;
            if (
              ((t = t || ""),
              i.state !== t &&
                ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(function (e) {
                  e &&
                    (i.state && e.removeClass("highcharts-series-" + i.state),
                    t && e.addClass("highcharts-series-" + t));
                }),
                (i.state = t),
                !i.chart.styledMode))
            ) {
              if (n[t] && !1 === n[t].enabled) return;
              if (
                (t &&
                  ((l = n[t].lineWidth || l + (n[t].lineWidthPlus || 0)),
                  (h = nh(n[t].opacity, h))),
                o && !o.dashstyle && nr(l))
              )
                for (let t of [o, ...this.zones.map((t) => t.graph)])
                  null == t || t.animate({ "stroke-width": l }, a);
              r ||
                [i.group, i.markerGroup, i.dataLabelsGroup, i.labelBySeries].forEach(function (t) {
                  t && t.animate({ opacity: h }, a);
                });
            }
            e && r && i.points && i.setAllPointsToState(t || void 0);
          }
          setAllPointsToState(t) {
            this.points.forEach(function (e) {
              e.setState && e.setState(t);
            });
          }
          setVisible(t, e) {
            var i;
            let s = this,
              o = s.chart,
              r = o.options.chart.ignoreHiddenSeries,
              n = s.visible;
            s.visible = t = s.options.visible = s.userOptions.visible = void 0 === t ? !n : t;
            let a = t ? "show" : "hide";
            (["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach((t) => {
              var e;
              null == (e = s[t]) || e[a]();
            }),
              (o.hoverSeries === s || (null == (i = o.hoverPoint) ? void 0 : i.series) === s) &&
                s.onMouseOut(),
              s.legendItem && o.legend.colorizeItem(s, t),
              (s.isDirty = !0),
              s.options.stacking &&
                o.series.forEach((t) => {
                  t.options.stacking && t.visible && (t.isDirty = !0);
                }),
              s.linkedSeries.forEach((e) => {
                e.setVisible(t, !1);
              }),
              r && (o.isDirtyBox = !0),
              nt(s, a),
              !1 !== e && o.redraw());
          }
          show() {
            this.setVisible(!0);
          }
          hide() {
            this.setVisible(!1);
          }
          select(t) {
            ((this.selected = t = this.options.selected = void 0 === t ? !this.selected : t),
              this.checkbox && (this.checkbox.checked = t),
              nt(this, t ? "select" : "unselect"));
          }
          shouldShowTooltip(t, e) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return ((i.series = this), (i.visiblePlotOnly = !0), this.chart.isInsidePlot(t, e, i));
          }
          drawLegendSymbol(t, e) {
            var i;
            null == (i = rz[this.options.legendSymbol || "rectangle"]) || i.call(this, t, e);
          }
          constructor() {
            this.zoneAxis = "y";
          }
        }
        ((np.defaultOptions = {
          lineWidth: 2,
          allowPointSelect: !1,
          crisp: !0,
          showCheckbox: !1,
          animation: { duration: 1e3 },
          enableMouseTracking: !0,
          events: {},
          marker: {
            enabledThreshold: 2,
            lineColor: "#ffffff",
            lineWidth: 0,
            radius: 4,
            states: {
              normal: { animation: !0 },
              hover: { animation: { duration: 150 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 },
              select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 }
            }
          },
          point: { events: {} },
          dataLabels: {
            animation: {},
            align: "center",
            borderWidth: 0,
            defer: !0,
            formatter: function () {
              let { numberFormatter: t } = this.series.chart;
              return "number" != typeof this.y ? "" : t(this.y, -1);
            },
            padding: 5,
            style: {
              fontSize: "0.7em",
              fontWeight: "bold",
              color: "contrast",
              textOutline: "1px contrast"
            },
            verticalAlign: "bottom",
            x: 0,
            y: 0
          },
          cropThreshold: 300,
          opacity: 1,
          pointRange: 0,
          softThreshold: !0,
          states: {
            normal: { animation: !0 },
            hover: {
              animation: { duration: 150 },
              lineWidthPlus: 1,
              marker: {},
              halo: { size: 10, opacity: 0.25 }
            },
            select: { animation: { duration: 0 } },
            inactive: { animation: { duration: 150 }, opacity: 0.2 }
          },
          stickyTracking: !0,
          turboThreshold: 1e3,
          findNearestPointBy: "x"
        }),
          (np.types = rY.seriesTypes),
          (np.registerType = rY.registerSeriesType),
          (np.keepProps = [
            "colorIndex",
            "eventOptions",
            "navigatorSeries",
            "symbolIndex",
            "baseSeries"
          ]),
          (np.keepPropsForPoints = [
            "data",
            "isDirtyData",
            "isDirtyCanvas",
            "points",
            "dataTable",
            "processedData",
            "xIncrement",
            "cropped",
            "_hasPointMarkers",
            "hasDataLabels",
            "nodes",
            "layout",
            "level",
            "mapMap",
            "mapData",
            "minY",
            "maxY",
            "minX",
            "maxX",
            "transformGroups"
          ]),
          r8(np.prototype, {
            axisTypes: ["xAxis", "yAxis"],
            coll: "series",
            colorCounter: 0,
            directTouch: !1,
            invertible: !0,
            isCartesian: !0,
            kdAxisArray: ["clientX", "plotY"],
            parallelArrays: ["x", "y"],
            pointClass: rr,
            requireSorting: !0,
            sorted: !0
          }),
          (rY.series = np));
        let nu = np,
          { animObject: ng, setAnimation: nf } = et,
          { registerEventOptions: nm } = sb,
          { composed: nx, marginNames: ny } = G,
          { distribute: nv } = ez,
          { format: nb } = eO,
          {
            addEvent: nk,
            createElement: nw,
            css: nM,
            defined: nS,
            discardElement: nT,
            find: nC,
            fireEvent: nA,
            isNumber: nP,
            merge: nL,
            pick: nO,
            pushUnique: nE,
            relativeLength: nI,
            stableSort: nD,
            syncTimeout: nB
          } = tu;
        class nN {
          setOptions(t) {
            let e = nO(t.padding, 8);
            ((this.options = t),
              this.chart.styledMode ||
                ((this.itemStyle = t.itemStyle),
                (this.itemHiddenStyle = nL(this.itemStyle, t.itemHiddenStyle))),
              (this.itemMarginTop = t.itemMarginTop),
              (this.itemMarginBottom = t.itemMarginBottom),
              (this.padding = e),
              (this.initialItemY = e - 5),
              (this.symbolWidth = nO(t.symbolWidth, 16)),
              (this.pages = []),
              (this.proximate = "proximate" === t.layout && !this.chart.inverted),
              (this.baseline = void 0));
          }
          update(t, e) {
            let i = this.chart;
            (this.setOptions(nL(!0, this.options, t)),
              "events" in this.options && nm(this, this.options),
              this.destroy(),
              (i.isDirtyLegend = i.isDirtyBox = !0),
              nO(e, !0) && i.redraw(),
              nA(this, "afterUpdate", { redraw: e }));
          }
          colorizeItem(t, e) {
            var i;
            let s = t.color,
              { area: o, group: r, label: n, line: a, symbol: l } = t.legendItem || {};
            if (
              ((t instanceof nu || t instanceof rr) &&
                (t.color = (null == (i = t.options) ? void 0 : i.legendSymbolColor) || s),
              null == r || r[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"),
              !this.chart.styledMode)
            ) {
              let { itemHiddenStyle: i = {} } = this,
                s = i.color,
                { fillColor: r, fillOpacity: h, lineColor: d, marker: c } = t.options,
                p = (t) => (!e && (t.fill && (t.fill = s), t.stroke && (t.stroke = s)), t);
              (null == n || n.css(nL(e ? this.itemStyle : i)),
                null == a || a.attr(p({ stroke: d || t.color })),
                l && l.attr(p(c && l.isMarker ? t.pointAttribs() : { fill: t.color })),
                null == o ||
                  o.attr(p({ fill: r || t.color, "fill-opacity": r ? 1 : null != h ? h : 0.75 })));
            }
            ((t.color = s), nA(this, "afterColorizeItem", { item: t, visible: e }));
          }
          positionItems() {
            (this.allItems.forEach(this.positionItem, this),
              this.chart.isResizing || this.positionCheckboxes());
          }
          positionItem(t) {
            let { group: e, x: i = 0, y: s = 0 } = t.legendItem || {},
              o = this.options,
              r = o.symbolPadding,
              n = !o.rtl,
              a = t.checkbox;
            if (null == e ? void 0 : e.element) {
              let o = { translateX: n ? i : this.legendWidth - i - 2 * r - 4, translateY: s };
              e[nS(e.translateY) ? "animate" : "attr"](o, void 0, () => {
                nA(this, "afterPositionItem", { item: t });
              });
            }
            a && ((a.x = i), (a.y = s));
          }
          destroyItem(t) {
            let e = t.checkbox,
              i = t.legendItem || {};
            for (let t of ["group", "label", "line", "symbol"]) i[t] && (i[t] = i[t].destroy());
            (e && nT(e), (t.legendItem = void 0));
          }
          destroy() {
            for (let t of this.getAllItems()) this.destroyItem(t);
            for (let t of ["clipRect", "up", "down", "pager", "nav", "box", "title", "group"])
              this[t] && (this[t] = this[t].destroy());
            this.display = null;
          }
          positionCheckboxes() {
            var t;
            let e,
              i = null == (t = this.group) ? void 0 : t.alignAttr,
              s = this.clipHeight || this.legendHeight,
              o = this.titleHeight;
            i &&
              ((e = i.translateY),
              this.allItems.forEach(function (t) {
                let r,
                  n = t.checkbox;
                n &&
                  ((r = e + o + n.y + (this.scrollOffset || 0) + 3),
                  nM(n, {
                    left: i.translateX + t.checkboxOffset + n.x - 20 + "px",
                    top: r + "px",
                    display: this.proximate || (r > e - 6 && r < e + s - 6) ? "" : "none"
                  }));
              }, this));
          }
          renderTitle() {
            let t = this.options,
              e = this.padding,
              i = t.title,
              s,
              o = 0;
            (i.text &&
              (this.title ||
                ((this.title = this.chart.renderer
                  .label(
                    i.text,
                    e - 3,
                    e - 4,
                    void 0,
                    void 0,
                    void 0,
                    t.useHTML,
                    void 0,
                    "legend-title"
                  )
                  .attr({ zIndex: 1 })),
                this.chart.styledMode || this.title.css(i.style),
                this.title.add(this.group)),
              i.width || this.title.css({ width: this.maxLegendWidth + "px" }),
              (o = (s = this.title.getBBox()).height),
              (this.offsetWidth = s.width),
              this.contentGroup.attr({ translateY: o })),
              (this.titleHeight = o));
          }
          setText(t) {
            let e = this.options;
            t.legendItem.label.attr({
              text: e.labelFormat ? nb(e.labelFormat, t, this.chart) : e.labelFormatter.call(t)
            });
          }
          renderItem(t) {
            var e;
            let i = (t.legendItem = t.legendItem || {}),
              s = this.chart,
              o = s.renderer,
              r = this.options,
              n = "horizontal" === r.layout,
              a = this.symbolWidth,
              l = r.symbolPadding || 0,
              h = this.itemStyle,
              d = this.itemHiddenStyle,
              c = n ? nO(r.itemDistance, 20) : 0,
              p = !r.rtl,
              u = !t.series,
              g = !u && t.series.drawLegendSymbol ? t.series : t,
              f = g.options,
              m = !!this.createCheckboxForItem && f && f.showCheckbox,
              x = r.useHTML,
              y = t.options.className,
              v = i.label,
              b = a + l + c + 20 * !!m;
            (!v &&
              ((i.group = o
                .g("legend-item")
                .addClass(
                  "highcharts-" +
                    g.type +
                    "-series highcharts-color-" +
                    t.colorIndex +
                    (y ? " " + y : "") +
                    (u ? " highcharts-series-" + t.index : "")
                )
                .attr({ zIndex: 1 })
                .add(this.scrollGroup)),
              (i.label = v = o.text("", p ? a + l : -l, this.baseline || 0, x)),
              s.styledMode || v.css(nL(t.visible ? h : d)),
              v.attr({ align: p ? "left" : "right", zIndex: 2 }).add(i.group),
              !this.baseline &&
                ((this.fontMetrics = o.fontMetrics(v)),
                (this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop),
                v.attr("y", this.baseline),
                (this.symbolHeight = nO(r.symbolHeight, this.fontMetrics.f)),
                r.squareSymbol &&
                  ((this.symbolWidth = nO(r.symbolWidth, Math.max(this.symbolHeight, 16))),
                  (b = this.symbolWidth + l + c + 20 * !!m),
                  p && v.attr("x", this.symbolWidth + l))),
              g.drawLegendSymbol(this, t),
              this.setItemEvents && this.setItemEvents(t, v, x)),
              m && !t.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(t),
              this.colorizeItem(t, t.visible),
              (s.styledMode || !h.width) &&
                v.css({
                  width: (r.itemWidth || this.widthOption || s.spacingBox.width) - b + "px"
                }),
              this.setText(t));
            let k = v.getBBox(),
              w = (null == (e = this.fontMetrics) ? void 0 : e.h) || 0;
            ((t.itemWidth = t.checkboxOffset = r.itemWidth || i.labelWidth || k.width + b),
              (this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth)),
              (this.totalItemWidth += t.itemWidth),
              (this.itemHeight = t.itemHeight =
                Math.round(i.labelHeight || (k.height > 1.5 * w ? k.height : w))));
          }
          layoutItem(t) {
            let e = this.options,
              i = this.padding,
              s = "horizontal" === e.layout,
              o = t.itemHeight,
              r = this.itemMarginBottom,
              n = this.itemMarginTop,
              a = s ? nO(e.itemDistance, 20) : 0,
              l = this.maxLegendWidth,
              h = e.alignColumns && this.totalItemWidth > l ? this.maxItemWidth : t.itemWidth,
              d = t.legendItem || {};
            (s &&
              this.itemX - i + h > l &&
              ((this.itemX = i),
              this.lastLineHeight && (this.itemY += n + this.lastLineHeight + r),
              (this.lastLineHeight = 0)),
              (this.lastItemY = n + this.itemY + r),
              (this.lastLineHeight = Math.max(o, this.lastLineHeight)),
              (d.x = this.itemX),
              (d.y = this.itemY),
              s ? (this.itemX += h) : ((this.itemY += n + o + r), (this.lastLineHeight = o)),
              (this.offsetWidth =
                this.widthOption ||
                Math.max((s ? this.itemX - i - (t.checkbox ? 0 : a) : h) + i, this.offsetWidth)));
          }
          getAllItems() {
            let t = [];
            return (
              this.chart.series.forEach(function (e) {
                var i;
                let s = null == e ? void 0 : e.options;
                e &&
                  nO(s.showInLegend, !nS(s.linkedTo) && void 0, !0) &&
                  (t = t.concat(
                    (null == (i = e.legendItem) ? void 0 : i.labels) ||
                      ("point" === s.legendType ? e.data : e)
                  ));
              }),
              nA(this, "afterGetAllItems", { allItems: t }),
              t
            );
          }
          getAlignment() {
            let t = this.options;
            return this.proximate
              ? t.align.charAt(0) + "tv"
              : t.floating
                ? ""
                : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0);
          }
          adjustMargins(t, e) {
            let i = this.chart,
              s = this.options,
              o = this.getAlignment();
            o &&
              [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(
                function (r, n) {
                  r.test(o) &&
                    !nS(t[n]) &&
                    (i[ny[n]] = Math.max(
                      i[ny[n]],
                      i.legend[(n + 1) % 2 ? "legendHeight" : "legendWidth"] +
                        [1, -1, -1, 1][n] * s[n % 2 ? "x" : "y"] +
                        nO(s.margin, 12) +
                        e[n] +
                        (i.titleOffset[n] || 0)
                    ));
                }
              );
          }
          proximatePositions() {
            let t,
              e = this.chart,
              i = [],
              s = "left" === this.options.align;
            for (let o of (this.allItems.forEach(function (t) {
              let o,
                r,
                n = s,
                a,
                l;
              t.yAxis &&
                (t.xAxis.options.reversed && (n = !n),
                t.points &&
                  (o = nC(n ? t.points : t.points.slice(0).reverse(), function (t) {
                    return nP(t.plotY);
                  })),
                (r =
                  this.itemMarginTop + t.legendItem.label.getBBox().height + this.itemMarginBottom),
                (l = t.yAxis.top - e.plotTop),
                (a = t.visible
                  ? (o ? o.plotY : t.yAxis.height) + (l - 0.3 * r)
                  : l + t.yAxis.height),
                i.push({ target: a, size: r, item: t }));
            }, this),
            nv(i, e.plotHeight)))
              ((t = o.item.legendItem || {}),
                nP(o.pos) && (t.y = e.plotTop - e.spacing[0] + o.pos));
          }
          render() {
            let t = this.chart,
              e = t.renderer,
              i = this.options,
              s = this.padding,
              o = this.getAllItems(),
              r,
              n,
              a,
              l = this.group,
              h,
              d = this.box;
            ((this.itemX = s),
              (this.itemY = this.initialItemY),
              (this.offsetWidth = 0),
              (this.lastItemY = 0),
              (this.widthOption = nI(i.width, t.spacingBox.width - s)),
              (h = t.spacingBox.width - 2 * s - i.x),
              ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 && (h /= 2),
              (this.maxLegendWidth = this.widthOption || h),
              l ||
                ((this.group = l =
                  e
                    .g("legend")
                    .addClass(i.className || "")
                    .attr({ zIndex: 7 })
                    .add()),
                (this.contentGroup = e.g().attr({ zIndex: 1 }).add(l)),
                (this.scrollGroup = e.g().add(this.contentGroup))),
              this.renderTitle(),
              nD(o, (t, e) => {
                var i, s;
                return (
                  ((null == (i = t.options) ? void 0 : i.legendIndex) || 0) -
                  ((null == (s = e.options) ? void 0 : s.legendIndex) || 0)
                );
              }),
              i.reversed && o.reverse(),
              (this.allItems = o),
              (this.display = r = !!o.length),
              (this.lastLineHeight = 0),
              (this.maxItemWidth = 0),
              (this.totalItemWidth = 0),
              (this.itemHeight = 0),
              o.forEach(this.renderItem, this),
              o.forEach(this.layoutItem, this),
              (n = (this.widthOption || this.offsetWidth) + s),
              (a = this.lastItemY + this.lastLineHeight + this.titleHeight),
              (a = this.handleOverflow(a) + s),
              d ||
                (this.box = d =
                  e.rect().addClass("highcharts-legend-box").attr({ r: i.borderRadius }).add(l)),
              t.styledMode ||
                d
                  .attr({
                    stroke: i.borderColor,
                    "stroke-width": i.borderWidth || 0,
                    fill: i.backgroundColor || "none"
                  })
                  .shadow(i.shadow),
              n > 0 &&
                a > 0 &&
                d[d.placed ? "animate" : "attr"](
                  d.crisp.call({}, { x: 0, y: 0, width: n, height: a }, d.strokeWidth())
                ),
              l[r ? "show" : "hide"](),
              t.styledMode && "none" === l.getStyle("display") && (n = a = 0),
              (this.legendWidth = n),
              (this.legendHeight = a),
              r && this.align(),
              this.proximate || this.positionItems(),
              nA(this, "afterRender"));
          }
          align() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.chart.spacingBox,
              e = this.chart,
              i = this.options,
              s = t.y;
            (/(lth|ct|rth)/.test(this.getAlignment()) && e.titleOffset[0] > 0
              ? (s += e.titleOffset[0])
              : /(lbh|cb|rbh)/.test(this.getAlignment()) &&
                e.titleOffset[2] > 0 &&
                (s -= e.titleOffset[2]),
              s !== t.y && (t = nL(t, { y: s })),
              e.hasRendered || (this.group.placed = !1),
              this.group.align(
                nL(i, {
                  width: this.legendWidth,
                  height: this.legendHeight,
                  verticalAlign: this.proximate ? "top" : i.verticalAlign
                }),
                !0,
                t
              ));
          }
          handleOverflow(t) {
            let e = this,
              i = this.chart,
              s = i.renderer,
              o = this.options,
              r = o.y,
              n = "top" === o.verticalAlign,
              a = this.padding,
              l = o.maxHeight,
              h = o.navigation,
              d = nO(h.animation, !0),
              c = h.arrowSize || 12,
              p = this.pages,
              u = this.allItems,
              g = function (t) {
                ("number" == typeof t
                  ? w.attr({ height: t })
                  : w && ((e.clipRect = w.destroy()), e.contentGroup.clip()),
                  e.contentGroup.div &&
                    (e.contentGroup.div.style.clip = t
                      ? "rect(" + a + "px,9999px," + (a + t) + "px,0)"
                      : "auto"));
              },
              f = function (t) {
                return (
                  (e[t] = s
                    .circle(0, 0, 1.3 * c)
                    .translate(c / 2, c / 2)
                    .add(k)),
                  i.styledMode || e[t].attr("fill", "rgba(0,0,0,0.0001)"),
                  e[t]
                );
              },
              m,
              x,
              y,
              v,
              b = i.spacingBox.height + (n ? -r : r) - a,
              k = this.nav,
              w = this.clipRect;
            return (
              "horizontal" !== o.layout || "middle" === o.verticalAlign || o.floating || (b /= 2),
              l && (b = Math.min(b, l)),
              (p.length = 0),
              t && b > 0 && t > b && !1 !== h.enabled
                ? ((this.clipHeight = m = Math.max(b - 20 - this.titleHeight - a, 0)),
                  (this.currentPage = nO(this.currentPage, 1)),
                  (this.fullHeight = t),
                  u.forEach((t, e) => {
                    let i = (y = t.legendItem || {}).y || 0,
                      s = Math.round(y.label.getBBox().height),
                      o = p.length;
                    ((!o || (i - p[o - 1] > m && (x || i) !== p[o - 1])) && (p.push(x || i), o++),
                      (y.pageIx = o - 1),
                      x && v && (v.pageIx = o - 1),
                      e === u.length - 1 &&
                        i + s - p[o - 1] > m &&
                        i > p[o - 1] &&
                        (p.push(i), (y.pageIx = o)),
                      i !== x && (x = i),
                      (v = y));
                  }),
                  w || ((w = e.clipRect = s.clipRect(0, a - 2, 9999, 0)), e.contentGroup.clip(w)),
                  g(m),
                  k ||
                    ((this.nav = k = s.g().attr({ zIndex: 1 }).add(this.group)),
                    (this.up = s.symbol("triangle", 0, 0, c, c).add(k)),
                    f("upTracker").on("click", function () {
                      e.scroll(-1, d);
                    }),
                    (this.pager = s.text("", 15, 10).addClass("highcharts-legend-navigation")),
                    !i.styledMode && h.style && this.pager.css(h.style),
                    this.pager.add(k),
                    (this.down = s.symbol("triangle-down", 0, 0, c, c).add(k)),
                    f("downTracker").on("click", function () {
                      e.scroll(1, d);
                    })),
                  e.scroll(0),
                  (t = b))
                : k &&
                  (g(),
                  (this.nav = k.destroy()),
                  this.scrollGroup.attr({ translateY: 1 }),
                  (this.clipHeight = 0)),
              t
            );
          }
          scroll(t, e) {
            let i = this.chart,
              s = this.pages,
              o = s.length,
              r = this.clipHeight,
              n = this.options.navigation,
              a = this.pager,
              l = this.padding,
              h = this.currentPage + t;
            (h > o && (h = o),
              h > 0 &&
                (void 0 !== e && nf(e, i),
                this.nav.attr({
                  translateX: l,
                  translateY: r + this.padding + 7 + this.titleHeight,
                  visibility: "inherit"
                }),
                [this.up, this.upTracker].forEach(function (t) {
                  t.attr({
                    class:
                      1 === h ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                  });
                }),
                a.attr({ text: h + "/" + o }),
                [this.down, this.downTracker].forEach(function (t) {
                  t.attr({
                    x: 18 + this.pager.getBBox().width,
                    class:
                      h === o ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                  });
                }, this),
                i.styledMode ||
                  (this.up.attr({ fill: 1 === h ? n.inactiveColor : n.activeColor }),
                  this.upTracker.css({ cursor: 1 === h ? "default" : "pointer" }),
                  this.down.attr({ fill: h === o ? n.inactiveColor : n.activeColor }),
                  this.downTracker.css({ cursor: h === o ? "default" : "pointer" })),
                (this.scrollOffset = -s[h - 1] + this.initialItemY),
                this.scrollGroup.animate({ translateY: this.scrollOffset }),
                (this.currentPage = h),
                this.positionCheckboxes(),
                nB(
                  () => {
                    nA(this, "afterScroll", { currentPage: h });
                  },
                  ng(nO(e, i.renderer.globalAnimation, !0)).duration
                )));
          }
          setItemEvents(t, e, i) {
            let s = this,
              o = t.legendItem || {},
              r = s.chart.renderer.boxWrapper,
              n = t instanceof rr,
              a = t instanceof nu,
              l = "highcharts-legend-" + (n ? "point" : "series") + "-active",
              h = s.chart.styledMode,
              d = i ? [e, o.symbol] : [o.group],
              c = (e) => {
                s.allItems.forEach((i) => {
                  t !== i &&
                    [i].concat(i.linkedSeries || []).forEach((t) => {
                      t.setState(e, !n);
                    });
                });
              };
            for (let i of d)
              i &&
                i
                  .on("mouseover", function () {
                    (t.visible && c("inactive"),
                      t.setState("hover"),
                      t.visible && r.addClass(l),
                      h || e.css(s.options.itemHoverStyle));
                  })
                  .on("mouseout", function () {
                    (s.chart.styledMode || e.css(nL(t.visible ? s.itemStyle : s.itemHiddenStyle)),
                      c(""),
                      r.removeClass(l),
                      t.setState());
                  })
                  .on("click", function (e) {
                    let i = function () {
                      (t.setVisible && t.setVisible(), c(t.visible ? "inactive" : ""));
                    };
                    (r.removeClass(l),
                      nA(s, "itemClick", { browserEvent: e, legendItem: t }, i),
                      n
                        ? t.firePointEvent("legendItemClick", { browserEvent: e })
                        : a && nA(t, "legendItemClick", { browserEvent: e }));
                  });
          }
          createCheckboxForItem(t) {
            ((t.checkbox = nw(
              "input",
              {
                type: "checkbox",
                className: "highcharts-legend-checkbox",
                checked: t.selected,
                defaultChecked: t.selected
              },
              this.options.itemCheckboxStyle,
              this.chart.container
            )),
              nk(t.checkbox, "click", function (e) {
                let i = e.target;
                nA(t.series || t, "checkboxClick", { checked: i.checked, item: t }, function () {
                  t.select();
                });
              }));
          }
          constructor(t, e) {
            ((this.allItems = []),
              (this.initialItemY = 0),
              (this.itemHeight = 0),
              (this.itemMarginBottom = 0),
              (this.itemMarginTop = 0),
              (this.itemX = 0),
              (this.itemY = 0),
              (this.lastItemY = 0),
              (this.lastLineHeight = 0),
              (this.legendHeight = 0),
              (this.legendWidth = 0),
              (this.maxItemWidth = 0),
              (this.maxLegendWidth = 0),
              (this.offsetWidth = 0),
              (this.padding = 0),
              (this.pages = []),
              (this.symbolHeight = 0),
              (this.symbolWidth = 0),
              (this.titleHeight = 0),
              (this.totalItemWidth = 0),
              (this.widthOption = 0),
              (this.chart = t),
              this.setOptions(e),
              e.enabled &&
                (this.render(),
                nm(this, e),
                nk(this.chart, "endResize", function () {
                  this.legend.positionCheckboxes();
                })),
              nk(this.chart, "render", () => {
                this.options.enabled &&
                  this.proximate &&
                  (this.proximatePositions(), this.positionItems());
              }));
          }
        }
        (y = nN || (nN = {})).compose = function (t) {
          nE(nx, "Core.Legend") &&
            nk(t, "beforeMargins", function () {
              this.legend = new y(this, this.options.legend);
            });
        };
        let nz = nN,
          { animate: nR, animObject: nW, setAnimation: nX } = et,
          { defaultOptions: nH } = tX,
          { numberFormat: nF } = eO,
          { registerEventOptions: nG } = sb,
          { charts: nY, doc: nj, marginNames: nU, svg: nV, win: nZ } = G,
          { seriesTypes: nq } = rY,
          {
            addEvent: n_,
            attr: nK,
            createElement: n$,
            css: nJ,
            defined: nQ,
            diffObjects: n0,
            discardElement: n1,
            erase: n2,
            error: n3,
            extend: n5,
            find: n6,
            fireEvent: n9,
            getAlignFactor: n4,
            getStyle: n8,
            isArray: n7,
            isNumber: at,
            isObject: ae,
            isString: ai,
            merge: as,
            objectEach: ao,
            pick: ar,
            pInt: an,
            relativeLength: aa,
            removeEvent: al,
            splat: ah,
            syncTimeout: ad,
            uniqueKey: ac
          } = tu;
        class ap {
          static chart(t, e, i) {
            return new ap(t, e, i);
          }
          setZoomOptions() {
            let t = this.options.chart,
              e = t.zooming;
            this.zooming = {
              ...e,
              type: ar(t.zoomType, e.type),
              key: ar(t.zoomKey, e.key),
              pinchType: ar(t.pinchType, e.pinchType),
              singleTouch: ar(t.zoomBySingleTouch, e.singleTouch, !1),
              resetButton: as(e.resetButton, t.resetZoomButton)
            };
          }
          init(t, e) {
            n9(this, "init", { args: arguments }, function () {
              var i, s;
              let o = as(nH, t),
                r = o.chart,
                n = this.renderTo || r.renderTo;
              ((this.userOptions = n5({}, t)),
                (this.renderTo = ai(n) ? nj.getElementById(n) : n) || n3(13, !0, this),
                (this.margin = []),
                (this.spacing = []),
                (this.labelCollectors = []),
                (this.callback = e),
                (this.isResizing = 0),
                (this.options = o),
                (this.axes = []),
                (this.series = []),
                (this.locale =
                  null != (i = o.lang.locale)
                    ? i
                    : null == (s = this.renderTo.closest("[lang]"))
                      ? void 0
                      : s.lang),
                (this.time = new tD(n5(o.time || {}, { locale: this.locale }), o.lang)),
                (o.time = this.time.options),
                (this.numberFormatter = (r.numberFormatter || nF).bind(this)),
                (this.styledMode = r.styledMode),
                (this.hasCartesianSeries = r.showAxes),
                (this.index = nY.length),
                nY.push(this),
                G.chartCount++,
                nG(this, r),
                (this.xAxis = []),
                (this.yAxis = []),
                (this.pointCount = this.colorCounter = this.symbolCounter = 0),
                this.setZoomOptions(),
                n9(this, "afterInit"),
                this.firstRender());
            });
          }
          initSeries(t) {
            let e = this.options.chart,
              i = t.type || e.type,
              s = nq[i];
            s || n3(17, !0, this, { missingModuleFor: i });
            let o = new s();
            return ("function" == typeof o.init && o.init(this, t), o);
          }
          setSortedData() {
            this.getSeriesOrderByLinks().forEach(function (t) {
              t.points || t.data || !t.enabledDataSorting || t.setData(t.options.data, !1);
            });
          }
          getSeriesOrderByLinks() {
            return this.series.concat().sort(function (t, e) {
              return t.linkedSeries.length || e.linkedSeries.length
                ? e.linkedSeries.length - t.linkedSeries.length
                : 0;
            });
          }
          orderItems(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = this[t],
              s = (this.options[t] = ah(this.options[t]).slice()),
              o = (this.userOptions[t] = this.userOptions[t]
                ? ah(this.userOptions[t]).slice()
                : []);
            if ((this.hasRendered && (s.splice(e), o.splice(e)), i))
              for (let t = e, r = i.length; t < r; ++t) {
                let e = i[t];
                e &&
                  ((e.index = t),
                  e instanceof nu && (e.name = e.getName()),
                  e.options.isInternal || ((s[t] = e.options), (o[t] = e.userOptions)));
              }
          }
          getClipBox(t, e) {
            var i, s, o, r;
            let n = this.inverted,
              { xAxis: a, yAxis: l } = t || {},
              { x: h, y: d, width: c, height: p } = as(this.clipBox);
            return (
              t &&
                (a && a.len !== this.plotSizeX && (c = a.len),
                l && l.len !== this.plotSizeY && (p = l.len),
                n && !t.invertible && ([c, p] = [p, c])),
              e &&
                ((h += null != (i = null == (o = n ? l : a) ? void 0 : o.pos) ? i : this.plotLeft),
                (d += null != (s = null == (r = n ? a : l) ? void 0 : r.pos) ? s : this.plotTop)),
              { x: h, y: d, width: c, height: p }
            );
          }
          isInsidePlot(t, e) {
            var i;
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              { inverted: o, plotBox: r, plotLeft: n, plotTop: a, scrollablePlotBox: l } = this,
              { scrollLeft: h = 0, scrollTop: d = 0 } =
                (s.visiblePlotOnly &&
                  (null == (i = this.scrollablePlotArea) ? void 0 : i.scrollingContainer)) ||
                {},
              c = s.series,
              p = (s.visiblePlotOnly && l) || r,
              u = s.inverted ? e : t,
              g = s.inverted ? t : e,
              f = { x: u, y: g, isInsidePlot: !0, options: s };
            if (!s.ignoreX) {
              let t = (c && (o && !this.polar ? c.yAxis : c.xAxis)) || { pos: n, len: 1 / 0 },
                e = s.paneCoordinates ? t.pos + u : n + u;
              (e >= Math.max(h + n, t.pos) && e <= Math.min(h + n + p.width, t.pos + t.len)) ||
                (f.isInsidePlot = !1);
            }
            if (!s.ignoreY && f.isInsidePlot) {
              let t = (!o && s.axis && !s.axis.isXAxis && s.axis) ||
                  (c && (o ? c.xAxis : c.yAxis)) || { pos: a, len: 1 / 0 },
                e = s.paneCoordinates ? t.pos + g : a + g;
              (e >= Math.max(d + a, t.pos) && e <= Math.min(d + a + p.height, t.pos + t.len)) ||
                (f.isInsidePlot = !1);
            }
            return (n9(this, "afterIsInsidePlot", f), f.isInsidePlot);
          }
          redraw(t) {
            n9(this, "beforeRedraw");
            let e = this.hasCartesianSeries ? this.axes : this.colorAxis || [],
              i = this.series,
              s = this.pointer,
              o = this.legend,
              r = this.userOptions.legend,
              n = this.renderer,
              a = n.isHidden(),
              l = [],
              h,
              d,
              c,
              p = this.isDirtyBox,
              u = this.isDirtyLegend,
              g;
            for (
              n.rootFontSize = n.boxWrapper.getStyle("font-size"),
                this.setResponsive && this.setResponsive(!1),
                nX(!!this.hasRendered && t, this),
                a && this.temporaryDisplay(),
                this.layOutTitles(!1),
                c = i.length;
              c--;
            )
              if (
                ((g = i[c]).options.stacking || g.options.centerInCategory) &&
                ((d = !0), g.isDirty)
              ) {
                h = !0;
                break;
              }
            if (h) for (c = i.length; c--;) (g = i[c]).options.stacking && (g.isDirty = !0);
            (i.forEach(function (t) {
              (t.isDirty &&
                ("point" === t.options.legendType
                  ? ("function" == typeof t.updateTotals && t.updateTotals(), (u = !0))
                  : r && (r.labelFormatter || r.labelFormat) && (u = !0)),
                t.isDirtyData && n9(t, "updatedData"));
            }),
              u && o && o.options.enabled && (o.render(), (this.isDirtyLegend = !1)),
              d && this.getStacks(),
              e.forEach(function (t) {
                (t.updateNames(), t.setScale());
              }),
              this.getMargins(),
              e.forEach(function (t) {
                t.isDirty && (p = !0);
              }),
              e.forEach(function (t) {
                let e = t.min + "," + t.max;
                (t.extKey !== e &&
                  ((t.extKey = e),
                  l.push(function () {
                    (n9(t, "afterSetExtremes", n5(t.eventArgs, t.getExtremes())),
                      delete t.eventArgs);
                  })),
                  (p || d) && t.redraw());
              }),
              p && this.drawChartBox(),
              n9(this, "predraw"),
              i.forEach(function (t) {
                ((p || t.isDirty) && t.visible && t.redraw(), (t.isDirtyData = !1));
              }),
              s && s.reset(!0),
              n.draw(),
              n9(this, "redraw"),
              n9(this, "render"),
              a && this.temporaryDisplay(!0),
              l.forEach(function (t) {
                t.call();
              }));
          }
          get(t) {
            let e = this.series;
            function i(e) {
              return e.id === t || (e.options && e.options.id === t);
            }
            let s = n6(this.axes, i) || n6(this.series, i);
            for (let t = 0; !s && t < e.length; t++) s = n6(e[t].points || [], i);
            return s;
          }
          createAxes() {
            let t = this.userOptions;
            for (let e of (n9(this, "createAxes"), ["xAxis", "yAxis"]))
              for (let i of (t[e] = ah(t[e] || {}))) new ot(this, i, e);
            n9(this, "afterCreateAxes");
          }
          getSelectedPoints() {
            return this.series.reduce(
              (t, e) => (
                e.getPointsCollection().forEach((e) => {
                  ar(e.selectedStaging, e.selected) && t.push(e);
                }),
                t
              ),
              []
            );
          }
          getSelectedSeries() {
            return this.series.filter((t) => t.selected);
          }
          setTitle(t, e, i) {
            (this.applyDescription("title", t),
              this.applyDescription("subtitle", e),
              this.applyDescription("caption", void 0),
              this.layOutTitles(i));
          }
          applyDescription(t, e) {
            var i;
            let s = this,
              o = (this.options[t] = as(this.options[t], e)),
              r = this[t];
            (r && e && (this[t] = r = r.destroy()),
              o &&
                !r &&
                (((r = this.renderer
                  .text(o.text, 0, 0, o.useHTML)
                  .attr({ align: o.align, class: "highcharts-" + t, zIndex: o.zIndex || 4 })
                  .css({ textOverflow: "ellipsis", whiteSpace: "nowrap" })
                  .add()).update = function (e, i) {
                  (s.applyDescription(t, e), s.layOutTitles(i));
                }),
                this.styledMode ||
                  r.css(
                    n5(
                      "title" === t ? { fontSize: this.options.isStock ? "1em" : "1.2em" } : {},
                      o.style
                    )
                  ),
                (r.textPxLength = r.getBBox().width),
                r.css({ whiteSpace: null == (i = o.style) ? void 0 : i.whiteSpace }),
                (this[t] = r)));
          }
          layOutTitles() {
            var t, e, i, s;
            let o = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
              r = [0, 0, 0],
              { options: n, renderer: a, spacingBox: l } = this;
            (["title", "subtitle", "caption"].forEach((t) => {
              let e = this[t],
                i = this.options[t],
                s = as(l),
                o = (null == e ? void 0 : e.textPxLength) || 0;
              if (e && i) {
                var n;
                n9(this, "layOutTitle", { alignTo: s, key: t, textPxLength: o });
                let l = a.fontMetrics(e),
                  h = l.b,
                  d = l.h,
                  c = i.verticalAlign || "top",
                  p = "top" === c,
                  u = (p && i.minScale) || 1,
                  g = "title" === t ? (p ? -3 : 0) : p ? r[0] + 2 : 0,
                  f = Math.min(s.width / o, 1),
                  m = Math.max(u, f),
                  x = as(
                    { y: "bottom" === c ? h : g + h },
                    {
                      align:
                        "title" === t
                          ? f < u
                            ? "left"
                            : "center"
                          : null == (n = this.title)
                            ? void 0
                            : n.alignValue
                    },
                    i
                  ),
                  y = (i.width || (f > u ? this.chartWidth : s.width) / m) + "px";
                e.alignValue !== x.align && (e.placed = !1);
                let v = Math.round(e.css({ width: y }).getBBox(i.useHTML).height);
                if (
                  ((x.height = v),
                  e.align(x, !1, s).attr({
                    align: x.align,
                    scaleX: m,
                    scaleY: m,
                    "transform-origin": "".concat(s.x + o * m * n4(x.align), " ").concat(d)
                  }),
                  !i.floating)
                ) {
                  let t = v * (v < 1.2 * d ? 1 : m);
                  "top" === c
                    ? (r[0] = Math.ceil(r[0] + t))
                    : "bottom" === c && (r[2] = Math.ceil(r[2] + t));
                }
              }
            }, this),
              r[0] &&
                "top" === ((null == (t = n.title) ? void 0 : t.verticalAlign) || "top") &&
                (r[0] += (null == (e = n.title) ? void 0 : e.margin) || 0),
              r[2] &&
                (null == (i = n.caption) ? void 0 : i.verticalAlign) === "bottom" &&
                (r[2] += (null == (s = n.caption) ? void 0 : s.margin) || 0));
            let h = !this.titleOffset || this.titleOffset.join(",") !== r.join(",");
            ((this.titleOffset = r),
              n9(this, "afterLayOutTitles"),
              !this.isDirtyBox &&
                h &&
                ((this.isDirtyBox = this.isDirtyLegend = h),
                this.hasRendered && o && this.isDirtyBox && this.redraw()));
          }
          getContainerBox() {
            let t = [].map.call(this.renderTo.children, (t) => {
                if (t !== this.container) {
                  let e = t.style.display;
                  return ((t.style.display = "none"), [t, e]);
                }
              }),
              e = {
                width: n8(this.renderTo, "width", !0) || 0,
                height: n8(this.renderTo, "height", !0) || 0
              };
            return (
              t.filter(Boolean).forEach((t) => {
                let [e, i] = t;
                e.style.display = i;
              }),
              e
            );
          }
          getChartSize() {
            var t;
            let e = this.options.chart,
              i = e.width,
              s = e.height,
              o = this.getContainerBox(),
              r =
                o.height <= 1 ||
                (!(null == (t = this.renderTo.parentElement) ? void 0 : t.style.height) &&
                  "100%" === this.renderTo.style.height);
            ((this.chartWidth = Math.max(0, i || o.width || 600)),
              (this.chartHeight = Math.max(0, aa(s, this.chartWidth) || (r ? 400 : o.height))),
              (this.containerBox = o));
          }
          temporaryDisplay(t) {
            let e = this.renderTo,
              i;
            if (t)
              for (; null == e ? void 0 : e.style;)
                (e.hcOrigStyle && (nJ(e, e.hcOrigStyle), delete e.hcOrigStyle),
                  e.hcOrigDetached && (nj.body.removeChild(e), (e.hcOrigDetached = !1)),
                  (e = e.parentNode));
            else
              for (
                ;
                (null == e ? void 0 : e.style) &&
                (nj.body.contains(e) ||
                  e.parentNode ||
                  ((e.hcOrigDetached = !0), nj.body.appendChild(e)),
                ("none" === n8(e, "display", !1) || e.hcOricDetached) &&
                  ((e.hcOrigStyle = {
                    display: e.style.display,
                    height: e.style.height,
                    overflow: e.style.overflow
                  }),
                  (i = { display: "block", overflow: "hidden" }),
                  e !== this.renderTo && (i.height = 0),
                  nJ(e, i),
                  e.offsetWidth || e.style.setProperty("display", "block", "important")),
                (e = e.parentNode) !== nj.body);
              );
          }
          setClassName(t) {
            this.container.className = "highcharts-container " + (t || "");
          }
          getContainer() {
            var t, e;
            let i,
              s = this.options,
              o = s.chart,
              r = "data-highcharts-chart",
              n = ac(),
              a = this.renderTo,
              l = an(nK(a, r));
            (at(l) && nY[l] && nY[l].hasRendered && nY[l].destroy(),
              nK(a, r, this.index),
              (a.innerHTML = eg.emptyHTML),
              o.skipClone || a.offsetWidth || this.temporaryDisplay(),
              this.getChartSize());
            let h = this.chartHeight,
              d = this.chartWidth;
            (nJ(a, { overflow: "hidden" }),
              this.styledMode ||
                (i = n5(
                  {
                    position: "relative",
                    overflow: "hidden",
                    width: d + "px",
                    height: h + "px",
                    textAlign: "left",
                    lineHeight: "normal",
                    zIndex: 0,
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                    userSelect: "none",
                    "touch-action": "manipulation",
                    outline: "none",
                    padding: "0px"
                  },
                  o.style || {}
                )));
            let c = n$("div", { id: n }, i, a);
            ((this.container = c),
              this.getChartSize(),
              d === this.chartWidth ||
                ((d = this.chartWidth),
                this.styledMode ||
                  nJ(c, { width: ar(null == (t = o.style) ? void 0 : t.width, d + "px") })),
              (this.containerBox = this.getContainerBox()),
              (this._cursor = c.style.cursor));
            let p = o.renderer || !nV ? eE.getRendererType(o.renderer) : i7;
            if (
              ((this.renderer = new p(
                c,
                d,
                h,
                void 0,
                o.forExport,
                null == (e = s.exporting) ? void 0 : e.allowHTML,
                this.styledMode
              )),
              nX(void 0, this),
              this.setClassName(o.className),
              this.styledMode)
            )
              for (let t in s.defs) this.renderer.definition(s.defs[t]);
            else this.renderer.setStyle(o.style);
            ((this.renderer.chartIndex = this.index), n9(this, "afterGetContainer"));
          }
          getMargins(t) {
            var e;
            let { spacing: i, margin: s, titleOffset: o } = this;
            (this.resetMargins(),
              o[0] && !nQ(s[0]) && (this.plotTop = Math.max(this.plotTop, o[0] + i[0])),
              o[2] && !nQ(s[2]) && (this.marginBottom = Math.max(this.marginBottom, o[2] + i[2])),
              (null == (e = this.legend) ? void 0 : e.display) && this.legend.adjustMargins(s, i),
              n9(this, "getMargins"),
              t || this.getAxisMargins());
          }
          getAxisMargins() {
            let t = this,
              e = (t.axisOffset = [0, 0, 0, 0]),
              i = t.colorAxis,
              s = t.margin,
              o = function (t) {
                t.forEach(function (t) {
                  t.visible && t.getOffset();
                });
              };
            (t.hasCartesianSeries ? o(t.axes) : (null == i ? void 0 : i.length) && o(i),
              nU.forEach(function (i, o) {
                nQ(s[o]) || (t[i] += e[o]);
              }),
              t.setChartSize());
          }
          getOptions() {
            return n0(this.userOptions, nH);
          }
          reflow(t) {
            var e;
            let i = this,
              s = i.containerBox,
              o = i.getContainerBox();
            (null == (e = i.pointer) || delete e.chartPosition,
              !i.isPrinting &&
                !i.isResizing &&
                s &&
                o.width &&
                ((o.width !== s.width || o.height !== s.height) &&
                  (tu.clearTimeout(i.reflowTimeout),
                  (i.reflowTimeout = ad(function () {
                    i.container && i.setSize(void 0, void 0, !1);
                  }, 100 * !!t))),
                (i.containerBox = o)));
          }
          setReflow() {
            let t = this,
              e = (e) => {
                var i;
                (null == (i = t.options) ? void 0 : i.chart.reflow) && t.hasLoaded && t.reflow(e);
              };
            if ("function" == typeof ResizeObserver) new ResizeObserver(e).observe(t.renderTo);
            else {
              let t = n_(nZ, "resize", e);
              n_(this, "destroy", t);
            }
          }
          setSize(t, e, i) {
            let s = this,
              o = s.renderer;
            ((s.isResizing += 1), nX(i, s));
            let r = o.globalAnimation;
            ((s.oldChartHeight = s.chartHeight),
              (s.oldChartWidth = s.chartWidth),
              void 0 !== t && (s.options.chart.width = t),
              void 0 !== e && (s.options.chart.height = e),
              s.getChartSize());
            let {
              chartWidth: n,
              chartHeight: a,
              scrollablePixelsX: l = 0,
              scrollablePixelsY: h = 0
            } = s;
            ((s.isDirtyBox || n !== s.oldChartWidth || a !== s.oldChartHeight) &&
              (s.styledMode ||
                (r ? nR : nJ)(
                  s.container,
                  { width: "".concat(n + l, "px"), height: "".concat(a + h, "px") },
                  r
                ),
              s.setChartSize(!0),
              o.setSize(n, a, r),
              s.axes.forEach(function (t) {
                ((t.isDirty = !0), t.setScale());
              }),
              (s.isDirtyLegend = !0),
              (s.isDirtyBox = !0),
              s.layOutTitles(),
              s.getMargins(),
              s.redraw(r),
              (s.oldChartHeight = void 0),
              n9(s, "resize"),
              setTimeout(() => {
                s && n9(s, "endResize");
              }, nW(r).duration)),
              (s.isResizing -= 1));
          }
          setChartSize(t) {
            var e, i;
            let s,
              o,
              r,
              n,
              { chartHeight: a, chartWidth: l, inverted: h, spacing: d, renderer: c } = this,
              p = this.clipOffset,
              u = Math[h ? "floor" : "round"];
            ((this.plotLeft = s = Math.round(this.plotLeft)),
              (this.plotTop = o = Math.round(this.plotTop)),
              (this.plotWidth = r =
                Math.max(0, Math.round(l - s - (null != (e = this.marginRight) ? e : 0)))),
              (this.plotHeight = n =
                Math.max(0, Math.round(a - o - (null != (i = this.marginBottom) ? i : 0)))),
              (this.plotSizeX = h ? n : r),
              (this.plotSizeY = h ? r : n),
              (this.spacingBox = c.spacingBox =
                { x: d[3], y: d[0], width: l - d[3] - d[1], height: a - d[0] - d[2] }),
              (this.plotBox = c.plotBox = { x: s, y: o, width: r, height: n }),
              p &&
                (this.clipBox = {
                  x: u(p[3]),
                  y: u(p[0]),
                  width: u(this.plotSizeX - p[1] - p[3]),
                  height: u(this.plotSizeY - p[0] - p[2])
                }),
              t ||
                (this.axes.forEach(function (t) {
                  (t.setAxisSize(), t.setAxisTranslation());
                }),
                c.alignElements()),
              n9(this, "afterSetChartSize", { skipAxes: t }));
          }
          resetMargins() {
            n9(this, "resetMargins");
            let t = this,
              e = t.options.chart,
              i = e.plotBorderWidth || 0,
              s = Math.round(i) / 2;
            (["margin", "spacing"].forEach(function (i) {
              let s = e[i],
                o = ae(s) ? s : [s, s, s, s];
              ["Top", "Right", "Bottom", "Left"].forEach(function (s, r) {
                t[i][r] = ar(e[i + s], o[r]);
              });
            }),
              nU.forEach(function (e, i) {
                t[e] = ar(t.margin[i], t.spacing[i]);
              }),
              (t.axisOffset = [0, 0, 0, 0]),
              (t.clipOffset = [s, s, s, s]),
              (t.plotBorderWidth = i));
          }
          drawChartBox() {
            let t = this.options.chart,
              e = this.renderer,
              i = this.chartWidth,
              s = this.chartHeight,
              o = this.styledMode,
              r = this.plotBGImage,
              n = t.backgroundColor,
              a = t.plotBackgroundColor,
              l = t.plotBackgroundImage,
              h = this.plotLeft,
              d = this.plotTop,
              c = this.plotWidth,
              p = this.plotHeight,
              u = this.plotBox,
              g = this.clipRect,
              f = this.clipBox,
              m = this.chartBackground,
              x = this.plotBackground,
              y = this.plotBorder,
              v,
              b,
              k,
              w = "animate";
            (m ||
              ((this.chartBackground = m = e.rect().addClass("highcharts-background").add()),
              (w = "attr")),
              o
                ? (v = b = m.strokeWidth())
                : ((b = (v = t.borderWidth || 0) + 8 * !!t.shadow),
                  (k = { fill: n || "none" }),
                  (v || m["stroke-width"]) && ((k.stroke = t.borderColor), (k["stroke-width"] = v)),
                  m.attr(k).shadow(t.shadow)),
              m[w]({
                x: b / 2,
                y: b / 2,
                width: i - b - (v % 2),
                height: s - b - (v % 2),
                r: t.borderRadius
              }),
              (w = "animate"),
              x ||
                ((w = "attr"),
                (this.plotBackground = x = e.rect().addClass("highcharts-plot-background").add())),
              x[w](u),
              !o &&
                (x.attr({ fill: a || "none" }).shadow(t.plotShadow),
                l &&
                  (r
                    ? (l !== r.attr("href") && r.attr("href", l), r.animate(u))
                    : (this.plotBGImage = e.image(l, h, d, c, p).add()))),
              g ? g.animate({ width: f.width, height: f.height }) : (this.clipRect = e.clipRect(f)),
              (w = "animate"),
              y ||
                ((w = "attr"),
                (this.plotBorder = y =
                  e.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add())),
              o ||
                y.attr({
                  stroke: t.plotBorderColor,
                  "stroke-width": t.plotBorderWidth || 0,
                  fill: "none"
                }),
              y[w](y.crisp(u, -y.strokeWidth())),
              (this.isDirtyBox = !1),
              n9(this, "afterDrawChartBox"));
          }
          propFromSeries() {
            let t,
              e,
              i,
              s = this,
              o = s.options.chart,
              r = s.options.series;
            ["inverted", "angular", "polar"].forEach(function (n) {
              for (
                e = nq[o.type],
                  i = o[n] || (e && e.prototype[n]),
                  t = null == r ? void 0 : r.length;
                !i && t--;
              )
                (e = nq[r[t].type]) && e.prototype[n] && (i = !0);
              s[n] = i;
            });
          }
          linkSeries(t) {
            let e = this,
              i = e.series;
            (i.forEach(function (t) {
              t.linkedSeries.length = 0;
            }),
              i.forEach(function (t) {
                let { linkedTo: i } = t.options;
                if (ai(i)) {
                  let s;
                  (s = ":previous" === i ? e.series[t.index - 1] : e.get(i)) &&
                    s.linkedParent !== t &&
                    (s.linkedSeries.push(t),
                    (t.linkedParent = s),
                    s.enabledDataSorting && t.setDataSortingOptions(),
                    (t.visible = ar(t.options.visible, s.options.visible, t.visible)));
                }
              }),
              n9(this, "afterLinkSeries", { isUpdating: t }));
          }
          renderSeries() {
            this.series.forEach(function (t) {
              (t.translate(), t.render());
            });
          }
          render() {
            var t;
            let e = this.axes,
              i = this.colorAxis,
              s = this.renderer,
              o = this.options.chart.axisLayoutRuns || 2,
              r = (t) => {
                t.forEach((t) => {
                  t.visible && t.render();
                });
              },
              n = 0,
              a = !0,
              l,
              h = 0;
            for (let i of (this.setTitle(),
            n9(this, "beforeMargins"),
            null == (t = this.getStacks) || t.call(this),
            this.getMargins(!0),
            this.setChartSize(),
            e)) {
              let { options: t } = i,
                { labels: e } = t;
              if (
                this.hasCartesianSeries &&
                i.horiz &&
                i.visible &&
                e.enabled &&
                i.series.length &&
                "colorAxis" !== i.coll &&
                !this.polar
              ) {
                ((n = t.tickLength), i.createGroups());
                let s = new sD(i, 0, "", !0),
                  o = s.createLabel("x", e);
                if (
                  (s.destroy(),
                  o &&
                    ar(e.reserveSpace, !at(t.crossing)) &&
                    (n = o.getBBox().height + e.distance + Math.max(t.offset || 0, 0)),
                  n)
                ) {
                  null == o || o.destroy();
                  break;
                }
              }
            }
            for (this.plotHeight = Math.max(this.plotHeight - n, 0); (a || l || o > 1) && h < o;) {
              let t = this.plotWidth,
                i = this.plotHeight;
              for (let t of e)
                0 === h
                  ? t.setScale()
                  : ((t.horiz && a) || (!t.horiz && l)) && t.setTickInterval(!0);
              (0 === h ? this.getAxisMargins() : this.getMargins(),
                (a = t / this.plotWidth > (h ? 1 : 1.1)),
                (l = i / this.plotHeight > (h ? 1 : 1.05)),
                h++);
            }
            (this.drawChartBox(),
              this.hasCartesianSeries ? r(e) : (null == i ? void 0 : i.length) && r(i),
              this.seriesGroup ||
                (this.seriesGroup = s
                  .g("series-group")
                  .attr({ zIndex: 3 })
                  .shadow(this.options.chart.seriesGroupShadow)
                  .add()),
              this.renderSeries(),
              this.addCredits(),
              this.setResponsive && this.setResponsive(),
              (this.hasRendered = !0));
          }
          addCredits(t) {
            let e = this,
              i = as(!0, this.options.credits, t);
            i.enabled &&
              !this.credits &&
              ((this.credits = this.renderer
                .text(i.text + (this.mapCredits || ""), 0, 0)
                .addClass("highcharts-credits")
                .on("click", function () {
                  i.href && (nZ.location.href = i.href);
                })
                .attr({ align: i.position.align, zIndex: 8 })),
              e.styledMode || this.credits.css(i.style),
              this.credits.add().align(i.position),
              (this.credits.update = function (t) {
                ((e.credits = e.credits.destroy()), e.addCredits(t));
              }));
          }
          destroy() {
            var t, e;
            let i,
              s = this,
              o = s.axes,
              r = s.series,
              n = s.container,
              a = null == n ? void 0 : n.parentNode;
            for (
              n9(s, "destroy"),
                s.renderer.forExport ? n2(nY, s) : (nY[s.index] = void 0),
                G.chartCount--,
                s.renderTo.removeAttribute("data-highcharts-chart"),
                al(s),
                i = o.length;
              i--;
            )
              o[i] = o[i].destroy();
            for (
              null == (e = this.scroller) || null == (t = e.destroy) || t.call(e), i = r.length;
              i--;
            )
              r[i] = r[i].destroy();
            ([
              "title",
              "subtitle",
              "chartBackground",
              "plotBackground",
              "plotBGImage",
              "plotBorder",
              "seriesGroup",
              "clipRect",
              "credits",
              "pointer",
              "rangeSelector",
              "legend",
              "resetZoomButton",
              "tooltip",
              "renderer"
            ].forEach((t) => {
              var e, i;
              s[t] = null == (i = s[t]) || null == (e = i.destroy) ? void 0 : e.call(i);
            }),
              n && ((n.innerHTML = eg.emptyHTML), al(n), a && n1(n)),
              ao(s, function (t, e) {
                delete s[e];
              }));
          }
          firstRender() {
            var t;
            let e = this,
              i = e.options;
            (e.getContainer(),
              e.resetMargins(),
              e.setChartSize(),
              e.propFromSeries(),
              e.createAxes());
            let s = n7(i.series) ? i.series : [];
            ((i.series = []),
              s.forEach(function (t) {
                e.initSeries(t);
              }),
              e.linkSeries(),
              e.setSortedData(),
              n9(e, "beforeRender"),
              e.render(),
              null == (t = e.pointer) || t.getChartPosition(),
              e.renderer.imgCount || e.hasLoaded || e.onload(),
              e.temporaryDisplay(!0));
          }
          onload() {
            (this.callbacks.concat([this.callback]).forEach(function (t) {
              t && void 0 !== this.index && t.apply(this, [this]);
            }, this),
              n9(this, "load"),
              n9(this, "render"),
              nQ(this.index) && this.setReflow(),
              this.warnIfA11yModuleNotLoaded(),
              (this.hasLoaded = !0));
          }
          warnIfA11yModuleNotLoaded() {
            let { options: t, title: e } = this;
            !t ||
              this.accessibility ||
              (this.renderer.boxWrapper.attr({
                role: "img",
                "aria-label": ((null == e ? void 0 : e.element.textContent) || "").replace(
                  /</g,
                  "&lt;"
                )
              }),
              (t.accessibility && !1 === t.accessibility.enabled) ||
                n3(
                  'Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',
                  !1,
                  this
                ));
          }
          addSeries(t, e, i) {
            let s,
              o = this;
            return (
              t &&
                ((e = ar(e, !0)),
                n9(o, "addSeries", { options: t }, function () {
                  ((s = o.initSeries(t)),
                    (o.isDirtyLegend = !0),
                    o.linkSeries(),
                    s.enabledDataSorting && s.setData(t.data, !1),
                    n9(o, "afterAddSeries", { series: s }),
                    e && o.redraw(i));
                })),
              s
            );
          }
          addAxis(t, e, i, s) {
            return this.createAxis(e ? "xAxis" : "yAxis", { axis: t, redraw: i, animation: s });
          }
          addColorAxis(t, e, i) {
            return this.createAxis("colorAxis", { axis: t, redraw: e, animation: i });
          }
          createAxis(t, e) {
            let i = new ot(this, e.axis, t);
            return (ar(e.redraw, !0) && this.redraw(e.animation), i);
          }
          showLoading(t) {
            let e = this,
              i = e.options,
              s = i.loading,
              o = function () {
                r &&
                  nJ(r, {
                    left: e.plotLeft + "px",
                    top: e.plotTop + "px",
                    width: e.plotWidth + "px",
                    height: e.plotHeight + "px"
                  });
              },
              r = e.loadingDiv,
              n = e.loadingSpan;
            (r ||
              (e.loadingDiv = r =
                n$(
                  "div",
                  { className: "highcharts-loading highcharts-loading-hidden" },
                  null,
                  e.container
                )),
              n ||
                ((e.loadingSpan = n =
                  n$("span", { className: "highcharts-loading-inner" }, null, r)),
                n_(e, "redraw", o)),
              (r.className = "highcharts-loading"),
              eg.setElementHTML(n, ar(t, i.lang.loading, "")),
              e.styledMode ||
                (nJ(r, n5(s.style, { zIndex: 10 })),
                nJ(n, s.labelStyle),
                e.loadingShown ||
                  (nJ(r, { opacity: 0, display: "" }),
                  nR(r, { opacity: s.style.opacity || 0.5 }, { duration: s.showDuration || 0 }))),
              (e.loadingShown = !0),
              o());
          }
          hideLoading() {
            let t = this.options,
              e = this.loadingDiv;
            (e &&
              ((e.className = "highcharts-loading highcharts-loading-hidden"),
              this.styledMode ||
                nR(
                  e,
                  { opacity: 0 },
                  {
                    duration: t.loading.hideDuration || 100,
                    complete: function () {
                      nJ(e, { display: "none" });
                    }
                  }
                )),
              (this.loadingShown = !1));
          }
          update(t, e, i, s) {
            let o,
              r,
              n,
              a = this,
              l = {
                credits: "addCredits",
                title: "setTitle",
                subtitle: "setSubtitle",
                caption: "setCaption"
              },
              h = t.isResponsiveOptions,
              d = [];
            (n9(a, "update", { options: t }),
              h || a.setResponsive(!1, !0),
              (t = n0(t, a.options)),
              (a.userOptions = as(a.userOptions, t)));
            let c = t.chart;
            (c &&
              (as(!0, a.options.chart, c),
              this.setZoomOptions(),
              "className" in c && a.setClassName(c.className),
              ("inverted" in c || "polar" in c || "type" in c) && (a.propFromSeries(), (o = !0)),
              "alignTicks" in c && (o = !0),
              "events" in c && nG(this, c),
              ao(c, function (t, e) {
                (-1 !== a.propsRequireUpdateSeries.indexOf("chart." + e) && (r = !0),
                  -1 !== a.propsRequireDirtyBox.indexOf(e) && (a.isDirtyBox = !0),
                  -1 === a.propsRequireReflow.indexOf(e) || ((a.isDirtyBox = !0), h || (n = !0)));
              }),
              !a.styledMode && c.style && a.renderer.setStyle(a.options.chart.style || {})),
              !a.styledMode && t.colors && (this.options.colors = t.colors),
              ao(t, function (e, i) {
                (a[i] && "function" == typeof a[i].update
                  ? a[i].update(e, !1)
                  : "function" == typeof a[l[i]]
                    ? a[l[i]](e)
                    : "colors" !== i &&
                      -1 === a.collectionsWithUpdate.indexOf(i) &&
                      as(!0, a.options[i], t[i]),
                  "chart" !== i && -1 !== a.propsRequireUpdateSeries.indexOf(i) && (r = !0));
              }),
              this.collectionsWithUpdate.forEach(function (e) {
                t[e] &&
                  (ah(t[e]).forEach(function (t, s) {
                    let o,
                      r = nQ(t.id);
                    (r && (o = a.get(t.id)),
                      !o &&
                        a[e] &&
                        (o = a[e][ar(t.index, s)]) &&
                        ((r && nQ(o.options.id)) || o.options.isInternal) &&
                        (o = void 0),
                      o && o.coll === e && (o.update(t, !1), i && (o.touched = !0)),
                      !o &&
                        i &&
                        a.collectionsWithInit[e] &&
                        (a.collectionsWithInit[e][0].apply(
                          a,
                          [t].concat(a.collectionsWithInit[e][1] || []).concat([!1])
                        ).touched = !0));
                  }),
                  i &&
                    a[e].forEach(function (t) {
                      t.touched || t.options.isInternal ? delete t.touched : d.push(t);
                    }));
              }),
              d.forEach(function (t) {
                t.chart && t.remove && t.remove(!1);
              }),
              o &&
                a.axes.forEach(function (t) {
                  t.update({}, !1);
                }),
              r &&
                a.getSeriesOrderByLinks().forEach(function (t) {
                  t.chart && t.update({}, !1);
                }, this));
            let p = null == c ? void 0 : c.width,
              u = c && (ai(c.height) ? aa(c.height, p || a.chartWidth) : c.height);
            (n || (at(p) && p !== a.chartWidth) || (at(u) && u !== a.chartHeight)
              ? a.setSize(p, u, s)
              : ar(e, !0) && a.redraw(s),
              n9(a, "afterUpdate", { options: t, redraw: e, animation: s }));
          }
          setSubtitle(t, e) {
            (this.applyDescription("subtitle", t), this.layOutTitles(e));
          }
          setCaption(t, e) {
            (this.applyDescription("caption", t), this.layOutTitles(e));
          }
          showResetZoom() {
            let t = this,
              e = nH.lang,
              i = t.zooming.resetButton,
              s = i.theme,
              o = "chart" === i.relativeTo || "spacingBox" === i.relativeTo ? null : "plotBox";
            function r() {
              t.zoomOut();
            }
            (n9(this, "beforeShowResetZoom", null, function () {
              t.resetZoomButton = t.renderer
                .button(e.resetZoom, null, null, r, s)
                .attr({ align: i.position.align, title: e.resetZoomTitle })
                .addClass("highcharts-reset-zoom")
                .add()
                .align(i.position, !1, o);
            }),
              n9(this, "afterShowResetZoom"));
          }
          zoomOut() {
            n9(this, "selection", { resetSelection: !0 }, () =>
              this.transform({ reset: !0, trigger: "zoom" })
            );
          }
          pan(t, e) {
            let i = this,
              s = "object" == typeof e ? e : { enabled: e, type: "x" },
              o = s.type,
              r =
                o &&
                i[{ x: "xAxis", xy: "axes", y: "yAxis" }[o]].filter(
                  (t) => t.options.panningEnabled && !t.options.isInternal
                ),
              n = i.options.chart;
            ((null == n ? void 0 : n.panning) && (n.panning = s),
              n9(this, "pan", { originalEvent: t }, () => {
                (i.transform({
                  axes: r,
                  event: t,
                  to: { x: t.chartX - (i.mouseDownX || 0), y: t.chartY - (i.mouseDownY || 0) },
                  trigger: "pan"
                }),
                  nJ(i.container, { cursor: "move" }));
              }));
          }
          transform(t) {
            var e, i, s;
            let {
                axes: o = this.axes,
                event: r,
                from: n = {},
                reset: a,
                selection: l,
                to: h = {},
                trigger: d
              } = t,
              { inverted: c, time: p } = this,
              u = !1,
              g,
              f;
            for (let t of (null == (i = this.hoverPoints) || i.forEach((t) => t.setState()), o)) {
              let { horiz: e, len: i, minPointOffset: o = 0, options: m, reversed: x } = t,
                y = e ? "width" : "height",
                v = e ? "x" : "y",
                b = ar(h[y], t.len),
                k = ar(n[y], t.len),
                w = 10 > Math.abs(b) ? 1 : b / k,
                M = (n[v] || 0) + k / 2 - t.pos,
                S = M - ((null != (s = h[v]) ? s : t.pos) + b / 2 - t.pos) / w,
                T = (x && !c) || (!x && c) ? -1 : 1;
              if (!a && (M < 0 || M > t.len)) continue;
              let C = t.toValue(S, !0) + (l || t.isOrdinal ? 0 : o * T),
                A = t.toValue(S + i / w, !0) - (l || t.isOrdinal ? 0 : o * T || 0),
                P = t.allExtremes;
              if ((C > A && ([C, A] = [A, C]), 1 === w && !a && "yAxis" === t.coll && !P)) {
                for (let e of t.series) {
                  let t = e.getExtremes(e.getProcessedData(!0).modified.getColumn("y") || [], !0);
                  (null != P || (P = { dataMin: Number.MAX_VALUE, dataMax: -Number.MAX_VALUE }),
                    at(t.dataMin) &&
                      at(t.dataMax) &&
                      ((P.dataMin = Math.min(t.dataMin, P.dataMin)),
                      (P.dataMax = Math.max(t.dataMax, P.dataMax))));
                }
                t.allExtremes = P;
              }
              let { dataMin: L, dataMax: O, min: E, max: I } = n5(t.getExtremes(), P || {}),
                D = p.parse(m.min),
                B = p.parse(m.max),
                N = null != L ? L : D,
                z = null != O ? O : B,
                R = A - C,
                W = t.categories ? 0 : Math.min(R, z - N),
                X = N - W * (nQ(D) ? 0 : m.minPadding),
                H = z + W * (nQ(B) ? 0 : m.maxPadding),
                F = t.allowZoomOutside || 1 === w || ("zoom" !== d && w > 1),
                G = Math.min(null != D ? D : X, X, F ? E : X),
                Y = Math.max(null != B ? B : H, H, F ? I : H);
              (!t.isOrdinal || t.options.overscroll || 1 !== w || a) &&
                (C < G && ((C = G), w >= 1 && (A = C + R)),
                A > Y && ((A = Y), w >= 1 && (C = A - R)),
                (a || (t.series.length && (C !== E || A !== I) && C >= G && A <= Y)) &&
                  (l
                    ? l[t.coll].push({ axis: t, min: C, max: A })
                    : ((t.isPanning = "zoom" !== d),
                      t.isPanning && (f = !0),
                      t.setExtremes(a ? void 0 : C, a ? void 0 : A, !1, !1, {
                        move: S,
                        trigger: d,
                        scale: w
                      }),
                      !a && (C > G || A < Y) && "mousewheel" !== d && (g = !0)),
                  (u = !0)),
                r && (this[e ? "mouseDownX" : "mouseDownY"] = r[e ? "chartX" : "chartY"]));
            }
            return (
              u &&
                (l
                  ? n9(this, "selection", l, () => {
                      (delete t.selection, (t.trigger = "zoom"), this.transform(t));
                    })
                  : (!g || f || this.resetZoomButton
                      ? !g &&
                        this.resetZoomButton &&
                        (this.resetZoomButton = this.resetZoomButton.destroy())
                      : this.showResetZoom(),
                    this.redraw(
                      "zoom" === d &&
                        (null != (e = this.options.chart.animation) ? e : this.pointCount < 100)
                    ))),
              u
            );
          }
          constructor(t, e, i) {
            this.sharedClips = {};
            let s = [...arguments];
            ((ai(t) || t.nodeName) && (this.renderTo = s.shift()), this.init(s[0], s[1]));
          }
        }
        n5(ap.prototype, {
          callbacks: [],
          collectionsWithInit: {
            xAxis: [ap.prototype.addAxis, [!0]],
            yAxis: [ap.prototype.addAxis, [!1]],
            series: [ap.prototype.addSeries]
          },
          collectionsWithUpdate: ["xAxis", "yAxis", "series"],
          propsRequireDirtyBox: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "borderRadius",
            "plotBackgroundColor",
            "plotBackgroundImage",
            "plotBorderColor",
            "plotBorderWidth",
            "plotShadow",
            "shadow"
          ],
          propsRequireReflow: [
            "margin",
            "marginTop",
            "marginRight",
            "marginBottom",
            "marginLeft",
            "spacing",
            "spacingTop",
            "spacingRight",
            "spacingBottom",
            "spacingLeft"
          ],
          propsRequireUpdateSeries: [
            "chart.inverted",
            "chart.polar",
            "chart.ignoreHiddenSeries",
            "chart.type",
            "colors",
            "plotOptions",
            "time",
            "tooltip"
          ]
        });
        let { stop: au } = et,
          { composed: ag } = G,
          {
            addEvent: af,
            createElement: am,
            css: ax,
            defined: ay,
            erase: av,
            merge: ab,
            pushUnique: ak
          } = tu;
        function aw() {
          let t = this.scrollablePlotArea;
          ((this.scrollablePixelsX || this.scrollablePixelsY) &&
            !t &&
            (this.scrollablePlotArea = t = new aS(this)),
            null == t || t.applyFixed());
        }
        function aM() {
          this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = !0);
        }
        class aS {
          static compose(t, e, i) {
            ak(ag, this.compose) &&
              (af(t, "afterInit", aM),
              af(e, "afterSetChartSize", (t) => this.afterSetSize(t.target, t)),
              af(e, "render", aw),
              af(i, "show", aM));
          }
          static afterSetSize(t, e) {
            let i,
              s,
              o,
              { minWidth: r, minHeight: n } = t.options.chart.scrollablePlotArea || {},
              { clipBox: a, plotBox: l, inverted: h, renderer: d } = t;
            if (
              !d.forExport &&
              (r
                ? ((t.scrollablePixelsX = i = Math.max(0, r - t.chartWidth)),
                  i &&
                    ((t.scrollablePlotBox = ab(t.plotBox)),
                    (l.width = t.plotWidth += i),
                    (a[h ? "height" : "width"] += i),
                    (o = !0)))
                : n &&
                  ((t.scrollablePixelsY = s = Math.max(0, n - t.chartHeight)),
                  ay(s) &&
                    ((t.scrollablePlotBox = ab(t.plotBox)),
                    (l.height = t.plotHeight += s),
                    (a[h ? "width" : "height"] += s),
                    (o = !1))),
              ay(o) && !e.skipAxes)
            )
              for (let e of t.axes)
                (e.horiz === o || (t.hasParallelCoordinates && "yAxis" === e.coll)) &&
                  (e.setAxisSize(), e.setAxisTranslation());
          }
          applyFixed() {
            var t;
            let { chart: e, fixedRenderer: i, isDirty: s, scrollingContainer: o } = this,
              {
                axisOffset: r,
                chartWidth: n,
                chartHeight: a,
                container: l,
                plotHeight: h,
                plotLeft: d,
                plotTop: c,
                plotWidth: p,
                scrollablePixelsX: u = 0,
                scrollablePixelsY: g = 0
              } = e,
              { scrollPositionX: f = 0, scrollPositionY: m = 0 } =
                e.options.chart.scrollablePlotArea || {},
              x = n + u,
              y = a + g;
            (i.setSize(n, a),
              (null == s || s) && ((this.isDirty = !1), this.moveFixedElements()),
              au(e.container),
              ax(l, { width: "".concat(x, "px"), height: "".concat(y, "px") }),
              e.renderer.boxWrapper.attr({ width: x, height: y, viewBox: ["0 0", x, y].join(" ") }),
              null == (t = e.chartBackground) || t.attr({ width: x, height: y }),
              ax(o, { width: "".concat(n, "px"), height: "".concat(a, "px") }),
              ay(s) || ((o.scrollLeft = u * f), (o.scrollTop = g * m)));
            let v = c - r[0] - 1,
              b = d - r[3] - 1,
              k = c + h + r[2] + 1,
              w = d + p + r[1] + 1,
              M = d + p - u,
              S = c + h - g,
              T = [["M", 0, 0]];
            (u
              ? (T = [
                  ["M", 0, v],
                  ["L", d - 1, v],
                  ["L", d - 1, k],
                  ["L", 0, k],
                  ["Z"],
                  ["M", M, v],
                  ["L", n, v],
                  ["L", n, k],
                  ["L", M, k],
                  ["Z"]
                ])
              : g &&
                (T = [
                  ["M", b, 0],
                  ["L", b, c - 1],
                  ["L", w, c - 1],
                  ["L", w, 0],
                  ["Z"],
                  ["M", b, S],
                  ["L", b, a],
                  ["L", w, a],
                  ["L", w, S],
                  ["Z"]
                ]),
              "adjustHeight" !== e.redrawTrigger && this.mask.attr({ d: T }));
          }
          moveFixedElements() {
            let t,
              {
                container: e,
                inverted: i,
                scrollablePixelsX: s,
                scrollablePixelsY: o
              } = this.chart,
              r = this.fixedRenderer,
              n = aS.fixedSelectors;
            if (
              (s && !i
                ? (t = ".highcharts-yaxis")
                : (s && i) || (o && !i)
                  ? (t = ".highcharts-xaxis")
                  : o && i && (t = ".highcharts-yaxis"),
              t && !(this.chart.hasParallelCoordinates && ".highcharts-yaxis" === t))
            )
              for (let e of [
                "".concat(t, ":not(.highcharts-radial-axis)"),
                "".concat(t, "-labels:not(.highcharts-radial-axis-labels)")
              ])
                ak(n, e);
            else
              for (let t of [".highcharts-xaxis", ".highcharts-yaxis"])
                for (let e of [
                  "".concat(t, ":not(.highcharts-radial-axis)"),
                  "".concat(t, "-labels:not(.highcharts-radial-axis-labels)")
                ])
                  av(n, e);
            for (let t of n)
              [].forEach.call(e.querySelectorAll(t), (t) => {
                ((t.namespaceURI === r.SVG_NS ? r.box : r.box.parentNode).appendChild(t),
                  (t.style.pointerEvents = "auto"));
              });
          }
          constructor(t) {
            var e, i;
            let s,
              o = t.options.chart,
              r = eE.getRendererType(),
              n = o.scrollablePlotArea || {},
              a = this.moveFixedElements.bind(this),
              l = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
            (t.scrollablePixelsX && (l.overflowX = "auto"),
              t.scrollablePixelsY && (l.overflowY = "auto"),
              (this.chart = t));
            let h = (this.parentDiv = am(
                "div",
                { className: "highcharts-scrolling-parent" },
                { position: "relative" },
                t.renderTo
              )),
              d = (this.scrollingContainer = am(
                "div",
                { className: "highcharts-scrolling" },
                l,
                h
              )),
              c = (this.innerContainer = am(
                "div",
                { className: "highcharts-inner-container" },
                void 0,
                d
              )),
              p = (this.fixedDiv = am(
                "div",
                { className: "highcharts-fixed" },
                {
                  position: "absolute",
                  overflow: "hidden",
                  pointerEvents: "none",
                  zIndex: ((null == (i = o.style) ? void 0 : i.zIndex) || 0) + 2,
                  top: 0
                },
                void 0,
                !0
              )),
              u = (this.fixedRenderer = new r(p, t.chartWidth, t.chartHeight, o.style));
            ((this.mask = u
              .path()
              .attr({
                fill: o.backgroundColor || "#fff",
                "fill-opacity": null != (e = n.opacity) ? e : 0.85,
                zIndex: -1
              })
              .addClass("highcharts-scrollable-mask")
              .add()),
              d.parentNode.insertBefore(p, d),
              ax(t.renderTo, { overflow: "visible" }),
              af(t, "afterShowResetZoom", a),
              af(t, "afterApplyDrilldown", a),
              af(t, "afterLayOutTitles", a),
              af(d, "scroll", () => {
                let { pointer: e, hoverPoint: i } = t;
                e && (delete e.chartPosition, i && (s = i), e.runPointActions(void 0, s, !0));
              }),
              c.appendChild(t.container));
          }
        }
        aS.fixedSelectors = [
          ".highcharts-breadcrumbs-group",
          ".highcharts-contextbutton",
          ".highcharts-caption",
          ".highcharts-credits",
          ".highcharts-drillup-button",
          ".highcharts-legend",
          ".highcharts-legend-checkbox",
          ".highcharts-navigator-series",
          ".highcharts-navigator-xaxis",
          ".highcharts-navigator-yaxis",
          ".highcharts-navigator",
          ".highcharts-range-selector-group",
          ".highcharts-reset-zoom",
          ".highcharts-scrollbar",
          ".highcharts-subtitle",
          ".highcharts-title"
        ];
        let { format: aT } = eO,
          { series: aC } = rY,
          {
            destroyObjectProperties: aA,
            fireEvent: aP,
            getAlignFactor: aL,
            isNumber: aO,
            pick: aE
          } = tu,
          aI = class {
            destroy() {
              aA(this, this.axis);
            }
            render(t) {
              let e = this.axis.chart,
                i = this.options,
                s = i.format,
                o = s ? aT(s, this, e) : i.formatter.call(this);
              if (this.label) this.label.attr({ text: o, visibility: "hidden" });
              else {
                this.label = e.renderer.label(
                  o,
                  null,
                  void 0,
                  i.shape,
                  void 0,
                  void 0,
                  i.useHTML,
                  !1,
                  "stack-labels"
                );
                let s = {
                  r: i.borderRadius || 0,
                  text: o,
                  padding: aE(i.padding, 5),
                  visibility: "hidden"
                };
                (e.styledMode ||
                  ((s.fill = i.backgroundColor),
                  (s.stroke = i.borderColor),
                  (s["stroke-width"] = i.borderWidth),
                  this.label.css(i.style || {})),
                  this.label.attr(s),
                  this.label.added || this.label.add(t));
              }
              ((this.label.labelrank = e.plotSizeY), aP(this, "afterRender"));
            }
            setOffset(t, e, i, s, o, r) {
              let { alignOptions: n, axis: a, label: l, options: h, textAlign: d } = this,
                c = a.chart,
                p = this.getStackBox({
                  xOffset: t,
                  width: e,
                  boxBottom: i,
                  boxTop: s,
                  defaultX: o,
                  xAxis: r
                }),
                { verticalAlign: u } = n;
              if (l && p) {
                let t = l.getBBox(void 0, 0),
                  e = l.padding,
                  i = "justify" === aE(h.overflow, "justify"),
                  s;
                ((n.x = h.x || 0), (n.y = h.y || 0));
                let { x: o, y: r } = this.adjustStackPosition({
                  labelBox: t,
                  verticalAlign: u,
                  textAlign: d
                });
                ((p.x -= o),
                  (p.y -= r),
                  l.align(n, !1, p),
                  (s = c.isInsidePlot(l.alignAttr.x + n.x + o, l.alignAttr.y + n.y + r)) ||
                    (i = !1),
                  i && aC.prototype.justifyDataLabel.call(a, l, n, l.alignAttr, t, p),
                  l.attr({
                    x: l.alignAttr.x,
                    y: l.alignAttr.y,
                    rotation: h.rotation,
                    rotationOriginX: t.width * aL(h.textAlign || "center"),
                    rotationOriginY: t.height / 2
                  }),
                  aE(!i && h.crop, !0) &&
                    (s =
                      aO(l.x) &&
                      aO(l.y) &&
                      c.isInsidePlot(l.x - e + (l.width || 0), l.y) &&
                      c.isInsidePlot(l.x + e, l.y)),
                  l[s ? "show" : "hide"]());
              }
              aP(this, "afterSetOffset", { xOffset: t, width: e });
            }
            adjustStackPosition(t) {
              let { labelBox: e, verticalAlign: i, textAlign: s } = t;
              return {
                x: e.width / 2 + (e.width / 2) * (2 * aL(s) - 1),
                y: (e.height / 2) * 2 * (1 - aL(i))
              };
            }
            getStackBox(t) {
              let e = this.axis,
                i = e.chart,
                { boxTop: s, defaultX: o, xOffset: r, width: n, boxBottom: a } = t,
                l = e.stacking.usePercentage ? 100 : aE(s, this.total, 0),
                h = e.toPixels(l),
                d = t.xAxis || i.xAxis[0],
                c = aE(o, d.translate(this.x)) + r,
                p = Math.abs(
                  h -
                    e.toPixels(
                      a || (aO(e.min) && e.logarithmic && e.logarithmic.lin2log(e.min)) || 0
                    )
                ),
                u = i.inverted,
                g = this.isNegative;
              return u
                ? {
                    x: (g ? h : h - p) - i.plotLeft,
                    y: d.height - c - n + d.top - i.plotTop,
                    width: p,
                    height: n
                  }
                : {
                    x: c + d.transB - i.plotLeft,
                    y: (g ? h - p : h) - i.plotTop,
                    width: n,
                    height: p
                  };
            }
            constructor(t, e, i, s, o) {
              let r = t.chart.inverted,
                n = t.reversed;
              this.axis = t;
              let a = (this.isNegative = !!i != !!n);
              ((this.options = e = e || {}),
                (this.x = s),
                (this.total = null),
                (this.cumulative = null),
                (this.points = {}),
                (this.hasValidPoints = !1),
                (this.stack = o),
                (this.leftCliff = 0),
                (this.rightCliff = 0),
                (this.alignOptions = {
                  align: e.align || (r ? (a ? "left" : "right") : "center"),
                  verticalAlign: e.verticalAlign || (r ? "middle" : a ? "bottom" : "top"),
                  y: e.y,
                  x: e.x
                }),
                (this.textAlign = e.textAlign || (r ? (a ? "right" : "left") : "center")));
            }
          },
          { getDeferredAnimation: aD } = et,
          {
            series: { prototype: aB }
          } = rY,
          {
            addEvent: aN,
            correctFloat: az,
            defined: aR,
            destroyObjectProperties: aW,
            fireEvent: aX,
            isNumber: aH,
            objectEach: aF,
            pick: aG
          } = tu;
        function aY() {
          let t = this.inverted;
          (this.axes.forEach((t) => {
            var e;
            (null == (e = t.stacking) ? void 0 : e.stacks) &&
              t.hasVisibleSeries &&
              (t.stacking.oldStacks = t.stacking.stacks);
          }),
            this.series.forEach((e) => {
              var i;
              let s = (null == (i = e.xAxis) ? void 0 : i.options) || {};
              e.options.stacking &&
                e.reserveSpace() &&
                (e.stackKey = [
                  e.type,
                  aG(e.options.stack, ""),
                  t ? s.top : s.left,
                  t ? s.height : s.width
                ].join(","));
            }));
        }
        function aj() {
          let t = this.stacking;
          if (t) {
            var e;
            let i = t.stacks;
            (aF(i, (t, e) => {
              (aW(t), delete i[e]);
            }),
              null == (e = t.stackTotalGroup) || e.destroy());
          }
        }
        function aU() {
          this.stacking || (this.stacking = new a$(this));
        }
        function aV(t, e, i, s) {
          return (
            !aR(t) || t.x !== e || (s && t.stackKey !== s)
              ? (t = { x: e, index: 0, key: s, stackKey: s })
              : t.index++,
            (t.key = [i, e, t.index].join(",")),
            t
          );
        }
        function aZ() {
          let t,
            e = this,
            i = e.yAxis,
            s = e.stackKey || "",
            o = i.stacking.stacks,
            r = e.getColumn("x", !0),
            n = e.options.stacking,
            a = e[n + "Stacker"];
          a &&
            [s, "-" + s].forEach((i) => {
              var s;
              let n = r.length,
                l,
                h,
                d;
              for (; n--;)
                ((l = r[n]),
                  (t = e.getStackIndicator(t, l, e.index, i)),
                  (d =
                    null == (h = null == (s = o[i]) ? void 0 : s[l])
                      ? void 0
                      : h.points[t.key || ""]) && a.call(e, d, h, n));
            });
        }
        function aq(t, e, i) {
          let s = e.total ? 100 / e.total : 0;
          ((t[0] = az(t[0] * s)), (t[1] = az(t[1] * s)), (this.stackedYData[i] = t[1]));
        }
        function a_(t) {
          (this.is("column") || this.is("columnrange")) &&
            (this.options.centerInCategory && this.chart.series.length > 1
              ? aB.setStackedPoints.call(this, t, "group")
              : t.stacking.resetStacks());
        }
        function aK(t, e) {
          let i,
            s,
            o,
            r,
            n,
            a,
            l,
            h = e || this.options.stacking;
          if (!h || !this.reserveSpace() || ({ group: "xAxis" }[h] || "yAxis") !== t.coll) return;
          let d = this.getColumn("x", !0),
            c = this.getColumn(this.pointValKey || "y", !0),
            p = [],
            u = c.length,
            g = this.options,
            f = g.threshold || 0,
            m = g.startFromThreshold ? f : 0,
            x = g.stack,
            y = e ? "".concat(this.type, ",").concat(h) : this.stackKey || "",
            v = "-" + y,
            b = this.negStacks,
            k = t.stacking,
            w = k.stacks,
            M = k.oldStacks;
          for (k.stacksTouched += 1, l = 0; l < u; l++) {
            var S, T;
            let e = d[l] || 0,
              u = c[l],
              g = (aH(u) && u) || 0;
            ((a = (i = this.getStackIndicator(i, e, this.index)).key || ""),
              w[(n = (s = b && g < (m ? 0 : f)) ? v : y)] || (w[n] = {}),
              w[n][e] ||
                ((null == (S = M[n]) ? void 0 : S[e])
                  ? ((w[n][e] = M[n][e]), (w[n][e].total = null))
                  : (w[n][e] = new aI(t, t.options.stackLabels, !!s, e, x))),
              (o = w[n][e]),
              null !== u
                ? ((o.points[a] = o.points[this.index] = [aG(o.cumulative, m)]),
                  aR(o.cumulative) || (o.base = a),
                  (o.touched = k.stacksTouched),
                  i.index > 0 &&
                    !1 === this.singleStacks &&
                    (o.points[a][0] = o.points[this.index + "," + e + ",0"][0]))
                : (delete o.points[a], delete o.points[this.index]));
            let C = o.total || 0;
            ("percent" === h
              ? ((r = s ? y : v),
                (C =
                  b && (null == (T = w[r]) ? void 0 : T[e])
                    ? ((r = w[r][e]).total = Math.max(r.total || 0, C) + Math.abs(g))
                    : az(C + Math.abs(g))))
              : "group" === h
                ? aH(u) && C++
                : (C = az(C + g)),
              "group" === h
                ? (o.cumulative = (C || 1) - 1)
                : (o.cumulative = az(aG(o.cumulative, m) + g)),
              (o.total = C),
              null !== u &&
                (o.points[a].push(o.cumulative), (p[l] = o.cumulative), (o.hasValidPoints = !0)));
          }
          ("percent" === h && (k.usePercentage = !0),
            "group" !== h && (this.stackedYData = p),
            (k.oldStacks = {}));
        }
        class a$ {
          buildStacks() {
            let t,
              e,
              i = this.axis,
              s = i.series,
              o = "xAxis" === i.coll,
              r = i.options.reversedStacks,
              n = s.length;
            for (this.resetStacks(), this.usePercentage = !1, e = n; e--;)
              ((t = s[r ? e : n - e - 1]), o && t.setGroupedPoints(i), t.setStackedPoints(i));
            if (!o) for (e = 0; e < n; e++) s[e].modifyStacks();
            aX(i, "afterBuildStacks");
          }
          cleanStacks() {
            this.oldStacks &&
              ((this.stacks = this.oldStacks),
              aF(this.stacks, (t) => {
                aF(t, (t) => {
                  t.cumulative = t.total;
                });
              }));
          }
          resetStacks() {
            aF(this.stacks, (t) => {
              aF(t, (e, i) => {
                aH(e.touched) && e.touched < this.stacksTouched
                  ? (e.destroy(), delete t[i])
                  : ((e.total = null), (e.cumulative = null));
              });
            });
          }
          renderStackTotals() {
            var t;
            let e = this.axis,
              i = e.chart,
              s = i.renderer,
              o = this.stacks,
              r = aD(i, (null == (t = e.options.stackLabels) ? void 0 : t.animation) || !1),
              n = (this.stackTotalGroup =
                this.stackTotalGroup || s.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add());
            (n.translate(i.plotLeft, i.plotTop),
              aF(o, (t) => {
                aF(t, (t) => {
                  t.render(n);
                });
              }),
              n.animate({ opacity: 1 }, r));
          }
          constructor(t) {
            ((this.oldStacks = {}), (this.stacks = {}), (this.stacksTouched = 0), (this.axis = t));
          }
        }
        (D || (D = {})).compose = function (t, e, i) {
          let s = e.prototype,
            o = i.prototype;
          s.getStacks ||
            (aN(t, "init", aU),
            aN(t, "destroy", aj),
            (s.getStacks = aY),
            (o.getStackIndicator = aV),
            (o.modifyStacks = aZ),
            (o.percentStacker = aq),
            (o.setGroupedPoints = a_),
            (o.setStackedPoints = aK));
        };
        let aJ = D,
          { defined: aQ, merge: a0, isObject: a1 } = tu;
        class a2 extends nu {
          drawGraph() {
            let t = this.options,
              e = (this.gappedPath || this.getGraphPath).call(this),
              i = this.chart.styledMode;
            [this, ...this.zones].forEach((s, o) => {
              let r,
                n = s.graph,
                a = n ? "animate" : "attr",
                l = s.dashStyle || t.dashStyle;
              (n
                ? ((n.endX = this.preventGraphAnimation ? null : e.xMap), n.animate({ d: e }))
                : e.length &&
                  (s.graph = n =
                    this.chart.renderer
                      .path(e)
                      .addClass(
                        "highcharts-graph" +
                          (o ? " highcharts-zone-graph-".concat(o - 1, " ") : " ") +
                          ((o && s.className) || "")
                      )
                      .attr({ zIndex: 1 })
                      .add(this.group)),
                n &&
                  !i &&
                  ((r = {
                    stroke: (!o && t.lineColor) || s.color || this.color || "#cccccc",
                    "stroke-width": t.lineWidth || 0,
                    fill: (this.fillGraph && this.color) || "none"
                  }),
                  l
                    ? (r.dashstyle = l)
                    : "square" !== t.linecap &&
                      (r["stroke-linecap"] = r["stroke-linejoin"] = "round"),
                  n[a](r).shadow(
                    t.shadow && a0({ filterUnits: "userSpaceOnUse" }, a1(t.shadow) ? t.shadow : {})
                  )),
                n && ((n.startX = e.xMap), (n.isArea = e.isArea)));
            });
          }
          getGraphPath(t, e, i) {
            let s = this,
              o = s.options,
              r = [],
              n = [],
              a,
              l = o.step,
              h = (t = t || s.points).reversed;
            return (
              h && t.reverse(),
              (l = { right: 1, center: 2 }[l] || (l && 3)) && h && (l = 4 - l),
              (t = this.getValidPoints(
                t,
                !1,
                o.nullInteraction || !(o.connectNulls && !e && !i)
              )).forEach(function (h, d) {
                let c,
                  p = h.plotX,
                  u = h.plotY,
                  g = t[d - 1],
                  f = h.isNull || "number" != typeof u;
                ((h.leftCliff || (null == g ? void 0 : g.rightCliff)) && !i && (a = !0),
                  f && !aQ(e) && d > 0
                    ? (a = !o.connectNulls)
                    : f && !e
                      ? (a = !0)
                      : (0 === d || a
                          ? (c = [["M", h.plotX, h.plotY]])
                          : s.getPointSpline
                            ? (c = [s.getPointSpline(t, h, d)])
                            : l
                              ? (c =
                                  1 === l
                                    ? [["L", g.plotX, u]]
                                    : 2 === l
                                      ? [
                                          ["L", (g.plotX + p) / 2, g.plotY],
                                          ["L", (g.plotX + p) / 2, u]
                                        ]
                                      : [["L", p, g.plotY]]).push(["L", p, u])
                              : (c = [["L", p, u]]),
                        n.push(h.x),
                        l && (n.push(h.x), 2 === l && n.push(h.x)),
                        r.push.apply(r, c),
                        (a = !1)));
              }),
              (r.xMap = n),
              (s.graphPath = r),
              r
            );
          }
        }
        ((a2.defaultOptions = a0(nu.defaultOptions, { legendSymbol: "lineMarker" })),
          rY.registerSeriesType("line", a2));
        let {
            seriesTypes: { line: a3 }
          } = rY,
          { extend: a5, merge: a6, objectEach: a9, pick: a4 } = tu;
        class a8 extends a3 {
          drawGraph() {
            ((this.areaPath = []), super.drawGraph.apply(this));
            let { areaPath: t, options: e } = this;
            [this, ...this.zones].forEach((i, s) => {
              var o;
              let r = {},
                n = i.fillColor || e.fillColor,
                a = i.area,
                l = a ? "animate" : "attr";
              (a
                ? ((a.endX = this.preventGraphAnimation ? null : t.xMap), a.animate({ d: t }))
                : ((r.zIndex = 0),
                  ((a = i.area =
                    this.chart.renderer
                      .path(t)
                      .addClass(
                        "highcharts-area" +
                          (s ? " highcharts-zone-area-".concat(s - 1, " ") : " ") +
                          ((s && i.className) || "")
                      )
                      .add(this.group)).isArea = !0)),
                this.chart.styledMode ||
                  ((r.fill = n || i.color || this.color),
                  (r["fill-opacity"] = n ? 1 : null != (o = e.fillOpacity) ? o : 0.75),
                  a.css({ pointerEvents: this.stickyTracking ? "none" : "auto" })),
                a[l](r),
                (a.startX = t.xMap),
                (a.shiftUnit = e.step ? 2 : 1));
            });
          }
          getGraphPath(t) {
            let e,
              i,
              s,
              o = a3.prototype.getGraphPath,
              r = this.options,
              n = r.stacking,
              a = this.yAxis,
              l = [],
              h = [],
              d = this.index,
              c = a.stacking.stacks[this.stackKey],
              p = r.threshold,
              u = Math.round(a.getThreshold(r.threshold)),
              g = a4(r.connectNulls, "percent" === n),
              f = function (i, s, o) {
                let r = t[i],
                  g = n && c[r.x].points[d],
                  f = r[o + "Null"] || 0,
                  m = r[o + "Cliff"] || 0,
                  x,
                  y,
                  v = !0;
                (m || f
                  ? ((x = (f ? g[0] : g[1]) + m), (y = g[0] + m), (v = !!f))
                  : !n && t[s] && t[s].isNull && (x = y = p),
                  void 0 !== x &&
                    (h.push({
                      plotX: e,
                      plotY: null === x ? u : a.getThreshold(x),
                      isNull: v,
                      isCliff: !0
                    }),
                    l.push({ plotX: e, plotY: null === y ? u : a.getThreshold(y), doCurve: !1 })));
              };
            ((t = t || this.points), n && (t = this.getStackPoints(t)));
            for (let o = 0, r = t.length; o < r; ++o)
              (n || (t[o].leftCliff = t[o].rightCliff = t[o].leftNull = t[o].rightNull = void 0),
                (i = t[o].isNull),
                (e = a4(t[o].rectPlotX, t[o].plotX)),
                (s = n ? a4(t[o].yBottom, u) : u),
                (i && !g) ||
                  (g || f(o, o - 1, "left"),
                  (i && !n && g) || (h.push(t[o]), l.push({ x: o, plotX: e, plotY: s })),
                  g || f(o, o + 1, "right")));
            let m = o.call(this, h, !0, !0);
            l.reversed = !0;
            let x = o.call(this, l, !0, !0),
              y = x[0];
            y && "M" === y[0] && (x[0] = ["L", y[1], y[2]]);
            let v = m.concat(x);
            v.length && v.push(["Z"]);
            let b = o.call(this, h, !1, g);
            return (
              this.chart.series.length > 1 &&
                n &&
                h.some((t) => t.isCliff) &&
                (v.hasStackedCliffs = b.hasStackedCliffs = !0),
              (v.xMap = m.xMap),
              (this.areaPath = v),
              b
            );
          }
          getStackPoints(t) {
            let e = this,
              i = [],
              s = [],
              o = this.xAxis,
              r = this.yAxis,
              n = r.stacking.stacks[this.stackKey],
              a = {},
              l = r.series,
              h = l.length,
              d = r.options.reversedStacks ? 1 : -1,
              c = l.indexOf(e);
            if (((t = t || this.points), this.options.stacking)) {
              for (let e = 0; e < t.length; e++)
                ((t[e].leftNull = t[e].rightNull = void 0), (a[t[e].x] = t[e]));
              (a9(n, function (t, e) {
                null !== t.total && s.push(e);
              }),
                s.sort(function (t, e) {
                  return t - e;
                }));
              let p = l.map((t) => t.visible);
              s.forEach(function (t, u) {
                let g = 0,
                  f,
                  m;
                if (a[t] && !a[t].isNull)
                  (i.push(a[t]),
                    [-1, 1].forEach(function (i) {
                      let o = 1 === i ? "rightNull" : "leftNull",
                        r = n[s[u + i]],
                        g = 0;
                      if (r) {
                        let i = c;
                        for (; i >= 0 && i < h;) {
                          let s = l[i].index;
                          (!(f = r.points[s]) &&
                            (s === e.index
                              ? (a[t][o] = !0)
                              : p[i] && (m = n[t].points[s]) && (g -= m[1] - m[0])),
                            (i += d));
                        }
                      }
                      a[t][1 === i ? "rightCliff" : "leftCliff"] = g;
                    }));
                else {
                  let e = c;
                  for (; e >= 0 && e < h;) {
                    let i = l[e].index;
                    if ((f = n[t].points[i])) {
                      g = f[1];
                      break;
                    }
                    e += d;
                  }
                  ((g = a4(g, 0)),
                    (g = r.translate(g, 0, 1, 0, 1)),
                    i.push({
                      isNull: !0,
                      plotX: o.translate(t, 0, 0, 0, 1),
                      x: t,
                      plotY: g,
                      yBottom: g
                    }));
                }
              });
            }
            return i;
          }
        }
        ((a8.defaultOptions = a6(a3.defaultOptions, { threshold: 0, legendSymbol: "areaMarker" })),
          a5(a8.prototype, { singleStacks: !1 }),
          rY.registerSeriesType("area", a8));
        let { line: a7 } = rY.seriesTypes,
          { merge: lt, pick: le } = tu;
        class li extends a7 {
          getPointSpline(t, e, i) {
            let s,
              o,
              r,
              n,
              a = e.plotX || 0,
              l = e.plotY || 0,
              h = t[i - 1],
              d = t[i + 1];
            function c(t) {
              return t && !t.isNull && !1 !== t.doCurve && !e.isCliff;
            }
            if (c(h) && c(d)) {
              let t = h.plotX || 0,
                i = h.plotY || 0,
                c = d.plotX || 0,
                p = d.plotY || 0,
                u = 0;
              ((s = (1.5 * a + t) / 2.5),
                (o = (1.5 * l + i) / 2.5),
                (r = (1.5 * a + c) / 2.5),
                (n = (1.5 * l + p) / 2.5),
                r !== s && (u = ((n - o) * (r - a)) / (r - s) + l - n),
                (o += u),
                (n += u),
                o > i && o > l
                  ? ((o = Math.max(i, l)), (n = 2 * l - o))
                  : o < i && o < l && ((o = Math.min(i, l)), (n = 2 * l - o)),
                n > p && n > l
                  ? ((n = Math.max(p, l)), (o = 2 * l - n))
                  : n < p && n < l && ((n = Math.min(p, l)), (o = 2 * l - n)),
                (e.rightContX = r),
                (e.rightContY = n),
                (e.controlPoints = { low: [s, o], high: [r, n] }));
            }
            let p = [
              "C",
              le(h.rightContX, h.plotX, 0),
              le(h.rightContY, h.plotY, 0),
              le(s, a, 0),
              le(o, l, 0),
              a,
              l
            ];
            return ((h.rightContX = h.rightContY = void 0), p);
          }
        }
        ((li.defaultOptions = lt(a7.defaultOptions)), rY.registerSeriesType("spline", li));
        let ls = li,
          {
            area: lo,
            area: { prototype: lr }
          } = rY.seriesTypes,
          { extend: ln, merge: la } = tu;
        class ll extends ls {}
        ((ll.defaultOptions = la(ls.defaultOptions, lo.defaultOptions)),
          ln(ll.prototype, {
            getGraphPath: lr.getGraphPath,
            getStackPoints: lr.getStackPoints,
            drawGraph: lr.drawGraph
          }),
          rY.registerSeriesType("areaspline", ll));
        let { animObject: lh } = et,
          { parse: ld } = tq,
          { noop: lc } = G,
          {
            clamp: lp,
            crisp: lu,
            defined: lg,
            extend: lf,
            fireEvent: lm,
            isArray: lx,
            isNumber: ly,
            merge: lv,
            pick: lb,
            objectEach: lk
          } = tu;
        class lw extends nu {
          animate(t) {
            let e,
              i,
              s = this,
              o = this.yAxis,
              r = o.pos,
              n = o.reversed,
              a = s.options,
              { clipOffset: l, inverted: h } = this.chart,
              d = {},
              c = h ? "translateX" : "translateY";
            t && l
              ? ((d.scaleY = 0.001),
                (i = lp(o.toPixels(a.threshold || 0), r, r + o.len)),
                h
                  ? (d.translateX = (i += n ? -Math.floor(l[0]) : Math.ceil(l[2])) - o.len)
                  : (d.translateY = i += n ? Math.ceil(l[0]) : -Math.floor(l[2])),
                s.clipBox && s.setClip(),
                s.group.attr(d))
              : ((e = Number(s.group.attr(c))),
                s.group.animate(
                  { scaleY: 1 },
                  lf(lh(s.options.animation), {
                    step: function (t, i) {
                      s.group && ((d[c] = e + i.pos * (r - e)), s.group.attr(d));
                    }
                  })
                ));
          }
          init(t, e) {
            super.init.apply(this, arguments);
            let i = this;
            (t = i.chart).hasRendered &&
              t.series.forEach(function (t) {
                t.type === i.type && (t.isDirty = !0);
              });
          }
          getColumnMetrics() {
            var t, e;
            let i = this,
              s = i.options,
              o = i.xAxis,
              r = i.yAxis,
              n = o.options.reversedStacks,
              a = (o.reversed && !n) || (!o.reversed && n),
              l = {},
              h,
              d = 0;
            !1 === s.grouping
              ? (d = 1)
              : i.chart.series.forEach(function (t) {
                  let e,
                    s = t.yAxis,
                    o = t.options;
                  t.type === i.type &&
                    t.reserveSpace() &&
                    r.len === s.len &&
                    r.pos === s.pos &&
                    (o.stacking && "group" !== o.stacking
                      ? (void 0 === l[(h = t.stackKey)] && (l[h] = d++), (e = l[h]))
                      : !1 !== o.grouping && (e = d++),
                    (t.columnIndex = e));
                });
            let c = Math.min(
                Math.abs(o.transA) *
                  ((!(null == (t = o.brokenAxis) ? void 0 : t.hasBreaks) &&
                    (null == (e = o.ordinal) ? void 0 : e.slope)) ||
                    s.pointRange ||
                    o.closestPointRange ||
                    o.tickInterval ||
                    1),
                o.len
              ),
              p = c * s.groupPadding,
              u = (c - 2 * p) / (d || 1),
              g = Math.min(
                s.maxPointWidth || o.len,
                lb(s.pointWidth, u * (1 - 2 * s.pointPadding))
              ),
              f = (i.columnIndex || 0) + +!!a;
            return (
              (i.columnMetrics = {
                width: g,
                offset: (u - g) / 2 + (p + f * u - c / 2) * (a ? -1 : 1),
                paddedWidth: u,
                columnCount: d
              }),
              i.columnMetrics
            );
          }
          crispCol(t, e, i, s) {
            let o = this.borderWidth,
              r = this.chart.inverted;
            return (
              (s = lu(e + s, o, r) - (e = lu(e, o, r))),
              this.options.crisp && (i = lu(t + i, o) - (t = lu(t, o))),
              { x: t, y: e, width: i, height: s }
            );
          }
          adjustForMissingColumns(t, e, i, s) {
            if (!i.isNull && s.columnCount > 1) {
              var o;
              let r = this.xAxis.series.filter((t) => t.visible).map((t) => t.index),
                n = 0,
                a = 0;
              (lk(null == (o = this.xAxis.stacking) ? void 0 : o.stacks, (t) => {
                var e;
                let s =
                    "number" == typeof i.x
                      ? null == (e = t[i.x.toString()])
                        ? void 0
                        : e.points
                      : void 0,
                  o = null == s ? void 0 : s[this.index],
                  l = {};
                if (s && lx(o)) {
                  let t = this.index,
                    e = Object.keys(s)
                      .filter((t) => !t.match(",") && s[t] && s[t].length > 1)
                      .map(parseFloat)
                      .filter((t) => -1 !== r.indexOf(t))
                      .filter((e) => {
                        let i = this.chart.series[e].options,
                          s = i.stacking && i.stack;
                        if (lg(s)) {
                          if (ly(l[s])) return (t === e && (t = l[s]), !1);
                          l[s] = e;
                        }
                        return !0;
                      })
                      .sort((t, e) => e - t);
                  ((n = e.indexOf(t)), (a = e.length));
                }
              }),
                (n = this.xAxis.reversed ? a - 1 - n : n));
              let l = (a - 1) * s.paddedWidth + e;
              t = (i.plotX || 0) + l / 2 - e - n * s.paddedWidth;
            }
            return t;
          }
          translate() {
            let t = this,
              e = t.chart,
              i = t.options,
              s = (t.dense = t.closestPointRange * t.xAxis.transA < 2),
              o = (t.borderWidth = lb(i.borderWidth, +!s)),
              r = t.xAxis,
              n = t.yAxis,
              a = i.threshold,
              l = lb(i.minPointLength, 5),
              h = t.getColumnMetrics(),
              d = h.width,
              c = (t.pointXOffset = h.offset),
              p = t.dataMin,
              u = t.dataMax,
              g = (t.translatedThreshold = n.getThreshold(a)),
              f = (t.barW = Math.max(d, 1 + 2 * o));
            (i.pointPadding && i.crisp && (f = Math.ceil(f)),
              nu.prototype.translate.apply(t),
              t.points.forEach(function (s) {
                let o = lb(s.yBottom, g),
                  m = 999 + Math.abs(o),
                  x = s.plotX || 0,
                  y = lp(s.plotY, -m, n.len + m),
                  v,
                  b = Math.min(y, o),
                  k = Math.max(y, o) - b,
                  w = d,
                  M = x + c,
                  S = f;
                (l &&
                  Math.abs(k) < l &&
                  ((k = l),
                  (v = (!n.reversed && !s.negative) || (n.reversed && s.negative)),
                  ly(a) &&
                    ly(u) &&
                    s.y === a &&
                    u <= a &&
                    (n.min || 0) < a &&
                    (p !== u || (n.max || 0) <= a) &&
                    ((v = !v), (s.negative = !s.negative)),
                  (b = Math.abs(b - g) > l ? o - l : g - (v ? l : 0))),
                  lg(s.options.pointWidth) &&
                    (M -= Math.round(((w = S = Math.ceil(s.options.pointWidth)) - d) / 2)),
                  i.centerInCategory && (M = t.adjustForMissingColumns(M, w, s, h)),
                  (s.barX = M),
                  (s.pointWidth = w),
                  (s.tooltipPos = e.inverted
                    ? [
                        lp(
                          n.len + n.pos - e.plotLeft - y,
                          n.pos - e.plotLeft,
                          n.len + n.pos - e.plotLeft
                        ),
                        r.len + r.pos - e.plotTop - M - S / 2,
                        k
                      ]
                    : [
                        r.left - e.plotLeft + M + S / 2,
                        lp(y + n.pos - e.plotTop, n.pos - e.plotTop, n.len + n.pos - e.plotTop),
                        k
                      ]),
                  (s.shapeType = t.pointClass.prototype.shapeType || "roundedRect"),
                  (s.shapeArgs = t.crispCol(M, b, S, s.isNull ? 0 : k)));
              }),
              lm(this, "afterColumnTranslate"));
          }
          drawGraph() {
            this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
          }
          pointAttribs(t, e) {
            var i, s;
            let o = this.options,
              r = this.pointAttrToOptions || {},
              n = r.stroke || "borderColor",
              a = r["stroke-width"] || "borderWidth",
              l,
              h,
              d,
              c = (t && t.color) || this.color,
              p = (t && t[n]) || o[n] || c,
              u = (t && t.options.dashStyle) || o.dashStyle,
              g = (t && t[a]) || o[a] || this[a] || 0,
              f =
                (null == t ? void 0 : t.isNull) && o.nullInteraction
                  ? 0
                  : null != (i = null != (s = null == t ? void 0 : t.opacity) ? s : o.opacity)
                    ? i
                    : 1;
            (t &&
              this.zones.length &&
              ((h = t.getZone()),
              (c = t.options.color || (h && (h.color || t.nonZonedColor)) || this.color),
              h && ((p = h.borderColor || p), (u = h.dashStyle || u), (g = h.borderWidth || g))),
              e &&
                t &&
                ((d = (l = lv(o.states[e], (t.options.states && t.options.states[e]) || {}))
                  .brightness),
                (c = l.color || (void 0 !== d && ld(c).brighten(l.brightness).get()) || c),
                (p = l[n] || p),
                (g = l[a] || g),
                (u = l.dashStyle || u),
                (f = lb(l.opacity, f))));
            let m = { fill: c, stroke: p, "stroke-width": g, opacity: f };
            return (u && (m.dashstyle = u), m);
          }
          drawPoints() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.points,
              e,
              i = this,
              s = this.chart,
              o = i.options,
              r = o.nullInteraction,
              n = s.renderer,
              a = o.animationLimit || 250;
            t.forEach(function (t) {
              let l = t.plotY,
                h = t.graphic,
                d = !!h,
                c = h && s.pointCount < a ? "animate" : "attr";
              ly(l) && (null !== t.y || r)
                ? ((e = t.shapeArgs),
                  h && t.hasNewShapeType() && (h = h.destroy()),
                  i.enabledDataSorting &&
                    (t.startXPos = i.xAxis.reversed ? -((e && e.width) || 0) : i.xAxis.width),
                  !h &&
                    ((t.graphic = h = n[t.shapeType](e).add(t.group || i.group)),
                    h &&
                      i.enabledDataSorting &&
                      s.hasRendered &&
                      s.pointCount < a &&
                      (h.attr({ x: t.startXPos }), (d = !0), (c = "animate"))),
                  h && d && h[c](lv(e)),
                  s.styledMode ||
                    h[c](i.pointAttribs(t, t.selected && "select")).shadow(
                      !1 !== t.allowShadow && o.shadow
                    ),
                  h &&
                    (h.addClass(t.getClassName(), !0),
                    h.attr({ visibility: t.visible ? "inherit" : "hidden" })))
                : h && (t.graphic = h.destroy());
            });
          }
          drawTracker() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.points,
              e,
              i = this,
              s = i.chart,
              o = s.pointer,
              r = function (t) {
                null == o || o.normalize(t);
                let e = null == o ? void 0 : o.getPointFromEvent(t);
                o &&
                  e &&
                  i.options.enableMouseTracking &&
                  (s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop, {
                    visiblePlotOnly: !0
                  }) ||
                    (null == o ? void 0 : o.inClass(t.target, "highcharts-data-label"))) &&
                  ((o.isDirectTouch = !0), e.onMouseOver(t));
              };
            (t.forEach(function (t) {
              ((e = lx(t.dataLabels) ? t.dataLabels : t.dataLabel ? [t.dataLabel] : []),
                t.graphic && (t.graphic.element.point = t),
                e.forEach(function (e) {
                  (e.div || e.element).point = t;
                }));
            }),
              i._hasTracking ||
                (i.trackerGroups.forEach(function (t) {
                  i[t] &&
                    (i[t]
                      .addClass("highcharts-tracker")
                      .on("mouseover", r)
                      .on("mouseout", function (t) {
                        null == o || o.onTrackerMouseOut(t);
                      })
                      .on("touchstart", r),
                    !s.styledMode && i.options.cursor && i[t].css({ cursor: i.options.cursor }));
                }),
                (i._hasTracking = !0)),
              lm(this, "afterDrawTracker"));
          }
          remove() {
            let t = this,
              e = t.chart;
            (e.hasRendered &&
              e.series.forEach(function (e) {
                e.type === t.type && (e.isDirty = !0);
              }),
              nu.prototype.remove.apply(t, arguments));
          }
        }
        ((lw.defaultOptions = lv(nu.defaultOptions, {
          borderRadius: 3,
          centerInCategory: !1,
          groupPadding: 0.2,
          marker: null,
          pointPadding: 0.1,
          minPointLength: 0,
          cropThreshold: 50,
          pointRange: null,
          states: {
            hover: { halo: !1, brightness: 0.1 },
            select: { color: "#cccccc", borderColor: "#000000" }
          },
          dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 },
          startFromThreshold: !0,
          stickyTracking: !1,
          tooltip: { distance: 6 },
          threshold: 0,
          borderColor: "#ffffff"
        })),
          lf(lw.prototype, {
            directTouch: !0,
            getSymbol: lc,
            negStacks: !0,
            trackerGroups: ["group", "dataLabelsGroup"]
          }),
          rY.registerSeriesType("column", lw));
        let lM = lw,
          { getDeferredAnimation: lS } = et,
          { format: lT } = eO,
          {
            defined: lC,
            extend: lA,
            fireEvent: lP,
            getAlignFactor: lL,
            isArray: lO,
            isString: lE,
            merge: lI,
            objectEach: lD,
            pick: lB,
            pInt: lN,
            splat: lz
          } = tu;
        !(function (t) {
          function e() {
            return l(this).some((t) => (null == t ? void 0 : t.enabled));
          }
          function i(t, e, i, s, o) {
            let { chart: r, enabledDataSorting: n } = this,
              a = this.isCartesian && r.inverted,
              l = t.plotX,
              h = t.plotY,
              d = i.rotation || 0,
              c =
                lC(l) &&
                lC(h) &&
                r.isInsidePlot(l, Math.round(h), {
                  inverted: a,
                  paneCoordinates: !0,
                  series: this
                }),
              p = 0 === d && "justify" === lB(i.overflow, n ? "none" : "justify"),
              u =
                this.visible &&
                !1 !== t.visible &&
                lC(l) &&
                (t.series.forceDL ||
                  (n && !p) ||
                  c ||
                  (lB(i.inside, !!this.options.stacking) &&
                    s &&
                    r.isInsidePlot(l, a ? s.x + 1 : s.y + s.height - 1, {
                      inverted: a,
                      paneCoordinates: !0,
                      series: this
                    }))),
              g = t.pos();
            if (u && g) {
              var f, m;
              let l = e.getBBox(),
                h = e.getBBox(void 0, 0);
              if (
                ((s = lA({ x: g[0], y: Math.round(g[1]), width: 0, height: 0 }, s || {})),
                "plotEdges" === i.alignTo &&
                  this.isCartesian &&
                  ((s[a ? "x" : "y"] = 0),
                  (s[a ? "width" : "height"] = (null == (f = this.yAxis) ? void 0 : f.len) || 0)),
                lA(i, { width: l.width, height: l.height }),
                (m = s),
                n && this.xAxis && !p && this.setDataLabelStartPos(t, e, o, c, m),
                e.align(lI(i, { width: h.width, height: h.height }), !1, s, !1),
                (e.alignAttr.x += lL(i.align) * (h.width - l.width)),
                (e.alignAttr.y += lL(i.verticalAlign) * (h.height - l.height)),
                e[e.placed ? "animate" : "attr"]({
                  "text-align": e.alignAttr["text-align"] || "center",
                  x: e.alignAttr.x + (l.width - h.width) / 2,
                  y: e.alignAttr.y + (l.height - h.height) / 2,
                  rotationOriginX: (e.width || 0) / 2,
                  rotationOriginY: (e.height || 0) / 2
                }),
                p && s.height >= 0)
              )
                this.justifyDataLabel(e, i, e.alignAttr, l, s, o);
              else if (lB(i.crop, !0)) {
                let { x: t, y: i } = e.alignAttr;
                u =
                  r.isInsidePlot(t, i, { paneCoordinates: !0, series: this }) &&
                  r.isInsidePlot(t + l.width - 1, i + l.height - 1, {
                    paneCoordinates: !0,
                    series: this
                  });
              }
              i.shape && !d && e[o ? "attr" : "animate"]({ anchorX: g[0], anchorY: g[1] });
            }
            (o && n && (e.placed = !1),
              u || (n && !p) ? (e.show(), (e.placed = !0)) : (e.hide(), (e.placed = !1)));
          }
          function s() {
            return this.plotGroup(
              "dataLabelsGroup",
              "data-labels",
              this.hasRendered ? "inherit" : "hidden",
              this.options.dataLabels.zIndex || 6
            );
          }
          function o(t) {
            let e = this.hasRendered || 0,
              i = this.initDataLabelsGroup().attr({ opacity: +e });
            return (
              !e &&
                i &&
                (this.visible && i.show(),
                this.options.animation ? i.animate({ opacity: 1 }, t) : i.attr({ opacity: 1 })),
              i
            );
          }
          function r(t) {
            var e;
            let i;
            t = t || this.points;
            let s = this,
              o = s.chart,
              r = s.options,
              n = o.renderer,
              { backgroundColor: h, plotBackgroundColor: d } = o.options.chart,
              c = n.getContrast((lE(d) && d) || (lE(h) && h) || "#000000"),
              p = l(s),
              { animation: u, defer: g } = p[0],
              f = g ? lS(o, u, s) : { defer: 0, duration: 0 };
            (lP(this, "drawDataLabels"),
              (null == (e = s.hasDataLabels) ? void 0 : e.call(s)) &&
                ((i = this.initDataLabels(f)),
                t.forEach((t) => {
                  var e, l, h;
                  let d = t.dataLabels || [],
                    u = t.color || s.color;
                  lz(
                    a(p, t.dlOptions || (null == (e = t.options) ? void 0 : e.dataLabels))
                  ).forEach((e, a) => {
                    var l;
                    let h =
                        e.enabled &&
                        (t.visible || t.dataLabelOnHidden) &&
                        (!t.isNull || t.dataLabelOnNull) &&
                        (function (t, e) {
                          let i = e.filter;
                          if (i) {
                            let e = i.operator,
                              s = t[i.property],
                              o = i.value;
                            return (
                              (">" === e && s > o) ||
                              ("<" === e && s < o) ||
                              (">=" === e && s >= o) ||
                              ("<=" === e && s <= o) ||
                              ("==" === e && s == o) ||
                              ("===" === e && s === o) ||
                              ("!=" === e && s != o) ||
                              ("!==" === e && s !== o) ||
                              !1
                            );
                          }
                          return !0;
                        })(t, e),
                      { backgroundColor: p, borderColor: g, distance: f, style: m = {} } = e,
                      x,
                      y,
                      v,
                      b = {},
                      k = d[a],
                      w = !k,
                      M;
                    (h &&
                      ((y = lC((x = lB(e[t.formatPrefix + "Format"], e.format)))
                        ? lT(x, t, o)
                        : (e[t.formatPrefix + "Formatter"] || e.formatter).call(t, e)),
                      (v = e.rotation),
                      !o.styledMode &&
                        ((m.color = lB(
                          e.color,
                          m.color,
                          lE(s.color) ? s.color : void 0,
                          "#000000"
                        )),
                        "contrast" === m.color
                          ? ("none" !== p && (M = p),
                            (t.contrastColor = n.getContrast(
                              ("auto" !== M && lE(M) && M) || (lE(u) ? u : "")
                            )),
                            (m.color =
                              M || (!lC(f) && e.inside) || 0 > lN(f || 0) || r.stacking
                                ? t.contrastColor
                                : c))
                          : delete t.contrastColor,
                        r.cursor && (m.cursor = r.cursor)),
                      (b = { r: e.borderRadius || 0, rotation: v, padding: e.padding, zIndex: 1 }),
                      o.styledMode ||
                        ((b.fill = "auto" === p ? t.color : p),
                        (b.stroke = "auto" === g ? t.color : g),
                        (b["stroke-width"] = e.borderWidth)),
                      lD(b, (t, e) => {
                        void 0 === t && delete b[e];
                      })),
                      !k ||
                        (h &&
                          lC(y) &&
                          !!(k.div || (null == (l = k.text) ? void 0 : l.foreignObject)) ==
                            !!e.useHTML &&
                          ((k.rotation && e.rotation) || k.rotation === e.rotation)) ||
                        ((k = void 0), (w = !0)),
                      h &&
                        lC(y) &&
                        (k
                          ? (b.text = y)
                          : (k = n.label(
                              y,
                              0,
                              0,
                              e.shape,
                              void 0,
                              void 0,
                              e.useHTML,
                              void 0,
                              "data-label"
                            )).addClass(
                              " highcharts-data-label-color-" +
                                t.colorIndex +
                                " " +
                                (e.className || "") +
                                (e.useHTML ? " highcharts-tracker" : "")
                            ),
                        k &&
                          ((k.options = e),
                          k.attr(b),
                          o.styledMode
                            ? m.width &&
                              k.css({
                                width: m.width,
                                textOverflow: m.textOverflow,
                                whiteSpace: m.whiteSpace
                              })
                            : k.css(m).shadow(e.shadow),
                          lP(k, "beforeAddingDataLabel", { labelOptions: e, point: t }),
                          k.added || k.add(i),
                          s.alignDataLabel(t, k, e, void 0, w),
                          (k.isActive = !0),
                          d[a] && d[a] !== k && d[a].destroy(),
                          (d[a] = k))));
                  });
                  let g = d.length;
                  for (; g--;)
                    (null == (l = d[g]) ? void 0 : l.isActive)
                      ? (d[g].isActive = !1)
                      : (null == (h = d[g]) || h.destroy(), d.splice(g, 1));
                  ((t.dataLabel = d[0]), (t.dataLabels = d));
                })),
              lP(this, "afterDrawDataLabels"));
          }
          function n(t, e, i, s, o, r) {
            let n = this.chart,
              a = e.align,
              l = e.verticalAlign,
              h = t.box ? 0 : t.padding || 0,
              d = n.inverted ? this.yAxis : this.xAxis,
              c = d ? d.left - n.plotLeft : 0,
              p = n.inverted ? this.xAxis : this.yAxis,
              u = p ? p.top - n.plotTop : 0,
              { x: g = 0, y: f = 0 } = e,
              m,
              x;
            return (
              (m = (i.x || 0) + h + c) < 0 &&
                ("right" === a && g >= 0 ? ((e.align = "left"), (e.inside = !0)) : (g -= m),
                (x = !0)),
              (m = (i.x || 0) + s.width - h + c) > n.plotWidth &&
                ("left" === a && g <= 0
                  ? ((e.align = "right"), (e.inside = !0))
                  : (g += n.plotWidth - m),
                (x = !0)),
              (m = i.y + h + u) < 0 &&
                ("bottom" === l && f >= 0 ? ((e.verticalAlign = "top"), (e.inside = !0)) : (f -= m),
                (x = !0)),
              (m = (i.y || 0) + s.height - h + u) > n.plotHeight &&
                ("top" === l && f <= 0
                  ? ((e.verticalAlign = "bottom"), (e.inside = !0))
                  : (f += n.plotHeight - m),
                (x = !0)),
              x && ((e.x = g), (e.y = f), (t.placed = !r), t.align(e, void 0, o)),
              x
            );
          }
          function a(t, e) {
            let i = [],
              s;
            if (lO(t) && !lO(e))
              i = t.map(function (t) {
                return lI(t, e);
              });
            else if (lO(e) && !lO(t))
              i = e.map(function (e) {
                return lI(t, e);
              });
            else if (lO(t) || lO(e)) {
              if (lO(t) && lO(e))
                for (s = Math.max(t.length, e.length); s--;) i[s] = lI(t[s], e[s]);
            } else i = lI(t, e);
            return i;
          }
          function l(t) {
            var e, i;
            let s = t.chart.options.plotOptions;
            return lz(
              a(
                a(
                  null == s || null == (e = s.series) ? void 0 : e.dataLabels,
                  null == s || null == (i = s[t.type]) ? void 0 : i.dataLabels
                ),
                t.options.dataLabels
              )
            );
          }
          function h(t, e, i, s, o) {
            let r = this.chart,
              n = r.inverted,
              a = this.xAxis,
              l = a.reversed,
              h = ((n ? e.height : e.width) || 0) / 2,
              d = t.pointWidth,
              c = d ? d / 2 : 0;
            ((e.startXPos = n ? o.x : l ? -h - c : a.width - h + c),
              (e.startYPos = n ? (l ? this.yAxis.height - h + c : -h - c) : o.y),
              s
                ? "hidden" === e.visibility &&
                  (e.show(), e.attr({ opacity: 0 }).animate({ opacity: 1 }))
                : e.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, e.hide),
              r.hasRendered && (i && e.attr({ x: e.startXPos, y: e.startYPos }), (e.placed = !0)));
          }
          t.compose = function (t) {
            let l = t.prototype;
            l.initDataLabels ||
              ((l.initDataLabels = o),
              (l.initDataLabelsGroup = s),
              (l.alignDataLabel = i),
              (l.drawDataLabels = r),
              (l.justifyDataLabel = n),
              (l.mergeArrays = a),
              (l.setDataLabelStartPos = h),
              (l.hasDataLabels = e));
          };
        })(B || (B = {}));
        let lR = B,
          { composed: lW } = G,
          { series: lX } = rY,
          { merge: lH, pushUnique: lF } = tu;
        function lG(t, e, i, s, o) {
          var r, n, a, l, h;
          let { chart: d, options: c } = this,
            p = d.inverted,
            u = (null == (l = this.xAxis) ? void 0 : l.len) || d.plotSizeX || 0,
            g = (null == (h = this.yAxis) ? void 0 : h.len) || d.plotSizeY || 0,
            f = t.dlBox || t.shapeArgs,
            m =
              null != (r = t.below)
                ? r
                : (t.plotY || 0) > (null != (n = this.translatedThreshold) ? n : g),
            x = null != (a = i.inside) ? a : !!c.stacking;
          if (f) {
            if (((s = lH(f)), "allow" !== i.overflow || !1 !== i.crop || !1 !== c.clip)) {
              s.y < 0 && ((s.height += s.y), (s.y = 0));
              let t = s.y + s.height - g;
              t > 0 && t < s.height - 1 && (s.height -= t);
            }
            (p &&
              (s = {
                x: g - s.y - s.height,
                y: u - s.x - s.width,
                width: s.height,
                height: s.width
              }),
              x ||
                (p
                  ? ((s.x += m ? 0 : s.width), (s.width = 0))
                  : ((s.y += m ? s.height : 0), (s.height = 0))));
          }
          (null != i.align || (i.align = !p || x ? "center" : m ? "right" : "left"),
            null != i.verticalAlign || (i.verticalAlign = p || x ? "middle" : m ? "top" : "bottom"),
            lX.prototype.alignDataLabel.call(this, t, e, i, s, o),
            i.inside && t.contrastColor && e.css({ color: t.contrastColor }));
        }
        (N || (N = {})).compose = function (t) {
          (lR.compose(lX), lF(lW, "ColumnDataLabel") && (t.prototype.alignDataLabel = lG));
        };
        let lY = N,
          { extend: lj, merge: lU } = tu;
        class lV extends lM {}
        ((lV.defaultOptions = lU(lM.defaultOptions, {})),
          lj(lV.prototype, { inverted: !0 }),
          rY.registerSeriesType("bar", lV));
        let { column: lZ, line: lq } = rY.seriesTypes,
          { addEvent: l_, extend: lK, merge: l$ } = tu;
        class lJ extends lq {
          applyJitter() {
            let t = this,
              e = this.options.jitter,
              i = this.points.length;
            e &&
              this.points.forEach(function (s, o) {
                ["x", "y"].forEach(function (r, n) {
                  if (e[r] && !s.isNull) {
                    let a = "plot".concat(r.toUpperCase()),
                      l = t["".concat(r, "Axis")],
                      h = e[r] * l.transA;
                    if (l && !l.logarithmic) {
                      let t,
                        e = Math.max(0, (s[a] || 0) - h),
                        d = Math.min(l.len, (s[a] || 0) + h);
                      ((s[a] = e + (d - e) * ((t = 1e4 * Math.sin(o + n * i)) - Math.floor(t))),
                        "x" === r && (s.clientX = s.plotX));
                    }
                  }
                });
              });
          }
          drawGraph() {
            this.options.lineWidth
              ? super.drawGraph()
              : this.graph && (this.graph = this.graph.destroy());
          }
        }
        ((lJ.defaultOptions = l$(lq.defaultOptions, {
          lineWidth: 0,
          findNearestPointBy: "xy",
          jitter: { x: 0, y: 0 },
          marker: { enabled: !0 },
          tooltip: {
            headerFormat:
              '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
          }
        })),
          lK(lJ.prototype, {
            drawTracker: lZ.prototype.drawTracker,
            sorted: !1,
            requireSorting: !1,
            noSharedTooltip: !0,
            trackerGroups: ["group", "markerGroup", "dataLabelsGroup"]
          }),
          l_(lJ, "afterTranslate", function () {
            this.applyJitter();
          }),
          rY.registerSeriesType("scatter", lJ));
        let { deg2rad: lQ } = G,
          { fireEvent: l0, isNumber: l1, pick: l2, relativeLength: l3 } = tu;
        (((v = z || (z = {})).getCenter = function () {
          let t = this.options,
            e = this.chart,
            i = 2 * (t.slicedOffset || 0),
            s = e.plotWidth - 2 * i,
            o = e.plotHeight - 2 * i,
            r = t.center,
            n = Math.min(s, o),
            a = t.thickness,
            l,
            h = t.size,
            d = t.innerSize || 0,
            c,
            p;
          ("string" == typeof h && (h = parseFloat(h)),
            "string" == typeof d && (d = parseFloat(d)));
          let u = [
            l2(null == r ? void 0 : r[0], "50%"),
            l2(null == r ? void 0 : r[1], "50%"),
            l2(h && h < 0 ? void 0 : t.size, "100%"),
            l2(d && d < 0 ? void 0 : t.innerSize || 0, "0%")
          ];
          for (!e.angular || this instanceof nu || (u[3] = 0), c = 0; c < 4; ++c)
            ((p = u[c]),
              (l = c < 2 || (2 === c && /%$/.test(p))),
              (u[c] = l3(p, [s, o, n, u[2]][c]) + (l ? i : 0)));
          return (
            u[3] > u[2] && (u[3] = u[2]),
            l1(a) && 2 * a < u[2] && a > 0 && (u[3] = u[2] - 2 * a),
            l0(this, "afterGetCenter", { positions: u }),
            u
          );
        }),
          (v.getStartAndEndRadians = function (t, e) {
            let i = l1(t) ? t : 0,
              s = l1(e) && e > i && e - i < 360 ? e : i + 360;
            return { start: lQ * (i + -90), end: lQ * (s + -90) };
          }));
        let l5 = z,
          { setAnimation: l6 } = et,
          {
            addEvent: l9,
            defined: l4,
            extend: l8,
            isNumber: l7,
            pick: ht,
            relativeLength: he
          } = tu;
        class hi extends rr {
          getConnectorPath(t) {
            let e = t.dataLabelPosition,
              i = t.options || {},
              s = i.connectorShape,
              o = this.connectorShapes[s] || s;
            return (
              (e &&
                o.call(this, { ...e.computed, alignment: e.alignment }, e.connectorPosition, i)) ||
              []
            );
          }
          getTranslate() {
            return (this.sliced && this.slicedTranslation) || { translateX: 0, translateY: 0 };
          }
          haloPath(t) {
            let e = this.shapeArgs;
            return this.sliced || !this.visible
              ? []
              : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, {
                  innerR: e.r - 1,
                  start: e.start,
                  end: e.end,
                  borderRadius: e.borderRadius
                });
          }
          isValid() {
            return l7(this.y) && this.y >= 0;
          }
          setVisible(t) {
            let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            t !== this.visible &&
              this.update({ visible: null != t ? t : !this.visible }, e, void 0, !1);
          }
          slice(t, e, i) {
            let s = this.series;
            (l6(i, s.chart),
              (e = ht(e, !0)),
              (this.sliced = this.options.sliced = t = l4(t) ? t : !this.sliced),
              (s.options.data[s.data.indexOf(this)] = this.options),
              this.graphic && this.graphic.animate(this.getTranslate()));
          }
          constructor(t, e, i) {
            (super(t, e, i),
              (this.half = 0),
              null != this.name || (this.name = t.chart.options.lang.pieSliceName));
            let s = (t) => {
              this.slice("select" === t.type);
            };
            (l9(this, "select", s), l9(this, "unselect", s));
          }
        }
        l8(hi.prototype, {
          connectorShapes: {
            fixedOffset: function (t, e, i) {
              let s = e.breakAt,
                o = e.touchingSliceAt,
                r = i.softConnector
                  ? [
                      "C",
                      t.x + ("left" === t.alignment ? -5 : 5),
                      t.y,
                      2 * s.x - o.x,
                      2 * s.y - o.y,
                      s.x,
                      s.y
                    ]
                  : ["L", s.x, s.y];
              return [["M", t.x, t.y], r, ["L", o.x, o.y]];
            },
            straight: function (t, e) {
              let i = e.touchingSliceAt;
              return [
                ["M", t.x, t.y],
                ["L", i.x, i.y]
              ];
            },
            crookedLine: function (t, e, i) {
              let { angle: s = this.angle || 0, breakAt: o, touchingSliceAt: r } = e,
                { series: n } = this,
                [a, l, h] = n.center,
                d = h / 2,
                { plotLeft: c, plotWidth: p } = n.chart,
                u = "left" === t.alignment,
                { x: g, y: f } = t,
                m = o.x;
              if (i.crookDistance) {
                let t = he(i.crookDistance, 1);
                m = u ? a + d + (p + c - a - d) * (1 - t) : c + (a - d) * t;
              } else m = a + (l - f) * Math.tan(s - Math.PI / 2);
              let x = [["M", g, f]];
              return (
                (u ? m <= g && m >= o.x : m >= g && m <= o.x) && x.push(["L", m, f]),
                x.push(["L", o.x, o.y], ["L", r.x, r.y]),
                x
              );
            }
          }
        });
        let { getStartAndEndRadians: hs } = l5,
          { noop: ho } = G,
          { clamp: hr, extend: hn, fireEvent: ha, merge: hl, pick: hh } = tu;
        class hd extends nu {
          animate(t) {
            let e = this,
              i = e.points,
              s = e.startAngleRad;
            t ||
              i.forEach(function (t) {
                let i = t.graphic,
                  o = t.shapeArgs;
                i &&
                  o &&
                  (i.attr({ r: hh(t.startR, e.center && e.center[3] / 2), start: s, end: s }),
                  i.animate({ r: o.r, start: o.start, end: o.end }, e.options.animation));
              });
          }
          drawEmpty() {
            let t,
              e,
              i = this.startAngleRad,
              s = this.endAngleRad,
              o = this.options;
            0 === this.total && this.center
              ? ((t = this.center[0]),
                (e = this.center[1]),
                this.graph ||
                  (this.graph = this.chart.renderer
                    .arc(t, e, this.center[1] / 2, 0, i, s)
                    .addClass("highcharts-empty-series")
                    .add(this.group)),
                this.graph.attr({
                  d: iM.arc(t, e, this.center[2] / 2, 0, {
                    start: i,
                    end: s,
                    innerR: this.center[3] / 2
                  })
                }),
                this.chart.styledMode ||
                  this.graph.attr({
                    "stroke-width": o.borderWidth,
                    fill: o.fillColor || "none",
                    stroke: o.color || "#cccccc"
                  }))
              : this.graph && (this.graph = this.graph.destroy());
          }
          drawPoints() {
            let t = this.chart.renderer;
            this.points.forEach(function (e) {
              (e.graphic && e.hasNewShapeType() && (e.graphic = e.graphic.destroy()),
                e.graphic ||
                  ((e.graphic = t[e.shapeType](e.shapeArgs).add(e.series.group)),
                  (e.delayedRendering = !0)));
            });
          }
          generatePoints() {
            (super.generatePoints(), this.updateTotals());
          }
          getX(t, e, i, s) {
            let o = this.center,
              r = this.radii ? this.radii[i.index] || 0 : o[2] / 2,
              n = s.dataLabelPosition,
              a = (null == n ? void 0 : n.distance) || 0,
              l = Math.asin(hr((t - o[1]) / (r + a), -1, 1));
            return (
              o[0] +
              Math.cos(l) * (r + a) * (e ? -1 : 1) +
              (a > 0 ? (e ? -1 : 1) * (s.padding || 0) : 0)
            );
          }
          hasData() {
            return !!this.dataTable.rowCount;
          }
          redrawPoints() {
            let t,
              e,
              i,
              s,
              o = this,
              r = o.chart;
            (this.drawEmpty(),
              o.group && !r.styledMode && o.group.shadow(o.options.shadow),
              o.points.forEach(function (n) {
                let a = {};
                ((e = n.graphic),
                  !n.isNull && e
                    ? ((s = n.shapeArgs),
                      (t = n.getTranslate()),
                      r.styledMode || (i = o.pointAttribs(n, n.selected && "select")),
                      n.delayedRendering
                        ? (e.setRadialReference(o.center).attr(s).attr(t),
                          r.styledMode || e.attr(i).attr({ "stroke-linejoin": "round" }),
                          (n.delayedRendering = !1))
                        : (e.setRadialReference(o.center),
                          r.styledMode || hl(!0, a, i),
                          hl(!0, a, s, t),
                          e.animate(a)),
                      e.attr({ visibility: n.visible ? "inherit" : "hidden" }),
                      e.addClass(n.getClassName(), !0))
                    : e && (n.graphic = e.destroy()));
              }));
          }
          sortByAngle(t, e) {
            t.sort(function (t, i) {
              return void 0 !== t.angle && (i.angle - t.angle) * e;
            });
          }
          translate(t) {
            (ha(this, "translate"), this.generatePoints());
            let e = this.options,
              i = e.slicedOffset,
              s = hs(e.startAngle, e.endAngle),
              o = (this.startAngleRad = s.start),
              r = (this.endAngleRad = s.end) - o,
              n = this.points,
              a = e.ignoreHiddenPoint,
              l = n.length,
              h,
              d,
              c,
              p,
              u,
              g,
              f,
              m = 0;
            for (t || (this.center = t = this.getCenter()), g = 0; g < l; g++) {
              ((f = n[g]),
                (h = o + m * r),
                f.isValid() && (!a || f.visible) && (m += f.percentage / 100),
                (d = o + m * r));
              let e = {
                x: t[0],
                y: t[1],
                r: t[2] / 2,
                innerR: t[3] / 2,
                start: Math.round(1e3 * h) / 1e3,
                end: Math.round(1e3 * d) / 1e3
              };
              ((f.shapeType = "arc"),
                (f.shapeArgs = e),
                (c = (d + h) / 2) > 1.5 * Math.PI
                  ? (c -= 2 * Math.PI)
                  : c < -Math.PI / 2 && (c += 2 * Math.PI),
                (f.slicedTranslation = {
                  translateX: Math.round(Math.cos(c) * i),
                  translateY: Math.round(Math.sin(c) * i)
                }),
                (p = (Math.cos(c) * t[2]) / 2),
                (u = (Math.sin(c) * t[2]) / 2),
                (f.tooltipPos = [t[0] + 0.7 * p, t[1] + 0.7 * u]),
                (f.half = +(c < -Math.PI / 2 || c > Math.PI / 2)),
                (f.angle = c));
            }
            ha(this, "afterTranslate");
          }
          updateTotals() {
            let t = this.points,
              e = t.length,
              i = this.options.ignoreHiddenPoint,
              s,
              o,
              r = 0;
            for (s = 0; s < e; s++) (o = t[s]).isValid() && (!i || o.visible) && (r += o.y);
            for (s = 0, this.total = r; s < e; s++)
              (((o = t[s]).percentage = r > 0 && (o.visible || !i) ? (o.y / r) * 100 : 0),
                (o.total = r));
          }
        }
        ((hd.defaultOptions = hl(nu.defaultOptions, {
          borderRadius: 3,
          center: [null, null],
          clip: !1,
          colorByPoint: !0,
          dataLabels: {
            connectorPadding: 5,
            connectorShape: "crookedLine",
            crookDistance: void 0,
            distance: 30,
            enabled: !0,
            formatter: function () {
              return this.isNull ? void 0 : this.name;
            },
            softConnector: !0,
            x: 0
          },
          fillColor: void 0,
          ignoreHiddenPoint: !0,
          inactiveOtherPoints: !0,
          legendType: "point",
          marker: null,
          size: null,
          showInLegend: !1,
          slicedOffset: 10,
          stickyTracking: !1,
          tooltip: { followPointer: !0 },
          borderColor: "#ffffff",
          borderWidth: 1,
          lineWidth: void 0,
          states: { hover: { brightness: 0.1 } }
        })),
          hn(hd.prototype, {
            axisTypes: [],
            directTouch: !0,
            drawGraph: void 0,
            drawTracker: lM.prototype.drawTracker,
            getCenter: l5.getCenter,
            getSymbol: ho,
            invertible: !1,
            isCartesian: !1,
            noSharedTooltip: !0,
            pointAttribs: lM.prototype.pointAttribs,
            pointClass: hi,
            requireSorting: !1,
            searchPoint: ho,
            trackerGroups: ["group", "dataLabelsGroup"]
          }),
          rY.registerSeriesType("pie", hd));
        let { composed: hc, noop: hp } = G,
          { distribute: hu } = ez,
          { series: hg } = rY,
          {
            arrayMax: hf,
            clamp: hm,
            defined: hx,
            pick: hy,
            pushUnique: hv,
            relativeLength: hb
          } = tu;
        !(function (t) {
          let e = {
            radialDistributionY: function (t, e) {
              var i;
              return (
                ((null == (i = e.dataLabelPosition) ? void 0 : i.top) || 0) + t.distributeBox.pos
              );
            },
            radialDistributionX: function (t, e, i, s, o) {
              let r = o.dataLabelPosition;
              return t.getX(
                i < ((null == r ? void 0 : r.top) || 0) + 2 ||
                  i > ((null == r ? void 0 : r.bottom) || 0) - 2
                  ? s
                  : i,
                e.half,
                e,
                o
              );
            },
            justify: function (t, e, i, s) {
              var o;
              return (
                s[0] +
                (t.half ? -1 : 1) *
                  (i + ((null == (o = e.dataLabelPosition) ? void 0 : o.distance) || 0))
              );
            },
            alignToPlotEdges: function (t, e, i, s) {
              let o = t.getBBox().width;
              return e ? o + s : i - o - s;
            },
            alignToConnectors: function (t, e, i, s) {
              let o = 0,
                r;
              return (
                t.forEach(function (t) {
                  (r = t.dataLabel.getBBox().width) > o && (o = r);
                }),
                e ? o + s : i - o - s
              );
            }
          };
          function i(t, e) {
            let i = Math.PI / 2,
              { start: s = 0, end: o = 0 } = t.shapeArgs || {},
              r = t.angle || 0;
            e > 0 &&
              s < i &&
              o > i &&
              r > i / 2 &&
              r < 1.5 * i &&
              (r = r <= i ? Math.max(i / 2, (s + i) / 2) : Math.min(1.5 * i, (i + o) / 2));
            let { center: n, options: a } = this,
              l = n[2] / 2,
              h = Math.cos(r),
              d = Math.sin(r),
              c = n[0] + h * l,
              p = n[1] + d * l,
              u = Math.min((a.slicedOffset || 0) + (a.borderWidth || 0), e / 5);
            return {
              natural: { x: c + h * e, y: p + d * e },
              computed: {},
              alignment: e < 0 ? "center" : t.half ? "right" : "left",
              connectorPosition: {
                angle: r,
                breakAt: { x: c + h * u, y: p + d * u },
                touchingSliceAt: { x: c, y: p }
              },
              distance: e
            };
          }
          function s() {
            var t;
            let e = this,
              i = e.points,
              s = e.chart,
              o = s.plotWidth,
              r = s.plotHeight,
              n = s.plotLeft,
              a = Math.round(s.chartWidth / 3),
              l = e.center,
              h = l[2] / 2,
              d = l[1],
              c = [[], []],
              p = [0, 0, 0, 0],
              u = e.dataLabelPositioners,
              g,
              f,
              m,
              x = 0;
            e.visible &&
              (null == (t = e.hasDataLabels) ? void 0 : t.call(e)) &&
              (i.forEach((t) => {
                (t.dataLabels || []).forEach((t) => {
                  t.shortened &&
                    (t.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }),
                    (t.shortened = !1));
                });
              }),
              hg.prototype.drawDataLabels.apply(e),
              i.forEach((t) => {
                (t.dataLabels || []).forEach((e, i) => {
                  var s;
                  let o = l[2] / 2,
                    r = e.options,
                    n = hb((null == r ? void 0 : r.distance) || 0, o);
                  (0 === i && c[t.half].push(t),
                    !hx(null == r || null == (s = r.style) ? void 0 : s.width) &&
                      e.getBBox().width > a &&
                      (e.css({ width: Math.round(0.7 * a) + "px" }), (e.shortened = !0)),
                    (e.dataLabelPosition = this.getDataLabelPosition(t, n)),
                    (x = Math.max(x, n)));
                });
              }),
              c.forEach((t, i) => {
                let a = t.length,
                  c = [],
                  g,
                  y,
                  v = 0,
                  b;
                a &&
                  (e.sortByAngle(t, i - 0.5),
                  x > 0 &&
                    ((g = Math.max(0, d - h - x)),
                    (y = Math.min(d + h + x, s.plotHeight)),
                    t.forEach((t) => {
                      (t.dataLabels || []).forEach((e) => {
                        var i;
                        let o = e.dataLabelPosition;
                        o &&
                          o.distance > 0 &&
                          ((o.top = Math.max(0, d - h - o.distance)),
                          (o.bottom = Math.min(d + h + o.distance, s.plotHeight)),
                          (v = e.getBBox().height || 21),
                          (e.lineHeight = s.renderer.fontMetrics(e.text || e).h + 2 * e.padding),
                          (t.distributeBox = {
                            target:
                              ((null == (i = e.dataLabelPosition) ? void 0 : i.natural.y) || 0) -
                              o.top +
                              e.lineHeight / 2,
                            size: v,
                            rank: t.y
                          }),
                          c.push(t.distributeBox));
                      });
                    }),
                    hu(c, (b = y + v - g), b / 5)),
                  t.forEach((s) => {
                    (s.dataLabels || []).forEach((a) => {
                      let d = a.options || {},
                        g = s.distributeBox,
                        x = a.dataLabelPosition,
                        y = (null == x ? void 0 : x.natural.y) || 0,
                        v = d.connectorPadding || 0,
                        b = a.lineHeight || 21,
                        k = (b - a.getBBox().height) / 2,
                        w = 0,
                        M = y,
                        S = "inherit";
                      if (x) {
                        if (
                          (c &&
                            hx(g) &&
                            x.distance > 0 &&
                            (void 0 === g.pos
                              ? (S = "hidden")
                              : ((m = g.size), (M = u.radialDistributionY(s, a)))),
                          d.justify)
                        )
                          w = u.justify(s, a, h, l);
                        else
                          switch (d.alignTo) {
                            case "connectors":
                              w = u.alignToConnectors(t, i, o, n);
                              break;
                            case "plotEdges":
                              w = u.alignToPlotEdges(a, i, o, n);
                              break;
                            default:
                              w = u.radialDistributionX(e, s, M - k, y, a);
                          }
                        if (
                          ((x.attribs = { visibility: S, align: x.alignment }),
                          (x.posAttribs = {
                            x: w + (d.x || 0) + ({ left: v, right: -v }[x.alignment] || 0),
                            y: M + (d.y || 0) - b / 2
                          }),
                          (x.computed.x = w),
                          (x.computed.y = M - k),
                          hy(d.crop, !0))
                        ) {
                          let t;
                          (w - (f = a.getBBox().width) < v && 1 === i
                            ? ((t = Math.round(f - w + v)), (p[3] = Math.max(t, p[3])))
                            : w + f > o - v &&
                              0 === i &&
                              ((t = Math.round(w + f - o + v)), (p[1] = Math.max(t, p[1]))),
                            M - m / 2 < 0
                              ? (p[0] = Math.max(Math.round(-M + m / 2), p[0]))
                              : M + m / 2 > r && (p[2] = Math.max(Math.round(M + m / 2 - r), p[2])),
                            (x.sideOverflow = t));
                        }
                      }
                    });
                  }));
              }),
              (0 === hf(p) || this.verifyDataLabelOverflow(p)) &&
                (this.placeDataLabels(),
                this.points.forEach((t) => {
                  (t.dataLabels || []).forEach((i) => {
                    let { connectorColor: o, connectorWidth: r = 1 } = i.options || {},
                      n = i.dataLabelPosition;
                    if (r) {
                      var a;
                      let l;
                      ((g = i.connector),
                        n && n.distance > 0
                          ? ((l = !g),
                            g ||
                              (i.connector = g =
                                s.renderer
                                  .path()
                                  .addClass(
                                    "highcharts-data-label-connector  highcharts-color-" +
                                      t.colorIndex +
                                      (t.className ? " " + t.className : "")
                                  )
                                  .add(e.dataLabelsGroup)),
                            s.styledMode ||
                              g.attr({ "stroke-width": r, stroke: o || t.color || "#666666" }),
                            g[l ? "attr" : "animate"]({ d: t.getConnectorPath(i) }),
                            g.attr({ visibility: null == (a = n.attribs) ? void 0 : a.visibility }))
                          : g && (i.connector = g.destroy()));
                    }
                  });
                })));
          }
          function o() {
            this.points.forEach((t) => {
              ((t.dataLabels || []).forEach((t) => {
                var e, i;
                let s = t.dataLabelPosition;
                s
                  ? (s.sideOverflow &&
                      (t.css({
                        width: Math.max(t.getBBox().width - s.sideOverflow, 0) + "px",
                        textOverflow:
                          (null == (i = t.options) || null == (e = i.style)
                            ? void 0
                            : e.textOverflow) || "ellipsis"
                      }),
                      (t.shortened = !0)),
                    t.attr(s.attribs),
                    t[t.moved ? "animate" : "attr"](s.posAttribs),
                    (t.moved = !0))
                  : t && t.attr({ y: -9999 });
              }),
                delete t.distributeBox);
            }, this);
          }
          function r(t) {
            let e = this.center,
              i = this.options,
              s = i.center,
              o = i.minSize || 80,
              r = o,
              n = null !== i.size;
            return (
              !n &&
                (null !== s[0]
                  ? (r = Math.max(e[2] - Math.max(t[1], t[3]), o))
                  : ((r = Math.max(e[2] - t[1] - t[3], o)), (e[0] += (t[3] - t[1]) / 2)),
                null !== s[1]
                  ? (r = hm(r, o, e[2] - Math.max(t[0], t[2])))
                  : ((r = hm(r, o, e[2] - t[0] - t[2])), (e[1] += (t[0] - t[2]) / 2)),
                r < e[2]
                  ? ((e[2] = r),
                    (e[3] = Math.min(
                      i.thickness
                        ? Math.max(0, r - 2 * i.thickness)
                        : Math.max(0, hb(i.innerSize || 0, r)),
                      r
                    )),
                    this.translate(e),
                    this.drawDataLabels && this.drawDataLabels())
                  : (n = !0)),
              n
            );
          }
          t.compose = function (t) {
            if ((lR.compose(hg), hv(hc, "PieDataLabel"))) {
              let n = t.prototype;
              ((n.dataLabelPositioners = e),
                (n.alignDataLabel = hp),
                (n.drawDataLabels = s),
                (n.getDataLabelPosition = i),
                (n.placeDataLabels = o),
                (n.verifyDataLabelOverflow = r));
            }
          };
        })(R || (R = {}));
        let hk = R;
        (((b = W || (W = {})).getCenterOfPoints = function (t) {
          let e = t.reduce((t, e) => ((t.x += e.x), (t.y += e.y), t), { x: 0, y: 0 });
          return { x: e.x / t.length, y: e.y / t.length };
        }),
          (b.getDistanceBetweenPoints = function (t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
          }),
          (b.getAngleBetweenPoints = function (t, e) {
            return Math.atan2(e.x - t.x, e.y - t.y);
          }),
          (b.pointInPolygon = function (t, e) {
            let { x: i, y: s } = t,
              o = e.length,
              r,
              n,
              a = !1;
            for (r = 0, n = o - 1; r < o; n = r++) {
              let [t, o] = e[r],
                [l, h] = e[n];
              o > s != h > s && i < ((l - t) * (s - o)) / (h - o) + t && (a = !a);
            }
            return a;
          }));
        let { pointInPolygon: hw } = W,
          { addEvent: hM, getAlignFactor: hS, fireEvent: hT, objectEach: hC, pick: hA } = tu;
        function hP(t) {
          let e = t.length,
            i = (t, e) =>
              !(
                e.x >= t.x + t.width ||
                e.x + e.width <= t.x ||
                e.y >= t.y + t.height ||
                e.y + e.height <= t.y
              ),
            s = (t, e) => {
              for (let i of t) if (hw({ x: i[0], y: i[1] }, e)) return !0;
              return !1;
            },
            o,
            r,
            n,
            a,
            l,
            h = !1;
          for (let i = 0; i < e; i++)
            (o = t[i]) &&
              ((o.oldOpacity = o.opacity),
              (o.newOpacity = 1),
              (o.absoluteBox = (function (t) {
                if (t && (!t.alignAttr || t.placed)) {
                  var e, i;
                  let s = t.box ? 0 : t.padding || 0,
                    o = t.alignAttr || { x: t.attr("x"), y: t.attr("y") },
                    { height: r, polygon: n, width: a } = t.getBBox(),
                    l = hS(t.alignValue) * a;
                  return (
                    (t.width = a),
                    (t.height = r),
                    {
                      x: o.x + ((null == (e = t.parentGroup) ? void 0 : e.translateX) || 0) + s - l,
                      y: o.y + ((null == (i = t.parentGroup) ? void 0 : i.translateY) || 0) + s,
                      width: a - 2 * s,
                      height: r - 2 * s,
                      polygon: n
                    }
                  );
                }
              })(o)));
          t.sort((t, e) => (e.labelrank || 0) - (t.labelrank || 0));
          for (let o = 0; o < e; ++o) {
            let h = null == (a = (r = t[o]) && r.absoluteBox) ? void 0 : a.polygon;
            for (let d = o + 1; d < e; ++d) {
              l = (n = t[d]) && n.absoluteBox;
              let e = !1;
              if (
                a &&
                l &&
                r !== n &&
                0 !== r.newOpacity &&
                0 !== n.newOpacity &&
                "hidden" !== r.visibility &&
                "hidden" !== n.visibility
              ) {
                let t = l.polygon;
                if ((h && t && h !== t ? s(h, t) && (e = !0) : i(a, l) && (e = !0), e)) {
                  let t = r.labelrank < n.labelrank ? r : n,
                    e = t.text;
                  ((t.newOpacity = 0),
                    (null == e ? void 0 : e.element.querySelector("textPath")) && e.hide());
                }
              }
            }
          }
          for (let e of t) hL(e, this) && (h = !0);
          h && hT(this, "afterHideAllOverlappingLabels");
        }
        function hL(t, e) {
          let i,
            s = !1;
          return (
            t &&
              ((i = t.newOpacity),
              t.oldOpacity !== i &&
                (t.hasClass("highcharts-data-label")
                  ? (t[i ? "removeClass" : "addClass"]("highcharts-data-label-hidden"),
                    (s = !0),
                    t[t.isOld ? "animate" : "attr"]({ opacity: i }, void 0, function () {
                      e.styledMode || t.css({ pointerEvents: i ? "auto" : "none" });
                    }),
                    hT(e, "afterHideOverlappingLabel"))
                  : t.attr({ opacity: i })),
              (t.isOld = !0)),
            s
          );
        }
        function hO() {
          var t;
          let e = this,
            i = [];
          for (let t of e.labelCollectors || []) i = i.concat(t());
          for (let t of e.yAxis || [])
            t.stacking &&
              t.options.stackLabels &&
              !t.options.stackLabels.allowOverlap &&
              hC(t.stacking.stacks, (t) => {
                hC(t, (t) => {
                  t.label && i.push(t.label);
                });
              });
          for (let s of e.series || [])
            if (s.visible && (null == (t = s.hasDataLabels) ? void 0 : t.call(s))) {
              let t = (t) => {
                for (let s of t)
                  s.visible &&
                    (s.dataLabels || []).forEach((t) => {
                      var o, r;
                      let n = t.options || {};
                      ((t.labelrank = hA(
                        n.labelrank,
                        s.labelrank,
                        null == (r = s.shapeArgs) ? void 0 : r.height
                      )),
                        (null != (o = n.allowOverlap) ? o : Number(n.distance) > 0)
                          ? ((t.oldOpacity = t.opacity), (t.newOpacity = 1), hL(t, e))
                          : i.push(t));
                    });
              };
              (t(s.nodes || []), t(s.points));
            }
          this.hideOverlappingLabels(i);
        }
        let hE = {
            compose: function (t) {
              let e = t.prototype;
              e.hideOverlappingLabels || ((e.hideOverlappingLabels = hP), hM(t, "render", hO));
            }
          },
          { defaultOptions: hI } = tX,
          { noop: hD } = G,
          { addEvent: hB, extend: hN, isObject: hz, merge: hR, relativeLength: hW } = tu,
          hX = { radius: 0, scope: "stack", where: void 0 },
          hH = hD,
          hF = hD;
        function hG(t, e, i, s) {
          let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
            r = hH(t, e, i, s, o),
            { innerR: n = 0, r: a = i, start: l = 0, end: h = 0 } = o;
          if (o.open || !o.borderRadius) return r;
          let d = h - l,
            c = Math.sin(d / 2),
            p = Math.max(
              Math.min(hW(o.borderRadius || 0, a - n), (a - n) / 2, (a * c) / (1 + c)),
              0
            ),
            u = Math.min(p, (d / Math.PI) * 2 * n),
            g = r.length - 1;
          for (; g--;)
            !(function (t, e, i) {
              let s,
                o,
                r,
                n = t[e],
                a = t[e + 1];
              if (
                ("Z" === a[0] && (a = t[0]),
                ("M" === n[0] || "L" === n[0]) && "A" === a[0]
                  ? ((s = n), (o = a), (r = !0))
                  : "A" === n[0] && ("M" === a[0] || "L" === a[0]) && ((s = a), (o = n)),
                s && o && o.params)
              ) {
                let n = o[1],
                  a = o[5],
                  l = o.params,
                  { start: h, end: d, cx: c, cy: p } = l,
                  u = a ? n - i : n + i,
                  g = u ? Math.asin(i / u) : 0,
                  f = a ? g : -g,
                  m = Math.cos(g) * u;
                (r
                  ? ((l.start = h + f),
                    (s[1] = c + m * Math.cos(h)),
                    (s[2] = p + m * Math.sin(h)),
                    t.splice(e + 1, 0, [
                      "A",
                      i,
                      i,
                      0,
                      0,
                      1,
                      c + n * Math.cos(l.start),
                      p + n * Math.sin(l.start)
                    ]))
                  : ((l.end = d - f),
                    (o[6] = c + n * Math.cos(l.end)),
                    (o[7] = p + n * Math.sin(l.end)),
                    t.splice(e + 1, 0, [
                      "A",
                      i,
                      i,
                      0,
                      0,
                      1,
                      c + m * Math.cos(d),
                      p + m * Math.sin(d)
                    ])),
                  (o[4] = Math.abs(l.end - l.start) < Math.PI ? 0 : 1));
              }
            })(r, g, g > 1 ? u : p);
          return r;
        }
        function hY() {
          if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
            var t, e;
            let { options: i, yAxis: s } = this,
              o = "percent" === i.stacking,
              r =
                null == (e = hI.plotOptions) || null == (t = e[this.type])
                  ? void 0
                  : t.borderRadius,
              n = hj(i.borderRadius, hz(r) ? r : {}),
              a = s.options.reversed;
            for (let t of this.points) {
              let { shapeArgs: e } = t;
              if ("roundedRect" === t.shapeType && e) {
                let { width: r = 0, height: l = 0, y: h = 0 } = e,
                  d = h,
                  c = l;
                if ("stack" === n.scope && t.stackTotal) {
                  let e = s.translate(o ? 100 : t.stackTotal, !1, !0, !1, !0),
                    r = s.translate(i.threshold || 0, !1, !0, !1, !0),
                    n = this.crispCol(0, Math.min(e, r), 0, Math.abs(e - r));
                  ((d = n.y), (c = n.height));
                }
                let p = (t.negative ? -1 : 1) * (a ? -1 : 1) == -1,
                  u = n.where;
                (!u &&
                  this.is("waterfall") &&
                  Math.abs((t.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth &&
                  (u = "all"),
                  u || (u = "end"));
                let g = Math.min(hW(n.radius, r), r / 2, "all" === u ? l / 2 : 1 / 0) || 0;
                ("end" === u && (p && (d -= g), (c += g)),
                  hN(e, { brBoxHeight: c, brBoxY: d, r: g }));
              }
            }
          }
        }
        function hj(t, e) {
          return (hz(t) || (t = { radius: t || 0 }), hR(hX, e, t));
        }
        function hU() {
          let t = hj(this.options.borderRadius);
          for (let e of this.points) {
            let i = e.shapeArgs;
            i && (i.borderRadius = hW(t.radius, (i.r || 0) - (i.innerR || 0)));
          }
        }
        function hV(t, e, i, s) {
          let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
            r = hF(t, e, i, s, o),
            { r: n = 0, brBoxHeight: a = s, brBoxY: l = e } = o,
            h = e - l,
            d = l + a - (e + s),
            c = h - n > -0.1 ? 0 : n,
            p = d - n > -0.1 ? 0 : n,
            u = Math.max(c && h, 0),
            g = Math.max(p && d, 0),
            f = [t + c, e],
            m = [t + i - c, e],
            x = [t + i, e + c],
            y = [t + i, e + s - p],
            v = [t + i - p, e + s],
            b = [t + p, e + s],
            k = [t, e + s - p],
            w = [t, e + c],
            M = (t, e) => Math.sqrt(Math.pow(t, 2) - Math.pow(e, 2));
          if (u) {
            let t = M(c, c - u);
            ((f[0] -= t), (m[0] += t), (x[1] = w[1] = e + c - u));
          }
          if (s < c - u) {
            let o = M(c, c - u - s);
            ((x[0] = y[0] = t + i - c + o),
              (v[0] = Math.min(x[0], v[0])),
              (b[0] = Math.max(y[0], b[0])),
              (k[0] = w[0] = t + c - o),
              (x[1] = w[1] = e + s));
          }
          if (g) {
            let t = M(p, p - g);
            ((v[0] += t), (b[0] -= t), (y[1] = k[1] = e + s - p + g));
          }
          if (s < p - g) {
            let o = M(p, p - g - s);
            ((x[0] = y[0] = t + i - p + o),
              (m[0] = Math.min(x[0], m[0])),
              (f[0] = Math.max(y[0], f[0])),
              (k[0] = w[0] = t + p - o),
              (y[1] = k[1] = e));
          }
          return (
            (r.length = 0),
            r.push(
              ["M", ...f],
              ["L", ...m],
              ["A", c, c, 0, 0, 1, ...x],
              ["L", ...y],
              ["A", p, p, 0, 0, 1, ...v],
              ["L", ...b],
              ["A", p, p, 0, 0, 1, ...k],
              ["L", ...w],
              ["A", c, c, 0, 0, 1, ...f],
              ["Z"]
            ),
            r
          );
        }
        let { diffObjects: hZ, extend: hq, find: h_, merge: hK, pick: h$, uniqueKey: hJ } = tu;
        function hQ(t, e) {
          let i = t.condition;
          (
            i.callback ||
            function () {
              return (
                this.chartWidth <= h$(i.maxWidth, Number.MAX_VALUE) &&
                this.chartHeight <= h$(i.maxHeight, Number.MAX_VALUE) &&
                this.chartWidth >= h$(i.minWidth, 0) &&
                this.chartHeight >= h$(i.minHeight, 0)
              );
            }
          ).call(this) && e.push(t._id);
        }
        function h0(t, e) {
          let i = this.options.responsive,
            s = this.currentResponsive,
            o = [],
            r;
          !e &&
            i &&
            i.rules &&
            i.rules.forEach((t) => {
              (void 0 === t._id && (t._id = hJ()), this.matchResponsiveRule(t, o));
            }, this);
          let n = hK(
            ...o
              .map((t) => h_((null == i ? void 0 : i.rules) || [], (e) => e._id === t))
              .map((t) => (null == t ? void 0 : t.chartOptions))
          );
          ((n.isResponsiveOptions = !0), (o = o.toString() || void 0));
          let a = null == s ? void 0 : s.ruleIds;
          o === a ||
            (s &&
              ((this.currentResponsive = void 0),
              (this.updatingResponsive = !0),
              this.update(s.undoOptions, t, !0),
              (this.updatingResponsive = !1)),
            o
              ? (((r = hZ(n, this.options, !0, this.collectionsWithUpdate)).isResponsiveOptions =
                  !0),
                (this.currentResponsive = { ruleIds: o, mergedOptions: n, undoOptions: r }),
                this.updatingResponsive || this.update(n, t, !0))
              : (this.currentResponsive = void 0));
        }
        (X || (X = {})).compose = function (t) {
          let e = t.prototype;
          return (
            e.matchResponsiveRule || hq(e, { matchResponsiveRule: hQ, setResponsive: h0 }),
            t
          );
        };
        let h1 = X;
        ((G.AST = eg),
          (G.Axis = ot),
          (G.Chart = ap),
          (G.Color = tq),
          (G.DataLabel = lR),
          (G.DataTableCore = rO),
          (G.Fx = tQ),
          (G.HTMLElement = su),
          (G.Legend = nz),
          (G.LegendSymbol = rz),
          (G.OverlappingDataLabels = G.OverlappingDataLabels || hE),
          (G.PlotLineOrBand = oS),
          (G.Point = rr),
          (G.Pointer = rS),
          (G.RendererRegistry = eE),
          (G.Series = nu),
          (G.SeriesRegistry = rY),
          (G.StackItem = aI),
          (G.SVGElement = ia),
          (G.SVGRenderer = i7),
          (G.Templating = eO),
          (G.Tick = sD),
          (G.Time = tD),
          (G.Tooltip = o_),
          (G.animate = et.animate),
          (G.animObject = et.animObject),
          (G.chart = ap.chart),
          (G.color = tq.parse),
          (G.dateFormat = eO.dateFormat),
          (G.defaultOptions = tX.defaultOptions),
          (G.distribute = ez.distribute),
          (G.format = eO.format),
          (G.getDeferredAnimation = et.getDeferredAnimation),
          (G.getOptions = tX.getOptions),
          (G.numberFormat = eO.numberFormat),
          (G.seriesType = rY.seriesType),
          (G.setAnimation = et.setAnimation),
          (G.setOptions = tX.setOptions),
          (G.stop = et.stop),
          (G.time = tX.defaultTime),
          (G.timers = tQ.timers),
          {
            compose: function (t, e, i) {
              let s = t.types.pie;
              if (!e.symbolCustomAttribs.includes("borderRadius")) {
                let o = i.prototype.symbols;
                (hB(t, "afterColumnTranslate", hY, { order: 9 }),
                  hB(s, "afterTranslate", hU),
                  e.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY"),
                  (hH = o.arc),
                  (hF = o.roundedRect),
                  (o.arc = hG),
                  (o.roundedRect = hV));
              }
            },
            optionsToObject: hj
          }.compose(G.Series, G.SVGElement, G.SVGRenderer),
          lY.compose(G.Series.types.column),
          lR.compose(G.Series),
          or.compose(G.Axis),
          su.compose(G.SVGRenderer),
          nz.compose(G.Chart),
          oh.compose(G.Axis),
          hE.compose(G.Chart),
          hk.compose(G.Series.types.pie),
          oS.compose(G.Chart, G.Axis),
          rS.compose(G.Chart),
          h1.compose(G.Chart),
          aS.compose(G.Axis, G.Chart, G.Series),
          aJ.compose(G.Axis, G.Chart, G.Series),
          o_.compose(G.Pointer),
          tu.extend(G, tu));
        let h2 = G;
        return F.default;
      })()),
      (e.exports = s._Highcharts));
  }
]);

//# debugId=4885e3ab-233f-ef63-8646-05a35ebca96a
//# sourceMappingURL=00bnpgt_3r5rb.js.map
