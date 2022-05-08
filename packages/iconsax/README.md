# @mmzmk/iconsax

A small and super fast package for [iconsax](https://github.com/lusaxweb/iconsax) web components with [lit](https://github.com/lit/lit)

## Examples

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>@mmzmk/iconsax</title>
    <script type="module" src="https://cdn.jsdelivr.net/npm/@mmzmk/iconsax/+esm"></script>
    <style>
      mmzmk-iconsax {
        color: red;
        font-size: 24px; /* default */
      }
    </style>
  </head>

  <body>
    <mmzmk-iconsax name="home"></mmzmk-iconsax>
    <mmzmk-iconsax name="home" category="bold"></mmzmk-iconsax>
    <mmzmk-iconsax name="home" category="broken"></mmzmk-iconsax>
    <mmzmk-iconsax name="home" category="bulk"></mmzmk-iconsax>
    <mmzmk-iconsax name="home" category="linear"></mmzmk-iconsax>
    <mmzmk-iconsax name="home" category="outline"></mmzmk-iconsax>
    <mmzmk-iconsax name="home" category="twotone"></mmzmk-iconsax>
  </body>
</html>
```

If the category attribute does not receive a value, its default value is "linear"

```html
<mmzmk-iconsax name="home"></mmzmk-iconsax>
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
|  1  | --mmzmk-iconsax-sm-fs |  18px   | Icon size provided the attribute "size" is equal to "sm" |
|  2  | --mmzmk-iconsax-lg-fs |  32px   | Icon size provided the attribute "size" is equal to "lg" |

But when the attribute does not get a size, the icon size is 24px

### Icon Categories

- bold
- broken
- bulk
- linear (default).
- outline
- twotone
