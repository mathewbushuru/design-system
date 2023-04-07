## My Component Library

Language: `TypeScript`

Framework: `NextJS`

Styling/UI: `Chakra`

To use a component, copy the code from `./src/components/<component-dir>/<component-name>` to your project. If it is a Javascript project, delete the type definitions. For example:
```sh
type ShowcaseItemProps = {
  componentName: string;
  mobileResponsive: boolean;
  darkModeToggle: boolean;
};

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
- [x] Mobile responsive
- [x] Toggle color mode

![Airbnb](./docs/ColorSchemeToggle1.jpg)

### Cards 

##### AirbnbCard
- [x] Mobile responsive
- [x] Toggle color mode

![Airbnb](./docs/AirbnbCard1.jpg)

##### SocialMediaCard
- [x] Mobile responsive
- [x] Toggle color mode

![Airbnb](./docs/SocialMediaCard.jpg)

### Forms 

##### SimpleCart
- [x] Mobile responsive
- [x] Toggle color mode

![SimpleCart](./docs/SimpleCart1.jpg)

### Layouts 

##### HolyGrail
- [ ] Mobile responsive
- [ ] Toggle color mode

![HolyGrail](./docs/HolyGrail.jpg)

### Navbars 

##### NavbarDrawer
- [x] Mobile responsive
- [x] Toggle color mode

![NavbarDrawer](./docs/NavbarDrawer.jpg)

##### NavbarLogoBtns
- [ ] Mobile responsive
- [ ] Toggle color mode

![NavbarLogoBtns](./docs/NavbarLogoBtns.jpg)