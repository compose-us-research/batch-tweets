const intervalTimeStamp = require("../utility");

test("Interval Timestamp Tester", () => {
  const tweets = ["test", "one", "two", "three"];
  const data = {
    selector: "S-E",
    start_time: "2020-03-02T17:19:39",
    end_time: "2020-03-02T17:33:39",
    interval_value: null
  };

  // Minimum date and time to start tweets.
  const startTime = new Date(data.start_time);

  // Max date and time for the tweets to end.
  const endTime = new Date(data.end_time);

  // Interval duration in minutes.
  let interval = Math.floor(data.interval_value * 60000);

  // Updates the interval based on the range from start to finish.
  if (data.selector === "S-E") {
    const diff = Math.abs(endTime - startTime) / tweets.length;
    interval = Math.floor(diff / 60000);
  }

  console.log("================================================");
  console.log({
    // startTime: startTime,
    // endTime: endTime,
    interval: interval
  });
  for (let i = 0; i < tweets.length; ++i) {
    const timestamp = intervalTimeStamp(startTime, interval, i + 1);
    console.log(timestamp);
  }
  console.log("================================================");
});
