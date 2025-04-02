export default interface ScheduleType {
  action: "on" | "off";
  action_day: string;
  action_time: string;
  device_id: number;
  is_enabled: boolean;
  value: number;
}
