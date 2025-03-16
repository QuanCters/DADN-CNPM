export default interface Device {
  id: number;
  status: string;
  type: string;
  power_rating: string;
  room_name: string;
  password: string | null;
  serial_number: string;
  feed: string;
}
