const intervalTimeStamp = require("../utility");

test("Interval Timestamp Tester", () => {
  const tweets = ["test", "one", "two", "three"];
  const data = {
    selector: "S-E",
    start_time: "2020-03-02T17:00:00",
    end_time: "2020-03-02T17:40:00",
    interval_value: null
  };

  // Minimum date and time to start tweets.
  const startTime = new Date(data.start_time);

  // Max date and time for the tweets to end.
  const endTime = new Date(data.end_time);

  // Interval duration in minutes.
  let interval = Math.floor(data.interval_value * 60000);

  let diff = null;
  // Updates the interval based on the range from start to finish.
  if (data.selector === "S-E") {
    diff = Math.abs(endTime - startTime) / tweets.length;
    interval = Math.floor(diff / 60000);
  }

  const collector = [];
  for (let i = 0; i < tweets.length; ++i) {
    const timestamp = intervalTimeStamp(startTime, interval * 60 * 1000, i + 1);
    collector.push(
      "\n" +
        ("0" + timestamp.getHours()).slice(-2) +
        ":" +
        ("0" + timestamp.getMinutes()).slice(-2) +
        ":00 PM"
    );
  }

  console.log("tweet count:", tweets.length);
  console.log(
    "FROM\t( " + startTime.toLocaleTimeString(),
    ")\nTO\t\t( " + endTime.toLocaleTimeString() + " )"
  );
  console.log("interval time:", interval + " mins \t" + diff + " ms");
  console.log("timestamps:", collector.toString());
});
