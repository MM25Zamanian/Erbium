# @erbium/iconsax

A small and super fast package for [iconsax](https://github.com/lusaxweb/iconsax) web components with [lit](https://github.com/lit/lit)

## Examples

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>@erbium/iconsax</title>
    <script type="module" src="https://cdn.jsdelivr.net/npm/@erbium/iconsax/+esm"></script>
    <style>
      er-iconsax {
        color: red;
        font-size: 24px; /* default */
      }
    </style>
  </head>

  <body>
    <er-iconsax name="home"></er-iconsax>
    <er-iconsax name="home" category="bold"></er-iconsax>
    <er-iconsax name="home" category="broken"></er-iconsax>
    <er-iconsax name="home" category="bulk"></er-iconsax>
    <er-iconsax name="home" category="linear"></er-iconsax>
    <er-iconsax name="home" category="outline"></er-iconsax>
    <er-iconsax name="home" category="twotone"></er-iconsax>
  </body>
</html>
```

If the category attribute does not receive a value, its default value is "linear"

```html
<er-iconsax name="home"></er-iconsax>
```

## API

### Attributes

|  #  | attribute | require |     type     |                      description                       |
| :-: | --------- | :-----: | :----------: | :----------------------------------------------------: |
|  1  | name      |   yes   |    string    |                       icon name                        |
|  2  | category  |   no    |    string    | Icon category. Choose from the list. default: "linear" |
|  3  | size      |   no    | "sm" or "lg" |                sm = 18px and lg = 32px                 |

### CSS Variables

|  #  | variable name         | default | description                                              |
| :-: | --------------------- | :-----: | -------------------------------------------------------- |
|  1  | --er-iconsax-sm-fs |  18px   | Icon size provided the attribute "size" is equal to "sm" |
|  2  | --er-iconsax-lg-fs |  32px   | Icon size provided the attribute "size" is equal to "lg" |

But when the attribute does not get a size, the icon size is 24px

### Icon Categories

- bold
- broken
- bulk
- linear (default).
- outline
- twotone
