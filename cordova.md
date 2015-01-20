# Cordova/PhoneGap Workshop

[Apache Cordova](http://cordova.io) is a opensource tool that allows you to build mobile apps using html, css and javascript. It gives you access to device sensors (such as geolocation, accelerometer, camera, etc) via a javascript interfaced. Supports iOS, Android, Windows Phone, Blackberry, Firefox OS, Ubuntu, Windows, Browser platforms. 

[Adobe PhoneGap](http://phonegap.com) is a opensource distribution of Apache Cordova. Essentially Cordova with a few different tools and resources.

---
# Requirements

## Install Cordova

`sudo npm install -g cordova`. You may need to run the command as an administrator (sudo) or chagne permissions of the directory. 

## Install PhoneGap

`sudo npm install -g phonegap`. 

## Setup for Android Development

* Download the Android SDK from [http://developer.android.com/sdk/installing/index.html?pkg=tools](http://developer.android.com/sdk/installing/index.html?pkg=tools) (sdk tools only). Extract it. Move it to some other directory if you want.
* Add the tools to your path. Instructions at [https://help.ubuntu.com/community/AndroidSDK#Modifying_the_PATH_Environment_Variable](https://help.ubuntu.com/community/AndroidSDK#Modifying_the_PATH_Environment_Variable)
* Reset your bash source with `source ~/.bashrc`. Type `echo $PATH` to confirm that the tools and platform tools for Android are included in your path.
* Enter the command `android` in your terminal to open the android sdk manager. If this command fails due to missing java on your linux machine, install the openJDK with `sudo apt-get install openjdk-7-jdk`. Run the command `android` in your terminal once done. Mac OSX had the JDK installed by default.
* In the Android SDK Manager, scroll down to Android 4.4.2 (API 19) and check the SDK Platform. Install the packages that are checked (including the default ones).
* Install ant via `sudo apt-get install ant` (linux). For Mac OSX, follow the instuctions at http://stackoverflow.com/questions/3222804/how-can-i-install-apache-ant-on-mac-os-x


## Setup for iOS Development (Mac Only)

* Install Xcode from the mac app store. 

---
# Creating a Application

Navigate to a directory you want to create you application in terminal. Ex ~/Documents/dev

`cordova create helloWorld com.myapp.helloworld helloworld`

Naviagte to your newly created directory. Add a platform to your project.

`cordova platform add android`

---
# Deploying to your Device or Emulator

## Android

### Device

Enable USB debugging. To access these settings, open the Developer options in the system settings. On Android 4.2 and higher, the Developer options screen is hidden by default. To make it visible, go to Settings > About phone and tap Build number seven times. Return to the previous screen to find Developer options at the bottom.

Plug your device in. Type `adb devices` in your terminal to confirm your device is listed.

Run `cordova run android` from the root of your cordova project. (ex helloWorld directory in our example). This should launch the helloworld app onto your device.

### Emulator

Create an android emulator with `android create avd -n hello -t 1 --abi default/x86`. 

Run `cordova emulate android` from within your cordova project to launch your app in the emulator.

## iOS



__
# PhoneGap Developer App

If you have a windows phone, Android or iOS device, you can launch your apps onto your device by using the PhoneGap Developer App. Just search for it in your respective app stores on your devices. 

This will allow you to create and test apps without having to worry about provisioning profiles (iOS). 


---
# Cordova Plugins

---
# Next Steps

* Learn about building single page apps
* Interacting with an API




