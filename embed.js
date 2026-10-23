import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js"

/**
 * get a md file
 * @param {string} source 
 */
export async function getFile (source) {
	let res = await fetch(source)
	return await res.text()
}

/**
 * embed markdown text
 * @param {HTMLElement | string} element 
 * @param {string} text 
 */
export async function mdRend (element, mdtext) {
	let elem
	if (typeof element === "string") {
		elem = document.getElementById(element) 
	}
	else if (element instanceof HTMLElement) {
		elem = element
	}
	else {
		throw new TypeError("element must be a string or HTMLElement")
	}
	elem.innerHTML = marked.parse(mdtext)
}

export async function navEmbed () {
	let navText = await getFile("/fhoc9-wiki/nav.html")
	let navs = document.getElementsByClassName("nav")
	for (let nav of navs) {
		nav.innerHTML = navText
	}
}