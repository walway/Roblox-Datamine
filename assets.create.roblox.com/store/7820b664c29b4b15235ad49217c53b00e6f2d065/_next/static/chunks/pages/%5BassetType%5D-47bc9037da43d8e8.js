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
      d = new e.Error().stack;
    d &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[d] = "e4d53f82-ef7e-4a9c-bdfc-696e8d92149b"),
      (e._sentryDebugIdIdentifier = "sentry-dbid-e4d53f82-ef7e-4a9c-bdfc-696e8d92149b"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [98],
    {
      60372: (e, d, n) => {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/[assetType]",
          function () {
            return n(70502);
          }
        ]);
      },
      70502: (e, d, n) => {
        "use strict";
        (n.r(d), n.d(d, { default: () => i }));
        var s = n(37876);
        n(14232);
        var t = n(16999),
          r = n(89099),
          f = n(53519),
          u = n(58884),
          o = n(65111);
        let i = () => {
          let e = (0, r.useRouter)();
          return (0, o.A)(e.query.assetType)
            ? (0, s.jsx)(f.A, {})
            : (0, s.jsx)(u.A, { errorCode: t.vi.NOT_FOUND });
        };
      }
    },
    (e) => {
      (e.O(0, [322, 216, 350, 381, 500, 921, 656, 519, 636, 593, 792], () => e((e.s = 60372))),
        (_N_E = e.O()));
    }
  ]));
