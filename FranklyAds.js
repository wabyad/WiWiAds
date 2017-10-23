class FranklyAds {
	 bMethod6(){
	    const bMethod6 = 6;
    	console.log("bMethod6");
    }
     bMethod7(){
	    const bMethod7 = 7;
    	console.log("bMethod7");
    }
    constructor( ){
        // Any customizable info should go into settings
        this.settings = {
            contentProvider :  "kake",
            contentClassification :      "test",
            contentClassificationID :   "289038",
            pageClassification :   "C",
            containerClass : "home",
            containerType: "C",
            enableSingleRequest : true,
            collapseEmptyDivs : false,
            gptID : "43459271",
            adContainerIDPrefix: "frAd-",
            breakpoint: 728,
            adRequests : null,
            defaultAdRequests: [],
            finalTaxonomy: false,
        };
        // WiNOTE: viewport = device, except that by default it's calculated by a breakpoint and not detected by user agent;
        // WiNOTE: if user agent is detected to be mobile, it will force using mobile ads. 
        this.viewport = (window.innerWidth < this.settings.breakpoint) ? "mobile" : "desktop";
        this.domain = encodeURIComponent(window.location.origin);
        this.domain = encodeURIComponent("http://www.kake.com");
        this.geoLocation = false;
        this.gptScript = "http://www.googletagservices.com/tag/js/gpt.js";     
        this.timeline = [];
        this.adTags = [];
        this.adIDs = [];
        // WiNOTE: if there is not custom finalTaxonomy, it defaults to classic 
        // WiTODO: the choice to toggle between the taxonamy options
        this.taxonomy = {
                classic: "/[ID]/[Split]-[Viewport]/[ContentProvider]/[Web]/[ContentClassification]", 
                iab:       "/[ID]/[ContentProvider]-[Split]/[ContentClassification]",
        };
        this.adPath = {
            nat: "",
            loc: "",
        };
        this.adTypes = {
            default: [[300,250]],
            // label > viewport > placement >size
            wide: {
                default:          [[728, 90]],
                desktop: {
                    top:          [[728, 90],[970,90],[970,250]],
                    nav:          [[728, 90]],
                    content:    [[468, 60]],
                    bottom:    [[728, 90]],
                    homepage: {
                         top:          [[728, 90],[970,90],[970,250]],
                        nav:          [[728, 90]],
                        content:    [[468, 60]],
                        bottom:    [[728, 90]],
                    },
                    category: {
                         top:          [[728, 90],[970,90],[970,250]],
                        nav:          [[728, 90]],
                        content:    [[468, 60]],
                        bottom:    [[728, 90]],
                    },
                    story: {
                         top:          [[728, 90],[970,90],[970,250]],
                        nav:          [[728, 90]],
                        content:    [[468, 60]],
                        bottom:    [[728, 90]],
                    },
                }
            },
            box: {
                 default:          [[300, 250]],
                desktop:{
                    top:          [[300,250]],
                    nav:          [[300,250]],
                    right:        [[300,250],[300,600],[300,1050]],
                    content:   [[300,250]],
                    bottom:    [[300,250]],
                }
            },
            // viewport > placement >label > size
            desktop: {
                default:        [[300,250]],
                wide:            [[728, 90]],
                box:              [[300,250]],
                top: {
                    wide:        [[728, 90],[970,90],[970,250]],
                    box:         [[300,250],[300,600],[300,1050]],
                    default:    [[728, 90]],
                    },
                nav: {
                    wide:        [[728, 90],[970,90]],
                    box:         [[300,250]],
                    default:    [[728, 90]],
                },
                content: {
                    wide:        [[468, 60]],
                    box:         [[300,250]],
                    default:    [[300,250]],
                },
                right: {
                    box:         [[300,250], [300,600]],
                    default:    [[300,250]],
                },
                bottom: {
                    wide:        [[728, 90],[970,90]],
                    box:         [[300, 250]],
                    default:    [[728, 90]],
                },
            },
            mobile: {
                default:        [[300,250]],
                wide:            [[320, 50]],
                box:             [[300,250]],
                top: {
                    wide:    [[320,50]],
                    box:     [[300,250]],
                },
                content: {
                    wide:    [[320,50]],
                    box:     [[300,250]],
                },
                bottom: {
                    wide:   [[320,50]],
                    box:    [[300,250]],
                },
            },
        };
        this.defaultAdRequests = [
            {
                viewport: "desktop",
                placement: "top",
                type: "wide",
                order: 1,
                splits: {   owner: "nat",   nat: 50,    },
            },
            {
                container: "frAd-d-nav-wide-1",
                viewport: "desktop",
                placement: "nav",
                type: "wide",
                order: 1,
                splits: {   owner: "nat",   nat: 50,    },
            },
            {
                viewport: "desktop",
                placement: "content",
                type: "wide",
                order: 1,
                splits: {   owner: "nat",   nat: 50,    },
            },
            {
                viewport: "desktop",
                placement: "content",
                type: "wide",
                order: 2,
                splits: {   owner: "nat",   nat: 50,    },
            },
            {
                viewport: "desktop",
                placement: "right",
                type: "box",
                order: 1,
                splits: {   owner: "nat",   nat: 50,    },
            },
            {
                viewport: "desktop",
                placement: "right",
                type: "box",
                order: 2,
                splits: {   owner: "nat",   nat: 50,    },
            },
            {
                viewport: "desktop",
                placement: "right",
                type: "box",
                order: 3,
                splits: {   owner: "nat",   nat: 50,    },
            },
            {
                viewport: "desktop",
                placement: "bottom",
                type: "wide",
                order: 1,
                splits: {   owner: "nat",   nat: 50,    },
            },
            {
                viewport: "mobile",
                placement: "top",
                type: "wide",
                order: 1,
                splits: {   owner: "nat",   nat: 50,    },
            },
            {
                viewport: "mobile",
                placement: "content",
                type: "wide",
                order: 1,
                splits: {   owner: "nat",   nat: 50,    },
            },
            {
                viewport: "mobile",
                placement: "bottom",
                type: "wide",
                order: 1,
                splits: {   owner: "nat",   nat: 50,    },
            },
        ];
        this.finalAdRequestsToDefine = [];
        
        this.timestamp("FranklyAds");
        this.gptDownload = new FranklyAdScript(this.gptScript);
        
        this
            .timestamp("gptDownload Started")
            .prepare()
            .getData()
            .gptDownload.promise
                .then(resolvedData => { 
			        this.timestamp("gptDownload Done");
			        this.gptWait();
                })
                .catch(rejectedData => {
                        console.log("FranklyAds.gptDownload  ✗");
                        return false;
                });
    }
    timestamp(initiater){
        let lastStamp =  (this.timeline.length > 0) ? this.timeline[this.timeline.length-1].stamp : 0;
        let thisStamp = Date.now();
        let thisStampMS = (this.timeline.length === 0) ? 0 : thisStamp - lastStamp;
        let totalMS = (this.timeline.length === 0) ? 0 : thisStamp - this.timeline[0].stamp;
        this.timeline.push({
            initiater: initiater,
            stamp:  thisStamp,
            difference: thisStampMS,
            total: totalMS
        });
        return this;
    }
    prepare() {
        console.log("FranklyAds.prepare");
        this
            .getCustomSettings()
//             .addCSS()
            .getDevice()
//            .getGeoLocation()
            .constructAdPaths();
        return this;
    }
        getCustomSettings(){
            console.log("FranklyAds.getCustomSettings ");
            if ( !!window.FranklyAdsCustomSettings ) {
                Object.assign( this.settings, window.FranklyAdsCustomSettings );
                if ( !!window.FranklyAdsCustomSettings.adRequests ) {
                    Object.assign( this.defaultAdRequests, window.FranklyAdsCustomSettings.adRequests ); 
                }
            }
            return this;
        }
        getDevice(){
            this.viewport = (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) ? "mobile" : this.viewport;
            console.log("FranklyAds.getDevice: "+this.viewport);
            return this;
        }
        getGeoLocation(){
            console.log("FranklyAds.getGeoLocation ");
            if ( navigator.geolocation ) {
                window.FranklyAdsGeoLocation = {};
                window.FranklyAdsGeoLocation.retrieved = false;
                //navigator.geolocation.getCurrentPosition( this.parseGeoLocation);
            }
            return this;
        }
            //WiMAJOR: fix the way the parseGeoLocation callback is handled 
            //WiMAJOR: decide if we should wait for geolocation or store it
            parseGeoLocation(position){
                window.FranklyAdsGeoLocation = {};
                window.FranklyAdsGeoLocation.latitude = position.coords.latitude;
                window.FranklyAdsGeoLocation.longitude = position.coords.longitude;
                FranklyAdsGeoLocation.retrieved = true;
                console.log("FranklyAds.parseGeoLocation ",  window.FranklyAdsGeoLocation.latitude,  window.FranklyAdsGeoLocation.longitude);
                return position;
            }
        //WiTODO: add a way to choose between taxonamies
        constructAdPaths(){
            console.log("FranklyAds.constructAdPaths");
            let finalTaxonomy =  ( !this.settings.finalTaxonomy) ? this.taxonomy.iab : this.settings.finalTaxonomy;
            this.adPath.all = finalTaxonomy
                .replace("[ID]",this.settings.gptID)
                .replace("[Viewport]",  (this.viewport === "desktop") ? "desktop" : "mob")
                .replace("[ContentProvider]",this.settings.contentProvider.toLowerCase()+"")
                .replace("[Web]", (this.viewport === "desktop") ? "web" : "m-web")
                .replace("[ContentClassification]",this.settings.contentClassification.toLowerCase());
                this.adPath.nat = this.adPath.all
                        .replace("[Split]","nat");
                this.adPath.loc = this.adPath.all
                    .replace("[Split]","loc");
                console.log("FranklyAds.constructAdPaths","nat: "+this.adPath.nat, "loc: "+this.adPath.loc);
            return this;
        }
    getData(){
        console.log("FranklyAds.getData ");
        this.timestamp("getData");
        if (!!window.wng_pageInfo) return this.getLegacyData();
        return this.getNewData();
    }
        getLegacyData(){
            this.timestamp("getLegacyData");
            this.legacySettings = {
                contentProvider:               wng_pageInfo.affiliateName,
                contentClassification :      wng_pageInfo.contentClassification,
                contentClassificationID :   ""+wng_pageInfo.containerId,
                pageClassification :          wng_pageInfo.containerType,
                adRequests:                     {},
            };
            if (!!wng_pageInfo.ads) {
                for (let legacyAd in wng_pageInfo.ads) {
                    let legacyInfo = wng_pageInfo.ads[legacyAd];
                    let newInfo = this.legacySettings.adRequests[legacyAd];
                
                    newInfo = {
                        container: legacyInfo.parent,
                        id: legacyInfo.id,				//WiNote: id = wnsz in all cases so far. So this is the future replacement for wnsz
                        wnsz : legacyInfo.wnsz,	//WiNote: id = wnsz in all cases so far. So this to be replaced by id
                        oop: (legacyInfo.width < 50) ? true : false, 
                        size : [[ legacyInfo.width, legacyInfo.height ]],   //WiToDo: make size work with overrides, or a default size chart. as this doesn't support multiple sizes yet.
                        splits: {},
                    };
                
                    let mainAdOwner = legacyInfo.ownerinfo.owner;
                    let theOtherOwner = (mainAdOwner === "nat") ? "loc" : "nat";
                    let adSplit = this.splitStringToNumber(legacyInfo.ownerinfo.split);
            
                    newInfo.splits.owner = mainAdOwner;                     //newInfo.splits.owner = "nat" || "loc"
                    newInfo.splits[mainAdOwner] = adSplit;                   //newInfo.splits.nat || newInfo.splits.loc
                    newInfo.splits[theOtherOwner] = 100 - adSplit;       //newInfo.splits.loc || newInfo.splits.nat
                    newInfo.splits.winner = (newInfo.splits[mainAdOwner] === 100)  ? newInfo.splits.owner : this.getRandomAdOwner(newInfo.splits);
                     this.legacySettings.adRequests[legacyAd] = newInfo;
                }
                Object.assign(this.settings, this.legacySettings);
                this.timestamp("getLegacyData DONE");
                console.log("FranklyAds.getLegacyData ");
            }
            else {
                console.log("FranklyAds.getLegacyData: FAIL");
                return false;
            }
            return this;
        }
        getNewData(){
            console.log("FranklyAds.getNewData ");
            this.defaultAdRequests.forEach ( adRequest => {
                let {  viewport = false, 
                        placement = false, 
                        type = false, 
                        order = "1", 
                        container = false, 
                        size = false, 
                        splits = {  nat: 100,   owner: "nat",   winner: "nat",  },
                } = adRequest;
                viewport = this.getAdViewport(viewport, container);
                if (viewport === this.viewport) {
                    container = this.getAdContainer(container, placement, type, viewport, order);
                    splits = this.getAdSplits(splits);
                    size = this.getAdSize(size, viewport, placement, type);
                    if ( !!container && !!size ) {
                        this.finalAdRequestsToDefine.push( {
                            viewport,
                            placement,
                            type,
                            size,
                            container,
                            order,
                            splits
                        } );
                    }
                }
            });
            return this;
        }
            getAdViewport(viewport, container){
                if (!viewport) {
                    if (!!container) {
                        if ( container.indexOf("-d-") > -1 ) return  "desktop";
                        if ( container.indexOf("-m-") > -1 ) return  "mobile";
                    }
                    else  return  "desktop";
                } 
                return viewport;
            }
            getAdContainer(container, placement, type, viewport, order){
                if (!container && !!placement && !!type) {
                    let viewportPrefix = ( viewport === "desktop" ) ? "d-" : "m-";
                    container = this.settings.adContainerIDPrefix + viewportPrefix + placement + "-" + type + "-" + order; 
                } 
                return container;
            }
            getAdSplits(splits){
                 if (!splits.winner) {
                    let mainAdOwner = splits.owner;
                    let theOtherOwner = (mainAdOwner === "nat") ? "loc" : "nat";
                    let adSplit = this.splitStringToNumber(splits[mainAdOwner]);
                    splits[theOtherOwner] = 100 - adSplit;  
                    splits.winner =  (splits[mainAdOwner] === 100)  ? splits.owner : this.getRandomAdOwner(splits);
                }
                return splits;
            }
                splitStringToNumber(splitNumber){
                    let finalSplit = 0;
                    if (Number.isInteger(splitNumber))  finalSplit = splitNumber;
                    else if (typeof splitNumber === "number")  finalSplit =  Math.floor(splitNumber);
                    else if (typeof splitNumber === "string"){
                        finalSplit = parseInt(splitNumber);
                        finalSplit =  (isNaN(finalSplit)) ? 0 : finalSplit;
                    }
                    if (finalSplit > 100) finalSplit = 100;
                    return finalSplit;        
                }
                getRandomAdOwner(adSplits){
                    let mainAdOwner = adSplits.owner;
                    let theOtherAdOwner = (mainAdOwner === "nat") ? "loc" : "nat";
                    let winner =  (this.getRandomNumber() <= adSplits[mainAdOwner] ) ? mainAdOwner : theOtherAdOwner;
                    console.log("FranklyAds.getRandomAdOwner: mainAdOwner: "+mainAdOwner+" split: "+adSplits[mainAdOwner]+" winner: "+winner);
                    return winner;
                }
                    getRandomNumber () {
                        let randomNumber = Math.random() * 100;
                        console.log("FranklyAds.getRandomNumber: "+randomNumber);
                        return randomNumber;
                    }
            getAdSize(size, viewport, placement, type){
                if ( !size) {
                    if ( !!this.adTypes[viewport] ) {
                        if ( !!this.adTypes[viewport][placement] ) {
                            if ( !!this.adTypes[viewport][placement][type] ) {
                                // viewport + placement + type
                                return  this.adTypes[viewport][placement][type];
                            }
                            // viewport + placement -  no type
                            else return  this.adTypes[viewport][placement].default;
                        }
                       // viewport - no placement -  no type   
                        else return  this.adTypes[viewport].default;
                    }
                    // no viewport - no placement -  no type   
                } else return this.adTypes.default;
                return size;
            }
    gptWait(){
        this.timestamp("gptWait");
        let waitedFor = 0;
        let waitingPeriod = 1;
        let waitingForGoogleTag =  setInterval( () => { 
            if (window.googletag && window.googletag.apiReady){
            	this.timestamp("gptWait Done");
            	console.log("FranklyAds.gptWait Done in "+waitedFor+"ms");
                clearInterval(waitingForGoogleTag);
                this.domWait();
            }
            waitedFor+=  waitingPeriod;
        }, waitingPeriod);
    return this;
    } 
        domWait(){
            console.log("FranklyAds.domWait "); 
            this.timestamp("domWait");
            if (document.readyState !== "loading") {
            	this.timestamp("domWait readyState");
                console.log("FranklyAds.domWait: readyState "); 
                this.initializeAds();
            } else {
                document.addEventListener("DOMContentLoaded",  event => {
                	this.timestamp("domWait DOMContentLoaded");
                    console.log("FranklyAds.domWait: DOMContentLoaded "); 
                    this.initializeAds();
                });
            }
        }
            initializeAds(){
                console.log("FranklyAds.initializeAds ");
                this
                    .timestamp("initializeAds")
                    .defineAds()
                    .setTargetingForAllTags()
                    .enableServicesAndBeyond()
                    .runAds();
                return this;
            }
                defineAds() {
                    console.log("FranklyAds.defineAds ");                     
                    if (!!window.wng_pageInfo) return  this.defineLegacyAds();
                    this.defineNewAds();              
                    return this;
                }
                    defineNewAds() {
                        console.log("FranklyAds.defineNewAds ");                     
                        this.finalAdRequestsToDefine.forEach( (adRequest ) => {
                             if (!document.getElementById(adRequest.container)){
                                    console.log("FranklyAds.defineNewAds: container "+adRequest.container+" not found");
                                    adRequest.error = "FranklyAds.defineNewAds: container "+adRequest.container+" not found";   
                                    return false;
                            }    
                            this.defineOneSlot(adRequest);
                        });                    
                        return this;
                    }
                    defineLegacyAds() {
                        console.log("FranklyAds.defineLegacyAds "); 
                        this.timestamp("defineLegacyAds");
                        let adRequests = this.settings.adRequests;
                        for (let ad in adRequests) {
                            let adRequest = adRequests[ad];
                            if (   !!document.getElementById(adRequest.container) ){
                                console.log("FranklyAds.defineLegacyAds ",adRequest);
                                
                                this.defineOneSlot(adRequest);
                            }
                            else {
                                //WiToDo: log better errors
                                console.log("FranklyAds.defineLegacyAds: ERROR added to adRequest.error "+adRequest.container);
                                if (!document.getElementById(adRequest.container))     adRequest.error = "FranklyAds.defineLegacyAds: container "+adRequest.container+" not found";   
                                else    adRequest.error = "FranklyAds.defineLegacyAds: some other error for "+adRequest.container+"  ";   
                            }
                        }
                        return this;
                    }
                        defineOneSlot(adRequest) {
                            //WiToDo: oop should configured but the id, but legacy doesn't have new id's yet
                            let adSlot;
                            let slotPath = this.adPath[adRequest.splits.winner];
                            document.getElementById(adRequest.container).classList.add(adRequest.splits.winner);
                            googletag.cmd.push( ()=> {
                            //WiMAJOR: 1x1 is not served as OOP
                                    adSlot =  adRequest.oop ? 
                                                    window.googletag.defineOutOfPageSlot(slotPath, adRequest.container) : 
                                                    window.googletag.defineSlot(slotPath, adRequest.size, adRequest.container);
                                    adSlot
                                        .addService(window.googletag.pubads())
                                        .setTargeting("lid", ["raycomnpn300b"]);
                                    adSlot.FRK = {
                                        path: slotPath,
                                        container: adRequest.container,
                                        wnsz: adRequest.wnsz,		//WiNote: Legacy id that's to be replaced to just id
                                        size:   adRequest.size,
                                        splits: adRequest.splits,
                                    };
                                    this.setTargetingForOneTag(adSlot);
                                    this.adTags.push(adSlot);
                                    this.adIDs.push(adRequest.container);
                             });
                            console.log("FranklyAds.defineOneSlot ", "container: "+adRequest.container, "path: "+slotPath, "owner: "+adRequest.splits.owner, "split: "+ adRequest.splits[adRequest.splits.owner], "winner: "+adRequest.splits.winner);
                            return window.googletag;
                        }
                            setTargetingForOneTag(adSlot){
                                console.log("FranklyAds.setTargetingForOneTag ");
                                adSlot
                                    .setTargeting("container", adSlot.FRK.container)
                                    .setTargeting("id", adSlot.FRK.container)
                                    .setTargeting("wnsz", adSlot.FRK.wnsz);
                                return adSlot;
                            }
                        setTargetingForAllTags(){
                            this.timestamp("setTargetingForAllTags");
                            console.log("FranklyAds.setTargeting ");
                            googletag.cmd.push( ()=> {
                                googletag.pubads()
                                    .setTargeting("wncid", this.settings.contentClassificationID)
                                    .setTargeting("wnpt", this.settings.pageClassification)
//                                     .setTargeting("wncp", this.settings.contentProvider)
//                                     .setTargeting("wncc", this.settings.contentClassification)
//                                     .setTargeting("wnpc", this.settings.pageClassification)
                                    // WiMAJOR integrate ksg
                                    .setTargeting("ksg", "q6vemumw9%2Cq6vex7rqa")
                                    .setTargeting("domain", this.domain)               
                                    .setTargeting("contentProvider", this.settings.contentProvider)
                                    .setTargeting("contentClassification", this.settings.contentClassification)
                                    .setTargeting("contentClassificationID", this.settings.contentClassificationID)
                                    .setTargeting("pageClassification", this.settings.pageClassification);
                                    //WiTODO: decide on delaying or storing geolocation 
                                    if (    !!window.FranklyAdsGeoLocation && 
                                            window.FranklyAdsGeoLocation.retrieved) {
                                        googletag.pubads().setLocation(
                                            window.FranklyAdsGeoLocation.latitude,
                                            window.FranklyAdsGeoLocation.longitude);
                                    }
                             });
                            return this;
                        }
                        enableServicesAndBeyond(){
                            this.timestamp("enableServicesAndBeyond");
                            console.log("FranklyAds.enableServicesAndBeyond ");
                            window.googletag.cmd.push( ()=> {
                                    window.googletag.pubads().enableAsyncRendering();
                                    if (this.settings.collapseEmptyDivs) {
                                            window.googletag.pubads().collapseEmptyDivs();
                                    }
                                    if (this.settings.enableSingleRequest) {
                                            window.googletag.pubads().enableSingleRequest();
                                    }
                                    window.googletag.pubads().disableInitialLoad();
                                    window.googletag.enableServices();
                            });
                            return this;
                        }
                        runAds(){
                            this.timestamp("runAds");
                            console.log("FranklyAds.runAds ");
                            window.googletag.cmd.push( ()=> {
                                    this.displayAds();
                                    this.refreshAds();
                                    this.timestamp("runAds DONE");
                                    console.log("FranklyAds.runAds DONE");
                            });
                            return this;
                        }  
                            displayAds(){
                                    this.adIDs.forEach( (adID) => {
                                         window.googletag.display(adID);
                                         console.log("FranklyAds.displayAds "+adID);
                                    });
                            }
                            refreshAds(){
                                let  adTags = this.adTags;
                                window.googletag.cmd.push( ()=> {
                                    window.googletag.pubads().refresh(adTags);
                                });
                            }
    addCSS(){
        let css =   `	.wnad, .frAd {position:relative;}
	                        .wnad.nat:after, .wnad.loc:after,  .frAd.nat:after, .frAd.loc:after {display:block;position:absolute;height:20px;width:100px;top:-10px;right:20px;color:#fff;}
		                    .wnad.nat:after, .frAd.nat:after{content:"NATIONAL";background:#ffab8d;}
		                    .wnad.loc:after, .frAd.loc:after{content:"LOCAL";background:#ff8396;}
	                        .wnad iframe, .frAd iframe{background:orange;}`;
        let head = document.head || document.getElementsByTagName('head')[0];
        let style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } 
        else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
        return this;
    }
}
class FranklyAdScript {
        constructor ( src = null , { 
                async = true, 
                type = "text/javascript",
                id = null,
                frThenCallback = null,
                frCatchCallback = null
                } = {} )  
        {
                if (src === null) return false;
                this.resolvedData = {};
                this.promise = new Promise( (resolve, reject) => { 
                		console.log("FranklyAdScript: promise started ");
                       var frScript = document.createElement("script");
                        Object.assign(frScript, {src, async, type});
                        frScript.addEventListener("load", e => {
                                console.log("FranklyAdScript: "+ frScript.src+" ✓ ");
                                resolve(this.resolvedData);
                                if (frThenCallback!==null) frThenCallback();
                        });
                        frScript.addEventListener("error", e => {
                                console.log("FranklyAdScript: "+ frScript.src+" ✗ ");
                                reject(this.resolvedData);
                                if (frCatchCallback!==null)  frCatchCallback();
                        });
                        var node =document.getElementsByTagName("script")[0];
                        node.parentNode.insertBefore(frScript, node);
                });
                return this;
        }
}
const frk = new FranklyAds();