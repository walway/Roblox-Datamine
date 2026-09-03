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
    n && ((e._debugIds || (e._debugIds = {}))[n] = "7792681d-daf6-f616-3078-1996b58d3d7b");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  168070,
  (e) => {
    "use strict";
    var t = e.i(761551);
    let a = {
        abbreviate: !1,
        icon: t.NumberIcon.Robux,
        numberFormatOptions: { maximumFractionDigits: 0, minimumFractionDigits: 0 }
      },
      n = {
        abbreviate: !0,
        icon: t.NumberIcon.Robux,
        numberFormatOptions: { maximumFractionDigits: 0, minimumFractionDigits: 0 }
      };
    e.s([
      "abbreviatedIntegerFormattingSpec",
      0,
      {
        abbreviate: !0,
        numberFormatOptions: { maximumFractionDigits: 0, minimumFractionDigits: 0 }
      },
      "abbreviatedRobuxFormattingSpec",
      0,
      n,
      "currencyFormattingSpec",
      0,
      {
        abbreviate: !1,
        numberFormatOptions: {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }
      },
      "integerFormattingSpec",
      0,
      {
        abbreviate: !1,
        numberFormatOptions: { maximumFractionDigits: 0, minimumFractionDigits: 0 }
      },
      "legacyPercentageFormattingSpec",
      0,
      {
        abbreviate: !1,
        scalingFactor: 0.01,
        numberFormatOptions: {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          style: "percent"
        }
      },
      "oneDecimalFormattingSpec",
      0,
      {
        abbreviate: !1,
        numberFormatOptions: { minimumFractionDigits: 1, maximumFractionDigits: 1 }
      },
      "percentageFormattingSpec",
      0,
      {
        abbreviate: !1,
        prefix: void 0,
        suffix: void 0,
        numberFormatOptions: {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          style: "percent"
        }
      },
      "robuxFormattingSpec",
      0,
      a,
      "roughPercentageFormattingSpec",
      0,
      {
        abbreviate: !1,
        numberFormatOptions: {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
          style: "percent"
        }
      },
      "wholePercentageFormattingSpec",
      0,
      {
        abbreviate: !1,
        prefix: void 0,
        suffix: void 0,
        numberFormatOptions: {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
          style: "percent"
        }
      }
    ]);
  },
  152156,
  (e) => {
    "use strict";
    var t = e.i(31611);
    let a = {
        [t.RAQIV2DateRangeType.Last1Hour]: !0,
        [t.RAQIV2DateRangeType.Last1Day]: !0,
        [t.RAQIV2DateRangeType.Last3Days]: !1,
        [t.RAQIV2DateRangeType.Last7Days]: !1,
        [t.RAQIV2DateRangeType.Last28Days]: !1,
        [t.RAQIV2DateRangeType.Last56Days]: !1,
        [t.RAQIV2DateRangeType.Last90Days]: !1,
        [t.RAQIV2DateRangeType.Custom]: !1
      },
      n = (e) =>
        0 === e.getUTCHours() &&
        0 === e.getUTCMinutes() &&
        0 === e.getUTCSeconds() &&
        0 === e.getUTCMilliseconds();
    e.s([
      "getComparisonWindowGranularity",
      0,
      (e, r) => {
        var i, l;
        return e !== t.RAQIV2MetricGranularity.None
          ? e
          : a[r.rangeType]
            ? t.RAQIV2MetricGranularity.None
            : r.rangeType !== t.RAQIV2DateRangeType.Custom ||
                ((i = r.startTime),
                (l = r.endTime).getTime() - i.getTime() >= 864e5 || (n(i) && n(l)))
              ? r.snapGranularity
                ? r.snapGranularity
                : t.RAQIV2MetricGranularity.OneDay
              : t.RAQIV2MetricGranularity.None;
      },
      "millisecondsInInterval",
      0,
      (e) => {
        switch (e) {
          case t.RAQIV2MetricGranularity.OneHour:
            return 36e5;
          case t.RAQIV2MetricGranularity.HalfHour:
            return 18e5;
          case t.RAQIV2MetricGranularity.OneMinute:
            return 6e4;
          case t.RAQIV2MetricGranularity.OneDay:
            return 864e5;
          case t.RAQIV2MetricGranularity.OneWeek:
            return 6048e5;
          case t.RAQIV2MetricGranularity.OneMonth:
            return 2592e6;
          case t.RAQIV2MetricGranularity.None:
            throw Error("Ungrouped data points represent variable length intervals.");
          default:
            throw Error("Unhandled metric granularity ".concat(String(e)));
        }
      },
      "shouldAlignComparisonSeriesEndWithMainSeriesStart",
      0,
      (e) => {
        switch (e) {
          case t.RAQIV2MetricGranularity.OneWeek:
          case t.RAQIV2MetricGranularity.OneMonth:
          case t.RAQIV2MetricGranularity.OneDay:
            return !1;
          case t.RAQIV2MetricGranularity.None:
          case t.RAQIV2MetricGranularity.OneHour:
          case t.RAQIV2MetricGranularity.HalfHour:
          case t.RAQIV2MetricGranularity.OneMinute:
            return !0;
          default:
            throw Error("Unhandled metric granularity ".concat(String(e)));
        }
      }
    ]);
  },
  401380,
  (e) => {
    "use strict";
    var t = e.i(31611),
      a = e.i(152156);
    e.s([
      "default",
      0,
      (e, n) => {
        switch (n) {
          case t.RAQIV2MetricGranularity.OneMonth: {
            let t = new Date(e);
            return (t.setUTCMonth(t.getUTCMonth() - 1), t.getTime());
          }
          case t.RAQIV2MetricGranularity.OneWeek:
          case t.RAQIV2MetricGranularity.OneDay:
          case t.RAQIV2MetricGranularity.OneHour:
          case t.RAQIV2MetricGranularity.HalfHour:
          case t.RAQIV2MetricGranularity.OneMinute:
          case t.RAQIV2MetricGranularity.None:
            return e - (0, a.millisecondsInInterval)(n);
          default:
            throw Error("Unhandled metric granularity: ".concat(String(n)));
        }
      }
    ]);
  },
  859410,
  (e) => {
    "use strict";
    var t,
      a =
        (((t = a || {}).Unknown = "RAQI_RESERVED_DIMENSION_VALUES_UNKNOWN"),
        (t.NoValue = "RAQI_RESERVED_DIMENSION_VALUES_NO_VALUE"),
        t);
    e.s(["default", 0, a]);
  },
  68629,
  409180,
  (e) => {
    "use strict";
    var t = e.i(859410);
    e.s(["RAQIV2ReservedDimensionValues", () => t.default], 68629);
    var a = e.i(552140);
    e.s(["AnalyticsDataStatus", () => a.DataStatus], 409180);
  },
  874030,
  (e) => {
    "use strict";
    var t = e.i(721281),
      a = e.i(502585),
      n = e.i(272593);
    let r = new (class {
      getCountryRegions(e) {
        return this.countryRegionsApi.v1CountryRegionsGet(e);
      }
      constructor() {
        ((0, t._)(this, "countryRegionsApi", void 0),
          (this.countryRegionsApi = new a.CountryRegionsApi(
            (0, n.createClientConfiguration)("locale", "bedev1")
          )));
      }
    })();
    e.s(["default", 0, r]);
  },
  998683,
  (e) => {
    "use strict";
    var t = e.i(721281),
      a = e.i(502585),
      n = e.i(272593);
    let r = new (class {
      async getLocale(e) {
        return this.localeApi.v1LocalesGet(e);
      }
      async getUserLocalizationLocusSupportedLocales() {
        return this.localeApi.v1LocalesUserLocalizationLocusSupportedLocalesGet();
      }
      async getSupportedLocalesForCreators(e) {
        return this.localeApi.v1LocalesSupportedLocalesForCreatorsGet(e);
      }
      async getSupportedLocalesForFeature(e) {
        return this.localeApi.v1LocalesSupportedLocalesForFeatureGet(e);
      }
      constructor() {
        ((0, t._)(this, "localeApi", void 0),
          (this.localeApi = new a.LocaleApi((0, n.createClientConfiguration)("locale", "bedev1"))));
      }
    })();
    e.s(["default", 0, r]);
  },
  611754,
  725613,
  (e) => {
    "use strict";
    var t = e.i(31611),
      a = e.i(730530),
      n = e.i(761551),
      r = e.i(401380),
      i = e.i(68629),
      l = e.i(409180),
      o = e.i(881670),
      s = e.i(927868),
      u = e.i(809395),
      c = e.i(908374),
      m = e.i(875907),
      d = e.i(678937),
      y = e.i(700664),
      p = e.i(11517),
      g = e.i(667614),
      f = e.i(339923),
      V = e.i(405680),
      A = e.i(739167);
    let v = (e, t) => {
        let a = null == e ? void 0 : e.value,
          n = null == t ? void 0 : t.value;
        return void 0 === a && void 0 === n
          ? 0
          : void 0 === a
            ? 1
            : void 0 === n
              ? -1
              : a.localeCompare(n);
      },
      R = (e) => {
        let { ordering: a, remainingSort: n } = e;
        return (e, r) => {
          let i = null == e ? void 0 : e.value,
            l = null == r ? void 0 : r.value;
          if (void 0 === i && void 0 === l) return 0;
          if (void 0 === i) return 1;
          if (void 0 === l) return -1;
          let o = a.indexOf(i),
            s = a.indexOf(l),
            u = -1 !== o,
            c = -1 !== s;
          if (u && c) return o - s;
          if (u && !c) return -1;
          if (!u && c) return 1;
          switch (n) {
            case t.RAQIV2BreakdownValueOrder.SortByValueAlphabetically:
              return v(e, r);
            case t.RAQIV2BreakdownValueOrder.SortBySum:
              return (
                (0, A.default)(
                  "SortBySum is not supported for partial ordering yet, implement it later"
                ),
                0
              );
            case t.RAQIV2BreakdownValueOrder.Unsorted:
            case void 0:
              return 0;
            default:
              throw Error("Unknown remaining sort ".concat(n));
          }
        };
      },
      T = (e) =>
        e
          .map((e) => [
            e.dataPoints.reduce((e, t) => {
              var a;
              return e + (null != (a = t[1]) ? a : 0);
            }, 0),
            e
          ])
          .sort((e, t) =>
            e[1].isTotalSeries && !t[1].isTotalSeries
              ? -1
              : !e[1].isTotalSeries && t[1].isTotalSeries
                ? 1
                : t[0] - e[0]
          )
          .map((e) => {
            let [, t] = e;
            return t;
          }),
      b = (e, a, n) => {
        var r, i;
        let l =
          n === t.RAQIV2BreakdownValueOrder.SortByValueAlphabetically
            ? v
            : R({
                ordering: null != (r = null != (i = n.completeOrder) ? i : n.partialOrder) ? r : [],
                remainingSort: n.remainingSort
              });
        e.sort((e, t) =>
          e.isTotalSeries && !t.isTotalSeries
            ? -1
            : !e.isTotalSeries && t.isTotalSeries
              ? 1
              : l(
                  e.breakdownValues.find((e) => {
                    let { dimension: t } = e;
                    return t === a;
                  }),
                  t.breakdownValues.find((e) => {
                    let { dimension: t } = e;
                    return t === a;
                  })
                )
        );
      },
      h = (e, a) => {
        let { breakdown: n } = a,
          r = [...e];
        if (!n || !n.length) return r;
        for (let e = n.length - 1; e >= 0; e -= 1) {
          let a = n[e],
            i = t.RAQIV2DimensionDisplayConfig[a].breakdownOrdering;
          if (i === t.RAQIV2BreakdownValueOrder.Unsorted) break;
          if (i === t.RAQIV2BreakdownValueOrder.SortBySum) return T(r);
          b(r, a, i);
        }
        return r;
      };
    e.s(
      [
        "default",
        0,
        h,
        "dimensionAlphabeticalSort",
        0,
        v,
        "makePartialOrderSortFunction",
        0,
        R,
        "sortInPlaceByBreakdownOrdering",
        0,
        b
      ],
      725613
    );
    let I = (e, t) => {
        let { displayValue: a, value: n } = e;
        if (a) return { name: a };
        let { translate: r } = t;
        return n ? { name: n } : { name: r(y.default[i.RAQIV2ReservedDimensionValues.Unknown]) };
      },
      M = (e, a) => {
        let { displayValue: n, value: r, dimension: l } = e;
        return l &&
          ((0, s.isValidEnumValue)(t.RAQIV2Dimension, l) ||
            (0, s.isValidEnumValue)(t.RAQIV2UIPseudoDimension, l))
          ? ((e, t, a) => {
              let { value: n } = t;
              if (!n) {
                let { translate: e } = a;
                return { name: e(y.default[i.RAQIV2ReservedDimensionValues.Unknown]) };
              }
              if ((0, s.isValidEnumValue)(i.RAQIV2ReservedDimensionValues, n)) {
                let { translate: e } = a;
                return { name: e(y.default[n]) };
              }
              let { getBreakdownValueName: r, getBreakdownValueTooltip: l } = (0, u.default)(e),
                o = { ...t, value: n };
              return { name: r(o, a), tooltip: l(o, a) };
            })(l, e, a)
          : I({ value: r, displayValue: n }, a);
      },
      S = (e, t) => {
        let { translate: n } = t;
        if (0 === e.length)
          return n((0, a.translationKey)("Label.Total", o.TranslationNamespace.Analytics));
        let r = (0, d.default)(e, t);
        return r || e.map((e) => M(e, t).name).join(", ");
      },
      D = function (e, t, a) {
        let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          r = new Set();
        return (
          e.forEach((e) => {
            let { dataPoints: i } = e;
            void 0 !== i &&
              i.forEach((e) => {
                let { time: i } = e;
                void 0 !== i &&
                  (n ||
                    (new Date(i).getTime() >= t.getTime() &&
                      new Date(i).getTime() <= a.getTime())) &&
                  r.add(new Date(i).getTime());
              });
          }),
          r
        );
      };
    e.s(
      [
        "buildBreakdownColumnNames",
        0,
        (e, t, a, n) => {
          if (0 === a.length) return [e];
          if (0 === t.length) return [e, ...a.slice(1).map(() => "")];
          let r = new Map();
          for (let e of t) e.dimension && r.set(e.dimension, M(e, n).name);
          return a.map((e) => {
            var t;
            return null != (t = r.get(e)) ? t : "";
          });
        },
        "buildChartUnitOptions",
        0,
        (e, t) => ({
          display: (0, f.getDisplayUnitFromMetricLike)(e.metric, t),
          formattingSpec: (0, g.generateAnalyticsNumberFormattingSpec)({
            metric: e.metric,
            context: n.NumberContext.DataPoint,
            numberContextMetadata: { chartSpec: e }
          })
        }),
        "getBreakdownName",
        0,
        S,
        "getFirstDataPointValue",
        0,
        (e) => (0 === e.length ? null : e[0][1]),
        "getSingleDimensionBreakdownLabel",
        0,
        M,
        "ingestAllRaqiV2Series",
        0,
        (e) => {
          var a, n;
          let { response: i, spec: o, translationDependencies: s, granularity: d } = e,
            y = null != (a = null == i ? void 0 : i.values) ? a : [],
            g = null != (n = o.timeSpec.snapGranularity) ? n : d,
            f = (0, V.snapToLatestStartTime)(o.timeSpec.startTime, g),
            A = (0, V.snapToLatestEndTime)(o.timeSpec.endTime, g),
            v = d !== t.RAQIV2MetricGranularity.None,
            R = D(y, f, A, !v),
            T = v
              ? ((e, t, a) => {
                  if (!e.size) return [];
                  let n = Array.from(e.values()).sort((e, t) => e - t),
                    i = [],
                    l = n[0],
                    o = Math.min(n[n.length - 1], a.getTime());
                  for (; o >= l;) (i.push(o), (o = (0, r.default)(o, t)));
                  return i.toReversed();
                })(R, d, o.timeSpec.endTime)
              : Array.from(R),
            b = (0, p.isComputedMetric)(o.metric)
              ? null
              : (0, c.default)((0, p.getUIMetricFromAtomicMetricLike)(o.metric)),
            I = (null == b ? void 0 : b.fillMissingDatapoints) !== !1,
            M = h(
              y.map((e) =>
                ((e, a, n, r) => {
                  var i, o, s, c, m, d;
                  let y,
                    p,
                    g,
                    f = S(null != (i = e.breakdownValue) ? i : [], n),
                    { dataPoints: V, zones: A } =
                      ((y = new Map(
                        null !=
                          (m =
                            null == (d = e.dataPoints)
                              ? void 0
                              : d
                                  .filter((e) => {
                                    let { time: t } = e;
                                    return void 0 !== t;
                                  })
                                  .map((e) => {
                                    let { time: t, value: a, status: n } = e;
                                    return [new Date(t).getTime(), { value: a, status: n }];
                                  }))
                          ? m
                          : []
                      )),
                      (p = a.map((e) => {
                        let t,
                          a = y.get(e);
                        return [
                          e,
                          void 0 === a ? (r ? 0 : null) : a.value,
                          (t = null == a ? void 0 : a.status) === l.AnalyticsDataStatus.Valid ||
                          t === l.AnalyticsDataStatus.Invalid ||
                          null == t
                            ? l.AnalyticsDataStatus.Valid
                            : t
                        ];
                      })),
                      (g = []),
                      p.forEach((e, t) => {
                        let a = e[0],
                          n = e[2];
                        if (0 === t) return void g.push({ start: a, end: a, status: n });
                        let r = g[g.length - 1];
                        n === r.status ? (r.end = a) : g.push({ start: a, end: a, status: n });
                      }),
                      {
                        dataPoints: p,
                        zones: g.filter((e) => e.status !== l.AnalyticsDataStatus.Valid)
                      });
                  return {
                    name: f,
                    dataPoints: V,
                    isTotalSeries: 0 === (null != (o = e.breakdownValue) ? o : []).length,
                    breakdownValues: null != (s = e.breakdownValue) ? s : [],
                    imageUrl: ((e, a) => {
                      let n = e.filter((e) => {
                        let { value: a, dimension: n } = e;
                        return n === t.RAQIV2Dimension.ThumbnailAsset && !!a;
                      });
                      if (0 === n.length) return;
                      let r = n[0],
                        { getBreakdownValueImageUrl: i } = (0, u.default)(
                          t.RAQIV2Dimension.ThumbnailAsset
                        );
                      if (i) return i(r, a);
                    })(null != (c = e.breakdownValue) ? c : [], n),
                    zones: A
                  };
                })(e, T, s, I)
              ),
              o
            );
          if (b && b.valueType === t.RAQIV2MetricValueType.Numeric && b.dataPointTransformerType) {
            let e = m.default[b.dataPointTransformerType];
            return {
              series: M.map((t) => {
                let { dataPoints: a } = t;
                return {
                  ...t,
                  dataPoints: a.map((t, n) => {
                    let [, r] = t;
                    return null !== r ? e(n, a) : t;
                  })
                };
              }),
              timestamps: T
            };
          }
          return { series: M, timestamps: T };
        },
        "ingestRaqiV2ComparisonSeries",
        0,
        (e) => {
          let {
              rawComparisonSeries: t,
              translationDependencies: n,
              originalTimestamps: r,
              alignment: i = "end"
            } = e,
            { translate: l } = n,
            s = [];
          return (
            t.forEach((e) => {
              let { dataPoints: t, ...n } = e,
                u = t;
              if (t.length < r.length) return;
              if (t.length > r.length) {
                let e = t.length - r.length;
                u = "start" === i ? t.slice(0, r.length) : t.slice(e);
              }
              let c = [];
              for (let e = 0; e < r.length; e += 1) {
                let t = e > 0 ? r[e] - r[e - 1] : null,
                  [a, n, i] = u[e];
                if (t !== (e > 0 ? a - u[e - 1][0] : null))
                  return void console.error(
                    "Comparison series does not have the same interval lengths as original series"
                  );
                let l = [r[e], n, i];
                c.push(l);
              }
              c.some((e) => {
                let [, t] = e;
                return null != t && 0 !== t;
              }) &&
                s.push({
                  ...n,
                  name: l(
                    (0, a.translationKey)("Label.Comparison", o.TranslationNamespace.Analytics),
                    { series: n.name }
                  ),
                  dataPoints: c,
                  isComparisonSeries: !0
                });
            }),
            s
          );
        }
      ],
      611754
    );
  },
  809395,
  (e) => {
    "use strict";
    var t = e.i(221628),
      a = e.i(31611),
      n = e.i(730530),
      r = e.i(594193),
      i = e.i(864392),
      l = e.i(570796),
      o = e.i(881670),
      s = e.i(726474),
      u = e.i(927868),
      c = e.i(339923),
      m = e.i(328712);
    let d = (e) => ({
        name: e,
        getBreakdownValueName: (e) => {
          let { value: t, displayValue: a } = e;
          return a || t;
        },
        getBreakdownValueTooltip: () => {}
      }),
      y = {
        name: (0, n.translationKey)("Label.Dimension.Country", o.TranslationNamespace.Analytics),
        getBreakdownValueName: (e, t) => {
          var a;
          let { value: n } = e,
            { countryNamesMap: r } = t;
          return null != (a = r.get(n)) ? a : n;
        },
        getBreakdownValueTooltip: () => {}
      },
      p = {
        name: (0, n.translationKey)("Label.Dimension.Locale", o.TranslationNamespace.Analytics),
        getBreakdownValueName: (e, t) => {
          let { value: a } = e,
            { localesMap: n } = t,
            r = n.get(a);
          return r || a;
        },
        getBreakdownValueTooltip: () => {}
      },
      g = {
        name: (0, n.translationKey)("Label.Dimension.Place", o.TranslationNamespace.Analytics),
        getBreakdownValueName(e, t) {
          let { value: a, displayValue: r } = e,
            { translate: i } = t;
          return "-1" === a
            ? i((0, n.translationKey)("Label.InGameCreated", o.TranslationNamespace.Analytics))
            : r
              ? "".concat(r, " (").concat(a, ")")
              : a;
        },
        getBreakdownValueTooltip: () => {},
        renderEmpty: (e) => {
          let { translate: t } = e;
          return t((0, n.translationKey)("Label.Experience", o.TranslationNamespace.Analytics));
        }
      },
      f = {
        name: (0, n.translationKey)("Label.Dimension.FunnelStep", o.TranslationNamespace.Analytics),
        getBreakdownValueName(e, t) {
          let { value: a, displayValue: r } = e,
            { translate: i } = t,
            l =
              null != r
                ? r
                : i(
                    (0, n.translationKey)(
                      "Label.DimensionValue.FunnelStep",
                      o.TranslationNamespace.Analytics
                    ),
                    { step: a }
                  );
          return "".concat(a, ". ").concat(l);
        },
        getBreakdownValueTooltip: () => {}
      },
      V = {
        ...d(
          (0, n.translationKey)("Label.Dimension.ThumbnailAsset", o.TranslationNamespace.Analytics)
        ),
        getBreakdownValueImageUrl: (e, t) => {
          let { value: a } = e,
            { thumbnailUrlsMap: n } = t;
          return null == n ? void 0 : n.get(a);
        }
      },
      A = {
        name: (0, n.translationKey)(
          "Label.Dimension.UniverseName",
          o.TranslationNamespace.Analytics
        ),
        getBreakdownValueName: (e, t) => {
          var r;
          let { value: i } = e,
            { universeNamesMap: l, translate: s } = t;
          return i === a.RAQIV2Universe.Website
            ? s(
                (0, n.translationKey)(
                  "Label.Dimension.Universe.Website",
                  o.TranslationNamespace.Analytics
                )
              )
            : null != (r = l.get(i))
              ? r
              : i;
        },
        getBreakdownValueTooltip: () => {}
      },
      v = {
        ...d((0, n.translationKey)("Label.Dimension.CohortDay", o.TranslationNamespace.Analytics)),
        getBreakdownValueName: (e, t) => {
          let { value: a } = e,
            { translate: r } = t;
          return r(
            (0, n.translationKey)("Label.Dimension.CohortDay", o.TranslationNamespace.Analytics),
            { day: a }
          );
        }
      },
      R = {
        ...d((0, n.translationKey)("Label.Dimension.CohortWeek", o.TranslationNamespace.Analytics)),
        getBreakdownValueName: (e, t) => {
          let { value: a } = e,
            { translate: r } = t;
          return r(
            (0, n.translationKey)("Label.Dimension.CohortWeek", o.TranslationNamespace.Analytics),
            { week: a }
          );
        }
      },
      T = (e, t) => {
        let { value: a } = e,
          { locale: n } = t;
        return new Date(Number(a)).toLocaleString([n, "en-us"], {
          year: "numeric",
          month: "numeric",
          day: "numeric"
        });
      },
      b = {
        ...d(
          (0, n.translationKey)("Label.Dimension.StartTimeUtc", o.TranslationNamespace.Analytics)
        ),
        getBreakdownValueName: T
      },
      h = {
        ...d((0, n.translationKey)("Label.Dimension.EndTimeUtc", o.TranslationNamespace.Analytics)),
        getBreakdownValueName: T
      },
      I = (e, t) => {
        let { value: a } = e,
          { translate: r } = t;
        return a === m.TOP_N_OTHER_BREAKDOWN_VALUE
          ? r(
              (0, n.translationKey)(
                "Label.Dimension.PlaceVersion.Previous",
                o.TranslationNamespace.Analytics
              )
            )
          : r(
              (0, n.translationKey)(
                "Label.Dimension.PlaceVersion.Value",
                o.TranslationNamespace.Analytics
              ),
              { versionNumber: a }
            );
      },
      M = {
        ...d(
          (0, n.translationKey)("Label.Dimension.PlaceVersion", o.TranslationNamespace.Analytics)
        ),
        getBreakdownValueName: I,
        getEmptyFilterValuesTooltip: (e) => {
          let { translate: t } = e;
          return t(
            (0, n.translationKey)("Label.NoVersionAvailable", o.TranslationNamespace.Analytics)
          );
        }
      },
      S = {
        ...d(
          (0, n.translationKey)(
            "Label.Dimension.FirstSeenPlaceVersion",
            o.TranslationNamespace.Analytics
          )
        ),
        getBreakdownValueName: I,
        renderEmpty: (e) => {
          let { translate: t } = e;
          return t((0, n.translationKey)("Label.SelectVersion", o.TranslationNamespace.Analytics));
        },
        getEmptyFilterValuesTooltip: (e) => {
          let { translate: t } = e;
          return t(
            (0, n.translationKey)("Label.NoVersionAvailable", o.TranslationNamespace.Analytics)
          );
        }
      },
      D = {
        [a.RAQIV2Dimension.UserSegmentationPayerStatus]:
          s.docs.getAnalyticsFilterByMetricsGuideUrl()
      },
      w = {
        name: (0, n.translationKey)(
          "Label.Dimension.AnnouncementId",
          o.TranslationNamespace.Analytics
        ),
        getBreakdownValueName: (e, t) => {
          var a;
          let { value: n } = e,
            { announcementNamesMap: r } = t;
          return (0, c.brandUserSuppliedText)(null != (a = r.get(n)) ? a : n);
        },
        getBreakdownValueTooltip: () => void 0
      },
      Q = {
        name: (0, n.translationKey)(
          "Label.Dimension.AnnouncementPublishDate",
          o.TranslationNamespace.Analytics
        ),
        getBreakdownValueName: (e, t) => {
          let { value: a } = e,
            { locale: n } = t,
            r = Number(a);
          return !r || isNaN(r)
            ? (0, c.brandUserSuppliedText)(a)
            : (0, c.brandUserSuppliedText)(
                new Date(r).toLocaleString([n, "en-us"], {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  timeZone: "UTC"
                })
              );
        },
        getBreakdownValueTooltip: () => void 0
      },
      N = {
        LMaaS: (0, n.translationKey)(
          "Label.WorkflowType.TextGeneration",
          o.TranslationNamespace.Analytics
        ),
        ModelGenWorkflow: (0, n.translationKey)(
          "Label.WorkflowType.3DModelGeneration",
          o.TranslationNamespace.Analytics
        )
      },
      x = {
        ...d(
          (0, n.translationKey)("Label.Dimension.JourneyVersion", o.TranslationNamespace.Analytics)
        ),
        getBreakdownValueName: (e, t) => {
          let { value: a } = e,
            { locale: n } = t,
            i = Number(a);
          if (!Number.isFinite(i)) return a;
          let l = new Date(i > 1e12 ? i : 1e3 * i);
          return Number.isNaN(l.getTime()) ? a : (0, r.formatShortDateTimeWithoutYear)(l, n);
        }
      },
      C = {
        ...d(
          (0, n.translationKey)("Label.Dimension.WorkflowType", o.TranslationNamespace.Analytics)
        ),
        getBreakdownValueName: (e, t) => {
          let { value: a, displayValue: n } = e,
            { translate: r } = t;
          return n || (N[a] ? r(N[a]) : a);
        }
      },
      U = (0, i.default)((e) => {
        if (e === a.RAQIV2Dimension.JourneyVersion) return x;
        if (e === a.RAQIV2Dimension.AnnouncementId) return w;
        if (e === a.RAQIV2Dimension.AnnouncementPublishDate) return Q;
        if (e === a.RAQIV2Dimension.WorkflowType) return C;
        if (e === a.RAQIV2Dimension.FirstSeenPlaceVersion) return S;
        let { renderer: n, valueType: r, name: i } = a.RAQIV2DimensionDisplayConfig[e],
          o = D[e];
        if ("string" == typeof n && (0, u.isValidEnumValue)(a.RAQIV2SpecialDimensionRenderer, n))
          return {
            ...((e) => {
              switch (e) {
                case a.RAQIV2SpecialDimensionRenderer.FunnelStep:
                  return f;
                case a.RAQIV2SpecialDimensionRenderer.Place:
                  return g;
                case a.RAQIV2SpecialDimensionRenderer.Locale:
                  return p;
                case a.RAQIV2SpecialDimensionRenderer.Country:
                  return y;
                case a.RAQIV2SpecialDimensionRenderer.Thumbnail:
                  return V;
                case a.RAQIV2SpecialDimensionRenderer.Universe:
                  return A;
                case a.RAQIV2SpecialDimensionRenderer.CohortDay:
                  return v;
                case a.RAQIV2SpecialDimensionRenderer.CohortWeek:
                  return R;
                case a.RAQIV2SpecialDimensionRenderer.ExperienceEventStartTime:
                  return b;
                case a.RAQIV2SpecialDimensionRenderer.ExperienceEventEndTime:
                  return h;
                case a.RAQIV2SpecialDimensionRenderer.PlaceVersion:
                  return M;
                default:
                  throw Error("Unknown special dimension renderer: ".concat(e));
              }
            })(n),
            name: i
          };
        switch (r) {
          case a.RAQIV2DimensionValueType.DynamicWithPreset:
          case a.RAQIV2DimensionValueType.Enum:
            var s, c, m, T;
            return (
              (s = n.breakdownValueKeys),
              (c = a.RAQIV2DimensionDisplayConfig[e].dimensionValues),
              (m = n.emptyFilterKey),
              (T = n.dimensionDescriptionKey),
              {
                name: i,
                getBreakdownDescription: T
                  ? (e) => {
                      let { translate: a, translateHTML: n } = e;
                      return o
                        ? n(T, [
                            {
                              opening: "linkStart",
                              closing: "linkEnd",
                              content: (e) => (0, t.jsx)(l.Link, { href: o, children: e })
                            }
                          ])
                        : a(T);
                    }
                  : void 0,
                getBreakdownValueName: (e, t) => {
                  let { value: a, displayValue: n } = e,
                    { translate: r } = t;
                  return n || ((0, u.isValidEnumValue)(c, a) ? r(s[a].name) : a);
                },
                getBreakdownValueTooltip: (e, t) => {
                  let { value: a } = e,
                    { translate: n } = t;
                  if ((0, u.isValidEnumValue)(c, a)) {
                    let e = s[a];
                    return e.tooltip ? n(e.tooltip) : void 0;
                  }
                },
                getBreakdownValueTooltipWithLink: (e, a, n) => {
                  let { value: r } = e;
                  if ((0, u.isValidEnumValue)(c, r)) {
                    let e = s[r];
                    return e.tooltip
                      ? a(e.tooltip, [
                          {
                            opening: "linkStart",
                            closing: "linkEnd",
                            content: (e) => (0, t.jsx)(l.Link, { href: n, children: e })
                          }
                        ])
                      : null;
                  }
                  return null;
                },
                renderEmpty: m
                  ? (e) => {
                      let { translate: t } = e;
                      return t(m);
                    }
                  : void 0
              }
            );
          case a.RAQIV2DimensionValueType.Dynamic:
            return d(i);
          default:
            throw Error("Unknown dimension renderer type: ".concat(r));
        }
      });
    e.s(["default", 0, U]);
  },
  678937,
  700664,
  (e) => {
    "use strict";
    var t = e.i(31611),
      a = e.i(68629),
      n = e.i(927868),
      r = e.i(809395),
      i = e.i(730530),
      l = e.i(881670);
    let o = {
      [a.RAQIV2ReservedDimensionValues.Unknown]: (0, i.translationKey)(
        "Label.Unknown",
        l.TranslationNamespace.Analytics
      ),
      [a.RAQIV2ReservedDimensionValues.NoValue]: (0, i.translationKey)(
        "Label.NoValue",
        l.TranslationNamespace.Analytics
      )
    };
    e.s(["default", 0, o], 700664);
    let s = (e) => [...e].sort().join(","),
      u = (e, a) => {
        if (e.dimension && e.value && (0, n.isValidEnumValue)(t.RAQIV2Dimension, e.dimension)) {
          let { getBreakdownValueName: t } = (0, r.default)(e.dimension);
          return t({ ...e, value: e.value }, a);
        }
      },
      c = new Map(),
      m = s([t.RAQIV2Dimension.TransactionType, t.RAQIV2Dimension.FlowType]);
    c.set(m, {
      getBreakdownValueName: (e, n) => {
        let r = e.find((e) => e.dimension === t.RAQIV2Dimension.TransactionType),
          i = e.find((e) => e.dimension === t.RAQIV2Dimension.FlowType),
          l = r ? u(r, n) : void 0,
          s = i ? u(i, n) : void 0;
        return l && s
          ? "".concat(l, " (").concat(s, ")")
          : l || s || n.translate(o[a.RAQIV2ReservedDimensionValues.Unknown]);
      }
    });
    let d = s([t.RAQIV2Dimension.AvatarItemId, t.RAQIV2Dimension.AvatarItemTargetType]);
    (c.set(d, {
      getBreakdownValueName: (e, n) => {
        let r = e.find((e) => e.dimension === t.RAQIV2Dimension.AvatarItemId);
        if (!(null == r ? void 0 : r.value))
          return n.translate(o[a.RAQIV2ReservedDimensionValues.Unknown]);
        if (r.displayValue) return r.displayValue;
        let i = n.avatarItemNamesMap.get(r.value);
        return i || r.value;
      }
    }),
      e.s(
        [
          "default",
          0,
          (e, a) => {
            let r = e.map((e) => {
                let { dimension: t } = e;
                return t;
              }),
              i = [];
            if (
              (r.forEach((e) => {
                e && (0, n.isValidEnumValue)(t.RAQIV2Dimension, e) && i.push(e);
              }),
              i.length === r.length)
            ) {
              let t = s(i),
                n = c.get(t);
              if (n) return n.getBreakdownValueName(e, a);
            }
          }
        ],
        678937
      ));
  },
  978567,
  918100,
  670303,
  246696,
  (e) => {
    "use strict";
    var t,
      a = e.i(221628),
      n = e.i(416340),
      r = e.i(79187),
      i = e.i(874030),
      l = e.i(215955),
      o =
        (((t = o || {}).UnknownCountryCode = "analytics/errors/unknownCountryCode"),
        (t.UnknownLocaleCode = "analytics/errors/unknownLocaleCode"),
        (t.CountryMapRetrievalFailure = "analytics/errors/countryMapRetrievalFailure"),
        t);
    let s = function (e) {
        let { locale: t } = e,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default;
        a.logErrorEvent({
          eventName: "analytics/errors/countryMapRetrievalFailure",
          parameters: { locale_code: t }
        });
      },
      u = function (e) {
        let [t, a] = (0, n.useState)(() => new Map()),
          l = (0, r.toRobloxLocale)(null != e ? e : r.Locale.English),
          o = (0, n.useMemo)(() => ({ locale: l }), [l]);
        return (
          (0, n.useEffect)(() => {
            !(async function () {
              try {
                let e = await i.default.getCountryRegions(o);
                if (null == e.countryRegionList) return;
                let t = e.countryRegionList.reduce((e, t) => {
                  let a = null == t ? void 0 : t.code,
                    n = null == t ? void 0 : t.displayName;
                  return (void 0 !== a && void 0 !== n && e.set(a, n), e);
                }, new Map());
                a(t);
              } catch (e) {
                s({ locale: l });
              }
            })();
          }, [o, l]),
          t
        );
      };
    var c = e.i(452791);
    let m = (0, n.createContext)({ locale: r.Locale.English });
    m.displayName = "LocaleContext";
    let d = () => (0, n.useContext)(m);
    e.s(
      [
        "LocaleProvider",
        0,
        (e) => {
          let { children: t } = e,
            r = (0, c.default)(),
            i = (0, n.useMemo)(() => ({ locale: r }), [r]);
          return (0, a.jsx)(m.Provider, { value: i, children: t });
        },
        "useLocaleFromContext",
        0,
        d
      ],
      918100
    );
    let y = (0, n.createContext)({ countryNamesMap: new Map() });
    ((y.displayName = "CountryMapContext"),
      e.s(
        [
          "CountryMapProvider",
          0,
          (e) => {
            let { children: t } = e,
              { locale: r } = d(),
              i = u(r),
              l = (0, n.useMemo)(() => ({ countryNamesMap: i }), [i]);
            return (0, a.jsx)(y.Provider, { value: l, children: t });
          },
          "useCountryMapFromContext",
          0,
          () => (0, n.useContext)(y)
        ],
        978567
      ));
    var p = e.i(56397);
    let g = (0, n.createContext)({ languagesMap: new Map(), localesMap: new Map() });
    ((g.displayName = "LocaleMapContext"),
      e.s(
        [
          "LocaleMapProvider",
          0,
          (e) => {
            let { children: t } = e,
              { locale: n } = d(),
              r = (0, p.useLocaleMapGivenCurrentLanguage)(n);
            return (0, a.jsx)(g.Provider, { value: r, children: t });
          },
          "useLocaleMapFromContext",
          0,
          () => (0, n.useContext)(g)
        ],
        670303
      ));
    var f = e.i(157310),
      V = e.i(620140),
      A = e.i(540513);
    let v = new Map(),
      R = (0, n.createContext)({ thumbnailUrlsMap: new Map(), addAssetIds: () => {} });
    ((R.displayName = "LocaleMapContext"),
      e.s(
        [
          "ThumbnailUrlsMapProvider",
          0,
          (e) => {
            var t;
            let r,
              { children: i } = e,
              [l, o] = (0, n.useState)(new Set()),
              { data: s } =
                ((t = Array.from(l)),
                (r = (0, n.useCallback)(
                  (e) =>
                    0 === e.length
                      ? v
                      : e.reduce(
                          (e, t) => (
                            t.targetId && t.imageUrl && e.set(t.targetId.toString(), t.imageUrl),
                            e
                          ),
                          new Map()
                        ),
                  []
                )),
                (0, f.useQuery)({
                  queryKey: ["thumbnailUrls", t],
                  queryFn: async () => {
                    let e = (0, A.getThumbnailsClient)(),
                      { data: a } = await e.getAssets(
                        t,
                        V.V1AssetsGetReturnPolicyEnum.PlaceHolder,
                        V.V1AssetsGetSizeEnum._768x432,
                        V.V1AssetsGetFormatEnum.Webp,
                        !1
                      );
                    return null != a ? a : [];
                  },
                  initialData: [],
                  select: r,
                  enabled: t.length > 0
                })),
              u = (0, n.useCallback)(
                (e) => {
                  let t = new Set(e.filter((e) => !Number.isNaN(e)));
                  o(
                    (e) => (
                      e.forEach((e) => {
                        t.add(e);
                      }),
                      t
                    )
                  );
                },
                [o]
              ),
              c = (0, n.useMemo)(() => ({ thumbnailUrlsMap: s, addAssetIds: u }), [s, u]);
            return (0, a.jsx)(R.Provider, { value: c, children: i });
          },
          "useThumbnailUrlsMapFromContext",
          0,
          () => (0, n.useContext)(R)
        ],
        246696
      ));
  },
  138080,
  (e) => {
    "use strict";
    var t = e.i(221628),
      a = e.i(416340),
      n = e.i(773057),
      r = e.i(900953);
    let i = (0, a.createContext)({ universeNamesMap: new Map(), addUniverseIds: () => {} });
    i.displayName = "UniverseNameMapContext";
    let l = (e) => e.toString(),
      o = async (e) => {
        try {
          var t;
          let a = await n.default.getUniversesDetails(e),
            r = new Map();
          return (
            null == (t = a.data) ||
              t.forEach((e) => {
                void 0 !== e.id && e.name && r.set(e.id.toString(), e.name);
              }),
            r
          );
        } catch (e) {
          return new Map();
        }
      };
    e.s([
      "UniverseNameMapProvider",
      0,
      (e) => {
        let { children: n } = e,
          [s, u] = (0, a.useState)(new Set()),
          c = (0, r.default)({ ids: s, batchSize: 100, fetchBatch: o, toKey: l }),
          m = (0, a.useCallback)(
            (e) => {
              let t = e.filter((e) => e > 0 && !s.has(e));
              if (!t.length) return;
              let a = new Set(s);
              (t.forEach((e) => a.add(e)), u(a));
            },
            [s, u]
          ),
          d = (0, a.useMemo)(() => ({ universeNamesMap: c, addUniverseIds: m }), [c, m]);
        return (0, t.jsx)(i.Provider, { value: d, children: n });
      },
      "useUniverseNameMapFromContext",
      0,
      () => (0, a.useContext)(i)
    ]);
  },
  900953,
  (e) => {
    "use strict";
    var t = e.i(416340);
    e.s([
      "default",
      0,
      (e) => {
        let { ids: a, batchSize: n, fetchBatch: r, toKey: i, enabled: l = !0, resetKey: o } = e,
          [s, u] = (0, t.useState)(() => new Map()),
          [c, m] = (0, t.useState)(() => new Set()),
          [d, y] = (0, t.useState)(o);
        d !== o && (y(o), u(new Map()), m(new Set()));
        let p = (0, t.useMemo)(
          () => Array.from(a).filter((e) => !s.has(i(e)) && !c.has(e)),
          [c, a, s, i]
        );
        return (
          (0, t.useEffect)(() => {
            if (!p.length || !l) return;
            let e = !1,
              t = p.slice(0, n);
            return (
              r(t).then((a) => {
                if (e) return;
                a.size > 0 &&
                  u((e) => {
                    let t = new Map(e);
                    return (
                      a.forEach((e, a) => {
                        t.set(a, e);
                      }),
                      t
                    );
                  });
                let n = t.filter((e) => !a.has(i(e)));
                n.length > 0 &&
                  m((e) => {
                    let t = new Set(e);
                    return (n.forEach((e) => t.add(e)), t);
                  });
              }),
              () => {
                e = !0;
              }
            );
          }, [n, l, r, p, i]),
          s
        );
      }
    ]);
  },
  667614,
  (e) => {
    "use strict";
    var t = e.i(31611),
      a = e.i(917403),
      n = e.i(730530),
      r = e.i(761551),
      i = e.i(168070),
      l = e.i(577038),
      o = e.i(881670),
      s = e.i(215928),
      u = e.i(908374),
      c = e.i(548152),
      m = e.i(11517);
    let d = {
        [t.RAQIV2MetricUnit.Bytes]: {
          defaultSuffix: (0, n.translationKey)(
            "Label.BytesSuffix",
            o.TranslationNamespace.Analytics
          )
        },
        [t.RAQIV2MetricUnit.Days]: {
          defaultSuffix: (0, n.translationKey)("Label.DaysSuffix", o.TranslationNamespace.Analytics)
        },
        [t.RAQIV2MetricUnit.Gigabytes]: {
          defaultSuffix: (0, n.translationKey)(
            "Label.GigabytesSuffix",
            o.TranslationNamespace.Analytics
          )
        },
        [t.RAQIV2MetricUnit.Hours]: {
          defaultSuffix: (0, n.translationKey)(
            "Label.HoursSuffix",
            o.TranslationNamespace.Analytics
          )
        },
        [t.RAQIV2MetricUnit.Kilobytes]: {
          defaultSuffix: (0, n.translationKey)(
            "Label.KilobytesSuffix",
            o.TranslationNamespace.Analytics
          )
        },
        [t.RAQIV2MetricUnit.Megabytes]: {
          defaultSuffix: (0, n.translationKey)(
            "Label.MegabytesSuffix",
            o.TranslationNamespace.Analytics
          )
        },
        [t.RAQIV2MetricUnit.Milliseconds]: {
          defaultSuffix: (0, n.translationKey)(
            "Label.MillisecondsSuffix",
            o.TranslationNamespace.Analytics
          )
        },
        [t.RAQIV2MetricUnit.Minutes]: {
          defaultSuffix: (0, n.translationKey)(
            "Label.MinsSuffix",
            o.TranslationNamespace.Analytics
          ),
          longSuffix: (0, n.translationKey)("Label.MinutesSuffix", o.TranslationNamespace.Analytics)
        },
        [t.RAQIV2MetricUnit.Seconds]: {
          defaultSuffix: (0, n.translationKey)(
            "Label.SecondsSuffix",
            o.TranslationNamespace.Analytics
          )
        }
      },
      y = {
        [t.RAQIV2MetricUnit.Usd]: { currency: "USD", style: "currency" },
        [t.RAQIV2MetricUnit.Percentage01]: { style: "percent" },
        [t.RAQIV2MetricUnit.Percentage0100]: { style: "percent" }
      },
      p = new Set([t.RAQIV2AggregationType.Count, t.RAQIV2AggregationType.CountUser]),
      g = (e) => {
        let { metric: n, context: o, numberContextMetadata: f } = e;
        if (o === r.NumberContext.ChartSummary && (null == f ? void 0 : f.chartSummaryType)) {
          let e = ((e) => {
            switch (e) {
              case l.default.QuotaPercentageUsage:
              case l.default.GrowthRate:
                return i.percentageFormattingSpec;
              case l.default.Average:
              case l.default.Total:
              case l.default.TotalAbsoluteValue:
              case l.default.SinglePoint:
              case l.default.TopBreakdown:
              case l.default.LastValue:
                return;
              default:
                throw Error("Unsupported summary type ".concat(e));
            }
          })(f.chartSummaryType);
          if (e) return e;
        }
        if ((0, m.isComputedMetric)(n))
          return (0, s.isPureL7SmoothingComputedMetric)(n)
            ? g({ metric: n.sources[0].metric, context: o, numberContextMetadata: f })
            : {
                abbreviate:
                  "abbreviate" ===
                  ((e) => {
                    switch (e) {
                      case r.NumberContext.CardSummary:
                      case r.NumberContext.TableSummary:
                        return "abbreviate";
                      case r.NumberContext.DataPoint:
                      case r.NumberContext.TableDataPoint:
                      case r.NumberContext.ChartSummary:
                      case r.NumberContext.TabSummary:
                      case r.NumberContext.AchievementHeader:
                        return "none";
                      default:
                        throw Error("Unsupported context ".concat(e));
                    }
                  })(o),
                numberFormatOptions: { minimumFractionDigits: 0, maximumFractionDigits: 3 }
              };
        let V = (0, m.getUIMetricFromAtomicMetricLike)(n),
          A = (0, u.default)(V),
          v = ((e, a) => {
            let n = (0, u.default)(e);
            if (n.valueType !== t.RAQIV2MetricValueType.Numeric)
              throw Error("Metric ".concat(e, " is not a numeric metric"));
            let { unit: i } = n;
            if (i === t.RAQIV2MetricUnit.Percentage01 || i === t.RAQIV2MetricUnit.Percentage0100)
              return "none";
            switch (a) {
              case r.NumberContext.DataPoint:
                return "none";
              case r.NumberContext.TableDataPoint:
                if (
                  i === t.RAQIV2MetricUnit.Hours ||
                  i === t.RAQIV2MetricUnit.Minutes ||
                  i === t.RAQIV2MetricUnit.Seconds
                )
                  return "shortSuffix";
                return "none";
              case r.NumberContext.ChartSummary:
                if (i === t.RAQIV2MetricUnit.Minutes || i === t.RAQIV2MetricUnit.Number)
                  return "shortSuffix";
                return "longSuffix";
              case r.NumberContext.TabSummary:
                return "shortSuffix";
              case r.NumberContext.CardSummary:
              case r.NumberContext.TableSummary:
                if (
                  i === t.RAQIV2MetricUnit.Hours ||
                  i === t.RAQIV2MetricUnit.Minutes ||
                  i === t.RAQIV2MetricUnit.Seconds ||
                  i === t.RAQIV2MetricUnit.Gigabytes
                )
                  return "shortSuffix";
                return "abbreviate";
              case r.NumberContext.AchievementHeader:
                return "none";
              default:
                throw Error("Unsupported context ".concat(a));
            }
          })(V, o),
          { unit: R, specialNumberFormatting: T, decimalPrecision: b } = A,
          h = ((e, a, n, r) => {
            let i =
              (0, u.isRAQIV2UIMetric)(e) && e in t.RAQIV2UIMetricToAPIConfig
                ? t.RAQIV2UIMetricToAPIConfig[e]
                : void 0;
            if (!i || i.dimension !== t.RAQIV2UIPseudoDimension.AggregationType) return a;
            let l = (0, m.isCustomEventsAtomicMetricLike)(n) ? n.aggregationType : void 0,
              o = (() => {
                var e;
                let a =
                  null == r || null == (e = r.filter)
                    ? void 0
                    : e.find((e) => e.dimension === t.RAQIV2UIPseudoDimension.AggregationType);
                if (a && 1 === a.values.length) return a.values[0];
              })(),
              s = null != l ? l : o;
            return !s || p.has(s) ? a : Math.max(a, 2);
          })(V, b, n, null == f ? void 0 : f.chartSpec),
          I = { minimumFractionDigits: Math.min(h, 3), maximumFractionDigits: h, ...y[R] },
          M = ((0, u.default)(V), null),
          S = ((e, t) => {
            var n, r, i, l, o, s, c, m, y, p;
            let g = (0, u.default)(e);
            if ("shortSuffix" === t) {
              let e =
                null != (n = null == (r = g.suffix) ? void 0 : r.short)
                  ? n
                  : null == (i = d[g.unit])
                    ? void 0
                    : i.defaultSuffix;
              if (e)
                return {
                  type: a.TranslationKeyOrFormattedTextType.PredefinedTranslationKey,
                  key: e
                };
            }
            if ("longSuffix" === t) {
              let e =
                null !=
                (l =
                  null !=
                  (o =
                    null != (s = null == (c = g.suffix) ? void 0 : c.long)
                      ? s
                      : null == (m = d[g.unit])
                        ? void 0
                        : m.longSuffix)
                    ? o
                    : null == (y = g.suffix)
                      ? void 0
                      : y.short)
                  ? l
                  : null == (p = d[g.unit])
                    ? void 0
                    : p.defaultSuffix;
              if (e)
                return {
                  type: a.TranslationKeyOrFormattedTextType.PredefinedTranslationKey,
                  key: e
                };
            }
            return null;
          })(V, v);
        if (T === c.default.InExperienceCurrency) {
          let e = ((e) => {
            var a, n;
            if (!e) return "";
            let r =
              null == (n = e.filter) ||
              null == (a = n.find((e) => e.dimension === t.RAQIV2Dimension.CurrencyType))
                ? void 0
                : a.values;
            return (null == r ? void 0 : r.length) === 1 ? "".concat(r[0]) : "";
          })(null == f ? void 0 : f.chartSpec);
          S =
            "shortSuffix" === v || "longSuffix" === v
              ? { type: a.TranslationKeyOrFormattedTextType.DynamicFormattedText, text: e }
              : null;
        }
        return {
          abbreviate: "abbreviate" === v,
          prefix: null != M ? M : void 0,
          suffix: null != S ? S : void 0,
          numberFormatOptions: I,
          icon: ((e) => {
            if (e === t.RAQIV2MetricUnit.Robux) return r.NumberIcon.Robux;
          })(R),
          scalingFactor: ((e) => {
            if ((0, u.default)(e).unit === t.RAQIV2MetricUnit.Percentage0100) return 0.01;
          })(V)
        };
      };
    e.s(["MetricUnitDefaultSuffix", 0, d, "generateAnalyticsNumberFormattingSpec", 0, g]);
  },
  405680,
  (e) => {
    "use strict";
    var t = e.i(31611);
    let a = (e, a, n) => {
      let r = ((e) => {
        switch (e) {
          case t.RAQIV2MetricGranularity.None:
            return null;
          case t.RAQIV2MetricGranularity.OneMinute:
            return 6e4;
          case t.RAQIV2MetricGranularity.HalfHour:
            return 18e5;
          case t.RAQIV2MetricGranularity.OneHour:
            return 36e5;
          case t.RAQIV2MetricGranularity.OneDay:
            return 864e5;
          case t.RAQIV2MetricGranularity.OneWeek:
            return 6048e5;
          case t.RAQIV2MetricGranularity.OneMonth:
            return null;
          default:
            throw Error("Unhandled granularity: ".concat(e));
        }
      })(a);
      if (!r) return e;
      let i = e.getTime(),
        l = new Date(i - (i % r));
      return (n.snapToNext && l.setTime(l.getTime() + r), l);
    };
    e.s([
      "snapToLatestEndTime",
      0,
      function (e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { snapToNext: !1 };
        switch (n) {
          case t.RAQIV2MetricGranularity.OneMonth:
            return new Date(e.getFullYear(), e.getMonth() + 1, 0);
          case t.RAQIV2MetricGranularity.OneWeek: {
            let t = new Date(e),
              a = t.getUTCDay();
            return (
              t.setUTCDate(t.getUTCDate() + (0 === a ? 0 : 7 - a)),
              t.setUTCHours(0, 0, 0, 0),
              t
            );
          }
          case t.RAQIV2MetricGranularity.None:
          case t.RAQIV2MetricGranularity.OneMinute:
          case t.RAQIV2MetricGranularity.HalfHour:
          case t.RAQIV2MetricGranularity.OneHour:
          case t.RAQIV2MetricGranularity.OneDay:
            return a(e, n, r);
          default:
            throw Error("Unhandled granularity: ".concat(n));
        }
      },
      "snapToLatestStartTime",
      0,
      (e, n) => {
        switch (n) {
          case t.RAQIV2MetricGranularity.OneMonth: {
            let t = new Date(e);
            return (t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0), t);
          }
          case t.RAQIV2MetricGranularity.OneWeek: {
            let t = new Date(e),
              a = t.getUTCDay();
            return (
              t.setUTCDate(t.getUTCDate() - (0 === a ? 6 : a - 1)),
              t.setUTCHours(0, 0, 0, 0),
              t
            );
          }
          case t.RAQIV2MetricGranularity.None:
          case t.RAQIV2MetricGranularity.OneMinute:
          case t.RAQIV2MetricGranularity.HalfHour:
          case t.RAQIV2MetricGranularity.OneHour:
          case t.RAQIV2MetricGranularity.OneDay:
            return a(e, n, { snapToNext: !1 });
          default:
            throw Error("Unhandled granularity: ".concat(n));
        }
      }
    ]);
  },
  328712,
  (e) => {
    "use strict";
    let t = "Other";
    e.s([
      "TOP_N_OTHER_BREAKDOWN_VALUE",
      0,
      t,
      "processUngroupedOtherResponse",
      0,
      (e, a) => {
        var n;
        if (!e) return null;
        let r = a.map((e) => ({ dimension: e, value: t })),
          i = null != (n = e.values) ? n : [];
        return 0 === i.length
          ? null
          : {
              values: i.map((e) => {
                var t;
                return {
                  ...e,
                  breakdownValue: [...(null != (t = e.breakdownValue) ? t : []), ...r]
                };
              })
            };
      }
    ]);
  },
  56397,
  (e) => {
    "use strict";
    var t = e.i(416340),
      a = e.i(79187),
      n = e.i(998683);
    function r(e) {
      let [r, i] = (0, t.useState)(() => new Map()),
        [l, o] = (0, t.useState)(() => new Map()),
        s = (0, t.useMemo)(
          () =>
            e === a.Locale.SimplifiedChineseJV
              ? a.Locale.SimplifiedChinese
              : null != e
                ? e
                : a.Locale.English,
          [e]
        );
      return (
        (0, t.useEffect)(() => {
          !(async function () {
            try {
              let e = await n.default.getSupportedLocalesForCreators({
                displayValueLocale: (0, a.toRobloxLocale)(s)
              });
              if (null == e.data) return;
              let t = { localesMap: new Map(), languagesMap: new Map() },
                r = e.data.reduce((e, t) => {
                  var a, n, r, i, l;
                  let o = null == (a = t.locale) ? void 0 : a.locale,
                    s =
                      null == (r = t.locale) || null == (n = r.language) ? void 0 : n.languageCode,
                    u = null == (l = t.locale) || null == (i = l.language) ? void 0 : i.name;
                  return (
                    void 0 !== u &&
                      (void 0 !== o && e.localesMap.set(o, u),
                      void 0 !== s && e.languagesMap.set(s, u)),
                    e
                  );
                }, t);
              (i(r.localesMap), o(r.languagesMap));
            } catch (e) {}
          })();
        }, [e, s]),
        { localesMap: r, languagesMap: l }
      );
    }
    e.s([
      "default",
      0,
      function () {
        let { locale: e } = (0, a.useLocalization)();
        return r(e);
      },
      "useLocaleMapGivenCurrentLanguage",
      0,
      r
    ]);
  }
]);

//# debugId=7792681d-daf6-f616-3078-1996b58d3d7b
//# sourceMappingURL=3j38kb3-wfeg3.js.map
