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
    n && ((e._debugIds || (e._debugIds = {}))[n] = "cf0f64c4-aa0b-509a-5054-9ad3ce739f9e");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  203450,
  (e) => {
    "use strict";
    var a = e.i(221628),
      t = e.i(416340),
      s = e.i(540459),
      i = e.i(79187),
      r = e.i(814975),
      l = e.i(156071),
      c = e.i(881670),
      o = e.i(745873),
      n = e.i(361975);
    let d = (0, t.createContext)({
      isAffiliateProgramLoading: !1,
      requiresActionToJoinProgram: void 0,
      compliantWithAllUserRequirements: void 0,
      creatorMetadata: void 0,
      isCurrentUserGroupOwner: void 0,
      isGroupEligible: void 0
    });
    d.displayName = "AffiliateProgram";
    let f = (0, i.withTranslation)(
      (e) => {
        let { children: i } = e,
          { user: c } = (0, r.useAuthentication)(),
          f = (0, o.useCurrentGroup)(),
          [u, m] = (0, t.useState)(void 0),
          [g, b] = (0, t.useState)(),
          [h, p] = (0, t.useState)(),
          [v, x] = (0, t.useState)(),
          [_, k] = (0, t.useState)(),
          y = (0, t.useMemo)(() => {
            var e;
            return (null != (e = null == f ? void 0 : f.id) ? e : 0) !== 0;
          }, [f]),
          [q, S] = (0, t.useState)(void 0),
          w = void 0 === u || void 0 === g || (void 0 === h && y),
          z = (0, t.useCallback)(async () => {
            try {
              if (y && (null == f ? void 0 : f.id)) {
                let e = await (0, n.getGroupCreatorMetadata)(f.id);
                m(e);
                return;
              }
              if (!y && (null == c ? void 0 : c.id)) {
                let e = await (0, n.getUserCreatorMetadata)();
                m(e);
                return;
              }
            } catch (e) {
              return;
            }
            m(null);
          }, [null == f ? void 0 : f.id, y, null == c ? void 0 : c.id]),
          j = (0, t.useCallback)(async () => {
            if ((y && q) || !y)
              try {
                let e = await (0, n.getRequirements)();
                b(e.requirements);
                return;
              } catch (e) {
                return;
              }
            b(null);
          }, [q, y]),
          E = (0, t.useCallback)(async () => {
            if (y && (null == f ? void 0 : f.id))
              try {
                let e = await (0, n.getGroupEligibility)(f.id);
                p(e.isEligible);
              } catch (e) {
                p(!1);
              }
          }, [f, y]);
        ((0, t.useEffect)(() => {
          w ? k(void 0) : y && !q ? k(!1) : k(!1 === v);
        }, [y, q, v, w]),
          (0, t.useEffect)(() => {
            (async () => {
              if (y && (null == f ? void 0 : f.id)) {
                var e;
                return null == (e = (await l.default.getGroupInfo(f.id)).owner) ? void 0 : e.userId;
              }
            })().then((e) => {
              e && c && S(e === c.id);
            });
          }, [null == f ? void 0 : f.id, y, c]),
          (0, t.useEffect)(() => {
            w || !g || (y && !q)
              ? x(void 0)
              : x(
                  (null == g ? void 0 : g.length) === 0 ||
                    ((null == g ? void 0 : g.length) === 1 && g[0] === s.Requirements.Payable)
                );
          }, [q, y, w, g]),
          (0, t.useEffect)(() => {
            z();
          }, [z]),
          (0, t.useEffect)(() => {
            j();
          }, [j]),
          (0, t.useEffect)(() => {
            E();
          }, [E]));
        let M = (0, t.useMemo)(
          () => ({
            isAffiliateProgramLoading: w,
            requiresActionToJoinProgram: _,
            compliantWithAllUserRequirements: v,
            creatorMetadata: null != u ? u : void 0,
            requirements: null != g ? g : void 0,
            isCurrentUserGroupOwner: q,
            isGroupEligible: null != h ? h : void 0
          }),
          [w, _, v, u, g, q, h]
        );
        return (0, a.jsx)(d.Provider, { value: M, children: i });
      },
      [c.TranslationNamespace.Organization]
    );
    e.s([
      "default",
      0,
      f,
      "useAffiliateProgram",
      0,
      function () {
        return (0, t.useContext)(d);
      }
    ]);
  },
  358763,
  (e) => {
    "use strict";
    var a = e.i(416340),
      t = e.i(296380);
    let s = () => {};
    e.s([
      "default",
      0,
      function (e, i) {
        let {
            debounceDelay: r,
            intersectionObserverThreshold: l,
            resetOncePer: c
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = (0, a.useRef)(!1),
          n = (0, a.useCallback)(
            (e) => {
              !e || o.current || ((o.current = !0), i());
            },
            [i]
          ),
          [d] = (0, t.default)(n, null != r ? r : 250),
          f = (0, a.useCallback)(
            (e) => {
              let [a] = e;
              d(a.isIntersecting);
            },
            [d]
          ),
          u = null != c ? c : "instance";
        ((0, a.useMemo)(() => {
          "callback" === u && (o.current = !1);
        }, [i]),
          (0, a.useEffect)(() => {
            if (!e.current) return s;
            let a = new IntersectionObserver(f, { threshold: null != l ? l : 0.5 });
            return (
              a.observe(e.current),
              () => {
                a.disconnect();
              }
            );
          }, [e, l, f]));
      }
    ]);
  },
  493924,
  938429,
  321623,
  (e) => {
    "use strict";
    var a = e.i(221628),
      t = e.i(199834),
      s = e.i(706442),
      i = e.i(776344),
      r = e.i(462863),
      l = e.i(343885),
      c = e.i(609794),
      o = e.i(57561),
      n = e.i(509747),
      d = e.i(475555),
      f = e.i(538302),
      u = e.i(387707),
      m = e.i(262135),
      g = e.i(240731),
      b = e.i(956923),
      h = e.i(84362),
      p = e.i(214665),
      v = e.i(455506),
      x = e.i(918290),
      _ = e.i(716933),
      k = e.i(347319),
      y = e.i(543657),
      q = e.i(850412),
      S = e.i(103329),
      w = e.i(692706),
      z = e.i(405654),
      j = e.i(891409),
      E = e.i(758060),
      M = e.i(710005),
      C = e.i(495550),
      R = e.i(320429),
      A = e.i(106017),
      N = e.i(821978),
      L = e.i(766389),
      I = e.i(374717),
      T = e.i(756733),
      P = e.i(251697),
      U = e.i(411118),
      O = e.i(839596),
      B = e.i(729733),
      D = e.i(66217),
      W = e.i(148865),
      G = e.i(45512),
      F = e.i(706478),
      K = e.i(166181),
      X = e.i(37474),
      V = e.i(147189),
      J = e.i(105897),
      Q = e.i(123524),
      Z = e.i(752739),
      H = e.i(331105),
      Y = e.i(564908),
      $ = e.i(663412),
      ee = e.i(215887),
      ea = e.i(962803),
      et = e.i(914865),
      es = e.i(818392),
      ei = e.i(173034),
      er = e.i(780078),
      el = e.i(756885),
      ec = e.i(260123),
      eo = e.i(507792),
      en = e.i(850994);
    let ed = {
      secrets: { light: I.default, dark: L.default },
      noPermissions: { light: I.default, dark: L.default },
      notifications: { light: V.default, dark: X.default },
      experiences: { light: eo.default, dark: ec.default },
      shareLinks: { light: ea.default, dark: ee.default },
      eventsAndUpdates: { light: q.default, dark: y.default },
      avatarItem: { light: f.default, dark: d.default },
      models: { light: G.default, dark: W.default },
      plugins: { light: K.default, dark: F.default },
      audio: { light: n.default, dark: o.default },
      decals: { light: x.default, dark: v.default },
      images: { light: j.default, dark: z.default },
      videos: { light: en.default, dark: el.default },
      meshes: { light: D.default, dark: B.default },
      animations: { light: $.default, dark: Y.default },
      textDocuments: { light: k.default, dark: _.default },
      noUsers: { light: p.default, dark: h.default },
      localization: { light: N.default, dark: A.default },
      rightsManager: { light: H.default, dark: Z.default },
      tokens: { light: er.default, dark: ei.default },
      chart: { light: R.default, dark: C.default },
      badge: { light: m.default, dark: u.default },
      apiKeys: { light: c.default, dark: l.default },
      signin: { light: es.default, dark: et.default },
      oAuthApps: { light: Q.default, dark: J.default },
      makeupLooks: { light: P.default, dark: T.default },
      barGraph: { light: b.default, dark: g.default },
      leaderboard: { light: M.default, dark: E.default },
      findPeople: { light: w.default, dark: S.default },
      managedPricing: { light: O.default, dark: U.default }
    };
    e.s(["default", 0, ed], 938429);
    let ef = "".concat(
        "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/assets",
        "/spot_illustrations"
      ),
      eu = {
        small: {
          analytics: "".concat(ef, "/small/analytics.svg"),
          animations: "".concat(ef, "/small/animations.svg"),
          audio: "".concat(ef, "/small/audio.svg"),
          audioLight: "".concat(ef, "/small/audio_light.svg"),
          audioDark: "".concat(ef, "/small/audio_dark.svg"),
          avatarItem: "".concat(ef, "/small/avatar_item.svg"),
          beginSearch: "".concat(ef, "/small/beginSearch.svg"),
          creatorStore: "".concat(ef, "/small/creator_store.svg"),
          decals: "".concat(ef, "/small/decals.svg"),
          events: "".concat(ef, "/small/events.svg"),
          experiences: "".concat(ef, "/small/experiences.svg"),
          images: "".concat(ef, "/small/images.svg"),
          meshes: "".concat(ef, "/small/meshes.svg"),
          models: "".concat(ef, "/small/models.svg"),
          plugins: "".concat(ef, "/small/plugins.svg"),
          script: "".concat(ef, "/small/script.svg"),
          song: "".concat(ef, "/small/song.svg"),
          musicNote: "".concat(ef, "/small/audio_music_note.svg"),
          noUsers: "".concat(ef, "/small/no_users.svg"),
          user: "".concat(ef, "/small/user.svg"),
          users: "".concat(ef, "/small/users.svg"),
          videos: "".concat(ef, "/small/videos.svg"),
          search: "".concat(ef, "/small/search.svg"),
          oof: "".concat(ef, "/small/oof.svg"),
          download: "".concat(ef, "/small/download.svg"),
          attributes: "".concat(ef, "/small/attributes.svg"),
          matchmakingSimulation: "".concat(ef, "/small/matchmaking_simulation.svg")
        },
        large: {
          apiKeys: "".concat(ef, "/large/api_keys.svg"),
          localization: "".concat(ef, "/large/localization.svg"),
          noPermissions: "".concat(ef, "/large/no_permissions.svg"),
          oAuthApps: "".concat(ef, "/large/oauth_apps.svg"),
          rights: "".concat(ef, "/large/rights.svg"),
          secrets: "".concat(ef, "/large/secrets.svg"),
          shareLinks: "".concat(ef, "/large/share_links.svg"),
          configurations: "".concat(ef, "/large/configurations.svg"),
          experienceConfigs: "".concat(ef, "/large/experience_configs.svg"),
          emptyExperiments: "".concat(ef, "/large/empty_experiments.svg")
        }
      };
    e.s(["default", 0, eu], 321623);
    let em = (0, s.makeStyles)()(() => ({
        smallContainer: { margin: "48px 0", padding: "0 24px", width: "100%" },
        largeContainer: { margin: "100px 0", width: "100%" },
        smallText: { gap: 6, maxWidth: 510, marginBottom: 16 },
        largeText: { gap: 6, maxWidth: 480, marginBottom: 24 }
      })),
      eg = (e) => {
        let { illustration: t, size: s = "large" } = e,
          i = t && ed[t];
        if (i) return (0, a.jsx)(r.default, { lightSrc: i.light, darkSrc: i.dark, alt: t });
        let l = t ? eu[s][t] : null;
        return (
          l &&
          (0, a.jsx)("img", {
            height: "large" === s ? 240 : 96,
            width: "large" === s ? 320 : 96,
            src: l,
            alt: t
          })
        );
      },
      eb = (e) => {
        let { children: s, title: r, description: l, size: c = "large", illustration: o } = e,
          {
            classes: { smallContainer: n, largeContainer: d, smallText: f, largeText: u },
            cx: m
          } = em();
        return (0, a.jsxs)(i.default, {
          classes: { root: m({ [n]: "small" === c, [d]: "large" === c }) },
          flexDirection: "column",
          alignItems: "center",
          children: [
            (0, a.jsx)(eg, { illustration: o, size: c }),
            (0, a.jsxs)(i.default, {
              classes: { root: m({ [f]: "small" === c, [u]: "large" === c }) },
              flexDirection: "column",
              alignItems: "center",
              children: [
                (0, a.jsx)(t.Typography, {
                  textAlign: "center",
                  variant: "h4",
                  color: "primary",
                  children: r
                }),
                l &&
                  (0, a.jsx)(t.Typography, { textAlign: "center", color: "secondary", children: l })
              ]
            }),
            s
          ]
        });
      };
    ((eb.displayName = "EmptyState"),
      e.s(["EmptyStateIllustration", 0, eg, "default", 0, eb], 493924));
  },
  756568,
  (e) => {
    "use strict";
    var a = e.i(776344);
    e.s(["Flex", () => a.default]);
  },
  296380,
  (e) => {
    "use strict";
    var a = e.i(416340);
    let t = (e, t) => {
      let s = (0, a.useRef)(null),
        i = (0, a.useCallback)(() => {
          null !== s.current && (clearTimeout(s.current), (s.current = null));
        }, [s]);
      return [
        (0, a.useCallback)(
          function () {
            for (var a = arguments.length, r = Array(a), l = 0; l < a; l++) r[l] = arguments[l];
            (i(),
              (s.current = window.setTimeout(() => {
                (e(...r), (s.current = null));
              }, t)));
          },
          [e, t, i]
        ),
        i,
        s
      ];
    };
    e.s(["default", 0, t, "useDebouncedFunction", 0, t]);
  },
  780880,
  (e) => {
    "use strict";
    var a = e.i(198528);
    e.s(["useQueryParams", () => a.default]);
  },
  127792,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/alert_dark.1spa8ixzmujxs.svg"
    );
  },
  858517,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/alert_light.3o6_fob3g_8zu.svg"
    );
  },
  343885,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/api_key_dark.1k1v6y4zm3j28.svg"
    );
  },
  609794,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/api_key_light.06t4q4202-77s.svg"
    );
  },
  57561,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/audio_dark.16razgllw2ska.svg"
    );
  },
  509747,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/audio_light.3ra073_18pbj-.svg"
    );
  },
  475555,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/avatar_setup_dark.0orjsl7i089hc.svg"
    );
  },
  538302,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/avatar_setup_light.32r86q54d7kuh.svg"
    );
  },
  387707,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/badge_dark.3m45r-3favo3f.svg"
    );
  },
  262135,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/badge_light.3fxfvj8ub7utb.svg"
    );
  },
  240731,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/bar_graph_dark.01vf9sty52re2.svg"
    );
  },
  956923,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/bar_graph_light.1iiixo_d8ur81.svg"
    );
  },
  84362,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/collaborators_dark.30gxkwssilacj.svg"
    );
  },
  214665,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/collaborators_light.3x7fovqhay1x5.svg"
    );
  },
  455506,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/decals_dark.2jpntsljojhzc.svg"
    );
  },
  918290,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/decals_light.16_gp3tnuc5p_.svg"
    );
  },
  716933,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/envelope_dark.2-ouf9shuihi4.svg"
    );
  },
  347319,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/envelope_light.1me9hqye66z7w.svg"
    );
  },
  543657,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/event_calendar_dark.3lx4_kse68by8.svg"
    );
  },
  850412,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/event_calendar_light.1pq-t84d90ty1.svg"
    );
  },
  103329,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/find_people_dark.220q6_cs04hcq.svg"
    );
  },
  692706,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/find_people_light.1gkb3pmwc8s2n.svg"
    );
  },
  405654,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/image_dark.2giew28wx4z86.svg"
    );
  },
  891409,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/image_light.0ouq8tcgpznz7.svg"
    );
  },
  758060,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/leaderboard_dark.301ypg94lbxpv.svg"
    );
  },
  710005,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/leaderboard_light.43sjz_ibwkiq_.svg"
    );
  },
  495550,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/line_chart_dark.0k7qf3mhepo6s.svg"
    );
  },
  320429,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/line_chart_light.049gcvvmai0ax.svg"
    );
  },
  106017,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/localization_dark.1ia7wat2mwyfi.svg"
    );
  },
  821978,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/localization_light.2jss_xvx2fuq0.svg"
    );
  },
  766389,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/lockSecrets_dark.0na6naigcbnkj.svg"
    );
  },
  374717,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/lockSecrets_light.0rzix2i1i13lt.svg"
    );
  },
  756733,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/makeup_look_dark.26-5-yn8598c9.svg"
    );
  },
  251697,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/makeup_look_light.0rc05t5n5al4m.svg"
    );
  },
  411118,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/managed_pricing_dark.2zdkf2-ctboa2.svg"
    );
  },
  839596,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/managed_pricing_light.0sioq_hruq1qp.svg"
    );
  },
  729733,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/meshes_dark.2tlm50ns1pq5o.svg"
    );
  },
  66217,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/meshes_light.36wh96flp2o3r.svg"
    );
  },
  148865,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/models_dark.30suu5lj5-ua5.svg"
    );
  },
  45512,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/models_light.0kiw6k3ejw-rn.svg"
    );
  },
  706478,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/models_plugins_parts_dark.3jp6jislnsqf8.svg"
    );
  },
  166181,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/models_plugins_parts_light.2nj1xhv0bfg_u.svg"
    );
  },
  37474,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/notifications_dark.2l_rf34_xo6o8.svg"
    );
  },
  147189,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/notifications_light.3p-b4rzvwwfmj.svg"
    );
  },
  105897,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/oauth_dark.42jv8--11_1i0.svg"
    );
  },
  123524,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/oauth_light.17vwiebwrn8ox.svg"
    );
  },
  752739,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/rights_manager_dark.0m7ca17sdbgim.svg"
    );
  },
  331105,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/rights_manager_light.1moaenz1cbft0.svg"
    );
  },
  564908,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/run_dark.1sun4tvxh_arh.svg"
    );
  },
  663412,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/run_light.29f-3jyw910_v.svg"
    );
  },
  215887,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/shareLinks_dark.1l5fwuv6cgzmy.svg"
    );
  },
  962803,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/shareLinks_light.116igf-ldibmu.svg"
    );
  },
  914865,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/signin_dark.1k_gzn1-5q0ca.svg"
    );
  },
  818392,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/signin_light.1o1-jng_ct0y2.svg"
    );
  },
  173034,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/token_dark.2qy4jy9ffjhax.svg"
    );
  },
  780078,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/token_light.2xc00j5zp1q8_.svg"
    );
  },
  756885,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/video_dark.2-gdpodjtsjj3.svg"
    );
  },
  260123,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/video_game_dark.0tuxtkttj8gcu.svg"
    );
  },
  507792,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/video_game_light.3l155817mjupj.svg"
    );
  },
  850994,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/694c9e720089ff0949f919cb1b79f9a3aefeb4fa/_next/static/media/video_light.1fum3vlxctp7w.svg"
    );
  },
  270092,
  (e) => {
    "use strict";
    var a = e.i(18046),
      t = e.i(823981),
      s = e.i(688702),
      i = e.i(197649),
      r = e.i(416340);
    let l = { Small: "XSmall", Medium: "Small", Large: "Medium" },
      c = {
        Small: ["height-600", "text-label-small"],
        Medium: ["height-800", "text-label-medium"],
        Large: ["height-1000", "text-label-medium"]
      },
      o = {
        Small: "padding-left-small",
        Medium: "padding-left-medium",
        Large: "padding-left-large"
      },
      n = {
        Small: "padding-left-small",
        Medium: "padding-left-medium",
        Large: "padding-left-medium"
      },
      d = {
        Small: "padding-right-small",
        Medium: "padding-right-medium",
        Large: "padding-right-large"
      },
      f = {
        Small: "padding-right-small",
        Medium: "padding-right-medium",
        Large: "padding-right-medium"
      },
      u = {
        Small: "padding-left-xsmall",
        Medium: "padding-left-[var(--size-150)]",
        Large: "padding-left-small"
      },
      m = {
        Small: "padding-right-[var(--size-150)]",
        Medium: "padding-right-small",
        Large: "padding-right-[var(--size-250)]"
      },
      g = { Standard: "bg-shift-300", Utility: "bg-none" },
      b = {
        Small: "size-[var(--icon-size-xsmall)]",
        Medium: "size-[var(--icon-size-small)]",
        Large: "size-[var(--icon-size-medium)]"
      },
      h = (e) => {
        let { iconName: a, node: t, size: c } = e;
        return null != a
          ? r.default.createElement(s.Icon, { name: a, size: l[c] })
          : null != t
            ? r.default.createElement(
                "span",
                {
                  className: (0, i.default)(
                    "inline-flex items-center justify-center shrink-0",
                    b[c]
                  )
                },
                t
              )
            : null;
      },
      p = (0, r.forwardRef)((e, s) => {
        let {
            className: l,
            style: b,
            text: p,
            isDisabled: v = !1,
            size: x = "Medium",
            variant: _ = "Standard",
            leadingIconName: k,
            leadingIconNode: y,
            trailingIconName: q,
            trailingIconNode: S,
            ...w
          } = e,
          z = null != k || null != y,
          j = null != q || null != S,
          E = (0, i.default)(
            v ? t.disabledOpacity : [a.interactable, "cursor-pointer"],
            "relative flex justify-center items-center radius-circle stroke-none",
            z ? n[x] : o[x],
            j ? f[x] : d[x],
            c[x],
            l
          ),
          M = r.default.createElement(
            r.default.Fragment,
            null,
            r.default.createElement(a.StateLayer, null),
            r.default.createElement(h, { iconName: k, node: y, size: x }),
            r.default.createElement(
              "span",
              {
                className: (0, i.default)(
                  "padding-y-xsmall text-no-wrap text-truncate-end",
                  z && u[x],
                  j && m[x]
                )
              },
              p
            ),
            r.default.createElement(h, { iconName: q, node: S, size: x })
          ),
          C = { textDecoration: "none", ...b };
        if ("a" === w.as) {
          let { as: e, href: a, ...t } = w;
          return r.default.createElement(
            "a",
            {
              ref: s,
              ...t,
              "aria-disabled": v,
              href: v ? void 0 : a,
              className: (0, i.default)(E, g[_], "content-action-utility"),
              style: C
            },
            M
          );
        }
        let { as: R, isChecked: A, onCheckedChange: N, ...L } = w;
        return r.default.createElement(
          "button",
          {
            ref: s,
            type: "button",
            ...L,
            className: (0, i.default)(
              A ? "bg-inverse-surface-0" : g[_],
              A ? "content-inverse-emphasis" : "content-action-utility",
              E
            ),
            style: C,
            "aria-pressed": A,
            disabled: v,
            onClick: null == N ? void 0 : () => N(!A)
          },
          M
        );
      });
    e.s(["Chip", 0, p]);
  },
  942625,
  (e) => {
    "use strict";
    var a = e.i(197649),
      t = e.i(416340);
    let s = (0, t.forwardRef)((e, s) => {
      let {
          className: i,
          style: r,
          orientation: l = "horizontal",
          variant: c = "Standard",
          ...o
        } = e,
        n = "vertical" === l,
        d = {};
      return (
        n || "Inset" !== c
          ? n || "InsetLeft" !== c
            ? n || "InsetRight" !== c || (d = { marginRight: "var(--padding-xlarge)" })
            : (d = { marginLeft: "var(--padding-xlarge)" })
          : (d = { marginLeft: "var(--padding-xlarge)", marginRight: "var(--padding-xlarge)" }),
        t.default.createElement("div", {
          ref: s,
          ...o,
          role: "separator",
          "data-orientation": l,
          "aria-orientation": l,
          style: {
            borderRightWidth: 0,
            borderBottomWidth: 0,
            boxSizing: "border-box",
            borderStyle: "solid",
            ...(n
              ? {
                  height: "100%",
                  width: 0,
                  borderLeftWidth: "var(--stroke-standard)",
                  borderTopWidth: 0
                }
              : "Thick" === c
                ? {
                    height: "var(--size-250)",
                    borderTop: "var(--stroke-standard)",
                    borderLeftWidth: 0,
                    background: "var(--color-common-heavydivider, rgba(0, 0, 0, 0.50))"
                  }
                : { height: 0, borderTopWidth: "var(--stroke-standard)", borderLeftWidth: 0 }),
            ...d,
            ...r
          },
          className: (0, a.default)("stroke-default self-stretch", i)
        })
      );
    });
    ((s.displayName = "Divider"), e.s(["Divider", 0, s]));
  },
  631719,
  (e) => {
    "use strict";
    var a = e.i(18046),
      t = e.i(823981),
      s = e.i(197649),
      i = e.i(416340),
      r = e.i(23342);
    let l = { Large: "size-1200", Medium: "size-1000", Small: "size-800", XSmall: "size-600" },
      c = { XSmall: "size-400", Small: "size-500", Medium: "size-600", Large: "size-700" },
      o = {
        Large: { circular: "radius-circle", square: "radius-medium" },
        Medium: { circular: "radius-circle", square: "radius-medium" },
        Small: { circular: "radius-circle", square: "radius-medium" },
        XSmall: { circular: "radius-circle", square: "radius-small" }
      },
      n = {
        Emphasis: "bg-action-emphasis",
        Standard: "bg-action-standard",
        Alert: "bg-action-alert",
        Utility: "bg-action-link",
        OverMedia: "bg-over-media-0"
      },
      d = {
        Emphasis: "bg-action-standard",
        Standard: "bg-action-standard",
        Alert: "bg-action-standard",
        Utility: "bg-action-link",
        OverMedia: "bg-over-media-0"
      },
      f = {
        Emphasis: "bg-action-emphasis",
        Standard: "bg-action-standard",
        Alert: "bg-action-standard",
        Utility: "bg-shift-300",
        OverMedia: "bg-over-media-0"
      },
      u = {
        Default: {
          Emphasis: "content-action-emphasis",
          Standard: "content-action-standard",
          Alert: "content-action-alert",
          Utility: "content-emphasis",
          OverMedia: "content-emphasis"
        },
        Inverse: {
          Emphasis: "content-inverse-action-emphasis",
          Standard: "content-inverse-action-standard",
          Alert: "content-inverse-action-alert",
          Utility: "content-inverse-emphasis",
          OverMedia: "content-inverse-emphasis"
        }
      },
      m = {
        Default: {
          Emphasis: "content-action-standard",
          Standard: "content-action-standard",
          Alert: "content-action-standard",
          Utility: "content-emphasis",
          OverMedia: "content-emphasis"
        },
        Inverse: {
          Emphasis: "content-inverse-action-standard",
          Standard: "content-inverse-action-standard",
          Alert: "content-inverse-action-standard",
          Utility: "content-inverse-emphasis",
          OverMedia: "content-inverse-emphasis"
        }
      },
      g = (0, i.forwardRef)((e, g) => {
        let b,
          {
            className: h,
            icon: p,
            ariaLabel: v,
            isDisabled: x = !1,
            isCircular: _ = !1,
            isSelected: k = !1,
            size: y = "Large",
            variant: q = "Emphasis",
            iconColor: S = "Default",
            asChild: w,
            children: z,
            ...j
          } = e;
        b = x ? d[q] : k ? f[q] : n[q];
        let E = (0, s.default)(
            "foundation-web-icon-button",
            x ? t.disabledOpacity : [a.interactable, "cursor-pointer"],
            "relative flex items-center justify-center padding-none stroke-none select-none",
            l[y],
            o[y][_ ? "circular" : "square"],
            b,
            h
          ),
          M = i.default.createElement(
            i.default.Fragment,
            null,
            i.default.createElement(a.StateLayer, null),
            i.default.createElement("span", {
              className: (0, s.default)("icon", p, c[y], x ? m[S][q] : u[S][q])
            })
          );
        if (w) {
          let { as: e, ...a } = j,
            t = i.default.Children.only(z);
          return i.default.createElement(
            r.Slot,
            { ref: g, ...a, className: E, "aria-label": v, "aria-disabled": x || void 0 },
            i.default.cloneElement(t, {}, M)
          );
        }
        if ("a" === j.as) {
          let { as: e, href: a, ...t } = j;
          return i.default.createElement(
            "a",
            {
              ref: g,
              ...t,
              "aria-label": v,
              "aria-disabled": x,
              href: x ? void 0 : a,
              className: E
            },
            M
          );
        }
        let { as: C, ...R } = j;
        return i.default.createElement(
          "button",
          { ref: g, type: "button", ...R, "aria-label": v, disabled: x, className: E },
          M
        );
      });
    e.s(["IconButton", 0, g]);
  },
  514455,
  (e) => {
    "use strict";
    var a = e.i(865800),
      t = e.i(416340),
      s = e.i(614515),
      i = e.i(993807),
      r = e.i(962560),
      l = e.i(273589),
      c = e.i(42569),
      o = e.i(696180),
      n = e.i(221628),
      d = e.i(972455),
      f = e.i(963320);
    function u(e) {
      return (0, l.g)("MuiAlertTitle", e);
    }
    (0, o.g)("MuiAlertTitle", ["root"]);
    let m = ["className"],
      g = (0, c.s)(d.T, {
        name: "MuiAlertTitle",
        slot: "Root",
        overridesResolver: (e, a) => a.root
      })((e) => {
        let { theme: a } = e;
        return { fontWeight: a.typography.fontWeightMedium, marginTop: -2 };
      }),
      b = t.forwardRef(function (e, a) {
        let t = (0, f.u)({ props: e, name: "MuiAlertTitle" }),
          { className: s } = t,
          i = (0, l._)(t, m),
          o = ((e) => {
            let { classes: a } = e;
            return (0, c.a)({ root: ["root"] }, u, a);
          })(t);
        return (0, n.jsx)(
          g,
          (0, r._)(
            {
              gutterBottom: !0,
              component: "div",
              ownerState: t,
              ref: a,
              className: (0, c.c)(o.root, s)
            },
            i
          )
        );
      });
    var h = (0, s.default)({ name: "AlertTitle" })(function (e) {
        return { root: (0, a._)((0, a._)({}, e.typography.alertTitle), { margin: "-1px 0" }) };
      }),
      p = (0, t.forwardRef)(function (e, s) {
        var r = e.classes,
          l = e.className,
          c = (0, a.a)(e, ["classes", "className"]),
          o = h(void 0, { props: { classes: (0, i.default)(r, l) } });
        return t.default.createElement(b, (0, a._)({}, c, { classes: o.classes, ref: s }));
      });
    e.s(["AlertTitle", 0, p], 514455);
  },
  27281,
  (e) => {
    "use strict";
    var a = e.i(437272);
    e.s(["NavigateNextIcon", () => a.N]);
  },
  854705,
  (e) => {
    "use strict";
    var a = e.i(865800),
      t = e.i(416340),
      s = e.i(614515),
      i = e.i(993807),
      r = e.i(696180),
      l = e.i(273589),
      c = e.i(962560),
      o = e.i(42569),
      n = e.i(576881),
      d = e.i(751498),
      f = e.i(221628),
      u = e.i(219224),
      m = e.i(963320),
      g = e.i(275966);
    e.i(197094);
    var b = (0, d.c)(
        (0, f.jsx)("path", {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        }),
        "RadioButtonUnchecked"
      ),
      h = (0, d.c)(
        (0, f.jsx)("path", {
          d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
        }),
        "RadioButtonChecked"
      );
    let p = (0, o.s)("span", { name: "MuiRadioButtonIcon", shouldForwardProp: o.r })({
        position: "relative",
        display: "flex"
      }),
      v = (0, o.s)(b, { name: "MuiRadioButtonIcon" })({ transform: "scale(1)" }),
      x = (0, o.s)(h, { name: "MuiRadioButtonIcon" })((e) => {
        let { theme: a, ownerState: t } = e;
        return (0, c._)(
          {
            left: 0,
            position: "absolute",
            transform: "scale(0)",
            transition: a.transitions.create("transform", {
              easing: a.transitions.easing.easeIn,
              duration: a.transitions.duration.shortest
            })
          },
          t.checked && {
            transform: "scale(1)",
            transition: a.transitions.create("transform", {
              easing: a.transitions.easing.easeOut,
              duration: a.transitions.duration.shortest
            })
          }
        );
      });
    function _(e) {
      let { checked: a = !1, classes: t = {}, fontSize: s } = e,
        i = (0, c._)({}, e, { checked: a });
      return (0, f.jsxs)(p, {
        className: t.root,
        ownerState: i,
        children: [
          (0, f.jsx)(v, { fontSize: s, className: t.background, ownerState: i }),
          (0, f.jsx)(x, { fontSize: s, className: t.dot, ownerState: i })
        ]
      });
    }
    function k(e) {
      return (0, l.g)("MuiRadio", e);
    }
    var y = (0, r.g)("MuiRadio", [
      "root",
      "checked",
      "disabled",
      "colorPrimary",
      "colorSecondary",
      "sizeSmall"
    ]);
    let q = ["checked", "checkedIcon", "color", "icon", "name", "onChange", "size", "className"],
      S = (0, o.s)(n.S, {
        shouldForwardProp: (e) => (0, o.r)(e) || "classes" === e,
        name: "MuiRadio",
        slot: "Root",
        overridesResolver: (e, a) => {
          let { ownerState: t } = e;
          return [
            a.root,
            "medium" !== t.size && a["size".concat((0, l.a)(t.size))],
            a["color".concat((0, l.a)(t.color))]
          ];
        }
      })((e) => {
        let { theme: a, ownerState: t } = e;
        return (0, c._)(
          { color: (a.vars || a).palette.text.secondary },
          !t.disableRipple && {
            "&:hover": {
              backgroundColor: a.vars
                ? "rgba("
                    .concat(
                      "default" === t.color
                        ? a.vars.palette.action.activeChannel
                        : a.vars.palette[t.color].mainChannel,
                      " / "
                    )
                    .concat(a.vars.palette.action.hoverOpacity, ")")
                : (0, l.b)(
                    "default" === t.color ? a.palette.action.active : a.palette[t.color].main,
                    a.palette.action.hoverOpacity
                  ),
              "@media (hover: none)": { backgroundColor: "transparent" }
            }
          },
          "default" !== t.color && {
            ["&.".concat(y.checked)]: { color: (a.vars || a).palette[t.color].main }
          },
          { ["&.".concat(y.disabled)]: { color: (a.vars || a).palette.action.disabled } }
        );
      }),
      w = (0, f.jsx)(_, { checked: !0 }),
      z = (0, f.jsx)(_, {}),
      j = t.forwardRef(function (e, a) {
        var s, i, r, n;
        let d = (0, m.u)({ props: e, name: "MuiRadio" }),
          {
            checked: b,
            checkedIcon: h = w,
            color: p = "primary",
            icon: v = z,
            name: x,
            onChange: _,
            size: y = "medium",
            className: j
          } = d,
          E = (0, l._)(d, q),
          M = (0, c._)({}, d, { color: p, size: y }),
          C = ((e) => {
            let { classes: a, color: t, size: s } = e,
              i = {
                root: [
                  "root",
                  "color".concat((0, l.a)(t)),
                  "medium" !== s && "size".concat((0, l.a)(s))
                ]
              };
            return (0, c._)({}, a, (0, o.a)(i, k, a));
          })(M),
          R = t.useContext(u.R),
          A = b,
          N = (0, g.c)(_, R && R.onChange),
          L = x;
        return (
          R &&
            (void 0 === A &&
              ((r = R.value),
              (A =
                "object" == typeof (n = d.value) && null !== n
                  ? r === n
                  : String(r) === String(n))),
            void 0 === L && (L = R.name)),
          (0, f.jsx)(
            S,
            (0, c._)(
              {
                type: "radio",
                icon: t.cloneElement(v, { fontSize: null != (s = z.props.fontSize) ? s : y }),
                checkedIcon: t.cloneElement(h, {
                  fontSize: null != (i = w.props.fontSize) ? i : y
                }),
                ownerState: M,
                classes: C,
                name: L,
                checked: A,
                onChange: N,
                ref: a,
                className: (0, o.c)(C.root, j)
              },
              E
            )
          )
        );
      });
    var E = (0, s.default)({ name: "Radio" })(function (e) {
        var a, t;
        return {
          root: { color: e.palette.states.active },
          colorPrimary:
            (((a = { color: e.palette.content.muted })["&.".concat(y.checked)] = {
              color: e.palette.actionV2.primaryBrand.fill
            }),
            a),
          colorSecondary: { color: e.palette.actionV2.primary.fill },
          disabled:
            (((t = { color: e.palette.states.disabled })[
              "&.".concat(y.colorPrimary, ".").concat(y.checked)
            ] = { color: e.palette.states.disabled }),
            t)
        };
      }),
      M = (0, t.forwardRef)(function (e, s) {
        var r = e.classes,
          l = e.color,
          c = e.inputProps,
          o = e["aria-label"],
          n = e.className,
          d = (0, a.a)(e, ["classes", "color", "inputProps", "aria-label", "className"]),
          f = E(void 0, { props: { classes: (0, i.default)(r, n) } });
        return t.default.createElement(
          j,
          (0, a._)({}, d, {
            classes: f.classes,
            color: void 0 === l ? "primary" : l,
            ref: s,
            inputProps: (0, a._)({ "aria-label": o }, c)
          })
        );
      });
    e.s(["Radio", 0, M], 854705);
  },
  219224,
  (e) => {
    "use strict";
    let a = e.i(416340).createContext(void 0);
    e.s(["R", 0, a]);
  },
  774807,
  (e) => {
    "use strict";
    var a = e.i(833172);
    e.s(["ArrowDownwardIcon", () => a.ArrowDownward]);
  },
  558826,
  (e) => {
    "use strict";
    var a = e.i(833172);
    e.s(["ArrowUpwardIcon", () => a.ArrowUpward]);
  },
  93235,
  (e) => {
    "use strict";
    var a = e.i(833172);
    e.s(["NavigateBeforeIcon", () => a.NavigateBefore]);
  },
  169923,
  (e) => {
    "use strict";
    e.s([
      "v",
      0,
      {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px"
      }
    ]);
  }
]);

//# debugId=cf0f64c4-aa0b-509a-5054-9ad3ce739f9e
//# sourceMappingURL=03a8kp4ss6ohx.js.map
