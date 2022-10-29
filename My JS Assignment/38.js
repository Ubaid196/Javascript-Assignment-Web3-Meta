//make function describe_country with parameters city, default country name Pakistan

function describe_country(city, country = "Pakistan"){
    console.log(city + " is in " + country + ".")
}
describe_country("Karachi")
describe_country("Islamabad")
describe_country("Moscow", "Russia") //if any city not in Pak must define its country
