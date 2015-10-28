export default function(data) {
	return `
		<div class="band">
			<h1>${data.Name}</h1>
			<img src="${data.imageUrl}">
			<p>${data.favoriteAlbum}>
			<p>${data.Description}>
		</div>
	`;
}