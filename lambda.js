const astroreha = require("astroreha");


async function handler(event, context) {
  try {
    const body = JSON.parse(event.body);
    const { dateString, timeString, lat, lng, timezone } = body.firstPerson;

    const birthChart = astroreha.positioner.getBirthChart(
      dateString, timeString, lat, lng, timezone
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Here is your birthChart",
        success: true,
        birthChart,
        houses: astroreha.compatibility.getHousesOfChart(birthChart),
        navamsa: astroreha.positioner.getNavamsaChart(birthChart),
        nakshatra: astroreha.compatibility.calculateNakshatra(birthChart),
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error", error: error.message }),
    };
  }
}

exports.handler = handler;