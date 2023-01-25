// press release information
var artistName = "John Smith";
var albumName = "Dreamland";
var releaseDate = new Date();
var recordLabel = "ABC Records";
var genre = "Indie Pop";
var trackList = ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"];

// press release template
var pressRelease = `
Press Release

${artistName} Announces the Release of New Album ${albumName}

${artistName}, an up-and-coming artist in the ${genre} scene, is excited to announce the release of their new album ${albumName} on ${releaseDate.toDateString()}. The album, which is being released under ${recordLabel}, features the following tracks:

${trackList.map((track, index) => `${index + 1}. ${track}`).join('\n')}

This new album represents a significant step forward in ${artistName}'s career and is sure to be a hit with fans of ${genre} music.

"I'm thrilled to finally be releasing ${albumName}. I've put so much into this album and I can't wait for everyone to hear it," said ${artistName}
`;
console.log(pressRelease);
