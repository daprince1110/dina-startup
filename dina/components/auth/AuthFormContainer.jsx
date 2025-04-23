import HomeButton from './HomeButton'

export default function AuthFormContainer({ children }) {
  return (
    <div className="auth-container">
      <HomeButton/>
      <div className="gradient-bg"></div>
      <div className="form-wrapper">
        {children}
      </div>
      <style jsx global>{`
        :root {
          --primary: #667eea;
          --primary-dark: #5a67d8;
        }
      `}</style>
      <style jsx>{`
        .auth-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .gradient-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--primary) 0%, #764ba2 100%);
          z-index: -1;
        }
        .form-wrapper {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          width: 100%;
          max-width: 450px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  )
}