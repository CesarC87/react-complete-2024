> [!NOTE]  
> Section 21: React-Router
> function App() {

  const routes = [
    {
      path: '/',
      element: <LayOut/>,
      children: [ //* --> /...
        // { path: '', element: <HomePage/>},
        { index: true, element: <HomePage/>},
        { 
          path: 'events', 
          element: <LayOut2/>,
          children: [ //* --> /events/...
            { 
              index: true, 
              element: <EventsPage/>,
              loader: async () => {
                const response = await fetch('http://localhost:8081/events');

                if (!response.ok) {
                } else {
                  const resData = await response.json();
                  return resData.events
                }
              }
            },
            { path: 'new', element: <NewEventPage/>},
            { path: ':id', element: <EventDetailPage/>},
            { path: ':id/edit', element: <EditEventPage/>},
          ]
        },
      ],
      // errorElement: <ErrorPage/>
    },
  ]

  const router = createBrowserRouter(routes)

  return <RouterProvider router={router}/>
}

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]  
> Crucial information necessary for users to succeed.

> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
