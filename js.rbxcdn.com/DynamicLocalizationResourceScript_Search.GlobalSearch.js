var Roblox = Roblox || {};
Roblox.LangDynamic = Roblox.LangDynamic || {};
Roblox.LangDynamic["Search.GlobalSearch"] = {
  "Response.ShowingNormalSearchResults": "Showing results for <b>{query}</b> (without quotes):",
  "Response.NoExactSearchResults": "No results found for <b>{query}</b>.",
  "Action.LoadMore": "Load more"
};
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected(
    "DynamicLocalizationResourceScript_Search.GlobalSearch"
  );
