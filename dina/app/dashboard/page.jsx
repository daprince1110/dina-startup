'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle, X } from 'react-feather'
import './page.css'

export default function DashboardPage() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [sectionCompleted, setSectionCompleted] = useState({
    financial: false,
    markets: false,
    inventory: false,
    agenda: false
  })
  const [formData, setFormData] = useState({
    financial: {},
    markets: {},
    inventory: null,
  })

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.localStorage.getItem('isAuthenticated')) {
      router.push('/login')
    }
  }, [router])

  const handleSignOut = () => {
    window.localStorage.removeItem('isAuthenticated')
    router.push('/login')
  }

  const handleSectionToggle = (section) => {
    setActiveSection(activeSection === section ? null : section)
    setCurrentStep(0)
  }

  const handleBack = (e) => {
    e?.stopPropagation()
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    } else {
      setActiveSection(null)
    }
  }

  const completeSection = (section) => {
    setSectionCompleted(prev => ({ ...prev, [section]: true }))
    handleSectionToggle(section)
  }

  // Financial Section Content
  const renderFinancialContent = () => (
    <div className="section-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={() => handleSectionToggle('financial')}>
        <X size={24} />
      </button>
      
      {currentStep === 0 ? (
        <div className="form-step">
          <h2>Business Classification</h2>
          <div className="option-grid">
            <div className="option-card" onClick={() => setCurrentStep(1)}>
              <h3>Startup</h3>
              <p>Company less than 3 years old</p>
            </div>
            <div className="option-card" onClick={() => setCurrentStep(2)}>
              <h3>Established Business</h3>
              <p>Company 3+ years old</p>
            </div>
          </div>
        </div>
      ) : currentStep === 1 ? (
        <div className="form-step">
          <h2>Startup Details</h2>
          <div className="form-group">
            <label>Funding Stage</label>
            <select>
              <option>Pre-seed</option>
              <option>Seed</option>
              <option>Series A</option>
            </select>
          </div>
          <button className="primary-button" onClick={() => completeSection('financial')}>
            Submit
          </button>
          <button className="secondary-button" onClick={handleBack}>
            Back
          </button>
        </div>
      ) : (
        <div className="form-step">
          <h2>Financial Documents</h2>
          <div className="upload-area">
            <input type="file" accept=".pdf,.xlsx" />
            <p>Upload financial statements</p>
          </div>
          <button className="primary-button" onClick={() => completeSection('financial')}>
            Upload
          </button>
          <button className="secondary-button" onClick={handleBack}>
            Back
          </button>
        </div>
      )}
    </div>
  )

  // Markets Section Content
  const renderMarketsContent = () => (
    <div className="section-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={() => handleSectionToggle('markets')}>
        <X size={24} />
      </button>
      <div className="form-step">
        <h2>Market Analysis</h2>
        <div className="form-group">
          <label>Industry Type</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>NAICS Code</label>
          <input type="text" />
        </div>
        <button className="primary-button" onClick={() => completeSection('markets')}>
          Submit
        </button>
      </div>
    </div>
  )

  // Inventory Section Content
  const renderInventoryContent = () => (
    <div className="section-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={() => handleSectionToggle('inventory')}>
        <X size={24} />
      </button>
      <div className="form-step">
        <h2>Inventory Management</h2>
        <div className="upload-area">
          <input type="file" accept=".csv,.xlsx" />
          <p>Upload inventory spreadsheet</p>
        </div>
        <button className="primary-button" onClick={() => completeSection('inventory')}>
          Upload
        </button>
      </div>
    </div>
  )

  // Agenda Section Content
  const renderAgendaContent = () => (
    <div className="section-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={() => handleSectionToggle('agenda')}>
        <X size={24} />
      </button>
      <div className="form-step">
        <h2>Schedule Management</h2>
        <div className="agenda-message">
          <p>Your request has been processed</p>
          <button className="primary-button" onClick={() => completeSection('agenda')}>
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  )

  const hasCompletedSection = Object.values(sectionCompleted).some(v => v)

  return (
    <div className="dashboard-container">
      <button className="sign-out-button" onClick={handleSignOut}>
        Sign Out
      </button>

      {hasCompletedSection && (
        <button 
          className="done-button"
          onClick={() => router.push('/analytics')}
        >
          View Analytics
        </button>
      )}

      <div className="grid-layout">
        {['financial', 'markets', 'inventory', 'agenda'].map((section) => (
          <div
            key={section}
            className={`grid-item ${section} ${activeSection === section ? 'active' : ''}`}
            onClick={() => !activeSection && handleSectionToggle(section)}
          >
            <div className="section-label">
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {sectionCompleted[section] && <CheckCircle className="checkmark" />}
            </div>

            {activeSection === section && (
              <>
                {section === 'financial' && renderFinancialContent()}
                {section === 'markets' && renderMarketsContent()}
                {section === 'inventory' && renderInventoryContent()}
                {section === 'agenda' && renderAgendaContent()}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}