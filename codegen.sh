#!/usr/bin/env bash

PROJECT_DIR=$(cd $(dirname ${BASH_SOURCE:-$0}) && pwd)
cd ${PROJECT_DIR}

NPM_BIN=${PROJECT_DIR}/node_modules/.bin
OUT_DIR=${PROJECT_DIR}/gen

rm -rf ${OUT_DIR}
mkdir -p ${OUT_DIR}
protoc \
	--plugin="protoc-gen-ts=${NPM_BIN}/protoc-gen-ts" \
	--ts_out="${OUT_DIR}" \
	--ts_opt=no_namespace \
	./proto/*.proto
