# Cordova/PhoneGap Workshop

[Apache Cordova](http://cordova.io) is a opensource tool that allows you to build mobile apps using html, css and javascript. It gives you access to device sensors (such as geolocation, accelerometer, camera, etc) via a javascript interface. Supports iOS, Android, Windows Phone, Blackberry, Firefox OS, Ubuntu, Windows and Browser platforms. 

[Adobe PhoneGap](http://phonegap.com) is a opensource distribution of Apache Cordova. Essentially Cordova with a few different tools and resources.

---
# Requirements

## Install Cordova

`sudo npm install -g cordova`. You may need to run the command as an administrator (sudo) or change permissions of the directory. 

## Install PhoneGap

`sudo npm install -g phonegap`. 

## Setup for Android Development

* Download the Android SDK from [http://developer.android.com/sdk/installing/index.html?pkg=tools](http://developer.android.com/sdk/installing/index.html?pkg=tools) (sdk tools only). Extract it. Move it to your home directory (or wherever) .
* Add the tools to your path. 
    
    Open your bashrc or bash_profile in your favourite editor. I used the terminal editor nano below.
    `nano ~/.bashrc` or if it doesn't exist, try `nano ~/.bash_profile`.
    Add the following lines to your file (replace linux with macosx if you are using macosx)
    `export PATH=${PATH}:~/android-sdk-linux/tools`
    `export PATH=${PATH}:~/android-sdk-linux/platform-tools`
    If you didn't move your android sdk files to your home directory before, update the lines above to point to where you stored your android-sdk. 
* Reset your bash source with `source ~/.bashrc` (or source ~./bash_profile). Type `echo $PATH` to confirm that the tools and platform tools for Android are included in your path.
* Enter the command `android` in your terminal to open the android sdk manager. If this command fails due to missing java on your linux machine, install the openJDK with `sudo apt-get install openjdk-7-jdk`. For Mac OS, if it isn't installed by default, you will get a prompt to click more info to install java. Follow the instructions that open in your browser to install the JDK. Run the command `android` in your terminal once done. 
* In the Android SDK Manager, scroll down to Android 4.4.2 (API 19) and check the SDK Platform. Install the packages that are checked (including the default ones).
* Install ant via `sudo apt-get install ant` (linux). For Mac OSX, follow the instuctions at http://stackoverflow.com/questions/3222804/how-can-i-install-apache-ant-on-mac-os-x (probably install homebrew followed by brew install ant)

## Setup for iOS Development (Mac Only)

* Install Xcode from the mac app store. 

---
# Creating a Application

Navigate to a directory you want to create you application in terminal. Ex ~/Documents/dev

`cordova create helloWorld com.myapp.helloworld helloworld`

Navigate to your newly created directory. Add a platform to your project.

`cordova platform add android`

In the root of your project,  you should see the following directories. 

* config.xml - stores information about your applications
* www - This is where you create your apps with html, css and javascript
* platforms - These are the platform specific files. Every platform you add to your project (ex, android, ios) will have a directory here. The root www directory will get copied into each of these folders when we do a build and run later
* hooks - Not needed for now. You can add scripts in here that run before or after builds and runs

Lets try building the app

`cordova platform build android`

Once that is successful, lets move on to deploying!


---
# Deploying to your Device or Emulator

## Android

### Device

Enable USB debugging. To access these settings, open the Developer options in the system settings. On Android 4.2 and higher, the Developer options screen is hidden by default. To make it visible, go to Settings > About phone and tap Build number seven times. Return to the previous screen to find Developer options at the bottom.

Plug your device in. Type `adb devices` in your ter minal to confirm your device is listed.

Run `cordova run android` from the root of your cordova project. (ex helloWorld directory in our example). This should launch the helloworld app onto your device.

### Emulator

Create an android emulator with `android create avd -n hello -t 1 --abi default/x86`. 

Run `cordova emulate android` from within your cordova project to launch your app in the emulator.

## iOS

### Install iOS Sim

`npm install -g ios-sim`

### Simulator

`cordova run ios`

### Device

To launch on your iOS devices, you need to pay for a apple developer account ($100) and then setup provisioning profile for your device. More info at https://developer.apple.com/devcenter/ios/index.action. For today, we will just use the simulator.

__
# PhoneGap Developer App

If you have a windows phone, Android or iOS device, you can launch your apps onto your device by using the PhoneGap Developer App. Just search for it in your respective app stores on your devices. 

This will allow you to create and test apps without having to worry about provisioning profiles (iOS). 

Make sure your device and your laptop are on the same wifi network.

You can view the easy to follow instructions at http://app.phonegap.com/

Navigate to your cordova project and type

`phonegap serve`

This should give you an ip:port that the phonegap server is running on. Open up your phonegap developer app on your device and enter the ip:port that your server is listening too. 

You should now be able to see the hello world cordova app on your device.

As you make changes to your www directory, the app will auto update on your device. 

---
# Cordova Plugins

To access native features of the device, we need to install plugins! You can find plugins at http://plugins.cordova.io

Lets install the device plugin.

`cordova plugin add org.apache.cordova.device`

---
# Next Steps

* Learn to work with APIS
* Learn to build single page webapps
