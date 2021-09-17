function generateLocation(latitude, longitude, max) {
    // radius of the earth in miles
    const rEarth = 3961;

    // calculate 1 degree latitude in miles
    const miles = rEarth * 2 * Math.PI / 360;

    // generate random distance within max in miles in a NON-UNIFORM way
    // to generate random points over the unit disk, we cannot use two uniformly distributed
    // variables because that would give a concentration of points in the center
    const maxDistance = max;
    const r = (maxDistance * Math.random() ** 0.5);

    // generate random angle in radians
    const theta = Math.random() * 2 * Math.PI;

    // calculates randomized changes to user's latitude and longitude
    const dy = r * Math.sin(theta);
    const dx = r * Math.cos(theta);

    // creates new latitude and longitude coordinates for user
    // latitude: the angular distance of a place north or south of the earth's equator
    // longitude: the angular distance of a place east or west of the meridian
    // note: 1 degree of latitude is always ~69 miles BUT 1 degree of longitude is ~69 miles
    // at the equator but 0 miles at the poles (not equidistant), so we need to adjust the newLongitude
    // based on distance from equator
    let newLatitude = latitude + dy / miles;
    let newLongitude = longitude + dx / (miles * Math.cos(degreesToRadian(latitude)));

    // get distance between current location and randomized location
    const distance = getDistanceBetweenInMiles(latitude, longitude, newLatitude, newLongitude);

    return {
        newLatitude,
        newLongitude,
        // rounds distance to one decimal place
        distance: Math.round(distance * 10) / 10
    };
}

function getDistanceBetweenInMiles(lat1, lon1, lat2, lon2) {
    // radius of the earth in miles
    const rEarth = 3961;

    // convert degrees to radian
    const rLat = degreesToRadian(lat2 - lat1);
    const rLon = degreesToRadian(lon2 - lon1);

    // implementation of the Haversine formula for calculating
    // geographic distance on earth (great-circle distance between
    // two points on the surface of a sphere)
    const a =
        Math.sin(rLat / 2) * Math.sin(rLat / 2) +
        Math.cos(degreesToRadian(lat1)) * Math.cos(degreesToRadian(lat2)) *
        Math.sin(rLon / 2) * Math.sin(rLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // returns the angle of an (x,y) point
    const d = rEarth * c; // distance in miles = Radius of earth * c

    return d;
}

function degreesToRadian(deg) {
    return deg * (Math.PI / 180)
}

// test methodology