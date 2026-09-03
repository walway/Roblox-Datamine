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
    n && ((e._debugIds || (e._debugIds = {}))[n] = "98aa7b5e-b259-f248-cd77-b25f483248c8");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  371655,
  802506,
  (e) => {
    "use strict";
    var t = e.i(109841);
    e.s(["tooltipClasses", () => t.t], 371655);
    var n = e.i(833172);
    e.s(["HelpOutlineOutlinedIcon", () => n.HelpOutlineOutlined], 802506);
  },
  396344,
  (e) => {
    "use strict";
    var t = e.i(833172);
    e.s(["DownloadIcon", () => t.Download]);
  },
  887251,
  531497,
  (e) => {
    "use strict";
    let t, n, l, a;
    var o = e.i(2226),
      i = e.i(569384),
      r = e.i(416340),
      u = e.i(993690),
      s = e.i(706442),
      d = e.i(904090),
      c = e.i(371655),
      m = e.i(199834),
      g = e.i(431346),
      h = e.i(620068),
      f = e.i(597488),
      p = e.i(935606),
      v = e.i(37836),
      F = e.i(884398),
      C = e.i(802506),
      S = e.i(396344),
      E = e.i(242788),
      b = e.i(763937);
    e.s(["CardActions", () => b.a], 531497);
    var b = b,
      A = e.i(802737),
      y = e.i(489279),
      x = e.i(650764),
      M = e.i(988012),
      N = e.i(135196),
      w = e.i(610657),
      D = e.i(558826),
      B = e.i(774807),
      L = e.i(958473),
      R = e.i(643377),
      O = e.i(93235),
      k = e.i(27281),
      I = e.i(149285),
      T = e.i(851670),
      P = e.i(101155),
      z = e.i(126521),
      W = e.i(197649),
      V = e.i(23342);
    let H = { Large: "size-1200", Medium: "size-1000", Small: "size-800", XSmall: "size-600" },
      _ = { XSmall: "size-400", Small: "size-500", Medium: "size-600", Large: "size-700" },
      G = {
        Large: { circular: "radius-circle", square: "radius-medium" },
        Medium: { circular: "radius-circle", square: "radius-medium" },
        Small: { circular: "radius-circle", square: "radius-medium" },
        XSmall: { circular: "radius-circle", square: "radius-small" }
      },
      j = {
        Emphasis: "bg-action-emphasis",
        Standard: "bg-action-standard",
        Alert: "bg-action-alert",
        Utility: "bg-action-link",
        OverMedia: "bg-over-media-0"
      },
      X = {
        Emphasis: "bg-action-standard",
        Standard: "bg-action-standard",
        Alert: "bg-action-standard",
        Utility: "bg-action-link",
        OverMedia: "bg-over-media-0"
      },
      U = {
        Emphasis: "bg-action-emphasis",
        Standard: "bg-action-standard",
        Alert: "bg-action-standard",
        Utility: "bg-shift-300",
        OverMedia: "bg-over-media-0"
      },
      K = {
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
      q = {
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
      Y = (0, r.forwardRef)((e, t) => {
        let n,
          {
            className: l,
            icon: a,
            ariaLabel: o,
            isDisabled: i = !1,
            isCircular: u = !1,
            isSelected: s = !1,
            size: d = "Large",
            variant: c = "Emphasis",
            iconColor: m = "Default",
            asChild: g,
            children: h,
            ...f
          } = e;
        n = i ? X[c] : s ? U[c] : j[c];
        let p = (0, W.default)(
            "foundation-web-icon-button",
            i ? z.disabledOpacity : [P.interactable, "cursor-pointer"],
            "relative flex items-center justify-center padding-none stroke-none select-none",
            H[d],
            G[d][u ? "circular" : "square"],
            n,
            l
          ),
          v = r.default.createElement(
            r.default.Fragment,
            null,
            r.default.createElement(P.StateLayer, null),
            r.default.createElement("span", {
              className: (0, W.default)("icon", a, _[d], i ? q[m][c] : K[m][c])
            })
          );
        if (g) {
          let { as: e, ...n } = f,
            l = r.default.Children.only(h);
          return r.default.createElement(
            V.Slot,
            { ref: t, ...n, className: p, "aria-label": o, "aria-disabled": i || void 0 },
            r.default.cloneElement(l, {}, v)
          );
        }
        if ("a" === f.as) {
          let { as: e, href: n, ...l } = f;
          return r.default.createElement(
            "a",
            {
              ref: t,
              ...l,
              "aria-label": o,
              "aria-disabled": i,
              href: i ? void 0 : n,
              className: p
            },
            v
          );
        }
        let { as: F, ...C } = f;
        return r.default.createElement(
          "button",
          { ref: t, type: "button", ...C, "aria-label": o, disabled: i, className: p },
          v
        );
      });
    var Q = e.i(677432);
    let Z = (0, r.createContext)(null),
      J = (e) => {
        let t = (0, r.useContext)(Z);
        if (!t) throw Error("".concat(e, " must be used within a <Table>"));
        return t;
      },
      $ = { XSmall: "height-800", Small: "height-1200", Medium: "height-1500" },
      ee = { XSmall: "padding-x-medium", Small: "padding-x-large", Medium: "padding-x-xlarge" },
      et = { XSmall: "padding-y-xsmall", Small: "padding-y-small", Medium: "padding-y-medium" },
      en = { XSmall: "text-title-small", Small: "text-title-small", Medium: "text-title-medium" },
      el = { XSmall: "text-body-small", Small: "text-body-medium", Medium: "text-body-medium" },
      ea = { start: "text-align-x-start", center: "text-align-x-center", end: "text-align-x-end" },
      eo = { start: "justify-start", center: "justify-center", end: "justify-end" },
      ei = (0, r.forwardRef)((e, t) => {
        let { children: n, size: l = "Medium", variant: a = "Divided", className: o, ...i } = e,
          u = (0, r.useMemo)(() => ({ size: l, variant: a }), [l, a]),
          s = "Framed" === a;
        return r.default.createElement(
          Z.Provider,
          { value: u },
          r.default.createElement(
            "div",
            {
              className: (0, W.default)(
                "width-full bg-surface-100",
                s && "radius-medium clip stroke-standard stroke-default"
              )
            },
            r.default.createElement(
              "table",
              {
                ref: t,
                className: (0, W.default)("foundation-web-table width-full content-default", o),
                ...i
              },
              n
            )
          )
        );
      });
    ei.displayName = "Table";
    let er = (0, r.forwardRef)((e, t) => {
      let { children: n, className: l, ...a } = e;
      return (
        J("TableHeader"),
        r.default.createElement(
          "thead",
          { ref: t, className: (0, W.default)("foundation-web-table-header", l), ...a },
          n
        )
      );
    });
    er.displayName = "TableHeader";
    let eu = (0, r.forwardRef)((e, t) => {
      let { children: n, className: l, ...a } = e;
      return (
        J("TableBody"),
        r.default.createElement(
          "tbody",
          { ref: t, className: (0, W.default)("foundation-web-table-body", l), ...a },
          n
        )
      );
    });
    eu.displayName = "TableBody";
    let es = (0, r.forwardRef)((e, t) => {
      let {
        children: n,
        className: l,
        isInteractive: a = !1,
        isHoverable: o = !1,
        isSelected: i = !1,
        isDisabled: u = !1,
        onClick: s,
        onKeyDown: d,
        tabIndex: c,
        role: m,
        ...g
      } = e;
      J("TableRow");
      let h = a
        ? {
            role: null != m ? m : "row",
            tabIndex: null != c ? c : 0,
            onClick: u ? void 0 : s,
            onKeyDown: (e) => {
              u ||
                (null == d || d(e),
                e.defaultPrevented ||
                  (("Enter" === e.key || " " === e.key) &&
                    (e.preventDefault(), null == s || s(e))));
            }
          }
        : { role: m, tabIndex: c, onClick: s, onKeyDown: d };
      return r.default.createElement(
        "tr",
        {
          ref: t,
          "aria-selected": a ? i : void 0,
          "aria-disabled": (!!a && !!u) || void 0,
          "data-selected": i || void 0,
          className: (0, W.default)(
            "foundation-web-table-row",
            (a || o) && "hover:bg-shift-100",
            a && !u && "cursor-pointer",
            a && u && "opacity-disabled pointer-events-none",
            i && "bg-shift-200",
            l
          ),
          ...h,
          ...g
        },
        n
      );
    });
    es.displayName = "TableRow";
    let ed = (0, r.forwardRef)((e, t) => {
      let {
          children: n,
          className: l,
          sortDirection: a,
          onSort: o,
          align: i = "start",
          sortLabel: u,
          scope: s,
          ...d
        } = e,
        { size: c } = J("TableHeaderCell"),
        m = !!o,
        g = null != a ? a : "none",
        h =
          m &&
          "none" !== g &&
          r.default.createElement(Q.Icon, {
            name:
              "ascending" === g ? "icon-regular-arrow-small-up" : "icon-regular-arrow-small-down",
            size: "XSmall",
            className: "shrink-0 content-muted"
          }),
        f = r.default.createElement(
          "div",
          {
            className: (0, W.default)("flex items-center gap-xsmall", en[c], "content-muted", eo[i])
          },
          "end" === i && h,
          r.default.createElement("span", { className: "text-truncate-end" }, n),
          "end" !== i && h
        ),
        p = "string" == typeof n ? "Sort by ".concat(n) : void 0;
      return r.default.createElement(
        "th",
        {
          ref: t,
          scope: null != s ? s : "col",
          "aria-sort": m ? g : void 0,
          className: (0, W.default)(
            "foundation-web-table-header-cell foundation-web-table-header-cell-divider",
            et[c],
            ee[c],
            ea[i],
            "content-muted",
            l
          ),
          ...d
        },
        m
          ? r.default.createElement(
              "button",
              {
                type: "button",
                className:
                  "bg-none stroke-none padding-none margin-none cursor-pointer width-full content-inherit [font:inherit] [text-align:inherit] focus-visible:outline-focus hover:content-default hover:bg-shift-100 radius-small",
                onClick: o,
                "aria-label": null != u ? u : p
              },
              f
            )
          : f
      );
    });
    ed.displayName = "TableHeaderCell";
    let ec = (0, r.forwardRef)((e, t) => {
      let { children: n, className: l, align: a = "start", ...o } = e,
        { size: i } = J("TableCell");
      return r.default.createElement(
        "td",
        {
          ref: t,
          className: (0, W.default)(
            "foundation-web-table-cell foundation-web-table-row-divider",
            $[i],
            ee[i],
            el[i],
            ea[a],
            "content-default",
            l
          ),
          ...o
        },
        n
      );
    });
    ec.displayName = "TableCell";
    let em = { XSmall: "padding-x-small", Small: "padding-x-medium", Medium: "padding-x-large" },
      eg = { XSmall: "padding-y-xsmall", Small: "padding-y-small", Medium: "padding-y-medium" },
      eh = { XSmall: "text-title-small", Small: "text-title-small", Medium: "text-title-small" },
      ef = { XSmall: "text-body-small", Small: "text-body-small", Medium: "text-body-medium" },
      ep = { XSmall: "gap-xsmall", Small: "gap-xsmall", Medium: "gap-small" },
      ev = { XSmall: "XSmall", Small: "XSmall", Medium: "Small" };
    (0, r.forwardRef)((e, t) => {
      let {
          size: n = "Medium",
          page: l,
          rowsPerPage: a,
          totalRows: o,
          rowsPerPageOptions: i = [10, 25, 50],
          onPageChange: u,
          onRowsPerPageChange: s,
          rowsPerPageLabel: d = "Rows per page",
          firstPageLabel: c = "First page",
          previousPageLabel: m = "Previous page",
          nextPageLabel: g = "Next page",
          lastPageLabel: h = "Last page",
          rangeLabel: f,
          className: p,
          ...v
        } = e,
        F = Math.max(1, Math.ceil(o / a)),
        C = 0 === l,
        S = l >= F - 1,
        E = 0 === o ? 0 : l * a + 1,
        b = Math.min((l + 1) * a, o),
        A = (0, r.useCallback)(
          (e) => {
            let t = Number(e.target.value);
            (null == s || s(t), u(0));
          },
          [s, u]
        ),
        y = ev[n];
      return r.default.createElement(
        "div",
        {
          ref: t,
          className: (0, W.default)("flex items-center justify-end", em[n], eg[n], p),
          ...v
        },
        r.default.createElement(
          "div",
          { className: "flex items-center gap-large" },
          r.default.createElement(
            "div",
            { className: "flex items-center gap-xlarge" },
            s &&
              r.default.createElement(
                "div",
                { className: "flex items-center gap-small" },
                r.default.createElement(
                  "span",
                  { className: (0, W.default)(eh[n], "content-default") },
                  d
                ),
                r.default.createElement(
                  "div",
                  { className: "foundation-web-table-pagination-select-wrapper relative" },
                  r.default.createElement(
                    "select",
                    {
                      className: (0, W.default)(
                        "foundation-web-table-pagination-select",
                        eh[n],
                        "content-default bg-action-standard radius-small cursor-pointer",
                        "Medium" === n
                          ? "height-800 padding-x-medium"
                          : "height-600 padding-x-small"
                      ),
                      value: a,
                      onChange: A,
                      "aria-label": d
                    },
                    i.map((e) => r.default.createElement("option", { key: e, value: e }, e))
                  )
                )
              ),
            r.default.createElement(
              "span",
              { className: (0, W.default)(ef[n], "content-default") },
              f ? f(E, b, o) : "".concat(E, "-").concat(b, " of ").concat(o)
            )
          ),
          r.default.createElement(
            "div",
            { className: (0, W.default)("flex items-center", ep[n]) },
            r.default.createElement(Y, {
              icon: "icon-regular-double-chevron-large-left",
              ariaLabel: c,
              size: y,
              variant: "Utility",
              isDisabled: C,
              onClick: () => u(0)
            }),
            r.default.createElement(Y, {
              icon: "icon-regular-chevron-small-left",
              ariaLabel: m,
              size: y,
              variant: "Utility",
              isDisabled: C,
              onClick: () => u(l - 1)
            }),
            r.default.createElement(Y, {
              icon: "icon-regular-chevron-small-right",
              ariaLabel: g,
              size: y,
              variant: "Utility",
              isDisabled: S,
              onClick: () => u(l + 1)
            }),
            r.default.createElement(Y, {
              icon: "icon-regular-double-chevron-large-right",
              ariaLabel: h,
              size: y,
              variant: "Utility",
              isDisabled: S,
              onClick: () => u(F - 1)
            })
          )
        )
      );
    }).displayName = "TablePagination";
    var eF = e.i(778291);
    let eC = {
        Small: { dimension: 16, strokeWidth: 2, textClass: "text-caption-small" },
        Medium: {
          dimension: 32,
          strokeWidth: 3,
          textClass: "text-caption-small",
          valueContainerSize: 36
        },
        Large: {
          dimension: 48,
          strokeWidth: 4,
          textClass: "text-caption-medium",
          valueContainerSize: 52
        }
      },
      eS = r.default.forwardRef((e, t) => {
        let {
            className: n,
            size: l = "Large",
            variant: a = "Determinate",
            value: o = 0,
            showValue: i = !1,
            ariaLabel: u,
            ...s
          } = e,
          { dimension: d, strokeWidth: c, textClass: m, valueContainerSize: g } = eC[l],
          h = (d - c) / 2,
          f = 2 * Math.PI * h,
          p = d / 2,
          v = Math.min(100, Math.max(0, o)),
          F = i && void 0 !== g ? g : d,
          C = "Determinate" === a;
        return r.default.createElement(
          "div",
          {
            ref: t,
            className: (0, W.default)(
              "foundation-web-progress-circle inline-flex items-center justify-center",
              n
            ),
            role: "progressbar",
            "aria-label": u,
            "aria-valuemin": C ? 0 : void 0,
            "aria-valuemax": C ? 100 : void 0,
            "aria-valuenow": C ? v : void 0,
            style: { width: F, height: F },
            ...s
          },
          r.default.createElement(
            "svg",
            {
              width: d,
              height: d,
              viewBox: "0 0 ".concat(d, " ").concat(d),
              className: "relative"
            },
            r.default.createElement("circle", {
              cx: p,
              cy: p,
              r: h,
              fill: "none",
              strokeWidth: c,
              style: { stroke: "var(--color-shift-200)" }
            }),
            r.default.createElement("circle", {
              cx: p,
              cy: p,
              r: h,
              fill: "none",
              strokeWidth: c,
              strokeDasharray: C ? f : "".concat(0.75 * f, " ").concat(0.25 * f),
              strokeDashoffset: C ? f * (1 - v / 100) : 0,
              strokeLinecap: "round",
              className: (0, W.default)(!C && "foundation-web-progress-circle-indeterminate"),
              style: C
                ? {
                    stroke: "var(--fui-future-alpha-color-system-progress)",
                    transform: "rotate(-90deg)",
                    transformOrigin: "50% 50%",
                    transition: "stroke-dashoffset 0.3s ease-out"
                  }
                : {
                    stroke: "var(--fui-future-alpha-color-system-progress)",
                    transformOrigin: "50% 50%"
                  }
            })
          ),
          C &&
            i &&
            "Large" === l &&
            r.default.createElement(
              "div",
              {
                className: (0, W.default)(
                  "absolute content-emphasis flex items-center justify-center",
                  m
                ),
                "aria-hidden": "true"
              },
              r.default.createElement("span", null, Math.round(v)),
              r.default.createElement("span", null, "%")
            )
        );
      });
    eS.displayName = "ProgressCircle";
    let eE = 0,
      eb = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "«r",
          t = (0, r.useRef)();
        return (t.current || ((eE += 1), (t.current = "".concat(e).concat(eE))), t.current);
      };
    var eA = e.i(435536);
    let ey = (e) => {
        let { title: t, description: n, position: l = "top-center" } = e;
        return r.default.createElement(
          eA.Tooltip,
          { position: l, title: t, description: n },
          r.default.createElement(
            eA.TooltipTrigger,
            { asChild: !0 },
            r.default.createElement(
              "span",
              {
                role: "button",
                tabIndex: 0,
                "aria-label": t,
                className: "flex items-center content-muted",
                "data-testid": "label-tooltip-trigger"
              },
              r.default.createElement(Q.Icon, { name: "icon-regular-circle-i", size: "Small" })
            )
          )
        );
      },
      ex = { Standard: "bg-none", Contrast: "bg-shift-200", Utility: "bg-none" },
      eM = { Standard: "stroke-standard", Contrast: "stroke-none", Utility: "stroke-none" };
    var eN = e.i(563921);
    let ew = (0, r.createContext)(null),
      eD = { XSmall: "size-300", Small: "size-400", Medium: "size-500", Large: "size-600" },
      eB = {
        XSmall: "padding-x-medium",
        Small: "padding-x-medium",
        Medium: "padding-x-medium",
        Large: "padding-x-large"
      },
      eL = {
        XSmall: "text-title-small",
        Small: "text-title-small",
        Medium: "text-title-medium",
        Large: "text-title-large"
      },
      eR = {
        XSmall: "text-body-small",
        Small: "text-body-small",
        Medium: "text-body-medium",
        Large: "text-body-large"
      },
      eO = { XSmall: "gap-xsmall", Small: "gap-small", Medium: "gap-small", Large: "gap-small" },
      ek = {
        XSmall: "radius-small",
        Small: "radius-medium",
        Medium: "radius-medium",
        Large: "radius-medium"
      },
      eI = {
        XSmall: "height-600",
        Small: "height-800",
        Medium: "height-1000",
        Large: "height-1200"
      },
      eT = (0, r.forwardRef)((e, t) => {
        let {
            label: n,
            labelTooltip: l,
            ariaLabelledBy: a,
            ariaLabel: o,
            className: i,
            size: u,
            variant: s = "Standard",
            value: d,
            placeholder: c,
            isDisabled: m,
            hasError: g,
            hint: h,
            onValueChange: f,
            onOpenChange: p,
            children: v
          } = e,
          F = eb(),
          C = (0, r.useMemo)(() => ({ size: u }), [u]),
          S = n
            ? r.default.createElement(
                "span",
                { id: F, className: (0, W.default)(eL[u], "content-emphasis") },
                n
              )
            : null;
        return r.default.createElement(
          ew.Provider,
          { value: C },
          r.default.createElement(
            "div",
            {
              className: (0, W.default)(
                "flex flex-col",
                m && ["opacity-[0.5]", "pointer-events-none"],
                eO[u],
                i
              )
            },
            S &&
              (l
                ? r.default.createElement(
                    "div",
                    { className: "flex items-center gap-xsmall" },
                    S,
                    r.default.createElement(ey, l)
                  )
                : S),
            r.default.createElement(
              eN.Root,
              { value: d, disabled: m, onValueChange: f, onOpenChange: p },
              r.default.createElement(
                eN.Trigger,
                {
                  className: (0, W.default)(
                    "relative clip group/interactable outline-none",
                    "foundation-web-input flex items-center justify-between width-full cursor-pointer",
                    ex[s],
                    eM[s],
                    ek[u],
                    eI[u],
                    eB[u],
                    eR[u],
                    g
                      ? "stroke-system-alert focus-within:stroke-system-alert"
                      : "stroke-contrast-alpha focus-within:stroke-system-emphasis",
                    void 0 === d ? "content-muted" : "content-default"
                  ),
                  ref: t,
                  "aria-labelledby": n ? F : a,
                  "aria-label": o
                },
                r.default.createElement(P.StateLayer, null),
                r.default.createElement(
                  "div",
                  { className: "grow-1 text-truncate-split text-align-x-left" },
                  r.default.createElement(eN.Value, { placeholder: c })
                ),
                r.default.createElement(eN.Icon, {
                  className: (0, W.default)(
                    eD[u],
                    "icon icon-regular-chevron-large-down content-default"
                  )
                })
              ),
              r.default.createElement(
                eN.Portal,
                null,
                r.default.createElement(
                  eN.Content,
                  {
                    position: "popper",
                    className: "padding-y-small foundation-web-portal-zindex",
                    style: { maxHeight: "var(--radix-select-content-available-height)" }
                  },
                  v
                )
              )
            ),
            h &&
              r.default.createElement(
                "span",
                {
                  className: (0, W.default)("text-caption-small", {
                    "content-system-alert": g,
                    "content-default": !g
                  })
                },
                h
              )
          )
        );
      });
    eT.displayName = "Dropdown";
    var eP = e.i(142953);
    let ez = {
        XSmall: "radius-medium",
        Small: "radius-large",
        Medium: "radius-large",
        Large: "radius-large"
      },
      eW = {
        XSmall: "padding-xsmall",
        Small: "padding-small",
        Medium: "padding-small",
        Large: "padding-small"
      },
      eV = {
        XSmall: "padding-x-medium",
        Small: "padding-x-medium",
        Medium: "padding-x-medium",
        Large: "padding-x-large"
      },
      eH = {
        XSmall: "padding-y-xsmall",
        Small: "padding-y-small",
        Medium: "padding-y-small",
        Large: "padding-y-medium"
      },
      e_ = {
        XSmall: "gap-x-medium",
        Small: "gap-x-medium",
        Medium: "gap-x-medium",
        Large: "gap-x-large"
      },
      eG = {
        XSmall: "gap-y-xxsmall",
        Small: "gap-y-xxsmall",
        Medium: "gap-y-xsmall",
        Large: "gap-y-xsmall"
      },
      ej = {
        XSmall: "text-body-small",
        Small: "text-body-small",
        Medium: "text-body-medium",
        Large: "text-body-large"
      },
      eX = {
        XSmall: "radius-small",
        Small: "radius-medium",
        Medium: "radius-medium",
        Large: "radius-medium"
      },
      eU = (0, r.createContext)(null),
      eK = () => {
        let e = (0, r.useContext)(eU);
        if (!e) throw Error("Menu components must be used within a Menu");
        return e;
      },
      eq = (e) => {
        var t;
        let { children: n, className: l, size: a } = e,
          o = (0, r.useContext)(ew),
          i = o ? "dropdown" : "standalone",
          u = null != (t = null != a ? a : null == o ? void 0 : o.size) ? t : "Medium",
          s = (0, r.useMemo)(() => ({ size: u, mode: i }), [u, i]),
          d = (0, W.default)(
            "foundation-web-menu bg-surface-100 stroke-standard stroke-default shadow-transient-high",
            ez[u],
            l
          ),
          c =
            "standalone" === i
              ? r.default.createElement(
                  eP.Root,
                  { asChild: !0, orientation: "vertical", loop: !0 },
                  r.default.createElement("div", { role: "menu", tabIndex: -1, className: d }, n)
                )
              : r.default.createElement("div", { className: d }, n);
        return r.default.createElement(
          eU.Provider,
          { value: s },
          "dropdown" === i
            ? r.default.createElement(
                eN.Viewport,
                { asChild: !0, style: { width: "var(--radix-popper-anchor-width)" } },
                c
              )
            : c
        );
      },
      eY = (e) => {
        let { children: t, className: n } = e,
          { size: l } = eK();
        return r.default.createElement(
          "div",
          { role: "group", className: (0, W.default)(eW[l], n) },
          t
        );
      },
      eQ = (e) => {
        let t,
          {
            value: n,
            leading: l,
            title: a,
            description: o,
            trailing: i,
            disabled: u,
            className: s,
            onSelect: d,
            asChild: c,
            children: m,
            ...g
          } = e,
          { size: h, mode: f } = eK(),
          p = (0, W.default)(
            P.interactable,
            "foundation-web-menu-item flex items-center content-default text-truncate-split focus-visible:hover:outline-none cursor-pointer stroke-none bg-none text-align-x-left width-full",
            ej[h],
            eV[h],
            eH[h],
            e_[h],
            eX[h],
            u && "opacity-[0.5]",
            u && "pointer-events-none",
            s
          ),
          v = r.default.createElement(
            "span",
            {
              className:
                "foundation-web-menu-item-title text-no-wrap text-truncate-split content-emphasis"
            },
            a
          );
        switch (f) {
          case "dropdown":
            v = r.default.createElement(eN.ItemText, { asChild: !0 }, v);
            break;
          case "standalone":
            break;
          default:
            console.error("Invalid menu mode:", f);
        }
        let F = r.default.createElement(
          r.default.Fragment,
          null,
          !u && r.default.createElement(P.StateLayer, null),
          l,
          r.default.createElement(
            "div",
            { className: (0, W.default)("grow-1 text-truncate-split flex flex-col", eG[h]) },
            v,
            o &&
              r.default.createElement(
                "div",
                { className: "foundation-web-menu-item-description content-muted" },
                o
              )
          ),
          i
        );
        if (c) {
          let { as: e, ...n } = g,
            l = r.default.Children.only(m),
            o = void 0 === a && l.props.children;
          t = r.default.createElement(
            V.Slot,
            {
              ...n,
              role: "standalone" === f ? "menuitem" : void 0,
              "aria-disabled": u || void 0,
              className: p,
              style: { outlineOffset: 0 },
              onClick: u ? void 0 : d
            },
            o
              ? r.default.cloneElement(
                  l,
                  {},
                  r.default.createElement(
                    r.default.Fragment,
                    null,
                    !u && r.default.createElement(P.StateLayer, null),
                    l.props.children
                  )
                )
              : r.default.cloneElement(l, {}, F)
          );
        } else if ("a" === g.as) {
          let { as: e, href: n, ...l } = g;
          t = r.default.createElement(
            "a",
            {
              ...l,
              role: "standalone" === f ? "menuitem" : void 0,
              "aria-disabled": u,
              href: u ? void 0 : n,
              className: p,
              style: { outlineOffset: 0, textDecoration: "none" },
              onClick: u ? void 0 : d
            },
            F
          );
        } else {
          let { as: e, ...n } = g;
          t = r.default.createElement(
            "button",
            {
              type: "button",
              ...n,
              role: "standalone" === f ? "menuitem" : void 0,
              "aria-disabled": u,
              className: p,
              style: { outlineOffset: 0 },
              onClick: u ? void 0 : d
            },
            F
          );
        }
        return "dropdown" === f
          ? r.default.createElement(eN.Item, { value: n, disabled: u, asChild: !0 }, t)
          : r.default.createElement(eP.Item, { asChild: !0, focusable: !0, tabStopId: n }, t);
      };
    var eZ = e.i(734463);
    let eJ = (e) => {
      var t, n, l, a, o, i;
      let r =
          null !=
            (t =
              null == (l = (a = window).matchMedia) || null == (n = l.call(a, "(pointer: coarse)"))
                ? void 0
                : n.matches) && t,
        u = null == (o = document.activeElement) ? void 0 : o.matches(":focus-visible");
      if (r && !u) return void e.preventDefault();
      let s =
        null == (i = e.currentTarget)
          ? void 0
          : i.querySelector('[role="menuitem"]:not([aria-disabled="true"])');
      s && (e.preventDefault(), s.focus());
    };
    function e$(e) {
      let { open: t, defaultOpen: n, onOpenChange: l, children: a } = e;
      return r.createElement(eZ.Root, { open: t, defaultOpen: n, onOpenChange: l }, a);
    }
    function e0(e) {
      let { asChild: t, disabled: n, className: l, children: a } = e;
      return r.createElement(eZ.Trigger, { asChild: t, disabled: n, className: l }, a);
    }
    function e1(e) {
      let {
        side: t = "bottom",
        align: n = "center",
        sideOffset: l = 4,
        className: a,
        children: o,
        ariaLabel: i,
        onOpenAutoFocus: u,
        ...s
      } = e;
      return r.createElement(
        eZ.Portal,
        null,
        r.createElement(
          eZ.Content,
          {
            side: t,
            align: n,
            sideOffset: l,
            ...s,
            "aria-label": null != i ? i : s["aria-label"],
            onOpenAutoFocus: null != u ? u : eJ,
            className: (0, W.default)("foundation-web-portal-zindex", a)
          },
          o
        )
      );
    }
    var e2 = e.i(15199);
    let e6 = {
        Standard: {
          Info: "bg-shift-200",
          Warning: "bg-shift-200",
          Success: "bg-shift-200",
          Error: "bg-shift-200"
        },
        Emphasis: {
          Info: "bg-system-emphasis",
          Warning: "bg-system-warning",
          Success: "bg-system-success",
          Error: "bg-system-alert"
        }
      },
      e3 = {
        Info: "var(--dark-mode-content-default)",
        Warning: "var(--light-mode-content-default)",
        Success: "var(--light-mode-content-default)",
        Error: "var(--dark-mode-content-default)"
      },
      e4 = {
        Info: "var(--light-mode-system-emphasis)",
        Warning: "var(--light-mode-system-warning)",
        Success: "var(--light-mode-system-success)",
        Error: "var(--light-mode-system-alert)"
      },
      e5 = {
        Info: "icon-filled-circle-i",
        Warning: "icon-filled-triangle-exclamation",
        Success: "icon-filled-circle-check",
        Error: "icon-filled-circle-x"
      },
      e7 = {
        Info: "bg-action-standard",
        Warning: "bg-inverse-action-standard",
        Success: "bg-inverse-action-standard",
        Error: "bg-action-standard"
      },
      e9 = {
        Info: "var(--dark-mode-content-emphasis)",
        Warning: "var(--light-mode-content-emphasis)",
        Success: "var(--light-mode-content-emphasis)",
        Error: "var(--dark-mode-content-emphasis)"
      },
      e8 = (0, r.forwardRef)((e, t) => {
        let {
            title: n,
            description: l,
            showIcon: a = !0,
            infoIconOverride: o,
            variant: i = "Standard",
            severity: u = "Info",
            primaryActionLabel: s,
            onPrimaryAction: d,
            actions: c,
            onDismiss: m,
            dismissIconAriaLabel: g = "Dismiss banner",
            className: h,
            ...f
          } = e,
          p = e6[i][u],
          v = e9[u],
          F = e3[u],
          C = e4[u],
          S = "Emphasis" === i ? e7[u] : "",
          E = "Emphasis" === i ? e9[u] : "";
        return r.default.createElement(
          "div",
          {
            ref: t,
            role: "Warning" === u || "Error" === u ? "alert" : "status",
            className: (0, W.default)(
              "foundation-web-system-banner w-full flex items-center gap-medium radius-medium stroke-none padding-y-medium padding-x-large",
              p,
              h
            ),
            ...f
          },
          r.default.createElement(
            "div",
            { className: "flex items-center gap-medium grow-1 basis-0" },
            a &&
              r.default.createElement(Q.Icon, {
                name: "Info" === u && o ? o : e5[u],
                size: "Large",
                className: (0, W.default)("shrink-0"),
                style: { color: "Standard" === i ? C : E }
              }),
            r.default.createElement(
              "div",
              { className: "flex flex-col gap-xsmall grow-1 basis-0" },
              r.default.createElement(
                "div",
                {
                  className: (0, W.default)(
                    "text-title-medium text-truncate-end",
                    "Standard" === i ? "content-emphasis" : ""
                  ),
                  style: { color: "Emphasis" === i ? v : void 0 }
                },
                n
              ),
              l &&
                r.default.createElement(
                  "div",
                  {
                    className: (0, W.default)(
                      "text-body-medium text-truncate-split",
                      "Standard" === i ? "content-default" : ""
                    ),
                    style: { color: "Emphasis" === i ? F : void 0 }
                  },
                  l
                )
            )
          ),
          (s || c || m) &&
            r.default.createElement(
              "div",
              { className: "flex items-center justify-end gap-small shrink-0" },
              null != c
                ? c
                : s &&
                    d &&
                    r.default.createElement(
                      eF.Button,
                      {
                        size: "Small",
                        variant: "Standard",
                        onClick: d,
                        className: (0, W.default)(S),
                        style: { color: E }
                      },
                      s
                    ),
              m &&
                r.default.createElement(e2.CloseAffordance, {
                  variant: "Utility",
                  size: "Small",
                  isCircular: !0,
                  style: { color: E || void 0 },
                  "aria-label": g,
                  onClick: m
                })
            )
        );
      });
    function te() {
      let e = (0, i._)([
        "\n        transform: translateY(",
        "px) translateX(",
        "px)\n          rotate(",
        "deg);\n      "
      ]);
      return (
        (te = function () {
          return e;
        }),
        e
      );
    }
    let tt = r.default.createContext({
        activeAnnotationId: null,
        updateActiveAnnotationId: void 0
      }),
      tn = (e) => {
        let { children: t } = e,
          [n, l] = (0, r.useState)(null),
          [, a] = (0, r.useTransition)(),
          o = (0, r.useCallback)(
            (e) => {
              a(() => {
                l(e);
              });
            },
            [a]
          ),
          i = (0, r.useMemo)(
            () => ({ activeAnnotationId: n, updateActiveAnnotationId: o }),
            [n, o]
          );
        return r.default.createElement(tt.Provider, { value: i }, t);
      },
      tl = (0, s.makeStyles)()((e) => ({
        tooltipContainer: {
          padding: "0",
          margin: "0",
          borderRadius: e.border.radius.small.borderRadius,
          overflow: "hidden"
        },
        icon: {
          backgroundColor: e.palette.surface[300],
          boxSizing: "border-box",
          fontSize: "28px",
          padding: "4px",
          borderRadius: e.border.radius.small.borderRadius,
          boxShadow: e.elevation.subtle
        },
        iconActive: {
          backgroundColor: e.palette.content.standard,
          color: e.palette.content.inverse
        }
      }));
    var ta,
      to,
      ti,
      tr,
      tu,
      ts,
      td,
      tc,
      tm,
      tg,
      th = r.default.memo((e) => {
        let { annotation: t } = e,
          {
            classes: { tooltipContainer: n, icon: l, iconActive: a },
            cx: o
          } = tl(),
          { activeAnnotationId: i } = (0, r.useContext)(tt),
          u = i === t.id;
        return r.default.createElement(
          d.Tooltip,
          { title: t.tooltip, placement: "top", classes: { tooltip: n }, open: i === t.id },
          r.default.createElement(t.Icon, { classes: { root: o(l, { [a]: u }) } })
        );
      });
    let tf = (e) => {
        let { annotationPosition: t, upperBound: n } = e,
          { startLeft: l, endLeft: a } = t;
        return void 0 === a ? l : Math.max(Math.min((l + a) / 2, n), 0);
      },
      tp = (e) => {
        let { annotation: t, formatXForAnnotationTooltip: n } = e,
          l = null == n ? void 0 : n(t.start, t.id);
        return {
          title: l
            ? r.default.createElement(
                m.Typography,
                { variant: "body2", style: { fontSize: "11px" } },
                l
              )
            : void 0,
          placement: "bottom",
          open: !0,
          slotProps: {
            popper: {
              sx: {
                ["&."
                  .concat(c.tooltipClasses.popper, '[data-popper-placement*="bottom"] .')
                  .concat(c.tooltipClasses.tooltip)]: { marginTop: "1px" }
              },
              modifiers: [
                { name: "flip", enabled: !1 },
                { name: "preventOverflow", enabled: !1 }
              ]
            }
          }
        };
      };
    var tv =
      (((to = {}).Blue = "Blue"),
      (to.Green = "Green"),
      (to.Purple = "Purple"),
      (to.Yellow = "Yellow"),
      (to.Cyan = "Cyan"),
      (to.Red = "Red"),
      (to.Purple2 = "Purple2"),
      (to.Orange = "Orange"),
      (to.Blue2 = "Blue2"),
      (to.Green2 = "Green2"),
      (to.Purple3 = "Purple3"),
      (to.Yellow2 = "Yellow2"),
      (to.Yellow3 = "Yellow3"),
      (to.Green3 = "Green3"),
      (to.Cyan2 = "Cyan2"),
      (to.Blue3 = "Blue3"),
      (to.Purple4 = "Purple4"),
      (to.White = "White"),
      to);
    let tF = {
        Blue: "#3C64FA",
        Green: "#44DA87",
        Purple: "#DA40FC",
        Yellow: "#F7D469",
        Cyan: "#0CC3E4",
        Red: "#F45B52",
        Purple2: "#B384FB",
        Orange: "#FC9855",
        Blue2: "#73A0FA",
        Green2: "#8FEAB7",
        Purple3: "#EA91F8",
        Yellow2: "#FADE89",
        Yellow3: "#F0E59D",
        Green3: "#6AD79B",
        Cyan2: "#16A7A5",
        Blue3: "#596AAC",
        Purple4: "#4F2687",
        White: "#F7F7F8"
      },
      tC = {
        Blue: "#3C64FA",
        Green: "#27C473",
        Purple: "#DA40FC",
        Yellow: "#F3BA2B",
        Cyan: "#0AB4D6",
        Red: "#F45B52",
        Purple2: "#9E58F3",
        Orange: "#FC9855",
        Blue2: "#284DE2",
        Green2: "#0F995B",
        Purple3: "#A61BC6",
        Yellow2: "#D4A121",
        Yellow3: "#F0E59D",
        Green3: "#6AD79B",
        Cyan2: "#16A7A5",
        Blue3: "#596AAC",
        Purple4: "#4F2687",
        White: "#F7F7F8"
      },
      tS = [
        "Blue",
        "Green",
        "Purple",
        "Yellow",
        "Cyan",
        "Red",
        "Purple2",
        "Orange",
        "Blue2",
        "Green2",
        "Purple3",
        "Yellow2"
      ],
      tE = [...tS, "Yellow3", "Green3", "Cyan2", "Blue3", "Purple4"],
      tb = tS.map((e) => tC[e]),
      tA = tS.map((e) => tF[e]),
      ty = (e, t) => ("light" === t.palette.mode ? tC[e] : tF[e]),
      tx = (e) => {
        let t = "dark" === e.palette.mode;
        return {
          axis: e.palette.content.disabled,
          gridLine: e.palette.surface.outline,
          axisValueText: e.palette.content.muted,
          legendText: e.palette.content.standard,
          dataLabelText: e.palette.content.standard,
          benchmarkLineColor: e.palette.content.standard,
          comparisonLineColor: ty("Blue", e),
          tooltipText: e.palette.content.inverse,
          tooltipBackground: e.palette.content.standard,
          columnTotalSeriesLineColor: e.palette.content.standard,
          zoneLegendSymbol: "#BBBCBE",
          annotationVerticalLine: t ? e.palette.common.white : e.palette.common.black,
          annotationVerticalRange: ty("Red", e)
        };
      },
      tM = (e, t) =>
        "dark" === e.palette.mode
          ? "standard" === t
            ? e.palette.content.standard
            : e.palette.content.inverse
          : "standard" === t
            ? e.palette.content.inverse
            : e.palette.content.standard,
      tN = (e) => void 0 !== e.end && void 0 !== e.endLeft,
      tw = (e) => {
        let { annotation: t, chartPlotPosition: n } = e,
          { activeAnnotationId: l } = (0, r.useContext)(tt),
          a = (0, g.useTheme)(),
          { left: o, top: i, height: u, width: s } = n,
          { rangeAnnotationConfig: d, startLeft: c, endLeft: m } = t,
          h = (0, r.useMemo)(() => {
            let e = (null == d ? void 0 : d.curtainColor)
                ? ty(d.curtainColor, a)
                : tx(a).annotationVerticalRange,
              n = "1px dashed ".concat(e),
              r = Math.max(o + c, o),
              g = l === t.id ? 0.25 : 0.2;
            return {
              position: "absolute",
              height: u,
              top: i + 1,
              left: r,
              width: Math.min(m + o, s + o) - r,
              borderLeft: c >= 0 ? n : void 0,
              borderRight: m <= s ? n : void 0,
              backgroundColor: "".concat(e).concat(Math.round(255 * g).toString(16))
            };
          }, [null == d ? void 0 : d.curtainColor, a, o, c, l, t.id, u, i, m, s]);
        return r.default.createElement("div", { style: h });
      },
      tD = (0, s.makeStyles)()((e, t, n) => ({
        annotationIconContainer: {
          display: "flex",
          transformOrigin: "bottom left",
          transition: "0.1s ease",
          transitionProperty: "transform"
        },
        annotationGroup: {
          position: "absolute",
          boxSizing: "border-box",
          display: "grid",
          zIndex: 2,
          borderRadius: e.border.radius.xsmall.borderRadius,
          maxWidth: 28,
          transition: "0.1s ease",
          transform: "translateX(-14px)",
          transitionProperty:
            "z-index, border-radius, padding, background-color, transform, opacity, max-height, max-width",
          "&:before": { content: "''", position: "absolute", height: 28, width: 8, left: -8 },
          "&:after": { content: "''", position: "absolute", height: 8, width: 28, top: -8 }
        },
        annotationGroupActive: {
          maxWidth: "unset",
          zIndex: e.zIndex.tooltip,
          padding: "6px",
          gap: "6px",
          transform: "translateX(-20px) translateY(-6px)",
          opacity: 1,
          backgroundColor: e.palette.surface.outline,
          ["& .".concat(n.annotationIconContainer)]: { transform: "translateX(0) rotate(0deg)" }
        },
        dimmedAnnotationGroup: { opacity: 0.2 }
      }));
    var tB = r.default.memo((e) => {
      let { group: t, chartPlotPosition: n, formatXForAnnotationTooltip: l } = e,
        {
          classes: {
            annotationGroup: a,
            dimmedAnnotationGroup: o,
            annotationIconContainer: i,
            annotationGroupActive: u
          },
          css: s,
          cx: c,
          theme: g
        } = tD(),
        { activeAnnotationId: h, updateActiveAnnotationId: f } = (0, r.useContext)(tt),
        { left: p, top: v, height: F, width: C } = n,
        S = (0, r.useRef)(null),
        E = (0, r.useMemo)(
          () =>
            t
              .map((e) => {
                let { id: t } = e;
                return t;
              })
              .join("-"),
          [t]
        ),
        b = (0, r.useMemo)(
          () =>
            h === E ||
            t.some((e) => {
              let { id: t } = e;
              return t === h;
            }),
          [h, E, t]
        ),
        A = tf({ annotationPosition: t[0], upperBound: C }),
        y = (0, r.useMemo)(
          () => Math.min(Math.max(Math.floor((C - (A - 14 - 6)) / 34), 1), t.length, 7),
          [C, t.length, A]
        ),
        x = (0, r.useMemo)(
          () => ({ left: p + A, top: v, gridTemplateColumns: "repeat(".concat(y, ", 28px)") }),
          [p, v, y, A]
        ),
        M = (0, r.useCallback)(() => {
          null == f || f(E);
        }, [E, f]),
        N = (0, r.useCallback)(() => {
          null == f || f(null);
        }, [f]),
        w = (0, r.useCallback)(
          (e) => {
            null == f || f(e.currentTarget.id);
          },
          [f]
        ),
        D = (0, r.useMemo)(() => {
          let e = y * Math.floor(F / 34) - 1,
            n = t.slice(0, b ? e : 4),
            l = n.map((e, t) => {
              let l = t % y,
                a = Math.floor(t / y),
                o = s(te(), -(28 * a), -(28 * l), -8 * (n.length - t - 1));
              return r.default.createElement(
                "div",
                { key: e.id, id: e.id, onMouseEnter: b ? w : void 0, className: c(i, o) },
                r.default.createElement(th, { annotation: e })
              );
            });
          return (
            b &&
              l.length < t.length &&
              l.push(
                r.default.createElement(
                  m.Typography,
                  { variant: "h3", display: "block", textAlign: "center", key: "ellipsis" },
                  "..."
                )
              ),
            l
          );
        }, [F, y, t, b, s, w, c, i]),
        [B, L] = (0, r.useState)("Ended"),
        R = (0, r.useCallback)((e) => {
          "transform" === e.propertyName && L("Ended");
        }, []);
      (0, r.useEffect)(() => {
        b && L("inTransition");
      }, [b]);
      let O = (0, r.useMemo)(() => {
          let e = [];
          t.forEach((t) => {
            var l;
            tN(t) &&
              (null == (l = t.rangeAnnotationConfig) ? void 0 : l.curtainStayOnChart) &&
              e.push(
                r.default.createElement(tw, { key: t.id, annotation: t, chartPlotPosition: n })
              );
          });
          let l = t.find((e) => {
            let { id: t } = e;
            return t === h;
          });
          return l
            ? (tN(l) &&
                e.push(
                  r.default.createElement(tw, { key: l.id, annotation: l, chartPlotPosition: n })
                ),
              e)
            : e.length
              ? e
              : null;
        }, [h, n, t]),
        k = (0, r.useMemo)(() => {
          let e = S.current;
          if (!e || !b || "Ended" !== B) return null;
          let n = t.findIndex((e) => {
            let { id: t } = e;
            return t === h;
          });
          if (-1 === n) return null;
          let a = t[n];
          if (tN(a)) return null;
          let o = tf({ annotationPosition: a, upperBound: C }),
            i = Math.floor((e.offsetWidth - 6) / 34),
            u = {
              position: "absolute",
              border: "0.5px dashed ".concat(g.palette.content.standard),
              zIndex: g.zIndex.tooltip
            },
            s = {
              ...u,
              height: 4,
              top: e.offsetTop + e.offsetHeight - 6,
              left: p + A + (n % i) * 34
            },
            c = s.left < p + o,
            m = {
              ...u,
              top: s.top + s.height + 1,
              left: c ? s.left : p + o,
              width: Math.abs(s.left - (p + o))
            },
            f = { ...u, top: m.top + 1, left: p + o, height: F - m.top + 6 };
          return r.default.createElement(
            r.default.Fragment,
            null,
            r.default.createElement("div", { style: s }),
            r.default.createElement("div", { style: m }),
            r.default.createElement(
              d.Tooltip,
              tp({ annotation: a, formatXForAnnotationTooltip: l }),
              r.default.createElement("div", { style: f })
            )
          );
        }, [b, B, t, C, g.palette.content.standard, g.zIndex.tooltip, p, A, F, l, h]);
      return r.default.createElement(
        r.default.Fragment,
        null,
        r.default.createElement(
          "div",
          {
            ref: S,
            className: c(a, { [o]: !b && null !== h, [u]: b }),
            style: x,
            onMouseEnter: M,
            onMouseLeave: N,
            onTransitionEnd: R
          },
          D
        ),
        k,
        O
      );
    });
    let tL = (0, s.makeStyles)()(() => ({
      annotationContainer: {
        display: "flex",
        position: "absolute",
        transition: "0.2s ease",
        transitionProperty: "opacity",
        zIndex: 2
      },
      dimmed: { opacity: 0.2 }
    }));
    var tR = r.default.memo((e) => {
      let { annotation: t, chartPlotPosition: n, formatXForAnnotationTooltip: l } = e,
        {
          classes: { annotationContainer: a, dimmed: o },
          cx: i,
          theme: u
        } = tL(),
        { activeAnnotationId: s, updateActiveAnnotationId: c } = (0, r.useContext)(tt),
        m = t.id === s,
        { left: g, top: h, width: f, height: p } = n,
        v = (0, r.useMemo)(
          () => ({
            left: g + tf({ annotationPosition: t, upperBound: f }),
            top: h,
            transform: "translateX(-50%)"
          }),
          [t, g, h, f]
        ),
        F = (0, r.useMemo)(() => {
          var e;
          if (tN(t) && (null == (e = t.rangeAnnotationConfig) ? void 0 : e.curtainStayOnChart))
            return r.default.createElement(tw, { annotation: t, chartPlotPosition: n });
          if (!m) return null;
          if (tN(t)) return r.default.createElement(tw, { annotation: t, chartPlotPosition: n });
          let a = {
              position: "absolute",
              height: p,
              left: v.left,
              top: h,
              border: "0.5px dashed ".concat(tx(u).annotationVerticalLine)
            },
            o = tp({ annotation: t, formatXForAnnotationTooltip: l });
          return r.default.createElement(
            d.Tooltip,
            o,
            r.default.createElement("div", { style: a })
          );
        }, [m, t, p, n, h, v.left, l, u]),
        C = (0, r.useCallback)(() => {
          null == c || c(t.id);
        }, [t.id, c]),
        S = (0, r.useCallback)(() => {
          null == c || c(null);
        }, [c]);
      return r.default.createElement(
        r.default.Fragment,
        null,
        F,
        r.default.createElement(
          "div",
          {
            className: i(a, { [o]: null !== s && !m }),
            style: v,
            onMouseEnter: C,
            onMouseLeave: S
          },
          r.default.createElement(th, { annotation: t })
        )
      );
    });
    let tO = [],
      tk = (0, s.makeStyles)()(() => ({
        chartWithAnnotationsContainer: { position: "relative" },
        chartContainer: { zIndex: 1 }
      })),
      tI = (e) => (t) => {
        let {
            classes: { chartWithAnnotationsContainer: n, chartContainer: l }
          } = tk(),
          { annotations: a, onAnnotationsPositionsUpdated: o, formatXForAnnotationTooltip: i } = t,
          [{ annotationPositions: u, chartPlotPosition: s }, d] = (0, r.useState)({
            annotationPositions: [],
            chartPlotPosition: { left: 0, top: 0, height: 0, width: 0 }
          }),
          c = (0, r.useCallback)(
            (e) => {
              let { labelsPosition: t, chartPlotPosition: n } = e;
              (d((e) => {
                let l;
                return (l = e.chartPlotPosition).left === n.left &&
                  l.top === n.top &&
                  l.height === n.height &&
                  l.width === n.width &&
                  ((e, t) => {
                    if (e.length !== t.length) return !1;
                    for (let n = 0; n < e.length; n += 1) {
                      let l = e[n],
                        a = t[n];
                      if (l.id !== a.id || l.startLeft !== a.startLeft || l.endLeft !== a.endLeft)
                        return !1;
                    }
                    return !0;
                  })(e.annotationPositions, t)
                  ? e
                  : { annotationPositions: t, chartPlotPosition: n };
              }),
                null == o || o({ labelsPosition: t, chartPlotPosition: n }));
            },
            [o]
          ),
          m = ((e) => {
            let { annotationPositions: t, annotations: n, chartPlotWidth: l } = e,
              a = (0, r.useMemo)(
                () =>
                  [...t].sort(
                    (e, t) =>
                      tf({ annotationPosition: e, upperBound: l }) -
                      tf({ annotationPosition: t, upperBound: l })
                  ),
                [t, l]
              );
            return (0, r.useMemo)(() => {
              if (!(null == n ? void 0 : n.length)) return tO;
              let e = [];
              return (
                a.forEach((t) => {
                  let a = n.find((e) => e.id === t.id);
                  if (!a) return;
                  let o = tf({ annotationPosition: t, upperBound: l }),
                    i = e.length > 0 ? e[e.length - 1] : null;
                  if (i)
                    if (Array.isArray(i))
                      tf({ annotationPosition: i[0], upperBound: l }) + 38 >= o
                        ? i.push({ ...a, ...t })
                        : e.push({ ...a, ...t });
                    else if (tf({ annotationPosition: i, upperBound: l }) + 38 >= o) {
                      let n = [i, { ...a, ...t }];
                      e[e.length - 1] = n;
                    } else e.push({ ...a, ...t });
                  else e.push({ ...a, ...t });
                }),
                e
              );
            }, [n, l, a]);
          })({ annotationPositions: u, annotations: a, chartPlotWidth: s.width }),
          g = (0, r.useMemo)(() => {
            let e = [];
            return (
              m.forEach((t) => {
                Array.isArray(t)
                  ? e.push(
                      r.default.createElement(tB, {
                        key: t[0].id,
                        group: t,
                        chartPlotPosition: s,
                        formatXForAnnotationTooltip: i
                      })
                    )
                  : e.push(
                      r.default.createElement(tR, {
                        key: t.id,
                        annotation: t,
                        chartPlotPosition: s,
                        formatXForAnnotationTooltip: i
                      })
                    );
              }),
              e
            );
          }, [m, s, i]);
        return r.default.createElement(
          tn,
          null,
          r.default.createElement(
            "div",
            { className: n },
            g,
            r.default.createElement(
              "div",
              { className: l },
              r.default.createElement(e, {
                ...t,
                onAnnotationsPositionsUpdated: (null == a ? void 0 : a.length) ? c : void 0
              })
            )
          )
        );
      };
    tI.displayName = "WithAnnotations";
    let tT = r.default.createContext(!1),
      tP = (e) => {
        let { value: t, children: n } = e;
        return r.default.createElement(tT.Provider, { value: t }, n);
      };
    var tz =
        (((ti = {}).Spline = "spline"),
        (ti.Area = "area"),
        (ti.Column = "column"),
        (ti.Map = "map"),
        (ti.Bar = "bar"),
        (ti.Pie = "pie"),
        (ti.Treemap = "treemap"),
        (ti.Sankey = "sankey"),
        ti),
      tW = (((tr = {}).Normal = "Normal"), (tr.Minimal = "Minimal"), tr),
      tV = (((tu = {}).Month = "month"), (tu.Day = "day"), (tu.Minute = "minute"), tu),
      tH =
        (((ts = {}).Normal = "Normal"),
        (ts.Total = "Total"),
        (ts.Benchmark = "Benchmark"),
        (ts.Projection = "Projection"),
        (ts.Quota = "Quota"),
        (ts.Comparison = "Comparison"),
        (ts.Scatter = "Scatter"),
        (ts.Noise = "Noise"),
        ts);
    let t_ = (e) =>
        e
          .replaceAll(/&/g, "&amp;")
          .replaceAll(/</g, "&lt;")
          .replaceAll(/>/g, "&gt;")
          .replaceAll(/"/g, "&quot;")
          .replaceAll(/'/g, "&#039;"),
      tG = (e) =>
        function () {
          for (var t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
          return t_(e(...n));
        },
      tj = /[\u0000-\u001F\u007F]/,
      tX = (e) => {
        if ("string" != typeof e || tj.test(e)) return "";
        let t = e.trim();
        return /^https:\/\//i.test(t) ? t_(t) : "";
      };
    var tU =
      (((td = tU || {}).WhiteSpace = " "),
      (td.BulletPoint = "●"),
      (td.FigureSpace = " "),
      (td.HollowBulletPoint = "○"),
      td);
    let tK = { 0: 30, 1: 34, 2: 42 },
      tq = new Set(Object.values(tH)),
      tY = (e) => {
        if ("object" != typeof e || null === e) return {};
        let { imageUrl: t, seriesType: n, zones: l } = e;
        return {
          imageUrl: "string" == typeof t ? t : void 0,
          seriesType: tq.has(n) ? n : void 0,
          zones: Array.isArray(l) ? l : void 0
        };
      },
      tQ = /__chip\(([^)]+)\)__/g,
      tZ = (e) => {
        let { key: t, value: n, shouldRenderDot: l, theme: a, imageUrl: o, color: i } = e,
          r = "string" == typeof i ? i : void 0,
          u = tx(a).tooltipBackground === r,
          s = u ? tU.HollowBulletPoint : tU.BulletPoint,
          d = '<span style="'
            .concat(u ? "" : "color:".concat(r, ";"), '">')
            .concat(s)
            .concat(tU.WhiteSpace, "</span>"),
          c = tX(o),
          m = '<span style="font-weight: 600;">'
            .concat(l ? d : "")
            .concat(
              (c
                ? '<img src="'.concat(
                    c,
                    '" alt="" style="width: 56px; height: 32px; vertical-align: middle; border: 4px solid white; border-radius: 4px;"/>'
                  )
                : "") || t,
              "</span>"
            );
        return '<div><span style="display:inline-flex;justify-content:space-between;flex-grow:1;font-size:11px;width:100%;align-items:center;">'
          .concat(m)
          .concat(tU.FigureSpace)
          .concat("<span>".concat(n, "</span>"), "</span></div>");
      },
      tJ = (e) => {
        let { formatSeriesKeyForPoint: t, formatSeriesValueForPoint: n } = e,
          l = (0, h.useMediaQuery)((e) => e.breakpoints.down("Medium")),
          a = (0, h.useMediaQuery)((e) => e.breakpoints.down("Large")),
          o = (0, h.useMediaQuery)((e) => e.breakpoints.down("XLarge")),
          i = (0, g.useTheme)();
        return (0, r.useCallback)(
          function () {
            let { x: e, y: r, color: u, series: s, name: d } = this;
            if (null == r) return "";
            let { custom: c, id: m } = s.userOptions,
              { imageUrl: g, seriesType: h, zones: f } = tY(c),
              p = s.chart.series.find((e) => e.data.length > 0),
              v = [...s.chart.series].toReversed().find((e) => e.data.length > 0),
              F = t({
                seriesName: s.name,
                seriesType: h,
                x: null != d ? d : e,
                seriesId: m,
                zones: f
              }),
              C = 1 / 0;
            return (
              l ? (C = tK[0]) : a ? (C = tK[1]) : o && (C = tK[2]),
              tZ({
                key: ((e, t) => {
                  let n = ((e) => {
                      let t = [],
                        n = 0,
                        l = RegExp(tQ.source, "g"),
                        a = l.exec(e);
                      for (; null !== a;)
                        (a.index > n && t.push({ kind: "text", value: e.slice(n, a.index) }),
                          t.push({ kind: "chip", label: a[1] }),
                          (n = a.index + a[0].length),
                          (a = l.exec(e)));
                      return (n < e.length && t.push({ kind: "text", value: e.slice(n) }), t);
                    })(e),
                    l = t,
                    a = !1,
                    o = [];
                  for (let e of n)
                    "chip" === e.kind
                      ? o.push(
                          '<span style="display:inline-block;background-color:#696A6D;color:#FFFFFF;font-size:12px;font-weight:600;padding:2px 6px;border-radius:4px;margin-left:4px;vertical-align:baseline;">'.concat(
                            t_(e.label),
                            "</span>"
                          )
                        )
                      : !a &&
                        l > 0 &&
                        (e.value.length <= l
                          ? (o.push(t_(e.value)), (l -= e.value.length))
                          : (o.push("".concat(t_(e.value.slice(0, l)), "...")), (l = 0), (a = !0)));
                  return o.join("");
                })(F, C),
                value: tG(n)({ y: r, seriesType: h, seriesId: m, zones: f }),
                theme: i,
                color: u,
                imageUrl: g,
                shouldRenderDot: p !== v
              })
            );
          },
          [t, n, o, a, l, i]
        );
      },
      t$ = () => {
        let { tooltipBackground: e } = tx((0, g.useTheme)());
        return "background-color:".concat(
          e,
          ";border-radius:4px;padding-top:4px;padding-bottom:4px;padding-left:6px;padding-right:6px;line-height:1.6;"
        );
      },
      t0 = (e) => {
        let { formatX: t } = e,
          n = t$(),
          l = (0, h.useMediaQuery)((e) => e.breakpoints.up("Medium"));
        return (0, r.useCallback)(
          function (e) {
            var a, o;
            let { x: i } = this,
              r = null != (a = e.chart.hoverPoints) ? a : void 0,
              u = null != (o = null == r ? void 0 : r.length) ? o : 0,
              s = l && u > 6,
              d = r;
            (null == r ? void 0 : r.length) &&
              (d = [...r].sort((e, t) => {
                let { seriesType: n } = tY(e.series.options.custom),
                  { seriesType: l } = tY(t.series.options.custom);
                return n === l ? 0 : n === tH.Total ? -1 : 1;
              }));
            let c = { ...this, points: d },
              m = e.defaultFormatter.call(c, e).slice(0, 11);
            if (Array.isArray(m)) {
              let e = void 0 === i ? "" : tG(t)(i),
                l = e ? '<div style="'.concat(n, '">').concat(e, "</div>") : e,
                [, ...a] = m;
              if (!s)
                return [
                  l,
                  ...a
                    .filter(Boolean)
                    .map((e) => '<div style="'.concat(n, '">').concat(e, "</div>"))
                ];
              let o = Math.ceil(a.length / 2),
                r = "<div>".concat(a.slice(0, o).join(""), "</div>"),
                u = "<div>".concat(a.slice(o).join(""), "</div>");
              return [
                l,
                '<div style="display:flex;column-gap:8px;'
                  .concat(n, '">')
                  .concat(r)
                  .concat(u, "</div>")
              ];
            }
            return m;
          },
          [t, l, n]
        );
      };
    var t1 = { exports: {} };
    t1.exports;
    var t2 = (tg ||
      ((tg = 1),
      "u" > typeof self && self,
      (t1.exports = (function (e) {
        var t = [
          function (e, t, n) {
            function l() {
              return (l = Object.assign.bind()).apply(this, arguments);
            }
            function a(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var n = 0, l = Array(t); n < t; n++) l[n] = e[n];
              return l;
            }
            function o(e) {
              return (o =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    })(e);
            }
            (Object.defineProperty(t, "__esModule", { value: !0 }),
              n.d(t, "HighchartsReact", function () {
                return s;
              }));
            var i = n(1),
              r = n.n(i),
              u = i.useLayoutEffect,
              s = Object(i.memo)(
                Object(i.forwardRef)(function (e, t) {
                  var n = Object(i.useRef)(),
                    s = Object(i.useRef)(),
                    d = Object(i.useRef)(e.constructorType),
                    c = Object(i.useRef)(e.highcharts);
                  return (
                    u(
                      function () {
                        function t() {
                          var t = e.highcharts || ("object" === o(window) && window.Highcharts),
                            l = e.constructorType || "chart";
                          t
                            ? t[l]
                              ? e.options
                                ? (s.current = t[l](n.current, e.options, e.callback))
                                : console.warn('The "options" property was not passed.')
                              : console.warn(
                                  'The "constructorType" property is incorrect or some required module is not imported.'
                                )
                            : console.warn('The "highcharts" property was not passed.');
                        }
                        if (s.current) {
                          if (!1 !== e.allowChartUpdate)
                            if (e.constructorType !== d.current || e.highcharts !== c.current)
                              ((d.current = e.constructorType), (c.current = e.highcharts), t());
                            else if (!e.immutable && s.current) {
                              var l, i;
                              (l = s.current).update.apply(
                                l,
                                [e.options].concat(
                                  (function (e) {
                                    if (Array.isArray(e)) return a(e);
                                  })((i = e.updateArgs || [!0, !0])) ||
                                    (function (e) {
                                      if (
                                        ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                                        null != e["@@iterator"]
                                      )
                                        return Array.from(e);
                                    })(i) ||
                                    (function (e) {
                                      if (e) {
                                        if ("string" == typeof e) return a(e, void 0);
                                        var t = Object.prototype.toString.call(e).slice(8, -1);
                                        return (
                                          "Object" === t &&
                                            e.constructor &&
                                            (t = e.constructor.name),
                                          "Map" === t || "Set" === t
                                            ? Array.from(e)
                                            : "Arguments" === t ||
                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                              ? a(e, void 0)
                                              : void 0
                                        );
                                      }
                                    })(i) ||
                                    (function () {
                                      throw TypeError(
                                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                      );
                                    })()
                                )
                              );
                            } else t();
                        } else t();
                      },
                      [
                        e.options,
                        e.allowChartUpdate,
                        e.updateArgs,
                        e.containerProps,
                        e.highcharts,
                        e.constructorType
                      ]
                    ),
                    u(function () {
                      return function () {
                        s.current && (s.current.destroy(), (s.current = null));
                      };
                    }, []),
                    Object(i.useImperativeHandle)(
                      t,
                      function () {
                        return {
                          get chart() {
                            return s.current;
                          },
                          container: n
                        };
                      },
                      []
                    ),
                    r.a.createElement("div", l({}, e.containerProps, { ref: n }))
                  );
                })
              );
            t.default = s;
          },
          function (t, n) {
            t.exports = e;
          }
        ];
        function n(e) {
          if (l[e]) return l[e].exports;
          var a = (l[e] = { i: e, l: !1, exports: {} });
          return (t[e].call(a.exports, a, a.exports, n), (a.l = !0), a.exports);
        }
        var l = {};
        return (
          (n.m = t),
          (n.c = l),
          (n.d = function (e, t, l) {
            n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: l });
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return (n.d(t, "a", t), t);
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 0))
        );
      })(r.default))),
    (tc = t1.exports) && tc.__esModule && Object.prototype.hasOwnProperty.call(tc, "default"))
      ? tc.default
      : tc;
    let t6 = null,
      t3 = !1,
      t4 = new Set(),
      t5 = (e) => (
        t4.add(e),
        () => {
          t4.delete(e);
        }
      ),
      t7 = () => t3,
      t9 = () => !1,
      t8 = () =>
        null != t6
          ? t6
          : (t6 = Promise.all([
              e.A(756816),
              e.A(153168),
              e.A(611713),
              e.A(554821),
              e.A(778530),
              e.A(876820)
            ]).then(() => {
              ((t3 = !0), t4.forEach((e) => e()));
            }));
    "u" > typeof o.default &&
      (null == (ta = o.default.env) ? void 0 : ta.NODE_ENV) !== "test" &&
      t8().catch(() => void 0);
    let ne = { thousandsSep: ",", numericSymbols: ["K", "M", "B", "T"] },
      nt = [!0, !0, !1];
    var nn = r.default.memo((e) => {
      let {
          constructorType: t,
          options: n,
          showLocalizedTime: l,
          chartUpdatePolicy: a,
          onChartDependencyStatus: o
        } = e,
        i,
        s = null != a ? a : "default",
        d = (0, r.useSyncExternalStore)(t5, t7, t9),
        c = (0, r.useMemo)(() => ("light" === i.palette.mode ? tb : tA), [(i = (0, g.useTheme)())]),
        m = (0, r.useRef)(null),
        h = (0, r.useRef)(o);
      ((0, r.useLayoutEffect)(() => {
        h.current = o;
      }, [o]),
        (0, r.useEffect)(() => {
          var e, t;
          if (t3)
            return (
              null == (e = h.current) ||
                e.call(h, { dependency: "highchartsModules", status: "ready" }),
              () => {}
            );
          let n = !0;
          return (
            null == (t = h.current) ||
              t.call(h, { dependency: "highchartsModules", status: "pending" }),
            t8()
              .then(() => {
                var e;
                n &&
                  (null == (e = h.current) ||
                    e.call(h, { dependency: "highchartsModules", status: "ready" }));
              })
              .catch((e) => {
                var t;
                n &&
                  (null == (t = h.current) ||
                    t.call(h, {
                      dependency: "highchartsModules",
                      status: "failed",
                      error: e instanceof Error ? e : Error("Highcharts module loading failed")
                    }));
              }),
            () => {
              n = !1;
            }
          );
        }, []),
        (0, r.useMemo)(() => {
          u.default.setOptions({
            lang: ne,
            colors: c,
            time: l ? { timezone: void 0 } : { timezone: "UTC" }
          });
        }, [c, l]));
      let f = (0, r.useMemo)(() => {
          var e, t;
          return (
            (t = {
              ...(function e(t) {
                let n = t;
                var l = {}.toString.call(t).slice(8, -1);
                if ("Set" == l) return new Set([...t].map((t) => e(t)));
                if ("Map" == l) return new Map([...t].map((t) => [e(t[0]), e(t[1])]));
                if ("Date" == l) return new Date(t.getTime());
                if ("RegExp" == l)
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
                if ("Array" == l || "Object" == l)
                  for (var a in ((n = Array.isArray(t) ? [] : {}), t)) n[a] = e(t[a]);
                return n;
              })(n),
              boost: { useGPUTranslations: !1, seriesThreshold: 100 }
            }),
            "non-animated" !== s
              ? t
              : {
                  ...t,
                  chart: { ...t.chart, animation: !1 },
                  plotOptions: {
                    ...t.plotOptions,
                    series: { ...(null == (e = t.plotOptions) ? void 0 : e.series), animation: !1 }
                  }
                }
          );
        }, [s, n]),
        p = (0, r.useMemo)(() => ("non-animated" === s ? nt : void 0), [s]);
      return ((0, r.useEffect)(() => {
        var e, t;
        let n = null == (e = m.current) ? void 0 : e.container.current,
          l = null == (t = m.current) ? void 0 : t.chart;
        if (!n || !l) return;
        let a = new IntersectionObserver(
          (e) => {
            var t;
            e[0].intersectionRatio <= 0.5 && (null == (t = l.tooltip) || t.hide());
          },
          { threshold: 0.5 }
        );
        return (
          a.observe(n),
          () => {
            a.disconnect();
          }
        );
      }, []),
      d)
        ? r.default.createElement(t2, {
            ref: m,
            highcharts: u.default,
            options: f,
            constructorType: t,
            updateArgs: p
          })
        : null;
    });
    let nl = (e) => {
        let { updateActiveAnnotationId: t } = (0, r.useContext)(tt);
        return (0, r.useMemo)(() => {
          let n = [],
            l = [];
          return (
            null == e ||
              e.forEach((e) => {
                let { id: a, start: o, end: i, rangeAnnotationConfig: r } = e,
                  u = [{ point: { x: o, y: 0, yAxis: 0, xAxis: 0 }, allowOverlap: !0 }];
                (void 0 !== i &&
                  i > o &&
                  (u.push({ point: { x: i, y: 0, yAxis: 0, xAxis: 0 }, allowOverlap: !0 }),
                  (null == r ? void 0 : r.curtainStayOnChart) &&
                    t &&
                    l.push({
                      from: o,
                      to: i,
                      color: "transparent",
                      events: {
                        mouseover() {
                          t(a.toString());
                        },
                        mouseout() {
                          t(null);
                        }
                      },
                      zIndex: 20
                    })),
                  n.push({ id: a, draggable: "", labels: u, visible: !1 }));
              }),
            { annotationOptions: n.length ? n : void 0, plotBandsOptions: l.length ? l : void 0 }
          );
        }, [e, t]);
      },
      na = (e) => {
        let { annotations: t, onAnnotationsPositionsUpdated: n } = e,
          l = (0, r.useCallback)(
            function () {
              var e;
              let t = this.plotTop,
                l = this.plotLeft,
                a = this.plotHeight,
                o = this.plotWidth,
                i = [];
              (null == (e = this.annotations) ||
                e.forEach((e) => {
                  var t, n;
                  let { userOptions: l, labels: a } = e,
                    o = null == (t = l.id) ? void 0 : t.toString();
                  if (!o) return;
                  let r =
                    null == (n = this.userOptions.annotations) ? void 0 : n.find((e) => e.id === o);
                  if (!r) return;
                  let u = ((e) => {
                    var t, n, l, a, o, i, r, u, s, d;
                    let { annotationLabels: c, annotationUserOptions: m, chart: g } = e;
                    if ((null == (t = m.labels) ? void 0 : t.length) && 2 === m.labels.length) {
                      let e,
                        t,
                        [n, l] = m.labels,
                        h = n.point.x,
                        f = l.point.x,
                        p = null == (i = g.xAxis) ? void 0 : i[0],
                        [v, F] = [
                          null != (a = null == p ? void 0 : p.min) ? a : 0,
                          null != (o = null == p ? void 0 : p.max) ? o : 0
                        ];
                      if (f < v || h > F) return;
                      let C =
                          null == c ||
                          null ==
                            (u = c.find((e) => {
                              var t;
                              let { points: n } = e;
                              return (null == n || null == (t = n[0]) ? void 0 : t.x) === h;
                            })) ||
                          null == (r = u.points)
                            ? void 0
                            : r[0],
                        S =
                          null == c ||
                          null ==
                            (d = c.find((e) => {
                              var t;
                              let { points: n } = e;
                              return (null == n || null == (t = n[0]) ? void 0 : t.x) === f;
                            })) ||
                          null == (s = d.points)
                            ? void 0
                            : s[0];
                      return (
                        void 0 !== C && void 0 !== S
                          ? ((e = C.plotX), (t = S.plotX))
                          : void 0 !== C
                            ? (t = ((e = C.plotX) / (F - v)) * (f - v))
                            : void 0 !== S
                              ? (e = ((t = S.plotX) / (F - v)) * (h - v))
                              : ((e = -Number.EPSILON), (t = g.plotWidth + Number.EPSILON)),
                        { startLeft: e, endLeft: t }
                      );
                    }
                    let h =
                      null == c || null == (l = c[0]) || null == (n = l.points)
                        ? void 0
                        : n[0].plotX;
                    if (void 0 !== h && g.isInsidePlot(h, g.plotTop)) return { startLeft: h };
                  })({ annotationLabels: a, annotationUserOptions: r, chart: this });
                  u && i.push({ id: o, ...u });
                }),
                null == n ||
                  n({
                    labelsPosition: i,
                    chartPlotPosition: { left: l, top: t, height: a, width: o }
                  }));
            },
            [n]
          ),
          [a, o] = (0, r.useMemo)(
            () =>
              (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "leading_and_trailing",
                  n = null,
                  l = null,
                  a = null,
                  o = () => !!l && (e.call(a, ...l), (l = null), (a = null), !0),
                  i = () => {
                    ((n = null),
                      ("trailing" === t || "leading_and_trailing" === t) &&
                        o() &&
                        (n = setTimeout(i, 400)));
                  };
                return [
                  function () {
                    for (var e = arguments.length, r = Array(e), u = 0; u < e; u++)
                      r[u] = arguments[u];
                    ((l = r),
                      (a = this),
                      n ||
                        (("leading" === t || "leading_and_trailing" === t) && o(),
                        (n = setTimeout(i, 400))));
                  },
                  () => {
                    n && (clearTimeout(n), (n = null));
                  }
                ];
              })(l),
            [l]
          );
        return ((0, r.useEffect)(() => o, [o]), (null == t ? void 0 : t.length) ? a : void 0);
      },
      no = (e) => {
        let t = (0, r.useCallback)(
          (t) => {
            let n, l;
            try {
              ((n = t.xAxis[0].min), (l = t.xAxis[0].max));
            } catch (e) {}
            return (void 0 !== n && void 0 !== l && (null == e || e({ minX: n, maxX: l })), !1);
          },
          [e]
        );
        return e ? t : void 0;
      },
      ni = (e) => {
        let t,
          {
            theme: n,
            chartType: l,
            chartStyleMode: a,
            onSelectChartRegion: o,
            onChartLoad: i,
            onChartRender: r
          } = e;
        switch (a) {
          case tW.Normal:
            t = 360;
            break;
          case tW.Minimal:
            t = 205;
            break;
          default:
            throw Error("Unhandled ChartStyleMode");
        }
        return {
          type: l,
          zoomType: l === tz.Map || l === tz.Bar ? "none" : "x",
          backgroundColor: "transparent",
          style: { fontFamily: n.typography.fontFamily },
          events: { selection: o, load: i, render: r },
          animation: !0,
          height: t
        };
      },
      nr = { spacingTop: 10, spacingRight: 8, spacingBottom: 0, spacingLeft: 8 },
      nu = (e) => {
        let { chartStyleMode: t, forceHideLegends: n } = e,
          l = (0, g.useTheme)();
        return (0, r.useMemo)(
          () => ({
            legend: {
              enabled: !n && t !== tW.Minimal,
              itemStyle: {
                color: tx(l).legendText,
                fontSize: "12px",
                fontWeight: "300",
                textOverflow: "ellipsis"
              },
              navigation: { style: { color: tx(l).legendText } },
              useHTML: !0,
              labelFormatter() {
                var e, t, n;
                let l = tX(
                  null == (n = this.options) || null == (t = n.custom) ? void 0 : t.imageUrl
                );
                return l
                  ? '<img src="'.concat(
                      l,
                      '" alt="" style="width: 56px; height: 32px; border: 4px solid white; border-radius: 4px;"/>'
                    )
                  : '<div style="max-width: 200px; text-overflow: ellipsis; overflow: hidden">'.concat(
                      t_(null != (e = this.name) ? e : ""),
                      "</div>"
                    );
              },
              itemHoverStyle: { color: tx(l).legendText },
              spacingBottom: 0,
              paddingBottom: 0,
              symbolRadius: 0
            },
            title: { style: { display: "none" } },
            credits: { enabled: !1 }
          }),
          [t, n, l]
        );
      },
      ns = (e, t) => ({
        fontFamily: e.typography[t].fontFamily,
        fontWeight: e.typography[t].fontWeight,
        fontStyle: e.typography[t].fontStyle,
        lineHeight: e.typography[t].lineHeight,
        letterSpacing: e.typography[t].letterSpacing,
        fontSize: e.typography[t].fontSize
      }),
      nd = (e, t) =>
        "font-family: "
          .concat(e.typography[t].fontFamily, "; font-weight: ")
          .concat(e.typography[t].fontWeight, "; font-style: ")
          .concat(e.typography[t].fontStyle, "; line-height: ")
          .concat(e.typography[t].lineHeight, "; letter-spacing: ")
          .concat(e.typography[t].letterSpacing, "; font-size: ")
          .concat(e.typography[t].fontSize, ";"),
      nc = (0, s.makeStyles)()((e) => ({
        iconStyle: { fill: e.palette.content.standard, verticalAlign: "bottom" }
      })),
      nm = (e) => {
        let { formatDataLabel: t, LeadingIcon: n, getPointMetadata: l } = e,
          {
            classes: { iconStyle: a }
          } = nc(),
          o = ((e) => {
            let [t, n] = (0, r.useState)(null);
            return (
              (0, r.useEffect)(() => {
                let t = null,
                  l = null,
                  a = setTimeout(() => {
                    let a = document.createElement("div"),
                      o = (0, T.createRoot)(a);
                    ((t = o),
                      (0, I.flushSync)(() => {
                        o.render(e());
                      }),
                      (l = setTimeout(() => {
                        let { innerHTML: e } = a;
                        n(e);
                      })));
                  });
                return () => {
                  (clearTimeout(a), l && clearTimeout(l), null == t || t.unmount());
                };
              }, [e]),
              t
            );
          })(
            (0, r.useCallback)(
              () =>
                void 0 !== n
                  ? r.default.createElement(n, {
                      color: "inherit",
                      fontSize: "small",
                      classes: { root: a }
                    })
                  : null,
              [n, a]
            )
          );
        return (
          o && u.default.pushUnique(u.default.AST.allowedAttributes, "viewBox"),
          (0, r.useCallback)(
            function () {
              let { y: e, series: n } = this;
              if (null == e) return "";
              let a = l(this);
              if (null === a) return "";
              let i = t_(String(t ? t({ y: e, ...a, seriesName: n.name }) : "".concat(e)));
              return o ? "".concat(o).concat(tU.WhiteSpace).concat(i) : i;
            },
            [t, o, l]
          )
        );
      },
      ng = (e, t) => {
        let n = Math.min(e, t);
        return n >= 400 ? 14 : n >= 300 ? 12 : 10;
      },
      nh = {
        measureText: function (e, n) {
          let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Arial",
            a =
              void 0 !== t
                ? t
                : "u" < typeof document
                  ? ((t = null), null)
                  : (t = document.createElement("canvas").getContext("2d"));
          return a && "function" == typeof a.measureText
            ? ((a.font = "".concat(n, "px ").concat(l)), a.measureText(e).width)
            : e.length * n * 0.6;
        }
      },
      nf = () => {
        let e = (0, g.useTheme)();
        return (0, r.useMemo)(() => {
          let { tooltipBackground: t } = tx(e);
          return {
            condition: { maxHeight: 150 },
            chartOptions: {
              tooltip: { split: !1, shared: !0, backgroundColor: t, padding: 0, borderRadius: 4 },
              annotations: void 0
            }
          };
        }, [e]);
      },
      np = () =>
        (0, r.useMemo)(
          () => ({
            condition: { maxWidth: 400 },
            chartOptions: { xAxis: { labels: { rotation: -45 } } }
          }),
          []
        ),
      nv = (e, t, n, l, a) => {
        let o = n ? ty(n, e) : void 0;
        switch (t) {
          case tH.Normal:
          case tH.Total:
            return {
              color: o,
              dashStyle: "Solid",
              connectNulls: !0,
              marker: { enabled: l },
              opacity: a
            };
          case tH.Scatter:
            return {
              color: o,
              marker: { enabled: !0, symbol: "circle" },
              connectNulls: !0,
              lineWidth: 0,
              states: { hover: { lineWidthPlus: 0 } },
              opacity: a
            };
          case tH.Benchmark:
            return {
              color: null != o ? o : tx(e).benchmarkLineColor,
              dashStyle: "Solid",
              lineWidth: 1,
              marker: { enabled: !1, symbol: "circle" },
              connectNulls: !0,
              opacity: a
            };
          case tH.Comparison:
            return {
              color: null != o ? o : tx(e).comparisonLineColor,
              dashStyle: "ShortDot",
              marker: { enabled: !1, symbol: "circle" },
              connectNulls: !0,
              opacity: a
            };
          case tH.Noise:
            return {
              color: o,
              dashStyle: "Dash",
              connectNulls: !0,
              marker: { enabled: l },
              opacity: a
            };
          case tH.Projection:
            return { color: o, dashStyle: "Dash", connectNulls: !0, opacity: a };
          case tH.Quota:
            return {
              color: null != o ? o : tx(e).benchmarkLineColor,
              dashStyle: "Dash",
              marker: { enabled: !1, symbol: "circle" },
              connectNulls: !0,
              opacity: a
            };
          default:
            throw Error("Unhandled chart type: ".concat(t));
        }
      },
      nF = (e) => {
        let { theme: t } = e,
          { tooltipText: n } = tx(t);
        return {
          snap: 0,
          split: !0,
          shared: !1,
          backgroundColor: "transparent",
          padding: 2,
          borderWidth: 0,
          distance: 26,
          style: { color: n, zIndex: t.zIndex.modal + 1 },
          useHTML: !0,
          shape: "rect",
          headerShape: "rect",
          hideDelay: 0,
          outside: !0
        };
      },
      nC = (e) => {
        let { formatX: t } = e,
          n = (0, g.useTheme)(),
          l = ((e) => {
            let { formatX: t } = e,
              n = t$(),
              l = (0, h.useMediaQuery)((e) => e.breakpoints.up("Medium"));
            return (0, r.useCallback)(
              function (e) {
                var a, o;
                let { x: i } = this,
                  r = null != (a = e.chart.hoverPoints) ? a : void 0,
                  u =
                    null !=
                    (o =
                      null == r
                        ? void 0
                        : r.filter((e) => {
                            let { seriesType: t } = tY(e.series.userOptions.custom);
                            return t === tH.Total || t === tH.Normal;
                          }).length)
                      ? o
                      : 0,
                  s = l && u > 6,
                  d = { ...this, points: r };
                if (s && (null == r ? void 0 : r.length)) {
                  let e = [...r].sort((e, t) =>
                    null == e.y && null == t.y
                      ? 0
                      : null != e.y && null != t.y
                        ? t.y - e.y
                        : null == e.y
                          ? 1
                          : -1
                  );
                  d = { ...d, points: e };
                }
                let c = e.defaultFormatter.call(d, e).slice(0, 11);
                if (Array.isArray(c)) {
                  let e = void 0 === i ? "" : tG(t)(i),
                    l = e ? '<div style="'.concat(n, '">').concat(e, "</div>") : e,
                    [, ...a] = c;
                  if (!s)
                    return [
                      l,
                      ...a
                        .filter(Boolean)
                        .map((e) => '<div style="'.concat(n, '">').concat(e, "</div>"))
                    ];
                  let o = Math.floor(a.length / 2),
                    r = "<div>".concat(a.slice(0, o).join(""), "</div>"),
                    u = "<div>".concat(a.slice(o).join(""), "</div>");
                  return [
                    l,
                    '<div style="display:flex;column-gap:8px;'
                      .concat(n, '">')
                      .concat(r)
                      .concat(u, "</div>")
                  ];
                }
                return c;
              },
              [t, l, n]
            );
          })({ formatX: t });
        return (0, r.useMemo)(() => ({ ...nF({ theme: n }), formatter: l }), [n, l]);
      },
      nS = (e) => {
        let {
            xAxisFormatter: t,
            axisType: n,
            tickPositions: l,
            plotBandsOptions: a,
            xAxisBounds: o
          } = e,
          { type: i } = n,
          u = (0, g.useTheme)(),
          s = (0, r.useCallback)(
            (e) => {
              let { value: n } = e;
              return t({ value: n });
            },
            [t]
          );
        return (0, r.useMemo)(() => {
          let e = {
            type: i,
            lineColor: tx(u).axis,
            tickPositions: l,
            lineWidth: 1,
            tickLength: 0,
            width: "100%",
            plotBands: a,
            ...(o ? { min: o[0], max: o[1] } : {})
          };
          switch (i) {
            case "linear":
              return {
                ...e,
                labels: {
                  style: { color: tx(u).axisValueText },
                  autoRotation: void 0,
                  formatter: s
                }
              };
            case "datetime": {
              let { granularity: t } = n;
              return {
                ...e,
                units: t === tV.Month ? [["month", [1]]] : void 0,
                labels: {
                  style: {
                    ...(t === tV.Day ? { textOverflow: "none", whiteSpace: "nowrap" } : {}),
                    color: tx(u).axisValueText
                  },
                  autoRotation: void 0,
                  formatter: s
                }
              };
            }
            default:
              throw Error("Unrecognized xAxis type ".concat(i, "."));
          }
        }, [n, a, u, l, i, o, s]);
      },
      nE = (e) => {
        let { chartStyleMode: t, isAnnotationOn: n, minYAxisOverride: l } = e,
          a = (0, g.useTheme)();
        return (0, r.useMemo)(() => {
          let e;
          switch (t) {
            case tW.Normal:
              e = !0;
              break;
            case tW.Minimal:
              e = !1;
              break;
            default:
              throw Error("Unhandled chartStyleMode: ".concat(String(t)));
          }
          return {
            title: { text: void 0, style: { color: tx(a).axisValueText } },
            labels: { style: { color: tx(a).axisValueText } },
            gridLineColor: tx(a).gridLine,
            gridLineDashStyle: "ShortDash",
            gridLineWidth: 1,
            min: l,
            maxPadding: n ? 0.15 : void 0,
            visible: e
          };
        }, [t, n, l, a]);
      },
      nb = (e) => {
        let { chartStyleMode: t, yAxisConfigs: n, isAnnotationOn: l, minYAxisOverride: a } = e,
          o = nE({ chartStyleMode: t, isAnnotationOn: l, minYAxisOverride: a }),
          i = (0, r.useCallback)(
            (e) => {
              let { yAxisTitle: t, yAxisFormatter: n, visible: l, id: a, decimalPrecision: i } = e;
              return {
                ...o,
                id: a,
                title: { ...o.title, text: t },
                labels: {
                  ...o.labels,
                  formatter: n
                    ? function () {
                        let { value: e } = this;
                        return n ? n({ value: e }) : String(e);
                      }
                    : function () {
                        let e = this.axis.defaultLabelFormatter.call(this),
                          t = "number" == typeof this.value ? this.value : parseFloat(this.value);
                        return parseFloat(t.toFixed(i)) === t
                          ? e
                          : e.replace(/\d+\.\d+/, (e) =>
                              String(parseFloat(parseFloat(e).toFixed(i)))
                            );
                      }
                },
                visible: null != l ? l : o.visible,
                allowDecimals: (void 0 === i || 0 !== i) && void 0
              };
            },
            [o]
          );
        return (0, r.useMemo)(() => (n && 0 !== n.length ? n.map(i) : [o]), [o, i, n]);
      },
      nA = (e) => {
        switch (e) {
          case tV.Minute:
            return !0;
          case tV.Day:
          case tV.Month:
            return !1;
          default:
            throw Error("Unhandled axis granularity: ".concat(e));
        }
      },
      ny = (e, t) => {
        let n = (0, r.useRef)(t);
        (0, r.useLayoutEffect)(() => {
          n.current = t;
        }, [t]);
        let l = (0, r.useCallback)(
          function (t) {
            var l;
            (null == e || e.call(this, t), null == (l = n.current) || l.call(n));
          },
          [e]
        );
        return void 0 !== e || void 0 !== t ? l : void 0;
      },
      nx = (e, t) => {
        var n;
        let l = null == (n = e.options.chart) ? void 0 : n.animation;
        (e.update({ chart: { animation: !1 } }, !1),
          e.series.forEach((e) => {
            e.setVisible(t(e), !1);
          }),
          e.update({ chart: { animation: l } }, !0));
      },
      nM = () => {
        let e = (0, r.useCallback)((e) => {
            let t = e.target,
              { chart: n } = t,
              l = n.series,
              a = l.every((e) => e.visible),
              o = l.every((e) => !e.visible);
            a ? nx(n, (e) => e === t) : o && nx(n, () => !0);
          }, []),
          t = (0, r.useCallback)(
            (t) => {
              var n;
              t.series =
                null == (n = t.series)
                  ? void 0
                  : n.map((t) => ({ ...t, events: { ...t.events, legendItemClick: e } }));
            },
            [e]
          );
        return (0, r.useMemo)(() => ({ updateSeriesLegendItemClickHandlers: t }), [t]);
      },
      nN = "zone-symbol",
      nw = () => [],
      nD = (0, s.makeStyles)()(() => ({ zoneSeriesClassName: { pointerEvents: "none" } }));
    var nB = tI(
        r.default.memo((e) => {
          var t;
          let {
              data: n,
              xAxisFormatter: l,
              xAxisTickPositions: a,
              xAxisType: o,
              xAxisBounds: i,
              yAxisConfigs: s,
              onSelectChartRegion: d,
              onChartLoad: c,
              onChartRender: m,
              onChartDependencyStatus: h,
              onAnnotationsPositionsUpdated: f,
              annotations: p,
              height: v,
              tooltipFormatters: F,
              zoneLegendItemFormatter: C,
              chartStyleMode: S = tW.Normal,
              chartUpdatePolicy: E
            } = e,
            {
              classes: { zoneSeriesClassName: b }
            } = nD(),
            A = (0, g.useTheme)(),
            y = (0, r.useContext)(tT),
            { updateSeriesLegendItemClickHandlers: x } = nM();
          null != (t = u.default.SVGRenderer.prototype.symbols)[nN] || (t[nN] = nw);
          let M = tJ({
              formatSeriesKeyForPoint: F.formatSeriesKeyForPoint,
              formatSeriesValueForPoint: F.formatSeriesValueForPoint
            }),
            { series: N, minYAxisOverride: w } = (0, r.useMemo)(() => {
              if (y) return { series: [] };
              let { series: e, range: t } = n,
                l = 1 / 0,
                a = new Set(),
                o = [];
              e.forEach((t, n) => {
                let {
                  id: i,
                  name: r,
                  dataPoints: u,
                  type: s,
                  zones: d,
                  custom: c,
                  yAxisId: m,
                  color: g,
                  showMarker: h,
                  opacity: f,
                  showInLegend: p
                } = t;
                l = Math.min(l, ...u.map((e) => e[1]).filter((e) => null !== e));
                let v =
                    null == d
                      ? void 0
                      : d.map((e) => {
                          var t, n;
                          let l = u.map((e) => e[0]),
                            a = l.findIndex((t) => t === e.start),
                            o = null === e.end ? l.length - 1 : l.findIndex((t) => t === e.end);
                          if (-1 === a || -1 === o)
                            return { ...e, end: null != (t = e.end) ? t : l[l.length - 1] };
                          let i = a > 0 ? l[a - 1] : e.start,
                            r =
                              o < l.length - 1
                                ? l[o + 1]
                                : null != (n = e.end)
                                  ? n
                                  : l[l.length - 1];
                          return { ...e, start: i, end: r };
                        }),
                  F = {
                    id: i,
                    name: r,
                    data: u,
                    custom: { ...c, seriesType: s, zones: d },
                    type: tz.Spline,
                    zIndex: e.length - n,
                    ...nv(A, s, g, h, f),
                    ...(v
                      ? ((e, t, n) => {
                          if (!t.length) return {};
                          let l = [],
                            { color: a, dashStyle: o } = nv(e, n);
                          return (
                            t.forEach((n, i) => {
                              let { start: r, end: u, type: s } = n;
                              l.push({ value: r, color: a, dashStyle: o });
                              let { color: d, dashStyle: c } = nv(e, s);
                              if (u) l.push({ value: u, color: d, dashStyle: c });
                              else if (i < t.length - 1)
                                throw Error(
                                  "Can only have multiple zones when all but the last one have an `end`."
                                );
                              else l.push({ color: d, dashStyle: c });
                            }),
                            { zones: l, zoneAxis: "x" }
                          );
                        })(A, v, s)
                      : {}),
                    tooltip: { pointFormatter: M },
                    yAxis: m,
                    ...(void 0 === p ? {} : { showInLegend: p })
                  };
                (o.push(F),
                  null == d ||
                    d.forEach((e) => {
                      let { type: t } = e;
                      a.add(t);
                    }),
                  a.size && a.add(s));
              });
              let i = [];
              if (a.size) {
                let e = Array.from(
                  new Set(Array.from(a).map((e) => (e === tH.Total ? tH.Normal : e)))
                ).filter((e) => {
                  var t;
                  return "" !== (null != (t = null == C ? void 0 : C(e)) ? t : "");
                });
                i =
                  e.length > 1
                    ? e
                        .sort((e, t) => (e === tH.Normal ? -1 : +(t === tH.Normal)))
                        .map((e, t) => {
                          var n;
                          return {
                            id: "zone-".concat(t, "-").concat(e),
                            name: null != (n = null == C ? void 0 : C(e)) ? n : "",
                            data: [],
                            type: tz.Spline,
                            marker: { symbol: nN },
                            dashStyle: nv(A, e).dashStyle,
                            color: tx(A).zoneLegendSymbol,
                            legendIndex: o.length,
                            className: b
                          };
                        })
                    : [];
              }
              if (t) {
                let { formatRange: e } = F,
                  n = ((e) => {
                    let { range: t, theme: n, rangeFormatter: l } = e,
                      { topDataPoints: a, bottomDataPoints: o, tags: i, id: r, name: u } = t,
                      s = [];
                    return (
                      o.forEach((e, t) => {
                        var n, l;
                        let [o, r] = e;
                        if (t >= a.length) return;
                        let u = null == (n = a[t]) ? void 0 : n[1],
                          d = null == i || null == (l = i[t]) ? void 0 : l[1];
                        s.push({
                          x: o,
                          low: null != u ? u : void 0,
                          high: null != r ? r : void 0,
                          custom: { tag: d }
                        });
                      }),
                      {
                        id: r,
                        data: s,
                        name: u,
                        type: "areasplinerange",
                        lineWidth: 0,
                        color: tx(n).benchmarkLineColor,
                        marker: { enabled: !1, symbol: "circle" },
                        fillOpacity: 0.08,
                        linkedTo: ":previous",
                        showInLegend: !0,
                        zIndex: 0,
                        tooltip: { pointFormatter: l }
                      }
                    );
                  })({
                    range: t,
                    theme: A,
                    rangeFormatter: e
                      ? ((e) => {
                          let { formatRange: t } = e;
                          return function () {
                            var e;
                            let { low: n, high: l, options: a, x: o } = this;
                            if (void 0 === n || void 0 === l) return "";
                            let { rangeKey: i, rangeValue: r } = t({
                              top: n,
                              bottom: l,
                              tag: null == (e = a.custom) ? void 0 : e.tag,
                              x: o
                            });
                            return '<div style="font-weight:600;">'
                              .concat(t_(null != i ? i : ""), "</div>")
                              .concat(t_(r));
                          };
                        })({ formatRange: e })
                      : void 0
                  });
                o.push(n);
              }
              return { series: o.concat(i), minYAxisOverride: 1 / 0 !== l && l < 0 ? l : void 0 };
            }, [n, y, M, A, F, C, b]),
            { annotationOptions: D, plotBandsOptions: B } = nl(y ? void 0 : p),
            L = (0, r.useMemo)(() => ({ series: { marker: { enabledThreshold: 4 } } }), []),
            R = nS({
              axisType: o,
              tickPositions: a,
              xAxisFormatter: l,
              plotBandsOptions: B,
              xAxisBounds: y ? void 0 : i
            }),
            O = nb({
              chartStyleMode: S,
              yAxisConfigs: s,
              minYAxisOverride: w,
              isAnnotationOn: !!(null == p ? void 0 : p.length)
            }),
            k = ((e) => {
              let {
                  chartStyleMode: t,
                  onSelectChartRegion: n,
                  onChartLoad: l,
                  onChartRender: a,
                  height: o
                } = e,
                i = (0, g.useTheme)(),
                u = no(n),
                s = (0, r.useMemo)(
                  () =>
                    ni({
                      theme: i,
                      chartType: tz.Spline,
                      chartStyleMode: t,
                      onSelectChartRegion: u,
                      onChartLoad: l,
                      onChartRender: a
                    }),
                  [t, l, a, u, i]
                );
              return (0, r.useMemo)(
                () => ({ ...s, ...nr, height: null != o ? o : s.height }),
                [s, o]
              );
            })({
              onSelectChartRegion: d,
              onChartLoad: c,
              onChartRender: ny(na({ annotations: p, onAnnotationsPositionsUpdated: f }), m),
              chartStyleMode: S,
              height: v
            }),
            I = nC({ formatX: F.formatXForPoint }),
            T = nu({ chartStyleMode: S }),
            P = nf(),
            z = np(),
            W = (0, r.useMemo)(() => {
              let e = {
                series: N,
                annotations: D,
                plotOptions: L,
                chart: k,
                xAxis: R,
                yAxis: O,
                tooltip: I,
                responsive: { rules: [P, ...(S === tW.Minimal ? [] : [z])] },
                ...T
              };
              return (x(e), e);
            }, [N, S, D, L, k, R, O, I, P, z, T, x]);
          return r.default.createElement(nn, {
            options: W,
            onChartDependencyStatus: h,
            showLocalizedTime: "datetime" === o.type && nA(o.granularity),
            chartUpdatePolicy: E
          });
        })
      ),
      nL = tI(
        r.default.memo((e) => {
          let {
              data: t,
              tooltipFormatters: n,
              height: l,
              annotations: a,
              onAnnotationsPositionsUpdated: o,
              onSelectChartRegion: i,
              onChartLoad: u,
              onChartRender: s,
              onChartDependencyStatus: d,
              xAxisType: c,
              xAxisFormatter: m,
              xAxisTickPositions: h,
              xAxisBounds: f,
              yAxisConfig: p,
              chartStyleMode: v = tW.Normal
            } = e,
            F = (0, g.useTheme)(),
            C = (0, r.useContext)(tT),
            { updateSeriesLegendItemClickHandlers: S } = nM(),
            E = tJ({
              formatSeriesKeyForPoint: n.formatSeriesKeyForPoint,
              formatSeriesValueForPoint: n.formatSeriesValueForPoint
            }),
            { series: b, minYAxisOverride: A } = (0, r.useMemo)(() => {
              if (C) return { series: [] };
              let { series: e } = t,
                n = 1 / 0,
                l = [];
              return (
                e.forEach((t, a) => {
                  let { id: o, name: i, dataPoints: r, type: u, custom: s, color: d } = t;
                  n = Math.min(n, ...r.map((e) => e[1]).filter((e) => null !== e));
                  let c = {
                    id: o,
                    name: i,
                    data: r,
                    custom: { ...s, seriesType: u },
                    type: tz.Area,
                    zIndex: e.length - a,
                    ...((e, t, n) => {
                      let l = n ? ty(n, e) : void 0;
                      switch (t) {
                        case tH.Normal:
                        case tH.Total:
                          return {
                            color: l,
                            dashStyle: "Solid",
                            marker: { enabled: !1, symbol: "circle" },
                            connectNulls: !0
                          };
                        case tH.Benchmark:
                          return {
                            color: null != l ? l : tx(e).benchmarkLineColor,
                            dashStyle: "Solid",
                            lineWidth: 1,
                            marker: { enabled: !1, symbol: "circle" },
                            connectNulls: !0
                          };
                        case tH.Comparison:
                          return {
                            color: null != l ? l : tx(e).comparisonLineColor,
                            dashStyle: "ShortDot",
                            marker: { enabled: !1, symbol: "circle" },
                            connectNulls: !0
                          };
                        case tH.Projection:
                          return { color: l, dashStyle: "Dash", connectNulls: !0 };
                        case tH.Quota:
                          return {
                            color: null != l ? l : tx(e).benchmarkLineColor,
                            dashStyle: "Dash",
                            marker: { enabled: !1, symbol: "circle" },
                            connectNulls: !0
                          };
                        default:
                          throw Error("Unhandled chart type: ".concat(t));
                      }
                    })(F, u, d),
                    tooltip: { pointFormatter: E }
                  };
                  l.push(c);
                }),
                { series: l, minYAxisOverride: 1 / 0 !== n && n < 0 ? n : void 0 }
              );
            }, [t, C, E, F]),
            { annotationOptions: y, plotBandsOptions: x } = nl(C ? void 0 : a),
            M = (0, r.useMemo)(() => ({ area: { stacking: "normal" } }), []),
            N = nS({
              axisType: c,
              tickPositions: h,
              xAxisFormatter: m,
              plotBandsOptions: x,
              xAxisBounds: C ? void 0 : f
            }),
            w = ((e) => {
              let { chartStyleMode: t, yAxisConfig: n, minYAxisOverride: l, isAnnotationOn: a } = e;
              return nb({
                chartStyleMode: t,
                yAxisConfigs: n ? [n] : void 0,
                isAnnotationOn: a,
                minYAxisOverride: l
              })[0];
            })({
              chartStyleMode: v,
              yAxisConfig: p,
              minYAxisOverride: A,
              isAnnotationOn: !!(null == a ? void 0 : a.length)
            }),
            D = ((e) => {
              let {
                  chartStyleMode: t,
                  onSelectChartRegion: n,
                  onChartLoad: l,
                  onChartRender: a,
                  height: o
                } = e,
                i = (0, g.useTheme)(),
                u = no(n),
                s = (0, r.useMemo)(
                  () =>
                    ni({
                      theme: i,
                      chartType: tz.Area,
                      chartStyleMode: t,
                      onSelectChartRegion: u,
                      onChartLoad: l,
                      onChartRender: a
                    }),
                  [t, l, a, u, i]
                );
              return (0, r.useMemo)(
                () => ({ ...s, ...nr, height: null != o ? o : s.height }),
                [s, o]
              );
            })({
              onSelectChartRegion: i,
              onChartLoad: u,
              onChartRender: ny(na({ annotations: a, onAnnotationsPositionsUpdated: o }), s),
              chartStyleMode: v,
              height: l
            }),
            B = nC({ formatX: n.formatXForPoint }),
            L = nf(),
            R = nu({ chartStyleMode: v }),
            O = (0, r.useMemo)(() => {
              let e = {
                series: b,
                annotations: y,
                plotOptions: M,
                chart: D,
                xAxis: N,
                yAxis: w,
                tooltip: B,
                responsive: { rules: [L] },
                ...R
              };
              return (S(e), e);
            }, [b, y, M, D, N, w, B, L, R, S]);
          return r.default.createElement(nn, {
            options: O,
            onChartDependencyStatus: d,
            showLocalizedTime: "datetime" === c.type && nA(c.granularity)
          });
        })
      );
    let nR = (0, s.makeStyles)()(() => ({
        dimmedColumn: { opacity: 0.3 },
        dimmableColumnTransition: { transition: "opacity 0.5s" }
      })),
      nO = () => {
        let {
            classes: { dimmedColumn: e, dimmableColumnTransition: t }
          } = nR(),
          n = (0, r.useCallback)(
            (n) => {
              let { target: l } = n;
              l instanceof u.default.Point &&
                l.series.chart.series.forEach((n) => {
                  var a;
                  null == n ||
                    null == (a = n.points) ||
                    a.forEach((n) => {
                      var a, o, i;
                      (null == (a = n.graphic) || a.addClass(t, !0),
                        n.x === l.x
                          ? null == (o = n.graphic) || o.removeClass(e)
                          : null == (i = n.graphic) || i.addClass(e, !1));
                    });
                });
            },
            [t, e]
          ),
          l = (0, r.useCallback)(
            (t) => {
              let { target: n } = t;
              n instanceof u.default.Point &&
                n.series.chart.series.forEach((t) => {
                  var n;
                  null == t ||
                    null == (n = t.points) ||
                    n.forEach((t) => {
                      var n;
                      null == (n = t.graphic) || n.removeClass(e);
                    });
                });
            },
            [e]
          );
        return (0, r.useMemo)(() => ({ events: { mouseOver: n, mouseOut: l } }), [l, n]);
      };
    var nk = tI(
        r.default.memo((e) => {
          let {
              data: t,
              xAxisFormatter: n,
              xAxisType: l,
              xAxisBounds: a,
              yAxisConfig: o,
              annotations: i,
              onAnnotationsPositionsUpdated: u,
              height: s,
              onSelectChartRegion: d,
              onChartLoad: c,
              onChartRender: m,
              onChartDependencyStatus: h,
              tooltipFormatters: f,
              stacking: p = !0,
              chartStyleMode: v = tW.Normal
            } = e,
            F = (0, g.useTheme)(),
            C = (0, r.useContext)(tT),
            { updateSeriesLegendItemClickHandlers: S } = nM(),
            E = nO(),
            { hasPositiveAltitude: b, hasNegativeAltitude: A } = (0, r.useMemo)(
              () => ({
                hasPositiveAltitude: t.series.some((e) => {
                  let { dataPoints: t } = e;
                  return t.some((e) => {
                    let [, t] = e;
                    return null !== t && t > 0;
                  });
                }),
                hasNegativeAltitude: t.series.some((e) => {
                  let { dataPoints: t } = e;
                  return t.some((e) => {
                    let [, t] = e;
                    return null !== t && t < 0;
                  });
                })
              }),
              [t.series]
            ),
            y = tJ({
              formatSeriesKeyForPoint: f.formatSeriesKeyForPoint,
              formatSeriesValueForPoint: f.formatSeriesValueForPoint
            }),
            { series: x, categories: M } = (0, r.useMemo)(() => {
              if (C) return { series: [] };
              if ("orderedCategories" in t) {
                let e = new Map(t.orderedCategories.map((e, t) => [e, t]));
                return {
                  series: t.series.map((t) => {
                    let { id: n, name: l, dataPoints: a, custom: o, color: i } = t;
                    return {
                      id: n,
                      name: l,
                      data: [...a].sort((t, n) => {
                        var l, a;
                        return (
                          (null != (l = e.get(t[0])) ? l : 1 / 0) -
                          (null != (a = e.get(n[0])) ? a : 1 / 0)
                        );
                      }),
                      type: tz.Column,
                      custom: o,
                      color: i ? ty(i, F) : void 0,
                      point: E,
                      softThreshold: b
                    };
                  }),
                  categories: t.orderedCategories
                };
              }
              return {
                series: t.series.map((e) => {
                  let { id: t, name: n, dataPoints: l, type: a, custom: o, color: i } = e,
                    r = a === tH.Total;
                  return {
                    id: t,
                    name: n,
                    data: l,
                    type: r ? tz.Spline : tz.Column,
                    custom: { ...o, seriesType: a },
                    zIndex: r ? 2 : 1,
                    point: E,
                    ...((e, t, n) => {
                      let l = n ? ty(n, e) : void 0;
                      switch (t) {
                        case tH.Total:
                          return { color: l || tx(e).columnTotalSeriesLineColor };
                        case tH.Normal:
                          return { color: l };
                        default:
                          throw Error("Unhandled chart type: ".concat(t));
                      }
                    })(F, a, i),
                    softThreshold: b,
                    tooltip: { pointFormatter: y }
                  };
                })
              };
            }, [t, b, C, y, E, F]),
            { annotationOptions: N, plotBandsOptions: w } = nl(C ? void 0 : i),
            D = ((e) => {
              let { stacking: t } = e;
              return (0, r.useMemo)(
                () => ({ column: { stacking: t ? "normal" : void 0, borderWidth: 0 } }),
                [t]
              );
            })({ stacking: p }),
            B = ((e) => {
              let {
                  chartStyleMode: t,
                  onSelectChartRegion: n,
                  onChartLoad: l,
                  onChartRender: a,
                  height: o
                } = e,
                i = (0, g.useTheme)(),
                u = no(n),
                s = (0, r.useMemo)(
                  () =>
                    ni({
                      theme: i,
                      chartType: tz.Column,
                      chartStyleMode: t,
                      onSelectChartRegion: u,
                      onChartLoad: l,
                      onChartRender: a
                    }),
                  [t, l, a, u, i]
                );
              return (0, r.useMemo)(
                () => ({ ...s, ...nr, height: null != o ? o : s.height }),
                [s, o]
              );
            })({
              onSelectChartRegion: d,
              onChartLoad: c,
              onChartRender: ny(na({ annotations: i, onAnnotationsPositionsUpdated: u }), m),
              chartStyleMode: v,
              height: s
            }),
            L = ((e) => {
              let {
                  xAxisFormatter: t,
                  axisType: n,
                  categories: l,
                  plotBandsOptions: a,
                  xAxisBounds: o
                } = e,
                { type: i } = n,
                u = (0, g.useTheme)(),
                s = (0, r.useCallback)(
                  (e) => {
                    let { value: n } = e;
                    return t({ value: n });
                  },
                  [t]
                );
              return (0, r.useMemo)(() => {
                let e = {
                  type: i,
                  categories: l,
                  lineColor: tx(u).axis,
                  lineWidth: 1,
                  tickLength: 0,
                  width: "100%",
                  labels: {
                    style: {
                      textOverflow: "none",
                      whiteSpace: "nowrap",
                      color: tx(u).axisValueText
                    },
                    autoRotation: void 0,
                    rotation: (null == l ? void 0 : l.length) ? -45 : void 0,
                    formatter: s
                  },
                  plotBands: a,
                  ...(o ? { min: o[0], max: o[1] } : {})
                };
                switch (i) {
                  case "linear":
                    return { ...e };
                  case "datetime": {
                    let { granularity: t } = n;
                    return { ...e, units: t === tV.Month ? [["month", [1]]] : void 0 };
                  }
                  default:
                    throw Error("Unrecognized xAxis type ".concat(i, "."));
                }
              }, [n, l, a, u, i, s, o]);
            })({
              xAxisFormatter: n,
              axisType: l,
              categories: M,
              plotBandsOptions: w,
              xAxisBounds: C ? void 0 : a
            }),
            R = ((e) => {
              let { chartStyleMode: t, yAxisConfig: n, isAnnotationOn: l, highlightXAxis: a } = e,
                o = (0, g.useTheme)(),
                i = (0, r.useCallback)(
                  function () {
                    var e, t;
                    return null !=
                      (e =
                        null == n || null == (t = n.yAxisFormatter)
                          ? void 0
                          : t.call(n, { value: this.value }))
                      ? e
                      : "";
                  },
                  [n]
                ),
                u = nE({ chartStyleMode: t, isAnnotationOn: l });
              return (0, r.useMemo)(() => {
                var e;
                return {
                  ...u,
                  id: null == n ? void 0 : n.id,
                  title: { ...u.title, text: null == n ? void 0 : n.yAxisTitle },
                  labels: {
                    ...u.labels,
                    formatter: (null == n ? void 0 : n.yAxisFormatter) ? i : void 0
                  },
                  gridLineWidth: 0.5,
                  plotLines: a ? [{ color: tx(o).axis, width: 3, value: 0 }] : void 0,
                  visible: null != (e = null == n ? void 0 : n.visible) ? e : u.visible
                };
              }, [
                u,
                a,
                o,
                null == n ? void 0 : n.id,
                null == n ? void 0 : n.visible,
                null == n ? void 0 : n.yAxisFormatter,
                null == n ? void 0 : n.yAxisTitle,
                i
              ]);
            })({
              chartStyleMode: v,
              yAxisConfig: o,
              isAnnotationOn: !!(null == i ? void 0 : i.length),
              highlightXAxis: A && b
            }),
            O = ((e) => {
              let { formatX: t } = e,
                n = (0, g.useTheme)(),
                l = t0({ formatX: t });
              return (0, r.useMemo)(() => ({ ...nF({ theme: n }), formatter: l }), [n, l]);
            })({ formatX: f.formatXForPoint }),
            k = nu({ chartStyleMode: v }),
            I = nf(),
            T = np(),
            P = (0, r.useMemo)(() => {
              let e = {
                series: x,
                annotations: N,
                plotOptions: D,
                chart: B,
                xAxis: L,
                yAxis: R,
                tooltip: O,
                responsive: { rules: [I, T] },
                ...k
              };
              return (S(e), e);
            }, [x, N, D, B, L, R, O, I, T, k, S]);
          return r.default.createElement(nn, {
            options: P,
            onChartDependencyStatus: h,
            showLocalizedTime: "datetime" === l.type && nA(l.granularity)
          });
        })
      ),
      nI = (0, r.memo)((e) => {
        var t;
        let {
            data: n,
            tooltipFormatters: l,
            dataLabelsFormatter: a,
            forceHideLegends: o,
            DataLabelLeadingIcon: i,
            height: u,
            onChartLoad: s,
            onChartRender: d,
            onChartDependencyStatus: c,
            chartStyleMode: m = tW.Normal
          } = e,
          h,
          f,
          p,
          v = (0, g.useTheme)(),
          F = (0, r.useContext)(tT),
          C = tJ({
            formatSeriesKeyForPoint: l.formatSeriesKeyForPoint,
            formatSeriesValueForPoint: l.formatSeriesValueForPoint
          }),
          S = nO(),
          E = (0, r.useMemo)(
            () => new Map(n.orderedCategories.map((e, t) => [e, t])),
            [n.orderedCategories]
          ),
          { series: b, longestDataLabelLength: A } = (0, r.useMemo)(() => {
            if (F) return { series: [], longestDataLabelLength: 0 };
            let e = 0,
              t = [];
            return (
              n.series.forEach((n) => {
                let { id: l, name: o, dataPoints: i, color: r } = n,
                  u = [...i].sort((e, t) => {
                    var n, l;
                    return (
                      (null != (n = E.get(e[0])) ? n : 1 / 0) -
                      (null != (l = E.get(t[0])) ? l : 1 / 0)
                    );
                  });
                (t.push({
                  id: l,
                  name: o,
                  type: tz.Bar,
                  data: u,
                  point: S,
                  tooltip: { pointFormatter: C },
                  color: r ? ty(r, v) : void 0
                }),
                  a &&
                    (e = i.reduce((e, t) => {
                      let [n, l] = t;
                      return Math.max(
                        e,
                        (null !== l ? "".concat(a({ y: l, category: n, seriesName: o })) : "")
                          .length
                      );
                    }, 0)));
              }),
              { series: t, longestDataLabelLength: e }
            );
          }, [n.series, a, F, E, C, S, v]),
          y = ((e) => {
            let { formatDataLabel: t, DataLabelLeadingIcon: n } = e,
              l = (0, g.useTheme)(),
              a = !!t,
              o = ((e) => {
                let { formatDataLabel: t, LeadingIcon: n } = e;
                return nm({
                  formatDataLabel: t,
                  LeadingIcon: n,
                  getPointMetadata: (0, r.useCallback)((e) => {
                    let t = e.name;
                    return t ? { category: t } : null;
                  }, [])
                });
              })({ formatDataLabel: t, LeadingIcon: n });
            return (0, r.useMemo)(
              () => ({
                bar: {
                  grouping: !1,
                  dataLabels: {
                    enabled: a,
                    style: {
                      color: tx(l).dataLabelText,
                      fontSize: "14px",
                      fontWeight: "300",
                      display: "inline-flex",
                      alignItems: "center"
                    },
                    crop: !1,
                    overflow: "allow",
                    useHTML: !0,
                    formatter: o,
                    position: "right",
                    defer: !0
                  },
                  pointWidth: 8,
                  borderRadius: 2,
                  borderWidth: 0
                }
              }),
              [a, o, l]
            );
          })({ formatDataLabel: a, DataLabelLeadingIcon: i }),
          x = ((e) => {
            let {
                chartStyleMode: t,
                onChartLoad: n,
                onChartRender: l,
                height: a,
                longestDataLabelLength: o
              } = e,
              i = (0, g.useTheme)(),
              u = (0, r.useMemo)(
                () =>
                  ni({
                    theme: i,
                    chartType: tz.Bar,
                    chartStyleMode: t,
                    onChartLoad: n,
                    onChartRender: l
                  }),
                [t, n, l, i]
              );
            return (0, r.useMemo)(
              () => ({
                ...u,
                ...nr,
                height: null != a ? a : u.height,
                marginRight: o ? 6 * o : void 0
              }),
              [u, a, o]
            );
          })({
            chartStyleMode: m,
            onChartLoad: s,
            onChartRender: d,
            height: u,
            longestDataLabelLength: A
          }),
          M =
            ((t = n.orderedCategories),
            (0, r.useMemo)(
              () => ({
                type: "category",
                categories: t,
                lineWidth: 0,
                labels: {
                  align: "right",
                  style: { color: tx(h).axisValueText, fontSize: "14px", fontWeight: "300" },
                  autoRotation: void 0
                }
              }),
              [t, (h = (0, g.useTheme)())]
            )),
          N = (0, r.useMemo)(() => ({ visible: !1 }), []),
          w =
            ((f = (0, g.useTheme)()),
            (0, r.useMemo)(
              () => ({ ...nF({ theme: f }), formatter: p }),
              [(p = t0({ formatX: (0, r.useCallback)(() => "", []) })), f]
            )),
          D = nu({ chartStyleMode: m, forceHideLegends: o }),
          B = nf(),
          L = (0, r.useMemo)(
            () => ({
              series: b,
              plotOptions: y,
              chart: x,
              xAxis: M,
              yAxis: N,
              tooltip: w,
              responsive: { rules: [B] },
              ...D
            }),
            [x, D, y, b, B, w, M, N]
          );
        return r.default.createElement(nn, { options: L, onChartDependencyStatus: c });
      }),
      nT = (0, r.memo)((e) => {
        let {
            data: t,
            tooltipFormatter: n,
            onChartLoad: l,
            onChartRender: a,
            onChartDependencyStatus: o,
            legendLabelFormatter: i,
            height: u,
            chartStyleMode: s = tW.Normal
          } = e,
          d,
          c,
          m = (0, r.useContext)(tT),
          h = (0, r.useMemo)(() => {
            if (m) return [];
            let { name: e, dataPoints: n } = t.singleSeries;
            return [
              {
                name: e,
                data: n.map((e) => {
                  let [t, n] = e;
                  return [t, n];
                }),
                type: tz.Map
              }
            ];
          }, [t.singleSeries, m]),
          f = (0, r.useMemo)(() => ({ map: { states: { inactive: { enabled: !1 } } } }), []),
          p = ((e) => {
            let {
                chartStyleMode: t,
                onChartLoad: n,
                onChartRender: l,
                topoJSONData: a,
                height: o
              } = e,
              i = (0, g.useTheme)(),
              u = (0, r.useMemo)(
                () =>
                  ni({
                    theme: i,
                    chartType: tz.Map,
                    chartStyleMode: t,
                    onChartLoad: n,
                    onChartRender: l
                  }),
                [t, n, l, i]
              );
            return (0, r.useMemo)(
              () => ({ ...u, ...nr, map: a, height: null != o ? o : u.height }),
              [u, o, a]
            );
          })({
            chartStyleMode: s,
            onChartLoad: l,
            onChartRender: a,
            height: u,
            topoJSONData: t.topoJSON
          }),
          v =
            ((d = (0, g.useTheme)()),
            (0, r.useMemo)(
              () => ({ ...nF({ theme: d }), formatter: c }),
              [
                (c = ((e) => {
                  let { formatPoint: t } = e,
                    n = t$();
                  return (0, r.useCallback)(
                    function () {
                      let { series: e, "hc-key": l, value: a } = this;
                      return null == a || void 0 === l
                        ? ""
                        : '<div style="'
                            .concat(n, '">')
                            .concat(tG(t)({ hcKey: l, seriesName: e.name }), "</div>");
                    },
                    [t, n]
                  );
                })({ formatPoint: n })),
                d
              ]
            )),
          F = (0, r.useMemo)(
            () => ({
              enabled: !0,
              enableMouseWheelZoom: !1,
              buttonOptions: { alignTo: "spacingBox", style: { fontWeight: "normal" } }
            }),
            []
          ),
          C = ((e) => {
            let { splits: t } = e;
            return (0, r.useMemo)(() => {
              let e = [];
              for (let n = 0; n <= t.length; n += 1) {
                let l = 0 === n ? void 0 : t[n - 1],
                  a = n === t.length ? void 0 : t[n];
                e.push({ from: l, to: a });
              }
              return { dataClasses: e };
            }, [t]);
          })({ splits: t.colorAxisSplit }),
          S = ((e) => {
            let { chartStyleMode: t, formatLegendLabel: n } = e,
              l = (0, g.useTheme)();
            return (0, r.useMemo)(
              () => ({
                legend: {
                  enabled: t !== tW.Minimal,
                  layout: "vertical",
                  align: "left",
                  verticalAlign: "bottom",
                  floating: !0,
                  useHTML: !0,
                  itemStyle: {
                    color: tx(l).legendText,
                    fontSize: "12px",
                    fontWeight: "300",
                    textOverflow: "ellipsis"
                  },
                  itemHoverStyle: { color: tx(l).legendText },
                  labelFormatter() {
                    let { from: e, to: t } = ((e) => {
                        if ("object" != typeof e || null === e) return {};
                        let { from: t, to: n } = e;
                        return {
                          from: "number" == typeof t ? t : void 0,
                          to: "number" == typeof n ? n : void 0
                        };
                      })(this),
                      l = tG(n)({ from: e, to: t });
                    return '<div style="max-width: 200px; text-overflow: ellipsis; overflow: hidden">'.concat(
                      l,
                      "</div>"
                    );
                  },
                  spacingBottom: 0,
                  paddingBottom: 0,
                  symbolRadius: 0,
                  symbolHeight: 15
                },
                title: { style: { display: "none" } },
                credits: { enabled: !1 }
              }),
              [t, n, l]
            );
          })({ chartStyleMode: s, formatLegendLabel: i }),
          E = (0, r.useMemo)(
            () => ({
              series: h,
              plotOptions: f,
              chart: p,
              mapNavigation: F,
              colorAxis: C,
              tooltip: v,
              ...S
            }),
            [p, C, S, F, f, h, v]
          );
        return r.default.createElement(nn, {
          options: E,
          constructorType: "mapChart",
          onChartDependencyStatus: o
        });
      }),
      nP = r.default.memo((e) => {
        let {
            data: t,
            tooltipFormatters: n,
            formatDataLabel: l,
            DataLabelLeadingIcon: a,
            borderColor: o,
            borderWidth: i,
            chartStyleMode: u = tW.Normal,
            height: s,
            onChartLoad: d,
            onChartRender: c,
            onChartDependencyStatus: m
          } = e,
          h = (0, g.useTheme)(),
          f = (0, r.useContext)(tT),
          p = (0, r.useMemo)(() => {
            if (f) return [];
            let { series: e } = t;
            return [
              {
                id: e.id,
                name: e.name,
                type: tz.Pie,
                data: e.dataPoints.map((t, n) => {
                  var l;
                  let [a, o] = t;
                  return {
                    name: a,
                    y: o,
                    color: (null == (l = e.dataPointColors) ? void 0 : l[n])
                      ? ty(e.dataPointColors[n], h)
                      : void 0
                  };
                }),
                color: e.color ? ty(e.color, h) : void 0,
                custom: e.custom
              }
            ];
          }, [t, f, h]),
          v = (function () {
            let {
                formatDataLabel: e,
                DataLabelLeadingIcon: t,
                borderColor: n,
                borderWidth: l
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              a = !!e,
              o = ((e) => {
                let { formatDataLabel: t, LeadingIcon: n } = e;
                return nm({
                  formatDataLabel: t,
                  LeadingIcon: n,
                  getPointMetadata: (0, r.useCallback)((e) => {
                    let t = e.name;
                    return t ? { category: t, percentage: e.percentage } : null;
                  }, [])
                });
              })({ formatDataLabel: e, LeadingIcon: t });
            return (0, r.useMemo)(
              () => ({
                pie: {
                  allowPointSelect: !0,
                  cursor: "pointer",
                  size: "100%",
                  borderColor: null != n ? n : "transparent",
                  borderWidth: null != l ? l : +!!n,
                  borderRadius: 0,
                  dataLabels: {
                    enabled: a,
                    inside: !0,
                    distance: "-30%",
                    useHTML: !0,
                    crop: !1,
                    overflow: "allow",
                    style: {
                      fontSize: "16px",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      textOverflow: "unset"
                    },
                    formatter(e) {
                      let t = o.call(this, e);
                      if (!t && 0 !== t) return null;
                      let { plotWidth: n, plotHeight: a } = this.series.chart,
                        i = ng(n, a);
                      try {
                        if (
                          !(function (e, t, n, l) {
                            let a =
                                arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                              o =
                                arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : nh;
                            if (!e || !e.y || !e.percentage || !t || !n) return !1;
                            let { plotWidth: i, plotHeight: r } = t,
                              u = 0.5 * Math.min(i, r),
                              s =
                                0.7 *
                                u *
                                Math.sin(
                                  Math.min((e.percentage / 100) * 2 * Math.PI, Math.PI) / 2
                                ) *
                                1,
                              d = Math.max(8, Math.min(20, l)),
                              c = t_(String(n));
                            return o.measureText(c, d) <= s - 2 * a;
                          })(this, this.series.chart, t, i, l)
                        )
                          return null;
                      } catch (e) {
                        return null;
                      }
                      return t;
                    }
                  },
                  showInLegend: !0
                }
              }),
              [a, o, n, l]
            );
          })({
            formatDataLabel: l,
            DataLabelLeadingIcon: a,
            ...(0, r.useMemo)(
              () => (t.series.dataPoints.length > 1 ? { borderColor: o, borderWidth: i } : {}),
              [o, i, t.series.dataPoints.length]
            )
          }),
          F = ((e) => {
            let { chartStyleMode: t, onChartLoad: n, onChartRender: l, height: a } = e,
              o = (0, g.useTheme)(),
              i = (0, r.useMemo)(
                () =>
                  ni({
                    theme: o,
                    chartType: tz.Pie,
                    chartStyleMode: t,
                    onChartLoad: n,
                    onChartRender: l
                  }),
                [t, n, l, o]
              );
            return (0, r.useMemo)(
              () => ({ ...i, ...nr, height: null != a ? a : i.height, zoomType: "none" }),
              [i, a]
            );
          })({ onChartLoad: d, onChartRender: c, chartStyleMode: u, height: s }),
          C = ((e) => {
            let { formatSeriesKeyForSlice: t, formatSeriesValueForSlice: n } = e,
              l = (0, g.useTheme)(),
              a = t$(),
              o = ((e) => {
                let { formatSeriesKeyForSlice: t, formatSeriesValueForSlice: n } = e,
                  l = (0, g.useTheme)();
                return (0, r.useCallback)(
                  function () {
                    let { name: e, y: a, percentage: o, color: i } = this;
                    return e && null != a && null != o
                      ? tZ({
                          key: tG(t)({ sliceName: e, sliceValue: a, percentage: o }),
                          value: tG(n)({ sliceName: e, sliceValue: a, percentage: o }),
                          shouldRenderDot: !0,
                          theme: l,
                          color: i
                        })
                      : "";
                  },
                  [t, n, l]
                );
              })({ formatSeriesKeyForSlice: t, formatSeriesValueForSlice: n }),
              i = (0, r.useCallback)(
                function () {
                  if (!this.name || null == this.y || null == this.percentage) return "";
                  let e = o.call(this);
                  return "" === e ? e : '<div style="'.concat(a, '">').concat(e, "</div>");
                },
                [o, a]
              );
            return (0, r.useMemo)(() => ({ ...nF({ theme: l }), split: !1, formatter: i }), [l, i]);
          })({
            formatSeriesKeyForSlice: n.formatSeriesKeyForSlice,
            formatSeriesValueForSlice: n.formatSeriesValueForSlice
          }),
          S = nu({ chartStyleMode: u }),
          E = (0, r.useMemo)(
            () => [
              {
                condition: { minWidth: 600 },
                chartOptions: {
                  plotOptions: {
                    pie: {
                      dataLabels: {
                        style: { fontSize: "".concat(ng(600, 600), "px"), fontWeight: "400" }
                      }
                    }
                  }
                }
              },
              {
                condition: { minWidth: 400, maxWidth: 599 },
                chartOptions: {
                  plotOptions: {
                    pie: {
                      dataLabels: {
                        style: { fontSize: "".concat(ng(400, 400), "px"), fontWeight: "400" }
                      }
                    }
                  }
                }
              },
              {
                condition: { minWidth: 300, maxWidth: 399 },
                chartOptions: {
                  plotOptions: {
                    pie: {
                      dataLabels: {
                        style: { fontSize: "".concat(ng(300, 300), "px"), fontWeight: "500" }
                      }
                    }
                  }
                }
              },
              {
                condition: { maxWidth: 299 },
                chartOptions: {
                  plotOptions: {
                    pie: {
                      dataLabels: {
                        style: { fontSize: "".concat(ng(299, 299), "px"), fontWeight: "600" }
                      }
                    }
                  }
                }
              },
              {
                condition: { maxHeight: 200 },
                chartOptions: { plotOptions: { pie: { dataLabels: { enabled: !1 } } } }
              }
            ],
            []
          ),
          b = (0, r.useMemo)(
            () => ({
              series: p,
              plotOptions: v,
              chart: F,
              tooltip: C,
              responsive: { rules: E },
              ...S
            }),
            [p, v, F, C, E, S]
          );
        return r.default.createElement(nn, {
          options: b,
          showLocalizedTime: !1,
          onChartDependencyStatus: m
        });
      });
    let nz = (e, t) => {
        let n = 1,
          l = e;
        for (; (null == l ? void 0 : l.parent) !== void 0 && (l = t.get(l.parent));) n += 1;
        return n;
      },
      nW = (e) => {
        let t = new Map(e.map((e) => [e.id, e])),
          n = new Map();
        return (e.forEach((e) => n.set(e.id, nz(e, t))), n);
      },
      nV = (e) => {
        let t = new Map(e.map((e) => [e.id, e]));
        return e.reduce((e, n) => Math.max(e, nz(n, t)), 1);
      },
      nH = (e, t) => {
        if (void 0 !== t && t > 0)
          return e.map((e) => ({
            id: e.id,
            name: e.name,
            value: e.value,
            parent: e.parent,
            colorValue: e.value / t
          }));
        let n = e.reduce((e, t) => {
            var n;
            return (
              void 0 !== t.value &&
                e.set(t.parent, (null != (n = e.get(t.parent)) ? n : 0) + t.value),
              e
            );
          }, new Map()),
          l = new Map();
        return (
          e.forEach((e) => {
            if (void 0 !== e.value) {
              var t;
              let a = null != (t = n.get(e.parent)) ? t : 1,
                o = e.value / a;
              l.set(e.id, o);
            }
          }),
          e.map((t) => {
            let n;
            return (
              (n =
                void 0 !== t.value
                  ? l.get(t.id)
                  : ((t) => {
                      let n = e.filter((e) => e.parent === t && void 0 !== e.value);
                      if (0 === n.length) return;
                      let a = n.reduce((e, t) => {
                        var n, l;
                        return (null != (n = t.value) ? n : 0) >
                          (null != (l = null == e ? void 0 : e.value) ? l : 0)
                          ? t
                          : e;
                      }, n[0]);
                      return l.get(a.id);
                    })(t.id)),
              { id: t.id, name: t.name, value: t.value, parent: t.parent, colorValue: n }
            );
          })
        );
      },
      n_ = "Other",
      nG = (e, t, n) => {
        var l;
        let a, o;
        if (0 === e.length || t <= 0) return e;
        let i =
          null != n ? n : e.filter((e) => void 0 === e.parent).reduce((e, t) => e + t.value, 0);
        if (i <= 0) return e;
        let r = (t / 100) * i,
          u = nV(e),
          s = [...e];
        for (let e = u; e >= 1; e -= 1) {
          let t = nW(s),
            n = s.filter((n) => t.get(n.id) === e),
            l = new Map();
          n.forEach((e) => {
            var t;
            let n = null != (t = e.parent) ? t : "";
            (l.has(n) || l.set(n, []), l.get(n).push(e));
          });
          let a = new Set(),
            o = [];
          l.forEach((e, t) => {
            let n = e.filter((e) => e.value < r);
            if (0 === n.length) return;
            let l = "" === t ? void 0 : t;
            (o.push({
              id: "other-".concat(t || "root"),
              name: n_,
              value: n.reduce((e, t) => e + t.value, 0),
              parent: l || void 0
            }),
              n.forEach((e) => a.add(e.id)));
          });
          for (let e = 0; e !== a.size;)
            ((e = a.size),
              s.forEach((e) => {
                void 0 !== e.parent && a.has(e.parent) && a.add(e.id);
              }));
          s = s.filter((e) => !a.has(e.id)).concat(o);
        }
        return (
          (l = s),
          (a = new Map()),
          l.forEach((e) => {
            void 0 !== e.parent &&
              (a.has(e.parent) || a.set(e.parent, []), a.get(e.parent).push(e));
          }),
          (o = new Set()),
          (a.forEach((e) => {
            1 === e.length && e[0].name === n_ && o.add(e[0].id);
          }),
          0 === o.size)
            ? l
            : l.filter((e) => !o.has(e.id))
        );
      },
      nj = (e) => {
        let {
            data: t,
            tooltipFormatter: l,
            formatDataLabel: a,
            chartStyleMode: o = tW.Normal,
            height: i,
            rootName: u,
            minDisplayPercentage: s,
            colorBySiblingProportion: d,
            onChartLoad: c,
            onRootNodeChanged: m
          } = e,
          h,
          f,
          p,
          v,
          F,
          C,
          S,
          E = ((e) => {
            let { chartStyleMode: t, onChartLoad: n, height: l } = e,
              a = (0, g.useTheme)(),
              o = (0, r.useMemo)(
                () => ni({ theme: a, chartType: tz.Treemap, chartStyleMode: t, onChartLoad: n }),
                [t, n, a]
              );
            return (0, r.useMemo)(
              () => ({ ...o, ...nr, height: null != l ? l : o.height }),
              [o, l]
            );
          })({ chartStyleMode: o, onChartLoad: c, height: i }),
          b =
            ((h = (0, g.useTheme)()),
            (0, r.useMemo)(
              () => ({ ...nF({ theme: h }), split: !1, formatter: p }),
              [
                h,
                (p = (0, r.useCallback)(
                  function () {
                    var e;
                    let { value: t, series: n, name: a, options: o } = this,
                      i = null == (e = n.tree) ? void 0 : e.val,
                      r = null != t ? t : 0,
                      u = l({
                        name: t_(null != a ? a : ""),
                        value: r,
                        percentage: i && i > 0 ? r / i : void 0,
                        custom: null == o ? void 0 : o.custom
                      });
                    return '<div style="'.concat(f, '">').concat(u, "</div>");
                  },
                  [l, (f = t$())]
                ))
              ]
            )),
          A =
            ((v = (0, g.useTheme)()),
            (0, r.useMemo)(
              () => ({
                min: 0,
                max: 1,
                stops: [
                  [0, ty("Yellow3", v)],
                  [0.25, ty("Green3", v)],
                  [0.5, ty("Cyan2", v)],
                  [0.75, ty("Blue3", v)],
                  [1, ty("Purple4", v)]
                ],
                labels: {
                  style: { color: v.palette.content.standard, ...ns(v, "body2") },
                  formatter: F
                },
                width: 512,
                minPadding: 2,
                tickAmount: 5
              }),
              [
                (F = (0, r.useCallback)(function () {
                  let { value: e } = this,
                    t = Number(e);
                  return Number.isNaN(t) ? "" : "".concat(Math.round(100 * t), "%");
                }, [])),
                v
              ]
            )),
          y = (0, r.useMemo)(
            () => ({
              useHTML: !0,
              formatter: S,
              showFullPath: !0,
              buttonTheme: {
                fill: "transparent",
                stroke: C.palette.content.standard,
                style: {
                  color: C.palette.content.standard,
                  ...ns(C, "body2"),
                  textDecoration: "none"
                },
                states: {
                  hover: {
                    fill: "transparent",
                    stroke: C.palette.content.standard,
                    style: { ...ns(C, "body2"), textDecoration: "underline" }
                  }
                }
              }
            }),
            [
              (S = (0, r.useCallback)(
                function (e) {
                  let t,
                    { levelOptions: n } = e,
                    { name: l } = n;
                  return '<span style="color: '
                    .concat(C.palette.content.standard, "; ")
                    .concat(
                      ((t = "body2"),
                      "font-family: "
                        .concat(C.typography[t].fontFamily, "; font-style: ")
                        .concat(C.typography[t].fontStyle, "; line-height: ")
                        .concat(C.typography[t].lineHeight, "; letter-spacing: ")
                        .concat(C.typography[t].letterSpacing, "; font-size: ")
                        .concat(C.typography[t].fontSize, ";")),
                      '">'
                    )
                    .concat(t_(null != l ? l : ""), "</span>");
                },
                [(C = (0, g.useTheme)())]
              )),
              C
            ]
          ),
          x = (0, r.useMemo)(() => {
            let {
              data: e,
              rootId: n,
              rootName: l
            } = ((e, t) => {
              var n;
              let l = e.filter((e) => void 0 === e.parent),
                a = null == t ? void 0 : t.minDisplayPercentage,
                o = null != (n = null == t ? void 0 : t.rootName) ? n : "root",
                i = !!(null == t ? void 0 : t.colorBySiblingProportion);
              if (1 === l.length) {
                let t = l[0],
                  n = t.id,
                  o = t.name,
                  r = e.filter((e) => e.id !== n);
                return (
                  void 0 !== a && a > 0 && (r = nG(r, a, t.value)),
                  { data: nH(r, i ? void 0 : t.value), rootId: n, rootName: o }
                );
              }
              let r = e;
              void 0 !== a && a > 0 && (r = nG(r, a));
              let u = r.filter((e) => void 0 === e.parent).reduce((e, t) => e + t.value, 0),
                s = nH(r, i ? void 0 : u);
              return {
                data: [
                  { id: "root", name: o, value: u, colorValue: 1 },
                  ...s.map((e) => (void 0 === e.parent ? { ...e, parent: "root" } : e))
                ],
                rootId: "root",
                rootName: o
              };
            })(t, { minDisplayPercentage: s, rootName: u, colorBySiblingProportion: d });
            return [{ type: tz.Treemap, name: l, id: n, rootId: n, data: e, breadcrumbs: y }];
          }, [t, s, u, d, y]),
          M = ((e) => {
            let { formatDataLabel: t, onRootNodeChanged: l } = e,
              a = (0, g.useTheme)(),
              o = ((e) => {
                let { formatDataLabel: t } = e,
                  n = (0, g.useTheme)();
                return (0, r.useCallback)(
                  function () {
                    let { name: e, value: l, series: a, node: o, colorValue: i } = this;
                    if (!e) return "";
                    let r = !(null == o ? void 0 : o.children) || 0 === o.children.length,
                      u = void 0 !== i && i < 0.05 ? tM(n, "inverse") : tM(n, "standard"),
                      s = t_(e);
                    if (r && null != l) {
                      let o = t_(
                          String(t ? t({ y: l, category: e, seriesName: a.name }) : "".concat(l))
                        ),
                        i = "".concat(
                          "color: ".concat(u, ";"),
                          " text-overflow: ellipsis; width: 100%; display: inline-block; overflow: hidden;"
                        ),
                        r =
                          "Other" !== e
                            ? '<span style="'
                                .concat(i, " ")
                                .concat(nd(n, "chip"), '">')
                                .concat(s, "</span><br>")
                            : "";
                      return ""
                        .concat(r, '<span style="')
                        .concat(i, " ")
                        .concat(nd(n, "caption"), ' ">')
                        .concat(o, "</span>");
                    }
                    return '<div style="padding-top: 4px; '
                      .concat(nd(n, "chip"), '">')
                      .concat(s, "</div>");
                  },
                  [t, n]
                );
              })({ formatDataLabel: t });
            return (0, r.useMemo)(
              () => ({
                treemap: {
                  allowTraversingTree: !0,
                  alternateStartingDirection: !0,
                  levelIsConstant: !1,
                  borderWidth: 2,
                  borderRadius: 3,
                  borderColor: a.palette.surface[0],
                  nodeSizeBy: "leaf",
                  animationLimit: 100,
                  layoutAlgorithm: "squarified",
                  dataLabels: {
                    enabled: !0,
                    style: { color: a.palette.content.standard, textOutline: "none" },
                    useHTML: !0,
                    formatter: o
                  },
                  levels: [
                    { level: 1, dataLabels: { enabled: !0, headers: !0 } },
                    { level: 2, dataLabels: { enabled: !0, headers: !0 } }
                  ],
                  events: {
                    setRootNode(e) {
                      var t;
                      if (
                        (null == l ||
                          l({
                            newRootId: null != (t = e.newRootId) ? t : "",
                            previousRootId: e.previousRootId,
                            trigger: e.trigger
                          }),
                        "layoutFix" === e.trigger)
                      )
                        return;
                      let { chart: a } = this;
                      (clearTimeout(n),
                        (n = setTimeout(() => {
                          (a.update(
                            { plotOptions: { treemap: { dataLabels: { enabled: !0 } } } },
                            !0,
                            !0,
                            !1
                          ),
                            requestAnimationFrame(() => {
                              a.update({}, !0, !0, !1);
                            }));
                        }, 500)));
                    }
                  }
                }
              }),
              [a, o, l]
            );
          })({ formatDataLabel: a, onRootNodeChanged: m }),
          N = (0, r.useMemo)(
            () => ({
              series: x,
              plotOptions: M,
              chart: E,
              tooltip: b,
              colorAxis: A,
              title: { style: { display: "none" } },
              credits: { enabled: !1 }
            }),
            [x, M, E, b, A]
          );
        return r.default.createElement(nn, { options: N });
      };
    nj.displayName = "TreemapChart";
    var nX = r.default.memo(nj);
    let nU = (e) => {
      let {
          model: t,
          viewport: n,
          zoom: l,
          maxWidth: a = 176,
          maxHeight: o = 120,
          onNavigate: i,
          onPanActivity: u
        } = e,
        { width: s, height: d } = t,
        c = (0, r.useRef)(null),
        m = (0, r.useRef)(!1),
        g = Math.min(a / s, o / d, 1),
        h = n.scrollLeft / l,
        f = n.scrollTop / l,
        p = n.clientWidth / l,
        v = n.clientHeight / l,
        F = (0, r.useCallback)(
          (e, t) => {
            let a = c.current;
            if (!a) return;
            let o = a.getBoundingClientRect(),
              r = e - o.left,
              u = t - o.top,
              s = r / g,
              d = u / g;
            i(s * l - n.clientWidth / 2, d * l - n.clientHeight / 2);
          },
          [g, l, n.clientWidth, n.clientHeight, i]
        ),
        C = (0, r.useCallback)(
          (e) => {
            ((m.current = !0),
              null == u || u(),
              e.currentTarget.setPointerCapture(e.pointerId),
              F(e.clientX, e.clientY));
          },
          [F, u]
        ),
        S = (0, r.useCallback)(
          (e) => {
            m.current && (null == u || u(), F(e.clientX, e.clientY));
          },
          [F, u]
        ),
        E = (0, r.useCallback)(
          (e) => {
            ((m.current = !1),
              null == u || u(),
              e.currentTarget.hasPointerCapture(e.pointerId) &&
                e.currentTarget.releasePointerCapture(e.pointerId));
          },
          [u]
        );
      return r.default.createElement(
        "svg",
        {
          ref: c,
          width: s * g,
          height: d * g,
          viewBox: "0 0 ".concat(s, " ").concat(d),
          onPointerDown: C,
          onPointerMove: S,
          onPointerUp: E,
          onPointerCancel: E,
          className:
            "block cursor-pointer [touch-action:none] [background:rgba(18,18,21,0.72)] [backdrop-filter:blur(4px)] [border:1px_solid_rgba(255,255,255,0.12)] [border-radius:6px] [box-shadow:0_2px_10px_rgba(0,0,0,0.35)]"
        },
        t.links.map((e) =>
          r.default.createElement("line", {
            key: e.id,
            x1: e.x1,
            y1: e.y1,
            x2: e.x2,
            y2: e.y2,
            stroke: e.color,
            strokeOpacity: 0.25,
            strokeWidth: Math.max(1, Math.min(18, e.width))
          })
        ),
        t.nodes.map((e) =>
          r.default.createElement("rect", {
            key: e.id,
            x: e.x0,
            y: e.y0,
            width: e.x1 - e.x0,
            height: Math.max(1, e.y1 - e.y0),
            fill: e.color,
            fillOpacity: 0.65
          })
        ),
        r.default.createElement("rect", {
          x: Math.max(0, h),
          y: Math.max(0, f),
          width: Math.min(p, s),
          height: Math.min(v, d),
          fill: "rgba(255, 255, 255, 0.1)",
          stroke: "#f7f7f8",
          strokeWidth: 1.5,
          vectorEffect: "non-scaling-stroke",
          pointerEvents: "none"
        })
      );
    };
    nU.displayName = "SankeyOverview";
    let nK = {
        scrollLeft: 0,
        scrollTop: 0,
        clientWidth: 0,
        clientHeight: 0,
        scrollWidth: 0,
        scrollHeight: 0
      },
      nq = (e, t) => Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY),
      nY = (e, t, n) => Math.max(0, Math.min(e, t / 2, n / 2)),
      nQ = (e, t, n, l) =>
        "M"
          .concat(e, ",")
          .concat(t, " L")
          .concat(e + n, ",")
          .concat(t, " L")
          .concat(e + n, ",")
          .concat(t + l, " L")
          .concat(e, ",")
          .concat(t + l, " Z"),
      nZ = (e) => {
        let { column: t, columnCount: n } = e;
        return n <= 1 ? "both" : 0 === t ? "leading" : t === n - 1 ? "trailing" : "both";
      },
      nJ = (e) => {
        let { x: t, y: n, width: l, height: a, radius: o, cornerMode: i } = e,
          r = { x: t, y: n, width: l, height: a, radius: o };
        switch (i) {
          case "leading":
            return ((e) => {
              let { x: t, y: n, width: l, height: a, radius: o } = e,
                i = nY(o, l, a);
              return 0 === i
                ? nQ(t, n, l, a)
                : "M"
                    .concat(t + i, ",")
                    .concat(n, " L")
                    .concat(t + l, ",")
                    .concat(n, " L")
                    .concat(t + l, ",")
                    .concat(n + a, " L")
                    .concat(t + i, ",")
                    .concat(n + a, " Q")
                    .concat(t, ",")
                    .concat(n + a, " ")
                    .concat(t, ",")
                    .concat(n + a - i, " L")
                    .concat(t, ",")
                    .concat(n + i, " Q")
                    .concat(t, ",")
                    .concat(n, " ")
                    .concat(t + i, ",")
                    .concat(n, " Z");
            })(r);
          case "trailing":
            return ((e) => {
              let { x: t, y: n, width: l, height: a, radius: o } = e,
                i = nY(o, l, a);
              return 0 === i
                ? nQ(t, n, l, a)
                : "M"
                    .concat(t, ",")
                    .concat(n, " L")
                    .concat(t + l - i, ",")
                    .concat(n, " Q")
                    .concat(t + l, ",")
                    .concat(n, " ")
                    .concat(t + l, ",")
                    .concat(n + i, " L")
                    .concat(t + l, ",")
                    .concat(n + a - i, " Q")
                    .concat(t + l, ",")
                    .concat(n + a, " ")
                    .concat(t + l - i, ",")
                    .concat(n + a, " L")
                    .concat(t, ",")
                    .concat(n + a, " Z");
            })(r);
          default:
            return ((e) => {
              let { x: t, y: n, width: l, height: a, radius: o } = e,
                i = nY(o, l, a);
              return 0 === i
                ? nQ(t, n, l, a)
                : "M"
                    .concat(t + i, ",")
                    .concat(n, " L")
                    .concat(t + l - i, ",")
                    .concat(n, " Q")
                    .concat(t + l, ",")
                    .concat(n, " ")
                    .concat(t + l, ",")
                    .concat(n + i, " L")
                    .concat(t + l, ",")
                    .concat(n + a - i, " Q")
                    .concat(t + l, ",")
                    .concat(n + a, " ")
                    .concat(t + l - i, ",")
                    .concat(n + a, " L")
                    .concat(t + i, ",")
                    .concat(n + a, " Q")
                    .concat(t, ",")
                    .concat(n + a, " ")
                    .concat(t, ",")
                    .concat(n + a - i, " L")
                    .concat(t, ",")
                    .concat(n + i, " Q")
                    .concat(t, ",")
                    .concat(n, " ")
                    .concat(t + i, ",")
                    .concat(n, " Z");
            })(r);
        }
      },
      n$ = (e) => "sankey" === e.type,
      n0 = (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.id) ? t : null == e ? void 0 : e.name;
      },
      n1 = (e, t) => n0(e.fromNode) === t || n0(e.toNode) === t,
      n2 = (e) => "sankey" === e.type,
      n6 = (e) => ("string" == typeof e && e.length > 0 ? e : "#888888"),
      n3 = "relative width-full [overflow:auto] [overscroll-behavior:contain]",
      n4 = (e) => {
        let {
            data: t,
            tooltipFormatter: n,
            formatDataLabel: l,
            chartStyleMode: a = tW.Normal,
            height: o = 360,
            onChartLoad: i,
            containerHeight: u,
            zoomLabelsFormatter: s
          } = e,
          d,
          c,
          m,
          { nodes: h, links: f } = t,
          p = (0, r.useMemo)(
            () =>
              ((e) => {
                let t = Array.from(
                  new Set(e.map((e) => e.column).filter((e) => void 0 !== e))
                ).sort((e, t) => e - t);
                if (t.every((e, t) => e === t)) return e;
                let n = new Map(t.map((e, t) => [e, t]));
                return e.map((e) => {
                  var t;
                  return void 0 === e.column
                    ? e
                    : { ...e, column: null != (t = n.get(e.column)) ? t : e.column };
                });
              })(h),
            [h]
          ),
          v = p.length > 0 && f.length > 0,
          F = (0, g.useTheme)(),
          { dataLabelText: C } = tx(F),
          S = F.palette.surface[0],
          E = (0, r.useRef)(null),
          b = (0, r.useRef)(null),
          A = (0, r.useRef)(null),
          [y, x] = (0, r.useState)(0),
          [M, N] = (0, r.useState)(void 0),
          [w, D] = (0, r.useState)(void 0),
          [B, L] = (0, r.useState)(!1),
          { contentWidth: R, contentHeight: O } = (0, r.useMemo)(
            () =>
              ((e) => {
                var t, n;
                let {
                    nodes: l,
                    links: a,
                    measuredWidth: o,
                    height: i,
                    nodeWidth: r,
                    nodePadding: u,
                    minNodeThickness: s,
                    minColumnWidth: d
                  } = e,
                  c = new Map(),
                  m = 0;
                for (let e of l)
                  void 0 !== e.column &&
                    ((m = Math.max(m, e.column)),
                    c.set(e.column, (null != (t = c.get(e.column)) ? t : 0) + 1));
                if (0 === c.size && a.length > 0) {
                  let e = new Map();
                  for (let t of a) {
                    let l = null != (n = e.get(t.from)) ? n : [];
                    (l.push(t.to), e.set(t.from, l));
                  }
                  let t = new Map(),
                    o = (n, l) => {
                      var a;
                      let i = t.get(n);
                      if (void 0 !== i) return i;
                      if (l.has(n)) return 0;
                      l.add(n);
                      let r = null != (a = e.get(n)) ? a : [],
                        u = 0 === r.length ? 0 : 1 + Math.max(...r.map((e) => o(e, l)));
                      return (l.delete(n), t.set(n, u), u);
                    };
                  for (let e of l) m = Math.max(m, o(e.id, new Set()));
                }
                let g = 0;
                for (let e of c.values()) g = Math.max(g, e);
                return {
                  contentWidth: Math.max(o > 0 ? o : 600, 0),
                  contentHeight: Math.max(i, 0),
                  lastColumnIndex: m,
                  maxColumnCount: g
                };
              })({
                nodes: p,
                links: f,
                measuredWidth: y,
                height: o,
                nodeWidth: 8,
                nodePadding: 16,
                minNodeThickness: 0,
                minColumnWidth: 0
              }),
            [p, f, y, o]
          ),
          k = (0, r.useMemo)(
            () =>
              ""
                .concat(p.map((e) => e.id).join(","), "|")
                .concat(f.map((e) => "".concat(e.from, ":").concat(e.to)).join(","), "|")
                .concat(R, "x")
                .concat(O),
            [p, f, R, O]
          ),
          I = void 0 !== s,
          T = y > 0 ? Math.min(1, y / R, 640 / O) : 1,
          {
            scrollRef: P,
            zoom: z,
            viewport: W,
            isPanning: V,
            zoomIn: H,
            zoomOut: _,
            reset: G,
            scrollTo: j,
            signalPanActivity: X,
            wasDraggedRef: U
          } = ((e) => {
            let {
                contentWidth: t,
                contentHeight: n,
                enabled: l,
                zoomEnabled: a = !0,
                minZoom: o = 1,
                maxZoom: i = 8,
                zoomStep: u = 1.2,
                panHideDelayMs: s = 1200
              } = e,
              d = (0, r.useRef)(null),
              [c, m] = (0, r.useState)(1),
              [g, h] = (0, r.useState)(nK),
              [f, p] = (0, r.useState)(!1),
              v = (0, r.useRef)(null),
              F = (0, r.useRef)(1),
              C = (0, r.useRef)(null),
              S = (0, r.useRef)(!1),
              E = (0, r.useCallback)(() => {
                let e = d.current;
                e &&
                  h({
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop,
                    clientWidth: e.clientWidth,
                    clientHeight: e.clientHeight,
                    scrollWidth: e.scrollWidth,
                    scrollHeight: e.scrollHeight
                  });
              }, []),
              b = (0, r.useCallback)(() => {
                (p(!0),
                  v.current && clearTimeout(v.current),
                  (v.current = setTimeout(() => {
                    (p(!1), (v.current = null));
                  }, s)));
              }, [s]),
              A = (0, r.useCallback)((e) => Math.min(i, Math.max(o, e)), [o, i]),
              y = (0, r.useCallback)(
                (e, t, n) => {
                  let l = d.current;
                  if (!l) return;
                  let a = F.current,
                    o = A(e);
                  if (1e-4 > Math.abs(o - a)) return;
                  let i = l.getBoundingClientRect(),
                    r = void 0 === t ? l.clientWidth / 2 : t - i.left,
                    u = void 0 === n ? l.clientHeight / 2 : n - i.top;
                  ((C.current = {
                    left: ((l.scrollLeft + r) / a) * o - r,
                    top: ((l.scrollTop + u) / a) * o - u
                  }),
                    (F.current = o),
                    m(o));
                },
                [A]
              ),
              x = (0, r.useCallback)(() => y(F.current * u), [y, u]),
              M = (0, r.useCallback)(() => y(F.current / u), [y, u]),
              N = (0, r.useCallback)(() => {
                ((C.current = { left: 0, top: 0 }), (F.current = 1), m(1));
              }, []),
              w = (0, r.useCallback)((e, t) => {
                let n = d.current;
                n && ((n.scrollLeft = e), (n.scrollTop = t));
              }, []);
            return (
              (0, r.useLayoutEffect)(() => {
                let e = d.current;
                e &&
                  (C.current &&
                    ((e.scrollLeft = C.current.left),
                    (e.scrollTop = C.current.top),
                    (C.current = null)),
                  E());
              }, [c, t, n, E]),
              (0, r.useEffect)(() => {
                let e = d.current;
                if (!e) return;
                let t = () => {
                  (E(), b());
                };
                return (
                  e.addEventListener("scroll", t, { passive: !0 }),
                  () => e.removeEventListener("scroll", t)
                );
              }, [E, b]),
              (0, r.useEffect)(
                () => () => {
                  v.current && clearTimeout(v.current);
                },
                []
              ),
              (0, r.useEffect)(() => {
                let e = d.current;
                if (!e || !l || !a) return;
                let t = (e) => {
                  if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    let t = Math.exp(-(0.0015 * e.deltaY));
                    y(F.current * t, e.clientX, e.clientY);
                  }
                };
                return (
                  e.addEventListener("wheel", t, { passive: !1 }),
                  () => e.removeEventListener("wheel", t)
                );
              }, [l, a, y]),
              (0, r.useEffect)(() => {
                let e = d.current;
                if (!e || !l || !a) return;
                let t = null,
                  n = !1,
                  o = (l) => {
                    if ("mouse" !== l.pointerType || 0 !== l.button) return;
                    let a = l.target instanceof Element ? l.target : null;
                    (null == a ? void 0 : a.closest("button, a, input, textarea, select")) ||
                      ((S.current = !1),
                      (t = {
                        x: l.clientX,
                        y: l.clientY,
                        scrollLeft: e.scrollLeft,
                        scrollTop: e.scrollTop
                      }),
                      (n = !1));
                  },
                  i = (l) => {
                    if (!t) return;
                    let a = l.clientX - t.x,
                      o = l.clientY - t.y;
                    if (!n) {
                      if (4 > Math.hypot(a, o)) return;
                      ((n = !0),
                        (e.style.cursor = "grabbing"),
                        e.setPointerCapture && e.setPointerCapture(l.pointerId),
                        b());
                    }
                    (l.preventDefault(),
                      (e.scrollLeft = t.scrollLeft - a),
                      (e.scrollTop = t.scrollTop - o),
                      n && b());
                  },
                  r = (l) => {
                    var a;
                    (n && ((S.current = !0), b()),
                      (null == (a = e.hasPointerCapture) ? void 0 : a.call(e, l.pointerId)) &&
                        e.releasePointerCapture(l.pointerId),
                      (t = null),
                      (n = !1),
                      (e.style.cursor = "grab"));
                  };
                return (
                  (e.style.cursor = "grab"),
                  e.addEventListener("pointerdown", o, { capture: !0 }),
                  window.addEventListener("pointermove", i, { passive: !1 }),
                  window.addEventListener("pointerup", r),
                  () => {
                    ((e.style.cursor = ""),
                      e.removeEventListener("pointerdown", o, { capture: !0 }),
                      window.removeEventListener("pointermove", i),
                      window.removeEventListener("pointerup", r));
                  }
                );
              }, [l, a, b]),
              (0, r.useEffect)(() => {
                let e = d.current;
                if (!e || !l || !a) return;
                let t = null,
                  n = null,
                  o = !1,
                  i = (l) => {
                    if (1 === l.touches.length) {
                      let a = l.touches[0];
                      ((t = {
                        x: a.clientX,
                        y: a.clientY,
                        scrollLeft: e.scrollLeft,
                        scrollTop: e.scrollTop
                      }),
                        (o = !1),
                        (n = null));
                    } else
                      2 === l.touches.length &&
                        ((n = { distance: nq(l.touches[0], l.touches[1]), zoom: F.current }),
                        (t = null));
                  },
                  r = (l) => {
                    if (n && 2 === l.touches.length) {
                      l.preventDefault();
                      let e = nq(l.touches[0], l.touches[1]);
                      if (n.distance > 0) {
                        let t = (l.touches[0].clientX + l.touches[1].clientX) / 2,
                          a = (l.touches[0].clientY + l.touches[1].clientY) / 2;
                        y(n.zoom * (e / n.distance), t, a);
                      }
                      return;
                    }
                    if (t && 1 === l.touches.length) {
                      let n = l.touches[0],
                        a = n.clientX - t.x,
                        i = n.clientY - t.y;
                      if (!o && 4 > Math.hypot(a, i)) return;
                      ((o = !0),
                        l.preventDefault(),
                        (e.scrollLeft = t.scrollLeft - a),
                        (e.scrollTop = t.scrollTop - i),
                        b());
                    }
                  },
                  u = (l) => {
                    if ((o && b(), 0 === l.touches.length)) ((t = null), (n = null), (o = !1));
                    else if (1 === l.touches.length) {
                      n = null;
                      let a = l.touches[0];
                      t = {
                        x: a.clientX,
                        y: a.clientY,
                        scrollLeft: e.scrollLeft,
                        scrollTop: e.scrollTop
                      };
                    }
                  };
                return (
                  e.addEventListener("touchstart", i, { passive: !1 }),
                  e.addEventListener("touchmove", r, { passive: !1 }),
                  e.addEventListener("touchend", u, { passive: !0 }),
                  e.addEventListener("touchcancel", u, { passive: !0 }),
                  () => {
                    (e.removeEventListener("touchstart", i),
                      e.removeEventListener("touchmove", r),
                      e.removeEventListener("touchend", u),
                      e.removeEventListener("touchcancel", u));
                  }
                );
              }, [l, a, y, b]),
              {
                scrollRef: d,
                zoom: a ? c : 1,
                viewport: g,
                isPanning: f,
                zoomIn: x,
                zoomOut: M,
                reset: N,
                scrollTo: w,
                readViewport: E,
                signalPanActivity: b,
                wasDraggedRef: S
              }
            );
          })({
            contentWidth: R,
            contentHeight: O,
            enabled: !0,
            zoomEnabled: I,
            minZoom: T,
            maxZoom: 8,
            panHideDelayMs: 1200
          }),
          K = (0, r.useCallback)(
            (e) => {
              ((e, t) => {
                var n, l, a, o, i, r, u;
                let {
                    nodeRadius: s,
                    borderWidth: d,
                    borderColor: c,
                    focusedNodeId: m,
                    idleLinkOpacity: g = 0.3,
                    activeLinkOpacity: h = 0.75,
                    dimmedLinkOpacity: f = 0.1,
                    dimmedNodeOpacity: p = 0.25
                  } = t,
                  v = e.series.find(n$);
                if (!(null == v || null == (o = v.nodes) ? void 0 : o.length)) return;
                let F = Math.max(
                    1,
                    null != (n = null == (i = v.nodeColumns) ? void 0 : i.length) ? n : 1
                  ),
                  C = new Set();
                if (m)
                  for (let e of (C.add(m), null != (l = v.points) ? l : [])) {
                    if (e.isNode || !n1(e, m)) continue;
                    let t = n0(e.fromNode),
                      n = n0(e.toNode);
                    (t && C.add(t), n && C.add(n));
                  }
                for (let e of v.nodes) {
                  if (!e.isNode || !e.shapeArgs || "none" === e.shapeArgs.display) continue;
                  let { x: t, y: n, width: l, height: a } = e.shapeArgs,
                    o = null != (r = e.column) ? r : 0,
                    i = n0(e),
                    g = void 0 === m || (i && C.has(i)) ? 1 : p;
                  if (e.graphic) {
                    let r = nJ({
                      x: t,
                      y: n,
                      width: l,
                      height: a,
                      radius: s,
                      cornerMode: nZ({ column: o, columnCount: F })
                    });
                    e.graphic.attr({ d: r, stroke: c, "stroke-width": d, opacity: g });
                    let u = e.graphic.element;
                    u &&
                      (u.setAttribute("paint-order", "stroke fill"),
                      u.setAttribute("stroke-linejoin", "round"),
                      i &&
                        (u.setAttribute("data-sankey-node", ""),
                        u.setAttribute("data-node-id", i)));
                  }
                  null == (u = e.dataLabel) || u.attr({ opacity: g });
                }
                for (let e of null != (a = v.points) ? a : []) {
                  if (e.isNode || !e.graphic) continue;
                  let t = void 0 === m ? g : n1(e, m) ? h : f;
                  e.graphic.attr({ "fill-opacity": t, opacity: 1 });
                }
              })(e, {
                nodeRadius: 4,
                borderWidth: 4,
                borderColor: S,
                focusedNodeId: M,
                idleLinkOpacity: 0.2,
                activeLinkOpacity: 0.75,
                dimmedLinkOpacity: 0.1,
                dimmedNodeOpacity: 0.25
              });
            },
            [M, S]
          ),
          q = (0, r.useCallback)(
            (e) => {
              if (!I) return;
              let t = ((e) => {
                var t, n, l, a, o, i, r, u, s;
                let d = e.series.find(n2);
                if (!(null == d || null == (u = d.nodes) ? void 0 : u.length)) return;
                let c = null != (t = e.plotLeft) ? t : 0,
                  m = null != (n = e.plotTop) ? n : 0,
                  g = null != (l = e.chartWidth) ? l : 0,
                  h = null != (a = e.chartHeight) ? a : 0;
                if (g <= 0 || h <= 0) return;
                let f = d.nodes.flatMap((e, t) => {
                    var n, l, a, o, i, r;
                    if (!e.isNode || !e.shapeArgs) return [];
                    let u = (null != (n = e.shapeArgs.x) ? n : 0) + c,
                      s = (null != (l = e.shapeArgs.y) ? l : 0) + m,
                      d = null != (a = e.shapeArgs.width) ? a : 0,
                      g = null != (o = e.shapeArgs.height) ? o : 0;
                    return [
                      {
                        id: null != (i = null != (r = e.id) ? r : e.name) ? i : "node-".concat(t),
                        x0: u,
                        y0: s,
                        x1: u + d,
                        y1: s + g,
                        color: n6(e.color)
                      }
                    ];
                  }),
                  p = null != (o = d.translationFactor) ? o : 1,
                  v = null != (i = null == (s = d.options) ? void 0 : s.minLinkWidth) ? i : 0;
                return {
                  width: g,
                  height: h,
                  nodes: f,
                  links: (null != (r = d.points) ? r : []).flatMap((e, t) => {
                    var n, l, a, o, i, r, u, s, d, g, h, f, F;
                    if (
                      e.isNode ||
                      !(null == (f = e.fromNode) ? void 0 : f.shapeArgs) ||
                      !(null == (F = e.toNode) ? void 0 : F.shapeArgs)
                    )
                      return [];
                    let C = e.fromNode.shapeArgs,
                      S = e.toNode.shapeArgs,
                      E = e.linkBase,
                      b = Math.max(
                        null != (n = E && E.length >= 4 ? Math.abs(E[1] - E[0]) : void 0)
                          ? n
                          : (null != (l = e.weight) ? l : 0) * p,
                        v
                      ),
                      A =
                        E && E.length >= 2
                          ? (E[0] + E[1]) / 2
                          : (null != (a = C.y) ? a : 0) + (null != (o = C.height) ? o : 0) / 2,
                      y =
                        E && E.length >= 4
                          ? (E[2] + E[3]) / 2
                          : (null != (i = S.y) ? i : 0) + (null != (r = S.height) ? r : 0) / 2;
                    return [
                      {
                        id: null != (u = e.id) ? u : "link-".concat(t),
                        x1: (null != (s = C.x) ? s : 0) + (null != (d = C.width) ? d : 0) + c,
                        y1: A + m,
                        x2: (null != (g = S.x) ? g : 0) + c,
                        y2: y + m,
                        width: Math.max(1, b),
                        color: n6(null != (h = e.color) ? h : e.fromNode.color)
                      }
                    ];
                  })
                };
              })(e);
              D((e) =>
                (null == e ? void 0 : e.width) === (null == t ? void 0 : t.width) &&
                (null == e ? void 0 : e.height) === (null == t ? void 0 : t.height) &&
                (null == e ? void 0 : e.nodes.length) === (null == t ? void 0 : t.nodes.length) &&
                (null == e ? void 0 : e.links.length) === (null == t ? void 0 : t.links.length)
                  ? e
                  : t
              );
            },
            [I]
          ),
          Q = (0, r.useMemo)(() => {
            let e = new Map();
            for (let t of p) e.set(t.id, t);
            return e;
          }, [p]),
          Z = (0, r.useCallback)(
            function () {
              var e;
              return ((e) => {
                let { nodeId: t, nodeName: n, nodesById: l, formatDataLabel: a } = e,
                  o = void 0 === t ? void 0 : l.get(t);
                return o ? (a ? a(o) : o.name) : n;
              })({
                nodeId: null != (e = this.id) ? e : this.name,
                nodeName: this.name,
                nodesById: Q,
                formatDataLabel: l
              });
            },
            [l, Q]
          ),
          J = (0, r.useCallback)((e) => {
            N((t) => (t === e ? void 0 : e));
          }, []),
          $ = (0, r.useCallback)(() => N(void 0), []),
          ee = (0, r.useMemo)(
            () =>
              0 === f.length || 0 === p.length
                ? []
                : [
                    {
                      type: tz.Sankey,
                      data: f,
                      nodes: ((e) => {
                        let { nodes: t, colors: n, theme: l } = e,
                          a = 0,
                          o = t.reduce(
                            (e, t) => (void 0 === t.column ? e : Math.max(e, t.column)),
                            0
                          );
                        return t.map((e) => {
                          var t;
                          let i = null != (t = n[a++ % n.length]) ? t : n[0],
                            r = e.color ? ty(e.color, l) : i ? ty(i, l) : void 0,
                            u = 0 === e.column,
                            s = void 0 !== e.column && e.column === o;
                          return {
                            id: e.id,
                            name: e.name,
                            column: e.column,
                            color: r,
                            dataLabels: u ? { align: "left" } : s ? { align: "right" } : {}
                          };
                        });
                      })({ nodes: p, colors: tE, theme: F }),
                      nodePadding: 16,
                      nodeWidth: 8,
                      linkOpacity: 0.2,
                      linkColorMode: "gradient",
                      minLinkWidth: 0,
                      borderWidth: 4,
                      borderColor: S,
                      states: {
                        hover: { linkOpacity: 1, opacity: 1 },
                        inactive: { linkOpacity: M ? 0.2 : 0.12, opacity: M ? 1 : 0.25 }
                      },
                      point: {
                        events: {
                          click() {
                            var e;
                            if (!this.isNode) return;
                            let t = null != (e = this.id) ? e : this.name;
                            t && J(t);
                          }
                        }
                      },
                      dataLabels: {
                        enabled: !0,
                        crop: !1,
                        overflow: "allow",
                        allowOverlap: !0,
                        verticalAlign: "top",
                        color: C,
                        padding: 16,
                        style: { textOutline: "none", fontSize: "12px", fontWeight: "400" },
                        nodeFormatter: Z
                      }
                    }
                  ],
            [f, p, F, S, M, J, C, Z]
          ),
          et = ((e) => {
            let { chartStyleMode: t, onChartLoad: n, height: l } = e,
              a = (0, g.useTheme)(),
              o = (0, r.useMemo)(
                () => ni({ theme: a, chartType: tz.Sankey, chartStyleMode: t, onChartLoad: n }),
                [t, n, a]
              );
            return (0, r.useMemo)(
              () => ({
                ...o,
                ...nr,
                height: null != l ? l : o.height,
                zoomType: "none",
                style: { ...o.style, overflow: "hidden" }
              }),
              [o, l]
            );
          })({ chartStyleMode: a, height: O, onChartLoad: i }),
          en = (0, r.useMemo)(
            () => ({
              ...et,
              width: R,
              events: {
                ...et.events,
                load(e) {
                  var t, n;
                  ((b.current = this),
                    null == (n = et.events) || null == (t = n.load) || t.call(this, e),
                    K(this),
                    q(this));
                },
                render(e) {
                  var t, n;
                  ((b.current = this),
                    null == (n = et.events) || null == (t = n.render) || t.call(this, e),
                    K(this),
                    q(this));
                }
              }
            }),
            [K, q, et, R]
          ),
          el =
            ((d = (0, g.useTheme)()),
            (0, r.useMemo)(
              () => ({ ...nF({ theme: d }), split: !1, formatter: m }),
              [
                d,
                (m = (0, r.useCallback)(
                  function () {
                    var e, t, l, a, o, i, r, u;
                    let s = n(
                      this.isNode
                        ? {
                            kind: "node",
                            name: t_(null != (e = this.name) ? e : ""),
                            value: null != (t = null != (l = this.sum) ? l : this.weight) ? t : 0
                          }
                        : {
                            kind: "link",
                            fromName: t_(
                              null != (a = null == (r = this.fromNode) ? void 0 : r.name) ? a : ""
                            ),
                            toName: t_(
                              null != (o = null == (u = this.toNode) ? void 0 : u.name) ? o : ""
                            ),
                            value: null != (i = this.weight) ? i : 0,
                            sourceShare: ((e) => {
                              var t, n;
                              let l = null == (n = e.fromNode) ? void 0 : n.sum;
                              if (void 0 !== l && !(l <= 0))
                                return (null != (t = e.weight) ? t : 0) / l;
                            })(this)
                          }
                    );
                    return '<div style="'.concat(c, '">').concat(s, "</div>");
                  },
                  [n, (c = t$())]
                ))
              ]
            )),
          ea = (0, r.useMemo)(
            () => ({
              series: ee,
              chart: en,
              tooltip: el,
              title: { text: void 0 },
              credits: { enabled: !1 }
            }),
            [ee, en, el]
          );
        ((0, r.useLayoutEffect)(() => {
          let e = E.current;
          if (!e) return;
          let t = 0,
            n = (e) => {
              e > 0 && Math.abs(e - t) >= 1 && ((t = e), x(e));
            },
            l = new ResizeObserver((e) => {
              let t = e[0];
              t && n(t.contentRect.width);
            });
          return (l.observe(e), n(e.clientWidth), () => l.disconnect());
        }, []),
          (0, r.useLayoutEffect)(() => {
            let e = b.current;
            e && K(e);
          }, [K]),
          (0, r.useLayoutEffect)(() => {
            let e = P.current;
            if (!e) return;
            let t = (e) => {
              if (U.current) {
                U.current = !1;
                return;
              }
              let t = e.target instanceof Element ? e.target : null;
              !(null == t ? void 0 : t.closest("[data-sankey-node], [data-node-id]")) &&
                ((null == t ? void 0 : t.closest(".highcharts-point")) || $());
            };
            return (e.addEventListener("click", t), () => e.removeEventListener("click", t));
          }, [P, $, U]));
        let eo = R * z,
          ei = O * z,
          er = null != u ? u : Math.min(ei, 640),
          eu = ei + 1 < er ? (er - ei) / 2 : 0,
          es = eo > (W.clientWidth || y) + 1 || ei > er + 1,
          ed = I && es && void 0 !== w,
          ec = (0, r.useCallback)(() => {
            (A.current && (clearTimeout(A.current), (A.current = null)), L(!0));
          }, []),
          em = (0, r.useCallback)(() => {
            (A.current && clearTimeout(A.current),
              (A.current = setTimeout(() => {
                (L(!1), (A.current = null));
              }, 1200)));
          }, []);
        return (
          (0, r.useLayoutEffect)(
            () => () => {
              A.current && clearTimeout(A.current);
            },
            []
          ),
          r.default.createElement(
            "div",
            {
              ref: E,
              className: "relative width-full [overflow:hidden] [min-width:0]",
              onMouseEnter: ed ? ec : void 0,
              onMouseLeave: ed ? em : void 0
            },
            r.default.createElement(
              "div",
              {
                ref: P,
                "data-testid": "sankey-viewport",
                className: I ? "".concat(n3, " [touch-action:none]") : n3,
                style: { height: er, maxHeight: void 0 !== u ? void 0 : 640 }
              },
              r.default.createElement(
                "div",
                {
                  className: "[box-sizing:content-box]",
                  style: { width: eo, height: ei, paddingTop: eu, paddingBottom: eu }
                },
                r.default.createElement(
                  "div",
                  { className: "[overflow:hidden]", style: { width: eo, height: ei } },
                  r.default.createElement(
                    "div",
                    {
                      className: "[overflow:hidden] [transform-origin:0_0]",
                      style: { width: R, height: O, transform: "scale(".concat(z, ")") }
                    },
                    v
                      ? r.default.createElement(nn, {
                          key: k,
                          options: ea,
                          showLocalizedTime: !1,
                          chartUpdatePolicy: "non-animated"
                        })
                      : null
                  )
                )
              )
            ),
            s
              ? r.default.createElement(
                  "div",
                  {
                    className: "absolute flex flex-col gap-xsmall top-[8px] right-[8px] [z-index:2]"
                  },
                  r.default.createElement(Y, {
                    icon: "icon-filled-magnifying-glass-plus",
                    ariaLabel: s("zoomIn"),
                    onClick: H,
                    variant: "OverMedia",
                    size: "Small"
                  }),
                  r.default.createElement(Y, {
                    icon: "icon-filled-magnifying-glass-minus",
                    ariaLabel: s("zoomOut"),
                    onClick: _,
                    variant: "OverMedia",
                    size: "Small"
                  }),
                  r.default.createElement(Y, {
                    icon: "icon-filled-arrow-spin-counter-clockwise",
                    ariaLabel: s("resetView"),
                    onClick: G,
                    variant: "OverMedia",
                    size: "Small"
                  })
                )
              : null,
            ed
              ? r.default.createElement(
                  "div",
                  {
                    className:
                      "absolute transition-opacity ease-standard-out bottom-[8px] left-[8px] [z-index:2] ".concat(
                        ed && (V || B)
                          ? "pointer-events-auto [opacity:1]"
                          : "pointer-events-none [opacity:0]"
                      )
                  },
                  r.default.createElement(nU, {
                    model: w,
                    viewport: W,
                    zoom: z,
                    maxWidth: 176,
                    maxHeight: 120,
                    onNavigate: j,
                    onPanActivity: X
                  })
                )
              : null
          )
        );
      };
    n4.displayName = "SankeyChart";
    var n5 = r.default.memo(n4),
      n7 = r.default.memo((e) => {
        let { height: t = 360 } = e,
          n = (0, g.useTheme)(),
          l = (0, r.useMemo)(() => tx(n), [n]),
          a = (0, r.useMemo)(
            () => ({
              chart: {
                type: "line",
                height: t,
                backgroundColor: "transparent",
                style: { fontFamily: n.typography.fontFamily },
                animation: !1,
                showAxes: !0
              },
              title: { text: void 0 },
              credits: { enabled: !1 },
              legend: { enabled: !1 },
              tooltip: { enabled: !1 },
              plotOptions: { series: { enableMouseTracking: !1 } },
              xAxis: {
                min: 0,
                max: 1,
                showEmpty: !0,
                lineColor: l.axis,
                lineWidth: 1,
                tickLength: 0,
                labels: { enabled: !1 },
                gridLineWidth: 0
              },
              yAxis: {
                min: 0,
                max: 1,
                showEmpty: !0,
                gridLineColor: l.gridLine,
                gridLineDashStyle: "ShortDash",
                title: { text: void 0 },
                labels: { enabled: !1 }
              },
              series: [{ type: "line", data: [] }]
            }),
            [t, n.typography.fontFamily, l]
          );
        return r.default.createElement(nn, { options: a });
      });
    function n9(e, t, n) {
      var l;
      let a,
        o = null != (l = n.initialDeps) ? l : [],
        i = !0;
      function r() {
        let l = e();
        return l.length !== o.length || l.some((e, t) => o[t] !== e)
          ? ((o = l),
            (a = t(...l)),
            (null == n ? void 0 : n.onChange) && !(i && n.skipInitialOnChange) && n.onChange(a),
            (i = !1),
            a)
          : a;
      }
      return (
        (r.updateDeps = (e) => {
          o = e;
        }),
        r
      );
    }
    function n8(e, t) {
      if (void 0 !== e) return e;
      throw Error("Unexpected undefined");
    }
    let le = () => {
        if (void 0 !== l) return l;
        if ("u" < typeof navigator) return (l = !1);
        if (/iP(hone|od|ad)/.test(navigator.userAgent)) return (l = !0);
        let e = navigator.maxTouchPoints;
        return (l = "MacIntel" === navigator.platform && void 0 !== e && e > 0);
      },
      lt = (e) => {
        let { offsetWidth: t, offsetHeight: n } = e;
        return { width: t, height: n };
      },
      ln = (e) => e,
      ll = (e) => {
        let t = Math.max(e.startIndex - e.overscan, 0),
          n = Math.min(e.endIndex + e.overscan, e.count - 1) - t + 1,
          l = Array(n);
        for (let e = 0; e < n; e++) l[e] = t + e;
        return l;
      },
      la = (e, t) => {
        let n = e.scrollElement;
        if (!n) return;
        let l = e.targetWindow;
        if (!l) return;
        let a = (e) => {
          let { width: n, height: l } = e;
          t({ width: Math.round(n), height: Math.round(l) });
        };
        if ((a(lt(n)), !l.ResizeObserver)) return () => {};
        let o = new l.ResizeObserver((t) => {
          let l = () => {
            let e = t[0];
            if (null == e ? void 0 : e.borderBoxSize) {
              let t = e.borderBoxSize[0];
              if (t) return void a({ width: t.inlineSize, height: t.blockSize });
            }
            a(lt(n));
          };
          e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
        });
        return (
          o.observe(n, { box: "border-box" }),
          () => {
            o.unobserve(n);
          }
        );
      },
      lo = { passive: !0 },
      li = "onscrollend" in window,
      lr = (e, t) =>
        ((e, t, n) => {
          var l, a;
          let o,
            i = e.scrollElement;
          if (!i) return;
          let r = e.targetWindow;
          if (!r) return;
          let u = e.options.useScrollendEvent && li,
            s = 0,
            d = u
              ? null
              : ((l = () => t(s, !1)),
                (a = e.options.isScrollingResetDelay),
                function () {
                  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                  (r.clearTimeout(o), (o = r.setTimeout(() => l.apply(this, t), a)));
                }),
            c = (e) => () => {
              ((s = n(i)), null == d || d(), t(s, e));
            },
            m = c(!0),
            g = c(!1);
          return (
            i.addEventListener("scroll", m, lo),
            u && i.addEventListener("scrollend", g, lo),
            () => {
              (i.removeEventListener("scroll", m), u && i.removeEventListener("scrollend", g));
            }
          );
        })(e, t, (t) => {
          let { horizontal: n, isRtl: l } = e.options;
          return n ? t.scrollLeft * ((l && -1) || 1) : t.scrollTop;
        }),
      lu = (e, t, n) => {
        if (n.options.useCachedMeasurements) {
          var l;
          let t = n.indexFromElement(e),
            a = n.options.getItemKey(t);
          return null != (l = n.itemSizeCache.get(a)) ? l : n.options.estimateSize(t);
        }
        if (null == t ? void 0 : t.borderBoxSize) {
          let e = t.borderBoxSize[0];
          if (e) return Math.round(e[n.options.horizontal ? "inlineSize" : "blockSize"]);
        }
        if (!t) {
          let t = n.indexFromElement(e),
            l = n.options.getItemKey(t),
            a = n.itemSizeCache.get(l);
          if (void 0 !== a) return a;
        }
        return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
      },
      ls = (e, t, n) => {
        var l, a;
        let { adjustments: o = 0, behavior: i } = t;
        null == (a = null == (l = n.scrollElement) ? void 0 : l.scrollTo) ||
          a.call(l, { [n.options.horizontal ? "left" : "top"]: e + o, behavior: i });
      };
    class ld {
      applyScrollAdjustment(e, t) {
        0 !== e &&
          (le() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)
            ? (this._iosDeferredAdjustment += e)
            : (this._scrollToOffset(this.getScrollOffset(), {
                adjustments: (this.scrollAdjustments += e),
                behavior: t
              }),
              null !== this.scrollOffset &&
                ((this.scrollOffset += this.scrollAdjustments),
                this.scrollOffset < 0 && (this.scrollOffset = 0),
                (this.scrollAdjustments = 0))));
      }
      scheduleScrollReconcile() {
        if (!this.targetWindow) {
          this.scrollState = null;
          return;
        }
        null == this.rafId &&
          (this.rafId = this.targetWindow.requestAnimationFrame(() => {
            ((this.rafId = null), this.reconcileScroll());
          }));
      }
      reconcileScroll() {
        if (!this.scrollState || !this.scrollElement) return;
        if (this.now() - this.scrollState.startedAt > 5e3) {
          this.scrollState = null;
          return;
        }
        let e =
            null != this.scrollState.index
              ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align)
              : void 0,
          t = e ? e[0] : this.scrollState.lastTargetOffset,
          n = t !== this.scrollState.lastTargetOffset;
        if (!n && 1.01 > Math.abs(t - this.getScrollOffset())) {
          if ((this.scrollState.stableFrames++, this.scrollState.stableFrames >= 1)) {
            (this.getScrollOffset() !== t &&
              this._scrollToOffset(t, { adjustments: void 0, behavior: "auto" }),
              (this.scrollState = null));
            return;
          }
        } else if (((this.scrollState.stableFrames = 0), n)) {
          let e = this.getSize() || 600,
            n = Math.abs(t - this.getScrollOffset()),
            l = "smooth" === this.scrollState.behavior && n > e;
          ((this.scrollState.lastTargetOffset = t),
            l || (this.scrollState.behavior = "auto"),
            this._scrollToOffset(t, { adjustments: void 0, behavior: l ? "smooth" : "auto" }));
        }
        this.scheduleScrollReconcile();
      }
      constructor(e) {
        let t, n;
        var l = this;
        ((this.unsubs = []),
          (this.scrollElement = null),
          (this.targetWindow = null),
          (this.isScrolling = !1),
          (this.scrollState = null),
          (this.measurementsCache = []),
          (this._flatMeasurements = null),
          (this.itemSizeCache = new Map()),
          (this.itemSizeCacheVersion = 0),
          (this.laneAssignments = new Map()),
          (this.pendingMin = null),
          (this.prevLanes = void 0),
          (this.lanesChangedFlag = !1),
          (this.lanesSettling = !1),
          (this.pendingScrollAnchor = null),
          (this.scrollRect = null),
          (this.scrollOffset = null),
          (this.scrollDirection = null),
          (this.scrollAdjustments = 0),
          (this._iosDeferredAdjustment = 0),
          (this._iosTouching = !1),
          (this._iosJustTouchEnded = !1),
          (this._iosTouchEndTimerId = null),
          (this._intendedScrollOffset = null),
          (this.elementsCache = new Map()),
          (this.now = () => {
            var e, t, n, l;
            return null !=
              (e =
                null ==
                (l =
                  null == (n = null == (t = this.targetWindow) ? void 0 : t.performance)
                    ? void 0
                    : n.now)
                  ? void 0
                  : l.call(n))
              ? e
              : Date.now();
          }),
          (this.observer =
            ((t = null),
            (n = () =>
              t ||
              (this.targetWindow && this.targetWindow.ResizeObserver
                ? (t = new this.targetWindow.ResizeObserver((e) => {
                    e.forEach((e) => {
                      let t = () => {
                        let t = e.target,
                          n = this.indexFromElement(t);
                        if (!t.isConnected) {
                          for (let [e, n] of (this.observer.unobserve(t), this.elementsCache))
                            if (n === t) {
                              this.elementsCache.delete(e);
                              break;
                            }
                          return;
                        }
                        this.shouldMeasureDuringScroll(n) &&
                          this.resizeItem(n, this.options.measureElement(t, e, this));
                      };
                      this.options.useAnimationFrameWithResizeObserver
                        ? requestAnimationFrame(t)
                        : t();
                    });
                  }))
                : null)),
            {
              disconnect: () => {
                var e;
                (null == (e = n()) || e.disconnect(), (t = null));
              },
              observe: (e) => {
                var t;
                return null == (t = n()) ? void 0 : t.observe(e, { box: "border-box" });
              },
              unobserve: (e) => {
                var t;
                return null == (t = n()) ? void 0 : t.unobserve(e);
              }
            })),
          (this.range = null),
          (this.setOptions = (e) => {
            var t, n, l, a, o;
            let i = {
              debug: !1,
              initialOffset: 0,
              overscan: 1,
              paddingStart: 0,
              paddingEnd: 0,
              scrollPaddingStart: 0,
              scrollPaddingEnd: 0,
              horizontal: !1,
              getItemKey: ln,
              rangeExtractor: ll,
              onChange: () => {},
              measureElement: lu,
              initialRect: { width: 0, height: 0 },
              scrollMargin: 0,
              gap: 0,
              indexAttribute: "data-index",
              initialMeasurementsCache: [],
              lanes: 1,
              anchorTo: "start",
              followOnAppend: !1,
              scrollEndThreshold: 1,
              isScrollingResetDelay: 150,
              enabled: !0,
              isRtl: !1,
              useScrollendEvent: !1,
              useAnimationFrameWithResizeObserver: !1,
              laneAssignmentMode: "estimate",
              useCachedMeasurements: !1
            };
            for (let t in e) {
              let n = e[t];
              void 0 !== n && (i[t] = n);
            }
            let r = this.options,
              u = null,
              s = null,
              d = !1;
            if (
              void 0 !== r &&
              r.enabled &&
              i.enabled &&
              "end" === i.anchorTo &&
              null !== this.scrollElement
            ) {
              let e = r.count,
                c = i.count,
                m = this.getMeasurements(),
                g =
                  e > 0
                    ? null != (l = null == (t = m[0]) ? void 0 : t.key)
                      ? l
                      : r.getItemKey(0)
                    : null,
                h =
                  e > 0
                    ? null != (a = null == (n = m[e - 1]) ? void 0 : n.key)
                      ? a
                      : r.getItemKey(e - 1)
                    : null;
              if (
                c !== e ||
                (e > 0 && c > 0 && (i.getItemKey(0) !== g || i.getItemKey(c - 1) !== h))
              ) {
                d = !0;
                let t =
                  e > 0
                    ? null != (o = this.getVirtualItemForOffset(this.getScrollOffset()))
                      ? o
                      : m[0]
                    : null;
                t && (u = [t.key, this.getScrollOffset() - t.start]);
                let n = !0 === i.followOnAppend ? "auto" : i.followOnAppend || null;
                n &&
                  c > e &&
                  this.isAtEnd(r.scrollEndThreshold) &&
                  (0 === e || i.getItemKey(c - 1) !== h) &&
                  (s = n);
              }
            }
            ((this.options = i), d && ((this.pendingMin = 0), this.itemSizeCacheVersion++));
            let c = !1,
              m = 0;
            if (u && null !== this.scrollOffset) {
              let [e, t] = u,
                n = this.getMeasurements(),
                { count: l, getItemKey: a } = this.options,
                o = 0;
              for (; o < l && a(o) !== e;) o++;
              if (o < l) {
                let e = n[o];
                if (e) {
                  let n = Math.max(0, e.start + t);
                  n !== this.scrollOffset &&
                    ((m = n - this.scrollOffset), (this.scrollOffset = n), (c = !0));
                }
              }
            }
            (c || s) && (this.pendingScrollAnchor = [c ? u[0] : null, c ? u[1] : 0, s, m]);
          }),
          (this.notify = (e) => {
            var t, n;
            null == (n = (t = this.options).onChange) || n.call(t, this, e);
          }),
          (this.maybeNotify = n9(
            () => (
              this.calculateRange(),
              [
                this.isScrolling,
                this.range ? this.range.startIndex : null,
                this.range ? this.range.endIndex : null
              ]
            ),
            (e) => {
              this.notify(e);
            },
            {
              key: !1,
              debug: () => this.options.debug,
              initialDeps: [
                this.isScrolling,
                this.range ? this.range.startIndex : null,
                this.range ? this.range.endIndex : null
              ]
            }
          )),
          (this.cleanup = () => {
            (this.unsubs.filter(Boolean).forEach((e) => e()),
              (this.unsubs = []),
              this.observer.disconnect(),
              null != this.rafId &&
                this.targetWindow &&
                (this.targetWindow.cancelAnimationFrame(this.rafId), (this.rafId = null)),
              (this.scrollState = null),
              (this._iosDeferredAdjustment = 0),
              (this._iosTouching = !1),
              (this._iosJustTouchEnded = !1),
              (this.scrollElement = null),
              (this.targetWindow = null));
          }),
          (this._didMount = () => () => {
            this.cleanup();
          }),
          (this._willUpdate = () => {
            var e, t;
            let n = this.options.enabled ? this.options.getScrollElement() : null;
            if (this.scrollElement !== n) {
              if ((this.cleanup(), !n)) return void this.maybeNotify();
              if (
                ((this.scrollElement = n),
                this.scrollElement && "ownerDocument" in this.scrollElement
                  ? (this.targetWindow = this.scrollElement.ownerDocument.defaultView)
                  : (this.targetWindow =
                      null != (t = null == (e = this.scrollElement) ? void 0 : e.window)
                        ? t
                        : null),
                this.elementsCache.forEach((e) => {
                  this.observer.observe(e);
                }),
                this.unsubs.push(
                  this.options.observeElementRect(this, (e) => {
                    ((this.scrollRect = e), this.maybeNotify());
                  })
                ),
                this.unsubs.push(
                  this.options.observeElementOffset(this, (e, t) => {
                    if (t && null === this._intendedScrollOffset && e === this.scrollOffset) return;
                    (null !== this._intendedScrollOffset &&
                      1.5 > Math.abs(e - this._intendedScrollOffset) &&
                      (e = this._intendedScrollOffset),
                      (this._intendedScrollOffset = null),
                      (this.scrollAdjustments = 0));
                    let n = this.getScrollOffset();
                    ((this.scrollDirection = t
                      ? n === e
                        ? this.scrollDirection
                        : n < e
                          ? "forward"
                          : "backward"
                      : null),
                      (this.scrollOffset = e),
                      (this.isScrolling = t),
                      this._flushIosDeferredIfReady(),
                      this.scrollState && this.scheduleScrollReconcile(),
                      this.maybeNotify());
                  })
                ),
                "addEventListener" in this.scrollElement)
              ) {
                let e = this.scrollElement,
                  t = () => {
                    ((this._iosTouching = !0),
                      (this._iosJustTouchEnded = !1),
                      null !== this._iosTouchEndTimerId &&
                        null != this.targetWindow &&
                        (this.targetWindow.clearTimeout(this._iosTouchEndTimerId),
                        (this._iosTouchEndTimerId = null)));
                  },
                  n = () => {
                    ((this._iosTouching = !1),
                      le() &&
                        null != this.targetWindow &&
                        ((this._iosJustTouchEnded = !0),
                        (this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
                          ((this._iosJustTouchEnded = !1),
                            (this._iosTouchEndTimerId = null),
                            this._flushIosDeferredIfReady());
                        }, 150))));
                  };
                (e.addEventListener("touchstart", t, lo),
                  e.addEventListener("touchend", n, lo),
                  this.unsubs.push(() => {
                    (e.removeEventListener("touchstart", t),
                      e.removeEventListener("touchend", n),
                      null !== this._iosTouchEndTimerId &&
                        null != this.targetWindow &&
                        (this.targetWindow.clearTimeout(this._iosTouchEndTimerId),
                        (this._iosTouchEndTimerId = null)));
                  }));
              }
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: void 0,
                behavior: void 0
              });
            }
            let l = this.pendingScrollAnchor;
            if (
              ((this.pendingScrollAnchor = null), l && this.scrollElement && this.options.enabled)
            ) {
              let [e, t, n, a] = l;
              (null === e ||
                n ||
                (le() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)
                  ? 0 !== a && (this._iosDeferredAdjustment += a)
                  : this._scrollToOffset(this.getScrollOffset(), {
                      adjustments: void 0,
                      behavior: void 0
                    })),
                n && this.scrollToEnd({ behavior: n }));
            }
          }),
          (this._flushIosDeferredIfReady = () => {
            if (
              0 === this._iosDeferredAdjustment ||
              this.isScrolling ||
              this._iosTouching ||
              this._iosJustTouchEnded
            )
              return;
            let e = this.getScrollOffset(),
              t = this.getMaxScrollOffset();
            if (e < 0 || e > t) return;
            if (this._iosDeferredAdjustment < 0 && e >= t - 1) {
              this._iosDeferredAdjustment = 0;
              return;
            }
            let n = this._iosDeferredAdjustment;
            ((this._iosDeferredAdjustment = 0),
              this._scrollToOffset(e, {
                adjustments: (this.scrollAdjustments += n),
                behavior: void 0
              }));
          }),
          (this.rafId = null),
          (this.getSize = () => {
            var e;
            return this.options.enabled
              ? ((this.scrollRect = null != (e = this.scrollRect) ? e : this.options.initialRect),
                this.scrollRect[this.options.horizontal ? "width" : "height"])
              : ((this.scrollRect = null), 0);
          }),
          (this.getScrollOffset = () => {
            var e;
            return this.options.enabled
              ? ((this.scrollOffset =
                  null != (e = this.scrollOffset)
                    ? e
                    : "function" == typeof this.options.initialOffset
                      ? this.options.initialOffset()
                      : this.options.initialOffset),
                this.scrollOffset)
              : ((this.scrollOffset = null), 0);
          }),
          (this.getMeasurementOptions = n9(
            () => [
              this.options.count,
              this.options.paddingStart,
              this.options.scrollMargin,
              this.options.getItemKey,
              this.options.enabled,
              this.options.lanes,
              this.options.laneAssignmentMode,
              this.options.gap
            ],
            (e, t, n, l, a, o, i, r) => (
              void 0 !== this.prevLanes && this.prevLanes !== o && (this.lanesChangedFlag = !0),
              (this.prevLanes = o),
              (this.pendingMin = null),
              {
                count: e,
                paddingStart: t,
                scrollMargin: n,
                getItemKey: l,
                enabled: a,
                lanes: o,
                laneAssignmentMode: i,
                gap: r
              }
            ),
            { key: !1 }
          )),
          (this.getMeasurements = n9(
            () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
            (e, t) => {
              var n, l;
              let {
                  count: a,
                  paddingStart: o,
                  scrollMargin: i,
                  getItemKey: r,
                  enabled: u,
                  lanes: s,
                  laneAssignmentMode: d,
                  gap: c
                } = e,
                m = this.itemSizeCache;
              if (!u)
                return (
                  (this.measurementsCache = []),
                  this.itemSizeCache.clear(),
                  this.laneAssignments.clear(),
                  []
                );
              if (this.laneAssignments.size > a)
                for (let e of this.laneAssignments.keys()) e >= a && this.laneAssignments.delete(e);
              (this.lanesChangedFlag &&
                ((this.lanesChangedFlag = !1),
                (this.lanesSettling = !0),
                (this.measurementsCache = []),
                this.itemSizeCache.clear(),
                this.laneAssignments.clear(),
                (this.pendingMin = null)),
                0 !== this.measurementsCache.length ||
                  this.lanesSettling ||
                  ((this.measurementsCache = this.options.initialMeasurementsCache),
                  this.measurementsCache.forEach((e) => {
                    this.itemSizeCache.set(e.key, e.size);
                  })));
              let g = this.lanesSettling ? 0 : null != (n = this.pendingMin) ? n : 0;
              if (
                ((this.pendingMin = null),
                this.lanesSettling &&
                  this.measurementsCache.length === a &&
                  (this.lanesSettling = !1),
                1 === s)
              ) {
                let e,
                  t = 2 * a,
                  n = this._flatMeasurements;
                if (!n || n.length < t) {
                  let e = new Float64Array(t);
                  (n && g > 0 && e.set(n.subarray(0, 2 * g)),
                    (n = e),
                    (this._flatMeasurements = n));
                }
                if (0 === g) e = o + i;
                else {
                  let t = g - 1;
                  e = n[2 * t] + n[2 * t + 1] + c;
                }
                for (let t = g; t < a; t++) {
                  let l = r(t),
                    a = m.get(l),
                    o = "number" == typeof a ? a : this.options.estimateSize(t);
                  ((n[2 * t] = e), (n[2 * t + 1] = o), (e += o + c));
                }
                let u =
                  ((l = n),
                  new Proxy(Array(a), {
                    get(e, t, n) {
                      if ("string" == typeof t) {
                        let n = t.charCodeAt(0);
                        if (n >= 48 && n <= 57) {
                          let n = +t;
                          if (Number.isInteger(n) && n >= 0 && n < a) {
                            let t = e[n];
                            if (!t) {
                              let a = l[2 * n];
                              t = e[n] = {
                                index: n,
                                key: r(n),
                                start: a,
                                size: l[2 * n + 1],
                                end: a + l[2 * n + 1],
                                lane: 0
                              };
                            }
                            return t;
                          }
                        }
                        if ("length" === t) return a;
                      }
                      return Reflect.get(e, t, n);
                    }
                  }));
                return ((this.measurementsCache = u), u);
              }
              let h = this.measurementsCache.slice(0, g),
                f = Array(s).fill(void 0),
                p = new Float64Array(s),
                v = 0;
              for (let e = 0; e < g; e++) {
                let t = h[e];
                t && (void 0 === f[t.lane] && v++, (f[t.lane] = e), (p[t.lane] = t.end));
              }
              for (let e = g; e < a; e++) {
                let t,
                  n,
                  l = r(e),
                  a = this.laneAssignments.get(e),
                  u = "estimate" === d || m.has(l);
                if (void 0 !== a && this.options.lanes > 1) {
                  let e = f[(t = a)],
                    l = void 0 !== e ? h[e] : void 0;
                  n = l ? l.end + c : o + i;
                } else if (v === s) {
                  let l = 0,
                    a = p[0],
                    o = f[0];
                  for (let e = 1; e < s; e++) {
                    let t = p[e];
                    (t < a || (t === a && f[e] < o)) && ((l = e), (a = t), (o = f[e]));
                  }
                  ((t = l), (n = a + c), u && this.laneAssignments.set(e, t));
                } else
                  ((t = e % this.options.lanes), (n = o + i), u && this.laneAssignments.set(e, t));
                let g = m.get(l),
                  F = "number" == typeof g ? g : this.options.estimateSize(e),
                  C = n + F;
                ((h[e] = { index: e, start: n, size: F, end: C, key: l, lane: t }),
                  void 0 === f[t] && v++,
                  (f[t] = e),
                  (p[t] = C));
              }
              return ((this.measurementsCache = h), h);
            },
            { key: !1, debug: () => this.options.debug }
          )),
          (this.calculateRange = n9(
            () => [
              this.getMeasurements(),
              this.getSize(),
              this.getScrollOffset(),
              this.options.lanes
            ],
            (e, t, n, l) =>
              0 === e.length || 0 === t
                ? ((this.range = null), null)
                : ((this.range = (function (e, t, n, l, a) {
                    let o = e.length - 1;
                    if (e.length <= l) return { startIndex: 0, endIndex: o };
                    if (1 === l && null !== a) {
                      let e = (function (e, t, n) {
                          let l = 0;
                          for (; l <= t;) {
                            let a = ((l + t) / 2) | 0,
                              o = e[2 * a];
                            if (o < n) l = a + 1;
                            else {
                              if (!(o > n)) return a;
                              t = a - 1;
                            }
                          }
                          return l > 0 ? l - 1 : 0;
                        })(a, o, n),
                        l = e,
                        i = n + t;
                      for (; l < o && a[2 * l] + a[2 * l + 1] < i;) l++;
                      return { startIndex: e, endIndex: l };
                    }
                    let i = lc(0, o, (t) => e[t].start, n),
                      r = i;
                    if (1 === l) for (; r < o && e[r].end < n + t;) r++;
                    else if (l > 1) {
                      let a = Array(l).fill(0);
                      for (; r < o && a.some((e) => e < n + t);) {
                        let t = e[r];
                        ((a[t.lane] = t.end), r++);
                      }
                      let u = Array(l).fill(n + t);
                      for (; i >= 0 && u.some((e) => e >= n);) {
                        let t = e[i];
                        ((u[t.lane] = t.start), i--);
                      }
                      ((i = Math.max(0, i - (i % l))), (r = Math.min(o, r + (l - 1 - (r % l)))));
                    }
                    return { startIndex: i, endIndex: r };
                  })(
                    e,
                    t,
                    n,
                    l,
                    1 === l && null != this._flatMeasurements ? this._flatMeasurements : null
                  )),
                  this.range),
            { key: !1, debug: () => this.options.debug }
          )),
          (this.getVirtualIndexes = n9(
            () => {
              let e = null,
                t = null,
                n = this.calculateRange();
              return (
                n && ((e = n.startIndex), (t = n.endIndex)),
                this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
              );
            },
            (e, t, n, l, a) =>
              null === l || null === a
                ? []
                : e({ startIndex: l, endIndex: a, overscan: t, count: n }),
            { key: !1, debug: () => this.options.debug }
          )),
          (this.indexFromElement = (e) => {
            let t = this.options.indexAttribute,
              n = e.getAttribute(t);
            return n
              ? parseInt(n, 10)
              : (console.warn(
                  "Missing attribute name '".concat(t, "={index}' on measured element.")
                ),
                -1);
          }),
          (this.shouldMeasureDuringScroll = (e) => {
            var t, n;
            if (!this.scrollState || "smooth" !== this.scrollState.behavior) return !0;
            let l =
              null != (t = this.scrollState.index)
                ? t
                : null == (n = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))
                  ? void 0
                  : n.index;
            if (void 0 !== l && this.range) {
              let t = Math.max(
                  this.options.overscan,
                  Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
                ),
                n = Math.max(0, l - t),
                a = Math.min(this.options.count - 1, l + t);
              return e >= n && e <= a;
            }
            return !0;
          }),
          (this.measureElement = (e) => {
            if (!e)
              return void this.elementsCache.forEach((e, t) => {
                e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
              });
            let t = this.indexFromElement(e),
              n = this.options.getItemKey(t),
              l = this.elementsCache.get(n);
            (l !== e &&
              (l && this.observer.unobserve(l),
              this.observer.observe(e),
              this.elementsCache.set(n, e)),
              (!this.isScrolling || this.scrollState) &&
                this.shouldMeasureDuringScroll(t) &&
                this.resizeItem(t, this.options.measureElement(e, void 0, this)));
          }),
          (this.resizeItem = (e, t) => {
            var n, l, a, o;
            let i, r, u;
            if (e < 0 || e >= this.options.count) return;
            let s = this._flatMeasurements;
            if (1 === this.options.lanes && null !== s)
              ((u = this.options.getItemKey(e)), (r = s[2 * e]), (i = s[2 * e + 1]));
            else {
              let t = this.measurementsCache[e];
              if (!t) return;
              ((u = t.key), (r = t.start), (i = t.size));
            }
            let d = null != (n = this.itemSizeCache.get(u)) ? n : i,
              c = t - d;
            if (0 !== c) {
              let n =
                  "end" === this.options.anchorTo &&
                  (null == (l = this.scrollState) ? void 0 : l.behavior) !== "smooth" &&
                  this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold,
                s = n ? this.getTotalSize() : 0,
                m = this.getScrollOffset() + this.scrollAdjustments,
                g = this.itemSizeCache.has(u)
                  ? r + d <= m && "backward" !== this.scrollDirection
                  : r < m,
                h =
                  (null == (a = this.scrollState) ? void 0 : a.behavior) !== "smooth" &&
                  (void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                    ? this.shouldAdjustScrollPositionOnItemSizeChange(
                        null != (o = this.measurementsCache[e])
                          ? o
                          : { index: e, key: u, start: r, size: i, end: r + i, lane: 0 },
                        c,
                        this
                      )
                    : g);
              ((null === this.pendingMin || e < this.pendingMin) && (this.pendingMin = e),
                this.itemSizeCache.set(u, t),
                this.itemSizeCacheVersion++,
                n
                  ? this.applyScrollAdjustment(this.getTotalSize() - s)
                  : h && this.applyScrollAdjustment(c),
                this.notify(!1));
            }
          }),
          (this.getVirtualItems = n9(
            () => [this.getVirtualIndexes(), this.getMeasurements()],
            (e, t) => {
              let n = [];
              for (let l = 0, a = e.length; l < a; l++) {
                let a = t[e[l]];
                n.push(a);
              }
              return n;
            },
            { key: !1, debug: () => this.options.debug }
          )),
          (this.getVirtualItemForOffset = (e) => {
            let t = this.getMeasurements();
            if (0 === t.length) return;
            let n = this._flatMeasurements,
              l = 1 === this.options.lanes && null != n,
              a = lc(0, t.length - 1, l ? (e) => n[2 * e] : (e) => n8(t[e]).start, e);
            return n8(t[a]);
          }),
          (this.getMaxScrollOffset = () => {
            if (!this.scrollElement) return 0;
            if ("scrollHeight" in this.scrollElement)
              return this.options.horizontal
                ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth
                : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
            {
              let e = this.scrollElement.document.documentElement;
              return this.options.horizontal
                ? e.scrollWidth - this.scrollElement.innerWidth
                : e.scrollHeight - this.scrollElement.innerHeight;
            }
          }),
          (this.getVirtualDistanceFromEnd = () =>
            Math.max(this.getTotalSize() - this.getSize() - this.getScrollOffset(), 0)),
          (this.getDistanceFromEnd = () =>
            Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0)),
          (this.isAtEnd = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : l.options.scrollEndThreshold;
            return l.getDistanceFromEnd() <= e;
          }),
          (this.getOffsetForAlignment = function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            if (!l.scrollElement) return 0;
            let a = l.getSize(),
              o = l.getScrollOffset();
            return (
              "auto" === t && (t = e >= o + a ? "end" : "start"),
              "center" === t ? (e += (n - a) / 2) : "end" === t && (e -= a),
              Math.max(Math.min(l.getMaxScrollOffset(), e), 0)
            );
          }),
          (this.getOffsetForIndex = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "auto";
            e = Math.max(0, Math.min(e, l.options.count - 1));
            let n = l.getSize(),
              a = l.getScrollOffset(),
              o = l.measurementsCache[e];
            if (!o) return;
            if ("auto" === t)
              if (o.end >= a + n - l.options.scrollPaddingEnd) t = "end";
              else {
                if (!(o.start <= a + l.options.scrollPaddingStart)) return [a, t];
                t = "start";
              }
            if ("end" === t && e === l.options.count - 1) return [l.getMaxScrollOffset(), t];
            let i =
              "end" === t
                ? o.end + l.options.scrollPaddingEnd
                : o.start - l.options.scrollPaddingStart;
            return [l.getOffsetForAlignment(i, t, o.size), t];
          }),
          (this.scrollToOffset = function (e) {
            let { align: t = "start", behavior: n = "auto" } =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            l._iosDeferredAdjustment = 0;
            let a = l.getOffsetForAlignment(e, t),
              o = l.now();
            ((l.scrollState = {
              index: null,
              align: t,
              behavior: n,
              startedAt: o,
              lastTargetOffset: a,
              stableFrames: 0
            }),
              l._scrollToOffset(a, { adjustments: void 0, behavior: n }),
              l.scheduleScrollReconcile());
          }),
          (this.scrollToIndex = function (e) {
            let { align: t = "auto", behavior: n = "auto" } =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ((l._iosDeferredAdjustment = 0), (e = Math.max(0, Math.min(e, l.options.count - 1))));
            let a = l.getOffsetForIndex(e, t);
            if (!a) return;
            let [o, i] = a,
              r = l.now();
            ((l.scrollState = {
              index: e,
              align: i,
              behavior: n,
              startedAt: r,
              lastTargetOffset: o,
              stableFrames: 0
            }),
              l._scrollToOffset(o, { adjustments: void 0, behavior: n }),
              l.scheduleScrollReconcile());
          }),
          (this.scrollBy = function (e) {
            let { behavior: t = "auto" } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = l.getScrollOffset() + e,
              a = l.now();
            ((l.scrollState = {
              index: null,
              align: "start",
              behavior: t,
              startedAt: a,
              lastTargetOffset: n,
              stableFrames: 0
            }),
              l._scrollToOffset(n, { adjustments: void 0, behavior: t }),
              l.scheduleScrollReconcile());
          }),
          (this.scrollToEnd = function () {
            let { behavior: e = "auto" } =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            l.options.count > 0
              ? l.scrollToIndex(l.options.count - 1, { align: "end", behavior: e })
              : l.scrollToOffset(Math.max(l.getTotalSize() - l.getSize(), 0), { behavior: e });
          }),
          (this.getTotalSize = () => {
            var e, t;
            let n,
              l = this.getMeasurements();
            if (0 === l.length) n = this.options.paddingStart;
            else if (1 === this.options.lanes) {
              let a = l.length - 1,
                o = this._flatMeasurements;
              n =
                null != o
                  ? o[2 * a] + o[2 * a + 1]
                  : null != (t = null == (e = l[a]) ? void 0 : e.end)
                    ? t
                    : 0;
            } else {
              let e = Array(this.options.lanes).fill(null),
                t = l.length - 1;
              for (; t >= 0 && e.some((e) => null === e);) {
                let n = l[t];
                (null === e[n.lane] && (e[n.lane] = n.end), t--);
              }
              n = Math.max(...e.filter((e) => null !== e));
            }
            return Math.max(n - this.options.scrollMargin + this.options.paddingEnd, 0);
          }),
          (this.takeSnapshot = () => {
            let e = [];
            if (0 === this.itemSizeCache.size) return e;
            for (let t of this.getMeasurements())
              t &&
                this.itemSizeCache.has(t.key) &&
                e.push({
                  index: t.index,
                  key: t.key,
                  start: t.start,
                  size: t.size,
                  end: t.end,
                  lane: t.lane
                });
            return e;
          }),
          (this._scrollToOffset = (e, t) => {
            let { adjustments: n, behavior: l } = t;
            ((this._intendedScrollOffset = e + (null != n ? n : 0)),
              this.options.scrollToFn(e, { behavior: l, adjustments: n }, this));
          }),
          (this.measure = () => {
            ((this.pendingMin = null),
              this.itemSizeCache.clear(),
              this.laneAssignments.clear(),
              this.itemSizeCacheVersion++,
              this.notify(!1));
          }),
          this.setOptions(e));
      }
    }
    let lc = (e, t, n, l) => {
        for (; e <= t;) {
          let a = ((e + t) / 2) | 0,
            o = n(a);
          if (o < l) e = a + 1;
          else {
            if (!(o > l)) return a;
            t = a - 1;
          }
        }
        return e > 0 ? e - 1 : 0;
      },
      lm = "u" > typeof document ? r.useLayoutEffect : r.useEffect,
      lg = [
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "S",
        "B",
        "S",
        "WS",
        "B",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "B",
        "B",
        "B",
        "S",
        "WS",
        "ON",
        "ON",
        "ET",
        "ET",
        "ET",
        "ON",
        "ON",
        "ON",
        "ON",
        "ON",
        "ES",
        "CS",
        "ES",
        "CS",
        "CS",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "CS",
        "ON",
        "ON",
        "ON",
        "ON",
        "ON",
        "ON",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "ON",
        "ON",
        "ON",
        "ON",
        "ON",
        "ON",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "ON",
        "ON",
        "ON",
        "ON",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "B",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "CS",
        "ON",
        "ET",
        "ET",
        "ET",
        "ET",
        "ON",
        "ON",
        "ON",
        "ON",
        "L",
        "ON",
        "ON",
        "BN",
        "ON",
        "ON",
        "ET",
        "ET",
        "EN",
        "EN",
        "ON",
        "L",
        "ON",
        "ON",
        "ON",
        "EN",
        "L",
        "ON",
        "ON",
        "ON",
        "ON",
        "ON",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "ON",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "ON",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L"
      ],
      lh = [
        [697, 698, "ON"],
        [706, 719, "ON"],
        [722, 735, "ON"],
        [741, 749, "ON"],
        [751, 767, "ON"],
        [768, 879, "NSM"],
        [884, 885, "ON"],
        [894, 894, "ON"],
        [900, 901, "ON"],
        [903, 903, "ON"],
        [1014, 1014, "ON"],
        [1155, 1161, "NSM"],
        [1418, 1418, "ON"],
        [1421, 1422, "ON"],
        [1423, 1423, "ET"],
        [1424, 1424, "R"],
        [1425, 1469, "NSM"],
        [1470, 1470, "R"],
        [1471, 1471, "NSM"],
        [1472, 1472, "R"],
        [1473, 1474, "NSM"],
        [1475, 1475, "R"],
        [1476, 1477, "NSM"],
        [1478, 1478, "R"],
        [1479, 1479, "NSM"],
        [1480, 1535, "R"],
        [1536, 1541, "AN"],
        [1542, 1543, "ON"],
        [1544, 1544, "AL"],
        [1545, 1546, "ET"],
        [1547, 1547, "AL"],
        [1548, 1548, "CS"],
        [1549, 1549, "AL"],
        [1550, 1551, "ON"],
        [1552, 1562, "NSM"],
        [1563, 1610, "AL"],
        [1611, 1631, "NSM"],
        [1632, 1641, "AN"],
        [1642, 1642, "ET"],
        [1643, 1644, "AN"],
        [1645, 1647, "AL"],
        [1648, 1648, "NSM"],
        [1649, 1749, "AL"],
        [1750, 1756, "NSM"],
        [1757, 1757, "AN"],
        [1758, 1758, "ON"],
        [1759, 1764, "NSM"],
        [1765, 1766, "AL"],
        [1767, 1768, "NSM"],
        [1769, 1769, "ON"],
        [1770, 1773, "NSM"],
        [1774, 1775, "AL"],
        [1776, 1785, "EN"],
        [1786, 1808, "AL"],
        [1809, 1809, "NSM"],
        [1810, 1839, "AL"],
        [1840, 1866, "NSM"],
        [1867, 1957, "AL"],
        [1958, 1968, "NSM"],
        [1969, 1983, "AL"],
        [1984, 2026, "R"],
        [2027, 2035, "NSM"],
        [2036, 2037, "R"],
        [2038, 2041, "ON"],
        [2042, 2044, "R"],
        [2045, 2045, "NSM"],
        [2046, 2069, "R"],
        [2070, 2073, "NSM"],
        [2074, 2074, "R"],
        [2075, 2083, "NSM"],
        [2084, 2084, "R"],
        [2085, 2087, "NSM"],
        [2088, 2088, "R"],
        [2089, 2093, "NSM"],
        [2094, 2136, "R"],
        [2137, 2139, "NSM"],
        [2140, 2143, "R"],
        [2144, 2191, "AL"],
        [2192, 2193, "AN"],
        [2194, 2198, "AL"],
        [2199, 2207, "NSM"],
        [2208, 2249, "AL"],
        [2250, 2273, "NSM"],
        [2274, 2274, "AN"],
        [2275, 2306, "NSM"],
        [2362, 2362, "NSM"],
        [2364, 2364, "NSM"],
        [2369, 2376, "NSM"],
        [2381, 2381, "NSM"],
        [2385, 2391, "NSM"],
        [2402, 2403, "NSM"],
        [2433, 2433, "NSM"],
        [2492, 2492, "NSM"],
        [2497, 2500, "NSM"],
        [2509, 2509, "NSM"],
        [2530, 2531, "NSM"],
        [2546, 2547, "ET"],
        [2555, 2555, "ET"],
        [2558, 2558, "NSM"],
        [2561, 2562, "NSM"],
        [2620, 2620, "NSM"],
        [2625, 2626, "NSM"],
        [2631, 2632, "NSM"],
        [2635, 2637, "NSM"],
        [2641, 2641, "NSM"],
        [2672, 2673, "NSM"],
        [2677, 2677, "NSM"],
        [2689, 2690, "NSM"],
        [2748, 2748, "NSM"],
        [2753, 2757, "NSM"],
        [2759, 2760, "NSM"],
        [2765, 2765, "NSM"],
        [2786, 2787, "NSM"],
        [2801, 2801, "ET"],
        [2810, 2815, "NSM"],
        [2817, 2817, "NSM"],
        [2876, 2876, "NSM"],
        [2879, 2879, "NSM"],
        [2881, 2884, "NSM"],
        [2893, 2893, "NSM"],
        [2901, 2902, "NSM"],
        [2914, 2915, "NSM"],
        [2946, 2946, "NSM"],
        [3008, 3008, "NSM"],
        [3021, 3021, "NSM"],
        [3059, 3064, "ON"],
        [3065, 3065, "ET"],
        [3066, 3066, "ON"],
        [3072, 3072, "NSM"],
        [3076, 3076, "NSM"],
        [3132, 3132, "NSM"],
        [3134, 3136, "NSM"],
        [3142, 3144, "NSM"],
        [3146, 3149, "NSM"],
        [3157, 3158, "NSM"],
        [3170, 3171, "NSM"],
        [3192, 3198, "ON"],
        [3201, 3201, "NSM"],
        [3260, 3260, "NSM"],
        [3276, 3277, "NSM"],
        [3298, 3299, "NSM"],
        [3328, 3329, "NSM"],
        [3387, 3388, "NSM"],
        [3393, 3396, "NSM"],
        [3405, 3405, "NSM"],
        [3426, 3427, "NSM"],
        [3457, 3457, "NSM"],
        [3530, 3530, "NSM"],
        [3538, 3540, "NSM"],
        [3542, 3542, "NSM"],
        [3633, 3633, "NSM"],
        [3636, 3642, "NSM"],
        [3647, 3647, "ET"],
        [3655, 3662, "NSM"],
        [3761, 3761, "NSM"],
        [3764, 3772, "NSM"],
        [3784, 3790, "NSM"],
        [3864, 3865, "NSM"],
        [3893, 3893, "NSM"],
        [3895, 3895, "NSM"],
        [3897, 3897, "NSM"],
        [3898, 3901, "ON"],
        [3953, 3966, "NSM"],
        [3968, 3972, "NSM"],
        [3974, 3975, "NSM"],
        [3981, 3991, "NSM"],
        [3993, 4028, "NSM"],
        [4038, 4038, "NSM"],
        [4141, 4144, "NSM"],
        [4146, 4151, "NSM"],
        [4153, 4154, "NSM"],
        [4157, 4158, "NSM"],
        [4184, 4185, "NSM"],
        [4190, 4192, "NSM"],
        [4209, 4212, "NSM"],
        [4226, 4226, "NSM"],
        [4229, 4230, "NSM"],
        [4237, 4237, "NSM"],
        [4253, 4253, "NSM"],
        [4957, 4959, "NSM"],
        [5008, 5017, "ON"],
        [5120, 5120, "ON"],
        [5760, 5760, "WS"],
        [5787, 5788, "ON"],
        [5906, 5908, "NSM"],
        [5938, 5939, "NSM"],
        [5970, 5971, "NSM"],
        [6002, 6003, "NSM"],
        [6068, 6069, "NSM"],
        [6071, 6077, "NSM"],
        [6086, 6086, "NSM"],
        [6089, 6099, "NSM"],
        [6107, 6107, "ET"],
        [6109, 6109, "NSM"],
        [6128, 6137, "ON"],
        [6144, 6154, "ON"],
        [6155, 6157, "NSM"],
        [6158, 6158, "BN"],
        [6159, 6159, "NSM"],
        [6277, 6278, "NSM"],
        [6313, 6313, "NSM"],
        [6432, 6434, "NSM"],
        [6439, 6440, "NSM"],
        [6450, 6450, "NSM"],
        [6457, 6459, "NSM"],
        [6464, 6464, "ON"],
        [6468, 6469, "ON"],
        [6622, 6655, "ON"],
        [6679, 6680, "NSM"],
        [6683, 6683, "NSM"],
        [6742, 6742, "NSM"],
        [6744, 6750, "NSM"],
        [6752, 6752, "NSM"],
        [6754, 6754, "NSM"],
        [6757, 6764, "NSM"],
        [6771, 6780, "NSM"],
        [6783, 6783, "NSM"],
        [6832, 6877, "NSM"],
        [6880, 6891, "NSM"],
        [6912, 6915, "NSM"],
        [6964, 6964, "NSM"],
        [6966, 6970, "NSM"],
        [6972, 6972, "NSM"],
        [6978, 6978, "NSM"],
        [7019, 7027, "NSM"],
        [7040, 7041, "NSM"],
        [7074, 7077, "NSM"],
        [7080, 7081, "NSM"],
        [7083, 7085, "NSM"],
        [7142, 7142, "NSM"],
        [7144, 7145, "NSM"],
        [7149, 7149, "NSM"],
        [7151, 7153, "NSM"],
        [7212, 7219, "NSM"],
        [7222, 7223, "NSM"],
        [7376, 7378, "NSM"],
        [7380, 7392, "NSM"],
        [7394, 7400, "NSM"],
        [7405, 7405, "NSM"],
        [7412, 7412, "NSM"],
        [7416, 7417, "NSM"],
        [7616, 7679, "NSM"],
        [8125, 8125, "ON"],
        [8127, 8129, "ON"],
        [8141, 8143, "ON"],
        [8157, 8159, "ON"],
        [8173, 8175, "ON"],
        [8189, 8190, "ON"],
        [8192, 8202, "WS"],
        [8203, 8205, "BN"],
        [8207, 8207, "R"],
        [8208, 8231, "ON"],
        [8232, 8232, "WS"],
        [8233, 8233, "B"],
        [8234, 8238, "BN"],
        [8239, 8239, "CS"],
        [8240, 8244, "ET"],
        [8245, 8259, "ON"],
        [8260, 8260, "CS"],
        [8261, 8286, "ON"],
        [8287, 8287, "WS"],
        [8288, 8303, "BN"],
        [8304, 8304, "EN"],
        [8308, 8313, "EN"],
        [8314, 8315, "ES"],
        [8316, 8318, "ON"],
        [8320, 8329, "EN"],
        [8330, 8331, "ES"],
        [8332, 8334, "ON"],
        [8352, 8399, "ET"],
        [8400, 8432, "NSM"],
        [8448, 8449, "ON"],
        [8451, 8454, "ON"],
        [8456, 8457, "ON"],
        [8468, 8468, "ON"],
        [8470, 8472, "ON"],
        [8478, 8483, "ON"],
        [8485, 8485, "ON"],
        [8487, 8487, "ON"],
        [8489, 8489, "ON"],
        [8494, 8494, "ET"],
        [8506, 8507, "ON"],
        [8512, 8516, "ON"],
        [8522, 8525, "ON"],
        [8528, 8543, "ON"],
        [8585, 8587, "ON"],
        [8592, 8721, "ON"],
        [8722, 8722, "ES"],
        [8723, 8723, "ET"],
        [8724, 9013, "ON"],
        [9083, 9108, "ON"],
        [9110, 9257, "ON"],
        [9280, 9290, "ON"],
        [9312, 9351, "ON"],
        [9352, 9371, "EN"],
        [9450, 9899, "ON"],
        [9901, 10239, "ON"],
        [10496, 11123, "ON"],
        [11126, 11263, "ON"],
        [11493, 11498, "ON"],
        [11503, 11505, "NSM"],
        [11513, 11519, "ON"],
        [11647, 11647, "NSM"],
        [11744, 11775, "NSM"],
        [11776, 11869, "ON"],
        [11904, 11929, "ON"],
        [11931, 12019, "ON"],
        [12032, 12245, "ON"],
        [12272, 12287, "ON"],
        [12288, 12288, "WS"],
        [12289, 12292, "ON"],
        [12296, 12320, "ON"],
        [12330, 12333, "NSM"],
        [12336, 12336, "ON"],
        [12342, 12343, "ON"],
        [12349, 12351, "ON"],
        [12441, 12442, "NSM"],
        [12443, 12444, "ON"],
        [12448, 12448, "ON"],
        [12539, 12539, "ON"],
        [12736, 12773, "ON"],
        [12783, 12783, "ON"],
        [12829, 12830, "ON"],
        [12880, 12895, "ON"],
        [12924, 12926, "ON"],
        [12977, 12991, "ON"],
        [13004, 13007, "ON"],
        [13175, 13178, "ON"],
        [13278, 13279, "ON"],
        [13311, 13311, "ON"],
        [19904, 19967, "ON"],
        [42128, 42182, "ON"],
        [42509, 42511, "ON"],
        [42607, 42610, "NSM"],
        [42611, 42611, "ON"],
        [42612, 42621, "NSM"],
        [42622, 42623, "ON"],
        [42654, 42655, "NSM"],
        [42736, 42737, "NSM"],
        [42752, 42785, "ON"],
        [42888, 42888, "ON"],
        [43010, 43010, "NSM"],
        [43014, 43014, "NSM"],
        [43019, 43019, "NSM"],
        [43045, 43046, "NSM"],
        [43048, 43051, "ON"],
        [43052, 43052, "NSM"],
        [43064, 43065, "ET"],
        [43124, 43127, "ON"],
        [43204, 43205, "NSM"],
        [43232, 43249, "NSM"],
        [43263, 43263, "NSM"],
        [43302, 43309, "NSM"],
        [43335, 43345, "NSM"],
        [43392, 43394, "NSM"],
        [43443, 43443, "NSM"],
        [43446, 43449, "NSM"],
        [43452, 43453, "NSM"],
        [43493, 43493, "NSM"],
        [43561, 43566, "NSM"],
        [43569, 43570, "NSM"],
        [43573, 43574, "NSM"],
        [43587, 43587, "NSM"],
        [43596, 43596, "NSM"],
        [43644, 43644, "NSM"],
        [43696, 43696, "NSM"],
        [43698, 43700, "NSM"],
        [43703, 43704, "NSM"],
        [43710, 43711, "NSM"],
        [43713, 43713, "NSM"],
        [43756, 43757, "NSM"],
        [43766, 43766, "NSM"],
        [43882, 43883, "ON"],
        [44005, 44005, "NSM"],
        [44008, 44008, "NSM"],
        [44013, 44013, "NSM"],
        [64285, 64285, "R"],
        [64286, 64286, "NSM"],
        [64287, 64296, "R"],
        [64297, 64297, "ES"],
        [64298, 64335, "R"],
        [64336, 64450, "AL"],
        [64451, 64466, "ON"],
        [64467, 64829, "AL"],
        [64830, 64847, "ON"],
        [64848, 64911, "AL"],
        [64912, 64913, "ON"],
        [64914, 64967, "AL"],
        [64968, 64975, "ON"],
        [64976, 65007, "BN"],
        [65008, 65020, "AL"],
        [65021, 65023, "ON"],
        [65024, 65039, "NSM"],
        [65040, 65049, "ON"],
        [65056, 65071, "NSM"],
        [65072, 65103, "ON"],
        [65104, 65104, "CS"],
        [65105, 65105, "ON"],
        [65106, 65106, "CS"],
        [65108, 65108, "ON"],
        [65109, 65109, "CS"],
        [65110, 65118, "ON"],
        [65119, 65119, "ET"],
        [65120, 65121, "ON"],
        [65122, 65123, "ES"],
        [65124, 65126, "ON"],
        [65128, 65128, "ON"],
        [65129, 65130, "ET"],
        [65131, 65131, "ON"],
        [65136, 65278, "AL"],
        [65279, 65279, "BN"],
        [65281, 65282, "ON"],
        [65283, 65285, "ET"],
        [65286, 65290, "ON"],
        [65291, 65291, "ES"],
        [65292, 65292, "CS"],
        [65293, 65293, "ES"],
        [65294, 65295, "CS"],
        [65296, 65305, "EN"],
        [65306, 65306, "CS"],
        [65307, 65312, "ON"],
        [65339, 65344, "ON"],
        [65371, 65381, "ON"],
        [65504, 65505, "ET"],
        [65506, 65508, "ON"],
        [65509, 65510, "ET"],
        [65512, 65518, "ON"],
        [65520, 65528, "BN"],
        [65529, 65533, "ON"],
        [65534, 65535, "BN"],
        [65793, 65793, "ON"],
        [65856, 65932, "ON"],
        [65936, 65948, "ON"],
        [65952, 65952, "ON"],
        [66045, 66045, "NSM"],
        [66272, 66272, "NSM"],
        [66273, 66299, "EN"],
        [66422, 66426, "NSM"],
        [67584, 67870, "R"],
        [67871, 67871, "ON"],
        [67872, 68096, "R"],
        [68097, 68099, "NSM"],
        [68100, 68100, "R"],
        [68101, 68102, "NSM"],
        [68103, 68107, "R"],
        [68108, 68111, "NSM"],
        [68112, 68151, "R"],
        [68152, 68154, "NSM"],
        [68155, 68158, "R"],
        [68159, 68159, "NSM"],
        [68160, 68324, "R"],
        [68325, 68326, "NSM"],
        [68327, 68408, "R"],
        [68409, 68415, "ON"],
        [68416, 68863, "R"],
        [68864, 68899, "AL"],
        [68900, 68903, "NSM"],
        [68904, 68911, "AL"],
        [68912, 68921, "AN"],
        [68922, 68927, "AL"],
        [68928, 68937, "AN"],
        [68938, 68968, "R"],
        [68969, 68973, "NSM"],
        [68974, 68974, "ON"],
        [68975, 69215, "R"],
        [69216, 69246, "AN"],
        [69247, 69290, "R"],
        [69291, 69292, "NSM"],
        [69293, 69311, "R"],
        [69312, 69327, "AL"],
        [69328, 69336, "ON"],
        [69337, 69369, "AL"],
        [69370, 69375, "NSM"],
        [69376, 69423, "R"],
        [69424, 69445, "AL"],
        [69446, 69456, "NSM"],
        [69457, 69487, "AL"],
        [69488, 69505, "R"],
        [69506, 69509, "NSM"],
        [69510, 69631, "R"],
        [69633, 69633, "NSM"],
        [69688, 69702, "NSM"],
        [69714, 69733, "ON"],
        [69744, 69744, "NSM"],
        [69747, 69748, "NSM"],
        [69759, 69761, "NSM"],
        [69811, 69814, "NSM"],
        [69817, 69818, "NSM"],
        [69826, 69826, "NSM"],
        [69888, 69890, "NSM"],
        [69927, 69931, "NSM"],
        [69933, 69940, "NSM"],
        [70003, 70003, "NSM"],
        [70016, 70017, "NSM"],
        [70070, 70078, "NSM"],
        [70089, 70092, "NSM"],
        [70095, 70095, "NSM"],
        [70191, 70193, "NSM"],
        [70196, 70196, "NSM"],
        [70198, 70199, "NSM"],
        [70206, 70206, "NSM"],
        [70209, 70209, "NSM"],
        [70367, 70367, "NSM"],
        [70371, 70378, "NSM"],
        [70400, 70401, "NSM"],
        [70459, 70460, "NSM"],
        [70464, 70464, "NSM"],
        [70502, 70508, "NSM"],
        [70512, 70516, "NSM"],
        [70587, 70592, "NSM"],
        [70606, 70606, "NSM"],
        [70608, 70608, "NSM"],
        [70610, 70610, "NSM"],
        [70625, 70626, "NSM"],
        [70712, 70719, "NSM"],
        [70722, 70724, "NSM"],
        [70726, 70726, "NSM"],
        [70750, 70750, "NSM"],
        [70835, 70840, "NSM"],
        [70842, 70842, "NSM"],
        [70847, 70848, "NSM"],
        [70850, 70851, "NSM"],
        [71090, 71093, "NSM"],
        [71100, 71101, "NSM"],
        [71103, 71104, "NSM"],
        [71132, 71133, "NSM"],
        [71219, 71226, "NSM"],
        [71229, 71229, "NSM"],
        [71231, 71232, "NSM"],
        [71264, 71276, "ON"],
        [71339, 71339, "NSM"],
        [71341, 71341, "NSM"],
        [71344, 71349, "NSM"],
        [71351, 71351, "NSM"],
        [71453, 71453, "NSM"],
        [71455, 71455, "NSM"],
        [71458, 71461, "NSM"],
        [71463, 71467, "NSM"],
        [71727, 71735, "NSM"],
        [71737, 71738, "NSM"],
        [71995, 71996, "NSM"],
        [71998, 71998, "NSM"],
        [72003, 72003, "NSM"],
        [72148, 72151, "NSM"],
        [72154, 72155, "NSM"],
        [72160, 72160, "NSM"],
        [72193, 72198, "NSM"],
        [72201, 72202, "NSM"],
        [72243, 72248, "NSM"],
        [72251, 72254, "NSM"],
        [72263, 72263, "NSM"],
        [72273, 72278, "NSM"],
        [72281, 72283, "NSM"],
        [72330, 72342, "NSM"],
        [72344, 72345, "NSM"],
        [72544, 72544, "NSM"],
        [72546, 72548, "NSM"],
        [72550, 72550, "NSM"],
        [72752, 72758, "NSM"],
        [72760, 72765, "NSM"],
        [72850, 72871, "NSM"],
        [72874, 72880, "NSM"],
        [72882, 72883, "NSM"],
        [72885, 72886, "NSM"],
        [73009, 73014, "NSM"],
        [73018, 73018, "NSM"],
        [73020, 73021, "NSM"],
        [73023, 73029, "NSM"],
        [73031, 73031, "NSM"],
        [73104, 73105, "NSM"],
        [73109, 73109, "NSM"],
        [73111, 73111, "NSM"],
        [73459, 73460, "NSM"],
        [73472, 73473, "NSM"],
        [73526, 73530, "NSM"],
        [73536, 73536, "NSM"],
        [73538, 73538, "NSM"],
        [73562, 73562, "NSM"],
        [73685, 73692, "ON"],
        [73693, 73696, "ET"],
        [73697, 73713, "ON"],
        [78912, 78912, "NSM"],
        [78919, 78933, "NSM"],
        [90398, 90409, "NSM"],
        [90413, 90415, "NSM"],
        [92912, 92916, "NSM"],
        [92976, 92982, "NSM"],
        [94031, 94031, "NSM"],
        [94095, 94098, "NSM"],
        [94178, 94178, "ON"],
        [94180, 94180, "NSM"],
        [113821, 113822, "NSM"],
        [113824, 113827, "BN"],
        [117760, 117973, "ON"],
        [118e3, 118009, "EN"],
        [118010, 118012, "ON"],
        [118016, 118451, "ON"],
        [118458, 118480, "ON"],
        [118496, 118512, "ON"],
        [118528, 118573, "NSM"],
        [118576, 118598, "NSM"],
        [119143, 119145, "NSM"],
        [119155, 119162, "BN"],
        [119163, 119170, "NSM"],
        [119173, 119179, "NSM"],
        [119210, 119213, "NSM"],
        [119273, 119274, "ON"],
        [119296, 119361, "ON"],
        [119362, 119364, "NSM"],
        [119365, 119365, "ON"],
        [119552, 119638, "ON"],
        [120513, 120513, "ON"],
        [120539, 120539, "ON"],
        [120571, 120571, "ON"],
        [120597, 120597, "ON"],
        [120629, 120629, "ON"],
        [120655, 120655, "ON"],
        [120687, 120687, "ON"],
        [120713, 120713, "ON"],
        [120745, 120745, "ON"],
        [120771, 120771, "ON"],
        [120782, 120831, "EN"],
        [121344, 121398, "NSM"],
        [121403, 121452, "NSM"],
        [121461, 121461, "NSM"],
        [121476, 121476, "NSM"],
        [121499, 121503, "NSM"],
        [121505, 121519, "NSM"],
        [122880, 122886, "NSM"],
        [122888, 122904, "NSM"],
        [122907, 122913, "NSM"],
        [122915, 122916, "NSM"],
        [122918, 122922, "NSM"],
        [123023, 123023, "NSM"],
        [123184, 123190, "NSM"],
        [123566, 123566, "NSM"],
        [123628, 123631, "NSM"],
        [123647, 123647, "ET"],
        [124140, 124143, "NSM"],
        [124398, 124399, "NSM"],
        [124643, 124643, "NSM"],
        [124646, 124646, "NSM"],
        [124654, 124655, "NSM"],
        [124661, 124661, "NSM"],
        [124928, 125135, "R"],
        [125136, 125142, "NSM"],
        [125143, 125251, "R"],
        [125252, 125258, "NSM"],
        [125259, 126063, "R"],
        [126064, 126143, "AL"],
        [126144, 126207, "R"],
        [126208, 126287, "AL"],
        [126288, 126463, "R"],
        [126464, 126703, "AL"],
        [126704, 126705, "ON"],
        [126706, 126719, "AL"],
        [126720, 126975, "R"],
        [126976, 127019, "ON"],
        [127024, 127123, "ON"],
        [127136, 127150, "ON"],
        [127153, 127167, "ON"],
        [127169, 127183, "ON"],
        [127185, 127221, "ON"],
        [127232, 127242, "EN"],
        [127243, 127247, "ON"],
        [127279, 127279, "ON"],
        [127338, 127343, "ON"],
        [127405, 127405, "ON"],
        [127584, 127589, "ON"],
        [127744, 128728, "ON"],
        [128732, 128748, "ON"],
        [128752, 128764, "ON"],
        [128768, 128985, "ON"],
        [128992, 129003, "ON"],
        [129008, 129008, "ON"],
        [129024, 129035, "ON"],
        [129040, 129095, "ON"],
        [129104, 129113, "ON"],
        [129120, 129159, "ON"],
        [129168, 129197, "ON"],
        [129200, 129211, "ON"],
        [129216, 129217, "ON"],
        [129232, 129240, "ON"],
        [129280, 129623, "ON"],
        [129632, 129645, "ON"],
        [129648, 129660, "ON"],
        [129664, 129674, "ON"],
        [129678, 129734, "ON"],
        [129736, 129736, "ON"],
        [129741, 129756, "ON"],
        [129759, 129770, "ON"],
        [129775, 129784, "ON"],
        [129792, 129938, "ON"],
        [129940, 130031, "ON"],
        [130032, 130041, "EN"],
        [130042, 130042, "ON"],
        [131070, 131071, "BN"],
        [196606, 196607, "BN"],
        [262142, 262143, "BN"],
        [327678, 327679, "BN"],
        [393214, 393215, "BN"],
        [458750, 458751, "BN"],
        [524286, 524287, "BN"],
        [589822, 589823, "BN"],
        [655358, 655359, "BN"],
        [720894, 720895, "BN"],
        [786430, 786431, "BN"],
        [851966, 851967, "BN"],
        [917502, 917759, "BN"],
        [917760, 917999, "NSM"],
        [918e3, 921599, "BN"],
        [983038, 983039, "BN"],
        [1048574, 1048575, "BN"],
        [1114110, 1114111, "BN"]
      ],
      lf = /[ \t\n\r\f]+/g,
      lp = /[\t\n\r\f]| {2,}|^ | $/,
      lv = null,
      lF = RegExp(
        "[\\u0600-\\u0604\\u0606-\\u060B\\u060D-\\u061A\\u061C-\\u061E\\u0620-\\u063F\\u0641-\\u064A\\u0656-\\u066F\\u0671-\\u06DC\\u06DE-\\u06FF\\u0750-\\u077F\\u0870-\\u0891\\u0897-\\u08E1\\u08E3-\\u08FF\\uFB50-\\uFD3D\\uFD40-\\uFDCF\\uFDF0-\\uFDFF\\uFE70-\\uFE74\\uFE76-\\uFEFC\\u{10E60}-\\u{10E7E}\\u{10EC2}-\\u{10EC7}\\u{10ED0}-\\u{10ED8}\\u{10EFA}-\\u{10EFF}\\u{1EE00}-\\u{1EE03}\\u{1EE05}-\\u{1EE1F}\\u{1EE21}-\\u{1EE22}\\u{1EE24}\\u{1EE27}\\u{1EE29}-\\u{1EE32}\\u{1EE34}-\\u{1EE37}\\u{1EE39}\\u{1EE3B}\\u{1EE42}\\u{1EE47}\\u{1EE49}\\u{1EE4B}\\u{1EE4D}-\\u{1EE4F}\\u{1EE51}-\\u{1EE52}\\u{1EE54}\\u{1EE57}\\u{1EE59}\\u{1EE5B}\\u{1EE5D}\\u{1EE5F}\\u{1EE61}-\\u{1EE62}\\u{1EE64}\\u{1EE67}-\\u{1EE6A}\\u{1EE6C}-\\u{1EE72}\\u{1EE74}-\\u{1EE77}\\u{1EE79}-\\u{1EE7C}\\u{1EE7E}\\u{1EE80}-\\u{1EE89}\\u{1EE8B}-\\u{1EE9B}\\u{1EEA1}-\\u{1EEA3}\\u{1EEA5}-\\u{1EEA9}\\u{1EEAB}-\\u{1EEBB}\\u{1EEF0}-\\u{1EEF1}]",
        "u"
      ),
      lC = RegExp(
        "[\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1-\\u05C2\\u05C4-\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7-\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962-\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7-\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2-\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47-\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70-\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2-\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47-\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62-\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55-\\u0C56\\u0C62-\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5-\\u0CD6\\u0CE2-\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B-\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62-\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2-\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18-\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F3F\\u0F71-\\u0F84\\u0F86-\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752-\\u1753\\u1772-\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180D\\u180F\\u1885-\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ADD\\u1AE0-\\u1AEB\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099-\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E-\\uA69F\\uA6F0-\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880-\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C-\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7-\\uAAB8\\uAABE-\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5-\\uAAF6\\uABE3-\\uABEA\\uABEC-\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\u{101FD}\\u{102E0}\\u{10376}-\\u{1037A}\\u{10A01}-\\u{10A03}\\u{10A05}-\\u{10A06}\\u{10A0C}-\\u{10A0F}\\u{10A38}-\\u{10A3A}\\u{10A3F}\\u{10AE5}-\\u{10AE6}\\u{10D24}-\\u{10D27}\\u{10D69}-\\u{10D6D}\\u{10EAB}-\\u{10EAC}\\u{10EFA}-\\u{10EFF}\\u{10F46}-\\u{10F50}\\u{10F82}-\\u{10F85}\\u{11000}-\\u{11002}\\u{11038}-\\u{11046}\\u{11070}\\u{11073}-\\u{11074}\\u{1107F}-\\u{11082}\\u{110B0}-\\u{110BA}\\u{110C2}\\u{11100}-\\u{11102}\\u{11127}-\\u{11134}\\u{11145}-\\u{11146}\\u{11173}\\u{11180}-\\u{11182}\\u{111B3}-\\u{111C0}\\u{111C9}-\\u{111CC}\\u{111CE}-\\u{111CF}\\u{1122C}-\\u{11237}\\u{1123E}\\u{11241}\\u{112DF}-\\u{112EA}\\u{11300}-\\u{11303}\\u{1133B}-\\u{1133C}\\u{1133E}-\\u{11344}\\u{11347}-\\u{11348}\\u{1134B}-\\u{1134D}\\u{11357}\\u{11362}-\\u{11363}\\u{11366}-\\u{1136C}\\u{11370}-\\u{11374}\\u{113B8}-\\u{113C0}\\u{113C2}\\u{113C5}\\u{113C7}-\\u{113CA}\\u{113CC}-\\u{113D0}\\u{113D2}\\u{113E1}-\\u{113E2}\\u{11435}-\\u{11446}\\u{1145E}\\u{114B0}-\\u{114C3}\\u{115AF}-\\u{115B5}\\u{115B8}-\\u{115C0}\\u{115DC}-\\u{115DD}\\u{11630}-\\u{11640}\\u{116AB}-\\u{116B7}\\u{1171D}-\\u{1172B}\\u{1182C}-\\u{1183A}\\u{11930}-\\u{11935}\\u{11937}-\\u{11938}\\u{1193B}-\\u{1193E}\\u{11940}\\u{11942}-\\u{11943}\\u{119D1}-\\u{119D7}\\u{119DA}-\\u{119E0}\\u{119E4}\\u{11A01}-\\u{11A0A}\\u{11A33}-\\u{11A39}\\u{11A3B}-\\u{11A3E}\\u{11A47}\\u{11A51}-\\u{11A5B}\\u{11A8A}-\\u{11A99}\\u{11B60}-\\u{11B67}\\u{11C2F}-\\u{11C36}\\u{11C38}-\\u{11C3F}\\u{11C92}-\\u{11CA7}\\u{11CA9}-\\u{11CB6}\\u{11D31}-\\u{11D36}\\u{11D3A}\\u{11D3C}-\\u{11D3D}\\u{11D3F}-\\u{11D45}\\u{11D47}\\u{11D8A}-\\u{11D8E}\\u{11D90}-\\u{11D91}\\u{11D93}-\\u{11D97}\\u{11EF3}-\\u{11EF6}\\u{11F00}-\\u{11F01}\\u{11F03}\\u{11F34}-\\u{11F3A}\\u{11F3E}-\\u{11F42}\\u{11F5A}\\u{13440}\\u{13447}-\\u{13455}\\u{1611E}-\\u{1612F}\\u{16AF0}-\\u{16AF4}\\u{16B30}-\\u{16B36}\\u{16F4F}\\u{16F51}-\\u{16F87}\\u{16F8F}-\\u{16F92}\\u{16FE4}\\u{16FF0}-\\u{16FF1}\\u{1BC9D}-\\u{1BC9E}\\u{1CF00}-\\u{1CF2D}\\u{1CF30}-\\u{1CF46}\\u{1D165}-\\u{1D169}\\u{1D16D}-\\u{1D172}\\u{1D17B}-\\u{1D182}\\u{1D185}-\\u{1D18B}\\u{1D1AA}-\\u{1D1AD}\\u{1D242}-\\u{1D244}\\u{1DA00}-\\u{1DA36}\\u{1DA3B}-\\u{1DA6C}\\u{1DA75}\\u{1DA84}\\u{1DA9B}-\\u{1DA9F}\\u{1DAA1}-\\u{1DAAF}\\u{1E000}-\\u{1E006}\\u{1E008}-\\u{1E018}\\u{1E01B}-\\u{1E021}\\u{1E023}-\\u{1E024}\\u{1E026}-\\u{1E02A}\\u{1E08F}\\u{1E130}-\\u{1E136}\\u{1E2AE}\\u{1E2EC}-\\u{1E2EF}\\u{1E4EC}-\\u{1E4EF}\\u{1E5EE}-\\u{1E5EF}\\u{1E6E3}\\u{1E6E6}\\u{1E6EE}-\\u{1E6EF}\\u{1E6F5}\\u{1E8D0}-\\u{1E8D6}\\u{1E944}-\\u{1E94A}\\u{E0100}-\\u{E01EF}]",
        "u"
      ),
      lS = RegExp(
        "[\\u0030-\\u0039\\u0660-\\u0669\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19D9\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19\\u{104A0}-\\u{104A9}\\u{10D30}-\\u{10D39}\\u{10D40}-\\u{10D49}\\u{11066}-\\u{1106F}\\u{110F0}-\\u{110F9}\\u{11136}-\\u{1113F}\\u{111D0}-\\u{111D9}\\u{112F0}-\\u{112F9}\\u{11450}-\\u{11459}\\u{114D0}-\\u{114D9}\\u{11650}-\\u{11659}\\u{116C0}-\\u{116C9}\\u{116D0}-\\u{116E3}\\u{11730}-\\u{11739}\\u{118E0}-\\u{118E9}\\u{11950}-\\u{11959}\\u{11BF0}-\\u{11BF9}\\u{11C50}-\\u{11C59}\\u{11D50}-\\u{11D59}\\u{11DA0}-\\u{11DA9}\\u{11DE0}-\\u{11DE9}\\u{11F50}-\\u{11F59}\\u{16130}-\\u{16139}\\u{16A60}-\\u{16A69}\\u{16AC0}-\\u{16AC9}\\u{16B50}-\\u{16B59}\\u{16D70}-\\u{16D79}\\u{1CCF0}-\\u{1CCF9}\\u{1D7CE}-\\u{1D7FF}\\u{1E140}-\\u{1E149}\\u{1E2F0}-\\u{1E2F9}\\u{1E4F0}-\\u{1E4F9}\\u{1E5F1}-\\u{1E5FA}\\u{1E950}-\\u{1E959}\\u{1FBF0}-\\u{1FBF9}]",
        "u"
      );
    function lE(e) {
      return (
        (e >= 19968 && e <= 40959) ||
        (e >= 13312 && e <= 19903) ||
        (e >= 131072 && e <= 173791) ||
        (e >= 173824 && e <= 177983) ||
        (e >= 177984 && e <= 178207) ||
        (e >= 178208 && e <= 183983) ||
        (e >= 183984 && e <= 191471) ||
        (e >= 191472 && e <= 192093) ||
        (e >= 194560 && e <= 195103) ||
        (e >= 196608 && e <= 201551) ||
        (e >= 201552 && e <= 205743) ||
        (e >= 205744 && e <= 210041) ||
        (e >= 63744 && e <= 64255) ||
        (e >= 12288 && e <= 12351) ||
        (e >= 12352 && e <= 12447) ||
        (e >= 12448 && e <= 12543) ||
        (e >= 12592 && e <= 12687) ||
        (e >= 44032 && e <= 55215) ||
        (e >= 65280 && e <= 65519)
      );
    }
    function lb(e) {
      for (let t = 0; t < e.length; t++) {
        let n = e.charCodeAt(t);
        if (!(n < 12288)) {
          if (n >= 55296 && n <= 56319 && t + 1 < e.length) {
            let l = e.charCodeAt(t + 1);
            if (l >= 56320 && l <= 57343) {
              if (lE(((n - 55296) << 10) + (l - 56320) + 65536)) return !0;
              t++;
              continue;
            }
          }
          if (lE(n)) return !0;
        }
      }
      return !1;
    }
    let lA = new Set([" ", " ", "⁠", "\uFEFF"]),
      ly = new Set(["-", "‐", "–", "—"]);
    function lx(e, t) {
      let n, l, a;
      return (
        !(null !== (n = lI(e)) && lA.has(n)) &&
        (!t ||
          (!(null !== (l = lI(e)) && (lM.has(l) || lD.has(l))) &&
            !(null !== (a = lI(e)) && ly.has(a))))
      );
    }
    let lM = new Set([
        "，",
        "．",
        "！",
        "：",
        "；",
        "？",
        "、",
        "。",
        "・",
        "）",
        "〕",
        "〉",
        "》",
        "」",
        "』",
        "】",
        "〗",
        "〙",
        "〛",
        "ー",
        "々",
        "〻",
        "ゝ",
        "ゞ",
        "ヽ",
        "ヾ"
      ]),
      lN = new Set([
        '"',
        "(",
        "[",
        "{",
        "¡",
        "¿",
        "“",
        "‘",
        "‚",
        "„",
        "«",
        "‹",
        "⸘",
        "（",
        "〔",
        "〈",
        "《",
        "「",
        "『",
        "【",
        "〖",
        "〘",
        "〚"
      ]),
      lw = new Set(["'", "’"]),
      lD = new Set([
        ".",
        ",",
        "!",
        "?",
        ":",
        ";",
        "،",
        "؛",
        "؟",
        "।",
        "॥",
        "၊",
        "။",
        "၌",
        "၍",
        "၏",
        ")",
        "]",
        "}",
        "%",
        '"',
        "”",
        "’",
        "»",
        "›",
        "…"
      ]),
      lB = new Set([":", ".", "،", "؛"]),
      lL = new Set(["၏"]),
      lR = new Set(["”", "’", "»", "›", "」", "』", "】", "》", "〉", "〕", "）"]);
    function lO(e) {
      let t = !1;
      for (let n of e)
        if (!("\\" === n || lC.test(n))) {
          if (lN.has(n) || lD.has(n) || lw.has(n)) {
            t = !0;
            continue;
          }
          return !1;
        }
      return t;
    }
    function lk(e, t) {
      let n = t - 1;
      if (n <= 0) return Math.max(n, 0);
      let l = e.charCodeAt(n);
      if (l < 56320 || l > 57343) return n;
      let a = n - 1;
      if (a < 0) return n;
      let o = e.charCodeAt(a);
      return o >= 55296 && o <= 56319 ? a : n;
    }
    function lI(e) {
      if (0 === e.length) return null;
      let t = lk(e, e.length);
      return e.slice(t);
    }
    let lT = [
      36, 37, 43, 43, 92, 92, 162, 165, 176, 177, 1423, 1423, 1545, 1547, 1642, 1642, 2046, 2047,
      2546, 2547, 2553, 2555, 2801, 2801, 3065, 3065, 3449, 3449, 3647, 3647, 6107, 6107, 8240,
      8247, 8279, 8279, 8352, 8399, 8451, 8451, 8457, 8457, 8470, 8470, 8722, 8723, 43064, 43064,
      65020, 65020, 65129, 65130, 65284, 65285, 65504, 65505, 65509, 65510, 73693, 73696, 123647,
      123647, 126124, 126124, 126128, 126128
    ];
    function lP(e) {
      let t = e.codePointAt(0);
      return (
        void 0 !== t &&
        (function (e, t) {
          for (let n = 0; n < t.length; n += 2) if (e >= t[n] && e <= t[n + 1]) return !0;
          return !1;
        })(t, lT)
      );
    }
    function lz(e, t, n, l) {
      let a = t[l],
        o = e[l];
      if (null == a) return o;
      let i = n[l];
      if (o.length === i) return o;
      let r = a.repeat(i);
      return ((e[l] = r), r);
    }
    function lW(e, t) {
      return e && null !== t && lB.has(t);
    }
    function lV(e) {
      let t = e.length;
      for (; t > 0;) {
        let n = lk(e, t),
          l = e.slice(n, t);
        if (lR.has(l)) return !0;
        if (!lD.has(l)) break;
        t = n;
      }
      return !1;
    }
    let lH = /[\x20\t\n\xA0\xAD\u200B\u202F\u2060\uFEFF]/;
    function l_(e) {
      return 1 === e.length ? e[0] : e.join("");
    }
    function lG(e) {
      return (
        "space" === e || "preserved-space" === e || "zero-width-break" === e || "hard-break" === e
      );
    }
    let lj = /^[A-Za-z][A-Za-z0-9+.-]*:$/,
      lX = new Set([":", "-", "/", "×", ",", ".", "+", "–", "—"]),
      lU = RegExp(
        "[\\u0021-\\u0023\\u0025-\\u002A\\u002C-\\u002F\\u003A-\\u003B\\u003F-\\u0040\\u005B-\\u005D\\u005F\\u007B\\u007D\\u00A1\\u00A7\\u00AB\\u00B6-\\u00B7\\u00BB\\u00BF\\u037E\\u0387\\u055A-\\u055F\\u0589-\\u058A\\u05BE\\u05C0\\u05C3\\u05C6\\u05F3-\\u05F4\\u0609-\\u060A\\u060C-\\u060D\\u061B\\u061D-\\u061F\\u066A-\\u066D\\u06D4\\u0700-\\u070D\\u07F7-\\u07F9\\u0830-\\u083E\\u085E\\u0964-\\u0965\\u0970\\u09FD\\u0A76\\u0AF0\\u0C77\\u0C84\\u0DF4\\u0E4F\\u0E5A-\\u0E5B\\u0F04-\\u0F12\\u0F14\\u0F3A-\\u0F3D\\u0F85\\u0FD0-\\u0FD4\\u0FD9-\\u0FDA\\u104A-\\u104F\\u10FB\\u1360-\\u1368\\u1400\\u166E\\u169B-\\u169C\\u16EB-\\u16ED\\u1735-\\u1736\\u17D4-\\u17D6\\u17D8-\\u17DA\\u1800-\\u180A\\u1944-\\u1945\\u1A1E-\\u1A1F\\u1AA0-\\u1AA6\\u1AA8-\\u1AAD\\u1B4E-\\u1B4F\\u1B5A-\\u1B60\\u1B7D-\\u1B7F\\u1BFC-\\u1BFF\\u1C3B-\\u1C3F\\u1C7E-\\u1C7F\\u1CC0-\\u1CC7\\u1CD3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205E\\u207D-\\u207E\\u208D-\\u208E\\u2308-\\u230B\\u2329-\\u232A\\u2768-\\u2775\\u27C5-\\u27C6\\u27E6-\\u27EF\\u2983-\\u2998\\u29D8-\\u29DB\\u29FC-\\u29FD\\u2CF9-\\u2CFC\\u2CFE-\\u2CFF\\u2D70\\u2E00-\\u2E2E\\u2E30-\\u2E4F\\u2E52-\\u2E5D\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301F\\u3030\\u303D\\u30A0\\u30FB\\uA4FE-\\uA4FF\\uA60D-\\uA60F\\uA673\\uA67E\\uA6F2-\\uA6F7\\uA874-\\uA877\\uA8CE-\\uA8CF\\uA8F8-\\uA8FA\\uA8FC\\uA92E-\\uA92F\\uA95F\\uA9C1-\\uA9CD\\uA9DE-\\uA9DF\\uAA5C-\\uAA5F\\uAADE-\\uAADF\\uAAF0-\\uAAF1\\uABEB\\uFD3E-\\uFD3F\\uFE10-\\uFE19\\uFE30-\\uFE52\\uFE54-\\uFE61\\uFE63\\uFE68\\uFE6A-\\uFE6B\\uFF01-\\uFF03\\uFF05-\\uFF0A\\uFF0C-\\uFF0F\\uFF1A-\\uFF1B\\uFF1F-\\uFF20\\uFF3B-\\uFF3D\\uFF3F\\uFF5B\\uFF5D\\uFF5F-\\uFF65\\u{10100}-\\u{10102}\\u{1039F}\\u{103D0}\\u{1056F}\\u{10857}\\u{1091F}\\u{1093F}\\u{10A50}-\\u{10A58}\\u{10A7F}\\u{10AF0}-\\u{10AF6}\\u{10B39}-\\u{10B3F}\\u{10B99}-\\u{10B9C}\\u{10D6E}\\u{10EAD}\\u{10ED0}\\u{10F55}-\\u{10F59}\\u{10F86}-\\u{10F89}\\u{11047}-\\u{1104D}\\u{110BB}-\\u{110BC}\\u{110BE}-\\u{110C1}\\u{11140}-\\u{11143}\\u{11174}-\\u{11175}\\u{111C5}-\\u{111C8}\\u{111CD}\\u{111DB}\\u{111DD}-\\u{111DF}\\u{11238}-\\u{1123D}\\u{112A9}\\u{113D4}-\\u{113D5}\\u{113D7}-\\u{113D8}\\u{1144B}-\\u{1144F}\\u{1145A}-\\u{1145B}\\u{1145D}\\u{114C6}\\u{115C1}-\\u{115D7}\\u{11641}-\\u{11643}\\u{11660}-\\u{1166C}\\u{116B9}\\u{1173C}-\\u{1173E}\\u{1183B}\\u{11944}-\\u{11946}\\u{119E2}\\u{11A3F}-\\u{11A46}\\u{11A9A}-\\u{11A9C}\\u{11A9E}-\\u{11AA2}\\u{11B00}-\\u{11B09}\\u{11BE1}\\u{11C41}-\\u{11C45}\\u{11C70}-\\u{11C71}\\u{11EF7}-\\u{11EF8}\\u{11F43}-\\u{11F4F}\\u{11FFF}\\u{12470}-\\u{12474}\\u{12FF1}-\\u{12FF2}\\u{16A6E}-\\u{16A6F}\\u{16AF5}\\u{16B37}-\\u{16B3B}\\u{16B44}\\u{16D6D}-\\u{16D6F}\\u{16E97}-\\u{16E9A}\\u{16FE2}\\u{1BC9F}\\u{1DA87}-\\u{1DA8B}\\u{1E5FF}\\u{1E95E}-\\u{1E95F}\\u0024\\u002B\\u003C-\\u003E\\u005E\\u0060\\u007C\\u007E\\u00A2-\\u00A6\\u00A8-\\u00A9\\u00AC\\u00AE-\\u00B1\\u00B4\\u00B8\\u00D7\\u00F7\\u02C2-\\u02C5\\u02D2-\\u02DF\\u02E5-\\u02EB\\u02ED\\u02EF-\\u02FF\\u0375\\u0384-\\u0385\\u03F6\\u0482\\u058D-\\u058F\\u0606-\\u0608\\u060B\\u060E-\\u060F\\u06DE\\u06E9\\u06FD-\\u06FE\\u07F6\\u07FE-\\u07FF\\u0888\\u09F2-\\u09F3\\u09FA-\\u09FB\\u0AF1\\u0B70\\u0BF3-\\u0BFA\\u0C7F\\u0D4F\\u0D79\\u0E3F\\u0F01-\\u0F03\\u0F13\\u0F15-\\u0F17\\u0F1A-\\u0F1F\\u0F34\\u0F36\\u0F38\\u0FBE-\\u0FC5\\u0FC7-\\u0FCC\\u0FCE-\\u0FCF\\u0FD5-\\u0FD8\\u109E-\\u109F\\u1390-\\u1399\\u166D\\u17DB\\u1940\\u19DE-\\u19FF\\u1B61-\\u1B6A\\u1B74-\\u1B7C\\u1FBD\\u1FBF-\\u1FC1\\u1FCD-\\u1FCF\\u1FDD-\\u1FDF\\u1FED-\\u1FEF\\u1FFD-\\u1FFE\\u2044\\u2052\\u207A-\\u207C\\u208A-\\u208C\\u20A0-\\u20C1\\u2100-\\u2101\\u2103-\\u2106\\u2108-\\u2109\\u2114\\u2116-\\u2118\\u211E-\\u2123\\u2125\\u2127\\u2129\\u212E\\u213A-\\u213B\\u2140-\\u2144\\u214A-\\u214D\\u214F\\u218A-\\u218B\\u2190-\\u2307\\u230C-\\u2328\\u232B-\\u2429\\u2440-\\u244A\\u249C-\\u24E9\\u2500-\\u2767\\u2794-\\u27C4\\u27C7-\\u27E5\\u27F0-\\u2982\\u2999-\\u29D7\\u29DC-\\u29FB\\u29FE-\\u2B73\\u2B76-\\u2BFF\\u2CE5-\\u2CEA\\u2E50-\\u2E51\\u2E80-\\u2E99\\u2E9B-\\u2EF3\\u2F00-\\u2FD5\\u2FF0-\\u2FFF\\u3004\\u3012-\\u3013\\u3020\\u3036-\\u3037\\u303E-\\u303F\\u309B-\\u309C\\u3190-\\u3191\\u3196-\\u319F\\u31C0-\\u31E5\\u31EF\\u3200-\\u321E\\u322A-\\u3247\\u3250\\u3260-\\u327F\\u328A-\\u32B0\\u32C0-\\u33FF\\u4DC0-\\u4DFF\\uA490-\\uA4C6\\uA700-\\uA716\\uA720-\\uA721\\uA789-\\uA78A\\uA828-\\uA82B\\uA836-\\uA839\\uAA77-\\uAA79\\uAB5B\\uAB6A-\\uAB6B\\uFB29\\uFBB2-\\uFBD2\\uFD40-\\uFD4F\\uFD90-\\uFD91\\uFDC8-\\uFDCF\\uFDFC-\\uFDFF\\uFE62\\uFE64-\\uFE66\\uFE69\\uFF04\\uFF0B\\uFF1C-\\uFF1E\\uFF3E\\uFF40\\uFF5C\\uFF5E\\uFFE0-\\uFFE6\\uFFE8-\\uFFEE\\uFFFC-\\uFFFD\\u{10137}-\\u{1013F}\\u{10179}-\\u{10189}\\u{1018C}-\\u{1018E}\\u{10190}-\\u{1019C}\\u{101A0}\\u{101D0}-\\u{101FC}\\u{10877}-\\u{10878}\\u{10AC8}\\u{10D8E}-\\u{10D8F}\\u{10ED1}-\\u{10ED8}\\u{1173F}\\u{11FD5}-\\u{11FF1}\\u{16B3C}-\\u{16B3F}\\u{16B45}\\u{1BC9C}\\u{1CC00}-\\u{1CCEF}\\u{1CCFA}-\\u{1CCFC}\\u{1CD00}-\\u{1CEB3}\\u{1CEBA}-\\u{1CED0}\\u{1CEE0}-\\u{1CEF0}\\u{1CF50}-\\u{1CFC3}\\u{1D000}-\\u{1D0F5}\\u{1D100}-\\u{1D126}\\u{1D129}-\\u{1D164}\\u{1D16A}-\\u{1D16C}\\u{1D183}-\\u{1D184}\\u{1D18C}-\\u{1D1A9}\\u{1D1AE}-\\u{1D1EA}\\u{1D200}-\\u{1D241}\\u{1D245}\\u{1D300}-\\u{1D356}\\u{1D6C1}\\u{1D6DB}\\u{1D6FB}\\u{1D715}\\u{1D735}\\u{1D74F}\\u{1D76F}\\u{1D789}\\u{1D7A9}\\u{1D7C3}\\u{1D800}-\\u{1D9FF}\\u{1DA37}-\\u{1DA3A}\\u{1DA6D}-\\u{1DA74}\\u{1DA76}-\\u{1DA83}\\u{1DA85}-\\u{1DA86}\\u{1E14F}\\u{1E2FF}\\u{1ECAC}\\u{1ECB0}\\u{1ED2E}\\u{1EEF0}-\\u{1EEF1}\\u{1F000}-\\u{1F02B}\\u{1F030}-\\u{1F093}\\u{1F0A0}-\\u{1F0AE}\\u{1F0B1}-\\u{1F0BF}\\u{1F0C1}-\\u{1F0CF}\\u{1F0D1}-\\u{1F0F5}\\u{1F10D}-\\u{1F1AD}\\u{1F1E6}-\\u{1F202}\\u{1F210}-\\u{1F23B}\\u{1F240}-\\u{1F248}\\u{1F250}-\\u{1F251}\\u{1F260}-\\u{1F265}\\u{1F300}-\\u{1F6D8}\\u{1F6DC}-\\u{1F6EC}\\u{1F6F0}-\\u{1F6FC}\\u{1F700}-\\u{1F7D9}\\u{1F7E0}-\\u{1F7EB}\\u{1F7F0}\\u{1F800}-\\u{1F80B}\\u{1F810}-\\u{1F847}\\u{1F850}-\\u{1F859}\\u{1F860}-\\u{1F887}\\u{1F890}-\\u{1F8AD}\\u{1F8B0}-\\u{1F8BB}\\u{1F8C0}-\\u{1F8C1}\\u{1F8D0}-\\u{1F8D8}\\u{1F900}-\\u{1FA57}\\u{1FA60}-\\u{1FA6D}\\u{1FA70}-\\u{1FA7C}\\u{1FA80}-\\u{1FA8A}\\u{1FA8E}-\\u{1FAC6}\\u{1FAC8}\\u{1FACD}-\\u{1FADC}\\u{1FADF}-\\u{1FAEA}\\u{1FAEF}-\\u{1FAF8}\\u{1FB00}-\\u{1FB92}\\u{1FB94}-\\u{1FBEF}\\u{1FBFA}\\uE000-\\uF8FF\\u{F0000}-\\u{FFFFD}\\u{100000}-\\u{10FFFD}]",
        "u"
      ),
      lK = RegExp(
        "[\\u231A-\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD-\\u25FE\\u2614-\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA-\\u26AB\\u26BD-\\u26BE\\u26C4-\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2-\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A-\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B-\\u2B1C\\u2B50\\u2B55\\u{1F004}\\u{1F0CF}\\u{1F18E}\\u{1F191}-\\u{1F19A}\\u{1F1E6}-\\u{1F1FF}\\u{1F201}\\u{1F21A}\\u{1F22F}\\u{1F232}-\\u{1F236}\\u{1F238}-\\u{1F23A}\\u{1F250}-\\u{1F251}\\u{1F300}-\\u{1F320}\\u{1F32D}-\\u{1F335}\\u{1F337}-\\u{1F37C}\\u{1F37E}-\\u{1F393}\\u{1F3A0}-\\u{1F3CA}\\u{1F3CF}-\\u{1F3D3}\\u{1F3E0}-\\u{1F3F0}\\u{1F3F4}\\u{1F3F8}-\\u{1F43E}\\u{1F440}\\u{1F442}-\\u{1F4FC}\\u{1F4FF}-\\u{1F53D}\\u{1F54B}-\\u{1F54E}\\u{1F550}-\\u{1F567}\\u{1F57A}\\u{1F595}-\\u{1F596}\\u{1F5A4}\\u{1F5FB}-\\u{1F64F}\\u{1F680}-\\u{1F6C5}\\u{1F6CC}\\u{1F6D0}-\\u{1F6D2}\\u{1F6D5}-\\u{1F6D8}\\u{1F6DC}-\\u{1F6DF}\\u{1F6EB}-\\u{1F6EC}\\u{1F6F4}-\\u{1F6FC}\\u{1F7E0}-\\u{1F7EB}\\u{1F7F0}\\u{1F90C}-\\u{1F93A}\\u{1F93C}-\\u{1F945}\\u{1F947}-\\u{1F9FF}\\u{1FA70}-\\u{1FA7C}\\u{1FA80}-\\u{1FA8A}\\u{1FA8E}-\\u{1FAC6}\\u{1FAC8}\\u{1FACD}-\\u{1FADC}\\u{1FADF}-\\u{1FAEA}\\u{1FAEF}-\\u{1FAF8}]",
        "u"
      ),
      lq = new Set(["?", "֊", "-", "‐", "‒", "–", "—", "…", "‼", "‽", "⁉"]);
    function lY(e) {
      let t = e.charCodeAt(0);
      return t < 128
        ? (t >= 33 && t <= 47 && 45 !== t) ||
            (t >= 58 && t <= 64 && 63 !== t) ||
            (t >= 91 && t <= 96) ||
            (t >= 123 && t <= 126)
        : !lq.has(e) && !lK.test(e) && lU.test(e);
    }
    function lQ(e) {
      let t = !1;
      for (let n of e)
        if (!lC.test(n)) {
          if (!lY(n)) return !1;
          t = !0;
        }
      return t;
    }
    function lZ(e) {
      for (let t of e) if (lS.test(t)) return !0;
      return !1;
    }
    function lJ(e) {
      if (0 === e.length) return !1;
      for (let t of e) if (!(lS.test(t) || lX.has(t))) return !1;
      return !0;
    }
    let l$ = null,
      l0 = new Map(),
      l1 = null,
      l2 = RegExp(
        "[\\u231A-\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD-\\u25FE\\u2614-\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA-\\u26AB\\u26BD-\\u26BE\\u26C4-\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2-\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A-\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B-\\u2B1C\\u2B50\\u2B55\\u{1F004}\\u{1F0CF}\\u{1F18E}\\u{1F191}-\\u{1F19A}\\u{1F1E6}-\\u{1F1FF}\\u{1F201}\\u{1F21A}\\u{1F22F}\\u{1F232}-\\u{1F236}\\u{1F238}-\\u{1F23A}\\u{1F250}-\\u{1F251}\\u{1F300}-\\u{1F320}\\u{1F32D}-\\u{1F335}\\u{1F337}-\\u{1F37C}\\u{1F37E}-\\u{1F393}\\u{1F3A0}-\\u{1F3CA}\\u{1F3CF}-\\u{1F3D3}\\u{1F3E0}-\\u{1F3F0}\\u{1F3F4}\\u{1F3F8}-\\u{1F43E}\\u{1F440}\\u{1F442}-\\u{1F4FC}\\u{1F4FF}-\\u{1F53D}\\u{1F54B}-\\u{1F54E}\\u{1F550}-\\u{1F567}\\u{1F57A}\\u{1F595}-\\u{1F596}\\u{1F5A4}\\u{1F5FB}-\\u{1F64F}\\u{1F680}-\\u{1F6C5}\\u{1F6CC}\\u{1F6D0}-\\u{1F6D2}\\u{1F6D5}-\\u{1F6D8}\\u{1F6DC}-\\u{1F6DF}\\u{1F6EB}-\\u{1F6EC}\\u{1F6F4}-\\u{1F6FC}\\u{1F7E0}-\\u{1F7EB}\\u{1F7F0}\\u{1F90C}-\\u{1F93A}\\u{1F93C}-\\u{1F945}\\u{1F947}-\\u{1F9FF}\\u{1FA70}-\\u{1FA7C}\\u{1FA80}-\\u{1FA8A}\\u{1FA8E}-\\u{1FAC6}\\u{1FAC8}\\u{1FACD}-\\u{1FADC}\\u{1FADF}-\\u{1FAEA}\\u{1FAEF}-\\u{1FAF8}]",
        "u"
      ),
      l6 = RegExp(
        "[\\u231A-\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD-\\u25FE\\u2614-\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA-\\u26AB\\u26BD-\\u26BE\\u26C4-\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2-\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A-\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B-\\u2B1C\\u2B50\\u2B55\\u{1F004}\\u{1F0CF}\\u{1F18E}\\u{1F191}-\\u{1F19A}\\u{1F1E6}-\\u{1F1FF}\\u{1F201}\\u{1F21A}\\u{1F22F}\\u{1F232}-\\u{1F236}\\u{1F238}-\\u{1F23A}\\u{1F250}-\\u{1F251}\\u{1F300}-\\u{1F320}\\u{1F32D}-\\u{1F335}\\u{1F337}-\\u{1F37C}\\u{1F37E}-\\u{1F393}\\u{1F3A0}-\\u{1F3CA}\\u{1F3CF}-\\u{1F3D3}\\u{1F3E0}-\\u{1F3F0}\\u{1F3F4}\\u{1F3F8}-\\u{1F43E}\\u{1F440}\\u{1F442}-\\u{1F4FC}\\u{1F4FF}-\\u{1F53D}\\u{1F54B}-\\u{1F54E}\\u{1F550}-\\u{1F567}\\u{1F57A}\\u{1F595}-\\u{1F596}\\u{1F5A4}\\u{1F5FB}-\\u{1F64F}\\u{1F680}-\\u{1F6C5}\\u{1F6CC}\\u{1F6D0}-\\u{1F6D2}\\u{1F6D5}-\\u{1F6D8}\\u{1F6DC}-\\u{1F6DF}\\u{1F6EB}-\\u{1F6EC}\\u{1F6F4}-\\u{1F6FC}\\u{1F7E0}-\\u{1F7EB}\\u{1F7F0}\\u{1F90C}-\\u{1F93A}\\u{1F93C}-\\u{1F945}\\u{1F947}-\\u{1F9FF}\\u{1FA70}-\\u{1FA7C}\\u{1FA80}-\\u{1FA8A}\\u{1FA8E}-\\u{1FAC6}\\u{1FAC8}\\u{1FACD}-\\u{1FADC}\\u{1FADF}-\\u{1FAEA}\\u{1FAEF}-\\u{1FAF8}\\u00A9\\u00AE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u2199\\u21A9-\\u21AA\\u231A-\\u231B\\u2328\\u23CF\\u23E9-\\u23F3\\u23F8-\\u23FA\\u24C2\\u25AA-\\u25AB\\u25B6\\u25C0\\u25FB-\\u25FE\\u2600-\\u2604\\u260E\\u2611\\u2614-\\u2615\\u2618\\u261D\\u2620\\u2622-\\u2623\\u2626\\u262A\\u262E-\\u262F\\u2638-\\u263A\\u2640\\u2642\\u2648-\\u2653\\u265F-\\u2660\\u2663\\u2665-\\u2666\\u2668\\u267B\\u267E-\\u267F\\u2692-\\u2697\\u2699\\u269B-\\u269C\\u26A0-\\u26A1\\u26A7\\u26AA-\\u26AB\\u26B0-\\u26B1\\u26BD-\\u26BE\\u26C4-\\u26C5\\u26C8\\u26CE-\\u26CF\\u26D1\\u26D3-\\u26D4\\u26E9-\\u26EA\\u26F0-\\u26F5\\u26F7-\\u26FA\\u26FD\\u2702\\u2705\\u2708-\\u270D\\u270F\\u2712\\u2714\\u2716\\u271D\\u2721\\u2728\\u2733-\\u2734\\u2744\\u2747\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2763-\\u2764\\u2795-\\u2797\\u27A1\\u27B0\\u27BF\\u2934-\\u2935\\u2B05-\\u2B07\\u2B1B-\\u2B1C\\u2B50\\u2B55\\u3030\\u303D\\u3297\\u3299\\u{1F004}\\u{1F02C}-\\u{1F02F}\\u{1F094}-\\u{1F09F}\\u{1F0AF}-\\u{1F0B0}\\u{1F0C0}\\u{1F0CF}-\\u{1F0D0}\\u{1F0F6}-\\u{1F0FF}\\u{1F170}-\\u{1F171}\\u{1F17E}-\\u{1F17F}\\u{1F18E}\\u{1F191}-\\u{1F19A}\\u{1F1AE}-\\u{1F1E5}\\u{1F201}-\\u{1F20F}\\u{1F21A}\\u{1F22F}\\u{1F232}-\\u{1F23A}\\u{1F23C}-\\u{1F23F}\\u{1F249}-\\u{1F25F}\\u{1F266}-\\u{1F321}\\u{1F324}-\\u{1F393}\\u{1F396}-\\u{1F397}\\u{1F399}-\\u{1F39B}\\u{1F39E}-\\u{1F3F0}\\u{1F3F3}-\\u{1F3F5}\\u{1F3F7}-\\u{1F3FA}\\u{1F400}-\\u{1F4FD}\\u{1F4FF}-\\u{1F53D}\\u{1F549}-\\u{1F54E}\\u{1F550}-\\u{1F567}\\u{1F56F}-\\u{1F570}\\u{1F573}-\\u{1F57A}\\u{1F587}\\u{1F58A}-\\u{1F58D}\\u{1F590}\\u{1F595}-\\u{1F596}\\u{1F5A4}-\\u{1F5A5}\\u{1F5A8}\\u{1F5B1}-\\u{1F5B2}\\u{1F5BC}\\u{1F5C2}-\\u{1F5C4}\\u{1F5D1}-\\u{1F5D3}\\u{1F5DC}-\\u{1F5DE}\\u{1F5E1}\\u{1F5E3}\\u{1F5E8}\\u{1F5EF}\\u{1F5F3}\\u{1F5FA}-\\u{1F64F}\\u{1F680}-\\u{1F6C5}\\u{1F6CB}-\\u{1F6D2}\\u{1F6D5}-\\u{1F6E5}\\u{1F6E9}\\u{1F6EB}-\\u{1F6F0}\\u{1F6F3}-\\u{1F6FF}\\u{1F7DA}-\\u{1F7FF}\\u{1F80C}-\\u{1F80F}\\u{1F848}-\\u{1F84F}\\u{1F85A}-\\u{1F85F}\\u{1F888}-\\u{1F88F}\\u{1F8AE}-\\u{1F8AF}\\u{1F8BC}-\\u{1F8BF}\\u{1F8C2}-\\u{1F8CF}\\u{1F8D9}-\\u{1F8FF}\\u{1F90C}-\\u{1F93A}\\u{1F93C}-\\u{1F945}\\u{1F947}-\\u{1F9FF}\\u{1FA58}-\\u{1FA5F}\\u{1FA6E}-\\u{1FAFF}\\u{1FC00}-\\u{1FFFD}\\u{1F1E6}-\\u{1F1FF}\\uFE0F\\u20E3]",
        "u"
      ),
      l3 = null,
      l4 = new Map();
    function l5() {
      if (null !== l$) return l$;
      if ("u" > typeof OffscreenCanvas) return (l$ = new OffscreenCanvas(1, 1).getContext("2d"));
      if ("u" > typeof document) return (l$ = document.createElement("canvas").getContext("2d"));
      throw Error("Text measurement requires OffscreenCanvas or a DOM canvas context.");
    }
    function l7(e, t) {
      let n = t.get(e);
      return (
        void 0 === n &&
          ((n = { width: l5().measureText(e).width, containsCJK: lb(e) }), t.set(e, n)),
        n
      );
    }
    function l9() {
      if (null !== l1) return l1;
      if ("u" < typeof navigator)
        return (l1 = {
          lineFitEpsilon: 0.005,
          carryCJKAfterClosingQuote: !1,
          breakKeepAllAfterPunctuation: !0,
          preferPrefixWidthsForBreakableRuns: !1,
          preferEarlySoftHyphenBreak: !1
        });
      let e = navigator.userAgent,
        t =
          "Apple Computer, Inc." === navigator.vendor &&
          e.includes("Safari/") &&
          !e.includes("Chrome/") &&
          !e.includes("Chromium/") &&
          !e.includes("CriOS/") &&
          !e.includes("FxiOS/") &&
          !e.includes("EdgiOS/");
      return (l1 = {
        lineFitEpsilon: t ? 1 / 64 : 0.005,
        carryCJKAfterClosingQuote:
          e.includes("Chrome/") ||
          e.includes("Chromium/") ||
          e.includes("CriOS/") ||
          e.includes("Edg/"),
        breakKeepAllAfterPunctuation: !t,
        preferPrefixWidthsForBreakableRuns: t,
        preferEarlySoftHyphenBreak: t
      });
    }
    function l8() {
      return (null === l3 && (l3 = new Intl.Segmenter(void 0, { granularity: "grapheme" })), l3);
    }
    function ae(e, t, n) {
      return 0 === n
        ? t.width
        : t.width -
            (void 0 === t.emojiCount &&
              (t.emojiCount = (function (e) {
                let t = 0;
                for (let l of l8().segment(e)) {
                  var n;
                  ((n = l.segment), (l2.test(n) || n.includes("️")) && t++);
                }
                return t;
              })(e)),
            t.emojiCount * n);
    }
    function at(e) {
      return (
        "space" === e ||
        "preserved-space" === e ||
        "tab" === e ||
        "zero-width-break" === e ||
        "soft-hyphen" === e
      );
    }
    function an(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.widths.length;
      for (; t < n;) {
        var l;
        if ("space" !== (l = e.kinds[t]) && "zero-width-break" !== l && "soft-hyphen" !== l) break;
        t++;
      }
      return t;
    }
    function al(e, t) {
      return 0 === t ? 0 : e + t;
    }
    function aa(e, t, n, l) {
      return al(l, "tab" === t ? 0 : e.lineEndFitAdvances[n]);
    }
    function ao(e, t, n, l, a) {
      return al(l, "tab" === t ? a : e.lineEndPaintAdvances[n]);
    }
    function ai(e, t, n) {
      let l = t;
      for (; l < e.length && e[l] < n;) l++;
      return l;
    }
    let ar = null;
    function au() {
      return (null === ar && (ar = new Intl.Segmenter(void 0, { granularity: "grapheme" })), ar);
    }
    function as(e, t) {
      if ("zero-width-break" === t || "soft-hyphen" === t || "hard-break" === t) return 0;
      if ("tab" === t) return 1;
      let n = 0;
      for (let t of au().segment(e)) n++;
      return n;
    }
    let ad = new Map(),
      ac = (e, t) => {
        var n;
        return null !=
          (n = t
            ? ((e, t) => {
                if (!(
                  "function" == typeof Intl.Segmenter &&
                  ("u" > typeof OffscreenCanvas || "u" > typeof CanvasRenderingContext2D)
                ))
                  return;
                let n = "".concat(t.font, "\0").concat(t.letterSpacing, "\0").concat(e),
                  l = ad.get(n);
                if (void 0 !== l) return l;
                try {
                  var o, i, r, u, s;
                  let l,
                    d,
                    c,
                    m =
                      ((r = t.font),
                      (d =
                        null != (o = (u = { letterSpacing: t.letterSpacing }).wordBreak)
                          ? o
                          : "normal"),
                      (c = null != (i = null == u ? void 0 : u.letterSpacing) ? i : 0),
                      (s = (function (e, t, n, l) {
                        var a, o;
                        let i,
                          r,
                          u,
                          s,
                          d,
                          c = l9(),
                          { cache: m, emojiCorrection: g } =
                            ((a = e.normalized),
                            (o = l6.test(a)),
                            (l5().font = t),
                            (i = l0.get(t)) || ((i = new Map()), l0.set(t, i)),
                            (u = i),
                            (s = (r = t.match(/(\d+(?:\.\d+)?)\s*px/)) ? parseFloat(r[1]) : 16),
                            (d = o
                              ? (function (e, t) {
                                  let n = l4.get(e);
                                  if (void 0 !== n) return n;
                                  let l = l5();
                                  l.font = e;
                                  let a = l.measureText("😀").width;
                                  if (
                                    ((n = 0),
                                    a > t + 0.5 && "u" > typeof document && null !== document.body)
                                  ) {
                                    let t = document.createElement("span");
                                    ((t.style.font = e),
                                      (t.style.display = "inline-block"),
                                      (t.style.visibility = "hidden"),
                                      (t.style.position = "absolute"),
                                      (t.textContent = "😀"),
                                      document.body.appendChild(t));
                                    let l = t.getBoundingClientRect().width;
                                    (document.body.removeChild(t), a - l > 0.5 && (n = a - l));
                                  }
                                  return (l4.set(e, n), n);
                                })(t, s)
                              : 0),
                            { cache: u, fontSize: s, emojiCorrection: d }),
                          h = ae("-", l7("-", m), g) + (0 === l ? 0 : 2 * l),
                          f = 8 * ae(" ", l7(" ", m), g),
                          p = 0 !== l;
                        if (0 === e.len)
                          return {
                            widths: [],
                            lineEndFitAdvances: [],
                            lineEndPaintAdvances: [],
                            kinds: [],
                            simpleLineWalkFastPath: !0,
                            segLevels: null,
                            breakableFitAdvances: [],
                            breakablePreferredBreaks: [],
                            letterSpacing: 0,
                            spacingGraphemeCounts: [],
                            discretionaryHyphenWidth: 0,
                            tabStopAdvance: 0,
                            chunks: [],
                            segments: []
                          };
                        let v = [],
                          F = [],
                          C = [],
                          S = [],
                          E = e.chunks.length <= 1 && !p,
                          b = [],
                          A = [],
                          y = [],
                          x = [],
                          M = [],
                          N = Array.from({ length: e.len });
                        function w(e, t, n, l, a, o, i, r, u) {
                          ("text" !== a && "space" !== a && "zero-width-break" !== a && (E = !1),
                            v.push(t),
                            F.push(n),
                            C.push(l),
                            S.push(a),
                            null == b || b.push(o),
                            A.push(i),
                            y.push(r),
                            p && x.push(u),
                            null !== M && M.push(e));
                        }
                        function D(e, t, a, o, i) {
                          var r;
                          let u = l7(e, m),
                            s = p ? as(e, t) : 0,
                            d = ((r = ae(e, u, g)), s > 1 ? r + (s - 1) * l : r),
                            h =
                              "space" === t || "preserved-space" === t || "zero-width-break" === t
                                ? 0
                                : d,
                            f = 0 === h ? 0 : h + (s > 0 ? l : 0),
                            v = "space" === t || "zero-width-break" === t ? 0 : d;
                          if (i && o && e.length > 1) {
                            let o = "sum-graphemes";
                            0 !== l
                              ? (o = "segment-prefixes")
                              : lJ(e)
                                ? (o = "pair-context")
                                : c.preferPrefixWidthsForBreakableRuns && (o = "segment-prefixes");
                            let i = (function (e, t, n, l, a) {
                                if (void 0 !== t.breakableFitAdvances && t.breakableFitMode === a)
                                  return t.breakableFitAdvances;
                                t.breakableFitMode = a;
                                let o = l8(),
                                  i = [];
                                for (let t of o.segment(e)) i.push(t.segment);
                                if (i.length <= 1)
                                  return ((t.breakableFitAdvances = null), t.breakableFitAdvances);
                                if ("sum-graphemes" === a) {
                                  let e = [];
                                  for (let t of i) {
                                    let a = l7(t, n);
                                    e.push(ae(t, a, l));
                                  }
                                  return ((t.breakableFitAdvances = e), t.breakableFitAdvances);
                                }
                                if ("pair-context" === a || i.length > 96) {
                                  let e = [],
                                    a = null,
                                    o = 0;
                                  for (let t of i) {
                                    let i = l7(t, n),
                                      r = ae(t, i, l);
                                    if (null === a) e.push(r);
                                    else {
                                      let i = a + t,
                                        r = l7(i, n);
                                      e.push(ae(i, r, l) - o);
                                    }
                                    ((a = t), (o = r));
                                  }
                                  return ((t.breakableFitAdvances = e), t.breakableFitAdvances);
                                }
                                let r = [],
                                  u = "",
                                  s = 0;
                                for (let e of i) {
                                  let t = l7((u += e), n),
                                    a = ae(u, t, l);
                                  (r.push(a - s), (s = a));
                                }
                                return ((t.breakableFitAdvances = r), t.breakableFitAdvances);
                              })(e, u, m, g, o),
                              r =
                                null === i || "keep-all" === n
                                  ? null
                                  : (function (e) {
                                      if (!/[-\u058A\u2010\u2012\u2013\u2014]/u.test(e))
                                        return null;
                                      let t = [],
                                        n = 0;
                                      for (let a of au().segment(e)) {
                                        var l;
                                        (n++,
                                          ("-" === (l = a.segment) ||
                                            "֊" === l ||
                                            "‐" === l ||
                                            "‒" === l ||
                                            "–" === l ||
                                            "—" === l) &&
                                            t.push(n));
                                      }
                                      return 0 === t.length ? null : t;
                                    })(e);
                            w(e, d, f, v, t, a, i, r, s);
                            return;
                          }
                          w(e, d, f, v, t, a, null, null, s);
                        }
                        for (let t = 0; t < e.len; t++) {
                          N[t] = v.length;
                          let l = e.texts[t],
                            a = e.isWordLike[t],
                            o = e.kinds[t],
                            i = e.starts[t];
                          if ("soft-hyphen" === o) {
                            w(l, 0, h, h, o, i, null, null, 0);
                            continue;
                          }
                          if ("hard-break" === o) {
                            w(l, 0, 0, 0, o, i, null, null, 0);
                            continue;
                          }
                          if ("tab" === o) {
                            w(l, 0, 0, 0, o, i, null, null, p ? as(l, o) : 0);
                            continue;
                          }
                          let r = l7(l, m);
                          if ("text" === o && r.containsCJK) {
                            let e = (function (e, t) {
                                let n = [],
                                  l = [],
                                  a = 0,
                                  o = !1,
                                  i = !1,
                                  r = !1;
                                function u() {
                                  0 !== l.length &&
                                    (n.push({ text: 1 === l.length ? l[0] : l.join(""), start: a }),
                                    (l = []),
                                    (o = !1),
                                    (i = !1),
                                    (r = !1));
                                }
                                function s(e, t, n) {
                                  ((l = [e]), (a = t), (o = n), (i = lV(e)), (r = lN.has(e)));
                                }
                                for (let n of au().segment(e)) {
                                  let e = n.segment,
                                    a = lb(e);
                                  if (0 === l.length) {
                                    s(e, n.index, a);
                                    continue;
                                  }
                                  if (
                                    r ||
                                    lM.has(e) ||
                                    lD.has(e) ||
                                    (t.carryCJKAfterClosingQuote && a && i) ||
                                    (!o && !a)
                                  ) {
                                    !(function (e, t) {
                                      (l.push(e), (o = o || t));
                                      let n = lV(e);
                                      ((i = (1 === e.length && lD.has(e) && i) || n), (r = !1));
                                    })(e, a);
                                    continue;
                                  }
                                  (u(), s(e, n.index, a));
                                }
                                return (u(), n);
                              })(l, c),
                              t =
                                "keep-all" === n
                                  ? (function (e, t, n) {
                                      if (t.length <= 1) return t;
                                      let l = [],
                                        a = -1,
                                        o = !1;
                                      function i(n) {
                                        if (!(a < 0)) {
                                          if (o)
                                            if (a + 1 === n) l.push(t[a]);
                                            else {
                                              let o, i;
                                              ((o = t[a].start),
                                                (i = n < t.length ? t[n].start : e.length),
                                                l.push({ text: e.slice(o, i), start: o }));
                                            }
                                          else for (let e = a; e < n; e++) l.push(t[e]);
                                          ((a = -1), (o = !1));
                                        }
                                      }
                                      for (let e = 0; e < t.length; e++) {
                                        let l = t[e];
                                        (a >= 0 && !lx(t[e - 1].text, n) && i(e),
                                          a < 0 && (a = e),
                                          (o = o || lb(l.text)));
                                      }
                                      return (i(t.length), l);
                                    })(l, e, c.breakKeepAllAfterPunctuation)
                                  : e;
                            for (let e = 0; e < t.length; e++) {
                              let l = t[e];
                              D(l.text, "text", i + l.start, a, "keep-all" === n || !lb(l.text));
                            }
                            continue;
                          }
                          D(l, o, i, a, !0);
                        }
                        let B = (function (e, t, n) {
                            let l = [];
                            for (let a = 0; a < e.length; a++) {
                              let o = e[a],
                                i = o.startSegmentIndex < t.length ? t[o.startSegmentIndex] : n,
                                r = o.endSegmentIndex < t.length ? t[o.endSegmentIndex] : n,
                                u =
                                  o.consumedEndSegmentIndex < t.length
                                    ? t[o.consumedEndSegmentIndex]
                                    : n;
                              l.push({
                                startSegmentIndex: i,
                                endSegmentIndex: r,
                                consumedEndSegmentIndex: u
                              });
                            }
                            return l;
                          })(e.chunks, N, v.length),
                          L =
                            null === b
                              ? null
                              : (function (e, t) {
                                  let n = (function (e) {
                                    let t = e.length;
                                    if (0 === t) return null;
                                    let n = Array(t),
                                      l = !1;
                                    for (let a = 0; a < t;) {
                                      let o = e.charCodeAt(a),
                                        i = o,
                                        r = 1;
                                      if (o >= 55296 && o <= 56319 && a + 1 < t) {
                                        let t = e.charCodeAt(a + 1);
                                        t >= 56320 &&
                                          t <= 57343 &&
                                          ((i = ((o - 55296) << 10) + (t - 56320) + 65536),
                                          (r = 2));
                                      }
                                      let u = (function (e) {
                                        if (e <= 255) return lg[e];
                                        let t = 0,
                                          n = lh.length - 1;
                                        for (; t <= n;) {
                                          let l = (t + n) >> 1,
                                            a = lh[l];
                                          if (e < a[0]) {
                                            n = l - 1;
                                            continue;
                                          }
                                          if (e > a[1]) {
                                            t = l + 1;
                                            continue;
                                          }
                                          return a[2];
                                        }
                                        return "L";
                                      })(i);
                                      ("R" === u || "AL" === u || "AN" === u) && (l = !0);
                                      for (let e = 0; e < r; e++) n[a + e] = u;
                                      a += r;
                                    }
                                    if (!l) return null;
                                    let a = 0;
                                    for (let e = 0; e < t; e++) {
                                      let t = n[e];
                                      if ("L" === t) {
                                        a = 0;
                                        break;
                                      }
                                      if ("R" === t || "AL" === t) {
                                        a = 1;
                                        break;
                                      }
                                    }
                                    let o = new Int8Array(t);
                                    for (let e = 0; e < t; e++) o[e] = a;
                                    let i = 1 & a ? "R" : "L",
                                      r = i;
                                    for (let e = 0; e < t; e++)
                                      "NSM" === n[e] ? (n[e] = r) : (r = n[e]);
                                    r = i;
                                    for (let e = 0; e < t; e++) {
                                      let t = n[e];
                                      "EN" === t
                                        ? (n[e] = "AL" === r ? "AN" : "EN")
                                        : ("R" === t || "L" === t || "AL" === t) && (r = t);
                                    }
                                    for (let e = 0; e < t; e++) "AL" === n[e] && (n[e] = "R");
                                    for (let e = 1; e < t - 1; e++)
                                      ("ES" === n[e] &&
                                        "EN" === n[e - 1] &&
                                        "EN" === n[e + 1] &&
                                        (n[e] = "EN"),
                                        "CS" === n[e] &&
                                          ("EN" === n[e - 1] || "AN" === n[e - 1]) &&
                                          n[e + 1] === n[e - 1] &&
                                          (n[e] = n[e - 1]));
                                    for (let e = 0; e < t; e++) {
                                      let l;
                                      if ("EN" === n[e]) {
                                        for (l = e - 1; l >= 0 && "ET" === n[l]; l--) n[l] = "EN";
                                        for (l = e + 1; l < t && "ET" === n[l]; l++) n[l] = "EN";
                                      }
                                    }
                                    for (let e = 0; e < t; e++) {
                                      let t = n[e];
                                      ("WS" === t || "ES" === t || "ET" === t || "CS" === t) &&
                                        (n[e] = "ON");
                                    }
                                    r = i;
                                    for (let e = 0; e < t; e++) {
                                      let t = n[e];
                                      "EN" === t
                                        ? (n[e] = "L" === r ? "L" : "EN")
                                        : ("R" === t || "L" === t) && (r = t);
                                    }
                                    for (let e = 0; e < t; e++) {
                                      if ("ON" !== n[e]) continue;
                                      let l = e + 1;
                                      for (; l < t && "ON" === n[l];) l++;
                                      let a = e > 0 ? n[e - 1] : i,
                                        o = l < t ? n[l] : i,
                                        r = "L" !== a ? "R" : "L";
                                      if (r === ("L" !== o ? "R" : "L"))
                                        for (let t = e; t < l; t++) n[t] = r;
                                      e = l - 1;
                                    }
                                    for (let e = 0; e < t; e++) "ON" === n[e] && (n[e] = i);
                                    for (let e = 0; e < t; e++) {
                                      let t = n[e];
                                      (1 & o[e]) == 0
                                        ? "R" === t
                                          ? o[e]++
                                          : ("AN" === t || "EN" === t) && (o[e] += 2)
                                        : ("L" === t || "AN" === t || "EN" === t) && o[e]++;
                                    }
                                    return o;
                                  })(e);
                                  if (null === n) return null;
                                  let l = new Int8Array(t.length);
                                  for (let e = 0; e < t.length; e++) l[e] = n[t[e]];
                                  return l;
                                })(e.normalized, b);
                        return null !== M
                          ? {
                              widths: v,
                              lineEndFitAdvances: F,
                              lineEndPaintAdvances: C,
                              kinds: S,
                              simpleLineWalkFastPath: E,
                              segLevels: L,
                              breakableFitAdvances: A,
                              breakablePreferredBreaks: y,
                              letterSpacing: l,
                              spacingGraphemeCounts: x,
                              discretionaryHyphenWidth: h,
                              tabStopAdvance: f,
                              chunks: B,
                              segments: M
                            }
                          : {
                              widths: v,
                              lineEndFitAdvances: F,
                              lineEndPaintAdvances: C,
                              kinds: S,
                              simpleLineWalkFastPath: E,
                              segLevels: L,
                              breakableFitAdvances: A,
                              breakablePreferredBreaks: y,
                              letterSpacing: l,
                              spacingGraphemeCounts: x,
                              discretionaryHyphenWidth: h,
                              tabStopAdvance: f,
                              chunks: B
                            };
                      })(
                        (function (e, t) {
                          let n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : "normal",
                            l =
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : "normal",
                            o,
                            i =
                              ((o = null != n ? n : "normal"),
                              "pre-wrap" === o
                                ? { mode: o, preserveOrdinarySpaces: !0, preserveHardBreaks: !0 }
                                : { mode: o, preserveOrdinarySpaces: !1, preserveHardBreaks: !1 }),
                            r =
                              "pre-wrap" === i.mode
                                ? /[\r\f]/.test(e)
                                  ? e.replace(/\r\n/g, "\n").replace(/[\r\f]/g, "\n")
                                  : e
                                : (function (e) {
                                    if (!lp.test(e)) return e;
                                    let t = e.replace(lf, " ");
                                    return (
                                      32 === t.charCodeAt(0) && (t = t.slice(1)),
                                      t.length > 0 &&
                                        32 === t.charCodeAt(t.length - 1) &&
                                        (t = t.slice(0, -1)),
                                      t
                                    );
                                  })(e);
                          if (0 === r.length)
                            return {
                              normalized: r,
                              chunks: [],
                              len: 0,
                              texts: [],
                              isWordLike: [],
                              kinds: [],
                              starts: []
                            };
                          let u = (function (e, t, n) {
                              var l, o, i, r, u, s, d;
                              let c =
                                  (null === lv &&
                                    (lv = new Intl.Segmenter(a, { granularity: "word" })),
                                  lv),
                                m = 0,
                                g = [],
                                h = [],
                                f = [],
                                p = [],
                                v = [],
                                F = [],
                                C = [],
                                S = [],
                                E = [],
                                b = [],
                                A = [],
                                y = [];
                              for (let a of c.segment(e))
                                for (let e of (function (e, t, n, l) {
                                  if (!lH.test(e))
                                    return [{ text: e, isWordLike: t, kind: "text", start: n }];
                                  let a = [],
                                    o = null,
                                    i = [],
                                    r = n,
                                    u = !1,
                                    s = 0;
                                  for (let d of e) {
                                    let e = (function (e, t) {
                                        if (t.preserveOrdinarySpaces || t.preserveHardBreaks) {
                                          if (" " === e) return "preserved-space";
                                          if ("	" === e) return "tab";
                                          if (t.preserveHardBreaks && "\n" === e)
                                            return "hard-break";
                                        }
                                        return " " === e
                                          ? "space"
                                          : " " === e || " " === e || "⁠" === e || "\uFEFF" === e
                                            ? "glue"
                                            : "​" === e
                                              ? "zero-width-break"
                                              : "­" === e
                                                ? "soft-hyphen"
                                                : "text";
                                      })(d, l),
                                      c = "text" === e && t;
                                    if (null !== o && e === o && c === u) {
                                      (i.push(d), (s += d.length));
                                      continue;
                                    }
                                    (null !== o &&
                                      a.push({ text: l_(i), isWordLike: u, kind: o, start: r }),
                                      (o = e),
                                      (i = [d]),
                                      (r = n + s),
                                      (u = c),
                                      (s += d.length));
                                  }
                                  return (
                                    null !== o &&
                                      a.push({ text: l_(i), isWordLike: u, kind: o, start: r }),
                                    a
                                  );
                                })(a.segment, null != (l = a.isWordLike) && l, a.index, n)) {
                                  let n = "text" === e.kind,
                                    l =
                                      ((o = e.text),
                                      (i = e.isWordLike),
                                      "text" !== e.kind ||
                                      i ||
                                      1 !== o.length ||
                                      "-" === o ||
                                      "—" === o
                                        ? null
                                        : o),
                                    a = lb(e.text),
                                    u = ((r = e.text), lF.test(r)),
                                    d = lI(e.text),
                                    c = lV(e.text),
                                    M = (function (e) {
                                      let t = lI(e);
                                      return null !== t && lL.has(t);
                                    })(e.text),
                                    N = m - 1;
                                  function x() {
                                    (null !== F[N] && ((h[N] = [lz(g, F, C, N)]), (F[N] = null)),
                                      h[N].push(e.text),
                                      (f[N] = f[N] || e.isWordLike),
                                      (S[N] = S[N] || a),
                                      (E[N] = E[N] || u),
                                      (b[N] = c),
                                      (A[N] = M),
                                      (y[N] = lW(E[N], d)));
                                  }
                                  (t.carryCJKAfterClosingQuote &&
                                    n &&
                                    m > 0 &&
                                    "text" === p[N] &&
                                    a &&
                                    S[N] &&
                                    b[N]) ||
                                  (n &&
                                    m > 0 &&
                                    "text" === p[N] &&
                                    (function (e) {
                                      for (let t of e) if (!lM.has(t) && !lD.has(t)) return !1;
                                      return e.length > 0;
                                    })(e.text) &&
                                    S[N]) ||
                                  (n && m > 0 && "text" === p[N] && A[N])
                                    ? x()
                                    : n && m > 0 && "text" === p[N] && e.isWordLike && u && y[N]
                                      ? (x(), (f[N] = !0))
                                      : null !== l && m > 0 && "text" === p[N] && F[N] === l
                                        ? (C[N] = (null != (s = C[N]) ? s : 1) + 1)
                                        : n &&
                                            !e.isWordLike &&
                                            m > 0 &&
                                            "text" === p[N] &&
                                            !S[N] &&
                                            ((function (e) {
                                              if (lO(e)) return !0;
                                              let t = !1;
                                              for (let n of e) {
                                                if (lD.has(n) || lP(n)) {
                                                  t = !0;
                                                  continue;
                                                }
                                                if (!(t && lC.test(n))) return !1;
                                              }
                                              return t;
                                            })(e.text) ||
                                              ("-" === e.text && f[N]))
                                          ? x()
                                          : ((g[m] = e.text),
                                            (h[m] = [e.text]),
                                            (f[m] = e.isWordLike),
                                            (p[m] = e.kind),
                                            (v[m] = e.start),
                                            (F[m] = l),
                                            (C[m] = +(null !== l)),
                                            (S[m] = a),
                                            (E[m] = u),
                                            (b[m] = c),
                                            (A[m] = M),
                                            (y[m] = lW(u, d)),
                                            m++);
                                }
                              for (let e = 0; e < m; e++) {
                                if (null !== F[e]) {
                                  g[e] = lz(g, F, C, e);
                                  continue;
                                }
                                g[e] = l_(h[e]);
                              }
                              for (let e = 1; e < m; e++)
                                "text" === p[e] &&
                                  !f[e] &&
                                  lO(g[e]) &&
                                  "text" === p[e - 1] &&
                                  !S[e - 1] &&
                                  ((g[e - 1] += g[e]), (f[e - 1] = f[e - 1] || f[e]), (g[e] = ""));
                              let M = Array.from({ length: m }, () => null),
                                N = -1;
                              for (let e = m - 1; e >= 0; e--) {
                                let t = g[e];
                                if (0 !== t.length) {
                                  if (
                                    "text" === p[e] &&
                                    !f[e] &&
                                    N >= 0 &&
                                    "text" === p[N] &&
                                    ((function (e) {
                                      if (lO(e)) return !0;
                                      for (let t of e)
                                        if (!lN.has(t) && !lw.has(t) && !lC.test(t) && !lP(t))
                                          return !1;
                                      return e.length > 0;
                                    })(t) ||
                                      ("-" === t &&
                                        (function (e) {
                                          let t = (function (e) {
                                            for (let t of e) if (!lC.test(t)) return t;
                                            return null;
                                          })(e);
                                          return null !== t && lS.test(t);
                                        })(g[N])))
                                  ) {
                                    let n = null != (d = M[N]) ? d : [];
                                    (n.push(t), (M[N] = n), (v[N] = v[e]), (g[e] = ""));
                                    continue;
                                  }
                                  N = e;
                                }
                              }
                              for (let e = 0; e < m; e++) {
                                let t = M[e];
                                null != t &&
                                  (g[e] = (function (e, t) {
                                    let n = [];
                                    for (let t = e.length - 1; t >= 0; t--) n.push(e[t]);
                                    return (n.push(t), l_(n));
                                  })(t, g[e]));
                              }
                              let w = 0;
                              for (let e = 0; e < m; e++) {
                                let t = g[e];
                                0 !== t.length &&
                                  (w !== e &&
                                    ((g[w] = t), (f[w] = f[e]), (p[w] = p[e]), (v[w] = v[e])),
                                  w++);
                              }
                              ((g.length = w), (f.length = w), (p.length = w), (v.length = w));
                              let D = (function (e) {
                                let t = e.texts.slice(),
                                  n = e.isWordLike.slice(),
                                  l = e.kinds.slice(),
                                  a = e.starts.slice();
                                for (let e = 0; e < t.length - 1; e++) {
                                  if (
                                    "text" !== l[e] ||
                                    "text" !== l[e + 1] ||
                                    !lb(t[e]) ||
                                    !lb(t[e + 1])
                                  )
                                    continue;
                                  let n = (function (e) {
                                    let t = Array.from(e),
                                      n = t.length;
                                    for (; n > 0;) {
                                      let e = t[n - 1];
                                      if (lC.test(e) || lN.has(e) || lw.has(e)) {
                                        n--;
                                        continue;
                                      }
                                      break;
                                    }
                                    return n <= 0 || n === t.length
                                      ? null
                                      : { head: t.slice(0, n).join(""), tail: t.slice(n).join("") };
                                  })(t[e]);
                                  null !== n &&
                                    ((t[e] = n.head),
                                    (t[e + 1] = n.tail + t[e + 1]),
                                    (a[e + 1] = a[e] + n.head.length));
                                }
                                return {
                                  len: t.length,
                                  texts: t,
                                  isWordLike: n,
                                  kinds: l,
                                  starts: a
                                };
                              })(
                                (function (e) {
                                  let t = [],
                                    n = [],
                                    l = [],
                                    a = [],
                                    o = 0;
                                  for (; o < e.len;) {
                                    let i = e.texts[o],
                                      r = e.kinds[o],
                                      u = e.isWordLike[o];
                                    if ("text" === r) {
                                      let r = [i],
                                        s = o + 1,
                                        d = u;
                                      for (
                                        ;
                                        s < e.len &&
                                        "text" === e.kinds[s] &&
                                        (function (e, t, n, l) {
                                          let a,
                                            o = !t && lQ(e),
                                            i = !l && lQ(n),
                                            r =
                                              ((a = (function (e) {
                                                for (let t = e.length; t > 0;) {
                                                  let n = lk(e, t),
                                                    l = e.slice(n, t);
                                                  if (!lC.test(l)) return l;
                                                  t = n;
                                                }
                                                return null;
                                              })(e)),
                                              null !== a && lP(a)),
                                            u =
                                              (t || r) &&
                                              (function (e) {
                                                for (let t = e.length; t > 0;) {
                                                  let n = lk(e, t),
                                                    l = e.slice(n, t);
                                                  if (lC.test(l)) {
                                                    t = n;
                                                    continue;
                                                  }
                                                  return lY(l) || lP(l);
                                                }
                                                return !1;
                                              })(e);
                                          return (
                                            !((!o && !i && !u) || lb(e) || lb(n)) &&
                                            (t || o || r) &&
                                            (l || i)
                                          );
                                        })(
                                          e.texts[s - 1],
                                          e.isWordLike[s - 1],
                                          e.texts[s],
                                          e.isWordLike[s]
                                        );
                                      ) {
                                        let t = e.texts[s];
                                        (r.push(t), (d = d || e.isWordLike[s]), s++);
                                      }
                                      if (s > o + 1) {
                                        (t.push(l_(r)),
                                          n.push(d),
                                          l.push("text"),
                                          a.push(e.starts[o]),
                                          (o = s));
                                        continue;
                                      }
                                    }
                                    (t.push(i), n.push(u), l.push(r), a.push(e.starts[o]), o++);
                                  }
                                  return {
                                    len: t.length,
                                    texts: t,
                                    isWordLike: n,
                                    kinds: l,
                                    starts: a
                                  };
                                })(
                                  (function (e) {
                                    let t = [],
                                      n = [],
                                      l = [],
                                      a = [];
                                    for (let o = 0; o < e.len; o++) {
                                      let i = e.texts[o];
                                      if ("text" === e.kinds[o] && i.includes("-")) {
                                        let r = i.split("-"),
                                          u = r.length > 1;
                                        for (let e = 0; e < r.length; e++) {
                                          let t = r[e];
                                          if (!u) break;
                                          (0 !== t.length && lZ(t) && lJ(t)) || (u = !1);
                                        }
                                        if (u) {
                                          let i = 0;
                                          for (let u = 0; u < r.length; u++) {
                                            let s = r[u],
                                              d = u < r.length - 1 ? "".concat(s, "-") : s;
                                            (t.push(d),
                                              n.push(!0),
                                              l.push("text"),
                                              a.push(e.starts[o] + i),
                                              (i += d.length));
                                          }
                                          continue;
                                        }
                                      }
                                      (t.push(i),
                                        n.push(e.isWordLike[o]),
                                        l.push(e.kinds[o]),
                                        a.push(e.starts[o]));
                                    }
                                    return {
                                      len: t.length,
                                      texts: t,
                                      isWordLike: n,
                                      kinds: l,
                                      starts: a
                                    };
                                  })(
                                    (function (e) {
                                      let t = [],
                                        n = [],
                                        l = [],
                                        a = [];
                                      for (let o = 0; o < e.len; o++) {
                                        let i = e.texts[o],
                                          r = e.kinds[o];
                                        if ("text" === r && lJ(i) && lZ(i)) {
                                          let r = [i],
                                            u = o + 1;
                                          for (
                                            ;
                                            u < e.len && "text" === e.kinds[u] && lJ(e.texts[u]);
                                          )
                                            (r.push(e.texts[u]), u++);
                                          (t.push(l_(r)),
                                            n.push(!0),
                                            l.push("text"),
                                            a.push(e.starts[o]),
                                            (o = u - 1));
                                          continue;
                                        }
                                        (t.push(i),
                                          n.push(e.isWordLike[o]),
                                          l.push(r),
                                          a.push(e.starts[o]));
                                      }
                                      return {
                                        len: t.length,
                                        texts: t,
                                        isWordLike: n,
                                        kinds: l,
                                        starts: a
                                      };
                                    })(
                                      (function (e) {
                                        let t = [],
                                          n = [],
                                          l = [],
                                          a = [];
                                        for (let o = 0; o < e.len; o++) {
                                          let i = e.texts[o];
                                          if (
                                            (t.push(i),
                                            n.push(e.isWordLike[o]),
                                            l.push(e.kinds[o]),
                                            a.push(e.starts[o]),
                                            !(
                                              i.includes("?") &&
                                              (i.includes("://") || i.startsWith("www."))
                                            ))
                                          )
                                            continue;
                                          let r = o + 1;
                                          if (r >= e.len || lG(e.kinds[r])) continue;
                                          let u = [],
                                            s = e.starts[r],
                                            d = r;
                                          for (; d < e.len && !lG(e.kinds[d]);)
                                            (u.push(e.texts[d]), d++);
                                          u.length > 0 &&
                                            (t.push(l_(u)),
                                            n.push(!0),
                                            l.push("text"),
                                            a.push(s),
                                            (o = d - 1));
                                        }
                                        return {
                                          len: t.length,
                                          texts: t,
                                          isWordLike: n,
                                          kinds: l,
                                          starts: a
                                        };
                                      })(
                                        (function (e) {
                                          let t = e.texts.slice(),
                                            n = e.isWordLike.slice(),
                                            l = e.kinds.slice(),
                                            a = e.starts.slice();
                                          for (let a = 0; a < e.len; a++) {
                                            if (
                                              "text" !== l[a] ||
                                              !(function (e, t) {
                                                let n = e.texts[t];
                                                return (
                                                  !!n.startsWith("www.") ||
                                                  (lj.test(n) &&
                                                    t + 1 < e.len &&
                                                    "text" === e.kinds[t + 1] &&
                                                    "//" === e.texts[t + 1])
                                                );
                                              })(e, a)
                                            )
                                              continue;
                                            let o = [t[a]],
                                              i = a + 1;
                                            for (; i < e.len && !lG(l[i]);) {
                                              (o.push(t[i]), (n[a] = !0));
                                              let e = t[i].includes("?");
                                              if (((l[i] = "text"), (t[i] = ""), i++, e)) break;
                                            }
                                            t[a] = l_(o);
                                          }
                                          let o = 0;
                                          for (let e = 0; e < t.length; e++) {
                                            let i = t[e];
                                            0 !== i.length &&
                                              (o !== e &&
                                                ((t[o] = i),
                                                (n[o] = n[e]),
                                                (l[o] = l[e]),
                                                (a[o] = a[e])),
                                              o++);
                                          }
                                          return (
                                            (t.length = o),
                                            (n.length = o),
                                            (l.length = o),
                                            (a.length = o),
                                            { len: o, texts: t, isWordLike: n, kinds: l, starts: a }
                                          );
                                        })(
                                          (function (e) {
                                            let t = [],
                                              n = [],
                                              l = [],
                                              a = [],
                                              o = 0;
                                            for (; o < e.len;) {
                                              let i = [e.texts[o]],
                                                r = e.isWordLike[o],
                                                u = e.kinds[o],
                                                s = e.starts[o];
                                              if ("glue" === u) {
                                                let d = [i[0]],
                                                  c = s;
                                                for (o++; o < e.len && "glue" === e.kinds[o];)
                                                  (d.push(e.texts[o]), o++);
                                                let m = l_(d);
                                                if (o < e.len && "text" === e.kinds[o])
                                                  ((i[0] = m),
                                                    i.push(e.texts[o]),
                                                    (r = e.isWordLike[o]),
                                                    (u = "text"),
                                                    (s = c),
                                                    o++);
                                                else {
                                                  (t.push(m),
                                                    n.push(!1),
                                                    l.push("glue"),
                                                    a.push(c));
                                                  continue;
                                                }
                                              } else o++;
                                              if ("text" === u)
                                                for (; o < e.len && "glue" === e.kinds[o];) {
                                                  let t = [];
                                                  for (; o < e.len && "glue" === e.kinds[o];)
                                                    (t.push(e.texts[o]), o++);
                                                  let n = l_(t);
                                                  if (o < e.len && "text" === e.kinds[o]) {
                                                    (i.push(n, e.texts[o]),
                                                      (r = r || e.isWordLike[o]),
                                                      o++);
                                                    continue;
                                                  }
                                                  i.push(n);
                                                }
                                              (t.push(l_(i)), n.push(r), l.push(u), a.push(s));
                                            }
                                            return {
                                              len: t.length,
                                              texts: t,
                                              isWordLike: n,
                                              kinds: l,
                                              starts: a
                                            };
                                          })({
                                            len: w,
                                            texts: g,
                                            isWordLike: f,
                                            kinds: p,
                                            starts: v
                                          })
                                        )
                                      )
                                    )
                                  )
                                )
                              );
                              for (let e = 0; e < D.len - 1; e++) {
                                let t = (function (e) {
                                  if (e.length < 2 || " " !== e[0]) return null;
                                  let t = e.slice(1);
                                  return RegExp(
                                    "^[\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1-\\u05C2\\u05C4-\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7-\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962-\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7-\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2-\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47-\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70-\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2-\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47-\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62-\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55-\\u0C56\\u0C62-\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5-\\u0CD6\\u0CE2-\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B-\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62-\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2-\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18-\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F3F\\u0F71-\\u0F84\\u0F86-\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752-\\u1753\\u1772-\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180D\\u180F\\u1885-\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ADD\\u1AE0-\\u1AEB\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099-\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E-\\uA69F\\uA6F0-\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880-\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C-\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7-\\uAAB8\\uAABE-\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5-\\uAAF6\\uABE3-\\uABEA\\uABEC-\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\u{101FD}\\u{102E0}\\u{10376}-\\u{1037A}\\u{10A01}-\\u{10A03}\\u{10A05}-\\u{10A06}\\u{10A0C}-\\u{10A0F}\\u{10A38}-\\u{10A3A}\\u{10A3F}\\u{10AE5}-\\u{10AE6}\\u{10D24}-\\u{10D27}\\u{10D69}-\\u{10D6D}\\u{10EAB}-\\u{10EAC}\\u{10EFA}-\\u{10EFF}\\u{10F46}-\\u{10F50}\\u{10F82}-\\u{10F85}\\u{11000}-\\u{11002}\\u{11038}-\\u{11046}\\u{11070}\\u{11073}-\\u{11074}\\u{1107F}-\\u{11082}\\u{110B0}-\\u{110BA}\\u{110C2}\\u{11100}-\\u{11102}\\u{11127}-\\u{11134}\\u{11145}-\\u{11146}\\u{11173}\\u{11180}-\\u{11182}\\u{111B3}-\\u{111C0}\\u{111C9}-\\u{111CC}\\u{111CE}-\\u{111CF}\\u{1122C}-\\u{11237}\\u{1123E}\\u{11241}\\u{112DF}-\\u{112EA}\\u{11300}-\\u{11303}\\u{1133B}-\\u{1133C}\\u{1133E}-\\u{11344}\\u{11347}-\\u{11348}\\u{1134B}-\\u{1134D}\\u{11357}\\u{11362}-\\u{11363}\\u{11366}-\\u{1136C}\\u{11370}-\\u{11374}\\u{113B8}-\\u{113C0}\\u{113C2}\\u{113C5}\\u{113C7}-\\u{113CA}\\u{113CC}-\\u{113D0}\\u{113D2}\\u{113E1}-\\u{113E2}\\u{11435}-\\u{11446}\\u{1145E}\\u{114B0}-\\u{114C3}\\u{115AF}-\\u{115B5}\\u{115B8}-\\u{115C0}\\u{115DC}-\\u{115DD}\\u{11630}-\\u{11640}\\u{116AB}-\\u{116B7}\\u{1171D}-\\u{1172B}\\u{1182C}-\\u{1183A}\\u{11930}-\\u{11935}\\u{11937}-\\u{11938}\\u{1193B}-\\u{1193E}\\u{11940}\\u{11942}-\\u{11943}\\u{119D1}-\\u{119D7}\\u{119DA}-\\u{119E0}\\u{119E4}\\u{11A01}-\\u{11A0A}\\u{11A33}-\\u{11A39}\\u{11A3B}-\\u{11A3E}\\u{11A47}\\u{11A51}-\\u{11A5B}\\u{11A8A}-\\u{11A99}\\u{11B60}-\\u{11B67}\\u{11C2F}-\\u{11C36}\\u{11C38}-\\u{11C3F}\\u{11C92}-\\u{11CA7}\\u{11CA9}-\\u{11CB6}\\u{11D31}-\\u{11D36}\\u{11D3A}\\u{11D3C}-\\u{11D3D}\\u{11D3F}-\\u{11D45}\\u{11D47}\\u{11D8A}-\\u{11D8E}\\u{11D90}-\\u{11D91}\\u{11D93}-\\u{11D97}\\u{11EF3}-\\u{11EF6}\\u{11F00}-\\u{11F01}\\u{11F03}\\u{11F34}-\\u{11F3A}\\u{11F3E}-\\u{11F42}\\u{11F5A}\\u{13440}\\u{13447}-\\u{13455}\\u{1611E}-\\u{1612F}\\u{16AF0}-\\u{16AF4}\\u{16B30}-\\u{16B36}\\u{16F4F}\\u{16F51}-\\u{16F87}\\u{16F8F}-\\u{16F92}\\u{16FE4}\\u{16FF0}-\\u{16FF1}\\u{1BC9D}-\\u{1BC9E}\\u{1CF00}-\\u{1CF2D}\\u{1CF30}-\\u{1CF46}\\u{1D165}-\\u{1D169}\\u{1D16D}-\\u{1D172}\\u{1D17B}-\\u{1D182}\\u{1D185}-\\u{1D18B}\\u{1D1AA}-\\u{1D1AD}\\u{1D242}-\\u{1D244}\\u{1DA00}-\\u{1DA36}\\u{1DA3B}-\\u{1DA6C}\\u{1DA75}\\u{1DA84}\\u{1DA9B}-\\u{1DA9F}\\u{1DAA1}-\\u{1DAAF}\\u{1E000}-\\u{1E006}\\u{1E008}-\\u{1E018}\\u{1E01B}-\\u{1E021}\\u{1E023}-\\u{1E024}\\u{1E026}-\\u{1E02A}\\u{1E08F}\\u{1E130}-\\u{1E136}\\u{1E2AE}\\u{1E2EC}-\\u{1E2EF}\\u{1E4EC}-\\u{1E4EF}\\u{1E5EE}-\\u{1E5EF}\\u{1E6E3}\\u{1E6E6}\\u{1E6EE}-\\u{1E6EF}\\u{1E6F5}\\u{1E8D0}-\\u{1E8D6}\\u{1E944}-\\u{1E94A}\\u{E0100}-\\u{E01EF}]+$",
                                    "u"
                                  ).test(t)
                                    ? { space: " ", marks: t }
                                    : null;
                                })(D.texts[e]);
                                null !== t &&
                                  ("space" === D.kinds[e] || "preserved-space" === D.kinds[e]) &&
                                  "text" === D.kinds[e + 1] &&
                                  ((u = D.texts[e + 1]), lF.test(u)) &&
                                  ((D.texts[e] = t.space),
                                  (D.isWordLike[e] = !1),
                                  (D.kinds[e] =
                                    "preserved-space" === D.kinds[e] ? "preserved-space" : "space"),
                                  (D.texts[e + 1] = t.marks + D.texts[e + 1]),
                                  (D.starts[e + 1] = D.starts[e] + t.space.length));
                              }
                              return D;
                            })(r, t, i),
                            s =
                              "keep-all" === l
                                ? (function (e, t, n) {
                                    if (t.len <= 1) return t;
                                    let l = [],
                                      a = [],
                                      o = [],
                                      i = [],
                                      r = -1,
                                      u = !1;
                                    function s(e) {
                                      (l.push(t.texts[e]),
                                        a.push(t.isWordLike[e]),
                                        o.push("text"),
                                        i.push(t.starts[e]));
                                    }
                                    function d(n) {
                                      if (!(r < 0)) {
                                        if (u)
                                          if (r + 1 === n) s(r);
                                          else {
                                            var d = r;
                                            let u = !1;
                                            for (let e = d; e < n; e++) u = u || t.isWordLike[e];
                                            let s = t.starts[d],
                                              c = n < t.len ? t.starts[n] : e.length;
                                            (l.push(e.slice(s, c)),
                                              a.push(u),
                                              o.push("text"),
                                              i.push(s));
                                          }
                                        else for (let e = r; e < n; e++) s(e);
                                        ((r = -1), (u = !1));
                                      }
                                    }
                                    for (let e = 0; e < t.len; e++) {
                                      let s = t.texts[e],
                                        c = t.kinds[e];
                                      if ("text" === c) {
                                        (r >= 0 && !lx(t.texts[e - 1], n) && d(e),
                                          r < 0 && (r = e),
                                          (u = u || lb(s)));
                                        continue;
                                      }
                                      (d(e),
                                        l.push(s),
                                        a.push(t.isWordLike[e]),
                                        o.push(c),
                                        i.push(t.starts[e]));
                                    }
                                    return (
                                      d(t.len),
                                      {
                                        len: l.length,
                                        texts: l,
                                        isWordLike: a,
                                        kinds: o,
                                        starts: i
                                      }
                                    );
                                  })(r, u, t.breakKeepAllAfterPunctuation)
                                : u;
                          return {
                            normalized: r,
                            chunks: (function (e, t) {
                              if (0 === e.len) return [];
                              if (!t.preserveHardBreaks)
                                return [
                                  {
                                    startSegmentIndex: 0,
                                    endSegmentIndex: e.len,
                                    consumedEndSegmentIndex: e.len
                                  }
                                ];
                              let n = [],
                                l = 0;
                              for (let t = 0; t < e.len; t++)
                                "hard-break" === e.kinds[t] &&
                                  (n.push({
                                    startSegmentIndex: l,
                                    endSegmentIndex: t,
                                    consumedEndSegmentIndex: t + 1
                                  }),
                                  (l = t + 1));
                              return (
                                l < e.len &&
                                  n.push({
                                    startSegmentIndex: l,
                                    endSegmentIndex: e.len,
                                    consumedEndSegmentIndex: e.len
                                  }),
                                n
                              );
                            })(s, i),
                            ...s
                          };
                        })(e, l9(), null == u ? void 0 : u.whiteSpace, d),
                        r,
                        d,
                        c
                      )),
                      (l = 0),
                      !(function (e, t) {
                        if (e.simpleLineWalkFastPath)
                          return (function (e, t) {
                            let {
                              widths: n,
                              kinds: l,
                              breakableFitAdvances: a,
                              breakablePreferredBreaks: o
                            } = e;
                            if (0 === n.length) return;
                            let i = 1 / 0 + l9().lineFitEpsilon,
                              r = 0,
                              u = 0,
                              s = !1,
                              d = 0,
                              c = 0,
                              m = 0,
                              g = 0,
                              h = -1,
                              f = 0;
                            function p() {
                              let e =
                                  arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : m,
                                n =
                                  arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : g,
                                l =
                                  arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : u;
                              (r++,
                                null == t || t(l, d, c, e, n),
                                (u = 0),
                                (s = !1),
                                (h = -1),
                                (f = 0));
                            }
                            function v(e, t) {
                              ((s = !0), (d = e), (c = 0), (m = e + 1), (g = 0), (u = t));
                            }
                            function F(e, t, n) {
                              ((s = !0), (d = e), (c = t), (m = e), (g = t + 1), (u = n));
                            }
                            function C(e, t) {
                              s ? ((u += t), (m = e + 1), (g = 0)) : v(e, t);
                            }
                            function S(e, t) {
                              var n;
                              let l = a[e],
                                r = null != (n = o[e]) ? n : null,
                                d = null === r ? -1 : ai(r, 0, t + 1),
                                c = -1,
                                h = 0,
                                f = t;
                              for (; f < l.length;) {
                                let n = l[f];
                                if (s)
                                  if (u + n > i) {
                                    if (null !== r && c > t) {
                                      (p(e, c, h), (d = ai(r, d, (f = c) + 1)), (c = -1), (h = 0));
                                      continue;
                                    }
                                    (p(), F(e, f, n));
                                  } else ((u += n), (m = e), (g = f + 1));
                                else F(e, f, n);
                                let a = f + 1;
                                (null !== r && r[d] === a && ((c = a), (h = u), d++), f++);
                              }
                              s && m === e && g === l.length && ((m = e + 1), (g = 0));
                            }
                            let E = 0;
                            for (; E < n.length && !(!s && (E = an(e, E)) >= n.length);) {
                              let e = n[E],
                                t = at(l[E]);
                              if (!s) {
                                (e > i && null !== a[E] ? S(E, 0) : v(E, e),
                                  t && ((h = E + 1), (f = u - e)),
                                  E++);
                                continue;
                              }
                              if (u + e > i) {
                                if (t) {
                                  (C(E, e), p(E + 1, 0, u - e), E++);
                                  continue;
                                }
                                if (h >= 0) {
                                  if (m > h || (m === h && g > 0)) {
                                    p();
                                    continue;
                                  }
                                  p(h, 0, f);
                                  continue;
                                }
                                if (e > i && null !== a[E]) {
                                  (p(), S(E, 0), E++);
                                  continue;
                                }
                                p();
                                continue;
                              }
                              (C(E, e), t && ((h = E + 1), (f = u - e)), E++);
                            }
                            s && p();
                          })(e, t);
                        let {
                          widths: n,
                          kinds: l,
                          breakableFitAdvances: a,
                          breakablePreferredBreaks: o,
                          discretionaryHyphenWidth: i,
                          chunks: r
                        } = e;
                        if (0 === n.length || 0 === r.length) return;
                        let u = l9(),
                          s = 1 / 0 + u.lineFitEpsilon,
                          d = 0,
                          c = 0,
                          m = !1,
                          g = 0,
                          h = 0,
                          f = 0,
                          p = 0,
                          v = -1,
                          F = 0,
                          C = 0,
                          S = null;
                        function E() {
                          ((v = -1), (F = 0), (C = 0), (S = null));
                        }
                        function b() {
                          let n =
                              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
                            l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p,
                            a = arguments.length > 2 ? arguments[2] : void 0;
                          (d++,
                            void 0 !== t &&
                              t(
                                (null != a
                                  ? a
                                  : "soft-hyphen" === S && v === f && 0 === p
                                    ? C
                                    : c) +
                                  (function (e, t, n, l, a) {
                                    if (0 === e.letterSpacing) return 0;
                                    if (a > 0)
                                      return e.spacingGraphemeCounts[l] > 0 ? e.letterSpacing : 0;
                                    for (let a = l - 1; a >= t; a--) {
                                      let o = e.kinds[a];
                                      if (
                                        "space" !== o &&
                                        "zero-width-break" !== o &&
                                        "hard-break" !== o
                                      ) {
                                        if ("soft-hyphen" === o) {
                                          if (a === l - 1) return 0;
                                          continue;
                                        }
                                        if (a === t && n > 0) return e.letterSpacing;
                                        return e.spacingGraphemeCounts[a] > 0 ? e.letterSpacing : 0;
                                      }
                                    }
                                    return 0;
                                  })(e, g, h, n, l),
                                g,
                                h,
                                n,
                                l
                              ),
                            (c = 0),
                            (m = !1),
                            E());
                        }
                        function A(e, t) {
                          ((m = !0), (g = e), (h = 0), (f = e + 1), (p = 0), (c = t));
                        }
                        function y(e, t, n) {
                          ((m = !0), (g = e), (h = t), (f = e), (p = t + 1), (c = n));
                        }
                        function x(e, t) {
                          m ? ((c += t), (f = e + 1), (p = 0)) : A(e, t);
                        }
                        function M(t, n, l, a, o, i) {
                          if (!n) return;
                          let r = aa(e, t, l, o),
                            u = ao(e, t, l, o, a);
                          ((v = l + 1), (F = c - i + r), (C = c - i + u), (S = t));
                        }
                        function N(t, n) {
                          var l;
                          let i = a[t],
                            r = null != (l = o[t]) ? l : null,
                            u = null === r ? -1 : ai(r, 0, n + 1),
                            d = -1,
                            g = 0,
                            h = n;
                          for (; h < i.length;) {
                            let l = i[h];
                            if (m) {
                              let a = 0 !== e.letterSpacing ? l + e.letterSpacing : l,
                                o = c + a;
                              if ((0 === e.letterSpacing ? o : o + e.letterSpacing) > s) {
                                if (null !== r && d > n) {
                                  (b(t, d, g), (u = ai(r, u, (h = d) + 1)), (d = -1), (g = 0));
                                  continue;
                                }
                                (b(), y(t, h, l));
                              } else ((c = o), (f = t), (p = h + 1));
                            } else y(t, h, l);
                            let a = h + 1;
                            (null !== r && r[u] === a && ((d = a), (g = c), u++), h++);
                          }
                          m && f === t && p === i.length && ((f = t + 1), (p = 0));
                        }
                        for (let o = 0; o < r.length; o++) {
                          var w, D, B;
                          let y = r[o];
                          if (y.startSegmentIndex === y.endSegmentIndex) {
                            (d++,
                              null == t ||
                                t(0, y.startSegmentIndex, 0, y.consumedEndSegmentIndex, 0),
                              E());
                            continue;
                          }
                          ((m = !1),
                            (c = 0),
                            (g = y.startSegmentIndex),
                            (h = 0),
                            (f = y.startSegmentIndex),
                            (p = 0),
                            E());
                          let L = y.startSegmentIndex;
                          for (
                            ;
                            L < y.endSegmentIndex &&
                            !(!m && (L = an(e, L, y.endSegmentIndex)) >= y.endSegmentIndex);
                          ) {
                            let t = l[L],
                              o = at(t),
                              r =
                                ((w = m),
                                (D = L),
                                0 !== e.letterSpacing && w && e.spacingGraphemeCounts[D] > 0
                                  ? e.letterSpacing
                                  : 0),
                              d =
                                "tab" === t
                                  ? (function (e, t) {
                                      if (t <= 0) return 0;
                                      let n = e % t;
                                      return 1e-6 >= Math.abs(n) ? t : t - n;
                                    })(c + r, e.tabStopAdvance)
                                  : n[L],
                              g = r + d,
                              h =
                                ((B = L),
                                al(
                                  r,
                                  "tab" === t
                                    ? d +
                                        (0 !== e.letterSpacing && e.spacingGraphemeCounts[B] > 0
                                          ? e.letterSpacing
                                          : 0)
                                    : e.lineEndFitAdvances[B]
                                ));
                            if ("soft-hyphen" === t) {
                              (m &&
                                ((f = L + 1),
                                (p = 0),
                                (v = L + 1),
                                (F = c + i),
                                (C = c + i),
                                (S = t)),
                                L++);
                              continue;
                            }
                            if (!m) {
                              (h > s && null !== a[L] ? N(L, 0) : A(L, d),
                                M(t, o, L, d, r, g),
                                L++);
                              continue;
                            }
                            if (c + h > s) {
                              let n = c + aa(e, t, L, r),
                                l = c + ao(e, t, L, r, d);
                              if ("soft-hyphen" === S && u.preferEarlySoftHyphenBreak && F <= s) {
                                b(v, 0, C);
                                continue;
                              }
                              if (o && n <= s) {
                                (x(L, g), b(L + 1, 0, l), L++);
                                continue;
                              }
                              if (v >= 0 && F <= s) {
                                if (f > v || (f === v && p > 0)) {
                                  b();
                                  continue;
                                }
                                let e = v;
                                (b(e, 0, C), (L = e));
                                continue;
                              }
                              if (h > s && null !== a[L]) {
                                (b(), N(L, 0), L++);
                                continue;
                              }
                              b();
                              continue;
                            }
                            (x(L, g), M(t, o, L, d, r, g), L++);
                          }
                          if (m) {
                            let e = v === y.consumedEndSegmentIndex ? C : c;
                            b(y.consumedEndSegmentIndex, 0, e);
                          }
                        }
                      })(s, (e) => {
                        e > l && (l = e);
                      }),
                      l);
                  return (ad.size >= 1e3 && ad.clear(), ad.set(n, m), m);
                } catch (e) {
                  return;
                }
              })(e, t)
            : void 0)
          ? n
          : 8 * e.length;
      },
      am = (e) => {
        let { availableWidth: t, columns: n, isSortingEnabled: l, rows: a, textStyles: o } = e,
          i = ((e, t) => {
            let n = e.reduce((e, t) => e + t.preferredWidth, 0);
            if (!t) return e.map((e) => e.preferredWidth);
            if (t >= n) {
              var l;
              let a = e.map((e) => e.preferredWidth),
                o = e.length - 1;
              for (let t = e.length - 1; t >= 0; t -= 1)
                if (null == (l = e[t]) ? void 0 : l.isString) {
                  o = t;
                  break;
                }
              return (o >= 0 && (a[o] += t - n), a);
            }
            let a = Math.max(
                t,
                e.reduce((e, t) => e + t.minimumWidth, 0)
              ),
              o = e.reduce((e, t) => e + (t.isString ? 0 : t.preferredWidth), 0),
              i = e.reduce((e, t) => e + (t.isString ? t.minimumWidth : 0), 0),
              r = a - o;
            return e.map((e) => {
              if (!e.isString) return e.preferredWidth;
              i -= e.minimumWidth;
              let t = Math.min(e.preferredWidth, Math.max(e.minimumWidth, r - i));
              return ((r -= t), t);
            });
          })(
            n.map((e) =>
              ((e, t, n, l) => {
                var a, o;
                let i =
                  ac(
                    "string" == typeof e.cell.header ? e.cell.header : "",
                    null == l ? void 0 : l.header
                  ) +
                  (null != (a = null == l ? void 0 : l.header.horizontalPadding) ? a : 48) +
                  (n && "value" === e.cell.type && !1 !== e.cell.sortable ? 24 : 0);
                if ("display" === e.cell.type) {
                  let e = Math.max(96, Math.ceil(i));
                  return { isString: !1, minimumWidth: e, preferredWidth: e };
                }
                let r = Math.ceil(
                    Math.max(
                      i,
                      t.reduce((t, n) => {
                        var a;
                        let o = n[e.id];
                        return "display" === o.type
                          ? t
                          : Math.max(
                              t,
                              ac(
                                (null != (a = o.displayString) ? a : (e) => String(e))(o.value),
                                null == l ? void 0 : l.cell
                              )
                            );
                      }, 0) + (null != (o = null == l ? void 0 : l.cell.horizontalPadding) ? o : 48)
                    )
                  ),
                  u = "string" == typeof e.cell.value,
                  s = Math.max(128, r);
                return u
                  ? { isString: u, minimumWidth: 128, preferredWidth: Math.min(640, s) }
                  : { isString: u, minimumWidth: s, preferredWidth: s };
              })(e, a, l, o)
            ),
            t
          );
        return {
          gridTemplateColumns:
            0 === i.length ? "minmax(100%, 1fr)" : i.map((e) => "".concat(e, "px")).join(" "),
          tableWidth: i.reduce((e, t) => e + t, 0)
        };
      },
      ag = Symbol("AdaptiveDataTableExpandedRows");
    function ah(e, t) {
      return "function" == typeof e ? e(t) : e;
    }
    function af(e, t) {
      return (n) => {
        t.setState((t) => ({ ...t, [e]: ah(n, t[e]) }));
      };
    }
    function ap(e) {
      return e instanceof Function;
    }
    function av(e, t, n) {
      let l,
        a = [];
      return (o) => {
        let i, r;
        n.key && n.debug && (i = Date.now());
        let u = e(o);
        if (!(u.length !== a.length || u.some((e, t) => a[t] !== e))) return l;
        if (
          ((a = u),
          n.key && n.debug && (r = Date.now()),
          (l = t(...u)),
          null == n || null == n.onChange || n.onChange(l),
          n.key && n.debug && null != n && n.debug())
        ) {
          let e = Math.round((Date.now() - i) * 100) / 100,
            t = Math.round((Date.now() - r) * 100) / 100,
            l = t / 16,
            a = (e, t) => {
              for (e = String(e); e.length < t;) e = " " + e;
              return e;
            };
          console.info(
            "%c⏱ ".concat(a(t, 5), " /").concat(a(e, 5), " ms"),
            "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(".concat(
              Math.max(0, Math.min(120 - 120 * l, 120)),
              "deg 100% 31%);"
            ),
            null == n ? void 0 : n.key
          );
        }
        return l;
      };
    }
    function aF(e, t, n, l) {
      return {
        debug: () => {
          var n;
          return null != (n = null == e ? void 0 : e.debugAll) ? n : e[t];
        },
        key: !1,
        onChange: l
      };
    }
    let aC = "debugHeaders";
    function aS(e, t, n) {
      var l;
      let a = {
        id: null != (l = n.id) ? l : t.id,
        column: t,
        index: n.index,
        isPlaceholder: !!n.isPlaceholder,
        placeholderId: n.placeholderId,
        depth: n.depth,
        subHeaders: [],
        colSpan: 0,
        rowSpan: 0,
        headerGroup: null,
        getLeafHeaders: () => {
          let e = [],
            t = (n) => {
              (n.subHeaders && n.subHeaders.length && n.subHeaders.map(t), e.push(n));
            };
          return (t(a), e);
        },
        getContext: () => ({ table: e, header: a, column: t })
      };
      return (
        e._features.forEach((t) => {
          null == t.createHeader || t.createHeader(a, e);
        }),
        a
      );
    }
    function aE(e, t, n, l) {
      var a, o;
      let i = 0,
        r = function (e, t) {
          (void 0 === t && (t = 1),
            (i = Math.max(i, t)),
            e
              .filter((e) => e.getIsVisible())
              .forEach((e) => {
                var n;
                null != (n = e.columns) && n.length && r(e.columns, t + 1);
              }, 0));
        };
      r(e);
      let u = [],
        s = (e, t) => {
          let a = { depth: t, id: [l, "".concat(t)].filter(Boolean).join("_"), headers: [] },
            o = [];
          (e.forEach((e) => {
            let i,
              r = [...o].reverse()[0],
              u = e.column.depth === a.depth,
              s = !1;
            if (
              (u && e.column.parent ? (i = e.column.parent) : ((i = e.column), (s = !0)),
              r && (null == r ? void 0 : r.column) === i)
            )
              r.subHeaders.push(e);
            else {
              let a = aS(n, i, {
                id: [l, t, i.id, null == e ? void 0 : e.id].filter(Boolean).join("_"),
                isPlaceholder: s,
                placeholderId: s ? "".concat(o.filter((e) => e.column === i).length) : void 0,
                depth: t,
                index: o.length
              });
              (a.subHeaders.push(e), o.push(a));
            }
            (a.headers.push(e), (e.headerGroup = a));
          }),
            u.push(a),
            t > 0 && s(o, t - 1));
        };
      (s(
        t.map((e, t) => aS(n, e, { depth: i, index: t })),
        i - 1
      ),
        u.reverse());
      let d = (e) =>
        e
          .filter((e) => e.column.getIsVisible())
          .map((e) => {
            let t = 0,
              n = 0,
              l = [0];
            return (
              e.subHeaders && e.subHeaders.length
                ? ((l = []),
                  d(e.subHeaders).forEach((e) => {
                    let { colSpan: n, rowSpan: a } = e;
                    ((t += n), l.push(a));
                  }))
                : (t = 1),
              (n += Math.min(...l)),
              (e.colSpan = t),
              (e.rowSpan = n),
              { colSpan: t, rowSpan: n }
            );
          });
      return (d(null != (a = null == (o = u[0]) ? void 0 : o.headers) ? a : []), u);
    }
    let ab = (e, t, n, l, a, o, i) => {
        let r = {
          id: t,
          index: l,
          original: n,
          depth: a,
          parentId: i,
          _valuesCache: {},
          _uniqueValuesCache: {},
          getValue: (t) => {
            if (r._valuesCache.hasOwnProperty(t)) return r._valuesCache[t];
            let n = e.getColumn(t);
            if (null != n && n.accessorFn)
              return ((r._valuesCache[t] = n.accessorFn(r.original, l)), r._valuesCache[t]);
          },
          getUniqueValues: (t) => {
            if (r._uniqueValuesCache.hasOwnProperty(t)) return r._uniqueValuesCache[t];
            let n = e.getColumn(t);
            if (null != n && n.accessorFn)
              return (
                n.columnDef.getUniqueValues
                  ? (r._uniqueValuesCache[t] = n.columnDef.getUniqueValues(r.original, l))
                  : (r._uniqueValuesCache[t] = [r.getValue(t)]),
                r._uniqueValuesCache[t]
              );
          },
          renderValue: (t) => {
            var n;
            return null != (n = r.getValue(t)) ? n : e.options.renderFallbackValue;
          },
          subRows: [],
          getLeafRows: () => {
            var e, t;
            let n, l;
            return (
              (e = r.subRows),
              (t = (e) => e.subRows),
              (n = []),
              (l = (e) => {
                e.forEach((e) => {
                  n.push(e);
                  let a = t(e);
                  null != a && a.length && l(a);
                });
              })(e),
              n
            );
          },
          getParentRow: () => (r.parentId ? e.getRow(r.parentId, !0) : void 0),
          getParentRows: () => {
            let e = [],
              t = r;
            for (;;) {
              let n = t.getParentRow();
              if (!n) break;
              (e.push(n), (t = n));
            }
            return e.reverse();
          },
          getAllCells: av(
            () => [e.getAllLeafColumns()],
            (t) =>
              t.map((t) => {
                var n;
                let l;
                return (
                  (n = t.id),
                  (l = {
                    id: "".concat(r.id, "_").concat(t.id),
                    row: r,
                    column: t,
                    getValue: () => r.getValue(n),
                    renderValue: () => {
                      var t;
                      return null != (t = l.getValue()) ? t : e.options.renderFallbackValue;
                    },
                    getContext: av(
                      () => [e, t, r, l],
                      (e, t, n, l) => ({
                        table: e,
                        column: t,
                        row: n,
                        cell: l,
                        getValue: l.getValue,
                        renderValue: l.renderValue
                      }),
                      aF(e.options, "debugCells", "cell.getContext")
                    )
                  }),
                  e._features.forEach((n) => {
                    null == n.createCell || n.createCell(l, t, r, e);
                  }, {}),
                  l
                );
              }),
            aF(e.options, "debugRows", "getAllCells")
          ),
          _getAllCellsByColumnId: av(
            () => [r.getAllCells()],
            (e) => e.reduce((e, t) => ((e[t.column.id] = t), e), {}),
            aF(e.options, "debugRows", "getAllCellsByColumnId")
          )
        };
        for (let t = 0; t < e._features.length; t++) {
          let n = e._features[t];
          null == n || null == n.createRow || n.createRow(r, e);
        }
        return r;
      },
      aA = (e, t, n) => {
        var l, a;
        let o = null == n || null == (l = n.toString()) ? void 0 : l.toLowerCase();
        return !!(null == (a = e.getValue(t)) ||
        null == (a = a.toString()) ||
        null == (a = a.toLowerCase())
          ? void 0
          : a.includes(o));
      };
    aA.autoRemove = (e) => aO(e);
    let ay = (e, t, n) => {
      var l;
      return !!(null == (l = e.getValue(t)) || null == (l = l.toString()) ? void 0 : l.includes(n));
    };
    ay.autoRemove = (e) => aO(e);
    let ax = (e, t, n) => {
      var l;
      return (
        (null == (l = e.getValue(t)) || null == (l = l.toString()) ? void 0 : l.toLowerCase()) ===
        (null == n ? void 0 : n.toLowerCase())
      );
    };
    ax.autoRemove = (e) => aO(e);
    let aM = (e, t, n) => {
      var l;
      return null == (l = e.getValue(t)) ? void 0 : l.includes(n);
    };
    aM.autoRemove = (e) => aO(e);
    let aN = (e, t, n) =>
      !n.some((n) => {
        var l;
        return !(null != (l = e.getValue(t)) && l.includes(n));
      });
    aN.autoRemove = (e) => aO(e) || !(null != e && e.length);
    let aw = (e, t, n) =>
      n.some((n) => {
        var l;
        return null == (l = e.getValue(t)) ? void 0 : l.includes(n);
      });
    aw.autoRemove = (e) => aO(e) || !(null != e && e.length);
    let aD = (e, t, n) => e.getValue(t) === n;
    aD.autoRemove = (e) => aO(e);
    let aB = (e, t, n) => e.getValue(t) == n;
    aB.autoRemove = (e) => aO(e);
    let aL = (e, t, n) => {
      let [l, a] = n,
        o = e.getValue(t);
      return o >= l && o <= a;
    };
    ((aL.resolveFilterValue = (e) => {
      let [t, n] = e,
        l = "number" != typeof t ? parseFloat(t) : t,
        a = "number" != typeof n ? parseFloat(n) : n,
        o = null === t || Number.isNaN(l) ? -1 / 0 : l,
        i = null === n || Number.isNaN(a) ? 1 / 0 : a;
      if (o > i) {
        let e = o;
        ((o = i), (i = e));
      }
      return [o, i];
    }),
      (aL.autoRemove = (e) => aO(e) || (aO(e[0]) && aO(e[1]))));
    let aR = {
      includesString: aA,
      includesStringSensitive: ay,
      equalsString: ax,
      arrIncludes: aM,
      arrIncludesAll: aN,
      arrIncludesSome: aw,
      equals: aD,
      weakEquals: aB,
      inNumberRange: aL
    };
    function aO(e) {
      return null == e || "" === e;
    }
    function ak(e, t, n) {
      return (
        (!!e && !!e.autoRemove && e.autoRemove(t, n)) ||
        void 0 === t ||
        ("string" == typeof t && !t)
      );
    }
    let aI = {
        sum: (e, t, n) =>
          n.reduce((t, n) => {
            let l = n.getValue(e);
            return t + ("number" == typeof l ? l : 0);
          }, 0),
        min: (e, t, n) => {
          let l;
          return (
            n.forEach((t) => {
              let n = t.getValue(e);
              null != n && (l > n || (void 0 === l && n >= n)) && (l = n);
            }),
            l
          );
        },
        max: (e, t, n) => {
          let l;
          return (
            n.forEach((t) => {
              let n = t.getValue(e);
              null != n && (l < n || (void 0 === l && n >= n)) && (l = n);
            }),
            l
          );
        },
        extent: (e, t, n) => {
          let l, a;
          return (
            n.forEach((t) => {
              let n = t.getValue(e);
              null != n &&
                (void 0 === l ? n >= n && (l = a = n) : (l > n && (l = n), a < n && (a = n)));
            }),
            [l, a]
          );
        },
        mean: (e, t) => {
          let n = 0,
            l = 0;
          if (
            (t.forEach((t) => {
              let a = t.getValue(e);
              null != a && (a *= 1) >= a && (++n, (l += a));
            }),
            n)
          )
            return l / n;
        },
        median: (e, t) => {
          if (!t.length) return;
          let n = t.map((t) => t.getValue(e));
          if (!(Array.isArray(n) && n.every((e) => "number" == typeof e))) return;
          if (1 === n.length) return n[0];
          let l = Math.floor(n.length / 2),
            a = n.sort((e, t) => e - t);
          return n.length % 2 != 0 ? a[l] : (a[l - 1] + a[l]) / 2;
        },
        unique: (e, t) => Array.from(new Set(t.map((t) => t.getValue(e))).values()),
        uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
        count: (e, t) => t.length
      },
      aT = () => ({ left: [], right: [] }),
      aP = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
      az = () => ({
        startOffset: null,
        startSize: null,
        deltaOffset: null,
        deltaPercentage: null,
        isResizingColumn: !1,
        columnSizingStart: []
      }),
      aW = null;
    function aV(e) {
      return "touchstart" === e.type;
    }
    function aH(e, t) {
      return t
        ? "center" === t
          ? e.getCenterVisibleLeafColumns()
          : "left" === t
            ? e.getLeftVisibleLeafColumns()
            : e.getRightVisibleLeafColumns()
        : e.getVisibleLeafColumns();
    }
    let a_ = () => ({ pageIndex: 0, pageSize: 10 }),
      aG = () => ({ top: [], bottom: [] }),
      aj = (e, t, n, l, a) => {
        var o;
        let i = a.getRow(t, !0);
        (n
          ? (i.getCanMultiSelect() || Object.keys(e).forEach((t) => delete e[t]),
            i.getCanSelect() && (e[t] = !0))
          : delete e[t],
          l &&
            null != (o = i.subRows) &&
            o.length &&
            i.getCanSelectSubRows() &&
            i.subRows.forEach((t) => aj(e, t.id, n, l, a)));
      };
    function aX(e, t) {
      let n = e.getState().rowSelection,
        l = [],
        a = {},
        o = function (e, t) {
          return e
            .map((e) => {
              var t;
              let i = aU(e, n);
              if (
                (i && (l.push(e), (a[e.id] = e)),
                null != (t = e.subRows) && t.length && (e = { ...e, subRows: o(e.subRows) }),
                i)
              )
                return e;
            })
            .filter(Boolean);
        };
      return { rows: o(t.rows), flatRows: l, rowsById: a };
    }
    function aU(e, t) {
      var n;
      return null != (n = t[e.id]) && n;
    }
    function aK(e, t, n) {
      var l;
      if (!(null != (l = e.subRows) && l.length)) return !1;
      let a = !0,
        o = !1;
      return (
        e.subRows.forEach((e) => {
          if (
            (!o || a) &&
            (e.getCanSelect() && (aU(e, t) ? (o = !0) : (a = !1)), e.subRows && e.subRows.length)
          ) {
            let n = aK(e, t);
            "all" === n ? (o = !0) : ("some" === n && (o = !0), (a = !1));
          }
        }),
        a ? "all" : !!o && "some"
      );
    }
    let aq = /([0-9]+)/gm;
    function aY(e, t) {
      return e === t ? 0 : e > t ? 1 : -1;
    }
    function aQ(e) {
      return "number" == typeof e
        ? isNaN(e) || 1 / 0 === e || -1 / 0 === e
          ? ""
          : String(e)
        : "string" == typeof e
          ? e
          : "";
    }
    function aZ(e, t) {
      let n = e.split(aq).filter(Boolean),
        l = t.split(aq).filter(Boolean);
      for (; n.length && l.length;) {
        let e = n.shift(),
          t = l.shift(),
          a = parseInt(e, 10),
          o = parseInt(t, 10),
          i = [a, o].sort();
        if (isNaN(i[0])) {
          if (e > t) return 1;
          if (t > e) return -1;
          continue;
        }
        if (isNaN(i[1])) return isNaN(a) ? -1 : 1;
        if (a > o) return 1;
        if (o > a) return -1;
      }
      return n.length - l.length;
    }
    let aJ = {
        alphanumeric: (e, t, n) =>
          aZ(aQ(e.getValue(n)).toLowerCase(), aQ(t.getValue(n)).toLowerCase()),
        alphanumericCaseSensitive: (e, t, n) => aZ(aQ(e.getValue(n)), aQ(t.getValue(n))),
        text: (e, t, n) => aY(aQ(e.getValue(n)).toLowerCase(), aQ(t.getValue(n)).toLowerCase()),
        textCaseSensitive: (e, t, n) => aY(aQ(e.getValue(n)), aQ(t.getValue(n))),
        datetime: (e, t, n) => {
          let l = e.getValue(n),
            a = t.getValue(n);
          return l > a ? 1 : l < a ? -1 : 0;
        },
        basic: (e, t, n) => aY(e.getValue(n), t.getValue(n))
      },
      a$ = [
        {
          createTable: (e) => {
            ((e.getHeaderGroups = av(
              () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.left,
                e.getState().columnPinning.right
              ],
              (t, n, l, a) => {
                var o, i;
                let r =
                    null !=
                    (o =
                      null == l ? void 0 : l.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                      ? o
                      : [],
                  u =
                    null !=
                    (i =
                      null == a ? void 0 : a.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                      ? i
                      : [];
                return aE(
                  t,
                  [
                    ...r,
                    ...n.filter(
                      (e) => !(null != l && l.includes(e.id)) && !(null != a && a.includes(e.id))
                    ),
                    ...u
                  ],
                  e
                );
              },
              aF(e.options, aC, "getHeaderGroups")
            )),
              (e.getCenterHeaderGroups = av(
                () => [
                  e.getAllColumns(),
                  e.getVisibleLeafColumns(),
                  e.getState().columnPinning.left,
                  e.getState().columnPinning.right
                ],
                (t, n, l, a) =>
                  aE(
                    t,
                    (n = n.filter(
                      (e) => !(null != l && l.includes(e.id)) && !(null != a && a.includes(e.id))
                    )),
                    e,
                    "center"
                  ),
                aF(e.options, aC, "getCenterHeaderGroups")
              )),
              (e.getLeftHeaderGroups = av(
                () => [
                  e.getAllColumns(),
                  e.getVisibleLeafColumns(),
                  e.getState().columnPinning.left
                ],
                (t, n, l) => {
                  var a;
                  return aE(
                    t,
                    null !=
                      (a =
                        null == l
                          ? void 0
                          : l.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                      ? a
                      : [],
                    e,
                    "left"
                  );
                },
                aF(e.options, aC, "getLeftHeaderGroups")
              )),
              (e.getRightHeaderGroups = av(
                () => [
                  e.getAllColumns(),
                  e.getVisibleLeafColumns(),
                  e.getState().columnPinning.right
                ],
                (t, n, l) => {
                  var a;
                  return aE(
                    t,
                    null !=
                      (a =
                        null == l
                          ? void 0
                          : l.map((e) => n.find((t) => t.id === e)).filter(Boolean))
                      ? a
                      : [],
                    e,
                    "right"
                  );
                },
                aF(e.options, aC, "getRightHeaderGroups")
              )),
              (e.getFooterGroups = av(
                () => [e.getHeaderGroups()],
                (e) => [...e].reverse(),
                aF(e.options, aC, "getFooterGroups")
              )),
              (e.getLeftFooterGroups = av(
                () => [e.getLeftHeaderGroups()],
                (e) => [...e].reverse(),
                aF(e.options, aC, "getLeftFooterGroups")
              )),
              (e.getCenterFooterGroups = av(
                () => [e.getCenterHeaderGroups()],
                (e) => [...e].reverse(),
                aF(e.options, aC, "getCenterFooterGroups")
              )),
              (e.getRightFooterGroups = av(
                () => [e.getRightHeaderGroups()],
                (e) => [...e].reverse(),
                aF(e.options, aC, "getRightFooterGroups")
              )),
              (e.getFlatHeaders = av(
                () => [e.getHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                aF(e.options, aC, "getFlatHeaders")
              )),
              (e.getLeftFlatHeaders = av(
                () => [e.getLeftHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                aF(e.options, aC, "getLeftFlatHeaders")
              )),
              (e.getCenterFlatHeaders = av(
                () => [e.getCenterHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                aF(e.options, aC, "getCenterFlatHeaders")
              )),
              (e.getRightFlatHeaders = av(
                () => [e.getRightHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                aF(e.options, aC, "getRightFlatHeaders")
              )),
              (e.getCenterLeafHeaders = av(
                () => [e.getCenterFlatHeaders()],
                (e) =>
                  e.filter((e) => {
                    var t;
                    return !(null != (t = e.subHeaders) && t.length);
                  }),
                aF(e.options, aC, "getCenterLeafHeaders")
              )),
              (e.getLeftLeafHeaders = av(
                () => [e.getLeftFlatHeaders()],
                (e) =>
                  e.filter((e) => {
                    var t;
                    return !(null != (t = e.subHeaders) && t.length);
                  }),
                aF(e.options, aC, "getLeftLeafHeaders")
              )),
              (e.getRightLeafHeaders = av(
                () => [e.getRightFlatHeaders()],
                (e) =>
                  e.filter((e) => {
                    var t;
                    return !(null != (t = e.subHeaders) && t.length);
                  }),
                aF(e.options, aC, "getRightLeafHeaders")
              )),
              (e.getLeafHeaders = av(
                () => [
                  e.getLeftHeaderGroups(),
                  e.getCenterHeaderGroups(),
                  e.getRightHeaderGroups()
                ],
                (e, t, n) => {
                  var l, a, o, i, r, u;
                  return [
                    ...(null != (l = null == (a = e[0]) ? void 0 : a.headers) ? l : []),
                    ...(null != (o = null == (i = t[0]) ? void 0 : i.headers) ? o : []),
                    ...(null != (r = null == (u = n[0]) ? void 0 : u.headers) ? r : [])
                  ]
                    .map((e) => e.getLeafHeaders())
                    .flat();
                },
                aF(e.options, aC, "getLeafHeaders")
              )));
          }
        },
        {
          getInitialState: (e) => ({ columnVisibility: {}, ...e }),
          getDefaultOptions: (e) => ({ onColumnVisibilityChange: af("columnVisibility", e) }),
          createColumn: (e, t) => {
            ((e.toggleVisibility = (n) => {
              e.getCanHide() &&
                t.setColumnVisibility((t) => ({ ...t, [e.id]: null != n ? n : !e.getIsVisible() }));
            }),
              (e.getIsVisible = () => {
                var n, l;
                let a = e.columns;
                return (
                  null ==
                    (n = a.length
                      ? a.some((e) => e.getIsVisible())
                      : null == (l = t.getState().columnVisibility)
                        ? void 0
                        : l[e.id]) || n
                );
              }),
              (e.getCanHide = () => {
                var n, l;
                return (
                  (null == (n = e.columnDef.enableHiding) || n) &&
                  (null == (l = t.options.enableHiding) || l)
                );
              }),
              (e.getToggleVisibilityHandler = () => (t) => {
                null == e.toggleVisibility || e.toggleVisibility(t.target.checked);
              }));
          },
          createRow: (e, t) => {
            ((e._getAllVisibleCells = av(
              () => [e.getAllCells(), t.getState().columnVisibility],
              (e) => e.filter((e) => e.column.getIsVisible()),
              aF(t.options, "debugRows", "_getAllVisibleCells")
            )),
              (e.getVisibleCells = av(
                () => [
                  e.getLeftVisibleCells(),
                  e.getCenterVisibleCells(),
                  e.getRightVisibleCells()
                ],
                (e, t, n) => [...e, ...t, ...n],
                aF(t.options, "debugRows", "getVisibleCells")
              )));
          },
          createTable: (e) => {
            let t = (t, n) =>
              av(
                () => [
                  n(),
                  n()
                    .filter((e) => e.getIsVisible())
                    .map((e) => e.id)
                    .join("_")
                ],
                (e) => e.filter((e) => (null == e.getIsVisible ? void 0 : e.getIsVisible())),
                aF(e.options, "debugColumns", t)
              );
            ((e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns())),
              (e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns())),
              (e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () =>
                e.getLeftLeafColumns()
              )),
              (e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () =>
                e.getRightLeafColumns()
              )),
              (e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () =>
                e.getCenterLeafColumns()
              )),
              (e.setColumnVisibility = (t) =>
                null == e.options.onColumnVisibilityChange
                  ? void 0
                  : e.options.onColumnVisibilityChange(t)),
              (e.resetColumnVisibility = (t) => {
                var n;
                e.setColumnVisibility(
                  t ? {} : null != (n = e.initialState.columnVisibility) ? n : {}
                );
              }),
              (e.toggleAllColumnsVisible = (t) => {
                var n;
                ((t = null != (n = t) ? n : !e.getIsAllColumnsVisible()),
                  e.setColumnVisibility(
                    e
                      .getAllLeafColumns()
                      .reduce(
                        (e, n) => ({
                          ...e,
                          [n.id]: t || !(null != n.getCanHide && n.getCanHide())
                        }),
                        {}
                      )
                  ));
              }),
              (e.getIsAllColumnsVisible = () =>
                !e.getAllLeafColumns().some((e) => !(null != e.getIsVisible && e.getIsVisible()))),
              (e.getIsSomeColumnsVisible = () =>
                e
                  .getAllLeafColumns()
                  .some((e) => (null == e.getIsVisible ? void 0 : e.getIsVisible()))),
              (e.getToggleAllColumnsVisibilityHandler = () => (t) => {
                var n;
                e.toggleAllColumnsVisible(null == (n = t.target) ? void 0 : n.checked);
              }));
          }
        },
        {
          getInitialState: (e) => ({ columnOrder: [], ...e }),
          getDefaultOptions: (e) => ({ onColumnOrderChange: af("columnOrder", e) }),
          createColumn: (e, t) => {
            ((e.getIndex = av(
              (e) => [aH(t, e)],
              (t) => t.findIndex((t) => t.id === e.id),
              aF(t.options, "debugColumns", "getIndex")
            )),
              (e.getIsFirstColumn = (n) => {
                var l;
                return (null == (l = aH(t, n)[0]) ? void 0 : l.id) === e.id;
              }),
              (e.getIsLastColumn = (n) => {
                var l;
                let a = aH(t, n);
                return (null == (l = a[a.length - 1]) ? void 0 : l.id) === e.id;
              }));
          },
          createTable: (e) => {
            ((e.setColumnOrder = (t) =>
              null == e.options.onColumnOrderChange ? void 0 : e.options.onColumnOrderChange(t)),
              (e.resetColumnOrder = (t) => {
                var n;
                e.setColumnOrder(t ? [] : null != (n = e.initialState.columnOrder) ? n : []);
              }),
              (e._getOrderColumnsFn = av(
                () => [
                  e.getState().columnOrder,
                  e.getState().grouping,
                  e.options.groupedColumnMode
                ],
                (e, t, n) => (l) => {
                  let a = [];
                  if (null != e && e.length) {
                    let t = [...e],
                      n = [...l];
                    for (; n.length && t.length;) {
                      let e = t.shift(),
                        l = n.findIndex((t) => t.id === e);
                      l > -1 && a.push(n.splice(l, 1)[0]);
                    }
                    a = [...a, ...n];
                  } else a = l;
                  var o = a;
                  if (!(null != t && t.length) || !n) return o;
                  let i = o.filter((e) => !t.includes(e.id));
                  return "remove" === n
                    ? i
                    : [...t.map((e) => o.find((t) => t.id === e)).filter(Boolean), ...i];
                },
                aF(e.options, "debugTable", "_getOrderColumnsFn")
              )));
          }
        },
        {
          getInitialState: (e) => ({ columnPinning: aT(), ...e }),
          getDefaultOptions: (e) => ({ onColumnPinningChange: af("columnPinning", e) }),
          createColumn: (e, t) => {
            ((e.pin = (n) => {
              let l = e
                .getLeafColumns()
                .map((e) => e.id)
                .filter(Boolean);
              t.setColumnPinning((e) => {
                var t, a, o, i, r, u;
                return "right" === n
                  ? {
                      left: (null != (o = null == e ? void 0 : e.left) ? o : []).filter(
                        (e) => !(null != l && l.includes(e))
                      ),
                      right: [
                        ...(null != (i = null == e ? void 0 : e.right) ? i : []).filter(
                          (e) => !(null != l && l.includes(e))
                        ),
                        ...l
                      ]
                    }
                  : "left" === n
                    ? {
                        left: [
                          ...(null != (r = null == e ? void 0 : e.left) ? r : []).filter(
                            (e) => !(null != l && l.includes(e))
                          ),
                          ...l
                        ],
                        right: (null != (u = null == e ? void 0 : e.right) ? u : []).filter(
                          (e) => !(null != l && l.includes(e))
                        )
                      }
                    : {
                        left: (null != (t = null == e ? void 0 : e.left) ? t : []).filter(
                          (e) => !(null != l && l.includes(e))
                        ),
                        right: (null != (a = null == e ? void 0 : e.right) ? a : []).filter(
                          (e) => !(null != l && l.includes(e))
                        )
                      };
              });
            }),
              (e.getCanPin = () =>
                e.getLeafColumns().some((e) => {
                  var n, l, a;
                  return (
                    (null == (n = e.columnDef.enablePinning) || n) &&
                    (null ==
                      (l =
                        null != (a = t.options.enableColumnPinning)
                          ? a
                          : t.options.enablePinning) ||
                      l)
                  );
                })),
              (e.getIsPinned = () => {
                let n = e.getLeafColumns().map((e) => e.id),
                  { left: l, right: a } = t.getState().columnPinning,
                  o = n.some((e) => (null == l ? void 0 : l.includes(e))),
                  i = n.some((e) => (null == a ? void 0 : a.includes(e)));
                return o ? "left" : !!i && "right";
              }),
              (e.getPinnedIndex = () => {
                var n, l;
                let a = e.getIsPinned();
                return a
                  ? null !=
                    (n =
                      null == (l = t.getState().columnPinning) || null == (l = l[a])
                        ? void 0
                        : l.indexOf(e.id))
                    ? n
                    : -1
                  : 0;
              }));
          },
          createRow: (e, t) => {
            ((e.getCenterVisibleCells = av(
              () => [
                e._getAllVisibleCells(),
                t.getState().columnPinning.left,
                t.getState().columnPinning.right
              ],
              (e, t, n) => {
                let l = [...(null != t ? t : []), ...(null != n ? n : [])];
                return e.filter((e) => !l.includes(e.column.id));
              },
              aF(t.options, "debugRows", "getCenterVisibleCells")
            )),
              (e.getLeftVisibleCells = av(
                () => [e._getAllVisibleCells(), t.getState().columnPinning.left],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.column.id === t))
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: "left" })),
                aF(t.options, "debugRows", "getLeftVisibleCells")
              )),
              (e.getRightVisibleCells = av(
                () => [e._getAllVisibleCells(), t.getState().columnPinning.right],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.column.id === t))
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: "right" })),
                aF(t.options, "debugRows", "getRightVisibleCells")
              )));
          },
          createTable: (e) => {
            ((e.setColumnPinning = (t) =>
              null == e.options.onColumnPinningChange
                ? void 0
                : e.options.onColumnPinningChange(t)),
              (e.resetColumnPinning = (t) => {
                var n, l;
                return e.setColumnPinning(
                  t
                    ? aT()
                    : null != (n = null == (l = e.initialState) ? void 0 : l.columnPinning)
                      ? n
                      : aT()
                );
              }),
              (e.getIsSomeColumnsPinned = (t) => {
                var n, l, a;
                let o = e.getState().columnPinning;
                return t
                  ? !!(null == (n = o[t]) ? void 0 : n.length)
                  : !!(
                      (null == (l = o.left) ? void 0 : l.length) ||
                      (null == (a = o.right) ? void 0 : a.length)
                    );
              }),
              (e.getLeftLeafColumns = av(
                () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
                (e, t) =>
                  (null != t ? t : []).map((t) => e.find((e) => e.id === t)).filter(Boolean),
                aF(e.options, "debugColumns", "getLeftLeafColumns")
              )),
              (e.getRightLeafColumns = av(
                () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
                (e, t) =>
                  (null != t ? t : []).map((t) => e.find((e) => e.id === t)).filter(Boolean),
                aF(e.options, "debugColumns", "getRightLeafColumns")
              )),
              (e.getCenterLeafColumns = av(
                () => [
                  e.getAllLeafColumns(),
                  e.getState().columnPinning.left,
                  e.getState().columnPinning.right
                ],
                (e, t, n) => {
                  let l = [...(null != t ? t : []), ...(null != n ? n : [])];
                  return e.filter((e) => !l.includes(e.id));
                },
                aF(e.options, "debugColumns", "getCenterLeafColumns")
              )));
          }
        },
        {
          createColumn: (e, t) => {
            ((e._getFacetedRowModel =
              t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id)),
              (e.getFacetedRowModel = () =>
                e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel()),
              (e._getFacetedUniqueValues =
                t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id)),
              (e.getFacetedUniqueValues = () =>
                e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : new Map()),
              (e._getFacetedMinMaxValues =
                t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id)),
              (e.getFacetedMinMaxValues = () => {
                if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
              }));
          }
        },
        {
          getDefaultColumnDef: () => ({ filterFn: "auto" }),
          getInitialState: (e) => ({ columnFilters: [], ...e }),
          getDefaultOptions: (e) => ({
            onColumnFiltersChange: af("columnFilters", e),
            filterFromLeafRows: !1,
            maxLeafRowFilterDepth: 100
          }),
          createColumn: (e, t) => {
            ((e.getAutoFilterFn = () => {
              let n = t.getCoreRowModel().flatRows[0],
                l = null == n ? void 0 : n.getValue(e.id);
              return "string" == typeof l
                ? aR.includesString
                : "number" == typeof l
                  ? aR.inNumberRange
                  : "boolean" == typeof l || (null !== l && "object" == typeof l)
                    ? aR.equals
                    : Array.isArray(l)
                      ? aR.arrIncludes
                      : aR.weakEquals;
            }),
              (e.getFilterFn = () => {
                var n, l;
                return ap(e.columnDef.filterFn)
                  ? e.columnDef.filterFn
                  : "auto" === e.columnDef.filterFn
                    ? e.getAutoFilterFn()
                    : null !=
                        (n = null == (l = t.options.filterFns) ? void 0 : l[e.columnDef.filterFn])
                      ? n
                      : aR[e.columnDef.filterFn];
              }),
              (e.getCanFilter = () => {
                var n, l, a;
                return (
                  (null == (n = e.columnDef.enableColumnFilter) || n) &&
                  (null == (l = t.options.enableColumnFilters) || l) &&
                  (null == (a = t.options.enableFilters) || a) &&
                  !!e.accessorFn
                );
              }),
              (e.getIsFiltered = () => e.getFilterIndex() > -1),
              (e.getFilterValue = () => {
                var n;
                return null == (n = t.getState().columnFilters) ||
                  null == (n = n.find((t) => t.id === e.id))
                  ? void 0
                  : n.value;
              }),
              (e.getFilterIndex = () => {
                var n, l;
                return null !=
                  (n =
                    null == (l = t.getState().columnFilters)
                      ? void 0
                      : l.findIndex((t) => t.id === e.id))
                  ? n
                  : -1;
              }),
              (e.setFilterValue = (n) => {
                t.setColumnFilters((t) => {
                  var l, a;
                  let o = e.getFilterFn(),
                    i = null == t ? void 0 : t.find((t) => t.id === e.id),
                    r = ah(n, i ? i.value : void 0);
                  if (ak(o, r, e))
                    return null != (l = null == t ? void 0 : t.filter((t) => t.id !== e.id))
                      ? l
                      : [];
                  let u = { id: e.id, value: r };
                  return i
                    ? null != (a = null == t ? void 0 : t.map((t) => (t.id === e.id ? u : t)))
                      ? a
                      : []
                    : null != t && t.length
                      ? [...t, u]
                      : [u];
                });
              }));
          },
          createRow: (e, t) => {
            ((e.columnFilters = {}), (e.columnFiltersMeta = {}));
          },
          createTable: (e) => {
            ((e.setColumnFilters = (t) => {
              let n = e.getAllLeafColumns();
              null == e.options.onColumnFiltersChange ||
                e.options.onColumnFiltersChange((e) => {
                  var l;
                  return null == (l = ah(t, e))
                    ? void 0
                    : l.filter((e) => {
                        let t = n.find((t) => t.id === e.id);
                        return !(t && ak(t.getFilterFn(), e.value, t));
                      });
                });
            }),
              (e.resetColumnFilters = (t) => {
                var n, l;
                e.setColumnFilters(
                  t
                    ? []
                    : null != (n = null == (l = e.initialState) ? void 0 : l.columnFilters)
                      ? n
                      : []
                );
              }),
              (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
              (e.getFilteredRowModel = () =>
                (!e._getFilteredRowModel &&
                  e.options.getFilteredRowModel &&
                  (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
                e.options.manualFiltering || !e._getFilteredRowModel)
                  ? e.getPreFilteredRowModel()
                  : e._getFilteredRowModel()));
          }
        },
        {
          createTable: (e) => {
            ((e._getGlobalFacetedRowModel =
              e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__")),
              (e.getGlobalFacetedRowModel = () =>
                e.options.manualFiltering || !e._getGlobalFacetedRowModel
                  ? e.getPreFilteredRowModel()
                  : e._getGlobalFacetedRowModel()),
              (e._getGlobalFacetedUniqueValues =
                e.options.getFacetedUniqueValues &&
                e.options.getFacetedUniqueValues(e, "__global__")),
              (e.getGlobalFacetedUniqueValues = () =>
                e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : new Map()),
              (e._getGlobalFacetedMinMaxValues =
                e.options.getFacetedMinMaxValues &&
                e.options.getFacetedMinMaxValues(e, "__global__")),
              (e.getGlobalFacetedMinMaxValues = () => {
                if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
              }));
          }
        },
        {
          getInitialState: (e) => ({ globalFilter: void 0, ...e }),
          getDefaultOptions: (e) => ({
            onGlobalFilterChange: af("globalFilter", e),
            globalFilterFn: "auto",
            getColumnCanGlobalFilter: (t) => {
              var n;
              let l =
                null == (n = e.getCoreRowModel().flatRows[0]) ||
                null == (n = n._getAllCellsByColumnId()[t.id])
                  ? void 0
                  : n.getValue();
              return "string" == typeof l || "number" == typeof l;
            }
          }),
          createColumn: (e, t) => {
            e.getCanGlobalFilter = () => {
              var n, l, a, o;
              return (
                (null == (n = e.columnDef.enableGlobalFilter) || n) &&
                (null == (l = t.options.enableGlobalFilter) || l) &&
                (null == (a = t.options.enableFilters) || a) &&
                (null ==
                  (o =
                    null == t.options.getColumnCanGlobalFilter
                      ? void 0
                      : t.options.getColumnCanGlobalFilter(e)) ||
                  o) &&
                !!e.accessorFn
              );
            };
          },
          createTable: (e) => {
            ((e.getGlobalAutoFilterFn = () => aR.includesString),
              (e.getGlobalFilterFn = () => {
                var t, n;
                let { globalFilterFn: l } = e.options;
                return ap(l)
                  ? l
                  : "auto" === l
                    ? e.getGlobalAutoFilterFn()
                    : null != (t = null == (n = e.options.filterFns) ? void 0 : n[l])
                      ? t
                      : aR[l];
              }),
              (e.setGlobalFilter = (t) => {
                null == e.options.onGlobalFilterChange || e.options.onGlobalFilterChange(t);
              }),
              (e.resetGlobalFilter = (t) => {
                e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
              }));
          }
        },
        {
          getInitialState: (e) => ({ sorting: [], ...e }),
          getDefaultColumnDef: () => ({ sortingFn: "auto", sortUndefined: 1 }),
          getDefaultOptions: (e) => ({
            onSortingChange: af("sorting", e),
            isMultiSortEvent: (e) => e.shiftKey
          }),
          createColumn: (e, t) => {
            ((e.getAutoSortingFn = () => {
              let n = t.getFilteredRowModel().flatRows.slice(10),
                l = !1;
              for (let t of n) {
                let n = null == t ? void 0 : t.getValue(e.id);
                if ("[object Date]" === Object.prototype.toString.call(n)) return aJ.datetime;
                if ("string" == typeof n && ((l = !0), n.split(aq).length > 1))
                  return aJ.alphanumeric;
              }
              return l ? aJ.text : aJ.basic;
            }),
              (e.getAutoSortDir = () => {
                let n = t.getFilteredRowModel().flatRows[0];
                return "string" == typeof (null == n ? void 0 : n.getValue(e.id)) ? "asc" : "desc";
              }),
              (e.getSortingFn = () => {
                var n, l;
                if (!e) throw Error();
                return ap(e.columnDef.sortingFn)
                  ? e.columnDef.sortingFn
                  : "auto" === e.columnDef.sortingFn
                    ? e.getAutoSortingFn()
                    : null !=
                        (n = null == (l = t.options.sortingFns) ? void 0 : l[e.columnDef.sortingFn])
                      ? n
                      : aJ[e.columnDef.sortingFn];
              }),
              (e.toggleSorting = (n, l) => {
                let a = e.getNextSortingOrder(),
                  o = null != n;
                t.setSorting((i) => {
                  let r,
                    u = null == i ? void 0 : i.find((t) => t.id === e.id),
                    s = null == i ? void 0 : i.findIndex((t) => t.id === e.id),
                    d = [],
                    c = o ? n : "desc" === a;
                  if (
                    ("toggle" !=
                      (r =
                        null != i && i.length && e.getCanMultiSort() && l
                          ? u
                            ? "toggle"
                            : "add"
                          : null != i && i.length && s !== i.length - 1
                            ? "replace"
                            : u
                              ? "toggle"
                              : "replace") ||
                      o ||
                      a ||
                      (r = "remove"),
                    "add" === r)
                  ) {
                    var m;
                    (d = [...i, { id: e.id, desc: c }]).splice(
                      0,
                      d.length -
                        (null != (m = t.options.maxMultiSortColCount) ? m : Number.MAX_SAFE_INTEGER)
                    );
                  } else
                    d =
                      "toggle" === r
                        ? i.map((t) => (t.id === e.id ? { ...t, desc: c } : t))
                        : "remove" === r
                          ? i.filter((t) => t.id !== e.id)
                          : [{ id: e.id, desc: c }];
                  return d;
                });
              }),
              (e.getFirstSortDir = () => {
                var n, l;
                return (
                  null !=
                  (n = null != (l = e.columnDef.sortDescFirst) ? l : t.options.sortDescFirst)
                    ? n
                    : "desc" === e.getAutoSortDir()
                )
                  ? "desc"
                  : "asc";
              }),
              (e.getNextSortingOrder = (n) => {
                var l, a;
                let o = e.getFirstSortDir(),
                  i = e.getIsSorted();
                return i
                  ? (i === o ||
                      (null != (l = t.options.enableSortingRemoval) && !l) ||
                      (!!n && null != (a = t.options.enableMultiRemove) && !a)) &&
                      ("desc" === i ? "asc" : "desc")
                  : o;
              }),
              (e.getCanSort = () => {
                var n, l;
                return (
                  (null == (n = e.columnDef.enableSorting) || n) &&
                  (null == (l = t.options.enableSorting) || l) &&
                  !!e.accessorFn
                );
              }),
              (e.getCanMultiSort = () => {
                var n, l;
                return null !=
                  (n = null != (l = e.columnDef.enableMultiSort) ? l : t.options.enableMultiSort)
                  ? n
                  : !!e.accessorFn;
              }),
              (e.getIsSorted = () => {
                var n;
                let l = null == (n = t.getState().sorting) ? void 0 : n.find((t) => t.id === e.id);
                return !!l && (l.desc ? "desc" : "asc");
              }),
              (e.getSortIndex = () => {
                var n, l;
                return null !=
                  (n =
                    null == (l = t.getState().sorting) ? void 0 : l.findIndex((t) => t.id === e.id))
                  ? n
                  : -1;
              }),
              (e.clearSorting = () => {
                t.setSorting((t) => (null != t && t.length ? t.filter((t) => t.id !== e.id) : []));
              }),
              (e.getToggleSortingHandler = () => {
                let n = e.getCanSort();
                return (l) => {
                  n &&
                    (null == l.persist || l.persist(),
                    null == e.toggleSorting ||
                      e.toggleSorting(
                        void 0,
                        !!e.getCanMultiSort() &&
                          (null == t.options.isMultiSortEvent
                            ? void 0
                            : t.options.isMultiSortEvent(l))
                      ));
                };
              }));
          },
          createTable: (e) => {
            ((e.setSorting = (t) =>
              null == e.options.onSortingChange ? void 0 : e.options.onSortingChange(t)),
              (e.resetSorting = (t) => {
                var n, l;
                e.setSorting(
                  t ? [] : null != (n = null == (l = e.initialState) ? void 0 : l.sorting) ? n : []
                );
              }),
              (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
              (e.getSortedRowModel = () =>
                (!e._getSortedRowModel &&
                  e.options.getSortedRowModel &&
                  (e._getSortedRowModel = e.options.getSortedRowModel(e)),
                e.options.manualSorting || !e._getSortedRowModel)
                  ? e.getPreSortedRowModel()
                  : e._getSortedRowModel()));
          }
        },
        {
          getDefaultColumnDef: () => ({
            aggregatedCell: (e) => {
              var t, n;
              return null !=
                (t = null == (n = e.getValue()) || null == n.toString ? void 0 : n.toString())
                ? t
                : null;
            },
            aggregationFn: "auto"
          }),
          getInitialState: (e) => ({ grouping: [], ...e }),
          getDefaultOptions: (e) => ({
            onGroupingChange: af("grouping", e),
            groupedColumnMode: "reorder"
          }),
          createColumn: (e, t) => {
            ((e.toggleGrouping = () => {
              t.setGrouping((t) =>
                null != t && t.includes(e.id)
                  ? t.filter((t) => t !== e.id)
                  : [...(null != t ? t : []), e.id]
              );
            }),
              (e.getCanGroup = () => {
                var n, l;
                return (
                  (null == (n = e.columnDef.enableGrouping) || n) &&
                  (null == (l = t.options.enableGrouping) || l) &&
                  (!!e.accessorFn || !!e.columnDef.getGroupingValue)
                );
              }),
              (e.getIsGrouped = () => {
                var n;
                return null == (n = t.getState().grouping) ? void 0 : n.includes(e.id);
              }),
              (e.getGroupedIndex = () => {
                var n;
                return null == (n = t.getState().grouping) ? void 0 : n.indexOf(e.id);
              }),
              (e.getToggleGroupingHandler = () => {
                let t = e.getCanGroup();
                return () => {
                  t && e.toggleGrouping();
                };
              }),
              (e.getAutoAggregationFn = () => {
                let n = t.getCoreRowModel().flatRows[0],
                  l = null == n ? void 0 : n.getValue(e.id);
                return "number" == typeof l
                  ? aI.sum
                  : "[object Date]" === Object.prototype.toString.call(l)
                    ? aI.extent
                    : void 0;
              }),
              (e.getAggregationFn = () => {
                var n, l;
                if (!e) throw Error();
                return ap(e.columnDef.aggregationFn)
                  ? e.columnDef.aggregationFn
                  : "auto" === e.columnDef.aggregationFn
                    ? e.getAutoAggregationFn()
                    : null !=
                        (n =
                          null == (l = t.options.aggregationFns)
                            ? void 0
                            : l[e.columnDef.aggregationFn])
                      ? n
                      : aI[e.columnDef.aggregationFn];
              }));
          },
          createTable: (e) => {
            ((e.setGrouping = (t) =>
              null == e.options.onGroupingChange ? void 0 : e.options.onGroupingChange(t)),
              (e.resetGrouping = (t) => {
                var n, l;
                e.setGrouping(
                  t ? [] : null != (n = null == (l = e.initialState) ? void 0 : l.grouping) ? n : []
                );
              }),
              (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
              (e.getGroupedRowModel = () =>
                (!e._getGroupedRowModel &&
                  e.options.getGroupedRowModel &&
                  (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
                e.options.manualGrouping || !e._getGroupedRowModel)
                  ? e.getPreGroupedRowModel()
                  : e._getGroupedRowModel()));
          },
          createRow: (e, t) => {
            ((e.getIsGrouped = () => !!e.groupingColumnId),
              (e.getGroupingValue = (n) => {
                if (e._groupingValuesCache.hasOwnProperty(n)) return e._groupingValuesCache[n];
                let l = t.getColumn(n);
                return null != l && l.columnDef.getGroupingValue
                  ? ((e._groupingValuesCache[n] = l.columnDef.getGroupingValue(e.original)),
                    e._groupingValuesCache[n])
                  : e.getValue(n);
              }),
              (e._groupingValuesCache = {}));
          },
          createCell: (e, t, n, l) => {
            ((e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId),
              (e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped()),
              (e.getIsAggregated = () => {
                var t;
                return (
                  !e.getIsGrouped() &&
                  !e.getIsPlaceholder() &&
                  !!(null != (t = n.subRows) && t.length)
                );
              }));
          }
        },
        {
          getInitialState: (e) => ({ expanded: {}, ...e }),
          getDefaultOptions: (e) => ({
            onExpandedChange: af("expanded", e),
            paginateExpandedRows: !0
          }),
          createTable: (e) => {
            let t = !1,
              n = !1;
            ((e._autoResetExpanded = () => {
              var l, a;
              if (!t)
                return void e._queue(() => {
                  t = !0;
                });
              if (
                null != (l = null != (a = e.options.autoResetAll) ? a : e.options.autoResetExpanded)
                  ? l
                  : !e.options.manualExpanding
              ) {
                if (n) return;
                ((n = !0),
                  e._queue(() => {
                    (e.resetExpanded(), (n = !1));
                  }));
              }
            }),
              (e.setExpanded = (t) =>
                null == e.options.onExpandedChange ? void 0 : e.options.onExpandedChange(t)),
              (e.toggleAllRowsExpanded = (t) => {
                (null != t ? t : !e.getIsAllRowsExpanded()) ? e.setExpanded(!0) : e.setExpanded({});
              }),
              (e.resetExpanded = (t) => {
                var n, l;
                e.setExpanded(
                  t ? {} : null != (n = null == (l = e.initialState) ? void 0 : l.expanded) ? n : {}
                );
              }),
              (e.getCanSomeRowsExpand = () =>
                e.getPrePaginationRowModel().flatRows.some((e) => e.getCanExpand())),
              (e.getToggleAllRowsExpandedHandler = () => (t) => {
                (null == t.persist || t.persist(), e.toggleAllRowsExpanded());
              }),
              (e.getIsSomeRowsExpanded = () => {
                let t = e.getState().expanded;
                return !0 === t || Object.values(t).some(Boolean);
              }),
              (e.getIsAllRowsExpanded = () => {
                let t = e.getState().expanded;
                return "boolean" == typeof t
                  ? !0 === t
                  : !(
                      !Object.keys(t).length ||
                      e.getRowModel().flatRows.some((e) => !e.getIsExpanded())
                    );
              }),
              (e.getExpandedDepth = () => {
                let t = 0;
                return (
                  (!0 === e.getState().expanded
                    ? Object.keys(e.getRowModel().rowsById)
                    : Object.keys(e.getState().expanded)
                  ).forEach((e) => {
                    let n = e.split(".");
                    t = Math.max(t, n.length);
                  }),
                  t
                );
              }),
              (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
              (e.getExpandedRowModel = () =>
                (!e._getExpandedRowModel &&
                  e.options.getExpandedRowModel &&
                  (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
                e.options.manualExpanding || !e._getExpandedRowModel)
                  ? e.getPreExpandedRowModel()
                  : e._getExpandedRowModel()));
          },
          createRow: (e, t) => {
            ((e.toggleExpanded = (n) => {
              t.setExpanded((l) => {
                var a;
                let o = !0 === l || !!(null != l && l[e.id]),
                  i = {};
                if (
                  (!0 === l
                    ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
                        i[e] = !0;
                      })
                    : (i = l),
                  (n = null != (a = n) ? a : !o),
                  !o && n)
                )
                  return { ...i, [e.id]: !0 };
                if (o && !n) {
                  let { [e.id]: t, ...n } = i;
                  return n;
                }
                return l;
              });
            }),
              (e.getIsExpanded = () => {
                var n;
                let l = t.getState().expanded;
                return !!(null !=
                (n = null == t.options.getIsRowExpanded ? void 0 : t.options.getIsRowExpanded(e))
                  ? n
                  : !0 === l || (null == l ? void 0 : l[e.id]));
              }),
              (e.getCanExpand = () => {
                var n, l, a;
                return null !=
                  (n = null == t.options.getRowCanExpand ? void 0 : t.options.getRowCanExpand(e))
                  ? n
                  : (null == (l = t.options.enableExpanding) || l) &&
                      !!(null != (a = e.subRows) && a.length);
              }),
              (e.getIsAllParentsExpanded = () => {
                let n = !0,
                  l = e;
                for (; n && l.parentId;) n = (l = t.getRow(l.parentId, !0)).getIsExpanded();
                return n;
              }),
              (e.getToggleExpandedHandler = () => {
                let t = e.getCanExpand();
                return () => {
                  t && e.toggleExpanded();
                };
              }));
          }
        },
        {
          getInitialState: (e) => ({
            ...e,
            pagination: { ...a_(), ...(null == e ? void 0 : e.pagination) }
          }),
          getDefaultOptions: (e) => ({ onPaginationChange: af("pagination", e) }),
          createTable: (e) => {
            let t = !1,
              n = !1;
            ((e._autoResetPageIndex = () => {
              var l, a;
              if (!t)
                return void e._queue(() => {
                  t = !0;
                });
              if (
                null !=
                (l = null != (a = e.options.autoResetAll) ? a : e.options.autoResetPageIndex)
                  ? l
                  : !e.options.manualPagination
              ) {
                if (n) return;
                ((n = !0),
                  e._queue(() => {
                    (e.resetPageIndex(), (n = !1));
                  }));
              }
            }),
              (e.setPagination = (t) =>
                null == e.options.onPaginationChange
                  ? void 0
                  : e.options.onPaginationChange((e) => ah(t, e))),
              (e.resetPagination = (t) => {
                var n;
                e.setPagination(t ? a_() : null != (n = e.initialState.pagination) ? n : a_());
              }),
              (e.setPageIndex = (t) => {
                e.setPagination((n) => {
                  let l = ah(t, n.pageIndex);
                  return (
                    (l = Math.max(
                      0,
                      Math.min(
                        l,
                        void 0 === e.options.pageCount || -1 === e.options.pageCount
                          ? Number.MAX_SAFE_INTEGER
                          : e.options.pageCount - 1
                      )
                    )),
                    { ...n, pageIndex: l }
                  );
                });
              }),
              (e.resetPageIndex = (t) => {
                var n, l;
                e.setPageIndex(
                  t
                    ? 0
                    : null !=
                        (n =
                          null == (l = e.initialState) || null == (l = l.pagination)
                            ? void 0
                            : l.pageIndex)
                      ? n
                      : 0
                );
              }),
              (e.resetPageSize = (t) => {
                var n, l;
                e.setPageSize(
                  t
                    ? 10
                    : null !=
                        (n =
                          null == (l = e.initialState) || null == (l = l.pagination)
                            ? void 0
                            : l.pageSize)
                      ? n
                      : 10
                );
              }),
              (e.setPageSize = (t) => {
                e.setPagination((e) => {
                  let n = Math.max(1, ah(t, e.pageSize)),
                    l = Math.floor((e.pageSize * e.pageIndex) / n);
                  return { ...e, pageIndex: l, pageSize: n };
                });
              }),
              (e.setPageCount = (t) =>
                e.setPagination((n) => {
                  var l;
                  let a = ah(t, null != (l = e.options.pageCount) ? l : -1);
                  return ("number" == typeof a && (a = Math.max(-1, a)), { ...n, pageCount: a });
                })),
              (e.getPageOptions = av(
                () => [e.getPageCount()],
                (e) => {
                  let t = [];
                  return (e && e > 0 && (t = [...Array(e)].fill(null).map((e, t) => t)), t);
                },
                aF(e.options, "debugTable", "getPageOptions")
              )),
              (e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0),
              (e.getCanNextPage = () => {
                let { pageIndex: t } = e.getState().pagination,
                  n = e.getPageCount();
                return -1 === n || (0 !== n && t < n - 1);
              }),
              (e.previousPage = () => e.setPageIndex((e) => e - 1)),
              (e.nextPage = () => e.setPageIndex((e) => e + 1)),
              (e.firstPage = () => e.setPageIndex(0)),
              (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
              (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
              (e.getPaginationRowModel = () =>
                (!e._getPaginationRowModel &&
                  e.options.getPaginationRowModel &&
                  (e._getPaginationRowModel = e.options.getPaginationRowModel(e)),
                e.options.manualPagination || !e._getPaginationRowModel)
                  ? e.getPrePaginationRowModel()
                  : e._getPaginationRowModel()),
              (e.getPageCount = () => {
                var t;
                return null != (t = e.options.pageCount)
                  ? t
                  : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
              }),
              (e.getRowCount = () => {
                var t;
                return null != (t = e.options.rowCount)
                  ? t
                  : e.getPrePaginationRowModel().rows.length;
              }));
          }
        },
        {
          getInitialState: (e) => ({ rowPinning: aG(), ...e }),
          getDefaultOptions: (e) => ({ onRowPinningChange: af("rowPinning", e) }),
          createRow: (e, t) => {
            ((e.pin = (n, l, a) => {
              let o = l
                  ? e.getLeafRows().map((e) => {
                      let { id: t } = e;
                      return t;
                    })
                  : [],
                i = new Set([
                  ...(a
                    ? e.getParentRows().map((e) => {
                        let { id: t } = e;
                        return t;
                      })
                    : []),
                  e.id,
                  ...o
                ]);
              t.setRowPinning((e) => {
                var t, l, a, o, r, u;
                return "bottom" === n
                  ? {
                      top: (null != (a = null == e ? void 0 : e.top) ? a : []).filter(
                        (e) => !(null != i && i.has(e))
                      ),
                      bottom: [
                        ...(null != (o = null == e ? void 0 : e.bottom) ? o : []).filter(
                          (e) => !(null != i && i.has(e))
                        ),
                        ...Array.from(i)
                      ]
                    }
                  : "top" === n
                    ? {
                        top: [
                          ...(null != (r = null == e ? void 0 : e.top) ? r : []).filter(
                            (e) => !(null != i && i.has(e))
                          ),
                          ...Array.from(i)
                        ],
                        bottom: (null != (u = null == e ? void 0 : e.bottom) ? u : []).filter(
                          (e) => !(null != i && i.has(e))
                        )
                      }
                    : {
                        top: (null != (t = null == e ? void 0 : e.top) ? t : []).filter(
                          (e) => !(null != i && i.has(e))
                        ),
                        bottom: (null != (l = null == e ? void 0 : e.bottom) ? l : []).filter(
                          (e) => !(null != i && i.has(e))
                        )
                      };
              });
            }),
              (e.getCanPin = () => {
                var n;
                let { enableRowPinning: l, enablePinning: a } = t.options;
                return "function" == typeof l ? l(e) : null == (n = null != l ? l : a) || n;
              }),
              (e.getIsPinned = () => {
                let n = [e.id],
                  { top: l, bottom: a } = t.getState().rowPinning,
                  o = n.some((e) => (null == l ? void 0 : l.includes(e))),
                  i = n.some((e) => (null == a ? void 0 : a.includes(e)));
                return o ? "top" : !!i && "bottom";
              }),
              (e.getPinnedIndex = () => {
                var n, l;
                let a = e.getIsPinned();
                if (!a) return -1;
                let o =
                  null == (n = "top" === a ? t.getTopRows() : t.getBottomRows())
                    ? void 0
                    : n.map((e) => {
                        let { id: t } = e;
                        return t;
                      });
                return null != (l = null == o ? void 0 : o.indexOf(e.id)) ? l : -1;
              }));
          },
          createTable: (e) => {
            ((e.setRowPinning = (t) =>
              null == e.options.onRowPinningChange ? void 0 : e.options.onRowPinningChange(t)),
              (e.resetRowPinning = (t) => {
                var n, l;
                return e.setRowPinning(
                  t
                    ? aG()
                    : null != (n = null == (l = e.initialState) ? void 0 : l.rowPinning)
                      ? n
                      : aG()
                );
              }),
              (e.getIsSomeRowsPinned = (t) => {
                var n, l, a;
                let o = e.getState().rowPinning;
                return t
                  ? !!(null == (n = o[t]) ? void 0 : n.length)
                  : !!(
                      (null == (l = o.top) ? void 0 : l.length) ||
                      (null == (a = o.bottom) ? void 0 : a.length)
                    );
              }),
              (e._getPinnedRows = (t, n, l) => {
                var a;
                return (
                  null == (a = e.options.keepPinnedRows) || a
                    ? (null != n ? n : []).map((t) => {
                        let n = e.getRow(t, !0);
                        return n.getIsAllParentsExpanded() ? n : null;
                      })
                    : (null != n ? n : []).map((e) => t.find((t) => t.id === e))
                )
                  .filter(Boolean)
                  .map((e) => ({ ...e, position: l }));
              }),
              (e.getTopRows = av(
                () => [e.getRowModel().rows, e.getState().rowPinning.top],
                (t, n) => e._getPinnedRows(t, n, "top"),
                aF(e.options, "debugRows", "getTopRows")
              )),
              (e.getBottomRows = av(
                () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
                (t, n) => e._getPinnedRows(t, n, "bottom"),
                aF(e.options, "debugRows", "getBottomRows")
              )),
              (e.getCenterRows = av(
                () => [
                  e.getRowModel().rows,
                  e.getState().rowPinning.top,
                  e.getState().rowPinning.bottom
                ],
                (e, t, n) => {
                  let l = new Set([...(null != t ? t : []), ...(null != n ? n : [])]);
                  return e.filter((e) => !l.has(e.id));
                },
                aF(e.options, "debugRows", "getCenterRows")
              )));
          }
        },
        {
          getInitialState: (e) => ({ rowSelection: {}, ...e }),
          getDefaultOptions: (e) => ({
            onRowSelectionChange: af("rowSelection", e),
            enableRowSelection: !0,
            enableMultiRowSelection: !0,
            enableSubRowSelection: !0
          }),
          createTable: (e) => {
            ((e.setRowSelection = (t) =>
              null == e.options.onRowSelectionChange ? void 0 : e.options.onRowSelectionChange(t)),
              (e.resetRowSelection = (t) => {
                var n;
                return e.setRowSelection(
                  t ? {} : null != (n = e.initialState.rowSelection) ? n : {}
                );
              }),
              (e.toggleAllRowsSelected = (t) => {
                e.setRowSelection((n) => {
                  t = void 0 !== t ? t : !e.getIsAllRowsSelected();
                  let l = { ...n },
                    a = e.getPreGroupedRowModel().flatRows;
                  return (
                    t
                      ? a.forEach((e) => {
                          e.getCanSelect() && (l[e.id] = !0);
                        })
                      : a.forEach((e) => {
                          delete l[e.id];
                        }),
                    l
                  );
                });
              }),
              (e.toggleAllPageRowsSelected = (t) =>
                e.setRowSelection((n) => {
                  let l = void 0 !== t ? t : !e.getIsAllPageRowsSelected(),
                    a = { ...n };
                  return (
                    e.getRowModel().rows.forEach((t) => {
                      aj(a, t.id, l, !0, e);
                    }),
                    a
                  );
                })),
              (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
              (e.getSelectedRowModel = av(
                () => [e.getState().rowSelection, e.getCoreRowModel()],
                (t, n) =>
                  Object.keys(t).length ? aX(e, n) : { rows: [], flatRows: [], rowsById: {} },
                aF(e.options, "debugTable", "getSelectedRowModel")
              )),
              (e.getFilteredSelectedRowModel = av(
                () => [e.getState().rowSelection, e.getFilteredRowModel()],
                (t, n) =>
                  Object.keys(t).length ? aX(e, n) : { rows: [], flatRows: [], rowsById: {} },
                aF(e.options, "debugTable", "getFilteredSelectedRowModel")
              )),
              (e.getGroupedSelectedRowModel = av(
                () => [e.getState().rowSelection, e.getSortedRowModel()],
                (t, n) =>
                  Object.keys(t).length ? aX(e, n) : { rows: [], flatRows: [], rowsById: {} },
                aF(e.options, "debugTable", "getGroupedSelectedRowModel")
              )),
              (e.getIsAllRowsSelected = () => {
                let t = e.getFilteredRowModel().flatRows,
                  { rowSelection: n } = e.getState(),
                  l = !!(t.length && Object.keys(n).length);
                return (l && t.some((e) => e.getCanSelect() && !n[e.id]) && (l = !1), l);
              }),
              (e.getIsAllPageRowsSelected = () => {
                let t = e.getPaginationRowModel().flatRows.filter((e) => e.getCanSelect()),
                  { rowSelection: n } = e.getState(),
                  l = !!t.length;
                return (l && t.some((e) => !n[e.id]) && (l = !1), l);
              }),
              (e.getIsSomeRowsSelected = () => {
                var t;
                let n = Object.keys(null != (t = e.getState().rowSelection) ? t : {}).length;
                return n > 0 && n < e.getFilteredRowModel().flatRows.length;
              }),
              (e.getIsSomePageRowsSelected = () => {
                let t = e.getPaginationRowModel().flatRows;
                return (
                  !e.getIsAllPageRowsSelected() &&
                  t
                    .filter((e) => e.getCanSelect())
                    .some((e) => e.getIsSelected() || e.getIsSomeSelected())
                );
              }),
              (e.getToggleAllRowsSelectedHandler = () => (t) => {
                e.toggleAllRowsSelected(t.target.checked);
              }),
              (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
                e.toggleAllPageRowsSelected(t.target.checked);
              }));
          },
          createRow: (e, t) => {
            ((e.toggleSelected = (n, l) => {
              let a = e.getIsSelected();
              t.setRowSelection((o) => {
                var i;
                if (((n = void 0 !== n ? n : !a), e.getCanSelect() && a === n)) return o;
                let r = { ...o };
                return (
                  aj(r, e.id, n, null == (i = null == l ? void 0 : l.selectChildren) || i, t),
                  r
                );
              });
            }),
              (e.getIsSelected = () => {
                let { rowSelection: n } = t.getState();
                return aU(e, n);
              }),
              (e.getIsSomeSelected = () => {
                let { rowSelection: n } = t.getState();
                return "some" === aK(e, n);
              }),
              (e.getIsAllSubRowsSelected = () => {
                let { rowSelection: n } = t.getState();
                return "all" === aK(e, n);
              }),
              (e.getCanSelect = () => {
                var n;
                return "function" == typeof t.options.enableRowSelection
                  ? t.options.enableRowSelection(e)
                  : null == (n = t.options.enableRowSelection) || n;
              }),
              (e.getCanSelectSubRows = () => {
                var n;
                return "function" == typeof t.options.enableSubRowSelection
                  ? t.options.enableSubRowSelection(e)
                  : null == (n = t.options.enableSubRowSelection) || n;
              }),
              (e.getCanMultiSelect = () => {
                var n;
                return "function" == typeof t.options.enableMultiRowSelection
                  ? t.options.enableMultiRowSelection(e)
                  : null == (n = t.options.enableMultiRowSelection) || n;
              }),
              (e.getToggleSelectedHandler = () => {
                let t = e.getCanSelect();
                return (n) => {
                  var l;
                  t && e.toggleSelected(null == (l = n.target) ? void 0 : l.checked);
                };
              }));
          }
        },
        {
          getDefaultColumnDef: () => aP,
          getInitialState: (e) => ({ columnSizing: {}, columnSizingInfo: az(), ...e }),
          getDefaultOptions: (e) => ({
            columnResizeMode: "onEnd",
            columnResizeDirection: "ltr",
            onColumnSizingChange: af("columnSizing", e),
            onColumnSizingInfoChange: af("columnSizingInfo", e)
          }),
          createColumn: (e, t) => {
            ((e.getSize = () => {
              var n, l, a;
              let o = t.getState().columnSizing[e.id];
              return Math.min(
                Math.max(
                  null != (n = e.columnDef.minSize) ? n : aP.minSize,
                  null != (l = null != o ? o : e.columnDef.size) ? l : aP.size
                ),
                null != (a = e.columnDef.maxSize) ? a : aP.maxSize
              );
            }),
              (e.getStart = av(
                (e) => [e, aH(t, e), t.getState().columnSizing],
                (t, n) => n.slice(0, e.getIndex(t)).reduce((e, t) => e + t.getSize(), 0),
                aF(t.options, "debugColumns", "getStart")
              )),
              (e.getAfter = av(
                (e) => [e, aH(t, e), t.getState().columnSizing],
                (t, n) => n.slice(e.getIndex(t) + 1).reduce((e, t) => e + t.getSize(), 0),
                aF(t.options, "debugColumns", "getAfter")
              )),
              (e.resetSize = () => {
                t.setColumnSizing((t) => {
                  let { [e.id]: n, ...l } = t;
                  return l;
                });
              }),
              (e.getCanResize = () => {
                var n, l;
                return (
                  (null == (n = e.columnDef.enableResizing) || n) &&
                  (null == (l = t.options.enableColumnResizing) || l)
                );
              }),
              (e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id));
          },
          createHeader: (e, t) => {
            ((e.getSize = () => {
              let t = 0,
                n = (e) => {
                  if (e.subHeaders.length) e.subHeaders.forEach(n);
                  else {
                    var l;
                    t += null != (l = e.column.getSize()) ? l : 0;
                  }
                };
              return (n(e), t);
            }),
              (e.getStart = () => {
                if (e.index > 0) {
                  let t = e.headerGroup.headers[e.index - 1];
                  return t.getStart() + t.getSize();
                }
                return 0;
              }),
              (e.getResizeHandler = (n) => {
                let l = t.getColumn(e.column.id),
                  a = null == l ? void 0 : l.getCanResize();
                return (o) => {
                  if (
                    !l ||
                    !a ||
                    (null == o.persist || o.persist(), aV(o) && o.touches && o.touches.length > 1)
                  )
                    return;
                  let i = e.getSize(),
                    r = e
                      ? e.getLeafHeaders().map((e) => [e.column.id, e.column.getSize()])
                      : [[l.id, l.getSize()]],
                    u = aV(o) ? Math.round(o.touches[0].clientX) : o.clientX,
                    s = {},
                    d = (e, n) => {
                      "number" == typeof n &&
                        (t.setColumnSizingInfo((e) => {
                          var l, a;
                          let o = "rtl" === t.options.columnResizeDirection ? -1 : 1,
                            i =
                              (n - (null != (l = null == e ? void 0 : e.startOffset) ? l : 0)) * o,
                            r = Math.max(
                              i / (null != (a = null == e ? void 0 : e.startSize) ? a : 0),
                              -0.999999
                            );
                          return (
                            e.columnSizingStart.forEach((e) => {
                              let [t, n] = e;
                              s[t] = Math.round(100 * Math.max(n + n * r, 0)) / 100;
                            }),
                            { ...e, deltaOffset: i, deltaPercentage: r }
                          );
                        }),
                        ("onChange" === t.options.columnResizeMode || "end" === e) &&
                          t.setColumnSizing((e) => ({ ...e, ...s })));
                    },
                    c = (e) => {
                      (d("end", e),
                        t.setColumnSizingInfo((e) => ({
                          ...e,
                          isResizingColumn: !1,
                          startOffset: null,
                          startSize: null,
                          deltaOffset: null,
                          deltaPercentage: null,
                          columnSizingStart: []
                        })));
                    },
                    m = n || ("u" > typeof document ? document : null),
                    g = {
                      moveHandler: (e) => d("move", e.clientX),
                      upHandler: (e) => {
                        (null == m || m.removeEventListener("mousemove", g.moveHandler),
                          null == m || m.removeEventListener("mouseup", g.upHandler),
                          c(e.clientX));
                      }
                    },
                    h = {
                      moveHandler: (e) => (
                        e.cancelable && (e.preventDefault(), e.stopPropagation()),
                        d("move", e.touches[0].clientX),
                        !1
                      ),
                      upHandler: (e) => {
                        var t;
                        (null == m || m.removeEventListener("touchmove", h.moveHandler),
                          null == m || m.removeEventListener("touchend", h.upHandler),
                          e.cancelable && (e.preventDefault(), e.stopPropagation()),
                          c(null == (t = e.touches[0]) ? void 0 : t.clientX));
                      }
                    },
                    f = !!(function () {
                      if ("boolean" == typeof aW) return aW;
                      let e = !1;
                      try {
                        let t = () => {};
                        (window.addEventListener("test", t, {
                          get passive() {
                            return ((e = !0), !1);
                          }
                        }),
                          window.removeEventListener("test", t));
                      } catch (t) {
                        e = !1;
                      }
                      return (aW = e);
                    })() && { passive: !1 };
                  (aV(o)
                    ? (null == m || m.addEventListener("touchmove", h.moveHandler, f),
                      null == m || m.addEventListener("touchend", h.upHandler, f))
                    : (null == m || m.addEventListener("mousemove", g.moveHandler, f),
                      null == m || m.addEventListener("mouseup", g.upHandler, f)),
                    t.setColumnSizingInfo((e) => ({
                      ...e,
                      startOffset: u,
                      startSize: i,
                      deltaOffset: 0,
                      deltaPercentage: 0,
                      columnSizingStart: r,
                      isResizingColumn: l.id
                    })));
                };
              }));
          },
          createTable: (e) => {
            ((e.setColumnSizing = (t) =>
              null == e.options.onColumnSizingChange ? void 0 : e.options.onColumnSizingChange(t)),
              (e.setColumnSizingInfo = (t) =>
                null == e.options.onColumnSizingInfoChange
                  ? void 0
                  : e.options.onColumnSizingInfoChange(t)),
              (e.resetColumnSizing = (t) => {
                var n;
                e.setColumnSizing(t ? {} : null != (n = e.initialState.columnSizing) ? n : {});
              }),
              (e.resetHeaderSizeInfo = (t) => {
                var n;
                e.setColumnSizingInfo(
                  t ? az() : null != (n = e.initialState.columnSizingInfo) ? n : az()
                );
              }),
              (e.getTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getLeftTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getLeftHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getCenterTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getCenterHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getRightTotalSize = () => {
                var t, n;
                return null !=
                  (t =
                    null == (n = e.getRightHeaderGroups()[0])
                      ? void 0
                      : n.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }));
          }
        }
      ],
      a0 = [],
      a1 = "(max-width: 600px)",
      a2 = { XSmall: 32, Small: 48, Medium: 60 },
      a6 = "text-truncate-end",
      a3 = {
        backgroundColor: "color-mix(in srgb, var(--color-surface-100) 72%, transparent)",
        zIndex: 5
      },
      a4 = { filter: "blur(2.5px)" },
      a5 = {
        XSmall: "padding-x-small padding-y-xsmall",
        Small: "padding-x-medium padding-y-small",
        Medium: "padding-x-large padding-y-medium"
      },
      a7 = { XSmall: "text-body-small", Small: "text-body-small", Medium: "text-body-medium" },
      a9 = {
        XSmall: "flex items-center gap-xsmall",
        Small: "flex items-center gap-xsmall",
        Medium: "flex items-center gap-small"
      },
      a8 = { XSmall: "XSmall", Small: "XSmall", Medium: "Small" },
      oe = { XSmall: "XSmall", Small: "XSmall", Medium: "Small" },
      ot = "padding-bottom-large",
      on = "[&>div]:bg-none",
      ol = "flex width-full items-center justify-between gap-medium padding-y-medium",
      oa = "".concat(ol, " bg-surface-100"),
      oo = "".concat(ol, " bg-shift-200"),
      oi = "shrink-0 text-align-x-start",
      or = "flex grow-1 min-width-0 justify-end",
      ou = "min-width-0 text-align-x-start",
      os = { menu: "top-center", item: "left-center" },
      od = { overflowY: "hidden", position: "relative", width: "100%" },
      oc = { display: "grid", width: "100%" },
      om = { backgroundColor: "var(--color-surface-100)", display: "grid" },
      og = { overflowX: "hidden", overflowY: "hidden", scrollbarGutter: "stable", width: "100%" },
      oh = { display: "grid" },
      of = { display: "grid" },
      op = { alignItems: "center", display: "flex", minWidth: 0 },
      ov = { display: "flex", flexDirection: "column", width: "100%" },
      oF = { boxSizing: "border-box", height: "auto", minWidth: 0 },
      oC = {
        ...oF,
        borderTopLeftRadius: "var(--radius-medium)",
        borderTopRightRadius: "var(--radius-medium)"
      },
      oS = {
        ...oF,
        borderBottom: "none",
        borderBottomLeftRadius: "var(--radius-medium)",
        borderBottomRightRadius: "var(--radius-medium)"
      },
      oE = { ...oC, ...oS },
      ob = (e, t) => (e ? (t ? oE : oC) : t ? oS : oF),
      oA = { display: "none" },
      oy = { start: "flex-start", center: "center", end: "flex-end" },
      ox = {
        display: "block",
        overflowY: "auto",
        position: "relative",
        scrollbarGutter: "stable",
        width: "100%"
      },
      oM = { display: "block", pointerEvents: "none", width: "100%" },
      oN = { borderBottom: "none", display: "block", height: "100%", padding: 0, width: "100%" },
      ow = { display: "grid", left: 0, position: "absolute", top: 0, width: "100%" },
      oD = { display: "block", width: "100%" },
      oB = { boxSizing: "border-box", display: "block", height: "auto", width: "100%" },
      oL = { display: "block", left: 0, position: "absolute", top: 0, width: "100%" },
      oR = {
        alignItems: "center",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        left: 0,
        minHeight: "var(--size-1200)",
        position: "sticky",
        width: "100%"
      },
      oO = { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
      ok = { overflowWrap: "anywhere", whiteSpace: "normal" },
      oI = { whiteSpace: "nowrap" },
      oT = { borderBottom: "none" },
      oP = {
        backgroundColor: "var(--color-surface-100)",
        borderColor: "var(--color-stroke-default)",
        borderRadius: "var(--radius-medium)",
        borderStyle: "solid",
        borderWidth: "var(--stroke-standard)",
        boxSizing: "border-box"
      },
      oz = (e) => {
        if ("function" != typeof window.matchMedia) return () => void 0;
        let t = window.matchMedia(a1);
        return (t.addEventListener("change", e), () => t.removeEventListener("change", e));
      },
      oW = () => "function" == typeof window.matchMedia && window.matchMedia(a1).matches,
      oV = () => !1,
      oH = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = Number.parseFloat(e);
        return Number.isFinite(n) ? n : t;
      },
      o_ = (e) => {
        let t = getComputedStyle(e);
        if (t.fontFamily && t.fontSize)
          return {
            font: ""
              .concat(t.fontStyle || "normal", " ")
              .concat(t.fontVariant || "normal", " ")
              .concat(t.fontWeight || "400", " ")
              .concat(t.fontSize, " ")
              .concat(t.fontFamily),
            horizontalPadding: oH(t.paddingLeft) + oH(t.paddingRight) || 48,
            letterSpacing: "normal" === t.letterSpacing ? 0 : oH(t.letterSpacing)
          };
      },
      oG = (e, t, n) => {
        if (!e) return t;
        let l =
          "menu" === n
            ? r.default.createElement("span", { className: "inline-flex" }, t)
            : r.default.createElement("div", { className: "width-full" }, t);
        return r.default.createElement(
          eA.Tooltip,
          { description: e.description, position: os[n], title: e.title },
          r.default.createElement(eA.TooltipTrigger, { asChild: !0 }, l)
        );
      },
      oj = (e) => {
        let { item: t, onClose: n } = e,
          l = (0, r.useCallback)(
            (e) => {
              var l;
              ("link" === t.kind && t.onSelect && (null == e || e.preventDefault()),
                null == (l = t.onSelect) || l.call(t),
                n());
            },
            [t, n]
          ),
          a =
            "link" === t.kind
              ? r.default.createElement(eQ, {
                  as: "a",
                  disabled: t.disabled,
                  href: t.disabled ? void 0 : t.href,
                  leading: t.leading,
                  onSelect: l,
                  title: t.label,
                  trailing: t.trailing,
                  value: t.id
                })
              : r.default.createElement(eQ, {
                  disabled: t.disabled,
                  leading: t.leading,
                  onSelect: l,
                  title: t.label,
                  trailing: t.trailing,
                  value: t.id
                });
        return r.default.createElement(r.default.Fragment, null, oG(t.tooltip, a, "item"));
      },
      oX = (e) => {
        let { cell: t } = e,
          [n, l] = (0, r.useState)(!1),
          a = !0 === t.disabled || 0 === t.items.length,
          o = (0, r.useCallback)(() => l(!1), []),
          i = (0, r.useCallback)(
            (e) => {
              a || l(e);
            },
            [a]
          ),
          u = r.default.createElement(
            e0,
            { asChild: !0 },
            r.default.createElement(Y, {
              ariaLabel: t.menuAriaLabel,
              icon: "icon-filled-three-dots-vertical",
              isDisabled: a,
              size: "Small",
              variant: "Utility"
            })
          );
        return r.default.createElement(
          e$,
          { open: !a && n, onOpenChange: i },
          oG(t.tooltip, u, "menu"),
          r.default.createElement(
            e1,
            { align: "end", ariaLabel: t.menuAriaLabel, side: "bottom" },
            r.default.createElement(
              eq,
              { size: "Small" },
              r.default.createElement(
                "div",
                { className: "padding-small" },
                t.items.map((e) => r.default.createElement(oj, { item: e, key: e.id, onClose: o }))
              )
            )
          )
        );
      },
      oU = (e) => {
        var t, n, l;
        let a = (null != (t = e.displayString) ? t : (e) => String(e))(e.value);
        return null !=
          (n =
            null == (l = e.renderContainer) ? void 0 : l.call(e, { children: a, value: e.value }))
          ? n
          : a;
      },
      oK = () => void 0,
      oq = (e) => null == e || !1 === e || "" === e,
      oY = (e) => {
        let { getExpandedRowId: t, isSmallScreen: n, rows: l, size: a, textStyles: o } = e,
          i = (0, r.useRef)(null),
          [u, s] = (0, r.useState)(),
          d = (0, r.useMemo)(() => {
            let e = l[0],
              t = [];
            if (e) for (let n in e) t.push({ cell: e[n], id: n });
            return t;
          }, [l]),
          c = (0, r.useMemo)(
            () =>
              am({ availableWidth: u, columns: d, isSortingEnabled: !1, rows: l, textStyles: o }),
            [u, d, l, o]
          ),
          m = (0, r.useMemo)(() => {
            if (t) return l.map((e) => ({ key: t(e), row: e }));
            let e = new Map();
            return l.map((t) => {
              var n;
              let l = JSON.stringify(
                  d.map((e) => {
                    let { id: n } = e,
                      l = t[n];
                    return "value" === l.type
                      ? [n, typeof l.value, l.value]
                      : [n, "display", l.display];
                  })
                ),
                a = null != (n = e.get(l)) ? n : 0;
              return (e.set(l, a + 1), { key: "".concat(l, "-").concat(a), row: t });
            });
          }, [d, t, l]),
          g = (0, r.useMemo)(
            () => ({ ...oc, ...(!n ? { minWidth: c.tableWidth } : void 0) }),
            [c.tableWidth, n]
          ),
          h = (0, r.useMemo)(
            () => (n ? ov : { ...of, gridTemplateColumns: c.gridTemplateColumns }),
            [c.gridTemplateColumns, n]
          );
        return (
          (0, r.useEffect)(() => {
            let e = i.current;
            if (!e) return;
            let t = (t) => {
              var n, l;
              let a =
                null != (n = null == t || null == (l = t[0]) ? void 0 : l.contentRect.width)
                  ? n
                  : e.clientWidth;
              s(a > 0 ? a : void 0);
            };
            if ((t(), "u" < typeof ResizeObserver)) return;
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
          }, []),
          r.default.createElement(
            "div",
            { className: n ? on : void 0, ref: i },
            r.default.createElement(
              ei,
              { size: a, style: g, variant: "Divided" },
              r.default.createElement(
                er,
                { style: n ? oA : oh },
                r.default.createElement(
                  es,
                  { style: h },
                  d.map((e) => {
                    var t, n;
                    let { cell: l, id: a } = e;
                    return r.default.createElement(
                      ed,
                      {
                        align: null != (t = l.align) ? t : "display" === l.type ? "end" : "start",
                        key: a,
                        style: !1 === l.headerDivider ? oT : void 0
                      },
                      null != (n = l.header) ? n : ""
                    );
                  })
                )
              ),
              r.default.createElement(
                eu,
                { style: oh },
                m.map((e) => {
                  let { key: t, row: l } = e,
                    o = d.some((e) => {
                      let { id: t } = e,
                        n = l[t];
                      return (
                        "value" === n.type &&
                        "string" == typeof n.value &&
                        "truncate" !== n.textOverflow
                      );
                    }),
                    i = d
                      .map((e) => {
                        var t;
                        let { id: n } = e;
                        return {
                          cell: l[n],
                          content:
                            "value" === (t = l[n]).type
                              ? oU(t)
                              : "menu" === t.display
                                ? r.default.createElement(oX, { cell: t })
                                : t.render({ canExpand: !1, isExpanded: !1, onToggleExpanded: oK }),
                          id: n
                        };
                      })
                      .filter((e) => {
                        let { content: t } = e;
                        return !n || !oq(t);
                      });
                  return r.default.createElement(
                    es,
                    { className: n ? ot : void 0, key: t, style: h },
                    i.map((e, t) => {
                      var l, u;
                      let { cell: s, content: d, id: c } = e,
                        m = null != (l = s.align) ? l : "display" === s.type ? "end" : "start",
                        g = "value" === s.type && "string" == typeof s.value,
                        h = g && "truncate" === s.textOverflow,
                        f = g && !h;
                      return r.default.createElement(
                        ec,
                        {
                          align: n ? "start" : m,
                          className: n ? (0 === t ? oo : oa) : h ? a6 : void 0,
                          key: c,
                          style: n
                            ? ob(0 === t, t === i.length - 1)
                            : {
                                ...op,
                                ...(f ? ok : h ? oO : oI),
                                ...(o ? { height: "auto", minHeight: a2[a] } : void 0),
                                justifyContent: oy[m]
                              }
                        },
                        n
                          ? r.default.createElement(
                              r.default.Fragment,
                              null,
                              r.default.createElement(
                                "div",
                                { className: oi },
                                null != (u = s.header) ? u : ""
                              ),
                              r.default.createElement(
                                "div",
                                { className: or },
                                r.default.createElement(
                                  "div",
                                  { className: ou, style: f ? ok : h ? oO : oI },
                                  d
                                )
                              )
                            )
                          : d
                      );
                    })
                  );
                })
              )
            )
          )
        );
      },
      oQ = (e) => {
        let {
            columnGrid: t,
            isSmallScreen: n,
            isVirtual: l = !1,
            measureElement: a,
            measurementCellRef: o,
            minimumHeight: i,
            row: u,
            transform: s,
            virtualIndex: d
          } = e,
          c = u.getVisibleCells(),
          m = c.some((e) => {
            let t = u.original[e.column.id];
            return (
              "value" === t.type && "string" == typeof t.value && "truncate" !== t.textOverflow
            );
          }),
          g = c
            .map((e) => {
              let t = u.original[e.column.id];
              return {
                cell: e,
                cellConfig: t,
                content:
                  "display" === t.type
                    ? "menu" === t.display
                      ? r.default.createElement(oX, { cell: t })
                      : t.render({
                          canExpand: u.getCanExpand(),
                          isExpanded: u.getIsExpanded(),
                          onToggleExpanded: u.getToggleExpandedHandler()
                        })
                    : oU(t)
              };
            })
            .filter((e) => {
              let { content: t } = e;
              return !n || !oq(t);
            });
        return r.default.createElement(
          es,
          {
            className: n ? ot : void 0,
            "data-index": null != d ? d : u.index,
            ref: a,
            style: { ...(l ? ow : of), ...(n ? ov : { gridTemplateColumns: t }), transform: s }
          },
          g.map((e, t) => {
            var l, a;
            let { cell: u, cellConfig: s, content: d } = e,
              c = null != (l = s.align) ? l : "display" === s.type ? "end" : "start",
              h = "value" === s.type && "string" == typeof s.value,
              f = h && "truncate" === s.textOverflow,
              p = h && !f;
            return r.default.createElement(
              ec,
              {
                align: n ? "start" : c,
                className: n ? (0 === t ? oo : oa) : f ? a6 : void 0,
                key: u.id,
                ref: 0 === t ? o : void 0,
                style: n
                  ? ob(0 === t, t === g.length - 1)
                  : {
                      ...op,
                      ...(p ? ok : f ? oO : oI),
                      ...(m ? { height: "auto", minHeight: i } : void 0),
                      justifyContent: oy[c]
                    }
              },
              n
                ? r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(
                      "div",
                      { className: oi },
                      null != (a = s.header) ? a : ""
                    ),
                    r.default.createElement(
                      "div",
                      { className: or },
                      r.default.createElement(
                        "div",
                        { className: ou, style: p ? ok : f ? oO : oI },
                        d
                      )
                    )
                  )
                : d
            );
          })
        );
      },
      oZ = (e) => {
        let {
          columnCount: t,
          expandedRows: n,
          getExpandedRowId: l,
          isSmallScreen: a,
          isVirtual: o = !1,
          measureElement: i,
          size: u,
          textStyles: s,
          transform: d,
          virtualIndex: c
        } = e;
        return r.default.createElement(
          es,
          { "data-index": c, ref: i, style: { ...(o ? oL : oD), transform: d } },
          r.default.createElement(
            ec,
            { colSpan: t, style: oB },
            r.default.createElement(oY, {
              getExpandedRowId: l,
              isSmallScreen: a,
              rows: n,
              size: u,
              textStyles: s
            })
          )
        );
      },
      oJ = (e) => {
        let { cellStyle: t, children: n, columnCount: l } = e;
        return r.default.createElement(
          es,
          { style: oD },
          r.default.createElement(ec, { align: "center", colSpan: l, style: t }, n)
        );
      },
      o$ = new Set(["a"]),
      o0 = "text-no-wrap text-truncate-end min-width-0 max-width-full",
      o1 = "".concat(o0, " focus-visible:outline-focus"),
      o2 = (e) => {
        var t;
        let { text: n, className: l } = e,
          a = null != (t = e.as) ? t : "span",
          o = "a" === e.as ? e.href : void 0,
          i = "a" === e.as ? e.onClick : void 0,
          u = (0, r.useRef)(null),
          s = (0, r.useRef)(null),
          [d, c] = (0, r.useState)(!1),
          m = (0, r.useCallback)((e) => {
            let t = e.scrollWidth > e.clientWidth;
            c((e) => (e === t ? e : t));
          }, []),
          g = (0, r.useCallback)(
            (e) => {
              var t;
              if (
                (null == (t = s.current) || t.disconnect(),
                (s.current = null),
                (u.current = e),
                e && (m(e), "u" > typeof ResizeObserver))
              ) {
                let t = new ResizeObserver(() => m(e));
                (t.observe(e), (s.current = t));
              }
            },
            [m]
          );
        ((0, r.useEffect)(() => {
          let e = u.current;
          e && m(e);
        }, [m, n]),
          (0, r.useEffect)(
            () => () => {
              var e;
              return null == (e = s.current) ? void 0 : e.disconnect();
            },
            []
          ));
        let h = o$.has(a),
          f = d && !h ? 0 : void 0,
          p = (function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return t.filter((e) => void 0 !== e && e.length > 0).join(" ");
          })(d && !h ? o1 : o0, "span" === a ? "block" : void 0, l),
          v =
            "a" === a
              ? r.default.createElement(
                  "a",
                  { ref: g, className: p, href: o, tabIndex: f, onClick: i },
                  r.default.createElement("bdi", null, n)
                )
              : "h1" === a
                ? r.default.createElement(
                    "h1",
                    { ref: g, className: p, tabIndex: f },
                    r.default.createElement("bdi", null, n)
                  )
                : r.default.createElement(
                    "span",
                    { ref: g, className: p, tabIndex: f },
                    r.default.createElement("bdi", null, n)
                  );
        return d
          ? r.default.createElement(
              eA.Tooltip,
              { title: n, position: "top-center" },
              r.default.createElement(eA.TooltipTrigger, { asChild: !0 }, v)
            )
          : v;
      },
      o6 = (e, t, n) =>
        e && !t
          ? r.default.createElement(
              eA.Tooltip,
              { title: e, position: "bottom-end" },
              r.default.createElement(eA.TooltipTrigger, { asChild: !0 }, n)
            )
          : r.default.createElement(r.default.Fragment, null, n),
      o3 = (e) => {
        let { action: t } = e;
        switch (t.kind) {
          case "button":
            return r.default.createElement(o4, { action: t });
          case "link":
            return r.default.createElement(o5, { action: t });
          case "menu":
            return r.default.createElement(o7, { action: t });
          case "custom":
            return r.default.createElement(r.default.Fragment, null, t.render());
          default:
            return null;
        }
      },
      o4 = (e) => {
        var t, n;
        let { action: l } = e,
          { disabled: a, icon: o, label: i, onClick: u, testId: s, tooltip: d } = l,
          c = o6(
            d,
            a,
            r.default.createElement(
              eF.Button,
              {
                onClick: u,
                variant: "Standard",
                size: "Medium",
                isDisabled: a,
                className: o ? "min-width-fit" : void 0,
                "aria-label": o ? i : void 0,
                "data-testid": s
              },
              null != o ? o : i
            )
          );
        return r.default.createElement(
          r.default.Fragment,
          null,
          null !=
            (t = null == (n = l.renderButton) ? void 0 : n.call(l, { action: l, defaultButton: c }))
            ? t
            : c
        );
      },
      o5 = (e) => {
        var t, n;
        let { action: l } = e,
          { disabled: a, href: o, icon: i, label: u, rel: s, target: d, testId: c, tooltip: m } = l,
          g = o6(
            m,
            a,
            r.default.createElement(
              eF.Button,
              {
                as: "a",
                href: a ? void 0 : o,
                target: d,
                rel: s,
                variant: "Standard",
                size: "Small",
                isDisabled: a,
                className: i ? "min-width-fit" : void 0,
                "aria-label": i ? u : void 0,
                "data-testid": c
              },
              null != i ? i : u
            )
          );
        return r.default.createElement(
          r.default.Fragment,
          null,
          null !=
            (t = null == (n = l.renderLink) ? void 0 : n.call(l, { action: l, defaultLink: g }))
            ? t
            : g
        );
      },
      o7 = (e) => {
        var t;
        let { action: n } = e,
          { disabled: l, items: a, label: o, renderMenu: i, testId: u, tooltip: s } = n,
          [d, c] = (0, r.useState)(!1),
          m = (0, r.useCallback)(() => {
            c(!1);
          }, []),
          g = r.default.createElement(
            e0,
            { asChild: !0 },
            r.default.createElement(Y, {
              icon: "icon-filled-three-dots-vertical",
              variant: "Standard",
              size: "Small",
              ariaLabel: o,
              isDisabled: l,
              "data-testid": u
            })
          ),
          h = r.default.createElement(
            r.default.Fragment,
            null,
            r.default.createElement(
              e$,
              { open: d, onOpenChange: c },
              s && !l
                ? r.default.createElement(
                    eA.Tooltip,
                    { title: s, position: "bottom-end" },
                    r.default.createElement(eA.TooltipTrigger, { asChild: !0 }, g)
                  )
                : g,
              r.default.createElement(
                e1,
                { side: "bottom", align: "end", ariaLabel: o },
                r.default.createElement(
                  eq,
                  { size: "Medium" },
                  r.default.createElement(
                    eY,
                    null,
                    a.map((e) => r.default.createElement(o9, { action: e, key: e.id, onClose: m }))
                  )
                )
              )
            ),
            a.map((e) =>
              "custom" === e.kind && e.renderOverlay
                ? r.default.createElement(
                    r.default.Fragment,
                    { key: "".concat(e.id, "-overlay") },
                    e.renderOverlay()
                  )
                : null
            )
          );
        return r.default.createElement(
          r.default.Fragment,
          null,
          null != (t = null == i ? void 0 : i({ action: n, items: a })) ? t : h
        );
      },
      o9 = (e) => {
        let { action: t, onClose: n } = e,
          l = (0, r.useCallback)(() => {
            ("button" === t.kind && t.onClick(), n());
          }, [t, n]);
        return "button" === t.kind
          ? r.default.createElement(eQ, {
              value: t.id,
              title: t.label,
              disabled: t.disabled,
              onSelect: l,
              "data-testid": t.testId
            })
          : "link" === t.kind
            ? r.default.createElement(eQ, {
                as: "a",
                value: t.id,
                title: t.label,
                href: t.disabled ? void 0 : t.href,
                target: t.target,
                rel: t.rel,
                disabled: t.disabled,
                onSelect: n,
                "data-testid": t.testId
              })
            : "custom" === t.kind
              ? r.default.createElement(r.default.Fragment, null, t.render({ closeMenu: n }))
              : null;
      };
    var o8 = (0, r.memo)((e) => {
      let { actions: t } = e;
      return t.length
        ? r.default.createElement(
            r.default.Fragment,
            null,
            t.map((e) => r.default.createElement(o3, { action: e, key: e.id }))
          )
        : null;
    });
    let ie = (0, r.createContext)(null),
      it = () => (0, r.useContext)(ie),
      il = (0, r.createContext)(Object.freeze({}));
    var ia =
      (((tm = ia || {}).Loading = "Loading"),
      (tm.NoData = "NoData"),
      (tm.Error = "Error"),
      (tm.NoAccess = "NoAccess"),
      tm);
    let io = (0, s.makeStyles)()((e) => ({
        container: {
          textAlign: "center",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          display: "grid",
          placeItems: "center",
          pointerEvents: "none"
        },
        content: {
          pointerEvents: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: e.spacing(1)
        },
        icon: { fontSize: 32, color: e.palette.content.muted }
      })),
      ii = (e) => {
        let { status: t, description: n, secondaryDescription: l } = e,
          {
            classes: { container: a, content: o, icon: i }
          } = io(),
          u = t === ia.Loading,
          s = ((e) => {
            switch (e) {
              case ia.NoData:
                return r.default.createElement(C.HelpOutlineOutlinedIcon, { fontSize: "inherit" });
              case ia.Error:
                return r.default.createElement(F.CancelOutlinedIcon, { fontSize: "inherit" });
              case ia.NoAccess:
                return r.default.createElement(v.LockIcon, { fontSize: "inherit" });
              case ia.Loading:
              default:
                return null;
            }
          })(t);
        return r.default.createElement(
          f.Container,
          { disableGutters: !0, classes: { root: a } },
          r.default.createElement(
            "div",
            { className: o },
            u ? r.default.createElement(p.CircularProgress, null) : null,
            s ? r.default.createElement("span", { className: i }, s) : null,
            r.default.createElement(m.Typography, { display: "block", variant: "h6" }, n),
            r.default.createElement(m.Typography, { display: "block", variant: "body2" }, l)
          )
        );
      },
      ir = (0, s.makeStyles)()((e) => ({
        titleContainer: { display: "flex", justifyContent: "space-between" },
        card: {
          position: "relative",
          transition: "border-color 120ms ease, box-shadow 120ms ease"
        },
        draggingCard: {
          borderColor: e.palette.actionV2.primaryBrand.fill,
          boxShadow: "0 0 0 1px ".concat(e.palette.actionV2.primaryBrand.fill)
        },
        titleContent: {
          lineHeight: "34px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          marginRight: "4px",
          overflow: "hidden",
          minWidth: 0
        },
        titleLabel: { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" },
        tooltipIcon: { verticalAlign: "middle", margin: "0 0 2px 4px" },
        cardHeader: { padding: "24px 24px 0px" },
        cardHeaderContent: { maxWidth: "100%" },
        cardContent: { padding: "8px 16px 24px" },
        cardActions: { padding: "0 0 0 4px", alignSelf: "flex-start", flexShrink: 0 },
        footerContainer: { display: "inline-flex", alignItems: "center", padding: "16px 8px 0" },
        mobileControlsRow: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "8px",
          padding: "8px 24px 0",
          [e.breakpoints.up("Medium")]: { display: "none" }
        }
      }));
    var iu = (0, r.memo)((e) => {
      var t;
      let {
          children: n,
          titleLabel: l,
          titleTooltipLabel: a,
          titleSuffix: o,
          subTitle: i,
          chartControl: u,
          headerActionItems: s,
          headerActions: c,
          downloadAction: g,
          overflowMenuContent: p,
          secondaryAction: v,
          footerContent: F,
          abnormalState: C,
          chartBanner: M,
          slots: N
        } = e,
        {
          classes: {
            titleContainer: w,
            card: D,
            draggingCard: B,
            titleContent: L,
            titleLabel: R,
            tooltipIcon: O,
            cardHeader: k,
            cardHeaderContent: I,
            cardContent: T,
            cardActions: P,
            footerContainer: z,
            mobileControlsRow: W
          },
          cx: V
        } = ir(),
        H = (0, h.useMediaQuery)((e) => e.breakpoints.down("Medium")),
        _ = it(),
        G = (0, r.useContext)(il),
        j = null != (t = null == N ? void 0 : N.watermark) ? t : G.watermark,
        X = (0, r.useMemo)(() => {
          var e;
          let t = !!C,
            n = void 0 !== c,
            i = [];
          (v &&
            i.push({
              id: "secondary",
              kind: "button",
              label: v.label,
              onClick: v.onClick,
              tooltip: v.tooltip,
              renderButton: v.Wrapper
                ? (e) => {
                    let { defaultButton: t } = e,
                      n = v.Wrapper;
                    return n ? r.default.createElement(n, null, t) : t;
                  }
                : void 0
            }),
            !p &&
              g &&
              i.push({
                id: "download",
                kind: "button",
                label: null != (e = g.tooltip) ? e : "",
                onClick: g.onClick,
                tooltip: g.tooltip,
                icon: r.default.createElement(S.DownloadIcon, { fontSize: "small" }),
                disabled: t,
                testId: "chart-download-button"
              }),
            p &&
              i.push({
                id: "legacy-overflow-menu",
                kind: "custom",
                label: "Overflow menu",
                render: () => p
              }));
          let u = null != s ? s : i,
            h = n ? null !== c && !1 !== c : u.length > 0;
          return r.default.createElement(
            f.Container,
            { disableGutters: !0, classes: { root: w }, maxWidth: !1 },
            r.default.createElement(
              m.Typography,
              { variant: "subtitle1", classes: { root: L } },
              r.default.createElement(o2, { text: l, className: R }),
              a
                ? r.default.createElement(
                    d.Tooltip,
                    { title: a, arrow: !0 },
                    r.default.createElement(E.InfoOutlinedIcon, { classes: { root: O } })
                  )
                : null,
              o
            ),
            h &&
              r.default.createElement(
                b.a,
                { classes: { root: P } },
                n ? c : r.default.createElement(o8, { actions: u })
              )
          );
        }, [C, P, g, s, c, p, v, w, L, l, R, o, a, O]),
        U = (0, r.useMemo)(
          () => (H && u ? r.default.createElement("div", { className: W }, u) : null),
          [u, H, W]
        );
      return r.default.createElement(
        A.Card,
        {
          variant: "outlined",
          classes: { root: V(D, { [B]: !!(null == _ ? void 0 : _.isDragging) }) }
        },
        j,
        r.default.createElement(y.CardHeader, {
          title: X,
          classes: { root: k, content: I },
          disableTypography: !0,
          subheader: i
        }),
        U,
        M && r.default.createElement(e8, M),
        r.default.createElement(
          x.CardContent,
          { classes: { root: T } },
          r.default.createElement(tP, { value: !!C }, n),
          !C && F ? r.default.createElement("div", { className: z }, F) : null,
          C ? r.default.createElement(ii, C) : null
        )
      );
    });
    let is =
        "M16.6925 10.4422L10.4425 16.6922C10.3845 16.7503 10.3155 16.7963 10.2397 16.8277C10.1638 16.8592 10.0825 16.8754 10.0003 16.8754C9.91823 16.8754 9.83691 16.8592 9.76104 16.8277C9.68517 16.7963 9.61623 16.7503 9.55816 16.6922C9.50009 16.6341 9.45403 16.5652 9.4226 16.4893C9.39117 16.4134 9.375 16.3321 9.375 16.25C9.375 16.1679 9.39117 16.0866 9.4226 16.0107C9.45403 15.9348 9.50009 15.8659 9.55816 15.8078L15.8082 9.55782C15.8662 9.49975 15.9352 9.45368 16.011 9.42226C16.0869 9.39083 16.1682 9.37466 16.2503 9.37466C16.3325 9.37466 16.4138 9.39083 16.4897 9.42226C16.5655 9.45368 16.6345 9.49975 16.6925 9.55782C16.7506 9.61588 16.7967 9.68482 16.8281 9.76069C16.8595 9.83656 16.8757 9.91788 16.8757 10C16.8757 10.0821 16.8595 10.1634 16.8281 10.2393C16.7967 10.3152 16.7506 10.3841 16.6925 10.4422ZM15.4425 2.68282C15.3845 2.62471 15.3156 2.57861 15.2397 2.54715C15.1638 2.5157 15.0825 2.49951 15.0003 2.49951C14.9182 2.49951 14.8369 2.5157 14.761 2.54715C14.6851 2.57861 14.6162 2.62471 14.5582 2.68282L2.68316 14.5578C2.56588 14.6751 2.5 14.8342 2.5 15C2.5 15.1659 2.56588 15.3249 2.68316 15.4422C2.80044 15.5595 2.9595 15.6254 3.12535 15.6254C3.2912 15.6254 3.45026 15.5595 3.56753 15.4422L15.4425 3.56719C15.5006 3.50915 15.5467 3.44021 15.5782 3.36434C15.6097 3.28847 15.6258 3.20714 15.6258 3.125C15.6258 3.04287 15.6097 2.96154 15.5782 2.88567C15.5467 2.80979 15.5006 2.74086 15.4425 2.68282Z",
      id = (0, s.makeStyles)()((e) => ({
        container: { position: "relative", overflow: "visible" },
        dragHandle: {
          position: "absolute",
          left: "50%",
          top: 0,
          transform: "translate(-50%, -50%)",
          zIndex: e.zIndex.speedDial,
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 120ms ease"
        },
        dragHandleVisible: { opacity: 1, pointerEvents: "auto" },
        draggingContainer: { opacity: 0.72, zIndex: e.zIndex.modal },
        dropTargetHighlight: {
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 2,
          pointerEvents: "none",
          backgroundColor: "rgba(59, 130, 246, 0.12)",
          boxShadow: "inset 0 0 0 1px rgba(59, 130, 246, 0.45)",
          borderRadius: "8px",
          transition: "background-color 120ms ease, box-shadow 120ms ease"
        },
        resizeHandle: {
          position: "absolute",
          bottom: "6px",
          zIndex: e.zIndex.speedDial,
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 120ms ease"
        },
        resizeHandleLeft: { left: "6px", cursor: "w-resize" },
        resizeHandleRight: { right: "6px", cursor: "e-resize" },
        resizeHandleVisible: { opacity: 1, pointerEvents: "auto" },
        resizeHandleButton: {
          padding: 0,
          minWidth: 0,
          backgroundColor: "transparent !important",
          cursor: "ew-resize !important"
        },
        resizingContainer: { boxShadow: "inset 0 0 0 2px #3b82f6" },
        resizingFromLeft: { boxShadow: "inset 3px 0 0 #3b82f6" },
        resizingFromRight: { boxShadow: "inset -3px 0 0 #3b82f6" },
        resizeHandleGlyph: { width: "20px", height: "20px", color: "#D5D7DD" },
        resizeHandleGlyphLeft: { transform: "scaleX(-1)" },
        resizeHandleGlyphRight: { transform: "none" },
        resizeSnapZone: {
          position: "absolute",
          top: 0,
          bottom: 0,
          borderRadius: "8px",
          border: "1px dashed rgba(59, 130, 246, 0.65)",
          backgroundColor: "rgba(59, 130, 246, 0.14)",
          pointerEvents: "none"
        },
        resizeSnapZoneLeft: { right: 0 },
        resizeSnapZoneRight: { left: 0 },
        contentLayer: { position: "relative", zIndex: 1 }
      })),
      ic = (e) => {
        var t, n;
        let { children: l, dragAndDropOptions: a, resizeOptions: o } = e,
          {
            classes: {
              container: i,
              dragHandle: u,
              dragHandleVisible: s,
              draggingContainer: d,
              dropTargetHighlight: c,
              resizeHandle: m,
              resizeHandleLeft: g,
              resizeHandleRight: h,
              resizeHandleVisible: f,
              resizeHandleButton: p,
              resizingContainer: v,
              resizingFromLeft: F,
              resizingFromRight: C,
              resizeHandleGlyph: S,
              resizeHandleGlyphLeft: E,
              resizeHandleGlyphRight: b,
              resizeSnapZone: A,
              resizeSnapZoneLeft: y,
              resizeSnapZoneRight: x,
              contentLayer: w
            },
            cx: D
          } = id(),
          B = it(),
          L = null != a ? a : B,
          R = null != o ? o : null == L ? void 0 : L.resizeOptions,
          [O, k] = (0, r.useState)(!1),
          I = !!((null == R ? void 0 : R.isEnabled) && R.handles.includes("left")),
          T = !!((null == R ? void 0 : R.isEnabled) && R.handles.includes("right")),
          P =
            O ||
            (null != (t = null == R ? void 0 : R.isResizing) && t) ||
            (null != (n = null == L ? void 0 : L.isDragging) && n),
          z = !!(
            (null == R ? void 0 : R.isResizing) &&
            "number" == typeof R.snapPreviewWidthPx &&
            R.snapPreviewWidthPx > 0
          ),
          W = (0, r.useMemo)(() => {
            let e = null == L ? void 0 : L.containerTransform;
            if (e) return { transform: "translate(".concat(-e.x, "px, ").concat(-e.y, "px)") };
          }, [null == L ? void 0 : L.containerTransform]);
        return (
          (0, r.useEffect)(() => {
            if ("u" < typeof document || !(null == R ? void 0 : R.isResizing)) return;
            let e = document.body.style.cursor,
              t = "ew-resize";
            return (
              "left" === R.activeHandle
                ? (t = "w-resize")
                : "right" === R.activeHandle && (t = "e-resize"),
              (document.body.style.cursor = t),
              () => {
                document.body.style.cursor = e;
              }
            );
          }, [null == R ? void 0 : R.activeHandle, null == R ? void 0 : R.isResizing]),
          r.default.createElement(
            "div",
            {
              ref: null == L ? void 0 : L.containerRef,
              "data-chart-container-item-id": null == L ? void 0 : L.containerItemId,
              style: null == L ? void 0 : L.containerStyle,
              ...(null == L ? void 0 : L.containerAttributes),
              onMouseEnter: () => k(!0),
              onMouseLeave: () => k(!1),
              className: D(
                (null == L ? void 0 : L.isEnabled) && i,
                (null == L ? void 0 : L.isDragging) && d,
                (null == R ? void 0 : R.isResizing) && v,
                (null == R ? void 0 : R.isResizing) && "left" === R.activeHandle && F,
                (null == R ? void 0 : R.isResizing) && "right" === R.activeHandle && C,
                null == L ? void 0 : L.containerClassName
              )
            },
            !!(null == L ? void 0 : L.dropIndicator) &&
              r.default.createElement("div", { className: c, style: W, "aria-hidden": "true" }),
            z &&
              r.default.createElement("div", {
                className: D(A, (null == R ? void 0 : R.snapPreviewAnchor) === "left" ? y : x),
                style: { width: null == R ? void 0 : R.snapPreviewWidthPx },
                "aria-hidden": "true"
              }),
            I &&
              r.default.createElement(
                M.IconButton,
                {
                  "data-chart-resize-handle": "left",
                  ...(null == R ? void 0 : R.leftHandleAttributes),
                  ...(null == R ? void 0 : R.leftHandleListeners),
                  "aria-label": "Resize chart from left edge",
                  size: "small",
                  color: "onMediaLight",
                  className: D(m, p, g, P && f)
                },
                r.default.createElement(
                  "svg",
                  {
                    className: D(S, E),
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true"
                  },
                  r.default.createElement("path", { d: is, fill: "currentColor" })
                )
              ),
            T &&
              r.default.createElement(
                M.IconButton,
                {
                  "data-chart-resize-handle": "right",
                  ...(null == R ? void 0 : R.rightHandleAttributes),
                  ...(null == R ? void 0 : R.rightHandleListeners),
                  "aria-label": "Resize chart from right edge",
                  size: "small",
                  color: "onMediaLight",
                  className: D(m, p, h, P && f)
                },
                r.default.createElement(
                  "svg",
                  {
                    className: D(S, b),
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true"
                  },
                  r.default.createElement("path", { d: is, fill: "currentColor" })
                )
              ),
            (null == L ? void 0 : L.isEnabled) &&
              r.default.createElement(
                M.IconButton,
                {
                  "data-chart-drag-handle": !0,
                  ...L.handleAttributes,
                  ...L.handleListeners,
                  "aria-label": "Drag to reorder chart",
                  size: "small",
                  color: "onMediaLight",
                  variant: "contained",
                  className: D(u, (O || L.isDragging) && s)
                },
                r.default.createElement(N.DragHandleIcon, { fontSize: "small" })
              ),
            r.default.createElement("div", { className: w }, l)
          )
        );
      },
      im = (0, s.makeStyles)()(() => ({ icon: { fontSize: "1rem" } }));
    var ig = (0, r.memo)((e) => {
      let { isGood: t, isUp: n, formattedLabel: l, tooltip: a } = e,
        {
          classes: { icon: o }
        } = im();
      return r.default.createElement(
        d.Tooltip,
        { title: a, placement: "right", arrow: !0 },
        r.default.createElement(
          "span",
          null,
          r.default.createElement(w.Label, {
            labelText: l,
            variant: "contained",
            icon: n
              ? r.default.createElement(D.ArrowUpwardIcon, { classes: { root: o } })
              : r.default.createElement(B.ArrowDownwardIcon, { classes: { root: o } }),
            severity: t ? "success" : "default"
          })
        )
      );
    });
    let ih = (0, s.makeStyles)()(() => ({
        container: { width: "unset", margin: "unset", textTransform: "none" },
        statsContainer: { display: "flex", alignItems: "center" },
        statsContainerCentered: { justifyContent: "center" },
        tooltipIcon: { verticalAlign: "middle", margin: "0 0 2px 4px" }
      })),
      ip = (e) => {
        let {
            summaryValue: t,
            description: n,
            tooltip: l,
            StartSummaryIcon: a,
            comparisonChipSpec: o,
            abnormalStatus: i,
            centered: u
          } = e,
          {
            classes: { statsContainer: s, statsContainerCentered: c, container: g, tooltipIcon: h },
            cx: p
          } = ih(),
          v = (0, r.useMemo)(() => (o ? r.default.createElement(ig, o) : null), [o]),
          F = (0, r.useMemo)(
            () =>
              i
                ? r.default.createElement(m.Typography, { variant: "h2" }, "--")
                : r.default.createElement(
                    r.default.Fragment,
                    null,
                    a ? r.default.createElement(a, { fontSize: "small" }) : null,
                    r.default.createElement(
                      m.Typography,
                      { variant: "h2", marginRight: v ? "8px" : "0", marginLeft: a ? "4px" : "0" },
                      t
                    ),
                    v
                  ),
            [a, i, v, t]
          );
        return r.default.createElement(
          f.Container,
          { disableGutters: !0, classes: { root: g } },
          r.default.createElement(
            m.Typography,
            { variant: "body2", color: "secondary" },
            n,
            l &&
              r.default.createElement(
                d.Tooltip,
                { title: l, arrow: !0 },
                r.default.createElement(E.InfoOutlinedIcon, {
                  fontSize: "small",
                  classes: { root: h }
                })
              )
          ),
          r.default.createElement("div", { className: p(s, u && c) }, F)
        );
      },
      iv = (0, s.makeStyles)()((e) => ({
        subTitleContainer: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 0px 8px"
        },
        chartControlContainer: {
          flex: "0 1 auto",
          marginLeft: "16px",
          display: "flex",
          gap: "8px",
          flexDirection: "row",
          [e.breakpoints.down("Small")]: { flexDirection: "column" }
        },
        summariesContainer: {
          display: "flex",
          justifyContent: "start",
          columnGap: "16px",
          rowGap: "8px",
          flexWrap: "wrap"
        }
      }));
    var iF = (0, r.memo)((e) => {
      let {
          children: t,
          titleLabel: n,
          titleTooltipLabel: l,
          footerContent: a,
          headerActionItems: o,
          headerActions: i,
          downloadAction: u,
          overflowMenuContent: s,
          secondaryAction: d,
          chartSummarySpecs: c,
          chartControl: m,
          abnormalState: g,
          dragAndDropOptions: h,
          resizeOptions: p,
          chartBanner: v,
          slots: F
        } = e,
        {
          classes: { subTitleContainer: C, chartControlContainer: S, summariesContainer: E }
        } = iv(),
        b = (0, r.useMemo)(
          () =>
            0 !== c.length || m
              ? r.default.createElement(
                  f.Container,
                  { disableGutters: !0, classes: { root: C }, maxWidth: !1 },
                  r.default.createElement(
                    "div",
                    { className: E },
                    c.map((e) =>
                      r.default.createElement(ip, {
                        ...e,
                        key: e.key,
                        abnormalStatus: null == g ? void 0 : g.status
                      })
                    )
                  ),
                  m && r.default.createElement("div", { className: S }, m)
                )
              : null,
          [null == g ? void 0 : g.status, m, S, c, C, E]
        );
      return r.default.createElement(
        ic,
        { dragAndDropOptions: h, resizeOptions: p },
        r.default.createElement(
          iu,
          {
            titleLabel: n,
            titleTooltipLabel: l,
            secondaryAction: d,
            headerActionItems: o,
            headerActions: i,
            downloadAction: u,
            overflowMenuContent: s,
            footerContent: a,
            subTitle: b,
            abnormalState: g,
            chartBanner: v,
            slots: F
          },
          t
        )
      );
    });
    let iC = (0, s.makeStyles)()((e) => ({
      subTitleContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 0px 4px"
      },
      tabsWrapper: { position: "relative", flex: 1, minWidth: 0 },
      scrollBumper: {
        display: "flex",
        alignItems: "center",
        zIndex: e.zIndex.speedDial,
        position: "absolute",
        height: "100%",
        top: 0
      },
      scrollBumperLeft: { left: 0 },
      scrollBumperRight: { right: 0 },
      scrollBumperHidden: { opacity: 0, pointerEvents: "none" },
      scrollButton: { opacity: 1, alignSelf: "center" },
      chartControlContainer: { flex: "0 1 auto", marginLeft: "16px" },
      tabContainer: { paddingTop: "0px", paddingBottom: "4px", lineHeight: "110%" }
    }));
    var iS = (0, r.memo)((e) => {
      let {
          children: t,
          titleLabel: n,
          titleTooltipLabel: l,
          titleSuffix: a,
          footerContent: o,
          headerActionItems: i,
          headerActions: u,
          downloadAction: s,
          overflowMenuContent: d,
          secondaryAction: c,
          chartControl: m,
          tabSpecs: g,
          activeTabKey: p,
          onActiveTabChanged: v,
          dragAndDropOptions: F,
          resizeOptions: C,
          slots: S
        } = e,
        {
          classes: {
            subTitleContainer: E,
            tabsWrapper: b,
            scrollBumper: A,
            scrollBumperLeft: y,
            scrollBumperRight: x,
            scrollBumperHidden: N,
            scrollButton: w,
            chartControlContainer: D,
            tabContainer: B
          },
          cx: I
        } = iC(),
        T = (0, h.useMediaQuery)((e) => e.breakpoints.down("Medium")),
        {
          wrapperRef: P,
          isStartOfScroll: z,
          isEndOfScroll: W,
          handleScroll: V,
          refreshScrollState: H
        } = ((e) => {
          let t = (0, r.useRef)(null),
            [n, l] = (0, r.useState)(!0),
            [a, o] = (0, r.useState)(!0),
            i = (0, r.useCallback)(() => {
              let e = t.current,
                n = null == e ? void 0 : e.querySelector(".MuiTabs-scroller");
              n && (l(n.scrollLeft <= 0), o(n.scrollLeft + n.clientWidth >= n.scrollWidth - 1));
            }, []);
          (0, r.useEffect)(() => {
            let n,
              a = t.current,
              i = e ? (null == a ? void 0 : a.querySelector(".MuiTabs-scroller")) : null;
            if (!i) return;
            let r = () => {
                (l(i.scrollLeft <= 0), o(i.scrollLeft + i.clientWidth >= i.scrollWidth - 1));
              },
              u = requestAnimationFrame(r);
            if ((i.addEventListener("scroll", r), "u" > typeof ResizeObserver)) {
              (n = new ResizeObserver(r)).observe(i);
              let e = i.firstElementChild;
              e && n.observe(e);
            }
            return () => {
              (cancelAnimationFrame(u),
                i.removeEventListener("scroll", r),
                null == n || n.disconnect());
            };
          }, [e]);
          let u = (0, r.useCallback)((e) => {
            let n = t.current,
              l = null == n ? void 0 : n.querySelector(".MuiTabs-scroller");
            if (!l) return;
            let a = 0.75 * l.clientWidth;
            l.scrollBy({ left: "left" === e ? -a : a, behavior: "smooth" });
          }, []);
          return {
            wrapperRef: t,
            isStartOfScroll: n,
            isEndOfScroll: a,
            handleScroll: u,
            refreshScrollState: i
          };
        })(!T),
        [_, G] = (0, r.useState)(!1),
        j = (0, r.useCallback)(
          (e, t) => {
            v(t);
          },
          [v]
        ),
        X = (0, r.useMemo)(
          () =>
            r.default.createElement(
              L.Tabs,
              {
                value: p,
                variant: "scrollable",
                scrollButtons: !1,
                onChange: j,
                "aria-label": "tabs"
              },
              g.map((e) => {
                let {
                  key: t,
                  comparisonChipSpec: n,
                  description: l,
                  summaryValue: a,
                  abnormalState: o,
                  tooltip: i
                } = e;
                return r.default.createElement(R.Tab, {
                  label: r.default.createElement(ip, {
                    summaryValue: a,
                    description: l,
                    comparisonChipSpec: n,
                    abnormalStatus: null == o ? void 0 : o.status,
                    tooltip: i,
                    centered: !0
                  }),
                  value: t,
                  key: t,
                  classes: { root: B }
                });
              })
            ),
          [p, j, B, g]
        ),
        U = r.default.createElement(
          f.Container,
          { disableGutters: !0, classes: { root: E }, maxWidth: !1 },
          r.default.createElement(
            "div",
            {
              ref: P,
              className: b,
              onMouseEnter: () => {
                (G(!0), H());
              },
              onMouseLeave: () => G(!1)
            },
            X,
            !T &&
              r.default.createElement(
                r.default.Fragment,
                null,
                r.default.createElement(
                  "div",
                  { className: I(A, y, { [N]: !_ || z }) },
                  r.default.createElement(
                    M.IconButton,
                    {
                      classes: { root: w },
                      onClick: () => V("left"),
                      color: "onMediaLight",
                      variant: "contained",
                      "aria-label": "scroll left",
                      size: "small"
                    },
                    r.default.createElement(O.NavigateBeforeIcon, { fontSize: "small" })
                  )
                ),
                r.default.createElement(
                  "div",
                  { className: I(A, x, { [N]: !_ || W }) },
                  r.default.createElement(
                    M.IconButton,
                    {
                      classes: { root: w },
                      onClick: () => V("right"),
                      color: "onMediaLight",
                      variant: "contained",
                      "aria-label": "scroll right",
                      size: "small"
                    },
                    r.default.createElement(k.NavigateNextIcon, { fontSize: "small" })
                  )
                )
              )
          ),
          !T && m && r.default.createElement("div", { className: D }, m)
        ),
        K = (0, r.useMemo)(() => {
          let e = g.find((e) => e.key === p);
          return null == e ? void 0 : e.abnormalState;
        }, [p, g]),
        q = (0, r.useMemo)(() => {
          let e = g.find((e) => e.key === p);
          return null == e ? void 0 : e.chartBanner;
        }, [p, g]);
      return r.default.createElement(
        ic,
        { dragAndDropOptions: F, resizeOptions: C },
        r.default.createElement(
          iu,
          {
            titleLabel: n,
            titleTooltipLabel: l,
            titleSuffix: a,
            secondaryAction: c,
            headerActionItems: i,
            headerActions: u,
            downloadAction: s,
            overflowMenuContent: d,
            footerContent: o,
            subTitle: U,
            chartControl: T ? m : void 0,
            abnormalState: K,
            chartBanner: q,
            slots: S
          },
          t
        )
      );
    });
    let iE = (0, s.makeStyles)()(() => ({
      subTitleContainer: {
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 0px 4px",
        flexDirection: "column"
      },
      chartControlContainer: { flex: "0 1 auto", marginLeft: "16px" },
      tabContainer: { paddingTop: "0px", paddingBottom: "4px", lineHeight: "110%" }
    }));
    var ib = (0, r.memo)((e) => {
      let {
          children: t,
          titleLabel: n,
          titleTooltipLabel: l,
          footerContent: a,
          downloadAction: o,
          overflowMenuContent: i,
          subtitleComponent: u,
          tabSpecs: s,
          activeTabKey: d,
          onActiveTabChanged: c,
          slots: m
        } = e,
        {
          classes: { subTitleContainer: g, tabContainer: h }
        } = iE(),
        p = (0, r.useCallback)(
          (e, t) => {
            c(t);
          },
          [c]
        ),
        v = (0, r.useMemo)(
          () =>
            r.default.createElement(
              f.Container,
              { disableGutters: !0, classes: { root: g }, maxWidth: !1 },
              u,
              r.default.createElement(
                L.Tabs,
                {
                  value: d,
                  variant: "scrollable",
                  onChange: p,
                  "aria-label": "tabs",
                  scrollButtons: !1
                },
                s.map((e) => {
                  let { key: t, label: n } = e;
                  return r.default.createElement(R.Tab, {
                    label: n,
                    value: t,
                    key: t,
                    classes: { root: h }
                  });
                })
              )
            ),
          [d, p, g, u, h, s]
        ),
        F = (0, r.useMemo)(() => {
          let e = s.find((e) => e.key === d);
          return null == e ? void 0 : e.abnormalState;
        }, [d, s]);
      return r.default.createElement(
        iu,
        {
          titleLabel: n,
          titleTooltipLabel: l,
          downloadAction: o,
          overflowMenuContent: i,
          footerContent: a,
          subTitle: v,
          abnormalState: F,
          slots: m
        },
        t
      );
    });
    let iA = [tH.Normal, tH.Total, tH.Benchmark, tH.Projection, tH.Quota, tH.Comparison];
    e.s(
      [
        "AdaptiveDataTable",
        0,
        (e) => {
          let {
              getExpandedRowId: t,
              getRowId: n,
              isError: l = !1,
              isLoading: a = !1,
              labels: o,
              navigation: i,
              onSortChange: u,
              rows: s,
              size: d = "Medium",
              sort: c,
              variant: m = "Divided"
            } = e,
            [g, h] = (0, r.useState)({}),
            f = (0, r.useSyncExternalStore)(oz, oW, oV),
            p = (0, r.useRef)(null),
            v = (0, r.useRef)(null),
            F = (0, r.useRef)(null),
            C = (0, r.useRef)(null),
            S = (0, r.useRef)(null),
            E = (0, r.useRef)(null),
            b = (0, r.useRef)(c),
            [A, y] = (0, r.useState)(),
            [x, M] = (0, r.useState)(),
            {
              cellsByColumnId: N,
              columnBlueprints: w,
              columnLayout: D,
              table: B
            } = ((e) => {
              var t;
              let {
                  availableWidth: n,
                  expanded: l,
                  getRowId: a,
                  onExpandedChange: o,
                  onSortChange: i,
                  rows: u,
                  sort: s,
                  textStyles: d
                } = e,
                c = u[0],
                [m, g] = (0, r.useState)(() =>
                  c ? { columnRow: c, measurementRows: u.slice(0, 50) } : void 0
                );
              (0, r.useEffect)(() => {
                !m && c && g({ columnRow: c, measurementRows: u.slice(0, 50) });
              }, [m, c, u]);
              let h = (0, r.useMemo)(
                  () =>
                    ((e) => {
                      let t = [];
                      if (!e) return t;
                      for (let n in e) t.push({ cell: e[n], id: n });
                      return t;
                    })(null == m ? void 0 : m.columnRow),
                  [m]
                ),
                f = (0, r.useMemo)(
                  () => (s ? [{ id: s.columnId, desc: "descending" === s.direction }] : []),
                  [s]
                ),
                p = (0, r.useCallback)(
                  (e) => {
                    let t,
                      n = ("function" == typeof e ? e(f) : e)[0];
                    null == i ||
                      i(
                        n && ((t = n.id), h.some((e) => e.id === t && "value" === e.cell.type))
                          ? { columnId: n.id, direction: n.desc ? "descending" : "ascending" }
                          : null
                      );
                  },
                  [h, i, f]
                ),
                v = (function (e) {
                  let t = { state: {}, onStateChange: () => {}, renderFallbackValue: null, ...e },
                    [n] = r.useState(() => ({
                      current: (function (e) {
                        var t, n;
                        let l = [...a$, ...(null != (t = e._features) ? t : [])],
                          a = { _features: l },
                          o = a._features.reduce(
                            (e, t) =>
                              Object.assign(
                                e,
                                null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(a)
                              ),
                            {}
                          ),
                          i = { ...(null != (n = e.initialState) ? n : {}) };
                        a._features.forEach((e) => {
                          var t;
                          i =
                            null != (t = null == e.getInitialState ? void 0 : e.getInitialState(i))
                              ? t
                              : i;
                        });
                        let r = [],
                          u = !1,
                          s = {
                            _features: l,
                            options: { ...o, ...e },
                            initialState: i,
                            _queue: (e) => {
                              (r.push(e),
                                u ||
                                  ((u = !0),
                                  Promise.resolve()
                                    .then(() => {
                                      for (; r.length;) r.shift()();
                                      u = !1;
                                    })
                                    .catch((e) =>
                                      setTimeout(() => {
                                        throw e;
                                      })
                                    )));
                            },
                            reset: () => {
                              a.setState(a.initialState);
                            },
                            setOptions: (e) => {
                              var t;
                              ((t = ah(e, a.options)),
                                (a.options = a.options.mergeOptions
                                  ? a.options.mergeOptions(o, t)
                                  : { ...o, ...t }));
                            },
                            getState: () => a.options.state,
                            setState: (e) => {
                              null == a.options.onStateChange || a.options.onStateChange(e);
                            },
                            _getRowId: (e, t, n) => {
                              var l;
                              return null !=
                                (l =
                                  null == a.options.getRowId ? void 0 : a.options.getRowId(e, t, n))
                                ? l
                                : "".concat(n ? [n.id, t].join(".") : t);
                            },
                            getCoreRowModel: () => (
                              a._getCoreRowModel ||
                                (a._getCoreRowModel = a.options.getCoreRowModel(a)),
                              a._getCoreRowModel()
                            ),
                            getRowModel: () => a.getPaginationRowModel(),
                            getRow: (e, t) => {
                              let n = (t ? a.getPrePaginationRowModel() : a.getRowModel()).rowsById[
                                e
                              ];
                              if (!n && !(n = a.getCoreRowModel().rowsById[e])) throw Error();
                              return n;
                            },
                            _getDefaultColumnDef: av(
                              () => [a.options.defaultColumn],
                              (e) => {
                                var t;
                                return (
                                  (e = null != (t = e) ? t : {}),
                                  {
                                    header: (e) => {
                                      let t = e.header.column.columnDef;
                                      return t.accessorKey
                                        ? t.accessorKey
                                        : t.accessorFn
                                          ? t.id
                                          : null;
                                    },
                                    cell: (e) => {
                                      var t, n;
                                      return null !=
                                        (t =
                                          null == (n = e.renderValue()) || null == n.toString
                                            ? void 0
                                            : n.toString())
                                        ? t
                                        : null;
                                    },
                                    ...a._features.reduce(
                                      (e, t) =>
                                        Object.assign(
                                          e,
                                          null == t.getDefaultColumnDef
                                            ? void 0
                                            : t.getDefaultColumnDef()
                                        ),
                                      {}
                                    ),
                                    ...e
                                  }
                                );
                              },
                              aF(e, "debugColumns", "_getDefaultColumnDef")
                            ),
                            _getColumnDefs: () => a.options.columns,
                            getAllColumns: av(
                              () => [a._getColumnDefs()],
                              (e) => {
                                let t = function (e, n, l) {
                                  return (
                                    void 0 === l && (l = 0),
                                    e.map((e) => {
                                      let o = (function (e, t, n, l) {
                                        var a, o;
                                        let i,
                                          r = { ...e._getDefaultColumnDef(), ...t },
                                          u = r.accessorKey,
                                          s =
                                            null !=
                                            (a =
                                              null != (o = r.id)
                                                ? o
                                                : u
                                                  ? "function" == typeof String.prototype.replaceAll
                                                    ? u.replaceAll(".", "_")
                                                    : u.replace(/\./g, "_")
                                                  : void 0)
                                              ? a
                                              : "string" == typeof r.header
                                                ? r.header
                                                : void 0;
                                        if (
                                          (r.accessorFn
                                            ? (i = r.accessorFn)
                                            : u &&
                                              (i = u.includes(".")
                                                ? (e) => {
                                                    let t = e;
                                                    for (let e of u.split(".")) {
                                                      var n;
                                                      t = null == (n = t) ? void 0 : n[e];
                                                    }
                                                    return t;
                                                  }
                                                : (e) => e[r.accessorKey]),
                                          !s)
                                        )
                                          throw Error();
                                        let d = {
                                          id: "".concat(String(s)),
                                          accessorFn: i,
                                          parent: l,
                                          depth: n,
                                          columnDef: r,
                                          columns: [],
                                          getFlatColumns: av(
                                            () => [!0],
                                            () => {
                                              var e;
                                              return [
                                                d,
                                                ...(null == (e = d.columns)
                                                  ? void 0
                                                  : e.flatMap((e) => e.getFlatColumns()))
                                              ];
                                            },
                                            aF(e.options, "debugColumns", "column.getFlatColumns")
                                          ),
                                          getLeafColumns: av(
                                            () => [e._getOrderColumnsFn()],
                                            (e) => {
                                              var t;
                                              return null != (t = d.columns) && t.length
                                                ? e(d.columns.flatMap((e) => e.getLeafColumns()))
                                                : [d];
                                            },
                                            aF(e.options, "debugColumns", "column.getLeafColumns")
                                          )
                                        };
                                        for (let t of e._features)
                                          null == t.createColumn || t.createColumn(d, e);
                                        return d;
                                      })(a, e, l, n);
                                      return (
                                        (o.columns = e.columns ? t(e.columns, o, l + 1) : []),
                                        o
                                      );
                                    })
                                  );
                                };
                                return t(e);
                              },
                              aF(e, "debugColumns", "getAllColumns")
                            ),
                            getAllFlatColumns: av(
                              () => [a.getAllColumns()],
                              (e) => e.flatMap((e) => e.getFlatColumns()),
                              aF(e, "debugColumns", "getAllFlatColumns")
                            ),
                            _getAllFlatColumnsById: av(
                              () => [a.getAllFlatColumns()],
                              (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
                              aF(e, "debugColumns", "getAllFlatColumnsById")
                            ),
                            getAllLeafColumns: av(
                              () => [a.getAllColumns(), a._getOrderColumnsFn()],
                              (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
                              aF(e, "debugColumns", "getAllLeafColumns")
                            ),
                            getColumn: (e) => a._getAllFlatColumnsById()[e]
                          };
                        Object.assign(a, s);
                        for (let e = 0; e < a._features.length; e++) {
                          let t = a._features[e];
                          null == t || null == t.createTable || t.createTable(a);
                        }
                        return a;
                      })(t)
                    })),
                    [l, a] = r.useState(() => n.current.initialState);
                  return (
                    n.current.setOptions((t) => ({
                      ...t,
                      ...e,
                      state: { ...l, ...e.state },
                      onStateChange: (t) => {
                        (a(t), null == e.onStateChange || e.onStateChange(t));
                      }
                    })),
                    n.current
                  );
                })({
                  autoResetExpanded: !1,
                  columns: (0, r.useMemo)(() => {
                    let e = (e, t) =>
                        "function" == typeof e ? { ...t, accessorFn: e } : { ...t, accessorKey: e },
                      t = (e) => e,
                      n = [];
                    for (let l of h)
                      "value" === l.cell.type
                        ? n.push(
                            e(
                              (e) => {
                                let t = e[l.id];
                                return "value" === t.type ? t.value : void 0;
                              },
                              {
                                enableSorting: !1 !== l.cell.sortable && void 0 !== i,
                                id: l.id,
                                sortDescFirst: !1
                              }
                            )
                          )
                        : n.push(t({ enableSorting: !1, id: l.id }));
                    return n;
                  }, [h, i]),
                  data: (0, r.useMemo)(() => [...u], [u]),
                  enableMultiSort: !1,
                  getCoreRowModel: (e) =>
                    av(
                      () => [e.options.data],
                      (t) => {
                        let n = { rows: [], flatRows: [], rowsById: {} },
                          l = function (t, a, o) {
                            void 0 === a && (a = 0);
                            let i = [];
                            for (let u = 0; u < t.length; u++) {
                              let s = ab(
                                e,
                                e._getRowId(t[u], u, o),
                                t[u],
                                u,
                                a,
                                void 0,
                                null == o ? void 0 : o.id
                              );
                              if (
                                (n.flatRows.push(s),
                                (n.rowsById[s.id] = s),
                                i.push(s),
                                e.options.getSubRows)
                              ) {
                                var r;
                                ((s.originalSubRows = e.options.getSubRows(t[u], u)),
                                  null != (r = s.originalSubRows) &&
                                    r.length &&
                                    (s.subRows = l(s.originalSubRows, a + 1, s)));
                              }
                            }
                            return i;
                          };
                        return ((n.rows = l(t)), n);
                      },
                      aF(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex())
                    ),
                  getRowId: a,
                  getRowCanExpand: (e) => {
                    var t, n;
                    return (
                      0 === e.depth &&
                      (null != (t = null == (n = e.original[ag]) ? void 0 : n.length) ? t : 0) > 0
                    );
                  },
                  manualSorting: !0,
                  onExpandedChange: o,
                  onSortingChange: p,
                  state: { expanded: l, sorting: f }
                }),
                F = (0, r.useMemo)(() => new Map(h.map((e) => [e.id, e.cell])), [h]),
                C = null != (t = null == m ? void 0 : m.measurementRows) ? t : a0,
                S = (0, r.useMemo)(
                  () =>
                    am({
                      availableWidth: n,
                      columns: h,
                      isSortingEnabled: void 0 !== i,
                      rows: C,
                      textStyles: d
                    }),
                  [n, h, C, i, d]
                );
              return { cellsByColumnId: F, columnBlueprints: h, columnLayout: S, table: v };
            })({
              availableWidth: A,
              expanded: g,
              getRowId: n,
              onExpandedChange: h,
              onSortChange: u,
              rows: s,
              sort: c,
              textStyles: x
            }),
            L = B.getRowModel().rows,
            R = (0, r.useMemo)(
              () =>
                L.flatMap((e) => {
                  let t = e.original[ag],
                    n = { kind: "data", row: e };
                  return (!0 === g || g[e.id]) && t && t.length > 0
                    ? [n, { expandedRows: t, kind: "expandedRows", row: e }]
                    : [n];
                }),
              [g, L]
            ),
            O = w.some(
              (e) =>
                "value" === e.cell.type &&
                "string" == typeof e.cell.value &&
                "truncate" !== e.cell.textOverflow
            ),
            k = "infinite" === i.mode,
            T = l && 0 === L.length,
            P = "Framed" === m && k && !f,
            z = "infinite" === i.mode && !0 === i.isLoadMoreError,
            W = "pagination" === i.mode ? i.onPageSizeChange : void 0,
            V = (0, r.useCallback)(
              (e) => {
                let t,
                  n,
                  l = R[e];
                return l
                  ? "data" === l.kind
                    ? ((t = l.row.id), "data-".concat(t))
                    : ((n = l.row.id), "expanded-rows-".concat(n))
                  : z
                    ? "load-more-error"
                    : "loading-more";
              },
              [z, R]
            ),
            H = k ? R.length + (i.isLoadingMore || z ? 1 : 0) : R.length,
            _ = f ? Math.max(w.length, 1) * a2[d] : a2[d],
            G = (function (e) {
              let {
                  useFlushSync: t = !0,
                  directDomUpdates: n = !1,
                  directDomUpdatesMode: l = "transform",
                  ...a
                } = e,
                o = r.useReducer((e) => e + 1, 0)[1],
                i = r.useRef({
                  enabled: n,
                  mode: l,
                  container: null,
                  lastSize: null,
                  lastPositions: new WeakMap(),
                  prevRange: null
                });
              ((i.current.enabled = n), (i.current.mode = l));
              let u = (e) => {
                  let t = i.current;
                  if (!t.enabled || !t.container) return;
                  let n = e.getTotalSize();
                  if (n !== t.lastSize) {
                    t.lastSize = n;
                    let l = e.options.horizontal ? "width" : "height";
                    t.container.style[l] = "".concat(n, "px");
                  }
                },
                s = (e) => {
                  let t = i.current;
                  if (!t.enabled || !t.container) return;
                  u(e);
                  let n = !!e.options.horizontal,
                    l = "transform" === t.mode,
                    a = n ? "left" : "top",
                    o = e.options.scrollMargin;
                  for (let i of e.getVirtualItems()) {
                    let r = i.start - o,
                      u = e.elementsCache.get(i.key);
                    u &&
                      t.lastPositions.get(u) !== r &&
                      (t.lastPositions.set(u, r),
                      l
                        ? (u.style.transform = n
                            ? "translate3d(".concat(r, "px, 0, 0)")
                            : "translate3d(0, ".concat(r, "px, 0)"))
                        : (u.style[a] = "".concat(r, "px")));
                  }
                },
                d = {
                  ...a,
                  onChange: (e, n) => {
                    var l;
                    let r = i.current,
                      u = !0;
                    if (r.enabled) {
                      s(e);
                      let t = e.range,
                        n = r.prevRange;
                      (u =
                        !n ||
                        n.isScrolling !== e.isScrolling ||
                        n.startIndex !== (null == t ? void 0 : t.startIndex) ||
                        n.endIndex !== (null == t ? void 0 : t.endIndex)) &&
                        (r.prevRange = t
                          ? {
                              startIndex: t.startIndex,
                              endIndex: t.endIndex,
                              isScrolling: e.isScrolling
                            }
                          : null);
                    }
                    (u && (t && n ? (0, I.flushSync)(o) : o()),
                      null == (l = a.onChange) || l.call(a, e, n));
                  }
                },
                [c] = r.useState(() => {
                  let e = new ld(d);
                  return Object.assign(e, {
                    containerRef: (t) => {
                      let n = i.current;
                      if (((n.container = t), (n.lastSize = null), t && n.enabled)) {
                        let l = e.getTotalSize();
                        n.lastSize = l;
                        let a = e.options.horizontal ? "width" : "height";
                        t.style[a] = "".concat(l, "px");
                      }
                    }
                  });
                });
              return (
                c.setOptions(d),
                lm(() => c._didMount(), []),
                lm(() => (u(c), c._willUpdate())),
                lm(() => {
                  s(c);
                }),
                c
              );
            })({
              observeElementRect: la,
              observeElementOffset: lr,
              scrollToFn: ls,
              count: H,
              estimateSize: () => _,
              getItemKey: V,
              getScrollElement: () => F.current,
              overscan: 8
            }),
            j = G.getVirtualItems(),
            X = "infinite" === i.mode ? i.nextCursor : null,
            U = "infinite" === i.mode && !0 === i.isLoadingMore,
            K = "infinite" === i.mode ? i.onLoadMore : void 0;
          (0, r.useEffect)(() => {
            let e = !1,
              t = () => {
                if (e || !C.current || !S.current) return;
                let t = o_(C.current),
                  n = o_(S.current);
                if (!t || !n) return;
                let l = { cell: n, header: t };
                M((e) =>
                  (null == e ? void 0 : e.cell.font) === l.cell.font &&
                  e.cell.horizontalPadding === l.cell.horizontalPadding &&
                  e.cell.letterSpacing === l.cell.letterSpacing &&
                  e.header.font === l.header.font &&
                  e.header.horizontalPadding === l.header.horizontalPadding &&
                  e.header.letterSpacing === l.header.letterSpacing
                    ? e
                    : l
                );
              },
              n = "u" < typeof document ? void 0 : document.fonts;
            return (
              (null == n ? void 0 : n.status) === "loading" ? n.ready.then(t) : t(),
              () => {
                e = !0;
              }
            );
          }, [s.length, d, j.length]);
          let q = (0, r.useCallback)(
              (e) => {
                !e ||
                  !K ||
                  a ||
                  T ||
                  U ||
                  z ||
                  null === X ||
                  E.current === X ||
                  e.scrollHeight - e.scrollTop - e.clientHeight >= 500 ||
                  ((E.current = X), K(X));
              },
              [X, z, a, U, T, K]
            ),
            Q = (0, r.useCallback)(() => {
              let e = F.current;
              (e && v.current && (v.current.scrollLeft = e.scrollLeft), q(e));
            }, [q]),
            Z = (0, r.useCallback)(() => {
              K && null !== X && !U && ((E.current = X), K(X));
            }, [X, U, K]),
            J = (0, r.useCallback)((e) => (null == W ? void 0 : W(Number(e))), [W]);
          ((0, r.useEffect)(() => {
            let e = p.current;
            if (!e) return;
            let t = () => {
              y(e.clientWidth || void 0);
            };
            if ((t(), "u" < typeof ResizeObserver)) return;
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
          }, []),
            (0, r.useEffect)(() => {
              let e = b.current,
                t =
                  (null == e ? void 0 : e.columnId) !== (null == c ? void 0 : c.columnId) ||
                  (null == e ? void 0 : e.direction) !== (null == c ? void 0 : c.direction);
              ((b.current = c), t && ((E.current = null), F.current && (F.current.scrollTop = 0)));
            }, [c]),
            (0, r.useEffect)(() => {
              (null !== E.current && E.current !== X && (E.current = null), q(F.current));
            }, [X, U, q, R.length]));
          let $ = B.getHeaderGroups(),
            ee = !f && void 0 !== A && D.tableWidth > A;
          (0, r.useEffect)(() => {
            (k && ee) || !v.current || (v.current.scrollLeft = 0);
          }, [ee, k]);
          let et = (0, r.useMemo)(
              () => ({ ...od, overflowX: !k && ee ? "auto" : "hidden", ...(P ? oP : void 0) }),
              [ee, k, P]
            ),
            en = (0, r.useMemo)(
              () => ({ ...oc, ...(!k && !f ? { minWidth: D.tableWidth } : void 0) }),
              [D.tableWidth, k, f]
            ),
            el = (0, r.useMemo)(() => (f ? oA : { ...om, ...(k ? og : void 0) }), [k, f]),
            ea = 480 - a2[d],
            eo = (0, r.useMemo)(
              () => ({ ...ox, height: "auto", maxHeight: ea, overflowX: ee ? "auto" : "hidden" }),
              [ee, ea]
            ),
            em = (0, r.useMemo)(
              () => ({ ...of, gridTemplateColumns: D.gridTemplateColumns }),
              [D.gridTemplateColumns]
            ),
            eg = (0, r.useMemo)(() => ({ ...oR, width: null != A ? A : "100%" }), [A]),
            eh = T
              ? o.error
              : a && 0 === L.length
                ? r.default.createElement(eS, {
                    ariaLabel: o.loading,
                    size: "Medium",
                    variant: "Indeterminate"
                  })
                : 0 === L.length
                  ? o.emptyState
                  : void 0,
            ef = Math.max(w.length, 1),
            ep = a && L.length > 0,
            ev = (0, r.useMemo)(() => ({ ...et, ...(ep ? a4 : void 0) }), [et, ep]);
          return r.default.createElement(
            "div",
            null,
            r.default.createElement(
              "div",
              { className: "relative" },
              r.default.createElement(
                "div",
                { "aria-busy": a, inert: !!ep || void 0, ref: p, style: ev },
                r.default.createElement(
                  "div",
                  { className: f ? on : void 0, style: en },
                  r.default.createElement(
                    ei,
                    { size: d, style: oc, variant: P || f ? "Divided" : m },
                    r.default.createElement(
                      er,
                      { ref: v, style: el },
                      $.map((e) =>
                        r.default.createElement(
                          es,
                          { key: e.id, style: em },
                          e.headers.map((e, t) => {
                            var n, l;
                            let a = N.get(e.column.id);
                            if (!a) return null;
                            let o = e.column.getIsSorted();
                            return r.default.createElement(
                              ed,
                              {
                                align:
                                  null != (n = a.align)
                                    ? n
                                    : "display" === a.type
                                      ? "end"
                                      : "start",
                                key: e.id,
                                ref: 0 === t ? C : void 0,
                                onSort: e.column.getCanSort()
                                  ? () => e.column.toggleSorting()
                                  : void 0,
                                sortDirection:
                                  "asc" === o ? "ascending" : "desc" === o ? "descending" : "none",
                                sortLabel: "value" === a.type ? a.sortAriaLabel : void 0,
                                style: !1 === a.headerDivider ? oT : void 0
                              },
                              null != (l = a.header) ? l : ""
                            );
                          })
                        )
                      )
                    ),
                    void 0 !== eh
                      ? r.default.createElement(
                          eu,
                          { onScroll: k ? Q : void 0, ref: k ? F : void 0, style: k ? eo : oh },
                          r.default.createElement(oJ, { cellStyle: eg, columnCount: ef }, eh)
                        )
                      : k
                        ? r.default.createElement(
                            eu,
                            { onScroll: Q, ref: F, style: eo },
                            r.default.createElement(
                              es,
                              {
                                "aria-hidden": !0,
                                style: {
                                  ...oM,
                                  height: G.getTotalSize(),
                                  ...(!f ? { minWidth: D.tableWidth } : void 0)
                                }
                              },
                              r.default.createElement(ec, { colSpan: ef, style: oN })
                            ),
                            j.map((e, n) => {
                              let l,
                                a,
                                i = R[e.index];
                              if (!i) {
                                let t = z && !U;
                                return r.default.createElement(
                                  es,
                                  {
                                    key: t ? "load-more-error" : "loading-more",
                                    style: {
                                      ...oL,
                                      transform: "translateY(".concat(e.start, "px)")
                                    }
                                  },
                                  r.default.createElement(
                                    ec,
                                    { align: "center", colSpan: ef, style: eg },
                                    t
                                      ? r.default.createElement(
                                          "div",
                                          { className: "flex items-center gap-small" },
                                          r.default.createElement("span", null, o.error),
                                          r.default.createElement(
                                            eF.Button,
                                            { onClick: Z, size: "Small", variant: "Standard" },
                                            o.retry
                                          )
                                        )
                                      : r.default.createElement(eS, {
                                          ariaLabel: o.loading,
                                          size: "Small",
                                          variant: "Indeterminate"
                                        })
                                  )
                                );
                              }
                              if ("expandedRows" === i.kind) {
                                let n;
                                return r.default.createElement(oZ, {
                                  columnCount: ef,
                                  expandedRows: i.expandedRows,
                                  getExpandedRowId: t,
                                  isSmallScreen: f,
                                  isVirtual: !0,
                                  key: ((n = i.row.id), "expanded-rows-".concat(n)),
                                  measureElement: G.measureElement,
                                  size: d,
                                  textStyles: x,
                                  transform: "translateY(".concat(e.start, "px)"),
                                  virtualIndex: e.index
                                });
                              }
                              let { row: u } = i;
                              return r.default.createElement(oQ, {
                                columnGrid: D.gridTemplateColumns,
                                isSmallScreen: f,
                                isVirtual: !0,
                                key: ((l = u.id), "data-".concat(l)),
                                measureElement:
                                  !O &&
                                  (null ==
                                  (a = "u" < typeof navigator ? void 0 : navigator.userAgent)
                                    ? void 0
                                    : a.includes("Firefox"))
                                    ? void 0
                                    : G.measureElement,
                                measurementCellRef: 0 === n ? S : void 0,
                                minimumHeight: a2[d],
                                row: u,
                                transform: "translateY(".concat(e.start, "px)"),
                                virtualIndex: e.index
                              });
                            })
                          )
                        : r.default.createElement(
                            eu,
                            { style: oh },
                            R.map((e, n) => {
                              let l, a;
                              return "expandedRows" === e.kind
                                ? r.default.createElement(oZ, {
                                    columnCount: ef,
                                    expandedRows: e.expandedRows,
                                    getExpandedRowId: t,
                                    isSmallScreen: f,
                                    key: ((l = e.row.id), "expanded-rows-".concat(l)),
                                    size: d,
                                    textStyles: x
                                  })
                                : r.default.createElement(oQ, {
                                    columnGrid: D.gridTemplateColumns,
                                    isSmallScreen: f,
                                    key: ((a = e.row.id), "data-".concat(a)),
                                    measurementCellRef: 0 === n ? S : void 0,
                                    minimumHeight: a2[d],
                                    row: e.row
                                  });
                            })
                          )
                  )
                )
              ),
              ep
                ? r.default.createElement(
                    "div",
                    { className: "absolute inset-[0] flex items-center justify-center", style: a3 },
                    r.default.createElement(eS, {
                      ariaLabel: o.loading,
                      size: "Medium",
                      variant: "Indeterminate"
                    })
                  )
                : null
            ),
            "pagination" === i.mode
              ? r.default.createElement(
                  "div",
                  {
                    className: ""
                      .concat(
                        i.rowsPerPageOptions
                          ? "flex items-center justify-end gap-small"
                          : "flex items-center justify-end",
                        " "
                      )
                      .concat(a5[d])
                  },
                  i.rowsPerPageOptions
                    ? r.default.createElement(
                        "div",
                        { className: "flex items-center gap-small" },
                        r.default.createElement(
                          "span",
                          { className: "".concat(a7[d], " content-default") },
                          o.rowsPerPage
                        ),
                        r.default.createElement(
                          eT,
                          {
                            variant: "Utility",
                            ariaLabel: o.rowsPerPage,
                            className: "width-fit",
                            onValueChange: J,
                            placeholder: String(i.pageSize),
                            size: oe[d],
                            value: String(i.pageSize)
                          },
                          r.default.createElement(
                            eq,
                            null,
                            i.rowsPerPageOptions.map((e) =>
                              r.default.createElement(eQ, {
                                key: e,
                                title: String(e),
                                value: String(e)
                              })
                            )
                          )
                        )
                      )
                    : null,
                  r.default.createElement(
                    "div",
                    { className: "flex items-center gap-large" },
                    r.default.createElement(
                      "span",
                      { className: "".concat(a7[d], " content-default") },
                      o.page(i.pageIndex, i.pageSize, i.totalRowCount)
                    ),
                    r.default.createElement(
                      "div",
                      { className: a9[d] },
                      r.default.createElement(Y, {
                        ariaLabel: o.previousPage,
                        icon: "icon-regular-chevron-small-left",
                        isDisabled: !i.hasPreviousPage || a,
                        onClick: i.onPreviousPage,
                        size: a8[d],
                        variant: "Utility"
                      }),
                      r.default.createElement(Y, {
                        ariaLabel: o.nextPage,
                        icon: "icon-regular-chevron-small-right",
                        isDisabled: null === i.nextCursor || a,
                        onClick: () => {
                          null !== i.nextCursor && i.onNextPage(i.nextCursor);
                        },
                        size: a8[d],
                        variant: "Utility"
                      })
                    )
                  )
                )
              : null
          );
        },
        "AdaptiveDataTableExpandedRows",
        0,
        ag,
        "AreaChart",
        0,
        nL,
        "AreaSeriesDataTypes",
        0,
        iA,
        "BarChart",
        0,
        nI,
        "ChartAbnormalStatus",
        0,
        ia,
        "ChartCardDragDropProvider",
        0,
        (e) => {
          let { value: t, children: n } = e;
          return r.default.createElement(ie.Provider, { value: t }, n);
        },
        "ChartColor",
        0,
        tv,
        "ChartStyleMode",
        0,
        tW,
        "ColumnChart",
        0,
        nk,
        "EmptyChart",
        0,
        n7,
        "LineChart",
        0,
        nB,
        "MapChart",
        0,
        nT,
        "OrderedChartColors",
        0,
        tS,
        "OverflowTitle",
        0,
        o2,
        "PieChart",
        0,
        nP,
        "SankeyChart",
        0,
        n5,
        "SeriesDataTypes",
        0,
        tH,
        "SingleChartCardContainer",
        0,
        iF,
        "TabbedChartsCardContainer",
        0,
        iS,
        "TabbedTimeComparatorChartsCardContainer",
        0,
        ib,
        "TreemapChart",
        0,
        nX,
        "XAxisGranularity",
        0,
        tV,
        "decorateTooltipSeriesName",
        0,
        (e, t) => "".concat(e, "__chip(").concat(t, ")__")
      ],
      887251
    );
  }
]);

//# debugId=98aa7b5e-b259-f248-cd77-b25f483248c8
//# sourceMappingURL=2lk3x_7w_rjt-.js.map
