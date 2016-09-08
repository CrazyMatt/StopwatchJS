# StopwatchJS
StopwatchJS allows for efficient and precise time management.
# Use
Use the following to insert StopwatchJS into your webpage.
```html
<script src="http://crazymatt.net/res/scripts/stopwatch.js"></script>
```
You can create a new Stopwatch with:
```javascript
newStopWatch(identifier);
```
You can get the amount of time elapsed since the stopwatch was created with:
```javascript
var elapsedTime = readStopWatch(identifier);
```
By default, `readStopWatch()` returns time in miliseconds.
