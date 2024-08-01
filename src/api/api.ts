const url = 'https://restcountries.com/v3.1/all';

export const getData = async () => {
  const response = await fetch(url);

  if (response.ok) {
    let json = await response.json();
    console.log(json);
  } else {
    alert('Ошибка HTTP: ' + response.status);
  }
};
