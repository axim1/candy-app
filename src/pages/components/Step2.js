import Image from 'next/image';

export default function Step2({ formData, setFormData }) {
  const ethnicities = [
    { id: 'caucasian', label: 'Caucasian', image: '/images/step2/candy10.webp' },
    { id: 'black', label: 'Black', image: '/images/step2/candy11.webp' },
    { id: 'asian', label: 'Asian', image: '/images/step2/candy12.webp' },
    { id: 'latina', label: 'Latina', image: '/images/step2/candy13.webp' },
    { id: 'arab', label: 'Arab', image: '/images/step2/candy14.webp' },
  ];

  return (
    <div className="step">
      <h2 className="step-title">Choose Ethnicity</h2>

      <div className="ethnicity-options">
        {ethnicities.map((ethnicity) => (
            <div
  key={ethnicity.id}
  style={{ opacity: formData?.ethnicity && formData?.ethnicity !== ethnicity.id ? 0.4 : 1 }}
  className={`ethnicity-card ${formData?.ethnicity === ethnicity.id ? 'selected' : ''}`}
  onClick={() => setFormData({ ...formData, ethnicity: ethnicity.id })}
>

            <div className="image-wrapper">
              <Image src={ethnicity.image} alt={ethnicity.label} layout="fill" objectFit="cover" />
              <div className="fade-overlay"></div>
            </div>
            <span className="label">{ethnicity.label}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          border-radius: 10px;
          width: 100%;
        //   max-width: 500px;
          color: white;
          font-family: 'Arial', sans-serif;
        }

        .step-title, .sub-title {
            font-size: 20px;
            margin-bottom: 1.5rem;
            color: #71717A;
            text-align: center;
            font-weight: lighter;
        }
        
        .ethnicity-options {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-bottom: 2rem;
        }

        .ethnicity-card {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #212121;
          border-radius: 20px;
          margin-bottom: 15px;
          border: 4px solid transparent;
          cursor: pointer;
          position: relative;
          height: 80px;
          overflow: hidden;
          transition: opacity 0.3s ease, background-color 0.3s ease;
        }

        .ethnicity-card.selected {
          border-color: #ff5d88;
        }

        /* Darken unselected cards */
        .ethnicity-card:not(.selected) {
          opacity: 0.4;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          overflow: hidden;
        }

        .image-wrapper img {
          object-fit: cover;
        }

        /* Fade-to-right effect */
        .fade-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
        }

        .label {
          position: absolute;
          right: 15px;
          top: 35px;
          background-color: #333;
          padding: 12px 12px;
          border-radius: 20px;
          font-size: 0.9rem;
          color: #ffffff;
        }

      `}</style>
    </div>
  );
}
