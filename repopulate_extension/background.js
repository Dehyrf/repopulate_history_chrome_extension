chrome.browserAction.onClicked.addListener(function(tab) {

var sitesList = ['http://heeeeeeeey.com/', 'http://www.news.google.com/', 'http://www.gmail.com/', 'http://amazon.com', 'http://theonion.com', 'http://buzzfeed.com', 'http://google.com', 'http://thatsthefinger.com/', 'http://cant-not-tweet-this.com/', 'http://eelslap.com/', 'http://www.staggeringbeauty.com/', 'http://burymewithmymoney.com/', 'http://www.fallingfalling.com/', 'http://ducksarethebest.com/', 'http://www.trypap.com/', 'http://www.republiquedesmangues.fr/', 'http://www.movenowthinklater.com/', 'http://www.partridgegetslucky.com/', 'http://www.rrrgggbbb.com/', 'http://beesbeesbees.com/', 'http://www.sanger.dk/', 'http://www.koalastothemax.com/', 'http://www.everydayim.com/', 'http://www.leduchamp.com/', 'http://grandpanoclothes.com/', 'http://www.haneke.net/', 'http://r33b.net/', 'http://randomcolour.com/', 'http://cat-bounce.com/', 'http://www.sadforjapan.com/', 'http://www.taghua.com/', 'http://chrismckenzie.com/', 'http://hasthelargehadroncolliderdestroyedtheworldyet.com/', 'http://ninjaflex.com/', 'http://iloveyoulikeafatladylovesapples.com/', 'http://ihasabucket.com/', 'http://corndogoncorndog.com/', 'http://giantbatfarts.com/', 'http://www.ringingtelephone.com/', 'http://www.pointerpointer.com/', 'http://www.pleasedonate.biz/', 'http://imaninja.com/', 'http://willthefuturebeaweso.me/', 'http://salmonofcapistrano.com/', 'http://www.ismycomputeron.com/', 'http://www.wwwdotcom.com/', 'http://www.nullingthevoid.com/', 'http://www.muchbetterthanthis.com/', 'http://www.ouaismaisbon.ch/', 'http://iamawesome.com/', 'http://www.pleaselike.com/', 'http://crouton.net/', 'http://corgiorgy.com/', 'http://www.electricboogiewoogie.com/', 'http://www.nelson-haha.com/', 'http://www.wutdafuk.com/', 'http://unicodesnowmanforyou.com/', 'http://tencents.info/', 'http://intotime.com/', 'http://leekspin.com/', 'http://minecraftstal.com/', 'http://www.riddlydiddly.com/', 'http://www.patience-is-a-virtue.org/', 'http://whitetrash.nl/', 'http://www.theendofreason.com/', 'http://zombo.com', 'http://secretsfornicotine.com/', 'http://pixelsfighting.com/', 'http://crapo.la/', 'http://baconsizzling.com/', 'http://isitwhite.com/', 'http://noot.space/', 'http://tomsdog.com/', 'http://hardcoreprawnlawn.com/', 'http://www.omfgdogs.com/', 'http://thefo.nz/', 'http://oct82.com/', 'http://www.news.google.com/', 'http://www.gmail.com/', 'http://amazon.com', 'http://theonion.com', 'http://buzzfeed.com', 'http://google.com', 'http://www.theverge.com/', 'http://www.roosterteeth.com', 'http://imgur.com/', 'http://www.gocomics.com/pearlsbeforeswine', 'http://www.thisiswhyimbroke.com', 'http://www.rocketjump.com/category/vghs', 'http://www.nick.com/legend-of-korra/episodes/', 'http://www.simpsonsworld.com/', 'http://imgur.com/gallery/Zsvsg', 'https://apple.com', 'http://www.skyrimalchemy.com/', 'https://www.duolingo.com/', 'http://openemu.org/', 'https://www.reddit.com/', 'https://www.bungie.net/', 'http://srmap.uesp.net/', 'http://destinythegame.com/', 'https://goo.gl/', 'http://www.nytimes.com/', 'http://www.wsj.com/', 'http://www.merriam-webster.com/', 'https://www.youtube.com/'];

//99 total sites in array


for (var i = 0, l = sitesList.length; i < l; ++i){
var tempValue = sitesList[i];
chrome.history.addUrl({'url': tempValue});
}
});
