const Nightmare = require('nightmare')

, nightmare = Nightmare({
	show: process.env.NODE_ENV == 'development' || false
})

console.log('Nightmare script started')
console.log('==========')

;(async () => {
	await nightmare
		.goto('https://blog.oscarmorrison.com/nightmarejs-on-heroku-the-ultimate-scraping-setup/')
		.wait('.post-title')

	console.log(
		await nightmare.evaluate(() =>
			document.querySelector('.post-title').textContent
		)
	)
	console.log('=========')
	console.log('All done')

	await nightmare.end().catch(error => console.error(error))
})()