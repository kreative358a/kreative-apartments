#!/bin/bash

set -o errexit
set -o nounset

# określamy wykonywaniu plików obserwowanych.

exec watchfiles --filter python celery.__main__.main --args '-A config.celery_app worker -l INFO'