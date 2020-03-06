const host = 'http://192.168.1.241:8999';

export default {
  auth: () => [host, 'auth/'].join('/'),
  groups: () => [host, 'v1', 'groups/'].join('/'),
};
