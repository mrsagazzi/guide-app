guide-app
=========

A generic guide app for shop guides

A [React.js](http://facebook.github.io/react/) based app, using [Contentful](https://www.contentful.com/) as a data storage. Renders from
the server on initial load and it renders on the client on subsequent
loads, making use of [react-router-component](andreypopp.viewdocs.io/react-router-component).

Vaguely based on [react quickstart](https://github.com/andreypopp/react-quickstart).

That means it will still (mostly) work if your JS is deactivated.

Uses browserify to serve client side JS.

See the [Contentful Developer Documentation](https://www.contentful.com/developers) to learn more about the API.

When time allows, this app will also have an offline mode and
demonstrate use of the Contentful sync API.

# Usage

Install with

```
npm install
```

Afterwards, copy config.json.default to config.json and set it up with
your API key and Space ID.

Run with

```
node server.js
```

or

```
nodemon server.js
```

# Some (less obvious) things
- node-jsx lets node know about files which contain JSX on the server
  side
- http://andreypopp.viewdocs.io/react-async helps with initializing
  components asynchronously.

# The content structure

This app uses only one content type. It looks like this:

```
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
