# flexboxgrid-sass v0.0.1
> Small sass mixins for a full flexbox grid
[**Demo inc**](https://guillaumebreux.github.io/flexboxgrid-sass)


## Getting Started
There is no bower nor npm at the moment, just a sass file that you can copy/past to your project: [Flexboxgrid-sass](https://github.com/guillaumebreux/flexboxgrid-sass/blob/master/scss/_fbgs.scss)

## How to use
| Class name     | Description                                                                                      |
|----------------|--------------------------------------------------------------------------------------------------|
| .flex          | Initiate the grid. This has to be set on a parent element.                                       |
|                | You can use `.flex-BREAKPOINT_NAME` instead to activate the grid at the screen size you see fit. |
|                | Default behavior: Grid has `justify-content: space-between` has default.                         |
| .justify-start | Set the `justify-content`to `flex-start` for a more conventional grid system                     |