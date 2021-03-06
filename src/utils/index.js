export const timeSince = timestamp => {
	const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);

	let interval = Math.floor(seconds / 31536000);

	if (interval > 1) {
		return interval + " anos";
	}

	interval = Math.floor(seconds / 2592000);
	if (interval > 1) {
		return interval + " meses";
	}

	interval = Math.floor(seconds / 86400);
	if (interval > 1) {
		return interval + " dias";
	}

	interval = Math.floor(seconds / 3600);
	if (interval > 1) {
		return interval + " horas";
	}

	interval = Math.floor(seconds / 60);
	if (interval > 1) {
		return interval + " minutos";
	}

	return Math.floor(seconds) + " segundos";
};

export const client = (endpoint, { body, ...customConfig } = {}) => {
	const token = localStorage.getItem("token");
	const headers = { "Content-Type": "application/json" };

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	const config = {
		method: body ? "POST" : "GET",
		...customConfig,
		headers: {
			...headers,
			...customConfig.headers
		}
	};

	if (body) {
		config.body = JSON.stringify(body);
	}

	return fetch(`${process.env.REACT_APP_BACKEND_URL}${endpoint}`, config).then(
		async res => {
			const data = await res.json();

			if (res.ok) {
				return data;
			} else {
				return Promise.reject(data);
			}
		}
	);
};

export const uploadImage = file => {
	const data = new FormData();
	data.append("file", file);
	data.append("upload_preset", "otwdwv0m");

	return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
		method: "POST",
		body: data
	}).then(res => res.json());
};
