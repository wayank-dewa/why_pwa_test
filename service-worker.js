var cname='swcache-v1';
var urlc=[
'/index.html',
'/assets/css/main.css',
'/assets/js/main.js',
'/assets/js/functions-min.js',
'/assets/js/vendor/jquery-2.2.4.min.js',
];

self.addEventListener('install', function(event) {
 event.waitUntil(
   caches.open(cname).then(function(cache) {
     console.log('opened cache');
	 return cache.addAll(urlc);
   })
 );
});

self.addEventListener('activate', function(event) {
 event.waitUntil(
   caches.keys().then(function(cacheNames) {
	 return Promise.all(
		 cacheNames.filter(function(cacheName){
			return cacheName != cname 
   }).map(function(cacheName){
	   return caches.delete(cacheName)
   })	   
 );
 })
);
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
	   	   
     return response || fetch(event.request);
   })
 );
});

//self.ASSETS=["https://abs.twimg.com/responsive-web/web/vendors~main.55bd4704.js","https://abs.twimg.com/responsive-web/web/sharedCore.fce75844.js","https://abs.twimg.com/responsive-web/web/shared~loader.DMDrawer~bundle.Compose~bundle.RichTextCompose~bundle.DirectMessages~bundle.DMRichTextCompose~b.5bd2d1e4.js","https://abs.twimg.com/responsive-web/web/shared~bundle.Explore~bundle.GenericTimeline~bundle.LiveEvent~bundle.Place~bundle.Search~bundle.QuoteTweetAct.ed2e0f34.js","https://abs.twimg.com/responsive-web/web/shared~bundle.ComposeMedia~bundle.Display~bundle.Ocf~bundle.Settings~bundle.SettingsProfile~bundle.UserLists~.ada01e04.js","https://abs.twimg.com/responsive-web/web/shared~bundle.ComposeMedia~bundle.Ocf~bundle.SettingsProfile~bundle.UserLists.4c5edb84.js","https://abs.twimg.com/responsive-web/web/shared~bundle.Compose~bundle.RichTextCompose~bundle.PlainTextCompose.db7ef734.js","https://abs.twimg.com/responsive-web/web/shared~bundle.RichTextCompose~bundle.DMRichTextCompose~ondemand.RichText.cdebed34.js","https://abs.twimg.com/responsive-web/web/shared~bundle.Settings~ondemand.SettingsInternals~bundle.SettingsTransparency.92c94584.js","https://abs.twimg.com/responsive-web/web/shared~loader.DMDrawer~bundle.DirectMessages~bundle.DMRichTextCompose.b17fa6a4.js","https://abs.twimg.com/responsive-web/web/shared~bundle.Display~bundle.Settings.17a0a644.js","https://abs.twimg.com/responsive-web/web/shared~bundle.Explore~loader.ExploreSidebar.70c8ca74.js","https://abs.twimg.com/responsive-web/web/shared~loader.DMDrawer~bundle.DirectMessages.e0a619e4.js","https://abs.twimg.com/responsive-web/web/shared~loader.DashMenu~bundle.Account.104e08d4.js","https://abs.twimg.com/responsive-web/web/shared~ondemand.lex~loaders.video.PlayerBase.6e477e84.js","https://abs.twimg.com/responsive-web/web/bundle.AboutThisAd.b5b3df74.js","https://abs.twimg.com/responsive-web/web/bundle.Account.b63f9df4.js","https://abs.twimg.com/responsive-web/web/bundle.AdvancedSearch.385bf714.js","https://abs.twimg.com/responsive-web/web/bundle.Bookmarks.f0710d34.js","https://abs.twimg.com/responsive-web/web/bundle.Collection.25c60434.js","https://abs.twimg.com/responsive-web/web/bundle.Compose.c496ec34.js","https://abs.twimg.com/responsive-web/web/bundle.ComposeMedia.3f8cfe64.js","https://abs.twimg.com/responsive-web/web/bundle.ConnectTab.5bc25904.js","https://abs.twimg.com/responsive-web/web/bundle.Conversation.9ef23284.js","https://abs.twimg.com/responsive-web/web/bundle.ConversationParticipants.a15206b4.js","https://abs.twimg.com/responsive-web/web/bundle.DMRichTextCompose.3456e014.js","https://abs.twimg.com/responsive-web/web/bundle.DirectMessages.15c78644.js","https://abs.twimg.com/responsive-web/web/bundle.Display.0da04f24.js","https://abs.twimg.com/responsive-web/web/bundle.Download.3cbd3c84.js","https://abs.twimg.com/responsive-web/web/bundle.Explore.6d42cee4.js","https://abs.twimg.com/responsive-web/web/bundle.ExploreTopics.0f8f2774.js","https://abs.twimg.com/responsive-web/web/bundle.FollowerRequests.597c6b64.js","https://abs.twimg.com/responsive-web/web/bundle.GenericTimeline.88cf0864.js","https://abs.twimg.com/responsive-web/web/bundle.GifSearch.ebd3e834.js","https://abs.twimg.com/responsive-web/web/bundle.HomeTimeline.92dd6144.js","https://abs.twimg.com/responsive-web/web/bundle.KeyboardShortcuts.cc65d174.js","https://abs.twimg.com/responsive-web/web/bundle.LiveEvent.c091ac54.js","https://abs.twimg.com/responsive-web/web/bundle.LoggedOutHome.70ee92d4.js","https://abs.twimg.com/responsive-web/web/bundle.Login.67ae5e14.js","https://abs.twimg.com/responsive-web/web/bundle.Logout.837b0904.js","https://abs.twimg.com/responsive-web/web/bundle.Moment.94ccf594.js","https://abs.twimg.com/responsive-web/web/bundle.MomentMaker.88a136a4.js","https://abs.twimg.com/responsive-web/web/bundle.MultiAccount.b5339af4.js","https://abs.twimg.com/responsive-web/web/bundle.NetworkInstrument.8c643414.js","https://abs.twimg.com/responsive-web/web/bundle.NotificationDetail.368ea104.js","https://abs.twimg.com/responsive-web/web/bundle.Notifications.f3ead6f4.js","https://abs.twimg.com/responsive-web/web/bundle.Ocf.a25932c4.js","https://abs.twimg.com/responsive-web/web/bundle.Place.360dd814.js","https://abs.twimg.com/responsive-web/web/bundle.PlainTextCompose.493bc364.js","https://abs.twimg.com/responsive-web/web/bundle.ProfileRedirect.2e81ccc4.js","https://abs.twimg.com/responsive-web/web/bundle.QuoteTweetActivity.ceab4384.js","https://abs.twimg.com/responsive-web/web/bundle.Report.7f157bf4.js","https://abs.twimg.com/responsive-web/web/bundle.RichTextCompose.9bc5ff94.js","https://abs.twimg.com/responsive-web/web/bundle.Search.4cdd1284.js","https://abs.twimg.com/responsive-web/web/bundle.Settings.d02bcb64.js","https://abs.twimg.com/responsive-web/web/bundle.SettingsInternals.ca484dd4.js","https://abs.twimg.com/responsive-web/web/bundle.SettingsProfile.26ac1b64.js","https://abs.twimg.com/responsive-web/web/bundle.SettingsTransparency.c8861ce4.js","https://abs.twimg.com/responsive-web/web/bundle.SmsLogin.b2aea314.js","https://abs.twimg.com/responsive-web/web/bundle.Topics.ddd645b4.js","https://abs.twimg.com/responsive-web/web/bundle.Trends.7d6e1974.js","https://abs.twimg.com/responsive-web/web/bundle.TweetActivity.f1daab84.js","https://abs.twimg.com/responsive-web/web/bundle.TweetMediaDetail.d9476224.js","https://abs.twimg.com/responsive-web/web/bundle.TweetMediaTags.e3d601b4.js","https://abs.twimg.com/responsive-web/web/bundle.Twitterversary.9fd94774.js","https://abs.twimg.com/responsive-web/web/bundle.UserAvatar.5c1e1934.js","https://abs.twimg.com/responsive-web/web/bundle.UserFollowLists.a6b59244.js","https://abs.twimg.com/responsive-web/web/bundle.UserHeader.c8223444.js","https://abs.twimg.com/responsive-web/web/bundle.UserLists.485eb644.js","https://abs.twimg.com/responsive-web/web/bundle.UserMoments.a82c9cc4.js","https://abs.twimg.com/responsive-web/web/bundle.UserProfile.d9492ca4.js","https://abs.twimg.com/responsive-web/web/bundle.UserRedirect.f0d6b464.js","https://abs.twimg.com/responsive-web/web/i18n-horizon/en.2087cd74.js","https://abs.twimg.com/responsive-web/web/i18n-rweb/en.bf968644.js","https://abs.twimg.com/responsive-web/web/loader.AbsolutePower.8aa5b1c4.js","https://abs.twimg.com/responsive-web/web/loader.AppModules.51d6b394.js","https://abs.twimg.com/responsive-web/web/loader.DMDrawer.7353eb04.js","https://abs.twimg.com/responsive-web/web/loader.DashMenu.b358ec44.js","https://abs.twimg.com/responsive-web/web/loader.ExploreSidebar.0d5036e4.js","https://abs.twimg.com/responsive-web/web/loader.FeedbackSheet.f46d4364.js","https://abs.twimg.com/responsive-web/web/loader.FeedbackTombstone.682d9b84.js","https://abs.twimg.com/responsive-web/web/loader.HWCard.1d796354.js","https://abs.twimg.com/responsive-web/web/loader.NewTweetsPill.b9e73944.js","https://abs.twimg.com/responsive-web/web/loader.PeriscopeOverlay.068ff504.js","https://abs.twimg.com/responsive-web/web/loader.ProfileClusterFollow.25171464.js","https://abs.twimg.com/responsive-web/web/loader.PushNotificationsPrompt.5678ec24.js","https://abs.twimg.com/responsive-web/web/loader.SideNav.1dae89e4.js","https://abs.twimg.com/responsive-web/web/loader.SignupModule.913f03c4.js","https://abs.twimg.com/responsive-web/web/loader.TimelineGap.8aac2484.js","https://abs.twimg.com/responsive-web/web/loader.TimelineRenderer.05953af4.js","https://abs.twimg.com/responsive-web/web/loader.TweetCurationActionMenu.5a9a6aa4.js","https://abs.twimg.com/responsive-web/web/loader.TweetPhotos.7ab60304.js","https://abs.twimg.com/responsive-web/web/loader.Typeahead.f8ef2244.js","https://abs.twimg.com/responsive-web/web/loader.WideLayout.81ff9a94.js","https://abs.twimg.com/responsive-web/web/loader.directMessagesData.e2e04694.js","https://abs.twimg.com/responsive-web/web/loader.graphQLDarkReads.e8830bb4.js","https://abs.twimg.com/responsive-web/web/loader.personalizationData.0e055294.js","https://abs.twimg.com/responsive-web/web/loaders.video.PlayerBase.6ae18e24.js","https://abs.twimg.com/responsive-web/web/loaders.video.PlayerHls13.4ee8b5a4.js","https://abs.twimg.com/responsive-web/web/loaders.video.PlayerUi.714a64a4.js","https://abs.twimg.com/responsive-web/web/loaders.video.VideoPlayerDefaultUI.bd1770f4.js","https://abs.twimg.com/responsive-web/web/main.0c5d9394.js","https://abs.twimg.com/responsive-web/web/ondemand.Balloons.0feaaed4.js","https://abs.twimg.com/responsive-web/web/ondemand.BranchSdk.29024244.js","https://abs.twimg.com/responsive-web/web/ondemand.CarouselScroller.667bc564.js","https://abs.twimg.com/responsive-web/web/ondemand.ComposeScheduling.7e9e14d4.js","https://abs.twimg.com/responsive-web/web/ondemand.Dropdown.990a8824.js","https://abs.twimg.com/responsive-web/web/ondemand.EditBirthdate.6068c6e4.js","https://abs.twimg.com/responsive-web/web/ondemand.EditPinned.db041b44.js","https://abs.twimg.com/responsive-web/web/ondemand.EmojiPicker.d2ec3004.js","https://abs.twimg.com/responsive-web/web/ondemand.HoverCard.d966c8d4.js","https://abs.twimg.com/responsive-web/web/ondemand.InlinePlayer.9e8c86b4.js","https://abs.twimg.com/responsive-web/web/ondemand.IntentPrompt.0d459a54.js","https://abs.twimg.com/responsive-web/web/ondemand.MicrosoftInterface.421a9584.js","https://abs.twimg.com/responsive-web/web/ondemand.ProfileSidebar.3ccb9c34.js","https://abs.twimg.com/responsive-web/web/ondemand.RichText.a975d444.js","https://abs.twimg.com/responsive-web/web/ondemand.SettingsInternals.7553bec4.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-ar.31f97864.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-bg.ecc20704.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-bn.8cad08c4.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-ca.f503f574.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-cs.88af0254.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-da.4f969084.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-de.131c85e4.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-el.b8e48994.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-en.163883c4.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-en-GB.2911fa14.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-es.c8993db4.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-eu.e9ca3734.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-fa.02c88784.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-fi.9c331a84.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-fil.ab7b24a4.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-fr.4a1af354.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-ga.1d664be4.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-gl.5ad9b0b4.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-gu.c5a15404.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-he.edf55ea4.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-hi.dbb864b4.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-hr.9fa3b954.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-hu.3a7f7374.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-id.19abeea4.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-it.d6c5db74.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-ja.2c1002a4.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-kn.38f76e04.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-ko.94c62b14.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-mr.dc604274.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-ms.c82a0454.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-nb.4799f074.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-nl.3da28814.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-pl.e689cf34.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-pt.a5a98454.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-ro.af06bd74.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-ru.5b287264.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-sk.b37e56c4.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-sr.6d6b8e14.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-sv.caccdf44.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-ta.d1606394.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-th.6c43fee4.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-tr.884b4124.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-uk.b179e7b4.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-ur.9256f4a4.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-zh.6f5df444.js","https://abs.twimg.com/responsive-web/web/ondemand.countries-zh-Hant.f059f194.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.ar.face4704.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.bg.ba8301d4.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.bn.bfbd2964.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.ca.1bc7ecd4.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.cs.c0ed64f4.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.da.ebe8cf14.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.de.5c193794.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.el.9fe06c44.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.en.07097c44.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.en-GB.912dbd44.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.en-ss.61c5da54.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.en-xx.8ffc4554.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.es.3a7849d4.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.eu.94757e54.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.fa.eac11914.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.fi.ce0a1104.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.fil.c7ea4774.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.fr.3ef401b4.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.ga.d9e60db4.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.gl.712c0bf4.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.gu.89cb9a44.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.he.d2186454.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.hi.be82ea84.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.hr.23d24d14.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.hu.1754ad74.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.id.d85e7e34.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.it.0f76df34.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.ja.52d198a4.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.kn.df463e54.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.ko.43877a64.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.mr.f370c6c4.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.ms.a9235254.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.nb.c81fb854.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.nl.40024ef4.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.pl.e5d32d64.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.pt.5e4c2244.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.ro.1fc66dd4.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.ru.3c962cc4.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.sk.b951ec94.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.sr.3c284e54.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.sv.19057c54.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.ta.a435b054.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.th.61640034.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.tr.7007e774.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.uk.606f4ef4.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.ur.9a17f494.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.vi.87a687f4.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.zh.668ffb44.js","https://abs.twimg.com/responsive-web/web/ondemand.emoji.zh-Hant.ab004104.js","https://abs.twimg.com/responsive-web/web/ondemand.framerateTracking.1a93cb14.js","https://abs.twimg.com/responsive-web/web/ondemand.lex.72f693a4.js","https://abs.twimg.com/responsive-web/web/ondemand.video.PlayerHls12.22008ef4.js","https://abs.twimg.com/responsive-web/web/polyfills.aa560c44.js","https://abs.twimg.com/responsive-web/web/raven.daf037c2ff239577e0a37894ac58d2dc.js"];self.BUILD_SHA='06faef417726ff30f891bf1e02b2432d0168316c';self.SENTRY_SAMPLE_RATE=0.025;self.SENTRY_DSN='https://b0f018c078774f089c4b2be155e032a8@sentry.io/66490';importScripts("https://abs.twimg.com/responsive-web/serviceworker/main.a9ab4694.js");
