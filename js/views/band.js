export default function(data) {
	return `
		<div class="band">
			<h1 class="name">${data.Name}</h1>
			<img src="${data.imageUrl}">
			<p class="fav">Favorite Album:</p>
			<p class="favname"><i class="fa fa-music"></i> ${data.favoriteAlbum}</p>
			<p class="why">Why I like them:</p>
			<p class="desc"><i class="fa fa-quote-right"></i> ${data.Description}</p>
			<button class="back-button" data-to="bandName">
				<i class="fa fa-arrow-left"></i>
			</button>
		</div>
	`;
}