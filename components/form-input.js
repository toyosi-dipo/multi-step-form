import styles from "./form-input.module.css";

function SingleFormInput({ name, value, placeholder, label, type = "text" }) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name}>{`${label}:`}</label>
      <input
        className={styles.formInput}
        type={type}
        name={name}
        value={value}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SingleFormInput;
