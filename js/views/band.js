export default function(data) {
	return `
		<div class="band">
			<button class="back-button" data-to="bandName">
				<i class="fa fa-arrow-left"></i>
			</button>
			<h1>${data.Name}</h1>
			<img src="${data.imageUrl}">
			<p>Favorite Album:</p>
			<p>${data.favoriteAlbum}</p>
			<p>Why I like them:</p>
			<p>${data.Description}</p>
		</div>
	`;
}