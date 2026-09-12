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
    n && ((e._debugIds || (e._debugIds = {}))[n] = "f2f7d57d-4075-87f3-885f-cf23a2b90b19");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  358763,
  (e) => {
    "use strict";
    var t = e.i(416340),
      r = e.i(296380);
    let n = () => {};
    e.s([
      "default",
      0,
      function (e, i) {
        let {
            debounceDelay: a,
            intersectionObserverThreshold: o,
            resetOncePer: s
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          l = (0, t.useRef)(!1),
          u = (0, t.useCallback)(
            (e) => {
              !e || l.current || ((l.current = !0), i());
            },
            [i]
          ),
          [c] = (0, r.default)(u, null != a ? a : 250),
          m = (0, t.useCallback)(
            (e) => {
              let [t] = e;
              c(t.isIntersecting);
            },
            [c]
          ),
          d = null != s ? s : "instance";
        ((0, t.useMemo)(() => {
          "callback" === d && (l.current = !1);
        }, [i]),
          (0, t.useEffect)(() => {
            if (!e.current) return n;
            let t = new IntersectionObserver(m, { threshold: null != o ? o : 0.5 });
            return (
              t.observe(e.current),
              () => {
                t.disconnect();
              }
            );
          }, [e, o, m]));
      }
    ]);
  },
  669589,
  (e) => {
    "use strict";
    e.s([
      "flatMapNonEmptyArray",
      0,
      (e, t) => e.flatMap(t),
      "isNonEmptyArray",
      0,
      (e) => !!e && e.length > 0,
      "mapNonEmptyArray",
      0,
      (e, t) => e.map(t)
    ]);
  },
  112402,
  (e) => {
    "use strict";
    var t = e.i(730530),
      r = e.i(881670),
      n = e.i(152156);
    e.s([
      "getComparisonChipSpec",
      0,
      (e) => {
        let {
          isPositiveGood: t,
          current: r,
          previous: n,
          tooltip: i,
          hasBackground: a,
          useWarningBackgroundWhenNotGood: o,
          numberContextMetadata: s,
          dimmedLabel: l,
          maximumDecimals: u
        } = e;
        if (!n || !r) return;
        let c = Math.abs((r - n) / n),
          m = r > n;
        return {
          percentage: c,
          isUp: m,
          isGood: t ? m : !m,
          tooltip: i,
          hasBackground: a,
          numberContextMetadata: s,
          dimmedLabel: l,
          maximumDecimals: u,
          useWarningBackgroundWhenNotGood: o
        };
      },
      "getComparisonChipTooltip",
      0,
      (e) => {
        let {
            translate: n,
            startDate: i,
            endDate: a,
            comparisonStartDate: o,
            comparisonEndDate: s
          } = e,
          l = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
        return n(
          (0, t.translationKey)("Tooltip.PeriodComparison", r.TranslationNamespace.Analytics),
          {
            currentPeriod: a ? "".concat(l.format(i), " - ").concat(l.format(a)) : l.format(i),
            previousPeriod: s ? "".concat(l.format(o), " - ").concat(l.format(s)) : l.format(o)
          }
        );
      },
      "getComparisonTimeRange",
      0,
      (e, t, r, i) => {
        let a = t.getTime() - e.getTime(),
          o =
            "useOffsetForInclusiveDateRange" ===
            (null != i
              ? i
              : (0, n.shouldAlignComparisonSeriesEndWithMainSeriesStart)(r)
                ? "disableOffsetForExclusiveDateRange"
                : "useOffsetForInclusiveDateRange")
              ? (0, n.millisecondsInInterval)(r)
              : 0,
          s = new Date(e.getTime() - o);
        return { comparisonStartDate: new Date(s.getTime() - a), comparisonEndDate: s };
      }
    ]);
  },
  169717,
  (e) => {
    "use strict";
    var t = e.i(31611),
      r = e.i(864520);
    let n = new Set([
        t.RAQIV2Dimension.SessionTimeBucket,
        t.RAQIV2Dimension.ServerAgeBucket,
        t.RAQIV2Dimension.CohortDay
      ]),
      i = new Set([t.RAQIV2Dimension.SessionTimeBucket, t.RAQIV2Dimension.CohortDay]),
      a = {
        [t.RAQIV2Dimension.SessionTimeBucket]: r.DurationBucketType.SecondsSinceStart,
        [t.RAQIV2Dimension.ServerAgeBucket]: r.DurationBucketType.ServerMemoryAge,
        [t.RAQIV2Dimension.CohortDay]: r.DurationBucketType.CohortDay
      };
    e.s([
      "DurationBucketDimensionToBucketType",
      0,
      a,
      "isComparisonCompatibleDurationBucketDimension",
      0,
      function (e) {
        return i.has(e);
      },
      "isDurationBucketDimension",
      0,
      function (e) {
        return n.has(e);
      }
    ]);
  },
  735938,
  (e) => {
    "use strict";
    var t,
      r =
        (((t = r || {}).TotalSourceAndSinkMigration = "TotalSourceAndSinkMigration"),
        (t.AverageWalletBalanceMigration = "AverageWalletBalanceMigration"),
        (t.TopSourcesMigration = "TopSourcesMigration"),
        (t.TopSinksMigration = "TopSinksMigration"),
        (t.AcquisitionNewUsersWithPlays = "AcquisitionNewUsersWithPlays"),
        (t.AcquisitionReturningUsersWithPlays = "AcquisitionReturningUsersWithPlays"),
        (t.AcquisitionNewUsersWithImpressions = "AcquisitionNewUsersWithImpressions"),
        (t.AcquisitionReturningUsersWithImpressions = "AcquisitionReturningUsersWithImpressions"),
        (t.AcquisitionHomeRecommendationQualifiedPTR = "AcquisitionHomeRecommendationQualifiedPTR"),
        (t.AcquisitionHomeRecommendationQualifiedPTRMigration =
          "AcquisitionHomeRecommendationQualifiedPTRMigration"),
        (t.AcquisitionNewUsersWithPlaysV2 = "AcquisitionNewUsersWithPlaysV2"),
        (t.AcquisitionReturningUsersWithPlaysV2 = "AcquisitionReturningUsersWithPlaysV2"),
        (t.AcquisitionNewUsersWithImpressionsV2 = "AcquisitionNewUsersWithImpressionsV2"),
        (t.AcquisitionReturningUsersWithImpressionsV2 =
          "AcquisitionReturningUsersWithImpressionsV2"),
        (t.AcquisitionNewUsersWithPlaysV2Migration = "AcquisitionNewUsersWithPlaysV2Migration"),
        (t.AcquisitionReturningUsersWithPlaysV2Migration =
          "AcquisitionReturningUsersWithPlaysV2Migration"),
        (t.AcquisitionNewUsersWithImpressionsV2Migration =
          "AcquisitionNewUsersWithImpressionsV2Migration"),
        (t.AcquisitionReturningUsersWithImpressionsV2Migration =
          "AcquisitionReturningUsersWithImpressionsV2Migration"),
        (t.TopSourcesByNewUsersWithPlays = "TopSourcesByNewUsersWithPlays"),
        (t.TopSourcesBy30DRevenuePerUser = "TopSourcesBy30DRevenuePerUser"),
        (t.TopSourcesByNewUsersWithPlaysMigration = "TopSourcesByNewUsersWithPlaysMigration"),
        (t.TopSourcesBy30DRevenuePerUserMigration = "TopSourcesBy30DRevenuePerUserMigration"),
        (t.D1Retention = "D1Retention"),
        (t.ForwardD1Retention = "ForwardD1Retention"),
        (t.D7Retention = "D7Retention"),
        (t.ForwardD7Retention = "ForwardD7Retention"),
        (t.D30Retention = "D30Retention"),
        (t.ForwardD30Retention = "ForwardD30Retention"),
        (t.DauMauStickiness = "DauMauStickiness"),
        (t.DailyActiveUsers = "DailyActiveUsers"),
        (t.MonthlyActiveUsers = "MonthlyActiveUsers"),
        (t.EngagementNewUsers = "EngagementNewUsers"),
        (t.EngagementReturningUsers = "EngagementReturningUsers"),
        (t.EngagementNewUsersSessionTime = "EngagementNewUsersSessionTime"),
        (t.EngagementReturningUsersSessionTime = "EngagementReturningUsersSessionTime"),
        (t.EngagementAverageSessionTime = "EngagementAverageSessionTime"),
        (t.EngagementAveragePlayTimePerDAU = "EngagementAveragePlayTimePerDAU"),
        (t.EngagementTotalPlayTime = "EngagementTotalPlayTime"),
        (t.EngagementSessions = "EngagementSessions"),
        (t.EngagementNewUserSessionTimeRetention = "EngagementNewUserSessionTimeRetention"),
        (t.DailyRevenue = "DailyRevenue"),
        (t.DailyRevenueBySource = "DailyRevenueBySource"),
        (t.DailyRevenueByBalanceType = "DailyRevenueByBalanceType"),
        (t.ConversionRate = "ConversionRate"),
        (t.PayingUsers = "PayingUsers"),
        (t.AverageRevenuePerPayingUser = "AverageRevenuePerPayingUser"),
        (t.AverageRevenuePerDailyActiveUser = "AverageRevenuePerDailyActiveUser"),
        (t.PerformanceClientFps = "PerformanceClientFps"),
        (t.PerformanceClientMemoryUsage = "PerformanceClientMemoryUsage"),
        (t.PerformanceClientMemoryUsagePercentage = "PerformanceClientMemoryUsagePercentage"),
        (t.PerformanceClientCrashRate = "PerformanceClientCrashRate"),
        (t.PerformanceSessionTime = "PerformanceSessionTime"),
        (t.PerformanceConcurrentPlayers = "PerformanceConcurrentPlayers"),
        (t.PerformanceServerFps = "PerformanceServerFps"),
        (t.PerformanceServerCpuEfficiency = "PerformanceServerCpuEfficiency"),
        (t.PerformanceServerMemoryUsage = "PerformanceServerMemoryUsage"),
        (t.PerformanceServerCpuUsage = "PerformanceServerCpuUsage"),
        (t.OverviewMiniConcurrentPlayers = "OverviewConcurrentPlayers"),
        (t.AudienceCountry = "AudienceCountry"),
        (t.AudienceGender = "AudienceGender"),
        (t.AudienceAge = "AudienceAge"),
        (t.AudienceLanguage = "AudienceLanguage"),
        (t.ItemMarketplaceVersusInExperience = "ItemMarketplaceVersusInExperience"),
        (t.ItemPurchaserAge = "ItemPurchaserAge"),
        (t.ItemPurchaserDemographics = "ItemPurchaserDemographics"),
        (t.ItemPurchaserGender = "ItemPurchaserGender"),
        (t.ItemPurchasePlatform = "ItemPurchasePlatform"),
        (t.ItemRevenue = "ItemRevenue"),
        (t.ItemSales = "ItemSales"),
        (t.StoreAssetSales = "StoreAssetSales"),
        (t.StoreAssetRevenue = "StoreAssetRevenue"),
        (t.PerformanceServerFpsV2 = "PerformanceServerFpsV2"),
        (t.PerformanceServerCpuUsageV2 = "PerformanceServerCpuUsageV2"),
        (t.PerformanceServerCpuTimeV2 = "PerformanceServerCpuTimeV2"),
        (t.PerformanceServerMemoryUsageV2 = "PerformanceServerMemoryUsageV2"),
        (t.PerformanceServerMemoryUsageByAge = "PerformanceServerMemoryUsageByAge"),
        (t.CustomEventsMigration = "CustomEventsMigration"),
        (t.FunnelCohortCompletionRate = "FunnelCohortCompletionRate"),
        (t.FunnelCohortSessionCompletionRate = "FunnelCohortSessionCompletionRate"),
        (t.ThumbnailQualifiedPTR = "ThumbnailQualifiedPTR"),
        (t.ThumbnailImpressions = "ThumbnailImpressions"),
        (t.ThumbnailL7QualifiedPTR = "ThumbnailL7QualifiedPTR"),
        (t.HomeRecommendationImpressions = "HomeRecommendationImpressions"),
        (t.HomeRecommendationPlays = "HomeRecommendationPlays"),
        (t.RFYPlayThroughRate = "RFYPlayThroughRate"),
        (t.RFYL7PlayDays = "RFYL7PlayDays"),
        (t.RFYL7PlayTime = "RFYL7PlayTime"),
        (t.RFYL7RobuxSpent = "RFYL7RobuxSpent"),
        (t.RFYL7RobuxSpentDays = "RFYL7RobuxSpentDays"),
        (t.RFYL7IntentionalCoplayDays = "RFYL7IntentionalCoplayDays"),
        (t.RFYDeepEngagementRate = "RFYDeepEngagementRate"),
        (t.RFYQualifiedPTR = "RFYQualifiedPTR"),
        (t.QualifiedPTRAndImpressionComparison = "QualifiedPTRAndImpressionComparison"),
        (t.PlayerFeedbackVotesCountByVoteType = "PlayerFeedbackVotesCountByVoteType"),
        (t.CommerceImpressions = "CommerceImpressions"),
        (t.CommerceClicks = "CommerceClicks"),
        (t.CommerceCheckouts = "CommerceCheckouts"),
        (t.CommerceOrders = "CommerceOrders"),
        (t.CommerceUniqueImpressions = "CommerceUniqueImpressions"),
        (t.CommerceUniqueClicks = "CommerceUniqueClicks"),
        (t.CommerceUniqueCheckouts = "CommerceUniqueCheckouts"),
        (t.CommerceUniqueOrders = "CommerceUniqueOrders"),
        (t.CommerceGMV = "CommerceGMV"),
        (t.CommerceQuantitySold = "CommerceQuantitySold"),
        (t.SponsoredAdPlays = "SponsoredAdPlays"),
        t);
    e.s(["default", 0, r]);
  },
  460795,
  313672,
  (e) => {
    "use strict";
    var t = e.i(221628),
      r = e.i(416340),
      n = e.i(795621),
      i = e.i(510476),
      a = e.i(656047),
      o = e.i(552140),
      s = e.i(272593),
      l = e.i(31611),
      u = e.i(927868),
      c = e.i(859410);
    let m = (e) => {
        var t;
        let r = null != (t = e.values) ? t : [],
          n = r.filter((e) => !(0, u.isValidEnumValue)(c.default, e));
        return 0 === n.length
          ? null
          : n.length === r.length && void 0 !== e.values
            ? e
            : { ...e, values: n };
      },
      d = (e) => {
        var t;
        let { graph: r } = e;
        if (!(null == r || null == (t = r.nodes) ? void 0 : t.length)) return e;
        let n = !1,
          i = r.nodes.map((e) => {
            var t;
            let r = null == (t = e.queryConfig) ? void 0 : t.filters;
            if (!(null == r ? void 0 : r.length)) return e;
            let i = !1,
              a = [];
            return (r.forEach((e) => {
              let t = m(e);
              if (null === t) {
                i = !0;
                return;
              }
              (t !== e && (i = !0), a.push(t));
            }),
            i)
              ? ((n = !0), { ...e, queryConfig: { ...e.queryConfig, filters: a } })
              : e;
          });
        return n ? { ...e, graph: { ...r, nodes: i } } : e;
      },
      p = (0, s.createClientConfiguration)("analytics-query-gateway", "bedev2"),
      g = new o.AnalyticsQueryGatewayAPIApi(p),
      y = (e) => {
        let { queryResult: t } = e;
        if (!t) throw Error("Error: no query result in analytics-query-gateway operation");
        return t;
      },
      f = async (e, t) => {
        let { operation: r } = await e.v1MetricsResourceResourceTypeIdResourceIdPost(t);
        if (!r) throw Error("Error: no operation in analytics-query-gateway query response");
        return r;
      },
      h = (e) =>
        ((e) => {
          if (!e) return e;
          let t = [];
          return (
            e.forEach((e) => {
              let r = m(e);
              null !== r && t.push(r);
            }),
            t
          );
        })(e),
      v = (e) => {
        let { dimensionValuesResult: t } = e;
        if (!t)
          throw Error("Error: no dimension values result in analytics-query-gateway operation");
        return t;
      },
      R = async (e, t) => {
        let { operation: r } = await e.v1DimensionsResourceResourceTypeIdResourceIdPost(t);
        if (!r) throw Error("Error: no operation in analytics-query-gateway dimension response");
        return r;
      },
      T = (e) => {
        let { metricMetadataResult: t } = e;
        if (!t)
          throw Error("Error: no dimension values result in analytics-query-gateway operation");
        return t;
      },
      A = async (e, t) => {
        let { operation: r } = await e.v1MetricsMetadataPost(t);
        if (!r)
          throw Error("Error: no operation in analytics-query-gateway metric metadata response");
        return r;
      },
      D = async (e, t) => e.v1DagExecutePost(t),
      w = async (e, t) => e.v1DagValidatePost(t),
      S = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
        return {
          query: async (r) => {
            var n;
            let s = {
                resourceType: (0, i.mapChartResourceTypeToTargetResourceType)(
                  r.resource.type,
                  o.ResourceType
                ),
                resourceId: r.resource.id.toString()
              },
              l = {
                ...s,
                queryRequest: {
                  ...s,
                  query: {
                    metric: r.metric,
                    startTime: r.startTime.toISOString(),
                    endTime: r.endTime.toISOString(),
                    granularity: r.granularity,
                    breakdown: (n = r.breakdown) ? n.map((e) => ({ dimensions: [e] })) : n,
                    filter: h(r.filter),
                    limit: r.limit
                  }
                }
              };
            return (0, a.pollAnalyticsOperation)(() => f(t, l), y, e);
          },
          getDimensionValues: async (r) => {
            let n = {
                resourceType: (0, i.mapChartResourceTypeToTargetResourceType)(
                  r.resource.type,
                  o.ResourceType
                ),
                resourceId: r.resource.id.toString()
              },
              s = {
                ...n,
                dimensionValuesRequest: {
                  ...n,
                  query: {
                    ...n,
                    dimensions: ((e, t) => {
                      let { defaultNamespace: r, overrides: n } =
                          l.DimensionToMetricToNamespaceMap[e],
                        i = new Set();
                      return (
                        t.forEach((e) => {
                          var t;
                          let a = null != (t = null == n ? void 0 : n[e]) ? t : r;
                          i.add(a);
                        }),
                        Array.from(i).map((t) => ({ namespace: t, name: e }))
                      );
                    })(r.dimension, r.metrics),
                    startTime: r.startTime.toISOString(),
                    endTime: r.endTime.toISOString(),
                    filters: h(r.filter),
                    granularity: r.granularity
                  }
                }
              };
            return (0, a.pollAnalyticsOperation)(() => R(t, s), v, e);
          },
          getMetricMetadata: async (r) => {
            let n = { metricMetadataRequest: { query: { metrics: r.metrics } } };
            return (0, a.pollAnalyticsOperation)(() => A(t, n), T, e);
          },
          getStatusConfig: async (e) => t.v1StatusConfigGet({ universeId: e.universeId }),
          executeDag: async (e) => D(t, { executeDagRequest: d(e) }),
          validateDag: async (e) => w(t, { validateDagRequest: d(e) })
        };
      };
    e.s(["makeAnalyticsQueryGatewayClient", 0, S], 313672);
    let I = r.default.createContext(null),
      C = (e) => {
        let {
          resource: t,
          metric: r,
          startTime: n,
          endTime: i,
          granularity: a,
          breakdown: o,
          filter: s,
          limit: l,
          ...u
        } = e;
        if (Object.keys(u).length > 0)
          throw Error(
            "Uncached keys in analytics-query-gateway request: ".concat(Object.keys(u).join(", "))
          );
        return JSON.stringify([
          [t.type, t.id],
          r,
          n,
          i,
          a,
          [...(null != o ? o : [])].sort(),
          [...(null != s ? s : [])]
            .sort((e, t) => (e.dimension < t.dimension ? -1 : +(e.dimension > t.dimension)))
            .map((e) => ({ ...e, values: [...e.values].sort() })),
          l
        ]);
      },
      M = (e) => {
        let {
          resource: t,
          dimension: r,
          startTime: n,
          endTime: i,
          metrics: a,
          filter: o,
          granularity: s,
          ...l
        } = e;
        if (Object.keys(l).length > 0)
          throw Error(
            "Uncached keys in analytics-query-gateway dimension request: ".concat(
              Object.keys(l).join(", ")
            )
          );
        return JSON.stringify([t.type, t.id, r, n, i, o, s, a.sort()]);
      },
      E = (e) => {
        let { metrics: t } = e;
        return JSON.stringify(t.sort());
      },
      V = { staleTime: 1 / 0 };
    e.s(
      [
        "AnalyticsQueryGatewayContext",
        0,
        I,
        "default",
        0,
        (e) => {
          let { children: a, api: o } = e,
            s = (0, r.useMemo)(() => S(i.RAQIV2WithPollingDefaults, o), [o]),
            l = (0, n.useQueryClient)(),
            u = (0, r.useMemo)(
              () => ({
                query: async (e) => {
                  let t = ["analytics-query-gateway", "query", C(e)];
                  return l.fetchQuery({ queryKey: t, queryFn: () => s.query(e), ...V });
                },
                getDimensionValues: async (e) => {
                  let t = ["analytics-query-gateway", "getDimension", M(e)];
                  return l.fetchQuery({
                    queryKey: t,
                    queryFn: () => s.getDimensionValues(e),
                    ...V
                  });
                },
                getMetricMetadata: async (e) => {
                  let t = ["analytics-query-gateway", "getMetricMetadata", E(e)];
                  return l.fetchQuery({ queryKey: t, queryFn: () => s.getMetricMetadata(e), ...V });
                },
                getStatusConfig: async (e) => {
                  let t = ["analytics-query-gateway", "getStatusConfig", e.universeId];
                  return l.fetchQuery({ queryKey: t, queryFn: () => s.getStatusConfig(e), ...V });
                },
                executeDag: async (e) => s.executeDag(e),
                validateDag: async (e) => s.validateDag(e)
              }),
              [l, s]
            ),
            c = (0, r.useCallback)(() => {
              let e = [],
                t = (t) => {
                  e.push(void 0 === l.getQueryData(t) ? "miss" : "hit");
                };
              return {
                client: {
                  query: (e) => (t(["analytics-query-gateway", "query", C(e)]), u.query(e)),
                  getDimensionValues: (e) => (
                    t(["analytics-query-gateway", "getDimension", M(e)]),
                    u.getDimensionValues(e)
                  ),
                  getMetricMetadata: (e) => (
                    t(["analytics-query-gateway", "getMetricMetadata", E(e)]),
                    u.getMetricMetadata(e)
                  ),
                  getStatusConfig: (e) => (
                    t(["analytics-query-gateway", "getStatusConfig", e.universeId]),
                    u.getStatusConfig(e)
                  ),
                  executeDag: (t) => (e.push("miss"), u.executeDag(t)),
                  validateDag: (t) => (e.push("miss"), u.validateDag(t))
                },
                getClientCacheStatus: () =>
                  ((e) => {
                    if (0 !== e.length)
                      return e.every((e) => "miss" === e)
                        ? "miss"
                        : e.every((e) => "hit" === e)
                          ? "hit"
                          : "mixed";
                  })(e)
              };
            }, [u, l]),
            m = (0, r.useCallback)(() => {
              l.resetQueries({ queryKey: ["analytics-query-gateway"] });
            }, [l]),
            d = (0, r.useMemo)(
              () => ({ cached: u, uncached: s, clearCache: m, createCacheTrackedClient: c }),
              [u, m, c, s]
            );
          return (0, t.jsx)(I.Provider, { value: d, children: a });
        },
        "useCachedAnalyticsQueryGateway",
        0,
        () => {
          let e = r.default.useContext(I);
          if (!e)
            throw Error(
              "useCachedAnalyticsQueryGateway must be used within a CachedAnalyticsQueryGatewayProvider"
            );
          let { cached: t, clearCache: n, createCacheTrackedClient: i } = e;
          return (0, r.useMemo)(
            () => ({
              client: t,
              clearCache: n,
              ...(void 0 === i ? {} : { createCacheTrackedClient: i })
            }),
            [t, n, i]
          );
        },
        "useUncachedAnalyticsQueryGateway",
        0,
        () => {
          let e = r.default.useContext(I);
          if (!e)
            throw Error(
              "useUncachedAnalyticsQueryGateway must be used within a CachedAnalyticsQueryGatewayProvider"
            );
          let { uncached: t } = e;
          return t;
        }
      ],
      460795
    );
  },
  575952,
  (e) => {
    "use strict";
    var t = e.i(221628),
      r = e.i(416340),
      n = e.i(607792),
      i = e.i(460795);
    e.s([
      "default",
      0,
      (e) => {
        let { children: r } = e;
        return (0, t.jsx)(i.default, { children: r });
      },
      "useRAQIV2Client",
      0,
      (e) => {
        let {
            client: t,
            clearCache: a,
            createCacheTrackedClient: o
          } = (0, i.useCachedAnalyticsQueryGateway)(),
          s = (0, i.useUncachedAnalyticsQueryGateway)(),
          l = e ? s : t,
          u = (0, r.useCallback)(() => {
            var r, n;
            if (e)
              return {
                client: { platformGatewayRAQIClient: s },
                getClientCacheStatus: () => "disabled"
              };
            let i = null == o ? void 0 : o();
            return {
              client: {
                platformGatewayRAQIClient: null != (r = null == i ? void 0 : i.client) ? r : t
              },
              getClientCacheStatus:
                null != (n = null == i ? void 0 : i.getClientCacheStatus) ? n : () => void 0
            };
          }, [o, e, t, s]);
        return (0, r.useMemo)(
          () => ({
            client: { platformGatewayRAQIClient: l },
            clearCache: e ? a : n.default,
            createClientCacheTracking: u
          }),
          [l, e, a, u]
        );
      }
    ]);
  },
  607792,
  (e) => {
    "use strict";
    e.s(["default", 0, function () {}]);
  },
  954597,
  (e) => {
    "use strict";
    var t = e.i(416340),
      r = e.i(533968),
      n = e.i(924164),
      i = e.i(480398);
    e.s([
      "default",
      0,
      function (e, a) {
        let o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          [l, u] = (0, t.useState)(() => ({
            makeRequest: a,
            isDataLoading: e.length > 0,
            isResponseFailed: !1,
            isUserForbidden: !1,
            data: new Map()
          })),
          c = (0, t.useRef)(a),
          m = (0, t.useRef)(!1),
          d = (0, t.useRef)(0),
          p = (0, t.useRef)(0),
          g = (0, t.useRef)(new Map()),
          y = (0, t.useRef)(new Map()),
          f = (0, t.useMemo)(() => new Map(), []),
          h = l.makeRequest === a,
          v = h ? l.data : f,
          R = (0, t.useRef)(!1),
          T = (0, t.useRef)(0);
        (0, t.useEffect)(() => {
          if (!o) return;
          let t = c.current !== a || (!h && 0 === y.current.size);
          t && ((c.current = a), (m.current = !0), g.current.clear(), y.current.clear());
          let f = t ? e : e.filter((e) => !l.data.has(e) && (m.current || !y.current.has(e)));
          if (0 === f.length) return;
          let v = d.current + 1;
          ((d.current = v),
            (p.current = v),
            f.forEach((e) => {
              (g.current.set(e, v), y.current.set(e, v));
            }),
            s && R.current ? (T.current += 1) : (R.current = !0),
            (async () => {
              try {
                let e = await a(f);
                if (c.current !== a) return;
                let t = f.filter((e) => g.current.get(e) === v);
                if (0 === t.length) return;
                ((m.current = !1),
                  f.forEach((e) => {
                    y.current.get(e) === v && y.current.delete(e);
                  }));
                let r = Array.from(e).filter((e) => {
                  var t;
                  let [r] = e;
                  return (null != (t = g.current.get(r)) ? t : 0) <= v;
                });
                (r.forEach((e) => {
                  let [t] = e;
                  return g.current.set(t, v);
                }),
                  u((e) => {
                    let n = e.makeRequest === a ? Array.from(e.data) : [],
                      i = p.current === v;
                    return {
                      makeRequest: a,
                      isDataLoading: y.current.size > 0,
                      isResponseFailed: !i && e.isResponseFailed,
                      isUserForbidden: !i && e.isUserForbidden,
                      data: new Map([...n, ...t.map((e) => [e, null]), ...r])
                    };
                  }));
              } catch (h) {
                var e;
                if (c.current !== a) return;
                let o = f.filter((e) => g.current.get(e) === v);
                if (0 === o.length) return;
                ((m.current = !1),
                  f.forEach((e) => {
                    y.current.get(e) === v && y.current.delete(e);
                  }));
                let s = p.current === v;
                if ((0, i.isRAQIV2LoadingException)(h))
                  return void u((e) => ({
                    makeRequest: a,
                    isDataLoading: y.current.size > 0,
                    isResponseFailed: !s && e.isResponseFailed,
                    isUserForbidden: !s && e.isUserForbidden,
                    data: e.data
                  }));
                let l = (0, r.getResponseFromError)(h),
                  d = null != (e = null == l ? void 0 : l.status) ? e : 500;
                u((e) => ({
                  makeRequest: a,
                  isDataLoading: y.current.size > 0,
                  isResponseFailed: !!s || e.isResponseFailed,
                  isUserForbidden: s
                    ? d === n.HttpStatusCodes.FORBIDDEN.valueOf()
                    : e.isUserForbidden,
                  data: t
                    ? new Map([
                        ...(e.makeRequest === a ? Array.from(e.data) : []),
                        ...o.map((e) => [e, null])
                      ])
                    : e.data
                }));
              }
            })());
        }, [o, e, a, h, l.data, s]);
        let A = (0, t.useMemo)(
          () =>
            e.map((e) => {
              var t;
              return null != (t = v.get(e)) ? t : null;
            }),
          [v, e]
        );
        return {
          isDataLoading: !o || (h ? l.isDataLoading : e.length > 0),
          isResponseFailed: h && l.isResponseFailed,
          isUserForbidden: h && l.isUserForbidden,
          data: v,
          orderedData: A,
          requestIdentity: a,
          requestVersion: T.current
        };
      }
    ]);
  },
  642635,
  121936,
  244045,
  (e) => {
    "use strict";
    e.s(["DEFAULT_COMPARISON_CONFIG", 0, { chip: !0, rangePolicy: "shortRangeOnly" }], 642635);
    var t = e.i(31611);
    let r = [t.RAQIV2Dimension.ThumbnailAsset];
    e.s(["breakdownDimensionsWithOtherSeries", 0, r], 121936);
    var n = e.i(927868);
    e.s(
      [
        "getTopNBreakdownConfig",
        0,
        (e) => {
          if (!(0, n.isValidEnumValue)(t.RAQIV2UIPseudoDimension, e)) return;
          let { pseudoDimensionConfig: r } = t.RAQIV2PseudoDimensionDisplayConfig[e];
          return r.type === t.RAQIV2UIPseudoDimensionType.TopNBreakdown ? r : void 0;
        },
        "isTopNBreakdownDimension",
        0,
        (e) =>
          (0, n.isValidEnumValue)(t.RAQIV2UIPseudoDimension, e) &&
          t.RAQIV2PseudoDimensionDisplayConfig[e].pseudoDimensionConfig.type ===
            t.RAQIV2UIPseudoDimensionType.TopNBreakdown
      ],
      244045
    );
  },
  34293,
  341075,
  346046,
  720582,
  (e) => {
    "use strict";
    var t = e.i(552140),
      r = e.i(31611),
      n = e.i(510476),
      i = e.i(927868),
      a = e.i(169717),
      o = e.i(11517),
      s = e.i(973005),
      l = e.i(244045),
      u = e.i(405005),
      c = e.i(772147),
      m = e.i(919820),
      d = e.i(897362);
    let p = (e) => void 0 !== e.orderTimeRangeDays && e.orderTimeRangeDays > 0,
      g = (e) => {
        var t, r, n;
        return {
          n: e.n,
          dimension: e.filterAndBreakdownDimension,
          orderByMetric: null == (t = e.orderConfig) ? void 0 : t.metric,
          orderFilters:
            null == (n = e.orderConfig) || null == (r = n.filters)
              ? void 0
              : r.map((e) => ({
                  dimension: e.dimension,
                  values: [...e.values],
                  operation: e.operation
                })),
          orderTimeRangeDays: "query" === e.limitTimeRange ? void 0 : e.limitTimeRange.previousDays,
          excludeOtherSeries: !e.showOther
        };
      };
    e.s(["isPinnedRankTopNConfig", 0, p, "topNPseudoDimensionToAceConfig", 0, g], 341075);
    let y = (e) => ({ dimensionBreakdown: { dimension: e } }),
      f = (e) => ({
        dimensionBreakdown: {
          dimension: e.dimension,
          excludeOtherSeries: e.excludeOtherSeries,
          rank: {
            direction: t.RankDirection.Top,
            n: e.n,
            orderByMetric: e.orderByMetric ? { metric: e.orderByMetric } : void 0,
            orderFilters: e.orderFilters,
            orderTimeRange: p(e) ? { trailingDays: { days: e.orderTimeRangeDays } } : void 0
          }
        }
      });
    e.s(["dimensionToRankBreakdownSpec", 0, y, "topNConfigToRankBreakdownSpec", 0, f], 346046);
    let h = "output_main",
      v = "output_total",
      R = {
        "+": t.NodeType.Add,
        "-": t.NodeType.Subtract,
        "*": t.NodeType.Multiply,
        "/": t.NodeType.Divide,
        "^": t.NodeType.Power
      },
      T = (e, r, n, i) => {
        switch (e.type) {
          case "identifier": {
            let t = r.get(e.name);
            if (!t) throw Error('Unknown variable "'.concat(e.name, '"'));
            return t;
          }
          case "number": {
            let r = i.nextConstantId();
            return (
              n.push({ id: r, type: t.NodeType.Constant, constantConfig: { value: e.value } }),
              r
            );
          }
          case "binary": {
            let t = T(e.left, r, n, i),
              a = T(e.right, r, n, i),
              o = i.nextMathId();
            return (n.push({ id: o, type: R[e.operator], mathConfig: { inputs: [t, a] } }), o);
          }
          case "function":
            if ("log" === e.name) {
              let a,
                o = T(e.args[0], r, n, i),
                s = e.args[1]
                  ? T(e.args[1], r, n, i)
                  : ((a = i.nextConstantId()),
                    n.push({ id: a, type: t.NodeType.Constant, constantConfig: { value: Math.E } }),
                    a),
                l = i.nextMathId();
              return (n.push({ id: l, type: t.NodeType.Log, mathConfig: { inputs: [o, s] } }), l);
            }
            throw Error("Unsupported function: ".concat(String(e)));
          default:
            throw Error("Unsupported AST node: ".concat(String(e)));
        }
      },
      A = (e) => {
        let {
            computedMetric: r,
            preparedSources: n,
            ast: i,
            globalFilters: a,
            breakdownSpecs: s,
            omitSourcePseudoDimensionValues: l,
            outputNodeId: u,
            outputAlias: m,
            nodeIdSuffix: d,
            nodes: p
          } = e,
          g = new Map(),
          y = new Set();
        n.forEach((e) => {
          var r;
          if (y.has(e.key))
            throw Error('Duplicate variable key "'.concat(e.key, '" in computed metric'));
          y.add(e.key);
          let { queryMetric: n, acePseudoDimensionValue: i, queryFilters: u } = e;
          null == (r = e.queryFilters) ||
            r.forEach((t) => {
              if (!e.supportedDimensions.includes(t.dimension))
                throw new c.RAQIV2ValidationError(
                  c.RAQIV2ValidationErrorType.UnsupportedFilter,
                  "Metric "
                    .concat(e.queryMetric, " does not support source-level filter dimension ")
                    .concat(t.dimension, "."),
                  (0, o.getUIMetricFromAtomicMetricLike)(e.metric),
                  t.dimension
                );
            });
          let m = "query_".concat(e.key).concat(d);
          g.set(e.key, m);
          let f = {
            metric: n,
            breakdown: void 0,
            filters: ((e, t) => {
              let r = [...(null != t ? t : []), ...(null != e ? e : [])];
              if (0 === r.length) return;
              let n = [],
                i = new Set();
              return (
                r.forEach((e) => {
                  let t = JSON.stringify(e);
                  i.has(t) || (i.add(t), n.push({ ...e, values: [...e.values] }));
                }),
                n
              );
            })(u, a),
            topN: void 0,
            breakdownSpecs: (null == s ? void 0 : s.length) ? s : void 0,
            pseudoDimensionValues: !l && i ? [i] : void 0
          };
          p.push({ id: m, type: t.NodeType.Query, queryConfig: f });
        });
        let f = 0,
          h = 0,
          v = T(i, g, p, {
            nextMathId: () => ((f += 1), "math_".concat(f).concat(d)),
            nextConstantId: () => ((h += 1), "const_".concat(h).concat(d))
          }),
          R = v;
        if (r.l7Smoothing) {
          let e = "rolling_l7_avg".concat(d);
          (p.push({
            id: e,
            type: t.NodeType.RollingWindow,
            rollingWindowConfig: {
              input: v,
              windowSize: 7,
              reducer: t.WindowReducer.Avg,
              avgMode: t.WindowAvgMode.WindowSize
            }
          }),
            (R = e));
        }
        p.push({ id: u, type: t.NodeType.Output, outputConfig: { input: R, alias: m } });
      };
    e.s(
      [
        "MAIN_OUTPUT_NODE_ID",
        0,
        h,
        "TOTAL_OUTPUT_NODE_ID",
        0,
        v,
        "buildComputedMetricDag",
        0,
        function (e) {
          var p, R, T;
          let D,
            w,
            S,
            I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { metric: C } = e;
          if (!(0, o.isComputedMetric)(C))
            throw Error("Expected computed metric request for ACE DAG construction");
          let M = C.sources.map((e) => e.key),
            E = (0, d.parseComputedMetricFormula)(C.formula, M);
          if (!E.ok) throw Error(E.errors.join("; "));
          let V = (0, m.default)(C),
            P = V.map((e) => e.key),
            k = V.map((e) => ({
              ...e,
              ...((e) => {
                var t, n;
                let { metric: i, filters: a, pseudoDimensionValues: s } = e,
                  l = (0, o.getUIMetricFromAtomicMetricLike)(i),
                  u = (0, o.isCustomEventsAtomicMetricLike)(i) ? i : null,
                  c =
                    "customEventName" in e && "string" == typeof e.customEventName
                      ? e.customEventName
                      : void 0,
                  m = null != (t = null == u ? void 0 : u.customEventName) ? t : c,
                  d =
                    (null == u ? void 0 : u.aggregationType) !== void 0
                      ? {
                          aggregationType: u.aggregationType,
                          percentile: null != (n = null == s ? void 0 : s.percentile) ? n : null
                        }
                      : s,
                  p =
                    m && l === r.RAQIV2UIMetric.CustomEventsV2
                      ? [
                          { dimension: r.RAQIV2Dimension.CustomEventName, values: [m] },
                          ...(null != a ? a : [])
                        ]
                      : a,
                  g = p && p.length > 0 ? p : void 0,
                  y = Object.hasOwn(r.RAQIV2MetricToSupportedDimensions, l)
                    ? r.RAQIV2MetricToSupportedDimensions[l]
                    : [];
                return Object.hasOwn(r.RAQIV2UIMetricToAPIConfig, l)
                  ? {
                      queryMetric: l,
                      acePseudoDimensionValue: ((e, t) => {
                        var n, i;
                        if (!t) return;
                        let { dimension: a } = r.RAQIV2UIMetricToAPIConfig[e];
                        switch (a) {
                          case r.RAQIV2UIPseudoDimension.PercentileType:
                            return null != (n = t.percentile) ? n : void 0;
                          case r.RAQIV2UIPseudoDimension.AggregationType:
                            return null != (i = t.aggregationType) ? i : void 0;
                          default:
                            throw Error("Unhandled fanout dimension: ".concat(String(a)));
                        }
                      })(l, d),
                      queryFilters: g,
                      supportedDimensions: y
                    }
                  : {
                      queryMetric: l,
                      acePseudoDimensionValue: void 0,
                      queryFilters: g,
                      supportedDimensions: y
                    };
              })(e)
            })),
            U = ((e) => {
              let [t, ...r] = e;
              return t
                ? new Set(
                    t.supportedDimensions.filter((e) =>
                      r.every((t) => t.supportedDimensions.includes(e))
                    )
                  )
                : new Set();
            })(k),
            b = e.metricVariant,
            { topNBreakdowns: Q, passthroughBreakdowns: F } =
              ((D = []),
              (w = []),
              null == (R = e.breakdown) ||
                R.forEach((e) => {
                  (0, l.isTopNBreakdownDimension)(e) ? D.push(e) : w.push(e);
                }),
              { topNBreakdowns: D, passthroughBreakdowns: w }),
            N = Q.flatMap((e) => {
              let t = (0, l.getTopNBreakdownConfig)(e);
              return t &&
                (0, i.isValidEnumValue)(r.RAQIV2Dimension, t.filterAndBreakdownDimension) &&
                U.has(t.filterAndBreakdownDimension)
                ? [g(t)]
                : [];
            }),
            O =
              ((T = [
                ...F.filter(
                  (e) => !(0, s.default)(e) && (U.has(e) || (0, a.isDurationBucketDimension)(e))
                ),
                ...N.map((e) => e.dimension)
              ]),
              (S = new Set()),
              T.filter((e) => !S.has(e) && (S.add(e), !0))),
            q = (0, u.isMetricVariantFanout)(b) ? (0, u.getMetricFanoutDimensionInfo)(b) : void 0;
          if (q && !U.has(q.dimension))
            throw new c.RAQIV2ValidationError(
              c.RAQIV2ValidationErrorType.UnsupportedBreakdown,
              "Not every computed metric source supports ".concat(q.dimension, "."),
              (0, o.getUIMetricFromAtomicMetricLike)(C.sources[0].metric),
              q.dimension
            );
          let B = new Set(N.map((e) => e.dimension)),
            x = [
              ...O.flatMap((e) =>
                !B.has(e) && (0, i.isValidEnumValue)(r.RAQIV2Dimension, e) ? [y(e)] : []
              ),
              ...N.map(f),
              ...(q ? [(0, u.buildVariantBreakdownSpec)(q)] : [])
            ],
            _ = O.filter(a.isDurationBucketDimension),
            G = O.filter((e) => !(0, a.isDurationBucketDimension)(e)),
            L = _.length > 0 ? _.map(y) : void 0,
            W =
              null == (p = e.filter)
                ? void 0
                : p.filter((e) => {
                    let t;
                    return (
                      (t = e.dimension),
                      !(0, s.default)(t) &&
                        t !== r.RAQIV2Dimension.CustomEventName &&
                        U.has(e.dimension)
                    );
                  }),
            j = "computed_".concat(P.join("_")),
            Y = [];
          (A({
            computedMetric: C,
            preparedSources: k,
            ast: E.ast,
            globalFilters: W,
            breakdownSpecs: x,
            omitSourcePseudoDimensionValues: void 0 !== q,
            outputNodeId: h,
            outputAlias: j,
            nodeIdSuffix: "",
            nodes: Y
          }),
            I.includeTotalBranch &&
              G.length > 0 &&
              void 0 === q &&
              A({
                computedMetric: C,
                preparedSources: k,
                ast: E.ast,
                globalFilters: W,
                breakdownSpecs: L,
                omitSourcePseudoDimensionValues: void 0 !== q,
                outputNodeId: v,
                outputAlias: "".concat(j, "_total"),
                nodeIdSuffix: "_total",
                nodes: Y
              }));
          let H = {
            resourceType: (0, n.mapChartResourceTypeToTargetResourceType)(
              e.resource.type,
              t.ResourceType
            ),
            resourceId: e.resource.id.toString(),
            granularity: e.granularity,
            startTime: e.timeSpec.startTime.toISOString(),
            endTime: e.timeSpec.endTime.toISOString()
          };
          return {
            graph: { id: "computed_metric_".concat(j), name: "Computed Metric DAG", nodes: Y },
            context: H
          };
        }
      ],
      34293
    );
    var D = e.i(884227);
    class w extends D.default {
      constructor(e) {
        super(
          "Computed metric execution failed: ".concat(e.message),
          "ComputedMetricDagExecutionError",
          e
        );
      }
    }
    e.s(["default", 0, w, "isComputedMetricDagExecutionError", 0, (e) => e instanceof w], 720582);
  },
  919820,
  897362,
  (e) => {
    "use strict";
    var t = e.i(721281);
    let r = {
        log: {
          minArgs: 1,
          maxArgs: 2,
          missingArgsError: "log() requires one or two arguments",
          tooManyArgsError: "log() supports one or two arguments"
        }
      },
      n = ["A", "B", "C", "D"],
      i = n.length,
      a = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 },
      o = new Set(n),
      s = n.join(", "),
      l = (e) => /[A-Za-z_]/.test(e),
      u = (e) => /[A-Za-z0-9_]/.test(e),
      c = (e) => /[0-9]/.test(e),
      m = String.fromCharCode(215);
    class d {
      parse() {
        let e = this.parseExpression(0),
          t = this.current();
        if (t) {
          if ("rparen" === t.type) throw Error("Mismatched parentheses in formula");
          throw Error('Unexpected token "'.concat(this.describeToken(t), '"'));
        }
        return e;
      }
      parseExpression(e) {
        let t = this.parsePrimary();
        for (;;) {
          let r = this.current();
          if ((null == r ? void 0 : r.type) !== "operator" || a[r.value] < e) break;
          let n = r.value;
          this.index += 1;
          let i = this.current();
          if (!i || "rparen" === i.type || "comma" === i.type)
            throw Error('Missing operand for operator "'.concat(n, '"'));
          let o = this.parseExpression("^" === n ? a[n] : a[n] + 1);
          t = { type: "binary", operator: n, left: t, right: o };
        }
        return t;
      }
      parsePrimary() {
        var e, t, r;
        let n = this.current();
        if (!n) throw Error("Formula did not resolve to a single expression");
        if ("number" === n.type) return ((this.index += 1), { type: "number", value: n.value });
        if (
          "operator" === n.type &&
          "-" === n.value &&
          (null == (e = this.peek()) ? void 0 : e.type) === "number"
        ) {
          this.index += 1;
          let e = this.current();
          if ((null == e ? void 0 : e.type) !== "number")
            throw Error('Missing operand for operator "-"');
          return ((this.index += 1), { type: "number", value: -e.value });
        }
        if ("identifier" === n.type)
          return ((this.index += 1), (null == (t = this.current()) ? void 0 : t.type) === "lparen")
            ? this.parseFunctionCall(n.value)
            : { type: "identifier", name: n.value };
        if ("lparen" === n.type) {
          this.index += 1;
          let e = this.parseExpression(0);
          if ((null == (r = this.current()) ? void 0 : r.type) !== "rparen")
            throw Error("Mismatched parentheses in formula");
          return ((this.index += 1), e);
        }
        throw Error('Unexpected token "'.concat(this.describeToken(n), '"'));
      }
      parseFunctionCall(e) {
        var t, n, i;
        if (!Object.hasOwn(r, e)) throw Error('Unsupported function "'.concat(e, '"'));
        let a = r[e];
        if (((this.index += 1), (null == (t = this.current()) ? void 0 : t.type) === "rparen"))
          throw Error(a.missingArgsError);
        let o = [this.parseExpression(0)];
        for (; (null == (n = this.current()) ? void 0 : n.type) === "comma";)
          ((this.index += 1), o.push(this.parseExpression(0)));
        if (o.length < a.minArgs) throw Error(a.missingArgsError);
        if (o.length > a.maxArgs) throw Error(a.tooManyArgsError);
        if ((null == (i = this.current()) ? void 0 : i.type) !== "rparen")
          throw Error("Mismatched parentheses in formula");
        this.index += 1;
        let [s, l] = o;
        if (!s) throw Error(a.missingArgsError);
        if (1 === o.length) return { type: "function", name: e, args: [s] };
        if (!l) throw Error(a.missingArgsError);
        return { type: "function", name: e, args: [s, l] };
      }
      current() {
        return this.tokens[this.index];
      }
      peek() {
        return this.tokens[this.index + 1];
      }
      describeToken(e) {
        switch (e.type) {
          case "identifier":
          case "operator":
            return e.value;
          case "number":
            return String(e.value);
          case "lparen":
            return "(";
          case "rparen":
            return ")";
          case "comma":
            return ",";
          default:
            return String(e);
        }
      }
      constructor(e) {
        ((0, t._)(this, "tokens", void 0), (0, t._)(this, "index", 0), (this.tokens = e));
      }
    }
    let p = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set();
        switch (e.type) {
          case "identifier":
            return (t.add(e.name), t);
          case "number":
            return t;
          case "binary":
            return (p(e.left, t), p(e.right, t), t);
          case "function":
            return (e.args.forEach((e) => p(e, t)), t);
          default:
            throw Error("Unsupported AST node: ".concat(String(e)));
        }
      },
      g = (e) => {
        switch (e.type) {
          case "number":
            return e.value;
          case "identifier":
            return null;
          case "binary": {
            let t = g(e.left),
              r = g(e.right);
            if (null === t || null === r) return null;
            switch (e.operator) {
              case "+":
                return t + r;
              case "-":
                return t - r;
              case "*":
                return t * r;
              case "/":
                return t / r;
              case "^":
                return t ** r;
              default: {
                let t = e.operator;
                throw Error("Unsupported operator: ".concat(String(t)));
              }
            }
          }
          case "function":
            if ("log" === e.name) {
              let t = g(e.args[0]),
                r = e.args[1] ? g(e.args[1]) : Math.E;
              return null === t || null === r ? null : Math.log(t) / Math.log(r);
            }
            throw Error("Unsupported function: ".concat(String(e)));
          default:
            throw Error("Unsupported AST node: ".concat(String(e)));
        }
      },
      y = (e, t) => {
        if (t.length > i)
          return {
            ok: !1,
            errors: ["Computed metrics support up to ".concat(i, " variables: ").concat(s)]
          };
        let r = t.filter((e) => !o.has(e));
        if (r.length > 0)
          return {
            ok: !1,
            errors: r.map((e) => 'Unsupported variable "'.concat(e, '". Use only ').concat(s))
          };
        if (!e.trim()) return { ok: !1, errors: ["Formula cannot be empty"] };
        try {
          let r,
            n,
            i = ((e) => {
              let t = e.replaceAll(m, "*").replaceAll(/\b[xX]\b/g, "*"),
                r = [],
                n = 0;
              for (; n < t.length;) {
                let e = t[n];
                if (/\s/.test(e)) n += 1;
                else if ("(" === e) (r.push({ type: "lparen" }), (n += 1));
                else if (")" === e) (r.push({ type: "rparen" }), (n += 1));
                else if ("," === e) (r.push({ type: "comma" }), (n += 1));
                else if ("+" === e || "-" === e || "*" === e || "/" === e || "^" === e)
                  (r.push({ type: "operator", value: e }), (n += 1));
                else if (c(e) || ("." === e && n + 1 < t.length && c(t[n + 1]))) {
                  let e = n + 1;
                  for (; e < t.length && (c(t[e]) || "." === t[e]);) e += 1;
                  let i = Number(t.slice(n, e));
                  if (Number.isNaN(i) || !Number.isFinite(i))
                    throw TypeError("Invalid number at position ".concat(n));
                  (r.push({ type: "number", value: i }), (n = e));
                } else if (l(e)) {
                  let e = n + 1;
                  for (; e < t.length && u(t[e]);) e += 1;
                  let i = t.slice(n, e);
                  (r.push({ type: "identifier", value: i }), (n = e));
                } else throw Error('Unexpected token "'.concat(e, '" at position ').concat(n));
              }
              return r;
            })(e),
            a = new d(i).parse(),
            o = p(a),
            s = Array.from(o).filter((e) => !t.includes(e));
          if (s.length > 0)
            return { ok: !1, errors: s.map((e) => 'Unknown variable "'.concat(e, '"')) };
          let y =
            ((r = []),
            (n = (e) => {
              switch (e.type) {
                case "identifier":
                case "number":
                  return;
                case "binary":
                  (n(e.left), n(e.right));
                  return;
                case "function":
                  if ((e.args.forEach(n), "log" === e.name)) {
                    let t = g(e.args[0]),
                      n = e.args[1] ? g(e.args[1]) : null;
                    (null !== t && t <= 0 && r.push("log() value must be greater than 0"),
                      null !== n &&
                        (n <= 0 || Math.abs(n - 1) < Number.EPSILON) &&
                        r.push("log() base must be greater than 0 and not equal to 1"));
                    return;
                  }
                  throw Error("Unsupported function: ".concat(String(e)));
                default:
                  throw Error("Unsupported AST node: ".concat(String(e)));
              }
            })(a),
            r);
          if (y.length > 0) return { ok: !1, errors: y };
          return { ok: !0, ast: a, identifiers: Array.from(o) };
        } catch (e) {
          return { ok: !1, errors: [e instanceof Error ? e.message : "Failed to parse formula"] };
        }
      };
    (e.s(["COMPUTED_METRIC_VARIABLE_KEYS", 0, n, "parseComputedMetricFormula", 0, y], 897362),
      e.s(
        [
          "default",
          0,
          (e) => {
            let t = y(
              e.formula,
              e.sources.map((e) => e.key)
            );
            if (!t.ok) return e.sources;
            let r = new Set(t.identifiers);
            return e.sources.filter((e) => r.has(e.key));
          }
        ],
        919820
      ));
  },
  369406,
  463263,
  (e) => {
    "use strict";
    var t = e.i(252842),
      r = e.i(31611);
    e.s(["DAY_MS", 0, 864e5, "HOUR_MS", 0, 36e5], 463263);
    let n = [
        [r.RAQIV2DateRangeType.Last1Hour, 36e5],
        [r.RAQIV2DateRangeType.Last1Day, 864e5],
        [r.RAQIV2DateRangeType.Last3Days, 1728e5],
        [r.RAQIV2DateRangeType.Last7Days, 5184e5],
        [r.RAQIV2DateRangeType.Last28Days, 23328e5],
        [r.RAQIV2DateRangeType.Last56Days, 4752e6],
        [r.RAQIV2DateRangeType.Last90Days, 76896e5]
      ],
      i = Object.fromEntries(n);
    e.s(
      [
        "PRESET_DATE_RANGE_DURATIONS_MS",
        0,
        n,
        "PRESET_DATE_RANGE_DURATION_MS",
        0,
        i,
        "calculateDatesFromRangeType",
        0,
        function (e) {
          let {
            rangeType: n,
            customMinTime: i,
            customMaxTime: a,
            maxEndDate: o,
            minStartDate: s,
            maxRangeDays: l
          } = e;
          switch (n) {
            case r.RAQIV2DateRangeType.Last1Hour: {
              let e = new Date(o);
              return (e.setHours(e.getHours() - 1), { startDate: e, endDate: o });
            }
            case r.RAQIV2DateRangeType.Last1Day:
              return { startDate: (0, t.subDays)(o, 1), endDate: o };
            case r.RAQIV2DateRangeType.Last3Days:
              return { startDate: (0, t.subDays)(o, 2), endDate: o };
            case r.RAQIV2DateRangeType.Last7Days:
              return { startDate: (0, t.subDays)(o, 6), endDate: o };
            case r.RAQIV2DateRangeType.Last28Days:
              return { startDate: (0, t.subDays)(o, 27), endDate: o };
            case r.RAQIV2DateRangeType.Last56Days:
              return { startDate: (0, t.subDays)(o, 55), endDate: o };
            case r.RAQIV2DateRangeType.Last90Days:
              return { startDate: (0, t.subDays)(o, 89), endDate: o };
            case r.RAQIV2DateRangeType.Custom: {
              let e = i ? new Date(i) : (0, t.subDays)(o, 27),
                r = a ? new Date(a) : o;
              if ((e < s && (e = s), r > o && (r = o), l)) {
                let t = 24 * l * 36e5;
                r.getTime() - e.getTime() > t && (e = new Date(r.getTime() - t));
              }
              return (
                e.getTime() > r.getTime() &&
                  ((e = (0, t.subDays)(o, 27)) < s && (e = s),
                  (r = o),
                  e.getTime() > r.getTime() && (e = r)),
                { startDate: e, endDate: r }
              );
            }
            default:
              return { startDate: (0, t.subDays)(o, 27), endDate: o };
          }
        },
        "getSafeDefaultRange",
        0,
        function (e, t) {
          var n;
          return e && 0 !== e.length
            ? t && e.includes(t)
              ? t
              : null != (n = e[0])
                ? n
                : r.RAQIV2DateRangeType.Last28Days
            : null != t
              ? t
              : r.RAQIV2DateRangeType.Last28Days;
        }
      ],
      369406
    );
  },
  606662,
  (e) => {
    "use strict";
    var t = e.i(31611);
    e.s([
      "getAPIMetricFromUIMetric",
      0,
      (e, r) => {
        let n = t.RAQIV2UIMetricToAPIConfig[e],
          i = n.dimension;
        switch (i) {
          case t.RAQIV2UIPseudoDimension.PercentileType:
            if (!r.percentile) return n.defaultMetric;
            return n.byPercentileType[r.percentile];
          case t.RAQIV2UIPseudoDimension.AggregationType:
            if (!r.aggregationType) return n.defaultMetric;
            return n.byAggregationType[r.aggregationType];
          default:
            throw Error("Unhandled fanout dimension: ".concat(String(i)));
        }
      },
      "getAllAPIMetricsFromUIMetric",
      0,
      (e) => {
        let r = t.RAQIV2UIMetricToAPIConfig[e],
          n = r.dimension;
        switch (n) {
          case t.RAQIV2UIPseudoDimension.PercentileType:
            return Object.values(r.byPercentileType);
          case t.RAQIV2UIPseudoDimension.AggregationType:
            return Object.values(r.byAggregationType);
          default:
            throw Error("Unhandled fanout dimension: ".concat(String(n)));
        }
      }
    ]);
  },
  842776,
  (e) => {
    "use strict";
    var t = e.i(112402),
      r = e.i(152156),
      n = e.i(956154);
    e.s([
      "default",
      0,
      (e, i, a, o) => {
        let { startTime: s, endTime: l } = e;
        if (o) {
          let e = l.getTime() - s.getTime();
          return { comparisonStartDate: o, comparisonEndDate: new Date(o.getTime() + e) };
        }
        if (a) {
          let e = n.COMPARISON_RELATIVE_OFFSET_TO_MS[a];
          return {
            comparisonStartDate: new Date(s.getTime() - e),
            comparisonEndDate: new Date(l.getTime() - e)
          };
        }
        return (0, t.getComparisonTimeRange)(s, l, (0, r.getComparisonWindowGranularity)(i, e));
      }
    ]);
  },
  532075,
  (e) => {
    "use strict";
    var t = e.i(31611),
      r = e.i(739167),
      n = e.i(927868);
    e.s([
      "getUIMetric",
      0,
      (e) => {
        if (
          (0, n.isValidEnumValue)(t.RAQIV2UIMetric, e) ||
          (0, n.isValidEnumValue)(t.RAQIV2Metric, e)
        )
          return e;
        let i = Object.entries(t.RAQIV2UIMetricToAPIConfig).find((r) => {
          let [, n] = r,
            { defaultMetric: i, dimension: a } = n;
          if (i === e) return !0;
          switch (a) {
            case t.RAQIV2UIPseudoDimension.AggregationType:
              if (Object.values(n.byAggregationType).includes(e)) return !0;
              break;
            case t.RAQIV2UIPseudoDimension.PercentileType:
              if (Object.values(n.byPercentileType).includes(e)) return !0;
              break;
            default:
              throw Error("Unhandled dimension: ".concat(a));
          }
          return !1;
        });
        if (i) return i[0];
        let a = "No UI metric found for API metric: ".concat(e);
        throw ((0, r.default)(a), Error(a));
      }
    ]);
  },
  26770,
  356141,
  (e) => {
    "use strict";
    var t,
      r = e.i(552140),
      n = e.i(31611),
      i = e.i(739167),
      a = e.i(500957),
      o = e.i(510476),
      s = e.i(927868),
      l = e.i(215928),
      u = e.i(908374),
      c = e.i(169717),
      m = e.i(642635),
      d = e.i(11517),
      p = e.i(121936),
      g = e.i(34293),
      y = e.i(720582),
      f = e.i(369406),
      h = e.i(606662),
      v = e.i(842776),
      R = e.i(532075),
      T = e.i(463263);
    let A = (e) => Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
      D = (e, t) =>
        "allRanges" === t || Math.abs(A(e.endTime) - A(e.startTime)) / T.DAY_MS + 1 < 180;
    e.s(["default", 0, D], 356141);
    var w = e.i(656047),
      S = e.i(884227);
    let I = (e) => {
        var t, r, n;
        let i = null == (t = e.result) ? void 0 : t.outputs;
        if (!i || 0 === i.length) return null;
        if (i.length > 2)
          throw Error(
            "Computed metric DAG expected at most two output nodes, received ".concat(i.length)
          );
        let a = i.find((e) => e.nodeId === g.MAIN_OUTPUT_NODE_ID),
          o = i.find((e) => e.nodeId === g.TOTAL_OUTPUT_NODE_ID),
          s = void 0 === a && void 0 === o && 1 === i.length ? i[0] : void 0,
          l = null != a ? a : s,
          u = null == l || null == (r = l.timeSeries) ? void 0 : r.values;
        if (!u || !Array.isArray(u)) return null;
        let c = { response: { values: u } },
          m = null == o || null == (n = o.timeSeries) ? void 0 : n.values;
        return (m && Array.isArray(m) && (c.totalSeriesResponse = { values: m }), c);
      },
      C = (e) =>
        "string" == typeof e && e.length > 0 ? e : "number" == typeof e ? String(e) : void 0,
      M = (e) =>
        new S.default("ACE DAG execution failed: ".concat(e.message), "AceDagExecutionError", e),
      E = { maxAttempts: 6, initialPollingInterval: 300, maxAccumulativeDelayToStartBackoff: 1200 },
      V = async function (e, t, r) {
        let n =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : "ACE DAG execution did not produce any query results";
        return (0, w.pollAnalyticsOperation)(
          async () => {
            var r, n, i, a, o, s;
            let l, u, c;
            return (
              (l =
                (null !=
                (n =
                  null == (a = (r = await e.platformGatewayRAQIClient.executeDag(t)).result) ||
                  null == (i = a.errors)
                    ? void 0
                    : i.length)
                  ? n
                  : 0) > 0),
              (u = !!(null == (s = r.result) || null == (o = s.outputs) ? void 0 : o.length)),
              (c = !1 === r.pending || u || l),
              { ...r, done: c }
            );
          },
          (e) => {
            let t = r(e);
            if (null == t) throw Error(n);
            return t;
          },
          E
        );
      },
      P = async function (e, t) {
        let { createExecutionError: r = M, adaptResult: n = I } =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          return await V(e, t, (e) => {
            var t, i, a, o;
            let s,
              l = (s =
                null == (o = e.result) || null == (a = o.errors)
                  ? void 0
                  : a.find((e) => {
                      var t;
                      return null != (t = C(e.message)) ? t : C(e.code);
                    }))
                ? {
                    message:
                      null != (t = null != (i = C(s.message)) ? i : C(s.code))
                        ? t
                        : "Computed metric execution failed",
                    code: C(s.code),
                    severity: C(s.severity),
                    nodeId: C(s.nodeId),
                    suggestion: C(s.suggestion),
                    operationId: C(e.operationId)
                  }
                : null;
            if (l) throw r(l);
            return n(e);
          });
        } catch (e) {
          if (e instanceof w.RAQIQueryError)
            throw r({
              message: e.message,
              code: void 0,
              severity: void 0,
              nodeId: void 0,
              suggestion: void 0,
              operationId: e.operationPath
            });
          throw e;
        }
      };
    var k = e.i(346046),
      U = e.i(341075),
      b = S;
    class Q extends b.default {
      constructor(e) {
        super("Rank/TopN DAG execution failed: ".concat(e.message), "RankDagExecutionError", e);
      }
    }
    let F = (e, t, r) => {
      if (!e.values) return {};
      let n = t.getTime(),
        i = r.getTime();
      return {
        values: e.values.map((e) => {
          var t, r;
          return {
            breakdownValue: null == (t = e.breakdownValue) ? void 0 : t.map((e) => ({ ...e })),
            dataPoints:
              null == (r = e.dataPoints)
                ? void 0
                : r.filter((e) => {
                    if (!e.time) return !1;
                    let t = new Date(e.time).getTime();
                    return t >= n && t <= i;
                  })
          };
        })
      };
    };
    var N = e.i(328712);
    let O = "query_rank_selection",
      q = "query_main",
      B = "query_other",
      x = "query_total",
      _ = "output_other",
      G = (e, t) => {
        let r = new Set(t.map((e) => e.dimension));
        return [
          ...e.filter((e) => !r.has(e)).map(k.dimensionToRankBreakdownSpec),
          ...t.map(k.topNConfigToRankBreakdownSpec)
        ];
      },
      L = (e) => e.filter((e) => !e.excludeOtherSeries).map((e) => e.dimension),
      W = (e, t) => ({ id: e, type: r.NodeType.Output, outputConfig: { input: t, alias: e } }),
      j = (e) => {
        let t,
          n,
          {
            request: i,
            metric: s,
            apiBreakdown: l,
            topNConfigs: u,
            fetchTotalSeries: m,
            useDynamicFilterBindings: d = !1
          } = e,
          p =
            null == (t = i.filter)
              ? void 0
              : t.map((e) => {
                  let { dimension: t, values: r, operation: n } = e;
                  return { dimension: t, values: [...r], operation: n };
                }),
          y = {
            metric: s,
            filters: p,
            breakdownSpecs: d
              ? G(l, u).map((e) =>
                  e.dimensionBreakdown.rank
                    ? {
                        ...e,
                        dimensionBreakdown: { ...e.dimensionBreakdown, excludeOtherSeries: !0 }
                      }
                    : e
                )
              : G(l, u)
          },
          f = d
            ? {
                metric: s,
                breakdownSpecs: l.map(k.dimensionToRankBreakdownSpec),
                filters: p,
                dynamicFilterBindings:
                  ((n = a.AnalyticsQueryGatewayAPIFilterOperation.Contains),
                  u.map((e) => ({ input: O, dimension: e.dimension, operation: n })))
              }
            : y,
          h = [
            ...(d ? [{ id: O, type: r.NodeType.Query, queryConfig: y }] : []),
            { id: q, type: r.NodeType.Query, queryConfig: f },
            W(g.MAIN_OUTPUT_NODE_ID, q)
          ],
          v = L(u);
        if (d && v.length > 0) {
          let e = new Set(v),
            t = l.filter((t) => !e.has(t)),
            n = {
              metric: s,
              breakdownSpecs: t.length > 0 ? t.map(k.dimensionToRankBreakdownSpec) : void 0,
              filters: p,
              dynamicFilterBindings: u.map((e) => ({
                input: O,
                dimension: e.dimension,
                operation: e.excludeOtherSeries
                  ? a.AnalyticsQueryGatewayAPIFilterOperation.Contains
                  : a.AnalyticsQueryGatewayAPIFilterOperation.NotContains
              }))
            };
          h.push({ id: B, type: r.NodeType.Query, queryConfig: n }, W(_, B));
        }
        let R = l.filter(c.isDurationBucketDimension),
          T = l.filter((e) => !(0, c.isDurationBucketDimension)(e));
        if (m && T.length > 0) {
          let e = R.length > 0 ? R.map(k.dimensionToRankBreakdownSpec) : void 0;
          h.push(
            {
              id: x,
              type: r.NodeType.Query,
              queryConfig: { metric: s, breakdownSpecs: e, filters: p }
            },
            W(g.TOTAL_OUTPUT_NODE_ID, x)
          );
        }
        let A = {
          resourceType: (0, o.mapChartResourceTypeToTargetResourceType)(
            i.resource.type,
            r.ResourceType
          ),
          resourceId: i.resource.id.toString(),
          granularity: i.granularity,
          startTime: i.timeSpec.startTime.toISOString(),
          endTime: i.timeSpec.endTime.toISOString()
        };
        return {
          graph: { id: "standard_rank_".concat(s), name: "Standard Rank DAG", nodes: h },
          context: A
        };
      },
      Y = async (e) => {
        let t,
          {
            clients: r,
            request: n,
            metric: i,
            apiBreakdown: a,
            topNConfigs: o,
            fetchTotalSeries: s,
            comparison: l
          } = e;
        if (void 0 === l)
          return P(
            r,
            j({ request: n, metric: i, apiBreakdown: a, topNConfigs: o, fetchTotalSeries: s }),
            { createExecutionError: (e) => new Q(e) }
          );
        let { comparisonStartDate: u, comparisonEndDate: c } = (0, v.default)(
            n.timeSpec,
            l.granularity,
            l.relativeOffset,
            l.customStartDate
          ),
          m = await P(
            r,
            j({
              request: {
                ...n,
                timeSpec: { ...n.timeSpec, startTime: u, endTime: n.timeSpec.endTime }
              },
              metric: i,
              apiBreakdown: a,
              topNConfigs: o,
              fetchTotalSeries: s,
              useDynamicFilterBindings: !0
            }),
            {
              createExecutionError: (e) => new Q(e),
              adaptResult:
                ((t = L(o)),
                (e) => {
                  var r, n, i, a, o, s, l, u;
                  let c = null == (r = e.result) ? void 0 : r.outputs;
                  if (!c || 0 === c.length) return null;
                  let m =
                    null == (i = c.find((e) => e.nodeId === g.MAIN_OUTPUT_NODE_ID)) ||
                    null == (n = i.timeSeries)
                      ? void 0
                      : n.values;
                  if (!m) return null;
                  let d = { response: { values: m } },
                    p =
                      null == (o = c.find((e) => e.nodeId === _)) || null == (a = o.timeSeries)
                        ? void 0
                        : a.values;
                  if (p) {
                    let e = (0, N.processUngroupedOtherResponse)({ values: p }, t);
                    e && (d.response = { values: [...m, ...(null != (u = e.values) ? u : [])] });
                  }
                  let y =
                    null == (l = c.find((e) => e.nodeId === g.TOTAL_OUTPUT_NODE_ID)) ||
                    null == (s = l.timeSeries)
                      ? void 0
                      : s.values;
                  return (y && (d.totalSeriesResponse = { values: y }), d);
                })
            }
          );
        return {
          response: m.response ? F(m.response, n.timeSpec.startTime, n.timeSpec.endTime) : null,
          comparisonResponse: m.response ? F(m.response, u, c) : void 0,
          totalSeriesResponse: m.totalSeriesResponse
            ? F(m.totalSeriesResponse, n.timeSpec.startTime, n.timeSpec.endTime)
            : void 0,
          totalSeriesComparisonResponse: m.totalSeriesResponse
            ? F(m.totalSeriesResponse, u, c)
            : void 0
        };
      },
      H = async (e) => {
        let {
            clients: t,
            request: r,
            metric: n,
            apiBreakdown: i,
            topNBreakdownConfigs: a,
            fetchTotalSeries: o,
            comparison: s,
            legacyOnlyFeatures: l
          } = e,
          u = a.map((e) =>
            ((e, t, r) => {
              let n = (0, U.topNPseudoDimensionToAceConfig)(e);
              return void 0 === r || (0, U.isPinnedRankTopNConfig)(n)
                ? n
                : {
                    ...n,
                    orderTimeRangeDays: Math.max(
                      1,
                      Math.ceil((t.endTime.getTime() - t.startTime.getTime()) / T.DAY_MS)
                    )
                  };
            })(e, r.timeSpec, s)
          );
        return u.length > 0 &&
          (void 0 === s || u.every(U.isPinnedRankTopNConfig)) &&
          !Object.values(l).some(Boolean)
          ? Y({
              clients: t,
              request: r,
              metric: n,
              apiBreakdown: [...i, ...u.map((e) => e.dimension)],
              topNConfigs: u,
              fetchTotalSeries: o,
              comparison: s
            })
          : null;
      };
    var K = e.i(405005),
      z = e.i(405680),
      J = e.i(772147),
      Z = S;
    class X extends Z.default {
      constructor(e) {
        super(
          "Metric variant fanout execution failed: ".concat(e.message),
          "VariantFanoutDagExecutionError",
          e
        );
      }
    }
    var $ = (((t = {}).Separate = "Separate"), (t.Combined = "Combined"), t);
    let ee = async (e) => e.catch(() => null),
      et = (e) => {
        let { timeSpec: t, ...r } = e;
        return { ...r, startTime: t.startTime, endTime: t.endTime };
      },
      er = (e, t, r) => {
        let i = e.startTime,
          a = e.endTime,
          o = f.PRESET_DATE_RANGE_DURATION_MS[e.rangeType];
        return (
          r &&
            e.rangeType !== n.RAQIV2DateRangeType.Custom &&
            void 0 !== o &&
            r.getTime() < a.getTime() &&
            (i = new Date((a = r).getTime() - o)),
          {
            ...e,
            startTime: (0, z.snapToLatestStartTime)(i, t),
            endTime: (0, z.snapToLatestEndTime)(a, t)
          }
        );
      },
      en = async (e, t) => e.platformGatewayRAQIClient.query(t),
      ei = async (e, t) => e.platformGatewayRAQIClient.getDimensionValues(t),
      ea = async (e, t) => ee(e.platformGatewayRAQIClient.getMetricMetadata(t)),
      eo = (e, t) => {
        let { resource: r, ...n } = e;
        return { ...n, resource: r, metric: t };
      },
      es = async (e, t, r, n, i) => {
        var a, o;
        let { comparisonStartDate: s, comparisonEndDate: l } = (0, v.default)(e.timeSpec, r, n, i),
          u = et(e),
          c = { ...u, startTime: s, endTime: l },
          m = await Promise.all([en(t, u), ee(en(t, c))]);
        return {
          result: null != (a = m[0]) ? a : null,
          comparisonResult: null != (o = m[1]) ? o : void 0
        };
      },
      el = async (e, t, r, n, i) => {
        let { comparisonStartDate: a, comparisonEndDate: o } = (0, v.default)(e.timeSpec, r, n, i),
          s = { ...et(e), startTime: a, endTime: e.timeSpec.endTime },
          l = await en(t, s);
        return l
          ? { result: F(l, e.timeSpec.startTime, e.timeSpec.endTime), comparisonResult: F(l, a, o) }
          : { result: null };
      },
      eu = async (e, t, r) => {
        if (void 0 === r) {
          var i;
          return { result: null != (i = await en(t, et(e))) ? i : null };
        }
        switch (r.mode) {
          case "Separate":
            return es(e, t, r.granularity, r.relativeOffset, r.customStartDate);
          case "Combined":
            if (r.granularity === n.RAQIV2MetricGranularity.None)
              return es(e, t, r.granularity, r.relativeOffset, r.customStartDate);
            return el(e, t, r.granularity, r.relativeOffset, r.customStartDate);
          default: {
            let e = r.mode;
            throw Error("Unhandled comparison fetch mode ".concat(String(e)));
          }
        }
      },
      ec = (e) => {
        let t = new Map();
        for (let { dimension: n, config: i } of e) {
          var r;
          let e = null != (r = t.get(n)) ? r : new Map();
          for (let t of i.supportedDimensionValues) e.set((0, K.getStableVariantKey)(n, t), t);
          t.set(n, e);
        }
        return t;
      },
      em = (e, t) => {
        var r, a, o, l;
        let u = new Set(),
          c = (e) =>
            (null == e ? void 0 : e.values)
              ? {
                  ...e,
                  values: e.values.map((e) => {
                    var r;
                    return {
                      ...e,
                      breakdownValue:
                        null == (r = e.breakdownValue)
                          ? void 0
                          : r.map((e) => {
                              var r;
                              let a = e.dimension,
                                o =
                                  "variantKey" in e && "string" == typeof e.variantKey
                                    ? e.variantKey
                                    : void 0;
                              if (
                                !o ||
                                void 0 === a ||
                                !(0, s.isValidEnumValue)(n.RAQIV2UIPseudoDimension, a)
                              )
                                return e;
                              let l = null == (r = t.get(a)) ? void 0 : r.get(o);
                              if (void 0 === l) {
                                let e = "".concat(a, ":").concat(o);
                                u.has(e) ||
                                  (u.add(e),
                                  (0, i.default)(
                                    "Unknown ACE metric variant key '"
                                      .concat(o, "' for dimension '")
                                      .concat(a, "'")
                                  ));
                              }
                              let c = { ...e, value: null != l ? l : o };
                              return (delete c.variantKey, c);
                            })
                    };
                  })
                }
              : e,
          m = { response: null != (r = c(e.response)) ? r : null };
        return (
          void 0 !== e.comparisonResponse &&
            (m.comparisonResponse = null != (a = c(e.comparisonResponse)) ? a : void 0),
          void 0 !== e.totalSeriesResponse &&
            (m.totalSeriesResponse = null != (o = c(e.totalSeriesResponse)) ? o : void 0),
          void 0 !== e.totalSeriesComparisonResponse &&
            (m.totalSeriesComparisonResponse =
              null != (l = c(e.totalSeriesComparisonResponse)) ? l : void 0),
          m
        );
      },
      ed = (e, t) => ({
        percentile:
          e === n.RAQIV2UIPseudoDimension.PercentileType &&
          (0, s.isValidEnumValue)(n.RAQIV2PercentileType, t)
            ? t
            : null,
        aggregationType:
          e === n.RAQIV2UIPseudoDimension.AggregationType &&
          (0, s.isValidEnumValue)(n.RAQIV2AggregationType, t)
            ? t
            : null
      }),
      ep = [
        n.RAQIV2MetricGranularity.OneMinute,
        n.RAQIV2MetricGranularity.OneHour,
        n.RAQIV2MetricGranularity.HalfHour,
        n.RAQIV2MetricGranularity.OneDay,
        n.RAQIV2MetricGranularity.OneWeek
      ],
      eg = (e) => (0, s.isValidArrayEnumValue)(ep, e),
      ey = {
        [n.RAQIV2MetricGranularity.OneMinute]: 6e4,
        [n.RAQIV2MetricGranularity.OneHour]: 36e5,
        [n.RAQIV2MetricGranularity.HalfHour]: 18e5,
        [n.RAQIV2MetricGranularity.OneDay]: 864e5,
        [n.RAQIV2MetricGranularity.OneWeek]: 6048e5
      },
      ef = (e) => (0, u.default)((0, R.getUIMetric)(e)).valueType,
      eh = (e) => {
        var t, r;
        if (!e) return;
        let n =
          null !=
          (t =
            null == (r = e.metadata)
              ? void 0
              : r
                  .map((e) => (e.latestAvailableTime ? new Date(e.latestAvailableTime) : null))
                  .filter((e) => null !== e))
            ? t
            : [];
        if (n.length > 0) return new Date(Math.max(...n.map((e) => e.getTime())));
      },
      ev = (e, t, r, a, o) => {
        if (!(null == e ? void 0 : e.values) || !eg(a)) return e;
        let s = ((e, t, r) => {
          let n = ey[r],
            i = [],
            a = t.getTime();
          for (let t = e.getTime(); t <= a; t += n) i.push(new Date(t));
          return i;
        })(t, r, a);
        try {
          let t = e.values.map((e) => {
            var t, r, a;
            let l = new Set(
                null !=
                  (t =
                    null == (a = e.dataPoints)
                      ? void 0
                      : a
                          .map((e) => (e.time ? new Date(e.time).getTime() : null))
                          .filter((e) => null !== e))
                  ? t
                  : []
              ),
              u = s.filter((e) => !l.has(e.getTime()));
            if (0 === u.length) return e;
            let c = ef(o[0]);
            if (!o.every((e) => ef(e) === c))
              throw (
                (0, i.default)(
                  "All metrics must have the same value type to fill missing data points"
                ),
                Error("All metrics must have the same value type to fill missing data points")
              );
            let m = u.map((e) =>
                ((e, t) => {
                  switch (t) {
                    case n.RAQIV2MetricValueType.Numeric:
                      return { time: e.toISOString(), value: 0 };
                    case n.RAQIV2MetricValueType.String:
                    case n.RAQIV2MetricValueType.StringArray:
                      return { time: e.toISOString(), stringValues: [] };
                    default:
                      throw Error("Unsupported value type: ".concat(String(t)));
                  }
                })(e, c)
              ),
              d = [...(null != (r = e.dataPoints) ? r : []), ...m].sort((e, t) => {
                let r = e.time ? new Date(e.time).getTime() : 0,
                  n = t.time ? new Date(t.time).getTime() : 0;
                return r - n;
              });
            return { ...e, dataPoints: d };
          });
          return { ...e, values: t };
        } catch (t) {
          return e;
        }
      },
      eR = (e, t, r, n, i, a, o) => {
        var s, l, u, c, m, d, p;
        let {
            timeSpec: { startTime: g, endTime: y }
          } = e,
          f = ((e, t, r, n) => {
            let i,
              a = eh(e);
            if (a) return new Date(Math.min(t.getTime(), a.getTime()));
            let o =
              ((i = null),
              [
                r.result,
                r.comparisonResult,
                null == n ? void 0 : n.result,
                null == n ? void 0 : n.comparisonResult
              ]
                .filter((e) => null != e)
                .forEach((e) => {
                  var t;
                  null == (t = e.values) ||
                    t.forEach((e) => {
                      var t;
                      null == (t = e.dataPoints) ||
                        t.forEach((e) => {
                          if (e.time) {
                            let t = new Date(e.time);
                            (null === i || t > i) && (i = t);
                          }
                        });
                    });
                }),
              i);
            return o ? (null !== e ? t : new Date(Math.min(t.getTime(), o.getTime()))) : null;
          })(t, y, r, n);
        if (!f)
          return {
            response: r.result,
            comparisonResponse: r.comparisonResult,
            totalSeriesResponse: null != (p = null == n ? void 0 : n.result) ? p : void 0,
            totalSeriesComparisonResponse: null == n ? void 0 : n.comparisonResult
          };
        let h = g,
          R = f;
        if (i) {
          let { comparisonStartDate: t, comparisonEndDate: r } = (0, v.default)(
            e.timeSpec,
            i.granularity,
            i.relativeOffset,
            i.customStartDate
          );
          ((h = t), (R = new Date(Math.min(f.getTime(), r.getTime()))));
        }
        return {
          response: ev(r.result, g, f, a, o),
          comparisonResponse:
            null != (s = ev(null != (l = r.comparisonResult) ? l : null, h, R, a, o)) ? s : void 0,
          totalSeriesResponse:
            null != (u = ev(null != (c = null == n ? void 0 : n.result) ? c : null, g, f, a, o))
              ? u
              : void 0,
          totalSeriesComparisonResponse:
            null !=
            (m = ev(null != (d = null == n ? void 0 : n.comparisonResult) ? d : null, h, R, a, o))
              ? m
              : void 0
        };
      },
      eT = async (e, t, r, n, i) => {
        let [a, ...o] = await Promise.all([
          i,
          ...t.map((t) => {
            let { apiMetric: i } = t;
            return eu(eo(e, i), r, n.fetchComparison);
          })
        ]);
        return {
          mainResponse: o.reduce(
            (e, r, n) => {
              var i, a, o, s, l, u, c, m;
              let { fanoutBreakdownDimension: d, fanoutBreakdownValue: p } = t[n],
                g = r;
              if (d && p) {
                let e = { dimension: d, value: p },
                  t = (t) =>
                    (null == t ? void 0 : t.values)
                      ? {
                          ...t,
                          values: t.values.map((t) => {
                            var r;
                            return {
                              ...t,
                              breakdownValue: [...(null != (r = t.breakdownValue) ? r : []), e]
                            };
                          })
                        }
                      : t;
                g = { ...r, result: t(r.result), comparisonResult: t(r.comparisonResult) };
              }
              return {
                result: {
                  values: [
                    ...(null != (i = null == e || null == (l = e.result) ? void 0 : l.values)
                      ? i
                      : []),
                    ...(null != (a = null == g || null == (u = g.result) ? void 0 : u.values)
                      ? a
                      : [])
                  ]
                },
                comparisonResult:
                  e.comparisonResult || g.comparisonResult
                    ? {
                        values: [
                          ...(null !=
                          (o = null == e || null == (c = e.comparisonResult) ? void 0 : c.values)
                            ? o
                            : []),
                          ...(null !=
                          (s = null == g || null == (m = g.comparisonResult) ? void 0 : m.values)
                            ? s
                            : [])
                        ]
                      }
                    : void 0
              };
            },
            { result: null }
          ),
          totalResponse: a
        };
      },
      eA = async (e, t, r, n, i, a, o, s) => {
        var l, u, c, m, d, p, g, y, f, h;
        let v = [...(null != (l = null == e ? void 0 : e.filter) ? l : []), ...a],
          R = [...(null != (u = null == e ? void 0 : e.filter) ? u : []), ...o],
          T = o.length > 0,
          A = new Set(
            o.map((e) => {
              let { dimension: t } = e;
              return t;
            })
          ),
          D = s.filter((e) => !A.has(e)),
          [w, S, I] = await Promise.all([
            i,
            eu(eo({ ...e, filter: v }, t), r, n.fetchComparison),
            T
              ? eu(eo({ ...e, breakdown: D.length ? D : void 0, filter: R }, t), r)
              : Promise.resolve({ result: null })
          ]),
          C = T
            ? ((e, t) => {
                if (!e) return { result: null };
                let r = t.map((e) => {
                    let { dimension: t } = e;
                    return t;
                  }),
                  n = (0, N.processUngroupedOtherResponse)(e.result, r),
                  i = (0, N.processUngroupedOtherResponse)(e.comparisonResult, r);
                return { result: n, comparisonResult: null != i ? i : void 0 };
              })(I, o)
            : { result: null };
        return {
          mainResponse: {
            result: {
              values: [
                ...(null != (c = null == S || null == (g = S.result) ? void 0 : g.values) ? c : []),
                ...(null != (m = null == C || null == (y = C.result) ? void 0 : y.values) ? m : [])
              ]
            },
            comparisonResult:
              S.comparisonResult || C.comparisonResult
                ? {
                    values: [
                      ...(null !=
                      (d = null == S || null == (f = S.comparisonResult) ? void 0 : f.values)
                        ? d
                        : []),
                      ...(null !=
                      (p = null == C || null == (h = C.comparisonResult) ? void 0 : h.values)
                        ? p
                        : [])
                    ]
                  }
                : void 0
          },
          totalResponse: w
        };
      },
      eD = (e) => {
        var t;
        return {
          values:
            null == (t = e.values)
              ? void 0
              : t.map((e) => {
                  var t, r;
                  let i =
                    null !=
                    (t =
                      null == (r = e.breakdownValue)
                        ? void 0
                        : r.filter((e) => {
                            let { dimension: t } = e;
                            return (
                              t &&
                              (0, s.isValidEnumValue)(n.RAQIV2Dimension, t) &&
                              (0, c.isDurationBucketDimension)(t)
                            );
                          }))
                      ? t
                      : [];
                  return { ...e, breakdownValue: i };
                })
        };
      },
      ew = async (e, t, r, n, i, a, o, s) => {
        let l,
          u,
          { apiMetrics: m, metricForTotalSeries: d } = t,
          p =
            ((l = []),
            (u = []),
            r.forEach((e) => {
              (0, c.isDurationBucketDimension)(e) ? l.push(e) : u.push(e);
            }),
            a.fetchTotalSeries && (u.length || n.length)
              ? ee(eu(eo({ ...e, breakdown: l.length ? l : void 0 }, d), i, a.fetchComparison))
              : void 0);
        if (Array.isArray(m)) return eT(e, m, i, a, p);
        if (o.length || s.length) return eA(e, m, i, a, p, o, s, r);
        let [g, y] = await Promise.all([
          eu(eo({ ...e, breakdown: r }, m), i, a.fetchComparison),
          p
        ]);
        if (y) {
          let { comparisonResult: e, result: t } = y;
          return {
            mainResponse: g,
            totalResponse: { comparisonResult: e ? eD(e) : e, result: t ? eD(t) : t }
          };
        }
        return { mainResponse: g, totalResponse: y };
      },
      eS = (e, t) => {
        let r = Number(e),
          n = Number(t),
          i = !Number.isNaN(r) && Number.isFinite(r) && "" !== e.trim(),
          a = !Number.isNaN(n) && Number.isFinite(n) && "" !== t.trim();
        return i && a ? n - r : e.localeCompare(t);
      },
      eI = (e, t) => {
        var r;
        let n = { dimension: t, values: [] };
        return (
          null == (r = e.values) ||
            r.forEach((e) => {
              var r;
              let { breakdownValue: i } = e,
                a =
                  null == i ||
                  null ==
                    (r = i.find((e) => {
                      let { dimension: r } = e;
                      return r === t;
                    }))
                    ? void 0
                    : r.value;
              a && n.values.push(a);
            }),
          n
        );
      },
      eC = async (e, t, r) => {
        let i = e.map(async (e) => {
            var i, a;
            let {
                config: { filterAndBreakdownDimension: o, orderConfig: l, limitTimeRange: u, n: c }
              } = e,
              { startTime: m, endTime: d } = ((e, t) => {
                let {
                  timeSpec: { startTime: r, endTime: n }
                } = t;
                if ("query" === e) return { startTime: new Date(r), endTime: new Date(n) };
                let i = new Date(r);
                return (
                  i.setDate(i.getDate() - e.previousDays),
                  { startTime: i, endTime: new Date(n) }
                );
              })(u, r);
            if (!(null == l ? void 0 : l.metric)) {
              let e = eI(await en(t, et({ ...r, breakdown: [o] })), o);
              return { ...e, values: e.values.sort(eS).slice(0, c) };
            }
            let p = [...(null != (i = r.filter) ? i : [])];
            null == (a = l.filters) ||
              a.forEach((e) => {
                let { dimension: t, values: r, operation: i } = e;
                (0, s.isValidEnumValue)(n.RAQIV2Dimension, t) &&
                  p.push({ dimension: t, values: r, operation: i });
              });
            let g = {
              ...r,
              breakdown: [o],
              metric: l.metric,
              granularity: n.RAQIV2MetricGranularity.None,
              limit: c,
              filter: p.length > 0 ? p : void 0,
              startTime: m,
              endTime: d
            };
            return eI(await en(t, et(eo(g, l.metric))), o);
          }),
          o = await Promise.all(i),
          l = [];
        return (
          o.forEach((t, r) => {
            e[r].config.showOther &&
              t.values.length > 0 &&
              l.push({ ...t, operation: a.AnalyticsQueryGatewayAPIFilterOperation.NotContains });
          }),
          {
            breakdown: e.map((e) => {
              let {
                config: { filterAndBreakdownDimension: t }
              } = e;
              return t;
            }),
            mainFilters: o,
            otherFilters: l
          }
        );
      },
      eM = async (e, t, r) => {
        var i, a;
        if (void 0 === r) return e(t);
        let { comparisonStartDate: o, comparisonEndDate: s } = (0, v.default)(
          t,
          r.granularity,
          r.relativeOffset,
          r.customStartDate
        );
        switch (r.mode) {
          case "Separate": {
            let r = { ...t, startTime: o, endTime: s },
              [n, a] = await Promise.all([e(t), ee(e(r))]);
            return {
              ...n,
              comparisonResponse: null != (i = null == a ? void 0 : a.response) ? i : void 0,
              totalSeriesComparisonResponse: null == a ? void 0 : a.totalSeriesResponse
            };
          }
          case "Combined": {
            if (r.granularity === n.RAQIV2MetricGranularity.None) {
              let r = { ...t, startTime: o, endTime: s },
                [n, i] = await Promise.all([e(t), ee(e(r))]);
              return {
                ...n,
                comparisonResponse: null != (a = null == i ? void 0 : i.response) ? a : void 0,
                totalSeriesComparisonResponse: null == i ? void 0 : i.totalSeriesResponse
              };
            }
            let i = await e({ ...t, startTime: o, endTime: t.endTime });
            return {
              response: i.response ? F(i.response, t.startTime, t.endTime) : null,
              comparisonResponse: i.response ? F(i.response, o, s) : void 0,
              totalSeriesResponse: i.totalSeriesResponse
                ? F(i.totalSeriesResponse, t.startTime, t.endTime)
                : void 0,
              totalSeriesComparisonResponse: i.totalSeriesResponse
                ? F(i.totalSeriesResponse, o, s)
                : void 0
            };
          }
          default: {
            let e = r.mode;
            throw Error("Unhandled comparison fetch mode ".concat(String(e)));
          }
        }
      },
      eE = async (e) => {
        let {
            queryRequest: t,
            snappedTimeSpec: r,
            metric: n,
            clients: a,
            fetchTotalSeries: o,
            comparison: s
          } = e,
          { metricVariant: u, breakdown: c } = (0, K.splitMetricVariantFromBreakdown)(
            t.metricVariant,
            t.breakdown
          ),
          m = async (e) => {
            let r;
            try {
              let i = { ...t, breakdown: c, metricVariant: u, timeSpec: e, metric: n };
              r = (0, g.buildComputedMetricDag)(i, { includeTotalBranch: !!o });
            } catch (e) {
              throw (
                (0, i.default)(
                  "Failed to build computed metric DAG: ".concat(
                    e instanceof Error ? e.message : "Unknown error"
                  )
                ),
                e
              );
            }
            return P(a, r, {
              createExecutionError: (0, l.isIdentityFormulaComputedMetric)(n)
                ? void 0
                : (e) => new y.default(e)
            });
          },
          d = await eM(m, r, s),
          p = (0, K.isMetricVariantFanout)(u) ? (0, K.getMetricFanoutDimensionInfo)(u) : void 0;
        return p ? em(d, ec([p])) : d;
      },
      eV = async (e) => {
        let {
            snappedRequestBase: t,
            metric: n,
            apiBreakdown: i,
            apiFilters: a,
            metricFanoutPseudoBreakdown: s,
            clients: l,
            comparison: u
          } = e,
          c = ec(s);
        return em(
          await eM(
            (e) =>
              P(
                l,
                ((e, t, n, i, a) => {
                  let s = a[0];
                  if (!s || null == (0, K.getVariantKind)(s.dimension))
                    throw Error(
                      "Expected a supported metric fanout pseudo-dimension for ACE variant fanout"
                    );
                  let l = [
                    ...n.map((e) => ({ dimensionBreakdown: { dimension: e } })),
                    (0, K.buildVariantBreakdownSpec)(s)
                  ];
                  return {
                    graph: {
                      id: "variant_fanout_".concat(t),
                      name: "Metric Variant Fanout DAG",
                      nodes: [
                        {
                          id: "query_main",
                          type: r.NodeType.Query,
                          queryConfig: {
                            metric: t,
                            filters: i.length ? i : void 0,
                            breakdownSpecs: l
                          }
                        },
                        {
                          id: g.MAIN_OUTPUT_NODE_ID,
                          type: r.NodeType.Output,
                          outputConfig: { input: "query_main", alias: "main" }
                        }
                      ]
                    },
                    context: {
                      resourceType: (0, o.mapChartResourceTypeToTargetResourceType)(
                        e.resource.type,
                        r.ResourceType
                      ),
                      resourceId: e.resource.id.toString(),
                      granularity: e.granularity,
                      startTime: e.timeSpec.startTime.toISOString(),
                      endTime: e.timeSpec.endTime.toISOString()
                    }
                  };
                })({ ...t, timeSpec: e }, n, i, a, s),
                { createExecutionError: (e) => new X(e) }
              ),
            t.timeSpec,
            u
          ),
          c
        );
      },
      eP = async function (e, t) {
        var r, i, o, u;
        let g,
          y,
          f,
          v,
          R,
          T,
          A,
          w,
          S,
          I = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          {
            metric: C,
            breakdown: M,
            metricVariant: E,
            filter: V,
            timeSpec: P,
            resource: k,
            granularity: U,
            limit: b
          } = e,
          Q = I.fetchComparison,
          F =
            null != (r = null == Q ? void 0 : Q.rangePolicy)
              ? r
              : m.DEFAULT_COMPARISON_CONFIG.rangePolicy,
          N = Q && D(P, F) ? Q : void 0,
          O = N === Q ? I : { ...I, fetchComparison: N },
          { fillMissingDatapoints: q } = O,
          B = null != (i = P.snapGranularity) ? i : U,
          x = er(P, B),
          _ =
            ((g = null != (u = (0, l.rewritePrecomputedL7MetricForRequest)(C)) ? u : C),
            (0, d.isComputedMetric)(g)
              ? { kind: "computed", metric: g }
              : { kind: "standard", metric: g });
        if ("computed" === _.kind)
          return eE({
            queryRequest: e,
            snappedTimeSpec: x,
            metric: _.metric,
            clients: t,
            fetchTotalSeries: O.fetchTotalSeries,
            comparison: N
          });
        let { metric: G } = _,
          L = (0, d.getUIMetricFromAtomicMetricLike)(G),
          W = ((e, t) => {
            var r;
            if (!(0, d.isCustomEventsAtomicMetricLike)(e)) return t;
            let i =
              null == t
                ? void 0
                : t.filter(
                    (e) =>
                      e.dimension !== n.RAQIV2Dimension.CustomEventName &&
                      e.dimension !== n.RAQIV2UIPseudoDimension.AggregationType
                  );
            return [
              { dimension: n.RAQIV2Dimension.CustomEventName, values: [e.customEventName] },
              {
                dimension: n.RAQIV2UIPseudoDimension.AggregationType,
                values: [null != (r = e.aggregationType) ? r : n.RAQIV2AggregationType.Sum]
              },
              ...(null != i ? i : [])
            ];
          })(G, V),
          { metricVariant: j, breakdown: Y } = (0, K.splitMetricVariantFromBreakdown)(E, M),
          z = (0, K.isMetricVariantFanout)(j) ? (0, K.getMetricFanoutDimensionInfo)(j) : void 0,
          Z = n.RAQIV2MetricToSupportedDimensions[L];
        if (z && Z && !Z.includes(z.dimension))
          throw new J.RAQIV2ValidationError(
            J.RAQIV2ValidationErrorType.UnsupportedBreakdown,
            "Metric "
              .concat(L, " does not support breakdown dimension ")
              .concat(z.dimension, ". Supported dimensions: ")
              .concat(Z.join(", ")),
            L,
            z.dimension
          );
        let {
            apiBreakdown: X,
            topNPseudoBreakdown: $,
            otherSeriesBreakdown: ee
          } = ((y = []),
          (f = []),
          (v = []),
          (R = []),
          null == Y ||
            Y.forEach((e) => {
              if ((0, s.isValidEnumValue)(n.RAQIV2UIPseudoDimension, e)) {
                let { pseudoDimensionConfig: t } = n.RAQIV2DimensionDisplayConfig[e],
                  { type: r } = t;
                switch (r) {
                  case n.RAQIV2UIPseudoDimensionType.MetricFanout:
                    v.push({ dimension: e, config: t });
                    break;
                  case n.RAQIV2UIPseudoDimensionType.TopNBreakdown:
                    f.push({ dimension: e, config: t });
                    break;
                  default:
                    throw Error("Unhandled pseudo dimension type ".concat(String(r)));
                }
              }
              (0, s.isValidEnumValue)(n.RAQIV2Dimension, e) &&
                (y.push(e),
                (0, s.isValidArrayEnumValue)(p.breakdownDimensionsWithOtherSeries, e) && R.push(e));
            }),
          {
            apiBreakdown: y,
            topNPseudoBreakdown: f,
            metricFanoutPseudoBreakdown: v,
            otherSeriesBreakdown: R
          }),
          et = z ? [z] : [],
          {
            apiFilters: en,
            metricFanoutPseudoFilters: ei,
            otherSeriesFilters: eo,
            otherSeriesNotContainsFilters: es
          } = ((T = []),
          (A = []),
          (w = []),
          (S = []),
          null == W ||
            W.forEach((e) => {
              let { dimension: t, values: r } = e;
              if ((0, s.isValidEnumValue)(n.RAQIV2UIPseudoDimension, t)) {
                let { pseudoDimensionConfig: e } = n.RAQIV2DimensionDisplayConfig[t],
                  { type: i } = e;
                switch (i) {
                  case n.RAQIV2UIPseudoDimensionType.MetricFanout:
                    A.push({ dimension: t, config: e, values: r });
                    break;
                  case n.RAQIV2UIPseudoDimensionType.TopNBreakdown: {
                    let t = e.filterAndBreakdownDimension;
                    T.push({ dimension: t, values: r });
                    break;
                  }
                  default:
                    throw Error("Unhandled pseudo dimension type ".concat(String(i)));
                }
              }
              if ((0, s.isValidEnumValue)(n.RAQIV2Dimension, t)) {
                let r = { ...e, dimension: t };
                (0, s.isValidArrayEnumValue)(p.breakdownDimensionsWithOtherSeries, t) &&
                (null == ee ? void 0 : ee.includes(t)) &&
                !r.operation
                  ? (w.push(r),
                    S.push({
                      ...r,
                      operation: a.AnalyticsQueryGatewayAPIFilterOperation.NotContains
                    }))
                  : T.push(r);
              }
            }),
          {
            apiFilters: T,
            metricFanoutPseudoFilters: A,
            otherSeriesFilters: w,
            otherSeriesNotContainsFilters: S
          }),
          {
            apiMetrics: el,
            metricForTotalSeries: eu,
            allAPIMetrics: ec
          } = ((e, t, r) => {
            if ((0, s.isValidEnumValue)(n.RAQIV2Metric, e))
              return { apiMetrics: e, metricForTotalSeries: e, allAPIMetrics: [e] };
            let i = [];
            if (
              (r.forEach((e) => {
                let { dimension: t, config: r } = e;
                i.push({ dimension: t, config: r, isBreakdown: !0, filters: [] });
              }),
              t.forEach((e) => {
                let t = i.find((t) => {
                  let { dimension: r } = t;
                  return r === e.dimension;
                });
                t
                  ? t.filters.push(e)
                  : i.push({
                      dimension: e.dimension,
                      config: e.config,
                      isBreakdown: !1,
                      filters: [e]
                    });
              }),
              i.length > 1)
            ) {
              let e = i
                .map((e) => {
                  let { dimension: t } = e;
                  return t;
                })
                .join(", ");
              throw Error("Cannot handle multiple fanout UIPseudoDimensions ".concat(e));
            }
            if (!i.length) {
              let t = (0, h.getAPIMetricFromUIMetric)(e, {
                percentile: null,
                aggregationType: null
              });
              return { apiMetrics: t, metricForTotalSeries: t, allAPIMetrics: [t] };
            }
            let a = i[0],
              { config: o, isBreakdown: l, filters: u } = a;
            if (u.length) {
              var c;
              let t = null == (c = u[0]) ? void 0 : c.values[0];
              if (!t) throw Error("Could not find filter value for MetricFanout pseudo dimension");
              let r = (0, h.getAPIMetricFromUIMetric)(e, ed(a.dimension, t));
              if (l) {
                let e = new Set();
                return (
                  e.add(r),
                  {
                    apiMetrics: [
                      {
                        apiMetric: r,
                        fanoutBreakdownDimension: a.dimension,
                        fanoutBreakdownValue: t
                      }
                    ],
                    metricForTotalSeries: r,
                    allAPIMetrics: Array.from(e)
                  }
                );
              }
              return { apiMetrics: r, metricForTotalSeries: r, allAPIMetrics: [r] };
            }
            if (l) {
              let t = new Set(),
                r = o.supportedDimensionValues.map((t) => ({
                  apiMetric: (0, h.getAPIMetricFromUIMetric)(e, ed(a.dimension, t)),
                  fanoutBreakdownDimension: a.dimension,
                  fanoutBreakdownValue: t
                })),
                n = (0, h.getAPIMetricFromUIMetric)(e, ed(a.dimension, o.totalSeries));
              return (
                t.add(n),
                r.forEach((e) => {
                  let { apiMetric: r } = e;
                  t.add(r);
                }),
                { apiMetrics: r, metricForTotalSeries: n, allAPIMetrics: Array.from(t) }
              );
            }
            throw Error("Must have a breakdown or filter for each MetricFanout pseudo dimension");
          })(L, ei, et),
          em = U === n.RAQIV2MetricGranularity.None && X.some(c.isDurationBucketDimension),
          ep = q && eg(U),
          ey = ep || em ? ea(t, { metrics: ec }) : Promise.resolve(null);
        if (em) {
          let e = await ey;
          x = er(P, n.RAQIV2MetricGranularity.OneDay, eh(e));
        }
        let ef = {
            resource: k,
            limit: b,
            granularity: U,
            filter: en.length ? en : void 0,
            timeSpec: x
          },
          ev = await H({
            clients: t,
            request: ef,
            metric: eu,
            apiBreakdown: X,
            topNBreakdownConfigs: $.map((e) => {
              let { config: t } = e;
              return t;
            }),
            fetchTotalSeries: O.fetchTotalSeries,
            comparison: N,
            legacyOnlyFeatures: {
              fillsMissingDatapoints: ep,
              hasMetricFanoutBreakdown: et.length > 0,
              hasMetricFanoutFilters: ei.length > 0,
              hasOtherSeriesFilters: eo.length > 0,
              hasOtherSeriesNotContainsFilters: es.length > 0
            }
          });
        if (null !== ev) return ev;
        let {
          breakdown: eT,
          mainFilters: eA,
          otherFilters: eD
        } = await eC($, t, { ...ef, metric: eu });
        if (eA.some((e) => 0 === e.values.length)) return { response: { values: [] } };
        let eS = [...X, ...eT];
        if (
          ((ef.breakdown = eS || void 0),
          !0 === O.enableAceVariantFanout &&
            Array.isArray(el) &&
            et.length > 0 &&
            0 === ei.length &&
            !O.fetchTotalSeries &&
            0 === eD.length &&
            0 === es.length &&
            null == b)
        ) {
          let e = en.concat(eA, eo),
            [r, n] = await Promise.all([
              eV({
                snappedRequestBase: ef,
                metric: L,
                apiBreakdown: eS,
                apiFilters: e,
                metricFanoutPseudoBreakdown: et,
                clients: t,
                comparison: N
              }),
              ey
            ]);
          return ep
            ? eR(
                ef,
                n,
                { result: r.response, comparisonResult: r.comparisonResponse },
                void 0,
                N,
                U,
                ec
              )
            : r;
        }
        let [{ mainResponse: eI, totalResponse: eM }, eP] = await Promise.all([
          ew(
            ef,
            { apiMetrics: el, metricForTotalSeries: eu, allAPIMetrics: ec },
            eS,
            et,
            t,
            O,
            eA.concat(eo),
            eD.concat(es)
          ),
          ey
        ]);
        return ep
          ? eR(ef, eP, eI, eM, N, U, ec)
          : {
              response: eI.result,
              comparisonResponse: eI.comparisonResult,
              totalSeriesResponse: null != (o = null == eM ? void 0 : eM.result) ? o : void 0,
              totalSeriesComparisonResponse: null == eM ? void 0 : eM.comparisonResult
            };
      };
    e.s(
      [
        "FetchComparisonSeriesMode",
        () => $,
        "buildFanoutDimensionValues",
        0,
        ed,
        "default",
        0,
        eP,
        "determineLatestAvailableTime",
        0,
        eh,
        "fetchMetricMetadata",
        0,
        ea,
        "makeDimensionValuesQuery",
        0,
        ei
      ],
      26770
    );
  }
]);

//# debugId=f2f7d57d-4075-87f3-885f-cf23a2b90b19
//# sourceMappingURL=2wdyo47__n56j.js.map
