import { Form, json, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const actionData = useActionData()
  const navigate = useNavigate();
  const navigation = useNavigation()

  const isSubmitting = navigation.state === 'submitting'

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      { actionData && actionData.errors && (
        <ul>
          {
            Object.values(actionData.errors).map( err => (
              <li key={err}>
                {err}
              </li>
            ))
          }
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ''}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : ''}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : ''}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;

export const action = async ({request, params}) => {
  const method = request.method;
  const data = await request.formData()

  console.log('asd data', data)

  const dataObj = {
    title: data.get('title'), //* Siempre el name que tiene el input en el form
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }

  let url = 'http://localhost:8081/events'

  if(method === 'PATCH'){
    const id = params.id
    url = 'http://localhost:8081/events/' + id
  }

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
      },
    body: JSON.stringify(dataObj)
    }
  )

  if(response.status === 422){ // En events.js se devuelve un 422 si hay errores en validacion del form
    return response           // Esta data la podemos usar con el hook useActionData para acceder a los errores de validacion, por eso el return del response
  }

  if(!response.ok){
    throw json({ message: 'Could not create event'}, { status: 500})
  }

  return redirect('/events')
}

