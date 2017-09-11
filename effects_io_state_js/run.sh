## Don't forget to modify permissions
## sudo chmod -R 755  run.sh

## Generate executable
idris App.idr -o ./output/app -p effects && ./output/app

## Generate javascript
idris --codegen javascript App.idr -o ./output/app.js -p effects
