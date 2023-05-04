# MVC-techBlog

  ## Description

  This a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. This app follows the MVC paradigm in its architectural structure, using [Handlebars.js](https://www.npmjs.com/package/handlebars) as the templating language, [Sequelize](https://www.npmjs.com/package/sequelize) as the ORM, and the [express-session](https://www.npmjs.com/package/express-session) npm package for authentication. 

  ## Table of Contents
  
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [License](#license)
  - [Questions](#questions)

  ## Usage

  * WHEN you visit the site for the first time, THEN you are presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

  ![ScreenShot](./assets/images/1.png)
  * WHEN you click on the homepage option, THEN you are taken to the homepage
  * WHEN you click on any other links in the navigation, THEN you are prompted to either sign up or sign in

  ![ScreenShot](./assets/images/2.png)
  * WHEN you choose to sign up, THEN you are prompted to create a username and password
    
  ![ScreenShot](./assets/images/3.png)
  * WHEN you click on the sign-up button, THEN your user credentials are saved and you are logged into the site
  * WHEN you revisit the site at a later time and choose to sign in, THEN you are prompted to enter your username and password
  * WHEN you are signed in to the site, THEN you see navigation links for the homepage, the dashboard, and the option to log out
  * WHEN you click on the homepage option in the navigation, THEN you are taken to the homepage and presented with existing blog posts that include the post title and the date created
  * WHEN you click on an existing blog post, THEN you are presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

  ![ScreenShot](./assets/images/4.png)
  * WHEN you enter a comment and click on the submit button while signed in, THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
  * WHEN you click on the dashboard option in the navigation, THEN you are taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
  * WHEN you click on the button to add a new blog post, THEN you are prompted to enter both a title and contents for your blog post
  * WHEN you click on the button to create a new blog post, THEN the title and contents of your post are saved and you are taken back to an updated dashboard with your new blog post
  * WHEN you click on one of your existing posts in the dashboard, THEN you are able to delete or update your post and taken back to an updated dashboard
  * WHEN you click on the logout option in the navigation, THEN you are signed out of the site
  * WHEN you are idle on the site for more than a set time, THEN you are able to view comments but you are prompted to log in again before you can add, update, or delete comments
  
  ## Technologies

  * [Handlebars.js](https://www.npmjs.com/package/handlebars)
  * [Sequelize](https://www.npmjs.com/package/sequelize)
  * [express-session](https://www.npmjs.com/package/express-session)

  ## Installation

  N/A

  ## License

  N/A

  ## Questions

  If you have additional questions, feel free to reach me through github or email.

  Github: https://github.com/xybai0103
  
  Email: xueyin0103@gmail.com