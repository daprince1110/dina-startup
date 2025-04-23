export default function AuthFormHeader({ title, subtitle }) {
    return (
      <div className="auth-header">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <style jsx>{`
          .auth-header {
            text-align: center;
            margin-bottom: 2rem;
          }
          h1 {
            font-size: 1.8rem;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 0.5rem;
          }
          p {
            color: #718096;
            font-size: 1rem;
          }
        `}</style>
      </div>
    )
  }