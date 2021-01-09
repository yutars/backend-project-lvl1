install :
	npm install
brain-games :
	node bin/brain-games.js
brain-event :
	node bin/brain-event.js
lint : 
	npx eslint .
publish :
	npm publish --dry-run
