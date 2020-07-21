export function PostData(userData) {
  return new Promise((resolve,reject) =>{
    fetch('http://e4u.com/api/auth/login', {
      method: 'POST',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
      body: JSON.stringify(userData)
    })
    .then((response) => 
      response
    )
    .then((responseJson) => {
      resolve(responseJson)
    })
    .catch((error) => {
      reject(error);
    })
  } );


}