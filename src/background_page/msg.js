import { msg, get } from 'mosi/core';

export const modeMsg = (dst, mode, action, arg) => msg(dst, 'modeMessage', {
  mode,
  action,
  arg
});

export const modeGet = (dst, mode, action, arg, timeout) => get(dst, 'modeMessage', {
  mode,
  action,
  arg
}, timeout);

export { meta } from 'mosi/core';
