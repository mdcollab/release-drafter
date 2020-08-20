const { SORT_BY, SORT_DIRECTIONS } = require('./sort-pull-requests')

const DEFAULT_CONFIG = Object.freeze({
  'name-template': '',
  'tag-template': '',
  'change-template': `* $TITLE (#$NUMBER) @$AUTHOR`,
  'no-changes-template': `* No changes`,
  'version-template': `$MAJOR.$MINOR.$PATCH`,
  'version-resolver': {
    major: { labels: [] },
    minor: { labels: [] },
    patch: { labels: [] },
    default: 'patch',
  },
  categories: [],
  'exclude-labels': [],
  'include-labels': [],
  replacers: [],
  'sort-by': SORT_BY.mergedAt,
  'sort-direction': SORT_DIRECTIONS.descending,
  prerelease: false,
  'ignore-prereleases': false
})

module.exports.DEFAULT_CONFIG = DEFAULT_CONFIG
