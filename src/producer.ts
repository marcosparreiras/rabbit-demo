import { RabbitMQAdapter } from "./queue";

async function main() {
  const queue = new RabbitMQAdapter();
  await queue.connect();
  const input = {
    id: "1",
    message: "Some demo",
  };
  await queue.publish("my-exchange", input);
}

main();
