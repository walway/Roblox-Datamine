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
    n && ((e._debugIds || (e._debugIds = {}))[n] = "22b334c5-6d5b-9da4-8152-41812b89be6b");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  401263,
  884213,
  (e) => {
    "use strict";
    var t = e.i(416340);
    let a = /{(.+?)}/g,
      s = (e, t) =>
        void 0 === t || 0 === Object.keys(t).length
          ? e
          : e.replace(a, (e, a) => {
              var s;
              return null != (s = t[a]) ? s : "{".concat(a, "}");
            });
    e.s(["default", 0, s], 884213);
    let i = /{(.+?)}/,
      r = /({.+?})/g,
      l = /^[a-zA-Z0-9-]+\.(?:capture-loopback\.)?chromatic\.com$/,
      o = /(?:^|\.)robloxlabs\.com$/,
      n = () => {
        let e,
          t = l.test(window.location.hostname),
          a = window.location.hostname.includes("localhost"),
          s = "string" == typeof (e = window.location.hostname) && o.test(e);
        return {
          isSSR: !1,
          isAllowed: t || a || s,
          isDangerous: t || s,
          preferLoadedTranslations: s
        };
      },
      c = (e, t) => (t.isDangerous ? "[!!".concat(e, "!!]") : e);
    var d = e.i(730530);
    e.s(
      [
        "default",
        0,
        (e) => {
          let {
              ready: a,
              translate: l,
              translateHTML: o,
              translateWithNamespace: u,
              translateWithNamespaceHTML: m
            } = e,
            g = (0, t.useMemo)(
              () => ({
                ready: a,
                translate: l,
                translateHTML: o,
                translateWithNamespace: u,
                translateWithNamespaceHTML: m
              }),
              [a, l, o, u, m]
            );
          return (0, t.useMemo)(() => {
            let e = {
              ready: g.ready,
              translate: (0, d.translationFn)(g),
              translateHTML: (0, d.translateHTMLFn)(g),
              translateWithNamespace: g.translateWithNamespace,
              translateWithNamespaceHTML: g.translateWithNamespaceHTML
            };
            return {
              ...e,
              tPendingTranslation: ((e) => {
                let { ready: t, translate: a } = e;
                return (e, i, r, l) => {
                  let o = n();
                  if (!o.isAllowed) return a(r, l);
                  if (o.preferLoadedTranslations && t) {
                    let e = a(r, l);
                    if (e.length > 0) return e;
                  }
                  return s(o.preferLoadedTranslations && !t ? e : c(e, o), l);
                };
              })(e),
              tPendingHtmlTranslation: ((e) => {
                let { ready: a, translateHTML: l } = e;
                return (e, o, d, u, m) => {
                  let g = n();
                  if (!g.isAllowed) return l(d, u, m);
                  if (g.preferLoadedTranslations && a) {
                    let e = l(d, u, m);
                    if ("" !== e) return e;
                  }
                  return ((e, a, l) => {
                    let o, n;
                    if (void 0 === a && void 0 === l) return e;
                    let { stringArgs: c, htmlArgs: d } =
                        ((o = {}),
                        (n = {}),
                        void 0 === l ||
                          Object.entries(l).forEach((e) => {
                            let [t, a] = e;
                            "string" == typeof a ? (o[t] = a) : (n[t] = a);
                          }),
                        { stringArgs: o, htmlArgs: n }),
                      u = s(e, c),
                      m = u.split(r).filter((e) => !!e);
                    if (1 === m.length) return u;
                    let g = [...m];
                    if (0 !== Object.keys(d).length) {
                      let e = m.reduce((e, t, a) => {
                        let s = i.exec(t);
                        if (s) {
                          let t = s[1];
                          if (Object.hasOwn(d, t)) {
                            let s = e[t];
                            if (!s) return Object.assign(e, { [t]: [a] });
                            s.push(a);
                          }
                        }
                        return e;
                      }, {});
                      Object.entries(d).forEach((t) => {
                        let [a, s] = t,
                          i = e[a];
                        i &&
                          i.forEach((e) => {
                            g[e] = s;
                          });
                      });
                    }
                    if (!Array.isArray(a) || 0 === a.length)
                      return (0, t.createElement)(t.Fragment, null, ...g);
                    let p = a.reduce((e, t) => {
                        let { opening: a, closing: s, content: i } = t;
                        return Object.assign(e, {
                          ["{".concat(a, "}")]: { match: "{".concat(s, "}"), content: i }
                        });
                      }, {}),
                      h = [],
                      b = [],
                      f = [];
                    for (let e = g.shift(); void 0 !== e; e = g.shift())
                      if ("string" == typeof e && i.test(e))
                        if (Object.hasOwn(p, e)) (b.push(e), f.push(e));
                        else {
                          let a = b.pop();
                          if (void 0 !== a) {
                            let { match: s, content: i } = p[a];
                            if (e !== s) break;
                            let r = [],
                              l = !1;
                            for (; f.length > 0 && !l;) {
                              let e = f.pop();
                              e === a ? (l = !0) : r.unshift(e);
                            }
                            let o = i(
                              r.every((e) => "string" == typeof e)
                                ? r
                                : (0, t.createElement)(t.Fragment, null, ...r)
                            );
                            0 === f.length ? h.push(o) : f.push(o);
                          }
                        }
                      else 0 === f.length ? h.push(e) : f.push(e);
                    return (0, t.createElement)(t.Fragment, null, ...h);
                  })(g.preferLoadedTranslations && !a ? e : c(e, g), u, m);
                };
              })(e)
            };
          }, [g]);
        }
      ],
      401263
    );
  },
  899695,
  510476,
  966526,
  (e) => {
    "use strict";
    var t,
      a = (((t = {}).Group = "Group"), (t.Universe = "Universe"), (t.User = "User"), t);
    let s = { Universe: "Universe", User: "Creator", Group: "Group" };
    (e.s(
      [
        "ChartResourceType",
        () => a,
        "RAQIV2WithPollingDefaults",
        0,
        { maxAttempts: 20, initialPollingInterval: 1500, maxAccumulativeDelayToStartBackoff: 4500 },
        "mapChartResourceTypeToTargetResourceType",
        0,
        (e, t) => t[s[e]]
      ],
      510476
    ),
      e.s(["RAQIV2ChartResourceType", () => a], 966526),
      e.s(["default", 0, a], 899695));
  },
  923319,
  (e) => {
    "use strict";
    var t,
      a,
      s = e.i(730530),
      i =
        (((t = {}).BoldText = "boldText"),
        (t.Text = "text"),
        (t.TextWithDisplayValue = "textWithDisplayValue"),
        (t.Number = "number"),
        (t.Timestamp = "timestamp"),
        (t.RawJSONString = "RawJSONString"),
        (t.CodeDiff = "codeDiff"),
        (t.TextWithTooltip = "textWithTooltip"),
        (t.Other = "other"),
        (t.Selection = "selection"),
        (t.Actions = "actions"),
        (t.TextWithLink = "textWithLink"),
        (t.Image = "image"),
        (t.Date = "date"),
        (t.Status = "status"),
        (t.TextWithIcon = "TextWithIcon"),
        (t.Code = "code"),
        t),
      r =
        (((a = {}).ValueOpacityFill = "valueOpacityFill"),
        (a.ValuePercentageWidthFill = "valuePercentageWidthFill"),
        (a.ConstantFill = "constantFill"),
        a);
    e.s([
      "CellBackgroundType",
      () => r,
      "ColumnType",
      () => i,
      "ColumnTypeToAlign",
      0,
      {
        boldText: "left",
        text: "left",
        textWithDisplayValue: "left",
        number: "right",
        other: "left",
        timestamp: "left",
        RawJSONString: "left",
        codeDiff: "left",
        textWithTooltip: "left",
        selection: "center",
        actions: "center",
        textWithLink: "left",
        image: "left",
        date: "left",
        status: "left",
        TextWithIcon: "left",
        code: "left"
      },
      "resolveTableColumnTitle",
      0,
      (e, t, a) =>
        void 0 !== a ? (0, s.brandUntranslatableText)(a) : "string" == typeof t ? t : e(t)
    ]);
  },
  447311,
  (e) => {
    "use strict";
    var t,
      a =
        (((t = {}).Positive = "Positive"),
        (t.Negative = "Negative"),
        (t.Progression = "Progression"),
        (t.Highlight = "Highlight"),
        t);
    e.s(["TableCellBackgroundColor", () => a]);
  },
  449588,
  (e) => {
    "use strict";
    e.s([
      "default",
      0,
      function (e, t, a) {
        let s,
          i = "/dashboard/creations/experiences/".concat(a).concat(e.path);
        return 0 === Object.keys(t).length
          ? i
          : "".concat(i, "?").concat(
              ((s = new URLSearchParams()),
              Object.entries(t).forEach((e) => {
                let [t, a] = e;
                Array.isArray(a)
                  ? a.forEach((e) => {
                      s.append(t, e);
                    })
                  : null != a && s.append(t, a);
              }),
              s.toString())
            );
      }
    ]);
  },
  215928,
  929764,
  (e) => {
    "use strict";
    var t = e.i(31611),
      a = e.i(927868),
      s = e.i(908374);
    let i = (e) => null !== e.aggregationType || null !== e.percentile;
    e.s(
      [
        "default",
        0,
        (e) => {
          let s = [],
            i = null,
            r = null;
          return (
            null == e ||
              e.forEach((e) => {
                if (
                  e.dimension !== t.RAQIV2UIPseudoDimension.AggregationType &&
                  e.dimension !== t.RAQIV2UIPseudoDimension.PercentileType
                )
                  return void s.push(e);
                let l = e.values[0];
                l &&
                  (e.dimension === t.RAQIV2UIPseudoDimension.AggregationType &&
                  (0, a.isValidEnumValue)(t.RAQIV2AggregationType, l)
                    ? (i = l)
                    : e.dimension === t.RAQIV2UIPseudoDimension.PercentileType &&
                      (0, a.isValidEnumValue)(t.RAQIV2PercentileType, l) &&
                      (r = l));
              }),
            { pseudoDimensionValues: { aggregationType: i, percentile: r }, realFilters: s }
          );
        },
        "hasPseudoDimensionValues",
        0,
        i
      ],
      929764
    );
    let r = new Set([
        "L7AverageDailyActiveUsers",
        "L7AverageDailyRevenue",
        "L7AverageForwardD1Retention",
        "L7AverageForwardD7Retention",
        "L7AveragePayingUsersCVR",
        "L7AveragePlayTimeMinutesPerDAU",
        "L7AverageRFYPlayThroughRate",
        "L7AverageRFYQualifiedPTR",
        "L7AverageRevenuePerPayingUser",
        "L7AverageUniqueUsersWithPlaySessions"
      ]),
      l = (e) => Object.hasOwn(t.RAQIV2BenchmarkDatasetKeyToVariant, e) && r.has(e),
      o = Object.entries(t.RAQIV2BenchmarkDatasetKeyToVariant).reduce((e, t) => {
        let [a, i] = t;
        return (l(a) && (0, s.isNumericUIMetric)(i.metric) && (e[a] = i.metric), e);
      }, {}),
      n = new Set(Object.keys(t.RAQIV2BenchmarkDatasetKeyToVariant)),
      c = (e, a) => {
        var s;
        return e === t.RAQIV2UIMetric.CustomEventsV2 && (null == a ? void 0 : a.customEventName)
          ? {
              metric: e,
              customEventName: a.customEventName,
              ...((null == (s = a.pseudoDimensionValues) ? void 0 : s.aggregationType)
                ? { aggregationType: a.pseudoDimensionValues.aggregationType }
                : {})
            }
          : e;
      },
      d = (e, t) => {
        let a;
        return {
          sources: [
            ((a = { key: "A", metric: c(e, t) }),
            (null == t ? void 0 : t.pseudoDimensionValues) &&
              i(t.pseudoDimensionValues) &&
              (a.pseudoDimensionValues = t.pseudoDimensionValues),
            a)
          ],
          formula: "A",
          l7Smoothing: !0
        };
      },
      u = (e) => 1 === e.sources.length && e.formula.trim() === e.sources[0].key,
      m = (e) => {
        var t;
        return l(e) && null != (t = o[e]) ? t : null;
      };
    e.s(
      [
        "buildL7SmoothingComputedMetric",
        0,
        d,
        "getBaseMetricFromL7",
        0,
        m,
        "getBenchmarkVariantByDatasetKey",
        0,
        (e) => t.RAQIV2BenchmarkDatasetKeyToVariant[e],
        "getMetricForL7Smoothing",
        0,
        (e, t, a) => (t ? d(e, a) : c(e, a)),
        "getPrecomputedL7MetricFromBase",
        0,
        (e) => {
          var s, i;
          if (!(0, a.isValidEnumValue)(t.RAQIV2Metric, e)) return null;
          let r =
            null == (i = t.RAQIV2BenchmarkVariantsByMetric[e]) ||
            null == (s = i[t.RAQIV2BenchmarkVariantId.L7Average])
              ? void 0
              : s.datasetKey;
          return r && l(r) ? r : null;
        },
        "isIdentityFormulaComputedMetric",
        0,
        u,
        "isPrecomputedL7Metric",
        0,
        l,
        "isPureL7SmoothingComputedMetric",
        0,
        (e) => !!e.l7Smoothing && u(e),
        "precomputedL7Metrics",
        0,
        n,
        "rewritePrecomputedL7MetricForRequest",
        0,
        (e) => {
          if ("string" != typeof e) return null;
          let t = m(e);
          return t ? d(t, void 0) : null;
        }
      ],
      215928
    );
  },
  956154,
  (e) => {
    "use strict";
    e.s([
      "COMPARISON_RELATIVE_OFFSET_TO_MS",
      0,
      { "7d": 6048e5, "14d": 12096e5, "28d": 24192e5 },
      "ComparisonOffset",
      0,
      ["7d", "14d", "28d"]
    ]);
  },
  973005,
  (e) => {
    "use strict";
    var t = e.i(31611),
      a = e.i(927868),
      s = e.i(405005);
    e.s([
      "default",
      0,
      (e) =>
        (0, a.isValidEnumValue)(t.RAQIV2UIPseudoDimension, e) &&
        t.RAQIV2DimensionDisplayConfig[e].pseudoDimensionConfig.type ===
          t.RAQIV2UIPseudoDimensionType.MetricFanout,
      "hasMetricFanoutBreakdown",
      0,
      (e, t) => (0, s.hasMetricVariantFanout)(t, e)
    ]);
  },
  339923,
  (e) => {
    "use strict";
    var t = e.i(31611),
      a = e.i(730530),
      s = e.i(577038),
      i = e.i(881670),
      r = e.i(927868),
      l = e.i(215928),
      o = e.i(908374),
      n = e.i(11517);
    let c = (e) => "string" == typeof e && e.trim().length > 0,
      d = (e) => (0, r.isValidEnumValue)(t.RAQIV2Metric, e),
      u = (e) => (0, a.brandUntranslatableText)(e),
      m = (e, t) => {
        if (!(0, n.isComputedMetric)(e)) {
          if ((0, n.isCustomEventsAtomicMetricLike)(e)) return u(e.customEventName);
          let { localizedName: a } = (0, o.default)((0, n.getUIMetricFromAtomicMetricLike)(e));
          return t ? t.translate(a) : u(a.key);
        }
        return (0, l.isPureL7SmoothingComputedMetric)(e)
          ? m(e.sources[0].metric, t)
          : u(c(e.name) ? e.name : e.formula);
      },
      g = (0, a.translationKey)(
        "Label.ExploreMode.UntitledFormula",
        i.TranslationNamespace.Analytics
      ),
      p = (e, t) => {
        if ((0, n.isComputedMetric)(e))
          return (0, l.isPureL7SmoothingComputedMetric)(e)
            ? p(e.sources[0].metric, t)
            : (0, a.brandUntranslatableText)("");
        let { localizedName: s } = (0, o.default)((0, n.getUIMetricFromAtomicMetricLike)(e));
        return t.translate(s);
      },
      h = (e) =>
        (0, n.isComputedMetric)(e)
          ? !(0, l.isPureL7SmoothingComputedMetric)(e) || h(e.sources[0].metric)
          : (0, o.default)((0, n.getUIMetricFromAtomicMetricLike)(e)).isPositiveGood,
      b = (e) => {
        var t;
        if ((0, n.isComputedMetric)(e))
          return !!(0, l.isPureL7SmoothingComputedMetric)(e) && b(e.sources[0].metric);
        let { defaultTotalSummaryTypes: a } = (0, o.default)(
          (0, n.getUIMetricFromAtomicMetricLike)(e)
        );
        return (null == a || null == (t = a[0]) ? void 0 : t.type) === s.default.Average;
      };
    e.s([
      "UNTITLED_FORMULA_TRANSLATION_KEY",
      0,
      g,
      "brandUserSuppliedText",
      0,
      u,
      "getBenchmarkRequestIdentityFromMetricLike",
      0,
      (e) => {
        if ((0, n.isComputedMetric)(e)) {
          if (!(0, l.isPureL7SmoothingComputedMetric)(e)) return null;
          let a = (0, n.getUIMetricFromAtomicMetricLike)(e.sources[0].metric);
          return (0, r.isValidEnumValue)(t.RAQIV2Metric, a) &&
            null != (0, l.getPrecomputedL7MetricFromBase)(a)
            ? { metric: a, benchmarkVariantId: t.RAQIV2BenchmarkVariantId.L7Average }
            : null;
        }
        let a = (0, n.getUIMetricFromAtomicMetricLike)(e);
        if ((0, l.isPrecomputedL7Metric)(a)) {
          let e = (0, l.getBenchmarkVariantByDatasetKey)(a);
          return null == e ? null : { metric: e.metric, benchmarkVariantId: e.variantId };
        }
        return d(a) ? { metric: a } : null;
      },
      "getDisplayUnitFromMetricLike",
      0,
      p,
      "getIsAverageAggregationMetric",
      0,
      b,
      "getIsPositiveGoodFromMetricLike",
      0,
      h,
      "getMetricLabelFromMetricLike",
      0,
      m,
      "getMetricTitleKeyFromMetricLike",
      0,
      (e) =>
        (0, n.isComputedMetric)(e)
          ? c(e.name)
            ? u(e.name)
            : g
          : (0, n.isCustomEventsAtomicMetricLike)(e)
            ? u(e.customEventName)
            : (0, o.default)((0, n.getUIMetricFromAtomicMetricLike)(e)).localizedName,
      "getRAQIV2BenchmarkMetricFromMetricLike",
      0,
      (e) => {
        if ((0, n.isComputedMetric)(e)) {
          if (!(0, l.isPureL7SmoothingComputedMetric)(e)) return null;
          let t = (0, n.getUIMetricFromAtomicMetricLike)(e.sources[0].metric);
          return (0, l.getPrecomputedL7MetricFromBase)(t);
        }
        let t = (0, n.getUIMetricFromAtomicMetricLike)(e);
        return d(t) ? t : null;
      }
    ]);
  },
  190474,
  (e) => {
    "use strict";
    var t = e.i(416340),
      a = e.i(640694),
      s = e.i(281571),
      i = e.i(426546);
    let r = "restricted";
    e.s([
      "CONTENT_RESTRICTED",
      0,
      r,
      "CONTENT_UNRATED",
      0,
      "unrated",
      "default",
      0,
      function (e) {
        let [l, o] = (0, t.useState)(!1),
          [n, c] = (0, t.useState)(
            e === r ? s.CreatorEligibility.NotEligible : s.CreatorEligibility.Eligible
          ),
          d = (0, t.useCallback)((e, t) => {
            var i;
            let r =
              null == e || null == (i = e.eligibilityByCreator)
                ? void 0
                : i.find((e) => e.userId === t);
            return (null == r ? void 0 : r.userIsEligible) === !0
              ? s.CreatorEligibility.Eligible
              : (null == r ? void 0 : r.ineligibilityReason) ===
                  a.V1Beta1IneligibilityReason.AgeNotVerified
                ? s.CreatorEligibility.NotEligibleUpsell
                : s.CreatorEligibility.NotEligible;
          }, []),
          u = (0, t.useCallback)(
            (e) => {
              (e && e.preventDefault(), o(!l));
            },
            [l, o]
          ),
          m = (0, t.useCallback)(
            (e, t) => {
              (e && e.preventDefault(),
                !0 === t && window.open(i.www.getAccountSettingsUrl(), "_blank"),
                o(!l));
            },
            [l, o]
          ),
          g = (0, t.useCallback)(
            async (e, t) => {
              if ((c(s.CreatorEligibility.NotEligible), e && (null == t ? void 0 : t.id)))
                try {
                  let i = await s.default.multiGetCreatorEligibility(
                    e,
                    [t.id],
                    a.V1Beta1CreatorEligibilityAction.Collaboration,
                    !0
                  );
                  c(d(i, null == t ? void 0 : t.id));
                } catch (e) {}
            },
            [d]
          );
        return {
          getCreatorElibilityFromResponse: d,
          getCreatorEligibility: g,
          toggleDialog: u,
          onConfirmButton: m,
          setCreatorEligibility: c,
          creatorEligibility: n,
          isDialogOpen: l
        };
      }
    ]);
  },
  493924,
  938429,
  321623,
  (e) => {
    "use strict";
    var t = e.i(221628),
      a = e.i(199834),
      s = e.i(706442),
      i = e.i(776344),
      r = e.i(462863),
      l = e.i(210436),
      o = e.i(872378),
      n = e.i(909935),
      c = e.i(587608),
      d = e.i(648550),
      u = e.i(879556),
      m = e.i(156676),
      g = e.i(732097),
      p = e.i(149209),
      h = e.i(152382),
      b = e.i(323377),
      f = e.i(212940),
      v = e.i(581403),
      x = e.i(527781),
      _ = e.i(492581),
      k = e.i(572165),
      y = e.i(977079),
      A = e.i(402440),
      T = e.i(620094),
      M = e.i(721267),
      q = e.i(788618),
      S = e.i(11730),
      w = e.i(334912),
      E = e.i(315072),
      C = e.i(319700),
      L = e.i(397367),
      V = e.i(339295),
      I = e.i(26168),
      R = e.i(761562),
      P = e.i(174990),
      j = e.i(226572),
      D = e.i(41024),
      F = e.i(318682),
      N = e.i(902904),
      U = e.i(973248),
      O = e.i(699904),
      B = e.i(861406),
      W = e.i(659373),
      z = e.i(871908),
      Q = e.i(712369),
      K = e.i(761170),
      G = e.i(69008),
      H = e.i(610419),
      X = e.i(6938),
      J = e.i(931008),
      Y = e.i(132917),
      $ = e.i(999544),
      Z = e.i(370502),
      ee = e.i(779375),
      et = e.i(179677),
      ea = e.i(761534),
      es = e.i(935295),
      ei = e.i(930283),
      er = e.i(892316),
      el = e.i(667509),
      eo = e.i(285253),
      en = e.i(987596),
      ec = e.i(969915);
    let ed = {
      secrets: { light: P.default, dark: R.default },
      noPermissions: { light: P.default, dark: R.default },
      notifications: { light: G.default, dark: K.default },
      experiences: { light: en.default, dark: eo.default },
      shareLinks: { light: et.default, dark: ee.default },
      eventsAndUpdates: { light: A.default, dark: y.default },
      avatarItem: { light: u.default, dark: d.default },
      models: { light: W.default, dark: B.default },
      plugins: { light: Q.default, dark: z.default },
      audio: { light: c.default, dark: n.default },
      decals: { light: x.default, dark: v.default },
      images: { light: S.default, dark: q.default },
      videos: { light: ec.default, dark: el.default },
      meshes: { light: O.default, dark: U.default },
      animations: { light: Z.default, dark: $.default },
      textDocuments: { light: k.default, dark: _.default },
      noUsers: { light: f.default, dark: b.default },
      localization: { light: I.default, dark: V.default },
      rightsManager: { light: Y.default, dark: J.default },
      tokens: { light: er.default, dark: ei.default },
      chart: { light: L.default, dark: C.default },
      badge: { light: g.default, dark: m.default },
      apiKeys: { light: o.default, dark: l.default },
      signin: { light: es.default, dark: ea.default },
      oAuthApps: { light: X.default, dark: H.default },
      makeupLooks: { light: D.default, dark: j.default },
      barGraph: { light: h.default, dark: p.default },
      leaderboard: { light: E.default, dark: w.default },
      findPeople: { light: M.default, dark: T.default },
      managedPricing: { light: N.default, dark: F.default }
    };
    e.s(["default", 0, ed], 938429);
    let eu = "".concat(
        "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/assets",
        "/spot_illustrations"
      ),
      em = {
        small: {
          analytics: "".concat(eu, "/small/analytics.svg"),
          animations: "".concat(eu, "/small/animations.svg"),
          audio: "".concat(eu, "/small/audio.svg"),
          audioLight: "".concat(eu, "/small/audio_light.svg"),
          audioDark: "".concat(eu, "/small/audio_dark.svg"),
          avatarItem: "".concat(eu, "/small/avatar_item.svg"),
          beginSearch: "".concat(eu, "/small/beginSearch.svg"),
          creatorStore: "".concat(eu, "/small/creator_store.svg"),
          decals: "".concat(eu, "/small/decals.svg"),
          events: "".concat(eu, "/small/events.svg"),
          experiences: "".concat(eu, "/small/experiences.svg"),
          images: "".concat(eu, "/small/images.svg"),
          meshes: "".concat(eu, "/small/meshes.svg"),
          models: "".concat(eu, "/small/models.svg"),
          plugins: "".concat(eu, "/small/plugins.svg"),
          script: "".concat(eu, "/small/script.svg"),
          song: "".concat(eu, "/small/song.svg"),
          musicNote: "".concat(eu, "/small/audio_music_note.svg"),
          noUsers: "".concat(eu, "/small/no_users.svg"),
          user: "".concat(eu, "/small/user.svg"),
          users: "".concat(eu, "/small/users.svg"),
          videos: "".concat(eu, "/small/videos.svg"),
          search: "".concat(eu, "/small/search.svg"),
          oof: "".concat(eu, "/small/oof.svg"),
          download: "".concat(eu, "/small/download.svg"),
          attributes: "".concat(eu, "/small/attributes.svg"),
          matchmakingSimulation: "".concat(eu, "/small/matchmaking_simulation.svg")
        },
        large: {
          apiKeys: "".concat(eu, "/large/api_keys.svg"),
          localization: "".concat(eu, "/large/localization.svg"),
          noPermissions: "".concat(eu, "/large/no_permissions.svg"),
          oAuthApps: "".concat(eu, "/large/oauth_apps.svg"),
          rights: "".concat(eu, "/large/rights.svg"),
          secrets: "".concat(eu, "/large/secrets.svg"),
          shareLinks: "".concat(eu, "/large/share_links.svg"),
          configurations: "".concat(eu, "/large/configurations.svg"),
          experienceConfigs: "".concat(eu, "/large/experience_configs.svg"),
          emptyExperiments: "".concat(eu, "/large/empty_experiments.svg")
        }
      };
    e.s(["default", 0, em], 321623);
    let eg = (0, s.makeStyles)()(() => ({
        smallContainer: { margin: "48px 0", padding: "0 24px", width: "100%" },
        largeContainer: { margin: "100px 0", width: "100%" },
        smallText: { gap: 6, maxWidth: 510, marginBottom: 16 },
        largeText: { gap: 6, maxWidth: 480, marginBottom: 24 }
      })),
      ep = (e) => {
        let { illustration: a, size: s = "large" } = e,
          i = a && ed[a];
        if (i) return (0, t.jsx)(r.default, { lightSrc: i.light, darkSrc: i.dark, alt: a });
        let l = a ? em[s][a] : null;
        return (
          l &&
          (0, t.jsx)("img", {
            height: "large" === s ? 240 : 96,
            width: "large" === s ? 320 : 96,
            src: l,
            alt: a
          })
        );
      },
      eh = (e) => {
        let { children: s, title: r, description: l, size: o = "large", illustration: n } = e,
          {
            classes: { smallContainer: c, largeContainer: d, smallText: u, largeText: m },
            cx: g
          } = eg();
        return (0, t.jsxs)(i.default, {
          classes: { root: g({ [c]: "small" === o, [d]: "large" === o }) },
          flexDirection: "column",
          alignItems: "center",
          children: [
            (0, t.jsx)(ep, { illustration: n, size: o }),
            (0, t.jsxs)(i.default, {
              classes: { root: g({ [u]: "small" === o, [m]: "large" === o }) },
              flexDirection: "column",
              alignItems: "center",
              children: [
                (0, t.jsx)(a.Typography, {
                  textAlign: "center",
                  variant: "h4",
                  color: "primary",
                  children: r
                }),
                l &&
                  (0, t.jsx)(a.Typography, { textAlign: "center", color: "secondary", children: l })
              ]
            }),
            s
          ]
        });
      };
    ((eh.displayName = "EmptyState"),
      e.s(["EmptyStateIllustration", 0, ep, "default", 0, eh], 493924));
  },
  198528,
  (e) => {
    "use strict";
    var t = e.i(416340),
      a = e.i(237401);
    e.s([
      "default",
      0,
      (e, s) => {
        let i = (0, a.useRouter)(),
          r = i.query;
        return [
          (0, t.useMemo)(() => {
            let t = null != r ? r : {},
              a = {};
            for (let s of e) a[s] = t[s];
            return a;
          }, [e, r]),
          (0, t.useCallback)(
            function (t) {
              var a;
              let r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { skipHistory: !1 },
                l = null != (a = i.query) ? a : {},
                o = { ...l };
              (e.forEach((e) => {
                if (!Object.hasOwn(t, e)) return;
                let a = t[e];
                null == a
                  ? delete o[e]
                  : Array.isArray(a)
                    ? (o[e] = a.map((e) => e.toString()))
                    : (o[e] = a.toString());
              }),
                Array.from(new Set([...Object.keys(l), ...Object.keys(o)])).every((e) =>
                  ((e, t) => {
                    if (null == e && null == t) return !0;
                    if (null == e || null == t) return !1;
                    let a = Array.isArray(e) ? e : [e],
                      s = Array.isArray(t) ? t : [t];
                    return a.length === s.length && a.every((e, t) => e === s[t]);
                  })(l[e], o[e])
                ) ||
                  (r.skipHistory
                    ? i.replace({ pathname: i.pathname, query: o })
                    : i.push({ pathname: i.pathname, query: o }, void 0, s)));
            },
            [i, e, s]
          )
        ];
      },
      "normalizeSingleQueryParam",
      0,
      (e) => {
        let t = Array.isArray(e) ? e[0] : e;
        return "" === t || null == t ? void 0 : t;
      }
    ]);
  },
  927868,
  (e) => {
    "use strict";
    e.s([
      "getEnumKeyByValue",
      0,
      (e, t) => {
        let a = Object.entries(e).find((e) => {
          let [, a] = e;
          return a === t;
        });
        return a ? a[0] : null;
      },
      "isValidArrayEnumValue",
      0,
      (e, t) => e.includes(t),
      "isValidEnumValue",
      0,
      (e, t) => Object.values(e).includes(t)
    ]);
  },
  500957,
  (e) => {
    "use strict";
    var t = e.i(552140);
    e.s(["AnalyticsQueryGatewayAPIFilterOperation", () => t.FilterOperation]);
  },
  210436,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/api_key_dark.1k1v6y4zm3j28.svg"
    );
  },
  872378,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/api_key_light.06t4q4202-77s.svg"
    );
  },
  909935,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/audio_dark.16razgllw2ska.svg"
    );
  },
  587608,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/audio_light.3ra073_18pbj-.svg"
    );
  },
  648550,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/avatar_setup_dark.0orjsl7i089hc.svg"
    );
  },
  879556,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/avatar_setup_light.32r86q54d7kuh.svg"
    );
  },
  156676,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/badge_dark.3m45r-3favo3f.svg"
    );
  },
  732097,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/badge_light.3fxfvj8ub7utb.svg"
    );
  },
  149209,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/bar_graph_dark.01vf9sty52re2.svg"
    );
  },
  152382,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/bar_graph_light.1iiixo_d8ur81.svg"
    );
  },
  323377,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/collaborators_dark.30gxkwssilacj.svg"
    );
  },
  212940,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/collaborators_light.3x7fovqhay1x5.svg"
    );
  },
  581403,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/decals_dark.2jpntsljojhzc.svg"
    );
  },
  527781,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/decals_light.16_gp3tnuc5p_.svg"
    );
  },
  492581,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/envelope_dark.2-ouf9shuihi4.svg"
    );
  },
  572165,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/envelope_light.1me9hqye66z7w.svg"
    );
  },
  977079,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/event_calendar_dark.3lx4_kse68by8.svg"
    );
  },
  402440,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/event_calendar_light.1pq-t84d90ty1.svg"
    );
  },
  620094,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/find_people_dark.220q6_cs04hcq.svg"
    );
  },
  721267,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/find_people_light.1gkb3pmwc8s2n.svg"
    );
  },
  788618,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/image_dark.2giew28wx4z86.svg"
    );
  },
  11730,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/image_light.0ouq8tcgpznz7.svg"
    );
  },
  334912,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/leaderboard_dark.301ypg94lbxpv.svg"
    );
  },
  315072,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/leaderboard_light.43sjz_ibwkiq_.svg"
    );
  },
  319700,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/line_chart_dark.0k7qf3mhepo6s.svg"
    );
  },
  397367,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/line_chart_light.049gcvvmai0ax.svg"
    );
  },
  339295,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/localization_dark.1ia7wat2mwyfi.svg"
    );
  },
  26168,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/localization_light.2jss_xvx2fuq0.svg"
    );
  },
  761562,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/lockSecrets_dark.0na6naigcbnkj.svg"
    );
  },
  174990,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/lockSecrets_light.0rzix2i1i13lt.svg"
    );
  },
  226572,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/makeup_look_dark.26-5-yn8598c9.svg"
    );
  },
  41024,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/makeup_look_light.0rc05t5n5al4m.svg"
    );
  },
  318682,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/managed_pricing_dark.2zdkf2-ctboa2.svg"
    );
  },
  902904,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/managed_pricing_light.0sioq_hruq1qp.svg"
    );
  },
  973248,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/meshes_dark.2tlm50ns1pq5o.svg"
    );
  },
  699904,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/meshes_light.36wh96flp2o3r.svg"
    );
  },
  861406,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/models_dark.30suu5lj5-ua5.svg"
    );
  },
  659373,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/models_light.0kiw6k3ejw-rn.svg"
    );
  },
  871908,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/models_plugins_parts_dark.3jp6jislnsqf8.svg"
    );
  },
  712369,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/models_plugins_parts_light.2nj1xhv0bfg_u.svg"
    );
  },
  761170,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/notifications_dark.2l_rf34_xo6o8.svg"
    );
  },
  69008,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/notifications_light.3p-b4rzvwwfmj.svg"
    );
  },
  610419,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/oauth_dark.42jv8--11_1i0.svg"
    );
  },
  6938,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/oauth_light.17vwiebwrn8ox.svg"
    );
  },
  931008,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/rights_manager_dark.0m7ca17sdbgim.svg"
    );
  },
  132917,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/rights_manager_light.1moaenz1cbft0.svg"
    );
  },
  999544,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/run_dark.1sun4tvxh_arh.svg"
    );
  },
  370502,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/run_light.29f-3jyw910_v.svg"
    );
  },
  779375,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/shareLinks_dark.1l5fwuv6cgzmy.svg"
    );
  },
  179677,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/shareLinks_light.116igf-ldibmu.svg"
    );
  },
  761534,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/signin_dark.1k_gzn1-5q0ca.svg"
    );
  },
  935295,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/signin_light.1o1-jng_ct0y2.svg"
    );
  },
  930283,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/token_dark.2qy4jy9ffjhax.svg"
    );
  },
  892316,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/token_light.2xc00j5zp1q8_.svg"
    );
  },
  667509,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/video_dark.2-gdpodjtsjj3.svg"
    );
  },
  285253,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/video_game_dark.0tuxtkttj8gcu.svg"
    );
  },
  987596,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/video_game_light.3l155817mjupj.svg"
    );
  },
  969915,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/92ed60d6289a8d60223be2e0842b716c5398330a/_next/static/media/video_light.1fum3vlxctp7w.svg"
    );
  },
  372821,
  (e) => {
    "use strict";
    var t = e.i(725074),
      a = e.i(197649),
      s = e.i(416340);
    let i = {
        Neutral: "bg-shift-200",
        Standard: "bg-shift-200",
        Contrast: "bg-system-contrast",
        Emphasis: "bg-system-emphasis",
        Success: "bg-[rgb(from_var(--color-system-success)_r_g_b_/_0.2)]",
        Warning: "bg-[rgb(from_var(--color-system-warning)_r_g_b_/_0.2)]",
        Alert: "bg-[rgb(from_var(--color-system-alert)_r_g_b_/_0.2)]",
        OverMedia: "bg-over-media-0"
      },
      r = {
        Neutral: "content-emphasis",
        Standard: "content-emphasis",
        Contrast: "content-inverse-emphasis",
        Emphasis: "content-[var(--dark-mode-content-emphasis)]",
        Success: "content-emphasis",
        Warning: "content-emphasis",
        Alert: "content-emphasis",
        OverMedia: "content-emphasis"
      },
      l = {
        Neutral: "content-emphasis",
        Standard: "content-emphasis",
        Contrast: "content-inverse-emphasis",
        Emphasis: "content-[var(--dark-mode-content-emphasis)]",
        Success: "content-system-success",
        Warning: "content-system-warning",
        Alert: "content-system-alert",
        OverMedia: "content-emphasis"
      },
      o = {
        Neutral: "stroke-none",
        Standard: "stroke-none",
        Contrast: "stroke-none",
        Emphasis: "stroke-none",
        Success: "stroke-none",
        Warning: "stroke-none",
        Alert: "stroke-none",
        OverMedia: "stroke-none"
      },
      n = { Small: "height-600", XSmall: "height-400" },
      c = { Small: "padding-x-small", XSmall: "padding-x-xsmall" },
      d = { Small: "width-600", XSmall: "width-400" },
      u = { Small: "text-label-small", XSmall: "text-caption-small" },
      m = { Small: "padding-y-xsmall", XSmall: "padding-y-none" },
      g = { Small: "XSmall", XSmall: "XSmall" },
      p = { Pill: "radius-circle", Box: "radius-small" },
      h = s.default.forwardRef((e, h) => {
        let {
            className: b,
            label: f,
            variant: v = "Standard",
            icon: x,
            iconPosition: _ = "Leading",
            size: k = "Small",
            shape: y = "Pill",
            ...A
          } = e,
          T = x && !f,
          M = "padding-x-xxsmall";
        x && (M = "Leading" === _ ? "padding-right-xxsmall" : "padding-left-xxsmall");
        let q = x && s.default.createElement(t.Icon, { name: x, size: g[k], className: l[v] });
        return s.default.createElement(
          "div",
          {
            ref: h,
            ...A,
            className: (0, a.default)(
              "foundation-web-badge flex items-center select-none gap-[var(--size-150)]",
              p[y],
              n[k],
              T ? [d[k], "justify-center"] : ["width-[fit-content]", c[k]],
              i[v],
              r[v],
              o[v],
              b
            )
          },
          "Leading" === _ && q,
          f &&
            s.default.createElement(
              "span",
              {
                className: (0, a.default)("text-no-wrap text-truncate-split", u[k], m[k], M, r[v])
              },
              f
            ),
          "Trailing" === _ && q
        );
      });
    ((h.displayName = "Badge"), e.s(["Badge", 0, h]));
  },
  514455,
  (e) => {
    "use strict";
    var t = e.i(865800),
      a = e.i(416340),
      s = e.i(614515),
      i = e.i(993807),
      r = e.i(962560),
      l = e.i(273589),
      o = e.i(42569),
      n = e.i(696180),
      c = e.i(221628),
      d = e.i(972455),
      u = e.i(963320);
    function m(e) {
      return (0, l.g)("MuiAlertTitle", e);
    }
    (0, n.g)("MuiAlertTitle", ["root"]);
    let g = ["className"],
      p = (0, o.s)(d.T, {
        name: "MuiAlertTitle",
        slot: "Root",
        overridesResolver: (e, t) => t.root
      })((e) => {
        let { theme: t } = e;
        return { fontWeight: t.typography.fontWeightMedium, marginTop: -2 };
      }),
      h = a.forwardRef(function (e, t) {
        let a = (0, u.u)({ props: e, name: "MuiAlertTitle" }),
          { className: s } = a,
          i = (0, l._)(a, g),
          n = ((e) => {
            let { classes: t } = e;
            return (0, o.a)({ root: ["root"] }, m, t);
          })(a);
        return (0, c.jsx)(
          p,
          (0, r._)(
            {
              gutterBottom: !0,
              component: "div",
              ownerState: a,
              ref: t,
              className: (0, o.c)(n.root, s)
            },
            i
          )
        );
      });
    var b = (0, s.default)({ name: "AlertTitle" })(function (e) {
        return { root: (0, t._)((0, t._)({}, e.typography.alertTitle), { margin: "-1px 0" }) };
      }),
      f = (0, a.forwardRef)(function (e, s) {
        var r = e.classes,
          l = e.className,
          o = (0, t.a)(e, ["classes", "className"]),
          n = b(void 0, { props: { classes: (0, i.default)(r, l) } });
        return a.default.createElement(h, (0, t._)({}, o, { classes: n.classes, ref: s }));
      });
    e.s(["AlertTitle", 0, f], 514455);
  },
  196945,
  (e) => {
    "use strict";
    var t = e.i(865800),
      a = e.i(416340),
      s = e.i(323356);
    (e.i(221628), e.i(149285));
    var i = (0, a.createContext)({
      ref: { current: null },
      enqueue: function () {
        throw Error("useSnackbar was invoked without SnackbarProvider");
      },
      close: function () {
        throw Error("useSnackbar was invoked without SnackbarProvider");
      }
    });
    e.s([
      "default",
      0,
      function (e) {
        var r,
          l,
          o,
          n,
          c = e.children,
          d = (0, t.a)(e, ["children"]),
          u = (0, a.useRef)(null),
          m = (0, a.useState)(!1),
          g = m[0],
          p = m[1],
          h = (0, a.useState)([]),
          b = h[0],
          f = h[1],
          v = (0, a.useCallback)(
            function (e, a) {
              (void 0 === e && (e = {}),
                void 0 === a &&
                  (a = function () {
                    return !0;
                  }),
                f(function (s) {
                  return (0, t.b)((0, t.b)([], s, !0), [{ props: e, shouldClose: a }], !1);
                }));
            },
            [f]
          ),
          x = (0, a.useCallback)(
            function () {
              p(!1);
            },
            [p]
          );
        (0, a.useEffect)(
          function () {
            b.length > 0 && p(!0);
          },
          [b.length]
        );
        var _ = (0, a.useMemo)(
          function () {
            return { ref: u, enqueue: v, close: x };
          },
          [x, v]
        );
        return a.default.createElement(
          a.default.Fragment,
          null,
          a.default.createElement(i.Provider, { value: _ }, c),
          a.default.createElement(
            s.S,
            (0, t._)({}, (null == (r = b[0]) ? void 0 : r.props) || {}, d, {
              TransitionProps: (0, t._)(
                (0, t._)(
                  {},
                  (null == (o = null == (l = b[0]) ? void 0 : l.props)
                    ? void 0
                    : o.TransitionProps) || {}
                ),
                {
                  onExited: function (e) {
                    var a, s, i, r;
                    (f(function (e) {
                      var a = e.slice(1);
                      return (0, t.b)([], a, !0);
                    }),
                      (null == (s = null == (a = b[0]) ? void 0 : a.props.TransitionProps)
                        ? void 0
                        : s.onExited) &&
                        (null == (r = null == (i = b[0]) ? void 0 : i.props.TransitionProps) ||
                          r.onExited(e)));
                  }
                }
              ),
              onClose: function (e, t) {
                var a, s, i;
                ((null == (a = b[0]) ? void 0 : a.shouldClose(t)) && p(!1),
                  (null == (s = b[0]) ? void 0 : s.props.onClose) &&
                    (null == (i = b[0]) || i.props.onClose(e, t)));
              },
              open: g
            }),
            null == (n = b[0]) ? void 0 : n.props.children
          )
        );
      },
      "useSnackbar",
      0,
      function () {
        var e = (0, a.useContext)(i);
        return { ref: e.ref, enqueue: e.enqueue, close: e.close };
      }
    ]);
  },
  421451,
  (e) => {
    "use strict";
    var t = e.i(833172);
    e.s(["MoreVertIcon", () => t.MoreVert]);
  },
  718389,
  (e) => {
    "use strict";
    e.s([
      "default",
      0,
      function e(t) {
        let a = t;
        var s = {}.toString.call(t).slice(8, -1);
        if ("Set" == s) return new Set([...t].map((t) => e(t)));
        if ("Map" == s) return new Map([...t].map((t) => [e(t[0]), e(t[1])]));
        if ("Date" == s) return new Date(t.getTime());
        if ("RegExp" == s)
          return RegExp(
            t.source,
            (function (e) {
              if ("string" == typeof e.source.flags) return e.source.flags;
              var t = [];
              return (
                e.global && t.push("g"),
                e.ignoreCase && t.push("i"),
                e.multiline && t.push("m"),
                e.sticky && t.push("y"),
                e.unicode && t.push("u"),
                t.join("")
              );
            })(t)
          );
        if ("Array" == s || "Object" == s)
          for (var i in ((a = Array.isArray(t) ? [] : {}), t)) a[i] = e(t[i]);
        return a;
      }
    ]);
  }
]);

//# debugId=22b334c5-6d5b-9da4-8152-41812b89be6b
//# sourceMappingURL=2ptkz9t22blx3.js.map
