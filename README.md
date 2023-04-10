## My Component Library

This is a collection of some React components and UI elements that I use often. They are either styled using [`TailwindCSS`](https://tailwindcss.com/) , [`ChakraUI`](https://chakra-ui.com/) or my own custom CSS.

To use a component, copy the code from `./src/components/<component-dir>/<component-name>` to your project. If it is a Javascript project, delete the type definitions. For example:
```sh
interface ShowcaseItemProps {
  componentName: string;
  mobileResponsive: boolean;
  darkModeToggle: boolean;
}

export const ShowcaseItem: React.FC<ShowcaseItemProps> = ({
  componentName,
  mobileResponsive,
  darkModeToggle,
}) => {
  return (..)
```
becomes
```sh
export const ShowcaseItem = ({
  componentName,
  mobileResponsive,
  darkModeToggle,
}) => {
  return (..)
```

### Buttons 

##### ColorSchemeToggle
*`Chakra`*
- [x] Mobile responsive
- [x] Toggle color mode

![Airbnb](./docs/ColorSchemeToggle1.jpg)

### Cards 

##### AirbnbCard
*`Chakra`*
- [x] Mobile responsive
- [x] Toggle color mode

![Airbnb](./docs/AirbnbCard1.jpg)

##### SocialMediaCard
*`Chakra`*
- [x] Mobile responsive
- [x] Toggle color mode

![Airbnb](./docs/SocialMediaCard.jpg)

### Forms 

##### SimpleCart
*`Chakra`*
- [x] Mobile responsive
- [x] Toggle color mode

![SimpleCart](./docs/SimpleCart1.jpg)

### Layouts 

##### HolyGrail
*`Chakra`*
- [ ] Mobile responsive
- [ ] Toggle color mode

![HolyGrail](./docs/HolyGrail.jpg)

### Navbars 

##### NavbarDividedVertical
*`Chakra`*
- [ ] Mobile responsive
- [x] Toggle color mode

![NavbarDividedVertical](./docs/NavbarDividedVertical.jpg)

##### NavbarDrawer
*`Chakra`*
- [x] Mobile responsive
- [x] Toggle color mode

![NavbarDrawer](./docs/NavbarDrawer.jpg)

##### NavbarLogoBtns
*`Chakra`*
- [ ] Mobile responsive
- [ ] Toggle color mode

![NavbarLogoBtns](./docs/NavbarLogoBtns.jpg)