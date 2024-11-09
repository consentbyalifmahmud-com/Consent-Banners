# Banner and Cookie Consent CSS Customization Guide

**Description:**  
This guide explains how the CSS code customizes the appearance and layout of your cookie consent banner. You’ll learn to adjust fonts, colors, sizes, and responsive behavior.

---

### Importing Fonts

The code begins by importing custom fonts. This pulls in two Google Fonts, `Syne` and `Urbanist`, making them available for use in the banner styles.

```css
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
```

> **Image:** Add a screenshot here showing an example of text using these custom fonts.

---

### Root Variables

In CSS, the `:root` selector defines global variables that can be reused throughout the code. These variables store common style values, such as colors and font sizes, making it easier to adjust the look and feel in one place.

```css
:root {
    --cookieHeadlineFontSize: 15px;
    --cookieHeadlineFontWeight: 700;
    --cookieHeadlineLineHeight: 24px;
    --cookieDescriptionFontSize: 13px;
    --cookieDescriptionFontWeight: 500;
    --cookieDescriptionLineHeight: 22px;
    --buttonFontSize: 14px;
    --cookieTotalFontSize: 11px;
    --bannerFont: "Urbanist", sans-serif;
    --cookieHeadlineColor: rgb(20, 20, 20);
    --cookieDescriptionColor: rgb(4, 5, 9);
    --bannerAccentColor: #32467e;
    --bannerColorWhite: rgb(255, 255, 255);
    --mainCookieBgColor: rgb(242, 242, 242);
    --InsideBorderColor: rgb(217, 217, 217);
    --noCookieFontSize: 12px;
    --cookieValueWeight: 400;
    --cookieTotalColor: white;
    --normalButtonColor: rgb(20, 20, 20);
    --activeButtonHoveColor: white;
}
```

Each variable here defines a specific style:

- **Font Sizes and Weights:** Control the size, weight, and line height of the text across the banner.
- **Colors:** Define colors for text, backgrounds, and buttons.
- **Borders and Backgrounds:** Set colors for borders and backgrounds to give a cohesive look.

> **Image:** Add a screenshot here showing how colors and fonts look when these styles are applied.

---

### Styling Elements

1. **Banner Wrapper**  
   The main banner wrapper (`.cookieBannerWrapper`) holds all the banner content. It is styled with fixed positioning, center alignment, padding, and a shadow for a professional look.

   ```css
   .cookieBannerWrapper {
       width: 800px;
       position: fixed;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       padding: 15px;
       border-radius: 10px;
       border: 1px solid;
       background: var(--bannerColorWhite);
       box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
       z-index: 99999;
   }
   ```

2. **Banner Header and Logo**  
   The banner header includes the logo and navigation. It aligns items in a row with padding and a border at the bottom.

   ```css
   .bannerHeadlineLogo {
       display: flex;
       justify-content: space-between;
       padding-bottom: 15px;
       border-bottom: 1px solid rgb(217, 217, 217);
   }
   ```

3. **Navigation Tabs**  
   Navigation tabs (`.bannerSectionHeadlineWrapper`) display text such as "Consent," "Details," etc., with a highlighted bottom border when active.

   ```css
   .bannerSectionHeadlineWrapper div {
       text-align: center;
       padding: 20px 0px;
       cursor: pointer;
       border-bottom: 1px solid var(--InsideBorderColor);
   }

   .activeHeadlineBorder {
       border-bottom: 2px solid var(--bannerAccentColor);
   }
   ```

4. **Content Sections**  
   The banner’s content sections (`.bannerContent`) use padding and display properties to show and hide content as needed.

   ```css
   .bannerContent {
       padding: 20px 0px;
       display: none;
   }

   .bannerContentActive {
       display: flex;
   }
   ```

5. **Buttons**  
   The buttons at the bottom of the banner are styled with colors, borders, and transitions to highlight on hover.

   ```css
   .bannerBottomSectionWrapper button {
       font-size: var(--buttonFontSize);
       font-weight: 600;
       background: var(--bannerColorWhite);
       color: var(--normalButtonColor);
       border: 1px solid var(--bannerAccentColor);
       padding: 15px 0px;
       border-radius: 5px;
       cursor: pointer;
       transition: background 0.3s, color 0.3s;
   }

   .bannerBottomSectionWrapper button:hover {
       background: var(--bannerAccentColor);
       color: var(--activeButtonHoveColor);
   }
   ```

6. **Mini Icon for Cookie Settings**  
   The `.miniCookieIcon` appears when the banner is minimized. It is circular and includes an icon for users to open the banner.

   ```css
   .miniCookieIcon {
       position: fixed;
       bottom: 10px;
       left: 10px;
       background-color: var(--bannerColorWhite);
       border-radius: 50%;
       display: none;
       align-items: center;
       justify-content: center;
       z-index: 99999;
   }
   ```

---

### Other Styles and Animations

1. **Toggle Switch**  
   The toggle switch (`.switch`) enables users to turn options on and off, such as dark mode.

   ```css
   .switch {
       position: relative;
       display: inline-block;
       width: 50px;
       height: 28px;
   }

   .slider {
       position: absolute;
       cursor: pointer;
       background-color: #ccc;
       transition: 0.4s;
   }

   input:checked + .slider {
       background-color: var(--bannerAccentColor);
   }
   ```

2. **Animations**  
   The `@keyframes` animation named `opacity` smoothly fades elements in and out, providing a polished feel.

   ```css
   @keyframes opacity {
       from { opacity: 0; }
       to { opacity: 1; }
   }
   ```

3. **Media Queries for Responsiveness**  
   Media queries adjust styles for smaller screens, ensuring the banner and its elements resize well on different devices.

   ```css
   @media only screen and (max-width: 900px) {
       .cookieBannerWrapper { width: 90%; }
   }

   @media only screen and (max-width: 660px) {
       .doubleCheckPopUp { width: 90%; text-align: center; }
   }

   @media only screen and (max-width: 500px) {
       :root {
           --cookieHeadlineFontSize: 12px;
           --cookieDescriptionFontSize: 10px;
       }
       .switch { width: 40px; height: 25px; }
   }
   ```

> **Image:** Add screenshots here of the banner on desktop, tablet, and mobile views.

---

This CSS setup controls the look and feel of your cookie consent banner. Adjust the root variables or individual styles to personalize the design to your brand.






