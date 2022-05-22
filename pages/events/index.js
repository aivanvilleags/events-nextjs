import { getAllEvents } from "../../helpers/api-util";
import EventsList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

import { useRouter } from "next/router";
import Head from "next/head";

export default function EventsPage({ events }) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find a lot of great events" />
      </Head>
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
