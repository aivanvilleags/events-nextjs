import { getEventById } from "../../data/events";
import { useRouter } from "next/router";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

export default function EventPage() {
  const router = useRouter();
  const id = router.query.eventId;
  const event = getEventById(id);

  if (!event) {
    return (
      <ErrorAlert>
        <p>Event not found</p>;
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        image={event.image}
        imageAlt={event.title}
        address={event.location}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
