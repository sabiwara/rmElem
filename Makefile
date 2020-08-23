.PHONY: firefox
firefox:
	npx web-ext build --source-dir firefox

.PHONY: run
run:
	npx web-ext run --source-dir firefox

.PHONY: bookmarklet
bookmarklet:
	echo -n 'javascript:' > bookmarklet.txt && cat bookmarklet.js | tr '\n' ' ' | sed -r 's/\ +/ /g'  >> bookmarklet.txt
