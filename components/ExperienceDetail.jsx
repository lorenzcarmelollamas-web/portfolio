'use client';

import { useState } from 'react';
import './ExperienceDetail.css';

export default function ExperienceDetail() {
  const experiences = [
    {
      title: 'Collection Specialist',
      company: 'HCLTech',
      project: 'Iron Mountain project',
      dates: 'Dec 2025 – Jun 2026',
      reason: 'I decided to pursue a stable, long-term collections role.',
      achievements: [
        'Managed collections and accounts receivable processes',
        'Processed and tracked customer payments',
        'Communicated with customers regarding outstanding balances',
        'Maintained detailed records and comprehensive reporting',
        'Achieved consistent payment collection targets'
      ]
    },
    {
      title: 'B2B Sales Associate',
      company: 'Movate',
      project: 'AT&T',
      dates: 'May 2025 – Nov 2025',
      reason: 'Sales gave me valuable exposure, but I realized I wanted to focus on collections.',
      achievements: [
        'Generated qualified leads and closed B2B sales deals',
        'Maintained strong customer relationships and account management',
        'Achieved monthly sales targets and exceeded quotas',
        'Gained valuable exposure to business operations',
        'Developed negotiation and closing skills'
      ]
    },
    {
      title: 'Technical Support Specialist',
      company: 'Concentrix',
      project: 'AT&T',
      dates: 'Aug 2024 – May 2025',
      reason: 'I wanted to move beyond technical support and closer to business operations.',
      achievements: [
        'Provided technical support to AT&T customers',
        'Troubleshot technical issues and resolved customer problems efficiently',
        'Maintained high customer satisfaction ratings (95%+)',
        'Documented and escalated complex issues appropriately',
        'Trained new team members on best practices'
      ]
    },
    {
      title: 'Amazon Customer Service & Retail Support',
      company: 'TELUS International',
      project: 'Amazon',
      dates: 'Dec 2022 – Jan 2024',
      reason: 'I wanted to explore opportunities outside customer service.',
      achievements: [
        'Handled customer inquiries, complaints, and escalations',
        'Processed orders, returns, and refunds accurately',
        'Maintained exceptional customer service standards',
        'Developed strong communication and problem-solving skills',
        'Achieved consistent positive customer feedback'
      ]
    }
  ];

  return (
    <section id="experience-detail" className="experience-section-enhanced">
      <h2>💼 Professional Experience Timeline</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="experience-card-enhanced">
              <div className="exp-header">
                <div>
                  <h3>{exp.title}</h3>
                  <p className="company-name">{exp.company}</p>
                  {exp.project && <p className="project-name">Project: {exp.project}</p>}
                </div>
                <span className="dates">{exp.dates}</span>
              </div>

              <div className="exp-reason">
                <strong>Why I moved on:</strong> {exp.reason}
              </div>

              <div className="exp-achievements">
                <strong>Key Achievements:</strong>
                <ul>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
