import { checkHost } from './monitor';

checkHost(['172.16.30.10', '172.16.30.15'], {
  timeout: 2,
  min_reply: 10
});
