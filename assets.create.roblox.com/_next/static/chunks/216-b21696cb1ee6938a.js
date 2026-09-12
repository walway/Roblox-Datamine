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
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "d2732797-def9-4db5-896b-5131ac87387e"),
      (e._sentryDebugIdIdentifier = "sentry-dbid-d2732797-def9-4db5-896b-5131ac87387e"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [216],
  {
    6286: (e, t, r) => {
      let n;
      r.d(t, { S: () => X });
      var o = r(87006),
        s = r(14232),
        a = r(46180),
        i = r(69685),
        l = r(69797),
        u = r(70510),
        c = r(69531),
        d = r(4486),
        p = r(25613),
        m = r(5272),
        h = r(86510),
        v = r(89946),
        f = r(2252),
        g = r(69053),
        I = r(12627),
        w = r(92719),
        y = r(12022),
        b = r(53804),
        x = r(16942),
        T = r(32688),
        S = r(37876),
        P = r(5007),
        C = r(1301);
      function A(e, t) {
        return e - t;
      }
      function R(e, t) {
        var r;
        let { index: n } =
          null !=
          (r = e.reduce((e, r, n) => {
            let o = Math.abs(t - r);
            return null === e || o < e.distance || o === e.distance ? { distance: o, index: n } : e;
          }, null))
            ? r
            : {};
        return n;
      }
      function k(e, t) {
        if (void 0 !== t.current && e.changedTouches) {
          for (let r = 0; r < e.changedTouches.length; r += 1) {
            let n = e.changedTouches[r];
            if (n.identifier === t.current) return { x: n.clientX, y: n.clientY };
          }
          return !1;
        }
        return { x: e.clientX, y: e.clientY };
      }
      function E(e) {
        let { values: t, newValue: r, index: n } = e,
          o = t.slice();
        return ((o[n] = r), o.sort(A));
      }
      function q(e) {
        var t, r, n;
        let { sliderRef: o, activeIndex: s, setActive: a } = e,
          i = (0, y.o)(o.current);
        ((null != (t = o.current) &&
          t.contains(i.activeElement) &&
          Number(
            null == i || null == (r = i.activeElement) ? void 0 : r.getAttribute("data-index")
          ) === s) ||
          null == (n = o.current) ||
          n.querySelector('[type="range"][data-index="'.concat(s, '"]')).focus(),
          a && a(s));
      }
      function F(e, t) {
        return "number" == typeof e && "number" == typeof t
          ? e === t
          : "object" == typeof e &&
              "object" == typeof t &&
              (function (e, t) {
                let r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : (e, t) => e === t;
                return e.length === t.length && e.every((e, n) => r(e, t[n]));
              })(e, t);
      }
      let G = {
          horizontal: {
            offset: (e) => ({ left: "".concat(e, "%") }),
            leap: (e) => ({ width: "".concat(e, "%") })
          },
          "horizontal-reverse": {
            offset: (e) => ({ right: "".concat(e, "%") }),
            leap: (e) => ({ width: "".concat(e, "%") })
          },
          vertical: {
            offset: (e) => ({ bottom: "".concat(e, "%") }),
            leap: (e) => ({ height: "".concat(e, "%") })
          }
        },
        H = (e) => e;
      function N() {
        return (
          void 0 === n &&
            (n =
              "undefined" == typeof CSS ||
              "function" != typeof CSS.supports ||
              CSS.supports("touch-action", "none")),
          n
        );
      }
      function M(e) {
        return (0, u.g)("MuiSlider", e);
      }
      var O = (0, l.g)("MuiSlider", [
        "root",
        "active",
        "colorPrimary",
        "colorSecondary",
        "colorError",
        "colorInfo",
        "colorSuccess",
        "colorWarning",
        "disabled",
        "dragging",
        "focusVisible",
        "mark",
        "markActive",
        "marked",
        "markLabel",
        "markLabelActive",
        "rail",
        "sizeSmall",
        "thumb",
        "thumbColorPrimary",
        "thumbColorSecondary",
        "thumbColorError",
        "thumbColorSuccess",
        "thumbColorInfo",
        "thumbColorWarning",
        "track",
        "trackInverted",
        "trackFalse",
        "thumbSizeSmall",
        "valueLabel",
        "valueLabelOpen",
        "valueLabelCircle",
        "valueLabelLabel",
        "vertical"
      ]);
      let U = [
        "aria-label",
        "aria-valuetext",
        "aria-labelledby",
        "component",
        "components",
        "componentsProps",
        "color",
        "classes",
        "className",
        "disableSwap",
        "disabled",
        "getAriaLabel",
        "getAriaValueText",
        "marks",
        "max",
        "min",
        "name",
        "onChange",
        "onChangeCommitted",
        "orientation",
        "shiftStep",
        "size",
        "step",
        "scale",
        "slotProps",
        "slots",
        "tabIndex",
        "track",
        "value",
        "valueLabelDisplay",
        "valueLabelFormat"
      ];
      function z(e) {
        return e;
      }
      let L = (0, p.s)("span", {
          name: "MuiSlider",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [
              t.root,
              t["color".concat((0, u.a)(r.color))],
              "medium" !== r.size && t["size".concat((0, u.a)(r.size))],
              r.marked && t.marked,
              "vertical" === r.orientation && t.vertical,
              "inverted" === r.track && t.trackInverted,
              !1 === r.track && t.trackFalse
            ];
          }
        })((e) => {
          var t;
          let { theme: r } = e;
          return {
            borderRadius: 12,
            boxSizing: "content-box",
            display: "inline-block",
            position: "relative",
            cursor: "pointer",
            touchAction: "none",
            WebkitTapHighlightColor: "transparent",
            "@media print": { colorAdjust: "exact" },
            ["&.".concat(O.disabled)]: {
              pointerEvents: "none",
              cursor: "default",
              color: (r.vars || r).palette.grey[400]
            },
            ["&.".concat(O.dragging)]: {
              ["& .".concat(O.thumb, ", & .").concat(O.track)]: { transition: "none" }
            },
            variants: [
              ...Object.keys((null != (t = r.vars) ? t : r).palette)
                .filter((e) => {
                  var t;
                  return (null != (t = r.vars) ? t : r).palette[e].main;
                })
                .map((e) => ({
                  props: { color: e },
                  style: { color: (r.vars || r).palette[e].main }
                })),
              {
                props: { orientation: "horizontal" },
                style: {
                  height: 4,
                  width: "100%",
                  padding: "13px 0",
                  "@media (pointer: coarse)": { padding: "20px 0" }
                }
              },
              { props: { orientation: "horizontal", size: "small" }, style: { height: 2 } },
              { props: { orientation: "horizontal", marked: !0 }, style: { marginBottom: 20 } },
              {
                props: { orientation: "vertical" },
                style: {
                  height: "100%",
                  width: 4,
                  padding: "0 13px",
                  "@media (pointer: coarse)": { padding: "0 20px" }
                }
              },
              { props: { orientation: "vertical", size: "small" }, style: { width: 2 } },
              { props: { orientation: "vertical", marked: !0 }, style: { marginRight: 44 } }
            ]
          };
        }),
        _ = (0, p.s)("span", {
          name: "MuiSlider",
          slot: "Rail",
          overridesResolver: (e, t) => t.rail
        })({
          display: "block",
          position: "absolute",
          borderRadius: "inherit",
          backgroundColor: "currentColor",
          opacity: 0.38,
          variants: [
            {
              props: { orientation: "horizontal" },
              style: { width: "100%", height: "inherit", top: "50%", transform: "translateY(-50%)" }
            },
            {
              props: { orientation: "vertical" },
              style: {
                height: "100%",
                width: "inherit",
                left: "50%",
                transform: "translateX(-50%)"
              }
            },
            { props: { track: "inverted" }, style: { opacity: 1 } }
          ]
        }),
        B = (0, p.s)("span", {
          name: "MuiSlider",
          slot: "Track",
          overridesResolver: (e, t) => t.track
        })((e) => {
          var t;
          let { theme: r } = e;
          return {
            display: "block",
            position: "absolute",
            borderRadius: "inherit",
            border: "1px solid currentColor",
            backgroundColor: "currentColor",
            transition: r.transitions.create(["left", "width", "bottom", "height"], {
              duration: r.transitions.duration.shortest
            }),
            variants: [
              { props: { size: "small" }, style: { border: "none" } },
              {
                props: { orientation: "horizontal" },
                style: { height: "inherit", top: "50%", transform: "translateY(-50%)" }
              },
              {
                props: { orientation: "vertical" },
                style: { width: "inherit", left: "50%", transform: "translateX(-50%)" }
              },
              { props: { track: !1 }, style: { display: "none" } },
              ...Object.keys((null != (t = r.vars) ? t : r).palette)
                .filter((e) => {
                  var t;
                  return (null != (t = r.vars) ? t : r).palette[e].main;
                })
                .map((e) => ({
                  props: { color: e, track: "inverted" },
                  style: (0, d._)(
                    {},
                    r.vars
                      ? {
                          backgroundColor: r.vars.palette.Slider["".concat(e, "Track")],
                          borderColor: r.vars.palette.Slider["".concat(e, "Track")]
                        }
                      : (0, d._)(
                          {
                            backgroundColor: (0, u.l)(r.palette[e].main, 0.62),
                            borderColor: (0, u.l)(r.palette[e].main, 0.62)
                          },
                          r.applyStyles("dark", {
                            backgroundColor: (0, u.j)(r.palette[e].main, 0.5)
                          }),
                          r.applyStyles("dark", { borderColor: (0, u.j)(r.palette[e].main, 0.5) })
                        )
                  )
                }))
            ]
          };
        }),
        V = (0, p.s)("span", {
          name: "MuiSlider",
          slot: "Thumb",
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [
              t.thumb,
              t["thumbColor".concat((0, u.a)(r.color))],
              "medium" !== r.size && t["thumbSize".concat((0, u.a)(r.size))]
            ];
          }
        })((e) => {
          var t;
          let { theme: r } = e;
          return {
            position: "absolute",
            width: 20,
            height: 20,
            boxSizing: "border-box",
            borderRadius: "50%",
            outline: 0,
            backgroundColor: "currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: r.transitions.create(["box-shadow", "left", "bottom"], {
              duration: r.transitions.duration.shortest
            }),
            "&::before": {
              position: "absolute",
              content: '""',
              borderRadius: "inherit",
              width: "100%",
              height: "100%",
              boxShadow: (r.vars || r).shadows[2]
            },
            "&::after": {
              position: "absolute",
              content: '""',
              borderRadius: "50%",
              width: 42,
              height: 42,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            },
            ["&.".concat(O.disabled)]: { "&:hover": { boxShadow: "none" } },
            variants: [
              {
                props: { size: "small" },
                style: { width: 12, height: 12, "&::before": { boxShadow: "none" } }
              },
              {
                props: { orientation: "horizontal" },
                style: { top: "50%", transform: "translate(-50%, -50%)" }
              },
              {
                props: { orientation: "vertical" },
                style: { left: "50%", transform: "translate(-50%, 50%)" }
              },
              ...Object.keys((null != (t = r.vars) ? t : r).palette)
                .filter((e) => {
                  var t;
                  return (null != (t = r.vars) ? t : r).palette[e].main;
                })
                .map((e) => ({
                  props: { color: e },
                  style: {
                    ["&:hover, &.".concat(O.focusVisible)]: (0, d._)(
                      {},
                      r.vars
                        ? {
                            boxShadow: "0px 0px 0px 8px rgba(".concat(
                              r.vars.palette[e].mainChannel,
                              " / 0.16)"
                            )
                          }
                        : {
                            boxShadow: "0px 0px 0px 8px ".concat((0, u.b)(r.palette[e].main, 0.16))
                          },
                      { "@media (hover: none)": { boxShadow: "none" } }
                    ),
                    ["&.".concat(O.active)]: (0, d._)(
                      {},
                      r.vars
                        ? {
                            boxShadow: "0px 0px 0px 14px rgba(".concat(
                              r.vars.palette[e].mainChannel,
                              " / 0.16)"
                            )
                          }
                        : {
                            boxShadow: "0px 0px 0px 14px ".concat((0, u.b)(r.palette[e].main, 0.16))
                          }
                    )
                  }
                }))
            ]
          };
        }),
        D = (0, p.s)(
          function (e) {
            let { children: t, className: r, value: n } = e,
              o = ((e) => {
                let { open: t } = e;
                return {
                  offset: (0, p.c)(t && O.valueLabelOpen),
                  circle: O.valueLabelCircle,
                  label: O.valueLabelLabel
                };
              })(e);
            return t
              ? s.cloneElement(
                  t,
                  { className: (0, p.c)(t.props.className) },
                  (0, S.jsxs)(s.Fragment, {
                    children: [
                      t.props.children,
                      (0, S.jsx)("span", {
                        className: (0, p.c)(o.offset, r),
                        "aria-hidden": !0,
                        children: (0, S.jsx)("span", {
                          className: o.circle,
                          children: (0, S.jsx)("span", { className: o.label, children: n })
                        })
                      })
                    ]
                  })
                )
              : null;
          },
          { name: "MuiSlider", slot: "ValueLabel", overridesResolver: (e, t) => t.valueLabel }
        )((e) => {
          let { theme: t } = e;
          return (0, d._)({ zIndex: 1, whiteSpace: "nowrap" }, t.typography.body2, {
            fontWeight: 500,
            transition: t.transitions.create(["transform"], {
              duration: t.transitions.duration.shortest
            }),
            position: "absolute",
            backgroundColor: (t.vars || t).palette.grey[600],
            borderRadius: 2,
            color: (t.vars || t).palette.common.white,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.25rem 0.75rem",
            variants: [
              {
                props: { orientation: "horizontal" },
                style: {
                  transform: "translateY(-100%) scale(0)",
                  top: "-10px",
                  transformOrigin: "bottom center",
                  "&::before": {
                    position: "absolute",
                    content: '""',
                    width: 8,
                    height: 8,
                    transform: "translate(-50%, 50%) rotate(45deg)",
                    backgroundColor: "inherit",
                    bottom: 0,
                    left: "50%"
                  },
                  ["&.".concat(O.valueLabelOpen)]: { transform: "translateY(-100%) scale(1)" }
                }
              },
              {
                props: { orientation: "vertical" },
                style: {
                  transform: "translateY(-50%) scale(0)",
                  right: "30px",
                  top: "50%",
                  transformOrigin: "right center",
                  "&::before": {
                    position: "absolute",
                    content: '""',
                    width: 8,
                    height: 8,
                    transform: "translate(-50%, -50%) rotate(45deg)",
                    backgroundColor: "inherit",
                    right: -8,
                    top: "50%"
                  },
                  ["&.".concat(O.valueLabelOpen)]: { transform: "translateY(-50%) scale(1)" }
                }
              },
              {
                props: { size: "small" },
                style: { fontSize: t.typography.pxToRem(12), padding: "0.25rem 0.5rem" }
              },
              { props: { orientation: "vertical", size: "small" }, style: { right: "20px" } }
            ]
          });
        }),
        j = (0, p.s)("span", {
          name: "MuiSlider",
          slot: "Mark",
          shouldForwardProp: (e) => (0, p.b)(e) && "markActive" !== e,
          overridesResolver: (e, t) => {
            let { markActive: r } = e;
            return [t.mark, r && t.markActive];
          }
        })((e) => {
          let { theme: t } = e;
          return {
            position: "absolute",
            width: 2,
            height: 2,
            borderRadius: 1,
            backgroundColor: "currentColor",
            variants: [
              {
                props: { orientation: "horizontal" },
                style: { top: "50%", transform: "translate(-1px, -50%)" }
              },
              {
                props: { orientation: "vertical" },
                style: { left: "50%", transform: "translate(-50%, 1px)" }
              },
              {
                props: { markActive: !0 },
                style: { backgroundColor: (t.vars || t).palette.background.paper, opacity: 0.8 }
              }
            ]
          };
        }),
        Q = (0, p.s)("span", {
          name: "MuiSlider",
          slot: "MarkLabel",
          shouldForwardProp: (e) => (0, p.b)(e) && "markLabelActive" !== e,
          overridesResolver: (e, t) => t.markLabel
        })((e) => {
          let { theme: t } = e;
          return (0, d._)({}, t.typography.body2, {
            color: (t.vars || t).palette.text.secondary,
            position: "absolute",
            whiteSpace: "nowrap",
            variants: [
              {
                props: { orientation: "horizontal" },
                style: {
                  top: 30,
                  transform: "translateX(-50%)",
                  "@media (pointer: coarse)": { top: 40 }
                }
              },
              {
                props: { orientation: "vertical" },
                style: {
                  left: 36,
                  transform: "translateY(50%)",
                  "@media (pointer: coarse)": { left: 44 }
                }
              },
              {
                props: { markLabelActive: !0 },
                style: { color: (t.vars || t).palette.text.primary }
              }
            ]
          });
        }),
        W = (e) => {
          let { children: t } = e;
          return t;
        },
        K = s.forwardRef(function (e, t) {
          var r, n, o, a, i, l, c, O, K, Y, X, $, Z, J, ee, et, er, en, eo, es, ea, ei, el, eu;
          let ec = (0, P.u)({ props: e, name: "MuiSlider" }),
            ed = (0, m.u)(),
            {
              "aria-label": ep,
              "aria-valuetext": em,
              "aria-labelledby": eh,
              component: ev = "span",
              components: ef = {},
              componentsProps: eg = {},
              color: eI = "primary",
              classes: ew,
              className: ey,
              disableSwap: eb = !1,
              disabled: ex = !1,
              getAriaLabel: eT,
              getAriaValueText: eS,
              marks: eP = !1,
              max: eC = 100,
              min: eA = 0,
              orientation: eR = "horizontal",
              shiftStep: ek = 10,
              size: eE = "medium",
              step: eq = 1,
              scale: eF = z,
              slotProps: eG,
              slots: eH,
              track: eN = "normal",
              valueLabelDisplay: eM = "off",
              valueLabelFormat: eO = z
            } = ec,
            eU = (0, u._)(ec, U),
            ez = (0, d._)({}, ec, {
              isRtl: ed,
              max: eC,
              min: eA,
              classes: ew,
              disabled: ex,
              disableSwap: eb,
              orientation: eR,
              marks: eP,
              color: eI,
              size: eE,
              step: eq,
              shiftStep: ek,
              scale: eF,
              track: eN,
              valueLabelDisplay: eM,
              valueLabelFormat: eO
            }),
            {
              axisProps: eL,
              getRootProps: e_,
              getHiddenInputProps: eB,
              getThumbProps: eV,
              open: eD,
              active: ej,
              axis: eQ,
              focusedThumbIndex: eW,
              range: eK,
              dragging: eY,
              marks: eX,
              values: e$,
              trackOffset: eZ,
              trackLeap: eJ,
              getThumbStyle: e0
            } = (function (e) {
              let {
                  "aria-labelledby": t,
                  defaultValue: r,
                  disabled: n = !1,
                  disableSwap: o = !1,
                  isRtl: a = !1,
                  marks: i = !1,
                  max: l = 100,
                  min: u = 0,
                  name: c,
                  onChange: p,
                  onChangeCommitted: m,
                  orientation: T = "horizontal",
                  rootRef: S,
                  scale: P = H,
                  step: C = 1,
                  shiftStep: M = 10,
                  tabIndex: O,
                  value: U
                } = e,
                z = s.useRef(void 0),
                [L, _] = s.useState(-1),
                [B, V] = s.useState(-1),
                [D, j] = s.useState(!1),
                Q = s.useRef(0),
                [W, K] = (0, h.u)({ controlled: U, default: null != r ? r : u, name: "Slider" }),
                Y =
                  p &&
                  ((e, t, r) => {
                    let n = e.nativeEvent || e,
                      o = new n.constructor(n.type, n);
                    (Object.defineProperty(o, "target", {
                      writable: !0,
                      value: { value: t, name: c }
                    }),
                      p(o, t, r));
                  }),
                X = Array.isArray(W),
                $ = X ? W.slice().sort(A) : [W];
              $ = $.map((e) => (null == e ? u : (0, v.c)(e, u, l)));
              let Z =
                  !0 === i && null !== C
                    ? [...Array(Math.floor((l - u) / C) + 1)].map((e, t) => ({ value: u + C * t }))
                    : i || [],
                J = Z.map((e) => e.value),
                { isFocusVisibleRef: ee, onBlur: et, onFocus: er, ref: en } = (0, f.u)(),
                [eo, es] = s.useState(-1),
                ea = s.useRef(null),
                ei = (0, g.u)(en, ea),
                el = (0, g.u)(S, ei),
                eu = (e, t) => {
                  let r = Number(e.currentTarget.getAttribute("data-index")),
                    n = $[r],
                    s = J.indexOf(n),
                    a = t;
                  if (Z && null == C) {
                    let e = J[J.length - 1];
                    a = a > e ? e : a < J[0] ? J[0] : a < n ? J[s - 1] : J[s + 1];
                  }
                  if (((a = (0, v.c)(a, u, l)), X)) {
                    o && (a = (0, v.c)(a, $[r - 1] || -1 / 0, $[r + 1] || 1 / 0));
                    let e = a;
                    a = E({ values: $, newValue: a, index: r });
                    let t = r;
                    (o || (t = a.indexOf(e)), q({ sliderRef: ea, activeIndex: t }));
                  }
                  (K(a), es(r), Y && !F(a, W) && Y(e, a, r), m && m(e, a));
                };
              ((0, I.u)(() => {
                var e;
                n &&
                  ea.current.contains(document.activeElement) &&
                  (null == (e = document.activeElement) || e.blur());
              }, [n]),
                n && -1 !== L && _(-1),
                n && -1 !== eo && es(-1));
              let ec = s.useRef(void 0),
                ed = T;
              a && "horizontal" === T && (ed += "-reverse");
              let ep = (e) => {
                  let t,
                    r,
                    { finger: n, move: s = !1 } = e,
                    { current: a } = ea,
                    { width: i, height: c, bottom: d, left: p } = a.getBoundingClientRect();
                  if (
                    ((t = 0 === ed.indexOf("vertical") ? (d - n.y) / c : (n.x - p) / i),
                    -1 !== ed.indexOf("-reverse") && (t = 1 - t),
                    (r = (l - u) * t + u),
                    C)
                  )
                    r = Number(
                      (Math.round((r - u) / C) * C + u).toFixed(
                        (function (e) {
                          if (1 > Math.abs(e)) {
                            let t = e.toExponential().split("e-"),
                              r = t[0].split(".")[1];
                            return (r ? r.length : 0) + parseInt(t[1], 10);
                          }
                          let t = e.toString().split(".")[1];
                          return t ? t.length : 0;
                        })(C)
                      )
                    );
                  else {
                    let e = R(J, r);
                    r = J[e];
                  }
                  r = (0, v.c)(r, u, l);
                  let m = 0;
                  if (X) {
                    ((m = s ? ec.current : R($, r)),
                      o && (r = (0, v.c)(r, $[m - 1] || -1 / 0, $[m + 1] || 1 / 0)));
                    let e = r;
                    ((r = E({ values: $, newValue: r, index: m })),
                      (o && s) || (ec.current = m = r.indexOf(e)));
                  }
                  return { newValue: r, activeIndex: m };
                },
                em = (0, w.u)((e) => {
                  let t = k(e, z);
                  if (!t) return;
                  if (((Q.current += 1), "mousemove" === e.type && 0 === e.buttons))
                    return void eh(e);
                  let { newValue: r, activeIndex: n } = ep({ finger: t, move: !0 });
                  (q({ sliderRef: ea, activeIndex: n, setActive: _ }),
                    K(r),
                    !D && Q.current > 2 && j(!0),
                    Y && !F(r, W) && Y(e, r, n));
                }),
                eh = (0, w.u)((e) => {
                  let t = k(e, z);
                  if ((j(!1), !t)) return;
                  let { newValue: r } = ep({ finger: t, move: !0 });
                  (_(-1), "touchend" === e.type && V(-1), m && m(e, r), (z.current = void 0), ef());
                }),
                ev = (0, w.u)((e) => {
                  if (n) return;
                  N() || e.preventDefault();
                  let t = e.changedTouches[0];
                  null != t && (z.current = t.identifier);
                  let r = k(e, z);
                  if (!1 !== r) {
                    let { newValue: t, activeIndex: n } = ep({ finger: r });
                    (q({ sliderRef: ea, activeIndex: n, setActive: _ }),
                      K(t),
                      Y && !F(t, W) && Y(e, t, n));
                  }
                  Q.current = 0;
                  let o = (0, y.o)(ea.current);
                  (o.addEventListener("touchmove", em, { passive: !0 }),
                    o.addEventListener("touchend", eh, { passive: !0 }));
                }),
                ef = s.useCallback(() => {
                  let e = (0, y.o)(ea.current);
                  (e.removeEventListener("mousemove", em),
                    e.removeEventListener("mouseup", eh),
                    e.removeEventListener("touchmove", em),
                    e.removeEventListener("touchend", eh));
                }, [eh, em]);
              (s.useEffect(() => {
                let { current: e } = ea;
                return (
                  e.addEventListener("touchstart", ev, { passive: N() }),
                  () => {
                    (e.removeEventListener("touchstart", ev), ef());
                  }
                );
              }, [ef, ev]),
                s.useEffect(() => {
                  n && ef();
                }, [n, ef]));
              let eg = (100 * ((X ? $[0] : u) - u)) / (l - u),
                eI = (100 * ($[$.length - 1] - u)) / (l - u) - eg;
              return {
                active: L,
                axis: ed,
                axisProps: G,
                dragging: D,
                focusedThumbIndex: eo,
                getHiddenInputProps: function () {
                  var r, o;
                  let s,
                    i,
                    p,
                    m = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    h = (0, b.e)(m),
                    v = {
                      onChange:
                        ((o = h || {}),
                        (e) => {
                          var t;
                          (null == (t = o.onChange) || t.call(o, e), eu(e, e.target.valueAsNumber));
                        }),
                      onFocus:
                        ((s = h || {}),
                        (e) => {
                          var t;
                          let r = Number(e.currentTarget.getAttribute("data-index"));
                          (er(e),
                            !0 === ee.current && es(r),
                            V(r),
                            null == s || null == (t = s.onFocus) || t.call(s, e));
                        }),
                      onBlur:
                        ((i = h || {}),
                        (e) => {
                          var t;
                          (et(e),
                            !1 === ee.current && es(-1),
                            V(-1),
                            null == i || null == (t = i.onBlur) || t.call(i, e));
                        }),
                      onKeyDown:
                        ((p = h || {}),
                        (e) => {
                          var t;
                          if (null !== C) {
                            let t = $[Number(e.currentTarget.getAttribute("data-index"))],
                              r = null;
                            ((("ArrowLeft" === e.key || "ArrowDown" === e.key) && e.shiftKey) ||
                            "PageDown" === e.key
                              ? (r = Math.max(t - M, u))
                              : ((("ArrowRight" === e.key || "ArrowUp" === e.key) && e.shiftKey) ||
                                  "PageUp" === e.key) &&
                                (r = Math.min(t + M, l)),
                              null !== r && (eu(e, r), e.preventDefault()));
                          }
                          null == p || null == (t = p.onKeyDown) || t.call(p, e);
                        })
                    },
                    f = (0, d._)({}, h, v);
                  return (0, d._)(
                    {
                      tabIndex: O,
                      "aria-labelledby": t,
                      "aria-orientation": T,
                      "aria-valuemax": P(l),
                      "aria-valuemin": P(u),
                      name: c,
                      type: "range",
                      min: e.min,
                      max: e.max,
                      step: null === e.step && e.marks ? "any" : null != (r = e.step) ? r : void 0,
                      disabled: n
                    },
                    m,
                    f,
                    {
                      style: (0, d._)({}, x.v, {
                        direction: a ? "rtl" : "ltr",
                        width: "100%",
                        height: "100%"
                      })
                    }
                  );
                },
                getRootProps: function () {
                  var e;
                  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = (0, b.e)(t),
                    o = {
                      onMouseDown:
                        ((e = r || {}),
                        (t) => {
                          var r;
                          if (
                            (null == (r = e.onMouseDown) || r.call(e, t),
                            n || t.defaultPrevented || 0 !== t.button)
                          )
                            return;
                          t.preventDefault();
                          let o = k(t, z);
                          if (!1 !== o) {
                            let { newValue: e, activeIndex: r } = ep({ finger: o });
                            (q({ sliderRef: ea, activeIndex: r, setActive: _ }),
                              K(e),
                              Y && !F(e, W) && Y(t, e, r));
                          }
                          Q.current = 0;
                          let s = (0, y.o)(ea.current);
                          (s.addEventListener("mousemove", em, { passive: !0 }),
                            s.addEventListener("mouseup", eh));
                        })
                    },
                    s = (0, d._)({}, r, o);
                  return (0, d._)({}, t, { ref: el }, s);
                },
                getThumbProps: function () {
                  var e;
                  let t,
                    r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, b.e)(r),
                    o = {
                      onMouseOver:
                        ((e = n || {}),
                        (t) => {
                          var r;
                          (null == (r = e.onMouseOver) || r.call(e, t),
                            V(Number(t.currentTarget.getAttribute("data-index"))));
                        }),
                      onMouseLeave:
                        ((t = n || {}),
                        (e) => {
                          var r;
                          (null == (r = t.onMouseLeave) || r.call(t, e), V(-1));
                        })
                    };
                  return (0, d._)({}, r, n, o);
                },
                marks: Z,
                open: B,
                range: X,
                rootRef: el,
                trackLeap: eI,
                trackOffset: eg,
                values: $,
                getThumbStyle: (e) => ({ pointerEvents: -1 !== L && L !== e ? "none" : void 0 })
              };
            })((0, d._)({}, ez, { rootRef: t }));
          ((ez.marked = eX.length > 0 && eX.some((e) => e.label)),
            (ez.dragging = eY),
            (ez.focusedThumbIndex = eW));
          let e1 = ((e) => {
              let {
                  disabled: t,
                  dragging: r,
                  marked: n,
                  orientation: o,
                  track: s,
                  classes: a,
                  color: i,
                  size: l
                } = e,
                c = {
                  root: [
                    "root",
                    t && "disabled",
                    r && "dragging",
                    n && "marked",
                    "vertical" === o && "vertical",
                    "inverted" === s && "trackInverted",
                    !1 === s && "trackFalse",
                    i && "color".concat((0, u.a)(i)),
                    l && "size".concat((0, u.a)(l))
                  ],
                  rail: ["rail"],
                  track: ["track"],
                  mark: ["mark"],
                  markActive: ["markActive"],
                  markLabel: ["markLabel"],
                  markLabelActive: ["markLabelActive"],
                  valueLabel: ["valueLabel"],
                  thumb: [
                    "thumb",
                    t && "disabled",
                    l && "thumbSize".concat((0, u.a)(l)),
                    i && "thumbColor".concat((0, u.a)(i))
                  ],
                  active: ["active"],
                  disabled: ["disabled"],
                  focusVisible: ["focusVisible"]
                };
              return (0, p.a)(c, M, a);
            })(ez),
            e2 = null != (r = null != (n = null == eH ? void 0 : eH.root) ? n : ef.Root) ? r : L,
            e4 = null != (o = null != (a = null == eH ? void 0 : eH.rail) ? a : ef.Rail) ? o : _,
            e5 = null != (i = null != (l = null == eH ? void 0 : eH.track) ? l : ef.Track) ? i : B,
            e3 = null != (c = null != (O = null == eH ? void 0 : eH.thumb) ? O : ef.Thumb) ? c : V,
            e6 =
              null != (K = null != (Y = null == eH ? void 0 : eH.valueLabel) ? Y : ef.ValueLabel)
                ? K
                : D,
            e7 = null != (X = null != ($ = null == eH ? void 0 : eH.mark) ? $ : ef.Mark) ? X : j,
            e8 =
              null != (Z = null != (J = null == eH ? void 0 : eH.markLabel) ? J : ef.MarkLabel)
                ? Z
                : Q,
            e9 =
              null != (ee = null != (et = null == eH ? void 0 : eH.input) ? et : ef.Input)
                ? ee
                : "input",
            te = null != (er = null == eG ? void 0 : eG.root) ? er : eg.root,
            tt = null != (en = null == eG ? void 0 : eG.rail) ? en : eg.rail,
            tr = null != (eo = null == eG ? void 0 : eG.track) ? eo : eg.track,
            tn = null != (es = null == eG ? void 0 : eG.thumb) ? es : eg.thumb,
            to = null != (ea = null == eG ? void 0 : eG.valueLabel) ? ea : eg.valueLabel,
            ts = null != (ei = null == eG ? void 0 : eG.mark) ? ei : eg.mark,
            ta = null != (el = null == eG ? void 0 : eG.markLabel) ? el : eg.markLabel,
            ti = null != (eu = null == eG ? void 0 : eG.input) ? eu : eg.input,
            tl = (0, C.u)({
              elementType: e2,
              getSlotProps: e_,
              externalSlotProps: te,
              externalForwardedProps: eU,
              additionalProps: (0, d._)({}, (!e2 || !(0, T.i)(e2)) && { as: ev }),
              ownerState: (0, d._)({}, ez, null == te ? void 0 : te.ownerState),
              className: [e1.root, ey]
            }),
            tu = (0, C.u)({
              elementType: e4,
              externalSlotProps: tt,
              ownerState: ez,
              className: e1.rail
            }),
            tc = (0, C.u)({
              elementType: e5,
              externalSlotProps: tr,
              additionalProps: { style: (0, d._)({}, eL[eQ].offset(eZ), eL[eQ].leap(eJ)) },
              ownerState: (0, d._)({}, ez, null == tr ? void 0 : tr.ownerState),
              className: e1.track
            }),
            td = (0, C.u)({
              elementType: e3,
              getSlotProps: eV,
              externalSlotProps: tn,
              ownerState: (0, d._)({}, ez, null == tn ? void 0 : tn.ownerState),
              className: e1.thumb
            }),
            tp = (0, C.u)({
              elementType: e6,
              externalSlotProps: to,
              ownerState: (0, d._)({}, ez, null == to ? void 0 : to.ownerState),
              className: e1.valueLabel
            }),
            tm = (0, C.u)({
              elementType: e7,
              externalSlotProps: ts,
              ownerState: ez,
              className: e1.mark
            }),
            th = (0, C.u)({
              elementType: e8,
              externalSlotProps: ta,
              ownerState: ez,
              className: e1.markLabel
            }),
            tv = (0, C.u)({
              elementType: e9,
              getSlotProps: eB,
              externalSlotProps: ti,
              ownerState: ez
            });
          return (0, S.jsxs)(
            e2,
            (0, d._)({}, tl, {
              children: [
                (0, S.jsx)(e4, (0, d._)({}, tu)),
                (0, S.jsx)(e5, (0, d._)({}, tc)),
                eX
                  .filter((e) => e.value >= eA && e.value <= eC)
                  .map((e, t) => {
                    let r,
                      n = (100 * (e.value - eA)) / (eC - eA),
                      o = eL[eQ].offset(n);
                    return (
                      (r =
                        !1 === eN
                          ? -1 !== e$.indexOf(e.value)
                          : ("normal" === eN &&
                              (eK
                                ? e.value >= e$[0] && e.value <= e$[e$.length - 1]
                                : e.value <= e$[0])) ||
                            ("inverted" === eN &&
                              (eK
                                ? e.value <= e$[0] || e.value >= e$[e$.length - 1]
                                : e.value >= e$[0]))),
                      (0, S.jsxs)(
                        s.Fragment,
                        {
                          children: [
                            (0, S.jsx)(
                              e7,
                              (0, d._)(
                                { "data-index": t },
                                tm,
                                !(0, T.i)(e7) && { markActive: r },
                                {
                                  style: (0, d._)({}, o, tm.style),
                                  className: (0, p.c)(tm.className, r && e1.markActive)
                                }
                              )
                            ),
                            null != e.label
                              ? (0, S.jsx)(
                                  e8,
                                  (0, d._)(
                                    { "aria-hidden": !0, "data-index": t },
                                    th,
                                    !(0, T.i)(e8) && { markLabelActive: r },
                                    {
                                      style: (0, d._)({}, o, th.style),
                                      className: (0, p.c)(
                                        e1.markLabel,
                                        th.className,
                                        r && e1.markLabelActive
                                      ),
                                      children: e.label
                                    }
                                  )
                                )
                              : null
                          ]
                        },
                        t
                      )
                    );
                  }),
                e$.map((e, t) => {
                  let r = (100 * (e - eA)) / (eC - eA),
                    n = eL[eQ].offset(r),
                    o = "off" === eM ? W : e6;
                  return (0, S.jsx)(
                    o,
                    (0, d._)(
                      {},
                      !(0, T.i)(o) && {
                        valueLabelFormat: eO,
                        valueLabelDisplay: eM,
                        value: "function" == typeof eO ? eO(eF(e), t) : eO,
                        index: t,
                        open: eD === t || ej === t || "on" === eM,
                        disabled: ex
                      },
                      tp,
                      {
                        children: (0, S.jsx)(
                          e3,
                          (0, d._)({ "data-index": t }, td, {
                            className: (0, p.c)(
                              e1.thumb,
                              td.className,
                              ej === t && e1.active,
                              eW === t && e1.focusVisible
                            ),
                            style: (0, d._)({}, n, e0(t), td.style),
                            children: (0, S.jsx)(
                              e9,
                              (0, d._)(
                                {
                                  "data-index": t,
                                  "aria-label": eT ? eT(t) : ep,
                                  "aria-valuenow": eF(e),
                                  "aria-labelledby": eh,
                                  "aria-valuetext": eS ? eS(eF(e), t) : em,
                                  value: e$[t]
                                },
                                tv
                              )
                            )
                          })
                        )
                      }
                    ),
                    t
                  );
                })
              ]
            })
          );
        });
      var Y = (0, a.A)({ name: "Slider" })(function (e) {
          var t, r;
          return {
            thumb: { boxShadow: e.elevation.subtle },
            valueLabel: (0, o._)((0, o._)({}, e.typography.smallLabel1), {
              color: e.palette.content.inverse,
              backgroundColor: e.palette.actionV2.primary.fill
            }),
            colorPrimary:
              (((t = {})["& .".concat(O.rail)] = { color: e.palette.content.disabled }),
              (t["&.".concat(O.trackInverted)] =
                (((r = {})["& .".concat(O.track)] = {
                  backgroundColor: (0, c.l)(e.palette.content.disabled, 0.62),
                  borderColor: (0, c.l)(e.palette.content.disabled, 0.62)
                }),
                (r["& .".concat(O.rail)] = { color: e.palette.actionV2.primaryBrand.fill }),
                r)),
              t)
          };
        }),
        X = (0, s.forwardRef)(function (e, t) {
          var r = e.classes,
            n = e.className,
            a = (0, o.a)(e, ["classes", "className"]),
            l = Y(void 0, { props: { classes: (0, i.A)(r, n) } });
          return s.createElement(K, (0, o._)({}, a, { classes: l.classes, ref: t }));
        });
    },
    7602: (e, t, r) => {
      r.d(t, { _: () => o, a: () => s, b: () => a });
      var n = function (e, t) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(e, t);
      };
      function o(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function r() {
          this.constructor = e;
        }
        (n(e, t),
          (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r())));
      }
      function s(e, t, r, n) {
        return new (r || (r = Promise))(function (o, s) {
          function a(e) {
            try {
              l(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function i(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, i);
          }
          l((n = n.apply(e, t || [])).next());
        });
      }
      function a(e, t) {
        var r,
          n,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: []
          },
          a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return (
          (a.next = i(0)),
          (a.throw = i(1)),
          (a.return = i(2)),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function i(i) {
          return function (l) {
            var u = [i, l];
            if (r) throw TypeError("Generator is already executing.");
            for (; a && ((a = 0), u[0] && (s = 0)), s;)
              try {
                if (
                  ((r = 1),
                  n &&
                    (o =
                      2 & u[0]
                        ? n.return
                        : u[0]
                          ? n.throw || ((o = n.return) && o.call(n), 0)
                          : n.next) &&
                    !(o = o.call(n, u[1])).done)
                )
                  return o;
                switch (((n = 0), o && (u = [2 & u[0], o.value]), u[0])) {
                  case 0:
                  case 1:
                    o = u;
                    break;
                  case 4:
                    return (s.label++, { value: u[1], done: !1 });
                  case 5:
                    (s.label++, (n = u[1]), (u = [0]));
                    continue;
                  case 7:
                    ((u = s.ops.pop()), s.trys.pop());
                    continue;
                  default:
                    if (
                      !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                      (6 === u[0] || 2 === u[0])
                    ) {
                      s = 0;
                      continue;
                    }
                    if (3 === u[0] && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                      s.label = u[1];
                      break;
                    }
                    if (6 === u[0] && s.label < o[1]) {
                      ((s.label = o[1]), (o = u));
                      break;
                    }
                    if (o && s.label < o[2]) {
                      ((s.label = o[2]), s.ops.push(u));
                      break;
                    }
                    (o[2] && s.ops.pop(), s.trys.pop());
                    continue;
                }
                u = t.call(e, s);
              } catch (e) {
                ((u = [6, e]), (n = 0));
              } finally {
                r = o = 0;
              }
            if (5 & u[0]) throw u[1];
            return { value: u[0] ? u[1] : void 0, done: !0 };
          };
        }
      }
      "function" == typeof SuppressedError && SuppressedError;
    },
    10543: (e, t, r) => {
      r.d(t, { LN: () => d, Nj: () => p });
      var n = r(1300),
        o = r(7602);
      function s(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              name: (0, n.t2)(t, "name") ? t.name : void 0,
              displayName: (0, n.t2)(t, "displayName") ? t.displayName : void 0,
              filter: (0, n.t2)(t, "filter") ? t.filter : void 0,
              id: (0, n.t2)(t, "id") ? t.id : void 0,
              type: (0, n.t2)(t, "type") ? t.type : void 0,
              categoryType: (0, n.t2)(t, "categoryType") ? t.categoryType : void 0
            };
      }
      function a(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              name: (0, n.t2)(t, "name") ? t.name : void 0,
              displayName: (0, n.t2)(t, "displayName") ? t.displayName : void 0,
              categoryType: (0, n.t2)(t, "categoryType") ? t.categoryType : void 0,
              items: (0, n.t2)(t, "items") ? t.items.map(s) : void 0
            };
      }
      function i(e, t) {
        return null == e
          ? e
          : { categories: (0, n.t2)(e, "categories") ? e.categories.map(a) : void 0 };
      }
      function l(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              userAssetId: (0, n.t2)(t, "userAssetId") ? t.userAssetId : void 0,
              serialNumber: (0, n.t2)(t, "serialNumber") ? t.serialNumber : void 0,
              assetId: (0, n.t2)(t, "assetId") ? t.assetId : void 0,
              name: (0, n.t2)(t, "name") ? t.name : void 0,
              recentAveragePrice: (0, n.t2)(t, "recentAveragePrice")
                ? t.recentAveragePrice
                : void 0,
              originalPrice: (0, n.t2)(t, "originalPrice") ? t.originalPrice : void 0,
              assetStock: (0, n.t2)(t, "assetStock") ? t.assetStock : void 0,
              buildersClubMembershipType: (0, n.t2)(t, "buildersClubMembershipType")
                ? t.buildersClubMembershipType
                : void 0,
              isOnHold: (0, n.t2)(t, "isOnHold") ? t.isOnHold : void 0
            };
      }
      function u(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              id: (0, n.t2)(t, "id") ? t.id : void 0,
              name: (0, n.t2)(t, "name") ? t.name : void 0,
              type: (0, n.t2)(t, "type") ? t.type : void 0,
              instanceId: (0, n.t2)(t, "instanceId") ? t.instanceId : void 0
            };
      }
      function c(e) {
        var t, r;
        return null == (t = e)
          ? t
          : {
              universeId: (0, n.t2)(t, "universeId") ? t.universeId : void 0,
              placeId: (0, n.t2)(t, "placeId") ? t.placeId : void 0,
              name: (0, n.t2)(t, "name") ? t.name : void 0,
              creator: (0, n.t2)(t, "creator")
                ? null == (r = t.creator)
                  ? r
                  : {
                      id: (0, n.t2)(r, "id") ? r.id : void 0,
                      name: (0, n.t2)(r, "name") ? r.name : void 0,
                      type: (0, n.t2)(r, "type") ? r.type : void 0
                    }
                : void 0,
              priceInRobux: (0, n.t2)(t, "priceInRobux") ? t.priceInRobux : void 0
            };
      }
      ((function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        ((0, o._)(t, e),
          (t.prototype.v1PackagesPackageIdAssetsGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.packageID || void 0 === e.packageID)
                      throw new n.Q0(
                        "packageID",
                        "Required parameter requestParameters.packageID was null or undefined when calling v1PackagesPackageIdAssetsGet."
                      );
                    return (
                      (r = {}),
                      (s = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/packages/{packageId}/assets".replace(
                              "{".concat("packageID", "}"),
                              encodeURIComponent(String(e.packageID))
                            ),
                            schemaPath: "/v1/packages/{packageId}/assets",
                            method: "GET",
                            headers: s,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return null == e
                            ? e
                            : { assetIds: (0, n.t2)(e, "assetIds") ? e.assetIds : void 0 };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1PackagesPackageIdAssetsGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v1PackagesPackageIdAssetsGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }));
      })(n.yi),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          ((0, o._)(t, e),
            (t.prototype.v1CollectionsItemsItemTypeItemTargetIdDeleteRaw = function (e, t) {
              return (0, o.a)(this, void 0, void 0, function () {
                var r, s, a;
                return (0, o.b)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (null === e.itemType || void 0 === e.itemType)
                        throw new n.Q0(
                          "itemType",
                          "Required parameter requestParameters.itemType was null or undefined when calling v1CollectionsItemsItemTypeItemTargetIdDelete."
                        );
                      if (null === e.itemTargetId || void 0 === e.itemTargetId)
                        throw new n.Q0(
                          "itemTargetId",
                          "Required parameter requestParameters.itemTargetId was null or undefined when calling v1CollectionsItemsItemTypeItemTargetIdDelete."
                        );
                      return (
                        (r = {}),
                        (s = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/collections/items/{itemType}/{itemTargetId}"
                                .replace(
                                  "{".concat("itemType", "}"),
                                  encodeURIComponent(String(e.itemType))
                                )
                                .replace(
                                  "{".concat("itemTargetId", "}"),
                                  encodeURIComponent(String(e.itemTargetId))
                                ),
                              schemaPath: "/v1/collections/items/{itemType}/{itemTargetId}",
                              method: "DELETE",
                              headers: s,
                              query: r
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = o.sent()), [2, new n.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1CollectionsItemsItemTypeItemTargetIdDelete = function (e, t) {
              return (0, o.a)(this, void 0, void 0, function () {
                return (0, o.b)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.v1CollectionsItemsItemTypeItemTargetIdDeleteRaw(e, t)];
                    case 1:
                      return [4, r.sent().value()];
                    case 2:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1CollectionsItemsItemTypeItemTargetIdPostRaw = function (e, t) {
              return (0, o.a)(this, void 0, void 0, function () {
                var r, s, a;
                return (0, o.b)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (null === e.itemType || void 0 === e.itemType)
                        throw new n.Q0(
                          "itemType",
                          "Required parameter requestParameters.itemType was null or undefined when calling v1CollectionsItemsItemTypeItemTargetIdPost."
                        );
                      if (null === e.itemTargetId || void 0 === e.itemTargetId)
                        throw new n.Q0(
                          "itemTargetId",
                          "Required parameter requestParameters.itemTargetId was null or undefined when calling v1CollectionsItemsItemTypeItemTargetIdPost."
                        );
                      return (
                        (r = {}),
                        (s = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/collections/items/{itemType}/{itemTargetId}"
                                .replace(
                                  "{".concat("itemType", "}"),
                                  encodeURIComponent(String(e.itemType))
                                )
                                .replace(
                                  "{".concat("itemTargetId", "}"),
                                  encodeURIComponent(String(e.itemTargetId))
                                ),
                              schemaPath: "/v1/collections/items/{itemType}/{itemTargetId}",
                              method: "POST",
                              headers: s,
                              query: r
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = o.sent()), [2, new n.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1CollectionsItemsItemTypeItemTargetIdPost = function (e, t) {
              return (0, o.a)(this, void 0, void 0, function () {
                return (0, o.b)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.v1CollectionsItemsItemTypeItemTargetIdPostRaw(e, t)];
                    case 1:
                      return [4, r.sent().value()];
                    case 2:
                      return [2, r.sent()];
                  }
                });
              });
            }));
        })(n.yi));
      var d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            (0, o._)(t, e),
            (t.prototype.v1UsersUserIdAssetsCollectiblesGetRaw = function (e, t) {
              return (0, o.a)(this, void 0, void 0, function () {
                var r, s, a;
                return (0, o.b)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (null === e.userId || void 0 === e.userId)
                        throw new n.Q0(
                          "userId",
                          "Required parameter requestParameters.userId was null or undefined when calling v1UsersUserIdAssetsCollectiblesGet."
                        );
                      return (
                        (r = {}),
                        void 0 !== e.assetType && (r.assetType = e.assetType),
                        void 0 !== e.limit && (r.limit = e.limit),
                        void 0 !== e.cursor && (r.cursor = e.cursor),
                        void 0 !== e.sortOrder && (r.sortOrder = e.sortOrder),
                        (s = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/users/{userId}/assets/collectibles".replace(
                                "{".concat("userId", "}"),
                                encodeURIComponent(String(e.userId))
                              ),
                              schemaPath: "/v1/users/{userId}/assets/collectibles",
                              method: "GET",
                              headers: s,
                              query: r
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = o.sent()),
                        [
                          2,
                          new n.ko(a, function (e) {
                            return null == e
                              ? e
                              : {
                                  previousPageCursor: (0, n.t2)(e, "previousPageCursor")
                                    ? e.previousPageCursor
                                    : void 0,
                                  nextPageCursor: (0, n.t2)(e, "nextPageCursor")
                                    ? e.nextPageCursor
                                    : void 0,
                                  data: (0, n.t2)(e, "data") ? e.data.map(l) : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1UsersUserIdAssetsCollectiblesGet = function (e, t) {
              return (0, o.a)(this, void 0, void 0, function () {
                return (0, o.b)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.v1UsersUserIdAssetsCollectiblesGetRaw(e, t)];
                    case 1:
                      return [4, r.sent().value()];
                    case 2:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UsersUserIdCanViewInventoryGetRaw = function (e, t) {
              return (0, o.a)(this, void 0, void 0, function () {
                var r, s, a;
                return (0, o.b)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (null === e.userId || void 0 === e.userId)
                        throw new n.Q0(
                          "userId",
                          "Required parameter requestParameters.userId was null or undefined when calling v1UsersUserIdCanViewInventoryGet."
                        );
                      return (
                        (r = {}),
                        (s = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/users/{userId}/can-view-inventory".replace(
                                "{".concat("userId", "}"),
                                encodeURIComponent(String(e.userId))
                              ),
                              schemaPath: "/v1/users/{userId}/can-view-inventory",
                              method: "GET",
                              headers: s,
                              query: r
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = o.sent()),
                        [
                          2,
                          new n.ko(a, function (e) {
                            return null == e
                              ? e
                              : { canView: (0, n.t2)(e, "canView") ? e.canView : void 0 };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1UsersUserIdCanViewInventoryGet = function (e, t) {
              return (0, o.a)(this, void 0, void 0, function () {
                return (0, o.b)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.v1UsersUserIdCanViewInventoryGetRaw(e, t)];
                    case 1:
                      return [4, r.sent().value()];
                    case 2:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UsersUserIdCategoriesFavoritesGetRaw = function (e, t) {
              return (0, o.a)(this, void 0, void 0, function () {
                var r, s, a;
                return (0, o.b)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (null === e.userId || void 0 === e.userId)
                        throw new n.Q0(
                          "userId",
                          "Required parameter requestParameters.userId was null or undefined when calling v1UsersUserIdCategoriesFavoritesGet."
                        );
                      return (
                        (r = {}),
                        (s = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/users/{userId}/categories/favorites".replace(
                                "{".concat("userId", "}"),
                                encodeURIComponent(String(e.userId))
                              ),
                              schemaPath: "/v1/users/{userId}/categories/favorites",
                              method: "GET",
                              headers: s,
                              query: r
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = o.sent()),
                        [
                          2,
                          new n.ko(a, function (e) {
                            return i(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1UsersUserIdCategoriesFavoritesGet = function (e, t) {
              return (0, o.a)(this, void 0, void 0, function () {
                return (0, o.b)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.v1UsersUserIdCategoriesFavoritesGetRaw(e, t)];
                    case 1:
                      return [4, r.sent().value()];
                    case 2:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UsersUserIdCategoriesGetRaw = function (e, t) {
              return (0, o.a)(this, void 0, void 0, function () {
                var r, s, a;
                return (0, o.b)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (null === e.userId || void 0 === e.userId)
                        throw new n.Q0(
                          "userId",
                          "Required parameter requestParameters.userId was null or undefined when calling v1UsersUserIdCategoriesGet."
                        );
                      return (
                        (r = {}),
                        (s = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/users/{userId}/categories".replace(
                                "{".concat("userId", "}"),
                                encodeURIComponent(String(e.userId))
                              ),
                              schemaPath: "/v1/users/{userId}/categories",
                              method: "GET",
                              headers: s,
                              query: r
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = o.sent()),
                        [
                          2,
                          new n.ko(a, function (e) {
                            return i(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1UsersUserIdCategoriesGet = function (e, t) {
              return (0, o.a)(this, void 0, void 0, function () {
                return (0, o.b)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.v1UsersUserIdCategoriesGetRaw(e, t)];
                    case 1:
                      return [4, r.sent().value()];
                    case 2:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UsersUserIdItemsItemTypeItemTargetIdGetRaw = function (e, t) {
              return (0, o.a)(this, void 0, void 0, function () {
                var r, s, a;
                return (0, o.b)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (null === e.userId || void 0 === e.userId)
                        throw new n.Q0(
                          "userId",
                          "Required parameter requestParameters.userId was null or undefined when calling v1UsersUserIdItemsItemTypeItemTargetIdGet."
                        );
                      if (null === e.itemType || void 0 === e.itemType)
                        throw new n.Q0(
                          "itemType",
                          "Required parameter requestParameters.itemType was null or undefined when calling v1UsersUserIdItemsItemTypeItemTargetIdGet."
                        );
                      if (null === e.itemTargetId || void 0 === e.itemTargetId)
                        throw new n.Q0(
                          "itemTargetId",
                          "Required parameter requestParameters.itemTargetId was null or undefined when calling v1UsersUserIdItemsItemTypeItemTargetIdGet."
                        );
                      return (
                        (r = {}),
                        (s = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/users/{userId}/items/{itemType}/{itemTargetId}"
                                .replace(
                                  "{".concat("userId", "}"),
                                  encodeURIComponent(String(e.userId))
                                )
                                .replace(
                                  "{".concat("itemType", "}"),
                                  encodeURIComponent(String(e.itemType))
                                )
                                .replace(
                                  "{".concat("itemTargetId", "}"),
                                  encodeURIComponent(String(e.itemTargetId))
                                ),
                              schemaPath: "/v1/users/{userId}/items/{itemType}/{itemTargetId}",
                              method: "GET",
                              headers: s,
                              query: r
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = o.sent()),
                        [
                          2,
                          new n.ko(a, function (e) {
                            return null == e
                              ? e
                              : {
                                  previousPageCursor: (0, n.t2)(e, "previousPageCursor")
                                    ? e.previousPageCursor
                                    : void 0,
                                  nextPageCursor: (0, n.t2)(e, "nextPageCursor")
                                    ? e.nextPageCursor
                                    : void 0,
                                  data: (0, n.t2)(e, "data") ? e.data.map(u) : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1UsersUserIdItemsItemTypeItemTargetIdGet = function (e, t) {
              return (0, o.a)(this, void 0, void 0, function () {
                return (0, o.b)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.v1UsersUserIdItemsItemTypeItemTargetIdGetRaw(e, t)];
                    case 1:
                      return [4, r.sent().value()];
                    case 2:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGetRaw = function (e, t) {
              return (0, o.a)(this, void 0, void 0, function () {
                var r, s, a;
                return (0, o.b)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (null === e.userId || void 0 === e.userId)
                        throw new n.Q0(
                          "userId",
                          "Required parameter requestParameters.userId was null or undefined when calling v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet."
                        );
                      if (null === e.itemType || void 0 === e.itemType)
                        throw new n.Q0(
                          "itemType",
                          "Required parameter requestParameters.itemType was null or undefined when calling v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet."
                        );
                      if (null === e.itemTargetId || void 0 === e.itemTargetId)
                        throw new n.Q0(
                          "itemTargetId",
                          "Required parameter requestParameters.itemTargetId was null or undefined when calling v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet."
                        );
                      return (
                        (r = {}),
                        (s = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/users/{userId}/items/{itemType}/{itemTargetId}/is-owned"
                                .replace(
                                  "{".concat("userId", "}"),
                                  encodeURIComponent(String(e.userId))
                                )
                                .replace(
                                  "{".concat("itemType", "}"),
                                  encodeURIComponent(String(e.itemType))
                                )
                                .replace(
                                  "{".concat("itemTargetId", "}"),
                                  encodeURIComponent(String(e.itemTargetId))
                                ),
                              schemaPath:
                                "/v1/users/{userId}/items/{itemType}/{itemTargetId}/is-owned",
                              method: "GET",
                              headers: s,
                              query: r
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = o.sent()),
                        this.isJsonMime(a.headers.get("content-type"))
                          ? [2, new n.ko(a)]
                          : [2, new n.Pf(a)]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGet = function (e, t) {
              return (0, o.a)(this, void 0, void 0, function () {
                return (0, o.b)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.v1UsersUserIdItemsItemTypeItemTargetIdIsOwnedGetRaw(e, t)];
                    case 1:
                      return [4, r.sent().value()];
                    case 2:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            t
          );
        })(n.yi),
        p = { NUMBER_0: 0, NUMBER_1: 1, NUMBER_2: 2, NUMBER_3: 3, NUMBER_4: 4 };
      !(function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        ((0, o._)(t, e),
          (t.prototype.v1UsersUserIdPlacesInventoryGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.userId || void 0 === e.userId)
                      throw new n.Q0(
                        "userId",
                        "Required parameter requestParameters.userId was null or undefined when calling v1UsersUserIdPlacesInventoryGet."
                      );
                    if (null === e.placesTab || void 0 === e.placesTab)
                      throw new n.Q0(
                        "placesTab",
                        "Required parameter requestParameters.placesTab was null or undefined when calling v1UsersUserIdPlacesInventoryGet."
                      );
                    if (null === e.itemsPerPage || void 0 === e.itemsPerPage)
                      throw new n.Q0(
                        "itemsPerPage",
                        "Required parameter requestParameters.itemsPerPage was null or undefined when calling v1UsersUserIdPlacesInventoryGet."
                      );
                    if (null === e.cursor || void 0 === e.cursor)
                      throw new n.Q0(
                        "cursor",
                        "Required parameter requestParameters.cursor was null or undefined when calling v1UsersUserIdPlacesInventoryGet."
                      );
                    return (
                      (r = {}),
                      void 0 !== e.placesTab && (r.placesTab = e.placesTab),
                      void 0 !== e.itemsPerPage && (r.itemsPerPage = e.itemsPerPage),
                      void 0 !== e.cursor && (r.cursor = e.cursor),
                      (s = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/users/{userId}/places/inventory".replace(
                              "{".concat("userId", "}"),
                              encodeURIComponent(String(e.userId))
                            ),
                            schemaPath: "/v1/users/{userId}/places/inventory",
                            method: "GET",
                            headers: s,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return null == e
                            ? e
                            : {
                                previousPageCursor: (0, n.t2)(e, "previousPageCursor")
                                  ? e.previousPageCursor
                                  : void 0,
                                nextPageCursor: (0, n.t2)(e, "nextPageCursor")
                                  ? e.nextPageCursor
                                  : void 0,
                                data: (0, n.t2)(e, "data") ? e.data.map(c) : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UsersUserIdPlacesInventoryGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v1UsersUserIdPlacesInventoryGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }));
      })(n.yi);
    },
    16942: (e, t, r) => {
      r.d(t, { v: () => n });
      var n = {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px"
      };
    },
    40403: (e, t, r) => {
      r.d(t, { tm: () => u });
      var n = r(1300),
        o = r(90102);
      function s(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              metadataType: (0, n.t2)(t, "metadataType") ? t.metadataType : void 0,
              value: (0, n.t2)(t, "value") ? t.value : void 0
            };
      }
      function a(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              code: (0, n.t2)(t, "Code") ? t.Code : void 0,
              message: (0, n.t2)(t, "Message") ? t.Message : void 0,
              customErrorCode: (0, n.t2)(t, "CustomErrorCode") ? t.CustomErrorCode : void 0
            };
      }
      function i(e) {
        var t, r;
        return null == (t = e)
          ? t
          : {
              location: (0, n.t2)(t, "location") ? t.location : void 0,
              errors: (0, n.t2)(t, "errors") ? t.errors.map(a) : void 0,
              requestId: (0, n.t2)(t, "requestId") ? t.requestId : void 0,
              isArchived: (0, n.t2)(t, "isArchived") ? t.isArchived : void 0,
              assetTypeId: (0, n.t2)(t, "assetTypeId") ? t.assetTypeId : void 0,
              contentRepresentationSpecifier: (0, n.t2)(t, "contentRepresentationSpecifier")
                ? null == (r = t.contentRepresentationSpecifier)
                  ? r
                  : {
                      format: (0, n.t2)(r, "format") ? r.format : void 0,
                      majorVersion: (0, n.t2)(r, "majorVersion") ? r.majorVersion : void 0,
                      fidelity: (0, n.t2)(r, "fidelity") ? r.fidelity : void 0,
                      skipGenerationIfNotExist: (0, n.t2)(r, "skipGenerationIfNotExist")
                        ? r.skipGenerationIfNotExist
                        : void 0
                    }
                : void 0,
              assetMetadatas: (0, n.t2)(t, "assetMetadatas") ? t.assetMetadatas.map(s) : void 0,
              isRecordable: (0, n.t2)(t, "isRecordable") ? t.isRecordable : void 0
            };
      }
      function l(e) {
        if (void 0 !== e)
          return null === e
            ? null
            : {
                assetName: e.assetName,
                assetType: e.assetType,
                clientInsert: e.clientInsert,
                placeId: e.placeId,
                requestId: e.requestId,
                scriptInsert: e.scriptInsert,
                serverPlaceId: e.serverPlaceId,
                universeId: e.universeId,
                accept: e.accept,
                encoding: e.encoding,
                hash: e.hash,
                userAssetId: e.userAssetId,
                assetId: e.assetId,
                version: e.version,
                assetVersionId: e.assetVersionId,
                modulePlaceId: e.modulePlaceId,
                assetFormat: e.assetFormat,
                "roblox-assetFormat": e.robloxAssetFormat,
                assetResolutionMode: e.assetResolutionMode,
                accessContext: e.accessContext,
                usageContext: e.usageContext,
                contentRepresentationPriorityList: e.contentRepresentationPriorityList,
                doNotFallbackToBaselineRepresentation: e.doNotFallbackToBaselineRepresentation
              };
      }
      !(function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        ((0, o._)(t, e),
          (t.prototype.v1AliasAliasGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.alias || void 0 === e.alias)
                      throw new n.Q0(
                        "alias",
                        "Required parameter requestParameters.alias was null or undefined when calling v1AliasAliasGet."
                      );
                    if (null === e.acceptEncoding || void 0 === e.acceptEncoding)
                      throw new n.Q0(
                        "acceptEncoding",
                        "Required parameter requestParameters.acceptEncoding was null or undefined when calling v1AliasAliasGet."
                      );
                    if (null === e.robloxPlaceId || void 0 === e.robloxPlaceId)
                      throw new n.Q0(
                        "robloxPlaceId",
                        "Required parameter requestParameters.robloxPlaceId was null or undefined when calling v1AliasAliasGet."
                      );
                    if (null === e.assetType || void 0 === e.assetType)
                      throw new n.Q0(
                        "assetType",
                        "Required parameter requestParameters.assetType was null or undefined when calling v1AliasAliasGet."
                      );
                    if (null === e.accept || void 0 === e.accept)
                      throw new n.Q0(
                        "accept",
                        "Required parameter requestParameters.accept was null or undefined when calling v1AliasAliasGet."
                      );
                    if (null === e.assetFormat || void 0 === e.assetFormat)
                      throw new n.Q0(
                        "assetFormat",
                        "Required parameter requestParameters.assetFormat was null or undefined when calling v1AliasAliasGet."
                      );
                    if (null === e.robloxAssetFormat || void 0 === e.robloxAssetFormat)
                      throw new n.Q0(
                        "robloxAssetFormat",
                        "Required parameter requestParameters.robloxAssetFormat was null or undefined when calling v1AliasAliasGet."
                      );
                    return (
                      (r = {}),
                      void 0 !== e.skipSigningScripts &&
                        (r.skipSigningScripts = e.skipSigningScripts),
                      void 0 !== e.clientInsert && (r.clientInsert = e.clientInsert),
                      void 0 !== e.scriptinsert && (r.scriptinsert = e.scriptinsert),
                      void 0 !== e.modulePlaceId && (r.modulePlaceId = e.modulePlaceId),
                      void 0 !== e.serverplaceid && (r.serverplaceid = e.serverplaceid),
                      void 0 !== e.expectedAssetType && (r.expectedAssetType = e.expectedAssetType),
                      void 0 !== e.accessContext && (r.accessContext = e.accessContext),
                      void 0 !== e.usageContext && (r.usageContext = e.usageContext),
                      (s = {}),
                      void 0 !== e.acceptEncoding &&
                        null !== e.acceptEncoding &&
                        (s["Accept-Encoding"] = String(e.acceptEncoding)),
                      void 0 !== e.robloxPlaceId &&
                        null !== e.robloxPlaceId &&
                        (s["Roblox-Place-Id"] = String(e.robloxPlaceId)),
                      void 0 !== e.assetType &&
                        null !== e.assetType &&
                        (s.AssetType = String(e.assetType)),
                      void 0 !== e.accept && null !== e.accept && (s.Accept = String(e.accept)),
                      void 0 !== e.assetFormat &&
                        null !== e.assetFormat &&
                        (s.AssetFormat = String(e.assetFormat)),
                      void 0 !== e.robloxAssetFormat &&
                        null !== e.robloxAssetFormat &&
                        (s["Roblox-AssetFormat"] = String(e.robloxAssetFormat)),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/alias/{alias}".replace(
                              "{".concat("alias", "}"),
                              encodeURIComponent(String(e.alias))
                            ),
                            method: "GET",
                            headers: s,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return i(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1AliasAliasGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v1AliasAliasGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (t.prototype.v1AssetGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.acceptEncoding || void 0 === e.acceptEncoding)
                      throw new n.Q0(
                        "acceptEncoding",
                        "Required parameter requestParameters.acceptEncoding was null or undefined when calling v1AssetGet."
                      );
                    if (null === e.robloxPlaceId || void 0 === e.robloxPlaceId)
                      throw new n.Q0(
                        "robloxPlaceId",
                        "Required parameter requestParameters.robloxPlaceId was null or undefined when calling v1AssetGet."
                      );
                    if (null === e.assetType || void 0 === e.assetType)
                      throw new n.Q0(
                        "assetType",
                        "Required parameter requestParameters.assetType was null or undefined when calling v1AssetGet."
                      );
                    if (null === e.accept || void 0 === e.accept)
                      throw new n.Q0(
                        "accept",
                        "Required parameter requestParameters.accept was null or undefined when calling v1AssetGet."
                      );
                    if (null === e.assetFormat || void 0 === e.assetFormat)
                      throw new n.Q0(
                        "assetFormat",
                        "Required parameter requestParameters.assetFormat was null or undefined when calling v1AssetGet."
                      );
                    if (null === e.robloxAssetFormat || void 0 === e.robloxAssetFormat)
                      throw new n.Q0(
                        "robloxAssetFormat",
                        "Required parameter requestParameters.robloxAssetFormat was null or undefined when calling v1AssetGet."
                      );
                    return (
                      (r = {}),
                      void 0 !== e.id && (r.id = e.id),
                      void 0 !== e.userAssetId && (r.userAssetId = e.userAssetId),
                      void 0 !== e.assetVersionId && (r.assetVersionId = e.assetVersionId),
                      void 0 !== e.version && (r.version = e.version),
                      void 0 !== e.universeId && (r.universeId = e.universeId),
                      void 0 !== e.clientInsert && (r.clientInsert = e.clientInsert),
                      void 0 !== e.scriptinsert && (r.scriptinsert = e.scriptinsert),
                      void 0 !== e.modulePlaceId && (r.modulePlaceId = e.modulePlaceId),
                      void 0 !== e.serverplaceid && (r.serverplaceid = e.serverplaceid),
                      void 0 !== e.assetName && (r.assetName = e.assetName),
                      void 0 !== e.hash && (r.hash = e.hash),
                      void 0 !== e.marAssetHash && (r.marAssetHash = e.marAssetHash),
                      void 0 !== e.marCheckSum && (r.marCheckSum = e.marCheckSum),
                      void 0 !== e.expectedAssetType && (r.expectedAssetType = e.expectedAssetType),
                      void 0 !== e.skipSigningScripts &&
                        (r.skipSigningScripts = e.skipSigningScripts),
                      void 0 !== e.permissionContext && (r.permissionContext = e.permissionContext),
                      void 0 !== e.doNotFallbackToBaselineRepresentation &&
                        (r.doNotFallbackToBaselineRepresentation =
                          e.doNotFallbackToBaselineRepresentation),
                      void 0 !== e.contentRepresentationPriorityList &&
                        (r.contentRepresentationPriorityList = e.contentRepresentationPriorityList),
                      void 0 !== e.assetResolutionMode &&
                        (r.assetResolutionMode = e.assetResolutionMode),
                      void 0 !== e.accessContext && (r.accessContext = e.accessContext),
                      void 0 !== e.usageContext && (r.usageContext = e.usageContext),
                      (s = {}),
                      void 0 !== e.acceptEncoding &&
                        null !== e.acceptEncoding &&
                        (s["Accept-Encoding"] = String(e.acceptEncoding)),
                      void 0 !== e.robloxPlaceId &&
                        null !== e.robloxPlaceId &&
                        (s["Roblox-Place-Id"] = String(e.robloxPlaceId)),
                      void 0 !== e.assetType &&
                        null !== e.assetType &&
                        (s.AssetType = String(e.assetType)),
                      void 0 !== e.accept && null !== e.accept && (s.Accept = String(e.accept)),
                      void 0 !== e.assetFormat &&
                        null !== e.assetFormat &&
                        (s.AssetFormat = String(e.assetFormat)),
                      void 0 !== e.robloxAssetFormat &&
                        null !== e.robloxAssetFormat &&
                        (s["Roblox-AssetFormat"] = String(e.robloxAssetFormat)),
                      [
                        4,
                        this.request({ path: "/v1/asset", method: "GET", headers: s, query: r }, t)
                      ]
                    );
                  case 1:
                    return ((a = o.sent()), [2, new n.cK(a)]);
                }
              });
            });
          }),
          (t.prototype.v1AssetGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v1AssetGetRaw(e, t)];
                  case 1:
                    return (r.sent(), [2]);
                }
              });
            });
          }),
          (t.prototype.v1AssetIdAssetIdGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.assetId || void 0 === e.assetId)
                      throw new n.Q0(
                        "assetId",
                        "Required parameter requestParameters.assetId was null or undefined when calling v1AssetIdAssetIdGet."
                      );
                    if (null === e.acceptEncoding || void 0 === e.acceptEncoding)
                      throw new n.Q0(
                        "acceptEncoding",
                        "Required parameter requestParameters.acceptEncoding was null or undefined when calling v1AssetIdAssetIdGet."
                      );
                    if (null === e.robloxPlaceId || void 0 === e.robloxPlaceId)
                      throw new n.Q0(
                        "robloxPlaceId",
                        "Required parameter requestParameters.robloxPlaceId was null or undefined when calling v1AssetIdAssetIdGet."
                      );
                    if (null === e.assetType || void 0 === e.assetType)
                      throw new n.Q0(
                        "assetType",
                        "Required parameter requestParameters.assetType was null or undefined when calling v1AssetIdAssetIdGet."
                      );
                    if (null === e.accept || void 0 === e.accept)
                      throw new n.Q0(
                        "accept",
                        "Required parameter requestParameters.accept was null or undefined when calling v1AssetIdAssetIdGet."
                      );
                    if (null === e.assetFormat || void 0 === e.assetFormat)
                      throw new n.Q0(
                        "assetFormat",
                        "Required parameter requestParameters.assetFormat was null or undefined when calling v1AssetIdAssetIdGet."
                      );
                    if (null === e.robloxAssetFormat || void 0 === e.robloxAssetFormat)
                      throw new n.Q0(
                        "robloxAssetFormat",
                        "Required parameter requestParameters.robloxAssetFormat was null or undefined when calling v1AssetIdAssetIdGet."
                      );
                    return (
                      (r = {}),
                      void 0 !== e.skipSigningScripts &&
                        (r.skipSigningScripts = e.skipSigningScripts),
                      void 0 !== e.clientInsert && (r.clientInsert = e.clientInsert),
                      void 0 !== e.scriptinsert && (r.scriptinsert = e.scriptinsert),
                      void 0 !== e.modulePlaceId && (r.modulePlaceId = e.modulePlaceId),
                      void 0 !== e.serverplaceid && (r.serverplaceid = e.serverplaceid),
                      void 0 !== e.expectedAssetType && (r.expectedAssetType = e.expectedAssetType),
                      void 0 !== e.doNotFallbackToBaselineRepresentation &&
                        (r.doNotFallbackToBaselineRepresentation =
                          e.doNotFallbackToBaselineRepresentation),
                      void 0 !== e.contentRepresentationPriorityList &&
                        (r.contentRepresentationPriorityList = e.contentRepresentationPriorityList),
                      void 0 !== e.accessContext && (r.accessContext = e.accessContext),
                      void 0 !== e.usageContext && (r.usageContext = e.usageContext),
                      (s = {}),
                      void 0 !== e.acceptEncoding &&
                        null !== e.acceptEncoding &&
                        (s["Accept-Encoding"] = String(e.acceptEncoding)),
                      void 0 !== e.robloxPlaceId &&
                        null !== e.robloxPlaceId &&
                        (s["Roblox-Place-Id"] = String(e.robloxPlaceId)),
                      void 0 !== e.assetType &&
                        null !== e.assetType &&
                        (s.AssetType = String(e.assetType)),
                      void 0 !== e.accept && null !== e.accept && (s.Accept = String(e.accept)),
                      void 0 !== e.assetFormat &&
                        null !== e.assetFormat &&
                        (s.AssetFormat = String(e.assetFormat)),
                      void 0 !== e.robloxAssetFormat &&
                        null !== e.robloxAssetFormat &&
                        (s["Roblox-AssetFormat"] = String(e.robloxAssetFormat)),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/assetId/{assetId}".replace(
                              "{".concat("assetId", "}"),
                              encodeURIComponent(String(e.assetId))
                            ),
                            method: "GET",
                            headers: s,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return i(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1AssetIdAssetIdGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v1AssetIdAssetIdGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (t.prototype.v1AssetIdAssetIdVersionVersionNumberGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.assetId || void 0 === e.assetId)
                      throw new n.Q0(
                        "assetId",
                        "Required parameter requestParameters.assetId was null or undefined when calling v1AssetIdAssetIdVersionVersionNumberGet."
                      );
                    if (null === e.versionNumber || void 0 === e.versionNumber)
                      throw new n.Q0(
                        "versionNumber",
                        "Required parameter requestParameters.versionNumber was null or undefined when calling v1AssetIdAssetIdVersionVersionNumberGet."
                      );
                    if (null === e.acceptEncoding || void 0 === e.acceptEncoding)
                      throw new n.Q0(
                        "acceptEncoding",
                        "Required parameter requestParameters.acceptEncoding was null or undefined when calling v1AssetIdAssetIdVersionVersionNumberGet."
                      );
                    if (null === e.robloxPlaceId || void 0 === e.robloxPlaceId)
                      throw new n.Q0(
                        "robloxPlaceId",
                        "Required parameter requestParameters.robloxPlaceId was null or undefined when calling v1AssetIdAssetIdVersionVersionNumberGet."
                      );
                    if (null === e.assetType || void 0 === e.assetType)
                      throw new n.Q0(
                        "assetType",
                        "Required parameter requestParameters.assetType was null or undefined when calling v1AssetIdAssetIdVersionVersionNumberGet."
                      );
                    if (null === e.accept || void 0 === e.accept)
                      throw new n.Q0(
                        "accept",
                        "Required parameter requestParameters.accept was null or undefined when calling v1AssetIdAssetIdVersionVersionNumberGet."
                      );
                    if (null === e.assetFormat || void 0 === e.assetFormat)
                      throw new n.Q0(
                        "assetFormat",
                        "Required parameter requestParameters.assetFormat was null or undefined when calling v1AssetIdAssetIdVersionVersionNumberGet."
                      );
                    if (null === e.robloxAssetFormat || void 0 === e.robloxAssetFormat)
                      throw new n.Q0(
                        "robloxAssetFormat",
                        "Required parameter requestParameters.robloxAssetFormat was null or undefined when calling v1AssetIdAssetIdVersionVersionNumberGet."
                      );
                    return (
                      (r = {}),
                      void 0 !== e.skipSigningScripts &&
                        (r.skipSigningScripts = e.skipSigningScripts),
                      void 0 !== e.clientInsert && (r.clientInsert = e.clientInsert),
                      void 0 !== e.scriptinsert && (r.scriptinsert = e.scriptinsert),
                      void 0 !== e.modulePlaceId && (r.modulePlaceId = e.modulePlaceId),
                      void 0 !== e.serverplaceid && (r.serverplaceid = e.serverplaceid),
                      void 0 !== e.expectedAssetType && (r.expectedAssetType = e.expectedAssetType),
                      void 0 !== e.doNotFallbackToBaselineRepresentation &&
                        (r.doNotFallbackToBaselineRepresentation =
                          e.doNotFallbackToBaselineRepresentation),
                      void 0 !== e.contentRepresentationPriorityList &&
                        (r.contentRepresentationPriorityList = e.contentRepresentationPriorityList),
                      void 0 !== e.accessContext && (r.accessContext = e.accessContext),
                      void 0 !== e.usageContext && (r.usageContext = e.usageContext),
                      (s = {}),
                      void 0 !== e.acceptEncoding &&
                        null !== e.acceptEncoding &&
                        (s["Accept-Encoding"] = String(e.acceptEncoding)),
                      void 0 !== e.robloxPlaceId &&
                        null !== e.robloxPlaceId &&
                        (s["Roblox-Place-Id"] = String(e.robloxPlaceId)),
                      void 0 !== e.assetType &&
                        null !== e.assetType &&
                        (s.AssetType = String(e.assetType)),
                      void 0 !== e.accept && null !== e.accept && (s.Accept = String(e.accept)),
                      void 0 !== e.assetFormat &&
                        null !== e.assetFormat &&
                        (s.AssetFormat = String(e.assetFormat)),
                      void 0 !== e.robloxAssetFormat &&
                        null !== e.robloxAssetFormat &&
                        (s["Roblox-AssetFormat"] = String(e.robloxAssetFormat)),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/assetId/{assetId}/version/{versionNumber}"
                              .replace(
                                "{".concat("assetId", "}"),
                                encodeURIComponent(String(e.assetId))
                              )
                              .replace(
                                "{".concat("versionNumber", "}"),
                                encodeURIComponent(String(e.versionNumber))
                              ),
                            method: "GET",
                            headers: s,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return i(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1AssetIdAssetIdVersionVersionNumberGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v1AssetIdAssetIdVersionVersionNumberGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (t.prototype.v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.marAssetHash || void 0 === e.marAssetHash)
                      throw new n.Q0(
                        "marAssetHash",
                        "Required parameter requestParameters.marAssetHash was null or undefined when calling v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet."
                      );
                    if (null === e.marCheckSum || void 0 === e.marCheckSum)
                      throw new n.Q0(
                        "marCheckSum",
                        "Required parameter requestParameters.marCheckSum was null or undefined when calling v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet."
                      );
                    if (null === e.acceptEncoding || void 0 === e.acceptEncoding)
                      throw new n.Q0(
                        "acceptEncoding",
                        "Required parameter requestParameters.acceptEncoding was null or undefined when calling v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet."
                      );
                    if (null === e.robloxPlaceId || void 0 === e.robloxPlaceId)
                      throw new n.Q0(
                        "robloxPlaceId",
                        "Required parameter requestParameters.robloxPlaceId was null or undefined when calling v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet."
                      );
                    if (null === e.assetType || void 0 === e.assetType)
                      throw new n.Q0(
                        "assetType",
                        "Required parameter requestParameters.assetType was null or undefined when calling v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet."
                      );
                    if (null === e.accept || void 0 === e.accept)
                      throw new n.Q0(
                        "accept",
                        "Required parameter requestParameters.accept was null or undefined when calling v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet."
                      );
                    if (null === e.assetFormat || void 0 === e.assetFormat)
                      throw new n.Q0(
                        "assetFormat",
                        "Required parameter requestParameters.assetFormat was null or undefined when calling v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet."
                      );
                    if (null === e.robloxAssetFormat || void 0 === e.robloxAssetFormat)
                      throw new n.Q0(
                        "robloxAssetFormat",
                        "Required parameter requestParameters.robloxAssetFormat was null or undefined when calling v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet."
                      );
                    return (
                      (r = {}),
                      void 0 !== e.skipSigningScripts &&
                        (r.skipSigningScripts = e.skipSigningScripts),
                      void 0 !== e.clientInsert && (r.clientInsert = e.clientInsert),
                      void 0 !== e.scriptinsert && (r.scriptinsert = e.scriptinsert),
                      void 0 !== e.modulePlaceId && (r.modulePlaceId = e.modulePlaceId),
                      void 0 !== e.serverplaceid && (r.serverplaceid = e.serverplaceid),
                      void 0 !== e.expectedAssetType && (r.expectedAssetType = e.expectedAssetType),
                      (s = {}),
                      void 0 !== e.acceptEncoding &&
                        null !== e.acceptEncoding &&
                        (s["Accept-Encoding"] = String(e.acceptEncoding)),
                      void 0 !== e.robloxPlaceId &&
                        null !== e.robloxPlaceId &&
                        (s["Roblox-Place-Id"] = String(e.robloxPlaceId)),
                      void 0 !== e.assetType &&
                        null !== e.assetType &&
                        (s.AssetType = String(e.assetType)),
                      void 0 !== e.accept && null !== e.accept && (s.Accept = String(e.accept)),
                      void 0 !== e.assetFormat &&
                        null !== e.assetFormat &&
                        (s.AssetFormat = String(e.assetFormat)),
                      void 0 !== e.robloxAssetFormat &&
                        null !== e.robloxAssetFormat &&
                        (s["Roblox-AssetFormat"] = String(e.robloxAssetFormat)),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/marAssetHash/{marAssetHash}/marCheckSum/{marCheckSum}"
                              .replace(
                                "{".concat("marAssetHash", "}"),
                                encodeURIComponent(String(e.marAssetHash))
                              )
                              .replace(
                                "{".concat("marCheckSum", "}"),
                                encodeURIComponent(String(e.marCheckSum))
                              ),
                            method: "GET",
                            headers: s,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return i(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (t.prototype.v1OpenCloudAssetIdAssetIdGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.assetId || void 0 === e.assetId)
                      throw new n.Q0(
                        "assetId",
                        "Required parameter requestParameters.assetId was null or undefined when calling v1OpenCloudAssetIdAssetIdGet."
                      );
                    return (
                      (r = {}),
                      void 0 !== e.skipSigningScripts &&
                        (r.skipSigningScripts = e.skipSigningScripts),
                      void 0 !== e.clientInsert && (r.clientInsert = e.clientInsert),
                      void 0 !== e.scriptinsert && (r.scriptinsert = e.scriptinsert),
                      void 0 !== e.modulePlaceId && (r.modulePlaceId = e.modulePlaceId),
                      void 0 !== e.serverplaceid && (r.serverplaceid = e.serverplaceid),
                      void 0 !== e.expectedAssetType && (r.expectedAssetType = e.expectedAssetType),
                      void 0 !== e.doNotFallbackToBaselineRepresentation &&
                        (r.doNotFallbackToBaselineRepresentation =
                          e.doNotFallbackToBaselineRepresentation),
                      void 0 !== e.contentRepresentationPriorityList &&
                        (r.contentRepresentationPriorityList = e.contentRepresentationPriorityList),
                      void 0 !== e.accessContext && (r.accessContext = e.accessContext),
                      void 0 !== e.usageContext && (r.usageContext = e.usageContext),
                      (s = {}),
                      void 0 !== e.acceptEncoding &&
                        null !== e.acceptEncoding &&
                        (s["Accept-Encoding"] = String(e.acceptEncoding)),
                      void 0 !== e.robloxPlaceId &&
                        null !== e.robloxPlaceId &&
                        (s["Roblox-Place-Id"] = String(e.robloxPlaceId)),
                      void 0 !== e.assetType &&
                        null !== e.assetType &&
                        (s.AssetType = String(e.assetType)),
                      void 0 !== e.accept && null !== e.accept && (s.Accept = String(e.accept)),
                      void 0 !== e.assetFormat &&
                        null !== e.assetFormat &&
                        (s.AssetFormat = String(e.assetFormat)),
                      void 0 !== e.robloxAssetFormat &&
                        null !== e.robloxAssetFormat &&
                        (s["Roblox-AssetFormat"] = String(e.robloxAssetFormat)),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/openCloud/assetId/{assetId}".replace(
                              "{".concat("assetId", "}"),
                              encodeURIComponent(String(e.assetId))
                            ),
                            method: "GET",
                            headers: s,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return i(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1OpenCloudAssetIdAssetIdGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v1OpenCloudAssetIdAssetIdGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (t.prototype.v1OpenCloudAssetIdAssetIdVersionVersionNumberGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.assetId || void 0 === e.assetId)
                      throw new n.Q0(
                        "assetId",
                        "Required parameter requestParameters.assetId was null or undefined when calling v1OpenCloudAssetIdAssetIdVersionVersionNumberGet."
                      );
                    if (null === e.versionNumber || void 0 === e.versionNumber)
                      throw new n.Q0(
                        "versionNumber",
                        "Required parameter requestParameters.versionNumber was null or undefined when calling v1OpenCloudAssetIdAssetIdVersionVersionNumberGet."
                      );
                    return (
                      (r = {}),
                      void 0 !== e.skipSigningScripts &&
                        (r.skipSigningScripts = e.skipSigningScripts),
                      void 0 !== e.clientInsert && (r.clientInsert = e.clientInsert),
                      void 0 !== e.scriptinsert && (r.scriptinsert = e.scriptinsert),
                      void 0 !== e.modulePlaceId && (r.modulePlaceId = e.modulePlaceId),
                      void 0 !== e.serverplaceid && (r.serverplaceid = e.serverplaceid),
                      void 0 !== e.expectedAssetType && (r.expectedAssetType = e.expectedAssetType),
                      void 0 !== e.doNotFallbackToBaselineRepresentation &&
                        (r.doNotFallbackToBaselineRepresentation =
                          e.doNotFallbackToBaselineRepresentation),
                      void 0 !== e.contentRepresentationPriorityList &&
                        (r.contentRepresentationPriorityList = e.contentRepresentationPriorityList),
                      void 0 !== e.accessContext && (r.accessContext = e.accessContext),
                      void 0 !== e.usageContext && (r.usageContext = e.usageContext),
                      (s = {}),
                      void 0 !== e.acceptEncoding &&
                        null !== e.acceptEncoding &&
                        (s["Accept-Encoding"] = String(e.acceptEncoding)),
                      void 0 !== e.robloxPlaceId &&
                        null !== e.robloxPlaceId &&
                        (s["Roblox-Place-Id"] = String(e.robloxPlaceId)),
                      void 0 !== e.assetType &&
                        null !== e.assetType &&
                        (s.AssetType = String(e.assetType)),
                      void 0 !== e.accept && null !== e.accept && (s.Accept = String(e.accept)),
                      void 0 !== e.assetFormat &&
                        null !== e.assetFormat &&
                        (s.AssetFormat = String(e.assetFormat)),
                      void 0 !== e.robloxAssetFormat &&
                        null !== e.robloxAssetFormat &&
                        (s["Roblox-AssetFormat"] = String(e.robloxAssetFormat)),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/openCloud/assetId/{assetId}/version/{versionNumber}"
                              .replace(
                                "{".concat("assetId", "}"),
                                encodeURIComponent(String(e.assetId))
                              )
                              .replace(
                                "{".concat("versionNumber", "}"),
                                encodeURIComponent(String(e.versionNumber))
                              ),
                            method: "GET",
                            headers: s,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return i(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1OpenCloudAssetIdAssetIdVersionVersionNumberGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v1OpenCloudAssetIdAssetIdVersionVersionNumberGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }));
      })(n.yi);
      var u = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          (0, o._)(t, e),
          (t.prototype.v1AssetsBatchPostRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.robloxPlaceId || void 0 === e.robloxPlaceId)
                      throw new n.Q0(
                        "robloxPlaceId",
                        "Required parameter requestParameters.robloxPlaceId was null or undefined when calling v1AssetsBatchPost."
                      );
                    if (null === e.accept || void 0 === e.accept)
                      throw new n.Q0(
                        "accept",
                        "Required parameter requestParameters.accept was null or undefined when calling v1AssetsBatchPost."
                      );
                    if (
                      null === e.robloxBrowserAssetRequest ||
                      void 0 === e.robloxBrowserAssetRequest
                    )
                      throw new n.Q0(
                        "robloxBrowserAssetRequest",
                        "Required parameter requestParameters.robloxBrowserAssetRequest was null or undefined when calling v1AssetsBatchPost."
                      );
                    if (null === e.assetRequestItems || void 0 === e.assetRequestItems)
                      throw new n.Q0(
                        "assetRequestItems",
                        "Required parameter requestParameters.assetRequestItems was null or undefined when calling v1AssetsBatchPost."
                      );
                    return (
                      (r = {}),
                      ((s = {})["Content-Type"] = "application/json"),
                      void 0 !== e.robloxPlaceId &&
                        null !== e.robloxPlaceId &&
                        (s["Roblox-Place-Id"] = String(e.robloxPlaceId)),
                      void 0 !== e.accept && null !== e.accept && (s.Accept = String(e.accept)),
                      void 0 !== e.robloxBrowserAssetRequest &&
                        null !== e.robloxBrowserAssetRequest &&
                        (s["Roblox-Browser-Asset-Request"] = String(e.robloxBrowserAssetRequest)),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/assets/batch",
                            method: "POST",
                            headers: s,
                            query: r,
                            body: e.assetRequestItems.map(l)
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return e.map(i);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1AssetsBatchPost = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v1AssetsBatchPostRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }),
          t
        );
      })(n.yi);
    },
    45710: (e, t, r) => {
      r.d(t, { F6: () => c });
      var n = r(1300),
        o = r(7602);
      function s(e) {
        var t, r;
        return null == (t = e)
          ? t
          : {
              expireAt: (0, n.t2)(t, "expireAt") ? new Date(t.expireAt) : void 0,
              userAssetId: (0, n.t2)(t, "userAssetId") ? t.userAssetId : void 0,
              assetId: (0, n.t2)(t, "assetId") ? t.assetId : void 0,
              assetName: (0, n.t2)(t, "assetName") ? t.assetName : void 0,
              collectibleItemId: (0, n.t2)(t, "collectibleItemId") ? t.collectibleItemId : void 0,
              collectibleItemInstanceId: (0, n.t2)(t, "collectibleItemInstanceId")
                ? t.collectibleItemInstanceId
                : void 0,
              serialNumber: (0, n.t2)(t, "serialNumber") ? t.serialNumber : void 0,
              owner: (0, n.t2)(t, "owner")
                ? null == (r = t.owner)
                  ? r
                  : {
                      userId: (0, n.t2)(r, "userId") ? r.userId : void 0,
                      username: (0, n.t2)(r, "username") ? r.username : void 0,
                      buildersClubMembershipType: (0, n.t2)(r, "buildersClubMembershipType")
                        ? r.buildersClubMembershipType
                        : void 0
                    }
                : void 0,
              created: (0, n.t2)(t, "created") ? new Date(t.created) : void 0,
              updated: (0, n.t2)(t, "updated") ? new Date(t.updated) : void 0
            };
      }
      function a(e, t) {
        return null == e
          ? e
          : {
              id: (0, n.t2)(e, "id") ? e.id : void 0,
              type: (0, n.t2)(e, "type") ? e.type : void 0,
              name: (0, n.t2)(e, "name") ? e.name : void 0
            };
      }
      function i(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              id: (0, n.t2)(t, "id") ? t.id : void 0,
              collectibleItemInstanceId: (0, n.t2)(t, "collectibleItemInstanceId")
                ? t.collectibleItemInstanceId
                : void 0,
              serialNumber: (0, n.t2)(t, "serialNumber") ? t.serialNumber : void 0,
              owner: (0, n.t2)(t, "owner") ? a(t.owner) : void 0,
              created: (0, n.t2)(t, "created") ? new Date(t.created) : void 0,
              updated: (0, n.t2)(t, "updated") ? new Date(t.updated) : void 0
            };
      }
      function l(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              collectibleItemInstanceId: (0, n.t2)(t, "collectibleItemInstanceId")
                ? t.collectibleItemInstanceId
                : void 0,
              serialNumber: (0, n.t2)(t, "serialNumber") ? t.serialNumber : void 0,
              owner: (0, n.t2)(t, "owner") ? a(t.owner) : void 0
            };
      }
      function u(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              assetId: (0, n.t2)(t, "assetId") ? t.assetId : void 0,
              name: (0, n.t2)(t, "name") ? t.name : void 0,
              assetType: (0, n.t2)(t, "assetType") ? t.assetType : void 0,
              created: (0, n.t2)(t, "created") ? new Date(t.created) : void 0
            };
      }
      !(function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        ((0, o._)(t, e),
          (t.prototype.v2AssetsAssetIdOwnersGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.assetId || void 0 === e.assetId)
                      throw new n.Q0(
                        "assetId",
                        "Required parameter requestParameters.assetId was null or undefined when calling v2AssetsAssetIdOwnersGet."
                      );
                    return (
                      (r = {}),
                      void 0 !== e.limit && (r.limit = e.limit),
                      void 0 !== e.cursor && (r.cursor = e.cursor),
                      void 0 !== e.sortOrder && (r.sortOrder = e.sortOrder),
                      (s = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v2/assets/{assetId}/owners".replace(
                              "{".concat("assetId", "}"),
                              encodeURIComponent(String(e.assetId))
                            ),
                            schemaPath: "/v2/assets/{assetId}/owners",
                            method: "GET",
                            headers: s,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return null == e
                            ? e
                            : {
                                previousPageCursor: (0, n.t2)(e, "previousPageCursor")
                                  ? e.previousPageCursor
                                  : void 0,
                                nextPageCursor: (0, n.t2)(e, "nextPageCursor")
                                  ? e.nextPageCursor
                                  : void 0,
                                data: (0, n.t2)(e, "data") ? e.data.map(i) : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v2AssetsAssetIdOwnersGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v2AssetsAssetIdOwnersGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }));
      })(n.yi);
      var c = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          (0, o._)(t, e),
          (t.prototype.v2CollectibleItemsCollectibleItemIdOwnersGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.collectibleItemId || void 0 === e.collectibleItemId)
                      throw new n.Q0(
                        "collectibleItemId",
                        "Required parameter requestParameters.collectibleItemId was null or undefined when calling v2CollectibleItemsCollectibleItemIdOwnersGet."
                      );
                    return (
                      (r = {}),
                      void 0 !== e.limit && (r.limit = e.limit),
                      void 0 !== e.cursor && (r.cursor = e.cursor),
                      void 0 !== e.sortOrder && (r.sortOrder = e.sortOrder),
                      (s = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v2/collectible-items/{collectibleItemId}/owners".replace(
                              "{".concat("collectibleItemId", "}"),
                              encodeURIComponent(String(e.collectibleItemId))
                            ),
                            schemaPath: "/v2/collectible-items/{collectibleItemId}/owners",
                            method: "GET",
                            headers: s,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return null == e
                            ? e
                            : {
                                previousPageCursor: (0, n.t2)(e, "previousPageCursor")
                                  ? e.previousPageCursor
                                  : void 0,
                                nextPageCursor: (0, n.t2)(e, "nextPageCursor")
                                  ? e.nextPageCursor
                                  : void 0,
                                data: (0, n.t2)(e, "data") ? e.data.map(l) : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v2CollectibleItemsCollectibleItemIdOwnersGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v2CollectibleItemsCollectibleItemIdOwnersGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (t.prototype.v2InventoryAssetAssetIdDeleteRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.assetId || void 0 === e.assetId)
                      throw new n.Q0(
                        "assetId",
                        "Required parameter requestParameters.assetId was null or undefined when calling v2InventoryAssetAssetIdDelete."
                      );
                    return (
                      (r = {}),
                      (s = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v2/inventory/asset/{assetId}".replace(
                              "{".concat("assetId", "}"),
                              encodeURIComponent(String(e.assetId))
                            ),
                            schemaPath: "/v2/inventory/asset/{assetId}",
                            method: "DELETE",
                            headers: s,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return ((a = o.sent()), [2, new n.ko(a)]);
                }
              });
            });
          }),
          (t.prototype.v2InventoryAssetAssetIdDelete = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v2InventoryAssetAssetIdDeleteRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (t.prototype.v2UsersUserIdInventoryAssetTypeIdGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, a, i;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.userId || void 0 === e.userId)
                      throw new n.Q0(
                        "userId",
                        "Required parameter requestParameters.userId was null or undefined when calling v2UsersUserIdInventoryAssetTypeIdGet."
                      );
                    if (null === e.assetTypeId || void 0 === e.assetTypeId)
                      throw new n.Q0(
                        "assetTypeId",
                        "Required parameter requestParameters.assetTypeId was null or undefined when calling v2UsersUserIdInventoryAssetTypeIdGet."
                      );
                    return (
                      (r = {}),
                      void 0 !== e.limit && (r.limit = e.limit),
                      void 0 !== e.cursor && (r.cursor = e.cursor),
                      void 0 !== e.sortOrder && (r.sortOrder = e.sortOrder),
                      (a = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v2/users/{userId}/inventory/{assetTypeId}"
                              .replace(
                                "{".concat("userId", "}"),
                                encodeURIComponent(String(e.userId))
                              )
                              .replace(
                                "{".concat("assetTypeId", "}"),
                                encodeURIComponent(String(e.assetTypeId))
                              ),
                            schemaPath: "/v2/users/{userId}/inventory/{assetTypeId}",
                            method: "GET",
                            headers: a,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (i = o.sent()),
                      [
                        2,
                        new n.ko(i, function (e) {
                          return null == e
                            ? e
                            : {
                                previousPageCursor: (0, n.t2)(e, "previousPageCursor")
                                  ? e.previousPageCursor
                                  : void 0,
                                nextPageCursor: (0, n.t2)(e, "nextPageCursor")
                                  ? e.nextPageCursor
                                  : void 0,
                                data: (0, n.t2)(e, "data") ? e.data.map(s) : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v2UsersUserIdInventoryAssetTypeIdGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v2UsersUserIdInventoryAssetTypeIdGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (t.prototype.v2UsersUserIdInventoryGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.userId || void 0 === e.userId)
                      throw new n.Q0(
                        "userId",
                        "Required parameter requestParameters.userId was null or undefined when calling v2UsersUserIdInventoryGet."
                      );
                    if (null === e.assetTypes || void 0 === e.assetTypes)
                      throw new n.Q0(
                        "assetTypes",
                        "Required parameter requestParameters.assetTypes was null or undefined when calling v2UsersUserIdInventoryGet."
                      );
                    return (
                      (r = {}),
                      e.assetTypes && (r.assetTypes = e.assetTypes.join(n.E6.csv)),
                      void 0 !== e.filterDisapprovedAssets &&
                        (r.filterDisapprovedAssets = e.filterDisapprovedAssets),
                      void 0 !== e.showApprovedOnly && (r.showApprovedOnly = e.showApprovedOnly),
                      void 0 !== e.limit && (r.limit = e.limit),
                      void 0 !== e.cursor && (r.cursor = e.cursor),
                      void 0 !== e.sortOrder && (r.sortOrder = e.sortOrder),
                      (s = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v2/users/{userId}/inventory".replace(
                              "{".concat("userId", "}"),
                              encodeURIComponent(String(e.userId))
                            ),
                            schemaPath: "/v2/users/{userId}/inventory",
                            method: "GET",
                            headers: s,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return null == e
                            ? e
                            : {
                                previousPageCursor: (0, n.t2)(e, "previousPageCursor")
                                  ? e.previousPageCursor
                                  : void 0,
                                nextPageCursor: (0, n.t2)(e, "nextPageCursor")
                                  ? e.nextPageCursor
                                  : void 0,
                                data: (0, n.t2)(e, "data") ? e.data.map(u) : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v2UsersUserIdInventoryGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v2UsersUserIdInventoryGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }),
          t
        );
      })(n.yi);
    },
    64774: (e, t, r) => {
      r.d(t, { A: () => a });
      var n = r(87006),
        o = r(14232),
        s = r(56861);
      r(37876);
      var a = (0, o.forwardRef)(function (e, t) {
        return o.createElement(
          s.M,
          (0, n._)({}, e, { ref: t, viewBox: "0 0 16 16" }),
          o.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.3507 7.61763L3.30728 5.5371L4.40547 6.70486L2.51626 8.71375C1.29458 10.0128 1.29458 12.0382 2.51626 13.3373C3.8488 14.7542 6.10017 14.7542 7.43271 13.3373L9.03774 11.6306L10.1359 12.7983L8.59827 14.4334C6.63391 16.5222 3.31505 16.5222 1.3507 14.4334C-0.450235 12.5184 -0.450234 9.53266 1.3507 7.61763ZM13.1232 7.28626L11.2341 9.29506L12.3323 10.4628L14.2888 8.38237C16.0897 6.46735 16.0897 3.48162 14.2888 1.5666C12.3244 -0.522199 9.00559 -0.522199 7.04124 1.5666L5.50366 3.20158L6.60184 4.36934L8.20679 2.66271C9.53933 1.24576 11.7907 1.24576 13.1232 2.66271C14.3449 3.96179 14.3449 5.98718 13.1232 7.28626ZM10.9603 5.82809C11.263 5.50623 11.2475 4.99993 10.9256 4.69725C10.6038 4.39457 10.0975 4.41011 9.79478 4.73197L4.67927 10.1716C4.37658 10.4934 4.39213 10.9997 4.71399 11.3024C5.03585 11.6051 5.54214 11.5895 5.84483 11.2677L10.9603 5.82809Z"
          })
        );
      });
    },
    75426: (e, t, r) => {
      r.d(t, { zK: () => c });
      var n = r(1300),
        o = r(90102);
      function s(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              metadataType: (0, n.t2)(t, "metadataType") ? t.metadataType : void 0,
              value: (0, n.t2)(t, "value") ? t.value : void 0
            };
      }
      function a(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              assetFormat: (0, n.t2)(t, "assetFormat") ? t.assetFormat : void 0,
              location: (0, n.t2)(t, "location") ? t.location : void 0,
              assetMetadatas: (0, n.t2)(t, "assetMetadatas") ? t.assetMetadatas.map(s) : void 0
            };
      }
      function i(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              code: (0, n.t2)(t, "Code") ? t.Code : void 0,
              message: (0, n.t2)(t, "Message") ? t.Message : void 0,
              customErrorCode: (0, n.t2)(t, "CustomErrorCode") ? t.CustomErrorCode : void 0
            };
      }
      function l(e) {
        var t, r;
        return null == (t = e)
          ? t
          : {
              locations: (0, n.t2)(t, "locations") ? t.locations.map(a) : void 0,
              errors: (0, n.t2)(t, "errors") ? t.errors.map(i) : void 0,
              requestId: (0, n.t2)(t, "requestId") ? t.requestId : void 0,
              isArchived: (0, n.t2)(t, "isArchived") ? t.isArchived : void 0,
              assetTypeId: (0, n.t2)(t, "assetTypeId") ? t.assetTypeId : void 0,
              contentRepresentationSpecifier: (0, n.t2)(t, "contentRepresentationSpecifier")
                ? null == (r = t.contentRepresentationSpecifier)
                  ? r
                  : {
                      format: (0, n.t2)(r, "format") ? r.format : void 0,
                      majorVersion: (0, n.t2)(r, "majorVersion") ? r.majorVersion : void 0,
                      fidelity: (0, n.t2)(r, "fidelity") ? r.fidelity : void 0,
                      skipGenerationIfNotExist: (0, n.t2)(r, "skipGenerationIfNotExist")
                        ? r.skipGenerationIfNotExist
                        : void 0
                    }
                : void 0,
              isRecordable: (0, n.t2)(t, "isRecordable") ? t.isRecordable : void 0
            };
      }
      function u(e) {
        if (void 0 !== e)
          return null === e
            ? null
            : {
                assetName: e.assetName,
                assetType: e.assetType,
                clientInsert: e.clientInsert,
                placeId: e.placeId,
                requestId: e.requestId,
                scriptInsert: e.scriptInsert,
                serverPlaceId: e.serverPlaceId,
                universeId: e.universeId,
                accept: e.accept,
                encoding: e.encoding,
                hash: e.hash,
                userAssetId: e.userAssetId,
                assetId: e.assetId,
                version: e.version,
                assetVersionId: e.assetVersionId,
                modulePlaceId: e.modulePlaceId,
                assetFormat: e.assetFormat,
                "roblox-assetFormat": e.robloxAssetFormat,
                assetResolutionMode: e.assetResolutionMode,
                accessContext: e.accessContext,
                usageContext: e.usageContext,
                contentRepresentationPriorityList: e.contentRepresentationPriorityList,
                doNotFallbackToBaselineRepresentation: e.doNotFallbackToBaselineRepresentation
              };
      }
      var c = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          (0, o._)(t, e),
          (t.prototype.v2AliasAliasGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.alias || void 0 === e.alias)
                      throw new n.Q0(
                        "alias",
                        "Required parameter requestParameters.alias was null or undefined when calling v2AliasAliasGet."
                      );
                    if (null === e.acceptEncoding || void 0 === e.acceptEncoding)
                      throw new n.Q0(
                        "acceptEncoding",
                        "Required parameter requestParameters.acceptEncoding was null or undefined when calling v2AliasAliasGet."
                      );
                    if (null === e.robloxPlaceId || void 0 === e.robloxPlaceId)
                      throw new n.Q0(
                        "robloxPlaceId",
                        "Required parameter requestParameters.robloxPlaceId was null or undefined when calling v2AliasAliasGet."
                      );
                    if (null === e.assetType || void 0 === e.assetType)
                      throw new n.Q0(
                        "assetType",
                        "Required parameter requestParameters.assetType was null or undefined when calling v2AliasAliasGet."
                      );
                    if (null === e.accept || void 0 === e.accept)
                      throw new n.Q0(
                        "accept",
                        "Required parameter requestParameters.accept was null or undefined when calling v2AliasAliasGet."
                      );
                    if (null === e.assetFormat || void 0 === e.assetFormat)
                      throw new n.Q0(
                        "assetFormat",
                        "Required parameter requestParameters.assetFormat was null or undefined when calling v2AliasAliasGet."
                      );
                    if (null === e.robloxAssetFormat || void 0 === e.robloxAssetFormat)
                      throw new n.Q0(
                        "robloxAssetFormat",
                        "Required parameter requestParameters.robloxAssetFormat was null or undefined when calling v2AliasAliasGet."
                      );
                    return (
                      (r = {}),
                      void 0 !== e.skipSigningScripts &&
                        (r.skipSigningScripts = e.skipSigningScripts),
                      void 0 !== e.clientInsert && (r.clientInsert = e.clientInsert),
                      void 0 !== e.scriptinsert && (r.scriptinsert = e.scriptinsert),
                      void 0 !== e.modulePlaceId && (r.modulePlaceId = e.modulePlaceId),
                      void 0 !== e.serverplaceid && (r.serverplaceid = e.serverplaceid),
                      void 0 !== e.expectedAssetType && (r.expectedAssetType = e.expectedAssetType),
                      void 0 !== e.accessContext && (r.accessContext = e.accessContext),
                      void 0 !== e.usageContext && (r.usageContext = e.usageContext),
                      (s = {}),
                      void 0 !== e.acceptEncoding &&
                        null !== e.acceptEncoding &&
                        (s["Accept-Encoding"] = String(e.acceptEncoding)),
                      void 0 !== e.robloxPlaceId &&
                        null !== e.robloxPlaceId &&
                        (s["Roblox-Place-Id"] = String(e.robloxPlaceId)),
                      void 0 !== e.assetType &&
                        null !== e.assetType &&
                        (s.AssetType = String(e.assetType)),
                      void 0 !== e.accept && null !== e.accept && (s.Accept = String(e.accept)),
                      void 0 !== e.assetFormat &&
                        null !== e.assetFormat &&
                        (s.AssetFormat = String(e.assetFormat)),
                      void 0 !== e.robloxAssetFormat &&
                        null !== e.robloxAssetFormat &&
                        (s["Roblox-AssetFormat"] = String(e.robloxAssetFormat)),
                      [
                        4,
                        this.request(
                          {
                            path: "/v2/alias/{alias}".replace(
                              "{".concat("alias", "}"),
                              encodeURIComponent(String(e.alias))
                            ),
                            method: "GET",
                            headers: s,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return l(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v2AliasAliasGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v2AliasAliasGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (t.prototype.v2AssetGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.acceptEncoding || void 0 === e.acceptEncoding)
                      throw new n.Q0(
                        "acceptEncoding",
                        "Required parameter requestParameters.acceptEncoding was null or undefined when calling v2AssetGet."
                      );
                    if (null === e.robloxPlaceId || void 0 === e.robloxPlaceId)
                      throw new n.Q0(
                        "robloxPlaceId",
                        "Required parameter requestParameters.robloxPlaceId was null or undefined when calling v2AssetGet."
                      );
                    if (null === e.assetType || void 0 === e.assetType)
                      throw new n.Q0(
                        "assetType",
                        "Required parameter requestParameters.assetType was null or undefined when calling v2AssetGet."
                      );
                    if (null === e.accept || void 0 === e.accept)
                      throw new n.Q0(
                        "accept",
                        "Required parameter requestParameters.accept was null or undefined when calling v2AssetGet."
                      );
                    if (null === e.assetFormat || void 0 === e.assetFormat)
                      throw new n.Q0(
                        "assetFormat",
                        "Required parameter requestParameters.assetFormat was null or undefined when calling v2AssetGet."
                      );
                    if (null === e.robloxAssetFormat || void 0 === e.robloxAssetFormat)
                      throw new n.Q0(
                        "robloxAssetFormat",
                        "Required parameter requestParameters.robloxAssetFormat was null or undefined when calling v2AssetGet."
                      );
                    return (
                      (r = {}),
                      void 0 !== e.id && (r.id = e.id),
                      void 0 !== e.userAssetId && (r.userAssetId = e.userAssetId),
                      void 0 !== e.assetVersionId && (r.assetVersionId = e.assetVersionId),
                      void 0 !== e.version && (r.version = e.version),
                      void 0 !== e.universeId && (r.universeId = e.universeId),
                      void 0 !== e.clientInsert && (r.clientInsert = e.clientInsert),
                      void 0 !== e.scriptinsert && (r.scriptinsert = e.scriptinsert),
                      void 0 !== e.modulePlaceId && (r.modulePlaceId = e.modulePlaceId),
                      void 0 !== e.serverplaceid && (r.serverplaceid = e.serverplaceid),
                      void 0 !== e.assetName && (r.assetName = e.assetName),
                      void 0 !== e.hash && (r.hash = e.hash),
                      void 0 !== e.marAssetHash && (r.marAssetHash = e.marAssetHash),
                      void 0 !== e.marCheckSum && (r.marCheckSum = e.marCheckSum),
                      void 0 !== e.expectedAssetType && (r.expectedAssetType = e.expectedAssetType),
                      void 0 !== e.skipSigningScripts &&
                        (r.skipSigningScripts = e.skipSigningScripts),
                      void 0 !== e.permissionContext && (r.permissionContext = e.permissionContext),
                      void 0 !== e.doNotFallbackToBaselineRepresentation &&
                        (r.doNotFallbackToBaselineRepresentation =
                          e.doNotFallbackToBaselineRepresentation),
                      void 0 !== e.contentRepresentationPriorityList &&
                        (r.contentRepresentationPriorityList = e.contentRepresentationPriorityList),
                      void 0 !== e.accessContext && (r.accessContext = e.accessContext),
                      void 0 !== e.usageContext && (r.usageContext = e.usageContext),
                      (s = {}),
                      void 0 !== e.acceptEncoding &&
                        null !== e.acceptEncoding &&
                        (s["Accept-Encoding"] = String(e.acceptEncoding)),
                      void 0 !== e.robloxPlaceId &&
                        null !== e.robloxPlaceId &&
                        (s["Roblox-Place-Id"] = String(e.robloxPlaceId)),
                      void 0 !== e.assetType &&
                        null !== e.assetType &&
                        (s.AssetType = String(e.assetType)),
                      void 0 !== e.accept && null !== e.accept && (s.Accept = String(e.accept)),
                      void 0 !== e.assetFormat &&
                        null !== e.assetFormat &&
                        (s.AssetFormat = String(e.assetFormat)),
                      void 0 !== e.robloxAssetFormat &&
                        null !== e.robloxAssetFormat &&
                        (s["Roblox-AssetFormat"] = String(e.robloxAssetFormat)),
                      [
                        4,
                        this.request({ path: "/v2/asset", method: "GET", headers: s, query: r }, t)
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return l(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v2AssetGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v2AssetGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (t.prototype.v2AssetIdAssetIdGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.assetId || void 0 === e.assetId)
                      throw new n.Q0(
                        "assetId",
                        "Required parameter requestParameters.assetId was null or undefined when calling v2AssetIdAssetIdGet."
                      );
                    if (null === e.acceptEncoding || void 0 === e.acceptEncoding)
                      throw new n.Q0(
                        "acceptEncoding",
                        "Required parameter requestParameters.acceptEncoding was null or undefined when calling v2AssetIdAssetIdGet."
                      );
                    if (null === e.robloxPlaceId || void 0 === e.robloxPlaceId)
                      throw new n.Q0(
                        "robloxPlaceId",
                        "Required parameter requestParameters.robloxPlaceId was null or undefined when calling v2AssetIdAssetIdGet."
                      );
                    if (null === e.assetType || void 0 === e.assetType)
                      throw new n.Q0(
                        "assetType",
                        "Required parameter requestParameters.assetType was null or undefined when calling v2AssetIdAssetIdGet."
                      );
                    if (null === e.accept || void 0 === e.accept)
                      throw new n.Q0(
                        "accept",
                        "Required parameter requestParameters.accept was null or undefined when calling v2AssetIdAssetIdGet."
                      );
                    if (null === e.assetFormat || void 0 === e.assetFormat)
                      throw new n.Q0(
                        "assetFormat",
                        "Required parameter requestParameters.assetFormat was null or undefined when calling v2AssetIdAssetIdGet."
                      );
                    if (null === e.robloxAssetFormat || void 0 === e.robloxAssetFormat)
                      throw new n.Q0(
                        "robloxAssetFormat",
                        "Required parameter requestParameters.robloxAssetFormat was null or undefined when calling v2AssetIdAssetIdGet."
                      );
                    return (
                      (r = {}),
                      void 0 !== e.skipSigningScripts &&
                        (r.skipSigningScripts = e.skipSigningScripts),
                      void 0 !== e.clientInsert && (r.clientInsert = e.clientInsert),
                      void 0 !== e.scriptinsert && (r.scriptinsert = e.scriptinsert),
                      void 0 !== e.modulePlaceId && (r.modulePlaceId = e.modulePlaceId),
                      void 0 !== e.serverplaceid && (r.serverplaceid = e.serverplaceid),
                      void 0 !== e.expectedAssetType && (r.expectedAssetType = e.expectedAssetType),
                      void 0 !== e.doNotFallbackToBaselineRepresentation &&
                        (r.doNotFallbackToBaselineRepresentation =
                          e.doNotFallbackToBaselineRepresentation),
                      void 0 !== e.contentRepresentationPriorityList &&
                        (r.contentRepresentationPriorityList = e.contentRepresentationPriorityList),
                      void 0 !== e.accessContext && (r.accessContext = e.accessContext),
                      void 0 !== e.usageContext && (r.usageContext = e.usageContext),
                      (s = {}),
                      void 0 !== e.acceptEncoding &&
                        null !== e.acceptEncoding &&
                        (s["Accept-Encoding"] = String(e.acceptEncoding)),
                      void 0 !== e.robloxPlaceId &&
                        null !== e.robloxPlaceId &&
                        (s["Roblox-Place-Id"] = String(e.robloxPlaceId)),
                      void 0 !== e.assetType &&
                        null !== e.assetType &&
                        (s.AssetType = String(e.assetType)),
                      void 0 !== e.accept && null !== e.accept && (s.Accept = String(e.accept)),
                      void 0 !== e.assetFormat &&
                        null !== e.assetFormat &&
                        (s.AssetFormat = String(e.assetFormat)),
                      void 0 !== e.robloxAssetFormat &&
                        null !== e.robloxAssetFormat &&
                        (s["Roblox-AssetFormat"] = String(e.robloxAssetFormat)),
                      [
                        4,
                        this.request(
                          {
                            path: "/v2/assetId/{assetId}".replace(
                              "{".concat("assetId", "}"),
                              encodeURIComponent(String(e.assetId))
                            ),
                            method: "GET",
                            headers: s,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return l(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v2AssetIdAssetIdGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v2AssetIdAssetIdGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (t.prototype.v2AssetIdAssetIdVersionVersionNumberGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.assetId || void 0 === e.assetId)
                      throw new n.Q0(
                        "assetId",
                        "Required parameter requestParameters.assetId was null or undefined when calling v2AssetIdAssetIdVersionVersionNumberGet."
                      );
                    if (null === e.versionNumber || void 0 === e.versionNumber)
                      throw new n.Q0(
                        "versionNumber",
                        "Required parameter requestParameters.versionNumber was null or undefined when calling v2AssetIdAssetIdVersionVersionNumberGet."
                      );
                    if (null === e.acceptEncoding || void 0 === e.acceptEncoding)
                      throw new n.Q0(
                        "acceptEncoding",
                        "Required parameter requestParameters.acceptEncoding was null or undefined when calling v2AssetIdAssetIdVersionVersionNumberGet."
                      );
                    if (null === e.robloxPlaceId || void 0 === e.robloxPlaceId)
                      throw new n.Q0(
                        "robloxPlaceId",
                        "Required parameter requestParameters.robloxPlaceId was null or undefined when calling v2AssetIdAssetIdVersionVersionNumberGet."
                      );
                    if (null === e.assetType || void 0 === e.assetType)
                      throw new n.Q0(
                        "assetType",
                        "Required parameter requestParameters.assetType was null or undefined when calling v2AssetIdAssetIdVersionVersionNumberGet."
                      );
                    if (null === e.accept || void 0 === e.accept)
                      throw new n.Q0(
                        "accept",
                        "Required parameter requestParameters.accept was null or undefined when calling v2AssetIdAssetIdVersionVersionNumberGet."
                      );
                    if (null === e.assetFormat || void 0 === e.assetFormat)
                      throw new n.Q0(
                        "assetFormat",
                        "Required parameter requestParameters.assetFormat was null or undefined when calling v2AssetIdAssetIdVersionVersionNumberGet."
                      );
                    if (null === e.robloxAssetFormat || void 0 === e.robloxAssetFormat)
                      throw new n.Q0(
                        "robloxAssetFormat",
                        "Required parameter requestParameters.robloxAssetFormat was null or undefined when calling v2AssetIdAssetIdVersionVersionNumberGet."
                      );
                    return (
                      (r = {}),
                      void 0 !== e.skipSigningScripts &&
                        (r.skipSigningScripts = e.skipSigningScripts),
                      void 0 !== e.clientInsert && (r.clientInsert = e.clientInsert),
                      void 0 !== e.scriptinsert && (r.scriptinsert = e.scriptinsert),
                      void 0 !== e.modulePlaceId && (r.modulePlaceId = e.modulePlaceId),
                      void 0 !== e.serverplaceid && (r.serverplaceid = e.serverplaceid),
                      void 0 !== e.expectedAssetType && (r.expectedAssetType = e.expectedAssetType),
                      void 0 !== e.doNotFallbackToBaselineRepresentation &&
                        (r.doNotFallbackToBaselineRepresentation =
                          e.doNotFallbackToBaselineRepresentation),
                      void 0 !== e.contentRepresentationPriorityList &&
                        (r.contentRepresentationPriorityList = e.contentRepresentationPriorityList),
                      void 0 !== e.accessContext && (r.accessContext = e.accessContext),
                      void 0 !== e.usageContext && (r.usageContext = e.usageContext),
                      (s = {}),
                      void 0 !== e.acceptEncoding &&
                        null !== e.acceptEncoding &&
                        (s["Accept-Encoding"] = String(e.acceptEncoding)),
                      void 0 !== e.robloxPlaceId &&
                        null !== e.robloxPlaceId &&
                        (s["Roblox-Place-Id"] = String(e.robloxPlaceId)),
                      void 0 !== e.assetType &&
                        null !== e.assetType &&
                        (s.AssetType = String(e.assetType)),
                      void 0 !== e.accept && null !== e.accept && (s.Accept = String(e.accept)),
                      void 0 !== e.assetFormat &&
                        null !== e.assetFormat &&
                        (s.AssetFormat = String(e.assetFormat)),
                      void 0 !== e.robloxAssetFormat &&
                        null !== e.robloxAssetFormat &&
                        (s["Roblox-AssetFormat"] = String(e.robloxAssetFormat)),
                      [
                        4,
                        this.request(
                          {
                            path: "/v2/assetId/{assetId}/version/{versionNumber}"
                              .replace(
                                "{".concat("assetId", "}"),
                                encodeURIComponent(String(e.assetId))
                              )
                              .replace(
                                "{".concat("versionNumber", "}"),
                                encodeURIComponent(String(e.versionNumber))
                              ),
                            method: "GET",
                            headers: s,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return l(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v2AssetIdAssetIdVersionVersionNumberGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v2AssetIdAssetIdVersionVersionNumberGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (t.prototype.v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.marAssetHash || void 0 === e.marAssetHash)
                      throw new n.Q0(
                        "marAssetHash",
                        "Required parameter requestParameters.marAssetHash was null or undefined when calling v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet."
                      );
                    if (null === e.marCheckSum || void 0 === e.marCheckSum)
                      throw new n.Q0(
                        "marCheckSum",
                        "Required parameter requestParameters.marCheckSum was null or undefined when calling v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet."
                      );
                    if (null === e.acceptEncoding || void 0 === e.acceptEncoding)
                      throw new n.Q0(
                        "acceptEncoding",
                        "Required parameter requestParameters.acceptEncoding was null or undefined when calling v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet."
                      );
                    if (null === e.robloxPlaceId || void 0 === e.robloxPlaceId)
                      throw new n.Q0(
                        "robloxPlaceId",
                        "Required parameter requestParameters.robloxPlaceId was null or undefined when calling v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet."
                      );
                    if (null === e.assetType || void 0 === e.assetType)
                      throw new n.Q0(
                        "assetType",
                        "Required parameter requestParameters.assetType was null or undefined when calling v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet."
                      );
                    if (null === e.accept || void 0 === e.accept)
                      throw new n.Q0(
                        "accept",
                        "Required parameter requestParameters.accept was null or undefined when calling v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet."
                      );
                    if (null === e.assetFormat || void 0 === e.assetFormat)
                      throw new n.Q0(
                        "assetFormat",
                        "Required parameter requestParameters.assetFormat was null or undefined when calling v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet."
                      );
                    if (null === e.robloxAssetFormat || void 0 === e.robloxAssetFormat)
                      throw new n.Q0(
                        "robloxAssetFormat",
                        "Required parameter requestParameters.robloxAssetFormat was null or undefined when calling v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet."
                      );
                    return (
                      (r = {}),
                      void 0 !== e.skipSigningScripts &&
                        (r.skipSigningScripts = e.skipSigningScripts),
                      void 0 !== e.clientInsert && (r.clientInsert = e.clientInsert),
                      void 0 !== e.scriptinsert && (r.scriptinsert = e.scriptinsert),
                      void 0 !== e.modulePlaceId && (r.modulePlaceId = e.modulePlaceId),
                      void 0 !== e.serverplaceid && (r.serverplaceid = e.serverplaceid),
                      void 0 !== e.expectedAssetType && (r.expectedAssetType = e.expectedAssetType),
                      (s = {}),
                      void 0 !== e.acceptEncoding &&
                        null !== e.acceptEncoding &&
                        (s["Accept-Encoding"] = String(e.acceptEncoding)),
                      void 0 !== e.robloxPlaceId &&
                        null !== e.robloxPlaceId &&
                        (s["Roblox-Place-Id"] = String(e.robloxPlaceId)),
                      void 0 !== e.assetType &&
                        null !== e.assetType &&
                        (s.AssetType = String(e.assetType)),
                      void 0 !== e.accept && null !== e.accept && (s.Accept = String(e.accept)),
                      void 0 !== e.assetFormat &&
                        null !== e.assetFormat &&
                        (s.AssetFormat = String(e.assetFormat)),
                      void 0 !== e.robloxAssetFormat &&
                        null !== e.robloxAssetFormat &&
                        (s["Roblox-AssetFormat"] = String(e.robloxAssetFormat)),
                      [
                        4,
                        this.request(
                          {
                            path: "/v2/marAssetHash/{marAssetHash}/marCheckSum/{marCheckSum}"
                              .replace(
                                "{".concat("marAssetHash", "}"),
                                encodeURIComponent(String(e.marAssetHash))
                              )
                              .replace(
                                "{".concat("marCheckSum", "}"),
                                encodeURIComponent(String(e.marCheckSum))
                              ),
                            method: "GET",
                            headers: s,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return l(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }),
          t
        );
      })(n.yi);
      !(function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        ((0, o._)(t, e),
          (t.prototype.v2AssetsBatchPostRaw = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              var r, s, a;
              return (0, o.b)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (null === e.robloxPlaceId || void 0 === e.robloxPlaceId)
                      throw new n.Q0(
                        "robloxPlaceId",
                        "Required parameter requestParameters.robloxPlaceId was null or undefined when calling v2AssetsBatchPost."
                      );
                    if (null === e.accept || void 0 === e.accept)
                      throw new n.Q0(
                        "accept",
                        "Required parameter requestParameters.accept was null or undefined when calling v2AssetsBatchPost."
                      );
                    if (
                      null === e.robloxBrowserAssetRequest ||
                      void 0 === e.robloxBrowserAssetRequest
                    )
                      throw new n.Q0(
                        "robloxBrowserAssetRequest",
                        "Required parameter requestParameters.robloxBrowserAssetRequest was null or undefined when calling v2AssetsBatchPost."
                      );
                    if (null === e.assetRequestItems || void 0 === e.assetRequestItems)
                      throw new n.Q0(
                        "assetRequestItems",
                        "Required parameter requestParameters.assetRequestItems was null or undefined when calling v2AssetsBatchPost."
                      );
                    return (
                      (r = {}),
                      ((s = {})["Content-Type"] = "application/json"),
                      void 0 !== e.robloxPlaceId &&
                        null !== e.robloxPlaceId &&
                        (s["Roblox-Place-Id"] = String(e.robloxPlaceId)),
                      void 0 !== e.accept && null !== e.accept && (s.Accept = String(e.accept)),
                      void 0 !== e.robloxBrowserAssetRequest &&
                        null !== e.robloxBrowserAssetRequest &&
                        (s["Roblox-Browser-Asset-Request"] = String(e.robloxBrowserAssetRequest)),
                      [
                        4,
                        this.request(
                          {
                            path: "/v2/assets/batch",
                            method: "POST",
                            headers: s,
                            query: r,
                            body: e.assetRequestItems.map(u)
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = o.sent()),
                      [
                        2,
                        new n.ko(a, function (e) {
                          return e.map(l);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v2AssetsBatchPost = function (e, t) {
            return (0, o.a)(this, void 0, void 0, function () {
              return (0, o.b)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.v2AssetsBatchPostRaw(e, t)];
                  case 1:
                    return [4, r.sent().value()];
                  case 2:
                    return [2, r.sent()];
                }
              });
            });
          }));
      })(n.yi);
    },
    76715: (e, t, r) => {
      r.d(t, { _: () => o, a: () => s, b: () => a });
      var n = function (e, t) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(e, t);
      };
      function o(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function r() {
          this.constructor = e;
        }
        (n(e, t),
          (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r())));
      }
      function s(e, t, r, n) {
        return new (r || (r = Promise))(function (o, s) {
          function a(e) {
            try {
              l(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function i(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, i);
          }
          l((n = n.apply(e, t || [])).next());
        });
      }
      function a(e, t) {
        var r,
          n,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: []
          },
          a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return (
          (a.next = i(0)),
          (a.throw = i(1)),
          (a.return = i(2)),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function i(i) {
          return function (l) {
            var u = [i, l];
            if (r) throw TypeError("Generator is already executing.");
            for (; a && ((a = 0), u[0] && (s = 0)), s;)
              try {
                if (
                  ((r = 1),
                  n &&
                    (o =
                      2 & u[0]
                        ? n.return
                        : u[0]
                          ? n.throw || ((o = n.return) && o.call(n), 0)
                          : n.next) &&
                    !(o = o.call(n, u[1])).done)
                )
                  return o;
                switch (((n = 0), o && (u = [2 & u[0], o.value]), u[0])) {
                  case 0:
                  case 1:
                    o = u;
                    break;
                  case 4:
                    return (s.label++, { value: u[1], done: !1 });
                  case 5:
                    (s.label++, (n = u[1]), (u = [0]));
                    continue;
                  case 7:
                    ((u = s.ops.pop()), s.trys.pop());
                    continue;
                  default:
                    if (
                      !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                      (6 === u[0] || 2 === u[0])
                    ) {
                      s = 0;
                      continue;
                    }
                    if (3 === u[0] && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                      s.label = u[1];
                      break;
                    }
                    if (6 === u[0] && s.label < o[1]) {
                      ((s.label = o[1]), (o = u));
                      break;
                    }
                    if (o && s.label < o[2]) {
                      ((s.label = o[2]), s.ops.push(u));
                      break;
                    }
                    (o[2] && s.ops.pop(), s.trys.pop());
                    continue;
                }
                u = t.call(e, s);
              } catch (e) {
                ((u = [6, e]), (n = 0));
              } finally {
                r = o = 0;
              }
            if (5 & u[0]) throw u[1];
            return { value: u[0] ? u[1] : void 0, done: !0 };
          };
        }
      }
      "function" == typeof SuppressedError && SuppressedError;
    },
    77387: (e, t, r) => {
      r.d(t, { A: () => w });
      var n = r(87006),
        o = r(14232),
        s = r(46180),
        a = r(69685),
        i = r(4486),
        l = r(70510),
        u = r(25613),
        c = r(79578),
        d = r(24183),
        p = r(37876),
        m = r(66337),
        h = r(5007);
      let v = ["className", "id"],
        f = (0, u.s)(m.T, {
          name: "MuiDialogTitle",
          slot: "Root",
          overridesResolver: (e, t) => t.root
        })({ padding: "16px 24px", flex: "0 0 auto" }),
        g = o.forwardRef(function (e, t) {
          let r = (0, h.u)({ props: e, name: "MuiDialogTitle" }),
            { className: n, id: s } = r,
            a = (0, l._)(r, v),
            m = ((e) => {
              let { classes: t } = e;
              return (0, u.a)({ root: ["root"] }, c.g, t);
            })(r),
            { titleId: g = s } = o.useContext(d.D);
          return (0, p.jsx)(
            f,
            (0, i._)(
              {
                component: "h2",
                className: (0, u.c)(m.root, n),
                ownerState: r,
                ref: t,
                variant: "h6",
                id: null != s ? s : g
              },
              a
            )
          );
        });
      var I = (0, s.A)({ name: "DialogTitle" })(function (e) {
          return {
            root: (0, n._)((0, n._)({}, e.typography.h4), {
              textAlign: "left",
              padding: 20,
              paddingBottom: 8
            })
          };
        }),
        w = (0, o.forwardRef)(function (e, t) {
          var r = e.classes,
            s = e.children,
            i = e.className,
            l = (0, n.a)(e, ["classes", "children", "className"]),
            u = I(void 0, { props: { classes: (0, a.A)(r, i) } });
          return o.createElement(g, (0, n._)({}, l, { classes: u.classes, ref: t }), s);
        });
    },
    83193: (e, t, r) => {
      r.d(t, {
        eHd: () => q,
        ejU: () => p,
        gZe: () => w,
        oad: () => P,
        qDn: () => E,
        qHi: () => m,
        qsL: () => F,
        yoT: () => k
      });
      var n = r(1300),
        o = function (e, t) {
          return (o =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            })(e, t);
        };
      function s(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function r() {
          this.constructor = e;
        }
        (o(e, t),
          (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r())));
      }
      function a(e, t, r, n) {
        return new (r || (r = Promise))(function (o, s) {
          function a(e) {
            try {
              l(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function i(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, i);
          }
          l((n = n.apply(e, t || [])).next());
        });
      }
      function i(e, t) {
        var r,
          n,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: []
          },
          a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return (
          (a.next = i(0)),
          (a.throw = i(1)),
          (a.return = i(2)),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function i(i) {
          return function (l) {
            var u = [i, l];
            if (r) throw TypeError("Generator is already executing.");
            for (; a && ((a = 0), u[0] && (s = 0)), s;)
              try {
                if (
                  ((r = 1),
                  n &&
                    (o =
                      2 & u[0]
                        ? n.return
                        : u[0]
                          ? n.throw || ((o = n.return) && o.call(n), 0)
                          : n.next) &&
                    !(o = o.call(n, u[1])).done)
                )
                  return o;
                switch (((n = 0), o && (u = [2 & u[0], o.value]), u[0])) {
                  case 0:
                  case 1:
                    o = u;
                    break;
                  case 4:
                    return (s.label++, { value: u[1], done: !1 });
                  case 5:
                    (s.label++, (n = u[1]), (u = [0]));
                    continue;
                  case 7:
                    ((u = s.ops.pop()), s.trys.pop());
                    continue;
                  default:
                    if (
                      !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                      (6 === u[0] || 2 === u[0])
                    ) {
                      s = 0;
                      continue;
                    }
                    if (3 === u[0] && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                      s.label = u[1];
                      break;
                    }
                    if (6 === u[0] && s.label < o[1]) {
                      ((s.label = o[1]), (o = u));
                      break;
                    }
                    if (o && s.label < o[2]) {
                      ((s.label = o[2]), s.ops.push(u));
                      break;
                    }
                    (o[2] && s.ops.pop(), s.trys.pop());
                    continue;
                }
                u = t.call(e, s);
              } catch (e) {
                ((u = [6, e]), (n = 0));
              } finally {
                r = o = 0;
              }
            if (5 & u[0]) throw u[1];
            return { value: u[0] ? u[1] : void 0, done: !0 };
          };
        }
      }
      function l(e, t) {
        var r;
        return null == e
          ? e
          : {
              currencyCode: (0, n.t2)(e, "currencyCode") ? e.currencyCode : void 0,
              quantity: (0, n.t2)(e, "quantity")
                ? null == (r = e.quantity)
                  ? r
                  : {
                      significand: (0, n.t2)(r, "significand") ? r.significand : void 0,
                      exponent: (0, n.t2)(r, "exponent") ? r.exponent : void 0
                    }
                : void 0
            };
      }
      function u(e) {
        if (void 0 !== e)
          return null === e
            ? null
            : {
                currencyCode: e.currencyCode,
                quantity: (function (e) {
                  if (void 0 !== e)
                    return null === e ? null : { significand: e.significand, exponent: e.exponent };
                })(e.quantity)
              };
      }
      "function" == typeof SuppressedError && SuppressedError;
      function c(e, t) {
        return null == e
          ? e
          : {
              type: (0, n.t2)(e, "type") ? e.type : void 0,
              stringValue: (0, n.t2)(e, "stringValue") ? e.stringValue : void 0,
              longValue: (0, n.t2)(e, "longValue") ? e.longValue : void 0,
              wildcardValue: (0, n.t2)(e, "wildcardValue") ? e.wildcardValue : void 0,
              enumOrdinal: (0, n.t2)(e, "enumOrdinal") ? e.enumOrdinal : void 0,
              uuidValue: (0, n.t2)(e, "uuidValue") ? e.uuidValue : void 0,
              valueOneofCase: (0, n.t2)(e, "valueOneofCase") ? e.valueOneofCase : void 0
            };
      }
      function d(e, t) {
        return null == e
          ? e
          : {
              nextCursor: (0, n.t2)(e, "nextCursor") ? e.nextCursor : void 0,
              hasMore: (0, n.t2)(e, "hasMore") ? e.hasMore : void 0,
              previousCursor: (0, n.t2)(e, "previousCursor") ? e.previousCursor : void 0
            };
      }
      var p = {
          Invalid: "PRODUCT_TYPE_INVALID",
          Audio: "PRODUCT_TYPE_AUDIO",
          Model: "PRODUCT_TYPE_MODEL",
          Decal: "PRODUCT_TYPE_DECAL",
          Plugin: "PRODUCT_TYPE_PLUGIN",
          MeshPart: "PRODUCT_TYPE_MESH_PART",
          Video: "PRODUCT_TYPE_VIDEO",
          FontFamily: "PRODUCT_TYPE_FONT_FAMILY"
        },
        m = {
          Invalid: "PRODUCT_NAMESPACE_INVALID",
          CreatorMarketplaceAsset: "PRODUCT_NAMESPACE_CREATOR_MARKETPLACE_ASSET",
          Bc: "PRODUCT_NAMESPACE_BC",
          VirtualGood: "PRODUCT_NAMESPACE_VIRTUAL_GOOD",
          CardVerification: "PRODUCT_NAMESPACE_CARD_VERIFICATION",
          PaidAccess: "PRODUCT_NAMESPACE_PAID_ACCESS",
          CurrencySubscription: "PRODUCT_NAMESPACE_CURRENCY_SUBSCRIPTION",
          RobloxPlusSubscription: "PRODUCT_NAMESPACE_ROBLOX_PLUS_SUBSCRIPTION"
        };
      function h(e, t) {
        return null == e
          ? e
          : {
              productNamespace: (0, n.t2)(e, "productNamespace") ? e.productNamespace : void 0,
              productType: (0, n.t2)(e, "productType") ? e.productType : void 0,
              productTargetId: (0, n.t2)(e, "productTargetId") ? e.productTargetId : void 0
            };
      }
      function v(e, t) {
        var r;
        return null == e
          ? e
          : {
              currencyCode: (0, n.t2)(e, "currencyCode") ? e.currencyCode : void 0,
              quantity: (0, n.t2)(e, "quantity")
                ? null == (r = e.quantity)
                  ? r
                  : {
                      significand: (0, n.t2)(r, "significand") ? r.significand : void 0,
                      exponent: (0, n.t2)(r, "exponent") ? r.exponent : void 0
                    }
                : void 0
            };
      }
      function f(e, t) {
        return null == e
          ? e
          : {
              productKey: (0, n.t2)(e, "productKey") ? h(e.productKey) : void 0,
              productName: (0, n.t2)(e, "productName") ? e.productName : void 0,
              totalAmount: (0, n.t2)(e, "totalAmount") ? v(e.totalAmount) : void 0,
              paymentDateTime: (0, n.t2)(e, "paymentDateTime")
                ? null === e.paymentDateTime
                  ? null
                  : new Date(e.paymentDateTime)
                : void 0,
              purchaseChargeStatus: (0, n.t2)(e, "purchaseChargeStatus")
                ? e.purchaseChargeStatus
                : void 0
            };
      }
      function g(e, t) {
        return null == e ? e : { entity: (0, n.t2)(e, "entity") ? c(e.entity) : void 0 };
      }
      function I(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              basePayment: (0, n.t2)(t, "basePayment") ? f(t.basePayment) : void 0,
              seller: (0, n.t2)(t, "seller") ? g(t.seller) : void 0,
              sellerName: (0, n.t2)(t, "sellerName") ? t.sellerName : void 0
            };
      }
      var w = {
        Invalid: "PURCHASER_STATUS_INVALID",
        Allowed: "PURCHASER_STATUS_ALLOWED",
        CountryRestricted: "PURCHASER_STATUS_COUNTRY_RESTRICTED"
      };
      function y(e) {
        return e;
      }
      function b(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              productKey: (0, n.t2)(t, "productKey") ? h(t.productKey) : void 0,
              price: (0, n.t2)(t, "price") ? v(t.price) : void 0,
              purchasablePerSeller: (0, n.t2)(t, "purchasablePerSeller")
                ? t.purchasablePerSeller
                : void 0,
              restrictions: (0, n.t2)(t, "restrictions")
                ? null === t.restrictions
                  ? null
                  : t.restrictions.map(y)
                : void 0,
              purchasable: (0, n.t2)(t, "purchasable") ? t.purchasable : void 0,
              seller: (0, n.t2)(t, "seller") ? g(t.seller) : void 0,
              isFree: (0, n.t2)(t, "isFree") ? t.isFree : void 0
            };
      }
      function x(e) {
        var t, r;
        return null == (t = e)
          ? t
          : {
              basePayment: (0, n.t2)(t, "basePayment") ? f(t.basePayment) : void 0,
              purchaser: (0, n.t2)(t, "purchaser")
                ? null == (r = t.purchaser)
                  ? r
                  : { entity: (0, n.t2)(r, "entity") ? c(r.entity) : void 0 }
                : void 0,
              purchaserName: (0, n.t2)(t, "purchaserName") ? t.purchaserName : void 0,
              netAmount: (0, n.t2)(t, "netAmount") ? v(t.netAmount) : void 0
            };
      }
      function T(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              amount: (0, n.t2)(t, "amount") ? v(t.amount) : void 0,
              status: (0, n.t2)(t, "status") ? t.status : void 0,
              payoutDateTime: (0, n.t2)(t, "payoutDateTime")
                ? null === t.payoutDateTime
                  ? null
                  : new Date(t.payoutDateTime)
                : void 0
            };
      }
      function S(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              basePriceMoney: (0, n.t2)(t, "basePriceMoney") ? v(t.basePriceMoney) : void 0,
              basePriceId: (0, n.t2)(t, "basePriceId") ? t.basePriceId : void 0
            };
      }
      var P = {
        Invalid: "PURCHASE_TRANSACTION_STATUS_INVALID",
        Success: "PURCHASE_TRANSACTION_STATUS_SUCCESS",
        PriceChanged: "PURCHASE_TRANSACTION_STATUS_PRICE_CHANGED",
        AlreadyOwned: "PURCHASE_TRANSACTION_STATUS_ALREADY_OWNED",
        ExcessiveTransactionsLimit: "PURCHASE_TRANSACTION_STATUS_EXCESSIVE_TRANSACTIONS_LIMIT",
        NotPurchasable: "PURCHASE_TRANSACTION_STATUS_NOT_PURCHASABLE",
        CountryRestricted: "PURCHASE_TRANSACTION_STATUS_COUNTRY_RESTRICTED",
        TemporarilyRestricted: "PURCHASE_TRANSACTION_STATUS_TEMPORARILY_RESTRICTED",
        ExceededSpendingLimit: "PURCHASE_TRANSACTION_STATUS_EXCEEDED_SPENDING_LIMIT",
        NotAllowed: "PURCHASE_TRANSACTION_STATUS_NOT_ALLOWED"
      };
      function C(e) {
        return e;
      }
      function A(e, t) {
        return null == e
          ? e
          : {
              path: (0, n.t2)(e, "path") ? e.path : void 0,
              basePrice: (0, n.t2)(e, "basePrice") ? l(e.basePrice) : void 0,
              purchasePrice: (0, n.t2)(e, "purchasePrice") ? l(e.purchasePrice) : void 0,
              published: (0, n.t2)(e, "published") ? e.published : void 0,
              restrictions: (0, n.t2)(e, "restrictions")
                ? null === e.restrictions
                  ? null
                  : e.restrictions.map(C)
                : void 0,
              purchasable: (0, n.t2)(e, "purchasable") ? e.purchasable : void 0,
              userSeller: (0, n.t2)(e, "userSeller") ? e.userSeller : void 0,
              groupSeller: (0, n.t2)(e, "groupSeller") ? e.groupSeller : void 0,
              modelAssetId: (0, n.t2)(e, "modelAssetId") ? e.modelAssetId : void 0,
              pluginAssetId: (0, n.t2)(e, "pluginAssetId") ? e.pluginAssetId : void 0,
              audioAssetId: (0, n.t2)(e, "audioAssetId") ? e.audioAssetId : void 0,
              decalAssetId: (0, n.t2)(e, "decalAssetId") ? e.decalAssetId : void 0,
              meshPartAssetId: (0, n.t2)(e, "meshPartAssetId") ? e.meshPartAssetId : void 0,
              videoAssetId: (0, n.t2)(e, "videoAssetId") ? e.videoAssetId : void 0,
              fontFamilyAssetId: (0, n.t2)(e, "fontFamilyAssetId") ? e.fontFamilyAssetId : void 0,
              sellerCase: (0, n.t2)(e, "sellerCase") ? e.sellerCase : void 0,
              productTypeCase: (0, n.t2)(e, "productTypeCase") ? e.productTypeCase : void 0
            };
      }
      function R(e) {
        if (void 0 !== e)
          return null === e
            ? null
            : {
                path: e.path,
                basePrice: u(e.basePrice),
                purchasePrice: u(e.purchasePrice),
                published: e.published,
                purchasable: e.purchasable,
                userSeller: e.userSeller,
                groupSeller: e.groupSeller,
                modelAssetId: e.modelAssetId,
                pluginAssetId: e.pluginAssetId,
                audioAssetId: e.audioAssetId,
                decalAssetId: e.decalAssetId,
                meshPartAssetId: e.meshPartAssetId,
                videoAssetId: e.videoAssetId,
                fontFamilyAssetId: e.fontFamilyAssetId,
                sellerCase: e.sellerCase,
                productTypeCase: e.productTypeCase
              };
      }
      var k = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            s(t, e),
            (t.prototype.v1PurchaserPaymentsGetRaw = function (e, t) {
              return a(this, void 0, void 0, function () {
                var r, o, s;
                return i(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (r = {}),
                        void 0 !== e.pageInfoCursor && (r["pageInfo.cursor"] = e.pageInfoCursor),
                        void 0 !== e.pageInfoPageSize &&
                          (r["pageInfo.pageSize"] = e.pageInfoPageSize),
                        void 0 !== e.pageInfoPrevious &&
                          (r["pageInfo.previous"] = e.pageInfoPrevious),
                        void 0 !== e.startDateTime &&
                          (r.startDateTime = e.startDateTime.toISOString()),
                        void 0 !== e.endDateTime && (r.endDateTime = e.endDateTime.toISOString()),
                        void 0 !== e.purchasePriceFilter &&
                          (r.purchasePriceFilter = e.purchasePriceFilter),
                        (o = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/purchaser/payments",
                              schemaPath: "/v1/purchaser/payments",
                              method: "GET",
                              headers: o,
                              query: r
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (s = a.sent()),
                        [
                          2,
                          new n.ko(s, function (e) {
                            return null == e
                              ? e
                              : {
                                  purchaserPayments: (0, n.t2)(e, "purchaserPayments")
                                    ? null === e.purchaserPayments
                                      ? null
                                      : e.purchaserPayments.map(I)
                                    : void 0,
                                  pageInfo: (0, n.t2)(e, "pageInfo") ? d(e.pageInfo) : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1PurchaserPaymentsGet = function () {
              return a(this, arguments, void 0, function (e, t) {
                return (
                  void 0 === e && (e = {}),
                  i(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, this.v1PurchaserPaymentsGetRaw(e, t)];
                      case 1:
                        return [4, r.sent().value()];
                      case 2:
                        return [2, r.sent()];
                    }
                  })
                );
              });
            }),
            (t.prototype.v1PurchaserStatusGetRaw = function (e) {
              return a(this, void 0, void 0, function () {
                var t, r, o;
                return i(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (t = {}),
                        (r = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/purchaser/status",
                              schemaPath: "/v1/purchaser/status",
                              method: "GET",
                              headers: r,
                              query: t
                            },
                            e
                          )
                        ]
                      );
                    case 1:
                      return (
                        (o = s.sent()),
                        [
                          2,
                          new n.ko(o, function (e) {
                            return null == e
                              ? e
                              : {
                                  purchaserStatus: (0, n.t2)(e, "purchaserStatus")
                                    ? e.purchaserStatus
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1PurchaserStatusGet = function (e) {
              return a(this, void 0, void 0, function () {
                return i(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.v1PurchaserStatusGetRaw(e)];
                    case 1:
                      return [4, t.sent().value()];
                    case 2:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1SellerAccountManagementUrlGetRaw = function (e) {
              return a(this, void 0, void 0, function () {
                var t, r, o;
                return i(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (t = {}),
                        (r = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/seller/account-management-url",
                              schemaPath: "/v1/seller/account-management-url",
                              method: "GET",
                              headers: r,
                              query: t
                            },
                            e
                          )
                        ]
                      );
                    case 1:
                      return (
                        (o = s.sent()),
                        [
                          2,
                          new n.ko(o, function (e) {
                            return null == e
                              ? e
                              : {
                                  accountManagementUrl: (0, n.t2)(e, "accountManagementUrl")
                                    ? e.accountManagementUrl
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1SellerAccountManagementUrlGet = function (e) {
              return a(this, void 0, void 0, function () {
                return i(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.v1SellerAccountManagementUrlGetRaw(e)];
                    case 1:
                      return [4, t.sent().value()];
                    case 2:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1SellerAuthorizedCountryCodesGetRaw = function (e) {
              return a(this, void 0, void 0, function () {
                var t, r, o;
                return i(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (t = {}),
                        (r = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/seller/authorized-country-codes",
                              schemaPath: "/v1/seller/authorized-country-codes",
                              method: "GET",
                              headers: r,
                              query: t
                            },
                            e
                          )
                        ]
                      );
                    case 1:
                      return (
                        (o = s.sent()),
                        [
                          2,
                          new n.ko(o, function (e) {
                            return null == e
                              ? e
                              : {
                                  countryCodes: (0, n.t2)(e, "countryCodes")
                                    ? e.countryCodes
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1SellerAuthorizedCountryCodesGet = function (e) {
              return a(this, void 0, void 0, function () {
                return i(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.v1SellerAuthorizedCountryCodesGetRaw(e)];
                    case 1:
                      return [4, t.sent().value()];
                    case 2:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1SellerBalanceGetRaw = function (e) {
              return a(this, void 0, void 0, function () {
                var t, r, o;
                return i(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (t = {}),
                        (r = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/seller/balance",
                              schemaPath: "/v1/seller/balance",
                              method: "GET",
                              headers: r,
                              query: t
                            },
                            e
                          )
                        ]
                      );
                    case 1:
                      return (
                        (o = s.sent()),
                        [
                          2,
                          new n.ko(o, function (e) {
                            return null == e
                              ? e
                              : {
                                  totalBalance: (0, n.t2)(e, "totalBalance")
                                    ? v(e.totalBalance)
                                    : void 0,
                                  availableBalance: (0, n.t2)(e, "availableBalance")
                                    ? v(e.availableBalance)
                                    : void 0,
                                  pendingBalance: (0, n.t2)(e, "pendingBalance")
                                    ? v(e.pendingBalance)
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1SellerBalanceGet = function (e) {
              return a(this, void 0, void 0, function () {
                return i(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.v1SellerBalanceGetRaw(e)];
                    case 1:
                      return [4, t.sent().value()];
                    case 2:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1SellerOnboardPostRaw = function (e, t) {
              return a(this, void 0, void 0, function () {
                var r, o, s;
                return i(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (r = {}),
                        void 0 !== e.countryCode && (r.countryCode = e.countryCode),
                        void 0 !== e.acceptedUserTos && (r.acceptedUserTos = e.acceptedUserTos),
                        (o = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/seller/onboard",
                              schemaPath: "/v1/seller/onboard",
                              method: "POST",
                              headers: o,
                              query: r
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (s = a.sent()),
                        [
                          2,
                          new n.ko(s, function (e) {
                            return null == e
                              ? e
                              : {
                                  onboardingUrl: (0, n.t2)(e, "onboardingUrl")
                                    ? e.onboardingUrl
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1SellerOnboardPost = function () {
              return a(this, arguments, void 0, function (e, t) {
                return (
                  void 0 === e && (e = {}),
                  i(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, this.v1SellerOnboardPostRaw(e, t)];
                      case 1:
                        return [4, r.sent().value()];
                      case 2:
                        return [2, r.sent()];
                    }
                  })
                );
              });
            }),
            (t.prototype.v1SellerPaymentsGetRaw = function (e, t) {
              return a(this, void 0, void 0, function () {
                var r, o, s;
                return i(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (r = {}),
                        void 0 !== e.pageInfoCursor && (r["pageInfo.cursor"] = e.pageInfoCursor),
                        void 0 !== e.pageInfoPageSize &&
                          (r["pageInfo.pageSize"] = e.pageInfoPageSize),
                        void 0 !== e.pageInfoPrevious &&
                          (r["pageInfo.previous"] = e.pageInfoPrevious),
                        void 0 !== e.startDateTime &&
                          (r.startDateTime = e.startDateTime.toISOString()),
                        void 0 !== e.endDateTime && (r.endDateTime = e.endDateTime.toISOString()),
                        void 0 !== e.purchasePriceFilter &&
                          (r.purchasePriceFilter = e.purchasePriceFilter),
                        (o = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/seller/payments",
                              schemaPath: "/v1/seller/payments",
                              method: "GET",
                              headers: o,
                              query: r
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (s = a.sent()),
                        [
                          2,
                          new n.ko(s, function (e) {
                            return null == e
                              ? e
                              : {
                                  sellerPayments: (0, n.t2)(e, "sellerPayments")
                                    ? null === e.sellerPayments
                                      ? null
                                      : e.sellerPayments.map(x)
                                    : void 0,
                                  pageInfo: (0, n.t2)(e, "pageInfo") ? d(e.pageInfo) : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1SellerPaymentsGet = function () {
              return a(this, arguments, void 0, function (e, t) {
                return (
                  void 0 === e && (e = {}),
                  i(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, this.v1SellerPaymentsGetRaw(e, t)];
                      case 1:
                        return [4, r.sent().value()];
                      case 2:
                        return [2, r.sent()];
                    }
                  })
                );
              });
            }),
            (t.prototype.v1SellerPayoutsGetRaw = function (e, t) {
              return a(this, void 0, void 0, function () {
                var r, o, s;
                return i(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (r = {}),
                        void 0 !== e.pageInfoCursor && (r["pageInfo.cursor"] = e.pageInfoCursor),
                        void 0 !== e.pageInfoPageSize &&
                          (r["pageInfo.pageSize"] = e.pageInfoPageSize),
                        void 0 !== e.pageInfoPrevious &&
                          (r["pageInfo.previous"] = e.pageInfoPrevious),
                        (o = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/seller/payouts",
                              schemaPath: "/v1/seller/payouts",
                              method: "GET",
                              headers: o,
                              query: r
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (s = a.sent()),
                        [
                          2,
                          new n.ko(s, function (e) {
                            return null == e
                              ? e
                              : {
                                  payouts: (0, n.t2)(e, "payouts")
                                    ? null === e.payouts
                                      ? null
                                      : e.payouts.map(T)
                                    : void 0,
                                  pageInfo: (0, n.t2)(e, "pageInfo") ? d(e.pageInfo) : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1SellerPayoutsGet = function () {
              return a(this, arguments, void 0, function (e, t) {
                return (
                  void 0 === e && (e = {}),
                  i(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, this.v1SellerPayoutsGetRaw(e, t)];
                      case 1:
                        return [4, r.sent().value()];
                      case 2:
                        return [2, r.sent()];
                    }
                  })
                );
              });
            }),
            (t.prototype.v1SellerPayoutsTotalGetRaw = function (e) {
              return a(this, void 0, void 0, function () {
                var t, r, o;
                return i(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (t = {}),
                        (r = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/seller/payouts-total",
                              schemaPath: "/v1/seller/payouts-total",
                              method: "GET",
                              headers: r,
                              query: t
                            },
                            e
                          )
                        ]
                      );
                    case 1:
                      return (
                        (o = s.sent()),
                        [
                          2,
                          new n.ko(o, function (e) {
                            return null == e
                              ? e
                              : {
                                  totalPayoutAmount: (0, n.t2)(e, "totalPayoutAmount")
                                    ? v(e.totalPayoutAmount)
                                    : void 0,
                                  totalPendingPayoutAmount: (0, n.t2)(e, "totalPendingPayoutAmount")
                                    ? v(e.totalPendingPayoutAmount)
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1SellerPayoutsTotalGet = function (e) {
              return a(this, void 0, void 0, function () {
                return i(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.v1SellerPayoutsTotalGetRaw(e)];
                    case 1:
                      return [4, t.sent().value()];
                    case 2:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1SellerProductsProductTypeGetRaw = function (e, t) {
              return a(this, void 0, void 0, function () {
                var r, o, s;
                return i(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (null === e.productType || void 0 === e.productType)
                        throw new n.Q0(
                          "productType",
                          "Required parameter requestParameters.productType was null or undefined when calling v1SellerProductsProductTypeGet."
                        );
                      return (
                        (r = {}),
                        void 0 !== e.isFree && (r.isFree = e.isFree),
                        void 0 !== e.isPurchasablePerSeller &&
                          (r.isPurchasablePerSeller = e.isPurchasablePerSeller),
                        void 0 !== e.includePricing && (r.includePricing = e.includePricing),
                        void 0 !== e.pageInfoCursor && (r["pageInfo.cursor"] = e.pageInfoCursor),
                        void 0 !== e.pageInfoPageSize &&
                          (r["pageInfo.pageSize"] = e.pageInfoPageSize),
                        void 0 !== e.pageInfoPrevious &&
                          (r["pageInfo.previous"] = e.pageInfoPrevious),
                        (o = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/seller/products/{productType}".replace(
                                "{".concat("productType", "}"),
                                encodeURIComponent(String(e.productType))
                              ),
                              schemaPath: "/v1/seller/products/{productType}",
                              method: "GET",
                              headers: o,
                              query: r
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (s = a.sent()),
                        [
                          2,
                          new n.ko(s, function (e) {
                            return null == e
                              ? e
                              : {
                                  fiatProducts: (0, n.t2)(e, "fiatProducts")
                                    ? null === e.fiatProducts
                                      ? null
                                      : e.fiatProducts.map(b)
                                    : void 0,
                                  pageInfo: (0, n.t2)(e, "pageInfo") ? d(e.pageInfo) : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1SellerProductsProductTypeGet = function (e, t) {
              return a(this, void 0, void 0, function () {
                return i(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.v1SellerProductsProductTypeGetRaw(e, t)];
                    case 1:
                      return [4, r.sent().value()];
                    case 2:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1SellerStatusGetRaw = function (e) {
              return a(this, void 0, void 0, function () {
                var t, r, o;
                return i(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (t = {}),
                        (r = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/seller/status",
                              schemaPath: "/v1/seller/status",
                              method: "GET",
                              headers: r,
                              query: t
                            },
                            e
                          )
                        ]
                      );
                    case 1:
                      return (
                        (o = s.sent()),
                        [
                          2,
                          new n.ko(o, function (e) {
                            return null == e
                              ? e
                              : {
                                  sellerStatus: (0, n.t2)(e, "sellerStatus")
                                    ? e.sellerStatus
                                    : void 0,
                                  setupCompleted: (0, n.t2)(e, "setupCompleted")
                                    ? e.setupCompleted
                                    : void 0,
                                  countryCode: (0, n.t2)(e, "countryCode") ? e.countryCode : void 0,
                                  createdDateTime: (0, n.t2)(e, "createdDateTime")
                                    ? null === e.createdDateTime
                                      ? null
                                      : new Date(e.createdDateTime)
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1SellerStatusGet = function (e) {
              return a(this, void 0, void 0, function () {
                return i(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.v1SellerStatusGetRaw(e)];
                    case 1:
                      return [4, t.sent().value()];
                    case 2:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            t
          );
        })(n.yi),
        E = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            s(t, e),
            (t.prototype.cloudV2CreatorStoreProductPathPatchRaw = function (e, t) {
              return a(this, void 0, void 0, function () {
                var r, o, s;
                return i(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (
                        null === e.creatorStoreProductPath ||
                        void 0 === e.creatorStoreProductPath
                      )
                        throw new n.Q0(
                          "creatorStoreProductPath",
                          "Required parameter requestParameters.creatorStoreProductPath was null or undefined when calling cloudV2CreatorStoreProductPathPatch."
                        );
                      return (
                        (r = {}),
                        void 0 !== e.updateMask && (r.updateMask = e.updateMask),
                        void 0 !== e.allowMissing && (r.allowMissing = e.allowMissing),
                        ((o = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/cloud/v2/{creatorStoreProduct.path}".replace(
                                "{".concat("creatorStoreProduct.path", "}"),
                                encodeURIComponent(String(e.creatorStoreProductPath))
                              ),
                              schemaPath: "/cloud/v2/{creatorStoreProduct.path}",
                              method: "PATCH",
                              headers: o,
                              query: r,
                              body: R(e.robloxOpenCloudCloudV2CreatorStoreProduct)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (s = a.sent()),
                        [
                          2,
                          new n.ko(s, function (e) {
                            return A(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.cloudV2CreatorStoreProductPathPatch = function (e, t) {
              return a(this, void 0, void 0, function () {
                return i(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.cloudV2CreatorStoreProductPathPatchRaw(e, t)];
                    case 1:
                      return [4, r.sent().value()];
                    case 2:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            (t.prototype.creatorStoreProductGetRaw = function (e, t) {
              return a(this, void 0, void 0, function () {
                var r, o, s;
                return i(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (null === e.fiatProductKey || void 0 === e.fiatProductKey)
                        throw new n.Q0(
                          "fiatProductKey",
                          "Required parameter requestParameters.fiatProductKey was null or undefined when calling creatorStoreProductGet."
                        );
                      return (
                        (r = {}),
                        (o = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v2/creator-store-products/{fiatProductKey}".replace(
                                "{".concat("fiatProductKey", "}"),
                                encodeURIComponent(String(e.fiatProductKey))
                              ),
                              schemaPath: "/v2/creator-store-products/{fiatProductKey}",
                              method: "GET",
                              headers: o,
                              query: r
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (s = a.sent()),
                        [
                          2,
                          new n.ko(s, function (e) {
                            return A(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.creatorStoreProductGet = function (e, t) {
              return a(this, void 0, void 0, function () {
                return i(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.creatorStoreProductGetRaw(e, t)];
                    case 1:
                      return [4, r.sent().value()];
                    case 2:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            (t.prototype.creatorStoreProductUpdateRaw = function (e, t) {
              return a(this, void 0, void 0, function () {
                var r, o, s;
                return i(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (null === e.fiatProductKey || void 0 === e.fiatProductKey)
                        throw new n.Q0(
                          "fiatProductKey",
                          "Required parameter requestParameters.fiatProductKey was null or undefined when calling creatorStoreProductUpdate."
                        );
                      if (
                        null === e.robloxOpenCloudCloudV2CreatorStoreProduct ||
                        void 0 === e.robloxOpenCloudCloudV2CreatorStoreProduct
                      )
                        throw new n.Q0(
                          "robloxOpenCloudCloudV2CreatorStoreProduct",
                          "Required parameter requestParameters.robloxOpenCloudCloudV2CreatorStoreProduct was null or undefined when calling creatorStoreProductUpdate."
                        );
                      return (
                        (r = {}),
                        void 0 !== e.allowMissing && (r.allowMissing = e.allowMissing),
                        void 0 !== e.updateMask && (r.updateMask = e.updateMask),
                        ((o = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v2/creator-store-products/{fiatProductKey}".replace(
                                "{".concat("fiatProductKey", "}"),
                                encodeURIComponent(String(e.fiatProductKey))
                              ),
                              schemaPath: "/v2/creator-store-products/{fiatProductKey}",
                              method: "PATCH",
                              headers: o,
                              query: r,
                              body: R(e.robloxOpenCloudCloudV2CreatorStoreProduct)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (s = a.sent()),
                        [
                          2,
                          new n.ko(s, function (e) {
                            return A(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.creatorStoreProductUpdate = function (e, t) {
              return a(this, void 0, void 0, function () {
                return i(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.creatorStoreProductUpdateRaw(e, t)];
                    case 1:
                      return [4, r.sent().value()];
                    case 2:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            t
          );
        })(n.yi),
        q = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            s(t, e),
            (t.prototype.v1PricesProductNamespaceProductTypeGetRaw = function (e, t) {
              return a(this, void 0, void 0, function () {
                var r, o, s;
                return i(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (null === e.productNamespace || void 0 === e.productNamespace)
                        throw new n.Q0(
                          "productNamespace",
                          "Required parameter requestParameters.productNamespace was null or undefined when calling v1PricesProductNamespaceProductTypeGet."
                        );
                      if (null === e.productType || void 0 === e.productType)
                        throw new n.Q0(
                          "productType",
                          "Required parameter requestParameters.productType was null or undefined when calling v1PricesProductNamespaceProductTypeGet."
                        );
                      return (
                        (r = {}),
                        (o = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/prices/{productNamespace}/{productType}"
                                .replace(
                                  "{".concat("productNamespace", "}"),
                                  encodeURIComponent(String(e.productNamespace))
                                )
                                .replace(
                                  "{".concat("productType", "}"),
                                  encodeURIComponent(String(e.productType))
                                ),
                              schemaPath: "/v1/prices/{productNamespace}/{productType}",
                              method: "GET",
                              headers: o,
                              query: r
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (s = a.sent()),
                        [
                          2,
                          new n.ko(s, function (e) {
                            return null == e
                              ? e
                              : {
                                  basePrices: (0, n.t2)(e, "basePrices")
                                    ? null === e.basePrices
                                      ? null
                                      : e.basePrices.map(S)
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1PricesProductNamespaceProductTypeGet = function (e, t) {
              return a(this, void 0, void 0, function () {
                return i(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.v1PricesProductNamespaceProductTypeGetRaw(e, t)];
                    case 1:
                      return [4, r.sent().value()];
                    case 2:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            t
          );
        })(n.yi),
        F = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            s(t, e),
            (t.prototype.v1ProductPurchasePostRaw = function (e, t) {
              return a(this, void 0, void 0, function () {
                var r, o, s;
                return i(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (r = {}),
                        ((o = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/product/purchase",
                              schemaPath: "/v1/product/purchase",
                              method: "POST",
                              headers: o,
                              query: r,
                              body: (function (e) {
                                if (void 0 !== e)
                                  return null === e
                                    ? null
                                    : {
                                        productKey: (function (e) {
                                          if (void 0 !== e)
                                            return null === e
                                              ? null
                                              : {
                                                  productNamespace: e.productNamespace,
                                                  productType: e.productType,
                                                  productTargetId: e.productTargetId
                                                };
                                        })(e.productKey),
                                        expectedPrice: (function (e) {
                                          if (void 0 !== e)
                                            return null === e
                                              ? null
                                              : {
                                                  currencyCode: e.currencyCode,
                                                  quantity: (function (e) {
                                                    if (void 0 !== e)
                                                      return null === e
                                                        ? null
                                                        : {
                                                            significand: e.significand,
                                                            exponent: e.exponent
                                                          };
                                                  })(e.quantity)
                                                };
                                        })(e.expectedPrice),
                                        referralSource: e.referralSource,
                                        searchId: e.searchId
                                      };
                              })(
                                e.robloxMarketplaceFiatMarketplaceFiatProductServiceV1Beta1PurchaseFiatProductRequest
                              )
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (s = a.sent()),
                        [
                          2,
                          new n.ko(s, function (e) {
                            return null == e
                              ? e
                              : {
                                  checkoutUrl: (0, n.t2)(e, "checkoutUrl") ? e.checkoutUrl : void 0,
                                  purchaseTransactionStatus: (0, n.t2)(
                                    e,
                                    "purchaseTransactionStatus"
                                  )
                                    ? e.purchaseTransactionStatus
                                    : void 0,
                                  actualPrice: (0, n.t2)(e, "actualPrice")
                                    ? v(e.actualPrice)
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1ProductPurchasePost = function () {
              return a(this, arguments, void 0, function (e, t) {
                return (
                  void 0 === e && (e = {}),
                  i(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, this.v1ProductPurchasePostRaw(e, t)];
                      case 1:
                        return [4, r.sent().value()];
                      case 2:
                        return [2, r.sent()];
                    }
                  })
                );
              });
            }),
            t
          );
        })(n.yi);
      !(function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        (s(t, e),
          (t.prototype.v1PurchaserReportPaymentsGetRaw = function (e, t) {
            return a(this, void 0, void 0, function () {
              var r, o, s;
              return i(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (r = {}),
                      void 0 !== e.startDate && (r.startDate = e.startDate.toISOString()),
                      void 0 !== e.endDate && (r.endDate = e.endDate.toISOString()),
                      void 0 !== e.purchasePriceFilter &&
                        (r.purchasePriceFilter = e.purchasePriceFilter),
                      (o = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/purchaser/report/payments",
                            schemaPath: "/v1/purchaser/report/payments",
                            method: "GET",
                            headers: o,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return ((s = a.sent()), [2, new n.Fo(s)]);
                }
              });
            });
          }),
          (t.prototype.v1PurchaserReportPaymentsGet = function () {
            return a(this, arguments, void 0, function (e, t) {
              return (
                void 0 === e && (e = {}),
                i(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.v1PurchaserReportPaymentsGetRaw(e, t)];
                    case 1:
                      return [4, r.sent().value()];
                    case 2:
                      return [2, r.sent()];
                  }
                })
              );
            });
          }),
          (t.prototype.v1SellerReportPaymentsGetRaw = function (e, t) {
            return a(this, void 0, void 0, function () {
              var r, o, s;
              return i(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (r = {}),
                      void 0 !== e.startDate && (r.startDate = e.startDate.toISOString()),
                      void 0 !== e.endDate && (r.endDate = e.endDate.toISOString()),
                      void 0 !== e.purchasePriceFilter &&
                        (r.purchasePriceFilter = e.purchasePriceFilter),
                      (o = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/seller/report/payments",
                            schemaPath: "/v1/seller/report/payments",
                            method: "GET",
                            headers: o,
                            query: r
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return ((s = a.sent()), [2, new n.Fo(s)]);
                }
              });
            });
          }),
          (t.prototype.v1SellerReportPaymentsGet = function () {
            return a(this, arguments, void 0, function (e, t) {
              return (
                void 0 === e && (e = {}),
                i(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.v1SellerReportPaymentsGetRaw(e, t)];
                    case 1:
                      return [4, r.sent().value()];
                    case 2:
                      return [2, r.sent()];
                  }
                })
              );
            });
          }));
      })(n.yi);
    },
    86131: (e, t, r) => {
      e.exports = r.p + "static/media/alert_dark.a4f097c3.svg";
    },
    88798: (e, t, r) => {
      r.d(t, { aY: () => tz, sN: () => rw });
      var n = r(37876),
        o = r(14232),
        s = r(98477);
      function a(e) {
        e();
      }
      function i(e, t) {
        return (r) => e(t(r));
      }
      function l(e) {
        return void 0 !== e;
      }
      function u() {}
      function c(e, t) {
        return t(e);
      }
      function d(...e) {
        return e;
      }
      function p(e) {
        e(2);
      }
      function m(e) {
        return e(4);
      }
      function h(e, t) {
        return e(1, (e) => t(0, e));
      }
      function v(e, t) {
        let r = e(1, (e) => {
          (r(), t(e));
        });
        return r;
      }
      function f(e) {
        let t, r;
        return (n) => (o) => {
          ((t = o),
            r && clearTimeout(r),
            (r = setTimeout(() => {
              n(t);
            }, e)));
        };
      }
      function g(e, t) {
        return e === t;
      }
      function I(e = g) {
        let t;
        return (r) => (n) => {
          e(t, n) || ((t = n), r(n));
        };
      }
      function w(e) {
        return (t) => (r) => {
          e(r) && t(r);
        };
      }
      function y(e) {
        return (t) => i(t, e);
      }
      function b(e) {
        return (t) => () => {
          t(e);
        };
      }
      function x(e, ...t) {
        let r = (function (...e) {
          return (t) => e.reduceRight(c, t);
        })(...t);
        return (t, n) => {
          switch (t) {
            case 2:
              p(e);
              return;
            case 1:
              return e(1, r(n));
          }
        };
      }
      function T(e, t) {
        return (r) => (n) => {
          r((t = e(t, n)));
        };
      }
      function S(e) {
        return (t) => (r) => {
          e > 0 ? e-- : t(r);
        };
      }
      function P(e) {
        let t = null,
          r;
        return (n) => (o) => {
          ((t = o),
            r ||
              (r = setTimeout(() => {
                ((r = void 0), n(t));
              }, e)));
        };
      }
      function C(...e) {
        let t = Array(e.length),
          r = 0,
          n = null,
          o = 2 ** e.length - 1;
        return (
          e.forEach((e, s) => {
            let a = 2 ** s;
            e(1, (e) => {
              let i = r;
              ((r |= a), (t[s] = e), i !== o && r === o && n && (n(), (n = null)));
            });
          }),
          (e) => (s) => {
            let a = () => {
              e([s].concat(t));
            };
            r === o ? a() : (n = a);
          }
        );
      }
      function A(e) {
        let t = e,
          r = k();
        return (e, n) => {
          switch (e) {
            case 0:
              t = n;
              break;
            case 1:
              n(t);
              break;
            case 4:
              return t;
          }
          return r(e, n);
        };
      }
      function R(e, t) {
        var r;
        return ((r = A(t)), h(e, r), r);
      }
      function k() {
        let e = [];
        return (t, r) => {
          switch (t) {
            case 0:
              e.slice().forEach((e) => {
                e(r);
              });
              return;
            case 2:
              e.splice(0, e.length);
              return;
            case 1:
              return (
                e.push(r),
                () => {
                  let t = e.indexOf(r);
                  t > -1 && e.splice(t, 1);
                }
              );
          }
        };
      }
      function E(e) {
        var t;
        return ((t = k()), h(e, t), t);
      }
      function q(e, t = [], { singleton: r } = { singleton: !0 }) {
        return { constructor: e, dependencies: t, id: F(), singleton: r };
      }
      let F = () => Symbol();
      function G(...e) {
        let t = k(),
          r = Array(e.length),
          n = 0,
          o = 2 ** e.length - 1;
        return (
          e.forEach((e, s) => {
            let a = 2 ** s;
            e(1, (e) => {
              ((r[s] = e), (n |= a) === o && t(0, r));
            });
          }),
          function (e, s) {
            switch (e) {
              case 2:
                return void p(t);
              case 1:
                return (n === o && s(r), t(1, s));
            }
          }
        );
      }
      function H(e, t = g) {
        return x(e, I(t));
      }
      function N(...e) {
        return function (t, r) {
          switch (t) {
            case 2:
              return;
            case 1:
              return (function (...e) {
                return () => {
                  e.map(a);
                };
              })(...e.map((e) => e(1, r)));
          }
        };
      }
      let M = { DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3 },
        O = { [M.DEBUG]: "debug", [M.ERROR]: "error", [M.INFO]: "log", [M.WARN]: "warn" },
        U = q(
          () => {
            let e = A(M.ERROR);
            return {
              log: A((t, r, n = M.INFO) => {
                n >= ((typeof globalThis > "u" ? window : globalThis).VIRTUOSO_LOG_LEVEL ?? m(e)) &&
                  console[O[n]](
                    "%creact-virtuoso: %c%s %o",
                    "color: #0253b3; font-weight: bold",
                    "color: initial",
                    t,
                    r
                  );
              }),
              logLevel: e
            };
          },
          [],
          { singleton: !0 }
        );
      function z(e, t, r) {
        return L(e, t, r).callbackRef;
      }
      function L(e, t, r) {
        let n = o.useRef(null),
          s = o.useMemo(
            () =>
              "u" > typeof ResizeObserver
                ? new ResizeObserver((t) => {
                    let n = () => {
                      let r = t[0].target;
                      null !== r.offsetParent && e(r);
                    };
                    r ? n() : requestAnimationFrame(n);
                  })
                : null,
            [e, r]
          );
        return {
          callbackRef: (e) => {
            e && t
              ? (s?.observe(e), (n.current = e))
              : (n.current && s?.unobserve(n.current), (n.current = null));
          },
          ref: n
        };
      }
      function _(e, t, r, n, s, a, i, l, u) {
        return L(
          o.useCallback(
            (r) => {
              let o,
                u = (function (e, t, r, n) {
                  let o = e.length;
                  if (0 === o) return null;
                  let s = [];
                  for (let a = 0; a < o; a++) {
                    let o = e.item(a);
                    if (void 0 === o.dataset.index) continue;
                    let i = parseInt(o.dataset.index),
                      l = parseFloat(o.dataset.knownSize),
                      u = t(o, r);
                    if (
                      (0 === u &&
                        n("Zero-sized element, this should not happen", { child: o }, M.ERROR),
                      u === l)
                    )
                      continue;
                    let c = s[s.length - 1];
                    0 === s.length || c.size !== u || c.endIndex !== i - 1
                      ? s.push({ endIndex: i, size: u, startIndex: i })
                      : s[s.length - 1].endIndex++;
                  }
                  return s;
                })(r.children, t, l ? "offsetWidth" : "offsetHeight", s),
                c = r.parentElement;
              for (; void 0 === c.dataset.virtuosoScroller;) c = c.parentElement;
              let d = "window" === c.lastElementChild.dataset.viewportType;
              d && (o = c.ownerDocument.defaultView);
              let p = i
                ? l
                  ? i.scrollLeft
                  : i.scrollTop
                : d
                  ? l
                    ? o.scrollX || o.document.documentElement.scrollLeft
                    : o.scrollY || o.document.documentElement.scrollTop
                  : l
                    ? c.scrollLeft
                    : c.scrollTop;
              (n({
                scrollHeight: i
                  ? l
                    ? i.scrollWidth
                    : i.scrollHeight
                  : d
                    ? l
                      ? o.document.documentElement.scrollWidth
                      : o.document.documentElement.scrollHeight
                    : l
                      ? c.scrollWidth
                      : c.scrollHeight,
                scrollTop: Math.max(p, 0),
                viewportHeight: i
                  ? l
                    ? i.offsetWidth
                    : i.offsetHeight
                  : d
                    ? l
                      ? o.innerWidth
                      : o.innerHeight
                    : l
                      ? c.offsetWidth
                      : c.offsetHeight
              }),
                a?.(
                  l
                    ? B("column-gap", getComputedStyle(r).columnGap, s)
                    : B("row-gap", getComputedStyle(r).rowGap, s)
                ),
                null !== u && e(u));
            },
            [e, t, s, a, i, n, l]
          ),
          r,
          u
        );
      }
      function B(e, t, r) {
        return (
          "normal" !== t &&
            t?.endsWith("px") !== !0 &&
            r(`${e} was not resolved to pixel value correctly`, t, M.WARN),
          "normal" === t ? 0 : parseInt(t ?? "0", 10)
        );
      }
      function V(e, t, r) {
        let n = o.useRef(null),
          s = o.useCallback(
            (r) => {
              let o, s;
              if (!r?.offsetParent) return;
              let a = r.getBoundingClientRect(),
                l = a.width;
              if (t) {
                let e = t.getBoundingClientRect(),
                  r = a.top - e.top;
                ((s = e.height - Math.max(0, r)), (o = r + t.scrollTop));
              } else {
                let e = i.current.ownerDocument.defaultView;
                ((s = e.innerHeight - Math.max(0, a.top)), (o = a.top + e.scrollY));
              }
              ((n.current = {
                listHeight: a.height,
                offsetTop: o,
                visibleHeight: s,
                visibleWidth: l
              }),
                e(n.current));
            },
            [e, t]
          ),
          { callbackRef: a, ref: i } = L(s, !0, r),
          l = o.useCallback(() => {
            s(i.current);
          }, [s, i]);
        return (
          o.useEffect(() => {
            if (t) {
              t.addEventListener("scroll", l);
              let e = new ResizeObserver(() => {
                requestAnimationFrame(l);
              });
              return (
                e.observe(t),
                () => {
                  (t.removeEventListener("scroll", l), e.unobserve(t));
                }
              );
            }
            let e = i.current?.ownerDocument.defaultView;
            return (
              e?.addEventListener("scroll", l),
              e?.addEventListener("resize", l),
              () => {
                (e?.removeEventListener("scroll", l), e?.removeEventListener("resize", l));
              }
            );
          }, [l, t, i]),
          a
        );
      }
      let D = q(
          () => {
            let e = k(),
              t = k(),
              r = A(0),
              n = k(),
              o = A(0),
              s = k(),
              a = k(),
              i = A(0),
              l = A(0),
              u = A(0),
              c = A(0),
              d = k(),
              p = k(),
              m = A(!1),
              v = A(!1),
              f = A(!1);
            return (
              h(
                x(
                  e,
                  y(({ scrollTop: e }) => e)
                ),
                t
              ),
              h(
                x(
                  e,
                  y(({ scrollHeight: e }) => e)
                ),
                a
              ),
              h(t, o),
              {
                deviation: r,
                fixedFooterHeight: u,
                fixedHeaderHeight: l,
                footerHeight: c,
                headerHeight: i,
                horizontalDirection: v,
                scrollBy: p,
                scrollContainerState: e,
                scrollHeight: a,
                scrollingInProgress: m,
                scrollTo: d,
                scrollTop: t,
                skipAnimationFrameInResizeObserver: f,
                smoothScrollTargetReached: n,
                statefulScrollTop: o,
                viewportHeight: s
              }
            );
          },
          [],
          { singleton: !0 }
        ),
        j = { lvl: 0 };
      function Q(e, t) {
        let r = e.length;
        if (0 === r) return [];
        let { index: n, value: o } = t(e[0]),
          s = [];
        for (let a = 1; a < r; a++) {
          let { index: r, value: i } = t(e[a]);
          (s.push({ end: r - 1, start: n, value: o }), (n = r), (o = i));
        }
        return (s.push({ end: 1 / 0, start: n, value: o }), s);
      }
      function W(e) {
        return e === j;
      }
      function K(e, t) {
        if (!W(e)) return t === e.k ? e.v : t < e.k ? K(e.l, t) : K(e.r, t);
      }
      function Y(e, t, r = "k") {
        if (W(e)) return [-1 / 0, void 0];
        if (Number(e[r]) === t) return [e.k, e.v];
        if (Number(e[r]) < t) {
          let n = Y(e.r, t, r);
          return n[0] === -1 / 0 ? [e.k, e.v] : n;
        }
        return Y(e.l, t, r);
      }
      function X(e, t, r) {
        return W(e)
          ? er(t, r, 1)
          : t === e.k
            ? ee(e, { k: t, v: r })
            : t < e.k
              ? eo(en(ee(e, { l: X(e.l, t, r) })))
              : eo(en(ee(e, { r: X(e.r, t, r) })));
      }
      function $(e, t, r) {
        if (W(e)) return [];
        let n = Y(e, t)[0];
        return Q(
          (function e(t, r, n) {
            if (W(t)) return [];
            let { k: o, l: s, r: a, v: i } = t,
              l = [];
            return (
              o > r && (l = l.concat(e(s, r, n))),
              o >= r && o <= n && l.push({ k: o, v: i }),
              o <= n && (l = l.concat(e(a, r, n))),
              l
            );
          })(e, n, r),
          ({ k: e, v: t }) => ({ index: e, value: t })
        );
      }
      function Z(e) {
        return W(e) ? [] : [...Z(e.l), { k: e.k, v: e.v }, ...Z(e.r)];
      }
      function J(e) {
        let { l: t, lvl: r, r: n } = e;
        if (n.lvl >= r - 1 && t.lvl >= r - 1) return e;
        if (r > n.lvl + 1) {
          if (et(t)) return en(ee(e, { lvl: r - 1 }));
          if (!W(t) && !W(t.r))
            return ee(t.r, { l: ee(t, { r: t.r.l }), lvl: r, r: ee(e, { l: t.r.r, lvl: r - 1 }) });
          throw Error("Unexpected empty nodes");
        }
        if (et(e)) return eo(ee(e, { lvl: r - 1 }));
        if (!W(n) && !W(n.l)) {
          let t = n.l,
            o = et(t) ? n.lvl - 1 : n.lvl;
          return ee(t, {
            l: ee(e, { lvl: r - 1, r: t.l }),
            lvl: t.lvl + 1,
            r: eo(ee(n, { l: t.r, lvl: o }))
          });
        }
        throw Error("Unexpected empty nodes");
      }
      function ee(e, t) {
        return er(
          void 0 !== t.k ? t.k : e.k,
          void 0 !== t.v ? t.v : e.v,
          void 0 !== t.lvl ? t.lvl : e.lvl,
          void 0 !== t.l ? t.l : e.l,
          void 0 !== t.r ? t.r : e.r
        );
      }
      function et(e) {
        return W(e) || e.lvl > e.r.lvl;
      }
      function er(e, t, r, n = j, o = j) {
        return { k: e, l: n, lvl: r, r: o, v: t };
      }
      function en(e) {
        let { l: t } = e;
        return W(t) || t.lvl !== e.lvl ? e : ee(t, { r: ee(e, { l: t.r }) });
      }
      function eo(e) {
        let { lvl: t, r: r } = e;
        return W(r) || W(r.r) || r.lvl !== t || r.r.lvl !== t
          ? e
          : ee(r, { l: ee(e, { r: r.l }), lvl: t + 1 });
      }
      function es(e, t) {
        return !!(e && e.startIndex === t.startIndex && e.endIndex === t.endIndex);
      }
      function ea(e, t) {
        return !!(e && e[0] === t[0] && e[1] === t[1]);
      }
      let ei = q(() => ({ recalcInProgress: A(!1) }), [], { singleton: !0 });
      function el(e, t, r, n = 0) {
        let o = e.length - 1;
        for (; n <= o;) {
          let s = Math.floor((n + o) / 2),
            a = r(e[s], t);
          if (0 === a) return s;
          if (-1 === a) {
            if (o - n < 2) return s - 1;
            o = s - 1;
          } else {
            if (o === n) return s;
            n = s + 1;
          }
        }
        throw Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`);
      }
      function eu(e, t) {
        return Math.round(e.getBoundingClientRect()[t]);
      }
      function ec(e) {
        return !W(e.groupOffsetTree);
      }
      function ed({ index: e }, t) {
        return t === e ? 0 : t < e ? -1 : 1;
      }
      function ep({ offset: e }, t) {
        return t === e ? 0 : t < e ? -1 : 1;
      }
      function em(e, t, r) {
        if (0 === t.length) return 0;
        let { index: n, offset: o, size: s } = t[el(t, e, ed)],
          a = e - n,
          i = s * a + (a - 1) * r + o;
        return i > 0 ? i + r : i;
      }
      function eh(e, t) {
        if (!ec(t)) return e;
        let r = 0;
        for (; t.groupIndices[r] <= e + r;) r++;
        return e + r;
      }
      function ev(e, t, r) {
        if ("u" > typeof e.groupIndex) return t.groupIndices[e.groupIndex] + 1;
        let n = eh("LAST" === e.index ? r : e.index, t);
        return Math.max(0, n, Math.min(r, n));
      }
      function ef(e, [t, r, n, o]) {
        t.length > 0 && n("received item sizes", t, M.DEBUG);
        let s = e.sizeTree,
          a = s,
          i = 0;
        if (r.length > 0 && W(s) && 2 === t.length) {
          let e = t[0].size,
            n = t[1].size;
          a = r.reduce((t, r) => X(X(t, r, e), r + 1, n), a);
        } else
          [a, i] = (function (e, t) {
            let r = W(e) ? 0 : 1 / 0;
            for (let n of t) {
              let { endIndex: t, size: o, startIndex: s } = n;
              if (((r = Math.min(r, s)), W(e))) {
                e = X(e, 0, o);
                continue;
              }
              let a = $(e, s - 1, t + 1);
              if (
                a.some(
                  (function (e) {
                    let { endIndex: t, size: r, startIndex: n } = e;
                    return (e) =>
                      e.start === n && (e.end === t || e.end === 1 / 0) && e.value === r;
                  })(n)
                )
              )
                continue;
              let i = !1,
                l = !1;
              for (let { end: r, start: n, value: s } of a)
                (i
                  ? (t >= n || o === s) &&
                    (e = (function e(t, r) {
                      if (W(t)) return j;
                      let { k: n, l: o, r: s } = t;
                      if (r === n) {
                        if (W(o)) return s;
                        if (W(s)) return o;
                        let [e, r] = (function e(t) {
                          return W(t.r) ? [t.k, t.v] : e(t.r);
                        })(o);
                        return J(
                          ee(t, {
                            k: e,
                            l: (function e(t) {
                              return W(t.r) ? t.l : J(ee(t, { r: e(t.r) }));
                            })(o),
                            v: r
                          })
                        );
                      }
                      return r < n ? J(ee(t, { l: e(o, r) })) : J(ee(t, { r: e(s, r) }));
                    })(e, n))
                  : ((l = s !== o), (i = !0)),
                  r > t && t >= n && s !== o && (e = X(e, t + 1, s)));
              l && (e = X(e, s, o));
            }
            return [e, r];
          })(a, t);
        if (a === s) return e;
        let { lastIndex: l, lastOffset: u, lastSize: c, offsetTree: d } = eI(e.offsetTree, i, a, o);
        return {
          groupIndices: r,
          groupOffsetTree: r.reduce((e, t) => X(e, t, em(t, d, o)), j),
          lastIndex: l,
          lastOffset: u,
          lastSize: c,
          offsetTree: d,
          sizeTree: a
        };
      }
      function eg(e, t) {
        let r = 0,
          n = 0;
        for (; r < e;) ((r += t[n + 1] - t[n] - 1), n++);
        return n - (r !== e);
      }
      function eI(e, t, r, n) {
        let o = e,
          s = 0,
          a = 0,
          i = 0,
          l = 0;
        if (0 !== t) {
          ((l = el(o, t - 1, ed)), (i = o[l].offset));
          let e = Y(r, t - 1);
          ((s = e[0]),
            (a = e[1]),
            o.length && o[l].size === Y(r, t)[1] && (l -= 1),
            (o = o.slice(0, l + 1)));
        } else o = [];
        for (let { start: e, value: l } of $(r, t, 1 / 0)) {
          let t = e - s,
            r = t * a + i + t * n;
          (o.push({ index: e, offset: r, size: l }), (s = e), (i = r), (a = l));
        }
        return { lastIndex: s, lastOffset: i, lastSize: a, offsetTree: o };
      }
      function ew(e) {
        return { index: e.index, value: e };
      }
      let ey = { offsetHeight: "height", offsetWidth: "width" },
        eb = q(
          ([{ log: e }, { recalcInProgress: t }]) => {
            let r = k(),
              n = k(),
              o = R(n, 0),
              s = k(),
              a = k(),
              i = A(0),
              l = A([]),
              u = A(void 0),
              c = A(void 0),
              d = A(void 0),
              p = A(void 0),
              v = A((e, t) => eu(e, ey[t])),
              f = A(void 0),
              g = A(0),
              b = {
                groupIndices: [],
                groupOffsetTree: j,
                lastIndex: 0,
                lastOffset: 0,
                lastSize: 0,
                offsetTree: [],
                sizeTree: j
              },
              S = R(x(r, C(l, e, g), T(ef, b), I()), b),
              P = R(
                x(
                  l,
                  I(),
                  T((e, t) => ({ current: t, prev: e.current }), { current: [], prev: [] }),
                  y(({ prev: e }) => e)
                ),
                []
              );
            (h(
              x(
                l,
                w((e) => e.length > 0),
                C(S, g),
                y(([e, t, r]) => {
                  let n = e.reduce((e, n, o) => X(e, n, em(n, t.offsetTree, r) || o), j);
                  return { ...t, groupIndices: e, groupOffsetTree: n };
                })
              ),
              S
            ),
              h(
                x(
                  n,
                  C(S),
                  w(([e, { lastIndex: t }]) => e < t),
                  y(([e, { lastIndex: t, lastSize: r }]) => [
                    { endIndex: t, size: r, startIndex: e }
                  ])
                ),
                r
              ),
              h(u, c));
            let q = R(
              x(
                u,
                y((e) => void 0 === e)
              ),
              !0
            );
            (h(
              x(
                c,
                w((e) => void 0 !== e && W(m(S).sizeTree)),
                y((e) => {
                  let t = m(d),
                    r = m(l).length > 0;
                  return void 0 !== t && 0 !== t
                    ? r
                      ? [
                          { endIndex: 0, size: t, startIndex: 0 },
                          { endIndex: 1, size: e, startIndex: 1 }
                        ]
                      : []
                    : [{ endIndex: 0, size: e, startIndex: 0 }];
                })
              ),
              r
            ),
              h(
                x(
                  p,
                  w((e) => void 0 !== e && e.length > 0 && W(m(S).sizeTree)),
                  y((e) => {
                    let t = [],
                      r = e[0],
                      n = 0;
                    for (let o = 1; o < e.length; o++) {
                      let s = e[o];
                      s !== r &&
                        (t.push({ endIndex: o - 1, size: r, startIndex: n }), (r = s), (n = o));
                    }
                    return (t.push({ endIndex: e.length - 1, size: r, startIndex: n }), t);
                  })
                ),
                r
              ),
              h(
                x(
                  l,
                  C(d, c),
                  w(([, e, t]) => void 0 !== e && void 0 !== t),
                  y(([e, t, r]) => {
                    let n = [];
                    for (let o = 0; o < e.length; o++) {
                      let s = e[o],
                        a = e[o + 1];
                      (n.push({ startIndex: s, endIndex: s, size: t }),
                        void 0 !== a && n.push({ startIndex: s + 1, endIndex: a - 1, size: r }));
                    }
                    return n;
                  })
                ),
                r
              ));
            let F = E(
              x(
                r,
                C(S),
                T(({ sizes: e }, [t, r]) => ({ changed: r !== e, sizes: r }), {
                  changed: !1,
                  sizes: b
                }),
                y((e) => e.changed)
              )
            );
            (x(
              i,
              T((e, t) => ({ diff: e.prev - t, prev: t }), { diff: 0, prev: 0 }),
              y((e) => e.diff)
            )(1, (e) => {
              let { groupIndices: r } = m(S);
              if (e > 0) (t(0, !0), s(0, e + eg(e, r)));
              else if (e < 0) {
                let t = m(P);
                (t.length > 0 && (e -= eg(-e, t)), a(0, e));
              }
            }),
              x(i, C(e))(1, ([e, t]) => {
                e < 0 &&
                  t(
                    "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
                    { firstItemIndex: i },
                    M.ERROR
                  );
              }));
            let G = E(s);
            h(
              x(
                s,
                C(S),
                y(([e, t]) => {
                  let r = t.groupIndices.length > 0,
                    n = [],
                    o = t.lastSize;
                  if (r) {
                    let r = K(t.sizeTree, 0),
                      s = 0,
                      a = 0;
                    for (; s < e;) {
                      let e = t.groupIndices[a],
                        i = t.groupIndices.length === a + 1 ? 1 / 0 : t.groupIndices[a + 1] - e - 1;
                      (n.push({ endIndex: e, size: r, startIndex: e }),
                        n.push({ endIndex: e + 1 + i - 1, size: o, startIndex: e + 1 }),
                        a++,
                        (s += i + 1));
                    }
                    let i = Z(t.sizeTree);
                    return (
                      s !== e && i.shift(),
                      i.reduce(
                        (t, { k: r, v: n }) => {
                          let o = t.ranges;
                          return (
                            0 !== t.prevSize &&
                              (o = [
                                ...t.ranges,
                                { endIndex: r + e - 1, size: t.prevSize, startIndex: t.prevIndex }
                              ]),
                            { prevIndex: r + e, prevSize: n, ranges: o }
                          );
                        },
                        { prevIndex: e, prevSize: 0, ranges: n }
                      ).ranges
                    );
                  }
                  return Z(t.sizeTree).reduce(
                    (t, { k: r, v: n }) => ({
                      prevIndex: r + e,
                      prevSize: n,
                      ranges: [
                        ...t.ranges,
                        { endIndex: r + e - 1, size: t.prevSize, startIndex: t.prevIndex }
                      ]
                    }),
                    { prevIndex: 0, prevSize: o, ranges: [] }
                  ).ranges;
                })
              ),
              r
            );
            let H = E(
              x(
                a,
                C(S, g),
                y(([e, { offsetTree: t }, r]) => em(-e, t, r))
              )
            );
            return (
              h(
                x(
                  a,
                  C(S, g),
                  y(([e, t, r]) => {
                    if (t.groupIndices.length > 0) {
                      if (W(t.sizeTree)) return t;
                      let n = j,
                        o = m(P),
                        s = 0,
                        a = 0,
                        i = 0;
                      for (; s < -e;) {
                        i = o[a];
                        let e = o[a + 1] - i - 1;
                        (a++, (s += e + 1));
                      }
                      return (
                        (n = Z(t.sizeTree).reduce(
                          (t, { k: r, v: n }) => X(t, Math.max(0, r + e), n),
                          n
                        )),
                        s !== -e &&
                          ((n = X(n, 0, K(t.sizeTree, i))),
                          (n = X(n, 1, Y(t.sizeTree, -e + 1)[1]))),
                        { ...t, sizeTree: n, ...eI(t.offsetTree, 0, n, r) }
                      );
                    }
                    let n = Z(t.sizeTree).reduce(
                      (t, { k: r, v: n }) => X(t, Math.max(0, r + e), n),
                      j
                    );
                    return { ...t, sizeTree: n, ...eI(t.offsetTree, 0, n, r) };
                  })
                ),
                S
              ),
              {
                beforeUnshiftWith: G,
                data: f,
                defaultItemSize: c,
                firstItemIndex: i,
                fixedItemSize: u,
                fixedGroupSize: d,
                gap: g,
                groupIndices: l,
                heightEstimates: p,
                itemSize: v,
                listRefresh: F,
                shiftWith: a,
                shiftWithOffset: H,
                sizeRanges: r,
                sizes: S,
                statefulTotalCount: o,
                totalCount: n,
                trackItemSizes: q,
                unshiftWith: s
              }
            );
          },
          d(U, ei),
          { singleton: !0 }
        );
      function ex(e) {
        return e.reduce((e, t) => (e.groupIndices.push(e.totalCount), (e.totalCount += t + 1), e), {
          groupIndices: [],
          totalCount: 0
        });
      }
      let eT = q(
          ([{ groupIndices: e, sizes: t, totalCount: r }, { headerHeight: n, scrollTop: o }]) => {
            let s = k(),
              a = k(),
              i = E(x(s, y(ex)));
            return (
              h(
                x(
                  i,
                  y((e) => e.totalCount)
                ),
                r
              ),
              h(
                x(
                  i,
                  y((e) => e.groupIndices)
                ),
                e
              ),
              h(
                x(
                  G(o, t, n),
                  w(([e, t]) => ec(t)),
                  y(([e, t, r]) => Y(t.groupOffsetTree, Math.max(e - r, 0), "v")[0]),
                  I(),
                  y((e) => [e])
                ),
                a
              ),
              { groupCounts: s, topItemsIndexes: a }
            );
          },
          d(eb, D)
        ),
        eS = q(
          ([{ log: e }]) => {
            let t = A(!1),
              r = E(
                x(
                  t,
                  w((e) => e),
                  I()
                )
              );
            return (
              t(1, (t) => {
                t && m(e)("props updated", {}, M.DEBUG);
              }),
              { didMount: r, propsReady: t }
            );
          },
          d(U),
          { singleton: !0 }
        ),
        eP = "u" > typeof document && "scrollBehavior" in document.documentElement.style;
      function eC(e) {
        let t = "number" == typeof e ? { index: e } : e;
        return (
          t.align || (t.align = "start"),
          (t.behavior && eP) || (t.behavior = "auto"),
          void 0 === t.offset && (t.offset = 0),
          t
        );
      }
      let eA = q(
        ([
          { gap: e, listRefresh: t, sizes: r, totalCount: n },
          {
            fixedFooterHeight: o,
            fixedHeaderHeight: s,
            footerHeight: a,
            headerHeight: i,
            scrollingInProgress: l,
            scrollTo: u,
            smoothScrollTargetReached: c,
            viewportHeight: d
          },
          { log: p }
        ]) => {
          let m = k(),
            f = k(),
            g = A(0),
            I = null,
            w = null,
            b = null;
          function T() {
            (null !== I && (I(), (I = null)),
              null !== b && (b(), (b = null)),
              w && (clearTimeout(w), (w = null)),
              l(0, !1));
          }
          return (
            h(
              x(
                m,
                C(r, d, n, g, i, a, p),
                C(e, s, o),
                y(([[e, r, n, o, s, a, i, u], d, p, h]) => {
                  let g = eC(e),
                    { align: y, behavior: S, offset: P } = g,
                    C = o - 1,
                    A = ev(g, r, C),
                    R = em(A, r.offsetTree, d) + a;
                  ("end" === y
                    ? ((R += p + Y(r.sizeTree, A)[1] - n + h), A === C && (R += i))
                    : "center" === y
                      ? (R += (p + Y(r.sizeTree, A)[1] - n + h) / 2)
                      : (R -= s),
                    void 0 !== P && 0 !== P && (R += P));
                  let k = (t) => {
                    (T(),
                      t
                        ? (u("retrying to scroll to", { location: e }, M.DEBUG), m(0, e))
                        : (f(0, !0), u("list did not change, scroll successful", {}, M.DEBUG)));
                  };
                  if ((T(), "smooth" === S)) {
                    let e = !1;
                    ((b = t(1, (t) => {
                      e = e || t;
                    })),
                      (I = v(c, () => {
                        k(e);
                      })));
                  } else
                    I = v(
                      x(t, (e) => {
                        let t = setTimeout(() => {
                          e(!1);
                        }, 150);
                        return (r) => {
                          r && (e(!0), clearTimeout(t));
                        };
                      }),
                      k
                    );
                  return (
                    (w = setTimeout(() => {
                      T();
                    }, 1200)),
                    l(0, !0),
                    u("scrolling from index to", { behavior: S, index: A, top: R }, M.DEBUG),
                    { behavior: S, top: R }
                  );
                })
              ),
              u
            ),
            { scrollTargetReached: f, scrollToIndex: m, topListHeight: g }
          );
        },
        d(eb, D, U),
        { singleton: !0 }
      );
      function eR(e, t) {
        0 === e
          ? t()
          : requestAnimationFrame(() => {
              eR(e - 1, t);
            });
      }
      function ek(e, t) {
        return "number" == typeof e ? e : "LAST" === e.index ? t - 1 : e.index;
      }
      let eE = q(
        ([
          { defaultItemSize: e, listRefresh: t, sizes: r },
          { scrollTop: n },
          { scrollTargetReached: o, scrollToIndex: s },
          { didMount: a }
        ]) => {
          let i = A(!0),
            u = A(0),
            c = A(!0);
          return (
            h(
              x(
                a,
                C(u),
                w(([e, t]) => 0 !== t),
                b(!1)
              ),
              i
            ),
            h(
              x(
                a,
                C(u),
                w(([e, t]) => 0 !== t),
                b(!1)
              ),
              c
            ),
            x(
              G(t, a),
              C(i, r, e, c),
              w(([[, e], t, { sizeTree: r }, n, o]) => e && (!W(r) || l(n)) && !t && !o),
              C(u)
            )(1, ([, e]) => {
              (v(o, () => {
                c(0, !0);
              }),
                eR(4, () => {
                  (v(n, () => {
                    i(0, !0);
                  }),
                    s(0, e));
                }));
            }),
            {
              initialItemFinalLocationReached: c,
              initialTopMostItemIndex: u,
              scrolledToInitialItem: i
            }
          );
        },
        d(eb, D, eA, eS),
        { singleton: !0 }
      );
      function eq(e, t) {
        return 1.01 > Math.abs(e - t);
      }
      let eF = "down",
        eG = {
          atBottom: !1,
          notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
          state: { offsetBottom: 0, scrollHeight: 0, scrollTop: 0, viewportHeight: 0 }
        },
        eH = q(
          ([
            {
              footerHeight: e,
              headerHeight: t,
              scrollBy: r,
              scrollContainerState: n,
              scrollTop: o,
              viewportHeight: s
            }
          ]) => {
            let a = A(!1),
              i = A(!0),
              l = k(),
              u = k(),
              c = A(4),
              d = A(0),
              p = R(x(N(x(H(o), S(1), b(!0)), x(H(o), S(1), b(!1), f(100))), I()), !1),
              v = R(x(N(x(r, b(!0)), x(r, b(!1), f(200))), I()), !1);
            (h(
              x(
                G(H(o), H(d)),
                y(([e, t]) => e <= t),
                I()
              ),
              i
            ),
              h(x(i, P(50)), u));
            let g = E(
                x(
                  G(n, H(s), H(t), H(e), H(c)),
                  T((e, [{ scrollHeight: t, scrollTop: r }, n, o, s, a]) => {
                    let i = { scrollHeight: t, scrollTop: r, viewportHeight: n };
                    if (r + n - t > -a) {
                      let t, n;
                      return (
                        r > e.state.scrollTop
                          ? ((t = "SCROLLED_DOWN"), (n = e.state.scrollTop - r))
                          : ((t = "SIZE_DECREASED"),
                            (n = e.state.scrollTop - r || e.scrollTopDelta)),
                        { atBottom: !0, atBottomBecause: t, scrollTopDelta: n, state: i }
                      );
                    }
                    return {
                      atBottom: !1,
                      notAtBottomBecause:
                        i.scrollHeight > e.state.scrollHeight
                          ? "SIZE_INCREASED"
                          : n < e.state.viewportHeight
                            ? "VIEWPORT_HEIGHT_DECREASING"
                            : r < e.state.scrollTop
                              ? "SCROLLING_UPWARDS"
                              : "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",
                      state: i
                    };
                  }, eG),
                  I((e, t) => void 0 !== e && e.atBottom === t.atBottom)
                )
              ),
              q = R(
                x(
                  n,
                  T(
                    (e, { scrollHeight: t, scrollTop: r, viewportHeight: n }) => {
                      if (!eq(e.scrollHeight, t)) {
                        let o = t - (r + n) < 1;
                        return e.scrollTop !== r && o
                          ? { changed: !0, jump: e.scrollTop - r, scrollHeight: t, scrollTop: r }
                          : { changed: !0, jump: 0, scrollHeight: t, scrollTop: r };
                      }
                      return { changed: !1, jump: 0, scrollHeight: t, scrollTop: r };
                    },
                    { changed: !1, jump: 0, scrollHeight: 0, scrollTop: 0 }
                  ),
                  w((e) => e.changed),
                  y((e) => e.jump)
                ),
                0
              );
            (h(
              x(
                g,
                y((e) => e.atBottom)
              ),
              a
            ),
              h(x(a, P(50)), l));
            let F = A(eF);
            (h(
              x(
                n,
                y(({ scrollTop: e }) => e),
                I(),
                T(
                  (e, t) =>
                    m(v)
                      ? { direction: e.direction, prevScrollTop: t }
                      : { direction: t < e.prevScrollTop ? "up" : eF, prevScrollTop: t },
                  { direction: eF, prevScrollTop: 0 }
                ),
                y((e) => e.direction)
              ),
              F
            ),
              h(x(n, P(50), b("none")), F));
            let M = A(0);
            return (
              h(
                x(
                  p,
                  w((e) => !e),
                  b(0)
                ),
                M
              ),
              h(
                x(
                  o,
                  P(100),
                  C(p),
                  w(([e, t]) => t),
                  T(([e, t], [r]) => [t, r], [0, 0]),
                  y(([e, t]) => t - e)
                ),
                M
              ),
              {
                atBottomState: g,
                atBottomStateChange: l,
                atBottomThreshold: c,
                atTopStateChange: u,
                atTopThreshold: d,
                isAtBottom: a,
                isAtTop: i,
                isScrolling: p,
                lastJumpDueToItemResize: q,
                scrollDirection: F,
                scrollVelocity: M
              }
            );
          },
          d(D)
        ),
        eN = "bottom",
        eM = "none";
      function eO(e, t, r) {
        return "number" == typeof e
          ? ("up" === r && "top" === t) || (r === eF && t === eN)
            ? e
            : 0
          : "up" === r
            ? "top" === t
              ? e.main
              : e.reverse
            : t === eN
              ? e.main
              : e.reverse;
      }
      function eU(e, t) {
        return "number" == typeof e ? e : (e[t] ?? 0);
      }
      let ez = q(
          ([
            { deviation: e, fixedHeaderHeight: t, headerHeight: r, scrollTop: n, viewportHeight: o }
          ]) => {
            let s = k(),
              a = A(0),
              i = A(0),
              l = A(0),
              u = R(
                x(
                  G(H(n), H(o), H(r), H(s, ea), H(l), H(a), H(t), H(e), H(i)),
                  y(([e, t, r, [n, o], s, a, i, l, u]) => {
                    let c = e - l,
                      d = Math.max(r - c, 0),
                      p = eM,
                      m = eU(u, "top"),
                      h = eU(u, eN);
                    return (
                      (n -= l),
                      (n += r + i),
                      (o += r + i),
                      n > e + (a + i) - m && (p = "up"),
                      (o -= l) < e - d + t + h && (p = eF),
                      p !== eM
                        ? [
                            Math.max(c - r - eO(s, "top", p) - m, 0),
                            c - d - i + t + eO(s, eN, p) + h
                          ]
                        : null
                    );
                  }),
                  w((e) => null !== e),
                  I(ea)
                ),
                [0, 0]
              );
            return {
              increaseViewportBy: i,
              listBoundary: s,
              overscan: l,
              topListHeight: a,
              visibleRange: u
            };
          },
          d(D),
          { singleton: !0 }
        ),
        eL = {
          bottom: 0,
          firstItemIndex: 0,
          items: [],
          offsetBottom: 0,
          offsetTop: 0,
          top: 0,
          topItems: [],
          topListHeight: 0,
          totalCount: 0
        };
      function e_(e, t, r, n, o, s) {
        let { lastIndex: a, lastOffset: i, lastSize: l } = o,
          u = 0,
          c = 0;
        if (e.length > 0) {
          u = e[0].offset;
          let t = e[e.length - 1];
          c = t.offset + t.size;
        }
        let d = r - a,
          p = u,
          m = i + d * l + (d - 1) * n - c;
        return {
          bottom: c,
          firstItemIndex: s,
          items: eV(e, o, s),
          offsetBottom: m,
          offsetTop: u,
          top: p,
          topItems: eV(t, o, s),
          topListHeight: t.reduce((e, t) => t.size + e, 0),
          totalCount: r
        };
      }
      function eB(e, t, r, n, o, s) {
        let a = 0;
        if (r.groupIndices.length > 0)
          for (let t of r.groupIndices) {
            if (t - a >= e) break;
            a++;
          }
        let i = e + a,
          l = ek(t, i);
        return e_(
          Array.from({ length: i }).map((e, t) => ({
            data: s[t + l],
            index: t + l,
            offset: 0,
            size: 0
          })),
          [],
          i,
          o,
          r,
          n
        );
      }
      function eV(e, t, r) {
        if (0 === e.length) return [];
        if (!ec(t)) return e.map((e) => ({ ...e, index: e.index + r, originalIndex: e.index }));
        let n = e[0].index,
          o = e[e.length - 1].index,
          s = [],
          a = $(t.groupOffsetTree, n, o),
          i,
          l = 0;
        for (let n of e) {
          let e;
          ((!i || i.end < n.index) && ((i = a.shift()), (l = t.groupIndices.indexOf(i.start))),
            (e =
              n.index === i.start
                ? { index: l, type: "group" }
                : { groupIndex: l, index: n.index - (l + 1) + r }),
            s.push({ ...e, data: n.data, offset: n.offset, originalIndex: n.index, size: n.size }));
        }
        return s;
      }
      function eD(e, t) {
        return void 0 === e ? 0 : "number" == typeof e ? e : (e[t] ?? 0);
      }
      let ej = q(
          ([
            { data: e, firstItemIndex: t, gap: r, sizes: n, totalCount: o },
            s,
            { listBoundary: a, topListHeight: i, visibleRange: u },
            { initialTopMostItemIndex: c, scrolledToInitialItem: d },
            { topListHeight: p },
            v,
            { didMount: f },
            { recalcInProgress: g }
          ]) => {
            let b = A([]),
              T = A(0),
              S = k(),
              q = A(0);
            h(s.topItemsIndexes, b);
            let F = R(
              x(
                G(f, g, H(u, ea), H(o), H(n), H(c), d, H(b), H(t), H(r), H(q), e),
                w(([e, t, , r, , , , , , , , n]) => {
                  let o = void 0 !== n && n.length !== r;
                  return e && !t && !o;
                }),
                y(([, , [e, t], r, n, o, s, a, i, l, u, c]) => {
                  let { offsetTree: d, sizeTree: p } = n,
                    h = m(T);
                  if (0 === r) return { ...eL, totalCount: r };
                  if (0 === e && 0 === t)
                    return 0 === h ? { ...eL, totalCount: r } : eB(h, o, n, i, l, c || []);
                  if (W(p))
                    return h > 0
                      ? null
                      : e_(
                          (function (e, t, r) {
                            if (ec(t)) {
                              let n = eh(e, t);
                              return [
                                { index: Y(t.groupOffsetTree, n)[0], offset: 0, size: 0 },
                                { data: r?.[0], index: n, offset: 0, size: 0 }
                              ];
                            }
                            return [{ data: r?.[0], index: e, offset: 0, size: 0 }];
                          })(ek(o, r), n, c),
                          [],
                          r,
                          l,
                          n,
                          i
                        );
                  let v = [];
                  if (a.length > 0) {
                    let e = a[0],
                      t = a[a.length - 1],
                      r = 0;
                    for (let n of $(p, e, t)) {
                      let o = n.value,
                        s = Math.max(n.start, e),
                        a = Math.min(n.end, t);
                      for (let e = s; e <= a; e++)
                        (v.push({ data: c?.[e], index: e, offset: r, size: o }), (r += o));
                    }
                  }
                  if (!s) return e_([], v, r, l, n, i);
                  let f = a.length > 0 ? a[a.length - 1] + 1 : 0,
                    g = (function (e, t, r, n = 0) {
                      return (
                        n > 0 && (t = Math.max(t, e[el(e, n, ed)].offset)),
                        Q(
                          (function (e, t, r, n) {
                            let o = el(e, t, n),
                              s = el(e, r, n, o);
                            return e.slice(o, s + 1);
                          })(e, t, r, ep),
                          ew
                        )
                      );
                    })(d, e, t, f);
                  if (0 === g.length) return null;
                  let I = r - 1,
                    w = (function (e, t) {
                      return (t(e), e);
                    })([], (r) => {
                      for (let n of g) {
                        let o = n.value,
                          s = o.offset,
                          a = n.start,
                          i = o.size;
                        if (o.offset < e) {
                          let t = (a += Math.floor((e - o.offset + l) / (i + l))) - n.start;
                          s += t * i + t * l;
                        }
                        a < f && ((s += (f - a) * i), (a = f));
                        let u = Math.min(n.end, I);
                        for (let e = a; e <= u && !(s >= t); e++)
                          (r.push({ data: c?.[e], index: e, offset: s, size: i }), (s += i + l));
                      }
                    }),
                    y = eD(u, "top"),
                    b = eD(u, eN);
                  if (w.length > 0 && (y > 0 || b > 0)) {
                    let e = w[0],
                      t = w[w.length - 1];
                    if (y > 0 && e.index > f) {
                      let t = Math.min(y, e.index - f),
                        r = [],
                        n = e.offset;
                      for (let o = e.index - 1; o >= e.index - t; o--) {
                        let t = $(p, o, o)[0]?.value ?? e.size;
                        ((n -= t + l), r.unshift({ data: c?.[o], index: o, offset: n, size: t }));
                      }
                      w.unshift(...r);
                    }
                    if (b > 0 && t.index < I) {
                      let e = Math.min(b, I - t.index),
                        r = t.offset + t.size + l;
                      for (let n = t.index + 1; n <= t.index + e; n++) {
                        let e = $(p, n, n)[0]?.value ?? t.size;
                        (w.push({ data: c?.[n], index: n, offset: r, size: e }), (r += e + l));
                      }
                    }
                  }
                  return e_(w, v, r, l, n, i);
                }),
                w((e) => null !== e),
                I()
              ),
              eL
            );
            (h(
              x(
                e,
                w(l),
                y((e) => e?.length)
              ),
              o
            ),
              h(
                x(
                  F,
                  y((e) => e.topListHeight)
                ),
                p
              ),
              h(p, i),
              h(
                x(
                  F,
                  y((e) => [e.top, e.bottom])
                ),
                a
              ),
              h(
                x(
                  F,
                  y((e) => e.items)
                ),
                S
              ));
            let N = E(
                x(
                  F,
                  w(({ items: e }) => e.length > 0),
                  C(o, e),
                  w(([{ items: e }, t]) => e[e.length - 1].originalIndex === t - 1),
                  y(([, e, t]) => [e - 1, t]),
                  I(ea),
                  y(([e]) => e)
                )
              ),
              M = E(
                x(
                  F,
                  P(200),
                  w(({ items: e, topItems: t }) => e.length > 0 && e[0].originalIndex === t.length),
                  y(({ items: e }) => e[0].index),
                  I()
                )
              ),
              O = E(
                x(
                  F,
                  w(({ items: e }) => e.length > 0),
                  y(({ items: e }) => {
                    let t = 0,
                      r = e.length - 1;
                    for (; "group" === e[t].type && t < r;) t++;
                    for (; "group" === e[r].type && r > t;) r--;
                    return { endIndex: e[r].index, startIndex: e[t].index };
                  }),
                  I(es)
                )
              );
            return {
              endReached: N,
              initialItemCount: T,
              itemsRendered: S,
              listState: F,
              minOverscanItemCount: q,
              rangeChanged: O,
              startReached: M,
              topItemsIndexes: b,
              ...v
            };
          },
          d(eb, eT, ez, eE, eA, eH, eS, ei),
          { singleton: !0 }
        ),
        eQ = q(
          ([
            { fixedFooterHeight: e, fixedHeaderHeight: t, footerHeight: r, headerHeight: n },
            { listState: o }
          ]) => {
            let s = k(),
              a = R(
                x(
                  G(r, e, n, t, o),
                  y(([e, t, r, n, o]) => e + t + r + n + o.offsetBottom + o.bottom)
                ),
                0
              );
            return (h(H(a), s), { totalListHeight: a, totalListHeightChanged: s });
          },
          d(D, ej),
          { singleton: !0 }
        ),
        eW = q(
          ([{ viewportHeight: e }, { totalListHeight: t }]) => {
            let r = A(!1),
              n = R(
                x(
                  G(r, e, t),
                  w(([e]) => e),
                  y(([, e, t]) => Math.max(0, e - t)),
                  P(0),
                  I()
                ),
                0
              );
            return { alignToBottom: r, paddingTopAddition: n };
          },
          d(D, eQ),
          { singleton: !0 }
        ),
        eK = q(() => ({ context: A(null) })),
        eY = ({
          itemBottom: e,
          itemTop: t,
          locationParams: { align: r, behavior: n, ...o },
          viewportBottom: s,
          viewportTop: a
        }) =>
          t < a
            ? { ...o, align: r ?? "start", ...(void 0 !== n ? { behavior: n } : {}) }
            : e > s
              ? { ...o, align: r ?? "end", ...(void 0 !== n ? { behavior: n } : {}) }
              : null,
        eX = q(
          ([
            { gap: e, sizes: t, totalCount: r },
            {
              fixedFooterHeight: n,
              fixedHeaderHeight: o,
              headerHeight: s,
              scrollingInProgress: a,
              scrollTop: i,
              viewportHeight: l
            },
            { scrollToIndex: u }
          ]) => {
            let c = k();
            return (
              h(
                x(
                  c,
                  C(t, l, r, s, o, n, i),
                  C(e),
                  y(([[e, t, r, n, o, s, i, l], u]) => {
                    let { calculateViewLocation: c = eY, done: d, ...p } = e,
                      h = ev(e, t, n - 1),
                      f = em(h, t.offsetTree, u) + o + s,
                      g = c({
                        itemBottom: f + Y(t.sizeTree, h)[1],
                        itemTop: f,
                        locationParams: p,
                        viewportBottom: l + r - i,
                        viewportTop: l + s
                      });
                    return (
                      null !== g
                        ? d &&
                          v(
                            x(
                              a,
                              w((e) => !e),
                              S(m(a) ? 1 : 2)
                            ),
                            d
                          )
                        : d?.(),
                      g
                    );
                  }),
                  w((e) => null !== e)
                ),
                u
              ),
              { scrollIntoView: c }
            );
          },
          d(eb, D, eA, ej, U),
          { singleton: !0 }
        );
      function e$(e) {
        return !1 !== e && ("smooth" === e ? "smooth" : "auto");
      }
      let eZ = q(
          ([
            { listRefresh: e, totalCount: t, fixedItemSize: r, data: n },
            { atBottomState: o, isAtBottom: s },
            { scrollToIndex: a },
            { scrolledToInitialItem: i },
            { didMount: l, propsReady: u },
            { log: c },
            { scrollingInProgress: d },
            { context: p },
            { scrollIntoView: f }
          ]) => {
            let g = A(!1),
              I = k(),
              b = null;
            function R(e) {
              a(0, { align: "end", behavior: e, index: "LAST" });
            }
            function E(e) {
              setTimeout(
                v(o, (t) => {
                  e &&
                    !t.atBottom &&
                    "SIZE_INCREASED" === t.notAtBottomBecause &&
                    null === b &&
                    (m(c)("scrolling to bottom due to increased size", {}, M.DEBUG), R("auto"));
                }),
                100
              );
            }
            (x(
              G(x(H(t), S(1)), l),
              C(H(g), s, i, d),
              y(([[e, t], r, n, o, s]) => {
                let a = t && o,
                  i = "auto";
                return (
                  a &&
                    ((i = ((e, t) => ("function" == typeof e ? e$(e(t)) : t && e$(e)))(r, n || s)),
                    (a = a && !1 !== i)),
                  { followOutputBehavior: i, shouldFollow: a, totalCount: e }
                );
              }),
              w(({ shouldFollow: e }) => e)
            )(1, ({ followOutputBehavior: t, totalCount: n }) => {
              (null !== b && (b(), (b = null)),
                void 0 !== m(r)
                  ? requestAnimationFrame(() => {
                      (m(c)("following output to ", { totalCount: n }, M.DEBUG), R(t));
                    })
                  : (b = v(e, () => {
                      (m(c)("following output to ", { totalCount: n }, M.DEBUG), R(t), (b = null));
                    })));
            }),
              x(
                G(H(g), t, u),
                w(([e, , t]) => !1 !== e && t),
                T(({ value: e }, [, t]) => ({ refreshed: e === t, value: t }), {
                  refreshed: !1,
                  value: 0
                }),
                w(({ refreshed: e }) => e),
                C(g, t)
              )(1, ([, e]) => {
                m(i) && E(!1 !== e);
              }),
              I(1, () => {
                E(!1 !== m(g));
              }),
              G(H(g), o)(1, ([e, t]) => {
                !1 === e ||
                  t.atBottom ||
                  "VIEWPORT_HEIGHT_DECREASING" !== t.notAtBottomBecause ||
                  R("auto");
              }));
            let q = A(null),
              F = k();
            return (
              h(
                N(
                  x(
                    H(n),
                    y((e) => e?.length ?? 0)
                  ),
                  x(H(t))
                ),
                F
              ),
              x(
                G(x(F, S(1)), l),
                C(H(q), i, d, p),
                y(
                  ([[e, t], r, n, o, s]) =>
                    t && n && r?.({ context: s, totalCount: e, scrollingInProgress: o })
                ),
                w((e) => !!e),
                P(0)
              )(1, (t) => {
                (null !== b && (b(), (b = null)),
                  void 0 !== m(r)
                    ? requestAnimationFrame(() => {
                        (m(c)("scrolling into view", {}), f(0, t));
                      })
                    : (b = v(e, () => {
                        (m(c)("scrolling into view", {}), f(0, t), (b = null));
                      })));
              }),
              { autoscrollToBottom: I, followOutput: g, scrollIntoViewOnChange: q }
            );
          },
          d(eb, eH, eA, eE, eS, U, D, eK, eX)
        ),
        eJ = q(
          ([
            { data: e, firstItemIndex: t, gap: r, sizes: n },
            { initialTopMostItemIndex: o },
            { initialItemCount: s, listState: a },
            { didMount: i }
          ]) => (
            h(
              x(
                i,
                C(s),
                w(([, e]) => 0 !== e),
                C(o, n, t, r, e),
                y(([[, e], t, r, n, o, s = []]) => eB(e, t, r, n, o, s))
              ),
              a
            ),
            {}
          ),
          d(eb, eE, ej, eS),
          { singleton: !0 }
        ),
        e0 = q(
          ([{ didMount: e }, { scrollTo: t }, { listState: r }]) => {
            let n = A(0);
            return (
              x(
                e,
                C(n),
                w(([, e]) => 0 !== e),
                y(([, e]) => ({ top: e }))
              )(1, (e) => {
                v(
                  x(
                    r,
                    S(1),
                    w((e) => e.items.length > 1)
                  ),
                  () => {
                    requestAnimationFrame(() => {
                      t(0, e);
                    });
                  }
                );
              }),
              { initialScrollTop: n }
            );
          },
          d(eS, D, ej),
          { singleton: !0 }
        ),
        e1 = q(
          ([{ scrollVelocity: e }]) => {
            let t = A(!1),
              r = k(),
              n = A(!1);
            return (
              h(
                x(
                  e,
                  C(n, t, r),
                  w(([e, t]) => !1 !== t && void 0 !== t),
                  y(([e, t, r, n]) => {
                    let { enter: o, exit: s } = t;
                    if (r) {
                      if (s(e, n)) return !1;
                    } else if (o(e, n)) return !0;
                    return r;
                  }),
                  I()
                ),
                t
              ),
              x(G(t, e, r), C(n))(1, ([[e, t, r], n]) => {
                e && !1 !== n && void 0 !== n && n.change && n.change(t, r);
              }),
              {
                isSeeking: t,
                scrollSeekConfiguration: n,
                scrollSeekRangeChanged: r,
                scrollVelocity: e
              }
            );
          },
          d(eH),
          { singleton: !0 }
        ),
        e2 = q(([{ scrollContainerState: e, scrollTo: t }]) => {
          let r = k(),
            n = k(),
            o = k(),
            s = A(!1),
            a = A(void 0);
          return (
            h(
              x(
                G(r, n),
                y(([{ scrollTop: e, viewportHeight: t }, { offsetTop: r, listHeight: n }]) => ({
                  scrollHeight: n,
                  scrollTop: Math.max(0, e - r),
                  viewportHeight: t
                }))
              ),
              e
            ),
            h(
              x(
                t,
                C(n),
                y(([e, { offsetTop: t }]) => ({ ...e, top: e.top + t }))
              ),
              o
            ),
            {
              customScrollParent: a,
              useWindowScroll: s,
              windowScrollContainerState: r,
              windowScrollTo: o,
              windowViewportRect: n
            }
          );
        }, d(D)),
        e4 = q(
          ([
            { sizeRanges: e, sizes: t },
            { headerHeight: r, scrollTop: n },
            { initialTopMostItemIndex: o },
            { didMount: s },
            { useWindowScroll: a, windowScrollContainerState: i, windowViewportRect: u }
          ]) => {
            let c = k(),
              d = A(void 0),
              p = A(null),
              m = A(null);
            return (
              h(i, p),
              h(u, m),
              x(c, C(t, n, a, p, m, r))(1, ([e, t, r, n, o, s, a]) => {
                let i = Z(t.sizeTree).map(({ k: e, v: t }, r, n) => {
                  let o = n[r + 1];
                  return { endIndex: void 0 !== o ? o.k - 1 : 1 / 0, size: t, startIndex: e };
                });
                (n && null !== o && null !== s && (r = o.scrollTop - s.offsetTop),
                  e({ ranges: i, scrollTop: (r -= a) }));
              }),
              h(x(d, w(l), y(e5)), o),
              h(
                x(
                  s,
                  C(d),
                  w(([, e]) => void 0 !== e),
                  I(),
                  y(([, e]) => e.ranges)
                ),
                e
              ),
              { getState: c, restoreStateFrom: d }
            );
          },
          d(eb, D, eE, eS, e2)
        );
      function e5(e) {
        return { align: "start", index: 0, offset: e.scrollTop };
      }
      let e3 = q(([{ topItemsIndexes: e }]) => {
        let t = A(0);
        return (
          h(
            x(
              t,
              w((e) => e >= 0),
              y((e) => Array.from({ length: e }).map((e, t) => t))
            ),
            e
          ),
          { topItemCount: t }
        );
      }, d(ej));
      function e6(e) {
        let t = !1,
          r;
        return () => (t || ((t = !0), (r = e())), r);
      }
      let e7 = e6(
          () => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)
        ),
        e8 = q(
          ([
            { deviation: e, scrollBy: t, scrollingInProgress: r, scrollTop: n },
            { isAtBottom: o, isScrolling: s, lastJumpDueToItemResize: a, scrollDirection: i },
            { listState: l },
            { beforeUnshiftWith: u, gap: c, shiftWithOffset: d, sizes: p },
            { log: m },
            { recalcInProgress: v }
          ]) => {
            let f = E(
              x(
                l,
                C(a),
                T(
                  ([, e, t, r], [{ bottom: n, items: o, offsetBottom: s, totalCount: a }, i]) => {
                    let l = n + s,
                      u = 0;
                    return (
                      t === a &&
                        e.length > 0 &&
                        o.length > 0 &&
                        ((0 === o[0].originalIndex && 0 === e[0].originalIndex) ||
                          (0 != (u = l - r) && (u += i))),
                      [u, o, a, l]
                    );
                  },
                  [0, [], 0, 0]
                ),
                w(([e]) => 0 !== e),
                C(n, i, r, o, m, v),
                w(([, e, t, r, , , n]) => !n && !r && 0 !== e && "up" === t),
                y(
                  ([[e], , , , , t]) => (
                    t("Upward scrolling compensation", { amount: e }, M.DEBUG),
                    e
                  )
                )
              )
            );
            function g(r) {
              r > 0
                ? (t(0, { behavior: "auto", top: -r }), e(0, 0))
                : (e(0, 0), t(0, { behavior: "auto", top: -r }));
            }
            return (
              x(f, C(e, s))(1, ([t, r, n]) => {
                n && e7() ? e(0, r - t) : g(-t);
              }),
              x(
                G(R(s, !1), e, v),
                w(([e, t, r]) => !e && !r && 0 !== t),
                y(([e, t]) => t),
                P(1)
              )(1, g),
              h(
                x(
                  d,
                  y((e) => ({ top: -e }))
                ),
                t
              ),
              x(
                u,
                C(p, c),
                y(([e, { groupIndices: t, lastSize: r, sizeTree: n }, o]) => {
                  if (0 === t.length) return e * (r + o);
                  let s = 0,
                    a = K(n, 0),
                    i = 0,
                    l = 0;
                  for (; i < e;) {
                    (i++, (s += a));
                    let n = t.length === l + 1 ? 1 / 0 : t[l + 1] - t[l] - 1;
                    (i + n > e && ((s -= a), (n = e - i + 1)), (i += n), (s += n * (r + o)), l++);
                  }
                  return s;
                })
              )(1, (r) => {
                (e(0, r),
                  requestAnimationFrame(() => {
                    (t(0, { top: r }),
                      requestAnimationFrame(() => {
                        (e(0, 0), v(0, !1));
                      }));
                  }));
              }),
              { deviation: e }
            );
          },
          d(D, eH, ej, eb, U, ei)
        ),
        e9 = q(
          ([e, t, r, n, o, s, a, i, l, u, c]) => ({
            ...e,
            ...t,
            ...r,
            ...n,
            ...o,
            ...s,
            ...a,
            ...i,
            ...l,
            ...u,
            ...c
          }),
          d(ez, eJ, eS, e1, eQ, e0, eW, e2, eX, U, eK)
        ),
        te = q(
          ([
            {
              data: e,
              defaultItemSize: t,
              firstItemIndex: r,
              fixedItemSize: n,
              fixedGroupSize: o,
              gap: s,
              groupIndices: a,
              heightEstimates: i,
              itemSize: l,
              sizeRanges: u,
              sizes: c,
              statefulTotalCount: d,
              totalCount: p,
              trackItemSizes: m
            },
            {
              initialItemFinalLocationReached: v,
              initialTopMostItemIndex: f,
              scrolledToInitialItem: g
            },
            I,
            w,
            b,
            T,
            { scrollToIndex: S },
            P,
            { topItemCount: C },
            { groupCounts: A },
            R
          ]) => {
            let {
              listState: k,
              minOverscanItemCount: E,
              topItemsIndexes: q,
              rangeChanged: F,
              ...G
            } = T;
            return (
              h(F, R.scrollSeekRangeChanged),
              h(
                x(
                  R.windowViewportRect,
                  y((e) => e.visibleHeight)
                ),
                I.viewportHeight
              ),
              {
                data: e,
                defaultItemHeight: t,
                firstItemIndex: r,
                fixedItemHeight: n,
                fixedGroupHeight: o,
                gap: s,
                groupCounts: A,
                heightEstimates: i,
                initialItemFinalLocationReached: v,
                initialTopMostItemIndex: f,
                scrolledToInitialItem: g,
                sizeRanges: u,
                topItemCount: C,
                topItemsIndexes: q,
                totalCount: p,
                ...b,
                groupIndices: a,
                itemSize: l,
                listState: k,
                minOverscanItemCount: E,
                scrollToIndex: S,
                statefulTotalCount: d,
                trackItemSizes: m,
                rangeChanged: F,
                ...G,
                ...R,
                ...I,
                sizes: c,
                ...w
              }
            );
          },
          d(eb, eE, D, e4, eZ, ej, eA, e8, e3, eT, e9)
        ),
        tt = "u" > typeof document ? o.useLayoutEffect : o.useEffect;
      function tr(e, t, r) {
        let s = Object.keys(t.required || {}),
          a = Object.keys(t.optional || {}),
          i = Object.keys(t.methods || {}),
          l = Object.keys(t.events || {}),
          c = o.createContext({});
        function d(e, r) {
          for (let n of (void 0 !== e.propsReady && (0, e.propsReady)(0, !1), s))
            (0, e[t.required[n]])(0, r[n]);
          for (let n of a) n in r && (0, e[t.optional[n]])(0, r[n]);
          void 0 !== e.propsReady && (0, e.propsReady)(0, !0);
        }
        function h(e) {
          return l.reduce(
            (r, n) => (
              (r[n] = (function (e) {
                let t,
                  r,
                  n = () => t?.();
                return function (o, s) {
                  switch (o) {
                    case 1:
                      return s ? (r === s ? void 0 : (n(), (r = s), (t = e(1, s)))) : (n(), u);
                    case 2:
                      (n(), (r = null));
                      return;
                  }
                };
              })(e[t.events[n]])),
              r
            ),
            {}
          );
        }
        return {
          Component: o.forwardRef(function (u, m) {
            var v;
            let { children: f, ...g } = u,
              [I] = o.useState(() => {
                var t;
                return (
                  d(
                    (t = (function (e) {
                      let t = new Map(),
                        r = ({ constructor: e, dependencies: n, id: o, singleton: s }) => {
                          if (s && t.has(o)) return t.get(o);
                          let a = e(n.map((e) => r(e)));
                          return (s && t.set(o, a), a);
                        };
                      return r(e);
                    })(e)),
                    g
                  ),
                  t
                );
              }),
              [w] = o.useState(() => h(I));
            return (
              tt(() => {
                for (let e of l) e in g && (0, w[e])(1, g[e]);
                return () => {
                  Object.values(w).map(p);
                };
              }, [g, w, I]),
              tt(() => {
                d(I, g);
              }),
              o.useImperativeHandle(
                m,
                ((v = i.reduce(
                  (e, r) => (
                    (e[r] = (e) => {
                      (0, I[t.methods[r]])(0, e);
                    }),
                    e
                  ),
                  {}
                )),
                () => v)
              ),
              (0, n.jsx)(c.Provider, {
                value: I,
                children:
                  void 0 !== r
                    ? (0, n.jsx)(r, {
                        ...(function (e, t) {
                          let r = {},
                            n = {},
                            o = 0,
                            s = e.length;
                          for (; o < s;) ((n[e[o]] = 1), (o += 1));
                          for (let e in t) Object.hasOwn(n, e) || (r[e] = t[e]);
                          return r;
                        })([...s, ...a, ...l], g),
                        children: f
                      })
                    : f
              })
            );
          }),
          useEmitter: (e, t) => {
            let r = o.useContext(c)[e];
            tt(() => r(1, t), [t, r]);
          },
          useEmitterValue:
            parseInt(o.version) >= 18
              ? (e) => {
                  let t = o.useContext(c)[e],
                    r = o.useCallback((e) => t(1, e), [t]);
                  return o.useSyncExternalStore(
                    r,
                    () => m(t),
                    () => m(t)
                  );
                }
              : (e) => {
                  let t = o.useContext(c)[e],
                    [r, n] = o.useState(() => m(t));
                  return (
                    tt(
                      () =>
                        t(1, (e) => {
                          e !== r && n(() => e);
                        }),
                      [t, r]
                    ),
                    r
                  );
                },
          usePublisher: (e) => {
            let t = o.useContext(c);
            return o.useCallback(
              (r) => {
                (0, t[e])(0, r);
              },
              [t, e]
            );
          }
        };
      }
      let tn = o.createContext(void 0),
        to = o.createContext(void 0),
        ts = "-webkit-sticky",
        ta = "sticky",
        ti = e6(() => {
          if (typeof document > "u") return ta;
          let e = document.createElement("div");
          return ((e.style.position = ts), e.style.position === ts ? ts : ta);
        }),
        tl = "u" > typeof document ? o.useLayoutEffect : o.useEffect;
      function tu(e) {
        return "self" in e;
      }
      function tc(e, t, r, n = u, a, i) {
        let l = o.useRef(null),
          c = o.useRef(null),
          d = o.useRef(null),
          p = o.useCallback(
            (r) => {
              let n,
                o,
                a,
                l = r.target;
              if ("body" in l || tu(l)) {
                let e = tu(l) ? l : l.defaultView;
                ((a = !0 === i ? e.scrollX : e.scrollY),
                  (n =
                    !0 === i
                      ? e.document.documentElement.scrollWidth
                      : e.document.documentElement.scrollHeight),
                  (o = !0 === i ? e.innerWidth : e.innerHeight));
              } else
                ((a = !0 === i ? l.scrollLeft : l.scrollTop),
                  (n = !0 === i ? l.scrollWidth : l.scrollHeight),
                  (o = !0 === i ? l.offsetWidth : l.offsetHeight));
              let u = () => {
                e({ scrollHeight: n, scrollTop: Math.max(a, 0), viewportHeight: o });
              };
              (!0 === r.suppressFlushSync ? u() : s.flushSync(u),
                null !== c.current &&
                  (a === c.current || a <= 0 || a === n - o) &&
                  ((c.current = null),
                  t(!0),
                  d.current && (clearTimeout(d.current), (d.current = null))));
            },
            [e, t, i]
          );
        return (
          o.useEffect(() => {
            let e = a || l.current;
            return (
              n(a || l.current),
              p({ suppressFlushSync: !0, target: e }),
              e.addEventListener("scroll", p, { passive: !0 }),
              () => {
                (n(null), e.removeEventListener("scroll", p));
              }
            );
          }, [l, p, r, n, a]),
          {
            scrollByCallback: function (e) {
              (!0 === i &&
                (e = {
                  ...(void 0 !== e.behavior ? { behavior: e.behavior } : {}),
                  ...(void 0 !== e.top ? { left: e.top } : {})
                }),
                l.current.scrollBy(e));
            },
            scrollerRef: l,
            scrollToCallback: function (r) {
              let n,
                o,
                s,
                a = l.current;
              if (
                !a ||
                (!0 === i
                  ? "offsetWidth" in a && 0 === a.offsetWidth
                  : "offsetHeight" in a && 0 === a.offsetHeight)
              )
                return;
              let u = "smooth" === r.behavior;
              tu(a)
                ? ((o = Math.max(
                    eu(a.document.documentElement, !0 === i ? "width" : "height"),
                    !0 === i
                      ? a.document.documentElement.scrollWidth
                      : a.document.documentElement.scrollHeight
                  )),
                  (n = !0 === i ? a.innerWidth : a.innerHeight),
                  (s = !0 === i ? window.scrollX : window.scrollY))
                : ((o = a[!0 === i ? "scrollWidth" : "scrollHeight"]),
                  (n = eu(a, !0 === i ? "width" : "height")),
                  (s = a[!0 === i ? "scrollLeft" : "scrollTop"]));
              let p = o - n;
              if (((r.top = Math.ceil(Math.max(Math.min(p, r.top), 0))), eq(n, o) || r.top === s)) {
                (e({ scrollHeight: o, scrollTop: s, viewportHeight: n }), u && t(!0));
                return;
              }
              (u
                ? ((c.current = r.top),
                  d.current && clearTimeout(d.current),
                  (d.current = setTimeout(() => {
                    ((d.current = null), (c.current = null), t(!0));
                  }, 1e3)))
                : (c.current = null),
                !0 === i &&
                  (r = { ...(void 0 !== r.behavior ? { behavior: r.behavior } : {}), left: r.top }),
                a.scrollTo(r));
            }
          }
        );
      }
      function td(e) {
        return e;
      }
      let tp = q(() => {
          let e = A((e) => `Item ${e}`),
            t = A((e) => `Group ${e}`),
            r = A({}),
            n = A(td),
            o = A("div"),
            s = A(u),
            a = (e, t = null) =>
              R(
                x(
                  r,
                  y((t) => t[e]),
                  I()
                ),
                t
              );
          return {
            components: r,
            computeItemKey: n,
            EmptyPlaceholder: a("EmptyPlaceholder"),
            FooterComponent: a("Footer"),
            GroupComponent: a("Group", "div"),
            groupContent: t,
            HeaderComponent: a("Header"),
            HeaderFooterTag: o,
            ItemComponent: a("Item", "div"),
            itemContent: e,
            ListComponent: a("List", "div"),
            ScrollerComponent: a("Scroller", "div"),
            scrollerRef: s,
            ScrollSeekPlaceholder: a("ScrollSeekPlaceholder"),
            TopItemListComponent: a("TopItemList")
          };
        }),
        tm = q(([e, t]) => ({ ...e, ...t }), d(te, tp)),
        th = ({ height: e }) => (0, n.jsx)("div", { style: { height: e } }),
        tv = { overflowAnchor: "none", position: ti(), zIndex: 1 },
        tf = { overflowAnchor: "none" },
        tg = { ...tf, display: "inline-block", height: "100%" },
        tI = o.memo(function ({ showTopList: e = !1 }) {
          let t = tN("listState"),
            r = tM("sizeRanges"),
            s = tN("useWindowScroll"),
            a = tN("customScrollParent"),
            i = tM("windowScrollContainerState"),
            l = tM("scrollContainerState"),
            c = tN("itemContent"),
            d = tN("context"),
            p = tN("groupContent"),
            m = tN("trackItemSizes"),
            h = tN("itemSize"),
            v = tN("log"),
            f = tM("gap"),
            g = tN("horizontalDirection"),
            { callbackRef: I } = _(
              r,
              h,
              m,
              e ? u : a || s ? i : l,
              v,
              f,
              a,
              g,
              tN("skipAnimationFrameInResizeObserver")
            ),
            [w, y] = o.useState(0);
          tH("deviation", (e) => {
            w !== e && y(e);
          });
          let b = tN("EmptyPlaceholder"),
            x = tN("ScrollSeekPlaceholder") ?? th,
            T = tN("ListComponent"),
            S = tN("ItemComponent"),
            P = tN("GroupComponent"),
            C = tN("computeItemKey"),
            A = tN("isSeeking"),
            R = tN("groupIndices").length > 0,
            k = tN("alignToBottom"),
            E = tN("initialItemFinalLocationReached"),
            q = e
              ? {}
              : {
                  boxSizing: "border-box",
                  ...(g
                    ? {
                        display: "inline-block",
                        height: "100%",
                        marginLeft: 0 !== w ? w : k ? "auto" : 0,
                        paddingLeft: t.offsetTop,
                        paddingRight: t.offsetBottom,
                        whiteSpace: "nowrap"
                      }
                    : {
                        marginTop: 0 !== w ? w : k ? "auto" : 0,
                        paddingBottom: t.offsetBottom,
                        paddingTop: t.offsetTop
                      }),
                  ...(E ? {} : { visibility: "hidden" })
                };
          return e || 0 !== t.totalCount || null == b
            ? (0, n.jsx)(T, {
                ...tS(T, d),
                "data-testid": e ? "virtuoso-top-item-list" : "virtuoso-item-list",
                ref: I,
                style: q,
                children: (e ? t.topItems : t.items).map((e) => {
                  let r = e.originalIndex,
                    n = C(r + t.firstItemIndex, e.data, d);
                  return A
                    ? (0, o.createElement)(x, {
                        ...tS(x, d),
                        height: e.size,
                        index: e.index,
                        key: n,
                        type: e.type || "item",
                        ...("group" === e.type ? {} : { groupIndex: e.groupIndex })
                      })
                    : "group" === e.type
                      ? (0, o.createElement)(
                          P,
                          {
                            ...tS(P, d),
                            "data-index": r,
                            "data-item-index": e.index,
                            "data-known-size": e.size,
                            key: n,
                            style: tv
                          },
                          p(e.index, d)
                        )
                      : (0, o.createElement)(
                          S,
                          {
                            ...tS(S, d),
                            ...tP(S, e.data),
                            "data-index": r,
                            "data-item-group-index": e.groupIndex,
                            "data-item-index": e.index,
                            "data-known-size": e.size,
                            key: n,
                            style: g ? tg : tf
                          },
                          R ? c(e.index, e.groupIndex, e.data, d) : c(e.index, e.data, d)
                        );
                })
              })
            : (0, n.jsx)(b, { ...tS(b, d) });
        }),
        tw = {
          height: "100%",
          outline: "none",
          overflowY: "auto",
          position: "relative",
          WebkitOverflowScrolling: "touch"
        },
        ty = { outline: "none", overflowX: "auto", position: "relative" },
        tb = (e) => ({
          height: "100%",
          position: "absolute",
          top: 0,
          width: "100%",
          ...(e ? { display: "flex", flexDirection: "column" } : void 0)
        }),
        tx = (e, t, r = 0) => ({
          ...tb(e),
          position: t ? "relative" : "absolute",
          top: t ? -r : 0
        }),
        tT = { position: ti(), top: 0, width: "100%", zIndex: 1 };
      function tS(e, t) {
        if ("string" != typeof e) return { context: t };
      }
      function tP(e, t) {
        return { item: "string" == typeof e ? void 0 : t };
      }
      let tC = o.memo(function () {
          let e = tN("HeaderComponent"),
            t = tM("headerHeight"),
            r = tN("HeaderFooterTag"),
            s = z(
              o.useMemo(
                () => (e) => {
                  t(eu(e, "height"));
                },
                [t]
              ),
              !0,
              tN("skipAnimationFrameInResizeObserver")
            ),
            a = tN("context");
          return null != e
            ? (0, n.jsx)(r, { ref: s, children: (0, n.jsx)(e, { ...tS(e, a) }) })
            : null;
        }),
        tA = o.memo(function () {
          let e = tN("FooterComponent"),
            t = tM("footerHeight"),
            r = tN("HeaderFooterTag"),
            s = z(
              o.useMemo(
                () => (e) => {
                  t(eu(e, "height"));
                },
                [t]
              ),
              !0,
              tN("skipAnimationFrameInResizeObserver")
            ),
            a = tN("context");
          return null != e
            ? (0, n.jsx)(r, { ref: s, children: (0, n.jsx)(e, { ...tS(e, a) }) })
            : null;
        });
      function tR({ useEmitter: e, useEmitterValue: t, usePublisher: r }) {
        return o.memo(function ({ children: o, style: s, context: a, ...i }) {
          let l = r("scrollContainerState"),
            u = t("ScrollerComponent"),
            c = r("smoothScrollTargetReached"),
            d = t("scrollerRef"),
            p = t("horizontalDirection") || !1,
            {
              scrollByCallback: m,
              scrollerRef: h,
              scrollToCallback: v
            } = tc(l, c, u, d, void 0, p);
          return (
            e("scrollTo", v),
            e("scrollBy", m),
            (0, n.jsx)(u, {
              "data-testid": "virtuoso-scroller",
              "data-virtuoso-scroller": !0,
              ref: h,
              style: { ...(p ? ty : tw), ...s },
              tabIndex: 0,
              ...i,
              ...tS(u, a),
              children: o
            })
          );
        });
      }
      function tk({ useEmitter: e, useEmitterValue: t, usePublisher: r }) {
        return o.memo(function ({ children: s, style: a, context: i, ...l }) {
          let u = r("windowScrollContainerState"),
            c = t("ScrollerComponent"),
            d = r("smoothScrollTargetReached"),
            p = t("totalListHeight"),
            m = t("deviation"),
            h = t("customScrollParent"),
            v = o.useRef(null),
            {
              scrollByCallback: f,
              scrollerRef: g,
              scrollToCallback: I
            } = tc(u, d, c, t("scrollerRef"), h);
          return (
            tl(
              () => (
                (g.current = h || v.current?.ownerDocument.defaultView),
                () => {
                  g.current = null;
                }
              ),
              [g, h]
            ),
            e("windowScrollTo", I),
            e("scrollBy", f),
            (0, n.jsx)(c, {
              ref: v,
              "data-virtuoso-scroller": !0,
              style: { position: "relative", ...a, ...(0 !== p ? { height: p + m } : void 0) },
              ...l,
              ...tS(c, i),
              children: s
            })
          );
        });
      }
      let tE = ({ children: e }) => {
          let t = o.useContext(tn),
            r = tM("viewportHeight"),
            s = tM("fixedItemHeight"),
            a = tN("alignToBottom"),
            l = tN("horizontalDirection"),
            u = z(
              o.useMemo(() => i(r, (e) => eu(e, l ? "width" : "height")), [r, l]),
              !0,
              tN("skipAnimationFrameInResizeObserver")
            );
          return (
            o.useEffect(() => {
              t && (r(t.viewportHeight), s(t.itemHeight));
            }, [t, r, s]),
            (0, n.jsx)("div", {
              "data-viewport-type": "element",
              ref: u,
              style: tb(a),
              children: e
            })
          );
        },
        tq = ({ children: e }) => {
          let t = o.useContext(tn),
            r = tM("windowViewportRect"),
            s = tM("fixedItemHeight"),
            a = tN("customScrollParent"),
            i = tN("useWindowScroll"),
            l = tN("topListHeight"),
            u = V(r, a, tN("skipAnimationFrameInResizeObserver")),
            c = tN("alignToBottom");
          return (
            o.useEffect(() => {
              t &&
                (s(t.itemHeight),
                r({
                  listHeight: 0,
                  offsetTop: 0,
                  visibleHeight: t.viewportHeight,
                  visibleWidth: 100
                }));
            }, [t, r, s]),
            (0, n.jsx)("div", {
              "data-viewport-type": "window",
              ref: u,
              style: tx(c, i, l),
              children: e
            })
          );
        },
        tF = ({ children: e }) => {
          let t = tN("TopItemListComponent") ?? "div",
            r = tN("headerHeight"),
            o = { ...tT, marginTop: `${r}px` },
            s = tN("context");
          return (0, n.jsx)(t, { style: o, ...tS(t, s), children: e });
        },
        {
          Component: tG,
          useEmitter: tH,
          useEmitterValue: tN,
          usePublisher: tM
        } = tr(
          tm,
          {
            optional: {
              restoreStateFrom: "restoreStateFrom",
              context: "context",
              followOutput: "followOutput",
              scrollIntoViewOnChange: "scrollIntoViewOnChange",
              itemContent: "itemContent",
              groupContent: "groupContent",
              overscan: "overscan",
              increaseViewportBy: "increaseViewportBy",
              minOverscanItemCount: "minOverscanItemCount",
              totalCount: "totalCount",
              groupCounts: "groupCounts",
              topItemCount: "topItemCount",
              firstItemIndex: "firstItemIndex",
              initialTopMostItemIndex: "initialTopMostItemIndex",
              components: "components",
              atBottomThreshold: "atBottomThreshold",
              atTopThreshold: "atTopThreshold",
              computeItemKey: "computeItemKey",
              defaultItemHeight: "defaultItemHeight",
              fixedGroupHeight: "fixedGroupHeight",
              fixedItemHeight: "fixedItemHeight",
              heightEstimates: "heightEstimates",
              itemSize: "itemSize",
              scrollSeekConfiguration: "scrollSeekConfiguration",
              headerFooterTag: "HeaderFooterTag",
              data: "data",
              initialItemCount: "initialItemCount",
              initialScrollTop: "initialScrollTop",
              alignToBottom: "alignToBottom",
              useWindowScroll: "useWindowScroll",
              customScrollParent: "customScrollParent",
              scrollerRef: "scrollerRef",
              logLevel: "logLevel",
              horizontalDirection: "horizontalDirection",
              skipAnimationFrameInResizeObserver: "skipAnimationFrameInResizeObserver"
            },
            methods: {
              scrollToIndex: "scrollToIndex",
              scrollIntoView: "scrollIntoView",
              scrollTo: "scrollTo",
              scrollBy: "scrollBy",
              autoscrollToBottom: "autoscrollToBottom",
              getState: "getState"
            },
            events: {
              isScrolling: "isScrolling",
              endReached: "endReached",
              startReached: "startReached",
              rangeChanged: "rangeChanged",
              atBottomStateChange: "atBottomStateChange",
              atTopStateChange: "atTopStateChange",
              totalListHeightChanged: "totalListHeightChanged",
              itemsRendered: "itemsRendered",
              groupIndices: "groupIndices"
            }
          },
          o.memo(function (e) {
            let t = tN("useWindowScroll"),
              r = tN("topItemsIndexes").length > 0,
              o = tN("customScrollParent"),
              s = tN("context");
            return (0, n.jsxs)(o || t ? tU : tO, {
              ...e,
              context: s,
              children: [
                r && (0, n.jsx)(tF, { children: (0, n.jsx)(tI, { showTopList: !0 }) }),
                (0, n.jsxs)(o || t ? tq : tE, {
                  children: [(0, n.jsx)(tC, {}), (0, n.jsx)(tI, {}), (0, n.jsx)(tA, {})]
                })
              ]
            });
          })
        ),
        tO = tR({ useEmitter: tH, useEmitterValue: tN, usePublisher: tM }),
        tU = tk({ useEmitter: tH, useEmitterValue: tN, usePublisher: tM }),
        tz = tG,
        tL = q(() => {
          let e = A((e) => (0, n.jsxs)("td", { children: ["Item $", e] })),
            t = A(null),
            r = A((e) => (0, n.jsxs)("td", { colSpan: 1e3, children: ["Group ", e] })),
            o = A(null),
            s = A(null),
            a = A({}),
            i = A(td),
            l = A(u),
            c = (e, t = null) =>
              R(
                x(
                  a,
                  y((t) => t[e]),
                  I()
                ),
                t
              );
          return {
            components: a,
            computeItemKey: i,
            context: t,
            EmptyPlaceholder: c("EmptyPlaceholder"),
            FillerRow: c("FillerRow"),
            fixedFooterContent: s,
            fixedHeaderContent: o,
            itemContent: e,
            groupContent: r,
            ScrollerComponent: c("Scroller", "div"),
            scrollerRef: l,
            ScrollSeekPlaceholder: c("ScrollSeekPlaceholder"),
            TableBodyComponent: c("TableBody", "tbody"),
            TableComponent: c("Table", "table"),
            TableFooterComponent: c("TableFoot", "tfoot"),
            TableHeadComponent: c("TableHead", "thead"),
            TableRowComponent: c("TableRow", "tr"),
            GroupComponent: c("Group", "tr")
          };
        }),
        t_ = q(([e, t]) => ({ ...e, ...t }), d(te, tL)),
        tB = ({ height: e }) =>
          (0, n.jsx)("tr", { children: (0, n.jsx)("td", { style: { height: e } }) }),
        tV = ({ height: e }) =>
          (0, n.jsx)("tr", {
            children: (0, n.jsx)("td", { style: { border: 0, height: e, padding: 0 } })
          }),
        tD = { overflowAnchor: "none" },
        tj = { position: ti(), zIndex: 2, overflowAnchor: "none" },
        tQ = o.memo(function ({ showTopList: e = !1 }) {
          let t = t$("listState"),
            r = t$("computeItemKey"),
            n = t$("firstItemIndex"),
            s = t$("context"),
            a = t$("isSeeking"),
            i = t$("fixedHeaderHeight"),
            l = t$("groupIndices").length > 0,
            u = t$("itemContent"),
            c = t$("groupContent"),
            d = t$("ScrollSeekPlaceholder") ?? tB,
            p = t$("GroupComponent"),
            m = t$("TableRowComponent"),
            h = (e ? t.topItems : []).reduce(
              (e, t, r) => (0 === r ? e.push(t.size) : e.push(e[r - 1] + t.size), e),
              []
            );
          return (e ? t.topItems : t.items).map((t) => {
            let v = t.originalIndex,
              f = r(v + n, t.data, s),
              g = e ? (0 === v ? 0 : h[v - 1]) : 0;
            return a
              ? (0, o.createElement)(d, {
                  ...tS(d, s),
                  height: t.size,
                  index: t.index,
                  key: f,
                  type: t.type || "item"
                })
              : "group" === t.type
                ? (0, o.createElement)(
                    p,
                    {
                      ...tS(p, s),
                      "data-index": v,
                      "data-item-index": t.index,
                      "data-known-size": t.size,
                      key: f,
                      style: { ...tj, top: i }
                    },
                    c(t.index, s)
                  )
                : (0, o.createElement)(
                    m,
                    {
                      ...tS(m, s),
                      ...tP(m, t.data),
                      "data-index": v,
                      "data-item-index": t.index,
                      "data-known-size": t.size,
                      "data-item-group-index": t.groupIndex,
                      key: f,
                      style: e ? { ...tj, top: i + g } : tD
                    },
                    l ? u(t.index, t.groupIndex, t.data, s) : u(t.index, t.data, s)
                  );
          });
        }),
        tW = o.memo(function () {
          let e = t$("listState"),
            t = t$("topItemsIndexes").length > 0,
            r = tZ("sizeRanges"),
            s = t$("useWindowScroll"),
            a = t$("customScrollParent"),
            i = tZ("windowScrollContainerState"),
            l = tZ("scrollContainerState"),
            u = t$("trackItemSizes"),
            { callbackRef: c, ref: d } = _(
              r,
              t$("itemSize"),
              u,
              a || s ? i : l,
              t$("log"),
              void 0,
              a,
              !1,
              t$("skipAnimationFrameInResizeObserver")
            ),
            [p, m] = o.useState(0);
          tX("deviation", (e) => {
            p !== e && ((d.current.style.marginTop = `${e}px`), m(e));
          });
          let h = t$("EmptyPlaceholder"),
            v = t$("FillerRow") ?? tV,
            f = t$("TableBodyComponent"),
            g = t$("paddingTopAddition"),
            I = t$("statefulTotalCount"),
            w = t$("context");
          if (0 === I && null != h) return (0, n.jsx)(h, { ...tS(h, w) });
          let y = (t ? e.topItems : []).reduce((e, t) => e + t.size, 0),
            b = e.offsetTop + g + p - y,
            x = e.offsetBottom,
            T = b > 0 ? (0, n.jsx)(v, { context: w, height: b }, "padding-top") : null,
            S = x > 0 ? (0, n.jsx)(v, { context: w, height: x }, "padding-bottom") : null;
          return (0, n.jsxs)(f, {
            "data-testid": "virtuoso-item-list",
            ref: c,
            ...tS(f, w),
            children: [T, t && (0, n.jsx)(tQ, { showTopList: !0 }), (0, n.jsx)(tQ, {}), S]
          });
        }),
        tK = ({ children: e }) => {
          let t = o.useContext(tn),
            r = tZ("viewportHeight"),
            s = tZ("fixedItemHeight"),
            a = z(
              o.useMemo(() => i(r, (e) => eu(e, "height")), [r]),
              !0,
              t$("skipAnimationFrameInResizeObserver")
            );
          return (
            o.useEffect(() => {
              t && (r(t.viewportHeight), s(t.itemHeight));
            }, [t, r, s]),
            (0, n.jsx)("div", {
              "data-viewport-type": "element",
              ref: a,
              style: tb(!1),
              children: e
            })
          );
        },
        tY = ({ children: e }) => {
          let t = o.useContext(tn),
            r = tZ("windowViewportRect"),
            s = tZ("fixedItemHeight"),
            a = t$("customScrollParent"),
            i = t$("useWindowScroll"),
            l = V(r, a, t$("skipAnimationFrameInResizeObserver"));
          return (
            o.useEffect(() => {
              t &&
                (s(t.itemHeight),
                r({
                  listHeight: 0,
                  offsetTop: 0,
                  visibleHeight: t.viewportHeight,
                  visibleWidth: 100
                }));
            }, [t, r, s]),
            (0, n.jsx)("div", {
              "data-viewport-type": "window",
              ref: l,
              style: tx(!1, i),
              children: e
            })
          );
        },
        {
          useEmitter: tX,
          useEmitterValue: t$,
          usePublisher: tZ
        } = tr(
          t_,
          {
            optional: {
              restoreStateFrom: "restoreStateFrom",
              context: "context",
              followOutput: "followOutput",
              firstItemIndex: "firstItemIndex",
              itemContent: "itemContent",
              groupContent: "groupContent",
              fixedHeaderContent: "fixedHeaderContent",
              fixedFooterContent: "fixedFooterContent",
              overscan: "overscan",
              increaseViewportBy: "increaseViewportBy",
              minOverscanItemCount: "minOverscanItemCount",
              totalCount: "totalCount",
              topItemCount: "topItemCount",
              initialTopMostItemIndex: "initialTopMostItemIndex",
              components: "components",
              groupCounts: "groupCounts",
              atBottomThreshold: "atBottomThreshold",
              atTopThreshold: "atTopThreshold",
              computeItemKey: "computeItemKey",
              defaultItemHeight: "defaultItemHeight",
              fixedGroupHeight: "fixedGroupHeight",
              fixedItemHeight: "fixedItemHeight",
              itemSize: "itemSize",
              scrollSeekConfiguration: "scrollSeekConfiguration",
              data: "data",
              initialItemCount: "initialItemCount",
              initialScrollTop: "initialScrollTop",
              alignToBottom: "alignToBottom",
              useWindowScroll: "useWindowScroll",
              customScrollParent: "customScrollParent",
              scrollerRef: "scrollerRef",
              logLevel: "logLevel"
            },
            methods: {
              scrollToIndex: "scrollToIndex",
              scrollIntoView: "scrollIntoView",
              scrollTo: "scrollTo",
              scrollBy: "scrollBy",
              getState: "getState"
            },
            events: {
              isScrolling: "isScrolling",
              endReached: "endReached",
              startReached: "startReached",
              rangeChanged: "rangeChanged",
              atBottomStateChange: "atBottomStateChange",
              atTopStateChange: "atTopStateChange",
              totalListHeightChanged: "totalListHeightChanged",
              itemsRendered: "itemsRendered",
              groupIndices: "groupIndices"
            }
          },
          o.memo(function (e) {
            let t = t$("useWindowScroll"),
              r = t$("customScrollParent"),
              s = tZ("fixedHeaderHeight"),
              a = tZ("fixedFooterHeight"),
              l = t$("fixedHeaderContent"),
              u = t$("fixedFooterContent"),
              c = t$("context"),
              d = z(
                o.useMemo(() => i(s, (e) => eu(e, "height")), [s]),
                !0,
                t$("skipAnimationFrameInResizeObserver")
              ),
              p = z(
                o.useMemo(() => i(a, (e) => eu(e, "height")), [a]),
                !0,
                t$("skipAnimationFrameInResizeObserver")
              ),
              m = r || t ? t0 : tJ,
              h = r || t ? tY : tK,
              v = t$("TableComponent"),
              f = t$("TableHeadComponent"),
              g = t$("TableFooterComponent"),
              I = l
                ? (0, n.jsx)(
                    f,
                    {
                      ref: d,
                      style: { position: "sticky", top: 0, zIndex: 2 },
                      ...tS(f, c),
                      children: l()
                    },
                    "TableHead"
                  )
                : null,
              w = u
                ? (0, n.jsx)(
                    g,
                    {
                      ref: p,
                      style: { bottom: 0, position: "sticky", zIndex: 1 },
                      ...tS(g, c),
                      children: u()
                    },
                    "TableFoot"
                  )
                : null;
            return (0, n.jsx)(m, {
              ...e,
              ...tS(m, c),
              children: (0, n.jsx)(h, {
                children: (0, n.jsxs)(v, {
                  style: { borderSpacing: 0, overflowAnchor: "none" },
                  ...tS(v, c),
                  children: [I, (0, n.jsx)(tW, {}, "TableBody"), w]
                })
              })
            });
          })
        ),
        tJ = tR({ useEmitter: tX, useEmitterValue: t$, usePublisher: tZ }),
        t0 = tk({ useEmitter: tX, useEmitterValue: t$, usePublisher: tZ }),
        t1 = {
          bottom: 0,
          itemHeight: 0,
          items: [],
          itemWidth: 0,
          offsetBottom: 0,
          offsetTop: 0,
          top: 0
        },
        t2 = {
          bottom: 0,
          itemHeight: 0,
          items: [{ index: 0 }],
          itemWidth: 0,
          offsetBottom: 0,
          offsetTop: 0,
          top: 0
        },
        { ceil: t4, floor: t5, max: t3, min: t6, round: t7 } = Math;
      function t8(e, t, r) {
        return Array.from({ length: t - e + 1 }).map((t, n) => ({
          data: null === r ? null : r[n + e],
          index: n + e
        }));
      }
      function t9(e, t) {
        return void 0 !== e && e.width === t.width && e.height === t.height;
      }
      function re(e, t) {
        return void 0 !== e && e.column === t.column && e.row === t.row;
      }
      let rt = q(
        ([
          { increaseViewportBy: e, listBoundary: t, overscan: r, visibleRange: n },
          {
            footerHeight: o,
            headerHeight: s,
            scrollBy: a,
            scrollContainerState: i,
            scrollTo: l,
            scrollTop: u,
            smoothScrollTargetReached: c,
            viewportHeight: d
          },
          p,
          m,
          { didMount: f, propsReady: g },
          {
            customScrollParent: T,
            useWindowScroll: q,
            windowScrollContainerState: F,
            windowScrollTo: N,
            windowViewportRect: M
          },
          O
        ]) => {
          let U = A(0),
            z = A(0),
            L = A(t1),
            _ = A({ height: 0, width: 0 }),
            B = A({ height: 0, width: 0 }),
            V = k(),
            D = k(),
            j = A(0),
            Q = A(null),
            W = A({ column: 0, row: 0 }),
            K = k(),
            Y = k(),
            X = A(!1),
            $ = A(0),
            Z = A(!0),
            J = A(!1),
            ee = A(!1);
          (x(
            f,
            C($),
            w(([e, t]) => 0 !== t)
          )(1, () => {
            Z(0, !1);
          }),
            x(
              G(f, Z, B, _, $, J),
              w(([e, t, r, n, , o]) => e && !t && 0 !== r.height && 0 !== n.height && !o)
            )(1, ([, , , , e]) => {
              (J(0, !0),
                eR(1, () => {
                  V(0, e);
                }),
                v(x(u), () => {
                  (t(0, [0, 0]), Z(0, !0));
                }));
            }),
            h(
              x(
                Y,
                w((e) => null != e && e.scrollTop > 0),
                b(0)
              ),
              z
            ),
            x(
              f,
              C(Y),
              w(([, e]) => null != e)
            )(1, ([, e]) => {
              e &&
                (_(0, e.viewport),
                B(0, e.item),
                W(0, e.gap),
                e.scrollTop > 0 &&
                  (X(0, !0),
                  v(x(u, S(1)), (e) => {
                    X(0, !1);
                  }),
                  l(0, { top: e.scrollTop })));
            }),
            h(
              x(
                _,
                y(({ height: e }) => e)
              ),
              d
            ),
            h(
              x(
                G(
                  H(_, t9),
                  H(B, t9),
                  H(W, (e, t) => void 0 !== e && e.column === t.column && e.row === t.row),
                  H(u)
                ),
                y(([e, t, r, n]) => ({ gap: r, item: t, scrollTop: n, viewport: e }))
              ),
              K
            ),
            h(
              x(
                G(H(U), n, H(W, re), H(B, t9), H(_, t9), H(Q), H(z), H(X), H(Z), H($)),
                w(([, , , , , , , e]) => !e),
                y(([e, [t, r], n, o, s, a, i, , l, u]) => {
                  let c,
                    d,
                    { column: p, row: m } = n,
                    { height: h, width: v } = o,
                    { width: f } = s;
                  if (0 === i && (0 === e || 0 === f)) return t1;
                  if (0 === v) {
                    var g;
                    let t = ek(u, e),
                      r = t + Math.max(i - 1, 0);
                    return ((g = t8(t, r, a)), { ...t2, items: g });
                  }
                  let I = rr(f, v, p);
                  l
                    ? 0 === t && 0 === r && i > 0
                      ? ((c = 0), (d = i - 1))
                      : ((c = I * t5((t + m) / (h + m))),
                        (d = t6(e - 1, t3((d = I * t4((r + m) / (h + m)) - 1), I - 1))),
                        (c = t6(d, t3(0, c))))
                    : ((c = 0), (d = -1));
                  let w = t8(c, d, a),
                    { bottom: y, top: b } = rn(s, n, o, w),
                    x = t4(e / I);
                  return {
                    bottom: y,
                    itemHeight: h,
                    items: w,
                    itemWidth: v,
                    offsetBottom: x * h + (x - 1) * m - y,
                    offsetTop: b,
                    top: b
                  };
                })
              ),
              L
            ),
            h(
              x(
                Q,
                w((e) => null !== e),
                y((e) => e.length)
              ),
              U
            ),
            h(
              x(
                G(_, B, L, W),
                w(([e, t, { items: r }]) => r.length > 0 && 0 !== t.height && 0 !== e.height),
                y(([e, t, { items: r }, n]) => {
                  let { bottom: o, top: s } = rn(e, n, t, r);
                  return [s, o];
                }),
                I(ea)
              ),
              t
            ));
          let et = A(!1);
          h(
            x(
              u,
              C(et),
              y(([e, t]) => t || 0 !== e)
            ),
            et
          );
          let er = E(
              x(
                G(L, U),
                w(([{ items: e }]) => e.length > 0),
                C(et),
                w(([[e, t], r]) => {
                  let n = e.items[e.items.length - 1].index === t - 1;
                  return (
                    (r ||
                      (e.bottom > 0 &&
                        e.itemHeight > 0 &&
                        0 === e.offsetBottom &&
                        e.items.length === t)) &&
                    n
                  );
                }),
                y(([[, e]]) => e - 1),
                I()
              )
            ),
            en = E(
              x(
                H(L),
                w(({ items: e }) => e.length > 0 && 0 === e[0].index),
                b(0),
                I()
              )
            ),
            eo = E(
              x(
                H(L),
                C(X),
                w(([{ items: e }, t]) => e.length > 0 && !t),
                y(([{ items: e }]) => ({
                  endIndex: e[e.length - 1].index,
                  startIndex: e[0].index
                })),
                I(es),
                P(0)
              )
            );
          (h(eo, m.scrollSeekRangeChanged),
            h(
              x(
                V,
                C(_, B, U, W),
                y(([e, t, r, n, o]) => {
                  let s = eC(e),
                    { align: a, behavior: i, offset: l } = s,
                    u = s.index;
                  "LAST" === u && (u = n - 1);
                  let c = ro(t, o, r, (u = t3(0, u, t6(n - 1, u))));
                  return (
                    "end" === a
                      ? (c = t7(c - t.height + r.height))
                      : "center" === a && (c = t7(c - t.height / 2 + r.height / 2)),
                    void 0 !== l && 0 !== l && (c += l),
                    { behavior: i, top: c }
                  );
                })
              ),
              l
            ));
          let ei = R(
            x(
              L,
              y((e) => e.offsetBottom + e.bottom)
            ),
            0
          );
          return (
            h(
              x(
                M,
                y((e) => ({ height: e.visibleHeight, width: e.visibleWidth }))
              ),
              _
            ),
            {
              customScrollParent: T,
              data: Q,
              deviation: j,
              footerHeight: o,
              gap: W,
              headerHeight: s,
              increaseViewportBy: e,
              initialItemCount: z,
              itemDimensions: B,
              overscan: r,
              restoreStateFrom: Y,
              scrollBy: a,
              scrollContainerState: i,
              scrollHeight: D,
              scrollTo: l,
              scrollToIndex: V,
              scrollTop: u,
              smoothScrollTargetReached: c,
              totalCount: U,
              useWindowScroll: q,
              viewportDimensions: _,
              windowScrollContainerState: F,
              windowScrollTo: N,
              windowViewportRect: M,
              ...m,
              gridState: L,
              horizontalDirection: ee,
              initialTopMostItemIndex: $,
              totalListHeight: ei,
              ...p,
              endReached: er,
              propsReady: g,
              rangeChanged: eo,
              startReached: en,
              stateChanged: K,
              stateRestoreInProgress: X,
              ...O
            }
          );
        },
        d(ez, D, eH, e1, eS, e2, U)
      );
      function rr(e, t, r) {
        return t3(1, t5((e + r) / (t5(t) + r)));
      }
      function rn(e, t, r, n) {
        let { height: o } = r;
        if (void 0 === o || 0 === n.length) return { bottom: 0, top: 0 };
        let s = ro(e, t, r, n[0].index);
        return { bottom: ro(e, t, r, n[n.length - 1].index) + o, top: s };
      }
      function ro(e, t, r, n) {
        let o = t5(n / rr(e.width, r.width, t.column)),
          s = o * r.height + t3(0, o - 1) * t.row;
        return s > 0 ? s + t.row : s;
      }
      let rs = q(() => {
          let e = A((e) => `Item ${e}`),
            t = A({}),
            r = A(null),
            n = A("virtuoso-grid-item"),
            o = A("virtuoso-grid-list"),
            s = A(td),
            a = A("div"),
            i = A(u),
            l = (e, r = null) =>
              R(
                x(
                  t,
                  y((t) => t[e]),
                  I()
                ),
                r
              ),
            c = A(!1),
            d = A(!1);
          return (
            h(H(d), c),
            {
              components: t,
              computeItemKey: s,
              context: r,
              FooterComponent: l("Footer"),
              HeaderComponent: l("Header"),
              headerFooterTag: a,
              itemClassName: n,
              ItemComponent: l("Item", "div"),
              itemContent: e,
              listClassName: o,
              ListComponent: l("List", "div"),
              readyStateChanged: c,
              reportReadyState: d,
              ScrollerComponent: l("Scroller", "div"),
              scrollerRef: i,
              ScrollSeekPlaceholder: l("ScrollSeekPlaceholder", "div")
            }
          );
        }),
        ra = q(([e, t]) => ({ ...e, ...t }), d(rt, rs)),
        ri = o.memo(function () {
          let e = rh("gridState"),
            t = rh("listClassName"),
            r = rh("itemClassName"),
            s = rh("itemContent"),
            a = rh("computeItemKey"),
            i = rh("isSeeking"),
            l = rv("scrollHeight"),
            u = rh("ItemComponent"),
            c = rh("ListComponent"),
            d = rh("ScrollSeekPlaceholder"),
            p = rh("context"),
            m = rv("itemDimensions"),
            h = rv("gap"),
            v = rh("log"),
            f = rh("stateRestoreInProgress"),
            g = rv("reportReadyState"),
            I = z(
              o.useMemo(
                () => (e) => {
                  l(e.parentElement.parentElement.scrollHeight);
                  let t = e.firstChild;
                  if (null !== t) {
                    let { height: e, width: r } = t.getBoundingClientRect();
                    m({ height: e, width: r });
                  }
                  h({
                    column: rI("column-gap", getComputedStyle(e).columnGap, v),
                    row: rI("row-gap", getComputedStyle(e).rowGap, v)
                  });
                },
                [l, m, h, v]
              ),
              !0,
              !1
            );
          return (
            tl(() => {
              e.itemHeight > 0 && e.itemWidth > 0 && g(!0);
            }, [e]),
            f
              ? null
              : (0, n.jsx)(c, {
                  className: t,
                  ref: I,
                  ...tS(c, p),
                  "data-testid": "virtuoso-item-list",
                  style: { paddingBottom: e.offsetBottom, paddingTop: e.offsetTop },
                  children: e.items.map((t) => {
                    let l = a(t.index, t.data, p);
                    return i
                      ? (0, n.jsx)(
                          d,
                          { ...tS(d, p), height: e.itemHeight, index: t.index, width: e.itemWidth },
                          l
                        )
                      : (0, o.createElement)(
                          u,
                          { ...tS(u, p), className: r, "data-index": t.index, key: l },
                          s(t.index, t.data, p)
                        );
                  })
                })
          );
        }),
        rl = o.memo(function () {
          let e = rh("HeaderComponent"),
            t = rv("headerHeight"),
            r = rh("headerFooterTag"),
            s = z(
              o.useMemo(
                () => (e) => {
                  t(eu(e, "height"));
                },
                [t]
              ),
              !0,
              !1
            ),
            a = rh("context");
          return null != e
            ? (0, n.jsx)(r, { ref: s, children: (0, n.jsx)(e, { ...tS(e, a) }) })
            : null;
        }),
        ru = o.memo(function () {
          let e = rh("FooterComponent"),
            t = rv("footerHeight"),
            r = rh("headerFooterTag"),
            s = z(
              o.useMemo(
                () => (e) => {
                  t(eu(e, "height"));
                },
                [t]
              ),
              !0,
              !1
            ),
            a = rh("context");
          return null != e
            ? (0, n.jsx)(r, { ref: s, children: (0, n.jsx)(e, { ...tS(e, a) }) })
            : null;
        }),
        rc = ({ children: e }) => {
          let t = o.useContext(to),
            r = rv("itemDimensions"),
            s = rv("viewportDimensions"),
            a = z(
              o.useMemo(
                () => (e) => {
                  s(e.getBoundingClientRect());
                },
                [s]
              ),
              !0,
              !1
            );
          return (
            o.useEffect(() => {
              t &&
                (s({ height: t.viewportHeight, width: t.viewportWidth }),
                r({ height: t.itemHeight, width: t.itemWidth }));
            }, [t, s, r]),
            (0, n.jsx)("div", { ref: a, style: tb(!1), children: e })
          );
        },
        rd = ({ children: e }) => {
          let t = o.useContext(to),
            r = rv("windowViewportRect"),
            s = rv("itemDimensions"),
            a = rh("customScrollParent"),
            i = rh("useWindowScroll"),
            l = V(r, a, !1);
          return (
            o.useEffect(() => {
              t &&
                (s({ height: t.itemHeight, width: t.itemWidth }),
                r({
                  listHeight: 0,
                  offsetTop: 0,
                  visibleHeight: t.viewportHeight,
                  visibleWidth: t.viewportWidth
                }));
            }, [t, r, s]),
            (0, n.jsx)("div", { ref: l, style: tx(!1, i), children: e })
          );
        },
        {
          Component: rp,
          useEmitter: rm,
          useEmitterValue: rh,
          usePublisher: rv
        } = tr(
          ra,
          {
            optional: {
              context: "context",
              totalCount: "totalCount",
              overscan: "overscan",
              itemContent: "itemContent",
              components: "components",
              computeItemKey: "computeItemKey",
              data: "data",
              initialItemCount: "initialItemCount",
              scrollSeekConfiguration: "scrollSeekConfiguration",
              headerFooterTag: "headerFooterTag",
              listClassName: "listClassName",
              itemClassName: "itemClassName",
              useWindowScroll: "useWindowScroll",
              customScrollParent: "customScrollParent",
              scrollerRef: "scrollerRef",
              logLevel: "logLevel",
              restoreStateFrom: "restoreStateFrom",
              initialTopMostItemIndex: "initialTopMostItemIndex",
              increaseViewportBy: "increaseViewportBy"
            },
            methods: { scrollTo: "scrollTo", scrollBy: "scrollBy", scrollToIndex: "scrollToIndex" },
            events: {
              isScrolling: "isScrolling",
              endReached: "endReached",
              startReached: "startReached",
              rangeChanged: "rangeChanged",
              atBottomStateChange: "atBottomStateChange",
              atTopStateChange: "atTopStateChange",
              stateChanged: "stateChanged",
              readyStateChanged: "readyStateChanged"
            }
          },
          o.memo(function ({ ...e }) {
            let t = rh("useWindowScroll"),
              r = rh("customScrollParent"),
              o = r || t ? rg : rf,
              s = r || t ? rd : rc,
              a = rh("context");
            return (0, n.jsx)(o, {
              ...e,
              ...tS(o, a),
              children: (0, n.jsxs)(s, {
                children: [(0, n.jsx)(rl, {}), (0, n.jsx)(ri, {}), (0, n.jsx)(ru, {})]
              })
            });
          })
        ),
        rf = tR({ useEmitter: rm, useEmitterValue: rh, usePublisher: rv }),
        rg = tk({ useEmitter: rm, useEmitterValue: rh, usePublisher: rv });
      function rI(e, t, r) {
        return (
          "normal" !== t &&
            t?.endsWith("px") !== !0 &&
            r(`${e} was not resolved to pixel value correctly`, t, M.WARN),
          "normal" === t ? 0 : parseInt(t ?? "0", 10)
        );
      }
      let rw = rp;
    },
    90102: (e, t, r) => {
      r.d(t, { _: () => o, a: () => s, b: () => a });
      var n = function (e, t) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(e, t);
      };
      function o(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function r() {
          this.constructor = e;
        }
        (n(e, t),
          (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r())));
      }
      function s(e, t, r, n) {
        return new (r || (r = Promise))(function (o, s) {
          function a(e) {
            try {
              l(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function i(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, i);
          }
          l((n = n.apply(e, t || [])).next());
        });
      }
      function a(e, t) {
        var r,
          n,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: []
          },
          a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return (
          (a.next = i(0)),
          (a.throw = i(1)),
          (a.return = i(2)),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function i(i) {
          return function (l) {
            var u = [i, l];
            if (r) throw TypeError("Generator is already executing.");
            for (; a && ((a = 0), u[0] && (s = 0)), s;)
              try {
                if (
                  ((r = 1),
                  n &&
                    (o =
                      2 & u[0]
                        ? n.return
                        : u[0]
                          ? n.throw || ((o = n.return) && o.call(n), 0)
                          : n.next) &&
                    !(o = o.call(n, u[1])).done)
                )
                  return o;
                switch (((n = 0), o && (u = [2 & u[0], o.value]), u[0])) {
                  case 0:
                  case 1:
                    o = u;
                    break;
                  case 4:
                    return (s.label++, { value: u[1], done: !1 });
                  case 5:
                    (s.label++, (n = u[1]), (u = [0]));
                    continue;
                  case 7:
                    ((u = s.ops.pop()), s.trys.pop());
                    continue;
                  default:
                    if (
                      !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                      (6 === u[0] || 2 === u[0])
                    ) {
                      s = 0;
                      continue;
                    }
                    if (3 === u[0] && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                      s.label = u[1];
                      break;
                    }
                    if (6 === u[0] && s.label < o[1]) {
                      ((s.label = o[1]), (o = u));
                      break;
                    }
                    if (o && s.label < o[2]) {
                      ((s.label = o[2]), s.ops.push(u));
                      break;
                    }
                    (o[2] && s.ops.pop(), s.trys.pop());
                    continue;
                }
                u = t.call(e, s);
              } catch (e) {
                ((u = [6, e]), (n = 0));
              } finally {
                r = o = 0;
              }
            if (5 & u[0]) throw u[1];
            return { value: u[0] ? u[1] : void 0, done: !0 };
          };
        }
      }
      "function" == typeof SuppressedError && SuppressedError;
    },
    95659: (e, t, r) => {
      e.exports = r.p + "static/media/alert_light.5ae04b5d.svg";
    }
  }
]);
