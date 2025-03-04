import ping, { PingConfig } from 'ping';

//Validate the host with a regex to verify it is an ip
//const hosts = ['172.16.30.234'];

export async function checkHost(
  hosts: string[],
  options?: PingConfig
) {
  try {
    for (const host of hosts) {
      const response = await ping.promise.probe(host, options);
      console.log(response);
    }
  } catch (error) {
    console.error(`Error pinging ${hosts}`, error);
  }
}
