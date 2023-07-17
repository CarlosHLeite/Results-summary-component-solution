import Summary from "@/components/Summary";
import styles from "./page.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Header />

        <section className="main">
          <Summary />
        </section>
      </div>
    </main>
  );
}
