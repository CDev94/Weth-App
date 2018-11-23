import React from 'react';
import '../components/SeasonDisplay.css';

// config data for the seasons
  const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },

    winter: {
        text: "Burrrr, it is freeeezing out here!",
        iconName: 'snowflake'
    }
  };

  // determines latitude and month for the weather
  const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter';
    } 
    else {
      return  lat > 0 ? 'winter' : 'summer';
    }
    
  };

 const SeasonDisplay  = props => {



  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];


  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon-left massive icon`} />
      <h1>{text}</h1>
       <i className={`${iconName} icon-right massive icon`} />
       </div>
    
  )
}

export default SeasonDisplay;