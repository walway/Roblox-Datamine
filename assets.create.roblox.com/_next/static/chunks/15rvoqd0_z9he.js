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
    n && ((e._debugIds || (e._debugIds = {}))[n] = "2a68804a-6e4d-7be5-c5e5-422a0982c6ef");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  594193,
  (e) => {
    "use strict";
    var t = e.i(887251),
      a = e.i(252842),
      r = e.i(31611),
      i = e.i(730530),
      n = e.i(881670),
      o = e.i(660923),
      s = e.i(739167),
      l = e.i(864520);
    let c = function (e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (0, a.dateTimeFormatter)(e).getCustomDateTime(t, {
          month: "short",
          day: r ? "numeric" : "2-digit"
        });
      },
      u = (e, t) => (0, a.dateTimeFormatter)(e).getCustomDateTime(t, { timeStyle: void 0 }),
      m = (e, t) =>
        (0, a.dateTimeFormatter)(t).getCustomDateTime(e, {
          dateStyle: "short",
          timeStyle: "short"
        }),
      d = (e, t) =>
        (0, a.dateTimeFormatter)(t).getCustomDateTime(e, {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        }),
      p = (e) => {
        let t = e.getTimezoneOffset(),
          a = new Date(e);
        return (a.setMinutes(e.getMinutes() + t), a);
      },
      h = (e) => e.toString().padStart(2, "0"),
      y = (e) => {
        if ("string" == typeof e) return e;
        let t = Math.floor(e),
          a = Math.floor(t / 3600),
          r = Math.floor((t % 3600) / 60),
          i = t % 60;
        return a > 0
          ? "".concat(h(a), ":").concat(h(r), ":").concat(h(i))
          : "".concat(h(r), ":").concat(h(i));
      },
      f = (e, t) =>
        t.translate(
          (0, i.translationKey)("Description.DayNumber", n.TranslationNamespace.Analytics),
          { number: e.toString() }
        ),
      g = (e) => {
        let t = e.getTimezoneOffset(),
          a = new Date(e);
        return (a.setMinutes(e.getMinutes() + t), a);
      },
      T = function (e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "UTC",
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          n = "Local" === a ? t : g(t);
        return r ? c(e, n, i) : u(e, n);
      },
      b = function (e, t, a) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "UTC",
          i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          n = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          o = T(e, t, r, i, n),
          s = T(e, a, r, i, n);
        return "".concat(o, " - ").concat(s);
      };
    e.s([
      "badlyMisnamedFormatLocalizedDateValueFromUTCToUserTimezone",
      0,
      g,
      "formatDateInUTCWithCurrentYearHidden",
      0,
      (e) => {
        let { timestamp: t, locale: r, options: i } = e,
          n = p(t),
          s = (0, o.getCurrentDate)(),
          l = t.getUTCFullYear() === s.getUTCFullYear();
        return (0, a.dateTimeFormatter)(r).getCustomDateTime(n, {
          ...i,
          year: l || null == i ? void 0 : i.year
        });
      },
      "formatDateRange",
      0,
      b,
      "formatDurationInDay",
      0,
      f,
      "formatDurationInSecond",
      0,
      y,
      "formatHourWithDate",
      0,
      (e, t) => {
        let r = (0, a.dateTimeFormatter)(e).getCustomDateTime(t, { timeStyle: "short" }),
          i = (0, a.dateTimeFormatter)(e).getCustomDateTime(t, {
            month: "numeric",
            day: "numeric"
          });
        return "".concat(r, "<br/>").concat(i);
      },
      "formatMediumDate",
      0,
      (e, t) => (0, a.dateTimeFormatter)(t).getCustomDateTime(e, { dateStyle: "medium" }),
      "formatMediumDateTime",
      0,
      (e, t) =>
        (0, a.dateTimeFormatter)(t).getCustomDateTime(e, {
          dateStyle: "medium",
          timeStyle: "medium"
        }),
      "formatShortDateTime",
      0,
      m,
      "formatShortDateTimeWithoutYear",
      0,
      d,
      "formatSingleDate",
      0,
      T,
      "formatTimestampForChartTooltip",
      0,
      function (e, o, s, l, c) {
        let h =
          arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : t.ChartStyleMode.Normal;
        switch (e) {
          case r.RAQIV2MetricGranularity.OneHour:
          case r.RAQIV2MetricGranularity.OneMinute:
          case r.RAQIV2MetricGranularity.HalfHour:
            if (h === t.ChartStyleMode.Minimal) return d(s, o);
            return m(s, o);
          case r.RAQIV2MetricGranularity.OneMonth:
          case r.RAQIV2MetricGranularity.OneDay:
          case r.RAQIV2MetricGranularity.OneWeek:
            let y, f;
            return (
              (y = p(s)),
              (f = (0, a.dateTimeFormatter)(o).getCustomDateTime(y, { dateStyle: "short" })),
              l(
                (0, i.translationKey)("Timestamp.ShortDateInUTC", n.TranslationNamespace.Analytics),
                { date: f }
              )
            );
          case r.RAQIV2MetricGranularity.None:
            if (c) return b(o, c.startDate, c.endDate);
            return u(o, s);
          default:
            throw Error("Unhandled chart granularity: ".concat(String(e)));
        }
      },
      "makeDurationFormatter",
      0,
      (e, t) => {
        switch (e) {
          case l.DurationBucketType.ServerMemoryAge:
            return (e) => {
              let { value: t } = e;
              if ("string" == typeof t) return t;
              let a = Math.floor(t / 60);
              a > 60 &&
                (0, s.default)("formatDuration should not be greater than 60 hours: ".concat(t));
              let r = Math.floor(t % 60),
                i = Math.floor((60 * t) % 60);
              return "".concat(h(a), ":").concat(h(r), ":").concat(h(i));
            };
          case l.DurationBucketType.SecondsSinceStart:
            return (e) => {
              let { value: t } = e;
              return y(t);
            };
          case l.DurationBucketType.CohortDay:
            return (e) => {
              let { value: a } = e;
              return f(a, t);
            };
          default:
            throw Error("Exhaustive check for bucketType: ".concat(String(e)));
        }
      },
      "shiftLocalizedDateValueFromUserTimezoneToUTC",
      0,
      p
    ]);
  },
  761551,
  917403,
  (e) => {
    "use strict";
    var t,
      a,
      r,
      i = e.i(718389),
      n = e.i(252842),
      o = e.i(31611),
      s =
        (((t = {}).PredefinedTranslationKey = "PredefinedTranslationKey"),
        (t.DynamicFormattedText = "DynamicFormattedText"),
        t);
    e.s(["TranslationKeyOrFormattedTextType", () => s], 917403);
    var l = e.i(730530);
    let c = (0, l.brandUntranslatableText)("--"),
      u = {
        [o.FallbackValue.Invalid]: "N/A",
        [o.FallbackValue.NA]: "N/A",
        [o.FallbackValue.Zero]: 0
      };
    var m =
        (((a = {}).DataPoint = "DataPoint"),
        (a.TableDataPoint = "TableDataPoint"),
        (a.ChartSummary = "ChartSummary"),
        (a.TabSummary = "TabSummary"),
        (a.CardSummary = "CardSummary"),
        (a.TableSummary = "TableSummary"),
        (a.AchievementHeader = "AchievementHeader"),
        a),
      d = (((r = {}).Robux = "Robux"), r);
    let p = {
        ForceTwoDecimalDigitsWhenAverageUnder100: (e, t) =>
          t < 100
            ? {
                ...e,
                numberFormatOptions: {
                  ...e.numberFormatOptions,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }
              }
            : e,
        PreserveSmallValuesWithSignificantDigits: (e, t) => {
          let a = Math.abs(t),
            r = e.numberFormatOptions.maximumFractionDigits;
          if (0 === a || null == r || a >= 10 ** -r) return e;
          let i = Object.fromEntries(
            Object.entries(e.numberFormatOptions).filter((e) => {
              let [t] = e;
              return "minimumFractionDigits" !== t && "maximumFractionDigits" !== t;
            })
          );
          return {
            ...e,
            numberFormatOptions: { ...i, minimumSignificantDigits: 2, maximumSignificantDigits: 3 }
          };
        }
      },
      h = (e, t) => (e.type === s.PredefinedTranslationKey ? t(e.key) : e.text);
    e.s(
      [
        "InfinityCharacter",
        0,
        "∞",
        "NumberContext",
        () => m,
        "NumberIcon",
        () => d,
        "formatNumberWithSpec",
        0,
        (e, t, a) => {
          var r, o;
          if (!Number.isFinite(e)) return c;
          let { dynamicOverrides: s, scalingFactor: u } = t,
            m = u ? e * u : e,
            {
              abbreviate: d,
              prefix: y,
              suffix: f,
              numberFormatOptions: g
            } = null != (r = null == s ? void 0 : s.reduce((e, t) => p[t](e, m), t)) ? r : t,
            { locale: T, translate: b } = a,
            D = y ? h(y, b) : "",
            v = f ? " ".concat(h(f, b)) : "",
            S =
              0 === g.maximumFractionDigits &&
              (null != (o = g.minimumFractionDigits) ? o : 0) === 0,
            M = d && !(S && 1e3 > Math.abs(m)),
            N = M ? 1 : g.maximumFractionDigits,
            w = ((e, t, a) => {
              if (!Number.isFinite(e) || 0 === e) return !1;
              let {
                style: r,
                notation: i,
                minimumSignificantDigits: n,
                maximumSignificantDigits: o
              } = t;
              if ("percent" === r || "currency" === r || "scientific" === i || "engineering" === i)
                return !1;
              if (null != n || null != o) return 0.001 > Math.abs(e);
              if (null == a || 0 === a) return !1;
              let s = Math.abs(e);
              return (
                !(s >= 1) && (!!(s < 0.001) || a - Math.max(0, Math.ceil(-Math.log10(s)) - 1) < 3)
              );
            })(m, g, N);
          if (M && !w) {
            let e = ((e, t) => {
              if (!Number.isFinite(e)) return c;
              let a = new n.NumberFormatter(t, ""),
                r = 1e3,
                i = "K",
                o = 1e6,
                s = "M",
                l = 1e9,
                u = "B",
                m = 1e12,
                d = "T",
                p = e,
                h = "";
              return (
                e >= m
                  ? ((h = d), (p = e / m))
                  : e >= l
                    ? ((h = u), (p = e / l))
                    : e >= o
                      ? ((h = s), (p = e / o))
                      : e >= r && ((h = i), (p = e / r)),
                ""
                  .concat(
                    a.getCustomNumber(p, {
                      style: "decimal",
                      minimumFractionDigits: +("" !== h),
                      maximumFractionDigits: 1
                    })
                  )
                  .concat(h)
              );
            })(m, T);
            return (0, l.brandUntranslatableText)("".concat(D).concat(e).concat(v));
          }
          let A = (0, i.default)(g);
          if (Math.abs(m) >= 1e12)
            ((A.notation = "scientific"),
              (A.maximumFractionDigits = 2),
              (A.minimumFractionDigits = 2));
          else if (w) {
            let { minimumFractionDigits: e, maximumFractionDigits: t, ...a } = A,
              r = 0.001 > Math.abs(m);
            A = { ...a, ...(r ? { notation: "scientific" } : {}), maximumSignificantDigits: 3 };
          }
          let x = new n.NumberFormatter(T, "").getCustomNumber(m, A).toString();
          return (0, l.brandUntranslatableText)("".concat(D).concat(x).concat(v));
        },
        "getFallbackNoDataSeriesValue",
        0,
        (e) => u[e]
      ],
      761551
    );
  },
  864520,
  (e) => {
    "use strict";
    var t,
      a = e.i(730530),
      r = e.i(881670),
      i =
        (((t = {}).SecondsSinceStart = "SecondsSinceStart"),
        (t.ServerMemoryAge = "ServerMemoryAge"),
        (t.CohortDay = "CohortDay"),
        t);
    let n = {
      SecondsSinceStart: (0, a.translationKey)(
        "Label.SecondsSinceStart",
        r.TranslationNamespace.Analytics
      ),
      ServerMemoryAge: (0, a.translationKey)(
        "Label.ServerMemoryAge",
        r.TranslationNamespace.Analytics
      ),
      CohortDay: (0, a.translationKey)("Label.CohortDay", r.TranslationNamespace.Analytics)
    };
    e.s(["DurationBucketType", () => i, "DurationBucketTypeToTranslationKey", 0, n]);
  },
  452791,
  (e) => {
    "use strict";
    var t = e.i(79187);
    e.s([
      "default",
      0,
      () => {
        var e;
        return null != (e = (0, t.useLocalization)().locale) ? e : t.Locale.English;
      }
    ]);
  },
  660923,
  (e) => {
    "use strict";
    var t = e.i(730530),
      a = e.i(881670);
    let r = { month: "short", day: "numeric" },
      i = { year: "numeric", month: "short", day: "numeric" };
    e.s([
      "earlierDate",
      0,
      (e, t) => (e < t ? e : t),
      "formatDateFromNow",
      0,
      (e, r) => {
        let i = "string" == typeof e ? new Date(e) : e,
          n = (Date.now() - new Date(i).getTime()) / 1e3;
        if (n < 0) return r((0, t.translationKey)("Label.UpdatedNow", a.TranslationNamespace.Home));
        if (n < 60)
          return r((0, t.translationKey)("Label.UpdatedFromNow", a.TranslationNamespace.Home), {
            fromNow: ""
              .concat(Math.floor(n))
              .concat(r((0, t.translationKey)("Label.SecondsSymbol", a.TranslationNamespace.Home)))
          });
        let o = n / 60;
        if (o < 60)
          return r((0, t.translationKey)("Label.UpdatedFromNow", a.TranslationNamespace.Home), {
            fromNow: ""
              .concat(Math.floor(o))
              .concat(r((0, t.translationKey)("Label.MinutesSymbol", a.TranslationNamespace.Home)))
          });
        let s = o / 60;
        if (s < 24)
          return r((0, t.translationKey)("Label.UpdatedFromNow", a.TranslationNamespace.Home), {
            fromNow: ""
              .concat(Math.floor(s))
              .concat(r((0, t.translationKey)("Label.HoursSymbol", a.TranslationNamespace.Home)))
          });
        let l = s / 24;
        if (l < 30)
          return r((0, t.translationKey)("Label.UpdatedFromNow", a.TranslationNamespace.Home), {
            fromNow: ""
              .concat(Math.floor(l))
              .concat(r((0, t.translationKey)("Label.DaysSymbol", a.TranslationNamespace.Home)))
          });
        let c = l / 30;
        return r(
          (0, t.translationKey)("Label.UpdatedFromNow", a.TranslationNamespace.Home),
          c < 12
            ? {
                fromNow: ""
                  .concat(Math.floor(c))
                  .concat(
                    r((0, t.translationKey)("Label.MonthsSymbol", a.TranslationNamespace.Home))
                  )
              }
            : {
                fromNow: ""
                  .concat(Math.floor(c / 12))
                  .concat(
                    r((0, t.translationKey)("Label.YearsSymbol", a.TranslationNamespace.Home))
                  )
              }
        );
      },
      "formatDateRangeForKey",
      0,
      (e, t, a) => {
        let n = t.toLocaleDateString(e, r),
          o = a.toLocaleDateString(e, i);
        return "".concat(n, " - ").concat(o);
      },
      "formatTimeAgoCompact",
      0,
      (e, r) => {
        let i = "string" == typeof e ? new Date(e) : e,
          n = (Date.now() - new Date(i).getTime()) / 1e3;
        if (n < 60) {
          let e = Math.max(0, Math.floor(n));
          return r(
            (0, t.translationKey)("Label.TimeAgoSeconds", a.TranslationNamespace.ExperienceAlerts),
            { count: String(e) }
          );
        }
        let o = n / 60;
        if (o < 60)
          return r(
            (0, t.translationKey)("Label.TimeAgoMinutes", a.TranslationNamespace.ExperienceAlerts),
            { count: String(Math.floor(o)) }
          );
        let s = o / 60;
        if (s < 24)
          return r(
            (0, t.translationKey)("Label.TimeAgoHours", a.TranslationNamespace.ExperienceAlerts),
            { count: String(Math.floor(s)) }
          );
        let l = s / 24;
        if (l < 30)
          return r(
            (0, t.translationKey)("Label.TimeAgoDays", a.TranslationNamespace.ExperienceAlerts),
            { count: String(Math.floor(l)) }
          );
        let c = l / 30;
        return c < 12
          ? r(
              (0, t.translationKey)("Label.TimeAgoMonths", a.TranslationNamespace.ExperienceAlerts),
              { count: String(Math.floor(c)) }
            )
          : r(
              (0, t.translationKey)("Label.TimeAgoYears", a.TranslationNamespace.ExperienceAlerts),
              { count: String(Math.floor(c / 12)) }
            );
      },
      "getCurrentDate",
      0,
      () => new Date(),
      "getCurrentHourDate",
      0,
      () => {
        let e = new Date();
        return (e.setMinutes(0, 0, 0), e);
      },
      "hourInMilliseconds",
      0,
      36e5,
      "laterDate",
      0,
      (e, t) => (e < t ? t : e),
      "subHours",
      0,
      (e, t) => {
        let a = new Date(e);
        return (a.setHours(e.getHours() - t), a);
      },
      "subMinutes",
      0,
      (e, t) => {
        let a = new Date(e);
        return (a.setMinutes(e.getMinutes() - t), a);
      }
    ]);
  },
  884227,
  (e) => {
    "use strict";
    var t = e.i(721281);
    class a extends Error {
      constructor(e, a, r) {
        (super(e),
          (0, t._)(this, "code", void 0),
          (0, t._)(this, "severity", void 0),
          (0, t._)(this, "nodeId", void 0),
          (0, t._)(this, "suggestion", void 0),
          (0, t._)(this, "operationId", void 0),
          Object.setPrototypeOf(this, new.target.prototype),
          (this.name = a),
          (this.code = r.code),
          (this.severity = r.severity),
          (this.nodeId = r.nodeId),
          (this.suggestion = r.suggestion),
          (this.operationId = r.operationId));
      }
    }
    e.s(["default", 0, a, "isAceDagExecutionError", 0, (e) => e instanceof a]);
  },
  480398,
  (e) => {
    "use strict";
    var t,
      a = (((t = a || {}).ResourceLoading = "Resource not loaded yet"), t);
    e.s([
      "isLoadingRAQIV2Prerequisites",
      0,
      (e) => !!e.isLoading,
      "isRAQIV2LoadingException",
      0,
      (e) => "".concat(e).includes("Resource not loaded yet"),
      "maybeThrowRAQIV2InternalException",
      0,
      (e, t) => {
        if (e.isLoading) throw Error("Resource not loaded yet in ".concat(t));
      }
    ]);
  },
  772147,
  (e) => {
    "use strict";
    var t,
      a = e.i(721281),
      r = e.i(31611),
      i = e.i(11517),
      n = e.i(405005),
      o =
        (((t = {}).UnsupportedGranularity = "unsupported_granularity"),
        (t.UnsupportedBreakdown = "unsupported_breakdown"),
        (t.UnsupportedFilter = "unsupported_filter"),
        (t.UnsupportedFilterValue = "unsupported_filter_value"),
        t);
    class s extends Error {
      constructor(e, t, r, i) {
        (super(t),
          (0, a._)(this, "metric", void 0),
          (0, a._)(this, "dimension", void 0),
          (0, a._)(this, "type", void 0),
          (this.metric = r),
          (this.dimension = i),
          Object.setPrototypeOf(this, s.prototype),
          (this.type = e));
      }
    }
    e.s([
      "RAQIV2ValidationError",
      0,
      s,
      "RAQIV2ValidationErrorType",
      () => o,
      "validateRAQIV2Request",
      0,
      (e) => {
        let t = [],
          { metric: a, granularity: o, filter: l } = e,
          { metricVariant: c, breakdown: u } = (0, n.splitMetricVariantFromBreakdown)(
            e.metricVariant,
            e.breakdown
          );
        if ((0, i.isComputedMetric)(a)) return t;
        let m = (0, i.getUIMetricFromAtomicMetricLike)(a),
          d = r.RAQIV2MetricToSupportedGranularities[m];
        d &&
          !d.includes(o) &&
          t.push(
            new s(
              "unsupported_granularity",
              "Metric "
                .concat(m, " does not support granularity ")
                .concat(o, ". Supported granularities: ")
                .concat(d.join(", ")),
              m,
              void 0
            )
          );
        let p = r.RAQIV2MetricToSupportedDimensions[m];
        p &&
          u &&
          u.forEach((e) => {
            p.includes(e) ||
              t.push(
                new s(
                  "unsupported_breakdown",
                  "Metric "
                    .concat(m, " does not support breakdown dimension ")
                    .concat(e, ". Supported dimensions: ")
                    .concat(p.join(", ")),
                  m,
                  e
                )
              );
          });
        let h = (0, n.getFanoutOwnedDimension)(c);
        return (
          p &&
            h &&
            !p.includes(h) &&
            t.push(
              new s(
                "unsupported_breakdown",
                "Metric "
                  .concat(m, " does not support breakdown dimension ")
                  .concat(h, ". Supported dimensions: ")
                  .concat(p.join(", ")),
                m,
                h
              )
            ),
          p &&
            l &&
            l.forEach((e) => {
              let { dimension: a } = e;
              p.includes(a) ||
                t.push(
                  new s(
                    "unsupported_filter",
                    "Metric "
                      .concat(m, " does not support filter dimension ")
                      .concat(a, ". Supported dimensions: ")
                      .concat(p.join(", ")),
                    m,
                    a
                  )
                );
            }),
          l &&
            l.forEach((e) => {
              let { dimension: a, values: i } = e,
                n = ((e) => {
                  let t = r.RAQIV2DimensionDisplayConfig[e];
                  if (!t || t.valueType !== r.RAQIV2DimensionValueType.Enum) return;
                  let { filterSupported: a } = t;
                  if (!a) return;
                  let i = new Map();
                  return (
                    Object.entries(a).forEach((e) => {
                      let [t, a] = e;
                      "boolean" == typeof a && i.set(t, a);
                    }),
                    i
                  );
                })(a);
              if (!n) return;
              let o = i.filter((e) => !1 === n.get(e));
              o.length > 0 &&
                t.push(
                  new s(
                    "unsupported_filter_value",
                    "Dimension "
                      .concat(a, " does not support filter value(s) ")
                      .concat(o.join(", "), " for metric ")
                      .concat(m, "."),
                    m,
                    a
                  )
                );
            }),
          t
        );
      }
    ]);
  },
  924164,
  851755,
  (e) => {
    "use strict";
    var t,
      a =
        (((t = a || {})[(t.BAD_REQUEST = 400)] = "BAD_REQUEST"),
        (t[(t.PAYMENT_REQUIRED = 402)] = "PAYMENT_REQUIRED"),
        (t[(t.DUPLICATE_ENTRY = 409)] = "DUPLICATE_ENTRY"),
        (t[(t.FORBIDDEN = 403)] = "FORBIDDEN"),
        (t[(t.INTERNAL_SERVER_ERROR = 500)] = "INTERNAL_SERVER_ERROR"),
        (t[(t.UNPROCESSABLE_ENTITY = 422)] = "UNPROCESSABLE_ENTITY"),
        t);
    (e.s(["default", 0, a], 851755), e.s(["HttpStatusCodes", 0, a], 924164));
  },
  296380,
  (e) => {
    "use strict";
    var t = e.i(416340);
    let a = (e, a) => {
      let r = (0, t.useRef)(null),
        i = (0, t.useCallback)(() => {
          null !== r.current && (clearTimeout(r.current), (r.current = null));
        }, [r]);
      return [
        (0, t.useCallback)(
          function () {
            for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
            (i(),
              (r.current = window.setTimeout(() => {
                (e(...n), (r.current = null));
              }, a)));
          },
          [e, a, i]
        ),
        i,
        r
      ];
    };
    e.s(["default", 0, a, "useDebouncedFunction", 0, a]);
  },
  489279,
  (e) => {
    "use strict";
    var t = e.i(865800),
      a = e.i(416340),
      r = e.i(614515),
      i = e.i(993807),
      n = e.i(273589),
      o = e.i(962560),
      s = e.i(42569),
      l = e.i(696180),
      c = e.i(221628),
      u = e.i(963320),
      m = e.i(972455);
    function d(e) {
      return (0, n.g)("MuiCardHeader", e);
    }
    var p = (0, l.g)("MuiCardHeader", [
      "root",
      "avatar",
      "action",
      "content",
      "title",
      "subheader"
    ]);
    let h = [
        "action",
        "avatar",
        "className",
        "component",
        "disableTypography",
        "subheader",
        "subheaderTypographyProps",
        "title",
        "titleTypographyProps"
      ],
      y = (0, s.s)("div", {
        name: "MuiCardHeader",
        slot: "Root",
        overridesResolver: (e, t) =>
          (0, o._)(
            { ["& .".concat(p.title)]: t.title, ["& .".concat(p.subheader)]: t.subheader },
            t.root
          )
      })({ display: "flex", alignItems: "center", padding: 16 }),
      f = (0, s.s)("div", {
        name: "MuiCardHeader",
        slot: "Avatar",
        overridesResolver: (e, t) => t.avatar
      })({ display: "flex", flex: "0 0 auto", marginRight: 16 }),
      g = (0, s.s)("div", {
        name: "MuiCardHeader",
        slot: "Action",
        overridesResolver: (e, t) => t.action
      })({
        flex: "0 0 auto",
        alignSelf: "flex-start",
        marginTop: -4,
        marginRight: -8,
        marginBottom: -4
      }),
      T = (0, s.s)("div", {
        name: "MuiCardHeader",
        slot: "Content",
        overridesResolver: (e, t) => t.content
      })({ flex: "1 1 auto" }),
      b = a.forwardRef(function (e, t) {
        let a = (0, u.u)({ props: e, name: "MuiCardHeader" }),
          {
            action: r,
            avatar: i,
            className: l,
            component: p = "div",
            disableTypography: b = !1,
            subheader: D,
            subheaderTypographyProps: v,
            title: S,
            titleTypographyProps: M
          } = a,
          N = (0, n._)(a, h),
          w = (0, o._)({}, a, { component: p, disableTypography: b }),
          A = ((e) => {
            let { classes: t } = e;
            return (0, s.a)(
              {
                root: ["root"],
                avatar: ["avatar"],
                action: ["action"],
                content: ["content"],
                title: ["title"],
                subheader: ["subheader"]
              },
              d,
              t
            );
          })(w),
          x = S;
        null == x ||
          x.type === m.T ||
          b ||
          (x = (0, c.jsx)(
            m.T,
            (0, o._)(
              {
                variant: i ? "body2" : "h5",
                className: A.title,
                component: "span",
                display: "block"
              },
              M,
              { children: x }
            )
          ));
        let R = D;
        return (
          null == R ||
            R.type === m.T ||
            b ||
            (R = (0, c.jsx)(
              m.T,
              (0, o._)(
                {
                  variant: i ? "body2" : "body1",
                  className: A.subheader,
                  color: "text.secondary",
                  component: "span",
                  display: "block"
                },
                v,
                { children: R }
              )
            )),
          (0, c.jsxs)(
            y,
            (0, o._)({ className: (0, s.c)(A.root, l), as: p, ref: t, ownerState: w }, N, {
              children: [
                i && (0, c.jsx)(f, { className: A.avatar, ownerState: w, children: i }),
                (0, c.jsxs)(T, { className: A.content, ownerState: w, children: [x, R] }),
                r && (0, c.jsx)(g, { className: A.action, ownerState: w, children: r })
              ]
            })
          )
        );
      });
    var D = (0, r.default)({ name: "CardHeader" })(function (e) {
        return {
          title: (0, t._)({}, e.typography.largeLabel1),
          subheader: (0, t._)({}, e.typography.body2)
        };
      }),
      v = (0, a.forwardRef)(function (e, r) {
        var n = e.children,
          o = e.classes,
          s = e.className,
          l = (0, t.a)(e, ["children", "classes", "className"]),
          c = D(void 0, { props: { classes: (0, i.default)(o, s) } });
        return a.default.createElement(b, (0, t._)({}, l, { classes: c.classes, ref: r }), n);
      });
    e.s(["CardHeader", 0, v], 489279);
  },
  27281,
  (e) => {
    "use strict";
    var t = e.i(437272);
    e.s(["NavigateNextIcon", () => t.N]);
  },
  774807,
  (e) => {
    "use strict";
    var t = e.i(833172);
    e.s(["ArrowDownwardIcon", () => t.ArrowDownward]);
  },
  558826,
  (e) => {
    "use strict";
    var t = e.i(833172);
    e.s(["ArrowUpwardIcon", () => t.ArrowUpward]);
  },
  884398,
  (e) => {
    "use strict";
    var t = e.i(833172);
    e.s(["CancelOutlinedIcon", () => t.CancelOutlined]);
  },
  135196,
  (e) => {
    "use strict";
    var t = e.i(833172);
    e.s(["DragHandleIcon", () => t.DragHandle]);
  },
  37836,
  (e) => {
    "use strict";
    var t = e.i(833172);
    e.s(["LockIcon", () => t.Lock]);
  },
  93235,
  (e) => {
    "use strict";
    var t = e.i(833172);
    e.s(["NavigateBeforeIcon", () => t.NavigateBefore]);
  },
  597488,
  (e) => {
    "use strict";
    var t = e.i(273589),
      a = e.i(42569),
      r = e.i(962560),
      i = e.i(416340),
      n = e.i(410531),
      o = e.i(221628),
      s = e.i(101873),
      l = e.i(963320);
    let c = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"],
      u = (0, t.c)(),
      m = (0, n.s)("div", {
        name: "MuiContainer",
        slot: "Root",
        overridesResolver: (e, a) => {
          let { ownerState: r } = e;
          return [
            a.root,
            a["maxWidth".concat((0, t.a)(String(r.maxWidth)))],
            r.fixed && a.fixed,
            r.disableGutters && a.disableGutters
          ];
        }
      }),
      d = (e) => (0, s.u)({ props: e, name: "MuiContainer", defaultTheme: u }),
      p = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            createStyledComponent: n = m,
            useThemeProps: s = d,
            componentName: l = "MuiContainer"
          } = e,
          u = n(
            (e) => {
              let { theme: t, ownerState: a } = e;
              return (0, r._)(
                {
                  width: "100%",
                  marginLeft: "auto",
                  boxSizing: "border-box",
                  marginRight: "auto",
                  display: "block"
                },
                !a.disableGutters && {
                  paddingLeft: t.spacing(2),
                  paddingRight: t.spacing(2),
                  [t.breakpoints.up("sm")]: {
                    paddingLeft: t.spacing(3),
                    paddingRight: t.spacing(3)
                  }
                }
              );
            },
            (e) => {
              let { theme: t, ownerState: a } = e;
              return (
                a.fixed &&
                Object.keys(t.breakpoints.values).reduce((e, a) => {
                  let r = t.breakpoints.values[a];
                  return (
                    0 !== r &&
                      (e[t.breakpoints.up(a)] = {
                        maxWidth: "".concat(r).concat(t.breakpoints.unit)
                      }),
                    e
                  );
                }, {})
              );
            },
            (e) => {
              let { theme: t, ownerState: a } = e;
              return (0, r._)(
                {},
                "xs" === a.maxWidth && {
                  [t.breakpoints.up("xs")]: { maxWidth: Math.max(t.breakpoints.values.xs, 444) }
                },
                a.maxWidth &&
                  "xs" !== a.maxWidth && {
                    [t.breakpoints.up(a.maxWidth)]: {
                      maxWidth: ""
                        .concat(t.breakpoints.values[a.maxWidth])
                        .concat(t.breakpoints.unit)
                    }
                  }
              );
            }
          );
        return i.forwardRef(function (e, i) {
          let n = s(e),
            {
              className: m,
              component: d = "div",
              disableGutters: p = !1,
              fixed: h = !1,
              maxWidth: y = "lg"
            } = n,
            f = (0, t._)(n, c),
            g = (0, r._)({}, n, { component: d, disableGutters: p, fixed: h, maxWidth: y }),
            T = ((e, r) => {
              let { classes: i, fixed: n, disableGutters: o, maxWidth: s } = e,
                l = {
                  root: [
                    "root",
                    s && "maxWidth".concat((0, t.a)(String(s))),
                    n && "fixed",
                    o && "disableGutters"
                  ]
                };
              return (0, a.a)(l, (e) => (0, t.g)(r, e), i);
            })(g, l);
          return (0, o.jsx)(
            u,
            (0, r._)({ as: d, ownerState: g, className: (0, a.c)(T.root, m), ref: i }, f)
          );
        });
      })({
        createStyledComponent: (0, a.s)("div", {
          name: "MuiContainer",
          slot: "Root",
          overridesResolver: (e, a) => {
            let { ownerState: r } = e;
            return [
              a.root,
              a["maxWidth".concat((0, t.a)(String(r.maxWidth)))],
              r.fixed && a.fixed,
              r.disableGutters && a.disableGutters
            ];
          }
        }),
        useThemeProps: (e) => (0, l.u)({ props: e, name: "MuiContainer" })
      });
    e.s(["Container", 0, p]);
  },
  656047,
  (e) => {
    "use strict";
    var t,
      a,
      r = e.i(721281),
      i =
        (((t = {})[(t.QueryFailed = 2e3)] = "QueryFailed"),
        (t[(t.QueryValidationFailed = 2001)] = "QueryValidationFailed"),
        (t[(t.QueryTransientFailure = 2002)] = "QueryTransientFailure"),
        t),
      n =
        (((a = {}).Filter = "filter"),
        (a.Breakdown = "breakdown"),
        (a.Granularity = "granularity"),
        (a.TimeRange = "timeRange"),
        (a.Metric = "metric"),
        a);
    class o extends Error {
      constructor(e, t, a, n) {
        (super(t),
          (0, r._)(this, "code", void 0),
          (0, r._)(this, "operationPath", void 0),
          (0, r._)(this, "validationDetails", void 0),
          (0, r._)(this, "isKnownCode", void 0),
          Object.setPrototypeOf(this, o.prototype),
          (this.name = "RAQIQueryError"),
          (this.code = e),
          (this.operationPath = a),
          (this.validationDetails = n),
          (this.isKnownCode = e in i));
      }
    }
    let s = (e, t, a, r) => {
        let i;
        return Math.floor((i = Math.min(r, e * a ** t)) / 2 + (Math.random() * i) / 2);
      },
      l = (e) => "object" == typeof e && null !== e,
      c = { maxAttempts: 12, initialPollingInterval: 250, maxAccumulativeDelayToStartBackoff: 1e3 },
      u = (e) =>
        new Promise((t) => {
          setTimeout(t, e);
        });
    async function m(e, t) {
      var a, r;
      let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c,
        m = await e(),
        { maxAttempts: d, initialPollingInterval: p, maxAccumulativeDelayToStartBackoff: h } = i,
        y = 1,
        f = 0;
      for (; !m.done;) {
        if (y > d) throw Error("analytics-query-gateway: reached max polling attempts");
        let t = f > h ? s(p, 2, y, d * p) : p;
        (await u(t), (f += t), (m = await e()), (y += 1));
      }
      if (m.error)
        throw new o(
          null != (a = m.error.code) ? a : -1,
          null != (r = m.error.message) ? r : "Query failed",
          m.path,
          ((e) => {
            if (!l(e) || !("validationDetails" in e)) return;
            let t = e.validationDetails;
            if (!l(t)) return;
            let a = ((e) => {
                if (void 0 !== e)
                  switch (e) {
                    case "QUERY_VALIDATION_FIELD_FILTER":
                      return n.Filter;
                    case "QUERY_VALIDATION_FIELD_BREAKDOWN":
                      return n.Breakdown;
                    case "QUERY_VALIDATION_FIELD_GRANULARITY":
                      return n.Granularity;
                    case "QUERY_VALIDATION_FIELD_TIME_RANGE":
                      return n.TimeRange;
                    case "QUERY_VALIDATION_FIELD_METRIC":
                      return n.Metric;
                    default:
                      return;
                  }
              })("string" == typeof t.field ? t.field : void 0),
              r = Array.isArray(t.rejectedValues)
                ? t.rejectedValues.filter((e) => "string" == typeof e)
                : [];
            if (void 0 !== a && 0 !== r.length)
              return {
                field: a,
                subject: "string" == typeof t.subject ? t.subject : "",
                rejectedValues: r
              };
          })(m.error)
        );
      let g = t(m);
      if (!g) throw new o(-1, "Query completed with no result payload", m.path);
      return g;
    }
    e.s([
      "RAQIQueryError",
      0,
      o,
      "RAQIQueryErrorCode",
      0,
      i,
      "RAQIQueryValidationField",
      0,
      n,
      "isRAQIQueryError",
      0,
      (e) => e instanceof o,
      "pollAnalyticsOperation",
      0,
      m
    ]);
  }
]);

//# debugId=2a68804a-6e4d-7be5-c5e5-422a0982c6ef
//# sourceMappingURL=27gukfkf0-9dz.js.map
