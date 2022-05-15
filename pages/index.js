import EventsList from "../components/events/event-list";
import { getFeaturedEvents } from "../data/events";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>HomePage Page</h1>
      <EventsList items={featuredEvents} />
    </div>
  );
}
