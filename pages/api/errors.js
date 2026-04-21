export default function handler(req, res) {
  const errors = [
    { id: 1, time: "2026-04-21 08:00", level: "WARN", message: "ESP32 連線不穩" },
    { id: 2, time: "2026-04-20 23:15", level: "ERROR", message: "溫度超過 35°C" },
    { id: 3, time: "2026-04-20 14:30", level: "INFO", message: "LINE 警報發送成功" }
  ];
  res.status(200).json(errors);
}
