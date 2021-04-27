/**
 * Методы обьекта и this при обращении к свойствам
 * 
 *  - changeName
 *  - addTrack
 *  - updateRating
 *  - getTrackCount
 * 
 */

const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
    changeName(newName) {
        // console.log('this внутри changeName: ', this);

        this.name = newName;
    },
    addTrack(track) {
        this.tracks.push(track);
        this.trackCount = this.tracks.length;
    },
    updateRating(newRating) {
        this.rating = newRating;
    }
}

playlist.changeName('Новое имя');

playlist.addTrack('новый трек');

playlist.updateRating(4);

console.log(playlist);