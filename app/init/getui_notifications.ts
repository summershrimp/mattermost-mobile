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

import { NativeEventEmitter, NativeModules, NativeAppEventEmitter, Alert }  from 'react-native';
import { EventsRegistry } from 'react-native-notifications/lib/dist/events/EventsRegistry';

export var receiveRemoteNotificationSub = NativeAppEventEmitter.addListener(
    'receiveRemoteNotification',
    (notification) => {
        var emitter = new NativeEventEmitter(NativeModules.RNEventEmitter)
        switch (notification.type) {
            case "cid":
                Alert.alert("cid get", notification)
                var msg: Registered = {deviceToken: notification.cid}
                emitter.emit('remoteNotificationsRegistered', msg)
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