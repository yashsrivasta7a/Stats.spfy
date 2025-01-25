# Stats.Spty

**Stats.Spty** is a web application that allows you to explore your Spotify music stats in detail. Track your **Top Tracks**, **Top Artists**, and more, gaining insight into your musical preferences over time.

## Features
- **Top Tracks**: See a list of your most played songs based on the selected time range.
- **Top Artists**: Get insights into the artists you listen to the most.

## Prerequisites
- **Spotify Account**: You need a Spotify account to authenticate and access your data.
- **Internet Connection**: The app fetches data from the Spotify API, so an active internet connection is required.

## How to Use

### Step 1: Authentication
1. Upon visiting the app, click the **"Connect to Spotify"** button.
2. You’ll be redirected to Spotify's login page to authenticate and authorize the app to access your data.
3. After successful authentication, the app will show your **Top Tracks** and **Top Artists**.

### Important: Email Whitelisting
- The app is currently in **development mode**, which restricts access to whitelisted users only. 
- **You won’t be able to use the app until your email is whitelisted**. 
- Please provide your email address, and I will add it to the whitelist to grant access.

## Development Mode Limitation
In **development mode**, Spotify limits the number of users who can authenticate with your app. This is to ensure the app works properly before it’s made available to everyone. If you want to use the app, please reach out with your email so it can be whitelisted.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Spotify Web API
- **Authentication**: OAuth 2.0 (via Spotify)
- **Styling**: Custom CSS (Landing page, Home page, and Top Tracks/Artists views)
