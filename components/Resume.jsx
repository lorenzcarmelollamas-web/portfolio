'use client';

import { useState } from 'react';
import './Resume.css';

export default function Resume() {
  const [downloadClicked, setDownloadClicked] = useState(false);

  const handleDownload = () => {
    setDownloadClicked(true);
    // Create a simple text-based resume download
    const resumeContent = `
LORENZ C. LLAMAS
Collections & Account Operations Professional

Email: yourname@example.com
LinkedIn: linkedin.com/in/lorenz-llamas

===========================================
PROFESSIONAL SUMMARY
===========================================

After exploring customer service, technical support, and B2B sales, I am now fully committed to building my career in collections. My goal is to secure a permanent role in collections or account operations where I can apply my skills and grow into a leadership position.

===========================================
PROFESSIONAL EXPERIENCE
===========================================

COLLECTION SPECIALIST
HCLTech (Iron Mountain project)
December 2025 – June 2026

• Managed collections and accounts receivable
• Processed and tracked customer payments
• Communicated with customers regarding outstanding balances
• Maintained detailed records and reporting

B2B SALES ASSOCIATE
Movate for AT&T
May 2025 – November 2025

• Generated leads and closed B2B sales deals
• Maintained customer relationships and account management
• Achieved sales targets and quotas
• Gained valuable exposure to business operations

TECHNICAL SUPPORT SPECIALIST
Concentrix for AT&T
August 2024 – May 2025

• Provided technical support to AT&T customers
• Troubleshooted technical issues and resolved customer problems
• Maintained high customer satisfaction ratings
• Documented and escalated complex issues

CUSTOMER SERVICE & RETAIL SUPPORT
TELUS International (Amazon)
December 2022 – January 2024

• Handled customer inquiries and complaints
• Processed orders and returns
• Maintained customer service standards
• Developed strong communication skills

===========================================
CORE SKILLS
===========================================

✓ Collections and Accounts Receivable
✓ Customer Service and Communication
✓ Technical Support
✓ B2B Sales
✓ Salesforce (Intermediate)
✓ Account Operations
✓ Customer Relationship Management
✓ Problem Solving

===========================================
`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Lorenz_Llamas_Resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <section id="resume" className="resume-section">
      <h2>📄 Resume</h2>
      <div className="resume-container">
        <div className="resume-preview">
          <div className="resume-content">
            <div className="resume-header">
              <h3>LORENZ C. LLAMAS</h3>
              <p>Collections & Account Operations Professional</p>
              <div className="resume-contact">
                <span>📧 yourname@example.com</span>
                <span>🔗 linkedin.com/in/lorenz-llamas</span>
              </div>
            </div>

            <div className="resume-section-item">
              <h4>PROFESSIONAL SUMMARY</h4>
              <p>
                After exploring customer service, technical support, and B2B sales, I am now fully committed to building my career in collections. My goal is to secure a permanent role in collections or account operations where I can apply my skills and grow into a leadership position.
              </p>
            </div>

            <div className="resume-section-item">
              <h4>CORE COMPETENCIES</h4>
              <ul>
                <li>Collections and Accounts Receivable</li>
                <li>Customer Service & Communication</li>
                <li>Technical Support</li>
                <li>B2B Sales</li>
                <li>Salesforce (Intermediate)</li>
                <li>Account Operations</li>
              </ul>
            </div>
          </div>

          <button 
            className={`download-btn ${downloadClicked ? 'clicked' : ''}`}
            onClick={handleDownload}
          >
            {downloadClicked ? '✓ Downloaded!' : '⬇ Download Resume'}
          </button>
        </div>
      </div>
    </section>
  );
}
