export default function AuthError({ error }) {
  return (
    <div className="error-message">
      {error}
      <style jsx>{`
        .error-message {
          color: #e53e3e;
          background: #fee2e2;
          padding: 0.8rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          text-align: center;
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}