# Technical design

## Frontend

I suggest to use React on the project because of the skills of the company.
Hopefully the initial funtionality will be expanded so I suggest to use an initial design framework.

Recommend to use Bootstrap for that because of it's popularity and easy to use build. 
Another considerable framework is Foundation.
Both of them is responsive, ligthweight, and easy to use. You can chek them in the following links:

* https://getbootstrap.com/docs/5.1/getting-started/introduction/
* https://get.foundation/sites/docs/

We should use Facebook's Create React App (CRA) https://github.com/facebook/create-react-app
This uses varoius tools that is useful for create modern application.
Provides:
* Webpack - module bundler,
* Works with ES6 - so we can use ES6 features.
* Autoprefixer - adds special browser prefix to css when creating style with preprocessor
* Jest - test runner

As css preporcessor we should use sass. CRA suggests to use sass. 

https://create-react-app.dev/docs/adding-a-sass-stylesheet/

Consider to use redux or mobx as state container because if the application will grow bigger it will be a huge advantage to have the profile datas on the global state.
I recommend to use typescript because itt will be really helpful on refactoring and 

We should aware to keep thing separated in directories following some easy rules like:
    a, The naming should be consistent and we should know where to create files and folders
    b, Keep revelant files in a single folder, like component, test, style, type etc.
    c, Core UI elements like Button, List, Profile list element etc. should kept in a separate directory
    d, Keep different business logic separated from each other in example redux store from components

Example folder structure:

* public
* src
  * components
    * Profile
      * profile.tsx
      * profile.spect.tsx
      * styles.scss
      * types.ts
    * ProfileDetails/
      * ProfileDetailComponent1
      * ProfileDetailComponent2
      * ...
    * ProfileList
      * ...
    * pages
      * ProfileList
      * ProfileDetails
* core
* constants
* languages
* redux
* services

This will give us a more separated, component based approach. It is more trasparent than the traditional approach.

## Backend

To the backend part I suggest to use **Nodejs**. This allows us to use javascript code for backend. We can use **Express** to build backend REST API. For database I suggest to use **MongoDB** and add **Mongoose** to connect to the backend.

We should create the backend URI like this:

|Type|URI|Description|
| - | - | - |
| GET | /profiles | this provides all the profile data in JSON format | 
| GET | /profile/{id} | this get one single profile data |
| POST | /profile/{id} | update an existing profile |
| DELETE | /profile/{id} |Delete an existing profile |

We should get and post data to the server in JSON format. This is needed because in this way we can work with small payloads. We can update the `/profiles` call with a parameter to determine how many profiles should we get and create pagination or lazy load for the faster pageload. 
