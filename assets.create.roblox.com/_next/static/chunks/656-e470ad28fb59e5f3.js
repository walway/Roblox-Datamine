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
      a = new e.Error().stack;
    a &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[a] = "4c303ffc-515c-4a72-8c6a-b88bb7f033b8"),
      (e._sentryDebugIdIdentifier = "sentry-dbid-4c303ffc-515c-4a72-8c6a-b88bb7f033b8"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [656],
  {
    11196: (e, a, t) => {
      t.d(a, { A: () => x, l: () => b });
      var n = t(37876),
        l = t(14232),
        r = t(5269),
        i = t(83524),
        o = t(70108),
        s = t(80087),
        d = t(48230),
        c = t.n(d),
        u = t(89422),
        p = t(26521),
        m = t(3088),
        h = t(30580),
        g = t(37112),
        y = t(46207);
      let b = "#62C1C7",
        x = (e) => {
          let {
              backgroundColor: a,
              categoryDisplayName: t,
              categoryName: d,
              swimlaneType: x,
              thumbnailId: v
            } = e,
            { assetTypeTab: f, categoryType: C, isSwimlaneIndexRoute: A } = (0, u.A)(),
            { isWebViewAvailable: w } = (0, s.U1)(),
            { sendEvent: T } = (0, m.MP)(),
            j = "discover-new-audio" === x || "discoverNewAudio" === x,
            { classes: N } = (0, y.A)({
              backgroundColor: null != a ? a : b,
              isGridLayout: A,
              isWebViewAvailable: w,
              isWideSwimlaneTile: j
            }),
            k = (0, l.useCallback)(() => {
              T(h.Ur.NavigatePageView, {
                assetTypeId: null != C ? C : 0,
                navSwimlane: x,
                searchCategory: d
              });
            }, [d, C, T, x]),
            S = (0, l.useMemo)(
              () => (f ? "".concat(f.path, "/").concat(x, "/").concat(d) : g.Sg),
              [f, x, d]
            );
          return (0, n.jsxs)(r.A, {
            container: !0,
            className: N.outerContainer,
            component: c(),
            href: S,
            onClick: k,
            direction: "column",
            justifyContent: "space-between",
            alignItems: "left",
            "data-testid": "".concat(p.og, "categoryTile"),
            children: [
              (0, n.jsx)(i.A, { variant: "overline", className: N.categoryName, children: t }),
              (0, n.jsx)(o.PV, {
                alt: d,
                containerClass: j ? N.wideImageContainer : N.imageContainer,
                targetId: v,
                type: o.uS.assetThumbnail,
                size: j ? o.I1._140x140 : o.I1._75x75
              })
            ]
          });
        };
    },
    13979: (e, a, t) => {
      t.d(a, { A: () => u });
      var n = t(14232),
        l = t(731),
        r = t(89422),
        i = t(42709),
        o = t(28512),
        s = t(76386);
      let d = "BrowseTelemetry",
        c = "unknownBrowseRoute";
      function u(e) {
        var a;
        let {
            confirmShouldFire: t,
            delayMs: u = 0,
            enabled: p = !0,
            metadata: m,
            queryDiagnostics: h,
            reason: g
          } = e,
          {
            assetTypeTab: y,
            categoryKey: b,
            categoryPath: x,
            isBrowseRoute: v,
            isSwimlaneIndexRoute: f,
            isSwimlaneLeafRoute: C,
            isTaxonomyRoute: A,
            isUnknownSwimlaneRoute: w,
            swimlaneType: T,
            topLevelCategorySlug: j
          } = (0, r.A)(),
          { hasActiveSearchParams: N } = (0, l.sI)(),
          { emitSentryPageIssue: k, pageKey: S } = (0, i.A)(h),
          I = "stalledLoad" === g,
          M = null != (a = null == y ? void 0 : y.key) ? a : s.PC,
          D = null != j ? j : s.PC,
          L = null != b ? b : s.PC,
          P = null != T ? T : s.PC,
          R = (0, n.useCallback)(() => {
            if (w)
              return void k(d, c, {
                extra: { categoryKey: L, suppressedReason: g, swimlaneType: P },
                level: "info",
                tags: {
                  assetType: M,
                  categoryKey: L,
                  metadata: null != m ? m : s.PC,
                  swimlaneType: P,
                  topLevelCategorySlug: D
                }
              });
            k(d, g, {
              extra: { categoryPath: x, swimlaneType: T },
              tags: {
                assetType: M,
                isSwimlaneIndexRoute: f,
                isSwimlaneLeafRoute: C,
                isTaxonomyRoute: A,
                metadata: null != m ? m : s.PC,
                topLevelCategorySlug: D
              }
            });
          }, [M, L, x, k, f, C, A, w, m, g, T, P, D]);
        (0, o.A)({
          confirmShouldFire: t,
          dedupeKey: w ? c : g,
          delayMs: u,
          enabled: p && !N && (v || w),
          pageKey: S,
          report: R,
          sampleRate: I ? s.bA : void 0,
          suppressOnSlowConnection: I
        });
      }
    },
    25208: (e, a, t) => {
      t.d(a, { A: () => s, d: () => o });
      var n = t(14232),
        l = t(67434),
        r = t(731),
        i = t(50479);
      let o = [
        { dataTestId: "audioTypeOptionAll", key: "All", translationKey: "Label.All", value: "All" },
        {
          dataTestId: "audioTypeOptionMusic",
          key: "Music",
          translationKey: "AssetTypes.Music",
          value: l.yrH.Music
        },
        {
          dataTestId: "audioTypeOptionSoundEffect",
          key: "SoundEffect",
          translationKey: "AssetTypes.SoundEffects",
          value: l.yrH.SoundEffect
        }
      ];
      function s() {
        let { searchState: e, setSearchState: a } = (0, r.sI)(),
          { audioTypes: t } = e,
          l = 1 === t.length ? t[0] : "All",
          o = t.length === i.F.audioTypes.length,
          s = (0, n.useCallback)(
            (e) => {
              a({ audioTypes: "All" === e ? null : [e] });
            },
            [a]
          );
        return {
          isActive: !o,
          resetAudioType: (0, n.useCallback)(() => {
            a({ audioTypes: null });
          }, [a]),
          selectedValue: l,
          setAudioType: s
        };
      }
    },
    29454: (e, a, t) => {
      t.d(a, { n: () => C, A: () => A });
      var n = t(37876),
        l = t(14232),
        r = t(5269),
        i = t(67434),
        o = t(89422),
        s = t(16360),
        d = t(72312),
        c = t(34286),
        u = t(26521),
        p = t(76581),
        m = t(14469),
        h = t(46227),
        g = t(11196),
        y = t(21588),
        b = t(13979),
        x = t(80087),
        v = t(78602);
      let f = (e) => {
        var a, t, l;
        let { swimlane: i } = e,
          { isWebViewAvailable: s } = (0, x.U1)(),
          { isSwimlaneIndexRoute: d } = (0, o.A)(),
          { classes: c } = (0, v.A)({ isWebViewAvailable: s }),
          u = Object.values(
            null != (t = null == (a = i.subcategory) ? void 0 : a.children) ? t : {}
          ).filter((e) => !1 === e.hidden);
        (0, b.A)({
          enabled: 0 === u.length,
          metadata: null != (l = i.name) ? l : void 0,
          reason: "emptySwimlane"
        });
        let p = u.map((e) => {
          var a, t, l, r, o, s, d;
          return (0, n.jsx)(
            g.A,
            {
              backgroundColor:
                null != (l = null == (a = e.thumbnail) ? void 0 : a.backgroundColor) ? l : "",
              categoryDisplayName: null != (r = e.displayName) ? r : "",
              categoryName: null != (o = e.name) ? o : "",
              swimlaneType: null != (s = i.name) ? s : "",
              thumbnailId: null != (d = null == (t = e.thumbnail) ? void 0 : t.assetId) ? d : 0
            },
            e.name
          );
        });
        return d
          ? (0, n.jsx)(r.A, {
              container: !0,
              className: c.gridContainer,
              "data-testid": "categorySwimlaneGrid",
              children: p
            })
          : (0, n.jsx)(y.A, { classes: { carousel: c.carousel }, children: p });
      };
      var C = (function (e) {
        return (
          (e.Categories = "categories"),
          (e.Essentials = "essential"),
          (e.Trending = "trending"),
          (e.Recommended = "recommended"),
          (e.Priced = "priced"),
          e
        );
      })({});
      let A = (e) => {
        var a, t;
        let { swimlane: g, slug: y } = e,
          { name: b } = g,
          { categoryType: x, isSwimlaneIndexRoute: v } = (0, o.A)(),
          { getRouteToSlug: C } = (0, p.A)(),
          A = null != x ? x : i.hMm.Model,
          w = (0, s.A)(A),
          T = "string" == typeof y,
          j = !T && (0, d.A)(g) && !(0, c.A)(g),
          N = null != (a = null == y ? void 0 : y.split(u.qx).filter(Boolean).pop()) ? a : "",
          k = T
            ? { categoryPath: y, type: "category" }
            : { categoryPath: g.categoryPath, swimlaneName: null != b ? b : "", type: "section" },
          S = (0, l.useMemo)(() => {
            if (T && y) {
              var e;
              return null != (e = C(y)) ? e : void 0;
            }
            if (b && w) return "".concat(w.path, "/").concat(b);
          }, [T, y, C, b, w]),
          I =
            g.displayName && !v
              ? (0, n.jsx)(m.A, {
                  displayName: null != (t = g.displayName) ? t : "",
                  seeAllLink: S,
                  swimlaneName: T ? N || b || "" : null != b ? b : ""
                })
              : null,
          M = j ? (0, n.jsx)(f, { swimlane: g }) : (0, n.jsx)(h.A, { source: k });
        return I ? (0, n.jsxs)(r.A, { container: !0, direction: "column", children: [I, M] }) : M;
      };
    },
    29791: (e, a, t) => {
      t.d(a, { A: () => p });
      var n = t(14232),
        l = t(67434),
        r = t(731),
        i = t(50479),
        o = t(3088),
        s = t(30580),
        d = t(15070),
        c = t(3261);
      let u = [
        {
          dropdownSelectedTranslationKey: "Label.DropdownSelectedRelevance",
          key: "Relevance",
          optionTranslationKey: "Label.Relevance",
          sortCategory: l.Tx5.Relevance
        },
        {
          dropdownSelectedTranslationKey: "Label.DropdownSelectedMostRecent",
          flagName: c.e.FrontendFlagModelSortByUpdatedOrCreated,
          key: "MostRecent",
          optionTranslationKey: "Label.MostRecent",
          sortCategory: l.Tx5.UpdatedTime
        },
        {
          dropdownSelectedTranslationKey: "Label.DropdownSelectedRating",
          key: "Rating",
          optionTranslationKey: "Label.Rating",
          sortCategory: l.Tx5.Ratings
        }
      ];
      function p(e) {
        let { searchState: a, setSearchState: t } = (0, r.sI)(),
          { data: c } = (0, d.A)(),
          { sendEvent: p } = (0, o.MP)(),
          { sortCategory: m } = a,
          h = (0, n.useMemo)(() => u.filter((e) => !e.flagName || c[e.flagName]), [c]),
          g = (0, n.useMemo)(() => {
            var e, a;
            return null != (a = null == (e = h.find((e) => e.sortCategory === m)) ? void 0 : e.key)
              ? a
              : "Relevance";
          }, [h, m]),
          y = (0, n.useMemo)(() => {
            var e, a, t;
            return null !=
              (t =
                null == (e = h.find((e) => e.sortCategory === i.F.sortCategory)) ? void 0 : e.key)
              ? t
              : null == (a = h[0])
                ? void 0
                : a.key;
          }, [h]),
          b = g === y,
          x = (0, n.useCallback)(
            (a) => {
              let n = h.find((e) => e.key === g),
                r = h.find((e) => e.key === a);
              r &&
                (t({ sortCategory: r.sortCategory }),
                "sidebar" === e
                  ? p(s.Ur.SidebarSortChanged, {
                      assetType: l.hMm.Model,
                      newValue: r.sortCategory,
                      oldValue: null == n ? void 0 : n.sortCategory,
                      sortType: "sortCategory"
                    })
                  : "dropdown" === e &&
                    p(s.Ur.FilterDropdownChanged, {
                      assetTypeId: l.hMm.Model,
                      filterName: "Sort",
                      newValue: r.sortCategory,
                      oldValue: null == n ? void 0 : n.sortCategory
                    }));
            },
            [h, g, t, e, p]
          );
        return { currentKey: g, defaultKey: y, isActive: !b, modelSortOptions: h, setSortByKey: x };
      }
    },
    37278: (e, a, t) => {
      t.d(a, { A: () => V });
      var n = t(37876),
        l = t(14232),
        r = t(67434),
        i = t(5269),
        o = t(89422),
        s = t(5274),
        d = t(43684),
        c = t(71684),
        u = t(99878),
        p = t(43824),
        m = t(52863),
        h = t(80087),
        g = t(76392),
        y = t(29791),
        b = t(46180);
      let x = (0, b.A)()((e, a) => {
          let { isWebViewAvailable: t } = a,
            n = e.transitions.create("background-color", {
              duration: e.transitions.duration.short
            }),
            l = t ? e.palette.foreground.secondary : e.palette.surface[300];
          return {
            activeDropdown: {
              "& fieldset": { border: "none !important" },
              backgroundColor: e.palette.actionV2.primary.fill,
              borderRadius: 50,
              color: e.palette.content.inverse,
              fontSize: t ? 12 : 14,
              fontWeight: 600,
              height: t ? 26 : 32,
              width: "auto"
            },
            activeInput: { paddingRight: "2px !important" },
            closeIconButton: { color: e.palette.content.inverse, marginRight: 4, padding: 4 },
            dropdown: {
              "& fieldset": { border: "none !important" },
              "&:hover": {
                "& fieldset": { border: "none !important" },
                backgroundColor: e.palette.states.hover,
                cursor: "pointer"
              },
              backgroundColor: l,
              borderRadius: 50,
              fontSize: t ? 12 : 14,
              fontWeight: 600,
              height: t ? 26 : 32,
              transition: n,
              width: "auto"
            },
            icon: { color: e.palette.text.primary, transition: "transform 250ms" },
            menuItem: {
              "&.Mui-selected, &.Mui-selected:focus, &.Mui-selected:active": {
                backgroundColor: "transparent !important"
              },
              "&.Mui-selected:hover": { backgroundColor: e.palette.action.hover }
            },
            menuPaper: { "& .MuiList-root": { backgroundColor: l }, "&&": { backgroundColor: l } }
          };
        }),
        v = {
          currentKey: "",
          defaultKey: "",
          isActive: !1,
          label: "",
          options: [],
          setSortByKey: () => {}
        },
        f = () => {
          var e;
          let { categoryType: a } = (0, o.A)(),
            { translate: t } = (0, m.Bd)(),
            { isWebViewAvailable: i } = (0, h.U1)(),
            { classes: s } = x({ isWebViewAvailable: i }),
            b = (0, g.A)("dropdown"),
            f = (0, y.A)("dropdown"),
            C = (0, l.useMemo)(
              () => ({
                [r.hMm.Audio]: { ...b, label: "Audio", options: b.audioSortOptions },
                [r.hMm.Model]: { ...f, label: "Model", options: f.modelSortOptions }
              }),
              [b, f]
            ),
            A = null != (e = null != a ? C[a] : void 0) ? e : v,
            w = (0, l.useMemo)(
              () =>
                A.options.map((e) => {
                  var a;
                  return {
                    dataTestId: "sortOption".concat(A.label).concat(e.key),
                    dropdownSelectedLabel: t(e.dropdownSelectedTranslationKey),
                    key: e.key,
                    label: t(e.optionTranslationKey),
                    sortCategory: e.sortCategory,
                    sortDirection: null != (a = e.sortDirection) ? a : r.UEL.Descending
                  };
                }),
              [A, t]
            ),
            T = (0, l.useMemo)(() => {
              var e, a;
              return null !=
                (a =
                  null == (e = w.find((e) => e.key === A.currentKey))
                    ? void 0
                    : e.dropdownSelectedLabel)
                ? a
                : "";
            }, [w, A.currentKey]);
          if (0 === w.length) return null;
          let { isActive: j } = A;
          return (0, n.jsx)(d.A, {
            size: "small",
            variant: "outlined",
            className: j ? s.activeDropdown : s.dropdown,
            InputProps: {
              className: j ? s.activeDropdown : s.dropdown,
              ...(j && {
                endAdornment: (0, n.jsx)(c.A, {
                  "aria-label": "Reset sort to relevance",
                  size: "small",
                  color: "inherit",
                  onClick: (e) => {
                    (e.stopPropagation(), A.setSortByKey(A.defaultKey));
                  },
                  className: s.closeIconButton,
                  disableRipple: !0,
                  children: (0, n.jsx)(u.C, { fontSize: "small" })
                })
              })
            },
            SelectProps: {
              classes: { icon: s.icon, ...(j && { select: s.activeInput }) },
              MenuProps: { PaperProps: { className: s.menuPaper } },
              ...(j && { IconComponent: () => null })
            },
            value: A.currentKey,
            onChange: (e) => A.setSortByKey(e.target.value),
            renderValue: () => T,
            children: w.map((e) =>
              (0, n.jsx)(
                p.A,
                { value: e.key, "data-testid": e.dataTestId, children: e.label },
                e.key
              )
            )
          });
        };
      var C = t(25208);
      let A = () => {
        var e, a;
        let { translate: t } = (0, m.Bd)(),
          { isActive: l, resetAudioType: r, selectedValue: i, setAudioType: o } = (0, C.A)(),
          { isWebViewAvailable: s } = (0, h.U1)(),
          { classes: g } = x({ isWebViewAvailable: s }),
          y =
            null != (a = null == (e = C.d.find((e) => e.value === i)) ? void 0 : e.translationKey)
              ? a
              : "";
        return (0, n.jsx)(d.A, {
          size: "small",
          variant: "outlined",
          className: l ? g.activeDropdown : g.dropdown,
          InputProps: {
            className: l ? g.activeDropdown : g.dropdown,
            ...(l && {
              endAdornment: (0, n.jsx)(c.A, {
                "aria-label": "Reset audio type to all",
                size: "small",
                color: "inherit",
                onClick: (e) => {
                  (e.stopPropagation(), r());
                },
                className: g.closeIconButton,
                disableRipple: !0,
                children: (0, n.jsx)(u.C, { fontSize: "small" })
              })
            })
          },
          SelectProps: {
            classes: { icon: g.icon, ...(l && { select: g.activeInput }) },
            MenuProps: { PaperProps: { className: g.menuPaper } },
            ...(l && { IconComponent: () => null })
          },
          value: i,
          onChange: (e) => o(e.target.value),
          renderValue: () => "".concat(t("Label.Type"), ": ").concat(t(y)),
          children: C.d.map((e) =>
            (0, n.jsx)(
              p.A,
              { value: e.value, "data-testid": e.dataTestId, children: t(e.translationKey) },
              e.key
            )
          )
        });
      };
      var w = t(731),
        T = t(3088),
        j = t(30580),
        N = t(50479);
      let k = [
          {
            dataTestId: "durationOptionAll",
            range: { maxDuration: N.IA, minDuration: N.u },
            title: "Label.DurationAll",
            value: "All"
          },
          {
            dataTestId: "durationOption0To30",
            range: { maxDuration: 30, minDuration: 0 },
            title: "Label.Duration0_30s",
            value: "0-30"
          },
          {
            dataTestId: "durationOption30To60",
            range: { maxDuration: 60, minDuration: 30 },
            title: "Label.Duration30_1m",
            value: "30-60"
          },
          {
            dataTestId: "durationOption60To120",
            range: { maxDuration: 120, minDuration: 60 },
            title: "Label.Duration1_2m",
            value: "60-120"
          },
          {
            dataTestId: "durationOption120To300",
            range: { maxDuration: 300, minDuration: 120 },
            title: "Label.Duration2_5m",
            value: "120-300"
          },
          {
            dataTestId: "durationOption300Plus",
            range: { maxDuration: N.IA, minDuration: 300 },
            title: "Label.Duration5mPlus",
            value: "300-plus"
          }
        ],
        S = () => {
          var e, a, t, i;
          let { searchState: o, setSearchState: s } = (0, w.sI)(),
            { isWebViewAvailable: g } = (0, h.U1)(),
            { classes: y } = x({ isWebViewAvailable: g }),
            { translate: b } = (0, m.Bd)(),
            { sendEvent: v } = (0, T.MP)(),
            { minDuration: f, maxDuration: C } = o,
            A =
              null !=
              (t =
                null ==
                (e = k.find(
                  (e) => "All" !== e.value && e.range.minDuration === f && e.range.maxDuration === C
                ))
                  ? void 0
                  : e.value)
                ? t
                : "All",
            N = (0, l.useCallback)(
              (e) => {
                let a = k.find((a) => a.value === e);
                if (a) {
                  let e = "".concat(f, "-").concat(C),
                    t = "".concat(a.range.minDuration, "-").concat(a.range.maxDuration);
                  (v(j.Ur.FilterDropdownChanged, {
                    assetTypeId: r.hMm.Audio,
                    filterName: "Duration",
                    newValue: t,
                    oldValue: e
                  }),
                    s({ maxDuration: a.range.maxDuration, minDuration: a.range.minDuration }));
                }
              },
              [C, f, v, s]
            ),
            S =
              null != (i = null == (a = k.find((e) => e.value === A)) ? void 0 : a.title) ? i : "",
            I = "All" !== A,
            M = (0, l.useCallback)(
              (e) => {
                (e.stopPropagation(), N("All"));
              },
              [N]
            );
          return (0, n.jsx)(d.A, {
            size: "small",
            variant: "outlined",
            className: I ? y.activeDropdown : y.dropdown,
            InputProps: {
              className: I ? y.activeDropdown : y.dropdown,
              ...(I && {
                endAdornment: (0, n.jsx)(c.A, {
                  "aria-label": "Reset duration to all",
                  size: "small",
                  color: "inherit",
                  onClick: M,
                  className: y.closeIconButton,
                  disableRipple: !0,
                  children: (0, n.jsx)(u.C, { fontSize: "small" })
                })
              })
            },
            SelectProps: {
              classes: { icon: y.icon, ...(I && { select: y.activeInput }) },
              MenuProps: { PaperProps: { className: y.menuPaper } },
              ...(I && { IconComponent: () => null })
            },
            value: A,
            onChange: (e) => N(e.target.value),
            renderValue: () => "".concat(b("Label.Duration"), ": ").concat(b(S)),
            children: k.map((e) =>
              (0, n.jsx)(
                p.A,
                { value: e.value, "data-testid": e.dataTestId, children: b(e.title) },
                e.value
              )
            )
          });
        };
      var I = t(37837),
        M = t(92554);
      let D = [
          {
            chipTranslationKey: "Label.ContainsChipScripts",
            instanceType: r.NG0.Script,
            translationKey: "Label.Scripts"
          },
          {
            chipTranslationKey: "Label.ContainsChipMeshParts",
            instanceType: r.NG0.MeshPart,
            translationKey: "Label.MeshParts"
          },
          {
            chipTranslationKey: "Label.ContainsChipDecals",
            instanceType: r.NG0.Decal,
            translationKey: "Label.Decals"
          },
          {
            chipTranslationKey: "Label.ContainsChipTools",
            instanceType: r.NG0.Tool,
            translationKey: "Label.Tools"
          },
          {
            chipTranslationKey: "Label.ContainsChipAnimations",
            instanceType: r.NG0.Animation,
            translationKey: "Label.Animations"
          },
          {
            chipTranslationKey: "Label.ContainsChipAudio",
            instanceType: r.NG0.Audio,
            translationKey: "Label.Audio"
          }
        ],
        L = () => {
          let { searchState: e, setSearchState: a } = (0, w.sI)(),
            { isWebViewAvailable: t } = (0, h.U1)(),
            { classes: i } = x({ isWebViewAvailable: t }),
            { translate: o } = (0, m.Bd)(),
            { sendEvent: s } = (0, T.MP)(),
            { includedInstanceTypes: g } = e,
            y = g.length > 0,
            b = (0, l.useCallback)(
              (e) => {
                let t = e.target.value;
                (s(j.Ur.FilterDropdownChanged, {
                  assetTypeId: r.hMm.Model,
                  filterName: "ModelInstanceTypes",
                  newValue: t.join(","),
                  oldValue: g.join(",")
                }),
                  a({ includedInstanceTypes: t }));
              },
              [g, s, a]
            ),
            v = (0, l.useCallback)(
              (e) => {
                (e.stopPropagation(),
                  s(j.Ur.FilterDropdownChanged, {
                    assetTypeId: r.hMm.Model,
                    filterName: "ModelInstanceTypes",
                    newValue: "",
                    oldValue: g.join(",")
                  }),
                  a({ includedInstanceTypes: null }));
              },
              [g, s, a]
            ),
            f = (0, l.useMemo)(() => {
              if (!y) return o("Label.ContainsNoInstanceFilters");
              let e = D.find((e) => e.instanceType === g[0]),
                a = g.length - 1;
              return a > 0
                ? o("Label.InstanceFilterWithRemaining", {
                    chipLabel: o(e.translationKey),
                    remaining: String(a)
                  })
                : o(e.chipTranslationKey);
            }, [g, y, o]);
          return (0, n.jsx)(d.A, {
            size: "small",
            variant: "outlined",
            className: y ? i.activeDropdown : i.dropdown,
            displayEmpty: !0,
            InputProps: {
              className: y ? i.activeDropdown : i.dropdown,
              ...(y && {
                endAdornment: (0, n.jsx)(c.A, {
                  "aria-label": "Reset instance type filters",
                  size: "small",
                  color: "inherit",
                  onClick: v,
                  className: i.closeIconButton,
                  disableRipple: !0,
                  children: (0, n.jsx)(u.C, { fontSize: "small" })
                })
              })
            },
            SelectProps: {
              autoWidth: !0,
              classes: { icon: i.icon, ...(y && { select: i.activeInput }) },
              ...(y && { IconComponent: () => null }),
              MenuProps: {
                anchorOrigin: { horizontal: "left", vertical: "bottom" },
                PaperProps: { className: i.menuPaper },
                transformOrigin: { horizontal: "left", vertical: "top" }
              },
              multiple: !0
            },
            value: g,
            onChange: b,
            renderValue: () => f,
            "data-testid": "modelInstanceFiltersDropdown",
            children: D.map((e) => {
              let a = g.includes(e.instanceType);
              return (0, n.jsxs)(
                p.A,
                {
                  value: e.instanceType,
                  className: i.menuItem,
                  children: [
                    (0, n.jsx)(I.A, { checked: a, size: "small", disableRipple: !0 }),
                    (0, n.jsx)(M.A, { primary: o(e.translationKey) })
                  ]
                },
                e.instanceType
              );
            })
          });
        };
      var P = t(83524),
        R = t(20647),
        F = t(47061);
      let B = (0, b.A)()((e, a) => {
          let { isWebViewAvailable: t } = a,
            n = e.transitions.create("background-color", {
              duration: e.transitions.duration.short
            }),
            l = t ? e.palette.foreground.secondary : e.palette.surface[300];
          return {
            activeDropdown: { "& .MuiMenu-root": { display: "none" } },
            checkboxLabel: { marginLeft: 0 },
            dropdown: {
              "& .MuiMenu-root": { display: "none" },
              "& fieldset": { border: "none !important" },
              "&:hover": {
                "& fieldset": { border: "none !important" },
                backgroundColor: e.palette.states.hover,
                cursor: "pointer"
              },
              transition: n
            },
            icon: { transition: "transform 250ms" },
            iconOpen: { transform: "rotate(180deg)" },
            popover: {
              "@media (max-width: 600px)": { minWidth: "260px", padding: 12 },
              backgroundColor: l,
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              marginTop: "8px",
              maxWidth: "calc(100vw - 16px)",
              minWidth: "280px",
              padding: 15,
              position: "absolute",
              top: "100%",
              zIndex: 1200
            },
            popoverContent: { display: "flex", flexDirection: "column", gap: e.spacing(2) },
            sliderContainer: { transition: "opacity 250ms" },
            sliderDisabled: { opacity: 0.5, pointerEvents: "none" },
            wrapper: { "& .MuiInputBase-root": { pointerEvents: "auto" }, cursor: "pointer" }
          };
        }),
        K = () => {
          let { translate: e } = (0, m.Bd)(),
            { sendEvent: a } = (0, T.MP)(),
            { categoryType: t } = (0, o.A)(),
            { isWebViewAvailable: i } = (0, h.U1)(),
            { classes: s, cx: g } = x({ isWebViewAvailable: i }),
            { classes: y } = B({ isWebViewAvailable: i }),
            {
              currentMaxPrice: b,
              currentMinPrice: v,
              displayMaxPrice: f,
              displayMinPrice: C,
              isActive: A,
              isFreeSelected: k,
              resetPrice: S,
              setFree: M,
              setPriceRange: D
            } = (function () {
              var e, a;
              let { searchState: t, setSearchState: n } = (0, w.sI)(),
                r = t.minPrice,
                i = t.maxPrice,
                o = 0 === i,
                s = r !== N.F.minPrice || i !== N.F.maxPrice,
                d = (0, l.useRef)(void 0),
                c = (0, l.useRef)(void 0),
                u = o ? (null != (e = d.current) ? e : N.t) : r,
                p = o ? (null != (a = c.current) ? a : N.n8) : i,
                m = (0, l.useCallback)(
                  (e, a) => {
                    o || n({ maxPrice: null != a ? a : null, minPrice: null != e ? e : null });
                  },
                  [o, n]
                ),
                h = (0, l.useCallback)(
                  (e) => {
                    if (e) ((d.current = r), (c.current = i), n({ maxPrice: 0, minPrice: null }));
                    else {
                      var a, t;
                      (n({
                        maxPrice: null != (a = c.current) ? a : null,
                        minPrice: null != (t = d.current) ? t : null
                      }),
                        (d.current = void 0),
                        (c.current = void 0));
                    }
                  },
                  [r, i, n]
                );
              return {
                currentMaxPrice: i,
                currentMinPrice: r,
                displayMaxPrice: p,
                displayMinPrice: u,
                isActive: s,
                isFreeSelected: o,
                resetPrice: (0, l.useCallback)(() => {
                  (n({ maxPrice: null, minPrice: null }),
                    (d.current = void 0),
                    (c.current = void 0));
                }, [n]),
                setFree: h,
                setPriceRange: m
              };
            })(),
            {
              anchorRef: L,
              isOpen: K,
              popoverPosition: V,
              toggle: U
            } = (function () {
              let [e, a] = (0, l.useState)(!1),
                t = (0, l.useRef)(null),
                [n, r] = (0, l.useState)({}),
                i = (0, l.useCallback)(() => {
                  if (!t.current) return;
                  let e = t.current.getBoundingClientRect();
                  window.innerWidth - e.left - 8 < 280
                    ? r({ left: -(e.left - 8), right: "auto" })
                    : r({ left: 0, right: "auto" });
                }, []),
                o = (0, l.useCallback)(() => {
                  (e || i(), a((e) => !e));
                }, [e, i]);
              return (
                (0, l.useEffect)(() => {
                  if (!e) return;
                  let n = (e) => {
                    t.current && !t.current.contains(e.target) && a(!1);
                  };
                  return (
                    document.addEventListener("mousedown", n),
                    () => document.removeEventListener("mousedown", n)
                  );
                }, [e]),
                (0, l.useEffect)(() => {
                  if (e)
                    return (
                      window.addEventListener("resize", i),
                      () => window.removeEventListener("resize", i)
                    );
                }, [e, i]),
                { anchorRef: t, isOpen: e, popoverPosition: n, toggle: o }
              );
            })(),
            z = (0, l.useMemo)(
              () =>
                k
                  ? e("Label.PriceFree")
                  : A
                    ? e("Label.PriceRange", { maxPrice: b.toString(), minPrice: v.toString() })
                    : e("Label.PriceAny"),
              [k, A, v, b, e]
            ),
            E = null != t ? t : r.hMm.Model,
            O = (0, l.useCallback)(
              (e, t) => {
                (k ||
                  a(j.Ur.FilterDropdownChanged, {
                    assetTypeId: E,
                    filterName: "Price",
                    newValue: "".concat(null != e ? e : "0", "-").concat(null != t ? t : "max"),
                    oldValue: "".concat(v, "-").concat(b)
                  }),
                  D(e, t));
              },
              [k, E, v, b, a, D]
            ),
            W = (0, l.useCallback)(
              (e) => {
                let { checked: t } = e.target;
                (a(j.Ur.FilterDropdownChanged, {
                  assetTypeId: E,
                  filterName: "Price",
                  newValue: t ? "Free" : "".concat(v, "-").concat(b),
                  oldValue: t ? "".concat(v, "-").concat(b) : "Free"
                }),
                  M(t));
              },
              [E, v, b, a, M]
            ),
            Y = (0, l.useCallback)(
              (e) => {
                (e.stopPropagation(),
                  a(j.Ur.FilterDropdownChanged, {
                    assetTypeId: E,
                    filterName: "Price",
                    newValue: "",
                    oldValue: "".concat(v, "-").concat(b)
                  }),
                  S());
              },
              [E, b, v, a, S]
            );
          return (0, n.jsxs)("div", {
            ref: L,
            className: "relative",
            children: [
              (0, n.jsx)("div", {
                className: y.wrapper,
                onClick: U,
                onKeyDown: (e) => {
                  "Enter" === e.key && (e.preventDefault(), U());
                },
                role: "button",
                tabIndex: 0,
                children: (0, n.jsx)(d.A, {
                  size: "small",
                  variant: "outlined",
                  className: A ? g(s.activeDropdown, y.activeDropdown) : g(s.dropdown, y.dropdown),
                  value: "price",
                  displayEmpty: !0,
                  renderValue: () => z,
                  onMouseDown: (e) => {
                    (e.preventDefault(), e.stopPropagation());
                  },
                  SelectProps: {
                    classes: {
                      icon: g(s.icon, y.icon, K && y.iconOpen),
                      ...(A && { select: s.activeInput })
                    },
                    ...(A && { IconComponent: () => null })
                  },
                  InputProps: {
                    className: A
                      ? g(s.activeDropdown, y.activeDropdown)
                      : g(s.dropdown, y.dropdown),
                    ...(A && {
                      endAdornment: (0, n.jsx)(c.A, {
                        "aria-label": "Reset price filters",
                        size: "small",
                        color: "inherit",
                        onClick: Y,
                        className: s.closeIconButton,
                        disableRipple: !0,
                        children: (0, n.jsx)(u.C, { fontSize: "small" })
                      })
                    }),
                    inputProps: { "data-testid": "priceDropdownButton", readOnly: !0 }
                  },
                  children: (0, n.jsx)(p.A, {
                    value: "price",
                    sx: { display: "none" },
                    children: e("Label.Price")
                  })
                })
              }),
              K &&
                (0, n.jsx)("div", {
                  className: y.popover,
                  style: V,
                  "data-testid": "priceDropdownPopover",
                  children: (0, n.jsxs)("div", {
                    className: y.popoverContent,
                    children: [
                      (0, n.jsx)("div", {
                        children: (0, n.jsx)(P.A, { variant: "h6", children: e("Label.Price") })
                      }),
                      (0, n.jsx)("div", {
                        className: g(y.sliderContainer, k && y.sliderDisabled),
                        children: (0, n.jsx)(F.A, {
                          onRangeUpdated: O,
                          overrideMinValue: C,
                          overrideMaxValue: f
                        })
                      }),
                      (0, n.jsx)(R.F, {
                        control: (0, n.jsx)(I.A, {
                          checked: k,
                          onChange: W,
                          size: "small",
                          "data-testid": "priceFreeCheckbox"
                        }),
                        label: e("Label.LimitToFree"),
                        className: y.checkboxLabel
                      })
                    ]
                  })
                })
            ]
          });
        },
        V = () => {
          let { categoryType: e, isSwimlaneRoute: a } = (0, o.A)();
          return (e !== r.hMm.Audio && e !== r.hMm.Model && e !== r.hMm.Plugin) || a
            ? null
            : (0, n.jsx)(i.A, {
                container: !0,
                alignItems: "center",
                wrap: "nowrap",
                gap: 1,
                justifyContent: "space-between",
                "data-testid": "filterRow",
                children: (0, n.jsxs)(i.A, {
                  container: !0,
                  alignItems: "center",
                  gap: 1,
                  children: [
                    (e === r.hMm.Audio || e === r.hMm.Model) &&
                      (0, n.jsx)(i.A, { item: !0, children: (0, n.jsx)(f, {}) }),
                    (0, s.A)(e) && (0, n.jsx)(i.A, { item: !0, children: (0, n.jsx)(K, {}) }),
                    e === r.hMm.Model && (0, n.jsx)(i.A, { item: !0, children: (0, n.jsx)(L, {}) }),
                    e === r.hMm.Audio &&
                      (0, n.jsxs)(l.Fragment, {
                        children: [
                          (0, n.jsx)(i.A, { item: !0, children: (0, n.jsx)(A, {}) }),
                          (0, n.jsx)(i.A, { item: !0, children: (0, n.jsx)(S, {}) })
                        ]
                      })
                  ]
                })
              });
        };
    },
    39298: (e, a, t) => {
      t.d(a, { A: () => u });
      var n = t(37876);
      t(14232);
      var l = t(5269),
        r = t(67434),
        i = t(89422),
        o = t(40714),
        s = t(46271),
        d = t(45041);
      let c = () => {
        let { categoryType: e } = (0, i.A)(),
          a = e === r.hMm.Audio,
          t = e === r.hMm.FontFamily,
          c = (0, s.A)(),
          { classes: u } = (0, d.A)({ isAudio: a, isFont: t, tileVariant: c }),
          p = Array.from({ length: t ? 6 : 60 }, (e, a) =>
            (0, n.jsx)(o.A, { fillsColumn: !0, index: a }, a)
          );
        return (0, n.jsx)(l.A, {
          className: u.gridList,
          "data-testid": "asset-tile-grid-placeholder",
          children: p
        });
      };
      c.displayName = "AssetTileGridPlaceholder";
      let u = c;
    },
    40714: (e, a, t) => {
      t.d(a, { A: () => C });
      var n = t(37876);
      t(14232);
      var l = t(89045),
        r = t(67434),
        i = t(89422),
        o = t(47790),
        s = t(80087),
        d = t(20823),
        c = t(46180),
        u = t(93974);
      let p = (0, c.A)()((e, a) => {
          let { isEvenRow: t, isWebViewAvailable: n } = a,
            l = n ? 24 : 36,
            r = (0, u.A)(n);
          return {
            artistNameContainer: {
              [e.breakpoints.up(d.Yr)]: r.artistName.desktop,
              [e.breakpoints.down(d.Yr)]: r.artistName.compact
            },
            artistNameSkeleton: { width: "60%" },
            assetNameContainer: {
              [e.breakpoints.up(d.Yr)]: r.assetName.desktop,
              [e.breakpoints.down(d.Yr)]: r.assetName.compact
            },
            assetNameSkeleton: { width: "75%" },
            audioIconPlaceholder: {
              height: l,
              [e.breakpoints.up(d.Yr)]: r.audioIcon.desktop,
              [e.breakpoints.down(d.Yr)]: r.audioIcon.compact
            },
            categoryContainer: {
              [e.breakpoints.up(d.Yr)]: r.category.desktop,
              [e.breakpoints.down(d.Yr)]: r.category.compact
            },
            categorySkeleton: { width: "50%" },
            contentContainer: {
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              flexGrow: 1,
              flexWrap: "nowrap",
              height: l
            },
            expandIconPlaceholder: { height: l, [e.breakpoints.up(d.Yr)]: r.expandIcon.desktop },
            lengthContainer: {
              [e.breakpoints.up(d.Yr)]: r.length.desktop,
              [e.breakpoints.down(d.Yr)]: r.length.compact
            },
            lengthSkeleton: { minWidth: 30, width: "40%" },
            row: {
              alignItems: "center",
              backgroundColor: e.palette.media.secondaryBackground,
              borderBottom: "1px solid ".concat(e.palette.media.divider),
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              width: "100%",
              [e.breakpoints.up(d.Yr)]: { padding: "0 8px" },
              [e.breakpoints.down(d.Yr)]: { padding: "0 4px" },
              ...(n && {
                backgroundColor: t ? e.palette.background.default : e.palette.background.media,
                border: "1px solid transparent",
                borderRadius: 4
              })
            }
          };
        }),
        m = (e) => {
          let { index: a = 0 } = e,
            { isWebViewAvailable: t } = (0, s.U1)(),
            { classes: r } = p({ isEvenRow: a % 2 == 1, isWebViewAvailable: t }),
            i = (0, o.A)((e) => e.breakpoints.down(d.Yr));
          return (0, n.jsxs)("div", {
            className: r.row,
            "data-testid": "audio-row-placeholder",
            children: [
              (0, n.jsx)("div", { className: r.audioIconPlaceholder }),
              (0, n.jsxs)("div", {
                className: r.contentContainer,
                children: [
                  (0, n.jsx)("div", {
                    className: r.assetNameContainer,
                    children: (0, n.jsx)(l.S, {
                      variant: "text",
                      animate: !0,
                      className: r.assetNameSkeleton
                    })
                  }),
                  (0, n.jsx)("div", {
                    className: r.artistNameContainer,
                    children: (0, n.jsx)(l.S, {
                      variant: "text",
                      animate: !0,
                      className: r.artistNameSkeleton
                    })
                  }),
                  (0, n.jsx)("div", {
                    className: r.categoryContainer,
                    children: (0, n.jsx)(l.S, {
                      variant: "text",
                      animate: !0,
                      className: r.categorySkeleton
                    })
                  }),
                  (0, n.jsx)("div", {
                    className: r.lengthContainer,
                    children: (0, n.jsx)(l.S, {
                      variant: "text",
                      animate: !0,
                      className: r.lengthSkeleton
                    })
                  })
                ]
              }),
              !i && (0, n.jsx)("div", { className: r.expandIconPlaceholder })
            ]
          });
        };
      m.displayName = "AudioRowPlaceholder";
      let h = (0, c.A)()((e, a) => {
          let { isWebViewAvailable: t } = a;
          return {
            skeleton: {
              backgroundColor: t ? e.palette.surface[0] : e.palette.surface[300],
              borderRadius: 8,
              height: 85,
              width: "100%",
              [e.breakpoints.up(d.Yr)]: { flexBasis: "calc(50% - 8px)" }
            }
          };
        }),
        g = () => {
          let { isWebViewAvailable: e } = (0, s.U1)(),
            { classes: a } = h({ isWebViewAvailable: e });
          return (0, n.jsx)(l.S, {
            variant: "rectangular",
            animate: !0,
            className: a.skeleton,
            "data-testid": "font-tile-placeholder"
          });
        };
      g.displayName = "FontTilePlaceholder";
      var y = t(51421),
        b = t(36442);
      let x = (0, c.A)()((e, a) => {
        let { fillsColumn: t, variant: n } = a,
          { border: l, detailsHeight: r, padding: i, thumbnailRadius: o, width: s } = b.f[n],
          d = l + i;
        return {
          container: {
            paddingBottom: y.wX + r,
            paddingLeft: d,
            paddingRight: d,
            paddingTop: d,
            width: t ? "100%" : s
          },
          thumbnail: {
            aspectRatio: "1 / 1",
            backgroundColor: (0, b.B)(e, n),
            borderRadius: o,
            height: "auto",
            width: "100%"
          }
        };
      });
      var v = t(46271);
      let f = (e) => {
        let { fillsColumn: a = !1, index: t } = e,
          { categoryType: o } = (0, i.A)(),
          { classes: s } = x({ fillsColumn: a, variant: (0, v.A)() });
        return o === r.hMm.Audio
          ? (0, n.jsx)(m, { index: t })
          : o === r.hMm.FontFamily
            ? (0, n.jsx)(g, {})
            : (0, n.jsx)("div", {
                className: s.container,
                "data-testid": "asset-tile-placeholder",
                children: (0, n.jsx)(l.S, {
                  variant: "rectangular",
                  animate: !0,
                  className: s.thumbnail
                })
              });
      };
      f.displayName = "AssetTilePlaceholder";
      let C = f;
    },
    45041: (e, a, t) => {
      t.d(a, { A: () => i });
      var n = t(46180),
        l = t(36442),
        r = t(19334);
      let i = (0, n.A)()((e, a) => {
        let { isAudio: t, isFont: n, tileVariant: i } = a;
        return {
          gridList: {
            gap: (0, r.bj)(t, n),
            ...(t || n
              ? { display: "flex", flexWrap: "wrap" }
              : {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(".concat(l.f[i].width, "px, 1fr))")
                }),
            width: "100%"
          }
        };
      });
    },
    46207: (e, a, t) => {
      t.d(a, { A: () => n });
      let n = (0, t(46180).A)()((e, a) => {
        var t, n;
        let {
            backgroundColor: l,
            isGridLayout: r,
            isWebViewAvailable: i,
            isWideSwimlaneTile: o
          } = a,
          s = i ? 65 : 60,
          d = i ? 100 : 128,
          c = i ? 78 : 40,
          u = ((t = i), (n = o), t ? (n ? 452 : 388) : n ? 800 : 720),
          p = (function (e) {
            let { isGridLayout: a, isWebViewAvailable: t, isWideSwimlaneTile: n } = e;
            return n ? (t ? 210 : 312) : a ? (t ? 178 : 272) : t ? 100 : 150;
          })({ isGridLayout: r, isWebViewAvailable: i, isWideSwimlaneTile: o });
        return {
          categoryName: {
            color: e.palette.content.static.light,
            marginLeft: i ? 10 : 16,
            overflow: "hidden",
            paddingTop: 6,
            textAlign: "left",
            textOverflow: "ellipsis",
            textTransform: "capitalize",
            whiteSpace: "nowrap",
            width: "calc(100% - 16px)"
          },
          imageContainer: { height: s, marginLeft: i ? 10 : 16, padding: 0, width: s },
          outerContainer: {
            "&:hover": { opacity: 0.88 },
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(25, 27, 29, 0.25) 100%), ".concat(
                l
              ),
            borderRadius: 4,
            height: i ? 110 : 130,
            padding: o ? "6px 0px 0px" : "6px 0px 8px",
            ...(r
              ? { minWidth: p, width: "auto", [e.breakpoints.down(u)]: { width: "100%" } }
              : { width: p })
          },
          wideImageContainer: {
            height: d - c,
            marginLeft: 125,
            paddingTop: c,
            width: d,
            ...(i && { marginLeft: r ? 10 : 100, paddingTop: r ? 64 : c, width: r ? 80 : d })
          }
        };
      });
    },
    46227: (e, a, t) => {
      t.d(a, { A: () => x });
      var n = t(37876);
      t(14232);
      var l = t(5269),
        r = t(26521),
        i = t(75356),
        o = t(85029),
        s = t(21588),
        d = t(13979),
        c = t(93852),
        u = t(5043),
        p = t(80087),
        m = t(89099),
        h = t(46180),
        g = t(20823),
        y = t(51421);
      let b = (0, h.A)()((e, a) => {
          let { isWebViewAvailable: t } = a;
          return {
            assetTileCarousel: {
              [e.breakpoints.up(g.Yr)]: { minHeight: y.b9 + 72 },
              [e.breakpoints.down(g.Yr)]: { minHeight: t ? y.Xn + y.PW : y.Qf }
            }
          };
        }),
        x = (e) => {
          var a, t;
          let { source: h } = e,
            g = (0, m.useRouter)(),
            { isWebViewAvailable: y } = (0, p.U1)(),
            x = "section" === h.type ? h.swimlaneName : void 0,
            { categoryPath: v } = h,
            { classes: f } = b({ isWebViewAvailable: y }),
            { data: C, isSuccess: A } = (0, c.F)(x, { categoryPath: v, maxPageSize: u.WA }),
            w = null != (a = null == C ? void 0 : C.creatorStoreAssets) ? a : [];
          return (
            (0, d.A)({
              enabled: A && 0 === w.length,
              metadata: null != x ? x : v,
              reason: "emptySwimlane"
            }),
            (0, n.jsx)(
              i.Ay,
              {
                children: (0, n.jsx)(l.A, {
                  container: !0,
                  "data-testid": ""
                    .concat(r.og, "assetSwimlane-")
                    .concat(null != (t = null != x ? x : v) ? t : ""),
                  className: f.assetTileCarousel,
                  children:
                    w.length > 0 &&
                    (0, n.jsx)(s.A, {
                      containsAssetTiles: !0,
                      children: w.map((e, a) => {
                        var t, r;
                        let i = null != (r = null == (t = e.asset) ? void 0 : t.id) ? r : 0;
                        return (0, n.jsx)(
                          l.A,
                          {
                            "data-testid": "swimlaneAssetTile-".concat(i),
                            children: (0, n.jsx)(o.A, {
                              assetId: i,
                              pagePosition: a,
                              swimlaneName: x
                            })
                          },
                          i || a
                        );
                      })
                    })
                })
              },
              g.asPath
            )
          );
        };
    },
    47061: (e, a, t) => {
      t.d(a, { A: () => g });
      var n = t(37876),
        l = t(14232),
        r = t(731);
      let i = (e) => "$".concat(e);
      var o = t(95694),
        s = t(67434),
        d = t(18335),
        c = t(89422),
        u = t(64829),
        p = t(50479);
      let m = /^\$/,
        h = function () {
          let { allowFree: e = !0 } =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { categoryType: a } = (0, c.A)(),
            {
              data: t,
              isLoading: n,
              isError: r
            } = (0, d.dT)((0, u.A)(null != a ? a : s.hMm.Model)),
            i = e ? p.t : 1,
            o = (0, l.useMemo)(() => {
              if (null == t || n || r) {
                var e;
                return null != (e = p.AT[null != a ? a : s.hMm.Model]) ? e : p.n8;
              }
              return Math.ceil(
                t.reduce((e, a) => {
                  let { basePriceMoney: t } = a;
                  if (!t) return e;
                  let { price: n } = ((e) => {
                    var a, t, n, l;
                    if (
                      (null == (a = e.quantity) ? void 0 : a.significand) === void 0 ||
                      (null == (t = e.quantity) ? void 0 : t.exponent) === void 0 ||
                      void 0 === e.quantity ||
                      !e.currencyCode
                    )
                      throw Error("Invalid money: ".concat(JSON.stringify(e)));
                    return {
                      currencyCode: e.currencyCode,
                      price:
                        ((n = e.quantity.significand),
                        (l = e.quantity.exponent),
                        Number((n * 10 ** l).toFixed(2)))
                    };
                  })(t);
                  return n > e ? n : e;
                }, i)
              );
            }, [t, a, r, n, i]),
            h = (0, l.useCallback)(
              (e, a) => {
                let t = Number(e.replace(m, ""));
                return Number.isNaN(t) || t < 0 ? (a ? i : o) : t;
              },
              [o, i]
            );
          return { absoluteMaxPrice: o, absoluteMinPrice: i, priceValidator: h };
        },
        g = (e) => {
          let {
              allowFree: a = !0,
              onRangeUpdated: t,
              overrideMinValue: l,
              overrideMaxValue: s
            } = e,
            { absoluteMinPrice: d, absoluteMaxPrice: c, priceValidator: u } = h({ allowFree: a }),
            { searchState: p } = (0, r.sI)(),
            { minPrice: m, maxPrice: g } = p;
          return (0, n.jsx)(o.A, {
            allowSameMinMax: !0,
            absoluteMax: c,
            absoluteMin: d,
            maxPlaceholder: i(c),
            maxValueLabelTranslationKey: void 0,
            minPlaceholder: i(d),
            minValueLabelTranslationKey: a ? "Label.Free" : void 0,
            queryStateMaxValue: void 0 !== s ? s : g,
            queryStateMinValue: void 0 !== l ? l : m,
            onRangeUpdated: t,
            validator: u,
            valueConversion: i
          });
        };
    },
    49645: (e, a, t) => {
      t.d(a, { S: () => r, VQ: () => l });
      let n = new Set(["childSwimlanes", "chipCarousels", "chipGrid"]);
      function l(e) {
        var a, t;
        return (
          null != e &&
          (!!("string" == typeof e.layout && n.has(e.layout)) ||
            (null != (t = null == (a = e.swimlanes) ? void 0 : a.length) ? t : 0) > 0 ||
            null != e.defaultGrid)
        );
      }
      function r(e, a) {
        if (!e || !a) return;
        let t = [e];
        for (; t.length > 0;) {
          let e = t.pop();
          if (e.categoryPath === a) return e;
          e.children && t.push(...e.children);
        }
      }
    },
    58884: (e, a, t) => {
      t.d(a, { A: () => o });
      var n = t(37876);
      t(14232);
      var l = t(16999),
        r = t(13979),
        i = t(89742);
      let o = (e) => {
        let { errorCode: a, ...t } = e;
        return (
          (0, r.A)({ enabled: a === l.vi.NOT_FOUND, reason: "notFound" }),
          (0, n.jsx)(i.A, { errorCode: a, ...t })
        );
      };
    },
    72312: (e, a, t) => {
      t.d(a, { A: () => l });
      var n = t(34286);
      let l = (e) =>
        !(0, n.A)(e) && (null == e ? void 0 : e.subcategory) !== void 0 && null !== e.subcategory;
    },
    73009: (e, a, t) => {
      t.d(a, { A: () => i });
      var n = t(20823),
        l = t(46180),
        r = t(36042);
      let i = (0, l.A)()((e, a) => {
        let { isWebViewAvailable: t } = a;
        return {
          container: {
            alignItems: "flex-start",
            height: "100%",
            justifyContent: t ? "flex-end" : "center",
            marginBottom: r.SC
          },
          filtersDialog: {
            borderRadius: 8 * !t,
            height: t ? "auto" : "85vh",
            marginRight: t ? 6 : 32,
            position: "absolute",
            [e.breakpoints.up(n.Yr)]: { right: 10 }
          },
          filtersDrawerContainer: {
            backgroundColor: t ? e.palette.surface[0] : e.palette.surface[300],
            overflow: "auto",
            paddingTop: 24,
            [e.breakpoints.up(n.Yr)]: { paddingBottom: 24, width: "clamp(300px, 30vw, 500px)" },
            [e.breakpoints.down(n.Yr)]: {
              paddingBottom: t ? 12 : 24,
              paddingTop: t ? 4 : 24,
              width: "100%"
            }
          }
        };
      });
    },
    76392: (e, a, t) => {
      t.d(a, { A: () => c });
      var n = t(14232),
        l = t(67434),
        r = t(731),
        i = t(50479),
        o = t(3088),
        s = t(30580);
      let d = [
        {
          dropdownSelectedTranslationKey: "Label.DropdownSelectedRelevance",
          key: "Relevance",
          optionTranslationKey: "Label.Relevance",
          sortCategory: l.Tx5.Relevance,
          sortDirection: l.UEL.Descending
        },
        {
          dropdownSelectedTranslationKey: "Label.DropdownSelectedMostUsed",
          key: "MostUsed",
          optionTranslationKey: "Label.MostUsed",
          sortCategory: l.Tx5.Top,
          sortDirection: l.UEL.Descending
        },
        {
          dropdownSelectedTranslationKey: "Label.DropdownSelectedTrending",
          key: "Trending",
          optionTranslationKey: "Label.Trending",
          sortCategory: l.Tx5.Trending,
          sortDirection: l.UEL.Descending
        },
        {
          dropdownSelectedTranslationKey: "Label.DropdownSelectedNew",
          key: "NewlyUploaded",
          optionTranslationKey: "Label.New",
          sortCategory: l.Tx5.CreateTime,
          sortDirection: l.UEL.Descending
        },
        {
          dropdownSelectedTranslationKey: "Label.DropdownSelectedShortestToLongest",
          key: "ShortToLong",
          optionTranslationKey: "Label.ShortToLong",
          sortCategory: l.Tx5.AudioDuration,
          sortDirection: l.UEL.Ascending
        },
        {
          dropdownSelectedTranslationKey: "Label.DropdownSelectedLongestToShortest",
          key: "LongToShort",
          optionTranslationKey: "Label.LongToShort",
          sortCategory: l.Tx5.AudioDuration,
          sortDirection: l.UEL.Descending
        }
      ];
      function c(e) {
        var a, t;
        let { searchState: c, setSearchState: u } = (0, r.sI)(),
          { sendEvent: p } = (0, o.MP)(),
          { sortCategory: m, sortDirection: h } = c,
          g = (0, n.useMemo)(() => {
            var e, a;
            return null !=
              (a =
                null == (e = d.find((e) => e.sortCategory === m && e.sortDirection === h))
                  ? void 0
                  : e.key)
              ? a
              : d[0].key;
          }, [m, h]),
          y =
            null !=
            (t =
              null ==
              (a = d.find(
                (e) => e.sortCategory === i.F.sortCategory && e.sortDirection === i.F.sortDirection
              ))
                ? void 0
                : a.key)
              ? t
              : d[0].key,
          b = g === y,
          x = (0, n.useCallback)(
            (a) => {
              let t = d.find((e) => e.key === g),
                n = d.find((e) => e.key === a);
              n &&
                (u({ sortCategory: n.sortCategory, sortDirection: n.sortDirection }),
                "sidebar" === e
                  ? p(s.Ur.SidebarSortChanged, {
                      assetType: l.hMm.Audio,
                      newValue: n.sortCategory,
                      oldValue: null == t ? void 0 : t.sortCategory,
                      sortType: "sortCategory"
                    })
                  : "dropdown" === e &&
                    p(s.Ur.FilterDropdownChanged, {
                      assetTypeId: l.hMm.Audio,
                      filterName: "Sort",
                      newValue: "".concat(n.sortCategory, ":").concat(n.sortDirection),
                      oldValue: ""
                        .concat(null == t ? void 0 : t.sortCategory, ":")
                        .concat(null == t ? void 0 : t.sortDirection)
                    }));
            },
            [g, u, e, p]
          );
        return { audioSortOptions: d, currentKey: g, defaultKey: y, isActive: !b, setSortByKey: x };
      }
    },
    78602: (e, a, t) => {
      t.d(a, { A: () => r });
      var n = t(46180),
        l = t(20823);
      let r = (0, n.A)()((e, a) => {
        let { isWebViewAvailable: t } = a;
        return {
          carousel: {
            gap: t ? 16 : 20,
            width: "100%",
            [e.breakpoints.up(l.Yr)]: { flexWrap: "nowrap", marginBottom: 32 },
            [e.breakpoints.down(l.Yr)]: { marginBottom: t ? 12 : 24, padding: 0 }
          },
          gridContainer: { gap: t ? 8 : 12 }
        };
      });
    },
    79944: (e, a, t) => {
      t.d(a, { A: () => c });
      var n = t(37876);
      t(14232);
      var l = t(731),
        r = t(59922),
        i = t(52863),
        o = t(5269),
        s = t(83524);
      let d = (0, t(46180).A)()((e) => ({
          container: {
            backgroundColor: e.palette.background.media,
            borderRadius: 5,
            height: 180,
            marginTop: 16,
            width: "100%"
          }
        })),
        c = () => {
          let { translate: e } = (0, i.Bd)(),
            { searchState: a } = (0, l.sI)(),
            { creatorName: t } = a,
            { data: c, isSuccess: u } = (0, r.A)(t),
            p = !!t,
            { classes: m } = d();
          return (0, n.jsx)(o.A, {
            container: !0,
            alignItems: "center",
            className: m.container,
            "data-testid": "assetTileGridNoResultsTestId",
            justifyContent: "center",
            children: (0, n.jsx)(s.A, {
              align: "center",
              color: "secondary",
              children: e(p && u && !c.creator ? "Message.UserNotFound" : "Message.NoResultsFound")
            })
          });
        };
    },
    80453: (e, a, t) => {
      t.d(a, { A: () => K });
      var n = t(37876),
        l = t(14232),
        r = t(5269),
        i = t(88798),
        o = t(52863),
        s = t(67434),
        d = t(37278),
        c = t(89422),
        u = t(26521),
        p = t(84660),
        m = t(76581),
        h = t(84614),
        g = t(50053),
        y = t(29454),
        b = t(14469),
        x = t(13979),
        v = t(76386),
        f = t(731),
        C = t(93852),
        A = t(5043),
        w = t(89099),
        T = t(80087),
        j = t(75356),
        N = t(45041),
        k = t(46180),
        S = t(20823),
        I = t(19334);
      let M = (0, k.A)()((e) => ({
        fontGridItem: {
          flexBasis: "100%",
          [e.breakpoints.up(S.Yr)]: { flexBasis: "calc(50% - 8px)" }
        },
        gridContainer: { width: "100%" },
        headerContainer: { marginBottom: e.spacing(2) },
        loadingContainer: {
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          minHeight: I.Tr,
          [e.breakpoints.down(S.Yr)]: { minHeight: I.WU }
        }
      }));
      var D = t(79944),
        L = t(85029),
        P = t(46271),
        R = t(39298),
        F = t(40714),
        B = t(54165);
      let K = (e) => {
        let { hideHeader: a, source: t } = e,
          { categoryPath: k, swimlaneName: S } = null != t ? t : {},
          { translate: I } = (0, o.Bd)(),
          { hasActiveSearchParams: K } = (0, f.sI)(),
          V = (0, w.useRouter)(),
          { categoryPath: U, isTaxonomyRoute: z, isTwoDCategory: E, categoryType: O } = (0, c.A)(),
          {
            data: W,
            failureCount: Y,
            fetchNextPage: G,
            fetchStatus: q,
            hasNextPage: H,
            isError: _,
            isFetchingNextPage: X,
            isSuccess: $
          } = (0, C.N)(S, { categoryPath: k }),
          { getDisplayNameForSlug: Q } = (0, m.A)(),
          J = null != O ? O : s.hMm.Model,
          Z = J === s.hMm.Audio,
          ee = J === s.hMm.FontFamily,
          ea = (0, P.A)(),
          { isWebViewAvailable: et } = (0, T.U1)(),
          en = et ? 400 : Z ? 2e3 : 4e3,
          { classes: el } = (0, N.A)({ isAudio: Z, isFont: ee, tileVariant: ea }),
          { classes: er } = M(),
          [ei, eo] = (0, l.useState)(() => {
            var e;
            return null != (e = document.getElementById(u.oh)) ? e : void 0;
          });
        (0, l.useLayoutEffect)(() => {
          var e;
          eo(null != (e = document.getElementById(u.oh)) ? e : void 0);
        }, []);
        let es = (0, l.useMemo)(() => {
            if (E || S === y.n.Essentials) {
              if (J === s.hMm.Model) return I("Heading.BrowseStore");
              let e = I((0, p.Ay)(J, !0));
              return I("Heading.BrowseAsset", { assetType: e });
            }
            if (z) {
              let e = Q(null != U ? U : "");
              return I("Heading.BrowseAllAssets", { categoryName: null != e ? e : "" });
            }
            return "";
          }, [J, U, Q, z, E, S, I]),
          ed = (0, l.useMemo)(() => {
            var e, a;
            return null !=
              (a =
                null == W || null == (e = W.pages)
                  ? void 0
                  : e.flatMap((e) => {
                      var a;
                      return null != (a = e.creatorStoreAssets) ? a : [];
                    }))
              ? a
              : [];
          }, [null == W ? void 0 : W.pages]);
        ((0, x.A)({ enabled: $ && 0 === ed.length, metadata: S, reason: "emptyAssetTileGrid" }),
          (0, x.A)({
            confirmShouldFire: (0, h.p5)(S),
            delayMs: v.Ze,
            enabled: !$,
            metadata: S,
            queryDiagnostics: [{ failureCount: Y, fetchStatus: q, source: "browse" }],
            reason: "stalledLoad"
          }));
        let ec = null == W ? void 0 : W.pages,
          eu = (0, l.useRef)(void 0),
          ep = (0, l.useCallback)(() => {
            H && eu.current !== ec && ((eu.current = ec), G());
          }, [G, H, ec]),
          em = (0, l.useRef)(X);
        (0, l.useEffect)(() => {
          em.current = X;
        }, [X]);
        let eh = (0, l.useRef)(ed.length);
        (0, l.useEffect)(() => {
          eh.current = ed.length;
        }, [ed.length]);
        let eg = (0, l.useCallback)(
            (e) => {
              H && !em.current && e.endIndex >= eh.current - A.z9 && ep();
            },
            [H, ep]
          ),
          ey = (0, l.useCallback)(
            (e, a) => {
              var t;
              return (0, n.jsx)(L.A, {
                assetId: (null == (t = a.asset) ? void 0 : t.id) || 0,
                fillsColumn: !0,
                pagePosition: e,
                swimlaneName: S
              });
            },
            [S]
          ),
          eb = (0, l.useCallback)(
            () =>
              X
                ? (0, n.jsx)(r.A, {
                    container: !0,
                    className: er.loadingContainer,
                    children: (0, n.jsx)(g.A, {})
                  })
                : null,
            [X, er.loadingContainer]
          ),
          ex = (0, l.useCallback)((e) => {
            let { index: a } = e;
            return (0, n.jsx)(F.A, { fillsColumn: !0, index: a });
          }, []),
          ev =
            a || K || !es
              ? null
              : (0, n.jsxs)(l.Fragment, {
                  children: [
                    (0, n.jsxs)(r.A, {
                      container: !0,
                      direction: "column",
                      className: er.headerContainer,
                      children: [(0, n.jsx)(b.A, { displayName: es }), (0, n.jsx)(d.A, {})]
                    }),
                    Z && (0, n.jsx)(B.A, {})
                  ]
                });
        if (_ && !W) return (0, n.jsxs)(r.A, { children: [ev, (0, n.jsx)(D.A, {})] });
        if (!$)
          return (0, n.jsxs)(r.A, {
            className: er.gridContainer,
            children: [ev, (0, n.jsx)(R.A, {})]
          });
        if (0 === ed.length) return (0, n.jsxs)(r.A, { children: [ev, (0, n.jsx)(D.A, {})] });
        let ef = Z ? i.aY : i.sN;
        return (0, n.jsx)(
          j.Ay,
          {
            children: (0, n.jsxs)(r.A, {
              "data-testid": "".concat(u.og, "infiniteAssetTileGrid"),
              className: er.gridContainer,
              children: [
                ev,
                (0, n.jsx)(ef, {
                  customScrollParent: ei,
                  useWindowScroll: void 0 === ei,
                  data: ed,
                  endReached: ep,
                  increaseViewportBy: en,
                  rangeChanged: eg,
                  itemContent: ey,
                  components: { Footer: eb, ...(Z ? {} : { ScrollSeekPlaceholder: ex }) },
                  ...(Z
                    ? {}
                    : {
                        itemClassName: ee ? er.fontGridItem : void 0,
                        listClassName: el.gridList,
                        scrollSeekConfiguration: {
                          enter: (e) => em.current && Math.abs(e) > 2500,
                          exit: (e) => !em.current || 100 > Math.abs(e)
                        }
                      })
                })
              ]
            })
          },
          V.asPath
        );
      };
    },
    81312: (e, a, t) => {
      t.d(a, { A: () => r });
      var n = t(84614),
        l = t(49645);
      let r = function (e) {
        let { data: a } = (0, n.bY)();
        return (0, l.S)(a, e);
      };
    },
    91132: (e, a, t) => {
      t.d(a, { A: () => o });
      var n = t(89422),
        l = t(731),
        r = t(59922),
        i = t(93852);
      function o() {
        var e, a;
        let { isTaxonomyRoute: t } = (0, n.A)(),
          { searchState: o } = (0, l.sI)(),
          s = (0, r.A)(o.creatorName),
          d = (0, i.F)(void 0, { enabled: !t }),
          c = (0, i.N)(void 0, { enabled: t }),
          u = t
            ? {
                data: null == (a = c.data) || null == (e = a.pages) ? void 0 : e[0],
                isFetching: c.isFetching,
                isSuccess: c.isSuccess
              }
            : { data: d.data, isFetching: d.isFetching, isSuccess: d.isSuccess };
        return {
          data: u.data,
          isFetching: s.isFetching || u.isFetching,
          isSuccess: s.isSuccess && u.isSuccess
        };
      }
    },
    91250: (e, a, t) => {
      t.d(a, { A: () => eu });
      var n = t(37876),
        l = t(14232),
        r = t(5269),
        i = t(61684),
        o = t(47790),
        s = t(54543),
        d = t(20823),
        c = t(80087),
        u = t(95751),
        p = t(73009),
        m = t(63628);
      let h = l.forwardRef((e, a) => {
        let { children: t, ...l } = e;
        return (0, n.jsx)(m.S, { direction: "left", ref: a, ...l, children: t });
      });
      h.displayName = "DrawerDialogTransition";
      let g = l.forwardRef((e, a) => {
        let { children: t, ...l } = e;
        return (0, n.jsx)(m.S, { direction: "up", ref: a, ...l, children: t });
      });
      g.displayName = "CompactDrawerDialogTransition";
      var y = t(52863),
        b = t(83524),
        x = t(71684),
        v = t(99878),
        f = t(67434),
        C = t(89422),
        A = t(26521),
        w = t(91132),
        T = t(46180);
      let j = (0, T.A)()((e, a) => {
        let { isWebViewAvailable: t } = a;
        return {
          container: {
            maxWidth: t ? "300px" : "100%",
            padding: t ? "16px 0 16px 16px" : "0 32px",
            width: "100%"
          },
          top: { alignItems: "center", display: "flex", justifyContent: "space-between" }
        };
      });
      var N = t(731),
        k = t(19800),
        S = t(43644),
        I = t(55011),
        M = t(10088),
        D = t(20647),
        L = t(37837),
        P = t(14178),
        R = t(99721),
        F = t(94001),
        B = t(80062);
      let K = (0, T.A)()((e, a) => {
          let { isWebViewAvailable: t } = a,
            n = { marginTop: 10 * !t, paddingTop: t ? "12px !important" : 16 };
          return {
            checkboxLabelContent: { alignItems: "center", display: "flex", lineHeight: 20 },
            descriptionContainer: { flexFlow: "row nowrap", gap: 6, marginBottom: 12 },
            indentedLine: { marginRight: 0, paddingLeft: 10 },
            label: {
              height: 48,
              ...(t && {
                ".MuiButtonBase-root": {
                  "&.Mui-checked": { color: e.palette.actionV2.primaryBrand.fill },
                  backgroundColor: "transparent",
                  color: e.palette.divider,
                  paddingLeft: 0,
                  svg: { height: 20, width: 20 }
                },
                ".MuiTypography-root": { color: e.palette.content.standard, fontSize: 12 },
                height: 28
              })
            },
            priceFilterSectionMargin: { ...n, paddingBottom: 12 },
            secondaryDescription: { color: e.palette.content.muted, fontSize: t ? 12 : 13 },
            sectionLabel: { color: e.palette.content.standard },
            sectionMargin: n,
            verifiedCreator: { alignItems: "flex-start", margin: "0", width: "100%" },
            verifiedCreatorCheckbox: {
              ...(t && {
                color: e.palette.content.disabled,
                minHeight: 20,
                padding: "0 4px 0 0",
                width: "auto"
              })
            },
            verifiedTitle: {
              alignItems: "center",
              display: "flex",
              fontSize: 16,
              marginBottom: 0,
              minHeight: 42,
              ...(t && {
                color: e.palette.content.standard,
                fontSize: 12,
                marginBottom: 2,
                minHeight: 20
              })
            }
          };
        }),
        V = (0, T.A)()((e, a) => {
          let { isWebViewAvailable: t } = a;
          return {
            searchByCreatorContainer: { marginTop: 8 * !t },
            verifiedIcon: t
              ? { color: e.palette.alertWarning.content, fontSize: 16 }
              : { fontSize: 20, marginLeft: 6 },
            verifiedIconContainer: {
              alignItems: "center",
              display: "flex",
              height: 18.2,
              justifyContent: "center"
            },
            webViewInputClass: {
              fieldset: {
                border: "none",
                boxShadow: "0px 0px 0px 1px ".concat(e.palette.components.divider)
              },
              fontSize: 12,
              height: 30,
              textOverflow: "clip"
            },
            webViewSearchButton: { maxHeight: 26, minHeight: 0, paddingBottom: 5, paddingTop: 5 },
            webViewTextField: {
              "& .MuiAutocomplete-input": { textOverflow: "clip" },
              "& .MuiOutlinedInput-notchedOutline": { borderRadius: 4 },
              backgroundColor: e.palette.surface[0],
              borderRadius: 4,
              flexGrow: 1
            }
          };
        }),
        U = (e) => {
          let { isDisabled: a, onCloseSidebar: t } = e,
            { translate: i } = (0, y.Bd)(),
            { isWebViewAvailable: s } = (0, c.U1)(),
            { searchState: u, setSearchState: p } = (0, N.sI)(),
            { classes: m } = K({ isWebViewAvailable: s }),
            { classes: h } = V({ isWebViewAvailable: s }),
            { creatorName: g } = u,
            [x, v] = (0, l.useState)(null != g ? g : ""),
            f = (0, l.useRef)(null),
            C = (0, o.A)((e) => e.breakpoints.down(d.Yr)),
            w = s ? "primary" : "secondary",
            T = s ? "small" : "medium";
          (0, l.useEffect)(() => {
            v(null != g ? g : "");
          }, [g]);
          let j = (0, l.useCallback)(() => {
              (p({
                creatorName: ((null == x ? void 0 : x.trim()) === "" ? "" : x) || null,
                creatorType: null
              }),
                C && t && t());
            }, [x, p, C, t]),
            U = (0, l.useCallback)(
              (e) => {
                p({ includeOnlyVerifiedCreators: !e.target.checked });
              },
              [p]
            ),
            z = (0, l.useCallback)(
              (e) => {
                let a = e.target.value;
                (v(a), p({ creatorName: a || null, creatorType: null }), C && t && t());
              },
              [v, p, C, t]
            ),
            E = (0, l.useCallback)(
              (e) => {
                v(e.target.value);
              },
              [v]
            ),
            O = (0, l.useCallback)(
              (e) => {
                "Enter" === e.key &&
                  (e.preventDefault(),
                  p({
                    creatorName: ((null == x ? void 0 : x.trim()) === "" ? "" : x) || null,
                    creatorType: null
                  }),
                  C && t && t());
              },
              [x, C, t, p]
            ),
            W = (0, n.jsx)(k.T, {
              arrow: !0,
              placement: "top",
              title: i("Label.IncludeUnverifiedCreatorsTooltip"),
              children: (0, n.jsx)(S.N5l, { className: h.verifiedIcon })
            }),
            Y = !1 === u.includeOnlyVerifiedCreators;
          return (0, n.jsx)(r.A, {
            item: !0,
            className: m.sectionMargin,
            children: (0, n.jsxs)(I.F, {
              fullWidth: !0,
              children: [
                (0, n.jsx)(M.F, {
                  children: (0, n.jsx)(b.A, {
                    className: m.sectionLabel,
                    variant: "h6",
                    children: i("Label.Creators")
                  })
                }),
                (0, n.jsx)(D.F, {
                  className: m.verifiedCreator,
                  control: (0, n.jsx)(L.A, {
                    "data-testid": "isVerifiedCheckboxCheckedTestId",
                    checked: Y,
                    className: m.verifiedCreatorCheckbox,
                    color: "secondary",
                    disableRipple: s,
                    size: s ? "small" : "medium",
                    disabled: a,
                    onChange: U
                  }),
                  label: (0, n.jsxs)(r.A, {
                    container: !0,
                    className: m.checkboxLabelContent,
                    children: [
                      (0, n.jsx)(b.A, {
                        className: m.verifiedTitle,
                        variant: s ? "body2" : "smallLabel2",
                        children: i("Label.IncludeUnverifiedCreators")
                      }),
                      !s && W,
                      (0, n.jsxs)(r.A, {
                        container: !0,
                        className: m.descriptionContainer,
                        children: [
                          s &&
                            (0, n.jsx)(r.A, {
                              className: h.verifiedIconContainer,
                              children: (0, n.jsx)(k.T, {
                                arrow: !0,
                                placement: "top",
                                title: i("Label.IncludeUnverifiedCreatorsTooltip"),
                                children: (0, n.jsx)(S.N5l, { className: h.verifiedIcon })
                              })
                            }),
                          (0, n.jsx)(b.A, {
                            color: "secondary",
                            className: m.secondaryDescription,
                            children: i("Label.IncludeUnverifiedCreatorsDescription")
                          })
                        ]
                      })
                    ]
                  })
                }),
                (0, n.jsxs)(P.R, {
                  className: m.indentedLine,
                  onChange: z,
                  value: x,
                  children: [
                    (0, n.jsx)(D.F, {
                      className: m.label,
                      color: "secondary",
                      control: (0, n.jsx)(R.R, { "aria-label": "", color: w, size: T }),
                      "data-testid": "creatorAllTestId",
                      disabled: a,
                      label: i("Label.AllCreators"),
                      value: ""
                    }),
                    (0, n.jsx)(D.F, {
                      className: m.label,
                      control: (0, n.jsx)(R.R, { "aria-label": "Roblox", color: w, size: T }),
                      "data-testid": "creatorRobloxTestId",
                      disabled: a,
                      label: i("Label.Roblox"),
                      value: A.s9
                    })
                  ]
                }),
                (0, n.jsxs)(r.A, {
                  container: !0,
                  alignItems: s ? "flex-end" : "center",
                  flexDirection: s ? "column" : "row",
                  wrap: "nowrap",
                  gap: 1,
                  className: h.searchByCreatorContainer,
                  children: [
                    s
                      ? (0, n.jsx)(F.A, {
                          className: h.webViewTextField,
                          "data-testid": "creatorSearchTestId",
                          disabled: a,
                          fullWidth: !0,
                          id: "creatorSearchId",
                          inputRef: f,
                          label: "",
                          placeholder: i("Label.SearchCreator"),
                          onChange: E,
                          onKeyDown: O,
                          value: x,
                          size: "small",
                          variant: "outlined",
                          InputProps: { className: h.webViewInputClass }
                        })
                      : (0, n.jsx)(F.A, {
                          "data-testid": "creatorSearchTestId",
                          disabled: a,
                          fullWidth: !0,
                          id: "creatorSearchId",
                          inputRef: f,
                          label: i("Label.SearchCreator"),
                          onChange: E,
                          onKeyDown: O,
                          value: x,
                          variant: "outlined"
                        }),
                    (0, n.jsx)(B.A, {
                      color: s ? "primaryBrand" : "primary",
                      className: s ? h.webViewSearchButton : void 0,
                      "data-testid": "submitButtonTestId",
                      disabled: a,
                      onClick: j,
                      size: s ? "medium" : "large",
                      variant: "contained",
                      children: i("Action.Search")
                    })
                  ]
                })
              ]
            })
          });
        };
      var z = t(89099),
        E = t(47061);
      let O = (e) => {
        let { isDisabled: a } = e,
          { translate: t } = (0, y.Bd)(),
          { isWebViewAvailable: i } = (0, c.U1)(),
          { setSearchState: o } = (0, N.sI)(),
          { classes: s } = K({ isWebViewAvailable: i }),
          d = "priced" === (0, z.useRouter)().query.swimlaneType,
          u = (0, l.useCallback)(
            (e, t) => {
              a || o({ maxPrice: null != t ? t : null, minPrice: null != e ? e : null });
            },
            [o, a]
          );
        return (0, n.jsxs)(r.A, {
          item: !0,
          className: s.priceFilterSectionMargin,
          children: [
            (0, n.jsx)(I.F, {
              fullWidth: !0,
              children: (0, n.jsx)(M.F, {
                children: (0, n.jsx)(b.A, {
                  className: s.sectionLabel,
                  variant: "h6",
                  children: t("Label.Price")
                })
              })
            }),
            (0, n.jsx)(E.A, { allowFree: !d, onRangeUpdated: u })
          ]
        });
      };
      var W = t(3088),
        Y = t(30580);
      let G = (0, T.A)()((e, a) => {
          let { isWebViewAvailable: t } = a;
          return {
            resetButtonContainer: {
              display: "flex",
              justifyContent: "flex-start",
              marginTop: t ? 8 : 16
            }
          };
        }),
        q = (e) => {
          let { isDisabled: a } = e,
            { translate: t } = (0, y.Bd)(),
            { isWebViewAvailable: l } = (0, c.U1)(),
            { clearFilters: i } = (0, N.sI)(),
            { sendEvent: o } = (0, W.MP)(),
            { classes: s } = G({ isWebViewAvailable: l });
          return (0, n.jsx)(r.A, {
            item: !0,
            className: s.resetButtonContainer,
            children: (0, n.jsx)(B.A, {
              color: l ? "primaryBrand" : "primary",
              "data-testid": "resetFiltersButtonTestId",
              disabled: a,
              onClick: () => {
                i((e) => o(Y.Ur.SidebarFiltersReset, e));
              },
              size: "medium",
              variant: "contained",
              children: t("Action.ResetFilters")
            })
          });
        };
      var H = t(76392);
      let _ = (e) => {
        let { isDisabled: a } = e,
          { translate: t } = (0, y.Bd)(),
          { isWebViewAvailable: l } = (0, c.U1)(),
          { audioSortOptions: i, currentKey: o, setSortByKey: s } = (0, H.A)("sidebar"),
          { classes: d } = K({ isWebViewAvailable: l }),
          u = l ? "primary" : "secondary",
          p = l ? "small" : "medium";
        return (0, n.jsx)(r.A, {
          item: !0,
          className: d.sectionMargin,
          children: (0, n.jsxs)(I.F, {
            fullWidth: !0,
            children: [
              (0, n.jsx)(M.F, {
                children: (0, n.jsx)(b.A, {
                  className: d.sectionLabel,
                  variant: "h6",
                  children: l ? t("Label.SortBy") : t("Label.Sorts")
                })
              }),
              (0, n.jsx)(P.R, {
                className: d.indentedLine,
                onChange: (e) => s(e.target.value),
                value: o,
                "data-testid": "audioSortTestId",
                children: i.map((e) =>
                  (0, n.jsx)(
                    D.F,
                    {
                      className: d.label,
                      control: (0, n.jsx)(R.R, { "aria-label": e.key, color: u, size: p }),
                      "data-testid": "audio".concat(e.key, "TestId"),
                      disabled: a,
                      label: t(e.optionTranslationKey),
                      value: e.key
                    },
                    e.key
                  )
                )
              })
            ]
          })
        });
      };
      var X = t(25208);
      let $ = (e) => {
        let { isDisabled: a } = e,
          { translate: t } = (0, y.Bd)(),
          { isWebViewAvailable: i } = (0, c.U1)(),
          { selectedValue: o, setAudioType: s } = (0, X.A)(),
          { classes: d } = K({ isWebViewAvailable: i }),
          u = i ? "primary" : "secondary",
          p = i ? "small" : "medium",
          m = (0, l.useCallback)(
            (e) => {
              s(e.target.value);
            },
            [s]
          );
        return (0, n.jsx)(r.A, {
          item: !0,
          className: d.sectionMargin,
          children: (0, n.jsxs)(I.F, {
            fullWidth: !0,
            children: [
              (0, n.jsx)(M.F, {
                children: (0, n.jsx)(b.A, {
                  className: d.sectionLabel,
                  variant: "h6",
                  children: t("Label.AudioType")
                })
              }),
              (0, n.jsx)(P.R, {
                className: d.indentedLine,
                onChange: m,
                value: o,
                children: X.d.map((e) =>
                  (0, n.jsx)(
                    D.F,
                    {
                      className: d.label,
                      control: (0, n.jsx)(R.R, { "aria-label": e.key, color: u, size: p }),
                      "data-testid": e.dataTestId,
                      disabled: a,
                      label: t(e.translationKey),
                      value: e.value
                    },
                    e.key
                  )
                )
              })
            ]
          })
        });
      };
      var Q = t(95694),
        J = t(48280),
        Z = t(50479);
      let ee = /[0-9]:[0-9]{2}/,
        ea = /\+$/,
        et = (e) => {
          let { onRangeUpdated: a } = e,
            {
              absoluteMaxDuration: t,
              absoluteMinDuration: r,
              durationValidator: i,
              numToTimestamp: o
            } = (() => {
              let e = (0, l.useCallback)((e) => (0, J.A)(e) + (e === Z.IA ? "+" : ""), []),
                a = (0, l.useCallback)((e, a) => {
                  let t = e.replace(ea, ""),
                    n = Number(t);
                  if (!Number.isNaN(n) && n >= 0) return n;
                  if (ee.test(t)) {
                    let [e, a] = t.split(":").map(Number);
                    if (!Number.isNaN(e) && !Number.isNaN(a)) return 60 * e + a;
                  }
                  return a ? Z.u : Z.IA;
                }, []);
              return {
                absoluteMaxDuration: Z.IA,
                absoluteMinDuration: Z.u,
                durationValidator: a,
                numToTimestamp: e
              };
            })(),
            { searchState: s } = (0, N.sI)(),
            { minDuration: d, maxDuration: c } = s;
          return (0, n.jsx)(Q.A, {
            allowSameMinMax: !0,
            absoluteMax: t,
            absoluteMin: r,
            maxPlaceholder: o(t),
            minPlaceholder: o(r),
            queryStateMaxValue: c,
            queryStateMinValue: d,
            onRangeUpdated: a,
            validator: i,
            valueConversion: o
          });
        },
        en = (e) => {
          let { isDisabled: a } = e,
            { translate: t } = (0, y.Bd)(),
            { isWebViewAvailable: i } = (0, c.U1)(),
            { setSearchState: o } = (0, N.sI)(),
            { classes: s } = K({ isWebViewAvailable: i }),
            d = (0, l.useCallback)(
              (e, t) => {
                a || o({ maxDuration: null != t ? t : null, minDuration: null != e ? e : null });
              },
              [o, a]
            );
          return (0, n.jsxs)(r.A, {
            item: !0,
            className: s.sectionMargin,
            children: [
              (0, n.jsx)(I.F, {
                fullWidth: !0,
                children: (0, n.jsx)(M.F, {
                  children: (0, n.jsx)(b.A, {
                    className: s.sectionLabel,
                    variant: "h6",
                    children: t("Label.Duration")
                  })
                })
              }),
              (0, n.jsx)(et, { onRangeUpdated: d })
            ]
          });
        },
        el = [
          {
            instanceType: f.NG0.Script,
            name: "scripts",
            testId: "modelContainsScriptsTestId",
            translationKey: "Label.Scripts"
          },
          {
            instanceType: f.NG0.MeshPart,
            name: "meshParts",
            testId: "modelContainsMeshPartsTestId",
            translationKey: "Label.MeshParts"
          },
          {
            instanceType: f.NG0.Decal,
            name: "decals",
            testId: "modelContainsDecalsTestId",
            translationKey: "Label.Decals"
          },
          {
            instanceType: f.NG0.Tool,
            name: "tools",
            testId: "modelContainsToolsTestId",
            translationKey: "Label.Tools"
          },
          {
            instanceType: f.NG0.Animation,
            name: "animations",
            testId: "modelContainsAnimationsTestId",
            translationKey: "Label.Animations"
          },
          {
            instanceType: f.NG0.Audio,
            name: "audio",
            testId: "modelContainsAudioTestId",
            translationKey: "Label.Audio"
          }
        ],
        er = (e) => {
          let { isDisabled: a } = e,
            { translate: t } = (0, y.Bd)(),
            { isWebViewAvailable: i } = (0, c.U1)(),
            { searchState: o, setSearchState: s } = (0, N.sI)(),
            { sendEvent: d } = (0, W.MP)(),
            { classes: u } = K({ isWebViewAvailable: i }),
            { includedInstanceTypes: p } = o,
            m = i ? "primary" : "secondary",
            h = i ? "small" : "medium",
            g = (0, l.useCallback)((e) => p.includes(e), [p]),
            x = (0, l.useCallback)(
              (e, a) => (t) => {
                let { checked: n } = t.target,
                  l = p.includes(e);
                (s({ includedInstanceTypes: n ? [...p, e] : p.filter((a) => a !== e) }),
                  d(Y.Ur.SidebarFilterChanged, {
                    assetType: f.hMm.Model,
                    filterName: a,
                    filterType: "modelContains",
                    newValue: n.toString(),
                    oldValue: l.toString()
                  }));
              },
              [p, s, d]
            );
          return (0, n.jsx)(r.A, {
            item: !0,
            className: u.sectionMargin,
            children: (0, n.jsxs)(I.F, {
              fullWidth: !0,
              children: [
                (0, n.jsx)(M.F, {
                  children: (0, n.jsx)(b.A, {
                    className: u.sectionLabel,
                    variant: "h6",
                    children: t("Label.Contains")
                  })
                }),
                (0, n.jsx)(r.A, {
                  container: !0,
                  className: u.descriptionContainer,
                  children: (0, n.jsx)(b.A, {
                    color: "secondary",
                    className: u.secondaryDescription,
                    children: t("Label.ContainsDescription")
                  })
                }),
                (0, n.jsx)(r.A, {
                  container: !0,
                  direction: "column",
                  className: u.indentedLine,
                  children: el.map((e) =>
                    (0, n.jsx)(
                      D.F,
                      {
                        className: u.label,
                        control: (0, n.jsx)(L.A, {
                          checked: g(e.instanceType),
                          color: m,
                          size: h,
                          name: e.name,
                          onChange: x(e.instanceType, e.name),
                          disabled: a,
                          "data-testid": e.testId
                        }),
                        label: t(e.translationKey)
                      },
                      e.testId
                    )
                  )
                })
              ]
            })
          });
        };
      var ei = t(29791);
      let eo = (e) => {
          let { isDisabled: a } = e,
            { translate: t } = (0, y.Bd)(),
            { isWebViewAvailable: l } = (0, c.U1)(),
            { currentKey: i, modelSortOptions: o, setSortByKey: s } = (0, ei.A)("sidebar"),
            { classes: d } = K({ isWebViewAvailable: l }),
            u = l ? "primary" : "secondary",
            p = l ? "small" : "medium";
          return (0, n.jsx)(r.A, {
            item: !0,
            className: d.sectionMargin,
            children: (0, n.jsxs)(I.F, {
              fullWidth: !0,
              children: [
                (0, n.jsx)(M.F, {
                  children: (0, n.jsx)(b.A, {
                    className: d.sectionLabel,
                    variant: "h6",
                    children: t("Label.SortBy")
                  })
                }),
                (0, n.jsx)(P.R, {
                  className: d.indentedLine,
                  onChange: (e) => s(e.target.value),
                  value: i,
                  "data-testid": "modelSortTestId",
                  children: o.map((e) =>
                    (0, n.jsx)(
                      D.F,
                      {
                        className: d.label,
                        control: (0, n.jsx)(R.R, { "aria-label": e.key, color: u, size: p }),
                        "data-testid": "model".concat(e.key, "TestId"),
                        disabled: a,
                        label: t(e.optionTranslationKey),
                        value: e.key
                      },
                      e.key
                    )
                  )
                })
              ]
            })
          });
        },
        es = (e) => {
          let { onClose: a } = e,
            { translate: t } = (0, y.Bd)(),
            { categoryType: i } = (0, C.A)(),
            { isWebViewAvailable: o } = (0, c.U1)(),
            { isFetching: s } = (0, w.A)(),
            { classes: d } = j({ isWebViewAvailable: o }),
            u = null != i ? i : f.hMm.Model,
            p = (0, l.useMemo)(() => {
              switch (u) {
                case f.hMm.Model:
                  return (0, n.jsxs)(l.Fragment, {
                    children: [
                      (0, n.jsx)(eo, { isDisabled: s }),
                      (0, n.jsx)(U, { isDisabled: s, onCloseSidebar: a }),
                      (0, n.jsx)(O, { isDisabled: s }),
                      (0, n.jsx)(er, { isDisabled: s })
                    ]
                  });
                case f.hMm.Audio:
                  return (0, n.jsxs)(l.Fragment, {
                    children: [
                      (0, n.jsx)(U, { isDisabled: s, onCloseSidebar: a }),
                      (0, n.jsx)(en, { isDisabled: s }),
                      (0, n.jsx)($, { isDisabled: s }),
                      (0, n.jsx)(_, { isDisabled: s })
                    ]
                  });
                case f.hMm.Plugin:
                  return (0, n.jsxs)(l.Fragment, {
                    children: [
                      (0, n.jsx)(U, { isDisabled: s, onCloseSidebar: a }),
                      (0, n.jsx)(O, { isDisabled: s })
                    ]
                  });
                default:
                  return (0, n.jsx)(U, { isDisabled: s, onCloseSidebar: a });
              }
            }, [u, s, a]);
          return (0, n.jsxs)(r.A, {
            container: !0,
            className: d.container,
            "data-testid": "".concat(A.og, "sidebarTestId"),
            direction: "column",
            spacing: 2,
            children: [
              !o &&
                (0, n.jsxs)(r.A, {
                  item: !0,
                  className: d.top,
                  children: [
                    (0, n.jsx)(b.A, { variant: "h5", children: t("Heading.Filters") }),
                    (0, n.jsx)(x.A, {
                      "aria-label": "closeSidebar",
                      color: "secondary",
                      onClick: a,
                      size: "large",
                      children: (0, n.jsx)(v.C, { color: "inherit" })
                    })
                  ]
                }),
              p,
              (0, n.jsx)(q, { isDisabled: s })
            ]
          });
        },
        ed = () => {
          let { isSidebarOpened: e, setIsSidebarOpened: a } = (0, u.B)(),
            { isWebViewAvailable: t } = (0, c.U1)(),
            i = (0, o.A)((e) => e.breakpoints.down(d.Yr)),
            { classes: m } = (0, p.A)({ isWebViewAvailable: t }),
            y = (0, l.useMemo)(() => {
              if (!t) return i ? g : h;
            }, [i, t]);
          return (0, n.jsx)(s.A, {
            open: e,
            onClose: () => a(!1),
            TransitionComponent: y,
            classes: { container: m.container, paper: m.filtersDialog },
            children: (0, n.jsx)(r.A, {
              item: !0,
              className: m.filtersDrawerContainer,
              role: "presentation",
              XSmall: 12,
              children: (0, n.jsx)(es, { onClose: () => a(!1) })
            })
          });
        },
        ec = (0, T.A)()(() => ({
          container: { alignItems: "flex-start", height: "100%", width: "100%" }
        })),
        eu = (e) => {
          let { children: a } = e,
            { classes: t } = ec();
          return (0, n.jsxs)(r.A, {
            container: !0,
            className: t.container,
            children: [(0, n.jsx)(ed, {}), (0, n.jsx)(i.A, {}), a]
          });
        };
    },
    93852: (e, a, t) => {
      t.d(a, { N: () => T, F: () => w });
      var n = t(14232),
        l = t(52863),
        r = t(84614),
        i = t(3088),
        o = t(30580),
        s = t(95372),
        d = t(89422),
        c = t(731),
        u = t(5043),
        p = t(59922),
        m = t(61606),
        h = t(67434),
        g = t(72359),
        y = t(76581),
        b = t(82105),
        x = t(37112);
      function v() {
        var e, a, t, n, l, r;
        let i,
          o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hasActiveSearchParams: s, searchState: p } = (0, c.sI)(),
          {
            categoryKey: m,
            categoryPath: v,
            categoryType: f,
            isDefaultBrowsePage: C,
            isSwimlaneIndexRoute: A,
            isSwimlaneLeafRoute: w,
            isSwimlaneRoute: T,
            isTwoDCategory: j,
            swimlaneType: N
          } = (0, d.A)(),
          k = (0, g.A)(),
          {
            getAssetTypeForSlug: S,
            getLeafCategoryPath: I,
            getNodeForSlug: M,
            getSubcategoryQueryParams: D
          } = (0, y.A)(),
          L = null != (e = o.categoryPath) ? e : T ? void 0 : v,
          P = k && w;
        P && N && m && !L && (L = I(N, m));
        let R = S(L),
          F = null != (t = null != (a = R && (0, b.d)(R)) ? a : f && (0, b.d)(f)) ? t : h.HPC.Model;
        i = P
          ? void 0
          : T && N
            ? D(N, v)
            : null != (l = null == (n = M(L)) ? void 0 : n.queryParams)
              ? l
              : void 0;
        let B = (0, u.Bo)((0, u.CG)(F, p, null != (r = o.maxPageSize) ? r : u.T_, L), i),
          K = j && !k ? void 0 : o.swimlaneName;
        return {
          isHomeViewActive: !o.swimlaneName && !o.categoryPath && !s && ((C && (0, x.GD)(f)) || A),
          request: B,
          swimlaneName: K
        };
      }
      function f(e, a) {
        let { searchState: t } = (0, c.sI)(),
          {
            firedSearchEvents: l,
            prevSearchUuid: r,
            searchEventMetadata: s,
            searchUuid: m,
            setSearchEventMetadata: h
          } = (0, c.yq)(),
          { sendEvent: g } = (0, i.MP)(),
          { categoryPath: y, categoryType: b } = (0, d.A)(),
          { data: x, isSuccess: v } = (0, p.A)(t.creatorName);
        (0, n.useEffect)(() => {
          if (!e || !m || !v) return;
          let n = !1;
          for (let h = 0; h < e.length; h += 1) {
            let v = a + h,
              w = "".concat(m, ":").concat(v);
            if (!l.has(w)) {
              var i, d, c, p, f, C, A;
              (l.add(w),
                (n = !0),
                g(o.Ur.SearchPerformed, {
                  appliedFacets: t.facets ? t.facets.join("||") : "",
                  assetType: null != b ? b : 0,
                  categoryPath: null != y ? y : void 0,
                  filteredCreatorId:
                    null !=
                    (f =
                      null ==
                      (i =
                        null != (p = null == x ? void 0 : x.userId)
                          ? p
                          : null == x
                            ? void 0
                            : x.groupId)
                        ? void 0
                        : i.toString())
                      ? f
                      : "",
                  filteredCreatorName: null != (C = t.creatorName) ? C : "",
                  imageHash: null == (d = t.image) ? void 0 : d.hash,
                  includeOnlyVerifiedCreators: t.includeOnlyVerifiedCreators.toString(),
                  instanceTypes: t.includedInstanceTypes ? t.includedInstanceTypes.join("-") : "",
                  pageNumber: v,
                  previousSearchId: r,
                  searchId: m,
                  searchKeyword: t.keyword,
                  searchSubmissionType: null == s ? void 0 : s.searchSubmissionType,
                  searchType: t.image ? o.nX.Image : o.nX.Keyword,
                  selectedSearchAssetType: null == s ? void 0 : s.selectedSearchAssetType,
                  selectedSearchTermRanking: null == s ? void 0 : s.selectedSearchTermRanking,
                  selectedSearchType: null == s ? void 0 : s.selectedSearchType,
                  sortDirection: null != (A = t.sortDirection) ? A : void 0,
                  totalResults: null == (c = e[h]) ? void 0 : c.totalResults,
                  uiSortIntent: (0, u.VE)(t.sortCategory)
                }));
            }
          }
          n && h(null);
        }, [
          y,
          b,
          l,
          v,
          a,
          e,
          null == x ? void 0 : x.groupId,
          null == x ? void 0 : x.userId,
          r,
          null == s ? void 0 : s.searchSubmissionType,
          null == s ? void 0 : s.selectedSearchAssetType,
          null == s ? void 0 : s.selectedSearchTermRanking,
          null == s ? void 0 : s.selectedSearchType,
          t.creatorName,
          t.facets,
          t.image,
          t.includeOnlyVerifiedCreators,
          t.includedInstanceTypes,
          t.keyword,
          t.sortCategory,
          t.sortDirection,
          m,
          g,
          h
        ]);
      }
      function C(e, a) {
        let { searchState: t } = (0, c.sI)(),
          { firedSearchEvents: r, searchUuid: i } = (0, c.yq)(),
          { setMessageAndSeverity: o } = (0, s.dh)(),
          { translate: d } = (0, l.Bd)();
        (0, n.useEffect)(() => {
          if (!i || 0 !== a || !e || e === t.keyword) return;
          let n = "redacted:".concat(i);
          r.has(n) ||
            (r.add(n),
            o({ severity: "warning", translatedMessage: d("Message.RedactedSearchQuery") }));
        }, [e, r, t.keyword, i, o, a, d]);
      }
      function A(e) {
        let { firedSearchEvents: a, searchUuid: t } = (0, c.yq)(),
          { setMessageAndSeverity: r } = (0, s.dh)(),
          { translate: i } = (0, l.Bd)();
        (0, n.useEffect)(() => {
          if (!e || !t) return;
          let n = "error:".concat(t);
          a.has(n) ||
            (a.add(n), r({ severity: "error", translatedMessage: i("Error.UnexpectedError") }));
        }, [a, e, t, r, i]);
      }
      function w(e) {
        var a, t, n;
        let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { searchState: i } = (0, c.sI)(),
          {
            isHomeViewActive: o,
            request: s,
            swimlaneName: d
          } = v({ maxPageSize: (0, m.A)(), ...l, swimlaneName: e }),
          u = (0, r.hA)(s, d, i.creatorName, { enabled: (null == (n = l.enabled) || n) && !o });
        return (
          f(u.data ? [u.data] : void 0, i.pageNumber),
          C(
            null == (a = u.data) ? void 0 : a.filteredKeyword,
            null == (t = u.data) ? void 0 : t.totalResults
          ),
          A(u.isError),
          u
        );
      }
      function T(e) {
        var a, t, n;
        let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { searchState: i } = (0, c.sI)(),
          { request: o, swimlaneName: s } = v({ maxPageSize: u.z9, ...l, swimlaneName: e }),
          d = (0, r.X$)(o, s, i.creatorName, { enabled: null == (n = l.enabled) || n });
        f(null == (a = d.data) ? void 0 : a.pages, 0);
        let p = null == (t = d.data) ? void 0 : t.pages[0];
        return (
          C(null == p ? void 0 : p.filteredKeyword, null == p ? void 0 : p.totalResults),
          A(d.isError && !d.data),
          d
        );
      }
    },
    95694: (e, a, t) => {
      t.d(a, { A: () => g });
      var n = t(37876),
        l = t(5269),
        r = t(6286),
        i = t(14232),
        o = t(52863),
        s = t(80087);
      let d = (0, t(46180).A)()((e, a) => {
        let { isWebViewAvailable: t } = a;
        return {
          container: { marginTop: 4, paddingLeft: 8 },
          slider: {
            "& .MuiSlider-valueLabel": {
              backgroundColor: e.palette.actionV2.primaryBrand.fill,
              borderRadius: 4,
              color: "black"
            },
            ...(t && { color: e.palette.actionV2.primaryBrand.fill }),
            marginBottom: 12
          },
          sliderWrapper: { paddingRight: 8 },
          textField: {
            "& .MuiInputBase-input": { fontSize: t ? 12 : 14, textAlign: "center" },
            "& .MuiInputBase-root": { fontSize: t ? 12 : 14 },
            maxWidth: "70px",
            minWidth: 0,
            width: "100%"
          },
          textFieldContainer: { display: "flex", flexWrap: "nowrap" },
          webViewInputClass: { fontSize: 12, height: 32 }
        };
      });
      var c = t(94001);
      let u = (e) => {
        let {
            minInputRef: a,
            maxInputRef: t,
            minValue: r,
            maxValue: o,
            minPlaceholder: u,
            maxPlaceholder: p,
            onMinTextFieldChange: m,
            onMaxTextFieldChange: h,
            onMinTextFieldKeyDown: g,
            onMaxTextFieldKeyDown: y
          } = e,
          { isWebViewAvailable: b } = (0, s.U1)(),
          { classes: x } = d({ isWebViewAvailable: b }),
          [v, f] = (0, i.useState)(r),
          [C, A] = (0, i.useState)(o);
        return (
          (0, i.useEffect)(() => {
            f(r);
          }, [r]),
          (0, i.useEffect)(() => {
            A(o);
          }, [o]),
          (0, n.jsxs)(l.A, {
            container: !0,
            justifyContent: "space-between",
            wrap: "nowrap",
            className: x.textFieldContainer,
            spacing: 1,
            children: [
              (0, n.jsx)(c.A, {
                "aria-label": "min-slider-text-field",
                autoComplete: "off",
                id: "min-slider-text-field",
                label: "",
                type: "text",
                className: x.textField,
                inputRef: a,
                onBlur: m,
                onChange: (e) => f(e.target.value),
                onKeyDown: g,
                placeholder: u,
                size: b ? "small" : void 0,
                value: v,
                InputProps: b ? { className: x.webViewInputClass } : void 0
              }),
              (0, n.jsx)(c.A, {
                "aria-label": "max-slider-text-field",
                autoComplete: "off",
                id: "max-slider-text-field",
                label: "",
                type: "text",
                className: x.textField,
                inputRef: t,
                onBlur: h,
                onChange: (e) => A(e.target.value),
                onKeyDown: y,
                placeholder: p,
                size: b ? "small" : void 0,
                value: C,
                InputProps: b ? { className: x.webViewInputClass } : void 0
              })
            ]
          })
        );
      };
      var p = t(4917),
        m = t.n(p);
      let h = "minTextField",
        g = (e) => {
          let {
              absoluteMin: a,
              absoluteMax: t,
              allowSameMinMax: c = !1,
              maxPlaceholder: p,
              minPlaceholder: g,
              maxValueLabelTranslationKey: y,
              minValueLabelTranslationKey: b,
              queryStateMinValue: x,
              queryStateMaxValue: v,
              onRangeUpdated: f,
              valueConversion: C,
              validator: A
            } = e,
            { isWebViewAvailable: w } = (0, s.U1)(),
            { classes: T } = d({ isWebViewAvailable: w }),
            { translate: j } = (0, o.Bd)(),
            {
              range: N,
              maxInputRef: k,
              minInputRef: S,
              onSliderChange: I,
              onSliderRelease: M,
              onTextFieldChange: D,
              onTextFieldKeyDown: L
            } = ((e) => {
              let {
                  absoluteMin: a,
                  absoluteMax: t,
                  queryStateMinValue: n,
                  queryStateMaxValue: l,
                  onRangeUpdated: r,
                  validator: o,
                  allowSameMinMax: s = !1
                } = e,
                [d, c] = (0, i.useState)(!1),
                [u, p] = (0, i.useState)([a, t]),
                g = (0, i.useRef)([a, t]),
                y = (0, i.useRef)(null),
                b = (0, i.useRef)(null),
                x = (0, i.useRef)({ queryStateMaxValue: void 0, queryStateMinValue: void 0 }),
                v = (0, i.useCallback)(
                  (e) => {
                    let n = e[0] <= a ? void 0 : e[0],
                      l = e[1] >= t ? void 0 : e[1];
                    return e[0] === e[1] && e[0] === a ? [void 0, e[1]] : [n, l];
                  },
                  [a, t]
                ),
                f = (0, i.useCallback)(
                  (e, n) => {
                    if (e) {
                      let e = Math.max(n[1], a);
                      return [e, Math.min(e + 1, t)];
                    }
                    let l = Math.min(n[0], t);
                    return [Math.max(l - 1, a), l];
                  },
                  [a, t]
                ),
                C = (0, i.useCallback)((e) => {
                  (p(e), (g.current = e));
                }, []),
                A = (0, i.useCallback)(
                  (e) => {
                    if (r) {
                      let a = v(e);
                      r(a[0], a[1]);
                    }
                  },
                  [r, v]
                ),
                w = (0, i.useMemo)(
                  () =>
                    m()(() => {
                      A(g.current);
                    }, 50),
                  [A]
                ),
                T = (0, i.useCallback)(
                  (e, n, l) => {
                    let r = n;
                    (s
                      ? u[0] === u[1] && (r = [Math.min(n[0], n[1]), Math.max(n[0], n[1])])
                      : (r = [Math.max(a, Math.min(t, n[0])), Math.max(a, Math.min(t, n[1]))])[1] -
                          r[0] <
                          1 && (r = f(0 === l, r)),
                      C(r));
                  },
                  [t, s, f, u, C, a]
                ),
                j = (0, i.useCallback)(() => {
                  w();
                }, [w]),
                N = (0, i.useCallback)(
                  (e, n) => {
                    let l = n === h,
                      r = o(e.target.value, l),
                      i = [(r = Math.max(a, Math.min(t, r))), r],
                      d = Math.abs(l ? u[1] - r : r - u[0]);
                    if (!s && d < 1) i = f(l, [r, r]);
                    else {
                      let e = l ? u[1] : u[0],
                        a = Math.max(r, e);
                      i = [Math.min(r, e), a];
                    }
                    (C(i), A(i));
                  },
                  [u, a, t, o, s, f, C, A]
                ),
                k = (0, i.useCallback)((e, a) => {
                  if ("Enter" === e.key) {
                    var t;
                    null == (t = a.current) || t.blur();
                  }
                }, []),
                S = (0, i.useCallback)(
                  (e, n) => {
                    let l = [Math.max(null != e ? e : a, a), Math.min(null != n ? n : t, t)];
                    (p(l), (g.current = l));
                  },
                  [a, t]
                );
              return (
                (0, i.useEffect)(() => {
                  if (!d) return void c(!0);
                  let e = x.current.queryStateMinValue,
                    a = x.current.queryStateMaxValue;
                  ((n !== e || l !== a) && S(n, l),
                    (x.current = { queryStateMaxValue: l, queryStateMinValue: n }));
                }, [d, n, l, S]),
                (0, i.useEffect)(
                  () => () => {
                    w.cancel();
                  },
                  [w]
                ),
                {
                  maxInputRef: b,
                  minInputRef: y,
                  range: u,
                  onSliderChange: T,
                  onSliderRelease: j,
                  onTextFieldChange: N,
                  onTextFieldKeyDown: k
                }
              );
            })({
              absoluteMax: t,
              absoluteMin: a,
              allowSameMinMax: c,
              onRangeUpdated: f,
              queryStateMaxValue: v,
              queryStateMinValue: x,
              validator: A
            }),
            P = (0, i.useCallback)(
              (e) =>
                e === a && b
                  ? (0, n.jsx)("div", { children: j(b) })
                  : e === t && y
                    ? (0, n.jsx)("div", { children: j(y) })
                    : (0, n.jsx)("div", { children: C(e) }),
              [a, t, b, y, C, j]
            );
          return (0, n.jsxs)(l.A, {
            container: !0,
            direction: "column",
            className: T.container,
            children: [
              (0, n.jsx)(l.A, {
                className: T.sliderWrapper,
                children: (0, n.jsx)(r.S, {
                  disableSwap: !0,
                  "aria-label": "base-slider",
                  "data-testid": "baseSliderTestId",
                  id: "base-slider",
                  valueLabelDisplay: "auto",
                  className: T.slider,
                  max: t,
                  min: a,
                  onChange: I,
                  onChangeCommitted: M,
                  size: w ? "medium" : "small",
                  step: 1,
                  value: N,
                  valueLabelFormat: P
                })
              }),
              (0, n.jsx)(u, {
                minInputRef: S,
                maxInputRef: k,
                minValue: C(N[0]),
                maxValue: C(N[1]),
                minPlaceholder: g,
                maxPlaceholder: p,
                onMinTextFieldChange: (e) => D(e, h),
                onMaxTextFieldChange: (e) => D(e, "maxTextField"),
                onMinTextFieldKeyDown: (e) => L(e, S),
                onMaxTextFieldKeyDown: (e) => L(e, k)
              })
            ]
          });
        };
    }
  }
]);
