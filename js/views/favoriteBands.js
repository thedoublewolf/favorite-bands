function processData(data) {
	return data.map(function(item){
		return `
			<li class="band-name-item" data-band-id='${item.objectId}'>
				<span>${item.Name}</span>
			</li>
		`;
	}).join('');
}

export default function(data) {
	return `
		<div class="band-name">
			<h1>Favorite Bands</h1>
			<ul>${processData(data)}</ul>
			<button class="add-button">Add Band</button>
		</div>
	`;
}