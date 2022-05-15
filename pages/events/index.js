import { getAllEvents } from "../../data/events";
import EventsList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

import { useRouter } from "next/router";

export default function EventsPage() {
  const events = getAllEvents();
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
