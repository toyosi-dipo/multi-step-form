import formData from "@/utils/form-data";
import SingleFormInput from "@/components/form-input";
import styles from "./form.module.css";
import { useGlobalContext } from "@/context/form-context";

function Form() {
  const { step, jumpToStep } = useGlobalContext();

  return (
    <section className={styles.formSection}>
      <h3>Employee Data Form</h3>
      <div className={styles.formContainer}>
        {/* form groups */}
        <div className={styles.formGroups}>
          {formData.map((item, index) => {
            return (
              <div
                className={
                  index + 1 === step
                    ? `${styles.formGroup} ${styles.active}`
                    : styles.formGroup
                }
                onClick={() => jumpToStep(index + 1)}
              >
                <div className={styles.groupLogo}>{item.logo()}</div>
                <p className={styles.groupName}>{item.title}</p>
              </div>
            );
          })}
        </div>
        {/* form input */}
        <form className={styles.form}>
          <fieldset
            className={styles.personal}
            style={{ height: step === 1 ? "auto" : "0" }}
            id="personal"
          >
            <SingleFormInput name="first-name" label="First Name" />
            <SingleFormInput name="middle-name" label="Middle Name" />
            <SingleFormInput name="surname" label="Surname" />
            <SingleFormInput
              name="d-o-b"
              placeholder="DD/MM/YYYY"
              label="Date of Birth"
            />
            <SingleFormInput name="marital-status" label="Marital Status" />
            <SingleFormInput name="department" label="Department" />
            <SingleFormInput name="position" label="Position" />
            <SingleFormInput name="supervisor" label="Supervisor" />
          </fieldset>
          <fieldset style={{ height: step === 2 ? "auto" : "0" }} id="contact">
            <SingleFormInput name="phone" type="number" label="Phone" />
            <SingleFormInput name="email" type="email" label="Email Address" />
            <SingleFormInput name="street-address" label="Street Address" />
            <SingleFormInput name="city" label="City" />
            <SingleFormInput name="state" label="State" />
            <SingleFormInput name="zip" label="ZIP" />
          </fieldset>
          <fieldset
            style={{ height: step === 3 ? "auto" : "0" }}
            id="education"
          >
            <h4>High School</h4>
            <SingleFormInput name="high-school" label="Name" />
            <SingleFormInput name="h-s-from" label="From" />
            <SingleFormInput name="h-s-to" label="To" />
            <SingleFormInput name="h-s-degree" label="Degree" />
            <SingleFormInput name="h-s-city" label="city" />
            <SingleFormInput name="h-s-state" label="State" />
            <h4>College</h4>
            <SingleFormInput name="college" label="Name" />
            <SingleFormInput name="col-from" label="From" />
            <SingleFormInput name="col-to" label="To" />
            <SingleFormInput name="col-degree" label="Degree" />
            <SingleFormInput name="col-city" label="city" />
            <SingleFormInput name="col-state" label="State" />
          </fieldset>
          <fieldset
            style={{ height: step === 4 ? "auto" : "0" }}
            id="emergency"
          >
            <SingleFormInput name="emg-name" label="Emergency Contact Name" />
            <SingleFormInput name="emg-relationship" label="relationship" />
            <SingleFormInput name="phone" label="Phone" type="number" />
          </fieldset>
          {step === 4 && (
            <button className={styles.submitBtn} type="submit">
              Submit
            </button>
          )}
        </form>
      </div>
    </section>
  );
}

export default Form;
