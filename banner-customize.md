# Main Banner

## Setting a Delay for Banner Display

### Delaying the Banner Display

**Purpose:**  
The variable `bannerShowingDelayed` controls the delay time (in milliseconds) before the banner is displayed on the page. This can be useful if you want to give users a few seconds to view the page content before showing the banner.

**How to Set the Delay:**  
Assign a value (in milliseconds) to `bannerShowingDelayed` to specify the delay. For example:

```javascript
var bannerShowingDelayed = 3000; // Delays the banner display by 3 seconds

- **Note:** 3000 milliseconds equals 3 seconds.
- **Immediate Display:** Set `bannerShowingDelayed = 0;` for the banner to appear instantly when the page loads.
- You can adjust this value based on how long you want users to wait before the banner appears.
