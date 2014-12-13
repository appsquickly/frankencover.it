# FrankenCov

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

### Now install the script

With the following command, we're installing into the current directory. It could also be placed in a shared location. 

#Usage

#### Set your main App target to produce test coverage output (debug mode only). 

![Enable Coverage](https://raw.github.com/jasperblues/FrankenCov/master/sample_output/Coverage.png)

#### Set your main App target to instrument program flow (debug mode only). 

![Enable Coverage](https://raw.github.com/jasperblues/FrankenCov/master/sample_output/Instrument.png)

#### Create a build script

```sh
# First Run Tests
xcodebuild test -workspace MyProject.xcworkspace/ -scheme 'MyProject' -configuration Debug \
-destination 'platform=iOS Simulator,name=iPhone 5s,OS=8.1' | xcpretty -c --report junit
#Above we are piping the build output through xcpretty, which is not required, but very nice. 
#(gem install xcpretty)

# Now Produce Test Coverage Report
groovy https://raw.github.com/jasperblues/FrankenCov/master/FrankenCov -s Kombie/Classes -o build/reports -r 0
```

. . this ensures using an update to date version. 

#### Alternatively, the script could be installed:

```sh
wget https://raw.github.com/jasperblues/FrankenCov/master/FrankenCov && chmod +x FrankenCov
```

# Output

#### cmd-line

![Enable Coverage](https://raw.github.com/jasperblues/FrankenCov/master/sample_output/output.png)

#### browser

Report file is at `build/reports/coverage/index.html`.

![Enable Coverage](https://raw.github.com/jasperblues/FrankenCov/master/sample_output/report.png)


# LICENSE

Apache License, Version 2.0, January 2004, http://www.apache.org/licenses/

* © 2014 Jasper Blues

