# Banner and Cookie Consent Customization Guide

**Description:**  
This guide explains how to set up a customizable banner for cookie consent. You’ll learn how to control the display delay, add a logo, enable dark mode, and manage consent actions.

---

### Banner Display Delay

Use `bannerShowingDelayed` to set how long the banner waits before appearing.

1. **Set Delay Time:** Enter a delay time in milliseconds. For example, to set a 3-second delay:

   ```javascript
   var bannerShowingDelayed = 3000; // Banner shows after 3 seconds
   ```

2. **Show Banner Immediately:** Set to `0` to show the banner right away:

   ```javascript
   var bannerShowingDelayed = 0; // No delay, banner shows immediately
   ```

---

### Logo Customization

You can add, remove, or resize the logo on the banner.

1. **Add a Logo:** Set `websiteLogo` to the logo’s URL:

   ```javascript
   var websiteLogo = "https://example.com/logo.svg";
   ```

2. **Remove the Logo:** Set `websiteLogo` to an empty string to hide the logo:

   ```javascript
   var websiteLogo = "";
   ```

3. **Set Logo Size:** Change `logoWidth` to control the logo’s size in pixels:

   ```javascript
   var logoWidth = "80px"; // Logo width set to 80 pixels
   ```

---

### Dark Mode Customization

Enable dark mode, set a default mode, and let users toggle between light and dark modes.

1. **Enable Dark Mode:** Set `darkModeEnable` to `true` to make dark mode available:

   ```javascript
   var darkModeEnable = true;
   ```

2. **Set Default Mode:** Use `darkModeDefault` to set the default mode to either "light" or "dark" when users first visit. This example checks if there’s a saved mode in `localStorage`. If not, it defaults to "light":

   ```javascript
   var darkModeDefault = localStorage.getItem("viewMode") ? localStorage.getItem("viewMode") : "light";
   ```

   - If a previous choice exists in `localStorage`, it loads that. If no saved mode is found, it uses "light."

3. **Show Toggle for Light/Dark Mode:** Set `showIconOfModes` to `true` to show a toggle icon for users to switch between modes:

   ```javascript
   var showIconOfModes = true;
   ```

---

### Default Consent and Main Banner Consent Actions

These variables manage the default consent setting and the actions when users click Accept, Customize, or Decline on the main banner.

1. **Default Consent Setting:** Set `defaultConsent` to `true` if you want consent to be granted by default, or `false` if not:

   ```javascript
   var defaultConsent = false; // Default is consent denied
   ```

2. **Accept Button Action:** Use `onClickAccept` to set the action for when users click "Accept" on the banner:

   ```javascript
   var onClickAccept = "granted"; // Consent is granted on Accept
   ```

3. **Customize Button Action:** Use `onClickCustom` to define the action for when users click "Customize":

   ```javascript
   var onClickCustom = "normal"; // Users can select options individually
   ```

   - `"granted"`: All options are accepted.
   - `"denied"`: All options are denied.
   - `"normal"`: Lets users pick specific options.

4. **Decline Button Action:** Use `onClickDeclined` to define the action when users click "Decline":

   ```javascript
   var onClickDeclined = "denied"; // Consent is denied on Decline
   ```

---

### Second Banner and Consent Reminder Settings

The second banner serves as a reminder if users decline consent on the first banner. You can control when it shows and the actions if they accept or decline again.

1. **Enable Second Banner:** Set `secondBannerEnable` to `true` to display the second banner:

   ```javascript
   var secondBannerEnable = true;
   ```

2. **Accept Button Action on Second Banner:** Use `onClickAcceptSecond` to set what happens if users click "Accept" on the second banner:

   ```javascript
   var onClickAcceptSecond = "granted"; // Consent granted on Accept
   ```

3. **Decline Button Action on Second Banner:** Use `onClickDeclinedSecond` to set the action for when users click "Decline" on the second banner:

   ```javascript
   var onClickDeclinedSecond = "denied"; // Consent denied on Decline
   ```

4. **Second Banner Delay:** Set `secondBannerShowingTime` to control the delay (in seconds) before the second banner appears:

   ```javascript
   var secondBannerShowingTime = 10; // Shows after 10 seconds
   ```

---

These settings let you control how the banner and consent work for your users.
