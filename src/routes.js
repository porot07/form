const host = 'http://192.168.1.241:8999';

export default {
  auth: () => [host, 'auth/'].join('/'),
  groups: () => [host, 'v1', 'groups/'].join('/'),
  registrations: () => [host, 'v1', 'registrations/'].join('/'),
  pay: (id) => [host, 'v1', 'registrations', id, 'pay/'].join('/'),
};
