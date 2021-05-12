const astroreha = require("astroreha");

async function astroRoutes(fastify, opts) {
  fastify.post(
    "/astrodetails",
    {
      ...opts,
      schema: {
        body: {
          type: "object",
          properties: {
            firstPerson: {
              type: "object",
              properties: {
                dateString: {
                  type: "string",
                },
                timeString: {
                  type: "string",
                },
                lat: {
                  type: "number",
                },
                lng: {
                  type: "number",
                },
                timezone: {
                  type: "number",
                },
              },
            },
          },
        },
      },
    },
    async (request, reply) => {
      const getBirthChart = astroreha.positioner.getBirthChart(
        request.body.firstPerson.dateString,
        request.body.firstPerson.timeString,
        request.body.firstPerson.lat,
        request.body.firstPerson.lng,
        request.body.firstPerson.timezone
      );
      return reply.code(200).send({
        message: "Here is your birthChart",
        success: true,
        birthChart: getBirthChart,
        houses: astroreha.compatibility.getHousesOfChart(getBirthChart),
        navamsa: astroreha.positioner.getNavamsaChart(getBirthChart),
        nakshatra: astroreha.compatibility.calculateNakshatra(getBirthChart),
      });
    }
  );
}

module.exports = astroRoutes;
