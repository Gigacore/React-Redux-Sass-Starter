/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 160:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var React = __webpack_require__(540);
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is,
  useSyncExternalStore = React.useSyncExternalStore,
  useRef = React.useRef,
  useEffect = React.useEffect,
  useMemo = React.useMemo,
  useDebugValue = React.useDebugValue;
exports.useSyncExternalStoreWithSelector = function (
  subscribe,
  getSnapshot,
  getServerSnapshot,
  selector,
  isEqual
) {
  var instRef = useRef(null);
  if (null === instRef.current) {
    var inst = { hasValue: !1, value: null };
    instRef.current = inst;
  } else inst = instRef.current;
  instRef = useMemo(
    function () {
      function memoizedSelector(nextSnapshot) {
        if (!hasMemo) {
          hasMemo = !0;
          memoizedSnapshot = nextSnapshot;
          nextSnapshot = selector(nextSnapshot);
          if (void 0 !== isEqual && inst.hasValue) {
            var currentSelection = inst.value;
            if (isEqual(currentSelection, nextSnapshot))
              return (memoizedSelection = currentSelection);
          }
          return (memoizedSelection = nextSnapshot);
        }
        currentSelection = memoizedSelection;
        if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
        var nextSelection = selector(nextSnapshot);
        if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
          return (memoizedSnapshot = nextSnapshot), currentSelection;
        memoizedSnapshot = nextSnapshot;
        return (memoizedSelection = nextSelection);
      }
      var hasMemo = !1,
        memoizedSnapshot,
        memoizedSelection,
        maybeGetServerSnapshot =
          void 0 === getServerSnapshot ? null : getServerSnapshot;
      return [
        function () {
          return memoizedSelector(getSnapshot());
        },
        null === maybeGetServerSnapshot
          ? void 0
          : function () {
              return memoizedSelector(maybeGetServerSnapshot());
            }
      ];
    },
    [getSnapshot, getServerSnapshot, selector, isEqual]
  );
  var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
  useEffect(
    function () {
      inst.hasValue = !0;
      inst.value = value;
    },
    [value]
  );
  useDebugValue(value);
  return value;
};


/***/ }),

/***/ 221:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var React = __webpack_require__(540);
function formatProdErrorMessage(code) {
  var url = "https://react.dev/errors/" + code;
  if (1 < arguments.length) {
    url += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var i = 2; i < arguments.length; i++)
      url += "&args[]=" + encodeURIComponent(arguments[i]);
  }
  return (
    "Minified React error #" +
    code +
    "; visit " +
    url +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
function noop() {}
var Internals = {
    d: {
      f: noop,
      r: function () {
        throw Error(formatProdErrorMessage(522));
      },
      D: noop,
      C: noop,
      L: noop,
      m: noop,
      X: noop,
      S: noop,
      M: noop
    },
    p: 0,
    findDOMNode: null
  },
  REACT_PORTAL_TYPE = Symbol.for("react.portal");
function createPortal$1(children, containerInfo, implementation) {
  var key =
    3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: REACT_PORTAL_TYPE,
    key: null == key ? null : "" + key,
    children: children,
    containerInfo: containerInfo,
    implementation: implementation
  };
}
var ReactSharedInternals =
  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function getCrossOriginStringAs(as, input) {
  if ("font" === as) return "";
  if ("string" === typeof input)
    return "use-credentials" === input ? input : "";
}
exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
  Internals;
exports.createPortal = function (children, container) {
  var key =
    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (
    !container ||
    (1 !== container.nodeType &&
      9 !== container.nodeType &&
      11 !== container.nodeType)
  )
    throw Error(formatProdErrorMessage(299));
  return createPortal$1(children, container, null, key);
};
exports.flushSync = function (fn) {
  var previousTransition = ReactSharedInternals.T,
    previousUpdatePriority = Internals.p;
  try {
    if (((ReactSharedInternals.T = null), (Internals.p = 2), fn)) return fn();
  } finally {
    (ReactSharedInternals.T = previousTransition),
      (Internals.p = previousUpdatePriority),
      Internals.d.f();
  }
};
exports.preconnect = function (href, options) {
  "string" === typeof href &&
    (options
      ? ((options = options.crossOrigin),
        (options =
          "string" === typeof options
            ? "use-credentials" === options
              ? options
              : ""
            : void 0))
      : (options = null),
    Internals.d.C(href, options));
};
exports.prefetchDNS = function (href) {
  "string" === typeof href && Internals.d.D(href);
};
exports.preinit = function (href, options) {
  if ("string" === typeof href && options && "string" === typeof options.as) {
    var as = options.as,
      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),
      integrity =
        "string" === typeof options.integrity ? options.integrity : void 0,
      fetchPriority =
        "string" === typeof options.fetchPriority
          ? options.fetchPriority
          : void 0;
    "style" === as
      ? Internals.d.S(
          href,
          "string" === typeof options.precedence ? options.precedence : void 0,
          {
            crossOrigin: crossOrigin,
            integrity: integrity,
            fetchPriority: fetchPriority
          }
        )
      : "script" === as &&
        Internals.d.X(href, {
          crossOrigin: crossOrigin,
          integrity: integrity,
          fetchPriority: fetchPriority,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0
        });
  }
};
exports.preinitModule = function (href, options) {
  if ("string" === typeof href)
    if ("object" === typeof options && null !== options) {
      if (null == options.as || "script" === options.as) {
        var crossOrigin = getCrossOriginStringAs(
          options.as,
          options.crossOrigin
        );
        Internals.d.M(href, {
          crossOrigin: crossOrigin,
          integrity:
            "string" === typeof options.integrity ? options.integrity : void 0,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0
        });
      }
    } else null == options && Internals.d.M(href);
};
exports.preload = function (href, options) {
  if (
    "string" === typeof href &&
    "object" === typeof options &&
    null !== options &&
    "string" === typeof options.as
  ) {
    var as = options.as,
      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
    Internals.d.L(href, as, {
      crossOrigin: crossOrigin,
      integrity:
        "string" === typeof options.integrity ? options.integrity : void 0,
      nonce: "string" === typeof options.nonce ? options.nonce : void 0,
      type: "string" === typeof options.type ? options.type : void 0,
      fetchPriority:
        "string" === typeof options.fetchPriority
          ? options.fetchPriority
          : void 0,
      referrerPolicy:
        "string" === typeof options.referrerPolicy
          ? options.referrerPolicy
          : void 0,
      imageSrcSet:
        "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
      imageSizes:
        "string" === typeof options.imageSizes ? options.imageSizes : void 0,
      media: "string" === typeof options.media ? options.media : void 0
    });
  }
};
exports.preloadModule = function (href, options) {
  if ("string" === typeof href)
    if (options) {
      var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
      Internals.d.m(href, {
        as:
          "string" === typeof options.as && "script" !== options.as
            ? options.as
            : void 0,
        crossOrigin: crossOrigin,
        integrity:
          "string" === typeof options.integrity ? options.integrity : void 0
      });
    } else Internals.d.m(href);
};
exports.requestFormReset = function (form) {
  Internals.d.r(form);
};
exports.unstable_batchedUpdates = function (fn, a) {
  return fn(a);
};
exports.useFormState = function (action, initialState, permalink) {
  return ReactSharedInternals.H.useFormState(action, initialState, permalink);
};
exports.useFormStatus = function () {
  return ReactSharedInternals.H.useHostTransitionStatus();
};
exports.version = "19.1.0";


/***/ }),

/***/ 247:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/

var Scheduler = __webpack_require__(982),
  React = __webpack_require__(540),
  ReactDOM = __webpack_require__(961);
function formatProdErrorMessage(code) {
  var url = "https://react.dev/errors/" + code;
  if (1 < arguments.length) {
    url += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var i = 2; i < arguments.length; i++)
      url += "&args[]=" + encodeURIComponent(arguments[i]);
  }
  return (
    "Minified React error #" +
    code +
    "; visit " +
    url +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
function isValidContainer(node) {
  return !(
    !node ||
    (1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType)
  );
}
function getNearestMountedFiber(fiber) {
  var node = fiber,
    nearestMounted = fiber;
  if (fiber.alternate) for (; node.return; ) node = node.return;
  else {
    fiber = node;
    do
      (node = fiber),
        0 !== (node.flags & 4098) && (nearestMounted = node.return),
        (fiber = node.return);
    while (fiber);
  }
  return 3 === node.tag ? nearestMounted : null;
}
function getSuspenseInstanceFromFiber(fiber) {
  if (13 === fiber.tag) {
    var suspenseState = fiber.memoizedState;
    null === suspenseState &&
      ((fiber = fiber.alternate),
      null !== fiber && (suspenseState = fiber.memoizedState));
    if (null !== suspenseState) return suspenseState.dehydrated;
  }
  return null;
}
function assertIsMounted(fiber) {
  if (getNearestMountedFiber(fiber) !== fiber)
    throw Error(formatProdErrorMessage(188));
}
function findCurrentFiberUsingSlowPath(fiber) {
  var alternate = fiber.alternate;
  if (!alternate) {
    alternate = getNearestMountedFiber(fiber);
    if (null === alternate) throw Error(formatProdErrorMessage(188));
    return alternate !== fiber ? null : fiber;
  }
  for (var a = fiber, b = alternate; ; ) {
    var parentA = a.return;
    if (null === parentA) break;
    var parentB = parentA.alternate;
    if (null === parentB) {
      b = parentA.return;
      if (null !== b) {
        a = b;
        continue;
      }
      break;
    }
    if (parentA.child === parentB.child) {
      for (parentB = parentA.child; parentB; ) {
        if (parentB === a) return assertIsMounted(parentA), fiber;
        if (parentB === b) return assertIsMounted(parentA), alternate;
        parentB = parentB.sibling;
      }
      throw Error(formatProdErrorMessage(188));
    }
    if (a.return !== b.return) (a = parentA), (b = parentB);
    else {
      for (var didFindChild = !1, child$0 = parentA.child; child$0; ) {
        if (child$0 === a) {
          didFindChild = !0;
          a = parentA;
          b = parentB;
          break;
        }
        if (child$0 === b) {
          didFindChild = !0;
          b = parentA;
          a = parentB;
          break;
        }
        child$0 = child$0.sibling;
      }
      if (!didFindChild) {
        for (child$0 = parentB.child; child$0; ) {
          if (child$0 === a) {
            didFindChild = !0;
            a = parentB;
            b = parentA;
            break;
          }
          if (child$0 === b) {
            didFindChild = !0;
            b = parentB;
            a = parentA;
            break;
          }
          child$0 = child$0.sibling;
        }
        if (!didFindChild) throw Error(formatProdErrorMessage(189));
      }
    }
    if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
  }
  if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
  return a.stateNode.current === a ? fiber : alternate;
}
function findCurrentHostFiberImpl(node) {
  var tag = node.tag;
  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
  for (node = node.child; null !== node; ) {
    tag = findCurrentHostFiberImpl(node);
    if (null !== tag) return tag;
    node = node.sibling;
  }
  return null;
}
var assign = Object.assign,
  REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"),
  REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
  REACT_PROVIDER_TYPE = Symbol.for("react.provider"),
  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
  REACT_MEMO_TYPE = Symbol.for("react.memo"),
  REACT_LAZY_TYPE = Symbol.for("react.lazy");
Symbol.for("react.scope");
var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
Symbol.for("react.legacy_hidden");
Symbol.for("react.tracing_marker");
var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
Symbol.for("react.view_transition");
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
function getIteratorFn(maybeIterable) {
  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
  maybeIterable =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable["@@iterator"];
  return "function" === typeof maybeIterable ? maybeIterable : null;
}
var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
function getComponentNameFromType(type) {
  if (null == type) return null;
  if ("function" === typeof type)
    return type.$$typeof === REACT_CLIENT_REFERENCE
      ? null
      : type.displayName || type.name || null;
  if ("string" === typeof type) return type;
  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return "Fragment";
    case REACT_PROFILER_TYPE:
      return "Profiler";
    case REACT_STRICT_MODE_TYPE:
      return "StrictMode";
    case REACT_SUSPENSE_TYPE:
      return "Suspense";
    case REACT_SUSPENSE_LIST_TYPE:
      return "SuspenseList";
    case REACT_ACTIVITY_TYPE:
      return "Activity";
  }
  if ("object" === typeof type)
    switch (type.$$typeof) {
      case REACT_PORTAL_TYPE:
        return "Portal";
      case REACT_CONTEXT_TYPE:
        return (type.displayName || "Context") + ".Provider";
      case REACT_CONSUMER_TYPE:
        return (type._context.displayName || "Context") + ".Consumer";
      case REACT_FORWARD_REF_TYPE:
        var innerType = type.render;
        type = type.displayName;
        type ||
          ((type = innerType.displayName || innerType.name || ""),
          (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
        return type;
      case REACT_MEMO_TYPE:
        return (
          (innerType = type.displayName || null),
          null !== innerType
            ? innerType
            : getComponentNameFromType(type.type) || "Memo"
        );
      case REACT_LAZY_TYPE:
        innerType = type._payload;
        type = type._init;
        try {
          return getComponentNameFromType(type(innerType));
        } catch (x) {}
    }
  return null;
}
var isArrayImpl = Array.isArray,
  ReactSharedInternals =
    React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  ReactDOMSharedInternals =
    ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  sharedNotPendingObject = {
    pending: !1,
    data: null,
    method: null,
    action: null
  },
  valueStack = [],
  index = -1;
function createCursor(defaultValue) {
  return { current: defaultValue };
}
function pop(cursor) {
  0 > index ||
    ((cursor.current = valueStack[index]), (valueStack[index] = null), index--);
}
function push(cursor, value) {
  index++;
  valueStack[index] = cursor.current;
  cursor.current = value;
}
var contextStackCursor = createCursor(null),
  contextFiberStackCursor = createCursor(null),
  rootInstanceStackCursor = createCursor(null),
  hostTransitionProviderCursor = createCursor(null);
function pushHostContainer(fiber, nextRootInstance) {
  push(rootInstanceStackCursor, nextRootInstance);
  push(contextFiberStackCursor, fiber);
  push(contextStackCursor, null);
  switch (nextRootInstance.nodeType) {
    case 9:
    case 11:
      fiber = (fiber = nextRootInstance.documentElement)
        ? (fiber = fiber.namespaceURI)
          ? getOwnHostContext(fiber)
          : 0
        : 0;
      break;
    default:
      if (
        ((fiber = nextRootInstance.tagName),
        (nextRootInstance = nextRootInstance.namespaceURI))
      )
        (nextRootInstance = getOwnHostContext(nextRootInstance)),
          (fiber = getChildHostContextProd(nextRootInstance, fiber));
      else
        switch (fiber) {
          case "svg":
            fiber = 1;
            break;
          case "math":
            fiber = 2;
            break;
          default:
            fiber = 0;
        }
  }
  pop(contextStackCursor);
  push(contextStackCursor, fiber);
}
function popHostContainer() {
  pop(contextStackCursor);
  pop(contextFiberStackCursor);
  pop(rootInstanceStackCursor);
}
function pushHostContext(fiber) {
  null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
  var context = contextStackCursor.current;
  var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
  context !== JSCompiler_inline_result &&
    (push(contextFiberStackCursor, fiber),
    push(contextStackCursor, JSCompiler_inline_result));
}
function popHostContext(fiber) {
  contextFiberStackCursor.current === fiber &&
    (pop(contextStackCursor), pop(contextFiberStackCursor));
  hostTransitionProviderCursor.current === fiber &&
    (pop(hostTransitionProviderCursor),
    (HostTransitionContext._currentValue = sharedNotPendingObject));
}
var hasOwnProperty = Object.prototype.hasOwnProperty,
  scheduleCallback$3 = Scheduler.unstable_scheduleCallback,
  cancelCallback$1 = Scheduler.unstable_cancelCallback,
  shouldYield = Scheduler.unstable_shouldYield,
  requestPaint = Scheduler.unstable_requestPaint,
  now = Scheduler.unstable_now,
  getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel,
  ImmediatePriority = Scheduler.unstable_ImmediatePriority,
  UserBlockingPriority = Scheduler.unstable_UserBlockingPriority,
  NormalPriority$1 = Scheduler.unstable_NormalPriority,
  LowPriority = Scheduler.unstable_LowPriority,
  IdlePriority = Scheduler.unstable_IdlePriority,
  log$1 = Scheduler.log,
  unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue,
  rendererID = null,
  injectedHook = null;
function setIsStrictModeForDevtools(newIsStrictMode) {
  "function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
  if (injectedHook && "function" === typeof injectedHook.setStrictMode)
    try {
      injectedHook.setStrictMode(rendererID, newIsStrictMode);
    } catch (err) {}
}
var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback,
  log = Math.log,
  LN2 = Math.LN2;
function clz32Fallback(x) {
  x >>>= 0;
  return 0 === x ? 32 : (31 - ((log(x) / LN2) | 0)) | 0;
}
var nextTransitionLane = 256,
  nextRetryLane = 4194304;
function getHighestPriorityLanes(lanes) {
  var pendingSyncLanes = lanes & 42;
  if (0 !== pendingSyncLanes) return pendingSyncLanes;
  switch (lanes & -lanes) {
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
      return 64;
    case 128:
      return 128;
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
      return lanes & 4194048;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return lanes & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return lanes;
  }
}
function getNextLanes(root, wipLanes, rootHasPendingCommit) {
  var pendingLanes = root.pendingLanes;
  if (0 === pendingLanes) return 0;
  var nextLanes = 0,
    suspendedLanes = root.suspendedLanes,
    pingedLanes = root.pingedLanes;
  root = root.warmLanes;
  var nonIdlePendingLanes = pendingLanes & 134217727;
  0 !== nonIdlePendingLanes
    ? ((pendingLanes = nonIdlePendingLanes & ~suspendedLanes),
      0 !== pendingLanes
        ? (nextLanes = getHighestPriorityLanes(pendingLanes))
        : ((pingedLanes &= nonIdlePendingLanes),
          0 !== pingedLanes
            ? (nextLanes = getHighestPriorityLanes(pingedLanes))
            : rootHasPendingCommit ||
              ((rootHasPendingCommit = nonIdlePendingLanes & ~root),
              0 !== rootHasPendingCommit &&
                (nextLanes = getHighestPriorityLanes(rootHasPendingCommit)))))
    : ((nonIdlePendingLanes = pendingLanes & ~suspendedLanes),
      0 !== nonIdlePendingLanes
        ? (nextLanes = getHighestPriorityLanes(nonIdlePendingLanes))
        : 0 !== pingedLanes
          ? (nextLanes = getHighestPriorityLanes(pingedLanes))
          : rootHasPendingCommit ||
            ((rootHasPendingCommit = pendingLanes & ~root),
            0 !== rootHasPendingCommit &&
              (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
  return 0 === nextLanes
    ? 0
    : 0 !== wipLanes &&
        wipLanes !== nextLanes &&
        0 === (wipLanes & suspendedLanes) &&
        ((suspendedLanes = nextLanes & -nextLanes),
        (rootHasPendingCommit = wipLanes & -wipLanes),
        suspendedLanes >= rootHasPendingCommit ||
          (32 === suspendedLanes && 0 !== (rootHasPendingCommit & 4194048)))
      ? wipLanes
      : nextLanes;
}
function checkIfRootIsPrerendering(root, renderLanes) {
  return (
    0 ===
    (root.pendingLanes &
      ~(root.suspendedLanes & ~root.pingedLanes) &
      renderLanes)
  );
}
function computeExpirationTime(lane, currentTime) {
  switch (lane) {
    case 1:
    case 2:
    case 4:
    case 8:
    case 64:
      return currentTime + 250;
    case 16:
    case 32:
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
      return currentTime + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function claimNextTransitionLane() {
  var lane = nextTransitionLane;
  nextTransitionLane <<= 1;
  0 === (nextTransitionLane & 4194048) && (nextTransitionLane = 256);
  return lane;
}
function claimNextRetryLane() {
  var lane = nextRetryLane;
  nextRetryLane <<= 1;
  0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
  return lane;
}
function createLaneMap(initial) {
  for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
  return laneMap;
}
function markRootUpdated$1(root, updateLane) {
  root.pendingLanes |= updateLane;
  268435456 !== updateLane &&
    ((root.suspendedLanes = 0), (root.pingedLanes = 0), (root.warmLanes = 0));
}
function markRootFinished(
  root,
  finishedLanes,
  remainingLanes,
  spawnedLane,
  updatedLanes,
  suspendedRetryLanes
) {
  var previouslyPendingLanes = root.pendingLanes;
  root.pendingLanes = remainingLanes;
  root.suspendedLanes = 0;
  root.pingedLanes = 0;
  root.warmLanes = 0;
  root.expiredLanes &= remainingLanes;
  root.entangledLanes &= remainingLanes;
  root.errorRecoveryDisabledLanes &= remainingLanes;
  root.shellSuspendCounter = 0;
  var entanglements = root.entanglements,
    expirationTimes = root.expirationTimes,
    hiddenUpdates = root.hiddenUpdates;
  for (
    remainingLanes = previouslyPendingLanes & ~remainingLanes;
    0 < remainingLanes;

  ) {
    var index$5 = 31 - clz32(remainingLanes),
      lane = 1 << index$5;
    entanglements[index$5] = 0;
    expirationTimes[index$5] = -1;
    var hiddenUpdatesForLane = hiddenUpdates[index$5];
    if (null !== hiddenUpdatesForLane)
      for (
        hiddenUpdates[index$5] = null, index$5 = 0;
        index$5 < hiddenUpdatesForLane.length;
        index$5++
      ) {
        var update = hiddenUpdatesForLane[index$5];
        null !== update && (update.lane &= -536870913);
      }
    remainingLanes &= ~lane;
  }
  0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, 0);
  0 !== suspendedRetryLanes &&
    0 === updatedLanes &&
    0 !== root.tag &&
    (root.suspendedLanes |=
      suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
}
function markSpawnedDeferredLane(root, spawnedLane, entangledLanes) {
  root.pendingLanes |= spawnedLane;
  root.suspendedLanes &= ~spawnedLane;
  var spawnedLaneIndex = 31 - clz32(spawnedLane);
  root.entangledLanes |= spawnedLane;
  root.entanglements[spawnedLaneIndex] =
    root.entanglements[spawnedLaneIndex] |
    1073741824 |
    (entangledLanes & 4194090);
}
function markRootEntangled(root, entangledLanes) {
  var rootEntangledLanes = (root.entangledLanes |= entangledLanes);
  for (root = root.entanglements; rootEntangledLanes; ) {
    var index$6 = 31 - clz32(rootEntangledLanes),
      lane = 1 << index$6;
    (lane & entangledLanes) | (root[index$6] & entangledLanes) &&
      (root[index$6] |= entangledLanes);
    rootEntangledLanes &= ~lane;
  }
}
function getBumpedLaneForHydrationByLane(lane) {
  switch (lane) {
    case 2:
      lane = 1;
      break;
    case 8:
      lane = 4;
      break;
    case 32:
      lane = 16;
      break;
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
      lane = 128;
      break;
    case 268435456:
      lane = 134217728;
      break;
    default:
      lane = 0;
  }
  return lane;
}
function lanesToEventPriority(lanes) {
  lanes &= -lanes;
  return 2 < lanes
    ? 8 < lanes
      ? 0 !== (lanes & 134217727)
        ? 32
        : 268435456
      : 8
    : 2;
}
function resolveUpdatePriority() {
  var updatePriority = ReactDOMSharedInternals.p;
  if (0 !== updatePriority) return updatePriority;
  updatePriority = window.event;
  return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
}
function runWithPriority(priority, fn) {
  var previousPriority = ReactDOMSharedInternals.p;
  try {
    return (ReactDOMSharedInternals.p = priority), fn();
  } finally {
    ReactDOMSharedInternals.p = previousPriority;
  }
}
var randomKey = Math.random().toString(36).slice(2),
  internalInstanceKey = "__reactFiber$" + randomKey,
  internalPropsKey = "__reactProps$" + randomKey,
  internalContainerInstanceKey = "__reactContainer$" + randomKey,
  internalEventHandlersKey = "__reactEvents$" + randomKey,
  internalEventHandlerListenersKey = "__reactListeners$" + randomKey,
  internalEventHandlesSetKey = "__reactHandles$" + randomKey,
  internalRootNodeResourcesKey = "__reactResources$" + randomKey,
  internalHoistableMarker = "__reactMarker$" + randomKey;
function detachDeletedInstance(node) {
  delete node[internalInstanceKey];
  delete node[internalPropsKey];
  delete node[internalEventHandlersKey];
  delete node[internalEventHandlerListenersKey];
  delete node[internalEventHandlesSetKey];
}
function getClosestInstanceFromNode(targetNode) {
  var targetInst = targetNode[internalInstanceKey];
  if (targetInst) return targetInst;
  for (var parentNode = targetNode.parentNode; parentNode; ) {
    if (
      (targetInst =
        parentNode[internalContainerInstanceKey] ||
        parentNode[internalInstanceKey])
    ) {
      parentNode = targetInst.alternate;
      if (
        null !== targetInst.child ||
        (null !== parentNode && null !== parentNode.child)
      )
        for (
          targetNode = getParentSuspenseInstance(targetNode);
          null !== targetNode;

        ) {
          if ((parentNode = targetNode[internalInstanceKey])) return parentNode;
          targetNode = getParentSuspenseInstance(targetNode);
        }
      return targetInst;
    }
    targetNode = parentNode;
    parentNode = targetNode.parentNode;
  }
  return null;
}
function getInstanceFromNode(node) {
  if (
    (node = node[internalInstanceKey] || node[internalContainerInstanceKey])
  ) {
    var tag = node.tag;
    if (
      5 === tag ||
      6 === tag ||
      13 === tag ||
      26 === tag ||
      27 === tag ||
      3 === tag
    )
      return node;
  }
  return null;
}
function getNodeFromInstance(inst) {
  var tag = inst.tag;
  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
  throw Error(formatProdErrorMessage(33));
}
function getResourcesFromRoot(root) {
  var resources = root[internalRootNodeResourcesKey];
  resources ||
    (resources = root[internalRootNodeResourcesKey] =
      { hoistableStyles: new Map(), hoistableScripts: new Map() });
  return resources;
}
function markNodeAsHoistable(node) {
  node[internalHoistableMarker] = !0;
}
var allNativeEvents = new Set(),
  registrationNameDependencies = {};
function registerTwoPhaseEvent(registrationName, dependencies) {
  registerDirectEvent(registrationName, dependencies);
  registerDirectEvent(registrationName + "Capture", dependencies);
}
function registerDirectEvent(registrationName, dependencies) {
  registrationNameDependencies[registrationName] = dependencies;
  for (
    registrationName = 0;
    registrationName < dependencies.length;
    registrationName++
  )
    allNativeEvents.add(dependencies[registrationName]);
}
var VALID_ATTRIBUTE_NAME_REGEX = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ),
  illegalAttributeNameCache = {},
  validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
    return !0;
  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
    return (validatedAttributeNameCache[attributeName] = !0);
  illegalAttributeNameCache[attributeName] = !0;
  return !1;
}
function setValueForAttribute(node, name, value) {
  if (isAttributeNameSafe(name))
    if (null === value) node.removeAttribute(name);
    else {
      switch (typeof value) {
        case "undefined":
        case "function":
        case "symbol":
          node.removeAttribute(name);
          return;
        case "boolean":
          var prefix$8 = name.toLowerCase().slice(0, 5);
          if ("data-" !== prefix$8 && "aria-" !== prefix$8) {
            node.removeAttribute(name);
            return;
          }
      }
      node.setAttribute(name, "" + value);
    }
}
function setValueForKnownAttribute(node, name, value) {
  if (null === value) node.removeAttribute(name);
  else {
    switch (typeof value) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        node.removeAttribute(name);
        return;
    }
    node.setAttribute(name, "" + value);
  }
}
function setValueForNamespacedAttribute(node, namespace, name, value) {
  if (null === value) node.removeAttribute(name);
  else {
    switch (typeof value) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        node.removeAttribute(name);
        return;
    }
    node.setAttributeNS(namespace, name, "" + value);
  }
}
var prefix, suffix;
function describeBuiltInComponentFrame(name) {
  if (void 0 === prefix)
    try {
      throw Error();
    } catch (x) {
      var match = x.stack.trim().match(/\n( *(at )?)/);
      prefix = (match && match[1]) || "";
      suffix =
        -1 < x.stack.indexOf("\n    at")
          ? " (<anonymous>)"
          : -1 < x.stack.indexOf("@")
            ? "@unknown:0:0"
            : "";
    }
  return "\n" + prefix + name + suffix;
}
var reentry = !1;
function describeNativeComponentFrame(fn, construct) {
  if (!fn || reentry) return "";
  reentry = !0;
  var previousPrepareStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var RunInRootFrame = {
      DetermineComponentFrameRoot: function () {
        try {
          if (construct) {
            var Fake = function () {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function () {
                throw Error();
              }
            });
            if ("object" === typeof Reflect && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                var control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x$9) {
                control = x$9;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x$10) {
              control = x$10;
            }
            (Fake = fn()) &&
              "function" === typeof Fake.catch &&
              Fake.catch(function () {});
          }
        } catch (sample) {
          if (sample && control && "string" === typeof sample.stack)
            return [sample.stack, control.stack];
        }
        return [null, null];
      }
    };
    RunInRootFrame.DetermineComponentFrameRoot.displayName =
      "DetermineComponentFrameRoot";
    var namePropDescriptor = Object.getOwnPropertyDescriptor(
      RunInRootFrame.DetermineComponentFrameRoot,
      "name"
    );
    namePropDescriptor &&
      namePropDescriptor.configurable &&
      Object.defineProperty(
        RunInRootFrame.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
    var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(),
      sampleStack = _RunInRootFrame$Deter[0],
      controlStack = _RunInRootFrame$Deter[1];
    if (sampleStack && controlStack) {
      var sampleLines = sampleStack.split("\n"),
        controlLines = controlStack.split("\n");
      for (
        namePropDescriptor = RunInRootFrame = 0;
        RunInRootFrame < sampleLines.length &&
        !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");

      )
        RunInRootFrame++;
      for (
        ;
        namePropDescriptor < controlLines.length &&
        !controlLines[namePropDescriptor].includes(
          "DetermineComponentFrameRoot"
        );

      )
        namePropDescriptor++;
      if (
        RunInRootFrame === sampleLines.length ||
        namePropDescriptor === controlLines.length
      )
        for (
          RunInRootFrame = sampleLines.length - 1,
            namePropDescriptor = controlLines.length - 1;
          1 <= RunInRootFrame &&
          0 <= namePropDescriptor &&
          sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];

        )
          namePropDescriptor--;
      for (
        ;
        1 <= RunInRootFrame && 0 <= namePropDescriptor;
        RunInRootFrame--, namePropDescriptor--
      )
        if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
          if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
            do
              if (
                (RunInRootFrame--,
                namePropDescriptor--,
                0 > namePropDescriptor ||
                  sampleLines[RunInRootFrame] !==
                    controlLines[namePropDescriptor])
              ) {
                var frame =
                  "\n" +
                  sampleLines[RunInRootFrame].replace(" at new ", " at ");
                fn.displayName &&
                  frame.includes("<anonymous>") &&
                  (frame = frame.replace("<anonymous>", fn.displayName));
                return frame;
              }
            while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
          }
          break;
        }
    }
  } finally {
    (reentry = !1), (Error.prepareStackTrace = previousPrepareStackTrace);
  }
  return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "")
    ? describeBuiltInComponentFrame(previousPrepareStackTrace)
    : "";
}
function describeFiber(fiber) {
  switch (fiber.tag) {
    case 26:
    case 27:
    case 5:
      return describeBuiltInComponentFrame(fiber.type);
    case 16:
      return describeBuiltInComponentFrame("Lazy");
    case 13:
      return describeBuiltInComponentFrame("Suspense");
    case 19:
      return describeBuiltInComponentFrame("SuspenseList");
    case 0:
    case 15:
      return describeNativeComponentFrame(fiber.type, !1);
    case 11:
      return describeNativeComponentFrame(fiber.type.render, !1);
    case 1:
      return describeNativeComponentFrame(fiber.type, !0);
    case 31:
      return describeBuiltInComponentFrame("Activity");
    default:
      return "";
  }
}
function getStackByFiberInDevAndProd(workInProgress) {
  try {
    var info = "";
    do
      (info += describeFiber(workInProgress)),
        (workInProgress = workInProgress.return);
    while (workInProgress);
    return info;
  } catch (x) {
    return "\nError generating stack: " + x.message + "\n" + x.stack;
  }
}
function getToStringValue(value) {
  switch (typeof value) {
    case "bigint":
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return value;
    case "object":
      return value;
    default:
      return "";
  }
}
function isCheckable(elem) {
  var type = elem.type;
  return (
    (elem = elem.nodeName) &&
    "input" === elem.toLowerCase() &&
    ("checkbox" === type || "radio" === type)
  );
}
function trackValueOnNode(node) {
  var valueField = isCheckable(node) ? "checked" : "value",
    descriptor = Object.getOwnPropertyDescriptor(
      node.constructor.prototype,
      valueField
    ),
    currentValue = "" + node[valueField];
  if (
    !node.hasOwnProperty(valueField) &&
    "undefined" !== typeof descriptor &&
    "function" === typeof descriptor.get &&
    "function" === typeof descriptor.set
  ) {
    var get = descriptor.get,
      set = descriptor.set;
    Object.defineProperty(node, valueField, {
      configurable: !0,
      get: function () {
        return get.call(this);
      },
      set: function (value) {
        currentValue = "" + value;
        set.call(this, value);
      }
    });
    Object.defineProperty(node, valueField, {
      enumerable: descriptor.enumerable
    });
    return {
      getValue: function () {
        return currentValue;
      },
      setValue: function (value) {
        currentValue = "" + value;
      },
      stopTracking: function () {
        node._valueTracker = null;
        delete node[valueField];
      }
    };
  }
}
function track(node) {
  node._valueTracker || (node._valueTracker = trackValueOnNode(node));
}
function updateValueIfChanged(node) {
  if (!node) return !1;
  var tracker = node._valueTracker;
  if (!tracker) return !0;
  var lastValue = tracker.getValue();
  var value = "";
  node &&
    (value = isCheckable(node)
      ? node.checked
        ? "true"
        : "false"
      : node.value);
  node = value;
  return node !== lastValue ? (tracker.setValue(node), !0) : !1;
}
function getActiveElement(doc) {
  doc = doc || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof doc) return null;
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
  return value.replace(
    escapeSelectorAttributeValueInsideDoubleQuotesRegex,
    function (ch) {
      return "\\" + ch.charCodeAt(0).toString(16) + " ";
    }
  );
}
function updateInput(
  element,
  value,
  defaultValue,
  lastDefaultValue,
  checked,
  defaultChecked,
  type,
  name
) {
  element.name = "";
  null != type &&
  "function" !== typeof type &&
  "symbol" !== typeof type &&
  "boolean" !== typeof type
    ? (element.type = type)
    : element.removeAttribute("type");
  if (null != value)
    if ("number" === type) {
      if ((0 === value && "" === element.value) || element.value != value)
        element.value = "" + getToStringValue(value);
    } else
      element.value !== "" + getToStringValue(value) &&
        (element.value = "" + getToStringValue(value));
  else
    ("submit" !== type && "reset" !== type) || element.removeAttribute("value");
  null != value
    ? setDefaultValue(element, type, getToStringValue(value))
    : null != defaultValue
      ? setDefaultValue(element, type, getToStringValue(defaultValue))
      : null != lastDefaultValue && element.removeAttribute("value");
  null == checked &&
    null != defaultChecked &&
    (element.defaultChecked = !!defaultChecked);
  null != checked &&
    (element.checked =
      checked && "function" !== typeof checked && "symbol" !== typeof checked);
  null != name &&
  "function" !== typeof name &&
  "symbol" !== typeof name &&
  "boolean" !== typeof name
    ? (element.name = "" + getToStringValue(name))
    : element.removeAttribute("name");
}
function initInput(
  element,
  value,
  defaultValue,
  checked,
  defaultChecked,
  type,
  name,
  isHydrating
) {
  null != type &&
    "function" !== typeof type &&
    "symbol" !== typeof type &&
    "boolean" !== typeof type &&
    (element.type = type);
  if (null != value || null != defaultValue) {
    if (
      !(
        ("submit" !== type && "reset" !== type) ||
        (void 0 !== value && null !== value)
      )
    )
      return;
    defaultValue =
      null != defaultValue ? "" + getToStringValue(defaultValue) : "";
    value = null != value ? "" + getToStringValue(value) : defaultValue;
    isHydrating || value === element.value || (element.value = value);
    element.defaultValue = value;
  }
  checked = null != checked ? checked : defaultChecked;
  checked =
    "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
  element.checked = isHydrating ? element.checked : !!checked;
  element.defaultChecked = !!checked;
  null != name &&
    "function" !== typeof name &&
    "symbol" !== typeof name &&
    "boolean" !== typeof name &&
    (element.name = name);
}
function setDefaultValue(node, type, value) {
  ("number" === type && getActiveElement(node.ownerDocument) === node) ||
    node.defaultValue === "" + value ||
    (node.defaultValue = "" + value);
}
function updateOptions(node, multiple, propValue, setDefaultSelected) {
  node = node.options;
  if (multiple) {
    multiple = {};
    for (var i = 0; i < propValue.length; i++)
      multiple["$" + propValue[i]] = !0;
    for (propValue = 0; propValue < node.length; propValue++)
      (i = multiple.hasOwnProperty("$" + node[propValue].value)),
        node[propValue].selected !== i && (node[propValue].selected = i),
        i && setDefaultSelected && (node[propValue].defaultSelected = !0);
  } else {
    propValue = "" + getToStringValue(propValue);
    multiple = null;
    for (i = 0; i < node.length; i++) {
      if (node[i].value === propValue) {
        node[i].selected = !0;
        setDefaultSelected && (node[i].defaultSelected = !0);
        return;
      }
      null !== multiple || node[i].disabled || (multiple = node[i]);
    }
    null !== multiple && (multiple.selected = !0);
  }
}
function updateTextarea(element, value, defaultValue) {
  if (
    null != value &&
    ((value = "" + getToStringValue(value)),
    value !== element.value && (element.value = value),
    null == defaultValue)
  ) {
    element.defaultValue !== value && (element.defaultValue = value);
    return;
  }
  element.defaultValue =
    null != defaultValue ? "" + getToStringValue(defaultValue) : "";
}
function initTextarea(element, value, defaultValue, children) {
  if (null == value) {
    if (null != children) {
      if (null != defaultValue) throw Error(formatProdErrorMessage(92));
      if (isArrayImpl(children)) {
        if (1 < children.length) throw Error(formatProdErrorMessage(93));
        children = children[0];
      }
      defaultValue = children;
    }
    null == defaultValue && (defaultValue = "");
    value = defaultValue;
  }
  defaultValue = getToStringValue(value);
  element.defaultValue = defaultValue;
  children = element.textContent;
  children === defaultValue &&
    "" !== children &&
    null !== children &&
    (element.value = children);
}
function setTextContent(node, text) {
  if (text) {
    var firstChild = node.firstChild;
    if (
      firstChild &&
      firstChild === node.lastChild &&
      3 === firstChild.nodeType
    ) {
      firstChild.nodeValue = text;
      return;
    }
  }
  node.textContent = text;
}
var unitlessNumbers = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
);
function setValueForStyle(style, styleName, value) {
  var isCustomProperty = 0 === styleName.indexOf("--");
  null == value || "boolean" === typeof value || "" === value
    ? isCustomProperty
      ? style.setProperty(styleName, "")
      : "float" === styleName
        ? (style.cssFloat = "")
        : (style[styleName] = "")
    : isCustomProperty
      ? style.setProperty(styleName, value)
      : "number" !== typeof value ||
          0 === value ||
          unitlessNumbers.has(styleName)
        ? "float" === styleName
          ? (style.cssFloat = value)
          : (style[styleName] = ("" + value).trim())
        : (style[styleName] = value + "px");
}
function setValueForStyles(node, styles, prevStyles) {
  if (null != styles && "object" !== typeof styles)
    throw Error(formatProdErrorMessage(62));
  node = node.style;
  if (null != prevStyles) {
    for (var styleName in prevStyles)
      !prevStyles.hasOwnProperty(styleName) ||
        (null != styles && styles.hasOwnProperty(styleName)) ||
        (0 === styleName.indexOf("--")
          ? node.setProperty(styleName, "")
          : "float" === styleName
            ? (node.cssFloat = "")
            : (node[styleName] = ""));
    for (var styleName$16 in styles)
      (styleName = styles[styleName$16]),
        styles.hasOwnProperty(styleName$16) &&
          prevStyles[styleName$16] !== styleName &&
          setValueForStyle(node, styleName$16, styleName);
  } else
    for (var styleName$17 in styles)
      styles.hasOwnProperty(styleName$17) &&
        setValueForStyle(node, styleName$17, styles[styleName$17]);
}
function isCustomElement(tagName) {
  if (-1 === tagName.indexOf("-")) return !1;
  switch (tagName) {
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
var aliases = new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]),
  isJavaScriptProtocol =
    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function sanitizeURL(url) {
  return isJavaScriptProtocol.test("" + url)
    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
    : url;
}
var currentReplayingEvent = null;
function getEventTarget(nativeEvent) {
  nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
  nativeEvent.correspondingUseElement &&
    (nativeEvent = nativeEvent.correspondingUseElement);
  return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
}
var restoreTarget = null,
  restoreQueue = null;
function restoreStateOfTarget(target) {
  var internalInstance = getInstanceFromNode(target);
  if (internalInstance && (target = internalInstance.stateNode)) {
    var props = target[internalPropsKey] || null;
    a: switch (((target = internalInstance.stateNode), internalInstance.type)) {
      case "input":
        updateInput(
          target,
          props.value,
          props.defaultValue,
          props.defaultValue,
          props.checked,
          props.defaultChecked,
          props.type,
          props.name
        );
        internalInstance = props.name;
        if ("radio" === props.type && null != internalInstance) {
          for (props = target; props.parentNode; ) props = props.parentNode;
          props = props.querySelectorAll(
            'input[name="' +
              escapeSelectorAttributeValueInsideDoubleQuotes(
                "" + internalInstance
              ) +
              '"][type="radio"]'
          );
          for (
            internalInstance = 0;
            internalInstance < props.length;
            internalInstance++
          ) {
            var otherNode = props[internalInstance];
            if (otherNode !== target && otherNode.form === target.form) {
              var otherProps = otherNode[internalPropsKey] || null;
              if (!otherProps) throw Error(formatProdErrorMessage(90));
              updateInput(
                otherNode,
                otherProps.value,
                otherProps.defaultValue,
                otherProps.defaultValue,
                otherProps.checked,
                otherProps.defaultChecked,
                otherProps.type,
                otherProps.name
              );
            }
          }
          for (
            internalInstance = 0;
            internalInstance < props.length;
            internalInstance++
          )
            (otherNode = props[internalInstance]),
              otherNode.form === target.form && updateValueIfChanged(otherNode);
        }
        break a;
      case "textarea":
        updateTextarea(target, props.value, props.defaultValue);
        break a;
      case "select":
        (internalInstance = props.value),
          null != internalInstance &&
            updateOptions(target, !!props.multiple, internalInstance, !1);
    }
  }
}
var isInsideEventHandler = !1;
function batchedUpdates$1(fn, a, b) {
  if (isInsideEventHandler) return fn(a, b);
  isInsideEventHandler = !0;
  try {
    var JSCompiler_inline_result = fn(a);
    return JSCompiler_inline_result;
  } finally {
    if (
      ((isInsideEventHandler = !1),
      null !== restoreTarget || null !== restoreQueue)
    )
      if (
        (flushSyncWork$1(),
        restoreTarget &&
          ((a = restoreTarget),
          (fn = restoreQueue),
          (restoreQueue = restoreTarget = null),
          restoreStateOfTarget(a),
          fn))
      )
        for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
  }
}
function getListener(inst, registrationName) {
  var stateNode = inst.stateNode;
  if (null === stateNode) return null;
  var props = stateNode[internalPropsKey] || null;
  if (null === props) return null;
  stateNode = props[registrationName];
  a: switch (registrationName) {
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
      (props = !props.disabled) ||
        ((inst = inst.type),
        (props = !(
          "button" === inst ||
          "input" === inst ||
          "select" === inst ||
          "textarea" === inst
        )));
      inst = !props;
      break a;
    default:
      inst = !1;
  }
  if (inst) return null;
  if (stateNode && "function" !== typeof stateNode)
    throw Error(
      formatProdErrorMessage(231, registrationName, typeof stateNode)
    );
  return stateNode;
}
var canUseDOM = !(
    "undefined" === typeof window ||
    "undefined" === typeof window.document ||
    "undefined" === typeof window.document.createElement
  ),
  passiveBrowserEventsSupported = !1;
if (canUseDOM)
  try {
    var options = {};
    Object.defineProperty(options, "passive", {
      get: function () {
        passiveBrowserEventsSupported = !0;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (e) {
    passiveBrowserEventsSupported = !1;
  }
var root = null,
  startText = null,
  fallbackText = null;
function getData() {
  if (fallbackText) return fallbackText;
  var start,
    startValue = startText,
    startLength = startValue.length,
    end,
    endValue = "value" in root ? root.value : root.textContent,
    endLength = endValue.length;
  for (
    start = 0;
    start < startLength && startValue[start] === endValue[start];
    start++
  );
  var minEnd = startLength - start;
  for (
    end = 1;
    end <= minEnd &&
    startValue[startLength - end] === endValue[endLength - end];
    end++
  );
  return (fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0));
}
function getEventCharCode(nativeEvent) {
  var keyCode = nativeEvent.keyCode;
  "charCode" in nativeEvent
    ? ((nativeEvent = nativeEvent.charCode),
      0 === nativeEvent && 13 === keyCode && (nativeEvent = 13))
    : (nativeEvent = keyCode);
  10 === nativeEvent && (nativeEvent = 13);
  return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
}
function functionThatReturnsTrue() {
  return !0;
}
function functionThatReturnsFalse() {
  return !1;
}
function createSyntheticEvent(Interface) {
  function SyntheticBaseEvent(
    reactName,
    reactEventType,
    targetInst,
    nativeEvent,
    nativeEventTarget
  ) {
    this._reactName = reactName;
    this._targetInst = targetInst;
    this.type = reactEventType;
    this.nativeEvent = nativeEvent;
    this.target = nativeEventTarget;
    this.currentTarget = null;
    for (var propName in Interface)
      Interface.hasOwnProperty(propName) &&
        ((reactName = Interface[propName]),
        (this[propName] = reactName
          ? reactName(nativeEvent)
          : nativeEvent[propName]));
    this.isDefaultPrevented = (
      null != nativeEvent.defaultPrevented
        ? nativeEvent.defaultPrevented
        : !1 === nativeEvent.returnValue
    )
      ? functionThatReturnsTrue
      : functionThatReturnsFalse;
    this.isPropagationStopped = functionThatReturnsFalse;
    return this;
  }
  assign(SyntheticBaseEvent.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var event = this.nativeEvent;
      event &&
        (event.preventDefault
          ? event.preventDefault()
          : "unknown" !== typeof event.returnValue && (event.returnValue = !1),
        (this.isDefaultPrevented = functionThatReturnsTrue));
    },
    stopPropagation: function () {
      var event = this.nativeEvent;
      event &&
        (event.stopPropagation
          ? event.stopPropagation()
          : "unknown" !== typeof event.cancelBubble &&
            (event.cancelBubble = !0),
        (this.isPropagationStopped = functionThatReturnsTrue));
    },
    persist: function () {},
    isPersistent: functionThatReturnsTrue
  });
  return SyntheticBaseEvent;
}
var EventInterface = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (event) {
      return event.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  SyntheticEvent = createSyntheticEvent(EventInterface),
  UIEventInterface = assign({}, EventInterface, { view: 0, detail: 0 }),
  SyntheticUIEvent = createSyntheticEvent(UIEventInterface),
  lastMovementX,
  lastMovementY,
  lastMouseEvent,
  MouseEventInterface = assign({}, UIEventInterface, {
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
    getModifierState: getEventModifierState,
    button: 0,
    buttons: 0,
    relatedTarget: function (event) {
      return void 0 === event.relatedTarget
        ? event.fromElement === event.srcElement
          ? event.toElement
          : event.fromElement
        : event.relatedTarget;
    },
    movementX: function (event) {
      if ("movementX" in event) return event.movementX;
      event !== lastMouseEvent &&
        (lastMouseEvent && "mousemove" === event.type
          ? ((lastMovementX = event.screenX - lastMouseEvent.screenX),
            (lastMovementY = event.screenY - lastMouseEvent.screenY))
          : (lastMovementY = lastMovementX = 0),
        (lastMouseEvent = event));
      return lastMovementX;
    },
    movementY: function (event) {
      return "movementY" in event ? event.movementY : lastMovementY;
    }
  }),
  SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface),
  DragEventInterface = assign({}, MouseEventInterface, { dataTransfer: 0 }),
  SyntheticDragEvent = createSyntheticEvent(DragEventInterface),
  FocusEventInterface = assign({}, UIEventInterface, { relatedTarget: 0 }),
  SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface),
  AnimationEventInterface = assign({}, EventInterface, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface),
  ClipboardEventInterface = assign({}, EventInterface, {
    clipboardData: function (event) {
      return "clipboardData" in event
        ? event.clipboardData
        : window.clipboardData;
    }
  }),
  SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface),
  CompositionEventInterface = assign({}, EventInterface, { data: 0 }),
  SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface),
  normalizeKey = {
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
    MozPrintableKey: "Unidentified"
  },
  translateToKey = {
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
    224: "Meta"
  },
  modifierKeyToProp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
function modifierStateGetter(keyArg) {
  var nativeEvent = this.nativeEvent;
  return nativeEvent.getModifierState
    ? nativeEvent.getModifierState(keyArg)
    : (keyArg = modifierKeyToProp[keyArg])
      ? !!nativeEvent[keyArg]
      : !1;
}
function getEventModifierState() {
  return modifierStateGetter;
}
var KeyboardEventInterface = assign({}, UIEventInterface, {
    key: function (nativeEvent) {
      if (nativeEvent.key) {
        var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
        if ("Unidentified" !== key) return key;
      }
      return "keypress" === nativeEvent.type
        ? ((nativeEvent = getEventCharCode(nativeEvent)),
          13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent))
        : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type
          ? translateToKey[nativeEvent.keyCode] || "Unidentified"
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
    getModifierState: getEventModifierState,
    charCode: function (event) {
      return "keypress" === event.type ? getEventCharCode(event) : 0;
    },
    keyCode: function (event) {
      return "keydown" === event.type || "keyup" === event.type
        ? event.keyCode
        : 0;
    },
    which: function (event) {
      return "keypress" === event.type
        ? getEventCharCode(event)
        : "keydown" === event.type || "keyup" === event.type
          ? event.keyCode
          : 0;
    }
  }),
  SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface),
  PointerEventInterface = assign({}, MouseEventInterface, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface),
  TouchEventInterface = assign({}, UIEventInterface, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: getEventModifierState
  }),
  SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface),
  TransitionEventInterface = assign({}, EventInterface, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface),
  WheelEventInterface = assign({}, MouseEventInterface, {
    deltaX: function (event) {
      return "deltaX" in event
        ? event.deltaX
        : "wheelDeltaX" in event
          ? -event.wheelDeltaX
          : 0;
    },
    deltaY: function (event) {
      return "deltaY" in event
        ? event.deltaY
        : "wheelDeltaY" in event
          ? -event.wheelDeltaY
          : "wheelDelta" in event
            ? -event.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface),
  ToggleEventInterface = assign({}, EventInterface, {
    newState: 0,
    oldState: 0
  }),
  SyntheticToggleEvent = createSyntheticEvent(ToggleEventInterface),
  END_KEYCODES = [9, 13, 27, 32],
  canUseCompositionEvent = canUseDOM && "CompositionEvent" in window,
  documentMode = null;
canUseDOM &&
  "documentMode" in document &&
  (documentMode = document.documentMode);
var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode,
  useFallbackCompositionData =
    canUseDOM &&
    (!canUseCompositionEvent ||
      (documentMode && 8 < documentMode && 11 >= documentMode)),
  SPACEBAR_CHAR = String.fromCharCode(32),
  hasSpaceKeypress = !1;
function isFallbackCompositionEnd(domEventName, nativeEvent) {
  switch (domEventName) {
    case "keyup":
      return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
    case "keydown":
      return 229 !== nativeEvent.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function getDataFromCustomEvent(nativeEvent) {
  nativeEvent = nativeEvent.detail;
  return "object" === typeof nativeEvent && "data" in nativeEvent
    ? nativeEvent.data
    : null;
}
var isComposing = !1;
function getNativeBeforeInputChars(domEventName, nativeEvent) {
  switch (domEventName) {
    case "compositionend":
      return getDataFromCustomEvent(nativeEvent);
    case "keypress":
      if (32 !== nativeEvent.which) return null;
      hasSpaceKeypress = !0;
      return SPACEBAR_CHAR;
    case "textInput":
      return (
        (domEventName = nativeEvent.data),
        domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName
      );
    default:
      return null;
  }
}
function getFallbackBeforeInputChars(domEventName, nativeEvent) {
  if (isComposing)
    return "compositionend" === domEventName ||
      (!canUseCompositionEvent &&
        isFallbackCompositionEnd(domEventName, nativeEvent))
      ? ((domEventName = getData()),
        (fallbackText = startText = root = null),
        (isComposing = !1),
        domEventName)
      : null;
  switch (domEventName) {
    case "paste":
      return null;
    case "keypress":
      if (
        !(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) ||
        (nativeEvent.ctrlKey && nativeEvent.altKey)
      ) {
        if (nativeEvent.char && 1 < nativeEvent.char.length)
          return nativeEvent.char;
        if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
      }
      return null;
    case "compositionend":
      return useFallbackCompositionData && "ko" !== nativeEvent.locale
        ? null
        : nativeEvent.data;
    default:
      return null;
  }
}
var supportedInputTypes = {
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
  week: !0
};
function isTextInputElement(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return "input" === nodeName
    ? !!supportedInputTypes[elem.type]
    : "textarea" === nodeName
      ? !0
      : !1;
}
function createAndAccumulateChangeEvent(
  dispatchQueue,
  inst,
  nativeEvent,
  target
) {
  restoreTarget
    ? restoreQueue
      ? restoreQueue.push(target)
      : (restoreQueue = [target])
    : (restoreTarget = target);
  inst = accumulateTwoPhaseListeners(inst, "onChange");
  0 < inst.length &&
    ((nativeEvent = new SyntheticEvent(
      "onChange",
      "change",
      null,
      nativeEvent,
      target
    )),
    dispatchQueue.push({ event: nativeEvent, listeners: inst }));
}
var activeElement$1 = null,
  activeElementInst$1 = null;
function runEventInBatch(dispatchQueue) {
  processDispatchQueue(dispatchQueue, 0);
}
function getInstIfValueChanged(targetInst) {
  var targetNode = getNodeFromInstance(targetInst);
  if (updateValueIfChanged(targetNode)) return targetInst;
}
function getTargetInstForChangeEvent(domEventName, targetInst) {
  if ("change" === domEventName) return targetInst;
}
var isInputEventSupported = !1;
if (canUseDOM) {
  var JSCompiler_inline_result$jscomp$282;
  if (canUseDOM) {
    var isSupported$jscomp$inline_417 = "oninput" in document;
    if (!isSupported$jscomp$inline_417) {
      var element$jscomp$inline_418 = document.createElement("div");
      element$jscomp$inline_418.setAttribute("oninput", "return;");
      isSupported$jscomp$inline_417 =
        "function" === typeof element$jscomp$inline_418.oninput;
    }
    JSCompiler_inline_result$jscomp$282 = isSupported$jscomp$inline_417;
  } else JSCompiler_inline_result$jscomp$282 = !1;
  isInputEventSupported =
    JSCompiler_inline_result$jscomp$282 &&
    (!document.documentMode || 9 < document.documentMode);
}
function stopWatchingForValueChange() {
  activeElement$1 &&
    (activeElement$1.detachEvent("onpropertychange", handlePropertyChange),
    (activeElementInst$1 = activeElement$1 = null));
}
function handlePropertyChange(nativeEvent) {
  if (
    "value" === nativeEvent.propertyName &&
    getInstIfValueChanged(activeElementInst$1)
  ) {
    var dispatchQueue = [];
    createAndAccumulateChangeEvent(
      dispatchQueue,
      activeElementInst$1,
      nativeEvent,
      getEventTarget(nativeEvent)
    );
    batchedUpdates$1(runEventInBatch, dispatchQueue);
  }
}
function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
  "focusin" === domEventName
    ? (stopWatchingForValueChange(),
      (activeElement$1 = target),
      (activeElementInst$1 = targetInst),
      activeElement$1.attachEvent("onpropertychange", handlePropertyChange))
    : "focusout" === domEventName && stopWatchingForValueChange();
}
function getTargetInstForInputEventPolyfill(domEventName) {
  if (
    "selectionchange" === domEventName ||
    "keyup" === domEventName ||
    "keydown" === domEventName
  )
    return getInstIfValueChanged(activeElementInst$1);
}
function getTargetInstForClickEvent(domEventName, targetInst) {
  if ("click" === domEventName) return getInstIfValueChanged(targetInst);
}
function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
  if ("input" === domEventName || "change" === domEventName)
    return getInstIfValueChanged(targetInst);
}
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is;
function shallowEqual(objA, objB) {
  if (objectIs(objA, objB)) return !0;
  if (
    "object" !== typeof objA ||
    null === objA ||
    "object" !== typeof objB ||
    null === objB
  )
    return !1;
  var keysA = Object.keys(objA),
    keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return !1;
  for (keysB = 0; keysB < keysA.length; keysB++) {
    var currentKey = keysA[keysB];
    if (
      !hasOwnProperty.call(objB, currentKey) ||
      !objectIs(objA[currentKey], objB[currentKey])
    )
      return !1;
  }
  return !0;
}
function getLeafNode(node) {
  for (; node && node.firstChild; ) node = node.firstChild;
  return node;
}
function getNodeForCharacterOffset(root, offset) {
  var node = getLeafNode(root);
  root = 0;
  for (var nodeEnd; node; ) {
    if (3 === node.nodeType) {
      nodeEnd = root + node.textContent.length;
      if (root <= offset && nodeEnd >= offset)
        return { node: node, offset: offset - root };
      root = nodeEnd;
    }
    a: {
      for (; node; ) {
        if (node.nextSibling) {
          node = node.nextSibling;
          break a;
        }
        node = node.parentNode;
      }
      node = void 0;
    }
    node = getLeafNode(node);
  }
}
function containsNode(outerNode, innerNode) {
  return outerNode && innerNode
    ? outerNode === innerNode
      ? !0
      : outerNode && 3 === outerNode.nodeType
        ? !1
        : innerNode && 3 === innerNode.nodeType
          ? containsNode(outerNode, innerNode.parentNode)
          : "contains" in outerNode
            ? outerNode.contains(innerNode)
            : outerNode.compareDocumentPosition
              ? !!(outerNode.compareDocumentPosition(innerNode) & 16)
              : !1
    : !1;
}
function getActiveElementDeep(containerInfo) {
  containerInfo =
    null != containerInfo &&
    null != containerInfo.ownerDocument &&
    null != containerInfo.ownerDocument.defaultView
      ? containerInfo.ownerDocument.defaultView
      : window;
  for (
    var element = getActiveElement(containerInfo.document);
    element instanceof containerInfo.HTMLIFrameElement;

  ) {
    try {
      var JSCompiler_inline_result =
        "string" === typeof element.contentWindow.location.href;
    } catch (err) {
      JSCompiler_inline_result = !1;
    }
    if (JSCompiler_inline_result) containerInfo = element.contentWindow;
    else break;
    element = getActiveElement(containerInfo.document);
  }
  return element;
}
function hasSelectionCapabilities(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return (
    nodeName &&
    (("input" === nodeName &&
      ("text" === elem.type ||
        "search" === elem.type ||
        "tel" === elem.type ||
        "url" === elem.type ||
        "password" === elem.type)) ||
      "textarea" === nodeName ||
      "true" === elem.contentEditable)
  );
}
var skipSelectionChangeEvent =
    canUseDOM && "documentMode" in document && 11 >= document.documentMode,
  activeElement = null,
  activeElementInst = null,
  lastSelection = null,
  mouseDown = !1;
function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
  var doc =
    nativeEventTarget.window === nativeEventTarget
      ? nativeEventTarget.document
      : 9 === nativeEventTarget.nodeType
        ? nativeEventTarget
        : nativeEventTarget.ownerDocument;
  mouseDown ||
    null == activeElement ||
    activeElement !== getActiveElement(doc) ||
    ((doc = activeElement),
    "selectionStart" in doc && hasSelectionCapabilities(doc)
      ? (doc = { start: doc.selectionStart, end: doc.selectionEnd })
      : ((doc = (
          (doc.ownerDocument && doc.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (doc = {
          anchorNode: doc.anchorNode,
          anchorOffset: doc.anchorOffset,
          focusNode: doc.focusNode,
          focusOffset: doc.focusOffset
        })),
    (lastSelection && shallowEqual(lastSelection, doc)) ||
      ((lastSelection = doc),
      (doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect")),
      0 < doc.length &&
        ((nativeEvent = new SyntheticEvent(
          "onSelect",
          "select",
          null,
          nativeEvent,
          nativeEventTarget
        )),
        dispatchQueue.push({ event: nativeEvent, listeners: doc }),
        (nativeEvent.target = activeElement))));
}
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit" + styleProp] = "webkit" + eventName;
  prefixes["Moz" + styleProp] = "moz" + eventName;
  return prefixes;
}
var vendorPrefixes = {
    animationend: makePrefixMap("Animation", "AnimationEnd"),
    animationiteration: makePrefixMap("Animation", "AnimationIteration"),
    animationstart: makePrefixMap("Animation", "AnimationStart"),
    transitionrun: makePrefixMap("Transition", "TransitionRun"),
    transitionstart: makePrefixMap("Transition", "TransitionStart"),
    transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
    transitionend: makePrefixMap("Transition", "TransitionEnd")
  },
  prefixedEventNames = {},
  style = {};
canUseDOM &&
  ((style = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vendorPrefixes.animationend.animation,
    delete vendorPrefixes.animationiteration.animation,
    delete vendorPrefixes.animationstart.animation),
  "TransitionEvent" in window ||
    delete vendorPrefixes.transitionend.transition);
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
  if (!vendorPrefixes[eventName]) return eventName;
  var prefixMap = vendorPrefixes[eventName],
    styleProp;
  for (styleProp in prefixMap)
    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
      return (prefixedEventNames[eventName] = prefixMap[styleProp]);
  return eventName;
}
var ANIMATION_END = getVendorPrefixedEventName("animationend"),
  ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration"),
  ANIMATION_START = getVendorPrefixedEventName("animationstart"),
  TRANSITION_RUN = getVendorPrefixedEventName("transitionrun"),
  TRANSITION_START = getVendorPrefixedEventName("transitionstart"),
  TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel"),
  TRANSITION_END = getVendorPrefixedEventName("transitionend"),
  topLevelEventsToReactNames = new Map(),
  simpleEventPluginEvents =
    "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
simpleEventPluginEvents.push("scrollEnd");
function registerSimpleEvent(domEventName, reactName) {
  topLevelEventsToReactNames.set(domEventName, reactName);
  registerTwoPhaseEvent(reactName, [domEventName]);
}
var CapturedStacks = new WeakMap();
function createCapturedValueAtFiber(value, source) {
  if ("object" === typeof value && null !== value) {
    var existing = CapturedStacks.get(value);
    if (void 0 !== existing) return existing;
    source = {
      value: value,
      source: source,
      stack: getStackByFiberInDevAndProd(source)
    };
    CapturedStacks.set(value, source);
    return source;
  }
  return {
    value: value,
    source: source,
    stack: getStackByFiberInDevAndProd(source)
  };
}
var concurrentQueues = [],
  concurrentQueuesIndex = 0,
  concurrentlyUpdatedLanes = 0;
function finishQueueingConcurrentUpdates() {
  for (
    var endIndex = concurrentQueuesIndex,
      i = (concurrentlyUpdatedLanes = concurrentQueuesIndex = 0);
    i < endIndex;

  ) {
    var fiber = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var queue = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var update = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var lane = concurrentQueues[i];
    concurrentQueues[i++] = null;
    if (null !== queue && null !== update) {
      var pending = queue.pending;
      null === pending
        ? (update.next = update)
        : ((update.next = pending.next), (pending.next = update));
      queue.pending = update;
    }
    0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
  }
}
function enqueueUpdate$1(fiber, queue, update, lane) {
  concurrentQueues[concurrentQueuesIndex++] = fiber;
  concurrentQueues[concurrentQueuesIndex++] = queue;
  concurrentQueues[concurrentQueuesIndex++] = update;
  concurrentQueues[concurrentQueuesIndex++] = lane;
  concurrentlyUpdatedLanes |= lane;
  fiber.lanes |= lane;
  fiber = fiber.alternate;
  null !== fiber && (fiber.lanes |= lane);
}
function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
  enqueueUpdate$1(fiber, queue, update, lane);
  return getRootForUpdatedFiber(fiber);
}
function enqueueConcurrentRenderForLane(fiber, lane) {
  enqueueUpdate$1(fiber, null, null, lane);
  return getRootForUpdatedFiber(fiber);
}
function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
  sourceFiber.lanes |= lane;
  var alternate = sourceFiber.alternate;
  null !== alternate && (alternate.lanes |= lane);
  for (var isHidden = !1, parent = sourceFiber.return; null !== parent; )
    (parent.childLanes |= lane),
      (alternate = parent.alternate),
      null !== alternate && (alternate.childLanes |= lane),
      22 === parent.tag &&
        ((sourceFiber = parent.stateNode),
        null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = !0)),
      (sourceFiber = parent),
      (parent = parent.return);
  return 3 === sourceFiber.tag
    ? ((parent = sourceFiber.stateNode),
      isHidden &&
        null !== update &&
        ((isHidden = 31 - clz32(lane)),
        (sourceFiber = parent.hiddenUpdates),
        (alternate = sourceFiber[isHidden]),
        null === alternate
          ? (sourceFiber[isHidden] = [update])
          : alternate.push(update),
        (update.lane = lane | 536870912)),
      parent)
    : null;
}
function getRootForUpdatedFiber(sourceFiber) {
  if (50 < nestedUpdateCount)
    throw (
      ((nestedUpdateCount = 0),
      (rootWithNestedUpdates = null),
      Error(formatProdErrorMessage(185)))
    );
  for (var parent = sourceFiber.return; null !== parent; )
    (sourceFiber = parent), (parent = sourceFiber.return);
  return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
}
var emptyContextObject = {};
function FiberNode(tag, pendingProps, key, mode) {
  this.tag = tag;
  this.key = key;
  this.sibling =
    this.child =
    this.return =
    this.stateNode =
    this.type =
    this.elementType =
      null;
  this.index = 0;
  this.refCleanup = this.ref = null;
  this.pendingProps = pendingProps;
  this.dependencies =
    this.memoizedState =
    this.updateQueue =
    this.memoizedProps =
      null;
  this.mode = mode;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function createFiberImplClass(tag, pendingProps, key, mode) {
  return new FiberNode(tag, pendingProps, key, mode);
}
function shouldConstruct(Component) {
  Component = Component.prototype;
  return !(!Component || !Component.isReactComponent);
}
function createWorkInProgress(current, pendingProps) {
  var workInProgress = current.alternate;
  null === workInProgress
    ? ((workInProgress = createFiberImplClass(
        current.tag,
        pendingProps,
        current.key,
        current.mode
      )),
      (workInProgress.elementType = current.elementType),
      (workInProgress.type = current.type),
      (workInProgress.stateNode = current.stateNode),
      (workInProgress.alternate = current),
      (current.alternate = workInProgress))
    : ((workInProgress.pendingProps = pendingProps),
      (workInProgress.type = current.type),
      (workInProgress.flags = 0),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.deletions = null));
  workInProgress.flags = current.flags & 65011712;
  workInProgress.childLanes = current.childLanes;
  workInProgress.lanes = current.lanes;
  workInProgress.child = current.child;
  workInProgress.memoizedProps = current.memoizedProps;
  workInProgress.memoizedState = current.memoizedState;
  workInProgress.updateQueue = current.updateQueue;
  pendingProps = current.dependencies;
  workInProgress.dependencies =
    null === pendingProps
      ? null
      : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
  workInProgress.sibling = current.sibling;
  workInProgress.index = current.index;
  workInProgress.ref = current.ref;
  workInProgress.refCleanup = current.refCleanup;
  return workInProgress;
}
function resetWorkInProgress(workInProgress, renderLanes) {
  workInProgress.flags &= 65011714;
  var current = workInProgress.alternate;
  null === current
    ? ((workInProgress.childLanes = 0),
      (workInProgress.lanes = renderLanes),
      (workInProgress.child = null),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.memoizedProps = null),
      (workInProgress.memoizedState = null),
      (workInProgress.updateQueue = null),
      (workInProgress.dependencies = null),
      (workInProgress.stateNode = null))
    : ((workInProgress.childLanes = current.childLanes),
      (workInProgress.lanes = current.lanes),
      (workInProgress.child = current.child),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.deletions = null),
      (workInProgress.memoizedProps = current.memoizedProps),
      (workInProgress.memoizedState = current.memoizedState),
      (workInProgress.updateQueue = current.updateQueue),
      (workInProgress.type = current.type),
      (renderLanes = current.dependencies),
      (workInProgress.dependencies =
        null === renderLanes
          ? null
          : {
              lanes: renderLanes.lanes,
              firstContext: renderLanes.firstContext
            }));
  return workInProgress;
}
function createFiberFromTypeAndProps(
  type,
  key,
  pendingProps,
  owner,
  mode,
  lanes
) {
  var fiberTag = 0;
  owner = type;
  if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
  else if ("string" === typeof type)
    fiberTag = isHostHoistableType(
      type,
      pendingProps,
      contextStackCursor.current
    )
      ? 26
      : "html" === type || "head" === type || "body" === type
        ? 27
        : 5;
  else
    a: switch (type) {
      case REACT_ACTIVITY_TYPE:
        return (
          (type = createFiberImplClass(31, pendingProps, key, mode)),
          (type.elementType = REACT_ACTIVITY_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_FRAGMENT_TYPE:
        return createFiberFromFragment(pendingProps.children, mode, lanes, key);
      case REACT_STRICT_MODE_TYPE:
        fiberTag = 8;
        mode |= 24;
        break;
      case REACT_PROFILER_TYPE:
        return (
          (type = createFiberImplClass(12, pendingProps, key, mode | 2)),
          (type.elementType = REACT_PROFILER_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_SUSPENSE_TYPE:
        return (
          (type = createFiberImplClass(13, pendingProps, key, mode)),
          (type.elementType = REACT_SUSPENSE_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_SUSPENSE_LIST_TYPE:
        return (
          (type = createFiberImplClass(19, pendingProps, key, mode)),
          (type.elementType = REACT_SUSPENSE_LIST_TYPE),
          (type.lanes = lanes),
          type
        );
      default:
        if ("object" === typeof type && null !== type)
          switch (type.$$typeof) {
            case REACT_PROVIDER_TYPE:
            case REACT_CONTEXT_TYPE:
              fiberTag = 10;
              break a;
            case REACT_CONSUMER_TYPE:
              fiberTag = 9;
              break a;
            case REACT_FORWARD_REF_TYPE:
              fiberTag = 11;
              break a;
            case REACT_MEMO_TYPE:
              fiberTag = 14;
              break a;
            case REACT_LAZY_TYPE:
              fiberTag = 16;
              owner = null;
              break a;
          }
        fiberTag = 29;
        pendingProps = Error(
          formatProdErrorMessage(130, null === type ? "null" : typeof type, "")
        );
        owner = null;
    }
  key = createFiberImplClass(fiberTag, pendingProps, key, mode);
  key.elementType = type;
  key.type = owner;
  key.lanes = lanes;
  return key;
}
function createFiberFromFragment(elements, mode, lanes, key) {
  elements = createFiberImplClass(7, elements, key, mode);
  elements.lanes = lanes;
  return elements;
}
function createFiberFromText(content, mode, lanes) {
  content = createFiberImplClass(6, content, null, mode);
  content.lanes = lanes;
  return content;
}
function createFiberFromPortal(portal, mode, lanes) {
  mode = createFiberImplClass(
    4,
    null !== portal.children ? portal.children : [],
    portal.key,
    mode
  );
  mode.lanes = lanes;
  mode.stateNode = {
    containerInfo: portal.containerInfo,
    pendingChildren: null,
    implementation: portal.implementation
  };
  return mode;
}
var forkStack = [],
  forkStackIndex = 0,
  treeForkProvider = null,
  treeForkCount = 0,
  idStack = [],
  idStackIndex = 0,
  treeContextProvider = null,
  treeContextId = 1,
  treeContextOverflow = "";
function pushTreeFork(workInProgress, totalChildren) {
  forkStack[forkStackIndex++] = treeForkCount;
  forkStack[forkStackIndex++] = treeForkProvider;
  treeForkProvider = workInProgress;
  treeForkCount = totalChildren;
}
function pushTreeId(workInProgress, totalChildren, index) {
  idStack[idStackIndex++] = treeContextId;
  idStack[idStackIndex++] = treeContextOverflow;
  idStack[idStackIndex++] = treeContextProvider;
  treeContextProvider = workInProgress;
  var baseIdWithLeadingBit = treeContextId;
  workInProgress = treeContextOverflow;
  var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
  baseIdWithLeadingBit &= ~(1 << baseLength);
  index += 1;
  var length = 32 - clz32(totalChildren) + baseLength;
  if (30 < length) {
    var numberOfOverflowBits = baseLength - (baseLength % 5);
    length = (
      baseIdWithLeadingBit &
      ((1 << numberOfOverflowBits) - 1)
    ).toString(32);
    baseIdWithLeadingBit >>= numberOfOverflowBits;
    baseLength -= numberOfOverflowBits;
    treeContextId =
      (1 << (32 - clz32(totalChildren) + baseLength)) |
      (index << baseLength) |
      baseIdWithLeadingBit;
    treeContextOverflow = length + workInProgress;
  } else
    (treeContextId =
      (1 << length) | (index << baseLength) | baseIdWithLeadingBit),
      (treeContextOverflow = workInProgress);
}
function pushMaterializedTreeId(workInProgress) {
  null !== workInProgress.return &&
    (pushTreeFork(workInProgress, 1), pushTreeId(workInProgress, 1, 0));
}
function popTreeContext(workInProgress) {
  for (; workInProgress === treeForkProvider; )
    (treeForkProvider = forkStack[--forkStackIndex]),
      (forkStack[forkStackIndex] = null),
      (treeForkCount = forkStack[--forkStackIndex]),
      (forkStack[forkStackIndex] = null);
  for (; workInProgress === treeContextProvider; )
    (treeContextProvider = idStack[--idStackIndex]),
      (idStack[idStackIndex] = null),
      (treeContextOverflow = idStack[--idStackIndex]),
      (idStack[idStackIndex] = null),
      (treeContextId = idStack[--idStackIndex]),
      (idStack[idStackIndex] = null);
}
var hydrationParentFiber = null,
  nextHydratableInstance = null,
  isHydrating = !1,
  hydrationErrors = null,
  rootOrSingletonContext = !1,
  HydrationMismatchException = Error(formatProdErrorMessage(519));
function throwOnHydrationMismatch(fiber) {
  var error = Error(formatProdErrorMessage(418, ""));
  queueHydrationError(createCapturedValueAtFiber(error, fiber));
  throw HydrationMismatchException;
}
function prepareToHydrateHostInstance(fiber) {
  var instance = fiber.stateNode,
    type = fiber.type,
    props = fiber.memoizedProps;
  instance[internalInstanceKey] = fiber;
  instance[internalPropsKey] = props;
  switch (type) {
    case "dialog":
      listenToNonDelegatedEvent("cancel", instance);
      listenToNonDelegatedEvent("close", instance);
      break;
    case "iframe":
    case "object":
    case "embed":
      listenToNonDelegatedEvent("load", instance);
      break;
    case "video":
    case "audio":
      for (type = 0; type < mediaEventTypes.length; type++)
        listenToNonDelegatedEvent(mediaEventTypes[type], instance);
      break;
    case "source":
      listenToNonDelegatedEvent("error", instance);
      break;
    case "img":
    case "image":
    case "link":
      listenToNonDelegatedEvent("error", instance);
      listenToNonDelegatedEvent("load", instance);
      break;
    case "details":
      listenToNonDelegatedEvent("toggle", instance);
      break;
    case "input":
      listenToNonDelegatedEvent("invalid", instance);
      initInput(
        instance,
        props.value,
        props.defaultValue,
        props.checked,
        props.defaultChecked,
        props.type,
        props.name,
        !0
      );
      track(instance);
      break;
    case "select":
      listenToNonDelegatedEvent("invalid", instance);
      break;
    case "textarea":
      listenToNonDelegatedEvent("invalid", instance),
        initTextarea(instance, props.value, props.defaultValue, props.children),
        track(instance);
  }
  type = props.children;
  ("string" !== typeof type &&
    "number" !== typeof type &&
    "bigint" !== typeof type) ||
  instance.textContent === "" + type ||
  !0 === props.suppressHydrationWarning ||
  checkForUnmatchedText(instance.textContent, type)
    ? (null != props.popover &&
        (listenToNonDelegatedEvent("beforetoggle", instance),
        listenToNonDelegatedEvent("toggle", instance)),
      null != props.onScroll && listenToNonDelegatedEvent("scroll", instance),
      null != props.onScrollEnd &&
        listenToNonDelegatedEvent("scrollend", instance),
      null != props.onClick && (instance.onclick = noop$1),
      (instance = !0))
    : (instance = !1);
  instance || throwOnHydrationMismatch(fiber);
}
function popToNextHostParent(fiber) {
  for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
    switch (hydrationParentFiber.tag) {
      case 5:
      case 13:
        rootOrSingletonContext = !1;
        return;
      case 27:
      case 3:
        rootOrSingletonContext = !0;
        return;
      default:
        hydrationParentFiber = hydrationParentFiber.return;
    }
}
function popHydrationState(fiber) {
  if (fiber !== hydrationParentFiber) return !1;
  if (!isHydrating) return popToNextHostParent(fiber), (isHydrating = !0), !1;
  var tag = fiber.tag,
    JSCompiler_temp;
  if ((JSCompiler_temp = 3 !== tag && 27 !== tag)) {
    if ((JSCompiler_temp = 5 === tag))
      (JSCompiler_temp = fiber.type),
        (JSCompiler_temp =
          !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) ||
          shouldSetTextContent(fiber.type, fiber.memoizedProps));
    JSCompiler_temp = !JSCompiler_temp;
  }
  JSCompiler_temp && nextHydratableInstance && throwOnHydrationMismatch(fiber);
  popToNextHostParent(fiber);
  if (13 === tag) {
    fiber = fiber.memoizedState;
    fiber = null !== fiber ? fiber.dehydrated : null;
    if (!fiber) throw Error(formatProdErrorMessage(317));
    a: {
      fiber = fiber.nextSibling;
      for (tag = 0; fiber; ) {
        if (8 === fiber.nodeType)
          if (((JSCompiler_temp = fiber.data), "/$" === JSCompiler_temp)) {
            if (0 === tag) {
              nextHydratableInstance = getNextHydratable(fiber.nextSibling);
              break a;
            }
            tag--;
          } else
            ("$" !== JSCompiler_temp &&
              "$!" !== JSCompiler_temp &&
              "$?" !== JSCompiler_temp) ||
              tag++;
        fiber = fiber.nextSibling;
      }
      nextHydratableInstance = null;
    }
  } else
    27 === tag
      ? ((tag = nextHydratableInstance),
        isSingletonScope(fiber.type)
          ? ((fiber = previousHydratableOnEnteringScopedSingleton),
            (previousHydratableOnEnteringScopedSingleton = null),
            (nextHydratableInstance = fiber))
          : (nextHydratableInstance = tag))
      : (nextHydratableInstance = hydrationParentFiber
          ? getNextHydratable(fiber.stateNode.nextSibling)
          : null);
  return !0;
}
function resetHydrationState() {
  nextHydratableInstance = hydrationParentFiber = null;
  isHydrating = !1;
}
function upgradeHydrationErrorsToRecoverable() {
  var queuedErrors = hydrationErrors;
  null !== queuedErrors &&
    (null === workInProgressRootRecoverableErrors
      ? (workInProgressRootRecoverableErrors = queuedErrors)
      : workInProgressRootRecoverableErrors.push.apply(
          workInProgressRootRecoverableErrors,
          queuedErrors
        ),
    (hydrationErrors = null));
  return queuedErrors;
}
function queueHydrationError(error) {
  null === hydrationErrors
    ? (hydrationErrors = [error])
    : hydrationErrors.push(error);
}
var valueCursor = createCursor(null),
  currentlyRenderingFiber$1 = null,
  lastContextDependency = null;
function pushProvider(providerFiber, context, nextValue) {
  push(valueCursor, context._currentValue);
  context._currentValue = nextValue;
}
function popProvider(context) {
  context._currentValue = valueCursor.current;
  pop(valueCursor);
}
function scheduleContextWorkOnParentPath(parent, renderLanes, propagationRoot) {
  for (; null !== parent; ) {
    var alternate = parent.alternate;
    (parent.childLanes & renderLanes) !== renderLanes
      ? ((parent.childLanes |= renderLanes),
        null !== alternate && (alternate.childLanes |= renderLanes))
      : null !== alternate &&
        (alternate.childLanes & renderLanes) !== renderLanes &&
        (alternate.childLanes |= renderLanes);
    if (parent === propagationRoot) break;
    parent = parent.return;
  }
}
function propagateContextChanges(
  workInProgress,
  contexts,
  renderLanes,
  forcePropagateEntireTree
) {
  var fiber = workInProgress.child;
  null !== fiber && (fiber.return = workInProgress);
  for (; null !== fiber; ) {
    var list = fiber.dependencies;
    if (null !== list) {
      var nextFiber = fiber.child;
      list = list.firstContext;
      a: for (; null !== list; ) {
        var dependency = list;
        list = fiber;
        for (var i = 0; i < contexts.length; i++)
          if (dependency.context === contexts[i]) {
            list.lanes |= renderLanes;
            dependency = list.alternate;
            null !== dependency && (dependency.lanes |= renderLanes);
            scheduleContextWorkOnParentPath(
              list.return,
              renderLanes,
              workInProgress
            );
            forcePropagateEntireTree || (nextFiber = null);
            break a;
          }
        list = dependency.next;
      }
    } else if (18 === fiber.tag) {
      nextFiber = fiber.return;
      if (null === nextFiber) throw Error(formatProdErrorMessage(341));
      nextFiber.lanes |= renderLanes;
      list = nextFiber.alternate;
      null !== list && (list.lanes |= renderLanes);
      scheduleContextWorkOnParentPath(nextFiber, renderLanes, workInProgress);
      nextFiber = null;
    } else nextFiber = fiber.child;
    if (null !== nextFiber) nextFiber.return = fiber;
    else
      for (nextFiber = fiber; null !== nextFiber; ) {
        if (nextFiber === workInProgress) {
          nextFiber = null;
          break;
        }
        fiber = nextFiber.sibling;
        if (null !== fiber) {
          fiber.return = nextFiber.return;
          nextFiber = fiber;
          break;
        }
        nextFiber = nextFiber.return;
      }
    fiber = nextFiber;
  }
}
function propagateParentContextChanges(
  current,
  workInProgress,
  renderLanes,
  forcePropagateEntireTree
) {
  current = null;
  for (
    var parent = workInProgress, isInsidePropagationBailout = !1;
    null !== parent;

  ) {
    if (!isInsidePropagationBailout)
      if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = !0;
      else if (0 !== (parent.flags & 262144)) break;
    if (10 === parent.tag) {
      var currentParent = parent.alternate;
      if (null === currentParent) throw Error(formatProdErrorMessage(387));
      currentParent = currentParent.memoizedProps;
      if (null !== currentParent) {
        var context = parent.type;
        objectIs(parent.pendingProps.value, currentParent.value) ||
          (null !== current ? current.push(context) : (current = [context]));
      }
    } else if (parent === hostTransitionProviderCursor.current) {
      currentParent = parent.alternate;
      if (null === currentParent) throw Error(formatProdErrorMessage(387));
      currentParent.memoizedState.memoizedState !==
        parent.memoizedState.memoizedState &&
        (null !== current
          ? current.push(HostTransitionContext)
          : (current = [HostTransitionContext]));
    }
    parent = parent.return;
  }
  null !== current &&
    propagateContextChanges(
      workInProgress,
      current,
      renderLanes,
      forcePropagateEntireTree
    );
  workInProgress.flags |= 262144;
}
function checkIfContextChanged(currentDependencies) {
  for (
    currentDependencies = currentDependencies.firstContext;
    null !== currentDependencies;

  ) {
    if (
      !objectIs(
        currentDependencies.context._currentValue,
        currentDependencies.memoizedValue
      )
    )
      return !0;
    currentDependencies = currentDependencies.next;
  }
  return !1;
}
function prepareToReadContext(workInProgress) {
  currentlyRenderingFiber$1 = workInProgress;
  lastContextDependency = null;
  workInProgress = workInProgress.dependencies;
  null !== workInProgress && (workInProgress.firstContext = null);
}
function readContext(context) {
  return readContextForConsumer(currentlyRenderingFiber$1, context);
}
function readContextDuringReconciliation(consumer, context) {
  null === currentlyRenderingFiber$1 && prepareToReadContext(consumer);
  return readContextForConsumer(consumer, context);
}
function readContextForConsumer(consumer, context) {
  var value = context._currentValue;
  context = { context: context, memoizedValue: value, next: null };
  if (null === lastContextDependency) {
    if (null === consumer) throw Error(formatProdErrorMessage(308));
    lastContextDependency = context;
    consumer.dependencies = { lanes: 0, firstContext: context };
    consumer.flags |= 524288;
  } else lastContextDependency = lastContextDependency.next = context;
  return value;
}
var AbortControllerLocal =
    "undefined" !== typeof AbortController
      ? AbortController
      : function () {
          var listeners = [],
            signal = (this.signal = {
              aborted: !1,
              addEventListener: function (type, listener) {
                listeners.push(listener);
              }
            });
          this.abort = function () {
            signal.aborted = !0;
            listeners.forEach(function (listener) {
              return listener();
            });
          };
        },
  scheduleCallback$2 = Scheduler.unstable_scheduleCallback,
  NormalPriority = Scheduler.unstable_NormalPriority,
  CacheContext = {
    $$typeof: REACT_CONTEXT_TYPE,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
function createCache() {
  return {
    controller: new AbortControllerLocal(),
    data: new Map(),
    refCount: 0
  };
}
function releaseCache(cache) {
  cache.refCount--;
  0 === cache.refCount &&
    scheduleCallback$2(NormalPriority, function () {
      cache.controller.abort();
    });
}
var currentEntangledListeners = null,
  currentEntangledPendingCount = 0,
  currentEntangledLane = 0,
  currentEntangledActionThenable = null;
function entangleAsyncAction(transition, thenable) {
  if (null === currentEntangledListeners) {
    var entangledListeners = (currentEntangledListeners = []);
    currentEntangledPendingCount = 0;
    currentEntangledLane = requestTransitionLane();
    currentEntangledActionThenable = {
      status: "pending",
      value: void 0,
      then: function (resolve) {
        entangledListeners.push(resolve);
      }
    };
  }
  currentEntangledPendingCount++;
  thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
  return thenable;
}
function pingEngtangledActionScope() {
  if (
    0 === --currentEntangledPendingCount &&
    null !== currentEntangledListeners
  ) {
    null !== currentEntangledActionThenable &&
      (currentEntangledActionThenable.status = "fulfilled");
    var listeners = currentEntangledListeners;
    currentEntangledListeners = null;
    currentEntangledLane = 0;
    currentEntangledActionThenable = null;
    for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
  }
}
function chainThenableValue(thenable, result) {
  var listeners = [],
    thenableWithOverride = {
      status: "pending",
      value: null,
      reason: null,
      then: function (resolve) {
        listeners.push(resolve);
      }
    };
  thenable.then(
    function () {
      thenableWithOverride.status = "fulfilled";
      thenableWithOverride.value = result;
      for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
    },
    function (error) {
      thenableWithOverride.status = "rejected";
      thenableWithOverride.reason = error;
      for (error = 0; error < listeners.length; error++)
        (0, listeners[error])(void 0);
    }
  );
  return thenableWithOverride;
}
var prevOnStartTransitionFinish = ReactSharedInternals.S;
ReactSharedInternals.S = function (transition, returnValue) {
  "object" === typeof returnValue &&
    null !== returnValue &&
    "function" === typeof returnValue.then &&
    entangleAsyncAction(transition, returnValue);
  null !== prevOnStartTransitionFinish &&
    prevOnStartTransitionFinish(transition, returnValue);
};
var resumedCache = createCursor(null);
function peekCacheFromPool() {
  var cacheResumedFromPreviousRender = resumedCache.current;
  return null !== cacheResumedFromPreviousRender
    ? cacheResumedFromPreviousRender
    : workInProgressRoot.pooledCache;
}
function pushTransition(offscreenWorkInProgress, prevCachePool) {
  null === prevCachePool
    ? push(resumedCache, resumedCache.current)
    : push(resumedCache, prevCachePool.pool);
}
function getSuspendedCache() {
  var cacheFromPool = peekCacheFromPool();
  return null === cacheFromPool
    ? null
    : { parent: CacheContext._currentValue, pool: cacheFromPool };
}
var SuspenseException = Error(formatProdErrorMessage(460)),
  SuspenseyCommitException = Error(formatProdErrorMessage(474)),
  SuspenseActionException = Error(formatProdErrorMessage(542)),
  noopSuspenseyCommitThenable = { then: function () {} };
function isThenableResolved(thenable) {
  thenable = thenable.status;
  return "fulfilled" === thenable || "rejected" === thenable;
}
function noop$3() {}
function trackUsedThenable(thenableState, thenable, index) {
  index = thenableState[index];
  void 0 === index
    ? thenableState.push(thenable)
    : index !== thenable && (thenable.then(noop$3, noop$3), (thenable = index));
  switch (thenable.status) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      throw (
        ((thenableState = thenable.reason),
        checkIfUseWrappedInAsyncCatch(thenableState),
        thenableState)
      );
    default:
      if ("string" === typeof thenable.status) thenable.then(noop$3, noop$3);
      else {
        thenableState = workInProgressRoot;
        if (null !== thenableState && 100 < thenableState.shellSuspendCounter)
          throw Error(formatProdErrorMessage(482));
        thenableState = thenable;
        thenableState.status = "pending";
        thenableState.then(
          function (fulfilledValue) {
            if ("pending" === thenable.status) {
              var fulfilledThenable = thenable;
              fulfilledThenable.status = "fulfilled";
              fulfilledThenable.value = fulfilledValue;
            }
          },
          function (error) {
            if ("pending" === thenable.status) {
              var rejectedThenable = thenable;
              rejectedThenable.status = "rejected";
              rejectedThenable.reason = error;
            }
          }
        );
      }
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw (
            ((thenableState = thenable.reason),
            checkIfUseWrappedInAsyncCatch(thenableState),
            thenableState)
          );
      }
      suspendedThenable = thenable;
      throw SuspenseException;
  }
}
var suspendedThenable = null;
function getSuspendedThenable() {
  if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
  var thenable = suspendedThenable;
  suspendedThenable = null;
  return thenable;
}
function checkIfUseWrappedInAsyncCatch(rejectedReason) {
  if (
    rejectedReason === SuspenseException ||
    rejectedReason === SuspenseActionException
  )
    throw Error(formatProdErrorMessage(483));
}
var hasForceUpdate = !1;
function initializeUpdateQueue(fiber) {
  fiber.updateQueue = {
    baseState: fiber.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null
  };
}
function cloneUpdateQueue(current, workInProgress) {
  current = current.updateQueue;
  workInProgress.updateQueue === current &&
    (workInProgress.updateQueue = {
      baseState: current.baseState,
      firstBaseUpdate: current.firstBaseUpdate,
      lastBaseUpdate: current.lastBaseUpdate,
      shared: current.shared,
      callbacks: null
    });
}
function createUpdate(lane) {
  return { lane: lane, tag: 0, payload: null, callback: null, next: null };
}
function enqueueUpdate(fiber, update, lane) {
  var updateQueue = fiber.updateQueue;
  if (null === updateQueue) return null;
  updateQueue = updateQueue.shared;
  if (0 !== (executionContext & 2)) {
    var pending = updateQueue.pending;
    null === pending
      ? (update.next = update)
      : ((update.next = pending.next), (pending.next = update));
    updateQueue.pending = update;
    update = getRootForUpdatedFiber(fiber);
    markUpdateLaneFromFiberToRoot(fiber, null, lane);
    return update;
  }
  enqueueUpdate$1(fiber, updateQueue, update, lane);
  return getRootForUpdatedFiber(fiber);
}
function entangleTransitions(root, fiber, lane) {
  fiber = fiber.updateQueue;
  if (null !== fiber && ((fiber = fiber.shared), 0 !== (lane & 4194048))) {
    var queueLanes = fiber.lanes;
    queueLanes &= root.pendingLanes;
    lane |= queueLanes;
    fiber.lanes = lane;
    markRootEntangled(root, lane);
  }
}
function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
  var queue = workInProgress.updateQueue,
    current = workInProgress.alternate;
  if (
    null !== current &&
    ((current = current.updateQueue), queue === current)
  ) {
    var newFirst = null,
      newLast = null;
    queue = queue.firstBaseUpdate;
    if (null !== queue) {
      do {
        var clone = {
          lane: queue.lane,
          tag: queue.tag,
          payload: queue.payload,
          callback: null,
          next: null
        };
        null === newLast
          ? (newFirst = newLast = clone)
          : (newLast = newLast.next = clone);
        queue = queue.next;
      } while (null !== queue);
      null === newLast
        ? (newFirst = newLast = capturedUpdate)
        : (newLast = newLast.next = capturedUpdate);
    } else newFirst = newLast = capturedUpdate;
    queue = {
      baseState: current.baseState,
      firstBaseUpdate: newFirst,
      lastBaseUpdate: newLast,
      shared: current.shared,
      callbacks: current.callbacks
    };
    workInProgress.updateQueue = queue;
    return;
  }
  workInProgress = queue.lastBaseUpdate;
  null === workInProgress
    ? (queue.firstBaseUpdate = capturedUpdate)
    : (workInProgress.next = capturedUpdate);
  queue.lastBaseUpdate = capturedUpdate;
}
var didReadFromEntangledAsyncAction = !1;
function suspendIfUpdateReadFromEntangledAsyncAction() {
  if (didReadFromEntangledAsyncAction) {
    var entangledActionThenable = currentEntangledActionThenable;
    if (null !== entangledActionThenable) throw entangledActionThenable;
  }
}
function processUpdateQueue(
  workInProgress$jscomp$0,
  props,
  instance$jscomp$0,
  renderLanes
) {
  didReadFromEntangledAsyncAction = !1;
  var queue = workInProgress$jscomp$0.updateQueue;
  hasForceUpdate = !1;
  var firstBaseUpdate = queue.firstBaseUpdate,
    lastBaseUpdate = queue.lastBaseUpdate,
    pendingQueue = queue.shared.pending;
  if (null !== pendingQueue) {
    queue.shared.pending = null;
    var lastPendingUpdate = pendingQueue,
      firstPendingUpdate = lastPendingUpdate.next;
    lastPendingUpdate.next = null;
    null === lastBaseUpdate
      ? (firstBaseUpdate = firstPendingUpdate)
      : (lastBaseUpdate.next = firstPendingUpdate);
    lastBaseUpdate = lastPendingUpdate;
    var current = workInProgress$jscomp$0.alternate;
    null !== current &&
      ((current = current.updateQueue),
      (pendingQueue = current.lastBaseUpdate),
      pendingQueue !== lastBaseUpdate &&
        (null === pendingQueue
          ? (current.firstBaseUpdate = firstPendingUpdate)
          : (pendingQueue.next = firstPendingUpdate),
        (current.lastBaseUpdate = lastPendingUpdate)));
  }
  if (null !== firstBaseUpdate) {
    var newState = queue.baseState;
    lastBaseUpdate = 0;
    current = firstPendingUpdate = lastPendingUpdate = null;
    pendingQueue = firstBaseUpdate;
    do {
      var updateLane = pendingQueue.lane & -536870913,
        isHiddenUpdate = updateLane !== pendingQueue.lane;
      if (
        isHiddenUpdate
          ? (workInProgressRootRenderLanes & updateLane) === updateLane
          : (renderLanes & updateLane) === updateLane
      ) {
        0 !== updateLane &&
          updateLane === currentEntangledLane &&
          (didReadFromEntangledAsyncAction = !0);
        null !== current &&
          (current = current.next =
            {
              lane: 0,
              tag: pendingQueue.tag,
              payload: pendingQueue.payload,
              callback: null,
              next: null
            });
        a: {
          var workInProgress = workInProgress$jscomp$0,
            update = pendingQueue;
          updateLane = props;
          var instance = instance$jscomp$0;
          switch (update.tag) {
            case 1:
              workInProgress = update.payload;
              if ("function" === typeof workInProgress) {
                newState = workInProgress.call(instance, newState, updateLane);
                break a;
              }
              newState = workInProgress;
              break a;
            case 3:
              workInProgress.flags = (workInProgress.flags & -65537) | 128;
            case 0:
              workInProgress = update.payload;
              updateLane =
                "function" === typeof workInProgress
                  ? workInProgress.call(instance, newState, updateLane)
                  : workInProgress;
              if (null === updateLane || void 0 === updateLane) break a;
              newState = assign({}, newState, updateLane);
              break a;
            case 2:
              hasForceUpdate = !0;
          }
        }
        updateLane = pendingQueue.callback;
        null !== updateLane &&
          ((workInProgress$jscomp$0.flags |= 64),
          isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192),
          (isHiddenUpdate = queue.callbacks),
          null === isHiddenUpdate
            ? (queue.callbacks = [updateLane])
            : isHiddenUpdate.push(updateLane));
      } else
        (isHiddenUpdate = {
          lane: updateLane,
          tag: pendingQueue.tag,
          payload: pendingQueue.payload,
          callback: pendingQueue.callback,
          next: null
        }),
          null === current
            ? ((firstPendingUpdate = current = isHiddenUpdate),
              (lastPendingUpdate = newState))
            : (current = current.next = isHiddenUpdate),
          (lastBaseUpdate |= updateLane);
      pendingQueue = pendingQueue.next;
      if (null === pendingQueue)
        if (((pendingQueue = queue.shared.pending), null === pendingQueue))
          break;
        else
          (isHiddenUpdate = pendingQueue),
            (pendingQueue = isHiddenUpdate.next),
            (isHiddenUpdate.next = null),
            (queue.lastBaseUpdate = isHiddenUpdate),
            (queue.shared.pending = null);
    } while (1);
    null === current && (lastPendingUpdate = newState);
    queue.baseState = lastPendingUpdate;
    queue.firstBaseUpdate = firstPendingUpdate;
    queue.lastBaseUpdate = current;
    null === firstBaseUpdate && (queue.shared.lanes = 0);
    workInProgressRootSkippedLanes |= lastBaseUpdate;
    workInProgress$jscomp$0.lanes = lastBaseUpdate;
    workInProgress$jscomp$0.memoizedState = newState;
  }
}
function callCallback(callback, context) {
  if ("function" !== typeof callback)
    throw Error(formatProdErrorMessage(191, callback));
  callback.call(context);
}
function commitCallbacks(updateQueue, context) {
  var callbacks = updateQueue.callbacks;
  if (null !== callbacks)
    for (
      updateQueue.callbacks = null, updateQueue = 0;
      updateQueue < callbacks.length;
      updateQueue++
    )
      callCallback(callbacks[updateQueue], context);
}
var currentTreeHiddenStackCursor = createCursor(null),
  prevEntangledRenderLanesCursor = createCursor(0);
function pushHiddenContext(fiber, context) {
  fiber = entangledRenderLanes;
  push(prevEntangledRenderLanesCursor, fiber);
  push(currentTreeHiddenStackCursor, context);
  entangledRenderLanes = fiber | context.baseLanes;
}
function reuseHiddenContextOnStack() {
  push(prevEntangledRenderLanesCursor, entangledRenderLanes);
  push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
}
function popHiddenContext() {
  entangledRenderLanes = prevEntangledRenderLanesCursor.current;
  pop(currentTreeHiddenStackCursor);
  pop(prevEntangledRenderLanesCursor);
}
var renderLanes = 0,
  currentlyRenderingFiber = null,
  currentHook = null,
  workInProgressHook = null,
  didScheduleRenderPhaseUpdate = !1,
  didScheduleRenderPhaseUpdateDuringThisPass = !1,
  shouldDoubleInvokeUserFnsInHooksDEV = !1,
  localIdCounter = 0,
  thenableIndexCounter$1 = 0,
  thenableState$1 = null,
  globalClientIdCounter = 0;
function throwInvalidHookError() {
  throw Error(formatProdErrorMessage(321));
}
function areHookInputsEqual(nextDeps, prevDeps) {
  if (null === prevDeps) return !1;
  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
    if (!objectIs(nextDeps[i], prevDeps[i])) return !1;
  return !0;
}
function renderWithHooks(
  current,
  workInProgress,
  Component,
  props,
  secondArg,
  nextRenderLanes
) {
  renderLanes = nextRenderLanes;
  currentlyRenderingFiber = workInProgress;
  workInProgress.memoizedState = null;
  workInProgress.updateQueue = null;
  workInProgress.lanes = 0;
  ReactSharedInternals.H =
    null === current || null === current.memoizedState
      ? HooksDispatcherOnMount
      : HooksDispatcherOnUpdate;
  shouldDoubleInvokeUserFnsInHooksDEV = !1;
  nextRenderLanes = Component(props, secondArg);
  shouldDoubleInvokeUserFnsInHooksDEV = !1;
  didScheduleRenderPhaseUpdateDuringThisPass &&
    (nextRenderLanes = renderWithHooksAgain(
      workInProgress,
      Component,
      props,
      secondArg
    ));
  finishRenderingHooks(current);
  return nextRenderLanes;
}
function finishRenderingHooks(current) {
  ReactSharedInternals.H = ContextOnlyDispatcher;
  var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
  renderLanes = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber = null;
  didScheduleRenderPhaseUpdate = !1;
  thenableIndexCounter$1 = 0;
  thenableState$1 = null;
  if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
  null === current ||
    didReceiveUpdate ||
    ((current = current.dependencies),
    null !== current &&
      checkIfContextChanged(current) &&
      (didReceiveUpdate = !0));
}
function renderWithHooksAgain(workInProgress, Component, props, secondArg) {
  currentlyRenderingFiber = workInProgress;
  var numberOfReRenders = 0;
  do {
    didScheduleRenderPhaseUpdateDuringThisPass && (thenableState$1 = null);
    thenableIndexCounter$1 = 0;
    didScheduleRenderPhaseUpdateDuringThisPass = !1;
    if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
    numberOfReRenders += 1;
    workInProgressHook = currentHook = null;
    if (null != workInProgress.updateQueue) {
      var children = workInProgress.updateQueue;
      children.lastEffect = null;
      children.events = null;
      children.stores = null;
      null != children.memoCache && (children.memoCache.index = 0);
    }
    ReactSharedInternals.H = HooksDispatcherOnRerender;
    children = Component(props, secondArg);
  } while (didScheduleRenderPhaseUpdateDuringThisPass);
  return children;
}
function TransitionAwareHostComponent() {
  var dispatcher = ReactSharedInternals.H,
    maybeThenable = dispatcher.useState()[0];
  maybeThenable =
    "function" === typeof maybeThenable.then
      ? useThenable(maybeThenable)
      : maybeThenable;
  dispatcher = dispatcher.useState()[0];
  (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher &&
    (currentlyRenderingFiber.flags |= 1024);
  return maybeThenable;
}
function checkDidRenderIdHook() {
  var didRenderIdHook = 0 !== localIdCounter;
  localIdCounter = 0;
  return didRenderIdHook;
}
function bailoutHooks(current, workInProgress, lanes) {
  workInProgress.updateQueue = current.updateQueue;
  workInProgress.flags &= -2053;
  current.lanes &= ~lanes;
}
function resetHooksOnUnwind(workInProgress) {
  if (didScheduleRenderPhaseUpdate) {
    for (
      workInProgress = workInProgress.memoizedState;
      null !== workInProgress;

    ) {
      var queue = workInProgress.queue;
      null !== queue && (queue.pending = null);
      workInProgress = workInProgress.next;
    }
    didScheduleRenderPhaseUpdate = !1;
  }
  renderLanes = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber = null;
  didScheduleRenderPhaseUpdateDuringThisPass = !1;
  thenableIndexCounter$1 = localIdCounter = 0;
  thenableState$1 = null;
}
function mountWorkInProgressHook() {
  var hook = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  null === workInProgressHook
    ? (currentlyRenderingFiber.memoizedState = workInProgressHook = hook)
    : (workInProgressHook = workInProgressHook.next = hook);
  return workInProgressHook;
}
function updateWorkInProgressHook() {
  if (null === currentHook) {
    var nextCurrentHook = currentlyRenderingFiber.alternate;
    nextCurrentHook =
      null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
  } else nextCurrentHook = currentHook.next;
  var nextWorkInProgressHook =
    null === workInProgressHook
      ? currentlyRenderingFiber.memoizedState
      : workInProgressHook.next;
  if (null !== nextWorkInProgressHook)
    (workInProgressHook = nextWorkInProgressHook),
      (currentHook = nextCurrentHook);
  else {
    if (null === nextCurrentHook) {
      if (null === currentlyRenderingFiber.alternate)
        throw Error(formatProdErrorMessage(467));
      throw Error(formatProdErrorMessage(310));
    }
    currentHook = nextCurrentHook;
    nextCurrentHook = {
      memoizedState: currentHook.memoizedState,
      baseState: currentHook.baseState,
      baseQueue: currentHook.baseQueue,
      queue: currentHook.queue,
      next: null
    };
    null === workInProgressHook
      ? (currentlyRenderingFiber.memoizedState = workInProgressHook =
          nextCurrentHook)
      : (workInProgressHook = workInProgressHook.next = nextCurrentHook);
  }
  return workInProgressHook;
}
function createFunctionComponentUpdateQueue() {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
}
function useThenable(thenable) {
  var index = thenableIndexCounter$1;
  thenableIndexCounter$1 += 1;
  null === thenableState$1 && (thenableState$1 = []);
  thenable = trackUsedThenable(thenableState$1, thenable, index);
  index = currentlyRenderingFiber;
  null ===
    (null === workInProgressHook
      ? index.memoizedState
      : workInProgressHook.next) &&
    ((index = index.alternate),
    (ReactSharedInternals.H =
      null === index || null === index.memoizedState
        ? HooksDispatcherOnMount
        : HooksDispatcherOnUpdate));
  return thenable;
}
function use(usable) {
  if (null !== usable && "object" === typeof usable) {
    if ("function" === typeof usable.then) return useThenable(usable);
    if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
  }
  throw Error(formatProdErrorMessage(438, String(usable)));
}
function useMemoCache(size) {
  var memoCache = null,
    updateQueue = currentlyRenderingFiber.updateQueue;
  null !== updateQueue && (memoCache = updateQueue.memoCache);
  if (null == memoCache) {
    var current = currentlyRenderingFiber.alternate;
    null !== current &&
      ((current = current.updateQueue),
      null !== current &&
        ((current = current.memoCache),
        null != current &&
          (memoCache = {
            data: current.data.map(function (array) {
              return array.slice();
            }),
            index: 0
          })));
  }
  null == memoCache && (memoCache = { data: [], index: 0 });
  null === updateQueue &&
    ((updateQueue = createFunctionComponentUpdateQueue()),
    (currentlyRenderingFiber.updateQueue = updateQueue));
  updateQueue.memoCache = memoCache;
  updateQueue = memoCache.data[memoCache.index];
  if (void 0 === updateQueue)
    for (
      updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0;
      current < size;
      current++
    )
      updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
  memoCache.index++;
  return updateQueue;
}
function basicStateReducer(state, action) {
  return "function" === typeof action ? action(state) : action;
}
function updateReducer(reducer) {
  var hook = updateWorkInProgressHook();
  return updateReducerImpl(hook, currentHook, reducer);
}
function updateReducerImpl(hook, current, reducer) {
  var queue = hook.queue;
  if (null === queue) throw Error(formatProdErrorMessage(311));
  queue.lastRenderedReducer = reducer;
  var baseQueue = hook.baseQueue,
    pendingQueue = queue.pending;
  if (null !== pendingQueue) {
    if (null !== baseQueue) {
      var baseFirst = baseQueue.next;
      baseQueue.next = pendingQueue.next;
      pendingQueue.next = baseFirst;
    }
    current.baseQueue = baseQueue = pendingQueue;
    queue.pending = null;
  }
  pendingQueue = hook.baseState;
  if (null === baseQueue) hook.memoizedState = pendingQueue;
  else {
    current = baseQueue.next;
    var newBaseQueueFirst = (baseFirst = null),
      newBaseQueueLast = null,
      update = current,
      didReadFromEntangledAsyncAction$32 = !1;
    do {
      var updateLane = update.lane & -536870913;
      if (
        updateLane !== update.lane
          ? (workInProgressRootRenderLanes & updateLane) === updateLane
          : (renderLanes & updateLane) === updateLane
      ) {
        var revertLane = update.revertLane;
        if (0 === revertLane)
          null !== newBaseQueueLast &&
            (newBaseQueueLast = newBaseQueueLast.next =
              {
                lane: 0,
                revertLane: 0,
                action: update.action,
                hasEagerState: update.hasEagerState,
                eagerState: update.eagerState,
                next: null
              }),
            updateLane === currentEntangledLane &&
              (didReadFromEntangledAsyncAction$32 = !0);
        else if ((renderLanes & revertLane) === revertLane) {
          update = update.next;
          revertLane === currentEntangledLane &&
            (didReadFromEntangledAsyncAction$32 = !0);
          continue;
        } else
          (updateLane = {
            lane: 0,
            revertLane: update.revertLane,
            action: update.action,
            hasEagerState: update.hasEagerState,
            eagerState: update.eagerState,
            next: null
          }),
            null === newBaseQueueLast
              ? ((newBaseQueueFirst = newBaseQueueLast = updateLane),
                (baseFirst = pendingQueue))
              : (newBaseQueueLast = newBaseQueueLast.next = updateLane),
            (currentlyRenderingFiber.lanes |= revertLane),
            (workInProgressRootSkippedLanes |= revertLane);
        updateLane = update.action;
        shouldDoubleInvokeUserFnsInHooksDEV &&
          reducer(pendingQueue, updateLane);
        pendingQueue = update.hasEagerState
          ? update.eagerState
          : reducer(pendingQueue, updateLane);
      } else
        (revertLane = {
          lane: updateLane,
          revertLane: update.revertLane,
          action: update.action,
          hasEagerState: update.hasEagerState,
          eagerState: update.eagerState,
          next: null
        }),
          null === newBaseQueueLast
            ? ((newBaseQueueFirst = newBaseQueueLast = revertLane),
              (baseFirst = pendingQueue))
            : (newBaseQueueLast = newBaseQueueLast.next = revertLane),
          (currentlyRenderingFiber.lanes |= updateLane),
          (workInProgressRootSkippedLanes |= updateLane);
      update = update.next;
    } while (null !== update && update !== current);
    null === newBaseQueueLast
      ? (baseFirst = pendingQueue)
      : (newBaseQueueLast.next = newBaseQueueFirst);
    if (
      !objectIs(pendingQueue, hook.memoizedState) &&
      ((didReceiveUpdate = !0),
      didReadFromEntangledAsyncAction$32 &&
        ((reducer = currentEntangledActionThenable), null !== reducer))
    )
      throw reducer;
    hook.memoizedState = pendingQueue;
    hook.baseState = baseFirst;
    hook.baseQueue = newBaseQueueLast;
    queue.lastRenderedState = pendingQueue;
  }
  null === baseQueue && (queue.lanes = 0);
  return [hook.memoizedState, queue.dispatch];
}
function rerenderReducer(reducer) {
  var hook = updateWorkInProgressHook(),
    queue = hook.queue;
  if (null === queue) throw Error(formatProdErrorMessage(311));
  queue.lastRenderedReducer = reducer;
  var dispatch = queue.dispatch,
    lastRenderPhaseUpdate = queue.pending,
    newState = hook.memoizedState;
  if (null !== lastRenderPhaseUpdate) {
    queue.pending = null;
    var update = (lastRenderPhaseUpdate = lastRenderPhaseUpdate.next);
    do (newState = reducer(newState, update.action)), (update = update.next);
    while (update !== lastRenderPhaseUpdate);
    objectIs(newState, hook.memoizedState) || (didReceiveUpdate = !0);
    hook.memoizedState = newState;
    null === hook.baseQueue && (hook.baseState = newState);
    queue.lastRenderedState = newState;
  }
  return [newState, dispatch];
}
function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  var fiber = currentlyRenderingFiber,
    hook = updateWorkInProgressHook(),
    isHydrating$jscomp$0 = isHydrating;
  if (isHydrating$jscomp$0) {
    if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
    getServerSnapshot = getServerSnapshot();
  } else getServerSnapshot = getSnapshot();
  var snapshotChanged = !objectIs(
    (currentHook || hook).memoizedState,
    getServerSnapshot
  );
  snapshotChanged &&
    ((hook.memoizedState = getServerSnapshot), (didReceiveUpdate = !0));
  hook = hook.queue;
  var create = subscribeToStore.bind(null, fiber, hook, subscribe);
  updateEffectImpl(2048, 8, create, [subscribe]);
  if (
    hook.getSnapshot !== getSnapshot ||
    snapshotChanged ||
    (null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1)
  ) {
    fiber.flags |= 2048;
    pushSimpleEffect(
      9,
      createEffectInstance(),
      updateStoreInstance.bind(
        null,
        fiber,
        hook,
        getServerSnapshot,
        getSnapshot
      ),
      null
    );
    if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
    isHydrating$jscomp$0 ||
      0 !== (renderLanes & 124) ||
      pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
  }
  return getServerSnapshot;
}
function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
  fiber.flags |= 16384;
  fiber = { getSnapshot: getSnapshot, value: renderedSnapshot };
  getSnapshot = currentlyRenderingFiber.updateQueue;
  null === getSnapshot
    ? ((getSnapshot = createFunctionComponentUpdateQueue()),
      (currentlyRenderingFiber.updateQueue = getSnapshot),
      (getSnapshot.stores = [fiber]))
    : ((renderedSnapshot = getSnapshot.stores),
      null === renderedSnapshot
        ? (getSnapshot.stores = [fiber])
        : renderedSnapshot.push(fiber));
}
function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
  inst.value = nextSnapshot;
  inst.getSnapshot = getSnapshot;
  checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
}
function subscribeToStore(fiber, inst, subscribe) {
  return subscribe(function () {
    checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
  });
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return !0;
  }
}
function forceStoreRerender(fiber) {
  var root = enqueueConcurrentRenderForLane(fiber, 2);
  null !== root && scheduleUpdateOnFiber(root, fiber, 2);
}
function mountStateImpl(initialState) {
  var hook = mountWorkInProgressHook();
  if ("function" === typeof initialState) {
    var initialStateInitializer = initialState;
    initialState = initialStateInitializer();
    if (shouldDoubleInvokeUserFnsInHooksDEV) {
      setIsStrictModeForDevtools(!0);
      try {
        initialStateInitializer();
      } finally {
        setIsStrictModeForDevtools(!1);
      }
    }
  }
  hook.memoizedState = hook.baseState = initialState;
  hook.queue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: initialState
  };
  return hook;
}
function updateOptimisticImpl(hook, current, passthrough, reducer) {
  hook.baseState = passthrough;
  return updateReducerImpl(
    hook,
    currentHook,
    "function" === typeof reducer ? reducer : basicStateReducer
  );
}
function dispatchActionState(
  fiber,
  actionQueue,
  setPendingState,
  setState,
  payload
) {
  if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
  fiber = actionQueue.action;
  if (null !== fiber) {
    var actionNode = {
      payload: payload,
      action: fiber,
      next: null,
      isTransition: !0,
      status: "pending",
      value: null,
      reason: null,
      listeners: [],
      then: function (listener) {
        actionNode.listeners.push(listener);
      }
    };
    null !== ReactSharedInternals.T
      ? setPendingState(!0)
      : (actionNode.isTransition = !1);
    setState(actionNode);
    setPendingState = actionQueue.pending;
    null === setPendingState
      ? ((actionNode.next = actionQueue.pending = actionNode),
        runActionStateAction(actionQueue, actionNode))
      : ((actionNode.next = setPendingState.next),
        (actionQueue.pending = setPendingState.next = actionNode));
  }
}
function runActionStateAction(actionQueue, node) {
  var action = node.action,
    payload = node.payload,
    prevState = actionQueue.state;
  if (node.isTransition) {
    var prevTransition = ReactSharedInternals.T,
      currentTransition = {};
    ReactSharedInternals.T = currentTransition;
    try {
      var returnValue = action(prevState, payload),
        onStartTransitionFinish = ReactSharedInternals.S;
      null !== onStartTransitionFinish &&
        onStartTransitionFinish(currentTransition, returnValue);
      handleActionReturnValue(actionQueue, node, returnValue);
    } catch (error) {
      onActionError(actionQueue, node, error);
    } finally {
      ReactSharedInternals.T = prevTransition;
    }
  } else
    try {
      (prevTransition = action(prevState, payload)),
        handleActionReturnValue(actionQueue, node, prevTransition);
    } catch (error$38) {
      onActionError(actionQueue, node, error$38);
    }
}
function handleActionReturnValue(actionQueue, node, returnValue) {
  null !== returnValue &&
  "object" === typeof returnValue &&
  "function" === typeof returnValue.then
    ? returnValue.then(
        function (nextState) {
          onActionSuccess(actionQueue, node, nextState);
        },
        function (error) {
          return onActionError(actionQueue, node, error);
        }
      )
    : onActionSuccess(actionQueue, node, returnValue);
}
function onActionSuccess(actionQueue, actionNode, nextState) {
  actionNode.status = "fulfilled";
  actionNode.value = nextState;
  notifyActionListeners(actionNode);
  actionQueue.state = nextState;
  actionNode = actionQueue.pending;
  null !== actionNode &&
    ((nextState = actionNode.next),
    nextState === actionNode
      ? (actionQueue.pending = null)
      : ((nextState = nextState.next),
        (actionNode.next = nextState),
        runActionStateAction(actionQueue, nextState)));
}
function onActionError(actionQueue, actionNode, error) {
  var last = actionQueue.pending;
  actionQueue.pending = null;
  if (null !== last) {
    last = last.next;
    do
      (actionNode.status = "rejected"),
        (actionNode.reason = error),
        notifyActionListeners(actionNode),
        (actionNode = actionNode.next);
    while (actionNode !== last);
  }
  actionQueue.action = null;
}
function notifyActionListeners(actionNode) {
  actionNode = actionNode.listeners;
  for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
}
function actionStateReducer(oldState, newState) {
  return newState;
}
function mountActionState(action, initialStateProp) {
  if (isHydrating) {
    var ssrFormState = workInProgressRoot.formState;
    if (null !== ssrFormState) {
      a: {
        var JSCompiler_inline_result = currentlyRenderingFiber;
        if (isHydrating) {
          if (nextHydratableInstance) {
            b: {
              var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
              for (
                var inRootOrSingleton = rootOrSingletonContext;
                8 !== JSCompiler_inline_result$jscomp$0.nodeType;

              ) {
                if (!inRootOrSingleton) {
                  JSCompiler_inline_result$jscomp$0 = null;
                  break b;
                }
                JSCompiler_inline_result$jscomp$0 = getNextHydratable(
                  JSCompiler_inline_result$jscomp$0.nextSibling
                );
                if (null === JSCompiler_inline_result$jscomp$0) {
                  JSCompiler_inline_result$jscomp$0 = null;
                  break b;
                }
              }
              inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
              JSCompiler_inline_result$jscomp$0 =
                "F!" === inRootOrSingleton || "F" === inRootOrSingleton
                  ? JSCompiler_inline_result$jscomp$0
                  : null;
            }
            if (JSCompiler_inline_result$jscomp$0) {
              nextHydratableInstance = getNextHydratable(
                JSCompiler_inline_result$jscomp$0.nextSibling
              );
              JSCompiler_inline_result =
                "F!" === JSCompiler_inline_result$jscomp$0.data;
              break a;
            }
          }
          throwOnHydrationMismatch(JSCompiler_inline_result);
        }
        JSCompiler_inline_result = !1;
      }
      JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
    }
  }
  ssrFormState = mountWorkInProgressHook();
  ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
  JSCompiler_inline_result = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: actionStateReducer,
    lastRenderedState: initialStateProp
  };
  ssrFormState.queue = JSCompiler_inline_result;
  ssrFormState = dispatchSetState.bind(
    null,
    currentlyRenderingFiber,
    JSCompiler_inline_result
  );
  JSCompiler_inline_result.dispatch = ssrFormState;
  JSCompiler_inline_result = mountStateImpl(!1);
  inRootOrSingleton = dispatchOptimisticSetState.bind(
    null,
    currentlyRenderingFiber,
    !1,
    JSCompiler_inline_result.queue
  );
  JSCompiler_inline_result = mountWorkInProgressHook();
  JSCompiler_inline_result$jscomp$0 = {
    state: initialStateProp,
    dispatch: null,
    action: action,
    pending: null
  };
  JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
  ssrFormState = dispatchActionState.bind(
    null,
    currentlyRenderingFiber,
    JSCompiler_inline_result$jscomp$0,
    inRootOrSingleton,
    ssrFormState
  );
  JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
  JSCompiler_inline_result.memoizedState = action;
  return [initialStateProp, ssrFormState, !1];
}
function updateActionState(action) {
  var stateHook = updateWorkInProgressHook();
  return updateActionStateImpl(stateHook, currentHook, action);
}
function updateActionStateImpl(stateHook, currentStateHook, action) {
  currentStateHook = updateReducerImpl(
    stateHook,
    currentStateHook,
    actionStateReducer
  )[0];
  stateHook = updateReducer(basicStateReducer)[0];
  if (
    "object" === typeof currentStateHook &&
    null !== currentStateHook &&
    "function" === typeof currentStateHook.then
  )
    try {
      var state = useThenable(currentStateHook);
    } catch (x) {
      if (x === SuspenseException) throw SuspenseActionException;
      throw x;
    }
  else state = currentStateHook;
  currentStateHook = updateWorkInProgressHook();
  var actionQueue = currentStateHook.queue,
    dispatch = actionQueue.dispatch;
  action !== currentStateHook.memoizedState &&
    ((currentlyRenderingFiber.flags |= 2048),
    pushSimpleEffect(
      9,
      createEffectInstance(),
      actionStateActionEffect.bind(null, actionQueue, action),
      null
    ));
  return [state, dispatch, stateHook];
}
function actionStateActionEffect(actionQueue, action) {
  actionQueue.action = action;
}
function rerenderActionState(action) {
  var stateHook = updateWorkInProgressHook(),
    currentStateHook = currentHook;
  if (null !== currentStateHook)
    return updateActionStateImpl(stateHook, currentStateHook, action);
  updateWorkInProgressHook();
  stateHook = stateHook.memoizedState;
  currentStateHook = updateWorkInProgressHook();
  var dispatch = currentStateHook.queue.dispatch;
  currentStateHook.memoizedState = action;
  return [stateHook, dispatch, !1];
}
function pushSimpleEffect(tag, inst, create, createDeps) {
  tag = { tag: tag, create: create, deps: createDeps, inst: inst, next: null };
  inst = currentlyRenderingFiber.updateQueue;
  null === inst &&
    ((inst = createFunctionComponentUpdateQueue()),
    (currentlyRenderingFiber.updateQueue = inst));
  create = inst.lastEffect;
  null === create
    ? (inst.lastEffect = tag.next = tag)
    : ((createDeps = create.next),
      (create.next = tag),
      (tag.next = createDeps),
      (inst.lastEffect = tag));
  return tag;
}
function createEffectInstance() {
  return { destroy: void 0, resource: void 0 };
}
function updateRef() {
  return updateWorkInProgressHook().memoizedState;
}
function mountEffectImpl(fiberFlags, hookFlags, create, createDeps) {
  var hook = mountWorkInProgressHook();
  createDeps = void 0 === createDeps ? null : createDeps;
  currentlyRenderingFiber.flags |= fiberFlags;
  hook.memoizedState = pushSimpleEffect(
    1 | hookFlags,
    createEffectInstance(),
    create,
    createDeps
  );
}
function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var inst = hook.memoizedState.inst;
  null !== currentHook &&
  null !== deps &&
  areHookInputsEqual(deps, currentHook.memoizedState.deps)
    ? (hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, deps))
    : ((currentlyRenderingFiber.flags |= fiberFlags),
      (hook.memoizedState = pushSimpleEffect(
        1 | hookFlags,
        inst,
        create,
        deps
      )));
}
function mountEffect(create, createDeps) {
  mountEffectImpl(8390656, 8, create, createDeps);
}
function updateEffect(create, createDeps) {
  updateEffectImpl(2048, 8, create, createDeps);
}
function updateInsertionEffect(create, deps) {
  return updateEffectImpl(4, 2, create, deps);
}
function updateLayoutEffect(create, deps) {
  return updateEffectImpl(4, 4, create, deps);
}
function imperativeHandleEffect(create, ref) {
  if ("function" === typeof ref) {
    create = create();
    var refCleanup = ref(create);
    return function () {
      "function" === typeof refCleanup ? refCleanup() : ref(null);
    };
  }
  if (null !== ref && void 0 !== ref)
    return (
      (create = create()),
      (ref.current = create),
      function () {
        ref.current = null;
      }
    );
}
function updateImperativeHandle(ref, create, deps) {
  deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
}
function mountDebugValue() {}
function updateCallback(callback, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var prevState = hook.memoizedState;
  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
    return prevState[0];
  hook.memoizedState = [callback, deps];
  return callback;
}
function updateMemo(nextCreate, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var prevState = hook.memoizedState;
  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
    return prevState[0];
  prevState = nextCreate();
  if (shouldDoubleInvokeUserFnsInHooksDEV) {
    setIsStrictModeForDevtools(!0);
    try {
      nextCreate();
    } finally {
      setIsStrictModeForDevtools(!1);
    }
  }
  hook.memoizedState = [prevState, deps];
  return prevState;
}
function mountDeferredValueImpl(hook, value, initialValue) {
  if (void 0 === initialValue || 0 !== (renderLanes & 1073741824))
    return (hook.memoizedState = value);
  hook.memoizedState = initialValue;
  hook = requestDeferredLane();
  currentlyRenderingFiber.lanes |= hook;
  workInProgressRootSkippedLanes |= hook;
  return initialValue;
}
function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
  if (objectIs(value, prevValue)) return value;
  if (null !== currentTreeHiddenStackCursor.current)
    return (
      (hook = mountDeferredValueImpl(hook, value, initialValue)),
      objectIs(hook, prevValue) || (didReceiveUpdate = !0),
      hook
    );
  if (0 === (renderLanes & 42))
    return (didReceiveUpdate = !0), (hook.memoizedState = value);
  hook = requestDeferredLane();
  currentlyRenderingFiber.lanes |= hook;
  workInProgressRootSkippedLanes |= hook;
  return prevValue;
}
function startTransition(fiber, queue, pendingState, finishedState, callback) {
  var previousPriority = ReactDOMSharedInternals.p;
  ReactDOMSharedInternals.p =
    0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
  var prevTransition = ReactSharedInternals.T,
    currentTransition = {};
  ReactSharedInternals.T = currentTransition;
  dispatchOptimisticSetState(fiber, !1, queue, pendingState);
  try {
    var returnValue = callback(),
      onStartTransitionFinish = ReactSharedInternals.S;
    null !== onStartTransitionFinish &&
      onStartTransitionFinish(currentTransition, returnValue);
    if (
      null !== returnValue &&
      "object" === typeof returnValue &&
      "function" === typeof returnValue.then
    ) {
      var thenableForFinishedState = chainThenableValue(
        returnValue,
        finishedState
      );
      dispatchSetStateInternal(
        fiber,
        queue,
        thenableForFinishedState,
        requestUpdateLane(fiber)
      );
    } else
      dispatchSetStateInternal(
        fiber,
        queue,
        finishedState,
        requestUpdateLane(fiber)
      );
  } catch (error) {
    dispatchSetStateInternal(
      fiber,
      queue,
      { then: function () {}, status: "rejected", reason: error },
      requestUpdateLane()
    );
  } finally {
    (ReactDOMSharedInternals.p = previousPriority),
      (ReactSharedInternals.T = prevTransition);
  }
}
function noop$2() {}
function startHostTransition(formFiber, pendingState, action, formData) {
  if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
  var queue = ensureFormComponentIsStateful(formFiber).queue;
  startTransition(
    formFiber,
    queue,
    pendingState,
    sharedNotPendingObject,
    null === action
      ? noop$2
      : function () {
          requestFormReset$1(formFiber);
          return action(formData);
        }
  );
}
function ensureFormComponentIsStateful(formFiber) {
  var existingStateHook = formFiber.memoizedState;
  if (null !== existingStateHook) return existingStateHook;
  existingStateHook = {
    memoizedState: sharedNotPendingObject,
    baseState: sharedNotPendingObject,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: basicStateReducer,
      lastRenderedState: sharedNotPendingObject
    },
    next: null
  };
  var initialResetState = {};
  existingStateHook.next = {
    memoizedState: initialResetState,
    baseState: initialResetState,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: basicStateReducer,
      lastRenderedState: initialResetState
    },
    next: null
  };
  formFiber.memoizedState = existingStateHook;
  formFiber = formFiber.alternate;
  null !== formFiber && (formFiber.memoizedState = existingStateHook);
  return existingStateHook;
}
function requestFormReset$1(formFiber) {
  var resetStateQueue = ensureFormComponentIsStateful(formFiber).next.queue;
  dispatchSetStateInternal(formFiber, resetStateQueue, {}, requestUpdateLane());
}
function useHostTransitionStatus() {
  return readContext(HostTransitionContext);
}
function updateId() {
  return updateWorkInProgressHook().memoizedState;
}
function updateRefresh() {
  return updateWorkInProgressHook().memoizedState;
}
function refreshCache(fiber) {
  for (var provider = fiber.return; null !== provider; ) {
    switch (provider.tag) {
      case 24:
      case 3:
        var lane = requestUpdateLane();
        fiber = createUpdate(lane);
        var root$41 = enqueueUpdate(provider, fiber, lane);
        null !== root$41 &&
          (scheduleUpdateOnFiber(root$41, provider, lane),
          entangleTransitions(root$41, provider, lane));
        provider = { cache: createCache() };
        fiber.payload = provider;
        return;
    }
    provider = provider.return;
  }
}
function dispatchReducerAction(fiber, queue, action) {
  var lane = requestUpdateLane();
  action = {
    lane: lane,
    revertLane: 0,
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  isRenderPhaseUpdate(fiber)
    ? enqueueRenderPhaseUpdate(queue, action)
    : ((action = enqueueConcurrentHookUpdate(fiber, queue, action, lane)),
      null !== action &&
        (scheduleUpdateOnFiber(action, fiber, lane),
        entangleTransitionUpdate(action, queue, lane)));
}
function dispatchSetState(fiber, queue, action) {
  var lane = requestUpdateLane();
  dispatchSetStateInternal(fiber, queue, action, lane);
}
function dispatchSetStateInternal(fiber, queue, action, lane) {
  var update = {
    lane: lane,
    revertLane: 0,
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
  else {
    var alternate = fiber.alternate;
    if (
      0 === fiber.lanes &&
      (null === alternate || 0 === alternate.lanes) &&
      ((alternate = queue.lastRenderedReducer), null !== alternate)
    )
      try {
        var currentState = queue.lastRenderedState,
          eagerState = alternate(currentState, action);
        update.hasEagerState = !0;
        update.eagerState = eagerState;
        if (objectIs(eagerState, currentState))
          return (
            enqueueUpdate$1(fiber, queue, update, 0),
            null === workInProgressRoot && finishQueueingConcurrentUpdates(),
            !1
          );
      } catch (error) {
      } finally {
      }
    action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
    if (null !== action)
      return (
        scheduleUpdateOnFiber(action, fiber, lane),
        entangleTransitionUpdate(action, queue, lane),
        !0
      );
  }
  return !1;
}
function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
  action = {
    lane: 2,
    revertLane: requestTransitionLane(),
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (isRenderPhaseUpdate(fiber)) {
    if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
  } else
    (throwIfDuringRender = enqueueConcurrentHookUpdate(
      fiber,
      queue,
      action,
      2
    )),
      null !== throwIfDuringRender &&
        scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
}
function isRenderPhaseUpdate(fiber) {
  var alternate = fiber.alternate;
  return (
    fiber === currentlyRenderingFiber ||
    (null !== alternate && alternate === currentlyRenderingFiber)
  );
}
function enqueueRenderPhaseUpdate(queue, update) {
  didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate =
    !0;
  var pending = queue.pending;
  null === pending
    ? (update.next = update)
    : ((update.next = pending.next), (pending.next = update));
  queue.pending = update;
}
function entangleTransitionUpdate(root, queue, lane) {
  if (0 !== (lane & 4194048)) {
    var queueLanes = queue.lanes;
    queueLanes &= root.pendingLanes;
    lane |= queueLanes;
    queue.lanes = lane;
    markRootEntangled(root, lane);
  }
}
var ContextOnlyDispatcher = {
    readContext: readContext,
    use: use,
    useCallback: throwInvalidHookError,
    useContext: throwInvalidHookError,
    useEffect: throwInvalidHookError,
    useImperativeHandle: throwInvalidHookError,
    useLayoutEffect: throwInvalidHookError,
    useInsertionEffect: throwInvalidHookError,
    useMemo: throwInvalidHookError,
    useReducer: throwInvalidHookError,
    useRef: throwInvalidHookError,
    useState: throwInvalidHookError,
    useDebugValue: throwInvalidHookError,
    useDeferredValue: throwInvalidHookError,
    useTransition: throwInvalidHookError,
    useSyncExternalStore: throwInvalidHookError,
    useId: throwInvalidHookError,
    useHostTransitionStatus: throwInvalidHookError,
    useFormState: throwInvalidHookError,
    useActionState: throwInvalidHookError,
    useOptimistic: throwInvalidHookError,
    useMemoCache: throwInvalidHookError,
    useCacheRefresh: throwInvalidHookError
  },
  HooksDispatcherOnMount = {
    readContext: readContext,
    use: use,
    useCallback: function (callback, deps) {
      mountWorkInProgressHook().memoizedState = [
        callback,
        void 0 === deps ? null : deps
      ];
      return callback;
    },
    useContext: readContext,
    useEffect: mountEffect,
    useImperativeHandle: function (ref, create, deps) {
      deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
      mountEffectImpl(
        4194308,
        4,
        imperativeHandleEffect.bind(null, create, ref),
        deps
      );
    },
    useLayoutEffect: function (create, deps) {
      return mountEffectImpl(4194308, 4, create, deps);
    },
    useInsertionEffect: function (create, deps) {
      mountEffectImpl(4, 2, create, deps);
    },
    useMemo: function (nextCreate, deps) {
      var hook = mountWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      var nextValue = nextCreate();
      if (shouldDoubleInvokeUserFnsInHooksDEV) {
        setIsStrictModeForDevtools(!0);
        try {
          nextCreate();
        } finally {
          setIsStrictModeForDevtools(!1);
        }
      }
      hook.memoizedState = [nextValue, deps];
      return nextValue;
    },
    useReducer: function (reducer, initialArg, init) {
      var hook = mountWorkInProgressHook();
      if (void 0 !== init) {
        var initialState = init(initialArg);
        if (shouldDoubleInvokeUserFnsInHooksDEV) {
          setIsStrictModeForDevtools(!0);
          try {
            init(initialArg);
          } finally {
            setIsStrictModeForDevtools(!1);
          }
        }
      } else initialState = initialArg;
      hook.memoizedState = hook.baseState = initialState;
      reducer = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: reducer,
        lastRenderedState: initialState
      };
      hook.queue = reducer;
      reducer = reducer.dispatch = dispatchReducerAction.bind(
        null,
        currentlyRenderingFiber,
        reducer
      );
      return [hook.memoizedState, reducer];
    },
    useRef: function (initialValue) {
      var hook = mountWorkInProgressHook();
      initialValue = { current: initialValue };
      return (hook.memoizedState = initialValue);
    },
    useState: function (initialState) {
      initialState = mountStateImpl(initialState);
      var queue = initialState.queue,
        dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
      queue.dispatch = dispatch;
      return [initialState.memoizedState, dispatch];
    },
    useDebugValue: mountDebugValue,
    useDeferredValue: function (value, initialValue) {
      var hook = mountWorkInProgressHook();
      return mountDeferredValueImpl(hook, value, initialValue);
    },
    useTransition: function () {
      var stateHook = mountStateImpl(!1);
      stateHook = startTransition.bind(
        null,
        currentlyRenderingFiber,
        stateHook.queue,
        !0,
        !1
      );
      mountWorkInProgressHook().memoizedState = stateHook;
      return [!1, stateHook];
    },
    useSyncExternalStore: function (subscribe, getSnapshot, getServerSnapshot) {
      var fiber = currentlyRenderingFiber,
        hook = mountWorkInProgressHook();
      if (isHydrating) {
        if (void 0 === getServerSnapshot)
          throw Error(formatProdErrorMessage(407));
        getServerSnapshot = getServerSnapshot();
      } else {
        getServerSnapshot = getSnapshot();
        if (null === workInProgressRoot)
          throw Error(formatProdErrorMessage(349));
        0 !== (workInProgressRootRenderLanes & 124) ||
          pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
      }
      hook.memoizedState = getServerSnapshot;
      var inst = { value: getServerSnapshot, getSnapshot: getSnapshot };
      hook.queue = inst;
      mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [
        subscribe
      ]);
      fiber.flags |= 2048;
      pushSimpleEffect(
        9,
        createEffectInstance(),
        updateStoreInstance.bind(
          null,
          fiber,
          inst,
          getServerSnapshot,
          getSnapshot
        ),
        null
      );
      return getServerSnapshot;
    },
    useId: function () {
      var hook = mountWorkInProgressHook(),
        identifierPrefix = workInProgressRoot.identifierPrefix;
      if (isHydrating) {
        var JSCompiler_inline_result = treeContextOverflow;
        var idWithLeadingBit = treeContextId;
        JSCompiler_inline_result =
          (
            idWithLeadingBit & ~(1 << (32 - clz32(idWithLeadingBit) - 1))
          ).toString(32) + JSCompiler_inline_result;
        identifierPrefix =
          "\u00ab" + identifierPrefix + "R" + JSCompiler_inline_result;
        JSCompiler_inline_result = localIdCounter++;
        0 < JSCompiler_inline_result &&
          (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
        identifierPrefix += "\u00bb";
      } else
        (JSCompiler_inline_result = globalClientIdCounter++),
          (identifierPrefix =
            "\u00ab" +
            identifierPrefix +
            "r" +
            JSCompiler_inline_result.toString(32) +
            "\u00bb");
      return (hook.memoizedState = identifierPrefix);
    },
    useHostTransitionStatus: useHostTransitionStatus,
    useFormState: mountActionState,
    useActionState: mountActionState,
    useOptimistic: function (passthrough) {
      var hook = mountWorkInProgressHook();
      hook.memoizedState = hook.baseState = passthrough;
      var queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      hook.queue = queue;
      hook = dispatchOptimisticSetState.bind(
        null,
        currentlyRenderingFiber,
        !0,
        queue
      );
      queue.dispatch = hook;
      return [passthrough, hook];
    },
    useMemoCache: useMemoCache,
    useCacheRefresh: function () {
      return (mountWorkInProgressHook().memoizedState = refreshCache.bind(
        null,
        currentlyRenderingFiber
      ));
    }
  },
  HooksDispatcherOnUpdate = {
    readContext: readContext,
    use: use,
    useCallback: updateCallback,
    useContext: readContext,
    useEffect: updateEffect,
    useImperativeHandle: updateImperativeHandle,
    useInsertionEffect: updateInsertionEffect,
    useLayoutEffect: updateLayoutEffect,
    useMemo: updateMemo,
    useReducer: updateReducer,
    useRef: updateRef,
    useState: function () {
      return updateReducer(basicStateReducer);
    },
    useDebugValue: mountDebugValue,
    useDeferredValue: function (value, initialValue) {
      var hook = updateWorkInProgressHook();
      return updateDeferredValueImpl(
        hook,
        currentHook.memoizedState,
        value,
        initialValue
      );
    },
    useTransition: function () {
      var booleanOrThenable = updateReducer(basicStateReducer)[0],
        start = updateWorkInProgressHook().memoizedState;
      return [
        "boolean" === typeof booleanOrThenable
          ? booleanOrThenable
          : useThenable(booleanOrThenable),
        start
      ];
    },
    useSyncExternalStore: updateSyncExternalStore,
    useId: updateId,
    useHostTransitionStatus: useHostTransitionStatus,
    useFormState: updateActionState,
    useActionState: updateActionState,
    useOptimistic: function (passthrough, reducer) {
      var hook = updateWorkInProgressHook();
      return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
    },
    useMemoCache: useMemoCache,
    useCacheRefresh: updateRefresh
  },
  HooksDispatcherOnRerender = {
    readContext: readContext,
    use: use,
    useCallback: updateCallback,
    useContext: readContext,
    useEffect: updateEffect,
    useImperativeHandle: updateImperativeHandle,
    useInsertionEffect: updateInsertionEffect,
    useLayoutEffect: updateLayoutEffect,
    useMemo: updateMemo,
    useReducer: rerenderReducer,
    useRef: updateRef,
    useState: function () {
      return rerenderReducer(basicStateReducer);
    },
    useDebugValue: mountDebugValue,
    useDeferredValue: function (value, initialValue) {
      var hook = updateWorkInProgressHook();
      return null === currentHook
        ? mountDeferredValueImpl(hook, value, initialValue)
        : updateDeferredValueImpl(
            hook,
            currentHook.memoizedState,
            value,
            initialValue
          );
    },
    useTransition: function () {
      var booleanOrThenable = rerenderReducer(basicStateReducer)[0],
        start = updateWorkInProgressHook().memoizedState;
      return [
        "boolean" === typeof booleanOrThenable
          ? booleanOrThenable
          : useThenable(booleanOrThenable),
        start
      ];
    },
    useSyncExternalStore: updateSyncExternalStore,
    useId: updateId,
    useHostTransitionStatus: useHostTransitionStatus,
    useFormState: rerenderActionState,
    useActionState: rerenderActionState,
    useOptimistic: function (passthrough, reducer) {
      var hook = updateWorkInProgressHook();
      if (null !== currentHook)
        return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
      hook.baseState = passthrough;
      return [passthrough, hook.queue.dispatch];
    },
    useMemoCache: useMemoCache,
    useCacheRefresh: updateRefresh
  },
  thenableState = null,
  thenableIndexCounter = 0;
function unwrapThenable(thenable) {
  var index = thenableIndexCounter;
  thenableIndexCounter += 1;
  null === thenableState && (thenableState = []);
  return trackUsedThenable(thenableState, thenable, index);
}
function coerceRef(workInProgress, element) {
  element = element.props.ref;
  workInProgress.ref = void 0 !== element ? element : null;
}
function throwOnInvalidObjectType(returnFiber, newChild) {
  if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
    throw Error(formatProdErrorMessage(525));
  returnFiber = Object.prototype.toString.call(newChild);
  throw Error(
    formatProdErrorMessage(
      31,
      "[object Object]" === returnFiber
        ? "object with keys {" + Object.keys(newChild).join(", ") + "}"
        : returnFiber
    )
  );
}
function resolveLazy(lazyType) {
  var init = lazyType._init;
  return init(lazyType._payload);
}
function createChildReconciler(shouldTrackSideEffects) {
  function deleteChild(returnFiber, childToDelete) {
    if (shouldTrackSideEffects) {
      var deletions = returnFiber.deletions;
      null === deletions
        ? ((returnFiber.deletions = [childToDelete]), (returnFiber.flags |= 16))
        : deletions.push(childToDelete);
    }
  }
  function deleteRemainingChildren(returnFiber, currentFirstChild) {
    if (!shouldTrackSideEffects) return null;
    for (; null !== currentFirstChild; )
      deleteChild(returnFiber, currentFirstChild),
        (currentFirstChild = currentFirstChild.sibling);
    return null;
  }
  function mapRemainingChildren(currentFirstChild) {
    for (var existingChildren = new Map(); null !== currentFirstChild; )
      null !== currentFirstChild.key
        ? existingChildren.set(currentFirstChild.key, currentFirstChild)
        : existingChildren.set(currentFirstChild.index, currentFirstChild),
        (currentFirstChild = currentFirstChild.sibling);
    return existingChildren;
  }
  function useFiber(fiber, pendingProps) {
    fiber = createWorkInProgress(fiber, pendingProps);
    fiber.index = 0;
    fiber.sibling = null;
    return fiber;
  }
  function placeChild(newFiber, lastPlacedIndex, newIndex) {
    newFiber.index = newIndex;
    if (!shouldTrackSideEffects)
      return (newFiber.flags |= 1048576), lastPlacedIndex;
    newIndex = newFiber.alternate;
    if (null !== newIndex)
      return (
        (newIndex = newIndex.index),
        newIndex < lastPlacedIndex
          ? ((newFiber.flags |= 67108866), lastPlacedIndex)
          : newIndex
      );
    newFiber.flags |= 67108866;
    return lastPlacedIndex;
  }
  function placeSingleChild(newFiber) {
    shouldTrackSideEffects &&
      null === newFiber.alternate &&
      (newFiber.flags |= 67108866);
    return newFiber;
  }
  function updateTextNode(returnFiber, current, textContent, lanes) {
    if (null === current || 6 !== current.tag)
      return (
        (current = createFiberFromText(textContent, returnFiber.mode, lanes)),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, textContent);
    current.return = returnFiber;
    return current;
  }
  function updateElement(returnFiber, current, element, lanes) {
    var elementType = element.type;
    if (elementType === REACT_FRAGMENT_TYPE)
      return updateFragment(
        returnFiber,
        current,
        element.props.children,
        lanes,
        element.key
      );
    if (
      null !== current &&
      (current.elementType === elementType ||
        ("object" === typeof elementType &&
          null !== elementType &&
          elementType.$$typeof === REACT_LAZY_TYPE &&
          resolveLazy(elementType) === current.type))
    )
      return (
        (current = useFiber(current, element.props)),
        coerceRef(current, element),
        (current.return = returnFiber),
        current
      );
    current = createFiberFromTypeAndProps(
      element.type,
      element.key,
      element.props,
      null,
      returnFiber.mode,
      lanes
    );
    coerceRef(current, element);
    current.return = returnFiber;
    return current;
  }
  function updatePortal(returnFiber, current, portal, lanes) {
    if (
      null === current ||
      4 !== current.tag ||
      current.stateNode.containerInfo !== portal.containerInfo ||
      current.stateNode.implementation !== portal.implementation
    )
      return (
        (current = createFiberFromPortal(portal, returnFiber.mode, lanes)),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, portal.children || []);
    current.return = returnFiber;
    return current;
  }
  function updateFragment(returnFiber, current, fragment, lanes, key) {
    if (null === current || 7 !== current.tag)
      return (
        (current = createFiberFromFragment(
          fragment,
          returnFiber.mode,
          lanes,
          key
        )),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, fragment);
    current.return = returnFiber;
    return current;
  }
  function createChild(returnFiber, newChild, lanes) {
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild ||
      "bigint" === typeof newChild
    )
      return (
        (newChild = createFiberFromText(
          "" + newChild,
          returnFiber.mode,
          lanes
        )),
        (newChild.return = returnFiber),
        newChild
      );
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return (
            (lanes = createFiberFromTypeAndProps(
              newChild.type,
              newChild.key,
              newChild.props,
              null,
              returnFiber.mode,
              lanes
            )),
            coerceRef(lanes, newChild),
            (lanes.return = returnFiber),
            lanes
          );
        case REACT_PORTAL_TYPE:
          return (
            (newChild = createFiberFromPortal(
              newChild,
              returnFiber.mode,
              lanes
            )),
            (newChild.return = returnFiber),
            newChild
          );
        case REACT_LAZY_TYPE:
          var init = newChild._init;
          newChild = init(newChild._payload);
          return createChild(returnFiber, newChild, lanes);
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return (
          (newChild = createFiberFromFragment(
            newChild,
            returnFiber.mode,
            lanes,
            null
          )),
          (newChild.return = returnFiber),
          newChild
        );
      if ("function" === typeof newChild.then)
        return createChild(returnFiber, unwrapThenable(newChild), lanes);
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return createChild(
          returnFiber,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function updateSlot(returnFiber, oldFiber, newChild, lanes) {
    var key = null !== oldFiber ? oldFiber.key : null;
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild ||
      "bigint" === typeof newChild
    )
      return null !== key
        ? null
        : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return newChild.key === key
            ? updateElement(returnFiber, oldFiber, newChild, lanes)
            : null;
        case REACT_PORTAL_TYPE:
          return newChild.key === key
            ? updatePortal(returnFiber, oldFiber, newChild, lanes)
            : null;
        case REACT_LAZY_TYPE:
          return (
            (key = newChild._init),
            (newChild = key(newChild._payload)),
            updateSlot(returnFiber, oldFiber, newChild, lanes)
          );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return null !== key
          ? null
          : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
      if ("function" === typeof newChild.then)
        return updateSlot(
          returnFiber,
          oldFiber,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return updateSlot(
          returnFiber,
          oldFiber,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function updateFromMap(
    existingChildren,
    returnFiber,
    newIdx,
    newChild,
    lanes
  ) {
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild ||
      "bigint" === typeof newChild
    )
      return (
        (existingChildren = existingChildren.get(newIdx) || null),
        updateTextNode(returnFiber, existingChildren, "" + newChild, lanes)
      );
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return (
            (existingChildren =
              existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null),
            updateElement(returnFiber, existingChildren, newChild, lanes)
          );
        case REACT_PORTAL_TYPE:
          return (
            (existingChildren =
              existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null),
            updatePortal(returnFiber, existingChildren, newChild, lanes)
          );
        case REACT_LAZY_TYPE:
          var init = newChild._init;
          newChild = init(newChild._payload);
          return updateFromMap(
            existingChildren,
            returnFiber,
            newIdx,
            newChild,
            lanes
          );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return (
          (existingChildren = existingChildren.get(newIdx) || null),
          updateFragment(returnFiber, existingChildren, newChild, lanes, null)
        );
      if ("function" === typeof newChild.then)
        return updateFromMap(
          existingChildren,
          returnFiber,
          newIdx,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return updateFromMap(
          existingChildren,
          returnFiber,
          newIdx,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function reconcileChildrenArray(
    returnFiber,
    currentFirstChild,
    newChildren,
    lanes
  ) {
    for (
      var resultingFirstChild = null,
        previousNewFiber = null,
        oldFiber = currentFirstChild,
        newIdx = (currentFirstChild = 0),
        nextOldFiber = null;
      null !== oldFiber && newIdx < newChildren.length;
      newIdx++
    ) {
      oldFiber.index > newIdx
        ? ((nextOldFiber = oldFiber), (oldFiber = null))
        : (nextOldFiber = oldFiber.sibling);
      var newFiber = updateSlot(
        returnFiber,
        oldFiber,
        newChildren[newIdx],
        lanes
      );
      if (null === newFiber) {
        null === oldFiber && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects &&
        oldFiber &&
        null === newFiber.alternate &&
        deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      null === previousNewFiber
        ? (resultingFirstChild = newFiber)
        : (previousNewFiber.sibling = newFiber);
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (newIdx === newChildren.length)
      return (
        deleteRemainingChildren(returnFiber, oldFiber),
        isHydrating && pushTreeFork(returnFiber, newIdx),
        resultingFirstChild
      );
    if (null === oldFiber) {
      for (; newIdx < newChildren.length; newIdx++)
        (oldFiber = createChild(returnFiber, newChildren[newIdx], lanes)),
          null !== oldFiber &&
            ((currentFirstChild = placeChild(
              oldFiber,
              currentFirstChild,
              newIdx
            )),
            null === previousNewFiber
              ? (resultingFirstChild = oldFiber)
              : (previousNewFiber.sibling = oldFiber),
            (previousNewFiber = oldFiber));
      isHydrating && pushTreeFork(returnFiber, newIdx);
      return resultingFirstChild;
    }
    for (
      oldFiber = mapRemainingChildren(oldFiber);
      newIdx < newChildren.length;
      newIdx++
    )
      (nextOldFiber = updateFromMap(
        oldFiber,
        returnFiber,
        newIdx,
        newChildren[newIdx],
        lanes
      )),
        null !== nextOldFiber &&
          (shouldTrackSideEffects &&
            null !== nextOldFiber.alternate &&
            oldFiber.delete(
              null === nextOldFiber.key ? newIdx : nextOldFiber.key
            ),
          (currentFirstChild = placeChild(
            nextOldFiber,
            currentFirstChild,
            newIdx
          )),
          null === previousNewFiber
            ? (resultingFirstChild = nextOldFiber)
            : (previousNewFiber.sibling = nextOldFiber),
          (previousNewFiber = nextOldFiber));
    shouldTrackSideEffects &&
      oldFiber.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    isHydrating && pushTreeFork(returnFiber, newIdx);
    return resultingFirstChild;
  }
  function reconcileChildrenIterator(
    returnFiber,
    currentFirstChild,
    newChildren,
    lanes
  ) {
    if (null == newChildren) throw Error(formatProdErrorMessage(151));
    for (
      var resultingFirstChild = null,
        previousNewFiber = null,
        oldFiber = currentFirstChild,
        newIdx = (currentFirstChild = 0),
        nextOldFiber = null,
        step = newChildren.next();
      null !== oldFiber && !step.done;
      newIdx++, step = newChildren.next()
    ) {
      oldFiber.index > newIdx
        ? ((nextOldFiber = oldFiber), (oldFiber = null))
        : (nextOldFiber = oldFiber.sibling);
      var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
      if (null === newFiber) {
        null === oldFiber && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects &&
        oldFiber &&
        null === newFiber.alternate &&
        deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      null === previousNewFiber
        ? (resultingFirstChild = newFiber)
        : (previousNewFiber.sibling = newFiber);
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (step.done)
      return (
        deleteRemainingChildren(returnFiber, oldFiber),
        isHydrating && pushTreeFork(returnFiber, newIdx),
        resultingFirstChild
      );
    if (null === oldFiber) {
      for (; !step.done; newIdx++, step = newChildren.next())
        (step = createChild(returnFiber, step.value, lanes)),
          null !== step &&
            ((currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
            null === previousNewFiber
              ? (resultingFirstChild = step)
              : (previousNewFiber.sibling = step),
            (previousNewFiber = step));
      isHydrating && pushTreeFork(returnFiber, newIdx);
      return resultingFirstChild;
    }
    for (
      oldFiber = mapRemainingChildren(oldFiber);
      !step.done;
      newIdx++, step = newChildren.next()
    )
      (step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes)),
        null !== step &&
          (shouldTrackSideEffects &&
            null !== step.alternate &&
            oldFiber.delete(null === step.key ? newIdx : step.key),
          (currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
          null === previousNewFiber
            ? (resultingFirstChild = step)
            : (previousNewFiber.sibling = step),
          (previousNewFiber = step));
    shouldTrackSideEffects &&
      oldFiber.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    isHydrating && pushTreeFork(returnFiber, newIdx);
    return resultingFirstChild;
  }
  function reconcileChildFibersImpl(
    returnFiber,
    currentFirstChild,
    newChild,
    lanes
  ) {
    "object" === typeof newChild &&
      null !== newChild &&
      newChild.type === REACT_FRAGMENT_TYPE &&
      null === newChild.key &&
      (newChild = newChild.props.children);
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          a: {
            for (var key = newChild.key; null !== currentFirstChild; ) {
              if (currentFirstChild.key === key) {
                key = newChild.type;
                if (key === REACT_FRAGMENT_TYPE) {
                  if (7 === currentFirstChild.tag) {
                    deleteRemainingChildren(
                      returnFiber,
                      currentFirstChild.sibling
                    );
                    lanes = useFiber(
                      currentFirstChild,
                      newChild.props.children
                    );
                    lanes.return = returnFiber;
                    returnFiber = lanes;
                    break a;
                  }
                } else if (
                  currentFirstChild.elementType === key ||
                  ("object" === typeof key &&
                    null !== key &&
                    key.$$typeof === REACT_LAZY_TYPE &&
                    resolveLazy(key) === currentFirstChild.type)
                ) {
                  deleteRemainingChildren(
                    returnFiber,
                    currentFirstChild.sibling
                  );
                  lanes = useFiber(currentFirstChild, newChild.props);
                  coerceRef(lanes, newChild);
                  lanes.return = returnFiber;
                  returnFiber = lanes;
                  break a;
                }
                deleteRemainingChildren(returnFiber, currentFirstChild);
                break;
              } else deleteChild(returnFiber, currentFirstChild);
              currentFirstChild = currentFirstChild.sibling;
            }
            newChild.type === REACT_FRAGMENT_TYPE
              ? ((lanes = createFiberFromFragment(
                  newChild.props.children,
                  returnFiber.mode,
                  lanes,
                  newChild.key
                )),
                (lanes.return = returnFiber),
                (returnFiber = lanes))
              : ((lanes = createFiberFromTypeAndProps(
                  newChild.type,
                  newChild.key,
                  newChild.props,
                  null,
                  returnFiber.mode,
                  lanes
                )),
                coerceRef(lanes, newChild),
                (lanes.return = returnFiber),
                (returnFiber = lanes));
          }
          return placeSingleChild(returnFiber);
        case REACT_PORTAL_TYPE:
          a: {
            for (key = newChild.key; null !== currentFirstChild; ) {
              if (currentFirstChild.key === key)
                if (
                  4 === currentFirstChild.tag &&
                  currentFirstChild.stateNode.containerInfo ===
                    newChild.containerInfo &&
                  currentFirstChild.stateNode.implementation ===
                    newChild.implementation
                ) {
                  deleteRemainingChildren(
                    returnFiber,
                    currentFirstChild.sibling
                  );
                  lanes = useFiber(currentFirstChild, newChild.children || []);
                  lanes.return = returnFiber;
                  returnFiber = lanes;
                  break a;
                } else {
                  deleteRemainingChildren(returnFiber, currentFirstChild);
                  break;
                }
              else deleteChild(returnFiber, currentFirstChild);
              currentFirstChild = currentFirstChild.sibling;
            }
            lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
            lanes.return = returnFiber;
            returnFiber = lanes;
          }
          return placeSingleChild(returnFiber);
        case REACT_LAZY_TYPE:
          return (
            (key = newChild._init),
            (newChild = key(newChild._payload)),
            reconcileChildFibersImpl(
              returnFiber,
              currentFirstChild,
              newChild,
              lanes
            )
          );
      }
      if (isArrayImpl(newChild))
        return reconcileChildrenArray(
          returnFiber,
          currentFirstChild,
          newChild,
          lanes
        );
      if (getIteratorFn(newChild)) {
        key = getIteratorFn(newChild);
        if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
        newChild = key.call(newChild);
        return reconcileChildrenIterator(
          returnFiber,
          currentFirstChild,
          newChild,
          lanes
        );
      }
      if ("function" === typeof newChild.then)
        return reconcileChildFibersImpl(
          returnFiber,
          currentFirstChild,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return reconcileChildFibersImpl(
          returnFiber,
          currentFirstChild,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild ||
      "bigint" === typeof newChild
      ? ((newChild = "" + newChild),
        null !== currentFirstChild && 6 === currentFirstChild.tag
          ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling),
            (lanes = useFiber(currentFirstChild, newChild)),
            (lanes.return = returnFiber),
            (returnFiber = lanes))
          : (deleteRemainingChildren(returnFiber, currentFirstChild),
            (lanes = createFiberFromText(newChild, returnFiber.mode, lanes)),
            (lanes.return = returnFiber),
            (returnFiber = lanes)),
        placeSingleChild(returnFiber))
      : deleteRemainingChildren(returnFiber, currentFirstChild);
  }
  return function (returnFiber, currentFirstChild, newChild, lanes) {
    try {
      thenableIndexCounter = 0;
      var firstChildFiber = reconcileChildFibersImpl(
        returnFiber,
        currentFirstChild,
        newChild,
        lanes
      );
      thenableState = null;
      return firstChildFiber;
    } catch (x) {
      if (x === SuspenseException || x === SuspenseActionException) throw x;
      var fiber = createFiberImplClass(29, x, null, returnFiber.mode);
      fiber.lanes = lanes;
      fiber.return = returnFiber;
      return fiber;
    } finally {
    }
  };
}
var reconcileChildFibers = createChildReconciler(!0),
  mountChildFibers = createChildReconciler(!1),
  suspenseHandlerStackCursor = createCursor(null),
  shellBoundary = null;
function pushPrimaryTreeSuspenseHandler(handler) {
  var current = handler.alternate;
  push(suspenseStackCursor, suspenseStackCursor.current & 1);
  push(suspenseHandlerStackCursor, handler);
  null === shellBoundary &&
    (null === current || null !== currentTreeHiddenStackCursor.current
      ? (shellBoundary = handler)
      : null !== current.memoizedState && (shellBoundary = handler));
}
function pushOffscreenSuspenseHandler(fiber) {
  if (22 === fiber.tag) {
    if (
      (push(suspenseStackCursor, suspenseStackCursor.current),
      push(suspenseHandlerStackCursor, fiber),
      null === shellBoundary)
    ) {
      var current = fiber.alternate;
      null !== current &&
        null !== current.memoizedState &&
        (shellBoundary = fiber);
    }
  } else reuseSuspenseHandlerOnStack(fiber);
}
function reuseSuspenseHandlerOnStack() {
  push(suspenseStackCursor, suspenseStackCursor.current);
  push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
}
function popSuspenseHandler(fiber) {
  pop(suspenseHandlerStackCursor);
  shellBoundary === fiber && (shellBoundary = null);
  pop(suspenseStackCursor);
}
var suspenseStackCursor = createCursor(0);
function findFirstSuspended(row) {
  for (var node = row; null !== node; ) {
    if (13 === node.tag) {
      var state = node.memoizedState;
      if (
        null !== state &&
        ((state = state.dehydrated),
        null === state ||
          "$?" === state.data ||
          isSuspenseInstanceFallback(state))
      )
        return node;
    } else if (19 === node.tag && void 0 !== node.memoizedProps.revealOrder) {
      if (0 !== (node.flags & 128)) return node;
    } else if (null !== node.child) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === row) break;
    for (; null === node.sibling; ) {
      if (null === node.return || node.return === row) return null;
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
  return null;
}
function applyDerivedStateFromProps(
  workInProgress,
  ctor,
  getDerivedStateFromProps,
  nextProps
) {
  ctor = workInProgress.memoizedState;
  getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
  getDerivedStateFromProps =
    null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps
      ? ctor
      : assign({}, ctor, getDerivedStateFromProps);
  workInProgress.memoizedState = getDerivedStateFromProps;
  0 === workInProgress.lanes &&
    (workInProgress.updateQueue.baseState = getDerivedStateFromProps);
}
var classComponentUpdater = {
  enqueueSetState: function (inst, payload, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(),
      update = createUpdate(lane);
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    payload = enqueueUpdate(inst, update, lane);
    null !== payload &&
      (scheduleUpdateOnFiber(payload, inst, lane),
      entangleTransitions(payload, inst, lane));
  },
  enqueueReplaceState: function (inst, payload, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(),
      update = createUpdate(lane);
    update.tag = 1;
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    payload = enqueueUpdate(inst, update, lane);
    null !== payload &&
      (scheduleUpdateOnFiber(payload, inst, lane),
      entangleTransitions(payload, inst, lane));
  },
  enqueueForceUpdate: function (inst, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(),
      update = createUpdate(lane);
    update.tag = 2;
    void 0 !== callback && null !== callback && (update.callback = callback);
    callback = enqueueUpdate(inst, update, lane);
    null !== callback &&
      (scheduleUpdateOnFiber(callback, inst, lane),
      entangleTransitions(callback, inst, lane));
  }
};
function checkShouldComponentUpdate(
  workInProgress,
  ctor,
  oldProps,
  newProps,
  oldState,
  newState,
  nextContext
) {
  workInProgress = workInProgress.stateNode;
  return "function" === typeof workInProgress.shouldComponentUpdate
    ? workInProgress.shouldComponentUpdate(newProps, newState, nextContext)
    : ctor.prototype && ctor.prototype.isPureReactComponent
      ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
      : !0;
}
function callComponentWillReceiveProps(
  workInProgress,
  instance,
  newProps,
  nextContext
) {
  workInProgress = instance.state;
  "function" === typeof instance.componentWillReceiveProps &&
    instance.componentWillReceiveProps(newProps, nextContext);
  "function" === typeof instance.UNSAFE_componentWillReceiveProps &&
    instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
  instance.state !== workInProgress &&
    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
}
function resolveClassComponentProps(Component, baseProps) {
  var newProps = baseProps;
  if ("ref" in baseProps) {
    newProps = {};
    for (var propName in baseProps)
      "ref" !== propName && (newProps[propName] = baseProps[propName]);
  }
  if ((Component = Component.defaultProps)) {
    newProps === baseProps && (newProps = assign({}, newProps));
    for (var propName$73 in Component)
      void 0 === newProps[propName$73] &&
        (newProps[propName$73] = Component[propName$73]);
  }
  return newProps;
}
var reportGlobalError =
  "function" === typeof reportError
    ? reportError
    : function (error) {
        if (
          "object" === typeof window &&
          "function" === typeof window.ErrorEvent
        ) {
          var event = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message:
              "object" === typeof error &&
              null !== error &&
              "string" === typeof error.message
                ? String(error.message)
                : String(error),
            error: error
          });
          if (!window.dispatchEvent(event)) return;
        } else if (
          "object" === typeof process &&
          "function" === typeof process.emit
        ) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      };
function defaultOnUncaughtError(error) {
  reportGlobalError(error);
}
function defaultOnCaughtError(error) {
  console.error(error);
}
function defaultOnRecoverableError(error) {
  reportGlobalError(error);
}
function logUncaughtError(root, errorInfo) {
  try {
    var onUncaughtError = root.onUncaughtError;
    onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
  } catch (e$74) {
    setTimeout(function () {
      throw e$74;
    });
  }
}
function logCaughtError(root, boundary, errorInfo) {
  try {
    var onCaughtError = root.onCaughtError;
    onCaughtError(errorInfo.value, {
      componentStack: errorInfo.stack,
      errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
    });
  } catch (e$75) {
    setTimeout(function () {
      throw e$75;
    });
  }
}
function createRootErrorUpdate(root, errorInfo, lane) {
  lane = createUpdate(lane);
  lane.tag = 3;
  lane.payload = { element: null };
  lane.callback = function () {
    logUncaughtError(root, errorInfo);
  };
  return lane;
}
function createClassErrorUpdate(lane) {
  lane = createUpdate(lane);
  lane.tag = 3;
  return lane;
}
function initializeClassErrorUpdate(update, root, fiber, errorInfo) {
  var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
  if ("function" === typeof getDerivedStateFromError) {
    var error = errorInfo.value;
    update.payload = function () {
      return getDerivedStateFromError(error);
    };
    update.callback = function () {
      logCaughtError(root, fiber, errorInfo);
    };
  }
  var inst = fiber.stateNode;
  null !== inst &&
    "function" === typeof inst.componentDidCatch &&
    (update.callback = function () {
      logCaughtError(root, fiber, errorInfo);
      "function" !== typeof getDerivedStateFromError &&
        (null === legacyErrorBoundariesThatAlreadyFailed
          ? (legacyErrorBoundariesThatAlreadyFailed = new Set([this]))
          : legacyErrorBoundariesThatAlreadyFailed.add(this));
      var stack = errorInfo.stack;
      this.componentDidCatch(errorInfo.value, {
        componentStack: null !== stack ? stack : ""
      });
    });
}
function throwException(
  root,
  returnFiber,
  sourceFiber,
  value,
  rootRenderLanes
) {
  sourceFiber.flags |= 32768;
  if (
    null !== value &&
    "object" === typeof value &&
    "function" === typeof value.then
  ) {
    returnFiber = sourceFiber.alternate;
    null !== returnFiber &&
      propagateParentContextChanges(
        returnFiber,
        sourceFiber,
        rootRenderLanes,
        !0
      );
    sourceFiber = suspenseHandlerStackCursor.current;
    if (null !== sourceFiber) {
      switch (sourceFiber.tag) {
        case 13:
          return (
            null === shellBoundary
              ? renderDidSuspendDelayIfPossible()
              : null === sourceFiber.alternate &&
                0 === workInProgressRootExitStatus &&
                (workInProgressRootExitStatus = 3),
            (sourceFiber.flags &= -257),
            (sourceFiber.flags |= 65536),
            (sourceFiber.lanes = rootRenderLanes),
            value === noopSuspenseyCommitThenable
              ? (sourceFiber.flags |= 16384)
              : ((returnFiber = sourceFiber.updateQueue),
                null === returnFiber
                  ? (sourceFiber.updateQueue = new Set([value]))
                  : returnFiber.add(value),
                attachPingListener(root, value, rootRenderLanes)),
            !1
          );
        case 22:
          return (
            (sourceFiber.flags |= 65536),
            value === noopSuspenseyCommitThenable
              ? (sourceFiber.flags |= 16384)
              : ((returnFiber = sourceFiber.updateQueue),
                null === returnFiber
                  ? ((returnFiber = {
                      transitions: null,
                      markerInstances: null,
                      retryQueue: new Set([value])
                    }),
                    (sourceFiber.updateQueue = returnFiber))
                  : ((sourceFiber = returnFiber.retryQueue),
                    null === sourceFiber
                      ? (returnFiber.retryQueue = new Set([value]))
                      : sourceFiber.add(value)),
                attachPingListener(root, value, rootRenderLanes)),
            !1
          );
      }
      throw Error(formatProdErrorMessage(435, sourceFiber.tag));
    }
    attachPingListener(root, value, rootRenderLanes);
    renderDidSuspendDelayIfPossible();
    return !1;
  }
  if (isHydrating)
    return (
      (returnFiber = suspenseHandlerStackCursor.current),
      null !== returnFiber
        ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256),
          (returnFiber.flags |= 65536),
          (returnFiber.lanes = rootRenderLanes),
          value !== HydrationMismatchException &&
            ((root = Error(formatProdErrorMessage(422), { cause: value })),
            queueHydrationError(createCapturedValueAtFiber(root, sourceFiber))))
        : (value !== HydrationMismatchException &&
            ((returnFiber = Error(formatProdErrorMessage(423), {
              cause: value
            })),
            queueHydrationError(
              createCapturedValueAtFiber(returnFiber, sourceFiber)
            )),
          (root = root.current.alternate),
          (root.flags |= 65536),
          (rootRenderLanes &= -rootRenderLanes),
          (root.lanes |= rootRenderLanes),
          (value = createCapturedValueAtFiber(value, sourceFiber)),
          (rootRenderLanes = createRootErrorUpdate(
            root.stateNode,
            value,
            rootRenderLanes
          )),
          enqueueCapturedUpdate(root, rootRenderLanes),
          4 !== workInProgressRootExitStatus &&
            (workInProgressRootExitStatus = 2)),
      !1
    );
  var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
  wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
  null === workInProgressRootConcurrentErrors
    ? (workInProgressRootConcurrentErrors = [wrapperError])
    : workInProgressRootConcurrentErrors.push(wrapperError);
  4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
  if (null === returnFiber) return !0;
  value = createCapturedValueAtFiber(value, sourceFiber);
  sourceFiber = returnFiber;
  do {
    switch (sourceFiber.tag) {
      case 3:
        return (
          (sourceFiber.flags |= 65536),
          (root = rootRenderLanes & -rootRenderLanes),
          (sourceFiber.lanes |= root),
          (root = createRootErrorUpdate(sourceFiber.stateNode, value, root)),
          enqueueCapturedUpdate(sourceFiber, root),
          !1
        );
      case 1:
        if (
          ((returnFiber = sourceFiber.type),
          (wrapperError = sourceFiber.stateNode),
          0 === (sourceFiber.flags & 128) &&
            ("function" === typeof returnFiber.getDerivedStateFromError ||
              (null !== wrapperError &&
                "function" === typeof wrapperError.componentDidCatch &&
                (null === legacyErrorBoundariesThatAlreadyFailed ||
                  !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError)))))
        )
          return (
            (sourceFiber.flags |= 65536),
            (rootRenderLanes &= -rootRenderLanes),
            (sourceFiber.lanes |= rootRenderLanes),
            (rootRenderLanes = createClassErrorUpdate(rootRenderLanes)),
            initializeClassErrorUpdate(
              rootRenderLanes,
              root,
              sourceFiber,
              value
            ),
            enqueueCapturedUpdate(sourceFiber, rootRenderLanes),
            !1
          );
    }
    sourceFiber = sourceFiber.return;
  } while (null !== sourceFiber);
  return !1;
}
var SelectiveHydrationException = Error(formatProdErrorMessage(461)),
  didReceiveUpdate = !1;
function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
  workInProgress.child =
    null === current
      ? mountChildFibers(workInProgress, null, nextChildren, renderLanes)
      : reconcileChildFibers(
          workInProgress,
          current.child,
          nextChildren,
          renderLanes
        );
}
function updateForwardRef(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  Component = Component.render;
  var ref = workInProgress.ref;
  if ("ref" in nextProps) {
    var propsWithoutRef = {};
    for (var key in nextProps)
      "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
  } else propsWithoutRef = nextProps;
  prepareToReadContext(workInProgress);
  nextProps = renderWithHooks(
    current,
    workInProgress,
    Component,
    propsWithoutRef,
    ref,
    renderLanes
  );
  key = checkDidRenderIdHook();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  isHydrating && key && pushMaterializedTreeId(workInProgress);
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  return workInProgress.child;
}
function updateMemoComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (null === current) {
    var type = Component.type;
    if (
      "function" === typeof type &&
      !shouldConstruct(type) &&
      void 0 === type.defaultProps &&
      null === Component.compare
    )
      return (
        (workInProgress.tag = 15),
        (workInProgress.type = type),
        updateSimpleMemoComponent(
          current,
          workInProgress,
          type,
          nextProps,
          renderLanes
        )
      );
    current = createFiberFromTypeAndProps(
      Component.type,
      null,
      nextProps,
      workInProgress,
      workInProgress.mode,
      renderLanes
    );
    current.ref = workInProgress.ref;
    current.return = workInProgress;
    return (workInProgress.child = current);
  }
  type = current.child;
  if (!checkScheduledUpdateOrContext(current, renderLanes)) {
    var prevProps = type.memoizedProps;
    Component = Component.compare;
    Component = null !== Component ? Component : shallowEqual;
    if (Component(prevProps, nextProps) && current.ref === workInProgress.ref)
      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
  }
  workInProgress.flags |= 1;
  current = createWorkInProgress(type, nextProps);
  current.ref = workInProgress.ref;
  current.return = workInProgress;
  return (workInProgress.child = current);
}
function updateSimpleMemoComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (null !== current) {
    var prevProps = current.memoizedProps;
    if (
      shallowEqual(prevProps, nextProps) &&
      current.ref === workInProgress.ref
    )
      if (
        ((didReceiveUpdate = !1),
        (workInProgress.pendingProps = nextProps = prevProps),
        checkScheduledUpdateOrContext(current, renderLanes))
      )
        0 !== (current.flags & 131072) && (didReceiveUpdate = !0);
      else
        return (
          (workInProgress.lanes = current.lanes),
          bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
        );
  }
  return updateFunctionComponent(
    current,
    workInProgress,
    Component,
    nextProps,
    renderLanes
  );
}
function updateOffscreenComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    nextChildren = nextProps.children,
    prevState = null !== current ? current.memoizedState : null;
  if ("hidden" === nextProps.mode) {
    if (0 !== (workInProgress.flags & 128)) {
      nextProps =
        null !== prevState ? prevState.baseLanes | renderLanes : renderLanes;
      if (null !== current) {
        nextChildren = workInProgress.child = current.child;
        for (prevState = 0; null !== nextChildren; )
          (prevState =
            prevState | nextChildren.lanes | nextChildren.childLanes),
            (nextChildren = nextChildren.sibling);
        workInProgress.childLanes = prevState & ~nextProps;
      } else (workInProgress.childLanes = 0), (workInProgress.child = null);
      return deferHiddenOffscreenComponent(
        current,
        workInProgress,
        nextProps,
        renderLanes
      );
    }
    if (0 !== (renderLanes & 536870912))
      (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
        null !== current &&
          pushTransition(
            workInProgress,
            null !== prevState ? prevState.cachePool : null
          ),
        null !== prevState
          ? pushHiddenContext(workInProgress, prevState)
          : reuseHiddenContextOnStack(),
        pushOffscreenSuspenseHandler(workInProgress);
    else
      return (
        (workInProgress.lanes = workInProgress.childLanes = 536870912),
        deferHiddenOffscreenComponent(
          current,
          workInProgress,
          null !== prevState ? prevState.baseLanes | renderLanes : renderLanes,
          renderLanes
        )
      );
  } else
    null !== prevState
      ? (pushTransition(workInProgress, prevState.cachePool),
        pushHiddenContext(workInProgress, prevState),
        reuseSuspenseHandlerOnStack(workInProgress),
        (workInProgress.memoizedState = null))
      : (null !== current && pushTransition(workInProgress, null),
        reuseHiddenContextOnStack(),
        reuseSuspenseHandlerOnStack(workInProgress));
  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  return workInProgress.child;
}
function deferHiddenOffscreenComponent(
  current,
  workInProgress,
  nextBaseLanes,
  renderLanes
) {
  var JSCompiler_inline_result = peekCacheFromPool();
  JSCompiler_inline_result =
    null === JSCompiler_inline_result
      ? null
      : { parent: CacheContext._currentValue, pool: JSCompiler_inline_result };
  workInProgress.memoizedState = {
    baseLanes: nextBaseLanes,
    cachePool: JSCompiler_inline_result
  };
  null !== current && pushTransition(workInProgress, null);
  reuseHiddenContextOnStack();
  pushOffscreenSuspenseHandler(workInProgress);
  null !== current &&
    propagateParentContextChanges(current, workInProgress, renderLanes, !0);
  return null;
}
function markRef(current, workInProgress) {
  var ref = workInProgress.ref;
  if (null === ref)
    null !== current &&
      null !== current.ref &&
      (workInProgress.flags |= 4194816);
  else {
    if ("function" !== typeof ref && "object" !== typeof ref)
      throw Error(formatProdErrorMessage(284));
    if (null === current || current.ref !== ref)
      workInProgress.flags |= 4194816;
  }
}
function updateFunctionComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  prepareToReadContext(workInProgress);
  Component = renderWithHooks(
    current,
    workInProgress,
    Component,
    nextProps,
    void 0,
    renderLanes
  );
  nextProps = checkDidRenderIdHook();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  isHydrating && nextProps && pushMaterializedTreeId(workInProgress);
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, Component, renderLanes);
  return workInProgress.child;
}
function replayFunctionComponent(
  current,
  workInProgress,
  nextProps,
  Component,
  secondArg,
  renderLanes
) {
  prepareToReadContext(workInProgress);
  workInProgress.updateQueue = null;
  nextProps = renderWithHooksAgain(
    workInProgress,
    Component,
    nextProps,
    secondArg
  );
  finishRenderingHooks(current);
  Component = checkDidRenderIdHook();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  isHydrating && Component && pushMaterializedTreeId(workInProgress);
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  return workInProgress.child;
}
function updateClassComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  prepareToReadContext(workInProgress);
  if (null === workInProgress.stateNode) {
    var context = emptyContextObject,
      contextType = Component.contextType;
    "object" === typeof contextType &&
      null !== contextType &&
      (context = readContext(contextType));
    context = new Component(nextProps, context);
    workInProgress.memoizedState =
      null !== context.state && void 0 !== context.state ? context.state : null;
    context.updater = classComponentUpdater;
    workInProgress.stateNode = context;
    context._reactInternals = workInProgress;
    context = workInProgress.stateNode;
    context.props = nextProps;
    context.state = workInProgress.memoizedState;
    context.refs = {};
    initializeUpdateQueue(workInProgress);
    contextType = Component.contextType;
    context.context =
      "object" === typeof contextType && null !== contextType
        ? readContext(contextType)
        : emptyContextObject;
    context.state = workInProgress.memoizedState;
    contextType = Component.getDerivedStateFromProps;
    "function" === typeof contextType &&
      (applyDerivedStateFromProps(
        workInProgress,
        Component,
        contextType,
        nextProps
      ),
      (context.state = workInProgress.memoizedState));
    "function" === typeof Component.getDerivedStateFromProps ||
      "function" === typeof context.getSnapshotBeforeUpdate ||
      ("function" !== typeof context.UNSAFE_componentWillMount &&
        "function" !== typeof context.componentWillMount) ||
      ((contextType = context.state),
      "function" === typeof context.componentWillMount &&
        context.componentWillMount(),
      "function" === typeof context.UNSAFE_componentWillMount &&
        context.UNSAFE_componentWillMount(),
      contextType !== context.state &&
        classComponentUpdater.enqueueReplaceState(context, context.state, null),
      processUpdateQueue(workInProgress, nextProps, context, renderLanes),
      suspendIfUpdateReadFromEntangledAsyncAction(),
      (context.state = workInProgress.memoizedState));
    "function" === typeof context.componentDidMount &&
      (workInProgress.flags |= 4194308);
    nextProps = !0;
  } else if (null === current) {
    context = workInProgress.stateNode;
    var unresolvedOldProps = workInProgress.memoizedProps,
      oldProps = resolveClassComponentProps(Component, unresolvedOldProps);
    context.props = oldProps;
    var oldContext = context.context,
      contextType$jscomp$0 = Component.contextType;
    contextType = emptyContextObject;
    "object" === typeof contextType$jscomp$0 &&
      null !== contextType$jscomp$0 &&
      (contextType = readContext(contextType$jscomp$0));
    var getDerivedStateFromProps = Component.getDerivedStateFromProps;
    contextType$jscomp$0 =
      "function" === typeof getDerivedStateFromProps ||
      "function" === typeof context.getSnapshotBeforeUpdate;
    unresolvedOldProps = workInProgress.pendingProps !== unresolvedOldProps;
    contextType$jscomp$0 ||
      ("function" !== typeof context.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof context.componentWillReceiveProps) ||
      ((unresolvedOldProps || oldContext !== contextType) &&
        callComponentWillReceiveProps(
          workInProgress,
          context,
          nextProps,
          contextType
        ));
    hasForceUpdate = !1;
    var oldState = workInProgress.memoizedState;
    context.state = oldState;
    processUpdateQueue(workInProgress, nextProps, context, renderLanes);
    suspendIfUpdateReadFromEntangledAsyncAction();
    oldContext = workInProgress.memoizedState;
    unresolvedOldProps || oldState !== oldContext || hasForceUpdate
      ? ("function" === typeof getDerivedStateFromProps &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            getDerivedStateFromProps,
            nextProps
          ),
          (oldContext = workInProgress.memoizedState)),
        (oldProps =
          hasForceUpdate ||
          checkShouldComponentUpdate(
            workInProgress,
            Component,
            oldProps,
            nextProps,
            oldState,
            oldContext,
            contextType
          ))
          ? (contextType$jscomp$0 ||
              ("function" !== typeof context.UNSAFE_componentWillMount &&
                "function" !== typeof context.componentWillMount) ||
              ("function" === typeof context.componentWillMount &&
                context.componentWillMount(),
              "function" === typeof context.UNSAFE_componentWillMount &&
                context.UNSAFE_componentWillMount()),
            "function" === typeof context.componentDidMount &&
              (workInProgress.flags |= 4194308))
          : ("function" === typeof context.componentDidMount &&
              (workInProgress.flags |= 4194308),
            (workInProgress.memoizedProps = nextProps),
            (workInProgress.memoizedState = oldContext)),
        (context.props = nextProps),
        (context.state = oldContext),
        (context.context = contextType),
        (nextProps = oldProps))
      : ("function" === typeof context.componentDidMount &&
          (workInProgress.flags |= 4194308),
        (nextProps = !1));
  } else {
    context = workInProgress.stateNode;
    cloneUpdateQueue(current, workInProgress);
    contextType = workInProgress.memoizedProps;
    contextType$jscomp$0 = resolveClassComponentProps(Component, contextType);
    context.props = contextType$jscomp$0;
    getDerivedStateFromProps = workInProgress.pendingProps;
    oldState = context.context;
    oldContext = Component.contextType;
    oldProps = emptyContextObject;
    "object" === typeof oldContext &&
      null !== oldContext &&
      (oldProps = readContext(oldContext));
    unresolvedOldProps = Component.getDerivedStateFromProps;
    (oldContext =
      "function" === typeof unresolvedOldProps ||
      "function" === typeof context.getSnapshotBeforeUpdate) ||
      ("function" !== typeof context.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof context.componentWillReceiveProps) ||
      ((contextType !== getDerivedStateFromProps || oldState !== oldProps) &&
        callComponentWillReceiveProps(
          workInProgress,
          context,
          nextProps,
          oldProps
        ));
    hasForceUpdate = !1;
    oldState = workInProgress.memoizedState;
    context.state = oldState;
    processUpdateQueue(workInProgress, nextProps, context, renderLanes);
    suspendIfUpdateReadFromEntangledAsyncAction();
    var newState = workInProgress.memoizedState;
    contextType !== getDerivedStateFromProps ||
    oldState !== newState ||
    hasForceUpdate ||
    (null !== current &&
      null !== current.dependencies &&
      checkIfContextChanged(current.dependencies))
      ? ("function" === typeof unresolvedOldProps &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            unresolvedOldProps,
            nextProps
          ),
          (newState = workInProgress.memoizedState)),
        (contextType$jscomp$0 =
          hasForceUpdate ||
          checkShouldComponentUpdate(
            workInProgress,
            Component,
            contextType$jscomp$0,
            nextProps,
            oldState,
            newState,
            oldProps
          ) ||
          (null !== current &&
            null !== current.dependencies &&
            checkIfContextChanged(current.dependencies)))
          ? (oldContext ||
              ("function" !== typeof context.UNSAFE_componentWillUpdate &&
                "function" !== typeof context.componentWillUpdate) ||
              ("function" === typeof context.componentWillUpdate &&
                context.componentWillUpdate(nextProps, newState, oldProps),
              "function" === typeof context.UNSAFE_componentWillUpdate &&
                context.UNSAFE_componentWillUpdate(
                  nextProps,
                  newState,
                  oldProps
                )),
            "function" === typeof context.componentDidUpdate &&
              (workInProgress.flags |= 4),
            "function" === typeof context.getSnapshotBeforeUpdate &&
              (workInProgress.flags |= 1024))
          : ("function" !== typeof context.componentDidUpdate ||
              (contextType === current.memoizedProps &&
                oldState === current.memoizedState) ||
              (workInProgress.flags |= 4),
            "function" !== typeof context.getSnapshotBeforeUpdate ||
              (contextType === current.memoizedProps &&
                oldState === current.memoizedState) ||
              (workInProgress.flags |= 1024),
            (workInProgress.memoizedProps = nextProps),
            (workInProgress.memoizedState = newState)),
        (context.props = nextProps),
        (context.state = newState),
        (context.context = oldProps),
        (nextProps = contextType$jscomp$0))
      : ("function" !== typeof context.componentDidUpdate ||
          (contextType === current.memoizedProps &&
            oldState === current.memoizedState) ||
          (workInProgress.flags |= 4),
        "function" !== typeof context.getSnapshotBeforeUpdate ||
          (contextType === current.memoizedProps &&
            oldState === current.memoizedState) ||
          (workInProgress.flags |= 1024),
        (nextProps = !1));
  }
  context = nextProps;
  markRef(current, workInProgress);
  nextProps = 0 !== (workInProgress.flags & 128);
  context || nextProps
    ? ((context = workInProgress.stateNode),
      (Component =
        nextProps && "function" !== typeof Component.getDerivedStateFromError
          ? null
          : context.render()),
      (workInProgress.flags |= 1),
      null !== current && nextProps
        ? ((workInProgress.child = reconcileChildFibers(
            workInProgress,
            current.child,
            null,
            renderLanes
          )),
          (workInProgress.child = reconcileChildFibers(
            workInProgress,
            null,
            Component,
            renderLanes
          )))
        : reconcileChildren(current, workInProgress, Component, renderLanes),
      (workInProgress.memoizedState = context.state),
      (current = workInProgress.child))
    : (current = bailoutOnAlreadyFinishedWork(
        current,
        workInProgress,
        renderLanes
      ));
  return current;
}
function mountHostRootWithoutHydrating(
  current,
  workInProgress,
  nextChildren,
  renderLanes
) {
  resetHydrationState();
  workInProgress.flags |= 256;
  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  return workInProgress.child;
}
var SUSPENDED_MARKER = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
  hydrationErrors: null
};
function mountSuspenseOffscreenState(renderLanes) {
  return { baseLanes: renderLanes, cachePool: getSuspendedCache() };
}
function getRemainingWorkInPrimaryTree(
  current,
  primaryTreeDidDefer,
  renderLanes
) {
  current = null !== current ? current.childLanes & ~renderLanes : 0;
  primaryTreeDidDefer && (current |= workInProgressDeferredLane);
  return current;
}
function updateSuspenseComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    showFallback = !1,
    didSuspend = 0 !== (workInProgress.flags & 128),
    JSCompiler_temp;
  (JSCompiler_temp = didSuspend) ||
    (JSCompiler_temp =
      null !== current && null === current.memoizedState
        ? !1
        : 0 !== (suspenseStackCursor.current & 2));
  JSCompiler_temp && ((showFallback = !0), (workInProgress.flags &= -129));
  JSCompiler_temp = 0 !== (workInProgress.flags & 32);
  workInProgress.flags &= -33;
  if (null === current) {
    if (isHydrating) {
      showFallback
        ? pushPrimaryTreeSuspenseHandler(workInProgress)
        : reuseSuspenseHandlerOnStack(workInProgress);
      if (isHydrating) {
        var nextInstance = nextHydratableInstance,
          JSCompiler_temp$jscomp$0;
        if ((JSCompiler_temp$jscomp$0 = nextInstance)) {
          c: {
            JSCompiler_temp$jscomp$0 = nextInstance;
            for (
              nextInstance = rootOrSingletonContext;
              8 !== JSCompiler_temp$jscomp$0.nodeType;

            ) {
              if (!nextInstance) {
                nextInstance = null;
                break c;
              }
              JSCompiler_temp$jscomp$0 = getNextHydratable(
                JSCompiler_temp$jscomp$0.nextSibling
              );
              if (null === JSCompiler_temp$jscomp$0) {
                nextInstance = null;
                break c;
              }
            }
            nextInstance = JSCompiler_temp$jscomp$0;
          }
          null !== nextInstance
            ? ((workInProgress.memoizedState = {
                dehydrated: nextInstance,
                treeContext:
                  null !== treeContextProvider
                    ? { id: treeContextId, overflow: treeContextOverflow }
                    : null,
                retryLane: 536870912,
                hydrationErrors: null
              }),
              (JSCompiler_temp$jscomp$0 = createFiberImplClass(
                18,
                null,
                null,
                0
              )),
              (JSCompiler_temp$jscomp$0.stateNode = nextInstance),
              (JSCompiler_temp$jscomp$0.return = workInProgress),
              (workInProgress.child = JSCompiler_temp$jscomp$0),
              (hydrationParentFiber = workInProgress),
              (nextHydratableInstance = null),
              (JSCompiler_temp$jscomp$0 = !0))
            : (JSCompiler_temp$jscomp$0 = !1);
        }
        JSCompiler_temp$jscomp$0 || throwOnHydrationMismatch(workInProgress);
      }
      nextInstance = workInProgress.memoizedState;
      if (
        null !== nextInstance &&
        ((nextInstance = nextInstance.dehydrated), null !== nextInstance)
      )
        return (
          isSuspenseInstanceFallback(nextInstance)
            ? (workInProgress.lanes = 32)
            : (workInProgress.lanes = 536870912),
          null
        );
      popSuspenseHandler(workInProgress);
    }
    nextInstance = nextProps.children;
    nextProps = nextProps.fallback;
    if (showFallback)
      return (
        reuseSuspenseHandlerOnStack(workInProgress),
        (showFallback = workInProgress.mode),
        (nextInstance = mountWorkInProgressOffscreenFiber(
          { mode: "hidden", children: nextInstance },
          showFallback
        )),
        (nextProps = createFiberFromFragment(
          nextProps,
          showFallback,
          renderLanes,
          null
        )),
        (nextInstance.return = workInProgress),
        (nextProps.return = workInProgress),
        (nextInstance.sibling = nextProps),
        (workInProgress.child = nextInstance),
        (showFallback = workInProgress.child),
        (showFallback.memoizedState = mountSuspenseOffscreenState(renderLanes)),
        (showFallback.childLanes = getRemainingWorkInPrimaryTree(
          current,
          JSCompiler_temp,
          renderLanes
        )),
        (workInProgress.memoizedState = SUSPENDED_MARKER),
        nextProps
      );
    pushPrimaryTreeSuspenseHandler(workInProgress);
    return mountSuspensePrimaryChildren(workInProgress, nextInstance);
  }
  JSCompiler_temp$jscomp$0 = current.memoizedState;
  if (
    null !== JSCompiler_temp$jscomp$0 &&
    ((nextInstance = JSCompiler_temp$jscomp$0.dehydrated),
    null !== nextInstance)
  ) {
    if (didSuspend)
      workInProgress.flags & 256
        ? (pushPrimaryTreeSuspenseHandler(workInProgress),
          (workInProgress.flags &= -257),
          (workInProgress = retrySuspenseComponentWithoutHydrating(
            current,
            workInProgress,
            renderLanes
          )))
        : null !== workInProgress.memoizedState
          ? (reuseSuspenseHandlerOnStack(workInProgress),
            (workInProgress.child = current.child),
            (workInProgress.flags |= 128),
            (workInProgress = null))
          : (reuseSuspenseHandlerOnStack(workInProgress),
            (showFallback = nextProps.fallback),
            (nextInstance = workInProgress.mode),
            (nextProps = mountWorkInProgressOffscreenFiber(
              { mode: "visible", children: nextProps.children },
              nextInstance
            )),
            (showFallback = createFiberFromFragment(
              showFallback,
              nextInstance,
              renderLanes,
              null
            )),
            (showFallback.flags |= 2),
            (nextProps.return = workInProgress),
            (showFallback.return = workInProgress),
            (nextProps.sibling = showFallback),
            (workInProgress.child = nextProps),
            reconcileChildFibers(
              workInProgress,
              current.child,
              null,
              renderLanes
            ),
            (nextProps = workInProgress.child),
            (nextProps.memoizedState =
              mountSuspenseOffscreenState(renderLanes)),
            (nextProps.childLanes = getRemainingWorkInPrimaryTree(
              current,
              JSCompiler_temp,
              renderLanes
            )),
            (workInProgress.memoizedState = SUSPENDED_MARKER),
            (workInProgress = showFallback));
    else if (
      (pushPrimaryTreeSuspenseHandler(workInProgress),
      isSuspenseInstanceFallback(nextInstance))
    ) {
      JSCompiler_temp =
        nextInstance.nextSibling && nextInstance.nextSibling.dataset;
      if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
      JSCompiler_temp = digest;
      nextProps = Error(formatProdErrorMessage(419));
      nextProps.stack = "";
      nextProps.digest = JSCompiler_temp;
      queueHydrationError({ value: nextProps, source: null, stack: null });
      workInProgress = retrySuspenseComponentWithoutHydrating(
        current,
        workInProgress,
        renderLanes
      );
    } else if (
      (didReceiveUpdate ||
        propagateParentContextChanges(current, workInProgress, renderLanes, !1),
      (JSCompiler_temp = 0 !== (renderLanes & current.childLanes)),
      didReceiveUpdate || JSCompiler_temp)
    ) {
      JSCompiler_temp = workInProgressRoot;
      if (
        null !== JSCompiler_temp &&
        ((nextProps = renderLanes & -renderLanes),
        (nextProps =
          0 !== (nextProps & 42)
            ? 1
            : getBumpedLaneForHydrationByLane(nextProps)),
        (nextProps =
          0 !== (nextProps & (JSCompiler_temp.suspendedLanes | renderLanes))
            ? 0
            : nextProps),
        0 !== nextProps && nextProps !== JSCompiler_temp$jscomp$0.retryLane)
      )
        throw (
          ((JSCompiler_temp$jscomp$0.retryLane = nextProps),
          enqueueConcurrentRenderForLane(current, nextProps),
          scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps),
          SelectiveHydrationException)
        );
      "$?" === nextInstance.data || renderDidSuspendDelayIfPossible();
      workInProgress = retrySuspenseComponentWithoutHydrating(
        current,
        workInProgress,
        renderLanes
      );
    } else
      "$?" === nextInstance.data
        ? ((workInProgress.flags |= 192),
          (workInProgress.child = current.child),
          (workInProgress = null))
        : ((current = JSCompiler_temp$jscomp$0.treeContext),
          (nextHydratableInstance = getNextHydratable(
            nextInstance.nextSibling
          )),
          (hydrationParentFiber = workInProgress),
          (isHydrating = !0),
          (hydrationErrors = null),
          (rootOrSingletonContext = !1),
          null !== current &&
            ((idStack[idStackIndex++] = treeContextId),
            (idStack[idStackIndex++] = treeContextOverflow),
            (idStack[idStackIndex++] = treeContextProvider),
            (treeContextId = current.id),
            (treeContextOverflow = current.overflow),
            (treeContextProvider = workInProgress)),
          (workInProgress = mountSuspensePrimaryChildren(
            workInProgress,
            nextProps.children
          )),
          (workInProgress.flags |= 4096));
    return workInProgress;
  }
  if (showFallback)
    return (
      reuseSuspenseHandlerOnStack(workInProgress),
      (showFallback = nextProps.fallback),
      (nextInstance = workInProgress.mode),
      (JSCompiler_temp$jscomp$0 = current.child),
      (digest = JSCompiler_temp$jscomp$0.sibling),
      (nextProps = createWorkInProgress(JSCompiler_temp$jscomp$0, {
        mode: "hidden",
        children: nextProps.children
      })),
      (nextProps.subtreeFlags =
        JSCompiler_temp$jscomp$0.subtreeFlags & 65011712),
      null !== digest
        ? (showFallback = createWorkInProgress(digest, showFallback))
        : ((showFallback = createFiberFromFragment(
            showFallback,
            nextInstance,
            renderLanes,
            null
          )),
          (showFallback.flags |= 2)),
      (showFallback.return = workInProgress),
      (nextProps.return = workInProgress),
      (nextProps.sibling = showFallback),
      (workInProgress.child = nextProps),
      (nextProps = showFallback),
      (showFallback = workInProgress.child),
      (nextInstance = current.child.memoizedState),
      null === nextInstance
        ? (nextInstance = mountSuspenseOffscreenState(renderLanes))
        : ((JSCompiler_temp$jscomp$0 = nextInstance.cachePool),
          null !== JSCompiler_temp$jscomp$0
            ? ((digest = CacheContext._currentValue),
              (JSCompiler_temp$jscomp$0 =
                JSCompiler_temp$jscomp$0.parent !== digest
                  ? { parent: digest, pool: digest }
                  : JSCompiler_temp$jscomp$0))
            : (JSCompiler_temp$jscomp$0 = getSuspendedCache()),
          (nextInstance = {
            baseLanes: nextInstance.baseLanes | renderLanes,
            cachePool: JSCompiler_temp$jscomp$0
          })),
      (showFallback.memoizedState = nextInstance),
      (showFallback.childLanes = getRemainingWorkInPrimaryTree(
        current,
        JSCompiler_temp,
        renderLanes
      )),
      (workInProgress.memoizedState = SUSPENDED_MARKER),
      nextProps
    );
  pushPrimaryTreeSuspenseHandler(workInProgress);
  renderLanes = current.child;
  current = renderLanes.sibling;
  renderLanes = createWorkInProgress(renderLanes, {
    mode: "visible",
    children: nextProps.children
  });
  renderLanes.return = workInProgress;
  renderLanes.sibling = null;
  null !== current &&
    ((JSCompiler_temp = workInProgress.deletions),
    null === JSCompiler_temp
      ? ((workInProgress.deletions = [current]), (workInProgress.flags |= 16))
      : JSCompiler_temp.push(current));
  workInProgress.child = renderLanes;
  workInProgress.memoizedState = null;
  return renderLanes;
}
function mountSuspensePrimaryChildren(workInProgress, primaryChildren) {
  primaryChildren = mountWorkInProgressOffscreenFiber(
    { mode: "visible", children: primaryChildren },
    workInProgress.mode
  );
  primaryChildren.return = workInProgress;
  return (workInProgress.child = primaryChildren);
}
function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
  offscreenProps = createFiberImplClass(22, offscreenProps, null, mode);
  offscreenProps.lanes = 0;
  offscreenProps.stateNode = {
    _visibility: 1,
    _pendingMarkers: null,
    _retryCache: null,
    _transitions: null
  };
  return offscreenProps;
}
function retrySuspenseComponentWithoutHydrating(
  current,
  workInProgress,
  renderLanes
) {
  reconcileChildFibers(workInProgress, current.child, null, renderLanes);
  current = mountSuspensePrimaryChildren(
    workInProgress,
    workInProgress.pendingProps.children
  );
  current.flags |= 2;
  workInProgress.memoizedState = null;
  return current;
}
function scheduleSuspenseWorkOnFiber(fiber, renderLanes, propagationRoot) {
  fiber.lanes |= renderLanes;
  var alternate = fiber.alternate;
  null !== alternate && (alternate.lanes |= renderLanes);
  scheduleContextWorkOnParentPath(fiber.return, renderLanes, propagationRoot);
}
function initSuspenseListRenderState(
  workInProgress,
  isBackwards,
  tail,
  lastContentRow,
  tailMode
) {
  var renderState = workInProgress.memoizedState;
  null === renderState
    ? (workInProgress.memoizedState = {
        isBackwards: isBackwards,
        rendering: null,
        renderingStartTime: 0,
        last: lastContentRow,
        tail: tail,
        tailMode: tailMode
      })
    : ((renderState.isBackwards = isBackwards),
      (renderState.rendering = null),
      (renderState.renderingStartTime = 0),
      (renderState.last = lastContentRow),
      (renderState.tail = tail),
      (renderState.tailMode = tailMode));
}
function updateSuspenseListComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    revealOrder = nextProps.revealOrder,
    tailMode = nextProps.tail;
  reconcileChildren(current, workInProgress, nextProps.children, renderLanes);
  nextProps = suspenseStackCursor.current;
  if (0 !== (nextProps & 2))
    (nextProps = (nextProps & 1) | 2), (workInProgress.flags |= 128);
  else {
    if (null !== current && 0 !== (current.flags & 128))
      a: for (current = workInProgress.child; null !== current; ) {
        if (13 === current.tag)
          null !== current.memoizedState &&
            scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
        else if (19 === current.tag)
          scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
        else if (null !== current.child) {
          current.child.return = current;
          current = current.child;
          continue;
        }
        if (current === workInProgress) break a;
        for (; null === current.sibling; ) {
          if (null === current.return || current.return === workInProgress)
            break a;
          current = current.return;
        }
        current.sibling.return = current.return;
        current = current.sibling;
      }
    nextProps &= 1;
  }
  push(suspenseStackCursor, nextProps);
  switch (revealOrder) {
    case "forwards":
      renderLanes = workInProgress.child;
      for (revealOrder = null; null !== renderLanes; )
        (current = renderLanes.alternate),
          null !== current &&
            null === findFirstSuspended(current) &&
            (revealOrder = renderLanes),
          (renderLanes = renderLanes.sibling);
      renderLanes = revealOrder;
      null === renderLanes
        ? ((revealOrder = workInProgress.child), (workInProgress.child = null))
        : ((revealOrder = renderLanes.sibling), (renderLanes.sibling = null));
      initSuspenseListRenderState(
        workInProgress,
        !1,
        revealOrder,
        renderLanes,
        tailMode
      );
      break;
    case "backwards":
      renderLanes = null;
      revealOrder = workInProgress.child;
      for (workInProgress.child = null; null !== revealOrder; ) {
        current = revealOrder.alternate;
        if (null !== current && null === findFirstSuspended(current)) {
          workInProgress.child = revealOrder;
          break;
        }
        current = revealOrder.sibling;
        revealOrder.sibling = renderLanes;
        renderLanes = revealOrder;
        revealOrder = current;
      }
      initSuspenseListRenderState(
        workInProgress,
        !0,
        renderLanes,
        null,
        tailMode
      );
      break;
    case "together":
      initSuspenseListRenderState(workInProgress, !1, null, null, void 0);
      break;
    default:
      workInProgress.memoizedState = null;
  }
  return workInProgress.child;
}
function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
  null !== current && (workInProgress.dependencies = current.dependencies);
  workInProgressRootSkippedLanes |= workInProgress.lanes;
  if (0 === (renderLanes & workInProgress.childLanes))
    if (null !== current) {
      if (
        (propagateParentContextChanges(
          current,
          workInProgress,
          renderLanes,
          !1
        ),
        0 === (renderLanes & workInProgress.childLanes))
      )
        return null;
    } else return null;
  if (null !== current && workInProgress.child !== current.child)
    throw Error(formatProdErrorMessage(153));
  if (null !== workInProgress.child) {
    current = workInProgress.child;
    renderLanes = createWorkInProgress(current, current.pendingProps);
    workInProgress.child = renderLanes;
    for (renderLanes.return = workInProgress; null !== current.sibling; )
      (current = current.sibling),
        (renderLanes = renderLanes.sibling =
          createWorkInProgress(current, current.pendingProps)),
        (renderLanes.return = workInProgress);
    renderLanes.sibling = null;
  }
  return workInProgress.child;
}
function checkScheduledUpdateOrContext(current, renderLanes) {
  if (0 !== (current.lanes & renderLanes)) return !0;
  current = current.dependencies;
  return null !== current && checkIfContextChanged(current) ? !0 : !1;
}
function attemptEarlyBailoutIfNoScheduledUpdate(
  current,
  workInProgress,
  renderLanes
) {
  switch (workInProgress.tag) {
    case 3:
      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
      resetHydrationState();
      break;
    case 27:
    case 5:
      pushHostContext(workInProgress);
      break;
    case 4:
      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
      break;
    case 10:
      pushProvider(
        workInProgress,
        workInProgress.type,
        workInProgress.memoizedProps.value
      );
      break;
    case 13:
      var state = workInProgress.memoizedState;
      if (null !== state) {
        if (null !== state.dehydrated)
          return (
            pushPrimaryTreeSuspenseHandler(workInProgress),
            (workInProgress.flags |= 128),
            null
          );
        if (0 !== (renderLanes & workInProgress.child.childLanes))
          return updateSuspenseComponent(current, workInProgress, renderLanes);
        pushPrimaryTreeSuspenseHandler(workInProgress);
        current = bailoutOnAlreadyFinishedWork(
          current,
          workInProgress,
          renderLanes
        );
        return null !== current ? current.sibling : null;
      }
      pushPrimaryTreeSuspenseHandler(workInProgress);
      break;
    case 19:
      var didSuspendBefore = 0 !== (current.flags & 128);
      state = 0 !== (renderLanes & workInProgress.childLanes);
      state ||
        (propagateParentContextChanges(
          current,
          workInProgress,
          renderLanes,
          !1
        ),
        (state = 0 !== (renderLanes & workInProgress.childLanes)));
      if (didSuspendBefore) {
        if (state)
          return updateSuspenseListComponent(
            current,
            workInProgress,
            renderLanes
          );
        workInProgress.flags |= 128;
      }
      didSuspendBefore = workInProgress.memoizedState;
      null !== didSuspendBefore &&
        ((didSuspendBefore.rendering = null),
        (didSuspendBefore.tail = null),
        (didSuspendBefore.lastEffect = null));
      push(suspenseStackCursor, suspenseStackCursor.current);
      if (state) break;
      else return null;
    case 22:
    case 23:
      return (
        (workInProgress.lanes = 0),
        updateOffscreenComponent(current, workInProgress, renderLanes)
      );
    case 24:
      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
  }
  return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
}
function beginWork(current, workInProgress, renderLanes) {
  if (null !== current)
    if (current.memoizedProps !== workInProgress.pendingProps)
      didReceiveUpdate = !0;
    else {
      if (
        !checkScheduledUpdateOrContext(current, renderLanes) &&
        0 === (workInProgress.flags & 128)
      )
        return (
          (didReceiveUpdate = !1),
          attemptEarlyBailoutIfNoScheduledUpdate(
            current,
            workInProgress,
            renderLanes
          )
        );
      didReceiveUpdate = 0 !== (current.flags & 131072) ? !0 : !1;
    }
  else
    (didReceiveUpdate = !1),
      isHydrating &&
        0 !== (workInProgress.flags & 1048576) &&
        pushTreeId(workInProgress, treeForkCount, workInProgress.index);
  workInProgress.lanes = 0;
  switch (workInProgress.tag) {
    case 16:
      a: {
        current = workInProgress.pendingProps;
        var lazyComponent = workInProgress.elementType,
          init = lazyComponent._init;
        lazyComponent = init(lazyComponent._payload);
        workInProgress.type = lazyComponent;
        if ("function" === typeof lazyComponent)
          shouldConstruct(lazyComponent)
            ? ((current = resolveClassComponentProps(lazyComponent, current)),
              (workInProgress.tag = 1),
              (workInProgress = updateClassComponent(
                null,
                workInProgress,
                lazyComponent,
                current,
                renderLanes
              )))
            : ((workInProgress.tag = 0),
              (workInProgress = updateFunctionComponent(
                null,
                workInProgress,
                lazyComponent,
                current,
                renderLanes
              )));
        else {
          if (void 0 !== lazyComponent && null !== lazyComponent)
            if (
              ((init = lazyComponent.$$typeof), init === REACT_FORWARD_REF_TYPE)
            ) {
              workInProgress.tag = 11;
              workInProgress = updateForwardRef(
                null,
                workInProgress,
                lazyComponent,
                current,
                renderLanes
              );
              break a;
            } else if (init === REACT_MEMO_TYPE) {
              workInProgress.tag = 14;
              workInProgress = updateMemoComponent(
                null,
                workInProgress,
                lazyComponent,
                current,
                renderLanes
              );
              break a;
            }
          workInProgress =
            getComponentNameFromType(lazyComponent) || lazyComponent;
          throw Error(formatProdErrorMessage(306, workInProgress, ""));
        }
      }
      return workInProgress;
    case 0:
      return updateFunctionComponent(
        current,
        workInProgress,
        workInProgress.type,
        workInProgress.pendingProps,
        renderLanes
      );
    case 1:
      return (
        (lazyComponent = workInProgress.type),
        (init = resolveClassComponentProps(
          lazyComponent,
          workInProgress.pendingProps
        )),
        updateClassComponent(
          current,
          workInProgress,
          lazyComponent,
          init,
          renderLanes
        )
      );
    case 3:
      a: {
        pushHostContainer(
          workInProgress,
          workInProgress.stateNode.containerInfo
        );
        if (null === current) throw Error(formatProdErrorMessage(387));
        lazyComponent = workInProgress.pendingProps;
        var prevState = workInProgress.memoizedState;
        init = prevState.element;
        cloneUpdateQueue(current, workInProgress);
        processUpdateQueue(workInProgress, lazyComponent, null, renderLanes);
        var nextState = workInProgress.memoizedState;
        lazyComponent = nextState.cache;
        pushProvider(workInProgress, CacheContext, lazyComponent);
        lazyComponent !== prevState.cache &&
          propagateContextChanges(
            workInProgress,
            [CacheContext],
            renderLanes,
            !0
          );
        suspendIfUpdateReadFromEntangledAsyncAction();
        lazyComponent = nextState.element;
        if (prevState.isDehydrated)
          if (
            ((prevState = {
              element: lazyComponent,
              isDehydrated: !1,
              cache: nextState.cache
            }),
            (workInProgress.updateQueue.baseState = prevState),
            (workInProgress.memoizedState = prevState),
            workInProgress.flags & 256)
          ) {
            workInProgress = mountHostRootWithoutHydrating(
              current,
              workInProgress,
              lazyComponent,
              renderLanes
            );
            break a;
          } else if (lazyComponent !== init) {
            init = createCapturedValueAtFiber(
              Error(formatProdErrorMessage(424)),
              workInProgress
            );
            queueHydrationError(init);
            workInProgress = mountHostRootWithoutHydrating(
              current,
              workInProgress,
              lazyComponent,
              renderLanes
            );
            break a;
          } else {
            current = workInProgress.stateNode.containerInfo;
            switch (current.nodeType) {
              case 9:
                current = current.body;
                break;
              default:
                current =
                  "HTML" === current.nodeName
                    ? current.ownerDocument.body
                    : current;
            }
            nextHydratableInstance = getNextHydratable(current.firstChild);
            hydrationParentFiber = workInProgress;
            isHydrating = !0;
            hydrationErrors = null;
            rootOrSingletonContext = !0;
            renderLanes = mountChildFibers(
              workInProgress,
              null,
              lazyComponent,
              renderLanes
            );
            for (workInProgress.child = renderLanes; renderLanes; )
              (renderLanes.flags = (renderLanes.flags & -3) | 4096),
                (renderLanes = renderLanes.sibling);
          }
        else {
          resetHydrationState();
          if (lazyComponent === init) {
            workInProgress = bailoutOnAlreadyFinishedWork(
              current,
              workInProgress,
              renderLanes
            );
            break a;
          }
          reconcileChildren(
            current,
            workInProgress,
            lazyComponent,
            renderLanes
          );
        }
        workInProgress = workInProgress.child;
      }
      return workInProgress;
    case 26:
      return (
        markRef(current, workInProgress),
        null === current
          ? (renderLanes = getResource(
              workInProgress.type,
              null,
              workInProgress.pendingProps,
              null
            ))
            ? (workInProgress.memoizedState = renderLanes)
            : isHydrating ||
              ((renderLanes = workInProgress.type),
              (current = workInProgress.pendingProps),
              (lazyComponent = getOwnerDocumentFromRootContainer(
                rootInstanceStackCursor.current
              ).createElement(renderLanes)),
              (lazyComponent[internalInstanceKey] = workInProgress),
              (lazyComponent[internalPropsKey] = current),
              setInitialProperties(lazyComponent, renderLanes, current),
              markNodeAsHoistable(lazyComponent),
              (workInProgress.stateNode = lazyComponent))
          : (workInProgress.memoizedState = getResource(
              workInProgress.type,
              current.memoizedProps,
              workInProgress.pendingProps,
              current.memoizedState
            )),
        null
      );
    case 27:
      return (
        pushHostContext(workInProgress),
        null === current &&
          isHydrating &&
          ((lazyComponent = workInProgress.stateNode =
            resolveSingletonInstance(
              workInProgress.type,
              workInProgress.pendingProps,
              rootInstanceStackCursor.current
            )),
          (hydrationParentFiber = workInProgress),
          (rootOrSingletonContext = !0),
          (init = nextHydratableInstance),
          isSingletonScope(workInProgress.type)
            ? ((previousHydratableOnEnteringScopedSingleton = init),
              (nextHydratableInstance = getNextHydratable(
                lazyComponent.firstChild
              )))
            : (nextHydratableInstance = init)),
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        markRef(current, workInProgress),
        null === current && (workInProgress.flags |= 4194304),
        workInProgress.child
      );
    case 5:
      if (null === current && isHydrating) {
        if ((init = lazyComponent = nextHydratableInstance))
          (lazyComponent = canHydrateInstance(
            lazyComponent,
            workInProgress.type,
            workInProgress.pendingProps,
            rootOrSingletonContext
          )),
            null !== lazyComponent
              ? ((workInProgress.stateNode = lazyComponent),
                (hydrationParentFiber = workInProgress),
                (nextHydratableInstance = getNextHydratable(
                  lazyComponent.firstChild
                )),
                (rootOrSingletonContext = !1),
                (init = !0))
              : (init = !1);
        init || throwOnHydrationMismatch(workInProgress);
      }
      pushHostContext(workInProgress);
      init = workInProgress.type;
      prevState = workInProgress.pendingProps;
      nextState = null !== current ? current.memoizedProps : null;
      lazyComponent = prevState.children;
      shouldSetTextContent(init, prevState)
        ? (lazyComponent = null)
        : null !== nextState &&
          shouldSetTextContent(init, nextState) &&
          (workInProgress.flags |= 32);
      null !== workInProgress.memoizedState &&
        ((init = renderWithHooks(
          current,
          workInProgress,
          TransitionAwareHostComponent,
          null,
          null,
          renderLanes
        )),
        (HostTransitionContext._currentValue = init));
      markRef(current, workInProgress);
      reconcileChildren(current, workInProgress, lazyComponent, renderLanes);
      return workInProgress.child;
    case 6:
      if (null === current && isHydrating) {
        if ((current = renderLanes = nextHydratableInstance))
          (renderLanes = canHydrateTextInstance(
            renderLanes,
            workInProgress.pendingProps,
            rootOrSingletonContext
          )),
            null !== renderLanes
              ? ((workInProgress.stateNode = renderLanes),
                (hydrationParentFiber = workInProgress),
                (nextHydratableInstance = null),
                (current = !0))
              : (current = !1);
        current || throwOnHydrationMismatch(workInProgress);
      }
      return null;
    case 13:
      return updateSuspenseComponent(current, workInProgress, renderLanes);
    case 4:
      return (
        pushHostContainer(
          workInProgress,
          workInProgress.stateNode.containerInfo
        ),
        (lazyComponent = workInProgress.pendingProps),
        null === current
          ? (workInProgress.child = reconcileChildFibers(
              workInProgress,
              null,
              lazyComponent,
              renderLanes
            ))
          : reconcileChildren(
              current,
              workInProgress,
              lazyComponent,
              renderLanes
            ),
        workInProgress.child
      );
    case 11:
      return updateForwardRef(
        current,
        workInProgress,
        workInProgress.type,
        workInProgress.pendingProps,
        renderLanes
      );
    case 7:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps,
          renderLanes
        ),
        workInProgress.child
      );
    case 8:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 12:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 10:
      return (
        (lazyComponent = workInProgress.pendingProps),
        pushProvider(workInProgress, workInProgress.type, lazyComponent.value),
        reconcileChildren(
          current,
          workInProgress,
          lazyComponent.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 9:
      return (
        (init = workInProgress.type._context),
        (lazyComponent = workInProgress.pendingProps.children),
        prepareToReadContext(workInProgress),
        (init = readContext(init)),
        (lazyComponent = lazyComponent(init)),
        (workInProgress.flags |= 1),
        reconcileChildren(current, workInProgress, lazyComponent, renderLanes),
        workInProgress.child
      );
    case 14:
      return updateMemoComponent(
        current,
        workInProgress,
        workInProgress.type,
        workInProgress.pendingProps,
        renderLanes
      );
    case 15:
      return updateSimpleMemoComponent(
        current,
        workInProgress,
        workInProgress.type,
        workInProgress.pendingProps,
        renderLanes
      );
    case 19:
      return updateSuspenseListComponent(current, workInProgress, renderLanes);
    case 31:
      return (
        (lazyComponent = workInProgress.pendingProps),
        (renderLanes = workInProgress.mode),
        (lazyComponent = {
          mode: lazyComponent.mode,
          children: lazyComponent.children
        }),
        null === current
          ? ((renderLanes = mountWorkInProgressOffscreenFiber(
              lazyComponent,
              renderLanes
            )),
            (renderLanes.ref = workInProgress.ref),
            (workInProgress.child = renderLanes),
            (renderLanes.return = workInProgress),
            (workInProgress = renderLanes))
          : ((renderLanes = createWorkInProgress(current.child, lazyComponent)),
            (renderLanes.ref = workInProgress.ref),
            (workInProgress.child = renderLanes),
            (renderLanes.return = workInProgress),
            (workInProgress = renderLanes)),
        workInProgress
      );
    case 22:
      return updateOffscreenComponent(current, workInProgress, renderLanes);
    case 24:
      return (
        prepareToReadContext(workInProgress),
        (lazyComponent = readContext(CacheContext)),
        null === current
          ? ((init = peekCacheFromPool()),
            null === init &&
              ((init = workInProgressRoot),
              (prevState = createCache()),
              (init.pooledCache = prevState),
              prevState.refCount++,
              null !== prevState && (init.pooledCacheLanes |= renderLanes),
              (init = prevState)),
            (workInProgress.memoizedState = {
              parent: lazyComponent,
              cache: init
            }),
            initializeUpdateQueue(workInProgress),
            pushProvider(workInProgress, CacheContext, init))
          : (0 !== (current.lanes & renderLanes) &&
              (cloneUpdateQueue(current, workInProgress),
              processUpdateQueue(workInProgress, null, null, renderLanes),
              suspendIfUpdateReadFromEntangledAsyncAction()),
            (init = current.memoizedState),
            (prevState = workInProgress.memoizedState),
            init.parent !== lazyComponent
              ? ((init = { parent: lazyComponent, cache: lazyComponent }),
                (workInProgress.memoizedState = init),
                0 === workInProgress.lanes &&
                  (workInProgress.memoizedState =
                    workInProgress.updateQueue.baseState =
                      init),
                pushProvider(workInProgress, CacheContext, lazyComponent))
              : ((lazyComponent = prevState.cache),
                pushProvider(workInProgress, CacheContext, lazyComponent),
                lazyComponent !== init.cache &&
                  propagateContextChanges(
                    workInProgress,
                    [CacheContext],
                    renderLanes,
                    !0
                  ))),
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 29:
      throw workInProgress.pendingProps;
  }
  throw Error(formatProdErrorMessage(156, workInProgress.tag));
}
function markUpdate(workInProgress) {
  workInProgress.flags |= 4;
}
function preloadResourceAndSuspendIfNeeded(workInProgress, resource) {
  if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4))
    workInProgress.flags &= -16777217;
  else if (((workInProgress.flags |= 16777216), !preloadResource(resource))) {
    resource = suspenseHandlerStackCursor.current;
    if (
      null !== resource &&
      ((workInProgressRootRenderLanes & 4194048) ===
      workInProgressRootRenderLanes
        ? null !== shellBoundary
        : ((workInProgressRootRenderLanes & 62914560) !==
            workInProgressRootRenderLanes &&
            0 === (workInProgressRootRenderLanes & 536870912)) ||
          resource !== shellBoundary)
    )
      throw (
        ((suspendedThenable = noopSuspenseyCommitThenable),
        SuspenseyCommitException)
      );
    workInProgress.flags |= 8192;
  }
}
function scheduleRetryEffect(workInProgress, retryQueue) {
  null !== retryQueue && (workInProgress.flags |= 4);
  workInProgress.flags & 16384 &&
    ((retryQueue =
      22 !== workInProgress.tag ? claimNextRetryLane() : 536870912),
    (workInProgress.lanes |= retryQueue),
    (workInProgressSuspendedRetryLanes |= retryQueue));
}
function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
  if (!isHydrating)
    switch (renderState.tailMode) {
      case "hidden":
        hasRenderedATailFallback = renderState.tail;
        for (var lastTailNode = null; null !== hasRenderedATailFallback; )
          null !== hasRenderedATailFallback.alternate &&
            (lastTailNode = hasRenderedATailFallback),
            (hasRenderedATailFallback = hasRenderedATailFallback.sibling);
        null === lastTailNode
          ? (renderState.tail = null)
          : (lastTailNode.sibling = null);
        break;
      case "collapsed":
        lastTailNode = renderState.tail;
        for (var lastTailNode$113 = null; null !== lastTailNode; )
          null !== lastTailNode.alternate && (lastTailNode$113 = lastTailNode),
            (lastTailNode = lastTailNode.sibling);
        null === lastTailNode$113
          ? hasRenderedATailFallback || null === renderState.tail
            ? (renderState.tail = null)
            : (renderState.tail.sibling = null)
          : (lastTailNode$113.sibling = null);
    }
}
function bubbleProperties(completedWork) {
  var didBailout =
      null !== completedWork.alternate &&
      completedWork.alternate.child === completedWork.child,
    newChildLanes = 0,
    subtreeFlags = 0;
  if (didBailout)
    for (var child$114 = completedWork.child; null !== child$114; )
      (newChildLanes |= child$114.lanes | child$114.childLanes),
        (subtreeFlags |= child$114.subtreeFlags & 65011712),
        (subtreeFlags |= child$114.flags & 65011712),
        (child$114.return = completedWork),
        (child$114 = child$114.sibling);
  else
    for (child$114 = completedWork.child; null !== child$114; )
      (newChildLanes |= child$114.lanes | child$114.childLanes),
        (subtreeFlags |= child$114.subtreeFlags),
        (subtreeFlags |= child$114.flags),
        (child$114.return = completedWork),
        (child$114 = child$114.sibling);
  completedWork.subtreeFlags |= subtreeFlags;
  completedWork.childLanes = newChildLanes;
  return didBailout;
}
function completeWork(current, workInProgress, renderLanes) {
  var newProps = workInProgress.pendingProps;
  popTreeContext(workInProgress);
  switch (workInProgress.tag) {
    case 31:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return bubbleProperties(workInProgress), null;
    case 1:
      return bubbleProperties(workInProgress), null;
    case 3:
      renderLanes = workInProgress.stateNode;
      newProps = null;
      null !== current && (newProps = current.memoizedState.cache);
      workInProgress.memoizedState.cache !== newProps &&
        (workInProgress.flags |= 2048);
      popProvider(CacheContext);
      popHostContainer();
      renderLanes.pendingContext &&
        ((renderLanes.context = renderLanes.pendingContext),
        (renderLanes.pendingContext = null));
      if (null === current || null === current.child)
        popHydrationState(workInProgress)
          ? markUpdate(workInProgress)
          : null === current ||
            (current.memoizedState.isDehydrated &&
              0 === (workInProgress.flags & 256)) ||
            ((workInProgress.flags |= 1024),
            upgradeHydrationErrorsToRecoverable());
      bubbleProperties(workInProgress);
      return null;
    case 26:
      return (
        (renderLanes = workInProgress.memoizedState),
        null === current
          ? (markUpdate(workInProgress),
            null !== renderLanes
              ? (bubbleProperties(workInProgress),
                preloadResourceAndSuspendIfNeeded(workInProgress, renderLanes))
              : (bubbleProperties(workInProgress),
                (workInProgress.flags &= -16777217)))
          : renderLanes
            ? renderLanes !== current.memoizedState
              ? (markUpdate(workInProgress),
                bubbleProperties(workInProgress),
                preloadResourceAndSuspendIfNeeded(workInProgress, renderLanes))
              : (bubbleProperties(workInProgress),
                (workInProgress.flags &= -16777217))
            : (current.memoizedProps !== newProps && markUpdate(workInProgress),
              bubbleProperties(workInProgress),
              (workInProgress.flags &= -16777217)),
        null
      );
    case 27:
      popHostContext(workInProgress);
      renderLanes = rootInstanceStackCursor.current;
      var type = workInProgress.type;
      if (null !== current && null != workInProgress.stateNode)
        current.memoizedProps !== newProps && markUpdate(workInProgress);
      else {
        if (!newProps) {
          if (null === workInProgress.stateNode)
            throw Error(formatProdErrorMessage(166));
          bubbleProperties(workInProgress);
          return null;
        }
        current = contextStackCursor.current;
        popHydrationState(workInProgress)
          ? prepareToHydrateHostInstance(workInProgress, current)
          : ((current = resolveSingletonInstance(type, newProps, renderLanes)),
            (workInProgress.stateNode = current),
            markUpdate(workInProgress));
      }
      bubbleProperties(workInProgress);
      return null;
    case 5:
      popHostContext(workInProgress);
      renderLanes = workInProgress.type;
      if (null !== current && null != workInProgress.stateNode)
        current.memoizedProps !== newProps && markUpdate(workInProgress);
      else {
        if (!newProps) {
          if (null === workInProgress.stateNode)
            throw Error(formatProdErrorMessage(166));
          bubbleProperties(workInProgress);
          return null;
        }
        current = contextStackCursor.current;
        if (popHydrationState(workInProgress))
          prepareToHydrateHostInstance(workInProgress, current);
        else {
          type = getOwnerDocumentFromRootContainer(
            rootInstanceStackCursor.current
          );
          switch (current) {
            case 1:
              current = type.createElementNS(
                "http://www.w3.org/2000/svg",
                renderLanes
              );
              break;
            case 2:
              current = type.createElementNS(
                "http://www.w3.org/1998/Math/MathML",
                renderLanes
              );
              break;
            default:
              switch (renderLanes) {
                case "svg":
                  current = type.createElementNS(
                    "http://www.w3.org/2000/svg",
                    renderLanes
                  );
                  break;
                case "math":
                  current = type.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    renderLanes
                  );
                  break;
                case "script":
                  current = type.createElement("div");
                  current.innerHTML = "<script>\x3c/script>";
                  current = current.removeChild(current.firstChild);
                  break;
                case "select":
                  current =
                    "string" === typeof newProps.is
                      ? type.createElement("select", { is: newProps.is })
                      : type.createElement("select");
                  newProps.multiple
                    ? (current.multiple = !0)
                    : newProps.size && (current.size = newProps.size);
                  break;
                default:
                  current =
                    "string" === typeof newProps.is
                      ? type.createElement(renderLanes, { is: newProps.is })
                      : type.createElement(renderLanes);
              }
          }
          current[internalInstanceKey] = workInProgress;
          current[internalPropsKey] = newProps;
          a: for (type = workInProgress.child; null !== type; ) {
            if (5 === type.tag || 6 === type.tag)
              current.appendChild(type.stateNode);
            else if (4 !== type.tag && 27 !== type.tag && null !== type.child) {
              type.child.return = type;
              type = type.child;
              continue;
            }
            if (type === workInProgress) break a;
            for (; null === type.sibling; ) {
              if (null === type.return || type.return === workInProgress)
                break a;
              type = type.return;
            }
            type.sibling.return = type.return;
            type = type.sibling;
          }
          workInProgress.stateNode = current;
          a: switch (
            (setInitialProperties(current, renderLanes, newProps), renderLanes)
          ) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              current = !!newProps.autoFocus;
              break a;
            case "img":
              current = !0;
              break a;
            default:
              current = !1;
          }
          current && markUpdate(workInProgress);
        }
      }
      bubbleProperties(workInProgress);
      workInProgress.flags &= -16777217;
      return null;
    case 6:
      if (current && null != workInProgress.stateNode)
        current.memoizedProps !== newProps && markUpdate(workInProgress);
      else {
        if ("string" !== typeof newProps && null === workInProgress.stateNode)
          throw Error(formatProdErrorMessage(166));
        current = rootInstanceStackCursor.current;
        if (popHydrationState(workInProgress)) {
          current = workInProgress.stateNode;
          renderLanes = workInProgress.memoizedProps;
          newProps = null;
          type = hydrationParentFiber;
          if (null !== type)
            switch (type.tag) {
              case 27:
              case 5:
                newProps = type.memoizedProps;
            }
          current[internalInstanceKey] = workInProgress;
          current =
            current.nodeValue === renderLanes ||
            (null !== newProps && !0 === newProps.suppressHydrationWarning) ||
            checkForUnmatchedText(current.nodeValue, renderLanes)
              ? !0
              : !1;
          current || throwOnHydrationMismatch(workInProgress);
        } else
          (current =
            getOwnerDocumentFromRootContainer(current).createTextNode(
              newProps
            )),
            (current[internalInstanceKey] = workInProgress),
            (workInProgress.stateNode = current);
      }
      bubbleProperties(workInProgress);
      return null;
    case 13:
      newProps = workInProgress.memoizedState;
      if (
        null === current ||
        (null !== current.memoizedState &&
          null !== current.memoizedState.dehydrated)
      ) {
        type = popHydrationState(workInProgress);
        if (null !== newProps && null !== newProps.dehydrated) {
          if (null === current) {
            if (!type) throw Error(formatProdErrorMessage(318));
            type = workInProgress.memoizedState;
            type = null !== type ? type.dehydrated : null;
            if (!type) throw Error(formatProdErrorMessage(317));
            type[internalInstanceKey] = workInProgress;
          } else
            resetHydrationState(),
              0 === (workInProgress.flags & 128) &&
                (workInProgress.memoizedState = null),
              (workInProgress.flags |= 4);
          bubbleProperties(workInProgress);
          type = !1;
        } else
          (type = upgradeHydrationErrorsToRecoverable()),
            null !== current &&
              null !== current.memoizedState &&
              (current.memoizedState.hydrationErrors = type),
            (type = !0);
        if (!type) {
          if (workInProgress.flags & 256)
            return popSuspenseHandler(workInProgress), workInProgress;
          popSuspenseHandler(workInProgress);
          return null;
        }
      }
      popSuspenseHandler(workInProgress);
      if (0 !== (workInProgress.flags & 128))
        return (workInProgress.lanes = renderLanes), workInProgress;
      renderLanes = null !== newProps;
      current = null !== current && null !== current.memoizedState;
      if (renderLanes) {
        newProps = workInProgress.child;
        type = null;
        null !== newProps.alternate &&
          null !== newProps.alternate.memoizedState &&
          null !== newProps.alternate.memoizedState.cachePool &&
          (type = newProps.alternate.memoizedState.cachePool.pool);
        var cache$127 = null;
        null !== newProps.memoizedState &&
          null !== newProps.memoizedState.cachePool &&
          (cache$127 = newProps.memoizedState.cachePool.pool);
        cache$127 !== type && (newProps.flags |= 2048);
      }
      renderLanes !== current &&
        renderLanes &&
        (workInProgress.child.flags |= 8192);
      scheduleRetryEffect(workInProgress, workInProgress.updateQueue);
      bubbleProperties(workInProgress);
      return null;
    case 4:
      return (
        popHostContainer(),
        null === current &&
          listenToAllSupportedEvents(workInProgress.stateNode.containerInfo),
        bubbleProperties(workInProgress),
        null
      );
    case 10:
      return (
        popProvider(workInProgress.type), bubbleProperties(workInProgress), null
      );
    case 19:
      pop(suspenseStackCursor);
      type = workInProgress.memoizedState;
      if (null === type) return bubbleProperties(workInProgress), null;
      newProps = 0 !== (workInProgress.flags & 128);
      cache$127 = type.rendering;
      if (null === cache$127)
        if (newProps) cutOffTailIfNeeded(type, !1);
        else {
          if (
            0 !== workInProgressRootExitStatus ||
            (null !== current && 0 !== (current.flags & 128))
          )
            for (current = workInProgress.child; null !== current; ) {
              cache$127 = findFirstSuspended(current);
              if (null !== cache$127) {
                workInProgress.flags |= 128;
                cutOffTailIfNeeded(type, !1);
                current = cache$127.updateQueue;
                workInProgress.updateQueue = current;
                scheduleRetryEffect(workInProgress, current);
                workInProgress.subtreeFlags = 0;
                current = renderLanes;
                for (renderLanes = workInProgress.child; null !== renderLanes; )
                  resetWorkInProgress(renderLanes, current),
                    (renderLanes = renderLanes.sibling);
                push(
                  suspenseStackCursor,
                  (suspenseStackCursor.current & 1) | 2
                );
                return workInProgress.child;
              }
              current = current.sibling;
            }
          null !== type.tail &&
            now() > workInProgressRootRenderTargetTime &&
            ((workInProgress.flags |= 128),
            (newProps = !0),
            cutOffTailIfNeeded(type, !1),
            (workInProgress.lanes = 4194304));
        }
      else {
        if (!newProps)
          if (((current = findFirstSuspended(cache$127)), null !== current)) {
            if (
              ((workInProgress.flags |= 128),
              (newProps = !0),
              (current = current.updateQueue),
              (workInProgress.updateQueue = current),
              scheduleRetryEffect(workInProgress, current),
              cutOffTailIfNeeded(type, !0),
              null === type.tail &&
                "hidden" === type.tailMode &&
                !cache$127.alternate &&
                !isHydrating)
            )
              return bubbleProperties(workInProgress), null;
          } else
            2 * now() - type.renderingStartTime >
              workInProgressRootRenderTargetTime &&
              536870912 !== renderLanes &&
              ((workInProgress.flags |= 128),
              (newProps = !0),
              cutOffTailIfNeeded(type, !1),
              (workInProgress.lanes = 4194304));
        type.isBackwards
          ? ((cache$127.sibling = workInProgress.child),
            (workInProgress.child = cache$127))
          : ((current = type.last),
            null !== current
              ? (current.sibling = cache$127)
              : (workInProgress.child = cache$127),
            (type.last = cache$127));
      }
      if (null !== type.tail)
        return (
          (workInProgress = type.tail),
          (type.rendering = workInProgress),
          (type.tail = workInProgress.sibling),
          (type.renderingStartTime = now()),
          (workInProgress.sibling = null),
          (current = suspenseStackCursor.current),
          push(suspenseStackCursor, newProps ? (current & 1) | 2 : current & 1),
          workInProgress
        );
      bubbleProperties(workInProgress);
      return null;
    case 22:
    case 23:
      return (
        popSuspenseHandler(workInProgress),
        popHiddenContext(),
        (newProps = null !== workInProgress.memoizedState),
        null !== current
          ? (null !== current.memoizedState) !== newProps &&
            (workInProgress.flags |= 8192)
          : newProps && (workInProgress.flags |= 8192),
        newProps
          ? 0 !== (renderLanes & 536870912) &&
            0 === (workInProgress.flags & 128) &&
            (bubbleProperties(workInProgress),
            workInProgress.subtreeFlags & 6 && (workInProgress.flags |= 8192))
          : bubbleProperties(workInProgress),
        (renderLanes = workInProgress.updateQueue),
        null !== renderLanes &&
          scheduleRetryEffect(workInProgress, renderLanes.retryQueue),
        (renderLanes = null),
        null !== current &&
          null !== current.memoizedState &&
          null !== current.memoizedState.cachePool &&
          (renderLanes = current.memoizedState.cachePool.pool),
        (newProps = null),
        null !== workInProgress.memoizedState &&
          null !== workInProgress.memoizedState.cachePool &&
          (newProps = workInProgress.memoizedState.cachePool.pool),
        newProps !== renderLanes && (workInProgress.flags |= 2048),
        null !== current && pop(resumedCache),
        null
      );
    case 24:
      return (
        (renderLanes = null),
        null !== current && (renderLanes = current.memoizedState.cache),
        workInProgress.memoizedState.cache !== renderLanes &&
          (workInProgress.flags |= 2048),
        popProvider(CacheContext),
        bubbleProperties(workInProgress),
        null
      );
    case 25:
      return null;
    case 30:
      return null;
  }
  throw Error(formatProdErrorMessage(156, workInProgress.tag));
}
function unwindWork(current, workInProgress) {
  popTreeContext(workInProgress);
  switch (workInProgress.tag) {
    case 1:
      return (
        (current = workInProgress.flags),
        current & 65536
          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
          : null
      );
    case 3:
      return (
        popProvider(CacheContext),
        popHostContainer(),
        (current = workInProgress.flags),
        0 !== (current & 65536) && 0 === (current & 128)
          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
          : null
      );
    case 26:
    case 27:
    case 5:
      return popHostContext(workInProgress), null;
    case 13:
      popSuspenseHandler(workInProgress);
      current = workInProgress.memoizedState;
      if (null !== current && null !== current.dehydrated) {
        if (null === workInProgress.alternate)
          throw Error(formatProdErrorMessage(340));
        resetHydrationState();
      }
      current = workInProgress.flags;
      return current & 65536
        ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
        : null;
    case 19:
      return pop(suspenseStackCursor), null;
    case 4:
      return popHostContainer(), null;
    case 10:
      return popProvider(workInProgress.type), null;
    case 22:
    case 23:
      return (
        popSuspenseHandler(workInProgress),
        popHiddenContext(),
        null !== current && pop(resumedCache),
        (current = workInProgress.flags),
        current & 65536
          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
          : null
      );
    case 24:
      return popProvider(CacheContext), null;
    case 25:
      return null;
    default:
      return null;
  }
}
function unwindInterruptedWork(current, interruptedWork) {
  popTreeContext(interruptedWork);
  switch (interruptedWork.tag) {
    case 3:
      popProvider(CacheContext);
      popHostContainer();
      break;
    case 26:
    case 27:
    case 5:
      popHostContext(interruptedWork);
      break;
    case 4:
      popHostContainer();
      break;
    case 13:
      popSuspenseHandler(interruptedWork);
      break;
    case 19:
      pop(suspenseStackCursor);
      break;
    case 10:
      popProvider(interruptedWork.type);
      break;
    case 22:
    case 23:
      popSuspenseHandler(interruptedWork);
      popHiddenContext();
      null !== current && pop(resumedCache);
      break;
    case 24:
      popProvider(CacheContext);
  }
}
function commitHookEffectListMount(flags, finishedWork) {
  try {
    var updateQueue = finishedWork.updateQueue,
      lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
    if (null !== lastEffect) {
      var firstEffect = lastEffect.next;
      updateQueue = firstEffect;
      do {
        if ((updateQueue.tag & flags) === flags) {
          lastEffect = void 0;
          var create = updateQueue.create,
            inst = updateQueue.inst;
          lastEffect = create();
          inst.destroy = lastEffect;
        }
        updateQueue = updateQueue.next;
      } while (updateQueue !== firstEffect);
    }
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitHookEffectListUnmount(
  flags,
  finishedWork,
  nearestMountedAncestor$jscomp$0
) {
  try {
    var updateQueue = finishedWork.updateQueue,
      lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
    if (null !== lastEffect) {
      var firstEffect = lastEffect.next;
      updateQueue = firstEffect;
      do {
        if ((updateQueue.tag & flags) === flags) {
          var inst = updateQueue.inst,
            destroy = inst.destroy;
          if (void 0 !== destroy) {
            inst.destroy = void 0;
            lastEffect = finishedWork;
            var nearestMountedAncestor = nearestMountedAncestor$jscomp$0,
              destroy_ = destroy;
            try {
              destroy_();
            } catch (error) {
              captureCommitPhaseError(
                lastEffect,
                nearestMountedAncestor,
                error
              );
            }
          }
        }
        updateQueue = updateQueue.next;
      } while (updateQueue !== firstEffect);
    }
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitClassCallbacks(finishedWork) {
  var updateQueue = finishedWork.updateQueue;
  if (null !== updateQueue) {
    var instance = finishedWork.stateNode;
    try {
      commitCallbacks(updateQueue, instance);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
  }
}
function safelyCallComponentWillUnmount(
  current,
  nearestMountedAncestor,
  instance
) {
  instance.props = resolveClassComponentProps(
    current.type,
    current.memoizedProps
  );
  instance.state = current.memoizedState;
  try {
    instance.componentWillUnmount();
  } catch (error) {
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}
function safelyAttachRef(current, nearestMountedAncestor) {
  try {
    var ref = current.ref;
    if (null !== ref) {
      switch (current.tag) {
        case 26:
        case 27:
        case 5:
          var instanceToUse = current.stateNode;
          break;
        case 30:
          instanceToUse = current.stateNode;
          break;
        default:
          instanceToUse = current.stateNode;
      }
      "function" === typeof ref
        ? (current.refCleanup = ref(instanceToUse))
        : (ref.current = instanceToUse);
    }
  } catch (error) {
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}
function safelyDetachRef(current, nearestMountedAncestor) {
  var ref = current.ref,
    refCleanup = current.refCleanup;
  if (null !== ref)
    if ("function" === typeof refCleanup)
      try {
        refCleanup();
      } catch (error) {
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      } finally {
        (current.refCleanup = null),
          (current = current.alternate),
          null != current && (current.refCleanup = null);
      }
    else if ("function" === typeof ref)
      try {
        ref(null);
      } catch (error$143) {
        captureCommitPhaseError(current, nearestMountedAncestor, error$143);
      }
    else ref.current = null;
}
function commitHostMount(finishedWork) {
  var type = finishedWork.type,
    props = finishedWork.memoizedProps,
    instance = finishedWork.stateNode;
  try {
    a: switch (type) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        props.autoFocus && instance.focus();
        break a;
      case "img":
        props.src
          ? (instance.src = props.src)
          : props.srcSet && (instance.srcset = props.srcSet);
    }
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitHostUpdate(finishedWork, newProps, oldProps) {
  try {
    var domElement = finishedWork.stateNode;
    updateProperties(domElement, finishedWork.type, oldProps, newProps);
    domElement[internalPropsKey] = newProps;
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function isHostParent(fiber) {
  return (
    5 === fiber.tag ||
    3 === fiber.tag ||
    26 === fiber.tag ||
    (27 === fiber.tag && isSingletonScope(fiber.type)) ||
    4 === fiber.tag
  );
}
function getHostSibling(fiber) {
  a: for (;;) {
    for (; null === fiber.sibling; ) {
      if (null === fiber.return || isHostParent(fiber.return)) return null;
      fiber = fiber.return;
    }
    fiber.sibling.return = fiber.return;
    for (
      fiber = fiber.sibling;
      5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag;

    ) {
      if (27 === fiber.tag && isSingletonScope(fiber.type)) continue a;
      if (fiber.flags & 2) continue a;
      if (null === fiber.child || 4 === fiber.tag) continue a;
      else (fiber.child.return = fiber), (fiber = fiber.child);
    }
    if (!(fiber.flags & 2)) return fiber.stateNode;
  }
}
function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
  var tag = node.tag;
  if (5 === tag || 6 === tag)
    (node = node.stateNode),
      before
        ? (9 === parent.nodeType
            ? parent.body
            : "HTML" === parent.nodeName
              ? parent.ownerDocument.body
              : parent
          ).insertBefore(node, before)
        : ((before =
            9 === parent.nodeType
              ? parent.body
              : "HTML" === parent.nodeName
                ? parent.ownerDocument.body
                : parent),
          before.appendChild(node),
          (parent = parent._reactRootContainer),
          (null !== parent && void 0 !== parent) ||
            null !== before.onclick ||
            (before.onclick = noop$1));
  else if (
    4 !== tag &&
    (27 === tag &&
      isSingletonScope(node.type) &&
      ((parent = node.stateNode), (before = null)),
    (node = node.child),
    null !== node)
  )
    for (
      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
        node = node.sibling;
      null !== node;

    )
      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
        (node = node.sibling);
}
function insertOrAppendPlacementNode(node, before, parent) {
  var tag = node.tag;
  if (5 === tag || 6 === tag)
    (node = node.stateNode),
      before ? parent.insertBefore(node, before) : parent.appendChild(node);
  else if (
    4 !== tag &&
    (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode),
    (node = node.child),
    null !== node)
  )
    for (
      insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
      null !== node;

    )
      insertOrAppendPlacementNode(node, before, parent), (node = node.sibling);
}
function commitHostSingletonAcquisition(finishedWork) {
  var singleton = finishedWork.stateNode,
    props = finishedWork.memoizedProps;
  try {
    for (
      var type = finishedWork.type, attributes = singleton.attributes;
      attributes.length;

    )
      singleton.removeAttributeNode(attributes[0]);
    setInitialProperties(singleton, type, props);
    singleton[internalInstanceKey] = finishedWork;
    singleton[internalPropsKey] = props;
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
var offscreenSubtreeIsHidden = !1,
  offscreenSubtreeWasHidden = !1,
  needsFormReset = !1,
  PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set,
  nextEffect = null;
function commitBeforeMutationEffects(root, firstChild) {
  root = root.containerInfo;
  eventsEnabled = _enabled;
  root = getActiveElementDeep(root);
  if (hasSelectionCapabilities(root)) {
    if ("selectionStart" in root)
      var JSCompiler_temp = {
        start: root.selectionStart,
        end: root.selectionEnd
      };
    else
      a: {
        JSCompiler_temp =
          ((JSCompiler_temp = root.ownerDocument) &&
            JSCompiler_temp.defaultView) ||
          window;
        var selection =
          JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
        if (selection && 0 !== selection.rangeCount) {
          JSCompiler_temp = selection.anchorNode;
          var anchorOffset = selection.anchorOffset,
            focusNode = selection.focusNode;
          selection = selection.focusOffset;
          try {
            JSCompiler_temp.nodeType, focusNode.nodeType;
          } catch (e$20) {
            JSCompiler_temp = null;
            break a;
          }
          var length = 0,
            start = -1,
            end = -1,
            indexWithinAnchor = 0,
            indexWithinFocus = 0,
            node = root,
            parentNode = null;
          b: for (;;) {
            for (var next; ; ) {
              node !== JSCompiler_temp ||
                (0 !== anchorOffset && 3 !== node.nodeType) ||
                (start = length + anchorOffset);
              node !== focusNode ||
                (0 !== selection && 3 !== node.nodeType) ||
                (end = length + selection);
              3 === node.nodeType && (length += node.nodeValue.length);
              if (null === (next = node.firstChild)) break;
              parentNode = node;
              node = next;
            }
            for (;;) {
              if (node === root) break b;
              parentNode === JSCompiler_temp &&
                ++indexWithinAnchor === anchorOffset &&
                (start = length);
              parentNode === focusNode &&
                ++indexWithinFocus === selection &&
                (end = length);
              if (null !== (next = node.nextSibling)) break;
              node = parentNode;
              parentNode = node.parentNode;
            }
            node = next;
          }
          JSCompiler_temp =
            -1 === start || -1 === end ? null : { start: start, end: end };
        } else JSCompiler_temp = null;
      }
    JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
  } else JSCompiler_temp = null;
  selectionInformation = { focusedElem: root, selectionRange: JSCompiler_temp };
  _enabled = !1;
  for (nextEffect = firstChild; null !== nextEffect; )
    if (
      ((firstChild = nextEffect),
      (root = firstChild.child),
      0 !== (firstChild.subtreeFlags & 1024) && null !== root)
    )
      (root.return = firstChild), (nextEffect = root);
    else
      for (; null !== nextEffect; ) {
        firstChild = nextEffect;
        focusNode = firstChild.alternate;
        root = firstChild.flags;
        switch (firstChild.tag) {
          case 0:
            break;
          case 11:
          case 15:
            break;
          case 1:
            if (0 !== (root & 1024) && null !== focusNode) {
              root = void 0;
              JSCompiler_temp = firstChild;
              anchorOffset = focusNode.memoizedProps;
              focusNode = focusNode.memoizedState;
              selection = JSCompiler_temp.stateNode;
              try {
                var resolvedPrevProps = resolveClassComponentProps(
                  JSCompiler_temp.type,
                  anchorOffset,
                  JSCompiler_temp.elementType === JSCompiler_temp.type
                );
                root = selection.getSnapshotBeforeUpdate(
                  resolvedPrevProps,
                  focusNode
                );
                selection.__reactInternalSnapshotBeforeUpdate = root;
              } catch (error) {
                captureCommitPhaseError(
                  JSCompiler_temp,
                  JSCompiler_temp.return,
                  error
                );
              }
            }
            break;
          case 3:
            if (0 !== (root & 1024))
              if (
                ((root = firstChild.stateNode.containerInfo),
                (JSCompiler_temp = root.nodeType),
                9 === JSCompiler_temp)
              )
                clearContainerSparingly(root);
              else if (1 === JSCompiler_temp)
                switch (root.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    clearContainerSparingly(root);
                    break;
                  default:
                    root.textContent = "";
                }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if (0 !== (root & 1024)) throw Error(formatProdErrorMessage(163));
        }
        root = firstChild.sibling;
        if (null !== root) {
          root.return = firstChild.return;
          nextEffect = root;
          break;
        }
        nextEffect = firstChild.return;
      }
}
function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
  var flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 4 && commitHookEffectListMount(5, finishedWork);
      break;
    case 1:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      if (flags & 4)
        if (((finishedRoot = finishedWork.stateNode), null === current))
          try {
            finishedRoot.componentDidMount();
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
        else {
          var prevProps = resolveClassComponentProps(
            finishedWork.type,
            current.memoizedProps
          );
          current = current.memoizedState;
          try {
            finishedRoot.componentDidUpdate(
              prevProps,
              current,
              finishedRoot.__reactInternalSnapshotBeforeUpdate
            );
          } catch (error$142) {
            captureCommitPhaseError(
              finishedWork,
              finishedWork.return,
              error$142
            );
          }
        }
      flags & 64 && commitClassCallbacks(finishedWork);
      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 3:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      if (
        flags & 64 &&
        ((finishedRoot = finishedWork.updateQueue), null !== finishedRoot)
      ) {
        current = null;
        if (null !== finishedWork.child)
          switch (finishedWork.child.tag) {
            case 27:
            case 5:
              current = finishedWork.child.stateNode;
              break;
            case 1:
              current = finishedWork.child.stateNode;
          }
        try {
          commitCallbacks(finishedRoot, current);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      break;
    case 27:
      null === current &&
        flags & 4 &&
        commitHostSingletonAcquisition(finishedWork);
    case 26:
    case 5:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      null === current && flags & 4 && commitHostMount(finishedWork);
      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 12:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      break;
    case 13:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
      flags & 64 &&
        ((finishedRoot = finishedWork.memoizedState),
        null !== finishedRoot &&
          ((finishedRoot = finishedRoot.dehydrated),
          null !== finishedRoot &&
            ((finishedWork = retryDehydratedSuspenseBoundary.bind(
              null,
              finishedWork
            )),
            registerSuspenseInstanceRetry(finishedRoot, finishedWork))));
      break;
    case 22:
      flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
      if (!flags) {
        current =
          (null !== current && null !== current.memoizedState) ||
          offscreenSubtreeWasHidden;
        prevProps = offscreenSubtreeIsHidden;
        var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
        offscreenSubtreeIsHidden = flags;
        (offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden
          ? recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              0 !== (finishedWork.subtreeFlags & 8772)
            )
          : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
        offscreenSubtreeIsHidden = prevProps;
        offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
      }
      break;
    case 30:
      break;
    default:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
  }
}
function detachFiberAfterEffects(fiber) {
  var alternate = fiber.alternate;
  null !== alternate &&
    ((fiber.alternate = null), detachFiberAfterEffects(alternate));
  fiber.child = null;
  fiber.deletions = null;
  fiber.sibling = null;
  5 === fiber.tag &&
    ((alternate = fiber.stateNode),
    null !== alternate && detachDeletedInstance(alternate));
  fiber.stateNode = null;
  fiber.return = null;
  fiber.dependencies = null;
  fiber.memoizedProps = null;
  fiber.memoizedState = null;
  fiber.pendingProps = null;
  fiber.stateNode = null;
  fiber.updateQueue = null;
}
var hostParent = null,
  hostParentIsContainer = !1;
function recursivelyTraverseDeletionEffects(
  finishedRoot,
  nearestMountedAncestor,
  parent
) {
  for (parent = parent.child; null !== parent; )
    commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent),
      (parent = parent.sibling);
}
function commitDeletionEffectsOnFiber(
  finishedRoot,
  nearestMountedAncestor,
  deletedFiber
) {
  if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
    try {
      injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
    } catch (err) {}
  switch (deletedFiber.tag) {
    case 26:
      offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      deletedFiber.memoizedState
        ? deletedFiber.memoizedState.count--
        : deletedFiber.stateNode &&
          ((deletedFiber = deletedFiber.stateNode),
          deletedFiber.parentNode.removeChild(deletedFiber));
      break;
    case 27:
      offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
      var prevHostParent = hostParent,
        prevHostParentIsContainer = hostParentIsContainer;
      isSingletonScope(deletedFiber.type) &&
        ((hostParent = deletedFiber.stateNode), (hostParentIsContainer = !1));
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      releaseSingletonInstance(deletedFiber.stateNode);
      hostParent = prevHostParent;
      hostParentIsContainer = prevHostParentIsContainer;
      break;
    case 5:
      offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
    case 6:
      prevHostParent = hostParent;
      prevHostParentIsContainer = hostParentIsContainer;
      hostParent = null;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      hostParent = prevHostParent;
      hostParentIsContainer = prevHostParentIsContainer;
      if (null !== hostParent)
        if (hostParentIsContainer)
          try {
            (9 === hostParent.nodeType
              ? hostParent.body
              : "HTML" === hostParent.nodeName
                ? hostParent.ownerDocument.body
                : hostParent
            ).removeChild(deletedFiber.stateNode);
          } catch (error) {
            captureCommitPhaseError(
              deletedFiber,
              nearestMountedAncestor,
              error
            );
          }
        else
          try {
            hostParent.removeChild(deletedFiber.stateNode);
          } catch (error) {
            captureCommitPhaseError(
              deletedFiber,
              nearestMountedAncestor,
              error
            );
          }
      break;
    case 18:
      null !== hostParent &&
        (hostParentIsContainer
          ? ((finishedRoot = hostParent),
            clearSuspenseBoundary(
              9 === finishedRoot.nodeType
                ? finishedRoot.body
                : "HTML" === finishedRoot.nodeName
                  ? finishedRoot.ownerDocument.body
                  : finishedRoot,
              deletedFiber.stateNode
            ),
            retryIfBlockedOn(finishedRoot))
          : clearSuspenseBoundary(hostParent, deletedFiber.stateNode));
      break;
    case 4:
      prevHostParent = hostParent;
      prevHostParentIsContainer = hostParentIsContainer;
      hostParent = deletedFiber.stateNode.containerInfo;
      hostParentIsContainer = !0;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      hostParent = prevHostParent;
      hostParentIsContainer = prevHostParentIsContainer;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      offscreenSubtreeWasHidden ||
        commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
      offscreenSubtreeWasHidden ||
        commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 1:
      offscreenSubtreeWasHidden ||
        (safelyDetachRef(deletedFiber, nearestMountedAncestor),
        (prevHostParent = deletedFiber.stateNode),
        "function" === typeof prevHostParent.componentWillUnmount &&
          safelyCallComponentWillUnmount(
            deletedFiber,
            nearestMountedAncestor,
            prevHostParent
          ));
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 21:
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 22:
      offscreenSubtreeWasHidden =
        (prevHostParent = offscreenSubtreeWasHidden) ||
        null !== deletedFiber.memoizedState;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      offscreenSubtreeWasHidden = prevHostParent;
      break;
    default:
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
  }
}
function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
  if (
    null === finishedWork.memoizedState &&
    ((finishedRoot = finishedWork.alternate),
    null !== finishedRoot &&
      ((finishedRoot = finishedRoot.memoizedState),
      null !== finishedRoot &&
        ((finishedRoot = finishedRoot.dehydrated), null !== finishedRoot)))
  )
    try {
      retryIfBlockedOn(finishedRoot);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
}
function getRetryCache(finishedWork) {
  switch (finishedWork.tag) {
    case 13:
    case 19:
      var retryCache = finishedWork.stateNode;
      null === retryCache &&
        (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
      return retryCache;
    case 22:
      return (
        (finishedWork = finishedWork.stateNode),
        (retryCache = finishedWork._retryCache),
        null === retryCache &&
          (retryCache = finishedWork._retryCache = new PossiblyWeakSet()),
        retryCache
      );
    default:
      throw Error(formatProdErrorMessage(435, finishedWork.tag));
  }
}
function attachSuspenseRetryListeners(finishedWork, wakeables) {
  var retryCache = getRetryCache(finishedWork);
  wakeables.forEach(function (wakeable) {
    var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
    retryCache.has(wakeable) ||
      (retryCache.add(wakeable), wakeable.then(retry, retry));
  });
}
function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
  var deletions = parentFiber.deletions;
  if (null !== deletions)
    for (var i = 0; i < deletions.length; i++) {
      var childToDelete = deletions[i],
        root = root$jscomp$0,
        returnFiber = parentFiber,
        parent = returnFiber;
      a: for (; null !== parent; ) {
        switch (parent.tag) {
          case 27:
            if (isSingletonScope(parent.type)) {
              hostParent = parent.stateNode;
              hostParentIsContainer = !1;
              break a;
            }
            break;
          case 5:
            hostParent = parent.stateNode;
            hostParentIsContainer = !1;
            break a;
          case 3:
          case 4:
            hostParent = parent.stateNode.containerInfo;
            hostParentIsContainer = !0;
            break a;
        }
        parent = parent.return;
      }
      if (null === hostParent) throw Error(formatProdErrorMessage(160));
      commitDeletionEffectsOnFiber(root, returnFiber, childToDelete);
      hostParent = null;
      hostParentIsContainer = !1;
      root = childToDelete.alternate;
      null !== root && (root.return = null);
      childToDelete.return = null;
    }
  if (parentFiber.subtreeFlags & 13878)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitMutationEffectsOnFiber(parentFiber, root$jscomp$0),
        (parentFiber = parentFiber.sibling);
}
var currentHoistableRoot = null;
function commitMutationEffectsOnFiber(finishedWork, root) {
  var current = finishedWork.alternate,
    flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 4 &&
        (commitHookEffectListUnmount(3, finishedWork, finishedWork.return),
        commitHookEffectListMount(3, finishedWork),
        commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
      break;
    case 1:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        (offscreenSubtreeWasHidden ||
          null === current ||
          safelyDetachRef(current, current.return));
      flags & 64 &&
        offscreenSubtreeIsHidden &&
        ((finishedWork = finishedWork.updateQueue),
        null !== finishedWork &&
          ((flags = finishedWork.callbacks),
          null !== flags &&
            ((current = finishedWork.shared.hiddenCallbacks),
            (finishedWork.shared.hiddenCallbacks =
              null === current ? flags : current.concat(flags)))));
      break;
    case 26:
      var hoistableRoot = currentHoistableRoot;
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        (offscreenSubtreeWasHidden ||
          null === current ||
          safelyDetachRef(current, current.return));
      if (flags & 4) {
        var currentResource = null !== current ? current.memoizedState : null;
        flags = finishedWork.memoizedState;
        if (null === current)
          if (null === flags)
            if (null === finishedWork.stateNode) {
              a: {
                flags = finishedWork.type;
                current = finishedWork.memoizedProps;
                hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
                b: switch (flags) {
                  case "title":
                    currentResource =
                      hoistableRoot.getElementsByTagName("title")[0];
                    if (
                      !currentResource ||
                      currentResource[internalHoistableMarker] ||
                      currentResource[internalInstanceKey] ||
                      "http://www.w3.org/2000/svg" ===
                        currentResource.namespaceURI ||
                      currentResource.hasAttribute("itemprop")
                    )
                      (currentResource = hoistableRoot.createElement(flags)),
                        hoistableRoot.head.insertBefore(
                          currentResource,
                          hoistableRoot.querySelector("head > title")
                        );
                    setInitialProperties(currentResource, flags, current);
                    currentResource[internalInstanceKey] = finishedWork;
                    markNodeAsHoistable(currentResource);
                    flags = currentResource;
                    break a;
                  case "link":
                    var maybeNodes = getHydratableHoistableCache(
                      "link",
                      "href",
                      hoistableRoot
                    ).get(flags + (current.href || ""));
                    if (maybeNodes)
                      for (var i = 0; i < maybeNodes.length; i++)
                        if (
                          ((currentResource = maybeNodes[i]),
                          currentResource.getAttribute("href") ===
                            (null == current.href || "" === current.href
                              ? null
                              : current.href) &&
                            currentResource.getAttribute("rel") ===
                              (null == current.rel ? null : current.rel) &&
                            currentResource.getAttribute("title") ===
                              (null == current.title ? null : current.title) &&
                            currentResource.getAttribute("crossorigin") ===
                              (null == current.crossOrigin
                                ? null
                                : current.crossOrigin))
                        ) {
                          maybeNodes.splice(i, 1);
                          break b;
                        }
                    currentResource = hoistableRoot.createElement(flags);
                    setInitialProperties(currentResource, flags, current);
                    hoistableRoot.head.appendChild(currentResource);
                    break;
                  case "meta":
                    if (
                      (maybeNodes = getHydratableHoistableCache(
                        "meta",
                        "content",
                        hoistableRoot
                      ).get(flags + (current.content || "")))
                    )
                      for (i = 0; i < maybeNodes.length; i++)
                        if (
                          ((currentResource = maybeNodes[i]),
                          currentResource.getAttribute("content") ===
                            (null == current.content
                              ? null
                              : "" + current.content) &&
                            currentResource.getAttribute("name") ===
                              (null == current.name ? null : current.name) &&
                            currentResource.getAttribute("property") ===
                              (null == current.property
                                ? null
                                : current.property) &&
                            currentResource.getAttribute("http-equiv") ===
                              (null == current.httpEquiv
                                ? null
                                : current.httpEquiv) &&
                            currentResource.getAttribute("charset") ===
                              (null == current.charSet
                                ? null
                                : current.charSet))
                        ) {
                          maybeNodes.splice(i, 1);
                          break b;
                        }
                    currentResource = hoistableRoot.createElement(flags);
                    setInitialProperties(currentResource, flags, current);
                    hoistableRoot.head.appendChild(currentResource);
                    break;
                  default:
                    throw Error(formatProdErrorMessage(468, flags));
                }
                currentResource[internalInstanceKey] = finishedWork;
                markNodeAsHoistable(currentResource);
                flags = currentResource;
              }
              finishedWork.stateNode = flags;
            } else
              mountHoistable(
                hoistableRoot,
                finishedWork.type,
                finishedWork.stateNode
              );
          else
            finishedWork.stateNode = acquireResource(
              hoistableRoot,
              flags,
              finishedWork.memoizedProps
            );
        else
          currentResource !== flags
            ? (null === currentResource
                ? null !== current.stateNode &&
                  ((current = current.stateNode),
                  current.parentNode.removeChild(current))
                : currentResource.count--,
              null === flags
                ? mountHoistable(
                    hoistableRoot,
                    finishedWork.type,
                    finishedWork.stateNode
                  )
                : acquireResource(
                    hoistableRoot,
                    flags,
                    finishedWork.memoizedProps
                  ))
            : null === flags &&
              null !== finishedWork.stateNode &&
              commitHostUpdate(
                finishedWork,
                finishedWork.memoizedProps,
                current.memoizedProps
              );
      }
      break;
    case 27:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        (offscreenSubtreeWasHidden ||
          null === current ||
          safelyDetachRef(current, current.return));
      null !== current &&
        flags & 4 &&
        commitHostUpdate(
          finishedWork,
          finishedWork.memoizedProps,
          current.memoizedProps
        );
      break;
    case 5:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        (offscreenSubtreeWasHidden ||
          null === current ||
          safelyDetachRef(current, current.return));
      if (finishedWork.flags & 32) {
        hoistableRoot = finishedWork.stateNode;
        try {
          setTextContent(hoistableRoot, "");
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      flags & 4 &&
        null != finishedWork.stateNode &&
        ((hoistableRoot = finishedWork.memoizedProps),
        commitHostUpdate(
          finishedWork,
          hoistableRoot,
          null !== current ? current.memoizedProps : hoistableRoot
        ));
      flags & 1024 && (needsFormReset = !0);
      break;
    case 6:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      if (flags & 4) {
        if (null === finishedWork.stateNode)
          throw Error(formatProdErrorMessage(162));
        flags = finishedWork.memoizedProps;
        current = finishedWork.stateNode;
        try {
          current.nodeValue = flags;
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      break;
    case 3:
      tagCaches = null;
      hoistableRoot = currentHoistableRoot;
      currentHoistableRoot = getHoistableRoot(root.containerInfo);
      recursivelyTraverseMutationEffects(root, finishedWork);
      currentHoistableRoot = hoistableRoot;
      commitReconciliationEffects(finishedWork);
      if (flags & 4 && null !== current && current.memoizedState.isDehydrated)
        try {
          retryIfBlockedOn(root.containerInfo);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      needsFormReset &&
        ((needsFormReset = !1), recursivelyResetForms(finishedWork));
      break;
    case 4:
      flags = currentHoistableRoot;
      currentHoistableRoot = getHoistableRoot(
        finishedWork.stateNode.containerInfo
      );
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      currentHoistableRoot = flags;
      break;
    case 12:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      break;
    case 13:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      finishedWork.child.flags & 8192 &&
        (null !== finishedWork.memoizedState) !==
          (null !== current && null !== current.memoizedState) &&
        (globalMostRecentFallbackTime = now());
      flags & 4 &&
        ((flags = finishedWork.updateQueue),
        null !== flags &&
          ((finishedWork.updateQueue = null),
          attachSuspenseRetryListeners(finishedWork, flags)));
      break;
    case 22:
      hoistableRoot = null !== finishedWork.memoizedState;
      var wasHidden = null !== current && null !== current.memoizedState,
        prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden,
        prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
      offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
      recursivelyTraverseMutationEffects(root, finishedWork);
      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
      offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
      commitReconciliationEffects(finishedWork);
      if (flags & 8192)
        a: for (
          root = finishedWork.stateNode,
            root._visibility = hoistableRoot
              ? root._visibility & -2
              : root._visibility | 1,
            hoistableRoot &&
              (null === current ||
                wasHidden ||
                offscreenSubtreeIsHidden ||
                offscreenSubtreeWasHidden ||
                recursivelyTraverseDisappearLayoutEffects(finishedWork)),
            current = null,
            root = finishedWork;
          ;

        ) {
          if (5 === root.tag || 26 === root.tag) {
            if (null === current) {
              wasHidden = current = root;
              try {
                if (((currentResource = wasHidden.stateNode), hoistableRoot))
                  (maybeNodes = currentResource.style),
                    "function" === typeof maybeNodes.setProperty
                      ? maybeNodes.setProperty("display", "none", "important")
                      : (maybeNodes.display = "none");
                else {
                  i = wasHidden.stateNode;
                  var styleProp = wasHidden.memoizedProps.style,
                    display =
                      void 0 !== styleProp &&
                      null !== styleProp &&
                      styleProp.hasOwnProperty("display")
                        ? styleProp.display
                        : null;
                  i.style.display =
                    null == display || "boolean" === typeof display
                      ? ""
                      : ("" + display).trim();
                }
              } catch (error) {
                captureCommitPhaseError(wasHidden, wasHidden.return, error);
              }
            }
          } else if (6 === root.tag) {
            if (null === current) {
              wasHidden = root;
              try {
                wasHidden.stateNode.nodeValue = hoistableRoot
                  ? ""
                  : wasHidden.memoizedProps;
              } catch (error) {
                captureCommitPhaseError(wasHidden, wasHidden.return, error);
              }
            }
          } else if (
            ((22 !== root.tag && 23 !== root.tag) ||
              null === root.memoizedState ||
              root === finishedWork) &&
            null !== root.child
          ) {
            root.child.return = root;
            root = root.child;
            continue;
          }
          if (root === finishedWork) break a;
          for (; null === root.sibling; ) {
            if (null === root.return || root.return === finishedWork) break a;
            current === root && (current = null);
            root = root.return;
          }
          current === root && (current = null);
          root.sibling.return = root.return;
          root = root.sibling;
        }
      flags & 4 &&
        ((flags = finishedWork.updateQueue),
        null !== flags &&
          ((current = flags.retryQueue),
          null !== current &&
            ((flags.retryQueue = null),
            attachSuspenseRetryListeners(finishedWork, current))));
      break;
    case 19:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 4 &&
        ((flags = finishedWork.updateQueue),
        null !== flags &&
          ((finishedWork.updateQueue = null),
          attachSuspenseRetryListeners(finishedWork, flags)));
      break;
    case 30:
      break;
    case 21:
      break;
    default:
      recursivelyTraverseMutationEffects(root, finishedWork),
        commitReconciliationEffects(finishedWork);
  }
}
function commitReconciliationEffects(finishedWork) {
  var flags = finishedWork.flags;
  if (flags & 2) {
    try {
      for (
        var hostParentFiber, parentFiber = finishedWork.return;
        null !== parentFiber;

      ) {
        if (isHostParent(parentFiber)) {
          hostParentFiber = parentFiber;
          break;
        }
        parentFiber = parentFiber.return;
      }
      if (null == hostParentFiber) throw Error(formatProdErrorMessage(160));
      switch (hostParentFiber.tag) {
        case 27:
          var parent = hostParentFiber.stateNode,
            before = getHostSibling(finishedWork);
          insertOrAppendPlacementNode(finishedWork, before, parent);
          break;
        case 5:
          var parent$144 = hostParentFiber.stateNode;
          hostParentFiber.flags & 32 &&
            (setTextContent(parent$144, ""), (hostParentFiber.flags &= -33));
          var before$145 = getHostSibling(finishedWork);
          insertOrAppendPlacementNode(finishedWork, before$145, parent$144);
          break;
        case 3:
        case 4:
          var parent$146 = hostParentFiber.stateNode.containerInfo,
            before$147 = getHostSibling(finishedWork);
          insertOrAppendPlacementNodeIntoContainer(
            finishedWork,
            before$147,
            parent$146
          );
          break;
        default:
          throw Error(formatProdErrorMessage(161));
      }
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
    finishedWork.flags &= -3;
  }
  flags & 4096 && (finishedWork.flags &= -4097);
}
function recursivelyResetForms(parentFiber) {
  if (parentFiber.subtreeFlags & 1024)
    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
      var fiber = parentFiber;
      recursivelyResetForms(fiber);
      5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
      parentFiber = parentFiber.sibling;
    }
}
function recursivelyTraverseLayoutEffects(root, parentFiber) {
  if (parentFiber.subtreeFlags & 8772)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitLayoutEffectOnFiber(root, parentFiber.alternate, parentFiber),
        (parentFiber = parentFiber.sibling);
}
function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var finishedWork = parentFiber;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 1:
        safelyDetachRef(finishedWork, finishedWork.return);
        var instance = finishedWork.stateNode;
        "function" === typeof instance.componentWillUnmount &&
          safelyCallComponentWillUnmount(
            finishedWork,
            finishedWork.return,
            instance
          );
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 27:
        releaseSingletonInstance(finishedWork.stateNode);
      case 26:
      case 5:
        safelyDetachRef(finishedWork, finishedWork.return);
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 22:
        null === finishedWork.memoizedState &&
          recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 30:
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      default:
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
    }
    parentFiber = parentFiber.sibling;
  }
}
function recursivelyTraverseReappearLayoutEffects(
  finishedRoot$jscomp$0,
  parentFiber,
  includeWorkInProgressEffects
) {
  includeWorkInProgressEffects =
    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var current = parentFiber.alternate,
      finishedRoot = finishedRoot$jscomp$0,
      finishedWork = parentFiber,
      flags = finishedWork.flags;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 15:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        commitHookEffectListMount(4, finishedWork);
        break;
      case 1:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        current = finishedWork;
        finishedRoot = current.stateNode;
        if ("function" === typeof finishedRoot.componentDidMount)
          try {
            finishedRoot.componentDidMount();
          } catch (error) {
            captureCommitPhaseError(current, current.return, error);
          }
        current = finishedWork;
        finishedRoot = current.updateQueue;
        if (null !== finishedRoot) {
          var instance = current.stateNode;
          try {
            var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
            if (null !== hiddenCallbacks)
              for (
                finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0;
                finishedRoot < hiddenCallbacks.length;
                finishedRoot++
              )
                callCallback(hiddenCallbacks[finishedRoot], instance);
          } catch (error) {
            captureCommitPhaseError(current, current.return, error);
          }
        }
        includeWorkInProgressEffects &&
          flags & 64 &&
          commitClassCallbacks(finishedWork);
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 27:
        commitHostSingletonAcquisition(finishedWork);
      case 26:
      case 5:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          null === current &&
          flags & 4 &&
          commitHostMount(finishedWork);
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 12:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        break;
      case 13:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          flags & 4 &&
          commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
        break;
      case 22:
        null === finishedWork.memoizedState &&
          recursivelyTraverseReappearLayoutEffects(
            finishedRoot,
            finishedWork,
            includeWorkInProgressEffects
          );
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 30:
        break;
      default:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
    }
    parentFiber = parentFiber.sibling;
  }
}
function commitOffscreenPassiveMountEffects(current, finishedWork) {
  var previousCache = null;
  null !== current &&
    null !== current.memoizedState &&
    null !== current.memoizedState.cachePool &&
    (previousCache = current.memoizedState.cachePool.pool);
  current = null;
  null !== finishedWork.memoizedState &&
    null !== finishedWork.memoizedState.cachePool &&
    (current = finishedWork.memoizedState.cachePool.pool);
  current !== previousCache &&
    (null != current && current.refCount++,
    null != previousCache && releaseCache(previousCache));
}
function commitCachePassiveMountEffect(current, finishedWork) {
  current = null;
  null !== finishedWork.alternate &&
    (current = finishedWork.alternate.memoizedState.cache);
  finishedWork = finishedWork.memoizedState.cache;
  finishedWork !== current &&
    (finishedWork.refCount++, null != current && releaseCache(current));
}
function recursivelyTraversePassiveMountEffects(
  root,
  parentFiber,
  committedLanes,
  committedTransitions
) {
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitPassiveMountOnFiber(
        root,
        parentFiber,
        committedLanes,
        committedTransitions
      ),
        (parentFiber = parentFiber.sibling);
}
function commitPassiveMountOnFiber(
  finishedRoot,
  finishedWork,
  committedLanes,
  committedTransitions
) {
  var flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 && commitHookEffectListMount(9, finishedWork);
      break;
    case 1:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      break;
    case 3:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 &&
        ((finishedRoot = null),
        null !== finishedWork.alternate &&
          (finishedRoot = finishedWork.alternate.memoizedState.cache),
        (finishedWork = finishedWork.memoizedState.cache),
        finishedWork !== finishedRoot &&
          (finishedWork.refCount++,
          null != finishedRoot && releaseCache(finishedRoot)));
      break;
    case 12:
      if (flags & 2048) {
        recursivelyTraversePassiveMountEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions
        );
        finishedRoot = finishedWork.stateNode;
        try {
          var _finishedWork$memoize2 = finishedWork.memoizedProps,
            id = _finishedWork$memoize2.id,
            onPostCommit = _finishedWork$memoize2.onPostCommit;
          "function" === typeof onPostCommit &&
            onPostCommit(
              id,
              null === finishedWork.alternate ? "mount" : "update",
              finishedRoot.passiveEffectDuration,
              -0
            );
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      } else
        recursivelyTraversePassiveMountEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions
        );
      break;
    case 13:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      break;
    case 23:
      break;
    case 22:
      _finishedWork$memoize2 = finishedWork.stateNode;
      id = finishedWork.alternate;
      null !== finishedWork.memoizedState
        ? _finishedWork$memoize2._visibility & 2
          ? recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            )
          : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork)
        : _finishedWork$memoize2._visibility & 2
          ? recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            )
          : ((_finishedWork$memoize2._visibility |= 2),
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              0 !== (finishedWork.subtreeFlags & 10256)
            ));
      flags & 2048 && commitOffscreenPassiveMountEffects(id, finishedWork);
      break;
    case 24:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 &&
        commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
      break;
    default:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
  }
}
function recursivelyTraverseReconnectPassiveEffects(
  finishedRoot$jscomp$0,
  parentFiber,
  committedLanes$jscomp$0,
  committedTransitions$jscomp$0,
  includeWorkInProgressEffects
) {
  includeWorkInProgressEffects =
    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 10256);
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var finishedRoot = finishedRoot$jscomp$0,
      finishedWork = parentFiber,
      committedLanes = committedLanes$jscomp$0,
      committedTransitions = committedTransitions$jscomp$0,
      flags = finishedWork.flags;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 15:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
        commitHookEffectListMount(8, finishedWork);
        break;
      case 23:
        break;
      case 22:
        var instance = finishedWork.stateNode;
        null !== finishedWork.memoizedState
          ? instance._visibility & 2
            ? recursivelyTraverseReconnectPassiveEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions,
                includeWorkInProgressEffects
              )
            : recursivelyTraverseAtomicPassiveEffects(
                finishedRoot,
                finishedWork
              )
          : ((instance._visibility |= 2),
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            ));
        includeWorkInProgressEffects &&
          flags & 2048 &&
          commitOffscreenPassiveMountEffects(
            finishedWork.alternate,
            finishedWork
          );
        break;
      case 24:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          flags & 2048 &&
          commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
        break;
      default:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
    }
    parentFiber = parentFiber.sibling;
  }
}
function recursivelyTraverseAtomicPassiveEffects(
  finishedRoot$jscomp$0,
  parentFiber
) {
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
      var finishedRoot = finishedRoot$jscomp$0,
        finishedWork = parentFiber,
        flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 22:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          flags & 2048 &&
            commitOffscreenPassiveMountEffects(
              finishedWork.alternate,
              finishedWork
            );
          break;
        case 24:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          flags & 2048 &&
            commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
          break;
        default:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
      }
      parentFiber = parentFiber.sibling;
    }
}
var suspenseyCommitFlag = 8192;
function recursivelyAccumulateSuspenseyCommit(parentFiber) {
  if (parentFiber.subtreeFlags & suspenseyCommitFlag)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      accumulateSuspenseyCommitOnFiber(parentFiber),
        (parentFiber = parentFiber.sibling);
}
function accumulateSuspenseyCommitOnFiber(fiber) {
  switch (fiber.tag) {
    case 26:
      recursivelyAccumulateSuspenseyCommit(fiber);
      fiber.flags & suspenseyCommitFlag &&
        null !== fiber.memoizedState &&
        suspendResource(
          currentHoistableRoot,
          fiber.memoizedState,
          fiber.memoizedProps
        );
      break;
    case 5:
      recursivelyAccumulateSuspenseyCommit(fiber);
      break;
    case 3:
    case 4:
      var previousHoistableRoot = currentHoistableRoot;
      currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
      recursivelyAccumulateSuspenseyCommit(fiber);
      currentHoistableRoot = previousHoistableRoot;
      break;
    case 22:
      null === fiber.memoizedState &&
        ((previousHoistableRoot = fiber.alternate),
        null !== previousHoistableRoot &&
        null !== previousHoistableRoot.memoizedState
          ? ((previousHoistableRoot = suspenseyCommitFlag),
            (suspenseyCommitFlag = 16777216),
            recursivelyAccumulateSuspenseyCommit(fiber),
            (suspenseyCommitFlag = previousHoistableRoot))
          : recursivelyAccumulateSuspenseyCommit(fiber));
      break;
    default:
      recursivelyAccumulateSuspenseyCommit(fiber);
  }
}
function detachAlternateSiblings(parentFiber) {
  var previousFiber = parentFiber.alternate;
  if (
    null !== previousFiber &&
    ((parentFiber = previousFiber.child), null !== parentFiber)
  ) {
    previousFiber.child = null;
    do
      (previousFiber = parentFiber.sibling),
        (parentFiber.sibling = null),
        (parentFiber = previousFiber);
    while (null !== parentFiber);
  }
}
function recursivelyTraversePassiveUnmountEffects(parentFiber) {
  var deletions = parentFiber.deletions;
  if (0 !== (parentFiber.flags & 16)) {
    if (null !== deletions)
      for (var i = 0; i < deletions.length; i++) {
        var childToDelete = deletions[i];
        nextEffect = childToDelete;
        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
          childToDelete,
          parentFiber
        );
      }
    detachAlternateSiblings(parentFiber);
  }
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitPassiveUnmountOnFiber(parentFiber),
        (parentFiber = parentFiber.sibling);
}
function commitPassiveUnmountOnFiber(finishedWork) {
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
      finishedWork.flags & 2048 &&
        commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
      break;
    case 3:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
      break;
    case 12:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
      break;
    case 22:
      var instance = finishedWork.stateNode;
      null !== finishedWork.memoizedState &&
      instance._visibility & 2 &&
      (null === finishedWork.return || 13 !== finishedWork.return.tag)
        ? ((instance._visibility &= -3),
          recursivelyTraverseDisconnectPassiveEffects(finishedWork))
        : recursivelyTraversePassiveUnmountEffects(finishedWork);
      break;
    default:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
  }
}
function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
  var deletions = parentFiber.deletions;
  if (0 !== (parentFiber.flags & 16)) {
    if (null !== deletions)
      for (var i = 0; i < deletions.length; i++) {
        var childToDelete = deletions[i];
        nextEffect = childToDelete;
        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
          childToDelete,
          parentFiber
        );
      }
    detachAlternateSiblings(parentFiber);
  }
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    deletions = parentFiber;
    switch (deletions.tag) {
      case 0:
      case 11:
      case 15:
        commitHookEffectListUnmount(8, deletions, deletions.return);
        recursivelyTraverseDisconnectPassiveEffects(deletions);
        break;
      case 22:
        i = deletions.stateNode;
        i._visibility & 2 &&
          ((i._visibility &= -3),
          recursivelyTraverseDisconnectPassiveEffects(deletions));
        break;
      default:
        recursivelyTraverseDisconnectPassiveEffects(deletions);
    }
    parentFiber = parentFiber.sibling;
  }
}
function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
  deletedSubtreeRoot,
  nearestMountedAncestor
) {
  for (; null !== nextEffect; ) {
    var fiber = nextEffect;
    switch (fiber.tag) {
      case 0:
      case 11:
      case 15:
        commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
        break;
      case 23:
      case 22:
        if (
          null !== fiber.memoizedState &&
          null !== fiber.memoizedState.cachePool
        ) {
          var cache = fiber.memoizedState.cachePool.pool;
          null != cache && cache.refCount++;
        }
        break;
      case 24:
        releaseCache(fiber.memoizedState.cache);
    }
    cache = fiber.child;
    if (null !== cache) (cache.return = fiber), (nextEffect = cache);
    else
      a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
        cache = nextEffect;
        var sibling = cache.sibling,
          returnFiber = cache.return;
        detachFiberAfterEffects(cache);
        if (cache === fiber) {
          nextEffect = null;
          break a;
        }
        if (null !== sibling) {
          sibling.return = returnFiber;
          nextEffect = sibling;
          break a;
        }
        nextEffect = returnFiber;
      }
  }
}
var DefaultAsyncDispatcher = {
    getCacheForType: function (resourceType) {
      var cache = readContext(CacheContext),
        cacheForType = cache.data.get(resourceType);
      void 0 === cacheForType &&
        ((cacheForType = resourceType()),
        cache.data.set(resourceType, cacheForType));
      return cacheForType;
    }
  },
  PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map,
  executionContext = 0,
  workInProgressRoot = null,
  workInProgress = null,
  workInProgressRootRenderLanes = 0,
  workInProgressSuspendedReason = 0,
  workInProgressThrownValue = null,
  workInProgressRootDidSkipSuspendedSiblings = !1,
  workInProgressRootIsPrerendering = !1,
  workInProgressRootDidAttachPingListener = !1,
  entangledRenderLanes = 0,
  workInProgressRootExitStatus = 0,
  workInProgressRootSkippedLanes = 0,
  workInProgressRootInterleavedUpdatedLanes = 0,
  workInProgressRootPingedLanes = 0,
  workInProgressDeferredLane = 0,
  workInProgressSuspendedRetryLanes = 0,
  workInProgressRootConcurrentErrors = null,
  workInProgressRootRecoverableErrors = null,
  workInProgressRootDidIncludeRecursiveRenderUpdate = !1,
  globalMostRecentFallbackTime = 0,
  workInProgressRootRenderTargetTime = Infinity,
  workInProgressTransitions = null,
  legacyErrorBoundariesThatAlreadyFailed = null,
  pendingEffectsStatus = 0,
  pendingEffectsRoot = null,
  pendingFinishedWork = null,
  pendingEffectsLanes = 0,
  pendingEffectsRemainingLanes = 0,
  pendingPassiveTransitions = null,
  pendingRecoverableErrors = null,
  nestedUpdateCount = 0,
  rootWithNestedUpdates = null;
function requestUpdateLane() {
  if (0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes)
    return workInProgressRootRenderLanes & -workInProgressRootRenderLanes;
  if (null !== ReactSharedInternals.T) {
    var actionScopeLane = currentEntangledLane;
    return 0 !== actionScopeLane ? actionScopeLane : requestTransitionLane();
  }
  return resolveUpdatePriority();
}
function requestDeferredLane() {
  0 === workInProgressDeferredLane &&
    (workInProgressDeferredLane =
      0 === (workInProgressRootRenderLanes & 536870912) || isHydrating
        ? claimNextTransitionLane()
        : 536870912);
  var suspenseHandler = suspenseHandlerStackCursor.current;
  null !== suspenseHandler && (suspenseHandler.flags |= 32);
  return workInProgressDeferredLane;
}
function scheduleUpdateOnFiber(root, fiber, lane) {
  if (
    (root === workInProgressRoot &&
      (2 === workInProgressSuspendedReason ||
        9 === workInProgressSuspendedReason)) ||
    null !== root.cancelPendingCommit
  )
    prepareFreshStack(root, 0),
      markRootSuspended(
        root,
        workInProgressRootRenderLanes,
        workInProgressDeferredLane,
        !1
      );
  markRootUpdated$1(root, lane);
  if (0 === (executionContext & 2) || root !== workInProgressRoot)
    root === workInProgressRoot &&
      (0 === (executionContext & 2) &&
        (workInProgressRootInterleavedUpdatedLanes |= lane),
      4 === workInProgressRootExitStatus &&
        markRootSuspended(
          root,
          workInProgressRootRenderLanes,
          workInProgressDeferredLane,
          !1
        )),
      ensureRootIsScheduled(root);
}
function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
  var shouldTimeSlice =
      (!forceSync &&
        0 === (lanes & 124) &&
        0 === (lanes & root$jscomp$0.expiredLanes)) ||
      checkIfRootIsPrerendering(root$jscomp$0, lanes),
    exitStatus = shouldTimeSlice
      ? renderRootConcurrent(root$jscomp$0, lanes)
      : renderRootSync(root$jscomp$0, lanes, !0),
    renderWasConcurrent = shouldTimeSlice;
  do {
    if (0 === exitStatus) {
      workInProgressRootIsPrerendering &&
        !shouldTimeSlice &&
        markRootSuspended(root$jscomp$0, lanes, 0, !1);
      break;
    } else {
      forceSync = root$jscomp$0.current.alternate;
      if (
        renderWasConcurrent &&
        !isRenderConsistentWithExternalStores(forceSync)
      ) {
        exitStatus = renderRootSync(root$jscomp$0, lanes, !1);
        renderWasConcurrent = !1;
        continue;
      }
      if (2 === exitStatus) {
        renderWasConcurrent = lanes;
        if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent)
          var JSCompiler_inline_result = 0;
        else
          (JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913),
            (JSCompiler_inline_result =
              0 !== JSCompiler_inline_result
                ? JSCompiler_inline_result
                : JSCompiler_inline_result & 536870912
                  ? 536870912
                  : 0);
        if (0 !== JSCompiler_inline_result) {
          lanes = JSCompiler_inline_result;
          a: {
            var root = root$jscomp$0;
            exitStatus = workInProgressRootConcurrentErrors;
            var wasRootDehydrated = root.current.memoizedState.isDehydrated;
            wasRootDehydrated &&
              (prepareFreshStack(root, JSCompiler_inline_result).flags |= 256);
            JSCompiler_inline_result = renderRootSync(
              root,
              JSCompiler_inline_result,
              !1
            );
            if (2 !== JSCompiler_inline_result) {
              if (
                workInProgressRootDidAttachPingListener &&
                !wasRootDehydrated
              ) {
                root.errorRecoveryDisabledLanes |= renderWasConcurrent;
                workInProgressRootInterleavedUpdatedLanes |=
                  renderWasConcurrent;
                exitStatus = 4;
                break a;
              }
              renderWasConcurrent = workInProgressRootRecoverableErrors;
              workInProgressRootRecoverableErrors = exitStatus;
              null !== renderWasConcurrent &&
                (null === workInProgressRootRecoverableErrors
                  ? (workInProgressRootRecoverableErrors = renderWasConcurrent)
                  : workInProgressRootRecoverableErrors.push.apply(
                      workInProgressRootRecoverableErrors,
                      renderWasConcurrent
                    ));
            }
            exitStatus = JSCompiler_inline_result;
          }
          renderWasConcurrent = !1;
          if (2 !== exitStatus) continue;
        }
      }
      if (1 === exitStatus) {
        prepareFreshStack(root$jscomp$0, 0);
        markRootSuspended(root$jscomp$0, lanes, 0, !0);
        break;
      }
      a: {
        shouldTimeSlice = root$jscomp$0;
        renderWasConcurrent = exitStatus;
        switch (renderWasConcurrent) {
          case 0:
          case 1:
            throw Error(formatProdErrorMessage(345));
          case 4:
            if ((lanes & 4194048) !== lanes) break;
          case 6:
            markRootSuspended(
              shouldTimeSlice,
              lanes,
              workInProgressDeferredLane,
              !workInProgressRootDidSkipSuspendedSiblings
            );
            break a;
          case 2:
            workInProgressRootRecoverableErrors = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(formatProdErrorMessage(329));
        }
        if (
          (lanes & 62914560) === lanes &&
          ((exitStatus = globalMostRecentFallbackTime + 300 - now()),
          10 < exitStatus)
        ) {
          markRootSuspended(
            shouldTimeSlice,
            lanes,
            workInProgressDeferredLane,
            !workInProgressRootDidSkipSuspendedSiblings
          );
          if (0 !== getNextLanes(shouldTimeSlice, 0, !0)) break a;
          shouldTimeSlice.timeoutHandle = scheduleTimeout(
            commitRootWhenReady.bind(
              null,
              shouldTimeSlice,
              forceSync,
              workInProgressRootRecoverableErrors,
              workInProgressTransitions,
              workInProgressRootDidIncludeRecursiveRenderUpdate,
              lanes,
              workInProgressDeferredLane,
              workInProgressRootInterleavedUpdatedLanes,
              workInProgressSuspendedRetryLanes,
              workInProgressRootDidSkipSuspendedSiblings,
              renderWasConcurrent,
              2,
              -0,
              0
            ),
            exitStatus
          );
          break a;
        }
        commitRootWhenReady(
          shouldTimeSlice,
          forceSync,
          workInProgressRootRecoverableErrors,
          workInProgressTransitions,
          workInProgressRootDidIncludeRecursiveRenderUpdate,
          lanes,
          workInProgressDeferredLane,
          workInProgressRootInterleavedUpdatedLanes,
          workInProgressSuspendedRetryLanes,
          workInProgressRootDidSkipSuspendedSiblings,
          renderWasConcurrent,
          0,
          -0,
          0
        );
      }
    }
    break;
  } while (1);
  ensureRootIsScheduled(root$jscomp$0);
}
function commitRootWhenReady(
  root,
  finishedWork,
  recoverableErrors,
  transitions,
  didIncludeRenderPhaseUpdate,
  lanes,
  spawnedLane,
  updatedLanes,
  suspendedRetryLanes,
  didSkipSuspendedSiblings,
  exitStatus,
  suspendedCommitReason,
  completedRenderStartTime,
  completedRenderEndTime
) {
  root.timeoutHandle = -1;
  suspendedCommitReason = finishedWork.subtreeFlags;
  if (
    suspendedCommitReason & 8192 ||
    16785408 === (suspendedCommitReason & 16785408)
  )
    if (
      ((suspendedState = { stylesheets: null, count: 0, unsuspend: noop }),
      accumulateSuspenseyCommitOnFiber(finishedWork),
      (suspendedCommitReason = waitForCommitToBeReady()),
      null !== suspendedCommitReason)
    ) {
      root.cancelPendingCommit = suspendedCommitReason(
        commitRoot.bind(
          null,
          root,
          finishedWork,
          lanes,
          recoverableErrors,
          transitions,
          didIncludeRenderPhaseUpdate,
          spawnedLane,
          updatedLanes,
          suspendedRetryLanes,
          exitStatus,
          1,
          completedRenderStartTime,
          completedRenderEndTime
        )
      );
      markRootSuspended(root, lanes, spawnedLane, !didSkipSuspendedSiblings);
      return;
    }
  commitRoot(
    root,
    finishedWork,
    lanes,
    recoverableErrors,
    transitions,
    didIncludeRenderPhaseUpdate,
    spawnedLane,
    updatedLanes,
    suspendedRetryLanes
  );
}
function isRenderConsistentWithExternalStores(finishedWork) {
  for (var node = finishedWork; ; ) {
    var tag = node.tag;
    if (
      (0 === tag || 11 === tag || 15 === tag) &&
      node.flags & 16384 &&
      ((tag = node.updateQueue),
      null !== tag && ((tag = tag.stores), null !== tag))
    )
      for (var i = 0; i < tag.length; i++) {
        var check = tag[i],
          getSnapshot = check.getSnapshot;
        check = check.value;
        try {
          if (!objectIs(getSnapshot(), check)) return !1;
        } catch (error) {
          return !1;
        }
      }
    tag = node.child;
    if (node.subtreeFlags & 16384 && null !== tag)
      (tag.return = node), (node = tag);
    else {
      if (node === finishedWork) break;
      for (; null === node.sibling; ) {
        if (null === node.return || node.return === finishedWork) return !0;
        node = node.return;
      }
      node.sibling.return = node.return;
      node = node.sibling;
    }
  }
  return !0;
}
function markRootSuspended(
  root,
  suspendedLanes,
  spawnedLane,
  didAttemptEntireTree
) {
  suspendedLanes &= ~workInProgressRootPingedLanes;
  suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
  root.suspendedLanes |= suspendedLanes;
  root.pingedLanes &= ~suspendedLanes;
  didAttemptEntireTree && (root.warmLanes |= suspendedLanes);
  didAttemptEntireTree = root.expirationTimes;
  for (var lanes = suspendedLanes; 0 < lanes; ) {
    var index$4 = 31 - clz32(lanes),
      lane = 1 << index$4;
    didAttemptEntireTree[index$4] = -1;
    lanes &= ~lane;
  }
  0 !== spawnedLane &&
    markSpawnedDeferredLane(root, spawnedLane, suspendedLanes);
}
function flushSyncWork$1() {
  return 0 === (executionContext & 6)
    ? (flushSyncWorkAcrossRoots_impl(0, !1), !1)
    : !0;
}
function resetWorkInProgressStack() {
  if (null !== workInProgress) {
    if (0 === workInProgressSuspendedReason)
      var interruptedWork = workInProgress.return;
    else
      (interruptedWork = workInProgress),
        (lastContextDependency = currentlyRenderingFiber$1 = null),
        resetHooksOnUnwind(interruptedWork),
        (thenableState = null),
        (thenableIndexCounter = 0),
        (interruptedWork = workInProgress);
    for (; null !== interruptedWork; )
      unwindInterruptedWork(interruptedWork.alternate, interruptedWork),
        (interruptedWork = interruptedWork.return);
    workInProgress = null;
  }
}
function prepareFreshStack(root, lanes) {
  var timeoutHandle = root.timeoutHandle;
  -1 !== timeoutHandle &&
    ((root.timeoutHandle = -1), cancelTimeout(timeoutHandle));
  timeoutHandle = root.cancelPendingCommit;
  null !== timeoutHandle &&
    ((root.cancelPendingCommit = null), timeoutHandle());
  resetWorkInProgressStack();
  workInProgressRoot = root;
  workInProgress = timeoutHandle = createWorkInProgress(root.current, null);
  workInProgressRootRenderLanes = lanes;
  workInProgressSuspendedReason = 0;
  workInProgressThrownValue = null;
  workInProgressRootDidSkipSuspendedSiblings = !1;
  workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root, lanes);
  workInProgressRootDidAttachPingListener = !1;
  workInProgressSuspendedRetryLanes =
    workInProgressDeferredLane =
    workInProgressRootPingedLanes =
    workInProgressRootInterleavedUpdatedLanes =
    workInProgressRootSkippedLanes =
    workInProgressRootExitStatus =
      0;
  workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors =
    null;
  workInProgressRootDidIncludeRecursiveRenderUpdate = !1;
  0 !== (lanes & 8) && (lanes |= lanes & 32);
  var allEntangledLanes = root.entangledLanes;
  if (0 !== allEntangledLanes)
    for (
      root = root.entanglements, allEntangledLanes &= lanes;
      0 < allEntangledLanes;

    ) {
      var index$2 = 31 - clz32(allEntangledLanes),
        lane = 1 << index$2;
      lanes |= root[index$2];
      allEntangledLanes &= ~lane;
    }
  entangledRenderLanes = lanes;
  finishQueueingConcurrentUpdates();
  return timeoutHandle;
}
function handleThrow(root, thrownValue) {
  currentlyRenderingFiber = null;
  ReactSharedInternals.H = ContextOnlyDispatcher;
  thrownValue === SuspenseException || thrownValue === SuspenseActionException
    ? ((thrownValue = getSuspendedThenable()),
      (workInProgressSuspendedReason = 3))
    : thrownValue === SuspenseyCommitException
      ? ((thrownValue = getSuspendedThenable()),
        (workInProgressSuspendedReason = 4))
      : (workInProgressSuspendedReason =
          thrownValue === SelectiveHydrationException
            ? 8
            : null !== thrownValue &&
                "object" === typeof thrownValue &&
                "function" === typeof thrownValue.then
              ? 6
              : 1);
  workInProgressThrownValue = thrownValue;
  null === workInProgress &&
    ((workInProgressRootExitStatus = 1),
    logUncaughtError(
      root,
      createCapturedValueAtFiber(thrownValue, root.current)
    ));
}
function pushDispatcher() {
  var prevDispatcher = ReactSharedInternals.H;
  ReactSharedInternals.H = ContextOnlyDispatcher;
  return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
}
function pushAsyncDispatcher() {
  var prevAsyncDispatcher = ReactSharedInternals.A;
  ReactSharedInternals.A = DefaultAsyncDispatcher;
  return prevAsyncDispatcher;
}
function renderDidSuspendDelayIfPossible() {
  workInProgressRootExitStatus = 4;
  workInProgressRootDidSkipSuspendedSiblings ||
    ((workInProgressRootRenderLanes & 4194048) !==
      workInProgressRootRenderLanes &&
      null !== suspenseHandlerStackCursor.current) ||
    (workInProgressRootIsPrerendering = !0);
  (0 === (workInProgressRootSkippedLanes & 134217727) &&
    0 === (workInProgressRootInterleavedUpdatedLanes & 134217727)) ||
    null === workInProgressRoot ||
    markRootSuspended(
      workInProgressRoot,
      workInProgressRootRenderLanes,
      workInProgressDeferredLane,
      !1
    );
}
function renderRootSync(root, lanes, shouldYieldForPrerendering) {
  var prevExecutionContext = executionContext;
  executionContext |= 2;
  var prevDispatcher = pushDispatcher(),
    prevAsyncDispatcher = pushAsyncDispatcher();
  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes)
    (workInProgressTransitions = null), prepareFreshStack(root, lanes);
  lanes = !1;
  var exitStatus = workInProgressRootExitStatus;
  a: do
    try {
      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
        var unitOfWork = workInProgress,
          thrownValue = workInProgressThrownValue;
        switch (workInProgressSuspendedReason) {
          case 8:
            resetWorkInProgressStack();
            exitStatus = 6;
            break a;
          case 3:
          case 2:
          case 9:
          case 6:
            null === suspenseHandlerStackCursor.current && (lanes = !0);
            var reason = workInProgressSuspendedReason;
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
            if (
              shouldYieldForPrerendering &&
              workInProgressRootIsPrerendering
            ) {
              exitStatus = 0;
              break a;
            }
            break;
          default:
            (reason = workInProgressSuspendedReason),
              (workInProgressSuspendedReason = 0),
              (workInProgressThrownValue = null),
              throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
        }
      }
      workLoopSync();
      exitStatus = workInProgressRootExitStatus;
      break;
    } catch (thrownValue$167) {
      handleThrow(root, thrownValue$167);
    }
  while (1);
  lanes && root.shellSuspendCounter++;
  lastContextDependency = currentlyRenderingFiber$1 = null;
  executionContext = prevExecutionContext;
  ReactSharedInternals.H = prevDispatcher;
  ReactSharedInternals.A = prevAsyncDispatcher;
  null === workInProgress &&
    ((workInProgressRoot = null),
    (workInProgressRootRenderLanes = 0),
    finishQueueingConcurrentUpdates());
  return exitStatus;
}
function workLoopSync() {
  for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
}
function renderRootConcurrent(root, lanes) {
  var prevExecutionContext = executionContext;
  executionContext |= 2;
  var prevDispatcher = pushDispatcher(),
    prevAsyncDispatcher = pushAsyncDispatcher();
  workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes
    ? ((workInProgressTransitions = null),
      (workInProgressRootRenderTargetTime = now() + 500),
      prepareFreshStack(root, lanes))
    : (workInProgressRootIsPrerendering = checkIfRootIsPrerendering(
        root,
        lanes
      ));
  a: do
    try {
      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
        lanes = workInProgress;
        var thrownValue = workInProgressThrownValue;
        b: switch (workInProgressSuspendedReason) {
          case 1:
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, lanes, thrownValue, 1);
            break;
          case 2:
          case 9:
            if (isThenableResolved(thrownValue)) {
              workInProgressSuspendedReason = 0;
              workInProgressThrownValue = null;
              replaySuspendedUnitOfWork(lanes);
              break;
            }
            lanes = function () {
              (2 !== workInProgressSuspendedReason &&
                9 !== workInProgressSuspendedReason) ||
                workInProgressRoot !== root ||
                (workInProgressSuspendedReason = 7);
              ensureRootIsScheduled(root);
            };
            thrownValue.then(lanes, lanes);
            break a;
          case 3:
            workInProgressSuspendedReason = 7;
            break a;
          case 4:
            workInProgressSuspendedReason = 5;
            break a;
          case 7:
            isThenableResolved(thrownValue)
              ? ((workInProgressSuspendedReason = 0),
                (workInProgressThrownValue = null),
                replaySuspendedUnitOfWork(lanes))
              : ((workInProgressSuspendedReason = 0),
                (workInProgressThrownValue = null),
                throwAndUnwindWorkLoop(root, lanes, thrownValue, 7));
            break;
          case 5:
            var resource = null;
            switch (workInProgress.tag) {
              case 26:
                resource = workInProgress.memoizedState;
              case 5:
              case 27:
                var hostFiber = workInProgress;
                if (resource ? preloadResource(resource) : 1) {
                  workInProgressSuspendedReason = 0;
                  workInProgressThrownValue = null;
                  var sibling = hostFiber.sibling;
                  if (null !== sibling) workInProgress = sibling;
                  else {
                    var returnFiber = hostFiber.return;
                    null !== returnFiber
                      ? ((workInProgress = returnFiber),
                        completeUnitOfWork(returnFiber))
                      : (workInProgress = null);
                  }
                  break b;
                }
            }
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, lanes, thrownValue, 5);
            break;
          case 6:
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, lanes, thrownValue, 6);
            break;
          case 8:
            resetWorkInProgressStack();
            workInProgressRootExitStatus = 6;
            break a;
          default:
            throw Error(formatProdErrorMessage(462));
        }
      }
      workLoopConcurrentByScheduler();
      break;
    } catch (thrownValue$169) {
      handleThrow(root, thrownValue$169);
    }
  while (1);
  lastContextDependency = currentlyRenderingFiber$1 = null;
  ReactSharedInternals.H = prevDispatcher;
  ReactSharedInternals.A = prevAsyncDispatcher;
  executionContext = prevExecutionContext;
  if (null !== workInProgress) return 0;
  workInProgressRoot = null;
  workInProgressRootRenderLanes = 0;
  finishQueueingConcurrentUpdates();
  return workInProgressRootExitStatus;
}
function workLoopConcurrentByScheduler() {
  for (; null !== workInProgress && !shouldYield(); )
    performUnitOfWork(workInProgress);
}
function performUnitOfWork(unitOfWork) {
  var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
}
function replaySuspendedUnitOfWork(unitOfWork) {
  var next = unitOfWork;
  var current = next.alternate;
  switch (next.tag) {
    case 15:
    case 0:
      next = replayFunctionComponent(
        current,
        next,
        next.pendingProps,
        next.type,
        void 0,
        workInProgressRootRenderLanes
      );
      break;
    case 11:
      next = replayFunctionComponent(
        current,
        next,
        next.pendingProps,
        next.type.render,
        next.ref,
        workInProgressRootRenderLanes
      );
      break;
    case 5:
      resetHooksOnUnwind(next);
    default:
      unwindInterruptedWork(current, next),
        (next = workInProgress =
          resetWorkInProgress(next, entangledRenderLanes)),
        (next = beginWork(current, next, entangledRenderLanes));
  }
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
}
function throwAndUnwindWorkLoop(
  root,
  unitOfWork,
  thrownValue,
  suspendedReason
) {
  lastContextDependency = currentlyRenderingFiber$1 = null;
  resetHooksOnUnwind(unitOfWork);
  thenableState = null;
  thenableIndexCounter = 0;
  var returnFiber = unitOfWork.return;
  try {
    if (
      throwException(
        root,
        returnFiber,
        unitOfWork,
        thrownValue,
        workInProgressRootRenderLanes
      )
    ) {
      workInProgressRootExitStatus = 1;
      logUncaughtError(
        root,
        createCapturedValueAtFiber(thrownValue, root.current)
      );
      workInProgress = null;
      return;
    }
  } catch (error) {
    if (null !== returnFiber) throw ((workInProgress = returnFiber), error);
    workInProgressRootExitStatus = 1;
    logUncaughtError(
      root,
      createCapturedValueAtFiber(thrownValue, root.current)
    );
    workInProgress = null;
    return;
  }
  if (unitOfWork.flags & 32768) {
    if (isHydrating || 1 === suspendedReason) root = !0;
    else if (
      workInProgressRootIsPrerendering ||
      0 !== (workInProgressRootRenderLanes & 536870912)
    )
      root = !1;
    else if (
      ((workInProgressRootDidSkipSuspendedSiblings = root = !0),
      2 === suspendedReason ||
        9 === suspendedReason ||
        3 === suspendedReason ||
        6 === suspendedReason)
    )
      (suspendedReason = suspenseHandlerStackCursor.current),
        null !== suspendedReason &&
          13 === suspendedReason.tag &&
          (suspendedReason.flags |= 16384);
    unwindUnitOfWork(unitOfWork, root);
  } else completeUnitOfWork(unitOfWork);
}
function completeUnitOfWork(unitOfWork) {
  var completedWork = unitOfWork;
  do {
    if (0 !== (completedWork.flags & 32768)) {
      unwindUnitOfWork(
        completedWork,
        workInProgressRootDidSkipSuspendedSiblings
      );
      return;
    }
    unitOfWork = completedWork.return;
    var next = completeWork(
      completedWork.alternate,
      completedWork,
      entangledRenderLanes
    );
    if (null !== next) {
      workInProgress = next;
      return;
    }
    completedWork = completedWork.sibling;
    if (null !== completedWork) {
      workInProgress = completedWork;
      return;
    }
    workInProgress = completedWork = unitOfWork;
  } while (null !== completedWork);
  0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
}
function unwindUnitOfWork(unitOfWork, skipSiblings) {
  do {
    var next = unwindWork(unitOfWork.alternate, unitOfWork);
    if (null !== next) {
      next.flags &= 32767;
      workInProgress = next;
      return;
    }
    next = unitOfWork.return;
    null !== next &&
      ((next.flags |= 32768), (next.subtreeFlags = 0), (next.deletions = null));
    if (
      !skipSiblings &&
      ((unitOfWork = unitOfWork.sibling), null !== unitOfWork)
    ) {
      workInProgress = unitOfWork;
      return;
    }
    workInProgress = unitOfWork = next;
  } while (null !== unitOfWork);
  workInProgressRootExitStatus = 6;
  workInProgress = null;
}
function commitRoot(
  root,
  finishedWork,
  lanes,
  recoverableErrors,
  transitions,
  didIncludeRenderPhaseUpdate,
  spawnedLane,
  updatedLanes,
  suspendedRetryLanes
) {
  root.cancelPendingCommit = null;
  do flushPendingEffects();
  while (0 !== pendingEffectsStatus);
  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
  if (null !== finishedWork) {
    if (finishedWork === root.current) throw Error(formatProdErrorMessage(177));
    didIncludeRenderPhaseUpdate = finishedWork.lanes | finishedWork.childLanes;
    didIncludeRenderPhaseUpdate |= concurrentlyUpdatedLanes;
    markRootFinished(
      root,
      lanes,
      didIncludeRenderPhaseUpdate,
      spawnedLane,
      updatedLanes,
      suspendedRetryLanes
    );
    root === workInProgressRoot &&
      ((workInProgress = workInProgressRoot = null),
      (workInProgressRootRenderLanes = 0));
    pendingFinishedWork = finishedWork;
    pendingEffectsRoot = root;
    pendingEffectsLanes = lanes;
    pendingEffectsRemainingLanes = didIncludeRenderPhaseUpdate;
    pendingPassiveTransitions = transitions;
    pendingRecoverableErrors = recoverableErrors;
    0 !== (finishedWork.subtreeFlags & 10256) ||
    0 !== (finishedWork.flags & 10256)
      ? ((root.callbackNode = null),
        (root.callbackPriority = 0),
        scheduleCallback$1(NormalPriority$1, function () {
          flushPassiveEffects(!0);
          return null;
        }))
      : ((root.callbackNode = null), (root.callbackPriority = 0));
    recoverableErrors = 0 !== (finishedWork.flags & 13878);
    if (0 !== (finishedWork.subtreeFlags & 13878) || recoverableErrors) {
      recoverableErrors = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      transitions = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 2;
      spawnedLane = executionContext;
      executionContext |= 4;
      try {
        commitBeforeMutationEffects(root, finishedWork, lanes);
      } finally {
        (executionContext = spawnedLane),
          (ReactDOMSharedInternals.p = transitions),
          (ReactSharedInternals.T = recoverableErrors);
      }
    }
    pendingEffectsStatus = 1;
    flushMutationEffects();
    flushLayoutEffects();
    flushSpawnedWork();
  }
}
function flushMutationEffects() {
  if (1 === pendingEffectsStatus) {
    pendingEffectsStatus = 0;
    var root = pendingEffectsRoot,
      finishedWork = pendingFinishedWork,
      rootMutationHasEffect = 0 !== (finishedWork.flags & 13878);
    if (0 !== (finishedWork.subtreeFlags & 13878) || rootMutationHasEffect) {
      rootMutationHasEffect = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 2;
      var prevExecutionContext = executionContext;
      executionContext |= 4;
      try {
        commitMutationEffectsOnFiber(finishedWork, root);
        var priorSelectionInformation = selectionInformation,
          curFocusedElem = getActiveElementDeep(root.containerInfo),
          priorFocusedElem = priorSelectionInformation.focusedElem,
          priorSelectionRange = priorSelectionInformation.selectionRange;
        if (
          curFocusedElem !== priorFocusedElem &&
          priorFocusedElem &&
          priorFocusedElem.ownerDocument &&
          containsNode(
            priorFocusedElem.ownerDocument.documentElement,
            priorFocusedElem
          )
        ) {
          if (
            null !== priorSelectionRange &&
            hasSelectionCapabilities(priorFocusedElem)
          ) {
            var start = priorSelectionRange.start,
              end = priorSelectionRange.end;
            void 0 === end && (end = start);
            if ("selectionStart" in priorFocusedElem)
              (priorFocusedElem.selectionStart = start),
                (priorFocusedElem.selectionEnd = Math.min(
                  end,
                  priorFocusedElem.value.length
                ));
            else {
              var doc = priorFocusedElem.ownerDocument || document,
                win = (doc && doc.defaultView) || window;
              if (win.getSelection) {
                var selection = win.getSelection(),
                  length = priorFocusedElem.textContent.length,
                  start$jscomp$0 = Math.min(priorSelectionRange.start, length),
                  end$jscomp$0 =
                    void 0 === priorSelectionRange.end
                      ? start$jscomp$0
                      : Math.min(priorSelectionRange.end, length);
                !selection.extend &&
                  start$jscomp$0 > end$jscomp$0 &&
                  ((curFocusedElem = end$jscomp$0),
                  (end$jscomp$0 = start$jscomp$0),
                  (start$jscomp$0 = curFocusedElem));
                var startMarker = getNodeForCharacterOffset(
                    priorFocusedElem,
                    start$jscomp$0
                  ),
                  endMarker = getNodeForCharacterOffset(
                    priorFocusedElem,
                    end$jscomp$0
                  );
                if (
                  startMarker &&
                  endMarker &&
                  (1 !== selection.rangeCount ||
                    selection.anchorNode !== startMarker.node ||
                    selection.anchorOffset !== startMarker.offset ||
                    selection.focusNode !== endMarker.node ||
                    selection.focusOffset !== endMarker.offset)
                ) {
                  var range = doc.createRange();
                  range.setStart(startMarker.node, startMarker.offset);
                  selection.removeAllRanges();
                  start$jscomp$0 > end$jscomp$0
                    ? (selection.addRange(range),
                      selection.extend(endMarker.node, endMarker.offset))
                    : (range.setEnd(endMarker.node, endMarker.offset),
                      selection.addRange(range));
                }
              }
            }
          }
          doc = [];
          for (
            selection = priorFocusedElem;
            (selection = selection.parentNode);

          )
            1 === selection.nodeType &&
              doc.push({
                element: selection,
                left: selection.scrollLeft,
                top: selection.scrollTop
              });
          "function" === typeof priorFocusedElem.focus &&
            priorFocusedElem.focus();
          for (
            priorFocusedElem = 0;
            priorFocusedElem < doc.length;
            priorFocusedElem++
          ) {
            var info = doc[priorFocusedElem];
            info.element.scrollLeft = info.left;
            info.element.scrollTop = info.top;
          }
        }
        _enabled = !!eventsEnabled;
        selectionInformation = eventsEnabled = null;
      } finally {
        (executionContext = prevExecutionContext),
          (ReactDOMSharedInternals.p = previousPriority),
          (ReactSharedInternals.T = rootMutationHasEffect);
      }
    }
    root.current = finishedWork;
    pendingEffectsStatus = 2;
  }
}
function flushLayoutEffects() {
  if (2 === pendingEffectsStatus) {
    pendingEffectsStatus = 0;
    var root = pendingEffectsRoot,
      finishedWork = pendingFinishedWork,
      rootHasLayoutEffect = 0 !== (finishedWork.flags & 8772);
    if (0 !== (finishedWork.subtreeFlags & 8772) || rootHasLayoutEffect) {
      rootHasLayoutEffect = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 2;
      var prevExecutionContext = executionContext;
      executionContext |= 4;
      try {
        commitLayoutEffectOnFiber(root, finishedWork.alternate, finishedWork);
      } finally {
        (executionContext = prevExecutionContext),
          (ReactDOMSharedInternals.p = previousPriority),
          (ReactSharedInternals.T = rootHasLayoutEffect);
      }
    }
    pendingEffectsStatus = 3;
  }
}
function flushSpawnedWork() {
  if (4 === pendingEffectsStatus || 3 === pendingEffectsStatus) {
    pendingEffectsStatus = 0;
    requestPaint();
    var root = pendingEffectsRoot,
      finishedWork = pendingFinishedWork,
      lanes = pendingEffectsLanes,
      recoverableErrors = pendingRecoverableErrors;
    0 !== (finishedWork.subtreeFlags & 10256) ||
    0 !== (finishedWork.flags & 10256)
      ? (pendingEffectsStatus = 5)
      : ((pendingEffectsStatus = 0),
        (pendingFinishedWork = pendingEffectsRoot = null),
        releaseRootPooledCache(root, root.pendingLanes));
    var remainingLanes = root.pendingLanes;
    0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
    lanesToEventPriority(lanes);
    finishedWork = finishedWork.stateNode;
    if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
      try {
        injectedHook.onCommitFiberRoot(
          rendererID,
          finishedWork,
          void 0,
          128 === (finishedWork.current.flags & 128)
        );
      } catch (err) {}
    if (null !== recoverableErrors) {
      finishedWork = ReactSharedInternals.T;
      remainingLanes = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 2;
      ReactSharedInternals.T = null;
      try {
        for (
          var onRecoverableError = root.onRecoverableError, i = 0;
          i < recoverableErrors.length;
          i++
        ) {
          var recoverableError = recoverableErrors[i];
          onRecoverableError(recoverableError.value, {
            componentStack: recoverableError.stack
          });
        }
      } finally {
        (ReactSharedInternals.T = finishedWork),
          (ReactDOMSharedInternals.p = remainingLanes);
      }
    }
    0 !== (pendingEffectsLanes & 3) && flushPendingEffects();
    ensureRootIsScheduled(root);
    remainingLanes = root.pendingLanes;
    0 !== (lanes & 4194090) && 0 !== (remainingLanes & 42)
      ? root === rootWithNestedUpdates
        ? nestedUpdateCount++
        : ((nestedUpdateCount = 0), (rootWithNestedUpdates = root))
      : (nestedUpdateCount = 0);
    flushSyncWorkAcrossRoots_impl(0, !1);
  }
}
function releaseRootPooledCache(root, remainingLanes) {
  0 === (root.pooledCacheLanes &= remainingLanes) &&
    ((remainingLanes = root.pooledCache),
    null != remainingLanes &&
      ((root.pooledCache = null), releaseCache(remainingLanes)));
}
function flushPendingEffects(wasDelayedCommit) {
  flushMutationEffects();
  flushLayoutEffects();
  flushSpawnedWork();
  return flushPassiveEffects(wasDelayedCommit);
}
function flushPassiveEffects() {
  if (5 !== pendingEffectsStatus) return !1;
  var root = pendingEffectsRoot,
    remainingLanes = pendingEffectsRemainingLanes;
  pendingEffectsRemainingLanes = 0;
  var renderPriority = lanesToEventPriority(pendingEffectsLanes),
    prevTransition = ReactSharedInternals.T,
    previousPriority = ReactDOMSharedInternals.p;
  try {
    ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
    ReactSharedInternals.T = null;
    renderPriority = pendingPassiveTransitions;
    pendingPassiveTransitions = null;
    var root$jscomp$0 = pendingEffectsRoot,
      lanes = pendingEffectsLanes;
    pendingEffectsStatus = 0;
    pendingFinishedWork = pendingEffectsRoot = null;
    pendingEffectsLanes = 0;
    if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
    var prevExecutionContext = executionContext;
    executionContext |= 4;
    commitPassiveUnmountOnFiber(root$jscomp$0.current);
    commitPassiveMountOnFiber(
      root$jscomp$0,
      root$jscomp$0.current,
      lanes,
      renderPriority
    );
    executionContext = prevExecutionContext;
    flushSyncWorkAcrossRoots_impl(0, !1);
    if (
      injectedHook &&
      "function" === typeof injectedHook.onPostCommitFiberRoot
    )
      try {
        injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
      } catch (err) {}
    return !0;
  } finally {
    (ReactDOMSharedInternals.p = previousPriority),
      (ReactSharedInternals.T = prevTransition),
      releaseRootPooledCache(root, remainingLanes);
  }
}
function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
  sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
  sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
  rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
  null !== rootFiber &&
    (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
}
function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
  if (3 === sourceFiber.tag)
    captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
  else
    for (; null !== nearestMountedAncestor; ) {
      if (3 === nearestMountedAncestor.tag) {
        captureCommitPhaseErrorOnRoot(
          nearestMountedAncestor,
          sourceFiber,
          error
        );
        break;
      } else if (1 === nearestMountedAncestor.tag) {
        var instance = nearestMountedAncestor.stateNode;
        if (
          "function" ===
            typeof nearestMountedAncestor.type.getDerivedStateFromError ||
          ("function" === typeof instance.componentDidCatch &&
            (null === legacyErrorBoundariesThatAlreadyFailed ||
              !legacyErrorBoundariesThatAlreadyFailed.has(instance)))
        ) {
          sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
          error = createClassErrorUpdate(2);
          instance = enqueueUpdate(nearestMountedAncestor, error, 2);
          null !== instance &&
            (initializeClassErrorUpdate(
              error,
              instance,
              nearestMountedAncestor,
              sourceFiber
            ),
            markRootUpdated$1(instance, 2),
            ensureRootIsScheduled(instance));
          break;
        }
      }
      nearestMountedAncestor = nearestMountedAncestor.return;
    }
}
function attachPingListener(root, wakeable, lanes) {
  var pingCache = root.pingCache;
  if (null === pingCache) {
    pingCache = root.pingCache = new PossiblyWeakMap();
    var threadIDs = new Set();
    pingCache.set(wakeable, threadIDs);
  } else
    (threadIDs = pingCache.get(wakeable)),
      void 0 === threadIDs &&
        ((threadIDs = new Set()), pingCache.set(wakeable, threadIDs));
  threadIDs.has(lanes) ||
    ((workInProgressRootDidAttachPingListener = !0),
    threadIDs.add(lanes),
    (root = pingSuspendedRoot.bind(null, root, wakeable, lanes)),
    wakeable.then(root, root));
}
function pingSuspendedRoot(root, wakeable, pingedLanes) {
  var pingCache = root.pingCache;
  null !== pingCache && pingCache.delete(wakeable);
  root.pingedLanes |= root.suspendedLanes & pingedLanes;
  root.warmLanes &= ~pingedLanes;
  workInProgressRoot === root &&
    (workInProgressRootRenderLanes & pingedLanes) === pingedLanes &&
    (4 === workInProgressRootExitStatus ||
    (3 === workInProgressRootExitStatus &&
      (workInProgressRootRenderLanes & 62914560) ===
        workInProgressRootRenderLanes &&
      300 > now() - globalMostRecentFallbackTime)
      ? 0 === (executionContext & 2) && prepareFreshStack(root, 0)
      : (workInProgressRootPingedLanes |= pingedLanes),
    workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes &&
      (workInProgressSuspendedRetryLanes = 0));
  ensureRootIsScheduled(root);
}
function retryTimedOutBoundary(boundaryFiber, retryLane) {
  0 === retryLane && (retryLane = claimNextRetryLane());
  boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
  null !== boundaryFiber &&
    (markRootUpdated$1(boundaryFiber, retryLane),
    ensureRootIsScheduled(boundaryFiber));
}
function retryDehydratedSuspenseBoundary(boundaryFiber) {
  var suspenseState = boundaryFiber.memoizedState,
    retryLane = 0;
  null !== suspenseState && (retryLane = suspenseState.retryLane);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
function resolveRetryWakeable(boundaryFiber, wakeable) {
  var retryLane = 0;
  switch (boundaryFiber.tag) {
    case 13:
      var retryCache = boundaryFiber.stateNode;
      var suspenseState = boundaryFiber.memoizedState;
      null !== suspenseState && (retryLane = suspenseState.retryLane);
      break;
    case 19:
      retryCache = boundaryFiber.stateNode;
      break;
    case 22:
      retryCache = boundaryFiber.stateNode._retryCache;
      break;
    default:
      throw Error(formatProdErrorMessage(314));
  }
  null !== retryCache && retryCache.delete(wakeable);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
function scheduleCallback$1(priorityLevel, callback) {
  return scheduleCallback$3(priorityLevel, callback);
}
var firstScheduledRoot = null,
  lastScheduledRoot = null,
  didScheduleMicrotask = !1,
  mightHavePendingSyncWork = !1,
  isFlushingWork = !1,
  currentEventTransitionLane = 0;
function ensureRootIsScheduled(root) {
  root !== lastScheduledRoot &&
    null === root.next &&
    (null === lastScheduledRoot
      ? (firstScheduledRoot = lastScheduledRoot = root)
      : (lastScheduledRoot = lastScheduledRoot.next = root));
  mightHavePendingSyncWork = !0;
  didScheduleMicrotask ||
    ((didScheduleMicrotask = !0), scheduleImmediateRootScheduleTask());
}
function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
  if (!isFlushingWork && mightHavePendingSyncWork) {
    isFlushingWork = !0;
    do {
      var didPerformSomeWork = !1;
      for (var root$174 = firstScheduledRoot; null !== root$174; ) {
        if (!onlyLegacy)
          if (0 !== syncTransitionLanes) {
            var pendingLanes = root$174.pendingLanes;
            if (0 === pendingLanes) var JSCompiler_inline_result = 0;
            else {
              var suspendedLanes = root$174.suspendedLanes,
                pingedLanes = root$174.pingedLanes;
              JSCompiler_inline_result =
                (1 << (31 - clz32(42 | syncTransitionLanes) + 1)) - 1;
              JSCompiler_inline_result &=
                pendingLanes & ~(suspendedLanes & ~pingedLanes);
              JSCompiler_inline_result =
                JSCompiler_inline_result & 201326741
                  ? (JSCompiler_inline_result & 201326741) | 1
                  : JSCompiler_inline_result
                    ? JSCompiler_inline_result | 2
                    : 0;
            }
            0 !== JSCompiler_inline_result &&
              ((didPerformSomeWork = !0),
              performSyncWorkOnRoot(root$174, JSCompiler_inline_result));
          } else
            (JSCompiler_inline_result = workInProgressRootRenderLanes),
              (JSCompiler_inline_result = getNextLanes(
                root$174,
                root$174 === workInProgressRoot ? JSCompiler_inline_result : 0,
                null !== root$174.cancelPendingCommit ||
                  -1 !== root$174.timeoutHandle
              )),
              0 === (JSCompiler_inline_result & 3) ||
                checkIfRootIsPrerendering(root$174, JSCompiler_inline_result) ||
                ((didPerformSomeWork = !0),
                performSyncWorkOnRoot(root$174, JSCompiler_inline_result));
        root$174 = root$174.next;
      }
    } while (didPerformSomeWork);
    isFlushingWork = !1;
  }
}
function processRootScheduleInImmediateTask() {
  processRootScheduleInMicrotask();
}
function processRootScheduleInMicrotask() {
  mightHavePendingSyncWork = didScheduleMicrotask = !1;
  var syncTransitionLanes = 0;
  0 !== currentEventTransitionLane &&
    (shouldAttemptEagerTransition() &&
      (syncTransitionLanes = currentEventTransitionLane),
    (currentEventTransitionLane = 0));
  for (
    var currentTime = now(), prev = null, root = firstScheduledRoot;
    null !== root;

  ) {
    var next = root.next,
      nextLanes = scheduleTaskForRootDuringMicrotask(root, currentTime);
    if (0 === nextLanes)
      (root.next = null),
        null === prev ? (firstScheduledRoot = next) : (prev.next = next),
        null === next && (lastScheduledRoot = prev);
    else if (
      ((prev = root), 0 !== syncTransitionLanes || 0 !== (nextLanes & 3))
    )
      mightHavePendingSyncWork = !0;
    root = next;
  }
  flushSyncWorkAcrossRoots_impl(syncTransitionLanes, !1);
}
function scheduleTaskForRootDuringMicrotask(root, currentTime) {
  for (
    var suspendedLanes = root.suspendedLanes,
      pingedLanes = root.pingedLanes,
      expirationTimes = root.expirationTimes,
      lanes = root.pendingLanes & -62914561;
    0 < lanes;

  ) {
    var index$3 = 31 - clz32(lanes),
      lane = 1 << index$3,
      expirationTime = expirationTimes[index$3];
    if (-1 === expirationTime) {
      if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
        expirationTimes[index$3] = computeExpirationTime(lane, currentTime);
    } else expirationTime <= currentTime && (root.expiredLanes |= lane);
    lanes &= ~lane;
  }
  currentTime = workInProgressRoot;
  suspendedLanes = workInProgressRootRenderLanes;
  suspendedLanes = getNextLanes(
    root,
    root === currentTime ? suspendedLanes : 0,
    null !== root.cancelPendingCommit || -1 !== root.timeoutHandle
  );
  pingedLanes = root.callbackNode;
  if (
    0 === suspendedLanes ||
    (root === currentTime &&
      (2 === workInProgressSuspendedReason ||
        9 === workInProgressSuspendedReason)) ||
    null !== root.cancelPendingCommit
  )
    return (
      null !== pingedLanes &&
        null !== pingedLanes &&
        cancelCallback$1(pingedLanes),
      (root.callbackNode = null),
      (root.callbackPriority = 0)
    );
  if (
    0 === (suspendedLanes & 3) ||
    checkIfRootIsPrerendering(root, suspendedLanes)
  ) {
    currentTime = suspendedLanes & -suspendedLanes;
    if (currentTime === root.callbackPriority) return currentTime;
    null !== pingedLanes && cancelCallback$1(pingedLanes);
    switch (lanesToEventPriority(suspendedLanes)) {
      case 2:
      case 8:
        suspendedLanes = UserBlockingPriority;
        break;
      case 32:
        suspendedLanes = NormalPriority$1;
        break;
      case 268435456:
        suspendedLanes = IdlePriority;
        break;
      default:
        suspendedLanes = NormalPriority$1;
    }
    pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root);
    suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
    root.callbackPriority = currentTime;
    root.callbackNode = suspendedLanes;
    return currentTime;
  }
  null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
  root.callbackPriority = 2;
  root.callbackNode = null;
  return 2;
}
function performWorkOnRootViaSchedulerTask(root, didTimeout) {
  if (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus)
    return (root.callbackNode = null), (root.callbackPriority = 0), null;
  var originalCallbackNode = root.callbackNode;
  if (flushPendingEffects(!0) && root.callbackNode !== originalCallbackNode)
    return null;
  var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
  workInProgressRootRenderLanes$jscomp$0 = getNextLanes(
    root,
    root === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0,
    null !== root.cancelPendingCommit || -1 !== root.timeoutHandle
  );
  if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
  performWorkOnRoot(root, workInProgressRootRenderLanes$jscomp$0, didTimeout);
  scheduleTaskForRootDuringMicrotask(root, now());
  return null != root.callbackNode && root.callbackNode === originalCallbackNode
    ? performWorkOnRootViaSchedulerTask.bind(null, root)
    : null;
}
function performSyncWorkOnRoot(root, lanes) {
  if (flushPendingEffects()) return null;
  performWorkOnRoot(root, lanes, !0);
}
function scheduleImmediateRootScheduleTask() {
  scheduleMicrotask(function () {
    0 !== (executionContext & 6)
      ? scheduleCallback$3(
          ImmediatePriority,
          processRootScheduleInImmediateTask
        )
      : processRootScheduleInMicrotask();
  });
}
function requestTransitionLane() {
  0 === currentEventTransitionLane &&
    (currentEventTransitionLane = claimNextTransitionLane());
  return currentEventTransitionLane;
}
function coerceFormActionProp(actionProp) {
  return null == actionProp ||
    "symbol" === typeof actionProp ||
    "boolean" === typeof actionProp
    ? null
    : "function" === typeof actionProp
      ? actionProp
      : sanitizeURL("" + actionProp);
}
function createFormDataWithSubmitter(form, submitter) {
  var temp = submitter.ownerDocument.createElement("input");
  temp.name = submitter.name;
  temp.value = submitter.value;
  form.id && temp.setAttribute("form", form.id);
  submitter.parentNode.insertBefore(temp, submitter);
  form = new FormData(form);
  temp.parentNode.removeChild(temp);
  return form;
}
function extractEvents$1(
  dispatchQueue,
  domEventName,
  maybeTargetInst,
  nativeEvent,
  nativeEventTarget
) {
  if (
    "submit" === domEventName &&
    maybeTargetInst &&
    maybeTargetInst.stateNode === nativeEventTarget
  ) {
    var action = coerceFormActionProp(
        (nativeEventTarget[internalPropsKey] || null).action
      ),
      submitter = nativeEvent.submitter;
    submitter &&
      ((domEventName = (domEventName = submitter[internalPropsKey] || null)
        ? coerceFormActionProp(domEventName.formAction)
        : submitter.getAttribute("formAction")),
      null !== domEventName && ((action = domEventName), (submitter = null)));
    var event = new SyntheticEvent(
      "action",
      "action",
      null,
      nativeEvent,
      nativeEventTarget
    );
    dispatchQueue.push({
      event: event,
      listeners: [
        {
          instance: null,
          listener: function () {
            if (nativeEvent.defaultPrevented) {
              if (0 !== currentEventTransitionLane) {
                var formData = submitter
                  ? createFormDataWithSubmitter(nativeEventTarget, submitter)
                  : new FormData(nativeEventTarget);
                startHostTransition(
                  maybeTargetInst,
                  {
                    pending: !0,
                    data: formData,
                    method: nativeEventTarget.method,
                    action: action
                  },
                  null,
                  formData
                );
              }
            } else
              "function" === typeof action &&
                (event.preventDefault(),
                (formData = submitter
                  ? createFormDataWithSubmitter(nativeEventTarget, submitter)
                  : new FormData(nativeEventTarget)),
                startHostTransition(
                  maybeTargetInst,
                  {
                    pending: !0,
                    data: formData,
                    method: nativeEventTarget.method,
                    action: action
                  },
                  action,
                  formData
                ));
          },
          currentTarget: nativeEventTarget
        }
      ]
    });
  }
}
for (
  var i$jscomp$inline_1528 = 0;
  i$jscomp$inline_1528 < simpleEventPluginEvents.length;
  i$jscomp$inline_1528++
) {
  var eventName$jscomp$inline_1529 =
      simpleEventPluginEvents[i$jscomp$inline_1528],
    domEventName$jscomp$inline_1530 =
      eventName$jscomp$inline_1529.toLowerCase(),
    capitalizedEvent$jscomp$inline_1531 =
      eventName$jscomp$inline_1529[0].toUpperCase() +
      eventName$jscomp$inline_1529.slice(1);
  registerSimpleEvent(
    domEventName$jscomp$inline_1530,
    "on" + capitalizedEvent$jscomp$inline_1531
  );
}
registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
registerSimpleEvent(ANIMATION_START, "onAnimationStart");
registerSimpleEvent("dblclick", "onDoubleClick");
registerSimpleEvent("focusin", "onFocus");
registerSimpleEvent("focusout", "onBlur");
registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
registerSimpleEvent(TRANSITION_START, "onTransitionStart");
registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
registerTwoPhaseEvent(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
registerTwoPhaseEvent(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
registerTwoPhaseEvent("onBeforeInput", [
  "compositionend",
  "keypress",
  "textInput",
  "paste"
]);
registerTwoPhaseEvent(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
registerTwoPhaseEvent(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
registerTwoPhaseEvent(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var mediaEventTypes =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  nonDelegatedEvents = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle"
      .split(" ")
      .concat(mediaEventTypes)
  );
function processDispatchQueue(dispatchQueue, eventSystemFlags) {
  eventSystemFlags = 0 !== (eventSystemFlags & 4);
  for (var i = 0; i < dispatchQueue.length; i++) {
    var _dispatchQueue$i = dispatchQueue[i],
      event = _dispatchQueue$i.event;
    _dispatchQueue$i = _dispatchQueue$i.listeners;
    a: {
      var previousInstance = void 0;
      if (eventSystemFlags)
        for (
          var i$jscomp$0 = _dispatchQueue$i.length - 1;
          0 <= i$jscomp$0;
          i$jscomp$0--
        ) {
          var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0],
            instance = _dispatchListeners$i.instance,
            currentTarget = _dispatchListeners$i.currentTarget;
          _dispatchListeners$i = _dispatchListeners$i.listener;
          if (instance !== previousInstance && event.isPropagationStopped())
            break a;
          previousInstance = _dispatchListeners$i;
          event.currentTarget = currentTarget;
          try {
            previousInstance(event);
          } catch (error) {
            reportGlobalError(error);
          }
          event.currentTarget = null;
          previousInstance = instance;
        }
      else
        for (
          i$jscomp$0 = 0;
          i$jscomp$0 < _dispatchQueue$i.length;
          i$jscomp$0++
        ) {
          _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
          instance = _dispatchListeners$i.instance;
          currentTarget = _dispatchListeners$i.currentTarget;
          _dispatchListeners$i = _dispatchListeners$i.listener;
          if (instance !== previousInstance && event.isPropagationStopped())
            break a;
          previousInstance = _dispatchListeners$i;
          event.currentTarget = currentTarget;
          try {
            previousInstance(event);
          } catch (error) {
            reportGlobalError(error);
          }
          event.currentTarget = null;
          previousInstance = instance;
        }
    }
  }
}
function listenToNonDelegatedEvent(domEventName, targetElement) {
  var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
  void 0 === JSCompiler_inline_result &&
    (JSCompiler_inline_result = targetElement[internalEventHandlersKey] =
      new Set());
  var listenerSetKey = domEventName + "__bubble";
  JSCompiler_inline_result.has(listenerSetKey) ||
    (addTrappedEventListener(targetElement, domEventName, 2, !1),
    JSCompiler_inline_result.add(listenerSetKey));
}
function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
  var eventSystemFlags = 0;
  isCapturePhaseListener && (eventSystemFlags |= 4);
  addTrappedEventListener(
    target,
    domEventName,
    eventSystemFlags,
    isCapturePhaseListener
  );
}
var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
function listenToAllSupportedEvents(rootContainerElement) {
  if (!rootContainerElement[listeningMarker]) {
    rootContainerElement[listeningMarker] = !0;
    allNativeEvents.forEach(function (domEventName) {
      "selectionchange" !== domEventName &&
        (nonDelegatedEvents.has(domEventName) ||
          listenToNativeEvent(domEventName, !1, rootContainerElement),
        listenToNativeEvent(domEventName, !0, rootContainerElement));
    });
    var ownerDocument =
      9 === rootContainerElement.nodeType
        ? rootContainerElement
        : rootContainerElement.ownerDocument;
    null === ownerDocument ||
      ownerDocument[listeningMarker] ||
      ((ownerDocument[listeningMarker] = !0),
      listenToNativeEvent("selectionchange", !1, ownerDocument));
  }
}
function addTrappedEventListener(
  targetContainer,
  domEventName,
  eventSystemFlags,
  isCapturePhaseListener
) {
  switch (getEventPriority(domEventName)) {
    case 2:
      var listenerWrapper = dispatchDiscreteEvent;
      break;
    case 8:
      listenerWrapper = dispatchContinuousEvent;
      break;
    default:
      listenerWrapper = dispatchEvent;
  }
  eventSystemFlags = listenerWrapper.bind(
    null,
    domEventName,
    eventSystemFlags,
    targetContainer
  );
  listenerWrapper = void 0;
  !passiveBrowserEventsSupported ||
    ("touchstart" !== domEventName &&
      "touchmove" !== domEventName &&
      "wheel" !== domEventName) ||
    (listenerWrapper = !0);
  isCapturePhaseListener
    ? void 0 !== listenerWrapper
      ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
          capture: !0,
          passive: listenerWrapper
        })
      : targetContainer.addEventListener(domEventName, eventSystemFlags, !0)
    : void 0 !== listenerWrapper
      ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
          passive: listenerWrapper
        })
      : targetContainer.addEventListener(domEventName, eventSystemFlags, !1);
}
function dispatchEventForPluginEventSystem(
  domEventName,
  eventSystemFlags,
  nativeEvent,
  targetInst$jscomp$0,
  targetContainer
) {
  var ancestorInst = targetInst$jscomp$0;
  if (
    0 === (eventSystemFlags & 1) &&
    0 === (eventSystemFlags & 2) &&
    null !== targetInst$jscomp$0
  )
    a: for (;;) {
      if (null === targetInst$jscomp$0) return;
      var nodeTag = targetInst$jscomp$0.tag;
      if (3 === nodeTag || 4 === nodeTag) {
        var container = targetInst$jscomp$0.stateNode.containerInfo;
        if (container === targetContainer) break;
        if (4 === nodeTag)
          for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
            var grandTag = nodeTag.tag;
            if (
              (3 === grandTag || 4 === grandTag) &&
              nodeTag.stateNode.containerInfo === targetContainer
            )
              return;
            nodeTag = nodeTag.return;
          }
        for (; null !== container; ) {
          nodeTag = getClosestInstanceFromNode(container);
          if (null === nodeTag) return;
          grandTag = nodeTag.tag;
          if (
            5 === grandTag ||
            6 === grandTag ||
            26 === grandTag ||
            27 === grandTag
          ) {
            targetInst$jscomp$0 = ancestorInst = nodeTag;
            continue a;
          }
          container = container.parentNode;
        }
      }
      targetInst$jscomp$0 = targetInst$jscomp$0.return;
    }
  batchedUpdates$1(function () {
    var targetInst = ancestorInst,
      nativeEventTarget = getEventTarget(nativeEvent),
      dispatchQueue = [];
    a: {
      var reactName = topLevelEventsToReactNames.get(domEventName);
      if (void 0 !== reactName) {
        var SyntheticEventCtor = SyntheticEvent,
          reactEventType = domEventName;
        switch (domEventName) {
          case "keypress":
            if (0 === getEventCharCode(nativeEvent)) break a;
          case "keydown":
          case "keyup":
            SyntheticEventCtor = SyntheticKeyboardEvent;
            break;
          case "focusin":
            reactEventType = "focus";
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "focusout":
            reactEventType = "blur";
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "beforeblur":
          case "afterblur":
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "click":
            if (2 === nativeEvent.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            SyntheticEventCtor = SyntheticMouseEvent;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            SyntheticEventCtor = SyntheticDragEvent;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            SyntheticEventCtor = SyntheticTouchEvent;
            break;
          case ANIMATION_END:
          case ANIMATION_ITERATION:
          case ANIMATION_START:
            SyntheticEventCtor = SyntheticAnimationEvent;
            break;
          case TRANSITION_END:
            SyntheticEventCtor = SyntheticTransitionEvent;
            break;
          case "scroll":
          case "scrollend":
            SyntheticEventCtor = SyntheticUIEvent;
            break;
          case "wheel":
            SyntheticEventCtor = SyntheticWheelEvent;
            break;
          case "copy":
          case "cut":
          case "paste":
            SyntheticEventCtor = SyntheticClipboardEvent;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            SyntheticEventCtor = SyntheticPointerEvent;
            break;
          case "toggle":
          case "beforetoggle":
            SyntheticEventCtor = SyntheticToggleEvent;
        }
        var inCapturePhase = 0 !== (eventSystemFlags & 4),
          accumulateTargetOnly =
            !inCapturePhase &&
            ("scroll" === domEventName || "scrollend" === domEventName),
          reactEventName = inCapturePhase
            ? null !== reactName
              ? reactName + "Capture"
              : null
            : reactName;
        inCapturePhase = [];
        for (
          var instance = targetInst, lastHostComponent;
          null !== instance;

        ) {
          var _instance = instance;
          lastHostComponent = _instance.stateNode;
          _instance = _instance.tag;
          (5 !== _instance && 26 !== _instance && 27 !== _instance) ||
            null === lastHostComponent ||
            null === reactEventName ||
            ((_instance = getListener(instance, reactEventName)),
            null != _instance &&
              inCapturePhase.push(
                createDispatchListener(instance, _instance, lastHostComponent)
              ));
          if (accumulateTargetOnly) break;
          instance = instance.return;
        }
        0 < inCapturePhase.length &&
          ((reactName = new SyntheticEventCtor(
            reactName,
            reactEventType,
            null,
            nativeEvent,
            nativeEventTarget
          )),
          dispatchQueue.push({ event: reactName, listeners: inCapturePhase }));
      }
    }
    if (0 === (eventSystemFlags & 7)) {
      a: {
        reactName =
          "mouseover" === domEventName || "pointerover" === domEventName;
        SyntheticEventCtor =
          "mouseout" === domEventName || "pointerout" === domEventName;
        if (
          reactName &&
          nativeEvent !== currentReplayingEvent &&
          (reactEventType =
            nativeEvent.relatedTarget || nativeEvent.fromElement) &&
          (getClosestInstanceFromNode(reactEventType) ||
            reactEventType[internalContainerInstanceKey])
        )
          break a;
        if (SyntheticEventCtor || reactName) {
          reactName =
            nativeEventTarget.window === nativeEventTarget
              ? nativeEventTarget
              : (reactName = nativeEventTarget.ownerDocument)
                ? reactName.defaultView || reactName.parentWindow
                : window;
          if (SyntheticEventCtor) {
            if (
              ((reactEventType =
                nativeEvent.relatedTarget || nativeEvent.toElement),
              (SyntheticEventCtor = targetInst),
              (reactEventType = reactEventType
                ? getClosestInstanceFromNode(reactEventType)
                : null),
              null !== reactEventType &&
                ((accumulateTargetOnly =
                  getNearestMountedFiber(reactEventType)),
                (inCapturePhase = reactEventType.tag),
                reactEventType !== accumulateTargetOnly ||
                  (5 !== inCapturePhase &&
                    27 !== inCapturePhase &&
                    6 !== inCapturePhase)))
            )
              reactEventType = null;
          } else (SyntheticEventCtor = null), (reactEventType = targetInst);
          if (SyntheticEventCtor !== reactEventType) {
            inCapturePhase = SyntheticMouseEvent;
            _instance = "onMouseLeave";
            reactEventName = "onMouseEnter";
            instance = "mouse";
            if ("pointerout" === domEventName || "pointerover" === domEventName)
              (inCapturePhase = SyntheticPointerEvent),
                (_instance = "onPointerLeave"),
                (reactEventName = "onPointerEnter"),
                (instance = "pointer");
            accumulateTargetOnly =
              null == SyntheticEventCtor
                ? reactName
                : getNodeFromInstance(SyntheticEventCtor);
            lastHostComponent =
              null == reactEventType
                ? reactName
                : getNodeFromInstance(reactEventType);
            reactName = new inCapturePhase(
              _instance,
              instance + "leave",
              SyntheticEventCtor,
              nativeEvent,
              nativeEventTarget
            );
            reactName.target = accumulateTargetOnly;
            reactName.relatedTarget = lastHostComponent;
            _instance = null;
            getClosestInstanceFromNode(nativeEventTarget) === targetInst &&
              ((inCapturePhase = new inCapturePhase(
                reactEventName,
                instance + "enter",
                reactEventType,
                nativeEvent,
                nativeEventTarget
              )),
              (inCapturePhase.target = lastHostComponent),
              (inCapturePhase.relatedTarget = accumulateTargetOnly),
              (_instance = inCapturePhase));
            accumulateTargetOnly = _instance;
            if (SyntheticEventCtor && reactEventType)
              b: {
                inCapturePhase = SyntheticEventCtor;
                reactEventName = reactEventType;
                instance = 0;
                for (
                  lastHostComponent = inCapturePhase;
                  lastHostComponent;
                  lastHostComponent = getParent(lastHostComponent)
                )
                  instance++;
                lastHostComponent = 0;
                for (
                  _instance = reactEventName;
                  _instance;
                  _instance = getParent(_instance)
                )
                  lastHostComponent++;
                for (; 0 < instance - lastHostComponent; )
                  (inCapturePhase = getParent(inCapturePhase)), instance--;
                for (; 0 < lastHostComponent - instance; )
                  (reactEventName = getParent(reactEventName)),
                    lastHostComponent--;
                for (; instance--; ) {
                  if (
                    inCapturePhase === reactEventName ||
                    (null !== reactEventName &&
                      inCapturePhase === reactEventName.alternate)
                  )
                    break b;
                  inCapturePhase = getParent(inCapturePhase);
                  reactEventName = getParent(reactEventName);
                }
                inCapturePhase = null;
              }
            else inCapturePhase = null;
            null !== SyntheticEventCtor &&
              accumulateEnterLeaveListenersForEvent(
                dispatchQueue,
                reactName,
                SyntheticEventCtor,
                inCapturePhase,
                !1
              );
            null !== reactEventType &&
              null !== accumulateTargetOnly &&
              accumulateEnterLeaveListenersForEvent(
                dispatchQueue,
                accumulateTargetOnly,
                reactEventType,
                inCapturePhase,
                !0
              );
          }
        }
      }
      a: {
        reactName = targetInst ? getNodeFromInstance(targetInst) : window;
        SyntheticEventCtor =
          reactName.nodeName && reactName.nodeName.toLowerCase();
        if (
          "select" === SyntheticEventCtor ||
          ("input" === SyntheticEventCtor && "file" === reactName.type)
        )
          var getTargetInstFunc = getTargetInstForChangeEvent;
        else if (isTextInputElement(reactName))
          if (isInputEventSupported)
            getTargetInstFunc = getTargetInstForInputOrChangeEvent;
          else {
            getTargetInstFunc = getTargetInstForInputEventPolyfill;
            var handleEventFunc = handleEventsForInputEventPolyfill;
          }
        else
          (SyntheticEventCtor = reactName.nodeName),
            !SyntheticEventCtor ||
            "input" !== SyntheticEventCtor.toLowerCase() ||
            ("checkbox" !== reactName.type && "radio" !== reactName.type)
              ? targetInst &&
                isCustomElement(targetInst.elementType) &&
                (getTargetInstFunc = getTargetInstForChangeEvent)
              : (getTargetInstFunc = getTargetInstForClickEvent);
        if (
          getTargetInstFunc &&
          (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))
        ) {
          createAndAccumulateChangeEvent(
            dispatchQueue,
            getTargetInstFunc,
            nativeEvent,
            nativeEventTarget
          );
          break a;
        }
        handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
        "focusout" === domEventName &&
          targetInst &&
          "number" === reactName.type &&
          null != targetInst.memoizedProps.value &&
          setDefaultValue(reactName, "number", reactName.value);
      }
      handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
      switch (domEventName) {
        case "focusin":
          if (
            isTextInputElement(handleEventFunc) ||
            "true" === handleEventFunc.contentEditable
          )
            (activeElement = handleEventFunc),
              (activeElementInst = targetInst),
              (lastSelection = null);
          break;
        case "focusout":
          lastSelection = activeElementInst = activeElement = null;
          break;
        case "mousedown":
          mouseDown = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          mouseDown = !1;
          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
          break;
        case "selectionchange":
          if (skipSelectionChangeEvent) break;
        case "keydown":
        case "keyup":
          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
      }
      var fallbackData;
      if (canUseCompositionEvent)
        b: {
          switch (domEventName) {
            case "compositionstart":
              var eventType = "onCompositionStart";
              break b;
            case "compositionend":
              eventType = "onCompositionEnd";
              break b;
            case "compositionupdate":
              eventType = "onCompositionUpdate";
              break b;
          }
          eventType = void 0;
        }
      else
        isComposing
          ? isFallbackCompositionEnd(domEventName, nativeEvent) &&
            (eventType = "onCompositionEnd")
          : "keydown" === domEventName &&
            229 === nativeEvent.keyCode &&
            (eventType = "onCompositionStart");
      eventType &&
        (useFallbackCompositionData &&
          "ko" !== nativeEvent.locale &&
          (isComposing || "onCompositionStart" !== eventType
            ? "onCompositionEnd" === eventType &&
              isComposing &&
              (fallbackData = getData())
            : ((root = nativeEventTarget),
              (startText = "value" in root ? root.value : root.textContent),
              (isComposing = !0))),
        (handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType)),
        0 < handleEventFunc.length &&
          ((eventType = new SyntheticCompositionEvent(
            eventType,
            domEventName,
            null,
            nativeEvent,
            nativeEventTarget
          )),
          dispatchQueue.push({ event: eventType, listeners: handleEventFunc }),
          fallbackData
            ? (eventType.data = fallbackData)
            : ((fallbackData = getDataFromCustomEvent(nativeEvent)),
              null !== fallbackData && (eventType.data = fallbackData))));
      if (
        (fallbackData = canUseTextInputEvent
          ? getNativeBeforeInputChars(domEventName, nativeEvent)
          : getFallbackBeforeInputChars(domEventName, nativeEvent))
      )
        (eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput")),
          0 < eventType.length &&
            ((handleEventFunc = new SyntheticCompositionEvent(
              "onBeforeInput",
              "beforeinput",
              null,
              nativeEvent,
              nativeEventTarget
            )),
            dispatchQueue.push({
              event: handleEventFunc,
              listeners: eventType
            }),
            (handleEventFunc.data = fallbackData));
      extractEvents$1(
        dispatchQueue,
        domEventName,
        targetInst,
        nativeEvent,
        nativeEventTarget
      );
    }
    processDispatchQueue(dispatchQueue, eventSystemFlags);
  });
}
function createDispatchListener(instance, listener, currentTarget) {
  return {
    instance: instance,
    listener: listener,
    currentTarget: currentTarget
  };
}
function accumulateTwoPhaseListeners(targetFiber, reactName) {
  for (
    var captureName = reactName + "Capture", listeners = [];
    null !== targetFiber;

  ) {
    var _instance2 = targetFiber,
      stateNode = _instance2.stateNode;
    _instance2 = _instance2.tag;
    (5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2) ||
      null === stateNode ||
      ((_instance2 = getListener(targetFiber, captureName)),
      null != _instance2 &&
        listeners.unshift(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ),
      (_instance2 = getListener(targetFiber, reactName)),
      null != _instance2 &&
        listeners.push(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ));
    if (3 === targetFiber.tag) return listeners;
    targetFiber = targetFiber.return;
  }
  return [];
}
function getParent(inst) {
  if (null === inst) return null;
  do inst = inst.return;
  while (inst && 5 !== inst.tag && 27 !== inst.tag);
  return inst ? inst : null;
}
function accumulateEnterLeaveListenersForEvent(
  dispatchQueue,
  event,
  target,
  common,
  inCapturePhase
) {
  for (
    var registrationName = event._reactName, listeners = [];
    null !== target && target !== common;

  ) {
    var _instance3 = target,
      alternate = _instance3.alternate,
      stateNode = _instance3.stateNode;
    _instance3 = _instance3.tag;
    if (null !== alternate && alternate === common) break;
    (5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3) ||
      null === stateNode ||
      ((alternate = stateNode),
      inCapturePhase
        ? ((stateNode = getListener(target, registrationName)),
          null != stateNode &&
            listeners.unshift(
              createDispatchListener(target, stateNode, alternate)
            ))
        : inCapturePhase ||
          ((stateNode = getListener(target, registrationName)),
          null != stateNode &&
            listeners.push(
              createDispatchListener(target, stateNode, alternate)
            )));
    target = target.return;
  }
  0 !== listeners.length &&
    dispatchQueue.push({ event: event, listeners: listeners });
}
var NORMALIZE_NEWLINES_REGEX = /\r\n?/g,
  NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
function normalizeMarkupForTextOrAttribute(markup) {
  return ("string" === typeof markup ? markup : "" + markup)
    .replace(NORMALIZE_NEWLINES_REGEX, "\n")
    .replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
}
function checkForUnmatchedText(serverText, clientText) {
  clientText = normalizeMarkupForTextOrAttribute(clientText);
  return normalizeMarkupForTextOrAttribute(serverText) === clientText ? !0 : !1;
}
function noop$1() {}
function setProp(domElement, tag, key, value, props, prevValue) {
  switch (key) {
    case "children":
      "string" === typeof value
        ? "body" === tag ||
          ("textarea" === tag && "" === value) ||
          setTextContent(domElement, value)
        : ("number" === typeof value || "bigint" === typeof value) &&
          "body" !== tag &&
          setTextContent(domElement, "" + value);
      break;
    case "className":
      setValueForKnownAttribute(domElement, "class", value);
      break;
    case "tabIndex":
      setValueForKnownAttribute(domElement, "tabindex", value);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      setValueForKnownAttribute(domElement, key, value);
      break;
    case "style":
      setValueForStyles(domElement, value, prevValue);
      break;
    case "data":
      if ("object" !== tag) {
        setValueForKnownAttribute(domElement, "data", value);
        break;
      }
    case "src":
    case "href":
      if ("" === value && ("a" !== tag || "href" !== key)) {
        domElement.removeAttribute(key);
        break;
      }
      if (
        null == value ||
        "function" === typeof value ||
        "symbol" === typeof value ||
        "boolean" === typeof value
      ) {
        domElement.removeAttribute(key);
        break;
      }
      value = sanitizeURL("" + value);
      domElement.setAttribute(key, value);
      break;
    case "action":
    case "formAction":
      if ("function" === typeof value) {
        domElement.setAttribute(
          key,
          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
        );
        break;
      } else
        "function" === typeof prevValue &&
          ("formAction" === key
            ? ("input" !== tag &&
                setProp(domElement, tag, "name", props.name, props, null),
              setProp(
                domElement,
                tag,
                "formEncType",
                props.formEncType,
                props,
                null
              ),
              setProp(
                domElement,
                tag,
                "formMethod",
                props.formMethod,
                props,
                null
              ),
              setProp(
                domElement,
                tag,
                "formTarget",
                props.formTarget,
                props,
                null
              ))
            : (setProp(domElement, tag, "encType", props.encType, props, null),
              setProp(domElement, tag, "method", props.method, props, null),
              setProp(domElement, tag, "target", props.target, props, null)));
      if (
        null == value ||
        "symbol" === typeof value ||
        "boolean" === typeof value
      ) {
        domElement.removeAttribute(key);
        break;
      }
      value = sanitizeURL("" + value);
      domElement.setAttribute(key, value);
      break;
    case "onClick":
      null != value && (domElement.onclick = noop$1);
      break;
    case "onScroll":
      null != value && listenToNonDelegatedEvent("scroll", domElement);
      break;
    case "onScrollEnd":
      null != value && listenToNonDelegatedEvent("scrollend", domElement);
      break;
    case "dangerouslySetInnerHTML":
      if (null != value) {
        if ("object" !== typeof value || !("__html" in value))
          throw Error(formatProdErrorMessage(61));
        key = value.__html;
        if (null != key) {
          if (null != props.children) throw Error(formatProdErrorMessage(60));
          domElement.innerHTML = key;
        }
      }
      break;
    case "multiple":
      domElement.multiple =
        value && "function" !== typeof value && "symbol" !== typeof value;
      break;
    case "muted":
      domElement.muted =
        value && "function" !== typeof value && "symbol" !== typeof value;
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "ref":
      break;
    case "autoFocus":
      break;
    case "xlinkHref":
      if (
        null == value ||
        "function" === typeof value ||
        "boolean" === typeof value ||
        "symbol" === typeof value
      ) {
        domElement.removeAttribute("xlink:href");
        break;
      }
      key = sanitizeURL("" + value);
      domElement.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        key
      );
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      null != value && "function" !== typeof value && "symbol" !== typeof value
        ? domElement.setAttribute(key, "" + value)
        : domElement.removeAttribute(key);
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      value && "function" !== typeof value && "symbol" !== typeof value
        ? domElement.setAttribute(key, "")
        : domElement.removeAttribute(key);
      break;
    case "capture":
    case "download":
      !0 === value
        ? domElement.setAttribute(key, "")
        : !1 !== value &&
            null != value &&
            "function" !== typeof value &&
            "symbol" !== typeof value
          ? domElement.setAttribute(key, value)
          : domElement.removeAttribute(key);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      null != value &&
      "function" !== typeof value &&
      "symbol" !== typeof value &&
      !isNaN(value) &&
      1 <= value
        ? domElement.setAttribute(key, value)
        : domElement.removeAttribute(key);
      break;
    case "rowSpan":
    case "start":
      null == value ||
      "function" === typeof value ||
      "symbol" === typeof value ||
      isNaN(value)
        ? domElement.removeAttribute(key)
        : domElement.setAttribute(key, value);
      break;
    case "popover":
      listenToNonDelegatedEvent("beforetoggle", domElement);
      listenToNonDelegatedEvent("toggle", domElement);
      setValueForAttribute(domElement, "popover", value);
      break;
    case "xlinkActuate":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:actuate",
        value
      );
      break;
    case "xlinkArcrole":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:arcrole",
        value
      );
      break;
    case "xlinkRole":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:role",
        value
      );
      break;
    case "xlinkShow":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:show",
        value
      );
      break;
    case "xlinkTitle":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:title",
        value
      );
      break;
    case "xlinkType":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:type",
        value
      );
      break;
    case "xmlBase":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/XML/1998/namespace",
        "xml:base",
        value
      );
      break;
    case "xmlLang":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/XML/1998/namespace",
        "xml:lang",
        value
      );
      break;
    case "xmlSpace":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/XML/1998/namespace",
        "xml:space",
        value
      );
      break;
    case "is":
      setValueForAttribute(domElement, "is", value);
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (
        !(2 < key.length) ||
        ("o" !== key[0] && "O" !== key[0]) ||
        ("n" !== key[1] && "N" !== key[1])
      )
        (key = aliases.get(key) || key),
          setValueForAttribute(domElement, key, value);
  }
}
function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
  switch (key) {
    case "style":
      setValueForStyles(domElement, value, prevValue);
      break;
    case "dangerouslySetInnerHTML":
      if (null != value) {
        if ("object" !== typeof value || !("__html" in value))
          throw Error(formatProdErrorMessage(61));
        key = value.__html;
        if (null != key) {
          if (null != props.children) throw Error(formatProdErrorMessage(60));
          domElement.innerHTML = key;
        }
      }
      break;
    case "children":
      "string" === typeof value
        ? setTextContent(domElement, value)
        : ("number" === typeof value || "bigint" === typeof value) &&
          setTextContent(domElement, "" + value);
      break;
    case "onScroll":
      null != value && listenToNonDelegatedEvent("scroll", domElement);
      break;
    case "onScrollEnd":
      null != value && listenToNonDelegatedEvent("scrollend", domElement);
      break;
    case "onClick":
      null != value && (domElement.onclick = noop$1);
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "innerHTML":
    case "ref":
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (!registrationNameDependencies.hasOwnProperty(key))
        a: {
          if (
            "o" === key[0] &&
            "n" === key[1] &&
            ((props = key.endsWith("Capture")),
            (tag = key.slice(2, props ? key.length - 7 : void 0)),
            (prevValue = domElement[internalPropsKey] || null),
            (prevValue = null != prevValue ? prevValue[key] : null),
            "function" === typeof prevValue &&
              domElement.removeEventListener(tag, prevValue, props),
            "function" === typeof value)
          ) {
            "function" !== typeof prevValue &&
              null !== prevValue &&
              (key in domElement
                ? (domElement[key] = null)
                : domElement.hasAttribute(key) &&
                  domElement.removeAttribute(key));
            domElement.addEventListener(tag, value, props);
            break a;
          }
          key in domElement
            ? (domElement[key] = value)
            : !0 === value
              ? domElement.setAttribute(key, "")
              : setValueForAttribute(domElement, key, value);
        }
  }
}
function setInitialProperties(domElement, tag, props) {
  switch (tag) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "img":
      listenToNonDelegatedEvent("error", domElement);
      listenToNonDelegatedEvent("load", domElement);
      var hasSrc = !1,
        hasSrcSet = !1,
        propKey;
      for (propKey in props)
        if (props.hasOwnProperty(propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "src":
                hasSrc = !0;
                break;
              case "srcSet":
                hasSrcSet = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(formatProdErrorMessage(137, tag));
              default:
                setProp(domElement, tag, propKey, propValue, props, null);
            }
        }
      hasSrcSet &&
        setProp(domElement, tag, "srcSet", props.srcSet, props, null);
      hasSrc && setProp(domElement, tag, "src", props.src, props, null);
      return;
    case "input":
      listenToNonDelegatedEvent("invalid", domElement);
      var defaultValue = (propKey = propValue = hasSrcSet = null),
        checked = null,
        defaultChecked = null;
      for (hasSrc in props)
        if (props.hasOwnProperty(hasSrc)) {
          var propValue$188 = props[hasSrc];
          if (null != propValue$188)
            switch (hasSrc) {
              case "name":
                hasSrcSet = propValue$188;
                break;
              case "type":
                propValue = propValue$188;
                break;
              case "checked":
                checked = propValue$188;
                break;
              case "defaultChecked":
                defaultChecked = propValue$188;
                break;
              case "value":
                propKey = propValue$188;
                break;
              case "defaultValue":
                defaultValue = propValue$188;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (null != propValue$188)
                  throw Error(formatProdErrorMessage(137, tag));
                break;
              default:
                setProp(domElement, tag, hasSrc, propValue$188, props, null);
            }
        }
      initInput(
        domElement,
        propKey,
        defaultValue,
        checked,
        defaultChecked,
        propValue,
        hasSrcSet,
        !1
      );
      track(domElement);
      return;
    case "select":
      listenToNonDelegatedEvent("invalid", domElement);
      hasSrc = propValue = propKey = null;
      for (hasSrcSet in props)
        if (
          props.hasOwnProperty(hasSrcSet) &&
          ((defaultValue = props[hasSrcSet]), null != defaultValue)
        )
          switch (hasSrcSet) {
            case "value":
              propKey = defaultValue;
              break;
            case "defaultValue":
              propValue = defaultValue;
              break;
            case "multiple":
              hasSrc = defaultValue;
            default:
              setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
          }
      tag = propKey;
      props = propValue;
      domElement.multiple = !!hasSrc;
      null != tag
        ? updateOptions(domElement, !!hasSrc, tag, !1)
        : null != props && updateOptions(domElement, !!hasSrc, props, !0);
      return;
    case "textarea":
      listenToNonDelegatedEvent("invalid", domElement);
      propKey = hasSrcSet = hasSrc = null;
      for (propValue in props)
        if (
          props.hasOwnProperty(propValue) &&
          ((defaultValue = props[propValue]), null != defaultValue)
        )
          switch (propValue) {
            case "value":
              hasSrc = defaultValue;
              break;
            case "defaultValue":
              hasSrcSet = defaultValue;
              break;
            case "children":
              propKey = defaultValue;
              break;
            case "dangerouslySetInnerHTML":
              if (null != defaultValue) throw Error(formatProdErrorMessage(91));
              break;
            default:
              setProp(domElement, tag, propValue, defaultValue, props, null);
          }
      initTextarea(domElement, hasSrc, hasSrcSet, propKey);
      track(domElement);
      return;
    case "option":
      for (checked in props)
        if (
          props.hasOwnProperty(checked) &&
          ((hasSrc = props[checked]), null != hasSrc)
        )
          switch (checked) {
            case "selected":
              domElement.selected =
                hasSrc &&
                "function" !== typeof hasSrc &&
                "symbol" !== typeof hasSrc;
              break;
            default:
              setProp(domElement, tag, checked, hasSrc, props, null);
          }
      return;
    case "dialog":
      listenToNonDelegatedEvent("beforetoggle", domElement);
      listenToNonDelegatedEvent("toggle", domElement);
      listenToNonDelegatedEvent("cancel", domElement);
      listenToNonDelegatedEvent("close", domElement);
      break;
    case "iframe":
    case "object":
      listenToNonDelegatedEvent("load", domElement);
      break;
    case "video":
    case "audio":
      for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++)
        listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
      break;
    case "image":
      listenToNonDelegatedEvent("error", domElement);
      listenToNonDelegatedEvent("load", domElement);
      break;
    case "details":
      listenToNonDelegatedEvent("toggle", domElement);
      break;
    case "embed":
    case "source":
    case "link":
      listenToNonDelegatedEvent("error", domElement),
        listenToNonDelegatedEvent("load", domElement);
    case "area":
    case "base":
    case "br":
    case "col":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "track":
    case "wbr":
    case "menuitem":
      for (defaultChecked in props)
        if (
          props.hasOwnProperty(defaultChecked) &&
          ((hasSrc = props[defaultChecked]), null != hasSrc)
        )
          switch (defaultChecked) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(formatProdErrorMessage(137, tag));
            default:
              setProp(domElement, tag, defaultChecked, hasSrc, props, null);
          }
      return;
    default:
      if (isCustomElement(tag)) {
        for (propValue$188 in props)
          props.hasOwnProperty(propValue$188) &&
            ((hasSrc = props[propValue$188]),
            void 0 !== hasSrc &&
              setPropOnCustomElement(
                domElement,
                tag,
                propValue$188,
                hasSrc,
                props,
                void 0
              ));
        return;
      }
  }
  for (defaultValue in props)
    props.hasOwnProperty(defaultValue) &&
      ((hasSrc = props[defaultValue]),
      null != hasSrc &&
        setProp(domElement, tag, defaultValue, hasSrc, props, null));
}
function updateProperties(domElement, tag, lastProps, nextProps) {
  switch (tag) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "input":
      var name = null,
        type = null,
        value = null,
        defaultValue = null,
        lastDefaultValue = null,
        checked = null,
        defaultChecked = null;
      for (propKey in lastProps) {
        var lastProp = lastProps[propKey];
        if (lastProps.hasOwnProperty(propKey) && null != lastProp)
          switch (propKey) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              lastDefaultValue = lastProp;
            default:
              nextProps.hasOwnProperty(propKey) ||
                setProp(domElement, tag, propKey, null, nextProps, lastProp);
          }
      }
      for (var propKey$205 in nextProps) {
        var propKey = nextProps[propKey$205];
        lastProp = lastProps[propKey$205];
        if (
          nextProps.hasOwnProperty(propKey$205) &&
          (null != propKey || null != lastProp)
        )
          switch (propKey$205) {
            case "type":
              type = propKey;
              break;
            case "name":
              name = propKey;
              break;
            case "checked":
              checked = propKey;
              break;
            case "defaultChecked":
              defaultChecked = propKey;
              break;
            case "value":
              value = propKey;
              break;
            case "defaultValue":
              defaultValue = propKey;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (null != propKey)
                throw Error(formatProdErrorMessage(137, tag));
              break;
            default:
              propKey !== lastProp &&
                setProp(
                  domElement,
                  tag,
                  propKey$205,
                  propKey,
                  nextProps,
                  lastProp
                );
          }
      }
      updateInput(
        domElement,
        value,
        defaultValue,
        lastDefaultValue,
        checked,
        defaultChecked,
        type,
        name
      );
      return;
    case "select":
      propKey = value = defaultValue = propKey$205 = null;
      for (type in lastProps)
        if (
          ((lastDefaultValue = lastProps[type]),
          lastProps.hasOwnProperty(type) && null != lastDefaultValue)
        )
          switch (type) {
            case "value":
              break;
            case "multiple":
              propKey = lastDefaultValue;
            default:
              nextProps.hasOwnProperty(type) ||
                setProp(
                  domElement,
                  tag,
                  type,
                  null,
                  nextProps,
                  lastDefaultValue
                );
          }
      for (name in nextProps)
        if (
          ((type = nextProps[name]),
          (lastDefaultValue = lastProps[name]),
          nextProps.hasOwnProperty(name) &&
            (null != type || null != lastDefaultValue))
        )
          switch (name) {
            case "value":
              propKey$205 = type;
              break;
            case "defaultValue":
              defaultValue = type;
              break;
            case "multiple":
              value = type;
            default:
              type !== lastDefaultValue &&
                setProp(
                  domElement,
                  tag,
                  name,
                  type,
                  nextProps,
                  lastDefaultValue
                );
          }
      tag = defaultValue;
      lastProps = value;
      nextProps = propKey;
      null != propKey$205
        ? updateOptions(domElement, !!lastProps, propKey$205, !1)
        : !!nextProps !== !!lastProps &&
          (null != tag
            ? updateOptions(domElement, !!lastProps, tag, !0)
            : updateOptions(domElement, !!lastProps, lastProps ? [] : "", !1));
      return;
    case "textarea":
      propKey = propKey$205 = null;
      for (defaultValue in lastProps)
        if (
          ((name = lastProps[defaultValue]),
          lastProps.hasOwnProperty(defaultValue) &&
            null != name &&
            !nextProps.hasOwnProperty(defaultValue))
        )
          switch (defaultValue) {
            case "value":
              break;
            case "children":
              break;
            default:
              setProp(domElement, tag, defaultValue, null, nextProps, name);
          }
      for (value in nextProps)
        if (
          ((name = nextProps[value]),
          (type = lastProps[value]),
          nextProps.hasOwnProperty(value) && (null != name || null != type))
        )
          switch (value) {
            case "value":
              propKey$205 = name;
              break;
            case "defaultValue":
              propKey = name;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (null != name) throw Error(formatProdErrorMessage(91));
              break;
            default:
              name !== type &&
                setProp(domElement, tag, value, name, nextProps, type);
          }
      updateTextarea(domElement, propKey$205, propKey);
      return;
    case "option":
      for (var propKey$221 in lastProps)
        if (
          ((propKey$205 = lastProps[propKey$221]),
          lastProps.hasOwnProperty(propKey$221) &&
            null != propKey$205 &&
            !nextProps.hasOwnProperty(propKey$221))
        )
          switch (propKey$221) {
            case "selected":
              domElement.selected = !1;
              break;
            default:
              setProp(
                domElement,
                tag,
                propKey$221,
                null,
                nextProps,
                propKey$205
              );
          }
      for (lastDefaultValue in nextProps)
        if (
          ((propKey$205 = nextProps[lastDefaultValue]),
          (propKey = lastProps[lastDefaultValue]),
          nextProps.hasOwnProperty(lastDefaultValue) &&
            propKey$205 !== propKey &&
            (null != propKey$205 || null != propKey))
        )
          switch (lastDefaultValue) {
            case "selected":
              domElement.selected =
                propKey$205 &&
                "function" !== typeof propKey$205 &&
                "symbol" !== typeof propKey$205;
              break;
            default:
              setProp(
                domElement,
                tag,
                lastDefaultValue,
                propKey$205,
                nextProps,
                propKey
              );
          }
      return;
    case "img":
    case "link":
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
    case "menuitem":
      for (var propKey$226 in lastProps)
        (propKey$205 = lastProps[propKey$226]),
          lastProps.hasOwnProperty(propKey$226) &&
            null != propKey$205 &&
            !nextProps.hasOwnProperty(propKey$226) &&
            setProp(domElement, tag, propKey$226, null, nextProps, propKey$205);
      for (checked in nextProps)
        if (
          ((propKey$205 = nextProps[checked]),
          (propKey = lastProps[checked]),
          nextProps.hasOwnProperty(checked) &&
            propKey$205 !== propKey &&
            (null != propKey$205 || null != propKey))
        )
          switch (checked) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (null != propKey$205)
                throw Error(formatProdErrorMessage(137, tag));
              break;
            default:
              setProp(
                domElement,
                tag,
                checked,
                propKey$205,
                nextProps,
                propKey
              );
          }
      return;
    default:
      if (isCustomElement(tag)) {
        for (var propKey$231 in lastProps)
          (propKey$205 = lastProps[propKey$231]),
            lastProps.hasOwnProperty(propKey$231) &&
              void 0 !== propKey$205 &&
              !nextProps.hasOwnProperty(propKey$231) &&
              setPropOnCustomElement(
                domElement,
                tag,
                propKey$231,
                void 0,
                nextProps,
                propKey$205
              );
        for (defaultChecked in nextProps)
          (propKey$205 = nextProps[defaultChecked]),
            (propKey = lastProps[defaultChecked]),
            !nextProps.hasOwnProperty(defaultChecked) ||
              propKey$205 === propKey ||
              (void 0 === propKey$205 && void 0 === propKey) ||
              setPropOnCustomElement(
                domElement,
                tag,
                defaultChecked,
                propKey$205,
                nextProps,
                propKey
              );
        return;
      }
  }
  for (var propKey$236 in lastProps)
    (propKey$205 = lastProps[propKey$236]),
      lastProps.hasOwnProperty(propKey$236) &&
        null != propKey$205 &&
        !nextProps.hasOwnProperty(propKey$236) &&
        setProp(domElement, tag, propKey$236, null, nextProps, propKey$205);
  for (lastProp in nextProps)
    (propKey$205 = nextProps[lastProp]),
      (propKey = lastProps[lastProp]),
      !nextProps.hasOwnProperty(lastProp) ||
        propKey$205 === propKey ||
        (null == propKey$205 && null == propKey) ||
        setProp(domElement, tag, lastProp, propKey$205, nextProps, propKey);
}
var eventsEnabled = null,
  selectionInformation = null;
function getOwnerDocumentFromRootContainer(rootContainerElement) {
  return 9 === rootContainerElement.nodeType
    ? rootContainerElement
    : rootContainerElement.ownerDocument;
}
function getOwnHostContext(namespaceURI) {
  switch (namespaceURI) {
    case "http://www.w3.org/2000/svg":
      return 1;
    case "http://www.w3.org/1998/Math/MathML":
      return 2;
    default:
      return 0;
  }
}
function getChildHostContextProd(parentNamespace, type) {
  if (0 === parentNamespace)
    switch (type) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
  return 1 === parentNamespace && "foreignObject" === type
    ? 0
    : parentNamespace;
}
function shouldSetTextContent(type, props) {
  return (
    "textarea" === type ||
    "noscript" === type ||
    "string" === typeof props.children ||
    "number" === typeof props.children ||
    "bigint" === typeof props.children ||
    ("object" === typeof props.dangerouslySetInnerHTML &&
      null !== props.dangerouslySetInnerHTML &&
      null != props.dangerouslySetInnerHTML.__html)
  );
}
var currentPopstateTransitionEvent = null;
function shouldAttemptEagerTransition() {
  var event = window.event;
  if (event && "popstate" === event.type) {
    if (event === currentPopstateTransitionEvent) return !1;
    currentPopstateTransitionEvent = event;
    return !0;
  }
  currentPopstateTransitionEvent = null;
  return !1;
}
var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0,
  cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0,
  localPromise = "function" === typeof Promise ? Promise : void 0,
  scheduleMicrotask =
    "function" === typeof queueMicrotask
      ? queueMicrotask
      : "undefined" !== typeof localPromise
        ? function (callback) {
            return localPromise
              .resolve(null)
              .then(callback)
              .catch(handleErrorInNextTick);
          }
        : scheduleTimeout;
function handleErrorInNextTick(error) {
  setTimeout(function () {
    throw error;
  });
}
function isSingletonScope(type) {
  return "head" === type;
}
function clearSuspenseBoundary(parentInstance, suspenseInstance) {
  var node = suspenseInstance,
    possiblePreambleContribution = 0,
    depth = 0;
  do {
    var nextNode = node.nextSibling;
    parentInstance.removeChild(node);
    if (nextNode && 8 === nextNode.nodeType)
      if (((node = nextNode.data), "/$" === node)) {
        if (
          0 < possiblePreambleContribution &&
          8 > possiblePreambleContribution
        ) {
          node = possiblePreambleContribution;
          var ownerDocument = parentInstance.ownerDocument;
          node & 1 && releaseSingletonInstance(ownerDocument.documentElement);
          node & 2 && releaseSingletonInstance(ownerDocument.body);
          if (node & 4)
            for (
              node = ownerDocument.head,
                releaseSingletonInstance(node),
                ownerDocument = node.firstChild;
              ownerDocument;

            ) {
              var nextNode$jscomp$0 = ownerDocument.nextSibling,
                nodeName = ownerDocument.nodeName;
              ownerDocument[internalHoistableMarker] ||
                "SCRIPT" === nodeName ||
                "STYLE" === nodeName ||
                ("LINK" === nodeName &&
                  "stylesheet" === ownerDocument.rel.toLowerCase()) ||
                node.removeChild(ownerDocument);
              ownerDocument = nextNode$jscomp$0;
            }
        }
        if (0 === depth) {
          parentInstance.removeChild(nextNode);
          retryIfBlockedOn(suspenseInstance);
          return;
        }
        depth--;
      } else
        "$" === node || "$?" === node || "$!" === node
          ? depth++
          : (possiblePreambleContribution = node.charCodeAt(0) - 48);
    else possiblePreambleContribution = 0;
    node = nextNode;
  } while (node);
  retryIfBlockedOn(suspenseInstance);
}
function clearContainerSparingly(container) {
  var nextNode = container.firstChild;
  nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
  for (; nextNode; ) {
    var node = nextNode;
    nextNode = nextNode.nextSibling;
    switch (node.nodeName) {
      case "HTML":
      case "HEAD":
      case "BODY":
        clearContainerSparingly(node);
        detachDeletedInstance(node);
        continue;
      case "SCRIPT":
      case "STYLE":
        continue;
      case "LINK":
        if ("stylesheet" === node.rel.toLowerCase()) continue;
    }
    container.removeChild(node);
  }
}
function canHydrateInstance(instance, type, props, inRootOrSingleton) {
  for (; 1 === instance.nodeType; ) {
    var anyProps = props;
    if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
      if (
        !inRootOrSingleton &&
        ("INPUT" !== instance.nodeName || "hidden" !== instance.type)
      )
        break;
    } else if (!inRootOrSingleton)
      if ("input" === type && "hidden" === instance.type) {
        var name = null == anyProps.name ? null : "" + anyProps.name;
        if (
          "hidden" === anyProps.type &&
          instance.getAttribute("name") === name
        )
          return instance;
      } else return instance;
    else if (!instance[internalHoistableMarker])
      switch (type) {
        case "meta":
          if (!instance.hasAttribute("itemprop")) break;
          return instance;
        case "link":
          name = instance.getAttribute("rel");
          if ("stylesheet" === name && instance.hasAttribute("data-precedence"))
            break;
          else if (
            name !== anyProps.rel ||
            instance.getAttribute("href") !==
              (null == anyProps.href || "" === anyProps.href
                ? null
                : anyProps.href) ||
            instance.getAttribute("crossorigin") !==
              (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) ||
            instance.getAttribute("title") !==
              (null == anyProps.title ? null : anyProps.title)
          )
            break;
          return instance;
        case "style":
          if (instance.hasAttribute("data-precedence")) break;
          return instance;
        case "script":
          name = instance.getAttribute("src");
          if (
            (name !== (null == anyProps.src ? null : anyProps.src) ||
              instance.getAttribute("type") !==
                (null == anyProps.type ? null : anyProps.type) ||
              instance.getAttribute("crossorigin") !==
                (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) &&
            name &&
            instance.hasAttribute("async") &&
            !instance.hasAttribute("itemprop")
          )
            break;
          return instance;
        default:
          return instance;
      }
    instance = getNextHydratable(instance.nextSibling);
    if (null === instance) break;
  }
  return null;
}
function canHydrateTextInstance(instance, text, inRootOrSingleton) {
  if ("" === text) return null;
  for (; 3 !== instance.nodeType; ) {
    if (
      (1 !== instance.nodeType ||
        "INPUT" !== instance.nodeName ||
        "hidden" !== instance.type) &&
      !inRootOrSingleton
    )
      return null;
    instance = getNextHydratable(instance.nextSibling);
    if (null === instance) return null;
  }
  return instance;
}
function isSuspenseInstanceFallback(instance) {
  return (
    "$!" === instance.data ||
    ("$?" === instance.data && "complete" === instance.ownerDocument.readyState)
  );
}
function registerSuspenseInstanceRetry(instance, callback) {
  var ownerDocument = instance.ownerDocument;
  if ("$?" !== instance.data || "complete" === ownerDocument.readyState)
    callback();
  else {
    var listener = function () {
      callback();
      ownerDocument.removeEventListener("DOMContentLoaded", listener);
    };
    ownerDocument.addEventListener("DOMContentLoaded", listener);
    instance._reactRetry = listener;
  }
}
function getNextHydratable(node) {
  for (; null != node; node = node.nextSibling) {
    var nodeType = node.nodeType;
    if (1 === nodeType || 3 === nodeType) break;
    if (8 === nodeType) {
      nodeType = node.data;
      if (
        "$" === nodeType ||
        "$!" === nodeType ||
        "$?" === nodeType ||
        "F!" === nodeType ||
        "F" === nodeType
      )
        break;
      if ("/$" === nodeType) return null;
    }
  }
  return node;
}
var previousHydratableOnEnteringScopedSingleton = null;
function getParentSuspenseInstance(targetInstance) {
  targetInstance = targetInstance.previousSibling;
  for (var depth = 0; targetInstance; ) {
    if (8 === targetInstance.nodeType) {
      var data = targetInstance.data;
      if ("$" === data || "$!" === data || "$?" === data) {
        if (0 === depth) return targetInstance;
        depth--;
      } else "/$" === data && depth++;
    }
    targetInstance = targetInstance.previousSibling;
  }
  return null;
}
function resolveSingletonInstance(type, props, rootContainerInstance) {
  props = getOwnerDocumentFromRootContainer(rootContainerInstance);
  switch (type) {
    case "html":
      type = props.documentElement;
      if (!type) throw Error(formatProdErrorMessage(452));
      return type;
    case "head":
      type = props.head;
      if (!type) throw Error(formatProdErrorMessage(453));
      return type;
    case "body":
      type = props.body;
      if (!type) throw Error(formatProdErrorMessage(454));
      return type;
    default:
      throw Error(formatProdErrorMessage(451));
  }
}
function releaseSingletonInstance(instance) {
  for (var attributes = instance.attributes; attributes.length; )
    instance.removeAttributeNode(attributes[0]);
  detachDeletedInstance(instance);
}
var preloadPropsMap = new Map(),
  preconnectsSet = new Set();
function getHoistableRoot(container) {
  return "function" === typeof container.getRootNode
    ? container.getRootNode()
    : 9 === container.nodeType
      ? container
      : container.ownerDocument;
}
var previousDispatcher = ReactDOMSharedInternals.d;
ReactDOMSharedInternals.d = {
  f: flushSyncWork,
  r: requestFormReset,
  D: prefetchDNS,
  C: preconnect,
  L: preload,
  m: preloadModule,
  X: preinitScript,
  S: preinitStyle,
  M: preinitModuleScript
};
function flushSyncWork() {
  var previousWasRendering = previousDispatcher.f(),
    wasRendering = flushSyncWork$1();
  return previousWasRendering || wasRendering;
}
function requestFormReset(form) {
  var formInst = getInstanceFromNode(form);
  null !== formInst && 5 === formInst.tag && "form" === formInst.type
    ? requestFormReset$1(formInst)
    : previousDispatcher.r(form);
}
var globalDocument = "undefined" === typeof document ? null : document;
function preconnectAs(rel, href, crossOrigin) {
  var ownerDocument = globalDocument;
  if (ownerDocument && "string" === typeof href && href) {
    var limitedEscapedHref =
      escapeSelectorAttributeValueInsideDoubleQuotes(href);
    limitedEscapedHref =
      'link[rel="' + rel + '"][href="' + limitedEscapedHref + '"]';
    "string" === typeof crossOrigin &&
      (limitedEscapedHref += '[crossorigin="' + crossOrigin + '"]');
    preconnectsSet.has(limitedEscapedHref) ||
      (preconnectsSet.add(limitedEscapedHref),
      (rel = { rel: rel, crossOrigin: crossOrigin, href: href }),
      null === ownerDocument.querySelector(limitedEscapedHref) &&
        ((href = ownerDocument.createElement("link")),
        setInitialProperties(href, "link", rel),
        markNodeAsHoistable(href),
        ownerDocument.head.appendChild(href)));
  }
}
function prefetchDNS(href) {
  previousDispatcher.D(href);
  preconnectAs("dns-prefetch", href, null);
}
function preconnect(href, crossOrigin) {
  previousDispatcher.C(href, crossOrigin);
  preconnectAs("preconnect", href, crossOrigin);
}
function preload(href, as, options) {
  previousDispatcher.L(href, as, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && href && as) {
    var preloadSelector =
      'link[rel="preload"][as="' +
      escapeSelectorAttributeValueInsideDoubleQuotes(as) +
      '"]';
    "image" === as
      ? options && options.imageSrcSet
        ? ((preloadSelector +=
            '[imagesrcset="' +
            escapeSelectorAttributeValueInsideDoubleQuotes(
              options.imageSrcSet
            ) +
            '"]'),
          "string" === typeof options.imageSizes &&
            (preloadSelector +=
              '[imagesizes="' +
              escapeSelectorAttributeValueInsideDoubleQuotes(
                options.imageSizes
              ) +
              '"]'))
        : (preloadSelector +=
            '[href="' +
            escapeSelectorAttributeValueInsideDoubleQuotes(href) +
            '"]')
      : (preloadSelector +=
          '[href="' +
          escapeSelectorAttributeValueInsideDoubleQuotes(href) +
          '"]');
    var key = preloadSelector;
    switch (as) {
      case "style":
        key = getStyleKey(href);
        break;
      case "script":
        key = getScriptKey(href);
    }
    preloadPropsMap.has(key) ||
      ((href = assign(
        {
          rel: "preload",
          href:
            "image" === as && options && options.imageSrcSet ? void 0 : href,
          as: as
        },
        options
      )),
      preloadPropsMap.set(key, href),
      null !== ownerDocument.querySelector(preloadSelector) ||
        ("style" === as &&
          ownerDocument.querySelector(getStylesheetSelectorFromKey(key))) ||
        ("script" === as &&
          ownerDocument.querySelector(getScriptSelectorFromKey(key))) ||
        ((as = ownerDocument.createElement("link")),
        setInitialProperties(as, "link", href),
        markNodeAsHoistable(as),
        ownerDocument.head.appendChild(as)));
  }
}
function preloadModule(href, options) {
  previousDispatcher.m(href, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && href) {
    var as = options && "string" === typeof options.as ? options.as : "script",
      preloadSelector =
        'link[rel="modulepreload"][as="' +
        escapeSelectorAttributeValueInsideDoubleQuotes(as) +
        '"][href="' +
        escapeSelectorAttributeValueInsideDoubleQuotes(href) +
        '"]',
      key = preloadSelector;
    switch (as) {
      case "audioworklet":
      case "paintworklet":
      case "serviceworker":
      case "sharedworker":
      case "worker":
      case "script":
        key = getScriptKey(href);
    }
    if (
      !preloadPropsMap.has(key) &&
      ((href = assign({ rel: "modulepreload", href: href }, options)),
      preloadPropsMap.set(key, href),
      null === ownerDocument.querySelector(preloadSelector))
    ) {
      switch (as) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          if (ownerDocument.querySelector(getScriptSelectorFromKey(key)))
            return;
      }
      as = ownerDocument.createElement("link");
      setInitialProperties(as, "link", href);
      markNodeAsHoistable(as);
      ownerDocument.head.appendChild(as);
    }
  }
}
function preinitStyle(href, precedence, options) {
  previousDispatcher.S(href, precedence, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && href) {
    var styles = getResourcesFromRoot(ownerDocument).hoistableStyles,
      key = getStyleKey(href);
    precedence = precedence || "default";
    var resource = styles.get(key);
    if (!resource) {
      var state = { loading: 0, preload: null };
      if (
        (resource = ownerDocument.querySelector(
          getStylesheetSelectorFromKey(key)
        ))
      )
        state.loading = 5;
      else {
        href = assign(
          { rel: "stylesheet", href: href, "data-precedence": precedence },
          options
        );
        (options = preloadPropsMap.get(key)) &&
          adoptPreloadPropsForStylesheet(href, options);
        var link = (resource = ownerDocument.createElement("link"));
        markNodeAsHoistable(link);
        setInitialProperties(link, "link", href);
        link._p = new Promise(function (resolve, reject) {
          link.onload = resolve;
          link.onerror = reject;
        });
        link.addEventListener("load", function () {
          state.loading |= 1;
        });
        link.addEventListener("error", function () {
          state.loading |= 2;
        });
        state.loading |= 4;
        insertStylesheet(resource, precedence, ownerDocument);
      }
      resource = {
        type: "stylesheet",
        instance: resource,
        count: 1,
        state: state
      };
      styles.set(key, resource);
    }
  }
}
function preinitScript(src, options) {
  previousDispatcher.X(src, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && src) {
    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts,
      key = getScriptKey(src),
      resource = scripts.get(key);
    resource ||
      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
      resource ||
        ((src = assign({ src: src, async: !0 }, options)),
        (options = preloadPropsMap.get(key)) &&
          adoptPreloadPropsForScript(src, options),
        (resource = ownerDocument.createElement("script")),
        markNodeAsHoistable(resource),
        setInitialProperties(resource, "link", src),
        ownerDocument.head.appendChild(resource)),
      (resource = {
        type: "script",
        instance: resource,
        count: 1,
        state: null
      }),
      scripts.set(key, resource));
  }
}
function preinitModuleScript(src, options) {
  previousDispatcher.M(src, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && src) {
    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts,
      key = getScriptKey(src),
      resource = scripts.get(key);
    resource ||
      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
      resource ||
        ((src = assign({ src: src, async: !0, type: "module" }, options)),
        (options = preloadPropsMap.get(key)) &&
          adoptPreloadPropsForScript(src, options),
        (resource = ownerDocument.createElement("script")),
        markNodeAsHoistable(resource),
        setInitialProperties(resource, "link", src),
        ownerDocument.head.appendChild(resource)),
      (resource = {
        type: "script",
        instance: resource,
        count: 1,
        state: null
      }),
      scripts.set(key, resource));
  }
}
function getResource(type, currentProps, pendingProps, currentResource) {
  var JSCompiler_inline_result = (JSCompiler_inline_result =
    rootInstanceStackCursor.current)
    ? getHoistableRoot(JSCompiler_inline_result)
    : null;
  if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
  switch (type) {
    case "meta":
    case "title":
      return null;
    case "style":
      return "string" === typeof pendingProps.precedence &&
        "string" === typeof pendingProps.href
        ? ((currentProps = getStyleKey(pendingProps.href)),
          (pendingProps = getResourcesFromRoot(
            JSCompiler_inline_result
          ).hoistableStyles),
          (currentResource = pendingProps.get(currentProps)),
          currentResource ||
            ((currentResource = {
              type: "style",
              instance: null,
              count: 0,
              state: null
            }),
            pendingProps.set(currentProps, currentResource)),
          currentResource)
        : { type: "void", instance: null, count: 0, state: null };
    case "link":
      if (
        "stylesheet" === pendingProps.rel &&
        "string" === typeof pendingProps.href &&
        "string" === typeof pendingProps.precedence
      ) {
        type = getStyleKey(pendingProps.href);
        var styles$244 = getResourcesFromRoot(
            JSCompiler_inline_result
          ).hoistableStyles,
          resource$245 = styles$244.get(type);
        resource$245 ||
          ((JSCompiler_inline_result =
            JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result),
          (resource$245 = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }),
          styles$244.set(type, resource$245),
          (styles$244 = JSCompiler_inline_result.querySelector(
            getStylesheetSelectorFromKey(type)
          )) &&
            !styles$244._p &&
            ((resource$245.instance = styles$244),
            (resource$245.state.loading = 5)),
          preloadPropsMap.has(type) ||
            ((pendingProps = {
              rel: "preload",
              as: "style",
              href: pendingProps.href,
              crossOrigin: pendingProps.crossOrigin,
              integrity: pendingProps.integrity,
              media: pendingProps.media,
              hrefLang: pendingProps.hrefLang,
              referrerPolicy: pendingProps.referrerPolicy
            }),
            preloadPropsMap.set(type, pendingProps),
            styles$244 ||
              preloadStylesheet(
                JSCompiler_inline_result,
                type,
                pendingProps,
                resource$245.state
              )));
        if (currentProps && null === currentResource)
          throw Error(formatProdErrorMessage(528, ""));
        return resource$245;
      }
      if (currentProps && null !== currentResource)
        throw Error(formatProdErrorMessage(529, ""));
      return null;
    case "script":
      return (
        (currentProps = pendingProps.async),
        (pendingProps = pendingProps.src),
        "string" === typeof pendingProps &&
        currentProps &&
        "function" !== typeof currentProps &&
        "symbol" !== typeof currentProps
          ? ((currentProps = getScriptKey(pendingProps)),
            (pendingProps = getResourcesFromRoot(
              JSCompiler_inline_result
            ).hoistableScripts),
            (currentResource = pendingProps.get(currentProps)),
            currentResource ||
              ((currentResource = {
                type: "script",
                instance: null,
                count: 0,
                state: null
              }),
              pendingProps.set(currentProps, currentResource)),
            currentResource)
          : { type: "void", instance: null, count: 0, state: null }
      );
    default:
      throw Error(formatProdErrorMessage(444, type));
  }
}
function getStyleKey(href) {
  return 'href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"';
}
function getStylesheetSelectorFromKey(key) {
  return 'link[rel="stylesheet"][' + key + "]";
}
function stylesheetPropsFromRawProps(rawProps) {
  return assign({}, rawProps, {
    "data-precedence": rawProps.precedence,
    precedence: null
  });
}
function preloadStylesheet(ownerDocument, key, preloadProps, state) {
  ownerDocument.querySelector('link[rel="preload"][as="style"][' + key + "]")
    ? (state.loading = 1)
    : ((key = ownerDocument.createElement("link")),
      (state.preload = key),
      key.addEventListener("load", function () {
        return (state.loading |= 1);
      }),
      key.addEventListener("error", function () {
        return (state.loading |= 2);
      }),
      setInitialProperties(key, "link", preloadProps),
      markNodeAsHoistable(key),
      ownerDocument.head.appendChild(key));
}
function getScriptKey(src) {
  return '[src="' + escapeSelectorAttributeValueInsideDoubleQuotes(src) + '"]';
}
function getScriptSelectorFromKey(key) {
  return "script[async]" + key;
}
function acquireResource(hoistableRoot, resource, props) {
  resource.count++;
  if (null === resource.instance)
    switch (resource.type) {
      case "style":
        var instance = hoistableRoot.querySelector(
          'style[data-href~="' +
            escapeSelectorAttributeValueInsideDoubleQuotes(props.href) +
            '"]'
        );
        if (instance)
          return (
            (resource.instance = instance),
            markNodeAsHoistable(instance),
            instance
          );
        var styleProps = assign({}, props, {
          "data-href": props.href,
          "data-precedence": props.precedence,
          href: null,
          precedence: null
        });
        instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement(
          "style"
        );
        markNodeAsHoistable(instance);
        setInitialProperties(instance, "style", styleProps);
        insertStylesheet(instance, props.precedence, hoistableRoot);
        return (resource.instance = instance);
      case "stylesheet":
        styleProps = getStyleKey(props.href);
        var instance$250 = hoistableRoot.querySelector(
          getStylesheetSelectorFromKey(styleProps)
        );
        if (instance$250)
          return (
            (resource.state.loading |= 4),
            (resource.instance = instance$250),
            markNodeAsHoistable(instance$250),
            instance$250
          );
        instance = stylesheetPropsFromRawProps(props);
        (styleProps = preloadPropsMap.get(styleProps)) &&
          adoptPreloadPropsForStylesheet(instance, styleProps);
        instance$250 = (
          hoistableRoot.ownerDocument || hoistableRoot
        ).createElement("link");
        markNodeAsHoistable(instance$250);
        var linkInstance = instance$250;
        linkInstance._p = new Promise(function (resolve, reject) {
          linkInstance.onload = resolve;
          linkInstance.onerror = reject;
        });
        setInitialProperties(instance$250, "link", instance);
        resource.state.loading |= 4;
        insertStylesheet(instance$250, props.precedence, hoistableRoot);
        return (resource.instance = instance$250);
      case "script":
        instance$250 = getScriptKey(props.src);
        if (
          (styleProps = hoistableRoot.querySelector(
            getScriptSelectorFromKey(instance$250)
          ))
        )
          return (
            (resource.instance = styleProps),
            markNodeAsHoistable(styleProps),
            styleProps
          );
        instance = props;
        if ((styleProps = preloadPropsMap.get(instance$250)))
          (instance = assign({}, props)),
            adoptPreloadPropsForScript(instance, styleProps);
        hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
        styleProps = hoistableRoot.createElement("script");
        markNodeAsHoistable(styleProps);
        setInitialProperties(styleProps, "link", instance);
        hoistableRoot.head.appendChild(styleProps);
        return (resource.instance = styleProps);
      case "void":
        return null;
      default:
        throw Error(formatProdErrorMessage(443, resource.type));
    }
  else
    "stylesheet" === resource.type &&
      0 === (resource.state.loading & 4) &&
      ((instance = resource.instance),
      (resource.state.loading |= 4),
      insertStylesheet(instance, props.precedence, hoistableRoot));
  return resource.instance;
}
function insertStylesheet(instance, precedence, root) {
  for (
    var nodes = root.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ),
      last = nodes.length ? nodes[nodes.length - 1] : null,
      prior = last,
      i = 0;
    i < nodes.length;
    i++
  ) {
    var node = nodes[i];
    if (node.dataset.precedence === precedence) prior = node;
    else if (prior !== last) break;
  }
  prior
    ? prior.parentNode.insertBefore(instance, prior.nextSibling)
    : ((precedence = 9 === root.nodeType ? root.head : root),
      precedence.insertBefore(instance, precedence.firstChild));
}
function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
  null == stylesheetProps.crossOrigin &&
    (stylesheetProps.crossOrigin = preloadProps.crossOrigin);
  null == stylesheetProps.referrerPolicy &&
    (stylesheetProps.referrerPolicy = preloadProps.referrerPolicy);
  null == stylesheetProps.title && (stylesheetProps.title = preloadProps.title);
}
function adoptPreloadPropsForScript(scriptProps, preloadProps) {
  null == scriptProps.crossOrigin &&
    (scriptProps.crossOrigin = preloadProps.crossOrigin);
  null == scriptProps.referrerPolicy &&
    (scriptProps.referrerPolicy = preloadProps.referrerPolicy);
  null == scriptProps.integrity &&
    (scriptProps.integrity = preloadProps.integrity);
}
var tagCaches = null;
function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
  if (null === tagCaches) {
    var cache = new Map();
    var caches = (tagCaches = new Map());
    caches.set(ownerDocument, cache);
  } else
    (caches = tagCaches),
      (cache = caches.get(ownerDocument)),
      cache || ((cache = new Map()), caches.set(ownerDocument, cache));
  if (cache.has(type)) return cache;
  cache.set(type, null);
  ownerDocument = ownerDocument.getElementsByTagName(type);
  for (caches = 0; caches < ownerDocument.length; caches++) {
    var node = ownerDocument[caches];
    if (
      !(
        node[internalHoistableMarker] ||
        node[internalInstanceKey] ||
        ("link" === type && "stylesheet" === node.getAttribute("rel"))
      ) &&
      "http://www.w3.org/2000/svg" !== node.namespaceURI
    ) {
      var nodeKey = node.getAttribute(keyAttribute) || "";
      nodeKey = type + nodeKey;
      var existing = cache.get(nodeKey);
      existing ? existing.push(node) : cache.set(nodeKey, [node]);
    }
  }
  return cache;
}
function mountHoistable(hoistableRoot, type, instance) {
  hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
  hoistableRoot.head.insertBefore(
    instance,
    "title" === type ? hoistableRoot.querySelector("head > title") : null
  );
}
function isHostHoistableType(type, props, hostContext) {
  if (1 === hostContext || null != props.itemProp) return !1;
  switch (type) {
    case "meta":
    case "title":
      return !0;
    case "style":
      if (
        "string" !== typeof props.precedence ||
        "string" !== typeof props.href ||
        "" === props.href
      )
        break;
      return !0;
    case "link":
      if (
        "string" !== typeof props.rel ||
        "string" !== typeof props.href ||
        "" === props.href ||
        props.onLoad ||
        props.onError
      )
        break;
      switch (props.rel) {
        case "stylesheet":
          return (
            (type = props.disabled),
            "string" === typeof props.precedence && null == type
          );
        default:
          return !0;
      }
    case "script":
      if (
        props.async &&
        "function" !== typeof props.async &&
        "symbol" !== typeof props.async &&
        !props.onLoad &&
        !props.onError &&
        props.src &&
        "string" === typeof props.src
      )
        return !0;
  }
  return !1;
}
function preloadResource(resource) {
  return "stylesheet" === resource.type && 0 === (resource.state.loading & 3)
    ? !1
    : !0;
}
var suspendedState = null;
function noop() {}
function suspendResource(hoistableRoot, resource, props) {
  if (null === suspendedState) throw Error(formatProdErrorMessage(475));
  var state = suspendedState;
  if (
    "stylesheet" === resource.type &&
    ("string" !== typeof props.media ||
      !1 !== matchMedia(props.media).matches) &&
    0 === (resource.state.loading & 4)
  ) {
    if (null === resource.instance) {
      var key = getStyleKey(props.href),
        instance = hoistableRoot.querySelector(
          getStylesheetSelectorFromKey(key)
        );
      if (instance) {
        hoistableRoot = instance._p;
        null !== hoistableRoot &&
          "object" === typeof hoistableRoot &&
          "function" === typeof hoistableRoot.then &&
          (state.count++,
          (state = onUnsuspend.bind(state)),
          hoistableRoot.then(state, state));
        resource.state.loading |= 4;
        resource.instance = instance;
        markNodeAsHoistable(instance);
        return;
      }
      instance = hoistableRoot.ownerDocument || hoistableRoot;
      props = stylesheetPropsFromRawProps(props);
      (key = preloadPropsMap.get(key)) &&
        adoptPreloadPropsForStylesheet(props, key);
      instance = instance.createElement("link");
      markNodeAsHoistable(instance);
      var linkInstance = instance;
      linkInstance._p = new Promise(function (resolve, reject) {
        linkInstance.onload = resolve;
        linkInstance.onerror = reject;
      });
      setInitialProperties(instance, "link", props);
      resource.instance = instance;
    }
    null === state.stylesheets && (state.stylesheets = new Map());
    state.stylesheets.set(resource, hoistableRoot);
    (hoistableRoot = resource.state.preload) &&
      0 === (resource.state.loading & 3) &&
      (state.count++,
      (resource = onUnsuspend.bind(state)),
      hoistableRoot.addEventListener("load", resource),
      hoistableRoot.addEventListener("error", resource));
  }
}
function waitForCommitToBeReady() {
  if (null === suspendedState) throw Error(formatProdErrorMessage(475));
  var state = suspendedState;
  state.stylesheets &&
    0 === state.count &&
    insertSuspendedStylesheets(state, state.stylesheets);
  return 0 < state.count
    ? function (commit) {
        var stylesheetTimer = setTimeout(function () {
          state.stylesheets &&
            insertSuspendedStylesheets(state, state.stylesheets);
          if (state.unsuspend) {
            var unsuspend = state.unsuspend;
            state.unsuspend = null;
            unsuspend();
          }
        }, 6e4);
        state.unsuspend = commit;
        return function () {
          state.unsuspend = null;
          clearTimeout(stylesheetTimer);
        };
      }
    : null;
}
function onUnsuspend() {
  this.count--;
  if (0 === this.count)
    if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
    else if (this.unsuspend) {
      var unsuspend = this.unsuspend;
      this.unsuspend = null;
      unsuspend();
    }
}
var precedencesByRoot = null;
function insertSuspendedStylesheets(state, resources) {
  state.stylesheets = null;
  null !== state.unsuspend &&
    (state.count++,
    (precedencesByRoot = new Map()),
    resources.forEach(insertStylesheetIntoRoot, state),
    (precedencesByRoot = null),
    onUnsuspend.call(state));
}
function insertStylesheetIntoRoot(root, resource) {
  if (!(resource.state.loading & 4)) {
    var precedences = precedencesByRoot.get(root);
    if (precedences) var last = precedences.get(null);
    else {
      precedences = new Map();
      precedencesByRoot.set(root, precedences);
      for (
        var nodes = root.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ),
          i = 0;
        i < nodes.length;
        i++
      ) {
        var node = nodes[i];
        if (
          "LINK" === node.nodeName ||
          "not all" !== node.getAttribute("media")
        )
          precedences.set(node.dataset.precedence, node), (last = node);
      }
      last && precedences.set(null, last);
    }
    nodes = resource.instance;
    node = nodes.getAttribute("data-precedence");
    i = precedences.get(node) || last;
    i === last && precedences.set(null, nodes);
    precedences.set(node, nodes);
    this.count++;
    last = onUnsuspend.bind(this);
    nodes.addEventListener("load", last);
    nodes.addEventListener("error", last);
    i
      ? i.parentNode.insertBefore(nodes, i.nextSibling)
      : ((root = 9 === root.nodeType ? root.head : root),
        root.insertBefore(nodes, root.firstChild));
    resource.state.loading |= 4;
  }
}
var HostTransitionContext = {
  $$typeof: REACT_CONTEXT_TYPE,
  Provider: null,
  Consumer: null,
  _currentValue: sharedNotPendingObject,
  _currentValue2: sharedNotPendingObject,
  _threadCount: 0
};
function FiberRootNode(
  containerInfo,
  tag,
  hydrate,
  identifierPrefix,
  onUncaughtError,
  onCaughtError,
  onRecoverableError,
  formState
) {
  this.tag = 1;
  this.containerInfo = containerInfo;
  this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode =
    this.next =
    this.pendingContext =
    this.context =
    this.cancelPendingCommit =
      null;
  this.callbackPriority = 0;
  this.expirationTimes = createLaneMap(-1);
  this.entangledLanes =
    this.shellSuspendCounter =
    this.errorRecoveryDisabledLanes =
    this.expiredLanes =
    this.warmLanes =
    this.pingedLanes =
    this.suspendedLanes =
    this.pendingLanes =
      0;
  this.entanglements = createLaneMap(0);
  this.hiddenUpdates = createLaneMap(null);
  this.identifierPrefix = identifierPrefix;
  this.onUncaughtError = onUncaughtError;
  this.onCaughtError = onCaughtError;
  this.onRecoverableError = onRecoverableError;
  this.pooledCache = null;
  this.pooledCacheLanes = 0;
  this.formState = formState;
  this.incompleteTransitions = new Map();
}
function createFiberRoot(
  containerInfo,
  tag,
  hydrate,
  initialChildren,
  hydrationCallbacks,
  isStrictMode,
  identifierPrefix,
  onUncaughtError,
  onCaughtError,
  onRecoverableError,
  transitionCallbacks,
  formState
) {
  containerInfo = new FiberRootNode(
    containerInfo,
    tag,
    hydrate,
    identifierPrefix,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    formState
  );
  tag = 1;
  !0 === isStrictMode && (tag |= 24);
  isStrictMode = createFiberImplClass(3, null, null, tag);
  containerInfo.current = isStrictMode;
  isStrictMode.stateNode = containerInfo;
  tag = createCache();
  tag.refCount++;
  containerInfo.pooledCache = tag;
  tag.refCount++;
  isStrictMode.memoizedState = {
    element: initialChildren,
    isDehydrated: hydrate,
    cache: tag
  };
  initializeUpdateQueue(isStrictMode);
  return containerInfo;
}
function getContextForSubtree(parentComponent) {
  if (!parentComponent) return emptyContextObject;
  parentComponent = emptyContextObject;
  return parentComponent;
}
function updateContainerImpl(
  rootFiber,
  lane,
  element,
  container,
  parentComponent,
  callback
) {
  parentComponent = getContextForSubtree(parentComponent);
  null === container.context
    ? (container.context = parentComponent)
    : (container.pendingContext = parentComponent);
  container = createUpdate(lane);
  container.payload = { element: element };
  callback = void 0 === callback ? null : callback;
  null !== callback && (container.callback = callback);
  element = enqueueUpdate(rootFiber, container, lane);
  null !== element &&
    (scheduleUpdateOnFiber(element, rootFiber, lane),
    entangleTransitions(element, rootFiber, lane));
}
function markRetryLaneImpl(fiber, retryLane) {
  fiber = fiber.memoizedState;
  if (null !== fiber && null !== fiber.dehydrated) {
    var a = fiber.retryLane;
    fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
  }
}
function markRetryLaneIfNotHydrated(fiber, retryLane) {
  markRetryLaneImpl(fiber, retryLane);
  (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
}
function attemptContinuousHydration(fiber) {
  if (13 === fiber.tag) {
    var root = enqueueConcurrentRenderForLane(fiber, 67108864);
    null !== root && scheduleUpdateOnFiber(root, fiber, 67108864);
    markRetryLaneIfNotHydrated(fiber, 67108864);
  }
}
var _enabled = !0;
function dispatchDiscreteEvent(
  domEventName,
  eventSystemFlags,
  container,
  nativeEvent
) {
  var prevTransition = ReactSharedInternals.T;
  ReactSharedInternals.T = null;
  var previousPriority = ReactDOMSharedInternals.p;
  try {
    (ReactDOMSharedInternals.p = 2),
      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
  } finally {
    (ReactDOMSharedInternals.p = previousPriority),
      (ReactSharedInternals.T = prevTransition);
  }
}
function dispatchContinuousEvent(
  domEventName,
  eventSystemFlags,
  container,
  nativeEvent
) {
  var prevTransition = ReactSharedInternals.T;
  ReactSharedInternals.T = null;
  var previousPriority = ReactDOMSharedInternals.p;
  try {
    (ReactDOMSharedInternals.p = 8),
      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
  } finally {
    (ReactDOMSharedInternals.p = previousPriority),
      (ReactSharedInternals.T = prevTransition);
  }
}
function dispatchEvent(
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  if (_enabled) {
    var blockedOn = findInstanceBlockingEvent(nativeEvent);
    if (null === blockedOn)
      dispatchEventForPluginEventSystem(
        domEventName,
        eventSystemFlags,
        nativeEvent,
        return_targetInst,
        targetContainer
      ),
        clearIfContinuousEvent(domEventName, nativeEvent);
    else if (
      queueIfContinuousEvent(
        blockedOn,
        domEventName,
        eventSystemFlags,
        targetContainer,
        nativeEvent
      )
    )
      nativeEvent.stopPropagation();
    else if (
      (clearIfContinuousEvent(domEventName, nativeEvent),
      eventSystemFlags & 4 &&
        -1 < discreteReplayableEvents.indexOf(domEventName))
    ) {
      for (; null !== blockedOn; ) {
        var fiber = getInstanceFromNode(blockedOn);
        if (null !== fiber)
          switch (fiber.tag) {
            case 3:
              fiber = fiber.stateNode;
              if (fiber.current.memoizedState.isDehydrated) {
                var lanes = getHighestPriorityLanes(fiber.pendingLanes);
                if (0 !== lanes) {
                  var root = fiber;
                  root.pendingLanes |= 2;
                  for (root.entangledLanes |= 2; lanes; ) {
                    var lane = 1 << (31 - clz32(lanes));
                    root.entanglements[1] |= lane;
                    lanes &= ~lane;
                  }
                  ensureRootIsScheduled(fiber);
                  0 === (executionContext & 6) &&
                    ((workInProgressRootRenderTargetTime = now() + 500),
                    flushSyncWorkAcrossRoots_impl(0, !1));
                }
              }
              break;
            case 13:
              (root = enqueueConcurrentRenderForLane(fiber, 2)),
                null !== root && scheduleUpdateOnFiber(root, fiber, 2),
                flushSyncWork$1(),
                markRetryLaneIfNotHydrated(fiber, 2);
          }
        fiber = findInstanceBlockingEvent(nativeEvent);
        null === fiber &&
          dispatchEventForPluginEventSystem(
            domEventName,
            eventSystemFlags,
            nativeEvent,
            return_targetInst,
            targetContainer
          );
        if (fiber === blockedOn) break;
        blockedOn = fiber;
      }
      null !== blockedOn && nativeEvent.stopPropagation();
    } else
      dispatchEventForPluginEventSystem(
        domEventName,
        eventSystemFlags,
        nativeEvent,
        null,
        targetContainer
      );
  }
}
function findInstanceBlockingEvent(nativeEvent) {
  nativeEvent = getEventTarget(nativeEvent);
  return findInstanceBlockingTarget(nativeEvent);
}
var return_targetInst = null;
function findInstanceBlockingTarget(targetNode) {
  return_targetInst = null;
  targetNode = getClosestInstanceFromNode(targetNode);
  if (null !== targetNode) {
    var nearestMounted = getNearestMountedFiber(targetNode);
    if (null === nearestMounted) targetNode = null;
    else {
      var tag = nearestMounted.tag;
      if (13 === tag) {
        targetNode = getSuspenseInstanceFromFiber(nearestMounted);
        if (null !== targetNode) return targetNode;
        targetNode = null;
      } else if (3 === tag) {
        if (nearestMounted.stateNode.current.memoizedState.isDehydrated)
          return 3 === nearestMounted.tag
            ? nearestMounted.stateNode.containerInfo
            : null;
        targetNode = null;
      } else nearestMounted !== targetNode && (targetNode = null);
    }
  }
  return_targetInst = targetNode;
  return null;
}
function getEventPriority(domEventName) {
  switch (domEventName) {
    case "beforetoggle":
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
    case "toggle":
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
      return 2;
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
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 8;
    case "message":
      switch (getCurrentPriorityLevel()) {
        case ImmediatePriority:
          return 2;
        case UserBlockingPriority:
          return 8;
        case NormalPriority$1:
        case LowPriority:
          return 32;
        case IdlePriority:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var hasScheduledReplayAttempt = !1,
  queuedFocus = null,
  queuedDrag = null,
  queuedMouse = null,
  queuedPointers = new Map(),
  queuedPointerCaptures = new Map(),
  queuedExplicitHydrationTargets = [],
  discreteReplayableEvents =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    );
function clearIfContinuousEvent(domEventName, nativeEvent) {
  switch (domEventName) {
    case "focusin":
    case "focusout":
      queuedFocus = null;
      break;
    case "dragenter":
    case "dragleave":
      queuedDrag = null;
      break;
    case "mouseover":
    case "mouseout":
      queuedMouse = null;
      break;
    case "pointerover":
    case "pointerout":
      queuedPointers.delete(nativeEvent.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      queuedPointerCaptures.delete(nativeEvent.pointerId);
  }
}
function accumulateOrCreateContinuousQueuedReplayableEvent(
  existingQueuedEvent,
  blockedOn,
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  if (
    null === existingQueuedEvent ||
    existingQueuedEvent.nativeEvent !== nativeEvent
  )
    return (
      (existingQueuedEvent = {
        blockedOn: blockedOn,
        domEventName: domEventName,
        eventSystemFlags: eventSystemFlags,
        nativeEvent: nativeEvent,
        targetContainers: [targetContainer]
      }),
      null !== blockedOn &&
        ((blockedOn = getInstanceFromNode(blockedOn)),
        null !== blockedOn && attemptContinuousHydration(blockedOn)),
      existingQueuedEvent
    );
  existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
  blockedOn = existingQueuedEvent.targetContainers;
  null !== targetContainer &&
    -1 === blockedOn.indexOf(targetContainer) &&
    blockedOn.push(targetContainer);
  return existingQueuedEvent;
}
function queueIfContinuousEvent(
  blockedOn,
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  switch (domEventName) {
    case "focusin":
      return (
        (queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedFocus,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )),
        !0
      );
    case "dragenter":
      return (
        (queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedDrag,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )),
        !0
      );
    case "mouseover":
      return (
        (queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedMouse,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )),
        !0
      );
    case "pointerover":
      var pointerId = nativeEvent.pointerId;
      queuedPointers.set(
        pointerId,
        accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedPointers.get(pointerId) || null,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )
      );
      return !0;
    case "gotpointercapture":
      return (
        (pointerId = nativeEvent.pointerId),
        queuedPointerCaptures.set(
          pointerId,
          accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedPointerCaptures.get(pointerId) || null,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          )
        ),
        !0
      );
  }
  return !1;
}
function attemptExplicitHydrationTarget(queuedTarget) {
  var targetInst = getClosestInstanceFromNode(queuedTarget.target);
  if (null !== targetInst) {
    var nearestMounted = getNearestMountedFiber(targetInst);
    if (null !== nearestMounted)
      if (((targetInst = nearestMounted.tag), 13 === targetInst)) {
        if (
          ((targetInst = getSuspenseInstanceFromFiber(nearestMounted)),
          null !== targetInst)
        ) {
          queuedTarget.blockedOn = targetInst;
          runWithPriority(queuedTarget.priority, function () {
            if (13 === nearestMounted.tag) {
              var lane = requestUpdateLane();
              lane = getBumpedLaneForHydrationByLane(lane);
              var root = enqueueConcurrentRenderForLane(nearestMounted, lane);
              null !== root &&
                scheduleUpdateOnFiber(root, nearestMounted, lane);
              markRetryLaneIfNotHydrated(nearestMounted, lane);
            }
          });
          return;
        }
      } else if (
        3 === targetInst &&
        nearestMounted.stateNode.current.memoizedState.isDehydrated
      ) {
        queuedTarget.blockedOn =
          3 === nearestMounted.tag
            ? nearestMounted.stateNode.containerInfo
            : null;
        return;
      }
  }
  queuedTarget.blockedOn = null;
}
function attemptReplayContinuousQueuedEvent(queuedEvent) {
  if (null !== queuedEvent.blockedOn) return !1;
  for (
    var targetContainers = queuedEvent.targetContainers;
    0 < targetContainers.length;

  ) {
    var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
    if (null === nextBlockedOn) {
      nextBlockedOn = queuedEvent.nativeEvent;
      var nativeEventClone = new nextBlockedOn.constructor(
        nextBlockedOn.type,
        nextBlockedOn
      );
      currentReplayingEvent = nativeEventClone;
      nextBlockedOn.target.dispatchEvent(nativeEventClone);
      currentReplayingEvent = null;
    } else
      return (
        (targetContainers = getInstanceFromNode(nextBlockedOn)),
        null !== targetContainers &&
          attemptContinuousHydration(targetContainers),
        (queuedEvent.blockedOn = nextBlockedOn),
        !1
      );
    targetContainers.shift();
  }
  return !0;
}
function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
  attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
}
function replayUnblockedEvents() {
  hasScheduledReplayAttempt = !1;
  null !== queuedFocus &&
    attemptReplayContinuousQueuedEvent(queuedFocus) &&
    (queuedFocus = null);
  null !== queuedDrag &&
    attemptReplayContinuousQueuedEvent(queuedDrag) &&
    (queuedDrag = null);
  null !== queuedMouse &&
    attemptReplayContinuousQueuedEvent(queuedMouse) &&
    (queuedMouse = null);
  queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
  queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
}
function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
  queuedEvent.blockedOn === unblocked &&
    ((queuedEvent.blockedOn = null),
    hasScheduledReplayAttempt ||
      ((hasScheduledReplayAttempt = !0),
      Scheduler.unstable_scheduleCallback(
        Scheduler.unstable_NormalPriority,
        replayUnblockedEvents
      )));
}
var lastScheduledReplayQueue = null;
function scheduleReplayQueueIfNeeded(formReplayingQueue) {
  lastScheduledReplayQueue !== formReplayingQueue &&
    ((lastScheduledReplayQueue = formReplayingQueue),
    Scheduler.unstable_scheduleCallback(
      Scheduler.unstable_NormalPriority,
      function () {
        lastScheduledReplayQueue === formReplayingQueue &&
          (lastScheduledReplayQueue = null);
        for (var i = 0; i < formReplayingQueue.length; i += 3) {
          var form = formReplayingQueue[i],
            submitterOrAction = formReplayingQueue[i + 1],
            formData = formReplayingQueue[i + 2];
          if ("function" !== typeof submitterOrAction)
            if (null === findInstanceBlockingTarget(submitterOrAction || form))
              continue;
            else break;
          var formInst = getInstanceFromNode(form);
          null !== formInst &&
            (formReplayingQueue.splice(i, 3),
            (i -= 3),
            startHostTransition(
              formInst,
              {
                pending: !0,
                data: formData,
                method: form.method,
                action: submitterOrAction
              },
              submitterOrAction,
              formData
            ));
        }
      }
    ));
}
function retryIfBlockedOn(unblocked) {
  function unblock(queuedEvent) {
    return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
  }
  null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
  null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
  null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
  queuedPointers.forEach(unblock);
  queuedPointerCaptures.forEach(unblock);
  for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
    var queuedTarget = queuedExplicitHydrationTargets[i];
    queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
  }
  for (
    ;
    0 < queuedExplicitHydrationTargets.length &&
    ((i = queuedExplicitHydrationTargets[0]), null === i.blockedOn);

  )
    attemptExplicitHydrationTarget(i),
      null === i.blockedOn && queuedExplicitHydrationTargets.shift();
  i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
  if (null != i)
    for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
      var form = i[queuedTarget],
        submitterOrAction = i[queuedTarget + 1],
        formProps = form[internalPropsKey] || null;
      if ("function" === typeof submitterOrAction)
        formProps || scheduleReplayQueueIfNeeded(i);
      else if (formProps) {
        var action = null;
        if (submitterOrAction && submitterOrAction.hasAttribute("formAction"))
          if (
            ((form = submitterOrAction),
            (formProps = submitterOrAction[internalPropsKey] || null))
          )
            action = formProps.formAction;
          else {
            if (null !== findInstanceBlockingTarget(form)) continue;
          }
        else action = formProps.action;
        "function" === typeof action
          ? (i[queuedTarget + 1] = action)
          : (i.splice(queuedTarget, 3), (queuedTarget -= 3));
        scheduleReplayQueueIfNeeded(i);
      }
    }
}
function ReactDOMRoot(internalRoot) {
  this._internalRoot = internalRoot;
}
ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render =
  function (children) {
    var root = this._internalRoot;
    if (null === root) throw Error(formatProdErrorMessage(409));
    var current = root.current,
      lane = requestUpdateLane();
    updateContainerImpl(current, lane, children, root, null, null);
  };
ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount =
  function () {
    var root = this._internalRoot;
    if (null !== root) {
      this._internalRoot = null;
      var container = root.containerInfo;
      updateContainerImpl(root.current, 2, null, root, null, null);
      flushSyncWork$1();
      container[internalContainerInstanceKey] = null;
    }
  };
function ReactDOMHydrationRoot(internalRoot) {
  this._internalRoot = internalRoot;
}
ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function (target) {
  if (target) {
    var updatePriority = resolveUpdatePriority();
    target = { blockedOn: null, target: target, priority: updatePriority };
    for (
      var i = 0;
      i < queuedExplicitHydrationTargets.length &&
      0 !== updatePriority &&
      updatePriority < queuedExplicitHydrationTargets[i].priority;
      i++
    );
    queuedExplicitHydrationTargets.splice(i, 0, target);
    0 === i && attemptExplicitHydrationTarget(target);
  }
};
var isomorphicReactPackageVersion$jscomp$inline_1785 = React.version;
if (
  "19.1.0" !==
  isomorphicReactPackageVersion$jscomp$inline_1785
)
  throw Error(
    formatProdErrorMessage(
      527,
      isomorphicReactPackageVersion$jscomp$inline_1785,
      "19.1.0"
    )
  );
ReactDOMSharedInternals.findDOMNode = function (componentOrElement) {
  var fiber = componentOrElement._reactInternals;
  if (void 0 === fiber) {
    if ("function" === typeof componentOrElement.render)
      throw Error(formatProdErrorMessage(188));
    componentOrElement = Object.keys(componentOrElement).join(",");
    throw Error(formatProdErrorMessage(268, componentOrElement));
  }
  componentOrElement = findCurrentFiberUsingSlowPath(fiber);
  componentOrElement =
    null !== componentOrElement
      ? findCurrentHostFiberImpl(componentOrElement)
      : null;
  componentOrElement =
    null === componentOrElement ? null : componentOrElement.stateNode;
  return componentOrElement;
};
var internals$jscomp$inline_2256 = {
  bundleType: 0,
  version: "19.1.0",
  rendererPackageName: "react-dom",
  currentDispatcherRef: ReactSharedInternals,
  reconcilerVersion: "19.1.0"
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var hook$jscomp$inline_2257 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (
    !hook$jscomp$inline_2257.isDisabled &&
    hook$jscomp$inline_2257.supportsFiber
  )
    try {
      (rendererID = hook$jscomp$inline_2257.inject(
        internals$jscomp$inline_2256
      )),
        (injectedHook = hook$jscomp$inline_2257);
    } catch (err) {}
}
exports.createRoot = function (container, options) {
  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
  var isStrictMode = !1,
    identifierPrefix = "",
    onUncaughtError = defaultOnUncaughtError,
    onCaughtError = defaultOnCaughtError,
    onRecoverableError = defaultOnRecoverableError,
    transitionCallbacks = null;
  null !== options &&
    void 0 !== options &&
    (!0 === options.unstable_strictMode && (isStrictMode = !0),
    void 0 !== options.identifierPrefix &&
      (identifierPrefix = options.identifierPrefix),
    void 0 !== options.onUncaughtError &&
      (onUncaughtError = options.onUncaughtError),
    void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError),
    void 0 !== options.onRecoverableError &&
      (onRecoverableError = options.onRecoverableError),
    void 0 !== options.unstable_transitionCallbacks &&
      (transitionCallbacks = options.unstable_transitionCallbacks));
  options = createFiberRoot(
    container,
    1,
    !1,
    null,
    null,
    isStrictMode,
    identifierPrefix,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    transitionCallbacks,
    null
  );
  container[internalContainerInstanceKey] = options.current;
  listenToAllSupportedEvents(container);
  return new ReactDOMRoot(options);
};
__webpack_unused_export__ = function (container, initialChildren, options) {
  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
  var isStrictMode = !1,
    identifierPrefix = "",
    onUncaughtError = defaultOnUncaughtError,
    onCaughtError = defaultOnCaughtError,
    onRecoverableError = defaultOnRecoverableError,
    transitionCallbacks = null,
    formState = null;
  null !== options &&
    void 0 !== options &&
    (!0 === options.unstable_strictMode && (isStrictMode = !0),
    void 0 !== options.identifierPrefix &&
      (identifierPrefix = options.identifierPrefix),
    void 0 !== options.onUncaughtError &&
      (onUncaughtError = options.onUncaughtError),
    void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError),
    void 0 !== options.onRecoverableError &&
      (onRecoverableError = options.onRecoverableError),
    void 0 !== options.unstable_transitionCallbacks &&
      (transitionCallbacks = options.unstable_transitionCallbacks),
    void 0 !== options.formState && (formState = options.formState));
  initialChildren = createFiberRoot(
    container,
    1,
    !0,
    initialChildren,
    null != options ? options : null,
    isStrictMode,
    identifierPrefix,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    transitionCallbacks,
    formState
  );
  initialChildren.context = getContextForSubtree(null);
  options = initialChildren.current;
  isStrictMode = requestUpdateLane();
  isStrictMode = getBumpedLaneForHydrationByLane(isStrictMode);
  identifierPrefix = createUpdate(isStrictMode);
  identifierPrefix.callback = null;
  enqueueUpdate(options, identifierPrefix, isStrictMode);
  options = isStrictMode;
  initialChildren.current.lanes = options;
  markRootUpdated$1(initialChildren, options);
  ensureRootIsScheduled(initialChildren);
  container[internalContainerInstanceKey] = initialChildren.current;
  listenToAllSupportedEvents(container);
  return new ReactDOMHydrationRoot(initialChildren);
};
__webpack_unused_export__ = "19.1.0";


/***/ }),

/***/ 338:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) // removed by dead control flow
{}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(247);
} else // removed by dead control flow
{}


/***/ }),

/***/ 418:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(160);
} else // removed by dead control flow
{}


/***/ }),

/***/ 477:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function push(heap, node) {
  var index = heap.length;
  heap.push(node);
  a: for (; 0 < index; ) {
    var parentIndex = (index - 1) >>> 1,
      parent = heap[parentIndex];
    if (0 < compare(parent, node))
      (heap[parentIndex] = node), (heap[index] = parent), (index = parentIndex);
    else break a;
  }
}
function peek(heap) {
  return 0 === heap.length ? null : heap[0];
}
function pop(heap) {
  if (0 === heap.length) return null;
  var first = heap[0],
    last = heap.pop();
  if (last !== first) {
    heap[0] = last;
    a: for (
      var index = 0, length = heap.length, halfLength = length >>> 1;
      index < halfLength;

    ) {
      var leftIndex = 2 * (index + 1) - 1,
        left = heap[leftIndex],
        rightIndex = leftIndex + 1,
        right = heap[rightIndex];
      if (0 > compare(left, last))
        rightIndex < length && 0 > compare(right, left)
          ? ((heap[index] = right),
            (heap[rightIndex] = last),
            (index = rightIndex))
          : ((heap[index] = left),
            (heap[leftIndex] = last),
            (index = leftIndex));
      else if (rightIndex < length && 0 > compare(right, last))
        (heap[index] = right), (heap[rightIndex] = last), (index = rightIndex);
      else break a;
    }
  }
  return first;
}
function compare(a, b) {
  var diff = a.sortIndex - b.sortIndex;
  return 0 !== diff ? diff : a.id - b.id;
}
exports.unstable_now = void 0;
if ("object" === typeof performance && "function" === typeof performance.now) {
  var localPerformance = performance;
  exports.unstable_now = function () {
    return localPerformance.now();
  };
} else {
  var localDate = Date,
    initialTime = localDate.now();
  exports.unstable_now = function () {
    return localDate.now() - initialTime;
  };
}
var taskQueue = [],
  timerQueue = [],
  taskIdCounter = 1,
  currentTask = null,
  currentPriorityLevel = 3,
  isPerformingWork = !1,
  isHostCallbackScheduled = !1,
  isHostTimeoutScheduled = !1,
  needsPaint = !1,
  localSetTimeout = "function" === typeof setTimeout ? setTimeout : null,
  localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null,
  localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
function advanceTimers(currentTime) {
  for (var timer = peek(timerQueue); null !== timer; ) {
    if (null === timer.callback) pop(timerQueue);
    else if (timer.startTime <= currentTime)
      pop(timerQueue),
        (timer.sortIndex = timer.expirationTime),
        push(taskQueue, timer);
    else break;
    timer = peek(timerQueue);
  }
}
function handleTimeout(currentTime) {
  isHostTimeoutScheduled = !1;
  advanceTimers(currentTime);
  if (!isHostCallbackScheduled)
    if (null !== peek(taskQueue))
      (isHostCallbackScheduled = !0),
        isMessageLoopRunning ||
          ((isMessageLoopRunning = !0), schedulePerformWorkUntilDeadline());
    else {
      var firstTimer = peek(timerQueue);
      null !== firstTimer &&
        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
    }
}
var isMessageLoopRunning = !1,
  taskTimeoutID = -1,
  frameInterval = 5,
  startTime = -1;
function shouldYieldToHost() {
  return needsPaint
    ? !0
    : exports.unstable_now() - startTime < frameInterval
      ? !1
      : !0;
}
function performWorkUntilDeadline() {
  needsPaint = !1;
  if (isMessageLoopRunning) {
    var currentTime = exports.unstable_now();
    startTime = currentTime;
    var hasMoreWork = !0;
    try {
      a: {
        isHostCallbackScheduled = !1;
        isHostTimeoutScheduled &&
          ((isHostTimeoutScheduled = !1),
          localClearTimeout(taskTimeoutID),
          (taskTimeoutID = -1));
        isPerformingWork = !0;
        var previousPriorityLevel = currentPriorityLevel;
        try {
          b: {
            advanceTimers(currentTime);
            for (
              currentTask = peek(taskQueue);
              null !== currentTask &&
              !(
                currentTask.expirationTime > currentTime && shouldYieldToHost()
              );

            ) {
              var callback = currentTask.callback;
              if ("function" === typeof callback) {
                currentTask.callback = null;
                currentPriorityLevel = currentTask.priorityLevel;
                var continuationCallback = callback(
                  currentTask.expirationTime <= currentTime
                );
                currentTime = exports.unstable_now();
                if ("function" === typeof continuationCallback) {
                  currentTask.callback = continuationCallback;
                  advanceTimers(currentTime);
                  hasMoreWork = !0;
                  break b;
                }
                currentTask === peek(taskQueue) && pop(taskQueue);
                advanceTimers(currentTime);
              } else pop(taskQueue);
              currentTask = peek(taskQueue);
            }
            if (null !== currentTask) hasMoreWork = !0;
            else {
              var firstTimer = peek(timerQueue);
              null !== firstTimer &&
                requestHostTimeout(
                  handleTimeout,
                  firstTimer.startTime - currentTime
                );
              hasMoreWork = !1;
            }
          }
          break a;
        } finally {
          (currentTask = null),
            (currentPriorityLevel = previousPriorityLevel),
            (isPerformingWork = !1);
        }
        hasMoreWork = void 0;
      }
    } finally {
      hasMoreWork
        ? schedulePerformWorkUntilDeadline()
        : (isMessageLoopRunning = !1);
    }
  }
}
var schedulePerformWorkUntilDeadline;
if ("function" === typeof localSetImmediate)
  schedulePerformWorkUntilDeadline = function () {
    localSetImmediate(performWorkUntilDeadline);
  };
else if ("undefined" !== typeof MessageChannel) {
  var channel = new MessageChannel(),
    port = channel.port2;
  channel.port1.onmessage = performWorkUntilDeadline;
  schedulePerformWorkUntilDeadline = function () {
    port.postMessage(null);
  };
} else
  schedulePerformWorkUntilDeadline = function () {
    localSetTimeout(performWorkUntilDeadline, 0);
  };
function requestHostTimeout(callback, ms) {
  taskTimeoutID = localSetTimeout(function () {
    callback(exports.unstable_now());
  }, ms);
}
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function (task) {
  task.callback = null;
};
exports.unstable_forceFrameRate = function (fps) {
  0 > fps || 125 < fps
    ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      )
    : (frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5);
};
exports.unstable_getCurrentPriorityLevel = function () {
  return currentPriorityLevel;
};
exports.unstable_next = function (eventHandler) {
  switch (currentPriorityLevel) {
    case 1:
    case 2:
    case 3:
      var priorityLevel = 3;
      break;
    default:
      priorityLevel = currentPriorityLevel;
  }
  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;
  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
};
exports.unstable_requestPaint = function () {
  needsPaint = !0;
};
exports.unstable_runWithPriority = function (priorityLevel, eventHandler) {
  switch (priorityLevel) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      priorityLevel = 3;
  }
  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;
  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
};
exports.unstable_scheduleCallback = function (
  priorityLevel,
  callback,
  options
) {
  var currentTime = exports.unstable_now();
  "object" === typeof options && null !== options
    ? ((options = options.delay),
      (options =
        "number" === typeof options && 0 < options
          ? currentTime + options
          : currentTime))
    : (options = currentTime);
  switch (priorityLevel) {
    case 1:
      var timeout = -1;
      break;
    case 2:
      timeout = 250;
      break;
    case 5:
      timeout = 1073741823;
      break;
    case 4:
      timeout = 1e4;
      break;
    default:
      timeout = 5e3;
  }
  timeout = options + timeout;
  priorityLevel = {
    id: taskIdCounter++,
    callback: callback,
    priorityLevel: priorityLevel,
    startTime: options,
    expirationTime: timeout,
    sortIndex: -1
  };
  options > currentTime
    ? ((priorityLevel.sortIndex = options),
      push(timerQueue, priorityLevel),
      null === peek(taskQueue) &&
        priorityLevel === peek(timerQueue) &&
        (isHostTimeoutScheduled
          ? (localClearTimeout(taskTimeoutID), (taskTimeoutID = -1))
          : (isHostTimeoutScheduled = !0),
        requestHostTimeout(handleTimeout, options - currentTime)))
    : ((priorityLevel.sortIndex = timeout),
      push(taskQueue, priorityLevel),
      isHostCallbackScheduled ||
        isPerformingWork ||
        ((isHostCallbackScheduled = !0),
        isMessageLoopRunning ||
          ((isMessageLoopRunning = !0), schedulePerformWorkUntilDeadline())));
  return priorityLevel;
};
exports.unstable_shouldYield = shouldYieldToHost;
exports.unstable_wrapCallback = function (callback) {
  var parentPriorityLevel = currentPriorityLevel;
  return function () {
    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = parentPriorityLevel;
    try {
      return callback.apply(this, arguments);
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  };
};


/***/ }),

/***/ 540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(869);
} else // removed by dead control flow
{}


/***/ }),

/***/ 556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) // removed by dead control flow
{ var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(694)();
}


/***/ }),

/***/ 694:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(925);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 869:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
  REACT_MEMO_TYPE = Symbol.for("react.memo"),
  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
function getIteratorFn(maybeIterable) {
  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
  maybeIterable =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable["@@iterator"];
  return "function" === typeof maybeIterable ? maybeIterable : null;
}
var ReactNoopUpdateQueue = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  assign = Object.assign,
  emptyObject = {};
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
Component.prototype.isReactComponent = {};
Component.prototype.setState = function (partialState, callback) {
  if (
    "object" !== typeof partialState &&
    "function" !== typeof partialState &&
    null != partialState
  )
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, partialState, callback, "setState");
};
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
};
function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
pureComponentPrototype.constructor = PureComponent;
assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = !0;
var isArrayImpl = Array.isArray,
  ReactSharedInternals = { H: null, A: null, T: null, S: null, V: null },
  hasOwnProperty = Object.prototype.hasOwnProperty;
function ReactElement(type, key, self, source, owner, props) {
  self = props.ref;
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key,
    ref: void 0 !== self ? self : null,
    props: props
  };
}
function cloneAndReplaceKey(oldElement, newKey) {
  return ReactElement(
    oldElement.type,
    newKey,
    void 0,
    void 0,
    void 0,
    oldElement.props
  );
}
function isValidElement(object) {
  return (
    "object" === typeof object &&
    null !== object &&
    object.$$typeof === REACT_ELEMENT_TYPE
  );
}
function escape(key) {
  var escaperLookup = { "=": "=0", ":": "=2" };
  return (
    "$" +
    key.replace(/[=:]/g, function (match) {
      return escaperLookup[match];
    })
  );
}
var userProvidedKeyEscapeRegex = /\/+/g;
function getElementKey(element, index) {
  return "object" === typeof element && null !== element && null != element.key
    ? escape("" + element.key)
    : index.toString(36);
}
function noop$1() {}
function resolveThenable(thenable) {
  switch (thenable.status) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      throw thenable.reason;
    default:
      switch (
        ("string" === typeof thenable.status
          ? thenable.then(noop$1, noop$1)
          : ((thenable.status = "pending"),
            thenable.then(
              function (fulfilledValue) {
                "pending" === thenable.status &&
                  ((thenable.status = "fulfilled"),
                  (thenable.value = fulfilledValue));
              },
              function (error) {
                "pending" === thenable.status &&
                  ((thenable.status = "rejected"), (thenable.reason = error));
              }
            )),
        thenable.status)
      ) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
      }
  }
  throw thenable;
}
function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;
  if ("undefined" === type || "boolean" === type) children = null;
  var invokeCallback = !1;
  if (null === children) invokeCallback = !0;
  else
    switch (type) {
      case "bigint":
      case "string":
      case "number":
        invokeCallback = !0;
        break;
      case "object":
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = !0;
            break;
          case REACT_LAZY_TYPE:
            return (
              (invokeCallback = children._init),
              mapIntoArray(
                invokeCallback(children._payload),
                array,
                escapedPrefix,
                nameSoFar,
                callback
              )
            );
        }
    }
  if (invokeCallback)
    return (
      (callback = callback(children)),
      (invokeCallback =
        "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar),
      isArrayImpl(callback)
        ? ((escapedPrefix = ""),
          null != invokeCallback &&
            (escapedPrefix =
              invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
          mapIntoArray(callback, array, escapedPrefix, "", function (c) {
            return c;
          }))
        : null != callback &&
          (isValidElement(callback) &&
            (callback = cloneAndReplaceKey(
              callback,
              escapedPrefix +
                (null == callback.key ||
                (children && children.key === callback.key)
                  ? ""
                  : ("" + callback.key).replace(
                      userProvidedKeyEscapeRegex,
                      "$&/"
                    ) + "/") +
                invokeCallback
            )),
          array.push(callback)),
      1
    );
  invokeCallback = 0;
  var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
  if (isArrayImpl(children))
    for (var i = 0; i < children.length; i++)
      (nameSoFar = children[i]),
        (type = nextNamePrefix + getElementKey(nameSoFar, i)),
        (invokeCallback += mapIntoArray(
          nameSoFar,
          array,
          escapedPrefix,
          type,
          callback
        ));
  else if (((i = getIteratorFn(children)), "function" === typeof i))
    for (
      children = i.call(children), i = 0;
      !(nameSoFar = children.next()).done;

    )
      (nameSoFar = nameSoFar.value),
        (type = nextNamePrefix + getElementKey(nameSoFar, i++)),
        (invokeCallback += mapIntoArray(
          nameSoFar,
          array,
          escapedPrefix,
          type,
          callback
        ));
  else if ("object" === type) {
    if ("function" === typeof children.then)
      return mapIntoArray(
        resolveThenable(children),
        array,
        escapedPrefix,
        nameSoFar,
        callback
      );
    array = String(children);
    throw Error(
      "Objects are not valid as a React child (found: " +
        ("[object Object]" === array
          ? "object with keys {" + Object.keys(children).join(", ") + "}"
          : array) +
        "). If you meant to render a collection of children, use an array instead."
    );
  }
  return invokeCallback;
}
function mapChildren(children, func, context) {
  if (null == children) return children;
  var result = [],
    count = 0;
  mapIntoArray(children, result, "", "", function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
function lazyInitializer(payload) {
  if (-1 === payload._status) {
    var ctor = payload._result;
    ctor = ctor();
    ctor.then(
      function (moduleObject) {
        if (0 === payload._status || -1 === payload._status)
          (payload._status = 1), (payload._result = moduleObject);
      },
      function (error) {
        if (0 === payload._status || -1 === payload._status)
          (payload._status = 2), (payload._result = error);
      }
    );
    -1 === payload._status && ((payload._status = 0), (payload._result = ctor));
  }
  if (1 === payload._status) return payload._result.default;
  throw payload._result;
}
var reportGlobalError =
  "function" === typeof reportError
    ? reportError
    : function (error) {
        if (
          "object" === typeof window &&
          "function" === typeof window.ErrorEvent
        ) {
          var event = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message:
              "object" === typeof error &&
              null !== error &&
              "string" === typeof error.message
                ? String(error.message)
                : String(error),
            error: error
          });
          if (!window.dispatchEvent(event)) return;
        } else if (
          "object" === typeof process &&
          "function" === typeof process.emit
        ) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      };
function noop() {}
exports.Children = {
  map: mapChildren,
  forEach: function (children, forEachFunc, forEachContext) {
    mapChildren(
      children,
      function () {
        forEachFunc.apply(this, arguments);
      },
      forEachContext
    );
  },
  count: function (children) {
    var n = 0;
    mapChildren(children, function () {
      n++;
    });
    return n;
  },
  toArray: function (children) {
    return (
      mapChildren(children, function (child) {
        return child;
      }) || []
    );
  },
  only: function (children) {
    if (!isValidElement(children))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return children;
  }
};
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
  ReactSharedInternals;
exports.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function (size) {
    return ReactSharedInternals.H.useMemoCache(size);
  }
};
exports.cache = function (fn) {
  return function () {
    return fn.apply(null, arguments);
  };
};
exports.cloneElement = function (element, config, children) {
  if (null === element || void 0 === element)
    throw Error(
      "The argument must be a React element, but you passed " + element + "."
    );
  var props = assign({}, element.props),
    key = element.key,
    owner = void 0;
  if (null != config)
    for (propName in (void 0 !== config.ref && (owner = void 0),
    void 0 !== config.key && (key = "" + config.key),
    config))
      !hasOwnProperty.call(config, propName) ||
        "key" === propName ||
        "__self" === propName ||
        "__source" === propName ||
        ("ref" === propName && void 0 === config.ref) ||
        (props[propName] = config[propName]);
  var propName = arguments.length - 2;
  if (1 === propName) props.children = children;
  else if (1 < propName) {
    for (var childArray = Array(propName), i = 0; i < propName; i++)
      childArray[i] = arguments[i + 2];
    props.children = childArray;
  }
  return ReactElement(element.type, key, void 0, void 0, owner, props);
};
exports.createContext = function (defaultValue) {
  defaultValue = {
    $$typeof: REACT_CONTEXT_TYPE,
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  defaultValue.Provider = defaultValue;
  defaultValue.Consumer = {
    $$typeof: REACT_CONSUMER_TYPE,
    _context: defaultValue
  };
  return defaultValue;
};
exports.createElement = function (type, config, children) {
  var propName,
    props = {},
    key = null;
  if (null != config)
    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
      hasOwnProperty.call(config, propName) &&
        "key" !== propName &&
        "__self" !== propName &&
        "__source" !== propName &&
        (props[propName] = config[propName]);
  var childrenLength = arguments.length - 2;
  if (1 === childrenLength) props.children = children;
  else if (1 < childrenLength) {
    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
      childArray[i] = arguments[i + 2];
    props.children = childArray;
  }
  if (type && type.defaultProps)
    for (propName in ((childrenLength = type.defaultProps), childrenLength))
      void 0 === props[propName] &&
        (props[propName] = childrenLength[propName]);
  return ReactElement(type, key, void 0, void 0, null, props);
};
exports.createRef = function () {
  return { current: null };
};
exports.forwardRef = function (render) {
  return { $$typeof: REACT_FORWARD_REF_TYPE, render: render };
};
exports.isValidElement = isValidElement;
exports.lazy = function (ctor) {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _payload: { _status: -1, _result: ctor },
    _init: lazyInitializer
  };
};
exports.memo = function (type, compare) {
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: void 0 === compare ? null : compare
  };
};
exports.startTransition = function (scope) {
  var prevTransition = ReactSharedInternals.T,
    currentTransition = {};
  ReactSharedInternals.T = currentTransition;
  try {
    var returnValue = scope(),
      onStartTransitionFinish = ReactSharedInternals.S;
    null !== onStartTransitionFinish &&
      onStartTransitionFinish(currentTransition, returnValue);
    "object" === typeof returnValue &&
      null !== returnValue &&
      "function" === typeof returnValue.then &&
      returnValue.then(noop, reportGlobalError);
  } catch (error) {
    reportGlobalError(error);
  } finally {
    ReactSharedInternals.T = prevTransition;
  }
};
exports.unstable_useCacheRefresh = function () {
  return ReactSharedInternals.H.useCacheRefresh();
};
exports.use = function (usable) {
  return ReactSharedInternals.H.use(usable);
};
exports.useActionState = function (action, initialState, permalink) {
  return ReactSharedInternals.H.useActionState(action, initialState, permalink);
};
exports.useCallback = function (callback, deps) {
  return ReactSharedInternals.H.useCallback(callback, deps);
};
exports.useContext = function (Context) {
  return ReactSharedInternals.H.useContext(Context);
};
exports.useDebugValue = function () {};
exports.useDeferredValue = function (value, initialValue) {
  return ReactSharedInternals.H.useDeferredValue(value, initialValue);
};
exports.useEffect = function (create, createDeps, update) {
  var dispatcher = ReactSharedInternals.H;
  if ("function" === typeof update)
    throw Error(
      "useEffect CRUD overload is not enabled in this build of React."
    );
  return dispatcher.useEffect(create, createDeps);
};
exports.useId = function () {
  return ReactSharedInternals.H.useId();
};
exports.useImperativeHandle = function (ref, create, deps) {
  return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
};
exports.useInsertionEffect = function (create, deps) {
  return ReactSharedInternals.H.useInsertionEffect(create, deps);
};
exports.useLayoutEffect = function (create, deps) {
  return ReactSharedInternals.H.useLayoutEffect(create, deps);
};
exports.useMemo = function (create, deps) {
  return ReactSharedInternals.H.useMemo(create, deps);
};
exports.useOptimistic = function (passthrough, reducer) {
  return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
};
exports.useReducer = function (reducer, initialArg, init) {
  return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
};
exports.useRef = function (initialValue) {
  return ReactSharedInternals.H.useRef(initialValue);
};
exports.useState = function (initialState) {
  return ReactSharedInternals.H.useState(initialState);
};
exports.useSyncExternalStore = function (
  subscribe,
  getSnapshot,
  getServerSnapshot
) {
  return ReactSharedInternals.H.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
};
exports.useTransition = function () {
  return ReactSharedInternals.H.useTransition();
};
exports.version = "19.1.0";


/***/ }),

/***/ 925:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) // removed by dead control flow
{}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(221);
} else // removed by dead control flow
{}


/***/ }),

/***/ 982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(477);
} else // removed by dead control flow
{}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(338);
// EXTERNAL MODULE: ./node_modules/use-sync-external-store/with-selector.js
var with_selector = __webpack_require__(418);
;// ./node_modules/react-redux/dist/react-redux.mjs
// src/utils/react.ts


// src/utils/react-is.ts
var IS_REACT_19 = /* @__PURE__ */ (/* unused pure expression or super */ null && (React.version.startsWith("19")));
var REACT_ELEMENT_TYPE = /* @__PURE__ */ (/* unused pure expression or super */ null && (Symbol.for(
  IS_REACT_19 ? "react.transitional.element" : "react.element"
)));
var REACT_PORTAL_TYPE = /* @__PURE__ */ (/* unused pure expression or super */ null && (Symbol.for("react.portal")));
var REACT_FRAGMENT_TYPE = /* @__PURE__ */ (/* unused pure expression or super */ null && (Symbol.for("react.fragment")));
var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ (/* unused pure expression or super */ null && (Symbol.for("react.strict_mode")));
var REACT_PROFILER_TYPE = /* @__PURE__ */ (/* unused pure expression or super */ null && (Symbol.for("react.profiler")));
var REACT_CONSUMER_TYPE = /* @__PURE__ */ (/* unused pure expression or super */ null && (Symbol.for("react.consumer")));
var REACT_CONTEXT_TYPE = /* @__PURE__ */ (/* unused pure expression or super */ null && (Symbol.for("react.context")));
var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
var REACT_SUSPENSE_TYPE = /* @__PURE__ */ (/* unused pure expression or super */ null && (Symbol.for("react.suspense")));
var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ (/* unused pure expression or super */ null && (Symbol.for(
  "react.suspense_list"
)));
var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
var REACT_LAZY_TYPE = /* @__PURE__ */ (/* unused pure expression or super */ null && (Symbol.for("react.lazy")));
var REACT_OFFSCREEN_TYPE = /* @__PURE__ */ (/* unused pure expression or super */ null && (Symbol.for("react.offscreen")));
var REACT_CLIENT_REFERENCE = /* @__PURE__ */ (/* unused pure expression or super */ null && (Symbol.for(
  "react.client.reference"
)));
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Memo = REACT_MEMO_TYPE;
function isValidElementType(type) {
  return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || type.getModuleId !== void 0) ? true : false;
}
function typeOf(object) {
  if (typeof object === "object" && object !== null) {
    const { $$typeof } = object;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        switch (object = object.type, object) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return object;
          default:
            switch (object = object && object.$$typeof, object) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
                return object;
              case REACT_CONSUMER_TYPE:
                return object;
              default:
                return $$typeof;
            }
        }
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }
}
function isContextConsumer(object) {
  return IS_REACT_19 ? typeOf(object) === REACT_CONSUMER_TYPE : typeOf(object) === REACT_CONTEXT_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}

// src/utils/warning.ts
function warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {
  }
}

// src/connect/verifySubselectors.ts
function verify(selector, methodName) {
  if (!selector) {
    throw new Error(`Unexpected value for ${methodName} in connect.`);
  } else if (methodName === "mapStateToProps" || methodName === "mapDispatchToProps") {
    if (!Object.prototype.hasOwnProperty.call(selector, "dependsOnOwnProps")) {
      warning(
        `The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`
      );
    }
  }
}
function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
  verify(mapStateToProps, "mapStateToProps");
  verify(mapDispatchToProps, "mapDispatchToProps");
  verify(mergeProps, "mergeProps");
}

// src/connect/selectorFactory.ts
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, {
  areStatesEqual,
  areOwnPropsEqual,
  areStatePropsEqual
}) {
  let hasRunAtLeastOnce = false;
  let state;
  let ownProps;
  let stateProps;
  let dispatchProps;
  let mergedProps;
  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }
  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps)
      stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewState() {
    const nextStateProps = mapStateToProps(state, ownProps);
    const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged)
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleSubsequentCalls(nextState, nextOwnProps) {
    const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    const stateChanged = !areStatesEqual(
      nextState,
      state,
      nextOwnProps,
      ownProps
    );
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }
  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
function finalPropsSelectorFactory(dispatch, {
  initMapStateToProps,
  initMapDispatchToProps,
  initMergeProps,
  ...options
}) {
  const mapStateToProps = initMapStateToProps(dispatch, options);
  const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  const mergeProps = initMergeProps(dispatch, options);
  if (false) // removed by dead control flow
{}
  return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

// src/utils/bindActionCreators.ts
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
    }
  }
  return boundActionCreators;
}

// src/utils/isPlainObject.ts
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  const proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  let baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}

// src/utils/verifyPlainObject.ts
function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject(value)) {
    warning(
      `${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`
    );
  }
}

// src/connect/wrapMapToProps.ts
function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch) {
    const constant = getConstant(dispatch);
    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, { displayName }) {
    const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, void 0);
    };
    proxy.dependsOnOwnProps = true;
    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      let props = proxy(stateOrDispatch, ownProps);
      if (typeof props === "function") {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }
      if (false)
        // removed by dead control flow
{}
      return props;
    };
    return proxy;
  };
}

// src/connect/invalidArgFactory.ts
function createInvalidArgFactory(arg, name) {
  return (dispatch, options) => {
    throw new Error(
      `Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`
    );
  };
}

// src/connect/mapDispatchToProps.ts
function mapDispatchToPropsFactory(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === "object" ? wrapMapToPropsConstant(
    (dispatch) => (
      // @ts-ignore
      bindActionCreators(mapDispatchToProps, dispatch)
    )
  ) : !mapDispatchToProps ? wrapMapToPropsConstant((dispatch) => ({
    dispatch
  })) : typeof mapDispatchToProps === "function" ? (
    // @ts-ignore
    wrapMapToPropsFunc(mapDispatchToProps, "mapDispatchToProps")
  ) : createInvalidArgFactory(mapDispatchToProps, "mapDispatchToProps");
}

// src/connect/mapStateToProps.ts
function mapStateToPropsFactory(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(() => ({})) : typeof mapStateToProps === "function" ? (
    // @ts-ignore
    wrapMapToPropsFunc(mapStateToProps, "mapStateToProps")
  ) : createInvalidArgFactory(mapStateToProps, "mapStateToProps");
}

// src/connect/mergeProps.ts
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return { ...ownProps, ...stateProps, ...dispatchProps };
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, { displayName, areMergedPropsEqual }) {
    let hasRunOnce = false;
    let mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      if (hasRunOnce) {
        if (!areMergedPropsEqual(nextMergedProps, mergedProps))
          mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (false)
          // removed by dead control flow
{}
      }
      return mergedProps;
    };
  };
}
function mergePropsFactory(mergeProps) {
  return !mergeProps ? () => defaultMergeProps : typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : createInvalidArgFactory(mergeProps, "mergeProps");
}

// src/utils/batch.ts
function defaultNoopBatch(callback) {
  callback();
}

// src/utils/Subscription.ts
function createListenerCollection() {
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      defaultNoopBatch(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get() {
      const listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      const listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  let subscriptionsAmount = 0;
  let selfSubscribed = false;
  function addNestedSub(listener) {
    trySubscribe();
    const cleanupListener = listeners.subscribe(listener);
    let removed = false;
    return () => {
      if (!removed) {
        removed = true;
        cleanupListener();
        tryUnsubscribe();
      }
    };
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return selfSubscribed;
  }
  function trySubscribe() {
    subscriptionsAmount++;
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    subscriptionsAmount--;
    if (unsubscribe && subscriptionsAmount === 0) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  function trySubscribeSelf() {
    if (!selfSubscribed) {
      selfSubscribed = true;
      trySubscribe();
    }
  }
  function tryUnsubscribeSelf() {
    if (selfSubscribed) {
      selfSubscribed = false;
      tryUnsubscribe();
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe: trySubscribeSelf,
    tryUnsubscribe: tryUnsubscribeSelf,
    getListeners: () => listeners
  };
  return subscription;
}

// src/utils/useIsomorphicLayoutEffect.ts
var canUseDOM = () => !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isDOM = /* @__PURE__ */ canUseDOM();
var isRunningInReactNative = () => typeof navigator !== "undefined" && navigator.product === "ReactNative";
var isReactNative = /* @__PURE__ */ isRunningInReactNative();
var getUseIsomorphicLayoutEffect = () => isDOM || isReactNative ? react.useLayoutEffect : react.useEffect;
var useIsomorphicLayoutEffect = /* @__PURE__ */ getUseIsomorphicLayoutEffect();

// src/utils/shallowEqual.ts
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}

// src/utils/hoistStatics.ts
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {
  [ForwardRef]: FORWARD_REF_STATICS,
  [Memo]: MEMO_STATICS
};
function getStatics(component) {
  if (isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      const inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent);
      }
    }
    let keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    const targetStatics = getStatics(targetComponent);
    const sourceStatics = getStatics(sourceComponent);
    for (let i = 0; i < keys.length; ++i) {
      const key = keys[i];
      if (!KNOWN_STATICS[key] && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        const descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {
        }
      }
    }
  }
  return targetComponent;
}

// src/components/Context.ts
var ContextKey = /* @__PURE__ */ Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function getContext() {
  if (!react.createContext) return {};
  const contextMap = gT[ContextKey] ??= /* @__PURE__ */ new Map();
  let realContext = contextMap.get(react.createContext);
  if (!realContext) {
    realContext = react.createContext(
      null
    );
    if (false) // removed by dead control flow
{}
    contextMap.set(react.createContext, realContext);
  }
  return realContext;
}
var ReactReduxContext = /* @__PURE__ */ getContext();

// src/components/connect.tsx
var NO_SUBSCRIPTION_ARRAY = (/* unused pure expression or super */ null && ([null, null]));
var stringifyComponent = (Comp) => {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect(() => effectFunc(...effectArgs), dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false;
  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, additionalSubscribeListener) {
  if (!shouldHandleStateChanges) return () => {
  };
  let didUnsubscribe = false;
  let lastThrownError = null;
  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      return;
    }
    const latestStoreState = store.getState();
    let newChildProps, error;
    try {
      newChildProps = childPropsSelector(
        latestStoreState,
        lastWrapperProps.current
      );
    } catch (e) {
      error = e;
      lastThrownError = e;
    }
    if (!error) {
      lastThrownError = null;
    }
    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true;
      additionalSubscribeListener();
    }
  };
  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe();
  checkForUpdates();
  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;
    if (lastThrownError) {
      throw lastThrownError;
    }
  };
  return unsubscribeWrapper;
}
function strictEqual(a, b) {
  return a === b;
}
var hasWarnedAboutDeprecatedPureOption = false;
function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = shallowEqual,
  areStatePropsEqual = shallowEqual,
  areMergedPropsEqual = shallowEqual,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = ReactReduxContext
} = {}) {
  if (false) // removed by dead control flow
{}
  const Context = context;
  const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
  const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
  const initMergeProps = mergePropsFactory(mergeProps);
  const shouldHandleStateChanges = Boolean(mapStateToProps);
  const wrapWithConnect = (WrappedComponent) => {
    if (false) // removed by dead control flow
{}
    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    const displayName = `Connect(${wrappedComponentName})`;
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };
    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = React.useMemo(() => {
        const { reactReduxForwardedRef: reactReduxForwardedRef2, ...wrapperProps2 } = props;
        return [props.context, reactReduxForwardedRef2, wrapperProps2];
      }, [props]);
      const ContextToUse = React.useMemo(() => {
        let ResultContext = Context;
        if (propsContext?.Consumer) {
          if (false) // removed by dead control flow
{}
        }
        return ResultContext;
      }, [propsContext, Context]);
      const contextValue = React.useContext(ContextToUse);
      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
      if (false) // removed by dead control flow
{}
      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = React.useMemo(() => {
        return finalPropsSelectorFactory(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = React.useMemo(() => {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY;
        const subscription2 = createSubscription(
          store,
          didStoreComeFromProps ? void 0 : contextValue.subscription
        );
        const notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
        return [subscription2, notifyNestedSubs2];
      }, [store, didStoreComeFromProps, contextValue]);
      const overriddenContextValue = React.useMemo(() => {
        if (didStoreComeFromProps) {
          return contextValue;
        }
        return {
          ...contextValue,
          subscription
        };
      }, [didStoreComeFromProps, contextValue, subscription]);
      const lastChildProps = React.useRef(void 0);
      const lastWrapperProps = React.useRef(wrapperProps);
      const childPropsFromStoreUpdate = React.useRef(void 0);
      const renderIsScheduled = React.useRef(false);
      const isMounted = React.useRef(false);
      const latestSubscriptionCallbackError = React.useRef(
        void 0
      );
      useIsomorphicLayoutEffect(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = React.useMemo(() => {
        const selector = () => {
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          }
          return childPropsSelector(store.getState(), wrapperProps);
        };
        return selector;
      }, [store, wrapperProps]);
      const subscribeForReact = React.useMemo(() => {
        const subscribe = (reactListener) => {
          if (!subscription) {
            return () => {
            };
          }
          return subscribeUpdates(
            shouldHandleStateChanges,
            store,
            subscription,
            // @ts-ignore
            childPropsSelector,
            lastWrapperProps,
            lastChildProps,
            renderIsScheduled,
            isMounted,
            childPropsFromStoreUpdate,
            notifyNestedSubs,
            reactListener
          );
        };
        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [
        lastWrapperProps,
        lastChildProps,
        renderIsScheduled,
        wrapperProps,
        childPropsFromStoreUpdate,
        notifyNestedSubs
      ]);
      let actualChildProps;
      try {
        actualChildProps = React.useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          subscribeForReact,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          actualChildPropsSelector,
          getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector
        );
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          ;
          err.message += `
The error may be correlated with this previous error:
${latestSubscriptionCallbackError.current.stack}

`;
        }
        throw err;
      }
      useIsomorphicLayoutEffect(() => {
        latestSubscriptionCallbackError.current = void 0;
        childPropsFromStoreUpdate.current = void 0;
        lastChildProps.current = actualChildProps;
      });
      const renderedWrappedComponent = React.useMemo(() => {
        return (
          // @ts-ignore
          /* @__PURE__ */ React.createElement(
            WrappedComponent,
            {
              ...actualChildProps,
              ref: reactReduxForwardedRef
            }
          )
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]);
      const renderedChild = React.useMemo(() => {
        if (shouldHandleStateChanges) {
          return /* @__PURE__ */ React.createElement(ContextToUse.Provider, { value: overriddenContextValue }, renderedWrappedComponent);
        }
        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }
    const _Connect = React.memo(ConnectFunction);
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;
    if (forwardRef) {
      const _forwarded = React.forwardRef(
        function forwardConnectRef(props, ref) {
          return /* @__PURE__ */ React.createElement(Connect, { ...props, reactReduxForwardedRef: ref });
        }
      );
      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return /* @__PURE__ */ hoistNonReactStatics(forwarded, WrappedComponent);
    }
    return /* @__PURE__ */ hoistNonReactStatics(Connect, WrappedComponent);
  };
  return wrapWithConnect;
}
var connect_default = (/* unused pure expression or super */ null && (connect));

// src/components/Provider.tsx
function Provider(providerProps) {
  const { children, context, serverState, store } = providerProps;
  const contextValue = react.useMemo(() => {
    const subscription = createSubscription(store);
    const baseContextValue = {
      store,
      subscription,
      getServerState: serverState ? () => serverState : void 0
    };
    if (true) {
      return baseContextValue;
    } else // removed by dead control flow
{}
  }, [store, serverState]);
  const previousState = react.useMemo(() => store.getState(), [store]);
  useIsomorphicLayoutEffect(() => {
    const { subscription } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext;
  return /* @__PURE__ */ react.createElement(Context.Provider, { value: contextValue }, children);
}
var Provider_default = Provider;

// src/hooks/useReduxContext.ts
function createReduxContextHook(context = ReactReduxContext) {
  return function useReduxContext2() {
    const contextValue = react.useContext(context);
    if (false) // removed by dead control flow
{}
    return contextValue;
  };
}
var useReduxContext = /* @__PURE__ */ createReduxContextHook();

// src/hooks/useStore.ts
function createStoreHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : (
    // @ts-ignore
    createReduxContextHook(context)
  );
  const useStore2 = () => {
    const { store } = useReduxContext2();
    return store;
  };
  Object.assign(useStore2, {
    withTypes: () => useStore2
  });
  return useStore2;
}
var useStore = /* @__PURE__ */ createStoreHook();

// src/hooks/useDispatch.ts
function createDispatchHook(context = ReactReduxContext) {
  const useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
  const useDispatch2 = () => {
    const store = useStore2();
    return store.dispatch;
  };
  Object.assign(useDispatch2, {
    withTypes: () => useDispatch2
  });
  return useDispatch2;
}
var useDispatch = /* @__PURE__ */ createDispatchHook();

// src/hooks/useSelector.ts

var refEquality = (a, b) => a === b;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
  const useSelector2 = (selector, equalityFnOrOptions = {}) => {
    const { equalityFn = refEquality } = typeof equalityFnOrOptions === "function" ? { equalityFn: equalityFnOrOptions } : equalityFnOrOptions;
    if (false) // removed by dead control flow
{}
    const reduxContext = useReduxContext2();
    const { store, subscription, getServerState } = reduxContext;
    const firstRun = react.useRef(true);
    const wrappedSelector = react.useCallback(
      {
        [selector.name](state) {
          const selected = selector(state);
          if (false) // removed by dead control flow
{}
          return selected;
        }
      }[selector.name],
      [selector]
    );
    const selectedState = (0,with_selector.useSyncExternalStoreWithSelector)(
      subscription.addNestedSub,
      store.getState,
      getServerState || store.getState,
      wrappedSelector,
      equalityFn
    );
    react.useDebugValue(selectedState);
    return selectedState;
  };
  Object.assign(useSelector2, {
    withTypes: () => useSelector2
  });
  return useSelector2;
}
var useSelector = /* @__PURE__ */ createSelectorHook();

// src/exports.ts
var batch = (/* unused pure expression or super */ null && (defaultNoopBatch));

//# sourceMappingURL=react-redux.mjs.map
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// ./src/components/Controls.js


var Controls = function Controls(_ref) {
  var increment = _ref.increment,
    decrement = _ref.decrement,
    reset = _ref.reset,
    resetLabel = _ref.resetLabel,
    incrementLabel = _ref.incrementLabel,
    decrementLabel = _ref.decrementLabel;
  return /*#__PURE__*/react.createElement("div", {
    className: "controls"
  }, /*#__PURE__*/react.createElement("div", {
    onClick: increment
  }, /*#__PURE__*/react.createElement("span", null, incrementLabel)), /*#__PURE__*/react.createElement("div", {
    onClick: reset
  }, /*#__PURE__*/react.createElement("span", null, resetLabel)), /*#__PURE__*/react.createElement("div", {
    onClick: decrement
  }, /*#__PURE__*/react.createElement("span", null, decrementLabel)));
};
Controls.propTypes = {
  increment: (prop_types_default()).func.isRequired,
  decrement: (prop_types_default()).func.isRequired,
  reset: (prop_types_default()).func.isRequired,
  resetLabel: (prop_types_default()).string,
  incrementLabel: (prop_types_default()).string,
  decrementLabel: (prop_types_default()).string
};
Controls.defaultProps = {
  resetLabel: "RESET",
  incrementLabel: "+",
  decrementLabel: "-"
};
/* harmony default export */ const components_Controls = (Controls);
;// ./src/constants/ActionTypes.js
// ActionTypes are defined in constants.

// They are imported in Actions and Reducers.
// This prevents errors if they are misspelled over here.

/* eslint-disable */

var INCREMENT_NUM = "INCREMENT_NUM";
var DECREMENT_NUM = "DECREMENT_NUM";
var RESET = "RESET";

/* eslint-enable */
;// ./src/actions/counterActions.js
// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store.

// Actions are triggered either by user through interactions or by an events, such as successful AJAX call.

// Read more on Actions - https://redux.js.org/docs/basics/Actions.html


function incrementNum(payload) {
  return {
    type: INCREMENT_NUM,
    payload: payload
  };
}
function decrementNum(payload) {
  return {
    type: DECREMENT_NUM,
    payload: payload
  };
}
function resetCounter(payload) {
  return {
    type: RESET,
    payload: payload
  };
}
;// ./src/containers/Controls.js




var ControlsContainer = function ControlsContainer() {
  var dispatch = useDispatch();
  var increment = function increment() {
    dispatch(incrementNum());
  };
  var decrement = function decrement() {
    dispatch(decrementNum());
  };
  var reset = function reset() {
    dispatch(resetCounter());
  };
  return /*#__PURE__*/react.createElement(components_Controls, {
    increment: increment,
    decrement: decrement,
    reset: reset
  });
};
/* harmony default export */ const containers_Controls = (ControlsContainer);
;// ./src/components/Counter.js



var Counter = function Counter(_ref) {
  var count = _ref.count;
  return /*#__PURE__*/react.createElement("div", {
    className: "counter"
  }, /*#__PURE__*/react.createElement("div", null, count), /*#__PURE__*/react.createElement(containers_Controls, null), /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/Gigacore/React-Redux-Sass-Starter"
  }, "Fork it on Github")));
};
Counter.propTypes = {
  count: (prop_types_default()).number.isRequired
};
/* harmony default export */ const components_Counter = (Counter);
;// ./src/containers/Counter.js



var CounterContainer = function CounterContainer() {
  var count = useSelector(function (state) {
    return state.count;
  });
  return /*#__PURE__*/react.createElement(components_Counter, {
    count: count
  });
};
/* harmony default export */ const containers_Counter = (CounterContainer);
;// ./src/App.js


var App = function App() {
  return /*#__PURE__*/react.createElement(containers_Counter, null);
};
/* harmony default export */ const src_App = (App);
;// ./node_modules/redux/dist/redux.mjs
// src/utils/formatProdErrorMessage.ts
function formatProdErrorMessage(code) {
  return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}

// src/utils/symbol-observable.ts
var $$observable = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;

// src/utils/actionTypes.ts
var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
  INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
var actionTypes_default = ActionTypes;

// src/utils/isPlainObject.ts
function redux_isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}

// src/utils/kindOf.ts
function miniKindOf(val) {
  if (val === void 0)
    return "undefined";
  if (val === null)
    return "null";
  const type = typeof val;
  switch (type) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function": {
      return type;
    }
  }
  if (Array.isArray(val))
    return "array";
  if (isDate(val))
    return "date";
  if (isError(val))
    return "error";
  const constructorName = ctorName(val);
  switch (constructorName) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return constructorName;
  }
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
  return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
  return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
  if (val instanceof Date)
    return true;
  return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
  let typeOfVal = typeof val;
  if (false) // removed by dead control flow
{}
  return typeOfVal;
}

// src/createStore.ts
function createStore(reducer, preloadedState, enhancer) {
  if (typeof reducer !== "function") {
    throw new Error( true ? formatProdErrorMessage(2) : 0);
  }
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error( true ? formatProdErrorMessage(0) : 0);
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error( true ? formatProdErrorMessage(1) : 0);
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = /* @__PURE__ */ new Map();
  let nextListeners = currentListeners;
  let listenerIdCounter = 0;
  let isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = /* @__PURE__ */ new Map();
      currentListeners.forEach((listener, key) => {
        nextListeners.set(key, listener);
      });
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : 0);
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error( true ? formatProdErrorMessage(4) : 0);
    }
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : 0);
    }
    let isSubscribed = true;
    ensureCanMutateNextListeners();
    const listenerId = listenerIdCounter++;
    nextListeners.set(listenerId, listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : 0);
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      nextListeners.delete(listenerId);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!redux_isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : 0);
    }
    if (typeof action.type === "undefined") {
      throw new Error( true ? formatProdErrorMessage(8) : 0);
    }
    if (typeof action.type !== "string") {
      throw new Error( true ? formatProdErrorMessage(17) : 0);
    }
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : 0);
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    const listeners = currentListeners = nextListeners;
    listeners.forEach((listener) => {
      listener();
    });
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error( true ? formatProdErrorMessage(10) : 0);
    }
    currentReducer = nextReducer;
    dispatch({
      type: actionTypes_default.REPLACE
    });
  }
  function observable() {
    const outerSubscribe = subscribe;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : 0);
        }
        function observeState() {
          const observerAsObserver = observer;
          if (observerAsObserver.next) {
            observerAsObserver.next(getState());
          }
        }
        observeState();
        const unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      },
      [symbol_observable_default]() {
        return this;
      }
    };
  }
  dispatch({
    type: actionTypes_default.INIT
  });
  const store = {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [symbol_observable_default]: observable
  };
  return store;
}
function legacy_createStore(reducer, preloadedState, enhancer) {
  return createStore(reducer, preloadedState, enhancer);
}

// src/utils/warning.ts
function redux_warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {
  }
}

// src/combineReducers.ts
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  const reducerKeys = Object.keys(reducers);
  const argumentName = action && action.type === actionTypes_default.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (reducerKeys.length === 0) {
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  }
  if (!redux_isPlainObject(inputState)) {
    return `The ${argumentName} has unexpected type of "${kindOf(inputState)}". Expected argument to be an object with the following keys: "${reducerKeys.join('", "')}"`;
  }
  const unexpectedKeys = Object.keys(inputState).filter((key) => !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key]);
  unexpectedKeys.forEach((key) => {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === actionTypes_default.REPLACE)
    return;
  if (unexpectedKeys.length > 0) {
    return `Unexpected ${unexpectedKeys.length > 1 ? "keys" : "key"} "${unexpectedKeys.join('", "')}" found in ${argumentName}. Expected to find one of the known reducer keys instead: "${reducerKeys.join('", "')}". Unexpected keys will be ignored.`;
  }
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach((key) => {
    const reducer = reducers[key];
    const initialState = reducer(void 0, {
      type: actionTypes_default.INIT
    });
    if (typeof initialState === "undefined") {
      throw new Error( true ? formatProdErrorMessage(12) : 0);
    }
    if (typeof reducer(void 0, {
      type: actionTypes_default.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error( true ? formatProdErrorMessage(13) : 0);
    }
  });
}
function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (false) // removed by dead control flow
{}
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);
  let unexpectedKeyCache;
  if (false) // removed by dead control flow
{}
  let shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }
  return function combination(state = {}, action) {
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    if (false) // removed by dead control flow
{}
    let hasChanged = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        const actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : 0);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

// src/bindActionCreators.ts
function bindActionCreator(actionCreator, dispatch) {
  return function(...args) {
    return dispatch(actionCreator.apply(this, args));
  };
}
function redux_bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : 0);
  }
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

// src/compose.ts
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

// src/applyMiddleware.ts
function applyMiddleware(...middlewares) {
  return (createStore2) => (reducer, preloadedState) => {
    const store = createStore2(reducer, preloadedState);
    let dispatch = () => {
      throw new Error( true ? formatProdErrorMessage(15) : 0);
    };
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    };
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch
    };
  };
}

// src/utils/isAction.ts
function isAction(action) {
  return redux_isPlainObject(action) && "type" in action && typeof action.type === "string";
}

//# sourceMappingURL=redux.mjs.map
;// ./src/reducers/counter.js
// Reducers receive information from Actions in the form of "Type" and "Payload".
// And they perform a task or execute a fuction accordingly.

// For example, on receiving action type of "INCREMENT_NUM",
// the reducer function will increment the value stored in state, which is 0 initially.

// Read more on Reducers - https://redux.js.org/docs/basics/Reducers.html


function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case INCREMENT_NUM:
      return state + 1;
    case DECREMENT_NUM:
      return state - 1;
    case RESET:
      return state = action.payload;
  }
  return state;
}
;// ./src/reducers/index.js
// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.


// import secondCounter from './exampleReducer';

/* harmony default export */ const reducers = (combineReducers({
  count: reducer
}));

// Example for combining multiple reducers:
// export default combineReducers({ count, secondCounter });
;// ./src/store.js

 // Gets the State from the reducer(s)

var store = createStore(reducers); // Creates the store from the State received from the reducer(s)

/* harmony default export */ const src_store = (store);
;// ./src/index.js
/* global document */






var container = document.getElementById("root");
var root = (0,client.createRoot)(container);
root.render(/*#__PURE__*/react.createElement(Provider_default, {
  store: src_store
}, /*#__PURE__*/react.createElement(src_App, null)));
})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
// extracted by mini-css-extract-plugin

})();

/******/ })()
;