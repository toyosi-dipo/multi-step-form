import formData from "@/utils/form-data";
import SingleFormInput from "@/components/form-input";
import styles from "./form.module.css";
import { useGlobalContext } from "@/context/form-context";
import Modal from "./modal";

function Form() {
  const { step, jumpToStep, modalHandler, setFilledFormData, filledFormData } =
    useGlobalContext();
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
    <section className={styles.formSection}>
      <h3>Employee Data Form</h3>
      <div className={styles.formContainer}>
        {/* form groups */}
        <div className={styles.formGroups}>
          {formData.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index + 1 === step
                    ? `${styles.formGroup} ${styles.active}`
                    : styles.formGroup
                }
                onClick={() => jumpToStep(index + 1)}
              >
                <div className={styles.groupLogo}>{item.logo}</div>
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
            <SingleFormInput
              value={first_name}
              name="first_name"
              label="First Name"
            />
            <SingleFormInput
              value={middle_name}
              name="middle_name"
              label="Middle Name"
            />
            <SingleFormInput value={surname} name="surname" label="Surname" />
            <SingleFormInput
              value={d_o_b}
              name="d_o_b"
              placeholder="DD/MM/YYYY"
              label="Date of Birth"
            />
            <SingleFormInput
              value={marital_status}
              name="marital_status"
              label="Marital Status"
            />
            <SingleFormInput
              value={department}
              name="department"
              label="Department"
            />
            <SingleFormInput
              value={position}
              name="position"
              label="Position"
            />
            <SingleFormInput
              value={supervisor}
              name="supervisor"
              label="Supervisor"
            />
          </fieldset>
          <fieldset style={{ height: step === 2 ? "auto" : "0" }} id="contact">
            <SingleFormInput
              value={phone}
              name="phone"
              type="number"
              label="Phone"
            />
            <SingleFormInput
              value={email}
              name="email"
              type="email"
              label="Email Address"
            />
            <SingleFormInput
              value={street_address}
              name="street_address"
              label="Street Address"
            />
            <SingleFormInput value={city} name="city" label="City" />
            <SingleFormInput value={state} name="state" label="State" />
            <SingleFormInput value={zip} name="zip" label="ZIP" />
          </fieldset>
          <fieldset
            style={{ height: step === 3 ? "auto" : "0" }}
            id="education"
          >
            <h4>High School</h4>
            <SingleFormInput
              value={high_school}
              name="high_school"
              label="Name"
            />
            <SingleFormInput value={h_s_from} name="h_s_from" label="From" />
            <SingleFormInput value={h_s_to} name="h_s_to" label="To" />
            <SingleFormInput
              value={h_s_degree}
              name="h_s_degree"
              label="Degree"
            />
            <SingleFormInput value={h_s_city} name="h_s_city" label="city" />
            <SingleFormInput value={h_s_state} name="h_s_state" label="State" />
            <h4>College</h4>
            <SingleFormInput value={college} name="college" label="Name" />
            <SingleFormInput value={col_from} name="col_from" label="From" />
            <SingleFormInput value={col_to} name="col_to" label="To" />
            <SingleFormInput
              value={col_degree}
              name="col_degree"
              label="Degree"
            />
            <SingleFormInput value={col_city} name="col_city" label="city" />
            <SingleFormInput value={col_state} name="col_state" label="State" />
          </fieldset>
          <fieldset
            style={{ height: step === 4 ? "auto" : "0" }}
            id="emergency"
          >
            <SingleFormInput
              value={emg_name}
              name="emg_name"
              label="Emergency Contact Name"
            />
            <SingleFormInput
              value={emg_relationship}
              name="emg_relationship"
              label="relationship"
            />
            <SingleFormInput
              value={emg_phone}
              name="emg_phone"
              label="Phone"
              type="number"
            />
          </fieldset>
          {step === 4 && (
            <button
              onClick={modalHandler}
              className={styles.previewBtn}
              type="button"
            >
              Preview & Submit
            </button>
          )}
          <Modal />
        </form>
      </div>
    </section>
  );
}

export default Form;
