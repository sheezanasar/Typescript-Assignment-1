"use strict";
function describeCity(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}
describeCity('Karachi');
describeCity('Lahore');
describeCity('New York', 'United States');
