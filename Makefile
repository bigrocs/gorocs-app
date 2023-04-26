.PHONY: test
test:
	go test main_test.go -test.v
.PHONY: tag
tag:
	git push --tags
.PHONY: run
run:
	