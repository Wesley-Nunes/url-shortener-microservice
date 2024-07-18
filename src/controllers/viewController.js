
import path from 'path';

export const renderIndex = (req, res) => {
	res.sendFile(path.resolve('src/views/index.html'));
};
