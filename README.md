# Treehouse - React Image Gallery

In this project, you'll build an image gallery using React and the Flickr API. After creating the project with create-react-app, you will build the gallery components, add to the supplied CSS and set up routing.

# Instructions

### 1. Set up your project with create-react-app

### 2. Build your app components

- Most components should be stateless functional components that focus on the UI rather than behavior. Here's some examples of the sorts of components you’ll need:
  - A Container component that takes in a keyword and api key as props, and fetches the photos and other required information from the API
  - A Header component, maybe for storing the nav and search
  - A Navigation menu component
  - A Form component for the search
  - A Gallery component that can be reused to display the sets of images for each category you wish to display. For example, Sunsets, Flowers, and Waterfalls.
  - And you can even use a components for your list items and/or your individual images.

### 3. CSS styles

- Update the CSS to style the app in a way that resembles the mockups.

  **Note:** Remember, the mockups are just a general guide for how the elements should be arranged and positioned on the page. But other than general arrangement, spacing and positioning, you are free get creative with color and other cool CSS embellishments like shadows, transitions, fonts, etc.

### 4. Routes

- Install React Router and set up your `<Route>` and `<Link>` or `<NavLink>` components.

- Clicking a nav link should navigate the user to the correct route and load new data.

- URLs should correctly match the Routes.

### 5. Get a Flickr API key - Create yahoo account/use tumblr account to sign in.

- Apply for non-commercial API key https://www.flickr.com/services/apps/create/apply/.
- You’ll need to set up a config.js file in your project that imports your API key into your application so that you and other users can request data from the Flickr API.

- The config.js file should look something like this:

  ```
  const apiKey = 'YOUR API KEY';
  export default apiKey;
  ```

- Import your API key into your application and save it to a variable like you would any other module, and use the variable where applicable. That way, your app’s users will only need to enter in an API key once.

**Important Note:** This config.js file must be listed in the .gitignore file so it won’t be committed to your github repository. This will prevent your keys and tokens from getting posted publicly to GitHub. It is very important that you do NOT upload any of your personal API keys / secrets / passwords to Github or other publicly accessible place. When you submit this project for grading, your project reviewer will create their own config.js file and use their own API key to run the project.

### 6. Requesting the data

- Fetch the data from the Flickr API.

- Make sure data fetching and state is managed by a higher-level “container” component.

- It is recommended the you use the following link for help with this part of the project, https://www.flickr.com/services/api/explore/flickr.photos.search.
  - Enter a tag to search for, such as “sunsets.”
  - You may also want to limit the number of results using the per_page argument.
  - Choose JSON as the output, then “Do not sign call.”
  - Click “Call Method...” At the bottom of the page, and you’ll see an example of the API call you’ll need to make. You can click on the URL to see what the response will look like.

### 7. Displaying the data

- Make sure each image gets a unique "key" prop.
- There should be no console warnings regarding unique "key" props.
- The title of each image list should be displayed dynamically via "props".
- The URL should match the route.

### 8. Search

- Add search field feature to search for new categories of images.

### 9. Before you submit your project for review, make sure you can check off all of the items on the **[Student Project Submission Checklist]** (http://treehouse-techdegree.s3.amazonaws.com/Student-Project-Submission-Checklist.pdf). The checklist is designed to help you make sure you’ve met the grading requirements and that your project is complete and ready to be submitted!

## Extra Credit

1.  Add a loading indicator that displays each time the app fetches new data.

2.  Include a 404-like error route that displays when a URL path does not match a route.

3.  If no matches are found by the search, include a message to tell the user there are no matches.

# Viewing the App

To view the app you will need to:

- Download the files
- Apply for a non-commercial API key from Flickr https://www.flickr.com/services/apps/create/apply/.
- Then use this to set up a config.js file as below:
  ```
  const apiKey = 'YOUR API KEY';
  export default apiKey;
  ```
- Store this file in the `src` folder of the project
- Then run `npm install` to import the node modules
- `npm start` or `yarn start` to run

# Notes from the Build

This project has been run on 3 different browsers for testing: Chrome 87, Safari 14.0.1 and Firefox 84.0b7 with no issues found.

While I have the project working, there are certain aspects that were hard to overcome and I am not sure it fully meets the philosophy of React App. I built the project out from creating the components, applying the Flickr API before adding the routing functionality. I believe you use React to get a smoother experience by cutting down on the amount of times components on the page are rendered.

The problem I came across is that I couldn't find a way to strucure the routes so that the searchbar could receive the params from the url and **NOT** need to be re-rendered. In fact to access the match.params at all I had to look beyond the scope of the course and use `withRouter` alongside `componentDidUpdate`. Due to this I believe there must be a more efficient manner to build the app and would appreciate any feedback in this regard.
