# QPP Submissions API Developer Documentation

Developer documentation for building against the QPP Submissions API. Accessible publicly at https://cmsgov.github.io/qpp-submissions-docs.

### API Tutorials

These are static tutorials designed to illustrate some common workflows when composing API requests together to submit and score performance data. The sample request and response data may be out of date as the API changes, but the workflows must remain valid.

### Data Schema

It's also useful to describe the data being submitted and updated through the API, so these data schemas list the fields belonging to each resource type as well as some supplementary details about concepts like scoring.

References to [qpp-measures-data](https://github.com/CMSgov/qpp-measures-data), the [interactive API reference](https://qpp-submissions-sandbox.navapbc.com/), and the Google Group are also listed.

## Development

We use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to avoid having to make tooling decisions.

We also rely on the [CMSGov Design System](https://github.com/CMSgov/design-system) and the [U.S. Web Design Standards](https://standards.usa.gov/) to help ensure consistency with other government properties.

```bash
npm install
npm start
```

We use Travis CI for testing - add a test if it makes sense, and make sure the build is green before merging.

## Deploy

These docs are hosted on GitHub Pages.

To deploy changes, merge a feature branch into to the master branch (see [CONTRIBUTING.md#merging-to-master](CONTRIBUTING.md#merging-to-master)) and deploy the master branch with the following command:

```bash
npm run deploy
```

Under the hood, the [gh-pages](https://github.com/tschaub/gh-pages) library is used for managing the gh-pages branch.

## Licenses

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
