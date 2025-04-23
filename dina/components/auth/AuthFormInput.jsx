export default function AuthFormInput({ 
    type, 
    name, 
    value, 
    onChange, 
    placeholder, 
    IconComponent 
  }) {
    return (
      <div className="input-group">
        {IconComponent && (
          <span className="input-icon">
            <IconComponent />
          </span>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="input-field"
        />
        <style jsx>{`
          .input-group {
            position: relative;
            margin-bottom: 1.5rem;
          }
          .input-icon {
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: #a0aec0;
          }
          .input-field {
            width: 100%;
            padding: 0.8rem 0.8rem 0.8rem 2.5rem;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            font-size: 1rem;
          }
          .input-field:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
          }
        `}</style>
      </div>
    )
  }