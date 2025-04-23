export default function AuthFormButton({ children, isLoading }) {
  return (
    <button className="auth-button" disabled={isLoading}>
      {isLoading ? (
        <span className="loading-dots">
          <span>.</span><span>.</span><span>.</span>
        </span>
      ) : (
        children
      )}
      <style jsx>{`
        .auth-button {
          width: 100%;
          padding: 0.9rem;
          background: linear-gradient(to right, var(--primary), #764ba2);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .auth-button:hover {
          transform: translateY(-2px);
        }
        .auth-button:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }
        .loading-dots span {
          animation: blink 1.4s infinite both;
        }
        .loading-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }
        .loading-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes blink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </button>
  )
}