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
    n && ((e._debugIds || (e._debugIds = {}))[n] = "f6c85a41-710d-e2cd-f9ee-58b799dbd76d");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  428993,
  (e) => {
    "use strict";
    var t = e.i(157700);
    let n = (0, t.defineFlag)({
        namespace: "creator-business",
        name: "isRevenueShareAgreementsEnabled",
        defaultValue: !1
      }),
      a = (0, t.defineFlag)({
        namespace: "creator-business",
        name: "enableVirtualTransactionsTab",
        defaultValue: !0
      });
    e.s(["enableVirtualTransactionsTab", 0, a, "isRevenueShareAgreementsEnabled", 0, n]);
  },
  92174,
  (e) => {
    "use strict";
    var t = e.i(157700);
    let n = (0, t.defineFlag)({
        namespace: "devex",
        name: "shouldUseWatermarkFiatCalculation",
        defaultValue: !1
      }),
      a = (0, t.defineFlag)({
        namespace: "devex",
        name: "isTaxDocumentationEnabled",
        defaultValue: !1
      });
    e.s(["isTaxDocumentationEnabled", 0, a, "shouldUseWatermarkFiatCalculation", 0, n]);
  },
  872119,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/4e5e8e90b59347d7ee83905ef302e1690dbd92eb/_next/static/media/devex-cashout-payout-info-icon.410ygaikesj45.svg"
    );
  },
  996829,
  (e) => {
    "use strict";
    function t(e) {
      return null != e ? e : 0;
    }
    function n(e) {
      return e.shouldDisplayEffectiveO18Robux ? e.effectiveO18Robux : 0;
    }
    e.s([
      "allocateDevexWatermarkBuckets",
      0,
      function (e, t) {
        if (e <= 0) return { buckets: [], totalRobux: 0, totalUsd: 0 };
        let a = e,
          r = [
            { key: "O18", balance: n(t), rate: t.effectiveO18ToUsdRate },
            { key: "R35", balance: t.robuxAt35WatermarkRobux, rate: t.robuxAt35ToUsdRate },
            {
              key: "R38",
              balance: Math.max(0, e - t.robuxAt35WatermarkRobux - n(t)),
              rate: t.robuxAt38ToUsdRate
            }
          ],
          i = [];
        for (let e of r) {
          let t = Math.min(a, e.balance);
          if (
            (t > 0 && (i.push({ key: e.key, robux: t, usd: t * e.rate, rate: e.rate }), (a -= t)),
            a <= 0)
          )
            break;
        }
        let o = i.reduce((e, t) => e + t.robux, 0),
          s = i.reduce((e, t) => e + t.usd, 0);
        return { buckets: i, totalRobux: o, totalUsd: s };
      },
      "formatUsdPerRobuxRate",
      0,
      function (e) {
        return "$".concat(e.toFixed(4));
      },
      "normalizeEstimatedFiatResponse",
      0,
      function (e) {
        var n, a;
        return {
          usdAmountMicro: t(e.usdAmountMicro),
          usdAmountMicroFromWatermark: t(e.usdAmountMicroFromWatermark),
          robuxAt35WatermarkRobux: t(e.robuxAt35WatermarkRobux),
          robuxAt38WatermarkRobux: t(e.robuxAt38WatermarkRobux),
          effectiveO18Robux: t(e.effectiveO18Robux),
          robuxAt35ToUsdRate: t(e.robuxAt35ToUsdRate),
          robuxAt38ToUsdRate: t(e.robuxAt38ToUsdRate),
          effectiveO18ToUsdRate: t(e.effectiveO18ToUsdRate),
          shouldDisplayEffectiveO18Robux: null != (n = e.shouldDisplayEffectiveO18Robux) && n,
          lastProcessedTimestamp: null != (a = e.lastProcessedTimestamp) ? a : null
        };
      },
      "nullToZero",
      0,
      t,
      "resolveHeadlineUsdForRobuxAmount",
      0,
      function (e, t) {
        return e <= 0 ? 0 : t.totalUsd;
      }
    ]);
  },
  412201,
  (e) => {
    "use strict";
    var t = e.i(902748);
    let n = "https://www.".concat("roblox.com", "/info/devex-info"),
      a = "https://www.".concat("roblox.com", "/info/devex-terms"),
      r = "https://www.".concat("roblox.com", "/info/terms");
    e.s([
      "DEVEX_APPEAL_URL",
      0,
      "https://www.".concat("roblox.com", "/report-appeals/#/"),
      "DEVEX_HELP_URL",
      0,
      "https://create.".concat("roblox.com", "/docs/production/monetization/18-plus-devex-rate"),
      "DEVEX_TAX_HELP_URL",
      0,
      "https://create.".concat("roblox.com", "/docs/production/monetization/tax-information"),
      "MESSAGES_URL",
      0,
      "https://www.".concat("roblox.com", "/my/messages/"),
      "SETTINGS_URL",
      0,
      "https://www.".concat("roblox.com", "/my/account"),
      "TRANSACTIONS_URL",
      0,
      "https://www.".concat("roblox.com", "/transactions"),
      "getDevexInfoURL",
      0,
      (e) => (e ? "".concat(n, "?locale=").concat(t.default[e]) : n),
      "getDevexTermsURL",
      0,
      (e) => (e ? "".concat(a, "?locale=").concat(t.default[e]) : a),
      "getRobloxTermsURL",
      0,
      (e) => (e ? "".concat(r, "?locale=").concat(t.default[e]) : r)
    ]);
  },
  747934,
  903420,
  (e) => {
    "use strict";
    var t = e.i(157310),
      n = e.i(558726);
    let a = () => ["devex", "taxOnboardingStatus"];
    e.s(
      [
        "getTaxOnboardingStatusQueryKey",
        0,
        a,
        "useGetTaxOnboardingStatus",
        0,
        function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, t.useQuery)({
            queryKey: a(),
            queryFn: () => (0, n.getTaxOnboardingStatus)(),
            retry: 2,
            retryDelay: 0,
            ...e
          });
        }
      ],
      747934
    );
    let r = "notStarted",
      i = {
        TAX_ONBOARDING_STATUS_COMPLETE: "approved",
        TAX_ONBOARDING_STATUS_ADDITIONAL_INFO_REQUIRED: "additionalInfoNeeded",
        TAX_ONBOARDING_STATUS_CURING_REQUIRED: "curingRequired",
        TAX_ONBOARDING_STATUS_IN_REVIEW: "underReview",
        TAX_ONBOARDING_STATUS_INVALID: "notStarted",
        TAX_ONBOARDING_STATUS_NOT_STARTED: "notStarted",
        TAX_ONBOARDING_STATUS_RESUBMISSION_REQUIRED: "failed"
      };
    e.s(
      [
        "CURRENT_TAX_DOCUMENTATION_STATUS",
        0,
        r,
        "resolveTaxDocumentationStatusVariant",
        0,
        (e) => {
          var t;
          return e && null != (t = i[e]) ? t : r;
        }
      ],
      903420
    );
  },
  511622,
  (e) => {
    "use strict";
    let t = "tax_hub_entry_click",
      n = ["accountHolderTreatyClaims", "regardedOwnerTreatyClaims"],
      a = {
        approved: "approved",
        underReview: "under_review",
        additionalInfoNeeded: "additional_info_needed",
        curingRequired: "curing_required",
        failed: "failed",
        notStarted: "not_started"
      };
    e.s([
      "logDevExTaxHubEntryClick",
      0,
      (e, n) => {
        e.logClickEvent({
          eventName: t,
          parameters: { entry_point: "devex_banner", action: n.action, tax_status: n.taxStatus },
          tags: ["tax-hub"]
        });
      },
      "logTaxHubEntryClick",
      0,
      (e, n) => {
        let { entryPoint: a, action: r, taxStatus: i } = n;
        e.logClickEvent({ eventName: t, parameters: { entry_point: a, action: r, tax_status: i } });
      },
      "logTaxHubErrorOut",
      0,
      function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "unknown",
          a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        e.logErrorEvent({
          eventName: "tax_hub_error_out",
          parameters: { stage: t, flow_type: n, recoverable: String(a) }
        });
      },
      "logTaxHubFlowCompleted",
      0,
      (e, t) => {
        let { flowType: n, taxStatus: a } = t;
        e.logImpressionEvent({
          eventName: "tax_hub_flow_completed",
          parameters: { flow_type: n, tax_status: a }
        });
      },
      "logTaxHubFlowDuration",
      0,
      (e, t) => {
        let { durationMs: n, flowType: a, outcome: r, taxStatus: i } = t;
        e.logImpressionEvent({
          eventName: "tax_hub_flow_duration",
          parameters: {
            flow_type: a,
            duration_ms: String(Math.max(Math.round(n), 0)),
            outcome: r,
            tax_status: i
          }
        });
      },
      "logTaxHubFlowStarted",
      0,
      (e, t) => {
        let { flowType: n, startReason: a, taxStatus: r } = t;
        e.logImpressionEvent({
          eventName: "tax_hub_flow_started",
          parameters: { flow_type: n, start_reason: a, tax_status: r }
        });
      },
      "logTaxHubFlowStepViewed",
      0,
      (e, t) => {
        let { direction: n, step: a, taxStatus: r } = t;
        e.logImpressionEvent({
          eventName: "tax_hub_flow_step_viewed",
          parameters: { flow_type: "tax_form", step: a, direction: n, tax_status: r }
        });
      },
      "logTaxHubHelpRailToggle",
      0,
      (e, t, n) => {
        e.logClickEvent({
          eventName: "tax_hub_help_rail_toggle",
          parameters: { action: t, step: n }
        });
      },
      "mapTaxDocumentationStatusToTelemetryStatus",
      0,
      (e) => a[e],
      "mapTaxbitProgressToTaxFlowStep",
      0,
      (e) => {
        if (!(null == e ? void 0 : e.stepId)) return "unknown";
        let t = n.some((t) => {
          var n;
          return null == (n = e.steps) ? void 0 : n.includes(t);
        });
        switch (e.stepId) {
          case "accountHolderClassification":
          case "regardedOwnerClassification":
            return "account_classification";
          case "accountHolderContactInformation":
          case "regardedOwnerContactInformation":
            return t ? "identification_treaty" : "identification_w9";
          case "accountHolderTreatyClaims":
          case "regardedOwnerTreatyClaims":
            return "treaty_claims";
          case "accountHolderTaxInformation":
          case "accountHolderUsTinValidation":
          case "accountHolderAdditionalInfo":
          case "exemptions":
          case "regardedOwnerTaxInformation":
          case "regardedOwnerUsTinValidation":
            return t ? "collect_tax_treaty" : "collect_tax_w9";
          case "accountHolderCertifications":
          case "regardedOwnerCertifications":
          case "confirmation":
          case "summary":
            return t ? "review_treaty" : "review_w9";
          default:
            return "unknown";
        }
      }
    ]);
  },
  988723,
  148343,
  558726,
  509927,
  (e) => {
    "use strict";
    var t = e.i(221628),
      n = e.i(416340),
      a = e.i(425892),
      r = e.i(692734),
      i = e.i(79187),
      o = e.i(39128),
      s = e.i(428993),
      l = e.i(401263),
      u = e.i(730530),
      c = e.i(92174),
      d = e.i(157310),
      m = e.i(677753),
      p = function (e, t) {
        return (p =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
    function h(e, t, n, a) {
      return new (n || (n = Promise))(function (r, i) {
        function o(e) {
          try {
            l(a.next(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          try {
            l(a.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function l(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value) instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })
              ).then(o, s);
        }
        l((a = a.apply(e, t || [])).next());
      });
    }
    function v(e, t) {
      var n,
        a,
        r,
        i = {
          label: 0,
          sent: function () {
            if (1 & r[0]) throw r[1];
            return r[1];
          },
          trys: [],
          ops: []
        },
        o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
      return (
        (o.next = s(0)),
        (o.throw = s(1)),
        (o.return = s(2)),
        "function" == typeof Symbol &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
      function s(s) {
        return function (l) {
          var u = [s, l];
          if (n) throw TypeError("Generator is already executing.");
          for (; o && ((o = 0), u[0] && (i = 0)), i;)
            try {
              if (
                ((n = 1),
                a &&
                  (r =
                    2 & u[0]
                      ? a.return
                      : u[0]
                        ? a.throw || ((r = a.return) && r.call(a), 0)
                        : a.next) &&
                  !(r = r.call(a, u[1])).done)
              )
                return r;
              switch (((a = 0), r && (u = [2 & u[0], r.value]), u[0])) {
                case 0:
                case 1:
                  r = u;
                  break;
                case 4:
                  return (i.label++, { value: u[1], done: !1 });
                case 5:
                  (i.label++, (a = u[1]), (u = [0]));
                  continue;
                case 7:
                  ((u = i.ops.pop()), i.trys.pop());
                  continue;
                default:
                  if (
                    !(r = (r = i.trys).length > 0 && r[r.length - 1]) &&
                    (6 === u[0] || 2 === u[0])
                  ) {
                    i = 0;
                    continue;
                  }
                  if (3 === u[0] && (!r || (u[1] > r[0] && u[1] < r[3]))) {
                    i.label = u[1];
                    break;
                  }
                  if (6 === u[0] && i.label < r[1]) {
                    ((i.label = r[1]), (r = u));
                    break;
                  }
                  if (r && i.label < r[2]) {
                    ((i.label = r[2]), i.ops.push(u));
                    break;
                  }
                  (r[2] && i.ops.pop(), i.trys.pop());
                  continue;
              }
              u = t.call(e, i);
            } catch (e) {
              ((u = [6, e]), (a = 0));
            } finally {
              n = r = 0;
            }
          if (5 & u[0]) throw u[1];
          return { value: u[0] ? u[1] : void 0, done: !0 };
        };
      }
    }
    "function" == typeof SuppressedError && SuppressedError;
    var f = {
        Invalid: "TAX_ONBOARDING_TOKEN_BLOCKED_REASON_INVALID",
        PasswordChangedRecently: "TAX_ONBOARDING_TOKEN_BLOCKED_REASON_PASSWORD_CHANGED_RECENTLY"
      },
      x = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
              this.constructor = e;
            }
            (p(e, t),
              (e.prototype =
                null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())));
          })(t, e),
          (t.prototype.getTaxDevexStatusRaw = function (e) {
            return h(this, void 0, void 0, function () {
              var t, n, a;
              return v(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (t = {}),
                      (n = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/devex-status",
                            schemaPath: "/devex-status",
                            method: "GET",
                            headers: n,
                            query: t
                          },
                          e
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = r.sent()),
                      [
                        2,
                        new m.JSONApiResponse(a, function (e) {
                          return null == e
                            ? e
                            : {
                                hasDevexed: (0, m.exists)(e, "hasDevexed") ? e.hasDevexed : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.getTaxDevexStatus = function (e) {
            return h(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.getTaxDevexStatusRaw(e)];
                  case 1:
                    return [4, t.sent().value()];
                  case 2:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (t.prototype.getTaxOnboardingResultRaw = function (e) {
            return h(this, void 0, void 0, function () {
              var t, n, a;
              return v(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (t = {}),
                      (n = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/onboarding/result",
                            schemaPath: "/onboarding/result",
                            method: "GET",
                            headers: n,
                            query: t
                          },
                          e
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = r.sent()),
                      [
                        2,
                        new m.JSONApiResponse(a, function (e) {
                          return null == e
                            ? e
                            : {
                                sdkToken: (0, m.exists)(e, "sdkToken") ? e.sdkToken : void 0,
                                tokenExpiryTime: (0, m.exists)(e, "tokenExpiryTime")
                                  ? new Date(e.tokenExpiryTime)
                                  : void 0,
                                tokenBlockedReason: (0, m.exists)(e, "tokenBlockedReason")
                                  ? e.tokenBlockedReason
                                  : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.getTaxOnboardingResult = function (e) {
            return h(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.getTaxOnboardingResultRaw(e)];
                  case 1:
                    return [4, t.sent().value()];
                  case 2:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (t.prototype.getTaxOnboardingStatusRaw = function (e) {
            return h(this, void 0, void 0, function () {
              var t, n, a;
              return v(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (t = {}),
                      (n = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/onboarding/status",
                            schemaPath: "/onboarding/status",
                            method: "GET",
                            headers: n,
                            query: t
                          },
                          e
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = r.sent()),
                      [
                        2,
                        new m.JSONApiResponse(a, function (e) {
                          return null == e
                            ? e
                            : {
                                onboardingStatus: (0, m.exists)(e, "onboardingStatus")
                                  ? e.onboardingStatus
                                  : void 0,
                                activeCertificationStatus: (0, m.exists)(
                                  e,
                                  "activeCertificationStatus"
                                )
                                  ? e.activeCertificationStatus
                                  : void 0,
                                lastUpdatedTime: (0, m.exists)(e, "lastUpdatedTime")
                                  ? new Date(e.lastUpdatedTime)
                                  : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.getTaxOnboardingStatus = function (e) {
            return h(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.getTaxOnboardingStatusRaw(e)];
                  case 1:
                    return [4, t.sent().value()];
                  case 2:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (t.prototype.getWithholdingRateRaw = function (e, t) {
            return h(this, void 0, void 0, function () {
              var n, a, r;
              return v(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (n = {}),
                      void 0 !== e.paymentType && (n.paymentType = e.paymentType),
                      (a = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/withholding-rate",
                            schemaPath: "/withholding-rate",
                            method: "GET",
                            headers: a,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (r = i.sent()),
                      [
                        2,
                        new m.JSONApiResponse(r, function (e) {
                          var t, n;
                          return null == e
                            ? e
                            : {
                                rate: (0, m.exists)(e, "rate")
                                  ? null == (t = e.rate)
                                    ? t
                                    : {
                                        withholdingRateBps: (0, m.exists)(t, "withholdingRateBps")
                                          ? t.withholdingRateBps
                                          : void 0,
                                        treatyCountryCode: (0, m.exists)(t, "treatyCountryCode")
                                          ? t.treatyCountryCode
                                          : void 0,
                                        certificationId: (0, m.exists)(t, "certificationId")
                                          ? t.certificationId
                                          : void 0,
                                        basis: (0, m.exists)(t, "basis") ? t.basis : void 0
                                      }
                                  : void 0,
                                reason: (0, m.exists)(e, "reason")
                                  ? null == (n = e.reason)
                                    ? n
                                    : { reason: (0, m.exists)(n, "reason") ? n.reason : void 0 }
                                  : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.getWithholdingRate = function () {
            return h(this, arguments, void 0, function (e, t) {
              return (
                void 0 === e && (e = {}),
                v(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.getWithholdingRateRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                })
              );
            });
          }),
          (t.prototype.startTaxOnboardingRaw = function (e, t) {
            return h(this, void 0, void 0, function () {
              var n, a, r;
              return v(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (n = {}),
                      ((a = {})["Content-Type"] = "application/json"),
                      [
                        4,
                        this.request(
                          {
                            path: "/onboarding:start",
                            schemaPath: "/onboarding:start",
                            method: "POST",
                            headers: a,
                            query: n,
                            body: e.body
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (r = i.sent()),
                      [
                        2,
                        new m.JSONApiResponse(r, function (e) {
                          return null == e
                            ? e
                            : { accepted: (0, m.exists)(e, "accepted") ? e.accepted : void 0 };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.startTaxOnboarding = function () {
            return h(this, arguments, void 0, function (e, t) {
              return (
                void 0 === e && (e = {}),
                v(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.startTaxOnboardingRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                })
              );
            });
          }),
          t
        );
      })(m.BaseAPI);
    e.s(
      [
        "CreatorTaxAPIApi",
        0,
        x,
        "PaymentType",
        0,
        {
          Invalid: "PAYMENT_TYPE_INVALID",
          Service: "PAYMENT_TYPE_SERVICE",
          Royalty: "PAYMENT_TYPE_ROYALTY"
        },
        "TaxOnboardingStatus",
        0,
        {
          Invalid: "TAX_ONBOARDING_STATUS_INVALID",
          NotStarted: "TAX_ONBOARDING_STATUS_NOT_STARTED",
          InReview: "TAX_ONBOARDING_STATUS_IN_REVIEW",
          Complete: "TAX_ONBOARDING_STATUS_COMPLETE",
          CuringRequired: "TAX_ONBOARDING_STATUS_CURING_REQUIRED",
          ResubmissionRequired: "TAX_ONBOARDING_STATUS_RESUBMISSION_REQUIRED",
          AdditionalInfoRequired: "TAX_ONBOARDING_STATUS_ADDITIONAL_INFO_REQUIRED"
        },
        "TaxOnboardingTokenBlockedReason",
        0,
        f,
        "WithholdingBasis",
        0,
        {
          Invalid: "WITHHOLDING_BASIS_INVALID",
          UsSource: "WITHHOLDING_BASIS_US_SOURCE",
          AllEarnings: "WITHHOLDING_BASIS_ALL_EARNINGS"
        }
      ],
      148343
    );
    let b = new x((0, e.i(272593).createClientConfiguration)("creator-tax", "bedev2")),
      g = (e) => b.getTaxDevexStatus(e);
    function y(e) {
      if (e.reason instanceof Error) return e.reason;
      let t = Error("Tax onboarding request was aborted");
      return ((t.name = "AbortError"), t);
    }
    let T = async (e) => {
      if (!(await b.startTaxOnboarding({ body: {} }, e)).accepted)
        throw Error("Tax onboarding start response was not accepted");
      let t = Date.now();
      for (; Date.now() - t < 12e4;) {
        var n, a;
        let t = await b.getTaxOnboardingResult(e);
        if (
          (void 0 !== (n = t.tokenBlockedReason) && n !== f.Invalid) ||
          (t.sdkToken && !((a = t.tokenExpiryTime) && a.getTime() <= Date.now() + 6e4))
        )
          return t;
        await (function (e) {
          return new Promise((t, n) => {
            if (null == e ? void 0 : e.aborted) return void n(y(e));
            let a = setTimeout(() => {
                (null == e || e.removeEventListener("abort", r), t());
              }, 4e3),
              r = () => {
                (clearTimeout(a), e && n(y(e)));
              };
            null == e || e.addEventListener("abort", r, { once: !0 });
          });
        })(null == e ? void 0 : e.signal);
      }
      throw Error("Tax onboarding workflow did not complete before polling timed out");
    };
    function R() {
      let { ready: e, value: t } = (0, r.useFlag)(c.isTaxDocumentationEnabled),
        n = e && t && !0,
        { data: a, isLoading: i } = (function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, d.useQuery)({
            queryKey: ["devex", "taxDevexStatus"],
            queryFn: () => g(),
            retry: 2,
            retryDelay: 0,
            staleTime: 3e5,
            ...e
          });
        })({ enabled: n });
      return {
        canAccessTaxDocumentation: n && (null == a ? void 0 : a.hasDevexed) === !0,
        isLoading: !e || (n && i)
      };
    }
    (e.s(
      [
        "getOrCreateTaxOnboarding",
        0,
        T,
        "getTaxDevexStatus",
        0,
        g,
        "getTaxOnboardingStatus",
        0,
        (e) => b.getTaxOnboardingStatus(e),
        "getWithholdingRate",
        0,
        (e, t) => b.getWithholdingRate({ paymentType: e }, t)
      ],
      558726
    ),
      e.s(["useTaxDocumentationAccess", 0, R], 509927));
    var w = e.i(881670),
      S = e.i(85057),
      E = e.i(745873);
    let N = "/dashboard/devex/taxes";
    e.s(
      [
        "default",
        0,
        () => {
          let e = (0, i.useTranslation)(),
            { translate: c } = e,
            { tPendingTranslation: d } = (0, l.default)(e),
            { value: m } = (0, r.useFlag)(s.isRevenueShareAgreementsEnabled),
            { canAccessTaxDocumentation: p } = R(),
            h = (0, E.useCurrentGroup)(),
            v = (0, a.usePathname)(),
            f = !!h,
            x = d(
              "Taxes",
              "Page title / navigation label for the DevEx taxes page.",
              (0, u.translationKey)("Heading.Taxes", w.TranslationNamespace.TaxDocumentation)
            ),
            b = (0, n.useMemo)(
              () =>
                ((e) => {
                  var t;
                  if (e === N || e.startsWith("".concat(N, "/"))) return "taxes";
                  let n = e.split("/");
                  return null != (t = n[n.length - 1]) ? t : "";
                })(v),
              [v]
            ),
            [g, y] = (0, n.useMemo)(() => {
              let e = [],
                t = [],
                n = "/dashboard";
              return (
                e.push({ key: "devex", href: "".concat(n, "/devex"), label: c("Label.DevEx") }),
                f &&
                  (e.push({
                    key: "payouts",
                    href: "".concat(n, "/group/payouts"),
                    label: c("Heading.Payouts")
                  }),
                  m &&
                    e.push({
                      key: "revenue-share-agreements",
                      href: "".concat(n, "/group/revenue-share-agreements"),
                      label: d(
                        "Revenue Share",
                        "Finance nav entry for the revenue-share page.",
                        (0, u.translationKey)(
                          "Heading.RevenueShare",
                          w.TranslationNamespace.RevenueShareAgreements
                        )
                      )
                    })),
                m &&
                  !f &&
                  e.push({
                    key: "revenue-share-agreements",
                    href: "".concat(n, "/revenue-share-agreements"),
                    label: d(
                      "Revenue Share",
                      "Finance nav entry for the revenue-share page.",
                      (0, u.translationKey)(
                        "Heading.RevenueShare",
                        w.TranslationNamespace.RevenueShareAgreements
                      )
                    )
                  }),
                e.push({
                  key: "transactions",
                  href: "".concat(n, "/transactions"),
                  label: c("Heading.Transactions")
                }),
                p && e.push({ key: "taxes", href: "".concat(n, "/devex/taxes"), label: x }),
                t.push({
                  key: "billing",
                  href: "".concat(n, "/billing"),
                  label: c("Heading.Billing")
                }),
                t.push({
                  key: "payments",
                  href: "".concat(n, "/payments"),
                  label: c("Heading.Payments")
                }),
                t.push({
                  key: "account-information",
                  href: "".concat(n, "/account-information"),
                  label: c("Title.AccountInformation")
                }),
                [e, t]
              );
            }, [p, f, m, x, d, c]);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(S.default, { activeKey: b, header: c("Heading.Finances"), items: g }),
              (0, t.jsx)(o.Divider, { sx: { margin: "12px 0px" } }),
              (0, t.jsx)(S.default, { activeKey: b, items: y })
            ]
          });
        }
      ],
      988723
    );
  },
  373117,
  (e) => {
    "use strict";
    var t = e.i(221628),
      n = e.i(177608),
      a = e.i(988723);
    e.s([
      "default",
      0,
      (e, r) => {
        let { title: i } = r;
        return (0, t.jsx)(n.default, {
          title: i,
          noBreadCrumbs: !0,
          secondaryRail: (0, t.jsx)(a.default, {}),
          secondarySize: "small",
          children: e
        });
      }
    ]);
  },
  505687,
  (e) => {
    "use strict";
    var t = e.i(221628),
      n = e.i(127792),
      a = e.i(858517),
      r = e.i(888379),
      i = e.i(197649),
      o = e.i(79187),
      s = e.i(220311),
      l = e.i(462863);
    let u = (0, o.withTranslation)(
      (e) => {
        let { title: s, message: u, buttonText: c, onReload: d, className: m } = e,
          { translate: p } = (0, o.useTranslation)();
        return (0, t.jsxs)("div", {
          className: (0, i.clsx)("flex flex-col justify-center items-center size-full", m),
          children: [
            (0, t.jsx)(l.default, { lightSrc: a.default, darkSrc: n.default, alt: "failure" }),
            (0, t.jsxs)("div", {
              className: "flex flex-col text-align-x-center gap-small margin-bottom-medium",
              children: [
                (0, t.jsx)("h2", {
                  className: "text-heading-small content-emphasis margin-none",
                  children: s || p("Heading.GenericError")
                }),
                (0, t.jsx)("span", { className: "text-body-medium content-default", children: u })
              ]
            }),
            d &&
              (0, t.jsx)(r.Button, {
                variant: "Standard",
                size: "Medium",
                onClick: d,
                children: c || p("Action.FailedToLoadPage")
              })
          ]
        });
      },
      [s.default.Error]
    );
    e.s(["default", 0, u]);
  },
  599306,
  (e) => {
    "use strict";
    var t = e.i(221628),
      n = e.i(169722),
      a = e.i(935606);
    let r = (0, e.i(706442).makeStyles)()({
      root: { flexGrow: 1, width: "100%", height: "100%", minHeight: 200 }
    });
    e.s(
      [
        "default",
        0,
        () => {
          let {
            classes: { root: e }
          } = r();
          return (0, t.jsx)(n.Grid, {
            classes: { root: e },
            container: !0,
            justifyContent: "center",
            alignItems: "center",
            children: (0, t.jsx)(a.CircularProgress, {})
          });
        }
      ],
      599306
    );
  },
  315595,
  (e) => {
    "use strict";
    var t = e.i(599306);
    e.s(["PageLoading", () => t.default]);
  },
  60373,
  (e) => {
    "use strict";
    var t = e.i(416340),
      n = e.i(29929);
    let a = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          let n = window.localStorage.getItem(e);
          return n ? JSON.parse(n) : t;
        } catch (e) {
          return t;
        }
      },
      r = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          window.localStorage.setItem(e, JSON.stringify(t));
        } catch (e) {
          console.warn("Unable to write to local storage", e);
        }
      };
    e.s([
      "default",
      0,
      function (e, i) {
        var o;
        let s = null != (o = null == i ? void 0 : i.cacheOnly) && o,
          [l, u] = (0, t.useState)(() =>
            s
              ? { params: a(e), status: "success", isFetched: !0 }
              : {
                  params: (null == i ? void 0 : i.restoreInitialValueFromCache) ? a(e) : {},
                  status: "initial",
                  isFetched: !1
                }
          );
        return (
          (0, t.useEffect)(() => {
            s ||
              (async () => {
                let t = {};
                try {
                  (u((e) => ({ ...e, status: "loading" })),
                    (t = await (0, n.fetchIXPParametersForCurrentUser)(e)),
                    u({ params: t, isFetched: !0, status: "success" }),
                    r(e, t));
                } catch (e) {
                  u((e) => ({ ...e, isFetched: !0, status: "error" }));
                }
              })();
          }, []),
          l
        );
      },
      "getValueFromStorage",
      0,
      a,
      "writeValueToStorage",
      0,
      r
    ]);
  },
  227700,
  (e) => {
    "use strict";
    var t = e.i(60373);
    e.s(["useIXPParameters", () => t.default]);
  },
  902748,
  (e) => {
    "use strict";
    var t = e.i(79187);
    let n = {
      [t.Locale.English]: "en_us",
      [t.Locale.Spanish]: "es_es",
      [t.Locale.French]: "fr_fr",
      [t.Locale.German]: "de_de",
      [t.Locale.Italian]: "it_it",
      [t.Locale.BrazilPortuguese]: "pt_br",
      [t.Locale.Korean]: "ko_kr",
      [t.Locale.SimplifiedChinese]: "zh_cn",
      [t.Locale.SimplifiedChineseJV]: "zh_cjv",
      [t.Locale.TraditionalChinese]: "zh_tw",
      [t.Locale.Japanese]: "ja_jp",
      [t.Locale.Russian]: "ru_ru",
      [t.Locale.Indonesian]: "id_id",
      [t.Locale.Polish]: "pl_pl",
      [t.Locale.Vietnamese]: "vi_vn",
      [t.Locale.Turkish]: "tr_tr",
      [t.Locale.Arabic]: "ar_001",
      [t.Locale.Thai]: "th_th",
      [t.Locale.Hindi]: "hi_in"
    };
    e.s(["default", 0, n]);
  },
  85057,
  (e) => {
    "use strict";
    var t = e.i(221628),
      n = e.i(602635),
      a = e.i(79187),
      r = e.i(199834),
      i = e.i(169722),
      o = e.i(706442),
      s = e.i(39128);
    let l = (0, o.makeStyles)()((e) => ({
      container: { display: "flex", flexDirection: "column", gap: 8 },
      headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", minWidth: 0 },
      header: {
        display: "flex",
        alignItems: "center",
        height: 40,
        minHeight: 40,
        paddingLeft: 12,
        minWidth: 0,
        overflow: "hidden",
        color: "var(--color-content-emphasis)",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontFamily: 'var(--Config-Text-Font, "Builder Sans")',
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "140%"
      },
      divider: { borderColor: e.palette.components.divider },
      icon: {
        height: 32,
        width: 32,
        minWidth: 32,
        minHeight: 32,
        flexShrink: 0,
        overflow: "hidden",
        borderRadius: 8,
        color: "var(--color-content-emphasis)",
        "& img, & canvas, & > *": {
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "cover",
          display: "block"
        }
      }
    }));
    e.s([
      "default",
      0,
      (e) => {
        let { header: o, items: u, icon: c, activeKey: d, defaultExpanded: m } = e,
          { classes: p } = l(),
          { ready: h } = (0, a.useTranslation)();
        return h
          ? (0, t.jsxs)(i.Grid, {
              classes: { root: p.container },
              children: [
                o &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsxs)(i.Grid, {
                        classes: { root: p.headerContainer },
                        children: [
                          c && (0, t.jsx)(i.Grid, { classes: { root: p.icon }, children: c }),
                          (0, t.jsx)(r.Typography, {
                            variant: "largeLabel2",
                            classes: { root: p.header },
                            children: o
                          })
                        ]
                      }),
                      (0, t.jsx)(s.Divider, { classes: { root: p.divider } })
                    ]
                  }),
                u.length > 0 &&
                  (0, t.jsx)(n.NavigationTree, {
                    selected: d,
                    defaultExpanded: m,
                    children: u.map((e) => {
                      var a;
                      return (0, t.jsx)(
                        n.NavigationTreeItem,
                        {
                          label: e.label,
                          nodeId: e.key,
                          href: e.href,
                          adornment: e.adornment,
                          variant: "smallLabel2",
                          onClick: e.onClick,
                          children:
                            null == (a = e.subItems)
                              ? void 0
                              : a.map((a) =>
                                  (0, t.jsx)(
                                    n.NavigationTreeItem,
                                    {
                                      label: a.label,
                                      nodeId: a.key,
                                      onClick: a.onClick,
                                      href: a.href,
                                      adornment: a.adornment
                                    },
                                    "".concat(e.key, "-").concat(a.key)
                                  )
                                )
                        },
                        e.key
                      );
                    })
                  })
              ]
            })
          : null;
      }
    ]);
  },
  692475,
  (e) => {
    "use strict";
    var t = e.i(221628),
      n = e.i(416340),
      a = e.i(79187),
      r = e.i(138726),
      i = e.i(237401),
      o = e.i(37819),
      s = e.i(196945),
      l = e.i(814975),
      u = e.i(599147);
    function c(e) {
      return "object" == typeof e && null !== e;
    }
    var d = e.i(272593);
    class m extends u.DefaultApi {
      async getDevExIntervention() {
        try {
          var e,
            t = await this.behaviorInterventionGetNotApproved({
              abuseVector: u.BehaviorInterventionGetNotApprovedAbuseVectorEnum.Devex
            });
          if (!c(t)) return null;
          let n = (function (e) {
            for (let t of ["interventionId", "intervention_id"]) {
              let n = e[t];
              if ("string" == typeof n && n.trim()) return n.trim();
            }
          })(t);
          if (!n) return null;
          let a = t.acknowledgeable,
            r = t.punishmentTypeDescription;
          return {
            interventionId: n,
            acknowledgeable: !1 !== a,
            punishmentTypeDescription: "string" == typeof r ? r : void 0,
            endDate:
              (e = t.endDate) instanceof Date
                ? Number.isNaN(e.getTime())
                  ? void 0
                  : e.toISOString()
                : "string" == typeof e && e.trim()
                  ? Number.isNaN(new Date(e).getTime())
                    ? void 0
                    : e
                  : void 0,
            consequenceTransparencyMessage:
              "string" == typeof t.consequenceTransparencyMessage
                ? t.consequenceTransparencyMessage
                : void 0,
            badUtterances: (function (e) {
              if (Array.isArray(e))
                return e.flatMap((e) => {
                  if (!c(e)) return [];
                  let t = e.labelTranslationKey;
                  return [{ labelTranslationKey: "string" == typeof t ? t : void 0 }];
                });
            })(t.badUtterances)
          };
        } catch (e) {
          return null;
        }
      }
      async dismissIntervention(e) {
        let t;
        await this.behaviorInterventionDismissIntervention(
          ((t = { intervention_id: e }),
          async (e) => {
            let { init: n } = e;
            return (
              (n.headers = { ...n.headers, "Content-Type": "application/json" }),
              (n.body = t),
              n
            );
          })
        );
      }
      constructor() {
        super((0, d.createClientConfiguration)("usermoderation", "bedev1"));
      }
    }
    let p = new m();
    var h = e.i(677753),
      v = function (e, t) {
        return (v =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
    function f(e, t) {
      if ("function" != typeof t && null !== t)
        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
      function n() {
        this.constructor = e;
      }
      (v(e, t),
        (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())));
    }
    function x(e, t, n, a) {
      return new (n || (n = Promise))(function (r, i) {
        function o(e) {
          try {
            l(a.next(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          try {
            l(a.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function l(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value) instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })
              ).then(o, s);
        }
        l((a = a.apply(e, t || [])).next());
      });
    }
    function b(e, t) {
      var n,
        a,
        r,
        i = {
          label: 0,
          sent: function () {
            if (1 & r[0]) throw r[1];
            return r[1];
          },
          trys: [],
          ops: []
        },
        o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
      return (
        (o.next = s(0)),
        (o.throw = s(1)),
        (o.return = s(2)),
        "function" == typeof Symbol &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
      function s(s) {
        return function (l) {
          var u = [s, l];
          if (n) throw TypeError("Generator is already executing.");
          for (; o && ((o = 0), u[0] && (i = 0)), i;)
            try {
              if (
                ((n = 1),
                a &&
                  (r =
                    2 & u[0]
                      ? a.return
                      : u[0]
                        ? a.throw || ((r = a.return) && r.call(a), 0)
                        : a.next) &&
                  !(r = r.call(a, u[1])).done)
              )
                return r;
              switch (((a = 0), r && (u = [2 & u[0], r.value]), u[0])) {
                case 0:
                case 1:
                  r = u;
                  break;
                case 4:
                  return (i.label++, { value: u[1], done: !1 });
                case 5:
                  (i.label++, (a = u[1]), (u = [0]));
                  continue;
                case 7:
                  ((u = i.ops.pop()), i.trys.pop());
                  continue;
                default:
                  if (
                    !(r = (r = i.trys).length > 0 && r[r.length - 1]) &&
                    (6 === u[0] || 2 === u[0])
                  ) {
                    i = 0;
                    continue;
                  }
                  if (3 === u[0] && (!r || (u[1] > r[0] && u[1] < r[3]))) {
                    i.label = u[1];
                    break;
                  }
                  if (6 === u[0] && i.label < r[1]) {
                    ((i.label = r[1]), (r = u));
                    break;
                  }
                  if (r && i.label < r[2]) {
                    ((i.label = r[2]), i.ops.push(u));
                    break;
                  }
                  (r[2] && i.ops.pop(), i.trys.pop());
                  continue;
              }
              u = t.call(e, i);
            } catch (e) {
              ((u = [6, e]), (a = 0));
            } finally {
              n = r = 0;
            }
          if (5 & u[0]) throw u[1];
          return { value: u[0] ? u[1] : void 0, done: !0 };
        };
      }
    }
    function g(e) {
      if (void 0 !== e) return null === e ? null : { sku: e.sku, amount: e.amount };
    }
    function y(e) {
      if (void 0 !== e) return null === e ? null : { productId: e.productId, currency: e.currency };
    }
    function T(e) {
      var t;
      return null == (t = e) ? t : { name: (0, h.exists)(t, "name") ? t.name : void 0 };
    }
    function R(e) {
      var t, n, a;
      return null == (t = e)
        ? t
        : {
            paymentDate: (0, h.exists)(t, "paymentDate") ? new Date(t.paymentDate) : void 0,
            products: (0, h.exists)(t, "products") ? t.products.map(T) : void 0,
            money: (0, h.exists)(t, "money")
              ? null == (n = t.money)
                ? n
                : {
                    amount: (0, h.exists)(n, "Amount") ? n.Amount : void 0,
                    uSDAmount: (0, h.exists)(n, "USDAmount") ? n.USDAmount : void 0,
                    currency: (0, h.exists)(n, "Currency")
                      ? null == (a = n.Currency)
                        ? a
                        : {
                            id: (0, h.exists)(a, "Id") ? a.Id : void 0,
                            currencyType: (0, h.exists)(a, "CurrencyType")
                              ? a.CurrencyType
                              : void 0,
                            currencyName: (0, h.exists)(a, "CurrencyName")
                              ? a.CurrencyName
                              : void 0,
                            currencySymbol: (0, h.exists)(a, "CurrencySymbol")
                              ? a.CurrencySymbol
                              : void 0
                          }
                      : void 0
                  }
              : void 0,
            paymentProviderType: (0, h.exists)(t, "paymentProviderType")
              ? t.paymentProviderType
              : void 0,
            creditCardType: (0, h.exists)(t, "creditCardType") ? t.creditCardType : void 0,
            cardNumber: (0, h.exists)(t, "cardNumber") ? t.cardNumber : void 0
          };
    }
    ("function" == typeof SuppressedError && SuppressedError,
      (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        (f(t, e),
          (t.prototype.v1AmazonPurchasePostRaw = function (e, t) {
            return x(this, void 0, void 0, function () {
              var n, a, r;
              return b(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (
                      null === e.amazonStorePurchaseModel ||
                      void 0 === e.amazonStorePurchaseModel
                    )
                      throw new h.RequiredError(
                        "amazonStorePurchaseModel",
                        "Required parameter requestParameters.amazonStorePurchaseModel was null or undefined when calling v1AmazonPurchasePost."
                      );
                    return (
                      (n = {}),
                      ((a = {})["Content-Type"] = "application/json"),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/amazon/purchase",
                            schemaPath: "/v1/amazon/purchase",
                            method: "POST",
                            headers: a,
                            query: n,
                            body: (function (e) {
                              if (void 0 !== e)
                                return null === e
                                  ? null
                                  : {
                                      receiptId: e.receiptId,
                                      amazonUserId: e.amazonUserId,
                                      isRetry: e.isRetry
                                    };
                            })(e.amazonStorePurchaseModel)
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return ((r = i.sent()), [2, new h.JSONApiResponse(r)]);
                }
              });
            });
          }),
          (t.prototype.v1AmazonPurchasePost = function (e, t) {
            return x(this, void 0, void 0, function () {
              return b(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1AmazonPurchasePostRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1AmazonValidatePostRaw = function (e, t) {
            return x(this, void 0, void 0, function () {
              var n, a, r;
              return b(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (null === e.validateModel || void 0 === e.validateModel)
                      throw new h.RequiredError(
                        "validateModel",
                        "Required parameter requestParameters.validateModel was null or undefined when calling v1AmazonValidatePost."
                      );
                    return (
                      (n = {}),
                      ((a = {})["Content-Type"] = "application/json"),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/amazon/validate",
                            schemaPath: "/v1/amazon/validate",
                            method: "POST",
                            headers: a,
                            query: n,
                            body: y(e.validateModel)
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return ((r = i.sent()), [2, new h.JSONApiResponse(r)]);
                }
              });
            });
          }),
          (t.prototype.v1AmazonValidatePost = function (e, t) {
            return x(this, void 0, void 0, function () {
              return b(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1AmazonValidatePostRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }));
      })(h.BaseAPI),
      (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        (f(t, e),
          (t.prototype.v1ApplePurchasePostRaw = function (e, t) {
            return x(this, void 0, void 0, function () {
              var n, a, r;
              return b(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (null === e.appleStorePurchaseModel || void 0 === e.appleStorePurchaseModel)
                      throw new h.RequiredError(
                        "appleStorePurchaseModel",
                        "Required parameter requestParameters.appleStorePurchaseModel was null or undefined when calling v1ApplePurchasePost."
                      );
                    return (
                      (n = {}),
                      ((a = {})["Content-Type"] = "application/json"),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/apple/purchase",
                            schemaPath: "/v1/apple/purchase",
                            method: "POST",
                            headers: a,
                            query: n,
                            body: (function (e) {
                              if (void 0 !== e)
                                return null === e
                                  ? null
                                  : {
                                      productId: e.productId,
                                      receipt: e.receipt,
                                      isRetry: e.isRetry
                                    };
                            })(e.appleStorePurchaseModel)
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return ((r = i.sent()), [2, new h.JSONApiResponse(r)]);
                }
              });
            });
          }),
          (t.prototype.v1ApplePurchasePost = function (e, t) {
            return x(this, void 0, void 0, function () {
              return b(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1ApplePurchasePostRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1AppleValidatePostRaw = function (e, t) {
            return x(this, void 0, void 0, function () {
              var n, a, r;
              return b(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (null === e.validateModel || void 0 === e.validateModel)
                      throw new h.RequiredError(
                        "validateModel",
                        "Required parameter requestParameters.validateModel was null or undefined when calling v1AppleValidatePost."
                      );
                    return (
                      (n = {}),
                      ((a = {})["Content-Type"] = "application/json"),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/apple/validate",
                            schemaPath: "/v1/apple/validate",
                            method: "POST",
                            headers: a,
                            query: n,
                            body: y(e.validateModel)
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return ((r = i.sent()), [2, new h.JSONApiResponse(r)]);
                }
              });
            });
          }),
          (t.prototype.v1AppleValidatePost = function (e, t) {
            return x(this, void 0, void 0, function () {
              return b(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1AppleValidatePostRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }));
      })(h.BaseAPI),
      (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        (f(t, e),
          (t.prototype.v1CreditGetRaw = function (e) {
            return x(this, void 0, void 0, function () {
              var t, n, a;
              return b(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (t = {}),
                      (n = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/credit",
                            schemaPath: "/v1/credit",
                            method: "GET",
                            headers: n,
                            query: t
                          },
                          e
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = r.sent()),
                      [
                        2,
                        new h.JSONApiResponse(a, function (e) {
                          return null == e
                            ? e
                            : {
                                balance: (0, h.exists)(e, "balance") ? e.balance : void 0,
                                robuxAmount: (0, h.exists)(e, "robuxAmount")
                                  ? e.robuxAmount
                                  : void 0,
                                canRedeemCreditForRobux: (0, h.exists)(e, "canRedeemCreditForRobux")
                                  ? e.canRedeemCreditForRobux
                                  : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1CreditGet = function (e) {
            return x(this, void 0, void 0, function () {
              return b(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.v1CreditGetRaw(e)];
                  case 1:
                    return [4, t.sent().value()];
                  case 2:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (t.prototype.v1CreditRedeemRobuxPostRaw = function (e) {
            return x(this, void 0, void 0, function () {
              var t, n, a;
              return b(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (t = {}),
                      (n = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/credit/redeem-robux",
                            schemaPath: "/v1/credit/redeem-robux",
                            method: "POST",
                            headers: n,
                            query: t
                          },
                          e
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = r.sent()),
                      this.isJsonMime(a.headers.get("content-type"))
                        ? [2, new h.JSONApiResponse(a)]
                        : [2, new h.TextApiResponse(a)]
                    );
                }
              });
            });
          }),
          (t.prototype.v1CreditRedeemRobuxPost = function (e) {
            return x(this, void 0, void 0, function () {
              return b(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.v1CreditRedeemRobuxPostRaw(e)];
                  case 1:
                    return [4, t.sent().value()];
                  case 2:
                    return [2, t.sent()];
                }
              });
            });
          }));
      })(h.BaseAPI));
    var w = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          f(t, e),
          (t.prototype.v1DeveloperExchangeRateGetRaw = function (e) {
            return x(this, void 0, void 0, function () {
              var t, n, a;
              return b(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (t = {}),
                      (n = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/developer-exchange-rate",
                            schemaPath: "/v1/developer-exchange-rate",
                            method: "GET",
                            headers: n,
                            query: t
                          },
                          e
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = r.sent()),
                      [
                        2,
                        new h.JSONApiResponse(a, function (e) {
                          return null == e
                            ? e
                            : {
                                rate: (0, h.exists)(e, "rate") ? e.rate : void 0,
                                currencyCode: (0, h.exists)(e, "currency-code")
                                  ? e["currency-code"]
                                  : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1DeveloperExchangeRateGet = function (e) {
            return x(this, void 0, void 0, function () {
              return b(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.v1DeveloperExchangeRateGetRaw(e)];
                  case 1:
                    return [4, t.sent().value()];
                  case 2:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (t.prototype.v1DeveloperExchangeRequestPostRaw = function (e, t) {
            return x(this, void 0, void 0, function () {
              var n, a, r;
              return b(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (null === e.request || void 0 === e.request)
                      throw new h.RequiredError(
                        "request",
                        "Required parameter requestParameters.request was null or undefined when calling v1DeveloperExchangeRequestPost."
                      );
                    return (
                      (n = {}),
                      ((a = {})["Content-Type"] = "application/json"),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/developer-exchange-request",
                            schemaPath: "/v1/developer-exchange-request",
                            method: "POST",
                            headers: a,
                            query: n,
                            body: (function (e) {
                              if (void 0 !== e)
                                return null === e
                                  ? null
                                  : {
                                      firstName: e.firstName,
                                      lastName: e.lastName,
                                      emailAddress: e.emailAddress,
                                      password: e.password,
                                      robuxAmount: e.robuxAmount,
                                      standardAmount: e.standardAmount,
                                      o18Amount: e.o18Amount
                                    };
                            })(e.request)
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return ((r = i.sent()), [2, new h.JSONApiResponse(r)]);
                }
              });
            });
          }),
          (t.prototype.v1DeveloperExchangeRequestPost = function (e, t) {
            return x(this, void 0, void 0, function () {
              return b(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1DeveloperExchangeRequestPostRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1EstimatedFiatGetRaw = function (e, t) {
            return x(this, void 0, void 0, function () {
              var n, a, r;
              return b(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (null === e.robuxAmount || void 0 === e.robuxAmount)
                      throw new h.RequiredError(
                        "robuxAmount",
                        "Required parameter requestParameters.robuxAmount was null or undefined when calling v1EstimatedFiatGet."
                      );
                    return (
                      (n = {}),
                      void 0 !== e.robuxAmount && (n.robuxAmount = e.robuxAmount),
                      (a = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/estimated-fiat",
                            schemaPath: "/v1/estimated-fiat",
                            method: "GET",
                            headers: a,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (r = i.sent()),
                      [
                        2,
                        new h.JSONApiResponse(r, function (e) {
                          return null == e
                            ? e
                            : {
                                usdAmountMicro: (0, h.exists)(e, "usdAmountMicro")
                                  ? e.usdAmountMicro
                                  : void 0,
                                usdAmountMicroFromWatermark: (0, h.exists)(
                                  e,
                                  "usdAmountMicroFromWatermark"
                                )
                                  ? e.usdAmountMicroFromWatermark
                                  : void 0,
                                robuxAt35WatermarkRobux: (0, h.exists)(e, "robuxAt35WatermarkRobux")
                                  ? e.robuxAt35WatermarkRobux
                                  : void 0,
                                robuxAt38WatermarkRobux: (0, h.exists)(e, "robuxAt38WatermarkRobux")
                                  ? e.robuxAt38WatermarkRobux
                                  : void 0,
                                effectiveO18Robux: (0, h.exists)(e, "effectiveO18Robux")
                                  ? e.effectiveO18Robux
                                  : void 0,
                                robuxAt35ToUsdRate: (0, h.exists)(e, "robuxAt35ToUsdRate")
                                  ? e.robuxAt35ToUsdRate
                                  : void 0,
                                robuxAt38ToUsdRate: (0, h.exists)(e, "robuxAt38ToUsdRate")
                                  ? e.robuxAt38ToUsdRate
                                  : void 0,
                                effectiveO18ToUsdRate: (0, h.exists)(e, "effectiveO18ToUsdRate")
                                  ? e.effectiveO18ToUsdRate
                                  : void 0,
                                shouldDisplayEffectiveO18Robux: (0, h.exists)(
                                  e,
                                  "shouldDisplayEffectiveO18Robux"
                                )
                                  ? e.shouldDisplayEffectiveO18Robux
                                  : void 0,
                                lastProcessedTimestamp: (0, h.exists)(e, "lastProcessedTimestamp")
                                  ? new Date(e.lastProcessedTimestamp)
                                  : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1EstimatedFiatGet = function (e, t) {
            return x(this, void 0, void 0, function () {
              return b(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1EstimatedFiatGetRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          t
        );
      })(h.BaseAPI),
      S =
        ((function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          (f(t, e),
            (t.prototype.v1DigitalCodesRedeemPostRaw = function (e, t) {
              return x(this, void 0, void 0, function () {
                var n, a, r;
                return b(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (null === e.redemptionModel || void 0 === e.redemptionModel)
                        throw new h.RequiredError(
                          "redemptionModel",
                          "Required parameter requestParameters.redemptionModel was null or undefined when calling v1DigitalCodesRedeemPost."
                        );
                      return (
                        (n = {}),
                        ((a = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/digital-codes/redeem",
                              schemaPath: "/v1/digital-codes/redeem",
                              method: "POST",
                              headers: a,
                              query: n,
                              body: (function (e) {
                                if (void 0 !== e)
                                  return null === e ? null : { redemptionCode: e.redemptionCode };
                              })(e.redemptionModel)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((r = i.sent()), [2, new h.JSONApiResponse(r)]);
                  }
                });
              });
            }),
            (t.prototype.v1DigitalCodesRedeemPost = function (e, t) {
              return x(this, void 0, void 0, function () {
                return b(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1DigitalCodesRedeemPostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }));
        })(h.BaseAPI),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          (f(t, e),
            (t.prototype.v1GamecardRedeemPostRaw = function (e, t) {
              return x(this, void 0, void 0, function () {
                var n, a, r;
                return b(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (null === e.redemptionRequest || void 0 === e.redemptionRequest)
                        throw new h.RequiredError(
                          "redemptionRequest",
                          "Required parameter requestParameters.redemptionRequest was null or undefined when calling v1GamecardRedeemPost."
                        );
                      return (
                        (n = {}),
                        ((a = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/gamecard/redeem",
                              schemaPath: "/v1/gamecard/redeem",
                              method: "POST",
                              headers: a,
                              query: n,
                              body: (function (e) {
                                if (void 0 !== e)
                                  return null === e
                                    ? null
                                    : {
                                        pinCode: e.pinCode,
                                        captchaToken: e.captchaToken,
                                        captchaProvider: e.captchaProvider
                                      };
                              })(e.redemptionRequest)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (r = i.sent()),
                        [
                          2,
                          new h.JSONApiResponse(r, function (e) {
                            return null == e
                              ? e
                              : {
                                  balance: (0, h.exists)(e, "balance") ? e.balance : void 0,
                                  successMsg: (0, h.exists)(e, "successMsg")
                                    ? e.successMsg
                                    : void 0,
                                  successSubText: (0, h.exists)(e, "successSubText")
                                    ? e.successSubText
                                    : void 0,
                                  bonusMsg: (0, h.exists)(e, "bonusMsg") ? e.bonusMsg : void 0,
                                  error: (0, h.exists)(e, "error") ? e.error : void 0,
                                  errorMsg: (0, h.exists)(e, "errorMsg") ? e.errorMsg : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1GamecardRedeemPost = function (e, t) {
              return x(this, void 0, void 0, function () {
                return b(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1GamecardRedeemPostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1GamecardReversePostRaw = function (e, t) {
              return x(this, void 0, void 0, function () {
                var n, a, r;
                return b(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (null === e.request || void 0 === e.request)
                        throw new h.RequiredError(
                          "request",
                          "Required parameter requestParameters.request was null or undefined when calling v1GamecardReversePost."
                        );
                      return (
                        (n = {}),
                        ((a = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/gamecard/reverse",
                              schemaPath: "/v1/gamecard/reverse",
                              method: "POST",
                              headers: a,
                              query: n,
                              body: (function (e) {
                                if (void 0 !== e)
                                  return null === e
                                    ? null
                                    : { PinCode: e.pinCode, UserId: e.userId };
                              })(e.request)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((r = i.sent()), [2, new h.JSONApiResponse(r)]);
                  }
                });
              });
            }),
            (t.prototype.v1GamecardReversePost = function (e, t) {
              return x(this, void 0, void 0, function () {
                return b(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1GamecardReversePostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }));
        })(h.BaseAPI),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          (f(t, e),
            (t.prototype.v1GooglePurchasePostRaw = function (e, t) {
              return x(this, void 0, void 0, function () {
                var n, a, r;
                return b(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (null === e.purchaseModel || void 0 === e.purchaseModel)
                        throw new h.RequiredError(
                          "purchaseModel",
                          "Required parameter requestParameters.purchaseModel was null or undefined when calling v1GooglePurchasePost."
                        );
                      return (
                        (n = {}),
                        ((a = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/google/purchase",
                              schemaPath: "/v1/google/purchase",
                              method: "POST",
                              headers: a,
                              query: n,
                              body: (function (e) {
                                if (void 0 !== e)
                                  return null === e
                                    ? null
                                    : {
                                        packageName: e.packageName,
                                        productId: e.productId,
                                        token: e.token,
                                        isRetry: e.isRetry,
                                        orderId: e.orderId
                                      };
                              })(e.purchaseModel)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((r = i.sent()), [2, new h.JSONApiResponse(r)]);
                  }
                });
              });
            }),
            (t.prototype.v1GooglePurchasePost = function (e, t) {
              return x(this, void 0, void 0, function () {
                return b(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1GooglePurchasePostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1GoogleValidatePostRaw = function (e, t) {
              return x(this, void 0, void 0, function () {
                var n, a, r;
                return b(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (null === e.validateModel || void 0 === e.validateModel)
                        throw new h.RequiredError(
                          "validateModel",
                          "Required parameter requestParameters.validateModel was null or undefined when calling v1GoogleValidatePost."
                        );
                      return (
                        (n = {}),
                        ((a = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/google/validate",
                              schemaPath: "/v1/google/validate",
                              method: "POST",
                              headers: a,
                              query: n,
                              body: y(e.validateModel)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((r = i.sent()), [2, new h.JSONApiResponse(r)]);
                  }
                });
              });
            }),
            (t.prototype.v1GoogleValidatePost = function (e, t) {
              return x(this, void 0, void 0, function () {
                return b(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1GoogleValidatePostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }));
        })(h.BaseAPI),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            f(t, e),
            (t.prototype.v1LuobuDeveloperExchangeBalanceGetRaw = function (e) {
              return x(this, void 0, void 0, function () {
                var t, n, a;
                return b(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (t = {}),
                        (n = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/luobu-developer-exchange/balance",
                              schemaPath: "/v1/luobu-developer-exchange/balance",
                              method: "GET",
                              headers: n,
                              query: t
                            },
                            e
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = r.sent()),
                        [
                          2,
                          new h.JSONApiResponse(a, function (e) {
                            return null == e
                              ? e
                              : { amount: (0, h.exists)(e, "amount") ? e.amount : void 0 };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1LuobuDeveloperExchangeBalanceGet = function (e) {
              return x(this, void 0, void 0, function () {
                return b(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.v1LuobuDeveloperExchangeBalanceGetRaw(e)];
                    case 1:
                      return [4, t.sent().value()];
                    case 2:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1LuobuDeveloperExchangeEligibilityGetRaw = function (e) {
              return x(this, void 0, void 0, function () {
                var t, n, a;
                return b(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (t = {}),
                        (n = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/luobu-developer-exchange/eligibility",
                              schemaPath: "/v1/luobu-developer-exchange/eligibility",
                              method: "GET",
                              headers: n,
                              query: t
                            },
                            e
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = r.sent()),
                        [
                          2,
                          new h.JSONApiResponse(a, function (e) {
                            return null == e
                              ? e
                              : {
                                  eligibility: (0, h.exists)(e, "eligibility")
                                    ? e.eligibility
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1LuobuDeveloperExchangeEligibilityGet = function (e) {
              return x(this, void 0, void 0, function () {
                return b(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.v1LuobuDeveloperExchangeEligibilityGetRaw(e)];
                    case 1:
                      return [4, t.sent().value()];
                    case 2:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1LuobuDeveloperExchangeLatestRequestStatusGetRaw = function (e) {
              return x(this, void 0, void 0, function () {
                var t, n, a;
                return b(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (t = {}),
                        (n = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/luobu-developer-exchange/latest-request-status",
                              schemaPath: "/v1/luobu-developer-exchange/latest-request-status",
                              method: "GET",
                              headers: n,
                              query: t
                            },
                            e
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = r.sent()),
                        [
                          2,
                          new h.JSONApiResponse(a, function (e) {
                            return null == e
                              ? e
                              : {
                                  date: (0, h.exists)(e, "date") ? new Date(e.date) : void 0,
                                  status: (0, h.exists)(e, "status") ? e.status : void 0,
                                  amount: (0, h.exists)(e, "amount") ? e.amount : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1LuobuDeveloperExchangeLatestRequestStatusGet = function (e) {
              return x(this, void 0, void 0, function () {
                return b(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.v1LuobuDeveloperExchangeLatestRequestStatusGetRaw(e)];
                    case 1:
                      return [4, t.sent().value()];
                    case 2:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1LuobuDeveloperExchangeRequestPostRaw = function (e, t) {
              return x(this, void 0, void 0, function () {
                var n, a, r;
                return b(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (null === e.request || void 0 === e.request)
                        throw new h.RequiredError(
                          "request",
                          "Required parameter requestParameters.request was null or undefined when calling v1LuobuDeveloperExchangeRequestPost."
                        );
                      return (
                        (n = {}),
                        ((a = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/luobu-developer-exchange/request",
                              schemaPath: "/v1/luobu-developer-exchange/request",
                              method: "POST",
                              headers: a,
                              query: n,
                              body: (function (e) {
                                if (void 0 !== e)
                                  return null === e
                                    ? null
                                    : {
                                        firstName: e.firstName,
                                        lastName: e.lastName,
                                        email: e.email,
                                        amount: e.amount
                                      };
                              })(e.request)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((r = i.sent()), [2, new h.JSONApiResponse(r)]);
                  }
                });
              });
            }),
            (t.prototype.v1LuobuDeveloperExchangeRequestPost = function (e, t) {
              return x(this, void 0, void 0, function () {
                return b(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1LuobuDeveloperExchangeRequestPostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            t
          );
        })(h.BaseAPI));
    ((function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      (f(t, e),
        (t.prototype.v1NotificationsXsollaPostRaw = function (e, t) {
          return x(this, void 0, void 0, function () {
            var n, a, r;
            return b(this, function (i) {
              switch (i.label) {
                case 0:
                  if (null === e.xsollaNotificationModel || void 0 === e.xsollaNotificationModel)
                    throw new h.RequiredError(
                      "xsollaNotificationModel",
                      "Required parameter requestParameters.xsollaNotificationModel was null or undefined when calling v1NotificationsXsollaPost."
                    );
                  return (
                    (n = {}),
                    ((a = {})["Content-Type"] = "application/json"),
                    [
                      4,
                      this.request(
                        {
                          path: "/v1/notifications/xsolla",
                          schemaPath: "/v1/notifications/xsolla",
                          method: "POST",
                          headers: a,
                          query: n,
                          body: (function (e) {
                            if (void 0 !== e)
                              return null === e
                                ? null
                                : {
                                    notification_type: e.notificationType,
                                    purchase: (function (e) {
                                      if (void 0 !== e)
                                        return null === e
                                          ? null
                                          : {
                                              virtual_currency: (function (e) {
                                                if (void 0 !== e)
                                                  return null === e
                                                    ? null
                                                    : {
                                                        name: e.name,
                                                        quantity: e.quantity,
                                                        currency: e.currency,
                                                        amount: e.amount,
                                                        sku: e.sku
                                                      };
                                              })(e.virtualCurrency),
                                              virtual_items: (function (e) {
                                                if (void 0 !== e)
                                                  return null === e
                                                    ? null
                                                    : {
                                                        items:
                                                          void 0 === e.items
                                                            ? void 0
                                                            : e.items.map(g),
                                                        currency: e.currency,
                                                        amount: e.amount
                                                      };
                                              })(e.virtualItems),
                                              checkout: (function (e) {
                                                if (void 0 !== e)
                                                  return null === e
                                                    ? null
                                                    : { currency: e.currency, amount: e.amount };
                                              })(e.checkout),
                                              subscription: (function (e) {
                                                if (void 0 !== e)
                                                  return null === e
                                                    ? null
                                                    : {
                                                        subscription_id: e.subscriptionId,
                                                        plan_id: e.planId,
                                                        product_id: e.productId,
                                                        date_create:
                                                          void 0 === e.dateCreate
                                                            ? void 0
                                                            : e.dateCreate.toISOString(),
                                                        date_end:
                                                          void 0 === e.dateEnd
                                                            ? void 0
                                                            : e.dateEnd.toISOString(),
                                                        currency: e.currency,
                                                        amount: e.amount
                                                      };
                                              })(e.subscription),
                                              total: (function (e) {
                                                if (void 0 !== e)
                                                  return null === e
                                                    ? null
                                                    : { currency: e.currency, amount: e.amount };
                                              })(e.total)
                                            };
                                    })(e.purchase),
                                    user: (function (e) {
                                      if (void 0 !== e)
                                        return null === e
                                          ? null
                                          : {
                                              id: e.id,
                                              ip: e.ip,
                                              phone: e.phone,
                                              email: e.email,
                                              country: e.country
                                            };
                                    })(e.user),
                                    transaction: (function (e) {
                                      if (void 0 !== e)
                                        return null === e
                                          ? null
                                          : {
                                              id: e.id,
                                              external_id: e.externalId,
                                              payment_date:
                                                void 0 === e.paymentDate
                                                  ? void 0
                                                  : e.paymentDate.toISOString(),
                                              payment_method: e.paymentMethod,
                                              dry_run: e.dryRun
                                            };
                                    })(e.transaction),
                                    payment_details: (function (e) {
                                      if (void 0 !== e)
                                        return null === e
                                          ? null
                                          : {
                                              payment: (function (e) {
                                                if (void 0 !== e)
                                                  return null === e
                                                    ? null
                                                    : { currency: e.currency, amount: e.amount };
                                              })(e.payment),
                                              payment_method_sum: (function (e) {
                                                if (void 0 !== e)
                                                  return null === e
                                                    ? null
                                                    : { currency: e.currency, amount: e.amount };
                                              })(e.paymentMethodSum),
                                              xsolla_balance_sum: (function (e) {
                                                if (void 0 !== e)
                                                  return null === e
                                                    ? null
                                                    : { currency: e.currency, amount: e.amount };
                                              })(e.xsollaBalanceSum),
                                              payout: (function (e) {
                                                if (void 0 !== e)
                                                  return null === e
                                                    ? null
                                                    : { currency: e.currency, amount: e.amount };
                                              })(e.payout),
                                              xsolla_fee: (function (e) {
                                                if (void 0 !== e)
                                                  return null === e
                                                    ? null
                                                    : { currency: e.currency, amount: e.amount };
                                              })(e.xsollaFee),
                                              payment_method_fee: (function (e) {
                                                if (void 0 !== e)
                                                  return null === e
                                                    ? null
                                                    : { currency: e.currency, amount: e.amount };
                                              })(e.paymentMethodFee),
                                              vat: (function (e) {
                                                if (void 0 !== e)
                                                  return null === e
                                                    ? null
                                                    : { currency: e.currency, amount: e.amount };
                                              })(e.vat),
                                              sales_tax: (function (e) {
                                                if (void 0 !== e)
                                                  return null === e
                                                    ? null
                                                    : { currency: e.currency, amount: e.amount };
                                              })(e.salesTax),
                                              payout_currency_rate: e.payoutCurrencyRate
                                            };
                                    })(e.paymentDetails),
                                    refund_details: (function (e) {
                                      if (void 0 !== e)
                                        return null === e
                                          ? null
                                          : { code: e.code, reason: e.reason };
                                    })(e.refundDetails),
                                    custom_parameters: (function (e) {
                                      if (void 0 !== e)
                                        return null === e
                                          ? null
                                          : {
                                              user_id: e.userId,
                                              payment_method: e.paymentMethod,
                                              account_id: e.accountId,
                                              checkout_session_id: e.checkoutSessionId,
                                              main_product: e.mainProduct,
                                              main_product_price: e.mainProductPrice,
                                              upsell_product: e.upsellProduct,
                                              upsell_product_price: e.upsellProductPrice,
                                              total_price: e.totalPrice,
                                              currency: e.currency,
                                              transaction_time:
                                                void 0 === e.transactionTime
                                                  ? void 0
                                                  : e.transactionTime.toISOString(),
                                              ip_address: e.ipAddress,
                                              price_country_id: e.priceCountryId
                                            };
                                    })(e.customParameters)
                                  };
                          })(e.xsollaNotificationModel)
                        },
                        t
                      )
                    ]
                  );
                case 1:
                  return ((r = i.sent()), [2, new h.JSONApiResponse(r)]);
              }
            });
          });
        }),
        (t.prototype.v1NotificationsXsollaPost = function (e, t) {
          return x(this, void 0, void 0, function () {
            return b(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, this.v1NotificationsXsollaPostRaw(e, t)];
                case 1:
                  return [4, n.sent().value()];
                case 2:
                  return [2, n.sent()];
              }
            });
          });
        }));
    })(h.BaseAPI),
      (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        (f(t, e),
          (t.prototype.v1UserPaymentsGetRaw = function (e, t) {
            return x(this, void 0, void 0, function () {
              var n, a, r;
              return b(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (n = {}),
                      void 0 !== e.sortOrder && (n.sortOrder = e.sortOrder),
                      void 0 !== e.limit && (n.limit = e.limit),
                      void 0 !== e.cursor && (n.cursor = e.cursor),
                      (a = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/user/payments",
                            schemaPath: "/v1/user/payments",
                            method: "GET",
                            headers: a,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (r = i.sent()),
                      [
                        2,
                        new h.JSONApiResponse(r, function (e) {
                          return null == e
                            ? e
                            : {
                                previousPageCursor: (0, h.exists)(e, "previousPageCursor")
                                  ? e.previousPageCursor
                                  : void 0,
                                nextPageCursor: (0, h.exists)(e, "nextPageCursor")
                                  ? e.nextPageCursor
                                  : void 0,
                                data: (0, h.exists)(e, "data") ? e.data.map(R) : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UserPaymentsGet = function () {
            return x(this, arguments, void 0, function (e, t) {
              return (
                void 0 === e && (e = {}),
                b(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UserPaymentsGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                })
              );
            });
          }));
      })(h.BaseAPI),
      (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        (f(t, e),
          (t.prototype.v1PaymentsXsollaIframeTokenPostRaw = function (e, t) {
            return x(this, void 0, void 0, function () {
              var n, a, r;
              return b(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (null === e.xsollaIframeRequest || void 0 === e.xsollaIframeRequest)
                      throw new h.RequiredError(
                        "xsollaIframeRequest",
                        "Required parameter requestParameters.xsollaIframeRequest was null or undefined when calling v1PaymentsXsollaIframeTokenPost."
                      );
                    return (
                      (n = {}),
                      ((a = {})["Content-Type"] = "application/json"),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/payments/xsolla/iframe-token",
                            schemaPath: "/v1/payments/xsolla/iframe-token",
                            method: "POST",
                            headers: a,
                            query: n,
                            body: (function (e) {
                              if (void 0 !== e)
                                return null === e
                                  ? null
                                  : {
                                      mainProductId: e.mainProductId,
                                      upsellProductId: e.upsellProductId,
                                      paymentProviderType: e.paymentProviderType,
                                      verifiedEmailOrPhone: e.verifiedEmailOrPhone
                                    };
                            })(e.xsollaIframeRequest)
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (r = i.sent()),
                      [
                        2,
                        new h.JSONApiResponse(r, function (e) {
                          return null == e
                            ? e
                            : {
                                token: (0, h.exists)(e, "token") ? e.token : void 0,
                                success: (0, h.exists)(e, "success") ? e.success : void 0,
                                message: (0, h.exists)(e, "message") ? e.message : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1PaymentsXsollaIframeTokenPost = function (e, t) {
            return x(this, void 0, void 0, function () {
              return b(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1PaymentsXsollaIframeTokenPostRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }));
      })(h.BaseAPI));
    let E = (0, d.createClientConfiguration)("billing", "bedev1"),
      N = (new S(E), new w(E));
    var I = e.i(199475),
      A = e.i(215955),
      k = e.i(759283),
      D = e.i(315595),
      j = e.i(505687),
      C = e.i(881670),
      P = e.i(102530),
      _ = e.i(252842),
      L = e.i(169722),
      O = e.i(199834),
      q = e.i(210598),
      M = e.i(728397),
      G = e.i(54369),
      U = e.i(620068),
      B = e.i(39128),
      F = e.i(872204),
      V = e.i(982234),
      H = e.i(185147),
      W = e.i(354246),
      z = e.i(748625),
      X = e.i(208215),
      K = e.i(533968),
      J = e.i(412201);
    let Y = (e) => {
        let t = e.devExSuspensionEndTimeUtc;
        if (null == t) return;
        if (t instanceof Date) return t;
        let n = new Date(t);
        return Number.isNaN(n.getTime()) ? void 0 : n;
      },
      Q = (e) => !0 === e.isDevExSuspended && !0 !== e.isAtRiskOfSuspension;
    var Z = e.i(996829);
    let $ = {
        30: "Message.DevExSuspendedSubmitError",
        40: "Message.InsufficientFunds",
        50: "Message.IncorrectCredentials"
      },
      ee = (e) => {
        let t = String(e).replaceAll(/\s/g, ""),
          n = t.indexOf(".");
        return (-1 === n ? t : t.slice(0, n)).replaceAll(/\D/g, "");
      };
    var et = e.i(423107),
      en = e.i(447055),
      ea = e.i(988012);
    let er = e.i(872119).default;
    var ei = e.i(706442);
    let eo = (0, ei.makeStyles)()((e) => ({
        root: {
          ...{
            backgroundColor: "transparent",
            color: e.palette.content.standard,
            borderColor: e.palette.content.muted,
            "& .MuiAlert-icon": { color: e.palette.actionV2.primaryBrand.fill },
            "& .MuiAlert-message": { color: e.palette.content.standard }
          },
          borderColor: "#335FFF",
          backgroundColor: "rgba(51, 95, 255, 0.05)",
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
          alignItems: "flex-start",
          "& .MuiAlert-icon": {
            color: e.palette.actionV2.primaryBrand.fill,
            padding: e.spacing(1.5, 0, 0, 0),
            marginRight: e.spacing(1.5)
          },
          "& .MuiAlert-message": {
            color: e.palette.content.standard,
            flex: 1,
            minWidth: 0,
            padding: e.spacing(1.5, 2, 1.5, 0)
          },
          "& .MuiAlert-action": {
            padding: e.spacing(1.5, 0, 1.5, 2),
            marginRight: 0,
            alignItems: "flex-start"
          }
        },
        actionRow: { display: "flex", alignItems: "center", gap: e.spacing(1.2) },
        learnMoreButton: { padding: "10px 12px", minWidth: 95 },
        closeButton: { padding: e.spacing(0.5) }
      })),
      es = (0, a.withTranslation)(
        (e) => {
          let { className: r, lastUpdated: i } = e,
            [o, s] = (0, n.useState)(!0),
            { translate: l } = (0, a.useTranslation)(),
            {
              classes: { root: u, actionRow: c, closeButton: d, learnMoreButton: m }
            } = eo();
          if (!o) return null;
          let p = [u, r].filter(Boolean).join(" ");
          return (0, t.jsx)(et.Alert, {
            severity: "info",
            variant: "outlined",
            "data-testid": "devex-cashout-payout-info-banner",
            className: p,
            icon: (0, t.jsx)("img", { src: er, alt: "", width: 24, height: 24 }),
            action: (0, t.jsxs)("div", {
              className: c,
              children: [
                (0, t.jsx)(F.Button, {
                  size: "small",
                  variant: "contained",
                  color: "secondary",
                  component: "a",
                  href: J.DEVEX_HELP_URL,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-label-small ".concat(m),
                  children: l("Action.LearnMore")
                }),
                (0, t.jsx)(ea.IconButton, {
                  "aria-label": l("Action.Close"),
                  color: "inherit",
                  size: "small",
                  className: d,
                  onClick: () => s(!1),
                  children: (0, t.jsx)(en.CloseIcon, { fontSize: "large" })
                })
              ]
            }),
            children: (0, t.jsx)(O.Typography, {
              component: "div",
              className: "text-body-medium",
              children: l("Message.CashOutPayoutRateInfoBanner", { lastUpdated: i })
            })
          });
        },
        [C.TranslationNamespace.DevEx]
      );
    var el = e.i(242788);
    let eu = (0, ei.makeStyles)()((e) => ({
      root: {
        padding: 12,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: e.palette.components.input.outlined.enabledBorder,
        ...e.border.radius.medium,
        rowGap: e.spacing(2),
        marginTop: 4
      },
      ratesHeading: { marginBottom: 5 },
      tierRowSpaced: { marginTop: 2 },
      tierNoteGrid: { marginTop: e.spacing(0.2), marginBottom: e.spacing(-0.5) },
      infoIcon: { position: "relative", top: -2 },
      robuxAmountText: { position: "relative", top: 1 },
      dividerWrapper: { marginTop: -4, marginBottom: -2 },
      gridItemGrow: { flex: "1 1 auto", minWidth: 0 },
      gridItemShrink: { flexShrink: 0 },
      infoIconCell: { paddingTop: e.spacing(0.125) },
      tierNoteTextCell: { flex: "1 1 auto", minWidth: 0 },
      amountStackRoot: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 0 },
      amountStackRobuxRow: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "3px"
      },
      amountStackUsd: { fontWeight: 600 },
      amountStackUsdTypography: { marginTop: -2 }
    }));
    function ec(e) {
      return String((0, _.numberFormatter)(e, "currency"));
    }
    function ed(e) {
      let { robux: n, usdFormatted: a, classes: r } = e;
      return (0, t.jsxs)("div", {
        className: r.amountStackRoot,
        children: [
          (0, t.jsx)(O.Typography, {
            component: "div",
            children: (0, t.jsxs)("span", {
              className: "".concat(r.amountStackRobuxRow, " text-body-medium"),
              children: [
                (0, t.jsx)(H.RobuxIcon, { fontSize: "small" }),
                (0, t.jsx)("span", { className: r.robuxAmountText, children: n.toLocaleString() })
              ]
            })
          }),
          (0, t.jsx)(O.Typography, {
            className: "text-caption-medium ".concat(r.amountStackUsdTypography),
            component: "div",
            children: (0, t.jsx)("span", { className: r.amountStackUsd, children: a })
          })
        ]
      });
    }
    let em = (e) => {
        let {
            o18Tier: n,
            r35Tier: r,
            r38Tier: i,
            totalRobux: o,
            totalUsd: s,
            r38UsdPerRobuxRate: l
          } = e,
          { translate: u } = (0, a.useTranslation)(),
          {
            classes: {
              root: c,
              tierRowSpaced: d,
              gridItemGrow: m,
              gridItemShrink: p,
              infoIconCell: h,
              tierNoteTextCell: v,
              amountStackRoot: f,
              amountStackRobuxRow: x,
              amountStackUsd: b,
              amountStackUsdTypography: g,
              robuxAmountText: y,
              ratesHeading: T,
              tierNoteGrid: R,
              infoIcon: w,
              dividerWrapper: S
            }
          } = eu(),
          E = {
            amountStackRoot: f,
            amountStackRobuxRow: x,
            amountStackUsd: b,
            amountStackUsdTypography: g,
            robuxAmountText: y
          },
          N = (0, Z.formatUsdPerRobuxRate)(l),
          I =
            u("Message.CashOutRateBreakdownTierOrderNote", { DevExRate: N }) ||
            "This rate will be cashed out before ".concat(N, " rate"),
          A = null !== n && n.robux > 0,
          k = r.robux > 0,
          D = i.robux > 0,
          j = k || D,
          C = k && l > 0,
          P = (e, n) =>
            (0, t.jsxs)(
              L.Grid,
              {
                container: !0,
                justifyContent: "space-between",
                alignItems: "flex-start",
                wrap: "nowrap",
                columnSpacing: 1,
                className: !0 === n.spaced ? d : void 0,
                children: [
                  (0, t.jsxs)(L.Grid, {
                    item: !0,
                    className: m,
                    children: [
                      (0, t.jsx)(O.Typography, {
                        className: "text-body-medium",
                        children:
                          u("Label.CashOutRateBreakdownEarnedAt", {
                            earnedRate: (0, Z.formatUsdPerRobuxRate)(e.rate)
                          }) || "Earned at ".concat((0, Z.formatUsdPerRobuxRate)(e.rate))
                      }),
                      n.showTierOrderNote
                        ? (0, t.jsxs)(L.Grid, {
                            container: !0,
                            wrap: "nowrap",
                            alignItems: "flex-start",
                            columnSpacing: 0.5,
                            className: R,
                            children: [
                              (0, t.jsx)(L.Grid, {
                                item: !0,
                                className: h,
                                children: (0, t.jsx)(el.InfoOutlinedIcon, {
                                  fontSize: "small",
                                  color: "secondary",
                                  className: w
                                })
                              }),
                              (0, t.jsx)(L.Grid, {
                                item: !0,
                                className: v,
                                children: (0, t.jsx)(O.Typography, {
                                  className: "text-body-small",
                                  component: "div",
                                  children: I
                                })
                              })
                            ]
                          })
                        : null
                    ]
                  }),
                  (0, t.jsx)(L.Grid, {
                    item: !0,
                    className: p,
                    children: (0, t.jsx)(ed, {
                      robux: e.robux,
                      usdFormatted: ec(e.usd),
                      classes: E
                    })
                  })
                ]
              },
              n.key
            );
        return (0, t.jsxs)(L.Grid, {
          container: !0,
          direction: "column",
          "data-testid": "devex-form-robux-rate-breakdown",
          className: c,
          children: [
            A
              ? (0, t.jsxs)(L.Grid, {
                  item: !0,
                  children: [
                    (0, t.jsx)(O.Typography, {
                      component: "div",
                      className: "text-title-medium ".concat(T),
                      children: u("Heading.CashOutRateBreakdownUs18Plus") || "US 18+ rate"
                    }),
                    (0, t.jsxs)(L.Grid, {
                      container: !0,
                      justifyContent: "space-between",
                      wrap: "nowrap",
                      columnSpacing: 1,
                      children: [
                        (0, t.jsx)(L.Grid, {
                          item: !0,
                          children: (0, t.jsx)(O.Typography, {
                            className: "text-body-medium",
                            component: "div",
                            children:
                              u("Label.CashOutRateBreakdownEarnedAt", {
                                earnedRate: (0, Z.formatUsdPerRobuxRate)(n.rate)
                              }) || "Earned at ".concat((0, Z.formatUsdPerRobuxRate)(n.rate))
                          })
                        }),
                        (0, t.jsx)(L.Grid, {
                          item: !0,
                          className: p,
                          children: (0, t.jsx)(ed, {
                            robux: n.robux,
                            usdFormatted: ec(n.usd),
                            classes: E
                          })
                        })
                      ]
                    })
                  ]
                })
              : null,
            j
              ? (0, t.jsxs)(L.Grid, {
                  item: !0,
                  children: [
                    (0, t.jsx)(O.Typography, {
                      component: "div",
                      className: "text-title-medium ".concat(T),
                      children: u("Heading.CashOutRateBreakdownStandardRates") || "Standard rates"
                    }),
                    k ? P(r, { key: "R35", showTierOrderNote: C }) : null,
                    D ? P(i, { key: "R38", showTierOrderNote: !1, spaced: k }) : null
                  ]
                })
              : null,
            A || j
              ? (0, t.jsx)(L.Grid, { item: !0, className: S, children: (0, t.jsx)(B.Divider, {}) })
              : null,
            (0, t.jsx)(L.Grid, {
              item: !0,
              children: (0, t.jsxs)(L.Grid, {
                container: !0,
                justifyContent: "space-between",
                alignItems: "center",
                wrap: "nowrap",
                columnSpacing: 1,
                children: [
                  (0, t.jsx)(L.Grid, {
                    item: !0,
                    className: m,
                    children: (0, t.jsx)(O.Typography, {
                      className: "text-title-medium",
                      children: u("Label.CashOutRateBreakdownTotal") || "Total"
                    })
                  }),
                  (0, t.jsx)(L.Grid, {
                    item: !0,
                    className: p,
                    children: (0, t.jsx)(ed, { robux: o, usdFormatted: ec(s), classes: E })
                  })
                ]
              })
            })
          ]
        });
      },
      ep = (0, ei.makeStyles)()((e) => ({
        root: { flexDirection: "column", [e.breakpoints.down("Medium")]: { padding: "0px 8px" } },
        textField: { width: "100%", maxWidth: 750 },
        errorAdornment: {
          marginLeft: 8,
          display: "flex",
          alignItems: "center",
          color: e.palette.actionV2.important.fill
        },
        robuxAdornment: { marginRight: 8, display: "flex", alignItems: "center" },
        robuxError: { color: e.palette.actionV2.important.fill },
        marginRight: { marginRight: 12 },
        robuxAmountHelperContent: {
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          flexWrap: "wrap"
        },
        robuxRateSummaryToggle: {
          display: "inline-flex",
          alignItems: "center",
          padding: 0,
          margin: 0,
          border: "none",
          background: "none",
          cursor: "pointer",
          color: "inherit",
          font: "inherit",
          lineHeight: 0
        },
        availableRobuxHelper: { display: "flex", alignItems: "center", gap: "2px" },
        robuxRateBreakdownContainer: { width: 440, maxWidth: "100%", marginTop: e.spacing(1) },
        helperText: { margin: "5px 0px 0px 0px" },
        expandIcon: { transition: "transform 0.2s ease", position: "relative", top: -1 },
        expandIconExpanded: { transform: "rotate(180deg)" }
      })),
      eh = (e) => {
        var r, i, o, s, u, c, d, m, p, h, v, f;
        let { cashoutInfo: x, submitRequest: b, onCancelCashout: g } = e,
          {
            register: y,
            watch: T,
            handleSubmit: R,
            formState: { errors: w, isSubmitting: S }
          } = (0, P.useForm)({ mode: "onTouched" }),
          [E, A] = (0, n.useState)(null),
          [k, D] = (0, n.useState)(null),
          [j, C] = (0, n.useState)(!1),
          { translate: Y, translateHTML: et } = (0, a.useTranslation)(),
          { locale: en } = (0, a.useLocalization)(),
          {
            classes: {
              root: ea,
              textField: er,
              errorAdornment: ei,
              robuxAdornment: eo,
              robuxError: el,
              marginRight: eu,
              robuxAmountHelperContent: ec,
              robuxRateSummaryToggle: ed,
              availableRobuxHelper: eh,
              robuxRateBreakdownContainer: ev,
              helperText: ef,
              expandIcon: ex,
              expandIconExpanded: eb
            }
          } = ep(),
          eg = "".concat(ef, " text-body-small"),
          ey = (0, U.useMediaQuery)((e) => e.breakpoints.down("Medium")),
          eT = (function (e, t) {
            var a, r, i, o;
            let [s, u] = (0, n.useState)(),
              { user: c } = (0, l.useAuthentication)();
            (0, n.useEffect)(() => {
              (async () => {
                c && c.id && u((await I.default.getUserCurrency(c.id)).robux);
              })();
            }, [c]);
            let d = Math.min(null != (a = t.maxRobuxCanCashOut) ? a : 0, null != s ? s : 0),
              m = {
                required: e("Message.RequiredField"),
                pattern: { value: /^[a-zA-Z ]+$/, message: e("Message.InvalidName") }
              },
              p = {
                required: e("Message.RequiredField"),
                pattern: { value: _.regex.email, message: e("Message.InvalidEmailV2") }
              };
            return {
              validateName: m,
              validateEmail: p,
              validatePassword: { required: e("Message.RequiredField") },
              validateRobux: {
                required: e("Message.InvalidRobuxAmount"),
                setValueAs: (e) => {
                  let t = ee(e);
                  if ("" !== t) return Number(t);
                },
                min: {
                  value: null != (r = t.minRobuxToCashOut) ? r : 0,
                  message: (null == (i = t.minRobuxToCashOut) ? void 0 : i.toLocaleString())
                    ? e("Message.MinimumAmountV2", {
                        amount: null == (o = t.minRobuxToCashOut) ? void 0 : o.toLocaleString()
                      })
                    : ""
                },
                max: {
                  value: d,
                  message: d.toLocaleString()
                    ? e("Message.MaximumAmountV2", { amount: d.toLocaleString() })
                    : ""
                }
              },
              userRobux: s
            };
          })(Y, x),
          eR = async (e) => {
            var t, n;
            let a = null != (t = null == (n = eN.o18Tier) ? void 0 : n.robux) ? t : 0,
              r = eN.r35Tier.robux + eN.r38Tier.robux,
              i = r + a === e.robuxAmount,
              o = {
                request: {
                  firstName: e.firstName,
                  lastName: e.lastName,
                  emailAddress: e.email,
                  password: e.password,
                  robuxAmount: e.robuxAmount,
                  standardAmount: i ? r : 0,
                  o18Amount: i ? a : 0
                }
              };
            try {
              await b(o);
            } catch (e) {
              try {
                let t = (0, K.getResponseFromError)(e),
                  n = await (null == t ? void 0 : t.json()),
                  a = "object" == typeof n && null !== n && "errors" in n ? n : void 0,
                  r = null == a ? void 0 : a.errors;
                void 0 !== r && r.length > 0 ? A(r[0].code) : A(999);
              } catch (e) {
                A(999);
              }
            }
          };
        (0, n.useEffect)(() => {
          let e = !1;
          return (
            (async () => {
              try {
                let t = await N.v1EstimatedFiatGet({ robuxAmount: 0 }),
                  n = (0, Z.normalizeEstimatedFiatResponse)(t);
                e || D(n);
              } catch (e) {}
            })(),
            () => {
              e = !0;
            }
          );
        }, []);
        let ew = null != (r = T("robuxAmount")) ? r : 0,
          {
            robuxToUSD: eS,
            fiatAllocation: eE,
            rateBreakdownTiers: eN
          } = (0, n.useMemo)(() => {
            var e, t, n, a, r, i;
            if (null === k)
              return {
                robuxToUSD: void 0,
                fiatAllocation: { buckets: [], totalRobux: 0, totalUsd: 0 },
                rateBreakdownTiers: {
                  o18Tier: null,
                  r35Tier: { robux: 0, usd: 0, rate: 0 },
                  r38Tier: { robux: 0, usd: 0, rate: 0 }
                }
              };
            let o = (0, Z.allocateDevexWatermarkBuckets)(ew, k),
              s = (0, Z.resolveHeadlineUsdForRobuxAmount)(ew, o),
              l = o.buckets.find((e) => "O18" === e.key),
              u = o.buckets.find((e) => "R35" === e.key),
              c = o.buckets.find((e) => "R38" === e.key);
            return {
              robuxToUSD: s,
              fiatAllocation: o,
              rateBreakdownTiers: {
                o18Tier: k.shouldDisplayEffectiveO18Robux
                  ? {
                      robux: null != (e = null == l ? void 0 : l.robux) ? e : 0,
                      usd: null != (t = null == l ? void 0 : l.usd) ? t : 0,
                      rate: k.effectiveO18ToUsdRate
                    }
                  : null,
                r35Tier: {
                  robux: null != (n = null == u ? void 0 : u.robux) ? n : 0,
                  usd: null != (a = null == u ? void 0 : u.usd) ? a : 0,
                  rate: k.robuxAt35ToUsdRate
                },
                r38Tier: {
                  robux: null != (r = null == c ? void 0 : c.robux) ? r : 0,
                  usd: null != (i = null == c ? void 0 : c.usd) ? i : 0,
                  rate: k.robuxAt38ToUsdRate
                }
              }
            };
          }, [k, ew]),
          eI =
            void 0 !== eT.userRobux &&
            eT.userRobux - T("robuxAmount") >= 0 &&
            void 0 !== x.minRobuxToCashOut &&
            void 0 !== eT.userRobux
              ? (eT.userRobux - T("robuxAmount")).toLocaleString()
              : null == (u = eT.userRobux)
                ? void 0
                : u.toLocaleString(),
          eA = (0, n.useMemo)(
            () =>
              (0, t.jsx)("div", {
                className: ei,
                children: (0, t.jsx)(W.WarningIcon, { fontSize: "small" })
              }),
            [ei]
          ),
          ek = (0, n.useMemo)(() => (0, t.jsx)(H.RobuxIcon, { fontSize: "inherit" }), []),
          eD = y("robuxAmount", eT.validateRobux);
        return (0, t.jsx)("form", {
          onSubmit: R(eR),
          "data-testid": "devex-cashout-form",
          children: (0, t.jsxs)(L.Grid, {
            container: !0,
            className: ea,
            spacing: 3,
            children: [
              (0, t.jsx)(L.Grid, {
                item: !0,
                children: (0, t.jsx)(O.Typography, {
                  variant: ey ? "h3" : "h1",
                  children: Y("Heading.DevExV2")
                })
              }),
              (0, t.jsx)(L.Grid, {
                item: !0,
                children: (0, t.jsx)(O.Typography, {
                  color: "secondary",
                  variant: "body1",
                  children: et("Description.FormInstructionV2", [
                    {
                      opening: "helpLinkStart",
                      closing: "helpLinkEnd",
                      content: (e) =>
                        (0, t.jsx)(V.Link, {
                          href: (0, J.getDevexInfoURL)(en),
                          target: "_blank",
                          children: e
                        })
                    }
                  ])
                })
              }),
              (0, t.jsx)(L.Grid, {
                item: !0,
                children: (0, t.jsx)(q.TextField, {
                  id: "firstNameId",
                  "data-testid": "devex-form-first-name",
                  label: "".concat(Y("Label.FirstName"), "*"),
                  className: er,
                  InputProps: { endAdornment: void 0 !== w.firstName && eA },
                  FormHelperTextProps: { className: eg },
                  error: void 0 !== w.firstName,
                  helperText: null == (c = w.firstName) ? void 0 : c.message,
                  ...y("firstName", eT.validateName)
                })
              }),
              (0, t.jsx)(L.Grid, {
                item: !0,
                children: (0, t.jsx)(q.TextField, {
                  id: "lastNameId",
                  "data-testid": "devex-form-last-name",
                  label: "".concat(Y("Label.LastName"), "*"),
                  className: er,
                  InputProps: { endAdornment: void 0 !== w.lastName && eA },
                  FormHelperTextProps: { className: eg },
                  error: void 0 !== w.lastName,
                  helperText: null == (d = w.lastName) ? void 0 : d.message,
                  ...y("lastName", eT.validateName)
                })
              }),
              (0, t.jsx)(L.Grid, {
                item: !0,
                children: (0, t.jsx)(q.TextField, {
                  id: "emailId",
                  "data-testid": "devex-form-email",
                  type: "email",
                  label: "".concat(Y("Label.EmailAddress"), "*"),
                  helperText:
                    null != (i = null == (m = w.email) ? void 0 : m.message)
                      ? i
                      : Y("Label.EmailAddressRequirement"),
                  className: er,
                  InputProps: { endAdornment: void 0 !== w.email && eA },
                  FormHelperTextProps: { className: eg },
                  error: void 0 !== w.email,
                  ...y("email", eT.validateEmail)
                })
              }),
              (0, t.jsx)(L.Grid, {
                item: !0,
                children: (0, t.jsx)(q.TextField, {
                  id: "passwordId",
                  "data-testid": "devex-form-password",
                  type: "password",
                  label: "".concat(Y("Label.Password"), "*"),
                  className: er,
                  InputProps: { endAdornment: void 0 !== w.password && eA },
                  FormHelperTextProps: { className: eg },
                  error: void 0 !== w.password,
                  helperText: null == (p = w.password) ? void 0 : p.message,
                  ...y("password", eT.validatePassword)
                })
              }),
              (0, t.jsxs)(L.Grid, {
                item: !0,
                children: [
                  (0, t.jsx)(q.TextField, {
                    id: "robuxAmountId",
                    "data-testid": "devex-form-robux-amount",
                    label: "".concat(Y("Label.RobuxAmount"), "*"),
                    className: er,
                    FormHelperTextProps: { className: eg },
                    helperText: (0, t.jsxs)(L.Grid, {
                      container: !0,
                      item: !0,
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [
                        (0, t.jsx)(L.Grid, {
                          item: !0,
                          "data-testid": "devex-form-robux-amount-helper",
                          children:
                            null != (o = null == (h = w.robuxAmount) ? void 0 : h.message)
                              ? o
                              : (0, t.jsxs)("span", {
                                  className: "".concat(ec, " text-body-small"),
                                  children: [
                                    (0, t.jsxs)("span", {
                                      children: [
                                        "".concat(Y("Label.RobuxAmountToUSD"), ": "),
                                        (0, t.jsx)("span", {
                                          className: "text-title-small",
                                          children: Y("Label.CurrencyAmountUSD", {
                                            amount: String(
                                              (0, _.numberFormatter)(
                                                null != eS ? eS : 0,
                                                "currency"
                                              )
                                            )
                                          })
                                        })
                                      ]
                                    }),
                                    (0, t.jsx)("button", {
                                      type: "button",
                                      "data-testid": "devex-form-robux-rate-summary-toggle",
                                      className: ed,
                                      "aria-expanded": j,
                                      "aria-label":
                                        Y("Action.ToggleCashOutRateBreakdown") ||
                                        "Toggle rate breakdown",
                                      onClick: () => C((e) => !e),
                                      children: (0, t.jsx)(X.ExpandMoreIcon, {
                                        className: "".concat(ex, " ").concat(j ? eb : "")
                                      })
                                    })
                                  ]
                                })
                        }),
                        (0, t.jsx)(L.Grid, {
                          item: !0,
                          children:
                            void 0 !== eI &&
                            (null == (v = w.robuxAmount) ? void 0 : v.message) === void 0
                              ? (0, t.jsxs)("div", {
                                  className: "".concat(eh, " text-body-small"),
                                  children: [
                                    (0, t.jsx)("span", { children: Y("Label.AvailableRobux") }),
                                    ek,
                                    (0, t.jsx)("span", { children: eI })
                                  ]
                                })
                              : ""
                        })
                      ]
                    }),
                    InputProps: {
                      startAdornment: (0, t.jsx)("div", {
                        className: eo,
                        children: (0, t.jsx)(H.RobuxIcon, {
                          fontSize: "small",
                          className: void 0 !== w.robuxAmount ? el : void 0
                        })
                      }),
                      endAdornment: void 0 !== w.robuxAmount && eA
                    },
                    inputProps: {
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      onInput: (e) => {
                        let t = e.currentTarget,
                          n = ee(t.value);
                        t.value !== n && (t.value = n);
                      }
                    },
                    error: void 0 !== w.robuxAmount,
                    ...eD
                  }),
                  (null == (f = w.robuxAmount) ? void 0 : f.message) === void 0
                    ? (0, t.jsx)(z.Collapse, {
                        in: j,
                        children: (0, t.jsx)("div", {
                          className: ev,
                          children: (0, t.jsx)(em, {
                            o18Tier: eN.o18Tier,
                            r35Tier: eN.r35Tier,
                            r38Tier: eN.r38Tier,
                            totalRobux: eE.totalRobux,
                            totalUsd: eE.totalUsd,
                            r38UsdPerRobuxRate:
                              null != (s = null == k ? void 0 : k.robuxAt38ToUsdRate) ? s : 0
                          })
                        })
                      })
                    : null
                ]
              }),
              (null == k ? void 0 : k.shouldDisplayEffectiveO18Robux) === !0 &&
                (0, t.jsx)(L.Grid, {
                  item: !0,
                  children: (0, t.jsx)(es, {
                    className: er,
                    lastUpdated: (function (e, t) {
                      let n = new Intl.DateTimeFormat(null != e && "" !== e ? e : "en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                      });
                      if (null != t && !Number.isNaN(t.getTime())) return n.format(t);
                      let a = new Date(),
                        r = new Date(a.getFullYear(), a.getMonth(), a.getDate() - 1);
                      return n.format(r);
                    })(en, k.lastProcessedTimestamp)
                  })
                }),
              (0, t.jsx)(L.Grid, {
                item: !0,
                container: !0,
                alignItems: "center",
                children: (0, t.jsx)(G.FormControlLabel, {
                  "data-testid": "devex-form-agree-tos",
                  control: (0, t.jsx)(M.Checkbox, { color: "secondary", ...y("agreeTOS") }),
                  label: et("Label.AgreeToTermsOfServiceV2", [
                    {
                      opening: "TOSLinkStart",
                      closing: "TOSLinkEnd",
                      content: (e) =>
                        (0, t.jsx)(V.Link, {
                          href: (0, J.getDevexTermsURL)(en),
                          target: "_blank",
                          children: e
                        })
                    }
                  ])
                })
              }),
              !x.lastImbursementSubmissionDate &&
                (0, t.jsx)(L.Grid, {
                  item: !0,
                  container: !0,
                  alignItems: "center",
                  children: (0, t.jsx)(G.FormControlLabel, {
                    "data-testid": "devex-form-agree-info",
                    control: (0, t.jsx)(M.Checkbox, { color: "secondary", ...y("agreeInfo") }),
                    label: Y("Label.AgreeToProvideInfoV2")
                  })
                }),
              (0, t.jsx)(L.Grid, { item: !0, children: (0, t.jsx)(B.Divider, {}) }),
              (0, t.jsxs)(L.Grid, {
                item: !0,
                container: !0,
                alignItems: "center",
                children: [
                  (0, t.jsx)(F.Button, {
                    color: "primary",
                    variant: "outlined",
                    className: eu,
                    onClick: g,
                    "data-testid": "devex-form-cancel-button",
                    children: Y("Action.Cancel")
                  }),
                  (0, t.jsx)(F.Button, {
                    type: "submit",
                    variant: "contained",
                    loading: S,
                    disabled: !(
                      !S &&
                      !Q(x) &&
                      T("agreeTOS") &&
                      (x.lastImbursementSubmissionDate || T("agreeInfo"))
                    ),
                    "aria-label": Y("Action.CashOut"),
                    "data-testid": "devex-form-submit-button",
                    children: Y("Action.CashOut")
                  })
                ]
              }),
              null !== E &&
                (0, t.jsx)(L.Grid, {
                  item: !0,
                  children: (0, t.jsx)(O.Typography, {
                    color: "error",
                    component: "p",
                    variant: "body1",
                    children: Y($[E] ? $[E] : "Message.GenericError")
                  })
                })
            ]
          })
        });
      };
    var ev = e.i(382058),
      ef = e.i(26168),
      ex = e.i(465805),
      eb = e.i(464782),
      eg = e.i(29929),
      ey = e.i(227700),
      eT = e.i(486736),
      eR = e.i(509927),
      ew = e.i(747934),
      eS = e.i(903420),
      eE = e.i(692734),
      eN = e.i(935606),
      eI = e.i(92174),
      eA = e.i(157310),
      ek = function (e, t) {
        return (ek =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
    function eD(e, t, n, a) {
      return new (n || (n = Promise))(function (r, i) {
        function o(e) {
          try {
            l(a.next(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          try {
            l(a.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function l(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value) instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })
              ).then(o, s);
        }
        l((a = a.apply(e, t || [])).next());
      });
    }
    function ej(e, t) {
      var n,
        a,
        r,
        i = {
          label: 0,
          sent: function () {
            if (1 & r[0]) throw r[1];
            return r[1];
          },
          trys: [],
          ops: []
        },
        o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
      return (
        (o.next = s(0)),
        (o.throw = s(1)),
        (o.return = s(2)),
        "function" == typeof Symbol &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
      function s(s) {
        return function (l) {
          var u = [s, l];
          if (n) throw TypeError("Generator is already executing.");
          for (; o && ((o = 0), u[0] && (i = 0)), i;)
            try {
              if (
                ((n = 1),
                a &&
                  (r =
                    2 & u[0]
                      ? a.return
                      : u[0]
                        ? a.throw || ((r = a.return) && r.call(a), 0)
                        : a.next) &&
                  !(r = r.call(a, u[1])).done)
              )
                return r;
              switch (((a = 0), r && (u = [2 & u[0], r.value]), u[0])) {
                case 0:
                case 1:
                  r = u;
                  break;
                case 4:
                  return (i.label++, { value: u[1], done: !1 });
                case 5:
                  (i.label++, (a = u[1]), (u = [0]));
                  continue;
                case 7:
                  ((u = i.ops.pop()), i.trys.pop());
                  continue;
                default:
                  if (
                    !(r = (r = i.trys).length > 0 && r[r.length - 1]) &&
                    (6 === u[0] || 2 === u[0])
                  ) {
                    i = 0;
                    continue;
                  }
                  if (3 === u[0] && (!r || (u[1] > r[0] && u[1] < r[3]))) {
                    i.label = u[1];
                    break;
                  }
                  if (6 === u[0] && i.label < r[1]) {
                    ((i.label = r[1]), (r = u));
                    break;
                  }
                  if (r && i.label < r[2]) {
                    ((i.label = r[2]), i.ops.push(u));
                    break;
                  }
                  (r[2] && i.ops.pop(), i.trys.pop());
                  continue;
              }
              u = t.call(e, i);
            } catch (e) {
              ((u = [6, e]), (a = 0));
            } finally {
              n = r = 0;
            }
          if (5 & u[0]) throw u[1];
          return { value: u[0] ? u[1] : void 0, done: !0 };
        };
      }
    }
    function eC(e, t) {
      return null == e ? e : { eligibleRobux: e.eligibleRobux, updatedUtc: new Date(e.updatedUtc) };
    }
    "function" == typeof SuppressedError && SuppressedError;
    let eP = new ((function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
              this.constructor = e;
            }
            (ek(e, t),
              (e.prototype =
                null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())));
          })(t, e),
          (t.prototype.creatorDevexGetDevexEligibleRobuxRaw = function (e) {
            return eD(this, void 0, void 0, function () {
              var t, n, a;
              return ej(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (t = {}),
                      (n = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/devexEligibleRobux",
                            schemaPath: "/v1/devexEligibleRobux",
                            method: "GET",
                            headers: n,
                            query: t
                          },
                          e
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = r.sent()),
                      [
                        2,
                        new h.JSONApiResponse(a, function (e) {
                          return eC(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.creatorDevexGetDevexEligibleRobux = function (e) {
            return eD(this, void 0, void 0, function () {
              return ej(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.creatorDevexGetDevexEligibleRobuxRaw(e)];
                  case 1:
                    return [4, t.sent().value()];
                  case 2:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (t.prototype.creatorDevexGetUserDevexEligibleRobuxRaw = function (e, t) {
            return eD(this, void 0, void 0, function () {
              var n, a, r;
              return ej(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (null === e.userId || void 0 === e.userId)
                      throw new h.RequiredError(
                        "userId",
                        "Required parameter requestParameters.userId was null or undefined when calling creatorDevexGetUserDevexEligibleRobux."
                      );
                    return (
                      (n = {}),
                      (a = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/devexEligibleRobux/{userId}".replace(
                              "{".concat("userId", "}"),
                              encodeURIComponent(String(e.userId))
                            ),
                            schemaPath: "/v1/devexEligibleRobux/{userId}",
                            method: "GET",
                            headers: a,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (r = i.sent()),
                      [
                        2,
                        new h.JSONApiResponse(r, function (e) {
                          return eC(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.creatorDevexGetUserDevexEligibleRobux = function (e, t) {
            return eD(this, void 0, void 0, function () {
              return ej(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.creatorDevexGetUserDevexEligibleRobuxRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          t
        );
      })(h.BaseAPI))((0, d.createClientConfiguration)("creator-devex-data-service", "bedev2")),
      e_ = async () => eP.creatorDevexGetDevexEligibleRobux(),
      eL = (0, ei.makeStyles)()((e) => ({
        root: {
          padding: "8px 16px",
          margin: "auto",
          width: "100%",
          background: e.palette.actionV2.secondary.fill,
          borderRadius: 5,
          justifyContent: "space-between",
          alignItems: "center"
        },
        leftContainer: { display: "flex", alignItems: "center", marginLeft: -8, marginTop: -8 },
        robuxAmount: { alignItems: "center", marginTop: 4, marginBottom: 4 },
        robuxAmountValueContainer: {
          display: "flex",
          flexDirection: "column",
          marginTop: 2,
          gap: 4
        },
        robuxAmountNumber: { lineHeight: "100%" },
        cashoutUsdAmountText: { fontWeight: 600, textAlign: "right", marginRight: 17 },
        iconBig: { fontSize: "1.75rem", marginRight: 8, alignSelf: "flex-start" },
        iconSmall: { fontSize: "1rem", marginLeft: 4, marginRight: 4 },
        iconLink: {
          lineHeight: 0,
          marginLeft: 8,
          marginTop: 4,
          color: e.palette.content.standard,
          textDecoration: "underline",
          alignSelf: "flex-start",
          "&:hover": { textDecoration: "underline" }
        },
        tooltip: { whiteSpace: "nowrap", maxWidth: "none" }
      }));
    var eO = e.i(291037);
    let eq = (0, ei.makeStyles)()((e) => ({
        paper: { borderRadius: 16, width: 640, maxWidth: 640 },
        closeButton: { position: "absolute", top: 16, right: 16, zIndex: 1 },
        sectionContainer: { marginTop: 19 },
        rateRow: { display: "flex", alignItems: "center", gap: 4, marginTop: 8 },
        tierContainer: { marginTop: 22 },
        rateInfoRow: { display: "flex", alignItems: "center", gap: 6, marginTop: 8 },
        infoIcon: { fontSize: "1rem" },
        footer: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          borderTop: "1px solid ".concat(e.palette.surface.outline),
          marginTop: 20,
          paddingTop: 16
        },
        footerLink: { color: "inherit", textDecoration: "underline" }
      })),
      eM = [
        { labelKey: "Label.StandardRateBeforeSept52025", fallbackLabel: "Before Sept 5, 2025" },
        { labelKey: "Label.StandardRateAfterSept52025", fallbackLabel: "After Sept 5, 2025" }
      ],
      eG = (e) => Math.round(1e4 * e),
      eU = (e) => "".concat((1e4).toLocaleString(), " = $").concat(e, " USD"),
      eB = (e) => {
        let { open: n, onClose: r, o18Rate: i, r35Rate: o, r38Rate: s, showO18: l = !1 } = e,
          { classes: u } = eq(),
          { translate: c } = (0, a.useTranslation)(),
          d = i ? eG(i) : 54,
          m = o ? eG(o) : 35,
          p = s ? eG(s) : 38,
          h = "$".concat((null != s ? s : 0.0038).toFixed(4));
        return (0, t.jsxs)(eO.Dialog, {
          open: n,
          onClose: r,
          maxWidth: !1,
          PaperProps: { className: u.paper },
          children: [
            (0, t.jsx)(ea.IconButton, {
              onClick: r,
              "aria-label": "Close",
              size: "small",
              color: "inherit",
              className: u.closeButton,
              children: (0, t.jsx)(en.CloseIcon, { color: "inherit" })
            }),
            (0, t.jsxs)("div", {
              className: "padding-large",
              children: [
                (0, t.jsx)(O.Typography, {
                  component: "h2",
                  className: "text-heading-small",
                  children: c("Heading.EarnedRates") || "DevEx rates"
                }),
                (0, t.jsx)(O.Typography, {
                  component: "p",
                  className: "text-body-medium",
                  children:
                    c("Description.EarnedRatesInfo") ||
                    "Your cash-out rates depend on how and when you earned your Robux."
                }),
                l &&
                  (0, t.jsxs)("div", {
                    className: u.sectionContainer,
                    children: [
                      (0, t.jsx)(O.Typography, {
                        component: "p",
                        className: "body-medium",
                        children: c("Label.US18Rate") || "US 18+ rate"
                      }),
                      (0, t.jsxs)("div", {
                        className: u.rateRow,
                        children: [
                          (0, t.jsx)(H.RobuxIcon, { fontSize: "large" }),
                          (0, t.jsx)(O.Typography, {
                            className: "text-title-large",
                            children: eU(d)
                          })
                        ]
                      })
                    ]
                  }),
                (0, t.jsxs)("div", {
                  className: u.sectionContainer,
                  children: [
                    (0, t.jsx)(O.Typography, {
                      className: "text-label-large",
                      children: c("Label.StandardRates") || "Standard rates"
                    }),
                    [
                      {
                        labelKey: eM[0].labelKey,
                        fallbackLabel: eM[0].fallbackLabel,
                        usdAmount: m
                      },
                      { labelKey: eM[1].labelKey, fallbackLabel: eM[1].fallbackLabel, usdAmount: p }
                    ].map((e, n) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className: u.tierContainer,
                          style: { marginTop: 0 === n ? 7 : 12 },
                          children: [
                            (0, t.jsx)(O.Typography, {
                              className: "text-body-medium",
                              children: c(e.labelKey) || e.fallbackLabel
                            }),
                            (0, t.jsxs)("div", {
                              className: u.rateRow,
                              style: { marginTop: 4 },
                              children: [
                                (0, t.jsx)(H.RobuxIcon, { fontSize: "large" }),
                                (0, t.jsx)(O.Typography, {
                                  className: "text-title-large",
                                  children: eU(e.usdAmount)
                                })
                              ]
                            }),
                            0 === n &&
                              (0, t.jsxs)("div", {
                                className: u.rateInfoRow,
                                children: [
                                  (0, t.jsx)(el.InfoOutlinedIcon, {
                                    color: "secondary",
                                    className: u.infoIcon,
                                    style: { position: "relative", top: -2 }
                                  }),
                                  (0, t.jsx)(O.Typography, {
                                    className: "text-body-small",
                                    children:
                                      c("Message.StandardRateCashoutOrder", { rate: h }) ||
                                      "This rate will be cashed out before the ".concat(h, " rate")
                                  })
                                ]
                              })
                          ]
                        },
                        e.labelKey
                      )
                    )
                  ]
                }),
                (0, t.jsxs)("div", {
                  className: u.footer,
                  children: [
                    (0, t.jsx)(el.InfoOutlinedIcon, { color: "secondary", className: u.infoIcon }),
                    (0, t.jsxs)(O.Typography, {
                      className: "text-body-small",
                      children: [
                        c("Message.EligibleRatesMayDiffer") ||
                          "Eligible rates may be different than your balance.",
                        " ",
                        (0, t.jsx)(V.Link, {
                          href: J.DEVEX_HELP_URL,
                          target: "_blank",
                          className: u.footerLink,
                          children: c("Action.LearnMore") || "Learn more"
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        });
      },
      eF = (0, ei.makeStyles)()((e) => ({
        root: {
          background: e.palette.background.default,
          borderRadius: "50%",
          marginRight: 16,
          position: "relative"
        },
        circle: { display: "block" },
        textContainer: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      })),
      eV = (e) => {
        let { progress: n, showRing: a } = e,
          {
            classes: { root: r, circle: i, textContainer: o }
          } = eF();
        return (0, t.jsxs)(L.Grid, {
          item: !0,
          className: r,
          children: [
            (0, t.jsx)(eN.CircularProgress, {
              value: a ? n : 0,
              variant: "determinate",
              size: 55,
              className: i,
              thickness: 2
            }),
            (0, t.jsx)(L.Grid, {
              item: !0,
              className: o,
              children: (0, t.jsx)(O.Typography, {
                variant: "overline",
                children: "".concat(n, "%")
              })
            })
          ]
        });
      },
      eH = (e) => {
        var r, i, o;
        let { userRobux: s, cashoutInfo: l, onCashoutClick: u } = e,
          {
            classes: {
              root: c,
              leftContainer: d,
              robuxAmount: m,
              robuxAmountValueContainer: p,
              robuxAmountNumber: h,
              cashoutUsdAmountText: v,
              iconBig: f,
              iconLink: x
            }
          } = eL(),
          { translate: b, translateHTML: g } = (0, a.useTranslation)(),
          { data: y, isSuccess: T } = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return (0, eA.useQuery)({
              queryKey: ["devex", "eligibleRobux"],
              queryFn: () => e_(),
              retry: 2,
              retryDelay: 0,
              ...e
            });
          })(),
          [R, w] = (0, n.useState)(),
          [S, E] = (0, n.useState)(!1),
          I = (0, n.useCallback)(() => E(!0), []),
          A = (0, n.useCallback)(() => E(!1), []);
        (0, n.useEffect)(() => {
          var e, t;
          if (!T) return () => {};
          let n = null != (e = null != (t = null == y ? void 0 : y.eligibleRobux) ? t : s) ? e : 0,
            a = !1;
          return (
            (async () => {
              try {
                let e = await N.v1EstimatedFiatGet({ robuxAmount: n }),
                  t = (0, Z.normalizeEstimatedFiatResponse)(e);
                a || w(t);
              } catch (e) {}
            })(),
            () => {
              a = !0;
            }
          );
        }, [s, y, T]);
        let { value: k } = (0, eE.useFlag)(eI.shouldUseWatermarkFiatCalculation),
          D = (() => {
            if (void 0 !== R) {
              if (k) {
                var e;
                let t = null != (e = null == y ? void 0 : y.eligibleRobux) ? e : 0,
                  n = (0, Z.allocateDevexWatermarkBuckets)(t, R),
                  a = (0, Z.resolveHeadlineUsdForRobuxAmount)(t, n);
                return String((0, _.numberFormatter)(a, "currency"));
              }
              return String((0, _.numberFormatter)(R.usdAmountMicro / 1e6, "currency"));
            }
          })(),
          j =
            (null == y ? void 0 : y.eligibleRobux) !== void 0
              ? Math.min(
                  Math.floor(
                    (100 * y.eligibleRobux) /
                      (null != (r = null == l ? void 0 : l.minRobuxToCashOut) ? r : 3e4)
                  ),
                  100
                )
              : void 0;
        return (0, t.jsxs)(L.Grid, {
          className: c,
          container: !0,
          spacing: 1,
          "data-testid": "devex-cash-out-box",
          children: [
            (0, t.jsxs)(L.Grid, {
              item: !0,
              className: d,
              children: [
                (0, t.jsx)(eV, {
                  progress: null != (i = null != j ? j : l.percentRobux) ? i : 0,
                  showRing:
                    null !=
                      (o =
                        l.emailIsVerified &&
                        "Completed" !== l.lastImbursementStatus &&
                        !l.isImbursementBlacklistUser &&
                        !(100 === l.percentRobux && !l.canProceedToCashout)) && o
                }),
                (0, t.jsxs)(L.Grid, {
                  item: !0,
                  container: !0,
                  direction: "column",
                  children: [
                    (0, t.jsx)(O.Typography, {
                      variant: "body1",
                      color: "secondary",
                      children:
                        !0 === l.isDevExSuspended
                          ? b("Message.DevExSuspendedStatus")
                          : l.canProceedToCashout && (void 0 === j || 100 === j)
                            ? b("Message.CashOutEligible")
                            : "Completed" === l.lastImbursementStatus
                              ? b("Message.CashOutRecentRequestV2")
                              : l.emailIsVerified
                                ? b(
                                    l.isImbursementBlacklistUser
                                      ? "Message.CashoutIneligibleV2"
                                      : (void 0 !== l.percentRobux && l.percentRobux < 100) ||
                                          (void 0 !== j && j < 100)
                                        ? "Message.CashOutInsufficientBalance"
                                        : "Message.CashoutIneligibleV2"
                                  )
                                : g("Message.MissingEmail2FA", [
                                    {
                                      opening: "settingsLinkStart",
                                      closing: "settingsLinkEnd",
                                      content: (e) =>
                                        (0, t.jsx)(V.Link, {
                                          href: J.SETTINGS_URL,
                                          target: "_blank",
                                          children: e
                                        })
                                    }
                                  ])
                    }),
                    (0, t.jsxs)(L.Grid, {
                      item: !0,
                      container: !0,
                      className: m,
                      children: [
                        (0, t.jsx)(H.RobuxIcon, { className: f }),
                        (0, t.jsx)(L.Grid, {
                          item: !0,
                          className: p,
                          children: T
                            ? (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(O.Typography, {
                                    variant: "h3",
                                    color: "primary",
                                    className: h,
                                    children: g("Label.RobuxEligible", [
                                      {
                                        opening: "robuxStart",
                                        closing: "robuxEnd",
                                        content: () => {
                                          var e;
                                          return (
                                            null != (e = null == y ? void 0 : y.eligibleRobux)
                                              ? e
                                              : 0
                                          ).toLocaleString();
                                        }
                                      }
                                    ])
                                  }),
                                  void 0 !== D &&
                                    (0, t.jsx)(O.Typography, { className: v, children: D })
                                ]
                              })
                            : (0, t.jsx)(eN.CircularProgress, {
                                size: 28,
                                "data-testid": "devex-eligible-robux-loading"
                              })
                        }),
                        (0, t.jsx)(V.Link, {
                          component: "button",
                          onClick: I,
                          className: x,
                          children: (0, t.jsx)(O.Typography, {
                            color: "inherit",
                            variant: "caption",
                            children: b("Label.ViewRates")
                          })
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, t.jsx)(L.Grid, {
              item: !0,
              XSmall: 12,
              Medium: "auto",
              children: (0, t.jsx)(F.Button, {
                fullWidth: !0,
                variant: "contained",
                color: "primaryBrand",
                onClick: u,
                disabled: !l.canProceedToCashout || Q(l),
                "data-testid": "devex-form-open-button",
                children: b("Action.CashOut")
              })
            }),
            (0, t.jsx)(eB, {
              open: S,
              onClose: A,
              o18Rate: null == R ? void 0 : R.effectiveO18ToUsdRate,
              r35Rate: null == R ? void 0 : R.robuxAt35ToUsdRate,
              r38Rate: null == R ? void 0 : R.robuxAt38ToUsdRate,
              showO18: null == R ? void 0 : R.shouldDisplayEffectiveO18Robux
            })
          ]
        });
      },
      eW = (0, ei.makeStyles)()(() => ({
        root: { width: "100%", flexDirection: "column" },
        cashOutBoxContainer: { marginTop: 24, marginBottom: 24 },
        marginBottom: { marginBottom: 16 },
        bulletListIcon: { minWidth: 0, marginRight: 8 },
        bulletListItem: { paddingLeft: 0 }
      }));
    var ez = e.i(888379),
      eX = e.i(562146),
      eK = e.i(401263),
      eJ = e.i(730530),
      eY = e.i(823062),
      eQ = e.i(511622);
    let eZ = (e) => {
      let { statusVariant: r = "notStarted" } = e,
        { ready: i, tPendingTranslation: o } = (0, eK.default)((0, a.useTranslation)()),
        { unifiedLogger: s } = (0, eY.useUnifiedLoggerProvider)(),
        l = "curingRequired" === r,
        u = "failed" === r,
        c = (0, eQ.mapTaxDocumentationStatusToTelemetryStatus)(r),
        d = (0, n.useCallback)(() => {
          (0, eQ.logDevExTaxHubEntryClick)(s, { action: "start", taxStatus: c });
        }, [c, s]),
        m = (0, n.useCallback)(() => {
          (0, eQ.logDevExTaxHubEntryClick)(s, { action: "view", taxStatus: c });
        }, [c, s]),
        p = o(
          "Action Required: Complete your tax information by October to reduce withholding.",
          "Warning banner title prompting DevEx users to complete tax information by October to reduce withholding.",
          (0, eJ.translationKey)(
            "Banner.TaxDocumentation.Title",
            C.TranslationNamespace.TaxDocumentation
          )
        ),
        h = o(
          "Starting November 1st, Roblox will be required by the IRS to withhold US taxes from payments to creators. Complete your tax documentation in the Creator Hub to reduce withholding rates.",
          "Warning banner message explaining why DevEx users need to complete tax documentation to reduce withholding rates.",
          (0, eJ.translationKey)(
            "Banner.TaxDocumentation.Description",
            C.TranslationNamespace.TaxDocumentation
          )
        ),
        v = o(
          "Action Required: Submit additional documents to complete your tax information.",
          "Warning banner title prompting DevEx users to submit additional tax documents.",
          (0, eJ.translationKey)(
            "Banner.TaxDocumentation.AdditionalInfoNeededTitle",
            C.TranslationNamespace.TaxDocumentation
          )
        ),
        f = o(
          "Submit the required information to ensure Roblox applies the correct U.S. withholding tax rate on DevEx payments.",
          "Warning banner message prompting DevEx users to submit required tax information for the correct withholding rate.",
          (0, eJ.translationKey)(
            "Banner.TaxDocumentation.AdditionalInfoNeededDescription",
            C.TranslationNamespace.TaxDocumentation
          )
        ),
        x = o(
          "Action Required: We couldn't validate your tax information.",
          "Error banner title shown when DevEx tax information validation fails.",
          (0, eJ.translationKey)(
            "Banner.TaxDocumentation.FailedTitle",
            C.TranslationNamespace.TaxDocumentation
          )
        ),
        b = o(
          "Submit new tax information to ensure Roblox applies the correct U.S. withholding tax rate on DevEx payments.",
          "Error banner message prompting DevEx users to submit new tax information for the correct withholding rate.",
          (0, eJ.translationKey)(
            "Banner.TaxDocumentation.FailedDescription",
            C.TranslationNamespace.TaxDocumentation
          )
        ),
        g = o(
          "Get started",
          "Primary action button label for starting DevEx tax documentation.",
          (0, eJ.translationKey)(
            "Action.TaxDocumentation.GetStarted",
            C.TranslationNamespace.TaxDocumentation
          )
        ),
        y = o(
          "Learn more",
          "Tertiary action button label for learning more about DevEx tax documentation.",
          (0, eJ.translationKey)(
            "Action.TaxDocumentation.LearnMore",
            C.TranslationNamespace.TaxDocumentation
          )
        ),
        T = o(
          "View Taxes",
          "Primary action button label for viewing DevEx tax status.",
          (0, eJ.translationKey)(
            "Action.TaxDocumentation.ViewTaxesV2",
            C.TranslationNamespace.TaxDocumentation
          )
        );
      return i
        ? (0, t.jsx)(eX.FeedbackBanner, {
            severity: u ? "Error" : "Warning",
            variant: "Emphasis",
            layout: "Stacked",
            title: u ? x : l ? v : p,
            description: (0, t.jsx)("span", {
              className: "block",
              style: { maxWidth: 440 },
              children: u ? b : l ? f : h
            }),
            actions: (0, t.jsxs)("div", {
              className: "flex wrap items-center gap-small",
              children: [
                !(l || u) &&
                  (0, t.jsx)(ez.Button, {
                    as: "a",
                    href: "/dashboard/devex/taxes/taxsubmission",
                    variant: "SoftEmphasis",
                    size: "Small",
                    onClick: d,
                    children: g
                  }),
                (0, t.jsx)(ez.Button, {
                  as: "a",
                  href: "/dashboard/devex/taxes",
                  variant: "Standard",
                  size: "Small",
                  onClick: m,
                  children: T
                }),
                (0, t.jsx)(ez.Button, {
                  as: "a",
                  href: J.DEVEX_TAX_HELP_URL,
                  target: "_blank",
                  rel: "noreferrer",
                  variant: "Utility",
                  size: "Small",
                  children: y
                })
              ]
            })
          })
        : null;
    };
    var e$ = e.i(326684),
      e0 = e.i(333220),
      e1 = e.i(529390);
    let e2 = (0, ei.makeStyles)()((e) => ({
        icon: { marginRight: 4 },
        successIcon: { color: e.palette.success.main }
      })),
      e4 = (e) => {
        let { lastImbursementStatus: n, lastImbursementSubmissionDate: r } = e,
          {
            classes: { icon: i, successIcon: o }
          } = e2(),
          { translate: s, translateHTML: l } = (0, a.useTranslation)();
        return n && r
          ? "Pending" === n
            ? (0, t.jsxs)(L.Grid, {
                item: !0,
                container: !0,
                alignItems: "center",
                children: [
                  (0, t.jsx)(e$.ScheduleIcon, {
                    fontSize: "small",
                    color: "secondary",
                    className: i
                  }),
                  (0, t.jsx)(O.Typography, {
                    variant: "body1",
                    color: "secondary",
                    children: s("Message.StatusPendingV2", {
                      submissionDate: (0, _.getFormattedDate)(r)
                    })
                  })
                ]
              })
            : "Completed" === n
              ? (0, t.jsxs)(L.Grid, {
                  item: !0,
                  container: !0,
                  alignItems: "center",
                  children: [
                    (0, t.jsx)(e1.CheckCircleOutlineIcon, {
                      fontSize: "small",
                      className: [i, o].join(" ")
                    }),
                    (0, t.jsx)(O.Typography, {
                      variant: "body1",
                      color: "secondary",
                      children: l(
                        "Message.StatusCompleteV2",
                        [
                          {
                            opening: "transactionsLinkStart",
                            closing: "transactionsLinkEnd",
                            content: (e) =>
                              (0, t.jsx)(V.Link, {
                                href: J.TRANSACTIONS_URL,
                                target: "_blank",
                                children: e
                              })
                          }
                        ],
                        { submissionDate: (0, _.getFormattedDate)(r) }
                      )
                    })
                  ]
                })
              : "Rejected" === n
                ? (0, t.jsxs)(L.Grid, {
                    item: !0,
                    container: !0,
                    alignItems: "center",
                    children: [
                      (0, t.jsx)(e0.HighlightOffIcon, {
                        fontSize: "small",
                        color: "error",
                        className: i
                      }),
                      (0, t.jsx)(O.Typography, {
                        variant: "body1",
                        color: "secondary",
                        children: l(
                          "Message.StatusRejectedV2",
                          [
                            {
                              opening: "messagesLinkStart",
                              closing: "messagesLinkEnd",
                              content: (e) =>
                                (0, t.jsx)(V.Link, {
                                  href: J.MESSAGES_URL,
                                  target: "_blank",
                                  children: e
                                })
                            }
                          ],
                          { submissionDate: (0, _.getFormattedDate)(r) }
                        )
                      })
                    ]
                  })
                : null
          : null;
      },
      e8 = (e) => {
        var n, r, i, o;
        let { cashoutInfo: s, userRobux: l, onCashoutClick: u } = e,
          {
            classes: {
              root: c,
              cashOutBoxContainer: d,
              marginBottom: m,
              bulletListIcon: p,
              bulletListItem: h
            }
          } = eW(),
          { translate: v, translateHTML: f } = (0, a.useTranslation)(),
          { locale: x } = (0, a.useLocalization)(),
          { isFetched: b, params: g } = (0, ey.useIXPParameters)(eg.IXPLayers.CreatorDashboard),
          { isFetched: y, settings: T } = (0, eT.useSettings)(),
          { canAccessTaxDocumentation: R } = (0, eR.useTaxDocumentationAccess)(),
          { data: w } = (0, ew.useGetTaxOnboardingStatus)({ enabled: R }),
          S = (0, eS.resolveTaxDocumentationStatusVariant)(null == w ? void 0 : w.onboardingStatus),
          E = "notStarted" === S || "curingRequired" === S || "failed" === S ? S : void 0,
          N = R && (null == w ? void 0 : w.onboardingStatus) !== void 0 && void 0 !== E;
        return (0, t.jsxs)(L.Grid, {
          className: c,
          container: !0,
          spacing: 2,
          children: [
            N && (0, t.jsx)(L.Grid, { item: !0, children: (0, t.jsx)(eZ, { statusVariant: E }) }),
            y &&
              T.enableDevexMaintenanceBanner &&
              (0, t.jsx)(L.Grid, {
                item: !0,
                children: (0, t.jsx)(et.Alert, {
                  severity: "info",
                  variant: "standard",
                  children: v("Message.DevexMaintenance")
                })
              }),
            !0 !== s.isDevExSuspended &&
              (0, t.jsx)(e4, {
                lastImbursementStatus: s.lastImbursementStatus,
                lastImbursementSubmissionDate: s.lastImbursementSubmissionDate
              }),
            (0, t.jsxs)(L.Grid, {
              item: !0,
              className: d,
              children: [
                (0, t.jsx)(eH, { userRobux: l, cashoutInfo: s, onCashoutClick: u }),
                b &&
                  (null == g ? void 0 : g.enableDevexEarnedRobux) &&
                  (0, t.jsx)(O.Typography, {
                    color: "secondary",
                    component: "p",
                    variant: "caption",
                    children: v("Description.EarnedFundsAsterisk")
                  })
              ]
            }),
            (0, t.jsx)(L.Grid, {
              item: !0,
              className: m,
              children: (0, t.jsx)(O.Typography, {
                color: "secondary",
                component: "p",
                variant: "body1",
                children: f(
                  b && (null == g ? void 0 : g.enableDevexEarnedRobux)
                    ? "Description.DevExInfoV2"
                    : "Description.DevExInfo",
                  null,
                  {
                    lineBreak: (0, t.jsx)("br", {}),
                    minCashoutValue:
                      null != (n = null == (i = s.minRobuxToCashOut) ? void 0 : i.toLocaleString())
                        ? n
                        : "Undefined"
                  }
                )
              })
            }),
            (0, t.jsx)(L.Grid, {
              item: !0,
              children: (0, t.jsx)(O.Typography, {
                color: "secondary",
                component: "p",
                variant: "body1",
                children: v("Description.TermsAndRequirements")
              })
            }),
            (0, t.jsx)(L.Grid, {
              item: !0,
              children: (0, t.jsxs)(ev.List, {
                children: [
                  (0, t.jsxs)(ef.ListItem, {
                    className: h,
                    children: [
                      (0, t.jsx)(ex.ListItemIcon, {
                        className: p,
                        children: (0, t.jsx)(eb.CheckIcon, { fontSize: "small" })
                      }),
                      (0, t.jsx)(O.Typography, {
                        color: "secondary",
                        variant: "body1",
                        children: v("Label.BalanceRequirementV2", {
                          minCashoutValue:
                            null !=
                            (r = null == (o = s.minRobuxToCashOut) ? void 0 : o.toLocaleString())
                              ? r
                              : "Undefined"
                        })
                      })
                    ]
                  }),
                  (0, t.jsxs)(ef.ListItem, {
                    className: h,
                    children: [
                      (0, t.jsx)(ex.ListItemIcon, {
                        className: p,
                        children: (0, t.jsx)(eb.CheckIcon, { fontSize: "small" })
                      }),
                      (0, t.jsx)(O.Typography, {
                        color: "secondary",
                        variant: "body1",
                        children: v("Label.Email2FARequirement")
                      })
                    ]
                  }),
                  (0, t.jsxs)(ef.ListItem, {
                    className: h,
                    children: [
                      (0, t.jsx)(ex.ListItemIcon, {
                        className: p,
                        children: (0, t.jsx)(eb.CheckIcon, { fontSize: "small" })
                      }),
                      (0, t.jsx)(O.Typography, {
                        color: "secondary",
                        variant: "body1",
                        children: v("Label.DevExPortalRequirement")
                      })
                    ]
                  }),
                  (0, t.jsxs)(ef.ListItem, {
                    className: h,
                    children: [
                      (0, t.jsx)(ex.ListItemIcon, {
                        className: p,
                        children: (0, t.jsx)(eb.CheckIcon, { fontSize: "small" })
                      }),
                      (0, t.jsx)(O.Typography, {
                        color: "secondary",
                        variant: "body1",
                        children: v("Label.AgeRequirementV2", { minAge: "13" })
                      })
                    ]
                  }),
                  (0, t.jsxs)(ef.ListItem, {
                    className: h,
                    children: [
                      (0, t.jsx)(ex.ListItemIcon, {
                        className: p,
                        children: (0, t.jsx)(eb.CheckIcon, { fontSize: "small" })
                      }),
                      (0, t.jsx)(O.Typography, {
                        color: "secondary",
                        variant: "body1",
                        children: f("Label.CommunityRequirement", [
                          {
                            opening: "TOSLinkStart",
                            closing: "TOSLinkEnd",
                            content: (e) =>
                              (0, t.jsx)(V.Link, {
                                href: (0, J.getRobloxTermsURL)(x),
                                target: "_blank",
                                children: e
                              })
                          }
                        ])
                      })
                    ]
                  })
                ]
              })
            }),
            (0, t.jsx)(L.Grid, {
              item: !0,
              className: m,
              children: (0, t.jsx)(O.Typography, {
                color: "secondary",
                component: "p",
                variant: "body1",
                children: v("Description.CashOutProcess")
              })
            }),
            (0, t.jsx)(L.Grid, {
              item: !0,
              className: m,
              children: (0, t.jsx)(V.Link, {
                href: (0, J.getDevexInfoURL)(x),
                target: "_blank",
                children: (0, t.jsx)(O.Typography, {
                  color: "inherit",
                  variant: "body1",
                  children: v("Label.MoreInfo")
                })
              })
            }),
            (0, t.jsx)(L.Grid, {
              item: !0,
              className: m,
              children: (0, t.jsx)(V.Link, {
                href: (0, J.getDevexTermsURL)(x),
                target: "_blank",
                children: (0, t.jsx)(O.Typography, {
                  color: "inherit",
                  variant: "body1",
                  children: v("Label.TermsOfService")
                })
              })
            })
          ]
        });
      };
    function e3(e, t) {
      let n = Math.max((e.getTime() - Date.now()) / 1e3, 0);
      if (n <= 0) return;
      let a = 60 * Math.ceil(n / 60);
      if (a >= 86400) {
        let e = Math.ceil(a / 86400);
        return 1 === e
          ? t("Label.TimeLeft.Day.Singular")
          : t("Label.TimeLeft.Day.Plural", { number: String(e) });
      }
      let r = Math.floor(a / 3600),
        i = Math.floor((a % 3600) / 60),
        o = String(r).padStart(2, "0"),
        s = String(i).padStart(2, "0");
      return t("Label.TimeLeft.Hours", { time: "".concat(o, ":").concat(s) });
    }
    async function e5(e) {
      if (!(null == e ? void 0 : e.interventionId) || !e.acknowledgeable) return !1;
      try {
        return (await p.dismissIntervention(e.interventionId), !0);
      } catch (e) {
        return !1;
      }
    }
    let e7 = function (e) {
      let {
          enabled: t,
          fetchKey: a,
          pageLoadIntervention: r = null,
          isPageLoadInterventionReady: i = !0
        } = e,
        [o, s] = (0, n.useState)(null),
        [l, u] = (0, n.useState)(t),
        c = (0, n.useRef)(null),
        d = (0, n.useRef)(r);
      return (
        (d.current = r),
        (0, n.useEffect)(() => {
          if (!t) {
            (s(null), u(!1), (c.current = null));
            return;
          }
          if (!i) return void u(!0);
          let e = (null == r ? void 0 : r.interventionId) ? r : null;
          if (null === c.current && e) {
            (s(e), (c.current = a), u(!1));
            return;
          }
          if (c.current === a) {
            (e && s((t) => ((null == t ? void 0 : t.interventionId) ? t : e)), u(!1));
            return;
          }
          let n = !0;
          return (
            u(!0),
            p
              .getDevExIntervention()
              .then((e) => {
                n &&
                  (s((t) => {
                    var n, a;
                    let r =
                      ((a = null != (n = d.current) ? n : null),
                      (null == e ? void 0 : e.interventionId)
                        ? e
                        : (null == a ? void 0 : a.interventionId)
                          ? a
                          : e);
                    return !(null == r ? void 0 : r.interventionId) &&
                      (null == t ? void 0 : t.interventionId)
                      ? t
                      : r;
                  }),
                  (c.current = a));
              })
              .catch(() => {
                var e;
                n &&
                  (s((null == (e = d.current) ? void 0 : e.interventionId) ? d.current : null),
                  (c.current = a));
              })
              .finally(() => {
                n && u(!1);
              }),
            () => {
              n = !1;
            }
          );
        }, [t, a, i, r]),
        {
          intervention: o,
          isInterventionLoading: l,
          dismissIntervention: (0, n.useCallback)((e) => e5(e), [])
        }
      );
    };
    var e6 = e.i(388506),
      e9 = e.i(253536);
    let te = [
        {
          opening: "appealLinkStart",
          closing: "appealLinkEnd",
          content: (e) =>
            (0, t.jsx)(e6.Link, {
              href: J.DEVEX_APPEAL_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              isExternal: !1,
              children: e
            })
        }
      ],
      tt = function (e) {
        let { translate: t } = (0, a.useTranslation)(),
          r = (function (e) {
            if (null == e) return;
            let t = e instanceof Date ? e : new Date(e);
            return Number.isNaN(t.getTime()) ? void 0 : t;
          })(e),
          i = null == r ? void 0 : r.getTime(),
          [o, s] = (0, n.useState)(() => Date.now()),
          l = (0, n.useMemo)(() => {
            if (void 0 !== i) return (0, _.getFormattedDateTime)(new Date(i));
          }, [i]),
          u = (0, n.useMemo)(() => {
            if (void 0 !== i && !(i <= o)) return e3(new Date(i), t);
          }, [i, o, t]);
        return (
          (0, n.useEffect)(() => {
            if (void 0 === i || i <= Date.now()) return;
            let e = setInterval(() => {
              s(Date.now());
            }, 1e3);
            return () => {
              clearInterval(e);
            };
          }, [i]),
          { formattedEndDate: l, countdownText: u }
        );
      },
      tn = (e) => {
        let { label: n, value: a } = e;
        return (0, t.jsxs)("div", {
          className: "flex flex-col gap-xxsmall",
          children: [
            (0, t.jsxs)("span", {
              className: "text-title-medium content-emphasis margin-none",
              children: [n, ":"]
            }),
            (0, t.jsx)("p", {
              className: "text-body-medium content-default margin-none",
              children: a
            })
          ]
        });
      },
      ta = (e) => {
        let { label: n } = e;
        return (0, t.jsx)("span", {
          className:
            "text-caption-medium content-default padding-x-small padding-y-xxsmall radius-circle bg-shift-200 [white-space:nowrap]",
          children: n
        });
      },
      tr = (e) => {
        let { violationReason: n, formattedEndDate: r, countdownText: i } = e,
          { translate: o } = (0, a.useTranslation)();
        if (!n && !r) return null;
        let s = o("Label.Reason"),
          l = o("Label.EndsOn"),
          u = null != i ? i : o("Label.Complete");
        return (0, t.jsxs)("div", {
          "data-testid": "devex-intervention-details-card",
          className:
            "flex flex-col gap-large padding-y-large padding-x-medium radius-large stroke-default stroke-standard bg-shift-100",
          children: [
            n ? (0, t.jsx)(tn, { label: s, value: n }) : null,
            r
              ? (0, t.jsxs)("div", {
                  className: "flex flex-row justify-between items-center gap-medium",
                  children: [(0, t.jsx)(tn, { label: l, value: r }), (0, t.jsx)(ta, { label: u })]
                })
              : null
          ]
        });
      };
    var ti = e.i(287184);
    let to = (e) => {
        e.preventDefault();
      },
      ts = (e) => {
        let {
            testId: r,
            title: i,
            body: o,
            appealUrl: s,
            onClose: l,
            detailsCard: u,
            dsaMessage: c,
            showAppealPrompt: d = !0,
            confirmDisabled: m = !1,
            confirmLoading: p = !1
          } = e,
          { translate: h, translateHTML: v } = (0, a.useTranslation)(),
          f = h("Action.Continue"),
          x = h("Message.AutomatedModerationDisclosure"),
          b = "string" == typeof c && c.trim().length > 0 ? c : x,
          g = (0, n.useCallback)(() => {
            m || p || l();
          }, [m, p, l]);
        return (0, t.jsx)(ti.Dialog, {
          open: !0,
          isModal: !0,
          size: "Medium",
          hasCloseAffordance: !1,
          children: (0, t.jsx)(ti.DialogContent, {
            className: "width-full",
            "data-testid": r,
            onOpenAutoFocus: to,
            children: (0, t.jsxs)(ti.DialogBody, {
              className: "flex flex-col gap-medium",
              children: [
                (0, t.jsx)(ti.DialogTitle, {
                  className: "text-heading-small margin-none padding-none",
                  children: i
                }),
                (0, t.jsx)("p", {
                  className: "text-body-medium content-muted margin-none",
                  children: o
                }),
                u,
                d
                  ? (0, t.jsx)("p", {
                      className: "text-body-small content-muted margin-none",
                      children: v("Description.DidWeMakeAMistake", [
                        {
                          opening: "linkStart",
                          closing: "linkEnd",
                          content: (e) =>
                            (0, t.jsx)(e6.Link, {
                              href: s,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              isExternal: !1,
                              children: e
                            })
                        }
                      ])
                    })
                  : null,
                (0, t.jsx)(ez.Button, {
                  variant: "Emphasis",
                  size: "Medium",
                  className: "width-full",
                  isDisabled: m || p,
                  isLoading: p,
                  onClick: g,
                  children: f
                }),
                (0, t.jsx)("p", {
                  className: "text-caption-medium content-muted margin-none",
                  children: b
                })
              ]
            })
          })
        });
      },
      tl = (e) => {
        let { intervention: n, onClose: r, confirmDisabled: i, confirmLoading: o } = e,
          { title: s, body: l } = (function () {
            let { translate: e, translateHTML: n } = (0, a.useTranslation)(),
              { locale: r } = (0, a.useLocalization)();
            return {
              title: e("Heading.DevExAtRiskTitle"),
              body: n("Message.DevExAtRiskBody", [
                {
                  opening: "devexTermsLinkStart",
                  closing: "devexTermsLinkEnd",
                  content: (e) =>
                    (0, t.jsx)(e6.Link, {
                      href: (0, J.getDevexTermsURL)(r),
                      target: "_blank",
                      rel: "noopener noreferrer",
                      isExternal: !1,
                      children: e
                    })
                },
                {
                  opening: "communityStandardsLinkStart",
                  closing: "communityStandardsLinkEnd",
                  content: (e) =>
                    (0, t.jsx)(e6.Link, {
                      href: e9.ROBLOX_COMMUNITY_STANDARDS,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      isExternal: !1,
                      children: e
                    })
                }
              ])
            };
          })();
        return (0, t.jsx)(ts, {
          testId: "devex-at-risk-dialog",
          title: s,
          body: l,
          appealUrl: J.DEVEX_APPEAL_URL,
          onClose: r,
          dsaMessage: null == n ? void 0 : n.consequenceTransparencyMessage,
          confirmDisabled: i,
          confirmLoading: o
        });
      },
      tu = (e) => {
        var n;
        let {
            cashoutInfo: r,
            intervention: i,
            onClose: o,
            confirmDisabled: s,
            confirmLoading: l
          } = e,
          { translate: u } = (0, a.useTranslation)(),
          {
            title: c,
            body: d,
            hasLiftDate: m
          } = (function (e, t) {
            var n, r, i;
            let o,
              { translate: s, translateHTML: l } = (0, a.useTranslation)(),
              u = null != (n = Y(e)) ? n : t ? new Date(t) : void 0,
              c = void 0 !== u && !Number.isNaN(u.getTime()),
              d = s("Heading.DevExSuspendedTitle");
            if (!c)
              return {
                title: d,
                body: l("Message.DevExSuspendedBodyPermanent", [...te]),
                hasLiftDate: !1
              };
            return {
              title: d,
              body: l("Message.DevExSuspendedBody", [...te], {
                liftDateRelative:
                  ((r = u),
                  (i = s),
                  1 === (o = Math.max(Math.ceil((r.getTime() - Date.now()) / 864e5), 1))
                    ? i("Label.Duration.OneDay")
                    : i("Label.Duration.Days", { number: String(o) })),
                liftDateFormatted: (0, _.getFormattedDate)(u)
              }),
              hasLiftDate: !0
            };
          })(r, null == i ? void 0 : i.endDate),
          p = m
            ? null != (n = Y(r))
              ? n
              : (null == i ? void 0 : i.endDate)
                ? new Date(i.endDate)
                : void 0
            : void 0,
          { formattedEndDate: h, countdownText: v } = tt(p),
          f = (function (e, t) {
            if (!(null == e ? void 0 : e.length)) return;
            let n = e
              .map((e) => e.labelTranslationKey)
              .filter((e) => !!e)
              .map((e) => t(e));
            if (0 !== n.length) return n.join(", ");
          })(null == i ? void 0 : i.badUtterances, u);
        return (0, t.jsx)(ts, {
          testId: "devex-suspension-dialog",
          title: c,
          body: d,
          appealUrl: J.DEVEX_APPEAL_URL,
          onClose: o,
          showAppealPrompt: !1,
          confirmDisabled: s,
          confirmLoading: l,
          dsaMessage: null == i ? void 0 : i.consequenceTransparencyMessage,
          detailsCard:
            f || p
              ? (0, t.jsx)(tr, {
                  violationReason: f,
                  formattedEndDate: p ? h : void 0,
                  countdownText: p ? (null != v ? v : e3(p, u)) : void 0
                })
              : void 0
        });
      },
      tc = (0, a.withTranslation)(
        (e) => {
          var a;
          let {
              cashoutInfo: r,
              onModerationDismissed: i,
              pageLoadIntervention: o,
              isPageLoadInterventionReady: s = !0
            } = e,
            l = !0 === r.isAtRiskOfSuspension,
            u = !0 === r.isDevExSuspended && !0 !== r.isAtRiskOfSuspension,
            [c, d] = (0, n.useState)(!1),
            [m, p] = (0, n.useState)(!1),
            [h, v] = (0, n.useState)(!1),
            [f, x] = (0, n.useState)(l),
            [b, g] = (0, n.useState)(u);
          (l !== f && (x(l), l && !m && p(!1)), u !== b && (g(u), u && !c && d(!1)));
          let y = l && !m ? "at-risk" : u && !c ? "suspension" : null,
            {
              intervention: T,
              isInterventionLoading: R,
              dismissIntervention: w
            } = e7({
              enabled: null !== y,
              fetchKey: null != y ? y : "none",
              pageLoadIntervention: o,
              isPageLoadInterventionReady: s
            }),
            S =
              ((a = null != o ? o : null),
              (null == T ? void 0 : T.interventionId)
                ? T
                : (null == a ? void 0 : a.interventionId)
                  ? a
                  : null != T
                    ? T
                    : a),
            E = (null == S ? void 0 : S.acknowledgeable) === !0 && !!S.interventionId,
            N = R && !(null == S ? void 0 : S.interventionId),
            I =
              h ||
              ("at-risk" === y && !(null == S ? void 0 : S.interventionId)) ||
              ("suspension" === y && E && N),
            A = h || N,
            k = async () => {
              v(!0);
              try {
                if (E && !(await w(S))) return;
                (d(!0), await (null == i ? void 0 : i("suspension")));
              } finally {
                v(!1);
              }
            },
            D = async () => {
              v(!0);
              try {
                if (!(await w(S))) return;
                (p(!0), await (null == i ? void 0 : i("at-risk")));
              } finally {
                v(!1);
              }
            };
          return l && !m
            ? (0, t.jsx)(tl, { intervention: S, onClose: D, confirmDisabled: I, confirmLoading: A })
            : u && !c
              ? (0, t.jsx)(tu, {
                  cashoutInfo: r,
                  intervention: S,
                  onClose: k,
                  confirmDisabled: I,
                  confirmLoading: A
                })
              : null;
        },
        [C.TranslationNamespace.DevEx, C.TranslationNamespace.NotApproved]
      ),
      td = (0, a.withTranslation)(() => {
        let { reload: e } = (0, i.useRouter)(),
          [r, u] = (0, n.useState)(!1),
          { user: c } = (0, l.useAuthentication)(),
          [d, m] = (0, n.useState)(),
          [h, v] = (0, n.useState)(),
          [f, x] = (0, n.useState)(!1),
          [b, g] = (0, n.useState)(!1),
          [y, T] = (0, n.useState)(void 0),
          { enqueue: R } = (0, s.useSnackbar)(),
          { translate: w, ready: S } = (0, a.useTranslation)(),
          E = async (e) => {
            (A.default.logClickEvent({ eventName: "clickSubmitCashoutRequest" }),
              await N.v1DeveloperExchangeRequestPost(e),
              u(!1),
              v(void 0),
              T(void 0),
              g(!0));
          },
          C = (0, n.useCallback)(async () => {
            if (null == c ? void 0 : c.id)
              try {
                return await I.default.getDeveloperExchangeInfo(!0);
              } catch (e) {
                return;
              }
          }, [null == c ? void 0 : c.id]),
          P = (0, n.useCallback)(
            async (e) => {
              "at-risk" === e &&
                v((e) =>
                  e && !0 === e.isAtRiskOfSuspension
                    ? {
                        ...e,
                        isAtRiskOfSuspension: !1,
                        isDevExSuspended: !1,
                        canProceedToCashout: !0
                      }
                    : e
                );
              let t = await C();
              if ("at-risk" === e) {
                ((null == t ? void 0 : t.isAtRiskOfSuspension) === !0 &&
                  (await new Promise((e) => {
                    setTimeout(e, 750);
                  }),
                  (t = await C())),
                  t && !0 !== t.isAtRiskOfSuspension && v(t));
                return;
              }
              t && v(t);
            },
            [C]
          );
        return ((0, n.useEffect)(() => {
          if (!(null == c ? void 0 : c.id) || h) return;
          let e = !0;
          return (
            p
              .getDevExIntervention()
              .then((t) => {
                e && T(t);
              })
              .catch(() => {
                e && T(null);
              }),
            (async () => {
              try {
                let [{ robux: t }, n] = await Promise.all([
                  I.default.getUserCurrency(c.id),
                  I.default.getDeveloperExchangeInfo(!0)
                ]);
                if (!e) return;
                (m(t), v(n));
              } catch (t) {
                if (!e) return;
                (x(!0), T(null));
              }
            })(),
            () => {
              e = !1;
            }
          );
        }, [c, h]),
        (0, n.useEffect)(() => {
          b &&
            h &&
            S &&
            R({
              message: w("Message.RequestSubmitted"),
              autoHide: !0,
              autoHideDuration: k.toastDurationTime
            });
        }, [b, S, h, R, w]),
        f)
          ? (0, t.jsx)(j.default, {
              title: w("Heading.FailedToLoadPage"),
              message: w("Message.FailedToLoadPage"),
              buttonText: w("Action.FailedToLoadPage"),
              onReload: e
            })
          : h && S
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(o.HubMeta, {
                    title: (0, o.buildTitle)(w("Heading.DevEx")),
                    breadcrumb: (0, o.buildBreadcrumb)(w("Heading.Finances"), w("Heading.DevEx"))
                  }),
                  (0, t.jsx)(tc, {
                    cashoutInfo: h,
                    onModerationDismissed: P,
                    pageLoadIntervention: y,
                    isPageLoadInterventionReady: void 0 !== y || !!h
                  }),
                  r
                    ? (0, t.jsx)(eh, {
                        cashoutInfo: h,
                        submitRequest: E,
                        onCancelCashout: () => {
                          u(!1);
                        }
                      })
                    : (0, t.jsx)(e8, {
                        cashoutInfo: h,
                        userRobux: d,
                        onCashoutClick: () => {
                          (h && Q(h)) ||
                            (A.default.logClickEvent({ eventName: "clickCashoutBox" }), u(!0));
                        }
                      })
                ]
              })
            : (0, t.jsx)(D.PageLoading, {});
      }, [
        C.TranslationNamespace.DevEx,
        C.TranslationNamespace.Error,
        C.TranslationNamespace.Navigation,
        C.TranslationNamespace.TaxDocumentation
      ]);
    var tm = e.i(373117);
    let tp = () => {
      let { settings: e, isFetched: a } = (0, eT.useSettings)(),
        i = (0, n.useMemo)(
          () =>
            a && e.isUserEligibleForDevEx ? (0, t.jsx)(td, {}) : (0, t.jsx)(D.PageLoading, {}),
          [a, e.isUserEligibleForDevEx]
        );
      return (0, t.jsx)(r.default, { children: i });
    };
    ((tp.getPageLayout = (e) =>
      (0, tm.default)(e, {
        title: (0, t.jsx)(a.Translate, {
          namespace: "CreatorDashboard.Features",
          translationKey: "Label.DevEx"
        })
      })),
      (tp.loggerConfig = { rosId: "1096" }),
      e.s(["default", 0, tp], 692475));
  },
  867817,
  (e, t, n) => {
    let a = "/dashboard/devex";
    ((window.__NEXT_P = window.__NEXT_P || []).push([a, () => e.r(692475)]),
      t.hot &&
        t.hot.dispose(function () {
          window.__NEXT_P.push([a]);
        }));
  },
  562146,
  (e) => {
    "use strict";
    var t = e.i(725074),
      n = e.i(888379),
      a = e.i(25818),
      r = e.i(197649),
      i = e.i(416340);
    let o = {
        Info: "rgb(from var(--color-system-emphasis) r g b / ".concat(0.05, ")"),
        Warning: "rgb(from var(--color-system-warning) r g b / ".concat(0.05, ")"),
        Success: "rgb(from var(--color-system-success) r g b / ".concat(0.05, ")"),
        Error: "rgb(from var(--color-system-alert) r g b / ".concat(0.05, ")")
      },
      s = {
        Info: "stroke-system-emphasis",
        Warning: "stroke-system-warning",
        Success: "stroke-system-success",
        Error: "stroke-system-alert"
      },
      l = {
        Info: "icon-filled-circle-i",
        Warning: "icon-filled-triangle-exclamation",
        Success: "icon-filled-circle-check",
        Error: "icon-filled-circle-x"
      },
      u = {
        Info: "var(--inverse-system-emphasis)",
        Warning: "var(--inverse-system-warning)",
        Success: "var(--inverse-system-success)",
        Error: "var(--inverse-system-alert)"
      },
      c = {
        Info: "bg-action-standard",
        Warning: "bg-inverse-action-standard",
        Success: "bg-inverse-action-standard",
        Error: "bg-action-standard"
      },
      d = (0, i.forwardRef)((e, d) => {
        let {
            title: m,
            description: p,
            linkLabel: h,
            linkHref: v,
            onLinkClick: f,
            showIcon: x = !0,
            infoIconOverride: b,
            layout: g = "Inline",
            variant: y = "Standard",
            severity: T = "Info",
            primaryActionLabel: R,
            onPrimaryAction: w,
            secondaryActionLabel: S,
            onSecondaryAction: E,
            actions: N,
            onDismiss: I,
            dismissIconAriaLabel: A = "Dismiss banner",
            className: k,
            style: D,
            ...j
          } = e,
          C = o[T],
          P = "Emphasis" === y ? c[T] : "",
          _ = "Info" === T && b ? b : l[T],
          L = "Stacked" === g,
          O = !!N || !!(R && w) || !!(S && E),
          q =
            h &&
            i.default.createElement(
              "span",
              {
                className: (0, r.default)(
                  "text-body-medium underline content-default block text-no-wrap"
                )
              },
              h
            ),
          M =
            q &&
            i.default.createElement(
              i.default.Fragment,
              null,
              i.default.createElement("span", null, " · "),
              i.default.createElement("a", { className: "shrink-0", href: v, onClick: f }, q)
            ),
          G =
            null != N
              ? N
              : (R && w) || (S && E)
                ? i.default.createElement(
                    "div",
                    { className: "flex items-center gap-small" },
                    R &&
                      w &&
                      i.default.createElement(
                        n.Button,
                        {
                          size: "Small",
                          variant: "Standard",
                          onClick: w,
                          className: (0, r.default)("content-emphasis label-small", P)
                        },
                        R
                      ),
                    S &&
                      E &&
                      i.default.createElement(
                        n.Button,
                        {
                          size: "Small",
                          variant: "Utility",
                          onClick: E,
                          className: (0, r.default)("content-emphasis label-small")
                        },
                        S
                      )
                  )
                : null,
          U =
            I &&
            i.default.createElement(a.CloseAffordance, {
              variant: "Utility",
              size: "Small",
              isCircular: !0,
              className: "content-emphasis",
              "aria-label": A,
              onClick: I
            });
        return i.default.createElement(
          "div",
          {
            ref: d,
            role: "Warning" === T || "Error" === T ? "alert" : "status",
            className: (0, r.default)(
              "foundation-web-feedback-banner flex flex-col gap-small radius-medium padding-large stroke-standard",
              "Standard" === y ? "bg-shift-100" : void 0,
              "Standard" === y ? "stroke-default" : s[T],
              k
            ),
            style: { backgroundColor: "Emphasis" === y ? C : void 0, ...D },
            ...j
          },
          i.default.createElement(
            "div",
            {
              className: (0, r.default)(
                "flex width-full gap-medium",
                L ? "items-start" : "items-center flex-wrap"
              )
            },
            i.default.createElement(
              "div",
              {
                className: (0, r.default)(
                  "flex grow-1 min-width-0",
                  L ? "flex-col gap-medium basis-0" : "items-center gap-xsmall"
                )
              },
              i.default.createElement(
                "div",
                {
                  className: (0, r.default)(
                    "flex min-width-0",
                    L ? "gap-medium flex-col grow-1 basis-0" : "gap-xsmall items-center"
                  )
                },
                i.default.createElement(
                  "div",
                  { className: (0, r.default)("flex items-center gap-xsmall min-width-0") },
                  i.default.createElement(
                    "div",
                    { className: (0, r.default)("flex items-center gap-medium min-width-0") },
                    x &&
                      _ &&
                      i.default.createElement(t.Icon, {
                        name: _,
                        size: "Large",
                        className: "shrink-0",
                        style: { color: u[T] }
                      }),
                    i.default.createElement(
                      "span",
                      {
                        className: (0, r.default)(
                          "text-label-medium content-emphasis",
                          L
                            ? ""
                            : "block padding-y-xsmall text-truncate-end text-no-wrap min-width-0 grow-1 basis-0"
                        )
                      },
                      m
                    )
                  ),
                  L && M
                ),
                p &&
                  (L
                    ? i.default.createElement(
                        "div",
                        {
                          className: (0, r.default)(
                            "text-body-medium text-truncate-split content-default width-full"
                          )
                        },
                        p
                      )
                    : i.default.createElement(
                        i.default.Fragment,
                        null,
                        i.default.createElement(
                          "span",
                          {
                            className:
                              "text-body-medium text-truncate-end content-default block text-no-wrap min-width-0 fill"
                          },
                          p
                        ),
                        i.default.createElement(
                          "span",
                          { className: "flex items-center gap-xsmall" },
                          M
                        )
                      )),
                !L &&
                  !p &&
                  M &&
                  i.default.createElement("div", { className: "flex items-center gap-xsmall" }, M)
              ),
              L && O && G
            ),
            !L &&
              (O || I) &&
              i.default.createElement(
                "div",
                { className: "flex items-center justify-end gap-small shrink-0" },
                O && G,
                U
              ),
            L && U && i.default.createElement("div", { className: "shrink-0" }, U)
          )
        );
      });
    e.s(["FeedbackBanner", 0, d]);
  },
  388506,
  (e) => {
    "use strict";
    var t = e.i(197649),
      n = e.i(416340),
      a = e.i(23342);
    let r = new Set(["_self", "_parent", "_top"]),
      i = { Small: "text-body-small", Medium: "text-body-medium", Large: "text-body-large" },
      o = {
        Standard: "content-emphasis",
        Emphasis: "content-emphasis",
        Inverse: "content-inverse-default"
      },
      s = (0, n.forwardRef)((e, s) => {
        var l, u, c;
        let {
            children: d,
            className: m,
            size: p,
            color: h = "Emphasis",
            variant: v = "Standalone",
            underline: f = "hover",
            isExternal: x,
            asChild: b,
            ...g
          } = e,
          y =
            ((u = null != (l = g.as) ? l : "a"),
            (c = "button" === g.as ? void 0 : g.target),
            void 0 !== x ? x : "button" !== u && void 0 !== c && !r.has(c)),
          T = (0, t.default)(
            "foundation-web-link",
            "button" === g.as &&
              "bg-none stroke-none padding-none appearance-none [text-align:inherit]",
            ("Standalone" === v || y) && "inline-flex items-center gap-xsmall",
            void 0 !== p && i[p],
            o[h],
            "always" === f ? "underline" : "no-underline",
            "hover" === f && "hover:underline",
            "motion-safe:transition-opacity",
            "hover:cursor-pointer hover:[opacity:0.8]",
            "radius-xsmall focus-visible:[outline-style:solid] focus-visible:[outline-width:var(--stroke-standard)] focus-visible:[outline-color:var(--color-system-emphasis)]",
            m
          ),
          R = y
            ? n.default.createElement("span", {
                "aria-hidden": !0,
                "data-testid": "foundation-web-icon",
                className: (0, t.default)(
                  "grow-0 shrink-0 basis-auto icon size-[1em]",
                  "icon-regular-arrow-up-right-from-square"
                )
              })
            : null;
        if (b) {
          let { as: e, ...t } = g,
            r = n.default.Children.only(d);
          return n.default.isValidElement(r)
            ? n.default.createElement(
                a.Slot,
                { ref: s, ...t, className: T },
                n.default.cloneElement(
                  r,
                  {},
                  n.default.createElement(n.default.Fragment, null, r.props.children, R)
                )
              )
            : null;
        }
        if ("button" === g.as) {
          let { as: e, type: t, ...a } = g;
          return n.default.createElement(
            "button",
            { ref: s, type: null != t ? t : "button", ...a, className: T },
            d,
            R
          );
        }
        let { as: w, ...S } = g;
        return n.default.createElement("a", { ref: s, ...S, className: T }, d, R);
      });
    ((s.displayName = "Link"), e.s(["Link", 0, s]));
  },
  529390,
  (e) => {
    "use strict";
    var t = e.i(196300);
    e.s(["CheckCircleOutlineIcon", () => t.C]);
  },
  333220,
  (e) => {
    "use strict";
    var t = e.i(833172);
    e.s(["HighlightOffIcon", () => t.HighlightOff]);
  },
  326684,
  (e) => {
    "use strict";
    var t = e.i(833172);
    e.s(["ScheduleIcon", () => t.Schedule]);
  },
  185147,
  (e) => {
    "use strict";
    var t = e.i(865800),
      n = e.i(416340),
      a = e.i(730187);
    (e.i(221628),
      e.s(
        [
          "RobuxIcon",
          0,
          function (e) {
            var r = e.ref,
              i = (0, t.a)(e, ["ref"]);
            return n.default.createElement(
              a.M,
              (0, t._)({}, i, { ref: r, viewBox: "0 0 28 28" }),
              n.default.createElement("path", {
                d: "M23.402,5.573C25.009,6.501 26,8.217 26,10.073L26,17.929C26,19.786 25.009,21.501 23.402,22.429L16.597,26.358C14.99,27.286 13.009,27.286 11.402,26.358L4.597,22.429C2.99,21.501 2,19.786 2,17.929L2,10.073C2,8.217 2.99,6.501 4.597,5.573L11.402,1.645C13.009,0.717 14.99,0.717 16.597,1.645L23.402,5.573ZM12.313,3.428L5.686,7.254C4.642,7.857 4,8.97 4,10.176L4,17.827C4,19.032 4.642,20.146 5.686,20.749L12.313,24.574C13.357,25.177 14.642,25.177 15.686,24.574L22.313,20.749C23.357,20.146 24,19.032 24,17.827L24,10.176C24,8.97 23.357,7.857 22.313,7.254L15.686,3.428C14.642,2.825 13.357,2.825 12.313,3.428ZM15.385,5.566L20.614,8.584C21.471,9.079 22,9.994 22,10.985L22,17.022C22,18.012 21.471,18.927 20.614,19.422L15.385,22.441C14.528,22.936 13.471,22.936 12.614,22.441L7.385,19.422C6.528,18.927 6,18.012 6,17.022L6,10.985C6,9.994 6.528,9.079 7.385,8.584L12.614,5.566C13.471,5.071 14.528,5.071 15.385,5.566ZM11,17.003L17,17.003L17,11.003L11,11.003L11,17.003Z"
              })
            );
          }
        ],
        185147
      ));
  }
]);

//# debugId=f6c85a41-710d-e2cd-f9ee-58b799dbd76d
//# sourceMappingURL=1xuny_2gcilj3.js.map
