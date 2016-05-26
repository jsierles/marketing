---
title: Installing Command Line Interface
---

## install our CLI
```sh
$ npm install -g reploy-cli
```

### reploy setup
Setup your credentials by running the follow command. You can retrieve on the settings page, or copy it to your clipboard by clicking here.

 ```sh
 $ reploy setup
 ```

### reploy create
 Now let’s go ahead a create a Reploy app with your new account.
 Run the follow command from the root directory of your app.

```
$ reploy create -n MyApp
```

> Note: You’ll notice a .reploy config file in your apps root directory that contains the ID of your app on our system.
Make sure to check this into your version control for use with continuous integration.
Make sure to update the app-id if it changes for any reason.

### reploy push-build
OK! Now we’re ready to push our build up to Reploy!

If you’d like to use our automated build process, use the following commands.

#### To push an iOS release build:
```
$ reploy push-build -p ios
```

####To push an Android release build:
```
$ reploy push-build -p android
```
