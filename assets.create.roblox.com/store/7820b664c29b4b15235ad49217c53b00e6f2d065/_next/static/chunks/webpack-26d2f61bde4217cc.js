(!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
                ? self
                : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "51756b96-4cdc-45f9-ba3b-ded5ae8314dc"),
      (e._sentryDebugIdIdentifier = "sentry-dbid-51756b96-4cdc-45f9-ba3b-ded5ae8314dc"));
  } catch (e) {}
})(),
  (() => {
    "use strict";
    var e = {},
      t = {};
    function r(o) {
      var n = t[o];
      if (void 0 !== n) return n.exports;
      var f = (t[o] = { exports: {} }),
        a = !0;
      try {
        (e[o].call(f.exports, f, f.exports, r), (a = !1));
      } finally {
        a && delete t[o];
      }
      return f.exports;
    }
    ((r.m = e),
      (() => {
        var e = [];
        r.O = (t, o, n, f) => {
          if (o) {
            f = f || 0;
            for (var a = e.length; a > 0 && e[a - 1][2] > f; a--) e[a] = e[a - 1];
            e[a] = [o, n, f];
            return;
          }
          for (var d = 1 / 0, a = 0; a < e.length; a++) {
            for (var [o, n, f] = e[a], i = !0, l = 0; l < o.length; l++)
              (!1 & f || d >= f) && Object.keys(r.O).every((e) => r.O[e](o[l]))
                ? o.splice(l--, 1)
                : ((i = !1), f < d && (d = f));
            if (i) {
              e.splice(a--, 1);
              var c = n();
              void 0 !== c && (t = c);
            }
          }
          return t;
        };
      })(),
      (r.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return (r.d(t, { a: t }), t);
      }),
      (() => {
        var e,
          t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__;
        r.t = function (o, n) {
          if (
            (1 & n && (o = this(o)),
            8 & n ||
              ("object" == typeof o &&
                o &&
                ((4 & n && o.__esModule) || (16 & n && "function" == typeof o.then))))
          )
            return o;
          var f = Object.create(null);
          r.r(f);
          var a = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var d = 2 & n && o; "object" == typeof d && !~e.indexOf(d); d = t(d))
            Object.getOwnPropertyNames(d).forEach((e) => (a[e] = () => o[e]));
          return ((a.default = () => o), r.d(f, a), f);
        };
      })(),
      (r.d = (e, t) => {
        for (var o in t)
          r.o(t, o) && !r.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
      }),
      (r.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (r.r = (e) => {
        ("undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      }),
      (r.p =
        "https://assets.create.roblox.com/store/7820b664c29b4b15235ad49217c53b00e6f2d065/_next/"),
      (() => {
        var e = { 68: 0 };
        r.O.j = (t) => 0 === e[t];
        var t = (t, o) => {
            var n,
              f,
              [a, d, i] = o,
              l = 0;
            if (a.some((t) => 0 !== e[t])) {
              for (n in d) r.o(d, n) && (r.m[n] = d[n]);
              if (i) var c = i(r);
            }
            for (t && t(o); l < a.length; l++)
              ((f = a[l]), r.o(e, f) && e[f] && e[f][0](), (e[f] = 0));
            return r.O(c);
          },
          o = (self.webpackChunk_N_E = self.webpackChunk_N_E || []);
        (o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o))));
      })(),
      (r.nc = void 0));
  })());
