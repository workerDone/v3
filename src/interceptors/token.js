export default function token (response)  {

  response.headers = {
    Auth : 'Token name'
  } 
  
  return response;
}