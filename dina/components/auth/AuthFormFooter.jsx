'use client'
import ArrowIcon from './icons/ArrowIcon'
import styles from '@/app/login/styles.module.css'

export default function AuthFormFooter({ 
  text, 
  linkText, 
  onLinkClick 
}) {
  return (
    <div className={styles.footer}>
      <button 
        onClick={onLinkClick}
        className={styles.linkButton}
      >
        <ArrowIcon size={16} />
        <span>{linkText}</span>
      </button>
      <span className={styles.footerText}>{text}</span>
    </div>
  )
}