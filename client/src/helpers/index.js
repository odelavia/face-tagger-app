exports.fetchWithoutBody = (route, method, headerAuthorization, body) => {
  return (
    fetch(`http://localhost:3000/${route}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': headerAuthorization || ''
      }, body
    })
  );
}

exports.fetchWithBody = (route, method, headerAuthorization, email, password, name, input, id ) => {
  return (
    exports.fetchWithoutBody(route, method, headerAuthorization, JSON.stringify({
        email: email || '',
        password: password || '',
        name: name || '',
        input: input || '',
        id: id || ''
      })
    )
    .then(response => response.json())
  );
}