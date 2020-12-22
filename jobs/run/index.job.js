const CronJob = require('cron').CronJob;

const User = require('../todos/user.todo')

const job = new CronJob(
	'0 0 */3 * *', User.DropTokenOverTime, null, true, 'Asia/Ho_Chi_Minh'
	// '*/10 * * * * *', User.DropTokenOverTime, null, true, 'Asia/Ho_Chi_Minh'
);

job.start()
// job.stop()
