import styles from "./progress-steps.module.css";
import { useGlobalContext } from "@/context/form-context";

function ProgressSteps() {
  const { step, increaseStep, decreaseStep } = useGlobalContext();

  // calculate width of progress bar steps
  const progressStepsWidth = `${(step - 1) * 33.333}%`;

  return (
    <section className={styles.progressContainer}>
      {/* box container */}
      <div className={styles.boxesContainer}>
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className={
              index <= step - 1 ? `${styles.box} ${styles.active}` : styles.box
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
        <button disabled={step > 1 ? false : true} onClick={decreaseStep}>
          prev
        </button>
        <button disabled={step >= 4 ? true : false} onClick={increaseStep}>
          next
        </button>
      </div>
    </section>
  );
}

export default ProgressSteps;
