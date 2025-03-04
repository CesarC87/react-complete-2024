import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action =  async ({request}) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  console.log('asd 1 mode',mode)

  if(mode !== 'login' && mode !== 'signup'){
    throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
      status: 500,
    });
  }

  console.log('asd 2')

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password')
  }

  const response = await fetch('http://localhost:8081/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  });

  if(response.status === 422 || response.status === 401){
    return response
  }

  console.log('asd 3',response.ok)


  if(!response.ok){
    throw new Response(JSON.stringify({ message: 'Could not authenticate the user.' }), {
      status: 500,
    });
  }

  const resData = await response.json()
  const token = resData.token

  localStorage.setItem('token', token)


  console.log('asd 4')


  return redirect('/');
}