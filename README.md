guide-app
=========

A generic guide app for shop guides

**A newer version of this app is available [here](https://github.com/contentful/guide-app-sw). The new version makes use of newer React.js features which make it much easier to understand, so we'd recommend you look at that instead**.

A [React.js](http://facebook.github.io/react/) based app, using [Contentful](https://www.contentful.com/) as a data storage. Renders from
the server on initial load and it renders on the client on subsequent
loads, making use of [react-router-component](andreypopp.viewdocs.io/react-router-component).

Vaguely based on [react quickstart](https://github.com/andreypopp/react-quickstart).

That means it will still (mostly) work if your JS is deactivated.

Uses browserify to serve client side JS.

See the [Contentful Developer Documentation](https://www.contentful.com/developers) to learn more about the API.

When time allows, this app will also have an offline mode and
demonstrate use of the Contentful sync API.

**This is a project created on an internal hackathon as an example of how to use Contentful and React.js. It's not officially supported, so if you find issues or have questions you can let us know via issues but don't expect a quick and prompt response.**

# Usage

Install with

```
npm install
```

Afterwards, copy `config.json.default` to `config.json`.

Run with

```
node server.js
```

or

```
nodemon server.js
```

and visit [http://localhost:3010](http://localhost:3010)

# Using it with your own data

The credentials provided above in config.json are read only and they allow you to access data from a demo Space. If you want to create your own data, you should get a Contentful account and then get a Content Delivery API key from the API section.

# Some (less obvious) things
- node-jsx lets node know about files which contain JSX on the server
  side
- http://andreypopp.viewdocs.io/react-async helps with initializing
  components asynchronously.

# The content structure

This app uses only one content type. It looks like this:

```json
{
  "sys": {
    ...
  },
  "name": "Location",
  "displayField": "name"
  "fields": [
    {
      "name": "Name",
      "id": "name",
      "type": "Text"
    },
    {
      "name": "Type",
      "id": "type",
      "type": "Text"
    },
    {
      "name": "Address",
      "id": "address",
      "type": "Location"
    },
    {
      "name": "Phone number",
      "id": "phoneNumber",
      "type": "Symbol"
    },
    {
      "name": "Email",
      "id": "email",
      "type": "Symbol"
    },
    {
      "name": "URL",
      "id": "url",
      "type": "Symbol"
    },
    {
      "name": "Opening times",
      "id": "openingTimes",
      "type": "Text"
    },
    {
      "name": "Description",
      "id": "description",
      "type": "Text"
    },
    {
      "name": "Rating",
      "id": "rating",
      "type": "Integer"
    },
    {
      "name": "Pictures",
      "id": "pictures",
      "type": "Array",
      "items": {
        "type": "Link",
        "linkType": "Asset",
        "validations": [
          {
            "linkMimetypeGroup": "image"
          }
        ]
      }
    }
  ]
}
```
