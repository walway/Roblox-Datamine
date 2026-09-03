!(function () {
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
      (e._sentryDebugIds[t] = "7764cee9-a4fb-4c65-a115-5ae9f2b17959"),
      (e._sentryDebugIdIdentifier = "sentry-dbid-7764cee9-a4fb-4c65-a115-5ae9f2b17959"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [500],
  {
    9818: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (e, t, n) => {
        let { significand: r, exponent: a } = e;
        return (void 0 === r || void 0 === a ? 0 : r * 10 ** a).toLocaleString(
          null == n ? void 0 : n.toString(),
          { currency: null != t ? t : "USD", style: "currency" }
        );
      };
    },
    14819: (e, t, n) => {
      n.d(t, { A: () => E });
      var r = n(37876),
        a = n(14232),
        l = n(70108),
        o = n(5269),
        s = n(64774),
        u = n(71684),
        i = n(43644),
        d = n(48230),
        c = n.n(d),
        g = n(80087),
        v = n(42709),
        p = n(28512),
        f = n(76386);
      let y = { loadError: "thumbnailLoadError", stalledLoad: "thumbnailStalledLoad" },
        h = new Map();
      function S(e, t) {
        return "".concat(e).concat("\0").concat(t);
      }
      function m(e, t, n) {
        let r = S(e, t),
          a = h.get(r);
        a && (a.delete(n), 0 === a.size && h.delete(r));
      }
      function b(e, t) {
        var n;
        let r = h.get(S(e, t));
        return null != (n = null == r ? void 0 : r.size) ? n : 0;
      }
      function w(e) {
        let {
            delayMs: t = 0,
            enabled: n = !0,
            reason: r,
            targetId: l,
            thumbnailStatus: o,
            thumbnailType: s
          } = e,
          { emitSentryPageIssue: u, pageKey: i } = (0, v.A)(),
          d = "stalledLoad" === r,
          c = (0, a.useRef)(o);
        ((c.current = o),
          (0, a.useEffect)(() => {
            if (n) {
              let e = S(i, r),
                t = h.get(e);
              (t || ((t = new Set()), h.set(e, t)), t.add(l));
            } else m(i, r, l);
            return () => m(i, r, l);
          }, [n, i, r, l]));
        let g = (0, a.useCallback)(() => b(i, r) >= f.Ng, [i, r]),
          w = (0, a.useCallback)(() => {
            let e = b(i, r),
              t = c.current;
            u("ThumbnailTelemetry", r, {
              extra: { count: e, thumbnailStatus: t },
              tags: {
                countBucket: e <= 30 ? "1-30" : e <= 75 ? "31-75" : e <= 150 ? "76-150" : "150+",
                thumbnailStatus: null != t ? t : "none",
                thumbnailType: s
              }
            });
          }, [u, i, r, s]);
        (0, p.A)({
          canReport: g,
          dedupeKey: y[r],
          delayMs: t,
          enabled: n,
          pageKey: i,
          report: w,
          sampleRate: d ? f.bA : void 0,
          suppressOnSlowConnection: d
        });
      }
      var k = n(20823);
      function T(e, t, n) {
        let { compact: r, desktop: a, webView: l } = n;
        return t ? l : { ...a, [e.breakpoints.down(k.Yr)]: r };
      }
      let C = (0, n(46180).A)()((e, t) => {
        let { isWebViewAvailable: n } = t;
        return {
          detailsIcon: {
            "&:hover": { backgroundColor: e.palette.surface[300], opacity: "50%" },
            backgroundColor: e.palette.content.inverse,
            borderRadius: 3,
            height: 30,
            paddingLeft: 7,
            paddingTop: 7,
            position: "absolute",
            width: 30,
            ...T(e, n, {
              compact: { left: 80, top: 5 },
              desktop: { left: 152, top: 18 },
              webView: { left: "auto", right: 4, top: 4 }
            })
          },
          packageIcon: { ...(n && { fontSize: 12 }) },
          packageIconContainer: {
            backgroundColor: e.palette.content.inverse,
            borderRadius: 3,
            position: "absolute",
            ...T(e, n, {
              compact: { left: 80, top: 80 },
              desktop: {
                height: 30,
                left: 152,
                paddingLeft: 7,
                paddingTop: 7,
                top: 152,
                width: 30
              },
              webView: {
                height: 20,
                left: "auto",
                paddingLeft: 4,
                paddingTop: 0,
                right: 4,
                top: 54,
                width: 20
              }
            })
          }
        };
      });
      var A = n(26521);
      let E = (e) => {
        let {
            alt: t,
            assetLink: n,
            containerClass: d,
            gridClassName: v,
            thumbnailImgClassName: p,
            isPackage: y = !1,
            isHoveringAssetTile: h = !1,
            thumbnailSize: S = l.I1._250x250,
            targetId: m,
            type: b,
            onClick: k,
            onZoomClick: T,
            onLoadThumbnailStatus: E,
            includeBackground: I = !1,
            previewImageIds: L,
            mediaImgClassName: M,
            children: P
          } = e,
          { isWebViewAvailable: D } = (0, g.U1)(),
          { classes: R } = C({ isWebViewAvailable: D }),
          x = null != L && L.length > 0,
          j = (0, a.useRef)(0),
          [B, N] = (0, a.useState)(0),
          [q, Q] = (0, a.useState)(new Set()),
          [U, _] = (0, a.useState)(null);
        (0, a.useEffect)(() => {
          _(null);
        }, [m]);
        let z = (0, a.useMemo)(
            () => (x ? [m, ...L].filter((e) => e === m || !q.has(e)) : [m]),
            [x, m, L, q]
          ),
          K = (0, a.useCallback)(() => {
            (clearInterval(j.current), (j.current = 0), N(0));
          }, []),
          F = (0, a.useCallback)(() => {
            (clearInterval(j.current),
              (j.current = window.setInterval(() => {
                N((e) => e + 1);
              }, 1e3)));
          }, []);
        (0, a.useEffect)(
          () => () => {
            K();
          },
          [K]
        );
        let O = x && B % z.length != 0,
          V = x ? z[B % z.length] : m,
          H = O ? l.I1._768x432 : S,
          Y = (0, a.useCallback)(
            (e) => {
              (V === m && _(e),
                x ? e === l.T1.Blocked && Q((e) => new Set(e).add(V)) : null == E || E(e));
            },
            [V, x, E, m]
          ),
          $ = U === l.T1.Error || U === l.T1.TemporarilyUnavailable,
          Z = null === U || U === l.T1.Pending;
        return (
          w({
            delayMs: f.$Y,
            enabled: $,
            reason: "loadError",
            targetId: m,
            thumbnailStatus: U,
            thumbnailType: b
          }),
          w({
            delayMs: f.p6,
            enabled: Z,
            reason: "stalledLoad",
            targetId: m,
            thumbnailStatus: U,
            thumbnailType: b
          }),
          (0, r.jsxs)(o.A, {
            container: !0,
            direction: "column",
            onClick: k,
            className: v,
            "data-testid": "".concat(A.og, "assetThumbnailContainer"),
            onMouseEnter: x ? F : void 0,
            onMouseLeave: x ? K : void 0,
            children: [
              x &&
                z.map((e) =>
                  (0, r.jsx)(
                    "div",
                    {
                      hidden: !0,
                      children: (0, r.jsx)(l.PV, {
                        alt: t,
                        targetId: e,
                        type: b,
                        size: e === m ? S : l.I1._768x432
                      })
                    },
                    e
                  )
                ),
              (0, r.jsx)(l.PV, {
                alt: t,
                imgClassName: O ? M : p,
                containerClass: d,
                targetId: V,
                type: b,
                size: H,
                onLoadThumbnailStatus: Y,
                includeBackground: I
              }),
              y &&
                (0, r.jsx)("div", {
                  className: R.packageIconContainer,
                  children: (0, r.jsx)(s.A, { fontSize: "small", className: R.packageIcon })
                }),
              P,
              h &&
                n &&
                (0, r.jsx)(u.A, {
                  "aria-label": "detailsButton",
                  className: R.detailsIcon,
                  color: "secondary",
                  component: c(),
                  href: n,
                  "data-testid": "zoomIcon",
                  onClick: (e) => {
                    (e.stopPropagation(), null == T || T());
                  },
                  children: (0, r.jsx)(i.$Zd, { fontSize: "medium" })
                })
            ]
          })
        );
      };
    },
    22067: (e, t, n) => {
      n.d(t, { A: () => a });
      var r = n(82105);
      function a(e) {
        var t, n, a, l, o, s, u, i, d, c, g, v, p, f, y, h;
        let S =
            null != (v = null == (n = e.creatorStoreAsset) || null == (t = n.asset) ? void 0 : t.id)
              ? v
              : 0,
          m = null == (l = e.creatorStoreAsset) || null == (a = l.asset) ? void 0 : a.assetTypeId,
          b = (0, r.d)(m),
          w =
            null !=
            (p = null == (s = e.creatorStoreAsset) || null == (o = s.asset) ? void 0 : o.name)
              ? p
              : "",
          k =
            null !=
            (f = null == (i = e.creatorStoreAsset) || null == (u = i.creator) ? void 0 : u.name)
              ? f
              : "",
          T = null != (y = null == (d = e.creatorStoreAsset) ? void 0 : d.voting) ? y : null,
          C =
            null !=
            (h =
              null == (g = e.creatorStoreAsset) || null == (c = g.creatorStoreProduct)
                ? void 0
                : c.purchasePrice)
              ? h
              : null,
          { dateSaved: A, owned: E } = e;
        return {
          categoryType: m,
          creatorName: k,
          dateSaved: A,
          owned: E,
          price: C,
          targetId: S,
          targetName: w,
          targetType: b,
          voting: T
        };
      }
    },
    28512: (e, t, n) => {
      n.d(t, { A: () => c });
      var r = n(14232),
        a = n(89099),
        l = n.n(a);
      let o = new Map(),
        s = new Map();
      function u() {
        (o.clear(), s.clear());
      }
      let i = !1;
      var d = n(76386);
      function c(e) {
        let {
            canReport: t,
            confirmShouldFire: n,
            dedupeKey: a,
            delayMs: c = 0,
            enabled: g = !0,
            pageKey: v,
            report: p,
            sampleRate: f,
            suppressOnSlowConnection: y = !1
          } = e,
          h = (function (e, t) {
            let n = "".concat(e, "\0").concat(t),
              r = s.get(n);
            return (null == r && ((r = Math.random()), s.set(n, r)), r);
          })(v, a),
          S = (0, r.useRef)({ confirmShouldFire: n, enabled: g, report: p });
        ((S.current = { confirmShouldFire: n, enabled: g, report: p }),
          (0, r.useEffect)(() => {
            if (
              (!i &&
                (null === l() || void 0 === l() ? void 0 : l().events) &&
                (l().events.on("routeChangeComplete", u), (i = !0)),
              !g)
            )
              return;
            let e = () => {
              let e,
                { confirmShouldFire: n, enabled: r } = S.current;
              !(!r || (n && !n()) || (y && (0, d.Q5)())) &&
                (!t || t()) &&
                (null == f || !(h >= f)) &&
                (null == (e = o.get(v)) || !e.has(a)) &&
                (e || ((e = new Set()), o.set(v, e)), e.add(a), 1) &&
                S.current.report();
            };
            if (c <= 0) return void e();
            let n = setTimeout(e, c);
            return () => clearTimeout(n);
          }, [t, a, c, g, v, f, h, y]));
      }
    },
    28581: (e, t, n) => {
      n.d(t, { A: () => o });
      var r = n(16999),
        a = n(98043),
        l = n(91217);
      function o(e) {
        var t;
        let n = null == (t = (0, l.A)(e)) ? void 0 : t.status;
        if (void 0 !== n) return n;
        if (e instanceof a.p)
          switch (e.type) {
            case a.b.Archived:
              return r.vi.GONE;
            case a.b.Moderated:
              return r.vi.FORBIDDEN;
          }
        return r.vi.INTERNAL_SERVER_ERROR;
      }
    },
    31540: (e, t, n) => {
      n.d(t, { A: () => y });
      var r = n(67434),
        a = n(14e3),
        l = n(89099);
      let o = "sortBy",
        s = r.x_.DateSaved,
        u = "sortDirection",
        i = r.UEL.Descending,
        d = "savesSearch",
        c = "targetType",
        g = "hideOwnedAssets",
        v = "page",
        p = "limit",
        f = (e, t) => {
          let n = e ? Number(e) : NaN;
          return Number.isInteger(n) ? n : t;
        };
      function y() {
        var e, t, n, r;
        let y = (0, l.useRouter)(),
          h = (0, a.useSearchParams)(),
          S = null != (e = h.get(o)) ? e : s,
          m = null != (t = h.get(u)) ? t : i,
          b = null != (n = h.get(d)) ? n : null,
          w = null != (r = h.get(c)) ? r : null,
          k = "true" === h.get(g),
          T = f(h.get(v), 1),
          C = f(h.get(p), 30),
          A = (e, t) => {
            let n = new URLSearchParams(h.toString());
            (t ? n.set(e, t) : n.delete(e), y.push({ query: n.toString() }));
          };
        return {
          sortBy: S,
          sortDirection: m,
          updateSort: (e, t) => {
            let n = new URLSearchParams(h.toString());
            (n.set(o, e), n.set(u, t), y.push({ query: n.toString() }));
          },
          searchTerm: b,
          updateSearchTerm: (e) => {
            A(d, e);
          },
          targetType: w,
          updateTargetType: (e) => {
            A(c, e);
          },
          hideOwnedAssets: k,
          updateHideOwnedAssets: (e) => {
            A(g, e ? "true" : null);
          },
          page: T,
          updatePage: (e) => {
            A(v, e.toString());
          },
          limit: C,
          updateLimit: (e) => {
            A(p, e.toString());
          },
          hasFilters: k || null !== w || null !== b,
          removeFilters: () => {
            let e = new URLSearchParams(h.toString());
            (e.delete(o),
              e.delete(u),
              e.delete(d),
              e.delete(c),
              e.delete(g),
              y.push({ query: e.toString() }));
          }
        };
      }
    },
    38248: (e, t, n) => {
      n.d(t, { A: () => u, u: () => s });
      var r = n(14232),
        a = n(98591),
        l = n(28581),
        o = n(76386);
      function s(e, t) {
        let { error: n, failureCount: r, fetchStatus: o } = t;
        return {
          error: (0, a.A)(n),
          errorCode: n ? (0, l.A)(n) : void 0,
          failureCount: r,
          fetchStatus: o,
          source: e
        };
      }
      function u(e) {
        let t = (0, r.useRef)(e);
        return (
          (t.current = e),
          {
            resolveDiagnostics: (0, r.useCallback)(() => {
              var e, n;
              let { connection: r } = navigator,
                a = {
                  effectiveConnectionType:
                    null != (e = null == r ? void 0 : r.effectiveType) ? e : o.PC,
                  downlink: (null == r ? void 0 : r.downlink) != null ? String(r.downlink) : o.PC,
                  rtt: (null == r ? void 0 : r.rtt) != null ? String(r.rtt) : o.PC,
                  onLine: navigator.onLine
                },
                l = null != (n = t.current) ? n : [],
                s = Object.fromEntries(
                  l.map((e) => {
                    let { fetchStatus: t, source: n } = e;
                    return ["query.".concat(n), null != t ? t : o.PC];
                  })
                );
              return { networkInfo: a, diagnostics: l, diagnosticTags: s };
            }, [])
          }
        );
      }
    },
    42709: (e, t, n) => {
      n.d(t, { A: () => i });
      var r = n(14232),
        a = n(89099),
        l = n(18334),
        o = n(52863),
        s = n(38248),
        u = n(76386);
      function i(e) {
        let t = (0, a.useRouter)(),
          { locale: n } = (0, o.B2)(),
          i = t.asPath.split("?")[0],
          d = null != n ? n : u.PC,
          { resolveDiagnostics: c } = (0, s.A)(e);
        return {
          emitSentryPageIssue: (0, r.useCallback)(
            (e, t, n) => {
              let { extra: r, level: a = "warning", tags: o } = n,
                { networkInfo: s, diagnostics: i, diagnosticTags: g } = c(),
                v = "stalledLoad" === t,
                p = v
                  ? (function (e) {
                      if ("undefined" == typeof performance || !performance.getEntriesByType)
                        return { slowResources: [], recentResourceCount: 0, slowResourceCount: 0 };
                      let t = performance
                          .getEntriesByType("resource")
                          .filter((t) => t.startTime >= performance.now() - e),
                        n = t
                          .filter((e) => e.duration >= 1e4)
                          .sort((e, t) => t.duration - e.duration)
                          .slice(0, 5)
                          .map((e) => {
                            let t = e.transferSize > 0 || e.requestStart > 0,
                              n =
                                e.secureConnectionStart > 0
                                  ? e.secureConnectionStart
                                  : e.connectEnd,
                              r =
                                e.secureConnectionStart > 0
                                  ? Math.round(e.connectEnd - e.secureConnectionStart)
                                  : 0;
                            return {
                              url: e.name,
                              dns: t ? Math.round(e.domainLookupEnd - e.domainLookupStart) : -1,
                              tcp: t ? Math.round(n - e.connectStart) : -1,
                              tls: t ? r : -1,
                              ttfb: t ? Math.round(e.responseStart - e.requestStart) : -1,
                              download: t ? Math.round(e.responseEnd - e.responseStart) : -1,
                              total: Math.round(e.duration),
                              transferSize: e.transferSize,
                              timingAvailable: t
                            };
                          }),
                        r = t.filter((e) => e.duration >= 1e4).length;
                      return {
                        slowResources: n,
                        recentResourceCount: t.length,
                        slowResourceCount: r
                      };
                    })(u.SH)
                  : void 0,
                f =
                  v &&
                  i.length > 0 &&
                  i.every((e) => "fetching" === e.fetchStatus || "paused" === e.fetchStatus);
              (0, l.wd)("[".concat(e, "] ").concat(t), {
                extra: {
                  ...r,
                  networkInfo: s,
                  ...(p && { resourceTiming: p }),
                  ...(i.length > 0 && { queryDiagnostics: i })
                },
                level: a,
                tags: {
                  "network.effectiveConnectionType": s.effectiveConnectionType,
                  "network.downlink": s.downlink,
                  "network.onLine": String(s.onLine),
                  "network.rtt": s.rtt,
                  ...(v && i.length > 0 && { allQueriesStalled: String(f) }),
                  locale: d,
                  reason: t,
                  ...g,
                  ...o
                }
              });
            },
            [d, c]
          ),
          pageKey: i
        };
      }
    },
    55061: (e, t, n) => {
      n.d(t, { jg: () => R, cI: () => D, hr: () => x, ix: () => I });
      var r = n(37876),
        a = n(95372),
        l = n(52863),
        o = n(38455),
        s = n(71997),
        u = n(97688),
        i = n(86504),
        d = n(14232),
        c = n(11764),
        g = n(37112),
        v = n(48230),
        p = n.n(v);
      function f(e) {
        let { link: t, target: n, translationKey: a } = e,
          { translateHTML: o } = (0, l.Bd)();
        return (0, r.jsx)("span", {
          children: o(a, [
            {
              closing: "linkEnd",
              content: (e) =>
                (0, r.jsx)(p(), {
                  target: n,
                  href: t,
                  style: { textDecoration: "underline" },
                  children: e
                }),
              opening: "linkStart"
            }
          ])
        });
      }
      var y = n(21226),
        h = n(3088),
        S = n(30580),
        m = n(54617),
        b = n(82105),
        w = n(54716),
        k = n(22067),
        T = n(31540);
      let C = "creatorStoreSaves_",
        A = "".concat(C, "useSaves");
      function E(e, t) {
        return ["".concat(C, "useIsTargetSaved"), e, t];
      }
      function I(e) {
        let { sendEvent: t } = (0, h.MP)(),
          { translate: n } = (0, l.Bd)(),
          { setMessageAndSeverity: r } = (0, a.dh)(),
          u = (0, o.I)({
            queryKey: [A, e],
            queryFn: async () => {
              var n, r, a;
              t(S.Ur.SavesListed, {
                hideOwnedAssets: null != (n = e.hideOwnedAssets) && n,
                search: e.keyword,
                sortBy: e.sortBy,
                sortDirection: e.sortDirection,
                targetType: null != (r = e.targetType) ? r : void 0
              });
              let l = await c.Ay.getSaves(e);
              return { ...l, saves: null != (a = l.saves) ? a : [] };
            },
            placeholderData: s.rX
          });
        return (
          (0, d.useEffect)(() => {
            u.error && r({ severity: "error", translatedMessage: n("Label.SavedPageError") });
          }, [u.error, r, n]),
          u
        );
      }
      function L(e, t, n, r) {
        return {
          assetId: e.targetId,
          assetSubTypes: "",
          assetTypeId: (0, b.h)(e.targetType),
          currencyCode: null,
          isPaid: !1,
          price: null,
          ...r,
          page: t,
          type: n
        };
      }
      function M(e, t, n, r) {
        1 === e && (t > 1 ? n(t - 1) : r.invalidateQueries({ queryKey: [A] }));
      }
      function P(e, t) {
        var n, r;
        return {
          ...e,
          totalCount: e.totalCount - t.length,
          saves:
            null !=
            (r =
              null == (n = e.saves)
                ? void 0
                : n.filter((e) => {
                    let { targetId: n, targetType: r } = (0, k.A)(e);
                    return !t.some((e) => e.targetId === n && e.targetType === r);
                  }))
              ? r
              : null
        };
      }
      function D(e, t) {
        let n = (0, u.jE)(),
          { sendEvent: r } = (0, h.MP)(),
          { translate: o } = (0, l.Bd)(),
          { setMessageAndSeverity: s } = (0, a.dh)(),
          { page: d, updatePage: g } = (0, T.A)(),
          { user: v } = (0, y.kQ)(),
          p = (0, m.A)(t);
        return (0, i.n)({
          mutationKey: ["".concat(C, "useDeleteSave")],
          mutationFn: async (e) => {
            await c.Ay.deleteSave({ targetId: e.targetId, targetType: e.targetType });
          },
          onError: () => {
            s({ severity: "error", translatedMessage: o("Error.UnexpectedError") });
          },
          onSuccess: (t, a) => {
            (r(S.Ur.SaveToggled, L(a, e, "delete", p)),
              s({ hideIcon: !0, severity: "info", translatedMessage: o("Label.SaveRemoved") }),
              n.setQueryData(E(a, null == v ? void 0 : v.id), !1),
              n.setQueriesData({ queryKey: [A] }, (e) => P(e, [a])),
              M(1, d, g, n));
          }
        });
      }
      function R() {
        let e = (0, u.jE)(),
          { sendEvent: t } = (0, h.MP)(),
          { translate: n } = (0, l.Bd)(),
          { setMessageAndSeverity: r } = (0, a.dh)(),
          { page: o, updatePage: s } = (0, T.A)(),
          {
            targetType: d,
            sortBy: g,
            sortDirection: v,
            searchTerm: p,
            hideOwnedAssets: f
          } = (0, T.A)(),
          { user: m } = (0, y.kQ)();
        return (0, i.n)({
          mutationKey: ["".concat(C, "useBulkDeleteSaves")],
          mutationFn: async (e) => {
            await c.Ay.bulkDeleteSaves({ targets: e });
          },
          onMutate: (e) => {
            t(S.Ur.BulkDeleteClicked, {
              count: e.length,
              hideOwnedAssets: f,
              search: null != p ? p : void 0,
              sortBy: g,
              sortDirection: v,
              targetType: null != d ? d : void 0
            });
          },
          onError: () => {
            r({ severity: "error", translatedMessage: n("Error.UnexpectedError") });
          },
          onSuccess: (n, r) => {
            (r.forEach((e) => {
              t(S.Ur.SaveToggled, L(e, "saved", "delete"));
            }),
              r.forEach((t) => e.setQueryData(E(t, null == m ? void 0 : m.id), !1)),
              e.setQueriesData({ queryKey: [A] }, (e) => P(e, r)),
              M(r.length, o, s, e));
          }
        });
      }
      function x(e) {
        let { target: t, enabled: n = !0, page: s } = e,
          { user: v, login: p } = (0, y.kQ)(),
          { mutate: b, isPending: k } = (function (e, t) {
            let n = (0, u.jE)(),
              { sendEvent: o } = (0, h.MP)(),
              { translate: s } = (0, l.Bd)(),
              { setMessageAndSeverity: d } = (0, a.dh)(),
              { user: v } = (0, y.kQ)(),
              p = (0, m.A)(t);
            return (0, i.n)({
              mutationKey: ["".concat(C, "useCreateSave")],
              mutationFn: async (e) => {
                await c.Ay.createSave({ targetId: e.targetId, targetType: e.targetType });
              },
              onError: (e) => {
                if (e.message === c.qs)
                  return void d({
                    severity: "error",
                    translatedMessage: s("Error.MaxSavesReached")
                  });
                d({ severity: "error", translatedMessage: s("Error.UnexpectedError") });
              },
              onSuccess: (t, a) => {
                (o(S.Ur.SaveToggled, L(a, e, "create", p)),
                  d({
                    severity: "success",
                    hideIcon: !0,
                    translatedMessage: (0, r.jsx)(f, {
                      translationKey: "Label.SaveCreated",
                      link: "/".concat(g.jd.Saved),
                      target: void 0
                    })
                  }),
                  n.setQueryData(E(a, null == v ? void 0 : v.id), !0),
                  n.invalidateQueries({ queryKey: [A] }));
              }
            });
          })(s, t.targetId),
          { mutate: T, isPending: I } = D(s, t.targetId),
          { data: M, isLoading: P } = (function (e, t) {
            var n, r, a;
            let { user: l, isFetched: s } = (0, y.kQ)();
            return (0, o.I)({
              queryKey: E(e, null == l ? void 0 : l.id),
              queryFn: async () => {
                var t;
                return (
                  !!l &&
                  !!(null ==
                  (t = (await c.Ay.getSaves({ targetId: e.targetId, targetType: e.targetType }))
                    .saves)
                    ? void 0
                    : t.length)
                );
              },
              enabled: (null == (n = null == t ? void 0 : t.enabled) || n) && s,
              staleTime: null != (r = null == t ? void 0 : t.staleTime) ? r : w.uI,
              retry: null != (a = null == t ? void 0 : t.retry) ? a : w.ht
            });
          })(t, { enabled: n }),
          R = (0, d.useCallback)(() => {
            if (!v) return p();
            M ? T(t) : b(t);
          }, [M, T, b, t, v, p]);
        return { isSaved: M, handleClick: R, isLoading: P || k || I };
      }
    },
    76386: (e, t, n) => {
      n.d(t, {
        $Y: () => u,
        Ng: () => i,
        PC: () => r,
        Q5: () => g,
        SH: () => c,
        Ze: () => o,
        bA: () => d,
        dE: () => a,
        p6: () => s,
        ry: () => l
      });
      let r = "unknown";
      function a(e) {
        return e >= 400 && e < 500;
      }
      let l = 1e4,
        o = 15e3,
        s = 15e3,
        u = 3e3,
        i = 30,
        d = 0.1,
        c = 2e4;
      function g() {
        var e;
        let t = null == (e = navigator.connection) ? void 0 : e.downlink;
        return null == t || t <= 8;
      }
    },
    91217: (e, t, n) => {
      n.d(t, { A: () => r });
      function r(e) {
        return e && "object" == typeof e && "response" in e
          ? e.response
          : e && "object" == typeof e && "json" in e
            ? e
            : null;
      }
    }
  }
]);
