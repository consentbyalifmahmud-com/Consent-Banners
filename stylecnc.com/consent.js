
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');


:root{

    /* default */
    --bannerBorderColor: #ced6e0;
    --whiteColor: #fff;
    --bannerFont: "Outfit", sans-serif;
    --cookieInfoBg: #f1f2f6;

    /* Headline */
    --healineFontSize: 15px;
    --headlineColor: black;
    --headlineLineHeight: 24px;
    --headlineWeight: bold;

    /* Description */
    --descriptionFontSize: 14px;
    --desciptionColor: #444;
    --descriptionLineHeight: 24px;
    --descriptionWeight: 400;

    /* button */
    --buttonFontSize: 15px;
    --buttonLineHeight: 24px;
    --buttonWeight: bold;
    --buttonRadius: 10px;

    /* normal button */
    --buttonBackground: var(--whiteColor);
    --buttonColor: #444;
    --normalButtonHoverBackground: var(--secondAccent);
    --normalButtonHoverColor: var(--whiteColor);

    /* active button */
    --activeButtonBackground: var(--accentColor);
    --activeButtonColor: var(--whiteColor);
    --activeButtonHoverBackgroud: var(--secondAccent);
    --activeButtonHoverColor: black;

    /* accent */
    --accentColor: #001344;
    --secondAccent: #db3700;
}

.activeFlex{
    display: flex !important;
}

.hideElement{
    display: none !important;
}

.consentBannerWrapper,
.consentBannerWrapper * {
    margin: 0;
    padding: 0;
}

.consentBannerWrapper{
    border: 1px solid var(--bannerBorderColor);
    width: 750px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 20px;
    border-radius: 10px;
    display: none;
    flex-direction: column;
    row-gap: 10px;
    font-family: var(--bannerFont);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 99999;
    background-color: var(--whiteColor);
    animation: opacity 0.5s;
}

.bannerHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
}

.bannerLogo{
    width: 80px;
}
.bannerLogo img{
    width: 100%;
}

.closeBanner{
    display: flex;
    cursor: pointer;
}

.closeBanner svg {
    width: 16px;
}

/* banner navigation */

.bannerNavWrapper{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
}

.bannerNavWrapper .nav{
    width: 100%;
    cursor: pointer;
    padding: 15px 0px;
    border-top: 1px solid var(--bannerBorderColor);
    border-bottom: 1px solid var(--bannerBorderColor);
    position: relative;
}

.navActiveBorder::after{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid var(--accentColor);
}

/* banner content */

.bannerContentWrapper .content{
    display: none;
    flex-direction: column;
    padding: 15px 0px;
    animation: opacity 0.5s;
    height: auto;
    max-height: 30vh;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-right: 10px !important;  
}

.cookieContentWrapper{
    display: flex;
    row-gap: 10px;
    height: auto;
    max-height: 30vh;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-right: 10px !important;  
}

.bannerContentWrapper .content::-webkit-scrollbar {
    width: 3px;
    height: 5px;
}

.bannerContentWrapper .content::-webkit-scrollbar-thumb {
    background-color: var(--accentColor);
    border-radius: 10px;
}

.bannerContentWrapper .content::-webkit-scrollbar-corner {
    background-color: #f1f1f1; 
}

.bannerCategory{
    border-bottom: 1px solid var(--bannerBorderColor);
    padding-bottom: 15px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}


/* arrow */
.arrow{
    width: 18px;
    margin-right: 5px;
}

.rotate{
    transform: rotate(180deg);
}

.cookieTotal{
    background: var(--accentColor);
    margin-left: 5px;
    color: var(--whiteColor);
    font-size: 10px;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.cookieContentWrapper :last-child{
    border-bottom: none;
}

.categoryHeaderWrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.allProviderWrapper{
    display: none;
    flex-direction: column;
    row-gap: 10px;
}

.categoryName{
    cursor: pointer;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.cookiesProviderWrapper{
    display: flex;
    border: 1px solid var(--bannerBorderColor) !important;
    border-radius: 10px;
    flex-direction: column;
    padding: 15px 18px;
    row-gap: 5px;
}

.cookieInfoHeader{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.providerName{
    width: 100%;
}

.cookieInfoHeader :first-child{
    display: flex;
    align-items: center;
}

.allCookieInfoWrapper{
    display: none;
    flex-direction: column;
    row-gap: 10px;
    margin-top: 10px;
}

.cookieInfoWrapper{
    padding: 15px;
    border-radius: 10px;
    background: var(--cookieInfoBg);
}

.cookieBorder{
    border: 1px solid var(--bannerBorderColor);
    margin: 10px 0px;
}

.cookieOtherInfo{
    display: flex;
    flex-direction: column;
}

.learnMoreWrapper a{
    color: var(--accentColor);
    font-size: var(--descriptionFontSize);
    text-decoration: underline !important;
}

.noCookie{
    background-color: var(--cookieInfoBg);
    padding: 15px;
    border-radius: 10px;
    color: var(--desciptionColor);
    font-size: var(--descriptionFontSize);
}

/* button */

.bannerButtons{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    column-gap: 20px;
    border-top: 1px solid var(--bannerBorderColor);
    padding-top: 15px;
}

.btnShadow{
    box-shadow: rgb(243 243 243) 0px -20px 25px 0px, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

.bannerButtons button{
    width: 100%;
    padding: 15px;
    outline: none;
    font-family: var(--bannerFont);
    cursor: pointer;
    border-radius: var(--buttonRadius);
    border: none;
    font-size: var(--buttonFontSize);
    color: var(--buttonColor);
    font-weight: var(--buttonWeight);
    border: 1px solid var(--bannerBorderColor);
    background: white;
}

.bannerButtons button:hover{
    background: var(--normalButtonHoverBackground) !important;
    color: var(--normalButtonHoverColor) !important;
}

.btnActive{
    background: var(--activeButtonBackground) !important;
    color: var(--activeButtonColor) !important;
}

.btnActive:hover{
    background: var(--activeButtonHoverBackgroud) !important;
    color: var(--activeButtonHoverColor) !important;
}

/* default style */

.bannerHeadline{
    font-size: var(--healineFontSize);
    line-height: var(--headlineLineHeight);
    color: var(--headlineColor);
    font-weight: var(--headlineWeight);
}

.bannerDescription{
    font-size: var(--descriptionFontSize);
    line-height: var(--descriptionLineHeight);
    color: var(--desciptionColor);
    font-weight: var(--descriptionWeight);
}


.switch {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 28px;
  }
  
.switch input { 
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-color: var(--accentColor);
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
    transform: translateX(16px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}


.miniIcon{
    width: 50px;
    height: 50px;
    position: fixed;
    left: 10px;
    bottom: 10px;
    border: 2px solid var(--accentColor);
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 99999;
    background: var(--whiteColor);
}

.miniIcon svg{
    fill: var(--accentColor);
}

.blur{
    filter: blur(1px);
}

.divLoader {
    border: 4px solid var(--accentColor);    /* Outer border color */
    border-top: 4px solid var(--whiteColor); /* Top border color for visual effect */
    border-radius: 50%;                      /* Make it a circle */
    width: 50px;
    height: 50px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: spin 1s linear infinite;
    display: none;   /* Apply the spinning animation */
}

/* Animation keyframes for spinning effect */
@keyframes spin {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}



@keyframes opacity {
    from{
        opacity: 0;
    }to{
        opacity: 1;
    }
}


@media screen and (max-width: 800px ) {
    .consentBannerWrapper{
        width: 85%;
    }
}

@media screen and (max-width: 600px ) {

    .bannerButtons{
        display: flex;
        flex-direction: column-reverse;
        
        justify-content: space-evenly;
        row-gap: 10px;
        border-top: 1px solid var(--bannerBorderColor);
        padding-top: 15px;
    }

    .categoryToggle{
        transform: scale(0.8);
    }
}
