const Nightmare = require('nightmare')

, nightmare = Nightmare({
	show: process.env.NODE_ENV == 'development' || false
})

console.log('Nightmare script started')
console.log('==========')
const rncUrl = "https://dgii.gov.do/app/WebApps/ConsultasWeb2/ConsultasWeb/consultas/rnc.aspx";

;(async () => { 
	
const	result = await  nightmare
	.goto(rncUrl)
	.wait("body")
	.type("#cphMain_txtRNCCedula", '40223486859')
	.click("#cphMain_btnBuscarPorRNC")
	.wait(() => {
		const tbody = document.querySelector("tbody");
		const lblIn = document.querySelector("#cphMain_lblInformacion");
		return (!(tbody === null && lblIn.innerText === ""))})
	.evaluate(() => document.querySelector("body").innerHTML)
	.end()
   


	console.log(result)
	console.log('All done')

	await nightmare.end().catch(error => console.error(error))
})()