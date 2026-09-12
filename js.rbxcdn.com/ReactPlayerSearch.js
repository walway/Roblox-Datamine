(!(function () {
  try {
    var e =
      "u" > typeof window
        ? window
        : "u" > typeof global
          ? global
          : "u" > typeof globalThis
            ? globalThis
            : "u" > typeof self
              ? self
              : {};
    e.SENTRY_RELEASE = { id: "925ae346147782818d19cd08acb92c8f7ed7ca48" };
    var t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "1102799c-aa4b-4d92-a585-4f14d645177d"),
      (e._sentryDebugIdIdentifier = "sentry-dbid-1102799c-aa4b-4d92-a585-4f14d645177d"));
  } catch (e) {}
})(),
  (function () {
    var e = {
        611: function (e) {
          function t(e) {
            return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
          }
          !(
            /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function () {
              "use strict";
              var r = {}.hasOwnProperty;
              function n() {
                for (var e = "", i = 0; i < arguments.length; i++) {
                  var a = arguments[i];
                  a &&
                    (e = o(
                      e,
                      (function (e) {
                        if ("string" == typeof e || "number" == typeof e) return e;
                        if ((void 0 === e ? "undefined" : t(e)) !== "object") return "";
                        if (Array.isArray(e)) return n.apply(null, e);
                        if (
                          e.toString !== Object.prototype.toString &&
                          !e.toString.toString().includes("[native code]")
                        )
                          return e.toString();
                        var i = "";
                        for (var a in e) r.call(e, a) && e[a] && (i = o(i, a));
                        return i;
                      })(a)
                    ));
                }
                return e;
              }
              function o(e, t) {
                return t ? (e ? e + " " + t : e + t) : e;
              }
              e.exports
                ? ((n.default = n), (e.exports = n))
                : "function" == typeof define && "object" === t(define.amd) && define.amd
                  ? define("classnames", [], function () {
                      return n;
                    })
                  : (window.classNames = n);
            })()
          );
        }
      },
      t = {};
    function r(n) {
      var o = t[n];
      if (void 0 !== o) return o.exports;
      var i = (t[n] = { exports: {} });
      return (e[n](i, i.exports, r), i.exports);
    }
    ((r.m = e),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return (r.d(t, { a: t }), t);
      }),
      (r.d = function (e, t) {
        for (var n in t)
          r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.r = function (e) {
        ("u" > typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      }),
      (r.rv = function () {
        return "1.7.12";
      }),
      (r.ruid = "bundler=rspack@1.7.12"),
      (function () {
        "use strict";
        var e,
          t,
          n,
          o,
          i,
          a,
          l = window.ReactJSX,
          u = window.TanstackQuery,
          c = window.Roblox["core-scripts"].util.ready,
          s = r.n(c),
          f = window.Roblox["core-scripts"].react,
          d = window.React,
          p = r.n(d),
          y = function () {
            for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
              (e = arguments[r]) &&
                (t = (function e(t) {
                  var r,
                    n,
                    o = "";
                  if ("string" == typeof t || "number" == typeof t) o += t;
                  else if (
                    "object" ==
                    (void 0 === t
                      ? "undefined"
                      : t && "u" > typeof Symbol && t.constructor === Symbol
                        ? "symbol"
                        : typeof t)
                  )
                    if (Array.isArray(t)) {
                      var i = t.length;
                      for (r = 0; r < i; r++) t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                    } else for (n in t) t[n] && (o && (o += " "), (o += n));
                  return o;
                })(e)) &&
                (n && (n += " "), (n += t));
            return n;
          };
        function m(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function b(e) {
          if (Array.isArray(e)) return e;
        }
        function h() {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function v(e, t) {
          if (e) {
            if ("string" == typeof e) return m(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (
              ("Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r)
            )
              return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
              return m(e, t);
          }
        }
        var g = {
            Small: { dimension: 16, strokeWidth: 2, textClass: "text-caption-small" },
            Medium: {
              dimension: 32,
              strokeWidth: 3,
              textClass: "text-caption-small",
              valueContainerSize: 36
            },
            Large: {
              dimension: 48,
              strokeWidth: 4,
              textClass: "text-caption-medium",
              valueContainerSize: 52
            }
          },
          w = p().forwardRef(function (e, t) {
            var r,
              n =
                b((r = [e, t])) ||
                (function (e) {
                  if (
                    ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                    null != e["@@iterator"]
                  )
                    return Array.from(e);
                })(r) ||
                v(r) ||
                h(),
              o = n[0],
              i = n.slice(1),
              a = o.className,
              l = o.size,
              u = void 0 === l ? "Large" : l,
              c = o.variant,
              s = o.value,
              f = o.showValue,
              d = void 0 !== f && f,
              m = o.ariaLabel,
              w = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o,
                  i = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                  for (o = 0, r = Reflect.ownKeys(Object(e)); o < r.length; o++)
                    ((n = r[o]),
                      !(t.indexOf(n) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                        (i[n] = e[n]));
                  return i;
                }
                if (
                  ((i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                      n,
                      o = {},
                      i = Object.getOwnPropertyNames(e);
                    for (n = 0; n < i.length; n++)
                      ((r = i[n]),
                        !(t.indexOf(r) >= 0) &&
                          Object.prototype.propertyIsEnumerable.call(e, r) &&
                          (o[r] = e[r]));
                    return o;
                  })(e, t)),
                  Object.getOwnPropertySymbols)
                )
                  for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    ((n = r[o]),
                      !(t.indexOf(n) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                        (i[n] = e[n]));
                return i;
              })(o, ["className", "size", "variant", "value", "showValue", "ariaLabel"]),
              O = (b(i) ||
                (function (e) {
                  var t,
                    r,
                    n =
                      null == e
                        ? null
                        : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                  if (null != n) {
                    var o = [],
                      i = !0,
                      a = !1;
                    try {
                      for (
                        n = n.call(e);
                        !(i = (t = n.next()).done) && (o.push(t.value), 1 !== o.length);
                        i = !0
                      );
                    } catch (e) {
                      ((a = !0), (r = e));
                    } finally {
                      try {
                        i || null == n.return || n.return();
                      } finally {
                        if (a) throw r;
                      }
                    }
                    return o;
                  }
                })(i) ||
                v(i, 1) ||
                h())[0],
              j = g[u],
              x = j.dimension,
              S = j.strokeWidth,
              P = j.textClass,
              A = j.valueContainerSize,
              E = (x - S) / 2,
              I = 2 * Math.PI * E,
              C = x / 2,
              k = Math.min(100, Math.max(0, void 0 === s ? 0 : s)),
              N = d && void 0 !== A ? A : x,
              T = "Determinate" === (void 0 === c ? "Determinate" : c);
            return p().createElement(
              "div",
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                  ("function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                      Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                      })
                    )),
                    n.forEach(function (t) {
                      var n;
                      ((n = r[t]),
                        t in e
                          ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                            })
                          : (e[t] = n));
                    }));
                }
                return e;
              })(
                {
                  ref: O,
                  className: y(
                    "foundation-web-progress-circle inline-flex items-center justify-center",
                    a
                  ),
                  role: "progressbar",
                  "aria-label": m,
                  "aria-valuemin": T ? 0 : void 0,
                  "aria-valuemax": T ? 100 : void 0,
                  "aria-valuenow": T ? k : void 0,
                  style: { width: N, height: N }
                },
                w
              ),
              p().createElement(
                "svg",
                {
                  width: x,
                  height: x,
                  viewBox: "0 0 ".concat(x, " ").concat(x),
                  className: "relative"
                },
                p().createElement("circle", {
                  cx: C,
                  cy: C,
                  r: E,
                  fill: "none",
                  strokeWidth: S,
                  style: { stroke: "var(--color-shift-200)" }
                }),
                p().createElement("circle", {
                  cx: C,
                  cy: C,
                  r: E,
                  fill: "none",
                  strokeWidth: S,
                  strokeDasharray: T ? I : "".concat(0.75 * I, " ").concat(0.25 * I),
                  strokeDashoffset: T ? I * (1 - k / 100) : 0,
                  strokeLinecap: "round",
                  className: y(!T && "foundation-web-progress-circle-indeterminate"),
                  style: T
                    ? {
                        stroke: "var(--fui-future-alpha-color-system-progress)",
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                        transition: "stroke-dashoffset 0.3s ease-out"
                      }
                    : {
                        stroke: "var(--fui-future-alpha-color-system-progress)",
                        transformOrigin: "50% 50%"
                      }
                })
              ),
              T &&
                d &&
                "Large" === u &&
                p().createElement(
                  "div",
                  {
                    className: y("absolute content-emphasis flex items-center justify-center", P),
                    "aria-hidden": "true"
                  },
                  p().createElement("span", null, Math.round(k)),
                  p().createElement("span", null, "%")
                )
            );
          });
        w.displayName = "ProgressCircle";
        var O =
            "relative clip group/interactable focus-visible:outline-focus disabled:outline-none",
          j = function (e) {
            var t = e.className;
            return p().createElement("div", {
              "aria-hidden": !0,
              "data-testid": "foundation-web-state-layer",
              className: y(
                "absolute inset-[0] transition-colors group-hover/interactable:bg-[var(--color-state-hover)] group-active/interactable:bg-[var(--color-state-press)] group-disabled/interactable:bg-none",
                t
              )
            });
          },
          x = "opacity-[0.5]",
          S = function (e) {
            var t = e.width,
              r = e.height;
            return p().createElement(
              "svg",
              {
                className: "foundation-web-loading-spinner",
                width: t,
                height: r,
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              },
              p().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "currentColor",
                d: "M10 2.75C8.56609 2.75 7.16438 3.1752 5.97212 3.97185C4.77986 4.76849 3.85061 5.90078 3.30188 7.22554C2.75314 8.55031 2.60957 10.008 2.88931 11.4144C3.16905 12.8208 3.85955 14.1126 4.87348 15.1265C5.88741 16.1405 7.17924 16.831 8.5856 17.1107C9.99196 17.3904 11.4497 17.2469 12.7745 16.6981C14.0992 16.1494 15.2315 15.2201 16.0282 14.0279C16.8248 12.8356 17.25 11.4339 17.25 10C17.25 9.58579 17.5858 9.25 18 9.25C18.4142 9.25 18.75 9.58579 18.75 10C18.75 11.7306 18.2368 13.4223 17.2754 14.8612C16.3139 16.3002 14.9473 17.4217 13.3485 18.0839C11.7496 18.7462 9.9903 18.9195 8.29296 18.5819C6.59563 18.2443 5.03653 17.4109 3.81282 16.1872C2.58911 14.9635 1.75575 13.4044 1.41813 11.707C1.08051 10.0097 1.25379 8.25037 1.91606 6.65152C2.57832 5.05267 3.69983 3.6861 5.13876 2.72464C6.57769 1.76318 8.26942 1.25 10 1.25C10.4142 1.25 10.75 1.58579 10.75 2C10.75 2.41421 10.4142 2.75 10 2.75Z"
              })
            );
          };
        function P(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function A(e) {
          if (Array.isArray(e)) return e;
        }
        function E() {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function I(e, t) {
          if (e) {
            if ("string" == typeof e) return P(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (
              ("Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r)
            )
              return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
              return P(e, t);
          }
        }
        var C = {
            XSmall: "size-[var(--icon-size-xsmall)]",
            Small: "size-[var(--icon-size-small)]",
            Medium: "size-[var(--icon-size-medium)]",
            Large: "size-[var(--icon-size-large)]",
            XLarge: "size-[var(--icon-size-xlarge)]",
            XXLarge: "size-[var(--icon-size-xxlarge)]"
          },
          k = p().forwardRef(function (e, t) {
            var r,
              n =
                A((r = [e, t])) ||
                (function (e) {
                  if (
                    ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                    null != e["@@iterator"]
                  )
                    return Array.from(e);
                })(r) ||
                I(r) ||
                E(),
              o = n[0],
              i = n.slice(1),
              a = o.name,
              l = o.size,
              u = o.className,
              c =
                (o.children,
                (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    o,
                    i = {};
                  if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (o = 0, r = Reflect.ownKeys(Object(e)); o < r.length; o++)
                      ((n = r[o]),
                        !(t.indexOf(n) >= 0) &&
                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                          (i[n] = e[n]));
                    return i;
                  }
                  if (
                    ((i = (function (e, t) {
                      if (null == e) return {};
                      var r,
                        n,
                        o = {},
                        i = Object.getOwnPropertyNames(e);
                      for (n = 0; n < i.length; n++)
                        ((r = i[n]),
                          !(t.indexOf(r) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(e, r) &&
                            (o[r] = e[r]));
                      return o;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                  )
                    for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                      ((n = r[o]),
                        !(t.indexOf(n) >= 0) &&
                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                          (i[n] = e[n]));
                  return i;
                })(o, ["name", "size", "className", "children"])),
              s = (A(i) ||
                (function (e) {
                  var t,
                    r,
                    n =
                      null == e
                        ? null
                        : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                  if (null != n) {
                    var o = [],
                      i = !0,
                      a = !1;
                    try {
                      for (
                        n = n.call(e);
                        !(i = (t = n.next()).done) && (o.push(t.value), 1 !== o.length);
                        i = !0
                      );
                    } catch (e) {
                      ((a = !0), (r = e));
                    } finally {
                      try {
                        i || null == n.return || n.return();
                      } finally {
                        if (a) throw r;
                      }
                    }
                    return o;
                  }
                })(i) ||
                I(i, 1) ||
                E())[0];
            return p().createElement(
              "span",
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                  ("function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                      Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                      })
                    )),
                    n.forEach(function (t) {
                      var n;
                      ((n = r[t]),
                        t in e
                          ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                            })
                          : (e[t] = n));
                    }));
                }
                return e;
              })(
                {
                  ref: s,
                  "aria-hidden": !0,
                  "data-testid": "foundation-web-icon",
                  className: y(
                    "grow-0 shrink-0 basis-auto icon",
                    a,
                    C[void 0 === l ? "Medium" : l],
                    u
                  )
                },
                c
              )
            );
          });
        function N(e, t) {
          if ("function" == typeof e) return e(t);
          null != e && (e.current = t);
        }
        function T(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function R(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            ("function" == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
              )),
              n.forEach(function (t) {
                var n;
                ((n = r[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (e[t] = n));
              }));
          }
          return e;
        }
        function D(e, t) {
          return (
            (t = null != t ? t : {}),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : (function (e) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, r);
                  }
                  return t;
                })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }),
            e
          );
        }
        function L(e, t) {
          if (null == e) return {};
          var r,
            n,
            o,
            i = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (o = 0, r = Reflect.ownKeys(Object(e)); o < r.length; o++)
              ((n = r[o]),
                !(t.indexOf(n) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
            return i;
          }
          if (
            ((i = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = {},
                i = Object.getOwnPropertyNames(e);
              for (n = 0; n < i.length; n++)
                ((r = i[n]),
                  !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (o[r] = e[r]));
              return o;
            })(e, t)),
            Object.getOwnPropertySymbols)
          )
            for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              ((n = r[o]),
                !(t.indexOf(n) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
          return i;
        }
        function M(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return T(e);
            })(e) ||
            (function (e) {
              if (("u" > typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
                return Array.from(e);
            })(e) ||
            (function (e) {
              if (e) {
                if ("string" == typeof e) return T(e, void 0);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t)
                )
                  return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                  return T(e, void 0);
              }
            })(e) ||
            (function () {
              throw TypeError(
                "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function U(e) {
          return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
        }
        k.displayName = "Icon";
        var F = Symbol.for("react.lazy"),
          z = d[" use ".trim().toString()];
        function _(e) {
          var t;
          return (
            null != e &&
            (void 0 === e ? "undefined" : U(e)) === "object" &&
            "$$typeof" in e &&
            e.$$typeof === F &&
            "_payload" in e &&
            (void 0 === (t = e._payload) ? "undefined" : U(t)) === "object" &&
            null !== t &&
            "then" in t
          );
        }
        var W =
            (((e = d.forwardRef(function (e, t) {
              var r = e.children,
                n = L(e, ["children"]);
              if ((_(r) && "function" == typeof z && (r = z(r._payload)), d.isValidElement(r))) {
                var o,
                  i,
                  a,
                  l,
                  u,
                  c = (u =
                    (l =
                      null == (i = Object.getOwnPropertyDescriptor((o = r).props, "ref"))
                        ? void 0
                        : i.get) &&
                    "isReactWarning" in l &&
                    l.isReactWarning)
                    ? o.ref
                    : (u =
                          (l =
                            null == (a = Object.getOwnPropertyDescriptor(o, "ref"))
                              ? void 0
                              : a.get) &&
                          "isReactWarning" in l &&
                          l.isReactWarning)
                      ? o.props.ref
                      : o.props.ref || o.ref,
                  s = (function (e, t) {
                    var r = R({}, t);
                    for (var n in t)
                      !(function (n) {
                        var o = e[n],
                          i = t[n];
                        /^on[A-Z]/.test(n)
                          ? o && i
                            ? (r[n] = function () {
                                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                                  t[r] = arguments[r];
                                var n = i.apply(void 0, M(t));
                                return (o.apply(void 0, M(t)), n);
                              })
                            : o && (r[n] = o)
                          : "style" === n
                            ? (r[n] = R({}, o, i))
                            : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "));
                      })(n);
                    return R({}, e, r);
                  })(n, r.props);
                return (
                  r.type !== d.Fragment &&
                    (s.ref = t
                      ? (function () {
                          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                            t[r] = arguments[r];
                          return function (e) {
                            var r = !1,
                              n = t.map(function (t) {
                                var n = N(t, e);
                                return (r || "function" != typeof n || (r = !0), n);
                              });
                            if (r)
                              return function () {
                                for (var e = 0; e < n.length; e++) {
                                  var r = n[e];
                                  "function" == typeof r ? r() : N(t[e], null);
                                }
                              };
                          };
                        })(t, c)
                      : c),
                  d.cloneElement(r, s)
                );
              }
              return d.Children.count(r) > 1 ? d.Children.only(null) : null;
            })).displayName = "".concat("Slot", ".SlotClone")),
            (t = e),
            ((n = d.forwardRef(function (e, r) {
              var n = e.children,
                o = L(e, ["children"]);
              _(n) && "function" == typeof z && (n = z(n._payload));
              var i = d.Children.toArray(n),
                a = i.find(B);
              if (a) {
                var u = a.props.children,
                  c = i.map(function (e) {
                    return e !== a
                      ? e
                      : d.Children.count(u) > 1
                        ? d.Children.only(null)
                        : d.isValidElement(u)
                          ? u.props.children
                          : null;
                  });
                return (0, l.jsx)(
                  t,
                  D(R({}, o), {
                    ref: r,
                    children: d.isValidElement(u) ? d.cloneElement(u, void 0, c) : null
                  })
                );
              }
              return (0, l.jsx)(t, D(R({}, o), { ref: r, children: n }));
            })).displayName = "".concat("Slot", ".Slot")),
            n),
          K = Symbol("radix.slottable");
        function B(e) {
          return (
            d.isValidElement(e) &&
            "function" == typeof e.type &&
            "__radixId" in e.type &&
            e.type.__radixId === K
          );
        }
        function q(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function $(e) {
          if (Array.isArray(e)) return e;
        }
        function G() {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function H(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            ("function" == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
              )),
              n.forEach(function (t) {
                var n;
                ((n = r[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (e[t] = n));
              }));
          }
          return e;
        }
        function V(e, t) {
          return (
            (t = null != t ? t : {}),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : (function (e) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, r);
                  }
                  return t;
                })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }),
            e
          );
        }
        function X(e, t) {
          if (null == e) return {};
          var r,
            n,
            o,
            i = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (o = 0, r = Reflect.ownKeys(Object(e)); o < r.length; o++)
              ((n = r[o]),
                !(t.indexOf(n) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
            return i;
          }
          if (
            ((i = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = {},
                i = Object.getOwnPropertyNames(e);
              for (n = 0; n < i.length; n++)
                ((r = i[n]),
                  !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (o[r] = e[r]));
              return o;
            })(e, t)),
            Object.getOwnPropertySymbols)
          )
            for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              ((n = r[o]),
                !(t.indexOf(n) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
          return i;
        }
        function Y(e, t) {
          if (e) {
            if ("string" == typeof e) return q(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (
              ("Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r)
            )
              return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
              return q(e, t);
          }
        }
        var J = { Large: 24, Medium: 20, Small: 16, XSmall: 12 },
          Q = {
            Large: ["radius-medium", "text-label-large", "height-1200", "padding-x-medium"],
            Medium: ["radius-medium", "text-label-medium", "height-1000", "padding-x-medium"],
            Small: ["radius-medium", "text-label-small", "height-800", "padding-x-small"],
            XSmall: ["radius-small", "text-label-small", "height-600", "padding-x-small"]
          },
          Z = {
            Emphasis: ["bg-action-emphasis", "content-action-emphasis"],
            Standard: ["bg-action-standard", "content-action-standard"],
            SoftEmphasis: ["bg-action-soft-emphasis", "content-action-soft-emphasis"],
            Utility: ["bg-action-subtle", "content-action-standard"],
            Link: ["bg-action-link", "content-system-emphasis"],
            Alert: ["bg-action-alert", "content-action-alert"],
            ActionUtility: ["bg-action-subtle", "content-action-standard"]
          },
          ee = {
            Emphasis: ["bg-action-standard", "content-action-standard"],
            Standard: ["bg-action-standard", "content-action-standard"],
            SoftEmphasis: ["bg-action-standard", "content-action-standard"],
            Utility: ["bg-action-subtle", "content-action-standard"],
            Link: ["bg-action-link", "content-system-emphasis"],
            Alert: ["bg-action-standard", "content-action-standard"],
            ActionUtility: ["bg-action-subtle", "content-action-standard"]
          },
          et = (0, d.forwardRef)(function (e, t) {
            var r,
              n =
                $((r = [e, t])) ||
                (function (e) {
                  if (
                    ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                    null != e["@@iterator"]
                  )
                    return Array.from(e);
                })(r) ||
                Y(r) ||
                G(),
              o = n[0],
              i = n.slice(1),
              a = o.children,
              l = o.className,
              u = o.style,
              c = o.isDisabled,
              s = void 0 !== c && c,
              f = o.isLoading,
              d = void 0 !== f && f,
              m = o.icon,
              b = o.size,
              h = void 0 === b ? "Large" : b,
              v = o.variant,
              g = void 0 === v ? "Emphasis" : v,
              w = o.asChild,
              P = X(o, [
                "children",
                "className",
                "style",
                "isDisabled",
                "isLoading",
                "icon",
                "size",
                "variant",
                "asChild"
              ]),
              A = ($(i) ||
                (function (e) {
                  var t,
                    r,
                    n =
                      null == e
                        ? null
                        : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                  if (null != n) {
                    var o = [],
                      i = !0,
                      a = !1;
                    try {
                      for (
                        n = n.call(e);
                        !(i = (t = n.next()).done) && (o.push(t.value), 1 !== o.length);
                        i = !0
                      );
                    } catch (e) {
                      ((a = !0), (r = e));
                    } finally {
                      try {
                        i || null == n.return || n.return();
                      } finally {
                        if (a) throw r;
                      }
                    }
                    return o;
                  }
                })(i) ||
                Y(i, 1) ||
                G())[0],
              E = y(
                "foundation-web-button",
                s ? x : [O, "cursor-pointer"],
                "relative flex items-center justify-center stroke-none padding-y-none select-none",
                Q[h],
                s ? ee[g] : Z[g],
                l
              ),
              I = H({ textDecoration: "none" }, u),
              C = function (e) {
                return p().createElement(
                  p().Fragment,
                  null,
                  p().createElement(j, null),
                  d &&
                    p().createElement(
                      "div",
                      { "aria-hidden": "true", className: "absolute flex" },
                      p().createElement(S, { width: J[h], height: J[h] })
                    ),
                  p().createElement(
                    "span",
                    {
                      className: y(
                        "flex items-center min-width-0",
                        "Large" === h || "Medium" === h ? "gap-small" : "gap-xsmall",
                        d && "invisible"
                      )
                    },
                    m && p().createElement(k, { name: m, size: h }),
                    p().createElement(
                      "span",
                      { className: "padding-y-xsmall text-truncate-end text-no-wrap" },
                      e
                    )
                  )
                );
              };
            if (w) {
              P.as;
              var N = X(P, ["as"]),
                T = p().Children.only(a);
              return p().createElement(
                W,
                V(H({ ref: A }, N), { className: E, style: I, "aria-disabled": s || void 0 }),
                p().cloneElement(T, {}, C(T.props.children))
              );
            }
            if ("a" === P.as) {
              P.as;
              var R = P.href,
                D = X(P, ["as", "href"]);
              return p().createElement(
                "a",
                V(H({ ref: A }, D), {
                  "aria-disabled": s,
                  href: s ? void 0 : R,
                  className: E,
                  style: I
                }),
                C(a)
              );
            }
            P.as;
            var L = X(P, ["as"]);
            return p().createElement(
              "button",
              V(H({ ref: A, type: "button" }, L), { disabled: s, className: E, style: I }),
              C(a)
            );
          }),
          er = { Small: "padding-xsmall", Medium: "padding-small", Large: "padding-medium" },
          en = { Utility: "bg-action-link", OverMedia: "bg-over-media-100" },
          eo = function (e) {
            var t = e.variant,
              r = e.size,
              n = e.isCircular,
              o = e.className,
              i = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o,
                  i = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                  for (o = 0, r = Reflect.ownKeys(Object(e)); o < r.length; o++)
                    ((n = r[o]),
                      !(t.indexOf(n) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                        (i[n] = e[n]));
                  return i;
                }
                if (
                  ((i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                      n,
                      o = {},
                      i = Object.getOwnPropertyNames(e);
                    for (n = 0; n < i.length; n++)
                      ((r = i[n]),
                        !(t.indexOf(r) >= 0) &&
                          Object.prototype.propertyIsEnumerable.call(e, r) &&
                          (o[r] = e[r]));
                    return o;
                  })(e, t)),
                  Object.getOwnPropertySymbols)
                )
                  for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    ((n = r[o]),
                      !(t.indexOf(n) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                        (i[n] = e[n]));
                return i;
              })(e, ["variant", "size", "isCircular", "className"]);
            return p().createElement(
              "button",
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                  ("function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                      Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                      })
                    )),
                    n.forEach(function (t) {
                      var n;
                      ((n = r[t]),
                        t in e
                          ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                            })
                          : (e[t] = n));
                    }));
                }
                return e;
              })(
                {
                  type: "button",
                  className: y(
                    "foundation-web-close-affordance flex stroke-none bg-none cursor-pointer",
                    O,
                    en[t],
                    er[r],
                    n && "radius-circle",
                    o
                  )
                },
                i
              ),
              p().createElement(j, null),
              p().createElement(k, { name: "icon-regular-x", size: r })
            );
          };
        function ei(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function ea(e) {
          if (Array.isArray(e)) return e;
        }
        function el() {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function eu(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            ("function" == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
              )),
              n.forEach(function (t) {
                var n;
                ((n = r[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (e[t] = n));
              }));
          }
          return e;
        }
        function ec(e, t) {
          return (
            ea(e) ||
            (function (e, t) {
              var r,
                n,
                o =
                  null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
              if (null != o) {
                var i = [],
                  a = !0,
                  l = !1;
                try {
                  for (
                    o = o.call(e);
                    !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t);
                    a = !0
                  );
                } catch (e) {
                  ((l = !0), (n = e));
                } finally {
                  try {
                    a || null == o.return || o.return();
                  } finally {
                    if (l) throw n;
                  }
                }
                return i;
              }
            })(e, t) ||
            es(e, t) ||
            el()
          );
        }
        function es(e, t) {
          if (e) {
            if ("string" == typeof e) return ei(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (
              ("Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r)
            )
              return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
              return ei(e, t);
          }
        }
        var ef = (0, d.forwardRef)(function (e, t) {
            var r,
              n,
              o,
              i =
                ea((r = [e, t])) ||
                (function (e) {
                  if (
                    ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                    null != e["@@iterator"]
                  )
                    return Array.from(e);
                })(r) ||
                es(r) ||
                el(),
              a = i[0],
              l = i.slice(1),
              u = a.title,
              c = a.icon,
              s = a.actionLabel,
              f = a.onAction,
              m = a.actions,
              b = a.onClose,
              h = a.closeIconAriaLabel,
              v = a.shouldAutoDismiss,
              g = a.autoDismissDurationMs,
              w = a.className,
              O = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o,
                  i = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                  for (o = 0, r = Reflect.ownKeys(Object(e)); o < r.length; o++)
                    ((n = r[o]),
                      !(t.indexOf(n) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                        (i[n] = e[n]));
                  return i;
                }
                if (
                  ((i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                      n,
                      o = {},
                      i = Object.getOwnPropertyNames(e);
                    for (n = 0; n < i.length; n++)
                      ((r = i[n]),
                        !(t.indexOf(r) >= 0) &&
                          Object.prototype.propertyIsEnumerable.call(e, r) &&
                          (o[r] = e[r]));
                    return o;
                  })(e, t)),
                  Object.getOwnPropertySymbols)
                )
                  for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    ((n = r[o]),
                      !(t.indexOf(n) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                        (i[n] = e[n]));
                return i;
              })(a, [
                "title",
                "icon",
                "actionLabel",
                "onAction",
                "actions",
                "onClose",
                "closeIconAriaLabel",
                "shouldAutoDismiss",
                "autoDismissDurationMs",
                "className"
              ]),
              j = ec(l, 1)[0],
              x = ec((0, d.useState)("enter"), 2),
              S = x[0],
              P = x[1],
              A = (0, d.useRef)(void 0),
              E = (0, d.useRef)(void 0),
              I = (0, d.useRef)(void 0),
              C = (0, d.useRef)(null),
              N =
                null != m
                  ? m
                  : s &&
                    f &&
                    p().createElement(
                      et,
                      {
                        size: "Small",
                        variant: "Utility",
                        className: "content-inverse-emphasis",
                        onClick: f,
                        ref: C
                      },
                      s
                    ),
              T = !!N,
              R = u.length > 80,
              D = null == v || v,
              L = 4e3;
            T && (L = R ? 1e4 : 7e3);
            var M = null != g ? g : L,
              U = (0, d.useCallback)(
                function () {
                  "exit" !== S &&
                    (P("exit"),
                    void 0 !== E.current && (window.clearTimeout(E.current), (E.current = void 0)),
                    (I.current = window.setTimeout(function () {
                      null == b || b();
                    }, 150)));
                },
                [b, S]
              );
            ((0, d.useEffect)(function () {
              return (
                (A.current = window.requestAnimationFrame(function () {
                  P("idle");
                })),
                function () {
                  void 0 !== A.current && window.cancelAnimationFrame(A.current);
                }
              );
            }, []),
              (0, d.useEffect)(
                function () {
                  (void 0 !== E.current && (window.clearTimeout(E.current), (E.current = void 0)),
                    D &&
                      "exit" !== S &&
                      (E.current = window.setTimeout(function () {
                        U();
                      }, M)));
                },
                [M, D, S, U]
              ),
              (0, d.useEffect)(
                function () {
                  var e;
                  T && (null == (e = C.current) || e.focus());
                },
                [T]
              ),
              (0, d.useEffect)(function () {
                return function () {
                  (void 0 !== E.current && window.clearTimeout(E.current),
                    void 0 !== I.current && window.clearTimeout(I.current),
                    void 0 !== A.current && window.cancelAnimationFrame(A.current));
                };
              }, []));
            var F = {
                position: "fixed",
                left: "50%",
                bottom: "max(var(--padding-xxlarge, 32px), env(safe-area-inset-bottom))",
                transform: "translate(-50%, ".concat("idle" === S ? "0" : "120%", ")"),
                zIndex: "var(--foundation-portal-zindex, 9999)"
              },
              z = O.style ? eu({}, F, O.style) : F;
            return p().createElement(
              "div",
              eu(
                {
                  ref: j,
                  role: "status",
                  "aria-live": "polite",
                  className: y(
                    "flex items-center gap-xxlarge radius-medium shadow-transient-low bg-inverse-surface-0 padding-x-medium padding-y-medium stroke-standard shrink-0",
                    "max-width-[480px] min-height-[48px]",
                    "min-width-[min(100%-max(2_*_var(--margin-small),env(safe-area-inset-left)+env(safe-area-inset-right)),393px)]",
                    "foundation-web-portal-zindex pointer-events-auto",
                    "exit" === S ? "ease-standard-in" : "ease-standard-out",
                    w
                  ),
                  style:
                    ((n = eu({}, z)),
                    (o = o =
                      {
                        transitionDuration: "".concat("exit" === S ? 150 : 200, "ms"),
                        transitionProperty: "transform"
                      }),
                    Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                      : (function (e) {
                          var t = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t.push.apply(t, r);
                          }
                          return t;
                        })(Object(o)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                        }),
                    n)
                },
                O
              ),
              p().createElement(
                "div",
                { className: "flex items-center gap-medium grow-1 basis-0 min-h-[40px]" },
                c &&
                  p().createElement(k, {
                    name: c,
                    size: "Small",
                    className: "shrink-0 content-inverse-emphasis"
                  }),
                p().createElement(
                  "div",
                  {
                    className:
                      "grow-1 basis-0 text-caption-large content-inverse-emphasis text-truncate-end"
                  },
                  u
                )
              ),
              p().createElement(
                "div",
                { className: "flex items-center justify-end gap-small shrink-0" },
                N,
                b &&
                  p().createElement(eo, {
                    variant: "Utility",
                    size: "Small",
                    isCircular: !0,
                    className: "content-inverse-emphasis",
                    "aria-label": void 0 === h ? "Dismiss snackbar" : h,
                    onClick: U
                  })
              )
            );
          }),
          ed = window.Roblox,
          ep = window.Roblox["core-scripts"].http.http;
        function ey(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function em(e, t, r, n, o, i, a) {
          try {
            var l = e[i](a),
              u = l.value;
          } catch (e) {
            r(e);
            return;
          }
          l.done ? t(u) : Promise.resolve(u).then(n, o);
        }
        var eb = function (e) {
          var t;
          return ((t = function () {
            var t, r, n, o, i, a, l, u, c, s, f, d;
            return (function (e, t) {
              var r,
                n,
                o,
                i = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: []
                },
                a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype),
                l = Object.defineProperty;
              return (
                l(a, "next", { value: u(0) }),
                l(a, "throw", { value: u(1) }),
                l(a, "return", { value: u(2) }),
                "function" == typeof Symbol &&
                  l(a, Symbol.iterator, {
                    value: function () {
                      return this;
                    }
                  }),
                a
              );
              function u(l) {
                return function (u) {
                  var c = [l, u];
                  if (r) throw TypeError("Generator is already executing.");
                  for (; a && ((a = 0), c[0] && (i = 0)), i;)
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (o =
                            2 & c[0]
                              ? n.return
                              : c[0]
                                ? n.throw || ((o = n.return) && o.call(n), 0)
                                : n.next) &&
                          !(o = o.call(n, c[1])).done)
                      )
                        return o;
                      switch (((n = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                        case 0:
                        case 1:
                          o = c;
                          break;
                        case 4:
                          return (i.label++, { value: c[1], done: !1 });
                        case 5:
                          (i.label++, (n = c[1]), (c = [0]));
                          continue;
                        case 7:
                          ((c = i.ops.pop()), i.trys.pop());
                          continue;
                        default:
                          if (
                            !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                            (6 === c[0] || 2 === c[0])
                          ) {
                            i = 0;
                            continue;
                          }
                          if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                            i.label = c[1];
                            break;
                          }
                          if (6 === c[0] && i.label < o[1]) {
                            ((i.label = o[1]), (o = c));
                            break;
                          }
                          if (o && i.label < o[2]) {
                            ((i.label = o[2]), i.ops.push(c));
                            break;
                          }
                          (o[2] && i.ops.pop(), i.trys.pop());
                          continue;
                      }
                      c = t.call(e, i);
                    } catch (e) {
                      ((c = [6, e]), (n = 0));
                    } finally {
                      r = o = 0;
                    }
                  if (5 & c[0]) throw c[1];
                  return { value: c[0] ? c[1] : void 0, done: !0 };
                };
              }
            })(this, function (p) {
              switch (p.label) {
                case 0:
                  var y;
                  if (
                    0 ===
                    (r =
                      (function (e) {
                        if (Array.isArray(e)) return ey(e);
                      })((y = new Set(e))) ||
                      (function (e) {
                        if (
                          ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                          null != e["@@iterator"]
                        )
                          return Array.from(e);
                      })(y) ||
                      (function (e) {
                        if (e) {
                          if ("string" == typeof e) return ey(e, void 0);
                          var t = Object.prototype.toString.call(e).slice(8, -1);
                          if (
                            ("Object" === t && e.constructor && (t = e.constructor.name),
                            "Map" === t || "Set" === t)
                          )
                            return Array.from(t);
                          if (
                            "Arguments" === t ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                          )
                            return ey(e, void 0);
                        }
                      })(y) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()).length
                  )
                    return [2, {}];
                  return (
                    (n = {
                      url: "".concat(
                        ed.EnvironmentUrls.apiGatewayUrl,
                        "/user-profile-api/v1/user/profiles/get-profiles"
                      ),
                      retryable: !0,
                      withCredentials: !0
                    }),
                    (o = { userIds: r, fields: ["hasRobloxSubscription"] }),
                    [4, ep.post(n, o)]
                  );
                case 1:
                  ((i = p.sent().data), (a = {}), (l = !0), (u = !1), (c = void 0));
                  try {
                    for (
                      s = (null != (t = i.profileDetails) ? t : [])[Symbol.iterator]();
                      !(l = (f = s.next()).done);
                      l = !0
                    )
                      a[(d = f.value).userId] = !0 === d.hasRobloxSubscription;
                  } catch (e) {
                    ((u = !0), (c = e));
                  } finally {
                    try {
                      l || null == s.return || s.return();
                    } finally {
                      if (u) throw c;
                    }
                  }
                  return [2, a];
              }
            });
          }),
          function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(e, r);
              function a(e) {
                em(i, n, o, a, l, "next", e);
              }
              function l(e) {
                em(i, n, o, a, l, "throw", e);
              }
              a(void 0);
            });
          })();
        };
        function eh(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function ev(e, t, r, n, o, i, a) {
          try {
            var l = e[i](a),
              u = l.value;
          } catch (e) {
            r(e);
            return;
          }
          l.done ? t(u) : Promise.resolve(u).then(n, o);
        }
        var eg = new Map(),
          ew = !1,
          eO = function () {
            var e;
            return ((e = function () {
              var e,
                t,
                r,
                n,
                o,
                i,
                a,
                l,
                u,
                c,
                s,
                f,
                d,
                p,
                y,
                m,
                b,
                h,
                v,
                g,
                w,
                O,
                j,
                x,
                S,
                P,
                A,
                E,
                I,
                C;
              return (function (e, t) {
                var r,
                  n,
                  o,
                  i = {
                    label: 0,
                    sent: function () {
                      if (1 & o[0]) throw o[1];
                      return o[1];
                    },
                    trys: [],
                    ops: []
                  },
                  a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype),
                  l = Object.defineProperty;
                return (
                  l(a, "next", { value: u(0) }),
                  l(a, "throw", { value: u(1) }),
                  l(a, "return", { value: u(2) }),
                  "function" == typeof Symbol &&
                    l(a, Symbol.iterator, {
                      value: function () {
                        return this;
                      }
                    }),
                  a
                );
                function u(l) {
                  return function (u) {
                    var c = [l, u];
                    if (r) throw TypeError("Generator is already executing.");
                    for (; a && ((a = 0), c[0] && (i = 0)), i;)
                      try {
                        if (
                          ((r = 1),
                          n &&
                            (o =
                              2 & c[0]
                                ? n.return
                                : c[0]
                                  ? n.throw || ((o = n.return) && o.call(n), 0)
                                  : n.next) &&
                            !(o = o.call(n, c[1])).done)
                        )
                          return o;
                        switch (((n = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                          case 0:
                          case 1:
                            o = c;
                            break;
                          case 4:
                            return (i.label++, { value: c[1], done: !1 });
                          case 5:
                            (i.label++, (n = c[1]), (c = [0]));
                            continue;
                          case 7:
                            ((c = i.ops.pop()), i.trys.pop());
                            continue;
                          default:
                            if (
                              !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                              (6 === c[0] || 2 === c[0])
                            ) {
                              i = 0;
                              continue;
                            }
                            if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                              i.label = c[1];
                              break;
                            }
                            if (6 === c[0] && i.label < o[1]) {
                              ((i.label = o[1]), (o = c));
                              break;
                            }
                            if (o && i.label < o[2]) {
                              ((i.label = o[2]), i.ops.push(c));
                              break;
                            }
                            (o[2] && i.ops.pop(), i.trys.pop());
                            continue;
                        }
                        c = t.call(e, i);
                      } catch (e) {
                        ((c = [6, e]), (n = 0));
                      } finally {
                        r = o = 0;
                      }
                    if (5 & c[0]) throw c[1];
                    return { value: c[0] ? c[1] : void 0, done: !0 };
                  };
                }
              })(this, function (k) {
                switch (k.label) {
                  case 0:
                    var N;
                    if (((e = eg), (eg = new Map()), (ew = !1), 0 === e.size)) return [2];
                    ((t =
                      (function (e) {
                        if (Array.isArray(e)) return eh(e);
                      })((N = e.keys())) ||
                      (function (e) {
                        if (
                          ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                          null != e["@@iterator"]
                        )
                          return Array.from(e);
                      })(N) ||
                      (function (e) {
                        if (e) {
                          if ("string" == typeof e) return eh(e, void 0);
                          var t = Object.prototype.toString.call(e).slice(8, -1);
                          if (
                            ("Object" === t && e.constructor && (t = e.constructor.name),
                            "Map" === t || "Set" === t)
                          )
                            return Array.from(t);
                          if (
                            "Arguments" === t ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                          )
                            return eh(e, void 0);
                        }
                      })(N) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()),
                      (k.label = 1));
                  case 1:
                    return (k.trys.push([1, 3, , 4]), [4, eb(t)]);
                  case 2:
                    ((r = k.sent()), (n = !0), (o = !1), (i = void 0));
                    try {
                      for (a = t[Symbol.iterator](); !(n = (l = a.next()).done); n = !0) {
                        ((u = l.value),
                          (s = null != (c = e.get(u)) ? c : []),
                          (f = !0),
                          (d = !1),
                          (p = void 0));
                        try {
                          for (y = s[Symbol.iterator](); !(f = (m = y.next()).done); f = !0)
                            (0, m.value.resolve)(!0 === r[u]);
                        } catch (e) {
                          ((d = !0), (p = e));
                        } finally {
                          try {
                            f || null == y.return || y.return();
                          } finally {
                            if (d) throw p;
                          }
                        }
                      }
                    } catch (e) {
                      ((o = !0), (i = e));
                    } finally {
                      try {
                        n || null == a.return || a.return();
                      } finally {
                        if (o) throw i;
                      }
                    }
                    return [3, 4];
                  case 3:
                    ((b = k.sent()), (h = !0), (v = !1), (g = void 0));
                    try {
                      for (w = t[Symbol.iterator](); !(h = (O = w.next()).done); h = !0) {
                        ((j = O.value),
                          (S = null != (x = e.get(j)) ? x : []),
                          (P = !0),
                          (A = !1),
                          (E = void 0));
                        try {
                          for (I = S[Symbol.iterator](); !(P = (C = I.next()).done); P = !0)
                            (0, C.value.reject)(b);
                        } catch (e) {
                          ((A = !0), (E = e));
                        } finally {
                          try {
                            P || null == I.return || I.return();
                          } finally {
                            if (A) throw E;
                          }
                        }
                      }
                    } catch (e) {
                      ((v = !0), (g = e));
                    } finally {
                      try {
                        h || null == w.return || w.return();
                      } finally {
                        if (v) throw g;
                      }
                    }
                    return [3, 4];
                  case 4:
                    return [2];
                }
              });
            }),
            function () {
              var t = this,
                r = arguments;
              return new Promise(function (n, o) {
                var i = e.apply(t, r);
                function a(e) {
                  ev(i, n, o, a, l, "next", e);
                }
                function l(e) {
                  ev(i, n, o, a, l, "throw", e);
                }
                a(void 0);
              });
            })();
          },
          ej = window.Roblox["core-scripts"].guac,
          ex = "web-plus-identity-badge",
          eS = function (e) {
            return (
              (void 0 === e
                ? "undefined"
                : e && "u" > typeof Symbol && e.constructor === Symbol
                  ? "symbol"
                  : typeof e) == "object" && null !== e
            );
          },
          eP = function () {
            var e = (0, u.useQuery)({
              queryKey: ["guac/".concat(ex)],
              queryFn: function () {
                return (0, ej.callBehaviour)(ex);
              },
              staleTime: 1 / 0
            }).data;
            return eS(e) && !0 === e.plusIdentityBadgeEnabled;
          };
        function eA(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var eE = function (e) {
            var t = eP(),
              r = (0, d.useMemo)(
                function () {
                  var t;
                  return (
                    (function (e) {
                      if (Array.isArray(e)) return eA(e);
                    })((t = new Set(e))) ||
                    (function (e) {
                      if (
                        ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                        null != e["@@iterator"]
                      )
                        return Array.from(e);
                    })(t) ||
                    (function (e) {
                      if (e) {
                        if ("string" == typeof e) return eA(e, void 0);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (
                          ("Object" === t && e.constructor && (t = e.constructor.name),
                          "Map" === t || "Set" === t)
                        )
                          return Array.from(t);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                          return eA(e, void 0);
                      }
                    })(t) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                  ).sort(function (e, t) {
                    return e - t;
                  });
                },
                [e]
              ),
              n = (0, u.useQueries)({
                queries: r.map(function (e) {
                  return {
                    queryKey: ["identity-badges/plusStatus/byUser", e],
                    queryFn: function () {
                      return new Promise(function (t, r) {
                        var n,
                          o = null != (n = eg.get(e)) ? n : [];
                        (o.push({ resolve: t, reject: r }),
                          eg.set(e, o),
                          ew ||
                            ((ew = !0),
                            queueMicrotask(function () {
                              eO().catch(function () {});
                            })));
                      });
                    },
                    enabled: t,
                    staleTime: 1 / 0
                  };
                })
              }),
              o = {},
              i = !1;
            return (
              r.forEach(function (e, t) {
                var r, a;
                ((o[e] = (null == (r = n[t]) ? void 0 : r.data) === !0),
                  (null == (a = n[t]) ? void 0 : a.isFetching) && (i = !0));
              }),
              { data: o, isLoading: i }
            );
          },
          eI = window.Roblox["core-scripts"].environmentUrls,
          eC = r.n(eI),
          ek = {
            notFriends: "NotFriends",
            friends: "Friends",
            requestSent: "RequestSent",
            requestReceived: "RequestReceived"
          },
          eN = {
            urls: {
              omniSearchUrl: "".concat(eC().apiGatewayUrl, "/search-api/omni-search"),
              chatMetadataUrl: "".concat(eC().apiGatewayUrl, "/platform-chat-api/v1/metadata"),
              requestFriendshipUrl: "".concat(
                eC().friendsApi,
                "/v1/users/{targetId}/request-friendship"
              ),
              acceptFriendRequestUrl: "".concat(
                eC().friendsApi,
                "/v1/users/{targetId}/accept-friend-request"
              ),
              friendshipStatusesUrl: "".concat(eC().friendsApi, "/v1/users"),
              followingExistsUrl: "".concat(eC().friendsApi, "/v1/user/following-exists"),
              primaryGroupUrl: "".concat(eC().groupsApi, "/v1/users"),
              gamePlayabilityUrl: "".concat(eC().gamesApi, "/v1/games/multiget-playability-status")
            },
            eventNames: {
              playerTileClick: "playerTileClick",
              playerFriendAdd: "playerFriendAdd",
              playerTileImpression: "playerTileImpression",
              playerFriendAccept: "playerFriendAccept"
            },
            pageData: { keywordMinLength: 3 },
            playerSearchEventContext: "playerSearch",
            playerSearchFriendshipOriginSourceType: "PlayerSearch",
            friendshipStatuses: ek
          },
          eT = {
            initialized: !1,
            keyword: "",
            nextPageCursor: "",
            paginationMethod: "Scroll",
            results: [],
            resultsLoading: !1,
            isKeywordTooShort: !0,
            unsafeInputDetected: !1
          },
          eR = window.CoreUtilities;
        function eD(e) {
          return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
        }
        var eL = function () {
            var e = Reflect.get(window, "Roblox");
            return (void 0 === e ? "undefined" : eD(e)) === "object" && null !== e ? e : {};
          },
          eM = function () {
            var e;
            return null != (e = eL().CurrentUser) ? e : { userId: "0", isAuthenticated: !1 };
          },
          eU = function () {
            var e;
            return null != (e = eL().EventStream) ? e : null;
          },
          eF = function () {
            var e;
            return null != (e = eL().GameLauncher) ? e : null;
          },
          ez = function () {
            var e;
            return null != (e = eL().Guac) ? e : null;
          },
          e_ = function (e) {
            return (
              (void 0 === e ? "undefined" : eD(e)) === "object" &&
              null !== e &&
              ("function" == typeof e.getPresenceProvider ||
                "function" == typeof e.getPresences ||
                "function" == typeof e.subscribeToPresenceChanges)
            );
          },
          eW = function () {
            var e = Reflect.get(window, "RobloxPresence");
            if (e_(e)) return e;
            var t = eL().Presence;
            return e_(t) ? t : null;
          },
          eK = function () {
            var e = eW();
            return e
              ? "function" == typeof e.getPresenceProvider
                ? e.getPresenceProvider()
                : "function" == typeof e.getPresences ||
                    "function" == typeof e.subscribeToPresenceChanges
                  ? e
                  : null
              : null;
          },
          eB = function () {
            var e,
              t,
              r = null == (t = eL().RealTime) ? void 0 : t.Factory;
            return "function" != typeof (null == r ? void 0 : r.GetClient)
              ? null
              : null != (e = r.GetClient())
                ? e
                : null;
          },
          eq = function () {
            var e = eL().DeviceMeta;
            return e ? new e() : {};
          };
        function e$(e, t, r, n, o, i, a) {
          try {
            var l = e[i](a),
              u = l.value;
          } catch (e) {
            r(e);
            return;
          }
          l.done ? t(u) : Promise.resolve(u).then(n, o);
        }
        function eG(e) {
          return function () {
            var t = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = e.apply(t, r);
              function a(e) {
                e$(i, n, o, a, l, "next", e);
              }
              function l(e) {
                e$(i, n, o, a, l, "throw", e);
              }
              a(void 0);
            });
          };
        }
        function eH(e, t) {
          var r,
            n,
            o,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: []
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype),
            l = Object.defineProperty;
          return (
            l(a, "next", { value: u(0) }),
            l(a, "throw", { value: u(1) }),
            l(a, "return", { value: u(2) }),
            "function" == typeof Symbol &&
              l(a, Symbol.iterator, {
                value: function () {
                  return this;
                }
              }),
            a
          );
          function u(l) {
            return function (u) {
              var c = [l, u];
              if (r) throw TypeError("Generator is already executing.");
              for (; a && ((a = 0), c[0] && (i = 0)), i;)
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o =
                        2 & c[0]
                          ? n.return
                          : c[0]
                            ? n.throw || ((o = n.return) && o.call(n), 0)
                            : n.next) &&
                      !(o = o.call(n, c[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                    case 0:
                    case 1:
                      o = c;
                      break;
                    case 4:
                      return (i.label++, { value: c[1], done: !1 });
                    case 5:
                      (i.label++, (n = c[1]), (c = [0]));
                      continue;
                    case 7:
                      ((c = i.ops.pop()), i.trys.pop());
                      continue;
                    default:
                      if (
                        !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                        (6 === c[0] || 2 === c[0])
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                        i.label = c[1];
                        break;
                      }
                      if (6 === c[0] && i.label < o[1]) {
                        ((i.label = o[1]), (o = c));
                        break;
                      }
                      if (o && i.label < o[2]) {
                        ((i.label = o[2]), i.ops.push(c));
                        break;
                      }
                      (o[2] && i.ops.pop(), i.trys.pop());
                      continue;
                  }
                  c = t.call(e, i);
                } catch (e) {
                  ((c = [6, e]), (n = 0));
                } finally {
                  r = o = 0;
                }
              if (5 & c[0]) throw c[1];
              return { value: c[0] ? c[1] : void 0, done: !0 };
            };
          }
        }
        function eV(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function eX(e, t, r, n, o, i, a) {
          try {
            var l = e[i](a),
              u = l.value;
          } catch (e) {
            r(e);
            return;
          }
          l.done ? t(u) : Promise.resolve(u).then(n, o);
        }
        function eY(e) {
          return function () {
            var t = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = e.apply(t, r);
              function a(e) {
                eX(i, n, o, a, l, "next", e);
              }
              function l(e) {
                eX(i, n, o, a, l, "throw", e);
              }
              a(void 0);
            });
          };
        }
        function eJ(e, t) {
          var r,
            n,
            o,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: []
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype),
            l = Object.defineProperty;
          return (
            l(a, "next", { value: u(0) }),
            l(a, "throw", { value: u(1) }),
            l(a, "return", { value: u(2) }),
            "function" == typeof Symbol &&
              l(a, Symbol.iterator, {
                value: function () {
                  return this;
                }
              }),
            a
          );
          function u(l) {
            return function (u) {
              var c = [l, u];
              if (r) throw TypeError("Generator is already executing.");
              for (; a && ((a = 0), c[0] && (i = 0)), i;)
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o =
                        2 & c[0]
                          ? n.return
                          : c[0]
                            ? n.throw || ((o = n.return) && o.call(n), 0)
                            : n.next) &&
                      !(o = o.call(n, c[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                    case 0:
                    case 1:
                      o = c;
                      break;
                    case 4:
                      return (i.label++, { value: c[1], done: !1 });
                    case 5:
                      (i.label++, (n = c[1]), (c = [0]));
                      continue;
                    case 7:
                      ((c = i.ops.pop()), i.trys.pop());
                      continue;
                    default:
                      if (
                        !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                        (6 === c[0] || 2 === c[0])
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                        i.label = c[1];
                        break;
                      }
                      if (6 === c[0] && i.label < o[1]) {
                        ((i.label = o[1]), (o = c));
                        break;
                      }
                      if (o && i.label < o[2]) {
                        ((i.label = o[2]), i.ops.push(c));
                        break;
                      }
                      (o[2] && i.ops.pop(), i.trys.pop());
                      continue;
                  }
                  c = t.call(e, i);
                } catch (e) {
                  ((c = [6, e]), (n = 0));
                } finally {
                  r = o = 0;
                }
              if (5 & c[0]) throw c[1];
              return { value: c[0] ? c[1] : void 0, done: !0 };
            };
          }
        }
        var eQ = function (e) {
            return !!(e.universeId && 2 === e.userPresenceType && e.gameId);
          },
          eZ = function (e) {
            return eY(function () {
              return eJ(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (0 === e.length) return [2, []];
                    if (!eM().isAuthenticated)
                      return [
                        2,
                        e.map(function (e) {
                          return { universeId: e, isPlayable: !1 };
                        })
                      ];
                    t.label = 1;
                  case 1:
                    return (
                      t.trys.push([1, 3, , 4]),
                      [
                        4,
                        eR.httpService.get(
                          { retryable: !0, url: eN.urls.gamePlayabilityUrl, withCredentials: !0 },
                          { universeIds: e.join(",") }
                        )
                      ]
                    );
                  case 2:
                    return [2, t.sent().data];
                  case 3:
                    return (
                      console.error(
                        "playerSearch: game playability lookup failed, dropping Join and the in-game caption line",
                        { universeIds: e, error: t.sent() }
                      ),
                      [
                        2,
                        e.map(function (e) {
                          return { universeId: e, isPlayable: !1 };
                        })
                      ]
                    );
                  case 4:
                    return [2];
                }
              });
            })();
          };
        function e0(e, t, r, n, o, i, a) {
          try {
            var l = e[i](a),
              u = l.value;
          } catch (e) {
            r(e);
            return;
          }
          l.done ? t(u) : Promise.resolve(u).then(n, o);
        }
        function e1(e) {
          return function () {
            var t = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = e.apply(t, r);
              function a(e) {
                e0(i, n, o, a, l, "next", e);
              }
              function l(e) {
                e0(i, n, o, a, l, "throw", e);
              }
              a(void 0);
            });
          };
        }
        function e2(e, t) {
          var r,
            n,
            o,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: []
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype),
            l = Object.defineProperty;
          return (
            l(a, "next", { value: u(0) }),
            l(a, "throw", { value: u(1) }),
            l(a, "return", { value: u(2) }),
            "function" == typeof Symbol &&
              l(a, Symbol.iterator, {
                value: function () {
                  return this;
                }
              }),
            a
          );
          function u(l) {
            return function (u) {
              var c = [l, u];
              if (r) throw TypeError("Generator is already executing.");
              for (; a && ((a = 0), c[0] && (i = 0)), i;)
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o =
                        2 & c[0]
                          ? n.return
                          : c[0]
                            ? n.throw || ((o = n.return) && o.call(n), 0)
                            : n.next) &&
                      !(o = o.call(n, c[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                    case 0:
                    case 1:
                      o = c;
                      break;
                    case 4:
                      return (i.label++, { value: c[1], done: !1 });
                    case 5:
                      (i.label++, (n = c[1]), (c = [0]));
                      continue;
                    case 7:
                      ((c = i.ops.pop()), i.trys.pop());
                      continue;
                    default:
                      if (
                        !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                        (6 === c[0] || 2 === c[0])
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                        i.label = c[1];
                        break;
                      }
                      if (6 === c[0] && i.label < o[1]) {
                        ((i.label = o[1]), (o = c));
                        break;
                      }
                      if (o && i.label < o[2]) {
                        ((i.label = o[2]), i.ops.push(c));
                        break;
                      }
                      (o[2] && i.ops.pop(), i.trys.pop());
                      continue;
                  }
                  c = t.call(e, i);
                } catch (e) {
                  ((c = [6, e]), (n = 0));
                } finally {
                  r = o = 0;
                }
              if (5 & c[0]) throw c[1];
              return { value: c[0] ? c[1] : void 0, done: !0 };
            };
          }
        }
        var e3 = function (e, t) {
          return e.replace("{targetId}", String(t));
        };
        function e4(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function e6(e, t, r, n, o, i, a) {
          try {
            var l = e[i](a),
              u = l.value;
          } catch (e) {
            r(e);
            return;
          }
          l.done ? t(u) : Promise.resolve(u).then(n, o);
        }
        function e8(e) {
          return function () {
            var t = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = e.apply(t, r);
              function a(e) {
                e6(i, n, o, a, l, "next", e);
              }
              function l(e) {
                e6(i, n, o, a, l, "throw", e);
              }
              a(void 0);
            });
          };
        }
        function e5(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var r,
                n,
                o =
                  null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
              if (null != o) {
                var i = [],
                  a = !0,
                  l = !1;
                try {
                  for (
                    o = o.call(e);
                    !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t);
                    a = !0
                  );
                } catch (e) {
                  ((l = !0), (n = e));
                } finally {
                  try {
                    a || null == o.return || o.return();
                  } finally {
                    if (l) throw n;
                  }
                }
                return i;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return e4(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r)
                )
                  return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                  return e4(e, t);
              }
            })(e, t) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function e7(e, t) {
          var r,
            n,
            o,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: []
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype),
            l = Object.defineProperty;
          return (
            l(a, "next", { value: u(0) }),
            l(a, "throw", { value: u(1) }),
            l(a, "return", { value: u(2) }),
            "function" == typeof Symbol &&
              l(a, Symbol.iterator, {
                value: function () {
                  return this;
                }
              }),
            a
          );
          function u(l) {
            return function (u) {
              var c = [l, u];
              if (r) throw TypeError("Generator is already executing.");
              for (; a && ((a = 0), c[0] && (i = 0)), i;)
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o =
                        2 & c[0]
                          ? n.return
                          : c[0]
                            ? n.throw || ((o = n.return) && o.call(n), 0)
                            : n.next) &&
                      !(o = o.call(n, c[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                    case 0:
                    case 1:
                      o = c;
                      break;
                    case 4:
                      return (i.label++, { value: c[1], done: !1 });
                    case 5:
                      (i.label++, (n = c[1]), (c = [0]));
                      continue;
                    case 7:
                      ((c = i.ops.pop()), i.trys.pop());
                      continue;
                    default:
                      if (
                        !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                        (6 === c[0] || 2 === c[0])
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                        i.label = c[1];
                        break;
                      }
                      if (6 === c[0] && i.label < o[1]) {
                        ((i.label = o[1]), (o = c));
                        break;
                      }
                      if (o && i.label < o[2]) {
                        ((i.label = o[2]), i.ops.push(c));
                        break;
                      }
                      (o[2] && i.ops.pop(), i.trys.pop());
                      continue;
                  }
                  c = t.call(e, i);
                } catch (e) {
                  ((c = [6, e]), (n = 0));
                } finally {
                  r = o = 0;
                }
              if (5 & c[0]) throw c[1];
              return { value: c[0] ? c[1] : void 0, done: !0 };
            };
          }
        }
        var e9 = eR.uuidService.generateRandomUuid(),
          te = function (e, t) {
            var r,
              n = t.trim().toLowerCase();
            return n &&
              0 !== e.previousUsernames.length &&
              null !=
                (r = e.previousUsernames
                  .map(function (e) {
                    return e.trim();
                  })
                  .find(function (t) {
                    var r = t.toLowerCase();
                    return r.startsWith(n) && r !== e.name.toLowerCase();
                  }))
              ? r
              : null;
          },
          tt = function (e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return e8(function () {
              var n, o, i, a, l, u, c, s, f, d, p;
              return e7(this, function (y) {
                switch (y.label) {
                  case 0:
                    if (
                      ((n = eM()),
                      (o = e.map(function (e) {
                        return e.id;
                      })),
                      (i = []),
                      (a = []),
                      (l = []),
                      (u = []),
                      !(n.isAuthenticated && o.length > 0))
                    )
                      return [3, 2];
                    return [
                      4,
                      Promise.all([
                        e1(function () {
                          return e2(this, function (e) {
                            switch (e.label) {
                              case 0:
                                if (0 === o.length || !eM().isAuthenticated) return [2, []];
                                e.label = 1;
                              case 1:
                                return (
                                  e.trys.push([1, 3, , 4]),
                                  [
                                    4,
                                    eR.httpService.post(
                                      {
                                        retryable: !0,
                                        withCredentials: !0,
                                        url: eN.urls.followingExistsUrl
                                      },
                                      { targetUserIds: o }
                                    )
                                  ]
                                );
                              case 2:
                                return [2, e.sent().data.followings];
                              case 3:
                                return (
                                  console.error(
                                    "playerSearch: following-exists failed, dropping the 'You are following' line",
                                    { userIds: o, error: e.sent() }
                                  ),
                                  [
                                    2,
                                    o.map(function (e) {
                                      return { userId: e, isFollowed: !1, isFollowing: !1 };
                                    })
                                  ]
                                );
                              case 4:
                                return [2];
                            }
                          });
                        })(),
                        e1(function () {
                          var e;
                          return e2(this, function (t) {
                            switch (t.label) {
                              case 0:
                                if (0 === o.length || !(e = eM()).isAuthenticated) return [2, []];
                                t.label = 1;
                              case 1:
                                return (
                                  t.trys.push([1, 3, , 4]),
                                  [
                                    4,
                                    eR.httpService.get(
                                      {
                                        retryable: !0,
                                        withCredentials: !0,
                                        url: ""
                                          .concat(eN.urls.friendshipStatusesUrl, "/")
                                          .concat(e.userId, "/friends/statuses")
                                      },
                                      { userIds: o.join(",") }
                                    )
                                  ]
                                );
                              case 2:
                                return [2, t.sent().data.data];
                              case 3:
                                return (
                                  console.error(
                                    "playerSearch: friendship statuses failed, every card will offer Add Friend regardless of state",
                                    { userIds: o, error: t.sent() }
                                  ),
                                  [
                                    2,
                                    o.map(function (e) {
                                      return { id: e, status: ek.notFriends };
                                    })
                                  ]
                                );
                              case 4:
                                return [2];
                            }
                          });
                        })(),
                        eY(function () {
                          var e, t, r, n, i;
                          return eJ(this, function (a) {
                            switch (a.label) {
                              case 0:
                                if (0 === o.length) return [2, []];
                                if (!(null == (e = eK()) ? void 0 : e.getPresences))
                                  return [
                                    2,
                                    o.map(function (e) {
                                      return {
                                        userId: e,
                                        userPresenceType: 0,
                                        gameIsPlayable: !1,
                                        lastLocation: ""
                                      };
                                    })
                                  ];
                                a.label = 1;
                              case 1:
                                return (a.trys.push([1, 5, , 6]), [4, e.getPresences(o)]);
                              case 2:
                                var l;
                                if (
                                  ((t = a.sent()),
                                  (r = new Set()),
                                  (n = t.map(function (e) {
                                    var t;
                                    return (
                                      eQ(e) && r.add(e.universeId),
                                      {
                                        userId: e.userId,
                                        userPresenceType: e.userPresenceType,
                                        lastLocation: null != (t = e.lastLocation) ? t : "",
                                        universeId: e.universeId,
                                        placeId: e.placeId,
                                        rootPlaceId: e.rootPlaceId,
                                        gameId: e.gameId,
                                        gameIsPlayable: !1
                                      }
                                    );
                                  })),
                                  !(r.size > 0))
                                )
                                  return [3, 4];
                                return [
                                  4,
                                  ((l =
                                    (function (e) {
                                      if (Array.isArray(e)) return eV(e);
                                    })(r) ||
                                    (function (e) {
                                      if (
                                        ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                                        null != e["@@iterator"]
                                      )
                                        return Array.from(e);
                                    })(r) ||
                                    (function (e) {
                                      if (e) {
                                        if ("string" == typeof e) return eV(e, void 0);
                                        var t = Object.prototype.toString.call(e).slice(8, -1);
                                        if (
                                          ("Object" === t &&
                                            e.constructor &&
                                            (t = e.constructor.name),
                                          "Map" === t || "Set" === t)
                                        )
                                          return Array.from(t);
                                        if (
                                          "Arguments" === t ||
                                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                        )
                                          return eV(e, void 0);
                                      }
                                    })(r) ||
                                    (function () {
                                      throw TypeError(
                                        "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                      );
                                    })()),
                                  eY(function () {
                                    var e;
                                    return eJ(this, function (t) {
                                      switch (t.label) {
                                        case 0:
                                          if (
                                            ((e = {}),
                                            l.forEach(function (t) {
                                              e[t] = !1;
                                            }),
                                            0 === l.length)
                                          )
                                            return [2, e];
                                          t.label = 1;
                                        case 1:
                                          return (t.trys.push([1, 3, , 4]), [4, eZ(l)]);
                                        case 2:
                                          return (
                                            t.sent().forEach(function (t) {
                                              e[t.universeId] = t.isPlayable;
                                            }),
                                            [3, 4]
                                          );
                                        case 3:
                                          return (t.sent(), [3, 4]);
                                        case 4:
                                          return [2, e];
                                      }
                                    });
                                  })())
                                ];
                              case 3:
                                return (
                                  (i = a.sent()),
                                  [
                                    2,
                                    n.map(function (e) {
                                      if (eQ(e) && i[e.universeId]) {
                                        var t, r;
                                        return (
                                          (t = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                              var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                              ("function" == typeof Object.getOwnPropertySymbols &&
                                                (n = n.concat(
                                                  Object.getOwnPropertySymbols(r).filter(
                                                    function (e) {
                                                      return Object.getOwnPropertyDescriptor(r, e)
                                                        .enumerable;
                                                    }
                                                  )
                                                )),
                                                n.forEach(function (t) {
                                                  var n;
                                                  ((n = r[t]),
                                                    t in e
                                                      ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                        })
                                                      : (e[t] = n));
                                                }));
                                            }
                                            return e;
                                          })({}, e)),
                                          (r = r = { gameIsPlayable: !0 }),
                                          Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(
                                                t,
                                                Object.getOwnPropertyDescriptors(r)
                                              )
                                            : (function (e) {
                                                var t = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  t.push.apply(t, r);
                                                }
                                                return t;
                                              })(Object(r)).forEach(function (e) {
                                                Object.defineProperty(
                                                  t,
                                                  e,
                                                  Object.getOwnPropertyDescriptor(r, e)
                                                );
                                              }),
                                          t
                                        );
                                      }
                                      return e;
                                    })
                                  ]
                                );
                              case 4:
                                return [2, n];
                              case 5:
                                return (
                                  console.error(
                                    "playerSearch: presence fetch failed, every card will read Offline",
                                    { userIds: o, error: a.sent() }
                                  ),
                                  [
                                    2,
                                    o.map(function (e) {
                                      return {
                                        userId: e,
                                        userPresenceType: 0,
                                        gameIsPlayable: !1,
                                        lastLocation: ""
                                      };
                                    })
                                  ]
                                );
                              case 6:
                                return [2];
                            }
                          });
                        })(),
                        eG(function () {
                          var e;
                          return eH(this, function (t) {
                            switch (t.label) {
                              case 0:
                                if (0 === o.length) return [2, []];
                                return (
                                  (e = []),
                                  [
                                    4,
                                    Promise.all(
                                      o.map(function (t, r) {
                                        return eG(function () {
                                          var n;
                                          return eH(this, function (o) {
                                            switch (o.label) {
                                              case 0:
                                                return (
                                                  o.trys.push([0, 2, , 3]),
                                                  (n = { userId: t }),
                                                  [
                                                    4,
                                                    eG(function () {
                                                      var e;
                                                      return eH(this, function (r) {
                                                        switch (r.label) {
                                                          case 0:
                                                            return [
                                                              4,
                                                              eR.httpService.get({
                                                                retryable: !0,
                                                                withCredentials: !0,
                                                                url: ""
                                                                  .concat(
                                                                    eN.urls.primaryGroupUrl,
                                                                    "/"
                                                                  )
                                                                  .concat(t, "/groups/primary/role")
                                                              })
                                                            ];
                                                          case 1:
                                                            if (!(e = r.sent()).data.group)
                                                              return [2, void 0];
                                                            return [
                                                              2,
                                                              {
                                                                id: e.data.group.id,
                                                                name: e.data.group.name,
                                                                url: eR.urlService.getAbsoluteUrl(
                                                                  "/groups/".concat(e.data.group.id)
                                                                )
                                                              }
                                                            ];
                                                        }
                                                      });
                                                    })()
                                                  ]
                                                );
                                              case 1:
                                                return (
                                                  (e[r] = ((n.primaryGroup = o.sent()), n)),
                                                  [3, 3]
                                                );
                                              case 2:
                                                return (
                                                  console.error(
                                                    "playerSearch: primary group lookup failed, dropping the group line",
                                                    { userId: t, error: o.sent() }
                                                  ),
                                                  (e[r] = { userId: t, primaryGroup: void 0 }),
                                                  [3, 3]
                                                );
                                              case 3:
                                                return [2];
                                            }
                                          });
                                        })();
                                      })
                                    )
                                  ]
                                );
                              case 1:
                                return (t.sent(), [2, e]);
                            }
                          });
                        })()
                      ])
                    ];
                  case 1:
                    ((i = (c = e5.apply(void 0, [y.sent(), 4]))[0]),
                      (a = c[1]),
                      (l = c[2]),
                      (u = c[3]),
                      (y.label = 2));
                  case 2:
                    return (
                      (s = new Map(
                        i.map(function (e) {
                          return [e.userId, e];
                        })
                      )),
                      (f = new Map(
                        a.map(function (e) {
                          return [e.id, e.status];
                        })
                      )),
                      (d = new Map(
                        l.map(function (e) {
                          return [e.userId, e];
                        })
                      )),
                      (p = new Map(
                        u.map(function (e) {
                          return [e.userId, e.primaryGroup];
                        })
                      )),
                      [
                        2,
                        e.map(function (e, n) {
                          var o,
                            i,
                            a,
                            l,
                            u,
                            c,
                            y,
                            m,
                            b = s.get(e.id),
                            h = d.get(e.id),
                            v =
                              ((o = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                  var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                  ("function" == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                      })
                                    )),
                                    n.forEach(function (t) {
                                      var n;
                                      ((n = r[t]),
                                        t in e
                                          ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                            })
                                          : (e[t] = n));
                                    }));
                                }
                                return e;
                              })({}, e)),
                              (i = i =
                                {
                                  primaryGroup: p.get(e.id),
                                  friendshipStatus:
                                    null != (a = f.get(e.id))
                                      ? a
                                      : e.isCurrentUser
                                        ? ek.friends
                                        : ek.notFriends,
                                  isFollowing:
                                    null != (l = null == b ? void 0 : b.isFollowing) && l,
                                  isFollowed: null != (u = null == b ? void 0 : b.isFollowed) && u,
                                  areNamesLoading: !0,
                                  matchingPreviousName: null,
                                  gameId: null == h ? void 0 : h.gameId,
                                  placeId: null == h ? void 0 : h.placeId,
                                  universeId: null == h ? void 0 : h.universeId,
                                  rootPlaceId: null == h ? void 0 : h.rootPlaceId,
                                  userPresenceType:
                                    null != (c = null == h ? void 0 : h.userPresenceType) ? c : 0,
                                  gameIsPlayable:
                                    null != (y = null == h ? void 0 : h.gameIsPlayable) && y,
                                  lastLocation:
                                    null != (m = null == h ? void 0 : h.lastLocation) ? m : "",
                                  absPos: r + n
                                }),
                              Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                                : (function (e) {
                                    var t = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      t.push.apply(t, r);
                                    }
                                    return t;
                                  })(Object(i)).forEach(function (e) {
                                    Object.defineProperty(
                                      o,
                                      e,
                                      Object.getOwnPropertyDescriptor(i, e)
                                    );
                                  }),
                              o);
                          return ((v.matchingPreviousName = te(v, t)), v);
                        })
                      ]
                    );
                }
              });
            })();
          },
          tr = function (e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return e8(function () {
              var n, o;
              return e7(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [
                      4,
                      e8(function () {
                        var r, n, o, i;
                        return e7(this, function (a) {
                          switch (a.label) {
                            case 0:
                              if ((r = e.trim()).length < eN.pageData.keywordMinLength)
                                return [
                                  2,
                                  { paginationMethod: "Scroll", nextPageCursor: "", data: [] }
                                ];
                              return [
                                4,
                                eR.httpService.get(
                                  {
                                    retryable: !0,
                                    withCredentials: !0,
                                    url: eN.urls.omniSearchUrl
                                  },
                                  {
                                    verticalType: "user",
                                    searchQuery: r,
                                    pageToken: t,
                                    globalSessionId: e9,
                                    sessionId: e9
                                  }
                                )
                              ];
                            case 1:
                              return (
                                (n = a.sent()),
                                (o = eM()),
                                (i = []),
                                n.data.searchResults.forEach(function (e) {
                                  e.contents.forEach(function (e) {
                                    var t,
                                      r = eR.urlService.getAbsoluteUrl(
                                        "/users/".concat(e.contentId, "/profile")
                                      );
                                    i.push({
                                      id: e.contentId,
                                      name: e.username,
                                      displayName: e.displayName,
                                      previousUsernames: null != (t = e.previousUsernames) ? t : [],
                                      hasVerifiedBadge: e.hasVerifiedBadge,
                                      isCurrentUser: Number(o.userId) === e.contentId,
                                      profileUrl: eR.urlService.getUrlWithQueries(r, {
                                        friendshipSourceType:
                                          eN.playerSearchFriendshipOriginSourceType
                                      })
                                    });
                                  });
                                }),
                                [
                                  2,
                                  {
                                    paginationMethod: n.data.paginationMethod,
                                    nextPageCursor: n.data.nextPageToken,
                                    data: i
                                  }
                                ]
                              );
                          }
                        });
                      })()
                    ];
                  case 1:
                    return [4, tt((n = i.sent()).data, e, r)];
                  case 2:
                    return (
                      (o = i.sent()),
                      [
                        2,
                        {
                          nextPageCursor: n.nextPageCursor,
                          paginationMethod: n.paginationMethod,
                          results: o
                        }
                      ]
                    );
                }
              });
            })();
          };
        function tn(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var to = function () {
            var e,
              t =
                (function (e) {
                  if (Array.isArray(e)) return e;
                })((e = (0, d.useState)(null))) ||
                (function (e) {
                  var t,
                    r,
                    n =
                      null == e
                        ? null
                        : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                  if (null != n) {
                    var o = [],
                      i = !0,
                      a = !1;
                    try {
                      for (
                        n = n.call(e);
                        !(i = (t = n.next()).done) && (o.push(t.value), 2 !== o.length);
                        i = !0
                      );
                    } catch (e) {
                      ((a = !0), (r = e));
                    } finally {
                      try {
                        i || null == n.return || n.return();
                      } finally {
                        if (a) throw r;
                      }
                    }
                    return o;
                  }
                })(e) ||
                (function (e) {
                  if (e) {
                    if ("string" == typeof e) return tn(e, 2);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (
                      ("Object" === t && e.constructor && (t = e.constructor.name),
                      "Map" === t || "Set" === t)
                    )
                      return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                      return tn(e, 2);
                  }
                })(e) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })(),
              r = t[0],
              n = t[1];
            return (
              (0, d.useEffect)(function () {
                var e = !0;
                return (
                  e8(function () {
                    return e7(this, function (e) {
                      switch (e.label) {
                        case 0:
                          if (!eM().isAuthenticated) return [2, !1];
                          e.label = 1;
                        case 1:
                          return (
                            e.trys.push([1, 3, , 4]),
                            [
                              4,
                              eR.httpService.get({
                                url: eN.urls.chatMetadataUrl,
                                withCredentials: !0
                              })
                            ]
                          );
                        case 2:
                          return [2, !0 === e.sent().data.isChatUserMessagesEnabled];
                        case 3:
                          return (
                            console.error(
                              "playerSearch: chat metadata failed, hiding the Chat action",
                              e.sent()
                            ),
                            [2, !1]
                          );
                        case 4:
                          return [2];
                      }
                    });
                  })()
                    .then(function (t) {
                      e && n(t);
                    })
                    .catch(function () {
                      e && n(!1);
                    }),
                  function () {
                    e = !1;
                  }
                );
              }, []),
              r
            );
          },
          ti = function (e, t) {
            var r = eU();
            (null == r ? void 0 : r.SendEventWithTarget) &&
              r.SendEventWithTarget(
                e,
                eN.playerSearchEventContext,
                { uid: eM().userId, playerId: t.id, absPos: t.absPos },
                r.TargetTypes.WWW
              );
          };
        function ta(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var tl = function () {
            var e, t;
            return "u" < typeof window
              ? ""
              : null !=
                  (e =
                    null == (t = new URLSearchParams(window.location.search).get("keyword"))
                      ? void 0
                      : t.trim())
                ? e
                : "";
          },
          tu = function () {
            var e,
              t =
                (function (e) {
                  if (Array.isArray(e)) return e;
                })((e = (0, d.useState)(tl))) ||
                (function (e) {
                  var t,
                    r,
                    n =
                      null == e
                        ? null
                        : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                  if (null != n) {
                    var o = [],
                      i = !0,
                      a = !1;
                    try {
                      for (
                        n = n.call(e);
                        !(i = (t = n.next()).done) && (o.push(t.value), 2 !== o.length);
                        i = !0
                      );
                    } catch (e) {
                      ((a = !0), (r = e));
                    } finally {
                      try {
                        i || null == n.return || n.return();
                      } finally {
                        if (a) throw r;
                      }
                    }
                    return o;
                  }
                })(e) ||
                (function (e) {
                  if (e) {
                    if ("string" == typeof e) return ta(e, 2);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (
                      ("Object" === t && e.constructor && (t = e.constructor.name),
                      "Map" === t || "Set" === t)
                    )
                      return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                      return ta(e, 2);
                  }
                })(e) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })(),
              r = t[0],
              n = t[1];
            return (
              (0, d.useEffect)(function () {
                var e = function () {
                  n(tl());
                };
                return (
                  window.addEventListener("popstate", e),
                  function () {
                    window.removeEventListener("popstate", e);
                  }
                );
              }, []),
              {
                keyword: r,
                setKeyword: (0, d.useCallback)(function (e) {
                  var t = new URL(window.location.href),
                    r = e.trim();
                  (r ? t.searchParams.set("keyword", r) : t.searchParams.delete("keyword"),
                    window.history.pushState(
                      {},
                      "",
                      "".concat(t.pathname).concat(t.search).concat(t.hash)
                    ),
                    n(r));
                }, [])
              }
            );
          },
          tc = window.RobloxUserProfiles;
        function ts(e) {
          return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
        }
        var tf = "FriendshipNotifications",
          td = function (e) {
            if ((void 0 === e ? "undefined" : ts(e)) !== "object" || null === e) return null;
            var t = Reflect.get(e, "Type"),
              r = Reflect.get(e, "EventArgs");
            if (
              "string" != typeof t ||
              (void 0 === r ? "undefined" : ts(r)) !== "object" ||
              null === r
            )
              return null;
            var n = Reflect.get(r, "UserId1"),
              o = Reflect.get(r, "UserId2");
            return "number" != typeof n || "number" != typeof o
              ? null
              : { type: t, userId1: n, userId2: o };
          },
          tp = function (e, t) {
            switch (e) {
              case "FriendshipRequested":
                return t ? ek.requestReceived : ek.requestSent;
              case "FriendshipCreated":
                return ek.friends;
              case "FriendshipDestroyed":
                return ek.notFriends;
              default:
                return null;
            }
          },
          ty = function (e) {
            (0, d.useEffect)(
              function () {
                var t = eM();
                if (t.isAuthenticated) {
                  var r = eB();
                  if (!(null == r ? void 0 : r.Subscribe))
                    return void console.error(
                      "playerSearch: no realtime client, friendship cards will not update live"
                    );
                  var n = Number(t.userId),
                    o = function (t) {
                      var r = td(t);
                      if (!r)
                        return void console.error(
                          "playerSearch: unrecognised FriendshipNotifications payload",
                          t
                        );
                      var o = r.userId1,
                        i = r.userId2;
                      if (o === n || i === n) {
                        var a = tp(r.type, i === n);
                        if (!a)
                          return void console.error(
                            "playerSearch: FriendshipNotifications type maps to no card state, ignoring it",
                            r.type
                          );
                        e(n, o === n ? i : o, a);
                      }
                    };
                  return (
                    r.Subscribe(tf, o),
                    function () {
                      var e;
                      null == (e = r.Unsubscribe) || e.call(r, tf, o);
                    }
                  );
                }
              },
              [e]
            );
          };
        function tm(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var tb = function (e, t) {
          (0, d.useEffect)(
            function () {
              if (0 !== e.length) {
                var r = eK();
                if (null == r ? void 0 : r.subscribeToPresenceChanges) {
                  var n = r.subscribeToPresenceChanges(
                    e,
                    function (e) {
                      var r;
                      (t(e.userId, {
                        userPresenceType: e.userPresenceType,
                        gameId: e.gameId,
                        placeId: e.placeId,
                        universeId: e.universeId,
                        rootPlaceId: e.rootPlaceId,
                        lastLocation: null != (r = e.lastLocation) ? r : ""
                      }),
                      eQ(e))
                        ? eZ([e.universeId])
                            .then(function (r) {
                              var n,
                                o = ((function (e) {
                                  if (Array.isArray(e)) return e;
                                })(r) ||
                                  (function (e) {
                                    var t,
                                      r,
                                      n =
                                        null == e
                                          ? null
                                          : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                                            e["@@iterator"];
                                    if (null != n) {
                                      var o = [],
                                        i = !0,
                                        a = !1;
                                      try {
                                        for (
                                          n = n.call(e);
                                          !(i = (t = n.next()).done) &&
                                          (o.push(t.value), 1 !== o.length);
                                          i = !0
                                        );
                                      } catch (e) {
                                        ((a = !0), (r = e));
                                      } finally {
                                        try {
                                          i || null == n.return || n.return();
                                        } finally {
                                          if (a) throw r;
                                        }
                                      }
                                      return o;
                                    }
                                  })(r) ||
                                  (function (e) {
                                    if (e) {
                                      if ("string" == typeof e) return tm(e, 1);
                                      var t = Object.prototype.toString.call(e).slice(8, -1);
                                      if (
                                        ("Object" === t &&
                                          e.constructor &&
                                          (t = e.constructor.name),
                                        "Map" === t || "Set" === t)
                                      )
                                        return Array.from(t);
                                      if (
                                        "Arguments" === t ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                      )
                                        return tm(e, 1);
                                    }
                                  })(r) ||
                                  (function () {
                                    throw TypeError(
                                      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                    );
                                  })())[0];
                              t(e.userId, {
                                gameIsPlayable: null != (n = null == o ? void 0 : o.isPlayable) && n
                              });
                            })
                            .catch(function () {
                              t(e.userId, { gameIsPlayable: !1 });
                            })
                        : t(e.userId, { gameIsPlayable: !1 });
                    },
                    !1
                  );
                  return function () {
                    "function" == typeof n && n();
                  };
                }
              }
            },
            [t, e]
          );
        };
        function th(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function tv(e, t, r, n, o, i, a) {
          try {
            var l = e[i](a),
              u = l.value;
          } catch (e) {
            r(e);
            return;
          }
          l.done ? t(u) : Promise.resolve(u).then(n, o);
        }
        function tg(e) {
          return function () {
            var t = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = e.apply(t, r);
              function a(e) {
                tv(i, n, o, a, l, "next", e);
              }
              function l(e) {
                tv(i, n, o, a, l, "throw", e);
              }
              a(void 0);
            });
          };
        }
        function tw(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            ("function" == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
              )),
              n.forEach(function (t) {
                var n;
                ((n = r[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (e[t] = n));
              }));
          }
          return e;
        }
        function tO(e, t) {
          return (
            (t = null != t ? t : {}),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : (function (e) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, r);
                  }
                  return t;
                })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }),
            e
          );
        }
        function tj(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var r,
                n,
                o =
                  null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
              if (null != o) {
                var i = [],
                  a = !0,
                  l = !1;
                try {
                  for (
                    o = o.call(e);
                    !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t);
                    a = !0
                  );
                } catch (e) {
                  ((l = !0), (n = e));
                } finally {
                  try {
                    a || null == o.return || o.return();
                  } finally {
                    if (l) throw n;
                  }
                }
                return i;
              }
            })(e, t) ||
            tS(e, t) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function tx(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return th(e);
            })(e) ||
            (function (e) {
              if (("u" > typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
                return Array.from(e);
            })(e) ||
            tS(e) ||
            (function () {
              throw TypeError(
                "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function tS(e, t) {
          if (e) {
            if ("string" == typeof e) return th(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (
              ("Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r)
            )
              return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
              return th(e, t);
          }
        }
        function tP(e, t) {
          var r,
            n,
            o,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: []
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype),
            l = Object.defineProperty;
          return (
            l(a, "next", { value: u(0) }),
            l(a, "throw", { value: u(1) }),
            l(a, "return", { value: u(2) }),
            "function" == typeof Symbol &&
              l(a, Symbol.iterator, {
                value: function () {
                  return this;
                }
              }),
            a
          );
          function u(l) {
            return function (u) {
              var c = [l, u];
              if (r) throw TypeError("Generator is already executing.");
              for (; a && ((a = 0), c[0] && (i = 0)), i;)
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o =
                        2 & c[0]
                          ? n.return
                          : c[0]
                            ? n.throw || ((o = n.return) && o.call(n), 0)
                            : n.next) &&
                      !(o = o.call(n, c[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                    case 0:
                    case 1:
                      o = c;
                      break;
                    case 4:
                      return (i.label++, { value: c[1], done: !1 });
                    case 5:
                      (i.label++, (n = c[1]), (c = [0]));
                      continue;
                    case 7:
                      ((c = i.ops.pop()), i.trys.pop());
                      continue;
                    default:
                      if (
                        !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                        (6 === c[0] || 2 === c[0])
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                        i.label = c[1];
                        break;
                      }
                      if (6 === c[0] && i.label < o[1]) {
                        ((i.label = o[1]), (o = c));
                        break;
                      }
                      if (o && i.label < o[2]) {
                        ((i.label = o[2]), i.ops.push(c));
                        break;
                      }
                      (o[2] && i.ops.pop(), i.trys.pop());
                      continue;
                  }
                  c = t.call(e, i);
                } catch (e) {
                  ((c = [6, e]), (n = 0));
                } finally {
                  r = o = 0;
                }
              if (5 & c[0]) throw c[1];
              return { value: c[0] ? c[1] : void 0, done: !0 };
            };
          }
        }
        var tA = [tc.UserProfileField.Names.CombinedName, tc.UserProfileField.Names.Username],
          tE = [],
          tI = function (e) {
            var t = e.trim().length < eN.pageData.keywordMinLength;
            return tO(tw({}, eT), { keyword: e, resultsLoading: !t, isKeywordTooShort: t });
          },
          tC = function (e) {
            var t = tj(
                (0, d.useState)(function () {
                  return tI(e);
                }),
                2
              ),
              r = t[0],
              n = t[1],
              o = tj((0, d.useState)(e), 2),
              i = o[0],
              a = o[1],
              l = (0, d.useRef)([]),
              u = eM(),
              c = Number(u.userId),
              s = !u.isAuthenticated,
              f = eq(),
              p = (0, d.useCallback)(function (e, t) {
                n(function (r) {
                  return tO(tw({}, r), {
                    results: r.results.map(function (r) {
                      return r.id !== e ? r : "function" == typeof t ? t(r) : tw({}, r, t);
                    })
                  });
                });
              }, []),
              y = (0, d.useCallback)(function (e) {
                var t = e.keyword,
                  r = e.cursor,
                  o = void 0 === r ? "" : r,
                  i = e.append,
                  a = void 0 !== i && i,
                  l = e.startIndex,
                  u = void 0 === l ? 0 : l;
                return tg(function () {
                  var e, r, i, l, c;
                  return tP(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if (
                          ((r = (e = t.trim()).length < eN.pageData.keywordMinLength),
                          n(function (t) {
                            return tw(
                              tO(tw({}, t), {
                                keyword: e,
                                initialized: !0,
                                resultsLoading: !r,
                                isKeywordTooShort: r,
                                unsafeInputDetected: !1
                              }),
                              a ? {} : { results: [], nextPageCursor: "" }
                            );
                          }),
                          r)
                        )
                          return [2];
                        s.label = 1;
                      case 1:
                        return (s.trys.push([1, 3, , 4]), [4, tr(e, o, u)]);
                      case 2:
                        return (
                          (i = s.sent()),
                          n(function (t) {
                            return t.keyword !== e
                              ? t
                              : tO(tw({}, t), {
                                  keyword: e,
                                  initialized: !0,
                                  paginationMethod: i.paginationMethod,
                                  nextPageCursor: i.nextPageCursor,
                                  resultsLoading: !1,
                                  unsafeInputDetected: !1,
                                  isKeywordTooShort: !1,
                                  results: a ? tx(t.results).concat(tx(i.results)) : i.results
                                });
                          }),
                          [3, 4]
                        );
                      case 3:
                        var f, d;
                        return (
                          (f = l = s.sent()),
                          (c = (
                            null != (d = Error) && "u" > typeof Symbol && d[Symbol.hasInstance]
                              ? !!d[Symbol.hasInstance](f)
                              : f instanceof d
                          )
                            ? l.message
                            : String(l)),
                          n(function (t) {
                            return t.keyword !== e
                              ? t
                              : tO(
                                  tw(
                                    tO(tw({}, t), {
                                      initialized: !0,
                                      keyword: e,
                                      resultsLoading: !1,
                                      nextPageCursor: ""
                                    }),
                                    a ? {} : { results: [] }
                                  ),
                                  { unsafeInputDetected: c.includes("unsafeInput") }
                                );
                          }),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                  });
                })();
              }, []);
            (0, d.useEffect)(
              function () {
                (a(function (t) {
                  return t.trim() === e ? t : e;
                }),
                  y({ keyword: e }).catch(function () {}));
              },
              [e, y]
            );
            var m = (0, d.useMemo)(
                function () {
                  return r.results.map(function (e) {
                    return e.id;
                  });
                },
                [r.results]
              ),
              b = (0, d.useMemo)(
                function () {
                  var e;
                  return ((e = l.current),
                  e.length === m.length &&
                    e.every(function (e, t) {
                      return e === m[t];
                    }))
                    ? l.current
                    : ((l.current = m), m);
                },
                [m]
              ),
              h = (0, tc.useUserProfiles)(b, tA),
              v = h.loading,
              g = h.error,
              w = h.data;
            (0, d.useEffect)(
              function () {
                0 === b.length ||
                  (v && null == g && null == w) ||
                  n(function (e) {
                    return tO(tw({}, e), {
                      results: e.results.map(function (e) {
                        var t,
                          r,
                          n,
                          o = null == w || null == (n = w[e.id]) ? void 0 : n.names;
                        return tO(tw({}, e), {
                          primaryName:
                            null != (t = null == o ? void 0 : o.combinedName) ? t : e.primaryName,
                          username: null != (r = null == o ? void 0 : o.username) ? r : e.username,
                          areNamesLoading: !1
                        });
                      })
                    });
                  });
              },
              [b, v, g, w]
            );
            var O = (0, d.useCallback)(
              function (e, t) {
                p(e, { friendshipStatus: t });
              },
              [p]
            );
            return (
              ty(
                (0, d.useCallback)(
                  function (e, t, r) {
                    e === c && O(t, r);
                  },
                  [c, O]
                )
              ),
              tb(s ? tE : b, p),
              tO(tw({}, r), {
                inputValue: i,
                setInputValue: a,
                currentUserId: c,
                inMobile: !!f.isPhone,
                inMobileOrTabletBrowser: (!0 === f.isPhone || !0 === f.isTablet) && !f.isInApp,
                inApp: !!f.isInApp,
                isUserGuest: s,
                submitSearch: function (e) {
                  return e.trim();
                },
                loadSearch: y,
                loadMore: function () {
                  return tg(function () {
                    return tP(this, function (e) {
                      switch (e.label) {
                        case 0:
                          if (!r.nextPageCursor || r.resultsLoading) return [2];
                          return [
                            4,
                            y({
                              keyword: r.keyword,
                              cursor: r.nextPageCursor,
                              append: !0,
                              startIndex: r.results.length
                            })
                          ];
                        case 1:
                          return (e.sent(), [2]);
                      }
                    });
                  })();
                },
                applyResultUpdate: p,
                updateFriendshipStatus: O,
                markFriendRequestSent: function (e) {
                  O(e, ek.requestSent);
                },
                markFriendRequestAccepted: function (e) {
                  O(e, ek.friends);
                }
              })
            );
          };
        function tk(e, t, r, n, o, i, a) {
          try {
            var l = e[i](a),
              u = l.value;
          } catch (e) {
            r(e);
            return;
          }
          l.done ? t(u) : Promise.resolve(u).then(n, o);
        }
        var tN = function (e) {
            return (
              (void 0 === e
                ? "undefined"
                : e && "u" > typeof Symbol && e.constructor === Symbol
                  ? "symbol"
                  : typeof e) == "object" && null !== e
            );
          },
          tT = function () {
            var e;
            return ((e = function () {
              var e, t, r;
              return (function (e, t) {
                var r,
                  n,
                  o,
                  i = {
                    label: 0,
                    sent: function () {
                      if (1 & o[0]) throw o[1];
                      return o[1];
                    },
                    trys: [],
                    ops: []
                  },
                  a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype),
                  l = Object.defineProperty;
                return (
                  l(a, "next", { value: u(0) }),
                  l(a, "throw", { value: u(1) }),
                  l(a, "return", { value: u(2) }),
                  "function" == typeof Symbol &&
                    l(a, Symbol.iterator, {
                      value: function () {
                        return this;
                      }
                    }),
                  a
                );
                function u(l) {
                  return function (u) {
                    var c = [l, u];
                    if (r) throw TypeError("Generator is already executing.");
                    for (; a && ((a = 0), c[0] && (i = 0)), i;)
                      try {
                        if (
                          ((r = 1),
                          n &&
                            (o =
                              2 & c[0]
                                ? n.return
                                : c[0]
                                  ? n.throw || ((o = n.return) && o.call(n), 0)
                                  : n.next) &&
                            !(o = o.call(n, c[1])).done)
                        )
                          return o;
                        switch (((n = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                          case 0:
                          case 1:
                            o = c;
                            break;
                          case 4:
                            return (i.label++, { value: c[1], done: !1 });
                          case 5:
                            (i.label++, (n = c[1]), (c = [0]));
                            continue;
                          case 7:
                            ((c = i.ops.pop()), i.trys.pop());
                            continue;
                          default:
                            if (
                              !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                              (6 === c[0] || 2 === c[0])
                            ) {
                              i = 0;
                              continue;
                            }
                            if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                              i.label = c[1];
                              break;
                            }
                            if (6 === c[0] && i.label < o[1]) {
                              ((i.label = o[1]), (o = c));
                              break;
                            }
                            if (o && i.label < o[2]) {
                              ((i.label = o[2]), i.ops.push(c));
                              break;
                            }
                            (o[2] && i.ops.pop(), i.trys.pop());
                            continue;
                        }
                        c = t.call(e, i);
                      } catch (e) {
                        ((c = [6, e]), (n = 0));
                      } finally {
                        r = o = 0;
                      }
                    if (5 & c[0]) throw c[1];
                    return { value: c[0] ? c[1] : void 0, done: !0 };
                  };
                }
              })(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (!(null == (e = ez()) ? void 0 : e.callBehaviour))
                      return [2, { renameFriendsToConnections: !1 }];
                    n.label = 1;
                  case 1:
                    return (n.trys.push([1, 3, , 4]), [4, e.callBehaviour("web-rename-friends")]);
                  case 2:
                    return [
                      2,
                      {
                        renameFriendsToConnections: !(
                          tN((r = n.sent())) &&
                          null != (t = r.connectionsToFriendsRenameEnabled) &&
                          t
                        )
                      }
                    ];
                  case 3:
                    return (n.sent(), [2, { renameFriendsToConnections: !1 }]);
                  case 4:
                    return [2];
                }
              });
            }),
            function () {
              var t = this,
                r = arguments;
              return new Promise(function (n, o) {
                var i = e.apply(t, r);
                function a(e) {
                  tk(i, n, o, a, l, "next", e);
                }
                function l(e) {
                  tk(i, n, o, a, l, "throw", e);
                }
                a(void 0);
              });
            })();
          };
        function tR(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var tD = function () {
            var e,
              t =
                (function (e) {
                  if (Array.isArray(e)) return e;
                })((e = (0, d.useState)(!1))) ||
                (function (e) {
                  var t,
                    r,
                    n =
                      null == e
                        ? null
                        : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                  if (null != n) {
                    var o = [],
                      i = !0,
                      a = !1;
                    try {
                      for (
                        n = n.call(e);
                        !(i = (t = n.next()).done) && (o.push(t.value), 2 !== o.length);
                        i = !0
                      );
                    } catch (e) {
                      ((a = !0), (r = e));
                    } finally {
                      try {
                        i || null == n.return || n.return();
                      } finally {
                        if (a) throw r;
                      }
                    }
                    return o;
                  }
                })(e) ||
                (function (e) {
                  if (e) {
                    if ("string" == typeof e) return tR(e, 2);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (
                      ("Object" === t && e.constructor && (t = e.constructor.name),
                      "Map" === t || "Set" === t)
                    )
                      return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                      return tR(e, 2);
                  }
                })(e) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })(),
              r = t[0],
              n = t[1];
            return (
              (0, d.useEffect)(function () {
                var e = !0;
                return (
                  tT()
                    .then(function (t) {
                      e && n(t.renameFriendsToConnections);
                    })
                    .catch(function () {
                      e && n(!1);
                    }),
                  function () {
                    e = !1;
                  }
                );
              }, []),
              r
            );
          },
          tL = window.Roblox["core-scripts"].util.chat,
          tM = function (e) {
            (0, tL.startDesktopAndMobileWebChat)({ userId: e });
          },
          tU = function (e) {
            var t = e.message;
            return (0, l.jsx)("div", {
              className:
                "bg-surface-100 content-muted radius-medium stroke-standard stroke-muted padding-large",
              children: t
            });
          },
          tF = function (e) {
            var t = e.keyword,
              r = e.keywordMinLength,
              n = e.showNoMatches,
              o = e.showKeywordTooShort,
              i = e.showUnsafeInput,
              a = (0, f.useTranslation)().translate,
              u = a("Label.NoMatchesAvailable", { keyword: t }),
              c = a("Label.EnterMinCharacters", { keywordMinLength: r }),
              s = a("Label.UnsafeInput");
            return n || o || i
              ? (0, l.jsxs)("div", {
                  className: "flex flex-col gap-medium",
                  children: [
                    n ? (0, l.jsx)(tU, { message: u }) : null,
                    o ? (0, l.jsx)(tU, { message: c }) : null,
                    i ? (0, l.jsx)(tU, { message: s }) : null
                  ]
                })
              : null;
          },
          tz = r(611),
          t_ = r.n(tz);
        function tW(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            ("function" == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
              )),
              n.forEach(function (t) {
                var n;
                ((n = r[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (e[t] = n));
              }));
          }
          return e;
        }
        function tK(e, t) {
          return (
            (t = null != t ? t : {}),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : (function (e) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, r);
                  }
                  return t;
                })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }),
            e
          );
        }
        function tB(e, t) {
          if (null == e) return {};
          var r,
            n,
            o,
            i = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (o = 0, r = Reflect.ownKeys(Object(e)); o < r.length; o++)
              ((n = r[o]),
                !(t.indexOf(n) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
            return i;
          }
          if (
            ((i = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = {},
                i = Object.getOwnPropertyNames(e);
              for (n = 0; n < i.length; n++)
                ((r = i[n]),
                  !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (o[r] = e[r]));
              return o;
            })(e, t)),
            Object.getOwnPropertySymbols)
          )
            for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              ((n = r[o]),
                !(t.indexOf(n) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
          return i;
        }
        var tq = {
            Success: "bg-system-success",
            Warning: "bg-system-warning",
            Alert: "bg-system-alert",
            Emphasis: "bg-system-emphasis",
            Neutral: "bg-system-neutral",
            Standard: "bg-action-standard",
            Voice: "bg-[var(--color-extended-orange-600)]"
          },
          t$ = {
            Emphasis: "content-[var(--dark-mode-content-emphasis)]",
            Standard: "content-emphasis"
          },
          tG = {
            Small: "size-150",
            Medium: "size-200",
            Large: "size-250",
            XLarge: "size-300",
            Pictogram: "size-500"
          },
          tH = p().forwardRef(function (e, t) {
            if ("Numeric" === e.variant) {
              var r = e.color,
                n = void 0 === r ? "Emphasis" : r,
                o = (e.variant, e.value),
                i = e.className,
                a = tB(e, ["color", "variant", "value", "className"]);
              return p().createElement(
                "div",
                tK(tW({ ref: t }, a), {
                  className: y(
                    "foundation-web-status-indicator min-width-400 height-400 inline-flex justify-center items-center radius-circle text-label-small",
                    tq[n],
                    t$[n],
                    i
                  )
                }),
                p().createElement("span", { className: "padding-x-xsmall" }, o)
              );
            }
            var l = e.color,
              u = e.size,
              c = (e.variant, e.value, e.className),
              s = tB(e, ["color", "size", "variant", "value", "className"]);
            return p().createElement(
              "div",
              tK(tW({ ref: t }, s), {
                className: y(
                  "foundation-web-status-indicator radius-circle",
                  tG[void 0 === u ? "Medium" : u],
                  tq[void 0 === l ? "Emphasis" : l],
                  c
                )
              })
            );
          });
        tH.displayName = "StatusIndicator";
        var tV = window.RobloxThumbnails,
          tX = window.RobloxPresence,
          tY = r.n(tX),
          tJ = window.RobloxBadges,
          tQ = function (e) {
            var t = e.isVerified,
              r = e.isRobloxPlus,
              n = e.isPremium,
              o = e.isRobloxAdmin,
              i = e.size,
              a = void 0 === i ? "Large" : i,
              u = e.plusBadgeAriaLabel,
              c = !0 === r,
              s = !0 === n && !c,
              f = !0 === t,
              d = !0 === o;
            return f || c || s || d
              ? (0, l.jsxs)("span", {
                  className:
                    "items-center gap-xxsmall inline-flex shrink-0 [--icon-size-small:1em]",
                  children: [
                    f &&
                      (0, l.jsxs)("span", {
                        className: "relative flex items-center justify-center",
                        children: [
                          (0, l.jsx)(k, {
                            name: "icon-filled-verified-backplate",
                            className: "content-system-emphasis",
                            size: a
                          }),
                          (0, l.jsx)(k, {
                            name: "icon-filled-verified-check",
                            className: "absolute",
                            style: { color: "white" },
                            size: a
                          })
                        ]
                      }),
                    c &&
                      (0, l.jsx)(k, {
                        name: "icon-regular-roblox-plus",
                        className: "content-system-contrast",
                        size: a,
                        "aria-label": u
                      }),
                    s &&
                      (0, l.jsx)(k, {
                        name: "icon-filled-premium",
                        className: "content-system-contrast",
                        size: a
                      }),
                    d &&
                      (0, l.jsx)(k, {
                        name: "icon-filled-tilt",
                        className: "content-system-contrast",
                        size: a
                      })
                  ]
                })
              : null;
          },
          tZ = "player-search-action-parity",
          t0 = function (e) {
            var t,
              r = e.user,
              n = e.isChatEntrypointEnabled,
              o = e.isLoading,
              i = void 0 !== o && o,
              a = e.onAcceptFriend,
              u = e.onAddFriend,
              c = e.onJoinGame,
              s = e.onStartChat,
              d = (0, f.useTranslation)().translate;
            if (r.isCurrentUser) return null;
            switch (r.friendshipStatus) {
              case ek.requestReceived:
                return (0, l.jsx)(et, {
                  className: "width-full ".concat(tZ),
                  isDisabled: i,
                  onClick: function () {
                    a(r);
                  },
                  size: "Medium",
                  variant: "Standard",
                  children: d("Action.AcceptRequest")
                });
              case ek.requestSent:
                return (0, l.jsx)(et, {
                  className: "width-full ".concat(tZ),
                  isDisabled: !0,
                  size: "Medium",
                  variant: "Standard",
                  children: (t = d("Action.RequestSent")).charAt(0) + t.slice(1).toLowerCase()
                });
              case ek.friends:
                var p = r.gameIsPlayable,
                  y = !0 === n;
                if (!p && !y) return null;
                return (0, l.jsxs)("div", {
                  className: p && y ? "flex gap-medium" : void 0,
                  children: [
                    p
                      ? (0, l.jsx)(et, {
                          className: "".concat(y ? "grow" : "width-full", " ").concat(tZ),
                          isDisabled: i,
                          onClick: function () {
                            c(r);
                          },
                          size: "Medium",
                          variant: "Emphasis",
                          children: d("Action.JoinGame")
                        })
                      : null,
                    y
                      ? (0, l.jsx)(et, {
                          className: "".concat(p ? "grow" : "width-full", " ").concat(tZ),
                          isDisabled: i,
                          onClick: function () {
                            s(r);
                          },
                          size: "Medium",
                          variant: "Standard",
                          children: d("Action.Chat")
                        })
                      : null
                  ]
                });
              case ek.notFriends:
                return (0, l.jsx)(et, {
                  className: "width-full ".concat(tZ),
                  isDisabled: i,
                  onClick: function () {
                    u(r);
                  },
                  size: "Medium",
                  variant: "Standard",
                  children: d("Action.AddFriend")
                });
              default:
                return null;
            }
          };
        function t1(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = r),
            e
          );
        }
        var t2 =
            (t1((o = {}), 0, "Label.Offline"),
            t1(o, 1, "Label.Online"),
            t1(o, 4, "Label.Invisible"),
            o),
          t3 = function (e) {
            e.stopPropagation();
          },
          t4 = function (e, t) {
            var r,
              n,
              o = t2[null != (r = e.userPresenceType) ? r : 0];
            if (o) return t(o);
            var i = null == (n = e.lastLocation) ? void 0 : n.trim();
            return e.rootPlaceId && i ? i : t("Label.Online");
          },
          t6 =
            (t1((i = {}), 1, "Emphasis"),
            t1(i, 2, "Success"),
            t1(i, 3, "Warning"),
            t1(i, 4, "Neutral"),
            i),
          t8 = function (e) {
            var t,
              r = e.user,
              n = e.translate,
              o = e.onLinkClick,
              i = null == (t = r.lastLocation) ? void 0 : t.trim();
            return 2 === r.userPresenceType && r.rootPlaceId && i
              ? (0, l.jsx)("a", {
                  className: "text-link",
                  href: "".concat(eC().websiteUrl, "/games/").concat(r.rootPlaceId),
                  onClick: o,
                  title: i,
                  children: i
                })
              : (0, l.jsx)(p().Fragment, { children: t4(r, n) });
          },
          t5 = function (e) {
            var t;
            if (!e.gameIsPlayable && 3 !== e.userPresenceType)
              return null == (t = e.primaryGroup) ? void 0 : t.name;
          },
          t7 = function (e, t) {
            return (
              (!t &&
                !e.isCurrentUser &&
                !e.matchingPreviousName &&
                e.friendshipStatus !== ek.friends &&
                !e.isFollowing) ||
              e.gameIsPlayable ||
              3 === e.userPresenceType
            );
          },
          t9 = function (e) {
            var t,
              r,
              n,
              o,
              i = e.user,
              a = e.renameFriendsToConnections,
              u = e.isChatEntrypointEnabled,
              c = e.isUserGuest,
              s = void 0 !== c && c,
              d = e.isLoading,
              y = e.isRobloxPlus,
              m = e.onAcceptFriend,
              b = e.onAddFriend,
              h = e.onJoinGame,
              v = e.onOpenProfile,
              g = e.onStartChat,
              w = (0, f.useTranslation)().translate,
              O = i.isCurrentUser
                ? w("Label.ThisIsYou")
                : i.matchingPreviousName
                  ? w("Label.NewUsername", void 0, "New Username")
                  : i.friendshipStatus === ek.friends
                    ? a
                      ? w("Label.YouAreConnections", void 0, "You are connections")
                      : w("Label.YouAreFriends")
                    : i.isFollowing
                      ? w("Label.YouAreFollowing")
                      : null,
              j = i.isCurrentUser
                ? null
                : i.matchingPreviousName
                  ? "player-search-legacy-icon icon-pastname"
                  : i.friendshipStatus === ek.friends
                    ? "player-search-legacy-icon icon-nav-friends"
                    : null,
              x = t5(i),
              S = w("Label.ThisIsYou"),
              P = eP() && !0 === y,
              A = t6[null != (t = i.userPresenceType) ? t : 0];
            return (0, l.jsxs)("article", {
              className: t_()(
                "player-search-card relative flex width-full min-height-2000 flex-col bg-surface-100 radius-medium",
                i.isCurrentUser && "player-search-card-self"
              ),
              "data-testid": "player-card-".concat(i.id),
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "player-search-card-body flex width-full grow cursor-pointer items-start gap-large padding-large",
                  onClick: function () {
                    v(i);
                  },
                  onKeyDown: function (e) {
                    e.target === e.currentTarget &&
                      ("Enter" === e.key || " " === e.key) &&
                      (e.preventDefault(), v(i));
                  },
                  role: "button",
                  tabIndex: 0,
                  children: [
                    (0, l.jsxs)("span", {
                      className: "player-search-avatar shrink-0",
                      children: [
                        (0, l.jsx)("span", {
                          className: "player-search-avatar-clip",
                          children: (0, l.jsx)(tV.Thumbnail2d, {
                            altName: i.displayName,
                            containerClass: "height-full width-full",
                            format: tV.ThumbnailFormat.webp,
                            imgClassName: "height-full width-full object-cover",
                            targetId: i.id,
                            type: tV.ThumbnailTypes.avatarHeadshot
                          })
                        }),
                        i.isCurrentUser || s
                          ? null
                          : (0, l.jsxs)("span", {
                              className: "player-search-avatar-status",
                              children: [
                                (0, l.jsx)("span", {
                                  className: "player-search-avatar-status-wide",
                                  children: (0, l.jsx)(tY().PresenceStatusIcon, {
                                    translate: w,
                                    userId: i.id
                                  })
                                }),
                                A
                                  ? (0, l.jsx)("span", {
                                      className: "player-search-avatar-status-narrow",
                                      children: (0, l.jsx)(tH, { color: A, size: "XLarge" })
                                    })
                                  : null
                              ]
                            })
                      ]
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "player-search-card-caption flex flex-col justify-start gap-xsmall",
                      children: [
                        (0, l.jsx)("div", {
                          className: "flex min-width-0 items-center gap-small",
                          children: (0, l.jsx)("div", {
                            className: i.areNamesLoading
                              ? "player-search-card-name shimmer player-search-name-shimmer"
                              : "player-search-card-name flex items-center gap-xxsmall text-body-large content-emphasis",
                            children: i.areNamesLoading
                              ? null
                              : (0, l.jsxs)(p().Fragment, {
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "min-width-0 text-truncate-end",
                                      children: null != (r = i.primaryName) ? r : i.displayName
                                    }),
                                    i.hasVerifiedBadge
                                      ? (0, l.jsx)(tJ.VerifiedBadgeIconContainer, {
                                          additionalImgClass: "player-search-verified-badge",
                                          size: tJ.BadgeSizes.TITLE
                                        })
                                      : null,
                                    P
                                      ? (0, l.jsx)(tQ, {
                                          isRobloxPlus: !0,
                                          size: "Small",
                                          plusBadgeAriaLabel: w(
                                            "Label.RobloxPlusSubscriber",
                                            void 0,
                                            "Roblox Plus subscriber"
                                          )
                                        })
                                      : null
                                  ]
                                })
                          })
                        }),
                        i.areNamesLoading
                          ? (0, l.jsx)("p", { className: "shimmer player-search-label-shimmer" })
                          : (0, l.jsxs)("p", {
                              className: "text-body-small content-muted",
                              children: ["@", null != (n = i.username) ? n : i.name]
                            }),
                        O
                          ? (0, l.jsxs)("p", {
                              className:
                                "flex items-center gap-xsmall text-body-small content-muted",
                              children: [
                                j ? (0, l.jsx)("span", { className: j }) : null,
                                (0, l.jsx)("span", {
                                  className: "player-search-card-line",
                                  children: O
                                })
                              ]
                            })
                          : null,
                        x
                          ? (0, l.jsxs)("p", {
                              className:
                                "flex items-center gap-xsmall text-body-small content-muted",
                              children: [
                                (0, l.jsx)("span", {
                                  className: "player-search-legacy-icon icon-nav-group"
                                }),
                                (0, l.jsx)("a", {
                                  className: "player-search-card-line text-link",
                                  href: null == (o = i.primaryGroup) ? void 0 : o.url,
                                  onClick: t3,
                                  title: x,
                                  children: x
                                })
                              ]
                            })
                          : null,
                        t7(i, s)
                          ? (0, l.jsx)("p", {
                              className: "text-body-small content-muted",
                              children: (0, l.jsx)(t8, { onLinkClick: t3, translate: w, user: i })
                            })
                          : null
                      ]
                    })
                  ]
                }),
                s
                  ? null
                  : (0, l.jsx)("div", {
                      className: "player-search-actions padding-x-large padding-bottom-large",
                      children: i.isCurrentUser
                        ? (0, l.jsx)(et, {
                            className: "width-full",
                            isDisabled: !0,
                            size: "Medium",
                            variant: "Standard",
                            children: S
                          })
                        : (0, l.jsx)(t0, {
                            isChatEntrypointEnabled: u,
                            isLoading: void 0 !== d && d,
                            onAcceptFriend: m,
                            onAddFriend: b,
                            onJoinGame: h,
                            onStartChat: g,
                            user: i
                          })
                    })
              ]
            });
          },
          re = function (e) {
            var t = e.results,
              r = e.sentinelRef,
              n = e.children;
            return (0, l.jsxs)("div", {
              className: "flex width-full flex-col gap-medium",
              children: [
                (0, l.jsx)("div", {
                  className: "player-search-results-grid",
                  "data-testid": "player-search-results",
                  children: n
                }),
                t.length > 0 ? (0, l.jsx)("div", { ref: r, className: "height-100" }) : null
              ]
            });
          },
          rt = 0,
          rr = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\xabr",
              t = (0, d.useRef)();
            return (t.current || ((rt += 1), (t.current = "".concat(e).concat(rt))), t.current);
          };
        function rn(e) {
          var t = e.className;
          return p().createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "13",
              height: "6",
              viewBox: "0 0 13 6",
              fill: "none",
              className: y("block", t),
              style: { marginTop: -1 }
            },
            p().createElement("path", {
              d: "M0.249999 0.666628L4.83579 5.25241C5.61683 6.03346 6.88316 6.03346 7.66421 5.25241L12.25 0.666626L0.249999 0.666628Z",
              fill: "currentColor"
            })
          );
        }
        function ro(e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            n = r.checkForDefaultPrevented,
            o = void 0 === n || n;
          return function (r) {
            if ((null == e || e(r), !1 === o || !r.defaultPrevented))
              return null == t ? void 0 : t(r);
          };
        }
        function ri(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function ra(e, t) {
          if ("function" == typeof e) return e(t);
          null != e && (e.current = t);
        }
        function rl() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return function (e) {
            var r = !1,
              n = t.map(function (t) {
                var n = ra(t, e);
                return (r || "function" != typeof n || (r = !0), n);
              });
            if (r)
              return function () {
                for (var e = 0; e < n.length; e++) {
                  var r = n[e];
                  "function" == typeof r ? r() : ra(t[e], null);
                }
              };
          };
        }
        function ru() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return d.useCallback(
            rl.apply(
              void 0,
              (function (e) {
                if (Array.isArray(e)) return ri(e);
              })(t) ||
                (function (e) {
                  if (
                    ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                    null != e["@@iterator"]
                  )
                    return Array.from(e);
                })(t) ||
                (function (e) {
                  if (e) {
                    if ("string" == typeof e) return ri(e, void 0);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (
                      ("Object" === t && e.constructor && (t = e.constructor.name),
                      "Map" === t || "Set" === t)
                    )
                      return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                      return ri(e, void 0);
                  }
                })(t) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
            ),
            t
          );
        }
        function rc(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function rs(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = r),
            e
          );
        }
        function rf(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            ("function" == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
              )),
              n.forEach(function (t) {
                rs(e, t, r[t]);
              }));
          }
          return e;
        }
        function rd(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return rc(e);
            })(e) ||
            (function (e) {
              if (("u" > typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
                return Array.from(e);
            })(e) ||
            (function (e) {
              if (e) {
                if ("string" == typeof e) return rc(e, void 0);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t)
                )
                  return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                  return rc(e, void 0);
              }
            })(e) ||
            (function () {
              throw TypeError(
                "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function rp(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            r = [],
            n = function () {
              var t = r.map(function (e) {
                return d.createContext(e);
              });
              return function (r) {
                var n = (null == r ? void 0 : r[e]) || t;
                return d.useMemo(
                  function () {
                    var t, o;
                    return rs(
                      {},
                      "__scope".concat(e),
                      ((t = rf({}, r)),
                      (o = null != (o = rs({}, e, n)) ? o : {}),
                      Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
                        : (function (e) {
                            var t = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              t.push.apply(t, r);
                            }
                            return t;
                          })(Object(o)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                      t)
                    );
                  },
                  [r, n]
                );
              };
            };
          return (
            (n.scopeName = e),
            [
              function (t, n) {
                var o = d.createContext(n),
                  i = r.length;
                r = rd(r).concat([n]);
                var a = function (t) {
                  var r,
                    n = t.scope,
                    a = t.children,
                    u = (function (e, t) {
                      if (null == e) return {};
                      var r,
                        n,
                        o,
                        i = {};
                      if ("u" > typeof Reflect && Reflect.ownKeys) {
                        for (o = 0, r = Reflect.ownKeys(Object(e)); o < r.length; o++)
                          ((n = r[o]),
                            !(t.indexOf(n) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(e, n) &&
                              (i[n] = e[n]));
                        return i;
                      }
                      if (
                        ((i = (function (e, t) {
                          if (null == e) return {};
                          var r,
                            n,
                            o = {},
                            i = Object.getOwnPropertyNames(e);
                          for (n = 0; n < i.length; n++)
                            ((r = i[n]),
                              !(t.indexOf(r) >= 0) &&
                                Object.prototype.propertyIsEnumerable.call(e, r) &&
                                (o[r] = e[r]));
                          return o;
                        })(e, t)),
                        Object.getOwnPropertySymbols)
                      )
                        for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                          ((n = r[o]),
                            !(t.indexOf(n) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(e, n) &&
                              (i[n] = e[n]));
                      return i;
                    })(t, ["scope", "children"]),
                    c = (null == n || null == (r = n[e]) ? void 0 : r[i]) || o,
                    s = d.useMemo(function () {
                      return u;
                    }, Object.values(u));
                  return (0, l.jsx)(c.Provider, { value: s, children: a });
                };
                return (
                  (a.displayName = t + "Provider"),
                  [
                    a,
                    function (r, a) {
                      var l,
                        u = (null == a || null == (l = a[e]) ? void 0 : l[i]) || o,
                        c = d.useContext(u);
                      if (c) return c;
                      if (void 0 !== n) return n;
                      throw Error("`".concat(r, "` must be used within `").concat(t, "`"));
                    }
                  ]
                );
              },
              ry.apply(void 0, [n].concat(rd(t)))
            ]
          );
        }
        function ry() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          var n = t[0];
          if (1 === t.length) return n;
          var o = function () {
            var e = t.map(function (e) {
              return { useScope: e(), scopeName: e.scopeName };
            });
            return function (t) {
              var r = e.reduce(function (e, r) {
                var n = r.useScope,
                  o = r.scopeName;
                return rf({}, e, n(t)["__scope".concat(o)]);
              }, {});
              return d.useMemo(
                function () {
                  return rs({}, "__scope".concat(n.scopeName), r);
                },
                [r]
              );
            };
          };
          return ((o.scopeName = n.scopeName), o);
        }
        var rm = window.RadixUI["react-dismissable-layer"],
          rb = (null == (a = globalThis) ? void 0 : a.document)
            ? d.useLayoutEffect
            : function () {};
        function rh(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var rv = d["useId".toString()] || function () {},
          rg = 0,
          rw = ["top", "right", "bottom", "left"],
          rO = Math.min,
          rj = Math.max,
          rx = Math.round,
          rS = Math.floor,
          rP = function (e) {
            return { x: e, y: e };
          },
          rA = { left: "right", right: "left", bottom: "top", top: "bottom" },
          rE = { start: "end", end: "start" };
        function rI(e, t) {
          return "function" == typeof e ? e(t) : e;
        }
        function rC(e) {
          return e.split("-")[0];
        }
        function rk(e) {
          return e.split("-")[1];
        }
        function rN(e) {
          return "x" === e ? "y" : "x";
        }
        function rT(e) {
          return "y" === e ? "height" : "width";
        }
        var rR = new Set(["top", "bottom"]);
        function rD(e) {
          return rR.has(rC(e)) ? "y" : "x";
        }
        function rL(e) {
          return e.replace(/start|end/g, function (e) {
            return rE[e];
          });
        }
        var rM = ["left", "right"],
          rU = ["right", "left"],
          rF = ["top", "bottom"],
          rz = ["bottom", "top"];
        function r_(e) {
          return e.replace(/left|right|bottom|top/g, function (e) {
            return rA[e];
          });
        }
        function rW(e) {
          return "number" != typeof e
            ? (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                  ("function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                      Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                      })
                    )),
                    n.forEach(function (t) {
                      var n;
                      ((n = r[t]),
                        t in e
                          ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                            })
                          : (e[t] = n));
                    }));
                }
                return e;
              })({ top: 0, right: 0, bottom: 0, left: 0 }, e)
            : { top: e, right: e, bottom: e, left: e };
        }
        function rK(e) {
          var t = e.x,
            r = e.y,
            n = e.width,
            o = e.height;
          return { width: n, height: o, top: r, left: t, right: t + n, bottom: r + o, x: t, y: r };
        }
        function rB(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function rq(e, t, r, n, o, i, a) {
          try {
            var l = e[i](a),
              u = l.value;
          } catch (e) {
            r(e);
            return;
          }
          l.done ? t(u) : Promise.resolve(u).then(n, o);
        }
        function r$(e) {
          return function () {
            var t = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = e.apply(t, r);
              function a(e) {
                rq(i, n, o, a, l, "next", e);
              }
              function l(e) {
                rq(i, n, o, a, l, "throw", e);
              }
              a(void 0);
            });
          };
        }
        function rG(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = r),
            e
          );
        }
        function rH(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            ("function" == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
              )),
              n.forEach(function (t) {
                rG(e, t, r[t]);
              }));
          }
          return e;
        }
        function rV(e, t) {
          return (
            (t = null != t ? t : {}),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : (function (e) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, r);
                  }
                  return t;
                })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }),
            e
          );
        }
        function rX(e, t) {
          if (null == e) return {};
          var r,
            n,
            o,
            i = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (o = 0, r = Reflect.ownKeys(Object(e)); o < r.length; o++)
              ((n = r[o]),
                !(t.indexOf(n) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
            return i;
          }
          if (
            ((i = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = {},
                i = Object.getOwnPropertyNames(e);
              for (n = 0; n < i.length; n++)
                ((r = i[n]),
                  !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (o[r] = e[r]));
              return o;
            })(e, t)),
            Object.getOwnPropertySymbols)
          )
            for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              ((n = r[o]),
                !(t.indexOf(n) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
          return i;
        }
        function rY(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return rB(e);
            })(e) ||
            (function (e) {
              if (("u" > typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
                return Array.from(e);
            })(e) ||
            (function (e) {
              if (e) {
                if ("string" == typeof e) return rB(e, void 0);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t)
                )
                  return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                  return rB(e, void 0);
              }
            })(e) ||
            (function () {
              throw TypeError(
                "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function rJ(e, t) {
          var r,
            n,
            o,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: []
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype),
            l = Object.defineProperty;
          return (
            l(a, "next", { value: u(0) }),
            l(a, "throw", { value: u(1) }),
            l(a, "return", { value: u(2) }),
            "function" == typeof Symbol &&
              l(a, Symbol.iterator, {
                value: function () {
                  return this;
                }
              }),
            a
          );
          function u(l) {
            return function (u) {
              var c = [l, u];
              if (r) throw TypeError("Generator is already executing.");
              for (; a && ((a = 0), c[0] && (i = 0)), i;)
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o =
                        2 & c[0]
                          ? n.return
                          : c[0]
                            ? n.throw || ((o = n.return) && o.call(n), 0)
                            : n.next) &&
                      !(o = o.call(n, c[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                    case 0:
                    case 1:
                      o = c;
                      break;
                    case 4:
                      return (i.label++, { value: c[1], done: !1 });
                    case 5:
                      (i.label++, (n = c[1]), (c = [0]));
                      continue;
                    case 7:
                      ((c = i.ops.pop()), i.trys.pop());
                      continue;
                    default:
                      if (
                        !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                        (6 === c[0] || 2 === c[0])
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                        i.label = c[1];
                        break;
                      }
                      if (6 === c[0] && i.label < o[1]) {
                        ((i.label = o[1]), (o = c));
                        break;
                      }
                      if (o && i.label < o[2]) {
                        ((i.label = o[2]), i.ops.push(c));
                        break;
                      }
                      (o[2] && i.ops.pop(), i.trys.pop());
                      continue;
                  }
                  c = t.call(e, i);
                } catch (e) {
                  ((c = [6, e]), (n = 0));
                } finally {
                  r = o = 0;
                }
              if (5 & c[0]) throw c[1];
              return { value: c[0] ? c[1] : void 0, done: !0 };
            };
          }
        }
        function rQ(e, t, r) {
          var n,
            o = e.reference,
            i = e.floating,
            a = rD(t),
            l = rN(rD(t)),
            u = rT(l),
            c = rC(t),
            s = "y" === a,
            f = o.x + o.width / 2 - i.width / 2,
            d = o.y + o.height / 2 - i.height / 2,
            p = o[u] / 2 - i[u] / 2;
          switch (c) {
            case "top":
              n = { x: f, y: o.y - i.height };
              break;
            case "bottom":
              n = { x: f, y: o.y + o.height };
              break;
            case "right":
              n = { x: o.x + o.width, y: d };
              break;
            case "left":
              n = { x: o.x - i.width, y: d };
              break;
            default:
              n = { x: o.x, y: o.y };
          }
          switch (rk(t)) {
            case "start":
              n[l] -= p * (r && s ? -1 : 1);
              break;
            case "end":
              n[l] += p * (r && s ? -1 : 1);
          }
          return n;
        }
        function rZ(e, t) {
          return r$(function () {
            var r,
              n,
              o,
              i,
              a,
              l,
              u,
              c,
              s,
              f,
              d,
              p,
              y,
              m,
              b,
              h,
              v,
              g,
              w,
              O,
              j,
              x,
              S,
              P,
              A,
              E,
              I,
              C,
              k,
              N,
              T;
            return rJ(this, function (R) {
              switch (R.label) {
                case 0:
                  return (
                    void 0 === t && (t = {}),
                    (n = e.x),
                    (o = e.y),
                    (i = e.platform),
                    (a = e.rects),
                    (l = e.elements),
                    (u = e.strategy),
                    (f = void 0 === (s = (c = rI(t, e)).boundary) ? "clippingAncestors" : s),
                    (p = void 0 === (d = c.rootBoundary) ? "viewport" : d),
                    (m = void 0 === (y = c.elementContext) ? "floating" : y),
                    (h = void 0 !== (b = c.altBoundary) && b),
                    (g = rW(void 0 === (v = c.padding) ? 0 : v)),
                    (w = "floating" === m ? "reference" : "floating"),
                    (O = l[h ? w : m]),
                    (x = i.getClippingRect),
                    (S = {}),
                    [4, null == i.isElement ? void 0 : i.isElement(O)]
                  );
                case 1:
                  if (!(null == (r = R.sent()) || r)) return [3, 2];
                  return ((P = O), [3, 5]);
                case 2:
                  if ((A = O.contextElement)) return [3, 4];
                  return [
                    4,
                    null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating)
                  ];
                case 3:
                  ((A = R.sent()), (R.label = 4));
                case 4:
                  ((P = A), (R.label = 5));
                case 5:
                  return [
                    4,
                    x.apply(i, [
                      ((S.element = P), (S.boundary = f), (S.rootBoundary = p), (S.strategy = u), S)
                    ])
                  ];
                case 6:
                  return (
                    (j = rK.apply(void 0, [R.sent()])),
                    (E =
                      "floating" === m
                        ? { x: n, y: o, width: a.floating.width, height: a.floating.height }
                        : a.reference),
                    [4, null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating)]
                  );
                case 7:
                  return ((I = R.sent()), [4, null == i.isElement ? void 0 : i.isElement(I)]);
                case 8:
                  if (!R.sent()) return [3, 10];
                  return [4, null == i.getScale ? void 0 : i.getScale(I)];
                case 9:
                  return ((k = R.sent() || { x: 1, y: 1 }), [3, 11]);
                case 10:
                  ((k = { x: 1, y: 1 }), (R.label = 11));
                case 11:
                  if (((C = k), !i.convertOffsetParentRelativeRectToViewportRelativeRect))
                    return [3, 13];
                  return [
                    4,
                    i.convertOffsetParentRelativeRectToViewportRelativeRect({
                      elements: l,
                      rect: E,
                      offsetParent: I,
                      strategy: u
                    })
                  ];
                case 12:
                  return ((T = R.sent()), [3, 14]);
                case 13:
                  ((T = E), (R.label = 14));
                case 14:
                  return (
                    (N = rK.apply(void 0, [T])),
                    [
                      2,
                      {
                        top: (j.top - N.top + g.top) / C.y,
                        bottom: (N.bottom - j.bottom + g.bottom) / C.y,
                        left: (j.left - N.left + g.left) / C.x,
                        right: (N.right - j.right + g.right) / C.x
                      }
                    ]
                  );
              }
            });
          })();
        }
        function r0(e, t) {
          return {
            top: e.top - t.height,
            right: e.right - t.width,
            bottom: e.bottom - t.height,
            left: e.left - t.width
          };
        }
        function r1(e) {
          return rw.some(function (t) {
            return e[t] >= 0;
          });
        }
        var r2 = new Set(["left", "top"]);
        function r3(e, t) {
          return null != t && "u" > typeof Symbol && t[Symbol.hasInstance]
            ? !!t[Symbol.hasInstance](e)
            : e instanceof t;
        }
        function r4() {
          return "u" > typeof window;
        }
        function r6(e) {
          return r7(e) ? (e.nodeName || "").toLowerCase() : "#document";
        }
        function r8(e) {
          var t;
          return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
        }
        function r5(e) {
          var t;
          return null == (t = (r7(e) ? e.ownerDocument : e.document) || window.document)
            ? void 0
            : t.documentElement;
        }
        function r7(e) {
          return !!r4() && (r3(e, Node) || r3(e, r8(e).Node));
        }
        function r9(e) {
          return !!r4() && (r3(e, Element) || r3(e, r8(e).Element));
        }
        function ne(e) {
          return !!r4() && (r3(e, HTMLElement) || r3(e, r8(e).HTMLElement));
        }
        function nt(e) {
          return (
            !(!r4() || "u" < typeof ShadowRoot) && (r3(e, ShadowRoot) || r3(e, r8(e).ShadowRoot))
          );
        }
        var nr = new Set(["inline", "contents"]);
        function nn(e) {
          var t = ny(e),
            r = t.overflow,
            n = t.overflowX,
            o = t.overflowY,
            i = t.display;
          return /auto|scroll|overlay|hidden|clip/.test(r + o + n) && !nr.has(i);
        }
        var no = new Set(["table", "td", "th"]),
          ni = [":popover-open", ":modal"];
        function na(e) {
          return ni.some(function (t) {
            try {
              return e.matches(t);
            } catch (e) {
              return !1;
            }
          });
        }
        var nl = ["transform", "translate", "scale", "rotate", "perspective"],
          nu = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
          nc = ["paint", "layout", "strict", "content"];
        function ns(e) {
          var t = nf(),
            r = r9(e) ? ny(e) : e;
          return (
            nl.some(function (e) {
              return !!r[e] && "none" !== r[e];
            }) ||
            (!!r.containerType && "normal" !== r.containerType) ||
            (!t && !!r.backdropFilter && "none" !== r.backdropFilter) ||
            (!t && !!r.filter && "none" !== r.filter) ||
            nu.some(function (e) {
              return (r.willChange || "").includes(e);
            }) ||
            nc.some(function (e) {
              return (r.contain || "").includes(e);
            })
          );
        }
        function nf() {
          return (
            !("u" < typeof CSS) && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
          );
        }
        var nd = new Set(["html", "body", "#document"]);
        function np(e) {
          return nd.has(r6(e));
        }
        function ny(e) {
          return r8(e).getComputedStyle(e);
        }
        function nm(e) {
          return r9(e)
            ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
            : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
        }
        function nb(e) {
          if ("html" === r6(e)) return e;
          var t = e.assignedSlot || e.parentNode || (nt(e) && e.host) || r5(e);
          return nt(t) ? t.host : t;
        }
        function nh(e, t, r) {
          (void 0 === t && (t = []), void 0 === r && (r = !0));
          var n,
            o = (function e(t) {
              var r = nb(t);
              return np(r)
                ? t.ownerDocument
                  ? t.ownerDocument.body
                  : t.body
                : ne(r) && nn(r)
                  ? r
                  : e(r);
            })(e),
            i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
            a = r8(o);
          if (i) {
            var l = nv(a);
            return t.concat(a, a.visualViewport || [], nn(o) ? o : [], l && r ? nh(l) : []);
          }
          return t.concat(o, nh(o, [], r));
        }
        function nv(e) {
          return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
        }
        function ng(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function nw(e, t, r, n, o, i, a) {
          try {
            var l = e[i](a),
              u = l.value;
          } catch (e) {
            r(e);
            return;
          }
          l.done ? t(u) : Promise.resolve(u).then(n, o);
        }
        function nO(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            ("function" == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
              )),
              n.forEach(function (t) {
                var n;
                ((n = r[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (e[t] = n));
              }));
          }
          return e;
        }
        function nj(e, t) {
          return (
            (t = null != t ? t : {}),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : (function (e) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, r);
                  }
                  return t;
                })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }),
            e
          );
        }
        function nx(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return ng(e);
            })(e) ||
            (function (e) {
              if (("u" > typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
                return Array.from(e);
            })(e) ||
            nS(e) ||
            (function () {
              throw TypeError(
                "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function nS(e, t) {
          if (e) {
            if ("string" == typeof e) return ng(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (
              ("Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r)
            )
              return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
              return ng(e, t);
          }
        }
        function nP(e) {
          var t = ny(e),
            r = parseFloat(t.width) || 0,
            n = parseFloat(t.height) || 0,
            o = ne(e),
            i = o ? e.offsetWidth : r,
            a = o ? e.offsetHeight : n,
            l = rx(r) !== i || rx(n) !== a;
          return (l && ((r = i), (n = a)), { width: r, height: n, $: l });
        }
        function nA(e) {
          return r9(e) ? e : e.contextElement;
        }
        function nE(e) {
          var t = nA(e);
          if (!ne(t)) return rP(1);
          var r = t.getBoundingClientRect(),
            n = nP(t),
            o = n.width,
            i = n.height,
            a = n.$,
            l = (a ? rx(r.width) : r.width) / o,
            u = (a ? rx(r.height) : r.height) / i;
          return (
            (l && Number.isFinite(l)) || (l = 1),
            (u && Number.isFinite(u)) || (u = 1),
            { x: l, y: u }
          );
        }
        var nI = rP(0);
        function nC(e) {
          var t = r8(e);
          return nf() && t.visualViewport
            ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
            : nI;
        }
        function nk(e, t, r, n) {
          (void 0 === t && (t = !1), void 0 === r && (r = !1));
          var o,
            i = e.getBoundingClientRect(),
            a = nA(e),
            l = rP(1);
          t && (n ? r9(n) && (l = nE(n)) : (l = nE(e)));
          var u = (void 0 === (o = r) && (o = !1), n && (!o || n === r8(a)) && o) ? nC(a) : rP(0),
            c = (i.left + u.x) / l.x,
            s = (i.top + u.y) / l.y,
            f = i.width / l.x,
            d = i.height / l.y;
          if (a)
            for (var p = r8(a), y = n && r9(n) ? r8(n) : n, m = p, b = nv(m); b && n && y !== m;) {
              var h = nE(b),
                v = b.getBoundingClientRect(),
                g = ny(b),
                w = v.left + (b.clientLeft + parseFloat(g.paddingLeft)) * h.x,
                O = v.top + (b.clientTop + parseFloat(g.paddingTop)) * h.y;
              ((c *= h.x),
                (s *= h.y),
                (f *= h.x),
                (d *= h.y),
                (c += w),
                (s += O),
                (b = nv((m = r8(b)))));
            }
          return rK({ width: f, height: d, x: c, y: s });
        }
        function nN(e, t) {
          var r = nm(e).scrollLeft;
          return t ? t.left + r : nk(r5(e)).left + r;
        }
        function nT(e, t) {
          var r = e.getBoundingClientRect();
          return { x: r.left + t.scrollLeft - nN(e, r), y: r.top + t.scrollTop };
        }
        var nR = new Set(["absolute", "fixed"]);
        function nD(e, t, r) {
          if ("viewport" === t)
            n = (function (e, t) {
              var r = r8(e),
                n = r5(e),
                o = r.visualViewport,
                i = n.clientWidth,
                a = n.clientHeight,
                l = 0,
                u = 0;
              if (o) {
                ((i = o.width), (a = o.height));
                var c = nf();
                (!c || (c && "fixed" === t)) && ((l = o.offsetLeft), (u = o.offsetTop));
              }
              var s = nN(n);
              if (s <= 0) {
                var f = n.ownerDocument,
                  d = f.body,
                  p = getComputedStyle(d),
                  y =
                    ("CSS1Compat" === f.compatMode &&
                      parseFloat(p.marginLeft) + parseFloat(p.marginRight)) ||
                    0,
                  m = Math.abs(n.clientWidth - d.clientWidth - y);
                m <= 25 && (i -= m);
              } else s <= 25 && (i += s);
              return { width: i, height: a, x: l, y: u };
            })(e, r);
          else if ("document" === t)
            ((o = r5(e)),
              (i = r5(o)),
              (a = nm(o)),
              (l = o.ownerDocument.body),
              (u = rj(i.scrollWidth, i.clientWidth, l.scrollWidth, l.clientWidth)),
              (c = rj(i.scrollHeight, i.clientHeight, l.scrollHeight, l.clientHeight)),
              (s = -a.scrollLeft + nN(o)),
              (f = -a.scrollTop),
              "rtl" === ny(l).direction && (s += rj(i.clientWidth, l.clientWidth) - u),
              (n = { width: u, height: c, x: s, y: f }));
          else if (r9(t))
            ((p = (d = nk(t, !0, "fixed" === r)).top + t.clientTop),
              (y = d.left + t.clientLeft),
              (m = ne(t) ? nE(t) : rP(1)),
              (n = {
                width: t.clientWidth * m.x,
                height: t.clientHeight * m.y,
                x: y * m.x,
                y: p * m.y
              }));
          else {
            var n,
              o,
              i,
              a,
              l,
              u,
              c,
              s,
              f,
              d,
              p,
              y,
              m,
              b = nC(e);
            n = { x: t.x - b.x, y: t.y - b.y, width: t.width, height: t.height };
          }
          return rK(n);
        }
        function nL(e, t, r) {
          var n = ne(t),
            o = r5(t),
            i = "fixed" === r,
            a = nk(e, !0, i, t),
            l = { scrollLeft: 0, scrollTop: 0 },
            u = rP(0);
          if (n || (!n && !i))
            if ((("body" !== r6(t) || nn(o)) && (l = nm(t)), n)) {
              var c = nk(t, !0, i, t);
              ((u.x = c.x + t.clientLeft), (u.y = c.y + t.clientTop));
            } else o && (u.x = nN(o));
          i && !n && o && (u.x = nN(o));
          var s = !o || n || i ? rP(0) : nT(o, l);
          return {
            x: a.left + l.scrollLeft - u.x - s.x,
            y: a.top + l.scrollTop - u.y - s.y,
            width: a.width,
            height: a.height
          };
        }
        function nM(e) {
          return "static" === ny(e).position;
        }
        function nU(e, t) {
          if (!ne(e) || "fixed" === ny(e).position) return null;
          if (t) return t(e);
          var r = e.offsetParent;
          return (r5(e) === r && (r = r.ownerDocument.body), r);
        }
        function nF(e, t) {
          var r,
            n = r8(e);
          if (na(e)) return n;
          if (!ne(e)) {
            for (var o = nb(e); o && !np(o);) {
              if (r9(o) && !nM(o)) return o;
              o = nb(o);
            }
            return n;
          }
          for (var i = nU(e, t); i && ((r = i), no.has(r6(r))) && nM(i);) i = nU(i, t);
          return i && np(i) && nM(i) && !ns(i)
            ? n
            : i ||
                (function (e) {
                  for (var t = nb(e); ne(t) && !np(t);) {
                    if (ns(t)) return t;
                    if (na(t)) break;
                    t = nb(t);
                  }
                  return null;
                })(e) ||
                n;
        }
        var nz = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            var t = e.elements,
              r = e.rect,
              n = e.offsetParent,
              o = "fixed" === e.strategy,
              i = r5(n),
              a = !!t && na(t.floating);
            if (n === i || (a && o)) return r;
            var l = { scrollLeft: 0, scrollTop: 0 },
              u = rP(1),
              c = rP(0),
              s = ne(n);
            if ((s || (!s && !o)) && (("body" !== r6(n) || nn(i)) && (l = nm(n)), ne(n))) {
              var f = nk(n);
              ((u = nE(n)), (c.x = f.x + n.clientLeft), (c.y = f.y + n.clientTop));
            }
            var d = !i || s || o ? rP(0) : nT(i, l);
            return {
              width: r.width * u.x,
              height: r.height * u.y,
              x: r.x * u.x - l.scrollLeft * u.x + c.x + d.x,
              y: r.y * u.y - l.scrollTop * u.y + c.y + d.y
            };
          },
          getDocumentElement: r5,
          getClippingRect: function (e) {
            var t = e.element,
              r = e.boundary,
              n = e.rootBoundary,
              o = e.strategy,
              i = nx(
                "clippingAncestors" === r
                  ? na(t)
                    ? []
                    : (function (e, t) {
                        var r = t.get(e);
                        if (r) return r;
                        for (
                          var n = nh(e, [], !1).filter(function (e) {
                              return r9(e) && "body" !== r6(e);
                            }),
                            o = null,
                            i = "fixed" === ny(e).position,
                            a = i ? nb(e) : e;
                          r9(a) && !np(a);
                        ) {
                          var l = ny(a),
                            u = ns(a);
                          (u || "fixed" !== l.position || (o = null),
                            (
                              i
                                ? !u && !o
                                : (!u && "static" === l.position && !!o && nR.has(o.position)) ||
                                  (nn(a) &&
                                    !u &&
                                    (function e(t, r) {
                                      var n = nb(t);
                                      return (
                                        !(n === r || !r9(n) || np(n)) &&
                                        ("fixed" === ny(n).position || e(n, r))
                                      );
                                    })(e, a))
                            )
                              ? (n = n.filter(function (e) {
                                  return e !== a;
                                }))
                              : (o = l),
                            (a = nb(a)));
                        }
                        return (t.set(e, n), n);
                      })(t, this._c)
                  : [].concat(r)
              ).concat([n]),
              a = i[0],
              l = i.reduce(
                function (e, r) {
                  var n = nD(t, r, o);
                  return (
                    (e.top = rj(n.top, e.top)),
                    (e.right = rO(n.right, e.right)),
                    (e.bottom = rO(n.bottom, e.bottom)),
                    (e.left = rj(n.left, e.left)),
                    e
                  );
                },
                nD(t, a, o)
              );
            return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
          },
          getOffsetParent: nF,
          getElementRects: function (e) {
            var t;
            return ((t = function () {
              var t, r, n, o;
              return (function (e, t) {
                var r,
                  n,
                  o,
                  i = {
                    label: 0,
                    sent: function () {
                      if (1 & o[0]) throw o[1];
                      return o[1];
                    },
                    trys: [],
                    ops: []
                  },
                  a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype),
                  l = Object.defineProperty;
                return (
                  l(a, "next", { value: u(0) }),
                  l(a, "throw", { value: u(1) }),
                  l(a, "return", { value: u(2) }),
                  "function" == typeof Symbol &&
                    l(a, Symbol.iterator, {
                      value: function () {
                        return this;
                      }
                    }),
                  a
                );
                function u(l) {
                  return function (u) {
                    var c = [l, u];
                    if (r) throw TypeError("Generator is already executing.");
                    for (; a && ((a = 0), c[0] && (i = 0)), i;)
                      try {
                        if (
                          ((r = 1),
                          n &&
                            (o =
                              2 & c[0]
                                ? n.return
                                : c[0]
                                  ? n.throw || ((o = n.return) && o.call(n), 0)
                                  : n.next) &&
                            !(o = o.call(n, c[1])).done)
                        )
                          return o;
                        switch (((n = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                          case 0:
                          case 1:
                            o = c;
                            break;
                          case 4:
                            return (i.label++, { value: c[1], done: !1 });
                          case 5:
                            (i.label++, (n = c[1]), (c = [0]));
                            continue;
                          case 7:
                            ((c = i.ops.pop()), i.trys.pop());
                            continue;
                          default:
                            if (
                              !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                              (6 === c[0] || 2 === c[0])
                            ) {
                              i = 0;
                              continue;
                            }
                            if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                              i.label = c[1];
                              break;
                            }
                            if (6 === c[0] && i.label < o[1]) {
                              ((i.label = o[1]), (o = c));
                              break;
                            }
                            if (o && i.label < o[2]) {
                              ((i.label = o[2]), i.ops.push(c));
                              break;
                            }
                            (o[2] && i.ops.pop(), i.trys.pop());
                            continue;
                        }
                        c = t.call(e, i);
                      } catch (e) {
                        ((c = [6, e]), (n = 0));
                      } finally {
                        r = o = 0;
                      }
                    if (5 & c[0]) throw c[1];
                    return { value: c[0] ? c[1] : void 0, done: !0 };
                  };
                }
              })(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (t = this.getOffsetParent || nF),
                      [4, (0, this.getDimensions)(e.floating)]
                    );
                  case 1:
                    return ((r = i.sent()), (n = {}), (o = [e.reference]), [4, t(e.floating)]);
                  case 2:
                    return [
                      2,
                      ((n.reference = nL.apply(void 0, o.concat([i.sent(), e.strategy]))),
                      (n.floating = { x: 0, y: 0, width: r.width, height: r.height }),
                      n)
                    ];
                }
              });
            }),
            function () {
              var e = this,
                r = arguments;
              return new Promise(function (n, o) {
                var i = t.apply(e, r);
                function a(e) {
                  nw(i, n, o, a, l, "next", e);
                }
                function l(e) {
                  nw(i, n, o, a, l, "throw", e);
                }
                a(void 0);
              });
            }).call(this);
          },
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            var t = nP(e);
            return { width: t.width, height: t.height };
          },
          getScale: nE,
          isElement: r9,
          isRTL: function (e) {
            return "rtl" === ny(e).direction;
          }
        };
        function n_(e, t) {
          return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        }
        function nW(e, t, r, n) {
          void 0 === n && (n = {});
          var o,
            i = n.ancestorScroll,
            a = void 0 === i || i,
            l = n.ancestorResize,
            u = void 0 === l || l,
            c = n.elementResize,
            s = void 0 === c ? "function" == typeof ResizeObserver : c,
            f = n.layoutShift,
            d = void 0 === f ? "function" == typeof IntersectionObserver : f,
            p = n.animationFrame,
            y = void 0 !== p && p,
            m = nA(e),
            b = a || u ? nx(m ? nh(m) : []).concat(nx(nh(t))) : [];
          b.forEach(function (e) {
            (a && e.addEventListener("scroll", r, { passive: !0 }),
              u && e.addEventListener("resize", r));
          });
          var h =
              m && d
                ? (function (e, t) {
                    var r,
                      n = null,
                      o = r5(e);
                    function i() {
                      var e;
                      (clearTimeout(r), null == (e = n) || e.disconnect(), (n = null));
                    }
                    return (
                      !(function a(l, u) {
                        (void 0 === l && (l = !1), void 0 === u && (u = 1), i());
                        var c = e.getBoundingClientRect(),
                          s = c.left,
                          f = c.top,
                          d = c.width,
                          p = c.height;
                        if ((l || t(), d && p)) {
                          var y = {
                              rootMargin:
                                -rS(f) +
                                "px " +
                                -rS(o.clientWidth - (s + d)) +
                                "px " +
                                -rS(o.clientHeight - (f + p)) +
                                "px " +
                                -rS(s) +
                                "px",
                              threshold: rj(0, rO(1, u)) || 1
                            },
                            m = !0;
                          try {
                            n = new IntersectionObserver(
                              b,
                              nj(nO({}, y), { root: o.ownerDocument })
                            );
                          } catch (e) {
                            n = new IntersectionObserver(b, y);
                          }
                          n.observe(e);
                        }
                        function b(t) {
                          var n = t[0].intersectionRatio;
                          if (n !== u) {
                            if (!m) return a();
                            n
                              ? a(!1, n)
                              : (r = setTimeout(function () {
                                  a(!1, 1e-7);
                                }, 1e3));
                          }
                          (1 !== n || n_(c, e.getBoundingClientRect()) || a(), (m = !1));
                        }
                      })(!0),
                      i
                    );
                  })(m, r)
                : null,
            v = -1,
            g = null;
          s &&
            ((g = new ResizeObserver(function (e) {
              var n = ((function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
                (function (e) {
                  var t,
                    r,
                    n =
                      null == e
                        ? null
                        : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                  if (null != n) {
                    var o = [],
                      i = !0,
                      a = !1;
                    try {
                      for (
                        n = n.call(e);
                        !(i = (t = n.next()).done) && (o.push(t.value), 1 !== o.length);
                        i = !0
                      );
                    } catch (e) {
                      ((a = !0), (r = e));
                    } finally {
                      try {
                        i || null == n.return || n.return();
                      } finally {
                        if (a) throw r;
                      }
                    }
                    return o;
                  }
                })(e) ||
                nS(e, 1) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })())[0];
              (n &&
                n.target === m &&
                g &&
                (g.unobserve(t),
                cancelAnimationFrame(v),
                (v = requestAnimationFrame(function () {
                  var e;
                  null == (e = g) || e.observe(t);
                }))),
                r());
            })),
            m && !y && g.observe(m),
            g.observe(t));
          var w = y ? nk(e) : null;
          return (
            y &&
              (function t() {
                var n = nk(e);
                (w && !n_(w, n) && r(), (w = n), (o = requestAnimationFrame(t)));
              })(),
            r(),
            function () {
              var e;
              (b.forEach(function (e) {
                (a && e.removeEventListener("scroll", r), u && e.removeEventListener("resize", r));
              }),
                null == h || h(),
                null == (e = g) || e.disconnect(),
                (g = null),
                y && cancelAnimationFrame(o));
            }
          );
        }
        var nK = function (e) {
            return {
              name: "arrow",
              options: e,
              fn: function (t) {
                return r$(function () {
                  var r,
                    n,
                    o,
                    i,
                    a,
                    l,
                    u,
                    c,
                    s,
                    f,
                    d,
                    p,
                    y,
                    m,
                    b,
                    h,
                    v,
                    g,
                    w,
                    O,
                    j,
                    x,
                    S,
                    P,
                    A,
                    E,
                    I,
                    C,
                    k,
                    N,
                    T,
                    R,
                    D,
                    L,
                    M,
                    U,
                    F;
                  return rJ(this, function (z) {
                    switch (z.label) {
                      case 0:
                        if (
                          ((r = t.x),
                          (n = t.y),
                          (o = t.placement),
                          (i = t.rects),
                          (a = t.platform),
                          (l = t.elements),
                          (u = t.middlewareData),
                          (s = (c = rI(e, t) || {}).element),
                          (d = void 0 === (f = c.padding) ? 0 : f),
                          null == s)
                        )
                          return [2, {}];
                        return (
                          (p = rW(d)),
                          (y = { x: r, y: n }),
                          (b = rT((m = rN(rD(o))))),
                          [4, a.getDimensions(s)]
                        );
                      case 1:
                        return (
                          (h = z.sent()),
                          (g = (v = "y" === m) ? "top" : "left"),
                          (w = v ? "bottom" : "right"),
                          (O = v ? "clientHeight" : "clientWidth"),
                          (j = i.reference[b] + i.reference[m] - y[m] - i.floating[b]),
                          (x = y[m] - i.reference[m]),
                          [4, null == a.getOffsetParent ? void 0 : a.getOffsetParent(s)]
                        );
                      case 2:
                        if ((A = !(P = (S = z.sent()) ? S[O] : 0))) return [3, 4];
                        return [4, null == a.isElement ? void 0 : a.isElement(S)];
                      case 3:
                        ((A = !z.sent()), (z.label = 4));
                      case 4:
                        return (
                          A && (P = l.floating[O] || i.floating[b]),
                          (E = j / 2 - x / 2),
                          (I = P / 2 - h[b] / 2 - 1),
                          (C = rO(p[g], I)),
                          (k = rO(p[w], I)),
                          (N = C),
                          (T = P - h[b] - k),
                          (D = rj(N, rO((R = P / 2 - h[b] / 2 + E), T))),
                          (M = (L =
                            !u.arrow &&
                            null != rk(o) &&
                            R !== D &&
                            i.reference[b] / 2 - (R < N ? C : k) - h[b] / 2 < 0)
                            ? R < N
                              ? R - N
                              : R - T
                            : 0),
                          [
                            2,
                            (rG((F = {}), m, y[m] + M),
                            rG(
                              F,
                              "data",
                              rH(
                                (rG((U = {}), m, D), rG(U, "centerOffset", R - D - M), U),
                                L && { alignmentOffset: M }
                              )
                            ),
                            rG(F, "reset", L),
                            F)
                          ]
                        );
                    }
                  });
                })();
              }
            };
          },
          nB = function (e, t, r) {
            var n,
              o = new Map(),
              i = nO({ platform: nz }, r),
              a = nj(nO({}, i.platform), { _c: o });
            return (
              (n = nj(nO({}, i), { platform: a })),
              r$(function () {
                var r, o, i, a, l, u, c, s, f, d, p, y, m, b, h, v, g, w, O, j, x, S, P, A, E, I;
                return rJ(this, function (C) {
                  switch (C.label) {
                    case 0:
                      return (
                        (o = void 0 === (r = n.placement) ? "bottom" : r),
                        (a = void 0 === (i = n.strategy) ? "absolute" : i),
                        (u = void 0 === (l = n.middleware) ? [] : l),
                        (c = n.platform),
                        (s = u.filter(Boolean)),
                        [4, null == c.isRTL ? void 0 : c.isRTL(t)]
                      );
                    case 1:
                      return (
                        (f = C.sent()),
                        [4, c.getElementRects({ reference: e, floating: t, strategy: a })]
                      );
                    case 2:
                      ((y = (p = rQ((d = C.sent()), o, f)).x),
                        (m = p.y),
                        (b = o),
                        (h = {}),
                        (v = 0),
                        (g = 0),
                        (C.label = 3));
                    case 3:
                      if (!(g < s.length)) return [3, 11];
                      return (
                        (O = (w = s[g]).name),
                        [
                          4,
                          (0, w.fn)({
                            x: y,
                            y: m,
                            initialPlacement: o,
                            placement: b,
                            strategy: a,
                            middlewareData: h,
                            rects: d,
                            platform: c,
                            elements: { reference: e, floating: t }
                          })
                        ]
                      );
                    case 4:
                      var k;
                      if (
                        ((x = (j = C.sent()).x),
                        (S = j.y),
                        (P = j.data),
                        (A = j.reset),
                        (y = null != x ? x : y),
                        (m = null != S ? S : m),
                        (h = rV(rH({}, h), rG({}, O, rH({}, h[O], P)))),
                        !(A && v <= 50))
                      )
                        return [3, 10];
                      if (
                        (v++,
                        (void 0 === A
                          ? "undefined"
                          : (k = A) && "u" > typeof Symbol && k.constructor === Symbol
                            ? "symbol"
                            : typeof k) != "object")
                      )
                        return [3, 9];
                      if ((A.placement && (b = A.placement), !A.rects)) return [3, 8];
                      if (!0 !== A.rects) return [3, 6];
                      return [4, c.getElementRects({ reference: e, floating: t, strategy: a })];
                    case 5:
                      return ((E = C.sent()), [3, 7]);
                    case 6:
                      ((E = A.rects), (C.label = 7));
                    case 7:
                      ((d = E), (C.label = 8));
                    case 8:
                      ((y = (I = rQ(d, b, f)).x), (m = I.y), (C.label = 9));
                    case 9:
                      ((g = -1), (C.label = 10));
                    case 10:
                      return (g++, [3, 3]);
                    case 11:
                      return [2, { x: y, y: m, placement: b, strategy: a, middlewareData: h }];
                  }
                });
              })()
            );
          },
          nq = window.ReactDOM,
          n$ = r.n(nq);
        function nG(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function nH(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            ("function" == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
              )),
              n.forEach(function (t) {
                var n;
                ((n = r[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (e[t] = n));
              }));
          }
          return e;
        }
        function nV(e, t) {
          return (
            (t = null != t ? t : {}),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : (function (e) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, r);
                  }
                  return t;
                })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }),
            e
          );
        }
        function nX(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var r,
                n,
                o =
                  null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
              if (null != o) {
                var i = [],
                  a = !0,
                  l = !1;
                try {
                  for (
                    o = o.call(e);
                    !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t);
                    a = !0
                  );
                } catch (e) {
                  ((l = !0), (n = e));
                } finally {
                  try {
                    a || null == o.return || o.return();
                  } finally {
                    if (l) throw n;
                  }
                }
                return i;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return nG(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r)
                )
                  return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                  return nG(e, t);
              }
            })(e, t) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function nY(e) {
          return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
        }
        var nJ = "u" > typeof document ? d.useLayoutEffect : function () {};
        function nQ(e, t) {
          if (e === t) return !0;
          if ((void 0 === e ? "undefined" : nY(e)) !== (void 0 === t ? "undefined" : nY(t)))
            return !1;
          if ("function" == typeof e && e.toString() === t.toString()) return !0;
          if (e && t && (void 0 === e ? "undefined" : nY(e)) === "object") {
            if (Array.isArray(e)) {
              if ((r = e.length) !== t.length) return !1;
              for (n = r; 0 != n--;) if (!nQ(e[n], t[n])) return !1;
              return !0;
            }
            if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
            for (n = r; 0 != n--;) if (!{}.hasOwnProperty.call(t, o[n])) return !1;
            for (n = r; 0 != n--;) {
              var r,
                n,
                o,
                i = o[n];
              if (("_owner" !== i || !e.$$typeof) && !nQ(e[i], t[i])) return !1;
            }
            return !0;
          }
          return e != e && t != t;
        }
        function nZ(e) {
          return "u" < typeof window
            ? 1
            : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
        }
        function n0(e, t) {
          var r = nZ(e);
          return Math.round(t * r) / r;
        }
        function n1(e) {
          var t = d.useRef(e);
          return (
            nJ(function () {
              t.current = e;
            }),
            t
          );
        }
        var n2 = function (e, t) {
            var r;
            return nV(
              nH(
                {},
                (void 0 === (r = e) && (r = 0),
                {
                  name: "offset",
                  options: r,
                  fn: function (e) {
                    return r$(function () {
                      var t, n, o, i, a, l, u;
                      return rJ(this, function (c) {
                        switch (c.label) {
                          case 0:
                            var s;
                            return (
                              (o = e.x),
                              (i = e.y),
                              (a = e.placement),
                              (l = e.middlewareData),
                              [
                                4,
                                ((s = r),
                                r$(function () {
                                  var t, r, n, o, i, a, l, u, c, f, d, p, y, m;
                                  return rJ(this, function (b) {
                                    switch (b.label) {
                                      case 0:
                                        return (
                                          (t = e.placement),
                                          (r = e.platform),
                                          (n = e.elements),
                                          [4, null == r.isRTL ? void 0 : r.isRTL(n.floating)]
                                        );
                                      case 1:
                                        return (
                                          (o = b.sent()),
                                          (i = rC(t)),
                                          (a = rk(t)),
                                          (l = "y" === rD(t)),
                                          (u = r2.has(i) ? -1 : 1),
                                          (c = o && l ? -1 : 1),
                                          (p = (d =
                                            "number" == typeof (f = rI(s, e))
                                              ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
                                              : {
                                                  mainAxis: f.mainAxis || 0,
                                                  crossAxis: f.crossAxis || 0,
                                                  alignmentAxis: f.alignmentAxis
                                                }).mainAxis),
                                          (y = d.crossAxis),
                                          (m = d.alignmentAxis),
                                          a &&
                                            "number" == typeof m &&
                                            (y = "end" === a ? -1 * m : m),
                                          [2, l ? { x: y * c, y: p * u } : { x: p * u, y: y * c }]
                                        );
                                    }
                                  });
                                })())
                              ]
                            );
                          case 1:
                            if (
                              ((u = c.sent()),
                              a === (null == (t = l.offset) ? void 0 : t.placement) &&
                                null != (n = l.arrow) &&
                                n.alignmentOffset)
                            )
                              return [2, {}];
                            return [
                              2,
                              { x: o + u.x, y: i + u.y, data: rV(rH({}, u), { placement: a }) }
                            ];
                        }
                      });
                    })();
                  }
                })
              ),
              { options: [e, t] }
            );
          },
          n3 = function (e, t) {
            var r;
            return nV(
              nH(
                {},
                (void 0 === (r = e) && (r = {}),
                {
                  name: "shift",
                  options: r,
                  fn: function (e) {
                    return r$(function () {
                      var t,
                        n,
                        o,
                        i,
                        a,
                        l,
                        u,
                        c,
                        s,
                        f,
                        d,
                        p,
                        y,
                        m,
                        b,
                        h,
                        v,
                        g,
                        w,
                        O,
                        j,
                        x,
                        S,
                        P,
                        A,
                        E,
                        I,
                        C;
                      return rJ(this, function (k) {
                        switch (k.label) {
                          case 0:
                            return (
                              (t = e.x),
                              (n = e.y),
                              (o = e.placement),
                              (l = void 0 === (a = (i = rI(r, e)).mainAxis) || a),
                              (c = void 0 !== (u = i.crossAxis) && u),
                              (f =
                                void 0 === (s = i.limiter)
                                  ? {
                                      fn: function (e) {
                                        return { x: e.x, y: e.y };
                                      }
                                    }
                                  : s),
                              (d = rX(i, ["mainAxis", "crossAxis", "limiter"])),
                              (p = { x: t, y: n }),
                              [4, rZ(e, d)]
                            );
                          case 1:
                            return (
                              (y = k.sent()),
                              (h = p[(b = rN((m = rD(rC(o)))))]),
                              (v = p[m]),
                              l &&
                                ((g = "y" === b ? "top" : "left"),
                                (w = "y" === b ? "bottom" : "right"),
                                (O = h + y[g]),
                                (j = h - y[w]),
                                (h = rj(O, rO(h, j)))),
                              c &&
                                ((x = "y" === m ? "top" : "left"),
                                (S = "y" === m ? "bottom" : "right"),
                                (P = v + y[x]),
                                (A = v - y[S]),
                                (v = rj(P, rO(v, A)))),
                              (I = f.fn(rV(rH({}, e), (rG((E = {}), b, h), rG(E, m, v), E)))),
                              [
                                2,
                                rV(rH({}, I), {
                                  data: {
                                    x: I.x - t,
                                    y: I.y - n,
                                    enabled: (rG((C = {}), b, l), rG(C, m, c), C)
                                  }
                                })
                              ]
                            );
                        }
                      });
                    })();
                  }
                })
              ),
              { options: [e, t] }
            );
          },
          n4 = function (e, t) {
            var r;
            return nV(
              nH(
                {},
                (void 0 === (r = e) && (r = {}),
                {
                  options: r,
                  fn: function (e) {
                    var t,
                      n = e.x,
                      o = e.y,
                      i = e.placement,
                      a = e.rects,
                      l = e.middlewareData,
                      u = rI(r, e),
                      c = u.offset,
                      s = u.mainAxis,
                      f = u.crossAxis,
                      d = { x: n, y: o },
                      p = rD(i),
                      y = rN(p),
                      m = d[y],
                      b = d[p],
                      h = rI(void 0 === c ? 0 : c, e),
                      v =
                        "number" == typeof h
                          ? { mainAxis: h, crossAxis: 0 }
                          : rH({ mainAxis: 0, crossAxis: 0 }, h);
                    if (void 0 === s || s) {
                      var g = "y" === y ? "height" : "width",
                        w = a.reference[y] - a.floating[g] + v.mainAxis,
                        O = a.reference[y] + a.reference[g] - v.mainAxis;
                      m < w ? (m = w) : m > O && (m = O);
                    }
                    if (void 0 === f || f) {
                      var j,
                        x,
                        S = "y" === y ? "width" : "height",
                        P = r2.has(rC(i)),
                        A =
                          a.reference[p] -
                          a.floating[S] +
                          ((P && (null == (j = l.offset) ? void 0 : j[p])) || 0) +
                          (P ? 0 : v.crossAxis),
                        E =
                          a.reference[p] +
                          a.reference[S] +
                          (P ? 0 : (null == (x = l.offset) ? void 0 : x[p]) || 0) -
                          (P ? v.crossAxis : 0);
                      b < A ? (b = A) : b > E && (b = E);
                    }
                    return (rG((t = {}), y, m), rG(t, p, b), t);
                  }
                })
              ),
              { options: [e, t] }
            );
          },
          n6 = function (e, t) {
            var r;
            return nV(
              nH(
                {},
                (void 0 === (r = e) && (r = {}),
                {
                  name: "flip",
                  options: r,
                  fn: function (e) {
                    return r$(function () {
                      var t,
                        n,
                        o,
                        i,
                        a,
                        l,
                        u,
                        c,
                        s,
                        f,
                        d,
                        p,
                        y,
                        m,
                        b,
                        h,
                        v,
                        g,
                        w,
                        O,
                        j,
                        x,
                        S,
                        P,
                        A,
                        E,
                        I,
                        C,
                        k,
                        N,
                        T,
                        R,
                        D,
                        L,
                        M,
                        U,
                        F,
                        z,
                        _,
                        W;
                      return rJ(this, function (K) {
                        var B, q, $, G, H, V, X, Y, J, Q, Z, ee, et, er, en;
                        switch (K.label) {
                          case 0:
                            if (
                              ((o = e.placement),
                              (i = e.middlewareData),
                              (a = e.rects),
                              (l = e.initialPlacement),
                              (u = e.platform),
                              (c = e.elements),
                              (d = void 0 === (f = (s = rI(r, e)).mainAxis) || f),
                              (y = void 0 === (p = s.crossAxis) || p),
                              (m = s.fallbackPlacements),
                              (h = void 0 === (b = s.fallbackStrategy) ? "bestFit" : b),
                              (g = void 0 === (v = s.fallbackAxisSideDirection) ? "none" : v),
                              (O = void 0 === (w = s.flipAlignment) || w),
                              (j = rX(s, [
                                "mainAxis",
                                "crossAxis",
                                "fallbackPlacements",
                                "fallbackStrategy",
                                "fallbackAxisSideDirection",
                                "flipAlignment"
                              ])),
                              null != (t = i.arrow) && t.alignmentOffset)
                            )
                              return [2, {}];
                            return (
                              (x = rC(o)),
                              (S = rD(l)),
                              (P = rC(l) === l),
                              [4, null == u.isRTL ? void 0 : u.isRTL(c.floating)]
                            );
                          case 1:
                            return (
                              (A = K.sent()),
                              (E =
                                m || (P || !O ? [r_(l)] : ((q = r_((B = l))), [rL(B), q, rL(q)]))),
                              (I = "none" !== g),
                              !m &&
                                I &&
                                (C = E).push.apply(
                                  C,
                                  rY(
                                    (($ = l),
                                    (G = O),
                                    (H = g),
                                    (V = A),
                                    (X = rk($)),
                                    (Y = (function (e, t, r) {
                                      switch (e) {
                                        case "top":
                                        case "bottom":
                                          if (r) return t ? rU : rM;
                                          return t ? rM : rU;
                                        case "left":
                                        case "right":
                                          return t ? rF : rz;
                                        default:
                                          return [];
                                      }
                                    })(rC($), "start" === H, V)),
                                    X &&
                                      ((Y = Y.map(function (e) {
                                        return e + "-" + X;
                                      })),
                                      G && (Y = Y.concat(Y.map(rL)))),
                                    Y)
                                  )
                                ),
                              (k = [l].concat(rY(E))),
                              [4, rZ(e, j)]
                            );
                          case 2:
                            if (
                              ((N = K.sent()),
                              (T = []),
                              (R = (null == (n = i.flip) ? void 0 : n.overflows) || []),
                              d && T.push(N[x]),
                              y &&
                                ((J = o),
                                (Q = a),
                                void 0 === (Z = A) && (Z = !1),
                                (ee = rk(J)),
                                (er = rT((et = rN(rD(J))))),
                                (en =
                                  "x" === et
                                    ? ee === (Z ? "end" : "start")
                                      ? "right"
                                      : "left"
                                    : "start" === ee
                                      ? "bottom"
                                      : "top"),
                                Q.reference[er] > Q.floating[er] && (en = r_(en)),
                                (D = [en, r_(en)]),
                                T.push(N[D[0]], N[D[1]])),
                              (R = rY(R).concat([{ placement: o, overflows: T }])),
                              !T.every(function (e) {
                                return e <= 0;
                              }))
                            ) {
                              if (
                                (F =
                                  k[(U = ((null == (L = i.flip) ? void 0 : L.index) || 0) + 1)]) &&
                                ("alignment" !== y ||
                                  S === rD(F) ||
                                  R.every(function (e) {
                                    return rD(e.placement) !== S || e.overflows[0] > 0;
                                  }))
                              )
                                return [
                                  2,
                                  { data: { index: U, overflows: R }, reset: { placement: F } }
                                ];
                              if (
                                !(z =
                                  null ==
                                  (M = R.filter(function (e) {
                                    return e.overflows[0] <= 0;
                                  }).sort(function (e, t) {
                                    return e.overflows[1] - t.overflows[1];
                                  })[0])
                                    ? void 0
                                    : M.placement)
                              )
                                switch (h) {
                                  case "bestFit":
                                    (W =
                                      null ==
                                      (_ = R.filter(function (e) {
                                        if (I) {
                                          var t = rD(e.placement);
                                          return t === S || "y" === t;
                                        }
                                        return !0;
                                      })
                                        .map(function (e) {
                                          return [
                                            e.placement,
                                            e.overflows
                                              .filter(function (e) {
                                                return e > 0;
                                              })
                                              .reduce(function (e, t) {
                                                return e + t;
                                              }, 0)
                                          ];
                                        })
                                        .sort(function (e, t) {
                                          return e[1] - t[1];
                                        })[0])
                                        ? void 0
                                        : _[0]) && (z = W);
                                    break;
                                  case "initialPlacement":
                                    z = l;
                                }
                              if (o !== z) return [2, { reset: { placement: z } }];
                            }
                            return [2, {}];
                        }
                      });
                    })();
                  }
                })
              ),
              { options: [e, t] }
            );
          },
          n8 = function (e, t) {
            var r;
            return nV(
              nH(
                {},
                (void 0 === (r = e) && (r = {}),
                {
                  name: "size",
                  options: r,
                  fn: function (e) {
                    return r$(function () {
                      var t,
                        n,
                        o,
                        i,
                        a,
                        l,
                        u,
                        c,
                        s,
                        f,
                        d,
                        p,
                        y,
                        m,
                        b,
                        h,
                        v,
                        g,
                        w,
                        O,
                        j,
                        x,
                        S,
                        P,
                        A,
                        E,
                        I,
                        C,
                        k,
                        N;
                      return rJ(this, function (T) {
                        switch (T.label) {
                          case 0:
                            return (
                              (o = e.placement),
                              (i = e.rects),
                              (a = e.platform),
                              (l = e.elements),
                              (s = void 0 === (c = (u = rI(r, e)).apply) ? function () {} : c),
                              [4, rZ(e, rX(u, ["apply"]))]
                            );
                          case 1:
                            if (
                              ((f = T.sent()),
                              (d = rC(o)),
                              (p = rk(o)),
                              (y = "y" === rD(o)),
                              (b = (m = i.floating).width),
                              (h = m.height),
                              "top" !== d && "bottom" !== d)
                            )
                              return [3, 3];
                            return ((v = d), [4, null == a.isRTL ? void 0 : a.isRTL(l.floating)]);
                          case 2:
                            return (
                              (g = p === (T.sent() ? "start" : "end") ? "left" : "right"),
                              [3, 4]
                            );
                          case 3:
                            ((g = d), (v = "end" === p ? "top" : "bottom"), (T.label = 4));
                          case 4:
                            return (
                              (w = h - f.top - f.bottom),
                              (O = b - f.left - f.right),
                              (j = rO(h - f[v], w)),
                              (x = rO(b - f[g], O)),
                              (S = !e.middlewareData.shift),
                              (P = j),
                              (A = x),
                              null != (t = e.middlewareData.shift) && t.enabled.x && (A = O),
                              null != (n = e.middlewareData.shift) && n.enabled.y && (P = w),
                              S &&
                                !p &&
                                ((E = rj(f.left, 0)),
                                (I = rj(f.right, 0)),
                                (C = rj(f.top, 0)),
                                (k = rj(f.bottom, 0)),
                                y
                                  ? (A = b - 2 * (0 !== E || 0 !== I ? E + I : rj(f.left, f.right)))
                                  : (P =
                                      h - 2 * (0 !== C || 0 !== k ? C + k : rj(f.top, f.bottom)))),
                              [4, s(rV(rH({}, e), { availableWidth: A, availableHeight: P }))]
                            );
                          case 5:
                            return (T.sent(), [4, a.getDimensions(l.floating)]);
                          case 6:
                            if (((N = T.sent()), b !== N.width || h !== N.height))
                              return [2, { reset: { rects: !0 } }];
                            return [2, {}];
                        }
                      });
                    })();
                  }
                })
              ),
              { options: [e, t] }
            );
          },
          n5 = function (e, t) {
            var r;
            return nV(
              nH(
                {},
                (void 0 === (r = e) && (r = {}),
                {
                  name: "hide",
                  options: r,
                  fn: function (e) {
                    return r$(function () {
                      var t, n, o, i, a, l, u;
                      return rJ(this, function (c) {
                        switch (c.label) {
                          case 0:
                            switch (
                              ((t = e.rects),
                              (i =
                                void 0 === (o = (n = rI(r, e)).strategy) ? "referenceHidden" : o),
                              (a = rX(n, ["strategy"])),
                              i)
                            ) {
                              case "referenceHidden":
                                return [3, 1];
                              case "escaped":
                                return [3, 3];
                            }
                            return [3, 5];
                          case 1:
                            return [4, rZ(e, rV(rH({}, a), { elementContext: "reference" }))];
                          case 2:
                            return [
                              2,
                              {
                                data: {
                                  referenceHiddenOffsets: (l = r0(c.sent(), t.reference)),
                                  referenceHidden: r1(l)
                                }
                              }
                            ];
                          case 3:
                            return [4, rZ(e, rV(rH({}, a), { altBoundary: !0 }))];
                          case 4:
                            return [
                              2,
                              {
                                data: {
                                  escapedOffsets: (u = r0(c.sent(), t.floating)),
                                  escaped: r1(u)
                                }
                              }
                            ];
                          case 5:
                            return [2, {}];
                          case 6:
                            return [2];
                        }
                      });
                    })();
                  }
                })
              ),
              { options: [e, t] }
            );
          },
          n7 = function (e, t) {
            return nV(
              nH(
                {},
                {
                  name: "arrow",
                  options: e,
                  fn: function (t) {
                    var r = "function" == typeof e ? e(t) : e,
                      n = r.element,
                      o = r.padding;
                    return n && {}.hasOwnProperty.call(n, "current")
                      ? null != n.current
                        ? nK({ element: n.current, padding: o }).fn(t)
                        : {}
                      : n
                        ? nK({ element: n, padding: o }).fn(t)
                        : {};
                  }
                }
              ),
              { options: [e, t] }
            );
          };
        function n9(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function oe(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            ("function" == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
              )),
              n.forEach(function (t) {
                var n;
                ((n = r[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (e[t] = n));
              }));
          }
          return e;
        }
        function ot(e, t) {
          return (
            (t = null != t ? t : {}),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : (function (e) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, r);
                  }
                  return t;
                })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }),
            e
          );
        }
        function or(e, t) {
          if (null == e) return {};
          var r,
            n,
            o,
            i = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (o = 0, r = Reflect.ownKeys(Object(e)); o < r.length; o++)
              ((n = r[o]),
                !(t.indexOf(n) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
            return i;
          }
          if (
            ((i = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = {},
                i = Object.getOwnPropertyNames(e);
              for (n = 0; n < i.length; n++)
                ((r = i[n]),
                  !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (o[r] = e[r]));
              return o;
            })(e, t)),
            Object.getOwnPropertySymbols)
          )
            for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              ((n = r[o]),
                !(t.indexOf(n) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
          return i;
        }
        function on(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return n9(e);
            })(e) ||
            (function (e) {
              if (("u" > typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
                return Array.from(e);
            })(e) ||
            (function (e) {
              if (e) {
                if ("string" == typeof e) return n9(e, void 0);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t)
                )
                  return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                  return n9(e, void 0);
              }
            })(e) ||
            (function () {
              throw TypeError(
                "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        var oo = d.forwardRef(function (e, t) {
          var r = e.children,
            n = or(e, ["children"]),
            o = d.Children.toArray(r),
            i = o.find(ol);
          if (i) {
            var a = i.props.children,
              u = o.map(function (e) {
                return e !== i
                  ? e
                  : d.Children.count(a) > 1
                    ? d.Children.only(null)
                    : d.isValidElement(a)
                      ? a.props.children
                      : null;
              });
            return (0, l.jsx)(
              oi,
              ot(oe({}, n), {
                ref: t,
                children: d.isValidElement(a) ? d.cloneElement(a, void 0, u) : null
              })
            );
          }
          return (0, l.jsx)(oi, ot(oe({}, n), { ref: t, children: r }));
        });
        oo.displayName = "Slot";
        var oi = d.forwardRef(function (e, t) {
          var r = e.children,
            n = or(e, ["children"]);
          if (d.isValidElement(r)) {
            var o,
              i,
              a,
              l,
              u,
              c = (u =
                (l =
                  null == (i = Object.getOwnPropertyDescriptor((o = r).props, "ref"))
                    ? void 0
                    : i.get) &&
                "isReactWarning" in l &&
                l.isReactWarning)
                ? o.ref
                : (u =
                      (l =
                        null == (a = Object.getOwnPropertyDescriptor(o, "ref")) ? void 0 : a.get) &&
                      "isReactWarning" in l &&
                      l.isReactWarning)
                  ? o.props.ref
                  : o.props.ref || o.ref;
            return d.cloneElement(
              r,
              ot(
                oe(
                  {},
                  (function (e, t) {
                    var r = oe({}, t);
                    for (var n in t)
                      !(function (n) {
                        var o = e[n],
                          i = t[n];
                        /^on[A-Z]/.test(n)
                          ? o && i
                            ? (r[n] = function () {
                                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                                  t[r] = arguments[r];
                                (i.apply(void 0, on(t)), o.apply(void 0, on(t)));
                              })
                            : o && (r[n] = o)
                          : "style" === n
                            ? (r[n] = oe({}, o, i))
                            : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "));
                      })(n);
                    return oe({}, e, r);
                  })(n, r.props)
                ),
                { ref: t ? rl(t, c) : c }
              )
            );
          }
          return d.Children.count(r) > 1 ? d.Children.only(null) : null;
        });
        oi.displayName = "SlotClone";
        var oa = function (e) {
          var t = e.children;
          return (0, l.jsx)(l.Fragment, { children: t });
        };
        function ol(e) {
          return d.isValidElement(e) && e.type === oa;
        }
        function ou(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = r),
            e
          );
        }
        function oc(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            ("function" == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
              )),
              n.forEach(function (t) {
                ou(e, t, r[t]);
              }));
          }
          return e;
        }
        function os(e, t) {
          return (
            (t = null != t ? t : {}),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : (function (e) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, r);
                  }
                  return t;
                })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }),
            e
          );
        }
        var of = [
            "a",
            "button",
            "div",
            "form",
            "h2",
            "h3",
            "img",
            "input",
            "label",
            "li",
            "nav",
            "ol",
            "p",
            "span",
            "svg",
            "ul"
          ].reduce(function (e, t) {
            var r = d.forwardRef(function (e, r) {
              var n = e.asChild,
                o = (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    o,
                    i = {};
                  if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (o = 0, r = Reflect.ownKeys(Object(e)); o < r.length; o++)
                      ((n = r[o]),
                        !(t.indexOf(n) >= 0) &&
                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                          (i[n] = e[n]));
                    return i;
                  }
                  if (
                    ((i = (function (e, t) {
                      if (null == e) return {};
                      var r,
                        n,
                        o = {},
                        i = Object.getOwnPropertyNames(e);
                      for (n = 0; n < i.length; n++)
                        ((r = i[n]),
                          !(t.indexOf(r) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(e, r) &&
                            (o[r] = e[r]));
                      return o;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                  )
                    for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                      ((n = r[o]),
                        !(t.indexOf(n) >= 0) &&
                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                          (i[n] = e[n]));
                  return i;
                })(e, ["asChild"]),
                i = n ? oo : t;
              return (
                "u" > typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0, l.jsx)(i, os(oc({}, o), { ref: r }))
              );
            });
            return ((r.displayName = "Primitive.".concat(t)), os(oc({}, e), ou({}, t, r)));
          }, {}),
          od = d.forwardRef(function (e, t) {
            var r,
              n,
              o = e.children,
              i = e.width,
              a = e.height,
              u = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o,
                  i = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                  for (o = 0, r = Reflect.ownKeys(Object(e)); o < r.length; o++)
                    ((n = r[o]),
                      !(t.indexOf(n) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                        (i[n] = e[n]));
                  return i;
                }
                if (
                  ((i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                      n,
                      o = {},
                      i = Object.getOwnPropertyNames(e);
                    for (n = 0; n < i.length; n++)
                      ((r = i[n]),
                        !(t.indexOf(r) >= 0) &&
                          Object.prototype.propertyIsEnumerable.call(e, r) &&
                          (o[r] = e[r]));
                    return o;
                  })(e, t)),
                  Object.getOwnPropertySymbols)
                )
                  for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    ((n = r[o]),
                      !(t.indexOf(n) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                        (i[n] = e[n]));
                return i;
              })(e, ["children", "width", "height"]);
            return (0, l.jsx)(
              of.svg,
              ((r = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                  ("function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                      Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                      })
                    )),
                    n.forEach(function (t) {
                      var n;
                      ((n = r[t]),
                        t in e
                          ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                            })
                          : (e[t] = n));
                    }));
                }
                return e;
              })({}, u)),
              (n = n =
                {
                  ref: t,
                  width: void 0 === i ? 10 : i,
                  height: void 0 === a ? 5 : a,
                  viewBox: "0 0 30 10",
                  preserveAspectRatio: "none",
                  children: e.asChild ? o : (0, l.jsx)("polygon", { points: "0,0 30,0 15,10" })
                }),
              Object.getOwnPropertyDescriptors
                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
                : (function (e) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                    }
                    return t;
                  })(Object(n)).forEach(function (e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
              r)
            );
          });
        function op(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function oy(e) {
          var t = d.useRef(e);
          return (
            d.useEffect(function () {
              t.current = e;
            }),
            d.useMemo(function () {
              return function () {
                for (var e, r = arguments.length, n = Array(r), o = 0; o < r; o++)
                  n[o] = arguments[o];
                return null == (e = t.current)
                  ? void 0
                  : e.call.apply(
                      e,
                      [t].concat(
                        (function (e) {
                          if (Array.isArray(e)) return op(e);
                        })(n) ||
                          (function (e) {
                            if (
                              ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                              null != e["@@iterator"]
                            )
                              return Array.from(e);
                          })(n) ||
                          (function (e) {
                            if (e) {
                              if ("string" == typeof e) return op(e, void 0);
                              var t = Object.prototype.toString.call(e).slice(8, -1);
                              if (
                                ("Object" === t && e.constructor && (t = e.constructor.name),
                                "Map" === t || "Set" === t)
                              )
                                return Array.from(t);
                              if (
                                "Arguments" === t ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                              )
                                return op(e, void 0);
                            }
                          })(n) ||
                          (function () {
                            throw TypeError(
                              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          })()
                      )
                    );
              };
            }, [])
          );
        }
        function om(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function ob(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function oh(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = r),
            e
          );
        }
        function ov(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            ("function" == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
              )),
              n.forEach(function (t) {
                oh(e, t, r[t]);
              }));
          }
          return e;
        }
        function og(e, t) {
          return (
            (t = null != t ? t : {}),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : (function (e) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, r);
                  }
                  return t;
                })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }),
            e
          );
        }
        function ow(e, t) {
          if (null == e) return {};
          var r,
            n,
            o,
            i = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (o = 0, r = Reflect.ownKeys(Object(e)); o < r.length; o++)
              ((n = r[o]),
                !(t.indexOf(n) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
            return i;
          }
          if (
            ((i = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = {},
                i = Object.getOwnPropertyNames(e);
              for (n = 0; n < i.length; n++)
                ((r = i[n]),
                  !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (o[r] = e[r]));
              return o;
            })(e, t)),
            Object.getOwnPropertySymbols)
          )
            for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              ((n = r[o]),
                !(t.indexOf(n) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
          return i;
        }
        function oO(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var r,
                n,
                o =
                  null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
              if (null != o) {
                var i = [],
                  a = !0,
                  l = !1;
                try {
                  for (
                    o = o.call(e);
                    !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t);
                    a = !0
                  );
                } catch (e) {
                  ((l = !0), (n = e));
                } finally {
                  try {
                    a || null == o.return || o.return();
                  } finally {
                    if (l) throw n;
                  }
                }
                return i;
              }
            })(e, t) ||
            oj(e, t) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function oj(e, t) {
          if (e) {
            if ("string" == typeof e) return ob(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (
              ("Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r)
            )
              return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
              return ob(e, t);
          }
        }
        od.displayName = "Arrow";
        var ox = "Popper",
          oS = oO(rp(ox), 2),
          oP = oS[0],
          oA = oS[1],
          oE = oO(oP(ox), 2),
          oI = oE[0],
          oC = oE[1],
          ok = function (e) {
            var t = e.__scopePopper,
              r = e.children,
              n = oO(d.useState(null), 2),
              o = n[0],
              i = n[1];
            return (0, l.jsx)(oI, { scope: t, anchor: o, onAnchorChange: i, children: r });
          };
        ok.displayName = ox;
        var oN = "PopperAnchor",
          oT = d.forwardRef(function (e, t) {
            var r = e.__scopePopper,
              n = e.virtualRef,
              o = ow(e, ["__scopePopper", "virtualRef"]),
              i = oC(oN, r),
              a = d.useRef(null),
              u = ru(t, a);
            return (
              d.useEffect(function () {
                i.onAnchorChange((null == n ? void 0 : n.current) || a.current);
              }),
              n ? null : (0, l.jsx)(of.div, og(ov({}, o), { ref: u }))
            );
          });
        oT.displayName = oN;
        var oR = "PopperContent",
          oD = oO(oP(oR), 2),
          oL = oD[0],
          oM = oD[1],
          oU = d.forwardRef(function (e, t) {
            var r,
              n,
              o,
              i,
              a,
              u,
              c,
              s,
              f,
              p,
              y,
              m,
              b,
              h,
              v,
              g,
              w,
              O,
              j,
              x,
              S,
              P,
              A,
              E,
              I,
              C,
              k,
              N,
              T,
              R,
              D,
              L,
              M,
              U,
              F,
              z,
              _,
              W,
              K,
              B,
              q,
              $,
              G,
              H,
              V,
              X,
              Y,
              J,
              Q,
              Z,
              ee,
              et,
              er,
              en,
              eo,
              ei,
              ea = e.__scopePopper,
              el = e.side,
              eu = e.sideOffset,
              ec = e.align,
              es = void 0 === ec ? "center" : ec,
              ef = e.alignOffset,
              ed = e.arrowPadding,
              ep = e.avoidCollisions,
              ey = void 0 === ep || ep,
              em = e.collisionBoundary,
              eb = void 0 === em ? [] : em,
              eh = e.collisionPadding,
              ev = void 0 === eh ? 0 : eh,
              eg = e.sticky,
              ew = e.hideWhenDetached,
              eO = e.updatePositionStrategy,
              ej = void 0 === eO ? "optimized" : eO,
              ex = e.onPlaced,
              eS = ow(e, [
                "__scopePopper",
                "side",
                "sideOffset",
                "align",
                "alignOffset",
                "arrowPadding",
                "avoidCollisions",
                "collisionBoundary",
                "collisionPadding",
                "sticky",
                "hideWhenDetached",
                "updatePositionStrategy",
                "onPlaced"
              ]),
              eP = oC(oR, ea),
              eA = oO(d.useState(null), 2),
              eE = eA[0],
              eI = eA[1],
              eC = ru(t, function (e) {
                return eI(e);
              }),
              ek = oO(d.useState(null), 2),
              eN = ek[0],
              eT = ek[1],
              eR =
                ((o = (n =
                  (function (e) {
                    if (Array.isArray(e)) return e;
                  })((r = d.useState(void 0))) ||
                  (function (e) {
                    var t,
                      r,
                      n =
                        null == e
                          ? null
                          : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (null != n) {
                      var o = [],
                        i = !0,
                        a = !1;
                      try {
                        for (
                          n = n.call(e);
                          !(i = (t = n.next()).done) && (o.push(t.value), 2 !== o.length);
                          i = !0
                        );
                      } catch (e) {
                        ((a = !0), (r = e));
                      } finally {
                        try {
                          i || null == n.return || n.return();
                        } finally {
                          if (a) throw r;
                        }
                      }
                      return o;
                    }
                  })(r) ||
                  (function (e) {
                    if (e) {
                      if ("string" == typeof e) return om(e, 2);
                      var t = Object.prototype.toString.call(e).slice(8, -1);
                      if (
                        ("Object" === t && e.constructor && (t = e.constructor.name),
                        "Map" === t || "Set" === t)
                      )
                        return Array.from(t);
                      if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                        return om(e, 2);
                    }
                  })(r) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })())[0]),
                (i = n[1]),
                rb(
                  function () {
                    if (eN) {
                      i({ width: eN.offsetWidth, height: eN.offsetHeight });
                      var e = new ResizeObserver(function (e) {
                        if (Array.isArray(e) && e.length) {
                          var t,
                            r,
                            n = e[0];
                          if ("borderBoxSize" in n) {
                            var o = n.borderBoxSize,
                              a = Array.isArray(o) ? o[0] : o;
                            ((t = a.inlineSize), (r = a.blockSize));
                          } else ((t = eN.offsetWidth), (r = eN.offsetHeight));
                          i({ width: t, height: r });
                        }
                      });
                      return (
                        e.observe(eN, { box: "border-box" }),
                        function () {
                          return e.unobserve(eN);
                        }
                      );
                    }
                    i(void 0);
                  },
                  [eN]
                ),
                o),
              eD = null != (Q = null == eR ? void 0 : eR.width) ? Q : 0,
              eL = null != (Z = null == eR ? void 0 : eR.height) ? Z : 0,
              eM = "number" == typeof ev ? ev : ov({ top: 0, right: 0, bottom: 0, left: 0 }, ev),
              eU = Array.isArray(eb) ? eb : [eb],
              eF = eU.length > 0,
              ez = { padding: eM, boundary: eU.filter(oW), altBoundary: eF },
              e_ =
                ((c =
                  void 0 ===
                  (u = (a = {
                    strategy: "fixed",
                    placement: (void 0 === el ? "bottom" : el) + ("center" !== es ? "-" + es : ""),
                    whileElementsMounted: function () {
                      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                      return nW.apply(
                        void 0,
                        (
                          (function (e) {
                            if (Array.isArray(e)) return ob(e);
                          })(t) ||
                          (function (e) {
                            if (
                              ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                              null != e["@@iterator"]
                            )
                              return Array.from(e);
                          })(t) ||
                          oj(t) ||
                          (function () {
                            throw TypeError(
                              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          })()
                        ).concat([{ animationFrame: "always" === ej }])
                      );
                    },
                    elements: { reference: eP.anchor },
                    middleware: [
                      n2({
                        mainAxis: (void 0 === eu ? 0 : eu) + eL,
                        alignmentAxis: void 0 === ef ? 0 : ef
                      }),
                      ey &&
                        n3(
                          ov(
                            {
                              mainAxis: !0,
                              crossAxis: !1,
                              limiter:
                                "partial" === (void 0 === eg ? "partial" : eg) ? n4() : void 0
                            },
                            ez
                          )
                        ),
                      ey && n6(ov({}, ez)),
                      n8(
                        og(ov({}, ez), {
                          apply: function (e) {
                            var t = e.elements,
                              r = e.rects,
                              n = e.availableWidth,
                              o = e.availableHeight,
                              i = r.reference,
                              a = i.width,
                              l = i.height,
                              u = t.floating.style;
                            (u.setProperty("--radix-popper-available-width", "".concat(n, "px")),
                              u.setProperty("--radix-popper-available-height", "".concat(o, "px")),
                              u.setProperty("--radix-popper-anchor-width", "".concat(a, "px")),
                              u.setProperty("--radix-popper-anchor-height", "".concat(l, "px")));
                          }
                        })
                      ),
                      eN && n7({ element: eN, padding: void 0 === ed ? 0 : ed }),
                      oK({ arrowWidth: eD, arrowHeight: eL }),
                      void 0 !== ew && ew && n5(ov({ strategy: "referenceHidden" }, ez))
                    ]
                  }).placement)
                    ? "bottom"
                    : u),
                (f = void 0 === (s = a.strategy) ? "absolute" : s),
                (y = void 0 === (p = a.middleware) ? [] : p),
                (m = a.platform),
                (v = (h = void 0 === (b = a.elements) ? {} : b).reference),
                (g = h.floating),
                (O = void 0 === (w = a.transform) || w),
                (j = a.whileElementsMounted),
                (x = a.open),
                (P = (S = nX(
                  d.useState({
                    x: 0,
                    y: 0,
                    strategy: f,
                    placement: c,
                    middlewareData: {},
                    isPositioned: !1
                  }),
                  2
                ))[0]),
                (A = S[1]),
                (I = (E = nX(d.useState(y), 2))[0]),
                (C = E[1]),
                nQ(I, y) || C(y),
                (N = (k = nX(d.useState(null), 2))[0]),
                (T = k[1]),
                (D = (R = nX(d.useState(null), 2))[0]),
                (L = R[1]),
                (M = d.useCallback(function (e) {
                  e !== _.current && ((_.current = e), T(e));
                }, [])),
                (U = d.useCallback(function (e) {
                  e !== W.current && ((W.current = e), L(e));
                }, [])),
                (F = v || N),
                (z = g || D),
                (_ = d.useRef(null)),
                (W = d.useRef(null)),
                (K = d.useRef(P)),
                (B = null != j),
                (q = n1(j)),
                ($ = n1(m)),
                (G = n1(x)),
                (H = d.useCallback(
                  function () {
                    if (_.current && W.current) {
                      var e = { placement: c, strategy: f, middleware: I };
                      ($.current && (e.platform = $.current),
                        nB(_.current, W.current, e).then(function (e) {
                          var t = nV(nH({}, e), { isPositioned: !1 !== G.current });
                          V.current &&
                            !nQ(K.current, t) &&
                            ((K.current = t),
                            nq.flushSync(function () {
                              A(t);
                            }));
                        }));
                    }
                  },
                  [I, c, f, $, G]
                )),
                nJ(
                  function () {
                    !1 === x &&
                      K.current.isPositioned &&
                      ((K.current.isPositioned = !1),
                      A(function (e) {
                        return nV(nH({}, e), { isPositioned: !1 });
                      }));
                  },
                  [x]
                ),
                (V = d.useRef(!1)),
                nJ(function () {
                  return (
                    (V.current = !0),
                    function () {
                      V.current = !1;
                    }
                  );
                }, []),
                nJ(
                  function () {
                    if ((F && (_.current = F), z && (W.current = z), F && z)) {
                      if (q.current) return q.current(F, z, H);
                      H();
                    }
                  },
                  [F, z, H, q, B]
                ),
                (X = d.useMemo(
                  function () {
                    return { reference: _, floating: W, setReference: M, setFloating: U };
                  },
                  [M, U]
                )),
                (Y = d.useMemo(
                  function () {
                    return { reference: F, floating: z };
                  },
                  [F, z]
                )),
                (J = d.useMemo(
                  function () {
                    var e = { position: f, left: 0, top: 0 };
                    if (!Y.floating) return e;
                    var t = n0(Y.floating, P.x),
                      r = n0(Y.floating, P.y);
                    return O
                      ? nH(
                          nV(nH({}, e), { transform: "translate(" + t + "px, " + r + "px)" }),
                          nZ(Y.floating) >= 1.5 && { willChange: "transform" }
                        )
                      : { position: f, left: t, top: r };
                  },
                  [f, O, Y.floating, P.x, P.y]
                )),
                d.useMemo(
                  function () {
                    return nV(nH({}, P), { update: H, refs: X, elements: Y, floatingStyles: J });
                  },
                  [P, H, X, Y, J]
                )),
              eW = e_.refs,
              eK = e_.floatingStyles,
              eB = e_.placement,
              eq = e_.isPositioned,
              e$ = e_.middlewareData,
              eG = oO(oB(eB), 2),
              eH = eG[0],
              eV = eG[1],
              eX = oy(ex);
            rb(
              function () {
                eq && (null == eX || eX());
              },
              [eq, eX]
            );
            var eY = null == (ee = e$.arrow) ? void 0 : ee.x,
              eJ = null == (et = e$.arrow) ? void 0 : et.y,
              eQ = (null == (er = e$.arrow) ? void 0 : er.centerOffset) !== 0,
              eZ = oO(d.useState(), 2),
              e0 = eZ[0],
              e1 = eZ[1];
            return (
              rb(
                function () {
                  eE && e1(window.getComputedStyle(eE).zIndex);
                },
                [eE]
              ),
              (0, l.jsx)("div", {
                ref: eW.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: ov(
                  og(
                    ov({}, eK),
                    oh(
                      {
                        transform: eq ? eK.transform : "translate(0, -200%)",
                        minWidth: "max-content",
                        zIndex: e0
                      },
                      "--radix-popper-transform-origin",
                      [
                        null == (en = e$.transformOrigin) ? void 0 : en.x,
                        null == (eo = e$.transformOrigin) ? void 0 : eo.y
                      ].join(" ")
                    )
                  ),
                  (null == (ei = e$.hide) ? void 0 : ei.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                  }
                ),
                dir: e.dir,
                children: (0, l.jsx)(oL, {
                  scope: ea,
                  placedSide: eH,
                  onArrowChange: eT,
                  arrowX: eY,
                  arrowY: eJ,
                  shouldHideArrow: eQ,
                  children: (0, l.jsx)(
                    of.div,
                    og(ov({ "data-side": eH, "data-align": eV }, eS), {
                      ref: eC,
                      style: og(ov({}, eS.style), { animation: eq ? void 0 : "none" })
                    })
                  )
                })
              })
            );
          });
        oU.displayName = oR;
        var oF = "PopperArrow",
          oz = { top: "bottom", right: "left", bottom: "top", left: "right" },
          o_ = d.forwardRef(function (e, t) {
            var r,
              n = e.__scopePopper,
              o = ow(e, ["__scopePopper"]),
              i = oM(oF, n),
              a = oz[i.placedSide];
            return (0, l.jsx)("span", {
              ref: i.onArrowChange,
              style:
                (oh((r = { position: "absolute", left: i.arrowX, top: i.arrowY }), a, 0),
                oh(
                  r,
                  "transformOrigin",
                  { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide]
                ),
                oh(
                  r,
                  "transform",
                  {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                  }[i.placedSide]
                ),
                oh(r, "visibility", i.shouldHideArrow ? "hidden" : void 0),
                r),
              children: (0, l.jsx)(
                od,
                og(ov({}, o), { ref: t, style: og(ov({}, o.style), { display: "block" }) })
              )
            });
          });
        function oW(e) {
          return null !== e;
        }
        o_.displayName = oF;
        var oK = function (e) {
          return {
            name: "transformOrigin",
            options: e,
            fn: function (t) {
              var r,
                n,
                o,
                i,
                a,
                l = t.placement,
                u = t.rects,
                c = t.middlewareData,
                s = (null == (o = c.arrow) ? void 0 : o.centerOffset) !== 0,
                f = s ? 0 : e.arrowWidth,
                d = s ? 0 : e.arrowHeight,
                p = oO(oB(l), 2),
                y = p[0],
                m = { start: "0%", center: "50%", end: "100%" }[p[1]],
                b = (null != (r = null == (i = c.arrow) ? void 0 : i.x) ? r : 0) + f / 2,
                h = (null != (n = null == (a = c.arrow) ? void 0 : a.y) ? n : 0) + d / 2,
                v = "",
                g = "";
              return (
                "bottom" === y
                  ? ((v = s ? m : "".concat(b, "px")), (g = "".concat(-d, "px")))
                  : "top" === y
                    ? ((v = s ? m : "".concat(b, "px")),
                      (g = "".concat(u.floating.height + d, "px")))
                    : "right" === y
                      ? ((v = "".concat(-d, "px")), (g = s ? m : "".concat(h, "px")))
                      : "left" === y &&
                        ((v = "".concat(u.floating.width + d, "px")),
                        (g = s ? m : "".concat(h, "px"))),
                { data: { x: v, y: g } }
              );
            }
          };
        };
        function oB(e) {
          var t = oO(e.split("-"), 2),
            r = t[0],
            n = t[1];
          return [r, void 0 === n ? "center" : n];
        }
        function oq(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var o$ = d.forwardRef(function (e, t) {
          var r,
            n,
            o,
            i,
            a,
            u = e.container,
            c = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o,
                i = {};
              if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(Object(e)); o < r.length; o++)
                  ((n = r[o]),
                    !(t.indexOf(n) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, n) &&
                      (i[n] = e[n]));
                return i;
              }
              if (
                ((i = (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    o = {},
                    i = Object.getOwnPropertyNames(e);
                  for (n = 0; n < i.length; n++)
                    ((r = i[n]),
                      !(t.indexOf(r) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                        (o[r] = e[r]));
                  return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
              )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                  ((n = r[o]),
                    !(t.indexOf(n) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, n) &&
                      (i[n] = e[n]));
              return i;
            })(e, ["container"]),
            s =
              (function (e) {
                if (Array.isArray(e)) return e;
              })((r = d.useState(!1))) ||
              (function (e) {
                var t,
                  r,
                  n =
                    null == e
                      ? null
                      : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != n) {
                  var o = [],
                    i = !0,
                    a = !1;
                  try {
                    for (
                      n = n.call(e);
                      !(i = (t = n.next()).done) && (o.push(t.value), 2 !== o.length);
                      i = !0
                    );
                  } catch (e) {
                    ((a = !0), (r = e));
                  } finally {
                    try {
                      i || null == n.return || n.return();
                    } finally {
                      if (a) throw r;
                    }
                  }
                  return o;
                }
              })(r) ||
              (function (e) {
                if (e) {
                  if ("string" == typeof e) return oq(e, 2);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  if (
                    ("Object" === t && e.constructor && (t = e.constructor.name),
                    "Map" === t || "Set" === t)
                  )
                    return Array.from(t);
                  if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return oq(e, 2);
                }
              })(r) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(),
            f = s[0],
            p = s[1];
          rb(function () {
            return p(!0);
          }, []);
          var y =
            u || (f && (null == (a = globalThis) || null == (i = a.document) ? void 0 : i.body));
          return y
            ? n$().createPortal(
                (0, l.jsx)(
                  of.div,
                  ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                      ("function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                          Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                          })
                        )),
                        n.forEach(function (t) {
                          var n;
                          ((n = r[t]),
                            t in e
                              ? Object.defineProperty(e, t, {
                                  value: n,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                                })
                              : (e[t] = n));
                        }));
                    }
                    return e;
                  })({}, c)),
                  (o = o = { ref: t }),
                  Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                    : (function (e) {
                        var t = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, r);
                        }
                        return t;
                      })(Object(o)).forEach(function (e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                  n)
                ),
                y
              )
            : null;
        });
        function oG(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function oH(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var r,
                n,
                o =
                  null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
              if (null != o) {
                var i = [],
                  a = !0,
                  l = !1;
                try {
                  for (
                    o = o.call(e);
                    !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t);
                    a = !0
                  );
                } catch (e) {
                  ((l = !0), (n = e));
                } finally {
                  try {
                    a || null == o.return || o.return();
                  } finally {
                    if (l) throw n;
                  }
                }
                return i;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return oG(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r)
                )
                  return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                  return oG(e, t);
              }
            })(e, t) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        o$.displayName = "Portal";
        var oV = function (e) {
          var t,
            r,
            n,
            o,
            i,
            a,
            l,
            u,
            c,
            s,
            f,
            p,
            y,
            m,
            b,
            h,
            v,
            g = e.present,
            w = e.children,
            O =
              ((t = g),
              (i = (o = oH(d.useState(), 2))[0]),
              (a = o[1]),
              (l = d.useRef({})),
              (u = d.useRef(t)),
              (c = d.useRef("none")),
              (f = (s = oH(
                ((r = t ? "mounted" : "unmounted"),
                (n = {
                  mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
                  unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
                  unmounted: { MOUNT: "mounted" }
                }),
                d.useReducer(function (e, t) {
                  var r = n[e][t];
                  return null != r ? r : e;
                }, r)),
                2
              ))[0]),
              (p = s[1]),
              d.useEffect(
                function () {
                  var e = oX(l.current);
                  c.current = "mounted" === f ? e : "none";
                },
                [f]
              ),
              rb(
                function () {
                  var e = l.current,
                    r = u.current;
                  if (r !== t) {
                    var n = c.current,
                      o = oX(e);
                    (t
                      ? p("MOUNT")
                      : "none" === o || (null == e ? void 0 : e.display) === "none"
                        ? p("UNMOUNT")
                        : r && n !== o
                          ? p("ANIMATION_OUT")
                          : p("UNMOUNT"),
                      (u.current = t));
                  }
                },
                [t, p]
              ),
              rb(
                function () {
                  if (i) {
                    var e,
                      t,
                      r = null != (e = i.ownerDocument.defaultView) ? e : window,
                      n = function (e) {
                        var n = oX(l.current).includes(e.animationName);
                        if (e.target === i && n && (p("ANIMATION_END"), !u.current)) {
                          var o = i.style.animationFillMode;
                          ((i.style.animationFillMode = "forwards"),
                            (t = r.setTimeout(function () {
                              "forwards" === i.style.animationFillMode &&
                                (i.style.animationFillMode = o);
                            })));
                        }
                      },
                      o = function (e) {
                        e.target === i && (c.current = oX(l.current));
                      };
                    return (
                      i.addEventListener("animationstart", o),
                      i.addEventListener("animationcancel", n),
                      i.addEventListener("animationend", n),
                      function () {
                        (r.clearTimeout(t),
                          i.removeEventListener("animationstart", o),
                          i.removeEventListener("animationcancel", n),
                          i.removeEventListener("animationend", n));
                      }
                    );
                  }
                  p("ANIMATION_END");
                },
                [i, p]
              ),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(f),
                ref: d.useCallback(function (e) {
                  (e && (l.current = getComputedStyle(e)), a(e));
                }, [])
              }),
            j = "function" == typeof w ? w({ present: O.isPresent }) : d.Children.only(w),
            x = ru(
              O.ref,
              (v =
                (h =
                  null == (m = Object.getOwnPropertyDescriptor((y = j).props, "ref"))
                    ? void 0
                    : m.get) &&
                "isReactWarning" in h &&
                h.isReactWarning)
                ? y.ref
                : (v =
                      (h =
                        null == (b = Object.getOwnPropertyDescriptor(y, "ref")) ? void 0 : b.get) &&
                      "isReactWarning" in h &&
                      h.isReactWarning)
                  ? y.props.ref
                  : y.props.ref || y.ref
            );
          return "function" == typeof w || O.isPresent ? d.cloneElement(j, { ref: x }) : null;
        };
        function oX(e) {
          return (null == e ? void 0 : e.animationName) || "none";
        }
        function oY(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function oJ(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var r,
                n,
                o =
                  null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
              if (null != o) {
                var i = [],
                  a = !0,
                  l = !1;
                try {
                  for (
                    o = o.call(e);
                    !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t);
                    a = !0
                  );
                } catch (e) {
                  ((l = !0), (n = e));
                } finally {
                  try {
                    a || null == o.return || o.return();
                  } finally {
                    if (l) throw n;
                  }
                }
                return i;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return oY(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r)
                )
                  return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                  return oY(e, t);
              }
            })(e, t) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function oQ(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            ("function" == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
              )),
              n.forEach(function (t) {
                var n;
                ((n = r[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (e[t] = n));
              }));
          }
          return e;
        }
        oV.displayName = "Presence";
        var oZ = d.forwardRef(function (e, t) {
          var r, n;
          return (0, l.jsx)(
            of.span,
            ((r = oQ({}, e)),
            (n = n =
              {
                ref: t,
                style: oQ(
                  {
                    position: "absolute",
                    border: 0,
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    wordWrap: "normal"
                  },
                  e.style
                )
              }),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
              : (function (e) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, r);
                  }
                  return t;
                })(Object(n)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
                }),
            r)
          );
        });
        function o0(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function o1(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            ("function" == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
              )),
              n.forEach(function (t) {
                var n;
                ((n = r[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (e[t] = n));
              }));
          }
          return e;
        }
        function o2(e, t) {
          return (
            (t = null != t ? t : {}),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : (function (e) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t.push.apply(t, r);
                  }
                  return t;
                })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }),
            e
          );
        }
        function o3(e, t) {
          if (null == e) return {};
          var r,
            n,
            o,
            i = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (o = 0, r = Reflect.ownKeys(Object(e)); o < r.length; o++)
              ((n = r[o]),
                !(t.indexOf(n) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
            return i;
          }
          if (
            ((i = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = {},
                i = Object.getOwnPropertyNames(e);
              for (n = 0; n < i.length; n++)
                ((r = i[n]),
                  !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (o[r] = e[r]));
              return o;
            })(e, t)),
            Object.getOwnPropertySymbols)
          )
            for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              ((n = r[o]),
                !(t.indexOf(n) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
          return i;
        }
        function o4(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var r,
                n,
                o =
                  null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
              if (null != o) {
                var i = [],
                  a = !0,
                  l = !1;
                try {
                  for (
                    o = o.call(e);
                    !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t);
                    a = !0
                  );
                } catch (e) {
                  ((l = !0), (n = e));
                } finally {
                  try {
                    a || null == o.return || o.return();
                  } finally {
                    if (l) throw n;
                  }
                }
                return i;
              }
            })(e, t) ||
            o8(e, t) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function o6(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return o0(e);
            })(e) ||
            (function (e) {
              if (("u" > typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
                return Array.from(e);
            })(e) ||
            o8(e) ||
            (function () {
              throw TypeError(
                "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function o8(e, t) {
          if (e) {
            if ("string" == typeof e) return o0(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (
              ("Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r)
            )
              return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
              return o0(e, t);
          }
        }
        oZ.displayName = "VisuallyHidden";
        var o5 = o4(rp("Tooltip", [oA]), 2),
          o7 = o5[0];
        o5[1];
        var o9 = oA(),
          ie = "TooltipProvider",
          it = "tooltip.open",
          ir = o4(o7(ie), 2),
          io = ir[0],
          ii = ir[1],
          ia = function (e) {
            var t = e.__scopeTooltip,
              r = e.delayDuration,
              n = e.skipDelayDuration,
              o = void 0 === n ? 300 : n,
              i = e.disableHoverableContent,
              a = e.children,
              u = o4(d.useState(!0), 2),
              c = u[0],
              s = u[1],
              f = d.useRef(!1),
              p = d.useRef(0);
            return (
              d.useEffect(function () {
                var e = p.current;
                return function () {
                  return window.clearTimeout(e);
                };
              }, []),
              (0, l.jsx)(io, {
                scope: t,
                isOpenDelayed: c,
                delayDuration: void 0 === r ? 700 : r,
                onOpen: d.useCallback(function () {
                  (window.clearTimeout(p.current), s(!1));
                }, []),
                onClose: d.useCallback(
                  function () {
                    (window.clearTimeout(p.current),
                      (p.current = window.setTimeout(function () {
                        return s(!0);
                      }, o)));
                  },
                  [o]
                ),
                isPointerInTransitRef: f,
                onPointerInTransitChange: d.useCallback(function (e) {
                  f.current = e;
                }, []),
                disableHoverableContent: void 0 !== i && i,
                children: a
              })
            );
          };
        ia.displayName = ie;
        var il = "Tooltip",
          iu = o4(o7(il), 2),
          ic = iu[0],
          is = iu[1],
          id = function (e) {
            var t,
              r,
              n,
              o,
              i,
              a,
              u,
              c,
              s,
              f,
              p,
              y,
              m,
              b,
              h,
              v,
              g,
              w,
              O,
              j,
              x,
              S = e.__scopeTooltip,
              P = e.children,
              A = e.open,
              E = e.defaultOpen,
              I = e.onOpenChange,
              C = e.disableHoverableContent,
              k = e.delayDuration,
              N = ii(il, e.__scopeTooltip),
              T = o9(S),
              R = o4(d.useState(null), 2),
              D = R[0],
              L = R[1],
              M =
                ((f = (s =
                  (function (e) {
                    if (Array.isArray(e)) return e;
                  })((c = d.useState(rv()))) ||
                  (function (e) {
                    var t,
                      r,
                      n =
                        null == e
                          ? null
                          : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (null != n) {
                      var o = [],
                        i = !0,
                        a = !1;
                      try {
                        for (
                          n = n.call(e);
                          !(i = (t = n.next()).done) && (o.push(t.value), 2 !== o.length);
                          i = !0
                        );
                      } catch (e) {
                        ((a = !0), (r = e));
                      } finally {
                        try {
                          i || null == n.return || n.return();
                        } finally {
                          if (a) throw r;
                        }
                      }
                      return o;
                    }
                  })(c) ||
                  (function (e) {
                    if (e) {
                      if ("string" == typeof e) return rh(e, 2);
                      var t = Object.prototype.toString.call(e).slice(8, -1);
                      if (
                        ("Object" === t && e.constructor && (t = e.constructor.name),
                        "Map" === t || "Set" === t)
                      )
                        return Array.from(t);
                      if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                        return rh(e, 2);
                    }
                  })(c) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })())[0]),
                (p = s[1]),
                rb(
                  function () {
                    p(function (e) {
                      return null != e ? e : String(rg++);
                    });
                  },
                  [void 0]
                ),
                f ? "radix-".concat(f) : ""),
              U = d.useRef(0),
              F = null != C ? C : N.disableHoverableContent,
              z = null != k ? k : N.delayDuration,
              _ = d.useRef(!1),
              W = o4(
                ((m = (y = {
                  prop: A,
                  defaultProp: void 0 !== E && E,
                  onChange: function (e) {
                    (e ? (N.onOpen(), document.dispatchEvent(new CustomEvent(it))) : N.onClose(),
                      null == I || I(e));
                  }
                }).prop),
                (g = (v = oJ(
                  ((r = (t = {
                    defaultProp: y.defaultProp,
                    onChange: (h = void 0 === (b = y.onChange) ? function () {} : b)
                  }).defaultProp),
                  (n = t.onChange),
                  (i = oJ((o = d.useState(r)), 1)[0]),
                  (a = d.useRef(i)),
                  (u = oy(n)),
                  d.useEffect(
                    function () {
                      a.current !== i && (u(i), (a.current = i));
                    },
                    [i, a, u]
                  ),
                  o),
                  2
                ))[0]),
                (w = v[1]),
                (j = (O = void 0 !== m) ? m : g),
                (x = oy(h)),
                [
                  j,
                  d.useCallback(
                    function (e) {
                      if (O) {
                        var t = "function" == typeof e ? e(m) : e;
                        t !== m && x(t);
                      } else w(e);
                    },
                    [O, m, w, x]
                  )
                ]),
                2
              ),
              K = W[0],
              B = void 0 !== K && K,
              q = W[1],
              $ = d.useMemo(
                function () {
                  return B ? (_.current ? "delayed-open" : "instant-open") : "closed";
                },
                [B]
              ),
              G = d.useCallback(
                function () {
                  (window.clearTimeout(U.current), (U.current = 0), (_.current = !1), q(!0));
                },
                [q]
              ),
              H = d.useCallback(
                function () {
                  (window.clearTimeout(U.current), (U.current = 0), q(!1));
                },
                [q]
              ),
              V = d.useCallback(
                function () {
                  (window.clearTimeout(U.current),
                    (U.current = window.setTimeout(function () {
                      ((_.current = !0), q(!0), (U.current = 0));
                    }, z)));
                },
                [z, q]
              );
            return (
              d.useEffect(function () {
                return function () {
                  U.current && (window.clearTimeout(U.current), (U.current = 0));
                };
              }, []),
              (0, l.jsx)(
                ok,
                o2(o1({}, T), {
                  children: (0, l.jsx)(ic, {
                    scope: S,
                    contentId: M,
                    open: B,
                    stateAttribute: $,
                    trigger: D,
                    onTriggerChange: L,
                    onTriggerEnter: d.useCallback(
                      function () {
                        N.isOpenDelayed ? V() : G();
                      },
                      [N.isOpenDelayed, V, G]
                    ),
                    onTriggerLeave: d.useCallback(
                      function () {
                        F ? H() : (window.clearTimeout(U.current), (U.current = 0));
                      },
                      [H, F]
                    ),
                    onOpen: G,
                    onClose: H,
                    disableHoverableContent: F,
                    children: P
                  })
                })
              )
            );
          };
        id.displayName = il;
        var ip = "TooltipTrigger",
          iy = d.forwardRef(function (e, t) {
            var r = e.__scopeTooltip,
              n = o3(e, ["__scopeTooltip"]),
              o = is(ip, r),
              i = ii(ip, r),
              a = o9(r),
              u = ru(t, d.useRef(null), o.onTriggerChange),
              c = d.useRef(!1),
              s = d.useRef(!1),
              f = d.useCallback(function () {
                return (c.current = !1);
              }, []);
            return (
              d.useEffect(
                function () {
                  return function () {
                    return document.removeEventListener("pointerup", f);
                  };
                },
                [f]
              ),
              (0, l.jsx)(
                oT,
                o2(o1({ asChild: !0 }, a), {
                  children: (0, l.jsx)(
                    of.button,
                    o2(
                      o1(
                        {
                          "aria-describedby": o.open ? o.contentId : void 0,
                          "data-state": o.stateAttribute
                        },
                        n
                      ),
                      {
                        ref: u,
                        onPointerMove: ro(e.onPointerMove, function (e) {
                          "touch" !== e.pointerType &&
                            (s.current ||
                              i.isPointerInTransitRef.current ||
                              (o.onTriggerEnter(), (s.current = !0)));
                        }),
                        onPointerLeave: ro(e.onPointerLeave, function () {
                          (o.onTriggerLeave(), (s.current = !1));
                        }),
                        onPointerDown: ro(e.onPointerDown, function () {
                          ((c.current = !0),
                            document.addEventListener("pointerup", f, { once: !0 }));
                        }),
                        onFocus: ro(e.onFocus, function () {
                          c.current || o.onOpen();
                        }),
                        onBlur: ro(e.onBlur, o.onClose),
                        onClick: ro(e.onClick, o.onClose)
                      }
                    )
                  )
                })
              )
            );
          });
        iy.displayName = ip;
        var im = "TooltipPortal",
          ib = o4(o7(im, { forceMount: void 0 }), 2),
          ih = ib[0],
          iv = ib[1],
          ig = function (e) {
            var t = e.__scopeTooltip,
              r = e.forceMount,
              n = e.children,
              o = e.container,
              i = is(im, t);
            return (0, l.jsx)(ih, {
              scope: t,
              forceMount: r,
              children: (0, l.jsx)(oV, {
                present: r || i.open,
                children: (0, l.jsx)(o$, { asChild: !0, container: o, children: n })
              })
            });
          };
        ig.displayName = im;
        var iw = "TooltipContent",
          iO = d.forwardRef(function (e, t) {
            var r = iv(iw, e.__scopeTooltip),
              n = e.forceMount,
              o = void 0 === n ? r.forceMount : n,
              i = e.side,
              a = void 0 === i ? "top" : i,
              u = o3(e, ["forceMount", "side"]),
              c = is(iw, e.__scopeTooltip);
            return (0, l.jsx)(oV, {
              present: o || c.open,
              children: c.disableHoverableContent
                ? (0, l.jsx)(iA, o2(o1({ side: a }, u), { ref: t }))
                : (0, l.jsx)(ij, o2(o1({ side: a }, u), { ref: t }))
            });
          }),
          ij = d.forwardRef(function (e, t) {
            var r = is(iw, e.__scopeTooltip),
              n = ii(iw, e.__scopeTooltip),
              o = d.useRef(null),
              i = ru(t, o),
              a = o4(d.useState(null), 2),
              u = a[0],
              c = a[1],
              s = r.trigger,
              f = r.onClose,
              p = o.current,
              y = n.onPointerInTransitChange,
              m = d.useCallback(
                function () {
                  (c(null), y(!1));
                },
                [y]
              ),
              b = d.useCallback(
                function (e, t) {
                  var r,
                    n,
                    o,
                    i,
                    a,
                    l,
                    u = e.currentTarget,
                    s = { x: e.clientX, y: e.clientY },
                    f = (function (e, t) {
                      var r = Math.abs(t.top - e.y),
                        n = Math.abs(t.bottom - e.y),
                        o = Math.abs(t.right - e.x),
                        i = Math.abs(t.left - e.x);
                      switch (Math.min(r, n, o, i)) {
                        case i:
                          return "left";
                        case o:
                          return "right";
                        case r:
                          return "top";
                        case n:
                          return "bottom";
                        default:
                          throw Error("unreachable");
                      }
                    })(s, u.getBoundingClientRect()),
                    d = (function (e, t) {
                      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                        n = [];
                      switch (t) {
                        case "top":
                          n.push({ x: e.x - r, y: e.y + r }, { x: e.x + r, y: e.y + r });
                          break;
                        case "bottom":
                          n.push({ x: e.x - r, y: e.y - r }, { x: e.x + r, y: e.y - r });
                          break;
                        case "left":
                          n.push({ x: e.x + r, y: e.y - r }, { x: e.x + r, y: e.y + r });
                          break;
                        case "right":
                          n.push({ x: e.x - r, y: e.y - r }, { x: e.x - r, y: e.y + r });
                      }
                      return n;
                    })(s, f),
                    p =
                      ((n = (r = t.getBoundingClientRect()).top),
                      (o = r.right),
                      (i = r.bottom),
                      [
                        { x: (a = r.left), y: n },
                        { x: o, y: n },
                        { x: o, y: i },
                        { x: a, y: i }
                      ]);
                  (c(
                    ((l = o6(d).concat(o6(p)).slice()).sort(function (e, t) {
                      return e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : 1 * !!(e.y > t.y);
                    }),
                    (function (e) {
                      if (e.length <= 1) return e.slice();
                      for (var t = [], r = 0; r < e.length; r++) {
                        for (var n = e[r]; t.length >= 2;) {
                          var o = t[t.length - 1],
                            i = t[t.length - 2];
                          if ((o.x - i.x) * (n.y - i.y) >= (o.y - i.y) * (n.x - i.x)) t.pop();
                          else break;
                        }
                        t.push(n);
                      }
                      t.pop();
                      for (var a = [], l = e.length - 1; l >= 0; l--) {
                        for (var u = e[l]; a.length >= 2;) {
                          var c = a[a.length - 1],
                            s = a[a.length - 2];
                          if ((c.x - s.x) * (u.y - s.y) >= (c.y - s.y) * (u.x - s.x)) a.pop();
                          else break;
                        }
                        a.push(u);
                      }
                      return (a.pop(),
                      1 === t.length && 1 === a.length && t[0].x === a[0].x && t[0].y === a[0].y)
                        ? t
                        : t.concat(a);
                    })(l))
                  ),
                    y(!0));
                },
                [y]
              );
            return (
              d.useEffect(
                function () {
                  return function () {
                    return m();
                  };
                },
                [m]
              ),
              d.useEffect(
                function () {
                  if (s && p) {
                    var e = function (e) {
                        return b(e, p);
                      },
                      t = function (e) {
                        return b(e, s);
                      };
                    return (
                      s.addEventListener("pointerleave", e),
                      p.addEventListener("pointerleave", t),
                      function () {
                        (s.removeEventListener("pointerleave", e),
                          p.removeEventListener("pointerleave", t));
                      }
                    );
                  }
                },
                [s, p, b, m]
              ),
              d.useEffect(
                function () {
                  if (u) {
                    var e = function (e) {
                      var t = e.target,
                        r = { x: e.clientX, y: e.clientY },
                        n =
                          (null == s ? void 0 : s.contains(t)) ||
                          (null == p ? void 0 : p.contains(t)),
                        o = !(function (e, t) {
                          for (
                            var r = e.x, n = e.y, o = !1, i = 0, a = t.length - 1;
                            i < t.length;
                            a = i++
                          ) {
                            var l = t[i].x,
                              u = t[i].y,
                              c = t[a].x,
                              s = t[a].y;
                            u > n != s > n && r < ((c - l) * (n - u)) / (s - u) + l && (o = !o);
                          }
                          return o;
                        })(r, u);
                      n ? m() : o && (m(), f());
                    };
                    return (
                      document.addEventListener("pointermove", e),
                      function () {
                        return document.removeEventListener("pointermove", e);
                      }
                    );
                  }
                },
                [s, p, u, f, m]
              ),
              (0, l.jsx)(iA, o2(o1({}, e), { ref: i }))
            );
          }),
          ix = o4(o7(il, { isInside: !1 }), 2),
          iS = ix[0],
          iP = ix[1],
          iA = d.forwardRef(function (e, t) {
            var r = e.__scopeTooltip,
              n = e.children,
              o = e["aria-label"],
              i = e.onEscapeKeyDown,
              a = e.onPointerDownOutside,
              u = o3(e, [
                "__scopeTooltip",
                "children",
                "aria-label",
                "onEscapeKeyDown",
                "onPointerDownOutside"
              ]),
              c = is(iw, r),
              s = o9(r),
              f = c.onClose;
            return (
              d.useEffect(
                function () {
                  return (
                    document.addEventListener(it, f),
                    function () {
                      return document.removeEventListener(it, f);
                    }
                  );
                },
                [f]
              ),
              d.useEffect(
                function () {
                  if (c.trigger) {
                    var e = function (e) {
                      var t = e.target;
                      (null == t ? void 0 : t.contains(c.trigger)) && f();
                    };
                    return (
                      window.addEventListener("scroll", e, { capture: !0 }),
                      function () {
                        return window.removeEventListener("scroll", e, { capture: !0 });
                      }
                    );
                  }
                },
                [c.trigger, f]
              ),
              (0, l.jsx)(rm.DismissableLayer, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                onFocusOutside: function (e) {
                  return e.preventDefault();
                },
                onDismiss: f,
                children: (0, l.jsxs)(
                  oU,
                  o2(o1({ "data-state": c.stateAttribute }, s, u), {
                    ref: t,
                    style: o1({}, u.style, {
                      "--radix-tooltip-content-transform-origin":
                        "var(--radix-popper-transform-origin)",
                      "--radix-tooltip-content-available-width":
                        "var(--radix-popper-available-width)",
                      "--radix-tooltip-content-available-height":
                        "var(--radix-popper-available-height)",
                      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                    }),
                    children: [
                      (0, l.jsx)(oa, { children: n }),
                      (0, l.jsx)(iS, {
                        scope: r,
                        isInside: !0,
                        children: (0, l.jsx)(oZ, {
                          id: c.contentId,
                          role: "tooltip",
                          children: o || n
                        })
                      })
                    ]
                  })
                )
              })
            );
          });
        iO.displayName = iw;
        var iE = "TooltipArrow",
          iI = d.forwardRef(function (e, t) {
            var r = e.__scopeTooltip,
              n = o3(e, ["__scopeTooltip"]),
              o = o9(r);
            return iP(iE, r).isInside ? null : (0, l.jsx)(o_, o2(o1({}, o, n), { ref: t }));
          });
        function iC(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function ik(e) {
          var t,
            r = e.position,
            n = e.hasBeak,
            o = e.title,
            i = e.description,
            a = e.ariaLabel,
            l = e.delayDurationMs,
            u = e.children,
            c = e.open,
            s = e.onOpenChange,
            f = e.contentClassName,
            p =
              (function (e) {
                if (Array.isArray(e)) return e;
              })((t = r.split("-"))) ||
              (function (e) {
                var t,
                  r,
                  n =
                    null == e
                      ? null
                      : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != n) {
                  var o = [],
                    i = !0,
                    a = !1;
                  try {
                    for (
                      n = n.call(e);
                      !(i = (t = n.next()).done) && (o.push(t.value), 2 !== o.length);
                      i = !0
                    );
                  } catch (e) {
                    ((a = !0), (r = e));
                  } finally {
                    try {
                      i || null == n.return || n.return();
                    } finally {
                      if (a) throw r;
                    }
                  }
                  return o;
                }
              })(t) ||
              (function (e) {
                if (e) {
                  if ("string" == typeof e) return iC(e, 2);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  if (
                    ("Object" === t && e.constructor && (t = e.constructor.name),
                    "Map" === t || "Set" === t)
                  )
                    return Array.from(t);
                  if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return iC(e, 2);
                }
              })(t) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(),
            m = p[0],
            b = p[1],
            h = null != a ? a : "string" == typeof o && null == i ? o : void 0;
          return d.createElement(
            ia,
            { delayDuration: void 0 === l ? 500 : l },
            d.createElement(
              id,
              { open: c, onOpenChange: s },
              u,
              d.createElement(
                ig,
                null,
                d.createElement(
                  iO,
                  {
                    side: m,
                    align: b,
                    "aria-label": h,
                    className: y(
                      "foundation-web-portal-zindex bg-inverse-surface-0 padding-y-xsmall padding-x-small radius-small shadow-transient-low",
                      f
                    ),
                    sideOffset: 5
                  },
                  (void 0 === n || n) &&
                    d.createElement(
                      iI,
                      { asChild: !0 },
                      d.createElement(rn, { className: "content-[var(--inverse-surface-0)]" })
                    ),
                  d.createElement(
                    "div",
                    { className: "flex flex-col text-truncate-split" },
                    d.createElement(
                      "div",
                      { className: "text-caption-medium content-inverse-default" },
                      o
                    ),
                    i &&
                      d.createElement(
                        "div",
                        {
                          className:
                            "text-body-small padding-top-xsmall content-inverse-default max-width-[calc(var(--size-100)*50)]"
                        },
                        i
                      )
                  )
                )
              )
            )
          );
        }
        function iN(e) {
          var t = e.children,
            r = e.asChild,
            n = e.className;
          return d.createElement(iy, { asChild: r, className: n }, t);
        }
        iI.displayName = iE;
        var iT = function (e) {
            var t = e.title,
              r = e.description,
              n = e.position;
            return p().createElement(
              ik,
              { position: void 0 === n ? "top-center" : n, title: t, description: r },
              p().createElement(
                iN,
                { asChild: !0 },
                p().createElement(
                  "span",
                  {
                    role: "button",
                    tabIndex: 0,
                    "aria-label": t,
                    className: "flex items-center content-muted",
                    "data-testid": "label-tooltip-trigger"
                  },
                  p().createElement(k, { name: "icon-regular-circle-i", size: "Small" })
                )
              )
            );
          },
          iR = { Standard: "bg-none", Contrast: "bg-shift-200", Utility: "bg-none" },
          iD = { Standard: "stroke-standard", Contrast: "stroke-none", Utility: "stroke-none" };
        function iL(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function iM(e) {
          if (Array.isArray(e)) return e;
        }
        function iU(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = r),
            e
          );
        }
        function iF() {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function iz(e, t) {
          if (e) {
            if ("string" == typeof e) return iL(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (
              ("Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r)
            )
              return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
              return iL(e, t);
          }
        }
        var i_ = {
            XSmall: "padding-x-small",
            Small: "padding-x-medium",
            Medium: "padding-x-medium",
            Large: "padding-x-medium"
          },
          iW = {
            XSmall: "gap-x-xsmall",
            Small: "gap-x-small",
            Medium: "gap-x-small",
            Large: "gap-x-small"
          },
          iK = {
            XSmall: "height-600",
            Small: "height-800",
            Medium: "height-1000",
            Large: "height-1200"
          },
          iB = {
            XSmall: "radius-small",
            Small: "radius-medium",
            Medium: "radius-medium",
            Large: "radius-medium"
          },
          iq = {
            XSmall: "text-title-small",
            Small: "text-title-small",
            Medium: "text-title-medium",
            Large: "text-title-large"
          },
          i$ = {
            XSmall: ["text-body-small", "placeholder:text-body-small"],
            Small: ["text-body-small", "placeholder:text-body-small"],
            Medium: ["text-body-medium", "placeholder:text-body-medium"],
            Large: ["text-body-large", "placeholder:text-body-large"]
          },
          iG = (0, d.forwardRef)(function (e, t) {
            var r,
              n,
              o,
              i =
                iM((r = [e, t])) ||
                (function (e) {
                  if (
                    ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                    null != e["@@iterator"]
                  )
                    return Array.from(e);
                })(r) ||
                iz(r) ||
                iF(),
              a = i[0],
              l = i.slice(1),
              u = a.label,
              c = a.labelTooltip,
              s = a.leadingIconName,
              f = a.trailingIconName,
              m = a.leadingIconNode,
              b = a.trailingIconNode,
              h = a.hasError,
              v = a.error,
              g = a.helperText,
              w = a.size,
              O = a.variant,
              j = void 0 === O ? "Standard" : O,
              S = a.isRequired,
              P = a.isDisabled,
              A = a.className,
              E = a.style,
              I = a.inputContainerClassName,
              C = a.inputContainerClassStyle,
              N = a.id,
              T = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o,
                  i = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                  for (o = 0, r = Reflect.ownKeys(Object(e)); o < r.length; o++)
                    ((n = r[o]),
                      !(t.indexOf(n) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                        (i[n] = e[n]));
                  return i;
                }
                if (
                  ((i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                      n,
                      o = {},
                      i = Object.getOwnPropertyNames(e);
                    for (n = 0; n < i.length; n++)
                      ((r = i[n]),
                        !(t.indexOf(r) >= 0) &&
                          Object.prototype.propertyIsEnumerable.call(e, r) &&
                          (o[r] = e[r]));
                    return o;
                  })(e, t)),
                  Object.getOwnPropertySymbols)
                )
                  for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    ((n = r[o]),
                      !(t.indexOf(n) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                        (i[n] = e[n]));
                return i;
              })(a, [
                "label",
                "labelTooltip",
                "leadingIconName",
                "trailingIconName",
                "leadingIconNode",
                "trailingIconNode",
                "hasError",
                "error",
                "helperText",
                "size",
                "variant",
                "isRequired",
                "isDisabled",
                "className",
                "style",
                "inputContainerClassName",
                "inputContainerClassStyle",
                "id"
              ]),
              R = (iM(l) ||
                (function (e) {
                  var t,
                    r,
                    n =
                      null == e
                        ? null
                        : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                  if (null != n) {
                    var o = [],
                      i = !0,
                      a = !1;
                    try {
                      for (
                        n = n.call(e);
                        !(i = (t = n.next()).done) && (o.push(t.value), 1 !== o.length);
                        i = !0
                      );
                    } catch (e) {
                      ((a = !0), (r = e));
                    } finally {
                      try {
                        i || null == n.return || n.return();
                      } finally {
                        if (a) throw r;
                      }
                    }
                    return o;
                  }
                })(l) ||
                iz(l, 1) ||
                iF())[0],
              D = rr(),
              L = N || D,
              M = "".concat(L, "-description"),
              U = null != w ? w : "Large",
              F = h || !!v,
              z = v || g,
              _ = (0, d.useMemo)(
                function () {
                  return s
                    ? p().createElement(k, {
                        name: s,
                        size: U,
                        className: "content-emphasis",
                        "data-testid": "text-input-leading-icon"
                      })
                    : m;
                },
                [s, m, U]
              ),
              W = (0, d.useMemo)(
                function () {
                  return f
                    ? p().createElement(k, {
                        name: f,
                        size: U,
                        className: "content-emphasis",
                        "data-testid": "text-input-trailing-icon"
                      })
                    : b;
                },
                [U, f, b]
              ),
              K = u
                ? p().createElement(
                    "label",
                    { htmlFor: L, className: y(iq[U], "content-emphasis") },
                    u,
                    S &&
                      p().createElement(
                        p().Fragment,
                        null,
                        " ",
                        p().createElement("span", { className: "content-default" }, "*")
                      )
                  )
                : null;
            return p().createElement(
              "div",
              {
                "data-testid": "text-input-wrapper",
                className: y("flex width-full flex-col gap-small ".concat(A), iU({}, x, P)),
                style: E
              },
              K &&
                (c
                  ? p().createElement(
                      "div",
                      { className: "flex items-center gap-xsmall" },
                      K,
                      p().createElement(iT, c)
                    )
                  : K),
              p().createElement(
                "div",
                {
                  "data-testid": "text-input-container",
                  className: y(
                    "foundation-web-input flex items-center width-full",
                    iD[j],
                    iR[j],
                    I,
                    iK[U],
                    iB[U],
                    i_[U],
                    iW[U],
                    F
                      ? "stroke-system-alert focus-within:stroke-system-alert"
                      : "stroke-contrast-alpha focus-within:stroke-system-emphasis"
                  ),
                  style: C
                },
                _,
                p().createElement(
                  "input",
                  ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                      ("function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                          Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                          })
                        )),
                        n.forEach(function (t) {
                          iU(e, t, r[t]);
                        }));
                    }
                    return e;
                  })(
                    {
                      type: "text",
                      id: L,
                      ref: R,
                      className: y(
                        "width-full padding-none bg-none stroke-none outline-none content-emphasis placeholder:content-muted",
                        i$[U]
                      ),
                      style: { appearance: "none" },
                      "aria-invalid": F,
                      "aria-describedby": z ? M : void 0,
                      required: S
                    },
                    T
                  )),
                  (o = o = { disabled: P }),
                  Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                    : (function (e) {
                        var t = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, r);
                        }
                        return t;
                      })(Object(o)).forEach(function (e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                  n)
                ),
                W
              ),
              z &&
                p().createElement(
                  "span",
                  {
                    id: M,
                    className: y("text-caption-small", {
                      "content-system-alert": F,
                      "content-default": !F
                    })
                  },
                  z
                )
            );
          });
        iG.displayName = "TextInput";
        var iH = function (e) {
          var t = e.heading,
            r = e.value,
            n = e.placeholder,
            o = e.isDisabled,
            i = e.showInput,
            a = e.onChange,
            u = e.onSubmit;
          return (0, l.jsxs)("div", {
            className: "flex flex-col gap-medium",
            children: [
              (0, l.jsx)("h1", { className: "text-title-large content-emphasis", children: t }),
              void 0 === i || i
                ? (0, l.jsx)("div", {
                    className: "width-full",
                    children: (0, l.jsx)(iG, {
                      "aria-label": n,
                      className: "width-full",
                      isDisabled: void 0 !== o && o,
                      leadingIconName: "icon-regular-magnifying-glass",
                      onChange: function (e) {
                        a(e.currentTarget.value);
                      },
                      onKeyUp: function (e) {
                        "Enter" === e.key && u();
                      },
                      placeholder: n,
                      size: "Large",
                      value: r
                    })
                  })
                : null
            ]
          });
        };
        function iV(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function iX(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var r,
                n,
                o =
                  null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
              if (null != o) {
                var i = [],
                  a = !0,
                  l = !1;
                try {
                  for (
                    o = o.call(e);
                    !(a = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t);
                    a = !0
                  );
                } catch (e) {
                  ((l = !0), (n = e));
                } finally {
                  try {
                    a || null == o.return || o.return();
                  } finally {
                    if (l) throw n;
                  }
                }
                return i;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return iV(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r)
                )
                  return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                  return iV(e, t);
              }
            })(e, t) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        var iY = function (e) {
            return (
              (void 0 === e
                ? "undefined"
                : e && "u" > typeof Symbol && e.constructor === Symbol
                  ? "symbol"
                  : typeof e) == "object" && null !== e
            );
          },
          iJ = function (e) {
            return "string" == typeof e && e.trim().length > 0 ? e : null;
          },
          iQ = function (e, t) {
            if (!iY(e)) return t;
            if (429 === e.status) return null != (n = iJ(e.statusText)) ? n : t;
            var r,
              n,
              o = iY(e.data) ? e.data.errors : void 0,
              i = Array.isArray(o) && iY(o[0]) ? o[0] : void 0;
            return null != (r = iJ(null == i ? void 0 : i.userFacingMessage)) ? r : t;
          },
          iZ = "__keyword_start__",
          i0 = "__keyword_end__",
          i1 = function () {
            var e = (0, f.useTranslation)().translate,
              t = tu(),
              r = t.keyword,
              n = t.setKeyword,
              o = tD(),
              i = to(),
              a = tC(r),
              u = a.inApp,
              c = a.inputValue,
              s = a.isKeywordTooShort,
              p = a.isUserGuest,
              y = a.loadMore,
              m = a.paginationMethod,
              b = a.results,
              h = a.resultsLoading,
              v = a.setInputValue,
              g = a.keyword,
              O = a.unsafeInputDetected,
              j = a.markFriendRequestAccepted,
              x = a.markFriendRequestSent,
              S = (0, d.useMemo)(function () {
                return {
                  firePlayerTileImpressionEvent: function (e) {
                    ti(eN.eventNames.playerTileImpression, e);
                  },
                  firePlayerTileClickEvent: function (e) {
                    ti(eN.eventNames.playerTileClick, e);
                  },
                  firePlayerFriendAddEvent: function (e) {
                    ti(eN.eventNames.playerFriendAdd, e);
                  },
                  firePlayerFriendAcceptEvent: function (e) {
                    ti(eN.eventNames.playerFriendAccept, e);
                  }
                };
              }, []),
              P = S.firePlayerFriendAcceptEvent,
              A = S.firePlayerFriendAddEvent,
              E = S.firePlayerTileClickEvent,
              I = S.firePlayerTileImpressionEvent,
              C = iX((0, d.useState)(null), 2),
              k = C[0],
              N = C[1],
              T = iX((0, d.useState)(null), 2),
              R = T[0],
              D = T[1],
              L = (0, d.useRef)(null),
              M = (0, d.useRef)(new Set()),
              U = eE(
                (0, d.useMemo)(
                  function () {
                    return b.map(function (e) {
                      return e.id;
                    });
                  },
                  [b]
                )
              ).data;
            ((0, d.useEffect)(
              function () {
                M.current.clear();
              },
              [r]
            ),
              (0, d.useEffect)(
                function () {
                  b.forEach(function (e) {
                    var t = "".concat(e.id, ":").concat(e.absPos);
                    M.current.has(t) || (M.current.add(t), I(e));
                  });
                },
                [I, b]
              ),
              (0, d.useEffect)(
                function () {
                  if ("Scroll" === m && 0 !== b.length) {
                    var e = L.current;
                    if (e) {
                      var t = new IntersectionObserver(
                        function (e) {
                          e.forEach(function (e) {
                            e.isIntersecting && y().catch(function () {});
                          });
                        },
                        { rootMargin: "160px" }
                      );
                      return (
                        t.observe(e),
                        function () {
                          t.disconnect();
                        }
                      );
                    }
                  }
                },
                [y, m, b.length]
              ));
            var F = (0, d.useCallback)(function (e) {
                N({ id: Date.now(), message: e });
              }, []),
              z = (0, d.useCallback)(
                function () {
                  var e = c.trim();
                  e !== r && n(e);
                },
                [c, n, r]
              ),
              _ = (0, d.useCallback)(
                function (e) {
                  (E(e), window.location.assign(e.profileUrl));
                },
                [E]
              ),
              W = (0, d.useCallback)(
                function (t) {
                  var r;
                  (D(t.id),
                    ((r = t.id),
                    e1(function () {
                      return e2(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return [
                              4,
                              eR.httpService.post(
                                { url: e3(eN.urls.requestFriendshipUrl, r), withCredentials: !0 },
                                {
                                  friendshipOriginSourceType:
                                    eN.playerSearchFriendshipOriginSourceType
                                }
                              )
                            ];
                          case 1:
                            return [2, e.sent().data];
                        }
                      });
                    })())
                      .then(function (e) {
                        e.success
                          ? (x(t.id), A(t))
                          : (console.error(
                              "playerSearch: request-friendship reported no success, leaving the button unchanged",
                              { userId: t.id, response: e }
                            ),
                            e.message && F(e.message));
                      })
                      .catch(function (t) {
                        F(
                          iQ(
                            t,
                            e(
                              "Message.UnableToSendFriendRequest",
                              void 0,
                              "Unable to send friend request."
                            )
                          )
                        );
                      })
                      .finally(function () {
                        D(null);
                      }));
                },
                [A, x, F, e]
              ),
              K = (0, d.useCallback)(
                function (t) {
                  var r;
                  (D(t.id),
                    ((r = t.id),
                    e1(function () {
                      return e2(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return [
                              4,
                              eR.httpService.post({
                                url: e3(eN.urls.acceptFriendRequestUrl, r),
                                withCredentials: !0
                              })
                            ];
                          case 1:
                            return (e.sent(), [2]);
                        }
                      });
                    })())
                      .then(function () {
                        (j(t.id), P(t));
                      })
                      .catch(function (t) {
                        F(
                          iQ(
                            t,
                            e(
                              "Message.UnableToAcceptFriendRequest",
                              void 0,
                              "Unable to accept friend request."
                            )
                          )
                        );
                      })
                      .finally(function () {
                        D(null);
                      }));
                },
                [P, j, F, e]
              ),
              B = (0, d.useCallback)(function (e) {
                tM(e.id);
              }, []),
              q = (0, d.useCallback)(
                function (t) {
                  try {
                    var r;
                    null == (r = eF()) || r.followPlayerIntoGame(t.id);
                  } catch (t) {
                    F(e("Message.UnableToJoinGame", void 0, "Unable to join experience."));
                  }
                },
                [F, e]
              ),
              $ = (0, d.useMemo)(
                function () {
                  var t = e("Heading.PlayerResultsFor", { startSpan: iZ, endSpan: i0, keyword: g }),
                    r = t.indexOf(iZ),
                    n = t.indexOf(i0);
                  if (-1 === r || -1 === n || n <= r) return t;
                  var o = t.slice(0, r),
                    i = t.slice(r + iZ.length, n),
                    a = t.slice(n + i0.length);
                  return (0, l.jsxs)("span", {
                    children: [
                      o,
                      (0, l.jsx)("span", { className: "text-body-large", children: i }),
                      a
                    ]
                  });
                },
                [g, e]
              ),
              G = 0 === b.length && !h && !s && !O && !!g;
            return (0, l.jsxs)("div", {
              className:
                "margin-x-auto flex width-full max-width-[970px] flex-col gap-large padding-x-medium padding-bottom-xxlarge md:padding-x-large",
              children: [
                (0, l.jsx)(iH, {
                  heading: $,
                  onChange: v,
                  onSubmit: z,
                  placeholder: e("Label.Search"),
                  showInput: !u,
                  value: c
                }),
                (0, l.jsx)(tF, {
                  keyword: g,
                  keywordMinLength: eN.pageData.keywordMinLength,
                  showKeywordTooShort: s,
                  showNoMatches: G,
                  showUnsafeInput: O
                }),
                (0, l.jsx)(re, {
                  results: b,
                  sentinelRef: L,
                  children: b.map(function (e) {
                    return (0, l.jsx)(
                      t9,
                      {
                        isChatEntrypointEnabled: i,
                        isLoading: R === e.id,
                        isRobloxPlus: !0 === U[e.id],
                        isUserGuest: p,
                        onAcceptFriend: function (e) {
                          K(e);
                        },
                        onAddFriend: function (e) {
                          W(e);
                        },
                        onJoinGame: q,
                        onOpenProfile: _,
                        onStartChat: B,
                        renameFriendsToConnections: o,
                        user: e
                      },
                      "".concat(e.id, "-").concat(e.absPos)
                    );
                  })
                }),
                h
                  ? (0, l.jsx)("div", {
                      className: "flex justify-center",
                      children: (0, l.jsx)(w, {
                        ariaLabel: e("Label.Loading", void 0, "Loading"),
                        size: "Large",
                        variant: "Indeterminate"
                      })
                    })
                  : null,
                "Button" === m && b.length > 0 && !h
                  ? (0, l.jsx)("div", {
                      className: "flex justify-center",
                      children: (0, l.jsx)(et, {
                        className: "width-full",
                        onClick: function () {
                          y().catch(function () {});
                        },
                        size: "Medium",
                        variant: "Standard",
                        children: e("Action.LoadMore", void 0, "Load more")
                      })
                    })
                  : null,
                k
                  ? (0, l.jsx)("div", {
                      className: "flex justify-center",
                      children: (0, l.jsx)(
                        ef,
                        {
                          closeIconAriaLabel: e("Action.Close", void 0, "Close"),
                          onClose: function () {
                            N(null);
                          },
                          shouldAutoDismiss: !0,
                          title: k.message
                        },
                        k.id
                      )
                    })
                  : null
              ]
            });
          },
          i2 = function () {
            return (0, l.jsx)(i1, {});
          },
          i3 = JSON.parse(
            '{"P9":["Feature.PlayerSearchResults","Common.Presence","Search.GlobalSearch","CommonUI.Features"]}'
          );
        s()(function () {
          var e,
            t =
              null != (e = document.getElementById("player-search-web-app"))
                ? e
                : document.getElementById("player-search-container");
          t &&
            (0, f.renderWithErrorBoundary)(
              (0, l.jsx)(f.TranslationProvider, {
                config: i3.P9,
                children: (0, l.jsx)(u.QueryClientProvider, {
                  client: f.queryClient,
                  children: (0, l.jsx)(i2, {})
                })
              }),
              t
            );
        });
      })());
  })(),
  window.Roblox &&
    window.Roblox.BundleDetector &&
    window.Roblox.BundleDetector.bundleDetected("PlayerSearch"));
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/playerSearch-9eebe69ef5d71659.js.map
