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
  console.log(data)
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

  console.log(selectedMeals[0].meal_name)
  console.log(selectedMeals[0].calories)

  datas.forEach((item) => {

    const appendItem = document.createElement('tr');

    appendItem.innerHTML = `
      <td class="id-num">${item.hall_id}</td>
      <td>${item.hall_name}</td>
      <td>${item.hall_address}</td>`;

    hall.append(appendItem);
  });

  // start stacked bar chart
  let chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title:{
      text: "Meals Macros"
    },
    axisX: {
      valueFormatString: ""
    },
    axisY: {
      // prefix: "$"
    },
    toolTip: {
      shared: true
    },
    legend:{
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [{
      type: "stackedBar",
      name: "Calories",
      showInLegend: "true",
      xValueFormatString: "",
      yValueFormatString: "#",
      dataPoints: [
        { x: selectedMeals[0].meal_name, y: selectedMeals[0].calories },
        { x: selectedMeals[1].meal_name, y: selectedMeals[1].calories },
        { x: selectedMeals[2].meal_name, y: selectedMeals[2].calories },
        { x: selectedMeals[3].meal_name, y: selectedMeals[3].calories },
        { x: selectedMeals[4].meal_name, y: selectedMeals[4].calories },
        { x: selectedMeals[5].meal_name, y: selectedMeals[5].calories },
        { x: selectedMeals[6].meal_name, y: selectedMeals[6].calories },
        { x: selectedMeals[7].meal_name, y: selectedMeals[7].calories },
        { x: selectedMeals[8].meal_name, y: selectedMeals[8].calories },
        { x: selectedMeals[9].meal_name, y: selectedMeals[9].calories }
      ]
    },
    {
      type: "stackedBar",
      name: "Serving Size",
      showInLegend: "true",
      xValueFormatString: "",
      yValueFormatString: "#",
      dataPoints: [
        { x: selectedMeals[0].meal_name, y: selectedMeals[0].serving_size },
        { x: selectedMeals[1].meal_name, y: selectedMeals[1].serving_size },
        { x: selectedMeals[2].meal_name, y: selectedMeals[2].serving_size },
        { x: selectedMeals[3].meal_name, y: selectedMeals[3].serving_size },
        { x: selectedMeals[4].meal_name, y: selectedMeals[4].serving_size },
        { x: selectedMeals[5].meal_name, y: selectedMeals[5].serving_size },
        { x: selectedMeals[6].meal_name, y: selectedMeals[6].serving_size },
        { x: selectedMeals[7].meal_name, y: selectedMeals[7].serving_size },
        { x: selectedMeals[8].meal_name, y: selectedMeals[8].serving_size },
        { x: selectedMeals[9].meal_name, y: selectedMeals[9].serving_size }
      ]
    },
    {
      type: "stackedBar",
      name: "Cholesterol",
      showInLegend: "true",
      xValueFormatString: "",
      yValueFormatString: "#",
      dataPoints: [
        { x: selectedMeals[0].meal_name, y: selectedMeals[0].cholesterol },
        { x: selectedMeals[1].meal_name, y: selectedMeals[1].cholesterol },
        { x: selectedMeals[2].meal_name, y: selectedMeals[2].cholesterol },
        { x: selectedMeals[3].meal_name, y: selectedMeals[3].cholesterol },
        { x: selectedMeals[4].meal_name, y: selectedMeals[4].cholesterol },
        { x: selectedMeals[5].meal_name, y: selectedMeals[5].cholesterol },
        { x: selectedMeals[6].meal_name, y: selectedMeals[6].cholesterol },
        { x: selectedMeals[7].meal_name, y: selectedMeals[7].cholesterol },
        { x: selectedMeals[8].meal_name, y: selectedMeals[8].cholesterol },
        { x: selectedMeals[9].meal_name, y: selectedMeals[9].cholesterol }
      ]
    },
    {
      type: "stackedBar",
      name: "Sodium",
      showInLegend: "true",
      xValueFormatString: "",
      yValueFormatString: "#",
      dataPoints: [
        { x: selectedMeals[0].meal_name, y: selectedMeals[0].sodium },
        { x: selectedMeals[1].meal_name, y: selectedMeals[1].sodium },
        { x: selectedMeals[2].meal_name, y: selectedMeals[2].sodium },
        { x: selectedMeals[3].meal_name, y: selectedMeals[3].sodium },
        { x: selectedMeals[4].meal_name, y: selectedMeals[4].sodium },
        { x: selectedMeals[5].meal_name, y: selectedMeals[5].sodium },
        { x: selectedMeals[6].meal_name, y: selectedMeals[6].sodium },
        { x: selectedMeals[7].meal_name, y: selectedMeals[7].sodium },
        { x: selectedMeals[8].meal_name, y: selectedMeals[8].sodium },
        { x: selectedMeals[9].meal_name, y: selectedMeals[9].sodium }
      ]
    },
    {
      type: "stackedBar",
      name: "Carbs",
      showInLegend: "true",
      xValueFormatString: "",
      yValueFormatString: "#",
      dataPoints: [
        { x: selectedMeals[0].meal_name, y: selectedMeals[0].carbs },
        { x: selectedMeals[1].meal_name, y: selectedMeals[1].carbs },
        { x: selectedMeals[2].meal_name, y: selectedMeals[2].carbs },
        { x: selectedMeals[3].meal_name, y: selectedMeals[3].carbs },
        { x: selectedMeals[4].meal_name, y: selectedMeals[4].carbs },
        { x: selectedMeals[5].meal_name, y: selectedMeals[5].carbs },
        { x: selectedMeals[6].meal_name, y: selectedMeals[6].carbs },
        { x: selectedMeals[7].meal_name, y: selectedMeals[7].carbs },
        { x: selectedMeals[8].meal_name, y: selectedMeals[8].carbs },
        { x: selectedMeals[9].meal_name, y: selectedMeals[9].carbs }
        // { x: new Date(2017, 0, 30), y: selectedMeals[0].carbs },
        // { x: new Date(2017, 0, 31), y: selectedMeals[1].carbs  },
        // { x: new Date(2017, 1, 1), y: selectedMeals[2].carbs  },
        // { x: new Date(2017, 1, 2), y: selectedMeals[3].carbs  },
        // { x: new Date(2017, 1, 3), y: selectedMeals[4].carbs  },
        // { x: new Date(2017, 1, 4), y: selectedMeals[5].carbs  },
        // { x: new Date(2017, 1, 5), y: selectedMeals[6].carbs  }
      ]
    },
    {
      type: "stackedBar",
      name: "Protein",
      showInLegend: "true",
      xValueFormatString: "",
      yValueFormatString: "#",
      dataPoints: [
        { x: selectedMeals[0].meal_name, y: selectedMeals[0].protein },
        { x: selectedMeals[1].meal_name, y: selectedMeals[1].protein },
        { x: selectedMeals[2].meal_name, y: selectedMeals[2].protein },
        { x: selectedMeals[3].meal_name, y: selectedMeals[3].protein },
        { x: selectedMeals[4].meal_name, y: selectedMeals[4].protein },
        { x: selectedMeals[5].meal_name, y: selectedMeals[5].protein },
        { x: selectedMeals[6].meal_name, y: selectedMeals[6].protein },
        { x: selectedMeals[7].meal_name, y: selectedMeals[7].protein },
        { x: selectedMeals[8].meal_name, y: selectedMeals[8].protein },
        { x: selectedMeals[9].meal_name, y: selectedMeals[9].protein }
        // { x: new Date(2017, 0, 30), y: 48 },
        // { x: new Date(2017, 0, 31), y: 45 },
        // { x: new Date(2017, 1, 1), y: 41 },
        // { x: new Date(2017, 1, 2), y: 55 },
        // { x: new Date(2017, 1, 3), y: 80 },
        // { x: new Date(2017, 1, 4), y: 85 },
        // { x: new Date(2017, 1, 5), y: 83 }
      ]
    },
    {
      type: "stackedBar",
      name: "Fat",
      showInLegend: "true",
      xValueFormatString: "",
      yValueFormatString: "#",
      dataPoints: [
        { x: selectedMeals[0].meal_name, y: selectedMeals[0].fat },
        { x: selectedMeals[1].meal_name, y: selectedMeals[1].fat },
        { x: selectedMeals[2].meal_name, y: selectedMeals[2].fat },
        { x: selectedMeals[3].meal_name, y: selectedMeals[3].fat },
        { x: selectedMeals[4].meal_name, y: selectedMeals[4].fat },
        { x: selectedMeals[5].meal_name, y: selectedMeals[5].fat },
        { x: selectedMeals[6].meal_name, y: selectedMeals[6].fat },
        { x: selectedMeals[7].meal_name, y: selectedMeals[7].fat },
        { x: selectedMeals[8].meal_name, y: selectedMeals[8].fat },
        { x: selectedMeals[9].meal_name, y: selectedMeals[9].fat }
        // { x: new Date(2017, 0, 30), y: selectedMeals[0].fat },
        // { x: new Date(2017, 0, 31), y: 45 },
        // { x: new Date(2017, 1, 1), y: 41 },
        // { x: new Date(2017, 1, 2), y: 55 },
        // { x: new Date(2017, 1, 3), y: 80 },
        // { x: new Date(2017, 1, 4), y: 85 },
        // { x: new Date(2017, 1, 5), y: 83 }
      ]
    }]
  });
  chart.render();

  

}

function toggleDataSeries(e) {
	if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
    console.log("false")
	}
	else {
		e.dataSeries.visible = true;
    console.log("true")
	}
	chart.render();
}


window.onload = windowActions;