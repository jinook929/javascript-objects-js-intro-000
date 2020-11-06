<<<<<<< HEAD
var playlist = { Beatles: "Yesterday", Slowdive: "No"}
=======
var playlist = {}
>>>>>>> b77e976de8c54e06614cca271cc544d4835e7935

function updatePlaylist (playlist, name, title) {
  return Object.assign(playlist, {[name]: title})
}

function removeFromPlaylist (playlist, name) {
<<<<<<< HEAD
  delete playlist[name]
  return playlist
=======
  return delete playlist.name
>>>>>>> b77e976de8c54e06614cca271cc544d4835e7935
}