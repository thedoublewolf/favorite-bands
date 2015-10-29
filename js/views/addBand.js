export default function() {
	return `
		<div class='add-band'>
			<h1>Add Band</h1>
			<form>
				<label>Name: 						<input type="text" class="name"></label>
				<label>Image URL:       	<input type="text" class="image"></label>
				<label>Favorite Album:  <input type="text" class="favAlbum"></label>
				<label>Why I like them: <input type="text" class="descript"></label>
			</form>
			<button class="submit-band">Add Band</button>
		</div>
	`;
}