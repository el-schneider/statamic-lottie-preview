# Statamic Lottie Preview

> A Statamic addon that previews Lottie animations in your control panel.

![Screenshot](./screenshot.png)

## Features

Support for `.lottie` and `.json` files

## How to Install

You can install this addon via Composer:

``` bash
composer require el-schneider/statamic-lottie-preview
```

## Support for .lottie files

you need to add `"lottie"` to the `additional_uploadable_extensions` array in your `config/statamic/assets.php` file, like so:

```php
'additional_uploadable_extensions' => [
    'lottie',
],
```

## Roadmap

- [x] Add assets browser support
- [ ] Full playback controls for editor view
