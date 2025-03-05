import { checkHost } from './monitor.js';
import 'dotenv/config';
//import { config } from './config';
import { analyzeResults } from './notifier.js';
//------------------------------------//

import dotenv from 'dotenv';
dotenv.config();

export const config = {
  hosts: process.env.HOSTS?.split(','),
  smtpHost: process.env.SMTP_HOST,
  smtpPort: Number(process.env.SMTP_PORT),
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  emailTarget: process.env.EMAIL_TARGET
};

console.log(config);

checkHost({
  hosts: config.hosts!,
  callback: analyzeResults,
  options: {
    timeout: 2,
    min_reply: 5
  }
});
/*
async function main() {
  //checkResults
  for (const result of results) {
    if (!result.isAlive) {
      failedAPs.add(result.host);
      await sendNotification(result);
    }
  }

  logResults(results);

  const delay = failedAPs.size > 0 ? 10000 : 30000;
  setTimeout(main, delay);
}

async function sendNotification(result) {
  sendEmail(`${result.host} está caído a las ${hora}`);
}
*/
