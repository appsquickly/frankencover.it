<a href="http://frankencover.it">![frankencover.it](http://frankencover.it/images/splash.png)</a>


Producing a test coverage report for iOS and OSX projects requires a mish-mash of tools and steps. Here we've glued them all together into something that (hopefully) just works. 

* Generates a report with minimal steps.
* Outputs to the terminal as well as produces a detailed report in build-server friendly HTML format.
* Includes a coverage checker. This can be used in CI builds to check minimum test coverage - failing the build if coverage falls below the required amount.
* Free for both commercial and open-source projects.

 
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

*NB:* Xcode 6.x requires lcov 1.11, please ensure that you have this version with `lcov --version`

#Usage

Set your main App target to produce test coverage output (debug mode only). 

![Enable Coverage](http://frankencover.it/images/Coverage.png)

Set your main App target to instrument program flow (debug mode only). 

![Enable Instrumentation](http://frankencover.it/images/Instrument.png)

### IDE Use

Run tests in your IDE (AppCode or Xcode) and produce a report with: 

```sh
groovy http://frankencover.it/with -source-dir MyProject/Source
```

### Build server or cmd-line use

Create a build script as follows

```sh
# First Run Tests
xcodebuild test -workspace MyProject.xcworkspace/ -scheme 'MyProject' -configuration Debug \
-destination 'platform=iOS Simulator,name=iPhone 5s,OS=8.1' | xcpretty -c --report junit
#Above we are piping the build output through xcpretty, which is not required, but very nice. 
#(gem install xcpretty)

# Now Produce Test Coverage Report
groovy http://frankencover.it/with -source-dir MyProject/Source -required-coverage 85
#Above we set required coverage to 85%. Build fails if coverage falls below this value. 
```

. . this ensures using an update to date version. 

# Output

#### cmd-line

![Output](http://frankencover.it/images/output.png)

#### browser

Report file is at `build/reports/coverage/index.html`.

![Browser](http://frankencover.it/images/report.png)

#### Install locally

If you don't want to run the hosted script, it can be installed locally with:

```sh
curl -SSL https://frankencover.it/with > FrankenCover && chmod +x FrankenCover
```


# Swift Code Coverage

At the present time Swift Code coverage because the compiler currently ignores instructions to instrument the codebase. Please vote for this OpenRadar issue.

# Like this project? 

frankencover.it is a non-profit, community driven project. We only ask that if you've found it useful to star us on Github or send a tweet mentioning us (<a href="https://twitter.com/appsquickly">@appsquickly</a>). frankencover.it is sponsored and lead by <a href="http://appsquick.ly">appsquick.ly</a>, with contributions from around the world. 

## A big thank you to the following contributors: 

* <a href="https://github.com/alexargo">Alex Argo</a> : Feedback & fixes for directories with unusual characters
* <a href="https://github.com/hybridcattt">Hybrid Cat</a> : Exclusions, html report configs. 
 
## Contributing

For now, the script, along with documentation is located on the gh-pages branch. 


# LICENSE

Apache License, Version 2.0, January 2004, http://www.apache.org/licenses/

* © 2014 Jasper Blues

