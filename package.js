Package.describe({
    name: 'danimal:cue',
    version: '1.0.12',
    summary: 'Job Queue for Meteor',
    git: 'https://github.com/dan335/cue',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.3.1');
    api.use('mongo');
    api.use('templating', 'client');
    api.use('fongandrew:find-and-modify@0.1.2');
    api.use('momentjs:moment@2.9.0');
    api.addFiles([
        'collections.js',
        'templates/methods.js'
        ]);
    api.addFiles([
        'cue.js',
        'templates/publish.js'
        ], 'server');
    api.addFiles([
        'templates/cueJobs.html',
        'templates/cueJobs.js',
        'templates/cueTasks.html',
        'templates/cueTasks.js',
        'templates/cueStats.html',
        'templates/cueStats.js',
        'templates/cue.css'
        ], 'client');
    api.export('Cue', 'server');
    api.export([
        'CueStats',
        'CueData',
        'CueTasks'
        ]);
});
