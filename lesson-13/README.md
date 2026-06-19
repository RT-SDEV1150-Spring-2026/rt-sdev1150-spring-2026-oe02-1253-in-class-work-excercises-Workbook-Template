# Lesson 13 Starter

## Create a project directory and initialize with npm

```sh
mkdir lesson-13
cd lesson-13
npm init # follow prompts //  npm init = “Start a new project setup”

package name: (lesson-13-new) my-app // “npm is suggesting a name based on your folder, but you can either accept it or type a new one.”
  // package name must be lowercase
  // package name must not have spaces (use - instead)
  // Your folder is the physical project, and your package name is your project’s identity in the npm world.”

“Version helps track changes in your project. We usually start with 1.0.0 and update it as we improve the project.”
  The version tells:
    Which stage your project is at
    Whether changes have been made
    It follows a standard format:
      MAJOR.MINOR.PATCH

      Major (1 → 2 → 3…)
        Big changes
        Breaking changes
        Example: completely new features

      Minor
        Small new features
        No breaking changes

      Patch
        Bug fixes
        Small improvements

Description:
  npm is asking, “Can you briefly describe what your project does?”

Entry Point:
  The entry point is, “The main file where your program starts running.”
   you can change the entry point later anytime
   Just open your package.json file and edit the line

Test command:
  “The test command is used to run tests. We haven’t written tests yet, so we can skip it for now.”

Git repo:
  you can provide github path to provide the connectivity.

keywords:
  “Keywords are tags that help people find your project.”
    Mainly when:
      You publish your package to npm
      Others search for it

author:
  It means, “Who created this project?”

license: [ISC (default), MIT (very popular, GPL (more restrictive))]
  “What are the rules for how others can use your code?”
  “License tells people what they are allowed to do with your project.”
  ISC is a default open-source license, It basically allows people to , Use your code, Modify it, Share it BUT With very few restrictions
```

_NOTE: you can bypass the prompts with default values by passing the `-y` flag to the `npm init` command_

This will create the `package.json` file in the project directory. Your instructor will examine the file with
you and examine the various sections (name, version, scripts, etc.).

## Install packages

Install the Dayjs package

```sh
npm i dayjs
```

What is the `dayjs` package used for? Check it out on the [npm registry](https://www.npmjs.com/package/dayjs).

Install a package for code formatting (we've used ESLint to this point, another great package is Prettier)

```sh
npm i --save-dev prettier
```

_NOTE: you can also use the `-D` in place of `--save-dev` flag to install a devDependency_

--save-dev = full (long version) && -D = shorthand (short version)

- (one dash) → short flags (usually 1 letter)
  -- (two dashes) → long, readable options
  “The double dash is used when we write the full name of an option. A single dash is used for short versions.”

Inspect the `package.json` file. What's changed (`dependencies` and `devDependencies`)? What's in the `node_modules` folder. Should `node_modules` be committed to GitHub? How can we prevent files/folders from being included in our GitHub repositories (HINT: `.gitignore`)?

Make the necessary update your project so that `node_modules` won't be included in your GitHub repository.

## Package use

Create a `main.js` file in the project directory. This isn't a typical front-end project, we are just exploring the world of packages, more on the topic of `import`ing and `export`ing will be covered in the next lesson.

“By default, Node uses 'require', but we are switching it to modern JavaScript (import) by adding type: module.”

Before you can use import in Node.js, you must tell Node to use ES Modules by adding "type": "module" in your package.json

The colon (:) means: “This key has this value.”

Import - This is a Keyword in JavaScript that means: “Bring something from another file or package”

import dayjs [here, dayjs is the variable name you give to the imported package, you will use this name in your code which usually is same as package name.]

from - This helps you to connect.
WHAT YOU WANT
WHERE IT COMES FROM

'dayjs'
This tells NODE, Go to "NODE MODULES" and find the package named 'dayjs'.

OVERALL meaning- import dayjs from 'dayjs';
“Import the dayjs package and store it in a variable called dayjs so I can use it.”
"JS is case sensitive and you can not do the typo error by putting d in capital. like Dayjs

```js
// main.js
import dayjs from 'dayjs';
```

const now = dayjs();
console.log("Current Date:", now.format("YYYY-MM-DD"));
console.log("Current Time:", now.format("HH:mm:ss"));

````

## Execute the `main.js` script

From the terminal, execute the script using node:

```sh
node main.js
````

Does it work? What happened?

The `main.js` file is using ES Modules, which aren't enabled by default in node. Let's configure the project to make use of ES Modules. Update the `package.json` file for module support. Insert `"type": "module",` after the `main` property:

```json
{
  "name": "lesson-13-complete",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module"
  ...}
```

npm - node package manager
npx - node package eXecute

Now, try to run the script again. You should see the current date and time displayed in the terminal.

Let's format our file with prettier. Run the following in the terminal:

```sh
npx prettier --write .   // . represents ability to write in current folder.
```

The above command will format and write all updates to files in the current directory `./`. Go ahead and delete the semi-colons in the `main.js` file and run the prettier command again, what happens?

_NOTE: the `npx` command is used to run node scripts (i.e., scripts installed in the local project) that have not been globally installed._

Prettier can be configured to work with your text editor as well, let's get rid of those double quotes and enforce the use of semicolons. Create the following config file for prettier in the project directory:

```json
// .prettierrc       // it is a configuration or setting file where we define formatting rules for our code. rc stands for old naming convention that means run commands
{
  "useTabs": false, // It converts: TAB → spaces if TABS have been used by user.
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}

/*  
Prettier will use its built-in default settings if you DON’T create .prettierrc
//    Where are these settings?
//       Not in your project
//       Not visible as a file
//       They are inside the Prettier package itself (in node_modules/prettier)

// “Prettier uses your .prettierrc settings AND fills the rest with defaults.”
// “Prettier always has rules — either its defaults or your custom ones.”
*/
```

After saving the config file, run the prettier command again to see any updates to the formatting. You can add and change many settings in the file, visit the prettier config settings [options page](https://prettier.io/docs/options) for more.

## Creating and using scripts

The commands we ran above will likely be run many times as work on our project. We can create `scripts` to make running redundant commands easier. Update the `package.json` scripts section with the following:

```json
...
  "scripts": {
    "start": "node main.js",
    "format": "prettier --write ."
  }
...
```

Quick Summary

“Node runs your code, npm installs packages, and npx runs tools.”

Feature node npm npx
Runs JS files yes No No
Installs packages No Yes No
Runs tools No Yes (scripts) Yes
Uses node_modules yes Yes Yes

    npx is used in terminal
    npm run scripts automatically find packages
    No need to write npx inside scripts, Inside npm scripts, we don’t need npx because npm automatically knows how to run installed packages.”
    npm handles it behind the scenes
    npm does not automatically know how to run JavaScript files, It only runs the exact command you give it

We won't be using the `test` script, so it can be removed. What we now have are two scripts that can be used to run and format our project, respectively.

_NOTE: notice that npx is not included in the script text above. Scripts are assumed to be run in the local project and so don't need the `npx` command_

To run the commands, you use the `npm run <script>` syntax:

```sh
npm run format
npm run start
```

The `start` is a special script name that can be invoked without the `run` flag (`test` is also special in this way). So, the following will also work for the `start` script:

```sh
npm start
```

Neat!

## Managing packages

Sometimes, packages will receive updates that could impact your project. You can update a single package or all packages witht it. Here, we'll update dayjs using the following command:

```sh
npm update dayjs
```

The `update` command will only update minor changes, not major ones. To make an upgrade to a new major version of your package, use the `upgrade` command:

```sh
npm upgrade dayjs
```

The package should already be it's latest major version so running the above command should have no effect.

If you decide you no longer need a package, or no longer have a use for one already installed, you can uninstall them using the `uninstall` command. Let't install and remove an unnecessary package:

```sh
npm i foobar
```

Check `package.json` for the update. Now let's uninstall:

```sh
npm uninstall foobar
```

The package is now removed from the project.

## Push to your GitHub workbook repo

Once you're done making your own custom updates to the project, stage your files, commit your work, and push to the remote repository.

1. Open a terminal in VS Code
2. Stage all updated and created files:

```sh
git add .
```

3. Commit the changes:

```sh
git commit -m 'Lesson 11 Example'
```

4. Push your changes to the remote workbook repository:

```sh
git push origin main
```
