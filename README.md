JS Build/Test Example
===================

An example project for testing JavaScript applications with QUnit, PhantomJS and ANT.

## Notes

1. This is a sample project and not intended for production use
2. The target build server for this project is [Atlassian Bamboo](http://www.atlassian.com/software/bamboo/overview). I haven't written anything to prevent other CI servers from working with this project but some settings may be configured for Bamboo.
3. This project uses a couple of git submodules.  For the project to work correctly, you'll need to use the --recursive flag when cloning the repo.
4. One of the submodules used is [JUnit reporter for QUnit](https://github.com/jquery/qunit-reporter-junit) which means that the output of the QUnit tests will be in JUnit XML format.

## Dependencies

1. [PhantomJS](http://phantomjs.org/download.html)
2. [Apache ANT](http://ant.apache.org/bindownload.cgi)
3. Java 1.6+

## Usage

    $ git clone https://github.com/lwndev/js-build-test-example.git
    $ ant build



