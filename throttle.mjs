
/**
 * @param {Number} delay
 * @param {Function} callback
 */
function throttle(delay, callback)
	{
	let self = this;

	let lastTimeStamp = 0;

	return e =>
		{
		if ((e.timeStamp - lastTimeStamp) > delay)
			{
			lastTimeStamp = e.timeStamp;

			callback.call(self, e);
			}
		};
	}

export
	{
	throttle
	};
