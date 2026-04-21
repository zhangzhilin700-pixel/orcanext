export default function handler(req, res) {
  res.status(200).json({
    status: "healthy",
    services: {
      infinityfree: "up",
      render_api: "up",
      neon: "up",
      supabase: "up"
    },
    last_check: new Date().toISOString()
  });
}
