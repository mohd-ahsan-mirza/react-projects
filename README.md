# Description
Collection of my react projects

# Prerequisites
* node => 10.15.0
* npm => 3.10.10
* react => 2.1.3
* git =>  2.20.1
* gsed => 4.7

# Setup
For each react project cd into the project and run the following command
```
npm install
```

# Projects
## Initial-build
The bash script creates and deploys an intial react app for you on github
You will also need git running on your commandline

### Note: Before running this script, initialize an empty repo on github
```
$1 = Repo name
$2 = Github username
$3 = Github password
```
Pass in the parameters as shown above.

After the app has been published, open your package manager and copy paste the url for the homepage of your app into your browser. You should see the boilerplate react provides

## Cron Graph Plotter
I built this tool to help me visualize what time(s) will a cronjob run for a given date in a 24 hour period

[URL]( https://mohd-ahsan-mirza.github.io/cron-graph-plotter/)
[Source Code](https://github.com/mohd-ahsan-mirza/react-projects/tree/master/cron-graph-plotter)

## Compare Lists
This tool helps me get common and uncommon elements between two lists. Very helpful in huge IN clause queries where the number of entries in the IN clause don't match with the number of rows returned.

[URL](https://mohd-ahsan-mirza.github.io/compare-lists/)

[Source Code](https://github.com/mohd-ahsan-mirza/react-projects/tree/master/compare-lists)

## List Manipulator
Normally I would have to write large SQL queries at work, and the IN clause normally would have multiple values in it.
This tool allows me to format any list of IDs I would need in the IN clause by just click of two buttons.

Use the demo button to see an example usage

[URL](https://mohd-ahsan-mirza.github.io/list-manipulator/ )

[Source Code](https://github.com/mohd-ahsan-mirza/react-projects/tree/master/list-manipulator)

## Digital Resume
Graphical representation of my skills and experience using Chartjs

[URL](https://mohd-ahsan-mirza.github.io/digital-resume/)

[Source Code](https://github.com/mohd-ahsan-mirza/react-projects/tree/master/digital-resume)



