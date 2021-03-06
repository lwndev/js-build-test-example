JS Build/Test Example
===================

An example project for testing JavaScript applications with QUnit, PhantomJS and ANT.

## Notes

1. This is a sample project and not intended for production use
2. The target build server for this project is [Atlassian Bamboo](http://www.atlassian.com/software/bamboo/overview). I haven't written anything to prevent other CI servers from working with this project or that would keep the project from running locally, but some settings may be configured for Bamboo.
3. This project uses git submodules.  For the project to work correctly, you'll need to use the --recursive flag when cloning the repo.
    - The currently-used submodules are:
          * [QUnit](https://github.com/jquery/qunit.git)    
          * [JUnit reporter for QUnit](https://github.com/jquery/qunit-reporter-junit)
4. The output of the QUnit tests will be in JUnit XML format.

## Dependencies

1. [PhantomJS](http://phantomjs.org/download.html) (Use version 1.8 or higher)
2. [Apache ANT](http://ant.apache.org/bindownload.cgi)
3. Java 1.6+

## Usage

    $ git clone https://github.com/lwndev/js-build-test-example.git
    $ ant build

This will run the tests and save them as a file called results.xml in the /test-output directory.
