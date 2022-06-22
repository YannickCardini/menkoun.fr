fetch('https://51.79.255.217:3000/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      'values': '("chat gentisl")',
    })
  }).then(function (response) {
    console.log(response);
  });