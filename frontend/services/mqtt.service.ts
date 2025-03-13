import mqtt, { MqttClient } from "mqtt";

interface UserData {
  username: string;
  aiokey: string;
  feeds: string[];
}

let client: MqttClient | null = null;

export const mqttService = {
  connect: (userData: UserData) => {
    if (!userData.username || !userData.aiokey || !userData.feeds) {
      console.error(`Invalid user data`);
      return;
    }
    client = mqtt.connect("mqtts://io.adafruit.com", {
      username: userData.username,
      password: userData.aiokey,
    });

    client.on("connect", () => {
      console.log("Connected to MQTT");

      userData.feeds.forEach((feed) => {
        const topic = `${userData.username}/feeds/${feed}`;
        client?.subscribe(topic, (err) => {
          if (!err) {
            console.log(`Subscribed to ${topic}`);
          } else {
            console.error(`Error subscribing:`, err);
          }
        });
      });
    });

    client.on("message", (topic: string, message: Buffer) => {
      console.log(`Received message from ${topic}: ${message.toString()}`);
    });
  },

  disconnect: () => {
    if (client) {
      client.end();
    }
  },

  publish: (topic: string, message: string) => {
    if (client) {
      client.publish(topic, message, (err) => {
        if (err) {
          console.error(`Publish error: `, err);
        } else {
          console.log(`Message sent to ${topic}: ${message}`);
        }
      });
    }
  },
};
