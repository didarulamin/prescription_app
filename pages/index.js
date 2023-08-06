import Head from 'next/head';
import PatientInfo from '../components/form';
import Prescription from '../components/prescription';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className="m-6 flex flex-col items-center">
        <PatientInfo />
        <Prescription />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
