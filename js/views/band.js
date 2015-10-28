export default function(data) {
	return `
		<div class="band">
			<h1>${data.Name}</h1>
			<img src="${data.imageUrl}">
			<p>Favorite Album:</p>
			<p>${data.favoriteAlbum}</p>
			<p>Why I like them:</p>
			<p>${data.Description}</p>
		</div>
	`;
}