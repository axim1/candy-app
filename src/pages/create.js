import { useState } from 'react';
import Link from 'next/link';

export default function Create() {
  const [selectedEthnicity, setSelectedEthnicity] = useState(null);

  const ethnicities = [
    { name: 'Caucasian', image: '/ethnicity1.png' },
    { name: 'Black', image: '/ethnicity2.png' },
    { name: 'Asian', image: '/ethnicity3.png' },
    { name: 'Latina', image: '/ethnicity4.png' },
    { name: 'Arab', image: '/ethnicity5.png' }
  ];

  return (
    <div className="container">
      <h2>Select Ethnicity</h2>
      <div className="ethnicity-grid">
        {ethnicities.map((ethnicity, index) => (
          <div
            key={index}
            className={`ethnicity-card ${selectedEthnicity === ethnicity.name ? 'selected' : ''}`}
            onClick={() => setSelectedEthnicity(ethnicity.name)}
          >
            <img src={ethnicity.image} alt={ethnicity.name} />
            <p>{ethnicity.name}</p>
          </div>
        ))}
      </div>

      {selectedEthnicity && (
        <Link href="/next-step">Next
          {/* <a className="next-button">Next</a> */}
        </Link>
      )}

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .ethnicity-grid {
          display: flex;
          justify-content: space-around;
          width: 100%;
        }

        .ethnicity-card {
          width: 150px;
          padding: 10px;
          cursor: pointer;
        }

        .ethnicity-card.selected {
          border: 2px solid #f72b63;
        }

        .next-button {
          background-color: #f72b63;
          padding: 1rem 2rem;
          color: white;
          border-radius: 5px;
          font-size: 1.2rem;
          text-transform: uppercase;
          cursor: pointer;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
}
