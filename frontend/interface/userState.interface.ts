import Device from "./device.interface";

export default interface UserState {
  homes: {
    home_id: number;
    home_name: string;
    serial_number: string;
    aio_key: string;
    manager_id: number;
    devices: Device[];
  }[];
  isAuthenticated: boolean;
  first_name: string | null;
  last_name: string | null;
  user_id: number | null;
}
