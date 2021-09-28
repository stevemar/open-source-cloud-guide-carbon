# Open Source Cloud Guide

A guide, about how open source software.

## Mission statement

Our goal is to convince the reader that open source software is essential to building cloud applications, whether they be on public cloud, private cloud, hybrid cloud, or multi-cloud.

## Background

The rise of cloud computing was built off of open source projects, and open source projects are essential for building cloud applications.

## Who is this for?

Largely, this guide is for software developers and technical folks wanting to know the landscape of open source software and their prevelance at major cloud providers.

## What is this not?

This guide will not:

* Deep-dive on any one technology.
* Exclude any cloud providers.
* Be an exhaustive list of all open source projects in the space.

## Updating pages

Update the following pages:

* [AI](src/pages/guides/ai.mdx)
* [Containers](src/pages/guides/containers.mdx)
* [Databases](src/pages/guides/databases.mdx)
* [Big Data](src/pages/guides/big-data.mdx)
* [Serving APIs](src/pages/guides/serving-apis.mdx)
* [Teaming](src/pages/guides/teaming.mdx) 

## How do I contribute?

Create a PR!

## Where can I view the guide?

<https://stevemar.github.io/open-source-cloud-guide-carbon>

## Build locally

Requirement:

* Node v14 (will not work on later versions)

> NOTE: You can use [n](https://www.npmjs.com/package/n) to switch between Node versions.

Clean files and build with dev mode. Open a browser to `localhost:8000`.

```bash
yarn clean; yarn dev
```

## Deploy

Build the pages

```bash
yarn build:prefix
```

> NOTE: When deploying make use of gatby's `--prefix-paths` option by building with: `yarn build:prefix` as opposed to `yarn build`

View the site, open a browser to `localhost:9000`.

```bash
yarn serve
```
