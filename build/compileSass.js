const path = require('path');
const fs = require('fs');
const sass = require('node-sass');
const {gzip} = require('node-gzip');

const INPUT_FILE = path.resolve(__dirname, '../', 'sass', 'main.scss');
const OUTPUT_FILE = path.resolve(__dirname, '../', 'lib', 'main.css');
const OUTPUT_GZIP_FILE = path.resolve(__dirname, '../', 'lib', 'main.css.gz');

sass.render({
	file: INPUT_FILE,
	outputStyle: 'compressed',
}, (error, result) => {
	if (error) {
		console.log(error);
		process.exit(1);
		return;
	}

	// Write regular file
	fs.writeFile(OUTPUT_FILE, result.css, error => {
		if (error) {
			console.log(error);
			process.exit(1);
			return;
		}
	});

	// Write gzipped file
	gzip(result.css)
		.then(compressed => {
			fs.writeFile(OUTPUT_GZIP_FILE, compressed, error => {
				if (error) {
					console.log(error);
					process.exit(1);
					return;
				}

				process.exit(0);
			});
		})
		.catch(error => {
			if (error) {
				console.log(error);
				process.exit(1);
				return;
			}
		});
});