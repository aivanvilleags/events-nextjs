import Button from "../ui/button";
import styles from "./events-search.module.css";
import { useRef } from "react";

export default function EventsSearch(props) {
  const yearInput = useRef();
  const monthInput = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const year = yearInput.current.value;
    const month = monthInput.current.value;

    props.onSearch(year, month);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInput}>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInput}>
            <option value={1}>JAN</option>
            <option value={2}>FEB</option>
            <option value={3}>MAR</option>
            <option value={4}>APR</option>
            <option value={5}>MAY</option>
            <option value={6}>JUN</option>
            <option value={7}>JUL</option>
            <option value={8}>AUG</option>
            <option value={9}>SEP</option>
            <option value={10}>OCT</option>
            <option value={11}>NOV</option>
            <option value={12}>DEC</option>
          </select>
        </div>
      </div>
      <Button>Search</Button>
    </form>
  );
}
