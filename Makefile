.PHONY: firefox
firefox:
	cd firefox && zip -r -FS ../rmElem.zip * --exclude '*.git*'

.PHONY: bookmarklet
bookmarklet:
	echo -n 'javascript:' > bookmarklet.txt && cat bookmarklet.js | tr '\n' ' ' | sed -r 's/\ +/ /g'  >> bookmarklet.txt
