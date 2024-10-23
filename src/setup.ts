import amqp from "amqplib";

async function main() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();
  await channel.assertExchange("my-exchange", "direct", { durable: true });
  await channel.assertQueue("my-exchange.queue-1", { durable: true });
  await channel.assertQueue("my-exchange.queue-2", { durable: true });
  await channel.bindQueue("my-exchange.queue-1", "my-exchange", "");
  await channel.bindQueue("my-exchange.queue-2", "my-exchange", "");
  await connection.close();
}

main();
