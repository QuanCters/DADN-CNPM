import mqtt, { MqttClient } from "mqtt";
import Device from "@/interface/device.interface";

class MqttService {
  private client: MqttClient | null = null;

  connect(
    home_name: string,
    aiokey: string,
    devices: Device[],
    OnMessageCallback: (topic: string, message: string) => void
  ): MqttClient {
    if (this.client) {
      return this.client;
    }

    this.client = mqtt.connect("mqtt://io.adafruit.com", {
      username: home_name,
      password: aiokey,
    });

    this.client.on("connect", () => {
      console.log("Connected to Adafruit IO");
      devices.forEach((device) => {
        this.client?.subscribe(`${home_name}/feeds/${device.feed}`, (err) => {
          if (err) {
            console.log(`Can't subcribe to feed ${device.id}`);
          } else {
            console.log(`Subscribe to feed ${device.id} successfully`);
          }
        });
      });
    });

    this.client.on("message", (topic, message) => {
      OnMessageCallback(topic, message.toString());
    });

    return this.client;
  }

  disconnect(): void {
    if (this.client) {
      this.client.end();
      this.client = null;
      console.log("Disconnected MQTT");
    }
  }
}

export const mqttService = new MqttService();
