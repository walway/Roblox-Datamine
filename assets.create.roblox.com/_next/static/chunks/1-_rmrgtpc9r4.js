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
    n && ((e._debugIds || (e._debugIds = {}))[n] = "a86bce13-3b32-0b40-a800-f5e52431a07a");
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
    let t, n, l, a, r;
    var o = e.i(2226),
      i = e.i(569384),
      u = e.i(416340),
      s = e.i(993690),
      d = e.i(706442),
      c = e.i(904090),
      m = e.i(371655),
      h = e.i(199834),
      f = e.i(431346),
      p = e.i(620068),
      g = e.i(597488),
      v = e.i(935606),
      F = e.i(37836),
      b = e.i(884398),
      E = e.i(802506),
      C = e.i(396344),
      S = e.i(242788),
      y = e.i(763937);
    e.s(["CardActions", () => y.a], 531497);
    var y = y,
      A = e.i(802737),
      x = e.i(489279),
      M = e.i(650764),
      N = e.i(988012),
      w = e.i(135196),
      D = e.i(610657),
      B = e.i(558826),
      O = e.i(774807),
      L = e.i(958473),
      k = e.i(643377),
      T = e.i(93235),
      R = e.i(27281),
      I = e.i(149285),
      P = e.i(851670),
      z = e.i(101155),
      _ = e.i(126521),
      W = e.i(197649),
      j = e.i(23342);
    let H = { Large: "size-1200", Medium: "size-1000", Small: "size-800", XSmall: "size-600" },
      V = { XSmall: "size-400", Small: "size-500", Medium: "size-600", Large: "size-700" },
      X = {
        Large: { circular: "radius-circle", square: "radius-medium" },
        Medium: { circular: "radius-circle", square: "radius-medium" },
        Small: { circular: "radius-circle", square: "radius-medium" },
        XSmall: { circular: "radius-circle", square: "radius-small" }
      },
      G = {
        Emphasis: "bg-action-emphasis",
        Standard: "bg-action-standard",
        Alert: "bg-action-alert",
        Utility: "bg-action-link",
        OverMedia: "bg-over-media-0"
      },
      U = {
        Emphasis: "bg-action-standard",
        Standard: "bg-action-standard",
        Alert: "bg-action-standard",
        Utility: "bg-action-link",
        OverMedia: "bg-over-media-0"
      },
      K = {
        Emphasis: "bg-action-emphasis",
        Standard: "bg-action-standard",
        Alert: "bg-action-standard",
        Utility: "bg-shift-300",
        OverMedia: "bg-over-media-0"
      },
      Y = {
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
      Q = (0, u.forwardRef)((e, t) => {
        let n,
          {
            className: l,
            icon: a,
            ariaLabel: r,
            isDisabled: o = !1,
            isCircular: i = !1,
            isSelected: s = !1,
            size: d = "Large",
            variant: c = "Emphasis",
            iconColor: m = "Default",
            asChild: h,
            children: f,
            ...p
          } = e;
        n = o ? U[c] : s ? K[c] : G[c];
        let g = (0, W.default)(
            "foundation-web-icon-button",
            o ? _.disabledOpacity : [z.interactable, "cursor-pointer"],
            "relative flex items-center justify-center padding-none stroke-none select-none",
            H[d],
            X[d][i ? "circular" : "square"],
            n,
            l
          ),
          v = u.default.createElement(
            u.default.Fragment,
            null,
            u.default.createElement(z.StateLayer, null),
            u.default.createElement("span", {
              className: (0, W.default)("icon", a, V[d], o ? q[m][c] : Y[m][c])
            })
          );
        if (h) {
          let { as: e, ...n } = p,
            l = u.default.Children.only(f);
          return u.default.createElement(
            j.Slot,
            { ref: t, ...n, className: g, "aria-label": r, "aria-disabled": o || void 0 },
            u.default.cloneElement(l, {}, v)
          );
        }
        if ("a" === p.as) {
          let { as: e, href: n, ...l } = p;
          return u.default.createElement(
            "a",
            {
              ref: t,
              ...l,
              "aria-label": r,
              "aria-disabled": o,
              href: o ? void 0 : n,
              className: g
            },
            v
          );
        }
        let { as: F, ...b } = p;
        return u.default.createElement(
          "button",
          { ref: t, type: "button", ...b, "aria-label": r, disabled: o, className: g },
          v
        );
      });
    var Z = e.i(677432);
    let J = (0, u.createContext)(null),
      $ = (e) => {
        let t = (0, u.useContext)(J);
        if (!t) throw Error("".concat(e, " must be used within a <Table>"));
        return t;
      },
      ee = { XSmall: "height-800", Small: "height-1200", Medium: "height-1500" },
      et = { XSmall: "padding-x-medium", Small: "padding-x-large", Medium: "padding-x-xlarge" },
      en = { XSmall: "padding-y-xsmall", Small: "padding-y-small", Medium: "padding-y-medium" },
      el = { XSmall: "text-title-small", Small: "text-title-small", Medium: "text-title-medium" },
      ea = { XSmall: "text-body-small", Small: "text-body-medium", Medium: "text-body-medium" },
      er = { start: "text-align-x-start", center: "text-align-x-center", end: "text-align-x-end" },
      eo = { start: "justify-start", center: "justify-center", end: "justify-end" },
      ei = (0, u.forwardRef)((e, t) => {
        let { children: n, size: l = "Medium", variant: a = "Divided", className: r, ...o } = e,
          i = (0, u.useMemo)(() => ({ size: l, variant: a }), [l, a]),
          s = "Framed" === a;
        return u.default.createElement(
          J.Provider,
          { value: i },
          u.default.createElement(
            "div",
            {
              className: (0, W.default)(
                "width-full bg-surface-100",
                s && "radius-medium clip stroke-standard stroke-default"
              )
            },
            u.default.createElement(
              "table",
              {
                ref: t,
                className: (0, W.default)("foundation-web-table width-full content-default", r),
                ...o
              },
              n
            )
          )
        );
      });
    ei.displayName = "Table";
    let eu = (0, u.forwardRef)((e, t) => {
      let { children: n, className: l, ...a } = e;
      return (
        $("TableHeader"),
        u.default.createElement(
          "thead",
          { ref: t, className: (0, W.default)("foundation-web-table-header", l), ...a },
          n
        )
      );
    });
    eu.displayName = "TableHeader";
    let es = (0, u.forwardRef)((e, t) => {
      let { children: n, className: l, ...a } = e;
      return (
        $("TableBody"),
        u.default.createElement(
          "tbody",
          { ref: t, className: (0, W.default)("foundation-web-table-body", l), ...a },
          n
        )
      );
    });
    es.displayName = "TableBody";
    let ed = (0, u.forwardRef)((e, t) => {
      let {
        children: n,
        className: l,
        isInteractive: a = !1,
        isHoverable: r = !1,
        isSelected: o = !1,
        isDisabled: i = !1,
        onClick: s,
        onKeyDown: d,
        tabIndex: c,
        role: m,
        ...h
      } = e;
      $("TableRow");
      let f = a
        ? {
            role: null != m ? m : "row",
            tabIndex: null != c ? c : 0,
            onClick: i ? void 0 : s,
            onKeyDown: (e) => {
              i ||
                (null == d || d(e),
                e.defaultPrevented ||
                  (("Enter" === e.key || " " === e.key) &&
                    (e.preventDefault(), null == s || s(e))));
            }
          }
        : { role: m, tabIndex: c, onClick: s, onKeyDown: d };
      return u.default.createElement(
        "tr",
        {
          ref: t,
          "aria-selected": a ? o : void 0,
          "aria-disabled": (!!a && !!i) || void 0,
          "data-selected": o || void 0,
          className: (0, W.default)(
            "foundation-web-table-row",
            (a || r) && "hover:bg-shift-100",
            a && !i && "cursor-pointer",
            a && i && "opacity-disabled pointer-events-none",
            o && "bg-shift-200",
            l
          ),
          ...f,
          ...h
        },
        n
      );
    });
    ed.displayName = "TableRow";
    let ec = (0, u.forwardRef)((e, t) => {
      let {
          children: n,
          className: l,
          sortDirection: a,
          onSort: r,
          align: o = "start",
          sortLabel: i,
          scope: s,
          ...d
        } = e,
        { size: c } = $("TableHeaderCell"),
        m = !!r,
        h = null != a ? a : "none",
        f =
          m &&
          "none" !== h &&
          u.default.createElement(Z.Icon, {
            name:
              "ascending" === h ? "icon-regular-arrow-small-up" : "icon-regular-arrow-small-down",
            size: "XSmall",
            className: "shrink-0 content-muted"
          }),
        p = u.default.createElement(
          "div",
          {
            className: (0, W.default)("flex items-center gap-xsmall", el[c], "content-muted", eo[o])
          },
          "end" === o && f,
          u.default.createElement("span", { className: "text-truncate-end" }, n),
          "end" !== o && f
        ),
        g = "string" == typeof n ? "Sort by ".concat(n) : void 0;
      return u.default.createElement(
        "th",
        {
          ref: t,
          scope: null != s ? s : "col",
          "aria-sort": m ? h : void 0,
          className: (0, W.default)(
            "foundation-web-table-header-cell foundation-web-table-header-cell-divider",
            en[c],
            et[c],
            er[o],
            "content-muted",
            l
          ),
          ...d
        },
        m
          ? u.default.createElement(
              "button",
              {
                type: "button",
                className:
                  "bg-none stroke-none padding-none margin-none cursor-pointer width-full content-inherit [font:inherit] [text-align:inherit] focus-visible:outline-focus hover:content-default hover:bg-shift-100 radius-small",
                onClick: r,
                "aria-label": null != i ? i : g
              },
              p
            )
          : p
      );
    });
    ec.displayName = "TableHeaderCell";
    let em = (0, u.forwardRef)((e, t) => {
      let { children: n, className: l, align: a = "start", ...r } = e,
        { size: o } = $("TableCell");
      return u.default.createElement(
        "td",
        {
          ref: t,
          className: (0, W.default)(
            "foundation-web-table-cell foundation-web-table-row-divider",
            ee[o],
            et[o],
            ea[o],
            er[a],
            "content-default",
            l
          ),
          ...r
        },
        n
      );
    });
    em.displayName = "TableCell";
    let eh = { XSmall: "padding-x-small", Small: "padding-x-medium", Medium: "padding-x-large" },
      ef = { XSmall: "padding-y-xsmall", Small: "padding-y-small", Medium: "padding-y-medium" },
      ep = { XSmall: "text-title-small", Small: "text-title-small", Medium: "text-title-small" },
      eg = { XSmall: "text-body-small", Small: "text-body-small", Medium: "text-body-medium" },
      ev = { XSmall: "gap-xsmall", Small: "gap-xsmall", Medium: "gap-small" },
      eF = { XSmall: "XSmall", Small: "XSmall", Medium: "Small" };
    (0, u.forwardRef)((e, t) => {
      let {
          size: n = "Medium",
          page: l,
          rowsPerPage: a,
          totalRows: r,
          rowsPerPageOptions: o = [10, 25, 50],
          onPageChange: i,
          onRowsPerPageChange: s,
          rowsPerPageLabel: d = "Rows per page",
          firstPageLabel: c = "First page",
          previousPageLabel: m = "Previous page",
          nextPageLabel: h = "Next page",
          lastPageLabel: f = "Last page",
          rangeLabel: p,
          className: g,
          ...v
        } = e,
        F = Math.max(1, Math.ceil(r / a)),
        b = 0 === l,
        E = l >= F - 1,
        C = 0 === r ? 0 : l * a + 1,
        S = Math.min((l + 1) * a, r),
        y = (0, u.useCallback)(
          (e) => {
            let t = Number(e.target.value);
            (null == s || s(t), i(0));
          },
          [s, i]
        ),
        A = eF[n];
      return u.default.createElement(
        "div",
        {
          ref: t,
          className: (0, W.default)("flex items-center justify-end", eh[n], ef[n], g),
          ...v
        },
        u.default.createElement(
          "div",
          { className: "flex items-center gap-large" },
          u.default.createElement(
            "div",
            { className: "flex items-center gap-xlarge" },
            s &&
              u.default.createElement(
                "div",
                { className: "flex items-center gap-small" },
                u.default.createElement(
                  "span",
                  { className: (0, W.default)(ep[n], "content-default") },
                  d
                ),
                u.default.createElement(
                  "div",
                  { className: "foundation-web-table-pagination-select-wrapper relative" },
                  u.default.createElement(
                    "select",
                    {
                      className: (0, W.default)(
                        "foundation-web-table-pagination-select",
                        ep[n],
                        "content-default bg-action-standard radius-small cursor-pointer",
                        "Medium" === n
                          ? "height-800 padding-x-medium"
                          : "height-600 padding-x-small"
                      ),
                      value: a,
                      onChange: y,
                      "aria-label": d
                    },
                    o.map((e) => u.default.createElement("option", { key: e, value: e }, e))
                  )
                )
              ),
            u.default.createElement(
              "span",
              { className: (0, W.default)(eg[n], "content-default") },
              p ? p(C, S, r) : "".concat(C, "-").concat(S, " of ").concat(r)
            )
          ),
          u.default.createElement(
            "div",
            { className: (0, W.default)("flex items-center", ev[n]) },
            u.default.createElement(Q, {
              icon: "icon-regular-double-chevron-large-left",
              ariaLabel: c,
              size: A,
              variant: "Utility",
              isDisabled: b,
              onClick: () => i(0)
            }),
            u.default.createElement(Q, {
              icon: "icon-regular-chevron-small-left",
              ariaLabel: m,
              size: A,
              variant: "Utility",
              isDisabled: b,
              onClick: () => i(l - 1)
            }),
            u.default.createElement(Q, {
              icon: "icon-regular-chevron-small-right",
              ariaLabel: h,
              size: A,
              variant: "Utility",
              isDisabled: E,
              onClick: () => i(l + 1)
            }),
            u.default.createElement(Q, {
              icon: "icon-regular-double-chevron-large-right",
              ariaLabel: f,
              size: A,
              variant: "Utility",
              isDisabled: E,
              onClick: () => i(F - 1)
            })
          )
        )
      );
    }).displayName = "TablePagination";
    var eb = e.i(778291);
    let eE = {
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
      eC = u.default.forwardRef((e, t) => {
        let {
            className: n,
            size: l = "Large",
            variant: a = "Determinate",
            value: r = 0,
            showValue: o = !1,
            ariaLabel: i,
            ...s
          } = e,
          { dimension: d, strokeWidth: c, textClass: m, valueContainerSize: h } = eE[l],
          f = (d - c) / 2,
          p = 2 * Math.PI * f,
          g = d / 2,
          v = Math.min(100, Math.max(0, r)),
          F = o && void 0 !== h ? h : d,
          b = "Determinate" === a;
        return u.default.createElement(
          "div",
          {
            ref: t,
            className: (0, W.default)(
              "foundation-web-progress-circle inline-flex items-center justify-center",
              n
            ),
            role: "progressbar",
            "aria-label": i,
            "aria-valuemin": b ? 0 : void 0,
            "aria-valuemax": b ? 100 : void 0,
            "aria-valuenow": b ? v : void 0,
            style: { width: F, height: F },
            ...s
          },
          u.default.createElement(
            "svg",
            {
              width: d,
              height: d,
              viewBox: "0 0 ".concat(d, " ").concat(d),
              className: "relative"
            },
            u.default.createElement("circle", {
              cx: g,
              cy: g,
              r: f,
              fill: "none",
              strokeWidth: c,
              style: { stroke: "var(--color-shift-200)" }
            }),
            u.default.createElement("circle", {
              cx: g,
              cy: g,
              r: f,
              fill: "none",
              strokeWidth: c,
              strokeDasharray: b ? p : "".concat(0.75 * p, " ").concat(0.25 * p),
              strokeDashoffset: b ? p * (1 - v / 100) : 0,
              strokeLinecap: "round",
              className: (0, W.default)(!b && "foundation-web-progress-circle-indeterminate"),
              style: b
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
          b &&
            o &&
            "Large" === l &&
            u.default.createElement(
              "div",
              {
                className: (0, W.default)(
                  "absolute content-emphasis flex items-center justify-center",
                  m
                ),
                "aria-hidden": "true"
              },
              u.default.createElement("span", null, Math.round(v)),
              u.default.createElement("span", null, "%")
            )
        );
      });
    eC.displayName = "ProgressCircle";
    let eS = 0,
      ey = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "«r",
          t = (0, u.useRef)();
        return (t.current || ((eS += 1), (t.current = "".concat(e).concat(eS))), t.current);
      };
    var eA = e.i(435536);
    let ex = (e) => {
        let { title: t, description: n, position: l = "top-center" } = e;
        return u.default.createElement(
          eA.Tooltip,
          { position: l, title: t, description: n },
          u.default.createElement(
            eA.TooltipTrigger,
            { asChild: !0 },
            u.default.createElement(
              "span",
              {
                role: "button",
                tabIndex: 0,
                "aria-label": t,
                className: "flex items-center content-muted",
                "data-testid": "label-tooltip-trigger"
              },
              u.default.createElement(Z.Icon, { name: "icon-regular-circle-i", size: "Small" })
            )
          )
        );
      },
      eM = { Standard: "bg-none", Contrast: "bg-shift-200", Utility: "bg-none" },
      eN = { Standard: "stroke-standard", Contrast: "stroke-none", Utility: "stroke-none" };
    var ew = e.i(563921);
    let eD = (0, u.createContext)(null),
      eB = { XSmall: "size-300", Small: "size-400", Medium: "size-500", Large: "size-600" },
      eO = {
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
      ek = {
        XSmall: "text-body-small",
        Small: "text-body-small",
        Medium: "text-body-medium",
        Large: "text-body-large"
      },
      eT = { XSmall: "gap-xsmall", Small: "gap-small", Medium: "gap-small", Large: "gap-small" },
      eR = {
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
      eP = (0, u.forwardRef)((e, t) => {
        let {
            label: n,
            labelTooltip: l,
            ariaLabelledBy: a,
            ariaLabel: r,
            className: o,
            size: i,
            variant: s = "Standard",
            value: d,
            placeholder: c,
            isDisabled: m,
            hasError: h,
            hint: f,
            onValueChange: p,
            onOpenChange: g,
            children: v
          } = e,
          F = ey(),
          b = (0, u.useMemo)(() => ({ size: i }), [i]),
          E = n
            ? u.default.createElement(
                "span",
                { id: F, className: (0, W.default)(eL[i], "content-emphasis") },
                n
              )
            : null;
        return u.default.createElement(
          eD.Provider,
          { value: b },
          u.default.createElement(
            "div",
            {
              className: (0, W.default)(
                "flex flex-col",
                m && ["opacity-[0.5]", "pointer-events-none"],
                eT[i],
                o
              )
            },
            E &&
              (l
                ? u.default.createElement(
                    "div",
                    { className: "flex items-center gap-xsmall" },
                    E,
                    u.default.createElement(ex, l)
                  )
                : E),
            u.default.createElement(
              ew.Root,
              { value: d, disabled: m, onValueChange: p, onOpenChange: g },
              u.default.createElement(
                ew.Trigger,
                {
                  className: (0, W.default)(
                    "relative clip group/interactable outline-none",
                    "foundation-web-input flex items-center justify-between width-full cursor-pointer",
                    eM[s],
                    eN[s],
                    eR[i],
                    eI[i],
                    eO[i],
                    ek[i],
                    h
                      ? "stroke-system-alert focus-within:stroke-system-alert"
                      : "stroke-contrast-alpha focus-within:stroke-system-emphasis",
                    void 0 === d ? "content-muted" : "content-default"
                  ),
                  ref: t,
                  "aria-labelledby": n ? F : a,
                  "aria-label": r
                },
                u.default.createElement(z.StateLayer, null),
                u.default.createElement(
                  "div",
                  { className: "grow-1 text-truncate-split text-align-x-left" },
                  u.default.createElement(ew.Value, { placeholder: c })
                ),
                u.default.createElement(ew.Icon, {
                  className: (0, W.default)(
                    eB[i],
                    "icon icon-regular-chevron-large-down content-default"
                  )
                })
              ),
              u.default.createElement(
                ew.Portal,
                null,
                u.default.createElement(
                  ew.Content,
                  {
                    position: "popper",
                    className: "padding-y-small foundation-web-portal-zindex",
                    style: { maxHeight: "var(--radix-select-content-available-height)" }
                  },
                  v
                )
              )
            ),
            f &&
              u.default.createElement(
                "span",
                {
                  className: (0, W.default)("text-caption-small", {
                    "content-system-alert": h,
                    "content-default": !h
                  })
                },
                f
              )
          )
        );
      });
    eP.displayName = "Dropdown";
    var ez = e.i(142953);
    let e_ = {
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
      ej = {
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
      eV = {
        XSmall: "gap-x-medium",
        Small: "gap-x-medium",
        Medium: "gap-x-medium",
        Large: "gap-x-large"
      },
      eX = {
        XSmall: "gap-y-xxsmall",
        Small: "gap-y-xxsmall",
        Medium: "gap-y-xsmall",
        Large: "gap-y-xsmall"
      },
      eG = {
        XSmall: "text-body-small",
        Small: "text-body-small",
        Medium: "text-body-medium",
        Large: "text-body-large"
      },
      eU = {
        XSmall: "radius-small",
        Small: "radius-medium",
        Medium: "radius-medium",
        Large: "radius-medium"
      },
      eK = (0, u.createContext)(null),
      eY = () => {
        let e = (0, u.useContext)(eK);
        if (!e) throw Error("Menu components must be used within a Menu");
        return e;
      },
      eq = (e) => {
        var t;
        let { children: n, className: l, size: a } = e,
          r = (0, u.useContext)(eD),
          o = r ? "dropdown" : "standalone",
          i = null != (t = null != a ? a : null == r ? void 0 : r.size) ? t : "Medium",
          s = (0, u.useMemo)(() => ({ size: i, mode: o }), [i, o]),
          d = (0, W.default)(
            "foundation-web-menu bg-surface-100 stroke-standard stroke-default shadow-transient-high",
            e_[i],
            l
          ),
          c =
            "standalone" === o
              ? u.default.createElement(
                  ez.Root,
                  { asChild: !0, orientation: "vertical", loop: !0 },
                  u.default.createElement("div", { role: "menu", tabIndex: -1, className: d }, n)
                )
              : u.default.createElement("div", { className: d }, n);
        return u.default.createElement(
          eK.Provider,
          { value: s },
          "dropdown" === o
            ? u.default.createElement(
                ew.Viewport,
                { asChild: !0, style: { width: "var(--radix-popper-anchor-width)" } },
                c
              )
            : c
        );
      },
      eQ = (e) => {
        let { children: t, className: n } = e,
          { size: l } = eY();
        return u.default.createElement(
          "div",
          { role: "group", className: (0, W.default)(eW[l], n) },
          t
        );
      },
      eZ = (e) => {
        let t,
          {
            value: n,
            leading: l,
            title: a,
            description: r,
            trailing: o,
            disabled: i,
            className: s,
            onSelect: d,
            asChild: c,
            children: m,
            ...h
          } = e,
          { size: f, mode: p } = eY(),
          g = (0, W.default)(
            z.interactable,
            "foundation-web-menu-item flex items-center content-default text-truncate-split focus-visible:hover:outline-none cursor-pointer stroke-none bg-none text-align-x-left width-full",
            eG[f],
            ej[f],
            eH[f],
            eV[f],
            eU[f],
            i && "opacity-[0.5]",
            i && "pointer-events-none",
            s
          ),
          v = u.default.createElement(
            "span",
            {
              className:
                "foundation-web-menu-item-title text-no-wrap text-truncate-split content-emphasis"
            },
            a
          );
        switch (p) {
          case "dropdown":
            v = u.default.createElement(ew.ItemText, { asChild: !0 }, v);
            break;
          case "standalone":
            break;
          default:
            console.error("Invalid menu mode:", p);
        }
        let F = u.default.createElement(
          u.default.Fragment,
          null,
          !i && u.default.createElement(z.StateLayer, null),
          l,
          u.default.createElement(
            "div",
            { className: (0, W.default)("grow-1 text-truncate-split flex flex-col", eX[f]) },
            v,
            r &&
              u.default.createElement(
                "div",
                { className: "foundation-web-menu-item-description content-muted" },
                r
              )
          ),
          o
        );
        if (c) {
          let { as: e, ...n } = h,
            l = u.default.Children.only(m),
            r = void 0 === a && l.props.children;
          t = u.default.createElement(
            j.Slot,
            {
              ...n,
              role: "standalone" === p ? "menuitem" : void 0,
              "aria-disabled": i || void 0,
              className: g,
              style: { outlineOffset: 0 },
              onClick: i ? void 0 : d
            },
            r
              ? u.default.cloneElement(
                  l,
                  {},
                  u.default.createElement(
                    u.default.Fragment,
                    null,
                    !i && u.default.createElement(z.StateLayer, null),
                    l.props.children
                  )
                )
              : u.default.cloneElement(l, {}, F)
          );
        } else if ("a" === h.as) {
          let { as: e, href: n, ...l } = h;
          t = u.default.createElement(
            "a",
            {
              ...l,
              role: "standalone" === p ? "menuitem" : void 0,
              "aria-disabled": i,
              href: i ? void 0 : n,
              className: g,
              style: { outlineOffset: 0, textDecoration: "none" },
              onClick: i ? void 0 : d
            },
            F
          );
        } else {
          let { as: e, ...n } = h;
          t = u.default.createElement(
            "button",
            {
              type: "button",
              ...n,
              role: "standalone" === p ? "menuitem" : void 0,
              "aria-disabled": i,
              className: g,
              style: { outlineOffset: 0 },
              onClick: i ? void 0 : d
            },
            F
          );
        }
        return "dropdown" === p
          ? u.default.createElement(ew.Item, { value: n, disabled: i, asChild: !0 }, t)
          : u.default.createElement(ez.Item, { asChild: !0, focusable: !0, tabStopId: n }, t);
      };
    var eJ = e.i(734463);
    let e$ = (e) => {
      var t, n, l, a, r, o;
      let i =
          null !=
            (t =
              null == (l = (a = window).matchMedia) || null == (n = l.call(a, "(pointer: coarse)"))
                ? void 0
                : n.matches) && t,
        u = null == (r = document.activeElement) ? void 0 : r.matches(":focus-visible");
      if (i && !u) return void e.preventDefault();
      let s =
        null == (o = e.currentTarget)
          ? void 0
          : o.querySelector('[role="menuitem"]:not([aria-disabled="true"])');
      s && (e.preventDefault(), s.focus());
    };
    function e0(e) {
      let { open: t, defaultOpen: n, onOpenChange: l, children: a } = e;
      return u.createElement(eJ.Root, { open: t, defaultOpen: n, onOpenChange: l }, a);
    }
    function e1(e) {
      let { asChild: t, disabled: n, className: l, children: a } = e;
      return u.createElement(eJ.Trigger, { asChild: t, disabled: n, className: l }, a);
    }
    function e2(e) {
      let {
        side: t = "bottom",
        align: n = "center",
        sideOffset: l = 4,
        className: a,
        children: r,
        ariaLabel: o,
        onOpenAutoFocus: i,
        ...s
      } = e;
      return u.createElement(
        eJ.Portal,
        null,
        u.createElement(
          eJ.Content,
          {
            side: t,
            align: n,
            sideOffset: l,
            ...s,
            "aria-label": null != o ? o : s["aria-label"],
            onOpenAutoFocus: null != i ? i : e$,
            className: (0, W.default)("foundation-web-portal-zindex", a)
          },
          r
        )
      );
    }
    var e6 = e.i(15199);
    let e3 = {
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
      e4 = {
        Info: "var(--dark-mode-content-default)",
        Warning: "var(--light-mode-content-default)",
        Success: "var(--light-mode-content-default)",
        Error: "var(--dark-mode-content-default)"
      },
      e5 = {
        Info: "var(--light-mode-system-emphasis)",
        Warning: "var(--light-mode-system-warning)",
        Success: "var(--light-mode-system-success)",
        Error: "var(--light-mode-system-alert)"
      },
      e7 = {
        Info: "icon-filled-circle-i",
        Warning: "icon-filled-triangle-exclamation",
        Success: "icon-filled-circle-check",
        Error: "icon-filled-circle-x"
      },
      e9 = {
        Info: "bg-action-standard",
        Warning: "bg-inverse-action-standard",
        Success: "bg-inverse-action-standard",
        Error: "bg-action-standard"
      },
      e8 = {
        Info: "var(--dark-mode-content-emphasis)",
        Warning: "var(--light-mode-content-emphasis)",
        Success: "var(--light-mode-content-emphasis)",
        Error: "var(--dark-mode-content-emphasis)"
      },
      te = (0, u.forwardRef)((e, t) => {
        let {
            title: n,
            description: l,
            showIcon: a = !0,
            infoIconOverride: r,
            variant: o = "Standard",
            severity: i = "Info",
            primaryActionLabel: s,
            onPrimaryAction: d,
            actions: c,
            onDismiss: m,
            dismissIconAriaLabel: h = "Dismiss banner",
            className: f,
            ...p
          } = e,
          g = e3[o][i],
          v = e8[i],
          F = e4[i],
          b = e5[i],
          E = "Emphasis" === o ? e9[i] : "",
          C = "Emphasis" === o ? e8[i] : "";
        return u.default.createElement(
          "div",
          {
            ref: t,
            role: "Warning" === i || "Error" === i ? "alert" : "status",
            className: (0, W.default)(
              "foundation-web-system-banner w-full flex items-center gap-medium radius-medium stroke-none padding-y-medium padding-x-large",
              g,
              f
            ),
            ...p
          },
          u.default.createElement(
            "div",
            { className: "flex items-center gap-medium grow-1 basis-0" },
            a &&
              u.default.createElement(Z.Icon, {
                name: "Info" === i && r ? r : e7[i],
                size: "Large",
                className: (0, W.default)("shrink-0"),
                style: { color: "Standard" === o ? b : C }
              }),
            u.default.createElement(
              "div",
              { className: "flex flex-col gap-xsmall grow-1 basis-0" },
              u.default.createElement(
                "div",
                {
                  className: (0, W.default)(
                    "text-title-medium text-truncate-end",
                    "Standard" === o ? "content-emphasis" : ""
                  ),
                  style: { color: "Emphasis" === o ? v : void 0 }
                },
                n
              ),
              l &&
                u.default.createElement(
                  "div",
                  {
                    className: (0, W.default)(
                      "text-body-medium text-truncate-split",
                      "Standard" === o ? "content-default" : ""
                    ),
                    style: { color: "Emphasis" === o ? F : void 0 }
                  },
                  l
                )
            )
          ),
          (s || c || m) &&
            u.default.createElement(
              "div",
              { className: "flex items-center justify-end gap-small shrink-0" },
              null != c
                ? c
                : s &&
                    d &&
                    u.default.createElement(
                      eb.Button,
                      {
                        size: "Small",
                        variant: "Standard",
                        onClick: d,
                        className: (0, W.default)(E),
                        style: { color: C }
                      },
                      s
                    ),
              m &&
                u.default.createElement(e6.CloseAffordance, {
                  variant: "Utility",
                  size: "Small",
                  isCircular: !0,
                  style: { color: C || void 0 },
                  "aria-label": h,
                  onClick: m
                })
            )
        );
      });
    function tt() {
      let e = (0, i._)([
        "\n        transform: translateY(",
        "px) translateX(",
        "px)\n          rotate(",
        "deg);\n      "
      ]);
      return (
        (tt = function () {
          return e;
        }),
        e
      );
    }
    let tn = u.default.createContext({
        activeAnnotationId: null,
        updateActiveAnnotationId: void 0
      }),
      tl = (e) => {
        let { children: t } = e,
          [n, l] = (0, u.useState)(null),
          [, a] = (0, u.useTransition)(),
          r = (0, u.useCallback)(
            (e) => {
              a(() => {
                l(e);
              });
            },
            [a]
          ),
          o = (0, u.useMemo)(
            () => ({ activeAnnotationId: n, updateActiveAnnotationId: r }),
            [n, r]
          );
        return u.default.createElement(tn.Provider, { value: o }, t);
      },
      ta = (0, d.makeStyles)()((e) => ({
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
    var tr,
      to,
      ti,
      tu,
      ts,
      td,
      tc,
      tm,
      th,
      tf,
      tp,
      tg,
      tv,
      tF,
      tb = u.default.memo((e) => {
        let { annotation: t } = e,
          {
            classes: { tooltipContainer: n, icon: l, iconActive: a },
            cx: r
          } = ta(),
          { activeAnnotationId: o } = (0, u.useContext)(tn),
          i = o === t.id;
        return u.default.createElement(
          c.Tooltip,
          { title: t.tooltip, placement: "top", classes: { tooltip: n }, open: o === t.id },
          u.default.createElement(t.Icon, { classes: { root: r(l, { [a]: i }) } })
        );
      });
    let tE = (e) => {
        let { annotationPosition: t, upperBound: n } = e,
          { startLeft: l, endLeft: a } = t;
        return void 0 === a ? l : Math.max(Math.min((l + a) / 2, n), 0);
      },
      tC = (e) => {
        let { annotation: t, formatXForAnnotationTooltip: n } = e,
          l = null == n ? void 0 : n(t.start, t.id);
        return {
          title: l
            ? u.default.createElement(
                h.Typography,
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
                  .concat(m.tooltipClasses.popper, '[data-popper-placement*="bottom"] .')
                  .concat(m.tooltipClasses.tooltip)]: { marginTop: "1px" }
              },
              modifiers: [
                { name: "flip", enabled: !1 },
                { name: "preventOverflow", enabled: !1 }
              ]
            }
          }
        };
      };
    var tS =
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
    let ty = {
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
      tA = {
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
      tx = [
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
      tM = [...tx, "Yellow3", "Green3", "Cyan2", "Blue3", "Purple4"],
      tN = tx.map((e) => tA[e]),
      tw = tx.map((e) => ty[e]),
      tD = (e, t) => ("light" === t.palette.mode ? tA[e] : ty[e]),
      tB = (e) => {
        let t = "dark" === e.palette.mode;
        return {
          axis: e.palette.content.disabled,
          gridLine: e.palette.surface.outline,
          axisValueText: e.palette.content.muted,
          legendText: e.palette.content.standard,
          dataLabelText: e.palette.content.standard,
          benchmarkLineColor: e.palette.content.standard,
          comparisonLineColor: tD("Blue", e),
          tooltipText: e.palette.content.inverse,
          tooltipBackground: e.palette.content.standard,
          columnTotalSeriesLineColor: e.palette.content.standard,
          zoneLegendSymbol: "#BBBCBE",
          annotationVerticalLine: t ? e.palette.common.white : e.palette.common.black,
          annotationVerticalRange: tD("Red", e)
        };
      },
      tO = (e, t) =>
        "dark" === e.palette.mode
          ? "standard" === t
            ? e.palette.content.standard
            : e.palette.content.inverse
          : "standard" === t
            ? e.palette.content.inverse
            : e.palette.content.standard,
      tL = (e) => void 0 !== e.end && void 0 !== e.endLeft,
      tk = (e) => {
        let { annotation: t, chartPlotPosition: n } = e,
          { activeAnnotationId: l } = (0, u.useContext)(tn),
          a = (0, f.useTheme)(),
          { left: r, top: o, height: i, width: s } = n,
          { rangeAnnotationConfig: d, startLeft: c, endLeft: m } = t,
          h = (0, u.useMemo)(() => {
            let e = (null == d ? void 0 : d.curtainColor)
                ? tD(d.curtainColor, a)
                : tB(a).annotationVerticalRange,
              n = "1px dashed ".concat(e),
              u = Math.max(r + c, r),
              h = l === t.id ? 0.25 : 0.2;
            return {
              position: "absolute",
              height: i,
              top: o + 1,
              left: u,
              width: Math.min(m + r, s + r) - u,
              borderLeft: c >= 0 ? n : void 0,
              borderRight: m <= s ? n : void 0,
              backgroundColor: "".concat(e).concat(Math.round(255 * h).toString(16))
            };
          }, [null == d ? void 0 : d.curtainColor, a, r, c, l, t.id, i, o, m, s]);
        return u.default.createElement("div", { style: h });
      },
      tT = (0, d.makeStyles)()((e, t, n) => ({
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
    var tR = u.default.memo((e) => {
      let { group: t, chartPlotPosition: n, formatXForAnnotationTooltip: l } = e,
        {
          classes: {
            annotationGroup: a,
            dimmedAnnotationGroup: r,
            annotationIconContainer: o,
            annotationGroupActive: i
          },
          css: s,
          cx: d,
          theme: m
        } = tT(),
        { activeAnnotationId: f, updateActiveAnnotationId: p } = (0, u.useContext)(tn),
        { left: g, top: v, height: F, width: b } = n,
        E = (0, u.useRef)(null),
        C = (0, u.useMemo)(
          () =>
            t
              .map((e) => {
                let { id: t } = e;
                return t;
              })
              .join("-"),
          [t]
        ),
        S = (0, u.useMemo)(
          () =>
            f === C ||
            t.some((e) => {
              let { id: t } = e;
              return t === f;
            }),
          [f, C, t]
        ),
        y = tE({ annotationPosition: t[0], upperBound: b }),
        A = (0, u.useMemo)(
          () => Math.min(Math.max(Math.floor((b - (y - 14 - 6)) / 34), 1), t.length, 7),
          [b, t.length, y]
        ),
        x = (0, u.useMemo)(
          () => ({ left: g + y, top: v, gridTemplateColumns: "repeat(".concat(A, ", 28px)") }),
          [g, v, A, y]
        ),
        M = (0, u.useCallback)(() => {
          null == p || p(C);
        }, [C, p]),
        N = (0, u.useCallback)(() => {
          null == p || p(null);
        }, [p]),
        w = (0, u.useCallback)(
          (e) => {
            null == p || p(e.currentTarget.id);
          },
          [p]
        ),
        D = (0, u.useMemo)(() => {
          let e = A * Math.floor(F / 34) - 1,
            n = t.slice(0, S ? e : 4),
            l = n.map((e, t) => {
              let l = t % A,
                a = Math.floor(t / A),
                r = s(tt(), -(28 * a), -(28 * l), -8 * (n.length - t - 1));
              return u.default.createElement(
                "div",
                { key: e.id, id: e.id, onMouseEnter: S ? w : void 0, className: d(o, r) },
                u.default.createElement(tb, { annotation: e })
              );
            });
          return (
            S &&
              l.length < t.length &&
              l.push(
                u.default.createElement(
                  h.Typography,
                  { variant: "h3", display: "block", textAlign: "center", key: "ellipsis" },
                  "..."
                )
              ),
            l
          );
        }, [F, A, t, S, s, w, d, o]),
        [B, O] = (0, u.useState)("Ended"),
        L = (0, u.useCallback)((e) => {
          "transform" === e.propertyName && O("Ended");
        }, []);
      (0, u.useEffect)(() => {
        S && O("inTransition");
      }, [S]);
      let k = (0, u.useMemo)(() => {
          let e = [];
          t.forEach((t) => {
            var l;
            tL(t) &&
              (null == (l = t.rangeAnnotationConfig) ? void 0 : l.curtainStayOnChart) &&
              e.push(
                u.default.createElement(tk, { key: t.id, annotation: t, chartPlotPosition: n })
              );
          });
          let l = t.find((e) => {
            let { id: t } = e;
            return t === f;
          });
          return l
            ? (tL(l) &&
                e.push(
                  u.default.createElement(tk, { key: l.id, annotation: l, chartPlotPosition: n })
                ),
              e)
            : e.length
              ? e
              : null;
        }, [f, n, t]),
        T = (0, u.useMemo)(() => {
          let e = E.current;
          if (!e || !S || "Ended" !== B) return null;
          let n = t.findIndex((e) => {
            let { id: t } = e;
            return t === f;
          });
          if (-1 === n) return null;
          let a = t[n];
          if (tL(a)) return null;
          let r = tE({ annotationPosition: a, upperBound: b }),
            o = Math.floor((e.offsetWidth - 6) / 34),
            i = {
              position: "absolute",
              border: "0.5px dashed ".concat(m.palette.content.standard),
              zIndex: m.zIndex.tooltip
            },
            s = {
              ...i,
              height: 4,
              top: e.offsetTop + e.offsetHeight - 6,
              left: g + y + (n % o) * 34
            },
            d = s.left < g + r,
            h = {
              ...i,
              top: s.top + s.height + 1,
              left: d ? s.left : g + r,
              width: Math.abs(s.left - (g + r))
            },
            p = { ...i, top: h.top + 1, left: g + r, height: F - h.top + 6 };
          return u.default.createElement(
            u.default.Fragment,
            null,
            u.default.createElement("div", { style: s }),
            u.default.createElement("div", { style: h }),
            u.default.createElement(
              c.Tooltip,
              tC({ annotation: a, formatXForAnnotationTooltip: l }),
              u.default.createElement("div", { style: p })
            )
          );
        }, [S, B, t, b, m.palette.content.standard, m.zIndex.tooltip, g, y, F, l, f]);
      return u.default.createElement(
        u.default.Fragment,
        null,
        u.default.createElement(
          "div",
          {
            ref: E,
            className: d(a, { [r]: !S && null !== f, [i]: S }),
            style: x,
            onMouseEnter: M,
            onMouseLeave: N,
            onTransitionEnd: L
          },
          D
        ),
        T,
        k
      );
    });
    let tI = (0, d.makeStyles)()(() => ({
      annotationContainer: {
        display: "flex",
        position: "absolute",
        transition: "0.2s ease",
        transitionProperty: "opacity",
        zIndex: 2
      },
      dimmed: { opacity: 0.2 }
    }));
    var tP = u.default.memo((e) => {
      let { annotation: t, chartPlotPosition: n, formatXForAnnotationTooltip: l } = e,
        {
          classes: { annotationContainer: a, dimmed: r },
          cx: o,
          theme: i
        } = tI(),
        { activeAnnotationId: s, updateActiveAnnotationId: d } = (0, u.useContext)(tn),
        m = t.id === s,
        { left: h, top: f, width: p, height: g } = n,
        v = (0, u.useMemo)(
          () => ({
            left: h + tE({ annotationPosition: t, upperBound: p }),
            top: f,
            transform: "translateX(-50%)"
          }),
          [t, h, f, p]
        ),
        F = (0, u.useMemo)(() => {
          var e;
          if (tL(t) && (null == (e = t.rangeAnnotationConfig) ? void 0 : e.curtainStayOnChart))
            return u.default.createElement(tk, { annotation: t, chartPlotPosition: n });
          if (!m) return null;
          if (tL(t)) return u.default.createElement(tk, { annotation: t, chartPlotPosition: n });
          let a = {
              position: "absolute",
              height: g,
              left: v.left,
              top: f,
              border: "0.5px dashed ".concat(tB(i).annotationVerticalLine)
            },
            r = tC({ annotation: t, formatXForAnnotationTooltip: l });
          return u.default.createElement(
            c.Tooltip,
            r,
            u.default.createElement("div", { style: a })
          );
        }, [m, t, g, n, f, v.left, l, i]),
        b = (0, u.useCallback)(() => {
          null == d || d(t.id);
        }, [t.id, d]),
        E = (0, u.useCallback)(() => {
          null == d || d(null);
        }, [d]);
      return u.default.createElement(
        u.default.Fragment,
        null,
        F,
        u.default.createElement(
          "div",
          {
            className: o(a, { [r]: null !== s && !m }),
            style: v,
            onMouseEnter: b,
            onMouseLeave: E
          },
          u.default.createElement(tb, { annotation: t })
        )
      );
    });
    let tz = [],
      t_ = (0, d.makeStyles)()(() => ({
        chartWithAnnotationsContainer: { position: "relative" },
        chartContainer: { zIndex: 1 }
      })),
      tW = (e) => (t) => {
        let {
            classes: { chartWithAnnotationsContainer: n, chartContainer: l }
          } = t_(),
          { annotations: a, onAnnotationsPositionsUpdated: r, formatXForAnnotationTooltip: o } = t,
          [{ annotationPositions: i, chartPlotPosition: s }, d] = (0, u.useState)({
            annotationPositions: [],
            chartPlotPosition: { left: 0, top: 0, height: 0, width: 0 }
          }),
          c = (0, u.useCallback)(
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
                null == r || r({ labelsPosition: t, chartPlotPosition: n }));
            },
            [r]
          ),
          m = ((e) => {
            let { annotationPositions: t, annotations: n, chartPlotWidth: l } = e,
              a = (0, u.useMemo)(
                () =>
                  [...t].sort(
                    (e, t) =>
                      tE({ annotationPosition: e, upperBound: l }) -
                      tE({ annotationPosition: t, upperBound: l })
                  ),
                [t, l]
              );
            return (0, u.useMemo)(() => {
              if (!(null == n ? void 0 : n.length)) return tz;
              let e = [];
              return (
                a.forEach((t) => {
                  let a = n.find((e) => e.id === t.id);
                  if (!a) return;
                  let r = tE({ annotationPosition: t, upperBound: l }),
                    o = e.length > 0 ? e[e.length - 1] : null;
                  if (o)
                    if (Array.isArray(o))
                      tE({ annotationPosition: o[0], upperBound: l }) + 38 >= r
                        ? o.push({ ...a, ...t })
                        : e.push({ ...a, ...t });
                    else if (tE({ annotationPosition: o, upperBound: l }) + 38 >= r) {
                      let n = [o, { ...a, ...t }];
                      e[e.length - 1] = n;
                    } else e.push({ ...a, ...t });
                  else e.push({ ...a, ...t });
                }),
                e
              );
            }, [n, l, a]);
          })({ annotationPositions: i, annotations: a, chartPlotWidth: s.width }),
          h = (0, u.useMemo)(() => {
            let e = [];
            return (
              m.forEach((t) => {
                Array.isArray(t)
                  ? e.push(
                      u.default.createElement(tR, {
                        key: t[0].id,
                        group: t,
                        chartPlotPosition: s,
                        formatXForAnnotationTooltip: o
                      })
                    )
                  : e.push(
                      u.default.createElement(tP, {
                        key: t.id,
                        annotation: t,
                        chartPlotPosition: s,
                        formatXForAnnotationTooltip: o
                      })
                    );
              }),
              e
            );
          }, [m, s, o]);
        return u.default.createElement(
          tl,
          null,
          u.default.createElement(
            "div",
            { className: n },
            h,
            u.default.createElement(
              "div",
              { className: l },
              u.default.createElement(e, {
                ...t,
                onAnnotationsPositionsUpdated: (null == a ? void 0 : a.length) ? c : void 0
              })
            )
          )
        );
      };
    tW.displayName = "WithAnnotations";
    let tj = u.default.createContext(!1),
      tH = (e) => {
        let { value: t, children: n } = e;
        return u.default.createElement(tj.Provider, { value: t }, n);
      };
    var tV =
        (((ti = {}).Spline = "spline"),
        (ti.Area = "area"),
        (ti.Column = "column"),
        (ti.Map = "map"),
        (ti.Bar = "bar"),
        (ti.Pie = "pie"),
        (ti.Treemap = "treemap"),
        (ti.Sankey = "sankey"),
        ti),
      tX = (((tu = {}).Normal = "Normal"), (tu.Minimal = "Minimal"), tu),
      tG = (((ts = {}).Month = "month"), (ts.Day = "day"), (ts.Minute = "minute"), ts),
      tU =
        (((td = {}).Normal = "Normal"),
        (td.Total = "Total"),
        (td.Benchmark = "Benchmark"),
        (td.Projection = "Projection"),
        (td.Quota = "Quota"),
        (td.Comparison = "Comparison"),
        (td.Scatter = "Scatter"),
        (td.Noise = "Noise"),
        td);
    let tK = (e) =>
        e
          .replaceAll(/&/g, "&amp;")
          .replaceAll(/</g, "&lt;")
          .replaceAll(/>/g, "&gt;")
          .replaceAll(/"/g, "&quot;")
          .replaceAll(/'/g, "&#039;"),
      tY = (e) =>
        function () {
          for (var t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
          return tK(e(...n));
        },
      tq = /[\u0000-\u001F\u007F]/,
      tQ = (e) => {
        if ("string" != typeof e || tq.test(e)) return "";
        let t = e.trim();
        return /^https:\/\//i.test(t) ? tK(t) : "";
      };
    var tZ =
      (((tc = tZ || {}).WhiteSpace = " "),
      (tc.BulletPoint = "●"),
      (tc.FigureSpace = " "),
      (tc.HollowBulletPoint = "○"),
      tc);
    let tJ = { 0: 30, 1: 34, 2: 42 },
      t$ = new Set(Object.values(tU)),
      t0 = (e) => {
        if ("object" != typeof e || null === e) return {};
        let { imageUrl: t, seriesType: n, zones: l } = e;
        return {
          imageUrl: "string" == typeof t ? t : void 0,
          seriesType: t$.has(n) ? n : void 0,
          zones: Array.isArray(l) ? l : void 0
        };
      },
      t1 = /__chip\(([^)]+)\)__/g,
      t2 = (e) => {
        let { key: t, value: n, shouldRenderDot: l, theme: a, imageUrl: r, color: o } = e,
          i = "string" == typeof o ? o : void 0,
          u = tB(a).tooltipBackground === i,
          s = u ? tZ.HollowBulletPoint : tZ.BulletPoint,
          d = '<span style="'
            .concat(u ? "" : "color:".concat(i, ";"), '">')
            .concat(s)
            .concat(tZ.WhiteSpace, "</span>"),
          c = tQ(r),
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
          .concat(tZ.FigureSpace)
          .concat("<span>".concat(n, "</span>"), "</span></div>");
      },
      t6 = (e) => {
        let { formatSeriesKeyForPoint: t, formatSeriesValueForPoint: n } = e,
          l = (0, p.useMediaQuery)((e) => e.breakpoints.down("Medium")),
          a = (0, p.useMediaQuery)((e) => e.breakpoints.down("Large")),
          r = (0, p.useMediaQuery)((e) => e.breakpoints.down("XLarge")),
          o = (0, f.useTheme)();
        return (0, u.useCallback)(
          function () {
            let { x: e, y: i, color: u, series: s, name: d } = this;
            if (null == i) return "";
            let { custom: c, id: m } = s.userOptions,
              { imageUrl: h, seriesType: f, zones: p } = t0(c),
              g = s.chart.series.find((e) => e.data.length > 0),
              v = [...s.chart.series].toReversed().find((e) => e.data.length > 0),
              F = t({
                seriesName: s.name,
                seriesType: f,
                x: null != d ? d : e,
                seriesId: m,
                zones: p
              }),
              b = 1 / 0;
            return (
              l ? (b = tJ[0]) : a ? (b = tJ[1]) : r && (b = tJ[2]),
              t2({
                key: ((e, t) => {
                  let n = ((e) => {
                      let t = [],
                        n = 0,
                        l = RegExp(t1.source, "g"),
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
                    r = [];
                  for (let e of n)
                    "chip" === e.kind
                      ? r.push(
                          '<span style="display:inline-block;background-color:#696A6D;color:#FFFFFF;font-size:12px;font-weight:600;padding:2px 6px;border-radius:4px;margin-left:4px;vertical-align:baseline;">'.concat(
                            tK(e.label),
                            "</span>"
                          )
                        )
                      : !a &&
                        l > 0 &&
                        (e.value.length <= l
                          ? (r.push(tK(e.value)), (l -= e.value.length))
                          : (r.push("".concat(tK(e.value.slice(0, l)), "...")), (l = 0), (a = !0)));
                  return r.join("");
                })(F, b),
                value: tY(n)({ y: i, seriesType: f, seriesId: m, zones: p }),
                theme: o,
                color: u,
                imageUrl: h,
                shouldRenderDot: g !== v
              })
            );
          },
          [t, n, r, a, l, o]
        );
      },
      t3 = () => {
        let { tooltipBackground: e } = tB((0, f.useTheme)());
        return "background-color:".concat(
          e,
          ";border-radius:4px;padding-top:4px;padding-bottom:4px;padding-left:6px;padding-right:6px;line-height:1.6;"
        );
      },
      t4 = (e) => {
        let { formatX: t } = e,
          n = t3(),
          l = (0, p.useMediaQuery)((e) => e.breakpoints.up("Medium"));
        return (0, u.useCallback)(
          function (e) {
            var a, r;
            let { x: o } = this,
              i = null != (a = e.chart.hoverPoints) ? a : void 0,
              u = null != (r = null == i ? void 0 : i.length) ? r : 0,
              s = l && u > 6,
              d = i;
            (null == i ? void 0 : i.length) &&
              (d = [...i].sort((e, t) => {
                let { seriesType: n } = t0(e.series.options.custom),
                  { seriesType: l } = t0(t.series.options.custom);
                return n === l ? 0 : n === tU.Total ? -1 : 1;
              }));
            let c = { ...this, points: d },
              m = e.defaultFormatter.call(c, e).slice(0, 11);
            if (Array.isArray(m)) {
              let e = void 0 === o ? "" : tY(t)(o),
                l = e ? '<div style="'.concat(n, '">').concat(e, "</div>") : e,
                [, ...a] = m;
              if (!s)
                return [
                  l,
                  ...a
                    .filter(Boolean)
                    .map((e) => '<div style="'.concat(n, '">').concat(e, "</div>"))
                ];
              let r = Math.ceil(a.length / 2),
                i = "<div>".concat(a.slice(0, r).join(""), "</div>"),
                u = "<div>".concat(a.slice(r).join(""), "</div>");
              return [
                l,
                '<div style="display:flex;column-gap:8px;'
                  .concat(n, '">')
                  .concat(i)
                  .concat(u, "</div>")
              ];
            }
            return m;
          },
          [t, l, n]
        );
      };
    var t5 = { exports: {} };
    t5.exports;
    var t7 = (tf ||
      ((tf = 1),
      "u" > typeof self && self,
      (t5.exports = (function (e) {
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
            function r(e) {
              return (r =
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
            var o = n(1),
              i = n.n(o),
              u = o.useLayoutEffect,
              s = Object(o.memo)(
                Object(o.forwardRef)(function (e, t) {
                  var n = Object(o.useRef)(),
                    s = Object(o.useRef)(),
                    d = Object(o.useRef)(e.constructorType),
                    c = Object(o.useRef)(e.highcharts);
                  return (
                    u(
                      function () {
                        function t() {
                          var t = e.highcharts || ("object" === r(window) && window.Highcharts),
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
                              var l, o;
                              (l = s.current).update.apply(
                                l,
                                [e.options].concat(
                                  (function (e) {
                                    if (Array.isArray(e)) return a(e);
                                  })((o = e.updateArgs || [!0, !0])) ||
                                    (function (e) {
                                      if (
                                        ("u" > typeof Symbol && null != e[Symbol.iterator]) ||
                                        null != e["@@iterator"]
                                      )
                                        return Array.from(e);
                                    })(o) ||
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
                                    })(o) ||
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
                    Object(o.useImperativeHandle)(
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
                    i.a.createElement("div", l({}, e.containerProps, { ref: n }))
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
      })(u.default))),
    (tm = t5.exports) && tm.__esModule && Object.prototype.hasOwnProperty.call(tm, "default"))
      ? tm.default
      : tm;
    let t9 = null,
      t8 = !1,
      ne = new Set(),
      nt = (e) => (
        ne.add(e),
        () => {
          ne.delete(e);
        }
      ),
      nn = () => t8,
      nl = () => !1,
      na = () =>
        null != t9
          ? t9
          : (t9 = Promise.all([
              e.A(756816),
              e.A(153168),
              e.A(611713),
              e.A(554821),
              e.A(778530),
              e.A(876820)
            ]).then(() => {
              ((t8 = !0), ne.forEach((e) => e()));
            }));
    "u" > typeof o.default &&
      (null == (tr = o.default.env) ? void 0 : tr.NODE_ENV) !== "test" &&
      na().catch(() => void 0);
    let nr = { thousandsSep: ",", numericSymbols: ["K", "M", "B", "T"] },
      no = [!0, !0, !1];
    var ni = u.default.memo((e) => {
      let {
          constructorType: t,
          options: n,
          showLocalizedTime: l,
          chartUpdatePolicy: a,
          onChartDependencyStatus: r
        } = e,
        o,
        i = null != a ? a : "default",
        d = (0, u.useSyncExternalStore)(nt, nn, nl),
        c = (0, u.useMemo)(() => ("light" === o.palette.mode ? tN : tw), [(o = (0, f.useTheme)())]),
        m = (0, u.useRef)(null),
        h = (0, u.useRef)(r);
      ((0, u.useLayoutEffect)(() => {
        h.current = r;
      }, [r]),
        (0, u.useEffect)(() => {
          var e, t;
          if (t8)
            return (
              null == (e = h.current) ||
                e.call(h, { dependency: "highchartsModules", status: "ready" }),
              () => {}
            );
          let n = !0;
          return (
            null == (t = h.current) ||
              t.call(h, { dependency: "highchartsModules", status: "pending" }),
            na()
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
        (0, u.useMemo)(() => {
          s.default.setOptions({
            lang: nr,
            colors: c,
            time: l ? { timezone: void 0 } : { timezone: "UTC" }
          });
        }, [c, l]));
      let p = (0, u.useMemo)(() => {
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
            "non-animated" !== i
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
        }, [i, n]),
        g = (0, u.useMemo)(() => ("non-animated" === i ? no : void 0), [i]);
      return ((0, u.useEffect)(() => {
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
        ? u.default.createElement(t7, {
            ref: m,
            highcharts: s.default,
            options: p,
            constructorType: t,
            updateArgs: g
          })
        : null;
    });
    let nu = (e) => {
        let { updateActiveAnnotationId: t } = (0, u.useContext)(tn);
        return (0, u.useMemo)(() => {
          let n = [],
            l = [];
          return (
            null == e ||
              e.forEach((e) => {
                let { id: a, start: r, end: o, rangeAnnotationConfig: i } = e,
                  u = [{ point: { x: r, y: 0, yAxis: 0, xAxis: 0 }, allowOverlap: !0 }];
                (void 0 !== o &&
                  o > r &&
                  (u.push({ point: { x: o, y: 0, yAxis: 0, xAxis: 0 }, allowOverlap: !0 }),
                  (null == i ? void 0 : i.curtainStayOnChart) &&
                    t &&
                    l.push({
                      from: r,
                      to: o,
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
      ns = (e) => {
        let { annotations: t, onAnnotationsPositionsUpdated: n } = e,
          l = (0, u.useCallback)(
            function () {
              var e;
              let t = this.plotTop,
                l = this.plotLeft,
                a = this.plotHeight,
                r = this.plotWidth,
                o = [];
              (null == (e = this.annotations) ||
                e.forEach((e) => {
                  var t, n;
                  let { userOptions: l, labels: a } = e,
                    r = null == (t = l.id) ? void 0 : t.toString();
                  if (!r) return;
                  let i =
                    null == (n = this.userOptions.annotations) ? void 0 : n.find((e) => e.id === r);
                  if (!i) return;
                  let u = ((e) => {
                    var t, n, l, a, r, o, i, u, s, d;
                    let { annotationLabels: c, annotationUserOptions: m, chart: h } = e;
                    if ((null == (t = m.labels) ? void 0 : t.length) && 2 === m.labels.length) {
                      let e,
                        t,
                        [n, l] = m.labels,
                        f = n.point.x,
                        p = l.point.x,
                        g = null == (o = h.xAxis) ? void 0 : o[0],
                        [v, F] = [
                          null != (a = null == g ? void 0 : g.min) ? a : 0,
                          null != (r = null == g ? void 0 : g.max) ? r : 0
                        ];
                      if (p < v || f > F) return;
                      let b =
                          null == c ||
                          null ==
                            (u = c.find((e) => {
                              var t;
                              let { points: n } = e;
                              return (null == n || null == (t = n[0]) ? void 0 : t.x) === f;
                            })) ||
                          null == (i = u.points)
                            ? void 0
                            : i[0],
                        E =
                          null == c ||
                          null ==
                            (d = c.find((e) => {
                              var t;
                              let { points: n } = e;
                              return (null == n || null == (t = n[0]) ? void 0 : t.x) === p;
                            })) ||
                          null == (s = d.points)
                            ? void 0
                            : s[0];
                      return (
                        void 0 !== b && void 0 !== E
                          ? ((e = b.plotX), (t = E.plotX))
                          : void 0 !== b
                            ? (t = ((e = b.plotX) / (F - v)) * (p - v))
                            : void 0 !== E
                              ? (e = ((t = E.plotX) / (F - v)) * (f - v))
                              : ((e = -Number.EPSILON), (t = h.plotWidth + Number.EPSILON)),
                        { startLeft: e, endLeft: t }
                      );
                    }
                    let f =
                      null == c || null == (l = c[0]) || null == (n = l.points)
                        ? void 0
                        : n[0].plotX;
                    if (void 0 !== f && h.isInsidePlot(f, h.plotTop)) return { startLeft: f };
                  })({ annotationLabels: a, annotationUserOptions: i, chart: this });
                  u && o.push({ id: r, ...u });
                }),
                null == n ||
                  n({
                    labelsPosition: o,
                    chartPlotPosition: { left: l, top: t, height: a, width: r }
                  }));
            },
            [n]
          ),
          [a, r] = (0, u.useMemo)(
            () =>
              (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "leading_and_trailing",
                  n = null,
                  l = null,
                  a = null,
                  r = () => !!l && (e.call(a, ...l), (l = null), (a = null), !0),
                  o = () => {
                    ((n = null),
                      ("trailing" === t || "leading_and_trailing" === t) &&
                        r() &&
                        (n = setTimeout(o, 400)));
                  };
                return [
                  function () {
                    for (var e = arguments.length, i = Array(e), u = 0; u < e; u++)
                      i[u] = arguments[u];
                    ((l = i),
                      (a = this),
                      n ||
                        (("leading" === t || "leading_and_trailing" === t) && r(),
                        (n = setTimeout(o, 400))));
                  },
                  () => {
                    n && (clearTimeout(n), (n = null));
                  }
                ];
              })(l),
            [l]
          );
        return ((0, u.useEffect)(() => r, [r]), (null == t ? void 0 : t.length) ? a : void 0);
      },
      nd = (e) => {
        let t = (0, u.useCallback)(
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
      nc = (e) => {
        let t,
          {
            theme: n,
            chartType: l,
            chartStyleMode: a,
            onSelectChartRegion: r,
            onChartLoad: o,
            onChartRender: i
          } = e;
        switch (a) {
          case tX.Normal:
            t = 360;
            break;
          case tX.Minimal:
            t = 205;
            break;
          default:
            throw Error("Unhandled ChartStyleMode");
        }
        return {
          type: l,
          zoomType: l === tV.Map || l === tV.Bar ? "none" : "x",
          backgroundColor: "transparent",
          style: { fontFamily: n.typography.fontFamily },
          events: { selection: r, load: o, render: i },
          animation: !0,
          height: t
        };
      },
      nm = { spacingTop: 10, spacingRight: 8, spacingBottom: 0, spacingLeft: 8 },
      nh = (e) => {
        let { chartStyleMode: t, forceHideLegends: n } = e,
          l = (0, f.useTheme)();
        return (0, u.useMemo)(
          () => ({
            legend: {
              enabled: !n && t !== tX.Minimal,
              itemStyle: {
                color: tB(l).legendText,
                fontSize: "12px",
                fontWeight: "300",
                textOverflow: "ellipsis"
              },
              navigation: { style: { color: tB(l).legendText } },
              useHTML: !0,
              labelFormatter() {
                var e, t, n;
                let l = tQ(
                  null == (n = this.options) || null == (t = n.custom) ? void 0 : t.imageUrl
                );
                return l
                  ? '<img src="'.concat(
                      l,
                      '" alt="" style="width: 56px; height: 32px; border: 4px solid white; border-radius: 4px;"/>'
                    )
                  : '<div style="max-width: 200px; text-overflow: ellipsis; overflow: hidden">'.concat(
                      tK(null != (e = this.name) ? e : ""),
                      "</div>"
                    );
              },
              itemHoverStyle: { color: tB(l).legendText },
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
      nf = (e, t) => ({
        fontFamily: e.typography[t].fontFamily,
        fontWeight: e.typography[t].fontWeight,
        fontStyle: e.typography[t].fontStyle,
        lineHeight: e.typography[t].lineHeight,
        letterSpacing: e.typography[t].letterSpacing,
        fontSize: e.typography[t].fontSize
      }),
      np = (e, t) =>
        "font-family: "
          .concat(e.typography[t].fontFamily, "; font-weight: ")
          .concat(e.typography[t].fontWeight, "; font-style: ")
          .concat(e.typography[t].fontStyle, "; line-height: ")
          .concat(e.typography[t].lineHeight, "; letter-spacing: ")
          .concat(e.typography[t].letterSpacing, "; font-size: ")
          .concat(e.typography[t].fontSize, ";"),
      ng = (0, d.makeStyles)()((e) => ({
        iconStyle: { fill: e.palette.content.standard, verticalAlign: "bottom" }
      })),
      nv = (e) => {
        let { formatDataLabel: t, LeadingIcon: n, getPointMetadata: l } = e,
          {
            classes: { iconStyle: a }
          } = ng(),
          r = ((e) => {
            let [t, n] = (0, u.useState)(null);
            return (
              (0, u.useEffect)(() => {
                let t = null,
                  l = null,
                  a = setTimeout(() => {
                    let a = document.createElement("div"),
                      r = (0, P.createRoot)(a);
                    ((t = r),
                      (0, I.flushSync)(() => {
                        r.render(e());
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
            (0, u.useCallback)(
              () =>
                void 0 !== n
                  ? u.default.createElement(n, {
                      color: "inherit",
                      fontSize: "small",
                      classes: { root: a }
                    })
                  : null,
              [n, a]
            )
          );
        return (
          r && s.default.pushUnique(s.default.AST.allowedAttributes, "viewBox"),
          (0, u.useCallback)(
            function () {
              let { y: e, series: n } = this;
              if (null == e) return "";
              let a = l(this);
              if (null === a) return "";
              let o = tK(String(t ? t({ y: e, ...a, seriesName: n.name }) : "".concat(e)));
              return r ? "".concat(r).concat(tZ.WhiteSpace).concat(o) : o;
            },
            [t, r, l]
          )
        );
      },
      nF = (e, t) => {
        let n = Math.min(e, t);
        return n >= 400 ? 14 : n >= 300 ? 12 : 10;
      },
      nb = {
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
      nE = () => {
        let e = (0, f.useTheme)();
        return (0, u.useMemo)(() => {
          let { tooltipBackground: t } = tB(e);
          return {
            condition: { maxHeight: 150 },
            chartOptions: {
              tooltip: { split: !1, shared: !0, backgroundColor: t, padding: 0, borderRadius: 4 },
              annotations: void 0
            }
          };
        }, [e]);
      },
      nC = () =>
        (0, u.useMemo)(
          () => ({
            condition: { maxWidth: 400 },
            chartOptions: { xAxis: { labels: { rotation: -45 } } }
          }),
          []
        ),
      nS = (e, t, n, l, a) => {
        let r = n ? tD(n, e) : void 0;
        switch (t) {
          case tU.Normal:
          case tU.Total:
            return {
              color: r,
              dashStyle: "Solid",
              connectNulls: !0,
              marker: { enabled: l },
              opacity: a
            };
          case tU.Scatter:
            return {
              color: r,
              marker: { enabled: !0, symbol: "circle" },
              connectNulls: !0,
              lineWidth: 0,
              states: { hover: { lineWidthPlus: 0 } },
              opacity: a
            };
          case tU.Benchmark:
            return {
              color: null != r ? r : tB(e).benchmarkLineColor,
              dashStyle: "Solid",
              lineWidth: 1,
              marker: { enabled: !1, symbol: "circle" },
              connectNulls: !0,
              opacity: a
            };
          case tU.Comparison:
            return {
              color: null != r ? r : tB(e).comparisonLineColor,
              dashStyle: "ShortDot",
              marker: { enabled: !1, symbol: "circle" },
              connectNulls: !0,
              opacity: a
            };
          case tU.Noise:
            return {
              color: r,
              dashStyle: "Dash",
              connectNulls: !0,
              marker: { enabled: l },
              opacity: a
            };
          case tU.Projection:
            return { color: r, dashStyle: "Dash", connectNulls: !0, opacity: a };
          case tU.Quota:
            return {
              color: null != r ? r : tB(e).benchmarkLineColor,
              dashStyle: "Dash",
              marker: { enabled: !1, symbol: "circle" },
              connectNulls: !0,
              opacity: a
            };
          default:
            throw Error("Unhandled chart type: ".concat(t));
        }
      },
      ny = (e) => {
        let { theme: t } = e,
          { tooltipText: n } = tB(t);
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
      nA = (e) => {
        let { formatX: t } = e,
          n = (0, f.useTheme)(),
          l = ((e) => {
            let { formatX: t } = e,
              n = t3(),
              l = (0, p.useMediaQuery)((e) => e.breakpoints.up("Medium"));
            return (0, u.useCallback)(
              function (e) {
                var a, r;
                let { x: o } = this,
                  i = null != (a = e.chart.hoverPoints) ? a : void 0,
                  u =
                    null !=
                    (r =
                      null == i
                        ? void 0
                        : i.filter((e) => {
                            let { seriesType: t } = t0(e.series.userOptions.custom);
                            return t === tU.Total || t === tU.Normal;
                          }).length)
                      ? r
                      : 0,
                  s = l && u > 6,
                  d = { ...this, points: i };
                if (s && (null == i ? void 0 : i.length)) {
                  let e = [...i].sort((e, t) =>
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
                  let e = void 0 === o ? "" : tY(t)(o),
                    l = e ? '<div style="'.concat(n, '">').concat(e, "</div>") : e,
                    [, ...a] = c;
                  if (!s)
                    return [
                      l,
                      ...a
                        .filter(Boolean)
                        .map((e) => '<div style="'.concat(n, '">').concat(e, "</div>"))
                    ];
                  let r = Math.floor(a.length / 2),
                    i = "<div>".concat(a.slice(0, r).join(""), "</div>"),
                    u = "<div>".concat(a.slice(r).join(""), "</div>");
                  return [
                    l,
                    '<div style="display:flex;column-gap:8px;'
                      .concat(n, '">')
                      .concat(i)
                      .concat(u, "</div>")
                  ];
                }
                return c;
              },
              [t, l, n]
            );
          })({ formatX: t });
        return (0, u.useMemo)(() => ({ ...ny({ theme: n }), formatter: l }), [n, l]);
      },
      nx = (e) => {
        let {
            xAxisFormatter: t,
            axisType: n,
            tickPositions: l,
            plotBandsOptions: a,
            xAxisBounds: r
          } = e,
          { type: o } = n,
          i = (0, f.useTheme)(),
          s = (0, u.useCallback)(
            (e) => {
              let { value: n } = e;
              return t({ value: n });
            },
            [t]
          );
        return (0, u.useMemo)(() => {
          let e = {
            type: o,
            lineColor: tB(i).axis,
            tickPositions: l,
            lineWidth: 1,
            tickLength: 0,
            width: "100%",
            plotBands: a,
            ...(r ? { min: r[0], max: r[1] } : {})
          };
          switch (o) {
            case "linear":
              return {
                ...e,
                labels: {
                  style: { color: tB(i).axisValueText },
                  autoRotation: void 0,
                  formatter: s
                }
              };
            case "datetime": {
              let { granularity: t } = n;
              return {
                ...e,
                units: t === tG.Month ? [["month", [1]]] : void 0,
                labels: {
                  style: {
                    ...(t === tG.Day ? { textOverflow: "none", whiteSpace: "nowrap" } : {}),
                    color: tB(i).axisValueText
                  },
                  autoRotation: void 0,
                  formatter: s
                }
              };
            }
            default:
              throw Error("Unrecognized xAxis type ".concat(o, "."));
          }
        }, [n, a, i, l, o, r, s]);
      },
      nM = (e) => {
        let { chartStyleMode: t, isAnnotationOn: n, minYAxisOverride: l } = e,
          a = (0, f.useTheme)();
        return (0, u.useMemo)(() => {
          let e;
          switch (t) {
            case tX.Normal:
              e = !0;
              break;
            case tX.Minimal:
              e = !1;
              break;
            default:
              throw Error("Unhandled chartStyleMode: ".concat(String(t)));
          }
          return {
            title: { text: void 0, style: { color: tB(a).axisValueText } },
            labels: { style: { color: tB(a).axisValueText } },
            gridLineColor: tB(a).gridLine,
            gridLineDashStyle: "ShortDash",
            gridLineWidth: 1,
            min: l,
            maxPadding: n ? 0.15 : void 0,
            visible: e
          };
        }, [t, n, l, a]);
      },
      nN = (e) => {
        let { chartStyleMode: t, yAxisConfigs: n, isAnnotationOn: l, minYAxisOverride: a } = e,
          r = nM({ chartStyleMode: t, isAnnotationOn: l, minYAxisOverride: a }),
          o = (0, u.useCallback)(
            (e) => {
              let { yAxisTitle: t, yAxisFormatter: n, visible: l, id: a, decimalPrecision: o } = e;
              return {
                ...r,
                id: a,
                title: { ...r.title, text: t },
                labels: {
                  ...r.labels,
                  formatter: n
                    ? function () {
                        let { value: e } = this;
                        return n ? n({ value: e }) : String(e);
                      }
                    : function () {
                        let e = this.axis.defaultLabelFormatter.call(this),
                          t = "number" == typeof this.value ? this.value : parseFloat(this.value);
                        return parseFloat(t.toFixed(o)) === t
                          ? e
                          : e.replace(/\d+\.\d+/, (e) =>
                              String(parseFloat(parseFloat(e).toFixed(o)))
                            );
                      }
                },
                visible: null != l ? l : r.visible,
                allowDecimals: (void 0 === o || 0 !== o) && void 0
              };
            },
            [r]
          );
        return (0, u.useMemo)(() => (n && 0 !== n.length ? n.map(o) : [r]), [r, o, n]);
      },
      nw = (e) => {
        switch (e) {
          case tG.Minute:
            return !0;
          case tG.Day:
          case tG.Month:
            return !1;
          default:
            throw Error("Unhandled axis granularity: ".concat(e));
        }
      },
      nD = (e, t) => {
        let n = (0, u.useRef)(t);
        (0, u.useLayoutEffect)(() => {
          n.current = t;
        }, [t]);
        let l = (0, u.useCallback)(
          function (t) {
            var l;
            (null == e || e.call(this, t), null == (l = n.current) || l.call(n));
          },
          [e]
        );
        return void 0 !== e || void 0 !== t ? l : void 0;
      },
      nB = (e, t) => {
        var n;
        let l = null == (n = e.options.chart) ? void 0 : n.animation;
        (e.update({ chart: { animation: !1 } }, !1),
          e.series.forEach((e) => {
            e.setVisible(t(e), !1);
          }),
          e.update({ chart: { animation: l } }, !0));
      },
      nO = () => {
        let e = (0, u.useCallback)((e) => {
            let t = e.target,
              { chart: n } = t,
              l = n.series,
              a = l.every((e) => e.visible),
              r = l.every((e) => !e.visible);
            a ? nB(n, (e) => e === t) : r && nB(n, () => !0);
          }, []),
          t = (0, u.useCallback)(
            (t) => {
              var n;
              t.series =
                null == (n = t.series)
                  ? void 0
                  : n.map((t) => ({ ...t, events: { ...t.events, legendItemClick: e } }));
            },
            [e]
          );
        return (0, u.useMemo)(() => ({ updateSeriesLegendItemClickHandlers: t }), [t]);
      },
      nL = "zone-symbol",
      nk = () => [],
      nT = (0, d.makeStyles)()(() => ({ zoneSeriesClassName: { pointerEvents: "none" } }));
    var nR = tW(
        u.default.memo((e) => {
          var t;
          let {
              data: n,
              xAxisFormatter: l,
              xAxisTickPositions: a,
              xAxisType: r,
              xAxisBounds: o,
              yAxisConfigs: i,
              onSelectChartRegion: d,
              onChartLoad: c,
              onChartRender: m,
              onChartDependencyStatus: h,
              onAnnotationsPositionsUpdated: p,
              annotations: g,
              height: v,
              tooltipFormatters: F,
              zoneLegendItemFormatter: b,
              chartStyleMode: E = tX.Normal,
              chartUpdatePolicy: C
            } = e,
            {
              classes: { zoneSeriesClassName: S }
            } = nT(),
            y = (0, f.useTheme)(),
            A = (0, u.useContext)(tj),
            { updateSeriesLegendItemClickHandlers: x } = nO();
          null != (t = s.default.SVGRenderer.prototype.symbols)[nL] || (t[nL] = nk);
          let M = t6({
              formatSeriesKeyForPoint: F.formatSeriesKeyForPoint,
              formatSeriesValueForPoint: F.formatSeriesValueForPoint
            }),
            { series: N, minYAxisOverride: w } = (0, u.useMemo)(() => {
              if (A) return { series: [] };
              let { series: e, range: t } = n,
                l = 1 / 0,
                a = new Set(),
                r = [];
              e.forEach((t, n) => {
                let {
                  id: o,
                  name: i,
                  dataPoints: u,
                  type: s,
                  zones: d,
                  custom: c,
                  yAxisId: m,
                  color: h,
                  showMarker: f,
                  opacity: p,
                  showInLegend: g
                } = t;
                l = Math.min(l, ...u.map((e) => e[1]).filter((e) => null !== e));
                let v =
                    null == d
                      ? void 0
                      : d.map((e) => {
                          var t, n;
                          let l = u.map((e) => e[0]),
                            a = l.findIndex((t) => t === e.start),
                            r = null === e.end ? l.length - 1 : l.findIndex((t) => t === e.end);
                          if (-1 === a || -1 === r)
                            return { ...e, end: null != (t = e.end) ? t : l[l.length - 1] };
                          let o = a > 0 ? l[a - 1] : e.start,
                            i =
                              r < l.length - 1
                                ? l[r + 1]
                                : null != (n = e.end)
                                  ? n
                                  : l[l.length - 1];
                          return { ...e, start: o, end: i };
                        }),
                  F = {
                    id: o,
                    name: i,
                    data: u,
                    custom: { ...c, seriesType: s, zones: d },
                    type: tV.Spline,
                    zIndex: e.length - n,
                    ...nS(y, s, h, f, p),
                    ...(v
                      ? ((e, t, n) => {
                          if (!t.length) return {};
                          let l = [],
                            { color: a, dashStyle: r } = nS(e, n);
                          return (
                            t.forEach((n, o) => {
                              let { start: i, end: u, type: s } = n;
                              l.push({ value: i, color: a, dashStyle: r });
                              let { color: d, dashStyle: c } = nS(e, s);
                              if (u) l.push({ value: u, color: d, dashStyle: c });
                              else if (o < t.length - 1)
                                throw Error(
                                  "Can only have multiple zones when all but the last one have an `end`."
                                );
                              else l.push({ color: d, dashStyle: c });
                            }),
                            { zones: l, zoneAxis: "x" }
                          );
                        })(y, v, s)
                      : {}),
                    tooltip: { pointFormatter: M },
                    yAxis: m,
                    ...(void 0 === g ? {} : { showInLegend: g })
                  };
                (r.push(F),
                  null == d ||
                    d.forEach((e) => {
                      let { type: t } = e;
                      a.add(t);
                    }),
                  a.size && a.add(s));
              });
              let o = [];
              if (a.size) {
                let e = Array.from(
                  new Set(Array.from(a).map((e) => (e === tU.Total ? tU.Normal : e)))
                ).filter((e) => {
                  var t;
                  return "" !== (null != (t = null == b ? void 0 : b(e)) ? t : "");
                });
                o =
                  e.length > 1
                    ? e
                        .sort((e, t) => (e === tU.Normal ? -1 : +(t === tU.Normal)))
                        .map((e, t) => {
                          var n;
                          return {
                            id: "zone-".concat(t, "-").concat(e),
                            name: null != (n = null == b ? void 0 : b(e)) ? n : "",
                            data: [],
                            type: tV.Spline,
                            marker: { symbol: nL },
                            dashStyle: nS(y, e).dashStyle,
                            color: tB(y).zoneLegendSymbol,
                            legendIndex: r.length,
                            className: S
                          };
                        })
                    : [];
              }
              if (t) {
                let { formatRange: e } = F,
                  n = ((e) => {
                    let { range: t, theme: n, rangeFormatter: l } = e,
                      { topDataPoints: a, bottomDataPoints: r, tags: o, id: i, name: u } = t,
                      s = [];
                    return (
                      r.forEach((e, t) => {
                        var n, l;
                        let [r, i] = e;
                        if (t >= a.length) return;
                        let u = null == (n = a[t]) ? void 0 : n[1],
                          d = null == o || null == (l = o[t]) ? void 0 : l[1];
                        s.push({
                          x: r,
                          low: null != u ? u : void 0,
                          high: null != i ? i : void 0,
                          custom: { tag: d }
                        });
                      }),
                      {
                        id: i,
                        data: s,
                        name: u,
                        type: "areasplinerange",
                        lineWidth: 0,
                        color: tB(n).benchmarkLineColor,
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
                    theme: y,
                    rangeFormatter: e
                      ? ((e) => {
                          let { formatRange: t } = e;
                          return function () {
                            var e;
                            let { low: n, high: l, options: a, x: r } = this;
                            if (void 0 === n || void 0 === l) return "";
                            let { rangeKey: o, rangeValue: i } = t({
                              top: n,
                              bottom: l,
                              tag: null == (e = a.custom) ? void 0 : e.tag,
                              x: r
                            });
                            return '<div style="font-weight:600;">'
                              .concat(tK(null != o ? o : ""), "</div>")
                              .concat(tK(i));
                          };
                        })({ formatRange: e })
                      : void 0
                  });
                r.push(n);
              }
              return { series: r.concat(o), minYAxisOverride: 1 / 0 !== l && l < 0 ? l : void 0 };
            }, [n, A, M, y, F, b, S]),
            { annotationOptions: D, plotBandsOptions: B } = nu(A ? void 0 : g),
            O = (0, u.useMemo)(() => ({ series: { marker: { enabledThreshold: 4 } } }), []),
            L = nx({
              axisType: r,
              tickPositions: a,
              xAxisFormatter: l,
              plotBandsOptions: B,
              xAxisBounds: A ? void 0 : o
            }),
            k = nN({
              chartStyleMode: E,
              yAxisConfigs: i,
              minYAxisOverride: w,
              isAnnotationOn: !!(null == g ? void 0 : g.length)
            }),
            T = ((e) => {
              let {
                  chartStyleMode: t,
                  onSelectChartRegion: n,
                  onChartLoad: l,
                  onChartRender: a,
                  height: r
                } = e,
                o = (0, f.useTheme)(),
                i = nd(n),
                s = (0, u.useMemo)(
                  () =>
                    nc({
                      theme: o,
                      chartType: tV.Spline,
                      chartStyleMode: t,
                      onSelectChartRegion: i,
                      onChartLoad: l,
                      onChartRender: a
                    }),
                  [t, l, a, i, o]
                );
              return (0, u.useMemo)(
                () => ({ ...s, ...nm, height: null != r ? r : s.height }),
                [s, r]
              );
            })({
              onSelectChartRegion: d,
              onChartLoad: c,
              onChartRender: nD(ns({ annotations: g, onAnnotationsPositionsUpdated: p }), m),
              chartStyleMode: E,
              height: v
            }),
            R = nA({ formatX: F.formatXForPoint }),
            I = nh({ chartStyleMode: E }),
            P = nE(),
            z = nC(),
            _ = (0, u.useMemo)(() => {
              let e = {
                series: N,
                annotations: D,
                plotOptions: O,
                chart: T,
                xAxis: L,
                yAxis: k,
                tooltip: R,
                responsive: { rules: [P, ...(E === tX.Minimal ? [] : [z])] },
                ...I
              };
              return (x(e), e);
            }, [N, E, D, O, T, L, k, R, P, z, I, x]);
          return u.default.createElement(ni, {
            options: _,
            onChartDependencyStatus: h,
            showLocalizedTime: "datetime" === r.type && nw(r.granularity),
            chartUpdatePolicy: C
          });
        })
      ),
      nI = tW(
        u.default.memo((e) => {
          let {
              data: t,
              tooltipFormatters: n,
              height: l,
              annotations: a,
              onAnnotationsPositionsUpdated: r,
              onSelectChartRegion: o,
              onChartLoad: i,
              onChartRender: s,
              onChartDependencyStatus: d,
              xAxisType: c,
              xAxisFormatter: m,
              xAxisTickPositions: h,
              xAxisBounds: p,
              yAxisConfig: g,
              chartStyleMode: v = tX.Normal
            } = e,
            F = (0, f.useTheme)(),
            b = (0, u.useContext)(tj),
            { updateSeriesLegendItemClickHandlers: E } = nO(),
            C = t6({
              formatSeriesKeyForPoint: n.formatSeriesKeyForPoint,
              formatSeriesValueForPoint: n.formatSeriesValueForPoint
            }),
            { series: S, minYAxisOverride: y } = (0, u.useMemo)(() => {
              if (b) return { series: [] };
              let { series: e } = t,
                n = 1 / 0,
                l = [];
              return (
                e.forEach((t, a) => {
                  let { id: r, name: o, dataPoints: i, type: u, custom: s, color: d } = t;
                  n = Math.min(n, ...i.map((e) => e[1]).filter((e) => null !== e));
                  let c = {
                    id: r,
                    name: o,
                    data: i,
                    custom: { ...s, seriesType: u },
                    type: tV.Area,
                    zIndex: e.length - a,
                    ...((e, t, n) => {
                      let l = n ? tD(n, e) : void 0;
                      switch (t) {
                        case tU.Normal:
                        case tU.Total:
                          return {
                            color: l,
                            dashStyle: "Solid",
                            marker: { enabled: !1, symbol: "circle" },
                            connectNulls: !0
                          };
                        case tU.Benchmark:
                          return {
                            color: null != l ? l : tB(e).benchmarkLineColor,
                            dashStyle: "Solid",
                            lineWidth: 1,
                            marker: { enabled: !1, symbol: "circle" },
                            connectNulls: !0
                          };
                        case tU.Comparison:
                          return {
                            color: null != l ? l : tB(e).comparisonLineColor,
                            dashStyle: "ShortDot",
                            marker: { enabled: !1, symbol: "circle" },
                            connectNulls: !0
                          };
                        case tU.Projection:
                          return { color: l, dashStyle: "Dash", connectNulls: !0 };
                        case tU.Quota:
                          return {
                            color: null != l ? l : tB(e).benchmarkLineColor,
                            dashStyle: "Dash",
                            marker: { enabled: !1, symbol: "circle" },
                            connectNulls: !0
                          };
                        default:
                          throw Error("Unhandled chart type: ".concat(t));
                      }
                    })(F, u, d),
                    tooltip: { pointFormatter: C }
                  };
                  l.push(c);
                }),
                { series: l, minYAxisOverride: 1 / 0 !== n && n < 0 ? n : void 0 }
              );
            }, [t, b, C, F]),
            { annotationOptions: A, plotBandsOptions: x } = nu(b ? void 0 : a),
            M = (0, u.useMemo)(() => ({ area: { stacking: "normal" } }), []),
            N = nx({
              axisType: c,
              tickPositions: h,
              xAxisFormatter: m,
              plotBandsOptions: x,
              xAxisBounds: b ? void 0 : p
            }),
            w = ((e) => {
              let { chartStyleMode: t, yAxisConfig: n, minYAxisOverride: l, isAnnotationOn: a } = e;
              return nN({
                chartStyleMode: t,
                yAxisConfigs: n ? [n] : void 0,
                isAnnotationOn: a,
                minYAxisOverride: l
              })[0];
            })({
              chartStyleMode: v,
              yAxisConfig: g,
              minYAxisOverride: y,
              isAnnotationOn: !!(null == a ? void 0 : a.length)
            }),
            D = ((e) => {
              let {
                  chartStyleMode: t,
                  onSelectChartRegion: n,
                  onChartLoad: l,
                  onChartRender: a,
                  height: r
                } = e,
                o = (0, f.useTheme)(),
                i = nd(n),
                s = (0, u.useMemo)(
                  () =>
                    nc({
                      theme: o,
                      chartType: tV.Area,
                      chartStyleMode: t,
                      onSelectChartRegion: i,
                      onChartLoad: l,
                      onChartRender: a
                    }),
                  [t, l, a, i, o]
                );
              return (0, u.useMemo)(
                () => ({ ...s, ...nm, height: null != r ? r : s.height }),
                [s, r]
              );
            })({
              onSelectChartRegion: o,
              onChartLoad: i,
              onChartRender: nD(ns({ annotations: a, onAnnotationsPositionsUpdated: r }), s),
              chartStyleMode: v,
              height: l
            }),
            B = nA({ formatX: n.formatXForPoint }),
            O = nE(),
            L = nh({ chartStyleMode: v }),
            k = (0, u.useMemo)(() => {
              let e = {
                series: S,
                annotations: A,
                plotOptions: M,
                chart: D,
                xAxis: N,
                yAxis: w,
                tooltip: B,
                responsive: { rules: [O] },
                ...L
              };
              return (E(e), e);
            }, [S, A, M, D, N, w, B, O, L, E]);
          return u.default.createElement(ni, {
            options: k,
            onChartDependencyStatus: d,
            showLocalizedTime: "datetime" === c.type && nw(c.granularity)
          });
        })
      );
    let nP = (0, d.makeStyles)()(() => ({
        dimmedColumn: { opacity: 0.3 },
        dimmableColumnTransition: { transition: "opacity 0.5s" }
      })),
      nz = () => {
        let {
            classes: { dimmedColumn: e, dimmableColumnTransition: t }
          } = nP(),
          n = (0, u.useCallback)(
            (n) => {
              let { target: l } = n;
              l instanceof s.default.Point &&
                l.series.chart.series.forEach((n) => {
                  var a;
                  null == n ||
                    null == (a = n.points) ||
                    a.forEach((n) => {
                      var a, r, o;
                      (null == (a = n.graphic) || a.addClass(t, !0),
                        n.x === l.x
                          ? null == (r = n.graphic) || r.removeClass(e)
                          : null == (o = n.graphic) || o.addClass(e, !1));
                    });
                });
            },
            [t, e]
          ),
          l = (0, u.useCallback)(
            (t) => {
              let { target: n } = t;
              n instanceof s.default.Point &&
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
        return (0, u.useMemo)(() => ({ events: { mouseOver: n, mouseOut: l } }), [l, n]);
      };
    var n_ = tW(
        u.default.memo((e) => {
          let {
              data: t,
              xAxisFormatter: n,
              xAxisType: l,
              xAxisBounds: a,
              yAxisConfig: r,
              annotations: o,
              onAnnotationsPositionsUpdated: i,
              height: s,
              onSelectChartRegion: d,
              onChartLoad: c,
              onChartRender: m,
              onChartDependencyStatus: h,
              tooltipFormatters: p,
              stacking: g = !0,
              chartStyleMode: v = tX.Normal
            } = e,
            F = (0, f.useTheme)(),
            b = (0, u.useContext)(tj),
            { updateSeriesLegendItemClickHandlers: E } = nO(),
            C = nz(),
            { hasPositiveAltitude: S, hasNegativeAltitude: y } = (0, u.useMemo)(
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
            A = t6({
              formatSeriesKeyForPoint: p.formatSeriesKeyForPoint,
              formatSeriesValueForPoint: p.formatSeriesValueForPoint
            }),
            { series: x, categories: M } = (0, u.useMemo)(() => {
              if (b) return { series: [] };
              if ("orderedCategories" in t) {
                let e = new Map(t.orderedCategories.map((e, t) => [e, t]));
                return {
                  series: t.series.map((t) => {
                    let { id: n, name: l, dataPoints: a, custom: r, color: o } = t;
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
                      type: tV.Column,
                      custom: r,
                      color: o ? tD(o, F) : void 0,
                      point: C,
                      softThreshold: S
                    };
                  }),
                  categories: t.orderedCategories
                };
              }
              return {
                series: t.series.map((e) => {
                  let { id: t, name: n, dataPoints: l, type: a, custom: r, color: o } = e,
                    i = a === tU.Total;
                  return {
                    id: t,
                    name: n,
                    data: l,
                    type: i ? tV.Spline : tV.Column,
                    custom: { ...r, seriesType: a },
                    zIndex: i ? 2 : 1,
                    point: C,
                    ...((e, t, n) => {
                      let l = n ? tD(n, e) : void 0;
                      switch (t) {
                        case tU.Total:
                          return { color: l || tB(e).columnTotalSeriesLineColor };
                        case tU.Normal:
                          return { color: l };
                        default:
                          throw Error("Unhandled chart type: ".concat(t));
                      }
                    })(F, a, o),
                    softThreshold: S,
                    tooltip: { pointFormatter: A }
                  };
                })
              };
            }, [t, S, b, A, C, F]),
            { annotationOptions: N, plotBandsOptions: w } = nu(b ? void 0 : o),
            D = ((e) => {
              let { stacking: t } = e;
              return (0, u.useMemo)(
                () => ({ column: { stacking: t ? "normal" : void 0, borderWidth: 0 } }),
                [t]
              );
            })({ stacking: g }),
            B = ((e) => {
              let {
                  chartStyleMode: t,
                  onSelectChartRegion: n,
                  onChartLoad: l,
                  onChartRender: a,
                  height: r
                } = e,
                o = (0, f.useTheme)(),
                i = nd(n),
                s = (0, u.useMemo)(
                  () =>
                    nc({
                      theme: o,
                      chartType: tV.Column,
                      chartStyleMode: t,
                      onSelectChartRegion: i,
                      onChartLoad: l,
                      onChartRender: a
                    }),
                  [t, l, a, i, o]
                );
              return (0, u.useMemo)(
                () => ({ ...s, ...nm, height: null != r ? r : s.height }),
                [s, r]
              );
            })({
              onSelectChartRegion: d,
              onChartLoad: c,
              onChartRender: nD(ns({ annotations: o, onAnnotationsPositionsUpdated: i }), m),
              chartStyleMode: v,
              height: s
            }),
            O = ((e) => {
              let {
                  xAxisFormatter: t,
                  axisType: n,
                  categories: l,
                  plotBandsOptions: a,
                  xAxisBounds: r
                } = e,
                { type: o } = n,
                i = (0, f.useTheme)(),
                s = (0, u.useCallback)(
                  (e) => {
                    let { value: n } = e;
                    return t({ value: n });
                  },
                  [t]
                );
              return (0, u.useMemo)(() => {
                let e = {
                  type: o,
                  categories: l,
                  lineColor: tB(i).axis,
                  lineWidth: 1,
                  tickLength: 0,
                  width: "100%",
                  labels: {
                    style: {
                      textOverflow: "none",
                      whiteSpace: "nowrap",
                      color: tB(i).axisValueText
                    },
                    autoRotation: void 0,
                    rotation: (null == l ? void 0 : l.length) ? -45 : void 0,
                    formatter: s
                  },
                  plotBands: a,
                  ...(r ? { min: r[0], max: r[1] } : {})
                };
                switch (o) {
                  case "linear":
                    return { ...e };
                  case "datetime": {
                    let { granularity: t } = n;
                    return { ...e, units: t === tG.Month ? [["month", [1]]] : void 0 };
                  }
                  default:
                    throw Error("Unrecognized xAxis type ".concat(o, "."));
                }
              }, [n, l, a, i, o, s, r]);
            })({
              xAxisFormatter: n,
              axisType: l,
              categories: M,
              plotBandsOptions: w,
              xAxisBounds: b ? void 0 : a
            }),
            L = ((e) => {
              let { chartStyleMode: t, yAxisConfig: n, isAnnotationOn: l, highlightXAxis: a } = e,
                r = (0, f.useTheme)(),
                o = (0, u.useCallback)(
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
                i = nM({ chartStyleMode: t, isAnnotationOn: l });
              return (0, u.useMemo)(() => {
                var e;
                return {
                  ...i,
                  id: null == n ? void 0 : n.id,
                  title: { ...i.title, text: null == n ? void 0 : n.yAxisTitle },
                  labels: {
                    ...i.labels,
                    formatter: (null == n ? void 0 : n.yAxisFormatter) ? o : void 0
                  },
                  gridLineWidth: 0.5,
                  plotLines: a ? [{ color: tB(r).axis, width: 3, value: 0 }] : void 0,
                  visible: null != (e = null == n ? void 0 : n.visible) ? e : i.visible
                };
              }, [
                i,
                a,
                r,
                null == n ? void 0 : n.id,
                null == n ? void 0 : n.visible,
                null == n ? void 0 : n.yAxisFormatter,
                null == n ? void 0 : n.yAxisTitle,
                o
              ]);
            })({
              chartStyleMode: v,
              yAxisConfig: r,
              isAnnotationOn: !!(null == o ? void 0 : o.length),
              highlightXAxis: y && S
            }),
            k = ((e) => {
              let { formatX: t } = e,
                n = (0, f.useTheme)(),
                l = t4({ formatX: t });
              return (0, u.useMemo)(() => ({ ...ny({ theme: n }), formatter: l }), [n, l]);
            })({ formatX: p.formatXForPoint }),
            T = nh({ chartStyleMode: v }),
            R = nE(),
            I = nC(),
            P = (0, u.useMemo)(() => {
              let e = {
                series: x,
                annotations: N,
                plotOptions: D,
                chart: B,
                xAxis: O,
                yAxis: L,
                tooltip: k,
                responsive: { rules: [R, I] },
                ...T
              };
              return (E(e), e);
            }, [x, N, D, B, O, L, k, R, I, T, E]);
          return u.default.createElement(ni, {
            options: P,
            onChartDependencyStatus: h,
            showLocalizedTime: "datetime" === l.type && nw(l.granularity)
          });
        })
      ),
      nW = (0, u.memo)((e) => {
        var t;
        let {
            data: n,
            tooltipFormatters: l,
            dataLabelsFormatter: a,
            forceHideLegends: r,
            DataLabelLeadingIcon: o,
            height: i,
            onChartLoad: s,
            onChartRender: d,
            onChartDependencyStatus: c,
            chartStyleMode: m = tX.Normal
          } = e,
          h,
          p,
          g,
          v = (0, f.useTheme)(),
          F = (0, u.useContext)(tj),
          b = t6({
            formatSeriesKeyForPoint: l.formatSeriesKeyForPoint,
            formatSeriesValueForPoint: l.formatSeriesValueForPoint
          }),
          E = nz(),
          C = (0, u.useMemo)(
            () => new Map(n.orderedCategories.map((e, t) => [e, t])),
            [n.orderedCategories]
          ),
          { series: S, longestDataLabelLength: y } = (0, u.useMemo)(() => {
            if (F) return { series: [], longestDataLabelLength: 0 };
            let e = 0,
              t = [];
            return (
              n.series.forEach((n) => {
                let { id: l, name: r, dataPoints: o, color: i } = n,
                  u = [...o].sort((e, t) => {
                    var n, l;
                    return (
                      (null != (n = C.get(e[0])) ? n : 1 / 0) -
                      (null != (l = C.get(t[0])) ? l : 1 / 0)
                    );
                  });
                (t.push({
                  id: l,
                  name: r,
                  type: tV.Bar,
                  data: u,
                  point: E,
                  tooltip: { pointFormatter: b },
                  color: i ? tD(i, v) : void 0
                }),
                  a &&
                    (e = o.reduce((e, t) => {
                      let [n, l] = t;
                      return Math.max(
                        e,
                        (null !== l ? "".concat(a({ y: l, category: n, seriesName: r })) : "")
                          .length
                      );
                    }, 0)));
              }),
              { series: t, longestDataLabelLength: e }
            );
          }, [n.series, a, F, C, b, E, v]),
          A = ((e) => {
            let { formatDataLabel: t, DataLabelLeadingIcon: n } = e,
              l = (0, f.useTheme)(),
              a = !!t,
              r = ((e) => {
                let { formatDataLabel: t, LeadingIcon: n } = e;
                return nv({
                  formatDataLabel: t,
                  LeadingIcon: n,
                  getPointMetadata: (0, u.useCallback)((e) => {
                    let t = e.name;
                    return t ? { category: t } : null;
                  }, [])
                });
              })({ formatDataLabel: t, LeadingIcon: n });
            return (0, u.useMemo)(
              () => ({
                bar: {
                  grouping: !1,
                  dataLabels: {
                    enabled: a,
                    style: {
                      color: tB(l).dataLabelText,
                      fontSize: "14px",
                      fontWeight: "300",
                      display: "inline-flex",
                      alignItems: "center"
                    },
                    crop: !1,
                    overflow: "allow",
                    useHTML: !0,
                    formatter: r,
                    position: "right",
                    defer: !0
                  },
                  pointWidth: 8,
                  borderRadius: 2,
                  borderWidth: 0
                }
              }),
              [a, r, l]
            );
          })({ formatDataLabel: a, DataLabelLeadingIcon: o }),
          x = ((e) => {
            let {
                chartStyleMode: t,
                onChartLoad: n,
                onChartRender: l,
                height: a,
                longestDataLabelLength: r
              } = e,
              o = (0, f.useTheme)(),
              i = (0, u.useMemo)(
                () =>
                  nc({
                    theme: o,
                    chartType: tV.Bar,
                    chartStyleMode: t,
                    onChartLoad: n,
                    onChartRender: l
                  }),
                [t, n, l, o]
              );
            return (0, u.useMemo)(
              () => ({
                ...i,
                ...nm,
                height: null != a ? a : i.height,
                marginRight: r ? 6 * r : void 0
              }),
              [i, a, r]
            );
          })({
            chartStyleMode: m,
            onChartLoad: s,
            onChartRender: d,
            height: i,
            longestDataLabelLength: y
          }),
          M =
            ((t = n.orderedCategories),
            (0, u.useMemo)(
              () => ({
                type: "category",
                categories: t,
                lineWidth: 0,
                labels: {
                  align: "right",
                  style: { color: tB(h).axisValueText, fontSize: "14px", fontWeight: "300" },
                  autoRotation: void 0
                }
              }),
              [t, (h = (0, f.useTheme)())]
            )),
          N = (0, u.useMemo)(() => ({ visible: !1 }), []),
          w =
            ((p = (0, f.useTheme)()),
            (0, u.useMemo)(
              () => ({ ...ny({ theme: p }), formatter: g }),
              [(g = t4({ formatX: (0, u.useCallback)(() => "", []) })), p]
            )),
          D = nh({ chartStyleMode: m, forceHideLegends: r }),
          B = nE(),
          O = (0, u.useMemo)(
            () => ({
              series: S,
              plotOptions: A,
              chart: x,
              xAxis: M,
              yAxis: N,
              tooltip: w,
              responsive: { rules: [B] },
              ...D
            }),
            [x, D, A, S, B, w, M, N]
          );
        return u.default.createElement(ni, { options: O, onChartDependencyStatus: c });
      }),
      nj = (0, u.memo)((e) => {
        let {
            data: t,
            tooltipFormatter: n,
            onChartLoad: l,
            onChartRender: a,
            onChartDependencyStatus: r,
            legendLabelFormatter: o,
            height: i,
            chartStyleMode: s = tX.Normal
          } = e,
          d,
          c,
          m = (0, u.useContext)(tj),
          h = (0, u.useMemo)(() => {
            if (m) return [];
            let { name: e, dataPoints: n } = t.singleSeries;
            return [
              {
                name: e,
                data: n.map((e) => {
                  let [t, n] = e;
                  return [t, n];
                }),
                type: tV.Map
              }
            ];
          }, [t.singleSeries, m]),
          p = (0, u.useMemo)(() => ({ map: { states: { inactive: { enabled: !1 } } } }), []),
          g = ((e) => {
            let {
                chartStyleMode: t,
                onChartLoad: n,
                onChartRender: l,
                topoJSONData: a,
                height: r
              } = e,
              o = (0, f.useTheme)(),
              i = (0, u.useMemo)(
                () =>
                  nc({
                    theme: o,
                    chartType: tV.Map,
                    chartStyleMode: t,
                    onChartLoad: n,
                    onChartRender: l
                  }),
                [t, n, l, o]
              );
            return (0, u.useMemo)(
              () => ({ ...i, ...nm, map: a, height: null != r ? r : i.height }),
              [i, r, a]
            );
          })({
            chartStyleMode: s,
            onChartLoad: l,
            onChartRender: a,
            height: i,
            topoJSONData: t.topoJSON
          }),
          v =
            ((d = (0, f.useTheme)()),
            (0, u.useMemo)(
              () => ({ ...ny({ theme: d }), formatter: c }),
              [
                (c = ((e) => {
                  let { formatPoint: t } = e,
                    n = t3();
                  return (0, u.useCallback)(
                    function () {
                      let { series: e, "hc-key": l, value: a } = this;
                      return null == a || void 0 === l
                        ? ""
                        : '<div style="'
                            .concat(n, '">')
                            .concat(tY(t)({ hcKey: l, seriesName: e.name }), "</div>");
                    },
                    [t, n]
                  );
                })({ formatPoint: n })),
                d
              ]
            )),
          F = (0, u.useMemo)(
            () => ({
              enabled: !0,
              enableMouseWheelZoom: !1,
              buttonOptions: { alignTo: "spacingBox", style: { fontWeight: "normal" } }
            }),
            []
          ),
          b = ((e) => {
            let { splits: t } = e;
            return (0, u.useMemo)(() => {
              let e = [];
              for (let n = 0; n <= t.length; n += 1) {
                let l = 0 === n ? void 0 : t[n - 1],
                  a = n === t.length ? void 0 : t[n];
                e.push({ from: l, to: a });
              }
              return { dataClasses: e };
            }, [t]);
          })({ splits: t.colorAxisSplit }),
          E = ((e) => {
            let { chartStyleMode: t, formatLegendLabel: n } = e,
              l = (0, f.useTheme)();
            return (0, u.useMemo)(
              () => ({
                legend: {
                  enabled: t !== tX.Minimal,
                  layout: "vertical",
                  align: "left",
                  verticalAlign: "bottom",
                  floating: !0,
                  useHTML: !0,
                  itemStyle: {
                    color: tB(l).legendText,
                    fontSize: "12px",
                    fontWeight: "300",
                    textOverflow: "ellipsis"
                  },
                  itemHoverStyle: { color: tB(l).legendText },
                  labelFormatter() {
                    let { from: e, to: t } = ((e) => {
                        if ("object" != typeof e || null === e) return {};
                        let { from: t, to: n } = e;
                        return {
                          from: "number" == typeof t ? t : void 0,
                          to: "number" == typeof n ? n : void 0
                        };
                      })(this),
                      l = tY(n)({ from: e, to: t });
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
          })({ chartStyleMode: s, formatLegendLabel: o }),
          C = (0, u.useMemo)(
            () => ({
              series: h,
              plotOptions: p,
              chart: g,
              mapNavigation: F,
              colorAxis: b,
              tooltip: v,
              ...E
            }),
            [g, b, E, F, p, h, v]
          );
        return u.default.createElement(ni, {
          options: C,
          constructorType: "mapChart",
          onChartDependencyStatus: r
        });
      }),
      nH = u.default.memo((e) => {
        let {
            data: t,
            tooltipFormatters: n,
            formatDataLabel: l,
            DataLabelLeadingIcon: a,
            borderColor: r,
            borderWidth: o,
            chartStyleMode: i = tX.Normal,
            height: s,
            onChartLoad: d,
            onChartRender: c,
            onChartDependencyStatus: m
          } = e,
          h = (0, f.useTheme)(),
          p = (0, u.useContext)(tj),
          g = (0, u.useMemo)(() => {
            if (p) return [];
            let { series: e } = t;
            return [
              {
                id: e.id,
                name: e.name,
                type: tV.Pie,
                data: e.dataPoints.map((t, n) => {
                  var l;
                  let [a, r] = t;
                  return {
                    name: a,
                    y: r,
                    color: (null == (l = e.dataPointColors) ? void 0 : l[n])
                      ? tD(e.dataPointColors[n], h)
                      : void 0
                  };
                }),
                color: e.color ? tD(e.color, h) : void 0,
                custom: e.custom
              }
            ];
          }, [t, p, h]),
          v = (function () {
            let {
                formatDataLabel: e,
                DataLabelLeadingIcon: t,
                borderColor: n,
                borderWidth: l
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              a = !!e,
              r = ((e) => {
                let { formatDataLabel: t, LeadingIcon: n } = e;
                return nv({
                  formatDataLabel: t,
                  LeadingIcon: n,
                  getPointMetadata: (0, u.useCallback)((e) => {
                    let t = e.name;
                    return t ? { category: t, percentage: e.percentage } : null;
                  }, [])
                });
              })({ formatDataLabel: e, LeadingIcon: t });
            return (0, u.useMemo)(
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
                      let t = r.call(this, e);
                      if (!t && 0 !== t) return null;
                      let { plotWidth: n, plotHeight: a } = this.series.chart,
                        o = nF(n, a);
                      try {
                        if (
                          !(function (e, t, n, l) {
                            let a =
                                arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                              r =
                                arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : nb;
                            if (!e || !e.y || !e.percentage || !t || !n) return !1;
                            let { plotWidth: o, plotHeight: i } = t,
                              u = 0.5 * Math.min(o, i),
                              s =
                                0.7 *
                                u *
                                Math.sin(
                                  Math.min((e.percentage / 100) * 2 * Math.PI, Math.PI) / 2
                                ) *
                                1,
                              d = Math.max(8, Math.min(20, l)),
                              c = tK(String(n));
                            return r.measureText(c, d) <= s - 2 * a;
                          })(this, this.series.chart, t, o, l)
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
              [a, r, n, l]
            );
          })({
            formatDataLabel: l,
            DataLabelLeadingIcon: a,
            ...(0, u.useMemo)(
              () => (t.series.dataPoints.length > 1 ? { borderColor: r, borderWidth: o } : {}),
              [r, o, t.series.dataPoints.length]
            )
          }),
          F = ((e) => {
            let { chartStyleMode: t, onChartLoad: n, onChartRender: l, height: a } = e,
              r = (0, f.useTheme)(),
              o = (0, u.useMemo)(
                () =>
                  nc({
                    theme: r,
                    chartType: tV.Pie,
                    chartStyleMode: t,
                    onChartLoad: n,
                    onChartRender: l
                  }),
                [t, n, l, r]
              );
            return (0, u.useMemo)(
              () => ({ ...o, ...nm, height: null != a ? a : o.height, zoomType: "none" }),
              [o, a]
            );
          })({ onChartLoad: d, onChartRender: c, chartStyleMode: i, height: s }),
          b = ((e) => {
            let { formatSeriesKeyForSlice: t, formatSeriesValueForSlice: n } = e,
              l = (0, f.useTheme)(),
              a = t3(),
              r = ((e) => {
                let { formatSeriesKeyForSlice: t, formatSeriesValueForSlice: n } = e,
                  l = (0, f.useTheme)();
                return (0, u.useCallback)(
                  function () {
                    let { name: e, y: a, percentage: r, color: o } = this;
                    return e && null != a && null != r
                      ? t2({
                          key: tY(t)({ sliceName: e, sliceValue: a, percentage: r }),
                          value: tY(n)({ sliceName: e, sliceValue: a, percentage: r }),
                          shouldRenderDot: !0,
                          theme: l,
                          color: o
                        })
                      : "";
                  },
                  [t, n, l]
                );
              })({ formatSeriesKeyForSlice: t, formatSeriesValueForSlice: n }),
              o = (0, u.useCallback)(
                function () {
                  if (!this.name || null == this.y || null == this.percentage) return "";
                  let e = r.call(this);
                  return "" === e ? e : '<div style="'.concat(a, '">').concat(e, "</div>");
                },
                [r, a]
              );
            return (0, u.useMemo)(() => ({ ...ny({ theme: l }), split: !1, formatter: o }), [l, o]);
          })({
            formatSeriesKeyForSlice: n.formatSeriesKeyForSlice,
            formatSeriesValueForSlice: n.formatSeriesValueForSlice
          }),
          E = nh({ chartStyleMode: i }),
          C = (0, u.useMemo)(
            () => [
              {
                condition: { minWidth: 600 },
                chartOptions: {
                  plotOptions: {
                    pie: {
                      dataLabels: {
                        style: { fontSize: "".concat(nF(600, 600), "px"), fontWeight: "400" }
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
                        style: { fontSize: "".concat(nF(400, 400), "px"), fontWeight: "400" }
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
                        style: { fontSize: "".concat(nF(300, 300), "px"), fontWeight: "500" }
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
                        style: { fontSize: "".concat(nF(299, 299), "px"), fontWeight: "600" }
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
          S = (0, u.useMemo)(
            () => ({
              series: g,
              plotOptions: v,
              chart: F,
              tooltip: b,
              responsive: { rules: C },
              ...E
            }),
            [g, v, F, b, C, E]
          );
        return u.default.createElement(ni, {
          options: S,
          showLocalizedTime: !1,
          onChartDependencyStatus: m
        });
      });
    let nV = (e, t) => {
        let n = 1,
          l = e;
        for (; (null == l ? void 0 : l.parent) !== void 0 && (l = t.get(l.parent));) n += 1;
        return n;
      },
      nX = (e) => {
        let t = new Map(e.map((e) => [e.id, e])),
          n = new Map();
        return (e.forEach((e) => n.set(e.id, nV(e, t))), n);
      },
      nG = (e) => {
        let t = new Map(e.map((e) => [e.id, e]));
        return e.reduce((e, n) => Math.max(e, nV(n, t)), 1);
      },
      nU = (e, t) => {
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
                r = e.value / a;
              l.set(e.id, r);
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
      nK = "Other",
      nY = (e, t, n) => {
        var l;
        let a, r;
        if (0 === e.length || t <= 0) return e;
        let o =
          null != n ? n : e.filter((e) => void 0 === e.parent).reduce((e, t) => e + t.value, 0);
        if (o <= 0) return e;
        let i = (t / 100) * o,
          u = nG(e),
          s = [...e];
        for (let e = u; e >= 1; e -= 1) {
          let t = nX(s),
            n = s.filter((n) => t.get(n.id) === e),
            l = new Map();
          n.forEach((e) => {
            var t;
            let n = null != (t = e.parent) ? t : "";
            (l.has(n) || l.set(n, []), l.get(n).push(e));
          });
          let a = new Set(),
            r = [];
          l.forEach((e, t) => {
            let n = e.filter((e) => e.value < i);
            if (0 === n.length) return;
            let l = "" === t ? void 0 : t;
            (r.push({
              id: "other-".concat(t || "root"),
              name: nK,
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
          s = s.filter((e) => !a.has(e.id)).concat(r);
        }
        return (
          (l = s),
          (a = new Map()),
          l.forEach((e) => {
            void 0 !== e.parent &&
              (a.has(e.parent) || a.set(e.parent, []), a.get(e.parent).push(e));
          }),
          (r = new Set()),
          (a.forEach((e) => {
            1 === e.length && e[0].name === nK && r.add(e[0].id);
          }),
          0 === r.size)
            ? l
            : l.filter((e) => !r.has(e.id))
        );
      },
      nq = (e) => {
        let {
            data: t,
            tooltipFormatter: l,
            formatDataLabel: a,
            chartStyleMode: r = tX.Normal,
            height: o,
            rootName: i,
            minDisplayPercentage: s,
            colorBySiblingProportion: d,
            onChartLoad: c,
            onRootNodeChanged: m
          } = e,
          h,
          p,
          g,
          v,
          F,
          b,
          E,
          C = ((e) => {
            let { chartStyleMode: t, onChartLoad: n, height: l } = e,
              a = (0, f.useTheme)(),
              r = (0, u.useMemo)(
                () => nc({ theme: a, chartType: tV.Treemap, chartStyleMode: t, onChartLoad: n }),
                [t, n, a]
              );
            return (0, u.useMemo)(
              () => ({ ...r, ...nm, height: null != l ? l : r.height }),
              [r, l]
            );
          })({ chartStyleMode: r, onChartLoad: c, height: o }),
          S =
            ((h = (0, f.useTheme)()),
            (0, u.useMemo)(
              () => ({ ...ny({ theme: h }), split: !1, formatter: g }),
              [
                h,
                (g = (0, u.useCallback)(
                  function () {
                    var e;
                    let { value: t, series: n, name: a, options: r } = this,
                      o = null == (e = n.tree) ? void 0 : e.val,
                      i = null != t ? t : 0,
                      u = l({
                        name: tK(null != a ? a : ""),
                        value: i,
                        percentage: o && o > 0 ? i / o : void 0,
                        custom: null == r ? void 0 : r.custom
                      });
                    return '<div style="'.concat(p, '">').concat(u, "</div>");
                  },
                  [l, (p = t3())]
                ))
              ]
            )),
          y =
            ((v = (0, f.useTheme)()),
            (0, u.useMemo)(
              () => ({
                min: 0,
                max: 1,
                stops: [
                  [0, tD("Yellow3", v)],
                  [0.25, tD("Green3", v)],
                  [0.5, tD("Cyan2", v)],
                  [0.75, tD("Blue3", v)],
                  [1, tD("Purple4", v)]
                ],
                labels: {
                  style: { color: v.palette.content.standard, ...nf(v, "body2") },
                  formatter: F
                },
                width: 512,
                minPadding: 2,
                tickAmount: 5
              }),
              [
                (F = (0, u.useCallback)(function () {
                  let { value: e } = this,
                    t = Number(e);
                  return Number.isNaN(t) ? "" : "".concat(Math.round(100 * t), "%");
                }, [])),
                v
              ]
            )),
          A = (0, u.useMemo)(
            () => ({
              useHTML: !0,
              formatter: E,
              showFullPath: !0,
              buttonTheme: {
                fill: "transparent",
                stroke: b.palette.content.standard,
                style: {
                  color: b.palette.content.standard,
                  ...nf(b, "body2"),
                  textDecoration: "none"
                },
                states: {
                  hover: {
                    fill: "transparent",
                    stroke: b.palette.content.standard,
                    style: { ...nf(b, "body2"), textDecoration: "underline" }
                  }
                }
              }
            }),
            [
              (E = (0, u.useCallback)(
                function (e) {
                  let t,
                    { levelOptions: n } = e,
                    { name: l } = n;
                  return '<span style="color: '
                    .concat(b.palette.content.standard, "; ")
                    .concat(
                      ((t = "body2"),
                      "font-family: "
                        .concat(b.typography[t].fontFamily, "; font-style: ")
                        .concat(b.typography[t].fontStyle, "; line-height: ")
                        .concat(b.typography[t].lineHeight, "; letter-spacing: ")
                        .concat(b.typography[t].letterSpacing, "; font-size: ")
                        .concat(b.typography[t].fontSize, ";")),
                      '">'
                    )
                    .concat(tK(null != l ? l : ""), "</span>");
                },
                [(b = (0, f.useTheme)())]
              )),
              b
            ]
          ),
          x = (0, u.useMemo)(() => {
            let {
              data: e,
              rootId: n,
              rootName: l
            } = ((e, t) => {
              var n;
              let l = e.filter((e) => void 0 === e.parent),
                a = null == t ? void 0 : t.minDisplayPercentage,
                r = null != (n = null == t ? void 0 : t.rootName) ? n : "root",
                o = !!(null == t ? void 0 : t.colorBySiblingProportion);
              if (1 === l.length) {
                let t = l[0],
                  n = t.id,
                  r = t.name,
                  i = e.filter((e) => e.id !== n);
                return (
                  void 0 !== a && a > 0 && (i = nY(i, a, t.value)),
                  { data: nU(i, o ? void 0 : t.value), rootId: n, rootName: r }
                );
              }
              let i = e;
              void 0 !== a && a > 0 && (i = nY(i, a));
              let u = i.filter((e) => void 0 === e.parent).reduce((e, t) => e + t.value, 0),
                s = nU(i, o ? void 0 : u);
              return {
                data: [
                  { id: "root", name: r, value: u, colorValue: 1 },
                  ...s.map((e) => (void 0 === e.parent ? { ...e, parent: "root" } : e))
                ],
                rootId: "root",
                rootName: r
              };
            })(t, { minDisplayPercentage: s, rootName: i, colorBySiblingProportion: d });
            return [{ type: tV.Treemap, name: l, id: n, rootId: n, data: e, breadcrumbs: A }];
          }, [t, s, i, d, A]),
          M = ((e) => {
            let { formatDataLabel: t, onRootNodeChanged: l } = e,
              a = (0, f.useTheme)(),
              r = ((e) => {
                let { formatDataLabel: t } = e,
                  n = (0, f.useTheme)();
                return (0, u.useCallback)(
                  function () {
                    let { name: e, value: l, series: a, node: r, colorValue: o } = this;
                    if (!e) return "";
                    let i = !(null == r ? void 0 : r.children) || 0 === r.children.length,
                      u = void 0 !== o && o < 0.05 ? tO(n, "inverse") : tO(n, "standard"),
                      s = tK(e);
                    if (i && null != l) {
                      let r = tK(
                          String(t ? t({ y: l, category: e, seriesName: a.name }) : "".concat(l))
                        ),
                        o = "".concat(
                          "color: ".concat(u, ";"),
                          " text-overflow: ellipsis; width: 100%; display: inline-block; overflow: hidden;"
                        ),
                        i =
                          "Other" !== e
                            ? '<span style="'
                                .concat(o, " ")
                                .concat(np(n, "chip"), '">')
                                .concat(s, "</span><br>")
                            : "";
                      return ""
                        .concat(i, '<span style="')
                        .concat(o, " ")
                        .concat(np(n, "caption"), ' ">')
                        .concat(r, "</span>");
                    }
                    return '<div style="padding-top: 4px; '
                      .concat(np(n, "chip"), '">')
                      .concat(s, "</div>");
                  },
                  [t, n]
                );
              })({ formatDataLabel: t });
            return (0, u.useMemo)(
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
                    formatter: r
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
              [a, r, l]
            );
          })({ formatDataLabel: a, onRootNodeChanged: m }),
          N = (0, u.useMemo)(
            () => ({
              series: x,
              plotOptions: M,
              chart: C,
              tooltip: S,
              colorAxis: y,
              title: { style: { display: "none" } },
              credits: { enabled: !1 }
            }),
            [x, M, C, S, y]
          );
        return u.default.createElement(ni, { options: N });
      };
    nq.displayName = "TreemapChart";
    var nQ = u.default.memo(nq);
    let nZ = (e) => {
      let {
          model: t,
          viewport: n,
          zoom: l,
          maxWidth: a = 176,
          maxHeight: r = 120,
          onNavigate: o,
          onPanActivity: i
        } = e,
        { width: s, height: d } = t,
        c = (0, u.useRef)(null),
        m = (0, u.useRef)(!1),
        h = Math.min(a / s, r / d, 1),
        f = n.scrollLeft / l,
        p = n.scrollTop / l,
        g = n.clientWidth / l,
        v = n.clientHeight / l,
        F = (0, u.useCallback)(
          (e, t) => {
            let a = c.current;
            if (!a) return;
            let r = a.getBoundingClientRect(),
              i = e - r.left,
              u = t - r.top,
              s = i / h,
              d = u / h;
            o(s * l - n.clientWidth / 2, d * l - n.clientHeight / 2);
          },
          [h, l, n.clientWidth, n.clientHeight, o]
        ),
        b = (0, u.useCallback)(
          (e) => {
            ((m.current = !0),
              null == i || i(),
              e.currentTarget.setPointerCapture(e.pointerId),
              F(e.clientX, e.clientY));
          },
          [F, i]
        ),
        E = (0, u.useCallback)(
          (e) => {
            m.current && (null == i || i(), F(e.clientX, e.clientY));
          },
          [F, i]
        ),
        C = (0, u.useCallback)(
          (e) => {
            ((m.current = !1),
              null == i || i(),
              e.currentTarget.hasPointerCapture(e.pointerId) &&
                e.currentTarget.releasePointerCapture(e.pointerId));
          },
          [i]
        );
      return u.default.createElement(
        "svg",
        {
          ref: c,
          width: s * h,
          height: d * h,
          viewBox: "0 0 ".concat(s, " ").concat(d),
          onPointerDown: b,
          onPointerMove: E,
          onPointerUp: C,
          onPointerCancel: C,
          className:
            "block cursor-pointer [touch-action:none] [background:rgba(18,18,21,0.72)] [backdrop-filter:blur(4px)] [border:1px_solid_rgba(255,255,255,0.12)] [border-radius:6px] [box-shadow:0_2px_10px_rgba(0,0,0,0.35)]"
        },
        t.links.map((e) =>
          u.default.createElement("line", {
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
          u.default.createElement("rect", {
            key: e.id,
            x: e.x0,
            y: e.y0,
            width: e.x1 - e.x0,
            height: Math.max(1, e.y1 - e.y0),
            fill: e.color,
            fillOpacity: 0.65
          })
        ),
        u.default.createElement("rect", {
          x: Math.max(0, f),
          y: Math.max(0, p),
          width: Math.min(g, s),
          height: Math.min(v, d),
          fill: "rgba(255, 255, 255, 0.1)",
          stroke: "#f7f7f8",
          strokeWidth: 1.5,
          vectorEffect: "non-scaling-stroke",
          pointerEvents: "none"
        })
      );
    };
    nZ.displayName = "SankeyOverview";
    let nJ = {
        scrollLeft: 0,
        scrollTop: 0,
        clientWidth: 0,
        clientHeight: 0,
        scrollWidth: 0,
        scrollHeight: 0
      },
      n$ = (e, t) => Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY),
      n0 = (e, t, n) => Math.max(0, Math.min(e, t / 2, n / 2)),
      n1 = (e, t, n, l) =>
        "M"
          .concat(e, ",")
          .concat(t, " L")
          .concat(e + n, ",")
          .concat(t, " L")
          .concat(e + n, ",")
          .concat(t + l, " L")
          .concat(e, ",")
          .concat(t + l, " Z"),
      n2 = (e) => {
        let { column: t, columnCount: n } = e;
        return n <= 1 ? "both" : 0 === t ? "leading" : t === n - 1 ? "trailing" : "both";
      },
      n6 = (e) => {
        let { x: t, y: n, width: l, height: a, radius: r, cornerMode: o } = e,
          i = { x: t, y: n, width: l, height: a, radius: r };
        switch (o) {
          case "leading":
            return ((e) => {
              let { x: t, y: n, width: l, height: a, radius: r } = e,
                o = n0(r, l, a);
              return 0 === o
                ? n1(t, n, l, a)
                : "M"
                    .concat(t + o, ",")
                    .concat(n, " L")
                    .concat(t + l, ",")
                    .concat(n, " L")
                    .concat(t + l, ",")
                    .concat(n + a, " L")
                    .concat(t + o, ",")
                    .concat(n + a, " Q")
                    .concat(t, ",")
                    .concat(n + a, " ")
                    .concat(t, ",")
                    .concat(n + a - o, " L")
                    .concat(t, ",")
                    .concat(n + o, " Q")
                    .concat(t, ",")
                    .concat(n, " ")
                    .concat(t + o, ",")
                    .concat(n, " Z");
            })(i);
          case "trailing":
            return ((e) => {
              let { x: t, y: n, width: l, height: a, radius: r } = e,
                o = n0(r, l, a);
              return 0 === o
                ? n1(t, n, l, a)
                : "M"
                    .concat(t, ",")
                    .concat(n, " L")
                    .concat(t + l - o, ",")
                    .concat(n, " Q")
                    .concat(t + l, ",")
                    .concat(n, " ")
                    .concat(t + l, ",")
                    .concat(n + o, " L")
                    .concat(t + l, ",")
                    .concat(n + a - o, " Q")
                    .concat(t + l, ",")
                    .concat(n + a, " ")
                    .concat(t + l - o, ",")
                    .concat(n + a, " L")
                    .concat(t, ",")
                    .concat(n + a, " Z");
            })(i);
          default:
            return ((e) => {
              let { x: t, y: n, width: l, height: a, radius: r } = e,
                o = n0(r, l, a);
              return 0 === o
                ? n1(t, n, l, a)
                : "M"
                    .concat(t + o, ",")
                    .concat(n, " L")
                    .concat(t + l - o, ",")
                    .concat(n, " Q")
                    .concat(t + l, ",")
                    .concat(n, " ")
                    .concat(t + l, ",")
                    .concat(n + o, " L")
                    .concat(t + l, ",")
                    .concat(n + a - o, " Q")
                    .concat(t + l, ",")
                    .concat(n + a, " ")
                    .concat(t + l - o, ",")
                    .concat(n + a, " L")
                    .concat(t + o, ",")
                    .concat(n + a, " Q")
                    .concat(t, ",")
                    .concat(n + a, " ")
                    .concat(t, ",")
                    .concat(n + a - o, " L")
                    .concat(t, ",")
                    .concat(n + o, " Q")
                    .concat(t, ",")
                    .concat(n, " ")
                    .concat(t + o, ",")
                    .concat(n, " Z");
            })(i);
        }
      },
      n3 = (e) => "sankey" === e.type,
      n4 = (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.id) ? t : null == e ? void 0 : e.name;
      },
      n5 = (e, t) => n4(e.fromNode) === t || n4(e.toNode) === t,
      n7 = (e) => "sankey" === e.type,
      n9 = (e) => ("string" == typeof e && e.length > 0 ? e : "#888888"),
      n8 = "relative width-full [overflow:auto] [overscroll-behavior:contain]",
      le = (e) => {
        let {
            data: t,
            tooltipFormatter: n,
            formatDataLabel: l,
            chartStyleMode: a = tX.Normal,
            height: r = 360,
            onChartLoad: o,
            containerHeight: i,
            zoomLabelsFormatter: s
          } = e,
          d,
          c,
          m,
          { nodes: h, links: p } = t,
          g = (0, u.useMemo)(
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
          v = g.length > 0 && p.length > 0,
          F = (0, f.useTheme)(),
          { dataLabelText: b } = tB(F),
          E = F.palette.surface[0],
          C = (0, u.useRef)(null),
          S = (0, u.useRef)(null),
          y = (0, u.useRef)(null),
          [A, x] = (0, u.useState)(0),
          [M, N] = (0, u.useState)(void 0),
          [w, D] = (0, u.useState)(void 0),
          [B, O] = (0, u.useState)(!1),
          { contentWidth: L, contentHeight: k } = (0, u.useMemo)(
            () =>
              ((e) => {
                var t, n;
                let {
                    nodes: l,
                    links: a,
                    measuredWidth: r,
                    height: o,
                    nodeWidth: i,
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
                    r = (n, l) => {
                      var a;
                      let o = t.get(n);
                      if (void 0 !== o) return o;
                      if (l.has(n)) return 0;
                      l.add(n);
                      let i = null != (a = e.get(n)) ? a : [],
                        u = 0 === i.length ? 0 : 1 + Math.max(...i.map((e) => r(e, l)));
                      return (l.delete(n), t.set(n, u), u);
                    };
                  for (let e of l) m = Math.max(m, r(e.id, new Set()));
                }
                let h = 0;
                for (let e of c.values()) h = Math.max(h, e);
                return {
                  contentWidth: Math.max(r > 0 ? r : 600, 0),
                  contentHeight: Math.max(o, 0),
                  lastColumnIndex: m,
                  maxColumnCount: h
                };
              })({
                nodes: g,
                links: p,
                measuredWidth: A,
                height: r,
                nodeWidth: 8,
                nodePadding: 16,
                minNodeThickness: 0,
                minColumnWidth: 0
              }),
            [g, p, A, r]
          ),
          T = (0, u.useMemo)(
            () =>
              ""
                .concat(g.map((e) => e.id).join(","), "|")
                .concat(p.map((e) => "".concat(e.from, ":").concat(e.to)).join(","), "|")
                .concat(L, "x")
                .concat(k),
            [g, p, L, k]
          ),
          R = void 0 !== s,
          I = A > 0 ? Math.min(1, A / L, 640 / k) : 1,
          {
            scrollRef: P,
            zoom: z,
            viewport: _,
            isPanning: W,
            zoomIn: j,
            zoomOut: H,
            reset: V,
            scrollTo: X,
            signalPanActivity: G,
            wasDraggedRef: U
          } = ((e) => {
            let {
                contentWidth: t,
                contentHeight: n,
                enabled: l,
                zoomEnabled: a = !0,
                minZoom: r = 1,
                maxZoom: o = 8,
                zoomStep: i = 1.2,
                panHideDelayMs: s = 1200
              } = e,
              d = (0, u.useRef)(null),
              [c, m] = (0, u.useState)(1),
              [h, f] = (0, u.useState)(nJ),
              [p, g] = (0, u.useState)(!1),
              v = (0, u.useRef)(null),
              F = (0, u.useRef)(1),
              b = (0, u.useRef)(null),
              E = (0, u.useRef)(!1),
              C = (0, u.useCallback)(() => {
                let e = d.current;
                e &&
                  f({
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop,
                    clientWidth: e.clientWidth,
                    clientHeight: e.clientHeight,
                    scrollWidth: e.scrollWidth,
                    scrollHeight: e.scrollHeight
                  });
              }, []),
              S = (0, u.useCallback)(() => {
                (g(!0),
                  v.current && clearTimeout(v.current),
                  (v.current = setTimeout(() => {
                    (g(!1), (v.current = null));
                  }, s)));
              }, [s]),
              y = (0, u.useCallback)((e) => Math.min(o, Math.max(r, e)), [r, o]),
              A = (0, u.useCallback)(
                (e, t, n) => {
                  let l = d.current;
                  if (!l) return;
                  let a = F.current,
                    r = y(e);
                  if (1e-4 > Math.abs(r - a)) return;
                  let o = l.getBoundingClientRect(),
                    i = void 0 === t ? l.clientWidth / 2 : t - o.left,
                    u = void 0 === n ? l.clientHeight / 2 : n - o.top;
                  ((b.current = {
                    left: ((l.scrollLeft + i) / a) * r - i,
                    top: ((l.scrollTop + u) / a) * r - u
                  }),
                    (F.current = r),
                    m(r));
                },
                [y]
              ),
              x = (0, u.useCallback)(() => A(F.current * i), [A, i]),
              M = (0, u.useCallback)(() => A(F.current / i), [A, i]),
              N = (0, u.useCallback)(() => {
                ((b.current = { left: 0, top: 0 }), (F.current = 1), m(1));
              }, []),
              w = (0, u.useCallback)((e, t) => {
                let n = d.current;
                n && ((n.scrollLeft = e), (n.scrollTop = t));
              }, []);
            return (
              (0, u.useLayoutEffect)(() => {
                let e = d.current;
                e &&
                  (b.current &&
                    ((e.scrollLeft = b.current.left),
                    (e.scrollTop = b.current.top),
                    (b.current = null)),
                  C());
              }, [c, t, n, C]),
              (0, u.useEffect)(() => {
                let e = d.current;
                if (!e) return;
                let t = () => {
                  (C(), S());
                };
                return (
                  e.addEventListener("scroll", t, { passive: !0 }),
                  () => e.removeEventListener("scroll", t)
                );
              }, [C, S]),
              (0, u.useEffect)(
                () => () => {
                  v.current && clearTimeout(v.current);
                },
                []
              ),
              (0, u.useEffect)(() => {
                let e = d.current;
                if (!e || !l || !a) return;
                let t = (e) => {
                  if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    let t = Math.exp(-(0.0015 * e.deltaY));
                    A(F.current * t, e.clientX, e.clientY);
                  }
                };
                return (
                  e.addEventListener("wheel", t, { passive: !1 }),
                  () => e.removeEventListener("wheel", t)
                );
              }, [l, a, A]),
              (0, u.useEffect)(() => {
                let e = d.current;
                if (!e || !l || !a) return;
                let t = null,
                  n = !1,
                  r = (l) => {
                    if ("mouse" !== l.pointerType || 0 !== l.button) return;
                    let a = l.target instanceof Element ? l.target : null;
                    (null == a ? void 0 : a.closest("button, a, input, textarea, select")) ||
                      ((E.current = !1),
                      (t = {
                        x: l.clientX,
                        y: l.clientY,
                        scrollLeft: e.scrollLeft,
                        scrollTop: e.scrollTop
                      }),
                      (n = !1));
                  },
                  o = (l) => {
                    if (!t) return;
                    let a = l.clientX - t.x,
                      r = l.clientY - t.y;
                    if (!n) {
                      if (4 > Math.hypot(a, r)) return;
                      ((n = !0),
                        (e.style.cursor = "grabbing"),
                        e.setPointerCapture && e.setPointerCapture(l.pointerId),
                        S());
                    }
                    (l.preventDefault(),
                      (e.scrollLeft = t.scrollLeft - a),
                      (e.scrollTop = t.scrollTop - r),
                      n && S());
                  },
                  i = (l) => {
                    var a;
                    (n && ((E.current = !0), S()),
                      (null == (a = e.hasPointerCapture) ? void 0 : a.call(e, l.pointerId)) &&
                        e.releasePointerCapture(l.pointerId),
                      (t = null),
                      (n = !1),
                      (e.style.cursor = "grab"));
                  };
                return (
                  (e.style.cursor = "grab"),
                  e.addEventListener("pointerdown", r, { capture: !0 }),
                  window.addEventListener("pointermove", o, { passive: !1 }),
                  window.addEventListener("pointerup", i),
                  () => {
                    ((e.style.cursor = ""),
                      e.removeEventListener("pointerdown", r, { capture: !0 }),
                      window.removeEventListener("pointermove", o),
                      window.removeEventListener("pointerup", i));
                  }
                );
              }, [l, a, S]),
              (0, u.useEffect)(() => {
                let e = d.current;
                if (!e || !l || !a) return;
                let t = null,
                  n = null,
                  r = !1,
                  o = (l) => {
                    if (1 === l.touches.length) {
                      let a = l.touches[0];
                      ((t = {
                        x: a.clientX,
                        y: a.clientY,
                        scrollLeft: e.scrollLeft,
                        scrollTop: e.scrollTop
                      }),
                        (r = !1),
                        (n = null));
                    } else
                      2 === l.touches.length &&
                        ((n = { distance: n$(l.touches[0], l.touches[1]), zoom: F.current }),
                        (t = null));
                  },
                  i = (l) => {
                    if (n && 2 === l.touches.length) {
                      l.preventDefault();
                      let e = n$(l.touches[0], l.touches[1]);
                      if (n.distance > 0) {
                        let t = (l.touches[0].clientX + l.touches[1].clientX) / 2,
                          a = (l.touches[0].clientY + l.touches[1].clientY) / 2;
                        A(n.zoom * (e / n.distance), t, a);
                      }
                      return;
                    }
                    if (t && 1 === l.touches.length) {
                      let n = l.touches[0],
                        a = n.clientX - t.x,
                        o = n.clientY - t.y;
                      if (!r && 4 > Math.hypot(a, o)) return;
                      ((r = !0),
                        l.preventDefault(),
                        (e.scrollLeft = t.scrollLeft - a),
                        (e.scrollTop = t.scrollTop - o),
                        S());
                    }
                  },
                  u = (l) => {
                    if ((r && S(), 0 === l.touches.length)) ((t = null), (n = null), (r = !1));
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
                  e.addEventListener("touchstart", o, { passive: !1 }),
                  e.addEventListener("touchmove", i, { passive: !1 }),
                  e.addEventListener("touchend", u, { passive: !0 }),
                  e.addEventListener("touchcancel", u, { passive: !0 }),
                  () => {
                    (e.removeEventListener("touchstart", o),
                      e.removeEventListener("touchmove", i),
                      e.removeEventListener("touchend", u),
                      e.removeEventListener("touchcancel", u));
                  }
                );
              }, [l, a, A, S]),
              {
                scrollRef: d,
                zoom: a ? c : 1,
                viewport: h,
                isPanning: p,
                zoomIn: x,
                zoomOut: M,
                reset: N,
                scrollTo: w,
                readViewport: C,
                signalPanActivity: S,
                wasDraggedRef: E
              }
            );
          })({
            contentWidth: L,
            contentHeight: k,
            enabled: !0,
            zoomEnabled: R,
            minZoom: I,
            maxZoom: 8,
            panHideDelayMs: 1200
          }),
          K = (0, u.useCallback)(
            (e) => {
              ((e, t) => {
                var n, l, a, r, o, i, u;
                let {
                    nodeRadius: s,
                    borderWidth: d,
                    borderColor: c,
                    focusedNodeId: m,
                    idleLinkOpacity: h = 0.3,
                    activeLinkOpacity: f = 0.75,
                    dimmedLinkOpacity: p = 0.1,
                    dimmedNodeOpacity: g = 0.25
                  } = t,
                  v = e.series.find(n3);
                if (!(null == v || null == (r = v.nodes) ? void 0 : r.length)) return;
                let F = Math.max(
                    1,
                    null != (n = null == (o = v.nodeColumns) ? void 0 : o.length) ? n : 1
                  ),
                  b = new Set();
                if (m)
                  for (let e of (b.add(m), null != (l = v.points) ? l : [])) {
                    if (e.isNode || !n5(e, m)) continue;
                    let t = n4(e.fromNode),
                      n = n4(e.toNode);
                    (t && b.add(t), n && b.add(n));
                  }
                for (let e of v.nodes) {
                  if (!e.isNode || !e.shapeArgs || "none" === e.shapeArgs.display) continue;
                  let { x: t, y: n, width: l, height: a } = e.shapeArgs,
                    r = null != (i = e.column) ? i : 0,
                    o = n4(e),
                    h = void 0 === m || (o && b.has(o)) ? 1 : g;
                  if (e.graphic) {
                    let i = n6({
                      x: t,
                      y: n,
                      width: l,
                      height: a,
                      radius: s,
                      cornerMode: n2({ column: r, columnCount: F })
                    });
                    e.graphic.attr({ d: i, stroke: c, "stroke-width": d, opacity: h });
                    let u = e.graphic.element;
                    u &&
                      (u.setAttribute("paint-order", "stroke fill"),
                      u.setAttribute("stroke-linejoin", "round"),
                      o &&
                        (u.setAttribute("data-sankey-node", ""),
                        u.setAttribute("data-node-id", o)));
                  }
                  null == (u = e.dataLabel) || u.attr({ opacity: h });
                }
                for (let e of null != (a = v.points) ? a : []) {
                  if (e.isNode || !e.graphic) continue;
                  let t = void 0 === m ? h : n5(e, m) ? f : p;
                  e.graphic.attr({ "fill-opacity": t, opacity: 1 });
                }
              })(e, {
                nodeRadius: 4,
                borderWidth: 4,
                borderColor: E,
                focusedNodeId: M,
                idleLinkOpacity: 0.2,
                activeLinkOpacity: 0.75,
                dimmedLinkOpacity: 0.1,
                dimmedNodeOpacity: 0.25
              });
            },
            [M, E]
          ),
          Y = (0, u.useCallback)(
            (e) => {
              if (!R) return;
              let t = ((e) => {
                var t, n, l, a, r, o, i, u, s;
                let d = e.series.find(n7);
                if (!(null == d || null == (u = d.nodes) ? void 0 : u.length)) return;
                let c = null != (t = e.plotLeft) ? t : 0,
                  m = null != (n = e.plotTop) ? n : 0,
                  h = null != (l = e.chartWidth) ? l : 0,
                  f = null != (a = e.chartHeight) ? a : 0;
                if (h <= 0 || f <= 0) return;
                let p = d.nodes.flatMap((e, t) => {
                    var n, l, a, r, o, i;
                    if (!e.isNode || !e.shapeArgs) return [];
                    let u = (null != (n = e.shapeArgs.x) ? n : 0) + c,
                      s = (null != (l = e.shapeArgs.y) ? l : 0) + m,
                      d = null != (a = e.shapeArgs.width) ? a : 0,
                      h = null != (r = e.shapeArgs.height) ? r : 0;
                    return [
                      {
                        id: null != (o = null != (i = e.id) ? i : e.name) ? o : "node-".concat(t),
                        x0: u,
                        y0: s,
                        x1: u + d,
                        y1: s + h,
                        color: n9(e.color)
                      }
                    ];
                  }),
                  g = null != (r = d.translationFactor) ? r : 1,
                  v = null != (o = null == (s = d.options) ? void 0 : s.minLinkWidth) ? o : 0;
                return {
                  width: h,
                  height: f,
                  nodes: p,
                  links: (null != (i = d.points) ? i : []).flatMap((e, t) => {
                    var n, l, a, r, o, i, u, s, d, h, f, p, F;
                    if (
                      e.isNode ||
                      !(null == (p = e.fromNode) ? void 0 : p.shapeArgs) ||
                      !(null == (F = e.toNode) ? void 0 : F.shapeArgs)
                    )
                      return [];
                    let b = e.fromNode.shapeArgs,
                      E = e.toNode.shapeArgs,
                      C = e.linkBase,
                      S = Math.max(
                        null != (n = C && C.length >= 4 ? Math.abs(C[1] - C[0]) : void 0)
                          ? n
                          : (null != (l = e.weight) ? l : 0) * g,
                        v
                      ),
                      y =
                        C && C.length >= 2
                          ? (C[0] + C[1]) / 2
                          : (null != (a = b.y) ? a : 0) + (null != (r = b.height) ? r : 0) / 2,
                      A =
                        C && C.length >= 4
                          ? (C[2] + C[3]) / 2
                          : (null != (o = E.y) ? o : 0) + (null != (i = E.height) ? i : 0) / 2;
                    return [
                      {
                        id: null != (u = e.id) ? u : "link-".concat(t),
                        x1: (null != (s = b.x) ? s : 0) + (null != (d = b.width) ? d : 0) + c,
                        y1: y + m,
                        x2: (null != (h = E.x) ? h : 0) + c,
                        y2: A + m,
                        width: Math.max(1, S),
                        color: n9(null != (f = e.color) ? f : e.fromNode.color)
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
            [R]
          ),
          q = (0, u.useMemo)(() => {
            let e = new Map();
            for (let t of g) e.set(t.id, t);
            return e;
          }, [g]),
          Z = (0, u.useCallback)(
            function () {
              var e;
              return ((e) => {
                let { nodeId: t, nodeName: n, nodesById: l, formatDataLabel: a } = e,
                  r = void 0 === t ? void 0 : l.get(t);
                return r ? (a ? a(r) : r.name) : n;
              })({
                nodeId: null != (e = this.id) ? e : this.name,
                nodeName: this.name,
                nodesById: q,
                formatDataLabel: l
              });
            },
            [l, q]
          ),
          J = (0, u.useCallback)((e) => {
            N((t) => (t === e ? void 0 : e));
          }, []),
          $ = (0, u.useCallback)(() => N(void 0), []),
          ee = (0, u.useMemo)(
            () =>
              0 === p.length || 0 === g.length
                ? []
                : [
                    {
                      type: tV.Sankey,
                      data: p,
                      nodes: ((e) => {
                        let { nodes: t, colors: n, theme: l } = e,
                          a = 0,
                          r = t.reduce(
                            (e, t) => (void 0 === t.column ? e : Math.max(e, t.column)),
                            0
                          );
                        return t.map((e) => {
                          var t;
                          let o = null != (t = n[a++ % n.length]) ? t : n[0],
                            i = e.color ? tD(e.color, l) : o ? tD(o, l) : void 0,
                            u = 0 === e.column,
                            s = void 0 !== e.column && e.column === r;
                          return {
                            id: e.id,
                            name: e.name,
                            column: e.column,
                            color: i,
                            dataLabels: u ? { align: "left" } : s ? { align: "right" } : {}
                          };
                        });
                      })({ nodes: g, colors: tM, theme: F }),
                      nodePadding: 16,
                      nodeWidth: 8,
                      linkOpacity: 0.2,
                      linkColorMode: "gradient",
                      minLinkWidth: 0,
                      borderWidth: 4,
                      borderColor: E,
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
                        color: b,
                        padding: 16,
                        style: { textOutline: "none", fontSize: "12px", fontWeight: "400" },
                        nodeFormatter: Z
                      }
                    }
                  ],
            [p, g, F, E, M, J, b, Z]
          ),
          et = ((e) => {
            let { chartStyleMode: t, onChartLoad: n, height: l } = e,
              a = (0, f.useTheme)(),
              r = (0, u.useMemo)(
                () => nc({ theme: a, chartType: tV.Sankey, chartStyleMode: t, onChartLoad: n }),
                [t, n, a]
              );
            return (0, u.useMemo)(
              () => ({
                ...r,
                ...nm,
                height: null != l ? l : r.height,
                zoomType: "none",
                style: { ...r.style, overflow: "hidden" }
              }),
              [r, l]
            );
          })({ chartStyleMode: a, height: k, onChartLoad: o }),
          en = (0, u.useMemo)(
            () => ({
              ...et,
              width: L,
              events: {
                ...et.events,
                load(e) {
                  var t, n;
                  ((S.current = this),
                    null == (n = et.events) || null == (t = n.load) || t.call(this, e),
                    K(this),
                    Y(this));
                },
                render(e) {
                  var t, n;
                  ((S.current = this),
                    null == (n = et.events) || null == (t = n.render) || t.call(this, e),
                    K(this),
                    Y(this));
                }
              }
            }),
            [K, Y, et, L]
          ),
          el =
            ((d = (0, f.useTheme)()),
            (0, u.useMemo)(
              () => ({ ...ny({ theme: d }), split: !1, formatter: m }),
              [
                d,
                (m = (0, u.useCallback)(
                  function () {
                    var e, t, l, a, r, o, i, u;
                    let s = n(
                      this.isNode
                        ? {
                            kind: "node",
                            name: tK(null != (e = this.name) ? e : ""),
                            value: null != (t = null != (l = this.sum) ? l : this.weight) ? t : 0
                          }
                        : {
                            kind: "link",
                            fromName: tK(
                              null != (a = null == (i = this.fromNode) ? void 0 : i.name) ? a : ""
                            ),
                            toName: tK(
                              null != (r = null == (u = this.toNode) ? void 0 : u.name) ? r : ""
                            ),
                            value: null != (o = this.weight) ? o : 0,
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
                  [n, (c = t3())]
                ))
              ]
            )),
          ea = (0, u.useMemo)(
            () => ({
              series: ee,
              chart: en,
              tooltip: el,
              title: { text: void 0 },
              credits: { enabled: !1 }
            }),
            [ee, en, el]
          );
        ((0, u.useLayoutEffect)(() => {
          let e = C.current;
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
          (0, u.useLayoutEffect)(() => {
            let e = S.current;
            e && K(e);
          }, [K]),
          (0, u.useLayoutEffect)(() => {
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
        let er = L * z,
          eo = k * z,
          ei = null != i ? i : Math.min(eo, 640),
          eu = eo + 1 < ei ? (ei - eo) / 2 : 0,
          es = er > (_.clientWidth || A) + 1 || eo > ei + 1,
          ed = R && es && void 0 !== w,
          ec = (0, u.useCallback)(() => {
            (y.current && (clearTimeout(y.current), (y.current = null)), O(!0));
          }, []),
          em = (0, u.useCallback)(() => {
            (y.current && clearTimeout(y.current),
              (y.current = setTimeout(() => {
                (O(!1), (y.current = null));
              }, 1200)));
          }, []);
        return (
          (0, u.useLayoutEffect)(
            () => () => {
              y.current && clearTimeout(y.current);
            },
            []
          ),
          u.default.createElement(
            "div",
            {
              ref: C,
              className: "relative width-full [overflow:hidden] [min-width:0]",
              onMouseEnter: ed ? ec : void 0,
              onMouseLeave: ed ? em : void 0
            },
            u.default.createElement(
              "div",
              {
                ref: P,
                "data-testid": "sankey-viewport",
                className: R ? "".concat(n8, " [touch-action:none]") : n8,
                style: { height: ei, maxHeight: void 0 !== i ? void 0 : 640 }
              },
              u.default.createElement(
                "div",
                {
                  className: "[box-sizing:content-box]",
                  style: { width: er, height: eo, paddingTop: eu, paddingBottom: eu }
                },
                u.default.createElement(
                  "div",
                  { className: "[overflow:hidden]", style: { width: er, height: eo } },
                  u.default.createElement(
                    "div",
                    {
                      className: "[overflow:hidden] [transform-origin:0_0]",
                      style: { width: L, height: k, transform: "scale(".concat(z, ")") }
                    },
                    v
                      ? u.default.createElement(ni, {
                          key: T,
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
              ? u.default.createElement(
                  "div",
                  {
                    className: "absolute flex flex-col gap-xsmall top-[8px] right-[8px] [z-index:2]"
                  },
                  u.default.createElement(Q, {
                    icon: "icon-filled-magnifying-glass-plus",
                    ariaLabel: s("zoomIn"),
                    onClick: j,
                    variant: "OverMedia",
                    size: "Small"
                  }),
                  u.default.createElement(Q, {
                    icon: "icon-filled-magnifying-glass-minus",
                    ariaLabel: s("zoomOut"),
                    onClick: H,
                    variant: "OverMedia",
                    size: "Small"
                  }),
                  u.default.createElement(Q, {
                    icon: "icon-filled-arrow-spin-counter-clockwise",
                    ariaLabel: s("resetView"),
                    onClick: V,
                    variant: "OverMedia",
                    size: "Small"
                  })
                )
              : null,
            ed
              ? u.default.createElement(
                  "div",
                  {
                    className:
                      "absolute transition-opacity ease-standard-out bottom-[8px] left-[8px] [z-index:2] ".concat(
                        ed && (W || B)
                          ? "pointer-events-auto [opacity:1]"
                          : "pointer-events-none [opacity:0]"
                      )
                  },
                  u.default.createElement(nZ, {
                    model: w,
                    viewport: _,
                    zoom: z,
                    maxWidth: 176,
                    maxHeight: 120,
                    onNavigate: X,
                    onPanActivity: G
                  })
                )
              : null
          )
        );
      };
    le.displayName = "SankeyChart";
    var lt = u.default.memo(le),
      ln = u.default.memo((e) => {
        let { height: t = 360 } = e,
          n = (0, f.useTheme)(),
          l = (0, u.useMemo)(() => tB(n), [n]),
          a = (0, u.useMemo)(
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
        return u.default.createElement(ni, { options: a });
      });
    function ll(e, t, n) {
      var l;
      let a,
        r = null != (l = n.initialDeps) ? l : [],
        o = !0;
      function i() {
        let l = e();
        return l.length !== r.length || l.some((e, t) => r[t] !== e)
          ? ((r = l),
            (a = t(...l)),
            (null == n ? void 0 : n.onChange) && !(o && n.skipInitialOnChange) && n.onChange(a),
            (o = !1),
            a)
          : a;
      }
      return (
        (i.updateDeps = (e) => {
          r = e;
        }),
        i
      );
    }
    function la(e, t) {
      if (void 0 !== e) return e;
      throw Error("Unexpected undefined");
    }
    let lr = () => {
        if (void 0 !== l) return l;
        if ("u" < typeof navigator) return (l = !1);
        if (/iP(hone|od|ad)/.test(navigator.userAgent)) return (l = !0);
        let e = navigator.maxTouchPoints;
        return (l = "MacIntel" === navigator.platform && void 0 !== e && e > 0);
      },
      lo = (e) => {
        let { offsetWidth: t, offsetHeight: n } = e;
        return { width: t, height: n };
      },
      li = (e) => e,
      lu = (e) => {
        let t = Math.max(e.startIndex - e.overscan, 0),
          n = Math.min(e.endIndex + e.overscan, e.count - 1) - t + 1,
          l = Array(n);
        for (let e = 0; e < n; e++) l[e] = t + e;
        return l;
      },
      ls = (e, t) => {
        let n = e.scrollElement;
        if (!n) return;
        let l = e.targetWindow;
        if (!l) return;
        let a = (e) => {
          let { width: n, height: l } = e;
          t({ width: Math.round(n), height: Math.round(l) });
        };
        if ((a(lo(n)), !l.ResizeObserver)) return () => {};
        let r = new l.ResizeObserver((t) => {
          let l = () => {
            let e = t[0];
            if (null == e ? void 0 : e.borderBoxSize) {
              let t = e.borderBoxSize[0];
              if (t) return void a({ width: t.inlineSize, height: t.blockSize });
            }
            a(lo(n));
          };
          e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
        });
        return (
          r.observe(n, { box: "border-box" }),
          () => {
            r.unobserve(n);
          }
        );
      },
      ld = { passive: !0 },
      lc = "onscrollend" in window,
      lm = (e, t) =>
        ((e, t, n) => {
          var l, a;
          let r,
            o = e.scrollElement;
          if (!o) return;
          let i = e.targetWindow;
          if (!i) return;
          let u = e.options.useScrollendEvent && lc,
            s = 0,
            d = u
              ? null
              : ((l = () => t(s, !1)),
                (a = e.options.isScrollingResetDelay),
                Object.assign(
                  function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                      t[n] = arguments[n];
                    (i.clearTimeout(r), (r = i.setTimeout(() => l.apply(this, t), a)));
                  },
                  {
                    cancel: () => {
                      i.clearTimeout(r);
                    }
                  }
                )),
            c = (e) => () => {
              ((s = n(o)), null == d || d(), t(s, e));
            },
            m = c(!0),
            h = c(!1);
          return (
            o.addEventListener("scroll", m, ld),
            u && o.addEventListener("scrollend", h, ld),
            () => {
              (o.removeEventListener("scroll", m),
                u && o.removeEventListener("scrollend", h),
                null == d || d.cancel());
            }
          );
        })(e, t, (t) => {
          let { horizontal: n, isRtl: l } = e.options;
          return n ? t.scrollLeft * ((l && -1) || 1) : t.scrollTop;
        }),
      lh = (e, t, n) => {
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
      lf = (e, t, n) => {
        var l, a;
        let { adjustments: r = 0, behavior: o } = t;
        null == (a = null == (l = n.scrollElement) ? void 0 : l.scrollTo) ||
          a.call(l, { [n.options.horizontal ? "left" : "top"]: e + r, behavior: o });
      };
    class lp {
      applyScrollAdjustment(e, t) {
        return (
          0 !== e &&
          (lr() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)
            ? ((this._iosDeferredAdjustment += e), !1)
            : (this._scrollToOffset(this.getScrollOffset(), {
                adjustments: (this.scrollAdjustments += e),
                behavior: t
              }),
              null !== this.scrollOffset &&
                ((this.scrollOffset += this.scrollAdjustments),
                this.scrollOffset < 0 && (this.scrollOffset = 0),
                (this.scrollAdjustments = 0)),
              !0))
        );
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
                        this.isIndexInRange(n) &&
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
            var t, n, l, a, r;
            let o = {
              debug: !1,
              initialOffset: 0,
              overscan: 1,
              paddingStart: 0,
              paddingEnd: 0,
              scrollPaddingStart: 0,
              scrollPaddingEnd: 0,
              horizontal: !1,
              getItemKey: li,
              rangeExtractor: lu,
              onChange: () => {},
              measureElement: lh,
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
              void 0 !== n && (o[t] = n);
            }
            let i = this.options,
              u = null,
              s = null,
              d = !1;
            if (
              void 0 !== i &&
              i.enabled &&
              o.enabled &&
              "end" === o.anchorTo &&
              null !== this.scrollElement
            ) {
              let e = i.count,
                c = o.count,
                m = this.getMeasurements(),
                h =
                  e > 0
                    ? null != (l = null == (t = m[0]) ? void 0 : t.key)
                      ? l
                      : i.getItemKey(0)
                    : null,
                f =
                  e > 0
                    ? null != (a = null == (n = m[e - 1]) ? void 0 : n.key)
                      ? a
                      : i.getItemKey(e - 1)
                    : null;
              if (
                c !== e ||
                (e > 0 && c > 0 && (o.getItemKey(0) !== h || o.getItemKey(c - 1) !== f))
              ) {
                d = !0;
                let t =
                  e > 0
                    ? null != (r = this.getVirtualItemForOffset(this.getScrollOffset()))
                      ? r
                      : m[0]
                    : null;
                t && (u = [t.key, this.getScrollOffset() - t.start]);
                let n = !0 === o.followOnAppend ? "auto" : o.followOnAppend || null;
                n &&
                  c > e &&
                  this.isAtEnd(i.scrollEndThreshold) &&
                  (0 === e || o.getItemKey(c - 1) !== f) &&
                  (s = n);
              }
            }
            ((this.options = o), d && ((this.pendingMin = 0), this.itemSizeCacheVersion++));
            let c = !1,
              m = 0;
            if (u && null !== this.scrollOffset) {
              let [e, t] = u,
                n = this.getMeasurements(),
                { count: l, getItemKey: a } = this.options,
                r = 0;
              for (; r < l && a(r) !== e;) r++;
              if (r < l) {
                let e = n[r];
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
          (this.maybeNotify = ll(
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
              (this.isScrolling = !1),
              (this.scrollDirection = null),
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
                      lr() &&
                        null != this.targetWindow &&
                        ((this._iosJustTouchEnded = !0),
                        (this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
                          ((this._iosJustTouchEnded = !1),
                            (this._iosTouchEndTimerId = null),
                            this._flushIosDeferredIfReady());
                        }, 150))));
                  };
                (e.addEventListener("touchstart", t, ld),
                  e.addEventListener("touchend", n, ld),
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
                (lr() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)
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
          (this.getMeasurementOptions = ll(
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
            (e, t, n, l, a, r, o, i) => (
              void 0 !== this.prevLanes && this.prevLanes !== r && (this.lanesChangedFlag = !0),
              (this.prevLanes = r),
              (this.pendingMin = null),
              {
                count: e,
                paddingStart: t,
                scrollMargin: n,
                getItemKey: l,
                enabled: a,
                lanes: r,
                laneAssignmentMode: o,
                gap: i
              }
            ),
            { key: !1 }
          )),
          (this.isIndexInRange = (e) => e >= 0 && e < this.options.count),
          (this.getMeasurements = ll(
            () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
            (e, t) => {
              var n, l;
              let {
                  count: a,
                  paddingStart: r,
                  scrollMargin: o,
                  getItemKey: i,
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
              let h = this.lanesSettling ? 0 : null != (n = this.pendingMin) ? n : 0;
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
                  (n && h > 0 && e.set(n.subarray(0, 2 * h)),
                    (n = e),
                    (this._flatMeasurements = n));
                }
                if (0 === h) e = r + o;
                else {
                  let t = h - 1;
                  e = n[2 * t] + n[2 * t + 1] + c;
                }
                for (let t = h; t < a; t++) {
                  let l = i(t),
                    a = m.get(l),
                    r = "number" == typeof a ? a : this.options.estimateSize(t);
                  ((n[2 * t] = e), (n[2 * t + 1] = r), (e += r + c));
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
                                key: i(n),
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
              let f = this.measurementsCache.slice(0, h),
                p = Array(s).fill(void 0),
                g = new Float64Array(s),
                v = 0;
              for (let e = 0; e < h; e++) {
                let t = f[e];
                t && (void 0 === p[t.lane] && v++, (p[t.lane] = e), (g[t.lane] = t.end));
              }
              for (let e = h; e < a; e++) {
                let t,
                  n,
                  l = i(e),
                  a = this.laneAssignments.get(e),
                  u = "estimate" === d || m.has(l);
                if (void 0 !== a && this.options.lanes > 1) {
                  let e = p[(t = a)],
                    l = void 0 !== e ? f[e] : void 0;
                  n = l ? l.end + c : r + o;
                } else if (v === s) {
                  let l = 0,
                    a = g[0],
                    r = p[0];
                  for (let e = 1; e < s; e++) {
                    let t = g[e];
                    (t < a || (t === a && p[e] < r)) && ((l = e), (a = t), (r = p[e]));
                  }
                  ((t = l), (n = a + c), u && this.laneAssignments.set(e, t));
                } else
                  ((t = e % this.options.lanes), (n = r + o), u && this.laneAssignments.set(e, t));
                let h = m.get(l),
                  F = "number" == typeof h ? h : this.options.estimateSize(e),
                  b = n + F;
                ((f[e] = { index: e, start: n, size: F, end: b, key: l, lane: t }),
                  void 0 === p[t] && v++,
                  (p[t] = e),
                  (g[t] = b));
              }
              return ((this.measurementsCache = f), f);
            },
            { key: !1, debug: () => this.options.debug }
          )),
          (this.calculateRange = ll(
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
                    let r = e.length - 1;
                    if (e.length <= l) return { startIndex: 0, endIndex: r };
                    if (1 === l && null !== a) {
                      let e = (function (e, t, n) {
                          let l = 0;
                          for (; l <= t;) {
                            let a = ((l + t) / 2) | 0,
                              r = e[2 * a];
                            if (r < n) l = a + 1;
                            else {
                              if (!(r > n)) return a;
                              t = a - 1;
                            }
                          }
                          return l > 0 ? l - 1 : 0;
                        })(a, r, n),
                        l = e,
                        o = n + t;
                      for (; l < r && a[2 * l] + a[2 * l + 1] < o;) l++;
                      return { startIndex: e, endIndex: l };
                    }
                    let o = lg(0, r, (t) => e[t].start, n),
                      i = o;
                    if (1 === l) for (; i < r && e[i].end < n + t;) i++;
                    else if (l > 1) {
                      let a = Array(l).fill(0);
                      for (; i < r && a.some((e) => e < n + t);) {
                        let t = e[i];
                        ((a[t.lane] = t.end), i++);
                      }
                      let u = Array(l).fill(n + t);
                      for (; o >= 0 && u.some((e) => e >= n);) {
                        let t = e[o];
                        ((u[t.lane] = t.start), o--);
                      }
                      ((o = Math.max(0, o - (o % l))), (i = Math.min(r, i + (l - 1 - (i % l)))));
                    }
                    return { startIndex: o, endIndex: i };
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
          (this.getVirtualIndexes = ll(
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
            let t = this.indexFromElement(e);
            if (!this.isIndexInRange(t)) return;
            let n = this.options.getItemKey(t),
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
            var n, l, a, r;
            let o, i, u;
            if (!this.isIndexInRange(e)) return;
            let s = this._flatMeasurements;
            if (1 === this.options.lanes && null !== s)
              ((u = this.options.getItemKey(e)), (i = s[2 * e]), (o = s[2 * e + 1]));
            else {
              let t = this.measurementsCache[e];
              if (!t) return;
              ((u = t.key), (i = t.start), (o = t.size));
            }
            let d = null != (n = this.itemSizeCache.get(u)) ? n : o,
              c = t - d;
            if (0 !== c) {
              let n =
                  "end" === this.options.anchorTo &&
                  (null == (l = this.scrollState) ? void 0 : l.behavior) !== "smooth" &&
                  this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold,
                s = n ? this.getTotalSize() : 0,
                m = this.getScrollOffset() + this.scrollAdjustments,
                h = this.itemSizeCache.has(u)
                  ? i + d <= m && "backward" !== this.scrollDirection
                  : i < m,
                f =
                  (null == (a = this.scrollState) ? void 0 : a.behavior) !== "smooth" &&
                  (void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                    ? this.shouldAdjustScrollPositionOnItemSizeChange(
                        null != (r = this.measurementsCache[e])
                          ? r
                          : { index: e, key: u, start: i, size: o, end: i + o, lane: 0 },
                        c,
                        this
                      )
                    : h);
              ((null === this.pendingMin || e < this.pendingMin) && (this.pendingMin = e),
                this.itemSizeCache.set(u, t),
                this.itemSizeCacheVersion++);
              let p = !1;
              (n
                ? (p = this.applyScrollAdjustment(this.getTotalSize() - s))
                : f && (p = this.applyScrollAdjustment(c)),
                this.notify(p));
            }
          }),
          (this.getVirtualItems = ll(
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
              a = lg(0, t.length - 1, l ? (e) => n[2 * e] : (e) => la(t[e]).start, e);
            return la(t[a]);
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
              r = l.getScrollOffset();
            return (
              "auto" === t && (t = e >= r + a ? "end" : "start"),
              "center" === t ? (e += (n - a) / 2) : "end" === t && (e -= a),
              Math.max(Math.min(l.getMaxScrollOffset(), e), 0)
            );
          }),
          (this.getOffsetForIndex = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "auto";
            e = Math.max(0, Math.min(e, l.options.count - 1));
            let n = l.getSize(),
              a = l.getScrollOffset(),
              r = l.measurementsCache[e];
            if (!r) return;
            if ("auto" === t)
              if (r.end >= a + n - l.options.scrollPaddingEnd) t = "end";
              else {
                if (!(r.start <= a + l.options.scrollPaddingStart)) return [a, t];
                t = "start";
              }
            if ("end" === t && e === l.options.count - 1) return [l.getMaxScrollOffset(), t];
            let o =
              "end" === t
                ? r.end + l.options.scrollPaddingEnd
                : r.start - l.options.scrollPaddingStart;
            return [l.getOffsetForAlignment(o, t, r.size), t];
          }),
          (this.scrollToOffset = function (e) {
            let { align: t = "start", behavior: n = "auto" } =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            l._iosDeferredAdjustment = 0;
            let a = l.getOffsetForAlignment(e, t),
              r = l.now();
            ((l.scrollState = {
              index: null,
              align: t,
              behavior: n,
              startedAt: r,
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
            let [r, o] = a,
              i = l.now();
            ((l.scrollState = {
              index: e,
              align: o,
              behavior: n,
              startedAt: i,
              lastTargetOffset: r,
              stableFrames: 0
            }),
              l._scrollToOffset(r, { adjustments: void 0, behavior: n }),
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
                r = this._flatMeasurements;
              n =
                null != r
                  ? r[2 * a] + r[2 * a + 1]
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
    let lg = (e, t, n, l) => {
        for (; e <= t;) {
          let a = ((e + t) / 2) | 0,
            r = n(a);
          if (r < l) e = a + 1;
          else {
            if (!(r > l)) return a;
            t = a - 1;
          }
        }
        return e > 0 ? e - 1 : 0;
      },
      lv = "u" > typeof document ? u.useLayoutEffect : u.useEffect,
      lF = [
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
      lb = [
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
      lE = /[ \t\n\r\f]+/g,
      lC = /[\t\n\r\f]| {2,}|^ | $/,
      lS = null,
      ly = RegExp(
        "[\\u0600-\\u0604\\u0606-\\u060B\\u060D-\\u061A\\u061C-\\u061E\\u0620-\\u063F\\u0641-\\u064A\\u0656-\\u066F\\u0671-\\u06DC\\u06DE-\\u06FF\\u0750-\\u077F\\u0870-\\u0891\\u0897-\\u08E1\\u08E3-\\u08FF\\uFB50-\\uFD3D\\uFD40-\\uFDCF\\uFDF0-\\uFDFF\\uFE70-\\uFE74\\uFE76-\\uFEFC\\u{10E60}-\\u{10E7E}\\u{10EC2}-\\u{10EC7}\\u{10ED0}-\\u{10ED8}\\u{10EFA}-\\u{10EFF}\\u{1EE00}-\\u{1EE03}\\u{1EE05}-\\u{1EE1F}\\u{1EE21}-\\u{1EE22}\\u{1EE24}\\u{1EE27}\\u{1EE29}-\\u{1EE32}\\u{1EE34}-\\u{1EE37}\\u{1EE39}\\u{1EE3B}\\u{1EE42}\\u{1EE47}\\u{1EE49}\\u{1EE4B}\\u{1EE4D}-\\u{1EE4F}\\u{1EE51}-\\u{1EE52}\\u{1EE54}\\u{1EE57}\\u{1EE59}\\u{1EE5B}\\u{1EE5D}\\u{1EE5F}\\u{1EE61}-\\u{1EE62}\\u{1EE64}\\u{1EE67}-\\u{1EE6A}\\u{1EE6C}-\\u{1EE72}\\u{1EE74}-\\u{1EE77}\\u{1EE79}-\\u{1EE7C}\\u{1EE7E}\\u{1EE80}-\\u{1EE89}\\u{1EE8B}-\\u{1EE9B}\\u{1EEA1}-\\u{1EEA3}\\u{1EEA5}-\\u{1EEA9}\\u{1EEAB}-\\u{1EEBB}\\u{1EEF0}-\\u{1EEF1}]",
        "u"
      ),
      lA = RegExp(
        "[\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1-\\u05C2\\u05C4-\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7-\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u07FD\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u0897-\\u089F\\u08CA-\\u08E1\\u08E3-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962-\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7-\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2-\\u09E3\\u09FE\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47-\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70-\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2-\\u0AE3\\u0AFA-\\u0AFF\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47-\\u0B48\\u0B4B-\\u0B4D\\u0B55-\\u0B57\\u0B62-\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C00-\\u0C04\\u0C3C\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55-\\u0C56\\u0C62-\\u0C63\\u0C81-\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5-\\u0CD6\\u0CE2-\\u0CE3\\u0CF3\\u0D00-\\u0D03\\u0D3B-\\u0D3C\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62-\\u0D63\\u0D81-\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2-\\u0DF3\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECE\\u0F18-\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F3F\\u0F71-\\u0F84\\u0F86-\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102B-\\u103E\\u1056-\\u1059\\u105E-\\u1060\\u1062-\\u1064\\u1067-\\u106D\\u1071-\\u1074\\u1082-\\u108D\\u108F\\u109A-\\u109D\\u135D-\\u135F\\u1712-\\u1715\\u1732-\\u1734\\u1752-\\u1753\\u1772-\\u1773\\u17B4-\\u17D3\\u17DD\\u180B-\\u180D\\u180F\\u1885-\\u1886\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A55-\\u1A5E\\u1A60-\\u1A7C\\u1A7F\\u1AB0-\\u1ADD\\u1AE0-\\u1AEB\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF4\\u1CF7-\\u1CF9\\u1DC0-\\u1DFF\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099-\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69E-\\uA69F\\uA6F0-\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA82C\\uA880-\\uA881\\uA8B4-\\uA8C5\\uA8E0-\\uA8F1\\uA8FF\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uA9E5\\uAA29-\\uAA36\\uAA43\\uAA4C-\\uAA4D\\uAA7B-\\uAA7D\\uAAB0\\uAAB2-\\uAAB4\\uAAB7-\\uAAB8\\uAABE-\\uAABF\\uAAC1\\uAAEB-\\uAAEF\\uAAF5-\\uAAF6\\uABE3-\\uABEA\\uABEC-\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\u{101FD}\\u{102E0}\\u{10376}-\\u{1037A}\\u{10A01}-\\u{10A03}\\u{10A05}-\\u{10A06}\\u{10A0C}-\\u{10A0F}\\u{10A38}-\\u{10A3A}\\u{10A3F}\\u{10AE5}-\\u{10AE6}\\u{10D24}-\\u{10D27}\\u{10D69}-\\u{10D6D}\\u{10EAB}-\\u{10EAC}\\u{10EFA}-\\u{10EFF}\\u{10F46}-\\u{10F50}\\u{10F82}-\\u{10F85}\\u{11000}-\\u{11002}\\u{11038}-\\u{11046}\\u{11070}\\u{11073}-\\u{11074}\\u{1107F}-\\u{11082}\\u{110B0}-\\u{110BA}\\u{110C2}\\u{11100}-\\u{11102}\\u{11127}-\\u{11134}\\u{11145}-\\u{11146}\\u{11173}\\u{11180}-\\u{11182}\\u{111B3}-\\u{111C0}\\u{111C9}-\\u{111CC}\\u{111CE}-\\u{111CF}\\u{1122C}-\\u{11237}\\u{1123E}\\u{11241}\\u{112DF}-\\u{112EA}\\u{11300}-\\u{11303}\\u{1133B}-\\u{1133C}\\u{1133E}-\\u{11344}\\u{11347}-\\u{11348}\\u{1134B}-\\u{1134D}\\u{11357}\\u{11362}-\\u{11363}\\u{11366}-\\u{1136C}\\u{11370}-\\u{11374}\\u{113B8}-\\u{113C0}\\u{113C2}\\u{113C5}\\u{113C7}-\\u{113CA}\\u{113CC}-\\u{113D0}\\u{113D2}\\u{113E1}-\\u{113E2}\\u{11435}-\\u{11446}\\u{1145E}\\u{114B0}-\\u{114C3}\\u{115AF}-\\u{115B5}\\u{115B8}-\\u{115C0}\\u{115DC}-\\u{115DD}\\u{11630}-\\u{11640}\\u{116AB}-\\u{116B7}\\u{1171D}-\\u{1172B}\\u{1182C}-\\u{1183A}\\u{11930}-\\u{11935}\\u{11937}-\\u{11938}\\u{1193B}-\\u{1193E}\\u{11940}\\u{11942}-\\u{11943}\\u{119D1}-\\u{119D7}\\u{119DA}-\\u{119E0}\\u{119E4}\\u{11A01}-\\u{11A0A}\\u{11A33}-\\u{11A39}\\u{11A3B}-\\u{11A3E}\\u{11A47}\\u{11A51}-\\u{11A5B}\\u{11A8A}-\\u{11A99}\\u{11B60}-\\u{11B67}\\u{11C2F}-\\u{11C36}\\u{11C38}-\\u{11C3F}\\u{11C92}-\\u{11CA7}\\u{11CA9}-\\u{11CB6}\\u{11D31}-\\u{11D36}\\u{11D3A}\\u{11D3C}-\\u{11D3D}\\u{11D3F}-\\u{11D45}\\u{11D47}\\u{11D8A}-\\u{11D8E}\\u{11D90}-\\u{11D91}\\u{11D93}-\\u{11D97}\\u{11EF3}-\\u{11EF6}\\u{11F00}-\\u{11F01}\\u{11F03}\\u{11F34}-\\u{11F3A}\\u{11F3E}-\\u{11F42}\\u{11F5A}\\u{13440}\\u{13447}-\\u{13455}\\u{1611E}-\\u{1612F}\\u{16AF0}-\\u{16AF4}\\u{16B30}-\\u{16B36}\\u{16F4F}\\u{16F51}-\\u{16F87}\\u{16F8F}-\\u{16F92}\\u{16FE4}\\u{16FF0}-\\u{16FF1}\\u{1BC9D}-\\u{1BC9E}\\u{1CF00}-\\u{1CF2D}\\u{1CF30}-\\u{1CF46}\\u{1D165}-\\u{1D169}\\u{1D16D}-\\u{1D172}\\u{1D17B}-\\u{1D182}\\u{1D185}-\\u{1D18B}\\u{1D1AA}-\\u{1D1AD}\\u{1D242}-\\u{1D244}\\u{1DA00}-\\u{1DA36}\\u{1DA3B}-\\u{1DA6C}\\u{1DA75}\\u{1DA84}\\u{1DA9B}-\\u{1DA9F}\\u{1DAA1}-\\u{1DAAF}\\u{1E000}-\\u{1E006}\\u{1E008}-\\u{1E018}\\u{1E01B}-\\u{1E021}\\u{1E023}-\\u{1E024}\\u{1E026}-\\u{1E02A}\\u{1E08F}\\u{1E130}-\\u{1E136}\\u{1E2AE}\\u{1E2EC}-\\u{1E2EF}\\u{1E4EC}-\\u{1E4EF}\\u{1E5EE}-\\u{1E5EF}\\u{1E6E3}\\u{1E6E6}\\u{1E6EE}-\\u{1E6EF}\\u{1E6F5}\\u{1E8D0}-\\u{1E8D6}\\u{1E944}-\\u{1E94A}\\u{E0100}-\\u{E01EF}]",
        "u"
      ),
      lx = RegExp(
        "[\\u0030-\\u0039\\u0660-\\u0669\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19D9\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19\\u{104A0}-\\u{104A9}\\u{10D30}-\\u{10D39}\\u{10D40}-\\u{10D49}\\u{11066}-\\u{1106F}\\u{110F0}-\\u{110F9}\\u{11136}-\\u{1113F}\\u{111D0}-\\u{111D9}\\u{112F0}-\\u{112F9}\\u{11450}-\\u{11459}\\u{114D0}-\\u{114D9}\\u{11650}-\\u{11659}\\u{116C0}-\\u{116C9}\\u{116D0}-\\u{116E3}\\u{11730}-\\u{11739}\\u{118E0}-\\u{118E9}\\u{11950}-\\u{11959}\\u{11BF0}-\\u{11BF9}\\u{11C50}-\\u{11C59}\\u{11D50}-\\u{11D59}\\u{11DA0}-\\u{11DA9}\\u{11DE0}-\\u{11DE9}\\u{11F50}-\\u{11F59}\\u{16130}-\\u{16139}\\u{16A60}-\\u{16A69}\\u{16AC0}-\\u{16AC9}\\u{16B50}-\\u{16B59}\\u{16D70}-\\u{16D79}\\u{1CCF0}-\\u{1CCF9}\\u{1D7CE}-\\u{1D7FF}\\u{1E140}-\\u{1E149}\\u{1E2F0}-\\u{1E2F9}\\u{1E4F0}-\\u{1E4F9}\\u{1E5F1}-\\u{1E5FA}\\u{1E950}-\\u{1E959}\\u{1FBF0}-\\u{1FBF9}]",
        "u"
      );
    function lM(e) {
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
    function lN(e) {
      for (let t = 0; t < e.length; t++) {
        let n = e.charCodeAt(t);
        if (!(n < 12288)) {
          if (n >= 55296 && n <= 56319 && t + 1 < e.length) {
            let l = e.charCodeAt(t + 1);
            if (l >= 56320 && l <= 57343) {
              if (lM(((n - 55296) << 10) + (l - 56320) + 65536)) return !0;
              t++;
              continue;
            }
          }
          if (lM(n)) return !0;
        }
      }
      return !1;
    }
    let lw = new Set([" ", " ", "⁠", "\uFEFF"]),
      lD = new Set(["-", "‐", "–", "—"]);
    function lB(e, t) {
      let n, l, a;
      return (
        !(null !== (n = lW(e)) && lw.has(n)) &&
        (!t ||
          (!(null !== (l = lW(e)) && (lO.has(l) || lT.has(l))) &&
            !(null !== (a = lW(e)) && lD.has(a))))
      );
    }
    let lO = new Set([
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
      lL = new Set([
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
      lk = new Set(["'", "’"]),
      lT = new Set([
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
      lR = new Set([":", ".", "،", "؛"]),
      lI = new Set(["၏"]),
      lP = new Set(["”", "’", "»", "›", "」", "』", "】", "》", "〉", "〕", "）"]);
    function lz(e) {
      let t = !1;
      for (let n of e)
        if (!("\\" === n || lA.test(n))) {
          if (lL.has(n) || lT.has(n) || lk.has(n)) {
            t = !0;
            continue;
          }
          return !1;
        }
      return t;
    }
    function l_(e, t) {
      let n = t - 1;
      if (n <= 0) return Math.max(n, 0);
      let l = e.charCodeAt(n);
      if (l < 56320 || l > 57343) return n;
      let a = n - 1;
      if (a < 0) return n;
      let r = e.charCodeAt(a);
      return r >= 55296 && r <= 56319 ? a : n;
    }
    function lW(e) {
      if (0 === e.length) return null;
      let t = l_(e, e.length);
      return e.slice(t);
    }
    let lj = [
      36, 37, 43, 43, 92, 92, 162, 165, 176, 177, 1423, 1423, 1545, 1547, 1642, 1642, 2046, 2047,
      2546, 2547, 2553, 2555, 2801, 2801, 3065, 3065, 3449, 3449, 3647, 3647, 6107, 6107, 8240,
      8247, 8279, 8279, 8352, 8399, 8451, 8451, 8457, 8457, 8470, 8470, 8722, 8723, 43064, 43064,
      65020, 65020, 65129, 65130, 65284, 65285, 65504, 65505, 65509, 65510, 73693, 73696, 123647,
      123647, 126124, 126124, 126128, 126128
    ];
    function lH(e) {
      let t = e.codePointAt(0);
      return (
        void 0 !== t &&
        (function (e, t) {
          for (let n = 0; n < t.length; n += 2) if (e >= t[n] && e <= t[n + 1]) return !0;
          return !1;
        })(t, lj)
      );
    }
    function lV(e, t, n, l) {
      let a = t[l],
        r = e[l];
      if (null == a) return r;
      let o = n[l];
      if (r.length === o) return r;
      let i = a.repeat(o);
      return ((e[l] = i), i);
    }
    function lX(e, t) {
      return e && null !== t && lR.has(t);
    }
    function lG(e) {
      let t = e.length;
      for (; t > 0;) {
        let n = l_(e, t),
          l = e.slice(n, t);
        if (lP.has(l)) return !0;
        if (!lT.has(l)) break;
        t = n;
      }
      return !1;
    }
    let lU = /[\x20\t\n\xA0\xAD\u200B\u202F\u2060\uFEFF]/;
    function lK(e) {
      return 1 === e.length ? e[0] : e.join("");
    }
    function lY(e) {
      return (
        "space" === e || "preserved-space" === e || "zero-width-break" === e || "hard-break" === e
      );
    }
    let lq = /^[A-Za-z][A-Za-z0-9+.-]*:$/,
      lQ = new Set([":", "-", "/", "×", ",", ".", "+", "–", "—"]),
      lZ = RegExp(
        "[\\u0021-\\u0023\\u0025-\\u002A\\u002C-\\u002F\\u003A-\\u003B\\u003F-\\u0040\\u005B-\\u005D\\u005F\\u007B\\u007D\\u00A1\\u00A7\\u00AB\\u00B6-\\u00B7\\u00BB\\u00BF\\u037E\\u0387\\u055A-\\u055F\\u0589-\\u058A\\u05BE\\u05C0\\u05C3\\u05C6\\u05F3-\\u05F4\\u0609-\\u060A\\u060C-\\u060D\\u061B\\u061D-\\u061F\\u066A-\\u066D\\u06D4\\u0700-\\u070D\\u07F7-\\u07F9\\u0830-\\u083E\\u085E\\u0964-\\u0965\\u0970\\u09FD\\u0A76\\u0AF0\\u0C77\\u0C84\\u0DF4\\u0E4F\\u0E5A-\\u0E5B\\u0F04-\\u0F12\\u0F14\\u0F3A-\\u0F3D\\u0F85\\u0FD0-\\u0FD4\\u0FD9-\\u0FDA\\u104A-\\u104F\\u10FB\\u1360-\\u1368\\u1400\\u166E\\u169B-\\u169C\\u16EB-\\u16ED\\u1735-\\u1736\\u17D4-\\u17D6\\u17D8-\\u17DA\\u1800-\\u180A\\u1944-\\u1945\\u1A1E-\\u1A1F\\u1AA0-\\u1AA6\\u1AA8-\\u1AAD\\u1B4E-\\u1B4F\\u1B5A-\\u1B60\\u1B7D-\\u1B7F\\u1BFC-\\u1BFF\\u1C3B-\\u1C3F\\u1C7E-\\u1C7F\\u1CC0-\\u1CC7\\u1CD3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205E\\u207D-\\u207E\\u208D-\\u208E\\u2308-\\u230B\\u2329-\\u232A\\u2768-\\u2775\\u27C5-\\u27C6\\u27E6-\\u27EF\\u2983-\\u2998\\u29D8-\\u29DB\\u29FC-\\u29FD\\u2CF9-\\u2CFC\\u2CFE-\\u2CFF\\u2D70\\u2E00-\\u2E2E\\u2E30-\\u2E4F\\u2E52-\\u2E5D\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301F\\u3030\\u303D\\u30A0\\u30FB\\uA4FE-\\uA4FF\\uA60D-\\uA60F\\uA673\\uA67E\\uA6F2-\\uA6F7\\uA874-\\uA877\\uA8CE-\\uA8CF\\uA8F8-\\uA8FA\\uA8FC\\uA92E-\\uA92F\\uA95F\\uA9C1-\\uA9CD\\uA9DE-\\uA9DF\\uAA5C-\\uAA5F\\uAADE-\\uAADF\\uAAF0-\\uAAF1\\uABEB\\uFD3E-\\uFD3F\\uFE10-\\uFE19\\uFE30-\\uFE52\\uFE54-\\uFE61\\uFE63\\uFE68\\uFE6A-\\uFE6B\\uFF01-\\uFF03\\uFF05-\\uFF0A\\uFF0C-\\uFF0F\\uFF1A-\\uFF1B\\uFF1F-\\uFF20\\uFF3B-\\uFF3D\\uFF3F\\uFF5B\\uFF5D\\uFF5F-\\uFF65\\u{10100}-\\u{10102}\\u{1039F}\\u{103D0}\\u{1056F}\\u{10857}\\u{1091F}\\u{1093F}\\u{10A50}-\\u{10A58}\\u{10A7F}\\u{10AF0}-\\u{10AF6}\\u{10B39}-\\u{10B3F}\\u{10B99}-\\u{10B9C}\\u{10D6E}\\u{10EAD}\\u{10ED0}\\u{10F55}-\\u{10F59}\\u{10F86}-\\u{10F89}\\u{11047}-\\u{1104D}\\u{110BB}-\\u{110BC}\\u{110BE}-\\u{110C1}\\u{11140}-\\u{11143}\\u{11174}-\\u{11175}\\u{111C5}-\\u{111C8}\\u{111CD}\\u{111DB}\\u{111DD}-\\u{111DF}\\u{11238}-\\u{1123D}\\u{112A9}\\u{113D4}-\\u{113D5}\\u{113D7}-\\u{113D8}\\u{1144B}-\\u{1144F}\\u{1145A}-\\u{1145B}\\u{1145D}\\u{114C6}\\u{115C1}-\\u{115D7}\\u{11641}-\\u{11643}\\u{11660}-\\u{1166C}\\u{116B9}\\u{1173C}-\\u{1173E}\\u{1183B}\\u{11944}-\\u{11946}\\u{119E2}\\u{11A3F}-\\u{11A46}\\u{11A9A}-\\u{11A9C}\\u{11A9E}-\\u{11AA2}\\u{11B00}-\\u{11B09}\\u{11BE1}\\u{11C41}-\\u{11C45}\\u{11C70}-\\u{11C71}\\u{11EF7}-\\u{11EF8}\\u{11F43}-\\u{11F4F}\\u{11FFF}\\u{12470}-\\u{12474}\\u{12FF1}-\\u{12FF2}\\u{16A6E}-\\u{16A6F}\\u{16AF5}\\u{16B37}-\\u{16B3B}\\u{16B44}\\u{16D6D}-\\u{16D6F}\\u{16E97}-\\u{16E9A}\\u{16FE2}\\u{1BC9F}\\u{1DA87}-\\u{1DA8B}\\u{1E5FF}\\u{1E95E}-\\u{1E95F}\\u0024\\u002B\\u003C-\\u003E\\u005E\\u0060\\u007C\\u007E\\u00A2-\\u00A6\\u00A8-\\u00A9\\u00AC\\u00AE-\\u00B1\\u00B4\\u00B8\\u00D7\\u00F7\\u02C2-\\u02C5\\u02D2-\\u02DF\\u02E5-\\u02EB\\u02ED\\u02EF-\\u02FF\\u0375\\u0384-\\u0385\\u03F6\\u0482\\u058D-\\u058F\\u0606-\\u0608\\u060B\\u060E-\\u060F\\u06DE\\u06E9\\u06FD-\\u06FE\\u07F6\\u07FE-\\u07FF\\u0888\\u09F2-\\u09F3\\u09FA-\\u09FB\\u0AF1\\u0B70\\u0BF3-\\u0BFA\\u0C7F\\u0D4F\\u0D79\\u0E3F\\u0F01-\\u0F03\\u0F13\\u0F15-\\u0F17\\u0F1A-\\u0F1F\\u0F34\\u0F36\\u0F38\\u0FBE-\\u0FC5\\u0FC7-\\u0FCC\\u0FCE-\\u0FCF\\u0FD5-\\u0FD8\\u109E-\\u109F\\u1390-\\u1399\\u166D\\u17DB\\u1940\\u19DE-\\u19FF\\u1B61-\\u1B6A\\u1B74-\\u1B7C\\u1FBD\\u1FBF-\\u1FC1\\u1FCD-\\u1FCF\\u1FDD-\\u1FDF\\u1FED-\\u1FEF\\u1FFD-\\u1FFE\\u2044\\u2052\\u207A-\\u207C\\u208A-\\u208C\\u20A0-\\u20C1\\u2100-\\u2101\\u2103-\\u2106\\u2108-\\u2109\\u2114\\u2116-\\u2118\\u211E-\\u2123\\u2125\\u2127\\u2129\\u212E\\u213A-\\u213B\\u2140-\\u2144\\u214A-\\u214D\\u214F\\u218A-\\u218B\\u2190-\\u2307\\u230C-\\u2328\\u232B-\\u2429\\u2440-\\u244A\\u249C-\\u24E9\\u2500-\\u2767\\u2794-\\u27C4\\u27C7-\\u27E5\\u27F0-\\u2982\\u2999-\\u29D7\\u29DC-\\u29FB\\u29FE-\\u2B73\\u2B76-\\u2BFF\\u2CE5-\\u2CEA\\u2E50-\\u2E51\\u2E80-\\u2E99\\u2E9B-\\u2EF3\\u2F00-\\u2FD5\\u2FF0-\\u2FFF\\u3004\\u3012-\\u3013\\u3020\\u3036-\\u3037\\u303E-\\u303F\\u309B-\\u309C\\u3190-\\u3191\\u3196-\\u319F\\u31C0-\\u31E5\\u31EF\\u3200-\\u321E\\u322A-\\u3247\\u3250\\u3260-\\u327F\\u328A-\\u32B0\\u32C0-\\u33FF\\u4DC0-\\u4DFF\\uA490-\\uA4C6\\uA700-\\uA716\\uA720-\\uA721\\uA789-\\uA78A\\uA828-\\uA82B\\uA836-\\uA839\\uAA77-\\uAA79\\uAB5B\\uAB6A-\\uAB6B\\uFB29\\uFBB2-\\uFBD2\\uFD40-\\uFD4F\\uFD90-\\uFD91\\uFDC8-\\uFDCF\\uFDFC-\\uFDFF\\uFE62\\uFE64-\\uFE66\\uFE69\\uFF04\\uFF0B\\uFF1C-\\uFF1E\\uFF3E\\uFF40\\uFF5C\\uFF5E\\uFFE0-\\uFFE6\\uFFE8-\\uFFEE\\uFFFC-\\uFFFD\\u{10137}-\\u{1013F}\\u{10179}-\\u{10189}\\u{1018C}-\\u{1018E}\\u{10190}-\\u{1019C}\\u{101A0}\\u{101D0}-\\u{101FC}\\u{10877}-\\u{10878}\\u{10AC8}\\u{10D8E}-\\u{10D8F}\\u{10ED1}-\\u{10ED8}\\u{1173F}\\u{11FD5}-\\u{11FF1}\\u{16B3C}-\\u{16B3F}\\u{16B45}\\u{1BC9C}\\u{1CC00}-\\u{1CCEF}\\u{1CCFA}-\\u{1CCFC}\\u{1CD00}-\\u{1CEB3}\\u{1CEBA}-\\u{1CED0}\\u{1CEE0}-\\u{1CEF0}\\u{1CF50}-\\u{1CFC3}\\u{1D000}-\\u{1D0F5}\\u{1D100}-\\u{1D126}\\u{1D129}-\\u{1D164}\\u{1D16A}-\\u{1D16C}\\u{1D183}-\\u{1D184}\\u{1D18C}-\\u{1D1A9}\\u{1D1AE}-\\u{1D1EA}\\u{1D200}-\\u{1D241}\\u{1D245}\\u{1D300}-\\u{1D356}\\u{1D6C1}\\u{1D6DB}\\u{1D6FB}\\u{1D715}\\u{1D735}\\u{1D74F}\\u{1D76F}\\u{1D789}\\u{1D7A9}\\u{1D7C3}\\u{1D800}-\\u{1D9FF}\\u{1DA37}-\\u{1DA3A}\\u{1DA6D}-\\u{1DA74}\\u{1DA76}-\\u{1DA83}\\u{1DA85}-\\u{1DA86}\\u{1E14F}\\u{1E2FF}\\u{1ECAC}\\u{1ECB0}\\u{1ED2E}\\u{1EEF0}-\\u{1EEF1}\\u{1F000}-\\u{1F02B}\\u{1F030}-\\u{1F093}\\u{1F0A0}-\\u{1F0AE}\\u{1F0B1}-\\u{1F0BF}\\u{1F0C1}-\\u{1F0CF}\\u{1F0D1}-\\u{1F0F5}\\u{1F10D}-\\u{1F1AD}\\u{1F1E6}-\\u{1F202}\\u{1F210}-\\u{1F23B}\\u{1F240}-\\u{1F248}\\u{1F250}-\\u{1F251}\\u{1F260}-\\u{1F265}\\u{1F300}-\\u{1F6D8}\\u{1F6DC}-\\u{1F6EC}\\u{1F6F0}-\\u{1F6FC}\\u{1F700}-\\u{1F7D9}\\u{1F7E0}-\\u{1F7EB}\\u{1F7F0}\\u{1F800}-\\u{1F80B}\\u{1F810}-\\u{1F847}\\u{1F850}-\\u{1F859}\\u{1F860}-\\u{1F887}\\u{1F890}-\\u{1F8AD}\\u{1F8B0}-\\u{1F8BB}\\u{1F8C0}-\\u{1F8C1}\\u{1F8D0}-\\u{1F8D8}\\u{1F900}-\\u{1FA57}\\u{1FA60}-\\u{1FA6D}\\u{1FA70}-\\u{1FA7C}\\u{1FA80}-\\u{1FA8A}\\u{1FA8E}-\\u{1FAC6}\\u{1FAC8}\\u{1FACD}-\\u{1FADC}\\u{1FADF}-\\u{1FAEA}\\u{1FAEF}-\\u{1FAF8}\\u{1FB00}-\\u{1FB92}\\u{1FB94}-\\u{1FBEF}\\u{1FBFA}\\uE000-\\uF8FF\\u{F0000}-\\u{FFFFD}\\u{100000}-\\u{10FFFD}]",
        "u"
      ),
      lJ = RegExp(
        "[\\u231A-\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD-\\u25FE\\u2614-\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA-\\u26AB\\u26BD-\\u26BE\\u26C4-\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2-\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A-\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B-\\u2B1C\\u2B50\\u2B55\\u{1F004}\\u{1F0CF}\\u{1F18E}\\u{1F191}-\\u{1F19A}\\u{1F1E6}-\\u{1F1FF}\\u{1F201}\\u{1F21A}\\u{1F22F}\\u{1F232}-\\u{1F236}\\u{1F238}-\\u{1F23A}\\u{1F250}-\\u{1F251}\\u{1F300}-\\u{1F320}\\u{1F32D}-\\u{1F335}\\u{1F337}-\\u{1F37C}\\u{1F37E}-\\u{1F393}\\u{1F3A0}-\\u{1F3CA}\\u{1F3CF}-\\u{1F3D3}\\u{1F3E0}-\\u{1F3F0}\\u{1F3F4}\\u{1F3F8}-\\u{1F43E}\\u{1F440}\\u{1F442}-\\u{1F4FC}\\u{1F4FF}-\\u{1F53D}\\u{1F54B}-\\u{1F54E}\\u{1F550}-\\u{1F567}\\u{1F57A}\\u{1F595}-\\u{1F596}\\u{1F5A4}\\u{1F5FB}-\\u{1F64F}\\u{1F680}-\\u{1F6C5}\\u{1F6CC}\\u{1F6D0}-\\u{1F6D2}\\u{1F6D5}-\\u{1F6D8}\\u{1F6DC}-\\u{1F6DF}\\u{1F6EB}-\\u{1F6EC}\\u{1F6F4}-\\u{1F6FC}\\u{1F7E0}-\\u{1F7EB}\\u{1F7F0}\\u{1F90C}-\\u{1F93A}\\u{1F93C}-\\u{1F945}\\u{1F947}-\\u{1F9FF}\\u{1FA70}-\\u{1FA7C}\\u{1FA80}-\\u{1FA8A}\\u{1FA8E}-\\u{1FAC6}\\u{1FAC8}\\u{1FACD}-\\u{1FADC}\\u{1FADF}-\\u{1FAEA}\\u{1FAEF}-\\u{1FAF8}]",
        "u"
      ),
      l$ = new Set(["?", "֊", "-", "‐", "‒", "–", "—", "…", "‼", "‽", "⁉"]);
    function l0(e) {
      let t = e.charCodeAt(0);
      return t < 128
        ? (t >= 33 && t <= 47 && 45 !== t) ||
            (t >= 58 && t <= 64 && 63 !== t) ||
            (t >= 91 && t <= 96) ||
            (t >= 123 && t <= 126)
        : !l$.has(e) && !lJ.test(e) && lZ.test(e);
    }
    function l1(e) {
      let t = !1;
      for (let n of e)
        if (!lA.test(n)) {
          if (!l0(n)) return !1;
          t = !0;
        }
      return t;
    }
    function l2(e) {
      for (let t of e) if (lx.test(t)) return !0;
      return !1;
    }
    function l6(e) {
      if (0 === e.length) return !1;
      for (let t of e) if (!(lx.test(t) || lQ.has(t))) return !1;
      return !0;
    }
    let l3 = null,
      l4 = new Map(),
      l5 = null,
      l7 = RegExp(
        "[\\u231A-\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD-\\u25FE\\u2614-\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA-\\u26AB\\u26BD-\\u26BE\\u26C4-\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2-\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A-\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B-\\u2B1C\\u2B50\\u2B55\\u{1F004}\\u{1F0CF}\\u{1F18E}\\u{1F191}-\\u{1F19A}\\u{1F1E6}-\\u{1F1FF}\\u{1F201}\\u{1F21A}\\u{1F22F}\\u{1F232}-\\u{1F236}\\u{1F238}-\\u{1F23A}\\u{1F250}-\\u{1F251}\\u{1F300}-\\u{1F320}\\u{1F32D}-\\u{1F335}\\u{1F337}-\\u{1F37C}\\u{1F37E}-\\u{1F393}\\u{1F3A0}-\\u{1F3CA}\\u{1F3CF}-\\u{1F3D3}\\u{1F3E0}-\\u{1F3F0}\\u{1F3F4}\\u{1F3F8}-\\u{1F43E}\\u{1F440}\\u{1F442}-\\u{1F4FC}\\u{1F4FF}-\\u{1F53D}\\u{1F54B}-\\u{1F54E}\\u{1F550}-\\u{1F567}\\u{1F57A}\\u{1F595}-\\u{1F596}\\u{1F5A4}\\u{1F5FB}-\\u{1F64F}\\u{1F680}-\\u{1F6C5}\\u{1F6CC}\\u{1F6D0}-\\u{1F6D2}\\u{1F6D5}-\\u{1F6D8}\\u{1F6DC}-\\u{1F6DF}\\u{1F6EB}-\\u{1F6EC}\\u{1F6F4}-\\u{1F6FC}\\u{1F7E0}-\\u{1F7EB}\\u{1F7F0}\\u{1F90C}-\\u{1F93A}\\u{1F93C}-\\u{1F945}\\u{1F947}-\\u{1F9FF}\\u{1FA70}-\\u{1FA7C}\\u{1FA80}-\\u{1FA8A}\\u{1FA8E}-\\u{1FAC6}\\u{1FAC8}\\u{1FACD}-\\u{1FADC}\\u{1FADF}-\\u{1FAEA}\\u{1FAEF}-\\u{1FAF8}]",
        "u"
      ),
      l9 = RegExp(
        "[\\u231A-\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD-\\u25FE\\u2614-\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA-\\u26AB\\u26BD-\\u26BE\\u26C4-\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2-\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A-\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B-\\u2B1C\\u2B50\\u2B55\\u{1F004}\\u{1F0CF}\\u{1F18E}\\u{1F191}-\\u{1F19A}\\u{1F1E6}-\\u{1F1FF}\\u{1F201}\\u{1F21A}\\u{1F22F}\\u{1F232}-\\u{1F236}\\u{1F238}-\\u{1F23A}\\u{1F250}-\\u{1F251}\\u{1F300}-\\u{1F320}\\u{1F32D}-\\u{1F335}\\u{1F337}-\\u{1F37C}\\u{1F37E}-\\u{1F393}\\u{1F3A0}-\\u{1F3CA}\\u{1F3CF}-\\u{1F3D3}\\u{1F3E0}-\\u{1F3F0}\\u{1F3F4}\\u{1F3F8}-\\u{1F43E}\\u{1F440}\\u{1F442}-\\u{1F4FC}\\u{1F4FF}-\\u{1F53D}\\u{1F54B}-\\u{1F54E}\\u{1F550}-\\u{1F567}\\u{1F57A}\\u{1F595}-\\u{1F596}\\u{1F5A4}\\u{1F5FB}-\\u{1F64F}\\u{1F680}-\\u{1F6C5}\\u{1F6CC}\\u{1F6D0}-\\u{1F6D2}\\u{1F6D5}-\\u{1F6D8}\\u{1F6DC}-\\u{1F6DF}\\u{1F6EB}-\\u{1F6EC}\\u{1F6F4}-\\u{1F6FC}\\u{1F7E0}-\\u{1F7EB}\\u{1F7F0}\\u{1F90C}-\\u{1F93A}\\u{1F93C}-\\u{1F945}\\u{1F947}-\\u{1F9FF}\\u{1FA70}-\\u{1FA7C}\\u{1FA80}-\\u{1FA8A}\\u{1FA8E}-\\u{1FAC6}\\u{1FAC8}\\u{1FACD}-\\u{1FADC}\\u{1FADF}-\\u{1FAEA}\\u{1FAEF}-\\u{1FAF8}\\u00A9\\u00AE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u2199\\u21A9-\\u21AA\\u231A-\\u231B\\u2328\\u23CF\\u23E9-\\u23F3\\u23F8-\\u23FA\\u24C2\\u25AA-\\u25AB\\u25B6\\u25C0\\u25FB-\\u25FE\\u2600-\\u2604\\u260E\\u2611\\u2614-\\u2615\\u2618\\u261D\\u2620\\u2622-\\u2623\\u2626\\u262A\\u262E-\\u262F\\u2638-\\u263A\\u2640\\u2642\\u2648-\\u2653\\u265F-\\u2660\\u2663\\u2665-\\u2666\\u2668\\u267B\\u267E-\\u267F\\u2692-\\u2697\\u2699\\u269B-\\u269C\\u26A0-\\u26A1\\u26A7\\u26AA-\\u26AB\\u26B0-\\u26B1\\u26BD-\\u26BE\\u26C4-\\u26C5\\u26C8\\u26CE-\\u26CF\\u26D1\\u26D3-\\u26D4\\u26E9-\\u26EA\\u26F0-\\u26F5\\u26F7-\\u26FA\\u26FD\\u2702\\u2705\\u2708-\\u270D\\u270F\\u2712\\u2714\\u2716\\u271D\\u2721\\u2728\\u2733-\\u2734\\u2744\\u2747\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2763-\\u2764\\u2795-\\u2797\\u27A1\\u27B0\\u27BF\\u2934-\\u2935\\u2B05-\\u2B07\\u2B1B-\\u2B1C\\u2B50\\u2B55\\u3030\\u303D\\u3297\\u3299\\u{1F004}\\u{1F02C}-\\u{1F02F}\\u{1F094}-\\u{1F09F}\\u{1F0AF}-\\u{1F0B0}\\u{1F0C0}\\u{1F0CF}-\\u{1F0D0}\\u{1F0F6}-\\u{1F0FF}\\u{1F170}-\\u{1F171}\\u{1F17E}-\\u{1F17F}\\u{1F18E}\\u{1F191}-\\u{1F19A}\\u{1F1AE}-\\u{1F1E5}\\u{1F201}-\\u{1F20F}\\u{1F21A}\\u{1F22F}\\u{1F232}-\\u{1F23A}\\u{1F23C}-\\u{1F23F}\\u{1F249}-\\u{1F25F}\\u{1F266}-\\u{1F321}\\u{1F324}-\\u{1F393}\\u{1F396}-\\u{1F397}\\u{1F399}-\\u{1F39B}\\u{1F39E}-\\u{1F3F0}\\u{1F3F3}-\\u{1F3F5}\\u{1F3F7}-\\u{1F3FA}\\u{1F400}-\\u{1F4FD}\\u{1F4FF}-\\u{1F53D}\\u{1F549}-\\u{1F54E}\\u{1F550}-\\u{1F567}\\u{1F56F}-\\u{1F570}\\u{1F573}-\\u{1F57A}\\u{1F587}\\u{1F58A}-\\u{1F58D}\\u{1F590}\\u{1F595}-\\u{1F596}\\u{1F5A4}-\\u{1F5A5}\\u{1F5A8}\\u{1F5B1}-\\u{1F5B2}\\u{1F5BC}\\u{1F5C2}-\\u{1F5C4}\\u{1F5D1}-\\u{1F5D3}\\u{1F5DC}-\\u{1F5DE}\\u{1F5E1}\\u{1F5E3}\\u{1F5E8}\\u{1F5EF}\\u{1F5F3}\\u{1F5FA}-\\u{1F64F}\\u{1F680}-\\u{1F6C5}\\u{1F6CB}-\\u{1F6D2}\\u{1F6D5}-\\u{1F6E5}\\u{1F6E9}\\u{1F6EB}-\\u{1F6F0}\\u{1F6F3}-\\u{1F6FF}\\u{1F7DA}-\\u{1F7FF}\\u{1F80C}-\\u{1F80F}\\u{1F848}-\\u{1F84F}\\u{1F85A}-\\u{1F85F}\\u{1F888}-\\u{1F88F}\\u{1F8AE}-\\u{1F8AF}\\u{1F8BC}-\\u{1F8BF}\\u{1F8C2}-\\u{1F8CF}\\u{1F8D9}-\\u{1F8FF}\\u{1F90C}-\\u{1F93A}\\u{1F93C}-\\u{1F945}\\u{1F947}-\\u{1F9FF}\\u{1FA58}-\\u{1FA5F}\\u{1FA6E}-\\u{1FAFF}\\u{1FC00}-\\u{1FFFD}\\u{1F1E6}-\\u{1F1FF}\\uFE0F\\u20E3]",
        "u"
      ),
      l8 = null,
      ae = new Map();
    function at() {
      if (null !== l3) return l3;
      if ("u" > typeof OffscreenCanvas) return (l3 = new OffscreenCanvas(1, 1).getContext("2d"));
      if ("u" > typeof document) return (l3 = document.createElement("canvas").getContext("2d"));
      throw Error("Text measurement requires OffscreenCanvas or a DOM canvas context.");
    }
    function an(e, t) {
      let n = t.get(e);
      return (
        void 0 === n &&
          ((n = { width: at().measureText(e).width, containsCJK: lN(e) }), t.set(e, n)),
        n
      );
    }
    function al() {
      if (null !== l5) return l5;
      if ("u" < typeof navigator)
        return (l5 = {
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
      return (l5 = {
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
    function aa() {
      return (null === l8 && (l8 = new Intl.Segmenter(void 0, { granularity: "grapheme" })), l8);
    }
    function ar(e, t, n) {
      return 0 === n
        ? t.width
        : t.width -
            (void 0 === t.emojiCount &&
              (t.emojiCount = (function (e) {
                let t = 0;
                for (let l of aa().segment(e)) {
                  var n;
                  ((n = l.segment), (l7.test(n) || n.includes("️")) && t++);
                }
                return t;
              })(e)),
            t.emojiCount * n);
    }
    function ao(e) {
      return (
        "space" === e ||
        "preserved-space" === e ||
        "tab" === e ||
        "zero-width-break" === e ||
        "soft-hyphen" === e
      );
    }
    function ai(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.widths.length;
      for (; t < n;) {
        var l;
        if ("space" !== (l = e.kinds[t]) && "zero-width-break" !== l && "soft-hyphen" !== l) break;
        t++;
      }
      return t;
    }
    function au(e, t) {
      return 0 === t ? 0 : e + t;
    }
    function as(e, t, n, l) {
      return au(l, "tab" === t ? 0 : e.lineEndFitAdvances[n]);
    }
    function ad(e, t, n, l, a) {
      return au(l, "tab" === t ? a : e.lineEndPaintAdvances[n]);
    }
    function ac(e, t, n) {
      let l = t;
      for (; l < e.length && e[l] < n;) l++;
      return l;
    }
    let am = null;
    function ah() {
      return (null === am && (am = new Intl.Segmenter(void 0, { granularity: "grapheme" })), am);
    }
    function af(e, t) {
      if ("zero-width-break" === t || "soft-hyphen" === t || "hard-break" === t) return 0;
      if ("tab" === t) return 1;
      let n = 0;
      for (let t of ah().segment(e)) n++;
      return n;
    }
    let ap = new Map(),
      ag = (e, t) => {
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
                  l = ap.get(n);
                if (void 0 !== l) return l;
                try {
                  var r, o, i, u, s;
                  let l,
                    d,
                    c,
                    m =
                      ((i = t.font),
                      (d =
                        null != (r = (u = { letterSpacing: t.letterSpacing }).wordBreak)
                          ? r
                          : "normal"),
                      (c = null != (o = null == u ? void 0 : u.letterSpacing) ? o : 0),
                      (s = (function (e, t, n, l) {
                        var a, r;
                        let o,
                          i,
                          u,
                          s,
                          d,
                          c = al(),
                          { cache: m, emojiCorrection: h } =
                            ((a = e.normalized),
                            (r = l9.test(a)),
                            (at().font = t),
                            (o = l4.get(t)) || ((o = new Map()), l4.set(t, o)),
                            (u = o),
                            (s = (i = t.match(/(\d+(?:\.\d+)?)\s*px/)) ? parseFloat(i[1]) : 16),
                            (d = r
                              ? (function (e, t) {
                                  let n = ae.get(e);
                                  if (void 0 !== n) return n;
                                  let l = at();
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
                                  return (ae.set(e, n), n);
                                })(t, s)
                              : 0),
                            { cache: u, fontSize: s, emojiCorrection: d }),
                          f = ar("-", an("-", m), h) + (0 === l ? 0 : 2 * l),
                          p = 8 * ar(" ", an(" ", m), h),
                          g = 0 !== l;
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
                          b = [],
                          E = [],
                          C = e.chunks.length <= 1 && !g,
                          S = [],
                          y = [],
                          A = [],
                          x = [],
                          M = [],
                          N = Array.from({ length: e.len });
                        function w(e, t, n, l, a, r, o, i, u) {
                          ("text" !== a && "space" !== a && "zero-width-break" !== a && (C = !1),
                            v.push(t),
                            F.push(n),
                            b.push(l),
                            E.push(a),
                            null == S || S.push(r),
                            y.push(o),
                            A.push(i),
                            g && x.push(u),
                            null !== M && M.push(e));
                        }
                        function D(e, t, a, r, o) {
                          var i;
                          let u = an(e, m),
                            s = g ? af(e, t) : 0,
                            d = ((i = ar(e, u, h)), s > 1 ? i + (s - 1) * l : i),
                            f =
                              "space" === t || "preserved-space" === t || "zero-width-break" === t
                                ? 0
                                : d,
                            p = 0 === f ? 0 : f + (s > 0 ? l : 0),
                            v = "space" === t || "zero-width-break" === t ? 0 : d;
                          if (o && r && e.length > 1) {
                            let r = "sum-graphemes";
                            0 !== l
                              ? (r = "segment-prefixes")
                              : l6(e)
                                ? (r = "pair-context")
                                : c.preferPrefixWidthsForBreakableRuns && (r = "segment-prefixes");
                            let o = (function (e, t, n, l, a) {
                                if (void 0 !== t.breakableFitAdvances && t.breakableFitMode === a)
                                  return t.breakableFitAdvances;
                                t.breakableFitMode = a;
                                let r = aa(),
                                  o = [];
                                for (let t of r.segment(e)) o.push(t.segment);
                                if (o.length <= 1)
                                  return ((t.breakableFitAdvances = null), t.breakableFitAdvances);
                                if ("sum-graphemes" === a) {
                                  let e = [];
                                  for (let t of o) {
                                    let a = an(t, n);
                                    e.push(ar(t, a, l));
                                  }
                                  return ((t.breakableFitAdvances = e), t.breakableFitAdvances);
                                }
                                if ("pair-context" === a || o.length > 96) {
                                  let e = [],
                                    a = null,
                                    r = 0;
                                  for (let t of o) {
                                    let o = an(t, n),
                                      i = ar(t, o, l);
                                    if (null === a) e.push(i);
                                    else {
                                      let o = a + t,
                                        i = an(o, n);
                                      e.push(ar(o, i, l) - r);
                                    }
                                    ((a = t), (r = i));
                                  }
                                  return ((t.breakableFitAdvances = e), t.breakableFitAdvances);
                                }
                                let i = [],
                                  u = "",
                                  s = 0;
                                for (let e of o) {
                                  let t = an((u += e), n),
                                    a = ar(u, t, l);
                                  (i.push(a - s), (s = a));
                                }
                                return ((t.breakableFitAdvances = i), t.breakableFitAdvances);
                              })(e, u, m, h, r),
                              i =
                                null === o || "keep-all" === n
                                  ? null
                                  : (function (e) {
                                      if (!/[-\u058A\u2010\u2012\u2013\u2014]/u.test(e))
                                        return null;
                                      let t = [],
                                        n = 0;
                                      for (let a of ah().segment(e)) {
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
                            w(e, d, p, v, t, a, o, i, s);
                            return;
                          }
                          w(e, d, p, v, t, a, null, null, s);
                        }
                        for (let t = 0; t < e.len; t++) {
                          N[t] = v.length;
                          let l = e.texts[t],
                            a = e.isWordLike[t],
                            r = e.kinds[t],
                            o = e.starts[t];
                          if ("soft-hyphen" === r) {
                            w(l, 0, f, f, r, o, null, null, 0);
                            continue;
                          }
                          if ("hard-break" === r) {
                            w(l, 0, 0, 0, r, o, null, null, 0);
                            continue;
                          }
                          if ("tab" === r) {
                            w(l, 0, 0, 0, r, o, null, null, g ? af(l, r) : 0);
                            continue;
                          }
                          let i = an(l, m);
                          if ("text" === r && i.containsCJK) {
                            let e = (function (e, t) {
                                let n = [],
                                  l = [],
                                  a = 0,
                                  r = !1,
                                  o = !1,
                                  i = !1;
                                function u() {
                                  0 !== l.length &&
                                    (n.push({ text: 1 === l.length ? l[0] : l.join(""), start: a }),
                                    (l = []),
                                    (r = !1),
                                    (o = !1),
                                    (i = !1));
                                }
                                function s(e, t, n) {
                                  ((l = [e]), (a = t), (r = n), (o = lG(e)), (i = lL.has(e)));
                                }
                                for (let n of ah().segment(e)) {
                                  let e = n.segment,
                                    a = lN(e);
                                  if (0 === l.length) {
                                    s(e, n.index, a);
                                    continue;
                                  }
                                  if (
                                    i ||
                                    lO.has(e) ||
                                    lT.has(e) ||
                                    (t.carryCJKAfterClosingQuote && a && o) ||
                                    (!r && !a)
                                  ) {
                                    !(function (e, t) {
                                      (l.push(e), (r = r || t));
                                      let n = lG(e);
                                      ((o = (1 === e.length && lT.has(e) && o) || n), (i = !1));
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
                                        r = !1;
                                      function o(n) {
                                        if (!(a < 0)) {
                                          if (r)
                                            if (a + 1 === n) l.push(t[a]);
                                            else {
                                              let r, o;
                                              ((r = t[a].start),
                                                (o = n < t.length ? t[n].start : e.length),
                                                l.push({ text: e.slice(r, o), start: r }));
                                            }
                                          else for (let e = a; e < n; e++) l.push(t[e]);
                                          ((a = -1), (r = !1));
                                        }
                                      }
                                      for (let e = 0; e < t.length; e++) {
                                        let l = t[e];
                                        (a >= 0 && !lB(t[e - 1].text, n) && o(e),
                                          a < 0 && (a = e),
                                          (r = r || lN(l.text)));
                                      }
                                      return (o(t.length), l);
                                    })(l, e, c.breakKeepAllAfterPunctuation)
                                  : e;
                            for (let e = 0; e < t.length; e++) {
                              let l = t[e];
                              D(l.text, "text", o + l.start, a, "keep-all" === n || !lN(l.text));
                            }
                            continue;
                          }
                          D(l, r, o, a, !0);
                        }
                        let B = (function (e, t, n) {
                            let l = [];
                            for (let a = 0; a < e.length; a++) {
                              let r = e[a],
                                o = r.startSegmentIndex < t.length ? t[r.startSegmentIndex] : n,
                                i = r.endSegmentIndex < t.length ? t[r.endSegmentIndex] : n,
                                u =
                                  r.consumedEndSegmentIndex < t.length
                                    ? t[r.consumedEndSegmentIndex]
                                    : n;
                              l.push({
                                startSegmentIndex: o,
                                endSegmentIndex: i,
                                consumedEndSegmentIndex: u
                              });
                            }
                            return l;
                          })(e.chunks, N, v.length),
                          O =
                            null === S
                              ? null
                              : (function (e, t) {
                                  let n = (function (e) {
                                    let t = e.length;
                                    if (0 === t) return null;
                                    let n = Array(t),
                                      l = !1;
                                    for (let a = 0; a < t;) {
                                      let r = e.charCodeAt(a),
                                        o = r,
                                        i = 1;
                                      if (r >= 55296 && r <= 56319 && a + 1 < t) {
                                        let t = e.charCodeAt(a + 1);
                                        t >= 56320 &&
                                          t <= 57343 &&
                                          ((o = ((r - 55296) << 10) + (t - 56320) + 65536),
                                          (i = 2));
                                      }
                                      let u = (function (e) {
                                        if (e <= 255) return lF[e];
                                        let t = 0,
                                          n = lb.length - 1;
                                        for (; t <= n;) {
                                          let l = (t + n) >> 1,
                                            a = lb[l];
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
                                      })(o);
                                      ("R" === u || "AL" === u || "AN" === u) && (l = !0);
                                      for (let e = 0; e < i; e++) n[a + e] = u;
                                      a += i;
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
                                    let r = new Int8Array(t);
                                    for (let e = 0; e < t; e++) r[e] = a;
                                    let o = 1 & a ? "R" : "L",
                                      i = o;
                                    for (let e = 0; e < t; e++)
                                      "NSM" === n[e] ? (n[e] = i) : (i = n[e]);
                                    i = o;
                                    for (let e = 0; e < t; e++) {
                                      let t = n[e];
                                      "EN" === t
                                        ? (n[e] = "AL" === i ? "AN" : "EN")
                                        : ("R" === t || "L" === t || "AL" === t) && (i = t);
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
                                    i = o;
                                    for (let e = 0; e < t; e++) {
                                      let t = n[e];
                                      "EN" === t
                                        ? (n[e] = "L" === i ? "L" : "EN")
                                        : ("R" === t || "L" === t) && (i = t);
                                    }
                                    for (let e = 0; e < t; e++) {
                                      if ("ON" !== n[e]) continue;
                                      let l = e + 1;
                                      for (; l < t && "ON" === n[l];) l++;
                                      let a = e > 0 ? n[e - 1] : o,
                                        r = l < t ? n[l] : o,
                                        i = "L" !== a ? "R" : "L";
                                      if (i === ("L" !== r ? "R" : "L"))
                                        for (let t = e; t < l; t++) n[t] = i;
                                      e = l - 1;
                                    }
                                    for (let e = 0; e < t; e++) "ON" === n[e] && (n[e] = o);
                                    for (let e = 0; e < t; e++) {
                                      let t = n[e];
                                      (1 & r[e]) == 0
                                        ? "R" === t
                                          ? r[e]++
                                          : ("AN" === t || "EN" === t) && (r[e] += 2)
                                        : ("L" === t || "AN" === t || "EN" === t) && r[e]++;
                                    }
                                    return r;
                                  })(e);
                                  if (null === n) return null;
                                  let l = new Int8Array(t.length);
                                  for (let e = 0; e < t.length; e++) l[e] = n[t[e]];
                                  return l;
                                })(e.normalized, S);
                        return null !== M
                          ? {
                              widths: v,
                              lineEndFitAdvances: F,
                              lineEndPaintAdvances: b,
                              kinds: E,
                              simpleLineWalkFastPath: C,
                              segLevels: O,
                              breakableFitAdvances: y,
                              breakablePreferredBreaks: A,
                              letterSpacing: l,
                              spacingGraphemeCounts: x,
                              discretionaryHyphenWidth: f,
                              tabStopAdvance: p,
                              chunks: B,
                              segments: M
                            }
                          : {
                              widths: v,
                              lineEndFitAdvances: F,
                              lineEndPaintAdvances: b,
                              kinds: E,
                              simpleLineWalkFastPath: C,
                              segLevels: O,
                              breakableFitAdvances: y,
                              breakablePreferredBreaks: A,
                              letterSpacing: l,
                              spacingGraphemeCounts: x,
                              discretionaryHyphenWidth: f,
                              tabStopAdvance: p,
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
                            r,
                            o =
                              ((r = null != n ? n : "normal"),
                              "pre-wrap" === r
                                ? { mode: r, preserveOrdinarySpaces: !0, preserveHardBreaks: !0 }
                                : { mode: r, preserveOrdinarySpaces: !1, preserveHardBreaks: !1 }),
                            i =
                              "pre-wrap" === o.mode
                                ? /[\r\f]/.test(e)
                                  ? e.replace(/\r\n/g, "\n").replace(/[\r\f]/g, "\n")
                                  : e
                                : (function (e) {
                                    if (!lC.test(e)) return e;
                                    let t = e.replace(lE, " ");
                                    return (
                                      32 === t.charCodeAt(0) && (t = t.slice(1)),
                                      t.length > 0 &&
                                        32 === t.charCodeAt(t.length - 1) &&
                                        (t = t.slice(0, -1)),
                                      t
                                    );
                                  })(e);
                          if (0 === i.length)
                            return {
                              normalized: i,
                              chunks: [],
                              len: 0,
                              texts: [],
                              isWordLike: [],
                              kinds: [],
                              starts: []
                            };
                          let u = (function (e, t, n) {
                              var l, r, o, i, u, s, d;
                              let c =
                                  (null === lS &&
                                    (lS = new Intl.Segmenter(a, { granularity: "word" })),
                                  lS),
                                m = 0,
                                h = [],
                                f = [],
                                p = [],
                                g = [],
                                v = [],
                                F = [],
                                b = [],
                                E = [],
                                C = [],
                                S = [],
                                y = [],
                                A = [];
                              for (let a of c.segment(e))
                                for (let e of (function (e, t, n, l) {
                                  if (!lU.test(e))
                                    return [{ text: e, isWordLike: t, kind: "text", start: n }];
                                  let a = [],
                                    r = null,
                                    o = [],
                                    i = n,
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
                                    if (null !== r && e === r && c === u) {
                                      (o.push(d), (s += d.length));
                                      continue;
                                    }
                                    (null !== r &&
                                      a.push({ text: lK(o), isWordLike: u, kind: r, start: i }),
                                      (r = e),
                                      (o = [d]),
                                      (i = n + s),
                                      (u = c),
                                      (s += d.length));
                                  }
                                  return (
                                    null !== r &&
                                      a.push({ text: lK(o), isWordLike: u, kind: r, start: i }),
                                    a
                                  );
                                })(a.segment, null != (l = a.isWordLike) && l, a.index, n)) {
                                  let n = "text" === e.kind,
                                    l =
                                      ((r = e.text),
                                      (o = e.isWordLike),
                                      "text" !== e.kind ||
                                      o ||
                                      1 !== r.length ||
                                      "-" === r ||
                                      "—" === r
                                        ? null
                                        : r),
                                    a = lN(e.text),
                                    u = ((i = e.text), ly.test(i)),
                                    d = lW(e.text),
                                    c = lG(e.text),
                                    M = (function (e) {
                                      let t = lW(e);
                                      return null !== t && lI.has(t);
                                    })(e.text),
                                    N = m - 1;
                                  function x() {
                                    (null !== F[N] && ((f[N] = [lV(h, F, b, N)]), (F[N] = null)),
                                      f[N].push(e.text),
                                      (p[N] = p[N] || e.isWordLike),
                                      (E[N] = E[N] || a),
                                      (C[N] = C[N] || u),
                                      (S[N] = c),
                                      (y[N] = M),
                                      (A[N] = lX(C[N], d)));
                                  }
                                  (t.carryCJKAfterClosingQuote &&
                                    n &&
                                    m > 0 &&
                                    "text" === g[N] &&
                                    a &&
                                    E[N] &&
                                    S[N]) ||
                                  (n &&
                                    m > 0 &&
                                    "text" === g[N] &&
                                    (function (e) {
                                      for (let t of e) if (!lO.has(t) && !lT.has(t)) return !1;
                                      return e.length > 0;
                                    })(e.text) &&
                                    E[N]) ||
                                  (n && m > 0 && "text" === g[N] && y[N])
                                    ? x()
                                    : n && m > 0 && "text" === g[N] && e.isWordLike && u && A[N]
                                      ? (x(), (p[N] = !0))
                                      : null !== l && m > 0 && "text" === g[N] && F[N] === l
                                        ? (b[N] = (null != (s = b[N]) ? s : 1) + 1)
                                        : n &&
                                            !e.isWordLike &&
                                            m > 0 &&
                                            "text" === g[N] &&
                                            !E[N] &&
                                            ((function (e) {
                                              if (lz(e)) return !0;
                                              let t = !1;
                                              for (let n of e) {
                                                if (lT.has(n) || lH(n)) {
                                                  t = !0;
                                                  continue;
                                                }
                                                if (!(t && lA.test(n))) return !1;
                                              }
                                              return t;
                                            })(e.text) ||
                                              ("-" === e.text && p[N]))
                                          ? x()
                                          : ((h[m] = e.text),
                                            (f[m] = [e.text]),
                                            (p[m] = e.isWordLike),
                                            (g[m] = e.kind),
                                            (v[m] = e.start),
                                            (F[m] = l),
                                            (b[m] = +(null !== l)),
                                            (E[m] = a),
                                            (C[m] = u),
                                            (S[m] = c),
                                            (y[m] = M),
                                            (A[m] = lX(u, d)),
                                            m++);
                                }
                              for (let e = 0; e < m; e++) {
                                if (null !== F[e]) {
                                  h[e] = lV(h, F, b, e);
                                  continue;
                                }
                                h[e] = lK(f[e]);
                              }
                              for (let e = 1; e < m; e++)
                                "text" === g[e] &&
                                  !p[e] &&
                                  lz(h[e]) &&
                                  "text" === g[e - 1] &&
                                  !E[e - 1] &&
                                  ((h[e - 1] += h[e]), (p[e - 1] = p[e - 1] || p[e]), (h[e] = ""));
                              let M = Array.from({ length: m }, () => null),
                                N = -1;
                              for (let e = m - 1; e >= 0; e--) {
                                let t = h[e];
                                if (0 !== t.length) {
                                  if (
                                    "text" === g[e] &&
                                    !p[e] &&
                                    N >= 0 &&
                                    "text" === g[N] &&
                                    ((function (e) {
                                      if (lz(e)) return !0;
                                      for (let t of e)
                                        if (!lL.has(t) && !lk.has(t) && !lA.test(t) && !lH(t))
                                          return !1;
                                      return e.length > 0;
                                    })(t) ||
                                      ("-" === t &&
                                        (function (e) {
                                          let t = (function (e) {
                                            for (let t of e) if (!lA.test(t)) return t;
                                            return null;
                                          })(e);
                                          return null !== t && lx.test(t);
                                        })(h[N])))
                                  ) {
                                    let n = null != (d = M[N]) ? d : [];
                                    (n.push(t), (M[N] = n), (v[N] = v[e]), (h[e] = ""));
                                    continue;
                                  }
                                  N = e;
                                }
                              }
                              for (let e = 0; e < m; e++) {
                                let t = M[e];
                                null != t &&
                                  (h[e] = (function (e, t) {
                                    let n = [];
                                    for (let t = e.length - 1; t >= 0; t--) n.push(e[t]);
                                    return (n.push(t), lK(n));
                                  })(t, h[e]));
                              }
                              let w = 0;
                              for (let e = 0; e < m; e++) {
                                let t = h[e];
                                0 !== t.length &&
                                  (w !== e &&
                                    ((h[w] = t), (p[w] = p[e]), (g[w] = g[e]), (v[w] = v[e])),
                                  w++);
                              }
                              ((h.length = w), (p.length = w), (g.length = w), (v.length = w));
                              let D = (function (e) {
                                let t = e.texts.slice(),
                                  n = e.isWordLike.slice(),
                                  l = e.kinds.slice(),
                                  a = e.starts.slice();
                                for (let e = 0; e < t.length - 1; e++) {
                                  if (
                                    "text" !== l[e] ||
                                    "text" !== l[e + 1] ||
                                    !lN(t[e]) ||
                                    !lN(t[e + 1])
                                  )
                                    continue;
                                  let n = (function (e) {
                                    let t = Array.from(e),
                                      n = t.length;
                                    for (; n > 0;) {
                                      let e = t[n - 1];
                                      if (lA.test(e) || lL.has(e) || lk.has(e)) {
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
                                    r = 0;
                                  for (; r < e.len;) {
                                    let o = e.texts[r],
                                      i = e.kinds[r],
                                      u = e.isWordLike[r];
                                    if ("text" === i) {
                                      let i = [o],
                                        s = r + 1,
                                        d = u;
                                      for (
                                        ;
                                        s < e.len &&
                                        "text" === e.kinds[s] &&
                                        (function (e, t, n, l) {
                                          let a,
                                            r = !t && l1(e),
                                            o = !l && l1(n),
                                            i =
                                              ((a = (function (e) {
                                                for (let t = e.length; t > 0;) {
                                                  let n = l_(e, t),
                                                    l = e.slice(n, t);
                                                  if (!lA.test(l)) return l;
                                                  t = n;
                                                }
                                                return null;
                                              })(e)),
                                              null !== a && lH(a)),
                                            u =
                                              (t || i) &&
                                              (function (e) {
                                                for (let t = e.length; t > 0;) {
                                                  let n = l_(e, t),
                                                    l = e.slice(n, t);
                                                  if (lA.test(l)) {
                                                    t = n;
                                                    continue;
                                                  }
                                                  return l0(l) || lH(l);
                                                }
                                                return !1;
                                              })(e);
                                          return (
                                            !((!r && !o && !u) || lN(e) || lN(n)) &&
                                            (t || r || i) &&
                                            (l || o)
                                          );
                                        })(
                                          e.texts[s - 1],
                                          e.isWordLike[s - 1],
                                          e.texts[s],
                                          e.isWordLike[s]
                                        );
                                      ) {
                                        let t = e.texts[s];
                                        (i.push(t), (d = d || e.isWordLike[s]), s++);
                                      }
                                      if (s > r + 1) {
                                        (t.push(lK(i)),
                                          n.push(d),
                                          l.push("text"),
                                          a.push(e.starts[r]),
                                          (r = s));
                                        continue;
                                      }
                                    }
                                    (t.push(o), n.push(u), l.push(i), a.push(e.starts[r]), r++);
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
                                    for (let r = 0; r < e.len; r++) {
                                      let o = e.texts[r];
                                      if ("text" === e.kinds[r] && o.includes("-")) {
                                        let i = o.split("-"),
                                          u = i.length > 1;
                                        for (let e = 0; e < i.length; e++) {
                                          let t = i[e];
                                          if (!u) break;
                                          (0 !== t.length && l2(t) && l6(t)) || (u = !1);
                                        }
                                        if (u) {
                                          let o = 0;
                                          for (let u = 0; u < i.length; u++) {
                                            let s = i[u],
                                              d = u < i.length - 1 ? "".concat(s, "-") : s;
                                            (t.push(d),
                                              n.push(!0),
                                              l.push("text"),
                                              a.push(e.starts[r] + o),
                                              (o += d.length));
                                          }
                                          continue;
                                        }
                                      }
                                      (t.push(o),
                                        n.push(e.isWordLike[r]),
                                        l.push(e.kinds[r]),
                                        a.push(e.starts[r]));
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
                                      for (let r = 0; r < e.len; r++) {
                                        let o = e.texts[r],
                                          i = e.kinds[r];
                                        if ("text" === i && l6(o) && l2(o)) {
                                          let i = [o],
                                            u = r + 1;
                                          for (
                                            ;
                                            u < e.len && "text" === e.kinds[u] && l6(e.texts[u]);
                                          )
                                            (i.push(e.texts[u]), u++);
                                          (t.push(lK(i)),
                                            n.push(!0),
                                            l.push("text"),
                                            a.push(e.starts[r]),
                                            (r = u - 1));
                                          continue;
                                        }
                                        (t.push(o),
                                          n.push(e.isWordLike[r]),
                                          l.push(i),
                                          a.push(e.starts[r]));
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
                                        for (let r = 0; r < e.len; r++) {
                                          let o = e.texts[r];
                                          if (
                                            (t.push(o),
                                            n.push(e.isWordLike[r]),
                                            l.push(e.kinds[r]),
                                            a.push(e.starts[r]),
                                            !(
                                              o.includes("?") &&
                                              (o.includes("://") || o.startsWith("www."))
                                            ))
                                          )
                                            continue;
                                          let i = r + 1;
                                          if (i >= e.len || lY(e.kinds[i])) continue;
                                          let u = [],
                                            s = e.starts[i],
                                            d = i;
                                          for (; d < e.len && !lY(e.kinds[d]);)
                                            (u.push(e.texts[d]), d++);
                                          u.length > 0 &&
                                            (t.push(lK(u)),
                                            n.push(!0),
                                            l.push("text"),
                                            a.push(s),
                                            (r = d - 1));
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
                                                  (lq.test(n) &&
                                                    t + 1 < e.len &&
                                                    "text" === e.kinds[t + 1] &&
                                                    "//" === e.texts[t + 1])
                                                );
                                              })(e, a)
                                            )
                                              continue;
                                            let r = [t[a]],
                                              o = a + 1;
                                            for (; o < e.len && !lY(l[o]);) {
                                              (r.push(t[o]), (n[a] = !0));
                                              let e = t[o].includes("?");
                                              if (((l[o] = "text"), (t[o] = ""), o++, e)) break;
                                            }
                                            t[a] = lK(r);
                                          }
                                          let r = 0;
                                          for (let e = 0; e < t.length; e++) {
                                            let o = t[e];
                                            0 !== o.length &&
                                              (r !== e &&
                                                ((t[r] = o),
                                                (n[r] = n[e]),
                                                (l[r] = l[e]),
                                                (a[r] = a[e])),
                                              r++);
                                          }
                                          return (
                                            (t.length = r),
                                            (n.length = r),
                                            (l.length = r),
                                            (a.length = r),
                                            { len: r, texts: t, isWordLike: n, kinds: l, starts: a }
                                          );
                                        })(
                                          (function (e) {
                                            let t = [],
                                              n = [],
                                              l = [],
                                              a = [],
                                              r = 0;
                                            for (; r < e.len;) {
                                              let o = [e.texts[r]],
                                                i = e.isWordLike[r],
                                                u = e.kinds[r],
                                                s = e.starts[r];
                                              if ("glue" === u) {
                                                let d = [o[0]],
                                                  c = s;
                                                for (r++; r < e.len && "glue" === e.kinds[r];)
                                                  (d.push(e.texts[r]), r++);
                                                let m = lK(d);
                                                if (r < e.len && "text" === e.kinds[r])
                                                  ((o[0] = m),
                                                    o.push(e.texts[r]),
                                                    (i = e.isWordLike[r]),
                                                    (u = "text"),
                                                    (s = c),
                                                    r++);
                                                else {
                                                  (t.push(m),
                                                    n.push(!1),
                                                    l.push("glue"),
                                                    a.push(c));
                                                  continue;
                                                }
                                              } else r++;
                                              if ("text" === u)
                                                for (; r < e.len && "glue" === e.kinds[r];) {
                                                  let t = [];
                                                  for (; r < e.len && "glue" === e.kinds[r];)
                                                    (t.push(e.texts[r]), r++);
                                                  let n = lK(t);
                                                  if (r < e.len && "text" === e.kinds[r]) {
                                                    (o.push(n, e.texts[r]),
                                                      (i = i || e.isWordLike[r]),
                                                      r++);
                                                    continue;
                                                  }
                                                  o.push(n);
                                                }
                                              (t.push(lK(o)), n.push(i), l.push(u), a.push(s));
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
                                            texts: h,
                                            isWordLike: p,
                                            kinds: g,
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
                                  ((u = D.texts[e + 1]), ly.test(u)) &&
                                  ((D.texts[e] = t.space),
                                  (D.isWordLike[e] = !1),
                                  (D.kinds[e] =
                                    "preserved-space" === D.kinds[e] ? "preserved-space" : "space"),
                                  (D.texts[e + 1] = t.marks + D.texts[e + 1]),
                                  (D.starts[e + 1] = D.starts[e] + t.space.length));
                              }
                              return D;
                            })(i, t, o),
                            s =
                              "keep-all" === l
                                ? (function (e, t, n) {
                                    if (t.len <= 1) return t;
                                    let l = [],
                                      a = [],
                                      r = [],
                                      o = [],
                                      i = -1,
                                      u = !1;
                                    function s(e) {
                                      (l.push(t.texts[e]),
                                        a.push(t.isWordLike[e]),
                                        r.push("text"),
                                        o.push(t.starts[e]));
                                    }
                                    function d(n) {
                                      if (!(i < 0)) {
                                        if (u)
                                          if (i + 1 === n) s(i);
                                          else {
                                            var d = i;
                                            let u = !1;
                                            for (let e = d; e < n; e++) u = u || t.isWordLike[e];
                                            let s = t.starts[d],
                                              c = n < t.len ? t.starts[n] : e.length;
                                            (l.push(e.slice(s, c)),
                                              a.push(u),
                                              r.push("text"),
                                              o.push(s));
                                          }
                                        else for (let e = i; e < n; e++) s(e);
                                        ((i = -1), (u = !1));
                                      }
                                    }
                                    for (let e = 0; e < t.len; e++) {
                                      let s = t.texts[e],
                                        c = t.kinds[e];
                                      if ("text" === c) {
                                        (i >= 0 && !lB(t.texts[e - 1], n) && d(e),
                                          i < 0 && (i = e),
                                          (u = u || lN(s)));
                                        continue;
                                      }
                                      (d(e),
                                        l.push(s),
                                        a.push(t.isWordLike[e]),
                                        r.push(c),
                                        o.push(t.starts[e]));
                                    }
                                    return (
                                      d(t.len),
                                      {
                                        len: l.length,
                                        texts: l,
                                        isWordLike: a,
                                        kinds: r,
                                        starts: o
                                      }
                                    );
                                  })(i, u, t.breakKeepAllAfterPunctuation)
                                : u;
                          return {
                            normalized: i,
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
                            })(s, o),
                            ...s
                          };
                        })(e, al(), null == u ? void 0 : u.whiteSpace, d),
                        i,
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
                              breakablePreferredBreaks: r
                            } = e;
                            if (0 === n.length) return;
                            let o = 1 / 0 + al().lineFitEpsilon,
                              i = 0,
                              u = 0,
                              s = !1,
                              d = 0,
                              c = 0,
                              m = 0,
                              h = 0,
                              f = -1,
                              p = 0;
                            function g() {
                              let e =
                                  arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : m,
                                n =
                                  arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : h,
                                l =
                                  arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : u;
                              (i++,
                                null == t || t(l, d, c, e, n),
                                (u = 0),
                                (s = !1),
                                (f = -1),
                                (p = 0));
                            }
                            function v(e, t) {
                              ((s = !0), (d = e), (c = 0), (m = e + 1), (h = 0), (u = t));
                            }
                            function F(e, t, n) {
                              ((s = !0), (d = e), (c = t), (m = e), (h = t + 1), (u = n));
                            }
                            function b(e, t) {
                              s ? ((u += t), (m = e + 1), (h = 0)) : v(e, t);
                            }
                            function E(e, t) {
                              var n;
                              let l = a[e],
                                i = null != (n = r[e]) ? n : null,
                                d = null === i ? -1 : ac(i, 0, t + 1),
                                c = -1,
                                f = 0,
                                p = t;
                              for (; p < l.length;) {
                                let n = l[p];
                                if (s)
                                  if (u + n > o) {
                                    if (null !== i && c > t) {
                                      (g(e, c, f), (d = ac(i, d, (p = c) + 1)), (c = -1), (f = 0));
                                      continue;
                                    }
                                    (g(), F(e, p, n));
                                  } else ((u += n), (m = e), (h = p + 1));
                                else F(e, p, n);
                                let a = p + 1;
                                (null !== i && i[d] === a && ((c = a), (f = u), d++), p++);
                              }
                              s && m === e && h === l.length && ((m = e + 1), (h = 0));
                            }
                            let C = 0;
                            for (; C < n.length && !(!s && (C = ai(e, C)) >= n.length);) {
                              let e = n[C],
                                t = ao(l[C]);
                              if (!s) {
                                (e > o && null !== a[C] ? E(C, 0) : v(C, e),
                                  t && ((f = C + 1), (p = u - e)),
                                  C++);
                                continue;
                              }
                              if (u + e > o) {
                                if (t) {
                                  (b(C, e), g(C + 1, 0, u - e), C++);
                                  continue;
                                }
                                if (f >= 0) {
                                  if (m > f || (m === f && h > 0)) {
                                    g();
                                    continue;
                                  }
                                  g(f, 0, p);
                                  continue;
                                }
                                if (e > o && null !== a[C]) {
                                  (g(), E(C, 0), C++);
                                  continue;
                                }
                                g();
                                continue;
                              }
                              (b(C, e), t && ((f = C + 1), (p = u - e)), C++);
                            }
                            s && g();
                          })(e, t);
                        let {
                          widths: n,
                          kinds: l,
                          breakableFitAdvances: a,
                          breakablePreferredBreaks: r,
                          discretionaryHyphenWidth: o,
                          chunks: i
                        } = e;
                        if (0 === n.length || 0 === i.length) return;
                        let u = al(),
                          s = 1 / 0 + u.lineFitEpsilon,
                          d = 0,
                          c = 0,
                          m = !1,
                          h = 0,
                          f = 0,
                          p = 0,
                          g = 0,
                          v = -1,
                          F = 0,
                          b = 0,
                          E = null;
                        function C() {
                          ((v = -1), (F = 0), (b = 0), (E = null));
                        }
                        function S() {
                          let n =
                              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
                            l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g,
                            a = arguments.length > 2 ? arguments[2] : void 0;
                          (d++,
                            void 0 !== t &&
                              t(
                                (null != a
                                  ? a
                                  : "soft-hyphen" === E && v === p && 0 === g
                                    ? b
                                    : c) +
                                  (function (e, t, n, l, a) {
                                    if (0 === e.letterSpacing) return 0;
                                    if (a > 0)
                                      return e.spacingGraphemeCounts[l] > 0 ? e.letterSpacing : 0;
                                    for (let a = l - 1; a >= t; a--) {
                                      let r = e.kinds[a];
                                      if (
                                        "space" !== r &&
                                        "zero-width-break" !== r &&
                                        "hard-break" !== r
                                      ) {
                                        if ("soft-hyphen" === r) {
                                          if (a === l - 1) return 0;
                                          continue;
                                        }
                                        if (a === t && n > 0) return e.letterSpacing;
                                        return e.spacingGraphemeCounts[a] > 0 ? e.letterSpacing : 0;
                                      }
                                    }
                                    return 0;
                                  })(e, h, f, n, l),
                                h,
                                f,
                                n,
                                l
                              ),
                            (c = 0),
                            (m = !1),
                            C());
                        }
                        function y(e, t) {
                          ((m = !0), (h = e), (f = 0), (p = e + 1), (g = 0), (c = t));
                        }
                        function A(e, t, n) {
                          ((m = !0), (h = e), (f = t), (p = e), (g = t + 1), (c = n));
                        }
                        function x(e, t) {
                          m ? ((c += t), (p = e + 1), (g = 0)) : y(e, t);
                        }
                        function M(t, n, l, a, r, o) {
                          if (!n) return;
                          let i = as(e, t, l, r),
                            u = ad(e, t, l, r, a);
                          ((v = l + 1), (F = c - o + i), (b = c - o + u), (E = t));
                        }
                        function N(t, n) {
                          var l;
                          let o = a[t],
                            i = null != (l = r[t]) ? l : null,
                            u = null === i ? -1 : ac(i, 0, n + 1),
                            d = -1,
                            h = 0,
                            f = n;
                          for (; f < o.length;) {
                            let l = o[f];
                            if (m) {
                              let a = 0 !== e.letterSpacing ? l + e.letterSpacing : l,
                                r = c + a;
                              if ((0 === e.letterSpacing ? r : r + e.letterSpacing) > s) {
                                if (null !== i && d > n) {
                                  (S(t, d, h), (u = ac(i, u, (f = d) + 1)), (d = -1), (h = 0));
                                  continue;
                                }
                                (S(), A(t, f, l));
                              } else ((c = r), (p = t), (g = f + 1));
                            } else A(t, f, l);
                            let a = f + 1;
                            (null !== i && i[u] === a && ((d = a), (h = c), u++), f++);
                          }
                          m && p === t && g === o.length && ((p = t + 1), (g = 0));
                        }
                        for (let r = 0; r < i.length; r++) {
                          var w, D, B;
                          let A = i[r];
                          if (A.startSegmentIndex === A.endSegmentIndex) {
                            (d++,
                              null == t ||
                                t(0, A.startSegmentIndex, 0, A.consumedEndSegmentIndex, 0),
                              C());
                            continue;
                          }
                          ((m = !1),
                            (c = 0),
                            (h = A.startSegmentIndex),
                            (f = 0),
                            (p = A.startSegmentIndex),
                            (g = 0),
                            C());
                          let O = A.startSegmentIndex;
                          for (
                            ;
                            O < A.endSegmentIndex &&
                            !(!m && (O = ai(e, O, A.endSegmentIndex)) >= A.endSegmentIndex);
                          ) {
                            let t = l[O],
                              r = ao(t),
                              i =
                                ((w = m),
                                (D = O),
                                0 !== e.letterSpacing && w && e.spacingGraphemeCounts[D] > 0
                                  ? e.letterSpacing
                                  : 0),
                              d =
                                "tab" === t
                                  ? (function (e, t) {
                                      if (t <= 0) return 0;
                                      let n = e % t;
                                      return 1e-6 >= Math.abs(n) ? t : t - n;
                                    })(c + i, e.tabStopAdvance)
                                  : n[O],
                              h = i + d,
                              f =
                                ((B = O),
                                au(
                                  i,
                                  "tab" === t
                                    ? d +
                                        (0 !== e.letterSpacing && e.spacingGraphemeCounts[B] > 0
                                          ? e.letterSpacing
                                          : 0)
                                    : e.lineEndFitAdvances[B]
                                ));
                            if ("soft-hyphen" === t) {
                              (m &&
                                ((p = O + 1),
                                (g = 0),
                                (v = O + 1),
                                (F = c + o),
                                (b = c + o),
                                (E = t)),
                                O++);
                              continue;
                            }
                            if (!m) {
                              (f > s && null !== a[O] ? N(O, 0) : y(O, d),
                                M(t, r, O, d, i, h),
                                O++);
                              continue;
                            }
                            if (c + f > s) {
                              let n = c + as(e, t, O, i),
                                l = c + ad(e, t, O, i, d);
                              if ("soft-hyphen" === E && u.preferEarlySoftHyphenBreak && F <= s) {
                                S(v, 0, b);
                                continue;
                              }
                              if (r && n <= s) {
                                (x(O, h), S(O + 1, 0, l), O++);
                                continue;
                              }
                              if (v >= 0 && F <= s) {
                                if (p > v || (p === v && g > 0)) {
                                  S();
                                  continue;
                                }
                                let e = v;
                                (S(e, 0, b), (O = e));
                                continue;
                              }
                              if (f > s && null !== a[O]) {
                                (S(), N(O, 0), O++);
                                continue;
                              }
                              S();
                              continue;
                            }
                            (x(O, h), M(t, r, O, d, i, h), O++);
                          }
                          if (m) {
                            let e = v === A.consumedEndSegmentIndex ? b : c;
                            S(A.consumedEndSegmentIndex, 0, e);
                          }
                        }
                      })(s, (e) => {
                        e > l && (l = e);
                      }),
                      l);
                  return (ap.size >= 1e3 && ap.clear(), ap.set(n, m), m);
                } catch (e) {
                  return;
                }
              })(e, t)
            : void 0)
          ? n
          : 8 * e.length;
      },
      av = (e) => {
        let { availableWidth: t, columns: n, isSortingEnabled: l, rows: a, textStyles: r } = e,
          o = ((e, t) => {
            let n = e.reduce((e, t) => e + t.preferredWidth, 0);
            if (!t) return e.map((e) => e.preferredWidth);
            if (t >= n) {
              var l;
              let a = e.map((e) => e.preferredWidth),
                r = e.length - 1;
              for (let t = e.length - 1; t >= 0; t -= 1)
                if (null == (l = e[t]) ? void 0 : l.isString) {
                  r = t;
                  break;
                }
              return (r >= 0 && (a[r] += t - n), a);
            }
            let a = Math.max(
                t,
                e.reduce((e, t) => e + t.minimumWidth, 0)
              ),
              r = e.reduce((e, t) => e + (t.isString ? 0 : t.preferredWidth), 0),
              o = e.reduce((e, t) => e + (t.isString ? t.minimumWidth : 0), 0),
              i = a - r;
            return e.map((e) => {
              if (!e.isString) return e.preferredWidth;
              o -= e.minimumWidth;
              let t = Math.min(e.preferredWidth, Math.max(e.minimumWidth, i - o));
              return ((i -= t), t);
            });
          })(
            n.map((e) =>
              ((e, t, n, l) => {
                var a, r;
                let o =
                  ag(
                    "string" == typeof e.cell.header ? e.cell.header : "",
                    null == l ? void 0 : l.header
                  ) +
                  (null != (a = null == l ? void 0 : l.header.horizontalPadding) ? a : 48) +
                  (n && "value" === e.cell.type && !1 !== e.cell.sortable ? 24 : 0);
                if ("display" === e.cell.type) {
                  let e = Math.max(96, Math.ceil(o));
                  return { isString: !1, minimumWidth: e, preferredWidth: e };
                }
                let i = Math.ceil(
                    Math.max(
                      o,
                      t.reduce((t, n) => {
                        var a;
                        let r = n[e.id];
                        return "display" === r.type
                          ? t
                          : Math.max(
                              t,
                              ag(
                                (null != (a = r.displayString) ? a : (e) => String(e))(r.value),
                                null == l ? void 0 : l.cell
                              )
                            );
                      }, 0) + (null != (r = null == l ? void 0 : l.cell.horizontalPadding) ? r : 48)
                    )
                  ),
                  u = "string" == typeof e.cell.value,
                  s = Math.max(128, i);
                return u
                  ? { isString: u, minimumWidth: 128, preferredWidth: Math.min(640, s) }
                  : { isString: u, minimumWidth: s, preferredWidth: s };
              })(e, a, l, r)
            ),
            t
          );
        return {
          gridTemplateColumns:
            0 === o.length ? "minmax(100%, 1fr)" : o.map((e) => "".concat(e, "px")).join(" "),
          tableWidth: o.reduce((e, t) => e + t, 0)
        };
      },
      aF = Symbol("AdaptiveDataTableExpandedRows");
    function ab(e, t) {
      let n;
      return null == e
        ? null
        : ("function" == typeof e &&
              (n = Object.getPrototypeOf(e)).prototype &&
              n.prototype.isReactComponent) ||
            "function" == typeof e ||
            ("object" == typeof e &&
              "symbol" == typeof e.$$typeof &&
              ["react.memo", "react.forward_ref"].includes(e.$$typeof.description))
          ? u.default.createElement(e, t)
          : e;
    }
    function aE(e) {
      if ("cell" in e && e.cell) {
        var t, n, l;
        let a = e.cell,
          r = a.column.columnDef;
        return (null == (n = a.getIsAggregated) ? void 0 : n.call(a))
          ? ab(null != (t = r.aggregatedCell) ? t : r.cell, a.getContext())
          : (null == (l = a.getIsPlaceholder) ? void 0 : l.call(a))
            ? null
            : ab(r.cell, a.getContext());
      }
      return "header" in e && e.header
        ? ab(e.header.column.columnDef.header, e.header.getContext())
        : "footer" in e && e.footer
          ? ab(e.footer.column.columnDef.footer, e.footer.getContext())
          : null;
    }
    let aC = [],
      aS = 0,
      {
        link: ay,
        unlink: aA,
        propagate: ax,
        checkDirty: aM,
        shallowPropagate: aN
      } = (function (e) {
        let { update: t, notify: n, unwatched: l } = e;
        return {
          link: function (e, t, n) {
            let l = t.depsTail;
            if (void 0 !== l && l.dep === e) return;
            let a = void 0 !== l ? l.nextDep : t.deps;
            if (void 0 !== a && a.dep === e) {
              ((a.version = n), (t.depsTail = a));
              return;
            }
            let r = e.subsTail;
            if (void 0 !== r && r.version === n && r.sub === t) return;
            let o =
              (t.depsTail =
              e.subsTail =
                {
                  version: n,
                  dep: e,
                  sub: t,
                  prevDep: l,
                  nextDep: a,
                  prevSub: r,
                  nextSub: void 0
                });
            (void 0 !== a && (a.prevDep = o),
              void 0 !== l ? (l.nextDep = o) : (t.deps = o),
              void 0 !== r ? (r.nextSub = o) : (e.subs = o));
          },
          unlink: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.sub,
              n = e.dep,
              a = e.prevDep,
              r = e.nextDep,
              o = e.nextSub,
              i = e.prevSub;
            return (
              void 0 !== r ? (r.prevDep = a) : (t.depsTail = a),
              void 0 !== a ? (a.nextDep = r) : (t.deps = r),
              void 0 !== o ? (o.prevSub = i) : (n.subsTail = i),
              void 0 !== i ? (i.nextSub = o) : void 0 === (n.subs = o) && l(n),
              r
            );
          },
          propagate: function (e) {
            let t,
              l = e.nextSub;
            e: for (;;) {
              let a = e.sub,
                r = a.flags;
              if (
                (60 & r
                  ? 12 & r
                    ? 4 & r
                      ? !(48 & r) &&
                        (function (e, t) {
                          let n = t.depsTail;
                          for (; void 0 !== n;) {
                            if (n === e) return !0;
                            n = n.prevDep;
                          }
                          return !1;
                        })(e, a)
                        ? ((a.flags = 40 | r), (r &= 1))
                        : (r = 0)
                      : (a.flags = (-9 & r) | 32)
                    : (r = 0)
                  : (a.flags = 32 | r),
                2 & r && n(a),
                1 & r)
              ) {
                let n = a.subs;
                if (void 0 !== n) {
                  let a = (e = n).nextSub;
                  void 0 !== a && ((t = { value: l, prev: t }), (l = a));
                  continue;
                }
              }
              if (void 0 !== (e = l)) {
                l = e.nextSub;
                continue;
              }
              for (; void 0 !== t;)
                if (((e = t.value), (t = t.prev), void 0 !== e)) {
                  l = e.nextSub;
                  continue e;
                }
              break;
            }
          },
          checkDirty: function (e, n) {
            let l,
              r = 0,
              o = !1;
            e: for (;;) {
              let i = e.dep,
                u = i.flags;
              if (16 & n.flags) o = !0;
              else if ((17 & u) == 17) {
                if (t(i)) {
                  let e = i.subs;
                  (void 0 !== e.nextSub && a(e), (o = !0));
                }
              } else if ((33 & u) == 33) {
                ((void 0 !== e.nextSub || void 0 !== e.prevSub) && (l = { value: e, prev: l }),
                  (e = i.deps),
                  (n = i),
                  ++r);
                continue;
              }
              if (!o) {
                let t = e.nextDep;
                if (void 0 !== t) {
                  e = t;
                  continue;
                }
              }
              for (; r--;) {
                let r = n.subs,
                  i = void 0 !== r.nextSub;
                if ((i ? ((e = l.value), (l = l.prev)) : (e = r), o)) {
                  if (t(n)) {
                    (i && a(r), (n = e.sub));
                    continue;
                  }
                  o = !1;
                } else n.flags &= -33;
                n = e.sub;
                let u = e.nextDep;
                if (void 0 !== u) {
                  e = u;
                  continue e;
                }
              }
              return o;
            }
          },
          shallowPropagate: a
        };
        function a(e) {
          do {
            let t = e.sub,
              l = t.flags;
            (48 & l) == 32 && ((t.flags = 16 | l), (6 & l) == 2 && n(t));
          } while (void 0 !== (e = e.nextSub));
        }
      })({
        update: (e) => e._update(),
        notify(e) {
          ((aC[aD++] = e), (e.flags &= -3));
        },
        unwatched(e) {
          void 0 !== e.depsTail && ((e.depsTail = void 0), (e.flags = 17), aL(e));
        }
      }),
      aw = 0,
      aD = 0,
      aB = 0;
    function aO(e) {
      try {
        (++aB, e());
      } finally {
        --aB || ak();
      }
    }
    function aL(e) {
      let t = e.depsTail,
        n = void 0 !== t ? t.nextDep : e.deps;
      for (; void 0 !== n;) n = aA(n, e);
    }
    function ak() {
      if (!(aB > 0)) {
        for (; aw < aD;) {
          let e = aC[aw];
          ((aC[aw++] = void 0), e.notify());
        }
        ((aw = 0), (aD = 0));
      }
    }
    function aT(e, t) {
      let n = "function" == typeof e,
        l = {
          _snapshot: n ? void 0 : e,
          subs: void 0,
          subsTail: void 0,
          deps: void 0,
          depsTail: void 0,
          flags: +!n,
          get: () => (void 0 !== r && ay(l, r, aS), l._snapshot),
          subscribe(e) {
            var t, n, a, o;
            let i,
              u,
              s,
              d,
              c =
                ((d = (s = "object" == typeof e) ? e : void 0),
                {
                  next: null == (t = s ? e.next : e) ? void 0 : t.bind(d),
                  error: null == (n = s ? e.error : void 0) ? void 0 : n.bind(d),
                  complete: null == (a = s ? e.complete : void 0) ? void 0 : a.bind(d)
                }),
              m = { current: !1 },
              h =
                ((o = () => {
                  var e;
                  (l.get(),
                    m.current ? null == (e = c.next) || e.call(c, l._snapshot) : (m.current = !0));
                }),
                (i = () => {
                  let e = r;
                  ((r = u), ++aS, (u.depsTail = void 0), (u.flags = 6));
                  try {
                    return o();
                  } finally {
                    ((r = e), (u.flags &= -5), aL(u));
                  }
                }),
                (u = {
                  deps: void 0,
                  depsTail: void 0,
                  subs: void 0,
                  subsTail: void 0,
                  flags: 6,
                  notify() {
                    let e = this.flags;
                    16 & e || (32 & e && aM(this.deps, this)) ? i() : (this.flags = 2);
                  },
                  stop() {
                    ((this.flags = 0), (this.depsTail = void 0), aL(this));
                  }
                }),
                i(),
                u);
            return {
              unsubscribe: () => {
                h.stop();
              }
            };
          },
          _update(a) {
            var o;
            let i = r,
              u = null != (o = null == t ? void 0 : t.compare) ? o : Object.is;
            if (n) ((r = l), ++aS, (l.depsTail = void 0));
            else if (void 0 === a) return !1;
            n && (l.flags = 5);
            try {
              let t = l._snapshot,
                r = "function" == typeof a ? a(t) : void 0 === a && n ? e(t) : a;
              if (void 0 === t || !u(t, r)) return ((l._snapshot = r), !0);
              return !1;
            } finally {
              ((r = i), n && (l.flags &= -5), aL(l));
            }
          }
        };
      return (
        n
          ? ((l.flags = 17),
            (l.get = function () {
              let e = l.flags;
              if (16 & e || (32 & e && aM(l.deps, l))) {
                if (l._update()) {
                  let e = l.subs;
                  void 0 !== e && aN(e);
                }
              } else 32 & e && (l.flags = -33 & e);
              return (void 0 !== r && ay(l, r, aS), l._snapshot);
            }))
          : (l.set = function (e) {
              if (l._update(e)) {
                let e = l.subs;
                void 0 !== e && (ax(e), aN(e), ak());
              }
            }),
        l
      );
    }
    function aR(e, t) {
      if (Object.is(e, t)) return !0;
      if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
      if (e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return !1;
        for (let [n, l] of e) if (!t.has(n) || !Object.is(l, t.get(n))) return !1;
        return !0;
      }
      if (e instanceof Set && t instanceof Set) {
        if (e.size !== t.size) return !1;
        for (let n of e) if (!t.has(n)) return !1;
        return !0;
      }
      if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
      let n = aI(e);
      if (n.length !== aI(t).length) return !1;
      for (let l = 0; l < n.length; l++)
        if (!Object.prototype.hasOwnProperty.call(t, n[l]) || !Object.is(e[n[l]], t[n[l]]))
          return !1;
      return !0;
    }
    function aI(e) {
      return Object.keys(e).concat(Object.getOwnPropertySymbols(e));
    }
    var aP = { exports: {} },
      az = {},
      a_ = { exports: {} },
      aW = {},
      aj =
        (tF ||
          ((tF = 1),
          (aP.exports = (function () {
            if (tv) return az;
            tv = 1;
            var e =
                (tg ||
                  ((tg = 1),
                  (a_.exports = (function () {
                    if (tp) return aW;
                    tp = 1;
                    var e =
                        "function" == typeof Object.is
                          ? Object.is
                          : function (e, t) {
                              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                            },
                      t = u.default.useState,
                      n = u.default.useEffect,
                      l = u.default.useLayoutEffect,
                      a = u.default.useDebugValue;
                    function r(t) {
                      var n = t.getSnapshot;
                      t = t.value;
                      try {
                        var l = n();
                        return !e(t, l);
                      } catch (e) {
                        return !0;
                      }
                    }
                    var o =
                      void 0 === window.document || void 0 === window.document.createElement
                        ? function (e, t) {
                            return t();
                          }
                        : function (e, o) {
                            var i = o(),
                              u = t({ inst: { value: i, getSnapshot: o } }),
                              s = u[0].inst,
                              d = u[1];
                            return (
                              l(
                                function () {
                                  ((s.value = i), (s.getSnapshot = o), r(s) && d({ inst: s }));
                                },
                                [e, i, o]
                              ),
                              n(
                                function () {
                                  return (
                                    r(s) && d({ inst: s }),
                                    e(function () {
                                      r(s) && d({ inst: s });
                                    })
                                  );
                                },
                                [e]
                              ),
                              a(i),
                              i
                            );
                          };
                    return (
                      (aW.useSyncExternalStore =
                        void 0 !== u.default.useSyncExternalStore
                          ? u.default.useSyncExternalStore
                          : o),
                      aW
                    );
                  })())),
                a_.exports),
              t =
                "function" == typeof Object.is
                  ? Object.is
                  : function (e, t) {
                      return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                    },
              n = e.useSyncExternalStore,
              l = u.default.useRef,
              a = u.default.useEffect,
              r = u.default.useMemo,
              o = u.default.useDebugValue;
            return (
              (az.useSyncExternalStoreWithSelector = function (e, i, u, s, d) {
                var c = l(null);
                if (null === c.current) {
                  var m = { hasValue: !1, value: null };
                  c.current = m;
                } else m = c.current;
                var h = n(
                  e,
                  (c = r(
                    function () {
                      function e(e) {
                        if (!a) {
                          if (((a = !0), (n = e), (e = s(e)), void 0 !== d && m.hasValue)) {
                            var r = m.value;
                            if (d(r, e)) return (l = r);
                          }
                          return (l = e);
                        }
                        if (((r = l), t(n, e))) return r;
                        var o = s(e);
                        return void 0 !== d && d(r, o) ? ((n = e), r) : ((n = e), (l = o));
                      }
                      var n,
                        l,
                        a = !1,
                        r = void 0 === u ? null : u;
                      return [
                        function () {
                          return e(i());
                        },
                        null === r
                          ? void 0
                          : function () {
                              return e(r());
                            }
                      ];
                    },
                    [i, u, s, d]
                  ))[0],
                  c[1]
                );
                return (
                  a(
                    function () {
                      ((m.hasValue = !0), (m.value = h));
                    },
                    [h]
                  ),
                  o(h),
                  h
                );
              }),
              az
            );
          })())),
        aP.exports);
    function aH(e, t) {
      return e === t;
    }
    function aV(e) {
      var t;
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e) => e,
        l = arguments.length > 2 ? arguments[2] : void 0,
        a = null != (t = null == l ? void 0 : l.compare) ? t : aH,
        r = (0, u.useCallback)(
          (t) => {
            let { unsubscribe: n } = e.subscribe(t);
            return n;
          },
          [e]
        ),
        o = (0, u.useCallback)(() => e.get(), [e]);
      return aj.useSyncExternalStoreWithSelector(r, o, o, n, a);
    }
    function aX(e, t) {
      return "function" == typeof e ? e(t) : e;
    }
    function aG(e) {
      if (Array.isArray(e)) return e.map(aG);
      if (e && "object" == typeof e) {
        let t = Object.getPrototypeOf(e);
        if (t !== Object.prototype && null !== t) return e;
        let n = null === t ? aU() : {},
          l = Object.keys(e);
        for (let t = 0; t < l.length; t++) {
          let a = l[t];
          Object.defineProperty(n, a, {
            configurable: !0,
            enumerable: !0,
            value: aG(e[a]),
            writable: !0
          });
        }
        return n;
      }
      return e;
    }
    function aU() {
      return Object.create(null);
    }
    function aK(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function aY(e, t) {
      return (n) => {
        var l, a;
        (null != (l = null == (a = t.options.atoms) ? void 0 : a[e]) ? l : t.baseAtoms[e]).set(
          (e) => aX(n, e)
        );
      };
    }
    function aq(e) {
      if ("object" != typeof e || null === e) return !1;
      if (Array.isArray(e)) return !0;
      let t = Object.getPrototypeOf(e);
      return t === Object.prototype || null === t;
    }
    function aQ(e) {
      return Reflect.ownKeys(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
    }
    function aZ(e, t) {
      return (function e(t, n, l) {
        if (Object.is(t, n)) return !0;
        if (
          l <= 0 ||
          !aq(t) ||
          !aq(n) ||
          ((Array.isArray(t) || Array.isArray(n)) &&
            (!Array.isArray(t) || !Array.isArray(n) || t.length !== n.length))
        )
          return !1;
        let a = aQ(t),
          r = aQ(n);
        if (a.length !== r.length) return !1;
        for (let r = 0; r < a.length; r++) {
          let o = a[r];
          if (!Object.prototype.propertyIsEnumerable.call(n, o) || !e(t[o], n[o], l - 1)) return !1;
        }
        return !0;
      })(e, t, 3);
    }
    function aJ(e, t, n) {
      let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : aZ,
        a = "on".concat(t.charAt(0).toUpperCase()).concat(t.slice(1), "Change"),
        r = e.options[a];
      r &&
        r((e) => {
          let t = aX(n, e);
          return l(e, t) ? e : t;
        });
    }
    function a$(e) {
      let { feature: t, fnName: n, objectId: l, onAfterUpdate: a, table: r, ...o } = e;
      return ((e) => {
        let {
            fn: t,
            memoDeps: n,
            onAfterCompare: l,
            onAfterUpdate: a,
            onBeforeCompare: r,
            onBeforeUpdate: o
          } = e,
          i,
          u = [];
        return (e) => {
          null == r || r();
          let s = null == n ? void 0 : n(e),
            d = !s || s.length !== (null == u ? void 0 : u.length);
          if (!d && s) {
            for (let e = 0; e < s.length; e++)
              if (s[e] !== u[e]) {
                d = !0;
                break;
              }
          }
          return (
            null == l || l(d),
            d && ((u = s), null == o || o(), (i = t(...(null != s ? s : []))), null == a || a(i)),
            i
          );
        };
      })({
        ...o,
        onAfterUpdate: () => {
          (() => {
            if (!a) return;
            let { schedule: e, untrack: t } = r._reactivity;
            e(() => t(() => a()));
          })();
        }
      });
    }
    function a0(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "_",
        [n, l] = e.split(t);
      return { fnKey: l, fnName: "".concat(n, ".").concat(l), parentName: n };
    }
    function a1(e, t, n) {
      for (let [l, { fn: a, memoDeps: r }] of Object.entries(n)) {
        let { fnKey: n, fnName: o } = a0(l);
        t[n] = r ? a$({ memoDeps: r, fn: a, fnName: o, table: t, feature: e }) : a;
      }
    }
    function a2(e, t, n, l) {
      for (let [a, { fn: r, memoDeps: o }] of Object.entries(l)) {
        let { fnKey: l, fnName: i } = a0(a);
        if (o) {
          let a = "_memo_".concat(l);
          t[l] = function () {
            for (var t = arguments.length, l = Array(t), u = 0; u < t; u++) l[u] = arguments[u];
            if (!this[a]) {
              let t = this;
              this[a] = a$({
                memoDeps: (e) => o(t, e),
                fn: function () {
                  for (var e = arguments.length, n = Array(e), l = 0; l < e; l++)
                    n[l] = arguments[l];
                  return r(t, ...n);
                },
                fnName: i,
                objectId: t.id,
                table: n,
                feature: e
              });
            }
            return this[a](...l);
          };
        } else
          t[l] = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return r(this, ...t);
          };
      }
    }
    function a6(e, t, n) {
      for (var l, a, r = arguments.length, o = Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++)
        o[i - 3] = arguments[i];
      return null != (l = null == (a = e[t]) ? void 0 : a.call(e, ...o)) ? l : n(e, ...o);
    }
    function a3(e, t, n) {
      var l;
      let a = Object.create(
        (function (e) {
          if (!e._headerPrototype) {
            var t, n;
            e._headerPrototype = { table: e };
            let l = Object.values(e._features);
            for (let a = 0; a < l.length; a++)
              null == (t = (n = l[a]).assignHeaderPrototype) || t.call(n, e._headerPrototype, e);
          }
          return e._headerPrototype;
        })(e)
      );
      ((a.colSpan = 0),
        (a.column = t),
        (a.depth = n.depth),
        (a.headerGroup = null),
        (a.id = null != (l = n.id) ? l : t.id),
        (a.index = n.index),
        (a.isPlaceholder = !!n.isPlaceholder),
        (a.placeholderId = n.placeholderId),
        (a.rowSpan = 0),
        (a.subHeaders = []));
      let r = e._headerInstanceInitFns;
      for (let e = 0; e < r.length; e++) r[e](a);
      return a;
    }
    function a4() {
      return { start: [], end: [] };
    }
    function a5(e, t) {
      a9(e) &&
        rt(e.table, (n) => {
          let l = Object.assign(aU(), n),
            a = null != t ? t : !a6(e, "getIsVisible", a7),
            r = e.getLeafColumns();
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            a9(t) && (l[t.id] = a);
          }
          return l;
        });
    }
    function a7(e) {
      var t, n;
      let l = null == (n = e.table.atoms.columnVisibility) ? void 0 : n.get();
      if (!l) return !0;
      let a = e.columns;
      return a.length
        ? a.some((e) => a6(e, "getIsVisible", a7))
        : null == (t = aK(l, e.id) ? l[e.id] : void 0) || t;
    }
    function a9(e) {
      var t, n;
      return (
        (null == (t = e.columnDef.enableHiding) || t) &&
        (null == (n = e.table.options.enableHiding) || n)
      );
    }
    function a8(e) {
      let t = aU(),
        n = e.getAllCells();
      for (let e = 0; e < n.length; e++) {
        let l = n[e];
        a6(l.column, "getIsVisible", a7) && (t[l.column.id] = l);
      }
      return t;
    }
    function re(e) {
      return e.getAllLeafColumns().filter((e) => a6(e, "getIsVisible", a7));
    }
    function rt(e, t) {
      aJ(e, "columnVisibility", t);
    }
    function rn(e, t) {
      t = null != t ? t : !rl(e);
      let n = aU(),
        l = e.getAllLeafColumns();
      for (let e = 0; e < l.length; e++) {
        let a = l[e];
        n[a.id] = t || !a9(a);
      }
      rt(e, n);
    }
    function rl(e) {
      return !e.getAllLeafColumns().some((e) => !a6(e, "getIsVisible", a7));
    }
    function ra(e, t, n, l) {
      var a, r;
      let o = (function e(t) {
          let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            l = n;
          for (let a = 0; a < t.length; a++) {
            let r = t[a];
            a6(r, "getIsVisible", a7) && r.columns.length && (l = Math.max(l, e(r.columns, n + 1)));
          }
          return l;
        })(e),
        i = [],
        u = n._headerGroupInstanceInitFns,
        s = Array(t.length);
      for (let e = 0; e < t.length; e++) e in t && (s[e] = a3(n, t[e], { depth: o, index: e }));
      return (
        !(function e(t, n, l, a, r, o) {
          let i = { depth: n, id: String(n), headers: [] },
            u = [];
          for (let e = 0; e < t.length; e++) {
            let r;
            if (!(e in t)) continue;
            let o = t[e],
              s = u[u.length - 1],
              d = o.column.depth === i.depth,
              c = !1;
            if (
              (d && o.column.parent ? (r = o.column.parent) : ((r = o.column), (c = !0)),
              s && s.column === r)
            )
              s.subHeaders.push(o);
            else {
              let e = a3(l, r, {
                id: (function (e, t, n, l) {
                  let a = null != e ? e : "";
                  return (
                    t && (a = a ? "".concat(a, "_").concat(t) : String(t)),
                    n && (a = a ? "".concat(a, "_").concat(n) : n),
                    l && (a = a ? "".concat(a, "_").concat(l) : l),
                    a
                  );
                })(a, n, r.id, o.id),
                isPlaceholder: c,
                placeholderId: c
                  ? String(
                      (function (e, t) {
                        let n = 0;
                        for (let l = 0; l < e.length; l++) e[l].column === t && n++;
                        return n;
                      })(u, r)
                    )
                  : void 0,
                depth: n,
                index: u.length
              });
              (e.subHeaders.push(o), u.push(e));
            }
            (i.headers.push(o), (o.headerGroup = i));
          }
          for (let e = 0; e < o.length; e++) o[e](i);
          (r.push(i), n > 0 && e(u, n - 1, l, a, r, o));
        })(s, o - 1, n, l, i, u),
        i.reverse(),
        !(function e(t) {
          for (let n = 0; n < t.length; n++) {
            let l = t[n];
            if (!a6(l.column, "getIsVisible", a7)) continue;
            let a = 0;
            if (l.subHeaders.length) {
              e(l.subHeaders);
              for (let e = 0; e < l.subHeaders.length; e++) {
                let t = l.subHeaders[e];
                a6(t.column, "getIsVisible", a7) && (a += t.colSpan);
              }
            } else a = 1;
            if (
              ((l.colSpan = a),
              l.isPlaceholder && 1 === l.subHeaders.length && l.subHeaders[0].column === l.column)
            ) {
              let e = 1,
                t = l.subHeaders[0];
              for (; t;)
                ((t.rowSpan = 0),
                  e++,
                  (t =
                    1 === t.subHeaders.length && t.subHeaders[0].column === l.column
                      ? t.subHeaders[0]
                      : void 0));
              l.rowSpan = e;
            } else l.rowSpan = 1;
          }
        })(null != (a = null == (r = i[0]) ? void 0 : r.headers) ? a : []),
        i
      );
    }
    function rr(e) {
      var t;
      let n = null == (t = e.atoms.columnOrder) ? void 0 : t.get();
      return (t) => {
        let l = [];
        if (null == n ? void 0 : n.length) {
          let e = new Map();
          for (let n = 0; n < t.length; n++) {
            let l = t[n];
            e.set(l.id, l);
          }
          for (let t = 0; t < n.length; t++) {
            let a = n[t],
              r = e.get(a);
            r && (l.push(r), e.delete(a));
          }
          for (let n = 0; n < t.length; n++) {
            let a = t[n];
            e.has(a.id) && l.push(a);
          }
        } else l = t;
        return (function (e, t) {
          var n, l;
          let a = null != (n = null == (l = e.atoms.grouping) ? void 0 : l.get()) ? n : [],
            { groupedColumnMode: r } = e.options;
          if (!a.length || !r) return t;
          let o = t.filter((e) => !a.includes(e.id));
          if ("remove" === r) return o;
          let i = new Map();
          for (let e = 0; e < t.length; e++) {
            let n = t[e];
            i.set(n.id, n);
          }
          let u = [];
          for (let e = 0; e < a.length; e++) {
            let t = i.get(a[e]);
            t && u.push(t);
          }
          return [...u, ...o];
        })(e, l);
      };
    }
    let ro = (e, t, n, l, a, r, o) => {
        let i = Object.create(
          (function (e) {
            if (!e._rowPrototype) {
              var t, n;
              e._rowPrototype = { table: e };
              let l = Object.values(e._features);
              for (let a = 0; a < l.length; a++)
                null == (t = (n = l[a]).assignRowPrototype) || t.call(n, e._rowPrototype, e);
            }
            return e._rowPrototype;
          })(e)
        );
        ((i._displayIndexCache = -1),
          (i._uniqueValuesCache = aU()),
          (i._valuesCache = aU()),
          (i.depth = a),
          (i.id = t),
          (i.index = l),
          (i.original = n),
          (i.parentId = o),
          (i.subRows = []));
        let u = e._rowInstanceInitFns;
        for (let e = 0; e < u.length; e++) u[e](i);
        return i;
      },
      ri = /([0-9]+)/gm;
    function ru(e) {
      let t = Object.assign((e, n, l) => {
        let a = e.getValue(l),
          r = n.getValue(l),
          o = t.resolveDataValue;
        return (o && ((a = o(a)), (r = o(r))), t.sort(a, r, e, n, l));
      }, e);
      return t;
    }
    (ru({ resolveDataValue: (e) => rc(e).toLowerCase(), sort: (e, t) => rm(e, t) }),
      ru({ resolveDataValue: (e) => rc(e), sort: (e, t) => rm(e, t) }),
      ru({ resolveDataValue: (e) => rc(e).toLowerCase(), sort: (e, t) => rd(e, t) }),
      ru({ resolveDataValue: (e) => rc(e), sort: (e, t) => rd(e, t) }),
      ru({
        resolveDataValue: (e) => (e instanceof Date ? e.getTime() : e),
        sort: (e, t) => (e > t ? 1 : e < t ? -1 : 0)
      }));
    let rs = ru({ sort: (e, t) => rd(e, t) });
    function rd(e, t) {
      return e === t ? 0 : e > t ? 1 : -1;
    }
    function rc(e) {
      return "number" == typeof e
        ? isNaN(e) || 1 / 0 === e || -1 / 0 === e
          ? ""
          : String(e)
        : "string" == typeof e
          ? e
          : "";
    }
    function rm(e, t) {
      let n = 0,
        l = 0,
        a = e.length,
        r = t.length;
      for (; n < a && l < r;) {
        let a = rh(e.charCodeAt(n)),
          r = rh(t.charCodeAt(l)),
          o = rf(e, n, a),
          i = rf(t, l, r);
        if (!a && !r) {
          let a = (function (e, t, n, l, a, r) {
            let o = n - t,
              i = r - a,
              u = o < i ? o : i;
            for (let n = 0; n < u; n++) {
              let r = e.charCodeAt(t + n),
                o = l.charCodeAt(a + n);
              if (r > o) return 1;
              if (o > r) return -1;
            }
            return o > i ? 1 : i > o ? -1 : 0;
          })(e, n, o, t, l, i);
          if (a) return a;
          ((n = o), (l = i));
          continue;
        }
        if (a !== r) return a ? 1 : -1;
        let u = (function (e, t, n, l, a, r) {
          let o = t;
          for (; o < n && 48 === e.charCodeAt(o);) o++;
          let i = a;
          for (; i < r && 48 === l.charCodeAt(i);) i++;
          let u = n - o,
            s = r - i;
          if (0 === u && 0 === s) return 0;
          if (u <= 15 && s <= 15) {
            let t = rp(e, o, n),
              a = rp(l, i, r);
            return t > a ? 1 : a > t ? -1 : 0;
          }
          let d = parseInt(e.slice(t, n), 10),
            c = parseInt(l.slice(a, r), 10);
          return d > c ? 1 : c > d ? -1 : 0;
        })(e, n, o, t, l, i);
        if (u) return u;
        ((n = o), (l = i));
      }
      return rg(e, n) - rg(t, l);
    }
    function rh(e) {
      return e >= 48 && e <= 57;
    }
    function rf(e, t, n) {
      let l = t + 1;
      for (; l < e.length && rh(e.charCodeAt(l)) === n;) l++;
      return l;
    }
    function rp(e, t, n) {
      let l = 0;
      for (let a = t; a < n; a++) l = 10 * l + e.charCodeAt(a) - 48;
      return l;
    }
    function rg(e, t) {
      let n = 0,
        l = t;
      for (; l < e.length;) (n++, (l = rf(e, l, rh(e.charCodeAt(l)))));
      return n;
    }
    function rv(e) {
      var t, n;
      e.atoms.expanded &&
        (null != (t = null != (n = e.options.autoResetAll) ? n : e.options.autoResetExpanded)
          ? t
          : !e.options.manualExpanding) &&
        e._reactivity.schedule(() => rE(e));
    }
    function rF(e, t) {
      var n, l;
      null == (n = (l = e.options).onExpandedChange) || n.call(l, t);
    }
    function rb(e, t) {
      var n, l;
      let a = null != (n = null == (l = e.atoms.expanded) ? void 0 : l.get()) ? n : {};
      if (null != t ? t : !rS(e)) {
        if (!0 === a || !rC(e)) return;
        rF(e, !0);
      } else {
        if (!0 !== a && !Object.keys(a).length) return;
        rF(e, aU());
      }
    }
    function rE(e, t) {
      let n = e.initialState.expanded;
      aJ(e, "expanded", t ? aU() : !0 === n || Object.assign(aU(), aG(null != n ? n : {})));
    }
    function rC(e) {
      return e.getPrePaginatedRowModel().flatRows.some((e) => rM(e));
    }
    function rS(e) {
      var t, n;
      let l = null != (t = null == (n = e.atoms.expanded) ? void 0 : n.get()) ? t : {};
      if (!0 === l) return !0;
      if (!Object.keys(l).length) return !1;
      let a = e.getRowModel().flatRows.filter((e) => rM(e));
      return !(!a.length || a.some((e) => !rA(e)));
    }
    function ry(e, t) {
      var n, l;
      let a = null != (n = null == (l = e.table.atoms.expanded) ? void 0 : l.get()) ? n : {},
        r = !0 === a || rx(a, e.id),
        o = null != t ? t : !r;
      o === r ||
        ((!o || rM(e)) &&
          rF(e.table, (t) => {
            let n = !0 === t || rx(t, e.id),
              l = aU();
            if (
              (!0 === t
                ? Object.values(e.table.getRowModel().rowsById).forEach((e) => {
                    rM(e) && (l[e.id] = !0);
                  })
                : (l = Object.assign(aU(), t)),
              !n && o)
            )
              return ((l[e.id] = !0), l);
            if (n && !o) {
              let t = aU(),
                n = Object.keys(l);
              for (let a = 0; a < n.length; a++) {
                let r = n[a];
                r !== e.id && l[r] && (t[r] = !0);
              }
              return t;
            }
            return t;
          }));
    }
    function rA(e) {
      var t, n, l, a, r;
      let o = null != (t = null == (l = e.table.atoms.expanded) ? void 0 : l.get()) ? t : {};
      return !!(null !=
      (n = null == (a = (r = e.table.options).getIsRowExpanded) ? void 0 : a.call(r, e))
        ? n
        : !0 === o || rx(o, e.id));
    }
    function rx(e, t) {
      return !!(e && !0 !== e && aK(e, t) && e[t]);
    }
    function rM(e) {
      var t, n, l, a;
      return null !=
        (t = null == (l = (a = e.table.options).getRowCanExpand) ? void 0 : l.call(a, e))
        ? t
        : (null == (n = e.table.options.enableExpanding) || n) && !!e.subRows.length;
    }
    function rN(e, t) {
      aJ(e, "sorting", t);
    }
    function rw(e, t) {
      var n;
      rN(e, t ? [] : aG(null != (n = e.initialState.sorting) ? n : []));
    }
    function rD(e) {
      let t,
        n = e.table._rowModelFns.sortFns,
        l = e.table.getFilteredRowModel().flatRows.slice(0, 10),
        a = !1;
      for (let n = 0; n < l.length; n++) {
        let r = l[n].getValue(e.id);
        if ("[object Date]" === Object.prototype.toString.call(r)) {
          t = "datetime";
          break;
        }
        if ("string" == typeof r && ((a = !0), r.split(ri).length > 1)) {
          t = "alphanumeric";
          break;
        }
      }
      if ((!t && a && (t = "text"), t)) {
        let e = null == n ? void 0 : n[t];
        if ((e || ("alphanumeric" === t && (e = null == n ? void 0 : n.text)), e)) return e;
      }
      return rs;
    }
    function rB(e) {
      let t = e.table.getFilteredRowModel().flatRows.slice(0, 10);
      for (let n = 0; n < t.length; n++) {
        let l = t[n].getValue(e.id);
        if (null != l) return "string" == typeof l ? "asc" : "desc";
      }
      return "desc";
    }
    function rO(e, t, n) {
      let l = rk(e, n && rR(e)),
        a = void 0 !== t;
      rN(e.table, (r) => {
        var o;
        let i,
          u = r.findIndex((t) => t.id === e.id),
          s = -1 === u ? void 0 : r[u],
          d = [],
          c = a ? t : "desc" === l,
          m = !!(r.length && rR(e) && n);
        return (
          "toggle" != (i = m ? (s ? "toggle" : "add") : s ? "toggle" : "replace") ||
            a ||
            l ||
            (i = "remove"),
          "add" === i
            ? (d = [...r, { id: e.id, desc: c }]).splice(
                0,
                d.length -
                  (null != (o = e.table.options.maxMultiSortColCount) ? o : Number.MAX_SAFE_INTEGER)
              )
            : (d =
                "toggle" === i
                  ? m
                    ? r.map((t) => (t.id === e.id ? { ...t, desc: c } : t))
                    : [{ id: e.id, desc: c }]
                  : "remove" === i
                    ? m
                      ? r.filter((t) => t.id !== e.id)
                      : []
                    : [{ id: e.id, desc: c }]),
          d
        );
      });
    }
    function rL(e) {
      var t, n;
      return (
        null != (t = null != (n = e.columnDef.sortDescFirst) ? n : e.table.options.sortDescFirst)
          ? t
          : "desc" === rB(e)
      )
        ? "desc"
        : "asc";
    }
    function rk(e, t) {
      var n, l;
      let a = rL(e),
        r = rI(e);
      return r
        ? (r === a ||
            !(null == (n = e.table.options.enableSortingRemoval) || n) ||
            (!!t && !(null == (l = e.table.options.enableMultiRemove) || l))) &&
            ("desc" === r ? "asc" : "desc")
        : a;
    }
    function rT(e) {
      var t, n;
      return (
        (null == (t = e.columnDef.enableSorting) || t) &&
        (null == (n = e.table.options.enableSorting) || n) &&
        !!e.accessorFn
      );
    }
    function rR(e) {
      var t, n;
      return null !=
        (t = null != (n = e.columnDef.enableMultiSort) ? n : e.table.options.enableMultiSort)
        ? t
        : !!e.accessorFn;
    }
    function rI(e) {
      var t, n;
      let l =
        null == (n = e.table.atoms.sorting) || null == (t = n.get())
          ? void 0
          : t.find((t) => t.id === e.id);
      return !!l && (l.desc ? "desc" : "asc");
    }
    function rP(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e, t) => e === t,
        l = void 0 === t ? e.options.state : t;
      e._reactivity.batch(() => {
        if (l)
          for (let t in l) {
            let a = e.baseAtoms[t];
            if (!a) continue;
            let r = l[t],
              o = void 0 === r ? e.initialState[t] : r;
            n(
              e._reactivity.untrack(() => a.get()),
              o
            ) || a.set(() => o);
          }
      });
    }
    function rz(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e, t) => e === t;
      e._reactivity.batch(() => {
        var l, a;
        (rP(e, t, n), null == (l = (a = e._reactivity).commit) || l.call(a));
      });
    }
    function r_(e, t, n) {
      var l;
      let a = (function (e, t) {
        let { features: n, atoms: l, initialState: a } = e.options;
        if (!e.options.mergeOptions)
          return { ...e.options, ...t, features: n, atoms: l, initialState: a };
        let r = e.options.mergeOptions(e.options, t),
          o = { ...Object.getOwnPropertyDescriptors(r) };
        return Object.defineProperties(Object.create(Object.getPrototypeOf(r)), {
          ...o,
          features: { value: n, enumerable: !0, configurable: !0, writable: !0 },
          atoms: { value: l, enumerable: !0, configurable: !0, writable: !0 },
          initialState: { value: a, enumerable: !0, configurable: !0, writable: !0 }
        });
      })(e, aX(t, e.options));
      (e.optionsStore ? e.optionsStore.set(() => a) : (e.options = a),
        (null == n ? void 0 : n.syncExternalState) !== !1 &&
          rz(e, null != (l = a.state) ? l : null));
    }
    let rW = {
        coreCellsFeature: {
          assignCellPrototype: (e, t) => {
            a2("coreCellsFeature", e, t, {
              cell_getValue: { fn: (e) => e.row.getValue(e.column.id) },
              cell_renderValue: {
                fn: (e) => {
                  var t;
                  return null != (t = e.getValue()) ? t : e.table.options.renderFallbackValue;
                }
              },
              cell_getContext: {
                fn: (e) => ({
                  table: e.table,
                  column: e.column,
                  row: e.row,
                  cell: e,
                  getValue: () => e.getValue(),
                  renderValue: () => e.renderValue()
                }),
                memoDeps: (e) => [e]
              }
            });
          }
        },
        coreColumnsFeature: {
          assignColumnPrototype: (e, t) => {
            a2("coreColumnsFeature", e, t, {
              column_getFlatColumns: {
                fn: (e) => [e, ...e.columns.flatMap((e) => e.getFlatColumns())],
                memoDeps: (e) => [e.table.options.columns]
              },
              column_getLeafColumns: {
                fn: (e) =>
                  (function (e) {
                    if (e.columns.length) {
                      let t = e.columns.flatMap((e) => e.getLeafColumns());
                      return a6(e.table, "getOrderColumns", rr)(t);
                    }
                    return [e];
                  })(e),
                memoDeps: (e) => {
                  var t, n;
                  return [
                    null == (t = e.table.atoms.columnOrder) ? void 0 : t.get(),
                    null == (n = e.table.atoms.grouping) ? void 0 : n.get(),
                    e.table.options.columns,
                    e.table.options.groupedColumnMode
                  ];
                }
              }
            });
          },
          constructTableAPIs: (e) => {
            a1("coreColumnsFeature", e, {
              table_getDefaultColumnDef: {
                fn: () => ({
                  header: (e) => {
                    let t = e.header.column.columnDef;
                    return t.accessorKey ? t.accessorKey : t.accessorFn ? t.id : null;
                  },
                  cell: (e) => {
                    var t, n, l;
                    return null !=
                      (t =
                        null == (l = e.renderValue()) || null == (n = l.toString)
                          ? void 0
                          : n.call(l))
                      ? t
                      : null;
                  },
                  ...Object.values(e._features).reduce((e, t) => {
                    var n;
                    return Object.assign(
                      e,
                      null == (n = t.getDefaultColumnDef) ? void 0 : n.call(t)
                    );
                  }, {}),
                  ...e.options.defaultColumn
                }),
                memoDeps: () => [e.options.defaultColumn]
              },
              table_getAllColumns: {
                fn: () =>
                  (function e(t, n, l) {
                    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                      r = Array(n.length);
                    for (let o = 0; o < n.length; o++) {
                      if (!(o in n)) continue;
                      let i = n[o],
                        u = (function (e, t, n, l) {
                          var a, r;
                          let o,
                            i = { ...e.getDefaultColumnDef(), ...t },
                            u = i.accessorKey,
                            s = void 0 === u ? void 0 : String(u),
                            d =
                              null !=
                              (a =
                                null != (r = i.id)
                                  ? r
                                  : null == s
                                    ? void 0
                                    : s.replaceAll(".", "_"))
                                ? a
                                : "string" == typeof i.header
                                  ? i.header
                                  : void 0;
                          if (i.accessorFn) o = i.accessorFn;
                          else if (void 0 !== u)
                            if ("string" == typeof u && u.includes(".")) {
                              let e = u.split(".");
                              o = (t) => {
                                let n = t;
                                for (let t = 0; t < e.length; t++) {
                                  let l = e[t];
                                  n = null == n ? void 0 : n[l];
                                }
                                return n;
                              };
                            } else o = (e) => e[i.accessorKey];
                          if (!d) throw Error();
                          let c = Object.create(
                            (function (e) {
                              if (!e._columnPrototype) {
                                var t, n;
                                e._columnPrototype = { table: e };
                                let l = Object.values(e._features);
                                for (let a = 0; a < l.length; a++)
                                  null == (t = (n = l[a]).assignColumnPrototype) ||
                                    t.call(n, e._columnPrototype, e);
                              }
                              return e._columnPrototype;
                            })(e)
                          );
                          ((c.accessorFn = o),
                            (c.columnDef = i),
                            (c.columns = []),
                            (c.depth = n),
                            (c.id = "".concat(String(d))),
                            (c.parent = l));
                          let m = e._columnInstanceInitFns;
                          for (let e = 0; e < m.length; e++) m[e](c);
                          return c;
                        })(t, i, a, l);
                      ((u.columns = i.columns ? e(t, i.columns, u, a + 1) : []), (r[o] = u));
                    }
                    return r;
                  })(e, e.options.columns),
                memoDeps: () => [e.options.columns]
              },
              table_getAllFlatColumns: {
                fn: () => e.getAllColumns().flatMap((e) => e.getFlatColumns()),
                memoDeps: () => [e.options.columns]
              },
              table_getAllFlatColumnsById: {
                fn: () =>
                  (function (e) {
                    let t = aU(),
                      n = e.getAllFlatColumns();
                    for (let e = 0; e < n.length; e++) {
                      let l = n[e];
                      t[l.id] = l;
                    }
                    return t;
                  })(e),
                memoDeps: () => [e.options.columns]
              },
              table_getAllLeafColumns: {
                fn: () => {
                  let t;
                  return (
                    (t = e.getAllColumns().flatMap((e) => e.getLeafColumns())),
                    a6(e, "getOrderColumns", rr)(t)
                  );
                },
                memoDeps: () => {
                  var t, n;
                  return [
                    null == (t = e.atoms.columnOrder) ? void 0 : t.get(),
                    null == (n = e.atoms.grouping) ? void 0 : n.get(),
                    e.options.columns,
                    e.options.groupedColumnMode
                  ];
                }
              },
              table_getAllLeafColumnsById: {
                fn: () =>
                  (function (e) {
                    let t = aU(),
                      n = e.getAllLeafColumns();
                    for (let e = 0; e < n.length; e++) {
                      let l = n[e];
                      t[l.id] = l;
                    }
                    return t;
                  })(e),
                memoDeps: () => [e.getAllLeafColumns()]
              },
              table_getColumn: { fn: (t) => e.getAllFlatColumnsById()[t] }
            });
          }
        },
        coreHeadersFeature: {
          assignHeaderPrototype: (e, t) => {
            a2("coreHeadersFeature", e, t, {
              header_getLeafHeaders: {
                fn: (e) => {
                  let t;
                  return (
                    !(function e(t, n) {
                      for (let l = 0; l < t.subHeaders.length; l++) e(t.subHeaders[l], n);
                      n.push(t);
                    })(e, (t = [])),
                    t
                  );
                },
                memoDeps: (e) => [e.column.table.options.columns]
              },
              header_getContext: {
                fn: (e) => ({ column: e.column, header: e, table: e.column.table }),
                memoDeps: (e) => [e.column.table.options.columns]
              }
            });
          },
          constructTableAPIs: (e) => {
            a1("coreHeadersFeature", e, {
              table_getHeaderGroups: {
                fn: () =>
                  (function (e) {
                    var t, n;
                    let { start: l, end: a } =
                        null != (t = null == (n = e.atoms.columnPinning) ? void 0 : n.get())
                          ? t
                          : a4(),
                      r = e.getAllColumns(),
                      o = a6(e, "getVisibleLeafColumns", re);
                    if (!l.length && !a.length) return ra(r, o, e);
                    let i = e.getAllLeafColumnsById(),
                      u = [];
                    for (let e = 0; e < l.length; e++) {
                      let t = i[l[e]];
                      t && a6(t, "getIsVisible", a7) && u.push(t);
                    }
                    let s = [];
                    for (let e = 0; e < a.length; e++) {
                      let t = i[a[e]];
                      t && a6(t, "getIsVisible", a7) && s.push(t);
                    }
                    return ra(
                      r,
                      [...u, ...o.filter((e) => !l.includes(e.id) && !a.includes(e.id)), ...s],
                      e
                    );
                  })(e),
                memoDeps: () => {
                  var t, n, l, a;
                  return [
                    e.options.columns,
                    null == (t = e.atoms.columnOrder) ? void 0 : t.get(),
                    null == (n = e.atoms.grouping) ? void 0 : n.get(),
                    null == (l = e.atoms.columnPinning) ? void 0 : l.get(),
                    null == (a = e.atoms.columnVisibility) ? void 0 : a.get(),
                    e.options.groupedColumnMode
                  ];
                }
              },
              table_getFooterGroups: {
                fn: () => [...e.getHeaderGroups()].reverse(),
                memoDeps: () => [e.getHeaderGroups()]
              },
              table_getFlatHeaders: {
                fn: () =>
                  (function (e) {
                    let t = e.getHeaderGroups(),
                      n = [];
                    for (let e = 0; e < t.length; e++) {
                      let l = t[e].headers;
                      for (let e = 0; e < l.length; e++) n.push(l[e]);
                    }
                    return n;
                  })(e),
                memoDeps: () => [e.getHeaderGroups()]
              },
              table_getLeafHeaders: {
                fn: () =>
                  (function (e) {
                    var t, n;
                    let l =
                        null != (t = null == (n = e.getHeaderGroups()[0]) ? void 0 : n.headers)
                          ? t
                          : [],
                      a = [];
                    for (let e = 0; e < l.length; e++) {
                      let t = l[e].getLeafHeaders();
                      for (let e = 0; e < t.length; e++) a.push(t[e]);
                    }
                    return a;
                  })(e),
                memoDeps: () => [e.getHeaderGroups()]
              }
            });
          }
        },
        coreRowModelsFeature: {
          constructTableAPIs: (e) => {
            a1("coreRowModelsFeature", e, {
              table_getCoreRowModel: {
                fn: () => {
                  var t, n, l, a;
                  let r;
                  return (
                    e._rowModels.coreRowModel ||
                      (e._rowModels.coreRowModel =
                        null !=
                        (t =
                          null == (n = (l = e.options.features).coreRowModel)
                            ? void 0
                            : n.call(l, e))
                          ? t
                          : a$({
                              feature: "coreRowModelsFeature",
                              table: e,
                              fnName: "table.getCoreRowModel",
                              memoDeps: () => [e.options.data],
                              fn: () => {
                                var t;
                                let n;
                                return (
                                  (t = e.options.data),
                                  ((n = { rows: [], flatRows: [], rowsById: aU() }).rows =
                                    (function e(t, n, l) {
                                      let a =
                                          arguments.length > 3 && void 0 !== arguments[3]
                                            ? arguments[3]
                                            : 0,
                                        r = arguments.length > 4 ? arguments[4] : void 0,
                                        o = [];
                                      for (let u = 0; u < l.length; u++) {
                                        var i;
                                        let s = l[u],
                                          d = ro(
                                            t,
                                            t.getRowId(s, u, r),
                                            s,
                                            u,
                                            a,
                                            void 0,
                                            null == r ? void 0 : r.id
                                          );
                                        (n.flatRows.push(d),
                                          (n.rowsById[d.id] = d),
                                          o.push(d),
                                          t.options.getSubRows &&
                                            ((d.originalSubRows = t.options.getSubRows(s, u)),
                                            (null == (i = d.originalSubRows) ? void 0 : i.length) &&
                                              (d.subRows = e(t, n, d.originalSubRows, a + 1, d))));
                                      }
                                      return o;
                                    })(e, n, t)),
                                  n
                                );
                              },
                              onAfterUpdate:
                                ((a = () => {
                                  var t, n, l, a, r, o, i, u;
                                  (rv(e),
                                    (null !=
                                    (t =
                                      null != (n = e.options.autoResetAll)
                                        ? n
                                        : e.options.autoResetPageIndex)
                                      ? t
                                      : !e.options.manualPagination) &&
                                      (null !=
                                      (l =
                                        null == (u = e.atoms.pagination) || null == (i = u.get())
                                          ? void 0
                                          : i.pageIndex)
                                        ? l
                                        : 0) !== 0 &&
                                      aJ(e, "pagination", (t) => {
                                        let n = aX(0, t.pageIndex);
                                        return (
                                          (n = Math.max(
                                            0,
                                            Math.min(
                                              n,
                                              void 0 === e.options.pageCount ||
                                                -1 === e.options.pageCount
                                                ? Number.MAX_SAFE_INTEGER
                                                : e.options.pageCount - 1
                                            )
                                          )),
                                          { ...t, pageIndex: n }
                                        );
                                      }),
                                    e.atoms.sorting &&
                                      (null != (a = e.options.autoResetAll)
                                        ? a
                                        : e.options.autoResetSorting) &&
                                      rw(e),
                                    e.atoms.cellSelection &&
                                      (null ==
                                        (r =
                                          null != (o = e.options.autoResetAll)
                                            ? o
                                            : e.options.autoResetCellSelection) ||
                                        r) &&
                                      e._reactivity.schedule(() => {
                                        var t;
                                        aJ(
                                          e,
                                          "cellSelection",
                                          null != (t = aG(e.initialState.cellSelection)) ? t : []
                                        );
                                      }));
                                }),
                                (r = !1),
                                () => {
                                  if (!r) {
                                    r = !0;
                                    return;
                                  }
                                  a();
                                })
                            })),
                    e._rowModels.coreRowModel()
                  );
                }
              },
              table_getPreFilteredRowModel: { fn: () => e.getCoreRowModel() },
              table_getFilteredRowModel: {
                fn: () => {
                  var t, n;
                  return (e._rowModels.filteredRowModel ||
                    (e._rowModels.filteredRowModel =
                      null == (t = (n = e.options.features).filteredRowModel)
                        ? void 0
                        : t.call(n, e)),
                  e.options.manualFiltering || !e._rowModels.filteredRowModel)
                    ? e.getPreFilteredRowModel()
                    : e._rowModels.filteredRowModel();
                }
              },
              table_getPreGroupedRowModel: { fn: () => e.getFilteredRowModel() },
              table_getGroupedRowModel: {
                fn: () => {
                  var t, n;
                  return (e._rowModels.groupedRowModel ||
                    (e._rowModels.groupedRowModel =
                      null == (t = (n = e.options.features).groupedRowModel)
                        ? void 0
                        : t.call(n, e)),
                  e.options.manualGrouping || !e._rowModels.groupedRowModel)
                    ? e.getPreGroupedRowModel()
                    : e._rowModels.groupedRowModel();
                }
              },
              table_getPreSortedRowModel: { fn: () => e.getGroupedRowModel() },
              table_getSortedRowModel: {
                fn: () => {
                  var t, n;
                  return (e._rowModels.sortedRowModel ||
                    (e._rowModels.sortedRowModel =
                      null == (t = (n = e.options.features).sortedRowModel)
                        ? void 0
                        : t.call(n, e)),
                  e.options.manualSorting || !e._rowModels.sortedRowModel)
                    ? e.getPreSortedRowModel()
                    : e._rowModels.sortedRowModel();
                }
              },
              table_getPreExpandedRowModel: { fn: () => e.getSortedRowModel() },
              table_getExpandedRowModel: {
                fn: () => {
                  var t, n;
                  return (e._rowModels.expandedRowModel ||
                    (e._rowModels.expandedRowModel =
                      null == (t = (n = e.options.features).expandedRowModel)
                        ? void 0
                        : t.call(n, e)),
                  e.options.manualExpanding || !e._rowModels.expandedRowModel)
                    ? e.getPreExpandedRowModel()
                    : e._rowModels.expandedRowModel();
                }
              },
              table_getPrePaginatedRowModel: { fn: () => e.getExpandedRowModel() },
              table_getPaginatedRowModel: {
                fn: () => {
                  var t, n;
                  return (e._rowModels.paginatedRowModel ||
                    (e._rowModels.paginatedRowModel =
                      null == (t = (n = e.options.features).paginatedRowModel)
                        ? void 0
                        : t.call(n, e)),
                  e.options.manualPagination || !e._rowModels.paginatedRowModel)
                    ? e.getPrePaginatedRowModel()
                    : e._rowModels.paginatedRowModel();
                }
              },
              table_getRowModel: { fn: () => e.getPaginatedRowModel() }
            });
          }
        },
        coreRowsFeature: {
          assignRowPrototype: (e, t) => {
            a2("coreRowsFeature", e, t, {
              row_getDisplayIndex: {
                fn: (e) => {
                  let t;
                  return e.table.getRowsInDisplayOrder()[(t = e._displayIndexCache)] === e ? t : -1;
                }
              },
              row_getAllCellsByColumnId: {
                fn: (e) =>
                  (function (e) {
                    let t = aU(),
                      n = e.getAllCells();
                    for (let e = 0; e < n.length; e++) {
                      let l = n[e];
                      t[l.column.id] = l;
                    }
                    return t;
                  })(e),
                memoDeps: (e) => [e.getAllCells()]
              },
              row_getAllCells: {
                fn: (e) =>
                  (function (e) {
                    let t = e.table.getAllLeafColumns(),
                      n = e._cellsCache;
                    n || (n = e._cellsCache = new WeakMap());
                    let l = Array(t.length);
                    for (let a = 0; a < t.length; a++) {
                      let r = t[a],
                        o = n.get(r);
                      (o ||
                        ((o = (function (e, t, n) {
                          let l = Object.create(
                            (function (e) {
                              if (!e._cellPrototype) {
                                var t, n;
                                e._cellPrototype = { table: e };
                                let l = Object.values(e._features);
                                for (let a = 0; a < l.length; a++)
                                  null == (t = (n = l[a]).assignCellPrototype) ||
                                    t.call(n, e._cellPrototype, e);
                              }
                              return e._cellPrototype;
                            })(n)
                          );
                          ((l.column = e), (l.id = "".concat(t.id, "_").concat(e.id)), (l.row = t));
                          let a = n._cellInstanceInitFns;
                          for (let e = 0; e < a.length; e++) a[e](l);
                          return l;
                        })(r, e, e.table)),
                        n.set(r, o)),
                        (l[a] = o));
                    }
                    return l;
                  })(e),
                memoDeps: (e) => [e.table.getAllLeafColumns()]
              },
              row_getLeafRows: {
                fn: (e) => {
                  var t, n;
                  let l, a;
                  return (
                    (t = e.subRows),
                    (n = (e) => e.subRows),
                    (l = []),
                    (a = (e) => {
                      e.forEach((e) => {
                        l.push(e);
                        let t = n(e);
                        t.length && a(t);
                      });
                    })(t),
                    l
                  );
                },
                memoDeps: (e) => [e.subRows]
              },
              row_getParentRow: {
                fn: (e) =>
                  (function (e) {
                    var t;
                    if (e.parentId)
                      return null != (t = e.table.getCoreRowModel().rowsById[e.parentId])
                        ? t
                        : e.table.getRow(e.parentId, !0);
                  })(e)
              },
              row_getParentRows: {
                fn: (e) =>
                  (function (e) {
                    let t = [],
                      n = e;
                    for (;;) {
                      let e = n.getParentRow();
                      if (!e) break;
                      (t.push(e), (n = e));
                    }
                    return t.reverse();
                  })(e)
              },
              row_getUniqueValues: {
                fn: (e, t) =>
                  (function (e, t) {
                    if (aK(e._uniqueValuesCache, t)) return e._uniqueValuesCache[t];
                    let n = e.table.getColumn(t);
                    if (null == n ? void 0 : n.accessorFn)
                      return (
                        n.columnDef.getUniqueValues
                          ? (e._uniqueValuesCache[t] = n.columnDef.getUniqueValues(
                              e.original,
                              e.index
                            ))
                          : (e._uniqueValuesCache[t] = [e.getValue(t)]),
                        e._uniqueValuesCache[t]
                      );
                  })(e, t)
              },
              row_getValue: {
                fn: (e, t) =>
                  (function (e, t) {
                    if (aK(e._valuesCache, t)) return e._valuesCache[t];
                    let n = e.table.getColumn(t);
                    if (null == n ? void 0 : n.accessorFn)
                      return (
                        (e._valuesCache[t] = n.accessorFn(e.original, e.index)),
                        e._valuesCache[t]
                      );
                  })(e, t)
              },
              row_renderValue: {
                fn: (e, t) => {
                  var n;
                  return null != (n = e.getValue(t)) ? n : e.table.options.renderFallbackValue;
                }
              }
            });
          },
          constructTableAPIs: (e) => {
            a1("coreRowsFeature", e, {
              table_getRowsInDisplayOrder: {
                fn: () =>
                  (function (e) {
                    let t = e.getPrePaginatedRowModel().rows;
                    if (!1 === e.options.paginateExpandedRows) {
                      let e = [],
                        n = (t) => {
                          var l;
                          ((t._displayIndexCache = e.length),
                            e.push(t),
                            t.subRows.length &&
                              (null == (l = t.getIsExpanded) ? void 0 : l.call(t)) &&
                              t.subRows.forEach(n));
                        };
                      return (t.forEach(n), e);
                    }
                    for (let e = 0; e < t.length; e++) t[e]._displayIndexCache = e;
                    return t;
                  })(e),
                memoDeps: () => {
                  var t;
                  return [
                    e.getPrePaginatedRowModel().rows,
                    e.options.paginateExpandedRows,
                    !1 === e.options.paginateExpandedRows
                      ? null == (t = e.atoms.expanded)
                        ? void 0
                        : t.get()
                      : void 0
                  ];
                }
              },
              table_getRowId: {
                fn: (t, n, l) => {
                  var a, r, o;
                  return null !=
                    (a = null == (r = (o = e.options).getRowId) ? void 0 : r.call(o, t, n, l))
                    ? a
                    : l
                      ? "".concat(l.id, ".").concat(n)
                      : String(n);
                }
              },
              table_getRow: {
                fn: (t, n) =>
                  (function (e, t, n) {
                    let l = (n ? e.getPrePaginatedRowModel() : e.getRowModel()).rowsById[t];
                    if (!l && !(l = e.getCoreRowModel().rowsById[t])) throw Error();
                    return l;
                  })(e, t, n)
              },
              table_getMaxSubRowDepth: {
                fn: () =>
                  (function (e) {
                    let t = e.getCoreRowModel().flatRows,
                      n = 0;
                    for (let e = 0; e < t.length; e++) n = Math.max(n, t[e].depth);
                    return n;
                  })(e),
                memoDeps: () => [e.getCoreRowModel()]
              }
            });
          }
        },
        coreTablesFeature: {
          constructTableAPIs: (e) => {
            a1("coreTablesFeature", e, {
              table_reset: {
                fn: () =>
                  (function (e) {
                    var t, n;
                    let l = aG(e.initialState);
                    e._reactivity.batch(() => {
                      let t = Object.keys(l);
                      for (let n = 0; n < t.length; n++) {
                        let a = t[n];
                        e.baseAtoms[a].set(l[a]);
                      }
                    });
                    let a = Object.values(e._features);
                    for (let l = 0; l < a.length; l++)
                      null == (t = (n = a[l]).resetTableInstanceData) || t.call(n, e);
                  })(e)
              },
              table_setOptions: { fn: (t) => r_(e, t) }
            });
          }
        }
      },
      rj = u.useLayoutEffect,
      rH = [],
      rV = {
        columnVisibilityFeature: {
          getInitialState: (e) => ({ columnVisibility: aU(), ...e }),
          getDefaultTableOptions: (e) => ({ onColumnVisibilityChange: aY("columnVisibility", e) }),
          assignColumnPrototype: (e, t) => {
            a2("columnVisibilityFeature", e, t, {
              column_getIsVisible: {
                fn: (e) => a7(e),
                memoDeps: (e) => {
                  var n;
                  return [
                    t.options.columns,
                    null == (n = t.atoms.columnVisibility) ? void 0 : n.get(),
                    e.columns
                  ];
                }
              },
              column_getCanHide: { fn: (e) => a9(e) },
              column_getToggleVisibilityHandler: {
                fn: (e) => (t) => {
                  a5(e, t.target.checked);
                }
              },
              column_toggleVisibility: { fn: (e, t) => a5(e, t) }
            });
          },
          assignRowPrototype: (e, t) => {
            a2("columnVisibilityFeature", e, t, {
              row_getVisibleCells: {
                fn: (e) =>
                  (function (e) {
                    var t, n;
                    let l = e.getAllCells(),
                      a = [];
                    for (let e = 0; e < l.length; e++) {
                      let t = l[e];
                      a6(t.column, "getIsVisible", a7) && a.push(t);
                    }
                    let { start: r, end: o } =
                      null != (t = null == (n = e.table.atoms.columnPinning) ? void 0 : n.get())
                        ? t
                        : a4();
                    if (!r.length && !o.length) return a;
                    let i = a6(e, "getVisibleCellsByColumnId", a8),
                      u = [];
                    for (let e = 0; e < r.length; e++) {
                      let t = i[r[e]];
                      t && u.push(t);
                    }
                    let s = [];
                    for (let e = 0; e < o.length; e++) {
                      let t = i[o[e]];
                      t && s.push(t);
                    }
                    let d = [];
                    for (let e = 0; e < a.length; e++) {
                      let t = a[e],
                        n = t.column.id;
                      r.includes(n) || o.includes(n) || d.push(t);
                    }
                    return [...u, ...d, ...s];
                  })(e),
                memoDeps: (e) => {
                  var n, l;
                  return [
                    e.getAllCells(),
                    null == (n = t.atoms.columnPinning) ? void 0 : n.get(),
                    null == (l = t.atoms.columnVisibility) ? void 0 : l.get()
                  ];
                }
              },
              row_getVisibleCellsByColumnId: {
                fn: (e) => a8(e),
                memoDeps: (e) => {
                  var n;
                  return [
                    e.getAllCells(),
                    null == (n = t.atoms.columnVisibility) ? void 0 : n.get()
                  ];
                }
              }
            });
          },
          constructTableAPIs: (e) => {
            a1("columnVisibilityFeature", e, {
              table_getVisibleFlatColumns: {
                fn: () => e.getAllFlatColumns().filter((e) => a6(e, "getIsVisible", a7)),
                memoDeps: () => {
                  var t, n, l;
                  return [
                    null == (t = e.atoms.columnVisibility) ? void 0 : t.get(),
                    null == (n = e.atoms.columnOrder) ? void 0 : n.get(),
                    null == (l = e.atoms.grouping) ? void 0 : l.get(),
                    e.options.columns,
                    e.options.groupedColumnMode
                  ];
                }
              },
              table_getVisibleLeafColumns: {
                fn: () => re(e),
                memoDeps: () => {
                  var t, n, l;
                  return [
                    null == (t = e.atoms.columnVisibility) ? void 0 : t.get(),
                    null == (n = e.atoms.columnOrder) ? void 0 : n.get(),
                    null == (l = e.atoms.grouping) ? void 0 : l.get(),
                    e.options.columns,
                    e.options.groupedColumnMode
                  ];
                }
              },
              table_setColumnVisibility: { fn: (t) => rt(e, t) },
              table_resetColumnVisibility: {
                fn: (t) => {
                  var n;
                  rt(
                    e,
                    t
                      ? aU()
                      : Object.assign(
                          aU(),
                          aG(null != (n = e.initialState.columnVisibility) ? n : {})
                        )
                  );
                }
              },
              table_toggleAllColumnsVisible: { fn: (t) => rn(e, t) },
              table_getIsAllColumnsVisible: { fn: () => rl(e) },
              table_getIsSomeColumnsVisible: {
                fn: () => e.getAllLeafColumns().some((e) => a6(e, "getIsVisible", a7))
              },
              table_getToggleAllColumnsVisibilityHandler: {
                fn: () => (t) => {
                  rn(e, t.target.checked);
                }
              }
            });
          }
        },
        rowExpandingFeature: {
          getInitialState: (e) => ({ expanded: aU(), ...e }),
          getDefaultTableOptions: (e) => ({
            onExpandedChange: aY("expanded", e),
            paginateExpandedRows: !0
          }),
          assignRowPrototype: (e, t) => {
            a2("rowExpandingFeature", e, t, {
              row_toggleExpanded: { fn: (e, t) => ry(e, t) },
              row_getIsExpanded: { fn: (e) => rA(e) },
              row_getCanExpand: { fn: (e) => rM(e) },
              row_getIsAllParentsExpanded: {
                fn: (e) =>
                  (function (e) {
                    let t = !0,
                      n = e;
                    for (; t && n.parentId;) t = rA((n = e.table.getRow(n.parentId, !0)));
                    return t;
                  })(e)
              },
              row_getToggleExpandedHandler: {
                fn: (e) => {
                  let t;
                  return (
                    (t = rM(e)),
                    () => {
                      t && ry(e);
                    }
                  );
                }
              }
            });
          },
          constructTableAPIs: (e) => {
            a1("rowExpandingFeature", e, {
              table_autoResetExpanded: { fn: () => rv(e) },
              table_setExpanded: { fn: (t) => rF(e, t) },
              table_toggleAllRowsExpanded: { fn: (t) => rb(e, t) },
              table_resetExpanded: { fn: (t) => rE(e, t) },
              table_getCanSomeRowsExpand: { fn: () => rC(e) },
              table_getToggleAllRowsExpandedHandler: {
                fn: () => (t) => {
                  rb(e);
                }
              },
              table_getIsSomeRowsExpanded: {
                fn: () => {
                  var t, n;
                  let l;
                  return (
                    !0 ===
                      (l =
                        null != (t = null == (n = e.atoms.expanded) ? void 0 : n.get()) ? t : {}) ||
                    Object.values(l).some(Boolean)
                  );
                }
              },
              table_getIsAllRowsExpanded: { fn: () => rS(e) },
              table_getExpandedDepth: {
                fn: () => {
                  var t;
                  let n, l;
                  return (
                    (n = 0),
                    (!0 === (l = null == (t = e.atoms.expanded) ? void 0 : t.get())
                      ? Object.values(e.getRowModel().rowsById)
                          .filter((e) => rM(e))
                          .map((e) => e.id)
                      : Object.keys(null != l ? l : {})
                    ).forEach((e) => {
                      let t = e.split(".");
                      n = Math.max(n, t.length);
                    }),
                    n
                  );
                }
              }
            });
          }
        },
        rowSortingFeature: {
          getInitialState: (e) => ({ sorting: [], ...e }),
          getDefaultColumnDef: () => ({ sortFn: "auto", sortUndefined: 1 }),
          getDefaultTableOptions: (e) => ({
            autoResetSorting: !1,
            onSortingChange: aY("sorting", e),
            isMultiSortEvent: (e) => e.shiftKey
          }),
          assignColumnPrototype(e, t) {
            a2("rowSortingFeature", e, t, {
              column_getAutoSortFn: { fn: (e) => rD(e) },
              column_getAutoSortDir: { fn: (e) => rB(e) },
              column_getSortFn: {
                fn: (e) =>
                  (function (e) {
                    let t = e.table._rowModelFns.sortFns;
                    if (e.columnDef.sortFn instanceof Function) return e.columnDef.sortFn;
                    if ("auto" === e.columnDef.sortFn) return rD(e);
                    let n = null == t ? void 0 : t[e.columnDef.sortFn];
                    return null != n ? n : rs;
                  })(e)
              },
              column_toggleSorting: { fn: (e, t, n) => rO(e, t, n) },
              column_getFirstSortDir: { fn: (e) => rL(e) },
              column_getNextSortingOrder: { fn: (e, t) => rk(e, t) },
              column_getCanSort: { fn: (e) => rT(e) },
              column_getCanMultiSort: { fn: (e) => rR(e) },
              column_getIsSorted: { fn: (e) => rI(e) },
              column_getSortIndex: {
                fn: (e) => {
                  var t, n, l;
                  return null !=
                    (t =
                      null == (l = e.table.atoms.sorting) || null == (n = l.get())
                        ? void 0
                        : n.findIndex((t) => t.id === e.id))
                    ? t
                    : -1;
                }
              },
              column_clearSorting: {
                fn: (e) => {
                  rN(e.table, (t) => (t.length ? t.filter((t) => t.id !== e.id) : []));
                }
              },
              column_getToggleSortingHandler: {
                fn: (e) => {
                  let t;
                  return (
                    (t = rT(e)),
                    (n) => {
                      var l, a;
                      t &&
                        rO(
                          e,
                          void 0,
                          !!rR(e) &&
                            (null == (l = (a = e.table.options).isMultiSortEvent)
                              ? void 0
                              : l.call(a, n))
                        );
                    }
                  );
                }
              }
            });
          },
          constructTableAPIs(e) {
            a1("rowSortingFeature", e, {
              table_setSorting: { fn: (t) => rN(e, t) },
              table_resetSorting: { fn: (t) => rw(e, t) }
            });
          }
        }
      },
      rX = "(max-width: 600px)",
      rG = { XSmall: 32, Small: 48, Medium: 60 },
      rU = "text-truncate-end",
      rK = {
        backgroundColor: "color-mix(in srgb, var(--color-surface-100) 72%, transparent)",
        zIndex: 5
      },
      rY = { filter: "blur(2.5px)" },
      rq = {
        XSmall: "padding-x-small padding-y-xsmall",
        Small: "padding-x-medium padding-y-small",
        Medium: "padding-x-large padding-y-medium"
      },
      rQ = { XSmall: "text-body-small", Small: "text-body-small", Medium: "text-body-medium" },
      rZ = {
        XSmall: "flex items-center gap-xsmall",
        Small: "flex items-center gap-xsmall",
        Medium: "flex items-center gap-small"
      },
      rJ = { XSmall: "XSmall", Small: "XSmall", Medium: "Small" },
      r$ = { XSmall: "XSmall", Small: "XSmall", Medium: "Small" },
      r0 = "padding-bottom-large",
      r1 = "[&>div]:bg-none",
      r2 = "flex width-full items-center justify-between gap-medium padding-y-medium",
      r6 = "".concat(r2, " bg-surface-100"),
      r3 = "".concat(r2, " bg-shift-200"),
      r4 = "shrink-0 text-align-x-start",
      r5 = "flex grow-1 min-width-0 justify-end",
      r7 = "min-width-0 text-align-x-start",
      r9 = { menu: "top-center", item: "left-center" },
      r8 = { overflowY: "hidden", position: "relative", width: "100%" },
      oe = { display: "grid", width: "100%" },
      ot = { backgroundColor: "var(--color-surface-100)", display: "grid" },
      on = { overflowX: "hidden", overflowY: "hidden", scrollbarGutter: "stable", width: "100%" },
      ol = { display: "grid" },
      oa = { display: "grid" },
      or = { alignItems: "center", display: "flex", minWidth: 0 },
      oo = { display: "flex", flexDirection: "column", width: "100%" },
      oi = { boxSizing: "border-box", height: "auto", minWidth: 0 },
      ou = {
        ...oi,
        borderTopLeftRadius: "var(--radius-medium)",
        borderTopRightRadius: "var(--radius-medium)"
      },
      os = {
        ...oi,
        borderBottom: "none",
        borderBottomLeftRadius: "var(--radius-medium)",
        borderBottomRightRadius: "var(--radius-medium)"
      },
      od = { ...ou, ...os },
      oc = (e, t) => (e ? (t ? od : ou) : t ? os : oi),
      om = { display: "none" },
      oh = { start: "flex-start", center: "center", end: "flex-end" },
      of = {
        display: "block",
        overflowY: "auto",
        position: "relative",
        scrollbarGutter: "stable",
        width: "100%"
      },
      op = { display: "block", pointerEvents: "none", width: "100%" },
      og = { borderBottom: "none", display: "block", height: "100%", padding: 0, width: "100%" },
      ov = { display: "grid", left: 0, position: "absolute", top: 0, width: "100%" },
      oF = { display: "block", width: "100%" },
      ob = { boxSizing: "border-box", display: "block", height: "auto", width: "100%" },
      oE = { display: "block", left: 0, position: "absolute", top: 0, width: "100%" },
      oC = {
        alignItems: "center",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        left: 0,
        minHeight: "var(--size-1200)",
        position: "sticky",
        width: "100%"
      },
      oS = { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
      oy = { overflowWrap: "anywhere", whiteSpace: "normal" },
      oA = { whiteSpace: "nowrap" },
      ox = { borderBottom: "none" },
      oM = {
        backgroundColor: "var(--color-surface-100)",
        borderColor: "var(--color-stroke-default)",
        borderRadius: "var(--radius-medium)",
        borderStyle: "solid",
        borderWidth: "var(--stroke-standard)",
        boxSizing: "border-box"
      },
      oN = (e) => {
        if ("function" != typeof window.matchMedia) return () => void 0;
        let t = window.matchMedia(rX);
        return (t.addEventListener("change", e), () => t.removeEventListener("change", e));
      },
      ow = () => "function" == typeof window.matchMedia && window.matchMedia(rX).matches,
      oD = () => !1,
      oB = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = Number.parseFloat(e);
        return Number.isFinite(n) ? n : t;
      },
      oO = (e) => {
        let t = getComputedStyle(e);
        if (t.fontFamily && t.fontSize)
          return {
            font: ""
              .concat(t.fontStyle || "normal", " ")
              .concat(t.fontVariant || "normal", " ")
              .concat(t.fontWeight || "400", " ")
              .concat(t.fontSize, " ")
              .concat(t.fontFamily),
            horizontalPadding: oB(t.paddingLeft) + oB(t.paddingRight) || 48,
            letterSpacing: "normal" === t.letterSpacing ? 0 : oB(t.letterSpacing)
          };
      },
      oL = (e, t, n) => {
        if (!e) return t;
        let l =
          "menu" === n
            ? u.default.createElement("span", { className: "inline-flex" }, t)
            : u.default.createElement("div", { className: "width-full" }, t);
        return u.default.createElement(
          eA.Tooltip,
          { description: e.description, position: r9[n], title: e.title },
          u.default.createElement(eA.TooltipTrigger, { asChild: !0 }, l)
        );
      },
      ok = (e) => {
        let { item: t, onClose: n } = e,
          l = (0, u.useCallback)(
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
              ? u.default.createElement(eZ, {
                  as: "a",
                  disabled: t.disabled,
                  href: t.disabled ? void 0 : t.href,
                  leading: t.leading,
                  onSelect: l,
                  title: t.label,
                  trailing: t.trailing,
                  value: t.id
                })
              : u.default.createElement(eZ, {
                  disabled: t.disabled,
                  leading: t.leading,
                  onSelect: l,
                  title: t.label,
                  trailing: t.trailing,
                  value: t.id
                });
        return u.default.createElement(u.default.Fragment, null, oL(t.tooltip, a, "item"));
      },
      oT = (e) => {
        let { cell: t } = e,
          [n, l] = (0, u.useState)(!1),
          a = !0 === t.disabled || 0 === t.items.length,
          r = (0, u.useCallback)(() => l(!1), []),
          o = (0, u.useCallback)(
            (e) => {
              a || l(e);
            },
            [a]
          ),
          i = u.default.createElement(
            e1,
            { asChild: !0 },
            u.default.createElement(Q, {
              ariaLabel: t.menuAriaLabel,
              icon: "icon-filled-three-dots-vertical",
              isDisabled: a,
              size: "Small",
              variant: "Utility"
            })
          );
        return u.default.createElement(
          e0,
          { open: !a && n, onOpenChange: o },
          oL(t.tooltip, i, "menu"),
          u.default.createElement(
            e2,
            { align: "end", ariaLabel: t.menuAriaLabel, side: "bottom" },
            u.default.createElement(
              eq,
              { size: "Small" },
              u.default.createElement(
                "div",
                { className: "padding-small" },
                t.items.map((e) => u.default.createElement(ok, { item: e, key: e.id, onClose: r }))
              )
            )
          )
        );
      },
      oR = (e) => {
        var t, n, l;
        let a = (null != (t = e.displayString) ? t : (e) => String(e))(e.value);
        return null !=
          (n =
            null == (l = e.renderContainer) ? void 0 : l.call(e, { children: a, value: e.value }))
          ? n
          : a;
      },
      oI = () => void 0,
      oP = (e) => null == e || !1 === e || "" === e,
      oz = (e) => {
        let { getExpandedRowId: t, isSmallScreen: n, rows: l, size: a, textStyles: r } = e,
          o = (0, u.useRef)(null),
          [i, s] = (0, u.useState)(),
          d = (0, u.useMemo)(() => {
            let e = l[0],
              t = [];
            if (e) for (let n in e) t.push({ cell: e[n], id: n });
            return t;
          }, [l]),
          c = (0, u.useMemo)(
            () =>
              av({ availableWidth: i, columns: d, isSortingEnabled: !1, rows: l, textStyles: r }),
            [i, d, l, r]
          ),
          m = (0, u.useMemo)(() => {
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
          h = (0, u.useMemo)(
            () => ({ ...oe, ...(!n ? { minWidth: c.tableWidth } : void 0) }),
            [c.tableWidth, n]
          ),
          f = (0, u.useMemo)(
            () => (n ? oo : { ...oa, gridTemplateColumns: c.gridTemplateColumns }),
            [c.gridTemplateColumns, n]
          );
        return (
          (0, u.useEffect)(() => {
            let e = o.current;
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
          u.default.createElement(
            "div",
            { className: n ? r1 : void 0, ref: o },
            u.default.createElement(
              ei,
              { size: a, style: h, variant: "Divided" },
              u.default.createElement(
                eu,
                { style: n ? om : ol },
                u.default.createElement(
                  ed,
                  { style: f },
                  d.map((e) => {
                    var t, n;
                    let { cell: l, id: a } = e;
                    return u.default.createElement(
                      ec,
                      {
                        align: null != (t = l.align) ? t : "display" === l.type ? "end" : "start",
                        key: a,
                        style: !1 === l.headerDivider ? ox : void 0
                      },
                      null != (n = l.header) ? n : ""
                    );
                  })
                )
              ),
              u.default.createElement(
                es,
                { style: ol },
                m.map((e) => {
                  let { key: t, row: l } = e,
                    r = d.some((e) => {
                      let { id: t } = e,
                        n = l[t];
                      return (
                        "value" === n.type &&
                        "string" == typeof n.value &&
                        "truncate" !== n.textOverflow
                      );
                    }),
                    o = d
                      .map((e) => {
                        var t;
                        let { id: n } = e;
                        return {
                          cell: l[n],
                          content:
                            "value" === (t = l[n]).type
                              ? oR(t)
                              : "menu" === t.display
                                ? u.default.createElement(oT, { cell: t })
                                : t.render({ canExpand: !1, isExpanded: !1, onToggleExpanded: oI }),
                          id: n
                        };
                      })
                      .filter((e) => {
                        let { content: t } = e;
                        return !n || !oP(t);
                      });
                  return u.default.createElement(
                    ed,
                    { className: n ? r0 : void 0, key: t, style: f },
                    o.map((e, t) => {
                      var l, i;
                      let { cell: s, content: d, id: c } = e,
                        m = null != (l = s.align) ? l : "display" === s.type ? "end" : "start",
                        h = "value" === s.type && "string" == typeof s.value,
                        f = h && "truncate" === s.textOverflow,
                        p = h && !f;
                      return u.default.createElement(
                        em,
                        {
                          align: n ? "start" : m,
                          className: n ? (0 === t ? r3 : r6) : f ? rU : void 0,
                          key: c,
                          style: n
                            ? oc(0 === t, t === o.length - 1)
                            : {
                                ...or,
                                ...(p ? oy : f ? oS : oA),
                                ...(r ? { height: "auto", minHeight: rG[a] } : void 0),
                                justifyContent: oh[m]
                              }
                        },
                        n
                          ? u.default.createElement(
                              u.default.Fragment,
                              null,
                              u.default.createElement(
                                "div",
                                { className: r4 },
                                null != (i = s.header) ? i : ""
                              ),
                              u.default.createElement(
                                "div",
                                { className: r5 },
                                u.default.createElement(
                                  "div",
                                  { className: r7, style: p ? oy : f ? oS : oA },
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
      o_ = (e) => {
        let {
            columnGrid: t,
            isSmallScreen: n,
            isVirtual: l = !1,
            measureElement: a,
            measurementCellRef: r,
            minimumHeight: o,
            row: i,
            transform: s,
            virtualIndex: d
          } = e,
          c = i.getVisibleCells(),
          m = c.some((e) => {
            let t = i.original[e.column.id];
            return (
              "value" === t.type && "string" == typeof t.value && "truncate" !== t.textOverflow
            );
          }),
          h = c
            .map((e) => {
              let t = i.original[e.column.id];
              return {
                cell: e,
                cellConfig: t,
                content:
                  "display" === t.type
                    ? "menu" === t.display
                      ? u.default.createElement(oT, { cell: t })
                      : t.render({
                          canExpand: i.getCanExpand(),
                          isExpanded: i.getIsExpanded(),
                          onToggleExpanded: i.getToggleExpandedHandler()
                        })
                    : oR(t)
              };
            })
            .filter((e) => {
              let { content: t } = e;
              return !n || !oP(t);
            });
        return u.default.createElement(
          ed,
          {
            className: n ? r0 : void 0,
            "data-index": null != d ? d : i.index,
            ref: a,
            style: { ...(l ? ov : oa), ...(n ? oo : { gridTemplateColumns: t }), transform: s }
          },
          h.map((e, t) => {
            var l, a;
            let { cell: i, cellConfig: s, content: d } = e,
              c = null != (l = s.align) ? l : "display" === s.type ? "end" : "start",
              f = "value" === s.type && "string" == typeof s.value,
              p = f && "truncate" === s.textOverflow,
              g = f && !p;
            return u.default.createElement(
              em,
              {
                align: n ? "start" : c,
                className: n ? (0 === t ? r3 : r6) : p ? rU : void 0,
                key: i.id,
                ref: 0 === t ? r : void 0,
                style: n
                  ? oc(0 === t, t === h.length - 1)
                  : {
                      ...or,
                      ...(g ? oy : p ? oS : oA),
                      ...(m ? { height: "auto", minHeight: o } : void 0),
                      justifyContent: oh[c]
                    }
              },
              n
                ? u.default.createElement(
                    u.default.Fragment,
                    null,
                    u.default.createElement(
                      "div",
                      { className: r4 },
                      null != (a = s.header) ? a : ""
                    ),
                    u.default.createElement(
                      "div",
                      { className: r5 },
                      u.default.createElement(
                        "div",
                        { className: r7, style: g ? oy : p ? oS : oA },
                        d
                      )
                    )
                  )
                : d
            );
          })
        );
      },
      oW = (e) => {
        let {
          columnCount: t,
          expandedRows: n,
          getExpandedRowId: l,
          isSmallScreen: a,
          isVirtual: r = !1,
          measureElement: o,
          size: i,
          textStyles: s,
          transform: d,
          virtualIndex: c
        } = e;
        return u.default.createElement(
          ed,
          { "data-index": c, ref: o, style: { ...(r ? oE : oF), transform: d } },
          u.default.createElement(
            em,
            { colSpan: t, style: ob },
            u.default.createElement(oz, {
              getExpandedRowId: l,
              isSmallScreen: a,
              rows: n,
              size: i,
              textStyles: s
            })
          )
        );
      },
      oj = (e) => {
        let { cellStyle: t, children: n, columnCount: l } = e;
        return u.default.createElement(
          ed,
          { style: oF },
          u.default.createElement(em, { align: "center", colSpan: l, style: t }, n)
        );
      },
      oH = new Set(["a"]),
      oV = "text-no-wrap text-truncate-end min-width-0 max-width-full",
      oX = "".concat(oV, " focus-visible:outline-focus"),
      oG = (e) => {
        var t;
        let { text: n, className: l } = e,
          a = null != (t = e.as) ? t : "span",
          r = "a" === e.as ? e.href : void 0,
          o = "a" === e.as ? e.onClick : void 0,
          i = (0, u.useRef)(null),
          s = (0, u.useRef)(null),
          [d, c] = (0, u.useState)(!1),
          m = (0, u.useCallback)((e) => {
            let t = e.scrollWidth > e.clientWidth;
            c((e) => (e === t ? e : t));
          }, []),
          h = (0, u.useCallback)(
            (e) => {
              var t;
              if (
                (null == (t = s.current) || t.disconnect(),
                (s.current = null),
                (i.current = e),
                e && (m(e), "u" > typeof ResizeObserver))
              ) {
                let t = new ResizeObserver(() => m(e));
                (t.observe(e), (s.current = t));
              }
            },
            [m]
          );
        ((0, u.useEffect)(() => {
          let e = i.current;
          e && m(e);
        }, [m, n]),
          (0, u.useEffect)(
            () => () => {
              var e;
              return null == (e = s.current) ? void 0 : e.disconnect();
            },
            []
          ));
        let f = oH.has(a),
          p = d && !f ? 0 : void 0,
          g = (function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return t.filter((e) => void 0 !== e && e.length > 0).join(" ");
          })(d && !f ? oX : oV, "span" === a ? "block" : void 0, l),
          v =
            "a" === a
              ? u.default.createElement(
                  "a",
                  { ref: h, className: g, href: r, tabIndex: p, onClick: o },
                  u.default.createElement("bdi", null, n)
                )
              : "h1" === a
                ? u.default.createElement(
                    "h1",
                    { ref: h, className: g, tabIndex: p },
                    u.default.createElement("bdi", null, n)
                  )
                : u.default.createElement(
                    "span",
                    { ref: h, className: g, tabIndex: p },
                    u.default.createElement("bdi", null, n)
                  );
        return d
          ? u.default.createElement(
              eA.Tooltip,
              { title: n, position: "top-center" },
              u.default.createElement(eA.TooltipTrigger, { asChild: !0 }, v)
            )
          : v;
      },
      oU = (e, t, n) =>
        e && !t
          ? u.default.createElement(
              eA.Tooltip,
              { title: e, position: "bottom-end" },
              u.default.createElement(eA.TooltipTrigger, { asChild: !0 }, n)
            )
          : u.default.createElement(u.default.Fragment, null, n),
      oK = (e) => {
        let { action: t } = e;
        switch (t.kind) {
          case "button":
            return u.default.createElement(oY, { action: t });
          case "link":
            return u.default.createElement(oq, { action: t });
          case "menu":
            return u.default.createElement(oQ, { action: t });
          case "custom":
            return u.default.createElement(u.default.Fragment, null, t.render());
          default:
            return null;
        }
      },
      oY = (e) => {
        var t, n;
        let { action: l } = e,
          { disabled: a, icon: r, label: o, onClick: i, testId: s, tooltip: d } = l,
          c = oU(
            d,
            a,
            u.default.createElement(
              eb.Button,
              {
                onClick: i,
                variant: "Standard",
                size: "Medium",
                isDisabled: a,
                className: r ? "min-width-fit" : void 0,
                "aria-label": r ? o : void 0,
                "data-testid": s
              },
              null != r ? r : o
            )
          );
        return u.default.createElement(
          u.default.Fragment,
          null,
          null !=
            (t = null == (n = l.renderButton) ? void 0 : n.call(l, { action: l, defaultButton: c }))
            ? t
            : c
        );
      },
      oq = (e) => {
        var t, n;
        let { action: l } = e,
          { disabled: a, href: r, icon: o, label: i, rel: s, target: d, testId: c, tooltip: m } = l,
          h = oU(
            m,
            a,
            u.default.createElement(
              eb.Button,
              {
                as: "a",
                href: a ? void 0 : r,
                target: d,
                rel: s,
                variant: "Standard",
                size: "Small",
                isDisabled: a,
                className: o ? "min-width-fit" : void 0,
                "aria-label": o ? i : void 0,
                "data-testid": c
              },
              null != o ? o : i
            )
          );
        return u.default.createElement(
          u.default.Fragment,
          null,
          null !=
            (t = null == (n = l.renderLink) ? void 0 : n.call(l, { action: l, defaultLink: h }))
            ? t
            : h
        );
      },
      oQ = (e) => {
        var t;
        let { action: n } = e,
          { disabled: l, items: a, label: r, renderMenu: o, testId: i, tooltip: s } = n,
          [d, c] = (0, u.useState)(!1),
          m = (0, u.useCallback)(() => {
            c(!1);
          }, []),
          h = u.default.createElement(
            e1,
            { asChild: !0 },
            u.default.createElement(Q, {
              icon: "icon-filled-three-dots-vertical",
              variant: "Standard",
              size: "Small",
              ariaLabel: r,
              isDisabled: l,
              "data-testid": i
            })
          ),
          f = u.default.createElement(
            u.default.Fragment,
            null,
            u.default.createElement(
              e0,
              { open: d, onOpenChange: c },
              s && !l
                ? u.default.createElement(
                    eA.Tooltip,
                    { title: s, position: "bottom-end" },
                    u.default.createElement(eA.TooltipTrigger, { asChild: !0 }, h)
                  )
                : h,
              u.default.createElement(
                e2,
                { side: "bottom", align: "end", ariaLabel: r },
                u.default.createElement(
                  eq,
                  { size: "Medium" },
                  u.default.createElement(
                    eQ,
                    null,
                    a.map((e) => u.default.createElement(oZ, { action: e, key: e.id, onClose: m }))
                  )
                )
              )
            ),
            a.map((e) =>
              "custom" === e.kind && e.renderOverlay
                ? u.default.createElement(
                    u.default.Fragment,
                    { key: "".concat(e.id, "-overlay") },
                    e.renderOverlay()
                  )
                : null
            )
          );
        return u.default.createElement(
          u.default.Fragment,
          null,
          null != (t = null == o ? void 0 : o({ action: n, items: a })) ? t : f
        );
      },
      oZ = (e) => {
        let { action: t, onClose: n } = e,
          l = (0, u.useCallback)(() => {
            ("button" === t.kind && t.onClick(), n());
          }, [t, n]);
        return "button" === t.kind
          ? u.default.createElement(eZ, {
              value: t.id,
              title: t.label,
              disabled: t.disabled,
              onSelect: l,
              "data-testid": t.testId
            })
          : "link" === t.kind
            ? u.default.createElement(eZ, {
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
              ? u.default.createElement(u.default.Fragment, null, t.render({ closeMenu: n }))
              : null;
      };
    var oJ = (0, u.memo)((e) => {
      let { actions: t } = e;
      return t.length
        ? u.default.createElement(
            u.default.Fragment,
            null,
            t.map((e) => u.default.createElement(oK, { action: e, key: e.id }))
          )
        : null;
    });
    let o$ = (0, u.createContext)(null),
      o0 = () => (0, u.useContext)(o$),
      o1 = (0, u.createContext)(Object.freeze({}));
    var o2 =
      (((th = o2 || {}).Loading = "Loading"),
      (th.NoData = "NoData"),
      (th.Error = "Error"),
      (th.NoAccess = "NoAccess"),
      th);
    let o6 = (0, d.makeStyles)()((e) => ({
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
      o3 = (e) => {
        let { status: t, description: n, secondaryDescription: l } = e,
          {
            classes: { container: a, content: r, icon: o }
          } = o6(),
          i = t === o2.Loading,
          s = ((e) => {
            switch (e) {
              case o2.NoData:
                return u.default.createElement(E.HelpOutlineOutlinedIcon, { fontSize: "inherit" });
              case o2.Error:
                return u.default.createElement(b.CancelOutlinedIcon, { fontSize: "inherit" });
              case o2.NoAccess:
                return u.default.createElement(F.LockIcon, { fontSize: "inherit" });
              case o2.Loading:
              default:
                return null;
            }
          })(t);
        return u.default.createElement(
          g.Container,
          { disableGutters: !0, classes: { root: a } },
          u.default.createElement(
            "div",
            { className: r },
            i ? u.default.createElement(v.CircularProgress, null) : null,
            s ? u.default.createElement("span", { className: o }, s) : null,
            u.default.createElement(h.Typography, { display: "block", variant: "h6" }, n),
            u.default.createElement(h.Typography, { display: "block", variant: "body2" }, l)
          )
        );
      },
      o4 = (0, d.makeStyles)()((e) => ({
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
    var o5 = (0, u.memo)((e) => {
      var t;
      let {
          children: n,
          titleLabel: l,
          titleTooltipLabel: a,
          titleSuffix: r,
          subTitle: o,
          chartControl: i,
          headerActionItems: s,
          headerActions: d,
          downloadAction: m,
          overflowMenuContent: f,
          secondaryAction: v,
          footerContent: F,
          abnormalState: b,
          chartBanner: E,
          slots: N
        } = e,
        {
          classes: {
            titleContainer: w,
            card: D,
            draggingCard: B,
            titleContent: O,
            titleLabel: L,
            tooltipIcon: k,
            cardHeader: T,
            cardHeaderContent: R,
            cardContent: I,
            cardActions: P,
            footerContainer: z,
            mobileControlsRow: _
          },
          cx: W
        } = o4(),
        j = (0, p.useMediaQuery)((e) => e.breakpoints.down("Medium")),
        H = o0(),
        V = (0, u.useContext)(o1),
        X = null != (t = null == N ? void 0 : N.watermark) ? t : V.watermark,
        G = (0, u.useMemo)(() => {
          var e;
          let t = !!b,
            n = void 0 !== d,
            o = [];
          (v &&
            o.push({
              id: "secondary",
              kind: "button",
              label: v.label,
              onClick: v.onClick,
              tooltip: v.tooltip,
              renderButton: v.Wrapper
                ? (e) => {
                    let { defaultButton: t } = e,
                      n = v.Wrapper;
                    return n ? u.default.createElement(n, null, t) : t;
                  }
                : void 0
            }),
            !f &&
              m &&
              o.push({
                id: "download",
                kind: "button",
                label: null != (e = m.tooltip) ? e : "",
                onClick: m.onClick,
                tooltip: m.tooltip,
                icon: u.default.createElement(C.DownloadIcon, { fontSize: "small" }),
                disabled: t,
                testId: "chart-download-button"
              }),
            f &&
              o.push({
                id: "legacy-overflow-menu",
                kind: "custom",
                label: "Overflow menu",
                render: () => f
              }));
          let i = null != s ? s : o,
            p = n ? null !== d && !1 !== d : i.length > 0;
          return u.default.createElement(
            g.Container,
            { disableGutters: !0, classes: { root: w }, maxWidth: !1 },
            u.default.createElement(
              h.Typography,
              { variant: "subtitle1", classes: { root: O } },
              u.default.createElement(oG, { text: l, className: L }),
              a
                ? u.default.createElement(
                    c.Tooltip,
                    { title: a, arrow: !0 },
                    u.default.createElement(S.InfoOutlinedIcon, { classes: { root: k } })
                  )
                : null,
              r
            ),
            p &&
              u.default.createElement(
                y.a,
                { classes: { root: P } },
                n ? d : u.default.createElement(oJ, { actions: i })
              )
          );
        }, [b, P, m, s, d, f, v, w, O, l, L, r, a, k]),
        U = (0, u.useMemo)(
          () => (j && i ? u.default.createElement("div", { className: _ }, i) : null),
          [i, j, _]
        );
      return u.default.createElement(
        A.Card,
        {
          variant: "outlined",
          classes: { root: W(D, { [B]: !!(null == H ? void 0 : H.isDragging) }) }
        },
        X,
        u.default.createElement(x.CardHeader, {
          title: G,
          classes: { root: T, content: R },
          disableTypography: !0,
          subheader: o
        }),
        U,
        E && u.default.createElement(te, E),
        u.default.createElement(
          M.CardContent,
          { classes: { root: I } },
          u.default.createElement(tH, { value: !!b }, n),
          !b && F ? u.default.createElement("div", { className: z }, F) : null,
          b ? u.default.createElement(o3, b) : null
        )
      );
    });
    let o7 =
        "M16.6925 10.4422L10.4425 16.6922C10.3845 16.7503 10.3155 16.7963 10.2397 16.8277C10.1638 16.8592 10.0825 16.8754 10.0003 16.8754C9.91823 16.8754 9.83691 16.8592 9.76104 16.8277C9.68517 16.7963 9.61623 16.7503 9.55816 16.6922C9.50009 16.6341 9.45403 16.5652 9.4226 16.4893C9.39117 16.4134 9.375 16.3321 9.375 16.25C9.375 16.1679 9.39117 16.0866 9.4226 16.0107C9.45403 15.9348 9.50009 15.8659 9.55816 15.8078L15.8082 9.55782C15.8662 9.49975 15.9352 9.45368 16.011 9.42226C16.0869 9.39083 16.1682 9.37466 16.2503 9.37466C16.3325 9.37466 16.4138 9.39083 16.4897 9.42226C16.5655 9.45368 16.6345 9.49975 16.6925 9.55782C16.7506 9.61588 16.7967 9.68482 16.8281 9.76069C16.8595 9.83656 16.8757 9.91788 16.8757 10C16.8757 10.0821 16.8595 10.1634 16.8281 10.2393C16.7967 10.3152 16.7506 10.3841 16.6925 10.4422ZM15.4425 2.68282C15.3845 2.62471 15.3156 2.57861 15.2397 2.54715C15.1638 2.5157 15.0825 2.49951 15.0003 2.49951C14.9182 2.49951 14.8369 2.5157 14.761 2.54715C14.6851 2.57861 14.6162 2.62471 14.5582 2.68282L2.68316 14.5578C2.56588 14.6751 2.5 14.8342 2.5 15C2.5 15.1659 2.56588 15.3249 2.68316 15.4422C2.80044 15.5595 2.9595 15.6254 3.12535 15.6254C3.2912 15.6254 3.45026 15.5595 3.56753 15.4422L15.4425 3.56719C15.5006 3.50915 15.5467 3.44021 15.5782 3.36434C15.6097 3.28847 15.6258 3.20714 15.6258 3.125C15.6258 3.04287 15.6097 2.96154 15.5782 2.88567C15.5467 2.80979 15.5006 2.74086 15.4425 2.68282Z",
      o9 = (0, d.makeStyles)()((e) => ({
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
      o8 = (e) => {
        var t, n;
        let { children: l, dragAndDropOptions: a, resizeOptions: r } = e,
          {
            classes: {
              container: o,
              dragHandle: i,
              dragHandleVisible: s,
              draggingContainer: d,
              dropTargetHighlight: c,
              resizeHandle: m,
              resizeHandleLeft: h,
              resizeHandleRight: f,
              resizeHandleVisible: p,
              resizeHandleButton: g,
              resizingContainer: v,
              resizingFromLeft: F,
              resizingFromRight: b,
              resizeHandleGlyph: E,
              resizeHandleGlyphLeft: C,
              resizeHandleGlyphRight: S,
              resizeSnapZone: y,
              resizeSnapZoneLeft: A,
              resizeSnapZoneRight: x,
              contentLayer: M
            },
            cx: D
          } = o9(),
          B = o0(),
          O = null != a ? a : B,
          L = null != r ? r : null == O ? void 0 : O.resizeOptions,
          [k, T] = (0, u.useState)(!1),
          R = !!((null == L ? void 0 : L.isEnabled) && L.handles.includes("left")),
          I = !!((null == L ? void 0 : L.isEnabled) && L.handles.includes("right")),
          P =
            k ||
            (null != (t = null == L ? void 0 : L.isResizing) && t) ||
            (null != (n = null == O ? void 0 : O.isDragging) && n),
          z = !!(
            (null == L ? void 0 : L.isResizing) &&
            "number" == typeof L.snapPreviewWidthPx &&
            L.snapPreviewWidthPx > 0
          ),
          _ = (0, u.useMemo)(() => {
            let e = null == O ? void 0 : O.containerTransform;
            if (e) return { transform: "translate(".concat(-e.x, "px, ").concat(-e.y, "px)") };
          }, [null == O ? void 0 : O.containerTransform]);
        return (
          (0, u.useEffect)(() => {
            if ("u" < typeof document || !(null == L ? void 0 : L.isResizing)) return;
            let e = document.body.style.cursor,
              t = "ew-resize";
            return (
              "left" === L.activeHandle
                ? (t = "w-resize")
                : "right" === L.activeHandle && (t = "e-resize"),
              (document.body.style.cursor = t),
              () => {
                document.body.style.cursor = e;
              }
            );
          }, [null == L ? void 0 : L.activeHandle, null == L ? void 0 : L.isResizing]),
          u.default.createElement(
            "div",
            {
              ref: null == O ? void 0 : O.containerRef,
              "data-chart-container-item-id": null == O ? void 0 : O.containerItemId,
              style: null == O ? void 0 : O.containerStyle,
              ...(null == O ? void 0 : O.containerAttributes),
              onMouseEnter: () => T(!0),
              onMouseLeave: () => T(!1),
              className: D(
                (null == O ? void 0 : O.isEnabled) && o,
                (null == O ? void 0 : O.isDragging) && d,
                (null == L ? void 0 : L.isResizing) && v,
                (null == L ? void 0 : L.isResizing) && "left" === L.activeHandle && F,
                (null == L ? void 0 : L.isResizing) && "right" === L.activeHandle && b,
                null == O ? void 0 : O.containerClassName
              )
            },
            !!(null == O ? void 0 : O.dropIndicator) &&
              u.default.createElement("div", { className: c, style: _, "aria-hidden": "true" }),
            z &&
              u.default.createElement("div", {
                className: D(y, (null == L ? void 0 : L.snapPreviewAnchor) === "left" ? A : x),
                style: { width: null == L ? void 0 : L.snapPreviewWidthPx },
                "aria-hidden": "true"
              }),
            R &&
              u.default.createElement(
                N.IconButton,
                {
                  "data-chart-resize-handle": "left",
                  ...(null == L ? void 0 : L.leftHandleAttributes),
                  ...(null == L ? void 0 : L.leftHandleListeners),
                  "aria-label": "Resize chart from left edge",
                  size: "small",
                  color: "onMediaLight",
                  className: D(m, g, h, P && p)
                },
                u.default.createElement(
                  "svg",
                  {
                    className: D(E, C),
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true"
                  },
                  u.default.createElement("path", { d: o7, fill: "currentColor" })
                )
              ),
            I &&
              u.default.createElement(
                N.IconButton,
                {
                  "data-chart-resize-handle": "right",
                  ...(null == L ? void 0 : L.rightHandleAttributes),
                  ...(null == L ? void 0 : L.rightHandleListeners),
                  "aria-label": "Resize chart from right edge",
                  size: "small",
                  color: "onMediaLight",
                  className: D(m, g, f, P && p)
                },
                u.default.createElement(
                  "svg",
                  {
                    className: D(E, S),
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true"
                  },
                  u.default.createElement("path", { d: o7, fill: "currentColor" })
                )
              ),
            (null == O ? void 0 : O.isEnabled) &&
              u.default.createElement(
                N.IconButton,
                {
                  "data-chart-drag-handle": !0,
                  ...O.handleAttributes,
                  ...O.handleListeners,
                  "aria-label": "Drag to reorder chart",
                  size: "small",
                  color: "onMediaLight",
                  variant: "contained",
                  className: D(i, (k || O.isDragging) && s)
                },
                u.default.createElement(w.DragHandleIcon, { fontSize: "small" })
              ),
            u.default.createElement("div", { className: M }, l)
          )
        );
      },
      ie = (0, d.makeStyles)()(() => ({ icon: { fontSize: "1rem" } }));
    var it = (0, u.memo)((e) => {
      let { isGood: t, isUp: n, formattedLabel: l, tooltip: a } = e,
        {
          classes: { icon: r }
        } = ie();
      return u.default.createElement(
        c.Tooltip,
        { title: a, placement: "right", arrow: !0 },
        u.default.createElement(
          "span",
          null,
          u.default.createElement(D.Label, {
            labelText: l,
            variant: "contained",
            icon: n
              ? u.default.createElement(B.ArrowUpwardIcon, { classes: { root: r } })
              : u.default.createElement(O.ArrowDownwardIcon, { classes: { root: r } }),
            severity: t ? "success" : "default"
          })
        )
      );
    });
    let il = (0, d.makeStyles)()(() => ({
        container: { width: "unset", margin: "unset", textTransform: "none" },
        statsContainer: { display: "flex", alignItems: "center" },
        statsContainerCentered: { justifyContent: "center" },
        tooltipIcon: { verticalAlign: "middle", margin: "0 0 2px 4px" }
      })),
      ia = (e) => {
        let {
            summaryValue: t,
            description: n,
            tooltip: l,
            StartSummaryIcon: a,
            comparisonChipSpec: r,
            abnormalStatus: o,
            centered: i
          } = e,
          {
            classes: { statsContainer: s, statsContainerCentered: d, container: m, tooltipIcon: f },
            cx: p
          } = il(),
          v = (0, u.useMemo)(() => (r ? u.default.createElement(it, r) : null), [r]),
          F = (0, u.useMemo)(
            () =>
              o
                ? u.default.createElement(h.Typography, { variant: "h2" }, "--")
                : u.default.createElement(
                    u.default.Fragment,
                    null,
                    a ? u.default.createElement(a, { fontSize: "small" }) : null,
                    u.default.createElement(
                      h.Typography,
                      { variant: "h2", marginRight: v ? "8px" : "0", marginLeft: a ? "4px" : "0" },
                      t
                    ),
                    v
                  ),
            [a, o, v, t]
          );
        return u.default.createElement(
          g.Container,
          { disableGutters: !0, classes: { root: m } },
          u.default.createElement(
            h.Typography,
            { variant: "body2", color: "secondary" },
            n,
            l &&
              u.default.createElement(
                c.Tooltip,
                { title: l, arrow: !0 },
                u.default.createElement(S.InfoOutlinedIcon, {
                  fontSize: "small",
                  classes: { root: f }
                })
              )
          ),
          u.default.createElement("div", { className: p(s, i && d) }, F)
        );
      },
      ir = (0, d.makeStyles)()((e) => ({
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
    var io = (0, u.memo)((e) => {
      let {
          children: t,
          titleLabel: n,
          titleTooltipLabel: l,
          footerContent: a,
          headerActionItems: r,
          headerActions: o,
          downloadAction: i,
          overflowMenuContent: s,
          secondaryAction: d,
          chartSummarySpecs: c,
          chartControl: m,
          abnormalState: h,
          dragAndDropOptions: f,
          resizeOptions: p,
          chartBanner: v,
          slots: F
        } = e,
        {
          classes: { subTitleContainer: b, chartControlContainer: E, summariesContainer: C }
        } = ir(),
        S = (0, u.useMemo)(
          () =>
            0 !== c.length || m
              ? u.default.createElement(
                  g.Container,
                  { disableGutters: !0, classes: { root: b }, maxWidth: !1 },
                  u.default.createElement(
                    "div",
                    { className: C },
                    c.map((e) =>
                      u.default.createElement(ia, {
                        ...e,
                        key: e.key,
                        abnormalStatus: null == h ? void 0 : h.status
                      })
                    )
                  ),
                  m && u.default.createElement("div", { className: E }, m)
                )
              : null,
          [null == h ? void 0 : h.status, m, E, c, b, C]
        );
      return u.default.createElement(
        o8,
        { dragAndDropOptions: f, resizeOptions: p },
        u.default.createElement(
          o5,
          {
            titleLabel: n,
            titleTooltipLabel: l,
            secondaryAction: d,
            headerActionItems: r,
            headerActions: o,
            downloadAction: i,
            overflowMenuContent: s,
            footerContent: a,
            subTitle: S,
            abnormalState: h,
            chartBanner: v,
            slots: F
          },
          t
        )
      );
    });
    let ii = (0, d.makeStyles)()((e) => ({
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
    var iu = (0, u.memo)((e) => {
      let {
          children: t,
          titleLabel: n,
          titleTooltipLabel: l,
          titleSuffix: a,
          footerContent: r,
          headerActionItems: o,
          headerActions: i,
          downloadAction: s,
          overflowMenuContent: d,
          secondaryAction: c,
          chartControl: m,
          tabSpecs: h,
          activeTabKey: f,
          onActiveTabChanged: v,
          dragAndDropOptions: F,
          resizeOptions: b,
          slots: E
        } = e,
        {
          classes: {
            subTitleContainer: C,
            tabsWrapper: S,
            scrollBumper: y,
            scrollBumperLeft: A,
            scrollBumperRight: x,
            scrollBumperHidden: M,
            scrollButton: w,
            chartControlContainer: D,
            tabContainer: B
          },
          cx: O
        } = ii(),
        I = (0, p.useMediaQuery)((e) => e.breakpoints.down("Medium")),
        {
          wrapperRef: P,
          isStartOfScroll: z,
          isEndOfScroll: _,
          handleScroll: W,
          refreshScrollState: j
        } = ((e) => {
          let t = (0, u.useRef)(null),
            [n, l] = (0, u.useState)(!0),
            [a, r] = (0, u.useState)(!0),
            o = (0, u.useCallback)(() => {
              let e = t.current,
                n = null == e ? void 0 : e.querySelector(".MuiTabs-scroller");
              n && (l(n.scrollLeft <= 0), r(n.scrollLeft + n.clientWidth >= n.scrollWidth - 1));
            }, []);
          (0, u.useEffect)(() => {
            let n,
              a = t.current,
              o = e ? (null == a ? void 0 : a.querySelector(".MuiTabs-scroller")) : null;
            if (!o) return;
            let i = () => {
                (l(o.scrollLeft <= 0), r(o.scrollLeft + o.clientWidth >= o.scrollWidth - 1));
              },
              u = requestAnimationFrame(i);
            if ((o.addEventListener("scroll", i), "u" > typeof ResizeObserver)) {
              (n = new ResizeObserver(i)).observe(o);
              let e = o.firstElementChild;
              e && n.observe(e);
            }
            return () => {
              (cancelAnimationFrame(u),
                o.removeEventListener("scroll", i),
                null == n || n.disconnect());
            };
          }, [e]);
          let i = (0, u.useCallback)((e) => {
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
            handleScroll: i,
            refreshScrollState: o
          };
        })(!I),
        [H, V] = (0, u.useState)(!1),
        X = (0, u.useCallback)(
          (e, t) => {
            v(t);
          },
          [v]
        ),
        G = (0, u.useMemo)(
          () =>
            u.default.createElement(
              L.Tabs,
              {
                value: f,
                variant: "scrollable",
                scrollButtons: !1,
                onChange: X,
                "aria-label": "tabs"
              },
              h.map((e) => {
                let {
                  key: t,
                  comparisonChipSpec: n,
                  description: l,
                  summaryValue: a,
                  abnormalState: r,
                  tooltip: o
                } = e;
                return u.default.createElement(k.Tab, {
                  label: u.default.createElement(ia, {
                    summaryValue: a,
                    description: l,
                    comparisonChipSpec: n,
                    abnormalStatus: null == r ? void 0 : r.status,
                    tooltip: o,
                    centered: !0
                  }),
                  value: t,
                  key: t,
                  classes: { root: B }
                });
              })
            ),
          [f, X, B, h]
        ),
        U = u.default.createElement(
          g.Container,
          { disableGutters: !0, classes: { root: C }, maxWidth: !1 },
          u.default.createElement(
            "div",
            {
              ref: P,
              className: S,
              onMouseEnter: () => {
                (V(!0), j());
              },
              onMouseLeave: () => V(!1)
            },
            G,
            !I &&
              u.default.createElement(
                u.default.Fragment,
                null,
                u.default.createElement(
                  "div",
                  { className: O(y, A, { [M]: !H || z }) },
                  u.default.createElement(
                    N.IconButton,
                    {
                      classes: { root: w },
                      onClick: () => W("left"),
                      color: "onMediaLight",
                      variant: "contained",
                      "aria-label": "scroll left",
                      size: "small"
                    },
                    u.default.createElement(T.NavigateBeforeIcon, { fontSize: "small" })
                  )
                ),
                u.default.createElement(
                  "div",
                  { className: O(y, x, { [M]: !H || _ }) },
                  u.default.createElement(
                    N.IconButton,
                    {
                      classes: { root: w },
                      onClick: () => W("right"),
                      color: "onMediaLight",
                      variant: "contained",
                      "aria-label": "scroll right",
                      size: "small"
                    },
                    u.default.createElement(R.NavigateNextIcon, { fontSize: "small" })
                  )
                )
              )
          ),
          !I && m && u.default.createElement("div", { className: D }, m)
        ),
        K = (0, u.useMemo)(() => {
          let e = h.find((e) => e.key === f);
          return null == e ? void 0 : e.abnormalState;
        }, [f, h]),
        Y = (0, u.useMemo)(() => {
          let e = h.find((e) => e.key === f);
          return null == e ? void 0 : e.chartBanner;
        }, [f, h]);
      return u.default.createElement(
        o8,
        { dragAndDropOptions: F, resizeOptions: b },
        u.default.createElement(
          o5,
          {
            titleLabel: n,
            titleTooltipLabel: l,
            titleSuffix: a,
            secondaryAction: c,
            headerActionItems: o,
            headerActions: i,
            downloadAction: s,
            overflowMenuContent: d,
            footerContent: r,
            subTitle: U,
            chartControl: I ? m : void 0,
            abnormalState: K,
            chartBanner: Y,
            slots: E
          },
          t
        )
      );
    });
    let is = (0, d.makeStyles)()(() => ({
      subTitleContainer: {
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 0px 4px",
        flexDirection: "column"
      },
      chartControlContainer: { flex: "0 1 auto", marginLeft: "16px" },
      tabContainer: { paddingTop: "0px", paddingBottom: "4px", lineHeight: "110%" }
    }));
    var id = (0, u.memo)((e) => {
      let {
          children: t,
          titleLabel: n,
          titleTooltipLabel: l,
          footerContent: a,
          downloadAction: r,
          overflowMenuContent: o,
          subtitleComponent: i,
          tabSpecs: s,
          activeTabKey: d,
          onActiveTabChanged: c,
          slots: m
        } = e,
        {
          classes: { subTitleContainer: h, tabContainer: f }
        } = is(),
        p = (0, u.useCallback)(
          (e, t) => {
            c(t);
          },
          [c]
        ),
        v = (0, u.useMemo)(
          () =>
            u.default.createElement(
              g.Container,
              { disableGutters: !0, classes: { root: h }, maxWidth: !1 },
              i,
              u.default.createElement(
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
                  return u.default.createElement(k.Tab, {
                    label: n,
                    value: t,
                    key: t,
                    classes: { root: f }
                  });
                })
              )
            ),
          [d, p, h, i, f, s]
        ),
        F = (0, u.useMemo)(() => {
          let e = s.find((e) => e.key === d);
          return null == e ? void 0 : e.abnormalState;
        }, [d, s]);
      return u.default.createElement(
        o5,
        {
          titleLabel: n,
          titleTooltipLabel: l,
          downloadAction: r,
          overflowMenuContent: o,
          footerContent: a,
          subTitle: v,
          abnormalState: F,
          slots: m
        },
        t
      );
    });
    let ic = [tU.Normal, tU.Total, tU.Benchmark, tU.Projection, tU.Quota, tU.Comparison];
    e.s(
      [
        "AdaptiveDataTable",
        0,
        (e) => {
          var t;
          let {
              getExpandedRowId: n,
              getRowId: l,
              height: a,
              isError: r = !1,
              isLoading: o = !1,
              labels: i,
              navigation: s,
              onSortChange: d,
              rows: c,
              size: m = "Medium",
              sort: h,
              variant: f = "Divided"
            } = e,
            [p, g] = (0, u.useState)({}),
            v = (0, u.useSyncExternalStore)(oN, ow, oD),
            F = (0, u.useRef)(null),
            b = (0, u.useRef)(null),
            E = (0, u.useRef)(null),
            C = (0, u.useRef)(null),
            S = (0, u.useRef)(null),
            y = (0, u.useRef)(null),
            A = (0, u.useRef)(h),
            [x, M] = (0, u.useState)(),
            [N, w] = (0, u.useState)(),
            {
              cellsByColumnId: D,
              columnBlueprints: B,
              columnLayout: O,
              table: L
            } = ((e) => {
              var t;
              let {
                  availableWidth: n,
                  expanded: l,
                  getRowId: a,
                  onExpandedChange: r,
                  onSortChange: o,
                  rows: i,
                  sort: s,
                  textStyles: d
                } = e,
                c = i[0],
                [m, h] = (0, u.useState)(() =>
                  c ? { columnRow: c, measurementRows: i.slice(0, 50) } : void 0
                );
              (0, u.useEffect)(() => {
                !m && c && h({ columnRow: c, measurementRows: i.slice(0, 50) });
              }, [m, c, i]);
              let f = (0, u.useMemo)(
                  () =>
                    ((e) => {
                      let t = [];
                      if (!e) return t;
                      for (let n in e) t.push({ cell: e[n], id: n });
                      return t;
                    })(null == m ? void 0 : m.columnRow),
                  [m]
                ),
                p = (0, u.useMemo)(
                  () => (s ? [{ id: s.columnId, desc: "descending" === s.direction }] : []),
                  [s]
                ),
                g = (0, u.useCallback)(
                  (e) => {
                    let t,
                      n = ("function" == typeof e ? e(p) : e)[0];
                    null == o ||
                      o(
                        n && ((t = n.id), f.some((e) => e.id === t && "value" === e.cell.type))
                          ? { columnId: n.id, direction: n.desc ? "descending" : "ascending" }
                          : null
                      );
                  },
                  [f, o, p]
                ),
                v = (function (e) {
                  let [{ table: t, rootSource: n }] = (0, u.useState)(() => {
                    let t = (function (e) {
                      var t, n, l;
                      let a = e.features.coreReactivityFeature,
                        {
                          aggregationFns: r,
                          columnMeta: o,
                          coreRowModel: i,
                          expandedRowModel: u,
                          facetedMinMaxValues: s,
                          facetedRowModel: d,
                          facetedUniqueValues: c,
                          filterFns: m,
                          filterMeta: h,
                          filteredRowModel: f,
                          groupedRowModel: p,
                          paginatedRowModel: g,
                          sortFns: v,
                          sortedRowModel: F,
                          tableMeta: b,
                          ...E
                        } = e.features,
                        C = {
                          _cellInstanceInitFns: [],
                          _columnInstanceInitFns: [],
                          _features: { ...rW, ...E },
                          _headerGroupInstanceInitFns: [],
                          _headerInstanceInitFns: [],
                          _reactivity: a,
                          _rowInstanceInitFns: [],
                          _rowModelFns: { aggregationFns: r, filterFns: m, sortFns: v },
                          _rowModels: {},
                          atoms: {},
                          baseAtoms: {}
                        },
                        S = Object.values(C._features),
                        y = {
                          ...S.reduce((e, t) => {
                            var n;
                            return Object.assign(
                              e,
                              null == (n = t.getDefaultTableOptions) ? void 0 : n.call(t, C)
                            );
                          }, {}),
                          ...e
                        };
                      if (a.wrapExternalAtoms && y.atoms)
                        for (let [e, t] of Object.entries(y.atoms)) {
                          let n = t,
                            l = a.createWritableAtom(n.get(), {
                              debugName: "externalAtom/".concat(e)
                            });
                          y.atoms[e] = l;
                          let r = !1,
                            o = n.subscribe((e) => {
                              r || l.set(e);
                            }),
                            i = l.subscribe((e) => {
                              ((r = !0), n.set(e), (r = !1));
                            });
                          (a.addSubscription(o), a.addSubscription(i));
                        }
                      (a.createOptionsStore
                        ? ((C.optionsStore = a.createWritableAtom(y, {
                            debugName: "table/optionsStore"
                          })),
                          Object.defineProperty(C, "options", {
                            configurable: !0,
                            enumerable: !0,
                            get: () => C.optionsStore.get(),
                            set(e) {
                              C.optionsStore.set(() => e);
                            }
                          }))
                        : (C.options = y),
                        (C.initialState = (function (e) {
                          let t =
                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                          return (
                            Object.values(e).forEach((e) => {
                              var n, l;
                              t =
                                null !=
                                (n = null == (l = e.getInitialState) ? void 0 : l.call(e, t))
                                  ? n
                                  : t;
                            }),
                            aG(t)
                          );
                        })(C._features, C.options.initialState)));
                      let A = Object.keys(C.initialState);
                      for (let e = 0; e < A.length; e++) {
                        let t = A[e];
                        ((C.baseAtoms[t] = a.createWritableAtom(C.initialState[t], {
                          debugName: "table/baseAtoms/".concat(t)
                        })),
                          (C.atoms[t] = a.createReadonlyAtom(
                            () => {
                              var e;
                              let n = C.options,
                                l = null == (e = n.atoms) ? void 0 : e[t],
                                a = l ? l.get() : C.baseAtoms[t].get();
                              if (l) return a;
                              let r = n.state;
                              if (r && aK(r, t)) {
                                let e = r[t];
                                return void 0 === e ? C.initialState[t] : e;
                              }
                              return a;
                            },
                            { debugName: "table/atoms/".concat(t) }
                          )));
                      }
                      (rP(C),
                        Object.defineProperty(
                          (t = a.createReadonlyAtom(
                            () => {
                              let e = {};
                              for (let t = 0; t < A.length; t++) {
                                let n = A[t];
                                e[n] = C.atoms[n].get();
                              }
                              return e;
                            },
                            { compare: aR, debugName: "table/store" }
                          )),
                          "state",
                          { get: () => t.get() }
                        ),
                        "set" in t && (t.setState = t.set.bind(t)),
                        (C.store = t));
                      for (let e = 0; e < S.length; e++) {
                        let t = S[e];
                        (null == (n = t.initTableInstanceData) || n.call(t, C),
                          t.initCellInstanceData &&
                            C._cellInstanceInitFns.push(t.initCellInstanceData.bind(t)),
                          t.initColumnInstanceData &&
                            C._columnInstanceInitFns.push(t.initColumnInstanceData.bind(t)),
                          t.initHeaderGroupInstanceData &&
                            C._headerGroupInstanceInitFns.push(
                              t.initHeaderGroupInstanceData.bind(t)
                            ),
                          t.initHeaderInstanceData &&
                            C._headerInstanceInitFns.push(t.initHeaderInstanceData.bind(t)),
                          t.initRowInstanceData &&
                            C._rowInstanceInitFns.push(t.initRowInstanceData.bind(t)),
                          null == (l = t.constructTableAPIs) || l.call(t, C));
                      }
                      return C;
                    })({
                      ...e,
                      features: {
                        coreReactivityFeature: (function (e) {
                          var t;
                          let { createAtom: n, batch: l } = e,
                            a = n(0);
                          return {
                            createOptionsStore: !1,
                            wrapExternalAtoms: !1,
                            addSubscription: () => {
                              throw Error(
                                "Feature not supported in current reactivity implementation"
                              );
                            },
                            unmount: () => {
                              throw Error(
                                "Feature not supported in current reactivity implementation"
                              );
                            },
                            schedule: null != (t = e.schedule) ? t : (e) => queueMicrotask(e),
                            batch: l,
                            untrack: (e) => e(),
                            createReadonlyAtom: (e, t) => {
                              var l;
                              let r,
                                o = null != (l = null == t ? void 0 : t.compare) ? l : Object.is,
                                i = !1,
                                u = () => {
                                  let t = e();
                                  return ((i && o(r, t)) || ((r = t), (i = !0)), r);
                                },
                                s = n(() => (a.get(), u()), { compare: o });
                              return { get: u, subscribe: s.subscribe.bind(s) };
                            },
                            createWritableAtom: (e, t) =>
                              n(e, { compare: null == t ? void 0 : t.compare }),
                            commit: () => {
                              a.set((e) => e + 1);
                            }
                          };
                        })({ createAtom: aT, batch: aO }),
                        ...e.features
                      }
                    });
                    return (
                      (t.Subscribe = (e) => {
                        var n, l;
                        let a;
                        return (
                          (a = aV(
                            (l = { ...e, source: null != (n = e.source) ? n : t.store }).source,
                            l.selector,
                            { compare: aR }
                          )),
                          "function" == typeof l.children ? l.children(a) : l.children
                        );
                      }),
                      (t.FlexRender = aE),
                      {
                        table: t,
                        rootSource: (function (e) {
                          let t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : Object.is,
                            n,
                            l = !1;
                          return {
                            get: e.get,
                            markCommitted: (e) => {
                              ((n = e), (l = !0));
                            },
                            subscribe: (a) =>
                              e.subscribe((e) => {
                                (l && t(n, e)) || a(e);
                              })
                          };
                        })(t.store, aR)
                      }
                    );
                  });
                  r_(t, (t) => ({ ...t, ...e }), { syncExternalState: !1 });
                  let l = t.options.state,
                    a = n.get(),
                    r = aV(n, void 0, { compare: aR });
                  return (
                    rj(() => {
                      (n.markCommitted(a), rz(t, null != l ? l : null, aR));
                    }),
                    (0, u.useMemo)(() => ({ ...t, options: e, state: r }), [t, e, r])
                  );
                })({
                  autoResetExpanded: !1,
                  columns: (0, u.useMemo)(() => {
                    let e = [];
                    for (let t of f)
                      "value" === t.cell.type
                        ? e.push({
                            accessorFn: (e) => {
                              let n = e[t.id];
                              return "value" === n.type ? n.value : void 0;
                            },
                            enableSorting: !1 !== t.cell.sortable && void 0 !== o,
                            id: t.id,
                            sortDescFirst: !1
                          })
                        : e.push({ enableSorting: !1, id: t.id });
                    return e;
                  }, [f, o]),
                  data: (0, u.useMemo)(() => [...i], [i]),
                  enableMultiSort: !1,
                  features: rV,
                  getRowId: a,
                  getRowCanExpand: (e) => {
                    var t, n;
                    return (
                      0 === e.depth &&
                      (null != (t = null == (n = e.original[aF]) ? void 0 : n.length) ? t : 0) > 0
                    );
                  },
                  manualSorting: !0,
                  onExpandedChange: r,
                  onSortingChange: g,
                  state: { expanded: l, sorting: p }
                }),
                F = (0, u.useMemo)(() => new Map(f.map((e) => [e.id, e.cell])), [f]),
                b = null != (t = null == m ? void 0 : m.measurementRows) ? t : rH,
                E = (0, u.useMemo)(
                  () =>
                    av({
                      availableWidth: n,
                      columns: f,
                      isSortingEnabled: void 0 !== o,
                      rows: b,
                      textStyles: d
                    }),
                  [n, f, b, o, d]
                );
              return { cellsByColumnId: F, columnBlueprints: f, columnLayout: E, table: v };
            })({
              availableWidth: x,
              expanded: p,
              getRowId: l,
              onExpandedChange: g,
              onSortChange: d,
              rows: c,
              sort: h,
              textStyles: N
            }),
            k = L.getRowModel().rows,
            T = (0, u.useMemo)(
              () =>
                k.flatMap((e) => {
                  let t = e.original[aF],
                    n = { kind: "data", row: e };
                  return (!0 === p || p[e.id]) && t && t.length > 0
                    ? [n, { expandedRows: t, kind: "expandedRows", row: e }]
                    : [n];
                }),
              [p, k]
            ),
            R = B.some(
              (e) =>
                "value" === e.cell.type &&
                "string" == typeof e.cell.value &&
                "truncate" !== e.cell.textOverflow
            ),
            P = "infinite" === s.mode,
            z = r && 0 === k.length,
            _ = "Framed" === f && P && !v,
            W = "infinite" === s.mode && !0 === s.isLoadMoreError,
            j = "pagination" === s.mode ? s.onPageSizeChange : void 0,
            H = (0, u.useCallback)(
              (e) => {
                let t,
                  n,
                  l = T[e];
                return l
                  ? "data" === l.kind
                    ? ((t = l.row.id), "data-".concat(t))
                    : ((n = l.row.id), "expanded-rows-".concat(n))
                  : W
                    ? "load-more-error"
                    : "loading-more";
              },
              [W, T]
            ),
            V = P ? T.length + (s.isLoadingMore || W ? 1 : 0) : T.length,
            X = v ? Math.max(B.length, 1) * rG[m] : rG[m],
            G = (function (e) {
              let {
                  useFlushSync: t = !0,
                  directDomUpdates: n = !1,
                  directDomUpdatesMode: l = "transform",
                  ...a
                } = e,
                r = u.useReducer((e) => e + 1, 0)[1],
                o = u.useRef({
                  enabled: n,
                  mode: l,
                  container: null,
                  lastSize: null,
                  lastPositions: new WeakMap(),
                  prevRange: null
                });
              ((o.current.enabled = n), (o.current.mode = l));
              let i = (e) => {
                  let t = o.current;
                  if (!t.enabled || !t.container) return;
                  let n = e.getTotalSize();
                  if (n !== t.lastSize) {
                    t.lastSize = n;
                    let l = e.options.horizontal ? "width" : "height";
                    t.container.style[l] = "".concat(n, "px");
                  }
                },
                s = (e) => {
                  let t = o.current;
                  if (!t.enabled || !t.container) return;
                  i(e);
                  let n = !!e.options.horizontal,
                    l = "transform" === t.mode,
                    a = n ? "left" : "top",
                    r = e.options.scrollMargin;
                  for (let o of e.getVirtualItems()) {
                    let i = o.start - r,
                      u = e.elementsCache.get(o.key);
                    u &&
                      t.lastPositions.get(u) !== i &&
                      (t.lastPositions.set(u, i),
                      l
                        ? (u.style.transform = n
                            ? "translate3d(".concat(i, "px, 0, 0)")
                            : "translate3d(0, ".concat(i, "px, 0)"))
                        : (u.style[a] = "".concat(i, "px")));
                  }
                },
                d = {
                  ...a,
                  onChange: (e, n) => {
                    var l;
                    let i = o.current,
                      u = !0;
                    if (i.enabled) {
                      s(e);
                      let t = e.range,
                        n = i.prevRange;
                      (u =
                        !n ||
                        n.isScrolling !== e.isScrolling ||
                        n.startIndex !== (null == t ? void 0 : t.startIndex) ||
                        n.endIndex !== (null == t ? void 0 : t.endIndex)) &&
                        (i.prevRange = t
                          ? {
                              startIndex: t.startIndex,
                              endIndex: t.endIndex,
                              isScrolling: e.isScrolling
                            }
                          : null);
                    }
                    (u && (t && n ? (0, I.flushSync)(r) : r()),
                      null == (l = a.onChange) || l.call(a, e, n));
                  }
                },
                [c] = u.useState(() => {
                  let e = new lp(d);
                  return Object.assign(e, {
                    containerRef: (t) => {
                      let n = o.current;
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
                lv(() => c._didMount(), []),
                lv(() => (i(c), c._willUpdate())),
                lv(() => {
                  s(c);
                }),
                c
              );
            })({
              observeElementRect: ls,
              observeElementOffset: lm,
              scrollToFn: lf,
              count: V,
              estimateSize: () => X,
              getItemKey: H,
              getScrollElement: () => E.current,
              overscan: 8
            }),
            U = G.getVirtualItems(),
            K = "infinite" === s.mode ? s.nextCursor : null,
            Y = "infinite" === s.mode && !0 === s.isLoadingMore,
            q = "infinite" === s.mode ? s.onLoadMore : void 0;
          (0, u.useEffect)(() => {
            let e = !1,
              t = () => {
                if (e || !C.current || !S.current) return;
                let t = oO(C.current),
                  n = oO(S.current);
                if (!t || !n) return;
                let l = { cell: n, header: t };
                w((e) =>
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
          }, [c.length, m, U.length]);
          let Z = (0, u.useCallback)(
              (e) => {
                !e ||
                  !q ||
                  o ||
                  z ||
                  Y ||
                  W ||
                  null === K ||
                  y.current === K ||
                  e.scrollHeight - e.scrollTop - e.clientHeight >= 500 ||
                  ((y.current = K), q(K));
              },
              [K, W, o, Y, z, q]
            ),
            J = (0, u.useCallback)(() => {
              let e = E.current;
              (e && b.current && (b.current.scrollLeft = e.scrollLeft), Z(e));
            }, [Z]),
            $ = (0, u.useCallback)(() => {
              q && null !== K && !Y && ((y.current = K), q(K));
            }, [K, Y, q]),
            ee = (0, u.useCallback)((e) => (null == j ? void 0 : j(Number(e))), [j]);
          ((0, u.useEffect)(() => {
            let e = F.current;
            if (!e) return;
            let t = () => {
              M(e.clientWidth || void 0);
            };
            if ((t(), "u" < typeof ResizeObserver)) return;
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
          }, []),
            (0, u.useEffect)(() => {
              let e = A.current,
                t =
                  (null == e ? void 0 : e.columnId) !== (null == h ? void 0 : h.columnId) ||
                  (null == e ? void 0 : e.direction) !== (null == h ? void 0 : h.direction);
              ((A.current = h), t && ((y.current = null), E.current && (E.current.scrollTop = 0)));
            }, [h]),
            (0, u.useEffect)(() => {
              (null !== y.current && y.current !== K && (y.current = null), Z(E.current));
            }, [K, Y, Z, T.length]));
          let et = L.getHeaderGroups(),
            en = !v && void 0 !== x && O.tableWidth > x;
          (0, u.useEffect)(() => {
            (P && en) || !b.current || (b.current.scrollLeft = 0);
          }, [en, P]);
          let el = (0, u.useMemo)(
              () => ({ ...r8, overflowX: !P && en ? "auto" : "hidden", ...(_ ? oM : void 0) }),
              [en, P, _]
            ),
            ea = (0, u.useMemo)(
              () => ({ ...oe, ...(!P && !v ? { minWidth: O.tableWidth } : void 0) }),
              [O.tableWidth, P, v]
            ),
            er = (0, u.useMemo)(() => (v ? om : { ...ot, ...(P ? on : void 0) }), [P, v]),
            eo =
              ((t = rG[m]),
              void 0 === a
                ? 480 - t
                : "number" == typeof a
                  ? a - t
                  : "calc(".concat(a, " - ").concat(t, "px)")),
            eh = (0, u.useMemo)(
              () => ({ ...of, height: "auto", maxHeight: eo, overflowX: en ? "auto" : "hidden" }),
              [en, eo]
            ),
            ef = (0, u.useMemo)(
              () => ({ ...oa, gridTemplateColumns: O.gridTemplateColumns }),
              [O.gridTemplateColumns]
            ),
            ep = (0, u.useMemo)(() => ({ ...oC, width: null != x ? x : "100%" }), [x]),
            eg = z
              ? i.error
              : o && 0 === k.length
                ? u.default.createElement(eC, {
                    ariaLabel: i.loading,
                    size: "Medium",
                    variant: "Indeterminate"
                  })
                : 0 === k.length
                  ? i.emptyState
                  : void 0,
            ev = Math.max(B.length, 1),
            eF = o && k.length > 0,
            eE = (0, u.useMemo)(() => ({ ...el, ...(eF ? rY : void 0) }), [el, eF]);
          return u.default.createElement(
            "div",
            null,
            u.default.createElement(
              "div",
              { className: "relative" },
              u.default.createElement(
                "div",
                { "aria-busy": o, inert: !!eF || void 0, ref: F, style: eE },
                u.default.createElement(
                  "div",
                  { className: v ? r1 : void 0, style: ea },
                  u.default.createElement(
                    ei,
                    { size: m, style: oe, variant: _ || v ? "Divided" : f },
                    u.default.createElement(
                      eu,
                      { ref: b, style: er },
                      et.map((e) =>
                        u.default.createElement(
                          ed,
                          { key: e.id, style: ef },
                          e.headers.map((e, t) => {
                            var n, l;
                            let a = D.get(e.column.id);
                            if (!a) return null;
                            let r = e.column.getIsSorted();
                            return u.default.createElement(
                              ec,
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
                                  "asc" === r ? "ascending" : "desc" === r ? "descending" : "none",
                                sortLabel: "value" === a.type ? a.sortAriaLabel : void 0,
                                style: !1 === a.headerDivider ? ox : void 0
                              },
                              null != (l = a.header) ? l : ""
                            );
                          })
                        )
                      )
                    ),
                    void 0 !== eg
                      ? u.default.createElement(
                          es,
                          { onScroll: P ? J : void 0, ref: P ? E : void 0, style: P ? eh : ol },
                          u.default.createElement(oj, { cellStyle: ep, columnCount: ev }, eg)
                        )
                      : P
                        ? u.default.createElement(
                            es,
                            { onScroll: J, ref: E, style: eh },
                            u.default.createElement(
                              ed,
                              {
                                "aria-hidden": !0,
                                style: {
                                  ...op,
                                  height: G.getTotalSize(),
                                  ...(!v ? { minWidth: O.tableWidth } : void 0)
                                }
                              },
                              u.default.createElement(em, { colSpan: ev, style: og })
                            ),
                            U.map((e, t) => {
                              let l,
                                a,
                                r = T[e.index];
                              if (!r) {
                                let t = W && !Y;
                                return u.default.createElement(
                                  ed,
                                  {
                                    key: t ? "load-more-error" : "loading-more",
                                    style: {
                                      ...oE,
                                      transform: "translateY(".concat(e.start, "px)")
                                    }
                                  },
                                  u.default.createElement(
                                    em,
                                    { align: "center", colSpan: ev, style: ep },
                                    t
                                      ? u.default.createElement(
                                          "div",
                                          { className: "flex items-center gap-small" },
                                          u.default.createElement("span", null, i.error),
                                          u.default.createElement(
                                            eb.Button,
                                            { onClick: $, size: "Small", variant: "Standard" },
                                            i.retry
                                          )
                                        )
                                      : u.default.createElement(eC, {
                                          ariaLabel: i.loading,
                                          size: "Small",
                                          variant: "Indeterminate"
                                        })
                                  )
                                );
                              }
                              if ("expandedRows" === r.kind) {
                                let t;
                                return u.default.createElement(oW, {
                                  columnCount: ev,
                                  expandedRows: r.expandedRows,
                                  getExpandedRowId: n,
                                  isSmallScreen: v,
                                  isVirtual: !0,
                                  key: ((t = r.row.id), "expanded-rows-".concat(t)),
                                  measureElement: G.measureElement,
                                  size: m,
                                  textStyles: N,
                                  transform: "translateY(".concat(e.start, "px)"),
                                  virtualIndex: e.index
                                });
                              }
                              let { row: o } = r;
                              return u.default.createElement(o_, {
                                columnGrid: O.gridTemplateColumns,
                                isSmallScreen: v,
                                isVirtual: !0,
                                key: ((l = o.id), "data-".concat(l)),
                                measureElement:
                                  !R &&
                                  (null ==
                                  (a = "u" < typeof navigator ? void 0 : navigator.userAgent)
                                    ? void 0
                                    : a.includes("Firefox"))
                                    ? void 0
                                    : G.measureElement,
                                measurementCellRef: 0 === t ? S : void 0,
                                minimumHeight: rG[m],
                                row: o,
                                transform: "translateY(".concat(e.start, "px)"),
                                virtualIndex: e.index
                              });
                            })
                          )
                        : u.default.createElement(
                            es,
                            { style: ol },
                            T.map((e, t) => {
                              let l, a;
                              return "expandedRows" === e.kind
                                ? u.default.createElement(oW, {
                                    columnCount: ev,
                                    expandedRows: e.expandedRows,
                                    getExpandedRowId: n,
                                    isSmallScreen: v,
                                    key: ((l = e.row.id), "expanded-rows-".concat(l)),
                                    size: m,
                                    textStyles: N
                                  })
                                : u.default.createElement(o_, {
                                    columnGrid: O.gridTemplateColumns,
                                    isSmallScreen: v,
                                    key: ((a = e.row.id), "data-".concat(a)),
                                    measurementCellRef: 0 === t ? S : void 0,
                                    minimumHeight: rG[m],
                                    row: e.row
                                  });
                            })
                          )
                  )
                )
              ),
              eF
                ? u.default.createElement(
                    "div",
                    { className: "absolute inset-[0] flex items-center justify-center", style: rK },
                    u.default.createElement(eC, {
                      ariaLabel: i.loading,
                      size: "Medium",
                      variant: "Indeterminate"
                    })
                  )
                : null
            ),
            "pagination" === s.mode
              ? u.default.createElement(
                  "div",
                  {
                    className: ""
                      .concat(
                        s.rowsPerPageOptions
                          ? "flex items-center justify-end gap-small"
                          : "flex items-center justify-end",
                        " "
                      )
                      .concat(rq[m])
                  },
                  s.rowsPerPageOptions
                    ? u.default.createElement(
                        "div",
                        { className: "flex items-center gap-small" },
                        u.default.createElement(
                          "span",
                          { className: "".concat(rQ[m], " content-default") },
                          i.rowsPerPage
                        ),
                        u.default.createElement(
                          eP,
                          {
                            variant: "Utility",
                            ariaLabel: i.rowsPerPage,
                            className: "width-fit",
                            onValueChange: ee,
                            placeholder: String(s.pageSize),
                            size: r$[m],
                            value: String(s.pageSize)
                          },
                          u.default.createElement(
                            eq,
                            null,
                            s.rowsPerPageOptions.map((e) =>
                              u.default.createElement(eZ, {
                                key: e,
                                title: String(e),
                                value: String(e)
                              })
                            )
                          )
                        )
                      )
                    : null,
                  u.default.createElement(
                    "div",
                    { className: "flex items-center gap-large" },
                    u.default.createElement(
                      "span",
                      { className: "".concat(rQ[m], " content-default") },
                      i.page(s.pageIndex, s.pageSize, s.totalRowCount)
                    ),
                    u.default.createElement(
                      "div",
                      { className: rZ[m] },
                      u.default.createElement(Q, {
                        ariaLabel: i.previousPage,
                        icon: "icon-regular-chevron-small-left",
                        isDisabled: !s.hasPreviousPage || o,
                        onClick: s.onPreviousPage,
                        size: rJ[m],
                        variant: "Utility"
                      }),
                      u.default.createElement(Q, {
                        ariaLabel: i.nextPage,
                        icon: "icon-regular-chevron-small-right",
                        isDisabled: null === s.nextCursor || o,
                        onClick: () => {
                          null !== s.nextCursor && s.onNextPage(s.nextCursor);
                        },
                        size: rJ[m],
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
        aF,
        "AreaChart",
        0,
        nI,
        "AreaSeriesDataTypes",
        0,
        ic,
        "BarChart",
        0,
        nW,
        "ChartAbnormalStatus",
        0,
        o2,
        "ChartCardDragDropProvider",
        0,
        (e) => {
          let { value: t, children: n } = e;
          return u.default.createElement(o$.Provider, { value: t }, n);
        },
        "ChartColor",
        0,
        tS,
        "ChartStyleMode",
        0,
        tX,
        "ColumnChart",
        0,
        n_,
        "EmptyChart",
        0,
        ln,
        "LineChart",
        0,
        nR,
        "MapChart",
        0,
        nj,
        "OrderedChartColors",
        0,
        tx,
        "OverflowTitle",
        0,
        oG,
        "PieChart",
        0,
        nH,
        "SankeyChart",
        0,
        lt,
        "SeriesDataTypes",
        0,
        tU,
        "SingleChartCardContainer",
        0,
        io,
        "TabbedChartsCardContainer",
        0,
        iu,
        "TabbedTimeComparatorChartsCardContainer",
        0,
        id,
        "TreemapChart",
        0,
        nQ,
        "XAxisGranularity",
        0,
        tG,
        "decorateTooltipSeriesName",
        0,
        (e, t) => "".concat(e, "__chip(").concat(t, ")__")
      ],
      887251
    );
  }
]);

//# debugId=a86bce13-3b32-0b40-a800-f5e52431a07a
//# sourceMappingURL=23vo2-p0x7v7-.js.map
