const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=74771ff58ffc1c306a666e28234bd0ff&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                forecastDesc: body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out, but feels like ' + body.current.feelslike,
                forecastIcon: body.current.weather_icons[0]
            })
        }
    })
}

module.exports = forecast