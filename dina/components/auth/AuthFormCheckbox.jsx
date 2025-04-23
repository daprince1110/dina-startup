'use client'
import styles from '../../signup/styles.module.css'

export default function AuthFormCheckbox({ 
  id, 
  checked, 
  onChange, 
  label, 
  linkText1, 
  onLink1, 
  linkText2, 
  onLink2 
}) {
  return (
    <div className={styles.checkboxGroup}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={styles.checkbox}
      />
      <label htmlFor={id} className={styles.checkboxLabel}>
        {label}{' '}
        {linkText1 && (
          <a href="#" className={styles.checkboxLink} onClick={onLink1}>
            {linkText1}
          </a>
        )}
        {linkText2 && (
          <>
            {' and '}
            <a href="#" className={styles.checkboxLink} onClick={onLink2}>
              {linkText2}
            </a>
          </>
        )}
      </label>
    </div>
  )
}