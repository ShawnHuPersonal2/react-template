'use strict';
import {OrderedSet} from 'immutable';


const all = Object.freeze({download: 'download', feature: 'feature', gallery: 'gallery',
  group: 'group', help: 'help', chat: 'chat', notification: 'notification', login: 'login', avatar: 'avatar'});
export const anonymous = OrderedSet.of(all.download, all.feature, all.gallery, all.group, all.help, all.login, all.avatar);
export const authenticated = OrderedSet.of(all.download, all.feature, all.gallery, all.group, all.help, all.chat, all.notification, all.avatar);
export default all;
