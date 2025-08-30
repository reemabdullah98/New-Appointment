export default function Footer() {
  return (
    <footer
      style={{
        background: '#93673bff',
        padding: '30px 20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        color: '#ebebebff',
      }}
    >
      <div style={{ maxWidth: '900px', margin: 'auto' }}>
        <h3 style={{ marginBottom: '10px', color: '#de9a52cd' }}>
          ✨MiraLush Beauty Center ✨
        </h3>
        <p
          style={{
            fontSize: '14px',
            marginBottom: '20px',
            lineHeight: '1.6',
          }}
        >
          At MiraLush Beauty Center, we bring wellness and style together.
          Book your appointments with ease and explore our range of high-quality beauty products.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            marginBottom: '20px',
          }}
        >
          <div>
            <h4 style={{ marginBottom: '5px', color: '#de9a52cd' }}>Contact</h4>
            <p style={{ margin: 0, fontSize: '14px' }}>📞 +49 123 456 789</p>
            <p style={{ margin: 0, fontSize: '14px' }}>✉️ info@miralush-beauty.de</p>
          </div>

          <div>
            <h4 style={{ marginBottom: '5px', color: '#de9a52cd' }}>Address</h4>
            <p style={{ margin: 0, fontSize: '14px' }}>MiraLush Beauty Center</p>
            <p style={{ margin: 0, fontSize: '14px' }}>Königsallee 12, 40212 Düsseldorf</p>
            <p style={{ margin: 0, fontSize: '14px' }}>Germany</p>
          </div>
        </div>

        <p style={{ fontSize: '13px', color: '#414040ff', marginTop: '15px' }}>
          © 2025 Elegance Beauty Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
