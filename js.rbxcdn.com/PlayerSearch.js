!(function () {
  var e = {
      448: function (e, t, r) {
        var n = { "./cardLabels.js": 837, "./playerSearchConstants.js": 64 };
        function a(e) {
          var t = i(e);
          return r(t);
        }
        function i(e) {
          if (!r.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return n[e];
        }
        ((a.keys = function () {
          return Object.keys(n);
        }),
          (a.resolve = i),
          (e.exports = a),
          (a.id = 448));
      },
      860: function (e, t, r) {
        var n = { "./playerSearchController.js": 956 };
        function a(e) {
          var t = i(e);
          return r(t);
        }
        function i(e) {
          if (!r.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return n[e];
        }
        ((a.keys = function () {
          return Object.keys(n);
        }),
          (a.resolve = i),
          (e.exports = a),
          (a.id = 860));
      },
      569: function (e, t, r) {
        var n = { "./playerSearchBaseDirective.js": 242 };
        function a(e) {
          var t = i(e);
          return r(t);
        }
        function i(e) {
          if (!r.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return n[e];
        }
        ((a.keys = function () {
          return Object.keys(n);
        }),
          (a.resolve = i),
          (e.exports = a),
          (a.id = 569));
      },
      963: function (e, t, r) {
        var n = { "./playerSearchService.js": 156 };
        function a(e) {
          var t = i(e);
          return r(t);
        }
        function i(e) {
          if (!r.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return n[e];
        }
        ((a.keys = function () {
          return Object.keys(n);
        }),
          (a.resolve = i),
          (e.exports = a),
          (a.id = 963));
      },
      212: function (e, t, r) {
        var n = {
          "./controllers/templates/playerCardButtons.html": 210,
          "./controllers/templates/playerCardContent.html": 938,
          "./controllers/templates/playerSearchPage.html": 554,
          "./controllers/templates/searchResultItem.html": 930,
          "./directives/templates/playerSearchBase.html": 407
        };
        function a(e) {
          var t = i(e);
          return r(t);
        }
        function i(e) {
          if (!r.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return n[e];
        }
        ((a.keys = function () {
          return Object.keys(n);
        }),
          (a.resolve = i),
          (e.exports = a),
          (a.id = 212));
      },
      525: function (e) {
        function t(e) {
          return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        }
        function r(e) {
          return e.split("/").pop().replace(".html", "");
        }
        var n = {
          importFilesUnderPath: function (e) {
            e.keys().forEach(e);
          },
          templateCacheGenerator: function (e, n, a, i) {
            return e.module(n, []).run([
              "$templateCache",
              function (e) {
                (a &&
                  a.keys().forEach(function (n) {
                    var i = t(r(n));
                    e.put(i, a(n));
                  }),
                  i &&
                    i.keys().forEach(function (n) {
                      var a = t(r(n));
                      e.put(a, i(n).replace(/<\/?script[^>]*>/gi, ""));
                    }));
              }
            ]);
          }
        };
        e.exports = n;
      },
      837: function (e, t, r) {
        "use strict";
        r.r(t);
        var n = {
          aka: "aka",
          friends: "friends",
          following: "following",
          presence: "presence",
          yourself: "yourself"
        };
        (r(471).A.constant("cardLabels", n), (t.default = n));
      },
      64: function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(577),
          a = r(471),
          i = {
            layout: {
              userInfo: { game: "inGame", studio: "inStudio", group: "primaryGroup" },
              friendship: {},
              inMobile: !1,
              isUserGuest: !1,
              useInfiniteScrolling: !0,
              resultsLoading: !1,
              unsafeInputDetected: !1,
              isKeywordTooShort: !1
            },
            pageData: {
              keyword: null,
              initialized: !1,
              inApp: !0,
              inMobileOrTabletBrowser: !1,
              keywordMinLength: 3,
              nextPageCursor: ""
            },
            friendshipStatus: {
              NoFriendship: "NotFriends",
              PendingOnOtherUser: "RequestSent",
              PendingOnCurrentUser: "RequestReceived",
              Friends: "Friends"
            },
            templates: { playerSearchBase: "player-search-base" },
            urls: {
              searchUrl: "/search/users/results",
              chatMetadataUrl: "".concat(
                n.EnvironmentUrls.apiGatewayUrl,
                "/platform-chat-api/v1/metadata"
              ),
              requestFriendshipUrl: "".concat(
                n.EnvironmentUrls.friendsApi,
                "/v1/users/{targetId}/request-friendship"
              ),
              acceptFriendRequestUrl: "".concat(
                n.EnvironmentUrls.friendsApi,
                "/v1/users/{targetId}/accept-friend-request"
              )
            },
            pageDirection: { prev: "prev", next: "next" },
            playerSearchEventCtx: "playerSearch",
            eventNames: {
              playerTileClick: "playerTileClick",
              playerFriendAdd: "playerFriendAdd",
              playerTileImpression: "playerTileImpression",
              playerFriendAccept: "playerFriendAccept"
            },
            playerSearchFriendshipOriginSourceType: "PlayerSearch",
            playerSearchResultsExperimentLayer: "Social.UserSearchWeb"
          };
        (a.A.constant("playerSearchConstants", i), (t.default = i));
      },
      956: function (e, t, r) {
        "use strict";
        (r.r(t),
          r.d(t, {
            default: function () {
              return h;
            }
          }));
        var n = r(577),
          a = r(992),
          i = r.n(a),
          o = RobloxUserProfiles,
          s = r(471);
        function u(e, t) {
          var r;
          if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (
              Array.isArray(e) ||
              (r = (function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return c(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r) return Array.from(e);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                  return c(e, t);
              })(e)) ||
              (t && e && "number" == typeof e.length)
            ) {
              r && (e = r);
              var n = 0,
                a = function () {};
              return {
                s: a,
                n: function () {
                  return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                },
                e: function (e) {
                  throw e;
                },
                f: a
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var i,
            o = !0,
            s = !1;
          return {
            s: function () {
              r = e[Symbol.iterator]();
            },
            n: function () {
              var e = r.next();
              return ((o = e.done), e);
            },
            e: function (e) {
              ((s = !0), (i = e));
            },
            f: function () {
              try {
                o || null == r.return || r.return();
              } finally {
                if (s) throw i;
              }
            }
          };
        }
        function c(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function l(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            (t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n));
          }
          return r;
        }
        function p(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? l(Object(r), !0).forEach(function (t) {
                  d(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : l(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
          }
          return e;
        }
        function d(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = r),
            e
          );
        }
        function f(e, t, r, a, s, c, l, f, h, g, y, v, m, b) {
          function S(e, t) {
            ((r.pageData.keyword = e),
              (r.formData.keyword = e),
              (r.layout.useInfiniteScroll = "Scroll" === t.paginationMethod),
              P(t),
              w(t.processedResult || [], e),
              r.layout.useInfiniteScroll && r.getNextScrollResultsIfEmptySpace(),
              r.pageData.initialized || (r.pageData.initialized = !0));
          }
          function P(e) {
            var t = new n.DeviceMeta(),
              a = {
                nextPageCursor: e.nextPageCursor,
                currentUserId: n.CurrentUser.userId,
                inApp: t.isInApp,
                inAndroidApp: t.isAndroidApp,
                iniOSApp: t.isIosApp,
                inUniversalApp: t.isUniversalApp,
                inMobileOrTabletBrowser: (t.isPhone || t.isTablet) && !t.isInApp,
                keywordMinLength: h.pageData.keywordMinLength
              };
            Object.assign(r.pageData, a);
          }
          function w(e, a) {
            var s = r.results.length;
            (e.forEach(function (u, c) {
              var l;
              (n.CurrentUser.isAuthenticated &&
                i()
                  .getPresenceProvider()
                  .subscribeToPresenceChanges(
                    [u.id],
                    function (e) {
                      (r.$evalAsync(function () {
                        ((u.gameId = e.gameId), (u.userPresenceType = e.userPresenceType));
                      }),
                        e.universeId &&
                          f.gamePlayabilityRequest([e.universeId]).then(function (e) {
                            r.$evalAsync(function () {
                              var t;
                              u.gameIsPlayable =
                                null === (t = e[0]) || void 0 === t ? void 0 : t.isPlayable;
                            });
                          }));
                    },
                    !1
                  ),
                (function (e, r) {
                  var n = [
                    o.UserProfileField.Names.CombinedName,
                    o.UserProfileField.Names.Username
                  ];
                  (e.forEach(function (e) {
                    (delete e.name, delete e.displayName, (e.AreNamesLoading = !0));
                  }),
                    m
                      .watchUserProfiles(
                        e.map(function (e) {
                          return e.id;
                        }),
                        n
                      )
                      .subscribe(function (n) {
                        var a = n.error,
                          i = n.data;
                        (a && t.debug("user profile failure", a),
                          e.forEach(function (e) {
                            i &&
                              ((e.PrimaryName = i[e.id].names.combinedName),
                              (e.Username = i[e.id].names.username),
                              (e.MatchingPreviousName = (function (e, t) {
                                if (e.previousUsernames.length > 0) {
                                  var r = t.toLowerCase();
                                  return e.previousUsernames
                                    .map(function (e) {
                                      return e.trim().toLowerCase();
                                    })
                                    .find(function (t) {
                                      return 0 === t.indexOf(r) && t !== e.Username;
                                    });
                                }
                                return null;
                              })(e, r)),
                              (e.AreNamesLoading = !1));
                          }));
                      }));
                })(e, a),
                (u.FriendshipStatus = u.status),
                delete u.status,
                (u.absPos = s + c),
                (l = u),
                n.EventStream.SendEventWithTarget(
                  h.eventNames.playerTileImpression,
                  h.playerSearchEventCtx,
                  { uid: r.pageData.currentUserId, playerId: l.id, absPos: l.absPos },
                  n.EventStream.TargetTypes.WWW
                ));
            }),
              (r.results = r.results.concat(e)),
              (r.layout.resultsLoading = !1),
              t.debug("my data", r.results));
          }
          ((r.layout = p({}, h.layout)),
            (r.thumbnailTypes = b.thumbnailTypes),
            (r.pageData = p({}, h.pageData)),
            (r.formData = { keyword: "" }),
            (r.results = []),
            (r.labelToShow = function (e) {
              return e.isCurrentUser
                ? c.yourself
                : e.MatchingPreviousName
                  ? c.aka
                  : e.FriendshipStatus === r.layout.friendship.Friends
                    ? c.friends
                    : e.isFollowing
                      ? c.following
                      : n.CurrentUser.isAuthenticated
                        ? c.presence
                        : void 0;
            }),
            (r.getUserInfo = function (e) {
              if (r.layout.inMobile) return "";
              var t = r.layout.userInfo;
              return e.gameIsPlayable
                ? t.game
                : e.userPresenceType === i().PresenceType.Studio
                  ? t.studio
                  : e.primaryGroup
                    ? t.group
                    : "";
            }),
            (r.showButtonsForFriends = function (e) {
              return (
                e.FriendshipStatus === r.layout.friendship.Friends &&
                !e.isCurrentUser &&
                !r.layout.isUserGuest
              );
            }),
            (r.showButtonsForNonFriends = function (e) {
              return (
                e.FriendshipStatus !== r.layout.friendship.Friends &&
                !e.isCurrentUser &&
                !r.layout.isUserGuest
              );
            }),
            (r.showNoMatches = function () {
              return (
                r.results.length < 1 &&
                !r.layout.resultsLoading &&
                !r.layout.isKeywordTooShort &&
                !r.layout.unsafeInputDetected
              );
            }),
            (r.openProfile = function (e, t) {
              var i;
              ((a.location.href = e.profileUrl),
                (i = e),
                n.EventStream.SendEventWithTarget(
                  h.eventNames.playerTileClick,
                  h.playerSearchEventCtx,
                  { uid: r.pageData.currentUserId, playerId: i.id, absPos: i.absPos },
                  n.EventStream.TargetTypes.WWW
                ),
                t.preventDefault(),
                t.stopPropagation());
            }),
            (r.addFriend = function (e) {
              var a = e,
                i = a.id;
              return f.addFriend(i).then(
                function (e) {
                  e.success
                    ? ((a.FriendshipStatus = r.layout.friendship.PendingOnOtherUser),
                      (function (e) {
                        n.EventStream.SendEventWithTarget(
                          h.eventNames.playerFriendAdd,
                          h.playerSearchEventCtx,
                          { uid: r.pageData.currentUserId, playerId: e.id, absPos: e.absPos },
                          n.EventStream.TargetTypes.WWW
                        );
                      })(a))
                    : (t.debug("add friend failed: ", e.message), v.warning(e.message));
                },
                function (e) {
                  var r = e.data;
                  if (429 === e.status) v.warning(e.statusText);
                  else {
                    var n = r.errors[0].userFacingMessage;
                    (t.debug("add friend failed: ", n), n && v.warning(n));
                  }
                }
              );
            }),
            (r.acceptFriend = function (e) {
              var a = e,
                i = r.pageData.currentUserId;
              return f.acceptFriend(a.id, i).then(
                function (e) {
                  ((a.FriendshipStatus = r.layout.friendship.Friends),
                    (function (e) {
                      n.EventStream.SendEventWithTarget(
                        h.eventNames.playerFriendAccept,
                        h.playerSearchEventCtx,
                        { uid: r.pageData.currentUserId, playerId: e.id, absPos: e.absPos },
                        n.EventStream.TargetTypes.WWW
                      );
                    })(a));
                },
                function (e) {
                  if ((t.debug("accept friend failed: ", e), e && e.errors && e.errors[0])) {
                    var r = e.errors[0];
                    r.userFacingMessage && v.warning(r.userFacingMessage);
                  }
                }
              );
            }),
            (r.startChat = function (e) {
              var t = l.buildPermissionVerifier(r.pageData);
              l.startChat(e, t);
            }),
            (r.joinGame = function (e) {
              if (e && e.userId)
                try {
                  Roblox.GameLauncher.followPlayerIntoGame(e.userId);
                } catch (e) {
                  g.fireEvent("Protocol", "Launch Failure", "follow", 0);
                }
            }),
            (r.adRefresh = function () {
              s.refreshAllAds();
            }),
            (r.startNewSearch = function (t) {
              t && t.target && t.target.blur();
              var n = e.search();
              (Object.assign(n, { keyword: r.formData.keyword }), e.search(n));
            }),
            (r.getNextScrollResults = function () {
              r.pageData.nextPageCursor &&
                !r.layout.resultsLoading &&
                (t.debug("scroll called"),
                (r.layout.resultsLoading = !0),
                f
                  .getSearchResults(r.pageData.keyword, r.pageData.nextPageCursor)
                  .then(function (e) {
                    (P(e),
                      w(e.processedResult || [], r.pageData.keyword),
                      r.getNextScrollResultsIfEmptySpace());
                  }));
            }),
            (r.getNextScrollResultsIfEmptySpace = function () {
              0.8 * a.innerHeight > document.querySelector("body").scrollHeight &&
                r.getNextScrollResults();
            }),
            (r.getSanitizedValue = function (e) {
              return e && e.escapeHTML();
            }),
            (r.init = function () {
              var t;
              ((r.layout.isDisplayNamesEnabled = n.DisplayNames.Enabled()),
                (r.layout.resultsLoading = !0),
                r.pageData.adsInitialized ||
                  ((r.pageData.adsInitialized = !0), s.registerAd(s.adIds.leaderboardAbp)));
              var a = e.search().keyword || "";
              ((r.results = []),
                (r.layout.unsafeInputDetected = !1),
                (r.pageData.nextPageCursor = ""),
                (r.pageData.keyword = null));
              var i = new n.DeviceMeta();
              ((r.layout.friendship = h.friendshipStatus),
                (r.layout.inMobile = i.isPhone),
                (r.layout.isUserGuest = !n.CurrentUser.isAuthenticated),
                (r.layout.isKeywordTooShort = a.length < h.pageData.keywordMinLength),
                r.layout.isKeywordTooShort
                  ? S(a, {})
                  : f.getSearchResults(a, "").then(function (e) {
                      S(a, e);
                    }));
              var o =
                (d(
                  (t = {}),
                  y.notificationTypes.friendshipNotifications.friendshipRequested,
                  r.respondToFriendRequest
                ),
                d(
                  t,
                  y.notificationTypes.friendshipNotifications.friendshipCreated,
                  r.respondToFriendAccepted
                ),
                d(
                  t,
                  y.notificationTypes.friendshipNotifications.friendshipDestroyed,
                  r.respondToRemoveFriend
                ),
                t);
              y.listenToNotification(y.realTimeTypes.friendshipNotifications, o);
            }),
            r.$on("$locationChangeSuccess", function (e, n, a) {
              (t.debug("url changed: ", e, n, a),
                r.pageData.initialized && (r.init(), r.adRefresh()));
            }),
            (r.transitionFriendState = function (e, t, a) {
              if (e.toString() === n.CurrentUser.userId) {
                var i,
                  o = u(r.results);
                try {
                  for (o.s(); !(i = o.n()).done;) {
                    var s = i.value;
                    if (s.id === t) {
                      r.$evalAsync(function () {
                        s.FriendshipStatus = a;
                      });
                      break;
                    }
                  }
                } catch (e) {
                  o.e(e);
                } finally {
                  o.f();
                }
              }
            }),
            (r.respondToFriendRequest = function (e) {
              var t = e.EventArgs.UserId1,
                n = e.EventArgs.UserId2;
              (r.transitionFriendState(n, t, h.friendshipStatus.PendingOnCurrentUser),
                r.transitionFriendState(t, n, h.friendshipStatus.PendingOnOtherUser));
            }),
            (r.respondToFriendAccepted = function (e) {
              var t = e.EventArgs.UserId2,
                n = e.EventArgs.UserId1;
              (r.transitionFriendState(n, t, h.friendshipStatus.Friends),
                r.transitionFriendState(t, n, h.friendshipStatus.Friends));
            }),
            (r.respondToRemoveFriend = function (e) {
              var t = e.EventArgs.UserId2,
                n = e.EventArgs.UserId1;
              (r.transitionFriendState(t, n, h.friendshipStatus.NoFriendship),
                r.transitionFriendState(n, t, h.friendshipStatus.NoFriendship));
            }),
            (r.showVerifiedBadge = function (e) {
              return e && e.hasVerifiedBadge && !e.AreNamesLoading;
            }),
            f.isChatEntrypointEnabled().then(function (e) {
              r.layout.isChatEntrypointEnabled = e;
            }),
            r.init());
        }
        ((f.$inject = [
          "$location",
          "$log",
          "$scope",
          "$window",
          "abpService",
          "cardLabels",
          "chatDispatchService",
          "playerSearchService",
          "playerSearchConstants",
          "googleAnalyticsEventsService",
          "realtimeService",
          "systemFeedbackService",
          "userProfilesService",
          "thumbnailConstants"
        ]),
          s.A.controller("playerSearchController", f));
        var h = f;
      },
      242: function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(471);
        function a(e) {
          return {
            restrict: "A",
            replace: !0,
            scope: !0,
            templateUrl: e.templates.playerSearchBase
          };
        }
        ((a.$inject = ["playerSearchConstants"]),
          n.A.directive("playerSearchBase", a),
          (t.default = a));
      },
      471: function (e, t, r) {
        "use strict";
        var n = r(577),
          a = r(127),
          i = r
            .n(a)()
            .module("playerSearch", [
              "robloxApp",
              "infiniteScroll",
              "systemFeedback",
              "cursorPagination",
              "thumbnails",
              "userProfiles",
              "presence"
            ])
            .config([
              "$locationProvider",
              "languageResourceProvider",
              function (e, t) {
                e.html5Mode({ enabled: !0, requireBase: !1 });
                var r = new n.TranslationResourceProvider(),
                  a = r.getTranslationResource("Feature.PlayerSearchResults"),
                  i = r.getTranslationResource("Search.GlobalSearch"),
                  o = r.getTranslationResource("CommonUI.Features");
                t.setTranslationResources([a, i, o]);
              }
            ]);
        t.A = i;
      },
      156: function (e, t, r) {
        "use strict";
        (r.r(t),
          r.d(t, {
            default: function () {
              return de;
            }
          }));
        var n = r(577),
          a = r(127),
          i = r.n(a),
          o = RobloxBadges,
          s = r(64),
          u = r(471),
          c = CoreUtilities,
          l = function (e, t, r, n) {
            return new (r || (r = Promise))(function (a, i) {
              function o(e) {
                try {
                  u(n.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  u(n.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })).then(o, s);
              }
              u((n = n.apply(e, t || [])).next());
            });
          },
          p = function (e, t) {
            var r,
              n,
              a,
              i,
              o = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: []
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (r) throw new TypeError("Generator is already executing.");
                  for (; o;)
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (a =
                            2 & i[0]
                              ? n.return
                              : i[0]
                                ? n.throw || ((a = n.return) && a.call(n), 0)
                                : n.next) &&
                          !(a = a.call(n, i[1])).done)
                      )
                        return a;
                      switch (((n = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                        case 0:
                        case 1:
                          a = i;
                          break;
                        case 4:
                          return (o.label++, { value: i[1], done: !1 });
                        case 5:
                          (o.label++, (n = i[1]), (i = [0]));
                          continue;
                        case 7:
                          ((i = o.ops.pop()), o.trys.pop());
                          continue;
                        default:
                          if (
                            !((a = o.trys),
                            (a = a.length > 0 && a[a.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                          ) {
                            o = 0;
                            continue;
                          }
                          if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                            o.label = i[1];
                            break;
                          }
                          if (6 === i[0] && o.label < a[1]) {
                            ((o.label = a[1]), (a = i));
                            break;
                          }
                          if (a && o.label < a[2]) {
                            ((o.label = a[2]), o.ops.push(i));
                            break;
                          }
                          (a[2] && o.ops.pop(), o.trys.pop());
                          continue;
                      }
                      i = t.call(e, o);
                    } catch (e) {
                      ((i = [6, e]), (n = 0));
                    } finally {
                      r = a = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          },
          d = function (e) {
            return l(void 0, void 0, Promise, function () {
              var t, r;
              return p(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [
                      4,
                      c.httpService.get({
                        retryable: !0,
                        withCredentials: !0,
                        url: n.EnvironmentUrls.groupsApi + "/v1/users/" + e + "/groups/primary/role"
                      })
                    ];
                  case 1:
                    return (
                      (t = a.sent()),
                      (r = t.data.group)
                        ? [
                            2,
                            {
                              id: r.id,
                              name: r.name,
                              url: c.urlService.getAbsoluteUrl("/groups/" + r.id)
                            }
                          ]
                        : [2, void 0]
                    );
                }
              });
            });
          },
          f = function (e) {
            return l(void 0, void 0, Promise, function () {
              var t;
              return p(this, function (r) {
                switch (r.label) {
                  case 0:
                    return e.length < 1
                      ? [2, []]
                      : ((t = []),
                        [
                          4,
                          Promise.all(
                            e.map(function (e, r) {
                              return l(void 0, void 0, void 0, function () {
                                var n, a, i;
                                return p(this, function (o) {
                                  switch (o.label) {
                                    case 0:
                                      return (
                                        o.trys.push([0, 2, , 3]),
                                        (n = t),
                                        (a = r),
                                        (i = { userId: e }),
                                        [4, d(e)]
                                      );
                                    case 1:
                                      return ((n[a] = ((i.primaryGroup = o.sent()), i)), [3, 3]);
                                    case 2:
                                      return (
                                        o.sent(),
                                        (t[r] = { userId: e, primaryGroup: void 0 }),
                                        [3, 3]
                                      );
                                    case 3:
                                      return [2];
                                  }
                                });
                              });
                            })
                          )
                        ]);
                  case 1:
                    return (r.sent(), [2, t]);
                }
              });
            });
          };
        var h;
        !(function (e) {
          ((e.Strict = "strict"), (e.Lax = "lax"), (e.None = "none"));
        })(h || (h = {}));
        var g;
        !(function (e) {
          ((e.PagingParametersChanged = "Paging parameters were changed"),
            (e.GetItemsFailure = "Unable to get items"),
            (e.InvalidPageNumber = "Invalid page number"));
        })(g || (g = {}));
        var y,
          v = g;
        !(function (e) {
          ((e[(e.Initialized = 0)] = "Initialized"),
            (e[(e.Idle = 1)] = "Idle"),
            (e[(e.Loading = 2)] = "Loading"));
        })(y || (y = {}));
        var m,
          b = y,
          S = (function () {
            function e(e) {
              ((this.pageSize = e), (this.cache = {}));
            }
            return (
              (e.prototype.getPage = function (e, t) {
                var r = this.cache[e];
                return r ? r.slice((t - 1) * this.pageSize, t * this.pageSize) : [];
              }),
              (e.prototype.getLength = function (e) {
                var t = this.cache[e];
                return t ? t.length : 0;
              }),
              (e.prototype.append = function (e, t) {
                (this.cache[e] || (this.cache[e] = []), (this.cache[e] = this.cache[e].concat(t)));
              }),
              (e.prototype.removeAfterIndex = function (e, t) {
                this.cache[e] && (this.cache[e] = this.cache[e].slice(0, t));
              }),
              (e.prototype.removeAtIndex = function (e, t, r) {
                this.cache[e] && this.cache[e].splice((t - 1) * this.pageSize + r, 1);
              }),
              (e.prototype.clear = function (e) {
                delete this.cache[e];
              }),
              (e.prototype.setPageSize = function (e) {
                this.pageSize = e;
              }),
              e
            );
          })(),
          P = function () {
            return (
              (P =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var a in (t = arguments[r]))
                      Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                  return e;
                }),
              P.apply(this, arguments)
            );
          };
        !(function () {
          function e(e, t, r, n) {
            ((this.pageSize = e),
              (this.loadPageSize = t),
              (this.getItems = r),
              (this.cache = new S(e)),
              (this.firstPagePagingParameters = n),
              (this.pagingParameters = n),
              (this.indexCursors = {}),
              (this.initId = 0),
              (this.status = b.Initialized),
              (this.currentPageNumber = 1),
              this.setNextPageCursor(""));
          }
          ((e.prototype.getStatus = function () {
            return this.status;
          }),
            (e.prototype.isBusy = function () {
              return this.status !== b.Idle;
            }),
            (e.prototype.getCurrentPageNumber = function () {
              return this.currentPageNumber;
            }),
            (e.prototype.getPagingParameters = function () {
              return P({}, this.firstPagePagingParameters);
            }),
            (e.prototype.hasNextPage = function () {
              var e,
                t = this.getCacheKey();
              return (
                this.cache.getLength(t) > this.currentPageNumber * this.pageSize ||
                "string" ==
                  typeof (null === (e = this.pagingParameters) || void 0 === e ? void 0 : e.cursor)
              );
            }),
            (e.prototype.canLoadNextPage = function () {
              return this.hasNextPage() && !this.isBusy();
            }),
            (e.prototype.canLoadPreviousPage = function () {
              return !this.isBusy() && this.currentPageNumber > 1;
            }),
            (e.prototype.canLoadFirstPage = function () {
              return !this.isBusy();
            }),
            (e.prototype.canReloadCurrentPage = function () {
              return !this.isBusy();
            }),
            (e.prototype.setPagingParametersAndLoadFirstPage = function (e) {
              this.status = b.Loading;
              var t = this.getCacheKey();
              return (
                this.cache.clear(t),
                void 0 !== e.pageSize &&
                  (this.cache.setPageSize(e.pageSize), (this.pageSize = e.pageSize)),
                void 0 !== e.loadPageSize && (this.loadPageSize = e.loadPageSize),
                (this.currentPageNumber = 1),
                (this.indexCursors = {}),
                (this.firstPagePagingParameters = P({}, e)),
                (this.pagingParameters = P({}, e)),
                this.setNextPageCursor(""),
                this.loadPage(1)
              );
            }),
            (e.prototype.reloadCurrentPage = function () {
              if (1 === this.currentPageNumber) return this.loadFirstPage();
              var e = this.getCacheKey(),
                t = 0,
                r = this.indexCursors,
                n = this.currentPageNumber * (this.pageSize - 1);
              Object.keys(r).forEach(function (e) {
                var a = Number(e);
                a > n ? delete r[a] : (t = Math.max(a, t));
              });
              var a = Math.floor(n / this.loadPageSize) * this.loadPageSize;
              return (
                this.cache.removeAfterIndex(e, a),
                this.setNextPageCursor(r[t] || ""),
                this.loadPage(this.currentPageNumber)
              );
            }),
            (e.prototype.getCurrentPage = function () {
              return this.loadPage(this.currentPageNumber);
            }),
            (e.prototype.loadNextPage = function () {
              return this.loadPage(this.currentPageNumber + 1);
            }),
            (e.prototype.loadPreviousPage = function () {
              return this.loadPage(this.currentPageNumber - 1);
            }),
            (e.prototype.loadFirstPage = function () {
              return this.setPagingParametersAndLoadFirstPage(this.firstPagePagingParameters);
            }),
            (e.prototype.loadPage = function (e, t) {
              var r = this;
              void 0 === t && (this.initId += 1);
              var n = null != t ? t : this.initId;
              return new Promise(function (t, a) {
                var i = function (e) {
                    r.initId === n ? ((r.status = b.Idle), a(e)) : a(v.PagingParametersChanged);
                  },
                  o = function (i) {
                    r.initId === n
                      ? ((r.status = b.Idle), (r.currentPageNumber = e), t(i))
                      : a(v.PagingParametersChanged);
                  };
                if (e < 1) i(v.InvalidPageNumber);
                else {
                  var s = r.getCacheKey(),
                    u = r.cache.getPage(s, e);
                  if (u.length !== r.pageSize) {
                    if ("string" != typeof r.pagingParameters.cursor)
                      return u.length <= 0 && e > 1 ? void i(v.InvalidPageNumber) : void o(u);
                    ((r.status = b.Loading),
                      r
                        .loadNextPageIntoCache(s, n)
                        .then(function () {
                          r.loadPage(e, n).then(o).catch(i);
                        })
                        .catch(i));
                  } else o(u);
                }
              });
            }),
            (e.prototype.canRemoveItem = function () {
              return !this.isBusy();
            }),
            (e.prototype.removeItemAtIndex = function (e) {
              var t = this.getCacheKey();
              return (
                this.cache.removeAtIndex(t, this.currentPageNumber, e),
                this.canReloadCurrentPage()
                  ? this.getCurrentPage()
                  : this.loadPage(this.currentPageNumber - 1)
              );
            }),
            (e.prototype.getCacheKey = function () {
              return JSON.stringify(this.firstPagePagingParameters);
            }),
            (e.prototype.setNextPageCursor = function (e) {
              this.pagingParameters = P(P({}, this.pagingParameters), { cursor: e });
            }),
            (e.prototype.loadNextPageIntoCache = function (e, t) {
              var r = this;
              return new Promise(function (n, a) {
                r.indexCursors[r.cache.getLength(e)] = r.pagingParameters.cursor;
                var i = Object.keys(r.indexCursors).length;
                r.getItems(P(P({}, r.pagingParameters), { count: r.loadPageSize, pageNumber: i }))
                  .then(function (i) {
                    t === r.initId
                      ? (r.setNextPageCursor(i.nextPageCursor), r.cache.append(e, i.items), n())
                      : a(v.PagingParametersChanged);
                  })
                  .catch(function () {
                    t === r.initId ? a(v.GetItemsFailure) : a(v.PagingParametersChanged);
                  });
              });
            }));
        })();
        !(function (e) {
          ((e.Asc = "Asc"), (e.Desc = "Desc"));
        })(m || (m = {}));
        new Intl.DateTimeFormat(void 0, {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: !0
        });
        var w,
          C = [
            { year: "numeric", month: "short", day: "numeric" },
            { hour: "numeric", minute: "numeric", hour12: !0 }
          ],
          F = "literal",
          A = " | ",
          T = "month",
          I = "day",
          x = "year";
        ((function () {
          function e(e) {
            this.locale = e;
          }
          ((e.prototype.getShortDate = function (e) {
            return this.getCustomDateTime(e);
          }),
            (e.prototype.getFullDate = function (e, t) {
              return (
                void 0 === t && (t = A),
                this.getCustomDateTime(e, C[0]) + t + this.getCustomDateTime(e, C[1])
              );
            }),
            (e.prototype.getOrderedDateParts = function (e) {
              var t,
                r = new Intl.DateTimeFormat(this.locale, e);
              try {
                t = r.formatToParts(new Date());
              } catch (e) {
                t = [{ type: T }, { type: I }, { type: x }];
              }
              return t.filter(function (e) {
                return e.type !== F;
              });
            }),
            (e.prototype.getCustomDateTime = function (e, t) {
              void 0 === e && (e = new Date());
              var r = e;
              ("string" != typeof e && "number" != typeof e) || (r = new Date(e));
              var n = new Intl.DateTimeFormat(this.locale, t);
              try {
                return n.format(r);
              } catch (e) {
                return "";
              }
            }));
        })(),
          (function () {
            function e() {
              var e = this;
              this.promise = new Promise(function (t, r) {
                ((e.resolveSelf = t), (e.rejectSelf = r));
              });
            }
            ((e.prototype.resolve = function (e) {
              this.resolveSelf(e);
            }),
              (e.prototype.reject = function (e) {
                this.rejectSelf(e);
              }),
              (e.prototype.then = function (e, t) {
                return this.promise.then(e, t);
              }));
          })());
        !(function (e) {
          ((e[(e.Windows = 0)] = "Windows"),
            (e[(e.macOS = 1)] = "macOS"),
            (e[(e.Linux = 2)] = "Linux"),
            (e[(e.Unix = 3)] = "Unix"),
            (e[(e.iOS = 4)] = "iOS"),
            (e[(e.Android = 5)] = "Android"),
            (e[(e.Unknown = 6)] = "Unknown"));
        })(w || (w = {}));
        var k;
        !(function (e) {
          ((e.Unidentified = "Unidentified"),
            (e.Alt = "Alt"),
            (e.AltGraph = "AltGraph"),
            (e.CapsLock = "CapsLock"),
            (e.Control = "Control"),
            (e.Fn = "Fn"),
            (e.FnLock = "FnLock"),
            (e.Hyper = "Hyper"),
            (e.Meta = "Meta"),
            (e.NumLock = "NumLock"),
            (e.ScrollLock = "ScrollLock"),
            (e.Shift = "Shift"),
            (e.Super = "Super"),
            (e.Symbol = "Symbol"),
            (e.SymbolLock = "SymbolLock"),
            (e.Enter = "Enter"),
            (e.Tab = "Tab"),
            (e.ArrowDown = "ArrowDown"),
            (e.ArrowLeft = "ArrowLeft"),
            (e.ArrowRight = "ArrowRight"),
            (e.ArrowUp = "ArrowUp"),
            (e.End = "End"),
            (e.Home = "Home"),
            (e.PageDown = "PageDown"),
            (e.PageUp = "PageUp"),
            (e.Backspace = "Backspace"),
            (e.Clear = "Clear"),
            (e.Copy = "Copy"),
            (e.CrSel = "CrSel"),
            (e.Cut = "Cut"),
            (e.Delete = "Delete"),
            (e.EraseEof = "EraseEof"),
            (e.ExSel = "ExSel"),
            (e.Insert = "Insert"),
            (e.Paste = "Paste"),
            (e.Redo = "Redo"),
            (e.Undo = "Undo"),
            (e.Accept = "Accept"),
            (e.Again = "Again"),
            (e.Attn = "Attn"),
            (e.Cancel = "Cancel"),
            (e.ContextMenu = "ContextMenu"),
            (e.Escape = "Escape"),
            (e.Execute = "Execute"),
            (e.Find = "Find"),
            (e.Finish = "Finish"),
            (e.Help = "Help"),
            (e.Pause = "Pause"),
            (e.Play = "Play"),
            (e.Props = "Props"),
            (e.Select = "Select"),
            (e.ZoomIn = "ZoomIn"),
            (e.ZoomOut = "ZoomOut"),
            (e.BrightnessDown = "BrightnessDown"),
            (e.BrightnessUp = "BrightnessUp"),
            (e.Eject = "Eject"),
            (e.LogOff = "LogOff"),
            (e.Power = "Power"),
            (e.PowerOff = "PowerOff"),
            (e.PrintScreen = "PrintScreen"),
            (e.Hibernate = "Hibernate"),
            (e.Standby = "Standby"),
            (e.WakeUp = "WakeUp"),
            (e.AllCandidates = "AllCandidates"),
            (e.Alphanumeric = "Alphanumeric"),
            (e.CodeInput = "CodeInput"),
            (e.Compose = "Compose"),
            (e.Convert = "Convert"),
            (e.Dead = "Dead"),
            (e.FinalMode = "FinalMode"),
            (e.GroupFirst = "GroupFirst"),
            (e.GroupLast = "GroupLast"),
            (e.GroupNext = "GroupNext"),
            (e.GroupPrevious = "GroupPrevious"),
            (e.ModeChange = "ModeChange"),
            (e.NextCandidate = "NextCandidate"),
            (e.NonConvert = "NonConvert"),
            (e.PreviousCandidate = "PreviousCandidate"),
            (e.Process = "Process"),
            (e.SingleCandidate = "SingleCandidate"),
            (e.HangulMode = "HangulMode"),
            (e.HanjaMode = "HanjaMode"),
            (e.JunjaMode = "JunjaMode"),
            (e.Eisu = "Eisu"),
            (e.Hankaku = "Hankaku"),
            (e.Hiragana = "Hiragana"),
            (e.HiraganaKatakana = "HiraganaKatakana"),
            (e.KanaMode = "KanaMode"),
            (e.KanjiMode = "KanjiMode"),
            (e.Katakana = "Katakana"),
            (e.Romaji = "Romaji"),
            (e.Zenkaku = "Zenkaku"),
            (e.ZenkakuHanaku = "ZenkakuHanaku"),
            (e.F1 = "F1"),
            (e.F2 = "F2"),
            (e.F3 = "F3"),
            (e.F4 = "F4"),
            (e.F5 = "F5"),
            (e.F6 = "F6"),
            (e.F7 = "F7"),
            (e.F8 = "F8"),
            (e.F9 = "F9"),
            (e.F10 = "F10"),
            (e.F11 = "F11"),
            (e.F12 = "F12"),
            (e.F13 = "F13"),
            (e.F14 = "F14"),
            (e.F15 = "F15"),
            (e.F16 = "F16"),
            (e.F17 = "F17"),
            (e.F18 = "F18"),
            (e.F19 = "F19"),
            (e.F20 = "F20"),
            (e.Soft1 = "Soft1"),
            (e.Soft2 = "Soft2"),
            (e.Soft3 = "Soft3"),
            (e.Soft4 = "Soft4"),
            (e.AppSwitch = "AppSwitch"),
            (e.Call = "Call"),
            (e.Camera = "Camera"),
            (e.CameraFocus = "CameraFocus"),
            (e.EndCall = "EndCall"),
            (e.GoBack = "GoBack"),
            (e.GoHome = "GoHome"),
            (e.HeadsetHook = "HeadsetHook"),
            (e.LastNumberRedial = "LastNumberRedial"),
            (e.Notification = "Notification"),
            (e.MannerMode = "MannerMode"),
            (e.VoiceDial = "VoiceDial"),
            (e.ChannelDown = "ChannelDown"),
            (e.ChannelUp = "ChannelUp"),
            (e.MediaFastForward = "MediaFastForward"),
            (e.MediaPause = "MediaPause"),
            (e.MediaPlay = "MediaPlay"),
            (e.MediaPlayPause = "MediaPlayPause"),
            (e.MediaRecord = "MediaRecord"),
            (e.MediaRewind = "MediaRewind"),
            (e.MediaStop = "MediaStop"),
            (e.MediaTrackNext = "MediaTrackNext"),
            (e.MediaTrackPrevious = "MediaTrackPrevious"),
            (e.AudioBalanceLeft = "AudioBalanceLeft"),
            (e.AudioBalanceRight = "AudioBalanceRight"),
            (e.AudioBassDown = "AudioBassDown"),
            (e.AudioBassBoostDown = "AudioBassBoostDown"),
            (e.AudioBassBoostToggle = "AudioBassBoostToggle"),
            (e.AudioBassBoostUp = "AudioBassBoostUp"),
            (e.AudioBassUp = "AudioBassUp"),
            (e.AudioFaderFront = "AudioFaderFront"),
            (e.AudioFaderRear = "AudioFaderRear"),
            (e.AudioSurroundModeNext = "AudioSurroundModeNext"),
            (e.AudioTrebleDown = "AudioTrebleDown"),
            (e.AudioTrebleUp = "AudioTrebleUp"),
            (e.AudioVolumeDown = "AudioVolumeDown"),
            (e.AudioVolumeMute = "AudioVolumeMute"),
            (e.AudioVolumeUp = "AudioVolumeUp"),
            (e.MicrophoneToggle = "MicrophoneToggle"),
            (e.MicrophoneVolumeDown = "MicrophoneVolumeDown"),
            (e.MicrophoneVolumeMute = "MicrophoneVolumeMute"),
            (e.MicrophoneVolumeUp = "MicrophoneVolumeUp"),
            (e.TV = "TV"),
            (e.TV3DMode = "TV3DMode"),
            (e.TVAntennaCable = "TVAntennaCable"),
            (e.TVAudioDescription = "TVAudioDescription"),
            (e.TVAudioDescriptionMixDown = "TVAudioDescriptionMixDown"),
            (e.TVAudioDescriptionMixUp = "TVAudioDescriptionMixUp"),
            (e.TVContentsMenu = "TVContentsMenu"),
            (e.TVDataService = "TVDataService"),
            (e.TVInput = "TVInput"),
            (e.TVInputComponent1 = "TVInputComponent1"),
            (e.TVInputComponent2 = "TVInputComponent2"),
            (e.TVInputComposite1 = "TVInputComposite1"),
            (e.TVInputComposite2 = "TVInputComposite2"),
            (e.TVInputHDMI1 = "TVInputHDMI1"),
            (e.TVInputHDMI2 = "TVInputHDMI2"),
            (e.TVInputHDMI3 = "TVInputHDMI3"),
            (e.TVInputHDMI4 = "TVInputHDMI4"),
            (e.TVInputVGA1 = "TVInputVGA1"),
            (e.TVMediaContext = "TVMediaContext"),
            (e.TVNetwork = "TVNetwork"),
            (e.TVNumberEntry = "TVNumberEntry"),
            (e.TVPower = "TVPower"),
            (e.TVRadioService = "TVRadioService"),
            (e.TVSatellite = "TVSatellite"),
            (e.TVSatelliteBS = "TVSatelliteBS"),
            (e.TVSatelliteCS = "TVSatelliteCS"),
            (e.TVSatelliteToggle = "TVSatelliteToggle"),
            (e.TVTerrestrialAnalog = "TVTerrestrialAnalog"),
            (e.TVTerrestrialDigital = "TVTerrestrialDigital"),
            (e.TVTimer = "TVTimer"),
            (e.AVRInput = "AVRInput"),
            (e.AVRPower = "AVRPower"),
            (e.ColorF0Red = "ColorF0Red"),
            (e.ColorF1Green = "ColorF1Green"),
            (e.ColorF2Yellow = "ColorF2Yellow"),
            (e.ColorF3Blue = "ColorF3Blue"),
            (e.ColorF4Grey = "ColorF4Grey"),
            (e.ColorF5Brown = "ColorF5Brown"),
            (e.ClosedCaptionToggle = "ClosedCaptionToggle"),
            (e.Dimmer = "Dimmer"),
            (e.DisplaySwap = "DisplaySwap"),
            (e.DVR = "DVR"),
            (e.Exit = "Exit"),
            (e.FavoriteClear0 = "FavoriteClear0"),
            (e.FavoriteClear1 = "FavoriteClear1"),
            (e.FavoriteClear2 = "FavoriteClear2"),
            (e.FavoriteClear3 = "FavoriteClear3"),
            (e.FavoriteRecall0 = "FavoriteRecall0"),
            (e.FavoriteRecall1 = "FavoriteRecall1"),
            (e.FavoriteRecall2 = "FavoriteRecall2"),
            (e.FavoriteRecall3 = "FavoriteRecall3"),
            (e.FavoriteStore0 = "FavoriteStore0"),
            (e.FavoriteStore1 = "FavoriteStore1"),
            (e.FavoriteStore2 = "FavoriteStore2"),
            (e.FavoriteStore3 = "FavoriteStore3"),
            (e.Guide = "Guide"),
            (e.GuideNextDay = "GuideNextDay"),
            (e.GuidePreviousDay = "GuidePreviousDay"),
            (e.Info = "Info"),
            (e.InstantReplay = "InstantReplay"),
            (e.Link = "Link"),
            (e.ListProgram = "ListProgram"),
            (e.LiveContent = "LiveContent"),
            (e.Lock = "Lock"),
            (e.MediaApps = "MediaApps"),
            (e.MediaAudioTrack = "MediaAudioTrack"),
            (e.MediaLast = "MediaLast"),
            (e.MediaSkipBackward = "MediaSkipBackward"),
            (e.MediaSkipForward = "MediaSkipForward"),
            (e.MediaStepBackward = "MediaStepBackward"),
            (e.MediaStepForward = "MediaStepForward"),
            (e.MediaTopMenu = "MediaTopMenu"),
            (e.NavigateIn = "NavigateIn"),
            (e.NavigateNext = "NavigateNext"),
            (e.NavigateOut = "NavigateOut"),
            (e.NavigatePrevious = "NavigatePrevious"),
            (e.NextFavoriteChannel = "NextFavoriteChannel"),
            (e.NextUserProfile = "NextUserProfile"),
            (e.OnDemand = "OnDemand"),
            (e.Pairing = "Pairing"),
            (e.PinPDown = "PinPDown"),
            (e.PinPMove = "PinPMove"),
            (e.PinPToggle = "PinPToggle"),
            (e.PinPUp = "PinPUp"),
            (e.PlaySpeedDown = "PlaySpeedDown"),
            (e.PlaySpeedReset = "PlaySpeedReset"),
            (e.PlaySpeedUp = "PlaySpeedUp"),
            (e.RandomToggle = "RandomToggle"),
            (e.RcLowBattery = "RcLowBattery"),
            (e.RecordSpeedNext = "RecordSpeedNext"),
            (e.RfBypass = "RfBypass"),
            (e.ScanChannelsToggle = "ScanChannelsToggle"),
            (e.ScreenModeNext = "ScreenModeNext"),
            (e.Settings = "Settings"),
            (e.SplitScreenToggle = "SplitScreenToggle"),
            (e.STBInput = "STBInput"),
            (e.STBPower = "STBPower"),
            (e.Subtitle = "Subtitle"),
            (e.Teletext = "Teletext"),
            (e.VideoModeNext = "VideoModeNext"),
            (e.Wink = "Wink"),
            (e.ZoomToggle = "ZoomToggle"),
            (e.SpeechCorrectionList = "SpeechCorrectionList"),
            (e.SpeechInputToggle = "SpeechInputToggle"),
            (e.Close = "Close"),
            (e.New = "New"),
            (e.Open = "Open"),
            (e.Print = "Print"),
            (e.Save = "Save"),
            (e.SpellCheck = "SpellCheck"),
            (e.MailForward = "MailForward"),
            (e.MailReply = "MailReply"),
            (e.MailSend = "MailSend"),
            (e.LaunchCalculator = "LaunchCalculator"),
            (e.LaunchCalendar = "LaunchCalendar"),
            (e.LaunchContacts = "LaunchContacts"),
            (e.LaunchMail = "LaunchMail"),
            (e.LaunchMediaPlayer = "LaunchMediaPlayer"),
            (e.LaunchMusicPlayer = "LaunchMusicPlayer"),
            (e.LaunchMyComputer = "LaunchMyComputer"),
            (e.LaunchPhone = "LaunchPhone"),
            (e.LaunchScreenSaver = "LaunchScreenSaver"),
            (e.LaunchSpreadsheet = "LaunchSpreadsheet"),
            (e.LaunchWebBrowser = "LaunchWebBrowser"),
            (e.LaunchWebCam = "LaunchWebCam"),
            (e.LaunchWordProcessor = "LaunchWordProcessor"),
            (e.LaunchApplication1 = "LaunchApplication1"),
            (e.LaunchApplication2 = "LaunchApplication2"),
            (e.LaunchApplication3 = "LaunchApplication3"),
            (e.LaunchApplication4 = "LaunchApplication4"),
            (e.LaunchApplication5 = "LaunchApplication5"),
            (e.LaunchApplication6 = "LaunchApplication6"),
            (e.LaunchApplication7 = "LaunchApplication7"),
            (e.LaunchApplication8 = "LaunchApplication8"),
            (e.LaunchApplication9 = "LaunchApplication9"),
            (e.LaunchApplication10 = "LaunchApplication10"),
            (e.LaunchApplication11 = "LaunchApplication11"),
            (e.LaunchApplication12 = "LaunchApplication12"),
            (e.LaunchApplication13 = "LaunchApplication13"),
            (e.LaunchApplication14 = "LaunchApplication14"),
            (e.LaunchApplication15 = "LaunchApplication15"),
            (e.LaunchApplication16 = "LaunchApplication16"),
            (e.BrowserBack = "BrowserBack"),
            (e.BrowserFavorites = "BrowserFavorites"),
            (e.BrowserForward = "BrowserForward"),
            (e.BrowserHome = "BrowserHome"),
            (e.BrowserRefresh = "BrowserRefresh"),
            (e.BrowserSearch = "BrowserSearch"),
            (e.BrowserStop = "BrowserStop"),
            (e.Decimal = "Decimal"),
            (e.Key11 = "Key11"),
            (e.Key12 = "Key12"),
            (e.Multiply = "Multiply"),
            (e.Add = "Add"),
            (e.Divide = "Divide"),
            (e.Subtract = "Subtract"),
            (e.Separator = "Separator"));
        })(k || (k = {}));
        var M;
        !(function (e) {
          ((e.CONNECT = "CONNECT"),
            (e.DELETE = "DELETE"),
            (e.GET = "GET"),
            (e.HEAD = "HEAD"),
            (e.OPTIONS = "OPTIONS"),
            (e.PATCH = "PATCH"),
            (e.POST = "POST"),
            (e.PUT = "PUT"),
            (e.TRACE = "TRACE"));
        })(M || (M = {}));
        !(function () {
          function e(e, t) {
            ((this.locale = e), (this.currency = t));
          }
          e.prototype.getCustomNumber = function (e, t) {
            try {
              return new Intl.NumberFormat(this.locale, t).format(e);
            } catch (t) {
              return e;
            }
          };
        })();
        var L;
        !(function (e) {
          ((e.processFailure = "processFailure"),
            (e.unretriableFailure = "unretriableFailure"),
            (e.maxAttemptsReached = "maxAttemptsReached"));
        })(L || (L = {}));
        var U,
          D = function (e, t) {
            return function (r) {
              var n = Math.pow(2, r - 1) * e;
              return Math.min(t, n);
            };
          },
          N = (function () {
            function e() {
              ((this.completeItems = new Map()), (this.requestQueue = []), (this.active = !1));
            }
            return (
              (e.prototype.handleBatchResult = function (e, t, r, n) {
                var a = this,
                  i = 0,
                  o = new Date().getTime();
                t.forEach(function (e) {
                  if (a.completeItems.has(e.key)) e.resolve(a.completeItems.get(e.key));
                  else if (
                    n.maxRetryAttempts &&
                    n.maxRetryAttempts > 0 &&
                    r !== L.unretriableFailure
                  ) {
                    var t = (function (e, t) {
                      return t.getFailureCooldown ? t.getFailureCooldown(e) : 1e3;
                    })(e.retryAttempts, n);
                    ((i = i > 0 ? Math.min(i, t) : t),
                      e.retryAttempts + 1 <= n.maxRetryAttempts
                        ? ((e.retryAttempts += 1),
                          (e.queueAfter = o + t),
                          a.requestQueue.unshift(e))
                        : e.reject(L.maxAttemptsReached));
                  } else e.reject(r);
                });
                var s = 250;
                (n && n.processBatchWaitTime && (s = n.processBatchWaitTime),
                  i > 0 &&
                    setTimeout(function () {
                      return a.processQueue(e, n);
                    }, i + s),
                  (this.active = !1),
                  this.processQueue(e, n));
              }),
              (e.prototype.processQueue = function (e, t) {
                var r,
                  n = this;
                if (!this.active) {
                  for (
                    var a = [], i = new Map(), o = [], s = new Date().getTime();
                    a.length < t.batchSize && this.requestQueue.length > 0;
                  ) {
                    var u = this.requestQueue.shift();
                    u &&
                      (u.queueAfter > s
                        ? (i.set(u.key, u), o.push(u))
                        : this.completeItems.has(u.key)
                          ? u.resolve(this.completeItems.get(u.key))
                          : i.has(u.key)
                            ? o.push(u)
                            : (i.set(u.key, u), a.push(u)));
                  }
                  ((r = this.requestQueue).push.apply(r, o),
                    a.length <= 0 ||
                      ((this.active = !0),
                      e(a).then(
                        function (r) {
                          (Object.keys(r).forEach(function (e) {
                            n.saveCompleteItem(e, r[e], t);
                          }),
                            n.handleBatchResult(e, a, L.processFailure, t));
                        },
                        function (r) {
                          n.handleBatchResult(e, a, r, t);
                        }
                      )));
                }
              }),
              (e.prototype.saveCompleteItem = function (e, t, r) {
                var n = this;
                (this.completeItems.set(e, t),
                  r.getItemExpiration &&
                    setTimeout(function () {
                      n.completeItems.delete(e);
                    }, r.getItemExpiration(e)));
              }),
              (e.prototype.queueItem = function (e, t, r, n) {
                var a = this;
                return new Promise(function (i, o) {
                  (a.requestQueue.push({
                    key: r(e),
                    itemId: e,
                    retryAttempts: 0,
                    queueAfter: 0,
                    startTime: new Date(),
                    resolve: i,
                    reject: o
                  }),
                    setTimeout(function () {
                      return a.processQueue(t, n);
                    }, n.processBatchWaitTime));
                });
              }),
              (e.prototype.invalidateItem = function (e, t) {
                this.completeItems.delete(t(e));
              }),
              e
            );
          })(),
          E = function () {
            return (
              (E =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var a in (t = arguments[r]))
                      Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                  return e;
                }),
              E.apply(this, arguments)
            );
          },
          R =
            ((function () {
              function e() {
                ((this.createExponentialBackoffCooldown = D),
                  (this.createQueueProcessor = function (e, t, r) {
                    var n = new N();
                    return {
                      queueItem: function (a) {
                        return n.queueItem(a, e, t, r);
                      },
                      invalidateItem: function (e) {
                        return n.invalidateItem(e, t);
                      }
                    };
                  }));
              }
              e.prototype.createRequestProcessor = function (e, t, r) {
                var n = E({}, r);
                return (
                  n.processBatchWaitTime || (n.processBatchWaitTime = 250),
                  this.createQueueProcessor(e, t, n)
                );
              };
            })(),
            new Uint8Array(16));
        function O() {
          if (
            !U &&
            !(U =
              ("undefined" != typeof crypto &&
                crypto.getRandomValues &&
                crypto.getRandomValues.bind(crypto)) ||
              ("undefined" != typeof msCrypto &&
                "function" == typeof msCrypto.getRandomValues &&
                msCrypto.getRandomValues.bind(msCrypto)))
          )
            throw new Error(
              "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
            );
          return U(R);
        }
        var B =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        for (
          var V = function (e) {
              return "string" == typeof e && B.test(e);
            },
            j = [],
            G = 0;
          G < 256;
          ++G
        )
          j.push((G + 256).toString(16).substr(1));
        var H = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            r = (
              j[e[t + 0]] +
              j[e[t + 1]] +
              j[e[t + 2]] +
              j[e[t + 3]] +
              "-" +
              j[e[t + 4]] +
              j[e[t + 5]] +
              "-" +
              j[e[t + 6]] +
              j[e[t + 7]] +
              "-" +
              j[e[t + 8]] +
              j[e[t + 9]] +
              "-" +
              j[e[t + 10]] +
              j[e[t + 11]] +
              j[e[t + 12]] +
              j[e[t + 13]] +
              j[e[t + 14]] +
              j[e[t + 15]]
            ).toLowerCase();
          if (!V(r)) throw TypeError("Stringified UUID is invalid");
          return r;
        };
        var z = function (e, t, r) {
            var n = (e = e || {}).random || (e.rng || O)();
            if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
              r = r || 0;
              for (var a = 0; a < 16; ++a) t[r + a] = n[a];
              return t;
            }
            return H(n);
          },
          W = function (e, t, r, n) {
            return new (r || (r = Promise))(function (a, i) {
              function o(e) {
                try {
                  u(n.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  u(n.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })).then(o, s);
              }
              u((n = n.apply(e, t || [])).next());
            });
          },
          q = function (e, t) {
            var r,
              n,
              a,
              i,
              o = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: []
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (r) throw new TypeError("Generator is already executing.");
                  for (; o;)
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (a =
                            2 & i[0]
                              ? n.return
                              : i[0]
                                ? n.throw || ((a = n.return) && a.call(n), 0)
                                : n.next) &&
                          !(a = a.call(n, i[1])).done)
                      )
                        return a;
                      switch (((n = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                        case 0:
                        case 1:
                          a = i;
                          break;
                        case 4:
                          return (o.label++, { value: i[1], done: !1 });
                        case 5:
                          (o.label++, (n = i[1]), (i = [0]));
                          continue;
                        case 7:
                          ((i = o.ops.pop()), o.trys.pop());
                          continue;
                        default:
                          if (
                            !((a = o.trys),
                            (a = a.length > 0 && a[a.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                          ) {
                            o = 0;
                            continue;
                          }
                          if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                            o.label = i[1];
                            break;
                          }
                          if (6 === i[0] && o.label < a[1]) {
                            ((o.label = a[1]), (a = i));
                            break;
                          }
                          if (a && o.label < a[2]) {
                            ((o.label = a[2]), o.ops.push(i));
                            break;
                          }
                          (a[2] && o.ops.pop(), o.trys.pop());
                          continue;
                      }
                      i = t.call(e, o);
                    } catch (e) {
                      ((i = [6, e]), (n = 0));
                    } finally {
                      r = a = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          },
          $ = z(),
          K = function (e, t) {
            return W(void 0, void 0, Promise, function () {
              var r, a;
              return q(this, function (i) {
                switch (i.label) {
                  case 0:
                    return !e || e.length < 3
                      ? [2, { paginationMethod: "Scroll", nextPageCursor: "", data: [] }]
                      : [
                          4,
                          c.httpService.get(
                            {
                              retryable: !0,
                              withCredentials: !0,
                              url: n.EnvironmentUrls.apiGatewayUrl + "/search-api/omni-search"
                            },
                            {
                              verticalType: "user",
                              searchQuery: e,
                              pageToken: t,
                              globalSessionId: $,
                              sessionId: $
                            }
                          )
                        ];
                  case 1:
                    return (
                      (r = i.sent()),
                      (a = []),
                      r.data.searchResults.forEach(function (e) {
                        e.contents.forEach(function (e) {
                          var t = c.urlService.getAbsoluteUrl("/users/" + e.contentId + "/profile"),
                            r = {
                              id: e.contentId,
                              name: e.username,
                              displayName: e.displayName,
                              previousUsernames: e.previousUsernames || [],
                              hasVerifiedBadge: e.hasVerifiedBadge,
                              isCurrentUser: Number(n.CurrentUser.userId) === e.contentId,
                              profileUrl: c.urlService.getUrlWithQueries(t, {
                                friendshipSourceType:
                                  s.default.playerSearchFriendshipOriginSourceType
                              })
                            };
                          a.push(r);
                        });
                      }),
                      [
                        2,
                        {
                          paginationMethod: r.data.paginationMethod,
                          nextPageCursor: r.data.nextPageToken,
                          data: a
                        }
                      ]
                    );
                }
              });
            });
          },
          Q = r(992),
          _ = r.n(Q),
          Z = function () {
            return (
              (Z =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var a in (t = arguments[r]))
                      Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                  return e;
                }),
              Z.apply(this, arguments)
            );
          },
          Y = function (e, t, r, n) {
            return new (r || (r = Promise))(function (a, i) {
              function o(e) {
                try {
                  u(n.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  u(n.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })).then(o, s);
              }
              u((n = n.apply(e, t || [])).next());
            });
          },
          J = function (e, t) {
            var r,
              n,
              a,
              i,
              o = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: []
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (r) throw new TypeError("Generator is already executing.");
                  for (; o;)
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (a =
                            2 & i[0]
                              ? n.return
                              : i[0]
                                ? n.throw || ((a = n.return) && a.call(n), 0)
                                : n.next) &&
                          !(a = a.call(n, i[1])).done)
                      )
                        return a;
                      switch (((n = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                        case 0:
                        case 1:
                          a = i;
                          break;
                        case 4:
                          return (o.label++, { value: i[1], done: !1 });
                        case 5:
                          (o.label++, (n = i[1]), (i = [0]));
                          continue;
                        case 7:
                          ((i = o.ops.pop()), o.trys.pop());
                          continue;
                        default:
                          if (
                            !((a = o.trys),
                            (a = a.length > 0 && a[a.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                          ) {
                            o = 0;
                            continue;
                          }
                          if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                            o.label = i[1];
                            break;
                          }
                          if (6 === i[0] && o.label < a[1]) {
                            ((o.label = a[1]), (a = i));
                            break;
                          }
                          if (a && o.label < a[2]) {
                            ((o.label = a[2]), o.ops.push(i));
                            break;
                          }
                          (a[2] && o.ops.pop(), o.trys.pop());
                          continue;
                      }
                      i = t.call(e, o);
                    } catch (e) {
                      ((i = [6, e]), (n = 0));
                    } finally {
                      r = a = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          },
          X = function (e) {
            return Y(void 0, void 0, Promise, function () {
              return J(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (e.length < 1) return [2, []];
                    if (!n.CurrentUser.isAuthenticated)
                      return [
                        2,
                        e.map(function (e) {
                          return { universeId: e, isPlayable: !1 };
                        })
                      ];
                    t.label = 1;
                  case 1:
                    return (
                      t.trys.push([1, 3, , 4]),
                      [
                        4,
                        c.httpService.get(
                          {
                            retryable: !0,
                            url:
                              n.EnvironmentUrls.gamesApi + "/v1/games/multiget-playability-status",
                            withCredentials: !0
                          },
                          { universeIds: e.join(",") }
                        )
                      ]
                    );
                  case 2:
                    return [2, t.sent().data];
                  case 3:
                    return (
                      t.sent(),
                      [
                        2,
                        e.map(function (e) {
                          return { universeId: e, isPlayable: !1 };
                        })
                      ]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          },
          ee = function (e) {
            return Y(void 0, void 0, Promise, function () {
              var t;
              return J(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (((t = {}), e.length < 1)) return [2, t];
                    (e.forEach(function (e) {
                      t[e] = !1;
                    }),
                      (r.label = 1));
                  case 1:
                    return (r.trys.push([1, 3, , 4]), [4, X(Array.from(e))]);
                  case 2:
                    return (
                      r.sent().forEach(function (e) {
                        t[e.universeId] = e.isPlayable;
                      }),
                      [3, 4]
                    );
                  case 3:
                    return (r.sent(), [3, 4]);
                  case 4:
                    return [2, t];
                }
              });
            });
          },
          te = function (e) {
            return Y(void 0, void 0, Promise, function () {
              var t, r, n, a, i, o;
              return J(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (e.length < 1) return [2, []];
                    s.label = 1;
                  case 1:
                    return (
                      s.trys.push([1, 5, , 6]),
                      [4, _().getPresenceProvider().getPresences(e)]
                    );
                  case 2:
                    for (a in ((t = s.sent()), (r = new Set()), (n = []), t))
                      ((i = t[a]),
                        n.push(Z({ gameIsPlayable: !1 }, i)),
                        i.universeId &&
                          i.userPresenceType === _().PresenceType.Game &&
                          i.gameId &&
                          r.add(i.universeId));
                    return r.size > 0 ? [4, ee(Array.from(r))] : [3, 4];
                  case 3:
                    ((o = s.sent()),
                      n.forEach(function (e) {
                        e.universeId &&
                          o[e.universeId] &&
                          e.userPresenceType === _().PresenceType.Game &&
                          e.gameId &&
                          (e.gameIsPlayable = !0);
                      }),
                      (s.label = 4));
                  case 4:
                    return [2, n];
                  case 5:
                    return (
                      s.sent(),
                      [
                        2,
                        e.map(function (e) {
                          return {
                            userId: e,
                            userPresenceType: _().PresenceType.Offline,
                            gameIsPlayable: !1,
                            lastLocation: ""
                          };
                        })
                      ]
                    );
                  case 6:
                    return [2];
                }
              });
            });
          },
          re = X,
          ne = function (e, t, r, n) {
            return new (r || (r = Promise))(function (a, i) {
              function o(e) {
                try {
                  u(n.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  u(n.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })).then(o, s);
              }
              u((n = n.apply(e, t || [])).next());
            });
          },
          ae = function (e, t) {
            var r,
              n,
              a,
              i,
              o = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: []
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (r) throw new TypeError("Generator is already executing.");
                  for (; o;)
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (a =
                            2 & i[0]
                              ? n.return
                              : i[0]
                                ? n.throw || ((a = n.return) && a.call(n), 0)
                                : n.next) &&
                          !(a = a.call(n, i[1])).done)
                      )
                        return a;
                      switch (((n = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                        case 0:
                        case 1:
                          a = i;
                          break;
                        case 4:
                          return (o.label++, { value: i[1], done: !1 });
                        case 5:
                          (o.label++, (n = i[1]), (i = [0]));
                          continue;
                        case 7:
                          ((i = o.ops.pop()), o.trys.pop());
                          continue;
                        default:
                          if (
                            !((a = o.trys),
                            (a = a.length > 0 && a[a.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                          ) {
                            o = 0;
                            continue;
                          }
                          if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                            o.label = i[1];
                            break;
                          }
                          if (6 === i[0] && o.label < a[1]) {
                            ((o.label = a[1]), (a = i));
                            break;
                          }
                          if (a && o.label < a[2]) {
                            ((o.label = a[2]), o.ops.push(i));
                            break;
                          }
                          (a[2] && o.ops.pop(), o.trys.pop());
                          continue;
                      }
                      i = t.call(e, o);
                    } catch (e) {
                      ((i = [6, e]), (n = 0));
                    } finally {
                      r = a = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          },
          ie = function (e) {
            return ne(void 0, void 0, Promise, function () {
              return ae(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (e.length < 1) return [2, []];
                    if (!n.CurrentUser.isAuthenticated) return [2, []];
                    t.label = 1;
                  case 1:
                    return (
                      t.trys.push([1, 3, , 4]),
                      [
                        4,
                        c.httpService.post(
                          {
                            retryable: !0,
                            withCredentials: !0,
                            url: n.EnvironmentUrls.friendsApi + "/v1/user/following-exists"
                          },
                          { targetUserIds: e }
                        )
                      ]
                    );
                  case 2:
                    return [2, t.sent().data.followings];
                  case 3:
                    return (
                      t.sent(),
                      [
                        2,
                        e.map(function (e) {
                          return { userId: e, isFollowed: !1, isFollowing: !1 };
                        })
                      ]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          },
          oe = function (e) {
            return ne(void 0, void 0, Promise, function () {
              return ae(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (e.length < 1) return [2, []];
                    if (!n.CurrentUser.isAuthenticated) return [2, []];
                    t.label = 1;
                  case 1:
                    return (
                      t.trys.push([1, 3, , 4]),
                      [
                        4,
                        c.httpService.get(
                          {
                            retryable: !0,
                            withCredentials: !0,
                            url:
                              n.EnvironmentUrls.friendsApi +
                              "/v1/users/" +
                              n.CurrentUser.userId +
                              "/friends/statuses"
                          },
                          { userIds: e.join(",") }
                        )
                      ]
                    );
                  case 2:
                    return [2, t.sent().data.data];
                  case 3:
                    return (t.sent(), [2, []]);
                  case 4:
                    return [2];
                }
              });
            });
          };
        function se(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return ue(e);
            })(e) ||
            (function (e) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return ue(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(e);
              if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return ue(e, t);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function ue(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function ce(e, t, r, n, a, i, o) {
          try {
            var s = e[i](o),
              u = s.value;
          } catch (e) {
            return void r(e);
          }
          s.done ? t(u) : Promise.resolve(u).then(n, a);
        }
        function le(e) {
          return function () {
            var t = this,
              r = arguments;
            return new Promise(function (n, a) {
              var i = e.apply(t, r);
              function o(e) {
                ce(i, n, a, o, s, "next", e);
              }
              function s(e) {
                ce(i, n, a, o, s, "throw", e);
              }
              o(void 0);
            });
          };
        }
        function pe(e, t, r, a, u, c) {
          function l(e) {
            var r = e.data;
            r.forEach(function (e, t) {
              e.sortOrder = t;
            });
            var a = r.map(function (e) {
                return e.id;
              }),
              s = [];
            return (
              n.CurrentUser.isAuthenticated &&
                s.push.apply(
                  s,
                  se(
                    (function (e) {
                      var r = t(
                          (function () {
                            var t = le(
                              regeneratorRuntime.mark(function t(r, n) {
                                return regeneratorRuntime.wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return ((t.prev = 0), (t.t0 = r), (t.next = 4), te(e));
                                        case 4:
                                          ((t.t1 = t.sent), (0, t.t0)(t.t1), (t.next = 11));
                                          break;
                                        case 8:
                                          ((t.prev = 8), (t.t2 = t.catch(0)), n(t.t2));
                                        case 11:
                                        case "end":
                                          return t.stop();
                                      }
                                  },
                                  t,
                                  null,
                                  [[0, 8]]
                                );
                              })
                            );
                            return function (e, r) {
                              return t.apply(this, arguments);
                            };
                          })()
                        ),
                        n = t(
                          (function () {
                            var t = le(
                              regeneratorRuntime.mark(function t(r, n) {
                                return regeneratorRuntime.wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return ((t.prev = 0), (t.t0 = r), (t.next = 4), ie(e));
                                        case 4:
                                          ((t.t1 = t.sent), (0, t.t0)(t.t1), (t.next = 11));
                                          break;
                                        case 8:
                                          ((t.prev = 8), (t.t2 = t.catch(0)), n(t.t2));
                                        case 11:
                                        case "end":
                                          return t.stop();
                                      }
                                  },
                                  t,
                                  null,
                                  [[0, 8]]
                                );
                              })
                            );
                            return function (e, r) {
                              return t.apply(this, arguments);
                            };
                          })()
                        ),
                        a = t(
                          (function () {
                            var t = le(
                              regeneratorRuntime.mark(function t(r, n) {
                                return regeneratorRuntime.wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return ((t.prev = 0), (t.t0 = r), (t.next = 4), oe(e));
                                        case 4:
                                          ((t.t1 = t.sent), (0, t.t0)(t.t1), (t.next = 11));
                                          break;
                                        case 8:
                                          ((t.prev = 8), (t.t2 = t.catch(0)), n(t.t2));
                                        case 11:
                                        case "end":
                                          return t.stop();
                                      }
                                  },
                                  t,
                                  null,
                                  [[0, 8]]
                                );
                              })
                            );
                            return function (e, r) {
                              return t.apply(this, arguments);
                            };
                          })()
                        ),
                        i = t(
                          (function () {
                            var t = le(
                              regeneratorRuntime.mark(function t(r, n) {
                                return regeneratorRuntime.wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return ((t.prev = 0), (t.t0 = r), (t.next = 4), f(e));
                                        case 4:
                                          ((t.t1 = t.sent), (0, t.t0)(t.t1), (t.next = 11));
                                          break;
                                        case 8:
                                          ((t.prev = 8), (t.t2 = t.catch(0)), n(t.t2));
                                        case 11:
                                        case "end":
                                          return t.stop();
                                      }
                                  },
                                  t,
                                  null,
                                  [[0, 8]]
                                );
                              })
                            );
                            return function (e, r) {
                              return t.apply(this, arguments);
                            };
                          })()
                        );
                      return [i, n, r, a];
                    })(a)
                  )
                ),
              t.all(s).then(function (t) {
                var n = {};
                (i().forEach(r, function (e) {
                  n[e.id] = e;
                }),
                  i().forEach(t, function (e) {
                    e.map(function (e) {
                      var t = e.UserId || e.userId || e.id;
                      return Object.assign(n[t], e);
                    });
                  }),
                  (e.processedResult = c(
                    Object.keys(n).map(function (e) {
                      return n[e];
                    }),
                    "sortOrder"
                  )));
                try {
                  (0, o.initRobloxBadgesFrameworkAgnostic)({
                    overrideIconClass: "verified-badge-icon-player-search"
                  });
                } catch (e) {}
                return e;
              })
            );
          }
          return {
            getSearchResults: function (e, r) {
              return t(
                (function () {
                  var t = le(
                    regeneratorRuntime.mark(function t(n, a) {
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return ((t.prev = 0), (t.next = 3), K(e, r));
                              case 3:
                                (l(t.sent).then(n, a), (t.next = 10));
                                break;
                              case 7:
                                ((t.prev = 7), (t.t0 = t.catch(0)), a(t.t0));
                              case 10:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 7]]
                      );
                    })
                  );
                  return function (e, r) {
                    return t.apply(this, arguments);
                  };
                })()
              );
            },
            gamePlayabilityRequest: function (e) {
              return t(
                (function () {
                  var t = le(
                    regeneratorRuntime.mark(function t(r, n) {
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return ((t.prev = 0), (t.t0 = r), (t.next = 4), re(e));
                              case 4:
                                ((t.t1 = t.sent), (0, t.t0)(t.t1), (t.next = 11));
                                break;
                              case 8:
                                ((t.prev = 8), (t.t2 = t.catch(0)), n(t.t2));
                              case 11:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 8]]
                      );
                    })
                  );
                  return function (e, r) {
                    return t.apply(this, arguments);
                  };
                })()
              );
            },
            isChatEntrypointEnabled: function () {
              return t(function (e, t) {
                var r = { url: s.default.urls.chatMetadataUrl };
                return a.httpGet(r).then(
                  function (t) {
                    e(t.isChatUserMessagesEnabled);
                  },
                  function () {
                    e(!1);
                  }
                );
              });
            },
            addFriend: function (e) {
              var n = {
                  url: r("formatString")(s.default.urls.requestFriendshipUrl, { targetId: e })
                },
                i = {
                  friendshipOriginSourceType: s.default.playerSearchFriendshipOriginSourceType
                };
              return a.httpPost(n, i, !0).then(
                function (e) {
                  return e.data;
                },
                function (e) {
                  return t.reject(e);
                }
              );
            },
            acceptFriend: function (e) {
              var t = {
                url: r("formatString")(s.default.urls.acceptFriendRequestUrl, { targetId: e })
              };
              return a.httpPost(t);
            },
            unsafeInputText: "unsafeInput"
          };
        }
        ((pe.$inject = ["$log", "$q", "$filter", "httpService", "urlService", "orderByFilter"]),
          u.A.factory("playerSearchService", pe));
        var de = pe;
      },
      210: function (e) {
        e.exports =
          ' <div class="avatar-card-btns" ng-if="user.isCurrentUser"> <h5 class="info-text"> <span ng-bind="\'Label.ThisIsYou\' | translate"></span> </h5> </div> <div class="avatar-card-btns" ng-class="{\'not-visible\': pageData.inMobileOrTabletBrowser}" ng-if="showButtonsForFriends(user)"> <button class="btn-growth-md join-game" type="button" ng-click="joinGame(user)" ng-if="user.gameIsPlayable"> <span ng-bind="\'Action.JoinGame\' | translate"></span> </button> <button class="btn-primary-md" type="button" ng-click="startChat(user.id)" ng-if="layout.isChatEntrypointEnabled" ng-class="{\'full-size\': !user.gameIsPlayable}" ng-bind="\'Action.Chat\' | translate"> </button> </div> <div class="avatar-card-btns" ng-class="{\'not-visible\': user.isCurrentUser}" ng-if="showButtonsForNonFriends(user)"> <button class="btn-control-md disabled full-size" type="button" ng-disabled="true" ng-if="user.FriendshipStatus === layout.friendship.PendingOnOtherUser"> <span ng-bind="\'Action.RequestSent\' | translate"></span> </button> <button class="btn-control-md full-size" type="button" ng-click="acceptFriend(user)" ng-if="user.FriendshipStatus === layout.friendship.PendingOnCurrentUser"> <span ng-bind="\'Action.AcceptRequest\' | translate"></span> </button> <button class="btn-control-md full-size" type="button" ng-click="addFriend(user)" ng-if="user.FriendshipStatus === layout.friendship.NoFriendship"> <span ng-bind="\'Action.AddFriend\' | translate"></span> </button> </div> <div class="mobile-btn-container" ng-if="!layout.isUserGuest && !user.isCurrentUser"> <div class="mobile-card-btn" ng-click="startChat(user.id)" ng-if="layout.isChatEntrypointEnabled && user.FriendshipStatus === layout.friendship.Friends && pageData.inApp"> <span class="btn-chat icon-chat"></span> </div> <div class="mobile-card-btn" ng-click="addFriend(user)" ng-if="user.FriendshipStatus === layout.friendship.NoFriendship"> <span class="btn-add-friend icon-addfriend"></span> </div> <div class="mobile-card-btn" ng-click="acceptFriend(user)" ng-if="user.FriendshipStatus === layout.friendship.PendingOnCurrentUser"> <span class="btn-add-friend icon-acceptfriend"></span> </div> <div class="mobile-card-btn" ng-if="user.FriendshipStatus === layout.friendship.PendingOnOtherUser"> <span class="btn-pending-friend icon-sandglass inactive"></span> </div> </div>';
      },
      938: function (e) {
        e.exports =
          '<span> <div class="avatar-name-container" ng-class="{\'shimmer\': user.AreNamesLoading}"> <div ng-if="layout.isDisplayNamesEnabled" class="text-overflow avatar-name" ng-bind="user.PrimaryName"></div> <div ng-if="!layout.isDisplayNamesEnabled" class="text-overflow avatar-name" ng-bind="user.Username"></div> <span ng-if="showVerifiedBadge(user) && layout.inMobile" class="verified-badge-icon-player-search" data-size="Title" data-additionalimgclass="verified-badge-icon-player-search-rendered-mobile" data-disablemodal> </span> <span ng-if="showVerifiedBadge(user) && !layout.inMobile" class="verified-badge-icon-player-search" data-size="Title" data-additionalimgclass="verified-badge-icon-player-search-rendered" data-disablemodal> </span> </div> <div ng-if="layout.isDisplayNamesEnabled" ng-class="{\'shimmer\': user.AreNamesLoading}" class="text-overflow avatar-card-label">{{user.AreNamesLoading ? "" : "@"}}{{user.Username}}</div> <div class="text-overflow avatar-card-label" ng-switch="labelToShow(user)"> <span class="previous-name" ng-switch-when="aka"> <span class="icon-pastname" title="{{\'Label.NewUsername\' | translate}}"></span> <span class="small-oneline text" ng-bind="\'Label.NewUsername\' | translate"></span> <span class="mobile-extra-details" ng-if="layout.inMobile"> <span class="friends" ng-if="user.FriendshipStatus === layout.friendship.Friends"> <span class="icon-nav-friends"></span> <span class="icon-text" ng-bind="\'Label.YouAreFriends\' | translate"></span> </span> <span class="following" ng-if="user.IsFollowed"> <span ng-bind="\'Label.YouAreFollowing\' | translate"></span> </span> </span> </span> <span class="friends" ng-switch-when="friends"> <span class="icon-nav-friends"></span> <span class="icon-text" ng-bind-html="\'Label.YouAreFriends\' | translate"></span> </span> <span class="following" ng-switch-when="following"> <span ng-bind="\'Label.YouAreFollowing\' | translate"></span> </span> <span class="yourself" ng-switch-when="yourself"> <span ng-bind="\'Label.ThisIsYou\' | translate"></span> </span> </div> <div class="avatar-status-container text-overflow" ng-if="getUserInfo(user) === layout.userInfo.group"> <span class="icon-nav-group" title="{{\'Label.PrimaryGroup\' | translate}}"></span> <a ng-href="{{user.primaryGroup.url}}" ng-click="$event.stopPropagation()" title="{{user.primaryGroup.name}}" class="text-link text-overflow avatar-status-link" ng-bind="user.primaryGroup.name"></a> </div> <div ng-if="labelToShow(user) === \'presence\' || getUserInfo(user) === layout.userInfo.game || getUserInfo(user) === layout.userInfo.studio" class="avatar-status-container text-overflow"> <presence-status-label user-id="user.id" class-name="avatar-card-label" link-class-name="text-link text-overflow avatar-status-link"></presence-status-label> </div> </span> ';
      },
      554: function (e) {
        e.exports =
          '<div> <div class="top-row"> <h1 class="header font-header-1"> <span ng-bind-html="\'Heading.PlayerResultsFor\' | translate:{startSpan: \'<span class=keyword>\', endSpan: \'</span>\', keyword: getSanitizedValue(pageData.keyword)}"></span> </h1> <div class="search-container" ng-hide="pageData.inApp"> <div class="input-group"> <input class="form-control input-field" type="text" placeholder="{{(\'Label.Search\' | translate)}}" ng-keyup="$event.keyCode == 13 && startNewSearch($event)" ng-model="formData.keyword"/> <div class="input-group-btn"> <button class="input-addon-btn" ng-click="startNewSearch()"> <span class="icon-search"></span> </button> </div> </div> </div> </div> <div class="col-xs-12 section-content-off no-results" ng-show="showNoMatches()"> <span ng-bind="\'Label.NoMatchesAvailable\' | translate:{keyword: pageData.keyword}"></span> </div> <div class="col-xs-12 section-content-off no-results" ng-show="layout.isKeywordTooShort"> <span ng-bind="\'Label.EnterMinCharacters\' | translate:{keywordMinLength: pageData.keywordMinLength}"></span> </div> <div class="col-xs-12 section-content-off unsafe-input" ng-show="layout.unsafeInputDetected"> <span ng-bind="\'Label.UnsafeInput\' | translate"></span> </div> <ul class="search-result avatar-cards" ng-include="\'search-result-item\'" ng-if="layout.useInfiniteScroll" infinite-scroll="getNextScrollResults()" infinite-scroll-distance="0.8"> </ul> <ul class="search-result avatar-cards" ng-include="\'search-result-item\'" ng-if="!layout.useInfiniteScroll"> </ul> <div class="results-loading" ng-show="layout.resultsLoading"> <span class="spinner spinner-default load-image"></span> </div> <div class="load-more-container" ng-show="!layout.useInfiniteScroll && !layout.allResultsLoaded && !layout.resultsLoading"> <button class="btn-control-md btn-full-width" ng-click="getNextScrollResults()"> <span ng-bind="\'Action.LoadMore\' | translate"></span> </button> </div> </div> ';
      },
      930: function (e) {
        e.exports =
          '<li class="player-item avatar-card responsive-card" ng-repeat="user in results"> <div class="avatar-card-container"> <div class="avatar-card-content" ng-click="openProfile(user, $event)"> <div class="avatar-card-fullbody"> <a ng-href="{{user.profileUrl}}" class="avatar-card-link"> <thumbnail-2d thumbnail-type="thumbnailTypes.avatarHeadshot" thumbnail-target-id="user.id" thumbnail-options="{ includeProfileFrame: true }" class="avatar-card-image"/> </a> <presence-status-icon user-id="user.id" ng-if="!layout.isUserGuest"></presence-status-icon> </div> <div class="avatar-card-caption" ng-include="\'player-card-content\'"> </div> </div> <ng-include src="\'player-card-buttons\'"></ng-include> </div> </li> ';
      },
      407: function (e) {
        e.exports =
          '<div id="player-search-page" class="player-search-page" ng-controller="playerSearchController"> <system-feedback></system-feedback> <div ng-include="\'player-search-page\'"></div> </div>';
      },
      577: function (e) {
        "use strict";
        e.exports = Roblox;
      },
      992: function (e) {
        "use strict";
        e.exports = RobloxPresence;
      },
      127: function (e) {
        "use strict";
        e.exports = angular;
      }
    },
    t = {};
  function r(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var i = (t[n] = { exports: {} });
    return (e[n](i, i.exports, r), i.exports);
  }
  ((r.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return (r.d(t, { a: t }), t);
  }),
    (r.d = function (e, t) {
      for (var n in t)
        r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.r = function (e) {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (function () {
      "use strict";
      var e = r(127),
        t = r.n(e),
        n = r(525),
        a = r(471);
      ((0, n.importFilesUnderPath)(r(448)),
        (0, n.importFilesUnderPath)(r(569)),
        (0, n.importFilesUnderPath)(r(860)),
        (0, n.importFilesUnderPath)(r(963)));
      var i = r(212),
        o = (0, n.templateCacheGenerator)(t(), "playerSearchAppTemplates", i);
      t().element(function () {
        var e =
          document.getElementById("player-search-web-app") ||
          document.getElementById("player-search-container");
        e.classList.add("player-search-container");
        var r = e.querySelector("div") || document.createElement("div");
        (r.setAttribute("player-search-base", ""),
          e.appendChild(r),
          t().bootstrap("#".concat(e.id), [a.A.name, o.name]));
      });
    })());
})();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/ee26bbe5763d90c81857b6f253d1c31a-playerSearch.bundle.min.js.map

/* Bundle detector */
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("PlayerSearch");
