# Style Guide


## Setup

1. If you haven't already installed [Node][1] and [NPM][2], [install them first][3]. You will need at least Node 0.12 or higher. Make sure NPM is up to date, too.

2. ~~Install Pandoc~~:

        brew install pandoc

3. Checkout the project from GitHub. If you have Git installed on the command line, you can run:

        git checkout git@github.com:jlong/styleguide.git

    If you prefer, you can also install [GitHub for Desktop][4] and download to your Mac with [this link][5].

4. Install the project dependencies. On the command line:

        cd styleguide  # Change to the project directory
        npm install    # Install the npm dependencies
        bower install  # Install the bower dependencies


## Building

To build the HTML and assets for the style guide, from the project directory run:

    npm run build

This will build assets from the `src` directory and copy them into the `build` directory.


## Preview server

To bring up the preview server:

    npm run server

This will launch a preview server here:

  <http://localhost:9000>


## Additional build tasks

This project uses [Gulp][6] to build the HTML and assets. You can see a complete list of the build tasks available in this project with:

    npm run gulp tasks

To run a specific task, use:

    npm run gulp [task name]


[1]: https://nodejs.org
[2]: https://docs.npmjs.com
[3]: http://blog.teamtreehouse.com/install-node-js-npm-mac
[4]: https://desktop.github.com
[5]: github-mac://openRepo/https://github.com/uservoice/styleguide
[6]: http://gulpjs.com/
