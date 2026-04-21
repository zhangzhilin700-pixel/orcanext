export default function Home() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a2f1f 0%, #051a0e 100%)',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        fontSize: '8rem',
        animation: 'swim 2s ease-in-out infinite',
      }}>
        🐋
      </div>
      <p style={{ color: '#FFD700', marginTop: '20px' }}>虎鯨兄弟 · 天啟商</p>
      <style>{`
        @keyframes swim {
          0% { transform: translateX(-20px); }
          50% { transform: translateX(20px); }
          100% { transform: translateX(-20px); }
        }
      `}</style>
    </div>
  );
}
