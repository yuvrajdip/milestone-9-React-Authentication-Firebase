/* 
  * 1. visit: console.google.com 
  * 2. create project ( skip google analytics )
  * 3. Register app ( create config)
  * 4. install firebase : npm i firebase
  * 5. add config file to your project
  * 6. DANGER : do not publish or make firebase config to public by pushing those to github
  * 
  * 7. Go to Docs > Build > Authentication > Web > Get Started
  * 8. export app from the firebase.init.js file: export default app
  * 9. Login.jsx : import getAuth from firebase/Auth
  * 10. create const auth = getAuth(app)
  * 11. import googleAuthProvider and create a new provider
  * 12. use signInWithPopUp and and pass auth provider
  * 13. Activate sign in method (google, facebook)
*/