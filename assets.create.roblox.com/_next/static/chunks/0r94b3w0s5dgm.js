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
    n && ((e._debugIds || (e._debugIds = {}))[n] = "238ba5f0-b0a8-29d5-1aaf-9aef16854133");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  493924,
  938429,
  321623,
  (e) => {
    "use strict";
    var a = e.i(221628),
      t = e.i(199834),
      s = e.i(706442),
      c = e.i(776344),
      l = e.i(462863),
      i = e.i(210436),
      r = e.i(872378),
      d = e.i(909935),
      o = e.i(587608),
      n = e.i(648550),
      m = e.i(879556),
      u = e.i(156676),
      g = e.i(732097),
      b = e.i(149209),
      p = e.i(152382),
      h = e.i(323377),
      f = e.i(212940),
      x = e.i(581403),
      v = e.i(527781),
      _ = e.i(492581),
      k = e.i(572165),
      y = e.i(977079),
      S = e.i(402440),
      q = e.i(620094),
      N = e.i(721267),
      w = e.i(788618),
      j = e.i(11730),
      E = e.i(334912),
      z = e.i(315072),
      M = e.i(319700),
      R = e.i(397367),
      C = e.i(339295),
      T = e.i(26168),
      L = e.i(761562),
      I = e.i(174990),
      P = e.i(226572),
      A = e.i(41024),
      O = e.i(318682),
      U = e.i(902904),
      B = e.i(973248),
      D = e.i(699904),
      X = e.i(861406),
      F = e.i(659373),
      W = e.i(871908),
      K = e.i(712369),
      V = e.i(761170),
      H = e.i(69008),
      G = e.i(610419),
      Y = e.i(6938),
      Z = e.i(931008),
      J = e.i(132917),
      Q = e.i(999544),
      $ = e.i(370502),
      ee = e.i(779375),
      ea = e.i(179677),
      et = e.i(761534),
      es = e.i(935295),
      ec = e.i(930283),
      el = e.i(892316),
      ei = e.i(667509),
      er = e.i(285253),
      ed = e.i(987596),
      eo = e.i(969915);
    let en = {
      secrets: { light: I.default, dark: L.default },
      noPermissions: { light: I.default, dark: L.default },
      notifications: { light: H.default, dark: V.default },
      experiences: { light: ed.default, dark: er.default },
      shareLinks: { light: ea.default, dark: ee.default },
      eventsAndUpdates: { light: S.default, dark: y.default },
      avatarItem: { light: m.default, dark: n.default },
      models: { light: F.default, dark: X.default },
      plugins: { light: K.default, dark: W.default },
      audio: { light: o.default, dark: d.default },
      decals: { light: v.default, dark: x.default },
      images: { light: j.default, dark: w.default },
      videos: { light: eo.default, dark: ei.default },
      meshes: { light: D.default, dark: B.default },
      animations: { light: $.default, dark: Q.default },
      textDocuments: { light: k.default, dark: _.default },
      noUsers: { light: f.default, dark: h.default },
      localization: { light: T.default, dark: C.default },
      rightsManager: { light: J.default, dark: Z.default },
      tokens: { light: el.default, dark: ec.default },
      chart: { light: R.default, dark: M.default },
      badge: { light: g.default, dark: u.default },
      apiKeys: { light: r.default, dark: i.default },
      signin: { light: es.default, dark: et.default },
      oAuthApps: { light: Y.default, dark: G.default },
      makeupLooks: { light: A.default, dark: P.default },
      barGraph: { light: p.default, dark: b.default },
      leaderboard: { light: z.default, dark: E.default },
      findPeople: { light: N.default, dark: q.default },
      managedPricing: { light: U.default, dark: O.default }
    };
    e.s(["default", 0, en], 938429);
    let em = "".concat(
        "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/assets",
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
        let { illustration: t, size: s = "large" } = e,
          c = t && en[t];
        if (c) return (0, a.jsx)(l.default, { lightSrc: c.light, darkSrc: c.dark, alt: t });
        let i = t ? eu[s][t] : null;
        return (
          i &&
          (0, a.jsx)("img", {
            height: "large" === s ? 240 : 96,
            width: "large" === s ? 320 : 96,
            src: i,
            alt: t
          })
        );
      },
      ep = (e) => {
        let { children: s, title: l, description: i, size: r = "large", illustration: d } = e,
          {
            classes: { smallContainer: o, largeContainer: n, smallText: m, largeText: u },
            cx: g
          } = eg();
        return (0, a.jsxs)(c.default, {
          classes: { root: g({ [o]: "small" === r, [n]: "large" === r }) },
          flexDirection: "column",
          alignItems: "center",
          children: [
            (0, a.jsx)(eb, { illustration: d, size: r }),
            (0, a.jsxs)(c.default, {
              classes: { root: g({ [m]: "small" === r, [u]: "large" === r }) },
              flexDirection: "column",
              alignItems: "center",
              children: [
                (0, a.jsx)(t.Typography, {
                  textAlign: "center",
                  variant: "h4",
                  color: "primary",
                  children: l
                }),
                i &&
                  (0, a.jsx)(t.Typography, { textAlign: "center", color: "secondary", children: i })
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
    var a = e.i(416340),
      t = e.i(78892),
      s = e.i(723570),
      c = (e) => {
        var c, i, r;
        let d,
          o,
          { present: n, children: m } = e,
          u = (function (e) {
            var t, c;
            let [i, r] = a.useState(),
              d = a.useRef(null),
              o = a.useRef(e),
              n = a.useRef("none"),
              [m, u] =
                ((t = e ? "mounted" : "unmounted"),
                (c = {
                  mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
                  unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
                  unmounted: { MOUNT: "mounted" }
                }),
                a.useReducer((e, a) => {
                  let t = c[e][a];
                  return null != t ? t : e;
                }, t));
            return (
              a.useEffect(() => {
                let e = l(d.current);
                n.current = "mounted" === m ? e : "none";
              }, [m]),
              (0, s.useLayoutEffect)(() => {
                let a = d.current,
                  t = o.current;
                if (t !== e) {
                  let s = n.current,
                    c = l(a);
                  (e
                    ? u("MOUNT")
                    : "none" === c || (null == a ? void 0 : a.display) === "none"
                      ? u("UNMOUNT")
                      : t && s !== c
                        ? u("ANIMATION_OUT")
                        : u("UNMOUNT"),
                    (o.current = e));
                }
              }, [e, u]),
              (0, s.useLayoutEffect)(() => {
                if (i) {
                  var e;
                  let a,
                    t = null != (e = i.ownerDocument.defaultView) ? e : window,
                    s = (e) => {
                      let s = l(d.current).includes(CSS.escape(e.animationName));
                      if (e.target === i && s && (u("ANIMATION_END"), !o.current)) {
                        let e = i.style.animationFillMode;
                        ((i.style.animationFillMode = "forwards"),
                          (a = t.setTimeout(() => {
                            "forwards" === i.style.animationFillMode &&
                              (i.style.animationFillMode = e);
                          })));
                      }
                    },
                    c = (e) => {
                      e.target === i && (n.current = l(d.current));
                    };
                  return (
                    i.addEventListener("animationstart", c),
                    i.addEventListener("animationcancel", s),
                    i.addEventListener("animationend", s),
                    () => {
                      (t.clearTimeout(a),
                        i.removeEventListener("animationstart", c),
                        i.removeEventListener("animationcancel", s),
                        i.removeEventListener("animationend", s));
                    }
                  );
                }
                u("ANIMATION_END");
              }, [i, u]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(m),
                ref: a.useCallback((e) => {
                  ((d.current = e ? getComputedStyle(e) : null), r(e));
                }, [])
              }
            );
          })(n),
          g = "function" == typeof m ? m({ present: u.isPresent }) : a.Children.only(m),
          b = (0, t.useComposedRefs)(
            u.ref,
            (o =
              (d =
                null == (i = Object.getOwnPropertyDescriptor((c = g).props, "ref"))
                  ? void 0
                  : i.get) &&
              "isReactWarning" in d &&
              d.isReactWarning)
              ? c.ref
              : (o =
                    (d =
                      null == (r = Object.getOwnPropertyDescriptor(c, "ref")) ? void 0 : r.get) &&
                    "isReactWarning" in d &&
                    d.isReactWarning)
                ? c.props.ref
                : c.props.ref || c.ref
          );
        return "function" == typeof m || u.isPresent ? a.cloneElement(g, { ref: b }) : null;
      };
    function l(e) {
      return (null == e ? void 0 : e.animationName) || "none";
    }
    ((c.displayName = "Presence"), e.s(["Presence", 0, c]));
  },
  666554,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/alert_dark.1spa8ixzmujxs.svg"
    );
  },
  318974,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/alert_light.3o6_fob3g_8zu.svg"
    );
  },
  210436,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/api_key_dark.1k1v6y4zm3j28.svg"
    );
  },
  872378,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/api_key_light.06t4q4202-77s.svg"
    );
  },
  909935,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/audio_dark.16razgllw2ska.svg"
    );
  },
  587608,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/audio_light.3ra073_18pbj-.svg"
    );
  },
  648550,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/avatar_setup_dark.0orjsl7i089hc.svg"
    );
  },
  879556,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/avatar_setup_light.32r86q54d7kuh.svg"
    );
  },
  156676,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/badge_dark.3m45r-3favo3f.svg"
    );
  },
  732097,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/badge_light.3fxfvj8ub7utb.svg"
    );
  },
  149209,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/bar_graph_dark.01vf9sty52re2.svg"
    );
  },
  152382,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/bar_graph_light.1iiixo_d8ur81.svg"
    );
  },
  323377,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/collaborators_dark.30gxkwssilacj.svg"
    );
  },
  212940,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/collaborators_light.3x7fovqhay1x5.svg"
    );
  },
  581403,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/decals_dark.2jpntsljojhzc.svg"
    );
  },
  527781,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/decals_light.16_gp3tnuc5p_.svg"
    );
  },
  492581,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/envelope_dark.2-ouf9shuihi4.svg"
    );
  },
  572165,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/envelope_light.1me9hqye66z7w.svg"
    );
  },
  977079,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/event_calendar_dark.3lx4_kse68by8.svg"
    );
  },
  402440,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/event_calendar_light.1pq-t84d90ty1.svg"
    );
  },
  620094,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/find_people_dark.220q6_cs04hcq.svg"
    );
  },
  721267,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/find_people_light.1gkb3pmwc8s2n.svg"
    );
  },
  788618,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/image_dark.2giew28wx4z86.svg"
    );
  },
  11730,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/image_light.0ouq8tcgpznz7.svg"
    );
  },
  334912,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/leaderboard_dark.301ypg94lbxpv.svg"
    );
  },
  315072,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/leaderboard_light.43sjz_ibwkiq_.svg"
    );
  },
  319700,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/line_chart_dark.0k7qf3mhepo6s.svg"
    );
  },
  397367,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/line_chart_light.049gcvvmai0ax.svg"
    );
  },
  339295,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/localization_dark.1ia7wat2mwyfi.svg"
    );
  },
  26168,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/localization_light.2jss_xvx2fuq0.svg"
    );
  },
  761562,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/lockSecrets_dark.0na6naigcbnkj.svg"
    );
  },
  174990,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/lockSecrets_light.0rzix2i1i13lt.svg"
    );
  },
  226572,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/makeup_look_dark.26-5-yn8598c9.svg"
    );
  },
  41024,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/makeup_look_light.0rc05t5n5al4m.svg"
    );
  },
  318682,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/managed_pricing_dark.2zdkf2-ctboa2.svg"
    );
  },
  902904,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/managed_pricing_light.0sioq_hruq1qp.svg"
    );
  },
  973248,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/meshes_dark.2tlm50ns1pq5o.svg"
    );
  },
  699904,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/meshes_light.36wh96flp2o3r.svg"
    );
  },
  861406,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/models_dark.30suu5lj5-ua5.svg"
    );
  },
  659373,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/models_light.0kiw6k3ejw-rn.svg"
    );
  },
  871908,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/models_plugins_parts_dark.3jp6jislnsqf8.svg"
    );
  },
  712369,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/models_plugins_parts_light.2nj1xhv0bfg_u.svg"
    );
  },
  761170,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/notifications_dark.2l_rf34_xo6o8.svg"
    );
  },
  69008,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/notifications_light.3p-b4rzvwwfmj.svg"
    );
  },
  610419,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/oauth_dark.42jv8--11_1i0.svg"
    );
  },
  6938,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/oauth_light.17vwiebwrn8ox.svg"
    );
  },
  931008,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/rights_manager_dark.0m7ca17sdbgim.svg"
    );
  },
  132917,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/rights_manager_light.1moaenz1cbft0.svg"
    );
  },
  999544,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/run_dark.1sun4tvxh_arh.svg"
    );
  },
  370502,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/run_light.29f-3jyw910_v.svg"
    );
  },
  779375,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/shareLinks_dark.1l5fwuv6cgzmy.svg"
    );
  },
  179677,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/shareLinks_light.116igf-ldibmu.svg"
    );
  },
  761534,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/signin_dark.1k_gzn1-5q0ca.svg"
    );
  },
  935295,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/signin_light.1o1-jng_ct0y2.svg"
    );
  },
  930283,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/token_dark.2qy4jy9ffjhax.svg"
    );
  },
  892316,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/token_light.2xc00j5zp1q8_.svg"
    );
  },
  667509,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/video_dark.2-gdpodjtsjj3.svg"
    );
  },
  285253,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/video_game_dark.0tuxtkttj8gcu.svg"
    );
  },
  987596,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/video_game_light.3l155817mjupj.svg"
    );
  },
  969915,
  (e) => {
    e.q(
      "https://assets.create.roblox.com/d8bc69adc62a6b05ad5ec76942c7c862ae65abaa/_next/static/media/video_light.1fum3vlxctp7w.svg"
    );
  },
  919448,
  (e) => {
    "use strict";
    var a = e.i(472536),
      t = e.i(579325),
      s = e.i(197649),
      c = e.i(416340),
      l = e.i(78892),
      i = e.i(608652),
      r = e.i(174617),
      d = e.i(199786),
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
          __scopeCheckbox: a,
          checked: t,
          children: s,
          defaultChecked: l,
          disabled: i,
          form: r,
          name: o,
          onCheckedChange: n,
          required: m,
          value: u = "on",
          internal_do_not_use_render: p
        } = e,
        [h, x] = (0, d.useControllableState)({
          prop: t,
          defaultProp: null != l && l,
          onChange: n,
          caller: b
        }),
        [v, _] = c.useState(null),
        [k, y] = c.useState(null),
        S = c.useRef(!1),
        q = !v || !!r || !!v.closest("form"),
        N = {
          checked: h,
          disabled: i,
          setChecked: x,
          control: v,
          setControl: _,
          name: o,
          form: r,
          value: u,
          hasConsumerStoppedPropagationRef: S,
          required: m,
          defaultChecked: !j(l) && l,
          isFormControl: q,
          bubbleInput: k,
          setBubbleInput: y
        };
      return (0, g.jsx)(f, { scope: a, ...N, children: "function" == typeof p ? p(N) : s });
    }
    var _ = "CheckboxTrigger",
      k = c.forwardRef((e, a) => {
        let { __scopeCheckbox: t, onKeyDown: s, onClick: i, ...d } = e,
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
          } = x(_, t),
          S = (0, l.useComposedRefs)(a, h),
          q = c.useRef(b);
        return (
          c.useEffect(() => {
            let e = null == o ? void 0 : o.form;
            if (e) {
              let a = () => f(q.current);
              return (e.addEventListener("reset", a), () => e.removeEventListener("reset", a));
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
            ...d,
            ref: S,
            onKeyDown: (0, r.composeEventHandlers)(s, (e) => {
              "Enter" === e.key && e.preventDefault();
            }),
            onClick: (0, r.composeEventHandlers)(i, (e) => {
              (f((e) => !!j(e) || !e),
                y &&
                  k &&
                  ((v.current = e.isPropagationStopped()), v.current || e.stopPropagation()));
            })
          })
        );
      });
    k.displayName = _;
    var y = c.forwardRef((e, a) => {
      let {
        __scopeCheckbox: t,
        name: s,
        checked: c,
        defaultChecked: l,
        required: i,
        disabled: r,
        value: d,
        onCheckedChange: o,
        form: n,
        ...m
      } = e;
      return (0, g.jsx)(v, {
        __scopeCheckbox: t,
        checked: c,
        defaultChecked: l,
        disabled: r,
        required: i,
        onCheckedChange: o,
        name: s,
        form: n,
        value: d,
        internal_do_not_use_render: (e) => {
          let { isFormControl: s } = e;
          return (0, g.jsxs)(g.Fragment, {
            children: [
              (0, g.jsx)(k, { ...m, ref: a, __scopeCheckbox: t }),
              s && (0, g.jsx)(w, { __scopeCheckbox: t })
            ]
          });
        }
      });
    });
    y.displayName = b;
    var S = "CheckboxIndicator",
      q = c.forwardRef((e, a) => {
        let { __scopeCheckbox: t, forceMount: s, ...c } = e,
          l = x(S, t);
        return (0, g.jsx)(m.Presence, {
          present: s || j(l.checked) || !0 === l.checked,
          children: (0, g.jsx)(u.Primitive.span, {
            "data-state": E(l.checked),
            "data-disabled": l.disabled ? "" : void 0,
            ...c,
            ref: a,
            style: { pointerEvents: "none", ...e.style }
          })
        });
      });
    q.displayName = S;
    var N = "CheckboxBubbleInput",
      w = c.forwardRef((e, a) => {
        let { __scopeCheckbox: t, ...s } = e,
          {
            control: i,
            hasConsumerStoppedPropagationRef: r,
            checked: d,
            defaultChecked: m,
            required: b,
            disabled: p,
            name: h,
            value: f,
            form: v,
            bubbleInput: _,
            setBubbleInput: k
          } = x(N, t),
          y = (0, l.useComposedRefs)(a, k),
          S = (0, o.usePrevious)(d),
          q = (0, n.useSize)(i);
        c.useEffect(() => {
          if (!_) return;
          let e = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set,
            a = !r.current;
          if (S !== d && e) {
            let t = new Event("click", { bubbles: a });
            ((_.indeterminate = j(d)), e.call(_, !j(d) && d), _.dispatchEvent(t));
          }
        }, [_, S, d, r]);
        let w = c.useRef(!j(d) && d);
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
              label: l,
              className: i,
              isChecked: r,
              isDisabled: d,
              size: o,
              hint: n,
              placement: m,
              onCheckedChange: u,
              id: g,
              ...b
            } = e,
            p = (0, t.default)(),
            h = g || p,
            f =
              l &&
              c.default.createElement(
                "label",
                {
                  htmlFor: h,
                  className: (0, s.default)(
                    "flex flex-col grow-1 gap-xsmall",
                    !d && "cursor-pointer"
                  )
                },
                c.default.createElement(
                  "span",
                  { className: (0, s.default)(R[o], C[o], "content-emphasis") },
                  l
                ),
                n &&
                  c.default.createElement(
                    "span",
                    { className: "text-body-medium content-default" },
                    n
                  )
              );
          return c.default.createElement(
            "div",
            {
              className: (0, s.default)(
                "foundation-web-checkbox flex gap-medium",
                d && "opacity-[0.5]",
                !d && "cursor-pointer",
                i
              )
            },
            "End" === m && f,
            c.default.createElement(
              "div",
              { className: (0, s.default)(M[o]) },
              c.default.createElement(
                y,
                {
                  "data-slot": "checkbox",
                  className: (0, s.default)(
                    z[o],
                    a.interactable,
                    !d && "cursor-pointer",
                    "flex items-center justify-center radius-small padding-none content-default",
                    "data-[state=unchecked]:bg-none data-[state=unchecked]:stroke-standard data-[state=unchecked]:stroke-contrast-alpha",
                    "data-[state=indeterminate]:bg-system-contrast data-[state=indeterminate]:stroke-none",
                    "data-[state=checked]:bg-system-contrast data-[state=checked]:stroke-none"
                  ),
                  id: h,
                  checked: r,
                  disabled: d,
                  onCheckedChange: u,
                  "aria-label": l,
                  ...b
                },
                c.default.createElement(a.StateLayer, null),
                c.default.createElement(q, {
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
    var a = e.i(472536),
      t = e.i(922834),
      s = e.i(725074),
      c = e.i(197649),
      l = e.i(416340);
    let i = { Small: "XSmall", Medium: "Small", Large: "Medium" },
      r = {
        Small: ["height-600", "text-label-small"],
        Medium: ["height-800", "text-label-medium"],
        Large: ["height-1000", "text-label-medium"]
      },
      d = {
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
        let { iconName: a, node: t, size: r } = e;
        return null != a
          ? l.default.createElement(s.Icon, { name: a, size: i[r] })
          : null != t
            ? l.default.createElement(
                "span",
                {
                  className: (0, c.default)(
                    "inline-flex items-center justify-center shrink-0",
                    p[r]
                  )
                },
                t
              )
            : null;
      },
      f = (0, l.forwardRef)((e, s) => {
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
          E = (0, c.default)(
            x ? t.disabledOpacity : [a.interactable, "cursor-pointer"],
            "relative flex justify-center items-center radius-circle stroke-none",
            w ? o[v] : d[v],
            j ? m[v] : n[v],
            r[v],
            i
          ),
          z = l.default.createElement(
            l.default.Fragment,
            null,
            l.default.createElement(a.StateLayer, null),
            l.default.createElement(h, { iconName: k, node: y, size: v }),
            l.default.createElement(
              "span",
              {
                className: (0, c.default)(
                  "padding-y-xsmall text-no-wrap text-truncate-end",
                  w && u[v],
                  j && g[v]
                )
              },
              f
            ),
            l.default.createElement(h, { iconName: S, node: q, size: v })
          ),
          M = { textDecoration: "none", ...p };
        if ("a" === N.as) {
          let { as: e, href: a, ...t } = N;
          return l.default.createElement(
            "a",
            {
              ref: s,
              ...t,
              "aria-disabled": x,
              href: x ? void 0 : a,
              className: (0, c.default)(E, b[_], "content-action-utility"),
              style: M
            },
            z
          );
        }
        let { as: R, isChecked: C, onCheckedChange: T, ...L } = N;
        return l.default.createElement(
          "button",
          {
            ref: s,
            type: "button",
            ...L,
            className: (0, c.default)(
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
    var a = e.i(922834),
      t = e.i(725074),
      s = e.i(579325),
      c = e.i(663932),
      l = e.i(618691),
      i = e.i(197649),
      r = e.i(416340);
    let d = {
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
      b = (0, r.forwardRef)((e, b) => {
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
          B = (0, r.useMemo)(
            () =>
              f
                ? r.default.createElement(t.Icon, {
                    name: f,
                    size: A,
                    className: "content-emphasis",
                    "data-testid": "text-input-leading-icon"
                  })
                : v,
            [f, v, A]
          ),
          D = (0, r.useMemo)(
            () =>
              x
                ? r.default.createElement(t.Icon, {
                    name: x,
                    size: A,
                    className: "content-emphasis",
                    "data-testid": "text-input-trailing-icon"
                  })
                : _,
            [A, x, _]
          ),
          X = p
            ? r.default.createElement(
                "label",
                { htmlFor: I, className: (0, i.default)(u[A], "content-emphasis") },
                p,
                w &&
                  r.default.createElement(
                    r.default.Fragment,
                    null,
                    " ",
                    r.default.createElement("span", { className: "content-default" }, "*")
                  )
              )
            : null;
        return r.default.createElement(
          "div",
          {
            "data-testid": "text-input-wrapper",
            className: (0, i.default)("flex width-full flex-col gap-small ".concat(E), {
              [a.disabledOpacity]: j
            }),
            style: z
          },
          X &&
            (h
              ? r.default.createElement(
                  "div",
                  { className: "flex items-center gap-xsmall" },
                  X,
                  r.default.createElement(c.LabelTooltip, h)
                )
              : X),
          r.default.createElement(
            "div",
            {
              "data-testid": "text-input-container",
              className: (0, i.default)(
                "foundation-web-input flex items-center width-full",
                l.INPUT_STROKE_BY_VARIANT[N],
                l.INPUT_BACKGROUND_BY_VARIANT[N],
                M,
                n[A],
                m[A],
                d[A],
                o[A],
                O
                  ? "stroke-system-alert focus-within:stroke-system-alert"
                  : "stroke-contrast-alpha focus-within:stroke-system-emphasis"
              ),
              style: R
            },
            B,
            r.default.createElement("input", {
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
            r.default.createElement(
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
    var a = e.i(865800),
      t = e.i(416340),
      s = e.i(614515),
      c = e.i(993807),
      l = e.i(962560),
      i = e.i(273589),
      r = e.i(42569),
      d = e.i(696180),
      o = e.i(221628),
      n = e.i(972455),
      m = e.i(963320);
    function u(e) {
      return (0, i.g)("MuiAlertTitle", e);
    }
    (0, d.g)("MuiAlertTitle", ["root"]);
    let g = ["className"],
      b = (0, r.s)(n.T, {
        name: "MuiAlertTitle",
        slot: "Root",
        overridesResolver: (e, a) => a.root
      })((e) => {
        let { theme: a } = e;
        return { fontWeight: a.typography.fontWeightMedium, marginTop: -2 };
      }),
      p = t.forwardRef(function (e, a) {
        let t = (0, m.u)({ props: e, name: "MuiAlertTitle" }),
          { className: s } = t,
          c = (0, i._)(t, g),
          d = ((e) => {
            let { classes: a } = e;
            return (0, r.a)({ root: ["root"] }, u, a);
          })(t);
        return (0, o.jsx)(
          b,
          (0, l._)(
            {
              gutterBottom: !0,
              component: "div",
              ownerState: t,
              ref: a,
              className: (0, r.c)(d.root, s)
            },
            c
          )
        );
      });
    var h = (0, s.default)({ name: "AlertTitle" })(function (e) {
        return { root: (0, a._)((0, a._)({}, e.typography.alertTitle), { margin: "-1px 0" }) };
      }),
      f = (0, t.forwardRef)(function (e, s) {
        var l = e.classes,
          i = e.className,
          r = (0, a.a)(e, ["classes", "className"]),
          d = h(void 0, { props: { classes: (0, c.default)(l, i) } });
        return t.default.createElement(p, (0, a._)({}, r, { classes: d.classes, ref: s }));
      });
    e.s(["AlertTitle", 0, f], 514455);
  },
  854705,
  (e) => {
    "use strict";
    var a = e.i(865800),
      t = e.i(416340),
      s = e.i(614515),
      c = e.i(993807),
      l = e.i(696180),
      i = e.i(273589),
      r = e.i(962560),
      d = e.i(42569),
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
    let f = (0, d.s)("span", { name: "MuiRadioButtonIcon", shouldForwardProp: d.r })({
        position: "relative",
        display: "flex"
      }),
      x = (0, d.s)(p, { name: "MuiRadioButtonIcon" })({ transform: "scale(1)" }),
      v = (0, d.s)(h, { name: "MuiRadioButtonIcon" })((e) => {
        let { theme: a, ownerState: t } = e;
        return (0, r._)(
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
        c = (0, r._)({}, e, { checked: a });
      return (0, m.jsxs)(f, {
        className: t.root,
        ownerState: c,
        children: [
          (0, m.jsx)(x, { fontSize: s, className: t.background, ownerState: c }),
          (0, m.jsx)(v, { fontSize: s, className: t.dot, ownerState: c })
        ]
      });
    }
    function k(e) {
      return (0, i.g)("MuiRadio", e);
    }
    var y = (0, l.g)("MuiRadio", [
      "root",
      "checked",
      "disabled",
      "colorPrimary",
      "colorSecondary",
      "sizeSmall"
    ]);
    let S = ["checked", "checkedIcon", "color", "icon", "name", "onChange", "size", "className"],
      q = (0, d.s)(o.S, {
        shouldForwardProp: (e) => (0, d.r)(e) || "classes" === e,
        name: "MuiRadio",
        slot: "Root",
        overridesResolver: (e, a) => {
          let { ownerState: t } = e;
          return [
            a.root,
            "medium" !== t.size && a["size".concat((0, i.a)(t.size))],
            a["color".concat((0, i.a)(t.color))]
          ];
        }
      })((e) => {
        let { theme: a, ownerState: t } = e;
        return (0, r._)(
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
                : (0, i.b)(
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
      N = (0, m.jsx)(_, { checked: !0 }),
      w = (0, m.jsx)(_, {}),
      j = t.forwardRef(function (e, a) {
        var s, c, l, o;
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
          z = (0, r._)({}, n, { color: f, size: y }),
          M = ((e) => {
            let { classes: a, color: t, size: s } = e,
              c = {
                root: [
                  "root",
                  "color".concat((0, i.a)(t)),
                  "medium" !== s && "size".concat((0, i.a)(s))
                ]
              };
            return (0, r._)({}, a, (0, d.a)(c, k, a));
          })(z),
          R = t.useContext(u.R),
          C = p,
          T = (0, b.c)(_, R && R.onChange),
          L = v;
        return (
          R &&
            (void 0 === C &&
              ((l = R.value),
              (C =
                "object" == typeof (o = n.value) && null !== o
                  ? l === o
                  : String(l) === String(o))),
            void 0 === L && (L = R.name)),
          (0, m.jsx)(
            q,
            (0, r._)(
              {
                type: "radio",
                icon: t.cloneElement(x, { fontSize: null != (s = w.props.fontSize) ? s : y }),
                checkedIcon: t.cloneElement(h, {
                  fontSize: null != (c = N.props.fontSize) ? c : y
                }),
                ownerState: z,
                classes: M,
                name: L,
                checked: C,
                onChange: T,
                ref: a,
                className: (0, d.c)(M.root, j)
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
      z = (0, t.forwardRef)(function (e, s) {
        var l = e.classes,
          i = e.color,
          r = e.inputProps,
          d = e["aria-label"],
          o = e.className,
          n = (0, a.a)(e, ["classes", "color", "inputProps", "aria-label", "className"]),
          m = E(void 0, { props: { classes: (0, c.default)(l, o) } });
        return t.default.createElement(
          j,
          (0, a._)({}, n, {
            classes: m.classes,
            color: void 0 === i ? "primary" : i,
            ref: s,
            inputProps: (0, a._)({ "aria-label": d }, r)
          })
        );
      });
    e.s(["Radio", 0, z], 854705);
  },
  219224,
  (e) => {
    "use strict";
    let a = e.i(416340).createContext(void 0);
    e.s(["R", 0, a]);
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

//# debugId=238ba5f0-b0a8-29d5-1aaf-9aef16854133
//# sourceMappingURL=2grqvpvx2hlwt.js.map
