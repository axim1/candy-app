export default function Step4({ formData, handleInputChange, handleSkillChange }) {
    return (
      <div className="step">
        <h2 className="step-title">Choose Age</h2>
        <div className="age-display">{formData?.age}</div>
  
        <div className="age-slider-container">
          <span className="age-label">Teen (18+)</span>
          <input
            type="range"
            name="age"
            min="18"
            max="50"
            value={formData?.age}
            onChange={handleInputChange}
            className="age-slider"
          />
          <span className="age-label">Milf (30+)</span>
        </div>
  
        <h3 className="section-title">Choose Skills</h3>
        <div className="skills-container">
          {['sucking', 'spanking', 'anal', 'feet'].map((skill) => (
            <div key={skill} className="skill-row">
              <label>{skill.charAt(0).toUpperCase() + skill.slice(1)}</label>
              <input
                type="range"
                name={skill}
                min="0"
                max="100"
                value={formData?.skills[skill]}
                onChange={(e) => handleSkillChange(skill, e.target.value)}
                className="skill-slider"
              />
              <div className="skill-percentage">{formData?.skills[skill]}%</div>
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
            font-family: 'Arial', sans-serif;
          }
  
          .step-title, .section-title {
            font-size: 20px;
            margin-bottom: 1.5rem;
            color: #71717A;
            text-align: center;
            font-weight: lighter;
          }
  
          .age-slider-container {
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
            width: 100%;
            justify-content: space-between;
          }
  
          .age-slider {
            width: 60%;
            margin: 0 10px;
            background-color: transparent;
            appearance: none;
          }
  
          .age-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 24px;
            height: 24px;
            background: #ff5d88;
            border-radius: 50%;
            position: relative;
            top: -8px;
            cursor: pointer;
          }
  
          .age-slider::-webkit-slider-runnable-track {
            width: 100%;
            height: 8px;
            background: #444;
            border-radius: 5px;
          }
  
          .age-display {
            font-size: 1.2rem;
            background-color: #333;
            padding: 5px 15px;
            border-radius: 20px;
            margin-bottom: 10px;
            text-align: center;
          }
  
          .age-label {
            font-size: 0.9rem;
            color: #888;
          }
  
          .skills-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 500px;
            margin-bottom: 2rem;
          }
  
          .skill-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
          }
  
          label {
            width: 80px;
            color: #ddd;
          }
  
          .skill-slider {
            width: 60%;
            margin: 20px 10px;
            background-color: transparent;
            appearance: none;
          }
  
          .skill-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 24px;
            height: 24px;
            background: #ff5d88;
            border-radius: 50%;
            position: relative;
            top: -7px;
            cursor: pointer;
          }
  
          .skill-slider::-webkit-slider-runnable-track {
            width: 100%;
            height: 10px;
            background: #444;
            border-radius: 5px;
          }
  
          .skill-percentage {
            width: 40px;
            text-align: right;
            color: #888;
          }
        `}</style>
      </div>
    );
  }
  