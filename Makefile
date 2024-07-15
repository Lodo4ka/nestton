deploy:
	npm run build && netlify deploy --dir=dist --prod