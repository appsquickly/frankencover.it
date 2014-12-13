# FrankenCover

Producing a test coverage report for iOS and OSX projects requires a mish-mash of tools and steps. Here we've glued them all together into something that (hopefully) just works. 

* Produces an HTML test coverage report with the least possible steps. 
* Includes a coverage checker. This can be used in CI builds to check minumum test coverage - failing the build if coverage falls below the required amount. 
 
#Installing

The script itself can be run remotely, but we'll first need to install dependencies .  .

### With HomeBrew

```sh
brew install groovy
brew install lcov
```

### With MacPorts

```sh
sudo port install groovy
sudo port install lcov
```

#Usage

Set your main App target to produce test coverage output (debug mode only). 

![Enable Coverage](http://appsquickly.github.io/FrankenCover/images/Coverage.png)

Set your main App target to instrument program flow (debug mode only). 

![Enable Instrumentation](http://appsquickly.github.io/FrankenCover/images/Instrument.png)

#### IDE Use

Run tests in your IDE (AppCode or Xcode) and produce a report with: 

```sh
groovy http://appsquickly.github.io/FrankenCover/with -source-dir MyProject/Source
```

##### Build server or cmd-line use

Create a build script as follows

```sh
# First Run Tests
xcodebuild test -workspace MyProject.xcworkspace/ -scheme 'MyProject' -configuration Debug \
-destination 'platform=iOS Simulator,name=iPhone 5s,OS=8.1' | xcpretty -c --report junit
#Above we are piping the build output through xcpretty, which is not required, but very nice. 
#(gem install xcpretty)

# Now Produce Test Coverage Report
groovy http://appsquickly.github.io/FrankenCover/with -source-dir MyProject/Source -required-coverage 85
#Above we are setting the required coverage to 85%. The build will fail if coverage falls below this value. 
```

. . this ensures using an update to date version. 

#### Install locallay

If you don't want to run the hosted script, it can be installed locally with:

```sh
curl -SSL wget http://appsquickly.github.io/FrankenCover/with > FrankenCover && chmod +x FrankenCover
```

# Output

#### cmd-line

![Output](http://appsquickly.github.io/FrankenCover/images/output.png)

#### browser

Report file is at `build/reports/coverage/index.html`.

![Browser](http://appsquickly.github.io/FrankenCover/images/report.png)


# LICENSE

Apache License, Version 2.0, January 2004, http://www.apache.org/licenses/

* © 2014 Jasper Blues

