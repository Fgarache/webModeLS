import React from 'react';

function AgendaSkeleton() {
  return (
    <>
      <style>
        {`
          .skeleton-pulse {
            animation: pulse-skeleton 1.5s ease-in-out infinite;
          }
          @keyframes pulse-skeleton {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
          }
          .skeleton-card {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 12px 14px;
            border-radius: 14px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
            margin-bottom: 6px;
          }
          .skeleton-line {
            height: 14px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
          }
          .skeleton-badge {
            height: 20px;
            border-radius: 6px;
            background: rgba(255, 255, 255, 0.1);
            width: 50px;
          }
          .skeleton-icon {
            width: 2.2rem;
            height: 2.2rem;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.1);
          }
        `}
      </style>
      <div className="skeleton-card skeleton-pulse">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', gap: '10px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div className="skeleton-line" style={{ width: '60%' }}></div>
              <div className="skeleton-badge"></div>
            </div>
            <div className="skeleton-line" style={{ width: '40%', height: '10px' }}></div>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div className="skeleton-icon"></div>
            <div className="skeleton-icon"></div>
            <div className="skeleton-icon"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgendaSkeleton;
