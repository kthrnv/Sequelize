function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

async function getMeals() {
  const diningRequest = await fetch('/api/wholeMeal');
  const diningData = await diningRequest.json();
  return diningData;
}

async function windowActions() {
  const request = await fetch('/api/dining');
  const data = await request.json()
  // console.log(data["data"])
  datas = data["data"];
  const hall = document.querySelector('.hall');
  const results = await getMeals();
  const meals = results.data;
  console.table(meals);

  const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selectedMeals = mealArray.map(element => {
    const random = getRandomIntInclusive(0, meals.length - 1);
    return meals[random];
  });
  console.table(selectedMeals);

  datas.forEach((item) => {

    const appendItem = document.createElement('tr');

    appendItem.innerHTML = `
      <td class="id-num">${item.hall_id}</td>
      <td>${item.hall_name}</td>
      <td>${item.hall_address}</td>`;

    hall.append(appendItem);
  });

}

window.onload = windowActions;