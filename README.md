# FrankenCoverage

Producing a test coverage report for iOS and OSX projects requires a mish-mash of tools and steps. Here we've glued them all together into something that (hopefully) just works. 

* Produces an HTML test coverage report with the least possible steps. 
* Includes a coverage checker. This can be used in CI builds to check minumum test coverage - failing the build if coverage falls below the required amount. 
 
#Installing

First install dependencies. . .

### With HomeBrew

```sh
brew install wget
brew install groovy
brew install lcov
```

### With MacPorts

```sh
sudo port install wget
sudo port install groovy
sudo port install lcov
```

### Now install the script

Here we're installing into the current directory, it could also be placed in a shared location. 

```sh
wget https://raw.github.com/jasperblues/FrankenCoverage/master/FrankenCoverage && chmod +x FrankenCoverage 
```

#Usage

#### Set your main App target to produce test coverage output (debug mode only). 

![Enable Coverage](https://raw.github.com/jasperblues/FrankenCoverage/master/sample_output/Coverage.png)

#### Set your main App target to instrument program flow (debug mode only). 

![Enable Coverage](https://raw.github.com/jasperblues/FrankenCoverage/master/sample_output/Instrument.png)

#### Create a build script

```sh
# First Run Tests
xcodebuild test -workspace MyProject.xcworkspace/ -scheme 'MyProject' -configuration Debug \
-destination 'platform=iOS Simulator,name=iPhone 5s,OS=8.1' | xcpretty -c --report junit
#Above we are piping the build output through xcpretty, which is not required, but nice. 
#gem install xcpretty

# Now Produce Test Coverage Report
./FrankenCoverage -source-dir MyProject/Classes -output-dir build/reports -required-coverage 85 
```

# Output

#### cmd-line

![Enable Coverage](https://raw.github.com/jasperblues/FrankenCoverage/master/sample_output/output.png)

#### browser

Report file is at `build/reports/coverage/index.html`.

![Enable Coverage](https://raw.github.com/jasperblues/FrankenCoverage/master/sample_output/report.png)


# LICENSE

Apache License, Version 2.0, January 2004, http://www.apache.org/licenses/

* © 2014 Jasper Blues

