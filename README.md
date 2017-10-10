# Include Javascript and Css files in your GitBook

This allows you to add css and javascript files to your gitbook.

Based on the plugin-scripts plugin

### Usage and configuration

```js
{
    "plugins": ["scripts-styles"],
    "pluginsConfig": {
        "scripts-styles": {
            "js": [
                "./myscript.js"
            ],
            "css": [
                "./mystyles.css"
            ]
        }
    }
}
```
