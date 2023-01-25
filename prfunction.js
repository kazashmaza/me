<script>
  // Get the button element by its id
  var generateBtn = document.getElementById("generate-press-release");

  // Add an event listener to the button to listen for a click event
  generateBtn.addEventListener("click", function(event) {
    event.preventDefault();

    // Get the values from the input fields
    var artistName = document.getElementById("artist-name").value;
    var albumName = document.getElementById("album-name").value;
    var releaseDate = new Date(document.getElementById("release-date").value);
    var recordLabel = document.getElementById("record-label").value;
    var genre = document.getElementById("genre").value;
    var trackList = document.getElementById("track-list").value.split(', ');
    var artistBio = document.getElementById("artist-bio").value;
var inspiration = document.getElementById("inspiration").value;
var artistQuote = document.getElementById("artist-quote").value;

    
    

    // press release template
   var pressRelease = `
Press Release

${artistName} Announces the Release of New Album ${albumName}

${artistName}, an up-and-coming artist in the ${genre} scene, is excited to announce the release of their new album ${albumName} on ${releaseDate.toDateString()}. The album, which is being released under ${recordLabel}, features the following tracks:

${trackList.map((track, index) => `${index + 1}. ${track}`).join('\n')}

${artistName} says, "${artistQuote}"

${artistName} was inspired by ${inspiration} when creating ${albumName}.

${artistBio}

This new album represents a significant step forward in ${artistName}'s career and is sure to be a hit with fans of ${genre} music.
`;


// Get the div element where the press release will be displayed
var pressReleaseDiv = document.getElementById("generated-press-release");

// Insert the press release into the div element
pressReleaseDiv.innerHTML = pressRelease;
});
</script>
