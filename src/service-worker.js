/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';
// Your other import statements go here.

precacheAndRoute(self.__WB_MANIFEST);
// Your other SW code goes here.
