import styles from './styles.module.css'

export default function LoginLayout({ children }) {
  return (
    <div className={styles.container}>
      {children}
      {/* Decorative floating elements */}
      <div style={{
        position: 'absolute',
        width: '100px',
        height: '100px',
        background: 'rgba(102, 126, 234, 0.1)',
        borderRadius: '20px',
        top: '20%',
        left: '10%',
        transform: 'rotate(45deg)',
        animation: 'float 8s ease-in-out infinite',
        animationDelay: '0.5s'
      }}></div>
      <div style={{
        position: 'absolute',
        width: '150px',
        height: '150px',
        background: 'rgba(118, 75, 162, 0.1)',
        borderRadius: '30px',
        bottom: '15%',
        right: '15%',
        transform: 'rotate(-15deg)',
        animation: 'float 10s ease-in-out infinite'
      }}></div>
    </div>
  )
}