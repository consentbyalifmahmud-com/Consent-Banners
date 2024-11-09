# Adding Consent Banner with GitHub and jsDelivr CDN

This guide explains how to upload code to GitHub, convert it to a CDN link using jsDelivr, and then add it to your website’s HTML.

---

### Step 1: Upload Code to GitHub

1. **Create a GitHub Repository:**
   - Go to GitHub and create a new repository (e.g., `Consent-Banners`).

2. **Upload Your Files:**
   - Add the `mystyle.css` file for styling and the `banner.js` file for JavaScript functionality.
   - Commit your changes.

### Step 2: Generate jsDelivr CDN Links

1. **Convert GitHub Code to CDN:**
   - Go to [https://jsdelivr.giaodienblog.net/](https://jsdelivr.giaodienblog.net/).
   - Enter your GitHub repository URL.
   - The tool will generate links for your CSS and JavaScript files.

2. **Copy CDN Links:**
   - Copy the CDN links for `mystyle.css` and `banner.js`.

   **Example CDN Links:**
   ```html
   https://cdn.jsdelivr.net/gh/your-username/Consent-Banners@<commit-hash>/path/to/mystyle.css
   https://cdn.jsdelivr.net/gh/your-username/Consent-Banners@<commit-hash>/path/to/banner.js
   ```

   Replace `<commit-hash>` with the specific version you want to use.

### Step 3: Add CDN Links to Your Website

1. **Add CDN Links to HTML Head Tag:**
   - Insert the `<link>` and `<script>` tags inside the `<head>` section of your HTML file.

   **Example Code:**
   ```html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/consentbyalifmahmud-com/Consent-Banners@01d601c8f3fb8cc5ebfeaa955e014f10a4108b90/metricsrealm.com/mystyle.css">
   <script src="https://cdn.jsdelivr.net/gh/consentbyalifmahmud-com/Consent-Banners@5fc2f30486d613ab4b38d9669d6cac4cae8ff780/metricsrealm.com/banner.js"></script>
   ```

   - The `link` tag includes the CSS for styling.
   - The `script` tag includes the JavaScript for functionality.

### Step 4: Test the Banner on Your Website

1. **Verify CSS and JavaScript Loading:**
   - Open your website in a browser and check that the banner appears as expected.
   - Ensure the styling and JavaScript functionality work correctly.

2. **Check for Errors:**  
   - Open the browser’s Developer Tools (usually accessible via `F12`) to verify that no errors are preventing the banner from functioning.

---

This process helps you efficiently manage and load code from GitHub using jsDelivr, ensuring updates to your banner are seamless and controlled directly from your GitHub repository.
