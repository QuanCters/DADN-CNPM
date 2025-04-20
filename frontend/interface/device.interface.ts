import { deviceTypes } from "@/constants/deviceType";
export default interface Device {
  id: number;
  status: string;
  type: keyof typeof deviceTypes;
  room_name: string;
  feed: string;
}
