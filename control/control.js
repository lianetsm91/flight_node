const getFlights = (req, res) => {
  const params = Object.keys(req.body).length > 0 ? req.body : req.query;

  const flightListDeparture = [
    {
      id: 1,
      code: 'KGL90',
      price: '$121.00',
      origin: JSON.parse(params.airportOrigin),
      destiny: JSON.parse(params.airportDestiny),
      departureTime: '9:50 AM',
      arrivalTime: '2:20 PM',
      sections: [
        { id: 1, origin: {} },
        { id: 2, origin: {} },
        { id: 3, origin: {} }
      ]
    },
    {
      id: 2,
      code: 'DFV65',
      price: '$111.00',
      origin: JSON.parse(params.airportOrigin),
      destiny: JSON.parse(params.airportDestiny),
      departureTime: '8:30 AM',
      arrivalTime: '11:40 PM',
      sections: [{ id: 1, origin: {} }]
    },
    {
      id: 3,
      code: 'TRJ47',
      price: '$99.00',
      origin: JSON.parse(params.airportOrigin),
      destiny: JSON.parse(params.airportDestiny),
      departureTime: '9:00 AM',
      arrivalTime: '1:35 PM',
      sections: [
        { id: 1, origin: {} },
        { id: 2, origin: {} }
      ]
    },
    {
      id: 4,
      code: 'LIU35',
      price: '$140.00',
      origin: JSON.parse(params.airportOrigin),
      destiny: JSON.parse(params.airportDestiny),
      departureTime: '2:40 PM',
      arrivalTime: '4:20 PM',
      sections: [{ id: 1, origin: {} }]
    }
  ];

  const flightListReturn = Array.isArray(params.date)
    ? [
        {
          id: 1,
          code: 'DBD45',
          price: '$98.00',
          origin: JSON.parse(params.airportDestiny),
          destiny: JSON.parse(params.airportOrigin),
          departureTime: '3:50 PM',
          arrivalTime: '6:00 PM',
          sections: [
            { id: 1, origin: {} },
            { id: 3, origin: {} }
          ]
        },
        {
          id: 2,
          code: 'SVD42',
          price: '$103.00',
          origin: JSON.parse(params.airportDestiny),
          destiny: JSON.parse(params.airportOrigin),
          departureTime: '11:55 AM',
          arrivalTime: '2:50 PM',
          sections: [{ id: 1, origin: {} }]
        }
      ]
    : [];

  setTimeout(
    () => res.status(200).json({ flightListDeparture, flightListReturn }),
    3000
  );
};

module.exports = {
  getFlights
};
