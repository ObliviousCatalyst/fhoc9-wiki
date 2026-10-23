import { getFile, mdRend, navEmbed } from "./embed.js"
getFile("changelog.md").then((text) => mdRend("changelog",text))
navEmbed()