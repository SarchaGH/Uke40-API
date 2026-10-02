# UKE40: NASA API Website
 
## Project Overview
 
In this project, I created a website that uses NASA APIs to display astronomy pictures and information.
The website uses NASA APOD (Astronomy Picture of the Day) APIs to show images and descriptions from space.
 
---
 
## Features
 
### 1. NASA APOD API
 
The website uses NASA APIs to retrieve:
 
- Images
- Titles
- Descriptions
- Dates
 
The data is displayed automatically on the webpage.
 
---
 
### 2. NASA APOD Gallery
 
The website displays multiple APOD entries from different dates.
 
Each entry includes:
 
- Title
- Image
- Description
 
This creates a small astronomy gallery.
 
---
 
### 3. Error Handling
 
The website checks if the API request is successful before using the data.
 
Example:
 
```javascript
if (!response.ok) {
throw new Error("Failed to load data!");
}
```
 
If an error occurs:
 
- An error message is displayed
- An error image is shown
  EXP:

![Background in dark mode](./error.png)

- The error is logged in the console
 
Example:
 
```javascript
.catch(error => {
document.getElementById("text").innerHTML =
"Failed to load data!";
 
document.getElementById("photo").src =
"image/error.png";
 
console.log(error);
});
```
 
---
 
### 4. Theme Toggle
 
The website includes a Light Mode and Dark Mode button.
 
The dark mode uses a space background image.

EXP:

![Background in dark mode](./spaceBG2.avif)
 
---
 
## What I Used
 
- HTML
- CSS
- JavaScript
- JSON
- NASA APIs
 
---
 
## What I Learned
 
Through this project I learned:
 
- What an API is
- How JSON data is structured
- How to use fetch()
- How to display API data
- How to handle errors
- How to create a webpage using API data
 
---
UKE40 - API Project
