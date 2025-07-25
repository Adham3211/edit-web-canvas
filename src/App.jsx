import React from 'react'

function App() {
  // Redirect to the main HTML page
  React.useEffect(() => {
    window.location.href = '/index.html'
  }, [])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Tajawal, sans-serif',
      direction: 'rtl'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2>جاري التحويل للموقع الجديد...</h2>
        <p>إذا لم يتم التحويل تلقائياً، <a href="/index.html">اضغط هنا</a></p>
      </div>
    </div>
  )
}

export default App
