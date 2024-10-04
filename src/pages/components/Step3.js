import Image from 'next/image';

export default function Step3({ formData, setFormData }) {
  const bodyTypes = [
    { id: 'slim', label: 'Slim', image: '/images/step3/candy24.webp' },
    { id: 'athletic', label: 'Athletic', image: '/images/step3/candy25.webp' },
    { id: 'curvy', label: 'Curvy', image: '/images/step3/candy28.webp' },
  ];

  const breastSizes = [
    { id: 'small', label: 'Small', image: '/images/step3/candy29.webp' },
    { id: 'medium', label: 'Medium', image: '/images/step3/candy31.webp' },
    { id: 'large', label: 'Huge', image: '/images/step3/candy23.webp' },
  ];

  const buttSizes = [
    { id: 'small', label: 'Small', image: '/images/step3/candy24.webp' },
    { id: 'medium', label: 'Medium', image: '/images/step3/candy24.webp' },
    { id: 'large', label: 'Large', image: '/images/step3/candy24.webp' },
  ];

  return (
    <div className="step">
      <h2 className="step-title">Choose Body Type</h2>

      <div className="options-grid">
        {bodyTypes.map((body) => (
          <div
            key={body.id}
            style={{ opacity: formData?.bodyType && formData?.bodyType !== body.id ? 0.4 : 1 }}

            className={`option ${formData?.bodyType === body.id ? 'selected' : ''}`}
            onClick={() => setFormData({ ...formData, bodyType: body.id })}
          >

            <Image src={body.image} alt={body.label} layout="fill" objectFit="cover" />
            <span className="label">{body.label}</span>
          </div>
        ))}
      </div>

      <h3 className="section-title">Choose Breast Size</h3>
      <div className="options-grid">
        {breastSizes.map((breast) => (
          <div
            key={breast.id}
            style={{ opacity: formData?.breastSize && formData.breastSize !== breast.id ? 0.4 : 1 }}

            className={`option ${formData?.breastSize === breast.id ? 'selected' : ''}`}
            onClick={() => setFormData({ ...formData, breastSize: breast.id })}
          >
            <Image src={breast.image} alt={breast.label} layout="fill" objectFit="cover" />
            <span className="label">{breast.label}</span>
          </div>
        ))}
      </div>

      <h3 className="section-title">Choose Butt Size</h3>
      <div className="options-grid">
        {buttSizes.map((butt) => (
          <div
            key={butt.id}
            style={{ opacity: formData?.buttSize && formData?.buttSize !== butt.id ? 0.4 : 1 }}

            className={`option ${formData?.buttSize === butt.id ? 'selected' : ''}`}
            onClick={() => setFormData({ ...formData, buttSize: butt.id })}
          >
            <Image src={butt.image} alt={butt.label} layout="fill" objectFit="cover" />
            <span className="label">{butt.label}</span>
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
          max-width: 600px;
          color: white;
        font-family: 'Arial', sans-serif; /* Change font to Arial, sans-serif */

        }

        .step-title, .section-title ,
        .step-title, .sub-title {
            font-size: 20px;
            // margin-bottom: 1.5rem;
            color: #71717A;
            text-align: center;
            font-weight: lighter;
            
          }

        // .section-title {
        //   margin-top: 2rem;
        // }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          width: 100%;
          margin-bottom: 1rem;
        }

        .option {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #212121;
          border-radius: 10px;
          padding: 10px;
          border: 4px solid transparent;
          cursor: pointer;
          height: 120px;
          transition: border-color 0.3s ease;
        }


        .option.selected {
            border-color: #ff5d88;
            background-color: #333;
          }
        .option.:not(.selected) {
          opacity: 0.4;
        }

   

        .label {
          position: absolute;
          bottom: 10px;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 5px 10px;
          border-radius: 10px;
          font-size: 0.85rem;
          color: #ffffff;
        }

        .next-button {
          background-color: #f72b63;
          padding: 15px 30px;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1.2rem;
          cursor: pointer;
          text-transform: uppercase;
          width: 100%;
          transition: background-color 0.3s ease;
        }

        .next-button:hover {
          background-color: #d32047;
        }
      `}</style>
    </div>
  );
}
