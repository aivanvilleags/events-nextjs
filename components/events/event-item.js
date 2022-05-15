import Image from "next/image";
import styles from "./event-item.module.css";

import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRoghtIcon from "../icons/arrow-right-icon";

export default function EventItem({ title, image, date, location, id }) {
  return (
    <li className={styles.item}>
      <Image src={`/${image}`} alt={title} width={300} height={300} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>
              {new Date(date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{location}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${id}`}>
            <span>AddressIcon</span>
            <span className={styles.icon}>
              <ArrowRoghtIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
