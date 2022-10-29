//created function make_album applied ifelse cond by creating two objects any cond fulfil it will return that object

function make_album(artist, album, track = '') {   //track = '' if not write like this just write track it will give undefined 
    if (track === '') {
        object1 = {
            Artist : artist,
            Album : album,
        }
        return object1
    } else {
        object2 = {
            Artist : artist,
            Album : album,
            track : track
        }
        return object2
    }
}
console.log(make_album("Atif Aslam", "Tajdar e Haram"))
console.log(make_album("Alan Walker", "Different World", 5))
console.log(make_album("Michael Jackson", "Off the Wall", 3))