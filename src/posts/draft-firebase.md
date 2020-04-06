---
title: 'Displaying Real-Time Views using React, Gatsby and Firebase'
date: '2020-04-06'
---

This post is my take on displying real-time views using Firebase and React. This is previously done by Guillermo Rauch on [rauchg.com](https://rauchg.com) and Lee Robinson on [leerob.io](https://leerob.io).
Lee also explains how he did this in his [blog](https://leerob.io/blog/real-time-post-views).

So why should you read _my_ post if they have already done so and even explained it? The reason being, both of the implementations require some sort of node environment to execute code while my post shows how you can achieve it on the _client-side_.

Another reason being, both websites are using [Nextjs](https://nextjs.org/) while mine is using [Gatsbyjs](https://www.gatsbyjs.org/) and I couldn't find anything related to it. So here we are.

<br/>

## Setup

### Setting up Firebase

1. Sign in to [Firebase](https://firebase.google.com/) and go to [console](https://console.firebase.google.com/) and create a new project. I'll name mine **react-gatsby-views**. You can enable Google Analytics if you want and click on create project
2. Navigate to Develop -> Database and click on "Create Database"
3. Choose "Start in Test Mode"
4. Choose your location and click on "Done"
5. Click on "Project Settings" click on web icon to create a "Web App"
6. Enter your name, I'll name mine **react-gatsby-views-app** do not enable Firebase hosting and click on "Register app"
7. Click on "Continue to console" as we'll need the config object later
8. Go to "Database" and select "Realtime Database"
9. Go to "Rules" and set `read`, `write` to `true` and click on "Publish" allowing us to update data without sigining in and using the config object
