proj:
	./node_modules/.bin/doca init -i schema -o proj -t bootstrap
	cp ./config.js proj
	cd proj && yarn

start: proj
	cd proj && npm start
