import Form from "@/components/form";
import ProgressSteps from "@/components/progress-steps";
import styles from "@/styles/Home.module.css";

function Home() {
  return (
    <main className={styles.main}>
      <Form />
      <ProgressSteps />
    </main>
  );
}

export default Home;
