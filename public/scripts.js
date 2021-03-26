async function windowActions() {
  const request = await fetch('/api/dining');
  const data = await request.json();
}

window.onload = windowActions;