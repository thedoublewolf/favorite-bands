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
			<ul>${processData(data)}</ul>
		</div>
		<button class="add-button"><i class="fa fa-plus"></i> New Band</button>
	`;
}