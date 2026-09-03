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
      (e._sentryDebugIds[t] = "0f18ab55-d74f-46e7-a4be-06de9d8fc5b9"),
      (e._sentryDebugIdIdentifier = "sentry-dbid-0f18ab55-d74f-46e7-a4be-06de9d8fc5b9"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [921],
  {
    5043: (e, t, a) => {
      a.d(t, {
        Bo: () => y,
        CG: () => b,
        KC: () => o,
        T_: () => i,
        VE: () => p,
        WA: () => l,
        z9: () => s
      });
      var n = a(67434),
        r = a(50479);
      let i = 50,
        o = 30,
        s = 30,
        l = 20,
        c = {
          [n.Tx5.AudioDuration]: n.dOQ.Duration,
          [n.Tx5.CreateTime]: n.dOQ.DateCreated,
          [n.Tx5.Ratings]: n.dOQ.Ratings,
          [n.Tx5.Relevance]: n.dOQ.Relevance,
          [n.Tx5.Top]: n.dOQ.Top,
          [n.Tx5.Trending]: n.dOQ.Trending,
          [n.Tx5.UpdatedTime]: n.dOQ.Updated
        },
        d = {
          [n.dOQ.DateCreated]: n.Tx5.CreateTime,
          [n.dOQ.Duration]: n.Tx5.AudioDuration,
          [n.dOQ.Ratings]: n.Tx5.Ratings,
          [n.dOQ.Relevance]: n.Tx5.Relevance,
          [n.dOQ.Top]: n.Tx5.Top,
          [n.dOQ.Trending]: n.Tx5.Trending,
          [n.dOQ.Updated]: n.Tx5.UpdatedTime
        },
        u = { [n.hcb.Music]: n.yrH.Music, [n.hcb.SoundEffect]: n.yrH.SoundEffect };
      function p(e) {
        if (null !== e) return c[e];
      }
      let m = new Set(["searchCategoryType", "searchView", "maxPageSize"]),
        h = { ...r.F, image: null };
      function g(e) {
        return null !== e && "object" == typeof e && !Array.isArray(e);
      }
      function v(e, t, a, r) {
        var i, o, s, l;
        return {
          categoryPath: r,
          facets: t.facets,
          image: null == (i = t.image) ? void 0 : i.base64,
          includeOnlyVerifiedCreators: t.includeOnlyVerifiedCreators,
          maxPageSize: a,
          maxPriceCents: 100 * t.maxPrice,
          minPriceCents: 100 * t.minPrice,
          pageNumber: t.pageNumber,
          query: t.keyword,
          searchCategoryType: e,
          searchView: n.Qt7.Core,
          sortCategory: null != (o = t.sortCategory) ? o : void 0,
          sortDirection: null != (s = t.sortDirection) ? s : void 0,
          tags: t.tags,
          ...(e === n.HPC.Audio && {
            audioSearchFilters: {
              album: t.album,
              artist: t.artistName,
              audioTypes: t.audioTypes,
              maxDurationSeconds: t.maxDuration,
              minDurationSeconds: t.minDuration,
              musicChartType: null != (l = t.musicChartType) ? l : void 0
            }
          }),
          ...(e === n.HPC.Model && {
            modelSearchFilters: {
              excludedSubTypes: t.excludedSubTypes,
              includedInstanceTypes:
                0 === t.includedInstanceTypes.length ? void 0 : t.includedInstanceTypes,
              includedSubTypes: t.includedSubTypes
            }
          })
        };
      }
      let f = Object.fromEntries(Object.values(n.HPC).map((e) => [e, v(e, h)]));
      function b(e, t, a, n) {
        return (function e(t, a) {
          return Object.fromEntries(
            Object.entries(t).flatMap((t) => {
              let [n, r] = t;
              if (m.has(n)) return [[n, r]];
              let i = a[n];
              if (g(r) && g(i)) {
                let t = e(r, i);
                return Object.keys(t).length > 0 ? [[n, t]] : [];
              }
              return Array.isArray(r) && Array.isArray(i)
                ? r.length === i.length && r.every((e, t) => e === i[t])
                  ? []
                  : [[n, r]]
                : r !== i
                  ? [[n, r]]
                  : [];
            })
          );
        })(v(e, t, a, n), f[e]);
      }
      function x(e) {
        if (null == e ? void 0 : e.length)
          return e.filter((e) => e !== n.F5M.Invalid).map((e) => e);
      }
      function y(e, t) {
        var a, r, i, o, s, l, c, p;
        if (!t) return e;
        let m = (null == (a = t.audioTypes) ? void 0 : a.length)
            ? t.audioTypes.map((e) => u[e]).filter((e) => null != e)
            : null == (r = e.audioSearchFilters)
              ? void 0
              : r.audioTypes,
          h = null != (i = t.creatorTargetId) ? i : void 0,
          g = t.creatorType === n.rQH.User ? h : e.userId,
          v = t.creatorType === n.rQH.Group ? h : e.groupId,
          f =
            e.searchCategoryType === n.HPC.Model
              ? {
                  ...e.modelSearchFilters,
                  excludedSubTypes:
                    null != (c = null == (s = e.modelSearchFilters) ? void 0 : s.excludedSubTypes)
                      ? c
                      : x(t.excludeAssetSubTypes),
                  includedSubTypes:
                    null != (p = null == (l = e.modelSearchFilters) ? void 0 : l.includedSubTypes)
                      ? p
                      : x(t.assetSubTypes)
                }
              : e.modelSearchFilters,
          b = e.searchCategoryType === n.HPC.Audio,
          y = !!e.audioSearchFilters || null != m,
          w = b && y ? { ...e.audioSearchFilters, audioTypes: m } : e.audioSearchFilters;
        return {
          ...e,
          audioSearchFilters: w,
          groupId: v,
          modelSearchFilters: f,
          query: e.searchCategoryType === n.HPC.Audio ? e.query || t.keyword : e.query,
          sortCategory: null != t.uiSortIntent ? d[t.uiSortIntent] : e.sortCategory,
          sortDirection: null != (o = t.sortDirection) ? o : e.sortDirection,
          userId: g
        };
      }
    },
    13615: (e, t, a) => {
      a.d(t, { X: () => l, Z: () => c });
      var n = a(38455),
        r = a(54716),
        i = a(76231),
        o = a(80087),
        s = a(28356);
      function l(e) {
        return ["".concat("messageBus_", "getPluginInfo"), e];
      }
      let c = (e) => {
        var t;
        let { assetId: a, isPlugin: c } = (0, i.Ay)(),
          { call: d, isWebViewAvailable: u } = (0, o.U1)(),
          p = (0, n.I)({
            enabled: (null == (t = null == e ? void 0 : e.enabled) || t) && u && c,
            queryFn: async () => {
              try {
                let { isInstalled: e } = await d(s.D.getPluginInfo, { assetId: a });
                return e;
              } catch (e) {
                return !1;
              }
            },
            queryKey: l(a),
            retry: r.ht,
            staleTime: 0
          });
        return { data: p.data, isSuccess: !u || !c || p.isSuccess };
      };
    },
    14469: (e, t, a) => {
      a.d(t, { A: () => w });
      var n = a(37876),
        r = a(14232),
        i = a(47790),
        o = a(83524),
        s = a(5269),
        l = a(43644),
        c = a(71684),
        d = a(52863),
        u = a(20823),
        p = a(80087),
        m = a(3088),
        h = a(30580),
        g = a(89422),
        v = a(67596),
        f = a(14869),
        b = a(48230),
        x = a.n(b);
      let y = (0, a(46180).A)()((e, t) => {
          let { isHeader: a, isWebViewAvailable: n } = t;
          return {
            seeAllIcon: { marginLeft: n ? 2 : 4 },
            seeAllLinkContainer: {
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              zIndex: 1e3
            },
            swimlaneHeader: { marginBottom: a ? 0 : n ? 4 : 8, position: "relative", zIndex: 2 },
            swimlaneHeaderText: n
              ? { color: e.palette.content.action, marginRight: 16, zIndex: 1e3 }
              : { [e.breakpoints.down(u.Yr)]: { lineHeight: "28px" }, zIndex: 1e3 }
          };
        }),
        w = (e) => {
          let t,
            { displayName: a, isHeader: b = !1, seeAllLink: w, swimlaneName: A = "" } = e,
            { translate: C } = (0, d.Bd)(),
            { isWebViewAvailable: k } = (0, p.U1)(),
            { sendEvent: I } = (0, m.MP)(),
            { categoryType: N, swimlaneAttributionPath: j } = (0, g.A)(),
            S = (0, v.A)(),
            T = (0, i.A)((e) => e.breakpoints.down(u.Yr)),
            { classes: P } = y({ isHeader: b, isWebViewAvailable: k }),
            B = (0, r.useCallback)(() => {
              w &&
                I(h.Ur.NavigatePageView, {
                  assetTypeId: null != N ? N : 0,
                  navSwimlane: (0, f.A)(j, A),
                  source: S
                });
            }, [N, w, I, S, j, A]);
          t = k ? "h6" : T ? "h5" : "h2";
          let L = (0, n.jsx)(o.A, {
            component: "h5",
            className: P.swimlaneHeaderText,
            variant: t,
            noWrap: !0,
            children: a
          });
          return (0, n.jsxs)(s.A, {
            container: !0,
            direction: "row",
            justifyContent: k ? "space-between" : "left",
            alignItems: "center",
            className: P.swimlaneHeader,
            wrap: "nowrap",
            children: [
              w
                ? (0, n.jsx)(o.A, {
                    component: x(),
                    href: w,
                    onClick: B,
                    className: P.swimlaneHeaderText,
                    variant: t,
                    noWrap: !0,
                    children: a
                  })
                : L,
              w &&
                (k
                  ? (0, n.jsxs)(x(), {
                      href: w,
                      passHref: !0,
                      "data-testid": "swimlaneSeeAll",
                      onClick: B,
                      className: P.seeAllLinkContainer,
                      children: [
                        (0, n.jsx)(o.A, {
                          color: "secondary",
                          variant: "smallLabel1",
                          noWrap: !0,
                          children: C("Label.SeeAll")
                        }),
                        (0, n.jsx)(l.c_$, {
                          className: P.seeAllIcon,
                          color: "secondary",
                          fontSize: "small"
                        })
                      ]
                    })
                  : (0, n.jsx)(c.A, {
                      "aria-label": "clickSeeAll",
                      className: P.seeAllIcon,
                      component: x(),
                      color: "default",
                      "data-testid": "swimlaneSeeAll",
                      href: w,
                      onClick: B,
                      size: "small",
                      children: (0, n.jsx)(l.c_$, { fontSize: T ? "medium" : "large" })
                    }))
            ]
          });
        };
    },
    14869: (e, t, a) => {
      a.d(t, { A: () => r });
      var n = a(26521);
      function r(e, t) {
        var a;
        if (!t) return "";
        let r = null != (a = null == e ? void 0 : e.split(n.qx).filter(Boolean)) ? a : [];
        return [...r, ...(r[r.length - 1] === t ? [] : [t])].join("/");
      }
    },
    15518: (e, t, a) => {
      a.d(t, { A: () => i });
      var n = a(97979),
        r = a(14232);
      let i = (e, t) => {
        var a;
        let { data: i } = (0, n.q)(e, t),
          o = null != (a = null == i ? void 0 : i.voting) ? a : null;
        return (0, r.useMemo)(() => {
          var e, t, a, n, r;
          return {
            downVotes: null != (e = null == o ? void 0 : o.downVotes) ? e : 0,
            showVotes: null != (t = null == o ? void 0 : o.showVotes) && t,
            upVotePercent: null != (a = null == o ? void 0 : o.upVotePercent) ? a : 0,
            upVotes: null != (n = null == o ? void 0 : o.upVotes) ? n : 0,
            voteCount: null != (r = null == o ? void 0 : o.voteCount) ? r : 0,
            voting: o
          };
        }, [o]);
      };
    },
    17318: (e, t, a) => {
      a.d(t, { A: () => d });
      var n = a(37876);
      a(14232);
      var r = a(48230),
        i = a.n(r),
        o = a(83524),
        s = a(52863),
        l = a(80087);
      let c = (0, a(46180).A)()((e, t) => {
          let { fontSizeOverride: a, isWebViewAvailable: n, linkUnderlineOnHover: r } = t;
          return {
            inlineContainer: {
              color: e.palette.content.muted,
              fontSize: a,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%"
            },
            linkText: {
              "&:hover": { textDecoration: r ? "underline" : void 0 },
              color: n ? e.palette.content.alert.inform : e.palette.content.standard,
              fontSize: a
            }
          };
        }),
        d = (e) => {
          let {
              translationKey: t,
              opening: a,
              closing: r,
              color: d,
              variant: u,
              linkTargetUrl: p,
              linkTargetName: m,
              textClass: h,
              linkClass: g,
              linkUnderlineOnHover: v = !0,
              fontSizeOverride: f,
              openInNewTab: b = !1
            } = e,
            { translateHTML: x } = (0, s.Bd)(),
            { isWebViewAvailable: y } = (0, l.U1)(),
            { classes: w, cx: A } = c({
              fontSizeOverride: f,
              isWebViewAvailable: y,
              linkUnderlineOnHover: v
            });
          return (0, n.jsx)(o.A, {
            color: d,
            variant: u,
            className: h || w.inlineContainer,
            children: x(t, [
              {
                closing: r,
                content: (e) =>
                  (0, n.jsx)(o.A, {
                    component: i(),
                    href: p,
                    target: b ? "_blank" : void 0,
                    color: d,
                    variant: u,
                    className: A(w.linkText, g),
                    children: void 0 !== m ? m : e
                  }),
                opening: a
              }
            ])
          });
        };
    },
    18335: (e, t, a) => {
      a.d(t, { dT: () => U, nk: () => E, nx: () => R, Xp: () => M });
      var n = a(97688),
        r = a(86504),
        i = a(38455),
        o = a(83193),
        s = a(76231),
        l = a(42899),
        c = a(77219),
        d = a(64829),
        u = a(95372),
        p = a(52863),
        m = a(14232),
        h = a(21226),
        g = a(8622),
        v = a(80087),
        f = a(731),
        b = a(90647),
        x = a(3088),
        y = a(30580),
        w = a(66629),
        A = a(55447),
        C = a(96481);
      class k extends w.A {
        purchaseAsset(e, t, a, n, r) {
          return this.authenticatedProductApi.v1ProductPurchasePost({
            robloxMarketplaceFiatMarketplaceFiatProductServiceV1Beta1PurchaseFiatProductRequest: {
              expectedPrice: a,
              productKey: {
                productNamespace: o.qHi.CreatorMarketplaceAsset,
                productTargetId: e.toString(),
                productType: t
              },
              referralSource: n,
              searchId: r
            }
          });
        }
        getFiatPrices(e) {
          return this.priceApi.v1PricesProductNamespaceProductTypeGet({
            productNamespace: o.qHi.CreatorMarketplaceAsset,
            productType: e
          });
        }
        async getPurchaserStatus() {
          var e;
          return null != (e = (await this.accountApi.v1PurchaserStatusGet()).purchaserStatus)
            ? e
            : o.gZe.Allowed;
        }
        constructor(e = (0, A.Ys)("marketplace-fiat-service")) {
          (super(e),
            (this.accountApi = new o.yoT(this.defaultConfiguration)),
            (this.priceApi = new o.eHd(this.defaultConfiguration)),
            (this.authenticatedProductApi = new o.qsL(this.defaultConfiguration).withPostMiddleware(
              C.A
            )));
        }
      }
      let I = new k();
      var N = a(54716),
        j = a(60937);
      class S extends w.A {
        async getProduct(e) {
          return this.authenticatedCloudApi.creatorStoreProductGet({
            fiatProductKey: e.toString()
          });
        }
        constructor(e = (0, A.Ys)("user/cloud")) {
          (super(e),
            (this.authenticatedCloudApi = new o.qDn(this.defaultConfiguration).withPostMiddleware(
              C.A
            )));
        }
      }
      let T = new S();
      var P = a(34512),
        B = a(70248);
      let L = { currencyCode: "USD", quantity: { exponent: 0, significand: 0 } };
      function M(e, t) {
        let a = (0, n.jE)(),
          { user: i } = (0, h.kQ)(),
          { assetTypeId: w } = (0, s.Ay)(e),
          { userId: A, creatorName: C } = (0, l.A)(e),
          { purchasePrice: k } = (0, c.A)(e),
          { setMessageAndSeverity: N } = (0, u.dh)(),
          { translate: S } = (0, p.Bd)(),
          { sendEvent: T } = (0, x.MP)(),
          { referralSource: M, searchId: R } = (0, f.yq)(),
          U = (0, b.p1)(),
          {
            addExcessiveTransactionUserId: E,
            setHasExceededSpendingLimit: O,
            setIsFiatPurchasingAllowed: D
          } = (0, P._$)(),
          { isWebViewAvailable: V } = (0, v.U1)(),
          W = (0, m.useCallback)(
            (t) => {
              let n = null;
              switch (t.purchaseTransactionStatus) {
                case o.oad.AlreadyOwned:
                case o.oad.Success:
                  t.checkoutUrl ||
                    (U(e, !0),
                    (n = {
                      severity: "success",
                      translatedMessage: S("Message.ItemHasBeenAddedtoInventory")
                    }));
                  break;
                case o.oad.NotAllowed:
                  (D(!1),
                    (n = {
                      severity: "error",
                      translatedMessage: S("Message.PurchasesNotAllowed"),
                      translatedTitle: S("Title.PurchaseCannotBeCompleted")
                    }));
                  break;
                case o.oad.ExcessiveTransactionsLimit:
                  (A && E(A),
                    (n = {
                      severity: "error",
                      translatedMessage: S("Message.ExcessiveTransactionsReached"),
                      translatedTitle: S("Title.PurchaseCannotBeCompleted")
                    }));
                  break;
                case o.oad.ExceededSpendingLimit:
                  (O(!0),
                    (n = {
                      severity: "error",
                      translatedMessage: S("Message.ExceededSpendingLimit"),
                      translatedTitle: S("Title.PurchaseCannotBeCompleted")
                    }));
                  break;
                case o.oad.PriceChanged:
                  ((0, j.wv)(a, e, null == i ? void 0 : i.id, {
                    purchasable: !0,
                    purchasePrice: t.actualPrice
                  }),
                    (n = {
                      severity: "info",
                      translatedMessage: S("Message.PriceChanged", { creatorName: C }),
                      translatedTitle: S("Title.PriceChanged")
                    }));
                  break;
                case o.oad.CountryRestricted:
                  (a.cancelQueries({ queryKey: (0, B.X6)() }),
                    a.setQueryData((0, B.X6)(), o.gZe.CountryRestricted),
                    (n = {
                      severity: "error",
                      translatedMessage: S("Message.PurchaseCountryRestricted"),
                      translatedTitle: S("Title.PurchaseCannotBeCompleted")
                    }));
                  break;
                case o.oad.NotPurchasable:
                  ((0, j.wv)(a, e, null == i ? void 0 : i.id, {
                    purchasable: !1,
                    purchasePrice: k
                  }),
                    (n = {
                      severity: "info",
                      translatedMessage: S("Message.NoLongerForSale", { creatorName: C }),
                      translatedTitle: S("Title.PurchaseCannotBeCompleted")
                    }));
                  break;
                case o.oad.TemporarilyRestricted:
                  ((0, j.wv)(a, e, null == i ? void 0 : i.id, {
                    purchasable: !1,
                    purchasePrice: k
                  }),
                    (n = {
                      severity: "error",
                      translatedMessage: S("Message.PurchaseTemporarilyRestricted")
                    }));
              }
              return (n && N(n), t.purchaseTransactionStatus === o.oad.Success && !t.checkoutUrl);
            },
            [e, C, k, a, E, O, D, N, S, U, null == i ? void 0 : i.id, A]
          );
        return (0, r.n)({
          mutationFn: () =>
            I.purchaseAsset(e, (0, d.A)(w), null != k ? k : L, M || void 0, R || void 0),
          onError: () => {
            N({ severity: "error", translatedMessage: S("Message.PurchaseCannotBeCompleted") });
          },
          onSuccess: (a) => {
            var n, r, s, l;
            let c = W(a);
            (T(y.Ur.AssetPurchaseInitiated, {
              ...t,
              currencyCode:
                null != (s = null == (n = a.actualPrice) ? void 0 : n.currencyCode) ? s : "",
              price: (0, g.A)(null == (r = a.actualPrice) ? void 0 : r.quantity),
              transactionStatus: null != (l = a.purchaseTransactionStatus) ? l : o.oad.Invalid
            }),
              c && T(y.Ur.AssetAcquired, t),
              a.purchaseTransactionStatus === o.oad.Success && a.checkoutUrl
                ? V
                  ? ((null == i ? void 0 : i.id) !== void 0 && (0, b.Nv)(i.id, e),
                    window.open(a.checkoutUrl, "_blank"))
                  : (window.location.href = a.checkoutUrl)
                : a.purchaseTransactionStatus === o.oad.NotAllowed &&
                  a.checkoutUrl &&
                  window.open(a.checkoutUrl, "_blank"));
          }
        });
      }
      function R(e) {
        var t, a;
        return (0, i.I)({
          enabled: null == (t = null == e ? void 0 : e.enabled) || t,
          queryFn: async () => I.getPurchaserStatus(),
          queryKey: (0, B.X6)(),
          retry: null != (a = null == e ? void 0 : e.retry) ? a : N.ht,
          staleTime: 1 / 0
        });
      }
      function U(e, t) {
        var a, n;
        return (0, i.I)({
          enabled: null == (a = null == t ? void 0 : t.enabled) || a,
          queryFn: async () => {
            var t;
            return null != (t = (await I.getFiatPrices(e)).basePrices) ? t : null;
          },
          queryKey: ["".concat(B.cY, "useGetBasePrices"), e],
          retry: null != (n = null == t ? void 0 : t.retry) ? n : N.ht,
          staleTime: 1 / 0
        });
      }
      function E(e, t) {
        var a, r;
        let o = (0, n.jE)(),
          { user: l, isFetched: c } = (0, h.kQ)(),
          { isStoreAsset: d } = (0, s.Ay)(e);
        return (0, i.I)({
          enabled: (null == (a = null == t ? void 0 : t.enabled) || a) && c,
          queryFn: async () => {
            if ((null == l ? void 0 : l.id) === void 0 || !d) return null;
            try {
              let t = await T.getProduct(e);
              return ((0, j.wv)(o, e, null == l ? void 0 : l.id, t), t);
            } catch (e) {
              var t, a;
              if (
                "ResponseError" === e.name &&
                ((null == (t = e.response) ? void 0 : t.status) === 429 ||
                  (null == (a = e.response) ? void 0 : a.status) === 404)
              )
                return null;
              throw e;
            }
          },
          queryKey: (0, B.By)(e, null == l ? void 0 : l.id),
          retry: null != (r = null == t ? void 0 : t.retry) ? r : N.ht,
          staleTime: 0
        });
      }
    },
    19334: (e, t, a) => {
      a.d(t, { Tr: () => i, WU: () => o, bj: () => r });
      var n = a(36042);
      function r(e, t) {
        return e ? 0 : t ? 16 : 8;
      }
      let i = n.vM + n.SC,
        o = n.qB + n.SC;
    },
    21588: (e, t, a) => {
      a.d(t, { A: () => b });
      var n = a(37876),
        r = a(14232),
        i = a(71684),
        o = a(43644),
        s = a(98418),
        l = a(16999),
        c = a(80087),
        d = a(46180),
        u = a(51421);
      let p = (e, t) =>
          t < 16 ? "".concat(e, "0").concat(t.toString(16)) : "".concat(e).concat(t.toString(16)),
        m = (0, d.A)()((e, t) => {
          let { containsAssetTiles: a, isWebViewAvailable: n } = t;
          return {
            bumperWrapper: { display: "flex", height: "100%", justifyContent: "end", width: 100 },
            carousel: {
              "& > * ": { flexShrink: 0 },
              "& > *:last-child": { marginRight: 0 },
              "&::-webkit-scrollbar ": { display: "none" },
              display: "flex",
              flexWrap: "nowrap",
              gap: 8,
              overflowX: "scroll",
              paddingBottom: a ? u.wb : 0,
              scrollbarWidth: "none",
              width: "100%",
              ...(n && {
                overscrollBehaviorX: "none",
                overscrollBehaviorY: "auto",
                WebkitAutoScrollBehaviorX: "none",
                WebkitAutoScrollBehaviorY: "auto"
              })
            },
            hoverIconButton: { opacity: 1 },
            iconButton: {
              "&:hover": {
                backgroundColor: n ? e.palette.content.inverse : e.palette.actionV2.primary.fill
              },
              alignSelf: "center",
              backgroundColor: n ? e.palette.content.inverse : e.palette.actionV2.primary.fill,
              color: n ? e.palette.actionV2.primary.fill : e.palette.content.inverse,
              opacity: 0,
              pointerEvents: "all",
              transition: "400ms",
              ...(n && { padding: 8 })
            },
            leftBumper: {
              backgroundImage: "linear-gradient(to right, "
                .concat(p(e.palette.surface[0], 255), ", ")
                .concat(p(e.palette.common.black, 0), ")"),
              direction: "rtl",
              height: a ? "calc(100% - ".concat(u.wb, "px)") : "100%",
              left: -1,
              pointerEvents: "none",
              position: "absolute",
              top: 0,
              zIndex: e.zIndex.speedDial,
              ...(n && { backgroundImage: "none" })
            },
            rightBumper: {
              backgroundImage: "linear-gradient(to left, "
                .concat(p(e.palette.surface[0], 255), ", ")
                .concat(p(e.palette.common.black, 0), ")"),
              direction: "ltr",
              height: a ? "calc(100% - ".concat(u.wb, "px)") : "100%",
              pointerEvents: "none",
              position: "absolute",
              right: -1,
              top: 0,
              zIndex: e.zIndex.speedDial,
              ...(n && { backgroundImage: "none" })
            },
            scrollingCarousel: { overflowX: "scroll" },
            wrapper: { marginBottom: a ? -u.wb : 0, position: "relative", width: "100%" }
          };
        });
      var h = void 0;
      let { getCurrentBrowser: g, Browser: v } = l.jO,
        f = function (e) {
          let t,
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300;
          return [
            function () {
              for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
              (clearTimeout(t),
                (t = setTimeout(() => {
                  e.apply(h, r);
                }, a)));
            },
            () => {
              clearTimeout(t);
            }
          ];
        },
        b = (e) => {
          var t, a, l, d;
          let { children: u, classes: p, containsAssetTiles: h = !1 } = e,
            { isWebViewAvailable: b } = (0, c.U1)(),
            { classes: x, cx: y } = m({ containsAssetTiles: h, isWebViewAvailable: b }),
            w = g(),
            A = (0, r.useRef)(null),
            [C, k] = (0, r.useState)(!1),
            [I, N] = (0, r.useState)(window.innerWidth),
            [j, S] = (0, r.useState)(
              null != (l = null == (t = A.current) ? void 0 : t.scrollLeft) ? l : 0
            ),
            [T, P] = (0, r.useState)(
              null != (d = null == (a = A.current) ? void 0 : a.scrollWidth) ? d : 0
            ),
            B = (0, r.useMemo)(() => 0 === j, [j]),
            L = (0, r.useMemo)(() => j + I >= T, [j, T, I]);
          (0, r.useEffect)(() => {
            var e;
            null == (e = A.current) ||
              e.scrollTo({ behavior: w === v.Safari ? void 0 : "smooth", left: 0 });
          }, [w]);
          let [M] = f((e) => {
            N(e[0].contentRect.width);
          });
          return (
            (0, r.useEffect)(() => {
              let e = new ResizeObserver(M),
                t = null == A ? void 0 : A.current;
              return (
                t && e.observe(t),
                () => {
                  t && e.unobserve(t);
                }
              );
            }, [M]),
            (0, r.useEffect)(() => {
              let e = null == A ? void 0 : A.current,
                t = () => {
                  var t, a;
                  (S(null != (t = null == e ? void 0 : e.scrollLeft) ? t : 0),
                    P(null != (a = null == e ? void 0 : e.scrollWidth) ? a : 0));
                };
              return (
                e && (t(), e.addEventListener("scroll", t)),
                () => {
                  e && e.removeEventListener("scroll", t);
                }
              );
            }, []),
            (0, n.jsxs)("div", {
              onMouseEnter: () => {
                k(!0);
              },
              onMouseLeave: () => {
                k(!1);
              },
              className: x.wrapper,
              children: [
                (0, n.jsx)("div", {
                  ref: A,
                  className: y(x.carousel, null == p ? void 0 : p.carousel),
                  "data-testid": "carouselTestId",
                  children: u
                }),
                (0, n.jsx)("div", {
                  className: x.leftBumper,
                  children:
                    !1 === B &&
                    (0, n.jsx)("div", {
                      className: x.bumperWrapper,
                      children: (0, n.jsx)(i.A, {
                        classes: { root: y(x.iconButton, { [x.hoverIconButton]: C }) },
                        onClick: () => {
                          var e;
                          null == (e = A.current) ||
                            e.scrollBy({
                              behavior: w === v.Safari ? void 0 : "smooth",
                              left: -0.8 * I
                            });
                        },
                        "aria-label": "previous",
                        size: "large",
                        children: (0, n.jsx)(o.fLf, { fontSize: "small" })
                      })
                    })
                }),
                (0, n.jsx)("div", {
                  className: x.rightBumper,
                  children:
                    !1 === L &&
                    (0, n.jsx)("div", {
                      className: x.bumperWrapper,
                      children: (0, n.jsx)(i.A, {
                        classes: { root: y(x.iconButton, { [x.hoverIconButton]: C }) },
                        onClick: () => {
                          var e;
                          null == (e = A.current) ||
                            e.scrollBy({
                              behavior: w === v.Safari ? void 0 : "smooth",
                              left: 0.8 * I
                            });
                        },
                        color: "secondary",
                        "aria-label": "next",
                        size: "large",
                        children: (0, n.jsx)(s.N, { fontSize: "small" })
                      })
                    })
                })
              ]
            })
          );
        };
    },
    26867: (e, t, a) => {
      a.d(t, { A: () => b });
      var n = a(37876),
        r = a(52863),
        i = a(47790),
        o = a(83524),
        s = a(5269),
        l = a(43644),
        c = a(19800),
        d = a(14232),
        u = a(20823),
        p = a(80087),
        m = a(15518),
        h = a(69957),
        g = a(63767),
        v = a(34644);
      let f = (0, a(46180).A)()((e, t) => {
          let {
              isWebViewAssetTile: a,
              isWebViewAvailable: n,
              isMediumSize: r,
              voteCount: i,
              upVotePercent: o
            } = t,
            s = () => {
              let t = (null != o ? o : 0) / 100;
              return (null != i ? i : 0) < v.MK
                ? e.palette.content.muted
                : t >= v.ay
                  ? e.palette.content.alert.active
                  : t < v.ay && t >= v.fu
                    ? e.palette.components.rating.activeFill
                    : e.palette.actionV2.important.fill;
            };
          return {
            icon: { color: s(), marginRight: r ? 8 : 4, ...(n && { fontSize: a ? 12 : 14 }) },
            notEnoughRatings: {
              color: s(),
              fontStyle: "italic",
              marginBottom: "auto",
              marginRight: 8 * !!r,
              marginTop: "auto",
              whiteSpace: "nowrap",
              [e.breakpoints.down(u.Yr)]: {
                textAlign: "right",
                ...(n && { overflow: "hidden", textAlign: "left", textOverflow: "ellipsis" })
              }
            },
            totalVotesText: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
            voteCountContainer: {
              display: "flex",
              marginRight: 8 * !!r,
              overflow: n ? "hidden" : "initial",
              width: "auto"
            },
            votePercentage: { color: s(), marginRight: 4, ...(n && { marginRight: 2 }) }
          };
        }),
        b = (e) => {
          let {
              assetId: t,
              isMediumSize: a = !1,
              isWebViewAssetTile: b = !1,
              showRatingsCount: x = !1,
              showTextWhenNotEnoughRatings: y = !0
            } = e,
            { voteCount: w, upVotePercent: A } = (0, m.A)(t),
            { translate: C } = (0, r.Bd)(),
            { isWebViewAvailable: k } = (0, p.U1)(),
            { classes: I } = f({
              isMediumSize: a,
              isWebViewAssetTile: b,
              isWebViewAvailable: k,
              upVotePercent: A,
              voteCount: w
            }),
            N = (0, i.A)((e) => e.breakpoints.down(u.Yr));
          return (0, d.useMemo)(() => {
            var e;
            let t;
            t = a ? "body1" : b ? "tooltip" : "body2";
            let r = C("Label.MoreVotesNeededTooltip"),
              i = null != w ? w : 0,
              d = (0, h.A)(null != A ? A : 0),
              u = null != (e = (0, g.A)(i)) ? e : "0",
              p = i >= v.am,
              m = b ? u : "(".concat(C("Label.Votes", { count: "".concat(u) }), ")"),
              f = (0, n.jsx)(o.A, {
                color: b ? "secondary" : "inherit",
                variant: t,
                className: I.totalVotesText,
                children: m
              });
            return y || p
              ? p
                ? (0, n.jsxs)(s.A, {
                    alignItems: "center",
                    container: !0,
                    className: I.voteCountContainer,
                    direction: "row",
                    wrap: "nowrap",
                    justifyContent: N && !b ? "right" : "default",
                    "data-testid": "voteCount",
                    children: [
                      (0, n.jsx)(l.kmH, {
                        fontSize: a ? "medium" : "small",
                        className: I.icon,
                        "data-testid": "voteIcon"
                      }),
                      (0, n.jsx)(o.A, { variant: t, className: I.votePercentage, children: d }),
                      (!N || x) &&
                        (i < v.MK
                          ? (0, n.jsx)("span", {
                              children: (0, n.jsx)(c.T, {
                                arrow: !0,
                                placement: "bottom",
                                title: r,
                                children: f
                              })
                            })
                          : f)
                    ]
                  })
                : (0, n.jsx)("span", {
                    children: (0, n.jsx)(c.T, {
                      arrow: !0,
                      placement: "bottom",
                      title: r,
                      children: (0, n.jsxs)(o.A, {
                        variant: t,
                        className: I.notEnoughRatings,
                        children: ["(", C("Label.NotEnoughRatings"), ")"]
                      })
                    })
                  })
              : null;
          }, [
            N,
            a,
            b,
            x,
            y,
            I.icon,
            I.notEnoughRatings,
            I.totalVotesText,
            I.voteCountContainer,
            I.votePercentage,
            C,
            A,
            w
          ]);
        };
    },
    34644: (e, t, a) => {
      a.d(t, { MK: () => r, PX: () => s, am: () => n, ay: () => i, fu: () => o });
      let n = 10,
        r = 20,
        i = 0.7,
        o = 0.4,
        s = 1e3;
    },
    36042: (e, t, a) => {
      a.d(t, { SC: () => i, qB: () => r, vM: () => n });
      let n = 60,
        r = 40,
        i = 80;
    },
    36442: (e, t, a) => {
      a.d(t, { B: () => o, f: () => i });
      var n = a(51421);
      function r(e, t, a, r) {
        let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        return {
          border: i,
          detailsHeight: t - i - a - (e - (i + a) * 2) - n.wX,
          padding: a,
          thumbnailRadius: r,
          width: e
        };
      }
      let i = {
        compact: r(n.xw, n.Qf, n.GY, n._S),
        desktop: r(n.w8, n.b9, n.Zh, n.QT),
        webView: r(n.qn, n.Xn, n.pL, n.L5, n._y)
      };
      function o(e, t) {
        switch (t) {
          case "compact":
            return e.palette.surface[300];
          case "webView":
            return "light" === e.palette.mode
              ? "rgba(51, 59, 76, 0.12)"
              : e.palette.media.secondaryBackground;
          default:
            return e.palette.media.secondaryBackground;
        }
      }
    },
    41455: (e, t, a) => {
      a.d(t, { A: () => v });
      var n = a(14232),
        r = a(97688),
        i = a(52264),
        o = a(59377),
        s = a(76231),
        l = a(42899),
        c = a(89422),
        d = a(14869),
        u = a(731),
        p = a(61606),
        m = a(80087),
        h = a(28356),
        g = a(13615);
      let v = (e) => {
        let { assetId: t, pagePosition: a, swimlaneName: v } = e,
          {
            assetName: f,
            assetSubTypes: b,
            assetTypeId: x,
            capabilities: y,
            hasScripts: w,
            isPlugin: A
          } = (0, s.Ay)(t),
          { isVerified: C } = (0, l.A)(t),
          { call: k, isWebViewAvailable: I } = (0, m.U1)(),
          N = (0, r.jE)(),
          { searchUuid: j } = (0, u.yq)(),
          { searchState: S } = (0, u.sI)(),
          { keyword: T, pageNumber: P, sortCategory: B } = S,
          { swimlaneAttributionPath: L } = (0, c.A)(),
          M = (0, p.A)();
        return {
          onInsertAsset: (0, n.useCallback)(
            async function () {
              let { assetWasDragged: e = !1, event: n } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              if (!I) return;
              (null == n || n.preventDefault(), null == n || n.stopPropagation());
              let r = P * M + a,
                s = (0, d.A)(L, v);
              try {
                var l;
                let { hasInserted: n } = await k(
                  h.D.insertAsset,
                  {
                    assetId: t,
                    assetName: f,
                    assetSubTypes: b,
                    assetTypeId: x,
                    assetWasDragged: e,
                    capabilities: y,
                    currentCategory: null != (l = o.VN.get(null != x ? x : 0)) ? l : o.cN.Unknown,
                    hasScripts: w,
                    insertionMethod: e ? "DragInsert" : "ClickInsert",
                    isVerifiedCreator: C,
                    page: P,
                    pagePosition: a,
                    position: r,
                    searchId: null != j ? j : "",
                    searchKeyword: T,
                    sort: B,
                    swimlaneName: s
                  },
                  m.ig
                );
                return (A && n && N.setQueryData((0, g.X)(t), !0), n);
              } catch (e) {
                if (e.code !== i.rJ.TIMED_OUT) throw e;
                return;
              }
            },
            [t, f, b, x, k, y, w, A, C, I, T, P, a, M, N, j, B, L, v]
          )
        };
      };
    },
    45600: (e, t, a) => {
      a.d(t, { A: () => d });
      var n = a(37876);
      a(14232);
      var r = a(71684),
        i = a(43644),
        o = a(80087),
        s = a(89422),
        l = a(41965);
      let c = (0, a(46180).A)()((e, t) => {
          let { compact: a, isAssetContentPage: n, isPlaying: r, isWebViewAvailable: i } = t,
            o = i && !n ? 16 : a ? 22 : 28,
            s = i && !n ? 12 : a ? 18 : 22,
            c = (function (e, t, a) {
              return t
                ? e
                  ? a.palette.states.active
                  : l.A_
                : e
                  ? a.palette.actionV2.primaryBrand.fill
                  : a.palette.states.active;
            })(r, i, e),
            d = (function (e, t, a) {
              return t
                ? a.palette.actionV2.primaryBrand.fill
                : e
                  ? a.palette.states.active
                  : a.palette.actionV2.primaryBrand.fill;
            })(r, i, e);
          return {
            button: {
              ...(i && { marginTop: 1, padding: 10 }),
              "&:hover": { backgroundColor: d },
              backgroundColor: c,
              height: o,
              width: o
            },
            icon: { color: i ? l.iI : e.palette.background.media, height: s, width: s }
          };
        }),
        d = (e) => {
          let { isPlaying: t, compact: a = !1, onClick: l } = e,
            { isAssetContentPage: d } = (0, s.A)(),
            { isWebViewAvailable: u } = (0, o.U1)(),
            { classes: p } = c({
              compact: a,
              isAssetContentPage: d,
              isPlaying: t,
              isWebViewAvailable: u
            });
          return (0, n.jsx)(r.A, {
            role: "button",
            onClick: l,
            className: p.button,
            "aria-label": t ? "pause" : "play",
            size: "large",
            children: t
              ? (0, n.jsx)(i.vRz, { className: p.icon })
              : (0, n.jsx)(i.Sse, { className: p.icon })
          });
        };
    },
    46271: (e, t, a) => {
      a.d(t, { A: () => o });
      var n = a(47790),
        r = a(20823),
        i = a(80087);
      function o() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          { isWebViewAvailable: t } = (0, i.U1)(),
          a = (0, n.A)((e) => e.breakpoints.down(r.Yr));
        return t ? "webView" : a || e ? "compact" : "desktop";
      }
    },
    48280: (e, t, a) => {
      a.d(t, { A: () => n });
      let n = (e) =>
        "".concat(Math.floor(e / 60), ":").concat((Math.floor(e) % 60).toString().padStart(2, "0"));
    },
    50053: (e, t, a) => {
      a.d(t, { A: () => s });
      var n = a(37876),
        r = a(5269),
        i = a(65733);
      a(14232);
      let o = (0, a(46180).A)()(() => ({ loadingContainer: { height: "100%" } })),
        s = () => {
          let { classes: e } = o();
          return (0, n.jsx)(r.A, {
            container: !0,
            alignItems: "center",
            justifyContent: "center",
            className: e.loadingContainer,
            children: (0, n.jsx)(i.C, { color: "secondary", "data-testid": "loadingSpinner" })
          });
        };
    },
    51050: (e, t, a) => {
      a.d(t, { A: () => W });
      var n = a(37876),
        r = a(14232),
        i = a(52863),
        o = a(47790),
        s = a(80062),
        l = a(76231),
        c = a(42899),
        d = a(77219),
        u = a(84660),
        p = a(9818),
        m = a(26521),
        h = a(54543),
        g = a(5269),
        v = a(77387),
        f = a(83524),
        b = a(96742),
        x = a(70108),
        y = a(81226),
        w = a(17318),
        A = a(20823),
        C = a(80087),
        k = a(93743),
        I = a(46180);
      let N = (0, I.A)()((e, t) => {
          let { isCompactView: a } = t,
            n = a ? 70 : 100,
            r = a ? 250 : 360,
            i = e.palette.surface[0],
            o = { whiteSpace: "nowrap" };
          return {
            cancelButton: { ...o, [e.breakpoints.down(A.Yr)]: { flex: 1 } },
            creatorStoreButtons: { gap: 12, padding: "0 0 24px" },
            creatorStoreDialogBody: { padding: "0 ".concat(a ? "12px" : "20px") },
            creatorStoreDialogTitle: { display: "flex", justifyContent: "left", paddingLeft: 0 },
            dialog: {
              alignItems: "center",
              backgroundColor: i,
              backgroundImage: "none",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "flex-start",
              maxWidth: r,
              minHeight: 284
            },
            dialogBody: {
              gap: 12,
              [e.breakpoints.down(A.Yr)]: { marginTop: 12 },
              maxWidth: r,
              width: "auto"
            },
            disclaimerLink: { "&:hover": { textDecoration: "underline" } },
            disclaimerText: { whiteSpace: "normal" },
            fiatProduct: { display: "flex", padding: "12px 0" },
            purchaseButton: { ...o, [e.breakpoints.down(A.Yr)]: { flex: 2 } },
            thumbnail: { backgroundColor: e.palette.media.secondaryBackground, borderRadius: 8 },
            thumbnailContainer: { alignSelf: "center", height: 0, maxWidth: n, paddingTop: n }
          };
        }),
        j = (e) => {
          let {
              assetId: t,
              buttonText: a,
              isDialogOpen: c,
              isLoading: d,
              setIsDialogOpen: u,
              purchaseAsset: p
            } = e,
            { translate: I } = (0, i.Bd)(),
            j = (0, o.A)((e) => e.breakpoints.down(A.Yr)),
            { classes: S } = N({ isCompactView: j }),
            { isWebViewAvailable: T } = (0, C.U1)(),
            { assetName: P } = (0, l.Ay)(),
            B = (0, r.useCallback)(() => {
              (p(), u(!1));
            }, [p, u]);
          return (0, n.jsx)(h.A, {
            open: c,
            onClose: () => u(!1),
            maxWidth: "XSmall",
            classes: { paper: S.dialog },
            "data-testid": "purchaseDialog",
            children: (0, n.jsxs)(g.A, {
              container: !0,
              direction: "column",
              className: S.creatorStoreDialogBody,
              children: [
                (0, n.jsx)(v.A, {
                  className: S.creatorStoreDialogTitle,
                  children: (0, n.jsx)(f.A, { variant: "h5", children: I("Heading.BuyItem") })
                }),
                (0, n.jsx)(b.A, {}),
                (0, n.jsxs)(g.A, {
                  container: !0,
                  className: S.fiatProduct,
                  direction: "column",
                  alignItems: "flex-start",
                  "data-testid": "".concat(m.og, "purchaseDialogAsset"),
                  children: [
                    (0, n.jsx)(x.PV, {
                      alt: null != P ? P : "Asset Image",
                      containerClass: S.thumbnailContainer,
                      imgClassName: S.thumbnail,
                      size: x.I1._250x250,
                      targetId: t,
                      type: x.uS.assetThumbnail
                    }),
                    (0, n.jsxs)(g.A, {
                      container: !0,
                      direction: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      className: S.dialogBody,
                      children: [
                        (0, n.jsxs)(g.A, {
                          container: !0,
                          direction: "column",
                          children: [
                            (0, n.jsx)(f.A, { variant: "h6", children: P }),
                            (0, n.jsx)(k.A, {
                              assetId: t,
                              disableLink: !0,
                              displayAsAuthor: !0,
                              fontSizeOverride: T ? 12 : 14,
                              color: "secondary",
                              variant: "body2"
                            })
                          ]
                        }),
                        (0, n.jsx)(w.A, {
                          linkTargetUrl: y.A.getCreatorStoreTermsUrl(),
                          opening: "linkStart",
                          closing: "linkEnd",
                          translationKey: "Message.DeveloperItemDisclaimerWithLink",
                          variant: "captionBody",
                          color: "secondary",
                          textClass: S.disclaimerText,
                          linkClass: S.disclaimerLink,
                          openInNewTab: !0
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsxs)(g.A, {
                  container: !0,
                  direction: "row",
                  justifyContent: j ? "space-between" : "flex-end",
                  flexWrap: "nowrap",
                  className: S.creatorStoreButtons,
                  children: [
                    (0, n.jsx)(s.A, {
                      color: "secondary",
                      onClick: () => u(!1),
                      size: "small",
                      variant: "contained",
                      className: S.cancelButton,
                      children: I("Action.Cancel")
                    }),
                    (0, n.jsx)(s.A, {
                      color: "primaryBrand",
                      onClick: B,
                      size: j ? "small" : "medium",
                      variant: "contained",
                      loading: d,
                      "data-testid": "dialogPurchaseButton",
                      className: S.purchaseButton,
                      children: a
                    })
                  ]
                })
              ]
            })
          });
        };
      var S = a(90647),
        T = a(80179),
        P = a(18335),
        B = a(34512),
        L = a(83193),
        M = a(21226),
        R = a(13615),
        U = a(41455),
        E = a(28356),
        O = a(94888),
        D = a(54617);
      let V = (0, I.A)()((e, t) => {
          let { isWebViewAvailable: a } = t;
          return {
            getAssetButton: {
              whiteSpace: "nowrap",
              ...(a && { minHeight: 0, paddingBottom: 5, paddingTop: 5 })
            }
          };
        }),
        W = (e) => {
          let { assetId: t, pagePosition: a, swimlaneName: h, ...g } = e,
            { assetTypeId: v, isFont: f, isPlugin: b, videoPreviewAssets: x } = (0, l.Ay)(t),
            { userId: y } = (0, c.A)(t),
            { currencyCode: w, isPaid: k, purchasable: I, quantity: N } = (0, d.A)(t),
            W = (0, D.A)(t),
            { open: F, dialog: H } = (0, T.SJ)(t),
            { keyword: Y, pageNumber: z, pagePosition: q } = (0, O.A)(),
            Q = 0 !== q ? q : null != a ? a : 0,
            { fire: _, isWebViewAvailable: K } = (0, C.U1)(),
            { classes: X } = V({ isWebViewAvailable: K }),
            { locale: Z } = (0, i.B2)(),
            { translate: G } = (0, i.Bd)(),
            { user: J, login: $ } = (0, M.kQ)(),
            { data: ee } = (0, P.nx)(),
            et = (0, o.A)((e) => e.breakpoints.down(A.Yr)),
            { isSuccess: ea } = (0, P.nk)(t),
            { data: en, isSuccess: er } = (0, R.Z)(),
            [ei, eo] = (0, r.useState)(!1),
            { onInsertAsset: es } = (0, U.A)({
              assetId: t,
              pagePosition: Q,
              swimlaneName: null != h ? h : ""
            }),
            {
              data: el,
              isPolling: ec,
              isSuccess: ed
            } = (0, S.dD)(t, { onPollSuccess: b ? es : void 0 }),
            [eu, ep] = (0, r.useState)(!1),
            { mutate: em, isPending: eh } = (0, P.Xp)(t, {
              ...W,
              pageNumber: z,
              pagePosition: Q,
              searchKeyword: Y,
              videoPreviewId: x[0]
            }),
            {
              checkExcessiveTransactions: eg,
              hasExceededSpendingLimit: ev,
              isFiatPurchasingAllowed: ef
            } = (0, B._$)(),
            eb = eg(y),
            ex = (0, u.Ay)(v),
            ey = (null == J ? void 0 : J.id) !== void 0,
            ew = (0, r.useCallback)(
              async () =>
                k && !el
                  ? void ep(!0)
                  : (eo(!0), (b || f) && !el)
                    ? void em(void 0, {
                        onSuccess: async () => {
                          (f && _(E.D.addToInventory, { assetId: t, assetTypeId: v }),
                            await es(),
                            eo(!1));
                        }
                      })
                    : void (await es(), eo(!1)),
              [k, el, b, f, es, em, _, t, v]
            ),
            eA = (0, r.useCallback)(() => {
              ey ? (el ? F() : k ? ep(!0) : em()) : $();
            }, [ey, el, k, $, F, em]),
            eC = (0, r.useMemo)(
              () =>
                K && (!k || el)
                  ? f
                    ? G(el ? "Action.Installed" : "Action.Install")
                    : b
                      ? G(en ? "Action.Installed" : "Action.Install")
                      : G("Action.Insert")
                  : el
                    ? G("Action.OpenInStudio")
                    : k && N
                      ? G("Action.BuyAssetFor", { price: (0, p.A)(N, w, Z) })
                      : G("Action.GetAsset", { assetType: G(ex) }),
              [ex, w, f, el, k, b, en, K, Z, N, G]
            ),
            ek = (0, r.useMemo)(
              () => !!ei || (!el && (!ea || !ed || ec || eh || !er)),
              [ea, ei, ed, el, er, ec, eh]
            ),
            eI = (0, r.useMemo)(
              () =>
                (!!K && !!f && !!el) ||
                (!!K && !!en) ||
                (!el &&
                  (!I || (!!ey && !!k && (!ef || ev || eb || ee === L.gZe.CountryRestricted)))),
              [ey, f, el, k, en, K, I, ef, ev, eb, ee]
            );
          return (0, n.jsxs)(r.Fragment, {
            children: [
              (0, n.jsx)(s.A, {
                color: "primaryBrand",
                classes: { root: X.getAssetButton },
                loading: ek,
                onClick: K ? ew : eA,
                size: et ? "medium" : "large",
                variant: "contained",
                "data-testid": "".concat(m.og, "getAsset"),
                disabled: eI,
                ...g,
                children: eC
              }),
              k &&
                (0, n.jsx)(j, {
                  assetId: t,
                  buttonText: eC,
                  isDialogOpen: eu,
                  isLoading: ek,
                  purchaseAsset: em,
                  setIsDialogOpen: ep
                }),
              H
            ]
          });
        };
    },
    51421: (e, t, a) => {
      a.d(t, {
        GY: () => p,
        L5: () => b,
        PW: () => d,
        QT: () => f,
        Qf: () => n,
        Xn: () => i,
        Zh: () => m,
        _M: () => c,
        _S: () => v,
        _y: () => u,
        b9: () => r,
        pL: () => h,
        qn: () => l,
        w8: () => s,
        wX: () => g,
        wb: () => x,
        xw: () => o
      });
      let n = 194,
        r = 280,
        i = 140,
        o = 116,
        s = 200,
        l = 80,
        c = 100,
        d = 44,
        u = 1,
        p = 4,
        m = 8,
        h = 4,
        g = 10,
        v = 4,
        f = 8,
        b = 8,
        x = 100;
    },
    52143: (e, t, a) => {
      let n;
      a.d(t, { Cg: () => l, EO: () => s, Sz: () => i, dJ: () => c });
      var r = a(18334);
      let i = { MP3: "mp3" },
        o = { MP3: "audio/mpeg" };
      function s() {
        return (
          void 0 === n &&
            (n = (function () {
              try {
                if ("safari" in window || "webkit" in window) return !1;
                return !!document.createElement("audio").canPlayType("audio/ogg; codecs=vorbis");
              } catch (e) {
                return (console.error("Error detecting OGG support:", e), (0, r.Cp)(e), !1);
              }
            })()),
          n
        );
      }
      function l(e) {
        return e === i.MP3 || s();
      }
      function c(e, t) {
        return t === i.MP3
          ? URL.createObjectURL(new Blob([e], { type: o.MP3 }))
          : URL.createObjectURL(new Blob([e]));
      }
    },
    54165: (e, t, a) => {
      a.d(t, { A: () => m });
      var n = a(37876);
      a(14232);
      var r = a(52863),
        i = a(47790),
        o = a(5269),
        s = a(83524),
        l = a(20823),
        c = a(80087),
        d = a(46180),
        u = a(93974);
      let p = (0, d.A)()((e, t) => {
          let { isWebViewAvailable: a } = t,
            n = (0, u.A)(a);
          return {
            artistName: {
              [e.breakpoints.up(l.Yr)]: n.artistName.desktop,
              [e.breakpoints.down(l.Yr)]: n.artistName.compact
            },
            assetName: {
              [e.breakpoints.up(l.Yr)]: n.assetName.desktop,
              [e.breakpoints.down(l.Yr)]: n.assetName.compact
            },
            audioIconPlaceholder: {
              [e.breakpoints.up(l.Yr)]: n.audioIcon.desktop,
              [e.breakpoints.down(l.Yr)]: n.audioIcon.compact
            },
            category: {
              [e.breakpoints.up(l.Yr)]: n.category.desktop,
              [e.breakpoints.down(l.Yr)]: n.category.compact
            },
            expandIconPlaceholder: { [e.breakpoints.up(l.Yr)]: n.expandIcon.desktop },
            header: {
              flexGrow: 1,
              [e.breakpoints.down(l.Yr)]: {
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap"
              }
            },
            headerContainer: {
              width: "100%",
              [e.breakpoints.up(l.Yr)]: { padding: "12px 8px 16px" },
              [e.breakpoints.down(l.Yr)]: { padding: "4px 4px" }
            },
            length: {
              [e.breakpoints.up(l.Yr)]: n.length.desktop,
              [e.breakpoints.down(l.Yr)]: n.length.compact
            }
          };
        }),
        m = (e) => {
          let { isMusic: t = !1 } = e,
            { translate: a } = (0, r.Bd)(),
            { isWebViewAvailable: d } = (0, c.U1)(),
            { classes: u } = p({ isWebViewAvailable: d }),
            m = (0, i.A)((e) => e.breakpoints.down(l.Yr)),
            h = m ? "smallLabel1" : "overline";
          return (0, n.jsxs)(o.A, {
            container: !0,
            className: u.headerContainer,
            children: [
              (0, n.jsx)(o.A, { className: u.audioIconPlaceholder }),
              (0, n.jsxs)(o.A, {
                className: u.header,
                children: [
                  (0, n.jsx)(s.A, {
                    variant: h,
                    color: "secondary",
                    className: u.assetName,
                    children: a("Label.Name")
                  }),
                  (0, n.jsx)(s.A, {
                    variant: h,
                    color: "secondary",
                    className: u.artistName,
                    children: a(t ? "Label.Uploader" : "Label.Creator")
                  }),
                  (0, n.jsx)(s.A, {
                    variant: h,
                    color: "secondary",
                    className: u.category,
                    children: a("Label.Tags")
                  }),
                  (0, n.jsx)(s.A, {
                    variant: h,
                    color: "secondary",
                    className: u.length,
                    children: a("Label.Length")
                  })
                ]
              }),
              !m && (0, n.jsx)(o.A, { className: u.expandIconPlaceholder })
            ]
          });
        };
    },
    59533: (e, t, a) => {
      a.d(t, { sU: () => y, sS: () => w, lu: () => b, c4: () => x });
      var n = a(38455),
        r = a(3515);
      let i = function (e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!t) return;
        let n = Object.values(e);
        if (a) {
          if (n.includes(t)) return t;
        } else {
          let e = t.toUpperCase(),
            a = n.find((t) => t.toString().toUpperCase() === e);
          if (a) return a;
        }
      };
      var o = a(52143),
        s = a(40403),
        l = a(75426),
        c = a(66629),
        d = a(55447);
      let u = a(82909)
        .Buffer.from('[{"format":"Original","majorVersion":"Original","fidelity":"Original"}]')
        .toString("base64");
      class p extends c.A {
        async getAssets(e) {
          let { raw: t } = await this.AssetFetchApi.v1AssetsBatchPostRaw({
            accept: "",
            assetRequestItems: e.map((e) => ({ ...e, requestId: e.assetId.toString() })),
            robloxBrowserAssetRequest: "true",
            robloxPlaceId: 0
          });
          return await t.json();
        }
        async getAssetV2(e) {
          let { raw: t } = await this.AssetFetchV2Api.v2AssetGetRaw(
            {
              accept: "",
              acceptEncoding: "",
              assetFormat: "",
              assetType: "",
              contentRepresentationPriorityList: u,
              id: e,
              robloxAssetFormat: "",
              robloxPlaceId: 0
            },
            { headers: {} }
          );
          return await t.json();
        }
        constructor(e = (0, d.Jy)("assetdelivery")) {
          (super(e),
            (this.AssetFetchApi = new s.tm(this.defaultConfiguration)),
            (this.AssetFetchV2Api = new l.zK(this.defaultConfiguration)),
            (this.getAssets = this.getAssets.bind(this)),
            (this.getAssetV2 = this.getAssetV2.bind(this)));
        }
      }
      let m = new p();
      var h = a(82909).Buffer;
      let g = "assetDelivery_",
        v = h.from('[{"format":"mp3","majorVersion":"1","fidelity":"MED"}]').toString("base64");
      function f(e) {
        return {
          queryFn: async () => {
            var t, a, n, r;
            let i = await m.getAssetV2(e);
            if (!i || !i.locations || 0 === i.locations.length) return null;
            let o = i.locations.filter((e) => "source" === e.assetFormat),
              s =
                null !=
                (r =
                  null != (n = null == o || null == (t = o[0]) ? void 0 : t.location)
                    ? n
                    : null == (a = i.locations[0])
                      ? void 0
                      : a.location)
                  ? r
                  : null;
            if (!s) return null;
            try {
              let e = await fetch(s),
                t = await e.blob();
              return URL.createObjectURL(t);
            } catch (e) {
              return s;
            }
          },
          queryKey: ["".concat(g, "useFullResolutionImageUrl"), String(e)],
          retry: 3,
          staleTime: 6e5
        };
      }
      function b(e) {
        return (0, n.I)({
          ...(e
            ? f(e)
            : { queryFn: () => null, queryKey: ["".concat(g, "useFullResolutionImageUrl")] }),
          enabled: !!e
        });
      }
      function x(e) {
        return (0, r.E)({ queries: e.map((e) => f(e)) });
      }
      function y(e) {
        return ["".concat(g, "useAudioData"), e];
      }
      function w(e, t) {
        var a, r, s, l, c;
        return (0, n.I)({
          enabled: null == (a = null == t ? void 0 : t.enabled) || a,
          queryFn: async () => {
            var t;
            let a = (0, o.EO)() ? void 0 : v,
              n = await m.getAssets([{ assetId: e, contentRepresentationPriorityList: a }]),
              r = null == n ? void 0 : n[0],
              s = null == r ? void 0 : r.contentRepresentationSpecifier;
            return {
              format: i(
                o.Sz,
                null != (t = null == s ? void 0 : s.format) ? t : null == s ? void 0 : s.Format
              ),
              location: null == n ? void 0 : n[0].location
            };
          },
          queryKey: y(e),
          refetchInterval: null != (r = null == t ? void 0 : t.refetchInterval) && r,
          refetchOnWindowFocus: null != (s = null == t ? void 0 : t.refetchOnWindowFocus) && s,
          retry: null != (l = null == t ? void 0 : t.retry) ? l : 3,
          staleTime: null != (c = null == t ? void 0 : t.staleTime) ? c : 6e5
        });
      }
    },
    61606: (e, t, a) => {
      a.d(t, { A: () => o });
      var n = a(14232),
        r = a(80087),
        i = a(5043);
      function o() {
        let { isWebViewAvailable: e, isRecommendedSpecOrAbove: t } = (0, r.U1)();
        return (0, n.useMemo)(() => (!e || t ? i.T_ : i.KC), [t, e]);
      }
    },
    61684: (e, t, a) => {
      a.d(t, { A: () => d });
      var n = a(37876),
        r = a(14232),
        i = a(55447),
        o = a(43816),
        s = a(77328),
        l = a.n(s),
        c = a(89099);
      let d = () => {
        let e = (0, c.useRouter)(),
          t = (0, r.useMemo)(() => (0, o.A)(e.asPath)[0], [e.asPath]);
        return t
          ? (0, n.jsx)(l(), {
              children: (0, n.jsx)("link", {
                rel: "canonical",
                href: ""
                  .concat((0, i.ux)())
                  .concat("/store")
                  .concat(t)
              })
            })
          : null;
      };
    },
    63767: (e, t, a) => {
      a.d(t, { A: () => i });
      var n = a(16999),
        r = a(34644);
      let i = (e) => {
        if (null === e) return null;
        let t = (0, n._J)(e, void 0, r.PX, !0),
          a = e >= r.am && e < r.PX ? "+" : "";
        return "".concat(t).concat(a);
      };
    },
    64829: (e, t, a) => {
      a.d(t, { A: () => o });
      var n = a(83193),
        r = a(67434);
      let i = {
          [r.hMm.Audio]: n.ejU.Audio,
          [r.hMm.Model]: n.ejU.Model,
          [r.hMm.Decal]: n.ejU.Decal,
          [r.hMm.Plugin]: n.ejU.Plugin,
          [r.hMm.MeshPart]: n.ejU.MeshPart,
          [r.hMm.Video]: n.ejU.Video,
          [r.hMm.FontFamily]: n.ejU.FontFamily
        },
        o = (e) => {
          var t;
          return null != (t = i[e]) ? t : n.ejU.Invalid;
        };
    },
    67596: (e, t, a) => {
      a.d(t, { A: () => o });
      var n = a(731),
        r = a(30580),
        i = a(89422);
      function o() {
        let { hasActiveSearchParams: e } = (0, n.sI)(),
          { isAssetContentPage: t, isDefaultBrowsePage: a } = (0, i.A)();
        return (function (e) {
          let { hasActiveSearchParams: t, isAssetContentPage: a, isDefaultBrowsePage: n } = e;
          return t ? r.IY.Search : n ? r.IY.Home : a ? r.IY.Details : r.IY.Browse;
        })({ hasActiveSearchParams: e, isAssetContentPage: t, isDefaultBrowsePage: a });
      }
    },
    69957: (e, t, a) => {
      a.d(t, { A: () => r });
      var n = a(16999);
      let r = (e) => (0, n.Eg)(e / 100, { maximumFractionalDigits: 0, style: "percent" });
    },
    79738: (e, t, a) => {
      a.d(t, { A: () => i });
      var n = a(55447),
        r = a(21226);
      let i = (e) => {
        var t, a, i;
        let { targetId: o, assetTypeId: s } = e,
          { user: l } = (0, r.kQ)(),
          c = new URLSearchParams({
            abuseVector: "asset",
            custom: JSON.stringify({
              assetTypeId:
                null != (i = null == s || null == (t = s.toString) ? void 0 : t.call(s)) ? i : ""
            }),
            submitterId: (null == l || null == (a = l.id) ? void 0 : a.toString()) || "",
            targetId: o
          });
        return "".concat((0, n.ZT)(), "/report-abuse/?").concat(c.toString());
      };
    },
    80134: (e, t, a) => {
      a.d(t, { A: () => y });
      var n = a(37876),
        r = a(14232),
        i = a(48230),
        o = a.n(i),
        s = a(86199),
        l = a(43824),
        c = a(52863),
        d = a(76231),
        u = a(42899),
        p = a(81646),
        m = a(79738),
        h = a(3088),
        g = a(30580),
        v = a(21226),
        f = a(55447);
      let b = (0, a(46180).A)()(() => ({
          menu: { padding: 0 },
          menuItemfocusVisible: { "&:focus-visible": { backgroundColor: "transparent" } }
        })),
        x = (e) => {
          let { anchorPosition: t, assetId: a, menuSource: i, handleClose: x } = e,
            { assetName: y, assetTypeId: w, meshId: A, textureId: C } = (0, d.Ay)(a),
            { isCreatedByRoblox: k } = (0, u.A)(a),
            I = !!t,
            { translate: N } = (0, c.Bd)(),
            { classes: j } = b(),
            { user: S, login: T } = (0, v.kQ)(),
            { sendEvent: P } = (0, h.MP)(),
            B = "".concat((0, f.ux)(), "/store").concat((0, p.A)(a, y)),
            L = (0, m.A)({ assetTypeId: w, targetId: a.toString() }),
            M = (0, r.useCallback)(
              (e) => {
                P(g.Ur.AssetMenuItemClicked, {
                  assetId: a,
                  assetTypeId: w,
                  menuItem: e,
                  menuSource: i
                });
              },
              [a, w, i, P]
            ),
            R = (0, r.useCallback)(
              async (e, t) => {
                try {
                  await navigator.clipboard.writeText(e);
                } catch (e) {
                  console.error("Failed to write", t, "to clipboard:", e);
                } finally {
                  (M(t), requestAnimationFrame(() => x()));
                }
              },
              [x, M]
            ),
            U = { left: 48, top: 0 },
            E = t ? { left: t.left + U.left, top: t.top + U.top } : void 0;
          return (0, n.jsxs)(s.A, {
            anchorReference: "anchorPosition",
            "aria-hidden": !I,
            "data-testid": "contextualMenu",
            variant: "menu",
            anchorPosition: E,
            onClose: x,
            open: I,
            classes: { paper: j.menu },
            children: [
              (0, n.jsx)(l.A, {
                focusVisibleClassName: j.menuItemfocusVisible,
                onClick: () => R(B, g.re.CopyLink),
                children: N("Label.CopyAssetLink")
              }),
              (0, n.jsx)(l.A, {
                focusVisibleClassName: j.menuItemfocusVisible,
                onClick: () => R(a.toString(), g.re.CopyAssetId),
                children: N("Label.CopyAssetId")
              }),
              !!A &&
                (0, n.jsx)(l.A, {
                  focusVisibleClassName: j.menuItemfocusVisible,
                  onClick: () => R(A.toString(), g.re.CopyMeshId),
                  children: N("Label.CopyMeshId")
                }),
              !!C &&
                (0, n.jsx)(l.A, {
                  focusVisibleClassName: j.menuItemfocusVisible,
                  onClick: () => R(C.toString(), g.re.CopyTextureId),
                  children: N("Label.CopyTextureId")
                }),
              !k &&
                (S
                  ? (0, n.jsx)(o(), {
                      href: L,
                      onClick: () => M(g.re.Report),
                      passHref: !0,
                      children: (0, n.jsx)(l.A, {
                        focusVisibleClassName: j.menuItemfocusVisible,
                        children: N("Label.ReportItem")
                      })
                    })
                  : (0, n.jsx)(l.A, {
                      focusVisibleClassName: j.menuItemfocusVisible,
                      onClick: () => {
                        T();
                      },
                      children: N("Label.ReportItem")
                    }))
            ]
          });
        },
        y = (e) => {
          let { assetId: t, children: a, menuSource: i } = e,
            o = (0, r.useRef)(null),
            [s, l] = (0, r.useState)(null),
            c = (0, r.useCallback)((e) => o.current && o.current.contains(e.target), []),
            d = (0, r.useCallback)(
              (e) => {
                (e.preventDefault(), c(e) ? l({ left: e.clientX, top: e.clientY }) : l(null));
              },
              [c]
            ),
            u = (0, r.useCallback)(() => {
              l(null);
            }, []);
          return (0, n.jsxs)("div", {
            onContextMenu: d,
            ref: o,
            style: { display: "contents" },
            children: [
              a,
              (0, n.jsx)(x, { anchorPosition: s, assetId: t, menuSource: i, handleClose: u })
            ]
          });
        };
    },
    81226: (e, t, a) => {
      a.d(t, { A: () => o });
      var n = a(55447),
        r = a(37112),
        i = a(67434);
      let o = {
        getAccountSettingsBillingUrl: () => "".concat((0, n.ZT)(), "/my/account#!/billing"),
        getAccountSettingsUrl: function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return "".concat((0, n.ZT)(), "/my/account").concat(e ? "?confirmemail=1" : "");
        },
        getCreatorBrowseByAssetTypeUrl: (e, t, a) => {
          var n;
          let o = null == (n = [...r.tf].find((e) => e.categoryType === a)) ? void 0 : n.path,
            s = "".concat(o, "?creatorName=").concat(encodeURIComponent(e));
          switch (t) {
            case i.rQH.Group:
              return "".concat(s, "&creatorType=").concat(t);
            case i.rQH.User:
            default:
              return s;
          }
        },
        getCreatorProfileUrl: (e, t) => {
          let a = t === i.rQH.User ? "users" : "groups";
          return ""
            .concat((0, n.ZT)(), "/")
            .concat(a, "/")
            .concat(e, "/profile");
        },
        getCreatorStoreTermsUrl: () =>
          "".concat((0, n.YA)(), "/hc/en-us/articles/21308223046932-Creator-Store-Terms"),
        getPlaceUrl: (e) => "".concat((0, n.ZT)(), "/games/").concat(e)
      };
    },
    85029: (e, t, a) => {
      a.d(t, { A: () => eP });
      var n = a(37876),
        r = a(14232),
        i = a(76231),
        o = a(81646),
        s = a(30580),
        l = a(80134),
        c = a(37112),
        d = a(731),
        u = a(67596),
        p = a(42899),
        m = a(77219),
        h = a(8622),
        g = a(3088),
        v = a(54617),
        f = a(80087),
        b = a(18335),
        x = a(75356),
        y = a(5269),
        w = a(15518),
        A = a(26867),
        C = a(48230),
        k = a.n(C),
        I = a(70108),
        N = a(14819),
        j = a(67434);
      let S = (e) => {
        let {
            assetId: t,
            assetLink: a,
            containerClass: r,
            displayZoomIcon: o = !1,
            imageClassName: s,
            isHover: l = !1,
            mediaClassName: c,
            onClick: d,
            onLinkClick: u,
            onZoomClick: p,
            showMediaPreviews: m = !1,
            thumbnailSize: h = I.I1._250x250,
            wrapperClassName: g
          } = e,
          { assetName: v, assetSubTypes: f, imagePreviewAssets: b } = (0, i.Ay)(t),
          x = f.includes(j.F5M.Package),
          y = m && b.length > 0,
          w = (0, n.jsx)(N.A, {
            alt: v,
            assetLink: a,
            containerClass: r,
            gridClassName: u ? void 0 : g,
            thumbnailImgClassName: s,
            isHoveringAssetTile: o && l,
            isPackage: x,
            onClick: d,
            onZoomClick: p,
            targetId: t,
            type: I.uS.assetThumbnail,
            thumbnailSize: h,
            previewImageIds: y ? b : void 0,
            mediaImgClassName: c
          });
        return u
          ? (0, n.jsx)(k(), { className: g, href: a, onClick: u, passHref: !0, children: w })
          : w;
      };
      S.displayName = "TileThumbnail";
      var T = a(52863),
        P = a(83524),
        B = a(9818);
      let L = (e) => {
        let { assetId: t, className: a, color: r, variant: o } = e,
          { translate: s } = (0, T.Bd)(),
          { locale: l } = (0, T.B2)(),
          { isPurchasableAssetType: c } = (0, i.Ay)(t),
          { currencyCode: d, quantity: u } = (0, m.A)(t);
        return c && d && u
          ? (0, n.jsx)(P.A, {
              className: a,
              color: r,
              variant: o,
              children: 0 === u.significand ? s("Label.Free") : (0, B.A)(u, d, l)
            })
          : null;
      };
      L.displayName = "TilePrice";
      var M = a(26521);
      let R = (e) => {
        let { assetId: t, className: a, color: r = "inherit", href: o, onClick: s } = e,
          { assetName: l } = (0, i.Ay)(t),
          c = {
            className: a,
            color: r,
            "data-testid": "".concat(M.og, "assetNameLink"),
            onClick: s,
            variant: "smallLabel1"
          };
        return o
          ? (0, n.jsx)(P.A, { component: k(), href: o, ...c, children: l })
          : (0, n.jsx)(P.A, { ...c, children: l });
      };
      R.displayName = "TileName";
      var U = a(51421),
        E = a(46180),
        O = a(36442);
      let D = (0, E.A)()((e, t) => {
          let { fillsColumn: a } = t,
            n = e.transitions.create("background-color", {
              duration: e.transitions.duration.short
            });
          return {
            assetName: {
              "&": { WebkitBoxOrient: "vertical", WebkitLineClamp: 2 },
              boxOrient: "vertical",
              cursor: "pointer",
              display: "-webkit-box",
              overflow: "hidden",
              overflowWrap: "break-word",
              textOverflow: "ellipsis",
              width: "100%"
            },
            assetNameLink: { width: "100%" },
            container: {
              borderRadius: "8px 8px 0 0",
              display: "flex",
              flexDirection: "column",
              paddingBottom: 0,
              paddingLeft: U.GY,
              paddingRight: U.GY,
              paddingTop: U.GY,
              position: "relative",
              transition: n,
              width: a ? "100%" : O.f.compact.width
            },
            detailsContainer: {
              display: "flex",
              flexDirection: "column",
              height: O.f.compact.detailsHeight,
              overflow: "hidden"
            },
            imageContainer: { display: "block" },
            imageLink: { aspectRatio: "1 / 1", marginBottom: U.wX, width: "100%" },
            mediaImage: {
              backgroundColor: "transparent",
              borderRadius: 8,
              objectFit: "cover",
              transition: n,
              width: "100%"
            },
            priceContainer: { display: "flex", padding: "8px 0px 4px", textTransform: "uppercase" },
            thumbnailImage: {
              backgroundColor: (0, O.B)(e, "compact"),
              borderRadius: U._S,
              transition: "none !important",
              width: "100%"
            }
          };
        }),
        V = (e) => {
          let { assetId: t, assetLink: a, fillsColumn: r = !1, onAssetClicked: i, tileRef: o } = e,
            { showVotes: s } = (0, w.A)(t),
            { classes: l } = D({ fillsColumn: r });
          return (0, n.jsxs)("div", {
            ref: o,
            className: l.container,
            children: [
              (0, n.jsx)(S, {
                assetId: t,
                assetLink: a,
                containerClass: l.imageContainer,
                imageClassName: l.thumbnailImage,
                wrapperClassName: l.imageLink,
                mediaClassName: l.mediaImage,
                onLinkClick: i,
                showMediaPreviews: !0
              }),
              (0, n.jsxs)("div", {
                className: l.detailsContainer,
                children: [
                  (0, n.jsx)(R, { assetId: t, className: l.assetName, href: a, onClick: i }),
                  (0, n.jsx)(k(), {
                    href: a,
                    passHref: !0,
                    onClick: i,
                    className: l.assetNameLink,
                    children: (0, n.jsxs)(y.A, {
                      container: !0,
                      direction: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: 0.5,
                      children: [
                        (0, n.jsx)(L, {
                          assetId: t,
                          className: l.priceContainer,
                          color: "inherit",
                          variant: "overline"
                        }),
                        s && (0, n.jsx)(A.A, { assetId: t, showTextWhenNotEnoughRatings: !1 })
                      ]
                    })
                  })
                ]
              })
            ]
          });
        };
      V.displayName = "CompactAssetTile";
      var W = a(43644),
        F = a(64774),
        H = a(93743);
      let Y = (0, E.A)()((e, t, a) => {
          let { fillsColumn: n } = t,
            { hoverAttributesContainer: r, hoverAttributes: i } = a,
            o = e.transitions.create("background-color", {
              duration: e.transitions.duration.short
            }),
            s = U.Zh,
            l = s / 2,
            c = {
              ["&:hover, &:hover .".concat(r)]: {
                backgroundColor: e.palette.surface[300],
                zIndex: 3
              },
              ["&:hover .".concat(r)]: { maxHeight: 100, transition: o },
              ["&:hover .".concat(i)]: { opacity: 1 }
            };
          return {
            assetName: {
              "&": { WebkitBoxOrient: "vertical", WebkitLineClamp: 2 },
              boxOrient: "vertical",
              cursor: "pointer",
              display: "-webkit-box",
              overflow: "hidden",
              overflowWrap: "break-word",
              textOverflow: "ellipsis",
              width: "100%"
            },
            container: {
              borderRadius: "8px 8px 0 0",
              flexWrap: "nowrap",
              paddingBottom: 0,
              paddingLeft: s,
              paddingRight: s,
              paddingTop: s,
              position: "relative",
              transition: o,
              width: n ? "100%" : O.f.desktop.width,
              ...c
            },
            detailsContainer: { height: O.f.desktop.detailsHeight, overflow: "hidden" },
            hoverAttributes: {
              "& > *": { paddingBottom: l },
              "& > :first-of-type": { paddingTop: l },
              opacity: 0,
              transition: e.transitions.create("opacity", {
                duration: e.transitions.duration.short
              })
            },
            hoverAttributesContainer: {
              borderRadius: "0 0 8px 8px",
              bottom: 0,
              left: 0,
              maxHeight: 0,
              padding: "0 ".concat(s, "px ").concat(s, "px ").concat(s, "px"),
              position: "absolute",
              transform: "translateY(calc(100% - 1px))",
              transition: ""
                .concat(o, ", ")
                .concat(
                  e.transitions.create("max-height", {
                    delay: e.transitions.duration.short,
                    duration: 0
                  })
                ),
              width: "100%"
            },
            icon: { marginRight: 6 },
            imageContainer: { display: "block" },
            imageLink: { aspectRatio: "1 / 1", marginBottom: U.wX, width: "100%" },
            mediaImage: {
              backgroundColor: "transparent",
              borderRadius: 8,
              objectFit: "cover",
              transition: o,
              width: "100%"
            },
            priceContainer: { display: "flex", padding: "8px 0px 4px", textTransform: "uppercase" },
            thumbnailImage: {
              backgroundColor: (0, O.B)(e, "desktop"),
              borderRadius: U.QT,
              transition: "none !important",
              width: "100%"
            }
          };
        }),
        z = (e) => {
          let { assetId: t, assetLink: a, fillsColumn: r = !1, onAssetClicked: o, tileRef: s } = e,
            { translate: l } = (0, T.Bd)(),
            { assetSubTypes: c, hasScripts: d } = (0, i.Ay)(t),
            { showVotes: u } = (0, w.A)(t),
            { classes: p } = Y({ fillsColumn: r }),
            m = c.includes(j.F5M.Package);
          return (0, n.jsxs)(y.A, {
            ref: s,
            container: !0,
            className: p.container,
            direction: "column",
            children: [
              (0, n.jsx)(S, {
                assetId: t,
                assetLink: a,
                containerClass: p.imageContainer,
                imageClassName: p.thumbnailImage,
                wrapperClassName: p.imageLink,
                mediaClassName: p.mediaImage,
                onLinkClick: o,
                showMediaPreviews: !0
              }),
              (0, n.jsxs)(y.A, {
                className: p.detailsContainer,
                children: [
                  (0, n.jsx)(L, {
                    assetId: t,
                    className: p.priceContainer,
                    color: "inherit",
                    variant: "overline"
                  }),
                  (0, n.jsx)(R, { assetId: t, className: p.assetName, href: a, onClick: o })
                ]
              }),
              (0, n.jsx)(y.A, {
                className: p.hoverAttributesContainer,
                children: (0, n.jsxs)(y.A, {
                  className: p.hoverAttributes,
                  children: [
                    (0, n.jsx)(H.A, { assetId: t, linkToBrowse: !0, variant: "smallLabel2" }),
                    u && (0, n.jsx)(A.A, { assetId: t, showTextWhenNotEnoughRatings: !1 }),
                    d &&
                      (0, n.jsxs)(y.A, {
                        container: !0,
                        alignItems: "center",
                        children: [
                          (0, n.jsx)(W.CyN, { fontSize: "small", className: p.icon }),
                          (0, n.jsx)(P.A, { variant: "body2", children: l("Label.HasScripts") })
                        ]
                      }),
                    m &&
                      (0, n.jsxs)(y.A, {
                        container: !0,
                        alignItems: "center",
                        children: [
                          (0, n.jsx)(F.A, {
                            "data-testid": "packageIcon",
                            fontSize: "small",
                            className: p.icon
                          }),
                          (0, n.jsx)(P.A, { variant: "body2", children: l("Label.Updateable") })
                        ]
                      })
                  ]
                })
              })
            ]
          });
        };
      z.displayName = "DesktopAssetTile";
      var q = a(41455),
        Q = a(28356);
      let _ = (0, E.A)()((e, t, a) => {
          let { fillsColumn: n, tutorialConfig: r } = t,
            { hoverAttributesContainer: i, hoverAttributes: o } = a,
            s = e.transitions.create("background-color", {
              duration: e.transitions.duration.short
            }),
            l = U.pL,
            c = U._y,
            d = {
              ["&:hover, &:hover .".concat(i)]: {
                backgroundColor: e.palette.surface[300],
                zIndex: 3
              },
              ["&:hover .".concat(i)]: {
                border: "solid black ".concat(c, "px"),
                borderTop: "none",
                maxHeight: U._M,
                transition: s
              },
              ["&:hover .".concat(o)]: { opacity: 1 }
            };
          return {
            additionalDetails: { cursor: "pointer" },
            assetName: {
              "&": { WebkitBoxOrient: "vertical", WebkitLineClamp: 2 },
              boxOrient: "vertical",
              color: e.palette.content.alert.inform,
              cursor: "pointer",
              display: "-webkit-box",
              fontSize: 12,
              lineHeight: "19px",
              overflow: "hidden",
              overflowWrap: "break-word",
              textOverflow: "ellipsis",
              width: "100%"
            },
            container: {
              borderRadius: "8px 8px 0 0",
              flexWrap: "nowrap",
              paddingBottom: 0,
              paddingLeft: l,
              paddingRight: l,
              paddingTop: l,
              position: "relative",
              transition: s,
              ...((null == r ? void 0 : r.isToolboxTutorialActive) &&
              (null == r ? void 0 : r.nextTutorialStep) === Q.v.Insert
                ? {
                    border: "solid "
                      .concat(e.palette.actionV2.primaryBrand.fill, " ")
                      .concat(c, "px"),
                    borderBottomLeftRadius: "8px",
                    borderBottomRightRadius: "8px"
                  }
                : {
                    ...d,
                    "&:hover": { border: "solid black ".concat(c, "px"), borderBottom: "none" },
                    border: "solid transparent ".concat(c, "px"),
                    borderBottom: "none",
                    borderRadius: 0
                  }),
              userSelect: "none",
              width: n ? "100%" : O.f.webView.width
            },
            detailsContainer: { height: O.f.webView.detailsHeight, overflow: "hidden" },
            hoverAttributes: {
              "& > *": { paddingBottom: l },
              "& > :first-of-type": { paddingTop: 0 },
              opacity: 0,
              transition: e.transitions.create("opacity", {
                duration: e.transitions.duration.short
              })
            },
            hoverAttributesContainer: {
              border: "solid transparent ".concat(c, "px"),
              borderRadius: 0,
              borderTop: "none",
              bottom: 0,
              left: -c,
              maxHeight: 0,
              padding: l,
              position: "absolute",
              transform: "translateY(calc(100% - 1px))",
              transition: ""
                .concat(s, ", ")
                .concat(
                  e.transitions.create("max-height", {
                    delay: e.transitions.duration.short,
                    duration: 0
                  })
                ),
              width: "calc(100% + ".concat(2 * c, "px)")
            },
            imageContainer: { display: "block" },
            priceContainer: {
              display: "flex",
              padding: "2px 0px 0px 0px",
              textTransform: "uppercase"
            },
            thumbnailContainer: {
              aspectRatio: "1 / 1",
              cursor: "pointer",
              marginBottom: U.wX,
              width: "100%"
            },
            thumbnailImage: {
              backgroundColor: (0, O.B)(e, "webView"),
              borderRadius: U.L5,
              transition: "none !important",
              width: "100%"
            }
          };
        }),
        K = (e) => {
          let {
              assetId: t,
              assetLink: a,
              fillsColumn: o = !1,
              onAssetClicked: s,
              pagePosition: l,
              swimlaneName: c,
              tileRef: d
            } = e,
            { translate: u } = (0, T.Bd)(),
            { hasScripts: p, isFont: h, isModel: g, isPlugin: v } = (0, i.Ay)(t),
            { isPaid: b } = (0, m.A)(t),
            { showVotes: x } = (0, w.A)(t),
            { isRecommendedSpecOrAbove: C, tutorialConfig: k } = (0, f.U1)(),
            { classes: N } = _({ fillsColumn: o, tutorialConfig: k }),
            j = v || h || (g && b),
            [B, M] = (0, r.useState)(!1),
            U = C ? I.I1._110x110 : I.I1._75x75,
            { onInsertAsset: E } = (0, q.A)({
              assetId: t,
              pagePosition: l,
              swimlaneName: null != c ? c : ""
            }),
            O = (e, i) =>
              (0, n.jsxs)(r.Fragment, {
                children: [
                  (0, n.jsx)(S, {
                    assetId: t,
                    assetLink: a,
                    containerClass: N.imageContainer,
                    displayZoomIcon: !0,
                    imageClassName: N.thumbnailImage,
                    isHover: B,
                    onClick: i ? void 0 : e,
                    onLinkClick: i ? e : void 0,
                    onZoomClick: s,
                    thumbnailSize: U,
                    wrapperClassName: N.thumbnailContainer
                  }),
                  (0, n.jsxs)(y.A, {
                    className: N.detailsContainer,
                    children: [
                      (0, n.jsx)(R, {
                        assetId: t,
                        className: N.assetName,
                        color: "info",
                        href: i,
                        onClick: e
                      }),
                      (0, n.jsx)(L, {
                        assetId: t,
                        className: N.priceContainer,
                        color: "secondary",
                        variant: "tooltip"
                      })
                    ]
                  }),
                  (0, n.jsx)(y.A, {
                    className: N.hoverAttributesContainer,
                    children: (0, n.jsxs)(y.A, {
                      className: N.hoverAttributes,
                      children: [
                        (0, n.jsx)(H.A, {
                          assetId: t,
                          variant: "tooltip",
                          color: "secondary",
                          includeAtChar: !1,
                          linkToBrowse: !0
                        }),
                        (0, n.jsxs)(y.A, {
                          container: !0,
                          className: N.additionalDetails,
                          onClick: e,
                          children: [
                            x &&
                              (0, n.jsx)(A.A, {
                                assetId: t,
                                isWebViewAssetTile: !0,
                                showRatingsCount: !0,
                                showTextWhenNotEnoughRatings: !1
                              }),
                            p &&
                              (0, n.jsx)(P.A, {
                                color: "secondary",
                                variant: "tooltip",
                                children: u("Label.HasScripts")
                              })
                          ]
                        })
                      ]
                    })
                  })
                ]
              });
          return (0, n.jsx)(y.A, {
            ref: d,
            container: !0,
            draggable: !j,
            className: N.container,
            direction: "column",
            onDragStart: j
              ? (e) => e.preventDefault()
              : (e) => E({ assetWasDragged: !0, event: e }),
            onMouseEnter: () => M(!0),
            onMouseLeave: () => M(!1),
            children: j ? O(s, a) : O(() => E())
          });
        };
      K.displayName = "WebViewAssetTile";
      var X = a(46271),
        Z = a(47790),
        G = a(23786),
        J = a(48280),
        $ = a(45600),
        ee = a(20823),
        et = a(50479),
        ea = a(93974);
      let en = (0, E.A)()((e, t) => {
          let { isWebViewAvailable: a } = t,
            n = (0, ea.A)(a);
          return {
            artistName: {
              "&:hover": { textDecoration: "underline" },
              fontSize: a ? 12 : void 0,
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            artistNameContainer: {
              [e.breakpoints.up(ee.Yr)]: n.artistName.desktop,
              [e.breakpoints.down(ee.Yr)]: {
                ...n.artistName.compact,
                "&": { WebkitBoxOrient: "vertical", WebkitLineClamp: 1 },
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordBreak: "break-word"
              }
            }
          };
        }),
        er = (e) => {
          let { assetId: t } = e,
            { artist: a } = (0, i.Ay)(t),
            { isWebViewAvailable: o } = (0, f.U1)(),
            { classes: s } = en({ isWebViewAvailable: o }),
            { searchState: l } = (0, d.sI)(),
            c = (0, r.useMemo)(
              () => (a ? (0, et.Zn)("/audio", { ...l, artistName: a, pageNumber: 0 }) : ""),
              [a, l]
            );
          return (0, n.jsx)(y.A, {
            className: s.artistNameContainer,
            children: a
              ? (0, n.jsx)(P.A, {
                  className: s.artistName,
                  component: k(),
                  href: c,
                  onClick: (e) => e.stopPropagation(),
                  variant: "body2",
                  children: a
                })
              : (0, n.jsx)(H.A, { assetId: t, linkToBrowse: !0 })
          });
        };
      er.displayName = "ArtistName";
      let ei = (0, E.A)()((e, t) => {
          let { isWebViewAvailable: a } = t,
            n = (0, ea.A)(a);
          return {
            categoryContainer: {
              [e.breakpoints.up(ee.Yr)]: n.category.desktop,
              [e.breakpoints.down(ee.Yr)]: {
                ...n.category.compact,
                "&": { WebkitBoxOrient: "vertical", WebkitLineClamp: 1 },
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordBreak: "break-word"
              }
            },
            categoryLink: { "&:hover": { textDecoration: "underline" }, fontSize: a ? 12 : void 0 }
          };
        }),
        eo = (e) => {
          let { assetId: t } = e,
            {
              audioCategory: a,
              audioCategoryTranslated: o,
              audioSubCategory: s,
              audioSubCategoryTranslated: l
            } = (0, i.Ay)(t),
            { isWebViewAvailable: c } = (0, f.U1)(),
            { classes: u } = ei({ isWebViewAvailable: c }),
            { searchState: p } = (0, d.sI)(),
            { tags: m } = p,
            h = (0, r.useCallback)(
              (e) =>
                e
                  ? (0, et.Zn)("/audio", {
                      ...p,
                      pageNumber: 0,
                      tags: (function (e, t) {
                        let a = e.indexOf(t);
                        return -1 !== a ? e.filter((e, t) => t !== a) : [...e, t];
                      })(m, e)
                    })
                  : "",
              [p, m]
            ),
            g = h(a),
            v = h(s),
            b = o && a,
            x = l && s;
          return (0, n.jsxs)("div", {
            className: u.categoryContainer,
            "data-testid": "".concat(M.og, "audioCategoryContainer"),
            children: [
              b &&
                (0, n.jsx)(P.A, {
                  className: u.categoryLink,
                  component: k(),
                  href: g,
                  onClick: (e) => e.stopPropagation(),
                  variant: "body2",
                  children: o
                }),
              b && x && (0, n.jsx)(P.A, { variant: "body2", children: " - " }),
              x &&
                (0, n.jsx)(P.A, {
                  className: u.categoryLink,
                  component: k(),
                  href: v,
                  onClick: (e) => e.stopPropagation(),
                  variant: "body2",
                  children: l
                })
            ]
          });
        };
      eo.displayName = "AudioCategory";
      var es = a(46883),
        el = a(71684),
        ec = a(65733),
        ed = a(80062),
        eu = a(52143),
        ep = a(85732),
        em = a(51050),
        eh = a(55061),
        eg = a(59533);
      let ev = "rgba(18, 18, 18, 0.5)",
        ef = "rgba(68, 68, 68, 0.5)",
        eb = (0, E.A)()((e, t) => {
          let { isExpanded: a, isWebViewAvailable: n } = t;
          return {
            audioPlayer: {
              [e.breakpoints.up(ee.Yr)]: { padding: "0 8px", width: "70%" },
              [e.breakpoints.down(ee.Yr)]: { marginBottom: e.spacing(1) }
            },
            controlButton: { whiteSpace: "nowrap" },
            controlButtons: {
              alignItems: "center",
              gap: 4,
              marginLeft: 4,
              width: "auto",
              [e.breakpoints.up(ee.Yr)]: { height: 28 },
              [e.breakpoints.down(ee.Yr)]: { height: n ? 24 : 36 }
            },
            creatorName: { minWidth: 0 },
            description: {
              "&": { WebkitBoxOrient: "vertical", WebkitLineClamp: 2 },
              [e.breakpoints.up(ee.Yr)]: { padding: "0 8px", width: "70%" },
              boxOrient: "vertical",
              display: "-webkit-box",
              lineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              ...(n && { fontSize: 12 })
            },
            detailsIconButton: {
              "&:hover": { background: ef },
              backgroundColor: ev,
              borderRadius: 3,
              height: 24,
              whiteSpace: "nowrap",
              width: 24
            },
            expandedContainer: {
              overflow: "hidden",
              transition: n ? void 0 : e.transitions.create(["max-height", "margin-bottom"]),
              [e.breakpoints.up(ee.Yr)]: {
                marginBottom: a ? e.spacing(2) : 0,
                maxHeight: 100 * !!a
              },
              [e.breakpoints.down(ee.Yr)]: {
                marginBottom: 4 * !!a,
                marginRight: 8,
                maxHeight: 148 * !!a
              }
            },
            expandedRow: {
              display: "flex",
              marginBottom: e.spacing(1),
              [e.breakpoints.down(ee.Yr)]: { alignItems: "center", justifyContent: "space-between" }
            },
            getAssetButton: n ? { minHeight: "100%", padding: 0 } : {},
            saveIconButton: n
              ? {
                  "&:hover": { background: ef },
                  backgroundColor: ev,
                  borderRadius: 3,
                  height: 24,
                  transform: "none",
                  whiteSpace: "nowrap",
                  width: 24
                }
              : {}
          };
        }),
        ex = (e) => {
          let {
              assetId: t,
              assetLink: a,
              isExpanded: o,
              isPlaying: s,
              onAssetClicked: l,
              pagePosition: c,
              stopAudioPlayer: d,
              swimlaneName: u
            } = e,
            { translate: p } = (0, T.Bd)(),
            m = (0, Z.A)((e) => e.breakpoints.down(ee.Yr)),
            { description: h, durationSeconds: g } = (0, i.Ay)(t),
            { data: v } = (0, eg.sS)(t, { enabled: o }),
            b = null == v ? void 0 : v.location,
            x = null == v ? void 0 : v.format,
            {
              isSaved: w,
              handleClick: A,
              isLoading: C
            } = (0, eh.hr)({
              enabled: o,
              page: "audioRow",
              target: { targetId: t, targetType: j.HPC.Audio }
            }),
            [I, N] = (0, r.useState)(o);
          (0, r.useEffect)(() => {
            o && N(!0);
          }, [o]);
          let { isWebViewAvailable: S } = (0, f.U1)(),
            { classes: B } = eb({ isExpanded: o, isWebViewAvailable: S }),
            L = w ? W.Xhp : W.FxV,
            M = (0, n.jsx)(y.A, {
              className: B.creatorName,
              onClick: (e) => e.stopPropagation(),
              children: (0, n.jsx)(H.A, {
                assetId: t,
                color: S ? "secondary" : void 0,
                displayAsAuthor: !0,
                fontSizeOverride: S ? 12 : void 0,
                linkToBrowse: !0,
                variant: "body2"
              })
            }),
            R = (0, n.jsx)(y.A, {
              className: B.audioPlayer,
              onClick: (e) => e.stopPropagation(),
              children:
                b && !(0, eu.Cg)(x)
                  ? (0, n.jsx)(es.A, {
                      severity: "info",
                      children: p("Error.AudioPreviewUnavailableOnBrowser")
                    })
                  : (0, n.jsx)(ep.A, {
                      assetId: t,
                      src: null != b ? b : "",
                      audioFormat: x,
                      initialDuration: g,
                      isBrowseView: !0,
                      isPlaying: s,
                      placeholder: !b,
                      showTimes: !S,
                      onError: d,
                      onEnded: d
                    })
            });
          return (0, n.jsxs)(y.A, {
            className: B.expandedContainer,
            children: [
              m && R,
              (0, n.jsxs)(y.A, {
                className: B.expandedRow,
                children: [
                  (0, n.jsx)(P.A, {
                    variant: "body2",
                    color: m ? "secondary" : "inherit",
                    className: B.description,
                    onClick: (e) => e.stopPropagation(),
                    children: h
                  }),
                  !m && M
                ]
              }),
              (0, n.jsxs)(y.A, {
                alignItems: "center",
                className: B.expandedRow,
                display: "flex",
                justifyContent: "space-between",
                children: [
                  m ? M : R,
                  (0, n.jsxs)(y.A, {
                    container: !0,
                    className: B.controlButtons,
                    wrap: "nowrap",
                    onClick: (e) => e.stopPropagation(),
                    children: [
                      (0, n.jsx)(el.A, {
                        color: S ? "onMediaDark" : "secondary",
                        "aria-label": "saveButton",
                        onClick: A,
                        className: B.saveIconButton,
                        disabled: C,
                        children:
                          !S && C
                            ? (0, n.jsx)(ec.C, { color: "secondary", size: 20 })
                            : (0, n.jsx)(L, { fontSize: S ? "small" : "medium" })
                      }),
                      S
                        ? (0, n.jsx)(el.A, {
                            "aria-label": "detailsButton",
                            className: B.detailsIconButton,
                            component: k(),
                            href: a,
                            onClick: (e) => {
                              (e.stopPropagation(), l());
                            },
                            color: "onMediaDark",
                            "data-testid": "zoomIcon",
                            children: (0, n.jsx)(W.$Zd, { fontSize: "small" })
                          })
                        : (0, n.jsx)(ed.A, {
                            className: B.controlButton,
                            color: "secondary",
                            component: k(),
                            href: a,
                            "data-testid": "moreInfoButton",
                            variant: "contained",
                            size: "small",
                            children: (0, n.jsx)(P.A, {
                              variant: "buttonSmall",
                              children: p("Action.MoreInfo")
                            })
                          }),
                      I &&
                        (0, n.jsx)(em.A, {
                          className: B.getAssetButton,
                          assetId: t,
                          pagePosition: c,
                          swimlaneName: u,
                          size: "small"
                        })
                    ]
                  })
                ]
              })
            ]
          });
        };
      ex.displayName = "AudioRowExpandedSection";
      let ey = "#DF9252",
        ew = (0, E.A)()((e, t) => {
          let { isWebViewAvailable: a } = t;
          return { logo: { color: a ? ey : e.palette.actionV2.notice.containedHoverFocus } };
        }),
        eA = (e) => {
          let { width: t, height: a } = e,
            { isWebViewAvailable: r } = (0, f.U1)(),
            {
              classes: { logo: i }
            } = ew({ isWebViewAvailable: r });
          return (0, n.jsxs)("svg", {
            className: i,
            width: t,
            height: a,
            viewBox: "0 0 19 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "M4.66624 0.000488281L4.67402 8.20604C4.21513 7.9416 3.68624 7.77827 3.11846 7.77827C1.39179 7.77827 -0.000427246 9.17049 -0.000427246 10.8894C-0.000427246 12.6083 1.39179 14.0005 3.11846 14.0005C4.84513 14.0005 6.22179 12.6083 6.22179 10.8894V3.1116H9.33291V0.000488281L4.66624 0.000488281ZM3.11846 12.4449C2.26291 12.4449 1.56291 11.7449 1.56291 10.8894C1.56291 10.0338 2.26291 9.33382 3.11846 9.33382C3.97402 9.33382 4.67402 10.0338 4.67402 10.8894C4.67402 11.7449 3.97402 12.4449 3.11846 12.4449Z",
                fill: "currentColor"
              }),
              (0, n.jsx)("path", {
                d: "M13.6663 3.99512L13.6741 12.2007C13.2152 11.9362 12.6863 11.7729 12.1185 11.7729C10.3919 11.7729 8.99963 13.1651 8.99963 14.884C8.99963 16.6029 10.3919 17.9951 12.1185 17.9951C13.8452 17.9951 15.2219 16.6029 15.2219 14.884V7.10623H18.333V3.99512H13.6663ZM12.1185 16.4396C11.263 16.4396 10.563 15.7396 10.563 14.884C10.563 14.0285 11.263 13.3285 12.1185 13.3285C12.9741 13.3285 13.6741 14.0285 13.6741 14.884C13.6741 15.7396 12.9741 16.4396 12.1185 16.4396Z",
                fill: "currentColor"
              })
            ]
          });
        },
        eC = (0, E.A)()((e, t) => {
          let { isWebViewAvailable: a } = t;
          return { logo: { color: a ? ey : e.palette.actionV2.notice.containedHoverFocus } };
        }),
        ek = (e) => {
          let { width: t, height: a } = e,
            { isWebViewAvailable: r } = (0, f.U1)(),
            {
              classes: { logo: i }
            } = eC({ isWebViewAvailable: r });
          return (0, n.jsx)("svg", {
            className: i,
            width: t,
            height: a,
            viewBox: "0 0 19 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              d: "M9.66667 0.158424H9.60904C9.39343 0.170798 9.18749 0.251649 9.02102 0.389287C8.85474 0.527094 8.73694 0.714396 8.68456 0.923887L6.56443 9.40763L5.57724 5.95503C5.51673 5.74366 5.38909 5.55755 5.21349 5.42516C5.03805 5.29278 4.82413 5.22108 4.60412 5.22091H1.67917C1.31746 5.22091 0.983195 5.41398 0.802333 5.72722C0.621472 6.04046 0.621472 6.42641 0.802333 6.73966C0.983195 7.05292 1.31745 7.24597 1.67917 7.24597H3.84066L5.65622 13.5996C5.72402 13.8097 5.85607 13.9937 6.03354 14.1252C6.21118 14.2569 6.42543 14.3298 6.64646 14.3335C6.86919 14.3298 7.08447 14.2526 7.25887 14.114C7.43328 13.9755 7.55719 13.7833 7.61126 13.5672L9.86006 4.57094L11.7555 9.62621C11.8436 9.85995 12.015 10.0527 12.2367 10.1676C12.4584 10.2827 12.7149 10.3117 12.9566 10.2491C13.1985 10.1864 13.4085 10.0367 13.5466 9.82858L15.2708 7.2457H17.6542C18.0159 7.2457 18.3502 7.05264 18.531 6.73939C18.7119 6.42615 18.7119 6.0402 18.531 5.72695C18.3502 5.4137 18.0159 5.22064 17.6542 5.22064H14.7293C14.3908 5.22064 14.0746 5.38964 13.8868 5.67119L12.9583 7.06432L10.6154 0.81531C10.5431 0.622247 10.4134 0.455791 10.2439 0.33851C10.0744 0.221045 9.87296 0.158256 9.66667 0.158424Z",
              fill: "currentColor"
            })
          });
        },
        eI = (0, E.A)()((e, t) => {
          let { isEvenRow: a, isExpanded: n, isWebViewAvailable: r } = t,
            i = r ? 24 : 36,
            o = (0, ea.A)(r);
          return {
            assetName: {
              cursor: "pointer",
              width: "fit-content",
              [e.breakpoints.down(ee.Yr)]: {
                "&": { WebkitBoxOrient: "vertical", WebkitLineClamp: 1 },
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordBreak: "break-word"
              },
              ...(r && { color: e.palette.content.alert.inform, fontSize: 12 })
            },
            assetNameContainer: {
              [e.breakpoints.up(ee.Yr)]: o.assetName.desktop,
              [e.breakpoints.down(ee.Yr)]: o.assetName.compact
            },
            audioIconWrapper: {
              alignItems: "center",
              display: "flex",
              height: i,
              justifyContent: "center",
              [e.breakpoints.up(ee.Yr)]: o.audioIcon.desktop,
              [e.breakpoints.down(ee.Yr)]: o.audioIcon.compact
            },
            container: {
              "&:hover": { backgroundColor: e.palette.states.hover },
              backgroundColor: e.palette.media.secondaryBackground,
              borderBottom: "1px solid ".concat(e.palette.media.divider),
              flexWrap: "nowrap",
              justifyContent: "center",
              textAlign: "left",
              width: "100%",
              [e.breakpoints.up(ee.Yr)]: { padding: "0 8px" },
              [e.breakpoints.down(ee.Yr)]: { padding: "0 4px" },
              ...(r && {
                "&:hover": {
                  backgroundColor: e.palette.background.media,
                  borderColor: e.palette.actionV2.primaryBrand.fill
                },
                backgroundColor: a ? e.palette.background.default : e.palette.background.media,
                border: "1px solid transparent",
                borderRadius: 4,
                color: e.palette.content.muted,
                ...(n && { border: "1px solid ".concat(e.palette.actionV2.primaryBrand.fill) })
              })
            },
            contentContainer: {
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              flexGrow: 1,
              flexWrap: "nowrap",
              height: i
            },
            contentWrapper: { flex: 1, minWidth: 0 },
            expandIcon: {
              ...o.expandIcon.desktop,
              height: i,
              transform: n ? "rotate(180deg)" : "rotate(0deg)",
              transition: e.transitions.create("transform")
            },
            length: {
              [e.breakpoints.up(ee.Yr)]: o.length.desktop,
              [e.breakpoints.down(ee.Yr)]: o.length.compact,
              ...(r && { fontSize: 12 })
            }
          };
        }),
        eN = (e) => {
          let {
              assetId: t,
              assetLink: a,
              onAssetClicked: o,
              pagePosition: l,
              swimlaneName: c,
              tileRef: d
            } = e,
            { assetName: u, durationSeconds: p, isMusic: m } = (0, i.Ay)(t),
            { isWebViewAvailable: h } = (0, f.U1)(),
            b = (0, Z.A)((e) => e.breakpoints.down(ee.Yr)),
            {
              isExpanded: w,
              isHovering: A,
              isPlaying: C,
              setIsHovering: k,
              toggleIsExpanded: I,
              toggleIsPlaying: N,
              stopAudioPlayer: j
            } = (function (e) {
              let {
                  album: t,
                  artist: a,
                  audioCategory: n,
                  audioSubCategory: o,
                  audioType: l,
                  genre: c,
                  isMusic: d,
                  isSoundEffect: u
                } = (0, i.Ay)(e),
                p = (0, v.A)(e),
                { sendEvent: m } = (0, g.MP)(),
                { expandedAssetId: h, setExpandedAssetId: f } = (0, x.lP)(),
                b = h === e,
                [y, w] = (0, r.useState)(!1),
                [A, C] = (0, r.useState)(!1),
                k = (0, r.useCallback)(
                  (e) => {
                    m(e ? s.Ur.AudioPlayed : s.Ur.AudioStopped, {
                      ...p,
                      artist: a,
                      audioType: null != l ? l : void 0,
                      musicAlbum: t,
                      musicGenre: d ? c : void 0,
                      soundEffectCategory: u ? n : void 0,
                      soundEffectSubcategory: u ? o : void 0
                    });
                  },
                  [t, a, p, n, o, l, c, d, u, m]
                ),
                I = (0, r.useCallback)(() => {
                  f(b ? null : e);
                }, [b, e, f]),
                N = (0, r.useCallback)(
                  (e) => {
                    (e.stopPropagation(), k(!A), C((e) => !e));
                  },
                  [A, k]
                ),
                j = (0, r.useCallback)(() => {
                  (k(!1), C(!1));
                }, [k]);
              return (
                (0, r.useEffect)(() => {
                  A && f(e);
                }, [e, A, f]),
                (0, r.useEffect)(() => {
                  b || C(!1);
                }, [b]),
                {
                  isExpanded: b,
                  isHovering: y,
                  isPlaying: A,
                  setIsHovering: w,
                  stopAudioPlayer: j,
                  toggleIsExpanded: I,
                  toggleIsPlaying: N
                }
              );
            })(t),
            { onInsertAsset: S } = (0, q.A)({
              assetId: t,
              pagePosition: l,
              swimlaneName: null != c ? c : ""
            }),
            { classes: T } = eI({ isEvenRow: l % 2 == 1, isExpanded: w, isWebViewAvailable: h }),
            B = h ? 16 : 19,
            L = (0, r.useMemo)(
              () =>
                A || C || w
                  ? (0, n.jsx)($.A, { isPlaying: C, compact: !0, onClick: N })
                  : m
                    ? (0, n.jsx)(eA, { width: B, height: B })
                    : (0, n.jsx)(ek, { width: B, height: B }),
              [B, w, A, m, C, N]
            ),
            M = (0, r.useCallback)(() => {
              let e = !w;
              (I(), e && o());
            }, [w, I, o]);
          return (0, n.jsxs)(y.A, {
            ref: d,
            container: !0,
            className: T.container,
            "data-testid": "audioRow",
            onClick: M,
            onMouseEnter: () => k(!0),
            onMouseLeave: () => k(!1),
            children: [
              (0, n.jsx)(y.A, { className: T.audioIconWrapper, children: L }),
              (0, n.jsxs)(y.A, {
                className: T.contentWrapper,
                children: [
                  (0, n.jsxs)(y.A, {
                    className: T.contentContainer,
                    children: [
                      (0, n.jsx)(y.A, {
                        alignItems: "center",
                        container: !0,
                        className: T.assetNameContainer,
                        children: (0, n.jsx)(P.A, {
                          variant: "smallLabel1",
                          className: T.assetName,
                          onClick: h ? (e) => S({ event: e }) : void 0,
                          children: u
                        })
                      }),
                      (0, n.jsx)(er, { assetId: t }),
                      (0, n.jsx)(eo, { assetId: t }),
                      (0, n.jsx)(P.A, {
                        variant: "body2",
                        className: T.length,
                        children: (0, J.A)(p)
                      })
                    ]
                  }),
                  (0, n.jsx)(ex, {
                    assetId: t,
                    assetLink: a,
                    isExpanded: w,
                    isPlaying: C,
                    onAssetClicked: o,
                    pagePosition: l,
                    stopAudioPlayer: j,
                    swimlaneName: c
                  })
                ]
              }),
              !b && (0, n.jsx)(G.E, { className: T.expandIcon })
            ]
          });
        };
      eN.displayName = "AudioRow";
      let ej = (0, E.A)()((e, t, a) => {
          let { isWebViewAvailable: n } = t,
            { hoverAttributesContainer: r, hoverAttributes: i, image: o, shadow: s } = a,
            l = e.transitions.create("background-color", {
              duration: e.transitions.duration.short
            });
          return {
            assetName: {
              "&": { display: "-webkit-box" },
              boxOrient: "vertical",
              display: "box",
              lineClamp: 2,
              overflow: "hidden",
              overflowWrap: "break-word",
              textOverflow: "ellipsis",
              width: "100%"
            },
            container: {
              "&:hover": { backgroundColor: e.palette.states.hover },
              backgroundColor: n ? e.palette.surface[0] : e.palette.surface[300],
              borderRadius: 8,
              height: 85,
              overflow: "hidden",
              padding: 8,
              position: "relative",
              transition: l,
              width: "100%",
              ["&:hover .".concat(r)]: { maxHeight: 85, transition: l },
              ["&:hover .".concat(i)]: { opacity: 1 },
              ["&:hover .".concat(o)]: { backgroundColor: "transparent" },
              ["&:hover .".concat(s)]: { opacity: 1, visibility: "visible" },
              [e.breakpoints.up(ee.Yr)]: { flexBasis: "calc(50% - 8px)" }
            },
            hoverAttributes: {
              opacity: 0,
              transition: e.transitions.create("opacity", {
                duration: e.transitions.duration.short
              })
            },
            hoverAttributesContainer: {
              borderRadius: "0 0 8px 8px",
              maxHeight: 0,
              padding: "0 ".concat(8, "px ").concat(8, "px ").concat(8, "px"),
              position: "absolute",
              right: 8,
              top: 8,
              width: "auto",
              zIndex: 1
            },
            image: {
              filter: "light" === e.palette.mode ? "invert()" : "none",
              height: 34,
              marginTop: 5,
              maskImage: "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%)",
              transition: l,
              width: "auto"
            },
            imageContainer: { display: "block" },
            imageLink: { height: "auto", width: "100%" },
            shadow: {
              background: "linear-gradient(to left, ".concat(
                e.palette.states.hover,
                ", transparent)"
              ),
              borderRadius: "0 8px 8px 0",
              height: "100%",
              opacity: 0,
              position: "absolute",
              right: 0,
              top: 0,
              transition: "visibility 0s linear,opacity 0.25s linear",
              visibility: "hidden",
              width: 50
            }
          };
        }),
        eS = (e) => {
          let { assetId: t, assetLink: a, onAssetClicked: r, tileRef: o } = e,
            { assetName: s } = (0, i.Ay)(t),
            { isWebViewAvailable: l } = (0, f.U1)(),
            { classes: c } = ej({ isWebViewAvailable: l }),
            d = (0, Z.A)((e) => e.breakpoints.down(ee.Yr));
          return (0, n.jsxs)(y.A, {
            ref: o,
            container: !0,
            className: c.container,
            direction: "row",
            children: [
              (0, n.jsx)(P.A, {
                component: k(),
                "data-testid": "fontTile",
                href: a,
                variant: "smallLabel1",
                className: c.assetName,
                onClick: r,
                children: s
              }),
              (0, n.jsx)(k(), {
                className: c.imageLink,
                href: a,
                onClick: r,
                passHref: !0,
                children: (0, n.jsx)(N.A, {
                  alt: s || "Asset Thumbnail",
                  containerClass: c.imageContainer,
                  thumbnailImgClassName: c.image,
                  thumbnailSize: I.I1._728x90,
                  targetId: t,
                  type: I.uS.assetThumbnail
                })
              }),
              !d &&
                (0, n.jsx)(y.A, {
                  className: c.hoverAttributesContainer,
                  children: (0, n.jsx)(y.A, {
                    className: c.hoverAttributes,
                    children: (0, n.jsx)(H.A, {
                      assetId: t,
                      variant: "smallLabel2",
                      linkToBrowse: !0
                    })
                  })
                }),
              (0, n.jsx)(y.A, { className: c.shadow })
            ]
          });
        };
      eS.displayName = "FontTile";
      let eT = r.memo(
        (e) => {
          let t,
            {
              assetId: a,
              fillsColumn: y = !1,
              forceCompactTileLayout: w = !1,
              pagePosition: A,
              swimlaneName: C
            } = e,
            { assetName: k, isAudio: I, isFont: N } = (0, i.Ay)(a),
            j = (0, X.A)(w),
            { onAssetClicked: S, tileRef: T } = (function (e) {
              let { assetId: t, pagePosition: a, swimlaneName: n } = e,
                { isWebViewAvailable: o } = (0, f.U1)(),
                { sendEvent: l } = (0, g.MP)(),
                { searchState: c } = (0, d.sI)(),
                { searchUuid: y } = (0, d.yq)(),
                { firedAssetImpressions: w } = (0, x.lP)(),
                A = (0, u.A)(),
                { audioCategory: C, hasScripts: k } = (0, i.Ay)(t),
                { isVerified: I } = (0, p.A)(t),
                { quantity: N } = (0, m.A)(t),
                j = (0, v.A)(t),
                { data: S } = (0, b.nx)(),
                T = (0, r.useRef)(!1),
                P = (0, r.useRef)(null),
                { pageNumber: B, keyword: L } = c,
                M = (0, r.useCallback)(() => {
                  if (!P.current || !t) return;
                  let e = P.current.getBoundingClientRect();
                  if (
                    (o
                      ? ((e) => {
                          let t = window.innerHeight || document.documentElement.clientHeight,
                            a = window.innerWidth || document.documentElement.clientWidth;
                          return e.bottom > 0 && e.top < t && e.right > 0 && e.left < a;
                        })(e)
                      : e.top >= 0 &&
                        e.left >= 0 &&
                        e.bottom - e.height / 2 <=
                          (window.innerHeight || document.documentElement.clientHeight) &&
                        e.right - e.width / 2 / 2 <=
                          (window.innerWidth || document.documentElement.clientWidth)) &&
                    !T.current
                  ) {
                    T.current = !0;
                    let e = ""
                      .concat(y, ":")
                      .concat(null != n ? n : "", ":")
                      .concat(t);
                    if (w.has(e)) return;
                    (w.add(e),
                      l(s.Ur.AssetImpression, {
                        ...j,
                        audioCategory: null != C ? C : "",
                        hasScripts: k,
                        isVerifiedCreator: I,
                        pageNumber: B,
                        pagePosition: a,
                        price: (0, h.A)(N),
                        searchKeyword: L,
                        source: A,
                        subSource: null != n ? n : void 0
                      }));
                  }
                }, [j, t, C, w, k, I, o, L, B, a, N, y, l, A, n]);
              return (
                (0, r.useEffect)(() => {
                  T.current = !1;
                }, [y]),
                (0, r.useEffect)(
                  () => (
                    M(),
                    window.addEventListener("scroll", M, !0),
                    window.addEventListener("resize", M, !0),
                    () => {
                      (window.removeEventListener("scroll", M, !0),
                        window.removeEventListener("resize", M, !0));
                    }
                  ),
                  [M]
                ),
                {
                  onAssetClicked: (0, r.useCallback)(() => {
                    t &&
                      l(s.Ur.AssetClicked, {
                        ...j,
                        buyerStatus: S,
                        hasScripts: k,
                        isVerifiedCreator: I,
                        pageNumber: B,
                        pagePosition: a,
                        price: (0, h.A)(N),
                        source: A,
                        subSource: null != n ? n : void 0
                      });
                  }, [j, t, S, k, I, B, a, N, l, A, n]),
                  tileRef: P
                }
              );
            })({ assetId: a, pagePosition: A, swimlaneName: C }),
            { searchState: P } = (0, d.sI)(),
            { keyword: B, pageNumber: L } = P,
            M = a && k ? (0, o.A)(a, k, B, C ? void 0 : L, A) : c.Sg;
          return (
            (t = I ? eN : N ? eS : "webView" === j ? K : "compact" === j ? V : z),
            (0, n.jsx)(l.A, {
              assetId: a,
              menuSource: s.dS.AssetTileRightClick,
              children: (0, n.jsx)(t, {
                assetId: a,
                assetLink: M,
                fillsColumn: y,
                onAssetClicked: S,
                pagePosition: A,
                swimlaneName: C,
                tileRef: T
              })
            })
          );
        },
        (e, t) =>
          e.assetId === t.assetId &&
          e.fillsColumn === t.fillsColumn &&
          e.forceCompactTileLayout === t.forceCompactTileLayout &&
          e.pagePosition === t.pagePosition &&
          e.swimlaneName === t.swimlaneName
      );
      eT.displayName = "AssetTile";
      let eP = eT;
    },
    85732: (e, t, a) => {
      a.d(t, { A: () => y });
      var n = a(37876),
        r = a(26521),
        i = a(48280),
        o = a(52863),
        s = a(47790),
        l = a(5269),
        c = a(83524),
        d = a(6286),
        u = a(14232),
        p = a(97688),
        m = a(21226),
        h = a(20823),
        g = a(52143),
        v = a(80087),
        f = a(95372),
        b = a(60937);
      let x = (0, a(46180).A)()((e, t) => {
          let { isBrowseView: a, isWebViewAvailable: n, placeholder: r } = t;
          return {
            leftTimeStamp: { marginLeft: a ? 8 : 12, minWidth: 34 },
            rightTimestamp: { marginRight: a ? 8 : void 0, minWidth: 34 },
            slider: {
              ...(n && {
                ".MuiSlider-thumb": {
                  boxShadow: "none",
                  color: e.palette.states.disabled,
                  height: a ? 16 : void 0,
                  width: a ? 16 : void 0
                },
                ".MuiSlider-track": { color: e.palette.actionV2.primaryBrand.fill }
              }),
              ...(r && {
                ".MuiSlider-thumb": { display: "none" },
                ".MuiSlider-track": { color: "transparent" }
              })
            },
            sliderWrapper: {
              alignItems: "center",
              display: "flex",
              flexGrow: 1,
              padding: a && n ? "0 12px" : "0 20px"
            }
          };
        }),
        y = (e) => {
          var t, a;
          let {
              assetId: y,
              src: w,
              audioFormat: A,
              initialDuration: C = 0,
              isBrowseView: k = !1,
              isPlaying: I,
              placeholder: N = !1,
              showTimes: j,
              onEnded: S,
              onError: T
            } = e,
            P = (0, u.useRef)(null),
            B = (0, u.useRef)(),
            { translate: L } = (0, o.Bd)(),
            { isWebViewAvailable: M } = (0, v.U1)(),
            R = (0, p.jE)(),
            { user: U } = (0, m.kQ)(),
            { classes: E } = x({ isBrowseView: k, isWebViewAvailable: M, placeholder: N }),
            { setMessageAndSeverity: O } = (0, f.dh)(),
            [D, V] = (0, u.useState)(0),
            [W, F] = (0, u.useState)(C),
            [H, Y] = (0, u.useState)(!1),
            [z, q] = (0, u.useState)(!1),
            [Q, _] = (0, u.useState)(),
            K = (0, s.A)((e) => e.breakpoints.down(h.Yr)),
            X =
              N ||
              !Number.isFinite(null == (t = P.current) ? void 0 : t.currentTime) ||
              !Number.isFinite(null == (a = P.current) ? void 0 : a.duration),
            Z = L("Error.PlayingAudio");
          (0, u.useEffect)(() => {
            let e;
            if (N) return;
            let t = !0;
            return (
              (async () => {
                try {
                  let a = await (await fetch(w)).blob();
                  t && ((e = (0, g.dJ)(a, A)), _(e));
                } catch (e) {
                  t && Y(!0);
                }
              })(),
              () => {
                ((t = !1), e && URL.revokeObjectURL(e));
              }
            );
          }, [A, N, w]);
          let G = () => {
              var e;
              let t = null == (e = P.current) ? void 0 : e.duration;
              t && Number.isFinite(t) && (F(t), (0, b.e7)(R, y, null == U ? void 0 : U.id, t));
            },
            J = (0, u.useCallback)(async () => {
              if (P.current)
                try {
                  ((B.current = P.current.play()), await B.current);
                } catch (e) {
                  if (e instanceof DOMException && "AbortError" === e.name && !Q) return;
                  (T && T(), O({ autoHide: !0, severity: "error", translatedMessage: Z }));
                }
            }, [Q, Z, T, O]),
            $ = (0, u.useCallback)(
              (e, t) => {
                if ((e.stopPropagation(), P.current)) {
                  let e = "number" == typeof t ? t : t[0];
                  (q(!0), V(e), I && P.current.pause());
                }
              },
              [I]
            ),
            ee = (0, u.useCallback)(
              (e, t) => {
                if ((e.stopPropagation(), P.current)) {
                  let e = "number" == typeof t ? t : t[0];
                  (q(!1), V(e), (P.current.currentTime = e), I && J());
                }
              },
              [I, J]
            );
          return ((0, u.useEffect)(() => {
            let e, t;
            return (
              !z &&
                I &&
                (e = setInterval(() => {
                  let { currentTime: e, duration: a } = P.current || {};
                  if (P.current && e && a) {
                    if (void 0 !== t && e < t) return;
                    ((t = e), V(e));
                  }
                }, 100)),
              () => {
                e && clearInterval(e);
              }
            );
          }, [z, I]),
          (0, u.useEffect)(() => {
            N ||
              (async () => {
                if (P.current)
                  if (I) (P.current.ended && ((P.current.currentTime = 0), V(0)), J());
                  else
                    try {
                      (await B.current, P.current.pause());
                    } catch (e) {}
              })();
          }, [I, N, J]),
          (0, u.useEffect)(() => {
            (P.current && (P.current.currentTime = 0), V(0));
          }, [w]),
          H)
            ? null
            : (0, n.jsxs)(l.A, {
                container: !0,
                direction: "row",
                alignItems: "center",
                "data-testid": "".concat(r.og, "audioPlayer"),
                children: [
                  (0, n.jsx)("audio", {
                    ref: P,
                    src: Q,
                    onEnded: () => {
                      var e;
                      let t = null == (e = P.current) ? void 0 : e.duration;
                      (t && Number.isFinite(t) && V(t), null == S || S());
                    },
                    onLoadedMetadata: G,
                    onDurationChange: G
                  }),
                  j &&
                    (0, n.jsx)(c.A, {
                      className: E.leftTimeStamp,
                      variant: K && k ? "body2" : "body1",
                      children: (0, i.A)(D || 0)
                    }),
                  (0, n.jsx)(l.A, {
                    className: E.sliderWrapper,
                    children: (0, n.jsx)(d.S, {
                      className: E.slider,
                      value: D,
                      min: 0,
                      max: W > 0 ? W : 1,
                      step: W < 120 ? 0.01 : 1,
                      onChange: $,
                      onChangeCommitted: ee,
                      disabled: X,
                      "aria-label": "audio slider"
                    })
                  }),
                  j &&
                    (0, n.jsx)(c.A, {
                      className: E.rightTimestamp,
                      variant: K && k ? "body2" : "body1",
                      "data-testid": "".concat(r.og, "rightTimestamp"),
                      children: (0, i.A)(W)
                    })
                ]
              });
        };
    },
    89742: (e, t, a) => {
      a.d(t, { A: () => I });
      var n = a(37876),
        r = a(14232),
        i = a(52863),
        o = a(5269),
        s = a(83524),
        l = a(80062),
        c = a(48230),
        d = a.n(c),
        u = a(16999),
        p = a(21226),
        m = a(3088),
        h = a(30580),
        g = a(75804),
        v = a(79738),
        f = a(46180),
        b = a(20823),
        x = a(86131),
        y = a(95659);
      let w = "".concat(
          "".concat(
            "https://assets.create.roblox.com/store/7820b664c29b4b15235ad49217c53b00e6f2d065/assets",
            "/common"
          ),
          "/unauthorized.png"
        ),
        A = { width: "100%", height: "100%" },
        C = { large: 376, compact: 240 },
        k = (0, f.A)()((e) => ({
          root: { ...A },
          background: { alignItems: "center" },
          errorArea: {
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: "6px 16px 32px"
          },
          errorImage: {
            ...A,
            maxWidth: C.large,
            maxHeight: C.large,
            [e.breakpoints.down(b.Yr)]: { width: C.compact }
          },
          textHeader: { maxWidth: "492px", paddingBottom: 8 }
        })),
        I = (e) => {
          var t;
          let { assetId: a, assetTypeId: c, errorCode: f } = e,
            { translate: b } = (0, i.Bd)(),
            { user: A, login: C } = (0, p.kQ)(),
            { sendEvent: I } = (0, m.MP)(),
            { themeMode: N } = (0, g.eP)(),
            {
              classes: { root: j, background: S, errorArea: T, errorImage: P, textHeader: B }
            } = k(),
            L = (0, v.A)({
              assetTypeId: c,
              targetId: null != (t = null == a ? void 0 : a.toString()) ? t : "0"
            }),
            {
              headingKey: M,
              descriptionKey: R,
              imagePath: U
            } = (function (e, t) {
              return (
                {
                  [u.vi.NOT_FOUND]: {
                    descriptionKey: "Description.PageNotFound",
                    headingKey: "Heading.PageNotFound",
                    imagePath: "dark" === t ? x : y
                  },
                  [u.vi.FORBIDDEN]: {
                    descriptionKey: "Description.AccessDenied",
                    headingKey: "Heading.AccessDenied",
                    imagePath: w
                  }
                }[e] || {
                  descriptionKey: "Description.UnknownError",
                  headingKey: "Heading.UnknownError",
                  imagePath: "dark" === t ? x : y
                }
              );
            })(f, N),
            E = (0, r.useCallback)(() => {
              a && I(h.Ur.ErrorPageReportAssetClicked, { assetId: a });
            }, [a, I]);
          return (0, n.jsx)(o.A, {
            className: j,
            alignItems: "center",
            justifyContent: "center",
            "data-testid": "errorPage",
            container: !0,
            children: (0, n.jsxs)(o.A, {
              container: !0,
              item: !0,
              className: S,
              direction: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              children: [
                (0, n.jsx)(o.A, {
                  item: !0,
                  children: (0, n.jsx)("img", { className: P, src: U, alt: "error" })
                }),
                (0, n.jsxs)(o.A, {
                  item: !0,
                  className: T,
                  children: [
                    (0, n.jsx)(s.A, {
                      align: "center",
                      color: "primary",
                      component: "h4",
                      variant: "h4",
                      className: B,
                      children: b(M)
                    }),
                    (0, n.jsx)(s.A, {
                      align: "center",
                      className: B,
                      color: "secondary",
                      component: "p",
                      variant: "body2",
                      children: b(R)
                    }),
                    a &&
                      f !== u.vi.NOT_FOUND &&
                      (A
                        ? (0, n.jsx)(l.A, {
                            children: (0, n.jsx)(d(), {
                              href: L,
                              onClick: E,
                              passHref: !0,
                              children: b("Label.ReportItem")
                            })
                          })
                        : (0, n.jsx)(l.A, {
                            onClick: () => {
                              C();
                            },
                            children: b("Label.ReportItem")
                          }))
                  ]
                })
              ]
            })
          });
        };
    },
    90647: (e, t, a) => {
      a.d(t, { Nv: () => C, h: () => T, CS: () => N, dD: () => S, p1: () => j });
      var n = a(38455),
        r = a(97688),
        i = a(86504),
        o = a(10543),
        s = a(21226),
        l = a(14232),
        c = a(52863),
        d = a(94888),
        u = a(80087),
        p = a(45710),
        m = a(66629),
        h = a(55447);
      class g extends m.A {
        async getIsItemOwned(e) {
          return this.inventoryApi.v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet(e);
        }
        async deleteInventoryAsset(e) {
          let { raw: t } = await this.inventoryV2Api.v2InventoryAssetAssetIdDeleteRaw({
            assetId: e
          });
          return t.status;
        }
        constructor(e = (0, h.Jy)("inventory")) {
          (super(e),
            (this.inventoryApi = new o.LN(this.defaultConfiguration)),
            (this.inventoryV2Api = new p.F6(this.defaultConfiguration)),
            (this.getIsItemOwned = this.getIsItemOwned.bind(this)),
            (this.deleteInventoryAsset = this.deleteInventoryAsset.bind(this)));
        }
      }
      let v = new g();
      var f = a(54716),
        b = a(18335),
        x = a(95372),
        y = a(97979);
      function w(e, t) {
        return "".concat("store_pendingPurchase_").concat(e, "_").concat(t);
      }
      let A = new Map();
      function C(e, t) {
        let a = Date.now(),
          n = w(e, t);
        A.set(n, a);
        try {
          localStorage.setItem(n, JSON.stringify(a));
        } catch (e) {}
        window.dispatchEvent(new CustomEvent("local-storage", { detail: { key: n, newValue: a } }));
      }
      function k(e, t) {
        if (!e || !t) return void A.clear();
        let a = w(e, t);
        A.delete(a);
        try {
          localStorage.removeItem(a);
        } catch (e) {}
        window.dispatchEvent(
          new CustomEvent("local-storage", { detail: { key: a, newValue: null } })
        );
      }
      function I(e, t) {
        return ["".concat("inventory_", "isItemOwned"), e, t];
      }
      function N(e, t) {
        var a, r;
        let { user: i, isFetched: l } = (0, s.kQ)();
        return (0, n.I)({
          enabled: l && (null == (a = null == t ? void 0 : t.enabled) || a),
          queryFn: () =>
            (null == i ? void 0 : i.id) !== void 0 &&
            v.getIsItemOwned({ itemTargetId: e, itemType: o.Nj.NUMBER_0, userId: i.id }),
          queryKey: I(e, null == i ? void 0 : i.id),
          refetchOnWindowFocus: null != (r = null == t ? void 0 : t.refetchOnWindowFocus) && r,
          retry: f.ht,
          staleTime: f.uI
        });
      }
      function j() {
        let e = (0, r.jE)(),
          { user: t } = (0, s.kQ)();
        return (a, n) => {
          (e.cancelQueries({ queryKey: I(a, null == t ? void 0 : t.id) }),
            e.setQueryData(I(a, null == t ? void 0 : t.id), n));
        };
      }
      function S(e, t) {
        let { user: a } = (0, s.kQ)(),
          r = (function (e, t) {
            var a, r;
            let { user: i, isFetched: p } = (0, s.kQ)(),
              { ready: m } = (0, c.Bd)(),
              { isSuccess: h } = (0, y.q)(e),
              { isSuccess: g } = (0, b.nk)(e),
              { purchaseSuccess: x, setParams: N } = (0, d.A)(),
              { isWebViewAvailable: j } = (0, u.U1)(),
              S = null != (a = null == t ? void 0 : t.intervalMs) ? a : 3e3,
              T = null != (r = null == t ? void 0 : t.maxAttempts) ? r : j ? 100 : 300,
              P = (0, l.useRef)(null),
              B = (0, l.useRef)(null),
              L = null == i ? void 0 : i.id,
              M = (0, l.useSyncExternalStore)(
                (0, l.useCallback)(
                  (t) => {
                    if (void 0 === L) return () => {};
                    let a = w(L, e),
                      n = (e) => {
                        e.key === a &&
                          (null !== e.newValue ? A.set(a, Number(e.newValue)) : A.delete(a), t());
                      },
                      r = (e) => {
                        var n;
                        (null == (n = e.detail) ? void 0 : n.key) === a && t();
                      };
                    return (
                      window.addEventListener("storage", n),
                      window.addEventListener("local-storage", r),
                      () => {
                        (window.removeEventListener("storage", n),
                          window.removeEventListener("local-storage", r));
                      }
                    );
                  },
                  [e, L]
                ),
                () =>
                  void 0 !== L
                    ? (function (e, t) {
                        let a = w(e, t),
                          n = A.get(a);
                        if (void 0 !== n) return n;
                        try {
                          let e = localStorage.getItem(a);
                          if (null !== e) {
                            let t = Number(e);
                            if (!Number.isNaN(t)) return (A.set(a, t), t);
                          }
                        } catch (e) {}
                        return null;
                      })(L, e)
                    : null
              ),
              R = null !== M && Date.now() - M < (j ? 12e5 : 36e5),
              U = p && (x || R);
            ((0, l.useEffect)(() => {
              void 0 === L || null === M || R || k(L, e);
            }, [e, L, M, R]),
              (0, l.useEffect)(() => {
                void 0 !== L && x && (C(L, e), N({ purchaseSuccess: null }));
              }, [e, x, N, L]),
              (0, l.useEffect)(() => {
                U ? (B.current = e) : (P.current = null);
              }, [e, U]));
            let E = (0, n.I)({
              enabled: U,
              queryFn: async () =>
                (null == i ? void 0 : i.id) !== void 0 &&
                v.getIsItemOwned({ itemTargetId: e, itemType: o.Nj.NUMBER_0, userId: i.id }),
              queryKey: I(e, null == i ? void 0 : i.id),
              refetchInterval: (t) =>
                !0 !== t.state.data &&
                ((null === P.current && (P.current = t.state.dataUpdateCount),
                t.state.dataUpdateCount - P.current >= T)
                  ? (void 0 !== L && k(L, e), (B.current = null), !1)
                  : S),
              staleTime: f.uI
            });
            return (
              (0, l.useEffect)(() => {
                if (B.current === e && h && g && m && !0 === E.data) {
                  var a;
                  (null == t || null == (a = t.onPollSuccess) || a.call(t),
                    void 0 !== L && k(L, e),
                    (B.current = null));
                }
              }, [e, h, g, m, t, E.data, L]),
              { data: E.data, isPolling: U && !0 !== E.data, isSuccess: E.isSuccess, shouldPoll: U }
            );
          })(e, t),
          i = N(e, {
            enabled: !r.shouldPoll,
            refetchOnWindowFocus: (e) => !0 !== e.state.data && "always"
          });
        return ((0, l.useEffect)(() => {
          !0 === i.data && (null == a ? void 0 : a.id) !== void 0 && k(a.id, e);
        }, [e, i.data, null == a ? void 0 : a.id]),
        r.shouldPoll)
          ? { data: r.data, isPolling: r.isPolling, isSuccess: r.isSuccess }
          : { data: i.data, isPolling: !1, isSuccess: i.isSuccess };
      }
      function T() {
        let e = (0, r.jE)(),
          { user: t } = (0, s.kQ)(),
          { translate: a } = (0, c.Bd)(),
          { setMessageAndSeverity: n } = (0, x.dh)();
        return (0, i.n)({
          mutationFn: async (e) => {
            let { assetId: t } = e;
            if (200 !== (await v.deleteInventoryAsset(t)))
              throw Error("Failed to delete asset ".concat(t, " from inventory"));
          },
          onError: () => {
            n({ severity: "error", translatedMessage: a("Error.UnexpectedError") });
          },
          onSuccess: (r, i) => {
            let { assetId: o, assetName: s } = i;
            (e.cancelQueries({ queryKey: I(o, null == t ? void 0 : t.id) }),
              e.setQueryData(I(o, null == t ? void 0 : t.id), !1),
              n({
                severity: "success",
                translatedMessage: a("Message.SuccessfulDeletion", {
                  assetName: null != s ? s : a("Label.Item")
                })
              }));
          }
        });
      }
    },
    93743: (e, t, a) => {
      a.d(t, { A: () => T });
      var n = a(37876),
        r = a(14232),
        i = a(67434),
        o = a(3088),
        s = a(30580),
        l = a(76231),
        c = a(42899),
        d = a(81226),
        u = a(17318),
        p = a(38455),
        m = a(31434),
        h = a(66629),
        g = a(55447);
      class v extends h.A {
        getUniverseById(e) {
          return this.universesApi.v1UniversesUniverseIdGet(e);
        }
        constructor(e = (0, g.Jy)("develop")) {
          (super(e),
            (this.universesApi = new m.ZY7(this.defaultConfiguration)),
            (this.getUniverseById = this.getUniverseById.bind(this)));
        }
      }
      let f = new v();
      var b = a(54716),
        x = a(80087),
        y = a(52863),
        w = a(83524),
        A = a(5269),
        C = a(19800),
        k = a(43644),
        I = a(48230),
        N = a.n(I);
      let j = (0, a(46180).A)()((e, t) => {
          let { hasCreatingUniverse: a, isWebViewAvailable: n } = t;
          return {
            container: { display: "box", maxWidth: "100%", width: "auto" },
            creatorName: {
              "&:hover": { textDecoration: n ? void 0 : "underline" },
              color: n ? e.palette.content.alert.inform : void 0,
              lineHeight: "140%",
              minHeight: 16,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            verificationIcon: {
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              marginLeft: 6,
              marginRight: 6 * !!a
            }
          };
        }),
        S = (e) => {
          var t, a, m;
          let {
              assetId: h,
              variant: g = "smallLabel1",
              color: v = "inherit",
              disableLink: I = !1,
              displayAsAuthor: S = !1,
              displayCreatingUniverse: T = !1,
              displayGroupUpdater: P = !1,
              includeAtChar: B = !0,
              fontSizeOverride: L,
              iconSize: M = "small",
              linkClass: R,
              linkToBrowse: U = !1
            } = e,
            { assetTypeId: E, creatingUniverseId: O, isStoreAsset: D } = (0, l.Ay)(h),
            {
              creatorName: V,
              groupId: W,
              isUser: F,
              isVerified: H,
              latestGroupUpdaterUserId: Y,
              latestGroupUpdaterUserName: z,
              userId: q
            } = (0, c.A)(h),
            Q = P && !!Y && !!z,
            _ = Q && z ? z : V,
            K = !!Q || F,
            X = null != (t = Q ? Y : q) ? t : W,
            { data: Z } = (function (e, t) {
              var a, n;
              return (0, p.I)({
                enabled: null == t ? void 0 : t.enabled,
                queryFn: async () => f.getUniverseById({ universeId: e }),
                queryKey: ["".concat("develop_", "useGetUniverse"), e],
                retry: null != (a = null == t ? void 0 : t.retry) ? a : b.ht,
                staleTime: null != (n = null == t ? void 0 : t.staleTime) ? n : b.uI
              });
            })(null != O ? O : 0, { enabled: T && !!O }),
            G = null != (a = null == Z ? void 0 : Z.name) ? a : null,
            J = null != (m = null == Z ? void 0 : Z.rootPlaceId) ? m : null,
            { translate: $, translateHTML: ee } = (0, y.Bd)(),
            { isWebViewAvailable: et } = (0, x.U1)(),
            { classes: ea } = j({ hasCreatingUniverse: !!(G && J), isWebViewAvailable: et }),
            { sendEvent: en } = (0, o.MP)(),
            er = (0, r.useCallback)(() => {
              en(s.Ur.IDVerifiedClicked, { assetId: h });
            }, [en, h]),
            ei = (0, r.useMemo)(() => {
              if (!X || !_) return null;
              let e = K ? i.rQH.User : i.rQH.Group;
              return U && E
                ? d.A.getCreatorBrowseByAssetTypeUrl(_, e, E)
                : d.A.getCreatorProfileUrl(X, e);
            }, [E, X, _, K, U]),
            eo = K && B ? "@".concat(_) : _,
            es = (0, r.useMemo)(
              () =>
                I
                  ? (0, n.jsx)(w.A, {
                      color: v,
                      "data-testid": "byCreatorName",
                      variant: g,
                      children: S
                        ? ee("Label.ByCreator", [
                            {
                              closing: "creatorLinkEnd",
                              content: () =>
                                (0, n.jsx)(w.A, { color: v, variant: g, children: eo }),
                              opening: "creatorLinkStart"
                            }
                          ])
                        : eo
                    })
                  : S
                    ? (0, n.jsx)(u.A, {
                        translationKey: "Label.ByCreator",
                        opening: "creatorLinkStart",
                        closing: "creatorLinkEnd",
                        variant: g,
                        color: v,
                        linkClass: R,
                        linkTargetName: eo,
                        linkTargetUrl: null != ei ? ei : "",
                        linkUnderlineOnHover: !et,
                        fontSizeOverride: L
                      })
                    : (0, n.jsx)(w.A, {
                        className: ea.creatorName,
                        color: v,
                        variant: g,
                        component: N(),
                        href: null != ei ? ei : "",
                        children: eo
                      }),
              [v, I, S, L, eo, et, R, ea.creatorName, ei, ee, g]
            );
          return X && _
            ? (0, n.jsxs)(A.A, {
                container: !0,
                direction: "row",
                alignItems: "center",
                wrap: "nowrap",
                className: ea.container,
                children: [
                  es,
                  D &&
                    !H &&
                    (0, n.jsx)(N(), {
                      target: "_blank",
                      href: "https://create.roblox.com/docs/production/publishing/account-verification",
                      passHref: !0,
                      rel: "noreferrer",
                      className: ea.verificationIcon,
                      children: (0, n.jsx)(C.T, {
                        arrow: !0,
                        placement: "top",
                        title: $("Label.CreatorIsUnverified"),
                        children: (0, n.jsx)(k.N5l, {
                          fontSize: M,
                          "data-testid": "unverifiedUserIcon",
                          onClick: er
                        })
                      })
                    }),
                  G &&
                    J &&
                    (0, n.jsx)(u.A, {
                      closing: "linkEnd",
                      linkClass: R,
                      linkTargetName: G,
                      linkTargetUrl: d.A.getPlaceUrl(J),
                      opening: "linkStart",
                      translationKey: "Label.InExperience",
                      variant: "body1",
                      fontSizeOverride: L
                    })
                ]
              })
            : null;
        };
      S.displayName = "CreatorName";
      let T = S;
    },
    93974: (e, t, a) => {
      a.d(t, { A: () => n });
      function n(e) {
        return {
          artistName: {
            compact: { margin: "0 4px", minWidth: 36, width: "18%" },
            desktop: { display: "inline-block", minWidth: 48, padding: "0 8px", width: "20%" }
          },
          assetName: {
            compact: { margin: "0 4px", minWidth: 64, width: "38%" },
            desktop: { display: "inline-block", minWidth: 84, padding: "0 8px", width: "33%" }
          },
          audioIcon: {
            compact: { marginRight: 8 * !!e, minWidth: 24 },
            desktop: { margin: "0 12px", minWidth: 24 }
          },
          category: {
            compact: { margin: "0 4px", minWidth: 24, width: e ? "15%" : "20%" },
            desktop: {
              display: "inline-block",
              minWidth: 24,
              padding: "0 8px",
              width: e ? "15%" : "20%"
            }
          },
          expandIcon: { desktop: { minWidth: 20 } },
          length: {
            compact: { margin: "0 4px", minWidth: e ? 24 : 44, width: e ? "6%" : "10%" },
            desktop: { display: "inline-block", minWidth: 44, padding: "0 8px", width: "10%" }
          }
        };
      }
    },
    94888: (e, t, a) => {
      a.d(t, { A: () => i });
      var n = a(5942),
        r = a(10199);
      function i() {
        let [{ referralSource: e, searchUuid: t, ...a }, i] = (0, n.A)(r.M, { urlKeys: r.X });
        return { ...a, setParams: i };
      }
    }
  }
]);
