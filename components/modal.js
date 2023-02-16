import { useGlobalContext } from "@/context/form-context";
import Loading from "./Loading";
import styles from "./modal.module.css";

function Modal() {
  const {
    filledFormData,
    isModalOpen,
    isLoading,
    submitHandler,
    modalHandler,
  } = useGlobalContext();
  const {
    first_name,
    middle_name,
    surname,
    d_o_b,
    marital_status,
    department,
    position,
    supervisor,
    phone,
    email,
    street_address,
    city,
    state,
    zip,
    high_school,
    h_s_from,
    h_s_to,
    h_s_degree,
    h_s_city,
    h_s_state,
    college,
    col_from,
    col_to,
    col_degree,
    col_city,
    col_state,
    emg_name,
    emg_relationship,
    emg_phone,
  } = filledFormData;

  return (
    <section
      className={
        isModalOpen
          ? `${styles.modalOverlay} ${styles.openModal}`
          : styles.modalOverlay
      }
    >
      <div className={styles.modalCenter}>
        <h3>Employee Details</h3>
        <div className={styles.modalContainer}>
          <div>
            <h4>Personal</h4>
            <p className={styles.specificInput}>
              <span>First Name: </span>
              {first_name}
            </p>
            <p className={styles.specificInput}>
              <span>Middle Name: </span> {middle_name}
            </p>
            <p className={styles.specificInput}>
              <span>Surname: </span>
              {surname}
            </p>
            <p className={styles.specificInput}>
              <span>Date of Birth: </span>
              {d_o_b}
            </p>
            <p className={styles.specificInput}>
              <span>Marital Status: </span>
              {marital_status}
            </p>
            <p className={styles.specificInput}>
              <span>Department: </span>
              {department}
            </p>
            <p className={styles.specificInput}>
              <span>Position: </span>
              {position}
            </p>
            <p className={styles.specificInput}>
              <span>Supervisor: </span>
              {supervisor}
            </p>
            <h4>Contact</h4>
            <p className={styles.specificInput}>
              <span>Phone: </span>
              {phone}
            </p>
            <p className={styles.specificInput}>
              <span>Email Address: </span>
              {email}
            </p>
            <p className={styles.specificInput}>
              <span>Street Address: </span>
              {street_address}
            </p>
            <p className={styles.specificInput}>
              <span>City: </span>
              {city}
            </p>
            <p className={styles.specificInput}>
              <span>State: </span>
              {state}
            </p>
            <p className={styles.specificInput}>
              <span>ZIP: </span>
              {zip}
            </p>
          </div>
          <div>
            <h4>Education</h4>
            <p className={styles.specificInput}>
              <span>High School: </span>
              {high_school}
            </p>
            <p className={styles.specificInput}>
              <span>From: </span>
              {h_s_from}
            </p>
            <p className={styles.specificInput}>
              <span>To: </span> {h_s_to}
            </p>
            <p className={styles.specificInput}>
              <span>Degree: </span> {h_s_degree}
            </p>
            <p className={styles.specificInput}>
              <span>city: </span>
              {h_s_city}
            </p>
            <p className={styles.specificInput}>
              <span>State: </span>
              {h_s_state}
            </p>
            <p className={styles.specificInput}>
              <span>College: </span>
              {college}
            </p>
            <p className={styles.specificInput}>
              <span>From: </span>
              {col_from}
            </p>
            <p className={styles.specificInput}>
              <span>To: </span>
              {col_to}
            </p>
            <p className={styles.specificInput}>
              <span>Degree: </span>
              {col_degree}
            </p>
            <p className={styles.specificInput}>
              <span>city: </span>
              {col_city}
            </p>
            <p className={styles.specificInput}>
              <span>State: </span>
              {col_state}
            </p>
            <h4>Emergency Contact Information</h4>
            <p className={styles.specificInput}>
              <span>Emergency Contact Name: </span>
              {emg_name}
            </p>
            <p className={styles.specificInput}>
              <span>relationship: </span>
              {emg_relationship}
            </p>
            <p className={styles.specificInput}>
              <span>Phone: </span>
              {emg_phone}
            </p>
          </div>
        </div>
        <button onClick={modalHandler} className={styles.backBtn} type="button">
          Go Back
        </button>
        <button
          onClick={submitHandler}
          className={styles.submitBtn}
          type="submit"
          disabled={isLoading ? true : false}
        >
          {isLoading ? <Loading /> : "Submit"}
        </button>
      </div>
    </section>
  );
}

export default Modal;
