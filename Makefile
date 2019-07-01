name="London App Brewery Flutter Bootcamp"
description="Implementation of exercises and challenges. \
			 \\nVisit https://www.appbrewery.co/p/flutter-development-bootcamp-with-dart  \
			 \\nfor more information."

.PHONY: help

help:	## Show this help.
	@echo
	@echo "${name}"
	@echo
	@echo "${description}"
	@echo
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

serve:	## Serve locally using webdev.
	@flutter pub global run webdev serve