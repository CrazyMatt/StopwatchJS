/*
	StopWatch.js
	
	Copyright (c) 2016 Crazymatt.net
	
	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
	documentation files (the "Software"), to deal in the Software without restriction, including without limitation
	the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
	and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of this Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
	THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
	TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	
*/

var stopwatchData = {
	stopwatches: {},
	pageBeginDate: Date.now()
};

		
function newStopWatch(identifier, start_at = Date["now"]()){
	stopwatchData.stopwatches[identifier] = {startTime: start_at};
}

function readStopWatch(identifier, output_unit = "ms"){
	var actualTime = Date.now() - stopwatchData.stopwatches[identifier].startTime;
	
	switch(output_unit){
		case "ms":
			return actualTime;
			break;
		case "s":
			return Math.floor(actualTime/1000);
			break;
		case "m":
			return Math.floor(actualTime/60000);
			break;
		case "h":
			return Math.floor(actualTime/3600000);
			break;
		case "d":
			return Math.floor(actualTime/86400000);
			break;
	}
}
