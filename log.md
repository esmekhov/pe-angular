# Working log

## send to
stephanie.von.platen@payever.org 

-- Meeting started (15:30), all timestamps local (MSK)

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
resolved later

## Paging is stuck with wrong page during first load

-- meeting ended here -- (16:50)

page info is not required, every page is supplied with information
(even if it's wrong)

redid users service to fetch page
removed extra services and resolvers

## Table is styled incorrectly (not full width), started 17:20
Set css for component (width 100%)

## Card is not styled, started 17:22
Copied card template from angular material and adjusted

## User data shows a console error, started 17:30
Added ngIf to stop trying to display component

## Toolbar with back button is not styled, started 17:35
Added styles from material, imported toolbar

## Basic error handling, started 17:45
Failed - time limit is up (18:10)
(added handlers to the service, but not to client-facing code)
Refactored obsolete http client

## Removed extra core module import
(when finishing this report, 18:10)
also removed init by function call

# Known issues to resolve, if there was more time
* Error handling is basically non-existent
* Data is not cached - maybe storage would do nicely
* Tests are non-existent
* Animations/spinners are non-existent for table (user has one, but it's not much)

# Personal opinion
This was a nice task, even if I was too slow to complete it.
Not everyone who uses Angular is familiar with default Angular Material library,
development environment specifications _must_ be sent before the task (see node_sass problem).
