import ping, { PingConfig, PingResponse } from 'ping';

//Validate the host with a regex to verify it is an ip
//const hosts = ['172.16.30.234'];

interface Options {
  hosts: string[];
  batchSize?: number;
  monitoring?: true;
  callback: (result: PingResponse) => Promise<void>;
  options?: PingConfig;
}

export async function checkHost({
  hosts,
  batchSize = 10,
  monitoring = true,
  callback,
  options
}: Options) {
  try {
    for (let i = 0; i < hosts.length; i += batchSize) {
      const batch = hosts.slice(i, i + batchSize);
      const results = await Promise.all(
        batch.map((host) => ping.promise.probe(host, options))
      );

      await Promise.all(results.map((result) => callback(result)));
    }

    if (monitoring) {
      setTimeout(() => {
        checkHost({
          hosts,
          batchSize,
          callback,
          monitoring,
          options
        });
      }, 30000);
    }
  } catch (error) {
    console.error(`Error pinging ${hosts}`, error);
  }
}
