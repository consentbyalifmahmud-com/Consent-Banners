// Variablen zu Texten und URLs
var websitePrivacyPage = "https://www.metricsrealm.com/privacy-policy/";
var unknownCookieText = ["Unbekannt", "Diese Cookie-Informationen sind unbekannt"];

// categoryKey für die deutsche Version
var categoryText = ["Notwendig", "Präferenzen", "Statistiken", "Marketing", "Nicht klassifiziert"];

var learnMoreText = "Erfahren Sie mehr über den Anbieter";

var topSectionText = ["Zustimmung", "Details", "Über"];

var firstSectionText = "Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien bereitzustellen und unseren Datenverkehr zu analysieren. Wir teilen auch Informationen über Ihre Nutzung unserer Website mit unseren Partnern für soziale Medien, Werbung und Analysen, die diese mit anderen Informationen kombinieren können, die Sie ihnen zur Verfügung gestellt haben oder die sie im Rahmen Ihrer Nutzung ihrer Dienste gesammelt haben.";
var thirdSectionText = "Cookies sind kleine Textdateien, die von Websites verwendet werden, um die Benutzererfahrung zu verbessern. Laut Gesetz dürfen wir Cookies auf Ihrem Gerät speichern, wenn diese für den Betrieb dieser Website unbedingt erforderlich sind. Für alle anderen Arten von Cookies benötigen wir Ihre Erlaubnis. Das bedeutet, dass Cookies, die als notwendig klassifiziert sind, gemäß Artikel 6(1)(f) der DSGVO verwaltet werden. Alle anderen Cookies, wie diejenigen in den Kategorien Präferenzen und Marketing, werden gemäß Artikel 6(1)(a) der DSGVO verwaltet. Diese Website verwendet verschiedene Arten von Cookies. Einige Cookies werden von Drittanbieterdiensten gesetzt, die auf unseren Seiten erscheinen.";

var bannerButtonsTexts = ["Akzeptieren", "Ablehnen", "Anpassen", "Speichern"];

var categoryDescriptionsText = {
    Necessary: {
        description: "Notwendige Cookies machen die Website nutzbar, indem sie grundlegende Funktionen wie Seitennavigation und den Zugriff auf sichere Bereiche der Website ermöglichen. Ohne diese Cookies kann die Website nicht richtig funktionieren.",
    },
    Preferences: {
        description: "Präferenz-Cookies ermöglichen es einer Website, Informationen zu speichern, die das Verhalten oder Aussehen der Website ändern.",
    },
    Statistics: {
        description: "Statistik-Cookies helfen Websitebetreibern zu verstehen, wie Besucher mit Websites interagieren, indem sie Informationen anonym sammeln und melden.",
    },
    Marketing: {
        description: "Marketing-Cookies werden verwendet, um Besucher über Websites hinweg zu verfolgen. Ziel ist es, Anzeigen anzuzeigen, die für den einzelnen Benutzer relevant und ansprechend sind.",
    },
    Unclassified: {
        description: "Nicht klassifizierte Cookies sind Cookies, die wir derzeit zusammen mit den Anbietern einzelner Cookies klassifizieren.",
    },
};


var cookieInfoText = ["Ablauf", "Domain", "Verantwortlicher"];
var noCookieText = "Kein Cookie zum Anzeigen";

var websiteLogo = "https://dinnerinthesky.at/wp-content/uploads/2023/03/ditsviennawhite-1024x230.png";
var logoWidth = "70px"

var darkModeEnable = true;
var darkModeDefault = localStorage.getItem("viewMode") ? localStorage.getItem("viewMode") : "dark";
var showIconOfModes = true;

var bannerShowingDelayed = 0;

var linkArrowSvgWidth = "15px"
var linkArrowSvg = ``

const root = document.querySelector(':root');
var rootStyle = getComputedStyle(root);


var lightModeRoots = {

        cookieHeadlineFontSize: rootStyle.getPropertyValue("--cookieHeadlineFontSize"),
        cookieHeadlineFontWeight: rootStyle.getPropertyValue("--cookieHeadlineFontWeight"),
    
        cookieDescriptionFontSize: rootStyle.getPropertyValue("--cookieDescriptionFontSize"),
        cookieDescriptionFontWeight: rootStyle.getPropertyValue("--cookieDescriptionFontWeight"),
        cookieDescriptionLineHeight: rootStyle.getPropertyValue("--cookieDescriptionLineHeight"),
    
        cookieTotalFontSize: rootStyle.getPropertyValue("--cookieTotalFontSize"),
    
        bannerFont: rootStyle.getPropertyValue("--bannerFont"),
    
        cookieHeadlineColor: rootStyle.getPropertyValue("--cookieHeadlineColor"),
        cookieDescriptionColor: rootStyle.getPropertyValue("--cookieDescriptionColor"),
        bannerAccentColor: rootStyle.getPropertyValue("--bannerAccentColor"),
        bannerColorWhite: rootStyle.getPropertyValue("--bannerColorWhite"),
    
        mainCookieBgColor: rootStyle.getPropertyValue("--mainCookieBgColor"),
        InsideBorderColor: rootStyle.getPropertyValue("--InsideBorderColor"),
    
        noCookieFontSize: rootStyle.getPropertyValue("--noCookieFontSize"),

        cookieValueWeight: rootStyle.getPropertyValue("--cookieValueWeight"),

        normalButtonColor: rootStyle.getPropertyPriority("--normalButtonColor"),
        activeButtonHoveColor: rootStyle.getPropertyValue("--activeButtonHoveColor"),
    
}


var darkModeRoots = {

    cookieHeadlineFontSize: rootStyle.getPropertyValue("--cookieHeadlineFontSize"),
    cookieHeadlineFontWeight: rootStyle.getPropertyValue("--cookieHeadlineFontWeight"),

    cookieDescriptionFontSize: rootStyle.getPropertyValue("--cookieDescriptionFontSize"),
    cookieDescriptionFontWeight: rootStyle.getPropertyValue("--cookieDescriptionFontWeight"),
    cookieDescriptionLineHeight: rootStyle.getPropertyValue("--cookieDescriptionLineHeight"),

    cookieTotalFontSize: rootStyle.getPropertyValue("--cookieTotalFontSize"),

    bannerFont: rootStyle.getPropertyValue("--bannerFont"),

    cookieHeadlineColor: "white",
    cookieDescriptionColor: "white",
    bannerAccentColor: rootStyle.getPropertyValue("--bannerAccentColor"),
    bannerColorWhite: "#181C14",
    mainCookieBgColor: "#3C3D37",
    InsideBorderColor: rootStyle.getPropertyValue("--InsideBorderColor"),

    noCookieFontSize: rootStyle.getPropertyValue("--noCookieFontSize"),
    cookieValueWeight: rootStyle.getPropertyValue("--cookieValueWeight"),

    normalButtonColor: "white",
    activeButtonHoveColor: "white",

}



window.dataLayer = window.dataLayer || [];

function gtag(){
    dataLayer.push(arguments);
}

function getTheContinentInfo(){
    // Comprehensive list of countries categorized by continent
    const countriesByContinent = {
        Asia: [
            "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", 
            "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", 
            "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", 
            "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Palestine", "Philippines", 
            "Qatar", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", 
            "Thailand", "Timor-Leste", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", 
            "Vietnam", "Yemen"
        ],
        Europe: [
            "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina", 
            "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", 
            "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kazakhstan", 
            "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", 
            "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", 
            "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", 
            "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"
        ],
        Africa: [
            "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", 
            "Central African Republic", "Chad", "Comoros", "Congo (Congo-Brazzaville)", "Democratic Republic of the Congo", 
            "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini (fmr. Swaziland)", "Ethiopia", "Gabon", 
            "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", 
            "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", 
            "Niger", "Nigeria", "Rwanda", "São Tomé and Príncipe", "Senegal", "Seychelles", "Sierra Leone", 
            "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", 
            "Zambia", "Zimbabwe"
        ],
        NorthAmerica: [
            "Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", 
            "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", 
            "Jamaica", "Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", 
            "Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States"
        ],
        SouthAmerica: [
            "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", 
            "Peru", "Suriname", "Uruguay", "Venezuela"
        ],
        Australia: [
            "Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia", "Nauru", "New Zealand", 
            "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu"
        ],
        Antarctica: ["Antarctica"] // Very few countries have territorial claims here
    };

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    //console.log("Your time zone is:", timeZone);

    function getContinentByTimeZone(timeZone) {
        if (timeZone.includes("Asia")) return "Asia";
        if (timeZone.includes("Europe")) return "Europe";
        if (timeZone.includes("Africa")) return "Africa";
        if (timeZone.includes("America")) return "NorthAmerica";
        if (timeZone.includes("Pacific")) return "Australia";
        if (timeZone.includes("Antarctica")) return "Antarctica";
        return "Unknown";
    }

    const continent = getContinentByTimeZone(timeZone);
    //console.log(`Based on your time zone, you are in ${continent}.`);

    checkContinent(continent);

    //console.log(continent)
}


var enabledContinent = ["Asia", "Europe", "Africa" , "NorthAmerica", "Australia", "Antarctica", "Unknown"];

var consentValue = ["granted", "denied"];

var consent = {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    unclassified_storage:  'denied',
}

gtag('consent', 'default', consent);

var getBannerChoice = JSON.parse(localStorage.getItem("bannerChoice"));

var continentMatch;

function checkContinent(userContinent){

    enabledContinent.forEach(function(element){
    
        if(element == userContinent){
            continentMatch = true
        }
    
    })
}

function pushDataLayer(consent, event){
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
        event: event,
        consent: consent,
        setupBy: "https://www.fiverr.com/analyticsbyte"
    })
}

function updateConsent(){
    if(continentMatch == true){

        if(getBannerChoice){
    
            consent.functionality_storage = getBannerChoice.Preferences;
            consent.personalization_storage = getBannerChoice.Preferences;
            consent.analytics_storage = getBannerChoice.Statistics;
            consent.ad_storage = getBannerChoice.Marketing;
            consent.ad_user_data = getBannerChoice.Marketing;
            consent.ad_personalization = getBannerChoice.Marketing;
            consent.unclassified_storage = getBannerChoice.Unclassified;
        
            gtag('consent', 'update', consent);
            pushDataLayer(consent, "page_view_consent");
    
        }else if(!getBannerChoice){
            gtag('consent', 'update', consent);
            pushDataLayer(consent, "page_view_consent");
        }
    
        localStorage.setItem("sb", true);
    
    }else{
        if(getBannerChoice){
            consent.functionality_storage = getBannerChoice.Preferences;
            consent.personalization_storage = getBannerChoice.Preferences;
            consent.analytics_storage = getBannerChoice.Statistics;
            consent.ad_storage = getBannerChoice.Marketing;
            consent.ad_user_data = getBannerChoice.Marketing;
            consent.ad_personalization = getBannerChoice.Marketing;
            consent.unclassified_storage = getBannerChoice.Unclassified;
    
            gtag('consent', 'update', consent);
    
        }else if(!getBannerChoice){
            Object.keys(consent).forEach(function(element){
                consent[element] = consentValue[0]
            })
    
            gtag('consent', 'update', consent);
        }
    
        localStorage.setItem("sb", false);
    }
}

getTheContinentInfo();
checkContinent();
updateConsent();

window.addEventListener("load", function(){

    var manualCookie = [];

    var cookieCategories = {};

    var checkedCategories = {
        Necessary: "denied",
        Preferences: "denied",
        Statistics: "denied",
        Marketing: "denied",
        Unclassified: "denied",
    }

    async function fetchCookies() {
        const response = await fetch('https://cdn.jsdelivr.net/gh/consentbyalifmahmud-com/Consent-Banners@7f0cf88062efb8fdd993eff5167c80f73dc72444/metricsrealm.com/cookie.json');
        return response.json();
    }

    var websiteCookie = document.cookie.split(";");
    var websiteCookiePaths = [];
    
    var justifyCookies = [
        {
            dataKey_name: "_ga_",
            dataKey_value: "_ga_*"
        },
        {
            dataKey_name: "wp-settings-time-1",
            dataKey_value: "wp-settings-time-"
        }
    ];
    
    websiteCookie.forEach((cookie) => {
        let dataKey = cookie.split("=")[0].trim();
        
        // Check if dataKey is not empty
        if (dataKey) {
            // Check if there's a match in manualCookie
            let isManualCookiePresent = manualCookie.some(manual => dataKey === manual.data_key);
            
            if (!isManualCookiePresent) {
                let justifiedValue = justifyCookies.find(justify => dataKey.includes(justify.dataKey_name))?.dataKey_value || dataKey;
                if (!websiteCookiePaths.includes(justifiedValue)) {
                    websiteCookiePaths.push(justifiedValue);
                }
            }
        }
    });
    
    


    async function processCookies() {

        var sendCookies;

        try {
            const jsonCookies = await fetchCookies();
            let matchedCookies = [];

            jsonCookies.forEach((jsonCookie) => {
                if (websiteCookiePaths.includes(jsonCookie.data_key)) {
                    matchedCookies.push(jsonCookie);
                }
                
            });

            //console.log(websiteCookiePaths);


             websiteCookiePaths.forEach(function(maincookie){

                let isMatched = false;
            
                matchedCookies.forEach(function(isMatchedCookie){
                    if(maincookie === isMatchedCookie.data_key){
                        isMatched = true;
                    }
                });
            
                if(!isMatched){
                    var generateCookieInfo = {
                        "id": Math.floor(Math.random() * 5),
                        "platform": unknownCookieText[0],
                        "category": "Unclassified",
                        "data_key": maincookie,
                        "domain": window.location.host,
                        "description": unknownCookieText[1],
                        "retention_period": "",
                        "data_controller": unknownCookieText[0],
                        "privacy_rights_portals": websitePrivacyPage,
                        "wildcard_match": 0
                    };
                    matchedCookies.push(generateCookieInfo);
                }
            });
            



            /*
            //modify the something if need
             matchedCookies.forEach(function(cookie, index){
                
                if(cookie.data_key == "_ga"){
                    matchedCookies[index].description = "hello"
                }

            }) */

            matchedCookies.push(...manualCookie);
            sendCookies = matchedCookies;

            console.log(matchedCookies)

        } catch (error) {
            console.error("Error fetching or processing cookies:", error);
        }

        categoriesCookies(sendCookies);
        restCodes()
    }


    function categoriesCookies(sendCookies){

        var tempCategories = {
            Necessary: {
                totalCookies: 0,
                description: categoryDescriptionsText.Necessary.description,
                allProviders: {},
            },
            Preferences: {
                totalCookies: 0,
                description: categoryDescriptionsText.Preferences.description,
                allProviders: {},
            },
            Statistics: {
                totalCookies: 0,
                description: categoryDescriptionsText.Statistics.description,
                allProviders: {},
            },
            Marketing: {
                totalCookies: 0,
                description: categoryDescriptionsText.Marketing.description,
                allProviders: {},
            },
            Unclassified: {
                totalCookies: 0,
                description: categoryDescriptionsText.Unclassified.description,
                allProviders: {},
            },
        };
        

        sendCookies.forEach(function(sendCookies, index){
            if(sendCookies.category == "Functional" || sendCookies.category == "Necessary"){
                if(!tempCategories.Necessary.allProviders[sendCookies.data_controller]){
                    tempCategories.Necessary.allProviders[sendCookies.data_controller] = [];
                }
                tempCategories.Necessary.allProviders[sendCookies.data_controller].push(sendCookies);
                tempCategories.Necessary.totalCookies += 1
            }else if(sendCookies.category == "Preferences"){
                if(!tempCategories.Preferences.allProviders[sendCookies.data_controller]){
                    tempCategories.Preferences.allProviders[sendCookies.data_controller] = [];
                }
                tempCategories.Preferences.allProviders[sendCookies.data_controller].push(sendCookies);
                tempCategories.Preferences.totalCookies += 1
            }else if(sendCookies.category == "Analytics" || sendCookies.category == "Statistics"){
                if(!tempCategories.Statistics.allProviders[sendCookies.data_controller]){
                    tempCategories.Statistics.allProviders[sendCookies.data_controller] = [];
                }
                tempCategories.Statistics.allProviders[sendCookies.data_controller].push(sendCookies);
                tempCategories.Statistics.totalCookies += 1
            }else if(sendCookies.category == "Marketing"){
                if(!tempCategories.Marketing.allProviders[sendCookies.data_controller]){
                    tempCategories.Marketing.allProviders[sendCookies.data_controller] = [];
                }
                tempCategories.Marketing.allProviders[sendCookies.data_controller].push(sendCookies);
                tempCategories.Marketing.totalCookies += 1
            }else{
                if(!tempCategories.Unclassified.allProviders[sendCookies.data_controller]){
                    tempCategories.Unclassified.allProviders[sendCookies.data_controller] = [];
                }
                tempCategories.Unclassified.allProviders[sendCookies.data_controller].push(sendCookies);
                tempCategories.Unclassified.totalCookies += 1
            }
        });


        cookieCategories = tempCategories;
        createMainElements();
    }

    function createMainElements(){

        var createWrapper = document.createElement("div");
        createWrapper.classList.add("cookieBannerWrapper");

        var createMiniIcon = document.createElement("div");
        createMiniIcon.classList.add("miniCookieIcon");

        createWrapper.innerHTML = `
                    
                    <div class="bannerLoader"></div>

                    <!-- banner logo -->
                        <div class="bannerHeadlineLogo">
                            <img width=${logoWidth} src=${websiteLogo}>
                        
                            <div id="light" class="darkModeWrapper">
                                
                            </div>
                            
                        </div>
                
                        <!-- banner nav bar -->
                        <div class="bannerSectionHeadlineWrapper">
                            <div class="bannerSectionHeadline cookieHeadline activeHeadlineBorder"></div>
                            <div class="bannerSectionHeadline cookieHeadline"></div>
                            <div class="bannerSectionHeadline cookieHeadline"></div>
                        </div>
                
                        <!-- banner middle sections -->
                        <div class="bannerMiddleSectionWrapper">
                
                            <!-- banner details - consent nav -->
                            <div class="bannerContent bannerContentActive cookieDescription"></div>
                        
                
                            <!-- banner details - details nav -->
                            <div class="bannerContent cookieInfoSection">
                
                                <!-- cookie all category section wrapper -->
                                <div class="cookieSectionWrapper"> 
                                </div>
                
                            </div>
                
                
                            <!-- banner details - about nav -->
                            <div class="bannerContent cookieDescription"></div>
                        </div>
                
                        <div class="bannerBottomSectionWrapper">
                            <button id="consentAccept" class="active consentAccept"></button>
                            <button id="consentReject" class="consentReject"></button>
                            <button id="consentCustom" class="consentCustom"></button>
                        </div>
        `

        createMiniIcon.innerHTML = `
        <svg width="50px" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3.003-2.938.005-.034.016-.134.017-.168a.998.998 0 0 0-1.254-1.006A3.002 3.002 0 0 1 15 7c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1 1 0 0 0-1.067-1.236A9.956 9.956 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.049-.003-.097-.007-.16a1.004 1.004 0 0 0-.395-.776zM8.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-2 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.5-6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></g></svg>
        `

        document.body.appendChild(createWrapper);
        document.body.appendChild(createMiniIcon);

        createCategoryElements()
    }

    function createCategoryElements(){
        const container = document.querySelector('.cookieSectionWrapper'); // Select the container

        // Iterate through each category and build the HTML
        Object.keys(cookieCategories).forEach((categoryKey, index) => {

            const category = cookieCategories[categoryKey];
            
            // Calculate the total number of cookies dynamically
            let totalCookies = 0;
            Object.keys(category.allProviders).forEach((providerName) => {
                totalCookies += category.allProviders[providerName].length;
            });

            let categoryHTML = `
                <div class="cookieCategoryWrapper">
                    <div class="cookieCategoryTitle">
                        <div class="cookieCategoryTitleLeft">
                            <svg class="arrowDown" width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z" fill="#292D32"></path> </g></svg>
                            <span class="cookieHeadline categoryTitle">${categoryText[index]}</span>
                            <span class="cookieHeadline cookietotal">${totalCookies}</span>
                        </div>
                        <div class="cookieCategoryTitleRight">
                        <label class="switch">
                            <input class="bannerCheckBox" type="checkbox">
                            <span class="slider round"></span>
                        </label>
                        </div>
                    </div>
                    <div class="cookieCategoryDescriptions cookieDescription">${category.description}</div>
                    <div class="allCookiesOuter ${totalCookies === 0 ? '' : 'displayNone'}">`;


                    //console.log(categoryKey)

            // If there are no cookies in this category, display the message
            if (totalCookies === 0) {
                categoryHTML += `
                    <div class="NoCookieWarning mainCookieWrapper">
                        <span class="cookieHeadline">${noCookieText}</span>
                    </div>`;
            } else {
                // Iterate through each provider in the category
                Object.keys(category.allProviders).forEach((providerName) => {
                    const providerCookies = category.allProviders[providerName];

                    categoryHTML += `
                        <div class="allCookiesWrapper">
                            <div class="allCookieWrapperTitle">
                                <div class="allCookieTitleLeft">
                                    <span class="cookieHeadline">${providerName}</span>
                                    <span class="cookieHeadline cookietotal">${providerCookies.length}</span>
                                </div>
                                <div class="allCookieTitleRight">
                                    <svg class="arrowDown" width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z" fill="#292D32"></path> </g></svg>
                                </div>
                            </div>
                            <div class="cookieProviderLearnMore">
                                <a target="_blank" href="${providerCookies[0].privacy_rights_portals}" class="cookieHeadline">${learnMoreText}</a>
                                ${linkArrowSvg}
                            </div>`;

                    // Iterate through each cookie in the provider
                    providerCookies.forEach((cookie) => {
                        categoryHTML += `
                            <div class="mainCookiesDetails displayNone">
                                <div class="mainCookieWrapper">
                                    <span class="mainCookieName cookieHeadline">${cookie.data_key}</span>
                                    <span class="mainCookieDescription">${cookie.description}</span>
                                    <div class="bannerhr"></div>
                                    <span class="cookieHeadline">${cookieInfoText[0]}: <span class="cookieValue">${cookie.retention_period}</span></span>
                                    <span class="cookieHeadline">${cookieInfoText[1]}: <span class="cookieValue">${cookie.domain ? cookie.domain : window.location.host}</span></span>
                                    <span class="cookieHeadline">${cookieInfoText[2]}: <span class="cookieValue">${cookie.data_controller}</span></span>
                                </div>
                            </div>`;
                    });

                    categoryHTML += `</div>`; // Close the allCookiesWrapper div
                });
            }

            categoryHTML += `</div></div></div>`; // Close the allCookieDetails and outer divs
            container.innerHTML += categoryHTML; // Append to the container
        });
    }

    function restCodes(){

        /* ---- declare the variables ---- */
        //main banner wrapper
        var banner = document.querySelector(".cookieBannerWrapper");

        //mini cookie icon
        var miniIcon = document.querySelector(".miniCookieIcon");

        //category headline and provider
        var cookieCategoriesTitle = document.querySelectorAll(".cookieCategoryTitleLeft");
        var allCookieDetails = document.querySelectorAll(".allCookiesOuter");

        //pro
        var allCookieWrapperTitle = document.querySelectorAll(".allCookieWrapperTitle");
        var allCookieWrapper = document.querySelectorAll(".allCookiesWrapper");

        //banner checkbox
        var bannerCheckBox = document.querySelectorAll(".bannerCheckBox");

        //banner bottom buttons and text
        var bannerButtons = document.querySelectorAll(".bannerBottomSectionWrapper button");
        

        //banner loader
        var bannerLoader = document.querySelector(".bannerLoader")
        var loadingTime = 300;



        function darkMode(){

            localStorage.setItem("viewMode", darkModeDefault);

            var lightSvg = `<svg width="20px" fill="#000000" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>light</title> <path d="M11.875 6v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.813 0.375-1.219 1.156-1.219s1.156 0.406 1.156 1.219zM14.219 9.25l1.438-2.031c0.469-0.625 1.063-0.75 1.656-0.313s0.656 1 0.188 1.688l-1.438 2c-0.469 0.688-1.031 0.75-1.656 0.313-0.594-0.438-0.656-0.969-0.188-1.656zM5.781 7.25l1.469 2c0.469 0.688 0.406 1.219-0.219 1.656-0.594 0.469-1.156 0.375-1.625-0.313l-1.469-2c-0.469-0.688-0.406-1.219 0.219-1.656 0.594-0.469 1.156-0.375 1.625 0.313zM10.719 11.125c2.688 0 4.875 2.188 4.875 4.875 0 2.656-2.188 4.813-4.875 4.813s-4.875-2.156-4.875-4.813c0-2.688 2.188-4.875 4.875-4.875zM1.594 11.813l2.375 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.75 0.969-1.563 0.719l-2.313-0.75c-0.781-0.25-1.063-0.75-0.844-1.5 0.25-0.719 0.75-0.938 1.531-0.688zM17.5 12.563l2.344-0.75c0.813-0.25 1.313-0.031 1.531 0.688 0.25 0.75-0.031 1.25-0.844 1.469l-2.313 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.031-1.219 0.813-1.469zM10.719 18.688c1.5 0 2.719-1.219 2.719-2.688 0-1.5-1.219-2.719-2.719-2.719s-2.688 1.219-2.688 2.719c0 1.469 1.188 2.688 2.688 2.688zM0.906 17.969l2.344-0.75c0.781-0.25 1.313-0.063 1.531 0.688 0.25 0.75-0.031 1.219-0.813 1.469l-2.375 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.063-1.219 0.844-1.469zM18.219 17.219l2.344 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.719 0.969-1.531 0.719l-2.344-0.781c-0.813-0.25-1.031-0.719-0.813-1.469 0.25-0.75 0.75-0.938 1.531-0.688zM3.938 23.344l1.469-1.969c0.469-0.688 1.031-0.781 1.625-0.313 0.625 0.438 0.688 0.969 0.219 1.656l-1.469 1.969c-0.469 0.688-1.031 0.813-1.656 0.375-0.594-0.438-0.656-1.031-0.188-1.719zM16.063 21.375l1.438 1.969c0.469 0.688 0.406 1.281-0.188 1.719s-1.188 0.281-1.656-0.344l-1.438-2c-0.469-0.688-0.406-1.219 0.188-1.656 0.625-0.438 1.188-0.375 1.656 0.313zM11.875 23.469v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.844 0.375-1.25 1.156-1.25s1.156 0.406 1.156 1.25z"></path> </g></svg>`
            var darkSvg = `<svg width="20px" class="bannerDarkMode" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" stroke="#1C274C"></path> <path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" stroke="#1C274C"></path> <path d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM7.37554 20.013C7.017 19.8056 6.5582 19.9281 6.3508 20.2866C6.14339 20.6452 6.26591 21.104 6.62446 21.3114L7.37554 20.013ZM2.68862 17.3755C2.89602 17.7341 3.35482 17.8566 3.71337 17.6492C4.07191 17.4418 4.19443 16.983 3.98703 16.6245L2.68862 17.3755ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447ZM12 21.25C10.3139 21.25 8.73533 20.7996 7.37554 20.013L6.62446 21.3114C8.2064 22.2265 10.0432 22.75 12 22.75V21.25ZM3.98703 16.6245C3.20043 15.2647 2.75 13.6861 2.75 12H1.25C1.25 13.9568 1.77351 15.7936 2.68862 17.3755L3.98703 16.6245Z" fill="#1C274C"></path> </g></svg>`

            var getDarkModeIcon = document.querySelector(".darkModeWrapper");

            function dark(){
                // Change a CSS variable
/*                 root.style.setProperty('--cookieHeadlineFontSize', darkModeRoots.cookieHeadlineFontSize);
                root.style.setProperty('--cookieHeadlineFontWeight', darkModeRoots.cookieHeadlineFontWeight);
                
                root.style.setProperty('--cookieDescriptionFontSize', darkModeRoots.cookieDescriptionFontSize);
                root.style.setProperty('--cookieDescriptionFontWeight', darkModeRoots.cookieDescriptionFontWeight);
                root.style.setProperty('--cookieDescriptionLineHeight', darkModeRoots.cookieDescriptionLineHeight);
                
                root.style.setProperty('--cookieTotalFontSize', darkModeRoots.cookieTotalFontSize);
                
                root.style.setProperty('--bannerFont', darkModeRoots.bannerFont);
                root.style.setProperty('--noCookieFontSize', darkModeRoots.noCookieFontSize); */
                
                root.style.setProperty('--cookieHeadlineColor', darkModeRoots.cookieHeadlineColor);
                root.style.setProperty('--cookieDescriptionColor', darkModeRoots.cookieDescriptionColor);
                
                root.style.setProperty('--bannerAccentColor', darkModeRoots.bannerAccentColor);
                root.style.setProperty('--bannerColorWhite', darkModeRoots.bannerColorWhite);
                root.style.setProperty('--mainCookieBgColor', darkModeRoots.mainCookieBgColor);
                root.style.setProperty('--InsideBorderColor', darkModeRoots.InsideBorderColor);

                root.style.setProperty('--cookieValueWeight', darkModeRoots.cookieValueWeight);
                root.style.setProperty('--normalButtonColor', darkModeRoots.normalButtonColor);
                root.style.setProperty('--activeButtonHoveColor', darkModeRoots.activeButtonHoveColor);

                localStorage.setItem("viewMode", "dark");
                getDarkModeIcon.id = "dark";
                getDarkModeIcon.innerHTML = lightSvg
            }

            function light(){
                // Change a CSS variable
/*                 root.style.setProperty('--cookieHeadlineFontSize', lightModeRoots.cookieHeadlineFontSize);
                root.style.setProperty('--cookieHeadlineFontWeight', lightModeRoots.cookieHeadlineFontWeight);
                
                root.style.setProperty('--cookieDescriptionFontSize', lightModeRoots.cookieDescriptionFontSize);
                root.style.setProperty('--cookieDescriptionFontWeight', lightModeRoots.cookieDescriptionFontWeight);
                root.style.setProperty('--cookieDescriptionLineHeight', lightModeRoots.cookieDescriptionLineHeight);
                
                root.style.setProperty('--cookieTotalFontSize', lightModeRoots.cookieTotalFontSize);
                root.style.setProperty('--noCookieFontSize', lightModeRoots.noCookieFontSize); */

                root.style.setProperty('--bannerFont', lightModeRoots.bannerFont);
                
                root.style.setProperty('--cookieHeadlineColor', lightModeRoots.cookieHeadlineColor);
                root.style.setProperty('--cookieDescriptionColor', lightModeRoots.cookieDescriptionColor);
                
                root.style.setProperty('--bannerAccentColor', lightModeRoots.bannerAccentColor);
                root.style.setProperty('--bannerColorWhite', lightModeRoots.bannerColorWhite);
                root.style.setProperty('--mainCookieBgColor', lightModeRoots.mainCookieBgColor);
                root.style.setProperty('--InsideBorderColor', lightModeRoots.InsideBorderColor);

                root.style.setProperty('--cookieValueWeight', darkModeRoots.cookieValueWeight);
                root.style.setProperty('--normalButtonColor', lightModeRoots.normalButtonColor);
                root.style.setProperty('--activeButtonHoveColor', lightModeRoots.activeButtonHoveColor);

                localStorage.setItem("viewMode", "light");
                getDarkModeIcon.id = "light";
                getDarkModeIcon.innerHTML = darkSvg;
            }

            getDarkModeIcon.onclick = function(){
                if(getDarkModeIcon.id == "light"){
                    dark();
        
                }else if(getDarkModeIcon.id == "dark"){
                    light();
                }
            }

            var getViewMode = localStorage.getItem("viewMode");

            if(getViewMode == "light"){
                light()
            }else if(getViewMode == "dark"){
                dark()
            }

            var modeWrapper = document.querySelector(".darkModeWrapper svg");
            modeWrapper.style.display = showIconOfModes ? "block" : "none";
        }



        if(darkModeEnable){
            darkMode();
        }

        /* ---- predefined functions ---- */
        //check when the banner will show to the users
        function checkChoiceShowBanner(){

            var choiceMade = localStorage.getItem("choiceMade");
            var showBanner = localStorage.getItem("sb");

            if(showBanner == "true"){
                if(!choiceMade){
                    showHide(true, false)
                }else if(choiceMade){
                    showHide(false, true)
                }
            }else if(showBanner == "false"){
                showHide(false, false)
            }

            miniIcon.onclick = function(){
                showHide(true, false)
            }
        }

        //add blur and loading
        function addLoaderAndBlur(){
            allContentSection.forEach(function(blur){
                blur.classList.add("blur");
            })
            bannerLoader.style.display = "block";
        }

        //remove blur and loading
        function removeLoaderAndBlur(){
            allContentSection.forEach(function(blur){
                blur.classList.remove("blur");
            })
            bannerLoader.style.display = "none";
        }

        //show banner or hide the banner
        function showHide(mainBanner, miniBanner){
            banner.style.display = mainBanner ? "block" : "none";
            miniIcon.style.display = miniBanner ? "flex" : "none";
        }

        //push choice made in the local storage
        function choiceMade(){
            localStorage.setItem("choiceMade", "true");
        }

        /* ---- replacing the text ---- */

        //nav and nav text
        var allTopSection = document.querySelectorAll(".bannerSectionHeadline");



        //replace the nav text
        allTopSection.forEach(function(element, index) {
            element.innerHTML += topSectionText[index];
        });

        //middle section and content
        var allContentSection = document.querySelectorAll(".bannerContent");


        //replace the middle section text content
        allContentSection[0].innerHTML = firstSectionText;
        allContentSection[2].innerHTML = thirdSectionText;


        //replace the bottom button text
        bannerButtons.forEach((element, index) => {
            element.innerHTML += bannerButtonsTexts[index];
        });

        document.querySelectorAll(".switch")[0].style.opacity = "0.5";



        /* ---- category click events ---- */
        allTopSection.forEach((element, index) => {
            element.onclick = (() => {
                if (index == 1) {

                    addLoaderAndBlur();

                    var getChoice = JSON.parse(localStorage.getItem("bannerChoice"));

                    setTimeout(function(){

                        Object.keys(getChoice ? getChoice : {}).forEach(function(choice, index){

                            var tempVar;
        
                            if(getChoice[choice] == "granted"){
                                tempVar = true
                            }else if(getChoice[choice] == "denied"){
                                tempVar = false
                            }
        
                            if(index != 0){
                                bannerCheckBox[index].checked = tempVar;
                            }
        
                        })

                        removeLoaderAndBlur();

                    },loadingTime)


                    bannerButtons[2].innerHTML = bannerButtonsTexts[3]; // If Details is clicked
                    bannerButtons[2].id = "consentSave";
                } else if (index == 0 || index == 2) {
                    bannerButtons[2].innerHTML = bannerButtonsTexts[2]; // If Consent or About is clicked
                    bannerButtons[2].id = "consentCustom";
                }
        
                allContentSection.forEach((element) => {
                    element.classList.add("bannerContentInactive");
                });
        
                allTopSection.forEach((element) => {
                    element.classList.remove("activeHeadlineBorder");
                });
        
                allContentSection[index].classList.remove("bannerContentInactive");
                allContentSection[index].classList.add("bannerContentActive");
                allTopSection[index].classList.add("activeHeadlineBorder");
            });
        });
        
        
        cookieCategoriesTitle.forEach(function(cookieCategory, index) {
            cookieCategory.onclick = (function() {
                if (allCookieDetails[index].classList.contains("displayNone")) {
                    allCookieDetails[index].classList.remove("displayNone");
                    allCookieDetails[index].classList.add("displayBlock");
                    cookieCategoriesTitle[index].querySelector("svg").classList.add("rotate");
                } else {
                    allCookieDetails[index].classList.remove("displayBlock");
                    allCookieDetails[index].classList.add("displayNone");
                    cookieCategoriesTitle[index].querySelector("svg").classList.remove("rotate");
                }
            });
        });
        
        
        allCookieWrapperTitle.forEach((element, index) => {
            element.onclick = (() => {
                allCookieWrapper[index].querySelectorAll(".mainCookiesDetails").forEach(function(mainCookie) {
                    if (mainCookie.classList.contains("displayNone")) {
                        mainCookie.classList.remove("displayNone");
                        mainCookie.classList.add("displayFlex");
                        allCookieWrapperTitle[index].querySelector(".allCookieTitleRight > svg").classList.add("rotate")
                    } else {
                        mainCookie.classList.add("displayNone");
                        mainCookie.classList.remove("displayFlex");
                        allCookieWrapperTitle[index].querySelector(".allCookieTitleRight > svg").classList.remove("rotate")
                    }
                });
            });
        });



        //Necessary toggle enable by default
        bannerCheckBox[0].checked=true;
        bannerCheckBox[0].disabled=true;



        /* ---- handling Choice Button Click ---- */
        var consentValue = ["granted", "denied"];

        var consent = {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'denied',
            personalization_storage: 'denied',
            unclassified_storage:  'denied',
        }

        bannerButtons.forEach(function(element){
            element.onclick = function(){
                if(element.id == "consentCustom"){

                    element.innerHTML = bannerButtonsTexts[3];
                    element.id = "consentSave";

                    allContentSection.forEach((section)=>{
                        section.classList.remove("bannerContentActive");
                    })

                    allContentSection[1].classList.remove("bannerContentInactive");
                    allContentSection[1].classList.add("bannerContentActive");

                    allTopSection.forEach((element) => {
                        element.classList.remove("activeHeadlineBorder");
                    });

                    allTopSection[1].classList.add("activeHeadlineBorder");

                }else if(element.id == "consentSave"){

                    addLoaderAndBlur();

                    Object.keys(checkedCategories).forEach((inputCategory, index)=>{
                        var convert = bannerCheckBox[index].checked ? "granted" : "denied";
                        checkedCategories[inputCategory] = convert;
                    })

                    localStorage.setItem("bannerChoice", JSON.stringify(checkedCategories));
                    
                    consent.ad_storage = checkedCategories.Marketing;
                    consent.ad_user_data = checkedCategories.Marketing;
                    consent.ad_personalization = checkedCategories.Marketing;
                    consent.analytics_storage = checkedCategories.Statistics;
                    consent.personalization_storage = checkedCategories.Preferences;
                    consent.functionality_storage = checkedCategories.Preferences;
                    consent.unclassified_storage = consent.Unclassified;

                    gtag('consent', 'update', consent);

                    pushDataLayer(consent, "consent_update")

                    setTimeout(function(){
                        removeLoaderAndBlur();
                        showHide(false, true);
                    }, loadingTime)

                    choiceMade();

                }else if(element.id == "consentAccept"){

                    addLoaderAndBlur();

                    Object.keys(consent).forEach(function(element){
                        consent[element] = consentValue[0]
                    });

                    Object.keys(checkedCategories).forEach(function(element){
                        checkedCategories[element] = consentValue[0]
                    });

                    bannerCheckBox.forEach((input, inputIndex)=>{
                        if(inputIndex!= 0){
                            input.checked = true;
                        }
                    })

                    localStorage.setItem("bannerChoice", JSON.stringify(checkedCategories));


                    gtag('consent', 'update', consent);
                    pushDataLayer(consent, "consent_update");

                    setTimeout(function(){
                        removeLoaderAndBlur()
                        showHide(false, true);
                    }, loadingTime);

                    
                    choiceMade();

                }else if(element.id == "consentReject"){

                    addLoaderAndBlur()

                    Object.keys(consent).forEach(function(element){
                        consent[element] = consentValue[1]
                    })

                    Object.keys(checkedCategories).forEach(function(element){
                        checkedCategories[element] = consentValue[1]
                    });

                    bannerCheckBox.forEach((input, inputIndex)=>{
                        if(inputIndex!= 0){
                            input.checked = false;
                        }
                    })

                    localStorage.setItem("bannerChoice", JSON.stringify(checkedCategories));

                    gtag('consent', 'update', consent);
                    pushDataLayer(consent, "consent_update");
                    choiceMade();

                    setTimeout(function(){
                        removeLoaderAndBlur();
                        showHide(false, true);
                    }, loadingTime);
                }
            }
        });

        setTimeout(()=>{
            checkChoiceShowBanner()
        }, bannerShowingDelayed)
    }

    processCookies(categoriesCookies, restCodes);
})