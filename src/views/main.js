
document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('apiForm').addEventListener('submit', async (ev) => {
		ev.preventDefault();
		const urlInput = document.getElementById('url_input').value;
		const resultDiv = document.getElementById('result');
		resultDiv.innerHTML = 'Loading...';

		try {
			const response = await fetch('api/shorturl', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ url: urlInput })
			});
			const data = await response.json();
			resultDiv.innerHTML = `<pre class="json-pretty">${formatJson(data)}</pre>`;
		} catch (error) {
			resultDiv.innerHTML = 'An error occurred: ' + error.message;
		}
	});

	const formatJson = (json) => {
		const jsonString = JSON.stringify(json, null, 4);
		return jsonString.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(:?))/g, (match) => {
			let cls = 'number';
			if (/^"/.test(match)) {
				if (/:$/.test(match)) {
					cls = 'key';
				} else {
					cls = 'string';
				}
			} else if (/true|false/.test(match)) {
				cls = 'boolean';
			} else if (/null/.test(match)) {
				cls = 'null';
			}
			return `<span class="${cls}">${match}</span>`;
		});
	}
});

