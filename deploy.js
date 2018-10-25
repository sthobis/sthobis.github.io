const fs = require("fs");
const ghpages = require("gh-pages");

const BUILD_DIR = "build";
const BRANCH = "master";

// set .nojekyll files on build folder
// https://github.com/zeit/next.js/wiki/Deploying-a-Next.js-app-into-GitHub-Pages
console.log("Starting deployment to github pages...");
fs.copyFile("./.nojekyll", `./${BUILD_DIR}/.nojekyll`, function(err) {
  if (err) {
    console.log(`Failed to copy '.nojekyll' into ${BUILD_DIR}`);
    console.error(err);
  } else {
    console.log(`Copied '.nojekyll' into ${BUILD_DIR}`);

    // deploy to github
    console.log("Publishing...");
    ghpages.publish(
      BUILD_DIR,
      {
        repo: "https://github.com/sthobis/sthobis.github.io.git",
        branch: BRANCH,
        dotfiles: true
      },
      function(err) {
        if (err) {
          console.log("Publish failed.");
          console.error(err);
        } else {
          console.log(
            `Published '${BUILD_DIR}' directory to 'origin/${BRANCH}' branch.`
          );
        }
      }
    );
  }
});
