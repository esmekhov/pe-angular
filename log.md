# Working log

## send to
stephanie.von.platen@payever.org 

-- Meeting started (15:30)

# Issues
## Took 30 minutes to install project
node-sass requires --unsafe-perm to run post-script
apparently it also requires node 10.x, not 10.x and later

``../src/create_string.cpp:17:37: error: no matching function for call to ‘v8::String::Utf8Value::Utf8Value(v8::Local<v8::Value>&)’
     v8::String::Utf8Value string(value);
``

-- had to remove node 12 from nodesource

## Circular dependency
Fixed import in services

## HammerJS is not available
install 'hammerjs' as a package, add it to polyfills as provided
in instruction to angular material

## Service is mapped incorrectly
(fetchUserById) - adjust typings and result
also needs error handling

## Paging is not working
runGuardsAndResolvers: 'always'
for routing module

## HTTP is outdated for angular
wontfix - not during timerace
do plan after release

## Core module is inited twice
Sorry, no idea

## Paging is stuck with wrong page during first load

-- meeting ended here -- (16:50)

page info is not required, every page is supplied with information
(even if it's wrong)

redid users service to fetch page
