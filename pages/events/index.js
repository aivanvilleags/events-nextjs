import { getAllEvents } from "../../helpers/api-util";
import EventsList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

import { useRouter } from "next/router";

export default function EventsPage({ events }) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventsList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}
