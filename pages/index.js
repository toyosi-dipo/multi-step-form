import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);

  function increaseStep() {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    }
  }
  function decreaseStep() {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  }
  // calculate width of progress bar steps
  const progressStepsWidth = `${step * 33.333}%`;

  return (
    <main className={styles.main}>
      {/* box container */}
      <div className={styles.boxesContainer}>
        {Array.from({ length: 4 }, (_, index) => (
          <div
            className={
              index <= step ? `${styles.box} ${styles.active}` : styles.box
            }
          >
            {index + 1}
          </div>
        ))}
        {/* progress bar */}
        <div className={styles.progressBar}>
          <div
            className={styles.steps}
            style={{ width: progressStepsWidth }}
          ></div>
        </div>
      </div>
      {/*  button container */}
      <div className={styles.buttonsContainer}>
        <button disabled={step > 0 ? false : true} onClick={decreaseStep}>
          prev
        </button>
        <button disabled={step >= 3 ? true : false} onClick={increaseStep}>
          next
        </button>
      </div>
    </main>
  );
}
