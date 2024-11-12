import { Suspense } from "react";

import { Await, defer, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData()
  const events = data.events;

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={events}>
        {
          (loadedEvents) => <EventsList events={loadedEvents} />
          // Cuando se resuelve la promesa, devolvemos EventsList con la data.
          // Mientras, mostramos el fallback del Suspense
        }
      </Await>
    </Suspense>
    // <p>asd</p>
  );
}

export default EventsPage;

const loadEvents = async () => {
  const response = await fetch("http://localhost:8081/events");
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "An error has ocurred fetching events" }),
      { status: response.status }
    );
  }

  const resData = await response.json()

  return resData.events;
};

export const loader = async () => {
  return defer({
    events: loadEvents(), // Devuelve una promesa
  });
};
