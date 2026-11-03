---
title: "Sample: Getting started with Meshery"
slug: getting-started-with-meshery
date: 2026-10-20
author: lee-calcote
categories: [Meshery]
tags: [meshery, kubernetes]
thumbnail: cover.png
summary: Placeholder post that exercises shortcodes, page-bundle images, related posts and aliases.
aliases:
  - /blog/meshery/getting-started/
---
This is **sample content** for the POC. It exists to prove every shortcode renders and the image pipeline works.

## Install

{{< terminal title="~/meshery" >}}
brew install mesheryctl
mesheryctl system start
{{< /terminal >}}

## Common questions

{{< accordion >}}
{{< accordion-item title="Does this need Node.js?" >}}No. Hugo is a single Go binary.{{< /accordion-item >}}
{{< accordion-item title="Where do shortcodes live?" open="true" >}}In `layouts/shortcodes/`. See `docs/CHEATSHEET.md`.{{< /accordion-item >}}
{{< /accordion >}}

## Architecture

{{< topology name="meshery" height="320" label="Meshery talking to a cluster and adapters" >}}

{{< cta-fullwidth title="Try it yourself" description="Spin up Meshery locally in a minute." button_text="Read the docs" button_url="https://docs.meshery.io" >}}
