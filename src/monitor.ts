import ping, { PingConfig } from 'ping';

//Validate the host with a regex to verify it is an ip
//const hosts = ['172.16.30.234'];

export async function checkHost(
  hosts: string[],
  batchSize: number,
  options?: PingConfig
) {
  try {
    for (let i = 0; i < hosts.length; i += batchSize) {
      const batch = hosts.slice(i, i + batchSize);
      const results = await Promise.all(
        batch.map((host) => ping.promise.probe(host, options))
      );

      results.forEach((res, idx) => {
        console.log(
          `${batch[idx]}: ${res.alive ? '✅ Alive' : '❌ Down'}`
        );
      });

      console.log('Batch complete');
    }
  } catch (error) {
    console.error(`Error pinging ${hosts}`, error);
  }
}
