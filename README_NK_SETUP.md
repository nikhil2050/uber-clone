# Welcome to the Setup 👋

#### Reference:
Javascript Mastery - https://www.youtube.com/watch?v=kmy_YNhl0mw&list=PL6QREj8te1P54rZQx5AWWtFyf1hlznFjL

## React Native
Learn once, Write anywhere. \
Windows, Android, iOS, Any Browsers


## Steps to setup:
### 1. Create project:
Open Webstorm >> Select "Empty project" >> Select location >> "uber-clone"

### 2. Create Expo project
> npx create-expo-app@latest ./
> 
> cd <project-name>

### 3. Start project
> npm start

To clear cache:
> npx expo start -c

### 4. Setup NativeWind and Tailwind
Refer NativeWind documentation https://nativewind.dev/getting-started/installation

For SDK 50+ :
> npm install nativewind tailwindcss@^3.4.17 react-native-reanimated@3.16.2 react-native-safe-area-context

You may need to add tailwind.config.js(Using script), global.css, babel.config.js, metro.config.js

> ℹ️  INFO \
> From here onwards, replace ./global.css with the relative path to the CSS file you just created.

### 5. Setup ESLint and Prettier (recommended by Expo)
Refer ESLint documentation https://docs.expo.dev/guides/using-eslint/

For SDK 50+ :
> npx expo lint
> 
> npx expo install prettier eslint-config-prettier eslint-plugin-prettier -- --save-dev

> ℹ️  INFO \
> For Webstorm, configure ESLint 
> 1. Goto Settings
> 2. Languages and Frameworks
> 3. Javascript >> Code Quality Tools >> ESLint
> 4. Select option "Manual ESLint configuration" (~/AdvancedComputing/ProjectsWebstorm/uber-clone/node_modules/eslint)
> 5. Select "Run eslint --fix on save"
> 6. Goto Tools
> 7. Actions on Save
> 8. Verify "Run eslint --fix" is selected
>
> For Webstorm, configure Prettier
> 1. Goto Settings
> 2. Languages and Frameworks
> 3. Javascript >> Prettier
> 4. Select option "Manual Prettier configuration" (~/AdvancedComputing/ProjectsWebstorm/uber-clone/node_modules/prettier)
> 5. Select "Run on 'Reformat Code' action"
> 6. Select "Run on save"
> 7. Goto Tools
> 8. Actions on Save
> 9. Verify "Run eslint --fix" is selected












## Setup Serverless Postgres DB 
Signup or Login on link: https://neon.tech
Select Project name, Postgres Version, Cloud Service, Region