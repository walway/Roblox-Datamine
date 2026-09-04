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
    n && ((e._debugIds || (e._debugIds = {}))[n] = "af61d27d-7756-1994-2d23-f8d90e12e6b6");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  401263,
  884213,
  (e) => {
    "use strict";
    var t = e.i(416340);
    let n = /{(.+?)}/g,
      r = (e, t) =>
        void 0 === t || 0 === Object.keys(t).length
          ? e
          : e.replace(n, (e, n) => {
              var r;
              return null != (r = t[n]) ? r : "{".concat(n, "}");
            });
    e.s(["default", 0, r], 884213);
    let a = /{(.+?)}/,
      i = /({.+?})/g,
      o = /^[a-zA-Z0-9-]+\.(?:capture-loopback\.)?chromatic\.com$/,
      s = /(?:^|\.)robloxlabs\.com$/,
      l = () => {
        let e,
          t = o.test(window.location.hostname),
          n = window.location.hostname.includes("localhost"),
          r = "string" == typeof (e = window.location.hostname) && s.test(e);
        return {
          isSSR: !1,
          isAllowed: t || n || r,
          isDangerous: t || r,
          preferLoadedTranslations: r
        };
      },
      u = (e, t) => (t.isDangerous ? "[!!".concat(e, "!!]") : e);
    var d = e.i(730530);
    e.s(
      [
        "default",
        0,
        (e) => {
          let {
              ready: n,
              translate: o,
              translateHTML: s,
              translateWithNamespace: c,
              translateWithNamespaceHTML: h
            } = e,
            g = (0, t.useMemo)(
              () => ({
                ready: n,
                translate: o,
                translateHTML: s,
                translateWithNamespace: c,
                translateWithNamespaceHTML: h
              }),
              [n, o, s, c, h]
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
                let { ready: t, translate: n } = e;
                return (e, a, i, o) => {
                  let s = l();
                  if (!s.isAllowed) return n(i, o);
                  if (s.preferLoadedTranslations && t) {
                    let e = n(i, o);
                    if (e.length > 0) return e;
                  }
                  return r(s.preferLoadedTranslations && !t ? e : u(e, s), o);
                };
              })(e),
              tPendingHtmlTranslation: ((e) => {
                let { ready: n, translateHTML: o } = e;
                return (e, s, d, c, h) => {
                  let g = l();
                  if (!g.isAllowed) return o(d, c, h);
                  if (g.preferLoadedTranslations && n) {
                    let e = o(d, c, h);
                    if ("" !== e) return e;
                  }
                  return ((e, n, o) => {
                    let s, l;
                    if (void 0 === n && void 0 === o) return e;
                    let { stringArgs: u, htmlArgs: d } =
                        ((s = {}),
                        (l = {}),
                        void 0 === o ||
                          Object.entries(o).forEach((e) => {
                            let [t, n] = e;
                            "string" == typeof n ? (s[t] = n) : (l[t] = n);
                          }),
                        { stringArgs: s, htmlArgs: l }),
                      c = r(e, u),
                      h = c.split(i).filter((e) => !!e);
                    if (1 === h.length) return c;
                    let g = [...h];
                    if (0 !== Object.keys(d).length) {
                      let e = h.reduce((e, t, n) => {
                        let r = a.exec(t);
                        if (r) {
                          let t = r[1];
                          if (Object.hasOwn(d, t)) {
                            let r = e[t];
                            if (!r) return Object.assign(e, { [t]: [n] });
                            r.push(n);
                          }
                        }
                        return e;
                      }, {});
                      Object.entries(d).forEach((t) => {
                        let [n, r] = t,
                          a = e[n];
                        a &&
                          a.forEach((e) => {
                            g[e] = r;
                          });
                      });
                    }
                    if (!Array.isArray(n) || 0 === n.length)
                      return (0, t.createElement)(t.Fragment, null, ...g);
                    let b = n.reduce((e, t) => {
                        let { opening: n, closing: r, content: a } = t;
                        return Object.assign(e, {
                          ["{".concat(n, "}")]: { match: "{".concat(r, "}"), content: a }
                        });
                      }, {}),
                      v = [],
                      m = [],
                      p = [];
                    for (let e = g.shift(); void 0 !== e; e = g.shift())
                      if ("string" == typeof e && a.test(e))
                        if (Object.hasOwn(b, e)) (m.push(e), p.push(e));
                        else {
                          let n = m.pop();
                          if (void 0 !== n) {
                            let { match: r, content: a } = b[n];
                            if (e !== r) break;
                            let i = [],
                              o = !1;
                            for (; p.length > 0 && !o;) {
                              let e = p.pop();
                              e === n ? (o = !0) : i.unshift(e);
                            }
                            let s = a(
                              i.every((e) => "string" == typeof e)
                                ? i
                                : (0, t.createElement)(t.Fragment, null, ...i)
                            );
                            0 === p.length ? v.push(s) : p.push(s);
                          }
                        }
                      else 0 === p.length ? v.push(e) : p.push(e);
                    return (0, t.createElement)(t.Fragment, null, ...v);
                  })(g.preferLoadedTranslations && !n ? e : u(e, g), c, h);
                };
              })(e)
            };
          }, [g]);
        }
      ],
      401263
    );
  },
  138726,
  (e) => {
    "use strict";
    var t = e.i(221628),
      n = e.i(416340),
      r = e.i(237401),
      a = e.i(458451),
      i = e.i(550742),
      o = e.i(969687),
      s = e.i(119636),
      l = e.i(706442),
      u = e.i(71375),
      d = e.i(829425);
    let c = (0, l.makeStyles)()((e) => ({
      loading: { width: "50%", maxWidth: 250, margin: "250px auto" },
      background: {
        ...(0, o.getWebViewLoadingStyles)(),
        height: "100%",
        width: "100%",
        margin: "0"
      },
      content: {
        ".studio-webview &": { alignItems: "center", display: "flex", height: "100%" },
        maxWidth: 1500,
        width: "100%",
        margin: "auto",
        padding: 32,
        [e.breakpoints.down("XLarge")]: { padding: 24 }
      }
    }));
    e.s([
      "default",
      0,
      (e) => {
        let { children: o } = e,
          {
            classes: { loading: l, content: h, background: g }
          } = c(),
          { status: b, login: v } = (0, a.useRobloxAuthentication)(),
          m = (0, i.usePolyfills)();
        return ((0, n.useEffect)(() => {
          ("unauthenticated" === b && v(),
            "logged-out" === b && r.default.push(d.creatorHub.getUrl()));
        }, [v, b]),
        "initial" !== b && "loading" !== b && m)
          ? "error" === b
            ? (0, t.jsx)("div", {
                className: g,
                children: (0, t.jsx)("div", {
                  className: h,
                  children: (0, t.jsx)(u.default, {
                    onReload: () => {
                      r.default.reload();
                    }
                  })
                })
              })
            : (0, t.jsx)(t.Fragment, { children: o })
          : (0, t.jsx)("div", {
              className: g,
              children: (0, t.jsx)("div", {
                className: h,
                children: (0, t.jsx)(s.LinearProgress, { classes: { root: l }, title: "loading" })
              })
            });
      }
    ]);
  },
  29929,
  (e) => {
    "use strict";
    let t;
    var n,
      r,
      a,
      i,
      o,
      s,
      l,
      u,
      d,
      c,
      h,
      g,
      b,
      v,
      m,
      p,
      f,
      w,
      E,
      C,
      S = e.i(650502),
      y = e.i(864392),
      x =
        (((n = {}).ShowVrDeviceOption = "showVrDeviceOption"),
        (n.ShowIXPClientTest = "showIXPClientTest"),
        (n.ShowMemoryStoresDashboard = "showMemoryStoresDashboard"),
        (n.ShowAdvancedSettingsPage = "showAdvancedSettingsPage"),
        (n.EnableIA = "enableIA"),
        (n.EnableSubscriptionActivationTest = "enableSubscriptionActivationTest"),
        (n.EnableDevexEarnedRobux = "enableDevexEarnedRobux"),
        (n.EnableExperienceGenre = "enableExperienceGenre"),
        (n.EnablePlayerFeedbackTranslationsWeb = "EnablePlayerFeedbackTranslationsWeb"),
        (n.EnablePlayerFeedbackTranslationRetries = "EnablePlayerFeedbackTranslationRetries"),
        (n.EnablePlayerFeedbackDetailedFilter = "enablePlayerFeedbackDetailedFilter"),
        (n.EnableEventRequestFeaturing = "enableEventRequestFeaturing"),
        (n.EnableCollaboratorsPageV2 = "enableCollaboratorsPageV2"),
        n),
      I =
        (((r = {}).EnableRightsManager = "enableRightsManager"),
        (r.EnableBulkFiling = "enableBulkFiling"),
        (r.EnableOnDemandSearch = "enableOnDemandSearch"),
        (r.EnableEditRegistration = "enableEditRegistration"),
        (r.EnableImageSearch = "enableImageSearch"),
        (r.EnableClaimsAgainstMe = "enableClaimsAgainstMe"),
        (r.EnableGenAiOptOut = "enableGenAiOptOut"),
        (r.EnableInExperienceIpReporting = "enableInExperienceIpReporting"),
        (r.EnableIpContentSearch = "enableIpContentSearch"),
        (r.EnableTrademark = "enableTrademark"),
        r),
      P = (((a = {}).EnableIPRecommender = "enableIPRecommender"), a),
      L = (((i = L || {}).EnableVideoOnboarding = "enableVideoOnboarding"), i),
      T =
        (((o = T || {}).EnableSignalLookup = "enableSignalLookup"),
        (o.AlwaysShow = "alwaysShow"),
        o),
      M = M || {},
      H = (((s = H || {}).mobileVariant = "mobileVariant"), s),
      k = k || {},
      O =
        (((l = {}).ShowEditInStudioButton = "showEditInStudioButton"),
        (l.EnableCreationsNavLayout = "enableCreationsIPNavLayout"),
        l),
      N = (((u = {}).EnableBulkAssetUpload = "enableBulkAssetUpload"), u),
      A =
        (((d = {}).EnableAudienceReachOnOverview = "enableAudienceReachOnOverviewPage"),
        (d.EnableAudienceReachGrowthOpportunitiesBanner =
          "enableAudienceReachGrowthOpportunitiesBanner"),
        (d.EnableAudienceControls = "enableAudienceControls"),
        (d.EnableNewBadgePattern = "enableNewBadgePattern"),
        (d.EnableAtRiskAnnotationOnExperiences = "enableAtRiskAnnotationOnExperiences"),
        (d.EnableAudiencesReplacement = "enableAudiencesReplacement"),
        d),
      F =
        (((c = {}).EnableTalentHubV2 = "enableTalentHubV2"),
        (c.EnableTalentHubV2M2 = "enableTalentHubV2M2"),
        c),
      D = (((h = {}).StarterPlaceTemplateId = "starterPlaceTemplateId"), h),
      R = (((g = R || {}).EnableExperienceWebhooks = "enableExperienceWebhooks"), g),
      V = (((b = V || {}).EnableExperienceDataTileV2 = "enableExperienceDataTileV2"), b),
      _ = (((v = _ || {}).EnableChangelogCMS = "enableChangelogCMS"), v),
      W = (((m = {}).EnableSectionStepper = "enableSectionStepper"), m),
      U =
        (((p = {}).CreatorDashboard = "CreatorDashboard"),
        (p.CreatorHubHomePage = "CreatorHub.HomePage.UserId"),
        (p.CreatorHubHomePageExperienceTile = "CreatorHub.HomePage.ExperienceTile.UserId"),
        (p.CreatorHubHomePageOpportunitiesSection =
          "CreatorHub.HomePage.OpportunitiesSection.UserId"),
        (p.CreatorHubLandingPage = "CreatorHub.LandingPage"),
        (p.CreatorHubLandingPageUserId = "CreatorHub.LandingPage.UserId"),
        (p.CreatorHubNavigation = "CreatorHub.Navigation"),
        (p.CreatorHubNavigationUser = "CreatorHub.Navigation.User"),
        (p.CreatorHubPublishing = "CreatorHub.Publishing.UserId"),
        (p.LicenseManager = "CreatorDashboard.LicenseManager"),
        (p.RightsManager = "CreatorDashboard.RightsManager"),
        (p.StarterPlaceCreation = "CRK.StarterPlace.StarterPlaceCreation"),
        (p.CreatorSuccessOrganizations = "CreatorSuccess.OrganizationsV2"),
        (p.CreatorHubDocumentation = "CreatorHub.CreatorDocumentation.UserId"),
        (p.CreatorHubDocumentationSearch = "CreatorHub.CreatorDocumentation.Search.UserId"),
        (p.CreatorHubCreationsPermission = "CreatorHub.Creations.Permission"),
        (p.CreatorHubExperienceWebhooks = "CreatorHub.ExperienceWebhooks.UserId"),
        (p.CreatorHubChangelog = "CreatorHub.Changelog"),
        (p.TalentHub = "CreatorHub.TalentHub.UserId"),
        (p.ContentSuitabilityQuestionnaire = "ContentSuitability.Questionnaire.UserId"),
        p),
      B =
        (((f = B || {}).ShowMemoryStoresDashboard = "showMemoryStoresDashboard"),
        (f.EnableSubscriptionActivationTest = "enableSubscriptionActivationTest"),
        (f.ShowSecrets = "showSecrets"),
        (f.ShowQualitySignalCards = "showQualitySignalCards"),
        f);
    let j = {
      CreatorDashboard: x,
      "CreatorHub.HomePage.UserId": L,
      "CreatorHub.HomePage.OpportunitiesSection.UserId": T,
      "CreatorHub.LandingPage": M,
      "CreatorHub.LandingPage.UserId": H,
      "CreatorHub.Navigation": k,
      "CreatorHub.Navigation.User": O,
      "CreatorHub.Publishing.UserId": N,
      "CreatorDashboard.LicenseManager": P,
      "CreatorDashboard.RightsManager": I,
      "CRK.StarterPlace.StarterPlaceCreation": D,
      "CreatorSuccess.OrganizationsV2": {},
      "CreatorHub.CreatorDocumentation.UserId": (((w = {}).EnableCourses = "enableCourses"), w),
      "CreatorHub.CreatorDocumentation.Search.UserId":
        (((E = {}).SearchVersion = "searchVersion"), E),
      "CreatorHub.Creations.Permission": A,
      "CreatorHub.ExperienceWebhooks.UserId": R,
      "CreatorHub.HomePage.ExperienceTile.UserId": V,
      "CreatorHub.Changelog": _,
      "CreatorHub.TalentHub.UserId": F,
      "ContentSuitability.Questionnaire.UserId": W
    };
    async function q(e) {
      let t = (0, S.getBEDEV2ServiceBasePath)("product-experimentation-platform"),
        n = Object.values(j[e]).join(","),
        r = "".concat(t, "/v1/projects/1/layers/").concat(e, "/values?parameters=").concat(n);
      return (await fetch(r, { credentials: "include" })).json();
    }
    let G = (0, y.default)(q);
    ((C = async function (e, t) {
      let n = (0, S.getBEDEV2ServiceBasePath)("product-experimentation-platform"),
        r = await fetch("".concat(n, "/v1/projects/1/values"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ layers: { [e]: { universeid: t } } }),
          credentials: "include"
        });
      return (await r.json()).layers[e].parameters;
    }),
      (t = []),
      e.s(
        [
          "ContentSuitabilityQuestionnaireParameters",
          () => W,
          "CreatorHubCreationsPermissionParameters",
          () => A,
          "CreatorHubPublishingParameters",
          () => N,
          "IXPLayers",
          () => U,
          "LicenseManagerParameters",
          () => P,
          "TalentHubParameters",
          () => F,
          "fetchIXPParametersForCurrentUser",
          0,
          G
        ],
        29929
      ));
  },
  864392,
  (e) => {
    "use strict";
    e.s([
      "default",
      0,
      function (e) {
        let t = new Map();
        return (n) => {
          if (t.has(n)) return t.get(n);
          let r = e(n);
          return (t.set(n, r), r);
        };
      }
    ]);
  },
  462863,
  (e) => {
    "use strict";
    var t = e.i(221628),
      n = e.i(921394);
    e.s([
      "default",
      0,
      (e) => {
        let { lightSrc: r, darkSrc: a, alt: i, ...o } = e,
          { themeMode: s } = (0, n.useThemeMode)();
        return (0, t.jsx)("img", { src: "dark" === s && null != a ? a : r, alt: i, ...o });
      }
    ]);
  },
  71375,
  (e) => {
    "use strict";
    var t = e.i(221628),
      n = e.i(429884),
      r = e.i(127792),
      a = e.i(858517),
      i = e.i(79187),
      o = e.i(921394),
      s = e.i(881670);
    let l = (0, i.withTranslation)(
      (e) => {
        let { onReload: i } = e,
          { themeMode: s } = (0, o.useThemeMode)(),
          l = "dark" === s ? r.default : a.default;
        return (0, t.jsx)(n.LoadError, { src: l, onReload: i });
      },
      [s.TranslationNamespace.Error]
    );
    e.s(["default", 0, l]);
  },
  745873,
  (e) => {
    "use strict";
    var t = e.i(221628),
      n = e.i(416340),
      r = e.i(458451),
      a = e.i(533414),
      i = e.i(157310),
      o = e.i(279149),
      s = e.i(602635),
      l = e.i(814975);
    let u = (0, e.i(272593).createClientConfiguration)("creator-home-api", "bedev2"),
      d = new o.GroupsApi(u),
      c = function () {
        let { user: e } = (0, l.useAuthentication)();
        return (0, i.useQuery)({
          queryKey: s.getGroupsQueryKey,
          enabled: !!e,
          queryFn: () => {
            let e;
            return ((e = { surface: o.GroupListSurface.CreatorHub }), d.groupsListGroups(e));
          }
        });
      },
      h = (0, n.createContext)(null);
    e.s(
      [
        "GroupsProvider",
        0,
        (e) => {
          let { children: i } = e,
            { user: o } = (0, r.useRobloxAuthentication)(),
            { data: s, isLoading: l, refetch: u } = c(),
            [d, g] = (0, a.useLocalStorage)(
              "creatorHubGroups.".concat(null == o ? void 0 : o.id),
              null
            ),
            [b, v] = (0, a.useLocalStorage)(
              "creatorHubGroup.".concat(null == o ? void 0 : o.id),
              null
            ),
            [m, p] = (0, a.useLocalStorage)(
              "creatorHubGroupData.".concat(null == o ? void 0 : o.id),
              {}
            ),
            f = (0, n.useCallback)(
              (e) => {
                v(e);
                let t = null === e ? "user" : e;
                p((e) => {
                  let n = { lastSelected: Date.now(), priority: 1 };
                  if (e[t]) {
                    let { priority: r, lastSelected: a } = e[t];
                    "number" != typeof r ||
                      Number.isNaN(r) ||
                      "number" != typeof a ||
                      Number.isNaN(a) ||
                      (n.priority = r * (1 + Math.log10(1 + 10 / Math.max(Date.now() - a, 864e5))));
                  }
                  return { ...e, [t]: n };
                });
              },
              [v, p]
            ),
            w = (0, n.useMemo)(() => {
              if (null == s ? void 0 : s.groups) return null == s ? void 0 : s.groups;
              if (null === d) return [];
              try {
                return "string" == typeof d ? JSON.parse(d) : d;
              } catch (e) {
                return [];
              }
            }, [d, null == s ? void 0 : s.groups]),
            E = (0, n.useMemo)(() => {
              var e;
              return b &&
                null !=
                  (e = w.find((e) => {
                    let { id: t } = e;
                    return t === b;
                  }))
                ? e
                : null;
            }, [b, w]);
          (0, n.useEffect)(() => {
            (null == o ? void 0 : o.id) &&
              (null == s ? void 0 : s.groups) &&
              !l &&
              g(null == s ? void 0 : s.groups);
          }, [null == s ? void 0 : s.groups, w, l, g, null == o ? void 0 : o.id]);
          let C = (0, n.useMemo)(
            () => ({
              groups: w,
              currentGroup: E,
              groupData: m,
              isFetched: !l && !!(null == o ? void 0 : o.id),
              refreshGroups: u,
              setCurrentGroup: f
            }),
            [E, m, w, l, u, f, null == o ? void 0 : o.id]
          );
          return (0, t.jsx)(h.Provider, { value: C, children: i });
        },
        "useCurrentGroup",
        0,
        () => {
          let e = (0, n.useContext)(h);
          if (null === e) throw Error("useCurrentGroup must be used within a GroupsProvider");
          return e.currentGroup;
        },
        "useGroups",
        0,
        () => {
          let e = (0, n.useContext)(h);
          if (null === e) throw Error("useGroups must be used within a GroupsProvider");
          return e;
        }
      ],
      745873
    );
  },
  127792,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/alert_dark.1spa8ixzmujxs.svg"
    );
  },
  858517,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/alert_light.3o6_fob3g_8zu.svg"
    );
  },
  748625,
  (e) => {
    "use strict";
    var t = e.i(805549);
    e.s(["Collapse", () => t.C]);
  },
  196945,
  (e) => {
    "use strict";
    var t = e.i(865800),
      n = e.i(416340),
      r = e.i(323356);
    (e.i(221628), e.i(149285));
    var a = (0, n.createContext)({
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
        var i,
          o,
          s,
          l,
          u = e.children,
          d = (0, t.a)(e, ["children"]),
          c = (0, n.useRef)(null),
          h = (0, n.useState)(!1),
          g = h[0],
          b = h[1],
          v = (0, n.useState)([]),
          m = v[0],
          p = v[1],
          f = (0, n.useCallback)(
            function (e, n) {
              (void 0 === e && (e = {}),
                void 0 === n &&
                  (n = function () {
                    return !0;
                  }),
                p(function (r) {
                  return (0, t.b)((0, t.b)([], r, !0), [{ props: e, shouldClose: n }], !1);
                }));
            },
            [p]
          ),
          w = (0, n.useCallback)(
            function () {
              b(!1);
            },
            [b]
          );
        (0, n.useEffect)(
          function () {
            m.length > 0 && b(!0);
          },
          [m.length]
        );
        var E = (0, n.useMemo)(
          function () {
            return { ref: c, enqueue: f, close: w };
          },
          [w, f]
        );
        return n.default.createElement(
          n.default.Fragment,
          null,
          n.default.createElement(a.Provider, { value: E }, u),
          n.default.createElement(
            r.S,
            (0, t._)({}, (null == (i = m[0]) ? void 0 : i.props) || {}, d, {
              TransitionProps: (0, t._)(
                (0, t._)(
                  {},
                  (null == (s = null == (o = m[0]) ? void 0 : o.props)
                    ? void 0
                    : s.TransitionProps) || {}
                ),
                {
                  onExited: function (e) {
                    var n, r, a, i;
                    (p(function (e) {
                      var n = e.slice(1);
                      return (0, t.b)([], n, !0);
                    }),
                      (null == (r = null == (n = m[0]) ? void 0 : n.props.TransitionProps)
                        ? void 0
                        : r.onExited) &&
                        (null == (i = null == (a = m[0]) ? void 0 : a.props.TransitionProps) ||
                          i.onExited(e)));
                  }
                }
              ),
              onClose: function (e, t) {
                var n, r, a;
                ((null == (n = m[0]) ? void 0 : n.shouldClose(t)) && b(!1),
                  (null == (r = m[0]) ? void 0 : r.props.onClose) &&
                    (null == (a = m[0]) || a.props.onClose(e, t)));
              },
              open: g
            }),
            null == (l = m[0]) ? void 0 : l.props.children
          )
        );
      },
      "useSnackbar",
      0,
      function () {
        var e = (0, n.useContext)(a);
        return { ref: e.ref, enqueue: e.enqueue, close: e.close };
      }
    ]);
  },
  550742,
  (e) => {
    "use strict";
    let t, n;
    var r,
      a,
      i = e.i(416340);
    let o = "u" > typeof Intl,
      s = !o || void 0 === Intl.Locale,
      l = !o || void 0 === Intl.RelativeTimeFormat,
      u = !o || void 0 === Intl.PluralRules,
      d = !o || void 0 === Intl.DisplayNames,
      c = "function" != typeof window.ResizeObserver,
      h =
        ((r = s || l || u || d || c),
        (a = function () {
          return Promise.all([
            (s
              ? e.A(361318).then(function (e) {
                  return e.p;
                })
              : Promise.resolve()
            ).then(() =>
              Promise.all([
                l
                  ? e
                      .A(950511)
                      .then(function (e) {
                        return e.p;
                      })
                      .then(() => e.A(874521))
                  : null,
                u
                  ? e
                      .A(684498)
                      .then(function (e) {
                        return e.p;
                      })
                      .then(() => e.A(104943))
                  : null,
                d ? e.A(951862).then(() => e.A(890267)) : null
              ])
            ),
            c ? e.A(956827) : null
          ]);
        }),
        (t = !1),
        (n = r
          ? a()
              .catch(() => {})
              .then(() => {
                t = !0;
              })
          : null),
        function () {
          let [e, r] = (0, i.useState)(!n || t);
          return (
            (0, i.useEffect)(() => {
              n && !e && n.then(() => r(!0));
            }, [e]),
            e
          );
        });
    e.s(["usePolyfills", 0, h], 550742);
  },
  969687,
  (e) => {
    "use strict";
    var t,
      n,
      r,
      a,
      i,
      o,
      s,
      l = e.i(2226),
      u = e.i(721281),
      d = e.i(252842),
      c = e.i(79187),
      h = e.i(416340),
      g = e.i(80768),
      b = e.i(533414),
      v =
        (((a = {}).TIMED_OUT = "TIMED_OUT"),
        (a.WEBVIEW_NOT_INITIALIZED = "WEBVIEW_NOT_INITIALIZED"),
        (a.WEBVIEW_NOT_FOUND = "WEBVIEW_NOT_FOUND"),
        (a.INVALID_MESSAGE = "INVALID_MESSAGE"),
        a);
    class m extends Error {
      constructor(e, t, n) {
        let r = "MessageBusError, code: ".concat(e);
        (t && (r += ", eventName: ".concat(t)),
          n && (r += ", type: ".concat(n)),
          super(r),
          (0, u._)(this, "code", void 0),
          (0, u._)(this, "eventName", void 0),
          (0, u._)(this, "eventType", void 0),
          (this.code = e),
          (this.eventName = t),
          (this.eventType = n));
      }
    }
    var p =
      (((i = p || {}).DarkFoundation = "darkFoundation"),
      (i.LightFoundation = "lightFoundation"),
      i);
    let f = "darkFoundation";
    var w = (((o = {}).Fire = "fire"), (o.Response = "response"), (o.Request = "request"), o);
    function E() {
      var e, t, n, r, a, i;
      let o = null == (t = window) || null == (e = t.navigator) ? void 0 : e.userAgent;
      return (
        (null == (r = window) || null == (n = r.rbx) ? void 0 : n.studio.isPrewarm) !== !0 &&
        (null == (i = window) || null == (a = i.rbx) ? void 0 : a.postMessage) !== void 0 &&
        void 0 !== o &&
        o.includes("RobloxStudio")
      );
    }
    class C {
      enqueueMessage(e) {
        (this.queue.push(e), this.debouncedFlush());
      }
      flush() {
        let e = "".concat(this.url, "?"),
          t = 0;
        for (let n of this.queue) {
          let r = e + "msg".concat(t, "=").concat(encodeURIComponent(n), "&");
          if (r.length > this.maxUrlLength) {
            if (t > 0) {
              ((this.queue = this.queue.slice(t)), this.postFrameMessage(e), this.debouncedFlush());
              return;
            }
            (console.warn("Message too large: (".concat(r.length, "), attempting to send anyway")),
              (this.queue = this.queue.slice(1)),
              this.postFrameMessage(r),
              this.queue.length > 0 && this.debouncedFlush());
            return;
          }
          ((e = r), (t += 1));
        }
        t > 0 && ((this.queue = this.queue.slice(t)), this.postFrameMessage(e));
      }
      postFrameMessage(e) {
        let t = document.createElement("iframe");
        ((t.style.display = "none"),
          (t.src = e),
          document.body.appendChild(t),
          setTimeout(() => {
            document.body.removeChild(t);
          }, this.frameRemoveDelay));
      }
      constructor(e, t = {}) {
        ((0, u._)(this, "debouncedFlush", void 0),
          (0, u._)(this, "frameRemoveDelay", void 0),
          (0, u._)(this, "maxUrlLength", void 0),
          (0, u._)(this, "queue", []),
          (0, u._)(this, "url", void 0));
        let { flushInterval: n = 10, frameRemoveDelay: r = 10, maxUrlLength: a = 64e3 } = t;
        ((this.url = e),
          (this.frameRemoveDelay = r),
          (this.maxUrlLength = a),
          ([this.debouncedFlush] = (0, d.debounce)(() => this.flush(), n)));
      }
    }
    let S = c.Locale.English;
    class y {
      getStudioConfiguration() {
        var e;
        if (!E() || !(null == (e = window.rbx) ? void 0 : e.messageBus))
          throw new m(v.WEBVIEW_NOT_INITIALIZED);
        let t = window.rbx.studio;
        return (
          Object.values(c.Locale).includes(t.locale) ||
            (console.warn(
              "Locale: ".concat(t.locale, " is not valid. Defaulting to ").concat(S, ".")
            ),
            (t.locale = S)),
          Object.values(p).includes(t.theme) ||
            (console.warn(
              "Theme: ".concat(t.theme, " is not valid. Defaulting to ").concat(f, ".")
            ),
            (t.theme = f)),
          t
        );
      }
      getOrCreateEventListenersMap(e) {
        let t = e.events;
        if (t) return t;
        let n = new Map();
        return ((e.events = n), n);
      }
      loadWebView() {
        var e, t, n, r;
        if (!E() || !(null == (e = window.rbx) ? void 0 : e.messageBus))
          throw new m(v.WEBVIEW_NOT_INITIALIZED);
        if (
          (null == (t = window.rbx) ? void 0 : t.postMessageFrameUrl) &&
          (null == (r = window.webkit) || null == (n = r.messageHandlers) ? void 0 : n.roblox)
        ) {
          let e = new C(window.rbx.postMessageFrameUrl);
          window.webkit.messageHandlers.roblox.postMessage = (t) => {
            e.enqueueMessage(t);
          };
        }
        let a = this.getOrCreateEventListenersMap(window.rbx.messageBus);
        window.rbx.messageBus = {
          dispatchEvent: (e, t, n) => {
            let r = a.get(e),
              i = null == r ? void 0 : r.uuidSpecificListeners,
              o = null == r ? void 0 : r.generalListeners;
            if (void 0 !== i) {
              var s;
              let e = i.get(null != (s = t.uuid) ? s : "");
              e && e(n, t);
            }
            void 0 !== o && o.forEach((e) => e(n, t));
          },
          events: a
        };
      }
      async initHandshake(e) {
        return this.call("internal:init", e, 0);
      }
      getFullEventName(e) {
        return String(e).includes("internal")
          ? e.toString()
          : "".concat(this.namespace, ":").concat(String(e));
      }
      postMessage(e, t, n) {
        var r;
        if (!E() || !(null == (r = window.rbx) ? void 0 : r.postMessage))
          throw new m(v.WEBVIEW_NOT_FOUND, e, t.type);
        let a = JSON.stringify(t),
          i = JSON.stringify(n);
        if (a.includes("|")) throw new m(v.INVALID_MESSAGE, e, t.type);
        let o = "1|".concat(e, "|").concat(a, "|").concat(i);
        window.rbx.postMessage("messageBusEvent", o);
      }
      setListenerInternal(e, t, n) {
        var r;
        let a = null == (r = window.rbx) ? void 0 : r.messageBus;
        if (!E() || !a) throw new m(v.WEBVIEW_NOT_FOUND, String(e));
        let i = this.getFullEventName(e),
          o = this.getOrCreateEventListenersMap(a),
          s = new Map(),
          l = o.get(i);
        (l
          ? l.uuidSpecificListeners
            ? (s = l.uuidSpecificListeners)
            : (l.uuidSpecificListeners = s)
          : o.set(i, { uuidSpecificListeners: s, generalListeners: [] }),
          s.set(n, t));
      }
      removeListenerInternal(e, t) {
        var n;
        let r = this.getFullEventName(e),
          a = null == (n = window.rbx) ? void 0 : n.messageBus.events;
        if (!a) return;
        let i = a.get(r),
          o = null == i ? void 0 : i.uuidSpecificListeners;
        void 0 !== o && o.has(t) && o.delete(t);
      }
      setListener(e, t) {
        var n;
        let r = null == (n = window.rbx) ? void 0 : n.messageBus;
        if (!E() || !r) throw new m(v.WEBVIEW_NOT_FOUND, String(e));
        let a = this.getFullEventName(e),
          i = (e, n) => {
            var r;
            let i = null != (r = t(e)) ? r : {};
            n.type === w.Request && this.postMessage(a, { type: w.Response, uuid: n.uuid }, i);
          },
          o = this.getOrCreateEventListenersMap(r),
          s = [],
          l = o.get(a);
        return (
          l
            ? l.generalListeners
              ? (s = l.generalListeners)
              : (l.generalListeners = s)
            : o.set(a, { uuidSpecificListeners: new Map(), generalListeners: s }),
          s.push(i),
          i
        );
      }
      removeListener(e, t) {
        var n;
        let r = this.getFullEventName(e),
          a = null == (n = window.rbx) ? void 0 : n.messageBus.events;
        if (!a) return;
        let i = a.get(r),
          o = null == i ? void 0 : i.generalListeners;
        if (void 0 === o || 0 === o.length) return;
        let s = o.indexOf(t);
        s > -1 && o.splice(s, 1);
      }
      async call(e, t) {
        let n,
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e3;
        if (!E()) throw new m(v.WEBVIEW_NOT_FOUND, String(e), w.Request);
        let a = (n) =>
            new Promise((r) => {
              let a = (t, a) => {
                (this.removeListenerInternal(e, n), r(t));
              };
              (this.setListenerInternal(e, a, n),
                this.postMessage(this.getFullEventName(e), { type: w.Request, uuid: n }, t));
            }),
          i = d.uuidService.generateRandomUuid();
        return r <= 0
          ? a(i)
          : Promise.race([
              new Promise((t, a) => {
                n = setTimeout(() => {
                  (this.removeListenerInternal(e, i), a(new m(v.TIMED_OUT, String(e), w.Request)));
                }, r);
              }),
              a(i).then((e) => (n && clearTimeout(n), e))
            ]);
      }
      fire(e, t) {
        if (!E()) throw new m(v.WEBVIEW_NOT_FOUND, String(e), w.Fire);
        let n = d.uuidService.generateRandomUuid();
        this.postMessage(this.getFullEventName(e), { type: w.Fire, uuid: n }, t);
      }
      constructor(e) {
        ((0, u._)(this, "namespace", void 0), (this.namespace = e.namespace));
      }
    }
    var x =
      (((s = {}).changeTheme = "internal:changeTheme"),
      (s.changeVolume = "internal:changeVolume"),
      (s.init = "internal:init"),
      (s.deprecatedSendAnalyticsCounterEvent = "sendAnalyticsCounterEvent"),
      (s.deprecatedSendAnalyticsEvent = "sendAnalyticsEvent"),
      s);
    function I(e, t) {
      let n = e.getElementsByTagName("video"),
        r = e.getElementsByTagName("audio");
      (n.length > 0 &&
        Array.from(n).forEach((e) => {
          e.volume = t;
        }),
        r.length > 0 &&
          Array.from(r).forEach((e) => {
            e.volume = t;
          }));
    }
    let P = [];
    function L() {
      var e, t;
      null == (t = window.rbx) ||
        null == (e = t.postMessage) ||
        e.call(t, "loadprogress", "afterInteractive");
    }
    function T() {}
    (null == (t = window.rbx) ? void 0 : t.postMessage) &&
      (null == (r = window.rbx) ||
        null == (n = r.postMessage) ||
        n.call(r, "loadprogress", "beforeInteractive"),
      "loading" === document.readyState
        ? document.addEventListener("DOMContentLoaded", L, { once: !0 })
        : L());
    let M = () => () => T;
    e.s([
      "StubMessageBus",
      0,
      class extends y {
        async initHandshake(e) {
          let { capabilities: t } = e;
          return { capabilities: t };
        }
        async call() {
          return {};
        }
        getStudioConfiguration() {
          return this.studioConfiguration;
        }
        constructor(e) {
          var t, n, r, a, i, o;
          (super({ namespace: e }),
            (0, u._)(this, "studioConfiguration", void 0),
            (0, u._)(this, "loadWebView", T),
            (0, u._)(this, "setListener", M),
            (0, u._)(this, "fire", T),
            (this.studioConfiguration = {
              theme: p.DarkFoundation,
              locale: c.Locale.English,
              isPrewarm: !1
            }),
            (window.rbx = {
              ...window.rbx,
              studio:
                null != (t = null == (a = window.rbx) ? void 0 : a.studio)
                  ? t
                  : this.studioConfiguration,
              messageBus:
                null != (n = null == (i = window.rbx) ? void 0 : i.messageBus)
                  ? n
                  : { events: new Map(), dispatchEvent: T },
              postMessage: null != (r = null == (o = window.rbx) ? void 0 : o.postMessage) ? r : T
            }));
        }
      },
      "StudioTheme",
      0,
      p,
      "StudioWebViewMessageBusConnector",
      0,
      function (e) {
        var t, n;
        let { children: r, useContextHook: a, capabilities: i = P } = e,
          {
            isWebView: o,
            getStudioConfiguration: s,
            setStudioThemeOverride: l,
            initHandshake: u,
            removeListener: d,
            setListener: c,
            loadWebView: b,
            studioVersion: v
          } = a(),
          m = (0, h.useRef)(o && null != (t = s().volume) ? t : 1),
          p = (0, h.useRef)(
            o
              ? ((n = () => m.current),
                new MutationObserver((e) => {
                  e.forEach((e) => {
                    "childList" === e.type &&
                      e.addedNodes.forEach((e) => {
                        e instanceof Element &&
                          (("AUDIO" === e.tagName || "VIDEO" === e.tagName) && (e.volume = n()),
                          e.children.length > 0 && I(e, n()));
                      });
                  });
                }))
              : null
          ),
          f = (0, h.useCallback)(
            (e) => {
              let { theme: t } = e;
              l(t);
            },
            [l]
          ),
          w = (0, h.useCallback)((e) => {
            let { volume: t } = e;
            ((m.current = t), I(document.body, t));
          }, []);
        return (
          (0, h.useEffect)(() => {
            var e;
            (g.setTag("isWebView", o),
              o &&
                (I(document.body, m.current),
                null == (e = p.current) || e.observe(document.body, { childList: !0, subtree: !0 }),
                window.addEventListener("dragover", (e) => e.preventDefault(), !0),
                window.addEventListener("drop", (e) => e.preventDefault(), !0)));
          }, [o]),
          (0, h.useEffect)(() => {
            o && v && g.setTag("studioVersion", v);
          }, [o, v]),
          (0, h.useEffect)(() => {
            if (o) {
              var e;
              void 0 === (null == (e = window.rbx) ? void 0 : e.messageBus.dispatchEvent) && b();
              let t = c(x.changeTheme, f),
                n = c(x.changeVolume, w);
              return () => {
                (d(x.changeTheme, t), d(x.changeVolume, n));
              };
            }
            return () => {};
          }, [f, w, o, b, d, c]),
          (0, h.useEffect)(() => {
            (async () => {
              o && (await u({ capabilities: i }));
            })();
          }, [o, u, i]),
          h.default.createElement(h.default.Fragment, null, r)
        );
      },
      "getWebViewLoadingStyles",
      0,
      function () {
        let { lightColor: e, darkColor: t } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return {
          ".studio-webview &": { height: "100vh", position: "fixed", width: "100vw" },
          ".dark-theme.studio-webview &": { backgroundColor: "#191A1F", color: t },
          ".light-theme.studio-webview &": { backgroundColor: "#FFFFFF", color: e }
        };
      },
      "isWebViewAvailable",
      0,
      E,
      "makeStudioWebViewMessageBusContextProvider",
      0,
      (e) => {
        let {
            namespace: t,
            useSearchParams: n,
            MockMessageBus: r,
            defaultToMockWebView: a = !1
          } = e,
          i = (0, h.createContext)(null),
          o = new y({ namespace: t }),
          s = ((e) => {
            let {
              context: t,
              bus: n,
              useSearchParams: r,
              MockMessageBus: a,
              defaultToMockWebView: i
            } = e;
            return function (e) {
              let { children: o } = e,
                s = (0, h.useMemo)(() => E(), []),
                u = r(),
                [d, c] = (0, b.useSessionStorage)("mock_web_view", null),
                g = (0, h.useRef)(null),
                v = !s && (!0 === d || i),
                m = s || v,
                w = (0, h.useMemo)(
                  () => (v ? (null != g.current || (g.current = new a()), g.current) : n),
                  [v]
                ),
                C = (0, h.useCallback)((e, t, n) => w.call(e, t, n), [w]),
                S = (0, h.useCallback)(
                  (e, t) => {
                    w.fire(e, t);
                  },
                  [w]
                ),
                y = (0, h.useCallback)(() => w.getStudioConfiguration(), [w]),
                [x, I] = (0, h.useState)(null),
                P = (0, h.useCallback)(
                  async (e) => {
                    let t = await w.initHandshake(e);
                    return (I(t), t);
                  },
                  [w]
                ),
                L = (0, h.useCallback)(() => {
                  w.loadWebView();
                }, [w]),
                T = (0, h.useMemo)(() => {
                  var e;
                  return !!(null == (e = window.rbx) ? void 0 : e.studio.isPrewarm);
                }, []),
                M = (0, h.useMemo)(() => {
                  var e, t;
                  let n;
                  return (
                    void 0 ===
                      (n =
                        null == (t = window) || null == (e = t.navigator)
                          ? void 0
                          : e.deviceMemory) || n >= 8
                  );
                }, []),
                H = (0, h.useMemo)(
                  () =>
                    (function () {
                      var e, t;
                      let n =
                        null == (t = window) || null == (e = t.navigator) ? void 0 : e.userAgent;
                      if (!n) return "";
                      let r = n.match(/RobloxApp\/([\d.]+)/);
                      return r && r.length > 1 ? r[1] : "";
                    })(),
                  []
                ),
                k = (0, h.useCallback)((e, t) => w.setListener(e, t), [w]),
                O = (0, h.useCallback)(
                  (e, t) => {
                    w.removeListener(e, t);
                  },
                  [w]
                ),
                [N, A] = (0, b.useSessionStorage)("web_view_theme_override", null);
              (0, h.useEffect)(() => {
                let e = u.get("mockWebview"),
                  t = "true" === l.default.env.NEXT_PUBLIC_MOCK_WEB_VIEW || "true" === e;
                if ((s || (t ? c(!0) : "false" === e && c(!1)), v)) {
                  let e = u.get("theme");
                  e && A(e.includes("light") ? p.LightFoundation : p.DarkFoundation);
                }
              }, [s, u, c, A, v]);
              let F = (0, h.useMemo)(() => {
                  let e = m && 1 ? y().theme : f;
                  return null != N ? N : e;
                }, [y, m, N]),
                D = (0, h.useMemo)(
                  () => ({
                    call: C,
                    currentStudioTheme: F,
                    fire: S,
                    getStudioConfiguration: y,
                    initHandshake: P,
                    initHandshakeResponse: x,
                    isPrewarm: T,
                    isRecommendedSpecOrAbove: M,
                    isWebView: m,
                    isWebViewAvailable: m,
                    loadWebView: L,
                    removeListener: O,
                    setListener: k,
                    setStudioThemeOverride: A,
                    studioVersion: H
                  }),
                  [C, S, y, P, x, T, M, m, L, O, k, A, F, H]
                );
              return h.default.createElement(t.Provider, { value: D }, o);
            };
          })({
            bus: o,
            context: i,
            defaultToMockWebView: a,
            MockMessageBus: r,
            useSearchParams: n
          });
        return {
          bus: o,
          context: i,
          provider: s,
          useContextHook: () => {
            let e = (0, h.useContext)(i);
            if (!e) throw Error("StudioWebViewMessageBusProviderContext not found");
            return e;
          }
        };
      }
    ]);
  },
  823062,
  (e) => {
    "use strict";
    var t = e.i(416340);
    let n = (0, t.createContext)(null),
      r = [],
      a = [
        "pageload",
        "click",
        "impression",
        "hover",
        "webvitals",
        "apivitals",
        "formvitals",
        "error",
        "session"
      ],
      i = new Set(["TTFB", "FCP", "LCP", "FID", "CLS", "INP"]);
    e.s([
      "UnifiedLoggerProvider",
      0,
      (e) => {
        var o;
        let { children: s, unifiedLogger: l, pageLoggerConfig: u, path: d } = e,
          c = null != (o = null == u ? void 0 : u.tags) ? o : r,
          h = null == u ? void 0 : u.rosId,
          g = (0, t.useMemo)(() => ({ tags: c, rosId: h, path: d }), [c, h, d]),
          b = (0, t.useRef)(g),
          v = (0, t.useRef)(g);
        ((0, t.useLayoutEffect)(() => {
          ((v.current = g),
            void 0 === b.current.path &&
              void 0 !== g.path &&
              (b.current = { ...b.current, path: g.path }));
        }, [g]),
          (0, t.useLayoutEffect)(() => {
            let e = (e) => {
              var t;
              let n,
                r = ((n = null == (t = e.parameters) ? void 0 : t.metricName),
                "webvitals" === e.eventType && void 0 !== n && i.has(n))
                  ? b.current
                  : v.current;
              (void 0 !== r.path && (e.parameters = { ...e.parameters, path: r.path }),
                r.tags.forEach((t) => e.addTag(t)),
                void 0 !== r.rosId && e.addTag("owner: ".concat(r.rosId)));
            };
            return (
              a.forEach((t) => {
                l.events.on(t, e);
              }),
              () => {
                a.forEach((t) => {
                  l.events.off(t, e);
                });
              }
            );
          }, [l]));
        let m = (0, t.useMemo)(() => ({ unifiedLogger: l, pageContext: g }), [l, g]);
        return t.default.createElement(n.Provider, { value: m }, s);
      },
      "useUnifiedLoggerProvider",
      0,
      function () {
        let e = (0, t.useContext)(n);
        if (null === e)
          throw Error("useUnifiedLoggerProvider must be used within a UnifiedLoggerProvider");
        return e;
      }
    ]);
  }
]);

//# debugId=af61d27d-7756-1994-2d23-f8d90e12e6b6
//# sourceMappingURL=2bsgpa7tlb7q7.js.map
