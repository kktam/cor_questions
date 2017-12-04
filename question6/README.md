# COR Question 6

## Question

> I am developing a mobile app to run on iPhones and Android phones that would be able to
> receive push notifications. What do I need to achieve this?

## Answer

1. The app must be configured and registered with the Apple Push Notification Service (APNS) to receive push notifications upon every start-up.
2. A server must send a push notification to APNS directed to specific devices.
3. The app must receive the push notification; it can then perform tasks in the application delegate.

### Steps - Enabling the Push Notification Service

In Apple Developer program

1. create an App ID in your developer account that has the push notification entitlement enabled.

| Notification entitlement key |	Capability |
| --- | --- |
| aps-environment | Receive push notifications in iOS |
| com.apple.developer.aps-environment | Receive push notifications in macOS |

This information can be found in [Apple documentation](https://developer.apple.com/library/content/documentation/Miscellaneous/Reference/EntitlementKeyReference/Chapters/EnablingLocalAndPushNotifications.html)

In a XCode project

1. Go to App Settings -> General and change Bundle Identifier from blank.
2. In Signing right below App Settings, select development Team.
3. Go to App Settings -> Capabilities and switch "Push Notifications" to On.

In Code inside XCode project

1. Open AppDelegate.swift, add line ` import UserNotifications `.
2. Add method 

```
func registerForPushNotifications() {
  UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound, .badge]) {
    (granted, error) in
    print("Permission granted: \(granted)")
  }
}
```

3. Add ` registerForPushNotifications() ` as follows:

```
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  
  var window: UIWindow?
  
  func application(_ application: UIApplication,
                   didFinishLaunchingWithOptions launchOptions: 
                   [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    
    registerForPushNotifications()
    
    return true
  }

  func registerForPushNotifications() {
    UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound, .badge]) {
      (granted, error) in
      print("Permission granted: \(granted)")

      guard granted else { return }
      self.getNotificationSettings()
    }
  }  
}
```

