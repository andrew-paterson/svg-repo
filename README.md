# Make from svg

Takes a single SVG file and generates the addon component files that are required for it tio work as an Ember component, and with the relevant code additions.

`node make-from-svg [path-to-svg-file] [subdir]`

`subDir` refers to which sub-directory of `/svg-repo` to save the file into. It defaults to `icons` if not supplied.