# Banner and Cookie Consent Customization Guide

**Description:**  
This guide provides a step-by-step overview of customizing a website banner and cookie consent preferences. It covers essential settings, including display delay, logo customization, dark mode, navigation text, and cookie consent options, allowing you to tailor the user experience according to your website's requirements.

---

### Banner Display Delay

The `bannerShowingDelayed` variable controls the delay time (in milliseconds) before the banner appears on the page. This feature allows users to engage with the page content before the banner is shown.

#### How to Set the Delay:
1. **Define the Delay Time:** Assign a value in milliseconds to `bannerShowingDelayed`. For example, to set a 3-second delay:

   ```javascript
   var bannerShowingDelayed = 3000; // Banner appears after 3 seconds
   ```

2. **Immediate Display:** Setting `bannerShowingDelayed` to `0` means the banner will appear as soon as the page loads:

   ```javascript
   var bannerShowingDelayed = 0; // No delay, banner appears immediately
   ```

3. **Customize the Delay:** Adjust this value as needed based on how long you'd like users to wait before seeing the banner.

---

### Logo Customization

You can customize the logo displayed on the banner by setting the `websiteLogo` and `logoWidth` variables.

#### Adding a Logo:
1. **Specify the Logo URL:** Set the `websiteLogo` variable to the URL of the logo image you want to display on the banner. Example:

   ```javascript
   var websiteLogo = "https://example.com/path-to-your-logo.svg";
   ```

2. **Removing the Logo:** If you don’t want a logo displayed, set `websiteLogo` to an empty string:

   ```javascript
   var websiteLogo = "";
   ```

   This will prevent any logo from appearing on the banner.

#### Adjusting the Logo Size:
1. **Define the Logo Width:** Use the `logoWidth` variable to set the logo’s width in pixels. For example, to set the logo width to 80 pixels:

   ```javascript
   var logoWidth = "80px"; // Logo width set to 80 pixels
   ```

2. **Customize as Needed:** Modify this value based on the desired size for the logo on your banner.

---

### Dark Mode Customization

You can enable dark mode functionality for the banner and set it as the default mode if preferred. The following variables control dark mode options:

#### Enabling Dark Mode:
1. **Activate Dark Mode Option:** To make dark mode available, set `darkModeEnable` to `true`. Setting it to `false` will disable dark mode entirely.

   ```javascript
   var darkModeEnable = true; // Enables dark mode functionality
   ```

#### Setting the Default Mode:
1. **Define the Default Mode:** Use the `darkModeDefault` variable to set the banner’s default mode to either "light" or "dark." This setting will apply when users first visit.

   ```javascript
   var darkModeDefault = localStorage.getItem("viewMode") ? localStorage.getItem("viewMode") : "dark";
   ```

   - In this example, if no preference is stored in `localStorage`, the default mode is set to dark.
   - To set the default to light, replace `"dark"` with `"light"`.

#### Allowing Users to Toggle Mode:
1. **Show Toggle Icon:** To give users control over light and dark modes, set `showIconOfModes` to `true`, displaying a toggle icon on the banner. Set to `false` to hide the toggle icon.

   ```javascript
   var showIconOfModes = true; // Enables light/dark mode toggle icon
   ```

These settings allow you to customize dark mode behavior to suit user preferences on your site.

---

### Default Consent and Main Banner Consent Actions

These variables manage the initial consent status and define actions when users interact with the main banner's consent options.

#### Default Consent Setting
1. **Set Initial Consent Status:** The `defaultConsent` variable determines if consent is granted by default or not. 

   - Set `defaultConsent` to `true` if you want consent to be granted initially.
   - Set `defaultConsent` to `false` if consent should be denied until the user takes action.

   ```javascript
   var defaultConsent = false; // Consent denied by default
   ```

#### Main Banner Consent Actions
The following variables control what happens when users click "Accept," "Customize," or "Decline" on the main banner:

1. **Accept Button Action:**  
   - Set `onClickAccept` to `"granted"` to mark consent as granted when users click "Accept."
   - Set it to `"denied"` if clicking "Accept" should deny consent (less common).

   ```javascript
   var onClickAccept = "granted"; // Consent granted on clicking Accept
   ```

2. **Customize Button Action:**  
   - The `onClickCustom` variable specifies the outcome when users click "Customize."
   - Options include:
     - `"granted"`: All consent options are granted.
     - `"denied"`: All consent options are denied.
     - `"normal"`: Users can choose specific options without automatically granting or denying everything.

   ```javascript
   var onClickCustom = "normal"; // Allows users to customize individual consent options
   ```

3. **Decline Button Action:**  
   - Set `onClickDeclined` to `"denied"` to mark consent as denied when users click "Decline."
   - Set it to `"granted"` if clicking "Decline" should grant consent (not typically used).

   ```javascript
   var onClickDeclined = "denied"; // Consent denied on clicking Decline
   ```

   **Note on Alternative Options:**  
   - For each of these actions, setting them to `"granted"` will mean that the action automatically grants consent for all cookies and tracking.
   - Setting them to `"denied"` (e.g., for the `onClickAccept` action) is less common, as "Accept" would typically indicate that consent is given. Choose `"denied"` only if you want to override this default behavior for unique use cases.

These variables allow you to configure the banner’s response based on user actions, providing flexibility in how consent is managed on your site.

---

### Second Banner and Consent Reminder Settings

The second banner feature provides a follow-up opportunity for users who initially declined consent on the main banner. This configuration is useful for sites that want to give users a gentle reminder or prompt to reconsider their choice. The second banner options control when it appears, the actions tied to it, and the effects of each choice.

#### Enabling the Second Banner

1. **Display Control for Second Banner:**  
   - Set `secondBannerEnable` to `true` if you want a second banner to appear when a user declines consent on the main banner.
   - Set it to `false` if you don’t want the secondary prompt.

   ```javascript
   var secondBannerEnable = true; // Enables the second banner as a reminder
   ```

#### Second Banner Consent Actions

The actions tied to the second banner determine what happens when users choose to accept or decline consent on the reminder. These actions are defined by the following variables:

1. **Accept Button Action on Second Banner:**
   - `onClickAcceptSecond` specifies the action to take when users click "Accept" on the second banner.
   - Setting `onClickAcceptSecond` to `"granted"` will record user consent as accepted, enabling cookies and other preferences.
   - Setting it to `"denied"` (though not commonly used) would reject consent, even if the user clicked "Accept" on the second banner.

   ```javascript
   var onClickAcceptSecond = "granted"; // Grants consent on second banner accept
   ```

   **Note:** Typically, you would set `onClickAcceptSecond` to `"granted"` so that users who decide to accept the consent reminder have their preferences saved as accepted.

2. **Decline Button Action on Second Banner:**
   - `onClickDeclinedSecond` defines the action to take if a user clicks "Decline" on the second banner.
   - Setting it to `"denied"` will reject consent, as the user has confirmed they do not wish to allow tracking.
   - If you set it to `"granted"`, clicking "Decline" on the second banner would still save consent as accepted—this is usually not recommended, as it may go against user expectations.

   ```javascript
   var onClickDeclinedSecond = "denied"; // Denies consent on second banner decline
   ```

   **Example Scenarios:**
   - If `onClickDeclinedSecond` is set to `"granted"`, users who decline on the second banner will still have their consent marked as accepted, which may lead to confusion. For a user-centric approach, it’s best to keep this setting as `"denied"`.

#### Configuring the Second Banner Display Delay

The `secondBannerShowingTime` variable sets the timing for the second banner’s appearance, measured in seconds. This delay is useful for letting users engage with the page before the reminder prompt appears.

1. **Set the Delay:**  
   - Define how many seconds you want to wait before showing the second banner.
   - For example, to show the second banner 10 seconds after the user initially declines consent:

   ```javascript
   var secondBannerShowingTime = 10; // Second banner appears after 10 seconds
   ```

   **Note:** Adjusting this timing allows you to balance between user engagement and providing a timely reminder.

---

These settings allow for a user-friendly consent reminder if the initial consent is declined,
helping to ensure users are informed while respecting their preferences.
