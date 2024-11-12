import React, { Suspense } from "react";
import {
  useParams,
  json,
  useRouteLoaderData,
  defer,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  // const data = useRouteLoaderData('event-detail')
  const { event, events } = useRouteLoaderData("event-detail");

  // const { id } = useParams()

  return (
    <>
    <Suspense fallback={<p>Loading event...</p>}>
      <Await resolve={event}>
        {(loadedEvent) => <EventItem event={loadedEvent} />}
      </Await>
    </Suspense>
    <Suspense fallback={<p>Loading events...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
    </>
  );
};

export default EventDetailPage;

const loadSingleEvent = async (id) => {
  const response = await fetch("http://localhost:8081/events" + id);
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "An error has ocurred fetching events" }),
      { status: response.status }
    );
  }

  const resData = await response.json();

  return resData.events;
};

const loadEvents = async () => {
  const response = await fetch("http://localhost:8081/events");
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "An error has ocurred fetching events" }),
      { status: response.status }
    );
  }

  const resData = await response.json();

  return resData.events;
};

export const loader = async ({ request, params }) => {
  const id = params.id;

  return defer({
    singleEvent: loadSingleEvent(id),
    events: loadEvents(),
  });
};
