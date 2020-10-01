const axios = require("axios");

const yelp = () => {
  return axios
    .get("https://api.yelp.com/v3/businesses/search", {
      params: {
        location: "Los Angeles",
      },
      headers: { Authorization: `Bearer ${process.env.API_KEY}` },
    })
    .then(response => response)
    .catch(error => error);
};

module.exports = {
  yelp: yelp,
};
