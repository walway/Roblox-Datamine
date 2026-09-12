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
      (e._sentryDebugIds[t] = "5659896c-d11e-4cc4-8cae-e35918dd05db"),
      (e._sentryDebugIdIdentifier = "sentry-dbid-5659896c-d11e-4cc4-8cae-e35918dd05db"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [322],
  {
    31434: (e, t, n) => {
      n.d(t, { ZY7: () => N });
      var r = n(1300),
        s = n(76715);
      function i(e) {
        var t, n;
        return null == (t = e)
          ? t
          : {
              id: (0, r.t2)(t, "id") ? t.id : void 0,
              type: (0, r.t2)(t, "type") ? t.type : void 0,
              typeId: (0, r.t2)(t, "typeId") ? t.typeId : void 0,
              name: (0, r.t2)(t, "name") ? t.name : void 0,
              description: (0, r.t2)(t, "description") ? t.description : void 0,
              creator: (0, r.t2)(t, "creator")
                ? null == (n = t.creator)
                  ? n
                  : {
                      type: (0, r.t2)(n, "type") ? n.type : void 0,
                      typeId: (0, r.t2)(n, "typeId") ? n.typeId : void 0,
                      targetId: (0, r.t2)(n, "targetId") ? n.targetId : void 0
                    }
                : void 0,
              genres: (0, r.t2)(t, "genres") ? t.genres : void 0,
              created: (0, r.t2)(t, "created") ? new Date(t.created) : void 0,
              updated: (0, r.t2)(t, "updated") ? new Date(t.updated) : void 0,
              enableComments: (0, r.t2)(t, "enableComments") ? t.enableComments : void 0,
              isCopyingAllowed: (0, r.t2)(t, "isCopyingAllowed") ? t.isCopyingAllowed : void 0,
              isPublicDomainEnabled: (0, r.t2)(t, "isPublicDomainEnabled")
                ? t.isPublicDomainEnabled
                : void 0,
              locale: (0, r.t2)(t, "locale") ? t.locale : void 0,
              localName: (0, r.t2)(t, "localName") ? t.localName : void 0,
              localDescription: (0, r.t2)(t, "localDescription") ? t.localDescription : void 0,
              moderationStatus: (0, r.t2)(t, "moderationStatus") ? t.moderationStatus : void 0,
              isModerated: (0, r.t2)(t, "isModerated") ? t.isModerated : void 0,
              reviewStatus: (0, r.t2)(t, "reviewStatus") ? t.reviewStatus : void 0,
              isVersioningEnabled: (0, r.t2)(t, "isVersioningEnabled")
                ? t.isVersioningEnabled
                : void 0,
              isArchivable: (0, r.t2)(t, "isArchivable") ? t.isArchivable : void 0,
              canHaveThumbnail: (0, r.t2)(t, "canHaveThumbnail") ? t.canHaveThumbnail : void 0
            };
      }
      function a(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              assetId: (0, r.t2)(t, "assetId") ? t.assetId : void 0,
              assetVersionNumber: (0, r.t2)(t, "assetVersionNumber")
                ? t.assetVersionNumber
                : void 0,
              creatorType: (0, r.t2)(t, "creatorType") ? t.creatorType : void 0,
              creatorTargetId: (0, r.t2)(t, "creatorTargetId") ? t.creatorTargetId : void 0,
              creatingUniverseId: (0, r.t2)(t, "creatingUniverseId")
                ? t.creatingUniverseId
                : void 0,
              created: (0, r.t2)(t, "created") ? new Date(t.created) : void 0,
              isEqualToCurrentPublishedVersion: (0, r.t2)(t, "isEqualToCurrentPublishedVersion")
                ? t.isEqualToCurrentPublishedVersion
                : void 0,
              isPublished: (0, r.t2)(t, "isPublished") ? t.isPublished : void 0
            };
      }
      function o(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              assetId: (0, r.t2)(t, "assetId") ? t.assetId : void 0,
              versionNumber: (0, r.t2)(t, "versionNumber") ? t.versionNumber : void 0,
              status: (0, r.t2)(t, "status") ? t.status : void 0
            };
      }
      function u(e) {
        if (void 0 !== e)
          return null === e ? null : { name: e.name, type: e.type, targetId: e.targetId };
      }
      function d(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              developerProductName: (0, r.t2)(t, "developerProductName")
                ? t.developerProductName
                : void 0,
              revenueAmount: (0, r.t2)(t, "revenueAmount") ? t.revenueAmount : void 0
            };
      }
      function v(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              universeId: (0, r.t2)(t, "universeId") ? t.universeId : void 0,
              yearDashMonth: (0, r.t2)(t, "yearDashMonth") ? t.yearDashMonth : void 0,
              status: (0, r.t2)(t, "status") ? t.status : void 0,
              spreadsheetId: (0, r.t2)(t, "spreadsheetId") ? t.spreadsheetId : void 0
            };
      }
      function c(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              id: (0, r.t2)(t, "id") ? t.id : void 0,
              name: (0, r.t2)(t, "name") ? t.name : void 0,
              description: (0, r.t2)(t, "description") ? t.description : void 0,
              isArchived: (0, r.t2)(t, "isArchived") ? t.isArchived : void 0,
              rootPlaceId: (0, r.t2)(t, "rootPlaceId") ? t.rootPlaceId : void 0,
              isActive: (0, r.t2)(t, "isActive") ? t.isActive : void 0,
              privacyType: (0, r.t2)(t, "privacyType") ? t.privacyType : void 0,
              creatorType: (0, r.t2)(t, "creatorType") ? t.creatorType : void 0,
              creatorTargetId: (0, r.t2)(t, "creatorTargetId") ? t.creatorTargetId : void 0,
              creatorName: (0, r.t2)(t, "creatorName") ? t.creatorName : void 0,
              created: (0, r.t2)(t, "created") ? new Date(t.created) : void 0,
              updated: (0, r.t2)(t, "updated") ? new Date(t.updated) : void 0,
              audiences: (0, r.t2)(t, "audiences") ? t.audiences : void 0
            };
      }
      function l(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              gameTemplateType: (0, r.t2)(t, "gameTemplateType") ? t.gameTemplateType : void 0,
              hasTutorials: (0, r.t2)(t, "hasTutorials") ? t.hasTutorials : void 0,
              universe: (0, r.t2)(t, "universe") ? c(t.universe) : void 0
            };
      }
      function h(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              universeId: (0, r.t2)(t, "universeId") ? t.universeId : void 0,
              createdOn: (0, r.t2)(t, "createdOn") ? new Date(t.createdOn) : void 0,
              createdOnKey: (0, r.t2)(t, "createdOnKey") ? t.createdOnKey : void 0,
              creatorType: (0, r.t2)(t, "creatorType") ? t.creatorType : void 0,
              creatorId: (0, r.t2)(t, "creatorId") ? t.creatorId : void 0,
              creatorName: (0, r.t2)(t, "creatorName") ? t.creatorName : void 0,
              expiredOn: (0, r.t2)(t, "expiredOn") ? new Date(t.expiredOn) : void 0,
              content: (0, r.t2)(t, "content") ? t.content : void 0,
              impressions: (0, r.t2)(t, "impressions") ? t.impressions : void 0,
              plays: (0, r.t2)(t, "plays") ? t.plays : void 0,
              unfollows: (0, r.t2)(t, "unfollows") ? t.unfollows : void 0
            };
      }
      function p(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              id: (0, r.t2)(t, "id") ? t.id : void 0,
              name: (0, r.t2)(t, "name") ? t.name : void 0
            };
      }
      function I(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              month: (0, r.t2)(t, "month") ? t.month : void 0,
              year: (0, r.t2)(t, "year") ? t.year : void 0,
              revenueReportStatus: (0, r.t2)(t, "RevenueReportStatus")
                ? t.RevenueReportStatus
                : void 0
            };
      }
      function m(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              status: (0, r.t2)(t, "status") ? t.status : void 0,
              platformName: (0, r.t2)(t, "platformName") ? t.platformName : void 0,
              crashRatePercentage: (0, r.t2)(t, "crashRatePercentage")
                ? t.crashRatePercentage
                : void 0
            };
      }
      function f(e) {
        if (void 0 !== e) return null === e ? null : { name: e.name, description: e.description };
      }
      function w(e, t) {
        return null == e
          ? e
          : {
              id: (0, r.t2)(e, "id") ? e.id : void 0,
              universeId: (0, r.t2)(e, "universeId") ? e.universeId : void 0,
              name: (0, r.t2)(e, "name") ? e.name : void 0,
              description: (0, r.t2)(e, "description") ? e.description : void 0
            };
      }
      function b(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              assetId: (0, r.t2)(t, "assetId") ? t.assetId : void 0,
              hasUserVoted: (0, r.t2)(t, "hasUserVoted") ? t.hasUserVoted : void 0,
              canUserVote: (0, r.t2)(t, "canUserVote") ? t.canUserVote : void 0,
              shouldShowVotes: (0, r.t2)(t, "shouldShowVotes") ? t.shouldShowVotes : void 0,
              upVotes: (0, r.t2)(t, "upVotes") ? t.upVotes : void 0,
              downVotes: (0, r.t2)(t, "downVotes") ? t.downVotes : void 0,
              reasonForNotAbleToVote: (0, r.t2)(t, "reasonForNotAbleToVote")
                ? t.reasonForNotAbleToVote
                : void 0
            };
      }
      function P(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              assetId: (0, r.t2)(t, "assetId") ? t.assetId : void 0,
              isEndorsed: (0, r.t2)(t, "isEndorsed") ? t.isEndorsed : void 0
            };
      }
      function y(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              id: (0, r.t2)(t, "id") ? t.id : void 0,
              assetTypeId: (0, r.t2)(t, "assetTypeId") ? t.assetTypeId : void 0,
              videoAssetId: (0, r.t2)(t, "videoAssetId") ? t.videoAssetId : void 0,
              assetType: (0, r.t2)(t, "assetType") ? t.assetType : void 0,
              imageId: (0, r.t2)(t, "imageId") ? t.imageId : void 0,
              videoHash: (0, r.t2)(t, "videoHash") ? t.videoHash : void 0,
              videoTitle: (0, r.t2)(t, "videoTitle") ? t.videoTitle : void 0,
              altText: (0, r.t2)(t, "altText") ? t.altText : void 0
            };
      }
      function U(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              type: (0, r.t2)(t, "type") ? t.type : void 0,
              data: (0, r.t2)(t, "data") ? t.data : void 0
            };
      }
      function g(e) {
        if (void 0 !== e) return null === e ? null : { userId: e.userId };
      }
      function q(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              universeId: (0, r.t2)(t, "universeId") ? t.universeId : void 0,
              canManage: (0, r.t2)(t, "canManage") ? t.canManage : void 0,
              canCloudEdit: (0, r.t2)(t, "canCloudEdit") ? t.canCloudEdit : void 0
            };
      }
      function R(e, t) {
        return null == e
          ? e
          : {
              canManage: (0, r.t2)(e, "canManage") ? e.canManage : void 0,
              canCloudEdit: (0, r.t2)(e, "canCloudEdit") ? e.canCloudEdit : void 0
            };
      }
      function T(e, t) {
        return null == e
          ? e
          : {
              allowPrivateServers: (0, r.t2)(e, "allowPrivateServers")
                ? e.allowPrivateServers
                : void 0,
              privateServerPrice: (0, r.t2)(e, "privateServerPrice")
                ? e.privateServerPrice
                : void 0,
              isMeshTextureApiAccessAllowed: (0, r.t2)(e, "isMeshTextureApiAccessAllowed")
                ? e.isMeshTextureApiAccessAllowed
                : void 0,
              id: (0, r.t2)(e, "id") ? e.id : void 0,
              name: (0, r.t2)(e, "name") ? e.name : void 0,
              universeAvatarType: (0, r.t2)(e, "universeAvatarType")
                ? e.universeAvatarType
                : void 0,
              universeScaleType: (0, r.t2)(e, "universeScaleType") ? e.universeScaleType : void 0,
              universeAnimationType: (0, r.t2)(e, "universeAnimationType")
                ? e.universeAnimationType
                : void 0,
              universeCollisionType: (0, r.t2)(e, "universeCollisionType")
                ? e.universeCollisionType
                : void 0,
              universeBodyType: (0, r.t2)(e, "universeBodyType") ? e.universeBodyType : void 0,
              universeJointPositioningType: (0, r.t2)(e, "universeJointPositioningType")
                ? e.universeJointPositioningType
                : void 0,
              isArchived: (0, r.t2)(e, "isArchived") ? e.isArchived : void 0,
              isFriendsOnly: (0, r.t2)(e, "isFriendsOnly") ? e.isFriendsOnly : void 0,
              genre: (0, r.t2)(e, "genre") ? e.genre : void 0,
              playableDevices: (0, r.t2)(e, "playableDevices") ? e.playableDevices : void 0,
              isForSale: (0, r.t2)(e, "isForSale") ? e.isForSale : void 0,
              price: (0, r.t2)(e, "price") ? e.price : void 0,
              isStudioAccessToApisAllowed: (0, r.t2)(e, "isStudioAccessToApisAllowed")
                ? e.isStudioAccessToApisAllowed
                : void 0,
              privacyType: (0, r.t2)(e, "privacyType") ? e.privacyType : void 0,
              isForSaleInFiat: (0, r.t2)(e, "isForSaleInFiat") ? e.isForSaleInFiat : void 0,
              fiatBasePriceId: (0, r.t2)(e, "fiatBasePriceId") ? e.fiatBasePriceId : void 0,
              fiatModerationStatus: (0, r.t2)(e, "fiatModerationStatus")
                ? e.fiatModerationStatus
                : void 0,
              audiences: (0, r.t2)(e, "audiences") ? e.audiences : void 0,
              demoModeEnabled: (0, r.t2)(e, "demoModeEnabled") ? e.demoModeEnabled : void 0,
              demoModeChangeableAfter: (0, r.t2)(e, "demoModeChangeableAfter")
                ? new Date(e.demoModeChangeableAfter)
                : void 0
            };
      }
      function G(e) {
        if (void 0 !== e) return null === e ? null : { isEnabled: e.isEnabled };
      }
      function A(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              buildersClubMembershipType: (0, r.t2)(t, "buildersClubMembershipType")
                ? t.buildersClubMembershipType
                : void 0,
              userId: (0, r.t2)(t, "userId") ? t.userId : void 0,
              username: (0, r.t2)(t, "username") ? t.username : void 0,
              displayName: (0, r.t2)(t, "displayName") ? t.displayName : void 0
            };
      }
      function S(e) {
        if (void 0 !== e) return null === e ? null : { type: e.type, url: e.url, title: e.title };
      }
      function C(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              userId: (0, r.t2)(t, "UserId") ? t.UserId : void 0,
              universeId: (0, r.t2)(t, "UniverseId") ? t.UniverseId : void 0,
              expires: (0, r.t2)(t, "Expires") ? t.Expires : void 0,
              rootPlaceId: (0, r.t2)(t, "RootPlaceId") ? t.RootPlaceId : void 0,
              gameName: (0, r.t2)(t, "GameName") ? t.GameName : void 0
            };
      }
      function D(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              id: (0, r.t2)(t, "id") ? t.id : void 0,
              name: (0, r.t2)(t, "name") ? t.name : void 0,
              description: (0, r.t2)(t, "description") ? t.description : void 0,
              commentsEnabled: (0, r.t2)(t, "commentsEnabled") ? t.commentsEnabled : void 0,
              versionId: (0, r.t2)(t, "versionId") ? t.versionId : void 0,
              created: (0, r.t2)(t, "created") ? new Date(t.created) : void 0,
              updated: (0, r.t2)(t, "updated") ? new Date(t.updated) : void 0
            };
      }
      function M(e) {
        var t;
        return null == (t = e)
          ? t
          : {
              id: (0, r.t2)(t, "id") ? t.id : void 0,
              name: (0, r.t2)(t, "name") ? t.name : void 0,
              displayName: (0, r.t2)(t, "displayName") ? t.displayName : void 0
            };
      }
      function k(e, t) {
        return null == e ? e : { data: (0, r.t2)(e, "data") ? e.data.map(p) : void 0 };
      }
      function E(e, t) {
        return null == e
          ? e
          : {
              previousPageCursor: (0, r.t2)(e, "previousPageCursor")
                ? e.previousPageCursor
                : void 0,
              nextPageCursor: (0, r.t2)(e, "nextPageCursor") ? e.nextPageCursor : void 0,
              data: (0, r.t2)(e, "data") ? e.data.map(a) : void 0
            };
      }
      function Q(e, t) {
        return null == e
          ? e
          : {
              previousPageCursor: (0, r.t2)(e, "previousPageCursor")
                ? e.previousPageCursor
                : void 0,
              nextPageCursor: (0, r.t2)(e, "nextPageCursor") ? e.nextPageCursor : void 0,
              data: (0, r.t2)(e, "data") ? e.data.map(c) : void 0
            };
      }
      ((function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        ((0, s._)(t, e),
          (t.prototype.v1UniversesUniverseIdAliasesNameDeleteRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdAliasesNameDelete."
                      );
                    if (null === e.name || void 0 === e.name)
                      throw new r.Q0(
                        "name",
                        "Required parameter requestParameters.name was null or undefined when calling v1UniversesUniverseIdAliasesNameDelete."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/aliases/{name}"
                              .replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              )
                              .replace("{".concat("name", "}"), encodeURIComponent(String(e.name))),
                            schemaPath: "/v1/universes/{universeId}/aliases/{name}",
                            method: "DELETE",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return ((a = s.sent()), [2, new r.ko(a)]);
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdAliasesNameDelete = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesUniverseIdAliasesNameDeleteRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdAliasesNamePatchRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdAliasesNamePatch."
                      );
                    if (null === e.name || void 0 === e.name)
                      throw new r.Q0(
                        "name",
                        "Required parameter requestParameters.name was null or undefined when calling v1UniversesUniverseIdAliasesNamePatch."
                      );
                    if (null === e.request || void 0 === e.request)
                      throw new r.Q0(
                        "request",
                        "Required parameter requestParameters.request was null or undefined when calling v1UniversesUniverseIdAliasesNamePatch."
                      );
                    return (
                      (n = {}),
                      ((i = {})["Content-Type"] = "application/json"),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/aliases/{name}"
                              .replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              )
                              .replace("{".concat("name", "}"), encodeURIComponent(String(e.name))),
                            schemaPath: "/v1/universes/{universeId}/aliases/{name}",
                            method: "PATCH",
                            headers: i,
                            query: n,
                            body: u(e.request)
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return ((a = s.sent()), [2, new r.ko(a)]);
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdAliasesNamePatch = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesUniverseIdAliasesNamePatchRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdAliasesPostRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdAliasesPost."
                      );
                    if (null === e.request || void 0 === e.request)
                      throw new r.Q0(
                        "request",
                        "Required parameter requestParameters.request was null or undefined when calling v1UniversesUniverseIdAliasesPost."
                      );
                    return (
                      (n = {}),
                      ((i = {})["Content-Type"] = "application/json"),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/aliases".replace(
                              "{".concat("universeId", "}"),
                              encodeURIComponent(String(e.universeId))
                            ),
                            schemaPath: "/v1/universes/{universeId}/aliases",
                            method: "POST",
                            headers: i,
                            query: n,
                            body: u(e.request)
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return ((a = s.sent()), [2, new r.ko(a)]);
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdAliasesPost = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesUniverseIdAliasesPostRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }));
      })(r.yi),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          ((0, s._)(t, e),
            (t.prototype.v1AssetsAssetIdArchivePostRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.assetId || void 0 === e.assetId)
                        throw new r.Q0(
                          "assetId",
                          "Required parameter requestParameters.assetId was null or undefined when calling v1AssetsAssetIdArchivePost."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/assets/{assetId}/archive".replace(
                                "{".concat("assetId", "}"),
                                encodeURIComponent(String(e.assetId))
                              ),
                              schemaPath: "/v1/assets/{assetId}/archive",
                              method: "POST",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdArchivePost = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1AssetsAssetIdArchivePostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdLatestSavedVersionGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, o;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.assetId || void 0 === e.assetId)
                        throw new r.Q0(
                          "assetId",
                          "Required parameter requestParameters.assetId was null or undefined when calling v1AssetsAssetIdLatestSavedVersionGet."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/assets/{assetId}/latest-saved-version".replace(
                                "{".concat("assetId", "}"),
                                encodeURIComponent(String(e.assetId))
                              ),
                              schemaPath: "/v1/assets/{assetId}/latest-saved-version",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (o = s.sent()),
                        [
                          2,
                          new r.ko(o, function (e) {
                            return a(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdLatestSavedVersionGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1AssetsAssetIdLatestSavedVersionGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdPatchRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.assetId || void 0 === e.assetId)
                        throw new r.Q0(
                          "assetId",
                          "Required parameter requestParameters.assetId was null or undefined when calling v1AssetsAssetIdPatch."
                        );
                      if (null === e.request || void 0 === e.request)
                        throw new r.Q0(
                          "request",
                          "Required parameter requestParameters.request was null or undefined when calling v1AssetsAssetIdPatch."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/assets/{assetId}".replace(
                                "{".concat("assetId", "}"),
                                encodeURIComponent(String(e.assetId))
                              ),
                              schemaPath: "/v1/assets/{assetId}",
                              method: "PATCH",
                              headers: i,
                              query: n,
                              body: (function (e) {
                                if (void 0 !== e)
                                  return null === e
                                    ? null
                                    : {
                                        name: e.name,
                                        description: e.description,
                                        genres: e.genres,
                                        enableComments: e.enableComments,
                                        isCopyingAllowed: e.isCopyingAllowed,
                                        locale: e.locale,
                                        localName: e.localName,
                                        localDescription: e.localDescription
                                      };
                              })(e.request)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdPatch = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1AssetsAssetIdPatchRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdPublishedVersionsGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.assetId || void 0 === e.assetId)
                        throw new r.Q0(
                          "assetId",
                          "Required parameter requestParameters.assetId was null or undefined when calling v1AssetsAssetIdPublishedVersionsGet."
                        );
                      return (
                        (n = {}),
                        void 0 !== e.sortOrder && (n.sortOrder = e.sortOrder),
                        void 0 !== e.limit && (n.limit = e.limit),
                        void 0 !== e.cursor && (n.cursor = e.cursor),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/assets/{assetId}/published-versions".replace(
                                "{".concat("assetId", "}"),
                                encodeURIComponent(String(e.assetId))
                              ),
                              schemaPath: "/v1/assets/{assetId}/published-versions",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return E(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdPublishedVersionsGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1AssetsAssetIdPublishedVersionsGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdRestorePostRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.assetId || void 0 === e.assetId)
                        throw new r.Q0(
                          "assetId",
                          "Required parameter requestParameters.assetId was null or undefined when calling v1AssetsAssetIdRestorePost."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/assets/{assetId}/restore".replace(
                                "{".concat("assetId", "}"),
                                encodeURIComponent(String(e.assetId))
                              ),
                              schemaPath: "/v1/assets/{assetId}/restore",
                              method: "POST",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdRestorePost = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1AssetsAssetIdRestorePostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdRevertVersionPostRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.assetId || void 0 === e.assetId)
                        throw new r.Q0(
                          "assetId",
                          "Required parameter requestParameters.assetId was null or undefined when calling v1AssetsAssetIdRevertVersionPost."
                        );
                      if (null === e.assetVersionNumber || void 0 === e.assetVersionNumber)
                        throw new r.Q0(
                          "assetVersionNumber",
                          "Required parameter requestParameters.assetVersionNumber was null or undefined when calling v1AssetsAssetIdRevertVersionPost."
                        );
                      return (
                        (n = {}),
                        void 0 !== e.assetVersionNumber &&
                          (n.assetVersionNumber = e.assetVersionNumber),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/assets/{assetId}/revert-version".replace(
                                "{".concat("assetId", "}"),
                                encodeURIComponent(String(e.assetId))
                              ),
                              schemaPath: "/v1/assets/{assetId}/revert-version",
                              method: "POST",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdRevertVersionPost = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1AssetsAssetIdRevertVersionPostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdSavedVersionsGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.assetId || void 0 === e.assetId)
                        throw new r.Q0(
                          "assetId",
                          "Required parameter requestParameters.assetId was null or undefined when calling v1AssetsAssetIdSavedVersionsGet."
                        );
                      return (
                        (n = {}),
                        void 0 !== e.limit && (n.limit = e.limit),
                        void 0 !== e.cursor && (n.cursor = e.cursor),
                        void 0 !== e.sortOrder && (n.sortOrder = e.sortOrder),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/assets/{assetId}/saved-versions".replace(
                                "{".concat("assetId", "}"),
                                encodeURIComponent(String(e.assetId))
                              ),
                              schemaPath: "/v1/assets/{assetId}/saved-versions",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return E(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdSavedVersionsGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1AssetsAssetIdSavedVersionsGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdVersionsGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.assetId || void 0 === e.assetId)
                        throw new r.Q0(
                          "assetId",
                          "Required parameter requestParameters.assetId was null or undefined when calling v1AssetsAssetIdVersionsGet."
                        );
                      return (
                        (n = {}),
                        void 0 !== e.page && (n.page = e.page),
                        (i = {}),
                        void 0 !== e.robloxPlaceId &&
                          null !== e.robloxPlaceId &&
                          (i["Roblox-Place-Id"] = String(e.robloxPlaceId)),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/assets/{assetId}/versions".replace(
                                "{".concat("assetId", "}"),
                                encodeURIComponent(String(e.assetId))
                              ),
                              schemaPath: "/v1/assets/{assetId}/versions",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdVersionsGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1AssetsAssetIdVersionsGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdVersionsVersionNumberGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, o;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.assetId || void 0 === e.assetId)
                        throw new r.Q0(
                          "assetId",
                          "Required parameter requestParameters.assetId was null or undefined when calling v1AssetsAssetIdVersionsVersionNumberGet."
                        );
                      if (null === e.versionNumber || void 0 === e.versionNumber)
                        throw new r.Q0(
                          "versionNumber",
                          "Required parameter requestParameters.versionNumber was null or undefined when calling v1AssetsAssetIdVersionsVersionNumberGet."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/assets/{assetId}/versions/{versionNumber}"
                                .replace(
                                  "{".concat("assetId", "}"),
                                  encodeURIComponent(String(e.assetId))
                                )
                                .replace(
                                  "{".concat("versionNumber", "}"),
                                  encodeURIComponent(String(e.versionNumber))
                                ),
                              schemaPath: "/v1/assets/{assetId}/versions/{versionNumber}",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (o = s.sent()),
                        [
                          2,
                          new r.ko(o, function (e) {
                            return a(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1AssetsAssetIdVersionsVersionNumberGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1AssetsAssetIdVersionsVersionNumberGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1AssetsEndorsedGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.assetIds || void 0 === e.assetIds)
                        throw new r.Q0(
                          "assetIds",
                          "Required parameter requestParameters.assetIds was null or undefined when calling v1AssetsEndorsedGet."
                        );
                      return (
                        (n = {}),
                        e.assetIds && (n.assetIds = e.assetIds.join(r.E6.csv)),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/assets/endorsed",
                              schemaPath: "/v1/assets/endorsed",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : { data: (0, r.t2)(e, "data") ? e.data.map(P) : void 0 };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1AssetsEndorsedGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1AssetsEndorsedGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1AssetsGenresGetRaw = function (e) {
              return (0, s.a)(this, void 0, void 0, function () {
                var t, n, i;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (t = {}),
                        (n = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/assets/genres",
                              schemaPath: "/v1/assets/genres",
                              method: "GET",
                              headers: n,
                              query: t
                            },
                            e
                          )
                        ]
                      );
                    case 1:
                      return (
                        (i = s.sent()),
                        [
                          2,
                          new r.ko(i, function (e) {
                            return null == e ? e : { data: (0, r.t2)(e, "data") ? e.data : void 0 };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1AssetsGenresGet = function (e) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.v1AssetsGenresGetRaw(e)];
                    case 1:
                      return [4, t.sent().value()];
                    case 2:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1AssetsGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, a, o;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.assetIds || void 0 === e.assetIds)
                        throw new r.Q0(
                          "assetIds",
                          "Required parameter requestParameters.assetIds was null or undefined when calling v1AssetsGet."
                        );
                      return (
                        (n = {}),
                        e.assetIds && (n.assetIds = e.assetIds.join(r.E6.csv)),
                        (a = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/assets",
                              schemaPath: "/v1/assets",
                              method: "GET",
                              headers: a,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (o = s.sent()),
                        [
                          2,
                          new r.ko(o, function (e) {
                            return null == e
                              ? e
                              : { data: (0, r.t2)(e, "data") ? e.data.map(i) : void 0 };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1AssetsGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1AssetsGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1AssetsLatestVersionsPostRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.request || void 0 === e.request)
                        throw new r.Q0(
                          "request",
                          "Required parameter requestParameters.request was null or undefined when calling v1AssetsLatestVersionsPost."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/assets/latest-versions",
                              schemaPath: "/v1/assets/latest-versions",
                              method: "POST",
                              headers: i,
                              query: n,
                              body: (function (e) {
                                if (void 0 !== e)
                                  return null === e
                                    ? null
                                    : { assetIds: e.assetIds, versionStatus: e.versionStatus };
                              })(e.request)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : { results: (0, r.t2)(e, "results") ? e.results.map(o) : void 0 };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1AssetsLatestVersionsPost = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1AssetsLatestVersionsPostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1AssetsVotingGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.assetIds || void 0 === e.assetIds)
                        throw new r.Q0(
                          "assetIds",
                          "Required parameter requestParameters.assetIds was null or undefined when calling v1AssetsVotingGet."
                        );
                      return (
                        (n = {}),
                        e.assetIds && (n.assetIds = e.assetIds.join(r.E6.csv)),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/assets/voting",
                              schemaPath: "/v1/assets/voting",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : { data: (0, r.t2)(e, "data") ? e.data.map(b) : void 0 };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1AssetsVotingGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1AssetsVotingGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }));
        })(r.yi),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          ((0, s._)(t, e),
            (t.prototype.v1GametemplatesGetRaw = function (e) {
              return (0, s.a)(this, void 0, void 0, function () {
                var t, n, i;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (t = {}),
                        (n = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/gametemplates",
                              schemaPath: "/v1/gametemplates",
                              method: "GET",
                              headers: n,
                              query: t
                            },
                            e
                          )
                        ]
                      );
                    case 1:
                      return (
                        (i = s.sent()),
                        [
                          2,
                          new r.ko(i, function (e) {
                            return null == e
                              ? e
                              : { data: (0, r.t2)(e, "data") ? e.data.map(l) : void 0 };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1GametemplatesGet = function (e) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.v1GametemplatesGetRaw(e)];
                    case 1:
                      return [4, t.sent().value()];
                    case 2:
                      return [2, t.sent()];
                  }
                });
              });
            }));
        })(r.yi),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          ((0, s._)(t, e),
            (t.prototype.v1GameUpdateNotificationsFilterPostRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.gameUpdateText || void 0 === e.gameUpdateText)
                        throw new r.Q0(
                          "gameUpdateText",
                          "Required parameter requestParameters.gameUpdateText was null or undefined when calling v1GameUpdateNotificationsFilterPost."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/gameUpdateNotifications/filter",
                              schemaPath: "/v1/gameUpdateNotifications/filter",
                              method: "POST",
                              headers: i,
                              query: n,
                              body: e.gameUpdateText
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : {
                                  filteredGameUpdateText: (0, r.t2)(e, "filteredGameUpdateText")
                                    ? e.filteredGameUpdateText
                                    : void 0,
                                  isFiltered: (0, r.t2)(e, "isFiltered") ? e.isFiltered : void 0,
                                  moderationLevel: (0, r.t2)(e, "moderationLevel")
                                    ? e.moderationLevel
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1GameUpdateNotificationsFilterPost = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1GameUpdateNotificationsFilterPostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1GameUpdateNotificationsUniverseIdGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1GameUpdateNotificationsUniverseIdGet."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/gameUpdateNotifications/{universeId}".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/gameUpdateNotifications/{universeId}",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return e.map(h);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1GameUpdateNotificationsUniverseIdGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1GameUpdateNotificationsUniverseIdGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1GameUpdateNotificationsUniverseIdPostRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1GameUpdateNotificationsUniverseIdPost."
                        );
                      if (null === e.gameUpdateText || void 0 === e.gameUpdateText)
                        throw new r.Q0(
                          "gameUpdateText",
                          "Required parameter requestParameters.gameUpdateText was null or undefined when calling v1GameUpdateNotificationsUniverseIdPost."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/gameUpdateNotifications/{universeId}".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/gameUpdateNotifications/{universeId}",
                              method: "POST",
                              headers: i,
                              query: n,
                              body: e.gameUpdateText
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return h(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1GameUpdateNotificationsUniverseIdPost = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1GameUpdateNotificationsUniverseIdPostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }));
        })(r.yi),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          ((0, s._)(t, e),
            (t.prototype.v1GroupsGroupIdUniversesGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.groupId || void 0 === e.groupId)
                        throw new r.Q0(
                          "groupId",
                          "Required parameter requestParameters.groupId was null or undefined when calling v1GroupsGroupIdUniversesGet."
                        );
                      return (
                        (n = {}),
                        void 0 !== e.isArchived && (n.isArchived = e.isArchived),
                        void 0 !== e.sortOrder && (n.sortOrder = e.sortOrder),
                        void 0 !== e.limit && (n.limit = e.limit),
                        void 0 !== e.cursor && (n.cursor = e.cursor),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/groups/{groupId}/universes".replace(
                                "{".concat("groupId", "}"),
                                encodeURIComponent(String(e.groupId))
                              ),
                              schemaPath: "/v1/groups/{groupId}/universes",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return Q(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1GroupsGroupIdUniversesGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1GroupsGroupIdUniversesGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }));
        })(r.yi),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          ((0, s._)(t, e),
            (t.prototype.v1UniversesUniverseIdIconGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdIconGet."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/icon".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/universes/{universeId}/icon",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : {
                                  imageId: (0, r.t2)(e, "imageId") ? e.imageId : void 0,
                                  isApproved: (0, r.t2)(e, "isApproved") ? e.isApproved : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdIconGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdIconGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdIconPostRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdIconPost."
                        );
                      if (null === e.request || void 0 === e.request)
                        throw new r.Q0(
                          "request",
                          "Required parameter requestParameters.request was null or undefined when calling v1UniversesUniverseIdIconPost."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/icon".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/universes/{universeId}/icon",
                              method: "POST",
                              headers: i,
                              query: n,
                              body: (function (e) {
                                if (void 0 !== e)
                                  return null === e ? null : { iconType: e.iconType };
                              })(e.request)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdIconPost = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdIconPostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }));
        })(r.yi),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          ((0, s._)(t, e),
            (t.prototype.v1PlacesPlaceIdCompatibilitiesGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.placeId || void 0 === e.placeId)
                        throw new r.Q0(
                          "placeId",
                          "Required parameter requestParameters.placeId was null or undefined when calling v1PlacesPlaceIdCompatibilitiesGet."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/places/{placeId}/compatibilities".replace(
                                "{".concat("placeId", "}"),
                                encodeURIComponent(String(e.placeId))
                              ),
                              schemaPath: "/v1/places/{placeId}/compatibilities",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : {
                                  compatibilities: (0, r.t2)(e, "Compatibilities")
                                    ? e.Compatibilities.map(m)
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1PlacesPlaceIdCompatibilitiesGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1PlacesPlaceIdCompatibilitiesGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1PlacesPlaceIdMediaGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.placeId || void 0 === e.placeId)
                        throw new r.Q0(
                          "placeId",
                          "Required parameter requestParameters.placeId was null or undefined when calling v1PlacesPlaceIdMediaGet."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/places/{placeId}/media".replace(
                                "{".concat("placeId", "}"),
                                encodeURIComponent(String(e.placeId))
                              ),
                              schemaPath: "/v1/places/{placeId}/media",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : { data: (0, r.t2)(e, "data") ? e.data.map(y) : void 0 };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1PlacesPlaceIdMediaGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1PlacesPlaceIdMediaGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1PlacesPlaceIdPatchRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.placeId || void 0 === e.placeId)
                        throw new r.Q0(
                          "placeId",
                          "Required parameter requestParameters.placeId was null or undefined when calling v1PlacesPlaceIdPatch."
                        );
                      if (null === e._configuration || void 0 === e._configuration)
                        throw new r.Q0(
                          "_configuration",
                          "Required parameter requestParameters._configuration was null or undefined when calling v1PlacesPlaceIdPatch."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/places/{placeId}".replace(
                                "{".concat("placeId", "}"),
                                encodeURIComponent(String(e.placeId))
                              ),
                              schemaPath: "/v1/places/{placeId}",
                              method: "PATCH",
                              headers: i,
                              query: n,
                              body: f(e._configuration)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return w(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1PlacesPlaceIdPatch = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1PlacesPlaceIdPatchRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1PlacesPlaceIdPostRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.placeId || void 0 === e.placeId)
                        throw new r.Q0(
                          "placeId",
                          "Required parameter requestParameters.placeId was null or undefined when calling v1PlacesPlaceIdPost."
                        );
                      if (null === e._configuration || void 0 === e._configuration)
                        throw new r.Q0(
                          "_configuration",
                          "Required parameter requestParameters._configuration was null or undefined when calling v1PlacesPlaceIdPost."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/places/{placeId}".replace(
                                "{".concat("placeId", "}"),
                                encodeURIComponent(String(e.placeId))
                              ),
                              schemaPath: "/v1/places/{placeId}",
                              method: "POST",
                              headers: i,
                              query: n,
                              body: f(e._configuration)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return w(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1PlacesPlaceIdPost = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1PlacesPlaceIdPostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }));
        })(r.yi),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          ((0, s._)(t, e),
            (t.prototype.v1PluginsGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.pluginIds || void 0 === e.pluginIds)
                        throw new r.Q0(
                          "pluginIds",
                          "Required parameter requestParameters.pluginIds was null or undefined when calling v1PluginsGet."
                        );
                      return (
                        (n = {}),
                        e.pluginIds && (n.pluginIds = e.pluginIds.join(r.E6.csv)),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/plugins",
                              schemaPath: "/v1/plugins",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : { data: (0, r.t2)(e, "data") ? e.data.map(D) : void 0 };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1PluginsGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1PluginsGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1PluginsPluginIdIncrementInstallCountPostRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.pluginId || void 0 === e.pluginId)
                        throw new r.Q0(
                          "pluginId",
                          "Required parameter requestParameters.pluginId was null or undefined when calling v1PluginsPluginIdIncrementInstallCountPost."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/plugins/{pluginId}/increment-install-count".replace(
                                "{".concat("pluginId", "}"),
                                encodeURIComponent(String(e.pluginId))
                              ),
                              schemaPath: "/v1/plugins/{pluginId}/increment-install-count",
                              method: "POST",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1PluginsPluginIdIncrementInstallCountPost = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1PluginsPluginIdIncrementInstallCountPostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1PluginsPluginIdInstallCountGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.pluginId || void 0 === e.pluginId)
                        throw new r.Q0(
                          "pluginId",
                          "Required parameter requestParameters.pluginId was null or undefined when calling v1PluginsPluginIdInstallCountGet."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/plugins/{pluginId}/install-count".replace(
                                "{".concat("pluginId", "}"),
                                encodeURIComponent(String(e.pluginId))
                              ),
                              schemaPath: "/v1/plugins/{pluginId}/install-count",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : {
                                  installCount: (0, r.t2)(e, "installCount")
                                    ? e.installCount
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1PluginsPluginIdInstallCountGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1PluginsPluginIdInstallCountGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1PluginsPluginIdPatchRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.pluginId || void 0 === e.pluginId)
                        throw new r.Q0(
                          "pluginId",
                          "Required parameter requestParameters.pluginId was null or undefined when calling v1PluginsPluginIdPatch."
                        );
                      if (null === e.request || void 0 === e.request)
                        throw new r.Q0(
                          "request",
                          "Required parameter requestParameters.request was null or undefined when calling v1PluginsPluginIdPatch."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/plugins/{pluginId}".replace(
                                "{".concat("pluginId", "}"),
                                encodeURIComponent(String(e.pluginId))
                              ),
                              schemaPath: "/v1/plugins/{pluginId}",
                              method: "PATCH",
                              headers: i,
                              query: n,
                              body: (function (e) {
                                if (void 0 !== e)
                                  return null === e
                                    ? null
                                    : {
                                        name: e.name,
                                        description: e.description,
                                        commentsEnabled: e.commentsEnabled
                                      };
                              })(e.request)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1PluginsPluginIdPatch = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1PluginsPluginIdPatchRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }));
        })(r.yi),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          ((0, s._)(t, e),
            (t.prototype.v1SearchUniversesGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (n = {}),
                        void 0 !== e.q && (n.q = e.q),
                        e.sort && (n.sort = e.sort.join(r.E6.csv)),
                        void 0 !== e.sortOrder && (n.sortOrder = e.sortOrder),
                        void 0 !== e.limit && (n.limit = e.limit),
                        void 0 !== e.cursor && (n.cursor = e.cursor),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/search/universes",
                              schemaPath: "/v1/search/universes",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return Q(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1SearchUniversesGet = function () {
              return (0, s.a)(this, arguments, void 0, function (e, t) {
                return (
                  void 0 === e && (e = {}),
                  (0, s.b)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, this.v1SearchUniversesGetRaw(e, t)];
                      case 1:
                        return [4, n.sent().value()];
                      case 2:
                        return [2, n.sent()];
                    }
                  })
                );
              });
            }));
        })(r.yi),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          ((0, s._)(t, e),
            (t.prototype.v1UniversesUniverseIdSocialLinksMetadataGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdSocialLinksMetadataGet."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/social-links/metadata".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/universes/{universeId}/social-links/metadata",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : {
                                  amazonStoreLinksEnabledForUser: (0, r.t2)(
                                    e,
                                    "AmazonStoreLinksEnabledForUser"
                                  )
                                    ? e.AmazonStoreLinksEnabledForUser
                                    : void 0,
                                  guildedLinksEnabledForUser: (0, r.t2)(
                                    e,
                                    "GuildedLinksEnabledForUser"
                                  )
                                    ? e.GuildedLinksEnabledForUser
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdSocialLinksMetadataGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdSocialLinksMetadataGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdSocialLinksPostRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdSocialLinksPost."
                        );
                      if (null === e.request || void 0 === e.request)
                        throw new r.Q0(
                          "request",
                          "Required parameter requestParameters.request was null or undefined when calling v1UniversesUniverseIdSocialLinksPost."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/social-links".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/universes/{universeId}/social-links",
                              method: "POST",
                              headers: i,
                              query: n,
                              body: S(e.request)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : {
                                  id: (0, r.t2)(e, "Id") ? e.Id : void 0,
                                  type: (0, r.t2)(e, "Type") ? e.Type : void 0,
                                  url: (0, r.t2)(e, "Url") ? e.Url : void 0,
                                  title: (0, r.t2)(e, "Title") ? e.Title : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdSocialLinksPost = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdSocialLinksPostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdSocialLinksSocialLinkIdDeleteRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdSocialLinksSocialLinkIdDelete."
                        );
                      if (null === e.socialLinkId || void 0 === e.socialLinkId)
                        throw new r.Q0(
                          "socialLinkId",
                          "Required parameter requestParameters.socialLinkId was null or undefined when calling v1UniversesUniverseIdSocialLinksSocialLinkIdDelete."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/social-links/{socialLinkId}"
                                .replace(
                                  "{".concat("universeId", "}"),
                                  encodeURIComponent(String(e.universeId))
                                )
                                .replace(
                                  "{".concat("socialLinkId", "}"),
                                  encodeURIComponent(String(e.socialLinkId))
                                ),
                              schemaPath: "/v1/universes/{universeId}/social-links/{socialLinkId}",
                              method: "DELETE",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdSocialLinksSocialLinkIdDelete = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdSocialLinksSocialLinkIdDeleteRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdSocialLinksSocialLinkIdPatchRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdSocialLinksSocialLinkIdPatch."
                        );
                      if (null === e.socialLinkId || void 0 === e.socialLinkId)
                        throw new r.Q0(
                          "socialLinkId",
                          "Required parameter requestParameters.socialLinkId was null or undefined when calling v1UniversesUniverseIdSocialLinksSocialLinkIdPatch."
                        );
                      if (null === e.request || void 0 === e.request)
                        throw new r.Q0(
                          "request",
                          "Required parameter requestParameters.request was null or undefined when calling v1UniversesUniverseIdSocialLinksSocialLinkIdPatch."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/social-links/{socialLinkId}"
                                .replace(
                                  "{".concat("universeId", "}"),
                                  encodeURIComponent(String(e.universeId))
                                )
                                .replace(
                                  "{".concat("socialLinkId", "}"),
                                  encodeURIComponent(String(e.socialLinkId))
                                ),
                              schemaPath: "/v1/universes/{universeId}/social-links/{socialLinkId}",
                              method: "PATCH",
                              headers: i,
                              query: n,
                              body: S(e.request)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdSocialLinksSocialLinkIdPatch = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdSocialLinksSocialLinkIdPatchRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }));
        })(r.yi),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          ((0, s._)(t, e),
            (t.prototype.v1PlacesPlaceIdStatsDeveloperProductAggregationGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.placeId || void 0 === e.placeId)
                        throw new r.Q0(
                          "placeId",
                          "Required parameter requestParameters.placeId was null or undefined when calling v1PlacesPlaceIdStatsDeveloperProductAggregationGet."
                        );
                      if (null === e.timeFrame || void 0 === e.timeFrame)
                        throw new r.Q0(
                          "timeFrame",
                          "Required parameter requestParameters.timeFrame was null or undefined when calling v1PlacesPlaceIdStatsDeveloperProductAggregationGet."
                        );
                      return (
                        (n = {}),
                        void 0 !== e.timeFrame && (n.timeFrame = e.timeFrame),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/places/{placeId}/stats/developer-product-aggregation".replace(
                                "{".concat("placeId", "}"),
                                encodeURIComponent(String(e.placeId))
                              ),
                              schemaPath:
                                "/v1/places/{placeId}/stats/developer-product-aggregation",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            var t;
                            return null == e
                              ? e
                              : {
                                  allDevicesDeveloperProductRevenue: (0, r.t2)(
                                    e,
                                    "allDevicesDeveloperProductRevenue"
                                  )
                                    ? e.allDevicesDeveloperProductRevenue.map(d)
                                    : void 0,
                                  developerProductRevenueByDevice: (0, r.t2)(
                                    e,
                                    "developerProductRevenueByDevice"
                                  )
                                    ? null == (t = e.developerProductRevenueByDevice)
                                      ? t
                                      : {
                                          computer: (0, r.t2)(t, "Computer")
                                            ? t.Computer.map(d)
                                            : void 0,
                                          phone: (0, r.t2)(t, "Phone") ? t.Phone.map(d) : void 0,
                                          tablet: (0, r.t2)(t, "Tablet") ? t.Tablet.map(d) : void 0,
                                          console: (0, r.t2)(t, "Console")
                                            ? t.Console.map(d)
                                            : void 0
                                        }
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1PlacesPlaceIdStatsDeveloperProductAggregationGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1PlacesPlaceIdStatsDeveloperProductAggregationGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1PlacesPlaceIdStatsIsAgeDataAvailableGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.placeId || void 0 === e.placeId)
                        throw new r.Q0(
                          "placeId",
                          "Required parameter requestParameters.placeId was null or undefined when calling v1PlacesPlaceIdStatsIsAgeDataAvailableGet."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/places/{placeId}/stats/is-age-data-available".replace(
                                "{".concat("placeId", "}"),
                                encodeURIComponent(String(e.placeId))
                              ),
                              schemaPath: "/v1/places/{placeId}/stats/is-age-data-available",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : {
                                  isAgeDataAvailable: (0, r.t2)(e, "isAgeDataAvailable")
                                    ? e.isAgeDataAvailable
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1PlacesPlaceIdStatsIsAgeDataAvailableGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1PlacesPlaceIdStatsIsAgeDataAvailableGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1PlacesPlaceIdStatsTypeGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.placeId || void 0 === e.placeId)
                        throw new r.Q0(
                          "placeId",
                          "Required parameter requestParameters.placeId was null or undefined when calling v1PlacesPlaceIdStatsTypeGet."
                        );
                      if (null === e.type || void 0 === e.type)
                        throw new r.Q0(
                          "type",
                          "Required parameter requestParameters.type was null or undefined when calling v1PlacesPlaceIdStatsTypeGet."
                        );
                      if (null === e.granularity || void 0 === e.granularity)
                        throw new r.Q0(
                          "granularity",
                          "Required parameter requestParameters.granularity was null or undefined when calling v1PlacesPlaceIdStatsTypeGet."
                        );
                      return (
                        (n = {}),
                        void 0 !== e.granularity && (n.granularity = e.granularity),
                        void 0 !== e.divisionType && (n.divisionType = e.divisionType),
                        void 0 !== e.startTime && (n.startTime = e.startTime),
                        void 0 !== e.endTime && (n.endTime = e.endTime),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/places/{placeId}/stats/{type}"
                                .replace(
                                  "{".concat("placeId", "}"),
                                  encodeURIComponent(String(e.placeId))
                                )
                                .replace(
                                  "{".concat("type", "}"),
                                  encodeURIComponent(String(e.type))
                                ),
                              schemaPath: "/v1/places/{placeId}/stats/{type}",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : {
                                  placeId: (0, r.t2)(e, "placeId") ? e.placeId : void 0,
                                  dataType: (0, r.t2)(e, "dataType") ? e.dataType : void 0,
                                  dataGranularity: (0, r.t2)(e, "dataGranularity")
                                    ? e.dataGranularity
                                    : void 0,
                                  startTime: (0, r.t2)(e, "startTime")
                                    ? new Date(e.startTime)
                                    : void 0,
                                  endTime: (0, r.t2)(e, "endTime") ? new Date(e.endTime) : void 0,
                                  data: (0, r.t2)(e, "data") ? (0, r.LG)(e.data, U) : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1PlacesPlaceIdStatsTypeGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1PlacesPlaceIdStatsTypeGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1PlacesPlaceIdStatsTypeLegacyFlotGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.placeId || void 0 === e.placeId)
                        throw new r.Q0(
                          "placeId",
                          "Required parameter requestParameters.placeId was null or undefined when calling v1PlacesPlaceIdStatsTypeLegacyFlotGet."
                        );
                      if (null === e.type || void 0 === e.type)
                        throw new r.Q0(
                          "type",
                          "Required parameter requestParameters.type was null or undefined when calling v1PlacesPlaceIdStatsTypeLegacyFlotGet."
                        );
                      if (null === e.timeFrame || void 0 === e.timeFrame)
                        throw new r.Q0(
                          "timeFrame",
                          "Required parameter requestParameters.timeFrame was null or undefined when calling v1PlacesPlaceIdStatsTypeLegacyFlotGet."
                        );
                      return (
                        (n = {}),
                        void 0 !== e.timeFrame && (n.timeFrame = e.timeFrame),
                        void 0 !== e.divisionType && (n.divisionType = e.divisionType),
                        void 0 !== e.startTime && (n.startTime = e.startTime),
                        void 0 !== e.endTime && (n.endTime = e.endTime),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/places/{placeId}/stats/{type}/legacy/flot"
                                .replace(
                                  "{".concat("placeId", "}"),
                                  encodeURIComponent(String(e.placeId))
                                )
                                .replace(
                                  "{".concat("type", "}"),
                                  encodeURIComponent(String(e.type))
                                ),
                              schemaPath: "/v1/places/{placeId}/stats/{type}/legacy/flot",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1PlacesPlaceIdStatsTypeLegacyFlotGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1PlacesPlaceIdStatsTypeLegacyFlotGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1StatsCreatorDashboardMetadataGetRaw = function (e) {
              return (0, s.a)(this, void 0, void 0, function () {
                var t, n, i;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (t = {}),
                        (n = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/stats/creator-dashboard-metadata",
                              schemaPath: "/v1/stats/creator-dashboard-metadata",
                              method: "GET",
                              headers: n,
                              query: t
                            },
                            e
                          )
                        ]
                      );
                    case 1:
                      return (
                        (i = s.sent()),
                        [
                          2,
                          new r.ko(i, function (e) {
                            return null == e
                              ? e
                              : {
                                  isPlayFabDataSourceChartsEnabled: (0, r.t2)(
                                    e,
                                    "isPlayFabDataSourceChartsEnabled"
                                  )
                                    ? e.isPlayFabDataSourceChartsEnabled
                                    : void 0,
                                  playFabDataSourceChartsAvailableByKPITypes: (0, r.t2)(
                                    e,
                                    "playFabDataSourceChartsAvailableByKPITypes"
                                  )
                                    ? e.playFabDataSourceChartsAvailableByKPITypes
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1StatsCreatorDashboardMetadataGet = function (e) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.v1StatsCreatorDashboardMetadataGetRaw(e)];
                    case 1:
                      return [4, t.sent().value()];
                    case 2:
                      return [2, t.sent()];
                  }
                });
              });
            }));
        })(r.yi),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          ((0, s._)(t, e),
            (t.prototype.v1PlacesPlaceIdTeamcreateActiveSessionMembersGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.placeId || void 0 === e.placeId)
                        throw new r.Q0(
                          "placeId",
                          "Required parameter requestParameters.placeId was null or undefined when calling v1PlacesPlaceIdTeamcreateActiveSessionMembersGet."
                        );
                      return (
                        (n = {}),
                        void 0 !== e.limit && (n.limit = e.limit),
                        void 0 !== e.cursor && (n.cursor = e.cursor),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/places/{placeId}/teamcreate/active_session/members".replace(
                                "{".concat("placeId", "}"),
                                encodeURIComponent(String(e.placeId))
                              ),
                              schemaPath: "/v1/places/{placeId}/teamcreate/active_session/members",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : { data: (0, r.t2)(e, "data") ? e.data.map(M) : void 0 };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1PlacesPlaceIdTeamcreateActiveSessionMembersGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1PlacesPlaceIdTeamcreateActiveSessionMembersGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdTeamcreateGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdTeamcreateGet."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/teamcreate".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/universes/{universeId}/teamcreate",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : { isEnabled: (0, r.t2)(e, "isEnabled") ? e.isEnabled : void 0 };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdTeamcreateGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdTeamcreateGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdTeamcreateMembershipsDeleteRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdTeamcreateMembershipsDelete."
                        );
                      if (null === e.request || void 0 === e.request)
                        throw new r.Q0(
                          "request",
                          "Required parameter requestParameters.request was null or undefined when calling v1UniversesUniverseIdTeamcreateMembershipsDelete."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/teamcreate/memberships".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/universes/{universeId}/teamcreate/memberships",
                              method: "DELETE",
                              headers: i,
                              query: n,
                              body: g(e.request)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdTeamcreateMembershipsDelete = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdTeamcreateMembershipsDeleteRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdTeamcreateMembershipsDeletePostRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdTeamcreateMembershipsDeletePost."
                        );
                      if (null === e.request || void 0 === e.request)
                        throw new r.Q0(
                          "request",
                          "Required parameter requestParameters.request was null or undefined when calling v1UniversesUniverseIdTeamcreateMembershipsDeletePost."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/teamcreate/memberships/delete".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath:
                                "/v1/universes/{universeId}/teamcreate/memberships/delete",
                              method: "POST",
                              headers: i,
                              query: n,
                              body: g(e.request)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdTeamcreateMembershipsDeletePost = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [
                        4,
                        this.v1UniversesUniverseIdTeamcreateMembershipsDeletePostRaw(e, t)
                      ];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdTeamcreateMembershipsGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdTeamcreateMembershipsGet."
                        );
                      return (
                        (n = {}),
                        void 0 !== e.sortOrder && (n.sortOrder = e.sortOrder),
                        void 0 !== e.limit && (n.limit = e.limit),
                        void 0 !== e.cursor && (n.cursor = e.cursor),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/teamcreate/memberships".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/universes/{universeId}/teamcreate/memberships",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : {
                                  previousPageCursor: (0, r.t2)(e, "previousPageCursor")
                                    ? e.previousPageCursor
                                    : void 0,
                                  nextPageCursor: (0, r.t2)(e, "nextPageCursor")
                                    ? e.nextPageCursor
                                    : void 0,
                                  data: (0, r.t2)(e, "data") ? e.data.map(A) : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdTeamcreateMembershipsGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdTeamcreateMembershipsGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdTeamcreatePatchRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdTeamcreatePatch."
                        );
                      if (null === e.request || void 0 === e.request)
                        throw new r.Q0(
                          "request",
                          "Required parameter requestParameters.request was null or undefined when calling v1UniversesUniverseIdTeamcreatePatch."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/teamcreate".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/universes/{universeId}/teamcreate",
                              method: "PATCH",
                              headers: i,
                              query: n,
                              body: G(e.request)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdTeamcreatePatch = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdTeamcreatePatchRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdTeamcreatePostRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdTeamcreatePost."
                        );
                      if (null === e.request || void 0 === e.request)
                        throw new r.Q0(
                          "request",
                          "Required parameter requestParameters.request was null or undefined when calling v1UniversesUniverseIdTeamcreatePost."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/teamcreate".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/universes/{universeId}/teamcreate",
                              method: "POST",
                              headers: i,
                              query: n,
                              body: G(e.request)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdTeamcreatePost = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdTeamcreatePostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UserTeamcreateMembershipsGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (n = {}),
                        void 0 !== e.sortOrder && (n.sortOrder = e.sortOrder),
                        void 0 !== e.limit && (n.limit = e.limit),
                        void 0 !== e.cursor && (n.cursor = e.cursor),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/user/teamcreate/memberships",
                              schemaPath: "/v1/user/teamcreate/memberships",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return Q(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1UserTeamcreateMembershipsGet = function () {
              return (0, s.a)(this, arguments, void 0, function (e, t) {
                return (
                  void 0 === e && (e = {}),
                  (0, s.b)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, this.v1UserTeamcreateMembershipsGetRaw(e, t)];
                      case 1:
                        return [4, n.sent().value()];
                      case 2:
                        return [2, n.sent()];
                    }
                  })
                );
              });
            }));
        })(r.yi),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          ((0, s._)(t, e),
            (t.prototype.v1TeamtestPlaceIdDeleteRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.placeId || void 0 === e.placeId)
                        throw new r.Q0(
                          "placeId",
                          "Required parameter requestParameters.placeId was null or undefined when calling v1TeamtestPlaceIdDelete."
                        );
                      if (null === e.gameId || void 0 === e.gameId)
                        throw new r.Q0(
                          "gameId",
                          "Required parameter requestParameters.gameId was null or undefined when calling v1TeamtestPlaceIdDelete."
                        );
                      return (
                        (n = {}),
                        void 0 !== e.gameId && (n.gameId = e.gameId),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/teamtest/{placeId}".replace(
                                "{".concat("placeId", "}"),
                                encodeURIComponent(String(e.placeId))
                              ),
                              schemaPath: "/v1/teamtest/{placeId}",
                              method: "DELETE",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1TeamtestPlaceIdDelete = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1TeamtestPlaceIdDeleteRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1TeamtestPlacesPlaceIdRunninggamesGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.placeId || void 0 === e.placeId)
                        throw new r.Q0(
                          "placeId",
                          "Required parameter requestParameters.placeId was null or undefined when calling v1TeamtestPlacesPlaceIdRunninggamesGet."
                        );
                      return (
                        (n = {}),
                        void 0 !== e.sortOrder && (n.sortOrder = e.sortOrder),
                        void 0 !== e.limit && (n.limit = e.limit),
                        void 0 !== e.cursor && (n.cursor = e.cursor),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/teamtest/places/{placeId}/runninggames".replace(
                                "{".concat("placeId", "}"),
                                encodeURIComponent(String(e.placeId))
                              ),
                              schemaPath: "/v1/teamtest/places/{placeId}/runninggames",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.cK(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1TeamtestPlacesPlaceIdRunninggamesGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1TeamtestPlacesPlaceIdRunninggamesGetRaw(e, t)];
                    case 1:
                      return (n.sent(), [2]);
                  }
                });
              });
            }));
        })(r.yi),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          ((0, s._)(t, e),
            (t.prototype.v1UniversesUniverseIdThumbnailsAltTextPostRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdThumbnailsAltTextPost."
                        );
                      if (null === e.request || void 0 === e.request)
                        throw new r.Q0(
                          "request",
                          "Required parameter requestParameters.request was null or undefined when calling v1UniversesUniverseIdThumbnailsAltTextPost."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/thumbnails/alt-text".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/universes/{universeId}/thumbnails/alt-text",
                              method: "POST",
                              headers: i,
                              query: n,
                              body: (function (e) {
                                if (void 0 !== e)
                                  return null === e
                                    ? null
                                    : {
                                        MediaAssetId: e.mediaAssetId,
                                        MediaAssetAltText: e.mediaAssetAltText
                                      };
                              })(e.request)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : {
                                  mediaAssetId: (0, r.t2)(e, "MediaAssetId")
                                    ? e.MediaAssetId
                                    : void 0,
                                  mediaAssetAltText: (0, r.t2)(e, "MediaAssetAltText")
                                    ? e.MediaAssetAltText
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdThumbnailsAltTextPost = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdThumbnailsAltTextPostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdThumbnailsAutoGeneratedPostRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdThumbnailsAutoGeneratedPost."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/thumbnails/auto-generated".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/universes/{universeId}/thumbnails/auto-generated",
                              method: "POST",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdThumbnailsAutoGeneratedPost = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdThumbnailsAutoGeneratedPostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdThumbnailsOrderPostRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdThumbnailsOrderPost."
                        );
                      if (null === e.request || void 0 === e.request)
                        throw new r.Q0(
                          "request",
                          "Required parameter requestParameters.request was null or undefined when calling v1UniversesUniverseIdThumbnailsOrderPost."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/thumbnails/order".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/universes/{universeId}/thumbnails/order",
                              method: "POST",
                              headers: i,
                              query: n,
                              body: (function (e) {
                                if (void 0 !== e)
                                  return null === e ? null : { thumbnailIds: e.thumbnailIds };
                              })(e.request)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdThumbnailsOrderPost = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdThumbnailsOrderPostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdThumbnailsThumbnailIdDeleteRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdThumbnailsThumbnailIdDelete."
                        );
                      if (null === e.thumbnailId || void 0 === e.thumbnailId)
                        throw new r.Q0(
                          "thumbnailId",
                          "Required parameter requestParameters.thumbnailId was null or undefined when calling v1UniversesUniverseIdThumbnailsThumbnailIdDelete."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/thumbnails/{thumbnailId}"
                                .replace(
                                  "{".concat("universeId", "}"),
                                  encodeURIComponent(String(e.universeId))
                                )
                                .replace(
                                  "{".concat("thumbnailId", "}"),
                                  encodeURIComponent(String(e.thumbnailId))
                                ),
                              schemaPath: "/v1/universes/{universeId}/thumbnails/{thumbnailId}",
                              method: "DELETE",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdThumbnailsThumbnailIdDelete = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdThumbnailsThumbnailIdDeleteRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdThumbnailsVideoPostRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdThumbnailsVideoPost."
                        );
                      if (null === e.request || void 0 === e.request)
                        throw new r.Q0(
                          "request",
                          "Required parameter requestParameters.request was null or undefined when calling v1UniversesUniverseIdThumbnailsVideoPost."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/thumbnails/video".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/universes/{universeId}/thumbnails/video",
                              method: "POST",
                              headers: i,
                              query: n,
                              body: (function (e) {
                                if (void 0 !== e) return null === e ? null : { url: e.url };
                              })(e.request)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdThumbnailsVideoPost = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdThumbnailsVideoPostRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }));
        })(r.yi),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          ((0, s._)(t, e),
            (t.prototype.v1UniversesUniverseIdConfigurationGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdConfigurationGet."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/configuration".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/universes/{universeId}/configuration",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return T(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdConfigurationGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdConfigurationGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdConfigurationPatchRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdConfigurationPatch."
                        );
                      if (null === e.model || void 0 === e.model)
                        throw new r.Q0(
                          "model",
                          "Required parameter requestParameters.model was null or undefined when calling v1UniversesUniverseIdConfigurationPatch."
                        );
                      return (
                        (n = {}),
                        ((i = {})["Content-Type"] = "application/json"),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/configuration".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/universes/{universeId}/configuration",
                              method: "PATCH",
                              headers: i,
                              query: n,
                              body: (function (e) {
                                if (void 0 !== e)
                                  return null === e
                                    ? null
                                    : {
                                        name: e.name,
                                        universeAvatarType: e.universeAvatarType,
                                        universeScaleType: e.universeScaleType,
                                        universeAnimationType: e.universeAnimationType,
                                        universeCollisionType: e.universeCollisionType,
                                        universeBodyType: e.universeBodyType,
                                        universeJointPositioningType:
                                          e.universeJointPositioningType,
                                        isArchived: e.isArchived,
                                        isFriendsOnly: e.isFriendsOnly,
                                        genre: e.genre,
                                        playableDevices: e.playableDevices,
                                        isForSale: e.isForSale,
                                        price: e.price,
                                        isMeshTextureApiAccessAllowed:
                                          e.isMeshTextureApiAccessAllowed
                                      };
                              })(e.model)
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return T(e);
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdConfigurationPatch = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdConfigurationPatchRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdConfigurationVipServersGetRaw = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdConfigurationVipServersGet."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/configuration/vip-servers".replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              ),
                              schemaPath: "/v1/universes/{universeId}/configuration/vip-servers",
                              method: "GET",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = s.sent()),
                        [
                          2,
                          new r.ko(a, function (e) {
                            return null == e
                              ? e
                              : {
                                  isEnabled: (0, r.t2)(e, "isEnabled") ? e.isEnabled : void 0,
                                  price: (0, r.t2)(e, "price") ? e.price : void 0,
                                  activeServersCount: (0, r.t2)(e, "activeServersCount")
                                    ? e.activeServersCount
                                    : void 0,
                                  activeSubscriptionsCount: (0, r.t2)(e, "activeSubscriptionsCount")
                                    ? e.activeSubscriptionsCount
                                    : void 0
                                };
                          })
                        ]
                      );
                  }
                });
              });
            }),
            (t.prototype.v1UniversesUniverseIdConfigurationVipServersGet = function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                return (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UniversesUniverseIdConfigurationVipServersGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                });
              });
            }));
        })(r.yi));
      var N = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          (0, s._)(t, e),
          (t.prototype.v1UniversesMultigetGetRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.ids || void 0 === e.ids)
                      throw new r.Q0(
                        "ids",
                        "Required parameter requestParameters.ids was null or undefined when calling v1UniversesMultigetGet."
                      );
                    return (
                      (n = {}),
                      e.ids && (n.ids = e.ids),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/multiget",
                            schemaPath: "/v1/universes/multiget",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = s.sent()),
                      [
                        2,
                        new r.ko(a, function (e) {
                          return null == e
                            ? e
                            : { data: (0, r.t2)(e, "data") ? e.data.map(c) : void 0 };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UniversesMultigetGet = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesMultigetGetRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesMultigetPermissionsGetRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.ids || void 0 === e.ids)
                      throw new r.Q0(
                        "ids",
                        "Required parameter requestParameters.ids was null or undefined when calling v1UniversesMultigetPermissionsGet."
                      );
                    return (
                      (n = {}),
                      e.ids && (n.ids = e.ids),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/multiget/permissions",
                            schemaPath: "/v1/universes/multiget/permissions",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = s.sent()),
                      [
                        2,
                        new r.ko(a, function (e) {
                          return null == e
                            ? e
                            : { data: (0, r.t2)(e, "data") ? e.data.map(q) : void 0 };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UniversesMultigetPermissionsGet = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesMultigetPermissionsGetRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdActivatePostRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdActivatePost."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/activate".replace(
                              "{".concat("universeId", "}"),
                              encodeURIComponent(String(e.universeId))
                            ),
                            schemaPath: "/v1/universes/{universeId}/activate",
                            method: "POST",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return ((a = s.sent()), [2, new r.ko(a)]);
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdActivatePost = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesUniverseIdActivatePostRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdActivationEligibilityGetRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdActivationEligibilityGet."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/activation-eligibility".replace(
                              "{".concat("universeId", "}"),
                              encodeURIComponent(String(e.universeId))
                            ),
                            schemaPath: "/v1/universes/{universeId}/activation-eligibility",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = s.sent()),
                      [
                        2,
                        new r.ko(a, function (e) {
                          return null == e
                            ? e
                            : {
                                isEligible: (0, r.t2)(e, "isEligible") ? e.isEligible : void 0,
                                maturityRated: (0, r.t2)(e, "maturityRated")
                                  ? e.maturityRated
                                  : void 0,
                                isUserEligibleForPublicPublish: (0, r.t2)(
                                  e,
                                  "isUserEligibleForPublicPublish"
                                )
                                  ? e.isUserEligibleForPublicPublish
                                  : void 0,
                                remainingPublicPublishCount: (0, r.t2)(
                                  e,
                                  "remainingPublicPublishCount"
                                )
                                  ? e.remainingPublicPublishCount
                                  : void 0,
                                isPublicPublish: (0, r.t2)(e, "isPublicPublish")
                                  ? e.isPublicPublish
                                  : void 0,
                                isPublishToExistingUniverse: (0, r.t2)(
                                  e,
                                  "isPublishToExistingUniverse"
                                )
                                  ? e.isPublishToExistingUniverse
                                  : void 0,
                                isUniverseSelect: (0, r.t2)(e, "isUniverseSelect")
                                  ? e.isUniverseSelect
                                  : void 0,
                                creatorTier: (0, r.t2)(e, "creatorTier") ? e.creatorTier : void 0,
                                allowedAudiences: (0, r.t2)(e, "allowedAudiences")
                                  ? e.allowedAudiences
                                  : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdActivationEligibilityGet = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesUniverseIdActivationEligibilityGetRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdContextPermissionsGetRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdContextPermissionsGet."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/context-permissions".replace(
                              "{".concat("universeId", "}"),
                              encodeURIComponent(String(e.universeId))
                            ),
                            schemaPath: "/v1/universes/{universeId}/context-permissions",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = s.sent()),
                      [
                        2,
                        new r.ko(a, function (e) {
                          return R(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdContextPermissionsGet = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesUniverseIdContextPermissionsGetRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdDeactivatePostRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdDeactivatePost."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/deactivate".replace(
                              "{".concat("universeId", "}"),
                              encodeURIComponent(String(e.universeId))
                            ),
                            schemaPath: "/v1/universes/{universeId}/deactivate",
                            method: "POST",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return ((a = s.sent()), [2, new r.ko(a)]);
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdDeactivatePost = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesUniverseIdDeactivatePostRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdGetRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdGet."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}".replace(
                              "{".concat("universeId", "}"),
                              encodeURIComponent(String(e.universeId))
                            ),
                            schemaPath: "/v1/universes/{universeId}",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = s.sent()),
                      [
                        2,
                        new r.ko(a, function (e) {
                          return c(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdGet = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesUniverseIdGetRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdLiveStatsGetRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdLiveStatsGet."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/live-stats".replace(
                              "{".concat("universeId", "}"),
                              encodeURIComponent(String(e.universeId))
                            ),
                            schemaPath: "/v1/universes/{universeId}/live-stats",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = s.sent()),
                      [
                        2,
                        new r.ko(a, function (e) {
                          return null == e
                            ? e
                            : {
                                totalPlayerCount: (0, r.t2)(e, "totalPlayerCount")
                                  ? e.totalPlayerCount
                                  : void 0,
                                playerCountsByDeviceType: (0, r.t2)(e, "playerCountsByDeviceType")
                                  ? e.playerCountsByDeviceType
                                  : void 0,
                                gameCount: (0, r.t2)(e, "gameCount") ? e.gameCount : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdLiveStatsGet = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesUniverseIdLiveStatsGetRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdPermissionsGetRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdPermissionsGet."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/permissions".replace(
                              "{".concat("universeId", "}"),
                              encodeURIComponent(String(e.universeId))
                            ),
                            schemaPath: "/v1/universes/{universeId}/permissions",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = s.sent()),
                      [
                        2,
                        new r.ko(a, function (e) {
                          return R(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdPermissionsGet = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesUniverseIdPermissionsGetRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdPlacesGetRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdPlacesGet."
                      );
                    return (
                      (n = {}),
                      void 0 !== e.sortOrder && (n.sortOrder = e.sortOrder),
                      void 0 !== e.limit && (n.limit = e.limit),
                      void 0 !== e.cursor && (n.cursor = e.cursor),
                      void 0 !== e.isUniverseCreation &&
                        (n.isUniverseCreation = e.isUniverseCreation),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/places".replace(
                              "{".concat("universeId", "}"),
                              encodeURIComponent(String(e.universeId))
                            ),
                            schemaPath: "/v1/universes/{universeId}/places",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = s.sent()),
                      [
                        2,
                        new r.ko(a, function (e) {
                          return null == e
                            ? e
                            : {
                                previousPageCursor: (0, r.t2)(e, "previousPageCursor")
                                  ? e.previousPageCursor
                                  : void 0,
                                nextPageCursor: (0, r.t2)(e, "nextPageCursor")
                                  ? e.nextPageCursor
                                  : void 0,
                                data: (0, r.t2)(e, "data") ? e.data : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdPlacesGet = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesUniverseIdPlacesGetRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdRevenueReportsGetRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdRevenueReportsGet."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/revenue-reports".replace(
                              "{".concat("universeId", "}"),
                              encodeURIComponent(String(e.universeId))
                            ),
                            schemaPath: "/v1/universes/{universeId}/revenue-reports",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = s.sent()),
                      [
                        2,
                        new r.ko(a, function (e) {
                          return null == e
                            ? e
                            : {
                                monthlyRevenueReportStatusList: (0, r.t2)(
                                  e,
                                  "monthlyRevenueReportStatusList"
                                )
                                  ? e.monthlyRevenueReportStatusList.map(I)
                                  : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdRevenueReportsGet = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesUniverseIdRevenueReportsGetRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdRevenueReportsYearDashMonthDownloadGetRaw = function (
            e,
            t
          ) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdRevenueReportsYearDashMonthDownloadGet."
                      );
                    if (null === e.yearDashMonth || void 0 === e.yearDashMonth)
                      throw new r.Q0(
                        "yearDashMonth",
                        "Required parameter requestParameters.yearDashMonth was null or undefined when calling v1UniversesUniverseIdRevenueReportsYearDashMonthDownloadGet."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/revenue-reports/{yearDashMonth}/download"
                              .replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              )
                              .replace(
                                "{".concat("yearDashMonth", "}"),
                                encodeURIComponent(String(e.yearDashMonth))
                              ),
                            schemaPath:
                              "/v1/universes/{universeId}/revenue-reports/{yearDashMonth}/download",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return ((a = s.sent()), [2, new r.ko(a)]);
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdRevenueReportsYearDashMonthDownloadGet = function (
            e,
            t
          ) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [
                      4,
                      this.v1UniversesUniverseIdRevenueReportsYearDashMonthDownloadGetRaw(e, t)
                    ];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdRevenueReportsYearDashMonthGeneratePostRaw = function (
            e,
            t
          ) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdRevenueReportsYearDashMonthGeneratePost."
                      );
                    if (null === e.yearDashMonth || void 0 === e.yearDashMonth)
                      throw new r.Q0(
                        "yearDashMonth",
                        "Required parameter requestParameters.yearDashMonth was null or undefined when calling v1UniversesUniverseIdRevenueReportsYearDashMonthGeneratePost."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/revenue-reports/{yearDashMonth}/generate"
                              .replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              )
                              .replace(
                                "{".concat("yearDashMonth", "}"),
                                encodeURIComponent(String(e.yearDashMonth))
                              ),
                            schemaPath:
                              "/v1/universes/{universeId}/revenue-reports/{yearDashMonth}/generate",
                            method: "POST",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = s.sent()),
                      [
                        2,
                        new r.ko(a, function (e) {
                          return null == e
                            ? e
                            : {
                                revenueReportStatus: (0, r.t2)(e, "revenueReportStatus")
                                  ? e.revenueReportStatus
                                  : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdRevenueReportsYearDashMonthGeneratePost = function (
            e,
            t
          ) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [
                      4,
                      this.v1UniversesUniverseIdRevenueReportsYearDashMonthGeneratePostRaw(e, t)
                    ];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdRevenueReportsYearDashMonthGetRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdRevenueReportsYearDashMonthGet."
                      );
                    if (null === e.yearDashMonth || void 0 === e.yearDashMonth)
                      throw new r.Q0(
                        "yearDashMonth",
                        "Required parameter requestParameters.yearDashMonth was null or undefined when calling v1UniversesUniverseIdRevenueReportsYearDashMonthGet."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/revenue-reports/{yearDashMonth}"
                              .replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              )
                              .replace(
                                "{".concat("yearDashMonth", "}"),
                                encodeURIComponent(String(e.yearDashMonth))
                              ),
                            schemaPath:
                              "/v1/universes/{universeId}/revenue-reports/{yearDashMonth}",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = s.sent()),
                      [
                        2,
                        new r.ko(a, function (e) {
                          return I(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdRevenueReportsYearDashMonthGet = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesUniverseIdRevenueReportsYearDashMonthGetRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdStatisticReportsGetRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdStatisticReportsGet."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/statistic-reports".replace(
                              "{".concat("universeId", "}"),
                              encodeURIComponent(String(e.universeId))
                            ),
                            schemaPath: "/v1/universes/{universeId}/statistic-reports",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = s.sent()),
                      [
                        2,
                        new r.ko(a, function (e) {
                          return null == e
                            ? e
                            : { reports: (0, r.t2)(e, "reports") ? e.reports.map(v) : void 0 };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdStatisticReportsGet = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesUniverseIdStatisticReportsGetRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdStatisticReportsYearDashMonthDownloadGetRaw = function (
            e,
            t
          ) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdStatisticReportsYearDashMonthDownloadGet."
                      );
                    if (null === e.yearDashMonth || void 0 === e.yearDashMonth)
                      throw new r.Q0(
                        "yearDashMonth",
                        "Required parameter requestParameters.yearDashMonth was null or undefined when calling v1UniversesUniverseIdStatisticReportsYearDashMonthDownloadGet."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/statistic-reports/{yearDashMonth}/download"
                              .replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              )
                              .replace(
                                "{".concat("yearDashMonth", "}"),
                                encodeURIComponent(String(e.yearDashMonth))
                              ),
                            schemaPath:
                              "/v1/universes/{universeId}/statistic-reports/{yearDashMonth}/download",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return ((a = s.sent()), [2, new r.ko(a)]);
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdStatisticReportsYearDashMonthDownloadGet = function (
            e,
            t
          ) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [
                      4,
                      this.v1UniversesUniverseIdStatisticReportsYearDashMonthDownloadGetRaw(e, t)
                    ];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdStatisticReportsYearDashMonthGeneratePostRaw =
            function (e, t) {
              return (0, s.a)(this, void 0, void 0, function () {
                var n, i, a;
                return (0, s.b)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (null === e.universeId || void 0 === e.universeId)
                        throw new r.Q0(
                          "universeId",
                          "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdStatisticReportsYearDashMonthGeneratePost."
                        );
                      if (null === e.yearDashMonth || void 0 === e.yearDashMonth)
                        throw new r.Q0(
                          "yearDashMonth",
                          "Required parameter requestParameters.yearDashMonth was null or undefined when calling v1UniversesUniverseIdStatisticReportsYearDashMonthGeneratePost."
                        );
                      return (
                        (n = {}),
                        (i = {}),
                        [
                          4,
                          this.request(
                            {
                              path: "/v1/universes/{universeId}/statistic-reports/{yearDashMonth}/generate"
                                .replace(
                                  "{".concat("universeId", "}"),
                                  encodeURIComponent(String(e.universeId))
                                )
                                .replace(
                                  "{".concat("yearDashMonth", "}"),
                                  encodeURIComponent(String(e.yearDashMonth))
                                ),
                              schemaPath:
                                "/v1/universes/{universeId}/statistic-reports/{yearDashMonth}/generate",
                              method: "POST",
                              headers: i,
                              query: n
                            },
                            t
                          )
                        ]
                      );
                    case 1:
                      return ((a = s.sent()), [2, new r.ko(a)]);
                  }
                });
              });
            }),
          (t.prototype.v1UniversesUniverseIdStatisticReportsYearDashMonthGeneratePost = function (
            e,
            t
          ) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [
                      4,
                      this.v1UniversesUniverseIdStatisticReportsYearDashMonthGeneratePostRaw(e, t)
                    ];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdStatisticReportsYearDashMonthGetRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.universeId || void 0 === e.universeId)
                      throw new r.Q0(
                        "universeId",
                        "Required parameter requestParameters.universeId was null or undefined when calling v1UniversesUniverseIdStatisticReportsYearDashMonthGet."
                      );
                    if (null === e.yearDashMonth || void 0 === e.yearDashMonth)
                      throw new r.Q0(
                        "yearDashMonth",
                        "Required parameter requestParameters.yearDashMonth was null or undefined when calling v1UniversesUniverseIdStatisticReportsYearDashMonthGet."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/{universeId}/statistic-reports/{yearDashMonth}"
                              .replace(
                                "{".concat("universeId", "}"),
                                encodeURIComponent(String(e.universeId))
                              )
                              .replace(
                                "{".concat("yearDashMonth", "}"),
                                encodeURIComponent(String(e.yearDashMonth))
                              ),
                            schemaPath:
                              "/v1/universes/{universeId}/statistic-reports/{yearDashMonth}",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = s.sent()),
                      [
                        2,
                        new r.ko(a, function (e) {
                          return v(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UniversesUniverseIdStatisticReportsYearDashMonthGet = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UniversesUniverseIdStatisticReportsYearDashMonthGetRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UniversesUserPublicPublishEligibilityGetRaw = function (e) {
            return (0, s.a)(this, void 0, void 0, function () {
              var t, n, i;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (t = {}),
                      (n = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/universes/user-public-publish-eligibility",
                            schemaPath: "/v1/universes/user-public-publish-eligibility",
                            method: "GET",
                            headers: n,
                            query: t
                          },
                          e
                        )
                      ]
                    );
                  case 1:
                    return (
                      (i = s.sent()),
                      [
                        2,
                        new r.ko(i, function (e) {
                          return null == e
                            ? e
                            : { isEligible: (0, r.t2)(e, "isEligible") ? e.isEligible : void 0 };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UniversesUserPublicPublishEligibilityGet = function (e) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.v1UniversesUserPublicPublishEligibilityGetRaw(e)];
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
      })(r.yi);
      !(function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        ((0, s._)(t, e),
          (t.prototype.v1UserGroupsCanmanageGetRaw = function (e) {
            return (0, s.a)(this, void 0, void 0, function () {
              var t, n, i;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (t = {}),
                      (n = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/user/groups/canmanage",
                            schemaPath: "/v1/user/groups/canmanage",
                            method: "GET",
                            headers: n,
                            query: t
                          },
                          e
                        )
                      ]
                    );
                  case 1:
                    return (
                      (i = s.sent()),
                      [
                        2,
                        new r.ko(i, function (e) {
                          return k(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UserGroupsCanmanageGet = function (e) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.v1UserGroupsCanmanageGetRaw(e)];
                  case 1:
                    return [4, t.sent().value()];
                  case 2:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UserGroupsCanmanagegamesoritemsGetRaw = function (e) {
            return (0, s.a)(this, void 0, void 0, function () {
              var t, n, i;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (t = {}),
                      (n = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/user/groups/canmanagegamesoritems",
                            schemaPath: "/v1/user/groups/canmanagegamesoritems",
                            method: "GET",
                            headers: n,
                            query: t
                          },
                          e
                        )
                      ]
                    );
                  case 1:
                    return (
                      (i = s.sent()),
                      [
                        2,
                        new r.ko(i, function (e) {
                          return k(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UserGroupsCanmanagegamesoritemsGet = function (e) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.v1UserGroupsCanmanagegamesoritemsGetRaw(e)];
                  case 1:
                    return [4, t.sent().value()];
                  case 2:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UserIsVerifiedCreatorGetRaw = function (e) {
            return (0, s.a)(this, void 0, void 0, function () {
              var t, n, i;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (t = {}),
                      (n = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/user/is-verified-creator",
                            schemaPath: "/v1/user/is-verified-creator",
                            method: "GET",
                            headers: n,
                            query: t
                          },
                          e
                        )
                      ]
                    );
                  case 1:
                    return (
                      (i = s.sent()),
                      [
                        2,
                        new r.ko(i, function (e) {
                          return null == e
                            ? e
                            : {
                                isVerifiedCreator: (0, r.t2)(e, "isVerifiedCreator")
                                  ? e.isVerifiedCreator
                                  : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UserIsVerifiedCreatorGet = function (e) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.v1UserIsVerifiedCreatorGetRaw(e)];
                  case 1:
                    return [4, t.sent().value()];
                  case 2:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UserNotificationsStatisticReportsGetRaw = function (e) {
            return (0, s.a)(this, void 0, void 0, function () {
              var t, n, i;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (t = {}),
                      (n = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/user/notifications/statistic-reports",
                            schemaPath: "/v1/user/notifications/statistic-reports",
                            method: "GET",
                            headers: n,
                            query: t
                          },
                          e
                        )
                      ]
                    );
                  case 1:
                    return (
                      (i = s.sent()),
                      [
                        2,
                        new r.ko(i, function (e) {
                          return null == e
                            ? e
                            : { data: (0, r.t2)(e, "data") ? e.data.map(C) : void 0 };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UserNotificationsStatisticReportsGet = function (e) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.v1UserNotificationsStatisticReportsGetRaw(e)];
                  case 1:
                    return [4, t.sent().value()];
                  case 2:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UserUniversesGetRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (n = {}),
                      void 0 !== e.isArchived && (n.isArchived = e.isArchived),
                      void 0 !== e.sortOrder && (n.sortOrder = e.sortOrder),
                      void 0 !== e.limit && (n.limit = e.limit),
                      void 0 !== e.cursor && (n.cursor = e.cursor),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/user/universes",
                            schemaPath: "/v1/user/universes",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = s.sent()),
                      [
                        2,
                        new r.ko(a, function (e) {
                          return Q(e);
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UserUniversesGet = function () {
            return (0, s.a)(this, arguments, void 0, function (e, t) {
              return (
                void 0 === e && (e = {}),
                (0, s.b)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.v1UserUniversesGetRaw(e, t)];
                    case 1:
                      return [4, n.sent().value()];
                    case 2:
                      return [2, n.sent()];
                  }
                })
              );
            });
          }),
          (t.prototype.v1UserUserIdCanmanageAssetIdGetRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.userId || void 0 === e.userId)
                      throw new r.Q0(
                        "userId",
                        "Required parameter requestParameters.userId was null or undefined when calling v1UserUserIdCanmanageAssetIdGet."
                      );
                    if (null === e.assetId || void 0 === e.assetId)
                      throw new r.Q0(
                        "assetId",
                        "Required parameter requestParameters.assetId was null or undefined when calling v1UserUserIdCanmanageAssetIdGet."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/user/{userId}/canmanage/{assetId}"
                              .replace(
                                "{".concat("userId", "}"),
                                encodeURIComponent(String(e.userId))
                              )
                              .replace(
                                "{".concat("assetId", "}"),
                                encodeURIComponent(String(e.assetId))
                              ),
                            schemaPath: "/v1/user/{userId}/canmanage/{assetId}",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = s.sent()),
                      [
                        2,
                        new r.ko(a, function (e) {
                          return null == e
                            ? e
                            : {
                                success: (0, r.t2)(e, "Success") ? e.Success : void 0,
                                canManage: (0, r.t2)(e, "CanManage") ? e.CanManage : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UserUserIdCanmanageAssetIdGet = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UserUserIdCanmanageAssetIdGetRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (t.prototype.v1UserUserIdIsAdminDeveloperConsoleEnabledGetRaw = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              var n, i, a;
              return (0, s.b)(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (null === e.userId || void 0 === e.userId)
                      throw new r.Q0(
                        "userId",
                        "Required parameter requestParameters.userId was null or undefined when calling v1UserUserIdIsAdminDeveloperConsoleEnabledGet."
                      );
                    return (
                      (n = {}),
                      (i = {}),
                      [
                        4,
                        this.request(
                          {
                            path: "/v1/user/{userId}/is-admin-developer-console-enabled".replace(
                              "{".concat("userId", "}"),
                              encodeURIComponent(String(e.userId))
                            ),
                            schemaPath: "/v1/user/{userId}/is-admin-developer-console-enabled",
                            method: "GET",
                            headers: i,
                            query: n
                          },
                          t
                        )
                      ]
                    );
                  case 1:
                    return (
                      (a = s.sent()),
                      [
                        2,
                        new r.ko(a, function (e) {
                          return null == e
                            ? e
                            : {
                                isAdminDeveloperConsoleEnabled: (0, r.t2)(
                                  e,
                                  "isAdminDeveloperConsoleEnabled"
                                )
                                  ? e.isAdminDeveloperConsoleEnabled
                                  : void 0
                              };
                        })
                      ]
                    );
                }
              });
            });
          }),
          (t.prototype.v1UserUserIdIsAdminDeveloperConsoleEnabledGet = function (e, t) {
            return (0, s.a)(this, void 0, void 0, function () {
              return (0, s.b)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.v1UserUserIdIsAdminDeveloperConsoleEnabledGetRaw(e, t)];
                  case 1:
                    return [4, n.sent().value()];
                  case 2:
                    return [2, n.sent()];
                }
              });
            });
          }));
      })(r.yi);
    }
  }
]);
