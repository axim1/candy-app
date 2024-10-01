import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Image from 'next/image';

import Step1 from '@/pages/components/Step1';
import Step2 from '@/pages/components/Step2';
import Step3 from '@/pages/components/Step3';
import Step4 from '@/pages/components/Step4';
import Step5 from '@/pages/components/Step5';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    relationship: '',
    ethnicity: '',
    bodyType: '',
    breastSize: '',
    buttSize: '',
    age: 18,
    skills: {
      sucking: 0,
      spanking: 0,
      anal: 0,
      feet: 0,
    },
  });

  const [direction, setDirection] = useState('down'); // Track transition direction

  const nextStep = () => {
    setDirection('down'); // Set direction to down for next step
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setDirection('up'); // Set direction to up for previous step
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically update the form field by name
    });
  };
  
  const handleSkillChange = (skill, value) => {
    setFormData({
      ...formData,
      skills: {
        ...formData.skills,
        [skill]: value, // Dynamically update the skill value
      },
    });
  };
  

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step3 formData={formData} setFormData={setFormData} />;
        case 4:
            return    <Step4
              formData={formData}
              handleInputChange={handleInputChange}
              handleSkillChange={handleSkillChange}
            />;      
        case 5:
            return    <Step5
            />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      {/* Step Progress Bar */}
<div className='cover-left'>            <Image src='/images/candy01.webp' alt='candy icon'   layout="fill" objectFit="cover" />
</div>
<div className='cover-right'>
    <div className='main-form-wrapper'>
      <TransitionGroup>
        <CSSTransition key={step} classNames={`slide-${direction}`} timeout={500}>
            <div className='main-form'>
            <Image src='/images/candy03.png' alt='candy icon'  width={185} height={54}  />

       {step < 5   &&     <div className="step-progress-bar">
        <div className="progress-line-background"></div>
        {step < 5  &&   [1, 2, 3, 4].map((s) => (
          <div key={s} className={`step-indicator ${step >= s ? 'active' : ''}`}>
            <span className="step-number">{s}</span>
          </div>
        ))}
        <div className="progress-line-active" style={{ width: `${(step - 1) * 33}%` }}></div>
      </div>}

          <div className="step-wrapper">{renderStep()}</div>
          
      <div className="navigation-buttons">
      {step > 1 && step < 5 && (
          <button onClick={prevStep} className="back-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
              width="40" 
              height="40"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}
        {step < 5  &&
          <button onClick={nextStep} className='next-button'>Next</button>
        }
      </div></div>
        </CSSTransition>
      </TransitionGroup>
      </div>
      </div>

      <style jsx>{`
             .back-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          color: white;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .back-button:hover {
          color: #ff5d88;
        }
       

        .icon {
          padding: 10px;
          
          border-radius: 100px;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          font-family: 'Arial', 'Helvetica', sans-serif;
          color: white;
          min-height: 100vh;
        //   display: flex;
        //   justify-content: center;
        //   align-items: center;
                    font-family: 'Arial', sans-serif; /* Change font to Arial, sans-serif */

        }

        input, button {
          font-family: inherit;
        }


                          .container {
          display: flex;
        //   justify-content: center;
        //   align-items: stretch;
          min-height: 100vh;
          background-color: #18181c;
          color: white;
                    font-family: 'Arial', sans-serif; /* Change font to Arial, sans-serif */

        }

        .cover-right {
        //   display: flex;
        //   flex-direction: column;
        //   justify-content: center;
        //   align-items: center;
 
          width:50%;
          min-height: 100vh;
        //   min-width: 00px;
          background-color: #18181c;
          color: white;
          overflow:hidden;
                    font-family: 'Arial', sans-serif; /* Change font to Arial, sans-serif */

        }
        //     .container {
        //   display: flex;
        //   justify-content: center;
        //   align-items: stretch;
        //   min-height: 100vh;
        // }

        // /* Left cover image */
       .cover-left {
          width: 50%;
          position: relative;
          transition: none; /* Disable transition to prevent jitter */
        }

.cover-left img {
  transition: none; /* Prevent the image from transitioning */
}

        // /* Right form content */
        // .cover-right {
        //   width: 50%;
        //   display: flex;
        //   justify-content: center;
        //   align-items: center;
        //   padding: 2rem;
        //   background-color: #18181c;
        //   color: white;
        //             min-height: 100vh;
        //            font-family: 'Arial', sans-serif; /* Change font to Arial, sans-serif */
        // }

.main-form{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
           height: 100vh;
          background-color: #18181c;
          color: white;
        //   max-width:500px;
        width:100%


}
        /* Step Progress Bar */
        .step-progress-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 80%;
          max-width: 500px;
          margin-bottom: 20px;
          position: relative;
        }

        .progress-line-background {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 4px;
          background-color: #333;
          z-index: 1;
        }

        .progress-line-active {
          position: absolute;
          top: 50%;
          left: 0;
          height: 4px;
          background-color: #ff5d88;
          z-index: 2;
          transition: width 0.5s ease;
        }

        .step-indicator {
          width: 30px;
          height: 30px;
          background-color: black;
          border: 4px solid #333;
          color: #777;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.2rem;
          z-index: 3;
          position: relative;
        }

        .step-indicator.active {
          border: 4px solid #ff5d88;
          color: white;
        }

        .step-number {
          font-weight: bold;
        }

        /* Step container */
        .step-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 500px;
        }

        .navigation-buttons {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 500px;
          margin-top: 20px;
        }

        .next-button {
          padding: 15px 30px;
  background: linear-gradient(90deg, #f72b63, #ff6b9d);
          color: white;
          border: none;
          border-radius: 100px;
          font-size: 1.2rem;
          cursor: pointer;
          text-transform: uppercase;
          width: 100%;
          transition: background-color 0.3s ease;
        }

        .back-button {
            padding: 0px;
            background-color: gray;
            color: black;
            margin-right:10px;
            padding:10px
            border: none;
            border-radius: 100px;
            font-size: 1.2rem;
            cursor: pointer;
            text-transform: uppercase;
            width: 60px;
            transition: background-color 0.3s ease;
          }


        button:disabled {
          background-color: #666;
          cursor: not-allowed;
        }
.cover-left {
  width: 50%;
  height: 100vh;
  position: relative;
  overflow: hidden; /* Ensure the image doesn't overflow the container */
}

.cover-left img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image fills the container without changing aspect ratio */
  transition: none; /* Completely disable transitions on the image */
}

/* Main form content */
.main-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #18181c;
  color: white;
  width: 100%;
}

.slide-down-enter,
.slide-down-enter-active,
.slide-down-exit,
.slide-down-exit-active,
.slide-up-enter,
.slide-up-enter-active,
.slide-up-exit,
.slide-up-exit-active {
  transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
  /* Limit the transition effects to form content only */
}

.slide-down-enter {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-enter-active {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-exit {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-exit-active {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-enter {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-enter-active {
  transform: translateY(0);
  opacity: 1;
}

.slide-up-exit {
  transform: translateY(0);
  opacity: 1;
}

.slide-up-exit-active {
  transform: translateY(-100%);
  opacity: 0;
}

// .slide-down-enter,
// .slide-down-enter-active,
// .slide-down-exit,
// .slide-down-exit-active,
// .slide-up-enter,
// .slide-up-enter-active,
// .slide-up-exit,
// .slide-up-exit-active {
//   transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
//   /* Limit the transition effects to form content only */
// }
//         /* Animations */
//         .slide-down-enter {
//           transform: translateY(-100%);
//           opacity: 0;
//         }
//         .slide-down-enter-active {
//           transform: translateY(0);
//           opacity: 1;
//           transition: transform 500ms, opacity 500ms ease-in-out;
//         }
//         .slide-down-exit {
//           transform: translateY(0);
//           opacity: 1;
//         }
//         .slide-down-exit-active {
//           transform: translateY(100%);
//           opacity: 0;
//           transition: transform 250ms, opacity 250ms ease-in-out;
//         }

//         .slide-up-enter {
//           transform: translateY(100%);
//           opacity: 0;
//         }
//         .slide-up-enter-active {
//           transform: translateY(0);
//           opacity: 1;
//           transition: transform 500ms, opacity 500ms ease-in-out;
//         }
//         .slide-up-exit {
//           transform: translateY(0);
//           opacity: 1;
//         }
//         .slide-up-exit-active {
//           transform: translateY(-100%);
//           opacity: 0;
//           transition: transform 500ms, opacity 500ms ease-in-out;
//         }
                  /* Hide left image on small devices */
        @media (max-width: 768px) {
          .cover-left {
            display: none;
          }
          .cover-right {
            width: 100%;
            padding: 30px;
          }
        }
      `}</style>
    </div>
  );
}
