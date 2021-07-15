#import <UIKit/UIKit.h>
#import <RCTGetuiModule/RCTGetuiModule.h>
#if __IPHONE_OS_VERSION_MAX_ALLOWED >= __IPHONE_10_0
#import <UserNotifications/UserNotifications.h>
#endif
#define kGtAppId @"s0V5U1jh0AAXlluLx1w316"
#define kGtAppKey @"9pZdPYWDSj70NnL2I7RXX8"
#define kGtAppSecret @"NVcaSKj6ku61BejknM0WU3"

#import "RNNotifications.h"

@interface AppDelegate : UIResponder <UIApplicationDelegate,UNUserNotificationCenterDelegate,GeTuiSdkDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
