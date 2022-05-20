import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-util";

import EventsList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

export default function FilteredEventsPage(props) {
  // const route = useRouter();
  // const data = route.query.slug;

  // if (!data) {
  //   return <p className="center">Loading ...</p>;
  // }

  if (props.hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid format</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Return to events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Return to events</Button>
        </div>
      </>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventsList items={filteredEvents} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const data = params.slug;

  const year = Number(data[0]);
  const month = Number(data[1]);
  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: {
        hasError: true,
      },
      notFound: true,
      // redirect: {
      //   destination:'/'
      // }
    };
  }

  const filteredEvents = await getFilteredEvents({ year, month });

  return {
    props: {
      events: filteredEvents,
      date: {
        year,
        month,
      },
    },
  };
}
