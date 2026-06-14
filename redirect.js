const buttons = document.getElementsByClassName("nav-btn")
const site = "https://obliviouscatalyst.github.io/fhoc9-wiki"
buttons[0].onclick = () => {
	location.href = `${site}/act1/story`
}
buttons[1].onclick = () => {
	location.href = `${site}/act1/enemy`
}
buttons[2].onclick = () => {
	location.href = `${site}/act1/secrets`
}
buttons[3].onclick = () => {
	location.href = `${site}/act2/speculation`
}
buttons[4].onclick = () => {
	location.href = `${site}/act1/strats`
}
buttons[5].onclick = () => {
	location.href = `${site}/sugestions`
}
buttons[6].onclick = () => {
	location.href = `${site}/downlaods`
}
