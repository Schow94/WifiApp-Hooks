// import React, { useState, useContext } from 'react';
// import { LocationContext } from './contexts/LocationContext';

// import axios from 'axios';

// const API_KEY =
//   'Li5lf6uc6T_PcnX4CSB1TAE9piKJ6OQ-Cgth2uk3qvJ03br_EZgUX1R8oEv_EXnZ5yqwrXMhgKX6sUb1V4ppXtpNNe8e0hA2vtWAKsO1RnhARMAsSr6XLdiL1F11XXYx';

// const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`;

// const useYelp = () => {
//   const [biz, setBiz] = useState([]);
//   const usePosition = useContext(LocationContext);
//   const { lat, long } = usePosition();

//   const getBiz = async () => {
//     let res = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${API_KEY}`
//       },
//       params: {
//         latitude: lat,
//         longitude: long,
//         term: 'free wifi'
//         // sort_by: 'distance'
//       }
//     });

//     let businesses = res.data.businesses;
//     // console.log(businesses);
//     return businesses.map(x => {
//       return setBiz(biz => [...biz, x]);
//     });
//   };
//   return [biz, setBiz];
// };

// export default useYelp;
