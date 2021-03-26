async function windowActions() {
  const request = await fetch('/api/dining');
  const data = await request.json()
  // console.log(data["data"])
  datas = data["data"];
  const hall = document.querySelector('.hall');

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