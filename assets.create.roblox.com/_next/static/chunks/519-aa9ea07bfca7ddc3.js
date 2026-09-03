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
      (e._sentryDebugIds[t] = "e3d51d05-1412-4883-9fc0-ec9e81778303"),
      (e._sentryDebugIdIdentifier = "sentry-dbid-e3d51d05-1412-4883-9fc0-ec9e81778303"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [519],
  {
    40291: (e, t, a) => {
      a.d(t, { A: () => i });
      var n = a(14232),
        r = a(26521);
      let l = "scroll_popstate";
      function i(e) {
        ((0, n.useEffect)(() => {
          let e = () => {
            try {
              sessionStorage.setItem(l, "true");
            } catch (e) {}
          };
          return (
            window.addEventListener("popstate", e),
            () => window.removeEventListener("popstate", e)
          );
        }, []),
          (0, n.useEffect)(() => {
            if (void 0 === e || "" === e) return;
            let t = document.getElementById(r.oh);
            if (!t) return;
            let a = "".concat("scroll_").concat(e);
            if ("true" === sessionStorage.getItem(l)) {
              sessionStorage.removeItem(l);
              let e = sessionStorage.getItem(a);
              e && t.scrollTo(0, parseInt(e, 10));
            } else t.scrollTo(0, 0);
            return () => {
              try {
                sessionStorage.setItem(a, String(t.scrollTop));
              } catch (e) {}
            };
          }, [e]));
      }
    },
    53519: (e, t, a) => {
      a.d(t, { A: () => eJ });
      var n = a(37876),
        r = a(47790),
        l = a(5269),
        i = a(14232),
        s = a(89099),
        o = a(20823),
        c = a(40291),
        d = a(80087),
        u = a(73009),
        m = a(91250),
        g = a(96742),
        h = a(80453),
        x = a(76581),
        p = a(51038),
        y = a(48230),
        j = a.n(y),
        A = a(83524),
        f = a(3088),
        w = a(30580),
        v = a(89422),
        b = a(46180);
      let P = (0, b.A)()((e, t) => {
          let { isWebViewAvailable: a } = t,
            n = e.transitions.create("background-color", {
              duration: e.transitions.duration.short
            });
          return {
            container: {
              "& fieldset": { border: "none !important" },
              "&:hover": {
                backgroundColor: e.palette.actionV2.secondary.containedHoverFocus,
                cursor: "pointer"
              },
              alignItems: "center",
              backgroundColor: e.palette.actionV2.secondary.fill,
              borderRadius: 4,
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              fontWeight: 400,
              gap: 4,
              height: "auto",
              padding: 12,
              transition: n,
              width: "100%",
              ...(a && { gap: 2, padding: 6 })
            },
            name: {
              overflow: "hidden",
              textAlign: "center",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%"
            }
          };
        }),
        N = (e) => {
          let { icon: t, name: a, slug: r } = e,
            { isWebViewAvailable: i } = (0, d.U1)(),
            { classes: s } = P({ isWebViewAvailable: i }),
            { getRouteToSlug: o } = (0, x.A)(),
            { categoryPath: c } = (0, v.A)(),
            { sendEvent: u } = (0, f.MP)(),
            m = o(r) || "#";
          return (0, n.jsxs)(l.A, {
            container: !0,
            component: j(),
            href: m,
            alignItems: "center",
            direction: "column",
            wrap: "nowrap",
            justifyContent: "center",
            className: s.container,
            onClick: () => {
              u(w.Ur.CategoryTileNavigation, {
                newCategoryPath: r,
                oldCategoryPath: null != c ? c : ""
              });
            },
            "data-testid": "flat-category-tile",
            children: [
              t,
              (0, n.jsx)(A.A, {
                variant: "body1",
                color: "primary",
                className: s.name,
                children: a
              })
            ]
          });
        },
        C = (e, t) => {
          if (t <= 6) {
            let e = "".concat(100 / t, "%");
            return {
              ["@media (min-width: ".concat(960, "px)")]: { flex: "0 0 ".concat(e), maxWidth: e }
            };
          }
          return 8 === t || e < 4
            ? { ["@media (min-width: ".concat(960, "px)")]: { flex: "0 0 25%", maxWidth: "25%" } }
            : e >= 4 && e < 9
              ? { ["@media (min-width: ".concat(960, "px)")]: { flex: "0 0 20%", maxWidth: "20%" } }
              : void 0;
        },
        I = (e) => {
          let { slug: t } = e,
            { isWebViewAvailable: a } = (0, d.U1)(),
            { getChildrenOfCategory: r } = (0, x.A)(),
            i = r(t);
          return 0 === i.length
            ? null
            : (0, n.jsx)(l.A, {
                container: !0,
                direction: "column",
                spacing: 1,
                "data-testid": "flat-category-grid",
                children: (0, n.jsx)(l.A, {
                  item: !0,
                  children: (0, n.jsx)(l.A, {
                    container: !0,
                    spacing: 1,
                    justifyContent: "flex-start",
                    flexWrap: "wrap",
                    children: i.map((e, t) => {
                      var r, s, o, c;
                      let d = null != (o = e.displayName) ? o : e.key,
                        u =
                          null !=
                          (c =
                            null == (s = e.key) || null == (r = s.toLowerCase) ? void 0 : r.call(s))
                            ? c
                            : "",
                        m = u ? (0, n.jsx)(p.Ay, { categorySlug: u, size: a ? 16 : 20 }) : null,
                        g = C(t, i.length);
                      return (0, n.jsx)(
                        l.A,
                        {
                          item: !0,
                          XSmall: 6,
                          Small: i.length % 2 == 0 ? 6 : 4,
                          Medium: 4,
                          Large: 2,
                          display: "flex",
                          sx: g,
                          children: (0, n.jsx)(N, { name: d, slug: e.slug, icon: m })
                        },
                        e.slug
                      );
                    })
                  })
                })
              });
        };
      var T = a(72359),
        k = a(29454),
        S = a(731),
        M = a(81312),
        F = a(49645),
        L = a(23193),
        R = a(26521);
      function B(e) {
        if (!e) return;
        let t = e.split(R.qx).filter(Boolean);
        if (0 !== t.length) return "".concat("/category", "/").concat(t.join("/"));
      }
      function U(e) {
        var t;
        if (!e) return "";
        let a = e.split(R.qx);
        return null != (t = a[a.length - 1]) ? t : "";
      }
      function G(e) {
        return (null != e ? e : []).filter((e) => !!e.categoryPath);
      }
      let V = (e) => {
        let { nodes: t } = e,
          { isWebViewAvailable: a } = (0, d.U1)(),
          { classes: r } = P({ isWebViewAvailable: a }),
          { categoryPath: i } = (0, v.A)(),
          { sendEvent: s } = (0, f.MP)();
        return (0, n.jsx)(l.A, {
          container: !0,
          "data-testid": "taxonomy-category-row",
          direction: "column",
          spacing: 1,
          children: (0, n.jsx)(l.A, {
            item: !0,
            children: (0, n.jsx)(l.A, {
              container: !0,
              flexWrap: "wrap",
              justifyContent: "flex-start",
              spacing: 1,
              children: t.map((e, o) => {
                var c, d, u;
                let m = U(e.categoryPath),
                  g = null != (c = e.displayName) ? c : m,
                  h = null != (d = B(e.categoryPath)) ? d : "#",
                  x = C(o, t.length);
                return (0, n.jsx)(
                  l.A,
                  {
                    item: !0,
                    display: "flex",
                    sx: x,
                    XSmall: 6,
                    Small: t.length % 2 == 0 ? 6 : 4,
                    Medium: 4,
                    Large: 2,
                    children: (0, n.jsxs)(l.A, {
                      container: !0,
                      alignItems: "center",
                      "data-testid": "taxonomy-category-tile",
                      direction: "column",
                      justifyContent: "center",
                      wrap: "nowrap",
                      className: r.container,
                      component: j(),
                      href: h,
                      onClick: ((e) => () => {
                        s(w.Ur.CategoryTileNavigation, {
                          newCategoryPath: null != e ? e : "",
                          oldCategoryPath: null != i ? i : ""
                        });
                      })(e.categoryPath),
                      children: [
                        (0, n.jsx)(p.Ay, { categorySlug: m, size: a ? 16 : 20 }),
                        (0, n.jsx)(A.A, {
                          color: "primary",
                          variant: "body1",
                          className: r.name,
                          children: g
                        })
                      ]
                    })
                  },
                  null != (u = e.categoryPath) ? u : o
                );
              })
            })
          })
        });
      };
      var W = a(14469),
        _ = a(46227);
      let D = (e) => {
        var t;
        let { node: a } = e;
        return (0, n.jsx)(l.A, {
          container: !0,
          direction: "column",
          gap: 2,
          children: (null != (t = a.children) ? t : []).map((e) =>
            e.categoryPath && e.displayName
              ? (0, n.jsxs)(
                  l.A,
                  {
                    item: !0,
                    width: "100%",
                    children: [
                      (0, n.jsx)(W.A, {
                        displayName: e.displayName,
                        seeAllLink: B(e.categoryPath),
                        swimlaneName: U(e.categoryPath)
                      }),
                      (0, n.jsx)(_.A, {
                        source: { categoryPath: e.categoryPath, type: "category" }
                      })
                    ]
                  },
                  e.categoryPath
                )
              : null
          )
        });
      };
      var E = a(21588),
        z = a(78602),
        H = a(70108),
        q = a(11196),
        Q = a(46207);
      let O = (e) => {
          var t, a, r;
          let { isGridLayout: s, node: o, swimlaneType: c } = e,
            { isWebViewAvailable: u } = (0, d.U1)(),
            { categoryType: m } = (0, v.A)(),
            { sendEvent: g } = (0, f.MP)(),
            h = B(o.categoryPath),
            x = "discover-new-audio" === c,
            p = null != (r = null == (t = o.thumbnail) ? void 0 : t.backgroundColor) ? r : q.l,
            { classes: y } = (0, Q.A)({
              backgroundColor: p,
              isGridLayout: s,
              isWebViewAvailable: u,
              isWideSwimlaneTile: x
            }),
            b = (0, i.useCallback)(() => {
              g(w.Ur.NavigatePageView, {
                assetTypeId: null != m ? m : 0,
                navSwimlane: null != c ? c : "",
                searchCategory: U(o.categoryPath)
              });
            }, [m, o.categoryPath, g, c]);
          return h && o.displayName
            ? (0, n.jsxs)(l.A, {
                container: !0,
                className: y.outerContainer,
                component: j(),
                href: h,
                onClick: b,
                direction: "column",
                "data-testid": "taxonomy-chip-tile",
                children: [
                  (0, n.jsx)(A.A, {
                    variant: "overline",
                    className: y.categoryName,
                    children: o.displayName
                  }),
                  (null == (a = o.thumbnail) ? void 0 : a.assetId) != null &&
                    (0, n.jsx)(H.PV, {
                      alt: o.displayName,
                      containerClass: x ? y.wideImageContainer : y.imageContainer,
                      targetId: o.thumbnail.assetId,
                      type: H.uS.assetThumbnail,
                      size: x ? H.I1._140x140 : H.I1._75x75
                    })
                ]
              })
            : null;
        },
        Y = (e) => {
          let { node: t } = e,
            { isWebViewAvailable: a } = (0, d.U1)(),
            { classes: r } = (0, z.A)({ isWebViewAvailable: a }),
            i = B(t.categoryPath),
            s = G(t.children),
            o = U(t.categoryPath);
          return t.categoryPath
            ? (0, n.jsxs)(l.A, {
                container: !0,
                direction: "column",
                children: [
                  t.displayName &&
                    (0, n.jsx)(W.A, { displayName: t.displayName, seeAllLink: i, swimlaneName: o }),
                  s.length > 0
                    ? (0, n.jsx)(E.A, {
                        classes: { carousel: r.carousel },
                        children: s.map((e) =>
                          (0, n.jsx)(
                            O,
                            { isGridLayout: !1, node: e, swimlaneType: o },
                            e.categoryPath
                          )
                        )
                      })
                    : (0, n.jsx)(_.A, {
                        source: { categoryPath: t.categoryPath, type: "category" }
                      })
                ]
              })
            : null;
        },
        K = (e) => {
          let { node: t } = e,
            a = G(t.children);
          return (0, n.jsx)(l.A, {
            container: !0,
            "data-testid": "taxonomy-chip-carousels",
            direction: "column",
            gap: 2,
            children: a.map((e) => (0, n.jsx)(Y, { node: e }, e.categoryPath))
          });
        },
        Z = (e) => {
          let { node: t } = e,
            { isWebViewAvailable: a } = (0, d.U1)(),
            { classes: r } = (0, z.A)({ isWebViewAvailable: a }),
            i = G(t.children),
            s = U(t.categoryPath);
          return (0, n.jsx)(l.A, {
            container: !0,
            className: r.gridContainer,
            "data-testid": "categorySwimlaneGrid",
            children: i.map((e) =>
              (0, n.jsx)(O, { isGridLayout: !0, node: e, swimlaneType: s }, e.categoryPath)
            )
          });
        },
        X = (e) => {
          var t;
          let { swimlaneRef: a } = e;
          if (!a.name) return null;
          let r = B(a.categoryPath),
            i = r ? "".concat(r, "/").concat(a.name) : void 0,
            s = {
              categoryPath: null != (t = a.categoryPath) ? t : void 0,
              swimlaneName: a.name,
              type: "section"
            };
          return a.displayName
            ? (0, n.jsxs)(l.A, {
                container: !0,
                direction: "column",
                children: [
                  (0, n.jsx)(W.A, {
                    displayName: a.displayName,
                    seeAllLink: i,
                    swimlaneName: a.name
                  }),
                  (0, n.jsx)(_.A, { source: s })
                ]
              })
            : (0, n.jsx)(_.A, { source: s });
        },
        J = (e) => {
          var t, a;
          let { node: r } = e,
            s =
              !1 !== r.showChildCategoryRow &&
              (null != (a = null == (t = r.children) ? void 0 : t.length) ? a : 0) > 0,
            o = (0, i.useMemo)(() => {
              var e;
              return (null != (e = r.swimlanes) ? e : []).filter((e) => !!e.name);
            }, [r.swimlanes]),
            c = (0, i.useMemo)(() => {
              switch (r.layout) {
                case "childSwimlanes":
                  return (0, n.jsx)(D, { node: r });
                case "chipCarousels":
                  return (0, n.jsx)(K, { node: r });
                case "chipGrid":
                  return (0, n.jsx)(Z, { node: r });
                default:
                  return null;
              }
            }, [r]),
            d = (0, i.useMemo)(() => {
              let e = (0, L.J)(r.defaultGrid);
              switch (e.kind) {
                case "categoryPath":
                  return { categoryPath: e.categoryPath };
                case "swimlane":
                  var t, a;
                  return {
                    categoryPath: null != (t = e.swimlane.categoryPath) ? t : void 0,
                    swimlaneName: null != (a = e.swimlane.name) ? a : void 0
                  };
                default:
                  return;
              }
            }, [r.defaultGrid]);
          return s || o.length || c || d
            ? (0, n.jsxs)(l.A, {
                container: !0,
                "data-testid": "taxonomy-view",
                direction: "column",
                gap: 2,
                children: [
                  s && (0, n.jsx)(V, { nodes: r.children }),
                  o.map((e) => (0, n.jsx)(X, { swimlaneRef: e }, e.name)),
                  c,
                  d && (0, n.jsx)(h.A, { source: d })
                ]
              })
            : null;
        };
      var $ = a(91132),
        ee = a(52863);
      let et = (0, b.A)()((e, t) => {
          let { isWebViewAvailable: a } = t;
          return { clearFiltersText: { ...(a && { fontSize: 12 }) } };
        }),
        ea = () => {
          let { translate: e } = (0, ee.Bd)(),
            { clearFilters: t } = (0, S.sI)(),
            { sendEvent: a } = (0, f.MP)(),
            { isWebViewAvailable: r } = (0, d.U1)(),
            { classes: l } = et({ isWebViewAvailable: r }),
            i = () => {
              t((e) => a(w.Ur.ClearFiltersButton, e));
            };
          return (0, n.jsx)("span", {
            className: "text-title-large cursor-pointer ml-auto",
            onClick: i,
            role: "button",
            tabIndex: 0,
            onKeyDown: (e) => {
              "Enter" === e.key && i();
            },
            children: (0, n.jsx)(A.A, {
              className: l.clearFiltersText,
              variant: r ? "buttonSmall" : "buttonMedium",
              children: e("Label.ClearFilters")
            })
          });
        },
        en = () => {
          var e;
          let { translate: t } = (0, ee.Bd)(),
            { searchState: a } = (0, S.sI)(),
            { data: r } = (0, $.A)(),
            { keyword: l } = a,
            i = null != (e = null == r ? void 0 : r.totalResults) ? e : 0,
            s = l
              ? t("Label.ShowingTotalResultsFor", { keyword: l, total: i.toString() })
              : t("Label.ShowingTotalResults", { total: i.toString() });
          return (0, n.jsx)(A.A, { className: "content-muted", children: s });
        },
        er = () => {
          let { hasActiveFilters: e, hasActiveSearchParams: t } = (0, S.sI)(),
            { isSuccess: a, isFetching: r } = (0, $.A)();
          return t
            ? (0, n.jsxs)("div", {
                "data-testid": "number-of-results-clear-filter-row",
                className:
                  "flex items-center gap-small flex-row justify-between w-full min-height-600",
                children: [a && (0, n.jsx)(en, {}), e && !r && (0, n.jsx)(ea, {})]
              })
            : null;
        };
      var el = a(52136),
        ei = a(50479);
      let es = (0, b.A)()((e, t) => {
          let { isWebViewAvailable: a } = t;
          return {
            autocorrectGrid: { marginBottom: a ? void 0 : 4, width: "100%" },
            autocorrectOfferedQuery: { "&:hover": { textDecoration: "underline" } }
          };
        }),
        eo = () => {
          var e, t;
          let { translateHTML: a } = (0, ee.Bd)(),
            r = (0, s.useRouter)(),
            { isWebViewAvailable: o } = (0, d.U1)(),
            { classes: c } = es({ isWebViewAvailable: o }),
            { data: u } = (0, $.A)(),
            { searchState: m } = (0, S.sI)(),
            { keyword: g } = m,
            [h, x] = (0, el.Fo)("autocorrect_entry", null),
            p =
              null != (t = null == u || null == (e = u.queryCorrection) ? void 0 : e.suggestedQuery)
                ? t
                : null,
            y = r.asPath.split("?")[0];
          (0, i.useEffect)(() => {
            null !== h && h.correctedKeyword !== g && h.originalQuery !== g && x(null);
          }, [h, g, x]);
          let f = null !== h && h.correctedKeyword === g,
            w = !f && null !== p,
            v = f ? h.originalQuery : p,
            b = (0, i.useMemo)(
              () => (v ? (0, ei.Zn)(y, { ...m, keyword: v, pageNumber: 0 }) : ""),
              [y, v, m]
            ),
            P = (0, i.useCallback)(() => {
              !f && v && x({ correctedKeyword: v, originalQuery: g });
            }, [v, f, x, g]);
          if (!w && !f) return null;
          let N = o ? "subtitle2" : "h5";
          return (0, n.jsx)(l.A, {
            item: !0,
            alignItems: "center",
            className: c.autocorrectGrid,
            justifyContent: "flex-start",
            "data-testid": "".concat(R.og, "autocorrectId"),
            children: (0, n.jsx)(A.A, {
              variant: N,
              color: f ? "primary" : "error",
              "data-testid": "".concat(R.og, "autocorrectMessageId"),
              children: a(f ? "Label.AutocorrectSearchInsteadFor" : "Label.AutocorrectDidYouMean", [
                {
                  closing: "linkEnd",
                  content: () =>
                    (0, n.jsx)(A.A, {
                      component: j(),
                      href: b,
                      onClick: P,
                      variant: N,
                      color: "info",
                      className: c.autocorrectOfferedQuery,
                      "data-testid": "".concat(R.og, "autocorrectOfferedQueryId"),
                      children: v
                    }),
                  opening: "linkStart"
                }
              ])
            })
          });
        };
      var ec = a(37278),
        ed = a(53820);
      let eu = (0, b.A)()((e, t) => {
          let { isWebViewAvailable: a } = t;
          return {
            chip: a ? { borderRadius: 50, fontSize: 12, fontWeight: 600, height: 26 } : {},
            container: { width: "100%" },
            emptyContainer: { height: a ? 26 : 32, width: "100%" }
          };
        }),
        em = () => {
          let { isWebViewAvailable: e } = (0, d.U1)(),
            { classes: t } = eu({ isWebViewAvailable: e }),
            { searchState: a, setSearchState: r } = (0, S.sI)(),
            { data: s, isFetching: o, isSuccess: c } = (0, $.A)(),
            { facets: u, keyword: m } = a,
            { queryFacets: g } = null != s ? s : {},
            h = (0, i.useMemo)(() => {
              var e;
              return null != (e = null == g ? void 0 : g.appliedFacets) ? e : [];
            }, [g]),
            x = (0, i.useMemo)(() => {
              var e;
              return null != (e = null == g ? void 0 : g.availableFacets) ? e : [];
            }, [g]),
            p = (0, i.useRef)(null);
          (0, i.useEffect)(() => {
            c &&
              (p.current =
                h.length > 0 || x.length > 0
                  ? { appliedFacets: h, availableFacets: x, keyword: m }
                  : null);
          }, [c, h, x, m]);
          let y = (e) => {
              r({ facets: u.includes(e) ? u.filter((t) => t !== e) : [...u, e] });
            },
            j = (0, i.useMemo)(() => {
              let e = p.current,
                t = o && e && e.keyword === m ? e : { appliedFacets: h, availableFacets: x };
              return [
                ...t.appliedFacets.map((e) => ({ isApplied: !0, name: e })),
                ...t.availableFacets.map((e) => ({ isApplied: !1, name: e }))
              ];
            }, [h, x, o, m]);
          return u.length > 0 && o && 0 === j.length
            ? (0, n.jsx)(l.A, {
                className: t.emptyContainer,
                "data-testid": "emptyFacetedSearchRow"
              })
            : m && j.length > 0
              ? (0, n.jsx)(l.A, {
                  item: !0,
                  "data-testid": "facetedSearchRow",
                  className: t.container,
                  children: (0, n.jsx)(E.A, {
                    children: j.map((a) => {
                      let { isApplied: r, name: l } = a;
                      return (0, n.jsx)(
                        ed.A,
                        {
                          label: l,
                          size: e ? "small" : "medium",
                          color: r ? "primary" : "secondary",
                          onClick: r ? void 0 : () => y(l),
                          onDelete: r ? () => y(l) : void 0,
                          "aria-label": r ? "appliedFacet" : "availableFacet",
                          className: t.chip
                        },
                        l
                      );
                    })
                  })
                })
              : null;
        };
      var eg = a(59922),
        eh = a(67434),
        ex = a(98179);
      let ep = (0, b.A)()((e, t) => {
          let { isWebViewAvailable: a } = t;
          return {
            activeFilterFacetsRow: {
              display: "flex",
              flexWrap: "wrap",
              gap: e.spacing(1),
              width: "100%"
            },
            chip: {
              ...(a && {
                "& .MuiChip-deleteIcon": { color: e.palette.content.inverse },
                borderRadius: 50,
                fontSize: 12,
                fontWeight: 600,
                height: 26
              })
            }
          };
        }),
        ey = () => {
          let { translate: e } = (0, ee.Bd)(),
            { searchState: t, setSearchState: a } = (0, S.sI)(),
            { isWebViewAvailable: r } = (0, d.U1)(),
            { classes: i } = ep({ isWebViewAvailable: r }),
            { data: s } = (0, eg.A)(t.creatorName),
            { creatorName: o, artistName: c, tags: u } = t,
            m = void 0 === s ? t.creatorType === eh.rQH.Group : s.isGroup,
            g = [
              ...(o ? [{ filterType: "Creator", filterValue: o }] : []),
              ...(c ? [{ filterType: "ArtistName", filterValue: c }] : []),
              ...u.filter((e) => e.length > 0).map((e) => ({ filterType: "Tags", filterValue: e }))
            ].map((t) => ({
              ...t,
              label: ((t) => {
                let { filterType: a, filterValue: n } = t;
                switch (a) {
                  case "Creator":
                    return m
                      ? e("Label.Group", { groupName: null != n ? n : "" })
                      : e("Label.User", { creatorName: null != n ? n : "" });
                  case "ArtistName":
                    return e("Label.ArtistFilter", { artistName: null != n ? n : "" });
                  case "Tags":
                    return n ? e("Label.".concat((0, ex.A)(n))) : null != n ? n : "";
                  default:
                    return "";
                }
              })(t)
            }));
          return 0 === g.length
            ? null
            : (0, n.jsx)(l.A, {
                item: !0,
                "data-testid": "active-filter-facets-row",
                className: i.activeFilterFacetsRow,
                children: g.map((e) =>
                  (0, n.jsx)(
                    ed.A,
                    {
                      className: r ? i.chip : void 0,
                      color: "primary",
                      label: e.label,
                      onDelete: () =>
                        ((e) => {
                          let { filterType: t, filterValue: n } = e;
                          switch (t) {
                            case "Creator":
                              a({ creatorName: null, creatorType: null });
                              break;
                            case "ArtistName":
                              a({ artistName: null });
                              break;
                            case "Tags":
                              a({ tags: u.filter((e) => e !== n) });
                          }
                        })(e),
                      size: r ? "small" : "medium"
                    },
                    "".concat(e.filterType, "-").concat(e.filterValue || "")
                  )
                )
              });
        };
      var ej = a(36042);
      let eA = (0, b.A)()((e) => ({
          abovePaginationContainer: {
            [e.breakpoints.up(o.Yr)]: { marginBottom: ej.vM },
            [e.breakpoints.down(o.Yr)]: { marginBottom: ej.qB }
          }
        })),
        ef = () => {
          let { slugExists: e, getChildrenOfCategory: t, getNodeForSlug: a } = (0, x.A)(),
            { categoryPath: r, isTwoDCategory: s } = (0, v.A)(),
            { hasActiveSearchParams: o } = (0, S.sI)(),
            { isWebViewAvailable: c } = (0, d.U1)(),
            { classes: u } = eA(),
            m = (0, T.A)(),
            p = (0, M.A)(r),
            y = null != r ? r : "",
            j = m && (0, F.VQ)(p);
          if (j && !o) return (0, n.jsx)(J, { node: p });
          if (!j && !e(y)) return null;
          let A = t(y),
            f = a(y);
          return (0, n.jsxs)(l.A, {
            container: !0,
            direction: "column",
            gap: 2,
            children: [
              !o && A.length > 0 && (0, n.jsx)(l.A, { children: (0, n.jsx)(I, { slug: y }) }),
              !c && (0, n.jsx)(l.A, { item: !0, children: (0, n.jsx)(g.A, {}) }),
              o &&
                (0, n.jsxs)(i.Fragment, { children: [(0, n.jsx)(ec.A, {}), (0, n.jsx)(ey, {})] }),
              (0, n.jsx)(eo, {}),
              (0, n.jsx)(em, {}),
              (0, n.jsx)(er, {}),
              !s &&
                !o &&
                A.map((e) =>
                  (0, n.jsx)(
                    l.A,
                    { item: !0, children: (0, n.jsx)(k.A, { swimlane: e, slug: e.slug }) },
                    e.slug
                  )
                ),
              f &&
                (0, n.jsx)(l.A, {
                  item: !0,
                  className: u.abovePaginationContainer,
                  children: (0, n.jsx)(h.A, {})
                })
            ]
          });
        };
      var ew = a(76231),
        ev = a(84614),
        eb = a(13979),
        eP = a(76386),
        eN = a(93852),
        eC = a(75356),
        eI = a(79944),
        eT = a(45041),
        ek = a(85029),
        eS = a(46271),
        eM = a(54165),
        eF = a(39298);
      let eL = (e) => {
        var t, a;
        let { categoryPath: r, maxPageSize: o, swimlaneName: c } = e,
          {
            data: d,
            failureCount: u,
            fetchStatus: m,
            isError: g,
            isSuccess: h
          } = (0, eN.F)(c, { categoryPath: r, maxPageSize: o }),
          x = (0, i.useMemo)(() => {
            var e;
            return null != (e = null == d ? void 0 : d.creatorStoreAssets) ? e : [];
          }, [d]),
          p = (0, s.useRouter)(),
          { categoryType: y } = (0, v.A)(),
          {
            isAudio: j,
            isFont: A,
            isMusic: f
          } = (0, ew.Ay)(null == (a = x[0]) || null == (t = a.asset) ? void 0 : t.id),
          w = (0, eS.A)(),
          { classes: b } = (0, eT.A)({ isAudio: j, isFont: A, tileVariant: w });
        if (
          ((0, eb.A)({
            enabled: h && (null == d ? void 0 : d.totalResults) === 0,
            metadata: c,
            reason: "emptyAssetTileGrid"
          }),
          (0, eb.A)({
            confirmShouldFire: (0, ev.p5)(c),
            delayMs: eP.Ze,
            enabled: !h,
            metadata: c,
            queryDiagnostics: [{ failureCount: u, fetchStatus: m, source: "browse" }],
            reason: "stalledLoad"
          }),
          g)
        )
          return (0, n.jsx)(eI.A, {});
        if (!h) {
          let e = y === eh.hMm.Audio;
          return (0, n.jsxs)(i.Fragment, {
            children: [e && (0, n.jsx)(eM.A, {}), (0, n.jsx)(eF.A, {})]
          });
        }
        return 0 === d.totalResults
          ? (0, n.jsx)(eI.A, {})
          : (0, n.jsxs)(
              eC.Ay,
              {
                children: [
                  j && (0, n.jsx)(eM.A, { isMusic: f }),
                  (0, n.jsx)(l.A, {
                    container: !0,
                    "data-testid": "".concat(R.og, "assetTileGridTestId"),
                    className: b.gridList,
                    children: x.map((e, t) => {
                      var a, r;
                      let l = null != (r = null == (a = e.asset) ? void 0 : a.id) ? r : 0;
                      return (0, n.jsx)(
                        ek.A,
                        { assetId: l, fillsColumn: !0, pagePosition: t, swimlaneName: c },
                        l
                      );
                    })
                  })
                ]
              },
              p.asPath
            );
      };
      var eR = a(65111),
        eB = a(72312),
        eU = a(34286);
      let eG = (0, b.A)()((e) => ({ categoriesHeader: { minHeight: 24 } })),
        eV = (e) => {
          var t, a;
          let { swimlanes: c } = e,
            { translate: u } = (0, ee.Bd)(),
            { isWebViewAvailable: m, tutorialConfig: p } = (0, d.U1)(),
            y = (0, s.useRouter)(),
            j = (0, eR.A)(y.query.assetType),
            f =
              (null != (t = null == j ? void 0 : j.categoryType) ? t : eh.hMm.Model) ===
              eh.hMm.Model,
            { rootCategorySlug: w } = (0, x.A)(),
            v = f || "" !== w,
            b = m && v,
            { classes: P } = eG(),
            N = (0, r.A)((e) => e.breakpoints.down(o.Yr)),
            C = w || (null != (a = y.query.slug) ? a : ""),
            T = (0, i.useMemo)(
              () =>
                (0, n.jsxs)(l.A, {
                  container: !0,
                  direction: "column",
                  gap: 2,
                  children: [
                    N &&
                      (0, n.jsx)(l.A, {
                        container: !0,
                        alignItems: "center",
                        gap: 1,
                        direction: "row",
                        wrap: "nowrap",
                        className: P.categoriesHeader,
                        children: (0, n.jsx)(A.A, {
                          variant: "h5",
                          color: "primary",
                          children: u("Label.Categories")
                        })
                      }),
                    (0, n.jsx)(l.A, { children: (0, n.jsx)(I, { slug: C }) })
                  ]
                }),
              [C, N, P.categoriesHeader, u]
            );
          if (p.isToolboxTutorialActive) return null;
          let S = (e, t) =>
            (0, eB.A)(e) && v
              ? b
                ? (0, n.jsx)(i.Fragment, { children: T }, e.name || t)
                : null
              : (0, n.jsx)(k.A, { swimlane: e }, e.name || t);
          return (0, n.jsxs)(l.A, {
            container: !0,
            direction: "column",
            "data-testid": "home-view",
            gap: 2,
            children: [
              c.slice(0, -1).map((e, t) => S(e, t)),
              c.length > 0 &&
                (() => {
                  var e;
                  let t = c[c.length - 1];
                  return (0, eB.A)(t)
                    ? S(t, c.length - 1)
                    : (0, eU.A)(t)
                      ? (0, n.jsx)(k.A, { swimlane: t })
                      : (0, n.jsxs)(i.Fragment, {
                          children: [
                            (0, n.jsx)(g.A, {}),
                            (0, n.jsx)(h.A, {
                              source: {
                                categoryPath: t.categoryPath,
                                swimlaneName: null != (e = t.name) ? e : void 0
                              }
                            })
                          ]
                        });
                })()
            ]
          });
        };
      var eW = a(57381),
        e_ = a(93643);
      let eD = (e) => {
        let t = (0, s.useRouter)(),
          { searchState: a } = (0, S.sI)(),
          r = (0, i.useMemo)(() => t.asPath.split("?")[0], [t.asPath]),
          l = (0, i.useCallback)((e) => (0, ei.Zn)(r, { ...a, pageNumber: e - 1 }), [r, a]);
        return (0, n.jsx)(eW.P, {
          ...e,
          renderItem: (e) =>
            null == e.page || e.disabled
              ? (0, n.jsx)(e_.P, { ...e })
              : (0, n.jsx)(e_.P, { ...e, component: j(), href: l(e.page) })
        });
      };
      var eE = a(61606),
        ez = a(37112),
        eH = a(18335);
      function eq(e) {
        var t, a;
        (0, eH.nx)();
        let {
            categoryPath: n,
            categoryType: r,
            isDefaultBrowsePage: l,
            isSwimlaneRoute: s
          } = (0, v.A)(),
          { hasActiveSearchParams: o, searchState: c } = (0, S.sI)(),
          { data: d } = (0, $.A)(),
          { data: u } = (0, ev.dn)(),
          { slugExists: m } = (0, x.A)(),
          g = (0, eE.A)(),
          { keyword: h, pageNumber: p } = c,
          y = null != (t = null == d ? void 0 : d.totalResults) ? t : 0,
          j = Math.ceil(y / g),
          A = (0, i.useMemo)(() => {
            var t, a;
            return null != (a = null == e ? void 0 : e.swimlanes)
              ? a
              : Object.values(null != (t = null == u ? void 0 : u.sections) ? t : {});
          }, [null == e ? void 0 : e.swimlanes, u]),
          f = (null != (a = null == e ? void 0 : e.enableHomeView) ? a : l && (0, ez.GD)(r)) && !o;
        return {
          categoryType: r,
          displayPageNumber: p + 1,
          hasActiveSearchParams: o,
          keyword: h,
          maxPageCount: j,
          resolvedSwimlanes: A,
          showHomeView: f,
          showTaxonomyLayout: void 0 !== n && !s && m(n),
          totalResults: y
        };
      }
      let eQ = (0, b.A)()((e) => ({
          abovePaginationContainer: { display: "block", marginBottom: ej.qB, rowSpacing: "16vw" },
          pagination: {
            ".MuiPaginationItem-ellipsis": { maxWidth: 20, minWidth: 20, padding: "0 !important" },
            fontSize: 12,
            justifyContent: "flex-end",
            margin: "0",
            paddingBottom: 48,
            paddingTop: 0,
            "ul li button": {
              "&.Mui-selected": { color: "".concat(e.palette.content.standard, " !important") },
              "&.MuiPaginationItem-page": { color: e.palette.content.disabled },
              ".MuiTouchRipple-root": { display: "none" },
              backgroundColor: "transparent !important",
              maxWidth: 20,
              minWidth: 20,
              padding: "0 !important"
            }
          }
        })),
        eO = (e) => {
          let { showHomeView: t, swimlanes: a } = e,
            {
              displayPageNumber: r,
              hasActiveSearchParams: s,
              maxPageCount: o,
              totalResults: c
            } = eq(),
            { classes: d } = eQ();
          return (0, n.jsxs)(l.A, {
            container: !0,
            alignItems: "flex-start",
            direction: "column",
            children: [
              (0, n.jsx)(l.A, {
                container: !0,
                className: d.abovePaginationContainer,
                gap: 1,
                children: (0, n.jsx)(l.A, {
                  container: !0,
                  direction: "column",
                  children: t
                    ? (0, n.jsx)(eV, { swimlanes: a })
                    : (0, n.jsxs)(i.Fragment, {
                        children: [
                          s &&
                            (0, n.jsxs)(l.A, {
                              container: !0,
                              direction: "column",
                              gap: 2,
                              children: [
                                (0, n.jsx)(ec.A, {}),
                                (0, n.jsx)(ey, {}),
                                (0, n.jsx)(eo, {}),
                                (0, n.jsx)(em, {}),
                                (0, n.jsx)(er, {})
                              ]
                            }),
                          (0, n.jsx)(eL, {})
                        ]
                      })
                })
              }),
              !t &&
                c > 0 &&
                (0, n.jsx)(l.A, {
                  container: !0,
                  justifyContent: "center",
                  children: (0, n.jsx)(eD, {
                    className: d.pagination,
                    boundaryCount: 1,
                    count: o,
                    "data-testid": "browsePaginationTestId",
                    page: r,
                    siblingCount: 0,
                    size: "small",
                    variant: "text"
                  })
                })
            ]
          });
        },
        eY = (0, b.A)()((e) => ({
          abovePaginationContainer: { display: "block", marginBottom: ej.qB, rowSpacing: "16vw" },
          contentContainer: { marginTop: e.spacing(1) }
        })),
        eK = (e) => {
          let { showHomeView: t, swimlanes: a } = e,
            {
              displayPageNumber: r,
              hasActiveSearchParams: s,
              maxPageCount: o,
              totalResults: c
            } = eq(),
            { classes: d } = eY();
          return (0, n.jsxs)(l.A, {
            container: !0,
            alignItems: "flex-start",
            direction: "column",
            children: [
              (0, n.jsxs)(l.A, {
                container: !0,
                className: d.abovePaginationContainer,
                gap: 1,
                children: [
                  (0, n.jsxs)(l.A, {
                    container: !0,
                    direction: "column",
                    gap: 2,
                    children: [
                      s &&
                        (0, n.jsxs)(i.Fragment, {
                          children: [(0, n.jsx)(g.A, {}), (0, n.jsx)(ec.A, {}), (0, n.jsx)(ey, {})]
                        }),
                      (0, n.jsx)(em, {}),
                      (0, n.jsx)(er, {}),
                      (0, n.jsx)(eo, {})
                    ]
                  }),
                  (0, n.jsx)(l.A, {
                    container: !0,
                    direction: "column",
                    className: d.contentContainer,
                    children: t ? (0, n.jsx)(eV, { swimlanes: a }) : (0, n.jsx)(eL, {})
                  })
                ]
              }),
              !t &&
                c > 0 &&
                (0, n.jsx)(l.A, {
                  container: !0,
                  justifyContent: "center",
                  children: (0, n.jsx)(eD, {
                    count: o,
                    "data-testid": "browsePaginationTestId",
                    page: r
                  })
                })
            ]
          });
        },
        eZ = (0, b.A)()((e) => ({
          abovePaginationContainer: { marginBottom: ej.vM, rowSpacing: "16vw" }
        })),
        eX = (e) => {
          let { showHomeView: t, swimlanes: a } = e,
            {
              displayPageNumber: r,
              hasActiveSearchParams: s,
              maxPageCount: o,
              totalResults: c
            } = eq(),
            { classes: d } = eZ();
          return (0, n.jsxs)(l.A, {
            container: !0,
            alignItems: "flex-start",
            direction: "column",
            children: [
              (0, n.jsxs)(l.A, {
                container: !0,
                className: d.abovePaginationContainer,
                gap: 1,
                children: [
                  (0, n.jsxs)(l.A, {
                    container: !0,
                    direction: "column",
                    gap: 2,
                    children: [
                      s &&
                        (0, n.jsxs)(i.Fragment, {
                          children: [(0, n.jsx)(g.A, {}), (0, n.jsx)(ec.A, {}), (0, n.jsx)(ey, {})]
                        }),
                      (0, n.jsx)(em, {}),
                      (0, n.jsx)(er, {}),
                      (0, n.jsx)(eo, {})
                    ]
                  }),
                  t ? (0, n.jsx)(eV, { swimlanes: a }) : (0, n.jsx)(eL, {})
                ]
              }),
              !t &&
                c > 0 &&
                (0, n.jsx)(l.A, {
                  container: !0,
                  justifyContent: "center",
                  children: (0, n.jsx)(eD, {
                    count: o,
                    "data-testid": "browsePaginationTestId",
                    page: r
                  })
                })
            ]
          });
        },
        eJ = (e) => {
          let { enableHomeView: t, swimlanes: a } = e,
            g = (0, s.useRouter)(),
            { isWebViewAvailable: h } = (0, d.U1)(),
            x = (0, r.A)((e) => e.breakpoints.down(o.Yr)),
            {
              resolvedSwimlanes: p,
              showHomeView: y,
              showTaxonomyLayout: j
            } = eq({ enableHomeView: t, swimlanes: a }),
            { classes: A } = (0, u.A)({ isWebViewAvailable: h });
          (0, c.A)(g.asPath);
          let f = (0, i.useMemo)(
            () =>
              j
                ? (0, n.jsx)(ef, {})
                : h
                  ? (0, n.jsx)(eO, { showHomeView: y, swimlanes: p })
                  : x
                    ? (0, n.jsx)(eK, { showHomeView: y, swimlanes: p })
                    : (0, n.jsx)(eX, { showHomeView: y, swimlanes: p }),
            [x, h, p, y, j]
          );
          return (0, n.jsx)(l.A, {
            container: !0,
            className: A.container,
            "data-testid": "browseTestId",
            children: (0, n.jsx)(m.A, { children: f })
          });
        };
    }
  }
]);
