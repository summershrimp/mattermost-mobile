import {
    Notification,
    NotificationAction,
    NotificationBackgroundFetchResult,
    NotificationCategory,
    NotificationCompletion,
    Notifications,
    NotificationTextInput,
    Registered,
} from 'react-native-notifications';

import { NativeAppEventEmitter, Alert }  from 'react-native';

export var receiveRemoteNotificationSub = NativeAppEventEmitter.addListener(
    'receiveRemoteNotification',
    (notification) => {
        switch (notification.type) {
            case "cid":
                Alert.alert('初始化获取到cid',JSON.stringify(notification))
                break;
            case 'payload':
                Alert.alert('payload 消息通知',JSON.stringify(notification))
                break
            case 'cmd':
                Alert.alert('cmd 消息通知', 'cmd action = ' + notification.cmd)
                break
            case 'notificationArrived':
                Alert.alert('notificationArrived 通知到达',JSON.stringify(notification))
                break
            case 'notificationClicked':
                Alert.alert('notificationArrived 通知点击',JSON.stringify(notification))
                break
            default:
                break
        }
    }
);

export var clickRemoteNotificationSub = NativeAppEventEmitter.addListener(
    'clickRemoteNotification',
    (notification) => {
        Alert.alert('点击通知',JSON.stringify(notification))
    }
);