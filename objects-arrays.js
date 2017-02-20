// 1. Make an array of objects, each representing a song
// 2. Map those to a new array with just song titles & console log 


var songs = [
    {
        title: 'My Shot',
        year: 2015,
        performer: 'Hamilton'
    },
    {
        title: 'The Schuyler Sisters',
        year: 2015,
        performer: 'Schuyler Sisters'

    },
    {
        title: 'Satisfied',
        year: 2015,
        performer: 'Angelica Schuyler'
    },
    {
        title: 'History Has Its Eyes On You',
        year: 2015,
        performer: 'Washington'
    }
];

var songTitles = getSongTitles(songs);

function getSongTitles(listOfSongs) {
    return listOfSongs.map(function(song) {
        return song.title;
    }); 
}

console.log(songTitles); 
da