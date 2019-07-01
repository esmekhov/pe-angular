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


