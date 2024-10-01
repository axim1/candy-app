import Image from 'next/image';

export default function Step1({ formData, handleInputChange, setFormData }) {
  const relationships = [
    {
      id: 'stepsister',
      label: 'Step Sister',
      icon: '/images/step1/candy05.svg',
    },
    {
      id: 'stepmom',
      label: 'Step Mom',
      icon: '/images/step1/candy06.svg',
    },
    {
      id: 'sexfriend',
      label: 'Sex Friend',
      icon: '/images/step1/candy07.svg',
    },
    {
      id: 'girlfriend',
      label: 'Girlfriend',
      icon: '/images/step1/candy08.svg',
    },
  ];

  return (
    <div className="step">
      <h2 className="step-title">Enter new name</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter a name"
        value={formData.name}
        onChange={handleInputChange}
        className="name-input"
      />

      <h3 className="sub-title">Choose relationship</h3>
      <div className="relationship-options">
        {relationships.map((relationship) => (
          <div
            key={relationship.id}
            style={{ opacity: formData.relationship && formData.relationship !== relationship.id ? 0.4 : 1 }}

            className={`option ${formData.relationship === relationship.id ? 'selected' : ''}`}
            onClick={() => setFormData({ ...formData, relationship: relationship.id })}
          >
            <Image src={relationship.icon} alt={relationship.label} width={90} height={90} />
            <span>{relationship.label}</span>
          </div>
        ))}
      </div>


      <style jsx>{`
        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          border-radius: 10px;
          width: 100%;
          max-width: 500px;
          color: white;
          font-family: 'Arial', sans-serif; /* Change font to Arial, sans-serif */
        }


        .step-title, .sub-title {
            font-size: 20px;
            margin-bottom: 1.5rem;
            color: #71717A;
            text-align: center;
            font-weight: lighter;
            
          }

        .name-input {
          width: 100%;
          padding: 12px;
          margin-bottom: 20px;
          border: none;
          border-radius: 8px;
          background-color: white;
          color: black;
          font-size: 1rem;
          box-sizing: border-box;
        }

        .relationship-options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          width: 100%;
        //   margin-bottom: 2rem;
          box-sizing: border-box;
        }
  

        .option {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px;
          background-color: #212121;
          border: 4px solid transparent;
          border-radius: 10px;
          cursor: pointer;
          transition: border-color 0.3s ease, background-color 0.3s ease;
          justify-content: center;
          height:200px;
          width:200px;
        }

        .option span {
          font-size: 1rem;
          color: #6b6b6b    ;
          text-align: center;
          margin-top: 10px;
        }

        .option.selected {
          border-color: #ff5d88;
          background-color: #333;
        }
        .option:not(.selected) {
          opacity: 0.4;
        }
        @media (max-width: 768px) {
      .option {
                height:140px;
          width:140px;
      }
        }

      `}</style>
    </div>
  );
}
