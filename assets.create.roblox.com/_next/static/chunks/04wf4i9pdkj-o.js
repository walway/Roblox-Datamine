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
    n && ((e._debugIds || (e._debugIds = {}))[n] = "3d472146-a46a-0db9-8670-e054ab2e0d2e");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  493924,
  938429,
  321623,
  (e) => {
    "use strict";
    var t = e.i(221628),
      a = e.i(199834),
      s = e.i(706442),
      l = e.i(776344),
      c = e.i(462863),
      i = e.i(343885),
      d = e.i(609794),
      r = e.i(57561),
      o = e.i(509747),
      n = e.i(475555),
      m = e.i(538302),
      u = e.i(387707),
      g = e.i(262135),
      b = e.i(240731),
      p = e.i(956923),
      h = e.i(84362),
      f = e.i(214665),
      x = e.i(455506),
      v = e.i(918290),
      _ = e.i(716933),
      k = e.i(347319),
      y = e.i(543657),
      S = e.i(850412),
      q = e.i(103329),
      N = e.i(692706),
      w = e.i(405654),
      j = e.i(891409),
      E = e.i(758060),
      z = e.i(710005),
      M = e.i(495550),
      R = e.i(320429),
      C = e.i(106017),
      T = e.i(821978),
      L = e.i(766389),
      I = e.i(374717),
      P = e.i(756733),
      A = e.i(251697),
      O = e.i(411118),
      U = e.i(839596),
      B = e.i(729733),
      D = e.i(66217),
      X = e.i(148865),
      F = e.i(45512),
      W = e.i(706478),
      K = e.i(166181),
      V = e.i(37474),
      H = e.i(147189),
      G = e.i(105897),
      Y = e.i(123524),
      Z = e.i(752739),
      J = e.i(331105),
      Q = e.i(564908),
      $ = e.i(663412),
      ee = e.i(215887),
      et = e.i(962803),
      ea = e.i(914865),
      es = e.i(818392),
      el = e.i(173034),
      ec = e.i(780078),
      ei = e.i(756885),
      ed = e.i(260123),
      er = e.i(507792),
      eo = e.i(850994);
    let en = {
      secrets: { light: I.default, dark: L.default },
      noPermissions: { light: I.default, dark: L.default },
      notifications: { light: H.default, dark: V.default },
      experiences: { light: er.default, dark: ed.default },
      shareLinks: { light: et.default, dark: ee.default },
      eventsAndUpdates: { light: S.default, dark: y.default },
      avatarItem: { light: m.default, dark: n.default },
      models: { light: F.default, dark: X.default },
      plugins: { light: K.default, dark: W.default },
      audio: { light: o.default, dark: r.default },
      decals: { light: v.default, dark: x.default },
      images: { light: j.default, dark: w.default },
      videos: { light: eo.default, dark: ei.default },
      meshes: { light: D.default, dark: B.default },
      animations: { light: $.default, dark: Q.default },
      textDocuments: { light: k.default, dark: _.default },
      noUsers: { light: f.default, dark: h.default },
      localization: { light: T.default, dark: C.default },
      rightsManager: { light: J.default, dark: Z.default },
      tokens: { light: ec.default, dark: el.default },
      chart: { light: R.default, dark: M.default },
      badge: { light: g.default, dark: u.default },
      apiKeys: { light: d.default, dark: i.default },
      signin: { light: es.default, dark: ea.default },
      oAuthApps: { light: Y.default, dark: G.default },
      makeupLooks: { light: A.default, dark: P.default },
      barGraph: { light: p.default, dark: b.default },
      leaderboard: { light: z.default, dark: E.default },
      findPeople: { light: N.default, dark: q.default },
      managedPricing: { light: U.default, dark: O.default }
    };
    e.s(["default", 0, en], 938429);
    let em = "".concat(
        "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/assets",
        "/spot_illustrations"
      ),
      eu = {
        small: {
          analytics: "".concat(em, "/small/analytics.svg"),
          animations: "".concat(em, "/small/animations.svg"),
          audio: "".concat(em, "/small/audio.svg"),
          audioLight: "".concat(em, "/small/audio_light.svg"),
          audioDark: "".concat(em, "/small/audio_dark.svg"),
          avatarItem: "".concat(em, "/small/avatar_item.svg"),
          beginSearch: "".concat(em, "/small/beginSearch.svg"),
          creatorStore: "".concat(em, "/small/creator_store.svg"),
          decals: "".concat(em, "/small/decals.svg"),
          events: "".concat(em, "/small/events.svg"),
          experiences: "".concat(em, "/small/experiences.svg"),
          images: "".concat(em, "/small/images.svg"),
          meshes: "".concat(em, "/small/meshes.svg"),
          models: "".concat(em, "/small/models.svg"),
          plugins: "".concat(em, "/small/plugins.svg"),
          script: "".concat(em, "/small/script.svg"),
          song: "".concat(em, "/small/song.svg"),
          musicNote: "".concat(em, "/small/audio_music_note.svg"),
          noUsers: "".concat(em, "/small/no_users.svg"),
          user: "".concat(em, "/small/user.svg"),
          users: "".concat(em, "/small/users.svg"),
          videos: "".concat(em, "/small/videos.svg"),
          search: "".concat(em, "/small/search.svg"),
          oof: "".concat(em, "/small/oof.svg"),
          download: "".concat(em, "/small/download.svg"),
          attributes: "".concat(em, "/small/attributes.svg"),
          matchmakingSimulation: "".concat(em, "/small/matchmaking_simulation.svg")
        },
        large: {
          apiKeys: "".concat(em, "/large/api_keys.svg"),
          localization: "".concat(em, "/large/localization.svg"),
          noPermissions: "".concat(em, "/large/no_permissions.svg"),
          oAuthApps: "".concat(em, "/large/oauth_apps.svg"),
          rights: "".concat(em, "/large/rights.svg"),
          secrets: "".concat(em, "/large/secrets.svg"),
          shareLinks: "".concat(em, "/large/share_links.svg"),
          configurations: "".concat(em, "/large/configurations.svg"),
          experienceConfigs: "".concat(em, "/large/experience_configs.svg"),
          emptyExperiments: "".concat(em, "/large/empty_experiments.svg")
        }
      };
    e.s(["default", 0, eu], 321623);
    let eg = (0, s.makeStyles)()(() => ({
        smallContainer: { margin: "48px 0", padding: "0 24px", width: "100%" },
        largeContainer: { margin: "100px 0", width: "100%" },
        smallText: { gap: 6, maxWidth: 510, marginBottom: 16 },
        largeText: { gap: 6, maxWidth: 480, marginBottom: 24 }
      })),
      eb = (e) => {
        let { illustration: a, size: s = "large" } = e,
          l = a && en[a];
        if (l) return (0, t.jsx)(c.default, { lightSrc: l.light, darkSrc: l.dark, alt: a });
        let i = a ? eu[s][a] : null;
        return (
          i &&
          (0, t.jsx)("img", {
            height: "large" === s ? 240 : 96,
            width: "large" === s ? 320 : 96,
            src: i,
            alt: a
          })
        );
      },
      ep = (e) => {
        let { children: s, title: c, description: i, size: d = "large", illustration: r } = e,
          {
            classes: { smallContainer: o, largeContainer: n, smallText: m, largeText: u },
            cx: g
          } = eg();
        return (0, t.jsxs)(l.default, {
          classes: { root: g({ [o]: "small" === d, [n]: "large" === d }) },
          flexDirection: "column",
          alignItems: "center",
          children: [
            (0, t.jsx)(eb, { illustration: r, size: d }),
            (0, t.jsxs)(l.default, {
              classes: { root: g({ [m]: "small" === d, [u]: "large" === d }) },
              flexDirection: "column",
              alignItems: "center",
              children: [
                (0, t.jsx)(a.Typography, {
                  textAlign: "center",
                  variant: "h4",
                  color: "primary",
                  children: c
                }),
                i &&
                  (0, t.jsx)(a.Typography, { textAlign: "center", color: "secondary", children: i })
              ]
            }),
            s
          ]
        });
      };
    ((ep.displayName = "EmptyState"),
      e.s(["EmptyStateIllustration", 0, eb, "default", 0, ep], 493924));
  },
  169525,
  (e) => {
    "use strict";
    var t = e.i(416340),
      a = e.i(78892),
      s = e.i(723570),
      l = (e) => {
        var l, i, d;
        let r,
          o,
          { present: n, children: m } = e,
          u = (function (e) {
            var a, l;
            let [i, d] = t.useState(),
              r = t.useRef(null),
              o = t.useRef(e),
              n = t.useRef("none"),
              [m, u] =
                ((a = e ? "mounted" : "unmounted"),
                (l = {
                  mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
                  unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
                  unmounted: { MOUNT: "mounted" }
                }),
                t.useReducer((e, t) => {
                  let a = l[e][t];
                  return null != a ? a : e;
                }, a));
            return (
              t.useEffect(() => {
                let e = c(r.current);
                n.current = "mounted" === m ? e : "none";
              }, [m]),
              (0, s.useLayoutEffect)(() => {
                let t = r.current,
                  a = o.current;
                if (a !== e) {
                  let s = n.current,
                    l = c(t);
                  (e
                    ? u("MOUNT")
                    : "none" === l || (null == t ? void 0 : t.display) === "none"
                      ? u("UNMOUNT")
                      : a && s !== l
                        ? u("ANIMATION_OUT")
                        : u("UNMOUNT"),
                    (o.current = e));
                }
              }, [e, u]),
              (0, s.useLayoutEffect)(() => {
                if (i) {
                  var e;
                  let t,
                    a = null != (e = i.ownerDocument.defaultView) ? e : window,
                    s = (e) => {
                      let s = c(r.current).includes(CSS.escape(e.animationName));
                      if (e.target === i && s && (u("ANIMATION_END"), !o.current)) {
                        let e = i.style.animationFillMode;
                        ((i.style.animationFillMode = "forwards"),
                          (t = a.setTimeout(() => {
                            "forwards" === i.style.animationFillMode &&
                              (i.style.animationFillMode = e);
                          })));
                      }
                    },
                    l = (e) => {
                      e.target === i && (n.current = c(r.current));
                    };
                  return (
                    i.addEventListener("animationstart", l),
                    i.addEventListener("animationcancel", s),
                    i.addEventListener("animationend", s),
                    () => {
                      (a.clearTimeout(t),
                        i.removeEventListener("animationstart", l),
                        i.removeEventListener("animationcancel", s),
                        i.removeEventListener("animationend", s));
                    }
                  );
                }
                u("ANIMATION_END");
              }, [i, u]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(m),
                ref: t.useCallback((e) => {
                  ((r.current = e ? getComputedStyle(e) : null), d(e));
                }, [])
              }
            );
          })(n),
          g = "function" == typeof m ? m({ present: u.isPresent }) : t.Children.only(m),
          b = (0, a.useComposedRefs)(
            u.ref,
            (o =
              (r =
                null == (i = Object.getOwnPropertyDescriptor((l = g).props, "ref"))
                  ? void 0
                  : i.get) &&
              "isReactWarning" in r &&
              r.isReactWarning)
              ? l.ref
              : (o =
                    (r =
                      null == (d = Object.getOwnPropertyDescriptor(l, "ref")) ? void 0 : d.get) &&
                    "isReactWarning" in r &&
                    r.isReactWarning)
                ? l.props.ref
                : l.props.ref || l.ref
          );
        return "function" == typeof m || u.isPresent ? t.cloneElement(g, { ref: b }) : null;
      };
    function c(e) {
      return (null == e ? void 0 : e.animationName) || "none";
    }
    ((l.displayName = "Presence"), e.s(["Presence", 0, l]));
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
  343885,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/api_key_dark.1k1v6y4zm3j28.svg"
    );
  },
  609794,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/api_key_light.06t4q4202-77s.svg"
    );
  },
  57561,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/audio_dark.16razgllw2ska.svg"
    );
  },
  509747,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/audio_light.3ra073_18pbj-.svg"
    );
  },
  475555,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/avatar_setup_dark.0orjsl7i089hc.svg"
    );
  },
  538302,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/avatar_setup_light.32r86q54d7kuh.svg"
    );
  },
  387707,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/badge_dark.3m45r-3favo3f.svg"
    );
  },
  262135,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/badge_light.3fxfvj8ub7utb.svg"
    );
  },
  240731,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/bar_graph_dark.01vf9sty52re2.svg"
    );
  },
  956923,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/bar_graph_light.1iiixo_d8ur81.svg"
    );
  },
  84362,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/collaborators_dark.30gxkwssilacj.svg"
    );
  },
  214665,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/collaborators_light.3x7fovqhay1x5.svg"
    );
  },
  455506,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/decals_dark.2jpntsljojhzc.svg"
    );
  },
  918290,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/decals_light.16_gp3tnuc5p_.svg"
    );
  },
  716933,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/envelope_dark.2-ouf9shuihi4.svg"
    );
  },
  347319,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/envelope_light.1me9hqye66z7w.svg"
    );
  },
  543657,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/event_calendar_dark.3lx4_kse68by8.svg"
    );
  },
  850412,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/event_calendar_light.1pq-t84d90ty1.svg"
    );
  },
  103329,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/find_people_dark.220q6_cs04hcq.svg"
    );
  },
  692706,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/find_people_light.1gkb3pmwc8s2n.svg"
    );
  },
  405654,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/image_dark.2giew28wx4z86.svg"
    );
  },
  891409,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/image_light.0ouq8tcgpznz7.svg"
    );
  },
  758060,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/leaderboard_dark.301ypg94lbxpv.svg"
    );
  },
  710005,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/leaderboard_light.43sjz_ibwkiq_.svg"
    );
  },
  495550,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/line_chart_dark.0k7qf3mhepo6s.svg"
    );
  },
  320429,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/line_chart_light.049gcvvmai0ax.svg"
    );
  },
  106017,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/localization_dark.1ia7wat2mwyfi.svg"
    );
  },
  821978,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/localization_light.2jss_xvx2fuq0.svg"
    );
  },
  766389,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/lockSecrets_dark.0na6naigcbnkj.svg"
    );
  },
  374717,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/lockSecrets_light.0rzix2i1i13lt.svg"
    );
  },
  756733,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/makeup_look_dark.26-5-yn8598c9.svg"
    );
  },
  251697,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/makeup_look_light.0rc05t5n5al4m.svg"
    );
  },
  411118,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/managed_pricing_dark.2zdkf2-ctboa2.svg"
    );
  },
  839596,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/managed_pricing_light.0sioq_hruq1qp.svg"
    );
  },
  729733,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/meshes_dark.2tlm50ns1pq5o.svg"
    );
  },
  66217,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/meshes_light.36wh96flp2o3r.svg"
    );
  },
  148865,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/models_dark.30suu5lj5-ua5.svg"
    );
  },
  45512,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/models_light.0kiw6k3ejw-rn.svg"
    );
  },
  706478,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/models_plugins_parts_dark.3jp6jislnsqf8.svg"
    );
  },
  166181,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/models_plugins_parts_light.2nj1xhv0bfg_u.svg"
    );
  },
  37474,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/notifications_dark.2l_rf34_xo6o8.svg"
    );
  },
  147189,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/notifications_light.3p-b4rzvwwfmj.svg"
    );
  },
  105897,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/oauth_dark.42jv8--11_1i0.svg"
    );
  },
  123524,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/oauth_light.17vwiebwrn8ox.svg"
    );
  },
  752739,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/rights_manager_dark.0m7ca17sdbgim.svg"
    );
  },
  331105,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/rights_manager_light.1moaenz1cbft0.svg"
    );
  },
  564908,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/run_dark.1sun4tvxh_arh.svg"
    );
  },
  663412,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/run_light.29f-3jyw910_v.svg"
    );
  },
  215887,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/shareLinks_dark.1l5fwuv6cgzmy.svg"
    );
  },
  962803,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/shareLinks_light.116igf-ldibmu.svg"
    );
  },
  914865,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/signin_dark.1k_gzn1-5q0ca.svg"
    );
  },
  818392,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/signin_light.1o1-jng_ct0y2.svg"
    );
  },
  173034,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/token_dark.2qy4jy9ffjhax.svg"
    );
  },
  780078,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/token_light.2xc00j5zp1q8_.svg"
    );
  },
  756885,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/video_dark.2-gdpodjtsjj3.svg"
    );
  },
  260123,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/video_game_dark.0tuxtkttj8gcu.svg"
    );
  },
  507792,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/video_game_light.3l155817mjupj.svg"
    );
  },
  850994,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d622b6dacb387707c55999d1a7ea8625cb0d1ce4/_next/static/media/video_light.1fum3vlxctp7w.svg"
    );
  },
  919448,
  (e) => {
    "use strict";
    var t = e.i(472536),
      a = e.i(579325),
      s = e.i(197649),
      l = e.i(416340),
      c = e.i(78892),
      i = e.i(608652),
      d = e.i(174617),
      r = e.i(199786),
      o = e.i(300792),
      n = e.i(692166),
      m = e.i(169525),
      u = e.i(600317),
      g = e.i(221628),
      b = "Checkbox",
      [p, h] = (0, i.createContextScope)(b),
      [f, x] = p(b);
    function v(e) {
      let {
          __scopeCheckbox: t,
          checked: a,
          children: s,
          defaultChecked: c,
          disabled: i,
          form: d,
          name: o,
          onCheckedChange: n,
          required: m,
          value: u = "on",
          internal_do_not_use_render: p
        } = e,
        [h, x] = (0, r.useControllableState)({
          prop: a,
          defaultProp: null != c && c,
          onChange: n,
          caller: b
        }),
        [v, _] = l.useState(null),
        [k, y] = l.useState(null),
        S = l.useRef(!1),
        q = !v || !!d || !!v.closest("form"),
        N = {
          checked: h,
          disabled: i,
          setChecked: x,
          control: v,
          setControl: _,
          name: o,
          form: d,
          value: u,
          hasConsumerStoppedPropagationRef: S,
          required: m,
          defaultChecked: !j(c) && c,
          isFormControl: q,
          bubbleInput: k,
          setBubbleInput: y
        };
      return (0, g.jsx)(f, { scope: t, ...N, children: "function" == typeof p ? p(N) : s });
    }
    var _ = "CheckboxTrigger",
      k = l.forwardRef((e, t) => {
        let { __scopeCheckbox: a, onKeyDown: s, onClick: i, ...r } = e,
          {
            control: o,
            value: n,
            disabled: m,
            checked: b,
            required: p,
            setControl: h,
            setChecked: f,
            hasConsumerStoppedPropagationRef: v,
            isFormControl: k,
            bubbleInput: y
          } = x(_, a),
          S = (0, c.useComposedRefs)(t, h),
          q = l.useRef(b);
        return (
          l.useEffect(() => {
            let e = null == o ? void 0 : o.form;
            if (e) {
              let t = () => f(q.current);
              return (e.addEventListener("reset", t), () => e.removeEventListener("reset", t));
            }
          }, [o, f]),
          (0, g.jsx)(u.Primitive.button, {
            type: "button",
            role: "checkbox",
            "aria-checked": j(b) ? "mixed" : b,
            "aria-required": p,
            "data-state": E(b),
            "data-disabled": m ? "" : void 0,
            disabled: m,
            value: n,
            ...r,
            ref: S,
            onKeyDown: (0, d.composeEventHandlers)(s, (e) => {
              "Enter" === e.key && e.preventDefault();
            }),
            onClick: (0, d.composeEventHandlers)(i, (e) => {
              (f((e) => !!j(e) || !e),
                y &&
                  k &&
                  ((v.current = e.isPropagationStopped()), v.current || e.stopPropagation()));
            })
          })
        );
      });
    k.displayName = _;
    var y = l.forwardRef((e, t) => {
      let {
        __scopeCheckbox: a,
        name: s,
        checked: l,
        defaultChecked: c,
        required: i,
        disabled: d,
        value: r,
        onCheckedChange: o,
        form: n,
        ...m
      } = e;
      return (0, g.jsx)(v, {
        __scopeCheckbox: a,
        checked: l,
        defaultChecked: c,
        disabled: d,
        required: i,
        onCheckedChange: o,
        name: s,
        form: n,
        value: r,
        internal_do_not_use_render: (e) => {
          let { isFormControl: s } = e;
          return (0, g.jsxs)(g.Fragment, {
            children: [
              (0, g.jsx)(k, { ...m, ref: t, __scopeCheckbox: a }),
              s && (0, g.jsx)(w, { __scopeCheckbox: a })
            ]
          });
        }
      });
    });
    y.displayName = b;
    var S = "CheckboxIndicator",
      q = l.forwardRef((e, t) => {
        let { __scopeCheckbox: a, forceMount: s, ...l } = e,
          c = x(S, a);
        return (0, g.jsx)(m.Presence, {
          present: s || j(c.checked) || !0 === c.checked,
          children: (0, g.jsx)(u.Primitive.span, {
            "data-state": E(c.checked),
            "data-disabled": c.disabled ? "" : void 0,
            ...l,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          })
        });
      });
    q.displayName = S;
    var N = "CheckboxBubbleInput",
      w = l.forwardRef((e, t) => {
        let { __scopeCheckbox: a, ...s } = e,
          {
            control: i,
            hasConsumerStoppedPropagationRef: d,
            checked: r,
            defaultChecked: m,
            required: b,
            disabled: p,
            name: h,
            value: f,
            form: v,
            bubbleInput: _,
            setBubbleInput: k
          } = x(N, a),
          y = (0, c.useComposedRefs)(t, k),
          S = (0, o.usePrevious)(r),
          q = (0, n.useSize)(i);
        l.useEffect(() => {
          if (!_) return;
          let e = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set,
            t = !d.current;
          if (S !== r && e) {
            let a = new Event("click", { bubbles: t });
            ((_.indeterminate = j(r)), e.call(_, !j(r) && r), _.dispatchEvent(a));
          }
        }, [_, S, r, d]);
        let w = l.useRef(!j(r) && r);
        return (0, g.jsx)(u.Primitive.input, {
          type: "checkbox",
          "aria-hidden": !0,
          defaultChecked: null != m ? m : w.current,
          required: b,
          disabled: p,
          name: h,
          value: f,
          form: v,
          ...s,
          tabIndex: -1,
          ref: y,
          style: {
            ...s.style,
            ...q,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
            transform: "translateX(-100%)"
          }
        });
      });
    function j(e) {
      return "indeterminate" === e;
    }
    function E(e) {
      return j(e) ? "indeterminate" : e ? "checked" : "unchecked";
    }
    w.displayName = N;
    let z = { XSmall: "size-400", Small: "size-500", Medium: "size-600", Large: "size-600" },
      M = { XSmall: "", Small: "", Medium: "", Large: "padding-y-xxsmall" },
      R = {
        XSmall: "text-body-small",
        Small: "text-body-small",
        Medium: "text-body-medium",
        Large: "text-body-large"
      },
      C = {
        XSmall: "",
        Small: "padding-top-xxsmall",
        Medium: "padding-top-xxsmall",
        Large: "padding-top-xxsmall"
      };
    e.s(
      [
        "Checkbox",
        0,
        (e) => {
          let {
              label: c,
              className: i,
              isChecked: d,
              isDisabled: r,
              size: o,
              hint: n,
              placement: m,
              onCheckedChange: u,
              id: g,
              ...b
            } = e,
            p = (0, a.default)(),
            h = g || p,
            f =
              c &&
              l.default.createElement(
                "label",
                {
                  htmlFor: h,
                  className: (0, s.default)(
                    "flex flex-col grow-1 gap-xsmall",
                    !r && "cursor-pointer"
                  )
                },
                l.default.createElement(
                  "span",
                  { className: (0, s.default)(R[o], C[o], "content-emphasis") },
                  c
                ),
                n &&
                  l.default.createElement(
                    "span",
                    { className: "text-body-medium content-default" },
                    n
                  )
              );
          return l.default.createElement(
            "div",
            {
              className: (0, s.default)(
                "foundation-web-checkbox flex gap-medium",
                r && "opacity-[0.5]",
                !r && "cursor-pointer",
                i
              )
            },
            "End" === m && f,
            l.default.createElement(
              "div",
              { className: (0, s.default)(M[o]) },
              l.default.createElement(
                y,
                {
                  "data-slot": "checkbox",
                  className: (0, s.default)(
                    z[o],
                    t.interactable,
                    !r && "cursor-pointer",
                    "flex items-center justify-center radius-small padding-none content-default",
                    "data-[state=unchecked]:bg-none data-[state=unchecked]:stroke-standard data-[state=unchecked]:stroke-contrast-alpha",
                    "data-[state=indeterminate]:bg-system-contrast data-[state=indeterminate]:stroke-none",
                    "data-[state=checked]:bg-system-contrast data-[state=checked]:stroke-none"
                  ),
                  id: h,
                  checked: d,
                  disabled: r,
                  onCheckedChange: u,
                  "aria-label": c,
                  ...b
                },
                l.default.createElement(t.StateLayer, null),
                l.default.createElement(q, {
                  "data-slot": "checkbox-indicator",
                  className: (0, s.default)(
                    z[o],
                    "content-[var(--inverse-content-emphasis)] icon",
                    "data-[state=indeterminate]:icon-filled-minus",
                    "data-[state=checked]:icon-filled-check"
                  )
                })
              )
            ),
            "Start" === m && f
          );
        }
      ],
      919448
    );
  },
  691468,
  (e) => {
    "use strict";
    var t = e.i(472536),
      a = e.i(922834),
      s = e.i(725074),
      l = e.i(197649),
      c = e.i(416340);
    let i = { Small: "XSmall", Medium: "Small", Large: "Medium" },
      d = {
        Small: ["height-600", "text-label-small"],
        Medium: ["height-800", "text-label-medium"],
        Large: ["height-1000", "text-label-medium"]
      },
      r = {
        Small: "padding-left-small",
        Medium: "padding-left-medium",
        Large: "padding-left-large"
      },
      o = {
        Small: "padding-left-small",
        Medium: "padding-left-medium",
        Large: "padding-left-medium"
      },
      n = {
        Small: "padding-right-small",
        Medium: "padding-right-medium",
        Large: "padding-right-large"
      },
      m = {
        Small: "padding-right-small",
        Medium: "padding-right-medium",
        Large: "padding-right-medium"
      },
      u = {
        Small: "padding-left-xsmall",
        Medium: "padding-left-[var(--size-150)]",
        Large: "padding-left-small"
      },
      g = {
        Small: "padding-right-[var(--size-150)]",
        Medium: "padding-right-small",
        Large: "padding-right-[var(--size-250)]"
      },
      b = { Standard: "bg-shift-300", Utility: "bg-none" },
      p = {
        Small: "size-[var(--icon-size-xsmall)]",
        Medium: "size-[var(--icon-size-small)]",
        Large: "size-[var(--icon-size-medium)]"
      },
      h = (e) => {
        let { iconName: t, node: a, size: d } = e;
        return null != t
          ? c.default.createElement(s.Icon, { name: t, size: i[d] })
          : null != a
            ? c.default.createElement(
                "span",
                {
                  className: (0, l.default)(
                    "inline-flex items-center justify-center shrink-0",
                    p[d]
                  )
                },
                a
              )
            : null;
      },
      f = (0, c.forwardRef)((e, s) => {
        let {
            className: i,
            style: p,
            text: f,
            isDisabled: x = !1,
            size: v = "Medium",
            variant: _ = "Standard",
            leadingIconName: k,
            leadingIconNode: y,
            trailingIconName: S,
            trailingIconNode: q,
            ...N
          } = e,
          w = null != k || null != y,
          j = null != S || null != q,
          E = (0, l.default)(
            x ? a.disabledOpacity : [t.interactable, "cursor-pointer"],
            "relative flex justify-center items-center radius-circle stroke-none",
            w ? o[v] : r[v],
            j ? m[v] : n[v],
            d[v],
            i
          ),
          z = c.default.createElement(
            c.default.Fragment,
            null,
            c.default.createElement(t.StateLayer, null),
            c.default.createElement(h, { iconName: k, node: y, size: v }),
            c.default.createElement(
              "span",
              {
                className: (0, l.default)(
                  "padding-y-xsmall text-no-wrap text-truncate-end",
                  w && u[v],
                  j && g[v]
                )
              },
              f
            ),
            c.default.createElement(h, { iconName: S, node: q, size: v })
          ),
          M = { textDecoration: "none", ...p };
        if ("a" === N.as) {
          let { as: e, href: t, ...a } = N;
          return c.default.createElement(
            "a",
            {
              ref: s,
              ...a,
              "aria-disabled": x,
              href: x ? void 0 : t,
              className: (0, l.default)(E, b[_], "content-action-utility"),
              style: M
            },
            z
          );
        }
        let { as: R, isChecked: C, onCheckedChange: T, ...L } = N;
        return c.default.createElement(
          "button",
          {
            ref: s,
            type: "button",
            ...L,
            className: (0, l.default)(
              C ? "bg-inverse-surface-0" : b[_],
              C ? "content-inverse-emphasis" : "content-action-utility",
              E
            ),
            style: M,
            "aria-pressed": C,
            disabled: x,
            onClick: null == T ? void 0 : () => T(!C)
          },
          z
        );
      });
    e.s(["Chip", 0, f]);
  },
  233693,
  (e) => {
    "use strict";
    var t = e.i(922834),
      a = e.i(725074),
      s = e.i(579325),
      l = e.i(663932),
      c = e.i(618691),
      i = e.i(197649),
      d = e.i(416340);
    let r = {
        XSmall: "padding-x-small",
        Small: "padding-x-medium",
        Medium: "padding-x-medium",
        Large: "padding-x-medium"
      },
      o = {
        XSmall: "gap-x-xsmall",
        Small: "gap-x-small",
        Medium: "gap-x-small",
        Large: "gap-x-small"
      },
      n = {
        XSmall: "height-600",
        Small: "height-800",
        Medium: "height-1000",
        Large: "height-1200"
      },
      m = {
        XSmall: "radius-small",
        Small: "radius-medium",
        Medium: "radius-medium",
        Large: "radius-medium"
      },
      u = {
        XSmall: "text-title-small",
        Small: "text-title-small",
        Medium: "text-title-medium",
        Large: "text-title-large"
      },
      g = {
        XSmall: ["text-body-small", "placeholder:text-body-small"],
        Small: ["text-body-small", "placeholder:text-body-small"],
        Medium: ["text-body-medium", "placeholder:text-body-medium"],
        Large: ["text-body-large", "placeholder:text-body-large"]
      },
      b = (0, d.forwardRef)((e, b) => {
        let {
            label: p,
            labelTooltip: h,
            leadingIconName: f,
            trailingIconName: x,
            leadingIconNode: v,
            trailingIconNode: _,
            hasError: k,
            error: y,
            helperText: S,
            size: q,
            variant: N = "Standard",
            isRequired: w,
            isDisabled: j,
            className: E,
            style: z,
            inputContainerClassName: M,
            inputContainerClassStyle: R,
            id: C,
            ...T
          } = e,
          L = (0, s.default)(),
          I = C || L,
          P = "".concat(I, "-description"),
          A = null != q ? q : "Large",
          O = k || !!y,
          U = y || S,
          B = (0, d.useMemo)(
            () =>
              f
                ? d.default.createElement(a.Icon, {
                    name: f,
                    size: A,
                    className: "content-emphasis",
                    "data-testid": "text-input-leading-icon"
                  })
                : v,
            [f, v, A]
          ),
          D = (0, d.useMemo)(
            () =>
              x
                ? d.default.createElement(a.Icon, {
                    name: x,
                    size: A,
                    className: "content-emphasis",
                    "data-testid": "text-input-trailing-icon"
                  })
                : _,
            [A, x, _]
          ),
          X = p
            ? d.default.createElement(
                "label",
                { htmlFor: I, className: (0, i.default)(u[A], "content-emphasis") },
                p,
                w &&
                  d.default.createElement(
                    d.default.Fragment,
                    null,
                    " ",
                    d.default.createElement("span", { className: "content-default" }, "*")
                  )
              )
            : null;
        return d.default.createElement(
          "div",
          {
            "data-testid": "text-input-wrapper",
            className: (0, i.default)("flex width-full flex-col gap-small ".concat(E), {
              [t.disabledOpacity]: j
            }),
            style: z
          },
          X &&
            (h
              ? d.default.createElement(
                  "div",
                  { className: "flex items-center gap-xsmall" },
                  X,
                  d.default.createElement(l.LabelTooltip, h)
                )
              : X),
          d.default.createElement(
            "div",
            {
              "data-testid": "text-input-container",
              className: (0, i.default)(
                "foundation-web-input flex items-center width-full",
                c.INPUT_STROKE_BY_VARIANT[N],
                c.INPUT_BACKGROUND_BY_VARIANT[N],
                M,
                n[A],
                m[A],
                r[A],
                o[A],
                O
                  ? "stroke-system-alert focus-within:stroke-system-alert"
                  : "stroke-contrast-alpha focus-within:stroke-system-emphasis"
              ),
              style: R
            },
            B,
            d.default.createElement("input", {
              type: "text",
              id: I,
              ref: b,
              className: (0, i.default)(
                "width-full padding-none bg-none stroke-none outline-none content-emphasis placeholder:content-muted",
                g[A]
              ),
              style: { appearance: "none" },
              "aria-invalid": O,
              "aria-describedby": U ? P : void 0,
              required: w,
              ...T,
              disabled: j
            }),
            D
          ),
          U &&
            d.default.createElement(
              "span",
              {
                id: P,
                className: (0, i.default)("text-caption-small", {
                  "content-system-alert": O,
                  "content-default": !O
                })
              },
              U
            )
        );
      });
    ((b.displayName = "TextInput"), e.s(["TextInput", 0, b]));
  },
  514455,
  (e) => {
    "use strict";
    var t = e.i(865800),
      a = e.i(416340),
      s = e.i(614515),
      l = e.i(993807),
      c = e.i(962560),
      i = e.i(273589),
      d = e.i(42569),
      r = e.i(696180),
      o = e.i(221628),
      n = e.i(972455),
      m = e.i(963320);
    function u(e) {
      return (0, i.g)("MuiAlertTitle", e);
    }
    (0, r.g)("MuiAlertTitle", ["root"]);
    let g = ["className"],
      b = (0, d.s)(n.T, {
        name: "MuiAlertTitle",
        slot: "Root",
        overridesResolver: (e, t) => t.root
      })((e) => {
        let { theme: t } = e;
        return { fontWeight: t.typography.fontWeightMedium, marginTop: -2 };
      }),
      p = a.forwardRef(function (e, t) {
        let a = (0, m.u)({ props: e, name: "MuiAlertTitle" }),
          { className: s } = a,
          l = (0, i._)(a, g),
          r = ((e) => {
            let { classes: t } = e;
            return (0, d.a)({ root: ["root"] }, u, t);
          })(a);
        return (0, o.jsx)(
          b,
          (0, c._)(
            {
              gutterBottom: !0,
              component: "div",
              ownerState: a,
              ref: t,
              className: (0, d.c)(r.root, s)
            },
            l
          )
        );
      });
    var h = (0, s.default)({ name: "AlertTitle" })(function (e) {
        return { root: (0, t._)((0, t._)({}, e.typography.alertTitle), { margin: "-1px 0" }) };
      }),
      f = (0, a.forwardRef)(function (e, s) {
        var c = e.classes,
          i = e.className,
          d = (0, t.a)(e, ["classes", "className"]),
          r = h(void 0, { props: { classes: (0, l.default)(c, i) } });
        return a.default.createElement(p, (0, t._)({}, d, { classes: r.classes, ref: s }));
      });
    e.s(["AlertTitle", 0, f], 514455);
  },
  854705,
  (e) => {
    "use strict";
    var t = e.i(865800),
      a = e.i(416340),
      s = e.i(614515),
      l = e.i(993807),
      c = e.i(696180),
      i = e.i(273589),
      d = e.i(962560),
      r = e.i(42569),
      o = e.i(576881),
      n = e.i(751498),
      m = e.i(221628),
      u = e.i(219224),
      g = e.i(963320),
      b = e.i(275966);
    e.i(197094);
    var p = (0, n.c)(
        (0, m.jsx)("path", {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        }),
        "RadioButtonUnchecked"
      ),
      h = (0, n.c)(
        (0, m.jsx)("path", {
          d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
        }),
        "RadioButtonChecked"
      );
    let f = (0, r.s)("span", { name: "MuiRadioButtonIcon", shouldForwardProp: r.r })({
        position: "relative",
        display: "flex"
      }),
      x = (0, r.s)(p, { name: "MuiRadioButtonIcon" })({ transform: "scale(1)" }),
      v = (0, r.s)(h, { name: "MuiRadioButtonIcon" })((e) => {
        let { theme: t, ownerState: a } = e;
        return (0, d._)(
          {
            left: 0,
            position: "absolute",
            transform: "scale(0)",
            transition: t.transitions.create("transform", {
              easing: t.transitions.easing.easeIn,
              duration: t.transitions.duration.shortest
            })
          },
          a.checked && {
            transform: "scale(1)",
            transition: t.transitions.create("transform", {
              easing: t.transitions.easing.easeOut,
              duration: t.transitions.duration.shortest
            })
          }
        );
      });
    function _(e) {
      let { checked: t = !1, classes: a = {}, fontSize: s } = e,
        l = (0, d._)({}, e, { checked: t });
      return (0, m.jsxs)(f, {
        className: a.root,
        ownerState: l,
        children: [
          (0, m.jsx)(x, { fontSize: s, className: a.background, ownerState: l }),
          (0, m.jsx)(v, { fontSize: s, className: a.dot, ownerState: l })
        ]
      });
    }
    function k(e) {
      return (0, i.g)("MuiRadio", e);
    }
    var y = (0, c.g)("MuiRadio", [
      "root",
      "checked",
      "disabled",
      "colorPrimary",
      "colorSecondary",
      "sizeSmall"
    ]);
    let S = ["checked", "checkedIcon", "color", "icon", "name", "onChange", "size", "className"],
      q = (0, r.s)(o.S, {
        shouldForwardProp: (e) => (0, r.r)(e) || "classes" === e,
        name: "MuiRadio",
        slot: "Root",
        overridesResolver: (e, t) => {
          let { ownerState: a } = e;
          return [
            t.root,
            "medium" !== a.size && t["size".concat((0, i.a)(a.size))],
            t["color".concat((0, i.a)(a.color))]
          ];
        }
      })((e) => {
        let { theme: t, ownerState: a } = e;
        return (0, d._)(
          { color: (t.vars || t).palette.text.secondary },
          !a.disableRipple && {
            "&:hover": {
              backgroundColor: t.vars
                ? "rgba("
                    .concat(
                      "default" === a.color
                        ? t.vars.palette.action.activeChannel
                        : t.vars.palette[a.color].mainChannel,
                      " / "
                    )
                    .concat(t.vars.palette.action.hoverOpacity, ")")
                : (0, i.b)(
                    "default" === a.color ? t.palette.action.active : t.palette[a.color].main,
                    t.palette.action.hoverOpacity
                  ),
              "@media (hover: none)": { backgroundColor: "transparent" }
            }
          },
          "default" !== a.color && {
            ["&.".concat(y.checked)]: { color: (t.vars || t).palette[a.color].main }
          },
          { ["&.".concat(y.disabled)]: { color: (t.vars || t).palette.action.disabled } }
        );
      }),
      N = (0, m.jsx)(_, { checked: !0 }),
      w = (0, m.jsx)(_, {}),
      j = a.forwardRef(function (e, t) {
        var s, l, c, o;
        let n = (0, g.u)({ props: e, name: "MuiRadio" }),
          {
            checked: p,
            checkedIcon: h = N,
            color: f = "primary",
            icon: x = w,
            name: v,
            onChange: _,
            size: y = "medium",
            className: j
          } = n,
          E = (0, i._)(n, S),
          z = (0, d._)({}, n, { color: f, size: y }),
          M = ((e) => {
            let { classes: t, color: a, size: s } = e,
              l = {
                root: [
                  "root",
                  "color".concat((0, i.a)(a)),
                  "medium" !== s && "size".concat((0, i.a)(s))
                ]
              };
            return (0, d._)({}, t, (0, r.a)(l, k, t));
          })(z),
          R = a.useContext(u.R),
          C = p,
          T = (0, b.c)(_, R && R.onChange),
          L = v;
        return (
          R &&
            (void 0 === C &&
              ((c = R.value),
              (C =
                "object" == typeof (o = n.value) && null !== o
                  ? c === o
                  : String(c) === String(o))),
            void 0 === L && (L = R.name)),
          (0, m.jsx)(
            q,
            (0, d._)(
              {
                type: "radio",
                icon: a.cloneElement(x, { fontSize: null != (s = w.props.fontSize) ? s : y }),
                checkedIcon: a.cloneElement(h, {
                  fontSize: null != (l = N.props.fontSize) ? l : y
                }),
                ownerState: z,
                classes: M,
                name: L,
                checked: C,
                onChange: T,
                ref: t,
                className: (0, r.c)(M.root, j)
              },
              E
            )
          )
        );
      });
    var E = (0, s.default)({ name: "Radio" })(function (e) {
        var t, a;
        return {
          root: { color: e.palette.states.active },
          colorPrimary:
            (((t = { color: e.palette.content.muted })["&.".concat(y.checked)] = {
              color: e.palette.actionV2.primaryBrand.fill
            }),
            t),
          colorSecondary: { color: e.palette.actionV2.primary.fill },
          disabled:
            (((a = { color: e.palette.states.disabled })[
              "&.".concat(y.colorPrimary, ".").concat(y.checked)
            ] = { color: e.palette.states.disabled }),
            a)
        };
      }),
      z = (0, a.forwardRef)(function (e, s) {
        var c = e.classes,
          i = e.color,
          d = e.inputProps,
          r = e["aria-label"],
          o = e.className,
          n = (0, t.a)(e, ["classes", "color", "inputProps", "aria-label", "className"]),
          m = E(void 0, { props: { classes: (0, l.default)(c, o) } });
        return a.default.createElement(
          j,
          (0, t._)({}, n, {
            classes: m.classes,
            color: void 0 === i ? "primary" : i,
            ref: s,
            inputProps: (0, t._)({ "aria-label": r }, d)
          })
        );
      });
    e.s(["Radio", 0, z], 854705);
  },
  219224,
  (e) => {
    "use strict";
    let t = e.i(416340).createContext(void 0);
    e.s(["R", 0, t]);
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

//# debugId=3d472146-a46a-0db9-8670-e054ab2e0d2e
//# sourceMappingURL=1gos6jlupgx1p.js.map
