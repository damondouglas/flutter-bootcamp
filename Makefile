name="London App Brewery Flutter Bootcamp"
description="Implementation of exercises and challenges. \
			 \\nVisit https://www.appbrewery.co/p/flutter-development-bootcamp-with-dart  \
			 \\nfor more information."

publish="../publish-londonappbrewery-flutter-bootcamp"

.PHONY: help

help:	## Show this help.
	@echo
	@echo "${name}"
	@echo
	@echo "${description}"
	@echo
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'


dependencies:  ## Fetch webdev and peanut (i.e. pub global activate ...)
	@pub global activate peanut
	@pub global activate webdev

serve:	## Serve locally using webdev.
	@webdev serve


build:  ## Build application.
	@peanut

