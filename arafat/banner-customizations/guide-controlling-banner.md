# Banner and Cookie Consent Customization Guide

**Description:**  
This guide explains how to customize a website banner for cookie consent. It covers settings for display delay, logo, dark mode, consent actions, query parameter storage, and customizable text. You can adjust these options to tailor the user experience.

---

### Banner Display Delay

The `bannerShowingDelayed` variable controls the delay time (in milliseconds) before the banner appears.

1. **Set Delay Time:** Set a delay in milliseconds. For example, to set a 3-second delay:

   ```javascript
   var bannerShowingDelayed = 3000; // Banner appears after 3 seconds
   ```

2. **Show Banner Immediately:** Set to `0` for no delay:

   ```javascript
   var bannerShowingDelayed = 0; // No delay, shows right away
   ```

---

### Logo Customization

You can add, remove, or resize the logo on the banner.

1. **Add a Logo:** Set `websiteLogo` to the URL of the logo:

   ```javascript
   var websiteLogo = "https://example.com/logo.svg";
   ```

2. **Remove the Logo:** Set `websiteLogo` to an empty string to hide the logo:

   ```javascript
   var websiteLogo = "";
   ```

3. **Set Logo Size:** Adjust `logoWidth` to set the logo’s size in pixels:

   ```javascript
   var logoWidth = "80px"; // Logo width set to 80 pixels
   ```

---

### Dark Mode Customization

You can enable dark mode, set a default mode, and let users toggle between light and dark modes.

1. **Enable Dark Mode:** Set `darkModeEnable` to `true` to make dark mode available:

   ```javascript
   var darkModeEnable = true;
   ```

2. **Set Default Mode:** Use `darkModeDefault` to set the default mode to either "light" or "dark." This example checks if a previous mode is saved in `localStorage`. If not, it defaults to "light":

   ```javascript
   var darkModeDefault = localStorage.getItem("viewMode") ? localStorage.getItem("viewMode") : "light";
   ```

3. **Show Toggle for Light/Dark Mode:** Set `showIconOfModes` to `true` to show a toggle icon for users to switch between modes:

   ```javascript
   var showIconOfModes = true;
   ```

---

### Default Consent and Main Banner Consent Actions

These settings manage the default consent and actions for Accept, Customize, or Decline on the banner.

1. **Default Consent Setting:** Set `defaultConsent` to `true` if you want consent to be granted by default, or `false` if not:

   ```javascript
   var defaultConsent = false; // Default is consent denied
   ```

2. **Accept Button Action:** Use `onClickAccept` to define the action for clicking "Accept":

   ```javascript
   var onClickAccept = "granted"; // Consent granted on Accept
   ```

3. **Customize Button Action:** Use `onClickCustom` to specify the outcome of clicking "Customize." Options include:
   - `"granted"`: All options are accepted.
   - `"denied"`: All options are denied.
   - `"normal"`: Lets users choose specific options.

   ```javascript
   var onClickCustom = "normal";
   ```

4. **Decline Button Action:** Use `onClickDeclined` to set what happens on clicking "Decline":

   ```javascript
   var onClickDeclined = "denied"; // Consent denied on Decline
   ```

---

### Second Banner and Consent Reminder Settings

The second banner is a follow-up if users decline consent on the first banner. You can control when it shows and the actions if they accept or decline again.

1. **Enable Second Banner:** Set `secondBannerEnable` to `true` to display the second banner:

   ```javascript
   var secondBannerEnable = true;
   ```

2. **Accept Button Action on Second Banner:** Use `onClickAcceptSecond` to define what happens if users click "Accept" on the second banner:

   ```javascript
   var onClickAcceptSecond = "granted"; // Consent granted on Accept
   ```

3. **Decline Button Action on Second Banner:** Use `onClickDeclinedSecond` to set the action for clicking "Decline" on the second banner:

   ```javascript
   var onClickDeclinedSecond = "denied"; // Consent denied on Decline
   ```

4. **Second Banner Delay:** Set `secondBannerShowingTime` to control the delay (in seconds) before the second banner appears:

   ```javascript
   var secondBannerShowingTime = 10; // Shows after 10 seconds
   ```

---

### Query Parameter Storage

These settings control which URL query parameters are stored and how they’re handled in the URL.

1. **Store Query Parameters:** Set `storeQuery` to `true` to save specific query parameters in `localStorage`.

   ```javascript
   var storeQuery = true;
   ```

2. **Add Parameters Back to URL:** Set `addBackToUrl` to `true` if you want stored query parameters added back to the URL as users navigate.

   ```javascript
   var addBackToUrl = true;
   ```

3. **Specify Query Parameters to Store:** Define which parameters to save by listing them in `queryParamsToStore`. Only parameters listed here will be saved.

   ```javascript
   var queryParamsToStore = ['gcild', 'utm_source', 'utm_medium'];
   ```

> **Image:** Add a screenshot here to show an example of stored query parameters in `localStorage`.

---

### Customizable Text and URLs

The following variables hold text and URLs displayed on the banner. You can update these to change the banner’s language or messaging.

1. **Privacy Policy Link:** Update `websitePrivacyPage` with the URL of your privacy policy.

   ```javascript
   var websitePrivacyPage = "https://www.metricsrealm.com/privacy-policy/";
   ```

2. **Unknown Cookie Text:** `unknownCookieText` specifies labels for unknown cookies. Update the array values to customize this text.

   ```javascript
   var unknownCookieText = ["Unknown", "This cookie information is unknown"];
   ```

3. **Category Names:** `categoryText` lists names for different cookie categories. Modify each item in the array as needed.

   ```javascript
   var categoryText = ["Necessary", "Preferences", "Statistics", "Marketing", "Unclassified"];
   ```

4. **"Learn More" Text:** `learnMoreText` defines the link text users click to learn more about a cookie provider.

   ```javascript
   var learnMoreText = "Learn more about the provider";
   ```

5. **Section Titles for Navigation:** `topSectionText` defines names for the banner’s navigation tabs. Edit each label as you like.

   ```javascript
   var topSectionText = ["Consent", "Details", "About"];
   ```

6. **Main Banner Text Content:** `firstSectionText` and `thirdSectionText` hold the main text shown in the banner. Update these strings to change the banner’s information.

   ```javascript
   var firstSectionText = "We use cookies to personalize content and ads...";
   var thirdSectionText = "Cookies are small text files that are used by websites...";
   ```

   > **Image:** Add a screenshot here showing an example of the main banner with the `firstSectionText` and `thirdSectionText` displayed.

7. **Button Text:** `bannerButtonsTexts` holds the labels for the buttons. Update each item in the array to rename the buttons.

   ```javascript
   var bannerButtonsTexts = ["Accept", "Decline", "Customize", "Save"];
   ```

8. **Category Descriptions:** `categoryDescriptionsText` holds descriptions for each cookie category. Update the text in each category to change its description.

   ```javascript
   var categoryDescriptionsText = {
       Necessary: { description: "Necessary cookies make the website usable..." },
       Preferences: { description: "Preference cookies enable a website to remember..." },
       Statistics: { description: "Statistics cookies help website owners understand..." },
       Marketing: { description: "Marketing cookies are used to track visitors..." },
       Unclassified: { description: "Unclassified cookies are cookies that we are currently classifying..." },
   };
   ```

   > **Image:** Add a screenshot here showing the cookie categories and descriptions displayed on the banner.

9. **Cookie Info Labels:** `cookieInfoText` defines labels for cookie details, like expiration and domain. Update the array to change these labels.

   ```javascript
   var cookieInfoText = ["Expiration", "Domain", "Controller"];
   ```

> **Image:** Add a screenshot here showing the cookie info labels as they appear on the banner.

---

These settings allow you to fully customize the text, language, and content of your cookie consent banner. You can update each variable to match your website's messaging or language needs.









