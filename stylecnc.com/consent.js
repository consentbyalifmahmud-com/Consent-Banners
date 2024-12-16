var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "https://cdn.jsdelivr.net/gh/consentbyalifmahmud-com/Consent-Banners@6dd282c91db253a15e6ef4be026dca04ab31fd23/stylecnc.com/banner-style.css";

document.head.appendChild(link);

function log(data) {
    console.log(data);
}

function dataLayerPush(event){
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: event
    })
}

var contentInfo = {
    logo: "https://www.stylecnc.com/assets/img/logo.svg",
    navText: ["Consent", "Details", "About"],
    section1: "We use cookies to enhance your experience, as well as for analytics and measurement purposes. By continuing to use our website and services, you agree to our use of cookies as outlined in our Cookie Policy and Privacy Policy.",
    section3: "Cookies are small text files that are used by websites to improve the user experience. The law states that we can store cookies on your device if they are strictly necessary for the operation of this website. For all other types of cookies, we need your permission. This means that cookies classified as necessary are managed according to Article 6(1)(f) of the GDPR. All other cookies, such as those in the Preferences and Marketing categories, are managed according to Article 6(1)(a) of the GDPR. This website uses different types of cookies. Some cookies are set by third-party services that appear on our pages.",
    buttons: ["Accept", "Reject", "Custom", "Save"],
    categoryText: ["Functional", "Preference", "Analytics", "Marketing", "Unknown"],
    categoryDescription: [
        "Necessary cookies make the website usable by enabling basic functions like page navigation and access to secure areas of the website. Without these cookies, the website cannot function properly.",
        "Preference cookies enable the website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.",
        "Analytics cookies help website owners understand how visitors interact with websites by collecting and reporting information anonymously.",
        "Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.",
        "Unclassified cookies are cookies that we are currently classifying together with the providers of individual cookies."
    ],
    noCookieText: "No cookie to display"
}

var control = {
    logo: true,
    closeBtn: false,
    consentDefault: false,
    activeNavAndContent: 0,
    bannerShowingDelay: 0,
    clickLoaderDelay: 300
}

var cookieInfo = {
    functional: {},
    prefrence: {},
    analytics: {},
    marketing: {},
    unknown: {}
}

window.dataLayer = window.dataLayer || [];

function gtag(){
    dataLayer.push(arguments);
}

let originalCookieDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') || 
                                Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie');

function blockCookies() {
    Object.defineProperty(document, 'cookie', {
        get: function () {
            return "";
        },
        set: function () {
            console.warn("Cookies are disabled. Setting cookies is blocked.");
        },
        configurable: true  // Allow redefining the property later
    });
}

function allowCookies() {
    if (originalCookieDescriptor) {
        Object.defineProperty(document, 'cookie', originalCookieDescriptor);
    }
}

function deleteAllCookies() {
    const domains = window.location.hostname.split('.');

    document.cookie.split(";").forEach(function (cookie) {
        const cookieName = cookie.split("=")[0].trim();

        // Try to delete cookie for each subdomain
        for (let i = 0; i < domains.length; i++) {
            const domainPart = domains.slice(i).join('.');
            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domainPart}`;
        }

        // Try deleting the cookie without specifying the domain
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
}

var consent = {
    ad_storage: control.consentDefault ? 'granted' : 'denied',
    ad_user_data: control.consentDefault ? 'granted' : 'denied',
    ad_personalization: control.consentDefault ? 'granted' : 'denied',
    analytics_storage: control.consentDefault ? 'granted' : 'denied',
    functionality_storage: control.consentDefault ? 'granted' : 'denied',
    personalization_storage: control.consentDefault ? 'granted' : 'denied',
    unclassified_storage: control.consentDefault ? 'granted' : 'denied',
    security_storage: 'granted'
};

function onVisit(){
    var checkChoice = JSON.parse(localStorage.getItem("bannerChoice"));

    if(checkChoice){
        gtag('consent', 'update', checkChoice);
        dataLayerPush("consent_page_view");
    }else if(!checkChoice){
        gtag('consent', 'default', consent);
        dataLayerPush("consent_page_view");
    }
}

onVisit();


var getWebCookies = document.cookie.split(";").map(function(x){
    return x.split("=")[0].trim();
})

async function getCookieData() {
    const url = "https://cdn.jsdelivr.net/gh/consentbyalifmahmud-com/Consent-Banners@7f0cf88062efb8fdd993eff5167c80f73dc72444/metricsrealm.com/cookie.json";
    try{
        const response = await fetch(url);
        const data = await response.json();

        data.forEach(function(cookie){
            if(getWebCookies.includes(cookie.data_key)){

                Object.keys(cookieInfo).forEach(function(bannerCategory){

                    if(cookie.category.toLowerCase() == bannerCategory){

                        if(!cookieInfo[bannerCategory][cookie.data_controller]){
                            cookieInfo[bannerCategory][cookie.data_controller] = [];
                        }

                        cookieInfo[bannerCategory][cookie.data_controller].push(cookie)
                    }
                    
                })

            }
        });

        var checkChoice = JSON.parse(localStorage.getItem("bannerChoice"));

        if(!checkChoice){
            //deleteAllCookies();
            //blockCookies();
        }


        showBanner()
        
    }catch(error){
        console.error(error.message);
    }
 
}

function replaceAndControll(){

    var logo = document.querySelector(".bannerLogo");
    var closeBtn = document.querySelector(".closeBanner");

    if(control.logo){
        logo.innerHTML = `<img src="${contentInfo.logo}" alt="">`
    }

    closeBtn.style.display = control.closeBtn ? "flex" : "none";

    document.querySelectorAll(".bannerNavWrapper .nav").forEach(function(x, y){
        x.innerHTML = contentInfo.navText[y];
    })

    var allContentSection = document.querySelectorAll(".bannerContentWrapper .content")
    allContentSection[0].innerHTML = contentInfo.section1;
    allContentSection[2].innerHTML = contentInfo.section3;

    document.querySelectorAll(".bannerButtons button").forEach(function(x, y){
        x.innerHTML = contentInfo.buttons[y];
    })

    createElement();
    restEvents();
}

function restEvents(){

    function addBlurAndLoader(action){

        var getLoader = document.querySelector(".divLoader");
        var bannerContents = document.querySelectorAll(".consentBannerWrapper");
        
        getLoader.style.display = action ? "block" : "none";
        
        bannerContents.forEach(function(x){
            if(action){
                x.classList.add("blur");
            }else if(!action){
                x.classList.remove("blur");
            }
            
        })

    }

    function updateInput() {

        var getChoice = JSON.parse(localStorage.getItem("bannerChoice")) || {};
    
        var inputs = document.querySelectorAll(".consentBannerSwitch input");
    
        if (inputs[0]) {
            inputs[0].checked = true;
        }
    
        if (inputs[1]) {
            inputs[1].checked = getChoice.functionality_storage === "granted" ? true : false;
        }
    
        if (inputs[2]) {
            inputs[2].checked = getChoice.analytics_storage === "granted" ? true : false;
        }
    
        if (inputs[3]) {
            inputs[3].checked = getChoice.ad_personalization === "granted" ? true : false;
        }
    
        if (inputs[4]) {
            inputs[4].checked = getChoice.unclassified_storage === "granted" ? true : false;
        }
    
        if (inputs[5]) {
            inputs[5].checked = getChoice.security_storage === "granted" ? true : false;
        }

    }
    
    
    

    var getChoice = JSON.parse(localStorage.getItem("bannerChoice"));

    if(!getChoice){

        setTimeout(function(){
            bannerVisibiliy(true)
        }, control.bannerShowingDelay)

    }else{

        bannerVisibiliy(false, true);

    }

    function bannerVisibiliy(mainBanner, icon){

        var bannerWrapper = document.querySelector(".consentBannerWrapper");
        bannerWrapper.style.display = mainBanner ? "flex" : "none";

        var miniIcon = document.querySelector(".miniIcon");
        miniIcon.style.display = icon ? "flex" : "none";


    }

    var closeBanner = document.querySelector(".closeBanner");

    var bannerNav = document.querySelectorAll(".bannerNavWrapper .nav");
    var bannerContent = document.querySelectorAll(".bannerContentWrapper .content");
    
    var bannerCategory = document.querySelectorAll(".bannerCategory");
    var cookiesProvider = document.querySelectorAll(".allProviderWrapper");
    
    var cookiesProviderWrapper = document.querySelectorAll(".cookiesProviderWrapper");
    var categoryArrow = document.querySelectorAll(".arrowCategory")
    
    var cookieInfoHeader = document.querySelectorAll(".cookieInfoHeader");
    var allCookieInfoWrapper = document.querySelectorAll(".allCookieInfoWrapper");
    var arrowCookie = document.querySelectorAll(".arrowCookie")
    
    var bannerButton = document.querySelectorAll(".bannerButtons button");
    
    var activeNavAndContent = control.activeNavAndContent;


    var miniIcon = document.querySelector(".miniIcon");

    closeBanner.style.display = control.closeBtn ? "flex" : "none";
    
    var getSwitch = document.querySelectorAll(".consentBannerSwitch");

    if (getSwitch.length !== 0) {
        getSwitch[0].style.opacity = "0.5";
        getSwitch[0].querySelector("input").checked = true;
        getSwitch[0].querySelector("input").disabled = true;
    }
    

    bannerNav[activeNavAndContent].classList.add("navActiveBorder");
    bannerContent[activeNavAndContent].classList.add("activeFlex");
    
    closeBanner.onclick = function(){
        bannerVisibiliy(false, true);
    }

    miniIcon.onclick = function(){
        bannerVisibiliy(true, false)
    }
    
    //navigation button clicks
    bannerNav.forEach(function(element, index){
        element.onclick = function(){
    
            bannerNav.forEach(function(x){
                x.classList.remove("navActiveBorder");
            })
    
            bannerNav[index].classList.add("navActiveBorder");
    
            bannerContent.forEach(function(y){
                y.classList.remove("activeFlex");
                y.classList.add("hideElement");
            })
    
            bannerContent[index].classList.remove("hideElement");
            bannerContent[index].classList.add("activeFlex");
    
            if(index == 1){
                bannerButton[2].innerText = contentInfo.buttons[3];
                document.querySelector(".bannerButtons").classList.add("btnShadow");
                document.querySelectorAll(".bannerButtons button")[2].id = "save";

                updateInput()

            }else{
                bannerButton[2].innerText = contentInfo.buttons[2];
                document.querySelector(".bannerButtons").classList.remove("btnShadow");
                document.querySelectorAll(".bannerButtons button")[2].id = "custom";
            }
    
        }
    })
    
    //cookie category button clicks
    bannerCategory.forEach(function(category, index) {
        category.onclick = function(event) {
    
            var x = cookiesProvider[index].classList.contains("activeFlex");
    
            cookiesProvider.forEach(function(x){
                x.classList.remove("activeFlex")
            })
    
            cookiesProvider[index].classList.add("activeFlex");
            categoryArrow[index].classList.add("rotate")
    
            if (x) {
                cookiesProvider[index].classList.remove("activeFlex");
                categoryArrow[index].classList.remove("rotate")
            }
    
        };
    });
    
    //cookie provider name click
    cookiesProviderWrapper.forEach(function(providerWrapper) {
        providerWrapper.onclick = function(event) {
            event.stopPropagation();
        };
    });
    
    //click on the cookie name
    cookieInfoHeader.forEach(function(cookieInfo, index){
        cookieInfo.onclick = function(){
    
            var b = allCookieInfoWrapper[index].classList.contains("activeFlex")
    
            allCookieInfoWrapper.forEach(function(cookie){
                cookie.classList.remove("activeFlex");
            })
    
            allCookieInfoWrapper[index].classList.add("activeFlex");
            arrowCookie[index].classList.add("rotate");
    
            if(b){
                allCookieInfoWrapper[index].classList.remove("activeFlex");
                arrowCookie[index].classList.remove("rotate");
            }
        }
    })
    
    //banner buttons click
    bannerButton.forEach(function(element, index){
        element.onclick = function(button){

            var allInputs = document.querySelectorAll(".consentBannerSwitch input")
    
            if(index == 0){

                //allowCookies()

                Object.keys(consent).forEach(function(c){
                    consent[c] = "granted"
                })

                gtag('consent', 'update', consent);
                dataLayerPush("consent_update");

                localStorage.setItem("bannerChoice", JSON.stringify(consent));

                allInputs.forEach(function(input){
                    input.checked = true;
                })

               // addBlurAndLoader(true)

                setTimeout(function(){
                    bannerVisibiliy(false, true);
                   // addBlurAndLoader(false)
                }, control.clickLoaderDelay)

                


            }else if(index == 1){

                //allowCookies()

                Object.keys(consent).forEach(function(c, index){
                    if(index != 7){
                        consent[c] = "denied";
                    }
                   
                })

                gtag('consent', 'update', consent);
                dataLayerPush("consent_update");

                localStorage.setItem("bannerChoice", JSON.stringify(consent));

                allInputs.forEach(function(input, index){
                    if(index != 0){
                        input.checked = false;
                    }
                    
                })

               // addBlurAndLoader(true)

                setTimeout(function(){
                    bannerVisibiliy(false, true);
                    //addBlurAndLoader(false)
                }, control.clickLoaderDelay)

            }else if(index == 2){
    
                if(element.id == "custom"){
                    bannerNav.forEach(function(x){
                        x.classList.remove("navActiveBorder");
                    })
    
                    bannerNav[1].classList.add("navActiveBorder");
    
                    bannerContent.forEach(function(x){
                        x.classList.remove("activeFlex");
                        x.classList.add("hideElement")
                    });
    
                    bannerContent[1].classList.remove("hideElement");
                    bannerContent[1].classList.add("activeFlex");
    
                    bannerButton[2].innerText = contentInfo.buttons[3];
                    element.id = "save"
                    document.querySelector(".bannerButtons").classList.add("btnShadow");

                    updateInput();
    
                }else if(element.id == "save"){

                   // allowCookies()

                    allInputs.forEach(function(input, index){

                        if(index == 0){
                            consent.security_storage = input.checked ? "granted" : "denied";
                            consent.functionality_storage = input.checked ? "granted" : "denied"
                        }else if(index == 1){
                            consent.personalization_storage = input.checked ? "granted" : "denied"
                        }else if(index == 2){
                            consent.analytics_storage = input.checked ? "granted" : "denied"
                        }else if(index == 3){
                            consent.ad_user_data = input.checked ? "granted" : "denied"
                            consent.ad_personalization = input.checked ? "granted" : "denied"
                            consent.ad_storage = input.checked ? "granted" : "denied"
                        }else if(index == 4){
                            consent.unclassified_storage = input.checked ? "granted" : "denied"
                        }
                        
                    })

                    localStorage.setItem("bannerChoice", JSON.stringify(consent));

                    gtag('consent', 'update', consent);
                    dataLayerPush("consent_update");

                    bannerVisibiliy(false, true);
                }
    
            } 
        }
    })
    
} 

function createMainElements(){
    var mainElements = `
    <div class="consentBannerWrapper">

    <div class="bannerHeader">
        <div class="bannerLogo"></div>
        <div class="closeBanner">
            <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-568.000000, -1087.000000)" fill="#000000"> <path d="M584,1117 C576.268,1117 570,1110.73 570,1103 C570,1095.27 576.268,1089 584,1089 C591.732,1089 598,1095.27 598,1103 C598,1110.73 591.732,1117 584,1117 L584,1117 Z M584,1087 C575.163,1087 568,1094.16 568,1103 C568,1111.84 575.163,1119 584,1119 C592.837,1119 600,1111.84 600,1103 C600,1094.16 592.837,1087 584,1087 L584,1087 Z M589.717,1097.28 C589.323,1096.89 588.686,1096.89 588.292,1097.28 L583.994,1101.58 L579.758,1097.34 C579.367,1096.95 578.733,1096.95 578.344,1097.34 C577.953,1097.73 577.953,1098.37 578.344,1098.76 L582.58,1102.99 L578.314,1107.26 C577.921,1107.65 577.921,1108.29 578.314,1108.69 C578.708,1109.08 579.346,1109.08 579.74,1108.69 L584.006,1104.42 L588.242,1108.66 C588.633,1109.05 589.267,1109.05 589.657,1108.66 C590.048,1108.27 590.048,1107.63 589.657,1107.24 L585.42,1103.01 L589.717,1098.71 C590.11,1098.31 590.11,1097.68 589.717,1097.28 L589.717,1097.28 Z" id="cross-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
        </div>
    </div>

    <div class="bannerNavWrapper bannerHeadline">
        <div class="nav"></div>
        <div class="nav"></div>
        <div class="nav"></div>
    </div>

    <div class="bannerContentWrapper bannerDescription">
        <div class="content"></div>
        <div class="content cookieContentWrapper">
            
        </div>
        <div class="content"></div>
    </div>


    <div class="bannerButtons">
        <button class="btnActive"></button>
        <button></button>
        <button id="custom"></button>
    </div>

    <div class="divLoader">
        
    </div>
</div>

<div class="miniIcon">
    <svg width="50px" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3.003-2.938.005-.034.016-.134.017-.168a.998.998 0 0 0-1.254-1.006A3.002 3.002 0 0 1 15 7c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1 1 0 0 0-1.067-1.236A9.956 9.956 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.049-.003-.097-.007-.16a1.004 1.004 0 0 0-.395-.776zM8.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-2 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.5-6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></g></svg>
</div>

    `

document.body.innerHTML += mainElements;
}

function createElement() {
    var getCookieContentSection = document.querySelector(".cookieContentWrapper");

    var code = '';

    Object.keys(cookieInfo).forEach(function (category, categoryNumber) {

        var categoryName = contentInfo.categoryText[categoryNumber];
        var categoryDescription = contentInfo.categoryDescription[categoryNumber];
        var getProviders = cookieInfo[category];

        var totalCookiesInCategory = Object.keys(getProviders).reduce((sum, provider) => {
            return sum + getProviders[provider].length;
        }, 0);

        code += `
        <div class="bannerCategory">
            <div class="categoryHeaderWrapper">
                <div class="categoryName bannerHeadline">
                    <svg class="arrow arrowCategory" width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z" fill="#292D32"></path> </g></svg>
                    <span class="categoryTitle">${categoryName}</span>
                    <span class="cookieTotal">${totalCookiesInCategory}</span>
                </div>
                <div class="categoryToggle">
                    <label class="consentBannerSwitch">
                        <input type="checkbox" checked>
                        <span class="consentSlider round"></span>
                    </label>
                </div>
            </div>

            <div class="categoryDescription bannerDescription">
                ${categoryDescription}
            </div>
        `;

        if (totalCookiesInCategory === 0) {
            code += `
            <div class="allProviderWrapper">
                <div class="noCookie">${contentInfo.noCookieText}</div>
            </div>
            `;
        } else {
            code += `<div class="allProviderWrapper">`;

            Object.keys(getProviders).forEach(function (providerName) {
                var providerCookies = getProviders[providerName];
                var totalProviderCookies = providerCookies.length;

                code += `
                    <div class="cookiesProviderWrapper">
                        <div class="cookieInfoHeader bannerHeadline">
                            <div class="providerName">
                                ${providerName}
                                <span class="cookieTotal">${totalProviderCookies}</span>
                            </div>
                            <svg class="arrow arrowCookie" width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z" fill="#292D32"></path> </g></svg>
                        </div>

                        <div class="learnMoreWrapper bannerDescription">
                            <a href="${providerCookies[0].privacy_rights_portals}" target="_blank">Learn more about this provider</a>
                        </div>

                        <div class="allCookieInfoWrapper">
                `;

                providerCookies.forEach(function (cookie) {
                    code += `
                        <div class="cookieInfoWrapper bannerDescription">
                            <div class="cookiePath">${cookie.data_key}</div>
                            <div class="cookieDetails">${cookie.description}</div>
                            <div class="cookieBorder"></div>
                            <div class="cookieOtherInfo">
                                <span>Retention: ${cookie.retention_period}</span>
                                <span>Domain: ${cookie.domain || window.location.host}</span>
                                <span>Controller: ${cookie.data_controller}</span>
                            </div>
                        </div>
                    `;
                });

                code += `</div>`; // Close allCookieInfoWrapper
                code += `</div>`; // Close cookiesProviderWrapper
            });

            code += `</div>`; // Close allProviderWrapper
        }

        code += `</div>`; // Close bannerCategory
    });

    getCookieContentSection.innerHTML += code;
}


function showBanner(){
    window.addEventListener('load', function(){
        createMainElements();
        replaceAndControll();
    })
}

getCookieData();
