var V0 = Object.defineProperty;
var W0 = (t, e, n) =>
  e in t
    ? V0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var O = (t, e, n) => (W0(t, typeof e != "symbol" ? e + "" : e, n), n);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const r of s)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const r = {};
    return (
      s.integrity && (r.integrity = s.integrity),
      s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const r = n(s);
    fetch(s.href, r);
  }
})();
function $0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var ap = { exports: {} },
  ba = {},
  lp = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fr = Symbol.for("react.element"),
  U0 = Symbol.for("react.portal"),
  Y0 = Symbol.for("react.fragment"),
  X0 = Symbol.for("react.strict_mode"),
  K0 = Symbol.for("react.profiler"),
  Q0 = Symbol.for("react.provider"),
  q0 = Symbol.for("react.context"),
  G0 = Symbol.for("react.forward_ref"),
  Z0 = Symbol.for("react.suspense"),
  J0 = Symbol.for("react.memo"),
  ev = Symbol.for("react.lazy"),
  wd = Symbol.iterator;
function tv(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (wd && t[wd]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var cp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  up = Object.assign,
  dp = {};
function qi(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = dp),
    (this.updater = n || cp);
}
qi.prototype.isReactComponent = {};
qi.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
qi.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function hp() {}
hp.prototype = qi.prototype;
function Rc(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = dp),
    (this.updater = n || cp);
}
var Ic = (Rc.prototype = new hp());
Ic.constructor = Rc;
up(Ic, qi.prototype);
Ic.isPureReactComponent = !0;
var kd = Array.isArray,
  fp = Object.prototype.hasOwnProperty,
  zc = { current: null },
  pp = { key: !0, ref: !0, __self: !0, __source: !0 };
function gp(t, e, n) {
  var i,
    s = {},
    r = null,
    o = null;
  if (e != null)
    for (i in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (r = "" + e.key),
    e))
      fp.call(e, i) && !pp.hasOwnProperty(i) && (s[i] = e[i]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    s.children = l;
  }
  if (t && t.defaultProps)
    for (i in ((a = t.defaultProps), a)) s[i] === void 0 && (s[i] = a[i]);
  return {
    $$typeof: fr,
    type: t,
    key: r,
    ref: o,
    props: s,
    _owner: zc.current,
  };
}
function nv(t, e) {
  return {
    $$typeof: fr,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Fc(t) {
  return typeof t == "object" && t !== null && t.$$typeof === fr;
}
function iv(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var Sd = /\/+/g;
function Xa(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? iv("" + t.key)
    : e.toString(36);
}
function ao(t, e, n, i, s) {
  var r = typeof t;
  (r === "undefined" || r === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (r) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case fr:
          case U0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (s = s(o)),
      (t = i === "" ? "." + Xa(o, 0) : i),
      kd(s)
        ? ((n = ""),
          t != null && (n = t.replace(Sd, "$&/") + "/"),
          ao(s, e, n, "", function (c) {
            return c;
          }))
        : s != null &&
          (Fc(s) &&
            (s = nv(
              s,
              n +
                (!s.key || (o && o.key === s.key)
                  ? ""
                  : ("" + s.key).replace(Sd, "$&/") + "/") +
                t
            )),
          e.push(s)),
      1
    );
  if (((o = 0), (i = i === "" ? "." : i + ":"), kd(t)))
    for (var a = 0; a < t.length; a++) {
      r = t[a];
      var l = i + Xa(r, a);
      o += ao(r, e, n, l, s);
    }
  else if (((l = tv(t)), typeof l == "function"))
    for (t = l.call(t), a = 0; !(r = t.next()).done; )
      (r = r.value), (l = i + Xa(r, a++)), (o += ao(r, e, n, l, s));
  else if (r === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Sr(t, e, n) {
  if (t == null) return t;
  var i = [],
    s = 0;
  return (
    ao(t, i, "", "", function (r) {
      return e.call(n, r, s++);
    }),
    i
  );
}
function sv(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Ie = { current: null },
  lo = { transition: null },
  rv = {
    ReactCurrentDispatcher: Ie,
    ReactCurrentBatchConfig: lo,
    ReactCurrentOwner: zc,
  };
V.Children = {
  map: Sr,
  forEach: function (t, e, n) {
    Sr(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Sr(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Sr(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Fc(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
V.Component = qi;
V.Fragment = Y0;
V.Profiler = K0;
V.PureComponent = Rc;
V.StrictMode = X0;
V.Suspense = Z0;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rv;
V.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        "."
    );
  var i = up({}, t.props),
    s = t.key,
    r = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((r = e.ref), (o = zc.current)),
      e.key !== void 0 && (s = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e)
      fp.call(e, l) &&
        !pp.hasOwnProperty(l) &&
        (i[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    i.children = a;
  }
  return { $$typeof: fr, type: t.type, key: s, ref: r, props: i, _owner: o };
};
V.createContext = function (t) {
  return (
    (t = {
      $$typeof: q0,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: Q0, _context: t }),
    (t.Consumer = t)
  );
};
V.createElement = gp;
V.createFactory = function (t) {
  var e = gp.bind(null, t);
  return (e.type = t), e;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (t) {
  return { $$typeof: G0, render: t };
};
V.isValidElement = Fc;
V.lazy = function (t) {
  return { $$typeof: ev, _payload: { _status: -1, _result: t }, _init: sv };
};
V.memo = function (t, e) {
  return { $$typeof: J0, type: t, compare: e === void 0 ? null : e };
};
V.startTransition = function (t) {
  var e = lo.transition;
  lo.transition = {};
  try {
    t();
  } finally {
    lo.transition = e;
  }
};
V.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
V.useCallback = function (t, e) {
  return Ie.current.useCallback(t, e);
};
V.useContext = function (t) {
  return Ie.current.useContext(t);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (t) {
  return Ie.current.useDeferredValue(t);
};
V.useEffect = function (t, e) {
  return Ie.current.useEffect(t, e);
};
V.useId = function () {
  return Ie.current.useId();
};
V.useImperativeHandle = function (t, e, n) {
  return Ie.current.useImperativeHandle(t, e, n);
};
V.useInsertionEffect = function (t, e) {
  return Ie.current.useInsertionEffect(t, e);
};
V.useLayoutEffect = function (t, e) {
  return Ie.current.useLayoutEffect(t, e);
};
V.useMemo = function (t, e) {
  return Ie.current.useMemo(t, e);
};
V.useReducer = function (t, e, n) {
  return Ie.current.useReducer(t, e, n);
};
V.useRef = function (t) {
  return Ie.current.useRef(t);
};
V.useState = function (t) {
  return Ie.current.useState(t);
};
V.useSyncExternalStore = function (t, e, n) {
  return Ie.current.useSyncExternalStore(t, e, n);
};
V.useTransition = function () {
  return Ie.current.useTransition();
};
V.version = "18.2.0";
lp.exports = V;
var L = lp.exports;
const Bc = $0(L);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ov = L,
  av = Symbol.for("react.element"),
  lv = Symbol.for("react.fragment"),
  cv = Object.prototype.hasOwnProperty,
  uv = ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dv = { key: !0, ref: !0, __self: !0, __source: !0 };
function mp(t, e, n) {
  var i,
    s = {},
    r = null,
    o = null;
  n !== void 0 && (r = "" + n),
    e.key !== void 0 && (r = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (i in e) cv.call(e, i) && !dv.hasOwnProperty(i) && (s[i] = e[i]);
  if (t && t.defaultProps)
    for (i in ((e = t.defaultProps), e)) s[i] === void 0 && (s[i] = e[i]);
  return {
    $$typeof: av,
    type: t,
    key: r,
    ref: o,
    props: s,
    _owner: uv.current,
  };
}
ba.Fragment = lv;
ba.jsx = mp;
ba.jsxs = mp;
ap.exports = ba;
var f = ap.exports,
  Ll = {},
  vp = { exports: {} },
  tt = {},
  yp = { exports: {} },
  xp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(P, N) {
    var R = P.length;
    P.push(N);
    e: for (; 0 < R; ) {
      var Y = (R - 1) >>> 1,
        U = P[Y];
      if (0 < s(U, N)) (P[Y] = N), (P[R] = U), (R = Y);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function i(P) {
    if (P.length === 0) return null;
    var N = P[0],
      R = P.pop();
    if (R !== N) {
      P[0] = R;
      e: for (var Y = 0, U = P.length, Ne = U >>> 1; Y < Ne; ) {
        var he = 2 * (Y + 1) - 1,
          ye = P[he],
          pe = he + 1,
          Nt = P[pe];
        if (0 > s(ye, R))
          pe < U && 0 > s(Nt, ye)
            ? ((P[Y] = Nt), (P[pe] = R), (Y = pe))
            : ((P[Y] = ye), (P[he] = R), (Y = he));
        else if (pe < U && 0 > s(Nt, R)) (P[Y] = Nt), (P[pe] = R), (Y = pe);
        else break e;
      }
    }
    return N;
  }
  function s(P, N) {
    var R = P.sortIndex - N.sortIndex;
    return R !== 0 ? R : P.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var r = performance;
    t.unstable_now = function () {
      return r.now();
    };
  } else {
    var o = Date,
      a = o.now();
    t.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    c = [],
    u = 1,
    d = null,
    h = 3,
    p = !1,
    m = !1,
    y = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(P) {
    for (var N = n(c); N !== null; ) {
      if (N.callback === null) i(c);
      else if (N.startTime <= P)
        i(c), (N.sortIndex = N.expirationTime), e(l, N);
      else break;
      N = n(c);
    }
  }
  function b(P) {
    if (((y = !1), x(P), !m))
      if (n(l) !== null) (m = !0), I(w);
      else {
        var N = n(c);
        N !== null && H(b, N.startTime - P);
      }
  }
  function w(P, N) {
    (m = !1), y && ((y = !1), g(C), (C = -1)), (p = !0);
    var R = h;
    try {
      for (
        x(N), d = n(l);
        d !== null && (!(d.expirationTime > N) || (P && !D()));

      ) {
        var Y = d.callback;
        if (typeof Y == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var U = Y(d.expirationTime <= N);
          (N = t.unstable_now()),
            typeof U == "function" ? (d.callback = U) : d === n(l) && i(l),
            x(N);
        } else i(l);
        d = n(l);
      }
      if (d !== null) var Ne = !0;
      else {
        var he = n(c);
        he !== null && H(b, he.startTime - N), (Ne = !1);
      }
      return Ne;
    } finally {
      (d = null), (h = R), (p = !1);
    }
  }
  var k = !1,
    S = null,
    C = -1,
    M = 5,
    E = -1;
  function D() {
    return !(t.unstable_now() - E < M);
  }
  function A() {
    if (S !== null) {
      var P = t.unstable_now();
      E = P;
      var N = !0;
      try {
        N = S(!0, P);
      } finally {
        N ? z() : ((k = !1), (S = null));
      }
    } else k = !1;
  }
  var z;
  if (typeof v == "function")
    z = function () {
      v(A);
    };
  else if (typeof MessageChannel < "u") {
    var ee = new MessageChannel(),
      F = ee.port2;
    (ee.port1.onmessage = A),
      (z = function () {
        F.postMessage(null);
      });
  } else
    z = function () {
      _(A, 0);
    };
  function I(P) {
    (S = P), k || ((k = !0), z());
  }
  function H(P, N) {
    C = _(function () {
      P(t.unstable_now());
    }, N);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      m || p || ((m = !0), I(w));
    }),
    (t.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (t.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = h;
      }
      var R = h;
      h = N;
      try {
        return P();
      } finally {
        h = R;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (P, N) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var R = h;
      h = P;
      try {
        return N();
      } finally {
        h = R;
      }
    }),
    (t.unstable_scheduleCallback = function (P, N, R) {
      var Y = t.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? Y + R : Y))
          : (R = Y),
        P)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = R + U),
        (P = {
          id: u++,
          callback: N,
          priorityLevel: P,
          startTime: R,
          expirationTime: U,
          sortIndex: -1,
        }),
        R > Y
          ? ((P.sortIndex = R),
            e(c, P),
            n(l) === null &&
              P === n(c) &&
              (y ? (g(C), (C = -1)) : (y = !0), H(b, R - Y)))
          : ((P.sortIndex = U), e(l, P), m || p || ((m = !0), I(w))),
        P
      );
    }),
    (t.unstable_shouldYield = D),
    (t.unstable_wrapCallback = function (P) {
      var N = h;
      return function () {
        var R = h;
        h = N;
        try {
          return P.apply(this, arguments);
        } finally {
          h = R;
        }
      };
    });
})(xp);
yp.exports = xp;
var hv = yp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _p = L,
  Je = hv;
function j(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var bp = new Set(),
  Bs = {};
function li(t, e) {
  Ii(t, e), Ii(t + "Capture", e);
}
function Ii(t, e) {
  for (Bs[t] = e, t = 0; t < e.length; t++) bp.add(e[t]);
}
var $t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ol = Object.prototype.hasOwnProperty,
  fv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Cd = {},
  Ed = {};
function pv(t) {
  return Ol.call(Ed, t)
    ? !0
    : Ol.call(Cd, t)
    ? !1
    : fv.test(t)
    ? (Ed[t] = !0)
    : ((Cd[t] = !0), !1);
}
function gv(t, e, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function mv(t, e, n, i) {
  if (e === null || typeof e > "u" || gv(t, e, n, i)) return !0;
  if (i) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function ze(t, e, n, i, s, r, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = i),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = r),
    (this.removeEmptyString = o);
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    Se[t] = new ze(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  Se[e] = new ze(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  Se[t] = new ze(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  Se[t] = new ze(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    Se[t] = new ze(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  Se[t] = new ze(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  Se[t] = new ze(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  Se[t] = new ze(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  Se[t] = new ze(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Hc = /[\-:]([a-z])/g;
function Vc(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Hc, Vc);
    Se[e] = new ze(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Hc, Vc);
    Se[e] = new ze(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(Hc, Vc);
  Se[e] = new ze(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  Se[t] = new ze(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  Se[t] = new ze(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Wc(t, e, n, i) {
  var s = Se.hasOwnProperty(e) ? Se[e] : null;
  (s !== null
    ? s.type !== 0
    : i ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (mv(e, n, s, i) && (n = null),
    i || s === null
      ? pv(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : s.mustUseProperty
      ? (t[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
      : ((e = s.attributeName),
        (i = s.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((s = s.type),
            (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
            i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))));
}
var Qt = _p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Cr = Symbol.for("react.element"),
  mi = Symbol.for("react.portal"),
  vi = Symbol.for("react.fragment"),
  $c = Symbol.for("react.strict_mode"),
  Dl = Symbol.for("react.profiler"),
  wp = Symbol.for("react.provider"),
  kp = Symbol.for("react.context"),
  Uc = Symbol.for("react.forward_ref"),
  Nl = Symbol.for("react.suspense"),
  Tl = Symbol.for("react.suspense_list"),
  Yc = Symbol.for("react.memo"),
  Jt = Symbol.for("react.lazy"),
  Sp = Symbol.for("react.offscreen"),
  jd = Symbol.iterator;
function Ji(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (jd && t[jd]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var ae = Object.assign,
  Ka;
function ps(t) {
  if (Ka === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Ka = (e && e[1]) || "";
    }
  return (
    `
` +
    Ka +
    t
  );
}
var Qa = !1;
function qa(t, e) {
  if (!t || Qa) return "";
  Qa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (c) {
          var i = c;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (c) {
          i = c;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        i = c;
      }
      t();
    }
  } catch (c) {
    if (c && i && typeof c.stack == "string") {
      for (
        var s = c.stack.split(`
`),
          r = i.stack.split(`
`),
          o = s.length - 1,
          a = r.length - 1;
        1 <= o && 0 <= a && s[o] !== r[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (s[o] !== r[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || s[o] !== r[a])) {
                var l =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", t.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Qa = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? ps(t) : "";
}
function vv(t) {
  switch (t.tag) {
    case 5:
      return ps(t.type);
    case 16:
      return ps("Lazy");
    case 13:
      return ps("Suspense");
    case 19:
      return ps("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = qa(t.type, !1)), t;
    case 11:
      return (t = qa(t.type.render, !1)), t;
    case 1:
      return (t = qa(t.type, !0)), t;
    default:
      return "";
  }
}
function Al(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case vi:
      return "Fragment";
    case mi:
      return "Portal";
    case Dl:
      return "Profiler";
    case $c:
      return "StrictMode";
    case Nl:
      return "Suspense";
    case Tl:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case kp:
        return (t.displayName || "Context") + ".Consumer";
      case wp:
        return (t._context.displayName || "Context") + ".Provider";
      case Uc:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Yc:
        return (
          (e = t.displayName || null), e !== null ? e : Al(t.type) || "Memo"
        );
      case Jt:
        (e = t._payload), (t = t._init);
        try {
          return Al(t(e));
        } catch {}
    }
  return null;
}
function yv(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Al(e);
    case 8:
      return e === $c ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function kn(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function Cp(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function xv(t) {
  var e = Cp(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    i = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      r = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          (i = "" + o), r.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i;
        },
        setValue: function (o) {
          i = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Er(t) {
  t._valueTracker || (t._valueTracker = xv(t));
}
function Ep(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    i = "";
  return (
    t && (i = Cp(t) ? (t.checked ? "true" : "false") : t.value),
    (t = i),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Po(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Rl(t, e) {
  var n = e.checked;
  return ae({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function Md(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    i = e.checked != null ? e.checked : e.defaultChecked;
  (n = kn(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function jp(t, e) {
  (e = e.checked), e != null && Wc(t, "checked", e, !1);
}
function Il(t, e) {
  jp(t, e);
  var n = kn(e.value),
    i = e.type;
  if (n != null)
    i === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (i === "submit" || i === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? zl(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && zl(t, e.type, kn(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function Pd(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var i = e.type;
    if (
      !(
        (i !== "submit" && i !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function zl(t, e, n) {
  (e !== "number" || Po(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var gs = Array.isArray;
function Li(t, e, n, i) {
  if (((t = t.options), e)) {
    e = {};
    for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
    for (n = 0; n < t.length; n++)
      (s = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== s && (t[n].selected = s),
        s && i && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + kn(n), e = null, s = 0; s < t.length; s++) {
      if (t[s].value === n) {
        (t[s].selected = !0), i && (t[s].defaultSelected = !0);
        return;
      }
      e !== null || t[s].disabled || (e = t[s]);
    }
    e !== null && (e.selected = !0);
  }
}
function Fl(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(j(91));
  return ae({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function Ld(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(j(92));
      if (gs(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: kn(n) };
}
function Mp(t, e) {
  var n = kn(e.value),
    i = kn(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    i != null && (t.defaultValue = "" + i);
}
function Od(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Pp(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bl(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? Pp(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var jr,
  Lp = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, i, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, i, s);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        jr = jr || document.createElement("div"),
          jr.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = jr.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function Hs(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Ss = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  _v = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ss).forEach(function (t) {
  _v.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Ss[e] = Ss[t]);
  });
});
function Op(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Ss.hasOwnProperty(t) && Ss[t])
    ? ("" + e).trim()
    : e + "px";
}
function Dp(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        s = Op(n, e[n], i);
      n === "float" && (n = "cssFloat"), i ? t.setProperty(n, s) : (t[n] = s);
    }
}
var bv = ae(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Hl(t, e) {
  if (e) {
    if (bv[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(j(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(j(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(j(62));
  }
}
function Vl(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Wl = null;
function Xc(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var $l = null,
  Oi = null,
  Di = null;
function Dd(t) {
  if ((t = mr(t))) {
    if (typeof $l != "function") throw Error(j(280));
    var e = t.stateNode;
    e && ((e = Ea(e)), $l(t.stateNode, t.type, e));
  }
}
function Np(t) {
  Oi ? (Di ? Di.push(t) : (Di = [t])) : (Oi = t);
}
function Tp() {
  if (Oi) {
    var t = Oi,
      e = Di;
    if (((Di = Oi = null), Dd(t), e)) for (t = 0; t < e.length; t++) Dd(e[t]);
  }
}
function Ap(t, e) {
  return t(e);
}
function Rp() {}
var Ga = !1;
function Ip(t, e, n) {
  if (Ga) return t(e, n);
  Ga = !0;
  try {
    return Ap(t, e, n);
  } finally {
    (Ga = !1), (Oi !== null || Di !== null) && (Rp(), Tp());
  }
}
function Vs(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var i = Ea(n);
  if (i === null) return null;
  n = i[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (i = !i.disabled) ||
        ((t = t.type),
        (i = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !i);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(j(231, e, typeof n));
  return n;
}
var Ul = !1;
if ($t)
  try {
    var es = {};
    Object.defineProperty(es, "passive", {
      get: function () {
        Ul = !0;
      },
    }),
      window.addEventListener("test", es, es),
      window.removeEventListener("test", es, es);
  } catch {
    Ul = !1;
  }
function wv(t, e, n, i, s, r, o, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Cs = !1,
  Lo = null,
  Oo = !1,
  Yl = null,
  kv = {
    onError: function (t) {
      (Cs = !0), (Lo = t);
    },
  };
function Sv(t, e, n, i, s, r, o, a, l) {
  (Cs = !1), (Lo = null), wv.apply(kv, arguments);
}
function Cv(t, e, n, i, s, r, o, a, l) {
  if ((Sv.apply(this, arguments), Cs)) {
    if (Cs) {
      var c = Lo;
      (Cs = !1), (Lo = null);
    } else throw Error(j(198));
    Oo || ((Oo = !0), (Yl = c));
  }
}
function ci(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function zp(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function Nd(t) {
  if (ci(t) !== t) throw Error(j(188));
}
function Ev(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = ci(t)), e === null)) throw Error(j(188));
    return e !== t ? null : t;
  }
  for (var n = t, i = e; ; ) {
    var s = n.return;
    if (s === null) break;
    var r = s.alternate;
    if (r === null) {
      if (((i = s.return), i !== null)) {
        n = i;
        continue;
      }
      break;
    }
    if (s.child === r.child) {
      for (r = s.child; r; ) {
        if (r === n) return Nd(s), t;
        if (r === i) return Nd(s), e;
        r = r.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== i.return) (n = s), (i = r);
    else {
      for (var o = !1, a = s.child; a; ) {
        if (a === n) {
          (o = !0), (n = s), (i = r);
          break;
        }
        if (a === i) {
          (o = !0), (i = s), (n = r);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = r.child; a; ) {
          if (a === n) {
            (o = !0), (n = r), (i = s);
            break;
          }
          if (a === i) {
            (o = !0), (i = r), (n = s);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(j(189));
      }
    }
    if (n.alternate !== i) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? t : e;
}
function Fp(t) {
  return (t = Ev(t)), t !== null ? Bp(t) : null;
}
function Bp(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Bp(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Hp = Je.unstable_scheduleCallback,
  Td = Je.unstable_cancelCallback,
  jv = Je.unstable_shouldYield,
  Mv = Je.unstable_requestPaint,
  de = Je.unstable_now,
  Pv = Je.unstable_getCurrentPriorityLevel,
  Kc = Je.unstable_ImmediatePriority,
  Vp = Je.unstable_UserBlockingPriority,
  Do = Je.unstable_NormalPriority,
  Lv = Je.unstable_LowPriority,
  Wp = Je.unstable_IdlePriority,
  wa = null,
  Mt = null;
function Ov(t) {
  if (Mt && typeof Mt.onCommitFiberRoot == "function")
    try {
      Mt.onCommitFiberRoot(wa, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var _t = Math.clz32 ? Math.clz32 : Tv,
  Dv = Math.log,
  Nv = Math.LN2;
function Tv(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((Dv(t) / Nv) | 0)) | 0;
}
var Mr = 64,
  Pr = 4194304;
function ms(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function No(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    s = t.suspendedLanes,
    r = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~s;
    a !== 0 ? (i = ms(a)) : ((r &= o), r !== 0 && (i = ms(r)));
  } else (o = n & ~s), o !== 0 ? (i = ms(o)) : r !== 0 && (i = ms(r));
  if (i === 0) return 0;
  if (
    e !== 0 &&
    e !== i &&
    !(e & s) &&
    ((s = i & -i), (r = e & -e), s >= r || (s === 16 && (r & 4194240) !== 0))
  )
    return e;
  if ((i & 4 && (i |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= i; 0 < e; )
      (n = 31 - _t(e)), (s = 1 << n), (i |= t[n]), (e &= ~s);
  return i;
}
function Av(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Rv(t, e) {
  for (
    var n = t.suspendedLanes,
      i = t.pingedLanes,
      s = t.expirationTimes,
      r = t.pendingLanes;
    0 < r;

  ) {
    var o = 31 - _t(r),
      a = 1 << o,
      l = s[o];
    l === -1
      ? (!(a & n) || a & i) && (s[o] = Av(a, e))
      : l <= e && (t.expiredLanes |= a),
      (r &= ~a);
  }
}
function Xl(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function $p() {
  var t = Mr;
  return (Mr <<= 1), !(Mr & 4194240) && (Mr = 64), t;
}
function Za(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function pr(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - _t(e)),
    (t[e] = n);
}
function Iv(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var i = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var s = 31 - _t(n),
      r = 1 << s;
    (e[s] = 0), (i[s] = -1), (t[s] = -1), (n &= ~r);
  }
}
function Qc(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var i = 31 - _t(n),
      s = 1 << i;
    (s & e) | (t[i] & e) && (t[i] |= e), (n &= ~s);
  }
}
var Q = 0;
function Up(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Yp,
  qc,
  Xp,
  Kp,
  Qp,
  Kl = !1,
  Lr = [],
  fn = null,
  pn = null,
  gn = null,
  Ws = new Map(),
  $s = new Map(),
  rn = [],
  zv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ad(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      fn = null;
      break;
    case "dragenter":
    case "dragleave":
      pn = null;
      break;
    case "mouseover":
    case "mouseout":
      gn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ws.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $s.delete(e.pointerId);
  }
}
function ts(t, e, n, i, s, r) {
  return t === null || t.nativeEvent !== r
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: r,
        targetContainers: [s],
      }),
      e !== null && ((e = mr(e)), e !== null && qc(e)),
      t)
    : ((t.eventSystemFlags |= i),
      (e = t.targetContainers),
      s !== null && e.indexOf(s) === -1 && e.push(s),
      t);
}
function Fv(t, e, n, i, s) {
  switch (e) {
    case "focusin":
      return (fn = ts(fn, t, e, n, i, s)), !0;
    case "dragenter":
      return (pn = ts(pn, t, e, n, i, s)), !0;
    case "mouseover":
      return (gn = ts(gn, t, e, n, i, s)), !0;
    case "pointerover":
      var r = s.pointerId;
      return Ws.set(r, ts(Ws.get(r) || null, t, e, n, i, s)), !0;
    case "gotpointercapture":
      return (
        (r = s.pointerId), $s.set(r, ts($s.get(r) || null, t, e, n, i, s)), !0
      );
  }
  return !1;
}
function qp(t) {
  var e = Un(t.target);
  if (e !== null) {
    var n = ci(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = zp(n)), e !== null)) {
          (t.blockedOn = e),
            Qp(t.priority, function () {
              Xp(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function co(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Ql(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var i = new n.constructor(n.type, n);
      (Wl = i), n.target.dispatchEvent(i), (Wl = null);
    } else return (e = mr(n)), e !== null && qc(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function Rd(t, e, n) {
  co(t) && n.delete(e);
}
function Bv() {
  (Kl = !1),
    fn !== null && co(fn) && (fn = null),
    pn !== null && co(pn) && (pn = null),
    gn !== null && co(gn) && (gn = null),
    Ws.forEach(Rd),
    $s.forEach(Rd);
}
function ns(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Kl ||
      ((Kl = !0),
      Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Bv)));
}
function Us(t) {
  function e(s) {
    return ns(s, t);
  }
  if (0 < Lr.length) {
    ns(Lr[0], t);
    for (var n = 1; n < Lr.length; n++) {
      var i = Lr[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
  }
  for (
    fn !== null && ns(fn, t),
      pn !== null && ns(pn, t),
      gn !== null && ns(gn, t),
      Ws.forEach(e),
      $s.forEach(e),
      n = 0;
    n < rn.length;
    n++
  )
    (i = rn[n]), i.blockedOn === t && (i.blockedOn = null);
  for (; 0 < rn.length && ((n = rn[0]), n.blockedOn === null); )
    qp(n), n.blockedOn === null && rn.shift();
}
var Ni = Qt.ReactCurrentBatchConfig,
  To = !0;
function Hv(t, e, n, i) {
  var s = Q,
    r = Ni.transition;
  Ni.transition = null;
  try {
    (Q = 1), Gc(t, e, n, i);
  } finally {
    (Q = s), (Ni.transition = r);
  }
}
function Vv(t, e, n, i) {
  var s = Q,
    r = Ni.transition;
  Ni.transition = null;
  try {
    (Q = 4), Gc(t, e, n, i);
  } finally {
    (Q = s), (Ni.transition = r);
  }
}
function Gc(t, e, n, i) {
  if (To) {
    var s = Ql(t, e, n, i);
    if (s === null) ll(t, e, i, Ao, n), Ad(t, i);
    else if (Fv(s, t, e, n, i)) i.stopPropagation();
    else if ((Ad(t, i), e & 4 && -1 < zv.indexOf(t))) {
      for (; s !== null; ) {
        var r = mr(s);
        if (
          (r !== null && Yp(r),
          (r = Ql(t, e, n, i)),
          r === null && ll(t, e, i, Ao, n),
          r === s)
        )
          break;
        s = r;
      }
      s !== null && i.stopPropagation();
    } else ll(t, e, i, null, n);
  }
}
var Ao = null;
function Ql(t, e, n, i) {
  if (((Ao = null), (t = Xc(i)), (t = Un(t)), t !== null))
    if (((e = ci(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = zp(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Ao = t), null;
}
function Gp(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Pv()) {
        case Kc:
          return 1;
        case Vp:
          return 4;
        case Do:
        case Lv:
          return 16;
        case Wp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var an = null,
  Zc = null,
  uo = null;
function Zp() {
  if (uo) return uo;
  var t,
    e = Zc,
    n = e.length,
    i,
    s = "value" in an ? an.value : an.textContent,
    r = s.length;
  for (t = 0; t < n && e[t] === s[t]; t++);
  var o = n - t;
  for (i = 1; i <= o && e[n - i] === s[r - i]; i++);
  return (uo = s.slice(t, 1 < i ? 1 - i : void 0));
}
function ho(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Or() {
  return !0;
}
function Id() {
  return !1;
}
function nt(t) {
  function e(n, i, s, r, o) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = i),
      (this.nativeEvent = r),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in t)
      t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(r) : r[a]));
    return (
      (this.isDefaultPrevented = (
        r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
      )
        ? Or
        : Id),
      (this.isPropagationStopped = Id),
      this
    );
  }
  return (
    ae(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Or));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Or));
      },
      persist: function () {},
      isPersistent: Or,
    }),
    e
  );
}
var Gi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Jc = nt(Gi),
  gr = ae({}, Gi, { view: 0, detail: 0 }),
  Wv = nt(gr),
  Ja,
  el,
  is,
  ka = ae({}, gr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: eu,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== is &&
            (is && t.type === "mousemove"
              ? ((Ja = t.screenX - is.screenX), (el = t.screenY - is.screenY))
              : (el = Ja = 0),
            (is = t)),
          Ja);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : el;
    },
  }),
  zd = nt(ka),
  $v = ae({}, ka, { dataTransfer: 0 }),
  Uv = nt($v),
  Yv = ae({}, gr, { relatedTarget: 0 }),
  tl = nt(Yv),
  Xv = ae({}, Gi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kv = nt(Xv),
  Qv = ae({}, Gi, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  qv = nt(Qv),
  Gv = ae({}, Gi, { data: 0 }),
  Fd = nt(Gv),
  Zv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Jv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ey = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ty(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = ey[t]) ? !!e[t] : !1;
}
function eu() {
  return ty;
}
var ny = ae({}, gr, {
    key: function (t) {
      if (t.key) {
        var e = Zv[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = ho(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? Jv[t.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: eu,
    charCode: function (t) {
      return t.type === "keypress" ? ho(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? ho(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  iy = nt(ny),
  sy = ae({}, ka, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Bd = nt(sy),
  ry = ae({}, gr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: eu,
  }),
  oy = nt(ry),
  ay = ae({}, Gi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ly = nt(ay),
  cy = ae({}, ka, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  uy = nt(cy),
  dy = [9, 13, 27, 32],
  tu = $t && "CompositionEvent" in window,
  Es = null;
$t && "documentMode" in document && (Es = document.documentMode);
var hy = $t && "TextEvent" in window && !Es,
  Jp = $t && (!tu || (Es && 8 < Es && 11 >= Es)),
  Hd = String.fromCharCode(32),
  Vd = !1;
function eg(t, e) {
  switch (t) {
    case "keyup":
      return dy.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function tg(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var yi = !1;
function fy(t, e) {
  switch (t) {
    case "compositionend":
      return tg(e);
    case "keypress":
      return e.which !== 32 ? null : ((Vd = !0), Hd);
    case "textInput":
      return (t = e.data), t === Hd && Vd ? null : t;
    default:
      return null;
  }
}
function py(t, e) {
  if (yi)
    return t === "compositionend" || (!tu && eg(t, e))
      ? ((t = Zp()), (uo = Zc = an = null), (yi = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Jp && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var gy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Wd(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!gy[t.type] : e === "textarea";
}
function ng(t, e, n, i) {
  Np(i),
    (e = Ro(e, "onChange")),
    0 < e.length &&
      ((n = new Jc("onChange", "change", null, n, i)),
      t.push({ event: n, listeners: e }));
}
var js = null,
  Ys = null;
function my(t) {
  fg(t, 0);
}
function Sa(t) {
  var e = bi(t);
  if (Ep(e)) return t;
}
function vy(t, e) {
  if (t === "change") return e;
}
var ig = !1;
if ($t) {
  var nl;
  if ($t) {
    var il = "oninput" in document;
    if (!il) {
      var $d = document.createElement("div");
      $d.setAttribute("oninput", "return;"),
        (il = typeof $d.oninput == "function");
    }
    nl = il;
  } else nl = !1;
  ig = nl && (!document.documentMode || 9 < document.documentMode);
}
function Ud() {
  js && (js.detachEvent("onpropertychange", sg), (Ys = js = null));
}
function sg(t) {
  if (t.propertyName === "value" && Sa(Ys)) {
    var e = [];
    ng(e, Ys, t, Xc(t)), Ip(my, e);
  }
}
function yy(t, e, n) {
  t === "focusin"
    ? (Ud(), (js = e), (Ys = n), js.attachEvent("onpropertychange", sg))
    : t === "focusout" && Ud();
}
function xy(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return Sa(Ys);
}
function _y(t, e) {
  if (t === "click") return Sa(e);
}
function by(t, e) {
  if (t === "input" || t === "change") return Sa(e);
}
function wy(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var wt = typeof Object.is == "function" ? Object.is : wy;
function Xs(t, e) {
  if (wt(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    i = Object.keys(e);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var s = n[i];
    if (!Ol.call(e, s) || !wt(t[s], e[s])) return !1;
  }
  return !0;
}
function Yd(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Xd(t, e) {
  var n = Yd(t);
  t = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = t + n.textContent.length), t <= e && i >= e))
        return { node: n, offset: e - t };
      t = i;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Yd(n);
  }
}
function rg(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? rg(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function og() {
  for (var t = window, e = Po(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Po(t.document);
  }
  return e;
}
function nu(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function ky(t) {
  var e = og(),
    n = t.focusedElem,
    i = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    rg(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && nu(n)) {
      if (
        ((e = i.start),
        (t = i.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var s = n.textContent.length,
          r = Math.min(i.start, s);
        (i = i.end === void 0 ? r : Math.min(i.end, s)),
          !t.extend && r > i && ((s = i), (i = r), (r = s)),
          (s = Xd(n, r));
        var o = Xd(n, i);
        s &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== s.node ||
            t.anchorOffset !== s.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(s.node, s.offset),
          t.removeAllRanges(),
          r > i
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var Sy = $t && "documentMode" in document && 11 >= document.documentMode,
  xi = null,
  ql = null,
  Ms = null,
  Gl = !1;
function Kd(t, e, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gl ||
    xi == null ||
    xi !== Po(i) ||
    ((i = xi),
    "selectionStart" in i && nu(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (Ms && Xs(Ms, i)) ||
      ((Ms = i),
      (i = Ro(ql, "onSelect")),
      0 < i.length &&
        ((e = new Jc("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: i }),
        (e.target = xi))));
}
function Dr(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var _i = {
    animationend: Dr("Animation", "AnimationEnd"),
    animationiteration: Dr("Animation", "AnimationIteration"),
    animationstart: Dr("Animation", "AnimationStart"),
    transitionend: Dr("Transition", "TransitionEnd"),
  },
  sl = {},
  ag = {};
$t &&
  ((ag = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete _i.animationend.animation,
    delete _i.animationiteration.animation,
    delete _i.animationstart.animation),
  "TransitionEvent" in window || delete _i.transitionend.transition);
function Ca(t) {
  if (sl[t]) return sl[t];
  if (!_i[t]) return t;
  var e = _i[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in ag) return (sl[t] = e[n]);
  return t;
}
var lg = Ca("animationend"),
  cg = Ca("animationiteration"),
  ug = Ca("animationstart"),
  dg = Ca("transitionend"),
  hg = new Map(),
  Qd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function jn(t, e) {
  hg.set(t, e), li(e, [t]);
}
for (var rl = 0; rl < Qd.length; rl++) {
  var ol = Qd[rl],
    Cy = ol.toLowerCase(),
    Ey = ol[0].toUpperCase() + ol.slice(1);
  jn(Cy, "on" + Ey);
}
jn(lg, "onAnimationEnd");
jn(cg, "onAnimationIteration");
jn(ug, "onAnimationStart");
jn("dblclick", "onDoubleClick");
jn("focusin", "onFocus");
jn("focusout", "onBlur");
jn(dg, "onTransitionEnd");
Ii("onMouseEnter", ["mouseout", "mouseover"]);
Ii("onMouseLeave", ["mouseout", "mouseover"]);
Ii("onPointerEnter", ["pointerout", "pointerover"]);
Ii("onPointerLeave", ["pointerout", "pointerover"]);
li(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
li(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
li("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
li(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
li(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
li(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var vs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  jy = new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));
function qd(t, e, n) {
  var i = t.type || "unknown-event";
  (t.currentTarget = n), Cv(i, e, void 0, t), (t.currentTarget = null);
}
function fg(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var i = t[n],
      s = i.event;
    i = i.listeners;
    e: {
      var r = void 0;
      if (e)
        for (var o = i.length - 1; 0 <= o; o--) {
          var a = i[o],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== r && s.isPropagationStopped())) break e;
          qd(s, a, c), (r = l);
        }
      else
        for (o = 0; o < i.length; o++) {
          if (
            ((a = i[o]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== r && s.isPropagationStopped())
          )
            break e;
          qd(s, a, c), (r = l);
        }
    }
  }
  if (Oo) throw ((t = Yl), (Oo = !1), (Yl = null), t);
}
function Z(t, e) {
  var n = e[nc];
  n === void 0 && (n = e[nc] = new Set());
  var i = t + "__bubble";
  n.has(i) || (pg(e, t, 2, !1), n.add(i));
}
function al(t, e, n) {
  var i = 0;
  e && (i |= 4), pg(n, t, i, e);
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function Ks(t) {
  if (!t[Nr]) {
    (t[Nr] = !0),
      bp.forEach(function (n) {
        n !== "selectionchange" && (jy.has(n) || al(n, !1, t), al(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Nr] || ((e[Nr] = !0), al("selectionchange", !1, e));
  }
}
function pg(t, e, n, i) {
  switch (Gp(e)) {
    case 1:
      var s = Hv;
      break;
    case 4:
      s = Vv;
      break;
    default:
      s = Gc;
  }
  (n = s.bind(null, e, n, t)),
    (s = void 0),
    !Ul ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (s = !0),
    i
      ? s !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: s })
        : t.addEventListener(e, n, !0)
      : s !== void 0
      ? t.addEventListener(e, n, { passive: s })
      : t.addEventListener(e, n, !1);
}
function ll(t, e, n, i, s) {
  var r = i;
  if (!(e & 1) && !(e & 2) && i !== null)
    e: for (;;) {
      if (i === null) return;
      var o = i.tag;
      if (o === 3 || o === 4) {
        var a = i.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (o === 4)
          for (o = i.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Un(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            i = r = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      i = i.return;
    }
  Ip(function () {
    var c = r,
      u = Xc(n),
      d = [];
    e: {
      var h = hg.get(t);
      if (h !== void 0) {
        var p = Jc,
          m = t;
        switch (t) {
          case "keypress":
            if (ho(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = iy;
            break;
          case "focusin":
            (m = "focus"), (p = tl);
            break;
          case "focusout":
            (m = "blur"), (p = tl);
            break;
          case "beforeblur":
          case "afterblur":
            p = tl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = zd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Uv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = oy;
            break;
          case lg:
          case cg:
          case ug:
            p = Kv;
            break;
          case dg:
            p = ly;
            break;
          case "scroll":
            p = Wv;
            break;
          case "wheel":
            p = uy;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = qv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Bd;
        }
        var y = (e & 4) !== 0,
          _ = !y && t === "scroll",
          g = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var v = c, x; v !== null; ) {
          x = v;
          var b = x.stateNode;
          if (
            (x.tag === 5 &&
              b !== null &&
              ((x = b),
              g !== null && ((b = Vs(v, g)), b != null && y.push(Qs(v, b, x)))),
            _)
          )
            break;
          v = v.return;
        }
        0 < y.length &&
          ((h = new p(h, m, null, n, u)), d.push({ event: h, listeners: y }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((h = t === "mouseover" || t === "pointerover"),
          (p = t === "mouseout" || t === "pointerout"),
          h &&
            n !== Wl &&
            (m = n.relatedTarget || n.fromElement) &&
            (Un(m) || m[Ut]))
        )
          break e;
        if (
          (p || h) &&
          ((h =
            u.window === u
              ? u
              : (h = u.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          p
            ? ((m = n.relatedTarget || n.toElement),
              (p = c),
              (m = m ? Un(m) : null),
              m !== null &&
                ((_ = ci(m)), m !== _ || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((p = null), (m = c)),
          p !== m)
        ) {
          if (
            ((y = zd),
            (b = "onMouseLeave"),
            (g = "onMouseEnter"),
            (v = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((y = Bd),
              (b = "onPointerLeave"),
              (g = "onPointerEnter"),
              (v = "pointer")),
            (_ = p == null ? h : bi(p)),
            (x = m == null ? h : bi(m)),
            (h = new y(b, v + "leave", p, n, u)),
            (h.target = _),
            (h.relatedTarget = x),
            (b = null),
            Un(u) === c &&
              ((y = new y(g, v + "enter", m, n, u)),
              (y.target = x),
              (y.relatedTarget = _),
              (b = y)),
            (_ = b),
            p && m)
          )
            t: {
              for (y = p, g = m, v = 0, x = y; x; x = hi(x)) v++;
              for (x = 0, b = g; b; b = hi(b)) x++;
              for (; 0 < v - x; ) (y = hi(y)), v--;
              for (; 0 < x - v; ) (g = hi(g)), x--;
              for (; v--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                (y = hi(y)), (g = hi(g));
              }
              y = null;
            }
          else y = null;
          p !== null && Gd(d, h, p, y, !1),
            m !== null && _ !== null && Gd(d, _, m, y, !0);
        }
      }
      e: {
        if (
          ((h = c ? bi(c) : window),
          (p = h.nodeName && h.nodeName.toLowerCase()),
          p === "select" || (p === "input" && h.type === "file"))
        )
          var w = vy;
        else if (Wd(h))
          if (ig) w = by;
          else {
            w = xy;
            var k = yy;
          }
        else
          (p = h.nodeName) &&
            p.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (w = _y);
        if (w && (w = w(t, c))) {
          ng(d, w, n, u);
          break e;
        }
        k && k(t, h, c),
          t === "focusout" &&
            (k = h._wrapperState) &&
            k.controlled &&
            h.type === "number" &&
            zl(h, "number", h.value);
      }
      switch (((k = c ? bi(c) : window), t)) {
        case "focusin":
          (Wd(k) || k.contentEditable === "true") &&
            ((xi = k), (ql = c), (Ms = null));
          break;
        case "focusout":
          Ms = ql = xi = null;
          break;
        case "mousedown":
          Gl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Gl = !1), Kd(d, n, u);
          break;
        case "selectionchange":
          if (Sy) break;
        case "keydown":
        case "keyup":
          Kd(d, n, u);
      }
      var S;
      if (tu)
        e: {
          switch (t) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        yi
          ? eg(t, n) && (C = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (Jp &&
          n.locale !== "ko" &&
          (yi || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && yi && (S = Zp())
            : ((an = u),
              (Zc = "value" in an ? an.value : an.textContent),
              (yi = !0))),
        (k = Ro(c, C)),
        0 < k.length &&
          ((C = new Fd(C, t, null, n, u)),
          d.push({ event: C, listeners: k }),
          S ? (C.data = S) : ((S = tg(n)), S !== null && (C.data = S)))),
        (S = hy ? fy(t, n) : py(t, n)) &&
          ((c = Ro(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new Fd("onBeforeInput", "beforeinput", null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = S)));
    }
    fg(d, e);
  });
}
function Qs(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Ro(t, e) {
  for (var n = e + "Capture", i = []; t !== null; ) {
    var s = t,
      r = s.stateNode;
    s.tag === 5 &&
      r !== null &&
      ((s = r),
      (r = Vs(t, n)),
      r != null && i.unshift(Qs(t, r, s)),
      (r = Vs(t, e)),
      r != null && i.push(Qs(t, r, s))),
      (t = t.return);
  }
  return i;
}
function hi(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Gd(t, e, n, i, s) {
  for (var r = e._reactName, o = []; n !== null && n !== i; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === i) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      s
        ? ((l = Vs(n, r)), l != null && o.unshift(Qs(n, l, a)))
        : s || ((l = Vs(n, r)), l != null && o.push(Qs(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var My = /\r\n?/g,
  Py = /\u0000|\uFFFD/g;
function Zd(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      My,
      `
`
    )
    .replace(Py, "");
}
function Tr(t, e, n) {
  if (((e = Zd(e)), Zd(t) !== e && n)) throw Error(j(425));
}
function Io() {}
var Zl = null,
  Jl = null;
function ec(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var tc = typeof setTimeout == "function" ? setTimeout : void 0,
  Ly = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Jd = typeof Promise == "function" ? Promise : void 0,
  Oy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Jd < "u"
      ? function (t) {
          return Jd.resolve(null).then(t).catch(Dy);
        }
      : tc;
function Dy(t) {
  setTimeout(function () {
    throw t;
  });
}
function cl(t, e) {
  var n = e,
    i = 0;
  do {
    var s = n.nextSibling;
    if ((t.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (i === 0) {
          t.removeChild(s), Us(e);
          return;
        }
        i--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
    n = s;
  } while (n);
  Us(e);
}
function mn(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function eh(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var Zi = Math.random().toString(36).slice(2),
  jt = "__reactFiber$" + Zi,
  qs = "__reactProps$" + Zi,
  Ut = "__reactContainer$" + Zi,
  nc = "__reactEvents$" + Zi,
  Ny = "__reactListeners$" + Zi,
  Ty = "__reactHandles$" + Zi;
function Un(t) {
  var e = t[jt];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[Ut] || n[jt])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = eh(t); t !== null; ) {
          if ((n = t[jt])) return n;
          t = eh(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function mr(t) {
  return (
    (t = t[jt] || t[Ut]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function bi(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(j(33));
}
function Ea(t) {
  return t[qs] || null;
}
var ic = [],
  wi = -1;
function Mn(t) {
  return { current: t };
}
function J(t) {
  0 > wi || ((t.current = ic[wi]), (ic[wi] = null), wi--);
}
function G(t, e) {
  wi++, (ic[wi] = t.current), (t.current = e);
}
var Sn = {},
  Oe = Mn(Sn),
  $e = Mn(!1),
  ei = Sn;
function zi(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Sn;
  var i = t.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === e)
    return i.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    r;
  for (r in n) s[r] = e[r];
  return (
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function Ue(t) {
  return (t = t.childContextTypes), t != null;
}
function zo() {
  J($e), J(Oe);
}
function th(t, e, n) {
  if (Oe.current !== Sn) throw Error(j(168));
  G(Oe, e), G($e, n);
}
function gg(t, e, n) {
  var i = t.stateNode;
  if (((e = e.childContextTypes), typeof i.getChildContext != "function"))
    return n;
  i = i.getChildContext();
  for (var s in i) if (!(s in e)) throw Error(j(108, yv(t) || "Unknown", s));
  return ae({}, n, i);
}
function Fo(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Sn),
    (ei = Oe.current),
    G(Oe, t),
    G($e, $e.current),
    !0
  );
}
function nh(t, e, n) {
  var i = t.stateNode;
  if (!i) throw Error(j(169));
  n
    ? ((t = gg(t, e, ei)),
      (i.__reactInternalMemoizedMergedChildContext = t),
      J($e),
      J(Oe),
      G(Oe, t))
    : J($e),
    G($e, n);
}
var zt = null,
  ja = !1,
  ul = !1;
function mg(t) {
  zt === null ? (zt = [t]) : zt.push(t);
}
function Ay(t) {
  (ja = !0), mg(t);
}
function Pn() {
  if (!ul && zt !== null) {
    ul = !0;
    var t = 0,
      e = Q;
    try {
      var n = zt;
      for (Q = 1; t < n.length; t++) {
        var i = n[t];
        do i = i(!0);
        while (i !== null);
      }
      (zt = null), (ja = !1);
    } catch (s) {
      throw (zt !== null && (zt = zt.slice(t + 1)), Hp(Kc, Pn), s);
    } finally {
      (Q = e), (ul = !1);
    }
  }
  return null;
}
var ki = [],
  Si = 0,
  Bo = null,
  Ho = 0,
  st = [],
  rt = 0,
  ti = null,
  Bt = 1,
  Ht = "";
function zn(t, e) {
  (ki[Si++] = Ho), (ki[Si++] = Bo), (Bo = t), (Ho = e);
}
function vg(t, e, n) {
  (st[rt++] = Bt), (st[rt++] = Ht), (st[rt++] = ti), (ti = t);
  var i = Bt;
  t = Ht;
  var s = 32 - _t(i) - 1;
  (i &= ~(1 << s)), (n += 1);
  var r = 32 - _t(e) + s;
  if (30 < r) {
    var o = s - (s % 5);
    (r = (i & ((1 << o) - 1)).toString(32)),
      (i >>= o),
      (s -= o),
      (Bt = (1 << (32 - _t(e) + s)) | (n << s) | i),
      (Ht = r + t);
  } else (Bt = (1 << r) | (n << s) | i), (Ht = t);
}
function iu(t) {
  t.return !== null && (zn(t, 1), vg(t, 1, 0));
}
function su(t) {
  for (; t === Bo; )
    (Bo = ki[--Si]), (ki[Si] = null), (Ho = ki[--Si]), (ki[Si] = null);
  for (; t === ti; )
    (ti = st[--rt]),
      (st[rt] = null),
      (Ht = st[--rt]),
      (st[rt] = null),
      (Bt = st[--rt]),
      (st[rt] = null);
}
var Ze = null,
  Ge = null,
  te = !1,
  yt = null;
function yg(t, e) {
  var n = ot(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function ih(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (Ze = t), (Ge = mn(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (Ze = t), (Ge = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = ti !== null ? { id: Bt, overflow: Ht } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ot(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (Ze = t),
            (Ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function sc(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function rc(t) {
  if (te) {
    var e = Ge;
    if (e) {
      var n = e;
      if (!ih(t, e)) {
        if (sc(t)) throw Error(j(418));
        e = mn(n.nextSibling);
        var i = Ze;
        e && ih(t, e)
          ? yg(i, n)
          : ((t.flags = (t.flags & -4097) | 2), (te = !1), (Ze = t));
      }
    } else {
      if (sc(t)) throw Error(j(418));
      (t.flags = (t.flags & -4097) | 2), (te = !1), (Ze = t);
    }
  }
}
function sh(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  Ze = t;
}
function Ar(t) {
  if (t !== Ze) return !1;
  if (!te) return sh(t), (te = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !ec(t.type, t.memoizedProps))),
    e && (e = Ge))
  ) {
    if (sc(t)) throw (xg(), Error(j(418)));
    for (; e; ) yg(t, e), (e = mn(e.nextSibling));
  }
  if ((sh(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(j(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              Ge = mn(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      Ge = null;
    }
  } else Ge = Ze ? mn(t.stateNode.nextSibling) : null;
  return !0;
}
function xg() {
  for (var t = Ge; t; ) t = mn(t.nextSibling);
}
function Fi() {
  (Ge = Ze = null), (te = !1);
}
function ru(t) {
  yt === null ? (yt = [t]) : yt.push(t);
}
var Ry = Qt.ReactCurrentBatchConfig;
function gt(t, e) {
  if (t && t.defaultProps) {
    (e = ae({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var Vo = Mn(null),
  Wo = null,
  Ci = null,
  ou = null;
function au() {
  ou = Ci = Wo = null;
}
function lu(t) {
  var e = Vo.current;
  J(Vo), (t._currentValue = e);
}
function oc(t, e, n) {
  for (; t !== null; ) {
    var i = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
        : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function Ti(t, e) {
  (Wo = t),
    (ou = Ci = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (We = !0), (t.firstContext = null));
}
function ut(t) {
  var e = t._currentValue;
  if (ou !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Ci === null)) {
      if (Wo === null) throw Error(j(308));
      (Ci = t), (Wo.dependencies = { lanes: 0, firstContext: t });
    } else Ci = Ci.next = t;
  return e;
}
var Yn = null;
function cu(t) {
  Yn === null ? (Yn = [t]) : Yn.push(t);
}
function _g(t, e, n, i) {
  var s = e.interleaved;
  return (
    s === null ? ((n.next = n), cu(e)) : ((n.next = s.next), (s.next = n)),
    (e.interleaved = n),
    Yt(t, i)
  );
}
function Yt(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var en = !1;
function uu(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function bg(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function Wt(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function vn(t, e, n) {
  var i = t.updateQueue;
  if (i === null) return null;
  if (((i = i.shared), W & 2)) {
    var s = i.pending;
    return (
      s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
      (i.pending = e),
      Yt(t, n)
    );
  }
  return (
    (s = i.interleaved),
    s === null ? ((e.next = e), cu(i)) : ((e.next = s.next), (s.next = e)),
    (i.interleaved = e),
    Yt(t, n)
  );
}
function fo(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), Qc(t, n);
  }
}
function rh(t, e) {
  var n = t.updateQueue,
    i = t.alternate;
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var s = null,
      r = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        r === null ? (s = r = o) : (r = r.next = o), (n = n.next);
      } while (n !== null);
      r === null ? (s = r = e) : (r = r.next = e);
    } else s = r = e;
    (n = {
      baseState: i.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: r,
      shared: i.shared,
      effects: i.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function $o(t, e, n, i) {
  var s = t.updateQueue;
  en = !1;
  var r = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), o === null ? (r = c) : (o.next = c), (o = l);
    var u = t.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== o &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (r !== null) {
    var d = s.baseState;
    (o = 0), (u = c = l = null), (a = r);
    do {
      var h = a.lane,
        p = a.eventTime;
      if ((i & h) === h) {
        u !== null &&
          (u = u.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var m = t,
            y = a;
          switch (((h = e), (p = n), y.tag)) {
            case 1:
              if (((m = y.payload), typeof m == "function")) {
                d = m.call(p, d, h);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = y.payload),
                (h = typeof m == "function" ? m.call(p, d, h) : m),
                h == null)
              )
                break e;
              d = ae({}, d, h);
              break e;
            case 2:
              en = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64),
          (h = s.effects),
          h === null ? (s.effects = [a]) : h.push(a));
      } else
        (p = {
          eventTime: p,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = p), (l = d)) : (u = u.next = p),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (s.lastBaseUpdate = h),
          (s.shared.pending = null);
      }
    } while (1);
    if (
      (u === null && (l = d),
      (s.baseState = l),
      (s.firstBaseUpdate = c),
      (s.lastBaseUpdate = u),
      (e = s.shared.interleaved),
      e !== null)
    ) {
      s = e;
      do (o |= s.lane), (s = s.next);
      while (s !== e);
    } else r === null && (s.shared.lanes = 0);
    (ii |= o), (t.lanes = o), (t.memoizedState = d);
  }
}
function oh(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var i = t[e],
        s = i.callback;
      if (s !== null) {
        if (((i.callback = null), (i = n), typeof s != "function"))
          throw Error(j(191, s));
        s.call(i);
      }
    }
}
var wg = new _p.Component().refs;
function ac(t, e, n, i) {
  (e = t.memoizedState),
    (n = n(i, e)),
    (n = n == null ? e : ae({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Ma = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? ci(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var i = Re(),
      s = xn(t),
      r = Wt(i, s);
    (r.payload = e),
      n != null && (r.callback = n),
      (e = vn(t, r, s)),
      e !== null && (bt(e, t, s, i), fo(e, t, s));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var i = Re(),
      s = xn(t),
      r = Wt(i, s);
    (r.tag = 1),
      (r.payload = e),
      n != null && (r.callback = n),
      (e = vn(t, r, s)),
      e !== null && (bt(e, t, s, i), fo(e, t, s));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = Re(),
      i = xn(t),
      s = Wt(n, i);
    (s.tag = 2),
      e != null && (s.callback = e),
      (e = vn(t, s, i)),
      e !== null && (bt(e, t, i, n), fo(e, t, i));
  },
};
function ah(t, e, n, i, s, r, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(i, r, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !Xs(n, i) || !Xs(s, r)
      : !0
  );
}
function kg(t, e, n) {
  var i = !1,
    s = Sn,
    r = e.contextType;
  return (
    typeof r == "object" && r !== null
      ? (r = ut(r))
      : ((s = Ue(e) ? ei : Oe.current),
        (i = e.contextTypes),
        (r = (i = i != null) ? zi(t, s) : Sn)),
    (e = new e(n, r)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Ma),
    (t.stateNode = e),
    (e._reactInternals = t),
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = s),
      (t.__reactInternalMemoizedMaskedChildContext = r)),
    e
  );
}
function lh(t, e, n, i) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, i),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, i),
    e.state !== t && Ma.enqueueReplaceState(e, e.state, null);
}
function lc(t, e, n, i) {
  var s = t.stateNode;
  (s.props = n), (s.state = t.memoizedState), (s.refs = wg), uu(t);
  var r = e.contextType;
  typeof r == "object" && r !== null
    ? (s.context = ut(r))
    : ((r = Ue(e) ? ei : Oe.current), (s.context = zi(t, r))),
    (s.state = t.memoizedState),
    (r = e.getDerivedStateFromProps),
    typeof r == "function" && (ac(t, e, r, n), (s.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((e = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      e !== s.state && Ma.enqueueReplaceState(s, s.state, null),
      $o(t, n, s, i),
      (s.state = t.memoizedState)),
    typeof s.componentDidMount == "function" && (t.flags |= 4194308);
}
function ss(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(j(147, t));
      var s = i,
        r = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === r
        ? e.ref
        : ((e = function (o) {
            var a = s.refs;
            a === wg && (a = s.refs = {}),
              o === null ? delete a[r] : (a[r] = o);
          }),
          (e._stringRef = r),
          e);
    }
    if (typeof t != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, t));
  }
  return t;
}
function Rr(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      j(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t
      )
    ))
  );
}
function ch(t) {
  var e = t._init;
  return e(t._payload);
}
function Sg(t) {
  function e(g, v) {
    if (t) {
      var x = g.deletions;
      x === null ? ((g.deletions = [v]), (g.flags |= 16)) : x.push(v);
    }
  }
  function n(g, v) {
    if (!t) return null;
    for (; v !== null; ) e(g, v), (v = v.sibling);
    return null;
  }
  function i(g, v) {
    for (g = new Map(); v !== null; )
      v.key !== null ? g.set(v.key, v) : g.set(v.index, v), (v = v.sibling);
    return g;
  }
  function s(g, v) {
    return (g = _n(g, v)), (g.index = 0), (g.sibling = null), g;
  }
  function r(g, v, x) {
    return (
      (g.index = x),
      t
        ? ((x = g.alternate),
          x !== null
            ? ((x = x.index), x < v ? ((g.flags |= 2), v) : x)
            : ((g.flags |= 2), v))
        : ((g.flags |= 1048576), v)
    );
  }
  function o(g) {
    return t && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, v, x, b) {
    return v === null || v.tag !== 6
      ? ((v = vl(x, g.mode, b)), (v.return = g), v)
      : ((v = s(v, x)), (v.return = g), v);
  }
  function l(g, v, x, b) {
    var w = x.type;
    return w === vi
      ? u(g, v, x.props.children, b, x.key)
      : v !== null &&
        (v.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === Jt &&
            ch(w) === v.type))
      ? ((b = s(v, x.props)), (b.ref = ss(g, v, x)), (b.return = g), b)
      : ((b = xo(x.type, x.key, x.props, null, g.mode, b)),
        (b.ref = ss(g, v, x)),
        (b.return = g),
        b);
  }
  function c(g, v, x, b) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== x.containerInfo ||
      v.stateNode.implementation !== x.implementation
      ? ((v = yl(x, g.mode, b)), (v.return = g), v)
      : ((v = s(v, x.children || [])), (v.return = g), v);
  }
  function u(g, v, x, b, w) {
    return v === null || v.tag !== 7
      ? ((v = qn(x, g.mode, b, w)), (v.return = g), v)
      : ((v = s(v, x)), (v.return = g), v);
  }
  function d(g, v, x) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = vl("" + v, g.mode, x)), (v.return = g), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Cr:
          return (
            (x = xo(v.type, v.key, v.props, null, g.mode, x)),
            (x.ref = ss(g, null, v)),
            (x.return = g),
            x
          );
        case mi:
          return (v = yl(v, g.mode, x)), (v.return = g), v;
        case Jt:
          var b = v._init;
          return d(g, b(v._payload), x);
      }
      if (gs(v) || Ji(v))
        return (v = qn(v, g.mode, x, null)), (v.return = g), v;
      Rr(g, v);
    }
    return null;
  }
  function h(g, v, x, b) {
    var w = v !== null ? v.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return w !== null ? null : a(g, v, "" + x, b);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Cr:
          return x.key === w ? l(g, v, x, b) : null;
        case mi:
          return x.key === w ? c(g, v, x, b) : null;
        case Jt:
          return (w = x._init), h(g, v, w(x._payload), b);
      }
      if (gs(x) || Ji(x)) return w !== null ? null : u(g, v, x, b, null);
      Rr(g, x);
    }
    return null;
  }
  function p(g, v, x, b, w) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (g = g.get(x) || null), a(v, g, "" + b, w);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Cr:
          return (g = g.get(b.key === null ? x : b.key) || null), l(v, g, b, w);
        case mi:
          return (g = g.get(b.key === null ? x : b.key) || null), c(v, g, b, w);
        case Jt:
          var k = b._init;
          return p(g, v, x, k(b._payload), w);
      }
      if (gs(b) || Ji(b)) return (g = g.get(x) || null), u(v, g, b, w, null);
      Rr(v, b);
    }
    return null;
  }
  function m(g, v, x, b) {
    for (
      var w = null, k = null, S = v, C = (v = 0), M = null;
      S !== null && C < x.length;
      C++
    ) {
      S.index > C ? ((M = S), (S = null)) : (M = S.sibling);
      var E = h(g, S, x[C], b);
      if (E === null) {
        S === null && (S = M);
        break;
      }
      t && S && E.alternate === null && e(g, S),
        (v = r(E, v, C)),
        k === null ? (w = E) : (k.sibling = E),
        (k = E),
        (S = M);
    }
    if (C === x.length) return n(g, S), te && zn(g, C), w;
    if (S === null) {
      for (; C < x.length; C++)
        (S = d(g, x[C], b)),
          S !== null &&
            ((v = r(S, v, C)), k === null ? (w = S) : (k.sibling = S), (k = S));
      return te && zn(g, C), w;
    }
    for (S = i(g, S); C < x.length; C++)
      (M = p(S, g, C, x[C], b)),
        M !== null &&
          (t && M.alternate !== null && S.delete(M.key === null ? C : M.key),
          (v = r(M, v, C)),
          k === null ? (w = M) : (k.sibling = M),
          (k = M));
    return (
      t &&
        S.forEach(function (D) {
          return e(g, D);
        }),
      te && zn(g, C),
      w
    );
  }
  function y(g, v, x, b) {
    var w = Ji(x);
    if (typeof w != "function") throw Error(j(150));
    if (((x = w.call(x)), x == null)) throw Error(j(151));
    for (
      var k = (w = null), S = v, C = (v = 0), M = null, E = x.next();
      S !== null && !E.done;
      C++, E = x.next()
    ) {
      S.index > C ? ((M = S), (S = null)) : (M = S.sibling);
      var D = h(g, S, E.value, b);
      if (D === null) {
        S === null && (S = M);
        break;
      }
      t && S && D.alternate === null && e(g, S),
        (v = r(D, v, C)),
        k === null ? (w = D) : (k.sibling = D),
        (k = D),
        (S = M);
    }
    if (E.done) return n(g, S), te && zn(g, C), w;
    if (S === null) {
      for (; !E.done; C++, E = x.next())
        (E = d(g, E.value, b)),
          E !== null &&
            ((v = r(E, v, C)), k === null ? (w = E) : (k.sibling = E), (k = E));
      return te && zn(g, C), w;
    }
    for (S = i(g, S); !E.done; C++, E = x.next())
      (E = p(S, g, C, E.value, b)),
        E !== null &&
          (t && E.alternate !== null && S.delete(E.key === null ? C : E.key),
          (v = r(E, v, C)),
          k === null ? (w = E) : (k.sibling = E),
          (k = E));
    return (
      t &&
        S.forEach(function (A) {
          return e(g, A);
        }),
      te && zn(g, C),
      w
    );
  }
  function _(g, v, x, b) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === vi &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case Cr:
          e: {
            for (var w = x.key, k = v; k !== null; ) {
              if (k.key === w) {
                if (((w = x.type), w === vi)) {
                  if (k.tag === 7) {
                    n(g, k.sibling),
                      (v = s(k, x.props.children)),
                      (v.return = g),
                      (g = v);
                    break e;
                  }
                } else if (
                  k.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === Jt &&
                    ch(w) === k.type)
                ) {
                  n(g, k.sibling),
                    (v = s(k, x.props)),
                    (v.ref = ss(g, k, x)),
                    (v.return = g),
                    (g = v);
                  break e;
                }
                n(g, k);
                break;
              } else e(g, k);
              k = k.sibling;
            }
            x.type === vi
              ? ((v = qn(x.props.children, g.mode, b, x.key)),
                (v.return = g),
                (g = v))
              : ((b = xo(x.type, x.key, x.props, null, g.mode, b)),
                (b.ref = ss(g, v, x)),
                (b.return = g),
                (g = b));
          }
          return o(g);
        case mi:
          e: {
            for (k = x.key; v !== null; ) {
              if (v.key === k)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === x.containerInfo &&
                  v.stateNode.implementation === x.implementation
                ) {
                  n(g, v.sibling),
                    (v = s(v, x.children || [])),
                    (v.return = g),
                    (g = v);
                  break e;
                } else {
                  n(g, v);
                  break;
                }
              else e(g, v);
              v = v.sibling;
            }
            (v = yl(x, g.mode, b)), (v.return = g), (g = v);
          }
          return o(g);
        case Jt:
          return (k = x._init), _(g, v, k(x._payload), b);
      }
      if (gs(x)) return m(g, v, x, b);
      if (Ji(x)) return y(g, v, x, b);
      Rr(g, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        v !== null && v.tag === 6
          ? (n(g, v.sibling), (v = s(v, x)), (v.return = g), (g = v))
          : (n(g, v), (v = vl(x, g.mode, b)), (v.return = g), (g = v)),
        o(g))
      : n(g, v);
  }
  return _;
}
var Bi = Sg(!0),
  Cg = Sg(!1),
  vr = {},
  Pt = Mn(vr),
  Gs = Mn(vr),
  Zs = Mn(vr);
function Xn(t) {
  if (t === vr) throw Error(j(174));
  return t;
}
function du(t, e) {
  switch ((G(Zs, e), G(Gs, t), G(Pt, vr), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Bl(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = Bl(e, t));
  }
  J(Pt), G(Pt, e);
}
function Hi() {
  J(Pt), J(Gs), J(Zs);
}
function Eg(t) {
  Xn(Zs.current);
  var e = Xn(Pt.current),
    n = Bl(e, t.type);
  e !== n && (G(Gs, t), G(Pt, n));
}
function hu(t) {
  Gs.current === t && (J(Pt), J(Gs));
}
var re = Mn(0);
function Uo(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var dl = [];
function fu() {
  for (var t = 0; t < dl.length; t++)
    dl[t]._workInProgressVersionPrimary = null;
  dl.length = 0;
}
var po = Qt.ReactCurrentDispatcher,
  hl = Qt.ReactCurrentBatchConfig,
  ni = 0,
  oe = null,
  ge = null,
  xe = null,
  Yo = !1,
  Ps = !1,
  Js = 0,
  Iy = 0;
function Ee() {
  throw Error(j(321));
}
function pu(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!wt(t[n], e[n])) return !1;
  return !0;
}
function gu(t, e, n, i, s, r) {
  if (
    ((ni = r),
    (oe = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (po.current = t === null || t.memoizedState === null ? Hy : Vy),
    (t = n(i, s)),
    Ps)
  ) {
    r = 0;
    do {
      if (((Ps = !1), (Js = 0), 25 <= r)) throw Error(j(301));
      (r += 1),
        (xe = ge = null),
        (e.updateQueue = null),
        (po.current = Wy),
        (t = n(i, s));
    } while (Ps);
  }
  if (
    ((po.current = Xo),
    (e = ge !== null && ge.next !== null),
    (ni = 0),
    (xe = ge = oe = null),
    (Yo = !1),
    e)
  )
    throw Error(j(300));
  return t;
}
function mu() {
  var t = Js !== 0;
  return (Js = 0), t;
}
function Ct() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return xe === null ? (oe.memoizedState = xe = t) : (xe = xe.next = t), xe;
}
function dt() {
  if (ge === null) {
    var t = oe.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = ge.next;
  var e = xe === null ? oe.memoizedState : xe.next;
  if (e !== null) (xe = e), (ge = t);
  else {
    if (t === null) throw Error(j(310));
    (ge = t),
      (t = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      xe === null ? (oe.memoizedState = xe = t) : (xe = xe.next = t);
  }
  return xe;
}
function er(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function fl(t) {
  var e = dt(),
    n = e.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = t;
  var i = ge,
    s = i.baseQueue,
    r = n.pending;
  if (r !== null) {
    if (s !== null) {
      var o = s.next;
      (s.next = r.next), (r.next = o);
    }
    (i.baseQueue = s = r), (n.pending = null);
  }
  if (s !== null) {
    (r = s.next), (i = i.baseState);
    var a = (o = null),
      l = null,
      c = r;
    do {
      var u = c.lane;
      if ((ni & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (i = c.hasEagerState ? c.eagerState : t(i, c.action));
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = i)) : (l = l.next = d),
          (oe.lanes |= u),
          (ii |= u);
      }
      c = c.next;
    } while (c !== null && c !== r);
    l === null ? (o = i) : (l.next = a),
      wt(i, e.memoizedState) || (We = !0),
      (e.memoizedState = i),
      (e.baseState = o),
      (e.baseQueue = l),
      (n.lastRenderedState = i);
  }
  if (((t = n.interleaved), t !== null)) {
    s = t;
    do (r = s.lane), (oe.lanes |= r), (ii |= r), (s = s.next);
    while (s !== t);
  } else s === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function pl(t) {
  var e = dt(),
    n = e.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = t;
  var i = n.dispatch,
    s = n.pending,
    r = e.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do (r = t(r, o.action)), (o = o.next);
    while (o !== s);
    wt(r, e.memoizedState) || (We = !0),
      (e.memoizedState = r),
      e.baseQueue === null && (e.baseState = r),
      (n.lastRenderedState = r);
  }
  return [r, i];
}
function jg() {}
function Mg(t, e) {
  var n = oe,
    i = dt(),
    s = e(),
    r = !wt(i.memoizedState, s);
  if (
    (r && ((i.memoizedState = s), (We = !0)),
    (i = i.queue),
    vu(Og.bind(null, n, i, t), [t]),
    i.getSnapshot !== e || r || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      tr(9, Lg.bind(null, n, i, s, e), void 0, null),
      be === null)
    )
      throw Error(j(349));
    ni & 30 || Pg(n, e, s);
  }
  return s;
}
function Pg(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = oe.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (oe.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function Lg(t, e, n, i) {
  (e.value = n), (e.getSnapshot = i), Dg(e) && Ng(t);
}
function Og(t, e, n) {
  return n(function () {
    Dg(e) && Ng(t);
  });
}
function Dg(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !wt(t, n);
  } catch {
    return !0;
  }
}
function Ng(t) {
  var e = Yt(t, 1);
  e !== null && bt(e, t, 1, -1);
}
function uh(t) {
  var e = Ct();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: er,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = By.bind(null, oe, t)),
    [e.memoizedState, t]
  );
}
function tr(t, e, n, i) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: i, next: null }),
    (e = oe.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (oe.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t))),
    t
  );
}
function Tg() {
  return dt().memoizedState;
}
function go(t, e, n, i) {
  var s = Ct();
  (oe.flags |= t),
    (s.memoizedState = tr(1 | e, n, void 0, i === void 0 ? null : i));
}
function Pa(t, e, n, i) {
  var s = dt();
  i = i === void 0 ? null : i;
  var r = void 0;
  if (ge !== null) {
    var o = ge.memoizedState;
    if (((r = o.destroy), i !== null && pu(i, o.deps))) {
      s.memoizedState = tr(e, n, r, i);
      return;
    }
  }
  (oe.flags |= t), (s.memoizedState = tr(1 | e, n, r, i));
}
function dh(t, e) {
  return go(8390656, 8, t, e);
}
function vu(t, e) {
  return Pa(2048, 8, t, e);
}
function Ag(t, e) {
  return Pa(4, 2, t, e);
}
function Rg(t, e) {
  return Pa(4, 4, t, e);
}
function Ig(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function zg(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), Pa(4, 4, Ig.bind(null, e, t), n)
  );
}
function yu() {}
function Fg(t, e) {
  var n = dt();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && pu(e, i[1])
    ? i[0]
    : ((n.memoizedState = [t, e]), t);
}
function Bg(t, e) {
  var n = dt();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && pu(e, i[1])
    ? i[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Hg(t, e, n) {
  return ni & 21
    ? (wt(n, e) || ((n = $p()), (oe.lanes |= n), (ii |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (We = !0)), (t.memoizedState = n));
}
function zy(t, e) {
  var n = Q;
  (Q = n !== 0 && 4 > n ? n : 4), t(!0);
  var i = hl.transition;
  hl.transition = {};
  try {
    t(!1), e();
  } finally {
    (Q = n), (hl.transition = i);
  }
}
function Vg() {
  return dt().memoizedState;
}
function Fy(t, e, n) {
  var i = xn(t);
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Wg(t))
  )
    $g(e, n);
  else if (((n = _g(t, e, n, i)), n !== null)) {
    var s = Re();
    bt(n, t, i, s), Ug(n, e, i);
  }
}
function By(t, e, n) {
  var i = xn(t),
    s = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wg(t)) $g(e, s);
  else {
    var r = t.alternate;
    if (
      t.lanes === 0 &&
      (r === null || r.lanes === 0) &&
      ((r = e.lastRenderedReducer), r !== null)
    )
      try {
        var o = e.lastRenderedState,
          a = r(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), wt(a, o))) {
          var l = e.interleaved;
          l === null
            ? ((s.next = s), cu(e))
            : ((s.next = l.next), (l.next = s)),
            (e.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = _g(t, e, s, i)),
      n !== null && ((s = Re()), bt(n, t, i, s), Ug(n, e, i));
  }
}
function Wg(t) {
  var e = t.alternate;
  return t === oe || (e !== null && e === oe);
}
function $g(t, e) {
  Ps = Yo = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function Ug(t, e, n) {
  if (n & 4194240) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), Qc(t, n);
  }
}
var Xo = {
    readContext: ut,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useInsertionEffect: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useMutableSource: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    unstable_isNewReconciler: !1,
  },
  Hy = {
    readContext: ut,
    useCallback: function (t, e) {
      return (Ct().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: ut,
    useEffect: dh,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        go(4194308, 4, Ig.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return go(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return go(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Ct();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var i = Ct();
      return (
        (e = n !== void 0 ? n(e) : e),
        (i.memoizedState = i.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (i.queue = t),
        (t = t.dispatch = Fy.bind(null, oe, t)),
        [i.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Ct();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: uh,
    useDebugValue: yu,
    useDeferredValue: function (t) {
      return (Ct().memoizedState = t);
    },
    useTransition: function () {
      var t = uh(!1),
        e = t[0];
      return (t = zy.bind(null, t[1])), (Ct().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var i = oe,
        s = Ct();
      if (te) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = e()), be === null)) throw Error(j(349));
        ni & 30 || Pg(i, e, n);
      }
      s.memoizedState = n;
      var r = { value: n, getSnapshot: e };
      return (
        (s.queue = r),
        dh(Og.bind(null, i, r, t), [t]),
        (i.flags |= 2048),
        tr(9, Lg.bind(null, i, r, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = Ct(),
        e = be.identifierPrefix;
      if (te) {
        var n = Ht,
          i = Bt;
        (n = (i & ~(1 << (32 - _t(i) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = Js++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = Iy++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  Vy = {
    readContext: ut,
    useCallback: Fg,
    useContext: ut,
    useEffect: vu,
    useImperativeHandle: zg,
    useInsertionEffect: Ag,
    useLayoutEffect: Rg,
    useMemo: Bg,
    useReducer: fl,
    useRef: Tg,
    useState: function () {
      return fl(er);
    },
    useDebugValue: yu,
    useDeferredValue: function (t) {
      var e = dt();
      return Hg(e, ge.memoizedState, t);
    },
    useTransition: function () {
      var t = fl(er)[0],
        e = dt().memoizedState;
      return [t, e];
    },
    useMutableSource: jg,
    useSyncExternalStore: Mg,
    useId: Vg,
    unstable_isNewReconciler: !1,
  },
  Wy = {
    readContext: ut,
    useCallback: Fg,
    useContext: ut,
    useEffect: vu,
    useImperativeHandle: zg,
    useInsertionEffect: Ag,
    useLayoutEffect: Rg,
    useMemo: Bg,
    useReducer: pl,
    useRef: Tg,
    useState: function () {
      return pl(er);
    },
    useDebugValue: yu,
    useDeferredValue: function (t) {
      var e = dt();
      return ge === null ? (e.memoizedState = t) : Hg(e, ge.memoizedState, t);
    },
    useTransition: function () {
      var t = pl(er)[0],
        e = dt().memoizedState;
      return [t, e];
    },
    useMutableSource: jg,
    useSyncExternalStore: Mg,
    useId: Vg,
    unstable_isNewReconciler: !1,
  };
function Vi(t, e) {
  try {
    var n = "",
      i = e;
    do (n += vv(i)), (i = i.return);
    while (i);
    var s = n;
  } catch (r) {
    s =
      `
Error generating stack: ` +
      r.message +
      `
` +
      r.stack;
  }
  return { value: t, source: e, stack: s, digest: null };
}
function gl(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function cc(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var $y = typeof WeakMap == "function" ? WeakMap : Map;
function Yg(t, e, n) {
  (n = Wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var i = e.value;
  return (
    (n.callback = function () {
      Qo || ((Qo = !0), (xc = i)), cc(t, e);
    }),
    n
  );
}
function Xg(t, e, n) {
  (n = Wt(-1, n)), (n.tag = 3);
  var i = t.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var s = e.value;
    (n.payload = function () {
      return i(s);
    }),
      (n.callback = function () {
        cc(t, e);
      });
  }
  var r = t.stateNode;
  return (
    r !== null &&
      typeof r.componentDidCatch == "function" &&
      (n.callback = function () {
        cc(t, e),
          typeof i != "function" &&
            (yn === null ? (yn = new Set([this])) : yn.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function hh(t, e, n) {
  var i = t.pingCache;
  if (i === null) {
    i = t.pingCache = new $y();
    var s = new Set();
    i.set(e, s);
  } else (s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s));
  s.has(n) || (s.add(n), (t = sx.bind(null, t, e, n)), e.then(t, t));
}
function fh(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function ph(t, e, n, i, s) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = s), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = Wt(-1, 1)), (e.tag = 2), vn(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var Uy = Qt.ReactCurrentOwner,
  We = !1;
function Te(t, e, n, i) {
  e.child = t === null ? Cg(e, null, n, i) : Bi(e, t.child, n, i);
}
function gh(t, e, n, i, s) {
  n = n.render;
  var r = e.ref;
  return (
    Ti(e, s),
    (i = gu(t, e, n, i, r, s)),
    (n = mu()),
    t !== null && !We
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~s),
        Xt(t, e, s))
      : (te && n && iu(e), (e.flags |= 1), Te(t, e, i, s), e.child)
  );
}
function mh(t, e, n, i, s) {
  if (t === null) {
    var r = n.type;
    return typeof r == "function" &&
      !Eu(r) &&
      r.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = r), Kg(t, e, r, i, s))
      : ((t = xo(n.type, null, i, e, e.mode, s)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((r = t.child), !(t.lanes & s))) {
    var o = r.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Xs), n(o, i) && t.ref === e.ref)
    )
      return Xt(t, e, s);
  }
  return (
    (e.flags |= 1),
    (t = _n(r, i)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function Kg(t, e, n, i, s) {
  if (t !== null) {
    var r = t.memoizedProps;
    if (Xs(r, i) && t.ref === e.ref)
      if (((We = !1), (e.pendingProps = i = r), (t.lanes & s) !== 0))
        t.flags & 131072 && (We = !0);
      else return (e.lanes = t.lanes), Xt(t, e, s);
  }
  return uc(t, e, n, i, s);
}
function Qg(t, e, n) {
  var i = e.pendingProps,
    s = i.children,
    r = t !== null ? t.memoizedState : null;
  if (i.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(ji, qe),
        (qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = r !== null ? r.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          G(ji, qe),
          (qe |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = r !== null ? r.baseLanes : n),
        G(ji, qe),
        (qe |= i);
    }
  else
    r !== null ? ((i = r.baseLanes | n), (e.memoizedState = null)) : (i = n),
      G(ji, qe),
      (qe |= i);
  return Te(t, e, s, n), e.child;
}
function qg(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function uc(t, e, n, i, s) {
  var r = Ue(n) ? ei : Oe.current;
  return (
    (r = zi(e, r)),
    Ti(e, s),
    (n = gu(t, e, n, i, r, s)),
    (i = mu()),
    t !== null && !We
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~s),
        Xt(t, e, s))
      : (te && i && iu(e), (e.flags |= 1), Te(t, e, n, s), e.child)
  );
}
function vh(t, e, n, i, s) {
  if (Ue(n)) {
    var r = !0;
    Fo(e);
  } else r = !1;
  if ((Ti(e, s), e.stateNode === null))
    mo(t, e), kg(e, n, i), lc(e, n, i, s), (i = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = ut(c))
      : ((c = Ue(n) ? ei : Oe.current), (c = zi(e, c)));
    var u = n.getDerivedStateFromProps,
      d =
        typeof u == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== i || l !== c) && lh(e, o, i, c)),
      (en = !1);
    var h = e.memoizedState;
    (o.state = h),
      $o(e, i, o, s),
      (l = e.memoizedState),
      a !== i || h !== l || $e.current || en
        ? (typeof u == "function" && (ac(e, n, u, i), (l = e.memoizedState)),
          (a = en || ah(e, n, a, i, h, l, c))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = i),
              (e.memoizedState = l)),
          (o.props = i),
          (o.state = l),
          (o.context = c),
          (i = a))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (i = !1));
  } else {
    (o = e.stateNode),
      bg(t, e),
      (a = e.memoizedProps),
      (c = e.type === e.elementType ? a : gt(e.type, a)),
      (o.props = c),
      (d = e.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = ut(l))
        : ((l = Ue(n) ? ei : Oe.current), (l = zi(e, l)));
    var p = n.getDerivedStateFromProps;
    (u =
      typeof p == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || h !== l) && lh(e, o, i, l)),
      (en = !1),
      (h = e.memoizedState),
      (o.state = h),
      $o(e, i, o, s);
    var m = e.memoizedState;
    a !== d || h !== m || $e.current || en
      ? (typeof p == "function" && (ac(e, n, p, i), (m = e.memoizedState)),
        (c = en || ah(e, n, c, i, h, m, l) || !1)
          ? (u ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(i, m, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(i, m, l)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = i),
            (e.memoizedState = m)),
        (o.props = i),
        (o.state = m),
        (o.context = l),
        (i = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 1024),
        (i = !1));
  }
  return dc(t, e, n, i, r, s);
}
function dc(t, e, n, i, s, r) {
  qg(t, e);
  var o = (e.flags & 128) !== 0;
  if (!i && !o) return s && nh(e, n, !1), Xt(t, e, r);
  (i = e.stateNode), (Uy.current = e);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = Bi(e, t.child, null, r)), (e.child = Bi(e, null, a, r)))
      : Te(t, e, a, r),
    (e.memoizedState = i.state),
    s && nh(e, n, !0),
    e.child
  );
}
function Gg(t) {
  var e = t.stateNode;
  e.pendingContext
    ? th(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && th(t, e.context, !1),
    du(t, e.containerInfo);
}
function yh(t, e, n, i, s) {
  return Fi(), ru(s), (e.flags |= 256), Te(t, e, n, i), e.child;
}
var hc = { dehydrated: null, treeContext: null, retryLane: 0 };
function fc(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Zg(t, e, n) {
  var i = e.pendingProps,
    s = re.current,
    r = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = t !== null && t.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((r = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (s |= 1),
    G(re, s & 1),
    t === null)
  )
    return (
      rc(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = i.children),
          (t = i.fallback),
          r
            ? ((i = e.mode),
              (r = e.child),
              (o = { mode: "hidden", children: o }),
              !(i & 1) && r !== null
                ? ((r.childLanes = 0), (r.pendingProps = o))
                : (r = Da(o, i, 0, null)),
              (t = qn(t, i, n, null)),
              (r.return = e),
              (t.return = e),
              (r.sibling = t),
              (e.child = r),
              (e.child.memoizedState = fc(n)),
              (e.memoizedState = hc),
              t)
            : xu(e, o))
    );
  if (((s = t.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return Yy(t, e, o, i, a, s, n);
  if (r) {
    (r = i.fallback), (o = e.mode), (s = t.child), (a = s.sibling);
    var l = { mode: "hidden", children: i.children };
    return (
      !(o & 1) && e.child !== s
        ? ((i = e.child),
          (i.childLanes = 0),
          (i.pendingProps = l),
          (e.deletions = null))
        : ((i = _n(s, l)), (i.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (r = _n(a, r)) : ((r = qn(r, o, n, null)), (r.flags |= 2)),
      (r.return = e),
      (i.return = e),
      (i.sibling = r),
      (e.child = i),
      (i = r),
      (r = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? fc(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (r.memoizedState = o),
      (r.childLanes = t.childLanes & ~n),
      (e.memoizedState = hc),
      i
    );
  }
  return (
    (r = t.child),
    (t = r.sibling),
    (i = _n(r, { mode: "visible", children: i.children })),
    !(e.mode & 1) && (i.lanes = n),
    (i.return = e),
    (i.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = i),
    (e.memoizedState = null),
    i
  );
}
function xu(t, e) {
  return (
    (e = Da({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function Ir(t, e, n, i) {
  return (
    i !== null && ru(i),
    Bi(e, t.child, null, n),
    (t = xu(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function Yy(t, e, n, i, s, r, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (i = gl(Error(j(422)))), Ir(t, e, o, i))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((r = i.fallback),
        (s = e.mode),
        (i = Da({ mode: "visible", children: i.children }, s, 0, null)),
        (r = qn(r, s, o, null)),
        (r.flags |= 2),
        (i.return = e),
        (r.return = e),
        (i.sibling = r),
        (e.child = i),
        e.mode & 1 && Bi(e, t.child, null, o),
        (e.child.memoizedState = fc(o)),
        (e.memoizedState = hc),
        r);
  if (!(e.mode & 1)) return Ir(t, e, o, null);
  if (s.data === "$!") {
    if (((i = s.nextSibling && s.nextSibling.dataset), i)) var a = i.dgst;
    return (i = a), (r = Error(j(419))), (i = gl(r, i, void 0)), Ir(t, e, o, i);
  }
  if (((a = (o & t.childLanes) !== 0), We || a)) {
    if (((i = be), i !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (i.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== r.retryLane &&
          ((r.retryLane = s), Yt(t, s), bt(i, t, s, -1));
    }
    return Cu(), (i = gl(Error(j(421)))), Ir(t, e, o, i);
  }
  return s.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = rx.bind(null, t)),
      (s._reactRetry = e),
      null)
    : ((t = r.treeContext),
      (Ge = mn(s.nextSibling)),
      (Ze = e),
      (te = !0),
      (yt = null),
      t !== null &&
        ((st[rt++] = Bt),
        (st[rt++] = Ht),
        (st[rt++] = ti),
        (Bt = t.id),
        (Ht = t.overflow),
        (ti = e)),
      (e = xu(e, i.children)),
      (e.flags |= 4096),
      e);
}
function xh(t, e, n) {
  t.lanes |= e;
  var i = t.alternate;
  i !== null && (i.lanes |= e), oc(t.return, e, n);
}
function ml(t, e, n, i, s) {
  var r = t.memoizedState;
  r === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: s,
      })
    : ((r.isBackwards = e),
      (r.rendering = null),
      (r.renderingStartTime = 0),
      (r.last = i),
      (r.tail = n),
      (r.tailMode = s));
}
function Jg(t, e, n) {
  var i = e.pendingProps,
    s = i.revealOrder,
    r = i.tail;
  if ((Te(t, e, i.children, n), (i = re.current), i & 2))
    (i = (i & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && xh(t, n, e);
        else if (t.tag === 19) xh(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    i &= 1;
  }
  if ((G(re, i), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          (t = n.alternate),
            t !== null && Uo(t) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          ml(e, !1, s, n, r);
        break;
      case "backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && Uo(t) === null)) {
            e.child = s;
            break;
          }
          (t = s.sibling), (s.sibling = n), (n = s), (s = t);
        }
        ml(e, !0, n, null, r);
        break;
      case "together":
        ml(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function mo(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Xt(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (ii |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(j(153));
  if (e.child !== null) {
    for (
      t = e.child, n = _n(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = _n(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function Xy(t, e, n) {
  switch (e.tag) {
    case 3:
      Gg(e), Fi();
      break;
    case 5:
      Eg(e);
      break;
    case 1:
      Ue(e.type) && Fo(e);
      break;
    case 4:
      du(e, e.stateNode.containerInfo);
      break;
    case 10:
      var i = e.type._context,
        s = e.memoizedProps.value;
      G(Vo, i._currentValue), (i._currentValue = s);
      break;
    case 13:
      if (((i = e.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (G(re, re.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? Zg(t, e, n)
          : (G(re, re.current & 1),
            (t = Xt(t, e, n)),
            t !== null ? t.sibling : null);
      G(re, re.current & 1);
      break;
    case 19:
      if (((i = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (i) return Jg(t, e, n);
        e.flags |= 128;
      }
      if (
        ((s = e.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        G(re, re.current),
        i)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Qg(t, e, n);
  }
  return Xt(t, e, n);
}
var em, pc, tm, nm;
em = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
pc = function () {};
tm = function (t, e, n, i) {
  var s = t.memoizedProps;
  if (s !== i) {
    (t = e.stateNode), Xn(Pt.current);
    var r = null;
    switch (n) {
      case "input":
        (s = Rl(t, s)), (i = Rl(t, i)), (r = []);
        break;
      case "select":
        (s = ae({}, s, { value: void 0 })),
          (i = ae({}, i, { value: void 0 })),
          (r = []);
        break;
      case "textarea":
        (s = Fl(t, s)), (i = Fl(t, i)), (r = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof i.onClick == "function" &&
          (t.onclick = Io);
    }
    Hl(n, i);
    var o;
    n = null;
    for (c in s)
      if (!i.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
        if (c === "style") {
          var a = s[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Bs.hasOwnProperty(c)
              ? r || (r = [])
              : (r = r || []).push(c, null));
    for (c in i) {
      var l = i[c];
      if (
        ((a = s != null ? s[c] : void 0),
        i.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (r || (r = []), r.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (r = r || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (r = r || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Bs.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && Z("scroll", t),
                  r || a === l || (r = []))
                : (r = r || []).push(c, l));
    }
    n && (r = r || []).push("style", n);
    var c = r;
    (e.updateQueue = c) && (e.flags |= 4);
  }
};
nm = function (t, e, n, i) {
  n !== i && (e.flags |= 4);
};
function rs(t, e) {
  if (!te)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var i = null; n !== null; )
          n.alternate !== null && (i = n), (n = n.sibling);
        i === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (i.sibling = null);
    }
}
function je(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    i = 0;
  if (e)
    for (var s = t.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (i |= s.subtreeFlags & 14680064),
        (i |= s.flags & 14680064),
        (s.return = t),
        (s = s.sibling);
  else
    for (s = t.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (i |= s.subtreeFlags),
        (i |= s.flags),
        (s.return = t),
        (s = s.sibling);
  return (t.subtreeFlags |= i), (t.childLanes = n), e;
}
function Ky(t, e, n) {
  var i = e.pendingProps;
  switch ((su(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return je(e), null;
    case 1:
      return Ue(e.type) && zo(), je(e), null;
    case 3:
      return (
        (i = e.stateNode),
        Hi(),
        J($e),
        J(Oe),
        fu(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (t === null || t.child === null) &&
          (Ar(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), yt !== null && (wc(yt), (yt = null)))),
        pc(t, e),
        je(e),
        null
      );
    case 5:
      hu(e);
      var s = Xn(Zs.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        tm(t, e, n, i, s),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!i) {
          if (e.stateNode === null) throw Error(j(166));
          return je(e), null;
        }
        if (((t = Xn(Pt.current)), Ar(e))) {
          (i = e.stateNode), (n = e.type);
          var r = e.memoizedProps;
          switch (((i[jt] = e), (i[qs] = r), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              Z("cancel", i), Z("close", i);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", i);
              break;
            case "video":
            case "audio":
              for (s = 0; s < vs.length; s++) Z(vs[s], i);
              break;
            case "source":
              Z("error", i);
              break;
            case "img":
            case "image":
            case "link":
              Z("error", i), Z("load", i);
              break;
            case "details":
              Z("toggle", i);
              break;
            case "input":
              Md(i, r), Z("invalid", i);
              break;
            case "select":
              (i._wrapperState = { wasMultiple: !!r.multiple }),
                Z("invalid", i);
              break;
            case "textarea":
              Ld(i, r), Z("invalid", i);
          }
          Hl(n, r), (s = null);
          for (var o in r)
            if (r.hasOwnProperty(o)) {
              var a = r[o];
              o === "children"
                ? typeof a == "string"
                  ? i.textContent !== a &&
                    (r.suppressHydrationWarning !== !0 &&
                      Tr(i.textContent, a, t),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    i.textContent !== "" + a &&
                    (r.suppressHydrationWarning !== !0 &&
                      Tr(i.textContent, a, t),
                    (s = ["children", "" + a]))
                : Bs.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  Z("scroll", i);
            }
          switch (n) {
            case "input":
              Er(i), Pd(i, r, !0);
              break;
            case "textarea":
              Er(i), Od(i);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof r.onClick == "function" && (i.onclick = Io);
          }
          (i = s), (e.updateQueue = i), i !== null && (e.flags |= 4);
        } else {
          (o = s.nodeType === 9 ? s : s.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = Pp(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof i.is == "string"
                ? (t = o.createElement(n, { is: i.is }))
                : ((t = o.createElement(n)),
                  n === "select" &&
                    ((o = t),
                    i.multiple
                      ? (o.multiple = !0)
                      : i.size && (o.size = i.size)))
              : (t = o.createElementNS(t, n)),
            (t[jt] = e),
            (t[qs] = i),
            em(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = Vl(n, i)), n)) {
              case "dialog":
                Z("cancel", t), Z("close", t), (s = i);
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", t), (s = i);
                break;
              case "video":
              case "audio":
                for (s = 0; s < vs.length; s++) Z(vs[s], t);
                s = i;
                break;
              case "source":
                Z("error", t), (s = i);
                break;
              case "img":
              case "image":
              case "link":
                Z("error", t), Z("load", t), (s = i);
                break;
              case "details":
                Z("toggle", t), (s = i);
                break;
              case "input":
                Md(t, i), (s = Rl(t, i)), Z("invalid", t);
                break;
              case "option":
                s = i;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!i.multiple }),
                  (s = ae({}, i, { value: void 0 })),
                  Z("invalid", t);
                break;
              case "textarea":
                Ld(t, i), (s = Fl(t, i)), Z("invalid", t);
                break;
              default:
                s = i;
            }
            Hl(n, s), (a = s);
            for (r in a)
              if (a.hasOwnProperty(r)) {
                var l = a[r];
                r === "style"
                  ? Dp(t, l)
                  : r === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Lp(t, l))
                  : r === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Hs(t, l)
                    : typeof l == "number" && Hs(t, "" + l)
                  : r !== "suppressContentEditableWarning" &&
                    r !== "suppressHydrationWarning" &&
                    r !== "autoFocus" &&
                    (Bs.hasOwnProperty(r)
                      ? l != null && r === "onScroll" && Z("scroll", t)
                      : l != null && Wc(t, r, l, o));
              }
            switch (n) {
              case "input":
                Er(t), Pd(t, i, !1);
                break;
              case "textarea":
                Er(t), Od(t);
                break;
              case "option":
                i.value != null && t.setAttribute("value", "" + kn(i.value));
                break;
              case "select":
                (t.multiple = !!i.multiple),
                  (r = i.value),
                  r != null
                    ? Li(t, !!i.multiple, r, !1)
                    : i.defaultValue != null &&
                      Li(t, !!i.multiple, i.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (t.onclick = Io);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
          }
          i && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return je(e), null;
    case 6:
      if (t && e.stateNode != null) nm(t, e, t.memoizedProps, i);
      else {
        if (typeof i != "string" && e.stateNode === null) throw Error(j(166));
        if (((n = Xn(Zs.current)), Xn(Pt.current), Ar(e))) {
          if (
            ((i = e.stateNode),
            (n = e.memoizedProps),
            (i[jt] = e),
            (r = i.nodeValue !== n) && ((t = Ze), t !== null))
          )
            switch (t.tag) {
              case 3:
                Tr(i.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Tr(i.nodeValue, n, (t.mode & 1) !== 0);
            }
          r && (e.flags |= 4);
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[jt] = e),
            (e.stateNode = i);
      }
      return je(e), null;
    case 13:
      if (
        (J(re),
        (i = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (te && Ge !== null && e.mode & 1 && !(e.flags & 128))
          xg(), Fi(), (e.flags |= 98560), (r = !1);
        else if (((r = Ar(e)), i !== null && i.dehydrated !== null)) {
          if (t === null) {
            if (!r) throw Error(j(318));
            if (
              ((r = e.memoizedState),
              (r = r !== null ? r.dehydrated : null),
              !r)
            )
              throw Error(j(317));
            r[jt] = e;
          } else
            Fi(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          je(e), (r = !1);
        } else yt !== null && (wc(yt), (yt = null)), (r = !0);
        if (!r) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((i = i !== null),
          i !== (t !== null && t.memoizedState !== null) &&
            i &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || re.current & 1 ? me === 0 && (me = 3) : Cu())),
          e.updateQueue !== null && (e.flags |= 4),
          je(e),
          null);
    case 4:
      return (
        Hi(), pc(t, e), t === null && Ks(e.stateNode.containerInfo), je(e), null
      );
    case 10:
      return lu(e.type._context), je(e), null;
    case 17:
      return Ue(e.type) && zo(), je(e), null;
    case 19:
      if ((J(re), (r = e.memoizedState), r === null)) return je(e), null;
      if (((i = (e.flags & 128) !== 0), (o = r.rendering), o === null))
        if (i) rs(r, !1);
        else {
          if (me !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = Uo(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    rs(r, !1),
                    i = o.updateQueue,
                    i !== null && ((e.updateQueue = i), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    i = n,
                    n = e.child;
                  n !== null;

                )
                  (r = n),
                    (t = i),
                    (r.flags &= 14680066),
                    (o = r.alternate),
                    o === null
                      ? ((r.childLanes = 0),
                        (r.lanes = t),
                        (r.child = null),
                        (r.subtreeFlags = 0),
                        (r.memoizedProps = null),
                        (r.memoizedState = null),
                        (r.updateQueue = null),
                        (r.dependencies = null),
                        (r.stateNode = null))
                      : ((r.childLanes = o.childLanes),
                        (r.lanes = o.lanes),
                        (r.child = o.child),
                        (r.subtreeFlags = 0),
                        (r.deletions = null),
                        (r.memoizedProps = o.memoizedProps),
                        (r.memoizedState = o.memoizedState),
                        (r.updateQueue = o.updateQueue),
                        (r.type = o.type),
                        (t = o.dependencies),
                        (r.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return G(re, (re.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          r.tail !== null &&
            de() > Wi &&
            ((e.flags |= 128), (i = !0), rs(r, !1), (e.lanes = 4194304));
        }
      else {
        if (!i)
          if (((t = Uo(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (i = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              rs(r, !0),
              r.tail === null && r.tailMode === "hidden" && !o.alternate && !te)
            )
              return je(e), null;
          } else
            2 * de() - r.renderingStartTime > Wi &&
              n !== 1073741824 &&
              ((e.flags |= 128), (i = !0), rs(r, !1), (e.lanes = 4194304));
        r.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = r.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (r.last = o));
      }
      return r.tail !== null
        ? ((e = r.tail),
          (r.rendering = e),
          (r.tail = e.sibling),
          (r.renderingStartTime = de()),
          (e.sibling = null),
          (n = re.current),
          G(re, i ? (n & 1) | 2 : n & 1),
          e)
        : (je(e), null);
    case 22:
    case 23:
      return (
        Su(),
        (i = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== i && (e.flags |= 8192),
        i && e.mode & 1
          ? qe & 1073741824 && (je(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : je(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, e.tag));
}
function Qy(t, e) {
  switch ((su(e), e.tag)) {
    case 1:
      return (
        Ue(e.type) && zo(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        Hi(),
        J($e),
        J(Oe),
        fu(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return hu(e), null;
    case 13:
      if ((J(re), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
        if (e.alternate === null) throw Error(j(340));
        Fi();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return J(re), null;
    case 4:
      return Hi(), null;
    case 10:
      return lu(e.type._context), null;
    case 22:
    case 23:
      return Su(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zr = !1,
  Pe = !1,
  qy = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function Ei(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (i) {
        le(t, e, i);
      }
    else n.current = null;
}
function gc(t, e, n) {
  try {
    n();
  } catch (i) {
    le(t, e, i);
  }
}
var _h = !1;
function Gy(t, e) {
  if (((Zl = To), (t = og()), nu(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var s = i.anchorOffset,
            r = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, r.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            d = t,
            h = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (s !== 0 && d.nodeType !== 3) || (a = o + s),
                d !== r || (i !== 0 && d.nodeType !== 3) || (l = o + i),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (h = d), (d = p);
            for (;;) {
              if (d === t) break t;
              if (
                (h === n && ++c === s && (a = o),
                h === r && ++u === i && (l = o),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Jl = { focusedElem: t, selectionRange: n }, To = !1, T = e; T !== null; )
    if (((e = T), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (T = t);
    else
      for (; T !== null; ) {
        e = T;
        try {
          var m = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var y = m.memoizedProps,
                    _ = m.memoizedState,
                    g = e.stateNode,
                    v = g.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? y : gt(e.type, y),
                      _
                    );
                  g.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var x = e.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (b) {
          le(e, e.return, b);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (T = t);
          break;
        }
        T = e.return;
      }
  return (m = _h), (_h = !1), m;
}
function Ls(t, e, n) {
  var i = e.updateQueue;
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var s = (i = i.next);
    do {
      if ((s.tag & t) === t) {
        var r = s.destroy;
        (s.destroy = void 0), r !== void 0 && gc(e, n, r);
      }
      s = s.next;
    } while (s !== i);
  }
}
function La(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== e);
  }
}
function mc(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function im(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), im(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[jt], delete e[qs], delete e[nc], delete e[Ny], delete e[Ty])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function sm(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function bh(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || sm(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function vc(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = Io));
  else if (i !== 4 && ((t = t.child), t !== null))
    for (vc(t, e, n), t = t.sibling; t !== null; ) vc(t, e, n), (t = t.sibling);
}
function yc(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (i !== 4 && ((t = t.child), t !== null))
    for (yc(t, e, n), t = t.sibling; t !== null; ) yc(t, e, n), (t = t.sibling);
}
var we = null,
  mt = !1;
function Gt(t, e, n) {
  for (n = n.child; n !== null; ) rm(t, e, n), (n = n.sibling);
}
function rm(t, e, n) {
  if (Mt && typeof Mt.onCommitFiberUnmount == "function")
    try {
      Mt.onCommitFiberUnmount(wa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Pe || Ei(n, e);
    case 6:
      var i = we,
        s = mt;
      (we = null),
        Gt(t, e, n),
        (we = i),
        (mt = s),
        we !== null &&
          (mt
            ? ((t = we),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : we.removeChild(n.stateNode));
      break;
    case 18:
      we !== null &&
        (mt
          ? ((t = we),
            (n = n.stateNode),
            t.nodeType === 8
              ? cl(t.parentNode, n)
              : t.nodeType === 1 && cl(t, n),
            Us(t))
          : cl(we, n.stateNode));
      break;
    case 4:
      (i = we),
        (s = mt),
        (we = n.stateNode.containerInfo),
        (mt = !0),
        Gt(t, e, n),
        (we = i),
        (mt = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Pe &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        s = i = i.next;
        do {
          var r = s,
            o = r.destroy;
          (r = r.tag),
            o !== void 0 && (r & 2 || r & 4) && gc(n, e, o),
            (s = s.next);
        } while (s !== i);
      }
      Gt(t, e, n);
      break;
    case 1:
      if (
        !Pe &&
        (Ei(n, e),
        (i = n.stateNode),
        typeof i.componentWillUnmount == "function")
      )
        try {
          (i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount();
        } catch (a) {
          le(n, e, a);
        }
      Gt(t, e, n);
      break;
    case 21:
      Gt(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((Pe = (i = Pe) || n.memoizedState !== null), Gt(t, e, n), (Pe = i))
        : Gt(t, e, n);
      break;
    default:
      Gt(t, e, n);
  }
}
function wh(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new qy()),
      e.forEach(function (i) {
        var s = ox.bind(null, t, i);
        n.has(i) || (n.add(i), i.then(s, s));
      });
  }
}
function pt(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      try {
        var r = t,
          o = e,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (we = a.stateNode), (mt = !1);
              break e;
            case 3:
              (we = a.stateNode.containerInfo), (mt = !0);
              break e;
            case 4:
              (we = a.stateNode.containerInfo), (mt = !0);
              break e;
          }
          a = a.return;
        }
        if (we === null) throw Error(j(160));
        rm(r, o, s), (we = null), (mt = !1);
        var l = s.alternate;
        l !== null && (l.return = null), (s.return = null);
      } catch (c) {
        le(s, e, c);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) om(e, t), (e = e.sibling);
}
function om(t, e) {
  var n = t.alternate,
    i = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pt(e, t), kt(t), i & 4)) {
        try {
          Ls(3, t, t.return), La(3, t);
        } catch (y) {
          le(t, t.return, y);
        }
        try {
          Ls(5, t, t.return);
        } catch (y) {
          le(t, t.return, y);
        }
      }
      break;
    case 1:
      pt(e, t), kt(t), i & 512 && n !== null && Ei(n, n.return);
      break;
    case 5:
      if (
        (pt(e, t),
        kt(t),
        i & 512 && n !== null && Ei(n, n.return),
        t.flags & 32)
      ) {
        var s = t.stateNode;
        try {
          Hs(s, "");
        } catch (y) {
          le(t, t.return, y);
        }
      }
      if (i & 4 && ((s = t.stateNode), s != null)) {
        var r = t.memoizedProps,
          o = n !== null ? n.memoizedProps : r,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            a === "input" && r.type === "radio" && r.name != null && jp(s, r),
              Vl(a, o);
            var c = Vl(a, r);
            for (o = 0; o < l.length; o += 2) {
              var u = l[o],
                d = l[o + 1];
              u === "style"
                ? Dp(s, d)
                : u === "dangerouslySetInnerHTML"
                ? Lp(s, d)
                : u === "children"
                ? Hs(s, d)
                : Wc(s, u, d, c);
            }
            switch (a) {
              case "input":
                Il(s, r);
                break;
              case "textarea":
                Mp(s, r);
                break;
              case "select":
                var h = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!r.multiple;
                var p = r.value;
                p != null
                  ? Li(s, !!r.multiple, p, !1)
                  : h !== !!r.multiple &&
                    (r.defaultValue != null
                      ? Li(s, !!r.multiple, r.defaultValue, !0)
                      : Li(s, !!r.multiple, r.multiple ? [] : "", !1));
            }
            s[qs] = r;
          } catch (y) {
            le(t, t.return, y);
          }
      }
      break;
    case 6:
      if ((pt(e, t), kt(t), i & 4)) {
        if (t.stateNode === null) throw Error(j(162));
        (s = t.stateNode), (r = t.memoizedProps);
        try {
          s.nodeValue = r;
        } catch (y) {
          le(t, t.return, y);
        }
      }
      break;
    case 3:
      if (
        (pt(e, t), kt(t), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Us(e.containerInfo);
        } catch (y) {
          le(t, t.return, y);
        }
      break;
    case 4:
      pt(e, t), kt(t);
      break;
    case 13:
      pt(e, t),
        kt(t),
        (s = t.child),
        s.flags & 8192 &&
          ((r = s.memoizedState !== null),
          (s.stateNode.isHidden = r),
          !r ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (wu = de())),
        i & 4 && wh(t);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Pe = (c = Pe) || u), pt(e, t), (Pe = c)) : pt(e, t),
        kt(t),
        i & 8192)
      ) {
        if (
          ((c = t.memoizedState !== null),
          (t.stateNode.isHidden = c) && !u && t.mode & 1)
        )
          for (T = t, u = t.child; u !== null; ) {
            for (d = T = u; T !== null; ) {
              switch (((h = T), (p = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ls(4, h, h.return);
                  break;
                case 1:
                  Ei(h, h.return);
                  var m = h.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (i = h), (n = h.return);
                    try {
                      (e = i),
                        (m.props = e.memoizedProps),
                        (m.state = e.memoizedState),
                        m.componentWillUnmount();
                    } catch (y) {
                      le(i, n, y);
                    }
                  }
                  break;
                case 5:
                  Ei(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Sh(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = h), (T = p)) : Sh(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = t; ; ) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                (s = d.stateNode),
                  c
                    ? ((r = s.style),
                      typeof r.setProperty == "function"
                        ? r.setProperty("display", "none", "important")
                        : (r.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Op("display", o)));
              } catch (y) {
                le(t, t.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (y) {
                le(t, t.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === t) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === t) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === t) break e;
            u === d && (u = null), (d = d.return);
          }
          u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      pt(e, t), kt(t), i & 4 && wh(t);
      break;
    case 21:
      break;
    default:
      pt(e, t), kt(t);
  }
}
function kt(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (sm(n)) {
            var i = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (i.tag) {
        case 5:
          var s = i.stateNode;
          i.flags & 32 && (Hs(s, ""), (i.flags &= -33));
          var r = bh(t);
          yc(t, r, s);
          break;
        case 3:
        case 4:
          var o = i.stateNode.containerInfo,
            a = bh(t);
          vc(t, a, o);
          break;
        default:
          throw Error(j(161));
      }
    } catch (l) {
      le(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function Zy(t, e, n) {
  (T = t), am(t);
}
function am(t, e, n) {
  for (var i = (t.mode & 1) !== 0; T !== null; ) {
    var s = T,
      r = s.child;
    if (s.tag === 22 && i) {
      var o = s.memoizedState !== null || zr;
      if (!o) {
        var a = s.alternate,
          l = (a !== null && a.memoizedState !== null) || Pe;
        a = zr;
        var c = Pe;
        if (((zr = o), (Pe = l) && !c))
          for (T = s; T !== null; )
            (o = T),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ch(s)
                : l !== null
                ? ((l.return = o), (T = l))
                : Ch(s);
        for (; r !== null; ) (T = r), am(r), (r = r.sibling);
        (T = s), (zr = a), (Pe = c);
      }
      kh(t);
    } else
      s.subtreeFlags & 8772 && r !== null ? ((r.return = s), (T = r)) : kh(t);
  }
}
function kh(t) {
  for (; T !== null; ) {
    var e = T;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Pe || La(5, e);
              break;
            case 1:
              var i = e.stateNode;
              if (e.flags & 4 && !Pe)
                if (n === null) i.componentDidMount();
                else {
                  var s =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : gt(e.type, n.memoizedProps);
                  i.componentDidUpdate(
                    s,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var r = e.updateQueue;
              r !== null && oh(e, r, i);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                oh(e, o, n);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (n === null && e.flags & 4) {
                n = a;
                var l = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var c = e.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && Us(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        Pe || (e.flags & 512 && mc(e));
      } catch (h) {
        le(e, e.return, h);
      }
    }
    if (e === t) {
      T = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (T = n);
      break;
    }
    T = e.return;
  }
}
function Sh(t) {
  for (; T !== null; ) {
    var e = T;
    if (e === t) {
      T = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (T = n);
      break;
    }
    T = e.return;
  }
}
function Ch(t) {
  for (; T !== null; ) {
    var e = T;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            La(4, e);
          } catch (l) {
            le(e, n, l);
          }
          break;
        case 1:
          var i = e.stateNode;
          if (typeof i.componentDidMount == "function") {
            var s = e.return;
            try {
              i.componentDidMount();
            } catch (l) {
              le(e, s, l);
            }
          }
          var r = e.return;
          try {
            mc(e);
          } catch (l) {
            le(e, r, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            mc(e);
          } catch (l) {
            le(e, o, l);
          }
      }
    } catch (l) {
      le(e, e.return, l);
    }
    if (e === t) {
      T = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (T = a);
      break;
    }
    T = e.return;
  }
}
var Jy = Math.ceil,
  Ko = Qt.ReactCurrentDispatcher,
  _u = Qt.ReactCurrentOwner,
  lt = Qt.ReactCurrentBatchConfig,
  W = 0,
  be = null,
  fe = null,
  ke = 0,
  qe = 0,
  ji = Mn(0),
  me = 0,
  nr = null,
  ii = 0,
  Oa = 0,
  bu = 0,
  Os = null,
  He = null,
  wu = 0,
  Wi = 1 / 0,
  It = null,
  Qo = !1,
  xc = null,
  yn = null,
  Fr = !1,
  ln = null,
  qo = 0,
  Ds = 0,
  _c = null,
  vo = -1,
  yo = 0;
function Re() {
  return W & 6 ? de() : vo !== -1 ? vo : (vo = de());
}
function xn(t) {
  return t.mode & 1
    ? W & 2 && ke !== 0
      ? ke & -ke
      : Ry.transition !== null
      ? (yo === 0 && (yo = $p()), yo)
      : ((t = Q),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Gp(t.type))),
        t)
    : 1;
}
function bt(t, e, n, i) {
  if (50 < Ds) throw ((Ds = 0), (_c = null), Error(j(185)));
  pr(t, n, i),
    (!(W & 2) || t !== be) &&
      (t === be && (!(W & 2) && (Oa |= n), me === 4 && on(t, ke)),
      Ye(t, i),
      n === 1 && W === 0 && !(e.mode & 1) && ((Wi = de() + 500), ja && Pn()));
}
function Ye(t, e) {
  var n = t.callbackNode;
  Rv(t, e);
  var i = No(t, t === be ? ke : 0);
  if (i === 0)
    n !== null && Td(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = i & -i), t.callbackPriority !== e)) {
    if ((n != null && Td(n), e === 1))
      t.tag === 0 ? Ay(Eh.bind(null, t)) : mg(Eh.bind(null, t)),
        Oy(function () {
          !(W & 6) && Pn();
        }),
        (n = null);
    else {
      switch (Up(i)) {
        case 1:
          n = Kc;
          break;
        case 4:
          n = Vp;
          break;
        case 16:
          n = Do;
          break;
        case 536870912:
          n = Wp;
          break;
        default:
          n = Do;
      }
      n = gm(n, lm.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function lm(t, e) {
  if (((vo = -1), (yo = 0), W & 6)) throw Error(j(327));
  var n = t.callbackNode;
  if (Ai() && t.callbackNode !== n) return null;
  var i = No(t, t === be ? ke : 0);
  if (i === 0) return null;
  if (i & 30 || i & t.expiredLanes || e) e = Go(t, i);
  else {
    e = i;
    var s = W;
    W |= 2;
    var r = um();
    (be !== t || ke !== e) && ((It = null), (Wi = de() + 500), Qn(t, e));
    do
      try {
        nx();
        break;
      } catch (a) {
        cm(t, a);
      }
    while (1);
    au(),
      (Ko.current = r),
      (W = s),
      fe !== null ? (e = 0) : ((be = null), (ke = 0), (e = me));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((s = Xl(t)), s !== 0 && ((i = s), (e = bc(t, s)))), e === 1)
    )
      throw ((n = nr), Qn(t, 0), on(t, i), Ye(t, de()), n);
    if (e === 6) on(t, i);
    else {
      if (
        ((s = t.current.alternate),
        !(i & 30) &&
          !ex(s) &&
          ((e = Go(t, i)),
          e === 2 && ((r = Xl(t)), r !== 0 && ((i = r), (e = bc(t, r)))),
          e === 1))
      )
        throw ((n = nr), Qn(t, 0), on(t, i), Ye(t, de()), n);
      switch (((t.finishedWork = s), (t.finishedLanes = i), e)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Fn(t, He, It);
          break;
        case 3:
          if (
            (on(t, i), (i & 130023424) === i && ((e = wu + 500 - de()), 10 < e))
          ) {
            if (No(t, 0) !== 0) break;
            if (((s = t.suspendedLanes), (s & i) !== i)) {
              Re(), (t.pingedLanes |= t.suspendedLanes & s);
              break;
            }
            t.timeoutHandle = tc(Fn.bind(null, t, He, It), e);
            break;
          }
          Fn(t, He, It);
          break;
        case 4:
          if ((on(t, i), (i & 4194240) === i)) break;
          for (e = t.eventTimes, s = -1; 0 < i; ) {
            var o = 31 - _t(i);
            (r = 1 << o), (o = e[o]), o > s && (s = o), (i &= ~r);
          }
          if (
            ((i = s),
            (i = de() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                ? 480
                : 1080 > i
                ? 1080
                : 1920 > i
                ? 1920
                : 3e3 > i
                ? 3e3
                : 4320 > i
                ? 4320
                : 1960 * Jy(i / 1960)) - i),
            10 < i)
          ) {
            t.timeoutHandle = tc(Fn.bind(null, t, He, It), i);
            break;
          }
          Fn(t, He, It);
          break;
        case 5:
          Fn(t, He, It);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return Ye(t, de()), t.callbackNode === n ? lm.bind(null, t) : null;
}
function bc(t, e) {
  var n = Os;
  return (
    t.current.memoizedState.isDehydrated && (Qn(t, e).flags |= 256),
    (t = Go(t, e)),
    t !== 2 && ((e = He), (He = n), e !== null && wc(e)),
    t
  );
}
function wc(t) {
  He === null ? (He = t) : He.push.apply(He, t);
}
function ex(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var s = n[i],
            r = s.getSnapshot;
          s = s.value;
          try {
            if (!wt(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function on(t, e) {
  for (
    e &= ~bu,
      e &= ~Oa,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - _t(e),
      i = 1 << n;
    (t[n] = -1), (e &= ~i);
  }
}
function Eh(t) {
  if (W & 6) throw Error(j(327));
  Ai();
  var e = No(t, 0);
  if (!(e & 1)) return Ye(t, de()), null;
  var n = Go(t, e);
  if (t.tag !== 0 && n === 2) {
    var i = Xl(t);
    i !== 0 && ((e = i), (n = bc(t, i)));
  }
  if (n === 1) throw ((n = nr), Qn(t, 0), on(t, e), Ye(t, de()), n);
  if (n === 6) throw Error(j(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    Fn(t, He, It),
    Ye(t, de()),
    null
  );
}
function ku(t, e) {
  var n = W;
  W |= 1;
  try {
    return t(e);
  } finally {
    (W = n), W === 0 && ((Wi = de() + 500), ja && Pn());
  }
}
function si(t) {
  ln !== null && ln.tag === 0 && !(W & 6) && Ai();
  var e = W;
  W |= 1;
  var n = lt.transition,
    i = Q;
  try {
    if (((lt.transition = null), (Q = 1), t)) return t();
  } finally {
    (Q = i), (lt.transition = n), (W = e), !(W & 6) && Pn();
  }
}
function Su() {
  (qe = ji.current), J(ji);
}
function Qn(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), Ly(n)), fe !== null))
    for (n = fe.return; n !== null; ) {
      var i = n;
      switch ((su(i), i.tag)) {
        case 1:
          (i = i.type.childContextTypes), i != null && zo();
          break;
        case 3:
          Hi(), J($e), J(Oe), fu();
          break;
        case 5:
          hu(i);
          break;
        case 4:
          Hi();
          break;
        case 13:
          J(re);
          break;
        case 19:
          J(re);
          break;
        case 10:
          lu(i.type._context);
          break;
        case 22:
        case 23:
          Su();
      }
      n = n.return;
    }
  if (
    ((be = t),
    (fe = t = _n(t.current, null)),
    (ke = qe = e),
    (me = 0),
    (nr = null),
    (bu = Oa = ii = 0),
    (He = Os = null),
    Yn !== null)
  ) {
    for (e = 0; e < Yn.length; e++)
      if (((n = Yn[e]), (i = n.interleaved), i !== null)) {
        n.interleaved = null;
        var s = i.next,
          r = n.pending;
        if (r !== null) {
          var o = r.next;
          (r.next = s), (i.next = o);
        }
        n.pending = i;
      }
    Yn = null;
  }
  return t;
}
function cm(t, e) {
  do {
    var n = fe;
    try {
      if ((au(), (po.current = Xo), Yo)) {
        for (var i = oe.memoizedState; i !== null; ) {
          var s = i.queue;
          s !== null && (s.pending = null), (i = i.next);
        }
        Yo = !1;
      }
      if (
        ((ni = 0),
        (xe = ge = oe = null),
        (Ps = !1),
        (Js = 0),
        (_u.current = null),
        n === null || n.return === null)
      ) {
        (me = 1), (nr = e), (fe = null);
        break;
      }
      e: {
        var r = t,
          o = n.return,
          a = n,
          l = e;
        if (
          ((e = ke),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = u.alternate;
            h
              ? ((u.updateQueue = h.updateQueue),
                (u.memoizedState = h.memoizedState),
                (u.lanes = h.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var p = fh(o);
          if (p !== null) {
            (p.flags &= -257),
              ph(p, o, a, r, e),
              p.mode & 1 && hh(r, c, e),
              (e = p),
              (l = c);
            var m = e.updateQueue;
            if (m === null) {
              var y = new Set();
              y.add(l), (e.updateQueue = y);
            } else m.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              hh(r, c, e), Cu();
              break e;
            }
            l = Error(j(426));
          }
        } else if (te && a.mode & 1) {
          var _ = fh(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              ph(_, o, a, r, e),
              ru(Vi(l, a));
            break e;
          }
        }
        (r = l = Vi(l, a)),
          me !== 4 && (me = 2),
          Os === null ? (Os = [r]) : Os.push(r),
          (r = o);
        do {
          switch (r.tag) {
            case 3:
              (r.flags |= 65536), (e &= -e), (r.lanes |= e);
              var g = Yg(r, l, e);
              rh(r, g);
              break e;
            case 1:
              a = l;
              var v = r.type,
                x = r.stateNode;
              if (
                !(r.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (yn === null || !yn.has(x))))
              ) {
                (r.flags |= 65536), (e &= -e), (r.lanes |= e);
                var b = Xg(r, a, e);
                rh(r, b);
                break e;
              }
          }
          r = r.return;
        } while (r !== null);
      }
      hm(n);
    } catch (w) {
      (e = w), fe === n && n !== null && (fe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function um() {
  var t = Ko.current;
  return (Ko.current = Xo), t === null ? Xo : t;
}
function Cu() {
  (me === 0 || me === 3 || me === 2) && (me = 4),
    be === null || (!(ii & 268435455) && !(Oa & 268435455)) || on(be, ke);
}
function Go(t, e) {
  var n = W;
  W |= 2;
  var i = um();
  (be !== t || ke !== e) && ((It = null), Qn(t, e));
  do
    try {
      tx();
      break;
    } catch (s) {
      cm(t, s);
    }
  while (1);
  if ((au(), (W = n), (Ko.current = i), fe !== null)) throw Error(j(261));
  return (be = null), (ke = 0), me;
}
function tx() {
  for (; fe !== null; ) dm(fe);
}
function nx() {
  for (; fe !== null && !jv(); ) dm(fe);
}
function dm(t) {
  var e = pm(t.alternate, t, qe);
  (t.memoizedProps = t.pendingProps),
    e === null ? hm(t) : (fe = e),
    (_u.current = null);
}
function hm(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = Qy(n, e)), n !== null)) {
        (n.flags &= 32767), (fe = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (me = 6), (fe = null);
        return;
      }
    } else if (((n = Ky(n, e, qe)), n !== null)) {
      fe = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      fe = e;
      return;
    }
    fe = e = t;
  } while (e !== null);
  me === 0 && (me = 5);
}
function Fn(t, e, n) {
  var i = Q,
    s = lt.transition;
  try {
    (lt.transition = null), (Q = 1), ix(t, e, n, i);
  } finally {
    (lt.transition = s), (Q = i);
  }
  return null;
}
function ix(t, e, n, i) {
  do Ai();
  while (ln !== null);
  if (W & 6) throw Error(j(327));
  n = t.finishedWork;
  var s = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(j(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var r = n.lanes | n.childLanes;
  if (
    (Iv(t, r),
    t === be && ((fe = be = null), (ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fr ||
      ((Fr = !0),
      gm(Do, function () {
        return Ai(), null;
      })),
    (r = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || r)
  ) {
    (r = lt.transition), (lt.transition = null);
    var o = Q;
    Q = 1;
    var a = W;
    (W |= 4),
      (_u.current = null),
      Gy(t, n),
      om(n, t),
      ky(Jl),
      (To = !!Zl),
      (Jl = Zl = null),
      (t.current = n),
      Zy(n),
      Mv(),
      (W = a),
      (Q = o),
      (lt.transition = r);
  } else t.current = n;
  if (
    (Fr && ((Fr = !1), (ln = t), (qo = s)),
    (r = t.pendingLanes),
    r === 0 && (yn = null),
    Ov(n.stateNode),
    Ye(t, de()),
    e !== null)
  )
    for (i = t.onRecoverableError, n = 0; n < e.length; n++)
      (s = e[n]), i(s.value, { componentStack: s.stack, digest: s.digest });
  if (Qo) throw ((Qo = !1), (t = xc), (xc = null), t);
  return (
    qo & 1 && t.tag !== 0 && Ai(),
    (r = t.pendingLanes),
    r & 1 ? (t === _c ? Ds++ : ((Ds = 0), (_c = t))) : (Ds = 0),
    Pn(),
    null
  );
}
function Ai() {
  if (ln !== null) {
    var t = Up(qo),
      e = lt.transition,
      n = Q;
    try {
      if (((lt.transition = null), (Q = 16 > t ? 16 : t), ln === null))
        var i = !1;
      else {
        if (((t = ln), (ln = null), (qo = 0), W & 6)) throw Error(j(331));
        var s = W;
        for (W |= 4, T = t.current; T !== null; ) {
          var r = T,
            o = r.child;
          if (T.flags & 16) {
            var a = r.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (T = c; T !== null; ) {
                  var u = T;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ls(8, u, r);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (T = d);
                  else
                    for (; T !== null; ) {
                      u = T;
                      var h = u.sibling,
                        p = u.return;
                      if ((im(u), u === c)) {
                        T = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = p), (T = h);
                        break;
                      }
                      T = p;
                    }
                }
              }
              var m = r.alternate;
              if (m !== null) {
                var y = m.child;
                if (y !== null) {
                  m.child = null;
                  do {
                    var _ = y.sibling;
                    (y.sibling = null), (y = _);
                  } while (y !== null);
                }
              }
              T = r;
            }
          }
          if (r.subtreeFlags & 2064 && o !== null) (o.return = r), (T = o);
          else
            e: for (; T !== null; ) {
              if (((r = T), r.flags & 2048))
                switch (r.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ls(9, r, r.return);
                }
              var g = r.sibling;
              if (g !== null) {
                (g.return = r.return), (T = g);
                break e;
              }
              T = r.return;
            }
        }
        var v = t.current;
        for (T = v; T !== null; ) {
          o = T;
          var x = o.child;
          if (o.subtreeFlags & 2064 && x !== null) (x.return = o), (T = x);
          else
            e: for (o = v; T !== null; ) {
              if (((a = T), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      La(9, a);
                  }
                } catch (w) {
                  le(a, a.return, w);
                }
              if (a === o) {
                T = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                (b.return = a.return), (T = b);
                break e;
              }
              T = a.return;
            }
        }
        if (
          ((W = s), Pn(), Mt && typeof Mt.onPostCommitFiberRoot == "function")
        )
          try {
            Mt.onPostCommitFiberRoot(wa, t);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      (Q = n), (lt.transition = e);
    }
  }
  return !1;
}
function jh(t, e, n) {
  (e = Vi(n, e)),
    (e = Yg(t, e, 1)),
    (t = vn(t, e, 1)),
    (e = Re()),
    t !== null && (pr(t, 1, e), Ye(t, e));
}
function le(t, e, n) {
  if (t.tag === 3) jh(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        jh(e, t, n);
        break;
      } else if (e.tag === 1) {
        var i = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" &&
            (yn === null || !yn.has(i)))
        ) {
          (t = Vi(n, t)),
            (t = Xg(e, t, 1)),
            (e = vn(e, t, 1)),
            (t = Re()),
            e !== null && (pr(e, 1, t), Ye(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function sx(t, e, n) {
  var i = t.pingCache;
  i !== null && i.delete(e),
    (e = Re()),
    (t.pingedLanes |= t.suspendedLanes & n),
    be === t &&
      (ke & n) === n &&
      (me === 4 || (me === 3 && (ke & 130023424) === ke && 500 > de() - wu)
        ? Qn(t, 0)
        : (bu |= n)),
    Ye(t, e);
}
function fm(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = Pr), (Pr <<= 1), !(Pr & 130023424) && (Pr = 4194304))
      : (e = 1));
  var n = Re();
  (t = Yt(t, e)), t !== null && (pr(t, e, n), Ye(t, n));
}
function rx(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), fm(t, n);
}
function ox(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var i = t.stateNode,
        s = t.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      i = t.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  i !== null && i.delete(e), fm(t, n);
}
var pm;
pm = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || $e.current) We = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (We = !1), Xy(t, e, n);
      We = !!(t.flags & 131072);
    }
  else (We = !1), te && e.flags & 1048576 && vg(e, Ho, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var i = e.type;
      mo(t, e), (t = e.pendingProps);
      var s = zi(e, Oe.current);
      Ti(e, n), (s = gu(null, e, i, t, s, n));
      var r = mu();
      return (
        (e.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Ue(i) ? ((r = !0), Fo(e)) : (r = !1),
            (e.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            uu(e),
            (s.updater = Ma),
            (e.stateNode = s),
            (s._reactInternals = e),
            lc(e, i, t, n),
            (e = dc(null, e, i, !0, r, n)))
          : ((e.tag = 0), te && r && iu(e), Te(null, e, s, n), (e = e.child)),
        e
      );
    case 16:
      i = e.elementType;
      e: {
        switch (
          (mo(t, e),
          (t = e.pendingProps),
          (s = i._init),
          (i = s(i._payload)),
          (e.type = i),
          (s = e.tag = lx(i)),
          (t = gt(i, t)),
          s)
        ) {
          case 0:
            e = uc(null, e, i, t, n);
            break e;
          case 1:
            e = vh(null, e, i, t, n);
            break e;
          case 11:
            e = gh(null, e, i, t, n);
            break e;
          case 14:
            e = mh(null, e, i, gt(i.type, t), n);
            break e;
        }
        throw Error(j(306, i, ""));
      }
      return e;
    case 0:
      return (
        (i = e.type),
        (s = e.pendingProps),
        (s = e.elementType === i ? s : gt(i, s)),
        uc(t, e, i, s, n)
      );
    case 1:
      return (
        (i = e.type),
        (s = e.pendingProps),
        (s = e.elementType === i ? s : gt(i, s)),
        vh(t, e, i, s, n)
      );
    case 3:
      e: {
        if ((Gg(e), t === null)) throw Error(j(387));
        (i = e.pendingProps),
          (r = e.memoizedState),
          (s = r.element),
          bg(t, e),
          $o(e, i, null, n);
        var o = e.memoizedState;
        if (((i = o.element), r.isDehydrated))
          if (
            ((r = {
              element: i,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = r),
            (e.memoizedState = r),
            e.flags & 256)
          ) {
            (s = Vi(Error(j(423)), e)), (e = yh(t, e, i, n, s));
            break e;
          } else if (i !== s) {
            (s = Vi(Error(j(424)), e)), (e = yh(t, e, i, n, s));
            break e;
          } else
            for (
              Ge = mn(e.stateNode.containerInfo.firstChild),
                Ze = e,
                te = !0,
                yt = null,
                n = Cg(e, null, i, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Fi(), i === s)) {
            e = Xt(t, e, n);
            break e;
          }
          Te(t, e, i, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Eg(e),
        t === null && rc(e),
        (i = e.type),
        (s = e.pendingProps),
        (r = t !== null ? t.memoizedProps : null),
        (o = s.children),
        ec(i, s) ? (o = null) : r !== null && ec(i, r) && (e.flags |= 32),
        qg(t, e),
        Te(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && rc(e), null;
    case 13:
      return Zg(t, e, n);
    case 4:
      return (
        du(e, e.stateNode.containerInfo),
        (i = e.pendingProps),
        t === null ? (e.child = Bi(e, null, i, n)) : Te(t, e, i, n),
        e.child
      );
    case 11:
      return (
        (i = e.type),
        (s = e.pendingProps),
        (s = e.elementType === i ? s : gt(i, s)),
        gh(t, e, i, s, n)
      );
    case 7:
      return Te(t, e, e.pendingProps, n), e.child;
    case 8:
      return Te(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Te(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((i = e.type._context),
          (s = e.pendingProps),
          (r = e.memoizedProps),
          (o = s.value),
          G(Vo, i._currentValue),
          (i._currentValue = o),
          r !== null)
        )
          if (wt(r.value, o)) {
            if (r.children === s.children && !$e.current) {
              e = Xt(t, e, n);
              break e;
            }
          } else
            for (r = e.child, r !== null && (r.return = e); r !== null; ) {
              var a = r.dependencies;
              if (a !== null) {
                o = r.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === i) {
                    if (r.tag === 1) {
                      (l = Wt(-1, n & -n)), (l.tag = 2);
                      var c = r.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (r.lanes |= n),
                      (l = r.alternate),
                      l !== null && (l.lanes |= n),
                      oc(r.return, n, e),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (r.tag === 10) o = r.type === e.type ? null : r.child;
              else if (r.tag === 18) {
                if (((o = r.return), o === null)) throw Error(j(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  oc(o, n, e),
                  (o = r.sibling);
              } else o = r.child;
              if (o !== null) o.return = r;
              else
                for (o = r; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((r = o.sibling), r !== null)) {
                    (r.return = o.return), (o = r);
                    break;
                  }
                  o = o.return;
                }
              r = o;
            }
        Te(t, e, s.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (s = e.type),
        (i = e.pendingProps.children),
        Ti(e, n),
        (s = ut(s)),
        (i = i(s)),
        (e.flags |= 1),
        Te(t, e, i, n),
        e.child
      );
    case 14:
      return (
        (i = e.type),
        (s = gt(i, e.pendingProps)),
        (s = gt(i.type, s)),
        mh(t, e, i, s, n)
      );
    case 15:
      return Kg(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (i = e.type),
        (s = e.pendingProps),
        (s = e.elementType === i ? s : gt(i, s)),
        mo(t, e),
        (e.tag = 1),
        Ue(i) ? ((t = !0), Fo(e)) : (t = !1),
        Ti(e, n),
        kg(e, i, s),
        lc(e, i, s, n),
        dc(null, e, i, !0, t, n)
      );
    case 19:
      return Jg(t, e, n);
    case 22:
      return Qg(t, e, n);
  }
  throw Error(j(156, e.tag));
};
function gm(t, e) {
  return Hp(t, e);
}
function ax(t, e, n, i) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ot(t, e, n, i) {
  return new ax(t, e, n, i);
}
function Eu(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function lx(t) {
  if (typeof t == "function") return Eu(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Uc)) return 11;
    if (t === Yc) return 14;
  }
  return 2;
}
function _n(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = ot(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function xo(t, e, n, i, s, r) {
  var o = 2;
  if (((i = t), typeof t == "function")) Eu(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case vi:
        return qn(n.children, s, r, e);
      case $c:
        (o = 8), (s |= 8);
        break;
      case Dl:
        return (
          (t = ot(12, n, e, s | 2)), (t.elementType = Dl), (t.lanes = r), t
        );
      case Nl:
        return (t = ot(13, n, e, s)), (t.elementType = Nl), (t.lanes = r), t;
      case Tl:
        return (t = ot(19, n, e, s)), (t.elementType = Tl), (t.lanes = r), t;
      case Sp:
        return Da(n, s, r, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case wp:
              o = 10;
              break e;
            case kp:
              o = 9;
              break e;
            case Uc:
              o = 11;
              break e;
            case Yc:
              o = 14;
              break e;
            case Jt:
              (o = 16), (i = null);
              break e;
          }
        throw Error(j(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = ot(o, n, e, s)), (e.elementType = t), (e.type = i), (e.lanes = r), e
  );
}
function qn(t, e, n, i) {
  return (t = ot(7, t, i, e)), (t.lanes = n), t;
}
function Da(t, e, n, i) {
  return (
    (t = ot(22, t, i, e)),
    (t.elementType = Sp),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function vl(t, e, n) {
  return (t = ot(6, t, null, e)), (t.lanes = n), t;
}
function yl(t, e, n) {
  return (
    (e = ot(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function cx(t, e, n, i, s) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Za(0)),
    (this.expirationTimes = Za(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Za(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function ju(t, e, n, i, s, r, o, a, l) {
  return (
    (t = new cx(t, e, n, a, l)),
    e === 1 ? ((e = 1), r === !0 && (e |= 8)) : (e = 0),
    (r = ot(3, null, null, e)),
    (t.current = r),
    (r.stateNode = t),
    (r.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    uu(r),
    t
  );
}
function ux(t, e, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: mi,
    key: i == null ? null : "" + i,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function mm(t) {
  if (!t) return Sn;
  t = t._reactInternals;
  e: {
    if (ci(t) !== t || t.tag !== 1) throw Error(j(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (Ue(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(j(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (Ue(n)) return gg(t, n, e);
  }
  return e;
}
function vm(t, e, n, i, s, r, o, a, l) {
  return (
    (t = ju(n, i, !0, t, s, r, o, a, l)),
    (t.context = mm(null)),
    (n = t.current),
    (i = Re()),
    (s = xn(n)),
    (r = Wt(i, s)),
    (r.callback = e ?? null),
    vn(n, r, s),
    (t.current.lanes = s),
    pr(t, s, i),
    Ye(t, i),
    t
  );
}
function Na(t, e, n, i) {
  var s = e.current,
    r = Re(),
    o = xn(s);
  return (
    (n = mm(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = Wt(r, o)),
    (e.payload = { element: t }),
    (i = i === void 0 ? null : i),
    i !== null && (e.callback = i),
    (t = vn(s, e, o)),
    t !== null && (bt(t, s, o, r), fo(t, s, o)),
    o
  );
}
function Zo(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function Mh(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Mu(t, e) {
  Mh(t, e), (t = t.alternate) && Mh(t, e);
}
function dx() {
  return null;
}
var ym =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function Pu(t) {
  this._internalRoot = t;
}
Ta.prototype.render = Pu.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(j(409));
  Na(t, e, null, null);
};
Ta.prototype.unmount = Pu.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    si(function () {
      Na(null, t, null, null);
    }),
      (e[Ut] = null);
  }
};
function Ta(t) {
  this._internalRoot = t;
}
Ta.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Kp();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < rn.length && e !== 0 && e < rn[n].priority; n++);
    rn.splice(n, 0, t), n === 0 && qp(t);
  }
};
function Lu(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Aa(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ph() {}
function hx(t, e, n, i, s) {
  if (s) {
    if (typeof i == "function") {
      var r = i;
      i = function () {
        var c = Zo(o);
        r.call(c);
      };
    }
    var o = vm(e, i, t, 0, null, !1, !1, "", Ph);
    return (
      (t._reactRootContainer = o),
      (t[Ut] = o.current),
      Ks(t.nodeType === 8 ? t.parentNode : t),
      si(),
      o
    );
  }
  for (; (s = t.lastChild); ) t.removeChild(s);
  if (typeof i == "function") {
    var a = i;
    i = function () {
      var c = Zo(l);
      a.call(c);
    };
  }
  var l = ju(t, 0, !1, null, null, !1, !1, "", Ph);
  return (
    (t._reactRootContainer = l),
    (t[Ut] = l.current),
    Ks(t.nodeType === 8 ? t.parentNode : t),
    si(function () {
      Na(e, l, n, i);
    }),
    l
  );
}
function Ra(t, e, n, i, s) {
  var r = n._reactRootContainer;
  if (r) {
    var o = r;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var l = Zo(o);
        a.call(l);
      };
    }
    Na(e, o, t, s);
  } else o = hx(n, e, t, s, i);
  return Zo(o);
}
Yp = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = ms(e.pendingLanes);
        n !== 0 &&
          (Qc(e, n | 1), Ye(e, de()), !(W & 6) && ((Wi = de() + 500), Pn()));
      }
      break;
    case 13:
      si(function () {
        var i = Yt(t, 1);
        if (i !== null) {
          var s = Re();
          bt(i, t, 1, s);
        }
      }),
        Mu(t, 1);
  }
};
qc = function (t) {
  if (t.tag === 13) {
    var e = Yt(t, 134217728);
    if (e !== null) {
      var n = Re();
      bt(e, t, 134217728, n);
    }
    Mu(t, 134217728);
  }
};
Xp = function (t) {
  if (t.tag === 13) {
    var e = xn(t),
      n = Yt(t, e);
    if (n !== null) {
      var i = Re();
      bt(n, t, e, i);
    }
    Mu(t, e);
  }
};
Kp = function () {
  return Q;
};
Qp = function (t, e) {
  var n = Q;
  try {
    return (Q = t), e();
  } finally {
    Q = n;
  }
};
$l = function (t, e, n) {
  switch (e) {
    case "input":
      if ((Il(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var i = n[e];
          if (i !== t && i.form === t.form) {
            var s = Ea(i);
            if (!s) throw Error(j(90));
            Ep(i), Il(i, s);
          }
        }
      }
      break;
    case "textarea":
      Mp(t, n);
      break;
    case "select":
      (e = n.value), e != null && Li(t, !!n.multiple, e, !1);
  }
};
Ap = ku;
Rp = si;
var fx = { usingClientEntryPoint: !1, Events: [mr, bi, Ea, Np, Tp, ku] },
  os = {
    findFiberByHostInstance: Un,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  px = {
    bundleType: os.bundleType,
    version: os.version,
    rendererPackageName: os.rendererPackageName,
    rendererConfig: os.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = Fp(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: os.findFiberByHostInstance || dx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Br = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Br.isDisabled && Br.supportsFiber)
    try {
      (wa = Br.inject(px)), (Mt = Br);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fx;
tt.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lu(e)) throw Error(j(200));
  return ux(t, e, null, n);
};
tt.createRoot = function (t, e) {
  if (!Lu(t)) throw Error(j(299));
  var n = !1,
    i = "",
    s = ym;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (s = e.onRecoverableError)),
    (e = ju(t, 1, !1, null, null, n, !1, i, s)),
    (t[Ut] = e.current),
    Ks(t.nodeType === 8 ? t.parentNode : t),
    new Pu(e)
  );
};
tt.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(j(188))
      : ((t = Object.keys(t).join(",")), Error(j(268, t)));
  return (t = Fp(e)), (t = t === null ? null : t.stateNode), t;
};
tt.flushSync = function (t) {
  return si(t);
};
tt.hydrate = function (t, e, n) {
  if (!Aa(e)) throw Error(j(200));
  return Ra(null, t, e, !0, n);
};
tt.hydrateRoot = function (t, e, n) {
  if (!Lu(t)) throw Error(j(405));
  var i = (n != null && n.hydratedSources) || null,
    s = !1,
    r = "",
    o = ym;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = vm(e, null, t, 1, n ?? null, s, !1, r, o)),
    (t[Ut] = e.current),
    Ks(t),
    i)
  )
    for (t = 0; t < i.length; t++)
      (n = i[t]),
        (s = n._getVersion),
        (s = s(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, s])
          : e.mutableSourceEagerHydrationData.push(n, s);
  return new Ta(e);
};
tt.render = function (t, e, n) {
  if (!Aa(e)) throw Error(j(200));
  return Ra(null, t, e, !1, n);
};
tt.unmountComponentAtNode = function (t) {
  if (!Aa(t)) throw Error(j(40));
  return t._reactRootContainer
    ? (si(function () {
        Ra(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[Ut] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = ku;
tt.unstable_renderSubtreeIntoContainer = function (t, e, n, i) {
  if (!Aa(n)) throw Error(j(200));
  if (t == null || t._reactInternals === void 0) throw Error(j(38));
  return Ra(t, e, n, !1, i);
};
tt.version = "18.2.0-next-9e3b772b8-20220608";
function xm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xm);
    } catch (t) {
      console.error(t);
    }
}
xm(), (vp.exports = tt);
var gx = vp.exports,
  Lh = gx;
(Ll.createRoot = Lh.createRoot), (Ll.hydrateRoot = Lh.hydrateRoot);
const Ae = "https://hotel-hub-two.vercel.app";
function Jo(t) {
  if (t >= 11 && t <= 13) return "th";
  switch (t % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
function _m(t, e) {
  const n = [],
    i = new Date(t, e, 1);
  for (; i.getDay() !== 0; ) i.setDate(i.getDate() + 1);
  for (; i.getMonth() === e; ) {
    const s = new Date(i),
      r = new Date(i);
    r.setDate(i.getDate() + 6),
      n.push({
        sunday: `${new Date(t, s.getMonth(), 1)
          .toLocaleString("default", { month: "long" })
          .slice(0, 3)},${s.getDate()}${Jo(s.getDate())}`,
        saturday: `${new Date(t, r.getMonth(), 1)
          .toLocaleString("default", { month: "long" })
          .slice(0, 3)},${r.getDate()}${Jo(r.getDate())}`,
        epoch: s,
      }),
      i.setDate(i.getDate() + 7);
  }
  return n;
}
function bm(t) {
  let e = [],
    n = new Date(t);
  for (let i = 0; i < 7; i++)
    e.push(
      `${n.getFullYear()}-${new Date(
        n.getFullYear(),
        n.getMonth(),
        1
      ).toLocaleString("default", { month: "long" })}-${n.getDate()}`
    ),
      n.setDate(n.getDate() + 1);
  return e;
}
function wm({ date: t }) {
  let [e, n] = t,
    i = new Date(e[0], e[1]).getDay(),
    s = 32 - new Date(e[0], e[1], 32).getDate(),
    r = (a) => {
      a.preventDefault(), (e[2] = a.target.value), n([e[0], e[1], e[2]]);
    },
    o = (a, l) => {
      a.preventDefault(),
        (e[1] += l),
        e[1] == -1 && ((e[0] -= 1), (e[1] = 11)),
        e[1] == 12 && ((e[0] += 1), (e[1] = 0)),
        n([e[0], e[1], e[2]]);
    };
  return f.jsx(f.Fragment, {
    children: f.jsx("div", {
      class: "flex items-center justify-center py-8 w-full lg:w-2/3 mx-auto",
      children: f.jsx("div", {
        class: "w-full shadow-lg",
        children: f.jsxs("div", {
          class: "md:p-8 p-5 bg-gray-800 rounded-t",
          children: [
            f.jsxs("div", {
              class: "px-4 flex items-center justify-between",
              children: [
                f.jsxs("span", {
                  tabindex: "0",
                  class:
                    "focus:outline-none  text-base font-bold text-gray-100 ",
                  children: [
                    new Date(e[0], e[1], 1).toLocaleString("default", {
                      month: "long",
                    }),
                    " ",
                    e[0],
                  ],
                }),
                f.jsxs("div", {
                  class: "flex items-center",
                  children: [
                    f.jsx("button", {
                      onClick: (a) => o(a, -1),
                      "aria-label": "calendar backward",
                      class:
                        "focus:text-gray-400 hover:text-gray-400  text-gray-100",
                      children: f.jsxs("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "icon icon-tabler icon-tabler-chevron-left",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor",
                        fill: "none",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [
                          f.jsx("path", {
                            stroke: "none",
                            d: "M0 0h24v24H0z",
                            fill: "none",
                          }),
                          f.jsx("polyline", { points: "15 6 9 12 15 18" }),
                        ],
                      }),
                    }),
                    f.jsx("button", {
                      onClick: (a) => o(a, 1),
                      "aria-label": "calendar forward",
                      class:
                        "focus:text-gray-400 hover:text-gray-400 ml-3  text-gray-100",
                      children: f.jsxs("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "icon icon-tabler  icon-tabler-chevron-right",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor",
                        fill: "none",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [
                          f.jsx("path", {
                            stroke: "none",
                            d: "M0 0h24v24H0z",
                            fill: "none",
                          }),
                          f.jsx("polyline", { points: "9 6 15 12 9 18" }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            f.jsx("div", {
              class: "flex items-center justify-between pt-12 overflow-x-auto",
              children: f.jsxs("table", {
                class: "w-full",
                children: [
                  f.jsx("thead", {
                    children: f.jsx("tr", {
                      children: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                        (a, l) =>
                          f.jsx("th", {
                            children: f.jsx("div", {
                              class: "w-full flex justify-center",
                              children: f.jsx("p", {
                                class:
                                  "text-base font-medium text-center text-gray-100",
                                children: a,
                              }),
                            }),
                          })
                      ),
                    }),
                  }),
                  f.jsx("tbody", {
                    children: [...Array(Math.ceil((i + s) / 7))].map((a, l) =>
                      f.jsx(
                        "tr",
                        {
                          children: [...Array(7)].map((c, u) => {
                            let d = l * 7 + u - i + 1;
                            return f.jsx(
                              "td",
                              {
                                children: f.jsx("div", {
                                  class: "w-full flex justify-center",
                                  children: f.jsx("button", {
                                    onClick: (h) => r(h),
                                    value: d,
                                    class: `focus:outline-none rounded-full w-8 h-8 flex items-center justify-center ${
                                      d == e[2]
                                        ? "bg-blue-800 text-white"
                                        : "text-gray-100"
                                    }`,
                                    children: d > 0 && d <= s ? d : "",
                                  }),
                                }),
                              },
                              u
                            );
                          }),
                        },
                        l
                      )
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  });
}
const Ce = L.createContext();
function mx({ children: t }) {
  let e = L.useState(null),
    n = L.useState({
      start: 0,
      end: 0,
      depth: [],
      epoch: _m(new Date().getFullYear(), new Date().getMonth())[0].epoch,
      descending: !0,
      sort: 0,
      inventory: !1,
    }),
    i = L.useState([]);
  return f.jsx(Ce.Provider, {
    value: { User: e, Filters: n, HotelData: i },
    children: t,
  });
}
function vx() {
  let { User: t } = L.useContext(Ce),
    [e, n] = t,
    [i, s] = L.useState(!1),
    [r, o] = L.useState(""),
    [a, l] = L.useState(""),
    [c, u] = L.useState(""),
    [d, h] = L.useState(1),
    [p, m] = L.useState(""),
    [y, _] = L.useState(""),
    g = (x) => {
      x.preventDefault(),
        fetch(`${Ae}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: r, password: p }),
        })
          .then((b) => b.json())
          .then((b) => {
            console.log(b),
              b.status === "success"
                ? (console.log("login"),
                  localStorage.setItem(
                    "user",
                    JSON.stringify({
                      username: b.response.username,
                      role: b.response.role,
                      email: b.response.email,
                    })
                  ),
                  n({
                    username: b.response.username,
                    role: b.response.role,
                    email: b.response.email,
                  }))
                : b.status === "error" && alert(b.response);
          })
          .catch((b) => alert("server error"));
    },
    v = (x) => {
      x.preventDefault(),
        console.log("signup"),
        fetch(`${Ae}/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: r,
            password: p,
            name: a,
            email: c,
            role: d,
            phone: y,
          }),
        })
          .then((b) => b.json())
          .then((b) => {
            console.log(b),
              b.status === "success" && s(!1),
              b.status === "failed" && alert(b.message);
          })
          .catch((b) => alert("server error"));
    };
  return f.jsxs("div", {
    className:
      "flex h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 bg-gray-800 text-gray-100",
    children: [
      f.jsxs("div", {
        className: "flex items-center justify-center",
        children: [
          f.jsx("img", {
            className: "mx-auto h-24 w-auto",
            src: "/logo.svg",
            alt: "Your Company",
          }),
          f.jsx("span", {
            className:
              "text-blue-500 font-bold text-4xl inline-block align-bottom ml-4",
            children: "IntelGPT",
          }),
        ],
      }),
      f.jsxs("div", {
        className: "mt-10 sm:mx-auto w-full max-w-sm",
        children: [
          f.jsxs("form", {
            className: "space-y-6",
            children: [
              f.jsxs("div", {
                children: [
                  f.jsx("label", {
                    htmlFor: "username",
                    className: "block text-sm font-medium leading-6",
                    children: "Username",
                  }),
                  f.jsx("div", {
                    className: "mt-2",
                    children: f.jsx("input", {
                      id: "username",
                      name: "username",
                      type: "username",
                      autoComplete: "username",
                      value: r,
                      onChange: (x) => o(x.target.value),
                      className:
                        "pl-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-geen-600 sm:text-sm sm:leading-6 text-black",
                    }),
                  }),
                ],
              }),
              i &&
                f.jsxs(f.Fragment, {
                  children: [
                    f.jsxs("div", {
                      children: [
                        f.jsx("label", {
                          htmlFor: "name",
                          className: "block text-sm font-medium leading-6",
                          children: "Full name",
                        }),
                        f.jsx("div", {
                          className: "mt-2",
                          children: f.jsx("input", {
                            id: "name",
                            name: "name",
                            type: "text",
                            autoComplete: "name",
                            placeholder: "jane doe",
                            value: a,
                            onChange: (x) => l(x.target.value),
                            className:
                              "pl-2 text-black block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-0 sm:text-sm sm:leading-6",
                          }),
                        }),
                      ],
                    }),
                    f.jsxs("div", {
                      children: [
                        f.jsx("label", {
                          htmlFor: "email",
                          className: "block text-sm font-medium leading-6",
                          children: "Email address",
                        }),
                        f.jsx("div", {
                          className: "mt-2",
                          children: f.jsx("input", {
                            id: "email",
                            name: "email",
                            type: "email",
                            autoComplete: "mail",
                            placeholder: "jane@example.com",
                            value: c,
                            onChange: (x) => u(x.target.value),
                            className:
                              "pl-2 text-black block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-0 sm:text-sm sm:leading-6",
                          }),
                        }),
                      ],
                    }),
                    f.jsxs("div", {
                      children: [
                        f.jsx("label", {
                          htmlFor: "phone",
                          className: "block text-sm font-medium leading-6",
                          children: "Phone number",
                        }),
                        f.jsx("div", {
                          className: "mt-2",
                          children: f.jsx("input", {
                            id: "phone",
                            name: "phone",
                            placeholder: "0712345678",
                            type: "tel",
                            value: y,
                            onChange: (x) => _(x.target.value),
                            className:
                              "pl-2 text-black block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-0 sm:text-sm sm:leading-6",
                          }),
                        }),
                      ],
                    }),
                    f.jsxs("div", {
                      children: [
                        f.jsx("label", {
                          htmlFor: "key",
                          className: "block text-sm font-medium leading-6",
                          children: "Role",
                        }),
                        f.jsxs("select", {
                          className:
                            "pl-2 text-black block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-0 sm:text-sm sm:leading-6",
                          value: d,
                          onChange: (x) => {
                            h(x.target.value);
                          },
                          children: [
                            f.jsx("option", {
                              value: 1,
                              children: "Sales executive",
                            }),
                            f.jsx("option", { value: 3, children: "Clerk" }),
                            f.jsx("option", {
                              value: 2,
                              children: "Accountant",
                            }),
                            f.jsx("option", {
                              value: 4,
                              children: "Supervisor",
                            }),
                            f.jsx("option", { value: 5, children: "Manager" }),
                            f.jsx("option", { value: 6, children: "Admin" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              f.jsxs("div", {
                children: [
                  f.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      f.jsx("label", {
                        htmlFor: "password",
                        className: "block text-sm font-medium leading-6",
                        children: "Password",
                      }),
                      f.jsx("div", {
                        className: "text-sm",
                        children:
                          !i &&
                          f.jsx("a", {
                            href: "#",
                            className:
                              "font-semibold text-blue-600 hover:text-blue-600",
                            children: "Forgot password? ",
                          }),
                      }),
                    ],
                  }),
                  f.jsx("div", {
                    className: "mt-2",
                    children: f.jsx("input", {
                      id: "password",
                      name: "password",
                      type: "password",
                      autoComplete: "current-password",
                      required: !0,
                      value: p,
                      onChange: (x) => m(x.target.value),
                      className:
                        "pl-2 text-black block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                    }),
                  }),
                ],
              }),
              f.jsx("div", {
                children: f.jsx("button", {
                  onClick: (x) => (i ? v(x) : g(x)),
                  className:
                    "flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                  children: i ? "Sign up" : "Sign in",
                }),
              }),
            ],
          }),
          f.jsxs("p", {
            className: "mt-10 text-center text-sm text-gray-500",
            children: [
              i ? "Already have an account?" : "Don't have an account?",
              f.jsx("a", {
                onClick: (x) => s(!i),
                className:
                  "font-semibold leading-6 text-blue-600 hover:text-blue-500",
                children: i ? " Sign in" : " Sign up",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var yx = (function () {
    function t(e, n) {
      n === void 0 && (n = []),
        (this._eventType = e),
        (this._eventFunctions = n);
    }
    return (
      (t.prototype.init = function () {
        var e = this;
        this._eventFunctions.forEach(function (n) {
          typeof window < "u" && window.addEventListener(e._eventType, n);
        });
      }),
      t
    );
  })(),
  ea =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (ea =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++) {
              e = arguments[n];
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            }
            return t;
          }),
        ea.apply(this, arguments)
      );
    },
  ta = {
    alwaysOpen: !1,
    activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
    inactiveClasses: "text-gray-500 dark:text-gray-400",
    onOpen: function () {},
    onClose: function () {},
    onToggle: function () {},
  },
  km = (function () {
    function t(e, n) {
      e === void 0 && (e = []),
        n === void 0 && (n = ta),
        (this._items = e),
        (this._options = ea(ea({}, ta), n)),
        this._init();
    }
    return (
      (t.prototype._init = function () {
        var e = this;
        this._items.length &&
          this._items.map(function (n) {
            n.active && e.open(n.id),
              n.triggerEl.addEventListener("click", function () {
                e.toggle(n.id);
              });
          });
      }),
      (t.prototype.getItem = function (e) {
        return this._items.filter(function (n) {
          return n.id === e;
        })[0];
      }),
      (t.prototype.open = function (e) {
        var n,
          i,
          s = this,
          r = this.getItem(e);
        this._options.alwaysOpen ||
          this._items.map(function (o) {
            var a, l;
            o !== r &&
              ((a = o.triggerEl.classList).remove.apply(
                a,
                s._options.activeClasses.split(" ")
              ),
              (l = o.triggerEl.classList).add.apply(
                l,
                s._options.inactiveClasses.split(" ")
              ),
              o.targetEl.classList.add("hidden"),
              o.triggerEl.setAttribute("aria-expanded", "false"),
              (o.active = !1),
              o.iconEl && o.iconEl.classList.remove("rotate-180"));
          }),
          (n = r.triggerEl.classList).add.apply(
            n,
            this._options.activeClasses.split(" ")
          ),
          (i = r.triggerEl.classList).remove.apply(
            i,
            this._options.inactiveClasses.split(" ")
          ),
          r.triggerEl.setAttribute("aria-expanded", "true"),
          r.targetEl.classList.remove("hidden"),
          (r.active = !0),
          r.iconEl && r.iconEl.classList.add("rotate-180"),
          this._options.onOpen(this, r);
      }),
      (t.prototype.toggle = function (e) {
        var n = this.getItem(e);
        n.active ? this.close(e) : this.open(e),
          this._options.onToggle(this, n);
      }),
      (t.prototype.close = function (e) {
        var n,
          i,
          s = this.getItem(e);
        (n = s.triggerEl.classList).remove.apply(
          n,
          this._options.activeClasses.split(" ")
        ),
          (i = s.triggerEl.classList).add.apply(
            i,
            this._options.inactiveClasses.split(" ")
          ),
          s.targetEl.classList.add("hidden"),
          s.triggerEl.setAttribute("aria-expanded", "false"),
          (s.active = !1),
          s.iconEl && s.iconEl.classList.remove("rotate-180"),
          this._options.onClose(this, s);
      }),
      t
    );
  })();
function Ou() {
  document.querySelectorAll("[data-accordion]").forEach(function (t) {
    var e = t.getAttribute("data-accordion"),
      n = t.getAttribute("data-active-classes"),
      i = t.getAttribute("data-inactive-classes"),
      s = [];
    t.querySelectorAll("[data-accordion-target]").forEach(function (r) {
      if (r.closest("[data-accordion]") === t) {
        var o = {
          id: r.getAttribute("data-accordion-target"),
          triggerEl: r,
          targetEl: document.querySelector(
            r.getAttribute("data-accordion-target")
          ),
          iconEl: r.querySelector("[data-accordion-icon]"),
          active: r.getAttribute("aria-expanded") === "true",
        };
        s.push(o);
      }
    }),
      new km(s, {
        alwaysOpen: e === "open",
        activeClasses: n || ta.activeClasses,
        inactiveClasses: i || ta.inactiveClasses,
      });
  });
}
typeof window < "u" && ((window.Accordion = km), (window.initAccordions = Ou));
var na =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (na =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++) {
              e = arguments[n];
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            }
            return t;
          }),
        na.apply(this, arguments)
      );
    },
  Oh = {
    onCollapse: function () {},
    onExpand: function () {},
    onToggle: function () {},
  },
  Sm = (function () {
    function t(e, n, i) {
      e === void 0 && (e = null),
        n === void 0 && (n = null),
        i === void 0 && (i = Oh),
        (this._targetEl = e),
        (this._triggerEl = n),
        (this._options = na(na({}, Oh), i)),
        (this._visible = !1),
        this._init();
    }
    return (
      (t.prototype._init = function () {
        var e = this;
        this._triggerEl &&
          (this._triggerEl.hasAttribute("aria-expanded")
            ? (this._visible =
                this._triggerEl.getAttribute("aria-expanded") === "true")
            : (this._visible = !this._targetEl.classList.contains("hidden")),
          this._triggerEl.addEventListener("click", function () {
            e.toggle();
          }));
      }),
      (t.prototype.collapse = function () {
        this._targetEl.classList.add("hidden"),
          this._triggerEl &&
            this._triggerEl.setAttribute("aria-expanded", "false"),
          (this._visible = !1),
          this._options.onCollapse(this);
      }),
      (t.prototype.expand = function () {
        this._targetEl.classList.remove("hidden"),
          this._triggerEl &&
            this._triggerEl.setAttribute("aria-expanded", "true"),
          (this._visible = !0),
          this._options.onExpand(this);
      }),
      (t.prototype.toggle = function () {
        this._visible ? this.collapse() : this.expand(),
          this._options.onToggle(this);
      }),
      t
    );
  })();
function Du() {
  document.querySelectorAll("[data-collapse-toggle]").forEach(function (t) {
    var e = t.getAttribute("data-collapse-toggle"),
      n = document.getElementById(e);
    n
      ? new Sm(n, t)
      : console.error(
          'The target element with id "'.concat(
            e,
            '" does not exist. Please check the data-collapse-toggle attribute.'
          )
        );
  });
}
typeof window < "u" && ((window.Collapse = Sm), (window.initCollapses = Du));
var Vn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Vn =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++) {
              e = arguments[n];
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            }
            return t;
          }),
        Vn.apply(this, arguments)
      );
    },
  _o = {
    defaultPosition: 0,
    indicators: {
      items: [],
      activeClasses: "bg-white dark:bg-gray-800",
      inactiveClasses:
        "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
    },
    interval: 3e3,
    onNext: function () {},
    onPrev: function () {},
    onChange: function () {},
  },
  Cm = (function () {
    function t(e, n) {
      e === void 0 && (e = []),
        n === void 0 && (n = _o),
        (this._items = e),
        (this._options = Vn(Vn(Vn({}, _o), n), {
          indicators: Vn(Vn({}, _o.indicators), n.indicators),
        })),
        (this._activeItem = this.getItem(this._options.defaultPosition)),
        (this._indicators = this._options.indicators.items),
        (this._intervalDuration = this._options.interval),
        (this._intervalInstance = null),
        this._init();
    }
    return (
      (t.prototype._init = function () {
        var e = this;
        this._items.map(function (n) {
          n.el.classList.add(
            "absolute",
            "inset-0",
            "transition-transform",
            "transform"
          );
        }),
          this._getActiveItem()
            ? this.slideTo(this._getActiveItem().position)
            : this.slideTo(0),
          this._indicators.map(function (n, i) {
            n.el.addEventListener("click", function () {
              e.slideTo(i);
            });
          });
      }),
      (t.prototype.getItem = function (e) {
        return this._items[e];
      }),
      (t.prototype.slideTo = function (e) {
        var n = this._items[e],
          i = {
            left:
              n.position === 0
                ? this._items[this._items.length - 1]
                : this._items[n.position - 1],
            middle: n,
            right:
              n.position === this._items.length - 1
                ? this._items[0]
                : this._items[n.position + 1],
          };
        this._rotate(i),
          this._setActiveItem(n),
          this._intervalInstance && (this.pause(), this.cycle()),
          this._options.onChange(this);
      }),
      (t.prototype.next = function () {
        var e = this._getActiveItem(),
          n = null;
        e.position === this._items.length - 1
          ? (n = this._items[0])
          : (n = this._items[e.position + 1]),
          this.slideTo(n.position),
          this._options.onNext(this);
      }),
      (t.prototype.prev = function () {
        var e = this._getActiveItem(),
          n = null;
        e.position === 0
          ? (n = this._items[this._items.length - 1])
          : (n = this._items[e.position - 1]),
          this.slideTo(n.position),
          this._options.onPrev(this);
      }),
      (t.prototype._rotate = function (e) {
        this._items.map(function (n) {
          n.el.classList.add("hidden");
        }),
          e.left.el.classList.remove(
            "-translate-x-full",
            "translate-x-full",
            "translate-x-0",
            "hidden",
            "z-20"
          ),
          e.left.el.classList.add("-translate-x-full", "z-10"),
          e.middle.el.classList.remove(
            "-translate-x-full",
            "translate-x-full",
            "translate-x-0",
            "hidden",
            "z-10"
          ),
          e.middle.el.classList.add("translate-x-0", "z-20"),
          e.right.el.classList.remove(
            "-translate-x-full",
            "translate-x-full",
            "translate-x-0",
            "hidden",
            "z-20"
          ),
          e.right.el.classList.add("translate-x-full", "z-10");
      }),
      (t.prototype.cycle = function () {
        var e = this;
        typeof window < "u" &&
          (this._intervalInstance = window.setInterval(function () {
            e.next();
          }, this._intervalDuration));
      }),
      (t.prototype.pause = function () {
        clearInterval(this._intervalInstance);
      }),
      (t.prototype._getActiveItem = function () {
        return this._activeItem;
      }),
      (t.prototype._setActiveItem = function (e) {
        var n,
          i,
          s = this;
        this._activeItem = e;
        var r = e.position;
        this._indicators.length &&
          (this._indicators.map(function (o) {
            var a, l;
            o.el.setAttribute("aria-current", "false"),
              (a = o.el.classList).remove.apply(
                a,
                s._options.indicators.activeClasses.split(" ")
              ),
              (l = o.el.classList).add.apply(
                l,
                s._options.indicators.inactiveClasses.split(" ")
              );
          }),
          (n = this._indicators[r].el.classList).add.apply(
            n,
            this._options.indicators.activeClasses.split(" ")
          ),
          (i = this._indicators[r].el.classList).remove.apply(
            i,
            this._options.indicators.inactiveClasses.split(" ")
          ),
          this._indicators[r].el.setAttribute("aria-current", "true"));
      }),
      t
    );
  })();
function Nu() {
  document.querySelectorAll("[data-carousel]").forEach(function (t) {
    var e = t.getAttribute("data-carousel-interval"),
      n = t.getAttribute("data-carousel") === "slide",
      i = [],
      s = 0;
    t.querySelectorAll("[data-carousel-item]").length &&
      Array.from(t.querySelectorAll("[data-carousel-item]")).map(function (
        c,
        u
      ) {
        i.push({ position: u, el: c }),
          c.getAttribute("data-carousel-item") === "active" && (s = u);
      });
    var r = [];
    t.querySelectorAll("[data-carousel-slide-to]").length &&
      Array.from(t.querySelectorAll("[data-carousel-slide-to]")).map(function (
        c
      ) {
        r.push({
          position: parseInt(c.getAttribute("data-carousel-slide-to")),
          el: c,
        });
      });
    var o = new Cm(i, {
      defaultPosition: s,
      indicators: { items: r },
      interval: e || _o.interval,
    });
    n && o.cycle();
    var a = t.querySelector("[data-carousel-next]"),
      l = t.querySelector("[data-carousel-prev]");
    a &&
      a.addEventListener("click", function () {
        o.next();
      }),
      l &&
        l.addEventListener("click", function () {
          o.prev();
        });
  });
}
typeof window < "u" && ((window.Carousel = Cm), (window.initCarousels = Nu));
var ia =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (ia =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++) {
              e = arguments[n];
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            }
            return t;
          }),
        ia.apply(this, arguments)
      );
    },
  Dh = {
    transition: "transition-opacity",
    duration: 300,
    timing: "ease-out",
    onHide: function () {},
  },
  Em = (function () {
    function t(e, n, i) {
      e === void 0 && (e = null),
        n === void 0 && (n = null),
        i === void 0 && (i = Dh),
        (this._targetEl = e),
        (this._triggerEl = n),
        (this._options = ia(ia({}, Dh), i)),
        this._init();
    }
    return (
      (t.prototype._init = function () {
        var e = this;
        this._triggerEl &&
          this._triggerEl.addEventListener("click", function () {
            e.hide();
          });
      }),
      (t.prototype.hide = function () {
        var e = this;
        this._targetEl.classList.add(
          this._options.transition,
          "duration-".concat(this._options.duration),
          this._options.timing,
          "opacity-0"
        ),
          setTimeout(function () {
            e._targetEl.classList.add("hidden");
          }, this._options.duration),
          this._options.onHide(this, this._targetEl);
      }),
      t
    );
  })();
function Tu() {
  document.querySelectorAll("[data-dismiss-target]").forEach(function (t) {
    var e = t.getAttribute("data-dismiss-target"),
      n = document.querySelector(e);
    n
      ? new Em(n, t)
      : console.error(
          'The dismiss element with id "'.concat(
            e,
            '" does not exist. Please check the data-dismiss-target attribute.'
          )
        );
  });
}
typeof window < "u" && ((window.Dismiss = Em), (window.initDismisses = Tu));
var Xe = "top",
  ht = "bottom",
  ft = "right",
  Ke = "left",
  Au = "auto",
  yr = [Xe, ht, ft, Ke],
  $i = "start",
  ir = "end",
  xx = "clippingParents",
  jm = "viewport",
  as = "popper",
  _x = "reference",
  Nh = yr.reduce(function (t, e) {
    return t.concat([e + "-" + $i, e + "-" + ir]);
  }, []),
  Mm = [].concat(yr, [Au]).reduce(function (t, e) {
    return t.concat([e, e + "-" + $i, e + "-" + ir]);
  }, []),
  bx = "beforeRead",
  wx = "read",
  kx = "afterRead",
  Sx = "beforeMain",
  Cx = "main",
  Ex = "afterMain",
  jx = "beforeWrite",
  Mx = "write",
  Px = "afterWrite",
  Lx = [bx, wx, kx, Sx, Cx, Ex, jx, Mx, Px];
function Dt(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function et(t) {
  if (t == null) return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return (e && e.defaultView) || window;
  }
  return t;
}
function ri(t) {
  var e = et(t).Element;
  return t instanceof e || t instanceof Element;
}
function ct(t) {
  var e = et(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Ru(t) {
  if (typeof ShadowRoot > "u") return !1;
  var e = et(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Ox(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function (n) {
    var i = e.styles[n] || {},
      s = e.attributes[n] || {},
      r = e.elements[n];
    !ct(r) ||
      !Dt(r) ||
      (Object.assign(r.style, i),
      Object.keys(s).forEach(function (o) {
        var a = s[o];
        a === !1 ? r.removeAttribute(o) : r.setAttribute(o, a === !0 ? "" : a);
      }));
  });
}
function Dx(t) {
  var e = t.state,
    n = {
      popper: {
        position: e.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(e.elements.popper.style, n.popper),
    (e.styles = n),
    e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
    function () {
      Object.keys(e.elements).forEach(function (i) {
        var s = e.elements[i],
          r = e.attributes[i] || {},
          o = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : n[i]),
          a = o.reduce(function (l, c) {
            return (l[c] = ""), l;
          }, {});
        !ct(s) ||
          !Dt(s) ||
          (Object.assign(s.style, a),
          Object.keys(r).forEach(function (l) {
            s.removeAttribute(l);
          }));
      });
    }
  );
}
const Nx = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ox,
  effect: Dx,
  requires: ["computeStyles"],
};
function Lt(t) {
  return t.split("-")[0];
}
var Gn = Math.max,
  sa = Math.min,
  Ui = Math.round;
function kc() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands)
    ? t.brands
        .map(function (e) {
          return e.brand + "/" + e.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Pm() {
  return !/^((?!chrome|android).)*safari/i.test(kc());
}
function Yi(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var i = t.getBoundingClientRect(),
    s = 1,
    r = 1;
  e &&
    ct(t) &&
    ((s = (t.offsetWidth > 0 && Ui(i.width) / t.offsetWidth) || 1),
    (r = (t.offsetHeight > 0 && Ui(i.height) / t.offsetHeight) || 1));
  var o = ri(t) ? et(t) : window,
    a = o.visualViewport,
    l = !Pm() && n,
    c = (i.left + (l && a ? a.offsetLeft : 0)) / s,
    u = (i.top + (l && a ? a.offsetTop : 0)) / r,
    d = i.width / s,
    h = i.height / r;
  return {
    width: d,
    height: h,
    top: u,
    right: c + d,
    bottom: u + h,
    left: c,
    x: c,
    y: u,
  };
}
function Iu(t) {
  var e = Yi(t),
    n = t.offsetWidth,
    i = t.offsetHeight;
  return (
    Math.abs(e.width - n) <= 1 && (n = e.width),
    Math.abs(e.height - i) <= 1 && (i = e.height),
    { x: t.offsetLeft, y: t.offsetTop, width: n, height: i }
  );
}
function Lm(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e)) return !0;
  if (n && Ru(n)) {
    var i = e;
    do {
      if (i && t.isSameNode(i)) return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function Kt(t) {
  return et(t).getComputedStyle(t);
}
function Tx(t) {
  return ["table", "td", "th"].indexOf(Dt(t)) >= 0;
}
function Ln(t) {
  return ((ri(t) ? t.ownerDocument : t.document) || window.document)
    .documentElement;
}
function Ia(t) {
  return Dt(t) === "html"
    ? t
    : t.assignedSlot || t.parentNode || (Ru(t) ? t.host : null) || Ln(t);
}
function Th(t) {
  return !ct(t) || Kt(t).position === "fixed" ? null : t.offsetParent;
}
function Ax(t) {
  var e = /firefox/i.test(kc()),
    n = /Trident/i.test(kc());
  if (n && ct(t)) {
    var i = Kt(t);
    if (i.position === "fixed") return null;
  }
  var s = Ia(t);
  for (Ru(s) && (s = s.host); ct(s) && ["html", "body"].indexOf(Dt(s)) < 0; ) {
    var r = Kt(s);
    if (
      r.transform !== "none" ||
      r.perspective !== "none" ||
      r.contain === "paint" ||
      ["transform", "perspective"].indexOf(r.willChange) !== -1 ||
      (e && r.willChange === "filter") ||
      (e && r.filter && r.filter !== "none")
    )
      return s;
    s = s.parentNode;
  }
  return null;
}
function xr(t) {
  for (var e = et(t), n = Th(t); n && Tx(n) && Kt(n).position === "static"; )
    n = Th(n);
  return n &&
    (Dt(n) === "html" || (Dt(n) === "body" && Kt(n).position === "static"))
    ? e
    : n || Ax(t) || e;
}
function zu(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Ns(t, e, n) {
  return Gn(t, sa(e, n));
}
function Rx(t, e, n) {
  var i = Ns(t, e, n);
  return i > n ? n : i;
}
function Om() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Dm(t) {
  return Object.assign({}, Om(), t);
}
function Nm(t, e) {
  return e.reduce(function (n, i) {
    return (n[i] = t), n;
  }, {});
}
var Ix = function (e, n) {
  return (
    (e =
      typeof e == "function"
        ? e(Object.assign({}, n.rects, { placement: n.placement }))
        : e),
    Dm(typeof e != "number" ? e : Nm(e, yr))
  );
};
function zx(t) {
  var e,
    n = t.state,
    i = t.name,
    s = t.options,
    r = n.elements.arrow,
    o = n.modifiersData.popperOffsets,
    a = Lt(n.placement),
    l = zu(a),
    c = [Ke, ft].indexOf(a) >= 0,
    u = c ? "height" : "width";
  if (!(!r || !o)) {
    var d = Ix(s.padding, n),
      h = Iu(r),
      p = l === "y" ? Xe : Ke,
      m = l === "y" ? ht : ft,
      y =
        n.rects.reference[u] + n.rects.reference[l] - o[l] - n.rects.popper[u],
      _ = o[l] - n.rects.reference[l],
      g = xr(r),
      v = g ? (l === "y" ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
      x = y / 2 - _ / 2,
      b = d[p],
      w = v - h[u] - d[m],
      k = v / 2 - h[u] / 2 + x,
      S = Ns(b, k, w),
      C = l;
    n.modifiersData[i] = ((e = {}), (e[C] = S), (e.centerOffset = S - k), e);
  }
}
function Fx(t) {
  var e = t.state,
    n = t.options,
    i = n.element,
    s = i === void 0 ? "[data-popper-arrow]" : i;
  s != null &&
    ((typeof s == "string" && ((s = e.elements.popper.querySelector(s)), !s)) ||
      (Lm(e.elements.popper, s) && (e.elements.arrow = s)));
}
const Bx = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: zx,
  effect: Fx,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Xi(t) {
  return t.split("-")[1];
}
var Hx = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Vx(t, e) {
  var n = t.x,
    i = t.y,
    s = e.devicePixelRatio || 1;
  return { x: Ui(n * s) / s || 0, y: Ui(i * s) / s || 0 };
}
function Ah(t) {
  var e,
    n = t.popper,
    i = t.popperRect,
    s = t.placement,
    r = t.variation,
    o = t.offsets,
    a = t.position,
    l = t.gpuAcceleration,
    c = t.adaptive,
    u = t.roundOffsets,
    d = t.isFixed,
    h = o.x,
    p = h === void 0 ? 0 : h,
    m = o.y,
    y = m === void 0 ? 0 : m,
    _ = typeof u == "function" ? u({ x: p, y }) : { x: p, y };
  (p = _.x), (y = _.y);
  var g = o.hasOwnProperty("x"),
    v = o.hasOwnProperty("y"),
    x = Ke,
    b = Xe,
    w = window;
  if (c) {
    var k = xr(n),
      S = "clientHeight",
      C = "clientWidth";
    if (
      (k === et(n) &&
        ((k = Ln(n)),
        Kt(k).position !== "static" &&
          a === "absolute" &&
          ((S = "scrollHeight"), (C = "scrollWidth"))),
      (k = k),
      s === Xe || ((s === Ke || s === ft) && r === ir))
    ) {
      b = ht;
      var M = d && k === w && w.visualViewport ? w.visualViewport.height : k[S];
      (y -= M - i.height), (y *= l ? 1 : -1);
    }
    if (s === Ke || ((s === Xe || s === ht) && r === ir)) {
      x = ft;
      var E = d && k === w && w.visualViewport ? w.visualViewport.width : k[C];
      (p -= E - i.width), (p *= l ? 1 : -1);
    }
  }
  var D = Object.assign({ position: a }, c && Hx),
    A = u === !0 ? Vx({ x: p, y }, et(n)) : { x: p, y };
  if (((p = A.x), (y = A.y), l)) {
    var z;
    return Object.assign(
      {},
      D,
      ((z = {}),
      (z[b] = v ? "0" : ""),
      (z[x] = g ? "0" : ""),
      (z.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + y + "px)"
          : "translate3d(" + p + "px, " + y + "px, 0)"),
      z)
    );
  }
  return Object.assign(
    {},
    D,
    ((e = {}),
    (e[b] = v ? y + "px" : ""),
    (e[x] = g ? p + "px" : ""),
    (e.transform = ""),
    e)
  );
}
function Wx(t) {
  var e = t.state,
    n = t.options,
    i = n.gpuAcceleration,
    s = i === void 0 ? !0 : i,
    r = n.adaptive,
    o = r === void 0 ? !0 : r,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    c = {
      placement: Lt(e.placement),
      variation: Xi(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: s,
      isFixed: e.options.strategy === "fixed",
    };
  e.modifiersData.popperOffsets != null &&
    (e.styles.popper = Object.assign(
      {},
      e.styles.popper,
      Ah(
        Object.assign({}, c, {
          offsets: e.modifiersData.popperOffsets,
          position: e.options.strategy,
          adaptive: o,
          roundOffsets: l,
        })
      )
    )),
    e.modifiersData.arrow != null &&
      (e.styles.arrow = Object.assign(
        {},
        e.styles.arrow,
        Ah(
          Object.assign({}, c, {
            offsets: e.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-placement": e.placement,
    }));
}
const $x = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Wx,
  data: {},
};
var Hr = { passive: !0 };
function Ux(t) {
  var e = t.state,
    n = t.instance,
    i = t.options,
    s = i.scroll,
    r = s === void 0 ? !0 : s,
    o = i.resize,
    a = o === void 0 ? !0 : o,
    l = et(e.elements.popper),
    c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return (
    r &&
      c.forEach(function (u) {
        u.addEventListener("scroll", n.update, Hr);
      }),
    a && l.addEventListener("resize", n.update, Hr),
    function () {
      r &&
        c.forEach(function (u) {
          u.removeEventListener("scroll", n.update, Hr);
        }),
        a && l.removeEventListener("resize", n.update, Hr);
    }
  );
}
const Yx = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Ux,
  data: {},
};
var Xx = { left: "right", right: "left", bottom: "top", top: "bottom" };
function bo(t) {
  return t.replace(/left|right|bottom|top/g, function (e) {
    return Xx[e];
  });
}
var Kx = { start: "end", end: "start" };
function Rh(t) {
  return t.replace(/start|end/g, function (e) {
    return Kx[e];
  });
}
function Fu(t) {
  var e = et(t),
    n = e.pageXOffset,
    i = e.pageYOffset;
  return { scrollLeft: n, scrollTop: i };
}
function Bu(t) {
  return Yi(Ln(t)).left + Fu(t).scrollLeft;
}
function Qx(t, e) {
  var n = et(t),
    i = Ln(t),
    s = n.visualViewport,
    r = i.clientWidth,
    o = i.clientHeight,
    a = 0,
    l = 0;
  if (s) {
    (r = s.width), (o = s.height);
    var c = Pm();
    (c || (!c && e === "fixed")) && ((a = s.offsetLeft), (l = s.offsetTop));
  }
  return { width: r, height: o, x: a + Bu(t), y: l };
}
function qx(t) {
  var e,
    n = Ln(t),
    i = Fu(t),
    s = (e = t.ownerDocument) == null ? void 0 : e.body,
    r = Gn(
      n.scrollWidth,
      n.clientWidth,
      s ? s.scrollWidth : 0,
      s ? s.clientWidth : 0
    ),
    o = Gn(
      n.scrollHeight,
      n.clientHeight,
      s ? s.scrollHeight : 0,
      s ? s.clientHeight : 0
    ),
    a = -i.scrollLeft + Bu(t),
    l = -i.scrollTop;
  return (
    Kt(s || n).direction === "rtl" &&
      (a += Gn(n.clientWidth, s ? s.clientWidth : 0) - r),
    { width: r, height: o, x: a, y: l }
  );
}
function Hu(t) {
  var e = Kt(t),
    n = e.overflow,
    i = e.overflowX,
    s = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + i);
}
function Tm(t) {
  return ["html", "body", "#document"].indexOf(Dt(t)) >= 0
    ? t.ownerDocument.body
    : ct(t) && Hu(t)
    ? t
    : Tm(Ia(t));
}
function Ts(t, e) {
  var n;
  e === void 0 && (e = []);
  var i = Tm(t),
    s = i === ((n = t.ownerDocument) == null ? void 0 : n.body),
    r = et(i),
    o = s ? [r].concat(r.visualViewport || [], Hu(i) ? i : []) : i,
    a = e.concat(o);
  return s ? a : a.concat(Ts(Ia(o)));
}
function Sc(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height,
  });
}
function Gx(t, e) {
  var n = Yi(t, !1, e === "fixed");
  return (
    (n.top = n.top + t.clientTop),
    (n.left = n.left + t.clientLeft),
    (n.bottom = n.top + t.clientHeight),
    (n.right = n.left + t.clientWidth),
    (n.width = t.clientWidth),
    (n.height = t.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function Ih(t, e, n) {
  return e === jm ? Sc(Qx(t, n)) : ri(e) ? Gx(e, n) : Sc(qx(Ln(t)));
}
function Zx(t) {
  var e = Ts(Ia(t)),
    n = ["absolute", "fixed"].indexOf(Kt(t).position) >= 0,
    i = n && ct(t) ? xr(t) : t;
  return ri(i)
    ? e.filter(function (s) {
        return ri(s) && Lm(s, i) && Dt(s) !== "body";
      })
    : [];
}
function Jx(t, e, n, i) {
  var s = e === "clippingParents" ? Zx(t) : [].concat(e),
    r = [].concat(s, [n]),
    o = r[0],
    a = r.reduce(function (l, c) {
      var u = Ih(t, c, i);
      return (
        (l.top = Gn(u.top, l.top)),
        (l.right = sa(u.right, l.right)),
        (l.bottom = sa(u.bottom, l.bottom)),
        (l.left = Gn(u.left, l.left)),
        l
      );
    }, Ih(t, o, i));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function Am(t) {
  var e = t.reference,
    n = t.element,
    i = t.placement,
    s = i ? Lt(i) : null,
    r = i ? Xi(i) : null,
    o = e.x + e.width / 2 - n.width / 2,
    a = e.y + e.height / 2 - n.height / 2,
    l;
  switch (s) {
    case Xe:
      l = { x: o, y: e.y - n.height };
      break;
    case ht:
      l = { x: o, y: e.y + e.height };
      break;
    case ft:
      l = { x: e.x + e.width, y: a };
      break;
    case Ke:
      l = { x: e.x - n.width, y: a };
      break;
    default:
      l = { x: e.x, y: e.y };
  }
  var c = s ? zu(s) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (r) {
      case $i:
        l[c] = l[c] - (e[u] / 2 - n[u] / 2);
        break;
      case ir:
        l[c] = l[c] + (e[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function sr(t, e) {
  e === void 0 && (e = {});
  var n = e,
    i = n.placement,
    s = i === void 0 ? t.placement : i,
    r = n.strategy,
    o = r === void 0 ? t.strategy : r,
    a = n.boundary,
    l = a === void 0 ? xx : a,
    c = n.rootBoundary,
    u = c === void 0 ? jm : c,
    d = n.elementContext,
    h = d === void 0 ? as : d,
    p = n.altBoundary,
    m = p === void 0 ? !1 : p,
    y = n.padding,
    _ = y === void 0 ? 0 : y,
    g = Dm(typeof _ != "number" ? _ : Nm(_, yr)),
    v = h === as ? _x : as,
    x = t.rects.popper,
    b = t.elements[m ? v : h],
    w = Jx(ri(b) ? b : b.contextElement || Ln(t.elements.popper), l, u, o),
    k = Yi(t.elements.reference),
    S = Am({ reference: k, element: x, strategy: "absolute", placement: s }),
    C = Sc(Object.assign({}, x, S)),
    M = h === as ? C : k,
    E = {
      top: w.top - M.top + g.top,
      bottom: M.bottom - w.bottom + g.bottom,
      left: w.left - M.left + g.left,
      right: M.right - w.right + g.right,
    },
    D = t.modifiersData.offset;
  if (h === as && D) {
    var A = D[s];
    Object.keys(E).forEach(function (z) {
      var ee = [ft, ht].indexOf(z) >= 0 ? 1 : -1,
        F = [Xe, ht].indexOf(z) >= 0 ? "y" : "x";
      E[z] += A[F] * ee;
    });
  }
  return E;
}
function e_(t, e) {
  e === void 0 && (e = {});
  var n = e,
    i = n.placement,
    s = n.boundary,
    r = n.rootBoundary,
    o = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    c = l === void 0 ? Mm : l,
    u = Xi(i),
    d = u
      ? a
        ? Nh
        : Nh.filter(function (m) {
            return Xi(m) === u;
          })
      : yr,
    h = d.filter(function (m) {
      return c.indexOf(m) >= 0;
    });
  h.length === 0 && (h = d);
  var p = h.reduce(function (m, y) {
    return (
      (m[y] = sr(t, { placement: y, boundary: s, rootBoundary: r, padding: o })[
        Lt(y)
      ]),
      m
    );
  }, {});
  return Object.keys(p).sort(function (m, y) {
    return p[m] - p[y];
  });
}
function t_(t) {
  if (Lt(t) === Au) return [];
  var e = bo(t);
  return [Rh(t), e, Rh(e)];
}
function n_(t) {
  var e = t.state,
    n = t.options,
    i = t.name;
  if (!e.modifiersData[i]._skip) {
    for (
      var s = n.mainAxis,
        r = s === void 0 ? !0 : s,
        o = n.altAxis,
        a = o === void 0 ? !0 : o,
        l = n.fallbackPlacements,
        c = n.padding,
        u = n.boundary,
        d = n.rootBoundary,
        h = n.altBoundary,
        p = n.flipVariations,
        m = p === void 0 ? !0 : p,
        y = n.allowedAutoPlacements,
        _ = e.options.placement,
        g = Lt(_),
        v = g === _,
        x = l || (v || !m ? [bo(_)] : t_(_)),
        b = [_].concat(x).reduce(function (he, ye) {
          return he.concat(
            Lt(ye) === Au
              ? e_(e, {
                  placement: ye,
                  boundary: u,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: m,
                  allowedAutoPlacements: y,
                })
              : ye
          );
        }, []),
        w = e.rects.reference,
        k = e.rects.popper,
        S = new Map(),
        C = !0,
        M = b[0],
        E = 0;
      E < b.length;
      E++
    ) {
      var D = b[E],
        A = Lt(D),
        z = Xi(D) === $i,
        ee = [Xe, ht].indexOf(A) >= 0,
        F = ee ? "width" : "height",
        I = sr(e, {
          placement: D,
          boundary: u,
          rootBoundary: d,
          altBoundary: h,
          padding: c,
        }),
        H = ee ? (z ? ft : Ke) : z ? ht : Xe;
      w[F] > k[F] && (H = bo(H));
      var P = bo(H),
        N = [];
      if (
        (r && N.push(I[A] <= 0),
        a && N.push(I[H] <= 0, I[P] <= 0),
        N.every(function (he) {
          return he;
        }))
      ) {
        (M = D), (C = !1);
        break;
      }
      S.set(D, N);
    }
    if (C)
      for (
        var R = m ? 3 : 1,
          Y = function (ye) {
            var pe = b.find(function (Nt) {
              var Dn = S.get(Nt);
              if (Dn)
                return Dn.slice(0, ye).every(function ($a) {
                  return $a;
                });
            });
            if (pe) return (M = pe), "break";
          },
          U = R;
        U > 0;
        U--
      ) {
        var Ne = Y(U);
        if (Ne === "break") break;
      }
    e.placement !== M &&
      ((e.modifiersData[i]._skip = !0), (e.placement = M), (e.reset = !0));
  }
}
const i_ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: n_,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function zh(t, e, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: t.top - e.height - n.y,
      right: t.right - e.width + n.x,
      bottom: t.bottom - e.height + n.y,
      left: t.left - e.width - n.x,
    }
  );
}
function Fh(t) {
  return [Xe, ft, ht, Ke].some(function (e) {
    return t[e] >= 0;
  });
}
function s_(t) {
  var e = t.state,
    n = t.name,
    i = e.rects.reference,
    s = e.rects.popper,
    r = e.modifiersData.preventOverflow,
    o = sr(e, { elementContext: "reference" }),
    a = sr(e, { altBoundary: !0 }),
    l = zh(o, i),
    c = zh(a, s, r),
    u = Fh(l),
    d = Fh(c);
  (e.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d,
  }),
    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": d,
    }));
}
const r_ = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: s_,
};
function o_(t, e, n) {
  var i = Lt(t),
    s = [Ke, Xe].indexOf(i) >= 0 ? -1 : 1,
    r = typeof n == "function" ? n(Object.assign({}, e, { placement: t })) : n,
    o = r[0],
    a = r[1];
  return (
    (o = o || 0),
    (a = (a || 0) * s),
    [Ke, ft].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
  );
}
function a_(t) {
  var e = t.state,
    n = t.options,
    i = t.name,
    s = n.offset,
    r = s === void 0 ? [0, 0] : s,
    o = Mm.reduce(function (u, d) {
      return (u[d] = o_(d, e.rects, r)), u;
    }, {}),
    a = o[e.placement],
    l = a.x,
    c = a.y;
  e.modifiersData.popperOffsets != null &&
    ((e.modifiersData.popperOffsets.x += l),
    (e.modifiersData.popperOffsets.y += c)),
    (e.modifiersData[i] = o);
}
const l_ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: a_,
};
function c_(t) {
  var e = t.state,
    n = t.name;
  e.modifiersData[n] = Am({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement,
  });
}
const u_ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: c_,
  data: {},
};
function d_(t) {
  return t === "x" ? "y" : "x";
}
function h_(t) {
  var e = t.state,
    n = t.options,
    i = t.name,
    s = n.mainAxis,
    r = s === void 0 ? !0 : s,
    o = n.altAxis,
    a = o === void 0 ? !1 : o,
    l = n.boundary,
    c = n.rootBoundary,
    u = n.altBoundary,
    d = n.padding,
    h = n.tether,
    p = h === void 0 ? !0 : h,
    m = n.tetherOffset,
    y = m === void 0 ? 0 : m,
    _ = sr(e, { boundary: l, rootBoundary: c, padding: d, altBoundary: u }),
    g = Lt(e.placement),
    v = Xi(e.placement),
    x = !v,
    b = zu(g),
    w = d_(b),
    k = e.modifiersData.popperOffsets,
    S = e.rects.reference,
    C = e.rects.popper,
    M =
      typeof y == "function"
        ? y(Object.assign({}, e.rects, { placement: e.placement }))
        : y,
    E =
      typeof M == "number"
        ? { mainAxis: M, altAxis: M }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, M),
    D = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
    A = { x: 0, y: 0 };
  if (k) {
    if (r) {
      var z,
        ee = b === "y" ? Xe : Ke,
        F = b === "y" ? ht : ft,
        I = b === "y" ? "height" : "width",
        H = k[b],
        P = H + _[ee],
        N = H - _[F],
        R = p ? -C[I] / 2 : 0,
        Y = v === $i ? S[I] : C[I],
        U = v === $i ? -C[I] : -S[I],
        Ne = e.elements.arrow,
        he = p && Ne ? Iu(Ne) : { width: 0, height: 0 },
        ye = e.modifiersData["arrow#persistent"]
          ? e.modifiersData["arrow#persistent"].padding
          : Om(),
        pe = ye[ee],
        Nt = ye[F],
        Dn = Ns(0, S[I], he[I]),
        $a = x ? S[I] / 2 - R - Dn - pe - E.mainAxis : Y - Dn - pe - E.mainAxis,
        R0 = x
          ? -S[I] / 2 + R + Dn + Nt + E.mainAxis
          : U + Dn + Nt + E.mainAxis,
        Ua = e.elements.arrow && xr(e.elements.arrow),
        I0 = Ua ? (b === "y" ? Ua.clientTop || 0 : Ua.clientLeft || 0) : 0,
        fd = (z = D == null ? void 0 : D[b]) != null ? z : 0,
        z0 = H + $a - fd - I0,
        F0 = H + R0 - fd,
        pd = Ns(p ? sa(P, z0) : P, H, p ? Gn(N, F0) : N);
      (k[b] = pd), (A[b] = pd - H);
    }
    if (a) {
      var gd,
        B0 = b === "x" ? Xe : Ke,
        H0 = b === "x" ? ht : ft,
        Nn = k[w],
        kr = w === "y" ? "height" : "width",
        md = Nn + _[B0],
        vd = Nn - _[H0],
        Ya = [Xe, Ke].indexOf(g) !== -1,
        yd = (gd = D == null ? void 0 : D[w]) != null ? gd : 0,
        xd = Ya ? md : Nn - S[kr] - C[kr] - yd + E.altAxis,
        _d = Ya ? Nn + S[kr] + C[kr] - yd - E.altAxis : vd,
        bd = p && Ya ? Rx(xd, Nn, _d) : Ns(p ? xd : md, Nn, p ? _d : vd);
      (k[w] = bd), (A[w] = bd - Nn);
    }
    e.modifiersData[i] = A;
  }
}
const f_ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: h_,
  requiresIfExists: ["offset"],
};
function p_(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function g_(t) {
  return t === et(t) || !ct(t) ? Fu(t) : p_(t);
}
function m_(t) {
  var e = t.getBoundingClientRect(),
    n = Ui(e.width) / t.offsetWidth || 1,
    i = Ui(e.height) / t.offsetHeight || 1;
  return n !== 1 || i !== 1;
}
function v_(t, e, n) {
  n === void 0 && (n = !1);
  var i = ct(e),
    s = ct(e) && m_(e),
    r = Ln(e),
    o = Yi(t, s, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (i || (!i && !n)) &&
      ((Dt(e) !== "body" || Hu(r)) && (a = g_(e)),
      ct(e)
        ? ((l = Yi(e, !0)), (l.x += e.clientLeft), (l.y += e.clientTop))
        : r && (l.x = Bu(r))),
    {
      x: o.left + a.scrollLeft - l.x,
      y: o.top + a.scrollTop - l.y,
      width: o.width,
      height: o.height,
    }
  );
}
function y_(t) {
  var e = new Map(),
    n = new Set(),
    i = [];
  t.forEach(function (r) {
    e.set(r.name, r);
  });
  function s(r) {
    n.add(r.name);
    var o = [].concat(r.requires || [], r.requiresIfExists || []);
    o.forEach(function (a) {
      if (!n.has(a)) {
        var l = e.get(a);
        l && s(l);
      }
    }),
      i.push(r);
  }
  return (
    t.forEach(function (r) {
      n.has(r.name) || s(r);
    }),
    i
  );
}
function x_(t) {
  var e = y_(t);
  return Lx.reduce(function (n, i) {
    return n.concat(
      e.filter(function (s) {
        return s.phase === i;
      })
    );
  }, []);
}
function __(t) {
  var e;
  return function () {
    return (
      e ||
        (e = new Promise(function (n) {
          Promise.resolve().then(function () {
            (e = void 0), n(t());
          });
        })),
      e
    );
  };
}
function b_(t) {
  var e = t.reduce(function (n, i) {
    var s = n[i.name];
    return (
      (n[i.name] = s
        ? Object.assign({}, s, i, {
            options: Object.assign({}, s.options, i.options),
            data: Object.assign({}, s.data, i.data),
          })
        : i),
      n
    );
  }, {});
  return Object.keys(e).map(function (n) {
    return e[n];
  });
}
var Bh = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Hh() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function (i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function w_(t) {
  t === void 0 && (t = {});
  var e = t,
    n = e.defaultModifiers,
    i = n === void 0 ? [] : n,
    s = e.defaultOptions,
    r = s === void 0 ? Bh : s;
  return function (a, l, c) {
    c === void 0 && (c = r);
    var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Bh, r),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      h = !1,
      p = {
        state: u,
        setOptions: function (g) {
          var v = typeof g == "function" ? g(u.options) : g;
          y(),
            (u.options = Object.assign({}, r, u.options, v)),
            (u.scrollParents = {
              reference: ri(a)
                ? Ts(a)
                : a.contextElement
                ? Ts(a.contextElement)
                : [],
              popper: Ts(l),
            });
          var x = x_(b_([].concat(i, u.options.modifiers)));
          return (
            (u.orderedModifiers = x.filter(function (b) {
              return b.enabled;
            })),
            m(),
            p.update()
          );
        },
        forceUpdate: function () {
          if (!h) {
            var g = u.elements,
              v = g.reference,
              x = g.popper;
            if (Hh(v, x)) {
              (u.rects = {
                reference: v_(v, xr(x), u.options.strategy === "fixed"),
                popper: Iu(x),
              }),
                (u.reset = !1),
                (u.placement = u.options.placement),
                u.orderedModifiers.forEach(function (E) {
                  return (u.modifiersData[E.name] = Object.assign({}, E.data));
                });
              for (var b = 0; b < u.orderedModifiers.length; b++) {
                if (u.reset === !0) {
                  (u.reset = !1), (b = -1);
                  continue;
                }
                var w = u.orderedModifiers[b],
                  k = w.fn,
                  S = w.options,
                  C = S === void 0 ? {} : S,
                  M = w.name;
                typeof k == "function" &&
                  (u = k({ state: u, options: C, name: M, instance: p }) || u);
              }
            }
          }
        },
        update: __(function () {
          return new Promise(function (_) {
            p.forceUpdate(), _(u);
          });
        }),
        destroy: function () {
          y(), (h = !0);
        },
      };
    if (!Hh(a, l)) return p;
    p.setOptions(c).then(function (_) {
      !h && c.onFirstUpdate && c.onFirstUpdate(_);
    });
    function m() {
      u.orderedModifiers.forEach(function (_) {
        var g = _.name,
          v = _.options,
          x = v === void 0 ? {} : v,
          b = _.effect;
        if (typeof b == "function") {
          var w = b({ state: u, name: g, instance: p, options: x }),
            k = function () {};
          d.push(w || k);
        }
      });
    }
    function y() {
      d.forEach(function (_) {
        return _();
      }),
        (d = []);
    }
    return p;
  };
}
var k_ = [Yx, u_, $x, Nx, l_, i_, f_, Bx, r_],
  Vu = w_({ defaultModifiers: k_ }),
  tn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (tn =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++) {
              e = arguments[n];
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            }
            return t;
          }),
        tn.apply(this, arguments)
      );
    },
  Vr =
    (globalThis && globalThis.__spreadArray) ||
    function (t, e, n) {
      if (n || arguments.length === 2)
        for (var i = 0, s = e.length, r; i < s; i++)
          (r || !(i in e)) &&
            (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
      return t.concat(r || Array.prototype.slice.call(e));
    },
  Wn = {
    placement: "bottom",
    triggerType: "click",
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  Rm = (function () {
    function t(e, n, i) {
      e === void 0 && (e = null),
        n === void 0 && (n = null),
        i === void 0 && (i = Wn),
        (this._targetEl = e),
        (this._triggerEl = n),
        (this._options = tn(tn({}, Wn), i)),
        (this._popperInstance = this._createPopperInstance()),
        (this._visible = !1),
        this._init();
    }
    return (
      (t.prototype._init = function () {
        this._triggerEl && this._setupEventListeners();
      }),
      (t.prototype._setupEventListeners = function () {
        var e = this,
          n = this._getTriggerEvents();
        this._options.triggerType === "click" &&
          n.showEvents.forEach(function (i) {
            e._triggerEl.addEventListener(i, function () {
              e.toggle();
            });
          }),
          this._options.triggerType === "hover" &&
            (n.showEvents.forEach(function (i) {
              e._triggerEl.addEventListener(i, function () {
                i === "click"
                  ? e.toggle()
                  : setTimeout(function () {
                      e.show();
                    }, e._options.delay);
              }),
                e._targetEl.addEventListener(i, function () {
                  e.show();
                });
            }),
            n.hideEvents.forEach(function (i) {
              e._triggerEl.addEventListener(i, function () {
                setTimeout(function () {
                  e._targetEl.matches(":hover") || e.hide();
                }, e._options.delay);
              }),
                e._targetEl.addEventListener(i, function () {
                  setTimeout(function () {
                    e._triggerEl.matches(":hover") || e.hide();
                  }, e._options.delay);
                });
            }));
      }),
      (t.prototype._createPopperInstance = function () {
        return Vu(this._triggerEl, this._targetEl, {
          placement: this._options.placement,
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [
                  this._options.offsetSkidding,
                  this._options.offsetDistance,
                ],
              },
            },
          ],
        });
      }),
      (t.prototype._setupClickOutsideListener = function () {
        var e = this;
        (this._clickOutsideEventListener = function (n) {
          e._handleClickOutside(n, e._targetEl);
        }),
          document.body.addEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          );
      }),
      (t.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener(
          "click",
          this._clickOutsideEventListener,
          !0
        );
      }),
      (t.prototype._handleClickOutside = function (e, n) {
        var i = e.target;
        i !== n &&
          !n.contains(i) &&
          !this._triggerEl.contains(i) &&
          this.isVisible() &&
          this.hide();
      }),
      (t.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
          case "hover":
            return {
              showEvents: ["mouseenter", "click"],
              hideEvents: ["mouseleave"],
            };
          case "click":
            return { showEvents: ["click"], hideEvents: [] };
          case "none":
            return { showEvents: [], hideEvents: [] };
          default:
            return { showEvents: ["click"], hideEvents: [] };
        }
      }),
      (t.prototype.toggle = function () {
        this.isVisible() ? this.hide() : this.show(),
          this._options.onToggle(this);
      }),
      (t.prototype.isVisible = function () {
        return this._visible;
      }),
      (t.prototype.show = function () {
        this._targetEl.classList.remove("hidden"),
          this._targetEl.classList.add("block"),
          this._popperInstance.setOptions(function (e) {
            return tn(tn({}, e), {
              modifiers: Vr(
                Vr([], e.modifiers, !0),
                [{ name: "eventListeners", enabled: !0 }],
                !1
              ),
            });
          }),
          this._setupClickOutsideListener(),
          this._popperInstance.update(),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (t.prototype.hide = function () {
        this._targetEl.classList.remove("block"),
          this._targetEl.classList.add("hidden"),
          this._popperInstance.setOptions(function (e) {
            return tn(tn({}, e), {
              modifiers: Vr(
                Vr([], e.modifiers, !0),
                [{ name: "eventListeners", enabled: !1 }],
                !1
              ),
            });
          }),
          (this._visible = !1),
          this._removeClickOutsideListener(),
          this._options.onHide(this);
      }),
      t
    );
  })();
function Wu() {
  document.querySelectorAll("[data-dropdown-toggle]").forEach(function (t) {
    var e = t.getAttribute("data-dropdown-toggle"),
      n = document.getElementById(e);
    if (n) {
      var i = t.getAttribute("data-dropdown-placement"),
        s = t.getAttribute("data-dropdown-offset-skidding"),
        r = t.getAttribute("data-dropdown-offset-distance"),
        o = t.getAttribute("data-dropdown-trigger"),
        a = t.getAttribute("data-dropdown-delay");
      new Rm(n, t, {
        placement: i || Wn.placement,
        triggerType: o || Wn.triggerType,
        offsetSkidding: s ? parseInt(s) : Wn.offsetSkidding,
        offsetDistance: r ? parseInt(r) : Wn.offsetDistance,
        delay: a ? parseInt(a) : Wn.delay,
      });
    } else console.error('The dropdown element with id "'.concat(e, '" does not exist. Please check the data-dropdown-toggle attribute.'));
  });
}
typeof window < "u" && ((window.Dropdown = Rm), (window.initDropdowns = Wu));
var ra =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (ra =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++) {
              e = arguments[n];
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            }
            return t;
          }),
        ra.apply(this, arguments)
      );
    },
  Mi = {
    placement: "center",
    backdropClasses:
      "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
    backdrop: "dynamic",
    closable: !0,
    onHide: function () {},
    onShow: function () {},
    onToggle: function () {},
  },
  Cc = (function () {
    function t(e, n) {
      e === void 0 && (e = null),
        n === void 0 && (n = Mi),
        (this._targetEl = e),
        (this._options = ra(ra({}, Mi), n)),
        (this._isHidden = !0),
        (this._backdropEl = null),
        this._init();
    }
    return (
      (t.prototype._init = function () {
        var e = this;
        this._targetEl &&
          this._getPlacementClasses().map(function (n) {
            e._targetEl.classList.add(n);
          });
      }),
      (t.prototype._createBackdrop = function () {
        var e;
        if (this._isHidden) {
          var n = document.createElement("div");
          n.setAttribute("modal-backdrop", ""),
            (e = n.classList).add.apply(
              e,
              this._options.backdropClasses.split(" ")
            ),
            document.querySelector("body").append(n),
            (this._backdropEl = n);
        }
      }),
      (t.prototype._destroyBackdropEl = function () {
        this._isHidden || document.querySelector("[modal-backdrop]").remove();
      }),
      (t.prototype._setupModalCloseEventListeners = function () {
        var e = this;
        this._options.backdrop === "dynamic" &&
          ((this._clickOutsideEventListener = function (n) {
            e._handleOutsideClick(n.target);
          }),
          this._targetEl.addEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          )),
          (this._keydownEventListener = function (n) {
            n.key === "Escape" && e.hide();
          }),
          document.body.addEventListener(
            "keydown",
            this._keydownEventListener,
            !0
          );
      }),
      (t.prototype._removeModalCloseEventListeners = function () {
        this._options.backdrop === "dynamic" &&
          this._targetEl.removeEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          ),
          document.body.removeEventListener(
            "keydown",
            this._keydownEventListener,
            !0
          );
      }),
      (t.prototype._handleOutsideClick = function (e) {
        (e === this._targetEl ||
          (e === this._backdropEl && this.isVisible())) &&
          this.hide();
      }),
      (t.prototype._getPlacementClasses = function () {
        switch (this._options.placement) {
          case "top-left":
            return ["justify-start", "items-start"];
          case "top-center":
            return ["justify-center", "items-start"];
          case "top-right":
            return ["justify-end", "items-start"];
          case "center-left":
            return ["justify-start", "items-center"];
          case "center":
            return ["justify-center", "items-center"];
          case "center-right":
            return ["justify-end", "items-center"];
          case "bottom-left":
            return ["justify-start", "items-end"];
          case "bottom-center":
            return ["justify-center", "items-end"];
          case "bottom-right":
            return ["justify-end", "items-end"];
          default:
            return ["justify-center", "items-center"];
        }
      }),
      (t.prototype.toggle = function () {
        this._isHidden ? this.show() : this.hide(),
          this._options.onToggle(this);
      }),
      (t.prototype.show = function () {
        this.isHidden &&
          (this._targetEl.classList.add("flex"),
          this._targetEl.classList.remove("hidden"),
          this._targetEl.setAttribute("aria-modal", "true"),
          this._targetEl.setAttribute("role", "dialog"),
          this._targetEl.removeAttribute("aria-hidden"),
          this._createBackdrop(),
          (this._isHidden = !1),
          document.body.classList.add("overflow-hidden"),
          this._options.closable && this._setupModalCloseEventListeners(),
          this._options.onShow(this));
      }),
      (t.prototype.hide = function () {
        this.isVisible &&
          (this._targetEl.classList.add("hidden"),
          this._targetEl.classList.remove("flex"),
          this._targetEl.setAttribute("aria-hidden", "true"),
          this._targetEl.removeAttribute("aria-modal"),
          this._targetEl.removeAttribute("role"),
          this._destroyBackdropEl(),
          (this._isHidden = !0),
          document.body.classList.remove("overflow-hidden"),
          this._options.closable && this._removeModalCloseEventListeners(),
          this._options.onHide(this));
      }),
      (t.prototype.isVisible = function () {
        return !this._isHidden;
      }),
      (t.prototype.isHidden = function () {
        return this._isHidden;
      }),
      t
    );
  })(),
  Wr = function (t, e) {
    return e.some(function (n) {
      return n.id === t;
    })
      ? e.find(function (n) {
          return n.id === t;
        })
      : null;
  };
function $u() {
  var t = [];
  document.querySelectorAll("[data-modal-target]").forEach(function (e) {
    var n = e.getAttribute("data-modal-target"),
      i = document.getElementById(n);
    if (i) {
      var s = i.getAttribute("data-modal-placement"),
        r = i.getAttribute("data-modal-backdrop");
      Wr(n, t) ||
        t.push({
          id: n,
          object: new Cc(i, {
            placement: s || Mi.placement,
            backdrop: r || Mi.backdrop,
          }),
        });
    } else console.error("Modal with id ".concat(n, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."));
  }),
    document.querySelectorAll("[data-modal-toggle]").forEach(function (e) {
      var n = e.getAttribute("data-modal-toggle"),
        i = document.getElementById(n);
      if (i) {
        var s = i.getAttribute("data-modal-placement"),
          r = i.getAttribute("data-modal-backdrop"),
          o = Wr(n, t);
        o ||
          ((o = {
            id: n,
            object: new Cc(i, {
              placement: s || Mi.placement,
              backdrop: r || Mi.backdrop,
            }),
          }),
          t.push(o)),
          e.addEventListener("click", function () {
            o.object.toggle();
          });
      } else
        console.error(
          "Modal with id ".concat(
            n,
            " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"
          )
        );
    }),
    document.querySelectorAll("[data-modal-show]").forEach(function (e) {
      var n = e.getAttribute("data-modal-show"),
        i = document.getElementById(n);
      if (i) {
        var s = Wr(n, t);
        s
          ? e.addEventListener("click", function () {
              s.object.isHidden && s.object.show();
            })
          : console.error(
              "Modal with id ".concat(
                n,
                " has not been initialized. Please initialize it using the data-modal-target attribute."
              )
            );
      } else console.error("Modal with id ".concat(n, " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"));
    }),
    document.querySelectorAll("[data-modal-hide]").forEach(function (e) {
      var n = e.getAttribute("data-modal-hide"),
        i = document.getElementById(n);
      if (i) {
        var s = Wr(n, t);
        s
          ? e.addEventListener("click", function () {
              s.object.isVisible && s.object.hide();
            })
          : console.error(
              "Modal with id ".concat(
                n,
                " has not been initialized. Please initialize it using the data-modal-target attribute."
              )
            );
      } else console.error("Modal with id ".concat(n, " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"));
    });
}
typeof window < "u" && ((window.Modal = Cc), (window.initModals = $u));
var oa =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (oa =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++) {
              e = arguments[n];
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            }
            return t;
          }),
        oa.apply(this, arguments)
      );
    },
  $n = {
    placement: "left",
    bodyScrolling: !1,
    backdrop: !0,
    edge: !1,
    edgeOffset: "bottom-[60px]",
    backdropClasses:
      "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  Im = (function () {
    function t(e, n) {
      e === void 0 && (e = null),
        n === void 0 && (n = $n),
        (this._targetEl = e),
        (this._options = oa(oa({}, $n), n)),
        (this._visible = !1),
        this._init();
    }
    return (
      (t.prototype._init = function () {
        var e = this;
        this._targetEl &&
          (this._targetEl.setAttribute("aria-hidden", "true"),
          this._targetEl.classList.add("transition-transform")),
          this._getPlacementClasses(this._options.placement).base.map(function (
            n
          ) {
            e._targetEl.classList.add(n);
          }),
          document.addEventListener("keydown", function (n) {
            n.key === "Escape" && e.isVisible() && e.hide();
          });
      }),
      (t.prototype.hide = function () {
        var e = this;
        this._options.edge
          ? (this._getPlacementClasses(
              this._options.placement + "-edge"
            ).active.map(function (n) {
              e._targetEl.classList.remove(n);
            }),
            this._getPlacementClasses(
              this._options.placement + "-edge"
            ).inactive.map(function (n) {
              e._targetEl.classList.add(n);
            }))
          : (this._getPlacementClasses(this._options.placement).active.map(
              function (n) {
                e._targetEl.classList.remove(n);
              }
            ),
            this._getPlacementClasses(this._options.placement).inactive.map(
              function (n) {
                e._targetEl.classList.add(n);
              }
            )),
          this._targetEl.setAttribute("aria-hidden", "true"),
          this._targetEl.removeAttribute("aria-modal"),
          this._targetEl.removeAttribute("role"),
          this._options.bodyScrolling ||
            document.body.classList.remove("overflow-hidden"),
          this._options.backdrop && this._destroyBackdropEl(),
          (this._visible = !1),
          this._options.onHide(this);
      }),
      (t.prototype.show = function () {
        var e = this;
        this._options.edge
          ? (this._getPlacementClasses(
              this._options.placement + "-edge"
            ).active.map(function (n) {
              e._targetEl.classList.add(n);
            }),
            this._getPlacementClasses(
              this._options.placement + "-edge"
            ).inactive.map(function (n) {
              e._targetEl.classList.remove(n);
            }))
          : (this._getPlacementClasses(this._options.placement).active.map(
              function (n) {
                e._targetEl.classList.add(n);
              }
            ),
            this._getPlacementClasses(this._options.placement).inactive.map(
              function (n) {
                e._targetEl.classList.remove(n);
              }
            )),
          this._targetEl.setAttribute("aria-modal", "true"),
          this._targetEl.setAttribute("role", "dialog"),
          this._targetEl.removeAttribute("aria-hidden"),
          this._options.bodyScrolling ||
            document.body.classList.add("overflow-hidden"),
          this._options.backdrop && this._createBackdrop(),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (t.prototype.toggle = function () {
        this.isVisible() ? this.hide() : this.show();
      }),
      (t.prototype._createBackdrop = function () {
        var e,
          n = this;
        if (!this._visible) {
          var i = document.createElement("div");
          i.setAttribute("drawer-backdrop", ""),
            (e = i.classList).add.apply(
              e,
              this._options.backdropClasses.split(" ")
            ),
            document.querySelector("body").append(i),
            i.addEventListener("click", function () {
              n.hide();
            });
        }
      }),
      (t.prototype._destroyBackdropEl = function () {
        this._visible && document.querySelector("[drawer-backdrop]").remove();
      }),
      (t.prototype._getPlacementClasses = function (e) {
        switch (e) {
          case "top":
            return {
              base: ["top-0", "left-0", "right-0"],
              active: ["transform-none"],
              inactive: ["-translate-y-full"],
            };
          case "right":
            return {
              base: ["right-0", "top-0"],
              active: ["transform-none"],
              inactive: ["translate-x-full"],
            };
          case "bottom":
            return {
              base: ["bottom-0", "left-0", "right-0"],
              active: ["transform-none"],
              inactive: ["translate-y-full"],
            };
          case "left":
            return {
              base: ["left-0", "top-0"],
              active: ["transform-none"],
              inactive: ["-translate-x-full"],
            };
          case "bottom-edge":
            return {
              base: ["left-0", "top-0"],
              active: ["transform-none"],
              inactive: ["translate-y-full", this._options.edgeOffset],
            };
          default:
            return {
              base: ["left-0", "top-0"],
              active: ["transform-none"],
              inactive: ["-translate-x-full"],
            };
        }
      }),
      (t.prototype.isHidden = function () {
        return !this._visible;
      }),
      (t.prototype.isVisible = function () {
        return this._visible;
      }),
      t
    );
  })(),
  $r = function (t, e) {
    if (
      e.some(function (n) {
        return n.id === t;
      })
    )
      return e.find(function (n) {
        return n.id === t;
      });
  };
function Uu() {
  var t = [];
  document.querySelectorAll("[data-drawer-target]").forEach(function (e) {
    var n = e.getAttribute("data-drawer-target"),
      i = document.getElementById(n);
    if (i) {
      var s = e.getAttribute("data-drawer-placement"),
        r = e.getAttribute("data-drawer-body-scrolling"),
        o = e.getAttribute("data-drawer-backdrop"),
        a = e.getAttribute("data-drawer-edge"),
        l = e.getAttribute("data-drawer-edge-offset");
      $r(n, t) ||
        t.push({
          id: n,
          object: new Im(i, {
            placement: s || $n.placement,
            bodyScrolling: r ? r === "true" : $n.bodyScrolling,
            backdrop: o ? o === "true" : $n.backdrop,
            edge: a ? a === "true" : $n.edge,
            edgeOffset: l || $n.edgeOffset,
          }),
        });
    } else console.error("Drawer with id ".concat(n, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
  }),
    document.querySelectorAll("[data-drawer-toggle]").forEach(function (e) {
      var n = e.getAttribute("data-drawer-toggle"),
        i = document.getElementById(n);
      if (i) {
        var s = $r(n, t);
        s
          ? e.addEventListener("click", function () {
              s.object.toggle();
            })
          : console.error(
              "Drawer with id ".concat(
                n,
                " has not been initialized. Please initialize it using the data-drawer-target attribute."
              )
            );
      } else console.error("Drawer with id ".concat(n, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    }),
    document
      .querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]")
      .forEach(function (e) {
        var n = e.getAttribute("data-drawer-dismiss")
            ? e.getAttribute("data-drawer-dismiss")
            : e.getAttribute("data-drawer-hide"),
          i = document.getElementById(n);
        if (i) {
          var s = $r(n, t);
          s
            ? e.addEventListener("click", function () {
                s.object.hide();
              })
            : console.error(
                "Drawer with id ".concat(
                  n,
                  " has not been initialized. Please initialize it using the data-drawer-target attribute."
                )
              );
        } else console.error("Drawer with id ".concat(n, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"));
      }),
    document.querySelectorAll("[data-drawer-show]").forEach(function (e) {
      var n = e.getAttribute("data-drawer-show"),
        i = document.getElementById(n);
      if (i) {
        var s = $r(n, t);
        s
          ? e.addEventListener("click", function () {
              s.object.show();
            })
          : console.error(
              "Drawer with id ".concat(
                n,
                " has not been initialized. Please initialize it using the data-drawer-target attribute."
              )
            );
      } else console.error("Drawer with id ".concat(n, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    });
}
typeof window < "u" && ((window.Drawer = Im), (window.initDrawers = Uu));
var aa =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (aa =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++) {
              e = arguments[n];
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            }
            return t;
          }),
        aa.apply(this, arguments)
      );
    },
  Vh = {
    defaultTabId: null,
    activeClasses:
      "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
    inactiveClasses:
      "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
    onShow: function () {},
  },
  zm = (function () {
    function t(e, n) {
      e === void 0 && (e = []),
        n === void 0 && (n = Vh),
        (this._items = e),
        (this._activeTab = n ? this.getTab(n.defaultTabId) : null),
        (this._options = aa(aa({}, Vh), n)),
        this._init();
    }
    return (
      (t.prototype._init = function () {
        var e = this;
        this._items.length &&
          (this._activeTab || this._setActiveTab(this._items[0]),
          this.show(this._activeTab.id, !0),
          this._items.map(function (n) {
            n.triggerEl.addEventListener("click", function () {
              e.show(n.id);
            });
          }));
      }),
      (t.prototype.getActiveTab = function () {
        return this._activeTab;
      }),
      (t.prototype._setActiveTab = function (e) {
        this._activeTab = e;
      }),
      (t.prototype.getTab = function (e) {
        return this._items.filter(function (n) {
          return n.id === e;
        })[0];
      }),
      (t.prototype.show = function (e, n) {
        var i,
          s,
          r = this;
        n === void 0 && (n = !1);
        var o = this.getTab(e);
        (o === this._activeTab && !n) ||
          (this._items.map(function (a) {
            var l, c;
            a !== o &&
              ((l = a.triggerEl.classList).remove.apply(
                l,
                r._options.activeClasses.split(" ")
              ),
              (c = a.triggerEl.classList).add.apply(
                c,
                r._options.inactiveClasses.split(" ")
              ),
              a.targetEl.classList.add("hidden"),
              a.triggerEl.setAttribute("aria-selected", "false"));
          }),
          (i = o.triggerEl.classList).add.apply(
            i,
            this._options.activeClasses.split(" ")
          ),
          (s = o.triggerEl.classList).remove.apply(
            s,
            this._options.inactiveClasses.split(" ")
          ),
          o.triggerEl.setAttribute("aria-selected", "true"),
          o.targetEl.classList.remove("hidden"),
          this._setActiveTab(o),
          this._options.onShow(this, o));
      }),
      t
    );
  })();
function Yu() {
  document.querySelectorAll("[data-tabs-toggle]").forEach(function (t) {
    var e = [],
      n = null;
    t.querySelectorAll('[role="tab"]').forEach(function (i) {
      var s = i.getAttribute("aria-selected") === "true",
        r = {
          id: i.getAttribute("data-tabs-target"),
          triggerEl: i,
          targetEl: document.querySelector(i.getAttribute("data-tabs-target")),
        };
      e.push(r), s && (n = r.id);
    }),
      new zm(e, { defaultTabId: n });
  });
}
typeof window < "u" && ((window.Tabs = zm), (window.initTabs = Yu));
var nn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (nn =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++) {
              e = arguments[n];
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            }
            return t;
          }),
        nn.apply(this, arguments)
      );
    },
  Ur =
    (globalThis && globalThis.__spreadArray) ||
    function (t, e, n) {
      if (n || arguments.length === 2)
        for (var i = 0, s = e.length, r; i < s; i++)
          (r || !(i in e)) &&
            (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
      return t.concat(r || Array.prototype.slice.call(e));
    },
  la = {
    placement: "top",
    triggerType: "hover",
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  Fm = (function () {
    function t(e, n, i) {
      e === void 0 && (e = null),
        n === void 0 && (n = null),
        i === void 0 && (i = la),
        (this._targetEl = e),
        (this._triggerEl = n),
        (this._options = nn(nn({}, la), i)),
        (this._popperInstance = this._createPopperInstance()),
        (this._visible = !1),
        this._init();
    }
    return (
      (t.prototype._init = function () {
        this._triggerEl && this._setupEventListeners();
      }),
      (t.prototype._setupEventListeners = function () {
        var e = this,
          n = this._getTriggerEvents();
        n.showEvents.forEach(function (i) {
          e._triggerEl.addEventListener(i, function () {
            e.show();
          });
        }),
          n.hideEvents.forEach(function (i) {
            e._triggerEl.addEventListener(i, function () {
              e.hide();
            });
          });
      }),
      (t.prototype._createPopperInstance = function () {
        return Vu(this._triggerEl, this._targetEl, {
          placement: this._options.placement,
          modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
        });
      }),
      (t.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
          case "hover":
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
          case "click":
            return {
              showEvents: ["click", "focus"],
              hideEvents: ["focusout", "blur"],
            };
          case "none":
            return { showEvents: [], hideEvents: [] };
          default:
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
        }
      }),
      (t.prototype._setupKeydownListener = function () {
        var e = this;
        (this._keydownEventListener = function (n) {
          n.key === "Escape" && e.hide();
        }),
          document.body.addEventListener(
            "keydown",
            this._keydownEventListener,
            !0
          );
      }),
      (t.prototype._removeKeydownListener = function () {
        document.body.removeEventListener(
          "keydown",
          this._keydownEventListener,
          !0
        );
      }),
      (t.prototype._setupClickOutsideListener = function () {
        var e = this;
        (this._clickOutsideEventListener = function (n) {
          e._handleClickOutside(n, e._targetEl);
        }),
          document.body.addEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          );
      }),
      (t.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener(
          "click",
          this._clickOutsideEventListener,
          !0
        );
      }),
      (t.prototype._handleClickOutside = function (e, n) {
        var i = e.target;
        i !== n &&
          !n.contains(i) &&
          !this._triggerEl.contains(i) &&
          this.isVisible() &&
          this.hide();
      }),
      (t.prototype.isVisible = function () {
        return this._visible;
      }),
      (t.prototype.toggle = function () {
        this.isVisible() ? this.hide() : this.show();
      }),
      (t.prototype.show = function () {
        this._targetEl.classList.remove("opacity-0", "invisible"),
          this._targetEl.classList.add("opacity-100", "visible"),
          this._popperInstance.setOptions(function (e) {
            return nn(nn({}, e), {
              modifiers: Ur(
                Ur([], e.modifiers, !0),
                [{ name: "eventListeners", enabled: !0 }],
                !1
              ),
            });
          }),
          this._setupClickOutsideListener(),
          this._setupKeydownListener(),
          this._popperInstance.update(),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (t.prototype.hide = function () {
        this._targetEl.classList.remove("opacity-100", "visible"),
          this._targetEl.classList.add("opacity-0", "invisible"),
          this._popperInstance.setOptions(function (e) {
            return nn(nn({}, e), {
              modifiers: Ur(
                Ur([], e.modifiers, !0),
                [{ name: "eventListeners", enabled: !1 }],
                !1
              ),
            });
          }),
          this._removeClickOutsideListener(),
          this._removeKeydownListener(),
          (this._visible = !1),
          this._options.onHide(this);
      }),
      t
    );
  })();
function Xu() {
  document.querySelectorAll("[data-tooltip-target]").forEach(function (t) {
    var e = t.getAttribute("data-tooltip-target"),
      n = document.getElementById(e);
    if (n) {
      var i = t.getAttribute("data-tooltip-trigger"),
        s = t.getAttribute("data-tooltip-placement");
      new Fm(n, t, {
        placement: s || la.placement,
        triggerType: i || la.triggerType,
      });
    } else console.error('The tooltip element with id "'.concat(e, '" does not exist. Please check the data-tooltip-target attribute.'));
  });
}
typeof window < "u" && ((window.Tooltip = Fm), (window.initTooltips = Xu));
var sn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (sn =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++) {
              e = arguments[n];
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            }
            return t;
          }),
        sn.apply(this, arguments)
      );
    },
  Yr =
    (globalThis && globalThis.__spreadArray) ||
    function (t, e, n) {
      if (n || arguments.length === 2)
        for (var i = 0, s = e.length, r; i < s; i++)
          (r || !(i in e)) &&
            (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
      return t.concat(r || Array.prototype.slice.call(e));
    },
  As = {
    placement: "top",
    offset: 10,
    triggerType: "hover",
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  Bm = (function () {
    function t(e, n, i) {
      e === void 0 && (e = null),
        n === void 0 && (n = null),
        i === void 0 && (i = As),
        (this._targetEl = e),
        (this._triggerEl = n),
        (this._options = sn(sn({}, As), i)),
        (this._popperInstance = this._createPopperInstance()),
        (this._visible = !1),
        this._init();
    }
    return (
      (t.prototype._init = function () {
        this._triggerEl && this._setupEventListeners();
      }),
      (t.prototype._setupEventListeners = function () {
        var e = this,
          n = this._getTriggerEvents();
        n.showEvents.forEach(function (i) {
          e._triggerEl.addEventListener(i, function () {
            e.show();
          }),
            e._targetEl.addEventListener(i, function () {
              e.show();
            });
        }),
          n.hideEvents.forEach(function (i) {
            e._triggerEl.addEventListener(i, function () {
              setTimeout(function () {
                e._targetEl.matches(":hover") || e.hide();
              }, 100);
            }),
              e._targetEl.addEventListener(i, function () {
                setTimeout(function () {
                  e._triggerEl.matches(":hover") || e.hide();
                }, 100);
              });
          });
      }),
      (t.prototype._createPopperInstance = function () {
        return Vu(this._triggerEl, this._targetEl, {
          placement: this._options.placement,
          modifiers: [
            { name: "offset", options: { offset: [0, this._options.offset] } },
          ],
        });
      }),
      (t.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
          case "hover":
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
          case "click":
            return {
              showEvents: ["click", "focus"],
              hideEvents: ["focusout", "blur"],
            };
          case "none":
            return { showEvents: [], hideEvents: [] };
          default:
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
        }
      }),
      (t.prototype._setupKeydownListener = function () {
        var e = this;
        (this._keydownEventListener = function (n) {
          n.key === "Escape" && e.hide();
        }),
          document.body.addEventListener(
            "keydown",
            this._keydownEventListener,
            !0
          );
      }),
      (t.prototype._removeKeydownListener = function () {
        document.body.removeEventListener(
          "keydown",
          this._keydownEventListener,
          !0
        );
      }),
      (t.prototype._setupClickOutsideListener = function () {
        var e = this;
        (this._clickOutsideEventListener = function (n) {
          e._handleClickOutside(n, e._targetEl);
        }),
          document.body.addEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          );
      }),
      (t.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener(
          "click",
          this._clickOutsideEventListener,
          !0
        );
      }),
      (t.prototype._handleClickOutside = function (e, n) {
        var i = e.target;
        i !== n &&
          !n.contains(i) &&
          !this._triggerEl.contains(i) &&
          this.isVisible() &&
          this.hide();
      }),
      (t.prototype.isVisible = function () {
        return this._visible;
      }),
      (t.prototype.toggle = function () {
        this.isVisible() ? this.hide() : this.show(),
          this._options.onToggle(this);
      }),
      (t.prototype.show = function () {
        this._targetEl.classList.remove("opacity-0", "invisible"),
          this._targetEl.classList.add("opacity-100", "visible"),
          this._popperInstance.setOptions(function (e) {
            return sn(sn({}, e), {
              modifiers: Yr(
                Yr([], e.modifiers, !0),
                [{ name: "eventListeners", enabled: !0 }],
                !1
              ),
            });
          }),
          this._setupClickOutsideListener(),
          this._setupKeydownListener(),
          this._popperInstance.update(),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (t.prototype.hide = function () {
        this._targetEl.classList.remove("opacity-100", "visible"),
          this._targetEl.classList.add("opacity-0", "invisible"),
          this._popperInstance.setOptions(function (e) {
            return sn(sn({}, e), {
              modifiers: Yr(
                Yr([], e.modifiers, !0),
                [{ name: "eventListeners", enabled: !1 }],
                !1
              ),
            });
          }),
          this._removeClickOutsideListener(),
          this._removeKeydownListener(),
          (this._visible = !1),
          this._options.onHide(this);
      }),
      t
    );
  })();
function Ku() {
  document.querySelectorAll("[data-popover-target]").forEach(function (t) {
    var e = t.getAttribute("data-popover-target"),
      n = document.getElementById(e);
    if (n) {
      var i = t.getAttribute("data-popover-trigger"),
        s = t.getAttribute("data-popover-placement"),
        r = t.getAttribute("data-popover-offset");
      new Bm(n, t, {
        placement: s || As.placement,
        offset: r ? parseInt(r) : As.offset,
        triggerType: i || As.triggerType,
      });
    } else console.error('The popover element with id "'.concat(e, '" does not exist. Please check the data-popover-target attribute.'));
  });
}
typeof window < "u" && ((window.Popover = Bm), (window.initPopovers = Ku));
var ca =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (ca =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++) {
              e = arguments[n];
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            }
            return t;
          }),
        ca.apply(this, arguments)
      );
    },
  Ec = {
    triggerType: "hover",
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  Hm = (function () {
    function t(e, n, i, s) {
      e === void 0 && (e = null),
        n === void 0 && (n = null),
        i === void 0 && (i = null),
        s === void 0 && (s = Ec),
        (this._parentEl = e),
        (this._triggerEl = n),
        (this._targetEl = i),
        (this._options = ca(ca({}, Ec), s)),
        (this._visible = !1),
        this._init();
    }
    return (
      (t.prototype._init = function () {
        var e = this;
        if (this._triggerEl) {
          var n = this._getTriggerEventTypes(this._options.triggerType);
          n.showEvents.forEach(function (i) {
            e._triggerEl.addEventListener(i, function () {
              e.show();
            }),
              e._targetEl.addEventListener(i, function () {
                e.show();
              });
          }),
            n.hideEvents.forEach(function (i) {
              e._parentEl.addEventListener(i, function () {
                e._parentEl.matches(":hover") || e.hide();
              });
            });
        }
      }),
      (t.prototype.hide = function () {
        this._targetEl.classList.add("hidden"),
          this._triggerEl &&
            this._triggerEl.setAttribute("aria-expanded", "false"),
          (this._visible = !1),
          this._options.onHide(this);
      }),
      (t.prototype.show = function () {
        this._targetEl.classList.remove("hidden"),
          this._triggerEl &&
            this._triggerEl.setAttribute("aria-expanded", "true"),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (t.prototype.toggle = function () {
        this._visible ? this.hide() : this.show();
      }),
      (t.prototype.isHidden = function () {
        return !this._visible;
      }),
      (t.prototype.isVisible = function () {
        return this._visible;
      }),
      (t.prototype._getTriggerEventTypes = function (e) {
        switch (e) {
          case "hover":
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
          case "click":
            return {
              showEvents: ["click", "focus"],
              hideEvents: ["focusout", "blur"],
            };
          case "none":
            return { showEvents: [], hideEvents: [] };
          default:
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
        }
      }),
      t
    );
  })();
function Qu() {
  document.querySelectorAll("[data-dial-init]").forEach(function (t) {
    var e = t.querySelector("[data-dial-toggle]");
    if (e) {
      var n = e.getAttribute("data-dial-toggle"),
        i = document.getElementById(n);
      if (i) {
        var s = e.getAttribute("data-dial-trigger");
        new Hm(t, e, i, { triggerType: s || Ec.triggerType });
      } else
        console.error(
          "Dial with id ".concat(
            n,
            " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"
          )
        );
    } else console.error("Dial with id ".concat(t.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"));
  });
}
typeof window < "u" && ((window.Dial = Hm), (window.initDials = Qu));
function qu() {
  Ou(), Du(), Nu(), Tu(), Wu(), $u(), Uu(), Yu(), Xu(), Ku(), Qu();
}
typeof window < "u" && (window.initFlowbite = qu);
var S_ = new yx("load", [Ou, Du, Nu, Tu, Wu, $u, Uu, Yu, Xu, Ku, Qu]);
S_.init();
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function _r(t) {
  return (t + 0.5) | 0;
}
const cn = (t, e, n) => Math.max(Math.min(t, n), e);
function ys(t) {
  return cn(_r(t * 2.55), 0, 255);
}
function bn(t) {
  return cn(_r(t * 255), 0, 255);
}
function Ft(t) {
  return cn(_r(t / 2.55) / 100, 0, 1);
}
function Wh(t) {
  return cn(_r(t * 100), 0, 100);
}
const it = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  jc = [..."0123456789ABCDEF"],
  C_ = (t) => jc[t & 15],
  E_ = (t) => jc[(t & 240) >> 4] + jc[t & 15],
  Xr = (t) => (t & 240) >> 4 === (t & 15),
  j_ = (t) => Xr(t.r) && Xr(t.g) && Xr(t.b) && Xr(t.a);
function M_(t) {
  var e = t.length,
    n;
  return (
    t[0] === "#" &&
      (e === 4 || e === 5
        ? (n = {
            r: 255 & (it[t[1]] * 17),
            g: 255 & (it[t[2]] * 17),
            b: 255 & (it[t[3]] * 17),
            a: e === 5 ? it[t[4]] * 17 : 255,
          })
        : (e === 7 || e === 9) &&
          (n = {
            r: (it[t[1]] << 4) | it[t[2]],
            g: (it[t[3]] << 4) | it[t[4]],
            b: (it[t[5]] << 4) | it[t[6]],
            a: e === 9 ? (it[t[7]] << 4) | it[t[8]] : 255,
          })),
    n
  );
}
const P_ = (t, e) => (t < 255 ? e(t) : "");
function L_(t) {
  var e = j_(t) ? C_ : E_;
  return t ? "#" + e(t.r) + e(t.g) + e(t.b) + P_(t.a, e) : void 0;
}
const O_ =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Vm(t, e, n) {
  const i = e * Math.min(n, 1 - n),
    s = (r, o = (r + t / 30) % 12) =>
      n - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [s(0), s(8), s(4)];
}
function D_(t, e, n) {
  const i = (s, r = (s + t / 60) % 6) =>
    n - n * e * Math.max(Math.min(r, 4 - r, 1), 0);
  return [i(5), i(3), i(1)];
}
function N_(t, e, n) {
  const i = Vm(t, 1, 0.5);
  let s;
  for (e + n > 1 && ((s = 1 / (e + n)), (e *= s), (n *= s)), s = 0; s < 3; s++)
    (i[s] *= 1 - e - n), (i[s] += e);
  return i;
}
function T_(t, e, n, i, s) {
  return t === s
    ? (e - n) / i + (e < n ? 6 : 0)
    : e === s
    ? (n - t) / i + 2
    : (t - e) / i + 4;
}
function Gu(t) {
  const n = t.r / 255,
    i = t.g / 255,
    s = t.b / 255,
    r = Math.max(n, i, s),
    o = Math.min(n, i, s),
    a = (r + o) / 2;
  let l, c, u;
  return (
    r !== o &&
      ((u = r - o),
      (c = a > 0.5 ? u / (2 - r - o) : u / (r + o)),
      (l = T_(n, i, s, u, r)),
      (l = l * 60 + 0.5)),
    [l | 0, c || 0, a]
  );
}
function Zu(t, e, n, i) {
  return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(bn);
}
function Ju(t, e, n) {
  return Zu(Vm, t, e, n);
}
function A_(t, e, n) {
  return Zu(N_, t, e, n);
}
function R_(t, e, n) {
  return Zu(D_, t, e, n);
}
function Wm(t) {
  return ((t % 360) + 360) % 360;
}
function I_(t) {
  const e = O_.exec(t);
  let n = 255,
    i;
  if (!e) return;
  e[5] !== i && (n = e[6] ? ys(+e[5]) : bn(+e[5]));
  const s = Wm(+e[2]),
    r = +e[3] / 100,
    o = +e[4] / 100;
  return (
    e[1] === "hwb"
      ? (i = A_(s, r, o))
      : e[1] === "hsv"
      ? (i = R_(s, r, o))
      : (i = Ju(s, r, o)),
    { r: i[0], g: i[1], b: i[2], a: n }
  );
}
function z_(t, e) {
  var n = Gu(t);
  (n[0] = Wm(n[0] + e)), (n = Ju(n)), (t.r = n[0]), (t.g = n[1]), (t.b = n[2]);
}
function F_(t) {
  if (!t) return;
  const e = Gu(t),
    n = e[0],
    i = Wh(e[1]),
    s = Wh(e[2]);
  return t.a < 255
    ? `hsla(${n}, ${i}%, ${s}%, ${Ft(t.a)})`
    : `hsl(${n}, ${i}%, ${s}%)`;
}
const $h = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  Uh = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function B_() {
  const t = {},
    e = Object.keys(Uh),
    n = Object.keys($h);
  let i, s, r, o, a;
  for (i = 0; i < e.length; i++) {
    for (o = a = e[i], s = 0; s < n.length; s++)
      (r = n[s]), (a = a.replace(r, $h[r]));
    (r = parseInt(Uh[o], 16)),
      (t[a] = [(r >> 16) & 255, (r >> 8) & 255, r & 255]);
  }
  return t;
}
let Kr;
function H_(t) {
  Kr || ((Kr = B_()), (Kr.transparent = [0, 0, 0, 0]));
  const e = Kr[t.toLowerCase()];
  return e && { r: e[0], g: e[1], b: e[2], a: e.length === 4 ? e[3] : 255 };
}
const V_ =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function W_(t) {
  const e = V_.exec(t);
  let n = 255,
    i,
    s,
    r;
  if (e) {
    if (e[7] !== i) {
      const o = +e[7];
      n = e[8] ? ys(o) : cn(o * 255, 0, 255);
    }
    return (
      (i = +e[1]),
      (s = +e[3]),
      (r = +e[5]),
      (i = 255 & (e[2] ? ys(i) : cn(i, 0, 255))),
      (s = 255 & (e[4] ? ys(s) : cn(s, 0, 255))),
      (r = 255 & (e[6] ? ys(r) : cn(r, 0, 255))),
      { r: i, g: s, b: r, a: n }
    );
  }
}
function $_(t) {
  return (
    t &&
    (t.a < 255
      ? `rgba(${t.r}, ${t.g}, ${t.b}, ${Ft(t.a)})`
      : `rgb(${t.r}, ${t.g}, ${t.b})`)
  );
}
const xl = (t) =>
    t <= 0.0031308 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - 0.055,
  fi = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
function U_(t, e, n) {
  const i = fi(Ft(t.r)),
    s = fi(Ft(t.g)),
    r = fi(Ft(t.b));
  return {
    r: bn(xl(i + n * (fi(Ft(e.r)) - i))),
    g: bn(xl(s + n * (fi(Ft(e.g)) - s))),
    b: bn(xl(r + n * (fi(Ft(e.b)) - r))),
    a: t.a + n * (e.a - t.a),
  };
}
function Qr(t, e, n) {
  if (t) {
    let i = Gu(t);
    (i[e] = Math.max(0, Math.min(i[e] + i[e] * n, e === 0 ? 360 : 1))),
      (i = Ju(i)),
      (t.r = i[0]),
      (t.g = i[1]),
      (t.b = i[2]);
  }
}
function $m(t, e) {
  return t && Object.assign(e || {}, t);
}
function Yh(t) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(t)
      ? t.length >= 3 &&
        ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
        t.length > 3 && (e.a = bn(t[3])))
      : ((e = $m(t, { r: 0, g: 0, b: 0, a: 1 })), (e.a = bn(e.a))),
    e
  );
}
function Y_(t) {
  return t.charAt(0) === "r" ? W_(t) : I_(t);
}
class rr {
  constructor(e) {
    if (e instanceof rr) return e;
    const n = typeof e;
    let i;
    n === "object"
      ? (i = Yh(e))
      : n === "string" && (i = M_(e) || H_(e) || Y_(e)),
      (this._rgb = i),
      (this._valid = !!i);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = $m(this._rgb);
    return e && (e.a = Ft(e.a)), e;
  }
  set rgb(e) {
    this._rgb = Yh(e);
  }
  rgbString() {
    return this._valid ? $_(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? L_(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? F_(this._rgb) : void 0;
  }
  mix(e, n) {
    if (e) {
      const i = this.rgb,
        s = e.rgb;
      let r;
      const o = n === r ? 0.5 : n,
        a = 2 * o - 1,
        l = i.a - s.a,
        c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      (r = 1 - c),
        (i.r = 255 & (c * i.r + r * s.r + 0.5)),
        (i.g = 255 & (c * i.g + r * s.g + 0.5)),
        (i.b = 255 & (c * i.b + r * s.b + 0.5)),
        (i.a = o * i.a + (1 - o) * s.a),
        (this.rgb = i);
    }
    return this;
  }
  interpolate(e, n) {
    return e && (this._rgb = U_(this._rgb, e._rgb, n)), this;
  }
  clone() {
    return new rr(this.rgb);
  }
  alpha(e) {
    return (this._rgb.a = bn(e)), this;
  }
  clearer(e) {
    const n = this._rgb;
    return (n.a *= 1 - e), this;
  }
  greyscale() {
    const e = this._rgb,
      n = _r(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
    return (e.r = e.g = e.b = n), this;
  }
  opaquer(e) {
    const n = this._rgb;
    return (n.a *= 1 + e), this;
  }
  negate() {
    const e = this._rgb;
    return (e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this;
  }
  lighten(e) {
    return Qr(this._rgb, 2, e), this;
  }
  darken(e) {
    return Qr(this._rgb, 2, -e), this;
  }
  saturate(e) {
    return Qr(this._rgb, 1, e), this;
  }
  desaturate(e) {
    return Qr(this._rgb, 1, -e), this;
  }
  rotate(e) {
    return z_(this._rgb, e), this;
  }
}
/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ function Tt() {}
const X_ = (() => {
  let t = 0;
  return () => t++;
})();
function K(t) {
  return t === null || typeof t > "u";
}
function ne(t) {
  if (Array.isArray && Array.isArray(t)) return !0;
  const e = Object.prototype.toString.call(t);
  return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]";
}
function $(t) {
  return t !== null && Object.prototype.toString.call(t) === "[object Object]";
}
function _e(t) {
  return (typeof t == "number" || t instanceof Number) && isFinite(+t);
}
function Qe(t, e) {
  return _e(t) ? t : e;
}
function B(t, e) {
  return typeof t > "u" ? e : t;
}
const K_ = (t, e) =>
    typeof t == "string" && t.endsWith("%") ? parseFloat(t) / 100 : +t / e,
  Um = (t, e) =>
    typeof t == "string" && t.endsWith("%") ? (parseFloat(t) / 100) * e : +t;
function q(t, e, n) {
  if (t && typeof t.call == "function") return t.apply(n, e);
}
function X(t, e, n, i) {
  let s, r, o;
  if (ne(t))
    if (((r = t.length), i)) for (s = r - 1; s >= 0; s--) e.call(n, t[s], s);
    else for (s = 0; s < r; s++) e.call(n, t[s], s);
  else if ($(t))
    for (o = Object.keys(t), r = o.length, s = 0; s < r; s++)
      e.call(n, t[o[s]], o[s]);
}
function ua(t, e) {
  let n, i, s, r;
  if (!t || !e || t.length !== e.length) return !1;
  for (n = 0, i = t.length; n < i; ++n)
    if (
      ((s = t[n]),
      (r = e[n]),
      s.datasetIndex !== r.datasetIndex || s.index !== r.index)
    )
      return !1;
  return !0;
}
function da(t) {
  if (ne(t)) return t.map(da);
  if ($(t)) {
    const e = Object.create(null),
      n = Object.keys(t),
      i = n.length;
    let s = 0;
    for (; s < i; ++s) e[n[s]] = da(t[n[s]]);
    return e;
  }
  return t;
}
function Ym(t) {
  return ["__proto__", "prototype", "constructor"].indexOf(t) === -1;
}
function Q_(t, e, n, i) {
  if (!Ym(t)) return;
  const s = e[t],
    r = n[t];
  $(s) && $(r) ? or(s, r, i) : (e[t] = da(r));
}
function or(t, e, n) {
  const i = ne(e) ? e : [e],
    s = i.length;
  if (!$(t)) return t;
  n = n || {};
  const r = n.merger || Q_;
  let o;
  for (let a = 0; a < s; ++a) {
    if (((o = i[a]), !$(o))) continue;
    const l = Object.keys(o);
    for (let c = 0, u = l.length; c < u; ++c) r(l[c], t, o, n);
  }
  return t;
}
function Rs(t, e) {
  return or(t, e, { merger: q_ });
}
function q_(t, e, n) {
  if (!Ym(t)) return;
  const i = e[t],
    s = n[t];
  $(i) && $(s)
    ? Rs(i, s)
    : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = da(s));
}
const Xh = { "": (t) => t, x: (t) => t.x, y: (t) => t.y };
function G_(t) {
  const e = t.split("."),
    n = [];
  let i = "";
  for (const s of e)
    (i += s),
      i.endsWith("\\") ? (i = i.slice(0, -1) + ".") : (n.push(i), (i = ""));
  return n;
}
function Z_(t) {
  const e = G_(t);
  return (n) => {
    for (const i of e) {
      if (i === "") break;
      n = n && n[i];
    }
    return n;
  };
}
function Cn(t, e) {
  return (Xh[e] || (Xh[e] = Z_(e)))(t);
}
function ed(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
const ar = (t) => typeof t < "u",
  En = (t) => typeof t == "function",
  Kh = (t, e) => {
    if (t.size !== e.size) return !1;
    for (const n of t) if (!e.has(n)) return !1;
    return !0;
  };
function J_(t) {
  return t.type === "mouseup" || t.type === "click" || t.type === "contextmenu";
}
const se = Math.PI,
  ie = 2 * se,
  eb = ie + se,
  ha = Number.POSITIVE_INFINITY,
  tb = se / 180,
  ce = se / 2,
  Tn = se / 4,
  Qh = (se * 2) / 3,
  un = Math.log10,
  Ot = Math.sign;
function Is(t, e, n) {
  return Math.abs(t - e) < n;
}
function qh(t) {
  const e = Math.round(t);
  t = Is(t, e, t / 1e3) ? e : t;
  const n = Math.pow(10, Math.floor(un(t))),
    i = t / n;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
}
function nb(t) {
  const e = [],
    n = Math.sqrt(t);
  let i;
  for (i = 1; i < n; i++) t % i === 0 && (e.push(i), e.push(t / i));
  return n === (n | 0) && e.push(n), e.sort((s, r) => s - r).pop(), e;
}
function lr(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function ib(t, e) {
  const n = Math.round(t);
  return n - e <= t && n + e >= t;
}
function Xm(t, e, n) {
  let i, s, r;
  for (i = 0, s = t.length; i < s; i++)
    (r = t[i][n]),
      isNaN(r) || ((e.min = Math.min(e.min, r)), (e.max = Math.max(e.max, r)));
}
function xt(t) {
  return t * (se / 180);
}
function td(t) {
  return t * (180 / se);
}
function Gh(t) {
  if (!_e(t)) return;
  let e = 1,
    n = 0;
  for (; Math.round(t * e) / e !== t; ) (e *= 10), n++;
  return n;
}
function Km(t, e) {
  const n = e.x - t.x,
    i = e.y - t.y,
    s = Math.sqrt(n * n + i * i);
  let r = Math.atan2(i, n);
  return r < -0.5 * se && (r += ie), { angle: r, distance: s };
}
function Mc(t, e) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function sb(t, e) {
  return ((t - e + eb) % ie) - se;
}
function vt(t) {
  return ((t % ie) + ie) % ie;
}
function cr(t, e, n, i) {
  const s = vt(t),
    r = vt(e),
    o = vt(n),
    a = vt(r - s),
    l = vt(o - s),
    c = vt(s - r),
    u = vt(s - o);
  return s === r || s === o || (i && r === o) || (a > l && c < u);
}
function Le(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function rb(t) {
  return Le(t, -32768, 32767);
}
function dn(t, e, n, i = 1e-6) {
  return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i;
}
function nd(t, e, n) {
  n = n || ((o) => t[o] < e);
  let i = t.length - 1,
    s = 0,
    r;
  for (; i - s > 1; ) (r = (s + i) >> 1), n(r) ? (s = r) : (i = r);
  return { lo: s, hi: i };
}
const Kn = (t, e, n, i) =>
    nd(
      t,
      n,
      i
        ? (s) => {
            const r = t[s][e];
            return r < n || (r === n && t[s + 1][e] === n);
          }
        : (s) => t[s][e] < n
    ),
  ob = (t, e, n) => nd(t, n, (i) => t[i][e] >= n);
function ab(t, e, n) {
  let i = 0,
    s = t.length;
  for (; i < s && t[i] < e; ) i++;
  for (; s > i && t[s - 1] > n; ) s--;
  return i > 0 || s < t.length ? t.slice(i, s) : t;
}
const Qm = ["push", "pop", "shift", "splice", "unshift"];
function lb(t, e) {
  if (t._chartjs) {
    t._chartjs.listeners.push(e);
    return;
  }
  Object.defineProperty(t, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [e] },
  }),
    Qm.forEach((n) => {
      const i = "_onData" + ed(n),
        s = t[n];
      Object.defineProperty(t, n, {
        configurable: !0,
        enumerable: !1,
        value(...r) {
          const o = s.apply(this, r);
          return (
            t._chartjs.listeners.forEach((a) => {
              typeof a[i] == "function" && a[i](...r);
            }),
            o
          );
        },
      });
    });
}
function Zh(t, e) {
  const n = t._chartjs;
  if (!n) return;
  const i = n.listeners,
    s = i.indexOf(e);
  s !== -1 && i.splice(s, 1),
    !(i.length > 0) &&
      (Qm.forEach((r) => {
        delete t[r];
      }),
      delete t._chartjs);
}
function qm(t) {
  const e = new Set(t);
  return e.size === t.length ? t : Array.from(e);
}
const Gm = (function () {
  return typeof window > "u"
    ? function (t) {
        return t();
      }
    : window.requestAnimationFrame;
})();
function Zm(t, e) {
  let n = [],
    i = !1;
  return function (...s) {
    (n = s),
      i ||
        ((i = !0),
        Gm.call(window, () => {
          (i = !1), t.apply(e, n);
        }));
  };
}
function cb(t, e) {
  let n;
  return function (...i) {
    return (
      e ? (clearTimeout(n), (n = setTimeout(t, e, i))) : t.apply(this, i), e
    );
  };
}
const id = (t) => (t === "start" ? "left" : t === "end" ? "right" : "center"),
  Me = (t, e, n) => (t === "start" ? e : t === "end" ? n : (e + n) / 2),
  ub = (t, e, n, i) =>
    t === (i ? "left" : "right") ? n : t === "center" ? (e + n) / 2 : e;
function db(t, e, n) {
  const i = e.length;
  let s = 0,
    r = i;
  if (t._sorted) {
    const { iScale: o, _parsed: a } = t,
      l = o.axis,
      { min: c, max: u, minDefined: d, maxDefined: h } = o.getUserBounds();
    d &&
      (s = Le(
        Math.min(
          Kn(a, o.axis, c).lo,
          n ? i : Kn(e, l, o.getPixelForValue(c)).lo
        ),
        0,
        i - 1
      )),
      h
        ? (r =
            Le(
              Math.max(
                Kn(a, o.axis, u, !0).hi + 1,
                n ? 0 : Kn(e, l, o.getPixelForValue(u), !0).hi + 1
              ),
              s,
              i
            ) - s)
        : (r = i - s);
  }
  return { start: s, count: r };
}
function hb(t) {
  const { xScale: e, yScale: n, _scaleRanges: i } = t,
    s = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
  if (!i) return (t._scaleRanges = s), !0;
  const r =
    i.xmin !== e.min ||
    i.xmax !== e.max ||
    i.ymin !== n.min ||
    i.ymax !== n.max;
  return Object.assign(i, s), r;
}
const qr = (t) => t === 0 || t === 1,
  Jh = (t, e, n) =>
    -(Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * ie) / n)),
  ef = (t, e, n) => Math.pow(2, -10 * t) * Math.sin(((t - e) * ie) / n) + 1,
  zs = {
    linear: (t) => t,
    easeInQuad: (t) => t * t,
    easeOutQuad: (t) => -t * (t - 2),
    easeInOutQuad: (t) =>
      (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
    easeInCubic: (t) => t * t * t,
    easeOutCubic: (t) => (t -= 1) * t * t + 1,
    easeInOutCubic: (t) =>
      (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
    easeInQuart: (t) => t * t * t * t,
    easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
    easeInOutQuart: (t) =>
      (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: (t) => t * t * t * t * t,
    easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
    easeInOutQuint: (t) =>
      (t /= 0.5) < 1
        ? 0.5 * t * t * t * t * t
        : 0.5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: (t) => -Math.cos(t * ce) + 1,
    easeOutSine: (t) => Math.sin(t * ce),
    easeInOutSine: (t) => -0.5 * (Math.cos(se * t) - 1),
    easeInExpo: (t) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
    easeOutExpo: (t) => (t === 1 ? 1 : -Math.pow(2, -10 * t) + 1),
    easeInOutExpo: (t) =>
      qr(t)
        ? t
        : t < 0.5
        ? 0.5 * Math.pow(2, 10 * (t * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
    easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
    easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: (t) =>
      (t /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - t * t) - 1)
        : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: (t) => (qr(t) ? t : Jh(t, 0.075, 0.3)),
    easeOutElastic: (t) => (qr(t) ? t : ef(t, 0.075, 0.3)),
    easeInOutElastic(t) {
      return qr(t)
        ? t
        : t < 0.5
        ? 0.5 * Jh(t * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * ef(t * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(t) {
      return t * t * ((1.70158 + 1) * t - 1.70158);
    },
    easeOutBack(t) {
      return (t -= 1) * t * ((1.70158 + 1) * t + 1.70158) + 1;
    },
    easeInOutBack(t) {
      let e = 1.70158;
      return (t /= 0.5) < 1
        ? 0.5 * (t * t * (((e *= 1.525) + 1) * t - e))
        : 0.5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
    },
    easeInBounce: (t) => 1 - zs.easeOutBounce(1 - t),
    easeOutBounce(t) {
      return t < 1 / 2.75
        ? 7.5625 * t * t
        : t < 2 / 2.75
        ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
        : t < 2.5 / 2.75
        ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
        : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    },
    easeInOutBounce: (t) =>
      t < 0.5
        ? zs.easeInBounce(t * 2) * 0.5
        : zs.easeOutBounce(t * 2 - 1) * 0.5 + 0.5,
  };
function sd(t) {
  if (t && typeof t == "object") {
    const e = t.toString();
    return e === "[object CanvasPattern]" || e === "[object CanvasGradient]";
  }
  return !1;
}
function tf(t) {
  return sd(t) ? t : new rr(t);
}
function _l(t) {
  return sd(t) ? t : new rr(t).saturate(0.5).darken(0.1).hexString();
}
const fb = ["x", "y", "borderWidth", "radius", "tension"],
  pb = ["color", "borderColor", "backgroundColor"];
function gb(t) {
  t.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    t.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (e) =>
        e !== "onProgress" && e !== "onComplete" && e !== "fn",
    }),
    t.set("animations", {
      colors: { type: "color", properties: pb },
      numbers: { type: "number", properties: fb },
    }),
    t.describe("animations", { _fallback: "animation" }),
    t.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (e) => e | 0 },
        },
      },
    });
}
function mb(t) {
  t.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const nf = new Map();
function vb(t, e) {
  e = e || {};
  const n = t + JSON.stringify(e);
  let i = nf.get(n);
  return i || ((i = new Intl.NumberFormat(t, e)), nf.set(n, i)), i;
}
function br(t, e, n) {
  return vb(e, n).format(t);
}
const Jm = {
  values(t) {
    return ne(t) ? t : "" + t;
  },
  numeric(t, e, n) {
    if (t === 0) return "0";
    const i = this.chart.options.locale;
    let s,
      r = t;
    if (n.length > 1) {
      const c = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"), (r = yb(t, n));
    }
    const o = un(Math.abs(r)),
      a = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
      l = { notation: s, minimumFractionDigits: a, maximumFractionDigits: a };
    return Object.assign(l, this.options.ticks.format), br(t, i, l);
  },
  logarithmic(t, e, n) {
    if (t === 0) return "0";
    const i = n[e].significand || t / Math.pow(10, Math.floor(un(t)));
    return [1, 2, 3, 5, 10, 15].includes(i) || e > 0.8 * n.length
      ? Jm.numeric.call(this, t, e, n)
      : "";
  },
};
function yb(t, e) {
  let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
  return Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t)), n;
}
var za = { formatters: Jm };
function xb(t) {
  t.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (e, n) => n.lineWidth,
      tickColor: (e, n) => n.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: za.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    t.route("scale.ticks", "color", "", "color"),
    t.route("scale.grid", "color", "", "borderColor"),
    t.route("scale.border", "color", "", "borderColor"),
    t.route("scale.title", "color", "", "color"),
    t.describe("scale", {
      _fallback: !1,
      _scriptable: (e) =>
        !e.startsWith("before") &&
        !e.startsWith("after") &&
        e !== "callback" &&
        e !== "parser",
      _indexable: (e) =>
        e !== "borderDash" && e !== "tickBorderDash" && e !== "dash",
    }),
    t.describe("scales", { _fallback: "scale" }),
    t.describe("scale.ticks", {
      _scriptable: (e) => e !== "backdropPadding" && e !== "callback",
      _indexable: (e) => e !== "backdropPadding",
    });
}
const oi = Object.create(null),
  Pc = Object.create(null);
function Fs(t, e) {
  if (!e) return t;
  const n = e.split(".");
  for (let i = 0, s = n.length; i < s; ++i) {
    const r = n[i];
    t = t[r] || (t[r] = Object.create(null));
  }
  return t;
}
function bl(t, e, n) {
  return typeof e == "string" ? or(Fs(t, e), n) : or(Fs(t, ""), e);
}
class _b {
  constructor(e, n) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (i, s) => _l(s.backgroundColor)),
      (this.hoverBorderColor = (i, s) => _l(s.borderColor)),
      (this.hoverColor = (i, s) => _l(s.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(e),
      this.apply(n);
  }
  set(e, n) {
    return bl(this, e, n);
  }
  get(e) {
    return Fs(this, e);
  }
  describe(e, n) {
    return bl(Pc, e, n);
  }
  override(e, n) {
    return bl(oi, e, n);
  }
  route(e, n, i, s) {
    const r = Fs(this, e),
      o = Fs(this, i),
      a = "_" + n;
    Object.defineProperties(r, {
      [a]: { value: r[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[a],
            c = o[s];
          return $(l) ? Object.assign({}, c, l) : B(l, c);
        },
        set(l) {
          this[a] = l;
        },
      },
    });
  }
  apply(e) {
    e.forEach((n) => n(this));
  }
}
var ue = new _b(
  {
    _scriptable: (t) => !t.startsWith("on"),
    _indexable: (t) => t !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [gb, mb, xb]
);
function bb(t) {
  return !t || K(t.size) || K(t.family)
    ? null
    : (t.style ? t.style + " " : "") +
        (t.weight ? t.weight + " " : "") +
        t.size +
        "px " +
        t.family;
}
function fa(t, e, n, i, s) {
  let r = e[s];
  return (
    r || ((r = e[s] = t.measureText(s).width), n.push(s)), r > i && (i = r), i
  );
}
function wb(t, e, n, i) {
  i = i || {};
  let s = (i.data = i.data || {}),
    r = (i.garbageCollect = i.garbageCollect || []);
  i.font !== e &&
    ((s = i.data = {}), (r = i.garbageCollect = []), (i.font = e)),
    t.save(),
    (t.font = e);
  let o = 0;
  const a = n.length;
  let l, c, u, d, h;
  for (l = 0; l < a; l++)
    if (((d = n[l]), d != null && !ne(d))) o = fa(t, s, r, o, d);
    else if (ne(d))
      for (c = 0, u = d.length; c < u; c++)
        (h = d[c]), h != null && !ne(h) && (o = fa(t, s, r, o, h));
  t.restore();
  const p = r.length / 2;
  if (p > n.length) {
    for (l = 0; l < p; l++) delete s[r[l]];
    r.splice(0, p);
  }
  return o;
}
function An(t, e, n) {
  const i = t.currentDevicePixelRatio,
    s = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((e - s) * i) / i + s;
}
function sf(t, e) {
  (e = e || t.getContext("2d")),
    e.save(),
    e.resetTransform(),
    e.clearRect(0, 0, t.width, t.height),
    e.restore();
}
function Lc(t, e, n, i) {
  e0(t, e, n, i, null);
}
function e0(t, e, n, i, s) {
  let r, o, a, l, c, u, d, h;
  const p = e.pointStyle,
    m = e.rotation,
    y = e.radius;
  let _ = (m || 0) * tb;
  if (
    p &&
    typeof p == "object" &&
    ((r = p.toString()),
    r === "[object HTMLImageElement]" || r === "[object HTMLCanvasElement]")
  ) {
    t.save(),
      t.translate(n, i),
      t.rotate(_),
      t.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height),
      t.restore();
    return;
  }
  if (!(isNaN(y) || y <= 0)) {
    switch ((t.beginPath(), p)) {
      default:
        s ? t.ellipse(n, i, s / 2, y, 0, 0, ie) : t.arc(n, i, y, 0, ie),
          t.closePath();
        break;
      case "triangle":
        (u = s ? s / 2 : y),
          t.moveTo(n + Math.sin(_) * u, i - Math.cos(_) * y),
          (_ += Qh),
          t.lineTo(n + Math.sin(_) * u, i - Math.cos(_) * y),
          (_ += Qh),
          t.lineTo(n + Math.sin(_) * u, i - Math.cos(_) * y),
          t.closePath();
        break;
      case "rectRounded":
        (c = y * 0.516),
          (l = y - c),
          (o = Math.cos(_ + Tn) * l),
          (d = Math.cos(_ + Tn) * (s ? s / 2 - c : l)),
          (a = Math.sin(_ + Tn) * l),
          (h = Math.sin(_ + Tn) * (s ? s / 2 - c : l)),
          t.arc(n - d, i - a, c, _ - se, _ - ce),
          t.arc(n + h, i - o, c, _ - ce, _),
          t.arc(n + d, i + a, c, _, _ + ce),
          t.arc(n - h, i + o, c, _ + ce, _ + se),
          t.closePath();
        break;
      case "rect":
        if (!m) {
          (l = Math.SQRT1_2 * y),
            (u = s ? s / 2 : l),
            t.rect(n - u, i - l, 2 * u, 2 * l);
          break;
        }
        _ += Tn;
      case "rectRot":
        (d = Math.cos(_) * (s ? s / 2 : y)),
          (o = Math.cos(_) * y),
          (a = Math.sin(_) * y),
          (h = Math.sin(_) * (s ? s / 2 : y)),
          t.moveTo(n - d, i - a),
          t.lineTo(n + h, i - o),
          t.lineTo(n + d, i + a),
          t.lineTo(n - h, i + o),
          t.closePath();
        break;
      case "crossRot":
        _ += Tn;
      case "cross":
        (d = Math.cos(_) * (s ? s / 2 : y)),
          (o = Math.cos(_) * y),
          (a = Math.sin(_) * y),
          (h = Math.sin(_) * (s ? s / 2 : y)),
          t.moveTo(n - d, i - a),
          t.lineTo(n + d, i + a),
          t.moveTo(n + h, i - o),
          t.lineTo(n - h, i + o);
        break;
      case "star":
        (d = Math.cos(_) * (s ? s / 2 : y)),
          (o = Math.cos(_) * y),
          (a = Math.sin(_) * y),
          (h = Math.sin(_) * (s ? s / 2 : y)),
          t.moveTo(n - d, i - a),
          t.lineTo(n + d, i + a),
          t.moveTo(n + h, i - o),
          t.lineTo(n - h, i + o),
          (_ += Tn),
          (d = Math.cos(_) * (s ? s / 2 : y)),
          (o = Math.cos(_) * y),
          (a = Math.sin(_) * y),
          (h = Math.sin(_) * (s ? s / 2 : y)),
          t.moveTo(n - d, i - a),
          t.lineTo(n + d, i + a),
          t.moveTo(n + h, i - o),
          t.lineTo(n - h, i + o);
        break;
      case "line":
        (o = s ? s / 2 : Math.cos(_) * y),
          (a = Math.sin(_) * y),
          t.moveTo(n - o, i - a),
          t.lineTo(n + o, i + a);
        break;
      case "dash":
        t.moveTo(n, i),
          t.lineTo(n + Math.cos(_) * (s ? s / 2 : y), i + Math.sin(_) * y);
        break;
      case !1:
        t.closePath();
        break;
    }
    t.fill(), e.borderWidth > 0 && t.stroke();
  }
}
function Vt(t, e, n) {
  return (
    (n = n || 0.5),
    !e ||
      (t &&
        t.x > e.left - n &&
        t.x < e.right + n &&
        t.y > e.top - n &&
        t.y < e.bottom + n)
  );
}
function rd(t, e) {
  t.save(),
    t.beginPath(),
    t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
    t.clip();
}
function od(t) {
  t.restore();
}
function kb(t, e, n, i, s) {
  if (!e) return t.lineTo(n.x, n.y);
  if (s === "middle") {
    const r = (e.x + n.x) / 2;
    t.lineTo(r, e.y), t.lineTo(r, n.y);
  } else (s === "after") != !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
  t.lineTo(n.x, n.y);
}
function Sb(t, e, n, i) {
  if (!e) return t.lineTo(n.x, n.y);
  t.bezierCurveTo(
    i ? e.cp1x : e.cp2x,
    i ? e.cp1y : e.cp2y,
    i ? n.cp2x : n.cp1x,
    i ? n.cp2y : n.cp1y,
    n.x,
    n.y
  );
}
function Cb(t, e) {
  e.translation && t.translate(e.translation[0], e.translation[1]),
    K(e.rotation) || t.rotate(e.rotation),
    e.color && (t.fillStyle = e.color),
    e.textAlign && (t.textAlign = e.textAlign),
    e.textBaseline && (t.textBaseline = e.textBaseline);
}
function Eb(t, e, n, i, s) {
  if (s.strikethrough || s.underline) {
    const r = t.measureText(i),
      o = e - r.actualBoundingBoxLeft,
      a = e + r.actualBoundingBoxRight,
      l = n - r.actualBoundingBoxAscent,
      c = n + r.actualBoundingBoxDescent,
      u = s.strikethrough ? (l + c) / 2 : c;
    (t.strokeStyle = t.fillStyle),
      t.beginPath(),
      (t.lineWidth = s.decorationWidth || 2),
      t.moveTo(o, u),
      t.lineTo(a, u),
      t.stroke();
  }
}
function jb(t, e) {
  const n = t.fillStyle;
  (t.fillStyle = e.color),
    t.fillRect(e.left, e.top, e.width, e.height),
    (t.fillStyle = n);
}
function ai(t, e, n, i, s, r = {}) {
  const o = ne(e) ? e : [e],
    a = r.strokeWidth > 0 && r.strokeColor !== "";
  let l, c;
  for (t.save(), t.font = s.string, Cb(t, r), l = 0; l < o.length; ++l)
    (c = o[l]),
      r.backdrop && jb(t, r.backdrop),
      a &&
        (r.strokeColor && (t.strokeStyle = r.strokeColor),
        K(r.strokeWidth) || (t.lineWidth = r.strokeWidth),
        t.strokeText(c, n, i, r.maxWidth)),
      t.fillText(c, n, i, r.maxWidth),
      Eb(t, n, i, c, r),
      (i += Number(s.lineHeight));
  t.restore();
}
function ur(t, e) {
  const { x: n, y: i, w: s, h: r, radius: o } = e;
  t.arc(n + o.topLeft, i + o.topLeft, o.topLeft, -ce, se, !0),
    t.lineTo(n, i + r - o.bottomLeft),
    t.arc(n + o.bottomLeft, i + r - o.bottomLeft, o.bottomLeft, se, ce, !0),
    t.lineTo(n + s - o.bottomRight, i + r),
    t.arc(
      n + s - o.bottomRight,
      i + r - o.bottomRight,
      o.bottomRight,
      ce,
      0,
      !0
    ),
    t.lineTo(n + s, i + o.topRight),
    t.arc(n + s - o.topRight, i + o.topRight, o.topRight, 0, -ce, !0),
    t.lineTo(n + o.topLeft, i);
}
const Mb = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  Pb = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Lb(t, e) {
  const n = ("" + t).match(Mb);
  if (!n || n[1] === "normal") return e * 1.2;
  switch (((t = +n[2]), n[3])) {
    case "px":
      return t;
    case "%":
      t /= 100;
      break;
  }
  return e * t;
}
const Ob = (t) => +t || 0;
function ad(t, e) {
  const n = {},
    i = $(e),
    s = i ? Object.keys(e) : e,
    r = $(t) ? (i ? (o) => B(t[o], t[e[o]]) : (o) => t[o]) : () => t;
  for (const o of s) n[o] = Ob(r(o));
  return n;
}
function t0(t) {
  return ad(t, { top: "y", right: "x", bottom: "y", left: "x" });
}
function Zn(t) {
  return ad(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function De(t) {
  const e = t0(t);
  return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
}
function ve(t, e) {
  (t = t || {}), (e = e || ue.font);
  let n = B(t.size, e.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let i = B(t.style, e.style);
  i &&
    !("" + i).match(Pb) &&
    (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0));
  const s = {
    family: B(t.family, e.family),
    lineHeight: Lb(B(t.lineHeight, e.lineHeight), n),
    size: n,
    style: i,
    weight: B(t.weight, e.weight),
    string: "",
  };
  return (s.string = bb(s)), s;
}
function Gr(t, e, n, i) {
  let s = !0,
    r,
    o,
    a;
  for (r = 0, o = t.length; r < o; ++r)
    if (
      ((a = t[r]),
      a !== void 0 &&
        (e !== void 0 && typeof a == "function" && ((a = a(e)), (s = !1)),
        n !== void 0 && ne(a) && ((a = a[n % a.length]), (s = !1)),
        a !== void 0))
    )
      return i && !s && (i.cacheable = !1), a;
}
function Db(t, e, n) {
  const { min: i, max: s } = t,
    r = Um(e, (s - i) / 2),
    o = (a, l) => (n && a === 0 ? 0 : a + l);
  return { min: o(i, -Math.abs(r)), max: o(s, r) };
}
function On(t, e) {
  return Object.assign(Object.create(t), e);
}
function ld(t, e = [""], n, i, s = () => t[0]) {
  const r = n || t;
  typeof i > "u" && (i = r0("_fallback", t));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: t,
    _rootScopes: r,
    _fallback: i,
    _getTarget: s,
    override: (a) => ld([a, ...t], e, r, i),
  };
  return new Proxy(o, {
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete t[0][l], !0;
    },
    get(a, l) {
      return i0(a, l, () => Bb(l, e, t, a));
    },
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t[0]);
    },
    has(a, l) {
      return of(a).includes(l);
    },
    ownKeys(a) {
      return of(a);
    },
    set(a, l, c) {
      const u = a._storage || (a._storage = s());
      return (a[l] = u[l] = c), delete a._keys, !0;
    },
  });
}
function Ki(t, e, n, i) {
  const s = {
    _cacheable: !1,
    _proxy: t,
    _context: e,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: n0(t, i),
    setContext: (r) => Ki(t, r, n, i),
    override: (r) => Ki(t.override(r), e, n, i),
  };
  return new Proxy(s, {
    deleteProperty(r, o) {
      return delete r[o], delete t[o], !0;
    },
    get(r, o, a) {
      return i0(r, o, () => Tb(r, o, a));
    },
    getOwnPropertyDescriptor(r, o) {
      return r._descriptors.allKeys
        ? Reflect.has(t, o)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(t, o);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t);
    },
    has(r, o) {
      return Reflect.has(t, o);
    },
    ownKeys() {
      return Reflect.ownKeys(t);
    },
    set(r, o, a) {
      return (t[o] = a), delete r[o], !0;
    },
  });
}
function n0(t, e = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: n = e.scriptable,
    _indexable: i = e.indexable,
    _allKeys: s = e.allKeys,
  } = t;
  return {
    allKeys: s,
    scriptable: n,
    indexable: i,
    isScriptable: En(n) ? n : () => n,
    isIndexable: En(i) ? i : () => i,
  };
}
const Nb = (t, e) => (t ? t + ed(e) : e),
  cd = (t, e) =>
    $(e) &&
    t !== "adapters" &&
    (Object.getPrototypeOf(e) === null || e.constructor === Object);
function i0(t, e, n) {
  if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
  const i = n();
  return (t[e] = i), i;
}
function Tb(t, e, n) {
  const { _proxy: i, _context: s, _subProxy: r, _descriptors: o } = t;
  let a = i[e];
  return (
    En(a) && o.isScriptable(e) && (a = Ab(e, a, t, n)),
    ne(a) && a.length && (a = Rb(e, a, t, o.isIndexable)),
    cd(e, a) && (a = Ki(a, s, r && r[e], o)),
    a
  );
}
function Ab(t, e, n, i) {
  const { _proxy: s, _context: r, _subProxy: o, _stack: a } = n;
  if (a.has(t))
    throw new Error(
      "Recursion detected: " + Array.from(a).join("->") + "->" + t
    );
  a.add(t);
  let l = e(r, o || i);
  return a.delete(t), cd(t, l) && (l = ud(s._scopes, s, t, l)), l;
}
function Rb(t, e, n, i) {
  const { _proxy: s, _context: r, _subProxy: o, _descriptors: a } = n;
  if (typeof r.index < "u" && i(t)) return e[r.index % e.length];
  if ($(e[0])) {
    const l = e,
      c = s._scopes.filter((u) => u !== l);
    e = [];
    for (const u of l) {
      const d = ud(c, s, t, u);
      e.push(Ki(d, r, o && o[t], a));
    }
  }
  return e;
}
function s0(t, e, n) {
  return En(t) ? t(e, n) : t;
}
const Ib = (t, e) => (t === !0 ? e : typeof t == "string" ? Cn(e, t) : void 0);
function zb(t, e, n, i, s) {
  for (const r of e) {
    const o = Ib(n, r);
    if (o) {
      t.add(o);
      const a = s0(o._fallback, n, s);
      if (typeof a < "u" && a !== n && a !== i) return a;
    } else if (o === !1 && typeof i < "u" && n !== i) return null;
  }
  return !1;
}
function ud(t, e, n, i) {
  const s = e._rootScopes,
    r = s0(e._fallback, n, i),
    o = [...t, ...s],
    a = new Set();
  a.add(i);
  let l = rf(a, o, n, r || n, i);
  return l === null ||
    (typeof r < "u" && r !== n && ((l = rf(a, o, r, l, i)), l === null))
    ? !1
    : ld(Array.from(a), [""], s, r, () => Fb(e, n, i));
}
function rf(t, e, n, i, s) {
  for (; n; ) n = zb(t, e, n, i, s);
  return n;
}
function Fb(t, e, n) {
  const i = t._getTarget();
  e in i || (i[e] = {});
  const s = i[e];
  return ne(s) && $(n) ? n : s || {};
}
function Bb(t, e, n, i) {
  let s;
  for (const r of e)
    if (((s = r0(Nb(r, t), n)), typeof s < "u"))
      return cd(t, s) ? ud(n, i, t, s) : s;
}
function r0(t, e) {
  for (const n of e) {
    if (!n) continue;
    const i = n[t];
    if (typeof i < "u") return i;
  }
}
function of(t) {
  let e = t._keys;
  return e || (e = t._keys = Hb(t._scopes)), e;
}
function Hb(t) {
  const e = new Set();
  for (const n of t)
    for (const i of Object.keys(n).filter((s) => !s.startsWith("_"))) e.add(i);
  return Array.from(e);
}
function Vb(t, e, n, i) {
  const { iScale: s } = t,
    { key: r = "r" } = this._parsing,
    o = new Array(i);
  let a, l, c, u;
  for (a = 0, l = i; a < l; ++a)
    (c = a + n), (u = e[c]), (o[a] = { r: s.parse(Cn(u, r), c) });
  return o;
}
const Wb = Number.EPSILON || 1e-14,
  Qi = (t, e) => e < t.length && !t[e].skip && t[e],
  o0 = (t) => (t === "x" ? "y" : "x");
function $b(t, e, n, i) {
  const s = t.skip ? e : t,
    r = e,
    o = n.skip ? e : n,
    a = Mc(r, s),
    l = Mc(o, r);
  let c = a / (a + l),
    u = l / (a + l);
  (c = isNaN(c) ? 0 : c), (u = isNaN(u) ? 0 : u);
  const d = i * c,
    h = i * u;
  return {
    previous: { x: r.x - d * (o.x - s.x), y: r.y - d * (o.y - s.y) },
    next: { x: r.x + h * (o.x - s.x), y: r.y + h * (o.y - s.y) },
  };
}
function Ub(t, e, n) {
  const i = t.length;
  let s,
    r,
    o,
    a,
    l,
    c = Qi(t, 0);
  for (let u = 0; u < i - 1; ++u)
    if (((l = c), (c = Qi(t, u + 1)), !(!l || !c))) {
      if (Is(e[u], 0, Wb)) {
        n[u] = n[u + 1] = 0;
        continue;
      }
      (s = n[u] / e[u]),
        (r = n[u + 1] / e[u]),
        (a = Math.pow(s, 2) + Math.pow(r, 2)),
        !(a <= 9) &&
          ((o = 3 / Math.sqrt(a)),
          (n[u] = s * o * e[u]),
          (n[u + 1] = r * o * e[u]));
    }
}
function Yb(t, e, n = "x") {
  const i = o0(n),
    s = t.length;
  let r,
    o,
    a,
    l = Qi(t, 0);
  for (let c = 0; c < s; ++c) {
    if (((o = a), (a = l), (l = Qi(t, c + 1)), !a)) continue;
    const u = a[n],
      d = a[i];
    o &&
      ((r = (u - o[n]) / 3),
      (a[`cp1${n}`] = u - r),
      (a[`cp1${i}`] = d - r * e[c])),
      l &&
        ((r = (l[n] - u) / 3),
        (a[`cp2${n}`] = u + r),
        (a[`cp2${i}`] = d + r * e[c]));
  }
}
function Xb(t, e = "x") {
  const n = o0(e),
    i = t.length,
    s = Array(i).fill(0),
    r = Array(i);
  let o,
    a,
    l,
    c = Qi(t, 0);
  for (o = 0; o < i; ++o)
    if (((a = l), (l = c), (c = Qi(t, o + 1)), !!l)) {
      if (c) {
        const u = c[e] - l[e];
        s[o] = u !== 0 ? (c[n] - l[n]) / u : 0;
      }
      r[o] = a
        ? c
          ? Ot(s[o - 1]) !== Ot(s[o])
            ? 0
            : (s[o - 1] + s[o]) / 2
          : s[o - 1]
        : s[o];
    }
  Ub(t, s, r), Yb(t, r, e);
}
function Zr(t, e, n) {
  return Math.max(Math.min(t, n), e);
}
function Kb(t, e) {
  let n,
    i,
    s,
    r,
    o,
    a = Vt(t[0], e);
  for (n = 0, i = t.length; n < i; ++n)
    (o = r),
      (r = a),
      (a = n < i - 1 && Vt(t[n + 1], e)),
      r &&
        ((s = t[n]),
        o &&
          ((s.cp1x = Zr(s.cp1x, e.left, e.right)),
          (s.cp1y = Zr(s.cp1y, e.top, e.bottom))),
        a &&
          ((s.cp2x = Zr(s.cp2x, e.left, e.right)),
          (s.cp2y = Zr(s.cp2y, e.top, e.bottom))));
}
function Qb(t, e, n, i, s) {
  let r, o, a, l;
  if (
    (e.spanGaps && (t = t.filter((c) => !c.skip)),
    e.cubicInterpolationMode === "monotone")
  )
    Xb(t, s);
  else {
    let c = i ? t[t.length - 1] : t[0];
    for (r = 0, o = t.length; r < o; ++r)
      (a = t[r]),
        (l = $b(c, a, t[Math.min(r + 1, o - (i ? 0 : 1)) % o], e.tension)),
        (a.cp1x = l.previous.x),
        (a.cp1y = l.previous.y),
        (a.cp2x = l.next.x),
        (a.cp2y = l.next.y),
        (c = a);
  }
  e.capBezierPoints && Kb(t, n);
}
function a0() {
  return typeof window < "u" && typeof document < "u";
}
function dd(t) {
  let e = t.parentNode;
  return e && e.toString() === "[object ShadowRoot]" && (e = e.host), e;
}
function pa(t, e, n) {
  let i;
  return (
    typeof t == "string"
      ? ((i = parseInt(t, 10)),
        t.indexOf("%") !== -1 && (i = (i / 100) * e.parentNode[n]))
      : (i = t),
    i
  );
}
const Fa = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
function qb(t, e) {
  return Fa(t).getPropertyValue(e);
}
const Gb = ["top", "right", "bottom", "left"];
function Jn(t, e, n) {
  const i = {};
  n = n ? "-" + n : "";
  for (let s = 0; s < 4; s++) {
    const r = Gb[s];
    i[r] = parseFloat(t[e + "-" + r + n]) || 0;
  }
  return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
const Zb = (t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot);
function Jb(t, e) {
  const n = t.touches,
    i = n && n.length ? n[0] : t,
    { offsetX: s, offsetY: r } = i;
  let o = !1,
    a,
    l;
  if (Zb(s, r, t.target)) (a = s), (l = r);
  else {
    const c = e.getBoundingClientRect();
    (a = i.clientX - c.left), (l = i.clientY - c.top), (o = !0);
  }
  return { x: a, y: l, box: o };
}
function Bn(t, e) {
  if ("native" in t) return t;
  const { canvas: n, currentDevicePixelRatio: i } = e,
    s = Fa(n),
    r = s.boxSizing === "border-box",
    o = Jn(s, "padding"),
    a = Jn(s, "border", "width"),
    { x: l, y: c, box: u } = Jb(t, n),
    d = o.left + (u && a.left),
    h = o.top + (u && a.top);
  let { width: p, height: m } = e;
  return (
    r && ((p -= o.width + a.width), (m -= o.height + a.height)),
    {
      x: Math.round((((l - d) / p) * n.width) / i),
      y: Math.round((((c - h) / m) * n.height) / i),
    }
  );
}
function ew(t, e, n) {
  let i, s;
  if (e === void 0 || n === void 0) {
    const r = dd(t);
    if (!r) (e = t.clientWidth), (n = t.clientHeight);
    else {
      const o = r.getBoundingClientRect(),
        a = Fa(r),
        l = Jn(a, "border", "width"),
        c = Jn(a, "padding");
      (e = o.width - c.width - l.width),
        (n = o.height - c.height - l.height),
        (i = pa(a.maxWidth, r, "clientWidth")),
        (s = pa(a.maxHeight, r, "clientHeight"));
    }
  }
  return { width: e, height: n, maxWidth: i || ha, maxHeight: s || ha };
}
const Jr = (t) => Math.round(t * 10) / 10;
function tw(t, e, n, i) {
  const s = Fa(t),
    r = Jn(s, "margin"),
    o = pa(s.maxWidth, t, "clientWidth") || ha,
    a = pa(s.maxHeight, t, "clientHeight") || ha,
    l = ew(t, e, n);
  let { width: c, height: u } = l;
  if (s.boxSizing === "content-box") {
    const h = Jn(s, "border", "width"),
      p = Jn(s, "padding");
    (c -= p.width + h.width), (u -= p.height + h.height);
  }
  return (
    (c = Math.max(0, c - r.width)),
    (u = Math.max(0, i ? c / i : u - r.height)),
    (c = Jr(Math.min(c, o, l.maxWidth))),
    (u = Jr(Math.min(u, a, l.maxHeight))),
    c && !u && (u = Jr(c / 2)),
    (e !== void 0 || n !== void 0) &&
      i &&
      l.height &&
      u > l.height &&
      ((u = l.height), (c = Jr(Math.floor(u * i)))),
    { width: c, height: u }
  );
}
function af(t, e, n) {
  const i = e || 1,
    s = Math.floor(t.height * i),
    r = Math.floor(t.width * i);
  (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
  const o = t.canvas;
  return (
    o.style &&
      (n || (!o.style.height && !o.style.width)) &&
      ((o.style.height = `${t.height}px`), (o.style.width = `${t.width}px`)),
    t.currentDevicePixelRatio !== i || o.height !== s || o.width !== r
      ? ((t.currentDevicePixelRatio = i),
        (o.height = s),
        (o.width = r),
        t.ctx.setTransform(i, 0, 0, i, 0, 0),
        !0)
      : !1
  );
}
const nw = (function () {
  let t = !1;
  try {
    const e = {
      get passive() {
        return (t = !0), !1;
      },
    };
    window.addEventListener("test", null, e),
      window.removeEventListener("test", null, e);
  } catch {}
  return t;
})();
function lf(t, e) {
  const n = qb(t, e),
    i = n && n.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function Hn(t, e, n, i) {
  return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
}
function iw(t, e, n, i) {
  return {
    x: t.x + n * (e.x - t.x),
    y:
      i === "middle"
        ? n < 0.5
          ? t.y
          : e.y
        : i === "after"
        ? n < 1
          ? t.y
          : e.y
        : n > 0
        ? e.y
        : t.y,
  };
}
function sw(t, e, n, i) {
  const s = { x: t.cp2x, y: t.cp2y },
    r = { x: e.cp1x, y: e.cp1y },
    o = Hn(t, s, n),
    a = Hn(s, r, n),
    l = Hn(r, e, n),
    c = Hn(o, a, n),
    u = Hn(a, l, n);
  return Hn(c, u, n);
}
const rw = function (t, e) {
    return {
      x(n) {
        return t + t + e - n;
      },
      setWidth(n) {
        e = n;
      },
      textAlign(n) {
        return n === "center" ? n : n === "right" ? "left" : "right";
      },
      xPlus(n, i) {
        return n - i;
      },
      leftForLtr(n, i) {
        return n - i;
      },
    };
  },
  ow = function () {
    return {
      x(t) {
        return t;
      },
      setWidth(t) {},
      textAlign(t) {
        return t;
      },
      xPlus(t, e) {
        return t + e;
      },
      leftForLtr(t, e) {
        return t;
      },
    };
  };
function Ri(t, e, n) {
  return t ? rw(e, n) : ow();
}
function l0(t, e) {
  let n, i;
  (e === "ltr" || e === "rtl") &&
    ((n = t.canvas.style),
    (i = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")]),
    n.setProperty("direction", e, "important"),
    (t.prevTextDirection = i));
}
function c0(t, e) {
  e !== void 0 &&
    (delete t.prevTextDirection,
    t.canvas.style.setProperty("direction", e[0], e[1]));
}
function u0(t) {
  return t === "angle"
    ? { between: cr, compare: sb, normalize: vt }
    : { between: dn, compare: (e, n) => e - n, normalize: (e) => e };
}
function cf({ start: t, end: e, count: n, loop: i, style: s }) {
  return {
    start: t % n,
    end: e % n,
    loop: i && (e - t + 1) % n === 0,
    style: s,
  };
}
function aw(t, e, n) {
  const { property: i, start: s, end: r } = n,
    { between: o, normalize: a } = u0(i),
    l = e.length;
  let { start: c, end: u, loop: d } = t,
    h,
    p;
  if (d) {
    for (c += l, u += l, h = 0, p = l; h < p && o(a(e[c % l][i]), s, r); ++h)
      c--, u--;
    (c %= l), (u %= l);
  }
  return u < c && (u += l), { start: c, end: u, loop: d, style: t.style };
}
function lw(t, e, n) {
  if (!n) return [t];
  const { property: i, start: s, end: r } = n,
    o = e.length,
    { compare: a, between: l, normalize: c } = u0(i),
    { start: u, end: d, loop: h, style: p } = aw(t, e, n),
    m = [];
  let y = !1,
    _ = null,
    g,
    v,
    x;
  const b = () => l(s, x, g) && a(s, x) !== 0,
    w = () => a(r, g) === 0 || l(r, x, g),
    k = () => y || b(),
    S = () => !y || w();
  for (let C = u, M = u; C <= d; ++C)
    (v = e[C % o]),
      !v.skip &&
        ((g = c(v[i])),
        g !== x &&
          ((y = l(g, s, r)),
          _ === null && k() && (_ = a(g, s) === 0 ? C : M),
          _ !== null &&
            S() &&
            (m.push(cf({ start: _, end: C, loop: h, count: o, style: p })),
            (_ = null)),
          (M = C),
          (x = g)));
  return (
    _ !== null && m.push(cf({ start: _, end: d, loop: h, count: o, style: p })),
    m
  );
}
function cw(t, e) {
  const n = [],
    i = t.segments;
  for (let s = 0; s < i.length; s++) {
    const r = lw(i[s], t.points, e);
    r.length && n.push(...r);
  }
  return n;
}
function uw(t, e, n, i) {
  let s = 0,
    r = e - 1;
  if (n && !i) for (; s < e && !t[s].skip; ) s++;
  for (; s < e && t[s].skip; ) s++;
  for (s %= e, n && (r += s); r > s && t[r % e].skip; ) r--;
  return (r %= e), { start: s, end: r };
}
function dw(t, e, n, i) {
  const s = t.length,
    r = [];
  let o = e,
    a = t[e],
    l;
  for (l = e + 1; l <= n; ++l) {
    const c = t[l % s];
    c.skip || c.stop
      ? a.skip ||
        ((i = !1),
        r.push({ start: e % s, end: (l - 1) % s, loop: i }),
        (e = o = c.stop ? l : null))
      : ((o = l), a.skip && (e = l)),
      (a = c);
  }
  return o !== null && r.push({ start: e % s, end: o % s, loop: i }), r;
}
function hw(t, e) {
  const n = t.points,
    i = t.options.spanGaps,
    s = n.length;
  if (!s) return [];
  const r = !!t._loop,
    { start: o, end: a } = uw(n, s, r, i);
  if (i === !0) return uf(t, [{ start: o, end: a, loop: r }], n, e);
  const l = a < o ? a + s : a,
    c = !!t._fullLoop && o === 0 && a === s - 1;
  return uf(t, dw(n, o, l, c), n, e);
}
function uf(t, e, n, i) {
  return !i || !i.setContext || !n ? e : fw(t, e, n, i);
}
function fw(t, e, n, i) {
  const s = t._chart.getContext(),
    r = df(t.options),
    {
      _datasetIndex: o,
      options: { spanGaps: a },
    } = t,
    l = n.length,
    c = [];
  let u = r,
    d = e[0].start,
    h = d;
  function p(m, y, _, g) {
    const v = a ? -1 : 1;
    if (m !== y) {
      for (m += l; n[m % l].skip; ) m -= v;
      for (; n[y % l].skip; ) y += v;
      m % l !== y % l &&
        (c.push({ start: m % l, end: y % l, loop: _, style: g }),
        (u = g),
        (d = y % l));
    }
  }
  for (const m of e) {
    d = a ? d : m.start;
    let y = n[d % l],
      _;
    for (h = d + 1; h <= m.end; h++) {
      const g = n[h % l];
      (_ = df(
        i.setContext(
          On(s, {
            type: "segment",
            p0: y,
            p1: g,
            p0DataIndex: (h - 1) % l,
            p1DataIndex: h % l,
            datasetIndex: o,
          })
        )
      )),
        pw(_, u) && p(d, h - 1, m.loop, u),
        (y = g),
        (u = _);
    }
    d < h - 1 && p(d, h - 1, m.loop, u);
  }
  return c;
}
function df(t) {
  return {
    backgroundColor: t.backgroundColor,
    borderCapStyle: t.borderCapStyle,
    borderDash: t.borderDash,
    borderDashOffset: t.borderDashOffset,
    borderJoinStyle: t.borderJoinStyle,
    borderWidth: t.borderWidth,
    borderColor: t.borderColor,
  };
}
function pw(t, e) {
  if (!e) return !1;
  const n = [],
    i = function (s, r) {
      return sd(r) ? (n.includes(r) || n.push(r), n.indexOf(r)) : r;
    };
  return JSON.stringify(t, i) !== JSON.stringify(e, i);
}
/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ class gw {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(e, n, i, s) {
    const r = n.listeners[s],
      o = n.duration;
    r.forEach((a) =>
      a({
        chart: e,
        initial: n.initial,
        numSteps: o,
        currentStep: Math.min(i - n.start, o),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = Gm.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(e = Date.now()) {
    let n = 0;
    this._charts.forEach((i, s) => {
      if (!i.running || !i.items.length) return;
      const r = i.items;
      let o = r.length - 1,
        a = !1,
        l;
      for (; o >= 0; --o)
        (l = r[o]),
          l._active
            ? (l._total > i.duration && (i.duration = l._total),
              l.tick(e),
              (a = !0))
            : ((r[o] = r[r.length - 1]), r.pop());
      a && (s.draw(), this._notify(s, i, e, "progress")),
        r.length ||
          ((i.running = !1),
          this._notify(s, i, e, "complete"),
          (i.initial = !1)),
        (n += r.length);
    }),
      (this._lastDate = e),
      n === 0 && (this._running = !1);
  }
  _getAnims(e) {
    const n = this._charts;
    let i = n.get(e);
    return (
      i ||
        ((i = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        n.set(e, i)),
      i
    );
  }
  listen(e, n, i) {
    this._getAnims(e).listeners[n].push(i);
  }
  add(e, n) {
    !n || !n.length || this._getAnims(e).items.push(...n);
  }
  has(e) {
    return this._getAnims(e).items.length > 0;
  }
  start(e) {
    const n = this._charts.get(e);
    n &&
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((i, s) => Math.max(i, s._duration), 0)),
      this._refresh());
  }
  running(e) {
    if (!this._running) return !1;
    const n = this._charts.get(e);
    return !(!n || !n.running || !n.items.length);
  }
  stop(e) {
    const n = this._charts.get(e);
    if (!n || !n.items.length) return;
    const i = n.items;
    let s = i.length - 1;
    for (; s >= 0; --s) i[s].cancel();
    (n.items = []), this._notify(e, n, Date.now(), "complete");
  }
  remove(e) {
    return this._charts.delete(e);
  }
}
var At = new gw();
const hf = "transparent",
  mw = {
    boolean(t, e, n) {
      return n > 0.5 ? e : t;
    },
    color(t, e, n) {
      const i = tf(t || hf),
        s = i.valid && tf(e || hf);
      return s && s.valid ? s.mix(i, n).hexString() : e;
    },
    number(t, e, n) {
      return t + (e - t) * n;
    },
  };
class vw {
  constructor(e, n, i, s) {
    const r = n[i];
    s = Gr([e.to, s, r, e.from]);
    const o = Gr([e.from, r, s]);
    (this._active = !0),
      (this._fn = e.fn || mw[e.type || typeof o]),
      (this._easing = zs[e.easing] || zs.linear),
      (this._start = Math.floor(Date.now() + (e.delay || 0))),
      (this._duration = this._total = Math.floor(e.duration)),
      (this._loop = !!e.loop),
      (this._target = n),
      (this._prop = i),
      (this._from = o),
      (this._to = s),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(e, n, i) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop],
        r = i - this._start,
        o = this._duration - r;
      (this._start = i),
        (this._duration = Math.floor(Math.max(o, e.duration))),
        (this._total += r),
        (this._loop = !!e.loop),
        (this._to = Gr([e.to, n, s, e.from])),
        (this._from = Gr([e.from, s, n]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(e) {
    const n = e - this._start,
      i = this._duration,
      s = this._prop,
      r = this._from,
      o = this._loop,
      a = this._to;
    let l;
    if (((this._active = r !== a && (o || n < i)), !this._active)) {
      (this._target[s] = a), this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[s] = r;
      return;
    }
    (l = (n / i) % 2),
      (l = o && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[s] = this._fn(r, a, l));
  }
  wait() {
    const e = this._promises || (this._promises = []);
    return new Promise((n, i) => {
      e.push({ res: n, rej: i });
    });
  }
  _notify(e) {
    const n = e ? "res" : "rej",
      i = this._promises || [];
    for (let s = 0; s < i.length; s++) i[s][n]();
  }
}
class d0 {
  constructor(e, n) {
    (this._chart = e), (this._properties = new Map()), this.configure(n);
  }
  configure(e) {
    if (!$(e)) return;
    const n = Object.keys(ue.animation),
      i = this._properties;
    Object.getOwnPropertyNames(e).forEach((s) => {
      const r = e[s];
      if (!$(r)) return;
      const o = {};
      for (const a of n) o[a] = r[a];
      ((ne(r.properties) && r.properties) || [s]).forEach((a) => {
        (a === s || !i.has(a)) && i.set(a, o);
      });
    });
  }
  _animateOptions(e, n) {
    const i = n.options,
      s = xw(e, i);
    if (!s) return [];
    const r = this._createAnimations(s, i);
    return (
      i.$shared &&
        yw(e.options.$animations, i).then(
          () => {
            e.options = i;
          },
          () => {}
        ),
      r
    );
  }
  _createAnimations(e, n) {
    const i = this._properties,
      s = [],
      r = e.$animations || (e.$animations = {}),
      o = Object.keys(n),
      a = Date.now();
    let l;
    for (l = o.length - 1; l >= 0; --l) {
      const c = o[l];
      if (c.charAt(0) === "$") continue;
      if (c === "options") {
        s.push(...this._animateOptions(e, n));
        continue;
      }
      const u = n[c];
      let d = r[c];
      const h = i.get(c);
      if (d)
        if (h && d.active()) {
          d.update(h, u, a);
          continue;
        } else d.cancel();
      if (!h || !h.duration) {
        e[c] = u;
        continue;
      }
      (r[c] = d = new vw(h, e, c, u)), s.push(d);
    }
    return s;
  }
  update(e, n) {
    if (this._properties.size === 0) {
      Object.assign(e, n);
      return;
    }
    const i = this._createAnimations(e, n);
    if (i.length) return At.add(this._chart, i), !0;
  }
}
function yw(t, e) {
  const n = [],
    i = Object.keys(e);
  for (let s = 0; s < i.length; s++) {
    const r = t[i[s]];
    r && r.active() && n.push(r.wait());
  }
  return Promise.all(n);
}
function xw(t, e) {
  if (!e) return;
  let n = t.options;
  if (!n) {
    t.options = e;
    return;
  }
  return (
    n.$shared &&
      (t.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })),
    n
  );
}
function ff(t, e) {
  const n = (t && t.options) || {},
    i = n.reverse,
    s = n.min === void 0 ? e : 0,
    r = n.max === void 0 ? e : 0;
  return { start: i ? r : s, end: i ? s : r };
}
function _w(t, e, n) {
  if (n === !1) return !1;
  const i = ff(t, n),
    s = ff(e, n);
  return { top: s.end, right: i.end, bottom: s.start, left: i.start };
}
function bw(t) {
  let e, n, i, s;
  return (
    $(t)
      ? ((e = t.top), (n = t.right), (i = t.bottom), (s = t.left))
      : (e = n = i = s = t),
    { top: e, right: n, bottom: i, left: s, disabled: t === !1 }
  );
}
function h0(t, e) {
  const n = [],
    i = t._getSortedDatasetMetas(e);
  let s, r;
  for (s = 0, r = i.length; s < r; ++s) n.push(i[s].index);
  return n;
}
function pf(t, e, n, i = {}) {
  const s = t.keys,
    r = i.mode === "single";
  let o, a, l, c;
  if (e !== null) {
    for (o = 0, a = s.length; o < a; ++o) {
      if (((l = +s[o]), l === n)) {
        if (i.all) continue;
        break;
      }
      (c = t.values[l]), _e(c) && (r || e === 0 || Ot(e) === Ot(c)) && (e += c);
    }
    return e;
  }
}
function ww(t) {
  const e = Object.keys(t),
    n = new Array(e.length);
  let i, s, r;
  for (i = 0, s = e.length; i < s; ++i) (r = e[i]), (n[i] = { x: r, y: t[r] });
  return n;
}
function gf(t, e) {
  const n = t && t.options.stacked;
  return n || (n === void 0 && e.stack !== void 0);
}
function kw(t, e, n) {
  return `${t.id}.${e.id}.${n.stack || n.type}`;
}
function Sw(t) {
  const { min: e, max: n, minDefined: i, maxDefined: s } = t.getUserBounds();
  return {
    min: i ? e : Number.NEGATIVE_INFINITY,
    max: s ? n : Number.POSITIVE_INFINITY,
  };
}
function Cw(t, e, n) {
  const i = t[e] || (t[e] = {});
  return i[n] || (i[n] = {});
}
function mf(t, e, n, i) {
  for (const s of e.getMatchingVisibleMetas(i).reverse()) {
    const r = t[s.index];
    if ((n && r > 0) || (!n && r < 0)) return s.index;
  }
  return null;
}
function vf(t, e) {
  const { chart: n, _cachedMeta: i } = t,
    s = n._stacks || (n._stacks = {}),
    { iScale: r, vScale: o, index: a } = i,
    l = r.axis,
    c = o.axis,
    u = kw(r, o, i),
    d = e.length;
  let h;
  for (let p = 0; p < d; ++p) {
    const m = e[p],
      { [l]: y, [c]: _ } = m,
      g = m._stacks || (m._stacks = {});
    (h = g[c] = Cw(s, u, y)),
      (h[a] = _),
      (h._top = mf(h, o, !0, i.type)),
      (h._bottom = mf(h, o, !1, i.type));
    const v = h._visualValues || (h._visualValues = {});
    v[a] = _;
  }
}
function wl(t, e) {
  const n = t.scales;
  return Object.keys(n)
    .filter((i) => n[i].axis === e)
    .shift();
}
function Ew(t, e) {
  return On(t, {
    active: !1,
    dataset: void 0,
    datasetIndex: e,
    index: e,
    mode: "default",
    type: "dataset",
  });
}
function jw(t, e, n) {
  return On(t, {
    active: !1,
    dataIndex: e,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: e,
    mode: "default",
    type: "data",
  });
}
function ls(t, e) {
  const n = t.controller.index,
    i = t.vScale && t.vScale.axis;
  if (i) {
    e = e || t._parsed;
    for (const s of e) {
      const r = s._stacks;
      if (!r || r[i] === void 0 || r[i][n] === void 0) return;
      delete r[i][n],
        r[i]._visualValues !== void 0 &&
          r[i]._visualValues[n] !== void 0 &&
          delete r[i]._visualValues[n];
    }
  }
}
const kl = (t) => t === "reset" || t === "none",
  yf = (t, e) => (e ? t : Object.assign({}, t)),
  Mw = (t, e, n) =>
    t && !e.hidden && e._stacked && { keys: h0(n, !0), values: null };
class wn {
  constructor(e, n) {
    (this.chart = e),
      (this._ctx = e.ctx),
      (this.index = n),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const e = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (e._stacked = gf(e.vScale, e)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(e) {
    this.index !== e && ls(this._cachedMeta), (this.index = e);
  }
  linkScales() {
    const e = this.chart,
      n = this._cachedMeta,
      i = this.getDataset(),
      s = (d, h, p, m) => (d === "x" ? h : d === "r" ? m : p),
      r = (n.xAxisID = B(i.xAxisID, wl(e, "x"))),
      o = (n.yAxisID = B(i.yAxisID, wl(e, "y"))),
      a = (n.rAxisID = B(i.rAxisID, wl(e, "r"))),
      l = n.indexAxis,
      c = (n.iAxisID = s(l, r, o, a)),
      u = (n.vAxisID = s(l, o, r, a));
    (n.xScale = this.getScaleForId(r)),
      (n.yScale = this.getScaleForId(o)),
      (n.rScale = this.getScaleForId(a)),
      (n.iScale = this.getScaleForId(c)),
      (n.vScale = this.getScaleForId(u));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(e) {
    return this.chart.scales[e];
  }
  _getOtherScale(e) {
    const n = this._cachedMeta;
    return e === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const e = this._cachedMeta;
    this._data && Zh(this._data, this), e._stacked && ls(e);
  }
  _dataCheck() {
    const e = this.getDataset(),
      n = e.data || (e.data = []),
      i = this._data;
    if ($(n)) this._data = ww(n);
    else if (i !== n) {
      if (i) {
        Zh(i, this);
        const s = this._cachedMeta;
        ls(s), (s._parsed = []);
      }
      n && Object.isExtensible(n) && lb(n, this),
        (this._syncList = []),
        (this._data = n);
    }
  }
  addElements() {
    const e = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (e.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(e) {
    const n = this._cachedMeta,
      i = this.getDataset();
    let s = !1;
    this._dataCheck();
    const r = n._stacked;
    (n._stacked = gf(n.vScale, n)),
      n.stack !== i.stack && ((s = !0), ls(n), (n.stack = i.stack)),
      this._resyncElements(e),
      (s || r !== n._stacked) && vf(this, n._parsed);
  }
  configure() {
    const e = this.chart.config,
      n = e.datasetScopeKeys(this._type),
      i = e.getOptionScopes(this.getDataset(), n, !0);
    (this.options = e.createResolver(i, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(e, n) {
    const { _cachedMeta: i, _data: s } = this,
      { iScale: r, _stacked: o } = i,
      a = r.axis;
    let l = e === 0 && n === s.length ? !0 : i._sorted,
      c = e > 0 && i._parsed[e - 1],
      u,
      d,
      h;
    if (this._parsing === !1) (i._parsed = s), (i._sorted = !0), (h = s);
    else {
      ne(s[e])
        ? (h = this.parseArrayData(i, s, e, n))
        : $(s[e])
        ? (h = this.parseObjectData(i, s, e, n))
        : (h = this.parsePrimitiveData(i, s, e, n));
      const p = () => d[a] === null || (c && d[a] < c[a]);
      for (u = 0; u < n; ++u)
        (i._parsed[u + e] = d = h[u]), l && (p() && (l = !1), (c = d));
      i._sorted = l;
    }
    o && vf(this, h);
  }
  parsePrimitiveData(e, n, i, s) {
    const { iScale: r, vScale: o } = e,
      a = r.axis,
      l = o.axis,
      c = r.getLabels(),
      u = r === o,
      d = new Array(s);
    let h, p, m;
    for (h = 0, p = s; h < p; ++h)
      (m = h + i),
        (d[h] = { [a]: u || r.parse(c[m], m), [l]: o.parse(n[m], m) });
    return d;
  }
  parseArrayData(e, n, i, s) {
    const { xScale: r, yScale: o } = e,
      a = new Array(s);
    let l, c, u, d;
    for (l = 0, c = s; l < c; ++l)
      (u = l + i),
        (d = n[u]),
        (a[l] = { x: r.parse(d[0], u), y: o.parse(d[1], u) });
    return a;
  }
  parseObjectData(e, n, i, s) {
    const { xScale: r, yScale: o } = e,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      c = new Array(s);
    let u, d, h, p;
    for (u = 0, d = s; u < d; ++u)
      (h = u + i),
        (p = n[h]),
        (c[u] = { x: r.parse(Cn(p, a), h), y: o.parse(Cn(p, l), h) });
    return c;
  }
  getParsed(e) {
    return this._cachedMeta._parsed[e];
  }
  getDataElement(e) {
    return this._cachedMeta.data[e];
  }
  applyStack(e, n, i) {
    const s = this.chart,
      r = this._cachedMeta,
      o = n[e.axis],
      a = { keys: h0(s, !0), values: n._stacks[e.axis]._visualValues };
    return pf(a, o, r.index, { mode: i });
  }
  updateRangeFromParsed(e, n, i, s) {
    const r = i[n.axis];
    let o = r === null ? NaN : r;
    const a = s && i._stacks[n.axis];
    s && a && ((s.values = a), (o = pf(s, r, this._cachedMeta.index))),
      (e.min = Math.min(e.min, o)),
      (e.max = Math.max(e.max, o));
  }
  getMinMax(e, n) {
    const i = this._cachedMeta,
      s = i._parsed,
      r = i._sorted && e === i.iScale,
      o = s.length,
      a = this._getOtherScale(e),
      l = Mw(n, i, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: u, max: d } = Sw(a);
    let h, p;
    function m() {
      p = s[h];
      const y = p[a.axis];
      return !_e(p[e.axis]) || u > y || d < y;
    }
    for (
      h = 0;
      h < o && !(!m() && (this.updateRangeFromParsed(c, e, p, l), r));
      ++h
    );
    if (r) {
      for (h = o - 1; h >= 0; --h)
        if (!m()) {
          this.updateRangeFromParsed(c, e, p, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(e) {
    const n = this._cachedMeta._parsed,
      i = [];
    let s, r, o;
    for (s = 0, r = n.length; s < r; ++s)
      (o = n[s][e.axis]), _e(o) && i.push(o);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(e) {
    const n = this._cachedMeta,
      i = n.iScale,
      s = n.vScale,
      r = this.getParsed(e);
    return {
      label: i ? "" + i.getLabelForValue(r[i.axis]) : "",
      value: s ? "" + s.getLabelForValue(r[s.axis]) : "",
    };
  }
  _update(e) {
    const n = this._cachedMeta;
    this.update(e || "default"),
      (n._clip = bw(
        B(this.options.clip, _w(n.xScale, n.yScale, this.getMaxOverflow()))
      ));
  }
  update(e) {}
  draw() {
    const e = this._ctx,
      n = this.chart,
      i = this._cachedMeta,
      s = i.data || [],
      r = n.chartArea,
      o = [],
      a = this._drawStart || 0,
      l = this._drawCount || s.length - a,
      c = this.options.drawActiveElementsOnTop;
    let u;
    for (i.dataset && i.dataset.draw(e, r, a, l), u = a; u < a + l; ++u) {
      const d = s[u];
      d.hidden || (d.active && c ? o.push(d) : d.draw(e, r));
    }
    for (u = 0; u < o.length; ++u) o[u].draw(e, r);
  }
  getStyle(e, n) {
    const i = n ? "active" : "default";
    return e === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(e || 0, i);
  }
  getContext(e, n, i) {
    const s = this.getDataset();
    let r;
    if (e >= 0 && e < this._cachedMeta.data.length) {
      const o = this._cachedMeta.data[e];
      (r = o.$context || (o.$context = jw(this.getContext(), e, o))),
        (r.parsed = this.getParsed(e)),
        (r.raw = s.data[e]),
        (r.index = r.dataIndex = e);
    } else
      (r =
        this.$context ||
        (this.$context = Ew(this.chart.getContext(), this.index))),
        (r.dataset = s),
        (r.index = r.datasetIndex = this.index);
    return (r.active = !!n), (r.mode = i), r;
  }
  resolveDatasetElementOptions(e) {
    return this._resolveElementOptions(this.datasetElementType.id, e);
  }
  resolveDataElementOptions(e, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, e);
  }
  _resolveElementOptions(e, n = "default", i) {
    const s = n === "active",
      r = this._cachedDataOpts,
      o = e + "-" + n,
      a = r[o],
      l = this.enableOptionSharing && ar(i);
    if (a) return yf(a, l);
    const c = this.chart.config,
      u = c.datasetElementScopeKeys(this._type, e),
      d = s ? [`${e}Hover`, "hover", e, ""] : [e, ""],
      h = c.getOptionScopes(this.getDataset(), u),
      p = Object.keys(ue.elements[e]),
      m = () => this.getContext(i, s, n),
      y = c.resolveNamedOptions(h, p, m, d);
    return y.$shared && ((y.$shared = l), (r[o] = Object.freeze(yf(y, l)))), y;
  }
  _resolveAnimations(e, n, i) {
    const s = this.chart,
      r = this._cachedDataOpts,
      o = `animation-${n}`,
      a = r[o];
    if (a) return a;
    let l;
    if (s.options.animation !== !1) {
      const u = this.chart.config,
        d = u.datasetAnimationScopeKeys(this._type, n),
        h = u.getOptionScopes(this.getDataset(), d);
      l = u.createResolver(h, this.getContext(e, i, n));
    }
    const c = new d0(s, l && l.animations);
    return l && l._cacheable && (r[o] = Object.freeze(c)), c;
  }
  getSharedOptions(e) {
    if (e.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, e))
      );
  }
  includeOptions(e, n) {
    return !n || kl(e) || this.chart._animationsDisabled;
  }
  _getSharedOptions(e, n) {
    const i = this.resolveDataElementOptions(e, n),
      s = this._sharedOptions,
      r = this.getSharedOptions(i),
      o = this.includeOptions(n, r) || r !== s;
    return (
      this.updateSharedOptions(r, n, i), { sharedOptions: r, includeOptions: o }
    );
  }
  updateElement(e, n, i, s) {
    kl(s) ? Object.assign(e, i) : this._resolveAnimations(n, s).update(e, i);
  }
  updateSharedOptions(e, n, i) {
    e && !kl(n) && this._resolveAnimations(void 0, n).update(e, i);
  }
  _setStyle(e, n, i, s) {
    e.active = s;
    const r = this.getStyle(n, s);
    this._resolveAnimations(n, i, s).update(e, {
      options: (!s && this.getSharedOptions(r)) || r,
    });
  }
  removeHoverStyle(e, n, i) {
    this._setStyle(e, i, "active", !1);
  }
  setHoverStyle(e, n, i) {
    this._setStyle(e, i, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", !0);
  }
  _resyncElements(e) {
    const n = this._data,
      i = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList) this[a](l, c);
    this._syncList = [];
    const s = i.length,
      r = n.length,
      o = Math.min(r, s);
    o && this.parse(0, o),
      r > s
        ? this._insertElements(s, r - s, e)
        : r < s && this._removeElements(r, s - r);
  }
  _insertElements(e, n, i = !0) {
    const s = this._cachedMeta,
      r = s.data,
      o = e + n;
    let a;
    const l = (c) => {
      for (c.length += n, a = c.length - 1; a >= o; a--) c[a] = c[a - n];
    };
    for (l(r), a = e; a < o; ++a) r[a] = new this.dataElementType();
    this._parsing && l(s._parsed),
      this.parse(e, n),
      i && this.updateElements(r, e, n, "reset");
  }
  updateElements(e, n, i, s) {}
  _removeElements(e, n) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const s = i._parsed.splice(e, n);
      i._stacked && ls(i, s);
    }
    i.data.splice(e, n);
  }
  _sync(e) {
    if (this._parsing) this._syncList.push(e);
    else {
      const [n, i, s] = e;
      this[n](i, s);
    }
    this.chart._dataChanges.push([this.index, ...e]);
  }
  _onDataPush() {
    const e = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - e, e]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(e, n) {
    n && this._sync(["_removeElements", e, n]);
    const i = arguments.length - 2;
    i && this._sync(["_insertElements", e, i]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
O(wn, "defaults", {}),
  O(wn, "datasetElementType", null),
  O(wn, "dataElementType", null);
function Pw(t, e) {
  if (!t._cache.$bar) {
    const n = t.getMatchingVisibleMetas(e);
    let i = [];
    for (let s = 0, r = n.length; s < r; s++)
      i = i.concat(n[s].controller.getAllParsedValues(t));
    t._cache.$bar = qm(i.sort((s, r) => s - r));
  }
  return t._cache.$bar;
}
function Lw(t) {
  const e = t.iScale,
    n = Pw(e, t.type);
  let i = e._length,
    s,
    r,
    o,
    a;
  const l = () => {
    o === 32767 ||
      o === -32768 ||
      (ar(a) && (i = Math.min(i, Math.abs(o - a) || i)), (a = o));
  };
  for (s = 0, r = n.length; s < r; ++s) (o = e.getPixelForValue(n[s])), l();
  for (a = void 0, s = 0, r = e.ticks.length; s < r; ++s)
    (o = e.getPixelForTick(s)), l();
  return i;
}
function Ow(t, e, n, i) {
  const s = n.barThickness;
  let r, o;
  return (
    K(s)
      ? ((r = e.min * n.categoryPercentage), (o = n.barPercentage))
      : ((r = s * i), (o = 1)),
    { chunk: r / i, ratio: o, start: e.pixels[t] - r / 2 }
  );
}
function Dw(t, e, n, i) {
  const s = e.pixels,
    r = s[t];
  let o = t > 0 ? s[t - 1] : null,
    a = t < s.length - 1 ? s[t + 1] : null;
  const l = n.categoryPercentage;
  o === null && (o = r - (a === null ? e.end - e.start : a - r)),
    a === null && (a = r + r - o);
  const c = r - ((r - Math.min(o, a)) / 2) * l;
  return {
    chunk: ((Math.abs(a - o) / 2) * l) / i,
    ratio: n.barPercentage,
    start: c,
  };
}
function Nw(t, e, n, i) {
  const s = n.parse(t[0], i),
    r = n.parse(t[1], i),
    o = Math.min(s, r),
    a = Math.max(s, r);
  let l = o,
    c = a;
  Math.abs(o) > Math.abs(a) && ((l = a), (c = o)),
    (e[n.axis] = c),
    (e._custom = { barStart: l, barEnd: c, start: s, end: r, min: o, max: a });
}
function f0(t, e, n, i) {
  return ne(t) ? Nw(t, e, n, i) : (e[n.axis] = n.parse(t, i)), e;
}
function xf(t, e, n, i) {
  const s = t.iScale,
    r = t.vScale,
    o = s.getLabels(),
    a = s === r,
    l = [];
  let c, u, d, h;
  for (c = n, u = n + i; c < u; ++c)
    (h = e[c]),
      (d = {}),
      (d[s.axis] = a || s.parse(o[c], c)),
      l.push(f0(h, d, r, c));
  return l;
}
function Sl(t) {
  return t && t.barStart !== void 0 && t.barEnd !== void 0;
}
function Tw(t, e, n) {
  return t !== 0 ? Ot(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1);
}
function Aw(t) {
  let e, n, i, s, r;
  return (
    t.horizontal
      ? ((e = t.base > t.x), (n = "left"), (i = "right"))
      : ((e = t.base < t.y), (n = "bottom"), (i = "top")),
    e ? ((s = "end"), (r = "start")) : ((s = "start"), (r = "end")),
    { start: n, end: i, reverse: e, top: s, bottom: r }
  );
}
function Rw(t, e, n, i) {
  let s = e.borderSkipped;
  const r = {};
  if (!s) {
    t.borderSkipped = r;
    return;
  }
  if (s === !0) {
    t.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
    return;
  }
  const { start: o, end: a, reverse: l, top: c, bottom: u } = Aw(t);
  s === "middle" &&
    n &&
    ((t.enableBorderRadius = !0),
    (n._top || 0) === i
      ? (s = c)
      : (n._bottom || 0) === i
      ? (s = u)
      : ((r[_f(u, o, a, l)] = !0), (s = c))),
    (r[_f(s, o, a, l)] = !0),
    (t.borderSkipped = r);
}
function _f(t, e, n, i) {
  return i ? ((t = Iw(t, e, n)), (t = bf(t, n, e))) : (t = bf(t, e, n)), t;
}
function Iw(t, e, n) {
  return t === e ? n : t === n ? e : t;
}
function bf(t, e, n) {
  return t === "start" ? e : t === "end" ? n : t;
}
function zw(t, { inflateAmount: e }, n) {
  t.inflateAmount = e === "auto" ? (n === 1 ? 0.33 : 0) : e;
}
class wo extends wn {
  parsePrimitiveData(e, n, i, s) {
    return xf(e, n, i, s);
  }
  parseArrayData(e, n, i, s) {
    return xf(e, n, i, s);
  }
  parseObjectData(e, n, i, s) {
    const { iScale: r, vScale: o } = e,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      c = r.axis === "x" ? a : l,
      u = o.axis === "x" ? a : l,
      d = [];
    let h, p, m, y;
    for (h = i, p = i + s; h < p; ++h)
      (y = n[h]),
        (m = {}),
        (m[r.axis] = r.parse(Cn(y, c), h)),
        d.push(f0(Cn(y, u), m, o, h));
    return d;
  }
  updateRangeFromParsed(e, n, i, s) {
    super.updateRangeFromParsed(e, n, i, s);
    const r = i._custom;
    r &&
      n === this._cachedMeta.vScale &&
      ((e.min = Math.min(e.min, r.min)), (e.max = Math.max(e.max, r.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(e) {
    const n = this._cachedMeta,
      { iScale: i, vScale: s } = n,
      r = this.getParsed(e),
      o = r._custom,
      a = Sl(o)
        ? "[" + o.start + ", " + o.end + "]"
        : "" + s.getLabelForValue(r[s.axis]);
    return { label: "" + i.getLabelForValue(r[i.axis]), value: a };
  }
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
    const e = this._cachedMeta;
    e.stack = this.getDataset().stack;
  }
  update(e) {
    const n = this._cachedMeta;
    this.updateElements(n.data, 0, n.data.length, e);
  }
  updateElements(e, n, i, s) {
    const r = s === "reset",
      {
        index: o,
        _cachedMeta: { vScale: a },
      } = this,
      l = a.getBasePixel(),
      c = a.isHorizontal(),
      u = this._getRuler(),
      { sharedOptions: d, includeOptions: h } = this._getSharedOptions(n, s);
    for (let p = n; p < n + i; p++) {
      const m = this.getParsed(p),
        y =
          r || K(m[a.axis])
            ? { base: l, head: l }
            : this._calculateBarValuePixels(p),
        _ = this._calculateBarIndexPixels(p, u),
        g = (m._stacks || {})[a.axis],
        v = {
          horizontal: c,
          base: y.base,
          enableBorderRadius:
            !g || Sl(m._custom) || o === g._top || o === g._bottom,
          x: c ? y.head : _.center,
          y: c ? _.center : y.head,
          height: c ? _.size : Math.abs(y.size),
          width: c ? Math.abs(y.size) : _.size,
        };
      h &&
        (v.options =
          d || this.resolveDataElementOptions(p, e[p].active ? "active" : s));
      const x = v.options || e[p].options;
      Rw(v, x, g, o), zw(v, x, u.ratio), this.updateElement(e[p], p, v, s);
    }
  }
  _getStacks(e, n) {
    const { iScale: i } = this._cachedMeta,
      s = i
        .getMatchingVisibleMetas(this._type)
        .filter((l) => l.controller.options.grouped),
      r = i.options.stacked,
      o = [],
      a = (l) => {
        const c = l.controller.getParsed(n),
          u = c && c[l.vScale.axis];
        if (K(u) || isNaN(u)) return !0;
      };
    for (const l of s)
      if (
        !(n !== void 0 && a(l)) &&
        ((r === !1 ||
          o.indexOf(l.stack) === -1 ||
          (r === void 0 && l.stack === void 0)) &&
          o.push(l.stack),
        l.index === e)
      )
        break;
    return o.length || o.push(void 0), o;
  }
  _getStackCount(e) {
    return this._getStacks(void 0, e).length;
  }
  _getStackIndex(e, n, i) {
    const s = this._getStacks(e, i),
      r = n !== void 0 ? s.indexOf(n) : -1;
    return r === -1 ? s.length - 1 : r;
  }
  _getRuler() {
    const e = this.options,
      n = this._cachedMeta,
      i = n.iScale,
      s = [];
    let r, o;
    for (r = 0, o = n.data.length; r < o; ++r)
      s.push(i.getPixelForValue(this.getParsed(r)[i.axis], r));
    const a = e.barThickness;
    return {
      min: a || Lw(n),
      pixels: s,
      start: i._startPixel,
      end: i._endPixel,
      stackCount: this._getStackCount(),
      scale: i,
      grouped: e.grouped,
      ratio: a ? 1 : e.categoryPercentage * e.barPercentage,
    };
  }
  _calculateBarValuePixels(e) {
    const {
        _cachedMeta: { vScale: n, _stacked: i, index: s },
        options: { base: r, minBarLength: o },
      } = this,
      a = r || 0,
      l = this.getParsed(e),
      c = l._custom,
      u = Sl(c);
    let d = l[n.axis],
      h = 0,
      p = i ? this.applyStack(n, l, i) : d,
      m,
      y;
    p !== d && ((h = p - d), (p = d)),
      u &&
        ((d = c.barStart),
        (p = c.barEnd - c.barStart),
        d !== 0 && Ot(d) !== Ot(c.barEnd) && (h = 0),
        (h += d));
    const _ = !K(r) && !u ? r : h;
    let g = n.getPixelForValue(_);
    if (
      (this.chart.getDataVisibility(e)
        ? (m = n.getPixelForValue(h + p))
        : (m = g),
      (y = m - g),
      Math.abs(y) < o)
    ) {
      (y = Tw(y, n, a) * o), d === a && (g -= y / 2);
      const v = n.getPixelForDecimal(0),
        x = n.getPixelForDecimal(1),
        b = Math.min(v, x),
        w = Math.max(v, x);
      (g = Math.max(Math.min(g, w), b)),
        (m = g + y),
        i &&
          !u &&
          (l._stacks[n.axis]._visualValues[s] =
            n.getValueForPixel(m) - n.getValueForPixel(g));
    }
    if (g === n.getPixelForValue(a)) {
      const v = (Ot(y) * n.getLineWidthForValue(a)) / 2;
      (g += v), (y -= v);
    }
    return { size: y, base: g, head: m, center: m + y / 2 };
  }
  _calculateBarIndexPixels(e, n) {
    const i = n.scale,
      s = this.options,
      r = s.skipNull,
      o = B(s.maxBarThickness, 1 / 0);
    let a, l;
    if (n.grouped) {
      const c = r ? this._getStackCount(e) : n.stackCount,
        u = s.barThickness === "flex" ? Dw(e, n, s, c) : Ow(e, n, s, c),
        d = this._getStackIndex(
          this.index,
          this._cachedMeta.stack,
          r ? e : void 0
        );
      (a = u.start + u.chunk * d + u.chunk / 2),
        (l = Math.min(o, u.chunk * u.ratio));
    } else
      (a = i.getPixelForValue(this.getParsed(e)[i.axis], e)),
        (l = Math.min(o, n.min * n.ratio));
    return { base: a - l / 2, head: a + l / 2, center: a, size: l };
  }
  draw() {
    const e = this._cachedMeta,
      n = e.vScale,
      i = e.data,
      s = i.length;
    let r = 0;
    for (; r < s; ++r)
      this.getParsed(r)[n.axis] !== null && i[r].draw(this._ctx);
  }
}
O(wo, "id", "bar"),
  O(wo, "defaults", {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "base", "width", "height"],
      },
    },
  }),
  O(wo, "overrides", {
    scales: {
      _index_: { type: "category", offset: !0, grid: { offset: !0 } },
      _value_: { type: "linear", beginAtZero: !0 },
    },
  });
function Fw(t, e, n) {
  let i = 1,
    s = 1,
    r = 0,
    o = 0;
  if (e < ie) {
    const a = t,
      l = a + e,
      c = Math.cos(a),
      u = Math.sin(a),
      d = Math.cos(l),
      h = Math.sin(l),
      p = (x, b, w) => (cr(x, a, l, !0) ? 1 : Math.max(b, b * n, w, w * n)),
      m = (x, b, w) => (cr(x, a, l, !0) ? -1 : Math.min(b, b * n, w, w * n)),
      y = p(0, c, d),
      _ = p(ce, u, h),
      g = m(se, c, d),
      v = m(se + ce, u, h);
    (i = (y - g) / 2),
      (s = (_ - v) / 2),
      (r = -(y + g) / 2),
      (o = -(_ + v) / 2);
  }
  return { ratioX: i, ratioY: s, offsetX: r, offsetY: o };
}
class xs extends wn {
  constructor(e, n) {
    super(e, n),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0);
  }
  linkScales() {}
  parse(e, n) {
    const i = this.getDataset().data,
      s = this._cachedMeta;
    if (this._parsing === !1) s._parsed = i;
    else {
      let r = (l) => +i[l];
      if ($(i[e])) {
        const { key: l = "value" } = this._parsing;
        r = (c) => +Cn(i[c], l);
      }
      let o, a;
      for (o = e, a = e + n; o < a; ++o) s._parsed[o] = r(o);
    }
  }
  _getRotation() {
    return xt(this.options.rotation - 90);
  }
  _getCircumference() {
    return xt(this.options.circumference);
  }
  _getRotationExtents() {
    let e = ie,
      n = -ie;
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (
        this.chart.isDatasetVisible(i) &&
        this.chart.getDatasetMeta(i).type === this._type
      ) {
        const s = this.chart.getDatasetMeta(i).controller,
          r = s._getRotation(),
          o = s._getCircumference();
        (e = Math.min(e, r)), (n = Math.max(n, r + o));
      }
    return { rotation: e, circumference: n - e };
  }
  update(e) {
    const n = this.chart,
      { chartArea: i } = n,
      s = this._cachedMeta,
      r = s.data,
      o =
        this.getMaxBorderWidth() + this.getMaxOffset(r) + this.options.spacing,
      a = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
      l = Math.min(K_(this.options.cutout, a), 1),
      c = this._getRingWeight(this.index),
      { circumference: u, rotation: d } = this._getRotationExtents(),
      { ratioX: h, ratioY: p, offsetX: m, offsetY: y } = Fw(d, u, l),
      _ = (i.width - o) / h,
      g = (i.height - o) / p,
      v = Math.max(Math.min(_, g) / 2, 0),
      x = Um(this.options.radius, v),
      b = Math.max(x * l, 0),
      w = (x - b) / this._getVisibleDatasetWeightTotal();
    (this.offsetX = m * x),
      (this.offsetY = y * x),
      (s.total = this.calculateTotal()),
      (this.outerRadius = x - w * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - w * c, 0)),
      this.updateElements(r, 0, r.length, e);
  }
  _circumference(e, n) {
    const i = this.options,
      s = this._cachedMeta,
      r = this._getCircumference();
    return (n && i.animation.animateRotate) ||
      !this.chart.getDataVisibility(e) ||
      s._parsed[e] === null ||
      s.data[e].hidden
      ? 0
      : this.calculateCircumference((s._parsed[e] * r) / ie);
  }
  updateElements(e, n, i, s) {
    const r = s === "reset",
      o = this.chart,
      a = o.chartArea,
      c = o.options.animation,
      u = (a.left + a.right) / 2,
      d = (a.top + a.bottom) / 2,
      h = r && c.animateScale,
      p = h ? 0 : this.innerRadius,
      m = h ? 0 : this.outerRadius,
      { sharedOptions: y, includeOptions: _ } = this._getSharedOptions(n, s);
    let g = this._getRotation(),
      v;
    for (v = 0; v < n; ++v) g += this._circumference(v, r);
    for (v = n; v < n + i; ++v) {
      const x = this._circumference(v, r),
        b = e[v],
        w = {
          x: u + this.offsetX,
          y: d + this.offsetY,
          startAngle: g,
          endAngle: g + x,
          circumference: x,
          outerRadius: m,
          innerRadius: p,
        };
      _ &&
        (w.options =
          y || this.resolveDataElementOptions(v, b.active ? "active" : s)),
        (g += x),
        this.updateElement(b, v, w, s);
    }
  }
  calculateTotal() {
    const e = this._cachedMeta,
      n = e.data;
    let i = 0,
      s;
    for (s = 0; s < n.length; s++) {
      const r = e._parsed[s];
      r !== null &&
        !isNaN(r) &&
        this.chart.getDataVisibility(s) &&
        !n[s].hidden &&
        (i += Math.abs(r));
    }
    return i;
  }
  calculateCircumference(e) {
    const n = this._cachedMeta.total;
    return n > 0 && !isNaN(e) ? ie * (Math.abs(e) / n) : 0;
  }
  getLabelAndValue(e) {
    const n = this._cachedMeta,
      i = this.chart,
      s = i.data.labels || [],
      r = br(n._parsed[e], i.options.locale);
    return { label: s[e] || "", value: r };
  }
  getMaxBorderWidth(e) {
    let n = 0;
    const i = this.chart;
    let s, r, o, a, l;
    if (!e) {
      for (s = 0, r = i.data.datasets.length; s < r; ++s)
        if (i.isDatasetVisible(s)) {
          (o = i.getDatasetMeta(s)), (e = o.data), (a = o.controller);
          break;
        }
    }
    if (!e) return 0;
    for (s = 0, r = e.length; s < r; ++s)
      (l = a.resolveDataElementOptions(s)),
        l.borderAlign !== "inner" &&
          (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return n;
  }
  getMaxOffset(e) {
    let n = 0;
    for (let i = 0, s = e.length; i < s; ++i) {
      const r = this.resolveDataElementOptions(i);
      n = Math.max(n, r.offset || 0, r.hoverOffset || 0);
    }
    return n;
  }
  _getRingWeightOffset(e) {
    let n = 0;
    for (let i = 0; i < e; ++i)
      this.chart.isDatasetVisible(i) && (n += this._getRingWeight(i));
    return n;
  }
  _getRingWeight(e) {
    return Math.max(B(this.chart.data.datasets[e].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
O(xs, "id", "doughnut"),
  O(xs, "defaults", {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "circumference",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "startAngle",
          "x",
          "y",
          "offset",
          "borderWidth",
          "spacing",
        ],
      },
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r",
  }),
  O(xs, "descriptors", {
    _scriptable: (e) => e !== "spacing",
    _indexable: (e) =>
      e !== "spacing" &&
      !e.startsWith("borderDash") &&
      !e.startsWith("hoverBorderDash"),
  }),
  O(xs, "overrides", {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(e) {
            const n = e.data;
            if (n.labels.length && n.datasets.length) {
              const {
                labels: { pointStyle: i, color: s },
              } = e.legend.options;
              return n.labels.map((r, o) => {
                const l = e.getDatasetMeta(0).controller.getStyle(o);
                return {
                  text: r,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: s,
                  lineWidth: l.borderWidth,
                  pointStyle: i,
                  hidden: !e.getDataVisibility(o),
                  index: o,
                };
              });
            }
            return [];
          },
        },
        onClick(e, n, i) {
          i.chart.toggleDataVisibility(n.index), i.chart.update();
        },
      },
    },
  });
class ko extends wn {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(e) {
    const n = this._cachedMeta,
      { dataset: i, data: s = [], _dataset: r } = n,
      o = this.chart._animationsDisabled;
    let { start: a, count: l } = db(n, s, o);
    (this._drawStart = a),
      (this._drawCount = l),
      hb(n) && ((a = 0), (l = s.length)),
      (i._chart = this.chart),
      (i._datasetIndex = this.index),
      (i._decimated = !!r._decimated),
      (i.points = s);
    const c = this.resolveDatasetElementOptions(e);
    this.options.showLine || (c.borderWidth = 0),
      (c.segment = this.options.segment),
      this.updateElement(i, void 0, { animated: !o, options: c }, e),
      this.updateElements(s, a, l, e);
  }
  updateElements(e, n, i, s) {
    const r = s === "reset",
      { iScale: o, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
      { sharedOptions: u, includeOptions: d } = this._getSharedOptions(n, s),
      h = o.axis,
      p = a.axis,
      { spanGaps: m, segment: y } = this.options,
      _ = lr(m) ? m : Number.POSITIVE_INFINITY,
      g = this.chart._animationsDisabled || r || s === "none",
      v = n + i,
      x = e.length;
    let b = n > 0 && this.getParsed(n - 1);
    for (let w = 0; w < x; ++w) {
      const k = e[w],
        S = g ? k : {};
      if (w < n || w >= v) {
        S.skip = !0;
        continue;
      }
      const C = this.getParsed(w),
        M = K(C[p]),
        E = (S[h] = o.getPixelForValue(C[h], w)),
        D = (S[p] =
          r || M
            ? a.getBasePixel()
            : a.getPixelForValue(l ? this.applyStack(a, C, l) : C[p], w));
      (S.skip = isNaN(E) || isNaN(D) || M),
        (S.stop = w > 0 && Math.abs(C[h] - b[h]) > _),
        y && ((S.parsed = C), (S.raw = c.data[w])),
        d &&
          (S.options =
            u || this.resolveDataElementOptions(w, k.active ? "active" : s)),
        g || this.updateElement(k, w, S, s),
        (b = C);
    }
  }
  getMaxOverflow() {
    const e = this._cachedMeta,
      n = e.dataset,
      i = (n.options && n.options.borderWidth) || 0,
      s = e.data || [];
    if (!s.length) return i;
    const r = s[0].size(this.resolveDataElementOptions(0)),
      o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
    return Math.max(i, r, o) / 2;
  }
  draw() {
    const e = this._cachedMeta;
    e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis),
      super.draw();
  }
}
O(ko, "id", "line"),
  O(ko, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  }),
  O(ko, "overrides", {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  });
class So extends wn {
  constructor(e, n) {
    super(e, n), (this.innerRadius = void 0), (this.outerRadius = void 0);
  }
  getLabelAndValue(e) {
    const n = this._cachedMeta,
      i = this.chart,
      s = i.data.labels || [],
      r = br(n._parsed[e].r, i.options.locale);
    return { label: s[e] || "", value: r };
  }
  parseObjectData(e, n, i, s) {
    return Vb.bind(this)(e, n, i, s);
  }
  update(e) {
    const n = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(n, 0, n.length, e);
  }
  getMinMax() {
    const e = this._cachedMeta,
      n = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
    return (
      e.data.forEach((i, s) => {
        const r = this.getParsed(s).r;
        !isNaN(r) &&
          this.chart.getDataVisibility(s) &&
          (r < n.min && (n.min = r), r > n.max && (n.max = r));
      }),
      n
    );
  }
  _updateRadius() {
    const e = this.chart,
      n = e.chartArea,
      i = e.options,
      s = Math.min(n.right - n.left, n.bottom - n.top),
      r = Math.max(s / 2, 0),
      o = Math.max(i.cutoutPercentage ? (r / 100) * i.cutoutPercentage : 1, 0),
      a = (r - o) / e.getVisibleDatasetCount();
    (this.outerRadius = r - a * this.index),
      (this.innerRadius = this.outerRadius - a);
  }
  updateElements(e, n, i, s) {
    const r = s === "reset",
      o = this.chart,
      l = o.options.animation,
      c = this._cachedMeta.rScale,
      u = c.xCenter,
      d = c.yCenter,
      h = c.getIndexAngle(0) - 0.5 * se;
    let p = h,
      m;
    const y = 360 / this.countVisibleElements();
    for (m = 0; m < n; ++m) p += this._computeAngle(m, s, y);
    for (m = n; m < n + i; m++) {
      const _ = e[m];
      let g = p,
        v = p + this._computeAngle(m, s, y),
        x = o.getDataVisibility(m)
          ? c.getDistanceFromCenterForValue(this.getParsed(m).r)
          : 0;
      (p = v), r && (l.animateScale && (x = 0), l.animateRotate && (g = v = h));
      const b = {
        x: u,
        y: d,
        innerRadius: 0,
        outerRadius: x,
        startAngle: g,
        endAngle: v,
        options: this.resolveDataElementOptions(m, _.active ? "active" : s),
      };
      this.updateElement(_, m, b, s);
    }
  }
  countVisibleElements() {
    const e = this._cachedMeta;
    let n = 0;
    return (
      e.data.forEach((i, s) => {
        !isNaN(this.getParsed(s).r) && this.chart.getDataVisibility(s) && n++;
      }),
      n
    );
  }
  _computeAngle(e, n, i) {
    return this.chart.getDataVisibility(e)
      ? xt(this.resolveDataElementOptions(e, n).angle || i)
      : 0;
  }
}
O(So, "id", "polarArea"),
  O(So, "defaults", {
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !0 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
        ],
      },
    },
    indexAxis: "r",
    startAngle: 0,
  }),
  O(So, "overrides", {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(e) {
            const n = e.data;
            if (n.labels.length && n.datasets.length) {
              const {
                labels: { pointStyle: i, color: s },
              } = e.legend.options;
              return n.labels.map((r, o) => {
                const l = e.getDatasetMeta(0).controller.getStyle(o);
                return {
                  text: r,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: s,
                  lineWidth: l.borderWidth,
                  pointStyle: i,
                  hidden: !e.getDataVisibility(o),
                  index: o,
                };
              });
            }
            return [];
          },
        },
        onClick(e, n, i) {
          i.chart.toggleDataVisibility(n.index), i.chart.update();
        },
      },
    },
    scales: {
      r: {
        type: "radialLinear",
        angleLines: { display: !1 },
        beginAtZero: !0,
        grid: { circular: !0 },
        pointLabels: { display: !1 },
        startAngle: 0,
      },
    },
  });
function Rn() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class hd {
  constructor(e) {
    O(this, "options");
    this.options = e || {};
  }
  static override(e) {
    Object.assign(hd.prototype, e);
  }
  init() {}
  formats() {
    return Rn();
  }
  parse() {
    return Rn();
  }
  format() {
    return Rn();
  }
  add() {
    return Rn();
  }
  diff() {
    return Rn();
  }
  startOf() {
    return Rn();
  }
  endOf() {
    return Rn();
  }
}
var Bw = { _date: hd };
function Hw(t, e, n, i) {
  const { controller: s, data: r, _sorted: o } = t,
    a = s._cachedMeta.iScale;
  if (a && e === a.axis && e !== "r" && o && r.length) {
    const l = a._reversePixels ? ob : Kn;
    if (i) {
      if (s._sharedOptions) {
        const c = r[0],
          u = typeof c.getRange == "function" && c.getRange(e);
        if (u) {
          const d = l(r, e, n - u),
            h = l(r, e, n + u);
          return { lo: d.lo, hi: h.hi };
        }
      }
    } else return l(r, e, n);
  }
  return { lo: 0, hi: r.length - 1 };
}
function wr(t, e, n, i, s) {
  const r = t.getSortedVisibleDatasetMetas(),
    o = n[e];
  for (let a = 0, l = r.length; a < l; ++a) {
    const { index: c, data: u } = r[a],
      { lo: d, hi: h } = Hw(r[a], e, o, s);
    for (let p = d; p <= h; ++p) {
      const m = u[p];
      m.skip || i(m, c, p);
    }
  }
}
function Vw(t) {
  const e = t.indexOf("x") !== -1,
    n = t.indexOf("y") !== -1;
  return function (i, s) {
    const r = e ? Math.abs(i.x - s.x) : 0,
      o = n ? Math.abs(i.y - s.y) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
  };
}
function Cl(t, e, n, i, s) {
  const r = [];
  return (
    (!s && !t.isPointInArea(e)) ||
      wr(
        t,
        n,
        e,
        function (a, l, c) {
          (!s && !Vt(a, t.chartArea, 0)) ||
            (a.inRange(e.x, e.y, i) &&
              r.push({ element: a, datasetIndex: l, index: c }));
        },
        !0
      ),
    r
  );
}
function Ww(t, e, n, i) {
  let s = [];
  function r(o, a, l) {
    const { startAngle: c, endAngle: u } = o.getProps(
        ["startAngle", "endAngle"],
        i
      ),
      { angle: d } = Km(o, { x: e.x, y: e.y });
    cr(d, c, u) && s.push({ element: o, datasetIndex: a, index: l });
  }
  return wr(t, n, e, r), s;
}
function $w(t, e, n, i, s, r) {
  let o = [];
  const a = Vw(n);
  let l = Number.POSITIVE_INFINITY;
  function c(u, d, h) {
    const p = u.inRange(e.x, e.y, s);
    if (i && !p) return;
    const m = u.getCenterPoint(s);
    if (!(!!r || t.isPointInArea(m)) && !p) return;
    const _ = a(e, m);
    _ < l
      ? ((o = [{ element: u, datasetIndex: d, index: h }]), (l = _))
      : _ === l && o.push({ element: u, datasetIndex: d, index: h });
  }
  return wr(t, n, e, c), o;
}
function El(t, e, n, i, s, r) {
  return !r && !t.isPointInArea(e)
    ? []
    : n === "r" && !i
    ? Ww(t, e, n, s)
    : $w(t, e, n, i, s, r);
}
function wf(t, e, n, i, s) {
  const r = [],
    o = n === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return (
    wr(t, n, e, (l, c, u) => {
      l[o](e[n], s) &&
        (r.push({ element: l, datasetIndex: c, index: u }),
        (a = a || l.inRange(e.x, e.y, s)));
    }),
    i && !a ? [] : r
  );
}
var Uw = {
  evaluateInteractionItems: wr,
  modes: {
    index(t, e, n, i) {
      const s = Bn(e, t),
        r = n.axis || "x",
        o = n.includeInvisible || !1,
        a = n.intersect ? Cl(t, s, r, i, o) : El(t, s, r, !1, i, o),
        l = [];
      return a.length
        ? (t.getSortedVisibleDatasetMetas().forEach((c) => {
            const u = a[0].index,
              d = c.data[u];
            d &&
              !d.skip &&
              l.push({ element: d, datasetIndex: c.index, index: u });
          }),
          l)
        : [];
    },
    dataset(t, e, n, i) {
      const s = Bn(e, t),
        r = n.axis || "xy",
        o = n.includeInvisible || !1;
      let a = n.intersect ? Cl(t, s, r, i, o) : El(t, s, r, !1, i, o);
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          c = t.getDatasetMeta(l).data;
        a = [];
        for (let u = 0; u < c.length; ++u)
          a.push({ element: c[u], datasetIndex: l, index: u });
      }
      return a;
    },
    point(t, e, n, i) {
      const s = Bn(e, t),
        r = n.axis || "xy",
        o = n.includeInvisible || !1;
      return Cl(t, s, r, i, o);
    },
    nearest(t, e, n, i) {
      const s = Bn(e, t),
        r = n.axis || "xy",
        o = n.includeInvisible || !1;
      return El(t, s, r, n.intersect, i, o);
    },
    x(t, e, n, i) {
      const s = Bn(e, t);
      return wf(t, s, "x", n.intersect, i);
    },
    y(t, e, n, i) {
      const s = Bn(e, t);
      return wf(t, s, "y", n.intersect, i);
    },
  },
};
const p0 = ["left", "top", "right", "bottom"];
function cs(t, e) {
  return t.filter((n) => n.pos === e);
}
function kf(t, e) {
  return t.filter((n) => p0.indexOf(n.pos) === -1 && n.box.axis === e);
}
function us(t, e) {
  return t.sort((n, i) => {
    const s = e ? i : n,
      r = e ? n : i;
    return s.weight === r.weight ? s.index - r.index : s.weight - r.weight;
  });
}
function Yw(t) {
  const e = [];
  let n, i, s, r, o, a;
  for (n = 0, i = (t || []).length; n < i; ++n)
    (s = t[n]),
      ({
        position: r,
        options: { stack: o, stackWeight: a = 1 },
      } = s),
      e.push({
        index: n,
        box: s,
        pos: r,
        horizontal: s.isHorizontal(),
        weight: s.weight,
        stack: o && r + o,
        stackWeight: a,
      });
  return e;
}
function Xw(t) {
  const e = {};
  for (const n of t) {
    const { stack: i, pos: s, stackWeight: r } = n;
    if (!i || !p0.includes(s)) continue;
    const o = e[i] || (e[i] = { count: 0, placed: 0, weight: 0, size: 0 });
    o.count++, (o.weight += r);
  }
  return e;
}
function Kw(t, e) {
  const n = Xw(t),
    { vBoxMaxWidth: i, hBoxMaxHeight: s } = e;
  let r, o, a;
  for (r = 0, o = t.length; r < o; ++r) {
    a = t[r];
    const { fullSize: l } = a.box,
      c = n[a.stack],
      u = c && a.stackWeight / c.weight;
    a.horizontal
      ? ((a.width = u ? u * i : l && e.availableWidth), (a.height = s))
      : ((a.width = i), (a.height = u ? u * s : l && e.availableHeight));
  }
  return n;
}
function Qw(t) {
  const e = Yw(t),
    n = us(
      e.filter((c) => c.box.fullSize),
      !0
    ),
    i = us(cs(e, "left"), !0),
    s = us(cs(e, "right")),
    r = us(cs(e, "top"), !0),
    o = us(cs(e, "bottom")),
    a = kf(e, "x"),
    l = kf(e, "y");
  return {
    fullSize: n,
    leftAndTop: i.concat(r),
    rightAndBottom: s.concat(l).concat(o).concat(a),
    chartArea: cs(e, "chartArea"),
    vertical: i.concat(s).concat(l),
    horizontal: r.concat(o).concat(a),
  };
}
function Sf(t, e, n, i) {
  return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
}
function g0(t, e) {
  (t.top = Math.max(t.top, e.top)),
    (t.left = Math.max(t.left, e.left)),
    (t.bottom = Math.max(t.bottom, e.bottom)),
    (t.right = Math.max(t.right, e.right));
}
function qw(t, e, n, i) {
  const { pos: s, box: r } = n,
    o = t.maxPadding;
  if (!$(s)) {
    n.size && (t[s] -= n.size);
    const d = i[n.stack] || { size: 0, count: 1 };
    (d.size = Math.max(d.size, n.horizontal ? r.height : r.width)),
      (n.size = d.size / d.count),
      (t[s] += n.size);
  }
  r.getPadding && g0(o, r.getPadding());
  const a = Math.max(0, e.outerWidth - Sf(o, t, "left", "right")),
    l = Math.max(0, e.outerHeight - Sf(o, t, "top", "bottom")),
    c = a !== t.w,
    u = l !== t.h;
  return (
    (t.w = a),
    (t.h = l),
    n.horizontal ? { same: c, other: u } : { same: u, other: c }
  );
}
function Gw(t) {
  const e = t.maxPadding;
  function n(i) {
    const s = Math.max(e[i] - t[i], 0);
    return (t[i] += s), s;
  }
  (t.y += n("top")), (t.x += n("left")), n("right"), n("bottom");
}
function Zw(t, e) {
  const n = e.maxPadding;
  function i(s) {
    const r = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      s.forEach((o) => {
        r[o] = Math.max(e[o], n[o]);
      }),
      r
    );
  }
  return i(t ? ["left", "right"] : ["top", "bottom"]);
}
function _s(t, e, n, i) {
  const s = [];
  let r, o, a, l, c, u;
  for (r = 0, o = t.length, c = 0; r < o; ++r) {
    (a = t[r]),
      (l = a.box),
      l.update(a.width || e.w, a.height || e.h, Zw(a.horizontal, e));
    const { same: d, other: h } = qw(e, n, a, i);
    (c |= d && s.length), (u = u || h), l.fullSize || s.push(a);
  }
  return (c && _s(s, e, n, i)) || u;
}
function eo(t, e, n, i, s) {
  (t.top = n),
    (t.left = e),
    (t.right = e + i),
    (t.bottom = n + s),
    (t.width = i),
    (t.height = s);
}
function Cf(t, e, n, i) {
  const s = n.padding;
  let { x: r, y: o } = e;
  for (const a of t) {
    const l = a.box,
      c = i[a.stack] || { count: 1, placed: 0, weight: 1 },
      u = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = e.w * u,
        h = c.size || l.height;
      ar(c.start) && (o = c.start),
        l.fullSize
          ? eo(l, s.left, o, n.outerWidth - s.right - s.left, h)
          : eo(l, e.left + c.placed, o, d, h),
        (c.start = o),
        (c.placed += d),
        (o = l.bottom);
    } else {
      const d = e.h * u,
        h = c.size || l.width;
      ar(c.start) && (r = c.start),
        l.fullSize
          ? eo(l, r, s.top, h, n.outerHeight - s.bottom - s.top)
          : eo(l, r, e.top + c.placed, h, d),
        (c.start = r),
        (c.placed += d),
        (r = l.right);
    }
  }
  (e.x = r), (e.y = o);
}
var at = {
  addBox(t, e) {
    t.boxes || (t.boxes = []),
      (e.fullSize = e.fullSize || !1),
      (e.position = e.position || "top"),
      (e.weight = e.weight || 0),
      (e._layers =
        e._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                e.draw(n);
              },
            },
          ];
        }),
      t.boxes.push(e);
  },
  removeBox(t, e) {
    const n = t.boxes ? t.boxes.indexOf(e) : -1;
    n !== -1 && t.boxes.splice(n, 1);
  },
  configure(t, e, n) {
    (e.fullSize = n.fullSize), (e.position = n.position), (e.weight = n.weight);
  },
  update(t, e, n, i) {
    if (!t) return;
    const s = De(t.options.layout.padding),
      r = Math.max(e - s.width, 0),
      o = Math.max(n - s.height, 0),
      a = Qw(t.boxes),
      l = a.vertical,
      c = a.horizontal;
    X(t.boxes, (y) => {
      typeof y.beforeLayout == "function" && y.beforeLayout();
    });
    const u =
        l.reduce(
          (y, _) => (_.box.options && _.box.options.display === !1 ? y : y + 1),
          0
        ) || 1,
      d = Object.freeze({
        outerWidth: e,
        outerHeight: n,
        padding: s,
        availableWidth: r,
        availableHeight: o,
        vBoxMaxWidth: r / 2 / u,
        hBoxMaxHeight: o / 2,
      }),
      h = Object.assign({}, s);
    g0(h, De(i));
    const p = Object.assign(
        { maxPadding: h, w: r, h: o, x: s.left, y: s.top },
        s
      ),
      m = Kw(l.concat(c), d);
    _s(a.fullSize, p, d, m),
      _s(l, p, d, m),
      _s(c, p, d, m) && _s(l, p, d, m),
      Gw(p),
      Cf(a.leftAndTop, p, d, m),
      (p.x += p.w),
      (p.y += p.h),
      Cf(a.rightAndBottom, p, d, m),
      (t.chartArea = {
        left: p.left,
        top: p.top,
        right: p.left + p.w,
        bottom: p.top + p.h,
        height: p.h,
        width: p.w,
      }),
      X(a.chartArea, (y) => {
        const _ = y.box;
        Object.assign(_, t.chartArea),
          _.update(p.w, p.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class m0 {
  acquireContext(e, n) {}
  releaseContext(e) {
    return !1;
  }
  addEventListener(e, n, i) {}
  removeEventListener(e, n, i) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(e, n, i, s) {
    return (
      (n = Math.max(0, n || e.width)),
      (i = i || e.height),
      { width: n, height: Math.max(0, s ? Math.floor(n / s) : i) }
    );
  }
  isAttached(e) {
    return !0;
  }
  updateConfig(e) {}
}
class Jw extends m0 {
  acquireContext(e) {
    return (e && e.getContext && e.getContext("2d")) || null;
  }
  updateConfig(e) {
    e.options.animation = !1;
  }
}
const Co = "$chartjs",
  e1 = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  Ef = (t) => t === null || t === "";
function t1(t, e) {
  const n = t.style,
    i = t.getAttribute("height"),
    s = t.getAttribute("width");
  if (
    ((t[Co] = {
      initial: {
        height: i,
        width: s,
        style: { display: n.display, height: n.height, width: n.width },
      },
    }),
    (n.display = n.display || "block"),
    (n.boxSizing = n.boxSizing || "border-box"),
    Ef(s))
  ) {
    const r = lf(t, "width");
    r !== void 0 && (t.width = r);
  }
  if (Ef(i))
    if (t.style.height === "") t.height = t.width / (e || 2);
    else {
      const r = lf(t, "height");
      r !== void 0 && (t.height = r);
    }
  return t;
}
const v0 = nw ? { passive: !0 } : !1;
function n1(t, e, n) {
  t.addEventListener(e, n, v0);
}
function i1(t, e, n) {
  t.canvas.removeEventListener(e, n, v0);
}
function s1(t, e) {
  const n = e1[t.type] || t.type,
    { x: i, y: s } = Bn(t, e);
  return {
    type: n,
    chart: e,
    native: t,
    x: i !== void 0 ? i : null,
    y: s !== void 0 ? s : null,
  };
}
function ga(t, e) {
  for (const n of t) if (n === e || n.contains(e)) return !0;
}
function r1(t, e, n) {
  const i = t.canvas,
    s = new MutationObserver((r) => {
      let o = !1;
      for (const a of r)
        (o = o || ga(a.addedNodes, i)), (o = o && !ga(a.removedNodes, i));
      o && n();
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
function o1(t, e, n) {
  const i = t.canvas,
    s = new MutationObserver((r) => {
      let o = !1;
      for (const a of r)
        (o = o || ga(a.removedNodes, i)), (o = o && !ga(a.addedNodes, i));
      o && n();
    });
  return s.observe(document, { childList: !0, subtree: !0 }), s;
}
const dr = new Map();
let jf = 0;
function y0() {
  const t = window.devicePixelRatio;
  t !== jf &&
    ((jf = t),
    dr.forEach((e, n) => {
      n.currentDevicePixelRatio !== t && e();
    }));
}
function a1(t, e) {
  dr.size || window.addEventListener("resize", y0), dr.set(t, e);
}
function l1(t) {
  dr.delete(t), dr.size || window.removeEventListener("resize", y0);
}
function c1(t, e, n) {
  const i = t.canvas,
    s = i && dd(i);
  if (!s) return;
  const r = Zm((a, l) => {
      const c = s.clientWidth;
      n(a, l), c < s.clientWidth && n();
    }, window),
    o = new ResizeObserver((a) => {
      const l = a[0],
        c = l.contentRect.width,
        u = l.contentRect.height;
      (c === 0 && u === 0) || r(c, u);
    });
  return o.observe(s), a1(t, r), o;
}
function jl(t, e, n) {
  n && n.disconnect(), e === "resize" && l1(t);
}
function u1(t, e, n) {
  const i = t.canvas,
    s = Zm((r) => {
      t.ctx !== null && n(s1(r, t));
    }, t);
  return n1(i, e, s), s;
}
class d1 extends m0 {
  acquireContext(e, n) {
    const i = e && e.getContext && e.getContext("2d");
    return i && i.canvas === e ? (t1(e, n), i) : null;
  }
  releaseContext(e) {
    const n = e.canvas;
    if (!n[Co]) return !1;
    const i = n[Co].initial;
    ["height", "width"].forEach((r) => {
      const o = i[r];
      K(o) ? n.removeAttribute(r) : n.setAttribute(r, o);
    });
    const s = i.style || {};
    return (
      Object.keys(s).forEach((r) => {
        n.style[r] = s[r];
      }),
      (n.width = n.width),
      delete n[Co],
      !0
    );
  }
  addEventListener(e, n, i) {
    this.removeEventListener(e, n);
    const s = e.$proxies || (e.$proxies = {}),
      o = { attach: r1, detach: o1, resize: c1 }[n] || u1;
    s[n] = o(e, n, i);
  }
  removeEventListener(e, n) {
    const i = e.$proxies || (e.$proxies = {}),
      s = i[n];
    if (!s) return;
    (({ attach: jl, detach: jl, resize: jl })[n] || i1)(e, n, s),
      (i[n] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(e, n, i, s) {
    return tw(e, n, i, s);
  }
  isAttached(e) {
    const n = dd(e);
    return !!(n && n.isConnected);
  }
}
function h1(t) {
  return !a0() || (typeof OffscreenCanvas < "u" && t instanceof OffscreenCanvas)
    ? Jw
    : d1;
}
var oo;
let qt =
  ((oo = class {
    constructor() {
      O(this, "x");
      O(this, "y");
      O(this, "active", !1);
      O(this, "options");
      O(this, "$animations");
    }
    tooltipPosition(e) {
      const { x: n, y: i } = this.getProps(["x", "y"], e);
      return { x: n, y: i };
    }
    hasValue() {
      return lr(this.x) && lr(this.y);
    }
    getProps(e, n) {
      const i = this.$animations;
      if (!n || !i) return this;
      const s = {};
      return (
        e.forEach((r) => {
          s[r] = i[r] && i[r].active() ? i[r]._to : this[r];
        }),
        s
      );
    }
  }),
  O(oo, "defaults", {}),
  O(oo, "defaultRoutes"),
  oo);
function f1(t, e) {
  const n = t.options.ticks,
    i = p1(t),
    s = Math.min(n.maxTicksLimit || i, i),
    r = n.major.enabled ? m1(e) : [],
    o = r.length,
    a = r[0],
    l = r[o - 1],
    c = [];
  if (o > s) return v1(e, c, r, o / s), c;
  const u = g1(r, e, s);
  if (o > 0) {
    let d, h;
    const p = o > 1 ? Math.round((l - a) / (o - 1)) : null;
    for (to(e, c, u, K(p) ? 0 : a - p, a), d = 0, h = o - 1; d < h; d++)
      to(e, c, u, r[d], r[d + 1]);
    return to(e, c, u, l, K(p) ? e.length : l + p), c;
  }
  return to(e, c, u), c;
}
function p1(t) {
  const e = t.options.offset,
    n = t._tickSize(),
    i = t._length / n + (e ? 0 : 1),
    s = t._maxLength / n;
  return Math.floor(Math.min(i, s));
}
function g1(t, e, n) {
  const i = y1(t),
    s = e.length / n;
  if (!i) return Math.max(s, 1);
  const r = nb(i);
  for (let o = 0, a = r.length - 1; o < a; o++) {
    const l = r[o];
    if (l > s) return l;
  }
  return Math.max(s, 1);
}
function m1(t) {
  const e = [];
  let n, i;
  for (n = 0, i = t.length; n < i; n++) t[n].major && e.push(n);
  return e;
}
function v1(t, e, n, i) {
  let s = 0,
    r = n[0],
    o;
  for (i = Math.ceil(i), o = 0; o < t.length; o++)
    o === r && (e.push(t[o]), s++, (r = n[s * i]));
}
function to(t, e, n, i, s) {
  const r = B(i, 0),
    o = Math.min(B(s, t.length), t.length);
  let a = 0,
    l,
    c,
    u;
  for (
    n = Math.ceil(n), s && ((l = s - i), (n = l / Math.floor(l / n))), u = r;
    u < 0;

  )
    a++, (u = Math.round(r + a * n));
  for (c = Math.max(r, 0); c < o; c++)
    c === u && (e.push(t[c]), a++, (u = Math.round(r + a * n)));
}
function y1(t) {
  const e = t.length;
  let n, i;
  if (e < 2) return !1;
  for (i = t[0], n = 1; n < e; ++n) if (t[n] - t[n - 1] !== i) return !1;
  return i;
}
const x1 = (t) => (t === "left" ? "right" : t === "right" ? "left" : t),
  Mf = (t, e, n) => (e === "top" || e === "left" ? t[e] + n : t[e] - n),
  Pf = (t, e) => Math.min(e || t, t);
function Lf(t, e) {
  const n = [],
    i = t.length / e,
    s = t.length;
  let r = 0;
  for (; r < s; r += i) n.push(t[Math.floor(r)]);
  return n;
}
function _1(t, e, n) {
  const i = t.ticks.length,
    s = Math.min(e, i - 1),
    r = t._startPixel,
    o = t._endPixel,
    a = 1e-6;
  let l = t.getPixelForTick(s),
    c;
  if (
    !(
      n &&
      (i === 1
        ? (c = Math.max(l - r, o - l))
        : e === 0
        ? (c = (t.getPixelForTick(1) - l) / 2)
        : (c = (l - t.getPixelForTick(s - 1)) / 2),
      (l += s < e ? c : -c),
      l < r - a || l > o + a)
    )
  )
    return l;
}
function b1(t, e) {
  X(t, (n) => {
    const i = n.gc,
      s = i.length / 2;
    let r;
    if (s > e) {
      for (r = 0; r < s; ++r) delete n.data[i[r]];
      i.splice(0, s);
    }
  });
}
function ds(t) {
  return t.drawTicks ? t.tickLength : 0;
}
function Of(t, e) {
  if (!t.display) return 0;
  const n = ve(t.font, e),
    i = De(t.padding);
  return (ne(t.text) ? t.text.length : 1) * n.lineHeight + i.height;
}
function w1(t, e) {
  return On(t, { scale: e, type: "scale" });
}
function k1(t, e, n) {
  return On(t, { tick: n, index: e, type: "tick" });
}
function S1(t, e, n) {
  let i = id(t);
  return ((n && e !== "right") || (!n && e === "right")) && (i = x1(i)), i;
}
function C1(t, e, n, i) {
  const { top: s, left: r, bottom: o, right: a, chart: l } = t,
    { chartArea: c, scales: u } = l;
  let d = 0,
    h,
    p,
    m;
  const y = o - s,
    _ = a - r;
  if (t.isHorizontal()) {
    if (((p = Me(i, r, a)), $(n))) {
      const g = Object.keys(n)[0],
        v = n[g];
      m = u[g].getPixelForValue(v) + y - e;
    } else
      n === "center" ? (m = (c.bottom + c.top) / 2 + y - e) : (m = Mf(t, n, e));
    h = a - r;
  } else {
    if ($(n)) {
      const g = Object.keys(n)[0],
        v = n[g];
      p = u[g].getPixelForValue(v) - _ + e;
    } else
      n === "center" ? (p = (c.left + c.right) / 2 - _ + e) : (p = Mf(t, n, e));
    (m = Me(i, o, s)), (d = n === "left" ? -ce : ce);
  }
  return { titleX: p, titleY: m, maxWidth: h, rotation: d };
}
class ui extends qt {
  constructor(e) {
    super(),
      (this.id = e.id),
      (this.type = e.type),
      (this.options = void 0),
      (this.ctx = e.ctx),
      (this.chart = e.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(e) {
    (this.options = e.setContext(this.getContext())),
      (this.axis = e.axis),
      (this._userMin = this.parse(e.min)),
      (this._userMax = this.parse(e.max)),
      (this._suggestedMin = this.parse(e.suggestedMin)),
      (this._suggestedMax = this.parse(e.suggestedMax));
  }
  parse(e, n) {
    return e;
  }
  getUserBounds() {
    let { _userMin: e, _userMax: n, _suggestedMin: i, _suggestedMax: s } = this;
    return (
      (e = Qe(e, Number.POSITIVE_INFINITY)),
      (n = Qe(n, Number.NEGATIVE_INFINITY)),
      (i = Qe(i, Number.POSITIVE_INFINITY)),
      (s = Qe(s, Number.NEGATIVE_INFINITY)),
      { min: Qe(e, i), max: Qe(n, s), minDefined: _e(e), maxDefined: _e(n) }
    );
  }
  getMinMax(e) {
    let { min: n, max: i, minDefined: s, maxDefined: r } = this.getUserBounds(),
      o;
    if (s && r) return { min: n, max: i };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      (o = a[l].controller.getMinMax(this, e)),
        s || (n = Math.min(n, o.min)),
        r || (i = Math.max(i, o.max));
    return (
      (n = r && n > i ? i : n),
      (i = s && n > i ? n : i),
      { min: Qe(n, Qe(i, n)), max: Qe(i, Qe(n, i)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const e = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? e.xLabels : e.yLabels) ||
      e.labels ||
      []
    );
  }
  getLabelItems(e = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(e));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    q(this.options.beforeUpdate, [this]);
  }
  update(e, n, i) {
    const { beginAtZero: s, grace: r, ticks: o } = this.options,
      a = o.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = e),
      (this.maxHeight = n),
      (this._margins = i =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + i.left + i.right
        : this.height + i.top + i.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = Db(this, r, s)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Lf(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      o.display &&
        (o.autoSkip || o.source === "auto") &&
        ((this.ticks = f1(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let e = this.options.reverse,
      n,
      i;
    this.isHorizontal()
      ? ((n = this.left), (i = this.right))
      : ((n = this.top), (i = this.bottom), (e = !e)),
      (this._startPixel = n),
      (this._endPixel = i),
      (this._reversePixels = e),
      (this._length = i - n),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    q(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    q(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    q(this.options.afterSetDimensions, [this]);
  }
  _callHooks(e) {
    this.chart.notifyPlugins(e, this.getContext()), q(this.options[e], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    q(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(e) {
    const n = this.options.ticks;
    let i, s, r;
    for (i = 0, s = e.length; i < s; i++)
      (r = e[i]), (r.label = q(n.callback, [r.value, i, e], this));
  }
  afterTickToLabelConversion() {
    q(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    q(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const e = this.options,
      n = e.ticks,
      i = Pf(this.ticks.length, e.ticks.maxTicksLimit),
      s = n.minRotation || 0,
      r = n.maxRotation;
    let o = s,
      a,
      l,
      c;
    if (
      !this._isVisible() ||
      !n.display ||
      s >= r ||
      i <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = s;
      return;
    }
    const u = this._getLabelSizes(),
      d = u.widest.width,
      h = u.highest.height,
      p = Le(this.chart.width - d, 0, this.maxWidth);
    (a = e.offset ? this.maxWidth / i : p / (i - 1)),
      d + 6 > a &&
        ((a = p / (i - (e.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          ds(e.grid) -
          n.padding -
          Of(e.title, this.chart.options.font)),
        (c = Math.sqrt(d * d + h * h)),
        (o = td(
          Math.min(
            Math.asin(Le((u.highest.height + 6) / a, -1, 1)),
            Math.asin(Le(l / c, -1, 1)) - Math.asin(Le(h / c, -1, 1))
          )
        )),
        (o = Math.max(s, Math.min(r, o)))),
      (this.labelRotation = o);
  }
  afterCalculateLabelRotation() {
    q(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    q(this.options.beforeFit, [this]);
  }
  fit() {
    const e = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: i, title: s, grid: r },
      } = this,
      o = this._isVisible(),
      a = this.isHorizontal();
    if (o) {
      const l = Of(s, n.options.font);
      if (
        (a
          ? ((e.width = this.maxWidth), (e.height = ds(r) + l))
          : ((e.height = this.maxHeight), (e.width = ds(r) + l)),
        i.display && this.ticks.length)
      ) {
        const {
            first: c,
            last: u,
            widest: d,
            highest: h,
          } = this._getLabelSizes(),
          p = i.padding * 2,
          m = xt(this.labelRotation),
          y = Math.cos(m),
          _ = Math.sin(m);
        if (a) {
          const g = i.mirror ? 0 : _ * d.width + y * h.height;
          e.height = Math.min(this.maxHeight, e.height + g + p);
        } else {
          const g = i.mirror ? 0 : y * d.width + _ * h.height;
          e.width = Math.min(this.maxWidth, e.width + g + p);
        }
        this._calculatePadding(c, u, _, y);
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length =
            n.width - this._margins.left - this._margins.right),
          (this.height = e.height))
        : ((this.width = e.width),
          (this.height = this._length =
            n.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(e, n, i, s) {
    const {
        ticks: { align: r, padding: o },
        position: a,
      } = this.options,
      l = this.labelRotation !== 0,
      c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const u = this.getPixelForTick(0) - this.left,
        d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let h = 0,
        p = 0;
      l
        ? c
          ? ((h = s * e.width), (p = i * n.height))
          : ((h = i * e.height), (p = s * n.width))
        : r === "start"
        ? (p = n.width)
        : r === "end"
        ? (h = e.width)
        : r !== "inner" && ((h = e.width / 2), (p = n.width / 2)),
        (this.paddingLeft = Math.max(
          ((h - u + o) * this.width) / (this.width - u),
          0
        )),
        (this.paddingRight = Math.max(
          ((p - d + o) * this.width) / (this.width - d),
          0
        ));
    } else {
      let u = n.height / 2,
        d = e.height / 2;
      r === "start"
        ? ((u = 0), (d = e.height))
        : r === "end" && ((u = n.height), (d = 0)),
        (this.paddingTop = u + o),
        (this.paddingBottom = d + o);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    q(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: e, position: n } = this.options;
    return n === "top" || n === "bottom" || e === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(e) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(e);
    let n, i;
    for (n = 0, i = e.length; n < i; n++)
      K(e[n].label) && (e.splice(n, 1), i--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let e = this._labelSizes;
    if (!e) {
      const n = this.options.ticks.sampleSize;
      let i = this.ticks;
      n < i.length && (i = Lf(i, n)),
        (this._labelSizes = e =
          this._computeLabelSizes(
            i,
            i.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return e;
  }
  _computeLabelSizes(e, n, i) {
    const { ctx: s, _longestTextCache: r } = this,
      o = [],
      a = [],
      l = Math.floor(n / Pf(n, i));
    let c = 0,
      u = 0,
      d,
      h,
      p,
      m,
      y,
      _,
      g,
      v,
      x,
      b,
      w;
    for (d = 0; d < n; d += l) {
      if (
        ((m = e[d].label),
        (y = this._resolveTickFontOptions(d)),
        (s.font = _ = y.string),
        (g = r[_] = r[_] || { data: {}, gc: [] }),
        (v = y.lineHeight),
        (x = b = 0),
        !K(m) && !ne(m))
      )
        (x = fa(s, g.data, g.gc, x, m)), (b = v);
      else if (ne(m))
        for (h = 0, p = m.length; h < p; ++h)
          (w = m[h]),
            !K(w) && !ne(w) && ((x = fa(s, g.data, g.gc, x, w)), (b += v));
      o.push(x), a.push(b), (c = Math.max(x, c)), (u = Math.max(b, u));
    }
    b1(r, n);
    const k = o.indexOf(c),
      S = a.indexOf(u),
      C = (M) => ({ width: o[M] || 0, height: a[M] || 0 });
    return {
      first: C(0),
      last: C(n - 1),
      widest: C(k),
      highest: C(S),
      widths: o,
      heights: a,
    };
  }
  getLabelForValue(e) {
    return e;
  }
  getPixelForValue(e, n) {
    return NaN;
  }
  getValueForPixel(e) {}
  getPixelForTick(e) {
    const n = this.ticks;
    return e < 0 || e > n.length - 1 ? null : this.getPixelForValue(n[e].value);
  }
  getPixelForDecimal(e) {
    this._reversePixels && (e = 1 - e);
    const n = this._startPixel + e * this._length;
    return rb(this._alignToPixels ? An(this.chart, n, 0) : n);
  }
  getDecimalForPixel(e) {
    const n = (e - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: e, max: n } = this;
    return e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0;
  }
  getContext(e) {
    const n = this.ticks || [];
    if (e >= 0 && e < n.length) {
      const i = n[e];
      return i.$context || (i.$context = k1(this.getContext(), e, i));
    }
    return this.$context || (this.$context = w1(this.chart.getContext(), this));
  }
  _tickSize() {
    const e = this.options.ticks,
      n = xt(this.labelRotation),
      i = Math.abs(Math.cos(n)),
      s = Math.abs(Math.sin(n)),
      r = this._getLabelSizes(),
      o = e.autoSkipPadding || 0,
      a = r ? r.widest.width + o : 0,
      l = r ? r.highest.height + o : 0;
    return this.isHorizontal()
      ? l * i > a * s
        ? a / i
        : l / s
      : l * s < a * i
      ? l / i
      : a / s;
  }
  _isVisible() {
    const e = this.options.display;
    return e !== "auto" ? !!e : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(e) {
    const n = this.axis,
      i = this.chart,
      s = this.options,
      { grid: r, position: o, border: a } = s,
      l = r.offset,
      c = this.isHorizontal(),
      d = this.ticks.length + (l ? 1 : 0),
      h = ds(r),
      p = [],
      m = a.setContext(this.getContext()),
      y = m.display ? m.width : 0,
      _ = y / 2,
      g = function (I) {
        return An(i, I, y);
      };
    let v, x, b, w, k, S, C, M, E, D, A, z;
    if (o === "top")
      (v = g(this.bottom)),
        (S = this.bottom - h),
        (M = v - _),
        (D = g(e.top) + _),
        (z = e.bottom);
    else if (o === "bottom")
      (v = g(this.top)),
        (D = e.top),
        (z = g(e.bottom) - _),
        (S = v + _),
        (M = this.top + h);
    else if (o === "left")
      (v = g(this.right)),
        (k = this.right - h),
        (C = v - _),
        (E = g(e.left) + _),
        (A = e.right);
    else if (o === "right")
      (v = g(this.left)),
        (E = e.left),
        (A = g(e.right) - _),
        (k = v + _),
        (C = this.left + h);
    else if (n === "x") {
      if (o === "center") v = g((e.top + e.bottom) / 2 + 0.5);
      else if ($(o)) {
        const I = Object.keys(o)[0],
          H = o[I];
        v = g(this.chart.scales[I].getPixelForValue(H));
      }
      (D = e.top), (z = e.bottom), (S = v + _), (M = S + h);
    } else if (n === "y") {
      if (o === "center") v = g((e.left + e.right) / 2);
      else if ($(o)) {
        const I = Object.keys(o)[0],
          H = o[I];
        v = g(this.chart.scales[I].getPixelForValue(H));
      }
      (k = v - _), (C = k - h), (E = e.left), (A = e.right);
    }
    const ee = B(s.ticks.maxTicksLimit, d),
      F = Math.max(1, Math.ceil(d / ee));
    for (x = 0; x < d; x += F) {
      const I = this.getContext(x),
        H = r.setContext(I),
        P = a.setContext(I),
        N = H.lineWidth,
        R = H.color,
        Y = P.dash || [],
        U = P.dashOffset,
        Ne = H.tickWidth,
        he = H.tickColor,
        ye = H.tickBorderDash || [],
        pe = H.tickBorderDashOffset;
      (b = _1(this, x, l)),
        b !== void 0 &&
          ((w = An(i, b, N)),
          c ? (k = C = E = A = w) : (S = M = D = z = w),
          p.push({
            tx1: k,
            ty1: S,
            tx2: C,
            ty2: M,
            x1: E,
            y1: D,
            x2: A,
            y2: z,
            width: N,
            color: R,
            borderDash: Y,
            borderDashOffset: U,
            tickWidth: Ne,
            tickColor: he,
            tickBorderDash: ye,
            tickBorderDashOffset: pe,
          }));
    }
    return (this._ticksLength = d), (this._borderValue = v), p;
  }
  _computeLabelItems(e) {
    const n = this.axis,
      i = this.options,
      { position: s, ticks: r } = i,
      o = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: c, padding: u, mirror: d } = r,
      h = ds(i.grid),
      p = h + u,
      m = d ? -u : p,
      y = -xt(this.labelRotation),
      _ = [];
    let g,
      v,
      x,
      b,
      w,
      k,
      S,
      C,
      M,
      E,
      D,
      A,
      z = "middle";
    if (s === "top")
      (k = this.bottom - m), (S = this._getXAxisLabelAlignment());
    else if (s === "bottom")
      (k = this.top + m), (S = this._getXAxisLabelAlignment());
    else if (s === "left") {
      const F = this._getYAxisLabelAlignment(h);
      (S = F.textAlign), (w = F.x);
    } else if (s === "right") {
      const F = this._getYAxisLabelAlignment(h);
      (S = F.textAlign), (w = F.x);
    } else if (n === "x") {
      if (s === "center") k = (e.top + e.bottom) / 2 + p;
      else if ($(s)) {
        const F = Object.keys(s)[0],
          I = s[F];
        k = this.chart.scales[F].getPixelForValue(I) + p;
      }
      S = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (s === "center") w = (e.left + e.right) / 2 - p;
      else if ($(s)) {
        const F = Object.keys(s)[0],
          I = s[F];
        w = this.chart.scales[F].getPixelForValue(I);
      }
      S = this._getYAxisLabelAlignment(h).textAlign;
    }
    n === "y" && (l === "start" ? (z = "top") : l === "end" && (z = "bottom"));
    const ee = this._getLabelSizes();
    for (g = 0, v = a.length; g < v; ++g) {
      (x = a[g]), (b = x.label);
      const F = r.setContext(this.getContext(g));
      (C = this.getPixelForTick(g) + r.labelOffset),
        (M = this._resolveTickFontOptions(g)),
        (E = M.lineHeight),
        (D = ne(b) ? b.length : 1);
      const I = D / 2,
        H = F.color,
        P = F.textStrokeColor,
        N = F.textStrokeWidth;
      let R = S;
      o
        ? ((w = C),
          S === "inner" &&
            (g === v - 1
              ? (R = this.options.reverse ? "left" : "right")
              : g === 0
              ? (R = this.options.reverse ? "right" : "left")
              : (R = "center")),
          s === "top"
            ? c === "near" || y !== 0
              ? (A = -D * E + E / 2)
              : c === "center"
              ? (A = -ee.highest.height / 2 - I * E + E)
              : (A = -ee.highest.height + E / 2)
            : c === "near" || y !== 0
            ? (A = E / 2)
            : c === "center"
            ? (A = ee.highest.height / 2 - I * E)
            : (A = ee.highest.height - D * E),
          d && (A *= -1),
          y !== 0 && !F.showLabelBackdrop && (w += (E / 2) * Math.sin(y)))
        : ((k = C), (A = ((1 - D) * E) / 2));
      let Y;
      if (F.showLabelBackdrop) {
        const U = De(F.backdropPadding),
          Ne = ee.heights[g],
          he = ee.widths[g];
        let ye = A - U.top,
          pe = 0 - U.left;
        switch (z) {
          case "middle":
            ye -= Ne / 2;
            break;
          case "bottom":
            ye -= Ne;
            break;
        }
        switch (S) {
          case "center":
            pe -= he / 2;
            break;
          case "right":
            pe -= he;
            break;
        }
        Y = {
          left: pe,
          top: ye,
          width: he + U.width,
          height: Ne + U.height,
          color: F.backdropColor,
        };
      }
      _.push({
        label: b,
        font: M,
        textOffset: A,
        options: {
          rotation: y,
          color: H,
          strokeColor: P,
          strokeWidth: N,
          textAlign: R,
          textBaseline: z,
          translation: [w, k],
          backdrop: Y,
        },
      });
    }
    return _;
  }
  _getXAxisLabelAlignment() {
    const { position: e, ticks: n } = this.options;
    if (-xt(this.labelRotation)) return e === "top" ? "left" : "right";
    let s = "center";
    return (
      n.align === "start"
        ? (s = "left")
        : n.align === "end"
        ? (s = "right")
        : n.align === "inner" && (s = "inner"),
      s
    );
  }
  _getYAxisLabelAlignment(e) {
    const {
        position: n,
        ticks: { crossAlign: i, mirror: s, padding: r },
      } = this.options,
      o = this._getLabelSizes(),
      a = e + r,
      l = o.widest.width;
    let c, u;
    return (
      n === "left"
        ? s
          ? ((u = this.right + r),
            i === "near"
              ? (c = "left")
              : i === "center"
              ? ((c = "center"), (u += l / 2))
              : ((c = "right"), (u += l)))
          : ((u = this.right - a),
            i === "near"
              ? (c = "right")
              : i === "center"
              ? ((c = "center"), (u -= l / 2))
              : ((c = "left"), (u = this.left)))
        : n === "right"
        ? s
          ? ((u = this.left + r),
            i === "near"
              ? (c = "right")
              : i === "center"
              ? ((c = "center"), (u -= l / 2))
              : ((c = "left"), (u -= l)))
          : ((u = this.left + a),
            i === "near"
              ? (c = "left")
              : i === "center"
              ? ((c = "center"), (u += l / 2))
              : ((c = "right"), (u = this.right)))
        : (c = "right"),
      { textAlign: c, x: u }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const e = this.chart,
      n = this.options.position;
    if (n === "left" || n === "right")
      return { top: 0, left: this.left, bottom: e.height, right: this.right };
    if (n === "top" || n === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: e.width };
  }
  drawBackground() {
    const {
      ctx: e,
      options: { backgroundColor: n },
      left: i,
      top: s,
      width: r,
      height: o,
    } = this;
    n && (e.save(), (e.fillStyle = n), e.fillRect(i, s, r, o), e.restore());
  }
  getLineWidthForValue(e) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display) return 0;
    const s = this.ticks.findIndex((r) => r.value === e);
    return s >= 0 ? n.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(e) {
    const n = this.options.grid,
      i = this.ctx,
      s =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(e));
    let r, o;
    const a = (l, c, u) => {
      !u.width ||
        !u.color ||
        (i.save(),
        (i.lineWidth = u.width),
        (i.strokeStyle = u.color),
        i.setLineDash(u.borderDash || []),
        (i.lineDashOffset = u.borderDashOffset),
        i.beginPath(),
        i.moveTo(l.x, l.y),
        i.lineTo(c.x, c.y),
        i.stroke(),
        i.restore());
    };
    if (n.display)
      for (r = 0, o = s.length; r < o; ++r) {
        const l = s[r];
        n.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          n.drawTicks &&
            a(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: e,
        ctx: n,
        options: { border: i, grid: s },
      } = this,
      r = i.setContext(this.getContext()),
      o = i.display ? r.width : 0;
    if (!o) return;
    const a = s.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue;
    let c, u, d, h;
    this.isHorizontal()
      ? ((c = An(e, this.left, o) - o / 2),
        (u = An(e, this.right, a) + a / 2),
        (d = h = l))
      : ((d = An(e, this.top, o) - o / 2),
        (h = An(e, this.bottom, a) + a / 2),
        (c = u = l)),
      n.save(),
      (n.lineWidth = r.width),
      (n.strokeStyle = r.color),
      n.beginPath(),
      n.moveTo(c, d),
      n.lineTo(u, h),
      n.stroke(),
      n.restore();
  }
  drawLabels(e) {
    if (!this.options.ticks.display) return;
    const i = this.ctx,
      s = this._computeLabelArea();
    s && rd(i, s);
    const r = this.getLabelItems(e);
    for (const o of r) {
      const a = o.options,
        l = o.font,
        c = o.label,
        u = o.textOffset;
      ai(i, c, 0, u, l, a);
    }
    s && od(i);
  }
  drawTitle() {
    const {
      ctx: e,
      options: { position: n, title: i, reverse: s },
    } = this;
    if (!i.display) return;
    const r = ve(i.font),
      o = De(i.padding),
      a = i.align;
    let l = r.lineHeight / 2;
    n === "bottom" || n === "center" || $(n)
      ? ((l += o.bottom),
        ne(i.text) && (l += r.lineHeight * (i.text.length - 1)))
      : (l += o.top);
    const {
      titleX: c,
      titleY: u,
      maxWidth: d,
      rotation: h,
    } = C1(this, l, n, a);
    ai(e, i.text, 0, 0, r, {
      color: i.color,
      maxWidth: d,
      rotation: h,
      textAlign: S1(a, n, s),
      textBaseline: "middle",
      translation: [c, u],
    });
  }
  draw(e) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(e),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(e));
  }
  _layers() {
    const e = this.options,
      n = (e.ticks && e.ticks.z) || 0,
      i = B(e.grid && e.grid.z, -1),
      s = B(e.border && e.border.z, 0);
    return !this._isVisible() || this.draw !== ui.prototype.draw
      ? [
          {
            z: n,
            draw: (r) => {
              this.draw(r);
            },
          },
        ]
      : [
          {
            z: i,
            draw: (r) => {
              this.drawBackground(), this.drawGrid(r), this.drawTitle();
            },
          },
          {
            z: s,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: n,
            draw: (r) => {
              this.drawLabels(r);
            },
          },
        ];
  }
  getMatchingVisibleMetas(e) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      i = this.axis + "AxisID",
      s = [];
    let r, o;
    for (r = 0, o = n.length; r < o; ++r) {
      const a = n[r];
      a[i] === this.id && (!e || a.type === e) && s.push(a);
    }
    return s;
  }
  _resolveTickFontOptions(e) {
    const n = this.options.ticks.setContext(this.getContext(e));
    return ve(n.font);
  }
  _maxDigits() {
    const e = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / e;
  }
}
class no {
  constructor(e, n, i) {
    (this.type = e),
      (this.scope = n),
      (this.override = i),
      (this.items = Object.create(null));
  }
  isForType(e) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      e.prototype
    );
  }
  register(e) {
    const n = Object.getPrototypeOf(e);
    let i;
    M1(n) && (i = this.register(n));
    const s = this.items,
      r = e.id,
      o = this.scope + "." + r;
    if (!r) throw new Error("class does not have id: " + e);
    return (
      r in s ||
        ((s[r] = e),
        E1(e, o, i),
        this.override && ue.override(e.id, e.overrides)),
      o
    );
  }
  get(e) {
    return this.items[e];
  }
  unregister(e) {
    const n = this.items,
      i = e.id,
      s = this.scope;
    i in n && delete n[i],
      s && i in ue[s] && (delete ue[s][i], this.override && delete oi[i]);
  }
}
function E1(t, e, n) {
  const i = or(Object.create(null), [
    n ? ue.get(n) : {},
    ue.get(e),
    t.defaults,
  ]);
  ue.set(e, i),
    t.defaultRoutes && j1(e, t.defaultRoutes),
    t.descriptors && ue.describe(e, t.descriptors);
}
function j1(t, e) {
  Object.keys(e).forEach((n) => {
    const i = n.split("."),
      s = i.pop(),
      r = [t].concat(i).join("."),
      o = e[n].split("."),
      a = o.pop(),
      l = o.join(".");
    ue.route(r, s, l, a);
  });
}
function M1(t) {
  return "id" in t && "defaults" in t;
}
class P1 {
  constructor() {
    (this.controllers = new no(wn, "datasets", !0)),
      (this.elements = new no(qt, "elements")),
      (this.plugins = new no(Object, "plugins")),
      (this.scales = new no(ui, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...e) {
    this._each("register", e);
  }
  remove(...e) {
    this._each("unregister", e);
  }
  addControllers(...e) {
    this._each("register", e, this.controllers);
  }
  addElements(...e) {
    this._each("register", e, this.elements);
  }
  addPlugins(...e) {
    this._each("register", e, this.plugins);
  }
  addScales(...e) {
    this._each("register", e, this.scales);
  }
  getController(e) {
    return this._get(e, this.controllers, "controller");
  }
  getElement(e) {
    return this._get(e, this.elements, "element");
  }
  getPlugin(e) {
    return this._get(e, this.plugins, "plugin");
  }
  getScale(e) {
    return this._get(e, this.scales, "scale");
  }
  removeControllers(...e) {
    this._each("unregister", e, this.controllers);
  }
  removeElements(...e) {
    this._each("unregister", e, this.elements);
  }
  removePlugins(...e) {
    this._each("unregister", e, this.plugins);
  }
  removeScales(...e) {
    this._each("unregister", e, this.scales);
  }
  _each(e, n, i) {
    [...n].forEach((s) => {
      const r = i || this._getRegistryForType(s);
      i || r.isForType(s) || (r === this.plugins && s.id)
        ? this._exec(e, r, s)
        : X(s, (o) => {
            const a = i || this._getRegistryForType(o);
            this._exec(e, a, o);
          });
    });
  }
  _exec(e, n, i) {
    const s = ed(e);
    q(i["before" + s], [], i), n[e](i), q(i["after" + s], [], i);
  }
  _getRegistryForType(e) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const i = this._typedRegistries[n];
      if (i.isForType(e)) return i;
    }
    return this.plugins;
  }
  _get(e, n, i) {
    const s = n.get(e);
    if (s === void 0)
      throw new Error('"' + e + '" is not a registered ' + i + ".");
    return s;
  }
}
var Et = new P1();
class L1 {
  constructor() {
    this._init = [];
  }
  notify(e, n, i, s) {
    n === "beforeInit" &&
      ((this._init = this._createDescriptors(e, !0)),
      this._notify(this._init, e, "install"));
    const r = s ? this._descriptors(e).filter(s) : this._descriptors(e),
      o = this._notify(r, e, n, i);
    return (
      n === "afterDestroy" &&
        (this._notify(r, e, "stop"), this._notify(this._init, e, "uninstall")),
      o
    );
  }
  _notify(e, n, i, s) {
    s = s || {};
    for (const r of e) {
      const o = r.plugin,
        a = o[i],
        l = [n, s, r.options];
      if (q(a, l, o) === !1 && s.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    K(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(e) {
    if (this._cache) return this._cache;
    const n = (this._cache = this._createDescriptors(e));
    return this._notifyStateChanges(e), n;
  }
  _createDescriptors(e, n) {
    const i = e && e.config,
      s = B(i.options && i.options.plugins, {}),
      r = O1(i);
    return s === !1 && !n ? [] : N1(e, r, s, n);
  }
  _notifyStateChanges(e) {
    const n = this._oldCache || [],
      i = this._cache,
      s = (r, o) =>
        r.filter((a) => !o.some((l) => a.plugin.id === l.plugin.id));
    this._notify(s(n, i), e, "stop"), this._notify(s(i, n), e, "start");
  }
}
function O1(t) {
  const e = {},
    n = [],
    i = Object.keys(Et.plugins.items);
  for (let r = 0; r < i.length; r++) n.push(Et.getPlugin(i[r]));
  const s = t.plugins || [];
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    n.indexOf(o) === -1 && (n.push(o), (e[o.id] = !0));
  }
  return { plugins: n, localIds: e };
}
function D1(t, e) {
  return !e && t === !1 ? null : t === !0 ? {} : t;
}
function N1(t, { plugins: e, localIds: n }, i, s) {
  const r = [],
    o = t.getContext();
  for (const a of e) {
    const l = a.id,
      c = D1(i[l], s);
    c !== null &&
      r.push({
        plugin: a,
        options: T1(t.config, { plugin: a, local: n[l] }, c, o),
      });
  }
  return r;
}
function T1(t, { plugin: e, local: n }, i, s) {
  const r = t.pluginScopeKeys(e),
    o = t.getOptionScopes(i, r);
  return (
    n && e.defaults && o.push(e.defaults),
    t.createResolver(o, s, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function Oc(t, e) {
  const n = ue.datasets[t] || {};
  return (
    ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || n.indexAxis || "x"
  );
}
function A1(t, e) {
  let n = t;
  return (
    t === "_index_" ? (n = e) : t === "_value_" && (n = e === "x" ? "y" : "x"),
    n
  );
}
function R1(t, e) {
  return t === e ? "_index_" : "_value_";
}
function Df(t) {
  if (t === "x" || t === "y" || t === "r") return t;
}
function I1(t) {
  if (t === "top" || t === "bottom") return "x";
  if (t === "left" || t === "right") return "y";
}
function Dc(t, ...e) {
  if (Df(t)) return t;
  for (const n of e) {
    const i =
      n.axis || I1(n.position) || (t.length > 1 && Df(t[0].toLowerCase()));
    if (i) return i;
  }
  throw new Error(
    `Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`
  );
}
function Nf(t, e, n) {
  if (n[e + "AxisID"] === t) return { axis: e };
}
function z1(t, e) {
  if (e.data && e.data.datasets) {
    const n = e.data.datasets.filter((i) => i.xAxisID === t || i.yAxisID === t);
    if (n.length) return Nf(t, "x", n[0]) || Nf(t, "y", n[0]);
  }
  return {};
}
function F1(t, e) {
  const n = oi[t.type] || { scales: {} },
    i = e.scales || {},
    s = Oc(t.type, e),
    r = Object.create(null);
  return (
    Object.keys(i).forEach((o) => {
      const a = i[o];
      if (!$(a))
        return console.error(`Invalid scale configuration for scale: ${o}`);
      if (a._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${o}`
        );
      const l = Dc(o, a, z1(o, t), ue.scales[a.type]),
        c = R1(l, s),
        u = n.scales || {};
      r[o] = Rs(Object.create(null), [{ axis: l }, a, u[l], u[c]]);
    }),
    t.data.datasets.forEach((o) => {
      const a = o.type || t.type,
        l = o.indexAxis || Oc(a, e),
        u = (oi[a] || {}).scales || {};
      Object.keys(u).forEach((d) => {
        const h = A1(d, l),
          p = o[h + "AxisID"] || h;
        (r[p] = r[p] || Object.create(null)),
          Rs(r[p], [{ axis: h }, i[p], u[d]]);
      });
    }),
    Object.keys(r).forEach((o) => {
      const a = r[o];
      Rs(a, [ue.scales[a.type], ue.scale]);
    }),
    r
  );
}
function x0(t) {
  const e = t.options || (t.options = {});
  (e.plugins = B(e.plugins, {})), (e.scales = F1(t, e));
}
function _0(t) {
  return (
    (t = t || {}),
    (t.datasets = t.datasets || []),
    (t.labels = t.labels || []),
    t
  );
}
function B1(t) {
  return (t = t || {}), (t.data = _0(t.data)), x0(t), t;
}
const Tf = new Map(),
  b0 = new Set();
function io(t, e) {
  let n = Tf.get(t);
  return n || ((n = e()), Tf.set(t, n), b0.add(n)), n;
}
const hs = (t, e, n) => {
  const i = Cn(e, n);
  i !== void 0 && t.add(i);
};
class H1 {
  constructor(e) {
    (this._config = B1(e)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(e) {
    this._config.type = e;
  }
  get data() {
    return this._config.data;
  }
  set data(e) {
    this._config.data = _0(e);
  }
  get options() {
    return this._config.options;
  }
  set options(e) {
    this._config.options = e;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const e = this._config;
    this.clearCache(), x0(e);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(e) {
    return io(e, () => [[`datasets.${e}`, ""]]);
  }
  datasetAnimationScopeKeys(e, n) {
    return io(`${e}.transition.${n}`, () => [
      [`datasets.${e}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${e}`, ""],
    ]);
  }
  datasetElementScopeKeys(e, n) {
    return io(`${e}-${n}`, () => [
      [`datasets.${e}.elements.${n}`, `datasets.${e}`, `elements.${n}`, ""],
    ]);
  }
  pluginScopeKeys(e) {
    const n = e.id,
      i = this.type;
    return io(`${i}-plugin-${n}`, () => [
      [`plugins.${n}`, ...(e.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(e, n) {
    const i = this._scopeCache;
    let s = i.get(e);
    return (!s || n) && ((s = new Map()), i.set(e, s)), s;
  }
  getOptionScopes(e, n, i) {
    const { options: s, type: r } = this,
      o = this._cachedScopes(e, i),
      a = o.get(n);
    if (a) return a;
    const l = new Set();
    n.forEach((u) => {
      e && (l.add(e), u.forEach((d) => hs(l, e, d))),
        u.forEach((d) => hs(l, s, d)),
        u.forEach((d) => hs(l, oi[r] || {}, d)),
        u.forEach((d) => hs(l, ue, d)),
        u.forEach((d) => hs(l, Pc, d));
    });
    const c = Array.from(l);
    return (
      c.length === 0 && c.push(Object.create(null)), b0.has(n) && o.set(n, c), c
    );
  }
  chartOptionScopes() {
    const { options: e, type: n } = this;
    return [e, oi[n] || {}, ue.datasets[n] || {}, { type: n }, ue, Pc];
  }
  resolveNamedOptions(e, n, i, s = [""]) {
    const r = { $shared: !0 },
      { resolver: o, subPrefixes: a } = Af(this._resolverCache, e, s);
    let l = o;
    if (W1(o, n)) {
      (r.$shared = !1), (i = En(i) ? i() : i);
      const c = this.createResolver(e, i, a);
      l = Ki(o, i, c);
    }
    for (const c of n) r[c] = l[c];
    return r;
  }
  createResolver(e, n, i = [""], s) {
    const { resolver: r } = Af(this._resolverCache, e, i);
    return $(n) ? Ki(r, n, void 0, s) : r;
  }
}
function Af(t, e, n) {
  let i = t.get(e);
  i || ((i = new Map()), t.set(e, i));
  const s = n.join();
  let r = i.get(s);
  return (
    r ||
      ((r = {
        resolver: ld(e, n),
        subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover")),
      }),
      i.set(s, r)),
    r
  );
}
const V1 = (t) =>
  $(t) && Object.getOwnPropertyNames(t).reduce((e, n) => e || En(t[n]), !1);
function W1(t, e) {
  const { isScriptable: n, isIndexable: i } = n0(t);
  for (const s of e) {
    const r = n(s),
      o = i(s),
      a = (o || r) && t[s];
    if ((r && (En(a) || V1(a))) || (o && ne(a))) return !0;
  }
  return !1;
}
var $1 = "4.3.0";
const U1 = ["top", "bottom", "left", "right", "chartArea"];
function Rf(t, e) {
  return t === "top" || t === "bottom" || (U1.indexOf(t) === -1 && e === "x");
}
function If(t, e) {
  return function (n, i) {
    return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
  };
}
function zf(t) {
  const e = t.chart,
    n = e.options.animation;
  e.notifyPlugins("afterRender"), q(n && n.onComplete, [t], e);
}
function Y1(t) {
  const e = t.chart,
    n = e.options.animation;
  q(n && n.onProgress, [t], e);
}
function w0(t) {
  return (
    a0() && typeof t == "string"
      ? (t = document.getElementById(t))
      : t && t.length && (t = t[0]),
    t && t.canvas && (t = t.canvas),
    t
  );
}
const Eo = {},
  Ff = (t) => {
    const e = w0(t);
    return Object.values(Eo)
      .filter((n) => n.canvas === e)
      .pop();
  };
function X1(t, e, n) {
  const i = Object.keys(t);
  for (const s of i) {
    const r = +s;
    if (r >= e) {
      const o = t[s];
      delete t[s], (n > 0 || r > e) && (t[r + n] = o);
    }
  }
}
function K1(t, e, n, i) {
  return !n || t.type === "mouseout" ? null : i ? e : t;
}
function Q1(t) {
  const { xScale: e, yScale: n } = t;
  if (e && n)
    return { left: e.left, right: e.right, top: n.top, bottom: n.bottom };
}
var Zt;
let di =
  ((Zt = class {
    static register(...e) {
      Et.add(...e), Bf();
    }
    static unregister(...e) {
      Et.remove(...e), Bf();
    }
    constructor(e, n) {
      const i = (this.config = new H1(n)),
        s = w0(e),
        r = Ff(s);
      if (r)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            r.id +
            "' must be destroyed before the canvas with ID '" +
            r.canvas.id +
            "' can be reused."
        );
      const o = i.createResolver(i.chartOptionScopes(), this.getContext());
      (this.platform = new (i.platform || h1(s))()),
        this.platform.updateConfig(i);
      const a = this.platform.acquireContext(s, o.aspectRatio),
        l = a && a.canvas,
        c = l && l.height,
        u = l && l.width;
      if (
        ((this.id = X_()),
        (this.ctx = a),
        (this.canvas = l),
        (this.width = u),
        (this.height = c),
        (this._options = o),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new L1()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = cb((d) => this.update(d), o.resizeDelay || 0)),
        (this._dataChanges = []),
        (Eo[this.id] = this),
        !a || !l)
      ) {
        console.error(
          "Failed to create chart: can't acquire context from the given item"
        );
        return;
      }
      At.listen(this, "complete", zf),
        At.listen(this, "progress", Y1),
        this._initialize(),
        this.attached && this.update();
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: e, maintainAspectRatio: n },
        width: i,
        height: s,
        _aspectRatio: r,
      } = this;
      return K(e) ? (n && r ? r : s ? i / s : null) : e;
    }
    get data() {
      return this.config.data;
    }
    set data(e) {
      this.config.data = e;
    }
    get options() {
      return this._options;
    }
    set options(e) {
      this.config.options = e;
    }
    get registry() {
      return Et;
    }
    _initialize() {
      return (
        this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : af(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
      );
    }
    clear() {
      return sf(this.canvas, this.ctx), this;
    }
    stop() {
      return At.stop(this), this;
    }
    resize(e, n) {
      At.running(this)
        ? (this._resizeBeforeDraw = { width: e, height: n })
        : this._resize(e, n);
    }
    _resize(e, n) {
      const i = this.options,
        s = this.canvas,
        r = i.maintainAspectRatio && this.aspectRatio,
        o = this.platform.getMaximumSize(s, e, n, r),
        a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
        l = this.width ? "resize" : "attach";
      (this.width = o.width),
        (this.height = o.height),
        (this._aspectRatio = this.aspectRatio),
        af(this, a, !0) &&
          (this.notifyPlugins("resize", { size: o }),
          q(i.onResize, [this, o], this),
          this.attached && this._doResize(l) && this.render());
    }
    ensureScalesHaveIDs() {
      const n = this.options.scales || {};
      X(n, (i, s) => {
        i.id = s;
      });
    }
    buildOrUpdateScales() {
      const e = this.options,
        n = e.scales,
        i = this.scales,
        s = Object.keys(i).reduce((o, a) => ((o[a] = !1), o), {});
      let r = [];
      n &&
        (r = r.concat(
          Object.keys(n).map((o) => {
            const a = n[o],
              l = Dc(o, a),
              c = l === "r",
              u = l === "x";
            return {
              options: a,
              dposition: c ? "chartArea" : u ? "bottom" : "left",
              dtype: c ? "radialLinear" : u ? "category" : "linear",
            };
          })
        )),
        X(r, (o) => {
          const a = o.options,
            l = a.id,
            c = Dc(l, a),
            u = B(a.type, o.dtype);
          (a.position === void 0 || Rf(a.position, c) !== Rf(o.dposition)) &&
            (a.position = o.dposition),
            (s[l] = !0);
          let d = null;
          if (l in i && i[l].type === u) d = i[l];
          else {
            const h = Et.getScale(u);
            (d = new h({ id: l, type: u, ctx: this.ctx, chart: this })),
              (i[d.id] = d);
          }
          d.init(a, e);
        }),
        X(s, (o, a) => {
          o || delete i[a];
        }),
        X(i, (o) => {
          at.configure(this, o, o.options), at.addBox(this, o);
        });
    }
    _updateMetasets() {
      const e = this._metasets,
        n = this.data.datasets.length,
        i = e.length;
      if ((e.sort((s, r) => s.index - r.index), i > n)) {
        for (let s = n; s < i; ++s) this._destroyDatasetMeta(s);
        e.splice(n, i - n);
      }
      this._sortedMetasets = e.slice(0).sort(If("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: e,
        data: { datasets: n },
      } = this;
      e.length > n.length && delete this._stacks,
        e.forEach((i, s) => {
          n.filter((r) => r === i._dataset).length === 0 &&
            this._destroyDatasetMeta(s);
        });
    }
    buildOrUpdateControllers() {
      const e = [],
        n = this.data.datasets;
      let i, s;
      for (
        this._removeUnreferencedMetasets(), i = 0, s = n.length;
        i < s;
        i++
      ) {
        const r = n[i];
        let o = this.getDatasetMeta(i);
        const a = r.type || this.config.type;
        if (
          (o.type &&
            o.type !== a &&
            (this._destroyDatasetMeta(i), (o = this.getDatasetMeta(i))),
          (o.type = a),
          (o.indexAxis = r.indexAxis || Oc(a, this.options)),
          (o.order = r.order || 0),
          (o.index = i),
          (o.label = "" + r.label),
          (o.visible = this.isDatasetVisible(i)),
          o.controller)
        )
          o.controller.updateIndex(i), o.controller.linkScales();
        else {
          const l = Et.getController(a),
            { datasetElementType: c, dataElementType: u } = ue.datasets[a];
          Object.assign(l, {
            dataElementType: Et.getElement(u),
            datasetElementType: c && Et.getElement(c),
          }),
            (o.controller = new l(this, i)),
            e.push(o.controller);
        }
      }
      return this._updateMetasets(), e;
    }
    _resetElements() {
      X(
        this.data.datasets,
        (e, n) => {
          this.getDatasetMeta(n).controller.reset();
        },
        this
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(e) {
      const n = this.config;
      n.update();
      const i = (this._options = n.createResolver(
          n.chartOptionScopes(),
          this.getContext()
        )),
        s = (this._animationsDisabled = !i.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins("beforeUpdate", { mode: e, cancelable: !0 }) === !1)
      )
        return;
      const r = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let o = 0;
      for (let c = 0, u = this.data.datasets.length; c < u; c++) {
        const { controller: d } = this.getDatasetMeta(c),
          h = !s && r.indexOf(d) === -1;
        d.buildOrUpdateElements(h), (o = Math.max(+d.getMaxOverflow(), o));
      }
      (o = this._minPadding = i.layout.autoPadding ? o : 0),
        this._updateLayout(o),
        s ||
          X(r, (c) => {
            c.reset();
          }),
        this._updateDatasets(e),
        this.notifyPlugins("afterUpdate", { mode: e }),
        this._layers.sort(If("z", "_idx"));
      const { _active: a, _lastEvent: l } = this;
      l
        ? this._eventHandler(l, !0)
        : a.length && this._updateHoverStyles(a, a, !0),
        this.render();
    }
    _updateScales() {
      X(this.scales, (e) => {
        at.removeBox(this, e);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const e = this.options,
        n = new Set(Object.keys(this._listeners)),
        i = new Set(e.events);
      (!Kh(n, i) || !!this._responsiveListeners !== e.responsive) &&
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: e } = this,
        n = this._getUniformDataChanges() || [];
      for (const { method: i, start: s, count: r } of n) {
        const o = i === "_removeElements" ? -r : r;
        X1(e, s, o);
      }
    }
    _getUniformDataChanges() {
      const e = this._dataChanges;
      if (!e || !e.length) return;
      this._dataChanges = [];
      const n = this.data.datasets.length,
        i = (r) =>
          new Set(
            e
              .filter((o) => o[0] === r)
              .map((o, a) => a + "," + o.splice(1).join(","))
          ),
        s = i(0);
      for (let r = 1; r < n; r++) if (!Kh(s, i(r))) return;
      return Array.from(s)
        .map((r) => r.split(","))
        .map((r) => ({ method: r[1], start: +r[2], count: +r[3] }));
    }
    _updateLayout(e) {
      if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
      at.update(this, this.width, this.height, e);
      const n = this.chartArea,
        i = n.width <= 0 || n.height <= 0;
      (this._layers = []),
        X(
          this.boxes,
          (s) => {
            (i && s.position === "chartArea") ||
              (s.configure && s.configure(), this._layers.push(...s._layers()));
          },
          this
        ),
        this._layers.forEach((s, r) => {
          s._idx = r;
        }),
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(e) {
      if (
        this.notifyPlugins("beforeDatasetsUpdate", {
          mode: e,
          cancelable: !0,
        }) !== !1
      ) {
        for (let n = 0, i = this.data.datasets.length; n < i; ++n)
          this.getDatasetMeta(n).controller.configure();
        for (let n = 0, i = this.data.datasets.length; n < i; ++n)
          this._updateDataset(n, En(e) ? e({ datasetIndex: n }) : e);
        this.notifyPlugins("afterDatasetsUpdate", { mode: e });
      }
    }
    _updateDataset(e, n) {
      const i = this.getDatasetMeta(e),
        s = { meta: i, index: e, mode: n, cancelable: !0 };
      this.notifyPlugins("beforeDatasetUpdate", s) !== !1 &&
        (i.controller._update(n),
        (s.cancelable = !1),
        this.notifyPlugins("afterDatasetUpdate", s));
    }
    render() {
      this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
        (At.has(this)
          ? this.attached && !At.running(this) && At.start(this)
          : (this.draw(), zf({ chart: this })));
    }
    draw() {
      let e;
      if (this._resizeBeforeDraw) {
        const { width: i, height: s } = this._resizeBeforeDraw;
        this._resize(i, s), (this._resizeBeforeDraw = null);
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
      )
        return;
      const n = this._layers;
      for (e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(this.chartArea);
      for (this._drawDatasets(); e < n.length; ++e) n[e].draw(this.chartArea);
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(e) {
      const n = this._sortedMetasets,
        i = [];
      let s, r;
      for (s = 0, r = n.length; s < r; ++s) {
        const o = n[s];
        (!e || o.visible) && i.push(o);
      }
      return i;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
        return;
      const e = this.getSortedVisibleDatasetMetas();
      for (let n = e.length - 1; n >= 0; --n) this._drawDataset(e[n]);
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(e) {
      const n = this.ctx,
        i = e._clip,
        s = !i.disabled,
        r = Q1(e) || this.chartArea,
        o = { meta: e, index: e.index, cancelable: !0 };
      this.notifyPlugins("beforeDatasetDraw", o) !== !1 &&
        (s &&
          rd(n, {
            left: i.left === !1 ? 0 : r.left - i.left,
            right: i.right === !1 ? this.width : r.right + i.right,
            top: i.top === !1 ? 0 : r.top - i.top,
            bottom: i.bottom === !1 ? this.height : r.bottom + i.bottom,
          }),
        e.controller.draw(),
        s && od(n),
        (o.cancelable = !1),
        this.notifyPlugins("afterDatasetDraw", o));
    }
    isPointInArea(e) {
      return Vt(e, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, n, i, s) {
      const r = Uw.modes[n];
      return typeof r == "function" ? r(this, e, i, s) : [];
    }
    getDatasetMeta(e) {
      const n = this.data.datasets[e],
        i = this._metasets;
      let s = i.filter((r) => r && r._dataset === n).pop();
      return (
        s ||
          ((s = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (n && n.order) || 0,
            index: e,
            _dataset: n,
            _parsed: [],
            _sorted: !1,
          }),
          i.push(s)),
        s
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = On(null, { chart: this, type: "chart" }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(e) {
      const n = this.data.datasets[e];
      if (!n) return !1;
      const i = this.getDatasetMeta(e);
      return typeof i.hidden == "boolean" ? !i.hidden : !n.hidden;
    }
    setDatasetVisibility(e, n) {
      const i = this.getDatasetMeta(e);
      i.hidden = !n;
    }
    toggleDataVisibility(e) {
      this._hiddenIndices[e] = !this._hiddenIndices[e];
    }
    getDataVisibility(e) {
      return !this._hiddenIndices[e];
    }
    _updateVisibility(e, n, i) {
      const s = i ? "show" : "hide",
        r = this.getDatasetMeta(e),
        o = r.controller._resolveAnimations(void 0, s);
      ar(n)
        ? ((r.data[n].hidden = !i), this.update())
        : (this.setDatasetVisibility(e, i),
          o.update(r, { visible: i }),
          this.update((a) => (a.datasetIndex === e ? s : void 0)));
    }
    hide(e, n) {
      this._updateVisibility(e, n, !1);
    }
    show(e, n) {
      this._updateVisibility(e, n, !0);
    }
    _destroyDatasetMeta(e) {
      const n = this._metasets[e];
      n && n.controller && n.controller._destroy(), delete this._metasets[e];
    }
    _stop() {
      let e, n;
      for (
        this.stop(), At.remove(this), e = 0, n = this.data.datasets.length;
        e < n;
        ++e
      )
        this._destroyDatasetMeta(e);
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas: e, ctx: n } = this;
      this._stop(),
        this.config.clearCache(),
        e &&
          (this.unbindEvents(),
          sf(e, n),
          this.platform.releaseContext(n),
          (this.canvas = null),
          (this.ctx = null)),
        delete Eo[this.id],
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...e) {
      return this.canvas.toDataURL(...e);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0);
    }
    bindUserEvents() {
      const e = this._listeners,
        n = this.platform,
        i = (r, o) => {
          n.addEventListener(this, r, o), (e[r] = o);
        },
        s = (r, o, a) => {
          (r.offsetX = o), (r.offsetY = a), this._eventHandler(r);
        };
      X(this.options.events, (r) => i(r, s));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const e = this._responsiveListeners,
        n = this.platform,
        i = (l, c) => {
          n.addEventListener(this, l, c), (e[l] = c);
        },
        s = (l, c) => {
          e[l] && (n.removeEventListener(this, l, c), delete e[l]);
        },
        r = (l, c) => {
          this.canvas && this.resize(l, c);
        };
      let o;
      const a = () => {
        s("attach", a),
          (this.attached = !0),
          this.resize(),
          i("resize", r),
          i("detach", o);
      };
      (o = () => {
        (this.attached = !1),
          s("resize", r),
          this._stop(),
          this._resize(0, 0),
          i("attach", a);
      }),
        n.isAttached(this.canvas) ? a() : o();
    }
    unbindEvents() {
      X(this._listeners, (e, n) => {
        this.platform.removeEventListener(this, n, e);
      }),
        (this._listeners = {}),
        X(this._responsiveListeners, (e, n) => {
          this.platform.removeEventListener(this, n, e);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(e, n, i) {
      const s = i ? "set" : "remove";
      let r, o, a, l;
      for (
        n === "dataset" &&
          ((r = this.getDatasetMeta(e[0].datasetIndex)),
          r.controller["_" + s + "DatasetHoverStyle"]()),
          a = 0,
          l = e.length;
        a < l;
        ++a
      ) {
        o = e[a];
        const c = o && this.getDatasetMeta(o.datasetIndex).controller;
        c && c[s + "HoverStyle"](o.element, o.datasetIndex, o.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(e) {
      const n = this._active || [],
        i = e.map(({ datasetIndex: r, index: o }) => {
          const a = this.getDatasetMeta(r);
          if (!a) throw new Error("No dataset found at index " + r);
          return { datasetIndex: r, element: a.data[o], index: o };
        });
      !ua(i, n) &&
        ((this._active = i),
        (this._lastEvent = null),
        this._updateHoverStyles(i, n));
    }
    notifyPlugins(e, n, i) {
      return this._plugins.notify(this, e, n, i);
    }
    isPluginEnabled(e) {
      return this._plugins._cache.filter((n) => n.plugin.id === e).length === 1;
    }
    _updateHoverStyles(e, n, i) {
      const s = this.options.hover,
        r = (l, c) =>
          l.filter(
            (u) =>
              !c.some(
                (d) => u.datasetIndex === d.datasetIndex && u.index === d.index
              )
          ),
        o = r(n, e),
        a = i ? e : r(e, n);
      o.length && this.updateHoverStyle(o, s.mode, !1),
        a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
    }
    _eventHandler(e, n) {
      const i = {
          event: e,
          replay: n,
          cancelable: !0,
          inChartArea: this.isPointInArea(e),
        },
        s = (o) =>
          (o.options.events || this.options.events).includes(e.native.type);
      if (this.notifyPlugins("beforeEvent", i, s) === !1) return;
      const r = this._handleEvent(e, n, i.inChartArea);
      return (
        (i.cancelable = !1),
        this.notifyPlugins("afterEvent", i, s),
        (r || i.changed) && this.render(),
        this
      );
    }
    _handleEvent(e, n, i) {
      const { _active: s = [], options: r } = this,
        o = n,
        a = this._getActiveElements(e, s, i, o),
        l = J_(e),
        c = K1(e, this._lastEvent, i, l);
      i &&
        ((this._lastEvent = null),
        q(r.onHover, [e, a, this], this),
        l && q(r.onClick, [e, a, this], this));
      const u = !ua(a, s);
      return (
        (u || n) && ((this._active = a), this._updateHoverStyles(a, s, n)),
        (this._lastEvent = c),
        u
      );
    }
    _getActiveElements(e, n, i, s) {
      if (e.type === "mouseout") return [];
      if (!i) return n;
      const r = this.options.hover;
      return this.getElementsAtEventForMode(e, r.mode, r, s);
    }
  }),
  O(Zt, "defaults", ue),
  O(Zt, "instances", Eo),
  O(Zt, "overrides", oi),
  O(Zt, "registry", Et),
  O(Zt, "version", $1),
  O(Zt, "getChart", Ff),
  Zt);
function Bf() {
  return X(di.instances, (t) => t._plugins.invalidate());
}
function q1(t, e, n) {
  const {
    startAngle: i,
    pixelMargin: s,
    x: r,
    y: o,
    outerRadius: a,
    innerRadius: l,
  } = e;
  let c = s / a;
  t.beginPath(),
    t.arc(r, o, a, i - c, n + c),
    l > s
      ? ((c = s / l), t.arc(r, o, l, n + c, i - c, !0))
      : t.arc(r, o, s, n + ce, i - ce),
    t.closePath(),
    t.clip();
}
function G1(t) {
  return ad(t, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function Z1(t, e, n, i) {
  const s = G1(t.options.borderRadius),
    r = (n - e) / 2,
    o = Math.min(r, (i * e) / 2),
    a = (l) => {
      const c = ((n - Math.min(r, l)) * i) / 2;
      return Le(l, 0, Math.min(r, c));
    };
  return {
    outerStart: a(s.outerStart),
    outerEnd: a(s.outerEnd),
    innerStart: Le(s.innerStart, 0, o),
    innerEnd: Le(s.innerEnd, 0, o),
  };
}
function pi(t, e, n, i) {
  return { x: n + t * Math.cos(e), y: i + t * Math.sin(e) };
}
function ma(t, e, n, i, s, r) {
  const { x: o, y: a, startAngle: l, pixelMargin: c, innerRadius: u } = e,
    d = Math.max(e.outerRadius + i + n - c, 0),
    h = u > 0 ? u + i + n + c : 0;
  let p = 0;
  const m = s - l;
  if (i) {
    const F = u > 0 ? u - i : 0,
      I = d > 0 ? d - i : 0,
      H = (F + I) / 2,
      P = H !== 0 ? (m * H) / (H + i) : m;
    p = (m - P) / 2;
  }
  const y = Math.max(0.001, m * d - n / se) / d,
    _ = (m - y) / 2,
    g = l + _ + p,
    v = s - _ - p,
    {
      outerStart: x,
      outerEnd: b,
      innerStart: w,
      innerEnd: k,
    } = Z1(e, h, d, v - g),
    S = d - x,
    C = d - b,
    M = g + x / S,
    E = v - b / C,
    D = h + w,
    A = h + k,
    z = g + w / D,
    ee = v - k / A;
  if ((t.beginPath(), r)) {
    const F = (M + E) / 2;
    if ((t.arc(o, a, d, M, F), t.arc(o, a, d, F, E), b > 0)) {
      const N = pi(C, E, o, a);
      t.arc(N.x, N.y, b, E, v + ce);
    }
    const I = pi(A, v, o, a);
    if ((t.lineTo(I.x, I.y), k > 0)) {
      const N = pi(A, ee, o, a);
      t.arc(N.x, N.y, k, v + ce, ee + Math.PI);
    }
    const H = (v - k / h + (g + w / h)) / 2;
    if (
      (t.arc(o, a, h, v - k / h, H, !0),
      t.arc(o, a, h, H, g + w / h, !0),
      w > 0)
    ) {
      const N = pi(D, z, o, a);
      t.arc(N.x, N.y, w, z + Math.PI, g - ce);
    }
    const P = pi(S, g, o, a);
    if ((t.lineTo(P.x, P.y), x > 0)) {
      const N = pi(S, M, o, a);
      t.arc(N.x, N.y, x, g - ce, M);
    }
  } else {
    t.moveTo(o, a);
    const F = Math.cos(M) * d + o,
      I = Math.sin(M) * d + a;
    t.lineTo(F, I);
    const H = Math.cos(E) * d + o,
      P = Math.sin(E) * d + a;
    t.lineTo(H, P);
  }
  t.closePath();
}
function J1(t, e, n, i, s) {
  const { fullCircles: r, startAngle: o, circumference: a } = e;
  let l = e.endAngle;
  if (r) {
    ma(t, e, n, i, l, s);
    for (let c = 0; c < r; ++c) t.fill();
    isNaN(a) || (l = o + (a % ie || ie));
  }
  return ma(t, e, n, i, l, s), t.fill(), l;
}
function ek(t, e, n, i, s) {
  const { fullCircles: r, startAngle: o, circumference: a, options: l } = e,
    {
      borderWidth: c,
      borderJoinStyle: u,
      borderDash: d,
      borderDashOffset: h,
    } = l,
    p = l.borderAlign === "inner";
  if (!c) return;
  t.setLineDash(d || []),
    (t.lineDashOffset = h),
    p
      ? ((t.lineWidth = c * 2), (t.lineJoin = u || "round"))
      : ((t.lineWidth = c), (t.lineJoin = u || "bevel"));
  let m = e.endAngle;
  if (r) {
    ma(t, e, n, i, m, s);
    for (let y = 0; y < r; ++y) t.stroke();
    isNaN(a) || (m = o + (a % ie || ie));
  }
  p && q1(t, e, m), r || (ma(t, e, n, i, m, s), t.stroke());
}
class Pi extends qt {
  constructor(n) {
    super();
    O(this, "circumference");
    O(this, "endAngle");
    O(this, "fullCircles");
    O(this, "innerRadius");
    O(this, "outerRadius");
    O(this, "pixelMargin");
    O(this, "startAngle");
    (this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      n && Object.assign(this, n);
  }
  inRange(n, i, s) {
    const r = this.getProps(["x", "y"], s),
      { angle: o, distance: a } = Km(r, { x: n, y: i }),
      {
        startAngle: l,
        endAngle: c,
        innerRadius: u,
        outerRadius: d,
        circumference: h,
      } = this.getProps(
        [
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        s
      ),
      p = (this.options.spacing + this.options.borderWidth) / 2,
      y = B(h, c - l) >= ie || cr(o, l, c),
      _ = dn(a, u + p, d + p);
    return y && _;
  }
  getCenterPoint(n) {
    const {
        x: i,
        y: s,
        startAngle: r,
        endAngle: o,
        innerRadius: a,
        outerRadius: l,
      } = this.getProps(
        ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"],
        n
      ),
      { offset: c, spacing: u } = this.options,
      d = (r + o) / 2,
      h = (a + l + u + c) / 2;
    return { x: i + Math.cos(d) * h, y: s + Math.sin(d) * h };
  }
  tooltipPosition(n) {
    return this.getCenterPoint(n);
  }
  draw(n) {
    const { options: i, circumference: s } = this,
      r = (i.offset || 0) / 4,
      o = (i.spacing || 0) / 2,
      a = i.circular;
    if (
      ((this.pixelMargin = i.borderAlign === "inner" ? 0.33 : 0),
      (this.fullCircles = s > ie ? Math.floor(s / ie) : 0),
      s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    n.save();
    const l = (this.startAngle + this.endAngle) / 2;
    n.translate(Math.cos(l) * r, Math.sin(l) * r);
    const c = 1 - Math.sin(Math.min(se, s || 0)),
      u = r * c;
    (n.fillStyle = i.backgroundColor),
      (n.strokeStyle = i.borderColor),
      J1(n, this, u, o, a),
      ek(n, this, u, o, a),
      n.restore();
  }
}
O(Pi, "id", "arc"),
  O(Pi, "defaults", {
    borderAlign: "center",
    borderColor: "#fff",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
  }),
  O(Pi, "defaultRoutes", { backgroundColor: "backgroundColor" }),
  O(Pi, "descriptors", {
    _scriptable: !0,
    _indexable: (n) => n !== "borderDash",
  });
function k0(t, e, n = e) {
  (t.lineCap = B(n.borderCapStyle, e.borderCapStyle)),
    t.setLineDash(B(n.borderDash, e.borderDash)),
    (t.lineDashOffset = B(n.borderDashOffset, e.borderDashOffset)),
    (t.lineJoin = B(n.borderJoinStyle, e.borderJoinStyle)),
    (t.lineWidth = B(n.borderWidth, e.borderWidth)),
    (t.strokeStyle = B(n.borderColor, e.borderColor));
}
function tk(t, e, n) {
  t.lineTo(n.x, n.y);
}
function nk(t) {
  return t.stepped
    ? kb
    : t.tension || t.cubicInterpolationMode === "monotone"
    ? Sb
    : tk;
}
function S0(t, e, n = {}) {
  const i = t.length,
    { start: s = 0, end: r = i - 1 } = n,
    { start: o, end: a } = e,
    l = Math.max(s, o),
    c = Math.min(r, a),
    u = (s < o && r < o) || (s > a && r > a);
  return {
    count: i,
    start: l,
    loop: e.loop,
    ilen: c < l && !u ? i + c - l : c - l,
  };
}
function ik(t, e, n, i) {
  const { points: s, options: r } = e,
    { count: o, start: a, loop: l, ilen: c } = S0(s, n, i),
    u = nk(r);
  let { move: d = !0, reverse: h } = i || {},
    p,
    m,
    y;
  for (p = 0; p <= c; ++p)
    (m = s[(a + (h ? c - p : p)) % o]),
      !m.skip &&
        (d ? (t.moveTo(m.x, m.y), (d = !1)) : u(t, y, m, h, r.stepped),
        (y = m));
  return l && ((m = s[(a + (h ? c : 0)) % o]), u(t, y, m, h, r.stepped)), !!l;
}
function sk(t, e, n, i) {
  const s = e.points,
    { count: r, start: o, ilen: a } = S0(s, n, i),
    { move: l = !0, reverse: c } = i || {};
  let u = 0,
    d = 0,
    h,
    p,
    m,
    y,
    _,
    g;
  const v = (b) => (o + (c ? a - b : b)) % r,
    x = () => {
      y !== _ && (t.lineTo(u, _), t.lineTo(u, y), t.lineTo(u, g));
    };
  for (l && ((p = s[v(0)]), t.moveTo(p.x, p.y)), h = 0; h <= a; ++h) {
    if (((p = s[v(h)]), p.skip)) continue;
    const b = p.x,
      w = p.y,
      k = b | 0;
    k === m
      ? (w < y ? (y = w) : w > _ && (_ = w), (u = (d * u + b) / ++d))
      : (x(), t.lineTo(b, w), (m = k), (d = 0), (y = _ = w)),
      (g = w);
  }
  x();
}
function Nc(t) {
  const e = t.options,
    n = e.borderDash && e.borderDash.length;
  return !t._decimated &&
    !t._loop &&
    !e.tension &&
    e.cubicInterpolationMode !== "monotone" &&
    !e.stepped &&
    !n
    ? sk
    : ik;
}
function rk(t) {
  return t.stepped
    ? iw
    : t.tension || t.cubicInterpolationMode === "monotone"
    ? sw
    : Hn;
}
function ok(t, e, n, i) {
  let s = e._path;
  s || ((s = e._path = new Path2D()), e.path(s, n, i) && s.closePath()),
    k0(t, e.options),
    t.stroke(s);
}
function ak(t, e, n, i) {
  const { segments: s, options: r } = e,
    o = Nc(e);
  for (const a of s)
    k0(t, r, a.style),
      t.beginPath(),
      o(t, e, a, { start: n, end: n + i - 1 }) && t.closePath(),
      t.stroke();
}
const lk = typeof Path2D == "function";
function ck(t, e, n, i) {
  lk && !e.options.segment ? ok(t, e, n, i) : ak(t, e, n, i);
}
class bs extends qt {
  constructor(e) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      e && Object.assign(this, e);
  }
  updateControlPoints(e, n) {
    const i = this.options;
    if (
      (i.tension || i.cubicInterpolationMode === "monotone") &&
      !i.stepped &&
      !this._pointsUpdated
    ) {
      const s = i.spanGaps ? this._loop : this._fullLoop;
      Qb(this._points, i, e, s, n), (this._pointsUpdated = !0);
    }
  }
  set points(e) {
    (this._points = e),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = hw(this, this.options.segment));
  }
  first() {
    const e = this.segments,
      n = this.points;
    return e.length && n[e[0].start];
  }
  last() {
    const e = this.segments,
      n = this.points,
      i = e.length;
    return i && n[e[i - 1].end];
  }
  interpolate(e, n) {
    const i = this.options,
      s = e[n],
      r = this.points,
      o = cw(this, { property: n, start: s, end: s });
    if (!o.length) return;
    const a = [],
      l = rk(i);
    let c, u;
    for (c = 0, u = o.length; c < u; ++c) {
      const { start: d, end: h } = o[c],
        p = r[d],
        m = r[h];
      if (p === m) {
        a.push(p);
        continue;
      }
      const y = Math.abs((s - p[n]) / (m[n] - p[n])),
        _ = l(p, m, y, i.stepped);
      (_[n] = e[n]), a.push(_);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(e, n, i) {
    return Nc(this)(e, this, n, i);
  }
  path(e, n, i) {
    const s = this.segments,
      r = Nc(this);
    let o = this._loop;
    (n = n || 0), (i = i || this.points.length - n);
    for (const a of s) o &= r(e, this, a, { start: n, end: n + i - 1 });
    return !!o;
  }
  draw(e, n, i, s) {
    const r = this.options || {};
    (this.points || []).length &&
      r.borderWidth &&
      (e.save(), ck(e, this, i, s), e.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
O(bs, "id", "line"),
  O(bs, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  O(bs, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }),
  O(bs, "descriptors", {
    _scriptable: !0,
    _indexable: (e) => e !== "borderDash" && e !== "fill",
  });
function Hf(t, e, n, i) {
  const s = t.options,
    { [n]: r } = t.getProps([n], i);
  return Math.abs(e - r) < s.radius + s.hitRadius;
}
class jo extends qt {
  constructor(n) {
    super();
    O(this, "parsed");
    O(this, "skip");
    O(this, "stop");
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      n && Object.assign(this, n);
  }
  inRange(n, i, s) {
    const r = this.options,
      { x: o, y: a } = this.getProps(["x", "y"], s);
    return (
      Math.pow(n - o, 2) + Math.pow(i - a, 2) <
      Math.pow(r.hitRadius + r.radius, 2)
    );
  }
  inXRange(n, i) {
    return Hf(this, n, "x", i);
  }
  inYRange(n, i) {
    return Hf(this, n, "y", i);
  }
  getCenterPoint(n) {
    const { x: i, y: s } = this.getProps(["x", "y"], n);
    return { x: i, y: s };
  }
  size(n) {
    n = n || this.options || {};
    let i = n.radius || 0;
    i = Math.max(i, (i && n.hoverRadius) || 0);
    const s = (i && n.borderWidth) || 0;
    return (i + s) * 2;
  }
  draw(n, i) {
    const s = this.options;
    this.skip ||
      s.radius < 0.1 ||
      !Vt(this, i, this.size(s) / 2) ||
      ((n.strokeStyle = s.borderColor),
      (n.lineWidth = s.borderWidth),
      (n.fillStyle = s.backgroundColor),
      Lc(n, s, this.x, this.y));
  }
  getRange() {
    const n = this.options || {};
    return n.radius + n.hitRadius;
  }
}
O(jo, "id", "point"),
  O(jo, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  }),
  O(jo, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
function C0(t, e) {
  const {
    x: n,
    y: i,
    base: s,
    width: r,
    height: o,
  } = t.getProps(["x", "y", "base", "width", "height"], e);
  let a, l, c, u, d;
  return (
    t.horizontal
      ? ((d = o / 2),
        (a = Math.min(n, s)),
        (l = Math.max(n, s)),
        (c = i - d),
        (u = i + d))
      : ((d = r / 2),
        (a = n - d),
        (l = n + d),
        (c = Math.min(i, s)),
        (u = Math.max(i, s))),
    { left: a, top: c, right: l, bottom: u }
  );
}
function hn(t, e, n, i) {
  return t ? 0 : Le(e, n, i);
}
function uk(t, e, n) {
  const i = t.options.borderWidth,
    s = t.borderSkipped,
    r = t0(i);
  return {
    t: hn(s.top, r.top, 0, n),
    r: hn(s.right, r.right, 0, e),
    b: hn(s.bottom, r.bottom, 0, n),
    l: hn(s.left, r.left, 0, e),
  };
}
function dk(t, e, n) {
  const { enableBorderRadius: i } = t.getProps(["enableBorderRadius"]),
    s = t.options.borderRadius,
    r = Zn(s),
    o = Math.min(e, n),
    a = t.borderSkipped,
    l = i || $(s);
  return {
    topLeft: hn(!l || a.top || a.left, r.topLeft, 0, o),
    topRight: hn(!l || a.top || a.right, r.topRight, 0, o),
    bottomLeft: hn(!l || a.bottom || a.left, r.bottomLeft, 0, o),
    bottomRight: hn(!l || a.bottom || a.right, r.bottomRight, 0, o),
  };
}
function hk(t) {
  const e = C0(t),
    n = e.right - e.left,
    i = e.bottom - e.top,
    s = uk(t, n / 2, i / 2),
    r = dk(t, n / 2, i / 2);
  return {
    outer: { x: e.left, y: e.top, w: n, h: i, radius: r },
    inner: {
      x: e.left + s.l,
      y: e.top + s.t,
      w: n - s.l - s.r,
      h: i - s.t - s.b,
      radius: {
        topLeft: Math.max(0, r.topLeft - Math.max(s.t, s.l)),
        topRight: Math.max(0, r.topRight - Math.max(s.t, s.r)),
        bottomLeft: Math.max(0, r.bottomLeft - Math.max(s.b, s.l)),
        bottomRight: Math.max(0, r.bottomRight - Math.max(s.b, s.r)),
      },
    },
  };
}
function Ml(t, e, n, i) {
  const s = e === null,
    r = n === null,
    a = t && !(s && r) && C0(t, i);
  return a && (s || dn(e, a.left, a.right)) && (r || dn(n, a.top, a.bottom));
}
function fk(t) {
  return t.topLeft || t.topRight || t.bottomLeft || t.bottomRight;
}
function pk(t, e) {
  t.rect(e.x, e.y, e.w, e.h);
}
function Pl(t, e, n = {}) {
  const i = t.x !== n.x ? -e : 0,
    s = t.y !== n.y ? -e : 0,
    r = (t.x + t.w !== n.x + n.w ? e : 0) - i,
    o = (t.y + t.h !== n.y + n.h ? e : 0) - s;
  return { x: t.x + i, y: t.y + s, w: t.w + r, h: t.h + o, radius: t.radius };
}
class Mo extends qt {
  constructor(e) {
    super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      e && Object.assign(this, e);
  }
  draw(e) {
    const {
        inflateAmount: n,
        options: { borderColor: i, backgroundColor: s },
      } = this,
      { inner: r, outer: o } = hk(this),
      a = fk(o.radius) ? ur : pk;
    e.save(),
      (o.w !== r.w || o.h !== r.h) &&
        (e.beginPath(),
        a(e, Pl(o, n, r)),
        e.clip(),
        a(e, Pl(r, -n, o)),
        (e.fillStyle = i),
        e.fill("evenodd")),
      e.beginPath(),
      a(e, Pl(r, n)),
      (e.fillStyle = s),
      e.fill(),
      e.restore();
  }
  inRange(e, n, i) {
    return Ml(this, e, n, i);
  }
  inXRange(e, n) {
    return Ml(this, e, null, n);
  }
  inYRange(e, n) {
    return Ml(this, null, e, n);
  }
  getCenterPoint(e) {
    const {
      x: n,
      y: i,
      base: s,
      horizontal: r,
    } = this.getProps(["x", "y", "base", "horizontal"], e);
    return { x: r ? (n + s) / 2 : n, y: r ? i : (i + s) / 2 };
  }
  getRange(e) {
    return e === "x" ? this.width / 2 : this.height / 2;
  }
}
O(Mo, "id", "bar"),
  O(Mo, "defaults", {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0,
  }),
  O(Mo, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
const Vf = (t, e) => {
    let { boxHeight: n = e, boxWidth: i = e } = t;
    return (
      t.usePointStyle &&
        ((n = Math.min(n, e)), (i = t.pointStyleWidth || Math.min(i, e))),
      { boxWidth: i, boxHeight: n, itemHeight: Math.max(e, n) }
    );
  },
  gk = (t, e) =>
    t !== null &&
    e !== null &&
    t.datasetIndex === e.datasetIndex &&
    t.index === e.index;
class Wf extends qt {
  constructor(e) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.ctx = e.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(e, n, i) {
    (this.maxWidth = e),
      (this.maxHeight = n),
      (this._margins = i),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const e = this.options.labels || {};
    let n = q(e.generateLabels, [this.chart], this) || [];
    e.filter && (n = n.filter((i) => e.filter(i, this.chart.data))),
      e.sort && (n = n.sort((i, s) => e.sort(i, s, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n);
  }
  fit() {
    const { options: e, ctx: n } = this;
    if (!e.display) {
      this.width = this.height = 0;
      return;
    }
    const i = e.labels,
      s = ve(i.font),
      r = s.size,
      o = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: l } = Vf(i, r);
    let c, u;
    (n.font = s.string),
      this.isHorizontal()
        ? ((c = this.maxWidth), (u = this._fitRows(o, r, a, l) + 10))
        : ((u = this.maxHeight), (c = this._fitCols(o, s, a, l) + 10)),
      (this.width = Math.min(c, e.maxWidth || this.maxWidth)),
      (this.height = Math.min(u, e.maxHeight || this.maxHeight));
  }
  _fitRows(e, n, i, s) {
    const {
        ctx: r,
        maxWidth: o,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.lineWidths = [0]),
      u = s + a;
    let d = e;
    (r.textAlign = "left"), (r.textBaseline = "middle");
    let h = -1,
      p = -u;
    return (
      this.legendItems.forEach((m, y) => {
        const _ = i + n / 2 + r.measureText(m.text).width;
        (y === 0 || c[c.length - 1] + _ + 2 * a > o) &&
          ((d += u), (c[c.length - (y > 0 ? 0 : 1)] = 0), (p += u), h++),
          (l[y] = { left: 0, top: p, row: h, width: _, height: s }),
          (c[c.length - 1] += _ + a);
      }),
      d
    );
  }
  _fitCols(e, n, i, s) {
    const {
        ctx: r,
        maxHeight: o,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.columnSizes = []),
      u = o - e;
    let d = a,
      h = 0,
      p = 0,
      m = 0,
      y = 0;
    return (
      this.legendItems.forEach((_, g) => {
        const { itemWidth: v, itemHeight: x } = mk(i, n, r, _, s);
        g > 0 &&
          p + x + 2 * a > u &&
          ((d += h + a),
          c.push({ width: h, height: p }),
          (m += h + a),
          y++,
          (h = p = 0)),
          (l[g] = { left: m, top: p, col: y, width: v, height: x }),
          (h = Math.max(h, v)),
          (p += x + a);
      }),
      (d += h),
      c.push({ width: h, height: p }),
      d
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const e = this._computeTitleHeight(),
      {
        legendHitBoxes: n,
        options: {
          align: i,
          labels: { padding: s },
          rtl: r,
        },
      } = this,
      o = Ri(r, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0,
        l = Me(i, this.left + s, this.right - this.lineWidths[a]);
      for (const c of n)
        a !== c.row &&
          ((a = c.row),
          (l = Me(i, this.left + s, this.right - this.lineWidths[a]))),
          (c.top += this.top + e + s),
          (c.left = o.leftForLtr(o.x(l), c.width)),
          (l += c.width + s);
    } else {
      let a = 0,
        l = Me(i, this.top + e + s, this.bottom - this.columnSizes[a].height);
      for (const c of n)
        c.col !== a &&
          ((a = c.col),
          (l = Me(
            i,
            this.top + e + s,
            this.bottom - this.columnSizes[a].height
          ))),
          (c.top = l),
          (c.left += this.left + s),
          (c.left = o.leftForLtr(o.x(c.left), c.width)),
          (l += c.height + s);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const e = this.ctx;
      rd(e, this), this._draw(), od(e);
    }
  }
  _draw() {
    const { options: e, columnSizes: n, lineWidths: i, ctx: s } = this,
      { align: r, labels: o } = e,
      a = ue.color,
      l = Ri(e.rtl, this.left, this.width),
      c = ve(o.font),
      { padding: u } = o,
      d = c.size,
      h = d / 2;
    let p;
    this.drawTitle(),
      (s.textAlign = l.textAlign("left")),
      (s.textBaseline = "middle"),
      (s.lineWidth = 0.5),
      (s.font = c.string);
    const { boxWidth: m, boxHeight: y, itemHeight: _ } = Vf(o, d),
      g = function (k, S, C) {
        if (isNaN(m) || m <= 0 || isNaN(y) || y < 0) return;
        s.save();
        const M = B(C.lineWidth, 1);
        if (
          ((s.fillStyle = B(C.fillStyle, a)),
          (s.lineCap = B(C.lineCap, "butt")),
          (s.lineDashOffset = B(C.lineDashOffset, 0)),
          (s.lineJoin = B(C.lineJoin, "miter")),
          (s.lineWidth = M),
          (s.strokeStyle = B(C.strokeStyle, a)),
          s.setLineDash(B(C.lineDash, [])),
          o.usePointStyle)
        ) {
          const E = {
              radius: (y * Math.SQRT2) / 2,
              pointStyle: C.pointStyle,
              rotation: C.rotation,
              borderWidth: M,
            },
            D = l.xPlus(k, m / 2),
            A = S + h;
          e0(s, E, D, A, o.pointStyleWidth && m);
        } else {
          const E = S + Math.max((d - y) / 2, 0),
            D = l.leftForLtr(k, m),
            A = Zn(C.borderRadius);
          s.beginPath(),
            Object.values(A).some((z) => z !== 0)
              ? ur(s, { x: D, y: E, w: m, h: y, radius: A })
              : s.rect(D, E, m, y),
            s.fill(),
            M !== 0 && s.stroke();
        }
        s.restore();
      },
      v = function (k, S, C) {
        ai(s, C.text, k, S + _ / 2, c, {
          strikethrough: C.hidden,
          textAlign: l.textAlign(C.textAlign),
        });
      },
      x = this.isHorizontal(),
      b = this._computeTitleHeight();
    x
      ? (p = {
          x: Me(r, this.left + u, this.right - i[0]),
          y: this.top + u + b,
          line: 0,
        })
      : (p = {
          x: this.left + u,
          y: Me(r, this.top + b + u, this.bottom - n[0].height),
          line: 0,
        }),
      l0(this.ctx, e.textDirection);
    const w = _ + u;
    this.legendItems.forEach((k, S) => {
      (s.strokeStyle = k.fontColor), (s.fillStyle = k.fontColor);
      const C = s.measureText(k.text).width,
        M = l.textAlign(k.textAlign || (k.textAlign = o.textAlign)),
        E = m + h + C;
      let D = p.x,
        A = p.y;
      l.setWidth(this.width),
        x
          ? S > 0 &&
            D + E + u > this.right &&
            ((A = p.y += w),
            p.line++,
            (D = p.x = Me(r, this.left + u, this.right - i[p.line])))
          : S > 0 &&
            A + w > this.bottom &&
            ((D = p.x = D + n[p.line].width + u),
            p.line++,
            (A = p.y =
              Me(r, this.top + b + u, this.bottom - n[p.line].height)));
      const z = l.x(D);
      if (
        (g(z, A, k),
        (D = ub(M, D + m + h, x ? D + E : this.right, e.rtl)),
        v(l.x(D), A, k),
        x)
      )
        p.x += E + u;
      else if (typeof k.text != "string") {
        const ee = c.lineHeight;
        p.y += E0(k, ee);
      } else p.y += w;
    }),
      c0(this.ctx, e.textDirection);
  }
  drawTitle() {
    const e = this.options,
      n = e.title,
      i = ve(n.font),
      s = De(n.padding);
    if (!n.display) return;
    const r = Ri(e.rtl, this.left, this.width),
      o = this.ctx,
      a = n.position,
      l = i.size / 2,
      c = s.top + l;
    let u,
      d = this.left,
      h = this.width;
    if (this.isHorizontal())
      (h = Math.max(...this.lineWidths)),
        (u = this.top + c),
        (d = Me(e.align, d, this.right - h));
    else {
      const m = this.columnSizes.reduce((y, _) => Math.max(y, _.height), 0);
      u =
        c +
        Me(
          e.align,
          this.top,
          this.bottom - m - e.labels.padding - this._computeTitleHeight()
        );
    }
    const p = Me(a, d, d + h);
    (o.textAlign = r.textAlign(id(a))),
      (o.textBaseline = "middle"),
      (o.strokeStyle = n.color),
      (o.fillStyle = n.color),
      (o.font = i.string),
      ai(o, n.text, p, u, i);
  }
  _computeTitleHeight() {
    const e = this.options.title,
      n = ve(e.font),
      i = De(e.padding);
    return e.display ? n.lineHeight + i.height : 0;
  }
  _getLegendItemAt(e, n) {
    let i, s, r;
    if (dn(e, this.left, this.right) && dn(n, this.top, this.bottom)) {
      for (r = this.legendHitBoxes, i = 0; i < r.length; ++i)
        if (
          ((s = r[i]),
          dn(e, s.left, s.left + s.width) && dn(n, s.top, s.top + s.height))
        )
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(e) {
    const n = this.options;
    if (!xk(e.type, n)) return;
    const i = this._getLegendItemAt(e.x, e.y);
    if (e.type === "mousemove" || e.type === "mouseout") {
      const s = this._hoveredItem,
        r = gk(s, i);
      s && !r && q(n.onLeave, [e, s, this], this),
        (this._hoveredItem = i),
        i && !r && q(n.onHover, [e, i, this], this);
    } else i && q(n.onClick, [e, i, this], this);
  }
}
function mk(t, e, n, i, s) {
  const r = vk(i, t, e, n),
    o = yk(s, i, e.lineHeight);
  return { itemWidth: r, itemHeight: o };
}
function vk(t, e, n, i) {
  let s = t.text;
  return (
    s &&
      typeof s != "string" &&
      (s = s.reduce((r, o) => (r.length > o.length ? r : o))),
    e + n.size / 2 + i.measureText(s).width
  );
}
function yk(t, e, n) {
  let i = t;
  return typeof e.text != "string" && (i = E0(e, n)), i;
}
function E0(t, e) {
  const n = t.text ? t.text.length + 0.5 : 0;
  return e * n;
}
function xk(t, e) {
  return !!(
    ((t === "mousemove" || t === "mouseout") && (e.onHover || e.onLeave)) ||
    (e.onClick && (t === "click" || t === "mouseup"))
  );
}
var Ba = {
  id: "legend",
  _element: Wf,
  start(t, e, n) {
    const i = (t.legend = new Wf({ ctx: t.ctx, options: n, chart: t }));
    at.configure(t, i, n), at.addBox(t, i);
  },
  stop(t) {
    at.removeBox(t, t.legend), delete t.legend;
  },
  beforeUpdate(t, e, n) {
    const i = t.legend;
    at.configure(t, i, n), (i.options = n);
  },
  afterUpdate(t) {
    const e = t.legend;
    e.buildLabels(), e.adjustHitBoxes();
  },
  afterEvent(t, e) {
    e.replay || t.legend.handleEvent(e.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(t, e, n) {
      const i = e.datasetIndex,
        s = n.chart;
      s.isDatasetVisible(i)
        ? (s.hide(i), (e.hidden = !0))
        : (s.show(i), (e.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (t) => t.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(t) {
        const e = t.data.datasets,
          {
            labels: {
              usePointStyle: n,
              pointStyle: i,
              textAlign: s,
              color: r,
              useBorderRadius: o,
              borderRadius: a,
            },
          } = t.legend.options;
        return t._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(n ? 0 : void 0),
            u = De(c.borderWidth);
          return {
            text: e[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: r,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (u.width + u.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: i || c.pointStyle,
            rotation: c.rotation,
            textAlign: s || c.textAlign,
            borderRadius: o && (a || c.borderRadius),
            datasetIndex: l.index,
          };
        }, this);
      },
    },
    title: {
      color: (t) => t.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (t) => !t.startsWith("on"),
    labels: {
      _scriptable: (t) => !["generateLabels", "filter", "sort"].includes(t),
    },
  },
};
class j0 extends qt {
  constructor(e) {
    super(),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.ctx = e.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(e, n) {
    const i = this.options;
    if (((this.left = 0), (this.top = 0), !i.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = e), (this.height = this.bottom = n);
    const s = ne(i.text) ? i.text.length : 1;
    this._padding = De(i.padding);
    const r = s * ve(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = r) : (this.width = r);
  }
  isHorizontal() {
    const e = this.options.position;
    return e === "top" || e === "bottom";
  }
  _drawArgs(e) {
    const { top: n, left: i, bottom: s, right: r, options: o } = this,
      a = o.align;
    let l = 0,
      c,
      u,
      d;
    return (
      this.isHorizontal()
        ? ((u = Me(a, i, r)), (d = n + e), (c = r - i))
        : (o.position === "left"
            ? ((u = i + e), (d = Me(a, s, n)), (l = se * -0.5))
            : ((u = r - e), (d = Me(a, n, s)), (l = se * 0.5)),
          (c = s - n)),
      { titleX: u, titleY: d, maxWidth: c, rotation: l }
    );
  }
  draw() {
    const e = this.ctx,
      n = this.options;
    if (!n.display) return;
    const i = ve(n.font),
      r = i.lineHeight / 2 + this._padding.top,
      { titleX: o, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(r);
    ai(e, n.text, 0, 0, i, {
      color: n.color,
      maxWidth: l,
      rotation: c,
      textAlign: id(n.align),
      textBaseline: "middle",
      translation: [o, a],
    });
  }
}
function _k(t, e) {
  const n = new j0({ ctx: t.ctx, options: e, chart: t });
  at.configure(t, n, e), at.addBox(t, n), (t.titleBlock = n);
}
var M0 = {
  id: "title",
  _element: j0,
  start(t, e, n) {
    _k(t, n);
  },
  stop(t) {
    const e = t.titleBlock;
    at.removeBox(t, e), delete t.titleBlock;
  },
  beforeUpdate(t, e, n) {
    const i = t.titleBlock;
    at.configure(t, i, n), (i.options = n);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const ws = {
  average(t) {
    if (!t.length) return !1;
    let e,
      n,
      i = 0,
      s = 0,
      r = 0;
    for (e = 0, n = t.length; e < n; ++e) {
      const o = t[e].element;
      if (o && o.hasValue()) {
        const a = o.tooltipPosition();
        (i += a.x), (s += a.y), ++r;
      }
    }
    return { x: i / r, y: s / r };
  },
  nearest(t, e) {
    if (!t.length) return !1;
    let n = e.x,
      i = e.y,
      s = Number.POSITIVE_INFINITY,
      r,
      o,
      a;
    for (r = 0, o = t.length; r < o; ++r) {
      const l = t[r].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(),
          u = Mc(e, c);
        u < s && ((s = u), (a = l));
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      (n = l.x), (i = l.y);
    }
    return { x: n, y: i };
  },
};
function St(t, e) {
  return e && (ne(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
}
function Rt(t) {
  return (typeof t == "string" || t instanceof String) &&
    t.indexOf(`
`) > -1
    ? t.split(`
`)
    : t;
}
function bk(t, e) {
  const { element: n, datasetIndex: i, index: s } = e,
    r = t.getDatasetMeta(i).controller,
    { label: o, value: a } = r.getLabelAndValue(s);
  return {
    chart: t,
    label: o,
    parsed: r.getParsed(s),
    raw: t.data.datasets[i].data[s],
    formattedValue: a,
    dataset: r.getDataset(),
    dataIndex: s,
    datasetIndex: i,
    element: n,
  };
}
function $f(t, e) {
  const n = t.chart.ctx,
    { body: i, footer: s, title: r } = t,
    { boxWidth: o, boxHeight: a } = e,
    l = ve(e.bodyFont),
    c = ve(e.titleFont),
    u = ve(e.footerFont),
    d = r.length,
    h = s.length,
    p = i.length,
    m = De(e.padding);
  let y = m.height,
    _ = 0,
    g = i.reduce(
      (b, w) => b + w.before.length + w.lines.length + w.after.length,
      0
    );
  if (
    ((g += t.beforeBody.length + t.afterBody.length),
    d &&
      (y += d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
    g)
  ) {
    const b = e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    y += p * b + (g - p) * l.lineHeight + (g - 1) * e.bodySpacing;
  }
  h && (y += e.footerMarginTop + h * u.lineHeight + (h - 1) * e.footerSpacing);
  let v = 0;
  const x = function (b) {
    _ = Math.max(_, n.measureText(b).width + v);
  };
  return (
    n.save(),
    (n.font = c.string),
    X(t.title, x),
    (n.font = l.string),
    X(t.beforeBody.concat(t.afterBody), x),
    (v = e.displayColors ? o + 2 + e.boxPadding : 0),
    X(i, (b) => {
      X(b.before, x), X(b.lines, x), X(b.after, x);
    }),
    (v = 0),
    (n.font = u.string),
    X(t.footer, x),
    n.restore(),
    (_ += m.width),
    { width: _, height: y }
  );
}
function wk(t, e) {
  const { y: n, height: i } = e;
  return n < i / 2 ? "top" : n > t.height - i / 2 ? "bottom" : "center";
}
function kk(t, e, n, i) {
  const { x: s, width: r } = i,
    o = n.caretSize + n.caretPadding;
  if ((t === "left" && s + r + o > e.width) || (t === "right" && s - r - o < 0))
    return !0;
}
function Sk(t, e, n, i) {
  const { x: s, width: r } = n,
    {
      width: o,
      chartArea: { left: a, right: l },
    } = t;
  let c = "center";
  return (
    i === "center"
      ? (c = s <= (a + l) / 2 ? "left" : "right")
      : s <= r / 2
      ? (c = "left")
      : s >= o - r / 2 && (c = "right"),
    kk(c, t, e, n) && (c = "center"),
    c
  );
}
function Uf(t, e, n) {
  const i = n.yAlign || e.yAlign || wk(t, n);
  return { xAlign: n.xAlign || e.xAlign || Sk(t, e, n, i), yAlign: i };
}
function Ck(t, e) {
  let { x: n, width: i } = t;
  return e === "right" ? (n -= i) : e === "center" && (n -= i / 2), n;
}
function Ek(t, e, n) {
  let { y: i, height: s } = t;
  return (
    e === "top" ? (i += n) : e === "bottom" ? (i -= s + n) : (i -= s / 2), i
  );
}
function Yf(t, e, n, i) {
  const { caretSize: s, caretPadding: r, cornerRadius: o } = t,
    { xAlign: a, yAlign: l } = n,
    c = s + r,
    { topLeft: u, topRight: d, bottomLeft: h, bottomRight: p } = Zn(o);
  let m = Ck(e, a);
  const y = Ek(e, l, c);
  return (
    l === "center"
      ? a === "left"
        ? (m += c)
        : a === "right" && (m -= c)
      : a === "left"
      ? (m -= Math.max(u, h) + s)
      : a === "right" && (m += Math.max(d, p) + s),
    { x: Le(m, 0, i.width - e.width), y: Le(y, 0, i.height - e.height) }
  );
}
function so(t, e, n) {
  const i = De(n.padding);
  return e === "center"
    ? t.x + t.width / 2
    : e === "right"
    ? t.x + t.width - i.right
    : t.x + i.left;
}
function Xf(t) {
  return St([], Rt(t));
}
function jk(t, e, n) {
  return On(t, { tooltip: e, tooltipItems: n, type: "tooltip" });
}
function Kf(t, e) {
  const n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return n ? t.override(n) : t;
}
const P0 = {
  beforeTitle: Tt,
  title(t) {
    if (t.length > 0) {
      const e = t[0],
        n = e.chart.data.labels,
        i = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return e.dataset.label || "";
      if (e.label) return e.label;
      if (i > 0 && e.dataIndex < i) return n[e.dataIndex];
    }
    return "";
  },
  afterTitle: Tt,
  beforeBody: Tt,
  beforeLabel: Tt,
  label(t) {
    if (this && this.options && this.options.mode === "dataset")
      return t.label + ": " + t.formattedValue || t.formattedValue;
    let e = t.dataset.label || "";
    e && (e += ": ");
    const n = t.formattedValue;
    return K(n) || (e += n), e;
  },
  labelColor(t) {
    const n = t.chart
      .getDatasetMeta(t.datasetIndex)
      .controller.getStyle(t.dataIndex);
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(t) {
    const n = t.chart
      .getDatasetMeta(t.datasetIndex)
      .controller.getStyle(t.dataIndex);
    return { pointStyle: n.pointStyle, rotation: n.rotation };
  },
  afterLabel: Tt,
  afterBody: Tt,
  beforeFooter: Tt,
  footer: Tt,
  afterFooter: Tt,
};
function Fe(t, e, n, i) {
  const s = t[e].call(n, i);
  return typeof s > "u" ? P0[e].call(n, i) : s;
}
class Tc extends qt {
  constructor(e) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(e) {
    (this.options = e),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const e = this._cachedAnimations;
    if (e) return e;
    const n = this.chart,
      i = this.options.setContext(this.getContext()),
      s = i.enabled && n.options.animation && i.animations,
      r = new d0(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(r)), r;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = jk(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(e, n) {
    const { callbacks: i } = n,
      s = Fe(i, "beforeTitle", this, e),
      r = Fe(i, "title", this, e),
      o = Fe(i, "afterTitle", this, e);
    let a = [];
    return (a = St(a, Rt(s))), (a = St(a, Rt(r))), (a = St(a, Rt(o))), a;
  }
  getBeforeBody(e, n) {
    return Xf(Fe(n.callbacks, "beforeBody", this, e));
  }
  getBody(e, n) {
    const { callbacks: i } = n,
      s = [];
    return (
      X(e, (r) => {
        const o = { before: [], lines: [], after: [] },
          a = Kf(i, r);
        St(o.before, Rt(Fe(a, "beforeLabel", this, r))),
          St(o.lines, Fe(a, "label", this, r)),
          St(o.after, Rt(Fe(a, "afterLabel", this, r))),
          s.push(o);
      }),
      s
    );
  }
  getAfterBody(e, n) {
    return Xf(Fe(n.callbacks, "afterBody", this, e));
  }
  getFooter(e, n) {
    const { callbacks: i } = n,
      s = Fe(i, "beforeFooter", this, e),
      r = Fe(i, "footer", this, e),
      o = Fe(i, "afterFooter", this, e);
    let a = [];
    return (a = St(a, Rt(s))), (a = St(a, Rt(r))), (a = St(a, Rt(o))), a;
  }
  _createItems(e) {
    const n = this._active,
      i = this.chart.data,
      s = [],
      r = [],
      o = [];
    let a = [],
      l,
      c;
    for (l = 0, c = n.length; l < c; ++l) a.push(bk(this.chart, n[l]));
    return (
      e.filter && (a = a.filter((u, d, h) => e.filter(u, d, h, i))),
      e.itemSort && (a = a.sort((u, d) => e.itemSort(u, d, i))),
      X(a, (u) => {
        const d = Kf(e.callbacks, u);
        s.push(Fe(d, "labelColor", this, u)),
          r.push(Fe(d, "labelPointStyle", this, u)),
          o.push(Fe(d, "labelTextColor", this, u));
      }),
      (this.labelColors = s),
      (this.labelPointStyles = r),
      (this.labelTextColors = o),
      (this.dataPoints = a),
      a
    );
  }
  update(e, n) {
    const i = this.options.setContext(this.getContext()),
      s = this._active;
    let r,
      o = [];
    if (!s.length) this.opacity !== 0 && (r = { opacity: 0 });
    else {
      const a = ws[i.position].call(this, s, this._eventPosition);
      (o = this._createItems(i)),
        (this.title = this.getTitle(o, i)),
        (this.beforeBody = this.getBeforeBody(o, i)),
        (this.body = this.getBody(o, i)),
        (this.afterBody = this.getAfterBody(o, i)),
        (this.footer = this.getFooter(o, i));
      const l = (this._size = $f(this, i)),
        c = Object.assign({}, a, l),
        u = Uf(this.chart, i, c),
        d = Yf(i, c, u, this.chart);
      (this.xAlign = u.xAlign),
        (this.yAlign = u.yAlign),
        (r = {
          opacity: 1,
          x: d.x,
          y: d.y,
          width: l.width,
          height: l.height,
          caretX: a.x,
          caretY: a.y,
        });
    }
    (this._tooltipItems = o),
      (this.$context = void 0),
      r && this._resolveAnimations().update(this, r),
      e &&
        i.external &&
        i.external.call(this, { chart: this.chart, tooltip: this, replay: n });
  }
  drawCaret(e, n, i, s) {
    const r = this.getCaretPosition(e, i, s);
    n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3);
  }
  getCaretPosition(e, n, i) {
    const { xAlign: s, yAlign: r } = this,
      { caretSize: o, cornerRadius: a } = i,
      { topLeft: l, topRight: c, bottomLeft: u, bottomRight: d } = Zn(a),
      { x: h, y: p } = e,
      { width: m, height: y } = n;
    let _, g, v, x, b, w;
    return (
      r === "center"
        ? ((b = p + y / 2),
          s === "left"
            ? ((_ = h), (g = _ - o), (x = b + o), (w = b - o))
            : ((_ = h + m), (g = _ + o), (x = b - o), (w = b + o)),
          (v = _))
        : (s === "left"
            ? (g = h + Math.max(l, u) + o)
            : s === "right"
            ? (g = h + m - Math.max(c, d) - o)
            : (g = this.caretX),
          r === "top"
            ? ((x = p), (b = x - o), (_ = g - o), (v = g + o))
            : ((x = p + y), (b = x + o), (_ = g + o), (v = g - o)),
          (w = x)),
      { x1: _, x2: g, x3: v, y1: x, y2: b, y3: w }
    );
  }
  drawTitle(e, n, i) {
    const s = this.title,
      r = s.length;
    let o, a, l;
    if (r) {
      const c = Ri(i.rtl, this.x, this.width);
      for (
        e.x = so(this, i.titleAlign, i),
          n.textAlign = c.textAlign(i.titleAlign),
          n.textBaseline = "middle",
          o = ve(i.titleFont),
          a = i.titleSpacing,
          n.fillStyle = i.titleColor,
          n.font = o.string,
          l = 0;
        l < r;
        ++l
      )
        n.fillText(s[l], c.x(e.x), e.y + o.lineHeight / 2),
          (e.y += o.lineHeight + a),
          l + 1 === r && (e.y += i.titleMarginBottom - a);
    }
  }
  _drawColorBox(e, n, i, s, r) {
    const o = this.labelColors[i],
      a = this.labelPointStyles[i],
      { boxHeight: l, boxWidth: c } = r,
      u = ve(r.bodyFont),
      d = so(this, "left", r),
      h = s.x(d),
      p = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0,
      m = n.y + p;
    if (r.usePointStyle) {
      const y = {
          radius: Math.min(c, l) / 2,
          pointStyle: a.pointStyle,
          rotation: a.rotation,
          borderWidth: 1,
        },
        _ = s.leftForLtr(h, c) + c / 2,
        g = m + l / 2;
      (e.strokeStyle = r.multiKeyBackground),
        (e.fillStyle = r.multiKeyBackground),
        Lc(e, y, _, g),
        (e.strokeStyle = o.borderColor),
        (e.fillStyle = o.backgroundColor),
        Lc(e, y, _, g);
    } else {
      (e.lineWidth = $(o.borderWidth)
        ? Math.max(...Object.values(o.borderWidth))
        : o.borderWidth || 1),
        (e.strokeStyle = o.borderColor),
        e.setLineDash(o.borderDash || []),
        (e.lineDashOffset = o.borderDashOffset || 0);
      const y = s.leftForLtr(h, c),
        _ = s.leftForLtr(s.xPlus(h, 1), c - 2),
        g = Zn(o.borderRadius);
      Object.values(g).some((v) => v !== 0)
        ? (e.beginPath(),
          (e.fillStyle = r.multiKeyBackground),
          ur(e, { x: y, y: m, w: c, h: l, radius: g }),
          e.fill(),
          e.stroke(),
          (e.fillStyle = o.backgroundColor),
          e.beginPath(),
          ur(e, { x: _, y: m + 1, w: c - 2, h: l - 2, radius: g }),
          e.fill())
        : ((e.fillStyle = r.multiKeyBackground),
          e.fillRect(y, m, c, l),
          e.strokeRect(y, m, c, l),
          (e.fillStyle = o.backgroundColor),
          e.fillRect(_, m + 1, c - 2, l - 2));
    }
    e.fillStyle = this.labelTextColors[i];
  }
  drawBody(e, n, i) {
    const { body: s } = this,
      {
        bodySpacing: r,
        bodyAlign: o,
        displayColors: a,
        boxHeight: l,
        boxWidth: c,
        boxPadding: u,
      } = i,
      d = ve(i.bodyFont);
    let h = d.lineHeight,
      p = 0;
    const m = Ri(i.rtl, this.x, this.width),
      y = function (C) {
        n.fillText(C, m.x(e.x + p), e.y + h / 2), (e.y += h + r);
      },
      _ = m.textAlign(o);
    let g, v, x, b, w, k, S;
    for (
      n.textAlign = o,
        n.textBaseline = "middle",
        n.font = d.string,
        e.x = so(this, _, i),
        n.fillStyle = i.bodyColor,
        X(this.beforeBody, y),
        p = a && _ !== "right" ? (o === "center" ? c / 2 + u : c + 2 + u) : 0,
        b = 0,
        k = s.length;
      b < k;
      ++b
    ) {
      for (
        g = s[b],
          v = this.labelTextColors[b],
          n.fillStyle = v,
          X(g.before, y),
          x = g.lines,
          a &&
            x.length &&
            (this._drawColorBox(n, e, b, m, i),
            (h = Math.max(d.lineHeight, l))),
          w = 0,
          S = x.length;
        w < S;
        ++w
      )
        y(x[w]), (h = d.lineHeight);
      X(g.after, y);
    }
    (p = 0), (h = d.lineHeight), X(this.afterBody, y), (e.y -= r);
  }
  drawFooter(e, n, i) {
    const s = this.footer,
      r = s.length;
    let o, a;
    if (r) {
      const l = Ri(i.rtl, this.x, this.width);
      for (
        e.x = so(this, i.footerAlign, i),
          e.y += i.footerMarginTop,
          n.textAlign = l.textAlign(i.footerAlign),
          n.textBaseline = "middle",
          o = ve(i.footerFont),
          n.fillStyle = i.footerColor,
          n.font = o.string,
          a = 0;
        a < r;
        ++a
      )
        n.fillText(s[a], l.x(e.x), e.y + o.lineHeight / 2),
          (e.y += o.lineHeight + i.footerSpacing);
    }
  }
  drawBackground(e, n, i, s) {
    const { xAlign: r, yAlign: o } = this,
      { x: a, y: l } = e,
      { width: c, height: u } = i,
      {
        topLeft: d,
        topRight: h,
        bottomLeft: p,
        bottomRight: m,
      } = Zn(s.cornerRadius);
    (n.fillStyle = s.backgroundColor),
      (n.strokeStyle = s.borderColor),
      (n.lineWidth = s.borderWidth),
      n.beginPath(),
      n.moveTo(a + d, l),
      o === "top" && this.drawCaret(e, n, i, s),
      n.lineTo(a + c - h, l),
      n.quadraticCurveTo(a + c, l, a + c, l + h),
      o === "center" && r === "right" && this.drawCaret(e, n, i, s),
      n.lineTo(a + c, l + u - m),
      n.quadraticCurveTo(a + c, l + u, a + c - m, l + u),
      o === "bottom" && this.drawCaret(e, n, i, s),
      n.lineTo(a + p, l + u),
      n.quadraticCurveTo(a, l + u, a, l + u - p),
      o === "center" && r === "left" && this.drawCaret(e, n, i, s),
      n.lineTo(a, l + d),
      n.quadraticCurveTo(a, l, a + d, l),
      n.closePath(),
      n.fill(),
      s.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(e) {
    const n = this.chart,
      i = this.$animations,
      s = i && i.x,
      r = i && i.y;
    if (s || r) {
      const o = ws[e.position].call(this, this._active, this._eventPosition);
      if (!o) return;
      const a = (this._size = $f(this, e)),
        l = Object.assign({}, o, this._size),
        c = Uf(n, e, l),
        u = Yf(e, l, c, n);
      (s._to !== u.x || r._to !== u.y) &&
        ((this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (this.width = a.width),
        (this.height = a.height),
        (this.caretX = o.x),
        (this.caretY = o.y),
        this._resolveAnimations().update(this, u));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(e) {
    const n = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i) return;
    this._updateAnimationTarget(n);
    const s = { width: this.width, height: this.height },
      r = { x: this.x, y: this.y };
    i = Math.abs(i) < 0.001 ? 0 : i;
    const o = De(n.padding),
      a =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    n.enabled &&
      a &&
      (e.save(),
      (e.globalAlpha = i),
      this.drawBackground(r, e, s, n),
      l0(e, n.textDirection),
      (r.y += o.top),
      this.drawTitle(r, e, n),
      this.drawBody(r, e, n),
      this.drawFooter(r, e, n),
      c0(e, n.textDirection),
      e.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e, n) {
    const i = this._active,
      s = e.map(({ datasetIndex: a, index: l }) => {
        const c = this.chart.getDatasetMeta(a);
        if (!c) throw new Error("Cannot find a dataset at index " + a);
        return { datasetIndex: a, element: c.data[l], index: l };
      }),
      r = !ua(i, s),
      o = this._positionChanged(s, n);
    (r || o) &&
      ((this._active = s),
      (this._eventPosition = n),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(e, n, i = !0) {
    if (n && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options,
      r = this._active || [],
      o = this._getActiveElements(e, r, n, i),
      a = this._positionChanged(o, e),
      l = n || !ua(o, r) || a;
    return (
      l &&
        ((this._active = o),
        (s.enabled || s.external) &&
          ((this._eventPosition = { x: e.x, y: e.y }), this.update(!0, n))),
      l
    );
  }
  _getActiveElements(e, n, i, s) {
    const r = this.options;
    if (e.type === "mouseout") return [];
    if (!s) return n;
    const o = this.chart.getElementsAtEventForMode(e, r.mode, r, i);
    return r.reverse && o.reverse(), o;
  }
  _positionChanged(e, n) {
    const { caretX: i, caretY: s, options: r } = this,
      o = ws[r.position].call(this, e, n);
    return o !== !1 && (i !== o.x || s !== o.y);
  }
}
O(Tc, "positioners", ws);
var Ha = {
  id: "tooltip",
  _element: Tc,
  positioners: ws,
  afterInit(t, e, n) {
    n && (t.tooltip = new Tc({ chart: t, options: n }));
  },
  beforeUpdate(t, e, n) {
    t.tooltip && t.tooltip.initialize(n);
  },
  reset(t, e, n) {
    t.tooltip && t.tooltip.initialize(n);
  },
  afterDraw(t) {
    const e = t.tooltip;
    if (e && e._willRender()) {
      const n = { tooltip: e };
      if (t.notifyPlugins("beforeTooltipDraw", { ...n, cancelable: !0 }) === !1)
        return;
      e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", n);
    }
  },
  afterEvent(t, e) {
    if (t.tooltip) {
      const n = e.replay;
      t.tooltip.handleEvent(e.event, n, e.inChartArea) && (e.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (t, e) => e.bodyFont.size,
    boxWidth: (t, e) => e.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: P0,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (t) => t !== "filter" && t !== "itemSort" && t !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const Mk = (t, e, n, i) => (
  typeof e == "string"
    ? ((n = t.push(e) - 1), i.unshift({ index: n, label: e }))
    : isNaN(e) && (n = null),
  n
);
function Pk(t, e, n, i) {
  const s = t.indexOf(e);
  if (s === -1) return Mk(t, e, n, i);
  const r = t.lastIndexOf(e);
  return s !== r ? n : s;
}
const Lk = (t, e) => (t === null ? null : Le(Math.round(t), 0, e));
function Qf(t) {
  const e = this.getLabels();
  return t >= 0 && t < e.length ? e[t] : t;
}
class va extends ui {
  constructor(e) {
    super(e),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(e) {
    const n = this._addedLabels;
    if (n.length) {
      const i = this.getLabels();
      for (const { index: s, label: r } of n) i[s] === r && i.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(e);
  }
  parse(e, n) {
    if (K(e)) return null;
    const i = this.getLabels();
    return (
      (n =
        isFinite(n) && i[n] === e ? n : Pk(i, e, B(n, e), this._addedLabels)),
      Lk(n, i.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: e, maxDefined: n } = this.getUserBounds();
    let { min: i, max: s } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (e || (i = 0), n || (s = this.getLabels().length - 1)),
      (this.min = i),
      (this.max = s);
  }
  buildTicks() {
    const e = this.min,
      n = this.max,
      i = this.options.offset,
      s = [];
    let r = this.getLabels();
    (r = e === 0 && n === r.length - 1 ? r : r.slice(e, n + 1)),
      (this._valueRange = Math.max(r.length - (i ? 0 : 1), 1)),
      (this._startValue = this.min - (i ? 0.5 : 0));
    for (let o = e; o <= n; o++) s.push({ value: o });
    return s;
  }
  getLabelForValue(e) {
    return Qf.call(this, e);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(e) {
    return (
      typeof e != "number" && (e = this.parse(e)),
      e === null
        ? NaN
        : this.getPixelForDecimal((e - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(e) {
    const n = this.ticks;
    return e < 0 || e > n.length - 1 ? null : this.getPixelForValue(n[e].value);
  }
  getValueForPixel(e) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(e) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
O(va, "id", "category"), O(va, "defaults", { ticks: { callback: Qf } });
function Ok(t, e) {
  const n = [],
    {
      bounds: s,
      step: r,
      min: o,
      max: a,
      precision: l,
      count: c,
      maxTicks: u,
      maxDigits: d,
      includeBounds: h,
    } = t,
    p = r || 1,
    m = u - 1,
    { min: y, max: _ } = e,
    g = !K(o),
    v = !K(a),
    x = !K(c),
    b = (_ - y) / (d + 1);
  let w = qh((_ - y) / m / p) * p,
    k,
    S,
    C,
    M;
  if (w < 1e-14 && !g && !v) return [{ value: y }, { value: _ }];
  (M = Math.ceil(_ / w) - Math.floor(y / w)),
    M > m && (w = qh((M * w) / m / p) * p),
    K(l) || ((k = Math.pow(10, l)), (w = Math.ceil(w * k) / k)),
    s === "ticks"
      ? ((S = Math.floor(y / w) * w), (C = Math.ceil(_ / w) * w))
      : ((S = y), (C = _)),
    g && v && r && ib((a - o) / r, w / 1e3)
      ? ((M = Math.round(Math.min((a - o) / w, u))),
        (w = (a - o) / M),
        (S = o),
        (C = a))
      : x
      ? ((S = g ? o : S), (C = v ? a : C), (M = c - 1), (w = (C - S) / M))
      : ((M = (C - S) / w),
        Is(M, Math.round(M), w / 1e3)
          ? (M = Math.round(M))
          : (M = Math.ceil(M)));
  const E = Math.max(Gh(w), Gh(S));
  (k = Math.pow(10, K(l) ? E : l)),
    (S = Math.round(S * k) / k),
    (C = Math.round(C * k) / k);
  let D = 0;
  for (
    g &&
    (h && S !== o
      ? (n.push({ value: o }),
        S < o && D++,
        Is(Math.round((S + D * w) * k) / k, o, qf(o, b, t)) && D++)
      : S < o && D++);
    D < M;
    ++D
  ) {
    const A = Math.round((S + D * w) * k) / k;
    if (v && A > a) break;
    n.push({ value: A });
  }
  return (
    v && h && C !== a
      ? n.length && Is(n[n.length - 1].value, a, qf(a, b, t))
        ? (n[n.length - 1].value = a)
        : n.push({ value: a })
      : (!v || C === a) && n.push({ value: C }),
    n
  );
}
function qf(t, e, { horizontal: n, minRotation: i }) {
  const s = xt(i),
    r = (n ? Math.sin(s) : Math.cos(s)) || 0.001,
    o = 0.75 * e * ("" + t).length;
  return Math.min(e / r, o);
}
class ya extends ui {
  constructor(e) {
    super(e),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(e, n) {
    return K(e) ||
      ((typeof e == "number" || e instanceof Number) && !isFinite(+e))
      ? null
      : +e;
  }
  handleTickRangeOptions() {
    const { beginAtZero: e } = this.options,
      { minDefined: n, maxDefined: i } = this.getUserBounds();
    let { min: s, max: r } = this;
    const o = (l) => (s = n ? s : l),
      a = (l) => (r = i ? r : l);
    if (e) {
      const l = Ot(s),
        c = Ot(r);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && o(0);
    }
    if (s === r) {
      let l = r === 0 ? 1 : Math.abs(r * 0.05);
      a(r + l), e || o(s - l);
    }
    (this.min = s), (this.max = r);
  }
  getTickLimit() {
    const e = this.options.ticks;
    let { maxTicksLimit: n, stepSize: i } = e,
      s;
    return (
      i
        ? ((s = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
          s > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`
            ),
            (s = 1e3)))
        : ((s = this.computeTickLimit()), (n = n || 11)),
      n && (s = Math.min(n, s)),
      s
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const e = this.options,
      n = e.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const s = {
        maxTicks: i,
        bounds: e.bounds,
        min: e.min,
        max: e.max,
        precision: n.precision,
        step: n.stepSize,
        count: n.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: n.minRotation || 0,
        includeBounds: n.includeBounds !== !1,
      },
      r = this._range || this,
      o = Ok(s, r);
    return (
      e.bounds === "ticks" && Xm(o, this, "value"),
      e.reverse
        ? (o.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      o
    );
  }
  configure() {
    const e = this.ticks;
    let n = this.min,
      i = this.max;
    if ((super.configure(), this.options.offset && e.length)) {
      const s = (i - n) / Math.max(e.length - 1, 1) / 2;
      (n -= s), (i += s);
    }
    (this._startValue = n), (this._endValue = i), (this._valueRange = i - n);
  }
  getLabelForValue(e) {
    return br(e, this.chart.options.locale, this.options.ticks.format);
  }
}
class xa extends ya {
  determineDataLimits() {
    const { min: e, max: n } = this.getMinMax(!0);
    (this.min = _e(e) ? e : 0),
      (this.max = _e(n) ? n : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const e = this.isHorizontal(),
      n = e ? this.width : this.height,
      i = xt(this.options.ticks.minRotation),
      s = (e ? Math.sin(i) : Math.cos(i)) || 0.001,
      r = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, r.lineHeight / s));
  }
  getPixelForValue(e) {
    return e === null
      ? NaN
      : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
  }
  getValueForPixel(e) {
    return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
  }
}
O(xa, "id", "linear"),
  O(xa, "defaults", { ticks: { callback: za.formatters.numeric } });
const hr = (t) => Math.floor(un(t)),
  In = (t, e) => Math.pow(10, hr(t) + e);
function Gf(t) {
  return t / Math.pow(10, hr(t)) === 1;
}
function Zf(t, e, n) {
  const i = Math.pow(10, n),
    s = Math.floor(t / i);
  return Math.ceil(e / i) - s;
}
function Dk(t, e) {
  const n = e - t;
  let i = hr(n);
  for (; Zf(t, e, i) > 10; ) i++;
  for (; Zf(t, e, i) < 10; ) i--;
  return Math.min(i, hr(t));
}
function Nk(t, { min: e, max: n }) {
  e = Qe(t.min, e);
  const i = [],
    s = hr(e);
  let r = Dk(e, n),
    o = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
  const a = Math.pow(10, r),
    l = s > r ? Math.pow(10, s) : 0,
    c = Math.round((e - l) * o) / o,
    u = Math.floor((e - l) / a / 10) * a * 10;
  let d = Math.floor((c - u) / Math.pow(10, r)),
    h = Qe(t.min, Math.round((l + u + d * Math.pow(10, r)) * o) / o);
  for (; h < n; )
    i.push({ value: h, major: Gf(h), significand: d }),
      d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
      d >= 20 && (r++, (d = 2), (o = r >= 0 ? 1 : o)),
      (h = Math.round((l + u + d * Math.pow(10, r)) * o) / o);
  const p = Qe(t.max, h);
  return i.push({ value: p, major: Gf(p), significand: d }), i;
}
class Jf extends ui {
  constructor(e) {
    super(e),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(e, n) {
    const i = ya.prototype.parse.apply(this, [e, n]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return _e(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: e, max: n } = this.getMinMax(!0);
    (this.min = _e(e) ? Math.max(0, e) : null),
      (this.max = _e(n) ? Math.max(0, n) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !_e(this._userMin) &&
        (this.min = e === In(this.min, 0) ? In(this.min, -1) : In(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: e, maxDefined: n } = this.getUserBounds();
    let i = this.min,
      s = this.max;
    const r = (a) => (i = e ? i : a),
      o = (a) => (s = n ? s : a);
    i === s && (i <= 0 ? (r(1), o(10)) : (r(In(i, -1)), o(In(s, 1)))),
      i <= 0 && r(In(s, -1)),
      s <= 0 && o(In(i, 1)),
      (this.min = i),
      (this.max = s);
  }
  buildTicks() {
    const e = this.options,
      n = { min: this._userMin, max: this._userMax },
      i = Nk(n, this);
    return (
      e.bounds === "ticks" && Xm(i, this, "value"),
      e.reverse
        ? (i.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      i
    );
  }
  getLabelForValue(e) {
    return e === void 0
      ? "0"
      : br(e, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const e = this.min;
    super.configure(),
      (this._startValue = un(e)),
      (this._valueRange = un(this.max) - un(e));
  }
  getPixelForValue(e) {
    return (
      (e === void 0 || e === 0) && (e = this.min),
      e === null || isNaN(e)
        ? NaN
        : this.getPixelForDecimal(
            e === this.min ? 0 : (un(e) - this._startValue) / this._valueRange
          )
    );
  }
  getValueForPixel(e) {
    const n = this.getDecimalForPixel(e);
    return Math.pow(10, this._startValue + n * this._valueRange);
  }
}
O(Jf, "id", "logarithmic"),
  O(Jf, "defaults", {
    ticks: { callback: za.formatters.logarithmic, major: { enabled: !0 } },
  });
function Ac(t) {
  const e = t.ticks;
  if (e.display && t.display) {
    const n = De(e.backdropPadding);
    return B(e.font && e.font.size, ue.font.size) + n.height;
  }
  return 0;
}
function Tk(t, e, n) {
  return (
    (n = ne(n) ? n : [n]), { w: wb(t, e.string, n), h: n.length * e.lineHeight }
  );
}
function ep(t, e, n, i, s) {
  return t === i || t === s
    ? { start: e - n / 2, end: e + n / 2 }
    : t < i || t > s
    ? { start: e - n, end: e }
    : { start: e, end: e + n };
}
function Ak(t) {
  const e = {
      l: t.left + t._padding.left,
      r: t.right - t._padding.right,
      t: t.top + t._padding.top,
      b: t.bottom - t._padding.bottom,
    },
    n = Object.assign({}, e),
    i = [],
    s = [],
    r = t._pointLabels.length,
    o = t.options.pointLabels,
    a = o.centerPointLabels ? se / r : 0;
  for (let l = 0; l < r; l++) {
    const c = o.setContext(t.getPointLabelContext(l));
    s[l] = c.padding;
    const u = t.getPointPosition(l, t.drawingArea + s[l], a),
      d = ve(c.font),
      h = Tk(t.ctx, d, t._pointLabels[l]);
    i[l] = h;
    const p = vt(t.getIndexAngle(l) + a),
      m = Math.round(td(p)),
      y = ep(m, u.x, h.w, 0, 180),
      _ = ep(m, u.y, h.h, 90, 270);
    Rk(n, e, p, y, _);
  }
  t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b),
    (t._pointLabelItems = Fk(t, i, s));
}
function Rk(t, e, n, i, s) {
  const r = Math.abs(Math.sin(n)),
    o = Math.abs(Math.cos(n));
  let a = 0,
    l = 0;
  i.start < e.l
    ? ((a = (e.l - i.start) / r), (t.l = Math.min(t.l, e.l - a)))
    : i.end > e.r && ((a = (i.end - e.r) / r), (t.r = Math.max(t.r, e.r + a))),
    s.start < e.t
      ? ((l = (e.t - s.start) / o), (t.t = Math.min(t.t, e.t - l)))
      : s.end > e.b &&
        ((l = (s.end - e.b) / o), (t.b = Math.max(t.b, e.b + l)));
}
function Ik(t, e, n) {
  const i = t.drawingArea,
    { extra: s, additionalAngle: r, padding: o, size: a } = n,
    l = t.getPointPosition(e, i + s + o, r),
    c = Math.round(td(vt(l.angle + ce))),
    u = Vk(l.y, a.h, c),
    d = Bk(c),
    h = Hk(l.x, a.w, d);
  return {
    visible: !0,
    x: l.x,
    y: u,
    textAlign: d,
    left: h,
    top: u,
    right: h + a.w,
    bottom: u + a.h,
  };
}
function zk(t, e) {
  if (!e) return !0;
  const { left: n, top: i, right: s, bottom: r } = t;
  return !(
    Vt({ x: n, y: i }, e) ||
    Vt({ x: n, y: r }, e) ||
    Vt({ x: s, y: i }, e) ||
    Vt({ x: s, y: r }, e)
  );
}
function Fk(t, e, n) {
  const i = [],
    s = t._pointLabels.length,
    r = t.options,
    { centerPointLabels: o, display: a } = r.pointLabels,
    l = { extra: Ac(r) / 2, additionalAngle: o ? se / s : 0 };
  let c;
  for (let u = 0; u < s; u++) {
    (l.padding = n[u]), (l.size = e[u]);
    const d = Ik(t, u, l);
    i.push(d), a === "auto" && ((d.visible = zk(d, c)), d.visible && (c = d));
  }
  return i;
}
function Bk(t) {
  return t === 0 || t === 180 ? "center" : t < 180 ? "left" : "right";
}
function Hk(t, e, n) {
  return n === "right" ? (t -= e) : n === "center" && (t -= e / 2), t;
}
function Vk(t, e, n) {
  return (
    n === 90 || n === 270 ? (t -= e / 2) : (n > 270 || n < 90) && (t -= e), t
  );
}
function Wk(t, e, n) {
  const { left: i, top: s, right: r, bottom: o } = n,
    { backdropColor: a } = e;
  if (!K(a)) {
    const l = Zn(e.borderRadius),
      c = De(e.backdropPadding);
    t.fillStyle = a;
    const u = i - c.left,
      d = s - c.top,
      h = r - i + c.width,
      p = o - s + c.height;
    Object.values(l).some((m) => m !== 0)
      ? (t.beginPath(), ur(t, { x: u, y: d, w: h, h: p, radius: l }), t.fill())
      : t.fillRect(u, d, h, p);
  }
}
function $k(t, e) {
  const {
    ctx: n,
    options: { pointLabels: i },
  } = t;
  for (let s = e - 1; s >= 0; s--) {
    const r = t._pointLabelItems[s];
    if (!r.visible) continue;
    const o = i.setContext(t.getPointLabelContext(s));
    Wk(n, o, r);
    const a = ve(o.font),
      { x: l, y: c, textAlign: u } = r;
    ai(n, t._pointLabels[s], l, c + a.lineHeight / 2, a, {
      color: o.color,
      textAlign: u,
      textBaseline: "middle",
    });
  }
}
function L0(t, e, n, i) {
  const { ctx: s } = t;
  if (n) s.arc(t.xCenter, t.yCenter, e, 0, ie);
  else {
    let r = t.getPointPosition(0, e);
    s.moveTo(r.x, r.y);
    for (let o = 1; o < i; o++)
      (r = t.getPointPosition(o, e)), s.lineTo(r.x, r.y);
  }
}
function Uk(t, e, n, i, s) {
  const r = t.ctx,
    o = e.circular,
    { color: a, lineWidth: l } = e;
  (!o && !i) ||
    !a ||
    !l ||
    n < 0 ||
    (r.save(),
    (r.strokeStyle = a),
    (r.lineWidth = l),
    r.setLineDash(s.dash),
    (r.lineDashOffset = s.dashOffset),
    r.beginPath(),
    L0(t, n, o, i),
    r.closePath(),
    r.stroke(),
    r.restore());
}
function Yk(t, e, n) {
  return On(t, { label: n, index: e, type: "pointLabel" });
}
class ks extends ya {
  constructor(e) {
    super(e),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const e = (this._padding = De(Ac(this.options) / 2)),
      n = (this.width = this.maxWidth - e.width),
      i = (this.height = this.maxHeight - e.height);
    (this.xCenter = Math.floor(this.left + n / 2 + e.left)),
      (this.yCenter = Math.floor(this.top + i / 2 + e.top)),
      (this.drawingArea = Math.floor(Math.min(n, i) / 2));
  }
  determineDataLimits() {
    const { min: e, max: n } = this.getMinMax(!1);
    (this.min = _e(e) && !isNaN(e) ? e : 0),
      (this.max = _e(n) && !isNaN(n) ? n : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Ac(this.options));
  }
  generateTickLabels(e) {
    ya.prototype.generateTickLabels.call(this, e),
      (this._pointLabels = this.getLabels()
        .map((n, i) => {
          const s = q(this.options.pointLabels.callback, [n, i], this);
          return s || s === 0 ? s : "";
        })
        .filter((n, i) => this.chart.getDataVisibility(i)));
  }
  fit() {
    const e = this.options;
    e.display && e.pointLabels.display
      ? Ak(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(e, n, i, s) {
    (this.xCenter += Math.floor((e - n) / 2)),
      (this.yCenter += Math.floor((i - s) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(e, n, i, s)
      ));
  }
  getIndexAngle(e) {
    const n = ie / (this._pointLabels.length || 1),
      i = this.options.startAngle || 0;
    return vt(e * n + xt(i));
  }
  getDistanceFromCenterForValue(e) {
    if (K(e)) return NaN;
    const n = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - e) * n : (e - this.min) * n;
  }
  getValueForDistanceFromCenter(e) {
    if (K(e)) return NaN;
    const n = e / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - n : this.min + n;
  }
  getPointLabelContext(e) {
    const n = this._pointLabels || [];
    if (e >= 0 && e < n.length) {
      const i = n[e];
      return Yk(this.getContext(), e, i);
    }
  }
  getPointPosition(e, n, i = 0) {
    const s = this.getIndexAngle(e) - ce + i;
    return {
      x: Math.cos(s) * n + this.xCenter,
      y: Math.sin(s) * n + this.yCenter,
      angle: s,
    };
  }
  getPointPositionForValue(e, n) {
    return this.getPointPosition(e, this.getDistanceFromCenterForValue(n));
  }
  getBasePosition(e) {
    return this.getPointPositionForValue(e || 0, this.getBaseValue());
  }
  getPointLabelPosition(e) {
    const { left: n, top: i, right: s, bottom: r } = this._pointLabelItems[e];
    return { left: n, top: i, right: s, bottom: r };
  }
  drawBackground() {
    const {
      backgroundColor: e,
      grid: { circular: n },
    } = this.options;
    if (e) {
      const i = this.ctx;
      i.save(),
        i.beginPath(),
        L0(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          n,
          this._pointLabels.length
        ),
        i.closePath(),
        (i.fillStyle = e),
        i.fill(),
        i.restore();
    }
  }
  drawGrid() {
    const e = this.ctx,
      n = this.options,
      { angleLines: i, grid: s, border: r } = n,
      o = this._pointLabels.length;
    let a, l, c;
    if (
      (n.pointLabels.display && $k(this, o),
      s.display &&
        this.ticks.forEach((u, d) => {
          if (d !== 0) {
            l = this.getDistanceFromCenterForValue(u.value);
            const h = this.getContext(d),
              p = s.setContext(h),
              m = r.setContext(h);
            Uk(this, p, l, o, m);
          }
        }),
      i.display)
    ) {
      for (e.save(), a = o - 1; a >= 0; a--) {
        const u = i.setContext(this.getPointLabelContext(a)),
          { color: d, lineWidth: h } = u;
        !h ||
          !d ||
          ((e.lineWidth = h),
          (e.strokeStyle = d),
          e.setLineDash(u.borderDash),
          (e.lineDashOffset = u.borderDashOffset),
          (l = this.getDistanceFromCenterForValue(
            n.ticks.reverse ? this.min : this.max
          )),
          (c = this.getPointPosition(a, l)),
          e.beginPath(),
          e.moveTo(this.xCenter, this.yCenter),
          e.lineTo(c.x, c.y),
          e.stroke());
      }
      e.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const e = this.ctx,
      n = this.options,
      i = n.ticks;
    if (!i.display) return;
    const s = this.getIndexAngle(0);
    let r, o;
    e.save(),
      e.translate(this.xCenter, this.yCenter),
      e.rotate(s),
      (e.textAlign = "center"),
      (e.textBaseline = "middle"),
      this.ticks.forEach((a, l) => {
        if (l === 0 && !n.reverse) return;
        const c = i.setContext(this.getContext(l)),
          u = ve(c.font);
        if (
          ((r = this.getDistanceFromCenterForValue(this.ticks[l].value)),
          c.showLabelBackdrop)
        ) {
          (e.font = u.string),
            (o = e.measureText(a.label).width),
            (e.fillStyle = c.backdropColor);
          const d = De(c.backdropPadding);
          e.fillRect(
            -o / 2 - d.left,
            -r - u.size / 2 - d.top,
            o + d.width,
            u.size + d.height
          );
        }
        ai(e, a.label, 0, -r, u, { color: c.color });
      }),
      e.restore();
  }
  drawTitle() {}
}
O(ks, "id", "radialLinear"),
  O(ks, "defaults", {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: za.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(e) {
        return e;
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  O(ks, "defaultRoutes", {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color",
  }),
  O(ks, "descriptors", { angleLines: { _fallback: "grid" } });
const Va = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Ve = Object.keys(Va);
function Xk(t, e) {
  return t - e;
}
function tp(t, e) {
  if (K(e)) return null;
  const n = t._adapter,
    { parser: i, round: s, isoWeekday: r } = t._parseOpts;
  let o = e;
  return (
    typeof i == "function" && (o = i(o)),
    _e(o) || (o = typeof i == "string" ? n.parse(o, i) : n.parse(o)),
    o === null
      ? null
      : (s &&
          (o =
            s === "week" && (lr(r) || r === !0)
              ? n.startOf(o, "isoWeek", r)
              : n.startOf(o, s)),
        +o)
  );
}
function np(t, e, n, i) {
  const s = Ve.length;
  for (let r = Ve.indexOf(t); r < s - 1; ++r) {
    const o = Va[Ve[r]],
      a = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((n - e) / (a * o.size)) <= i) return Ve[r];
  }
  return Ve[s - 1];
}
function Kk(t, e, n, i, s) {
  for (let r = Ve.length - 1; r >= Ve.indexOf(n); r--) {
    const o = Ve[r];
    if (Va[o].common && t._adapter.diff(s, i, o) >= e - 1) return o;
  }
  return Ve[n ? Ve.indexOf(n) : 0];
}
function Qk(t) {
  for (let e = Ve.indexOf(t) + 1, n = Ve.length; e < n; ++e)
    if (Va[Ve[e]].common) return Ve[e];
}
function ip(t, e, n) {
  if (!n) t[e] = !0;
  else if (n.length) {
    const { lo: i, hi: s } = nd(n, e),
      r = n[i] >= e ? n[i] : n[s];
    t[r] = !0;
  }
}
function qk(t, e, n, i) {
  const s = t._adapter,
    r = +s.startOf(e[0].value, i),
    o = e[e.length - 1].value;
  let a, l;
  for (a = r; a <= o; a = +s.add(a, 1, i))
    (l = n[a]), l >= 0 && (e[l].major = !0);
  return e;
}
function sp(t, e, n) {
  const i = [],
    s = {},
    r = e.length;
  let o, a;
  for (o = 0; o < r; ++o)
    (a = e[o]), (s[a] = o), i.push({ value: a, major: !1 });
  return r === 0 || !n ? i : qk(t, i, s, n);
}
class _a extends ui {
  constructor(e) {
    super(e),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(e, n = {}) {
    const i = e.time || (e.time = {}),
      s = (this._adapter = new Bw._date(e.adapters.date));
    s.init(n),
      Rs(i.displayFormats, s.formats()),
      (this._parseOpts = {
        parser: i.parser,
        round: i.round,
        isoWeekday: i.isoWeekday,
      }),
      super.init(e),
      (this._normalized = n.normalized);
  }
  parse(e, n) {
    return e === void 0 ? null : tp(this, e);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const e = this.options,
      n = this._adapter,
      i = e.time.unit || "day";
    let { min: s, max: r, minDefined: o, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !o && !isNaN(c.min) && (s = Math.min(s, c.min)),
        !a && !isNaN(c.max) && (r = Math.max(r, c.max));
    }
    (!o || !a) &&
      (l(this._getLabelBounds()),
      (e.bounds !== "ticks" || e.ticks.source !== "labels") &&
        l(this.getMinMax(!1))),
      (s = _e(s) && !isNaN(s) ? s : +n.startOf(Date.now(), i)),
      (r = _e(r) && !isNaN(r) ? r : +n.endOf(Date.now(), i) + 1),
      (this.min = Math.min(s, r - 1)),
      (this.max = Math.max(s + 1, r));
  }
  _getLabelBounds() {
    const e = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY;
    return e.length && ((n = e[0]), (i = e[e.length - 1])), { min: n, max: i };
  }
  buildTicks() {
    const e = this.options,
      n = e.time,
      i = e.ticks,
      s = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    e.bounds === "ticks" &&
      s.length &&
      ((this.min = this._userMin || s[0]),
      (this.max = this._userMax || s[s.length - 1]));
    const r = this.min,
      o = this.max,
      a = ab(s, r, o);
    return (
      (this._unit =
        n.unit ||
        (i.autoSkip
          ? np(n.minUnit, this.min, this.max, this._getLabelCapacity(r))
          : Kk(this, a.length, n.minUnit, this.min, this.max))),
      (this._majorUnit =
        !i.major.enabled || this._unit === "year" ? void 0 : Qk(this._unit)),
      this.initOffsets(s),
      e.reverse && a.reverse(),
      sp(this, a, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((e) => +e.value));
  }
  initOffsets(e = []) {
    let n = 0,
      i = 0,
      s,
      r;
    this.options.offset &&
      e.length &&
      ((s = this.getDecimalForValue(e[0])),
      e.length === 1
        ? (n = 1 - s)
        : (n = (this.getDecimalForValue(e[1]) - s) / 2),
      (r = this.getDecimalForValue(e[e.length - 1])),
      e.length === 1
        ? (i = r)
        : (i = (r - this.getDecimalForValue(e[e.length - 2])) / 2));
    const o = e.length < 3 ? 0.5 : 0.25;
    (n = Le(n, 0, o)),
      (i = Le(i, 0, o)),
      (this._offsets = { start: n, end: i, factor: 1 / (n + 1 + i) });
  }
  _generate() {
    const e = this._adapter,
      n = this.min,
      i = this.max,
      s = this.options,
      r = s.time,
      o = r.unit || np(r.minUnit, n, i, this._getLabelCapacity(n)),
      a = B(s.ticks.stepSize, 1),
      l = o === "week" ? r.isoWeekday : !1,
      c = lr(l) || l === !0,
      u = {};
    let d = n,
      h,
      p;
    if (
      (c && (d = +e.startOf(d, "isoWeek", l)),
      (d = +e.startOf(d, c ? "day" : o)),
      e.diff(i, n, o) > 1e5 * a)
    )
      throw new Error(
        n + " and " + i + " are too far apart with stepSize of " + a + " " + o
      );
    const m = s.ticks.source === "data" && this.getDataTimestamps();
    for (h = d, p = 0; h < i; h = +e.add(h, a, o), p++) ip(u, h, m);
    return (
      (h === i || s.bounds === "ticks" || p === 1) && ip(u, h, m),
      Object.keys(u)
        .sort((y, _) => y - _)
        .map((y) => +y)
    );
  }
  getLabelForValue(e) {
    const n = this._adapter,
      i = this.options.time;
    return i.tooltipFormat
      ? n.format(e, i.tooltipFormat)
      : n.format(e, i.displayFormats.datetime);
  }
  format(e, n) {
    const s = this.options.time.displayFormats,
      r = this._unit,
      o = n || s[r];
    return this._adapter.format(e, o);
  }
  _tickFormatFunction(e, n, i, s) {
    const r = this.options,
      o = r.ticks.callback;
    if (o) return q(o, [e, n, i], this);
    const a = r.time.displayFormats,
      l = this._unit,
      c = this._majorUnit,
      u = l && a[l],
      d = c && a[c],
      h = i[n],
      p = c && d && h && h.major;
    return this._adapter.format(e, s || (p ? d : u));
  }
  generateTickLabels(e) {
    let n, i, s;
    for (n = 0, i = e.length; n < i; ++n)
      (s = e[n]), (s.label = this._tickFormatFunction(s.value, n, e));
  }
  getDecimalForValue(e) {
    return e === null ? NaN : (e - this.min) / (this.max - this.min);
  }
  getPixelForValue(e) {
    const n = this._offsets,
      i = this.getDecimalForValue(e);
    return this.getPixelForDecimal((n.start + i) * n.factor);
  }
  getValueForPixel(e) {
    const n = this._offsets,
      i = this.getDecimalForPixel(e) / n.factor - n.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(e) {
    const n = this.options.ticks,
      i = this.ctx.measureText(e).width,
      s = xt(this.isHorizontal() ? n.maxRotation : n.minRotation),
      r = Math.cos(s),
      o = Math.sin(s),
      a = this._resolveTickFontOptions(0).size;
    return { w: i * r + a * o, h: i * o + a * r };
  }
  _getLabelCapacity(e) {
    const n = this.options.time,
      i = n.displayFormats,
      s = i[n.unit] || i.millisecond,
      r = this._tickFormatFunction(e, 0, sp(this, [e], this._majorUnit), s),
      o = this._getLabelSize(r),
      a =
        Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) -
        1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let e = this._cache.data || [],
      n,
      i;
    if (e.length) return e;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return (this._cache.data = s[0].controller.getAllParsedValues(this));
    for (n = 0, i = s.length; n < i; ++n)
      e = e.concat(s[n].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(e));
  }
  getLabelTimestamps() {
    const e = this._cache.labels || [];
    let n, i;
    if (e.length) return e;
    const s = this.getLabels();
    for (n = 0, i = s.length; n < i; ++n) e.push(tp(this, s[n]));
    return (this._cache.labels = this._normalized ? e : this.normalize(e));
  }
  normalize(e) {
    return qm(e.sort(Xk));
  }
}
O(_a, "id", "time"),
  O(_a, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  });
function ro(t, e, n) {
  let i = 0,
    s = t.length - 1,
    r,
    o,
    a,
    l;
  n
    ? (e >= t[i].pos && e <= t[s].pos && ({ lo: i, hi: s } = Kn(t, "pos", e)),
      ({ pos: r, time: a } = t[i]),
      ({ pos: o, time: l } = t[s]))
    : (e >= t[i].time &&
        e <= t[s].time &&
        ({ lo: i, hi: s } = Kn(t, "time", e)),
      ({ time: r, pos: a } = t[i]),
      ({ time: o, pos: l } = t[s]));
  const c = o - r;
  return c ? a + ((l - a) * (e - r)) / c : a;
}
class rp extends _a {
  constructor(e) {
    super(e),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const e = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(e));
    (this._minPos = ro(n, this.min)),
      (this._tableRange = ro(n, this.max) - this._minPos),
      super.initOffsets(e);
  }
  buildLookupTable(e) {
    const { min: n, max: i } = this,
      s = [],
      r = [];
    let o, a, l, c, u;
    for (o = 0, a = e.length; o < a; ++o)
      (c = e[o]), c >= n && c <= i && s.push(c);
    if (s.length < 2)
      return [
        { time: n, pos: 0 },
        { time: i, pos: 1 },
      ];
    for (o = 0, a = s.length; o < a; ++o)
      (u = s[o + 1]),
        (l = s[o - 1]),
        (c = s[o]),
        Math.round((u + l) / 2) !== c && r.push({ time: c, pos: o / (a - 1) });
    return r;
  }
  _getTimestampsForTable() {
    let e = this._cache.all || [];
    if (e.length) return e;
    const n = this.getDataTimestamps(),
      i = this.getLabelTimestamps();
    return (
      n.length && i.length
        ? (e = this.normalize(n.concat(i)))
        : (e = n.length ? n : i),
      (e = this._cache.all = e),
      e
    );
  }
  getDecimalForValue(e) {
    return (ro(this._table, e) - this._minPos) / this._tableRange;
  }
  getValueForPixel(e) {
    const n = this._offsets,
      i = this.getDecimalForPixel(e) / n.factor - n.end;
    return ro(this._table, i * this._tableRange + this._minPos, !0);
  }
}
O(rp, "id", "timeseries"), O(rp, "defaults", _a.defaults);
const O0 = "label";
function op(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
function Gk(t, e) {
  const n = t.options;
  n && e && Object.assign(n, e);
}
function D0(t, e) {
  t.labels = e;
}
function N0(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : O0;
  const i = [];
  t.datasets = e.map((s) => {
    const r = t.datasets.find((o) => o[n] === s[n]);
    return !r || !s.data || i.includes(r)
      ? { ...s }
      : (i.push(r), Object.assign(r, s), r);
  });
}
function Zk(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : O0;
  const n = { labels: [], datasets: [] };
  return D0(n, t.labels), N0(n, t.datasets, e), n;
}
function Jk(t, e) {
  const {
      height: n = 150,
      width: i = 300,
      redraw: s = !1,
      datasetIdKey: r,
      type: o,
      data: a,
      options: l,
      plugins: c = [],
      fallbackContent: u,
      updateMode: d,
      ...h
    } = t,
    p = L.useRef(null),
    m = L.useRef(),
    y = () => {
      p.current &&
        ((m.current = new di(p.current, {
          type: o,
          data: Zk(a, r),
          options: l && { ...l },
          plugins: c,
        })),
        op(e, m.current));
    },
    _ = () => {
      op(e, null), m.current && (m.current.destroy(), (m.current = null));
    };
  return (
    L.useEffect(() => {
      !s && m.current && l && Gk(m.current, l);
    }, [s, l]),
    L.useEffect(() => {
      !s && m.current && D0(m.current.config.data, a.labels);
    }, [s, a.labels]),
    L.useEffect(() => {
      !s && m.current && a.datasets && N0(m.current.config.data, a.datasets, r);
    }, [s, a.datasets]),
    L.useEffect(() => {
      m.current && (s ? (_(), setTimeout(y)) : m.current.update(d));
    }, [s, l, a.labels, a.datasets, d]),
    L.useEffect(() => {
      m.current && (_(), setTimeout(y));
    }, [o]),
    L.useEffect(() => (y(), () => _()), []),
    Bc.createElement(
      "canvas",
      Object.assign({ ref: p, role: "img", height: n, width: i }, h),
      u
    )
  );
}
const eS = L.forwardRef(Jk);
function Wa(t, e) {
  return (
    di.register(e),
    L.forwardRef((n, i) =>
      Bc.createElement(eS, Object.assign({}, n, { ref: i, type: t }))
    )
  );
}
const tS = Wa("line", ko),
  nS = Wa("bar", wo),
  iS = Wa("doughnut", xs),
  sS = Wa("polarArea", So);
di.register(va, xa, Mo, M0, Ha, Ba);
function rS() {
  let { Filters: t, HotelData: e } = L.useContext(Ce),
    [n, i] = t,
    [s, r] = e,
    o = bm(n.epoch),
    a = o.map(
      (d) => ((d = d.split("-")), `${d[1].slice(0, 3)} ${d[2]}${Jo(d[2])}`)
    ),
    l = {
      maintainAspectRatio: !1,
      plugins: {
        legend: { position: "top" },
        title: {
          display: !0,
          text: n.inventory
            ? "Opening vs Closing Stock"
            : `${
                n.depth.length < 2
                  ? ["Hotels", "Sections", "Supervisor", "Waitstuff"][
                      n.depth.length == 0 ? 0 : n.depth[0]
                    ]
                  : n.depth[1]
              } Variance`,
        },
      },
    },
    u = {
      labels: a,
      datasets: (() => {
        let d = [],
          h = [];
        for (let p = 0; p < o.length; p++) {
          let m = 0,
            y = 0;
          s.forEach((_) => {
            _[_.length - 1] == o[p] &&
              (n.depth.length != 2 || _[n.depth[0]] == n.depth[1]) &&
              ((m += _[5]), (y += _[4]));
          }),
            d.push(m),
            h.push(y);
        }
        return [
          {
            label: n.inventory ? "Closing stock" : "Actual",
            data: d,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: n.inventory ? "Opening Stock" : "Target",
            data: h,
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ];
      })(),
    };
  return f.jsx(nS, { options: l, data: u });
}
di.register(va, xa, jo, bs, M0, Ha, Ba);
let oS = ["#1d4ed8", "#5b21b6", "#3730a3", ""];
function aS() {
  let { Filters: t, HotelData: e } = L.useContext(Ce),
    [n, i] = t,
    [s, r] = e,
    o = {
      maintainAspectRatio: !1,
      scaleBeginAtZero: !1,
      plugins: {
        legend: { display: !0, position: "top" },
        title: { display: !0, text: n.inventory ? "Net sales" : "Total sales" },
      },
      scales: { y: { min: 0 } },
    },
    a = bm(n.epoch);
  const u = {
    labels: a.map(
      (d) => ((d = d.split("-")), `${d[1].slice(0, 3)} ${d[2]}${Jo(d[2])}`)
    ),
    datasets: (() => {
      let d = [],
        h = (m) => {
          let y = [];
          for (let _ = 0; _ < a.length; _++) {
            let g = 0;
            s.forEach((v) => {
              v[n.depth[0]] == m && v[v.length - 1] == a[_] && (g += v[5]);
            }),
              y.push(g);
          }
          return console.log("Totals :: ", y), y;
        },
        p =
          n.depth.length == 1
            ? [...new Set(s.map((m) => m[n.depth[0]]))]
            : [n.depth[1]];
      for (let m = 0; m < p.length; m++)
        d.push({
          label: p[m] == null ? "All Hotels" : p[m],
          data: h(p[m]),
          cubicInterpolationMode: "monotone",
          borderColor: oS[m],
        });
      return d;
    })(),
  };
  return f.jsx(tS, { options: o, data: u });
}
di.register(ks, Pi, Ha, Ba);
const lS = {
  maintainAspectRatio: !1,
  plugins: {
    legend: { position: "top", display: !0 },
    title: { display: !0, text: "% Performance" },
  },
};
function cS() {
  let { Filters: t, HotelData: e } = L.useContext(Ce),
    [n, i] = t,
    [s, r] = e,
    o = [...new Set(s.map((c) => c[n.depth.length == 0 ? 0 : n.depth[0]]))],
    l = {
      labels: o,
      datasets: [
        {
          data: (() => {
            let c = [];
            if (n.inventory)
              for (let u = 0; u < o.length; u++) {
                let d = 0,
                  h = 0;
                s.forEach((p) => {
                  p[n.depth.length == 0 ? 0 : n.depth[0]] == o[u] &&
                    ((d += p[1]), (h += p[3]));
                }),
                  c.push(((d / h) * 100).toFixed(2));
              }
            else
              for (let u = 0; u < o.length; u++) {
                let d = 0,
                  h = 0;
                s.forEach((p) => {
                  p[n.depth.length == 0 ? 0 : n.depth[0]] == o[u] &&
                    ((d += p[4]), (h += p[5]));
                }),
                  c.push(((h / (d == 0 ? 1 : d)) * 100).toFixed(2));
              }
            return c;
          })(),
          backgroundColor: [
            "#2563eb",
            "#4338ca",
            "#172554",
            "#172554",
            "#1d4ed8",
            "#1d4ed8",
          ],
          borderColor: [
            "#2563eb",
            "#4338ca",
            "#172554",
            "#172554",
            "#1d4ed8",
            "#1d4ed8",
          ],
        },
      ],
    };
  return f.jsx(sS, { data: l, options: lS });
}
di.register(Pi, Ha, Ba);
function uS() {
  let { Filters: t, HotelData: e } = L.useContext(Ce),
    [n, i] = t,
    [s, r] = e,
    o = {
      maintainAspectRatio: !1,
      plugins: {
        legend: { position: "bottom" },
        title: {
          display: !0,
          text: n.inventory
            ? "Weekly Average Net Sales"
            : "Weekly Average Sales",
        },
      },
    },
    a = [...new Set(s.map((u) => u[n.depth.length == 0 ? 0 : n.depth[0]]))],
    c = {
      labels: a,
      datasets: [
        {
          data: (() => {
            let u = [];
            for (let d = 0; d < a.length; d++) {
              let h = 0;
              s.forEach((p) => {
                p[n.depth.length == 0 ? 0 : n.depth[0]] == a[d] && (h += p[3]);
              }),
                u.push(h / 7);
            }
            return u;
          })(),
          backgroundColor: ["#2563eb", "#4338ca", "#172554", "#1d4ed8"],
          borderColor: ["#172554", "#2e1065", "#042f2e", "#1d4ed8"],
          borderWidth: 1,
        },
      ],
    };
  return f.jsx(iS, { data: c, options: o });
}
function T0() {
  let { HotelData: t, Filters: e } = L.useContext(Ce),
    [n, i] = t,
    [s, r] = e;
  console.log(n.length);
  let o = () => {
    let a = (d, h) => {
        let p = 0,
          m = 0;
        n.forEach((g) => {
          g[s.depth[0]] == d &&
            g[g.length - 1] == h &&
            ((p += g[4]), (m += g[5]));
        });
        let y = m - p,
          _ = ((m / (p == 0 ? 1 : p)) * 100).toFixed(2) + "%";
        return [p, m, y, _];
      },
      l = [...new Set(n.map((d) => d[d.length - 1]))],
      c =
        s.depth.length == 1
          ? [...new Set(n.map((d) => d[s.depth[0]]))]
          : [s.depth[1]],
      u = [];
    for (let d = 0; d < c.length; d++)
      for (let h = 0; h < l.length; h++) u.push([c[d], ...a(c[d], l[h]), l[h]]);
    return u;
  };
  return f.jsxs("table", {
    className: "w-full text-sm text-left text-gray-400 table-auto",
    children: [
      f.jsx("thead", {
        className: "text-xs text-gray-100 uppercase bg-blue-900 sticky top-0",
        children: s.inventory
          ? f.jsx("tr", {
              children: [
                "Hotel",
                "Purchases",
                "Gross sales",
                "Net sales",
                "Opening Stock",
                "Closing Stock",
                "Date",
              ].map((a) =>
                f.jsx("th", {
                  scope: "col",
                  className: "px-6 py-3",
                  children: a,
                })
              ),
            })
          : f.jsxs("tr", {
              children: [
                s.depth.length == 0
                  ? ["Hotel", "Section", "Supervisor", "waitstuff"].map((a) =>
                      f.jsx("th", {
                        scope: "col",
                        className: "px-6 py-3",
                        children: a,
                      })
                    )
                  : f.jsx("th", {
                      scope: "col",
                      className: "px-6 py-3",
                      children: ["Hotel", "Section", "Supervisor", "waitstuff"][
                        s.depth[0]
                      ],
                    }),
                ["Target", "Actual", "Variance", "% Performance", "Date"].map(
                  (a) =>
                    f.jsx("th", {
                      scope: "col",
                      className: "px-6 py-3",
                      children: a,
                    })
                ),
              ],
            }),
      }),
      f.jsxs("tbody", {
        children: [
          s.inventory
            ? [...n]
                .sort((a, l) =>
                  typeof a[s.sort] == "string"
                    ? s.descending
                      ? a[s.sort].localeCompare(l[s.sort])
                      : l[s.sort].localeCompare(a[s.sort])
                    : s.descending
                    ? a[s.sort] - l[s.sort]
                    : l[s.sort] - a[s.sort]
                )
                .map((a) =>
                  f.jsx("tr", {
                    className: "bg-gray-800 border-b border-gray-700",
                    children: a.map((l) =>
                      f.jsx("td", {
                        className: "px-6 py-4 whitespace-nowrap",
                        children: l,
                      })
                    ),
                  })
                )
            : s.depth.length == 0
            ? [...n]
                .sort((a, l) =>
                  typeof a[s.sort] == "string"
                    ? s.descending
                      ? a[s.sort].localeCompare(l[s.sort])
                      : l[s.sort].localeCompare(a[s.sort])
                    : s.descending
                    ? a[s.sort] - l[s.sort]
                    : l[s.sort] - a[s.sort]
                )
                .map(
                  (a) => (
                    a.length < 9 &&
                      a.splice(
                        6,
                        0,
                        a[5] - a[4],
                        ((a[5] / a[4]) * 100).toFixed(2) + "%"
                      ),
                    f.jsx("tr", {
                      className: "bg-gray-800 border-b border-gray-700",
                      children: a.map((l) =>
                        f.jsx("td", {
                          className: "px-6 py-4 whitespace-nowrap",
                          children: l,
                        })
                      ),
                    })
                  )
                )
            : o().map((a) =>
                f.jsx("tr", {
                  className: "bg-gray-800 border-b border-gray-700",
                  children: a.map((l) =>
                    f.jsx("td", {
                      className: "px-6 py-4 whitespace-nowrap",
                      children: l,
                    })
                  ),
                })
              ),
          10 - n.length > 0
            ? [...Array(20 - n.length)].map(
                (a, l) => (
                  console.log(l),
                  f.jsx("tr", {
                    className: "bg-gray-800 border-b border-gray-700",
                    children: [...Array(s.depth.length == 0 ? 9 : 6)].map(
                      (c, u) =>
                        f.jsx("td", {
                          className: "px-6 py-4 whitespace-nowrap",
                        })
                    ),
                  })
                )
              )
            : null,
        ],
      }),
    ],
  });
}
function dS() {
  return L.useContext(Ce), f.jsx(f.Fragment, { children: "0" });
}
let Be = (t, e) => {
  t.preventDefault(), document.getElementById(e).classList.toggle("hidden");
};
function hS() {
  let [t, e] = L.useState([
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
    ]),
    { Filters: n } = L.useContext(Ce),
    [i, s] = n,
    r = (o, a) => {
      o.preventDefault(),
        (t[1] += a),
        t[1] == -1 && ((t[0] -= 1), (t[1] = 11)),
        t[1] == 12 && ((t[0] += 1), (t[1] = 0)),
        e([t[0], t[1], t[2]]);
    };
  return f.jsxs(f.Fragment, {
    children: [
      f.jsxs("div", {
        className: "flex ml-2",
        children: [
          f.jsx("button", {
            onClick: (o) => r(o, -1),
            "aria-label": "calendar backward",
            className: "focus:text-gray-400 hover:text-gray-400  text-gray-100",
            children: f.jsxs("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "icon icon-tabler icon-tabler-chevron-left",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              fill: "none",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              children: [
                f.jsx("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none",
                }),
                f.jsx("polyline", { points: "15 6 9 12 15 18" }),
              ],
            }),
          }),
          f.jsx("div", {
            className: "text-center w-full",
            children: f.jsx("div", {
              children: f.jsx("span", { className: "text-sm", children: t[0] }),
            }),
          }),
          f.jsx("button", {
            onClick: (o) => r(o, 1),
            "aria-label": "calendar forward",
            className:
              "focus:text-gray-400 hover:text-gray-400 ml-3  text-gray-100",
            children: f.jsxs("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "icon icon-tabler  icon-tabler-chevron-right",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              fill: "none",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              children: [
                f.jsx("path", {
                  stroke: "none",
                  d: "M0 0h24v24H0z",
                  fill: "none",
                }),
                f.jsx("polyline", { points: "9 6 15 12 9 18" }),
              ],
            }),
          }),
          f.jsx("button", {
            onClick: (o) => {
              Be(o, "weeks");
            },
            className: "block font-semibold w-full pr-4 text-right",
            children: "X",
          }),
        ],
      }),
      _m(t[0], t[1]).map((o, a) =>
        f.jsx("button", {
          value: o.epoch,
          onClick: (l) => {
            Be(l, "weeks"), s({ ...i, epoch: l.target.value });
          },
          className:
            "block w-full text-left px-4 py-2 text-sm text-gray-50 hover:bg-gray-800",
          role: "menuitem",
          children: `${o.sunday} - ${o.saturday}`,
        })
      ),
    ],
  });
}
function A0() {
  let { HotelData: t, Filters: e } = L.useContext(Ce),
    [n, i] = t,
    [s, r] = e,
    [o, a] = L.useState("");
  return (
    console.log("filter :: ", s),
    f.jsx(f.Fragment, {
      children: f.jsxs("div", {
        className:
          "flex flex-col order-first lg:order-last  rounded bg-gray-800 text-gray-50 h-96 w-full md:w-2/3 lg:w-3/4 mx-auto relative px-2 overflow-y-scroll",
        children: [
          f.jsxs("div", {
            className: "flex my-4",
            children: [
              f.jsx("img", {
                className: "w-4 mx-2",
                src: "/filter.svg",
                alt: "",
              }),
              f.jsx("h3", {
                className: "text-xl font-semibold",
                children: "Filter",
              }),
              f.jsx("button", {
                className: "mx-2 absolute right-1",
                onClick: (l) => {
                  Be(l, "options");
                },
                children: f.jsx("img", {
                  className: "w-8",
                  src: "/options.svg",
                  alt: "",
                }),
              }),
              f.jsx("div", {
                id: "options",
                className:
                  "hidden font-semibold origin-top-left absolute right-4 top-6 mt-2 w-48 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5",
                children: f.jsxs("div", {
                  className: "py-1",
                  role: "menu",
                  "aria-orientation": "vertical",
                  "aria-labelledby": "options-menu",
                  children: [
                    f.jsx("button", {
                      onClick: (l) => {
                        Be(l, "options");
                      },
                      className: "block w-full pr-4 text-right",
                      children: "X",
                    }),
                    f.jsxs("button", {
                      onClick: (l) =>
                        r({
                          start: 0,
                          end: 0,
                          depth: [],
                          epoch: "20230601",
                          descending: !0,
                          sort: 0,
                          inventory: !1,
                        }),
                      className:
                        "block w-full text-left px-4 py-2 text-sm text-gray-50 hover:bg-gray-800",
                      role: "menuitem",
                      children: [
                        f.jsx("img", {
                          className: "inline w-4 mr-2",
                          src: "/clear-filter.svg",
                          alt: "",
                        }),
                        "Clear filters",
                      ],
                    }),
                    f.jsxs("button", {
                      onClick: (l) => r({ ...s, inventory: !s.inventory }),
                      className:
                        "block w-full text-left px-4 py-2 text-sm text-gray-50 hover:bg-gray-800",
                      role: "menuitem",
                      children: [
                        f.jsx("img", {
                          className: "inline w-4 mr-2",
                          src: "/inventory.svg",
                          alt: "",
                        }),
                        s.inventory ? "Sales" : "Inventory",
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "flex justify-around",
            children: [
              f.jsxs("button", {
                onClick: (l) => {
                  Be(l, "sort");
                },
                className:
                  "w-full font-semibold py-4 hover:scale-105 hover:bg-gray-800",
                children: [
                  f.jsx("img", {
                    className: "inline w-6 mx-2",
                    src: "/sort.svg",
                    alt: "",
                  }),
                  "Sort",
                ],
              }),
              f.jsx("div", {
                id: "sort",
                className:
                  "z-10 hidden origin-top-right absolute right-4 mt-2 w-48 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5",
                children: f.jsxs("div", {
                  className: "py-1 overflow-y-scroll max-h-40",
                  role: "menu",
                  "aria-orientation": "vertical",
                  "aria-labelledby": "options-menu",
                  children: [
                    f.jsxs("div", {
                      className: "flex my-2",
                      children: [
                        f.jsxs("button", {
                          onClick: (l) =>
                            r({ ...s, descending: !s.descending }),
                          className: "flex",
                          children: [
                            f.jsx("img", {
                              className: "inline w-8 ml-2",
                              src: "/sort.svg",
                              alt: "",
                            }),
                            f.jsx("div", {
                              className: " text-xs",
                              children: s.descending
                                ? `A
Z`
                                : `Z
A`,
                            }),
                          ],
                        }),
                        f.jsx("button", {
                          onClick: (l) => {
                            Be(l, "sort");
                          },
                          className: "block w-full pr-4 text-right",
                          children: "X",
                        }),
                      ],
                    }),
                    f.jsx("button", {
                      onClick: (l) => {
                        Be(l, "sort"), r({ ...s, sort: 0 });
                      },
                      className:
                        "block w-full text-left px-4 py-2 text-sm text-gray-50 hover:bg-gray-800",
                      role: "menuitem",
                      children: "Hotels",
                    }),
                    f.jsx("button", {
                      onClick: (l) => {
                        Be(l, "sort"), r({ ...s, sort: 1 });
                      },
                      className:
                        "block w-full text-left px-4 py-2 text-sm text-gray-50 hover:bg-gray-800",
                      role: "menuitem",
                      children: "Sections",
                    }),
                    f.jsx("button", {
                      onClick: (l) => {
                        Be(l, "sort"), r({ ...s, sort: 2 });
                      },
                      className:
                        "block w-full text-left px-4 py-2 text-sm text-gray-50 hover:bg-gray-800",
                      role: "menuitem",
                      children: "Supervisors",
                    }),
                    f.jsx("button", {
                      onClick: (l) => {
                        Be(l, "sort"), r({ ...s, sort: 3 });
                      },
                      className:
                        "block w-full text-left px-4 py-2 text-sm text-gray-50 hover:bg-gray-800",
                      role: "menuitem",
                      children: "Waitstuff",
                    }),
                    f.jsx("button", {
                      onClick: (l) => {
                        Be(l, "sort"), r({ ...s, sort: 4 });
                      },
                      className:
                        "block w-full text-left px-4 py-2 text-sm text-gray-50 hover:bg-gray-800",
                      role: "menuitem",
                      children: "Targets",
                    }),
                    f.jsx("button", {
                      onClick: (l) => {
                        Be(l, "sort"), r({ ...s, sort: 5 });
                      },
                      className:
                        "block w-full text-left px-4 py-2 text-sm text-gray-50 hover:bg-gray-800",
                      role: "menuitem",
                      children: "Sales",
                    }),
                    f.jsx("button", {
                      onClick: (l) => {
                        Be(l, "sort"), r({ ...s, sort: 6 });
                      },
                      className:
                        "block w-full text-left px-4 py-2 text-sm text-gray-50 hover:bg-gray-800",
                      role: "menuitem",
                      children: "Date",
                    }),
                  ],
                }),
              }),
              f.jsxs("button", {
                onClick: (l) => {
                  Be(l, "weeks");
                },
                className: "w-full py-4 hover:scale-105 hover:bg-gray-800",
                children: [
                  f.jsx("img", {
                    className: "inline w-6 mx-2",
                    src: "/date.svg",
                    alt: "",
                  }),
                  "Date",
                ],
              }),
              f.jsx("div", {
                id: "weeks",
                className:
                  "hidden origin-top-left absolute left-4 mt-2 w-48 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5",
                children: f.jsx("div", {
                  className: "py-1",
                  role: "menu",
                  "aria-orientation": "vertical",
                  "aria-labelledby": "options-menu",
                  children: f.jsx(hS, {}),
                }),
              }),
            ],
          }),
          f.jsx("input", {
            className: "bg-slate-600 w-3/4 mx-auto rounded-full px-4 py-2 my-2",
            type: "search",
            placeholder: "search",
            value: o,
            onChange: (l) => a(l.target.value),
          }),
          f.jsx("div", {
            className: "flex justify-between",
            children:
              s.depth.length > 0
                ? f.jsx("button", {
                    className: "ml-4 w-6",
                    onClick: (l) => {
                      r({ ...s, depth: s.depth.slice(0, -1) }), a("");
                    },
                    children: f.jsx("img", {
                      className: "w-full",
                      src: "/back.svg",
                    }),
                  })
                : null,
          }),
          f.jsxs("div", {
            className: "divide-y font-semibold px-4",
            children: [
              s.depth.length == 0
                ? ["Hotel", "Section", "Supervisor", "waitstuff"].map(
                    (l, c) => {
                      if (l.toLowerCase().includes(o.toLowerCase()))
                        return f.jsxs("button", {
                          className:
                            "block w-full text-left text-lg py-4 hover:bg-gray-900",
                          value: c,
                          onClick: (u) =>
                            r({
                              ...s,
                              depth: [...s.depth, parseInt(u.target.value)],
                            }),
                          children: [
                            l,
                            " ",
                            f.jsx("img", {
                              className: "w-6 inline float-right",
                              src: "/right.svg",
                              alt: "",
                            }),
                          ],
                        });
                    }
                  )
                : s.depth.length == 1
                ? [...new Set(n.map((l) => l[s.depth[0]]))].map((l, c) => {
                    if (l.toLowerCase().includes(o.toLowerCase()))
                      return f.jsxs("button", {
                        className:
                          "block w-full text-left text-lg py-4 hover:bg-gray-900",
                        value: l,
                        onClick: (u) =>
                          r({ ...s, depth: [s.depth[0], u.target.value] }),
                        children: [
                          l,
                          " ",
                          f.jsx("img", {
                            className: "w-6 inline float-right",
                            src: "/right.svg",
                            alt: "",
                          }),
                        ],
                      });
                  })
                : f.jsx("p", {
                    className:
                      "block w-full text-left text-lg py-4 hover:bg-gray-900",
                    children: s.depth[1],
                  }),
              f.jsx("p", {}),
            ],
          }),
        ],
      }),
    })
  );
}
function fS() {
  let [t, e] = L.useState("line");
  return (
    L.useEffect(() => {}, []),
    f.jsxs("div", {
      class: "p-4 rounded-lg border-gray-700 mt-14 lg:mt-16 lg:overflow-y-none",
      children: [
        f.jsxs("div", {
          className: "grid lg:grid-cols-3 grid-cols-1 gap-4",
          children: [
            f.jsxs("div", {
              className:
                "lg:col-span-2 flex items-center justify-center mb-4 rounded bg-gray-800 h-96",
              children: [
                t === "bar" ? f.jsx(rS, {}) : null,
                t === "line" ? f.jsx(aS, {}) : null,
                t === "pie" ? f.jsx(cS, {}) : null,
                t === "donut" ? f.jsx(uS, {}) : null,
                t === "stats" ? f.jsx(dS, {}) : null,
              ],
            }),
            f.jsx("div", {
              className: "grid grid-cols-2 lg:order-first gap-4 mb-4",
              children: [
                f.jsxs("button", {
                  onClick: (n) => e("line"),
                  className:
                    "flex flex-col rounded bg-gray-800 hover:scale-105 hover:bg-gray-900",
                  children: [
                    f.jsx("p", {
                      className:
                        "text-gray-100 text-left font-semibold py-4 lg:py-8 lg:text-xl text-sm pl-4",
                      children: "Total sales",
                    }),
                    f.jsx("img", {
                      className:
                        "block w-7 md:w-8 lg:w-10 mx-auto pb-4 lg:pb-0",
                      src: "/linechart.svg",
                      alt: "",
                    }),
                  ],
                }),
                f.jsxs("button", {
                  onClick: (n) => e("stats"),
                  className:
                    "flex flex-col rounded bg-gray-800 hover:scale-105 hover:bg-gray-900",
                  children: [
                    f.jsx("p", {
                      className:
                        "text-gray-100 text-left font-semibold py-4 lg:py-8 lg:text-xl text-sm pl-4",
                      children: "Stats",
                    }),
                    f.jsx("p", {
                      className:
                        "text-2xl block w-7 md:w-8 lg:w-10 mx-auto pb-4 lg:pb-0",
                      children: "O",
                    }),
                  ],
                }),
                f.jsxs("button", {
                  onClick: (n) => e("bar"),
                  className:
                    "flex flex-col rounded bg-gray-800 hover:scale-105 hover:bg-gray-900",
                  children: [
                    f.jsx("p", {
                      className:
                        "text-gray-100 text-left font-semibold py-4 lg:py-8 lg:text-xl text-sm pl-4",
                      children: "Variance",
                    }),
                    f.jsx("img", {
                      className:
                        "block w-7 md:w-8 lg:w-10 mx-auto pb-4 lg:pb-0",
                      src: "/barchart.svg",
                      alt: "",
                    }),
                  ],
                }),
                f.jsxs("button", {
                  onClick: (n) => e("pie"),
                  className:
                    "flex flex-col rounded bg-gray-800 hover:scale-105 hover:bg-gray-900",
                  children: [
                    f.jsx("p", {
                      className:
                        "text-gray-100 text-left font-semibold py-4 lg:py-8 lg:text-xl text-sm pl-4",
                      children: "% Performance",
                    }),
                    f.jsx("img", {
                      className:
                        "block w-7 md:w-8 lg:w-10 mx-auto pb-4 lg:pb-0",
                      src: "/piechart.svg",
                      alt: "",
                    }),
                  ],
                }),
                f.jsxs("button", {
                  onClick: (n) => e("donut"),
                  className:
                    "flex flex-col rounded bg-gray-800 hover:scale-105 hover:bg-gray-900",
                  children: [
                    f.jsx("p", {
                      className:
                        "text-gray-100 text-left font-semibold py-4 lg:py-8 lg:text-xl text-sm pl-4",
                      children: "Avg. Sales",
                    }),
                    f.jsx("img", {
                      className:
                        "block w-7 md:w-8 lg:w-10 mx-auto pb-4 lg:pb-0",
                      src: "/donutchart.svg",
                      alt: "",
                    }),
                  ],
                }),
              ].map((n, i) => {
                if (i != ["line", "stats", "bar", "pie", "donut"].indexOf(t))
                  return n;
              }),
            }),
          ],
        }),
        f.jsxs("div", {
          className: "grid lg:grid-cols-3 grid-cols-1 gap-4 lg:mt-6",
          children: [
            f.jsx("div", {
              className:
                "lg:col-span-2 flex rounded bg-gray-800 overflow-x-scroll overflow-y-scroll max-h-96",
              children: f.jsx(T0, {}),
            }),
            f.jsx(A0, {}),
          ],
        }),
      ],
    })
  );
}
function pS() {
  return f.jsxs("div", {
    class: "p-4 rounded-lg border-gray-700 mt-14",
    children: [
      f.jsx("h3", {
        className: "text-3xl text-gray-200 font-bold my-6",
        children: "Settings",
      }),
      f.jsx("div", {
        class: "flex items-center justify-center h-24 mb-4 rounded bg-gray-800",
        children: f.jsx("p", {
          class: "text-2xl text-gray-500",
          children: "+",
        }),
      }),
      f.jsx("div", {
        class: "flex items-center justify-center h-24 mb-4 rounded bg-gray-800",
        children: f.jsx("p", {
          class: "text-2xl text-gray-500",
          children: "+",
        }),
      }),
      f.jsx("div", {
        class: "flex items-center justify-center h-24 mb-4 rounded bg-gray-800",
        children: f.jsx("p", {
          class: "text-2xl text-gray-500",
          children: "+",
        }),
      }),
      f.jsx("div", {
        class: "flex items-center justify-center h-24 mb-4 rounded bg-gray-800",
        children: f.jsx("p", {
          class: "text-2xl text-gray-500",
          children: "+",
        }),
      }),
      f.jsx("div", {
        class: "flex items-center justify-center h-24 mb-4 rounded bg-gray-800",
        children: f.jsx("p", {
          class: "text-2xl text-gray-500",
          children: "+",
        }),
      }),
    ],
  });
}
function gi({ variable: t, level: e }) {
  let { HotelData: n } = L.useContext(Ce),
    [i, s] = n,
    [r, o] = t,
    [a, l] = L.useState("");
  return f.jsx(f.Fragment, {
    children: f.jsxs("div", {
      className: "bg-gray-800 py-4 px-6 pb-8",
      children: [
        f.jsx("p", {
          className: "text-2xl text-right font-semibold",
          children: e,
        }),
        e.includes("amount")
          ? f.jsx("div", { className: "py-4" })
          : f.jsxs("button", {
              id: "dropdownSearchButton",
              "data-dropdown-toggle": e,
              "data-dropdown-placement": "bottom",
              className:
                "my-4 text-white text-lg focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center bg-gray-800 hover:bg-gray-700 focus:ring-gray-800 w-full",
              type: "button",
              children: [
                "Select ",
                e,
                f.jsx("svg", {
                  className: "w-2.5 h-2.5 ml-2.5",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 10 6",
                  children: f.jsx("path", {
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "m1 1 4 4 4-4",
                  }),
                }),
              ],
            }),
        f.jsxs("div", {
          id: e,
          className: "z-10 hidden rounded-lg shadow w-60 bg-gray-900",
          children: [
            f.jsxs("div", {
              className: "p-3",
              children: [
                f.jsx("label", {
                  for: "input-group-search",
                  className: "sr-only",
                  children: "Search",
                }),
                f.jsxs("div", {
                  className: "relative",
                  children: [
                    f.jsx("div", {
                      className:
                        "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                      children: f.jsx("svg", {
                        className: "w-4 h-4 text-gray-400",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 20 20",
                        children: f.jsx("path", {
                          stroke: "currentColor",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z",
                        }),
                      }),
                    }),
                    f.jsx("input", {
                      type: "search",
                      id: "input-group-search",
                      className:
                        "block w-full p-2 pl-10 text-sm border rounded-lg bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-gray-500 focus:border-gray-500",
                      placeholder: `Search ${e}`,
                      value: a,
                      onChange: (c) => l(c.target.value),
                    }),
                  ],
                }),
              ],
            }),
            f.jsx("ul", {
              className: "px-3 pb-3 overflow-y-auto text-sm text-gray-200",
              "aria-labelledby": "dropdownSearchButton",
              children: e.includes("amount")
                ? null
                : [
                    ...new Set(
                      i.map(
                        (c) =>
                          c[
                            [
                              "Hotel",
                              "Section",
                              "Supervisor",
                              "Waitstuff",
                            ].indexOf(e)
                          ]
                      )
                    ),
                  ].map((c, u) => {
                    if (c.toLowerCase().includes(a.toLowerCase()))
                      return f.jsx("li", {
                        children: f.jsx("button", {
                          className:
                            "w-full text-left py-2 ml-2 text-sm font-medium rounded text-gray-300 hover:bg-gray-600",
                          value: c,
                          onClick: (d) => o(d.target.value),
                          children: c,
                        }),
                      });
                  }),
            }),
          ],
        }),
        f.jsx("input", {
          className: "w-full py-2 px-1 rounded-md bg-gray-300 text-black",
          type: e.includes("amount") ? "number" : "text",
          name: "",
          id: "",
          placeholder: e,
          value: r,
          onChange: (c) => o(c.target.value),
        }),
      ],
    }),
  });
}
function gS() {
  let { HotelData: t } = L.useContext(Ce),
    [e, n] = t,
    i = L.useState(""),
    s = L.useState(""),
    r = L.useState(""),
    o = L.useState(""),
    a = L.useState(""),
    l = L.useState(""),
    c = L.useState([
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
    ]),
    u = (d) => {
      d.preventDefault(),
        fetch(`${Ae}/sales`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            hotel: i[0],
            section: s[0],
            supervisor: r[0],
            waitstuff: o[0],
            target: a[0],
            actual: l[0],
            datestamp: `${c[0][0]}-${new Date(
              c[0][0],
              c[0][1],
              1
            ).toLocaleString("default", { month: "long" })}-${c[0][2]}`,
          }),
        })
          .then((h) => h.json())
          .then((h) => {
            console.log(h),
              h.status == "success" &&
                (n([
                  ...e,
                  [
                    i[0],
                    s[0],
                    r[0],
                    o[0],
                    a[0],
                    l[0],
                    `${c[0][0]}-${new Date(c[0][0], c[0][1], 1).toLocaleString(
                      "default",
                      { month: "long" }
                    )}-${c[0][2]}`,
                  ],
                ]),
                i[1](""),
                s[1](""),
                r[1](""),
                o[1](""),
                a[1](""),
                l[1](""),
                alert("Data submitted successfully"));
          })
          .catch((h) => {
            console.log(h), alert("server error");
          });
    };
  return f.jsxs("div", {
    className: "w-full flex flex-col lg:flex-row justify-evenly",
    children: [
      f.jsxs("div", {
        className: "grid md:grid-cols-2 grid-cols-1 gap-8 w-full lg:ml-8",
        children: [
          f.jsx(gi, { variable: i, level: "Hotel" }),
          f.jsx(gi, { variable: s, level: "Section" }),
          f.jsx(gi, { variable: r, level: "Supervisor" }),
          f.jsx(gi, { variable: o, level: "Waitstuff" }),
          f.jsx(gi, { variable: a, level: "Target amount" }),
          f.jsx(gi, { variable: l, level: "Actual amount" }),
          f.jsx("button", {
            className:
              "md:col-span-2 flex lg:w-1/2 w-full mx-auto justify-center rounded-md bg-blue-800 px-3 py-2 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            onClick: (d) => u(d),
            children: "Submit",
          }),
        ],
      }),
      f.jsx("div", {
        className: "w-full lg:mx-4",
        children: f.jsx(wm, { date: c }),
      }),
    ],
  });
}
function mS() {
  let [t, e] = L.useState([]),
    n = [
      "",
      "Sales executive",
      "accountant",
      "clerk",
      "supervisor",
      "manager",
      "Admin",
    ];
  L.useEffect(() => {
    fetch(`${Ae}/lobby`)
      .then((s) => s.json())
      .then((s) => {
        s.status === "success"
          ? e(s.response)
          : s.status === "error" && alert(s.response);
      })
      .catch((s) => alert("server error"));
  }, []);
  let i = (s, r, o) => {
    s.preventDefault(),
      fetch(`${Ae}/admit?id=${r}&choice=${o}`)
        .then((a) => a.json())
        .then((a) => {
          if ((console.log(a), a.status === "success")) {
            alert(
              `User ${a.response.user} ${
                o == "yes" ? "admitted" : "denied"
              } for ${n[a.response.role]} role`
            );
            let l = t.filter((c) => c[0] != r);
            e(l);
          } else a.status === "error" && alert(a.response);
        })
        .catch((a) => alert("server error"));
  };
  return f.jsx("div", {
    className:
      "flex justify-center rounded overflow-x-scroll overflow-y-scroll",
    children:
      t.length > 0
        ? f.jsxs("table", {
            className:
              "lg:w-1/2 bg-gray-800 mx-auto text-sm text-left text-gray-400 table-auto",
            children: [
              f.jsx("thead", {
                className:
                  "text-xs border-b border-gray-700 text-gray-100 uppercase py-4 sticky top-0 bg-blue-900",
                children: f.jsxs("tr", {
                  children: [
                    f.jsx("th", { className: "px-6 py-3", children: "Role" }),
                    f.jsx("th", { className: "px-6 py-3", children: "Name" }),
                    f.jsx("th", {}),
                    f.jsx("th", {}),
                  ],
                }),
              }),
              f.jsxs("tbody", {
                className: "py-8",
                children: [
                  t.map((s, r) =>
                    f.jsxs("tr", {
                      className: "bg-gray-800 border-b border-gray-700 py-40",
                      children: [
                        f.jsx("td", {
                          className: "px-6 py-4 whitespace-nowrap",
                          children: n[s[1]],
                        }),
                        f.jsx("td", {
                          className: "px-6 py-4 whitespace-nowrap",
                          children: s[2],
                        }),
                        f.jsx("td", {
                          className: "px-6 py-4 whitespace-nowrap",
                          children: f.jsxs("button", {
                            onClick: (o) => i(o, s[0], "yes"),
                            className:
                              "w-full h-full hover:uppercase hover:text-green-600",
                            children: [
                              " ",
                              f.jsx("img", {
                                className: "inline mx-2 w-4",
                                src: "/tick.svg",
                                alt: "",
                              }),
                              "Admit",
                            ],
                          }),
                        }),
                        f.jsx("td", {
                          className: "px-6 py-4 whitespace-nowrap",
                          children: f.jsxs("button", {
                            onClick: (o) => i(o, s[0], "no"),
                            className:
                              "w-full h-full hover:uppercase hover:text-red-600",
                            children: [
                              " ",
                              f.jsx("img", {
                                className: "inline mx-2 w-4",
                                src: "/x.svg",
                                alt: "",
                              }),
                              "Reject",
                            ],
                          }),
                        }),
                      ],
                    })
                  ),
                  10 - t.length > 0
                    ? [...Array(10 - t.length)].map((s, r) =>
                        f.jsx("tr", {
                          className: "bg-gray-800 border-b border-gray-700",
                          children: f.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                          }),
                        })
                      )
                    : null,
                ],
              }),
            ],
          })
        : f.jsx(f.Fragment, {
            children: f.jsxs("div", {
              className: "flex flex-col",
              children: [
                f.jsx("img", {
                  className: "w-96 mx-auto",
                  src: "/robot-happy.svg",
                  alt: "",
                }),
                f.jsx("p", {
                  className: "text-2xl mt-16 text-center font-semibold",
                  children: "No users in lobby",
                }),
              ],
            }),
          }),
  });
}
function fs({ variable: t, level: e }) {
  let { HotelData: n } = L.useContext(Ce),
    [i, s] = n,
    [r, o] = t,
    [a, l] = L.useState("");
  return f.jsx(f.Fragment, {
    children: f.jsxs("div", {
      className: "bg-gray-800 py-4 px-6 pb-8",
      children: [
        f.jsx("p", {
          className: "text-2xl text-right font-semibold",
          children: e,
        }),
        e == "Hotel"
          ? f.jsxs("button", {
              id: "dropdownSearchButton",
              "data-dropdown-toggle": e,
              "data-dropdown-placement": "bottom",
              className:
                "my-4 text-white text-lg focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center bg-gray-800 hover:bg-gray-700 focus:ring-gray-800 w-full",
              type: "button",
              children: [
                "Select ",
                e,
                f.jsx("svg", {
                  className: "w-2.5 h-2.5 ml-2.5",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 10 6",
                  children: f.jsx("path", {
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "m1 1 4 4 4-4",
                  }),
                }),
              ],
            })
          : f.jsx("div", { className: "py-4" }),
        f.jsxs("div", {
          id: e,
          className: "z-10 hidden rounded-lg shadow w-60 bg-gray-900",
          children: [
            f.jsxs("div", {
              className: "p-3",
              children: [
                f.jsx("label", {
                  for: "input-group-search",
                  className: "sr-only",
                  children: "Search",
                }),
                f.jsxs("div", {
                  className: "relative",
                  children: [
                    f.jsx("div", {
                      className:
                        "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                      children: f.jsx("svg", {
                        className: "w-4 h-4 text-gray-400",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 20 20",
                        children: f.jsx("path", {
                          stroke: "currentColor",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z",
                        }),
                      }),
                    }),
                    f.jsx("input", {
                      type: "search",
                      id: "input-group-search",
                      className:
                        "block w-full p-2 pl-10 text-sm border rounded-lg bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-gray-500 focus:border-gray-500",
                      placeholder: `Search ${e}`,
                      value: a,
                      onChange: (c) => l(c.target.value),
                    }),
                  ],
                }),
              ],
            }),
            f.jsx("ul", {
              className: "px-3 pb-3 overflow-y-auto text-sm text-gray-200",
              "aria-labelledby": "dropdownSearchButton",
              children:
                e == "Hotel"
                  ? [...new Set(i.map((c) => c[0]))].map((c, u) => {
                      if (c.toLowerCase().includes(a.toLowerCase()))
                        return f.jsx("li", {
                          children: f.jsx("button", {
                            className:
                              "w-full text-left py-2 ml-2 text-sm font-medium rounded text-gray-300 hover:bg-gray-600",
                            value: c,
                            onClick: (d) => o(d.target.value),
                            children: c,
                          }),
                        });
                    })
                  : null,
            }),
          ],
        }),
        f.jsx("input", {
          className: "w-full py-2 px-1 rounded-md bg-gray-300 text-black",
          type: e.includes("Hotel") ? "text" : "number",
          name: "",
          id: "",
          placeholder: e,
          value: r,
          onChange: (c) => o(c.target.value),
        }),
      ],
    }),
  });
}
function vS() {
  let t = L.useState(""),
    e = L.useState(""),
    n = L.useState(""),
    i = L.useState(""),
    s = L.useState(""),
    r = L.useState([
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
    ]),
    o = (a) => {
      a.preventDefault(),
        fetch(`${Ae}/setinventory`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            hotel: t[0],
            purchases: e[0],
            grossales: n[0],
            netsales: n[0] / 1.18,
            opening: i[0],
            closing: s[0],
            datestamp: `${r[0][0]}-${new Date(
              r[0][0],
              r[0][1],
              1
            ).toLocaleString("default", { month: "long" })}-${r[0][2]}`,
          }),
        })
          .then((l) => l.json())
          .then((l) => {
            l.status === "success"
              ? (alert("Inventory added successfully"),
                t[1](""),
                e[1](""),
                n[1](""),
                i[1](""),
                s[1](""))
              : l.status === "error" && alert(l.response);
          })
          .catch((l) => alert("server error"));
    };
  return f.jsxs("div", {
    className: "w-full flex flex-col lg:flex-row justify-evenly",
    children: [
      f.jsxs("div", {
        className: "grid md:grid-cols-2 grid-cols-1 gap-8 w-full lg:ml-8",
        children: [
          f.jsx("div", {
            className: " md:col-span-2 md:w-3/4 lg:w-1/2 md:mx-auto",
            children: f.jsx(fs, { variable: t, level: "Hotel" }),
          }),
          f.jsx(fs, { variable: e, level: "Purchases" }),
          f.jsx(fs, { variable: n, level: "Sales" }),
          f.jsx(fs, { variable: i, level: "Opening Stock" }),
          f.jsx(fs, { variable: s, level: "Closing Stock" }),
          f.jsx("button", {
            className:
              "md:col-span-2 flex lg:w-3/4 w-full mx-auto justify-center rounded-md bg-blue-800 px-3 py-2 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            onClick: (a) => o(a),
            children: "Submit",
          }),
        ],
      }),
      f.jsx("div", {
        className: "w-full lg:mx-4",
        children: f.jsx(wm, { date: r }),
      }),
    ],
  });
}
function yS({ Control: t, Others: e, Role: n }) {
  let [i, s] = L.useState("Hotel"),
    [r, o] = L.useState(""),
    a = (l) => {
      l.preventDefault(),
        fetch(`${Ae}/addbuisness`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: i, name: r }),
        })
          .then((c) => c.json())
          .then((c) => {
            c.status === "success"
              ? (alert("Buisness added successfully"),
                e[1]([...e[0], [i, r]]),
                t[1](!1))
              : c.status === "error" && alert(c.response);
          })
          .catch((c) => alert("server error"));
    };
  return f.jsxs(f.Fragment, {
    children: [
      f.jsxs("form", {
        className: "mx-4 lg:w-1/2 lg:mx-auto",
        children: [
          n == 6 &&
            f.jsxs("div", {
              children: [
                f.jsx("label", {
                  htmlFor: "type",
                  className: "block text-lg font-bold leading-6 my-6",
                  children: "Type",
                }),
                f.jsx("div", {
                  className: "mt-2",
                  children: f.jsx("input", {
                    id: "type",
                    name: "type",
                    type: "text",
                    value: i,
                    onChange: (l) => s(l.target.value),
                    className:
                      "pl-2 text-black block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-0 sm:text-sm sm:leading-6",
                  }),
                }),
              ],
            }),
          f.jsxs("div", {
            children: [
              f.jsx("label", {
                htmlFor: "name",
                className: "block text-lg font-bold leading-6 my-6",
                children: "Name",
              }),
              f.jsx("div", {
                className: "mt-2",
                children: f.jsx("input", {
                  id: "name",
                  name: "name",
                  type: "text",
                  value: r,
                  onChange: (l) => o(l.target.value),
                  className:
                    "pl-2 text-black block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-0 sm:text-sm sm:leading-6",
                }),
              }),
            ],
          }),
        ],
      }),
      f.jsxs("div", {
        className: "flex justify-around mt-8 font-semibold",
        children: [
          f.jsx("button", {
            className: "w-full hover:scale-y-105 hover:bg-gray-900 h-full py-4",
            onClick: (l) => t[1](!1),
            children: "Cancel",
          }),
          f.jsx("button", {
            className: "w-full hover:scale-y-105 hover:bg-gray-900 h-full py-4",
            onClick: (l) => a(l),
            children: "Add",
          }),
        ],
      }),
    ],
  });
}
function xS({ Role: t }) {
  let e = L.useState(!1),
    [n, i] = L.useState([]),
    s = L.useState([]),
    { User: r } = L.useContext(Ce),
    [o, a] = r,
    l = [
      "",
      "Sales executive",
      "accountant",
      "clerk",
      "supervisor",
      "manager",
      "Admin",
    ];
  return (
    L.useEffect(() => {
      fetch(`${Ae}/buisnesses`)
        .then((c) => c.json())
        .then((c) => {
          console.log(c),
            c.status === "success"
              ? (s[1](c.response.buisnesses), i(c.response.users))
              : c.status === "error" && console.log(c.response);
        })
        .catch((c) => alert("server error"));
    }, []),
    f.jsxs("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
      children: [
        f.jsx("div", {
          className: " bg-gray-800 rounded py-4",
          children: e[0]
            ? f.jsx(yS, { Control: e, Others: s, Role: o.role })
            : f.jsxs("div", {
                className: "flex gap-4 items-center justify-center flex-col",
                onClick: (c) => e[1](!0),
                children: [
                  f.jsx("button", {
                    className: "w-max",
                    children: f.jsx("img", {
                      className: "w-48 block",
                      src: "/add.svg",
                    }),
                  }),
                  f.jsxs("p", {
                    className: "text-2xl my-4 font-semibold",
                    children: ["Add ", o.role == 6 ? "Buisness" : "Section"],
                  }),
                ],
              }),
        }),
        f.jsx("div", {
          className: " bg-gray-800 rounded py-4 px-4 overflow-x-scroll",
          children: f.jsxs("table", {
            className: "w-full text-sm text-left text-gray-400 table-auto",
            children: [
              f.jsx("thead", {
                className:
                  "text-xs text-gray-100 uppercase bg-blue-900 sticky top-0",
                children: f.jsxs("tr", {
                  children: [
                    o.role == 6
                      ? f.jsxs(f.Fragment, {
                          children: [
                            f.jsx("th", {
                              className: "px-6 py-3",
                              children: "Buisness type",
                            }),
                            f.jsx("th", {
                              className: "px-6 py-3",
                              children: "Name",
                            }),
                          ],
                        })
                      : f.jsxs(f.Fragment, {
                          children: [
                            f.jsx("th", {
                              className: "px-6 py-3",
                              children: "Buisness",
                            }),
                            f.jsx("th", {
                              className: "px-6 py-3",
                              children: "Section",
                            }),
                          ],
                        }),
                    f.jsx("th", { className: "px-6 py-3" }),
                  ],
                }),
              }),
              f.jsxs("tbody", {
                children: [
                  s[0].map((c, u) =>
                    f.jsxs("tr", {
                      className: "bg-gray-800 border-b border-gray-700",
                      children: [
                        f.jsx("td", {
                          className: "px-6 py-4 whitespace-nowrap",
                          children: c[1],
                        }),
                        f.jsx("td", {
                          className: "px-6 py-4 whitespace-nowrap",
                          children: c[0],
                        }),
                        f.jsx("td", {
                          className: "md:px-6 py-2 md:py-0",
                          children: f.jsxs("button", {
                            className:
                              "py-2 w-full bg-gray-900 font-mono my-1 hover:uppercase",
                            children: [
                              f.jsx("img", {
                                className: "inline",
                                src: "/x.svg",
                                alt: "",
                              }),
                              " remove",
                            ],
                          }),
                        }),
                      ],
                    })
                  ),
                  7 - s[0].length > 0
                    ? [...Array(7 - s[0].length)].map((c, u) =>
                        f.jsx("tr", {
                          className: "bg-gray-800 border-b border-gray-700",
                          children: f.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                          }),
                        })
                      )
                    : null,
                ],
              }),
            ],
          }),
        }),
        f.jsxs("div", {
          className:
            " bg-gray-800 rounded py-4 px-4 overflow-x-scroll max-h-96 overflow-y-scroll",
          children: [
            f.jsx("h3", {
              className: "mb-6 font-semibold text-xl",
              children: "User management",
            }),
            f.jsxs("table", {
              className: "w-full text-sm text-left text-gray-400 table-auto",
              children: [
                f.jsx("thead", {
                  className:
                    "text-xs text-gray-100 uppercase bg-blue-900 sticky top-0",
                  children: f.jsxs("tr", {
                    children: [
                      f.jsx("th", { className: "px-6 py-3", children: "User" }),
                      f.jsx("th", { className: "px-6 py-3", children: "role" }),
                      f.jsx("th", { className: "px-6 py-3" }),
                      f.jsx("th", { className: "px-6 py-3" }),
                    ],
                  }),
                }),
                f.jsxs("tbody", {
                  children: [
                    n.map((c, u) =>
                      f.jsxs("tr", {
                        className: "bg-gray-800 border-b border-gray-700",
                        children: [
                          f.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: c[0],
                          }),
                          f.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: l[c[1]],
                          }),
                          f.jsx("td", {
                            className: "md:px-6 py-2 md:py-0",
                            children: f.jsx("button", {
                              className:
                                "py-2 w-full bg-gray-900 font-mono my-1 hover:uppercase",
                              children: "remove",
                            }),
                          }),
                          f.jsx("td", {
                            className: "md:px-6 py-2 md:py-0",
                            children: f.jsx("button", {
                              className:
                                "py-2 w-full bg-gray-900 font-mono my-1 hover:uppercase",
                              children: "Change role",
                            }),
                          }),
                        ],
                      })
                    ),
                    5 - n.length > 0
                      ? [...Array(5 - n.length)].map((c, u) =>
                          f.jsx("tr", {
                            className: "bg-gray-800 border-b border-gray-700",
                            children: f.jsx("td", {
                              className: "px-6 py-4 whitespace-nowrap",
                            }),
                          })
                        )
                      : null,
                  ],
                }),
              ],
            }),
          ],
        }),
        f.jsxs("div", {
          className: "bg-gray-800 rounded py-4 px-4 overflow-x-scroll",
          children: [
            f.jsx("h3", {
              className: "mb-6 font-semibold text-xl",
              children: "Set target",
            }),
            f.jsxs("table", {
              className: "w-full text-sm text-left text-gray-400 table-auto",
              children: [
                f.jsx("thead", {
                  className:
                    "text-xs text-gray-100 uppercase bg-blue-900 sticky top-0",
                  children: f.jsxs("tr", {
                    children: [
                      o.role == 6 &&
                        f.jsx("th", {
                          className: "px-6 py-3",
                          children: "Hotel",
                        }),
                      o.role == 5 &&
                        f.jsx("th", {
                          className: "px-6 py-3",
                          children: "Section",
                        }),
                      o.role == 4 &&
                        f.jsx("th", {
                          className: "px-6 py-3",
                          children: "Waitstuff",
                        }),
                      f.jsx("th", {
                        className: "px-6 py-3",
                        children: "Target",
                      }),
                      f.jsx("th", { className: "px-6 py-3" }),
                    ],
                  }),
                }),
                f.jsxs("tbody", {
                  children: [
                    s[0].map((c, u) =>
                      f.jsxs("tr", {
                        className: "bg-gray-800 border-b border-gray-700",
                        children: [
                          f.jsx("td", {
                            className: "px-6 py-3",
                            children: c[0],
                          }),
                          f.jsx("td", {
                            className: "px-6 py-3",
                            children: f.jsx("input", {
                              className:
                                "w-3/4 md:w-fit bg-gray-200 text-black",
                              type: "number",
                            }),
                          }),
                          f.jsx("td", {
                            className: "md:px-6 py-2 md:py-0",
                            children: f.jsx("button", {
                              className:
                                "py-2 w-full bg-gray-900 font-mono my-1 hover:uppercase",
                              children: "Set",
                            }),
                          }),
                        ],
                      })
                    ),
                    5 - s[0].length > 0
                      ? [...Array(5 - s[0].length)].map((c, u) =>
                          f.jsx("tr", {
                            className: "bg-gray-800 border-b border-gray-700",
                            children: f.jsx("td", {
                              className: "px-6 py-4 whitespace-nowrap",
                            }),
                          })
                        )
                      : null,
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function _S() {
  let [t, e] = L.useState([]);
  return (
    L.useEffect(() => {
      fetch(`${Ae}/logs`)
        .then((n) => n.json())
        .then((n) => {
          n.status === "success"
            ? (console.log(n.response), e(n.response))
            : n.status === "error" && alert(n.response);
        })
        .catch((n) => alert("server error"));
    }, []),
    f.jsx("div", {
      className:
        "flex justify-center rounded overflow-x-scroll overflow-y-scroll",
      children: f.jsxs("table", {
        className:
          "lg:w-1/2 bg-gray-800 mx-auto text-sm text-left text-gray-400 table-auto",
        children: [
          f.jsx("thead", {
            className:
              "text-xs border-b border-gray-700 text-gray-100 uppercase py-4 sticky top-0 bg-blue-900",
            children: f.jsxs("tr", {
              children: [
                f.jsx("th", { className: "px-6 py-3", children: "User" }),
                f.jsx("th", {
                  className: "px-6 py-3",
                  children: "Data Modified",
                }),
                f.jsx("th", { children: "Timestamp" }),
                f.jsx("th", { children: "ID" }),
              ],
            }),
          }),
          f.jsx("tbody", {
            children:
              10 - t.length > 0
                ? [...Array(10 - t.length)].map((n, i) =>
                    f.jsx("tr", {
                      className: "bg-gray-800 border-b border-gray-700",
                      children: f.jsx("td", {
                        className: "px-6 py-4 whitespace-nowrap",
                      }),
                    })
                  )
                : null,
          }),
        ],
      }),
    })
  );
}
function bS() {
  let { User: t } = L.useContext(Ce),
    [e, n] = t;
  L.useEffect(() => {
    qu();
  }, []);
  let i;
  e.role < 4 ? (i = ["Sales", "Inventory"]) : (i = ["Lobby", "Business"]),
    e.role === 6 && i.push("Logs");
  let [s, r] = L.useState(i[0]);
  return f.jsxs(f.Fragment, {
    children: [
      f.jsxs("div", {
        className:
          "mb-24 md:mx-4 mt-4 text-gray-300 font-semibold text-lg flex overflow-x-scroll sticky top-16 bg-gray-700 before:px-0",
        children: [
          i.map((o, a) =>
            f.jsx(
              "button",
              {
                onClick: () => r(o),
                className: `px-4 py-2 border-gray-400 pr-8 ${
                  s === o
                    ? "bg-gradient-to-b from-gray-800 border-b-0 border-2 rounded-t-lg"
                    : "border-b-2"
                }`,
                children: o,
              },
              a
            )
          ),
          f.jsx("button", {
            className: "px-4 py-2 border-b-2 border-gray-400 pr-8",
          }),
        ],
      }),
      f.jsxs("div", {
        class: "p-4 rounded-lg border-gray-700 mt-14 text-gray-300",
        children: [
          s === "Sales" && f.jsx(gS, {}),
          s === "Lobby" && f.jsx(mS, {}),
          s === "Inventory" && f.jsx(vS, {}),
          s === "Business" && f.jsx(xS, {}),
          s === "Logs" && f.jsx(_S, {}),
        ],
      }),
    ],
  });
}
function wS() {
  let t = (e) => {
    e.preventDefault(),
      fetch(`${Ae}/download/dailyreport`)
        .then((n) => n.blob())
        .then((n) => {
          const i = URL.createObjectURL(n),
            s = document.createElement("a");
          (s.href = i),
            (s.download = "daily-report.csv"),
            document.body.appendChild(s),
            s.click(),
            s.remove();
        });
  };
  return f.jsx("div", {
    class:
      "p-4 rounded-lg border-gray-700 pt-20 text-gray-300 overflow-y-hidden lg:max-h-screen",
    children: f.jsxs("div", {
      class:
        "grid lg:grid-rows-3 lg:grid-flow-col gap-4 lg:grid-cols-3 grid-cols-1",
      children: [
        f.jsx("div", {
          class:
            "row-span-3 lg:col-span-2 overflow-x-scroll overflow-y-scroll order-last md:order-first max-h-screen",
          children: f.jsx(T0, {}),
        }),
        f.jsxs("button", {
          onClick: (e) => t(e),
          className:
            "font-semibold text-xl bg-gray-800 hover:bg-gray-900 hover:scale-y-105 px-4 py-2 float-right rounded-2xl w-96 mx-auto h-80",
          children: [
            f.jsx("img", {
              className: "inline w-16 my-8",
              src: "/download.svg",
              alt: "",
            }),
            f.jsx("div", {
              className: "mb-4 text-2xl",
              children: "Download report",
            }),
          ],
        }),
        f.jsx(A0, {}),
      ],
    }),
  });
}
function kS() {
  let { User: t, HotelData: e, Filters: n } = L.useContext(Ce),
    [i, s] = e,
    [r, o] = n,
    [a, l] = t,
    [c, u] = L.useState("home");
  L.useEffect(() => {
    qu(),
      fetch(`${Ae}/getsales`)
        .then((p) => p.json())
        .then((p) => {
          console.log("fetching :: ", p), s(p.sales);
        })
        .catch((p) => alert("server error, can't fetch sales data"));
  }, []),
    L.useEffect(() => {
      r.inventory
        ? (console.log("fetching inventory"),
          fetch(`${Ae}/getinventory`)
            .then((p) => p.json())
            .then((p) => {
              console.log("fetching :: ", p), s(p.response);
            })
            .catch((p) => alert("server error, can't fetch inventory data")))
        : (console.log("fetching sales"),
          fetch(`${Ae}/getsales`)
            .then((p) => p.json())
            .then((p) => {
              console.log("fetching :: ", p), s(p.sales);
            })
            .catch((p) => alert("server error, can't fetch sales data")));
    }, [r.inventory]);
  let d = (p) => {
      p.preventDefault(),
        fetch(`${Ae}/logout`)
          .then((m) => m.json())
          .then((m) => {
            console.log(m),
              m.status == "success" &&
                (localStorage.removeItem("user"), l(null), location.reload());
          })
          .catch((m) => alert("server error"));
    },
    h = (p) => {
      p.preventDefault();
      let m = document.getElementById("logo-sidebar");
      m.classList.contains("transform-none") &&
        m.classList.replace("transform-none", "-translate-x-full");
    };
  return f.jsxs("div", {
    children: [
      f.jsx("nav", {
        className: "fixed top-0 z-50 w-full bg-gray-800 border-gray-700",
        children: f.jsx("div", {
          className: "px-3 py-3 lg:px-5 lg:pl-3",
          children: f.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              f.jsxs("div", {
                className: "flex items-center justify-start",
                children: [
                  f.jsxs("button", {
                    id: "sidebar-control",
                    "data-drawer-target": "logo-sidebar",
                    "data-drawer-toggle": "logo-sidebar",
                    "aria-controls": "logo-sidebar",
                    type: "button",
                    className:
                      "inline-flex items-center p-2 text-sm rounded-lg sm:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600",
                    children: [
                      f.jsx("span", {
                        className: "sr-only",
                        children: "Open sidebar",
                      }),
                      f.jsx("svg", {
                        className: "w-6 h-6",
                        "aria-hidden": "true",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: f.jsx("path", {
                          "clip-rule": "evenodd",
                          "fill-rule": "evenodd",
                          d: "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z",
                        }),
                      }),
                    ],
                  }),
                  f.jsxs("a", {
                    href: "/",
                    className: "flex ml-2 md:mr-24",
                    children: [
                      f.jsx("img", {
                        src: "/logo.svg",
                        className: "h-8 mr-3",
                        alt: "Logo",
                      }),
                      f.jsx("span", {
                        className:
                          "self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-gray-100",
                        children: "IntelGPT",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("div", {
                className: "flex items-center",
                children: f.jsxs("div", {
                  className: "flex items-center ml-3",
                  children: [
                    f.jsx("div", {
                      children: f.jsxs("button", {
                        type: "button",
                        className:
                          "flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600",
                        "aria-expanded": "false",
                        "data-dropdown-toggle": "dropdown-user",
                        children: [
                          f.jsx("span", {
                            className: "sr-only",
                            children: "Open user menu",
                          }),
                          f.jsx("img", {
                            className: "w-8 h-8 rounded-full",
                            src: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
                            alt: "user photo",
                          }),
                        ],
                      }),
                    }),
                    f.jsxs("div", {
                      className:
                        "z-50 hidden my-4 text-base list-none divide-y rounded shadow bg-gray-700 divide-gray-600",
                      id: "dropdown-user",
                      children: [
                        f.jsxs("div", {
                          className: "px-4 py-3",
                          role: "none",
                          children: [
                            f.jsx("p", {
                              className: "text-sm  text-white",
                              role: "none",
                              children: a.username,
                            }),
                            f.jsx("p", {
                              className:
                                "text-sm font-medium truncate text-gray-300",
                              role: "none",
                              children: a.email,
                            }),
                          ],
                        }),
                        f.jsxs("ul", {
                          className: "py-1",
                          role: "none",
                          children: [
                            f.jsx("li", {
                              children: f.jsx("button", {
                                onClick: (p) => u("home"),
                                className:
                                  "block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white",
                                role: "menuitem",
                                children: "Dashboard",
                              }),
                            }),
                            f.jsx("li", {
                              children: f.jsx("button", {
                                onClick: (p) => u("settings"),
                                className:
                                  "block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white",
                                role: "menuitem",
                                children: "Settings",
                              }),
                            }),
                            f.jsx("li", {
                              children: f.jsx("button", {
                                onClick: (p) => d(p),
                                className:
                                  "block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white",
                                role: "menuitem",
                                children: "Sign out",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      f.jsx("aside", {
        onClick: (p) => h(p),
        id: "logo-sidebar",
        className:
          "fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r sm:translate-x-0 bg-gray-800 border-gray-700",
        "aria-label": "Sidebar",
        children: f.jsx("div", {
          className: "h-full px-3 pb-4 overflow-y-auto bg-gray-800",
          children: f.jsxs("ul", {
            className: "space-y-2 font-medium",
            children: [
              f.jsx("li", {
                onClick: (p) => u("home"),
                children: f.jsxs("button", {
                  href: "#",
                  className:
                    "flex items-center p-2  rounded-lg text-white hover:bg-gray-700",
                  children: [
                    f.jsxs("svg", {
                      "aria-hidden": "true",
                      className:
                        "w-6 h-6 transition duration-75 text-gray-400  group-hover:text-white",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        f.jsx("path", {
                          d: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z",
                        }),
                        f.jsx("path", {
                          d: "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z",
                        }),
                      ],
                    }),
                    f.jsx("span", { className: "ml-3", children: "Dashboard" }),
                  ],
                }),
              }),
              a.role > 1 &&
                f.jsx("li", {
                  onClick: (p) => u("activity"),
                  children: f.jsxs("button", {
                    className:
                      "flex items-center p-2  rounded-lg text-white hover:bg-gray-700",
                    children: [
                      f.jsx("svg", {
                        "aria-hidden": "true",
                        className:
                          "flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: f.jsx("path", {
                          d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
                        }),
                      }),
                      f.jsx("span", {
                        className: "flex-1 ml-3 whitespace-nowrap",
                        children: "Activity",
                      }),
                    ],
                  }),
                }),
              f.jsx("li", {
                onClick: (p) => u("download"),
                children: f.jsxs("button", {
                  className:
                    "flex items-center p-2  rounded-lg text-white hover:bg-gray-700",
                  children: [
                    f.jsxs("svg", {
                      "aria-hidden": "true",
                      className:
                        "flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        f.jsx("path", {
                          d: "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z",
                        }),
                        f.jsx("path", {
                          d: "M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z",
                        }),
                      ],
                    }),
                    f.jsx("span", {
                      className: "flex-1 ml-3 whitespace-nowrap",
                      children: "Download",
                    }),
                  ],
                }),
              }),
              f.jsx("li", {
                onClick: (p) => u("inbox"),
                children: f.jsxs("button", {
                  className:
                    "flex items-center p-2  rounded-lg text-white hover:bg-gray-700",
                  children: [
                    f.jsx("img", {
                      className: "w-6",
                      src: "/message.svg",
                      alt: "",
                    }),
                    f.jsx("span", {
                      className: "flex-1 ml-3 whitespace-nowrap",
                      children: "Inbox",
                    }),
                  ],
                }),
              }),
              f.jsx("li", {
                onClick: (p) => u("settings"),
                children: f.jsxs("button", {
                  className:
                    "flex items-center p-2  rounded-lg text-white hover:bg-gray-700",
                  children: [
                    f.jsx("img", {
                      className: "w-6",
                      src: "/settings.svg",
                      alt: "",
                    }),
                    f.jsx("span", {
                      className: "flex-1 ml-3 whitespace-nowrap",
                      children: "Settings",
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      f.jsxs("div", {
        onClick: (p) => h(p),
        className: "sm:ml-64 bg-gray-700 h-screen overflow-y-scroll",
        children: [
          c === "home" && f.jsx(fS, {}),
          c === "settings" && f.jsx(pS, {}),
          c === "download" && f.jsx(wS, {}),
          c === "activity" && f.jsx(bS, {}),
        ],
      }),
    ],
  });
}
function SS() {
  let { User: t } = L.useContext(Ce),
    [e, n] = t,
    [i, s] = L.useState(!1);
  return (
    L.useEffect(() => {
      localStorage.setItem("user", "{}"),
        fetch(`${Ae}/session`)
          .then((r) => r.json())
          .then((r) => {
            r.status === "success"
              ? (localStorage.getItem("user") == "{}" &&
                  localStorage.setItem(
                    "user",
                    JSON.stringify({
                      username: r.response.username,
                      role: r.response.role,
                      email: r.response.email,
                    })
                  ),
                n({
                  username: r.response.username,
                  role: r.response.role,
                  email: r.response.email,
                }))
              : r.status === "error" &&
                (n(null),
                JSON.parse(localStorage.getItem("user")).username &&
                  (alert(r.response), localStorage.removeItem("user")),
                s(!1));
          })
          .catch((r) => {
            alert("Server error, can't get session info");
          }),
        e && s(!0);
    }, []),
    L.useEffect(() => {
      s(!!e);
    }, [e]),
    f.jsx(f.Fragment, { children: i ? f.jsx(kS, {}) : f.jsx(vx, {}) })
  );
}
Ll.createRoot(document.getElementById("root")).render(
  f.jsx(Bc.StrictMode, { children: f.jsx(mx, { children: f.jsx(SS, {}) }) })
);
