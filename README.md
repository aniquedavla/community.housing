# Project Describtion
Community.housing solves this issue where a dedicated website helps  individuals belonging to a specific community find the right roommates. It allows for users to search for a community they belong to or create a new community unique to the platform. Users can search for housing in a specific community in a specific location, filter listings and contact the lister.

# Importatn Links: 
### How to Install React.js: 
https://www.youtube.com/watch?v=00kXjx9k3Os&t=132s
### clone a github repo: 
https://www.youtube.com/watch?v=OCiiJi7Bl18&t=105s


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Git workflow

## Where to write your code
- #### local master: 
	is the master branch you have on your computer. 
- #### remote master: 
	it is usually the master branch on github 
- #### local and remote master branch: 
	used to keep a working version of the app that you can merge changes from your local branch changes to.
- #### your branches: 
	you can make branches for each feature, update or one branch for all your work. This is your branch which is not master. This is where you make changes to the project. Once you are ready to submit this code to master, you can follow the steps to merge your code with master below. 

## Steps to merge your code with master
### Prereq:
- Only do this when you have something significant to merge with master like a decent amount of code or progress towards a feature.
- Notify group that you would be will be merging and pushing your changes to master so there is only one person pushing changes to master. To avoid a lot of merge conflicts its better if one person merges their changes to master at a time. 
- Your changes should be in your own branch which is not master.
- Your current local master should pull from master before you merge your changes(step 1 helps you do this).

### Step 1: pulls any updates from remote master to your local master.
	git checkout master
	git pull

### Step 2: merges your branch's code to your local master. You don’t have to type the “<>”
	git checkout <your branch name where your code is>
	git merge --strategy=ours master 	#keeps the content of this branch, but records a merge
	git checkout master
  	git merge <your branch name where your code is>		#fast-forwards master up to the merge
### Step 3: verify merge and push to master
	git checkout master 
	# check the changes and try to run the code. Fix any errors in merging. Make sure the entire app works before pushing. YOU WILL REDO OTHER 		PEOPLE’S WORK IF YOU PUSH BROKEN CODE TO MASTER	
	git add .
	git commit -m  “You name and changes merged with master ”
	git push

