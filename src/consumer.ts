import { RabbitMQAdapter } from "./queue";

async function main() {
  const queue = new RabbitMQAdapter();
  await queue.connect();
  await queue.consume("my-exchange.queue-1", async function (message: any) {
    console.log(message);
  });
  await queue.consume("my-exchange.queue-2", async function (message: any) {
    console.log(message);
  });
}

main();
